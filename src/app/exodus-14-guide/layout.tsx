import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Exodus 14 Guide — The Parting of the Red Sea",
  description: "A deep guide to Exodus 14 — Israel trapped between Pharaoh's army and the Red Sea, Moses' declaration that the LORD will fight for them, the parting of the waters, Israel's crossing on dry ground, and the destruction of the Egyptian army.",
  openGraph: { title: "Exodus 14 Guide — Vine", description: "A guide to Exodus 14 — the Red Sea crossing, the LORD fights for Israel, and the great deliverance that became the defining act of God in Israel's history.", images: ["/api/og?title=Exodus+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Exodus 14 Guide — Vine", description: "A deep guide to Exodus 14 — the parting of the Red Sea.", images: ["/api/og?title=Exodus+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
