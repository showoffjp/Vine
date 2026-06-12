import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Community Life Guide",
  description:
    "The theology of Christian community — the one-anothers of the NT, koinonia as communion not just fellowship, the house church vs. institutional church, hospitality as spiritual discipline, small groups and accountability, and why you cannot follow Jesus alone.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
