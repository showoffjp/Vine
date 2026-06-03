import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Documentary Films",
  description: "The best documentary films for understanding faith, missions, theology, and the supernatural. These are not Christian films about comfortable life — they are documents of extraordinary things God i…",
  openGraph: {
    title: "Christian Documentary Films — Vine",
    description: "The best documentary films for understanding faith, missions, theology, and the supernatural. These are not Christian films about comfortable life — they are documents of extraordinary things God i…",
    images: ["/api/og?title=Christian+Documentary+Films"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Documentary Films — Vine",
    description: "The best documentary films for understanding faith, missions, theology, and the supernatural. These are not Christian films about comfortable life — they are documents of extraordinary things God i…",
    images: ["/api/og?title=Christian+Documentary+Films"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
