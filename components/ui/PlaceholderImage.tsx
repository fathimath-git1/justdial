import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  gradient: string;
  emoji?: string;
  className?: string;
}

/**
 * Lightweight local placeholder standing in for a real photo asset.
 * Keeps exact dimensions/aspect ratio controlled by the parent via className,
 * without hotlinking any external/copyrighted images.
 */
export function PlaceholderImage({ gradient, emoji, className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br",
        gradient,
        className
      )}
      aria-hidden="true"
    >
      {emoji && <span className="text-3xl select-none opacity-80">{emoji}</span>}
    </div>
  );
}
