"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", BLUE = "#3B82F6", RED = "#EF4444", TEAL = "#0D9488";

type Tab = "overview" | "wisdom" | "church" | "love" | "gifts" | "resurrection" | "journal" | "videos";

const TAB_LIST: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "wisdom", label: "Wisdom of the Cross (1–4)" },
  { id: "church", label: "Church Disorders (5–11)" },
  { id: "love", label: "The Love Chapter (13)" },
  { id: "gifts", label: "Spiritual Gifts (12–14)" },
  { id: "resurrection", label: "Resurrection (15)" },
  { id: "journal", label: "My Journal" },
  { id: "videos", label: "Videos" },
];

const COR_VIDEOS = [
  {
    videoId: "AzmYV8GNAIM",
    title: "1 Corinthians Overview",
    channel: "The Bible Project",
    description:
      "The Bible Project's visual overview of 1 Corinthians — Paul's pastoral response to a divided, troubled church in the heart of the Greco-Roman world.",
  },
  {
    videoId: "Cus-z1hgAXw",
    title: "The Wisdom of the Cross",
    channel: "Timothy Keller",
    description:
      "Keller on 1 Corinthians 1:18-25 — why the cross is simultaneously foolishness and power, and how it cuts through every form of human pride and factionalism.",
  },
  {
    videoId: "iVwauTiyFjM",
    title: "The Resurrection of the Body — 1 Corinthians 15",
    channel: "N.T. Wright",
    description:
      "N.T. Wright on 1 Corinthians 15 — the earliest resurrection creed, the body language, and why bodily resurrection is the foundation of Christian ethics and hope.",
  },
  {
    videoId: "3Dv4-n6OYGI",
    title: "Love — 1 Corinthians 13 in Context",
    channel: "The Bible Project",
    description:
      "Reading 1 Corinthians 13 in context — Paul's 'more excellent way' as the manner in which all spiritual gifts are to be exercised, not an alternative to them.",
  },
  {
    videoId: "mC-zw0zCCtg",
    title: "Spiritual Gifts and the Body of Christ",
    channel: "Desiring God",
    description:
      "How Paul's theology of the body in 1 Corinthians 12 grounds the use of spiritual gifts — distributed by the Spirit, deployed in love, for the common good.",
  },
];

const LOVE_DESCRIPTIONS: { trait: string; greek?: string; exposition: string }[] = [
  {
    trait: "Love is patient",
    greek: "makrothumei",
    exposition:
      "Long-suffering specifically toward persons. Not passive endurance but active refusal to retaliate when wronged. Paul uses this word first — the Corinthians' failure begins here.",
  },
  {
    trait: "Love is kind",
    greek: "chresteuetai",
    exposition:
      "Active benevolence — kindness in deed, not merely the absence of cruelty. Where patience is what love does not do, kindness is what love does.",
  },
  {
    trait: "Love does not envy",
    exposition:
      "Envy was endemic in the status-obsessed Corinthian church. Spiritual gift competitions, social climbing at the Lord's Supper — all rooted in envy of others' standing.",
  },
  {
    trait: "Love does not boast",
    exposition:
      "The flip side of envy: self-promotion. The Corinthians were puffed up over teachers, gifts, and knowledge. Love requires a silencing of the self-advertising impulse.",
  },
  {
    trait: "Love is not proud",
    exposition:
      "Literally 'not puffed up' (phusioutai). The same word Paul used when rebuking the Corinthians for arrogance in chapters 4–5. Pride is the root of the Corinthian disorders.",
  },
  {
    trait: "Love does not dishonor others",
    exposition:
      "Does not act shamefully or indecently. In the Corinthian context: the wealthy humiliating the poor at the Lord's Supper; the gifted treating the ungifted as inferior.",
  },
  {
    trait: "Love is not self-seeking",
    exposition:
      "Does not insist on its own rights or advantages. Paul modeled this in chapters 8–10 by giving up his apostolic rights for the sake of the weak.",
  },
  {
    trait: "Love is not easily angered",
    exposition:
      "Not easily provoked to irritation or outrage. The Corinthians were a contentious people — filing lawsuits against each other, fighting over seats at worship.",
  },
  {
    trait: "Love keeps no record of wrongs",
    exposition:
      "Literally 'does not reckon the evil.' The accounting metaphor is deliberate: love does not keep a ledger of grievances to be presented at judgment.",
  },
  {
    trait: "Love does not delight in evil but rejoices with the truth",
    exposition:
      "Not delighting in others' failures — the opposite of schadenfreude. Love weeps when another falls into sin and rejoices when truth vindicates and restores.",
  },
  {
    trait: "Love always protects",
    exposition:
      "Bears all things — perhaps covering or shielding. Love creates a protective environment for the community, refusing to expose others' failures for personal gain.",
  },
  {
    trait: "Love always trusts",
    exposition:
      "Believes all things — not naive gullibility but a disposition toward trust as the default posture in community. Love gives the benefit of the doubt.",
  },
  {
    trait: "Love always hopes",
    exposition:
      "Hopes all things — an eschatological orientation. Even when all evidence suggests failure, love maintains hope in what God can do in a person or community.",
  },
  {
    trait: "Love always perseveres",
    exposition:
      "Endures all things — the final term forming a frame with 'bears all things.' Love's endurance is not mere resignation but active, willed continuation.",
  },
  {
    trait: "Love never fails",
    exposition:
      "Never falls away, never comes to nothing. Gifts will cease; love will not. The permanence of love is the basis for its supremacy over all other charismata.",
  },
];

interface JournalEntry {
  chapter: string;
  surprised: string;
  challenged: string;
  response: string;
}

const EMPTY_ENTRY: JournalEntry = { chapter: "", surprised: "", challenged: "", response: "" };

function StatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div
      style={{
        background: BG,
        borderRadius: 10,
        border: `1px solid ${BORDER}`,
        padding: "1rem",
        borderTop: `3px solid ${accent}`,
      }}
    >
      <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".3rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
        {label}
      </div>
      <div style={{ color: TEXT, fontWeight: 700, fontSize: ".95rem" }}>{value}</div>
    </div>
  );
}

function SectionCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: CARD,
        borderRadius: 14,
        border: `1px solid ${BORDER}`,
        padding: "1.75rem",
        marginBottom: "1.25rem",
      }}
    >
      <h3 style={{ color: accent, fontWeight: 800, fontSize: "1.05rem", marginBottom: ".85rem", marginTop: 0 }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function BlockQuote({ text, reference, accent }: { text: string; reference: string; accent: string }) {
  return (
    <blockquote
      style={{
        borderLeft: `4px solid ${accent}`,
        paddingLeft: "1.25rem",
        marginLeft: 0,
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: ".4rem" }}>&ldquo;{text}&rdquo;</p>
      <cite style={{ color: MUTED, fontSize: ".85rem" }}>— {reference}</cite>
    </blockquote>
  );
}

function Accordion({
  items,
  accent,
}: {
  items: { q: string; a: string }[];
  accent: string;
}) {
  const [open, setOpen] = useState<number>(-1);
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: CARD,
            border: `1px solid ${open === i ? accent : BORDER}`,
            borderRadius: 12,
            marginBottom: ".75rem",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "1.1rem 1.3rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ color: TEXT, fontWeight: 700, fontSize: ".95rem" }}>{item.q}</span>
            <span style={{ color: accent, fontSize: "1.3rem", flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ padding: "0 1.3rem 1.25rem", color: MUTED, lineHeight: 1.8, fontSize: ".93rem" }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Overview ────────────────────────────────────────────────────────────

function OverviewTab() {
  const vitalStats = [
    { label: "Author", value: "Paul the Apostle", accent: BLUE },
    { label: "Date", value: "AD 54–55", accent: BLUE },
    { label: "Written From", value: "Ephesus (16:8)", accent: BLUE },
    { label: "Audience", value: "Church at Corinth, Greece", accent: BLUE },
    { label: "Chapters", value: "16", accent: BLUE },
    { label: "Key Verse", value: "1 Cor 1:18 — the message of the cross", accent: BLUE },
  ];

  const problems = [
    { ref: "1–4", issue: "Factionalism", note: "Parties forming around Paul, Apollos, Cephas, and Christ" },
    { ref: "5", issue: "Sexual immorality", note: "Man living with his father's wife; the church celebrating it" },
    { ref: "6:1–11", issue: "Lawsuits", note: "Believers taking disputes before pagan courts" },
    { ref: "6:12–20", issue: "Sexual ethics", note: "The body's relationship to the Lord and to resurrection" },
    { ref: "7", issue: "Marriage and singleness", note: "Competing distortions: some demanding celibacy, some neglecting the marriage bond" },
    { ref: "8–10", issue: "Food offered to idols", note: "The weaker-conscience principle and the limits of freedom" },
    { ref: "11:1–16", issue: "Head coverings", note: "The most debated passage; cultural signal and theological principle" },
    { ref: "11:17–34", issue: "Lord's Supper abuses", note: "Social stratification enacted at the communion table" },
    { ref: "12–14", issue: "Gifts disorder", note: "Tongues elevated above all others; love absent" },
    { ref: "15", issue: "Denial of resurrection", note: "Some saying there is no resurrection of the dead" },
  ];

  return (
    <div>
      {/* Vital stats */}
      <SectionCard title="At a Glance" accent={BLUE}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {vitalStats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} accent={s.accent} />
          ))}
        </div>
      </SectionCard>

      {/* Background */}
      <SectionCard title="Corinth — The City" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Corinth was the wealthiest commercial city in Greece — a port city controlling trade between the Aegean and Adriatic seas. Newly rebuilt as a Roman colony in 44 BC, it had the energy of a boomtown: diverse, stratified, competitive, and deeply pluralistic. The temple of Aphrodite on the Acrocorinth, with its thousand temple prostitutes, was a byword for sexual excess throughout the ancient world.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The church Paul founded on his second missionary journey (Acts 18) reflected its city perfectly — all the vices and virtues of Corinthian culture found their way inside the congregation. This is not a theoretical letter about abstract theology; it is a pastoral intervention into a real, messy, embattled community that Paul clearly loved and was clearly exasperated by.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          Paul spent eighteen months in Corinth (Acts 18:11), longer than almost any other single stop. He wrote at least four letters to this congregation; we have two (1 and 2 Corinthians). The correspondence reveals a relationship of deep affection, painful conflict, and profound pastoral theology.
        </p>
      </SectionCard>

      {/* Problems being addressed */}
      <SectionCard title="The Problems Paul Is Addressing" accent={BLUE}>
        <div style={{ display: "grid", gap: ".6rem" }}>
          {problems.map((p) => (
            <div
              key={p.ref}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                padding: ".75rem 1rem",
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  background: `${BLUE}20`,
                  color: BLUE,
                  borderRadius: 6,
                  padding: ".2rem .55rem",
                  fontSize: ".78rem",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "monospace",
                  marginTop: ".1rem",
                }}
              >
                {p.ref}
              </span>
              <div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: ".9rem" }}>{p.issue}</div>
                <div style={{ color: MUTED, fontSize: ".84rem", marginTop: ".15rem" }}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* The organizing center */}
      <SectionCard title="The Organizing Center: The Cross" accent={BLUE}>
        <BlockQuote
          text="For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God."
          reference="1 Corinthians 1:18"
          accent={BLUE}
        />
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The cross is not just one theme among many in 1 Corinthians — it is the organizing center of the entire letter. Every Corinthian problem is answered by Paul with the logic of the cross. Factionalism is overcome by cruciform leadership: a leader whose power looks like weakness, whose wisdom looks like foolishness. Sexual immorality is answered by the theology of the body: the body is for the Lord, and the Lord raised bodily. Gifts disorder is answered by the cross-shaped way of love. The denial of resurrection is answered by the firstfruits logic: if Christ was raised, then the dead will be raised.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The Corinthians were applying Greek values — wisdom, strength, beauty, status — to the Christian community. Paul's counter-move is radical: the cross inverts all of those scales. God chose the foolish, the weak, the low, the despised. A community shaped by the cross will look foolish to the world — and it is precisely in this foolishness that God's wisdom appears.
        </p>
      </SectionCard>

      {/* Key interpreters */}
      <SectionCard title="Key Interpreters" accent={BLUE}>
        <div style={{ display: "grid", gap: ".75rem" }}>
          {[
            {
              name: "Gordon Fee",
              work: "The First Epistle to the Corinthians (NICNT, 1987; revised 2014)",
              note: "The definitive evangelical commentary on 1 Corinthians — rigorous exegesis, pastoral warmth, and deep engagement with charismatic questions. Fee is a Pentecostal who reads Paul carefully.",
            },
            {
              name: "N.T. Wright",
              work: "Paul for Everyone: 1 Corinthians (2003); The Resurrection of the Son of God (2003)",
              note: "Wright on chapter 15 is unsurpassed — he traces the resurrection language in its Jewish and Greco-Roman context, showing why Paul's claim was both scandalous and precise.",
            },
            {
              name: "Anthony Thiselton",
              work: "The First Epistle to the Corinthians (NIGTC, 2000)",
              note: "The most comprehensive scholarly commentary — 1,400 pages engaging every exegetical, historical, and hermeneutical question. An indispensable reference.",
            },
            {
              name: "Timothy Keller",
              work: "Various sermons on 1 Corinthians",
              note: "Keller's preaching on 1 Corinthians 1–4 (wisdom of the cross) and chapter 15 (resurrection as the center of Christian ethics) is some of the finest homiletics on this letter.",
            },
          ].map((interp) => (
            <div
              key={interp.name}
              style={{
                padding: "1rem",
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div style={{ color: TEXT, fontWeight: 700 }}>{interp.name}</div>
              <div style={{ color: BLUE, fontSize: ".82rem", marginBottom: ".35rem", fontStyle: "italic" }}>{interp.work}</div>
              <div style={{ color: MUTED, fontSize: ".87rem", lineHeight: 1.7 }}>{interp.note}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

// ─── Tab: Wisdom of the Cross ─────────────────────────────────────────────────

function WisdomTab() {
  return (
    <div>
      <BlockQuote
        text="For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God."
        reference="1 Corinthians 1:18"
        accent={BLUE}
      />

      <SectionCard title="1:10–17 — The Factions" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul's opening charge: the Corinthians have divided themselves into rival parties around human teachers — &ldquo;I follow Paul,&rdquo; &ldquo;I follow Apollos,&rdquo; &ldquo;I follow Cephas,&rdquo; &ldquo;I follow Christ.&rdquo; Each party presumably claims its teacher as superior — the wisest, the most eloquent, the most authoritative.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul's rebuke is surgical: &ldquo;Is Christ divided? Was Paul crucified for you? Were you baptized in the name of Paul?&rdquo; (1:13). The questions answer themselves. Christian identity is not derivative of a human teacher's reputation but of Christ's cross. The factions are a symptom of importing worldly status competition into the church.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          Paul is almost relieved he baptized so few personally (1:14–16) — it means fewer people can claim a baptismal connection to him as a status marker. His calling was not to baptize but to preach the gospel, &ldquo;not with words of eloquent wisdom, lest the cross of Christ be emptied of its power&rdquo; (1:17). Rhetorical display would shift attention from the cross to the orator.
        </p>
      </SectionCard>

      <SectionCard title="1:18–25 — The Theology of the Cross" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          1:18–25 is the theological heart of the letter. Paul identifies two postures toward the message of the cross: those perishing (for whom it is foolishness) and those being saved (for whom it is the power of God). The contrast is not intellectual but existential — it is a matter of where one stands in relation to God's saving act.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Jews require signs — visible demonstrations of divine power and vindication. Greeks seek wisdom — philosophical coherence and rhetorical sophistication. Paul announces that the gospel satisfies neither demand: &ldquo;we preach Christ crucified — a stumbling block to Jews and foolishness to Gentiles&rdquo; (1:23). A crucified Messiah is precisely the opposite of Jewish expectation and Roman honor culture.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          But for those who are called — both Jews and Greeks — Christ crucified is &ldquo;the power of God and the wisdom of God&rdquo; (1:24). The cross does not fail to be wisdom and power; it redefines them from the ground up.
        </p>
        <div
          style={{
            background: `${BLUE}12`,
            borderRadius: 10,
            border: `1px solid ${BLUE}40`,
            padding: "1.1rem 1.3rem",
            marginTop: ".5rem",
          }}
        >
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>
            &ldquo;For the foolishness of God is wiser than human wisdom, and the weakness of God is stronger than human strength.&rdquo; — 1 Corinthians 1:25
          </p>
        </div>
      </SectionCard>

      <SectionCard title="1:26–31 — The Calling of the Corinthians" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul makes the abstract argument concrete by pointing to the Corinthians themselves: &ldquo;not many of you were wise by human standards; not many were influential; not many were of noble birth&rdquo; (1:26). The social composition of the church is itself a theological statement.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          God chose the foolish to shame the wise; the weak to shame the strong; the lowly and despised, even &ldquo;the things that are not&rdquo; to nullify the things that are. The purpose clause is everything: &ldquo;so that no one may boast before him&rdquo; (1:29). Every feature of God's election strategy is designed to eliminate human pride as a factor in salvation.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The climax is 1:30–31: Christ Jesus &ldquo;has become for us wisdom from God — that is, our righteousness, holiness and redemption.&rdquo; The fourfold description is comprehensive. If you want wisdom, righteousness, sanctification, and redemption — all are found in Christ. And therefore: &ldquo;Let the one who boasts boast in the Lord&rdquo; (1:31, citing Jer. 9:24).
        </p>
      </SectionCard>

      <SectionCard title="2:1–5 — Paul's Personal Resolve" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul's method in Corinth was a deliberate expression of the gospel's content. He came &ldquo;not with eloquence or human wisdom when I proclaimed to you the testimony about God&rdquo; (2:1). This was not incompetence but conviction: eloquent wisdom would shift the ground of faith from the Spirit's power to the preacher's skill.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          &ldquo;For I resolved to know nothing while I was with you except Jesus Christ and him crucified. I came to you in weakness with great fear and trembling&rdquo; (2:2–3). The weakness was real — Paul was not performing humility. His message and manner aligned: both communicated cruciformity.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The goal: &ldquo;so that your faith might not rest on human wisdom, but on God's power&rdquo; (2:5). Faith built on rhetorical persuasion is only as stable as the rhetorical case. Faith built on the Spirit's demonstration — though it looks unimpressive — stands on God's own power.
        </p>
      </SectionCard>

      <SectionCard title="2:6–16 — The Hidden Wisdom" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul does teach wisdom — but it is &ldquo;not the wisdom of this age or of the rulers of this age, who are coming to nothing&rdquo; (2:6). It is God's secret wisdom decreed before the ages, hidden from the world's authorities. The rulers of this age did not understand it — proof: &ldquo;for if they had, they would not have crucified the Lord of glory&rdquo; (2:8).
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The Spirit mediates this wisdom. &ldquo;The Spirit searches all things, even the deep things of God&rdquo; (2:10). As no one knows a person's thoughts except that person's own spirit, so no one knows the thoughts of God except the Spirit of God. We have received not the spirit of the world but the Spirit who is from God &ldquo;that we may understand what God has freely given us&rdquo; (2:12).
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The &ldquo;natural person&rdquo; (psychikos, the person without the Spirit) does not accept the things of the Spirit — they are foolishness to him, and he cannot understand them because they are spiritually discerned (2:14). Paul closes with a remarkable claim: &ldquo;we have the mind of Christ&rdquo; (2:16). Not omniscience, but access to God's perspective through the Spirit.
        </p>
      </SectionCard>

      <SectionCard title="3:1–23 — The Apollos/Paul Dispute Resolved" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul turns to the ministers themselves. He could not address the Corinthians as spiritual people but as infants — still worldly, still quarreling. &ldquo;For when one says, 'I follow Paul,' and another, 'I follow Apollos,' are you not merely human?&rdquo; (3:4). The factionalism proves spiritual immaturity.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul and Apollos are simply workers — &ldquo;I planted the seed, Apollos watered it, but God has been making it grow&rdquo; (3:6). Both are nothing; only God is the source of growth. The agricultural metaphor shifts to architecture: each builder builds on the foundation of Jesus Christ. The work will be tested by fire — some will survive, some will be burned up, though the builder himself may be saved &ldquo;only as one escaping through the flames&rdquo; (3:15).
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The climax of the argument is 3:21–23: &ldquo;All things are yours — whether Paul or Apollos or Cephas or the world or life or death or the present or the future — all are yours, and you are of Christ, and Christ is of God.&rdquo; To belong to a faction is to reduce your inheritance. To belong to Christ is to inherit all.
        </p>
      </SectionCard>

      <SectionCard title="4:1–21 — Apostolic Suffering as the Norm" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Chapter 4 is Paul's most personal — and most searing — passage in the letter. He contrasts the Corinthians' triumphalism with apostolic reality: &ldquo;We are fools for Christ's sake, but you are so wise in Christ! We are weak, but you are strong! You are honored, we are dishonored!&rdquo; (4:10). The irony is blistering.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The apostolic catalog in 4:11–13 is arresting: &ldquo;To this present hour we are both hungry and thirsty and are poorly dressed and are buffeted and homeless, and we labor, working with our own hands. When reviled, we bless; when persecuted, we endure; when slandered, we entreat. We have become, and are still, like the scum of the world, the refuse of all things.&rdquo;
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          This is the cruciform shape of genuine Christian leadership: not prestige, influence, and rhetorical polish, but the pattern of Christ's own self-giving. Paul appeals to the Corinthians as their father in the faith — &ldquo;imitate me&rdquo; (4:16) — because he has lived out the theology he has taught. The shape of the cross must mark the shape of the community's leaders.
        </p>
      </SectionCard>
    </div>
  );
}

// ─── Tab: Church Disorders ────────────────────────────────────────────────────

function ChurchTab() {
  const disorderItems = [
    {
      q: "5 — Sexual Immorality and Church Discipline",
      a: "A man is living with his father's wife — an arrangement so scandalous it is not even named among the pagans. More shocking: the church is proud of it (5:2), perhaps as a demonstration of their spiritual freedom. Paul commands the community to hand the man over to Satan — expulsion from the protective fellowship of the church — so that his flesh might be destroyed but his spirit saved in the day of the Lord (5:5). The theological basis: a little leaven leavens the whole lump (5:6). The church's holiness is not just individual; it is corporate.",
    },
    {
      q: "6:1–11 — Lawsuits Among Believers",
      a: "Corinthian believers are taking disputes before pagan courts — a practice Paul regards as a profound theological failure. 'Dare any of you take a dispute before the ungodly instead of before the Lord's people?' (6:1). The eschatological argument: you will judge the world; you will judge angels. Is it not absurd that you cannot judge trivial earthly matters? Paul makes the radical suggestion: better to be wronged, better to be cheated (6:7) than to drag a fellow believer before a pagan judge. The very existence of the lawsuit is already a defeat.",
    },
    {
      q: "6:12–20 — The Body Is for the Lord",
      a: "Some Corinthians reasoned: 'All things are lawful for me' and 'Food is meant for the stomach and the stomach for food' — extending bodily appetite logic to sexual behavior. Paul corrects with resurrection theology: the body is not for sexual immorality but for the Lord, and the Lord for the body (6:13). God raised the Lord and will raise us also by his power. Therefore the body is not neutral territory. 'Do you not know that your bodies are members of Christ himself?' (6:15). The command is stark: 'Flee sexual immorality' (6:18). And then the single most important NT text on the sanctity of the body: 'Do you not know that your body is a temple of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies' (6:19–20).",
    },
    {
      q: "7 — Marriage and Singleness",
      a: "Chapter 7 is Paul's most nuanced treatment of sexuality and vocation. He corrects two distortions simultaneously: ascetics demanding celibacy within marriage (7:1–5) and the assumption that singleness has no positive value. Paul honors marriage — husband and wife have conjugal authority over each other's body; they should not deprive one another except by mutual consent for a season of prayer. But he also defends singleness as a gift (charisma), enabling undivided devotion to God (7:32–35). His 'it is better to marry than to burn' (7:9) is pastoral realism, not a demotion of marriage. The 'I say, not the Lord' passages (7:12, 25) are not Paul hedging but Paul distinguishing between direct dominical teaching and his own Spirit-guided apostolic instruction.",
    },
    {
      q: "8–10 — Food Offered to Idols",
      a: "Paul develops the most sophisticated ethical argument in the letter across three chapters. The 'strong' Corinthians know that idols are nothing and that there is one God — so eating meat sacrificed in a pagan temple is harmless. Correct knowledge. But Paul introduces the weaker brother: a new Christian whose conscience is so formed that eating such meat feels like participating in idol worship. For that person, eating violates conscience — and a violated conscience is damaged, even if the action was 'objectively' neutral. The principle: your freedom, exercised without love, can destroy someone for whom Christ died (8:11). Paul backs this up with his own apostolic example in chapter 9: he has rights (to financial support, to a wife) but surrenders them for the gospel. The summary principle of 10:23–33: all things are lawful, but not all things are helpful; seek the good of the other, not your own good; do all to the glory of God.",
    },
    {
      q: "11:1–16 — Head Coverings",
      a: "The most debated passage in the letter — two thousand years of interpretation have not reached consensus. Paul's argument involves the principle of 'head' (kephalē), which may mean source/origin rather than authority. The practice he is regulating — women praying and prophesying with uncovered heads, men with covered heads — was apparently disrupting the social intelligibility of gender distinctions in the congregation. The application question for today is genuinely difficult: is Paul mandating a specific cultural practice (covering) for a specific cultural reason (social shame) in a specific cultural context (Corinth), or is he encoding a permanent theological principle in a culturally contingent form? Both the complementarian and egalitarian traditions wrestle seriously with this text.",
    },
    {
      q: "11:17–34 — The Lord's Supper Abuses",
      a: "Paul's sharpest rebuke in the letter. When the Corinthians come together, the wealthy arrive early, eat fully, and drink heavily — some are drunk before the poor arrive. The poor are humiliated. 'When you come together, it is not the Lord's Supper you eat' (11:20) — the harshest possible judgment. You proclaim the Lord's death while re-enacting the social stratifications his death abolished. Paul delivers the institution narrative (11:23–26) — the earliest written account of the Last Supper, predating the Gospels. The warning is severe: eating and drinking without discerning the body — both Christ's eucharistic body and his ecclesial body — is the reason some are weak, ill, and have died (11:30). Self-examination, waiting for one another, and recognition of the church's unity are the prescribed remedies.",
    },
  ];

  return (
    <div>
      <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: ".95rem" }}>
        Chapters 5–11 address a cascade of disorders in the Corinthian community — not abstract theological disputes but concrete, pastoral crises. Each disorder reveals a deeper theological confusion, and Paul answers each with the logic of the gospel.
      </p>
      <Accordion items={disorderItems} accent={BLUE} />
    </div>
  );
}

// ─── Tab: The Love Chapter ────────────────────────────────────────────────────

function LoveTab() {
  return (
    <div>
      {/* Context */}
      <SectionCard title="Reading Chapter 13 in Context" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          First Corinthians 13 is one of the most frequently read passages in the Bible — at weddings, funerals, graduations. This is not wrong, but it strips the chapter of its argumentative force. In its original context, 1 Corinthians 13 is Paul's answer to the gifts disorder of chapters 12–14. It is a rebuke, not a poem.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The Corinthians were ranking spiritual gifts — with tongues apparently at the top — and the gifted were using their gifts competitively, in self-display rather than for the community's good. Paul's &ldquo;more excellent way&rdquo; (12:31) is not an alternative to spiritual gifts; it is the manner in which all gifts are to be exercised. Love is the operating system, not an optional feature.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          Chapter 13 is bracketed by chapters 12 and 14, which deal directly with gifts. It is impossible to read it as a freestanding meditation on love without gutting it of its pastoral purpose. Paul is saying to the gift-proud Corinthians: without love, your impressive gifts are noise, zero, nothing.
        </p>
      </SectionCard>

      {/* 13:1-3 */}
      <SectionCard title="13:1–3 — Gifts Without Love" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul's opening salvo is designed to shock: the highest spiritual achievements available to the Corinthians — tongues of men and of angels, prophetic powers, all knowledge, mountain-moving faith, total self-sacrifice — are worth precisely nothing without love.
        </p>
        <div style={{ display: "grid", gap: ".7rem", marginBottom: ".9rem" }}>
          {[
            { text: '"If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal."', note: "Tongues — the most prized Corinthian gift — reduced to meaningless percussion." },
            { text: '"If I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing."', note: "Not less than hoped — nothing. The Greek ouden is absolute." },
            { text: '"If I give away all I have, and if I deliver up my body to be burned, but have not love, I gain nothing."', note: "Even ultimate sacrifice — martyrdom — is valueless if the motive is self rather than love." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
                padding: "1rem",
              }}
            >
              <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, marginBottom: ".4rem", fontSize: ".9rem" }}>{item.text}</p>
              <p style={{ color: MUTED, fontSize: ".83rem", margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 13:4-7 — The Grid */}
      <SectionCard title="13:4–7 — The Fifteen Descriptions of Love" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.2rem" }}>
          Paul describes love with fifteen clauses — eight negative (what love does not do) and seven positive (what love does and is). This is not an abstract definition but a mirror. The Corinthians would have recognized themselves in each negative description.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: ".85rem",
          }}
        >
          {LOVE_DESCRIPTIONS.map((desc, i) => (
            <div
              key={i}
              style={{
                background: BG,
                borderRadius: 10,
                border: `1px solid ${BORDER}`,
                padding: "1rem 1.1rem",
                borderLeft: `3px solid ${BLUE}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: ".5rem", marginBottom: ".35rem" }}>
                <span style={{ color: BLUE, fontWeight: 800, fontSize: ".93rem" }}>{desc.trait}</span>
                {desc.greek && (
                  <span style={{ color: MUTED, fontSize: ".75rem", fontStyle: "italic" }}>({desc.greek})</span>
                )}
              </div>
              <p style={{ color: MUTED, fontSize: ".84rem", lineHeight: 1.65, margin: 0 }}>{desc.exposition}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 13:8-13 */}
      <SectionCard title="13:8–13 — Gifts Cease; Love Remains" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul now establishes love's supremacy by arguing for its permanence. Prophecy will cease; tongues will stop; knowledge will pass away. Why? &ldquo;For we know in part and we prophesy in part, but when completeness comes, what is in part disappears&rdquo; (13:9–10). Gifts are appropriate to the partial, not-yet-complete condition of the present age.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The child/adult analogy: childish things are appropriate for children — there is no shame in them — but an adult does not cling to them once maturity has come (13:11). Similarly, the partial gifts of the present age will be superseded when the fullness of God's kingdom arrives.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The glass-darkly contrast (13:12) captures the present condition: &ldquo;For now we see only a reflection as in a mirror; then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known.&rdquo; All present knowledge is partial. All present gifts serve a partial-knowledge situation. But love does not depend on partial knowledge — it transcends it.
        </p>
        <div
          style={{
            background: `${BLUE}12`,
            borderRadius: 10,
            border: `1px solid ${BLUE}40`,
            padding: "1.25rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: ".4rem", fontSize: "1rem" }}>
            &ldquo;And now these three remain: faith, hope and love. But the greatest of these is love.&rdquo;
          </p>
          <cite style={{ color: MUTED, fontSize: ".83rem" }}>— 1 Corinthians 13:13</cite>
        </div>
      </SectionCard>
    </div>
  );
}

// ─── Tab: Spiritual Gifts ─────────────────────────────────────────────────────

function GiftsTab() {
  const giftsList = [
    "Word of wisdom",
    "Word of knowledge",
    "Faith",
    "Gifts of healing",
    "Miraculous powers",
    "Prophecy",
    "Distinguishing between spirits",
    "Speaking in tongues",
    "Interpretation of tongues",
  ];

  const cessationPositions = [
    {
      name: "Cessationism",
      color: GOLD,
      summary:
        "Miraculous gifts (tongues, healing, prophecy in the revelatory sense) ceased with the close of the apostolic age and the completion of the NT canon. The 'completeness' of 13:10 refers to the completed Scripture. Key texts: 13:8–10; Heb 1:1–2; the absence of charismatic phenomena in the Pastoral Epistles.",
      proponents: "B.B. Warfield, John MacArthur, Thomas Schreiner",
    },
    {
      name: "Open but Cautious",
      color: TEAL,
      summary:
        "The gifts are available in the present age but should be practiced with great discernment and subordinate to Scripture. No formal cessation in Scripture, but widespread abuse warrants caution. Gifts are less normative than in the apostolic period without being categorically unavailable.",
      proponents: "Wayne Grudem (partially), D.A. Carson, John Piper (partially)",
    },
    {
      name: "Continuationism",
      color: PURPLE,
      summary:
        "All gifts listed in the NT continue throughout the church age. The 'completeness' of 13:10 refers to the return of Christ, not the canon. The gifts are the ordinary equipment of the Spirit for every age. Cessationism reads post-Enlightenment Western experience into the text.",
      proponents: "Gordon Fee, Craig Keener, Sam Storms, the global Pentecostal tradition",
    },
  ];

  return (
    <div>
      <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: ".95rem" }}>
        Chapters 12–14 form a unit: Paul corrects the Corinthians' disordered use of spiritual gifts by grounding all gift-use in the Spirit's unity (ch. 12), the love imperative (ch. 13), and the principle of edification (ch. 14).
      </p>

      {/* 12:1-11 */}
      <SectionCard title="12:1–11 — One Spirit, Many Gifts" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          Paul opens by establishing the pneumatological criterion for authentic spiritual experience: &ldquo;no one speaking by the Spirit of God ever says 'Jesus is cursed,' and no one can say 'Jesus is Lord' except in the Holy Spirit&rdquo; (12:3). The basic confession grounds all gift-evaluation.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          The triple parallelism of 12:4–6 — varieties of gifts / same Spirit; varieties of service / same Lord; varieties of activities / same God — establishes that diversity in gifts is not a problem to be solved but a design feature. Every manifestation of the Spirit is given for the common good (12:7).
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          The list of gifts in 12:8–10:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: ".6rem",
            marginBottom: ".9rem",
          }}
        >
          {giftsList.map((g) => (
            <div
              key={g}
              style={{
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
                padding: ".6rem .85rem",
                color: TEXT,
                fontSize: ".86rem",
                textAlign: "center",
              }}
            >
              {g}
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The closing of verse 11 is decisive for any theology of gifts: &ldquo;All these are the work of one and the same Spirit, and he distributes them to each one, just as he determines.&rdquo; Gifts are sovereign distributions, not human achievements or rewards for spirituality.
        </p>
      </SectionCard>

      {/* 12:12-31 */}
      <SectionCard title="12:12–31 — The Body Metaphor" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The body metaphor is Paul's most powerful tool for dismantling the Corinthians' gift hierarchy. The body is one though it has many members (12:12). Applied to the church: &ldquo;For we were all baptized by one Spirit so as to form one body — whether Jews or Gentiles, slave or free — and we were all given the one Spirit to drink&rdquo; (12:13).
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The running rhetorical question — can the eye say to the hand &ldquo;I don't need you&rdquo;? can the head say to the feet &ldquo;I don't need you&rdquo;? — exposes the absurdity of gift hierarchies. Further: &ldquo;those parts of the body that seem to be weaker are indispensable&rdquo; (12:22). God has arranged the body so that the parts we think less honorable receive special honor.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The communal implication: &ldquo;If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it&rdquo; (12:26). This is the social vision that the gift-competition was destroying.
        </p>
        <div
          style={{
            background: `${BLUE}12`,
            border: `1px solid ${BLUE}30`,
            borderRadius: 10,
            padding: "1rem 1.2rem",
          }}
        >
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: ".93rem" }}>
            &ldquo;Now you are the body of Christ, and each one of you is a part of it.&rdquo; — 1 Corinthians 12:27
          </p>
        </div>
      </SectionCard>

      {/* 14 */}
      <SectionCard title="14:1–40 — Prophecy, Tongues, and Order" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Chapter 14 is Paul's practical ruling on the gifts dispute. The governing principle: &ldquo;Since you are eager for gifts of the Spirit, try to excel in those that build up the church&rdquo; (14:12). Edification of the assembly is the criterion by which gifts are to be weighed.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          On tongues vs. prophecy: &ldquo;I would rather speak five intelligible words to instruct others than ten thousand words in a tongue&rdquo; (14:19). The argument is not that tongues are worthless — Paul says &ldquo;I speak in tongues more than all of you&rdquo; (14:18) and &ldquo;do not forbid speaking in tongues&rdquo; (14:39). But in corporate worship, intelligibility serves the body; unintelligible speech serves only the individual.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The outsider argument (14:23–25) is pastoral gold: if the whole church speaks in tongues when an unbeliever enters, they will say &ldquo;you are out of your mind.&rdquo; But if everyone prophesies and the unbeliever is convicted and examined, they will fall down and worship God, declaring &ldquo;God is really among you.&rdquo; The gifts must serve the mission.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          Paul closes with the foundational principle: &ldquo;For God is not a God of disorder but of peace&rdquo; (14:33). Order in worship is not a cultural preference but a theological statement about the character of God.
        </p>
      </SectionCard>

      {/* Cessationism debate */}
      <SectionCard title="The Cessationism / Continuationism Debate" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.2rem" }}>
          The question of whether the miraculous gifts of 1 Corinthians 12 remain available to the church today is one of the most significant and contested issues in evangelical biblical theology. Three main positions:
        </p>
        <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
          {cessationPositions.map((pos) => (
            <div
              key={pos.name}
              style={{
                background: BG,
                borderRadius: 10,
                border: `1px solid ${BORDER}`,
                padding: "1.1rem 1.25rem",
                borderLeft: `4px solid ${pos.color}`,
              }}
            >
              <div style={{ color: pos.color, fontWeight: 800, marginBottom: ".5rem" }}>{pos.name}</div>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: ".88rem", marginBottom: ".5rem" }}>{pos.summary}</p>
              <div style={{ color: MUTED, fontSize: ".8rem" }}>
                <span style={{ color: TEXT }}>Key proponents: </span>{pos.proponents}
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8, fontSize: ".9rem" }}>
          What all positions agree on: all gifts are distributed by the Spirit for the common good; no believer is ungifted; all gifts must be exercised in love; the Spirit's sovereignty in distributing gifts is not to be overridden by human ambition or institutional gatekeeping.
        </p>
      </SectionCard>
    </div>
  );
}

// ─── Tab: Resurrection ────────────────────────────────────────────────────────

function ResurrectionTab() {
  const contrasts = [
    { sown: "Sown perishable", raised: "Raised imperishable" },
    { sown: "Sown in dishonor", raised: "Raised in glory" },
    { sown: "Sown in weakness", raised: "Raised in power" },
    { sown: "Sown a natural body", raised: "Raised a spiritual body" },
  ];

  const appearancesCreed = [
    { ref: "v. 5", text: "Appeared to Cephas (Peter)" },
    { ref: "v. 5", text: "Appeared to the Twelve" },
    { ref: "v. 6", text: "Appeared to more than 500 brothers at one time, most of whom are still alive" },
    { ref: "v. 7", text: "Appeared to James" },
    { ref: "v. 7", text: "Appeared to all the apostles" },
    { ref: "v. 8", text: "Last of all, appeared to Paul — 'as to one abnormally born'" },
  ];

  return (
    <div>
      <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: ".95rem" }}>
        Chapter 15 is the longest sustained argument in any of Paul's letters and the most important chapter in the Bible on the resurrection of the dead. It contains the earliest resurrection creed in the NT, the most devastating reductio ad absurdum in Paul's writing, the seed analogy for the resurrection body, and the great victory passage that closes the chapter.
      </p>

      {/* 15:1-11 */}
      <SectionCard title="15:1–11 — The Earliest Resurrection Creed" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          Paul opens with a reminder of &ldquo;the gospel I preached to you&rdquo; — the tradition he received and delivered. The &ldquo;received / delivered&rdquo; (parelabon / paredōka) formula marks this as pre-Pauline tradition, likely going back to within a few years of the resurrection itself.
        </p>
        <div
          style={{
            background: `${BLUE}10`,
            borderRadius: 10,
            border: `1px solid ${BLUE}40`,
            padding: "1.2rem",
            marginBottom: "1.1rem",
          }}
        >
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, margin: 0, fontSize: ".93rem" }}>
            &ldquo;That Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, then to the Twelve.&rdquo;
          </p>
          <cite style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem", display: "block" }}>— 1 Corinthians 15:3–5 (the creed)</cite>
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          The creed has four elements: died / buried / raised / appeared. The burial confirms the reality of the death; the appearances confirm the reality of the resurrection. The &ldquo;according to the Scriptures&rdquo; clauses ground both death and resurrection in Israel's scriptural story.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The appearances Paul lists:</p>
        <div style={{ display: "grid", gap: ".55rem", marginBottom: ".9rem" }}>
          {appearancesCreed.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: ".8rem",
                alignItems: "flex-start",
                padding: ".65rem 1rem",
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  background: `${BLUE}20`,
                  color: BLUE,
                  borderRadius: 5,
                  padding: ".15rem .5rem",
                  fontSize: ".76rem",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "monospace",
                }}
              >
                {a.ref}
              </span>
              <span style={{ color: MUTED, fontSize: ".88rem", lineHeight: 1.65 }}>{a.text}</span>
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The reference to 500 eyewitnesses &ldquo;most of whom are still alive&rdquo; (15:6) functions as an implicit invitation to verify: these people can be questioned. Paul's self-description as &ldquo;the least of the apostles&rdquo; who persecuted the church (15:9) adds credibility — he has no motive to fabricate his own inclusion.
        </p>
      </SectionCard>

      {/* 15:12-19 */}
      <SectionCard title="15:12–19 — The Logic of Resurrection" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Some in Corinth were saying there is no resurrection of the dead — perhaps a proto-Gnostic view that the material body is irrelevant to the spiritual soul, or a Greek philosophical assumption that bodily resurrection is impossible or undesirable.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          Paul's reductio ad absurdum: if there is no resurrection of the dead, then Christ has not been raised. And if Christ has not been raised:
        </p>
        <div style={{ display: "grid", gap: ".6rem", marginBottom: ".9rem" }}>
          {[
            "Our preaching is in vain",
            "Your faith is futile",
            "We are false witnesses about God",
            "You are still in your sins",
            "Those who have fallen asleep in Christ have perished",
            "We are of all people most to be pitied",
          ].map((consequence, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: ".75rem",
                alignItems: "center",
                padding: ".6rem 1rem",
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span style={{ color: RED, fontWeight: 700, fontSize: ".8rem", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ color: MUTED, fontSize: ".88rem" }}>{consequence}</span>
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The list is not rhetorical excess — each consequence is precisely calculated. The whole structure of Christian existence (faith, hope, ethics, community, mission) is built on the foundation of bodily resurrection. Remove it and nothing remains. This is Paul's answer to any theology that wants the benefits of Christianity without the offense of bodily resurrection.
        </p>
      </SectionCard>

      {/* 15:20-28 */}
      <SectionCard title="15:20–28 — The Firstfruits and the End" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          &ldquo;But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep&rdquo; (15:20). The firstfruits metaphor is decisive: the firstfruits of a harvest are not separate from the harvest — they are the initial, guaranteeing installment of what is to come. Christ's resurrection is not a unique anomaly but the first occurrence of a general resurrection.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The Adam / Christ typology (15:21–22): by a man came death; by a man came also the resurrection of the dead. In Adam all die; in Christ all will be made alive. The &ldquo;all&rdquo; in each clause is governed by the &ldquo;in&rdquo; — those in Adam die; those in Christ will be raised. This is not universalism but solidarity language: membership in a human family (Adam's or Christ's) determines destiny.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The sequence: Christ the firstfruits; then at his coming those who belong to Christ; then the end — when he hands over the kingdom to the Father after destroying every rule and authority and power. The last enemy to be destroyed is death (15:26). The final state: God will be all in all (15:28) — an expression of eschatological completeness, not a flattening of personal identity.
        </p>
      </SectionCard>

      {/* 15:35-58 */}
      <SectionCard title="15:35–58 — The Resurrection Body" accent={BLUE}>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
          &ldquo;But someone will ask, 'How are the dead raised? With what kind of body will they come?'&rdquo; (15:35). Paul answers with analogies. The seed analogy: you do not plant the body that will be — you plant a bare seed, and God gives it whatever body he chooses. The continuity is in the plant, not in the form of the seed. So with resurrection: continuity of personal identity, transformation of bodily form.
        </p>

        {/* Four contrasts */}
        <p style={{ color: TEXT, fontWeight: 700, marginBottom: ".75rem", fontSize: ".9rem" }}>
          The Four Contrasts (15:42–44):
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: ".85rem",
            marginBottom: "1.1rem",
          }}
        >
          {contrasts.map((c) => (
            <div
              key={c.sown}
              style={{
                background: BG,
                borderRadius: 10,
                border: `1px solid ${BORDER}`,
                padding: ".85rem 1rem",
                textAlign: "center",
              }}
            >
              <div style={{ color: MUTED, fontSize: ".82rem", marginBottom: ".3rem" }}>{c.sown}</div>
              <div style={{ color: BLUE, fontSize: "1.1rem", marginBottom: ".3rem" }}>↓</div>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: ".9rem" }}>{c.raised}</div>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: ".9rem" }}>
          The &ldquo;spiritual body&rdquo; (sōma pneumatikon) does not mean immaterial — sōma always refers to a body in Paul. It means a body fully animated and transformed by the Spirit, as opposed to the present body animated by the soul (psychikon). The resurrection body is more substantial, not less — glorified, powerful, imperishable.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The climactic vision (15:51–57): &ldquo;Listen, I tell you a mystery: we will not all sleep, but we will all be changed — in a flash, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, the dead will be raised imperishable, and we will be changed. For the perishable must clothe itself with the imperishable, and the mortal with immortality.&rdquo;
        </p>
        <div
          style={{
            background: `${BLUE}10`,
            borderRadius: 12,
            border: `1px solid ${BLUE}40`,
            padding: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.85, marginBottom: ".5rem", fontSize: ".95rem" }}>
            &ldquo;'Where, O death, is your victory? Where, O death, is your sting?' The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ.&rdquo;
          </p>
          <cite style={{ color: MUTED, fontSize: ".82rem" }}>— 1 Corinthians 15:55–57</cite>
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8 }}>
          The chapter closes with a &ldquo;therefore&rdquo; (15:58) that grounds present ethics in future resurrection: &ldquo;Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.&rdquo; Resurrection is not a speculative doctrine about the afterlife; it is the foundation of present faithful action.
        </p>
      </SectionCard>
    </div>
  );
}

// ─── Tab: Journal ─────────────────────────────────────────────────────────────

function JournalTab() {
  const [entry, setEntry] = useState<JournalEntry>(EMPTY_ENTRY);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_1cor_journal");
      if (stored) setEntry(JSON.parse(stored));
    } catch {}
  }, []);

  function handleChange(field: keyof JournalEntry, value: string) {
    const updated = { ...entry, [field]: value };
    setEntry(updated);
    try {
      localStorage.setItem("vine_1cor_journal", JSON.stringify(updated));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {}
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    color: TEXT,
    padding: ".75rem 1rem",
    fontSize: ".93rem",
    lineHeight: 1.7,
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "inherit",
    marginTop: ".35rem",
  };

  const labelStyle: React.CSSProperties = {
    color: TEXT,
    fontWeight: 700,
    fontSize: ".9rem",
    display: "block",
    marginBottom: ".15rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: ".82rem",
    marginTop: ".2rem",
    display: "block",
  };

  return (
    <div>
      <div
        style={{
          background: CARD,
          borderRadius: 14,
          border: `1px solid ${BORDER}`,
          padding: "1.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.2rem", marginTop: 0, marginBottom: ".5rem" }}>
          My Study Journal
        </h2>
        <p style={{ color: MUTED, fontSize: ".9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          Record your reflections as you study 1 Corinthians. Your notes are saved automatically to your browser.
        </p>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <label style={labelStyle}>Chapter or Passage</label>
            <span style={hintStyle}>Which section of 1 Corinthians are you reflecting on?</span>
            <input
              type="text"
              value={entry.chapter}
              onChange={(e) => handleChange("chapter", e.target.value)}
              placeholder="e.g., 1 Corinthians 15:1-11"
              style={{ ...fieldStyle, minHeight: "auto" }}
            />
          </div>

          <div>
            <label style={labelStyle}>What surprised you?</label>
            <span style={hintStyle}>Something you noticed for the first time, or that struck you differently.</span>
            <textarea
              value={entry.surprised}
              onChange={(e) => handleChange("surprised", e.target.value)}
              placeholder="Write your observation here..."
              style={{ ...fieldStyle, minHeight: 100 }}
            />
          </div>

          <div>
            <label style={labelStyle}>What challenged you?</label>
            <span style={hintStyle}>What in this passage is difficult to accept, understand, or apply?</span>
            <textarea
              value={entry.challenged}
              onChange={(e) => handleChange("challenged", e.target.value)}
              placeholder="Write your challenge here..."
              style={{ ...fieldStyle, minHeight: 100 }}
            />
          </div>

          <div>
            <label style={labelStyle}>Your Response</label>
            <span style={hintStyle}>A prayer, a commitment, a question you are sitting with.</span>
            <textarea
              value={entry.response}
              onChange={(e) => handleChange("response", e.target.value)}
              placeholder="Write your response here..."
              style={{ ...fieldStyle, minHeight: 120 }}
            />
          </div>
        </div>

        {saved && (
          <p style={{ color: GREEN, fontSize: ".83rem", marginTop: ".75rem" }}>Saved.</p>
        )}
      </div>

      {/* Reflection prompts */}
      <div
        style={{
          background: CARD,
          borderRadius: 14,
          border: `1px solid ${BORDER}`,
          padding: "1.5rem",
        }}
      >
        <h3 style={{ color: BLUE, fontWeight: 800, fontSize: "1rem", marginTop: 0, marginBottom: "1rem" }}>
          Reflection Prompts
        </h3>
        <div style={{ display: "grid", gap: ".75rem" }}>
          {[
            {
              chapter: "1 Corinthians 1–4",
              prompt:
                "Which division in your own faith community most resembles the Corinthian factions? What does the wisdom of the cross say to it?",
            },
            {
              chapter: "1 Corinthians 6:19–20",
              prompt:
                "What difference does it make that your body is a temple of the Holy Spirit? Where do you live as if it were not?",
            },
            {
              chapter: "1 Corinthians 13:4–7",
              prompt:
                "Which of the fifteen descriptions of love exposes the deepest failure in your relationships? What would changing it look like concretely?",
            },
            {
              chapter: "1 Corinthians 12:12–27",
              prompt:
                "Which members of your church do you treat as unnecessary? What does Paul's body metaphor ask of you toward them?",
            },
            {
              chapter: "1 Corinthians 15:58",
              prompt:
                "What specific labor — work, relationship, act of service — feels most 'in vain' right now? How does bodily resurrection change its weight?",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: BG,
                borderRadius: 8,
                border: `1px solid ${BORDER}`,
                padding: ".85rem 1rem",
              }}
            >
              <div style={{ color: BLUE, fontWeight: 700, fontSize: ".82rem", marginBottom: ".3rem" }}>
                {item.chapter}
              </div>
              <p style={{ color: MUTED, fontSize: ".87rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                {item.prompt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Videos ──────────────────────────────────────────────────────────────

function VideosTab() {
  return (
    <div>
      <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: ".95rem" }}>
        Curated video resources for studying 1 Corinthians — from survey overviews to focused expositions of key passages.
      </p>
      <div style={{ display: "grid", gap: "1.75rem" }}>
        {COR_VIDEOS.map((v) => (
          <div
            key={v.videoId}
            style={{
              background: CARD,
              borderRadius: 14,
              border: `1px solid ${BORDER}`,
              overflow: "hidden",
            }}
          >
            <VideoEmbed videoId={v.videoId} title={v.title} />
            <div style={{ padding: "1.1rem 1.3rem" }}>
              <div style={{ color: TEXT, fontWeight: 800, fontSize: "1rem", marginBottom: ".25rem" }}>
                {v.title}
              </div>
              <div style={{ color: BLUE, fontSize: ".8rem", marginBottom: ".5rem" }}>{v.channel}</div>
              <p style={{ color: MUTED, fontSize: ".87rem", lineHeight: 1.7, margin: 0 }}>{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FirstCorinthiansGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_1cor_tab", "overview");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <main id="main-content" style={{ maxWidth: 940, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

          {/* Page header */}
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: ".6rem" }}>✝️</div>
            <h1
              style={{
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: TEXT,
                marginBottom: ".6rem",
                marginTop: 0,
              }}
            >
              1 Corinthians Study Guide
            </h1>
            <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.7, fontSize: ".97rem" }}>
              A divided, troubled church — and Paul's pastoral theology of the cross-shaped community
            </p>
          </div>

          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".5rem",
              marginBottom: "2.25rem",
              justifyContent: "center",
            }}
          >
            {TAB_LIST.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: ".5rem 1.1rem",
                    borderRadius: 20,
                    border: `1px solid ${isActive ? BLUE : BORDER}`,
                    background: isActive ? `${BLUE}22` : CARD,
                    color: isActive ? BLUE : MUTED,
                    fontWeight: isActive ? 700 : 400,
                    cursor: "pointer",
                    fontSize: ".84rem",
                    transition: "all .15s",
                    fontFamily: "inherit",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "wisdom" && <WisdomTab />}
          {activeTab === "church" && <ChurchTab />}
          {activeTab === "love" && <LoveTab />}
          {activeTab === "gifts" && <GiftsTab />}
          {activeTab === "resurrection" && <ResurrectionTab />}
          {activeTab === "journal" && <JournalTab />}
          {activeTab === "videos" && <VideosTab />}

        </main>
      </div>
      <Footer />
    </div>
  );
}
