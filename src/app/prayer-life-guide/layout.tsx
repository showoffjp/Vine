import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Building a Prayer Life | Vine",
  description: "Practical theology and spiritual practices for developing a deep, sustainable prayer life — from the ACTS model to fixed-hour prayer, praying the Psalms, and intercession.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
