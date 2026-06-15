import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 14 Chapter Guide – Paul in Lystra, Derbe, and Iconium | The Vine",
  description: "A deep study guide to Acts 14 covering Paul and Barnabas at Iconium, the healing of a lame man at Lystra, being mistaken for Hermes and Zeus, the stoning of Paul, the mission at Derbe, and the return journey strengthening churches with appointed elders.",
  openGraph: { title: "Acts 14 Chapter Guide – The Vine", description: "Explore Acts 14 – Paul and Barnabas in Lystra, nearly worshiped as gods, stoned, and strengthening the churches.", images: ["/api/og?title=Acts+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 14 Chapter Guide – The Vine", description: "A deep study guide to Acts 14.", images: ["/api/og?title=Acts+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
