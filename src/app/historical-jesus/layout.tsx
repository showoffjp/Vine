import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Did Jesus Really Exist? The Historical Evidence &mdash; The Vine",
  description: "The historical case that Jesus of Nazareth was a real figure of history &mdash; the non-Christian witnesses (Josephus, Tacitus, Pliny, Suetonius, the Talmud, Lucian), the early Christian sources as history, the minimal-facts method, and an honest answer to the claim that Jesus never existed.",
  openGraph: {
    title: "Did Jesus Really Exist? The Historical Evidence &mdash; The Vine",
    description: "The extrabiblical and historical evidence for Jesus of Nazareth: Roman and Jewish witnesses, the early creed of 1 Corinthians 15, and why virtually all historians &mdash; Christian and not &mdash; agree Jesus was real.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
