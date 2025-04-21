import { Router } from "express"
import prisma from "../config/prisma.js"
import authenticate from "../middlewares/authenticate.js"
import validateApiKey from "../middlewares/validateApiKey.js"
import checkSensorLimits from "../utils/checkSensorLimits.js"

const router = Router()

router.post("/data", async (req, res) => {
  try {
    const { turbidity, tds, flowRate, totalFlow } = req.body
    const stationId = parseInt(req.body.stationId)

    const { turbidityStatus, tdsStatus, flowRateStatus } = checkSensorLimits({
      turbidity,
      tds,
      flowRate,
    })

    const sensorData = await prisma.sensorData.create({
      data: {
        stationId,
        turbidity,
        turbidityUnit: "NTU",
        turbidityStatus,
        tds,
        tdsUnit: "ppm",
        tdsStatus,
        flowRate,
        flowRateUnit: "L/min",
        flowRateStatus,
        totalFlow,
        totalFlowUnit: "m³",
      },
    })

    await prisma.station.update({
      where: { id: stationId },
      data: {
        lastReading: new Date(),
        status: "ONLINE",
      },
    })

    if (
      turbidityStatus === "CRITICAL" ||
      tdsStatus === "CRITICAL" ||
      flowRateStatus === "CRITICAL"
    ) {
      await prisma.alert.create({
        data: {
          stationId,
          type: "CRITICAL",
          message: "Valores críticos detectados",
          sensorDataId: sensorData.id,
        },
      })

      console.log(`ALERTA CRÍTICO: Estação ${stationId}`)
    }

    res
      .status(201)
      .json({ message: "Dados recebidos com sucesso", data: sensorData })
  } catch (error) {
    console.error("Erro:", error)
    res.status(500).json({ error: "Erro ao processar dados do sensor" })
  }
})

router.get("/data/latest", async (req, res) => {
  try {
    const latestData = await prisma.sensorData.findFirst({
      orderBy: { timestamp: "desc" },
      include: {
        station: {
          select: { name: true, location: true },
        },
      },
    })

    if (!latestData)
      return res.status(404).json({ message: "Nenhum dado encontrado" })

    res.json(latestData)
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter dados mais recentes" })
  }
})

router.get("/data/station/:stationId", async (req, res) => {
  try {
    const stationId = parseInt(req.params.stationId)
    const data = await prisma.sensorData.findMany({
      where: { stationId },
      orderBy: { timestamp: "desc" },
      take: 100,
    })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter dados da estação" })
  }
})

export default router
