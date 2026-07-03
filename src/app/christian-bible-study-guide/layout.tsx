import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Bible Study Guide",
  description:
    "How to study the Bible — inductive Bible study (observation, interpretation, application), the SOAP method, lectio divina for Scripture, studying in community vs. alone, Bible study tools (concordances, commentaries, lexicons), and building a sustainable habit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
