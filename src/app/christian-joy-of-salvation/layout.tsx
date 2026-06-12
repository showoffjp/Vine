import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joy in the Lord: The Joy of Salvation | The Vine",
  description:
    "Explore joy as the deep gladness of the saved — a fruit of the Spirit, a response to the gospel, a companion in suffering, and the eschatological song of the redeemed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
