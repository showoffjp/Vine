"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_parent_addiction_entries";

interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #080614 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ParentAddictionCaregiverPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Caregiver for a Parent with Addiction</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Cannot Want Recovery More Than They Do
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Loving a parent with addiction — especially as an adult child who is now in a caregiving role — involves a particular tangle of love, grief, resentment, hope, exhaustion, and the disorienting experience of parenting your parent. You are not alone in this.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Al-Anon: </span>
          <strong style={{ color: TEXT }}>1-888-425-2666</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; SAMHSA National Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-662-4357</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Role Reversal Is Real and It Is Disorienting", body: "When an adult child becomes the responsible party for a parent with addiction — managing crises, covering bills, providing transportation, navigating medical and legal systems — the normal parent-child relationship has inverted. This is called parentification in reverse. The grief involved is real: grief for the parent they needed and did not consistently have, grief for the relationship they were supposed to have, and the exhaustion of responsibility without the choice or the training for it." },
              { title: "Enabling and Supporting Are Different", body: "The clinical distinction between enabling (doing things that make it easier for the addiction to continue) and supporting (doing things that address legitimate needs without shielding from consequences) is difficult in practice but crucial. Covering for the parent, providing money that goes to substances, lying to extended family about what is happening, and absorbing consequences the parent should face are enabling behaviors. They come from love; they also perpetuate the disease. Al-Anon provides frameworks for navigating this distinction." },
              { title: "You Cannot Want Their Recovery More Than They Do", body: "Recovery requires the addicted person to want it. An adult child's hope, prayer, planning, manipulation, ultimatums, or persistence cannot manufacture that motivation in another person. This is one of the hardest theological and practical realities of addiction caregiving. Your love is real; your love cannot produce change in a person who is not yet ready for change. Accepting this — which can take years and usually requires support — is not giving up. It is accurate perception of your actual power." },
              { title: "The Honor-Your-Parents Command Has Limits", body: "The biblical command to honor parents (Exodus 20:12) is not a command to allow yourself to be harmed, to cover for destructive behavior, or to sacrifice your own wellbeing and family for a parent who refuses treatment. Kavod — the Hebrew word translated as honor — means to give weight, to take seriously. Taking a parent seriously enough to refuse to shield them from the consequences of their addiction is a form of kavod. Love without enabling is not dishonor." },
              { title: "Your Children Are Watching", body: "If you have children, they are learning from how you navigate this relationship what they will learn about love, limits, and addiction. Modeling that love does not mean accepting all behavior, that concern for someone does not mean losing yourself in their problems, and that it is possible to maintain a relationship with someone while also maintaining clear limits — these are among the most valuable things you can demonstrate. Getting support yourself sends them this message too." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Melody Beattie", role: "Author of Codependent No More", quote: "Detachment is not caring less. It is caring differently — from a place where you are not drowning with the person you love.", note: "Beattie's work on codependency — the pattern of making another person's behavior the organizing principle of your own life — is directly applicable to adult children of addicts, whether the addiction is in a parent, spouse, or other family member." },
              { name: "The Prodigal Son's Father", role: "New Testament figure, Luke 15", quote: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.", note: "The waiting father is the model: he did not chase the son, bankrupt himself to fund the son's lifestyle, or lie about what the son was doing. He waited. When the son came to himself — a phrase the text uses — the father ran. The parent did not create the son's readiness. The son's readiness came from within." },
              { name: "Jerry Sittser", role: "Author of A Grace Disguised", quote: "Loss is loss, and grief is grief, whether or not the person causing it is still alive. The grief of having a parent who is present but not truly there is one of the hardest losses to name because it has no funeral.", note: "Sittser's theology of transformative loss can be applied to the particular grief of addiction caregiving — the loss of the parent who was needed and the relationship that should have been." },
              { name: "Bessel van der Kolk", role: "Psychiatrist, author of The Body Keeps the Score", quote: "Trauma lodges in the body of the person who was not protected. The adult child of an addict carries not only memories but physiological patterns — hypervigilance, people-pleasing, difficulty with boundaries — that were logical responses to an unsafe childhood.", note: "Van der Kolk's work connects the neuroscience of trauma to the experiences of people who grew up in chaotic or unsafe households. Many adult children of addicts carry complex trauma that requires treatment, not just strategy." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Al-Anon for Family Members of Alcoholics", body: "Al-Anon is a free peer support program for family members and close friends of people with alcohol use disorder. Its principles — the three Cs (I did not Cause it, I cannot Control it, I cannot Cure it), detachment with love, self-care, and focusing on your own recovery — are directly applicable to adult children of alcoholics in a caregiving role. Find meetings at al-anon.org or call 1-888-425-2666." },
              { title: "Nar-Anon for Families of People with Drug Addiction", body: "Nar-Anon (nar-anon.org) is the equivalent of Al-Anon for families of people with drug use disorders. It offers the same peer-support model and 12-step framework, adapted for the specific landscape of drug addiction, which often involves legal consequences, overdose risk, and access to naloxone. Many communities have both Al-Anon and Nar-Anon meetings." },
              { title: "Set a Financial Boundary and Hold It", body: "One of the most concrete ways addiction caregivers are harmed is financially — covering bills, bail, medical costs, and requests that go to substance use. Establishing a clear boundary about what you will and will not fund — in advance, in writing, with a trusted witness — and holding it under pressure is one of the most important protective actions you can take. The money that goes to enabling the addiction is money that is not available for your own family, your own retirement, your own health." },
              { title: "Therapy for Adult Children of Addicts", body: "The Complex Trauma model applies to many adults who grew up with addicted parents. EMDR, IFS (Internal Family Systems), and somatic approaches are particularly effective for the hypervigilance, people-pleasing, and boundary difficulties that are common in this population. Open Path Collective (openpathcollective.org) offers reduced-cost therapy. Psychology Today's therapist finder allows filtering by specialty." },
              { title: "SAMHSA Family Services", body: "SAMHSA (Substance Abuse and Mental Health Services Administration) maintains a national helpline at 1-800-662-4357 that can connect families with local treatment resources, recovery services, and support programs. Their treatment locator at findtreatment.gov allows searching by location and insurance. For families navigating an acute crisis, this is the first call." },
              { title: "Know When to Step Back", body: "There is a difference between supporting someone through treatment and managing an addiction on their behalf indefinitely. If your parent has repeatedly refused treatment, refuses to engage with support services, and your involvement is primarily absorbing consequences rather than facilitating any movement toward recovery — stepping back from active caregiving may be the most loving thing available. This is profoundly hard and usually requires support. A therapist with addiction family experience can help evaluate when you have reached this point." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Exodus 20:12", text: "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.", note: "Kavod — to give weight, to take seriously. Refusing to enable an addicted parent's destructive behavior is taking their humanity seriously. It is not dishonor." },
              { ref: "Luke 15:17", text: "But when he came to himself, he said, How many of my father's hired servants have more than enough bread, but I perish here with hunger!", note: "The prodigal came to himself — a phrase for the internal awakening that precedes seeking recovery. The father did not produce this. He waited, and when it came, he ran." },
              { ref: "Proverbs 27:17", text: "Iron sharpens iron, and one man sharpens another.", note: "The sharpening relationship involves friction — it is not passive accommodation. Honest engagement, even when it is uncomfortable, is part of love." },
              { ref: "Galatians 6:2, 5", text: "Bear one another's burdens, and so fulfill the law of Christ... For each will have to bear his own load.", note: "Paul holds both: there are burdens we share, and there are loads each person must carry themselves. Distinguishing between the two is the work of wisdom in caregiving relationships." },
              { ref: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me.", note: "God receives the person whose parents have not been reliably there — whether through addiction, abandonment, or incapacity. Your needs were not less valid because they were not met." },
              { ref: "Romans 12:18", text: "If possible, so far as it depends on you, live peaceably with all.", note: "Paul's important qualification: so far as it depends on you. Not unconditionally. Peace with an addicted parent requires conditions that may not always be present." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What do you wish your parent understood? What boundaries have been hardest to keep? What are you grieving about this relationship?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="7_CGP-12AE0" title="When Love Is Not Enough — Addiction and Family" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Detachment with Love: Al-Anon Principles and Faith" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="The Waiting Father: Luke 15 and the Limits of Love" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Caring for Yourself When You Cannot Fix Someone Else" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You cannot want their recovery more than they do. But you can take care of yourself while you love them.</p>
          <p style={{ marginTop: 8 }}>Al-Anon: 1-888-425-2666 &nbsp;|&nbsp; SAMHSA: 1-800-662-4357 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
