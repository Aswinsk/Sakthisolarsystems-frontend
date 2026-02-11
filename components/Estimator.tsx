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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 border border-zinc-800 rounded p-8 max-w-2xl mx-auto"
    >
      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-white">
          Monthly Electricity Bill
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            ₹
          </span>
          <input
            type="number"
            className="w-full bg-[#0B1220] border border-zinc-700 rounded px-12 py-4 text-lg text-white focus:border-white focus:outline-none transition-colors"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            min={0}
            placeholder="3000"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <motion.button
        onClick={handleCalculate}
        disabled={loading}
        whileHover={{ backgroundColor: loading ? "#FFFFFF" : "#BB1F2C" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[#BB1F2C] text-white font-semibold rounded transition-all mb-6 disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate Savings"}
      </motion.button>

      {/* Results Section */}
      <AnimatePresence>
        {res && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4 pt-6 border-t border-zinc-800">
              {[
                {
                  label: "System Size",
                  value: res.recommendedKW,
                  suffix: " kW"
                },
                {
                  label: "Monthly Generation",
                  value: res.genKWh,
                  suffix: " kWh"
                },
                {
                  label: "Bill Reduction",
                  value: res.billReductionPct,
                  suffix: "%"
                },
                {
                  label: "Payback Period",
                  value: res.paybackYears,
                  suffix: " years"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0B1220] border border-zinc-800 p-4 rounded"
                >
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-white">
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

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Estimates based on average Kerala conditions. Actual results may vary.
      </p>
    </motion.div>
  );
}

