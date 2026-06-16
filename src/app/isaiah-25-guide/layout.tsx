import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 25 Bible Study Guide",
  description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations. A deep guide to this glorious chapter.",
  openGraph: {
    title: "Isaiah 25 Bible Study Guide -- Vine",
    description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations.",
    images: ["/api/og?title=Isaiah+25+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 25 Bible Study Guide -- Vine",
    description: "Isaiah 25 is a triumphant song of praise anticipating the eschatological feast, the defeat of death, and the removal of the veil from all nations.",
    images: ["/api/og?title=Isaiah+25+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
