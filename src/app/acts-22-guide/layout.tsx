import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 22 Guide - Christian Study",
  description: "A deep guide to Acts 22 - Paul's defense before the Jerusalem crowd from the barracks steps, recounting his upbringing under Gamaliel, his Damascus road conversion, his commission to the Gentiles, and his appeal to Roman citizenship that halts his flogging.",
  openGraph: { title: "Acts 22 Guide - Vine", description: "A guide to Acts 22 - Paul's defense, the Damascus road testimony, the Gentile commission, and his Roman citizenship.", images: ["/api/og?title=Acts+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 22 Guide - Vine", description: "A deep guide to Acts 22.", images: ["/api/og?title=Acts+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
