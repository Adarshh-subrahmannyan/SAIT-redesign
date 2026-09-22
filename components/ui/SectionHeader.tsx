import Tag from "./Tag";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-9">
      <Tag accent>{eyebrow}</Tag>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-lg text-sm sm:text-base text-inksoft">
          {subtitle}
        </p>
      )}
    </div>
  );
}
