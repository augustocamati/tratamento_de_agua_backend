-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'STATION_MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "StationStatus" AS ENUM ('ONLINE', 'OFFLINE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "SensorStatus" AS ENUM ('NORMAL', 'WARNING', 'CRITICAL');

-- CreateEnum
CREATE TYPE "AlertType" AS ENUM ('WARNING', 'CRITICAL', 'SYSTEM');

-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('PENDING', 'RESOLVED', 'IGNORED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "apiKey" TEXT NOT NULL,
    "status" "StationStatus" NOT NULL DEFAULT 'OFFLINE',
    "lastReading" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorData" (
    "id" SERIAL NOT NULL,
    "stationId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "turbidity" DOUBLE PRECISION NOT NULL,
    "turbidityUnit" TEXT NOT NULL DEFAULT 'NTU',
    "turbidityStatus" "SensorStatus" NOT NULL DEFAULT 'NORMAL',
    "tds" DOUBLE PRECISION NOT NULL,
    "tdsUnit" TEXT NOT NULL DEFAULT 'ppm',
    "tdsStatus" "SensorStatus" NOT NULL DEFAULT 'NORMAL',
    "flowRate" DOUBLE PRECISION NOT NULL,
    "flowRateUnit" TEXT NOT NULL DEFAULT 'L/min',
    "flowRateStatus" "SensorStatus" NOT NULL DEFAULT 'NORMAL',
    "totalFlow" DOUBLE PRECISION NOT NULL,
    "totalFlowUnit" TEXT NOT NULL DEFAULT 'm³',

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "stationId" INTEGER NOT NULL,
    "sensorDataId" INTEGER,
    "type" "AlertType" NOT NULL,
    "message" TEXT NOT NULL,
    "status" "AlertStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "resolvedById" INTEGER,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Station_apiKey_key" ON "Station"("apiKey");

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_sensorDataId_fkey" FOREIGN KEY ("sensorDataId") REFERENCES "SensorData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
