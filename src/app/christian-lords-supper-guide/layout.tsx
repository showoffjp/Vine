import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Lord's Supper Guide | Vine",
  description: "The theology of the Lord’s Supper — transubstantiation (Catholic), consubstantiation (Lutheran), the Reformed spiritual presence view, the memorial view (Zwingli), the words of institution, the Supper as proclamation, and how this meal shapes Christian community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
