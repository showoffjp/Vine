import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Job: A Comprehensive Study Guide | Vine",
  description: "The prose frame, the poetry of lament, the three friends' bad theology, Job's honest protest before God, the whirlwind speech, and what Job teaches us about suffering, lament, and divine freedom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
