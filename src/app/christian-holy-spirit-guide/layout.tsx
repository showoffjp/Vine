import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Guide to the Holy Spirit",
  description:
    "A theology of the Holy Spirit — the Spirit in the Old Testament, Pentecost, the gifts of the Spirit (cessationism vs. continuationism), the fruit of the Spirit, the baptism of the Spirit, the Spirit and sanctification, and the charismatic question.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
