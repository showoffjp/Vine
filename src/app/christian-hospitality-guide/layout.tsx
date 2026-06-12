import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Hospitality: The Art of Welcoming the Stranger | The Vine",
  description:
    "A guide to Christian hospitality — from philoxenia and the Emmaus road, through Abraham entertaining angels and the open table of Jesus, to recovering the lost art of the Christian home.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
