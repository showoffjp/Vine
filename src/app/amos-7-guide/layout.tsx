import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amos 7 Study Guide &mdash; Thus the Lord Showed Me",
  description: "A verse-by-verse guide to Amos 7 &mdash; the three prophetic visions (locusts, fire, plumb line), the confrontation between Amos and Amaziah the priest at Bethel, and the prophet's humble defense.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
