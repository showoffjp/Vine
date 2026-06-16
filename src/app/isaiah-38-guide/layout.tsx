import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 38: Hezekiah's Illness, the Shadow Goes Back, and His Song of Thanksgiving | Vine",
  description: "A verse-by-verse study guide to Isaiah 38 -- Hezekiah becomes deathly ill, receives a death sentence from Isaiah, prays and weeps, and God grants him fifteen more years. The sundial shadow reverses as a sign. Hezekiah composes the Miktam psalm celebrating his deliverance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
