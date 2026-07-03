import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Hebrews 3 Guide - Jesus Greater Than Moses and the Warning Against Unbelief",
  description: "A deep guide to Hebrews 3 - consider Jesus, the apostle and high priest of our confession, faithful over God's house as a Son while Moses was faithful in it as a servant, the warning from Psalm 95 against hardening the heart as at Meribah and Massah, the call to exhort one another every day while it is still called Today, and the sobering truth that unbelief shut a generation out of God's rest.",
  openGraph: { title: "Hebrews 3 Guide - Vine", description: "A guide to Hebrews 3 - Jesus greater than Moses, the church as God's house, the warning of Psalm 95, and unbelief as the barrier to rest.", images: ["/api/og?title=Hebrews+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 3 Guide - Vine", description: "A deep guide to Hebrews 3 - consider Jesus, and do not harden your hearts.", images: ["/api/og?title=Hebrews+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
