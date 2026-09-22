import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-transform duration-150";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper border border-ink hover:bg-copperdeep hover:border-copperdeep hover:-translate-y-0.5"
      : "border border-line text-ink hover:border-copper hover:-translate-y-0.5";

  const classes = cn(base, styles, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
