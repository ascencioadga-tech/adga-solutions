"use client";

type Brand = { name: string; icon: React.ReactNode };

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="currentColor"
    aria-hidden
  >
    {children}
  </svg>
);

const stack: Brand[] = [
  {
    name: "Next.js",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.4 7.2h1.2v9.6H8.4V7.2zm1.05 0h1.4l5.1 7.5V7.2h1.15v9.6h-1.4l-5.1-7.5v.05L9.45 7.2z" />
      </Icon>
    ),
  },
  {
    name: "React",
    icon: (
      <Icon>
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </Icon>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <Icon>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path
          d="M11.9 13.4v6.1h-1.7v-6.1H8V12h6v1.4h-2.1zM15.2 18.8c.4.7 1.2 1.1 2.2 1.1 1.4 0 2.4-.8 2.4-2.1 0-1.2-.7-1.8-2-2.3l-.4-.2c-.7-.3-1-.5-1-.9 0-.4.3-.7.8-.7s.8.2 1.1.7l1.3-.8c-.5-.9-1.3-1.3-2.4-1.3-1.4 0-2.4.9-2.4 2.1 0 1.2.7 1.7 1.9 2.2l.4.2c.7.3 1.2.5 1.2 1 0 .5-.4.8-1 .8-.7 0-1.1-.4-1.5-1l-1.4.7z"
          fill="var(--color-cream)"
        />
      </Icon>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Icon>
        <path d="M12 5.4c-2.7 0-4.4 1.4-5.1 4.1 1-1.4 2.2-1.9 3.6-1.5 1.5.4 1.7 1.6 2.6 2.1 1.5.8 2.8.4 3.9-1-1 1.4-2.2 1.9-3.6 1.5-1.5-.4-1.7-1.6-2.6-2.1-1.5-.8-2.8-.4-3.9 1 .9 1.4 2.2 1.9 3.6 1.5 1.5-.4 1.7-1.6 2.6-2.1 1.5-.8 2.8-.4 3.9 1-.7 2.7-2.4 4.1-5.1 4.1-1.4 0-2.5-.4-3.2-1.1-.4-.4-.7-.9-.9-1.4-.2.5-.5 1-.9 1.4-.7.7-1.8 1.1-3.2 1.1C2.7 14 1 12.6.3 9.9c1 1.4 2.2 1.9 3.6 1.5 1.5-.4 1.7-1.6 2.6-2.1.7-.4 1.4-.5 2.2-.4 1.2.2 1.5 1.4 2.4 1.9 1.5.8 2.8.4 3.9-1-1 1.4-2.2 1.9-3.6 1.5-1.5-.4-1.7-1.6-2.6-2.1C7.3 8.8 6 9.2 4.9 10.6 5.8 8 7.5 6.6 10.2 6.6c1.4 0 2.5.4 3.2 1.1.4.4.7.9.9 1.4.2-.5.5-1 .9-1.4.7-.7 1.8-1.1 3.2-1.1z" />
      </Icon>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <Icon>
        <path d="M13.8 1.7c-.6-.7-1.8-.3-1.8.6V10h7.3c1 0 1.5 1.2.9 1.9l-9.8 11.4c-.6.7-1.8.3-1.8-.6V14H1.3c-1 0-1.5-1.2-.9-1.9L9.5 1.7z" />
      </Icon>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <Icon>
        <path
          d="M12 1.6c-3.1 0-5.4.7-6.7 2-1.4-.5-3-.6-3.7.1-.6.6-.8 1.7-.2 3.2.4 1.1 1 2.3 1.7 3.3-.4 1-.6 2-.6 3 0 4.4 4.4 9.2 9.5 9.2 3.4 0 5.5-1.9 6.5-3.6.4-.7 1-2.6 1.4-4.2.1-.7.2-1.5.3-2 0-.2 0-.4 0-.6.3-.4.5-.8.5-1.3 0-1.6-1.8-3.2-3.8-3.5-1.3-1.9-3-3.6-4.9-3.6zm.1 1.6c1.6 0 3 1.5 4.1 3.4-.1 0-.3 0-.4 0-.5 0-.9.1-1.4.3-.4.2-.7.4-.7.5-.1.1-.1.2-.1.3 0 .1.1.3.2.5.1.2.2.5.4.7.2.2.4.5.6.7.2.2.5.3.6.4.2 0 .3 0 .5 0 .2 0 .3-.1.4-.2 0 .8-.1 1.7-.3 2.6-.3 1.3-.7 2.7-1.1 3.5-.4.7-1.4 2.2-3.6 2.2-3.5 0-6.6-3.7-6.6-6.8 0-3.7 2.7-5.5 5.4-5.5h.7c.2.4.3.8.4 1.2-.7 0-1.2.3-1.6.8-.4.5-.5 1.2-.5 1.9 0 1.4.5 2.6 1.2 3.4.7.8 1.6 1.2 2.5 1.2.4 0 .8-.2 1-.5.3-.4.4-.9.4-1.4 0-.7-.2-1.4-.5-1.9-.3-.5-.7-.8-1-.8h-.1c-.2 0-.4.2-.4.4 0 .2.1.4.4.6.1.1.3.3.4.5.1.2.2.5.2.7 0 .3-.1.4-.2.5 0 0-.1 0-.1 0-.4 0-1-.3-1.6-.9-.5-.7-.9-1.6-.9-2.7 0-.6.1-1.1.4-1.4.3-.3.7-.5 1.2-.5.7 0 1.4.3 1.8.7zm-7.5.4c.5 0 1 .1 1.3.3-1.1 1-1.7 2.7-1.7 4.7 0 .7.1 1.4.3 2.1-.5-.7-.9-1.4-1.2-2.2-.4-1.1-.6-2.2-.5-3.1.1-1 .4-1.6.8-1.8.2-.1.5-.1.7-.1z"
        />
      </Icon>
    ),
  },
  {
    name: "Netlify",
    icon: (
      <Icon>
        <path d="M16.6 14.6h-.1l-1.5-1.5-3.8 3.8v.8h2.4l3-3.1zM8 14.6L4.9 17.7h2.4l3.8-3.8-1.5-1.5h-1l-.6.2zm14.6-3l-3.1-3.1-.8.8 3.1 3.1zM8.2 8.5L5.1 5.4l-.8.8 3.1 3.1zm2.9 1.6h-.5l-1.5 1.5v.5l1.5 1.5h.5l1.5-1.5v-.5zm6 4.3h-.8l-.7-.7v-.2l2-2 .8.8zm.5-7.5l-1.5-1.5h-.8l-2 2v.2l.7.7h.8l2 2 1.5-1.5zm-12-1.5L4.1 6.9 5.6 8.4l1.5-1.5zm14 7.5l-3-3-.8.8 3 3z" />
      </Icon>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <Icon>
        <polygon points="12,3 22,20 2,20" />
      </Icon>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <Icon>
        <path d="M4 2h16v6h-8L4 2zm0 6h8l8 6H4V8zm0 6h8v8L4 14z" />
      </Icon>
    ),
  },
];

export default function Marquee() {
  const loop = [...stack, ...stack];
  return (
    <section className="relative bg-cream py-10 lg:py-16 border-y border-olive-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-7 lg:mb-10 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-olive-200" />
        <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-olive-700/70">
          Built with the modern toolkit
        </span>
        <span className="h-px w-10 bg-olive-200" />
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14 text-olive-800/75">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3"
              aria-label={item.name}
            >
              {item.icon}
              <span className="font-sans text-[15px] font-medium tracking-tight whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
