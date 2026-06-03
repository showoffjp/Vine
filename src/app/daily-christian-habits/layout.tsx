import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "21 Daily Christian Habits",
  description: "Spiritual growth is not a feeling — it is a set of practiced habits, repeated over years, that reshape who we are. These 21 practices are the building blocks of a life with God.",
  openGraph: {
    title: "21 Daily Christian Habits — Vine",
    description: "Spiritual growth is not a feeling — it is a set of practiced habits, repeated over years, that reshape who we are. These 21 practices are the building blocks of a life with God.",
    images: ["/api/og?title=21+Daily+Christian+Habits"],
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Daily Christian Habits — Vine",
    description: "Spiritual growth is not a feeling — it is a set of practiced habits, repeated over years, that reshape who we are. These 21 practices are the building blocks of a life with God.",
    images: ["/api/og?title=21+Daily+Christian+Habits"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
