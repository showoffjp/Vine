import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Trinity Guide",
  description:
    "The doctrine of the Trinity — the biblical basis, the Nicene Creed, the great heresies (Arianism, modalism, tritheism), the eternal generation of the Son, perichoresis and divine communion, and how the Trinity shapes Christian life and prayer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
