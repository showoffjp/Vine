import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Samuel 7 Guide — The Davidic Covenant",
  description: "A deep guide to 2 Samuel 7 — David wants to build God a temple, but God promises instead to build David a house and dynasty. The Davidic covenant establishes an eternal throne and becomes the foundation of Israel's messianic hope fulfilled in Jesus Christ.",
  openGraph: { title: "2 Samuel 7 Guide — Vine", description: "A guide to 2 Samuel 7 — the Davidic covenant, God's promise of an eternal throne, and David's prayer of worship in response.", images: ["/api/og?title=2+Samuel+7+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 7 Guide — Vine", description: "A deep guide to 2 Samuel 7 — the Davidic covenant and eternal throne.", images: ["/api/og?title=2+Samuel+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
