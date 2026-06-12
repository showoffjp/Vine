import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pray About Everything: Anxiety and Prayer | The Vine",
  description:
    "A guide to praying through anxiety — Philippians 4:6-7, casting your cares on God, Gethsemane as the model of anxious prayer, and the peace that surpasses understanding.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
