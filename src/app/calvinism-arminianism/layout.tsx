import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calvinism vs. Arminianism | Vine",
  description:
    "Election, free will, perseverance, atonement — a balanced guide to the Calvinist/Arminian debate with TULIP, FACTS, key passages, and major voices on both sides.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
