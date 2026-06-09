import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of James: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to James — faith and works, the testing of faith, taming the tongue, worldly wisdom vs. heavenly wisdom, the prayer of faith, and practical Christian ethics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
