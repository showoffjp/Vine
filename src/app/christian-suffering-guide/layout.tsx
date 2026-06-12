import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Through the Fire: A Christian Guide to Suffering | The Vine",
  description:
    "A Christian guide to suffering — the theology of the cross, the fellowship of Christ's sufferings, lament as the biblical response to pain, and finding God in the fire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
