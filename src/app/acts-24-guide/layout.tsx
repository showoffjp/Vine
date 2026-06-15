import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 24 Guide - Christian Study",
  description: "A deep guide to Acts chapter 24 - Paul on trial before Governor Felix at Caesarea, the accusation of the orator Tertullus, Paul's defense and his hope in the resurrection, and Felix trembling at the message yet procrastinating, leaving Paul in prison for two years.",
  openGraph: { title: "Acts 24 Guide - Vine", description: "A guide to Acts 24 - Paul before Felix, the accusation of Tertullus, Paul's defense, and Felix procrastinating.", images: ["/api/og?title=Acts+24+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 24 Guide - Vine", description: "A deep guide to Acts chapter 24.", images: ["/api/og?title=Acts+24+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
