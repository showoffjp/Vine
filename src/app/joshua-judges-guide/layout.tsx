import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Joshua & Judges: A Comprehensive Study Guide | Vine",
  description: "Two books, two radically different outcomes. Joshua's conquest and Rahab's faith, the covenant renewal at Shechem, the cycles of Judges — sin, oppression, crying out, deliverance. What does it mean to possess your promised land?",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
