import { Router } from "express"
import prisma from "../config/prisma.js"

const router = Router()


router.post("/",  async (req, res) => {
  try {
    const { uid, proprietario, status="ativo", saldo=300, description,tipo } = req.body

    const card = await prisma.card.create({
      data: { uid, proprietario,status,saldo, description,tipo },
    })

    res.status(201).json({ message: "Cartão criado com sucesso", card })
  } catch (error) {
    console.error("Erro ao criar cartão:", error)
    res.status(500).json({ error: "Erro ao criar cartão" })
  }
})

router.get("/",  async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
    
      orderBy: { createdAt: "desc" },
    })
    res.json(cards)
  } catch (error) {
    console.error("Erro ao buscar cartões:", error)
    res.status(500).json({ error: "Erro ao buscar cartões", message: error.message })
  }
})

export default router
