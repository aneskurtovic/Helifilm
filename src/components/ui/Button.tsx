"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm tracking-wide transition-colors duration-200 px-6 py-3 min-h-[48px] whitespace-nowrap";

const styles: Record<Variant, string> = {
  primary:
    "bg-[#D4A418] text-black hover:bg-[#e6b525] shadow-[0_8px_24px_-12px_rgba(212,164,24,0.6)]",
  secondary:
    "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm",
  ghost: "text-white/75 hover:text-[#D4A418]",
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", children, className = "", ...rest },
  ref
) {
  return (
    <motion.a
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
});
