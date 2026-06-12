import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Render Unto Caesar: Christian Faith and Politics | The Vine",
  description:
    "Exploring Christian political engagement — the limits of political hope, the prophetic witness of the church, faithful citizenship in two kingdoms, and why political hope always disappoints.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
