import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationships — Vine",
  description:
    "Biblical guidance on dating, marriage, friendship, and family — practical wisdom grounded in Scripture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
