import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God is still moving.",
  description: "Real stories of God's faithfulness from believers across the globe. Share yours. Be encouraged by theirs.",
  openGraph: {
    title: "God is still moving. — Vine",
    description: "Real stories of God's faithfulness from believers across the globe. Share yours. Be encouraged by theirs.",
    images: ["/api/og?title=God+is+still+moving."],
  },
  twitter: {
    card: "summary_large_image",
    title: "God is still moving. — Vine",
    description: "Real stories of God's faithfulness from believers across the globe. Share yours. Be encouraged by theirs.",
    images: ["/api/og?title=God+is+still+moving."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
