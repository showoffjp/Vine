import { Metadata } from "next";

export const metadata: Metadata = {
  title: "James 5: Warning to the Rich, Patient Endurance, Prayer, and Mutual Accountability | Vine",
  description:
    "A deep verse-by-verse study of James 5 — the prophetic woe to the wealthy, makrothumia like the farmer and Job, the prayer of faith that heals, and the communal task of restoring wandering believers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
