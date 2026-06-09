import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Anthropology: What Does It Mean to Be Human? | Vine",
  description:
    "A comprehensive guide to Christian anthropology — the biblical theology of the human person. Covers the body-soul question, the conscience, human emotions, free will, gender and sexuality, death, and what it means to live fully human as God intended.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
