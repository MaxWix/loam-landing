// Loads the same reaction emoji illustrations used in the app's
// EmojiPickerSheet / buildReactionValue system (see lib/utils/emojiAssets.js
// and assets/emojis/emojis-<tone>/ in the mobile app). Only the tone-2 set
// is bundled here since the landing page doesn't have a signed-in viewer
// with a saved emoji_skin_tone preference to key off of — tone 2 is used
// as a fixed default, same idea as DEFAULT_EMOJI_TONE.
//
// Files are named after the reaction key with the tone suffix stripped
// (e.g. "crytears-2.svg" -> "crytears"), so callers just do
// <Emoji name="crytears" />.
const modules = import.meta.glob("./assets/emojis/*.svg", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const EMOJI = {};
for (const path in modules) {
  const name = path.split("/").pop().replace(/\.svg$/, "").replace(/-\d+$/, "");
  EMOJI[name] = modules[path];
}

// Renders one of the app's illustrated reaction emoji at a given size.
// Falls back to rendering nothing (rather than throwing) if an unknown
// name is passed, so a typo in a reactions array degrades gracefully.
export function Emoji({ name, size = 20, style }) {
  const svg = EMOJI[name];
  if (!svg) return null;
  return (
    <span
      className="emoji-icon"
      style={{ width: size, height: size, ...style }}
      role="img"
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
