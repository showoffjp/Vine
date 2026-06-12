import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Death Where Is Your Sting: Christian Death and Dying | The Vine",
  description:
    "A guide to dying well — preparing for death, caring for the dying, the ars moriendi tradition, the intermediate state, and the Christian hope that faces death with eyes open.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
