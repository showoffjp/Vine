import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give — Vine",
  description: "Support missionaries, church planters, and the Vine platform. 100% of designated giving goes directly to the field.",
};

export default function GivingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
