import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 22 Guide &mdash; Is Not This to Know Me? &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 22 &mdash; the audit of Judah's last kings: justice as the throne's one job, Jehoiakim's cedar bought with unpaid wages, 'Is not this to know me?', and the Coniah curse threaded by grace to the throne of Jesus.",
  openGraph: {
    title: "Jeremiah 22 Guide &mdash; Is Not This to Know Me?",
    description: "Majesty is not cedar; majesty is justice. Knowing God means judging the cause of the poor and needy -- and the signet ring torn off is restored in the Son of David.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
