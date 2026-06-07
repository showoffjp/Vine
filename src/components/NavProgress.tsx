"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const prevPath = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const hideRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    clearInterval(timerRef.current);
    clearTimeout(hideRef.current);

    setVisible(true);
    setWidth(15);

    timerRef.current = setInterval(() => {
      setWidth(w => {
        if (w >= 80) { clearInterval(timerRef.current); return w; }
        return w + (80 - w) * 0.12;
      });
    }, 80);

    return () => {
      clearInterval(timerRef.current);
      clearTimeout(hideRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;
    clearInterval(timerRef.current);
    setWidth(100); // eslint-disable-line react-hooks/set-state-in-effect
    hideRef.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 350);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible && width === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${width}%`,
        background: "linear-gradient(90deg, #3a7d56 0%, #52a876 50%, #6B4FBB 100%)",
        zIndex: 9999,
        pointerEvents: "none",
        transition: width === 100 ? "width 0.15s ease-out" : "width 0.08s linear",
        opacity: visible ? 1 : 0,
        boxShadow: "0 0 10px rgba(58,125,86,0.7), 0 0 4px rgba(58,125,86,0.5)",
      }}
    />
  );
}
