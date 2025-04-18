import prisma from "../config/prisma.js"

export default async function validateApiKey(req, res, next) {
  const { stationId, apiKey } = req.body

  if (!stationId || !apiKey) {
    throw new Error("ID da estação e chave API são obrigatórios")
  }

  try {
    const station = await prisma.station.findFirst({
      where: {
        id: parseInt(stationId),
        apiKey,
      },
    })

    if (!station) {
      throw new Error("Chave API inválida ou estação não encontrada")
    }

    req.station = station
    next()
  } catch (error) {
    console.error("Erro ao validar chave API:", error)
    return res.status(500).json({ error: "Erro ao validar chave API" })
  }
}
