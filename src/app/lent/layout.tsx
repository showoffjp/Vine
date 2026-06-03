import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lent Guide",
  description: "Forty days of preparation before Easter — mirroring Jesus' forty days in the wilderness. Lent is not penance; it is formation. The season clears the ground so Easter can land with its full force.",
  openGraph: {
    title: "Lent Guide — Vine",
    description: "Forty days of preparation before Easter — mirroring Jesus' forty days in the wilderness. Lent is not penance; it is formation. The season clears the ground so Easter can land with its full force.",
    images: ["/api/og?title=Lent+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lent Guide — Vine",
    description: "Forty days of preparation before Easter — mirroring Jesus' forty days in the wilderness. Lent is not penance; it is formation. The season clears the ground so Easter can land with its full force.",
    images: ["/api/og?title=Lent+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
