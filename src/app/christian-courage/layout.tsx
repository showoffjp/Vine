import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be Strong and Courageous: Christian Courage | The Vine",
  description:
    "Courage in faith means standing firm, speaking truth, and letting the fear of God displace the fear of man. Explore Joshua, Acts 4, Bonhoeffer, and the call to costly obedience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
