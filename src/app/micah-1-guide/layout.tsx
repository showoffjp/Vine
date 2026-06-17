import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micah 1 Study Guide &mdash; Hear You Peoples All of Them",
  description: "A verse-by-verse guide to Micah 1 &mdash; the LORD coming from his holy temple, Samaria's incurable wound spreading to Judah, and the prophet's grief-stricken lament over the coming destruction.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
