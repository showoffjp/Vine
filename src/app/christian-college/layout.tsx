import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Faith in College | Vine",
  description: "A Christian guide to maintaining and growing your faith through the college years.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
