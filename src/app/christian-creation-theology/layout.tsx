import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Creation",
  description:
    "Creation theology — Genesis 1-2 and its literary genre, the image of God (imago Dei), creation ex nihilo, the fall and its effects on creation, evolution and Christian faith, the new creation, and why caring for the earth is a Christian calling.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
