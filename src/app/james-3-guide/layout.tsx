import { Metadata } from "next";

export const metadata: Metadata = {
  title: "James 3: The Power and Peril of the Tongue, and Wisdom from Above | Vine",
  description:
    "A verse-by-verse study guide to James 3 covering the tongue as fire and rudder, the impossibility of taming it, the two kinds of wisdom (earthly vs. heavenly), and the call to be peacemakers who sow righteousness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
