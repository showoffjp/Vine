import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Persecuted Church",
  description: "More Christians were martyred for their faith in the 20th century than in all previous centuries combined. The global church is suffering — and praying with them is one of the most important things…",
  openGraph: {
    title: "The Persecuted Church — Vine",
    description: "More Christians were martyred for their faith in the 20th century than in all previous centuries combined. The global church is suffering — and praying with them is one of the most important things…",
    images: ["/api/og?title=The+Persecuted+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Persecuted Church — Vine",
    description: "More Christians were martyred for their faith in the 20th century than in all previous centuries combined. The global church is suffering — and praying with them is one of the most important things…",
    images: ["/api/og?title=The+Persecuted+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
