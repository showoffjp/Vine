import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Covenant Theology Guide",
  description: "The covenants of Scripture — the Adamic, Noahic, Abrahamic, Mosaic, Davidic, and New Covenant. Covenant theology vs. dispensationalism. The covenant of works and the covenant of grace. How covenants structure the entire biblical story.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
