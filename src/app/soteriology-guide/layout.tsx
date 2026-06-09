import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soteriology: A Complete Guide to the Doctrine of Salvation | Vine",
  description:
    "A comprehensive guide to soteriology — the doctrine of salvation. Covers the ordo salutis, election and predestination, effectual calling, regeneration, conversion, justification, adoption, sanctification, perseverance of the saints, and glorification.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
