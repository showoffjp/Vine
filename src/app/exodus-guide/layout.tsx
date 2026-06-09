import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Exodus: A Comprehensive Study Guide | Vine",
  description: "The Exodus narrative — slavery in Egypt, the ten plagues, Passover, Red Sea crossing, the giving of the Law at Sinai, the golden calf, and the tabernacle where God dwells with his people.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
