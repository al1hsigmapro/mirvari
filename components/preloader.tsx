"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <svg width="180" height="180" viewBox="0 0 200 200" className="animate-float">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9c7a2c" />
                  <stop offset="50%" stopColor="#f2e6bd" />
                  <stop offset="100%" stopColor="#d9b85a" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="100" cy="100" r="92" fill="none" stroke="url(#g)" strokeWidth="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <text x="100" y="98" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="44" fill="url(#g)" fontStyle="italic">M</text>
              <text x="100" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="4" fill="#d9b85a">MIRVARI</text>
            </svg>
          </motion.div>
          <div className="mt-10 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gold-shine bg-[length:200%_100%] animate-shimmer"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.5em] text-cream-200/60">
            Зона вашего комфорта
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
