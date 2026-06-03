import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loving Your Neighbor",
  description: "The second greatest commandment is tested not in the abstract but in the concrete — the person next door, on your street, in your building. Your neighborhood is not a residence; it's a calling.",
  openGraph: {
    title: "Loving Your Neighbor — Vine",
    description: "The second greatest commandment is tested not in the abstract but in the concrete — the person next door, on your street, in your building. Your neighborhood is not a residence; it's a calling.",
    images: ["/api/og?title=Loving+Your+Neighbor"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loving Your Neighbor — Vine",
    description: "The second greatest commandment is tested not in the abstract but in the concrete — the person next door, on your street, in your building. Your neighborhood is not a residence; it's a calling.",
    images: ["/api/og?title=Loving+Your+Neighbor"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
