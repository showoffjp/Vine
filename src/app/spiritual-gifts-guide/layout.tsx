import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Gifts: A Complete Biblical Guide | Vine",
  description:
    "A comprehensive guide to spiritual gifts — the biblical lists, cessationism vs. continuationism, sign gifts, service gifts, how to discover your gift, using gifts in community, and guarding against abuse.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
