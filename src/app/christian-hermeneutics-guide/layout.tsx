import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Hermeneutics Guide",
  description:
    "The art and science of biblical interpretation — the grammatical-historical method, authorial intent, the sensus plenior, typology and allegory, the role of the Holy Spirit in interpretation, canonical context, and why hermeneutics is not just for scholars.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
