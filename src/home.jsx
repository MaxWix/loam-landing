import { PageShell } from "./components/page-shell";

export default function Home() {
  return (
    <PageShell>
      <h1>
        Where the
        <br />
        scroll <span>ends.</span>
      </h1>
      <p className="lede">
        Loam is a community-led, algorithm-free social platform built for
        authentic and meaningful connection.
      </p>
    </PageShell>
  );
}
