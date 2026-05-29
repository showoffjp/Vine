"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SEASON_FILTERS = ["All", "New Believer", "Deep Grief", "Doubt & Crisis", "Marriage & Family", "Calling & Vocation", "Suffering & Illness", "Spiritual Dryness", "Anger & Forgiveness"];

const BOOKS = [
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    year: 1952,
    season: "New Believer",
    color: GREEN,
    publisher: "HarperOne",
    description: "Still the finest introduction to Christian belief in print. Lewis — a former atheist Oxford professor — begins with the moral argument and builds to the Incarnation, the Atonement, and what Christian living looks like. Every sentence is calibrated to the skeptical, intelligent non-believer. Perfect for new Christians who came from secular backgrounds and want intellectual grounding.",
    for_whom: "New believers; skeptical seekers; anyone who wants to understand the basics of Christianity without being talked down to",
    best_quote: "If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.",
    where_to_get: "Everywhere — Amazon, Christian bookstores, used bookstores. One of the most printed books of the 20th century.",
    initials: "MC",
  },
  {
    title: "Knowing God",
    author: "J.I. Packer",
    year: 1973,
    season: "New Believer",
    color: PURPLE,
    publisher: "IVP",
    description: "Packer's masterwork. Knowing God is a systematic exploration of who God is — His attributes, His ways with humanity, His relationship with His people — written with a pastoral warmth that makes doctrine feel like good news. It is the book most often cited by mature Christians as the one that deepened their knowledge of God more than any other.",
    for_whom: "New believers who want depth; any Christian who has been a believer for years but feels they do not really know God deeply",
    best_quote: "Knowing about God is crucially important for the living of our lives. As it would be cruel to an Amazonian tribesman to fly him to London, put him in a car, and tell him to drive, so we are cruel to ourselves if we try to live in this world without knowing about the God whose world it is.",
    where_to_get: "IVP Books; Amazon; Christian bookstores",
    initials: "KG",
  },
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    year: 1961,
    season: "Deep Grief",
    color: "#EF4444",
    publisher: "HarperOne",
    description: "Lewis wrote this raw journal in the months after his wife Joy Davidman died of cancer. He does not offer comfort or platitudes. He records his experience of grief with devastating honesty — including the feeling that God has slammed the door in his face. It is the most honest account of Christian grief ever written, and it ends not with easy resolution but with hard-won trust.",
    for_whom: "Anyone who has lost someone they deeply loved; anyone angry at God over loss; people who want honesty rather than comfort",
    best_quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning.",
    where_to_get: "Amazon, Christian bookstores, libraries — widely available",
    initials: "AGO",
  },
  {
    title: "When God Weeps",
    author: "Joni Eareckson Tada & Steven Estes",
    year: 1997,
    season: "Deep Grief",
    color: "#F59E0B",
    publisher: "Zondervan",
    description: "Joni Eareckson Tada became a quadriplegic at 17 after a diving accident. For 50+ years she has lived with chronic pain, depression, and disability — and has become the most credible voice on suffering in the evangelical world. This book addresses why God allows suffering with complete theological seriousness and pastoral depth. It does not explain away the pain; it places it in a larger story.",
    for_whom: "Those in chronic pain; those with terminal or severe illness; caregivers; anyone asking why God allows this specific suffering",
    best_quote: "God permits what he hates to achieve what he loves.",
    where_to_get: "Zondervan; Amazon; joniandfriends.org",
    initials: "WGW",
  },
  {
    title: "Walking with God through Pain and Suffering",
    author: "Timothy Keller",
    year: 2013,
    season: "Suffering & Illness",
    color: "#3B82F6",
    publisher: "Dutton",
    description: "Keller wrote this book while receiving treatment for prostate cancer. It is the most comprehensive treatment of the problem of suffering from an evangelical perspective — covering the philosophical problem (why would a good God allow this?), the cultural problem (our culture has no framework for suffering), and the pastoral problem (what do you do with your own suffering?). Part Three is a sustained meditation on how to walk with God through personal suffering.",
    for_whom: "Anyone facing serious illness; Christians who want both intellectual and pastoral engagement with suffering; those who feel their faith wavering under pain",
    best_quote: "The Christian understanding of suffering says: you are more sinful than you ever dared believe, and you are more loved than you ever dared hope. Both of these together produce the capacity to suffer faithfully.",
    where_to_get: "Dutton / Penguin; Amazon; gospel in life website",
    initials: "WGP",
  },
  {
    title: "Night",
    author: "Elie Wiesel",
    year: 1960,
    season: "Deep Grief",
    color: PURPLE,
    publisher: "Hill and Wang",
    description: "Not a Christian book — Wiesel was Jewish — but widely used by Christian counselors and pastors as the most searingly honest account of faith surviving ultimate darkness. Wiesel's memoir of surviving Auschwitz raises the hardest possible questions about God and suffering, and does not resolve them easily. Reading Night alongside A Grief Observed or The Problem of Pain creates the most honest possible engagement with theodicy.",
    for_whom: "Those facing extreme suffering who need honesty more than answers; pastoral counselors; anyone studying theodicy who needs the human face of the problem",
    best_quote: "Never shall I forget that night, the first night in camp, which has turned my life into one long night... Never shall I forget these things, even if I am condemned to live as long as God Himself. Never.",
    where_to_get: "Hill and Wang; Amazon; any library",
    initials: "NGT",
  },
  {
    title: "The Reason for God",
    author: "Timothy Keller",
    year: 2008,
    season: "Doubt & Crisis",
    color: GREEN,
    publisher: "Dutton",
    description: "Written by Keller for his skeptical Manhattan congregation, this book addresses the most common objections to Christian faith — exclusivity, suffering, hell, evolution, the Bible's reliability — with intellectual rigor and pastoral grace. Part Two then makes a positive case for the Christian faith. It has become the standard recommendation for intellectually-oriented seekers and doubting Christians.",
    for_whom: "Christians going through a faith crisis; college students encountering secular arguments for the first time; anyone whose faith has been shaken by intellectual objections",
    best_quote: "If you believe what you like in the gospels, and reject what you don't like, it is not the gospel you believe, but yourself.",
    where_to_get: "Dutton / Penguin; Amazon; gospelinlife.com",
    initials: "RFG",
  },
  {
    title: "The Marriage Builder",
    author: "Larry Crabb",
    year: 1982,
    season: "Marriage & Family",
    color: "#EF4444",
    publisher: "Zondervan",
    description: "Larry Crabb is one of the most insightful Christian psychologists and marriage counselors alive. The Marriage Builder argues that the real problem in most Christian marriages is that spouses are trying to get from each other what only God can provide — unconditional acceptance, security, significance. When we stop demanding those things from a spouse and receive them from God, we become capable of genuinely loving.",
    for_whom: "Married couples at any stage; engaged couples; those in troubled marriages; anyone who feels their spouse is not meeting their deepest needs",
    best_quote: "Manipulative love says: I will love you if you meet my needs. Biblical love says: I will love you regardless, because God has already met my deepest needs.",
    where_to_get: "Zondervan; Amazon; widely available",
    initials: "TMB",
  },
  {
    title: "Sacred Marriage",
    author: "Gary Thomas",
    year: 2000,
    season: "Marriage & Family",
    color: "#10B981",
    publisher: "Zondervan",
    description: "Thomas's central question: What if God designed marriage to make us holy more than to make us happy? He argues that the friction, disappointment, and sacrifice of marriage are not problems to be solved but the very mechanism God uses to conform us to the image of Christ. One of the most transformative books on Christian marriage because it reframes the entire goal.",
    for_whom: "Married couples who feel disillusioned; those who expected marriage to be primarily fulfilling; those in difficult seasons",
    best_quote: "What if God designed marriage to make us holy more than to make us happy?",
    where_to_get: "Zondervan; Amazon; garythomas.com",
    initials: "SM",
  },
  {
    title: "The Dark Night of the Soul",
    author: "St. John of the Cross",
    year: "1578-1579 (written in prison)",
    season: "Spiritual Dryness",
    color: "#6366F1",
    publisher: "Various translations (Image Books classic)",
    description: "Written by St. John of the Cross while imprisoned by fellow Carmelites for advocating reform, this is the definitive treatment of spiritual desolation in Christian history. The dark night — a period in which all consolation, feeling of God's presence, and spiritual joy disappear — is not a sign of abandonment but of purification. John argues that God strips away our attachment to spiritual consolations to bring us into pure, naked faith.",
    for_whom: "Christians in deep spiritual dryness; those who have lost all sense of God's presence; mature Christians in contemplative stages of formation",
    best_quote: "Where have you hidden, Beloved, and left me moaning? You fled like the stag after wounding me; I went out calling you, but you were gone.",
    where_to_get: "Multiple translations; Image Books edition is most accessible; also free at Christian Classics Ethereal Library",
    initials: "DNS",
  },
  {
    title: "Benefit of the Doubt",
    author: "Gregory Boyd",
    year: 2013,
    season: "Doubt & Crisis",
    color: "#F59E0B",
    publisher: "Baker Books",
    description: "Pastor-theologian Gregory Boyd argues that the evangelical model of faith — requiring certainty before commitment — is itself a primary cause of faith crisis. He proposes a covenantal model of faith that does not require the resolution of intellectual doubts, but rather commitment in the midst of them, as Abraham modeled. A lifeline for Christians who feel their faith is collapsing under unanswered questions.",
    for_whom: "Christians who feel they cannot have faith because they have too many unanswered questions; those whose faith is collapsing; those trained in a certainty-based model of faith",
    best_quote: "The faith God calls us to is not a faith that removes all doubts. It is a faith that trusts in the midst of doubts.",
    where_to_get: "Baker Books; Amazon; reknew.org",
    initials: "BOD",
  },
  {
    title: "Total Forgiveness",
    author: "R.T. Kendall",
    year: 2002,
    season: "Anger & Forgiveness",
    color: "#EF4444",
    publisher: "Charisma House",
    description: "R.T. Kendall (successor to Martyn Lloyd-Jones at Westminster Chapel) argues that most Christians have never truly forgiven the people who wronged them — because they misunderstand what forgiveness actually requires. Forgiveness is not a feeling, not excusing the sin, not necessarily restored trust. It is the specific choice to wish the person well, to not want them punished, and to keep the offense secret. The most practically useful book on forgiveness in print.",
    for_whom: "Anyone nursing bitterness or resentment; those who have been badly wronged; those who have forgiven people with their minds but not their hearts",
    best_quote: "Forgiveness is the most Christlike thing you will ever do. And it will cost you exactly what it cost Jesus — everything.",
    where_to_get: "Charisma House; Amazon; widely available",
    initials: "TF",
  },
  {
    title: "Every Good Endeavor",
    author: "Timothy Keller",
    year: 2012,
    season: "Calling & Vocation",
    color: GREEN,
    publisher: "Dutton",
    description: "Keller's theology of work — the biblical framework for understanding why work matters, how the gospel transforms work, how Christians should engage secular workplaces, and how to navigate the gap between the work we do and the work we wish we could do. Every Good Endeavor is the most practically useful theological treatment of vocation in contemporary evangelical publishing.",
    for_whom: "Christians in secular careers who wonder if their work is spiritually significant; those discerning a call; those frustrated or disillusioned with their work",
    best_quote: "Work is not primarily a thing you do to support your life. Work is a thing you do to serve the world and worship God.",
    where_to_get: "Dutton / Penguin; Amazon; gospelinlife.com",
    initials: "EGE",
  },
];

