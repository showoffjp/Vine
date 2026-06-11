"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Growing Old Is Not a Problem — It Is a Calling", verse: "Ps 92:14", text: "They will still bear fruit in old age. Scripture’s vision of aging stands in sharp contrast to the culture’s: where culture sees aging primarily as diminishment to be resisted, cosmetically concealed, or medically deferred, the Bible presents later life as a season with its own gifts and callings. Psalm 92 describes the righteous as trees that are “still bearing fruit in old age, always green and full of sap.” The image is not of decline but of mature, deep-rooted fruitfulness. The cultural anxiety about aging assumes that productivity and physical vitality are the measures of a life; the biblical vision assumes that proximity to God and wisdom accumulated over decades constitute a different and deeper kind of fruitfulness." },
  { title: "The Elders Who Led — What Scripture Says About Older People in the Community", verse: "Titus 2:1-5", text: "Older women are to teach what is good, and to train younger women. Older men are to be temperate, worthy of respect, self-controlled. In both the Old and New Testaments, elders held a constitutive role in the community of faith — not merely as administrators but as bearers of wisdom, tested character, and long experience of God’s faithfulness. Job’s friends come to him because he is a man of years and wisdom. The Titus 2 pattern envisions a community structured by intentional intergenerational transmission: older men modeling self-control and soundness of faith; older women teaching and training those who are younger. The community of faith needs those who have walked with God for decades in ways it cannot supply from within any single generation." },
  { title: "Facing Death as a Christian — the Ars Moriendi", verse: "Phil 1:21-23", text: "For me, to live is Christ and to die is gain. The medieval Christian tradition of the ars moriendi — the art of dying well — recognized that death is not a medical failure to be avoided but a passage to be prepared for and ultimately embraced in faith. Paul’s famous declaration in Philippians 1 is the theological heart of this tradition: death is gain because it is union with Christ. A Christian’s relationship to death differs fundamentally from those who have no hope: it is not denial, not despair, but a trust grounded in resurrection. Preparedness — practical (advance directive, will) and spiritual (settled faith, honest conversation about fears) — is itself an act of faithfulness." },
  { title: "Suffering, Limitation, and the Redemption of Diminishment", verse: "Rom 8:18", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us. Pierre Teilhard de Chardin wrote of the ‘divinization of our diminishments’ — the paradox that physical limitation, loss of capacity, and increasing dependence can become, for those with faith, a profound school of union with Christ. Where culture sees declining capacity as pure loss, the Christian tradition reads it as an invitation into deeper dependence, more honest prayer, and solidarity with the suffering Christ. Henri Nouwen’s Aging describes the spiritual gifts latent in the aging process: the stripping away of false identity, the clarification of what matters, the freedom that comes when the compulsions of ambition and achievement no longer drive the day." },
  { title: "Legacy — What We Leave Behind and Why It Matters", verse: "Prov 13:22", text: "A good person leaves an inheritance for their children’s children. The multi-generational faithfulness of Abraham — called to bless all nations through his lineage — is the paradigm of Christian legacy-thinking. A life lived for God leaves echoes that outlast the individual: values transmitted to children and grandchildren, relationships of trust and love that continue to bear fruit, a witness to God’s faithfulness that shapes the community’s memory. Deliberate legacy-thinking asks: what do I most want to be remembered for? What do I want my grandchildren to know about what I believe and how I lived? What have I learned about God and life that I have not yet passed on? These questions are not vain; they are acts of stewardship." },
];

const voices = [
  { name: "Henri Nouwen", role: "Aging: The Fulfillment of Life", quote: "Aging does not need to be hidden or denied, but can be understood, affirmed, and experienced as a process of growth by which the mystery of life is slowly revealed to us. When we stop running from our aging and begin to look at it carefully, we discover that the questions of our aging are not primarily medical questions but human, moral, and spiritual questions.", bio: "Nouwen’s Aging, co-authored with Walter Gaffney, invites a reframing of the aging process as gathering, reflection, and deepening rather than loss. Against a culture that treats the elderly as problems to be managed, Nouwen argues that older people carry gifts the community cannot afford to lose — and that their own journey toward death is the final and perhaps most important act of their discipleship." },
  { name: "John Piper", role: "Future Grace", quote: "The secret of contentment in every age of life is the same: living coram Deo, before the face of God, in the confidence that what he has promised he will perform. Death is not a terror for those who live in that confidence — it is the moment when the promise is finally and fully kept.", bio: "Piper’s Future Grace develops a theology of living by faith in future grace rather than by gratitude for past grace alone. Applied to aging, the argument is that the Christian can face diminishment and death not with stoicism or denial but with a forward-looking confidence grounded in God’s promises. The face of God — coram Deo — is the anchor that makes every stage of life, including the last, livable." },
  { name: "Laura Carstensen", role: "A Long Bright Future (Stanford Center on Longevity)", quote: "Contrary to what many people expect, research consistently shows that older adults report higher levels of emotional well-being, greater emotional stability, and stronger relationships than younger adults. The preference for meaning over novelty that comes with age is not a consolation prize — it may be the wiser way of living at any age.", bio: "Carstensen is the founding director of the Stanford Center on Longevity. Her research on socioemotional selectivity theory shows that as people age and perceive their future as limited, they prioritize meaning, close relationships, and emotional depth over novelty and breadth. This secular finding resonates deeply with Psalm 92’s portrait of the aged righteous — still green, still fruitful, still deeply rooted." },
];

