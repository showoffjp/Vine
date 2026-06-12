import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be Still: Silence and Solitude | The Vine",
  description: "A guide to the spiritual disciplines of silence and solitude — Jesus' pattern of withdrawal, the desert fathers, and hearing God in stillness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
