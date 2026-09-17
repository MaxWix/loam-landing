import { Logomark, Lettermark } from "./brand";

export function SiteNav() {
  return (
    <nav className="nav wrap">
      <a className="lockup" href="/" aria-label="Loam home">
        <Logomark size={64} />
        <Lettermark height={38} />
      </a>
    </nav>
  );
}

export function SiteFooter() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <footer className="footer wrap">
      {/* <span className="lockup">
        <Logomark size={24} />
        <Lettermark height={16} />
      </span> */}
      <div className="footer-row">
        <span>
          <a href="loam.ing/privacy" target="_blank">
            Privacy
          </a>{" "}
          ·{" "}
          <a href="loam.ing/terms" target="_blank">
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
