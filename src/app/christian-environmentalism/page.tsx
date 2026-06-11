"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Mandate and the Fall — What Happened to the Garden", verse: "Gen 2:15", text: "God placed humanity in the garden to tend and keep it — the Hebrew shamar means to guard, protect, and preserve. The dominion mandate of Genesis 1:28 has been catastrophically misread as a license for exploitation, but the Hebrew radah (dominion) is the word used of a shepherd over sheep: it is care, not conquest. The Fall corrupts the human relationship with creation as it corrupts everything else — the ground is cursed, labor becomes toil, and thorns and thistles appear (Gen 3:17-18). But the redemption Christ brings is described in cosmic terms: he is reconciling all things, whether on earth or in heaven, making peace through his blood shed on the cross (Col 1:20). Romans 8:19-22 insists that the whole creation waits with eager longing for redemption — which means creation has a future in God's plan, not merely a past in the Fall." },
  { title: "The Earth Is the Lord's — Who Owns Creation?", verse: "Ps 24:1", text: "The earth is the Lord's and everything in it — this single verse dismantles the assumption that human beings own the created order. Leviticus 25:23 makes the same point from a land-economics angle: the land is mine, says God; you are strangers and sojourners with me. The Jubilee and the sabbath for the land (Lev 25) represent the most radical environmental legislation in the ancient world — every seventh year the land rests, every fiftieth year it is returned to its original stewards. The implication for creation care is foundational: we do not own the natural world. We are stewards of what belongs to God, and stewards are accountable for what they manage. The question is not whether we may use creation, but whether we are managing it faithfully on behalf of its owner." },
  { title: "Romans 8 and the Groaning of Creation — Cosmic Redemption", verse: "Rom 8:19-22", text: "The creation waits with eager longing for the revealing of the sons of God — it was subjected to futility, not willingly, but in hope that it will be set free from its bondage to corruption. Paul's vision of redemption in Romans 8 is not merely the salvation of individual souls: it is the liberation of the entire created order. The renewal of all things (Rev 21:5) is not a spiritual metaphor but a material promise — the same God who raised Jesus bodily from the dead will renew the creation bodily. This has direct implications for how we treat the world now: environmental care is not merely pragmatic but eschatological. We are not preserving a world that will be burned; we are tending a world that will be renewed. How we treat creation now is a form of anticipating the resurrection." },
  { title: "The Evangelical Divide — Why Christians Disagree About Climate and Environment", verse: "Col 1:20", text: "Evangelicals are deeply divided on environmental concern, and the division is not merely political — it is theological. The spectrum runs from young earth creationism (which shapes how one reads the age and future of the earth) to full embrace of scientific consensus. But the deeper fault line is the question beneath the question: is this world worth caring for, given that it will one day end? The political capture of environmental concern by the secular left has produced a reflexive over-reaction in much of the evangelical right, where creation care has been coded as liberal rather than biblical. The theological answer from Scripture is clear: God will renew creation, not merely discard it. The resurrection, not annihilation, is the pattern of God's redemptive work. That answer, taken seriously, should make Christians among the most environmentally committed people in the world." },
  { title: "Prophetic Ecology — What Amos, Isaiah, and Hosea Say About Land", verse: "Hos 4:1-3", text: "Because there is no faithfulness or steadfast love, and no knowledge of God in the land — therefore the land mourns, and all who dwell in it languish; beasts of the field and birds of the heavens, even the fish of the sea are taken away (Hos 4:1-3). The prophets of Israel draw an explicit line between moral failure and ecological damage. Land justice and economic justice are intertwined throughout Isaiah and Amos: the exploitation of the poor is connected to the depletion of the land. The neglect and abuse of creation is not merely a practical failure in the prophetic vision — it is a spiritual one, a symptom of a people who have lost their knowledge of God. Care for the land, in the prophetic tradition, is not a separate concern from justice and holiness; it is a dimension of them." },
];

const voices = [
  { name: "Francis Schaeffer", role: "Pollution and the Death of Man (1970)", quote: "We have the right to make use of nature, but we have a responsibility toward it as well. The Christian has a basis for a real ecology — not just as a pragmatic matter but as a matter of spiritual obedience to the God who made the world and called it good.", bio: "Schaeffer's Pollution and the Death of Man was decades ahead of its time: a serious evangelical theologian engaging the environmental crisis on biblical grounds before it was fashionable or politically convenient. His argument was that secular environmentalism lacks the metaphysical foundation for a coherent environmental ethic — only a theology of creation can provide it. Christians, Schaeffer insisted, have a mandate to care for creation that both precedes and exceeds any secular environmental movement." },
  { name: "Wendell Berry", role: "The Unsettling of America (1977)", quote: "The care of the earth is our most ancient and most worthy and, after all, our most pleasing responsibility. To cherish what remains of it, and to foster its renewal, is our only legitimate hope.", bio: "Wendell Berry is not a theologian, but his vision of land stewardship is deeply compatible with — and in many ways derived from — the biblical tradition. His agrarian critique of industrial culture, developed over five decades of essays, novels, and poems, argues that the destruction of the land is inseparable from the destruction of community, family, and meaning. For Christian readers, Berry functions as a secular prophet articulating in ecological terms what the biblical tradition says in theological ones: the care of the land is a spiritual act that connects us to the creation's creator." },
  { name: "N.T. Wright", role: "Surprised by Hope (2008)", quote: "The whole point of what Jesus was doing and what early Christianity was about was the renewal of creation, not escape from it. If that is so, then the way we treat the present creation matters enormously. God will renew this creation — and that makes the way we treat it now an issue of faithfulness, not merely of preference.", bio: "Wright's Surprised by Hope is the most accessible scholarly treatment of biblical eschatology in recent decades, and its environmental implications are direct and significant. Wright argues that the standard evangelical eschatology — souls escaping to heaven, the earth burned and discarded — is not what the New Testament actually teaches. The resurrection of Jesus is the beginning of the renewal of all things, and that renewal is material, not merely spiritual. This makes Christians, Wright argues, the people who should be most serious about creation care — because we believe God is not throwing it away." },
];

