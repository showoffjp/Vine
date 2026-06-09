import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Mindfulness & Meditation | Vine",
  description:
    "Can Christians practice mindfulness and yoga? A biblical guide to Christian meditation, the difference from secular/Buddhist practices, and ancient Christian contemplative traditions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
