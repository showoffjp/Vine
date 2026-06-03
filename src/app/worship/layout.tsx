import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worship Without Walls",
  description: "Music that transcends borders. From Ghana to Nashville to Tokyo — the global church is singing, and you’re invited in.",
  openGraph: {
    title: "Worship Without Walls — Vine",
    description: "Music that transcends borders. From Ghana to Nashville to Tokyo — the global church is singing, and you’re invited in.",
    images: ["/api/og?title=Worship+Without+Walls"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worship Without Walls — Vine",
    description: "Music that transcends borders. From Ghana to Nashville to Tokyo — the global church is singing, and you’re invited in.",
    images: ["/api/og?title=Worship+Without+Walls"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
