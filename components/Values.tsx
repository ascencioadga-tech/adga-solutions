"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Local",
    body: "We're on the border. We know produce, we know Nogales, we know how the day actually runs.",
  },
  {
    title: "Custom",
    body: "Every project starts from your operation, not a template. We design around what you do — not the other way around.",
  },
  {
    title: "Simple",
    body: "If a long-tenured employee can't use it in five minutes, it's not done. Software should disappear.",
  },
  {
    title: "Patient",
    body: "We build to last. We answer the phone when something needs changing.",
  },
];

export default function Values() {
  return (
    <section className="relative bg-bone py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-700">
            Why Solvenza
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-[1.05] tracking-tight">
            What we believe.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t-2 border-olive-700 pt-6"
            >
              <h3 className="font-serif text-2xl text-charcoal">{v.title}</h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
