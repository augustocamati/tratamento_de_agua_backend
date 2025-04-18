import express, { json } from "express"
import cors from "cors"
import helmet from "helmet"

import authRoutes from "./routes/authRoutes.js"
import sensorRoutes from "./routes/sensorRoutes.js"

const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

// Rotas
app.use("/api/auth", authRoutes)
app.use("/api/sensors", sensorRoutes)

export default app
