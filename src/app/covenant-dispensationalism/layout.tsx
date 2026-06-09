import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covenant Theology vs. Dispensationalism | Vine",
  description:
    "Two major frameworks for reading the Bible as a unified story — covenant theology and dispensationalism — their differences on Israel, the church, and end times explained clearly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
