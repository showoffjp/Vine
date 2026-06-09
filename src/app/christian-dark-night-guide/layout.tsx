import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Dark Night of the Soul: A Christian Guide | Vine",
  description: "When God feels absent. John of the Cross, the mystics on spiritual dryness, Psalm 88 and the unresolved lament, Mother Teresa's decades of darkness, and how to walk faithfully when the light is gone.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
