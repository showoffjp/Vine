"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Bitterness Is Not the Same as Grief — But It Grows From Unprocessed Grief", verse: "Hebrews 12:15", text: "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many. The writer to the Hebrews uses a gardening metaphor: bitterness is a root. It grows underground, out of sight, watered by unprocessed grief and injustice. The person who has been genuinely wronged but has not grieved that wrong honestly — has not lamented, has not been angry with God, has not processed the loss — is the person most at risk for bitterness. Bitterness is grief that never found a healthy channel." },
  { title: "Anger at Injustice Is Legitimate — Held Anger Becomes Bitterness", verse: "Ephesians 4:26-27", text: "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold. Paul acknowledges that anger is a legitimate response to injustice. The problem is not anger but held anger — anger that is not processed, expressed in appropriate ways, or surrendered to God. The foothold the devil gains is the unprocessed anger that turns from a response to a residence. The person who has been genuinely wronged has real anger to process, and processing it is not the same as nursing it." },
  { title: "Forgiveness Is Not Excusing, Forgetting, or Reconciling — It Is Releasing the Debt", verse: "Matthew 18:27", text: "The servant's master took pity on him, canceled the debt and let him go. Jesus' parable of the unmerciful servant turns on the word cancel. The master canceled the debt — did not pretend it didn't exist, did not minimize it, did not require the servant to prove he had changed. He canceled it. Forgiveness is the unilateral cancellation of what is genuinely owed — not because the debt wasn't real but because the creditor absorbs the loss rather than requiring the debtor to repay it. This is costly. It is also what God has done for you." },
  { title: "Resentment Keeps You Imprisoned by the Person Who Wronged You", verse: "Matthew 18:35", text: "This is how my heavenly Father will treat each of you unless you forgive your brother or sister from your heart. Lewis Smedes' observation is often quoted: 'When you refuse to forgive, you allow the person who wronged you to live rent-free in your head.' The bitter person's thoughts are controlled by the person they have refused to release. Resentment is a form of bondage to the wrongdoer — one that the wrongdoer may not even be aware of while the resentful person is consumed by it." },
  { title: "Forgiving Is a Process, Not an Event — and It May Need to Be Repeated Many Times", verse: "Matthew 18:22", text: "Jesus answered, 'I tell you, not seven times, but seventy-seven times.' Jesus' answer to how many times to forgive is not a quantity — it is a category. Forgiveness for serious harm is typically not a one-time decision but a repeated practice: choosing to release the debt again when the memory resurfaces and the emotion re-emerges. This is not weakness. It is the patient work of the Spirit in a soul that is genuinely trying to walk in the freedom that forgiveness produces." },
];

const voices = [
  { id: "ls", name: "Lewis Smedes", role: "Author, Forgive and Forget; Fuller Theological Seminary", quote: "Forgiving does not erase the bitter past. A healed memory is not a deleted memory. Instead, forgiving what we cannot forget creates a new way to remember. We change the memory of our past into a hope for our future. The resentful person is trapped in a moment that is over. The forgiving person lives now.", bio: "Smedes' Forgive and Forget is the most widely read treatment of forgiveness in the Christian counseling tradition. His ability to be honest about the cost of forgiveness, the reality of the harm, and the freedom that forgiveness produces — without minimizing any of them — makes him the essential voice." },
  { id: "ba", name: "Dan Allender", role: "Author, Bold Love; The Allender Center", quote: "Forgiveness is not the same as reconciliation. Forgiveness is what you do alone, before God, releasing the debt owed to you. Reconciliation is a two-person process that requires repentance and trust-building. Many people refuse to forgive because they think forgiving means pretending the relationship is safe when it isn't. These are two different things, and conflating them keeps people in bitterness.", bio: "Allender's distinction between forgiveness and reconciliation is one of the most practically important contributions in this space. It releases people from the false dilemma of 'forgive or protect yourself' by showing that both can be true simultaneously — you can release the debt while maintaining necessary distance." },
  { id: "kr", name: "Everett Worthington", role: "Psychologist; Author, Forgiveness and Reconciliation", quote: "Resentment is not just a spiritual problem; it is a physiological one. The unforgiven person has a chronically activated stress response to the memory of harm — the same physiological profile as sustained trauma. Forgiveness, by contrast, produces measurable health benefits. This is not merely metaphor. Harbored bitterness is literally embodied in the body's stress systems.", bio: "Worthington's research on forgiveness is among the most rigorous available — he has conducted randomized controlled trials on forgiveness interventions and documented measurable physiological and psychological benefits. His REACH model (Recall, Empathize, Altruistic gift of forgiveness, Commit, Hold) is the most evidence-supported forgiveness process." },
];

