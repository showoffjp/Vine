import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 24 Guide &mdash; The Isaiah Apocalypse",
  description: "Isaiah 24 opens the 'Isaiah Apocalypse' (chapters 24-27) with a sweeping vision of cosmic judgment on the whole earth, the defilement of creation by sin, and the ultimate reign of the LORD of hosts on Mount Zion.",
  openGraph: {
    title: "Isaiah 24 Guide &mdash; The Vine",
    description: "Isaiah 24 opens the 'Isaiah Apocalypse' (chapters 24-27) with a sweeping vision of cosmic judgment on the whole earth, the defilement of creation by sin, and the ultimate reign of the LORD of hosts on Mount Zion.",
    images: ["/api/og?title=Isaiah+24+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 24 Guide &mdash; The Vine",
    description: "Isaiah 24 opens the 'Isaiah Apocalypse' (chapters 24-27) with a sweeping vision of cosmic judgment on the whole earth, the defilement of creation by sin, and the ultimate reign of the LORD of hosts on Mount Zion.",
    images: ["/api/og?title=Isaiah+24+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
