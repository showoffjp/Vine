import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covenant Theology: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to covenant theology — the theological framework organizing the entire Bible around God's covenants. Covers the covenant of works, covenant of grace, the biblical covenants (Noahic, Abrahamic, Mosaic, Davidic, New), and the covenant vs. dispensational debate.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
