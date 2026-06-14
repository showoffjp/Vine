import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 16 Guide — The Macedonian Call and the Philippian Jailer",
  description: "A deep guide to Acts 16 — the Macedonian vision, Lydia of Thyatira, Paul and Silas imprisoned, the midnight earthquake, and the Philippian jailer who asked &ldquo;What must I do to be saved?&rdquo; and believed with his whole household.",
  openGraph: { title: "Acts 16 Guide — Vine", description: "A guide to Acts 16 — the Macedonian call, Lydia, Paul and Silas in prison, the earthquake, and the Philippian jailer saved with his household.", images: ["/api/og?title=Acts+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 16 Guide — Vine", description: "A deep guide to Acts 16 — missionary call, divine redirection, and whole-household salvation.", images: ["/api/og?title=Acts+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