const practices = [
  { icon: "🏠", title: "Creation Audit", text: "A creation audit is an honest accounting of your household's impact on water, energy, food, and waste. It is not an exercise in guilt but in knowledge: you cannot steward what you do not understand. Tracking your energy use, food sourcing, water consumption, and waste production for a month creates the data needed for intentional change. Many people who do this for the first time are surprised by what they find — and by how manageable the changes are." },
  { icon: "🛑", title: "Sabbath Economics — Fasting from Consumer Culture", text: "Designating one day per week as a sabbath from consumer activity — no purchasing, no online shopping, no consumption beyond what is already in the household — is one of the most countercultural and spiritually formative practices available to modern Christians. It is also the most ancient: the sabbath principle runs through both the Torah and the prophets as the foundational rhythm of a people who trust God rather than production. Sabbath economics interrupts the assumption that more consumption equals more flourishing." },
  { icon: "🌱", title: "Local Land Care", text: "Participating in local land care — community gardens, tree planting, watershed restoration, neighborhood clean-up — connects creation care to place. The ecological crisis can feel too large and abstract to engage personally; local land care makes it concrete and relational. It also creates community across lines that often divide us: gardens and watersheds do not respect political affiliations. Many local land care organizations welcome volunteer labor and need no particular expertise." },
  { icon: "♻️", title: "Reducing Food Waste and Single-Use Plastics", text: "Reducing food waste and single-use plastics is not primarily a political act — it is a spiritual discipline of non-waste. The average Western household wastes roughly one-third of the food it purchases. Single-use plastics persist in the environment for centuries. Attending to these patterns — meal planning, composting, reusable containers, refusing unnecessary packaging — is the material equivalent of financial stewardship: caring for what God has given rather than treating abundance as an excuse for carelessness." },
  { icon: "🏛️", title: "Advocating in Your Church Community", text: "Creation care will not take root in evangelical Christianity at the individual level alone — it requires communities of practice. Raising the conversation in your local church, proposing a creation care initiative, connecting environmental concern to the theology your congregation already holds (stewardship, Jubilee, the renewal of all things) is a form of prophetic ministry. The evangelical church has the theological resources to be a leader in creation care; it has sometimes lacked the community will. You can help build it." },
];

const scriptures = [
  { verse: "Gen 2:15", text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it." },
  { verse: "Ps 24:1", text: "The earth is the Lord's, and everything in it, the world, and all who live in it." },
  { verse: "Rom 8:19-22", text: "For the creation waits in eager expectation for the children of God to be revealed... the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God." },
  { verse: "Col 1:20", text: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross." },
  { verse: "Lev 25:23", text: "The land must not be sold permanently, because the land is mine and you reside in my land as foreigners and strangers." },
  { verse: "Rev 21:5", text: "He who was seated on the throne said, I am making everything new! Then he said, Write this down, for these words are trustworthy and true." },
];

const videos = [
  { id: "Ih0LHv2zHEg", title: "The Christian Case for Creation Care" },
  { id: "4D-qU5_CSGY", title: "N.T. Wright on the Renewal of Creation" },
  { id: "m48N9YFJHrQ", title: "Theology of the Environment" },
  { id: "q4tlqFRGUfM", title: "Caring for Creation as Spiritual Obedience" },
];

type CCEntry = { id: string; date: string; action: string; barrier: string; impact: string };

export default function ChristianEnvironmentalismPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_creationcare_entries") ?? "[]"); } catch { return []; }
  });
  const [jAction, setJAction] = useState("");
  const [jBarrier, setJBarrier] = useState("");
  const [jImpact, setJImpact] = useState("");

  useEffect(() => { localStorage.setItem("vine_creationcare_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jAction.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), action: jAction, barrier: jBarrier, impact: jImpact }, ...prev]);
    setJAction(""); setJBarrier(""); setJImpact("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Creation Care</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Christian environmental stewardship — the theology of creation care, the biblical call to tend and keep the earth, and the practices that make that call concrete.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Creation Care</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly and prayerfully about your relationship to creation.</p>
            {[
              { label: "Action — a specific creation care action you are taking or considering", val: jAction, set: setJAction },
              { label: "Barrier — what gets in the way of your care for creation", val: jBarrier, set: setJBarrier },
              { label: "Impact — what impact you want to have", val: jImpact, set: setJImpact },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GREEN }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Action:</span> {e.action}</p>
                      {e.barrier && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Barrier:</span> {e.barrier}</p>}
                      {e.impact && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GREEN, fontWeight: 600 }}>Impact:</span> {e.impact}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GREEN }}>{v.title}</h3>
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
