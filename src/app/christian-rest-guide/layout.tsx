import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rest as Resistance: Christian Rest | The Vine",
  description: "A guide to Sabbath rest, ceasing from striving, and resting in Christ — how the discipline of rest becomes an act of trust in God's provision and a foretaste of eschatological peace.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
