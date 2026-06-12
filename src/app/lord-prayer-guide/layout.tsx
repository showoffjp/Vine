import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Father: A Deep Guide to the Lord's Prayer | Vine",
  description:
    "A seminary-level, fully interactive study of the Lord's Prayer (Matthew 6:9-13) — every petition unpacked with Greek word studies, historical context, theologian voices, Scripture cross-references, and a personal journal.",
  openGraph: {
    title: "Our Father: A Deep Guide to the Lord's Prayer",
    description:
      "Explore each petition of the Lord's Prayer with rich theology, historical context, Greek word studies, and a personal journal to deepen your daily prayer life.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Father: A Deep Guide to the Lord's Prayer",
    description:
      "Explore each petition of the Lord's Prayer with rich theology, historical context, Greek word studies, and a personal journal.",
  },
};

export default function LordPrayerGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
