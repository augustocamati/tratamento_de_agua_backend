import { Router } from "express"
// import { PrismaClient } from "@prisma/client"
import prisma from "../config/prisma.js"

const router = Router()
// const prisma = new PrismaClient()

// GET /api/recargas - Listar todas as recargas formatadas
router.get("/", async (req, res) => {
  try {
    const recargas = await prisma.recarga.findMany({
      include: { cartao: true },
      orderBy: { data: "desc" },
      
    })

   
    res.json(recargas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erro ao buscar recargas" })
  }
})

// POST /api/recargas - Criar uma nova recarga
router.post("/", async (req, res) => {
  try {
    const { cartaoId, quantidade, valor, metodo } = req.body

    const recarga = await prisma.recarga.create({
      data: {
        cartaoId,
        quantidade,
        valor,
        metodo,
      },
    })

    // Atualiza o saldo do cartão
    await prisma.card.update({
      where: { id: cartaoId },
      data: {
        saldo: {
          increment: quantidade,
          
        },
      },
    })

    res.status(201).json(recarga)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erro ao criar recarga" })
  }
})

export default router
