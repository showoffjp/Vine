import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train for godliness.",
  description: "“Train yourself to be godly.” — 1 Timothy 4:7. The classic disciplines of the Christian life, with practical guides and progress tracking.",
  openGraph: {
    title: "Train for godliness. — Vine",
    description: "“Train yourself to be godly.” — 1 Timothy 4:7. The classic disciplines of the Christian life, with practical guides and progress tracking.",
    images: ["/api/og?title=Train+for+godliness."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Train for godliness. — Vine",
    description: "“Train yourself to be godly.” — 1 Timothy 4:7. The classic disciplines of the Christian life, with practical guides and progress tracking.",
    images: ["/api/og?title=Train+for+godliness."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
