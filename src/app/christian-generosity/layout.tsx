import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Generous Christian Life — Vine",
  description: "Biblical theology and practice of generosity: cheerful giving, the widow's offering, generosity as spiritual warfare against materialism, John Wesley, and Randy Alcorn.",
  openGraph: {
    title: "The Generous Christian Life — Vine",
    description: "Biblical theology and practice of generosity: cheerful giving, the widow's offering, generosity as spiritual warfare against materialism, John Wesley, and Randy Alcorn.",
    images: ["/api/og?title=The+Generous+Christian+Life"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Generous Christian Life — Vine",
    description: "Biblical theology and practice of generosity: cheerful giving, the widow's offering, generosity as spiritual warfare against materialism, John Wesley, and Randy Alcorn.",
    images: ["/api/og?title=The+Generous+Christian+Life"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
