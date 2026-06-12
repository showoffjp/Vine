import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Heaven",
  description:
    "What does the Bible actually say about heaven? — the New Creation vs. ‘floating on clouds,’ N.T. Wright on resurrection, the intermediate state, the New Jerusalem, the beatific vision, and why heaven isn’t the end of the story.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
