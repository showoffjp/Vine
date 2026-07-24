import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 19 Guide &mdash; Broken Beyond Mending &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 19 &mdash; the shattered flask at the Valley of Ben Hinnom: the fired vessel that can never be mended, sins that never entered God's mind, the stiffened neck, and the Body broken so the shattered can be made whole.",
  openGraph: {
    title: "Jeremiah 19 Guide &mdash; Broken Beyond Mending",
    description: "Wet clay can be reworked; a fired pot can only shatter. The valley that became Gehenna -- and the gospel of the Potter who was broken and raised whole.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
