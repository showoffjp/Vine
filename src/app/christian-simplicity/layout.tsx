import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Christian Practice of Simplicity",
  description: "Simplicity is not poverty. It is the freedom that comes from ordering your life around what matters most. Richard Foster called it “an inward reality that results in an outward lifestyle.”",
  openGraph: {
    title: "The Christian Practice of Simplicity — Vine",
    description: "Simplicity is not poverty. It is the freedom that comes from ordering your life around what matters most. Richard Foster called it “an inward reality that results in an outward lifestyle.”",
    images: ["/api/og?title=The+Christian+Practice+of+Simplicity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Christian Practice of Simplicity — Vine",
    description: "Simplicity is not poverty. It is the freedom that comes from ordering your life around what matters most. Richard Foster called it “an inward reality that results in an outward lifestyle.”",
    images: ["/api/og?title=The+Christian+Practice+of+Simplicity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
