import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Exodus 12 Chapter Guide – The Passover, Blood of the Lamb | The Vine",
  description: "A deep guide to Exodus 12 — God's institution of the Passover: the selection of the unblemished lamb, blood on doorposts applied with hyssop, the destroyer passing over, the night of judgment and deliverance, 430 years of slavery ending, and its fulfillment in Christ our Passover lamb.",
  openGraph: { title: "Exodus 12 Chapter Guide – The Passover | The Vine", description: "Explore Exodus 12 — the unblemished lamb, blood on the doorposts, the night of deliverance, and Christ as our Passover.", images: ["/api/og?title=Exodus+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Exodus 12 Chapter Guide | The Vine", description: "A deep guide to Exodus 12 — the Passover lamb, blood on the doorposts, and the night God passed over.", images: ["/api/og?title=Exodus+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
