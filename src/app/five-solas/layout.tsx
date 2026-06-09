import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Five Solas of the Reformation | Vine",
  description:
    "The five theological rallying cries of the Protestant Reformation — Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, Soli Deo Gloria — explained with biblical foundations and historical context.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
