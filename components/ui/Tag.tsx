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
        "font-mono text-[0.75rem] font-bold uppercase tracking-widest px-3 py-1 inline-flex items-center gap-1.5 rounded-full border-2",
        accent 
          ? "border-black bg-[var(--yellow)] text-black" 
          : "border-black/10 bg-white text-black/60",
        className
      )}
    >
      {accent && <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />}
      {children}
    </span>
  );
}
