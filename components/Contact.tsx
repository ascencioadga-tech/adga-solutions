"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-olive-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-700"
        >
          Start a conversation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] tracking-tight"
        >
          Tell us what&rsquo;s{" "}
          <span className="italic text-olive-700">slowing you down.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-charcoal-soft leading-relaxed"
        >
          A landing page, a quote tool, an inventory screen, an idea you keep
          meaning to write down. Send us a message — we&rsquo;ll come by, sit
          down with you, and figure out what&rsquo;s worth building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="mailto:alberto@adgascencio.com"
            className="group rounded-2xl border border-olive-200 bg-cream p-6 text-left hover:border-olive-400 hover:bg-olive-50/50 transition-all duration-300"
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-600">
              Email
            </div>
            <div className="mt-3 font-serif text-xl text-charcoal break-all">
              alberto@adgascencio.com
            </div>
            <div className="mt-3 text-sm text-charcoal-soft">
              We answer within a business day.
            </div>
          </a>
          <a
            href="tel:+14806694640"
            className="group rounded-2xl border border-olive-200 bg-cream p-6 text-left hover:border-olive-400 hover:bg-olive-50/50 transition-all duration-300"
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-600">
              Phone
            </div>
            <div className="mt-3 font-serif text-xl text-charcoal">
              (480) 669-4640
            </div>
            <div className="mt-3 text-sm text-charcoal-soft">
              Call or text — we&rsquo;ll pick up.
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="mailto:alberto@adgascencio.com"
            className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-8 py-4 text-base font-semibold text-cream hover:bg-olive-800 transition-all duration-300 shadow-lg shadow-olive-700/15"
          >
            Send the first message
            <svg
              className="h-4 w-4"
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
        </motion.div>
      </div>
    </section>
  );
}
