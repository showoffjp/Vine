import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Colossians: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Colossians — the supremacy of Christ (Colossians 1:15–20), the Colossian heresy, fullness in Christ, dying and rising with Christ, putting on the new self, and the letter to the Laodiceans.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
