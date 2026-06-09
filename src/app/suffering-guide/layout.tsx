import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Suffering: How Christians Endure and Find God in Pain | Vine",
  description:
    "A pastoral theology of suffering — what the Bible says about pain and trials, the purposes of suffering, how to minister to those who suffer, the lament tradition, suffering and sanctification, and the hope that sustains through the darkest seasons.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
