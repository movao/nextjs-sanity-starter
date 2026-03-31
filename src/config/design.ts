/* ============================================
   DESIGN PROFIL — Pro Kundenprojekt anpassen

   Die Build-Route in AgencyOS setzt diese Werte
   automatisch basierend auf der Profil-Auswahl
   im Dashboard. Kann auch manuell geändert werden.
   ============================================ */

import { fontPairings, colorWorlds, spacingPresets, borderRadiusPresets, iconStyles } from '../design/profiles';
import type { LayoutArchetypeId } from '../design/profiles';

export const design = {
  /** Font-Pairing: signature | structure | heritage | statement | warmth | ... */
  fonts: fontPairings.signature,

  /** Farbwelt: midnight | cleanSlate | terra | forest | graphite | ivory | ... */
  colors: colorWorlds.cleanSlate,

  /** Spacing: breathe | balanced | dense */
  spacing: spacingPresets.balanced,

  /** Border-Radius: sharp | subtle | soft | round */
  borderRadius: borderRadiusPresets.soft,

  /** Icon-Stil: filledBox | ring | naked */
  iconStyle: iconStyles.filledBox,

  /** Layout-Archetyp: immersive | editorial | cardBased | minimalStatement */
  layout: 'immersive' as LayoutArchetypeId,

  /** Kachel-Stil */
  cardStyle: 'primary' as const,
};
