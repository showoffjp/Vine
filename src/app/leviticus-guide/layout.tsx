import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Leviticus: A Comprehensive Study Guide | Vine",
  description: "Often skipped, but the theological heartbeat of the Pentateuch: 'You shall be holy, for I the LORD your God am holy' (19:2). Leviticus answers the question the Exodus raises — how does a sinful people live with a holy God in their midst? The sacrificial system, Day of Atonement, feast calendar, and Holiness Code all find their fulfillment in Christ.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
