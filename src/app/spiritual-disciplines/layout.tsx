import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Disciplines | Vine",
  description: "The disciplines are not means of earning God's favor — they are the training ground of the soul. Dallas Willard's framework for spiritual formation: solitude, fasting, study, confession, celebration, and the path of disciplined grace.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
