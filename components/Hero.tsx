"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#f0f0f0] text-[#1f2611]">
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
    </section>
  );
}
