import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Infertility",
  description: "Infertility and the Christian faith — the grief of barrenness, biblical women who waited (Sarah, Hannah, Elizabeth), the theology of children as gift not guarantee, navigating IVF and reproductive technology, the calling of adoption, and finding hope when the answer is no.",
  openGraph: { title: "Christian Guide to Infertility — Vine", description: "Infertility and faith — biblical women who waited, the theology of children as gift, IVF, adoption, and finding hope.", images: ["/api/og?title=Christian+Guide+to+Infertility"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Infertility — Vine", description: "Infertility and the Christian faith — grief, hope, and theology.", images: ["/api/og?title=Christian+Guide+to+Infertility"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
