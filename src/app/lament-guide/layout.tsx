import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Lament: A Comprehensive Guide to Crying Out to God | Vine",
  description:
    "A comprehensive guide to biblical lament — the overlooked spiritual practice of honest grief expressed to God. Covers the anatomy of a lament psalm, why lament is faithful (not faithless), how to lament personally and corporately, the trajectory from protest to praise, and lament in community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
