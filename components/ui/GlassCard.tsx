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
      whileHover={hover ? { y: -8 } : undefined}
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
