import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Nationalism | Vine",
  description:
    "What is Christian nationalism? A careful biblical and theological assessment — distinguishing it from patriotism and civic Christianity, examining its dangers, and recovering a faithful political theology.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
