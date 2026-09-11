/**
 * theme.js
 * Single source of truth for design tokens on the landing page.
 * Mirrors lib/theme.js from the mobile app (which itself mirrors
 * _abstracts.scss from the main web app) so the marketing site,
 * the app, and the mobile app all draw from the same palette,
 * type scale, spacing, and radii.
 *
 * Usage:
 *   import { colors, fonts, typography, spacing, radius, buttons, inputs } from "./theme";
 */

// --- COLORS ---
// Identical values to lib/theme.js's `colors` export.
export const colors = {
  // Primary browns
  brown900: "#100900",
  brown700: "#261700",
  brown500: "#462B01",
  brown300: "#867966",
  brown200: "#B6AFA3",
  brown100: "#DAD5CC",
  brown50: "#F3EEE4",

  // Whites
  white400: "#FAF5EA",
  white200: "#FFFEFA",

  // Greens
  green900: "#212407",
  green700: "#2E330A",
  green500: "#42480E",
  green300: "#8C916E",
  green100: "#D9DACF",
  green50: "#ECEDE2",

  // Limes
  lime900: "#232316",
  lime700: "#5A5A34",
  lime500: "#AFB066",
  lime300: "#CFD0A3",
  lime100: "#F5F5E1",

  // Clays
  clay900: "#351C12",
  clay700: "#62311F",
  clay500: "#9E5135",
  clay300: "#C59786",
  clay200: "#DCC0B5",
  clay100: "#ECDCD7",
  clay50: "#F5EDEB",

  // Blues
  blue500: "#668FB0",
  blue100: "#E1EFF5",
};

// --- TYPOGRAPHY ---
// Same two families as the app. The mobile file points at native font
// files (BricolageGrotesque-Bold, etc); on the web these are loaded as
// normal web fonts, so each family is one CSS font-family stack with
// numeric weights instead of a family per weight.
export const fonts = {
  display: "'Bricolage Grotesque', sans-serif",
  primary: "'Host Grotesk', sans-serif",
};

// The Google Fonts stylesheet URL that supplies both families — hand
// this to a <link> or an @import so `fonts.display` / `fonts.primary`
// actually resolve.
export const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Host+Grotesk:wght@400;500;700&display=swap";

// Typography scale — mirrors the mixins from _abstracts.scss / lib/theme.js,
// with `fontWeight` split out as its own numeric field (web uses one
// variable font per family rather than per-weight font files).
export const typography = {
  // Display / headings (Bricolage Grotesque)
  h1: { fontFamily: fonts.display, fontSize: 24, fontWeight: 700 },
  h2: { fontFamily: fonts.display, fontSize: 20, fontWeight: 500 },
  wordmark: { fontFamily: fonts.display, fontSize: 28, fontWeight: 800 },
  bg24Bold: { fontFamily: fonts.display, fontSize: 24, fontWeight: 700 },
  bg18Bold: { fontFamily: fonts.display, fontSize: 18, fontWeight: 700 },
  bg24: { fontFamily: fonts.display, fontSize: 24, fontWeight: 400 },
  bg20: { fontFamily: fonts.display, fontSize: 20, fontWeight: 400 },

  // Body (Host Grotesk)
  h3: { fontFamily: fonts.primary, fontSize: 16, fontWeight: 700 },
  h4: { fontFamily: fonts.primary, fontSize: 14, fontWeight: 400 },
  bodyLarge: { fontFamily: fonts.primary, fontSize: 16, fontWeight: 400 },
  bodyMedium: { fontFamily: fonts.primary, fontSize: 14, fontWeight: 400 },
  bodySmall: { fontFamily: fonts.primary, fontSize: 12, fontWeight: 400 },
  hg24: { fontFamily: fonts.primary, fontSize: 24, fontWeight: 400 },
  hg20: { fontFamily: fonts.primary, fontSize: 20, fontWeight: 400 },
  hg18: { fontFamily: fonts.primary, fontSize: 18, fontWeight: 400 },
  hg16: { fontFamily: fonts.primary, fontSize: 16, fontWeight: 400 },
  hg14: { fontFamily: fonts.primary, fontSize: 14, fontWeight: 400 },
  hg12: { fontFamily: fonts.primary, fontSize: 12, fontWeight: 400 },
};

// Turns one of the typography entries above into a React inline-style
// object, e.g. style={toTextStyle(typography.h3)}.
export const toTextStyle = (t) => ({
  fontFamily: t.fontFamily,
  fontSize: t.fontSize,
  fontWeight: t.fontWeight,
});

// --- SPACING ---
// Identical scale to lib/theme.js.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  screenTop: 80, // Standard top padding for screens
  screenHorizontal: 32, // Standard horizontal padding for screens
};

// --- BORDER RADIUS ---
export const radius = {
  sm: 10,
  md: 12,
  lg: 24,
  full: 44, // Matches the pill shape on web buttons
};

