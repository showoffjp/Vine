import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Bible Study Guide",
  description:
    "How to study the Bible — inductive Bible study (observation, interpretation, application), the SOAP method, lectio divina for Scripture, studying in community vs. alone, Bible study tools (concordances, commentaries, lexicons), and building a sustainable habit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
