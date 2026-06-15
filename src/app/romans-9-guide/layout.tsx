import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 9 Chapter Guide – Election, Potter and Clay, Sovereignty | The Vine",
  description: "A deep guide to Romans 9 — Paul’s anguish for Israel, God’s sovereign election, Jacob I loved but Esau I hated, Pharaoh hardened, the potter and clay argument, vessels of mercy prepared for glory, and Israel stumbling over the stumbling stone that is Christ.",
  openGraph: { title: "Romans 9 Chapter Guide – Election, Potter and Clay | The Vine", description: "Explore Romans 9 — sovereign election, the potter and clay, Jacob and Esau, Pharaoh’s hardening, and the stumbling stone.", images: ["/api/og?title=Romans+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 9 Chapter Guide | The Vine", description: "A deep guide to Romans 9 — election, the potter and clay, and the stumbling stone.", images: ["/api/og?title=Romans+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
