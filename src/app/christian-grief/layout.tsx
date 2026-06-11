import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grief & the Christian | Vine",
  description: "A Christian guide to grief, lament, and the hope of resurrection — theology, practices, voices, and Scripture for those who mourn.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
