import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justification by Faith: The Heart of the Gospel | Vine",
  description:
    "A comprehensive guide to the doctrine of justification — what it means to be declared righteous before God, the role of faith and works, imputed righteousness, and the Reformation controversy that split Western Christianity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
