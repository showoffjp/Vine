import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enough: The Discipline of Christian Simplicity | The Vine",
  description: "A guide to simplicity as spiritual discipline — contentment, freedom from materialism, and the liberation that comes from loosening our grip on possessions, status, and the accumulation that crowds out God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
