import { motion } from "framer-motion";
export function Card({ children, tilt=false }: { children: React.ReactNode; tilt?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotateX: tilt ? 3 : 0, rotateY: tilt ? -3 : 0 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="rounded-2xl border p-5 bg-white shadow-soft will-change-transform"
    >
      {children}
    </motion.div>
  );
}
