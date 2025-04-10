import express from "express"
import { verificarUID } from "../controllers/aguaController.js"

const router = express.Router()

router.get("/", verificarUID)

export default router
