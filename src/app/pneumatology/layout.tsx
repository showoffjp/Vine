import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pneumatology: The Doctrine of the Holy Spirit | Vine",
  description:
    "A comprehensive theological guide to the Holy Spirit — his personhood, deity, work in creation and salvation, gifts, fruit, baptism of the Spirit, and presence in the believer's life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
