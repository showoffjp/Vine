import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 20 Guide — Resurrection Morning — Christian Study",
  description: "A deep study of John 20 — resurrection morning, as Mary Magdalene discovers the empty tomb and meets the risen Jesus, the disciples receive the Holy Spirit, and Thomas moves from doubt to the greatest confession of faith in the Gospel: 'My Lord and my God.'",
  openGraph: { title: "John 20 Guide — The Vine", description: "Study John 20 — the resurrection appearances to Mary Magdalene, the disciples, and doubting Thomas.", images: ["/api/og?title=John+20+Guide"] },
  twitter: { card: "summary_large_image", title: "John 20 Guide — The Vine", description: "A deep guide to John 20 and the appearances of the risen Lord to Mary Magdalene, the disciples, and Thomas.", images: ["/api/og?title=John+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
