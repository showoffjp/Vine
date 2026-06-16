import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 29 -- Rulers, Reproof, and the Fear of Man | The Vine",
  description: "A deep study guide to Proverbs 29 -- the danger of hardening to reproof, wise vs. wicked rulers, justice for the poor, the fear of man as a snare, and trusting God alone.",
  openGraph: {
    title: "Proverbs 29 -- Rulers, Reproof, and the Fear of Man | The Vine",
    description: "A deep study guide to Proverbs 29 -- the danger of hardening to reproof, wise vs. wicked rulers, justice for the poor, and the fear of man as a snare.",
    images: ["/api/og?title=Proverbs+29+%E2%80%94+Rulers%2C+Reproof%2C+and+the+Fear+of+Man"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 29 -- Rulers, Reproof, and the Fear of Man | The Vine",
    description: "A deep study guide to Proverbs 29 -- the danger of hardening to reproof, wise vs. wicked rulers, justice for the poor, and the fear of man as a snare.",
    images: ["/api/og?title=Proverbs+29+%E2%80%94+Rulers%2C+Reproof%2C+and+the+Fear+of+Man"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
