import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Chronicles Guide — Christian Study",
  description: "A deep guide to the Book of 1 Chronicles — the sweeping genealogies from Adam tracing God's faithfulness, the reign of David seen from a priestly perspective, the bringing up of the ark to Jerusalem, the Davidic covenant of an everlasting throne fulfilled in Christ, and David's extensive preparations for the temple Solomon would build.",
  openGraph: { title: "Book of 1 Chronicles Guide — Vine", description: "A guide to 1 Chronicles — the genealogies, the reign of David, the ark, the Davidic covenant, and preparations for the temple.", images: ["/api/og?title=Book+of+1+Chronicles+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Chronicles Guide — Vine", description: "A deep guide to the Book of 1 Chronicles.", images: ["/api/og?title=Book+of+1+Chronicles+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
