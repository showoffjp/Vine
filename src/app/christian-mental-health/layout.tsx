import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Body Is a Temple: Christian Mental Health | The Vine",
  description:
    "Explore the integration of faith and psychology, the biblical roots of mental health care, why the church has stigmatized mental illness, and the hope Scripture offers — from Elijah's depression to the holistic healing of Jesus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
