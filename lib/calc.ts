export function estimateSystemFromBill(b:number){
  const t=7, m=b/t;
  const r=Math.max(1,Math.round((m/120)*10)/10);
  const g=Math.round(r*120);
  const p=Math.min(95,Math.round((g/Math.max(1,m))*100));
  const c=65000;
  const y=Math.max(2.5,Math.round(((r*c)/(g*t*12))*10)/10);
  return { recommendedKW:r, genKWh:g, billReductionPct:p, paybackYears:y };
}
