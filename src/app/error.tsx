"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "#07070F", color: "#F2F2F8" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(192,80,106,0.06) 0%, transparent 70%)",
        }}
      />

      <Link href="/" className="flex items-center gap-2 mb-12">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #3a7d56, #8B6FDB)" }}
        >
          <span className="text-black font-black">V</span>
        </div>
        <span className="text-xl font-black">Vine</span>
      </Link>

      <div className="text-6xl mb-6">⚠️</div>
      <h1 className="text-3xl font-black mb-3">Something went wrong</h1>
      <p className="text-lg mb-2 max-w-md" style={{ color: "#8A8AA8" }}>
        We hit an unexpected error. It&apos;s not you — it&apos;s us. Try refreshing,
        and if it persists, we&apos;re on it.
      </p>
      <p className="text-sm italic mb-10" style={{ color: "rgba(58,125,86,0.4)" }}>
        &ldquo;His mercies are new every morning.&rdquo; — Lamentations 3:23
      </p>

      <div className="flex gap-3">
        <button type="button"
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #4a9e6e, #3a7d56)",
            color: "#07070F",
          }}
        >
          <RefreshCw size={15} /> Try Again
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#A0A0C0",
          }}
        >
          <Home size={15} /> Go Home
        </Link>
      </div>
    </div>
  );
}
