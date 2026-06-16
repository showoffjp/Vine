import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Galatians 3 Guide &mdash; Justification by Faith Alone",
  description: "A deep guide to Galatians 3 &mdash; Paul&rsquo;s theological heart: the argument from Abraham that justification is by faith alone, the curse of the law redeemed by Christ, and the unity of all believers in Christ Jesus.",
  openGraph: { title: "Galatians 3 Guide &mdash; Vine", description: "Guide to Galatians 3: justification by faith, Abraham&rsquo;s blessing to the Gentiles, the law as guardian, and neither Jew nor Greek in Christ.", images: ["/api/og?title=Galatians+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Galatians 3 Guide &mdash; Vine", description: "A deep guide to Galatians 3, the theological center of Paul&rsquo;s letter on justification by faith.", images: ["/api/og?title=Galatians+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
