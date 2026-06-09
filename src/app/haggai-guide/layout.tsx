import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Haggai: A Comprehensive Study Guide | Vine",
  description: "Haggai speaks to a discouraged community that has stopped building. 'Is it time for you to dwell in paneled houses while God's house lies in ruins?' (1:4). The latter glory will be greater than the former (2:9). Two months of preaching that restarted the Temple and planted the promise of the Messiah.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
