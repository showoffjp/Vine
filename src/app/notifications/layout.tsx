import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications {unreadCount > 0 && ( )}",
  description: "Stay connected with your community and content.",
  openGraph: {
    title: "Notifications {unreadCount > 0 && ( )} — Vine",
    description: "Stay connected with your community and content.",
    images: ["/api/og?title=Notifications+%7BunreadCount+%3E+0+%26%26+(+)%7D"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notifications {unreadCount > 0 && ( )} — Vine",
    description: "Stay connected with your community and content.",
    images: ["/api/og?title=Notifications+%7BunreadCount+%3E+0+%26%26+(+)%7D"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
