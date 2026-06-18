"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f4f1e8]">
      <div className="absolute inset-0">
        {/* light field — brighter at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ee] via-[#e6e1d2] to-[#f8f5ee]" />

        {/* wide soft dark haze — slow breath */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.1, 1] }}
          transition={{
            opacity: { duration: 13, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(circle 1000px at 50% 48%, rgba(42,51,24,0.14) 0%, rgba(31,38,17,0.05) 50%, transparent 80%)",
          }}
        />

        {/* the dark orb — deep core + anamorphic streak + mid, breathing & drifting */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.2, 1], x: [0, 14, 0] }}
          transition={{
            opacity: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            x: { duration: 23, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(ellipse 780px 4px at 50% 48%, rgba(26,31,20,0.4) 0%, transparent 72%), radial-gradient(circle 150px at 50% 48%, rgba(18,23,13,0.62) 0%, transparent 70%), radial-gradient(circle 380px at 50% 48%, rgba(35,43,20,0.34) 0%, rgba(95,112,57,0.08) 66%, transparent 80%)",
          }}
        />

        {/* fine grain — dark flecks on the light field */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#1f2611 0.6px, transparent 0.6px)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* inverse vignette — lifts the edges to light */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 92% at 50% 48%, transparent 30%, rgba(250,248,241,0.72) 100%)",
          }}
        />
      </div>
    </section>
  );
}
