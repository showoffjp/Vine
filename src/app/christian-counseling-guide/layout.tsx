import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Counseling: A Comprehensive Guide to Biblical Soul Care | Vine",
  description:
    "A comprehensive guide to Christian counseling — biblical counseling vs. integration, the sufficiency of Scripture debate, soul care history, counseling specific struggles (depression, anxiety, trauma, marriage), and when to refer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
