import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creeds & Historic Prayers",
  description: "The faith once delivered to all the saints",
  openGraph: {
    title: "Creeds & Historic Prayers — Vine",
    description: "The faith once delivered to all the saints",
    images: ["/api/og?title=Creeds+%26+Historic+Prayers"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creeds & Historic Prayers — Vine",
    description: "The faith once delivered to all the saints",
    images: ["/api/og?title=Creeds+%26+Historic+Prayers"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
