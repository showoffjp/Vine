import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women in the Bible & Church",
  description: "Women are prophets, judges, apostles, deacons, teachers, and martyrs throughout Scripture and history. A biblical theology of womanhood begins with the imago dei and cannot be reduced to a single r…",
  openGraph: {
    title: "Women in the Bible & Church — Vine",
    description: "Women are prophets, judges, apostles, deacons, teachers, and martyrs throughout Scripture and history. A biblical theology of womanhood begins with the imago dei and cannot be reduced to a single r…",
    images: ["/api/og?title=Women+in+the+Bible+%26+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women in the Bible & Church — Vine",
    description: "Women are prophets, judges, apostles, deacons, teachers, and martyrs throughout Scripture and history. A biblical theology of womanhood begins with the imago dei and cannot be reduced to a single r…",
    images: ["/api/og?title=Women+in+the+Bible+%26+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
