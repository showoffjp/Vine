import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Trauma and Healing",
  description: "Trauma and the Christian faith — what trauma is (neuroscience and theology), biblical figures who experienced trauma (Joseph, Hagar, the rape of Tamar, the psalmists), the theology of suffering and redemption, EMDR and trauma therapy for Christians, and the hope of wholeness.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
