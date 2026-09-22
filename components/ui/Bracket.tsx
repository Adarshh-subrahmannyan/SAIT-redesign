import { cn } from "@/lib/utils";

export default function Bracket({
  as: As = "div",
  className,
  children,
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  return <As className={cn("bracket", className)}>{children}</As>;
}
