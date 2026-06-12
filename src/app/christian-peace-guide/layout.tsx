import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Peace — Shalom, the Prince of Peace, and the Peacemakers | The Vine",
  description:
    "A guide to Christian peace — shalom as wholeness, John 14:27 and the peace Jesus gives, the Prince of Peace, peace with God and the peace of God, Christ asleep in the storm, peace as umpire in Colossians 3:15, and the ministry of reconciliation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
