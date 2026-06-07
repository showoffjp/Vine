"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Unanswerable Question",
    verse: "Romans 11:33",
    text: "Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out! The survivor of suicide loss is often tormented by why — why didn't they tell me, why didn't I see it, why did God allow it, why didn't he intervene. These are real questions, and Scripture does not always give them satisfying answers. What it gives is a God whose ways are beyond tracing out and who is present in the aftermath of what cannot be explained.",
  },
  {
    title: "God Does Not Condemn the One Who Died",
    verse: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord. The historic Christian teaching that suicide is a mortal sin that bars salvation has caused enormous suffering to survivors without adequate theological basis. Paul's list of what cannot separate us from God's love is comprehensive and includes the circumstances of death. The person who died in the extremity of mental illness is still held by a God whose mercy is deeper than our comprehension.",
  },
  {
    title: "Survivor Guilt Is a Liar",
    verse: "Ezekiel 18:20",
    text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The survivor of suicide loss often carries guilt that does not belong to them — I should have known, I should have called, I should have stayed. This guilt is understandable and is almost always false. The death of a person by suicide is not the fault of the people who loved them.",
  },
  {
    title: "Grief This Size Takes Time",
    verse: "Psalm 88:1-2",
    text: "You are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. Psalm 88 is unique among the laments — it has no resolution. It ends in darkness, without the turn to praise that most psalms take. For the suicide loss survivor, the grief may not resolve on a familiar timeline. This psalm gives permission for a grief that simply is, without demanding that it resolve.",
  },
  {
    title: "The God Who Grieves With You",
    verse: "John 11:35",
    text: "Jesus wept. This is the shortest verse in the Bible and one of the most theologically significant. When Jesus arrived at Lazarus's tomb — knowing he was about to raise him — he wept with those who were mourning. God does not require you to resolve your grief before he enters it. He enters it with you, exactly as it is.",
  },
];

const voices = [
  {
    id: 1,
    name: "Kay Warren",
    role: "Author, Choose Joy; suicide loss survivor",
    quote: "The grief of losing a child to suicide is its own category. It has dimensions — guilt, shame, anger, love, confusion, relief — that most people around you cannot understand. Find people who can.",
    bio: "Kay Warren lost her son Matthew to suicide in 2013. She has written and spoken publicly about the specific grief of suicide loss, including the spiritual dimensions that other grief resources rarely address.",
  },
  {
    id: 2,
    name: "Megan Devine",
    role: "Author, It's OK That You're Not OK",
    quote: "Suicide loss is grief with a lot of extra weight on it. The stigma, the questions, the guilt — they are additional burdens on top of an already crushing loss. You don't have to carry them.",
    bio: "Megan Devine's work on grief without prescribed timelines or demanded resolution is particularly valuable for suicide loss survivors, who often feel pressure to process faster or more 'acceptably' than the grief allows.",
  },
  {
    id: 3,
    name: "Skip Heitzig",
    role: "Pastor; authored resources on suicide and faith",
    quote: "Christians sometimes ask if the person who died by suicide is in heaven. I don't know for every case. I know they were loved by God. I know God's mercy is deeper than our theology.",
    bio: "Many pastors who have lost congregants or family members to suicide have grappled publicly with the theological questions survivors ask — and the honest answers often involve more humility than certainty.",
  },
  {
    id: 4,
    name: "Carla Fine",
    role: "Author, No Time to Say Goodbye",
    quote: "The survivors of suicide loss are among the most isolated grievers in the world. The death is violent. The questions are unanswerable. The stigma is real. And yet here we are.",
    bio: "Carla Fine lost her husband to suicide and wrote one of the most honest and comprehensive accounts of suicide loss, including the specific ways it differs from other grief and what survivors actually need.",
  },
];

