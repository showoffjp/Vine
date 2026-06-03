import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Christians Actually Believe",
  description: "Classic Christian doctrines explained without jargon, with honest attention to where Christians agree and disagree. Theology is not the property of experts.",
  openGraph: {
    title: "What Christians Actually Believe — Vine",
    description: "Classic Christian doctrines explained without jargon, with honest attention to where Christians agree and disagree. Theology is not the property of experts.",
    images: ["/api/og?title=What+Christians+Actually+Believe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Christians Actually Believe — Vine",
    description: "Classic Christian doctrines explained without jargon, with honest attention to where Christians agree and disagree. Theology is not the property of experts.",
    images: ["/api/og?title=What+Christians+Actually+Believe"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
