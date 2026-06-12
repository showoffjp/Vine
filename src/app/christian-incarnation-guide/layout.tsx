import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Incarnation Guide",
  description:
    "The mystery of the Incarnation — fully God and fully human (Chalcedon), the kenosis of Philippians 2, the virgin birth, the eternal Son taking on flesh, why the Incarnation matters for salvation, ethics, and hope.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
