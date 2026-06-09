import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confession and Repentance: A Comprehensive Christian Guide | Vine",
  description:
    "A comprehensive guide to confession and repentance — the Hebrew concepts of shuv and nacham, Psalm 51 as the model penitential psalm, godly vs. worldly sorrow, the prodigal son's return, confession in community, and the grace that follows repentance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
