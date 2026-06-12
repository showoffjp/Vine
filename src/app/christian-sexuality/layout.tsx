import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Created Male and Female: A Christian View of Sexuality | The Vine",
  description:
    "Sex is a sign pointing beyond itself to the Christ–Church union. Explore the theology of the body, chastity as a universal Christian calling, a compassionate and orthodox engagement with homosexuality, and redemption for sexual brokenness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
