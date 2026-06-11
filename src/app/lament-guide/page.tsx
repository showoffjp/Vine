"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

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
  { id: "what-is", label: "What Is Lament?" },
  { id: "anatomy", label: "Anatomy of Lament" },
  { id: "psalms", label: "Great Lament Psalms" },
  { id: "nt-lament", label: "NT Lament" },
  { id: "how-to", label: "How to Lament" },
  { id: "community", label: "Communal Lament" },
  { id: "journal", label: "Your Lament" },
  { id: "videos", label: "Videos" },
];

const LAMENT_TEXTS = [
  { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.", color: BLUE },
  { ref: "Lamentations 3:1–3", text: "I am the man who has seen affliction by the rod of the LORD's wrath. He has driven me away and made me walk in darkness rather than light; indeed, he has turned his hand against me again and again, all day long.", color: RED },
  { ref: "Psalm 13:1–2", text: "How long, LORD? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?", color: GOLD },
  { ref: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.", color: TEAL },
  { ref: "Revelation 6:10", text: "They called out in a loud voice, 'How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?'", color: PURPLE },
];

const WHY_LAMENT = [
  {
    title: "One-Third of the Psalms Are Laments",
    desc: "The Psalter — the church's prayerbook — gives enormous space to lament. Walter Brueggemann observed that the church has largely 'edited out' the psalms of complaint from corporate worship, producing a 'theology of orientation' that ignores disorientation. We have impoverished our spiritual vocabulary.",
    color: BLUE,
  },
  {
    title: "Lament Is Not Loss of Faith — It IS Faith",
    desc: "Lament is addressed to God, not away from him. The lamenter does not abandon God but drags God into the pain. This is faith under pressure — not the smooth faith of prosperity but the rough-hewn faith that refuses to let go even when God seems absent (Gen 32:26 — 'I will not let you go unless you bless me').",
    color: GREEN,
  },
  {
    title: "Suppressed Grief Becomes Bitterness",
    desc: "What we cannot mourn, we cannot move through. Grief that has no outlet — no language, no permission — calcifies into bitterness, cynicism, or despair. Lament gives grief a direction: toward God rather than inward. It does not bypass the pain but moves through it with a companion.",
    color: GOLD,
  },
  {
    title: "God Honors Lament",
    desc: "Job 42:7: God vindicates Job over his friends who offered neat theodicy. Job lamented, protested, and accused — his friends rationalized. God says Job 'spoke what is right about me.' Honest pain addressed to God is more pleasing to him than pious platitudes that deny the reality of suffering.",
    color: TEAL,
  },
  {
    title: "The Biblical Alternative to Superficial Positivity",
    desc: "Contemporary Christian culture often demands cheerfulness — 'God is good all the time!' — in ways that shame suffering and forbid grief. Lament is Scripture's push-back: the community of faith is a place where tears are allowed, pain is named, and the full range of human experience is brought before God.",
    color: PURPLE,
  },
];

const LAMENT_ANATOMY = [
  { step: "1", element: "Address", desc: "The lamenter turns to God directly — 'My God,' 'O LORD,' 'How long, Lord?' This address establishes the relationship and the direction of the prayer. Even in extreme darkness, the lamenter knows where to turn.", color: BLUE },
  { step: "2", element: "Complaint / Protest", desc: "The lamenter describes the pain with unflinching honesty. 'My God, why have you forsaken me?' God can handle our honest rage. This is not polished prayer — it is raw expression of genuine experience. The complaint can be against enemies, circumstances, or even God.", color: RED },
  { step: "3", element: "Petition", desc: "The lamenter asks for something — deliverance, justice, God's intervention. 'Rise up, O LORD! Deliver me, O my God!' (Ps 3:7). The petition assumes God can act and invites him to do so. This is not fatalism but expectant urgency.", color: GOLD },
  { step: "4", element: "Expression of Trust", desc: "Most lament psalms contain an affirmation of trust, often signaled by 'but' or 'yet.' 'I am a worm and not a man... but you brought me out of the womb' (Ps 22:6, 9). Trust does not erase the complaint; it coexists with it.", color: GREEN },
  { step: "5", element: "Vow of Praise", desc: "Many lament psalms end with a vow or anticipation of praise: 'I will praise you in the great congregation' (Ps 22:25). The ending is not arrival — often the pain has not resolved. The vow is an act of faith that the resolution will come.", color: TEAL },
];

const GREAT_LAMENT_PSALMS = [
  {
    psalm: "Psalm 22",
    theme: "Forsakenness and Deliverance",
    desc: "The archetypal individual lament — Jesus quotes the opening from the cross. Moves from utter desolation ('My God, why have you forsaken me?') through remembrance of past deliverance, through present extremity, to confident praise and testimony. A complete journey through darkness.",
    highlight: "Used by Jesus at Golgotha — legitimizing even the darkest human cry.",
    color: RED,
  },
  {
    psalm: "Psalm 88",
    theme: "Unresolved Darkness",
    desc: "The darkest psalm in the Psalter — the only lament that does not move to praise. Ends in darkness: 'Darkness is my closest friend.' Often called 'the psalm for people whose night won't end.' Its canonical presence tells us that unresolved lament is a legitimate form of prayer.",
    highlight: "Proof that God accepts lament even without resolution.",
    color: PURPLE,
  },
  {
    psalm: "Psalm 13",
    theme: "How Long?",
    desc: "Six rhetorical questions in two verses — 'How long... how long... how long... how long?' The lament of exhaustion, where even the questions feel like too much. Then a sudden pivot: 'But I trust in your unfailing love.' The journey in six verses.",
    highlight: "The shortest complete lament pattern — four questions to bold trust.",
    color: BLUE,
  },
  {
    psalm: "Psalm 73",
    theme: "Prosperity of the Wicked",
    desc: "Asaph nearly stumbles over the prosperity of the wicked and the suffering of the righteous. His crisis is resolved not by an answer but by a sanctuary encounter — in God's presence, the perspective shifts completely. 'Whom have I in heaven but you?' (v. 25).",
    highlight: "Shows lament as an invitation to encounter, not just a release of pain.",
    color: GOLD,
  },
  {
    psalm: "Lamentations",
    theme: "National Catastrophe",
    desc: "Five poems of communal lament over Jerusalem's destruction (587 BC). Unsparing in depicting devastation, honest about sin's role, yet containing the famous 'great is your faithfulness' (3:22–23). Models communal liturgical grief after collective trauma.",
    highlight: "Model for corporate lament after national or communal tragedy.",
    color: TEAL,
  },
];

const NT_LAMENT = [
  { title: "Jesus's Cry of Dereliction", desc: "'My God, my God, why have you forsaken me?' (Matt 27:46) — Jesus quotes Psalm 22 from the cross. The incarnate Son of God entered the darkest human experience of God-forsakenness. His lament sanctifies human lament and shows that the Father receives even this cry.", color: RED },
  { title: "Jesus Weeping at Lazarus's Tomb", desc: "John 11:35 — the shortest verse in the Bible, and one of the most profound. Jesus weeps not because he doesn't know the outcome (he raises Lazarus) but because grief is the appropriate response to death. He honors grief even in the face of resurrection.", color: BLUE },
  { title: "Paul's Groaning", desc: "Romans 8:22–26: creation groans, believers groan, the Spirit groans. Groaning is the Spirit-inspired response to the gap between what is and what will be. The language of lament — 'not yet,' 'in hope,' 'we do not know what to pray' — is part of the Christian's eschatological posture.", color: TEAL },
  { title: "The Martyrs' Cry", desc: "Revelation 6:10: the souls under the altar cry out 'How long, Sovereign Lord... until you avenge our blood?' The 'how long' of the Psalms reaches into the eschaton. Even in heaven, before the consummation, the cry of lament continues. Lament is not abolished until everything is made new.", color: GOLD },
];

const HOW_TO_LAMENT = [
  { step: 1, title: "Name the Pain Honestly", desc: "Start by telling God what is actually happening. Don't spiritualize it, minimize it, or rush to resolution. 'God, I am furious that this happened. I feel abandoned. I don't understand why you didn't intervene.' Specific, honest, unvarnished." },
  { step: 2, title: "Address God Directly", desc: "Lament is prayer, not venting. Direct the pain toward God — not at a journal, not at a friend, but to the one who is ultimately sovereign over your circumstances. 'God, where are you? How long will you let this go on?'" },
  { step: 3, title: "Use the Psalms as a Script", desc: "When you have no words, borrow the psalmists'. Read Psalm 13, 22, 42, 88, or Lamentations 3 aloud as your own prayer. The biblical languages of grief become your language. You are joining a great communion of lamenters." },
  { step: 4, title: "Protest Without Resolving Too Quickly", desc: "Don't rush to 'but God is still good' before the complaint has been fully expressed. The pivot in the lament psalms comes at the right time — and it is earned. Allow the protest to be complete before the trust is affirmed." },
  { step: 5, title: "Affirm What You Do Trust", desc: "Even in the darkness, name what remains true: 'I don't understand this, but I know you exist. I know you suffered. I know the resurrection happened. I know you have not left me.' This is not bypassing grief but coexisting with it." },
  { step: 6, title: "Wait Expectantly", desc: "Lament opens space for encounter. Not every lament resolves in the same session. Some laments take months or years. Psalm 88 ends in darkness — but it ends addressed to God. The direction matters even when the resolution is invisible." },
];

const COMMUNAL_LAMENT = [
  {
    title: "The Church Has Lost Communal Lament",
    desc: "The shift toward upbeat praise-focused worship has largely displaced corporate lament from evangelical church life. When suffering is private and worship is triumphant, people experiencing devastation feel unseen or spiritually defective. The church becomes a place you can't bring your worst days.",
    color: RED,
  },
  {
    title: "After Tragedy: Corporate Lament Services",
    desc: "In the aftermath of church tragedy, community loss, or national disaster, corporate lament services provide liturgical space for communal grief. Reading lament psalms together, communal silence, sharing, and honest prayer create a container for collective pain that individual coping cannot.",
    color: BLUE,
  },
  {
    title: "Lament for Injustice",
    desc: "The psalms of communal lament often address injustice — the oppression of the poor, the prosperity of the wicked, the suffering of the innocent. Corporate lament for racial injustice, poverty, or systemic evil is a biblical practice. It names the gap between what is and what should be, before God who cares about justice.",
    color: GREEN,
  },
  {
    title: "Lament as Witness",
    desc: "A church that laments honestly witnesses to a world that finds suffering meaningless. To suffer and still address God — to protest and still trust — is an act of countercultural faith. The church's capacity to hold grief without despair is a testimony to resurrection hope.",
    color: TEAL,
  },
];

const VIDEOS = [
  { videoId: "RmABgY-y5e4", title: "Lament: How to Pray When God Feels Absent" },
  { videoId: "7z5s2oN8FQE", title: "The Psalms of Lament — Walter Brueggemann" },
  { videoId: "vJO-VeqNwpY", title: "Why Christians Should Lament — Mark Vroegop" },
  { videoId: "Y5rQ8S0mbgk", title: "Dark Night of the Soul — John of the Cross" },
  { videoId: "SY-UJjWYDvQ", title: "Communal Lament in the Church" },
];

export default function LamentGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_lam_tab", "overview");
  const [openWhy, setOpenWhy] = useLocalStorage("vine_lam_why", "");
  const [openPsalm, setOpenPsalm] = useLocalStorage("vine_lam_psalm", "");
  const [lamentText, setLamentText] = useLocalStorage("vine_lam_text", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>😢</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: BLUE, textTransform: "uppercase" }}>Spiritual Practice</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Biblical Lament: Crying Out to God
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            One-third of the Psalms are laments — raw, honest cries of pain, protest, and confusion addressed directly to God. Lament is not a failure of faith; it is faith under pressure. This guide helps you understand, practice, and lead the overlooked discipline of biblical lament.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? BLUE : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Key Lament Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {LAMENT_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>The Lost Language of Lament</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                Walter Brueggemann observed that modern Christianity suffers from &quot;loss of lament&quot; — we have excised complaint psalms from our worship, producing a spirituality that has no resources for suffering, failure, and disorientation. When the church can only sing in major keys, it abandons those in minor keys to silence and shame.
              </p>
            </div>
          </div>
        )}

        {tab === "what-is" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Why Lament Is Faithful, Not Faithless</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Lament is frequently misunderstood as a failure of faith — a sign that someone has given up on God. Scripture says the opposite: lament is faith expressed under fire.
            </p>
            {WHY_LAMENT.map((item, i) => {
              const key = String(i);
              const open = openWhy === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenWhy(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "anatomy" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>The Five Elements of Biblical Lament</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Most lament psalms follow a recognizable pattern. Not every psalm has all elements, and they don&apos;t always appear in the same order — but this structure provides a guide to praying through pain.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {LAMENT_ANATOMY.map((item) => (
                <div key={item.element} style={{ display: "flex", gap: "1rem", background: `${item.color}08`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.3rem" }}>{item.element}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "psalms" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>The Great Lament Psalms</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five psalms and texts that model the full range of lament — from individual anguish to corporate grief, from temporary darkness to unresolved night.
            </p>
            {GREAT_LAMENT_PSALMS.map((item, i) => {
              const key = String(i);
              const open = openPsalm === key;
              return (
                <div key={item.psalm}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenPsalm(open ? "" : key)}>
                    <span style={{ fontWeight: 800 }}>{item.psalm} <span style={{ fontWeight: 400, color: MUTED }}>— {item.theme}</span></span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{item.desc}</p>
                      <p style={{ color: item.color, fontStyle: "italic", fontSize: "0.9rem" }}>{item.highlight}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "nt-lament" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: RED, margin: 0 }}>Lament in the New Testament</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The NT does not replace lament with triumph. Resurrection hope coexists with, rather than erasing, the honest experience of suffering and longing.
            </p>
            {NT_LAMENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "how-to" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>How to Lament: A Practical Guide</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {HOW_TO_LAMENT.map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "1rem", background: `${TEAL}08`, border: `1px solid ${TEAL}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${TEAL}25`, border: `1px solid ${TEAL}60`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: TEAL, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: TEAL, marginBottom: "0.3rem" }}>{item.title}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "community" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>Communal and Corporate Lament</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Lament is not only private. The church is called to lament together — for community tragedies, for national suffering, for systemic injustice, for grief too large to carry alone.
            </p>
            {COMMUNAL_LAMENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Write Your Lament</h2>
            <p style={{ color: MUTED, marginBottom: "0.75rem" }}>
              Use the five elements as a guide: <strong style={{ color: BLUE }}>Address</strong> God. <strong style={{ color: RED }}>Complain</strong> honestly. <strong style={{ color: GOLD }}>Ask</strong> for what you need. Affirm what you <strong style={{ color: GREEN }}>trust</strong>. Make a <strong style={{ color: TEAL }}>vow of praise</strong>.
            </p>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>Your lament is between you and God. There is no wrong way to do it.</p>
            <textarea
              value={lamentText}
              onChange={(e) => setLamentText(e.target.value)}
              placeholder="Begin your lament here — be honest, direct, and real..."
              style={{ width: "100%", minHeight: 250, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {lamentText && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {lamentText.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Lament</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Theodicy Guide", href: "/theodicy-guide" },
            { label: "Psalms Guide", href: "/psalms-guide" },
            { label: "Depression and Faith", href: "/depression-christian-faith" },
            { label: "Christian Grief Guide", href: "/christian-grief-guide" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
