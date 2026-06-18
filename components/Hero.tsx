"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#070f17]">
      <div className="absolute inset-0">
        {/* sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f4356] via-[#122a38] to-[#070f17]" />

        {/* wide atmospheric bloom — slow breath */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.1, 1] }}
          transition={{
            opacity: { duration: 13, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(circle 1000px at 50% 48%, rgba(150,168,120,0.18) 0%, rgba(95,112,57,0.06) 50%, transparent 80%)",
          }}
        />

        {/* the sun — hot core + anamorphic flare streak + mid glow, breathing & drifting */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.2, 1], x: [0, 14, 0] }}
          transition={{
            opacity: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            x: { duration: 23, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 48%",
            background:
              "radial-gradient(ellipse 780px 4px at 50% 48%, rgba(232,240,214,0.5) 0%, transparent 72%), radial-gradient(circle 150px at 50% 48%, rgba(252,253,248,0.6) 0%, transparent 70%), radial-gradient(circle 380px at 50% 48%, rgba(206,216,180,0.3) 0%, rgba(120,140,80,0.06) 66%, transparent 80%)",
          }}
        />

        {/* film grain */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#f4f6f0 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* vignette — frames the light, edges fall to near-black */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 90% at 50% 48%, transparent 30%, rgba(3,8,13,0.82) 100%)",
          }}
        />
      </div>
    </section>
  );
}
