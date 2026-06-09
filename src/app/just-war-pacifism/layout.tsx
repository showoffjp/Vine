import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just War & Christian Pacifism | Vine",
  description:
    "Can Christians participate in war? A guide to just war theory, Christian pacifism, and the Anabaptist tradition — with key biblical texts and historical positions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
