const historicoTDS = []

export const registrarTDS = (req, res) => {
  const { tds, timestamp } = req.body

  if (!tds) {
    return res.status(400).json({ erro: "TDS não fornecido" })
  }

  const registro = {
    tds,
    timestamp: timestamp || new Date().toISOString(),
  }

  historicoTDS.push(registro)
  console.log("💾 TDS registrado:", registro)

  res.json({ status: "ok", mensagem: "TDS salvo" })
}

export const listarTDS = (req, res) => {
  res.json(historicoTDS)
}
