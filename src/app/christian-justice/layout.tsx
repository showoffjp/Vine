import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Justice: The Christian Call to Justice | The Vine",
  description: "An exploration of biblical justice — mishpat, hesed, and shalom — caring for the vulnerable, the prophetic tradition from Amos to Isaiah, and why followers of Jesus are called to do justice as an act of worship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
