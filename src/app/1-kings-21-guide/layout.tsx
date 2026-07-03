import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Kings 21 Chapter Guide – Ahab, Naboth, and Justice | The Vine",
  description: "A deep study of 1 Kings 21: Ahab covets Naboth's vineyard, Jezebel engineers his murder through false witnesses, and Elijah pronounces God's judgment on Ahab's house -- while Ahab's unexpected repentance reveals the mercy at the heart of divine justice.",
  openGraph: { title: "1 Kings 21 Chapter Guide – Ahab, Naboth, and Justice | The Vine", description: "Study 1 Kings 21: Naboth's vineyard, Jezebel's plot, Elijah's confrontation, and the theology of covenant faithfulness, abuse of power, and divine justice.", images: ["/api/og?title=1+Kings+21+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 21 Chapter Guide | The Vine", description: "Ahab, Naboth, Jezebel, and Elijah -- a study of power, justice, and mercy in 1 Kings 21.", images: ["/api/og?title=1+Kings+21+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
