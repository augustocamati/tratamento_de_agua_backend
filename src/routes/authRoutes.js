import { Router } from "express"
import { body, validationResult } from "express-validator"
import { hash, compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../config/prisma.js"
import authenticate from "../middlewares/authenticate.js"

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta_aqui"

// Registro
router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("name").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })

    const { name, email, password, role = "USER" } = req.body

    try {
      const existing = await prisma.user.findUnique({ where: { email } })
      if (existing) return res.status(400).json({ error: "Usuário já existe" })

      const hashedPassword = await hash(password, 10)
      const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, role },
      })

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1d",
      })

      res
        .status(201)
        .json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        })
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar usuário" })
    }
  }
)

// Login
router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body

    try {
      const user = await prisma.user.findUnique({ where: { email } })
      if (!user || !(await compare(password, user.password))) {
        return res.status(401).json({ error: "Credenciais inválidas" })
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1d",
      })

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      })
    } catch (error) {
      res.status(500).json({ error: "Erro ao fazer login" })
    }
  }
)

// Perfil
router.get("/me", async (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  })
})

export default router
