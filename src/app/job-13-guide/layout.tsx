import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 13 Guide &mdash; Though He Slay Me, I Will Hope in Him &mdash; Christian Study",
  description: "A verse-by-verse study of Job 13 &mdash; Job rebukes his friends as 'worthless physicians' and 'liars for God,' resolves to argue his case to God's own face, and voices the summit of naked faith: 'Though he slay me, I will hope in him.'",
  openGraph: {
    title: "Job 13 Guide &mdash; Though He Slay Me, I Will Hope in Him",
    description: "Job turns from the friends to God directly, staking everything on the God who seems to be killing him.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
