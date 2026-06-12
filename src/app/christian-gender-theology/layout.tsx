import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Theology of Gender",
  description:
    "The theology of gender — complementarianism vs. egalitarianism, the key biblical texts (Genesis 1-2, 1 Cor 14, 1 Tim 2, Gal 3:28), the debate over women in leadership, the cultural vs. transcultural distinction, and a pastoral approach that honors both conviction and charity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
