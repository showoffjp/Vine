import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "As Christ Loved the Church: Christian Marriage | The Vine",
  description:
    "A deep guide to covenant marriage — mutual submission, sacrificial love, the two becoming one flesh, and how marriage becomes an instrument of sanctification and an icon of Christ and the church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
