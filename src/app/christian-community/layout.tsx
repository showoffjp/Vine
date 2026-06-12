import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Body: Christian Community | The Vine",
  description: "A guide to the church as community — koinonia fellowship, bearing one another's burdens, the one-another commands, and why Christians cannot flourish in isolation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
