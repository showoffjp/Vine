import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark 15: The Crucifixion of Jesus - A Study Guide | Vine",
  description: "Jesus before Pilate, the release of Barabbas, the mockery of the soldiers, the crucifixion at Golgotha, the cry of dereliction, the torn temple curtain, the centurion's confession, and the burial. A study guide to Mark chapter 15.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
