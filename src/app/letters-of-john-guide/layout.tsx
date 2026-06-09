import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Letters of John: 1, 2 & 3 John Study Guide | Vine",
  description: "John's letters on love, truth, and fellowship — God is love (1 John 4:8), walking in the light, loving one another as the test of genuine faith, and assurance of eternal life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
