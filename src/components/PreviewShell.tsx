'use client';

import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export type SectionEntry = {
  name: string;
  component: ReactNode;
};

export type SectionGroup = {
  id: string;
  label: string;
  sections: SectionEntry[];
};

type Rating = 'like' | 'dislike' | null;

type SectionRating = {
  rating: Rating;
  comment: string;
};

type RatingsMap = Record<string, SectionRating>;

const STORAGE_KEY = 'section-ratings';

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
function loadRatings(): RatingsMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RatingsMap) : {};
  } catch {
    return {};
  }
}

function saveRatings(ratings: RatingsMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  } catch {
    // quota exceeded -- ignore
  }
}

/* ------------------------------------------------
   Summary bar
   ------------------------------------------------ */
function Summary({ ratings, total }: { ratings: RatingsMap; total: number }) {
  const entries = Object.values(ratings);
  const rated = entries.filter((e) => e.rating !== null && e.rating !== undefined).length;
  const liked = entries.filter((e) => e.rating === 'like').length;
  const disliked = entries.filter((e) => e.rating === 'dislike').length;
  const commented = entries.filter((e) => e.comment.trim().length > 0).length;

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
      <span className="font-medium text-foreground">{rated} / {total} bewertet</span>
      <span className="text-muted-foreground/30">|</span>
      <span className="text-green-600">{liked} gefaellt</span>
      <span className="text-red-500">{disliked} abgelehnt</span>
      <span>{commented} kommentiert</span>
    </div>
  );
}

/* ------------------------------------------------
   Rating bar per section
   ------------------------------------------------ */
function RatingBar({
  name,
  value,
  onChange,
}: {
  name: string;
  value: SectionRating;
  onChange: (name: string, update: Partial<SectionRating>) => void;
}) {
  const { rating, comment } = value;

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-muted/40 border-t border-muted">
      {/* Badge */}
      <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
        {name}
      </span>

      {/* Rating indicator */}
      {rating === 'like' && <span className="text-green-600 text-sm font-bold shrink-0">&#10003;</span>}
      {rating === 'dislike' && <span className="text-red-500 text-sm font-bold shrink-0">&#10007;</span>}
      {rating === null && <span className="text-muted-foreground/40 text-sm shrink-0">&#x25CB;</span>}

      {/* Like / Dislike buttons */}
      <button
        type="button"
        onClick={() => onChange(name, { rating: rating === 'like' ? null : 'like' })}
        className={`text-lg leading-none px-1.5 py-0.5 rounded transition-colors ${
          rating === 'like' ? 'bg-green-100 text-green-700' : 'hover:bg-muted text-muted-foreground'
        }`}
        title="Gefaellt mir"
      >
        &#x1F44D;
      </button>
      <button
        type="button"
        onClick={() => onChange(name, { rating: rating === 'dislike' ? null : 'dislike' })}
        className={`text-lg leading-none px-1.5 py-0.5 rounded transition-colors ${
          rating === 'dislike' ? 'bg-red-100 text-red-700' : 'hover:bg-muted text-muted-foreground'
        }`}
        title="Gefaellt mir nicht"
      >
        &#x1F44E;
      </button>

      {/* Comment input */}
      <input
        type="text"
        placeholder="Kommentar..."
        value={comment}
        onChange={(e) => onChange(name, { comment: e.target.value })}
        className="flex-1 min-w-0 text-xs bg-background border border-muted rounded px-2 py-1.5 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
      />
    </div>
  );
}

/* ------------------------------------------------
   PreviewShell (main export)
   ------------------------------------------------ */
export default function PreviewShell({
  groups,
  header,
}: {
  groups: SectionGroup[];
  header: ReactNode;
}) {
  const [ratings, setRatings] = useState<RatingsMap>({});
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setRatings(loadRatings());
    setHydrated(true);
  }, []);

  // Persist whenever ratings change (after hydration)
  useEffect(() => {
    if (hydrated) saveRatings(ratings);
  }, [ratings, hydrated]);

  const handleRatingChange = useCallback((name: string, update: Partial<SectionRating>) => {
    setRatings((prev) => {
      const existing = prev[name] ?? { rating: null, comment: '' };
      return { ...prev, [name]: { ...existing, ...update } };
    });
  }, []);

  // Total section count
  const totalSections = groups.reduce((sum, g) => sum + g.sections.length, 0);

  const defaultTab = groups[0]?.id ?? '';

  return (
    <div>
      {/* Header area (design tokens etc.) */}
      {header}

      {/* Tabs wrapper -- the whole tabbed area */}
      <Tabs defaultValue={defaultTab} className="w-full gap-0">
        {/* Sticky bar: summary + tab list */}
        <div className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-muted">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <Summary ratings={ratings} total={totalSections} />
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <TabsList variant="line" className="w-full justify-start overflow-x-auto scrollbar-hide gap-0">
              {groups.map((g) => (
                <TabsTrigger key={g.id} value={g.id} className="shrink-0 px-3 py-2 text-xs font-medium">
                  {g.label} <span className="text-muted-foreground/50 ml-1">({g.sections.length})</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {/* Tab panels */}
        {groups.map((g) => (
          <TabsContent key={g.id} value={g.id} className="mt-0">
            <div className="space-y-0">
              {g.sections.map((s) => (
                <div key={s.name} className="border-b border-muted/50">
                  {/* Rendered section */}
                  <div className="relative">
                    {s.component}
                  </div>
                  {/* Rating bar */}
                  <RatingBar
                    name={s.name}
                    value={ratings[s.name] ?? { rating: null, comment: '' }}
                    onChange={handleRatingChange}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
