import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Connect — Vine",
  description: "Connect with Christians from 184 countries. One body, every nation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
