export default function checkSensorLimits(data) {
  let turbidityStatus = "NORMAL"
  if (data.turbidity > 5.0) turbidityStatus = "CRITICAL"
  else if (data.turbidity > 3.0) turbidityStatus = "WARNING"

  let tdsStatus = "NORMAL"
  if (data.tds > 500) tdsStatus = "CRITICAL"
  else if (data.tds < 50) tdsStatus = "WARNING"

  let flowRateStatus = "NORMAL"
  if (data.flowRate > 18) flowRateStatus = "CRITICAL"
  else if (data.flowRate > 15) flowRateStatus = "WARNING"

  return { turbidityStatus, tdsStatus, flowRateStatus }
}
