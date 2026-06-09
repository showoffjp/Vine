import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Joy: A Comprehensive Guide to Joy and Contentment in Christ | Vine",
  description:
    "A comprehensive guide to Christian joy — joy in the New Testament, the difference between joy and happiness, joy in suffering (Philippians), contentment as a learned discipline, the Psalms of joy, and practical paths to deeper joy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
