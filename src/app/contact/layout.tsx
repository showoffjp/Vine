import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Vine",
  description: "Get in touch with the Vine team — questions, partnerships, press, and prayer requests.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
