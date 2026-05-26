import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Bible Companion — Vine",
  description:
    "Ask anything about Scripture, Bible verses, theology, and Christian living. Your AI-powered Bible companion, grounded in orthodox Christian faith.",
};

export default function AICompanionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
