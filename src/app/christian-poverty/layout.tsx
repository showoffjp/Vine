import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Good News to the Poor: A Christian Response to Poverty | The Vine",
  description:
    "A Christian theology of poverty — the preferential option for the poor in Scripture, the Jubilee as God's economic vision, the early church's koinonia economics, and the call to dignifying, development-oriented generosity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
