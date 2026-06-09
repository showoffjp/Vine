import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gospel of Mark: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Mark's Gospel — the Messianic Secret, the suffering Son of Man, miracles and authority, the disciples' misunderstanding, the Passion Narrative, and the abrupt ending.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
