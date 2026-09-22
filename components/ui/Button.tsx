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
    "pill-btn border-2 border-black inline-flex items-center justify-center px-6 py-3 font-grotesk font-bold text-sm transition-all";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/80 hover:scale-105"
      : "bg-white text-black border-black/10 hover:border-black/30 hover:bg-black/5 hover:scale-105";

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
