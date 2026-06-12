import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selah: The Ministry of Christian Sabbatical | The Vine",
  description:
    "The theology of stopping — sabbatical rest for ministry workers, the Selah pause of the Psalms, Elijah's wilderness retreat, and what it means to return to work renewed and reordered.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
