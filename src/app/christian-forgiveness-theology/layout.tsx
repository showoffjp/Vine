import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Theology of Forgiveness",
  description: "What the Bible says about forgiveness — forgiving as we have been forgiven (Ephesians 4:32), the difference between forgiveness and reconciliation, why forgiveness is not condoning, how to forgive when you don't feel like it, forgiveness and justice, and what forgiveness does for the one who forgives.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
