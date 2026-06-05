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

        {/* Product showcase — framed screenshots of the real tool */}
        <div className="mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-olive-300">
              See it in action
            </span>
            <span className="h-px flex-1 bg-cream/10" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                src: "/dqs-availability.png",
                url: "solvenza.com/daily-quote",
                alt: "The Daily Quote System availability screen, with prices set per commodity size",
                caption: "Set today's prices per size — type a dollar amount, “Market,” or “Call.”",
              },
              {
                src: "/dqs-quote-sheet.png",
                url: "solvenza.com/daily-quote/send",
                alt: "The send screen showing a branded daily quote sheet ready to email to buyers",
                caption: "Pick recipients and send a branded quote sheet in seconds.",
              },
            ].map((shot, i) => (
              <motion.figure
                key={shot.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-cream/15 bg-cream/[0.03] shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1">
                  {/* browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-olive-950/70 border-b border-cream/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
                    <span className="ml-3 rounded-md bg-cream/[0.06] px-3 py-1 text-[10px] tracking-wide text-cream/40">
                      {shot.url}
                    </span>
                  </div>
                  <img src={shot.src} alt={shot.alt} className="block w-full" loading="lazy" />
                </div>
                <figcaption className="mt-4 text-sm text-cream/55 leading-relaxed">
                  {shot.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
