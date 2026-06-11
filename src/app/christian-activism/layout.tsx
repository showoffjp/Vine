import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Activism & Social Justice | Vine",
  description: "How Christians engage culture, pursue justice, care for the poor, and advocate for the vulnerable — rooted in the biblical vision of the kingdom of God.",
};

export default function ChristianActivismLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
