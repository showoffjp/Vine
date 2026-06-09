import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastoral Care: A Comprehensive Guide to Shepherding the Flock | Vine",
  description:
    "A comprehensive guide to Christian pastoral care — the theology of shepherding, visitation, caring for the dying and grieving, crisis care, church discipline, lay shepherding, and sustaining ministers for the long haul.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
