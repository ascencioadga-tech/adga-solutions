"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="relative bg-olive-900 text-cream py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#faf9f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-300"
            >
              Case study
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight"
            >
              The Daily Quote System.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-cream/80 leading-relaxed text-lg"
            >
              Produce pricing changes every day. Distributors have to send
              fresh quotes to dozens of buyers, with the right brands, the
              right products, and the right prices — fast, accurate, and
              branded.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-cream/80 leading-relaxed text-lg"
            >
              We built one tool. It runs every morning at multiple
              distributors today.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  k: "Problem",
                  v: "Sales reps stitching quotes together in Word, Excel, and email — different format every time, no record of what was sent.",
                },
                {
                  k: "Approach",
                  v: "One screen. Pick recipients. Pick products. Set today's prices. Hit send. The system handles brand themes, formatting, and delivery.",
                },
                {
                  k: "Result",
                  v: "A daily 30-minute task became a 3-minute task. Every quote consistent. Every send logged.",
                },
                {
                  k: "Stack",
                  v: "Supabase auth + Postgres with RLS, Netlify functions for email delivery, plain JS frontend that loads instantly.",
                },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="rounded-xl border border-cream/10 bg-cream/[0.04] backdrop-blur-sm p-6"
                >
                  <div className="text-xs font-semibold tracking-[0.25em] uppercase text-olive-300">
                    {row.k}
                  </div>
                  <div className="mt-3 text-cream/85 leading-relaxed">
                    {row.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
