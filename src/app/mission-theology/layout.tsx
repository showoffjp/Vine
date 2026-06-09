import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Mission | Vine",
  description:
    "A comprehensive theology of Christian mission — the missio Dei, the Great Commission, the relationship between evangelism and social action, contextualization, unreached peoples, and the theology behind global missions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
