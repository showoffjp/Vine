import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grief & Lament: A Christian Guide | Vine",
  description: "How the Bible handles grief honestly — the Psalms of lament, Job's raw suffering, Jesus weeping at Lazarus's tomb, the theology of tears, what grief looks like through loss, disappointment, and chronic pain, and how the church can bear grief together.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
