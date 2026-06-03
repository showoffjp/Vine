import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide to the Christian Catechisms",
  description: "Catechisms are question-and-answer guides to Christian doctrine used for 2,000 years to form believers in the faith. From Luther to Westminster to Heidelberg — every tradition has its catechism.",
  openGraph: {
    title: "Guide to the Christian Catechisms — Vine",
    description: "Catechisms are question-and-answer guides to Christian doctrine used for 2,000 years to form believers in the faith. From Luther to Westminster to Heidelberg — every tradition has its catechism.",
    images: ["/api/og?title=Guide+to+the+Christian+Catechisms"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide to the Christian Catechisms — Vine",
    description: "Catechisms are question-and-answer guides to Christian doctrine used for 2,000 years to form believers in the faith. From Luther to Westminster to Heidelberg — every tradition has its catechism.",
    images: ["/api/og?title=Guide+to+the+Christian+Catechisms"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
