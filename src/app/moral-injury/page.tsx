"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Moral Injury?", verse: "Ezekiel 9:4", text: "Go throughout the city of Jerusalem and put a mark on the foreheads of those who grieve and lament over all the detestable things that are done in it. Moral injury is the wound that results from witnessing, participating in, or failing to prevent actions that deeply violate one's moral beliefs. It is not simply guilt — it is a wound to the conscience, to one's sense of being a moral person in the world. God himself marks those who grieve over moral horror as distinct. The grief and anguish of moral injury is, paradoxically, a sign of moral seriousness — not weakness." },
  { title: "The Wound of Having Done What You Knew Was Wrong", verse: "Psalm 51:3-4", text: "For I know my transgressions, and my sin is always before me. Against you, you only, have I sinned and done what is evil in your sight. David's psalm after his sin with Bathsheba and the murder of Uriah is the model for processing moral injury that involves genuine wrongdoing. He does not minimize, explain away, or spiritually bypass. He names what he did. He brings it before God. He asks for cleansing rather than for his conscience to be silenced. The Psalm ends not in defeat but in restored joy." },
  { title: "The Wound of Being Made to Witness Horror", verse: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering that was inflicted on me? Lamentations gives voice to those who witnessed and experienced catastrophic moral horror — the destruction of Jerusalem, the slaughter of the innocent. Moral injury often involves exactly this: being present for things that cannot be unseen, that violate everything you believe about the world. This grief is not spiritual failure. It is the appropriate response of a person who still knows what is right." },
  { title: "Christ Bore the Weight of the World's Moral Horror", verse: "Isaiah 53:4-5", text: "Surely he took up our pain and bore our suffering... he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. The cross is the place where all moral horror — what has been done and what has been witnessed — is brought. Christ did not avert his eyes from moral catastrophe. He entered it. The one who asks to be heard in their moral injury speaks to a God who is not untouched by it." },
  { title: "Healing Requires More Than Forgiveness Language", verse: "Psalm 130:1-2", text: "Out of the depths I cry to you, Lord; Lord, hear my voice. Let your ears be attentive to my cry for mercy. Standard forgiveness language alone is often insufficient for moral injury — it can skip over the necessary process of lament, acknowledgment, community witness, and grief. The Psalms of the depths give language for the full weight of moral injury before the journey toward restoration begins." },
];

const voices = [
  { id: "v1", name: "Jonathan Shay, MD", role: "Psychiatrist, Veterans' Advocate", quote: "Moral injury happens when someone in authority betrays 'what's right' in a high-stakes situation. It is a wound to the soul, not just the psyche.", bio: "Jonathan Shay is a psychiatrist who coined the term 'moral injury' while working with Vietnam veterans. His books Achilles in Vietnam and Odysseus in America examine how betrayal by authority and participation in atrocity create wounds that neither PTSD treatment nor standard forgiveness language can fully address. His framework has been adopted widely in military chaplaincy and Christian counseling." },
  { id: "v2", name: "Diane Langberg", role: "Psychologist, Trauma Specialist", quote: "The church has failed soldiers, abuse survivors, and humanitarian workers with moral injury by rushing them to forgiveness before acknowledging the weight of what they carried.", bio: "Diane Langberg is one of the foremost Christian voices on trauma, abuse, and moral injury. Her work addresses the specific pastoral and therapeutic failures of the church in responding to those who carry moral injury — including rushing to cognitive forgiveness frameworks before the depth of the wound has been acknowledged, witnessed, and grieved." },
  { id: "v3", name: "Warren Kinghorn, MD", role: "Psychiatrist, Duke Divinity Faculty", quote: "Moral injury calls the church to be present with those who have done things they could not undo — not with judgment, and not with cheap absolution, but with truthful, costly solidarity.", bio: "Warren Kinghorn is a psychiatrist and theologian at Duke Divinity School who has written extensively on moral injury and Christian theology. His work examines what genuine ecclesial care for those with moral injury looks like — the kind of community presence that can hold both acknowledgment of wrong and the ongoing reality of grace." },
  { id: "v4", name: "Brian Powers", role: "Chaplain, Veteran Advocate", quote: "Veterans don't need to be told they're forgiven. They need someone willing to sit with them in the darkness of what they saw and what they did, and not flinch.", bio: "Brian Powers is a military chaplain and veteran advocate who works directly with service members and veterans navigating moral injury. His pastoral work is grounded in the conviction that the church's unique contribution to moral injury care is communal presence, honest witness, and willingness to sit in darkness — not quick reassurance." },
];

