import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 83 Study Guide -- Do Not Keep Silence, O God",
  description: "Verse-by-verse study of Psalm 83 -- Asaph's final psalm: a national lament against a coalition of ten enemies surrounding Israel, the prayer for defeat as at Midian, and the ultimate goal that all nations know God alone is Most High.",
  openGraph: {
    title: "Psalm 83 Study Guide -- Do Not Keep Silence, O God",
    description: "Deep dive into Psalm 83: the conspiracy of ten nations, the Midianite paradigm of judgment, the imprecatory prayers as love for God's glory, and why this psalm resonates through eschatology.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
