import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whatever Your Hand Finds: Christian Diligence | The Vine",
  description:
    "A guide to Christian diligence — overcoming sloth and acedia, working with all your might, faithfulness in small things, and doing everything as unto the Lord.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
