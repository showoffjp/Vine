import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Creation | Vine",
  description:
    "A Christian theology of creation — the doctrine of creatio ex nihilo, creation's goodness and order, the relationship between faith and science, the cultural mandate, and how creation points to the Creator.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
