import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Marriage | Vine",
  description:
    "A comprehensive Christian theology of marriage — what marriage is according to Scripture, its purposes, its covenant nature, the husband-wife relationship, challenges to the biblical view, and a pastoral perspective on divorce and remarriage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
