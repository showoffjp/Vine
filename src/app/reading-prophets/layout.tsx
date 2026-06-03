import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading the Old Testament Prophets",
  description: "The prophets spoke about now and then — judgment and grace, repentance and restoration, the Messiah who was coming. Here is how to read them well.",
  openGraph: {
    title: "Reading the Old Testament Prophets — Vine",
    description: "The prophets spoke about now and then — judgment and grace, repentance and restoration, the Messiah who was coming. Here is how to read them well.",
    images: ["/api/og?title=Reading+the+Old+Testament+Prophets"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading the Old Testament Prophets — Vine",
    description: "The prophets spoke about now and then — judgment and grace, repentance and restoration, the Messiah who was coming. Here is how to read them well.",
    images: ["/api/og?title=Reading+the+Old+Testament+Prophets"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
