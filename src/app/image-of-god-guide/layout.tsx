import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Image of God (Imago Dei): A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the imago Dei — what it means that humans are made in the image of God. Covers the biblical data, interpretive views (structural, functional, relational), the fall's effect on the image, Christ as the true image, and implications for dignity, ethics, and vocation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
