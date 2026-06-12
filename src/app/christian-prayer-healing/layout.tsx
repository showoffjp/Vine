import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Anyone Sick? Christian Prayer for Healing | The Vine",
  description:
    "A theological and practical guide to healing prayer — anointing the sick, the healing ministry of Jesus, why God does not always heal, and how to pray with expectation and honesty.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
