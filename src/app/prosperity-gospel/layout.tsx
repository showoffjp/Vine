import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Prosperity Gospel | Vine",
  description:
    "A biblical assessment of health-wealth theology — what it teaches, why it fails, and how to find healing after it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
