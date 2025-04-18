import jwt from "jsonwebtoken"
import prisma from "../config/prisma.js"
const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta_aqui"

export default async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token não fornecido" })
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, JWT_SECRET)

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) return res.status(401).json({ error: "Usuário não encontrado" })

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" })
  }
}
