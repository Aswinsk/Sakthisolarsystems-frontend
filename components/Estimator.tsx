"use client";
import { useState } from "react";
import { estimateSystemFromBill } from "@/lib/calc";
export function Estimator(){
  const [bill,setBill]=useState("3000");
  const [res,setRes]=useState<any>(null);
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <label className="block text-sm mb-1">Your monthly KSEB bill (₹)</label>
      <input type="number" className="w-full border rounded-xl px-3 py-2 mb-3" value={bill} onChange={e=>setBill(e.target.value)} min={0}/>
      <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm" onClick={()=>setRes(estimateSystemFromBill(Number(bill)||0))}>Estimate Savings</button>
      {res && <div className="grid md:grid-cols-4 gap-4 mt-4 text-sm">
        <div className="p-3 rounded-lg bg-black/[.04]">Recommended Size: <b>{res.recommendedKW} kW</b></div>
        <div className="p-3 rounded-lg bg-black/[.04]">Monthly Generation: <b>{res.genKWh} kWh</b></div>
        <div className="p-3 rounded-lg bg-black/[.04]">Bill Reduction: <b>{res.billReductionPct}%</b></div>
        <div className="p-3 rounded-lg bg-black/[.04]">Payback: <b>{res.paybackYears} years</b></div>
      </div>}
      <p className="mt-3 text-xs text-gray-500">* Rough estimates. Site-specific results vary.</p>
    </div>
  );
}
