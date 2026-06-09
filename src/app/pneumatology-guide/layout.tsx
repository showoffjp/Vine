import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pneumatology: A Comprehensive Guide to the Holy Spirit | Vine",
  description:
    "A comprehensive guide to pneumatology — the theology of the Holy Spirit. Covers the person of the Spirit, his deity and personality, his work in creation and salvation, spiritual gifts, the fruit of the Spirit, and the cessationist-continuationist debate.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
