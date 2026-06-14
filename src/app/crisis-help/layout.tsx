import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Crisis Help & Support — The Vine",
  description: "If you are in crisis, you are not alone. Immediate resources, hotlines, and Christian support for mental health crises, suicide prevention, domestic violence, and spiritual emergencies.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
