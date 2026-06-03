import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of the Body",
  description: "The body is not a prison — it is created good, redeemed by the Incarnation, and destined for resurrection. A biblical theology of physical life, health, illness, and the body's hope.",
  openGraph: {
    title: "Theology of the Body — Vine",
    description: "The body is not a prison — it is created good, redeemed by the Incarnation, and destined for resurrection. A biblical theology of physical life, health, illness, and the body's hope.",
    images: ["/api/og?title=Theology+of+the+Body"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of the Body — Vine",
    description: "The body is not a prison — it is created good, redeemed by the Incarnation, and destined for resurrection. A biblical theology of physical life, health, illness, and the body's hope.",
    images: ["/api/og?title=Theology+of+the+Body"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
