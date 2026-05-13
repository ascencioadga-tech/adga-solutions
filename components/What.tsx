"use client";

import { motion } from "framer-motion";

const offerings = [
  {
    tag: "01 — Landing Pages",
    title: "Modern sites for serious businesses.",
    body:
      "Most distributor websites haven't been touched in fifteen years. We build fast, mobile-first sites that look as professional as the operation behind them — and that an internal team can point a buyer to without apologizing.",
    bullets: [
      "Next.js + Tailwind, static-exported for speed",
      "Hosted on Netlify, deployed in days",
      "Designed around your products and people",
      "Mobile-first, accessible, image-rich",
    ],
  },
  {
    tag: "02 — Custom Software",
    title: "Internal tools nobody else builds.",
    body:
      "Quote builders, recipient lists, daily pricing flows, brand management, login portals, inventory views. The internal screens that don't fit any SaaS — because they were never supposed to. We build them.",
    bullets: [
      "Supabase-backed auth and storage",
      "Row-level security by default",
      "One screen for sales reps, another for ops",
      "Daily-use flows that finish in seconds",
    ],
  },
];

export default function What() {
  return (
    <section id="what" className="relative bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-700">
            What we build
          </span>
          <h2 className="mt-5 font-serif text-3xl lg:text-4xl font-light text-charcoal leading-[1.1] tracking-tight">
            Two things.{" "}
            <span className="italic text-olive-700">Both made for you.</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-px w-16 bg-olive-700 origin-left"
          />
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {offerings.map((o, i) => (
            <motion.article
              key={o.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-olive-200 bg-bone p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-olive-400 hover:shadow-2xl hover:shadow-olive-900/8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-olive-100/0 transition-all duration-700 group-hover:bg-olive-100/60"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-6 top-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
              >
                <svg className="h-5 w-5 text-olive-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              <div className="relative">
                <div className="text-[10px] font-semibold tracking-[0.28em] uppercase text-olive-600">
                  {o.tag}
                </div>
                <h3 className="mt-4 font-serif text-2xl lg:text-3xl font-medium text-charcoal leading-tight">
                  {o.title}
                </h3>
                <p className="mt-4 text-sm text-charcoal-soft leading-relaxed">
                  {o.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {o.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: 0.4 + bi * 0.06 }}
                      className="flex items-start gap-3 text-sm text-charcoal-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-600" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
