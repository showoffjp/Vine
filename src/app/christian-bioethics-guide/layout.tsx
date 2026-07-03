import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Bioethics Guide",
  description: "Christian bioethics — the sanctity of human life, abortion and the status of the unborn, end-of-life care (euthanasia and physician-assisted suicide), reproductive technologies (IVF, surrogacy), genetic engineering, and how the imago Dei shapes every bioethical question.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
