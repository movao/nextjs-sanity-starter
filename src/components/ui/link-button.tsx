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
 * Nutze diesen statt <Button> wenn der CTA ein Link ist (href).
 * Vermeidet das Base-UI "nativeButton" Problem.
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
        'inline-flex items-center justify-center font-medium transition-colors rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring/50',
        // Variants
        variant === 'default' && 'bg-primary text-background hover:bg-primary/90',
        variant === 'outline' && 'border-2 border-primary text-primary hover:bg-muted',
        variant === 'ghost' && 'text-foreground/60 hover:text-foreground hover:bg-muted',
        // Sizes — auf 8px-Raster, min 16px Schrift
        size === 'sm' && 'px-6 py-2.5 text-base',
        size === 'default' && 'px-8 py-3.5 text-base',
        size === 'lg' && 'px-10 py-4 text-lg',
        className,
      )}
    >
      {children}
    </a>
  );
}
