import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Suffering: A Comprehensive Theology Guide | Vine",
  description:
    "A comprehensive guide to Christian suffering — the theology of the cross, suffering in the Psalms, Paul's theology of suffering, Job and theodicy, the gift of lament, suffering with Christ, and how grief and hope coexist.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
