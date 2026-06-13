import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Catholicism Explained — A Guide",
  description: "Understanding Roman Catholicism — the papacy and apostolic succession, the seven sacraments, the role of Mary and the saints, Scripture and Tradition, purgatory and the afterlife, and how Catholic and Protestant theology differ. A fair, informed overview.",
  openGraph: { title: "Catholicism Explained — Vine", description: "Understanding Roman Catholicism — the papacy, the sacraments, Mary and the saints, Scripture and Tradition.", images: ["/api/og?title=Catholicism+Explained"] },
  twitter: { card: "summary_large_image", title: "Catholicism Explained — Vine", description: "Understanding Roman Catholicism.", images: ["/api/og?title=Catholicism+Explained"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
