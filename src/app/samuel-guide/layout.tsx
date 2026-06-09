import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 & 2 Samuel: A Comprehensive Study Guide | Vine",
  description: "Hannah's prayer, Samuel's call, Saul's rise and fall, David and Goliath, David and Bathsheba, Absalom's rebellion, and what it means that God chose a man after his own heart. The theology of kingship, the Davidic covenant, and the arc from failure to hope.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
