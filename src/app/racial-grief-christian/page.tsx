"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Racial Grief Is Biblical Grief",
    verse: "Nehemiah 1:3–4",
    text: "When Nehemiah heard about the broken walls of Jerusalem, he sat down and wept for days. He mourned the destruction of his people's home and dignity. Racial grief — the cumulative weight of unjust treatment, historical harm, and ongoing diminishment — is grief over broken walls. It is a biblical response to real injustice, not an emotional excess to be managed.",
  },
  {
    title: "Every Nation, Tribe, and Tongue Before the Throne",
    verse: "Revelation 7:9",
    text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne. The diversity of heaven is not colorblindness — it is the preservation of particularity in the presence of God. Your ethnic identity is not a problem for the kingdom. It is part of what will stand before the throne.",
  },
  {
    title: "The Image of God Is Defaced in Racism",
    verse: "Genesis 1:27",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. To treat a person as less than fully human because of their ethnicity is to assault the image of God. Racial harm is not merely social — it is theological. Your dignity is not derived from social consensus; it is inscribed in your creation.",
  },
  {
    title: "Lament Can Be Communal as Well as Personal",
    verse: "Lamentations 1:1–2",
    text: "How deserted lies the city, once so full of people! How like a widow is she, who once was great among the nations! Bitterly she weeps at night. Lamentations is communal lament — a people grieving collective loss and harm. Racial grief has this communal dimension. It is not just individual wounds; it is historical wounds carried by a body of people across generations.",
  },
  {
    title: "Reconciliation Requires Truth-Telling First",
    verse: "Matthew 5:23–24",
    text: "Therefore, if you are offering your gift at the altar and there remember that your brother or sister has something against you, leave your gift there in front of the altar. First go and be reconciled to them; then come and offer your gift. Reconciliation in the New Testament is not abstract. It requires return, acknowledgment, and repair. Racial reconciliation cannot skip these steps without becoming a performance.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Jemar Tisby",
    role: "Historian, author, The Color of Compromise",
    quote: "Racial justice is not a political add-on to the gospel. It is what the gospel looks like when it encounters systems that have dehumanized human beings made in the image of God. The church's silence on racial harm is not neutrality. It is complicity.",
    bio: "Jemar Tisby (The Color of Compromise, How to Fight Racism) documents the American church's historical complicity with racial injustice and the theological resources available for a more faithful response. His work is essential for Christians grappling with how the church has handled race.",
  },
  {
    id: "v2",
    name: "Latasha Morrison",
    role: "Author, Be the Bridge founder",
    quote: "Lament is the starting point for racial reconciliation, not an optional emotional exercise. Until white Christians can sit in the lament of their Black brothers and sisters — without explaining, defending, or pivoting — reconciliation is a word, not a reality.",
    bio: "Latasha Morrison (Be the Bridge) founded the bridge-building racial reconciliation ministry and has led thousands of Christians through the hard work of cross-racial understanding. Her emphasis on lament as the essential starting point for racial reconciliation is theologically grounded and practically essential.",
  },
  {
    id: "v3",
    name: "Soong-Chan Rah",
    role: "Seminary professor, author",
    quote: "The American church suffers from an excess of triumph and a deficit of lament. Until we learn to lament the sins of our racial history as a church, we will keep celebrating a unity that does not exist.",
    bio: "Soong-Chan Rah (The Next Evangelicalism, Prophetic Lament) integrates biblical lament with a prophetic call for the American church to reckon with its racial history. His work on Lamentations as a resource for racial grief is one of the most important contributions to contemporary racial theology.",
  },
  {
    id: "v4",
    name: "Austin Channing Brown",
    role: "Author, speaker",
    quote: "I'm Still Here is not an anger book. It is a grief book. I am grieving the church I hoped for, the country I was told to believe in, the people who could not see me. That grief is a spiritual practice, not a political one.",
    bio: "Austin Channing Brown (I'm Still Here: Black Dignity in a World Made for Whiteness) writes about the experience of being Black in white-dominated Christian spaces — the particular grief of being unseen, underestimated, and asked to make others comfortable with your own pain. Her work is essential for both those experiencing racial grief and those trying to understand it.",
  },
];

