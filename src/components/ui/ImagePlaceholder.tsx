import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  position: string;
  label: string;
  briefing?: string;
  format?: 'landscape' | 'portrait' | 'square';
  aspect?: string;
  priority?: 'must-have' | 'nice-to-have' | 'can-use-stock';
  category?: 'photo-custom' | 'photo-stock' | 'illustration';
  className?: string;
}

const priorityLabels: Record<string, string> = {
  'must-have': 'Kundenfoto erforderlich',
  'nice-to-have': 'Kundenfoto empfohlen',
  'can-use-stock': 'Stockfoto möglich',
};

const categoryLabels: Record<string, string> = {
  'photo-custom': 'Eigenes Foto',
  'photo-stock': 'Stockfoto',
  'illustration': 'Illustration',
};

export default function ImagePlaceholder({
  position,
  label,
  briefing,
  format,
  aspect,
  priority,
  category,
  className,
}: ImagePlaceholderProps) {
  const priorityLabel = priority ? priorityLabels[priority] : undefined;
  const categoryLabel = category ? categoryLabels[category] : undefined;

  return (
    <div
      className={cn('image-placeholder', className)}
      data-image-position={position}
      data-image-priority={priority}
      data-image-category={category}
      data-image-format={format}
      data-image-aspect={aspect}
      data-image-briefing={briefing}
    >
      <div className="image-placeholder__inner">
        {/* Camera icon */}
        <svg className="image-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>

        {/* Label */}
        <span className="image-placeholder__label">{label}</span>

        {/* Briefing text */}
        {briefing && (
          <span className="image-placeholder__briefing">{briefing}</span>
        )}

        {/* Badges */}
        <div className="image-placeholder__badges">
          {format && (
            <span className="image-placeholder__badge">{format}</span>
          )}
          {priorityLabel && (
            <span className="image-placeholder__badge">{priorityLabel}</span>
          )}
          {categoryLabel && (
            <span className="image-placeholder__badge">{categoryLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}
