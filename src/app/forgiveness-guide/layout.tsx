import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Forgiveness",
  description: "Forgiveness is not pretending the wrong didn't happen — it is releasing the debt. Jesus ties our forgiveness of others directly to our reception of God's forgiveness. It is not optional and it is n…",
  openGraph: {
    title: "The Practice of Forgiveness — Vine",
    description: "Forgiveness is not pretending the wrong didn't happen — it is releasing the debt. Jesus ties our forgiveness of others directly to our reception of God's forgiveness. It is not optional and it is n…",
    images: ["/api/og?title=The+Practice+of+Forgiveness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Forgiveness — Vine",
    description: "Forgiveness is not pretending the wrong didn't happen — it is releasing the debt. Jesus ties our forgiveness of others directly to our reception of God's forgiveness. It is not optional and it is n…",
    images: ["/api/og?title=The+Practice+of+Forgiveness"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
