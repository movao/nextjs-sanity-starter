'use client';

import { useState, useEffect } from 'react';
import { colorWorlds, fontPairings, spacingPresets, borderRadiusPresets, iconStyles } from '@/design/profiles';

type ColorWorldKey = keyof typeof colorWorlds;
type FontKey = keyof typeof fontPairings;
type SpacingKey = keyof typeof spacingPresets;
type RadiusKey = keyof typeof borderRadiusPresets;
type IconStyleKey = keyof typeof iconStyles;

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
}

function applyColorWorld(key: ColorWorldKey) {
  const cw = colorWorlds[key];
  const root = document.documentElement;
  const tokens = {
    background: cw.background, foreground: cw.foreground, primary: cw.primary,
    accent: cw.accent, muted: cw.muted, card: cw.card, border: cw.border,
    input: cw.input, ring: cw.ring, destructive: cw.destructive, success: cw.success,
  };
  Object.entries(tokens).forEach(([name, hex]) => {
    root.style.setProperty(`--color-${name}`, hex);
    root.style.setProperty(`--color-${name}-rgb`, hexToRgb(hex));
  });
}

function applyFont(key: FontKey) {
  const fp = fontPairings[key];
  const root = document.documentElement;
  root.style.setProperty('--font-heading', fp.heading);
  root.style.setProperty('--font-heading-weight', fp.headingWeight);
  root.style.setProperty('--font-body', fp.body);
  root.style.setProperty('--font-body-weight', fp.bodyWeight);
}

function applySpacing(key: SpacingKey) {
  const sp = spacingPresets[key];
  const root = document.documentElement;
  root.style.setProperty('--spacing-section', sp.sectionPadding);
  root.style.setProperty('--spacing-gap', sp.elementGap);
  root.style.setProperty('--container-max-width', sp.containerMaxWidth);
}

function applyRadius(key: RadiusKey) {
  const r = borderRadiusPresets[key];
  document.documentElement.style.setProperty('--radius', r.value);
}

function applyIconStyle(key: IconStyleKey) {
  // CSS-Regeln in globals.css steuern die Sichtbarkeit per html[data-icon-style]
  document.documentElement.setAttribute('data-icon-style', key);
}

const colorKeys = Object.keys(colorWorlds) as ColorWorldKey[];
const fontKeys = Object.keys(fontPairings) as FontKey[];
const spacingKeys = Object.keys(spacingPresets) as SpacingKey[];
const radiusKeys = Object.keys(borderRadiusPresets) as RadiusKey[];
const iconStyleKeys = Object.keys(iconStyles) as IconStyleKey[];

export default function PreviewControls() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<ColorWorldKey>('cleanSlate');
  const [font, setFont] = useState<FontKey>('signature');
  const [spacing, setSpacing] = useState<SpacingKey>('balanced');
  const [radius, setRadius] = useState<RadiusKey>('soft');
  const [iconStyle, setIconStyle] = useState<IconStyleKey>('filledBox');

  useEffect(() => { applyColorWorld(color); }, [color]);
  useEffect(() => { applyFont(font); }, [font]);
  useEffect(() => { applySpacing(spacing); }, [spacing]);
  useEffect(() => { applyRadius(radius); }, [radius]);
  useEffect(() => { applyIconStyle(iconStyle); }, [iconStyle]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-foreground text-background px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          Design anpassen
        </button>
      )}

      {open && (
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-2xl p-5 w-80 max-h-[80vh] overflow-y-auto text-neutral-900">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold">Design-Profil</h3>
            <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-neutral-700 text-lg leading-none">&times;</button>
          </div>

          {/* Farbwelt */}
          <div className="mb-4">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Farbwelt</label>
            <div className="grid grid-cols-6 gap-1.5">
              {colorKeys.map(k => (
                <button
                  key={k}
                  onClick={() => setColor(k)}
                  title={colorWorlds[k].label}
                  className={`w-9 h-9 rounded-lg border-2 transition-all ${k === color ? 'border-blue-500 scale-110' : 'border-transparent hover:border-neutral-300'}`}
                  style={{ background: `linear-gradient(135deg, ${colorWorlds[k].primary} 50%, ${colorWorlds[k].background} 50%)` }}
                />
              ))}
            </div>
            <p className="text-xs text-neutral-400 mt-1">{colorWorlds[color].label} — {colorWorlds[color].mood}</p>
          </div>

          {/* Font */}
          <div className="mb-4">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Schrift</label>
            <select
              value={font}
              onChange={e => setFont(e.target.value as FontKey)}
              className="w-full text-sm border border-neutral-200 rounded-lg px-3 py-2 bg-white"
            >
              {fontKeys.map(k => (
                <option key={k} value={k}>{fontPairings[k].label} — {fontPairings[k].character}</option>
              ))}
            </select>
          </div>

          {/* Spacing */}
          <div className="mb-4">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Spacing</label>
            <div className="flex gap-2">
              {spacingKeys.map(k => (
                <button
                  key={k}
                  onClick={() => setSpacing(k)}
                  className={`flex-1 text-xs py-1.5 rounded-lg border transition-all ${k === spacing ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium' : 'border-neutral-200 hover:border-neutral-300'}`}
                >
                  {spacingPresets[k].label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="mb-4">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Rundung</label>
            <div className="flex gap-2">
              {radiusKeys.map(k => (
                <button
                  key={k}
                  onClick={() => setRadius(k)}
                  className={`flex-1 text-xs py-1.5 rounded-lg border transition-all ${k === radius ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium' : 'border-neutral-200 hover:border-neutral-300'}`}
                >
                  {borderRadiusPresets[k].id}
                </button>
              ))}
            </div>
          </div>

          {/* Icon Style */}
          <div>
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Icon-Stil</label>
            <div className="flex gap-2">
              {iconStyleKeys.map(k => (
                <button
                  key={k}
                  onClick={() => setIconStyle(k)}
                  className={`flex-1 text-xs py-1.5 rounded-lg border transition-all ${k === iconStyle ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium' : 'border-neutral-200 hover:border-neutral-300'}`}
                >
                  {iconStyles[k].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
