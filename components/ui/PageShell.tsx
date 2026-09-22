export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 rise-in">
      {children}
    </div>
  );
}
