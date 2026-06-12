import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Patience — The Theology and Practice of Waiting on God | The Vine",
  description:
    "A guide to biblical patience — exploring hupomone and makrothumia, James 1:2-4, Romans 5:3-4, God&rsquo;s patience as the model, and the spiritual discipline of sanctified waiting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
