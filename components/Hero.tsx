"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#f0f0f0] text-[#3a4622]">
      {/* ---- masthead ---- */}
      <header className="relative z-20 flex items-center justify-between px-7 pt-7 lg:px-14 lg:pt-9">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 200 200" className="h-[35px] w-[35px]" aria-hidden>
            <defs>
              <clipPath id="sv-horizon">
                <rect x="0" y="0" width="200" height="134" />
              </clipPath>
            </defs>

            {/* the sun rises from behind the horizon */}
            <g clipPath="url(#sv-horizon)">
              <motion.path
                d="M 30 120 A 70 70 0 0 1 170 120 Z"
                fill="#3a4622"
                initial={reduce ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.35, ease: EASE }}
              />
            </g>

            {/* the horizon draws itself */}
            <motion.line
              x1="14"
              y1="138"
              x2="186"
              y2="138"
              stroke="#3a4622"
              strokeWidth="8"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            />
            <motion.line
              x1="40"
              y1="160"
              x2="160"
              y2="160"
              stroke="#3a4622"
              strokeWidth="4"
              initial={reduce ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            />
          </svg>

          <motion.span
            className="font-serif text-[22px] font-semibold tracking-tight text-[#3a4622]"
            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.85, ease: EASE }}
          >
            Solvenza
          </motion.span>
        </Link>
      </header>

      {/* ---- the statement + the film ---- */}
      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-14 px-7 pb-[8vh] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20 lg:px-14 lg:pb-[6vh]">
        <div className="flex flex-col lg:self-center">
        <motion.h1
          className="max-w-[24ch] font-sans text-[clamp(26px,3.2vw,44px)] font-medium leading-[1.16] tracking-[-0.022em] text-[#3a4622]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
        >
          Every produce house runs the same software. None of it was built for
          any of them.
        </motion.h1>

        <div className="mt-9 max-w-[46ch] space-y-[6px] text-[14px] leading-[1.6] tracking-[-0.004em] text-[#5f7039] lg:text-[15px]">
          {[
            "Building a system for one company used to be indefensible.",
            "AI ended that.",
            "We build yours from scratch, in months, and you own it outright.",
          ].map((line, i) => (
            <motion.p
              key={i}
              className={i === 1 ? "font-medium text-[#3a4622]" : undefined}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5 + i * 0.16, ease: EASE }}
            >
              {line}
            </motion.p>
          ))}
        </div>
        </div>

        {/* the film — placeholder until the cut is ready */}
        <motion.div
          className="lg:mr-[5%] lg:ml-auto lg:mt-[22vh] lg:w-full lg:max-w-[506px]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9, ease: EASE }}
        >
          <div className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-gradient-to-br from-[#33401f] to-[#171d0d] shadow-[0_40px_90px_-45px_rgba(31,38,17,0.6)] ring-1 ring-inset ring-[#3a4622]/30">
            {/* faint horizon, echoing the mark */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#e2e7ce]/12" />

            {/* a slow gleam crossing the dark screen */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
              style={{ background: "linear-gradient(100deg, transparent, rgba(226,231,206,0.09), transparent)" }}
              initial={{ x: "-80%" }}
              animate={reduce ? { x: "-80%" } : { x: ["-80%", "460%"] }}
              transition={{ duration: 9, delay: 3, repeat: Infinity, repeatDelay: 6.5, ease: "easeInOut" }}
            />

            {/* vignette — light pools at center, edges fall to black */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(12,15,7,0.55))" }}
            />

            {/* hover lifts the screen a touch */}
            <div className="pointer-events-none absolute inset-0 bg-[#e2e7ce]/0 transition-colors duration-700 group-hover:bg-[#e2e7ce]/[0.05]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                viewBox="0 0 64 64"
                className="h-14 w-14"
                style={{ transformOrigin: "center" }}
                aria-hidden
                animate={reduce ? undefined : { scale: [1, 1.055, 1] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e7ce" strokeWidth="1.1" opacity="0.5" />
                <path d="M 26.5 22.5 L 43 32 L 26.5 41.5 Z" fill="#e2e7ce" opacity="0.92" />
              </motion.svg>
            </div>
          </div>

          <div className="mt-3.5 flex items-baseline justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#5f7039]">
              The system, running
            </p>
            <p className="text-[11px] tracking-[0.08em] text-[#5f7039]/60">90 sec</p>
          </div>
        </motion.div>
      </div>

      {/* ---- the anchor ---- */}
      <motion.footer
        className="relative z-10 px-7 pb-9 lg:px-14 lg:pb-12"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.1, ease: EASE }}
      >
        <div className="mb-4 w-10 border-t border-[#3a4622]/25" />
        <p className="max-w-[42ch] text-[13.5px] leading-[1.65] text-[#5f7039]">
          Nothing here is a mockup. A complete system — receiving, sales, daily
          quotes, grower settlements — is built and running today.
        </p>
        <a
          href="mailto:alberto@adgascencio.com"
          className="mt-3 inline-block text-[13.5px] font-medium text-[#3a4622] underline decoration-[#3a4622]/25 decoration-1 underline-offset-[5px] transition-colors hover:decoration-[#3a4622]"
        >
          Ask to see it running
        </a>
      </motion.footer>
    </section>
  );
}
