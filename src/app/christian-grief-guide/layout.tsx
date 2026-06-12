import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Grief Guide — The Vine",
  description: "Jesus wept. The shortest verse in Scripture is also the most theologically dense. A guide to Christian grief: lament as spiritual discipline, mourning with resurrection hope, the psalms of lament, and the practices that carry a soul through the valley of the shadow of death.",
  openGraph: {
    title: "Christian Grief Guide — Vine",
    description: "Jesus wept. The shortest verse in Scripture is also the most theologically dense. A guide to Christian grief: lament as spiritual discipline, mourning with resurrection hope, the psalms of lament, and the practices that carry a soul through the valley of the shadow of death.",
    images: ["/api/og?title=Christian+Grief+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Grief Guide — Vine",
    description: "Jesus wept. The shortest verse in Scripture is also the most theologically dense. A guide to Christian grief: lament as spiritual discipline, mourning with resurrection hope, the psalms of lament, and the practices that carry a soul through the valley of the shadow of death.",
    images: ["/api/og?title=Christian+Grief+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
