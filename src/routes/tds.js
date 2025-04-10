import express from "express"
import { registrarTDS, listarTDS } from "../controllers/tdsController.js"

const router = express.Router()

router.post("/", registrarTDS)
router.get("/", listarTDS)

export default router
