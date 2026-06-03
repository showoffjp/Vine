import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intentional Formation into Christ",
  description: "Discipleship is not a program — it is a relationship. The Great Commission is not just evangelism; it is making disciples. From new believer to multiplying disciple, the journey requires intention.",
  openGraph: {
    title: "Intentional Formation into Christ — Vine",
    description: "Discipleship is not a program — it is a relationship. The Great Commission is not just evangelism; it is making disciples. From new believer to multiplying disciple, the journey requires intention.",
    images: ["/api/og?title=Intentional+Formation+into+Christ"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intentional Formation into Christ — Vine",
    description: "Discipleship is not a program — it is a relationship. The Great Commission is not just evangelism; it is making disciples. From new believer to multiplying disciple, the journey requires intention.",
    images: ["/api/og?title=Intentional+Formation+into+Christ"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
