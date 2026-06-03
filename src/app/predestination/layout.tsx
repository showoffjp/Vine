import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predestination & Election",
  description: "Does God choose who will be saved, and if so, on what basis? This is one of theology's most contested questions and one Scripture addresses with surprising directness.",
  openGraph: {
    title: "Predestination & Election — Vine",
    description: "Does God choose who will be saved, and if so, on what basis? This is one of theology's most contested questions and one Scripture addresses with surprising directness.",
    images: ["/api/og?title=Predestination+%26+Election"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Predestination & Election — Vine",
    description: "Does God choose who will be saved, and if so, on what basis? This is one of theology's most contested questions and one Scripture addresses with surprising directness.",
    images: ["/api/og?title=Predestination+%26+Election"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
