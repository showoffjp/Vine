import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian End Times Guide",
  description:
    "Eschatology without sensationalism — the four millennial views (premillennialism, amillennialism, postmillennialism), the Rapture debate, Revelation as first-century document, the olivet discourse, and what Christians agree on: Jesus is coming back.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
