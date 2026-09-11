import { useState, useMemo } from "react";
import "./LoamLanding.css";
import MediaRidge from "./images/nature.jpg";
import MediaBook from "./images/theo.jpg";
import { themeCssVars } from "./theme";
import { SiteNav, SiteFooter } from "./components/nav";
import {
  C,
  useReveal,
  timeAgo,
  BLOB,
  ICON_PIN,
  Logomark,
  Lettermark,
  BlobCard,
  Avatar,
  BellButton,
  CategoryBadge,
  Reactions,
  ActionButton,
  CARD_COLORS,
} from "./components/brand";

function PostCard({ post }) {
  const k = CARD_COLORS[post.color];
  const flips = useMemo(
    () =>
      [0, 1].map(() => ({
        x: Math.random() > 0.5 ? -1 : 1,
        y: Math.random() > 0.5 ? -1 : 1,
      })),
    [],
  );
  return (
    <BlobCard fill={k.bg} className="post">
      <div className="post-head">
        <Avatar emoji={post.author.emoji} bg={post.author.bg} size={30} />
        <span className="post-user">{post.author.name}</span>
      </div>
      {post.branch && (
        <span
          className="branch-tag"
          style={{ background: post.branch.bg, color: post.branch.fg }}
        >
          <span>{post.branch.emoji}</span> {post.branch.name}
        </span>
      )}
      {post.media && (
        <div className="post-media">
          <div className="post-media-clip">
            <img src={post.media} alt={post.mediaAlt || ""} loading="lazy" />
          </div>
          {post.category && (
            <CategoryBadge category={post.category} colors={k.badge} />
          )}
          <span className="post-media-reactions">
            <Reactions list={post.reactions} bg={k.react} />
          </span>
        </div>
      )}
      <div className="post-content">
        {post.title && <p className="post-title">{post.title}</p>}
        {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
        {post.caption && <p className="post-caption">{post.caption}</p>}
      </div>
      {!post.media && <Reactions list={post.reactions} bg={k.react} />}
      <div className="post-foot">
        <span className="post-time">{timeAgo(post.createdAt)}</span>
        <span className="post-actions">
          <ActionButton bg={k.btn} flip={flips[0]} label="Add reaction">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                cx="11"
                cy="12"
                r="7.5"
                fill="none"
                stroke={C.white400}
                strokeWidth="2"
              />
              <circle cx="8.5" cy="10.5" r="1.1" fill={C.white400} />
              <circle cx="13.5" cy="10.5" r="1.1" fill={C.white400} />
              <path
                d="M7.8 14.2c.9 1.3 2 1.9 3.2 1.9s2.3-.6 3.2-1.9"
                fill="none"
                stroke={C.white400}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M19 3v6M16 6h6"
                stroke={C.white400}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </ActionButton>
          <ActionButton bg={k.btn} flip={flips[1]} label="Comments">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"
                fill="none"
                stroke={C.white400}
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 6.5v6M9 9.5h6"
                stroke={C.white400}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </ActionButton>
        </span>
      </div>
    </BlobCard>
  );
}

// ── Example content. Plant names on purpose: none of these are people. ──
const BUDS = {
  fern: { name: "fern", emoji: "🌿", bg: C.lime300 },
  moss: { name: "moss", emoji: "🪨", bg: C.green100 },
  clover: { name: "clover", emoji: "🍀", bg: C.clay200 },
  sorrel: { name: "sorrel", emoji: "🌱", bg: C.brown100 },
};
const BRANCHES = [
  {
    id: "roommates",
    name: "the roommates",
    emoji: "🏠",
    bg: C.clay200,
    fg: C.clay700,
  },
  {
    id: "bookclub",
    name: "book club",
    emoji: "📚",
    bg: C.lime300,
    fg: C.lime700,
  },
  {
    id: "hometown",
    name: "hometown crew",
    emoji: "🚲",
    bg: C.green100,
    fg: C.green700,
  },
];

const HOUR = 60 * 60 * 1000;
const POSTS = [
  {
    id: 1,
    color: "lime",
    author: BUDS.fern,
    category: "listening",
    branch: null,
    media: MediaRidge,
    mediaAlt: "A misty mountain ridge at sunrise",
    reactions: ["leaves", "crytears", "heart"],
    title: "morning on the ridge",
    subtitle: "a live record, side B",
    caption: "no signal up here. exactly the point.",
    createdAt: Date.now() - 2 * HOUR,
    in: ["roommates", "hometown"],
  },
  {
    id: 2,
    color: "clay",
    author: BUDS.clover,
    category: "reading",
    branch: BRANCHES[1],
    media: MediaBook,
    mediaAlt: "A paperback book",
    reactions: ["crytears", "hearteyes"],
    title: "finished it on the train",
    subtitle: "the one from last month's pick",
    caption: "we need to talk about the ending. thursday?",
    createdAt: Date.now() - 9 * HOUR,
    in: ["bookclub"],
  },
  {
    id: 3,
    color: "green",
    author: BUDS.moss,
    category: null,
    branch: BRANCHES[0],
    media: null,
    reactions: ["celebrate", "thumbsup"],
    title: null,
    subtitle: null,
    caption: "made too much soup. come get some before it composts too.",
    createdAt: Date.now() - 24 * HOUR,
    in: ["roommates"],
  },
  {
    id: 4,
    color: "brown",
    author: BUDS.sorrel,
    category: "watching",
    branch: BRANCHES[2],
    media: null,
    reactions: ["clap"],
    title: "the nature doc, again",
    subtitle: "2019",
    caption: "the octopus episode still gets me.",
    createdAt: Date.now() - 48 * HOUR,
    in: ["hometown"],
  },
];

// (BLOB, above) in the branch's color, with an emoji or icon centered on
// it and the branch name captioned below. Purely a filter control here —
// click to show that branch's posts, click again (or "all buds") to
// clear the filter. No editing/reordering/deleting; this is example
// content, not a real, persisted branch list.
function BranchButtonChip({
  emoji,
  icon,
  label,
  bg,
  fg,
  selected,
  isAdd,
  onClick,
}) {
  return (
    <button
      type="button"
      className="branch-item"
      onClick={onClick}
      role="tab"
      aria-selected={selected}
    >
      <svg
        className="branch-blob"
        viewBox="-2 -2 38 38"
        width={52}
        height={52}
        aria-hidden="true"
      >
        <path
          d={BLOB}
          fill={isAdd ? "none" : bg}
          stroke={isAdd ? C.brown300 : selected ? fg : "none"}
          strokeWidth={isAdd ? 2 : 3}
          strokeDasharray={isAdd ? "4 4" : undefined}
        />
      </svg>
      <span className="branch-blob-content">
        {isAdd ? "+" : icon ? icon : emoji}
      </span>
      <span className={`branch-label ${selected ? "branch-label-on" : ""}`}>
        {label}
      </span>
    </button>
  );
}

// BranchSelector — the visual style of the app's branch chips (the
// organic blob swatch, icon-over-blob, name captioned below), simplified
// to what this landing page actually needs: click a branch to filter the
// demo feed, click again to clear it.
function BranchSelector({ selected, onSelect }) {
  return (
    <div className="branch-row" role="tablist" aria-label="Filter by branch">
      <BranchButtonChip
        icon={<Logomark size={22} />}
        label="all buds"
        selected={selected === null}
        bg={C.brown500}
        fg={C.brown900}
        onClick={() => onSelect(null)}
      />
      {BRANCHES.map((b) => (
        <BranchButtonChip
          key={b.id}
          emoji={b.emoji}
          label={b.name}
          bg={b.bg}
          fg={b.fg}
          selected={selected === b.id}
          onClick={() => onSelect(selected === b.id ? null : b.id)}
        />
      ))}
    </div>
  );
}

function DemoFeed() {
  const [branch, setBranch] = useState(null);
  const visible = branch
    ? POSTS.filter((p) => p.in.includes(branch))
    : POSTS.slice(0, 3);
  return (
    <div className="feed">
      <div className="feed-head">
        <Lettermark height={22} />
        <BellButton />
      </div>
      <BranchSelector selected={branch} onSelect={setBranch} />
      <div className="feed-list" key={branch || "all"}>
        {visible.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
        <div className="caught-up">
          <span>all caught up!</span>
        </div>
      </div>
    </div>
  );
}

// Profile items — mirrors lib/components/ProfileItem.js: an organic
// blob-card background, an optional square media clip with a category
// badge overlay, then title/subtitle/caption. A profile item with no
// media (like ProfileItem.js's showMedia === false case) just skips the
// media block and shows text on the colored card, same as posts 3 & 4 in
// the demo feed above.
const PROFILE_ITEMS = [
  {
    family: "lime",
    category: "listening",
    media: MediaRidge,
    mediaAlt: "A misty mountain ridge at sunrise",
    title: "morning on the ridge",
    subtitle: "side B",
  },
  {
    family: "clay",
    category: "reading",
    media: MediaBook,
    mediaAlt: "A paperback book",
    title: "finished it on the train",
    subtitle: "last month's pick",
  },
  {
    family: "green",
    category: null,
    media: null,
    caption: "made too much soup. soup era, officially.",
  },
  {
    family: "brown",
    category: "watching",
    media: null,
    title: "the nature doc, again",
    subtitle: "2019",
  },
];

function ProfileItemCard({ item }) {
  const k = CARD_COLORS[item.family];
  const showMedia = !!item.media;
  const showBadge = showMedia && !!item.category;
  return (
    <BlobCard fill={k.bg} className="profile-item">
      {showMedia && (
        <div className="profile-item-media">
          <div className="profile-item-media-clip">
            <img src={item.media} alt={item.mediaAlt || ""} loading="lazy" />
          </div>
          {showBadge && (
            <CategoryBadge category={item.category} colors={k.badge} />
          )}
        </div>
      )}
      {item.title && <p className="profile-item-title">{item.title}</p>}
      {item.subtitle && (
        <p className="profile-item-subtitle">{item.subtitle}</p>
      )}
      {item.caption && <p className="profile-item-caption">{item.caption}</p>}
    </BlobCard>
  );
}

// ProfileDetails, as a still life. No tab switcher — just the profile.
function ProfileMock() {
  return (
    <div className="profile">
      <div className="profile-row">
        <Avatar emoji="🌿" bg={C.lime300} size={64} />
        <div className="profile-text">
          <div className="profile-name">Fern Example</div>
          <div className="profile-handle">@fern</div>
        </div>
        <span className="icon-btn" aria-hidden="true">
          ↗
        </span>
        <span className="icon-btn" aria-hidden="true">
          ✎
        </span>
      </div>
      <p className="profile-bio">
        currently: the ridge, a live record on repeat, and whatever book club
        picked. ask me about soup.
      </p>
      <div className="profile-actions">
        <span className="btn btn-brown btn-sm">Manage account</span>
        <span className="btn btn-lime btn-sm">Manage buds</span>
      </div>
      <div className="profile-items">
        {PROFILE_ITEMS.map((item, i) => (
          <ProfileItemCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

// Event card for the "what's next" section — the original design: a
// date badge, location line, caption, a stack of anonymous "going" blobs
// (no headcount, per the "0 counts, anywhere" pillar), and a tap-in note.
function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card-date">
        <span className="event-card-date-month">OCT</span>
        <span className="event-card-date-day">20</span>
      </div>
      <div className="event-card-body">
        <p className="event-card-title">
          Loam Salon Series: Community Engagement
        </p>
        <p className="event-card-loc">
          <svg
            width="11"
            height="14"
            viewBox="0 0 20 20"
            aria-hidden="true"
            style={{ marginRight: 5, flexShrink: 0 }}
          >
            <path d={ICON_PIN} fill={C.clay500} />
          </svg>
          Fishtown, Philadelphia
        </p>
        <p className="event-card-caption">
          Come hear from community leaders and meet others making an impact in
          their communities!
        </p>
        <div className="event-card-going">
          <span className="going-blob" style={{ background: C.lime300 }} />
          <span className="going-blob" style={{ background: C.clay300 }} />
          <span className="going-blob" style={{ background: C.brown300 }} />
          <span className="going-blob" style={{ background: C.green300 }} />
          <span className="event-card-going-label">your buds are going</span>
        </div>
        <span className="event-card-tapin">tap in with your carabiner</span>
      </div>
    </div>
  );
}

// ── Copy ─────────────────────────────────────────────────────────────

const PILLARS = [
  {
    n: "150",
    label: "buds, max",
    num: C.clay500,
    fill: C.clay100,
    body: "We've capped connections at 150 to prioritize friends over followers. Your feed is filled with people you actually know, not a crowd you're trying to impress. Loam isn't for building an audience or chasing virality.",
  },
  {
    n: "0",
    label: "counts, anywhere",
    num: C.green500,
    fill: C.green100,
    body: "Metrics like views, likes, or follower counts make us think about how what we share performs, removing space from what really matters: what do I want to share? and who do I want to share it with? ",
  },
  {
    n: "0",
    label: "ads or algorithms",
    num: C.brown500,
    fill: C.brown100,
    body: "No advertisers, no data brokers, no algorithm deciding what you see. Loam runs on community donations, the only thing we optimize for is you closing the app happy.",
  },
];

const FEATURES = [
  {
    kicker: "feed",
    title: "Your buds, in order",
    fill: C.lime100,
    accent: C.green500,
    body: "No algorithm deciding what surfaces. Just your buds' most recent posts, top to bottom, until you hit “all caught up!” Then you go do something else. That's the feature.",
  },
  {
    kicker: "posts",
    title: "72 hour lifespan",
    fill: C.green50,
    accent: C.green500,
    body: "Every post disappears from the feed after 72 hours. Nothing to curate, no permanent record to perform for. ",
  },
  {
    kicker: "in real life",
    title: "Tap to connect",
    fill: C.clay50,
    accent: C.clay500,
    body: "Our NFC-fitted carabiners link to their owner's profile so you can connect with a single tap. Connecting online is easy, but connecting in person is better.",
  },
];

export default function About() {
  useReveal();

  return (
    <div className="loam-root" style={themeCssVars()}>
      <div className="layer">
        <SiteNav />

        {/* Page header */}
        <header className="section wrap about-head" id="top">
          <h2>This is social media as it was meant to be.</h2>
        </header>

        {/* Pillars */}
        <section
          className="pillars wrap"
          aria-label="What makes Loam different"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.label}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <BlobCard fill={p.fill}>
                <div className="pillar-num" style={{ color: p.num }}>
                  {p.n}
                </div>
                <div className="pillar-label">{p.label}</div>
                <p className="pillar-body">{p.body}</p>
              </BlobCard>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="section" id="how">
          <div className="wrap">
            {/* Intro copy locked up with the demo feed: text left, the
                mockup right, same way the hero pairs copy with an image. */}
            <div className="how-intro">
              <div className="how-intro-copy">
                <div className="kicker" data-reveal>
                  how it works
                </div>
                <h2 data-reveal>Share what you're actually into.</h2>
                <p className="lede" data-reveal>
                  Post any song, show, or book you're enjoying. And photos and
                  plain words when that's the mood. Group people into branches:
                  the roommates, the hometown crew, the book club.
                </p>
              </div>
              <div className="how-intro-visual" data-reveal>
                <DemoFeed />
              </div>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="quote-band" aria-label="Our philosophy">
          <p data-reveal>
            We don't want your attention.
            <br />
            <span>We want your people to have it.</span>
          </p>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="how">
              <div
                className="feature profile-card"
                style={{ background: C.lime100 }}
                data-reveal
              >
                <div className="kicker">profiles</div>
                <h3>A profile that reflects you now</h3>
                <p>
                  The song you've had on repeat, the show you're bingeing, that
                  thought you had in the shower. Loam profiles are meant to be
                  updated constantly: highlighting your current interests
                  without the weight of your digital history holding you back.
                </p>
                <ProfileMock />
              </div>
              <div className="how-list">
                {FEATURES.map((f, i) => (
                  <div
                    className="feature"
                    key={f.title}
                    style={{
                      background: f.fill,
                      transitionDelay: `${i * 80}ms`,
                    }}
                    data-reveal
                  >
                    <div className="kicker" style={{ color: f.accent }}>
                      {f.kicker}
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's next */}
        <section
          className="section"
          id="whats-next"
          aria-label="What's next for Loam"
        >
          <div className="wrap">
            <div className="whatsnext">
              <div data-reveal>
                <div className="kicker" style={{ color: C.clay500 }}>
                  what's next
                </div>
                <h2>Loam, out in the world.</h2>
                <p className="lede">
                  Digital connection only gets you so far. Next, we're hosting
                  our own meetups and events. We're building features that give
                  users a place to post gatherings of their own. What starts on
                  your feed can end on someone's porch.
                </p>
              </div>
              <div data-reveal style={{ transitionDelay: "120ms" }}>
                <EventCard />
              </div>
            </div>
          </div>
        </section>

        {/* Join */}
        {/* <section className="section section-alt" id="join">
          <div className="wrap join">
            <div data-reveal>
              <Logomark size={52} />
              <h2 style={{ marginTop: 16 }}>Good soil grows good things.</h2>
              <p className="lede">
                Bring your 150. Post like nobody's counting — because here,
                nobody is.
              </p>
              <div className="ctas">
                <a
                  className="btn btn-brown"
                  href="mailto:support@loam.ing?subject=Loam%20invite"
                >
                  Ask for an invite
                </a>
              </div>
              <span className="fine">
                Invite-only while we grow. Philadelphia first.
              </span>
            </div>
          </div>
        </section> */}

        <SiteFooter />
      </div>
    </div>
  );
}
