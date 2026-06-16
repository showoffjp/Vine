import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 33: Woe to the Destroyer, the LORD Our King, and Zion's Glorious Future | Vine",
  description:
    "A comprehensive chapter guide to Isaiah 33 -- the woe oracle against Assyria, the failure of human alliance, who can dwell with the consuming fire, the king in his beauty, and the LORD as judge, lawgiver, king, and savior.",
  openGraph: {
    title: "Isaiah 33: Woe to the Destroyer, the LORD Our King | Vine",
    description: "A deep guide to Isaiah 33 -- the LORD as judge, lawgiver, king, and savior, and the glorious future of Zion.",
    images: ["/api/og?title=Isaiah+33+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 33: The LORD Our King and Savior | Vine",
    description: "A guide to Isaiah 33 -- Assyria's doom, who can dwell with God, and Zion's restoration.",
    images: ["/api/og?title=Isaiah+33+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
