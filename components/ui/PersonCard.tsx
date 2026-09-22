import Bracket from "./Bracket";

export default function PersonCard({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <Bracket className="p-4 flex items-center gap-3">
      <div className="w-11 h-11 border border-line flex items-center justify-center font-display text-xs shrink-0 text-copperdeep">
        {initials}
      </div>
      <div className="min-w-0">
        <div className="font-display font-medium text-sm truncate">{name}</div>
        <div className="text-xs mt-0.5 text-muted">{role}</div>
      </div>
    </Bracket>
  );
}
