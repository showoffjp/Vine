import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leviticus 19 Guide — Christian Study",
  description: "A deep guide to Leviticus 19 — the Holiness Code chapter that opens with 'Be holy, for I the LORD your God am holy,' commands love of neighbor as yourself, care for the poor through gleaning laws, honest dealings in commerce, and love of the sojourner.",
  openGraph: { title: "Leviticus 19 Guide — Vine", description: "A guide to Leviticus 19 — be holy as God is holy, love your neighbor, care for the poor, honest dealings, and love the sojourner.", images: ["/api/og?title=Leviticus+19+Guide"] },
  twitter: { card: "summary_large_image", title: "Leviticus 19 Guide — Vine", description: "A deep guide to Leviticus 19 — the Holiness Code and the command to love your neighbor as yourself.", images: ["/api/og?title=Leviticus+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
