import express, { json } from "express"
import cors from "cors"
import helmet from "helmet"

import authRoutes from "./routes/authRoutes.js"
import sensorRoutes from "./routes/sensorRoutes.js"
import alertRoutes from "./routes/alertRoutes.js"
import cardRoutes from "./routes/cardRoutes.js"

const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

// Rotas
// router.use("/auth", authRoutes)
// router.use("/sensors", sensorRoutes)
// router.use("/stations", stationRoutes)
// router.use("/reports", reportRoutes)
app.get("/", (req, res) => {
  res.json({status:"ok",message:"API funcionando na Vercel!"})
})
app.use("/api/cards", cardRoutes)
app.use("/api/alerts", alertRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/sensors", sensorRoutes)

export default app
