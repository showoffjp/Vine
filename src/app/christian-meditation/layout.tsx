import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be Still: Christian Meditation | The Vine",
  description:
    "Christian meditation as biblical rumination on Scripture — not emptying the mind but filling it with God’s Word, cultivating a listening heart through lectio divina and the contemplative tradition.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
