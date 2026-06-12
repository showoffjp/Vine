import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Surrender — Theology and Practice of Surrendering to God | The Vine",
  description:
    "A guide to Christian surrender — exploring Gethsemane, the grain of wheat, taking up your cross daily, Paul's 'I die daily,' Keswick consecration theology, Andrew Murray, Hannah Whitall Smith, and the paradox that surrender produces freedom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
