import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcoming the Stranger: A Guide to Refugee Ministry",
  description: "The Bible speaks more about how God's people treat the stranger and foreigner than almost any other social ethic. Refugee ministry is not a political position — it is a biblical mandate.",
  openGraph: {
    title: "Welcoming the Stranger: A Guide to Refugee Ministry — Vine",
    description: "The Bible speaks more about how God's people treat the stranger and foreigner than almost any other social ethic. Refugee ministry is not a political position — it is a biblical mandate.",
    images: ["/api/og?title=Welcoming+the+Stranger%3A+A+Guide+to+Refugee+Ministry"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcoming the Stranger: A Guide to Refugee Ministry — Vine",
    description: "The Bible speaks more about how God's people treat the stranger and foreigner than almost any other social ethic. Refugee ministry is not a political position — it is a biblical mandate.",
    images: ["/api/og?title=Welcoming+the+Stranger%3A+A+Guide+to+Refugee+Ministry"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
