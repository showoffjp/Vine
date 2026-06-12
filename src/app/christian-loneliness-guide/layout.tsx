import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Loneliness Guide — God Sets the Lonely in Families | The Vine",
  description:
    "A guide to loneliness and the gospel — Genesis 2:18, the loneliness of Jesus in Gethsemane and on the cross, David's lonely psalms, Elijah's despair, Nouwen on transforming loneliness into solitude, and the church as family for the lonely.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
