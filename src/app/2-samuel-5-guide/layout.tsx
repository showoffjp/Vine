import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Samuel 5 Chapter Guide – David Anointed King Over All Israel | The Vine",
  description: "A deep guide to 2 Samuel 5 — David anointed king over all Israel at Hebron, his conquest of Jerusalem making it the City of David, and his two victories over the Philistines through divine guidance, including the sign of marching in the tops of the balsam trees.",
  openGraph: { title: "2 Samuel 5 Chapter Guide – The Vine", description: "David anointed king, Jerusalem conquered, and the Philistines defeated through divine strategy. A guide to 2 Samuel 5.", images: ["/api/og?title=2+Samuel+5+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 5 Chapter Guide – The Vine", description: "A deep guide to 2 Samuel 5 — David anointed over all Israel, the City of David, and victories over the Philistines.", images: ["/api/og?title=2+Samuel+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
