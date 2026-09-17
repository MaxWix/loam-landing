import { useState } from "react";
import { PageShell } from "./components/page-shell";

// Answers are arrays of paragraphs. A paragraph can be a plain string, or
// an array of string/JSX fragments when it needs a link inline.
const FAQS = [
  {
    q: "What makes loam different from other platforms?",
    a: [
      "Loam is built for the betterment of each user. We want to give you uninterrupted space to connect with your people. There is no algorithm, no public accounts, no suggested content, no advertisements. And you're limited to 150 connections to ensure you're keeping it to the people you care about.",
      "Loam is also metric-free. You won't find follower, like, or comment counts anywhere. There's nothing to compete for, only people to connect with!",
    ],
  },
  {
    q: "What can I post?",
    a: [
      "Text-based posts, photos, music, books, tv shows and movies. We're working on more post options too — we want everyone to be able to express themselves as well as possible.",
    ],
  },
  {
    q: "Is it free?",
    a: [
      "Why yes it is! We believe in technology as a public service, that's why we run on community donations.",
    ],
  },
  {
    q: "How do I join?",
    a: [
      [
        "You can sign up on our web-app at ",
        <a key="web" href="https://loam.ing" target="_blank" rel="noreferrer">
          loam.ing
        </a>,
        " or on the iOS app store (coming soon).",
      ],
    ],
  },
  {
    q: "Why don't I have any connections yet?",
    a: [
      "You have to invite people to join and connect! Remember when we said no suggested content? We mean it. Only you can create the right space with the right people, not us.",
      "Click the share button on your profile and send it to the people you care about. Spread the word!",
    ],
  },
  {
    q: "Why is it called loam?",
    a: [
      "In the real world, loam is a rich, balanced soil that many plants love. It holds enough moisture so that plants don't dry out too fast, but drains well enough so that the roots don't drown. It's packed with nutrients that help plants thrive.",
      "Good soil doesn't force anything to grow. It just makes growth possible. Same idea.",
      "If you'd like to grow your connection to your community, we recommend loam.",
    ],
  },
];

function FaqRow({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-summary"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {item.q}
        <svg
          className="faq-chevron"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* The panel is always in the DOM; the 0fr→1fr grid row is what
          animates. Height can't be transitioned from `auto`, and a fixed
          max-height would have to be guessed per answer, so the grid
          track does the measuring for us. */}
      <div
        className="faq-panel"
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="faq-panel-inner">
          <div className="faq-answer" aria-hidden={!isOpen}>
            {item.a.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  // One row open at a time; clicking the open one closes it. Controlled in
  // React rather than with <details>, since a closed <details> hides its
  // children outright and there's nothing left to animate.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageShell>
      <div className="faq">
        {FAQS.map((item, i) => (
          <FaqRow
            key={item.q}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </PageShell>
  );
}
