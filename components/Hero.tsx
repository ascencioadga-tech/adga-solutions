"use client";

import { motion } from "framer-motion";

const phrases = [
  { text: "Tailor made", italic: true, accent: true },
  { text: " software solutions", italic: false, accent: false },
  { text: " for produce distribution businesses.", italic: false, accent: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/40" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#4f5d2f 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[-3rem] top-[18%] hidden lg:block drop-shadow-[0_6px_18px_rgba(58,70,34,0.1)]"
        aria-hidden
      >
        <svg width="520" height="320" viewBox="0 0 320 200" fill="none">
          <motion.path
            d="M 40 130 A 80 80 0 0 1 200 130 Z"
            fill="#3a4622"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.line
            x1="10"
            y1="148"
            x2="240"
            y2="148"
            stroke="#3a4622"
            strokeWidth="6"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
          />
          <motion.line
            x1="40"
            y1="170"
            x2="200"
            y2="170"
            stroke="#3a4622"
            strokeWidth="3"
            strokeLinecap="square"
            opacity="0.55"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mr-auto text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal leading-[1.05] tracking-tight"
          >
            {phrases.map((p, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className={`inline ${p.italic ? "italic font-normal" : ""} ${p.accent ? "text-olive-700" : ""}`}
              >
                {p.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-px w-24 bg-olive-700 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mr-auto mt-8 max-w-xl text-base sm:text-lg text-charcoal-soft leading-relaxed"
          >
            We work with produce distributors on the U.S.–Mexico border at
            Nogales. We listen first, learn the day, then build the small,
            practical tools that make the work easier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4"
          >
            <a
              href="#how"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-olive-700 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-olive-800 transition-all duration-300 shadow-lg shadow-olive-700/15 hover:shadow-xl hover:shadow-olive-700/25 hover:-translate-y-0.5"
            >
              See how we work
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-olive-700/80 px-6 py-3.5 text-sm font-semibold text-olive-800 hover:bg-olive-700 hover:text-cream transition-all duration-300"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium text-olive-700/60 uppercase tracking-[0.25em]">
            Scroll
          </span>
          <svg width="18" height="28" viewBox="0 0 20 30" fill="none" className="text-olive-700/50">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor">
              <animate attributeName="cy" values="10;18;10" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
