"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { estimateSystemFromBill } from "@/lib/calc";
import { Counter } from "@/components/ui/Counter";

export function Estimator() {
  const [bill, setBill] = useState("3000");
  const [res, setRes] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      setRes(estimateSystemFromBill(Number(bill) || 0));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-8">
      {/* Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-700">
          Monthly Electricity Bill
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            ₹
          </span>
          <input
            type="number"
            className="w-full bg-white border border-gray-300 rounded px-12 py-4 text-lg text-gray-900 focus:outline-none focus:border-[#182954] transition-colors"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            min={0}
            placeholder="3000"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleCalculate}
        disabled={loading}
        className="w-full py-4 bg-[#BB1F2C] text-white font-semibold rounded hover:bg-[#892238] transition-colors mb-6 disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate Savings"}
      </button>

      {/* Results */}
      <AnimatePresence>
        {res && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {[
                { label: "System Size", value: res.recommendedKW, suffix: " kW" },
                { label: "Monthly Generation", value: res.genKWh, suffix: " kWh" },
                { label: "Bill Reduction", value: res.billReductionPct, suffix: "%" },
                { label: "Payback Period", value: res.paybackYears, suffix: " years" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {item.label}
                  </div>
                  <div className="text-3xl font-bold text-[#182954]">
                    <Counter
                      to={item.value}
                      duration={1.5}
                      suffix={item.suffix}
                      decimals={item.suffix === " years" ? 1 : 0}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-gray-500 text-center mt-6">
        Estimates based on average Kerala conditions
      </p>
    </div>
  );
}
