import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Guide to Depression",
  description:
    "Depression and the Christian faith — Elijah’s breakdown (1 Kings 19), the lament psalms, the dark night of the soul (John of the Cross), what the Bible says about sadness and despair, when depression becomes clinical, therapy and medication, and the hope of resurrection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
