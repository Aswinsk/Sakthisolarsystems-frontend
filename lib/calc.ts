export function estimateSystemFromBill(monthlyBillINR: number) {
  const avgTariff = 7;
  const monthlyKWh = monthlyBillINR / avgTariff;
  const recommendedKW = Math.max(1, Math.round((monthlyKWh / 120) * 10) / 10);
  const genKWh = Math.round(recommendedKW * 120);
  const billReductionPct = Math.min(95, Math.round((genKWh / Math.max(1, monthlyKWh)) * 100));
  const capexPerKW = 65000;
  const paybackYears = Math.max(2.5, Math.round(((recommendedKW * capexPerKW) / (genKWh * avgTariff * 12)) * 10) / 10);
  return { recommendedKW, genKWh, billReductionPct, paybackYears };
}
