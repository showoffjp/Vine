import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "If You Love Me, Keep My Commandments: Christian Obedience | The Vine",
  description:
    "A guide to Christian obedience — love as the root of obedience, the obedience of Christ as our template, why obedience is not legalism, and the blessing hidden in hard commands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
