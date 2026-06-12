import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Sabbath Guide: Rest, Shabbat, and the Lord's Day | The Vine",
  description:
    "A deep theological guide to the Christian Sabbath — shabbat as creation gift, Jesus as Lord of the Sabbath, Sabbatarianism vs. Lord's Day theology, Sabbath as resistance to the productivity economy, and practical Sabbath keeping for modern Christians.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
