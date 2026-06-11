import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Gift of Singleness | Vine",
  description: "A Christian guide to embracing singleness as a gift and calling from God.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
