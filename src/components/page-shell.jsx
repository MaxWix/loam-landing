import "../LoamLanding.css";
import { themeCssVars } from "../theme";
import { SiteNav, SiteFooter } from "./nav";
import SheepWide from "../images/sheep.webp";
import SheepWideJpg from "../images/sheep.jpg";
import SheepNarrow from "../images/sheep@720.webp";
import SheepNarrowJpg from "../images/sheep@720.jpg";

// The flock graphic. <picture> so the browser picks webp where it can and
// the 720px file on small screens; the alt text carries the joke, since
// the words are baked into the image.
function Flock() {
  const sizes = "(max-width: 880px) 92vw, 680px";
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${SheepNarrow} 720w, ${SheepWide} 1440w`}
        sizes={sizes}
      />
      <img
        src={SheepWideJpg}
        srcSet={`${SheepNarrowJpg} 720w, ${SheepWideJpg} 1440w`}
        sizes={sizes}
        width="1439"
        height="954"
        alt="A flock of sheep grazing in a field. Two are bleating
             “baaaa instagram” and “baaaa tiktok”; a third, looking up from
             the herd, asks “loam?”"
      />
    </picture>
  );
}

const LINKS = [
  { href: "https://loam.ing", label: "Join loam", external: true },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

// Every public page is the same one-screen frame — nav, two columns with
// the flock on the right, footer. Only the left column's content changes,
// so pages pass it as children; the link list is part of the shell and
// sits at the bottom of that column on every page.
export function PageShell({ children }) {
  // Read the path directly rather than calling useRoute() again. A second
  // useRoute() would register a second click listener, and the router's
  // "already on this path" guard makes whichever listener runs second bail
  // out — leaving the two copies of the route state out of sync. The app
  // re-renders this component on every navigation anyway, so a plain read
  // is always current.
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <div className="loam-root" style={themeCssVars()}>
      <div className="layer layer-home">
        <SiteNav />

        <header className="hero-solo wrap" id="top">
          <div className="hero-solo-copy">
            <div className="hero-solo-main">{children}</div>
            <nav className="page-links" aria-label="Site sections">
              {LINKS.filter((l) => l.href !== path).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hero-solo-visual">
            <Flock />
          </div>
        </header>

        <SiteFooter />
      </div>
    </div>
  );
}
