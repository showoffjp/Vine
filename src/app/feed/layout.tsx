import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Feed — Vine",
  description: "Your personalized Christian community feed — posts, testimonies, verses, and prayers from believers worldwide.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
