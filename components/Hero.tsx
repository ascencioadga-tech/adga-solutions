"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f1f3e6]">
      <div className="absolute inset-0">
        {/* light sage field — brighter at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6ec] via-[#dde4c6] to-[#f4f6ec]" />

        {/* wide soft olive haze — slow breath */}
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
              "radial-gradient(circle 1000px at 50% 48%, rgba(79,93,47,0.16) 0%, rgba(47,55,28,0.06) 50%, transparent 80%)",
          }}
        />

        {/* the deep olive orb — core + anamorphic streak + mid, breathing & drifting */}
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
              "radial-gradient(ellipse 780px 4px at 50% 48%, rgba(42,51,24,0.42) 0%, transparent 72%), radial-gradient(circle 150px at 50% 48%, rgba(31,38,17,0.64) 0%, transparent 70%), radial-gradient(circle 380px at 50% 48%, rgba(58,70,34,0.36) 0%, rgba(95,112,57,0.1) 66%, transparent 80%)",
          }}
        />

        {/* fine grain — deep olive flecks on the sage field */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#1f2611 0.6px, transparent 0.6px)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* inverse vignette — lifts the edges to light sage */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 92% at 50% 48%, transparent 30%, rgba(244,246,236,0.74) 100%)",
          }}
        />
      </div>
    </section>
  );
}
