"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Takes Covenant Betrayal With Absolute Seriousness", verse: "Malachi 2:14", text: "The Lord is the witness between you and the wife of your youth, to whom you have been faithless, though she is your partner, the wife of your marriage covenant. God describes himself as a witness to the covenant — and to its violation. The betrayed spouse is not alone in having seen what happened. God saw it. The phrase 'wife of your youth' carries the weight of a long history being dismissed. God's name is invoked in testimony against the one who broke covenant." },
  { title: "You Are Not Responsible for What Your Spouse Chose to Do", verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The righteousness of the righteous will be credited to them, and the wickedness of the wicked will be charged against them. Individual moral responsibility is a consistent biblical principle. The betrayed spouse — who discovers a partner's infidelity, pornography use, or sexual deception — is not morally accountable for what their spouse chose. The shame many betrayed spouses carry is mislocated. It belongs to the one who acted." },
  { title: "God Knows the Specific Pain of Covenant Betrayal', verse: 'Hosea 2:13", text: "I will punish her for the days she burned incense to the Baals; she decked herself with rings and jewelry, and went after her lovers, but me she forgot, declares the Lord. The entire book of Hosea is written from the perspective of a God who has experienced covenant betrayal. The intimacy, the abandonment, the discovery, the grief — these are described in God's own voice. The betrayed spouse is in the company of a God who has lived this experience in his own covenant relationship with Israel." },
  { title: "The Body Keeps the Record of Betrayal and Deserves Clinical Care', verse: 'Psalm 38:3-4", text: "Because of your wrath there is no health in my body; there is no soundness in my bones because of my sin. My guilt has overwhelmed me like a burden too heavy to bear. This psalm describes physical symptoms produced by guilt — but the physiology is the same for betrayal trauma: the nervous system carries what the mind cannot yet process. Research on betrayal trauma shows that the body responds to marital infidelity discovery with PTSD-level physiological symptoms. Clinical care is appropriate and necessary." },
  { title: "Recovery Is Possible — But It Takes the Whole Person', verse: 'Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds. The healing described here is specific and embodied — brokenhearted, wounds. It is not cognitive adjustment or spiritual transcendence. It is the healing of specific wounds by a God who takes the physiology of grief and betrayal seriously. That healing often works through therapists, support groups, and communities — the instruments through which God binds up wounds." },
];

