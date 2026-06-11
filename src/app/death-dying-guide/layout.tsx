import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Death & Dying: A Christian Guide | Vine",
  description: "A Christian theological and pastoral guide to death and dying — resurrection hope, dying well, grief and mourning, preparing spiritually for death, comforting the dying, and the Christian view of eternity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