const practices = [
  {
    icon: "🤝",
    title: "Find a Suicide Loss Survivor Group",
    text: "The American Foundation for Suicide Prevention (AFSP), Alliance of Hope for Suicide Loss Survivors, and local hospice organizations run survivor support groups specifically for those who have lost someone to suicide. Being with others who carry this specific grief changes the experience of isolation.",
  },
  {
    icon: "🛡️",
    title: "Protect Yourself from Harmful Theology",
    text: "You may encounter people — well-meaning or not — who suggest that your loved one is in hell because of how they died. This is not established Christian theology; it is an opinion. You have permission to walk away from it. The God of Romans 8 has the final word, not the person offering unsolicited theological judgment.",
  },
  {
    icon: "📋",
    title: "Answer Only the Questions You Choose",
    text: "Survivors often feel obligated to explain, justify, or account for the death to everyone who asks. You do not owe anyone an explanation. You get to decide who knows the circumstances, who knows the details, and who gets none of it. Protecting your own story is not dishonesty.",
  },
  {
    icon: "🧠",
    title: "Seek Grief Therapy Specific to Suicide Loss",
    text: "The complexity of suicide grief — the guilt, the anger, the unanswerable questions, the social stigma — often requires more than general grief counseling. A therapist with specific experience in traumatic loss and suicide bereavement can offer tailored support.",
  },
  {
    icon: "📛",
    title: "Say Their Name",
    text: "Suicide loss survivors often find that other people stop saying the name of the person who died — as if the manner of death erases the person. Say their name. Tell stories about them. Let others hear who they were, not only how they died.",
  },
  {
    icon: "🕯️",
    title: "Observe Memorials and Anniversaries",
    text: "The date of the death, the birthday, significant anniversaries — these can ambush with fresh grief. Plan for them. Light a candle, gather with one or two people who knew them, go to a meaningful place. Having a ritual for the hard dates is better than being surprised by them.",
  },
];

const scriptures = [
  { verse: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Psalm 88:1", text: "Lord, you are the God who saves me; day and night I cry out to you." },
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type GSLEntry = { id: string; date: string; name: string; question: string; prayer: string };

export default function GriefSuicideLossSurvivorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GSLEntry[]>([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_griefsuicidelosssurvivorj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!name.trim()) return;
    const e: GSLEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), name, question, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_griefsuicidelosssurvivorj_entries", JSON.stringify(next));
    setName(""); setQuestion(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_griefsuicidelosssurvivorj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Grief After Suicide Loss</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those who have lost someone to suicide — where the grief is real, the questions are unanswerable, the guilt belongs elsewhere, and the God who weeps is present.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>If you are struggling yourself</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            Call or text <strong>988</strong> · <a href="https://www.afsp.org" style={{ color: "#fca5a5" }}>afsp.org</a> · <a href="https://allianceofhope.org" style={{ color: "#fca5a5" }}>allianceofhope.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Say their name and remember them today</label>
                <textarea value={name} onChange={e => setName(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Their name, a memory, something they said or did, who they were..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A question I am still asking</label>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Why. What I missed. What I wish I had said. What I cannot understand..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer — or the beginning of one</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Even silence or anger is a beginning. Bring it to God as it is..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Their name deserves to be said.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.name && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Remembering them</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.name}</p></>}
                {e.question && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Still asking</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.question}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Kay Warren — After Matthew: Suicide Loss and Faith</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Kay Warren on the specific grief of losing a child to suicide — the guilt, the shame, the unanswerable questions, and what she has found sustains her.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Kay Warren After Matthew Suicide Loss and Faith" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Alliance of Hope — Survivor Support</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>An introduction to the Alliance of Hope for Suicide Loss Survivors — what peer support looks like and how it helps those carrying this specific grief.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Alliance of Hope Survivor Support" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Psalm 88 — Grief Without Resolution</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A meditation on the only psalm that ends without hope — and what it offers to those whose grief is still in the darkness.</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Psalm 88 Grief Without Resolution" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Nothing Can Separate — Romans 8 and Suicide</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A pastoral reflection on what Paul's comprehensive declaration that nothing can separate us from God's love means for those who wonder about their loved one who died by suicide.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Nothing Can Separate Romans 8 and Suicide" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
