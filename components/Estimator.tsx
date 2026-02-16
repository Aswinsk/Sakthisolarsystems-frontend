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
    <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
      {/* Input */}
      <div className="mb-8">
        <label className="block text-base font-medium mb-4 text-[#111111]">
          Enter Your Monthly Electricity Bill
        </label>
        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl font-medium">
            ₹
          </span>
          <input
            type="number"
            className="w-full bg-white border-2 border-gray-200 rounded-xl px-16 py-5 text-xl text-[#111111] font-medium focus:outline-none focus:border-[#0B3D2E] transition-colors"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            min={0}
            placeholder="3000"
          />
        </div>
      </div>

      {/* Button */}
      <motion.button
        onClick={handleCalculate}
        disabled={loading}
        whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(164, 208, 55, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-5 bg-[#A4D037] text-[#111111] font-bold text-lg rounded-xl transition-all mb-8 disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate My Savings"}
      </motion.button>

      {/* Results */}
      <AnimatePresence>
        {res && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-gray-100">
              {[
                { label: "System Size", value: res.recommendedKW, suffix: " kW" },
                { label: "Monthly Generation", value: res.genKWh, suffix: " kWh" },
                { label: "Bill Reduction", value: res.billReductionPct, suffix: "%" },
                { label: "Payback Period", value: res.paybackYears, suffix: " years" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 bg-[#F7F9FB] rounded-xl"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">
                    {item.label}
                  </div>
                  <div className="text-4xl font-bold text-[#0B3D2E]">
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

      <p className="text-sm text-gray-500 text-center mt-8">
        *Estimates based on average Kerala sunlight conditions and KSEB rates
      </p>
    </div>
  );
}
