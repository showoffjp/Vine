import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord's Supper: Theology, Debate, and Practice | Vine",
  description:
    "A comprehensive Christian guide to the Lord's Supper — the institution of Communion by Christ, the four major views on presence (transubstantiation, consubstantiation, Reformed spiritual presence, and memorial), worthy participation, and the eschatological meaning of every Table.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
