import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gifted for the Common Good: Christian Spiritual Gifts | The Vine",
  description:
    "An exploration of the charismata — the gifts of the Spirit distributed to every member of the body of Christ — and what every-member ministry looks like when each gift is discovered, developed, and deployed for the common good.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
