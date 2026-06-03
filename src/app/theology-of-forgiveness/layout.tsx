import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Forgiveness",
  description: "Forgiveness is one of Christianity's most demanding and most liberating teachings. We forgive because we have been forgiven — and the scale of what we have received should overwhelm every reason no…",
  openGraph: {
    title: "Theology of Forgiveness — Vine",
    description: "Forgiveness is one of Christianity's most demanding and most liberating teachings. We forgive because we have been forgiven — and the scale of what we have received should overwhelm every reason no…",
    images: ["/api/og?title=Theology+of+Forgiveness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Forgiveness — Vine",
    description: "Forgiveness is one of Christianity's most demanding and most liberating teachings. We forgive because we have been forgiven — and the scale of what we have received should overwhelm every reason no…",
    images: ["/api/og?title=Theology+of+Forgiveness"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
