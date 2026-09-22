import { cn } from "@/lib/utils";

export default function Tag({
  children,
  accent = false,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono text-[0.7rem] border px-2 py-0.5 inline-flex items-center gap-1.5",
        accent ? "border-copper text-copperdeep" : "border-line",
        className
      )}
    >
      {accent && <span className="w-1.5 h-1.5 rounded-full bg-copper" />}
      {children}
    </span>
  );
}
