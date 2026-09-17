import { PageShell } from "./components/page-shell";

export default function Contact() {
  return (
    <PageShell>
      <p className="lede">
        Questions? Concerns? Ideas? Send us a note and we'll get back to you.
      </p>
      <a className="contact-email" href="mailto:support@loam.ing">
        support@loam.ing
      </a>
    </PageShell>
  );
}
