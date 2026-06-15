import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 11 Chapter Guide – Olive Tree, Remnant, Mystery of Israel | The Vine",
  description: "Romans 11 explores God's faithfulness to Israel through the remnant by grace, the olive tree illustration of Jew and Gentile, the mystery that all Israel will be saved, and the doxology of wonder that closes three chapters of sustained theological argument.",
  openGraph: { title: "Romans 11 Chapter Guide – Olive Tree, Remnant, Mystery of Israel | The Vine", description: "Romans 11 on the remnant by grace, the olive tree of Jew and Gentile, the mystery of Israel's salvation, and Paul's great doxology of wonder.", images: ["/api/og?title=Romans+11+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 11 Chapter Guide | The Vine", description: "Romans 11 on the remnant by grace, the olive tree, the mystery of Israel, and the doxology of wonder.", images: ["/api/og?title=Romans+11+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
