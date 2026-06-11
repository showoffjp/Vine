import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loneliness & the Christian | Vine",
  description: "A biblical and pastoral guide to loneliness — God's presence in Psalm 139, Jesus in Gethsemane, the body of Christ as antidote to isolation, spiritual friendship, and finding belonging in God.",
  openGraph: {
    title: "Loneliness & the Christian | Vine",
    description: "A biblical and pastoral guide to loneliness — God's presence in Psalm 139, Jesus in Gethsemane, the body of Christ as antidote to isolation, spiritual friendship, and finding belonging in God.",
    images: ["/api/og?title=Loneliness+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loneliness & the Christian | Vine",
    description: "A biblical and pastoral guide to loneliness — God's presence in Psalm 139, Jesus in Gethsemane, the body of Christ as antidote to isolation, spiritual friendship, and finding belonging in God.",
    images: ["/api/og?title=Loneliness+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
