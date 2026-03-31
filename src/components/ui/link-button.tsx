import { cn } from '@/lib/utils';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

/**
 * LinkButton — Ein <a>-Tag gestylt als Button.
 * Regel: Mindesthöhe 48px (aus Website-Analyse).
 */
export function LinkButton({
  href,
  children,
  variant = 'default',
  size = 'default',
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring/50 min-h-[48px]',
        // Variants
        variant === 'default' && 'bg-primary text-background hover:bg-primary/90',
        variant === 'outline' && 'border-2 border-primary text-primary hover:bg-muted',
        variant === 'ghost' && 'text-foreground/60 hover:text-foreground',
        // Sizes — alle mindestens 48px Höhe durch min-h + padding
        size === 'sm' && 'px-6 py-3 text-base',
        size === 'default' && 'px-8 py-3 text-base',
        size === 'lg' && 'px-10 py-4 text-lg',
        className,
      )}
      style={{ minHeight: '48px' }}
    >
      {children}
    </a>
  );
}
