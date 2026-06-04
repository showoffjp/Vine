"use client";
import { useState, useEffect } from "react";

// Persists a string-valued state to localStorage. Useful for active tab and
// selected voice IDs that should survive page reloads.
export function usePersistedState<T extends string>(
  key: string,
  defaultValue: T,
): [T, (v: T | string) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return (stored as T | null) ?? defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, state);
    } catch {}
  }, [key, state]);

  return [state, setState as (v: T | string) => void];
}
