import { PrismaClient } from "..//src/generated/prisma/client.js"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash("123456", 10)

  // Usuários
  const userAdmin = await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      password: hashedPassword,
      name: "Administrador",
      role: "ADMIN",
    },
  })

const card = await prisma.card.create({
  data: {
    uid: "ABC123456",
    proprietario: "João Silva",
    tipo: "Residencial",
    saldo: 250,
    status: "Ativo",
    description: "Cartão de João para consumo doméstico",
  },
})

await prisma.recarga.create({
  data: {
    cartaoId: card.id,
    quantidade: 100,
    valor: 350,
    metodo: "Cartão de Crédito",
  },
})

  const userTech = await prisma.user.create({
    data: {
      name: "Gerente do Posto",
      email: "gerente@gmail.com",
      password: hashedPassword,
      role: "STATION_MANAGER",
    },
  })

  // Estação
  const station = await prisma.station.create({
    data: {
      name: "Estação Central",
      location: "Luanda",
      description: "Posto principal de monitoramento",
      apiKey: "API-ESTACAO-001",
      status: "ONLINE",
      lastReading: new Date(),
    },
  })

  // SensorData
  const sensor1 = await prisma.sensorData.create({
    data: {
      stationId: station.id,
      turbidity: 7.5,
      tds: 450,
      flowRate: 13.2,
      totalFlow: 21.4,
      turbidityStatus: "WARNING",
      tdsStatus: "NORMAL",
      flowRateStatus: "NORMAL",
    },
  })

  const sensor2 = await prisma.sensorData.create({
    data: {
      stationId: station.id,
      turbidity: 3.2,
      tds: 700,
      flowRate: 10.1,
      totalFlow: 25.9,
      turbidityStatus: "NORMAL",
      tdsStatus: "CRITICAL",
      flowRateStatus: "WARNING",
    },
  })

  // Alertas
  await prisma.alert.createMany({
    data: [
      {
        stationId: station.id,
        sensorDataId: sensor1.id,
        type: "WARNING",
        message: "Turbidez acima do limite ideal.",
        status: "PENDING",
      },
      {
        stationId: station.id,
        sensorDataId: sensor2.id,
        type: "CRITICAL",
        message: "TDS em nível crítico!",
        status: "PENDING",
        resolvedAt: new Date(),
        resolvedById: userTech.id,
      },
    ],
  })

  console.log("🌱 Seeds gerados com sucesso!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
