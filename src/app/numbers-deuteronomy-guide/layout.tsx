import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Numbers & Deuteronomy: A Comprehensive Study Guide | Vine",
  description: "Forty years in the wilderness — the census, the rebellion at Kadesh, the bronze serpent, Balaam's donkey, and the Shema. Moses's farewell sermon, choose life or death, and the covenant renewal on the plains of Moab.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
