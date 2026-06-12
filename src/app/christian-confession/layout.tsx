import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "If We Confess: The Practice of Christian Confession | The Vine",
  description:
    "Confession is a means of grace — the freedom of being fully known and fully forgiven. Explore the theology of confession, voices who practiced it, and a private space to record what you have confessed and the grace received.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
