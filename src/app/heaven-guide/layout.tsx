import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heaven and the New Creation: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the Christian hope of heaven and the new creation — what the Bible actually says about the intermediate state, the new Jerusalem, resurrection bodies, what we will do in eternity, and how the hope of heaven shapes life now.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
