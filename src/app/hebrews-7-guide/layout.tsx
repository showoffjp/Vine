import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hebrews 7 Guide &mdash; The Priesthood of Melchizedek",
  description: "A comprehensive Bible study guide to Hebrews 7: the order of Melchizedek, the limitations of the Levitical priesthood, and Jesus as our perfect eternal High Priest and guarantor of the better covenant.",
  openGraph: {
    title: "Hebrews 7 &mdash; Melchizedek and the Perfect Priest",
    description: "A comprehensive Bible study guide to Hebrews 7: the order of Melchizedek, the limitations of the Levitical priesthood, and Jesus as our perfect eternal High Priest and guarantor of the better covenant.",
    images: ["/api/og?title=Hebrews+7+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebrews 7 &mdash; Melchizedek and the Perfect Priest",
    description: "A comprehensive Bible study guide to Hebrews 7: the order of Melchizedek, the limitations of the Levitical priesthood, and Jesus as our perfect eternal High Priest and guarantor of the better covenant.",
    images: ["/api/og?title=Hebrews+7+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
