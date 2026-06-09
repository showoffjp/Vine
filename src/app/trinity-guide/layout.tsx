import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Trinity: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the doctrine of the Trinity — one God in three persons. Covers biblical evidence, the development of Trinitarian doctrine, the Nicene Creed, the Filioque controversy, social vs. classical views, practical implications, and the major heresies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
