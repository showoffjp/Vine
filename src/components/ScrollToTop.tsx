"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
      style={{
        background: "linear-gradient(135deg, #00CC66, #00FF88)",
        boxShadow: "0 4px 20px rgba(0,255,136,0.4)",
        color: "#07070F",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  );
}
