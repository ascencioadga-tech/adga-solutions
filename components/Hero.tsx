"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f1f3e6]">
      <div className="absolute inset-0">
        {/* light sage field — brighter at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6ec] via-[#dde4c6] to-[#f4f6ec]" />

        {/* wide soft olive haze — slow breath for depth */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.18, 1] }}
          transition={{
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(circle 1040px at 50% 48%, rgba(79,93,47,0.18) 0%, rgba(47,55,28,0.06) 50%, transparent 80%)",
          }}
        />

        {/* the olive orb — deep & defined, with a pronounced grow / shrink */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.78 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.78, 1.34, 0.78], x: [0, 16, 0] }}
          transition={{
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            x: { duration: 24, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(ellipse 840px 5px at 50% 48%, rgba(31,38,17,0.5) 0%, transparent 72%), radial-gradient(circle 170px at 50% 48%, rgba(20,26,14,0.8) 0%, transparent 66%), radial-gradient(circle 410px at 50% 48%, rgba(42,51,24,0.42) 0%, rgba(79,93,47,0.1) 62%, transparent 80%)",
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
              "radial-gradient(115% 92% at 50% 48%, transparent 28%, rgba(244,246,236,0.78) 100%)",
          }}
        />
      </div>
    </section>
  );
}
