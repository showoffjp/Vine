import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Samuel Guide - Christian Study",
  description: "A deep guide to the First Book of Samuel - Hannahs prayer and the birth of Samuel, Israels demand for a king, the rise and fall of King Saul, the anointing of David, David and Goliath, and the lessons of obedience and the heart.",
  openGraph: { title: "Book of 1 Samuel Guide - Vine", description: "A guide to 1 Samuel - Hannahs prayer, the demand for a king, Saul, the anointing of David, and David and Goliath.", images: ["/api/og?title=1+Samuel+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Samuel Guide - Vine", description: "A deep guide to the First Book of Samuel.", images: ["/api/og?title=1+Samuel+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
