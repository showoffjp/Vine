import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Lamentations: A Comprehensive Study Guide | Vine",
  description: "Five poems written in the rubble of Jerusalem's destruction. Lamentations does not explain away catastrophe — it holds the grief raw and names God as both the source of suffering and the only ground of hope. 'The steadfast love of the LORD never ceases; his mercies never come to an end' (3:22–23).",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
