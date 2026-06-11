import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Anger & the Christian | Vine",
  description: "A biblical guide to understanding and overcoming sinful anger through the gospel.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
