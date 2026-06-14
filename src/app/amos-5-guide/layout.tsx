import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Amos 5 Guide — Christian Study",
  description: "A deep guide to Amos 5 — the prophet's funeral lament over Israel, the call to seek the Lord and live, God's rejection of feasts divorced from justice, the command that justice roll down like waters, and the warning about the Day of the LORD.",
  openGraph: { title: "Amos 5 Guide — Vine", description: "A guide to Amos 5 — seek the Lord and live, let justice roll down like waters, and the Day of the LORD.", images: ["/api/og?title=Amos+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Amos 5 Guide — Vine", description: "A deep guide to Amos 5 — justice, righteousness, and the call to seek the Lord.", images: ["/api/og?title=Amos+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
