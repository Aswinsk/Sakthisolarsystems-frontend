"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function GradientButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`gradient-bg text-white px-6 py-3 rounded-xl shadow-glow font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
