import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import aguaRoutes from "./routes/agua.js"
import consumoRoutes from "./routes/consumo.js"
import tdsRoutes from "./routes/tds.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/agua", aguaRoutes)
app.use("/api/consumo", consumoRoutes)
app.use("/api/tds", tdsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
