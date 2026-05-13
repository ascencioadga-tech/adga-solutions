"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Listen",
    summary: "We start where the friction is.",
    body:
      "Before a single line of code, we visit your office. We watch how the team builds a quote, how an order moves, where the bottleneck is. We ask questions until the problem is obvious.",
  },
  {
    number: "02",
    title: "Build",
    summary: "Custom-made, not off-the-shelf.",
    body:
      "Every tool we ship is designed for one company. No generic SaaS. No features you don't need. Just the screens, fields, and flows that fit your operation.",
  },
  {
    number: "03",
    title: "Simplify",
    summary: "If it's not easy, we're not done.",
    body:
      "A salesperson on their tenth quote of the day shouldn't have to think. We sand the interface down until it disappears. Five-minute onboarding is the goal.",
  },
  {
    number: "04",
    title: "Stay",
    summary: "We're here when something changes.",
    body:
      "Your business evolves — new commodities, new customers, new packaging. The tools should too. We stay on, make changes, and keep things running.",
  },
];

export default function How() {
  return (
    <section id="how" className="relative bg-bone py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-olive-700">
            How we work
          </span>
          <h2 className="mt-5 font-serif text-3xl lg:text-4xl font-light text-charcoal leading-[1.1] tracking-tight">
            Understand the problem.{" "}
            <span className="italic text-olive-700">
              Then build the right tool to solve it.
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-px w-16 bg-olive-700 origin-left"
          />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-olive-100 bg-cream p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-olive-300 hover:shadow-xl hover:shadow-olive-900/5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 sm:-right-4 sm:-top-8 font-serif text-[6.5rem] sm:text-[8rem] lg:text-[10rem] leading-none font-light text-olive-100 transition-all duration-700 group-hover:text-olive-200 group-hover:-translate-y-2 group-hover:rotate-[-3deg]"
              >
                {step.number}
              </span>
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-olive-700 origin-top scale-y-0 transition-transform duration-700 ease-out group-hover:scale-y-100"
              />
              <div className="relative">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-olive-600">
                  Step {step.number}
                </span>
                <h3 className="mt-3 font-serif text-2xl lg:text-3xl font-medium text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 font-serif italic text-base text-olive-700">
                  {step.summary}
                </p>
                <p className="mt-3 text-sm text-charcoal-soft leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
