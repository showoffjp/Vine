import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preaching: A Comprehensive Guide to Biblical Exposition | Vine",
  description:
    "A comprehensive guide to Christian preaching — the theology of preaching, expository vs. topical methods, sermon structure, application, delivery, the role of the Holy Spirit, common mistakes, and resources for preachers and those who want to listen better.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
