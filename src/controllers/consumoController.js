const consumos = []

export const registrarConsumo = (req, res) => {
  const { uid, consumo } = req.body

  if (!uid || consumo == null) {
    return res.status(400).json({ erro: "Dados incompletos" })
  }

  consumos.push({ uid, consumo, timestamp: new Date().toISOString() })
  console.log("📝 Consumo registrado:", { uid, consumo })

  res.json({ status: "ok", mensagem: "Consumo registrado com sucesso" })
}


export const listarConsumo = (req, res) => {
  res.json(consumos)
}
