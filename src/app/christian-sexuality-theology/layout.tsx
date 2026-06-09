import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christianity & Human Sexuality | Vine",
  description:
    "A balanced theological guide to Christianity's understanding of human sexuality — the traditional view, biblical arguments, the pastoral challenge, and how the church can respond with both faithfulness and love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
