import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 28 Study Guide | The Vine",
  description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
  openGraph: {
    title: "Isaiah 28 Study Guide -- The Vine",
    description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
    images: ["/api/og?title=Isaiah+28+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 28 Study Guide -- The Vine",
    description: "A deep study of Isaiah 28 -- woe to the proud crown of Ephraim, the covenant with death, and the precious tested cornerstone in Zion that is fulfilled in Jesus Christ.",
    images: ["/api/og?title=Isaiah+28+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
