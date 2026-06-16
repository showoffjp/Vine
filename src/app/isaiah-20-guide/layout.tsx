import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 20 Bible Study Guide | The Vine",
  description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush. Covers all 6 verses, key themes, and application.",
  openGraph: {
    title: "Isaiah 20 Bible Study Guide -- Vine",
    description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush.",
    images: ["/api/og?title=Isaiah+20+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 20 Bible Study Guide -- Vine",
    description: "An in-depth study of Isaiah 20 -- the prophetic sign-act where God commanded Isaiah to walk naked and barefoot for 3 years as a warning against trusting in Egypt and Cush.",
    images: ["/api/og?title=Isaiah+20+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
