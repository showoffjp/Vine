import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance of Salvation | Vine",
  description:
    "Can you know you are saved? A guide to the biblical basis for assurance, the marks of genuine faith, why doubts arise, and how different traditions handle the question of eternal security.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
