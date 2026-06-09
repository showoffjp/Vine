import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christology: Who Is Jesus? | Vine",
  description:
    "A comprehensive guide to the person and nature of Jesus Christ — his divine and human natures, the Chalcedonian definition, historical debates, and why Christology is the center of Christian faith.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
