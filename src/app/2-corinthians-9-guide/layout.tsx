import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Corinthians Chapter 9: Cheerful Giving & God's Sufficiency | Vine",
  description:
    "A deep study of 2 Corinthians 9 — the Jerusalem collection, the cheerful giver (hilaron), sowing and reaping, divine sufficiency (autarkeia), generosity as worship, and the indescribable gift of Christ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
