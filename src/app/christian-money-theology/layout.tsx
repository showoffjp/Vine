import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Money | The Vine",
  description:
    "What the Bible says about money — Jesus on wealth (more than any other topic), the parable of the talents, the theology of generosity (2 Corinthians 8-9), financial contentment (Philippians 4), debt and the Christian, tithing in the NT, and breaking free from financial anxiety.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
