import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Christian Worldview",
  description: "A worldview is the framework through which we interpret everything. The Christian worldview is grounded in a four-act story — Creation, Fall, Redemption, New Creation — and has implications for eve…",
  openGraph: {
    title: "The Christian Worldview — Vine",
    description: "A worldview is the framework through which we interpret everything. The Christian worldview is grounded in a four-act story — Creation, Fall, Redemption, New Creation — and has implications for eve…",
    images: ["/api/og?title=The+Christian+Worldview"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Christian Worldview — Vine",
    description: "A worldview is the framework through which we interpret everything. The Christian worldview is grounded in a four-act story — Creation, Fall, Redemption, New Creation — and has implications for eve…",
    images: ["/api/og?title=The+Christian+Worldview"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
