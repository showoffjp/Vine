import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eye Has Not Seen: Christian Eternity | The Vine",
  description:
    "A guide to the Christian hope of eternity — the resurrection body, the new creation, what we will actually do forever, and how bodily resurrection changes how we live today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
