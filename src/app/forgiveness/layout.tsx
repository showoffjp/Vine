import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Forgiveness",
  description: "Forgiveness is not minimizing, forgetting, or requiring reconciliation. It is the costly, supernatural decision to release a debt — and in doing so, to be released yourself.",
  openGraph: {
    title: "The Practice of Forgiveness — Vine",
    description: "Forgiveness is not minimizing, forgetting, or requiring reconciliation. It is the costly, supernatural decision to release a debt — and in doing so, to be released yourself.",
    images: ["/api/og?title=The+Practice+of+Forgiveness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Forgiveness — Vine",
    description: "Forgiveness is not minimizing, forgetting, or requiring reconciliation. It is the costly, supernatural decision to release a debt — and in doing so, to be released yourself.",
    images: ["/api/og?title=The+Practice+of+Forgiveness"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
