import type { Viewport } from "next";

// The portal stays dark, so its mobile chrome should too (overrides the
// light root theme-color for the /login route).
export const viewport: Viewport = {
  themeColor: "#0b1a28",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
