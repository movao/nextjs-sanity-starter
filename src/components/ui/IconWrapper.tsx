import IconOrEmoji from './IconOrEmoji';
import { design } from '@/config/design';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: string;
  size?: number;
  className?: string;
}

/**
 * IconWrapper — Rendert ein Icon mit dem im Design-Profil gewählten Stil.
 *
 * Für Live-Preview: Alle 3 Varianten werden gerendert, die aktive wird
 * per CSS sichtbar gemacht basierend auf `html[data-icon-style]`.
 * Ohne data-Attribut (normaler Build): nur die design.ts-Variante sichtbar.
 */
export default function IconWrapper({
  icon,
  size = 24,
  className = '',
}: IconWrapperProps) {
  const defaultStyle = (design.iconStyle?.id || 'filledBox') as string;

  return (
    <>
      {/* FilledBox */}
      <span
        data-icon="filledBox"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-xl',
          'bg-muted text-primary text-xl',
          'group-hover:bg-primary group-hover:text-background transition-colors',
          defaultStyle !== 'filledBox' && 'hidden',
          className,
        )}
      >
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>

      {/* Ring */}
      <span
        data-icon="ring"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-full',
          'border-2 border-primary/30 text-primary text-xl',
          'group-hover:border-primary group-hover:bg-primary/5 transition-colors',
          defaultStyle !== 'ring' && 'hidden',
          className,
        )}
      >
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>

      {/* Naked */}
      <span
        data-icon="naked"
        className={cn(
          'inline-flex items-center justify-center text-primary text-xl',
          'group-hover:text-primary/70 transition-colors',
          defaultStyle !== 'naked' && 'hidden',
          className,
        )}
      >
        <IconOrEmoji icon={icon} size={size + 4} weight="regular" />
      </span>
    </>
  );
}
