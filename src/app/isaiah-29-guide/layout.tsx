import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 29 Guide -- Woe to Ariel and the Vision of Transformation",
  description: "A deep guide to Isaiah 29 -- the woe oracle against Ariel, the sealed book, the wisdom of the wise perishing, spiritual blindness, and the glorious reversal when the deaf hear and the blind see.",
  openGraph: { title: "Isaiah 29 Guide -- Vine", description: "A guide to Isaiah 29 -- Ariel besieged, the dream that vanishes, God confounding human wisdom, and the hope of spiritual opening for those who seem blind.", images: ["/api/og?title=Isaiah+29+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 29 Guide -- Vine", description: "A deep guide to Isaiah 29 -- woe to Ariel, the sealed book, and the glorious reversal of spiritual blindness.", images: ["/api/og?title=Isaiah+29+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
