import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Lament — The Theology and Practice of Holy Grief | The Vine",
  description:
    "A guide to biblical lament — one-third of the Psalms are lament, the structure of biblical grief (address, complaint, petition, trust), Jesus lamenting, and the voices who have taught the church to cry out faithfully.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
