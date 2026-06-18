import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel 18 Study Guide &mdash; The Soul Who Sins Shall Die",
  description: "A verse-by-verse guide to Ezekiel 18 &mdash; God's refutation of inherited guilt, individual accountability, the righteous who turns to sin and the sinner who turns to righteousness, and the passionate call to turn and live.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