const practices = [
  { icon: "🗣️", title: "Grieve the Harm Honestly Before Forgiving It", text: "Premature forgiveness — forgiving before the harm has been honestly acknowledged, felt, and lamented — tends to be incomplete and to resurface as bitterness later. The person who has been genuinely wronged has real losses to grieve: lost trust, lost years, lost opportunity, lost innocence. Bringing those losses to God in lament — Psalm 22's 'Why have you forsaken me?' is the model — is not self-pity. It is the honest processing that makes genuine forgiveness possible rather than performed." },
  { icon: "📋", title: "Write a Forgiveness Letter — For Yourself, Not Necessarily to Send", text: "Research consistently shows that writing a letter of forgiveness — naming the harm, naming what it cost you, and explicitly releasing the debt — accelerates the forgiveness process even when the letter is never sent. The act of writing externalizes and organizes what otherwise swirls internally. Include: what specifically happened, what it cost you, and the specific debt you are releasing. Date it. You can choose whether to send it; the value is primarily in writing it." },
  { icon: "🧠", title: "Distinguish Forgiveness From Reconciliation and Trust", text: "Forgiveness is unilateral — you can do it whether or not the person who wronged you is repentant, present, or even alive. Reconciliation requires two people and appropriate repentance. Trust must be rebuilt over time through demonstrated change. You can forgive someone fully while maintaining: distance from a dangerous person, legal protection from an abuser, limited contact with someone who repeatedly harms. Forgiveness releases the debt. It does not require you to extend credit again." },
  { icon: "🔄", title: "Expect the Process to Require Repetition", text: "For serious harm, forgiveness is typically not a one-time decision but a repeated practice. When the memory resurfaces and the emotion re-emerges — as it will — the work is to choose again: 'I have already released this. I choose again not to hold it.' This repetition is not a sign that the first decision failed. It is the normal pattern of forgiveness for serious harm. Each repetition of the choice deepens and settles the freedom." },
  { icon: "✝️", title: "Anchor Forgiveness in the Gospel's Account of Your Own Debt", text: "Jesus' parable of the unmerciful servant grounds the call to forgive in the story of what you yourself have been forgiven: a debt you could not repay, canceled by the master who absorbed the loss. When forgiveness feels impossible because the harm was too great, the theological return is: what was forgiven you was also beyond calculation. This is not intended to minimize your harm. It is intended to locate it within the larger story of grace, which provides both the power and the motivation to release." },
];

const scriptures = [
  { verse: "Hebrews 12:15", text: "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many." },
  { verse: "Ephesians 4:31-32", text: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." },
  { verse: "Matthew 18:21-22", text: "Then Peter came to Jesus and asked, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.'" },
  { verse: "Romans 12:19", text: "Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: 'It is mine to avenge; I will repay,' says the Lord." },
  { verse: "Colossians 3:13", text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you." },
  { verse: "Psalm 55:22", text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken." },
];

type RBEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ResentmentBitternessPage() {
  const [tab, setTab] = useState("theology");
  const [rbJournal, setRbJournal] = useState<RBEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_resentmentbitternessj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_resentmentbitternessj_entries", JSON.stringify(rbJournal)); } catch {}
  }, [rbJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setRbJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setRbJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Forgiveness &amp; Soul Formation</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Resentment &amp; Bitterness</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When harbored hurt hardens into bitterness — the theology of forgiveness, the process of releasing debt, and the freedom that follows.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What specific harm am I holding, and what has it cost me?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What does the gospel's account of my own forgiven debt say to this?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One specific act of releasing this debt I can do today" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {rbJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : rbJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Harm:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Gospel truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Release:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Difficult", channel: "Tim Keller", description: "Keller explores the theology and psychology of forgiveness — why it is both commanded and genuinely costly, and what it means to forgive as God has forgiven us. The clearest theological treatment of forgiveness available." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness and Providence", channel: "Tim Keller", description: "An exploration of the most sustained biblical narrative of forgiveness — Joseph and his brothers — and what it teaches about releasing debt, time, and the redemptive purposes of God in human harm." },
              { videoId: "E65KV3M8RZE", title: "What Forgiveness Is Not", channel: "The Gospel Coalition", description: "A careful theological treatment of the common misconceptions about forgiveness — what it does not require (reconciliation, trust, minimizing the harm), and what it actually accomplishes in the forgiving person." },
              { videoId: "HGHqu9-DtXk", title: "Left to Tell — Immaculée Ilibagiza", channel: "Focus on the Family", description: "Ilibagiza tells her story of surviving the Rwandan genocide and the extraordinary forgiveness she chose in the aftermath — one of the most compelling testimonies of forgiveness from the most extreme circumstances." },
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
