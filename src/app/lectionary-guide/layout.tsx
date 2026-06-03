import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lectionary Preaching Guide",
  description: "The Revised Common Lectionary is a three-year cycle of Scripture readings that connects preachers and congregations to the whole Bible and the church's calendar. Here is how to understand and use it.",
  openGraph: {
    title: "The Lectionary Preaching Guide — Vine",
    description: "The Revised Common Lectionary is a three-year cycle of Scripture readings that connects preachers and congregations to the whole Bible and the church's calendar. Here is how to understand and use it.",
    images: ["/api/og?title=The+Lectionary+Preaching+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lectionary Preaching Guide — Vine",
    description: "The Revised Common Lectionary is a three-year cycle of Scripture readings that connects preachers and congregations to the whole Bible and the church's calendar. Here is how to understand and use it.",
    images: ["/api/og?title=The+Lectionary+Preaching+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
