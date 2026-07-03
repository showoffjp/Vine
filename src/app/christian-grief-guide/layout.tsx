import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Grief",
  description: "Grief through a Christian lens — what the Bible says about mourning, the Psalms of lament, Jesus weeping at Lazarus's tomb, the stages of grief and their theological meaning, grief and resurrection hope, and how the church can walk alongside the bereaved.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
