import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historical Evidence for the Resurrection",
  description: "The minimal facts approach — historical data accepted by the overwhelming majority of scholars, including skeptics — and why the bodily resurrection of Jesus is the best explanation.",
  openGraph: {
    title: "Historical Evidence for the Resurrection — Vine",
    description: "The minimal facts approach — historical data accepted by the overwhelming majority of scholars, including skeptics — and why the bodily resurrection of Jesus is the best explanation.",
    images: ["/api/og?title=Historical+Evidence+for+the+Resurrection"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Historical Evidence for the Resurrection — Vine",
    description: "The minimal facts approach — historical data accepted by the overwhelming majority of scholars, including skeptics — and why the bodily resurrection of Jesus is the best explanation.",
    images: ["/api/og?title=Historical+Evidence+for+the+Resurrection"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
