import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women in Ministry",
  description: "Can women be pastors, elders, or hold teaching authority over men in the church? This debate — between complementarians and egalitarians — is one of the most important intramural questions in conte…",
  openGraph: {
    title: "Women in Ministry — Vine",
    description: "Can women be pastors, elders, or hold teaching authority over men in the church? This debate — between complementarians and egalitarians — is one of the most important intramural questions in conte…",
    images: ["/api/og?title=Women+in+Ministry"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women in Ministry — Vine",
    description: "Can women be pastors, elders, or hold teaching authority over men in the church? This debate — between complementarians and egalitarians — is one of the most important intramural questions in conte…",
    images: ["/api/og?title=Women+in+Ministry"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
