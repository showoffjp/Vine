import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Theism & Classical Theism | Vine",
  description:
    "Does God know the future exhaustively? A guide to the open theism debate — classical theism, open theism, Molinism, and what Scripture says about divine foreknowledge.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
