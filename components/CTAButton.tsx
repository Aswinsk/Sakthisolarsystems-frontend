import Link from "next/link";
import { clsx } from "clsx";
export function CTAButton({ href, children, variant = "primary" }:
  { href: string; children: React.ReactNode; variant?: "primary"|"secondary"|"ghost"; }) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition will-change-transform",
    variant === "primary" && "bg-primary text-white hover:opacity-90 shadow-soft",
    variant === "secondary" && "bg-secondary text-white hover:opacity-90 shadow-soft",
    variant === "ghost" && "border border-black/10 hover:bg-black/5"
  );
  return <Link href={href} className={classes}>{children}</Link>;
}
