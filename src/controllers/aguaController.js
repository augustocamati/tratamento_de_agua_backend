const usuariosPermitidos = {
 "8364EA13": { litros: 10 },
  "138E2D29": { litros: 5.5 },
  "CAFEBABE": { litros: 8 },
}

export const verificarUID = (req, res) => {
  const uid = req.query.uid?.toUpperCase()

  if (!uid || !usuariosPermitidos[uid]) {
    return res
      .status(401)
      .json({ status: "erro", mensagem: "UID inválido ou não autorizado" })
  }
console.log('uid', uid)
  res.json({ status: "ok", litros: usuariosPermitidos[uid.toUpperCase().trim()].litros })
} 
