import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 6 Guide — Dead to Sin, Alive to Christ — Christian Study",
  description: "A deep study of Romans 6 — the Christian's union with Christ in death and resurrection, what it means to be baptized into his death, dead to sin and alive to God, freed from sin's dominion, and walking in newness of life. Explore Paul's foundational teaching on how grace reigns through righteousness to eternal life.",
  openGraph: { title: "Romans 6 Guide — Dead to Sin, Alive to Christ — Vine", description: "Study Romans 6 — baptism into Christ's death, union with Christ, freedom from sin, and new life in God through Jesus Christ our Lord.", images: ["/api/og?title=Romans+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 6 Guide — Dead to Sin, Alive to Christ — Vine", description: "A deep study of Romans 6: union with Christ, baptism, death to sin, and the gift of eternal life.", images: ["/api/og?title=Romans+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
