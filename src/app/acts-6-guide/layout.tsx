import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 6 Chapter Guide – The Seven Deacons and Stephen | The Vine",
  description: "A deep guide to Acts 6 — the dispute over widows and the appointment of the Seven (including Stephen), the qualifications of Spirit and wisdom, the laying on of hands, the word spreading and priests coming to faith, Stephen full of grace and power doing great wonders and signs, the synagogue disputants unable to withstand his wisdom, and the false accusations that drag him before the Sanhedrin with his face shining like an angel.",
  openGraph: { title: "Acts 6 Chapter Guide – The Seven Deacons and Stephen | The Vine", description: "Acts 6 — the first deacons, Stephen's ministry, and the false accusations leading to his arrest.", images: ["/api/og?title=Acts+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 6 Chapter Guide | The Vine", description: "A deep guide to Acts 6 — the Seven deacons and Stephen.", images: ["/api/og?title=Acts+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
