import "./LoamLanding.css";
import { themeCssVars } from "./theme";
import { SiteNav, SiteFooter } from "./components/nav";
import SheepWide from "./images/sheep.webp";
import SheepWideJpg from "./images/sheep.jpg";
import SheepNarrow from "./images/sheep@720.webp";
import SheepNarrowJpg from "./images/sheep@720.jpg";

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

export default function Home() {
  return (
    <div className="loam-root" style={themeCssVars()}>
      <div className="layer layer-home">
        <SiteNav />

        <header className="hero-solo wrap" id="top">
          <div className="hero-solo-copy">
            <span className="invite">Coming soon to Philly</span>
            <h1>
              Where the
              <br />
              scroll <span>ends.</span>
            </h1>
            <p className="lede">
              Loam is a community-led, algorithm-free social platform built for
              authentic and meaningful connection.
            </p>
            <div className="ctas">
              <a className="btn btn-brown" href="/about">
                About Loam
              </a>
            </div>
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
