import IconOrEmoji from './IconOrEmoji';
import { design } from '@/config/design';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: string;
  size?: number;
  className?: string;
}

export default function IconWrapper({
  icon,
  size = 24,
  className = '',
}: IconWrapperProps) {
  const style = design.iconStyle?.id || 'filledBox';

  if (style === 'filledBox') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-xl',
        'bg-muted text-primary text-xl',
        'group-hover:bg-primary group-hover:text-background transition-colors',
        className,
      )}>
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>
    );
  }

  if (style === 'ring') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full',
        'border-2 border-primary/30 text-primary text-xl',
        'group-hover:border-primary group-hover:bg-primary/5 transition-colors',
        className,
      )}>
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>
    );
  }

  // naked
  return (
    <span className={cn(
      'inline-flex items-center justify-center text-primary text-xl',
      'group-hover:text-primary/70 transition-colors',
      className,
    )}>
      <IconOrEmoji icon={icon} size={size + 4} weight="regular" />
    </span>
  );
}
