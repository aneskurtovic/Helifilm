import { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-[0.7rem] uppercase tracking-[0.28em] text-white/55 ${className}`}
    >
      {children}
    </span>
  );
}
