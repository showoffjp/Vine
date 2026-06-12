import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Community: Koinonia, One-Another Commands, and the Body of Christ | The Vine",
  description:
    "A comprehensive guide to Christian community &mdash; koinonia fellowship, the one-another commands of the New Testament, the church as body of Christ, individualism vs. communal faith, intentional communities like Taiz&eacute; and L&rsquo;Arche, and why community is both hard and essential.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
