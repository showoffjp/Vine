import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ruth 4 Chapter Guide — Christian Study",
  description: "A deep guide to Ruth 4 — Boaz redeems the land and Ruth at the city gate, the nearer kinsman steps aside, Boaz and Ruth marry, Obed is born, and the genealogy runs from Perez to David.",
  openGraph: { title: "Ruth 4 Chapter Guide — Vine", description: "A guide to Ruth 4 — Boaz at the city gate, the kinsman-redeemer transaction, the marriage of Boaz and Ruth, the birth of Obed, and the genealogy to David.", images: ["/api/og?title=Ruth+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Ruth 4 Chapter Guide — Vine", description: "A deep guide to Ruth 4 — Boaz redeems Ruth and the land, Obed is born, and the line runs to David.", images: ["/api/og?title=Ruth+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
