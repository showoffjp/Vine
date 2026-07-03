import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Atonement Guide",
  description:
    "The theories of atonement — penal substitution, Christus Victor, moral influence, ransom theory, scapegoat (Girard), governmental, and the kaleidoscope approach. What the cross actually accomplished and why it matters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
