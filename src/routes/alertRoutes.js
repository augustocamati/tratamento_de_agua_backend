import {Router} from "express"
import prisma from "../config/prisma.js"
 const router = Router()
// Obter todos os alertas
router.get("/", async (req, res) => {
  try {
    const alerts = await prisma.alert.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        station: { select: { name: true, location: true } },
        sensorData: true,
      },
    })
    res.json(alerts)
  } catch (error) {
    console.error("Erro ao buscar alertas:", error)
    res.status(500).json({ error: "Erro ao buscar alertas" })
  }
})

// Obter alertas por estação
router.get("/station/:stationId", async (req, res) => {
  try {
    const stationId = parseInt(req.params.stationId)
    const alerts = await prisma.alert.findMany({
      where: { stationId },
      orderBy: { createdAt: "desc" },
    })
    res.json(alerts)
  } catch (error) {
    console.error("Erro ao buscar alertas da estação:", error)
    res.status(500).json({ error: "Erro ao buscar alertas da estação" })
  }
})

export default router