const voices = [
  { id: "v1", name: "Marsha Means", role: "Betrayal trauma specialist, author of Living With Your Husband's Secret Wars", quote: "Betrayal trauma from a spouse's pornography or affair is a PTSD-level wound. It requires clinical treatment, not a prayer and an apology. Churches that treat it as a marriage problem are missing the diagnosis.", bio: "Marsha Means's work on betrayal trauma in marriage — specifically the trauma produced by discovering a spouse's hidden sexual behavior — has helped shift the clinical and pastoral framework from 'marriage in trouble' to 'betrayed spouse experiencing trauma.' Her book Living With Your Husband's Secret Wars was among the first to name the specific psychological wounds of spouses of sex addicts." },
  { id: "v2", name: "Leslie Vernick", role: "Author of The Emotionally Destructive Marriage, counselor", quote: "The betrayed spouse needs to know three things: this is not your fault, you have the right to be angry, and getting safe — emotionally and spiritually — is not the same as giving up on the marriage.", bio: "Leslie Vernick's work on destructive marriages directly addresses betrayal trauma — the discovery of infidelity, deception, pornography addiction, or other forms of sexual betrayal. Her framework insists on the safety and dignity of the betrayed spouse as the first priority, and her clinical and pastoral approach has helped thousands of people navigate the aftermath of discovery." },
  { id: "v3", name: "Patrick Carnes", role: "Addiction specialist, author of Out of the Shadows, developed CSAT model for spouses", quote: "The spouse of a sex addict is not a codependent who enabled the addiction. She is a trauma survivor. These are not the same thing, and the difference matters enormously for treatment.", bio: "Patrick Carnes's clinical work on sex addiction and its impact on partners produced the framework now used by Certified Sex Addiction Therapists (CSATs) worldwide. His recognition that partners of sex addicts are trauma survivors — not codependents — fundamentally changed how these marriages are treated and gave betrayed spouses a language for what they had experienced." },
  { id: "v4", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God", quote: "Betrayal in marriage is one of the deepest forms of relational trauma. The intimacy that was the vehicle of love becomes the vehicle of harm. That specific wound requires specific treatment.", bio: "Diane Langberg's extensive clinical and pastoral writing on trauma specifically addresses relational betrayal and the way intimate relationship wounds produce the most complex trauma. Her work on the betrayed spouse integrates clinical trauma treatment with the theological resources of lament, confession, and the possibility of restoration." },
];

const practices = [
  { icon: "🏥", title: "Seek a Certified Sex Addiction Therapist (CSAT) or Betrayal Trauma Specialist", text: "General counselors and marriage therapists are often not trained to work with betrayal trauma. Seek a therapist who is specifically trained — either a CSAT (Certified Sex Addiction Therapist) or someone trained in the Betrayal Trauma model. Directories at AASAT (aasat.org) and the Association for Partners of Sex Addicts Trauma Specialists (APSATS) can help you find qualified clinicians." },
  { icon: "📞", title: "Call SANON or Betrayal Trauma Recovery for Peer Support", text: "Betrayal Trauma Recovery (btr.org) offers group support specifically for women married to men with pornography addiction or sexual betrayal. S-Anon (sanon.org) is a 12-step program for family members of sex addicts. The peer understanding that comes from connecting with others who have experienced the same specific wound is irreplaceable in the healing process." },
  { icon: "🚫", title: "Resist the Pressure to Forgive Before You Are Safe", text: "Churches and counselors sometimes pressure betrayed spouses to forgive quickly, treating forgiveness as the prerequisite for beginning to heal. But forgiveness and safety are different things. You can work toward forgiveness over time while simultaneously requiring safety measures — transparency software, polygraphs, structured disclosure — as conditions of remaining in the marriage. Safety first is not unforgiveness." },
  { icon: "📖", title: "Read Psalm 55 as Permission to Name the Betrayal", text: "Psalm 55 is written by someone betrayed by a close companion — someone they prayed and worshipped with. The emotional range of the psalm includes rage ('I wish he would die'), grief ('my heart is in anguish'), and appeal to God ('cast your cares on the Lord'). It does not resolve into premature peace. It gives language to the full range of what betrayal feels like." },
  { icon: "⏳", title: "Expect Healing to Take Two to Five Years Minimum", text: "Research on betrayal trauma recovery shows that healing typically takes two to five years. This timeline does not mean two to five years of acute pain — but it means that the full integration of what happened, and the restoration of the capacity for trust (whether in this marriage or a future one), is a long-term project. Pressure from churches, counselors, or spouses to 'move on' faster than this damages rather than accelerates healing." },
  { icon: "💬", title: "Find Two or Three People Who Can Hold Your Story Safely", text: "Betrayal trauma often produces isolation — the wound is too personal and too shameful to share broadly. Finding two or three specific people who can hold your story — without advising too quickly, without gossiping, without pressure to either leave or stay — creates the relational container that healing requires. This may require active searching, including in betrayal-specific support communities." },
];

const scriptures = [
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship." },
  { verse: "Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds." },
  { verse: "Lamentations 3:55-57", text: "I called on your name, Lord, from the depths of the pit. You heard my plea: 'Do not close your ears to my cry for relief.' You came near when I called you, and you said, 'Do not fear.'" },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
];

type BTEntry = { id: string; date: string; wound: string; safe: string; step: string };

export default function BetrayalTraumaSpousePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BTEntry[]>([]);
  const [wound, setWound] = useState(""), [safe, setSafe] = useState(""), [step, setStep] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_betrayaltraumaj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!wound.trim()) return;
    const e: BTEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), wound: wound.trim(), safe: safe.trim(), step: step.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_betrayaltraumaj_entries", JSON.stringify(updated));
    setWound(""); setSafe(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_betrayaltraumaj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Betrayal Trauma in Marriage</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For spouses who have discovered infidelity, pornography addiction, or sexual deception — and who are learning that what they are experiencing is a trauma wound that deserves clinical care, not just prayer and forgiveness.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Betrayal Trauma Recovery: btr.org &nbsp;|&nbsp; S-Anon: sanon.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What wound from the betrayal is most present for you today?</label>
              <textarea value={wound} onChange={e => setWound(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="A trigger, a memory, a fear, an image..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>Where do you feel safe right now — in your body, in relationships, in your faith?</label>
              <textarea value={safe} onChange={e => setSafe(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Any anchor point, however small..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is your next step toward healing or safety?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="A therapist, a group, a conversation, a boundary..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Wound:</strong> {e.wound}</p>
                {e.safe && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Safety:</strong> {e.safe}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying in Marriage", channel: "Leslie Vernick", description: "Vernick on discerning whether to stay or leave in a destructive marriage — including the specific dynamics of betrayal, infidelity, and deception." },
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen", channel: "Gottman Institute", description: "Gottman's research on the patterns that predict marriage failure and repair — relevant context for couples attempting to rebuild after betrayal." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on trauma and the body — foundational understanding for why betrayal trauma produces PTSD-level symptoms and what healing requires." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on the theology of forgiveness — addressing the complexity of forgiving betrayal and the timeline that genuine forgiveness requires." },
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
    </div>
  );
}
