import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Bioethics | Vine",
  description: "A Christian ethical framework for the hardest questions of modern medicine — sanctity of life, abortion, euthanasia, genetic engineering, stem cell research, end-of-life care, fertility treatments, and organ donation.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
