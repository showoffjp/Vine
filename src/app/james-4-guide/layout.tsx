import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "James 4 Guide — Draw Near to God — Christian Study",
  description: "A deep Bible study guide to James 4 — the call to submit to God, resist the devil, humble ourselves before the Lord, and draw near to the God who gives grace to the humble and opposes the proud. Explore the roots of conflict, the danger of worldliness, the power of humility, and the promise that if we draw near to God, he will draw near to us.",
  openGraph: { title: "James 4 Guide — Draw Near to God — Vine", description: "Study James 4: submit to God, resist the devil, humble yourselves before the Lord, and draw near to the God who draws near to the humble.", images: ["/api/og?title=James+4+Guide"] },
  twitter: { card: "summary_large_image", title: "James 4 Guide — Draw Near to God — Vine", description: "A deep guide to James 4: submit to God, resist the devil, and draw near to God.", images: ["/api/og?title=James+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
