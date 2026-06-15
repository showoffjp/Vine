import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 16 Chapter Guide – Holy Spirit, Grief to Joy | The Vine",
  description: "A deep guide to John 16 — Jesus promises the Holy Spirit as Advocate and Guide who will convict the world and lead into all truth, the birth-pains analogy of grief turning to resurrection joy, asking the Father in Jesus’s name, and the triumphant close: ‘I have overcome the world.’",
  openGraph: { title: "John 16 Chapter Guide – Holy Spirit, Grief to Joy | The Vine", description: "John 16: the Paraclete, sorrow turned to joy, prayer in Jesus’s name, and ‘I have overcome the world.’", images: ["/api/og?title=John+16+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 16 Chapter Guide | The Vine", description: "A deep guide to John 16 — the Holy Spirit, grief to joy, prayer in Jesus’s name.", images: ["/api/og?title=John+16+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
