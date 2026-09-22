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
    <div className="mb-12">
      <Tag accent>{eyebrow}</Tag>
      <h1 className="font-grotesk text-4xl sm:text-6xl font-bold mt-4 max-w-xl text-black/90">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-lg text-base sm:text-lg text-black/70 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
