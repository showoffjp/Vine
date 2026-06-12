import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Always Be Ready: Christian Apologetics | The Vine",
  description:
    "A guide to defending the faith — answering hard questions about God, suffering, the resurrection, and the reliability of Scripture, and the reasonableness of Christianity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