const practices = [
  { icon: "📢", title: "Name the Wound as Moral Injury, Not Just Trauma or Guilt", text: "Moral injury is distinct from PTSD (though they can coexist) and from simple guilt. It involves a wound to identity, conscience, and worldview — the sense that the world is not as it should be, and that you were involved. Naming it accurately opens the right kind of care rather than the wrong kind." },
  { icon: "🤝", title: "Seek Witness Before Seeking Resolution", text: "The single most important thing for moral injury recovery is having someone willing to hear the full story without flinching, minimizing, or rushing to resolution. Not a chaplain who pivots quickly to forgiveness. Not a friend who says 'you did what you had to do.' Someone who can sit with you in what you carry." },
  { icon: "🏥", title: "Find a Therapist Trained in Moral Injury", text: "Evidence-based moral injury treatments — including Adaptive Disclosure Therapy and Moral Injury Treatment for Veterans — have been developed specifically for this wound. The Moral Injury Project (moralinjuryproject.syr.edu) and Give an Hour (giveanhour.org) have therapist directories." },
  { icon: "⛪", title: "Find a Community That Can Hold This", text: "Veterans with moral injury, humanitarian workers, first responders, abuse survivors, and others with moral injury need communities willing to acknowledge complexity — that people can do genuine wrong and be genuinely loved simultaneously. This is the gospel, but not all communities can hold it." },
  { icon: "📖", title: "Pray Psalm 51 Line by Line", text: "David's psalm of confession after profound moral wrong is one of the few biblical texts that holds both the full weight of wrongdoing and the full promise of cleansing. Pray it slowly, naming your specific moral injury where David names his. Let the promise in verse 12 — restore to me the joy of your salvation — be genuinely aimed at you." },
  { icon: "💬", title: "Distinguish What Was Your Fault from What Was Not", text: "Moral injury can involve things you genuinely did wrong, things done to you, and things you could not have prevented. Sorting these three categories — with a therapist or trusted other — is part of the work. False guilt (over the second and third categories) must be treated differently from genuine guilt (over the first)." },
];

const scriptures = [
  { verse: "Psalm 51:3", text: "For I know my transgressions, and my sin is always before me." },
  { verse: "Psalm 130:1-2", text: "Out of the depths I cry to you, Lord; Lord, hear my voice. Let your ears be attentive to my cry for mercy." },
  { verse: "Isaiah 53:4-5", text: "Surely he took up our pain and bore our suffering... he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
  { verse: "Lamentations 3:32", text: "Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Psalm 51:12", text: "Restore to me the joy of your salvation and grant me a willing spirit, to sustain me." },
];

type MIEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function MoralInjuryPage() {
  const [tab, setTab] = useState("theology");
  const [miJournal, setMiJournal] = useState<MIEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setMiJournal(JSON.parse(localStorage.getItem("vine_moralinjuryj_entries") ?? "[]")); } catch { setMiJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: MIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...miJournal];
    setMiJournal(updated);
    localStorage.setItem("vine_moralinjuryj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = miJournal.filter(e => e.id !== id);
    setMiJournal(updated);
    localStorage.setItem("vine_moralinjuryj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🛡️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Moral Injury</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The wound to the soul from witnessing or participating in moral horror — more than trauma, deeper than guilt.</p>
        <div style={{ background: "#1a0a3e", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: PURPLE }}>Veterans & First Responders:</strong> 988 (press 1 for veterans) &nbsp;|&nbsp; Give an Hour giveanhour.org
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What is the moral wound I carry? What did I witness or participate in?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What is God's word to me about this — not cheap absolution, but honest truth?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="Who can I tell? What kind of care do I need to pursue?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {miJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Next: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Conscience, and the Body", channel: "Diane Langberg", description: "Diane Langberg on how moral injury and trauma are held in the body and conscience — and what faithful pastoral and therapeutic care requires." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how moral horror and trauma are encoded in the body and nervous system — context essential for understanding why moral injury cannot be resolved through cognitive processes alone." },
              { videoId: "6p_yaNFSYao", title: "Trauma and the Gospel", channel: "The Gospel Coalition", description: "A theological exploration of how the gospel speaks to trauma survivors, including those with moral injury — addressing both the wound and the promise." },
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Dan Allender on the story-level processing that deep moral wounds require — moving beyond behavior management to the narrative reconstruction that healing demands." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
