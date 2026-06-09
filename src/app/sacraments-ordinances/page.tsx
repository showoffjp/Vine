"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Droplets, BookOpen } from "lucide-react";

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
  { id: "baptism", label: "Baptism" },
  { id: "baptism-views", label: "Baptism Views" },
  { id: "lords-supper", label: "Lord's Supper" },
  { id: "supper-views", label: "Supper Views" },
  { id: "number", label: "How Many?" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const BAPTISM_VIEWS = [
  {
    name: "Credobaptism (Believer's Baptism)",
    traditions: "Baptist, Anabaptist, Pentecostal, many Evangelical",
    color: BLUE,
    claim: "Baptism is the public declaration of prior personal faith. Only those who have professed faith in Christ should be baptized — there is no biblical example of infant baptism, and the New Testament pattern is always believe → baptize.",
    texts: ["Matthew 28:19 — 'Go and make disciples... baptizing them'", "Acts 2:38 — 'Repent and be baptized'", "Acts 8:36-37 — 'Philip baptized the Ethiopian after he confessed faith'"],
    nature: "Ordinance — a symbolic act that proclaims the gospel. Christ commanded it; it does not impart grace but symbolizes it.",
  },
  {
    name: "Paedobaptism (Infant Baptism)",
    traditions: "Reformed, Presbyterian, Lutheran, Anglican, Methodist, Catholic, Orthodox",
    color: GOLD,
    claim: "Baptism is the sign of the covenant that includes infants of believers, just as circumcision did in the Old Covenant. The household baptisms in Acts (Cornelius, Lydia, the Philippian jailer) likely included children. Baptism initiates into the covenant community.",
    texts: ["Colossians 2:11-12 — baptism as the circumcision of Christ", "Acts 2:39 — 'the promise is for you and your children'", "Household baptisms: Acts 10:47, 16:15, 16:33"],
    nature: "Sacrament (for most traditions) — a means of grace, not merely symbolic. For Lutherans and Anglicans, the water and Word actually work. For Reformed, it is a sign and seal of covenant promises.",
  },
  {
    name: "Baptismal Regeneration",
    traditions: "Catholic, Eastern Orthodox, some Lutheran",
    color: PURPLE,
    claim: "Baptism is not merely a sign but the instrument through which God effects the new birth (John 3:5 — 'born of water and the Spirit'). Absent extraordinary circumstances, baptism is the ordinary means of regeneration. Original sin is washed away in baptism.",
    texts: ["John 3:5 — 'born of water and the Spirit'", "Acts 22:16 — 'be baptized and wash your sins away'", "Titus 3:5 — 'the washing of rebirth'"],
    nature: "Sacrament that effects what it signifies — the grace is not dependent on the faith of the recipient but on Christ's action through the sacramental sign.",
  },
  {
    name: "Baptism by Immersion Only",
    traditions: "Baptist, Church of Christ, many Evangelical",
    color: TEAL,
    claim: "The Greek baptizo means 'to immerse' — full immersion is the only valid mode. Sprinkling (aspersion) and pouring (affusion) are later historical innovations not supported by the NT text or early practice.",
    texts: ["Mark 1:9-10 — 'coming up out of the water'", "John 3:23 — 'much water'", "Romans 6:3-4 — the burial/resurrection symbolism requires full immersion"],
    nature: "The symbolism of death, burial, and resurrection (Rom 6) is only properly captured by full immersion.",
  },
];

const SUPPER_VIEWS = [
  {
    name: "Transubstantiation",
    traditions: "Roman Catholic",
    color: GOLD,
    claim: "At the words of consecration, the substance of the bread and wine is truly transformed into the body and blood of Christ, while the accidents (outward appearance) remain. Christ is truly, really, and substantially present. The Mass is a re-presentation (not re-sacrifice) of Calvary.",
    key_text: "Council of Trent (1551) — the 'change of the whole substance of the bread into the substance of the Body of Christ.'",
  },
  {
    name: "Consubstantiation / Real Presence",
    traditions: "Lutheran",
    color: BLUE,
    claim: "Christ is truly present 'in, with, and under' the bread and wine — the Lutheran 'sacramental union.' The bread and wine do not become the body and blood; rather, the body and blood are present alongside the physical elements. Luther rejected both transubstantiation and mere symbolism.",
    key_text: "Luther: 'This is my body' — these words mean what they say. The body is really present even if we cannot understand how.",
  },
  {
    name: "Spiritual Presence / Calvin",
    traditions: "Reformed, Presbyterian",
    color: PURPLE,
    claim: "Christ is spiritually and truly present in the Supper — not in the physical elements but to the faith of the believer. The Spirit lifts our hearts to the ascended Christ (sursum corda). It is neither mere memory nor physical presence but a genuine spiritual feeding on Christ.",
    key_text: "Calvin: 'The flesh and blood of Christ are truly given to us in the Supper, though by a spiritual, not bodily, presence.'",
  },
  {
    name: "Memorial / Symbolic (Zwingli)",
    traditions: "Baptist, Anabaptist, many Evangelical",
    color: TEAL,
    claim: "The Lord's Supper is a memorial — a commemorative act that proclaims the Lord's death (1 Cor 11:26) and expresses unity in the body of Christ. The elements are not transformed; Christ is not specially present. 'This is my body' means 'this represents my body.'",
    key_text: "Zwingli: The Supper is a pledge of allegiance, a public confession of faith, a commemoration — not a means of grace.",
  },
  {
    name: "Eastern Orthodox",
    traditions: "Eastern Orthodox",
    color: RED,
    claim: "The Eucharist is the centerpiece of Orthodox worship — a genuine mystery (mysterion) that cannot be fully explained. The bread and wine become the true body and blood of Christ. The Eucharist is the new Passover, the eschatological banquet of the Kingdom, and the medicine of immortality.",
    key_text: "Ignatius of Antioch (c. 110 AD): 'The Eucharist is the flesh of our Savior Jesus Christ.'",
  },
];

const HOW_MANY = [
  {
    tradition: "Roman Catholic",
    number: "7",
    color: GOLD,
    list: ["Baptism", "Confirmation", "Eucharist", "Penance/Reconciliation", "Anointing of the Sick", "Holy Orders", "Matrimony"],
    reasoning: "Each of the seven is instituted by Christ, confers grace ex opere operato (by the work performed), and has a visible sign and invisible grace.",
  },
  {
    tradition: "Eastern Orthodox",
    number: "7 (Holy Mysteries)",
    color: RED,
    list: ["Baptism", "Chrismation", "Eucharist", "Confession", "Holy Unction", "Holy Orders", "Holy Matrimony"],
    reasoning: "Orthodox prefer the term 'Holy Mysteries' over 'sacraments.' The number seven is traditional; some Orthodox theologians say all of church life is sacramental.",
  },
  {
    tradition: "Lutheran / Anglican",
    number: "2 (or 3)",
    color: BLUE,
    list: ["Baptism", "Lord's Supper", "(sometimes Confession)"],
    reasoning: "Luther narrowed to sacraments explicitly instituted by Christ with a visible sign. Some Lutherans include Confession (absolution) as a third sacrament.",
  },
  {
    tradition: "Reformed / Baptist",
    number: "2 (Ordinances)",
    color: PURPLE,
    list: ["Baptism", "Lord's Supper"],
    reasoning: "Most Protestants restrict to the two ordinances Christ explicitly commanded (Matt 28:19, 1 Cor 11:23-26). Many prefer 'ordinance' over 'sacrament' to avoid confusion with Catholic connotations.",
  },
];

const VIDEOS = [
  { videoId: "Nf0LV0rFJmI", title: "Baptism: What Does the Bible Say?" },
  { videoId: "1nGnMGZDq9E", title: "The Lord's Supper: Four Views Explained" },
  { videoId: "pMTm0B9pqmA", title: "Infant Baptism vs Believer's Baptism — Sinclair Ferguson & Ligon Duncan" },
  { videoId: "nCZcKbJZ2Ug", title: "What Is the Lord's Supper? R.C. Sproul" },
];

export default function SacramentsPage() {
  const [tab, setTab] = useLocalStorage("vine_sacr_tab", "overview");
  const [openBaptism, setOpenBaptism] = useLocalStorage("vine_sacr_baptism", "");
  const [openSupper, setOpenSupper] = useLocalStorage("vine_sacr_supper", "");
  const [journal, setJournal] = useLocalStorage("vine_sacr_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Ecclesiology</span>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Sacramental Theology</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Sacraments &amp; Ordinances
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            Baptism and the Lord&apos;s Supper are the two rites Jesus explicitly commanded his church to practice. They are also among the most contested: do they convey grace or merely symbolize it? Who should receive them and how? How many sacraments are there? The answers reveal deep differences — and deep agreements.
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
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>Sacrament or Ordinance?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: BG, border: `1px solid ${GOLD}30`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Sacrament</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>From Latin sacramentum (oath, sacred thing). Catholic, Orthodox, and many Protestant traditions: a sacrament is an outward sign of an inward grace — and actually conveys what it signifies. The physical element plus the Word equals the sacrament.</p>
                </div>
                <div style={{ background: BG, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Ordinance</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>Baptist and many evangelical traditions: an ordinance is a rite ordained (commanded) by Christ that symbolizes and proclaims the gospel but does not itself confer grace. Grace is already received through faith; the ordinance publicly declares it.</p>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 14 }}>What All Christians Agree On</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Jesus commanded both baptism and the Lord's Supper (Matt 28:19, 1 Cor 11:23-26)",
                  "Both involve physical elements through which spiritual reality is communicated",
                  "Both are community practices — not private spiritual disciplines",
                  "Both proclaim the gospel: baptism proclaims death and resurrection; the Supper proclaims the Lord's death until he comes",
                  "Both matter — not peripheral accessories but central to the life of the church",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "baptism" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Baptism: What the Bible Teaches</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Key Texts on Baptism</div>
              {[
                { ref: "Matthew 28:19-20", color: BLUE, text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", note: "The Great Commission — baptism is inseparable from the disciple-making mission of the church." },
                { ref: "Romans 6:3-4", color: GREEN, text: "Don't you know that all of us who were baptized into Christ Jesus were baptized into his death?", note: "Paul connects baptism to union with Christ in death and resurrection — the most theologically rich NT passage on baptism." },
                { ref: "Acts 2:38-39", color: GOLD, text: "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'", note: "The first Christian proclamation includes baptism — repent, be baptized, receive the Spirit." },
                { ref: "Galatians 3:27", color: PURPLE, text: "For all of you who were baptized into Christ have clothed yourselves with Christ.", note: "Baptism as 'putting on Christ' — a change of identity and allegiance." },
                { ref: "1 Peter 3:21", color: TEAL, text: "And this water symbolizes baptism that now saves you also — not the removal of dirt from the body but the pledge of a clear conscience toward God.", note: "A complex verse — 'saves' is qualified: not physical washing but the pledge/answer to God. The water saves through resurrection (not ex opere operato)." },
              ].map((t, i) => (
                <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
                  <div style={{ color: t.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{t.ref}</div>
                  <blockquote style={{ margin: "0 0 6px", paddingLeft: 10, borderLeft: `2px solid ${t.color}`, fontStyle: "italic", color: TEXT, fontSize: 13, lineHeight: 1.6 }}>&ldquo;{t.text}&rdquo;</blockquote>
                  <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "baptism-views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Baptism: The Major Views</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The debates about baptism include: who should receive it, what mode is required, and what it effects. These are the four major positions.
            </p>
            {BAPTISM_VIEWS.map((view, i) => {
              const isOpen = openBaptism === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${view.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenBaptism(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <div style={{ color: view.color, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{view.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{view.traditions}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{view.claim}</p>
                      <div style={{ background: `${view.color}10`, border: `1px solid ${view.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                        <div style={{ color: view.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>KEY TEXTS</div>
                        {view.texts.map((t, j) => (
                          <div key={j} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, marginBottom: 2 }}>{t}</div>
                        ))}
                      </div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}><strong style={{ color: TEXT }}>Nature: </strong>{view.nature}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "lords-supper" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Lord&apos;s Supper: Biblical Foundations</div>
            {[
              { ref: "Matthew 26:26-28", color: GOLD, text: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, 'Take and eat; this is my body.' Then he took a cup... saying, 'Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.'", note: "The institution narrative — the source of the 'words of institution' used in every tradition's celebration." },
              { ref: "1 Corinthians 11:23-26", color: BLUE, text: "For I received from the Lord what I also passed on to you: The Lord Jesus, on the night he was betrayed, took bread... Do this in remembrance of me... For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.", note: "Paul's version adds 'in remembrance' and 'proclaim' — giving the memorial and proclamatory dimensions. But note: proclaiming the Lord's death is more than merely remembering it." },
              { ref: "John 6:53-56", color: PURPLE, text: "Jesus said to them, 'Very truly I tell you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you... Whoever eats my flesh and drinks my blood remains in me, and I in them.'", note: "A disputed text — Catholic/Orthodox see this as Eucharistic. Protestant interpreters often read it as metaphorical. But even the metaphorical reading is about deeply participating in Christ." },
              { ref: "1 Corinthians 10:16-17", color: TEAL, text: "Is not the cup of thanksgiving for which we give thanks a participation in the blood of Christ? And is not the bread that we break a participation in the body of Christ?", note: "The Greek koinonia (participation, sharing, communion) is the basis for 'Communion' as a name for the Supper. It is a sharing in Christ." },
            ].map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: t.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 12, borderLeft: `3px solid ${t.color}`, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.7 }}>&ldquo;{t.text}&rdquo;</blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, background: `${t.color}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "supper-views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Lord&apos;s Supper: The Five Views</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              No single point of Christian theology has produced more controversy and church division than the Lord&apos;s Supper. The Marburg Colloquy (1529) failed to unite Luther and Zwingli — and Christianity has remained divided on this question ever since.
            </p>
            {SUPPER_VIEWS.map((view, i) => {
              const isOpen = openSupper === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${view.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenSupper(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <div style={{ color: view.color, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{view.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{view.traditions}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{view.claim}</p>
                      <div style={{ background: `${view.color}10`, border: `1px solid ${view.color}20`, borderRadius: 8, padding: "10px 14px", fontStyle: "italic", color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{view.key_text}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "number" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>How Many Sacraments?</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Roman Catholic and Orthodox traditions recognize seven sacraments; most Protestants recognize two. The difference reflects different criteria for what constitutes a sacrament — and different theologies of grace.
            </p>
            {HOW_MANY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 16 }}>{item.tradition}</span>
                  <span style={{ background: `${item.color}20`, color: item.color, fontSize: 12, padding: "2px 8px", borderRadius: 10, fontWeight: 600 }}>{item.number}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                  {item.list.map((s, j) => (
                    <span key={j} style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, borderRadius: 20, padding: "3px 10px", fontSize: 12 }}>{s}</span>
                  ))}
                </div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.reasoning}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                What tradition do you come from on baptism and the Lord&apos;s Supper? Have you ever examined why your tradition holds the position it does? Is there anything from another view that challenges or enriches your understanding?
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
              { label: "Baptism Theology", href: "/baptism-theology" },
              { label: "Protestant Denominations", href: "/protestant-denominations" },
              { label: "Catholic Faith", href: "/catholic-faith" },
              { label: "Church History", href: "/church-history" },
              { label: "Five Solas", href: "/five-solas" },
              { label: "Ecclesiology", href: "/ecclesiology" },
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
