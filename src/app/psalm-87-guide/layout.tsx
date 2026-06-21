import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 87 Study Guide — Glorious Things Are Said of You, City of God",
  description: "Deep study of Psalm 87: Zion as the mother of nations, the enrollment of peoples in the city of God, and the messianic vision of global worship. Commentary and application.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
