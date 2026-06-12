import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Indeed: Christian Approach to Addiction | The Vine",
  description:
    "Explore addiction as disordered worship, the neuroscience of craving and the theology of grace, the prodigal son as the archetypal recovery narrative, why white-knuckle sobriety fails without heart transformation, and the role of community in genuine freedom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
