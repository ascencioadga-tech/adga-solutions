"use client";

import { motion } from "framer-motion";

const profile = [
  {
    num: "01",
    title: "Border distribution centers",
    body: "Companies that take produce across the U.S.–Mexico line at Nogales and move it into the American supply chain.",
  },
  {
    num: "02",
    title: "Family-run operations",
    body: "Multi-generation businesses built on relationships and decades of know-how, run by the same people year after year.",
  },
  {
    num: "03",
    title: "Growers, shippers, brokers",
    body: "From row-crop growers to import brokers, the full pipeline that turns a field in Sonora into a shelf in Ohio.",
  },
  {
    num: "04",
    title: "Year-round operators",
    body: "Teams that can't afford software that gets in the way — every day matters, every quote matters.",
  },
];

export default function Who() {
  return (
    <section id="who" className="relative bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-700"
            >
              Who we work with
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-serif text-3xl lg:text-4xl font-light text-charcoal leading-[1.1] tracking-tight"
            >
              The companies{" "}
              <span className="italic text-olive-700">behind the produce aisle.</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 h-px w-16 bg-olive-700 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base text-charcoal-soft leading-relaxed"
            >
              The U.S.–Mexico border at Nogales is one of the largest points of
              entry for fresh produce in North America. Behind every tomato,
              pepper, and melon on an American shelf is a family-run
              distributor running on decades of relationships, hand-built
              systems, and long hours.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 text-base text-charcoal-soft leading-relaxed"
            >
              We build for them. Not for tech companies — for the people
              actually moving the food.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {profile.map((p, i) => (
                <motion.li
                  key={p.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-olive-100 bg-white px-6 py-6 transition-colors duration-300 hover:border-olive-300"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-3 font-serif text-5xl font-light leading-none text-olive-100 transition-all duration-500 group-hover:text-olive-200 group-hover:-translate-y-0.5"
                  >
                    {p.num}
                  </span>
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-0.5 bg-olive-700 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  />
                  <div className="relative font-serif text-lg text-charcoal">
                    {p.title}
                  </div>
                  <div className="relative mt-3 text-sm text-charcoal-soft leading-relaxed">
                    {p.body}
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 rounded-xl bg-olive-900 px-7 py-6 text-cream"
            >
              <div className="flex items-start gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl leading-none text-olive-300"
                >
                  &ldquo;
                </motion.span>
                <p className="text-cream/85 leading-relaxed text-sm">
                  We sit with you in your office. We learn your day. Then
                  we build the thing that should have always existed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
