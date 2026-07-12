import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 6 Guide &mdash; Peace, Peace, When There Is No Peace &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 6 &mdash; the coming siege of Jerusalem, the false prophets who heal the wound lightly, the tender call to ask for the ancient paths and find rest, and the verdict of 'rejected silver.'",
  openGraph: {
    title: "Jeremiah 6 Guide &mdash; Peace, Peace, When There Is No Peace",
    description: "God exposes the leaders who soothe a mortally wounded nation with false peace, and offers rest on the ancient paths -- met with 'We will not walk in it.'",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
