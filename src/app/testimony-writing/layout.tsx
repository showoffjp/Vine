import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write Your Testimony",
  description: "Your story of meeting Christ is irrefutable — no one can argue with what you have experienced. 'I was blind but now I see' has converted more skeptics than most theological arguments.",
  openGraph: {
    title: "Write Your Testimony — Vine",
    description: "Your story of meeting Christ is irrefutable — no one can argue with what you have experienced. 'I was blind but now I see' has converted more skeptics than most theological arguments.",
    images: ["/api/og?title=Write+Your+Testimony"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Write Your Testimony — Vine",
    description: "Your story of meeting Christ is irrefutable — no one can argue with what you have experienced. 'I was blind but now I see' has converted more skeptics than most theological arguments.",
    images: ["/api/og?title=Write+Your+Testimony"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
