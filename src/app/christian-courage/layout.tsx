import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Courage — Vine",
  description: "Be strong and courageous. A theological and practical guide to Christian courage — Joshua's commission, Esther's resolve, Daniel's faithfulness, and the fear of the LORD that casts out the fear of man.",
  openGraph: {
    title: "Christian Courage — Vine",
    description: "Be strong and courageous. A theological and practical guide to Christian courage — Joshua's commission, Esther's resolve, Daniel's faithfulness, and the fear of the LORD that casts out the fear of man.",
    images: ["/api/og?title=Christian+Courage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Courage — Vine",
    description: "Be strong and courageous. A theological and practical guide to Christian courage — Joshua's commission, Esther's resolve, Daniel's faithfulness, and the fear of the LORD that casts out the fear of man.",
    images: ["/api/og?title=Christian+Courage"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
