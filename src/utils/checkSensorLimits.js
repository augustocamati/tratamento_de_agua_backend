export const SensorStatus = {
  NORMAL: "NORMAL",
  WARNING: "WARNING",
  CRITICAL: "CRITICAL",
};

export default function checkSensorLimits(data) {
  let turbidityStatus = SensorStatus.NORMAL;
  if (data.turbidity > 5.0) turbidityStatus = SensorStatus.CRITICAL;
  else if (data.turbidity > 3.0) turbidityStatus = SensorStatus.WARNING;

  let tdsStatus = SensorStatus.NORMAL;
  if (data.tds > 500) tdsStatus = SensorStatus.CRITICAL;
  else if (data.tds < 50) tdsStatus = SensorStatus.WARNING;

  let flowRateStatus = SensorStatus.NORMAL;
  if (data.flowRate > 18) flowRateStatus = SensorStatus.CRITICAL;
  else if (data.flowRate > 15) flowRateStatus = SensorStatus.WARNING;

  return { turbidityStatus, tdsStatus, flowRateStatus };
}
