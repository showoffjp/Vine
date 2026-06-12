import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Silence — For God Alone My Soul Waits | The Vine",
  description:
    "A guide to the discipline of silence — Psalm 62, the silences of Jesus, the desert fathers and hesychia, Elijah and the sound of sheer silence, Habakkuk 2:20, and silence as resistance to the noise economy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
