"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b1a28]">
      {/* Twilight — the sun mark, become the environment */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f4356] via-[#142f3d] to-[#0b1c27]" />

        {/* glow — centered, grows and diminishes */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.18, 1] }}
          transition={{
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 52%",
            background:
              "radial-gradient(circle 440px at 50% 52%, rgba(244,246,240,0.5) 0%, rgba(168,182,138,0.30) 34%, rgba(95,112,57,0.12) 62%, rgba(11,26,40,0) 100%)",
          }}
        />

        <div className="absolute left-0 right-0 top-[55%] h-px bg-[#a8b68a]/30" />
        <div className="absolute left-0 right-0 top-[58%] h-px bg-white/12" />

        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#f4f6f0 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081620]/60 via-transparent to-transparent" />
      </div>

      {/* Client login — refined glass, set in from the edge */}
      <Link
        href="/login"
        className="group absolute top-8 right-8 lg:top-10 lg:right-16 z-10 inline-flex items-center gap-2 px-1 py-1 text-[13px] font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
      >
        Client Login
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </section>
  );
}
