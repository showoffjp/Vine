import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hebrews 8 Bible Study Guide &mdash; The New Covenant | The Vine",
  description: "A deep study of Hebrews 8: Jesus as minister of the true heavenly tabernacle, the better covenant, and the New Covenant from Jeremiah 31 written on human hearts.",
  openGraph: {
    title: "Hebrews 8 Bible Study Guide &mdash; The New Covenant | The Vine",
    description: "A deep study of Hebrews 8: Jesus as minister of the true heavenly tabernacle, the better covenant, and the New Covenant from Jeremiah 31 written on human hearts.",
    images: ["/api/og?title=Hebrews+8+%E2%80%94+The+New+Covenant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebrews 8 Bible Study Guide | The Vine",
    description: "Jesus seated at the right hand, the true tabernacle, and the New Covenant: law on hearts, all shall know God, sins remembered no more.",
    images: ["/api/og?title=Hebrews+8+%E2%80%94+The+New+Covenant"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
