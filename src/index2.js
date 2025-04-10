const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3002

// "Banco de dados" em memória
const usuarios = {
  "8364EA13": { litros: 10 },
  "138E2D29": { litros: 5.5 },
  "CAFEBABE": { litros: 8 },
}

// Middleware
app.use(cors())

// Rota GET /api/agua?uid=XXXX
app.get("/api/agua", (req, res) => {
  const uid = req.query.uid

  if (!uid) { 
    console.log('erro ID não recebido')
    return res
      .status(400)
      .json({ status: "erro", mensagem: "UID não fornecido" })
  }
console.log('uid', uid)
  const usuario = usuarios[uid.toUpperCase().trim()]

  if (!usuario) {
    return res
      .status(404)
      .json({ status: "erro", mensagem: "ID não cadastrado" })
  }
console.log('usuario', usuario)
  res.json({ status: "ok", litros: usuario.litros })
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 API de controle de água rodando em http://localhost:${PORT}`)
})
