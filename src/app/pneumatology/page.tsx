"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Wind, Flame, Check } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "person", label: "His Personhood" },
  { id: "deity", label: "His Deity" },
  { id: "work", label: "His Work" },
  { id: "gifts", label: "Gifts & Fruit" },
  { id: "baptism", label: "Spirit Baptism" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const PERSONHOOD_EVIDENCE = [
  { aspect: "He Speaks", ref: "Acts 13:2", text: "The Holy Spirit said, Set apart for me Barnabas and Saul for the work to which I have called them.", color: BLUE },
  { aspect: "He Teaches", ref: "John 14:26", text: "'The Advocate... will teach you all things and will remind you of everything I have said to you.'", color: GREEN },
  { aspect: "He Guides", ref: "John 16:13", text: "'When he, the Spirit of truth, comes, he will guide you into all the truth.'", color: TEAL },
  { aspect: "He Intercedes", ref: "Romans 8:26", text: "'The Spirit himself intercedes for us through wordless groans.'", color: PURPLE },
  { aspect: "He Can Be Grieved", ref: "Ephesians 4:30", text: "'Do not grieve the Holy Spirit of God.'", color: GOLD },
  { aspect: "He Can Be Blasphemed", ref: "Matthew 12:31", text: "Blasphemy against the Spirit — unique among sins. You can only blaspheme a person, not a force.", color: RED },
  { aspect: "He Has a Will", ref: "1 Corinthians 12:11", text: "'All these are the work of one and the same Spirit, and he distributes them to each one, just as he determines.'", color: BLUE },
  { aspect: "He Loves", ref: "Romans 15:30", text: "'By the love of the Spirit...' — Love is a characteristic of persons, not impersonal forces.", color: GREEN },
];

const DEITY_EVIDENCE = [
  { point: "Called God directly", ref: "Acts 5:3-4", detail: "Peter says Ananias lied to the Holy Spirit (v.3) and then immediately says he lied to God (v.4). The identification is explicit and direct." },
  { point: "Eternal (no beginning)", ref: "Hebrews 9:14", detail: "'Christ, who through the eternal Spirit offered himself unblemished to God.' The Spirit is eternal — uncreated, without origin." },
  { point: "Omnipresent", ref: "Psalm 139:7-10", detail: "'Where can I go from your Spirit? Where can I flee from your presence?' The Spirit's presence is coextensive with God's presence — universal, inescapable." },
  { point: "Omniscient", ref: "1 Corinthians 2:10-11", detail: "'The Spirit searches all things, even the deep things of God.' He knows what only God knows — the inner things of God himself." },
  { point: "Creator", ref: "Genesis 1:2", detail: "'The Spirit of God was hovering over the waters.' The Spirit participates in creation alongside the Father and Son." },
  { point: "Associated with Father and Son as equal", ref: "Matthew 28:19", detail: "The baptismal formula: 'in the name of the Father and of the Son and of the Holy Spirit' — one name, three persons, co-equal." },
];

const SPIRIT_WORKS = [
  {
    title: "In Creation",
    color: TEAL,
    icon: "🌊",
    works: [
      { work: "Hovering over creation (Gen 1:2)", desc: "The Spirit was present and active in the original creation — not a later addition to the divine plan." },
      { work: "Sustaining life (Ps 104:29-30)", desc: "When God takes away the Spirit, creatures die and return to dust. The Spirit is the ongoing source of creaturely life." },
    ],
  },
  {
    title: "In Salvation",
    color: GREEN,
    icon: "💚",
    works: [
      { work: "Conviction of sin (John 16:8-11)", desc: "The Spirit convinces the world of sin, righteousness, and judgment — without this work, no one would turn to Christ." },
      { work: "Regeneration / New Birth (John 3:5-8, Titus 3:5)", desc: "The Spirit produces the new birth — he is the agent of spiritual resurrection from death to life." },
      { work: "Indwelling believers (Rom 8:9, 1 Cor 6:19)", desc: "Every Christian has the Spirit dwelling within them — this is what defines being a Christian (Rom 8:9: 'if anyone does not have the Spirit of Christ, they do not belong to Christ')." },
      { work: "Sanctification (2 Thess 2:13, 1 Pet 1:2)", desc: "The Spirit is the agent of our transformation — working to make believers increasingly conformed to Christ." },
    ],
  },
  {
    title: "In the Church",
    color: PURPLE,
    icon: "⛪",
    works: [
      { work: "Gifting believers for ministry (1 Cor 12:7-11)", desc: "Spiritual gifts are distributed to believers 'for the common good' — the Spirit equips the body of Christ for its mission." },
      { work: "Unifying the body (Eph 4:3-4)", desc: "There is 'one Spirit' — Christian unity is grounded in our shared participation in the one Spirit." },
      { work: "Illuminating Scripture (1 Cor 2:13-14)", desc: "The Spirit who inspired Scripture also illuminates it — helping believers understand spiritual truth that the natural mind cannot receive." },
    ],
  },
  {
    title: "In Prayer",
    color: GOLD,
    icon: "🙏",
    works: [
      { work: "Interceding when words fail (Rom 8:26)", desc: "In our weakness and confusion, the Spirit intercedes for us with 'groans that words cannot express.'" },
      { work: "Enabling us to cry 'Abba, Father' (Gal 4:6)", desc: "The Spirit produces in us the intimate address to God as Father — we could not call on God this way on our own." },
    ],
  },
];

const FRUIT_LIST = [
  { fruit: "Love", color: RED, greek: "agapē", desc: "Not primarily affection but committed, self-giving, other-centered action — the foundation of all other fruit." },
  { fruit: "Joy", color: GOLD, greek: "chara", desc: "Not happiness (contingent on circumstances) but a settled delight in God that persists even in suffering (Phil 4:4, James 1:2)." },
  { fruit: "Peace", color: TEAL, greek: "eirēnē", desc: "Shalom — wholeness, harmony, right relationship. With God, self, others, and creation." },
  { fruit: "Patience", color: BLUE, greek: "makrothymia", desc: "Long-suffering — the capacity to endure difficulty without becoming bitter or retaliatory." },
  { fruit: "Kindness", color: GREEN, greek: "chrēstotēs", desc: "Practical goodness directed toward others — not just inner virtue but expressed care." },
  { fruit: "Goodness", color: PURPLE, greek: "agathōsynē", desc: "Moral excellence expressed in action — doing what is genuinely good, not merely what appears good." },
  { fruit: "Faithfulness", color: GOLD, greek: "pistis", desc: "Reliability and trustworthiness — being a person others can count on, reflecting God's own faithfulness." },
  { fruit: "Gentleness", color: TEAL, greek: "prautēs", desc: "Often translated 'meekness' — not weakness but power under control, strength directed by love rather than ego." },
  { fruit: "Self-Control", color: RED, greek: "enkrateia", desc: "Mastery of one's own desires, appetites, and impulses — not suppression but disciplined integration." },
];

const BAPTISM_VIEWS = [
  {
    view: "Reformed / Cessationist",
    color: BLUE,
    summary: "All genuine believers are baptized in the Spirit at the moment of conversion (1 Cor 12:13). Spirit baptism = union with Christ and his body. No subsequent, distinct experience of Spirit baptism is normative. Tongues and the more dramatic gifts ceased with the apostolic age.",
    texts: ["1 Corinthians 12:13", "Romans 8:9"],
  },
  {
    view: "Wesleyan / Holiness",
    color: GREEN,
    summary: "Spirit baptism is a 'second work of grace' subsequent to conversion — entire sanctification or 'perfect love.' Not equated with tongues but with a deeper consecration and cleansing of the heart from the dominion of sin.",
    texts: ["Acts 2", "1 Thessalonians 5:23"],
  },
  {
    view: "Pentecostal / Classical",
    color: RED,
    summary: "Spirit baptism is a distinct experience subsequent to salvation, evidenced initially by speaking in tongues. It empowers believers for witness and ministry. Tongues are the 'initial physical evidence' — this is the distinctive Pentecostal position.",
    texts: ["Acts 2:4", "Acts 10:44-46", "Acts 19:1-6"],
  },
  {
    view: "Charismatic / Third Wave",
    color: PURPLE,
    summary: "Spirit baptism may happen at conversion or subsequently. Tongues are a gift but not the required initial evidence. All gifts are operative today. Emphasis on ongoing, experiential encounter with the Spirit in worship and ministry.",
    texts: ["Acts 2", "1 Corinthians 14", "Ephesians 5:18"],
  },
];

const VIDEOS = [
  { videoId: "oNNZO9i1Gjc", title: "Who Is the Holy Spirit? A Theological Introduction" },
  { videoId: "xTuBMYNy7Oc", title: "The Fruit of the Spirit: Paul's Vision of Transformed Character" },
  { videoId: "u9JBNQb2DL8", title: "Spirit Baptism: What Does the Bible Actually Teach?" },
  { videoId: "sGhir6arEZo", title: "The Gifts of the Spirit: Cessationism vs. Continuationism" },
];

export default function PneumatologyPage() {
  const [tab, setTab] = useLocalStorage("vine_pneuma_tab", "overview");
  const [openWork, setOpenWork] = useLocalStorage("vine_pneuma_work", "");
  const [openBaptism, setOpenBaptism] = useLocalStorage("vine_pneuma_baptism", "");
  const [journal, setJournal] = useLocalStorage("vine_pneuma_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Systematic Theology</span>
            <span style={{ background: `${TEAL}20`, color: TEAL, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Pneumatology</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Pneumatology: The Doctrine of the Holy Spirit
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            The Holy Spirit is the most neglected person of the Trinity — treated as a power, a force, or a feeling, rather than the divine person he is. This guide covers his personhood, deity, works in creation and salvation, the fruit and gifts he produces, and the debate over Spirit baptism.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`,
                background: tab === t.id ? `${BLUE}20` : "transparent",
                color: tab === t.id ? BLUE : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Wind size={24} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>The Neglected Person of the Trinity</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Karl Barth called the Holy Spirit &ldquo;the great Unknown&rdquo; of Christian theology. Many Christians can describe the Father and the Son in some detail, but the Spirit remains mysterious — sometimes reduced to an impersonal power or an emotional experience. Yet Scripture presents him as a fully personal, fully divine member of the Trinity whose work is indispensable: without him, no one is saved, no one is sanctified, no one prays rightly, and no one understands Scripture.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Key Names &amp; Titles of the Spirit</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { name: "Holy Spirit", ref: "Luke 11:13", note: "The most common designation — emphasizing his moral character." },
                  { name: "Spirit of God", ref: "Gen 1:2, 1 Cor 2:11", note: "His essential relationship to the Father." },
                  { name: "Spirit of Christ", ref: "Rom 8:9, 1 Pet 1:11", note: "His relationship to the Son — sent by Christ, bearing Christ's character." },
                  { name: "The Advocate (Paraclete)", ref: "John 14:16, 26", note: "One called alongside — counselor, helper, intercessor, advocate." },
                  { name: "Spirit of Truth", ref: "John 14:17, 16:13", note: "He guides into all truth — illuminating Scripture and revealing Christ." },
                  { name: "Spirit of Life", ref: "Romans 8:2", note: "Source of spiritual life — the antithesis of sin and death." },
                  { name: "Spirit of Holiness", ref: "Romans 1:4", note: "Used of the Spirit who raised Jesus — his essential holy character." },
                  { name: "Eternal Spirit", ref: "Hebrews 9:14", note: "Uncreated, without beginning — a divine attribute, not a created quality." },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{item.name}</div>
                    <div style={{ color: GOLD, fontSize: 11, marginBottom: 4 }}>{item.ref}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "person" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>His Personhood</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The most fundamental question in pneumatology is not &ldquo;what does the Spirit do&rdquo; but &ldquo;who is the Spirit?&rdquo; The answer is not &ldquo;a force&rdquo; or &ldquo;an energy&rdquo; but a person — with intellect, emotion, and will.
            </p>
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: "16px 20px", marginBottom: 4 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The Greek word pneuma is neuter (it), which led many to speak of the Spirit as &ldquo;it.&rdquo; But Jesus consistently uses the masculine pronoun ekeinos (&ldquo;he,&rdquo; not &ldquo;it&rdquo;) when referring to the Spirit in John 14-16 — a grammatical choice that signals personal identity over grammatical gender.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Biblical Evidence for Personhood</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {PERSONHOOD_EVIDENCE.map((ev, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${ev.color}20`, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ color: ev.color, fontWeight: 700, fontSize: 13 }}>{ev.aspect}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{ev.ref}</span>
                    </div>
                    <blockquote style={{ margin: 0, fontStyle: "italic", color: TEXT, fontSize: 13, lineHeight: 1.6 }}>&ldquo;{ev.text}&rdquo;</blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "deity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>His Deity</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The Holy Spirit is not a lesser divine being or a created intermediary — he is fully and equally God. The Nicene Creed confesses him as &ldquo;the Lord and Giver of life, who proceeds from the Father [and the Son], who together with the Father and Son is worshipped and glorified.&rdquo;
            </p>
            {DEITY_EVIDENCE.map((ev, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{ev.point}</div>
                <div style={{ color: GOLD, fontSize: 12, marginBottom: 8 }}>{ev.ref}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{ev.detail}</p>
              </div>
            ))}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 8 }}>The Filioque Controversy</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The historic split between Eastern Orthodoxy and Western Christianity partly hinged on whether the Spirit proceeds from the Father alone (Eastern) or from the Father &ldquo;and the Son&rdquo; (filioque — Western). The original Nicene Creed says &ldquo;from the Father.&rdquo; Rome added &ldquo;and the Son&rdquo; unilaterally in the 11th century — contributing to the Great Schism of 1054. Eastern Orthodoxy considers the filioque a theological error that compromises the monarchy of the Father. The Western tradition argues it protects the equality of Father and Son.
              </p>
            </div>
          </div>
        )}

        {tab === "work" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>His Works</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The Spirit&apos;s activity spans creation, salvation, and the life of the church. These are his major works.
            </p>
            {SPIRIT_WORKS.map((category, i) => {
              const isOpen = openWork === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenWork(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 20 }}>{category.icon}</span>
                      <span style={{ color: category.color, fontWeight: 700, fontSize: 15 }}>{category.title}</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      {category.works.map((w, j) => (
                        <div key={j} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 14px", marginBottom: j < category.works.length - 1 ? 8 : 0 }}>
                          <div style={{ color: category.color, fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{w.work}</div>
                          <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{w.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "gifts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Gifts &amp; Fruit of the Spirit</div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>The Fruit of the Spirit (Galatians 5:22-23)</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                &ldquo;Fruit&rdquo; is singular — not a list to choose from but a unified character profile of a Spirit-formed life. These are not achievements to strive for but the natural growth of a life surrendered to the Spirit.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {FRUIT_LIST.map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${item.color}30`, borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.fruit}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginBottom: 6, fontStyle: "italic" }}>{item.greek}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Major Gift Lists in Scripture</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Romans 12:6-8", gifts: ["Prophecy", "Service", "Teaching", "Exhortation", "Giving", "Leadership", "Mercy"], note: "Character/ministry gifts — focused on building the community." },
                  { ref: "1 Corinthians 12:8-10", gifts: ["Word of wisdom", "Word of knowledge", "Faith", "Healing", "Miracles", "Prophecy", "Discernment", "Tongues", "Interpretation"], note: "The most contested list — includes the 'sign gifts' debated in cessationism/continuationism." },
                  { ref: "Ephesians 4:11", gifts: ["Apostle", "Prophet", "Evangelist", "Pastor", "Teacher"], note: "Office gifts — the 'APEST' model; debated whether apostles and prophets continue today." },
                ].map((list, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ color: BLUE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>{list.ref}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                      {list.gifts.map((g, j) => (
                        <span key={j} style={{ background: `${BLUE}15`, color: BLUE, border: `1px solid ${BLUE}30`, borderRadius: 20, padding: "2px 8px", fontSize: 11 }}>{g}</span>
                      ))}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{list.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "baptism" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Spirit Baptism: The Four Views</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              &ldquo;Baptism in the Holy Spirit&rdquo; (Matthew 3:11, Acts 1:5) is one of the most contested pneumatological questions. The four major positions differ on whether it coincides with conversion, whether tongues are the required sign, and whether the apostolic gifts continue today.
            </p>
            {BAPTISM_VIEWS.map((view, i) => {
              const isOpen = openBaptism === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${view.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenBaptism(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: view.color, fontWeight: 700, fontSize: 15 }}>{view.view}</span>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{view.summary}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {view.texts.map((t, j) => (
                          <span key={j} style={{ background: `${view.color}15`, color: view.color, border: `1px solid ${view.color}30`, borderRadius: 20, padding: "2px 8px", fontSize: 12 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: "16px 20px" }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                For a deeper treatment of the cessationism/continuationism debate, see the full guide at <Link href="/cessationism-continuationism" style={{ color: TEAL }}>Cessationism &amp; Continuationism</Link>.
              </p>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                How do you typically relate to the Holy Spirit? Do you tend to treat him as a person or as a force/power? What would it look like for your prayer life to become more consciously Trinitarian — addressing the Father, through the Son, in the Spirit?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Trinity", href: "/trinity" },
              { label: "Cessationism & Continuationism", href: "/cessationism-continuationism" },
              { label: "Spiritual Gifts", href: "/spiritual-gifts" },
              { label: "Spiritual Formation", href: "/spiritual-formation" },
              { label: "Christology", href: "/christology" },
              { label: "Sanctification", href: "/sanctification" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
