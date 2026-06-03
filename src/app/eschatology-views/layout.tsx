import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eschatology: End Times Views",
  description: "Christians agree that Christ returns, the dead are raised, judgment occurs, and new creation follows. The debate concerns the millennium — a period described in Revelation 20 whose nature and timin…",
  openGraph: {
    title: "Eschatology: End Times Views — Vine",
    description: "Christians agree that Christ returns, the dead are raised, judgment occurs, and new creation follows. The debate concerns the millennium — a period described in Revelation 20 whose nature and timin…",
    images: ["/api/og?title=Eschatology%3A+End+Times+Views"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eschatology: End Times Views — Vine",
    description: "Christians agree that Christ returns, the dead are raised, judgment occurs, and new creation follows. The debate concerns the millennium — a period described in Revelation 20 whose nature and timin…",
    images: ["/api/og?title=Eschatology%3A+End+Times+Views"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
