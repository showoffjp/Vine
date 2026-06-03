import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Generosity",
  description: "Generosity is not what Christians do with leftovers — it is participation in the character of a God who gave his only Son. It is also the primary discipline that breaks money's hold on the heart.",
  openGraph: {
    title: "The Practice of Generosity — Vine",
    description: "Generosity is not what Christians do with leftovers — it is participation in the character of a God who gave his only Son. It is also the primary discipline that breaks money's hold on the heart.",
    images: ["/api/og?title=The+Practice+of+Generosity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Generosity — Vine",
    description: "Generosity is not what Christians do with leftovers — it is participation in the character of a God who gave his only Son. It is also the primary discipline that breaks money's hold on the heart.",
    images: ["/api/og?title=The+Practice+of+Generosity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
