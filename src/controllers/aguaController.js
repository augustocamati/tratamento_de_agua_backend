const usuariosPermitidos = {
  A1B2C3D4: 5.0,
  F4E3D2C1: 3.5,
}

export const verificarUID = (req, res) => {
  const uid = req.query.uid?.toUpperCase()

  if (!uid || !usuariosPermitidos[uid]) {
    return res
      .status(401)
      .json({ status: "erro", mensagem: "UID inválido ou não autorizado" })
  }

  res.json({ status: "ok", litros: usuariosPermitidos[uid] })
} 
