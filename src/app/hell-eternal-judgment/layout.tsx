import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hell & Eternal Judgment | Vine",
  description:
    "What does the Bible say about hell? A careful guide to the three major Christian views on eternal destiny — eternal conscious torment, annihilationism, and universalism — with key passages, scholars, and pastoral reflection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
