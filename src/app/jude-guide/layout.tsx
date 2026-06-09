import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Jude: A Comprehensive Study Guide | Vine",
  description: "Jude writes with urgent pastoral fire: 'Contend for the faith that was once for all delivered to the saints.' Twenty-five verses of theological density — false teachers, three OT examples of judgment, and one of the most beautiful doxologies in Scripture: 'Now to him who is able to keep you from stumbling...'",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