const practices = [
  {
    icon: "📖",
    title: "Read Lamentations as a Community",
    text: "Lamentations is communal grief over collective harm. Soong-Chan Rah's commentary Prophetic Lament is an essential guide for reading it as racial theology. Reading it in community — across racial lines if possible — is a spiritual practice of solidarity that the body of Christ desperately needs.",
  },
  {
    icon: "💬",
    title: "Name the Specific Grief",
    text: "Racial grief is often carried vaguely — the weight of accumulated incidents, micro-aggressions, historical awareness, family stories. Name it specifically: what happened, when, what it cost, what it meant about belonging and safety. Specific grief can be prayed, spoken, and processed. General grief stays stuck.",
  },
  {
    icon: "🤝",
    title: "Find Community Who Understands Without Explanation",
    text: "Being in community with people who share your racial experience — where you do not need to explain or justify your grief — is not divisive. It is essential. Be the Bridge groups (beabridgebuilder.com), denominational affinity groups, and ethnic-specific churches and ministries provide this kind of belonging.",
  },
  {
    icon: "🏛️",
    title: "Know the History — All of It",
    text: "Racial grief is often compounded by the historical illiteracy of those around you. Reading history — The Color of Compromise, Stamped from the Beginning, The Cross and the Lynching Tree — is not wallowing. It is understanding your own story and the story of the church in this country. Knowledge does not resolve grief, but it validates it.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Does Not Ask You to Leave Your Grief at the Door",
    text: "If your church cannot hold racial grief — if lament about racial harm is coded as political and therefore unwelcome — find a community that can. The body of Christ is not served by a community that requires members of color to perform wellness in order to be welcomed. You are entitled to worship with your full self.",
  },
  {
    icon: "🙏",
    title: "Pray the Racial Grief Honestly",
    text: "Nehemiah prayed the grief: named what was broken, named his own community's sin, asked God to act. That kind of specific, honest prayer about racial harm is itself a prophetic act. It treats God as someone who cares about justice in history, not just in souls.",
  },
];

const scriptures = [
  { verse: "Nehemiah 1:3–4", text: "They said to me, 'Those who survived the exile and are back in the province are in great trouble and disgrace. The wall of Jerusalem is broken down, and its gates have been burned with fire.' When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven." },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Lamentations 1:1–2", text: "How deserted lies the city, once so full of people! How like a widow is she, who once was great among the nations! Bitterly she weeps at night, tears are on her cheeks." },
  { verse: "Isaiah 58:6–7", text: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?" },
];

type RacialEntry = { id: string; date: string; wound: string; truth: string; act: string };

export default function RacialGriefChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RacialEntry[]>([]);
  const [wound, setWound] = useState("");
  const [truth, setTruth] = useState("");
  const [act, setAct] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_racialgrief_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!wound.trim()) return;
    const entry: RacialEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      wound,
      truth,
      act,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_racialgrief_entries", JSON.stringify(updated));
    setWound(""); setTruth(""); setAct("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_racialgrief_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Racial Grief & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Racial Grief and the Christian Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians of color grieving racial harm — personal, systemic, and historical. For those navigating churches and communities that cannot hold this grief. Your lament is biblical. Your dignity is theological. Your anger at injustice is holy.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Be the Bridge: <span style={{ color: GREEN }}>beabridgebuilder.com</span> &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What racial wound is most present today — specific, not general?</label>
                <textarea value={wound} onChange={(e) => setWound(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth about your dignity anchors you today?</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One act of justice, solidarity, or self-care you can do this week.</label>
                <textarea value={act} onChange={(e) => setAct(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.wound && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Wound:</strong> {e.wound}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
                {e.act && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Act:</strong> {e.act}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "Hq1t7kMjXAY", title: "Prophetic Lament and Race", channel: "Soong-Chan Rah", description: "Soong-Chan Rah on why the American church needs to recover the language of lament — and why racial harm is one of the primary subjects demanding communal grief before reconciliation can happen." },
              { videoId: "PKyLYSfmTwI", title: "The Color of Compromise", channel: "Jemar Tisby", description: "Tisby presents the historical evidence of the American church's complicity with racial injustice — essential context for understanding why racial grief in Christian spaces is so often complicated." },
              { videoId: "eBl7gT7gQ6g", title: "Be the Bridge: Racial Reconciliation", channel: "Latasha Morrison", description: "Latasha Morrison on the posture required for genuine racial reconciliation — starting with lament, requiring sustained presence, and demanding truth-telling before unity." },
              { videoId: "NnGBhG03g4M", title: "Image of God and Human Dignity", channel: "The Witness: A Black Christian Collective", description: "Theological grounding for racial dignity in the imago Dei — why racial harm is not merely social injustice but assault on the image of God in human persons." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
