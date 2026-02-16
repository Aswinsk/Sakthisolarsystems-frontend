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
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{
        y: -2,
        boxShadow: isPrimary
          ? "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
          : "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 24px rgba(187, 31, 44, 0.12)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-xl font-medium transition-all ${className}`}
      style={{
        background: isPrimary
          ? 'linear-gradient(135deg, rgba(187, 31, 44, 0.85), rgba(187, 31, 44, 0.75))'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4))',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: isPrimary ? '1px solid rgba(255, 255, 255, 0.2)' : '1.5px solid rgba(24, 41, 84, 0.3)',
        boxShadow: isPrimary
          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 16px rgba(187, 31, 44, 0.3)'
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 4px 16px rgba(24, 41, 84, 0.08)',
        color: isPrimary ? 'white' : '#182954',
        letterSpacing: '-0.01em'
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
