import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  badge,
  action,
}: {
  title: string;
  badge?: string;
  action?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-xl font-bold text-jd-text">
        {title}
        {badge && (
          <span className="rounded bg-jd-orange px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
            {badge}
          </span>
        )}
      </h2>
      {action && (
        <a
          href="#"
          className="flex items-center gap-0.5 text-sm font-medium text-jd-blue hover:underline"
        >
          {action}
          <ChevronRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
