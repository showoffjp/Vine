import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sojourners and Strangers: Christian Pilgrimage | The Vine",
  description:
    "Pilgrimage as spiritual discipline — the Christian as stranger in the world, the Psalms of Ascent, sacred journeys to Jerusalem, Santiago, Iona, and Taizé, and the inner journey of the soul toward God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
