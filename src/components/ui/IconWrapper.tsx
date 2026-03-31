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
 * Alle 3 Varianten werden gerendert. Die aktive wird per CSS gesteuert:
 * - Default: design.iconStyle.id aus design.ts
 * - Live-Preview: html[data-icon-style] überschreibt per CSS
 */
export default function IconWrapper({
  icon,
  size = 24,
  className = '',
}: IconWrapperProps) {
  const defaultStyle = (design.iconStyle?.id || 'filledBox') as string;

  return (
    <span className={cn('icon-wrapper', className)} data-default-icon={defaultStyle}>
      {/* FilledBox */}
      <span data-icon="filledBox" className="icon-variant inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-primary text-xl group-hover:bg-primary group-hover:text-background transition-colors">
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>

      {/* Ring */}
      <span data-icon="ring" className="icon-variant inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 text-primary text-xl group-hover:border-primary group-hover:bg-primary/5 transition-colors">
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>

      {/* Naked */}
      <span data-icon="naked" className="icon-variant inline-flex items-center justify-center text-primary text-xl group-hover:text-primary/70 transition-colors">
        <IconOrEmoji icon={icon} size={size + 4} weight="regular" />
      </span>
    </span>
  );
}
