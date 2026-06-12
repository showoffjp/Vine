import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tend and Keep: Christian Environmental Care | The Vine",
  description:
    "An ecological theology for Christians — creation care rooted in Genesis, the groaning of Romans 8, Sabbath for the land, and the new creation of Revelation. Why Christians are called to steward the earth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
