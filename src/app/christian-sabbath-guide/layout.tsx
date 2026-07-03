import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Sabbath Guide: Rest, Shabbat, and the Lord's Day | The Vine",
  description:
    "A deep theological guide to the Christian Sabbath — shabbat as creation gift, Jesus as Lord of the Sabbath, Sabbatarianism vs. Lord's Day theology, Sabbath as resistance to the productivity economy, and practical Sabbath keeping for modern Christians.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
