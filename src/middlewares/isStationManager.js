export default function isStationManager(req, res, next) {
  if (req.user.role !== "STATION_MANAGER" && req.user.role !== "ADMIN") {
    return res
      .status(403)
      .json({ error: "Acesso negado. Requer privilégios de gerente de posto." })
  }
  next()
}
