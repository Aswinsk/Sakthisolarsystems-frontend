"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  hover = true,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? {
        y: -4,
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 12px 32px rgba(24, 41, 84, 0.12)"
      } : undefined}
      className={`rounded-2xl p-8 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
