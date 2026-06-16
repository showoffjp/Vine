import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hebrews 5: The High Priesthood of Christ and the Order of Melchizedek | Vine",
  description:
    "A comprehensive verse-by-verse study guide to Hebrews chapter 5 - the qualifications of a high priest, Christ appointed by God rather than self-exalted, the priesthood after the order of Melchizedek, the prayers and tears of Gethsemane, learning obedience through suffering, and the call to spiritual maturity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
