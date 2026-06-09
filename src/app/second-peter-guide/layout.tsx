import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of 2 Peter: A Comprehensive Study Guide | Vine",
  description: "Peter's farewell letter: 'I think it right, as long as I am in this body, to stir you up by way of reminder' (1:13). Divine power, precious promises, the transfiguration as eyewitness testimony, false teachers like Balaam, the patience of God in the last days, and Paul's letters called Scripture. One of the most theologically packed short letters in the NT.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
