import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology Proper: The Attributes of God — A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the doctrine of God — who God is and what he is like. Covers the communicable and incommunicable attributes, divine simplicity, the name of God, God's holiness, love, wrath, sovereignty, and how the attributes shape worship and the Christian life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
