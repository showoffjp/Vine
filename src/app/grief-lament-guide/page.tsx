"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444", PURPLE = "#6B4FBB";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "psalms", label: "Psalms of Lament" },
  { id: "job", label: "Job" },
  { id: "jesus", label: "Jesus & Grief" },
  { id: "types", label: "Types of Loss" },
  { id: "church", label: "The Church & Grief" },
  { id: "comfort", label: "Verses of Comfort" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const LAMENT_PSALMS = [
  {
    color: BLUE,
    title: "Psalm 22 — Forsaken and Delivered",
    body: "Psalm 22 opens with the most shocking line in the Psalter: 'My God, my God, why have you forsaken me?' (22:1). Jesus quotes it from the cross — the only psalm he quotes in the Passion narrative. The psalm moves through abandonment, mockery, physical suffering, and petition — then turns in verse 24 to praise: 'For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.' The lament form never denies the pain. But it does not end in it.",
  },
  {
    color: RED,
    title: "Psalm 88 — The One That Stays Dark",
    body: "Psalm 88 is the only lament psalm that does not turn toward praise or resolution. It ends: 'Darkness is my closest friend.' The Hebrew poet Heman gives the church permission to express grief that is not yet resolved — faith that has no emotional comfort, only the bare act of addressing God in the dark. This psalm is not included in the Psalter as a mistake. It is there as testimony: sometimes you can only cry out. The cry itself is the faith.",
  },
  {
    color: GOLD,
    title: "Psalm 13 — How Long, O Lord?",
    body: "Psalm 13 is the classic lament structure in miniature: complaint ('How long, LORD? Will you forget me forever?'), petition ('Look on me and answer, LORD my God'), and trust ('But I trust in your unfailing love; my heart rejoices in your salvation'). The remarkable thing is the speed of the turn — the psalmist does not wait for circumstances to change before offering praise. The trust is not based on improved conditions but on the character of God. 'How long' is not a faithless question — it is the honest cry of someone who expects God to respond.",
  },
  {
    color: PURPLE,
    title: "Psalm 77 — Troubled and Unable to Speak",
    body: "Psalm 77 is unusually introspective: 'I cry aloud to God... in the day of my trouble I seek the Lord... my soul refuses to be comforted... I am troubled; I cannot speak' (77:2–4). The psalmist lies awake, questioning whether God has forgotten to be gracious, whether his mercy has dried up. Then in verse 10 the turn: 'I will remember the works of the LORD; I will remember your wonders of old.' The therapeutic movement is memory — recalling what God has done in history when the present feels silent. This is why telling the story of the Exodus matters: when grief overwhelms you in the present, the record of past faithfulness can hold you.",
  },
  {
    color: TEAL,
    title: "Lamentations — The Aftermath of Total Loss",
    body: "The book of Lamentations is five poems of grief over the destruction of Jerusalem in 587 BC. Chapter 3 contains the most famous: 'Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering?' (1:12). Yet in the center of the darkness — Lamentations 3:22–23 — comes the most unexpected act of hope in the OT: 'Because of the LORD&apos;s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' These verses were written by someone sitting in the ruins of everything. The mercy celebrated was not rescue from the ruins but presence within them.",
  },
];

const JOB_SECTIONS = [
  {
    title: "The Setup — Job 1–2",
    body: "Job is introduced as 'blameless and upright, one who feared God and turned away from evil' (1:1). He has prosperity, family, health. Then in two waves of catastrophe, everything is taken — children, wealth, health. His wife tells him to curse God and die. Three friends come and sit with him in silence for seven days, which is the only thing they do right in the entire book. The prologue forces the reader to know what Job does not: this is not punishment. His suffering is not the result of hidden sin. The question the book poses is not 'what did Job do wrong?' but 'what does faith look like when suffering is not deserved?'",
  },
  {
    title: "Job's Complaint — Chapters 3–37",
    body: "Job's three friends insist on the standard answer: you are suffering because you have sinned. Confess and be restored. Job rejects this relentlessly. He knows he has not done what they accuse him of. He will not offer a false confession to ease his friends' theological discomfort. His speeches are raw, questioning, and sometimes terrifying — he wants a hearing with God. 'Oh, that I knew where I might find him, that I might come even to his seat!' (23:3). The friends' theology is neat and false. Job's complaint is messy and honest — and God will vindicate it.",
  },
  {
    title: "God's Answer From the Whirlwind — Chapters 38–41",
    body: "God answers Job with a speech that does not answer Job's questions directly. Instead, he overwhelms Job with the complexity, vastness, and beauty of creation: 'Where were you when I laid the foundation of the earth?... Can you bind the chains of the Pleiades or loose the belt of Orion?... Have you entered into the springs of the sea?' (38:4, 31, 16). The answer is not an explanation of suffering — it is a revelation of who God is. Job's response: 'I had heard of you by the hearing of the ear, but now my eye sees you' (42:5). The encounter with God is the healing, not the explanation.",
  },
  {
    title: "God's Verdict on the Friends — Chapter 42",
    body: "God's final word is startling: 'My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has' (42:7). God vindicates Job's honest complaint over the friends' orthodox explanations. The lesson is not that Job's theology was correct in all details — it is that honest, direct engagement with God is more acceptable to God than performing correct answers while your friend suffers. Sitting with suffering rather than explaining it away is closer to what God requires.",
  },
];

const JESUS_SECTIONS = [
  {
    title: "Jesus Wept — John 11:35",
    body: "The shortest verse in the Bible is also one of the most theologically significant: 'Jesus wept.' Standing at the tomb of his friend Lazarus — knowing he is about to raise him — Jesus weeps. He is not weeping over ignorance. He is not performing emotion he does not feel. He is weeping because his friend is dead, because Mary and Martha are broken, because the world he made is broken in a way that is deeply wrong. The God who became flesh entered fully into human grief. He did not manage it from a distance. He stood inside it and cried.",
  },
  {
    title: "Gethsemane — Matthew 26:36–46",
    body: "In the garden before his arrest, Jesus fell on his face and prayed: 'My Father, if it is possible, let this cup pass from me; nevertheless, not as I will, but as you will' (26:39). The prayer is honest — Jesus does not want what is coming. He asks three times. The Father does not remove the cup. Hebrews 5:7 says Jesus 'offered up prayers and supplications, with loud crying and tears, to him who was able to save him from death.' The author of our salvation was perfected through suffering. Grief is not foreign to Jesus — it is part of the path he walked.",
  },
  {
    title: "The Man of Sorrows — Isaiah 53",
    body: "Isaiah 53 describes the Servant as 'despised and rejected by men, a man of sorrows, and acquainted with grief' (53:3). The NRSV translates the Hebrew: 'a man of suffering, and acquainted with infirmity.' The Suffering Servant carries the grief of others — 'Surely he has borne our griefs and carried our sorrows' (53:4). This is the basis for Hebrews 4:15: 'We do not have a high priest who is unable to sympathize with our weaknesses, but one who has been tempted in every way, just as we are.' You bring your grief to someone who has lived inside grief.",
  },
  {
    title: "Blessed Are Those Who Mourn — Matthew 5:4",
    body: "In the Beatitudes, Jesus says: 'Blessed are those who mourn, for they shall be comforted.' The word for 'mourn' (penthountes) is one of the strongest Greek words for grief — deep sorrow over loss or sin. Jesus does not say 'blessed are those who have stopped mourning' or 'blessed are those who mourn quickly and move on.' The blessing is on the mourning itself. To mourn is to be in need of comfort — and the promise is that comfort will come. The mourner is not in the wrong place. They are in the place where Jesus's promise lands.",
  },
];

const LOSS_TYPES = [
  {
    icon: "💔",
    color: RED,
    title: "Death of a Loved One",
    body: "Scripture is frank about the pain of death. David's lament over Saul and Jonathan (2 Sam 1:17–27) and over Absalom (2 Sam 18:33) model deep, unrestrained grief. Paul in 1 Thessalonians 4:13 does not tell grieving Christians not to grieve — he says not to grieve 'as others do who have no hope.' Grief with hope is not shorter or quieter than grief without hope — it is grief that does not have the last word. Give yourself permission to grieve fully. Death is an enemy (1 Cor 15:26). Its defeat is real (1 Cor 15:54–57), but grieving the loss is not faithless.",
  },
  {
    icon: "💔",
    color: PURPLE,
    title: "Miscarriage and Infant Loss",
    body: "The loss of a child before or shortly after birth is grief that culture often minimizes. Scripture does not. David fasted and prayed for his dying infant son (2 Sam 12:15–23) with an intensity that moved his household. Jeremiah laments the day of his birth (Jer 20:14–18) in terms that echo Rachel 'weeping for her children, refusing to be comforted' (Jer 31:15; Matt 2:18). The grief of parents for children lost early is not proportional to the length of the life — it is proportional to the love. That grief is holy. It is also grief that looks to 'David the king' who said of his child: 'I shall go to him, but he will not return to me' (2 Sam 12:23) — faith in a reunion.",
  },
  {
    icon: "😔",
    color: BLUE,
    title: "Depression and Chronic Suffering",
    body: "Elijah sat under a broom tree and asked to die: 'It is enough; now, O LORD, take away my life, for I am no better than my fathers' (1 Kings 19:4). God's response was not theological correction — it was bread, water, and sleep. Then more bread and water. Then, eventually, a word. The rhythm matters: physical care before divine speech. Chronic suffering — whether depression, chronic pain, or ongoing grief — is addressed in Scripture with practical mercy before it is addressed with doctrine. If you are in this place, allow yourself to be cared for. The prophet who prayed to die went on to serve for years more.",
  },
  {
    icon: "💔",
    color: TEAL,
    title: "Grief Over Broken Relationships",
    body: "Psalms 55 and 41 deal with betrayal by close friends — 'It is not an enemy who taunts me; then I could bear it. But it is you, a man, my equal, my companion, my familiar friend' (55:12–13). The grief of broken trust, estrangement from family, divorce, and the loss of a close friendship is genuine loss. It may not have the finality of death, but it has the same shape of absence. Many of the Psalms of lament were written in the context of relational rupture, and they give honest words to a grief the church sometimes doesn't know how to name.",
  },
  {
    icon: "🌊",
    color: GOLD,
    title: "Unanswered Prayer and Dashed Hopes",
    body: "Proverbs 13:12 says: 'Hope deferred makes the heart sick.' The grief of unanswered prayer — years of asking God for a child, a healing, a restored relationship, a changed prodigal — is real and is named in Scripture. Hannah wept in the tabernacle year after year. The psalmist cried 'How long, O LORD?' repeatedly. Paul received no answer to his prayer for the thorn in the flesh (2 Cor 12:7–9). The grief of what God has not given is not a lack of faith. It is the honest experience of life lived in the time between promise and fulfillment.",
  },
];

const CHURCH_SECTIONS = [
  {
    title: "Weep With Those Who Weep — Romans 12:15",
    body: "Paul's command in Romans 12:15 is deceptively simple: 'Rejoice with those who rejoice; weep with those who weep.' The second half of this verse is often harder for the church than the first. We are better at celebrations than at grief. Sitting with someone in their darkness without offering explanations, silver linings, or theological corrections is a spiritual discipline. What grieving people usually need is not information — it is presence. Job's friends were at their best in silence. When they spoke, they were rebuked by God.",
  },
  {
    title: "The Ministry of Presence",
    body: "When Job's three friends heard what had happened, 'they sat with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his suffering was very great' (Job 2:13). Seven days of presence. No words. No explanations. No attempts to fix. This is the model of the ministry of grief: show up, stay, be silent. The temptation to fill silence with comfort, explanation, or spiritual instruction is often about managing our own discomfort. Resist it. Sit in the silence.",
  },
  {
    title: "Recovering the Practice of Lament in Worship",
    body: "The church has largely lost the practice of communal lament. Yet the Psalms — the church&apos;s historic prayer book — are roughly one-third lament. Ancient churches regularly prayed the Psalter in its entirety, which meant praying the darkest psalms aloud in the community of faith. Recovering lament in worship creates space for those who are suffering to have their experience named and held by the whole community. It also models for the healthy that suffering is a part of the Christian life, not a sign of spiritual failure.",
  },
  {
    title: "How Long Do You Grieve?",
    body: "Western culture (and often the church) has an implicit expectation that grief has a timeline: a few weeks for a loss, a few months for a major loss, then get back to normal. Scripture has no such timeline. David mourned Saul and Jonathan with a formal lament that he ordered all of Judah to learn (2 Sam 1:17–18). The Israelites mourned Aaron for thirty days (Num 20:29) and Moses for thirty days (Deut 34:8). Grief has its own rhythm. The church serves those who grieve by refusing to impose a timeline on them and by remaining present long after the funeral.",
  },
];

const COMFORT_VERSES = [
  { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they shall be comforted.", color: BLUE },
  { ref: "Psalm 34:18", text: "The LORD is near to the brokenhearted and saves the crushed in spirit.", color: GREEN },
  { ref: "John 11:35", text: "Jesus wept.", color: RED },
  { ref: "Romans 8:26", text: "The Spirit himself intercedes for us with groanings too deep for words.", color: PURPLE },
  { ref: "2 Corinthians 1:3–4", text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction.", color: TEAL },
  { ref: "Psalm 56:8", text: "You have kept count of my tossings; put my tears in your bottle. Are they not in your book?", color: GOLD },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.", color: BLUE },
  { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", color: GREEN },
  { ref: "Romans 8:38–39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", color: PURPLE },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type GriefTab = "overview" | "psalms" | "job" | "jesus" | "types" | "church" | "comfort" | "journal" | "videos";

export default function GriefLamentGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<GriefTab>("vine_grief_tab", "overview");
  const [openPsalm, setOpenPsalm] = useState<string | null>(null);
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [openJesus, setOpenJesus] = useState<string | null>(null);
  const [openLoss, setOpenLoss] = useState<string | null>(null);
  const [openChurch, setOpenChurch] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_grief_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_grief_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = TEAL;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(107,79,187,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>💧</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>Grief & Lament</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              How Scripture takes grief seriously — the Psalms of lament, Job&apos;s raw suffering, Jesus weeping at Lazarus&apos;s tomb, and how to grieve with hope. You are not alone, and your tears are not faithlessness.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Psalms of Lament", color: BLUE }, { label: "Book of Job", color: GOLD }, { label: "Mental Health", color: TEAL }, { label: "Spiritual Life", color: PURPLE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as GriefTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ color: TEAL, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", marginBottom: "1rem" }}>A Word to the Person Who Is Grieving</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>If you are here because you are in pain — because someone you love has died, because you have received devastating news, because you are carrying a loss that no one around you seems to understand — this page is for you.</p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Bible does not tell you to feel better. It does not give you a timeline for grief. It does not promise that everything will be fine in a way that means you will not feel the loss anymore. What it does is remarkable: it takes your grief seriously. It gives it a name. It gives it words. And it points to a God who entered into grief himself.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>You are not faithless for grieving. You are not weak. You are doing something the Psalms call holy: bringing your true self before the God who sees and knows and cares.</p>
              </div>
              <div style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8 }}>Psalm 56:8</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "1rem" }}>
                  &quot;You have kept count of my tossings; put my tears in your bottle. Are they not in your book?&quot;
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "📖", color: BLUE, title: "Psalms of Lament", desc: "One-third of the Psalter is lament — the Bible's own language for grief." },
                  { icon: "⚡", color: GOLD, title: "The Book of Job", desc: "The most extended biblical engagement with undeserved suffering." },
                  { icon: "💧", color: RED, title: "Jesus Wept", desc: "God became flesh and stood inside human grief — he cried." },
                  { icon: "🕊️", color: GREEN, title: "Hope in Grief", desc: "Not the absence of grief — grief that does not have the last word." },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.25rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.4rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "psalms" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: BLUE, marginBottom: "0.5rem" }}>The Psalms of Lament</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Approximately one-third of the Psalter is lament — raw, honest, sometimes accusatory prayers addressed directly to God. These psalms give the grieving person words when they have none, permission when they feel they shouldn&apos;t speak, and a model of faith that includes the full range of human suffering.</p>
              </div>
              {LAMENT_PSALMS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenPsalm(openPsalm === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openPsalm === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openPsalm === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "job" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>Job: Suffering Without Explanation</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The book of Job is the Bible&apos;s most sustained engagement with undeserved suffering. Its theological courage is remarkable: the standard answer to suffering (you sinned, so you suffer) is explicitly rejected by God himself. Job&apos;s honest complaint is vindicated; his friends&apos; orthodox explanations are rebuked.</p>
              </div>
              {JOB_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenJob(openJob === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: GOLD, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openJob === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openJob === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "jesus" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>Jesus and Grief</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The Incarnation means that God has lived inside human grief. Jesus wept at a tomb. He prayed in anguish in a garden. He quoted a lament psalm from a cross. He is not a high priest who is distant from human suffering — he has been here.</p>
              </div>
              {JESUS_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenJesus(openJesus === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: RED, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openJesus === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openJesus === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "types" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "0.5rem" }}>Types of Loss and Grief</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Grief takes many forms, not all of them publicly recognized. Each deserves attention, honest acknowledgment, and the same compassion the church extends to visible losses.</p>
              </div>
              {LOSS_TYPES.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenLoss(openLoss === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openLoss === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openLoss === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "church" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "0.5rem" }}>How the Church Bears Grief Together</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The body of Christ is designed to bear one another&apos;s burdens (Gal 6:2). Grief is one of the heaviest. But the church must learn to sit in grief without fleeing to explanation — to weep with those who weep, not fix those who weep.</p>
              </div>
              {CHURCH_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenChurch(openChurch === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: GREEN, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openChurch === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openChurch === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "comfort" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "0.5rem" }}>Verses for the Grief-Worn Heart</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>These are not quick fixes or silver linings — they are truths that can hold you when nothing else does. Read them slowly. Let them become familiar. Return to them.</p>
              </div>
              {COMFORT_VERSES.map(v => (
                <div key={v.ref} style={{ ...card, padding: "1.5rem", borderLeft: `4px solid ${v.color}` }}>
                  <div style={{ color: v.color, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{v.ref}</div>
                  <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, fontSize: "1rem" }}>&quot;{v.text}&quot;</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "0.75rem" }}>Grief Journal</h2>
                <p style={{ color: MUTED, marginBottom: "1.5rem" }}>Writing your grief is an ancient practice. The book of Lamentations is a journal of devastation that became Scripture. Bring what is true.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Psalm 34:18, John 11:35, Romans 8:38–39" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>WHAT IS TRUE RIGHT NOW</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Write honestly. God can handle what you are feeling." rows={5} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>ANY PRAYER — HOWEVER SMALL</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Even 'I don&apos;t know how to pray' is a prayer." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Entry"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Grief & Lament — Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Honest, theologically grounded teaching on grief, lament, suffering, and hope.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "bSQIxcK0piU", title: "The Book of Job — BibleProject Overview", channel: "BibleProject" },
                  { id: "fVFtuw2Ag_A", title: "Psalms of Lament — Why We Need Them", channel: "BibleProject" },
                  { id: "eYRJuvtXP0U", title: "How to Grieve as a Christian", channel: "Tim Keller" },
                  { id: "2oNiSqZrE6M", title: "God, Suffering, and Grief — A Theological Conversation", channel: "Bible Study" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
