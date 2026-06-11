import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Forgiveness: The Christian Way | Vine",
  description: "A Christian guide to forgiveness — the gospel imperative, forgiving the unrepentant, forgiving yourself, and walking toward freedom.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
