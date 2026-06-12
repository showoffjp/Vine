import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Generosity — The Theology and Practice of Giving | The Vine",
  description:
    "A guide to biblical generosity — exploring cheerful giving, the widow&rsquo;s mites, tithing theology, the Jerusalem church, treasure in heaven, and generosity as a spiritual discipline.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
