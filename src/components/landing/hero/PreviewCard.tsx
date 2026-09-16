export function PreviewCard({
  src = "",
  alt = "",
  tag = "Event",
  className = "",
  rotateClass = "",
}: {
  src?: string;
  alt?: string;
  tag?: string;
  className?: string;
  rotateClass?: string;
}) {
  return (
    <div className={`hidden md:block absolute w-[200px] lg:w-[260px] ${className}`}>
      <div className={`rounded-2xl overflow-hidden shadow-lg ${rotateClass}`}>
        <img src={src} alt={alt} className="w-full h-[150px] object-cover" />
        <div className="bg-card px-3 py-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{tag}</span>
        </div>
      </div>
    </div>
  );
}
