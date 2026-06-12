import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Poverty",
  description:
    "What the Bible says about poverty and wealth — the OT laws of Jubilee and gleaning, the prophets on economic justice, Jesus and the poor (Luke 4, Luke 16), the early church and possessions, liberation theology, and the prosperity gospel critique.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
