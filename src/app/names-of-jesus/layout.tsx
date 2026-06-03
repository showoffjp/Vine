import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Names of Jesus",
  description: "Scripture overflows with names and titles for Jesus Christ — each one a window into who he is and what he has done. From Immanuel to the Lamb of God, from the Word to the Lion of Judah, these names…",
  openGraph: {
    title: "The Names of Jesus — Vine",
    description: "Scripture overflows with names and titles for Jesus Christ — each one a window into who he is and what he has done. From Immanuel to the Lamb of God, from the Word to the Lion of Judah, these names…",
    images: ["/api/og?title=The+Names+of+Jesus"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Names of Jesus — Vine",
    description: "Scripture overflows with names and titles for Jesus Christ — each one a window into who he is and what he has done. From Immanuel to the Lamb of God, from the Word to the Lion of Judah, these names…",
    images: ["/api/og?title=The+Names+of+Jesus"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
