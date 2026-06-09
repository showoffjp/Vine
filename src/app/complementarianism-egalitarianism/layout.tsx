import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complementarianism & Egalitarianism | Vine",
  description:
    "A balanced, biblical guide to the women-in-ministry debate — what each position teaches, key passages, major scholars, and how to navigate it in your church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
