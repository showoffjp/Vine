import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End Times Guide: Eschatology, the Millennium, and New Creation | Vine",
  description:
    "A guide to Christian eschatology — the already/not yet framework, the major views on the millennium, the resurrection body, new creation, and how the end shapes present faithfulness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
