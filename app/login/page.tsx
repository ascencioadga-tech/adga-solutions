"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LOGO = "#5b6b3a";
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1a28]">
      {/* Twilight — same as the landing page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f4356] via-[#142f3d] to-[#0b1c27]" />

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

      {/* Brand — top left, animated olive sunrise, links home */}
      <Link
        href="/"
        className="absolute top-8 left-6 lg:top-10 lg:left-10 z-20 flex items-center gap-3.5 transition-opacity hover:opacity-80"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="h-12 w-12 lg:h-14 lg:w-14 overflow-visible"
          initial="hidden"
          animate="visible"
          aria-hidden
        >
          <motion.line
            x1="14" y1="138" x2="186" y2="138" stroke={LOGO} strokeWidth="8" strokeLinecap="square"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          />
          <motion.line
            x1="40" y1="160" x2="160" y2="160" stroke={LOGO} strokeWidth="4" strokeLinecap="square"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.5 } }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          />
          <motion.path
            d="M 30 120 A 70 70 0 0 1 170 120 Z"
            fill={LOGO}
            style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
            variants={{ hidden: { opacity: 0, scaleY: 0.2, y: 10 }, visible: { opacity: 1, scaleY: 1, y: 0 } }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          />
        </motion.svg>

        <span className="overflow-hidden inline-flex pb-1 -mb-1">
          <motion.span
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
            className="inline-block font-serif text-2xl lg:text-3xl font-semibold tracking-tight leading-none"
            style={{ color: LOGO }}
          >
            Solvenza
          </motion.span>
        </span>
      </Link>

      {/* Login — floats directly on the twilight, no card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        {/* soft legibility halo so the floating text reads over the glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(6,15,24,0.5) 0%, rgba(6,15,24,0) 62%)" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } } }}
          className="relative w-full max-w-sm [text-shadow:0_1px_18px_rgba(6,15,24,0.55)]"
        >
          <motion.h1 variants={fadeUp} className="text-center font-serif text-4xl font-light leading-tight text-[#f4f6f0]">
            Welcome back
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 text-center text-sm text-white/50">
            Sign in to your workspace.
          </motion.p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-12 space-y-9">
            <motion.div variants={fadeUp}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                className="w-full border-b border-white/20 bg-transparent pb-2.5 text-[15px] text-[#f4f6f0] placeholder-[#a8b68a] outline-none transition-colors duration-300 focus:border-[#8b9d6b]"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="relative">
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Password"
                  className="w-full border-b border-white/20 bg-transparent pb-2.5 pr-8 text-[15px] text-[#f4f6f0] placeholder-[#a8b68a] outline-none transition-colors duration-300 focus:border-[#8b9d6b]"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute right-0 bottom-2.5 text-white/35 transition-colors hover:text-white/70"
                >
                  {show ? (
                    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
                      <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.4 5.2A9.5 9.5 0 0 1 12 5c5 0 9 4.5 9 7a12 12 0 0 1-2.2 3M6.3 6.3A12.4 12.4 0 0 0 3 12c0 2.5 4 7 9 7a9.6 9.6 0 0 0 3.3-.6" />
                    </svg>
                  ) : (
                    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-2 flex justify-end">
                <a href="#" className="text-xs text-[#a8b68a] transition-colors hover:text-[#c7d0ad]">
                  Forgot password?
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 text-[15px] font-medium tracking-wide text-white/90 transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  Sign in
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#8b9d6b] transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
