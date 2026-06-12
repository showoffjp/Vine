import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blessed Are Those Who Mourn: Christian Grief | The Vine",
  description: "A guide to Christian grief — the psalms of lament, mourning with hope, the God who weeps with us, and why honest sorrow is a spiritual discipline, not a failure of faith.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