// --- COMMON COMPONENT STYLES ---
// React inline-style objects, structurally identical to the RN
// StyleSheet objects in lib/theme.js (paddingVertical/paddingHorizontal
// split out, "100%" widths, etc) so a component ported from the app
// needs only to change the element type, not the styling.

export const buttons = {
  // Primary: brown500 background — matches .btn.brown on web
  primary: {
    backgroundColor: colors.brown500,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    border: 0,
    cursor: "pointer",
  },
  primaryText: {
    ...toTextStyle(typography.hg14),
    color: colors.white200,
    fontWeight: 700,
  },

  // Lime: lime500 background — matches .btn.lime on web
  lime: {
    backgroundColor: colors.lime500,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    border: 0,
    cursor: "pointer",
  },
  limeText: {
    ...toTextStyle(typography.hg14),
    color: colors.brown500,
    fontWeight: 700,
  },

  // Ghost: transparent with border — matches .btn.ghost on web
  ghost: {
    backgroundColor: "transparent",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: radius.full,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.brown500,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    cursor: "pointer",
  },
  ghostText: {
    ...toTextStyle(typography.hg14),
    color: colors.brown500,
    fontWeight: 700,
  },

  // Gray: green100 background — matches .btn.gray on web
  gray: {
    backgroundColor: colors.green100,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    border: 0,
    cursor: "pointer",
  },
  grayText: {
    ...toTextStyle(typography.hg14),
    color: colors.brown500,
    fontWeight: 700,
  },

  // Disabled state — spread alongside any button variant
  disabled: {
    opacity: 0.5,
    cursor: "default",
  },
};

export const inputs = {
  // Standard input — matches input:not(.organic-input) on web
  input: {
    backgroundColor: colors.white400,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.brown300,
    borderRadius: radius.full, // pill shape like web
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 16,
    paddingBottom: 16,
    ...toTextStyle(typography.hg16),
    color: colors.brown900,
    width: "100%",
  },
  // Textarea variant — matches textarea:not(.organic-textarea) on web
  textarea: {
    backgroundColor: colors.white400,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.brown300,
    borderRadius: radius.lg,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 16,
    paddingBottom: 16,
    ...toTextStyle(typography.hg16),
    color: colors.brown900,
    width: "100%",
  },
  errorText: {
    ...toTextStyle(typography.hg12),
    color: colors.clay500,
    marginTop: -8,
    marginBottom: 8,
    paddingLeft: 19,
  },
};

// --- LAYOUT ---
export const layout = {
  wordmark: {
    ...toTextStyle(typography.wordmark),
    color: colors.brown700,
    marginBottom: spacing.lg,
  },
  pageTitle: {
    ...toTextStyle(typography.h1),
    color: colors.brown900,
    marginBottom: spacing.sm,
  },
  pageSubtitle: {
    ...toTextStyle(typography.hg16),
    color: colors.brown500,
    marginBottom: spacing.xl,
    lineHeight: 24,
  },
};

// --- CSS CUSTOM PROPERTIES ---
// theme.js stays the single source of truth even though the styling
// itself now lives in LoamLanding.css as plain CSS. Every value the
// stylesheet needs — colors, spacing, radius, the two font stacks —
// is exposed here as a `--kebab-case` custom property, and the root
// component sets them as inline styles on .loam-root (see
// `themeCssVars` below). The .css file only ever references
// var(--brown-500), var(--space-md), etc; it never hardcodes a value
// that came from this file.
// "brown500" -> "brown-500" (color/radius keys: trailing digits only)
const kebabDigits = (key) => key.replace(/([a-z])([0-9]+)$/i, "$1-$2");
// "screenHorizontal" -> "screen-horizontal" (spacing's camelCase keys)
const kebabCamel = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// Emits a `--brown-500: #462B01;` style block, e.g. for embedding in a
// server-rendered <style> tag instead of an inline style attribute.
export const cssVariables = (c = colors) =>
  Object.entries(c)
    .map(([key, value]) => `--${kebabDigits(key)}: ${value};`)
    .join("\n          ");

// Same idea, but as a React inline-style object (`{'--brown-500': '#462B01'}`)
// covering every token category the stylesheet uses: colors, spacing,
// radius (all as px), and the two font stacks. Spread this onto the
// root element: <div className="loam-root" style={themeCssVars()}>.
export const themeCssVars = () => {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    vars[`--${kebabDigits(key)}`] = value;
  });
  Object.entries(spacing).forEach(([key, value]) => {
    vars[`--space-${kebabCamel(key)}`] = `${value}px`;
  });
  Object.entries(radius).forEach(([key, value]) => {
    vars[`--radius-${key}`] = `${value}px`;
  });
  vars["--display"] = fonts.display;
  vars["--body"] = fonts.primary;
  return vars;
};

export default {
  colors,
  fonts,
  googleFontsHref,
  typography,
  toTextStyle,
  spacing,
  radius,
  buttons,
  inputs,
  layout,
  cssVariables,
  themeCssVars,
};
