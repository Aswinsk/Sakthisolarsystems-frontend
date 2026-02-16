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
    <div
      className="rounded-2xl p-8 md:p-12"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)'
      }}
    >
      {/* Input */}
      <div className="mb-8">
        <label className="block text-base font-medium mb-4 text-[#182954]" style={{ letterSpacing: '-0.01em' }}>
          Enter Your Monthly Electricity Bill
        </label>
        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl font-medium">
            ₹
          </span>
          <input
            type="number"
            className="w-full rounded-xl px-16 py-5 text-xl text-[#182954] font-medium focus:outline-none transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(24, 41, 84, 0.1)',
              letterSpacing: '-0.01em'
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid rgba(187, 31, 44, 0.3)';
              e.target.style.boxShadow = '0 0 0 3px rgba(187, 31, 44, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(24, 41, 84, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
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
        whileHover={{
          y: -2,
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-5 font-bold text-lg rounded-xl transition-all mb-8 disabled:opacity-50"
        style={{
          background: 'linear-gradient(135deg, rgba(187, 31, 44, 0.85), rgba(187, 31, 44, 0.75))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 16px rgba(187, 31, 44, 0.3)',
          color: 'white',
          letterSpacing: '-0.01em'
        }}
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
            <div className="grid grid-cols-2 gap-6 pt-8" style={{ borderTop: '1px solid rgba(24, 41, 84, 0.1)' }}>
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
                  className="text-center p-6 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(24, 41, 84, 0.1)'
                  }}
                >
                  <div className="text-xs text-gray-400 uppercase font-medium mb-3"
                       style={{ letterSpacing: '0.05em' }}>
                    {item.label}
                  </div>
                  <div className="text-4xl font-bold text-[#182954]"
                       style={{ letterSpacing: '-0.03em' }}>
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

      <p className="text-sm text-gray-400 text-center mt-8" style={{ letterSpacing: '-0.01em' }}>
        *Estimates based on average Kerala sunlight conditions and KSEB rates
      </p>
    </div>
  );
}