export default function BooksForSeasonsPage() {
  const [season, setSeason] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = BOOKS.filter(b => season === "All" || b.season === season);
  const book = BOOKS.find(b => b.title === selected);

  const SEASON_COLOR: Record<string, string> = {
    "New Believer": GREEN,
    "Deep Grief": "#EF4444",
    "Doubt & Crisis": "#F59E0B",
    "Marriage & Family": "#10B981",
    "Calling & Vocation": "#3B82F6",
    "Suffering & Illness": PURPLE,
    "Spiritual Dryness": "#6366F1",
    "Anger & Forgiveness": "#EC4899",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Books for Every Season of Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The right book at the right moment is a gift. Here are the best Christian books for specific life seasons — grief, doubt, marriage, suffering, dryness, and new faith — chosen for their proven power to help.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {SEASON_FILTERS.map(s => (
            <button key={s} onClick={() => setSeason(s)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${season === s ? GREEN : BORDER}`, background: season === s ? `${GREEN}15` : "transparent", color: season === s ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {s}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((b, i) => (
              <button key={i} onClick={() => setSelected(selected === b.title ? null : b.title)}
                style={{ background: selected === b.title ? `${b.color}12` : CARD, border: `1px solid ${selected === b.title ? b.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${b.color}20`, border: `1px solid ${b.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: b.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {b.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{b.title}</span>
                      <span style={{ background: `${SEASON_COLOR[b.season] || GREEN}15`, color: SEASON_COLOR[b.season] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{b.season}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{b.author} · {b.year}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {book && (
            <div style={{ background: CARD, border: `1px solid ${book.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: book.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{book.title}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{book.author} · {book.year} · {book.publisher}</div>

              <span style={{ background: `${SEASON_COLOR[book.season] || GREEN}15`, color: SEASON_COLOR[book.season] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{book.season}</span>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "14px 0" }}>{book.description}</p>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>BEST QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{book.best_quote}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHO NEEDS THIS BOOK</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{book.for_whom}</p>
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO GET IT</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{book.where_to_get}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
