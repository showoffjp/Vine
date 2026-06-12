import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Aging Guide — They Will Still Bear Fruit in Old Age | The Vine",
  description:
    "A guide to aging with faith — gray hair as a crown of glory, fruit in old age, Moses at 80 and Caleb at 85, Anna and Simeon, inner renewal while outwardly wasting away, vocation beyond retirement, numbering our days, and blessing the next generation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