const practices = [
  { icon: "✍️", title: "Life Review Journaling", text: "Set aside time to write your story deliberately — not as a list of events but as a search for meaning: where did you see God? where did you fail and find grace? what shaped you most? The life review is a well-documented psychological and spiritual practice that helps older adults integrate experience, find coherence, and identify what they most want to pass on. It is also an act of gratitude and witness." },
  { icon: "🗣️", title: "Intentional Legacy Conversation", text: "Tell the younger people in your life — grandchildren, younger friends, mentees — what you believe, what you have learned, and what you hope for them. Do not assume they know. A structured legacy conversation — sitting down with the express intention of transmitting what matters most — is one of the most underused and most powerful gifts an older person can give." },
  { icon: "📝", title: "Advance Directive and Practical Planning", text: "Faithful preparedness includes attending to practical needs before crisis forces hasty decisions: writing or updating your will, completing an advance directive (what medical care you do and do not want), designating a healthcare proxy, and discussing these decisions with the people who will be affected. This is an act of love toward your family and an act of faith — it witnesses to your trust that death is not the end." },
  { icon: "🤝", title: "Finding a Ministry for This Season", text: "Every season of life has its own ministerial possibilities. Later life — with fewer obligations of career and child-rearing, with accumulated wisdom and relationships — opens specific callings: intercessory prayer, mentoring younger believers, hospitality, financial generosity, writing or recording one’s story. Identifying and committing to one specific ministry in this season is itself a declaration that this season has purpose and that you are not finished." },
  { icon: "💬", title: "Honest Conversation About Aging and Death", text: "Fear of aging and fear of death are nearly universal, and they fester in silence. A regular, honest conversation with a close friend or pastor — not just about logistics but about fears, regrets, hopes, and questions of faith — is both pastoral care and spiritual discipline. The Christian community at its best is the place where we can say ‘I am afraid’ and be met with honesty, prayer, and the company of others who trust the same promises." },
];

const scriptures = [
  { verse: "Ps 92:12-15", text: "The righteous will flourish like a palm tree, they will grow like a cedar of Lebanon; planted in the house of the Lord, they will flourish in the courts of our God. They will still bear fruit in old age, they will stay fresh and green." },
  { verse: "Phil 1:21-23", text: "For to me, to live is Christ and to die is gain. If I am to go on living in the body, this will mean fruitful labor for me. Yet what shall I choose? I do not know! I am torn between the two: I desire to depart and be with Christ, which is better by far." },
  { verse: "Prov 13:22", text: "A good person leaves an inheritance for their children’s children, but a sinner’s wealth is stored up for the righteous." },
  { verse: "Titus 2:2-5", text: "Teach the older men to be temperate, worthy of respect, self-controlled, and sound in faith, in love and in endurance. Likewise, teach the older women to be reverent in the way they live… to teach what is good." },
  { verse: "Isa 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Rom 8:18", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us." },
];

const videos = [
  { id: "BCSwWjHEumw", title: "Aging Well: A Christian Perspective" },
  { id: "fIPwAHe-H4A", title: "Henri Nouwen on Aging and the Spiritual Life" },
  { id: "OBTFkDJN-ck", title: "Legacy, Death, and the Christian Hope" },
  { id: "MWQAiBXXAEE", title: "Bearing Fruit in Old Age — Purpose in Later Life" },
];

type AWEntry = { id: string; date: string; gift: string; concern: string; legacy: string };

export default function AgingWellChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AWEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_agingwell_entries") ?? "[]"); } catch { return []; }
  });
  const [jGift, setJGift] = useState("");
  const [jConcern, setJConcern] = useState("");
  const [jLegacy, setJLegacy] = useState("");

  useEffect(() => { localStorage.setItem("vine_agingwell_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jGift.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), gift: jGift, concern: jConcern, legacy: jLegacy }, ...prev]);
    setJGift(""); setJConcern(""); setJLegacy("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Life Stages &amp; Aging</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Aging Well as a Christian</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Explore purpose, legacy, and faithfulness in later life — the biblical vision of fruitful aging, the art of dying well, and what it means to finish strong.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Aging Well</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring this season of life honestly before God.</p>
            {[
              { label: "Gift — what gift do you believe this season of life has for you or others?", val: jGift, set: setJGift },
              { label: "Concern — what concern about aging do you want to bring to God?", val: jConcern, set: setJConcern },
              { label: "Legacy — what do you most want to leave behind?", val: jLegacy, set: setJLegacy },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Gift:</span> {e.gift}</p>
                      {e.concern && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Concern:</span> {e.concern}</p>}
                      {e.legacy && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Legacy:</span> {e.legacy}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
