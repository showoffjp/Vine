import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generational Trauma & Faith | Vine",
  description: "Biblical and pastoral guidance on generational trauma — how family wounds pass down, what Scripture says, and how healing is possible in Christ.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
