import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Family",
  description:
    "A biblical theology of family — the family in the OT, the radical redefinition of family by Jesus, the household codes (Ephesians 5-6), parenting in the faith, the church as the primary family, the theology of singleness as equally honored, and family discipleship.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
