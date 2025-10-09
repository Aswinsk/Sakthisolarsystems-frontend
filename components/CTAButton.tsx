import Link from "next/link";
import { clsx } from "clsx";

export function CTAButton({
  href,
  children,
  variant = "primary"
}: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; }) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
    variant === "primary" && "bg-primary text-white hover:opacity-90",
    variant === "secondary" && "bg-secondary text-white hover:opacity-90",
    variant === "ghost" && "border border-neutral-200 hover:bg-neutral-50"
  );
  return <Link href={href} className={classes}>{children}</Link>;
}
