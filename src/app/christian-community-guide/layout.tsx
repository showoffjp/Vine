import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Community and the Church: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to Christian community — the theology of the church, one another commands, small groups and accountability, church discipline, spiritual friendship, community in suffering, and the church as foretaste of the kingdom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
