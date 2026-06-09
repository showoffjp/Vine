import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science and Christian Faith: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the relationship between science and Christian faith — creation models, evolution debates, the age of the earth, the historical Adam, cosmology, and integrating faith with scientific knowledge.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
