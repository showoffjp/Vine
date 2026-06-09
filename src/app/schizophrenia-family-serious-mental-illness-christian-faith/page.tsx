"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_schizophrenia_family_entries";

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

export default function SchizophreniaFamilyPage() {
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
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Serious Mental Illness &amp; Family Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            Loving Someone the System Does Not Know How to Help
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            When someone you love has schizophrenia, schizoaffective disorder, or another serious mental illness, you are navigating one of the most painful and isolating experiences a family can face. Your grief, your exhaustion, and your love are all real.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide &amp; Crisis Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-950-6264</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Family-to-Family program: </span>
          <strong style={{ color: TEXT }}>nami.org/Support</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Person You Love Is Still There", body: "Psychotic symptoms — hallucinations, delusions, disorganized thinking — can make the person almost unrecognizable at their worst. The theological anchor in this is the doctrine of imago dei: the image of God is not erased by illness. The person inside the disease is still the person. Research into serious mental illness consistently confirms that many people have periods of clarity, connection, and awareness — even when the illness is severe. The relationship is worth maintaining across the gaps." },
              { title: "Schizophrenia Is Not Demonic Possession", body: "Historically, people with psychotic symptoms were often understood (and sometimes treated) as demonically possessed. This interpretation caused profound harm — including death. The DSM criteria for schizophrenia and related disorders describe neurobiological phenomena: disruptions in dopamine systems, structural brain differences, and genetic vulnerabilities. The church that rushes to spiritual explanation for psychosis without ruling out medical causes is doing harm. Proper psychiatric evaluation is the faithful first step." },
              { title: "The Mental Health System Is Profoundly Inadequate", body: "Families navigating serious mental illness often discover that the mental health system in the United States is among the most fragmented, underfunded, and inadequate in the developed world. This is not a failure of the family. It is a systemic failure. There are not enough inpatient beds, community support workers, assertive community treatment programs, or housing options for people with serious mental illness. Advocating for a loved one with SMI requires persistence that most families should not have to exercise." },
              { title: "Anosognosia: When the Illness Prevents Awareness", body: "Up to 50% of people with schizophrenia have anosognosia — a symptom in which the illness itself prevents the person from recognizing that they are ill. This is not stubbornness or denial; it is a documented neurological impairment. When a loved one refuses treatment because they do not believe they are sick, understanding anosognosia can help families move from frustration ('why won't they just take the medication?') to a clearer picture of the obstacle. The Treatment Advocacy Center (treatmentadvocacycenter.org) provides resources specifically about anosognosia." },
              { title: "Your Grief and Ambivalence Are Appropriate", body: "Caring for someone with serious mental illness involves a distinctive grief — sometimes called ambiguous loss. The person is physically present but the relationship is profoundly altered. Families report grieving the person they knew, the future they imagined, and the ordinary family life they did not get to have. This grief coexists with love. The ambivalence — loving the person, exhausted by the illness, angry at the situation, afraid of the future — is not a character flaw. It is the emotional reality of this situation." },
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
              { name: "E. Fuller Torrey", role: "Psychiatrist and researcher, author of Surviving Schizophrenia", quote: "Schizophrenia is the most severe and disabling of all the mental illnesses. It is also one of the most misunderstood, even by those who treat it. Families need facts, not platitudes.", note: "Torrey's Surviving Schizophrenia is the definitive resource for families — blunt, evidence-based, and compassionate. He is also the founder of the Treatment Advocacy Center and a leading voice for reforming involuntary treatment laws that leave many seriously ill people untreated on the streets." },
              { name: "Amy Simpson", role: "Author of Troubled Minds: Mental Illness and the Church's Mission", quote: "My mother had schizophrenia. The church did not know what to do with our family. We learned to hide her illness, hide our grief, and perform normalcy on Sundays. The church's silence cost us.", note: "Simpson's memoir and advocacy have been among the most important evangelical resources for taking serious mental illness seriously as a pastoral care issue, not just a social service issue." },
              { name: "Henri Nouwen", role: "Priest and author, who lived and worked with people with severe disabilities at L'Arche Daybreak", quote: "Those whom the world considers marginal or broken are often the most able to show the world what genuine community looks like — if the community will let them.", note: "Nouwen's years at L'Arche — living alongside people with profound intellectual and mental disabilities — shaped a theology of mutual vulnerability that is directly applicable to family members of people with serious mental illness." },
              { name: "Pete Earley", role: "Author of Crazy: A Father's Search Through America's Mental Health Madness", quote: "I spent my career as a journalist reporting the truth. Then my son had a psychotic break and I found myself inside the most dysfunctional and cruel system in America: the mental health and criminal justice interface. It was not what I expected.", note: "Earley's account of trying to get treatment for his son — and instead watching him cycle through emergency rooms and jails — documented the catastrophic failure of deinstitutionalization without adequate community support. It became a driver of mental health policy reform." },
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
              { title: "NAMI Family-to-Family Program", body: "NAMI's free 8-session Family-to-Family education program is designed specifically for families of people with serious mental illness. It provides evidence-based skills for communication, crisis preparation, and self-care. It is led by trained family members who have been through the same experience. This is among the most effective peer-education programs available. Register at nami.org." },
              { title: "Learn About Assertive Community Treatment (ACT)", body: "ACT is an evidence-based treatment model that brings a multidisciplinary team (psychiatrist, nurse, social worker, peer support specialist) directly to the person in their community, rather than requiring the person to come to services. It dramatically reduces hospitalization and homelessness for people with serious mental illness. Ask your county mental health authority whether ACT teams exist in your area and how to apply." },
              { title: "LEAP: Listen, Empathize, Agree, Partner", body: "Dr. Xavier Amador developed the LEAP approach for families trying to maintain relationship with someone who has anosognosia and refuses treatment. The counterintuitive core: do not argue about whether they are sick. Instead, listen to their experience, empathize with what they are suffering, find areas of genuine agreement, and gradually build a partnership aimed at shared goals (feeling better, being less afraid, having more freedom). I Am Not Sick, I Don't Need Help (Amador) is the companion book." },
              { title: "Prepare a Crisis Plan Before the Crisis", body: "Every family with a loved one who has serious mental illness needs a written crisis plan: what the warning signs are, who to call first, whether the person has a Psychiatric Advance Directive (PAD), which hospitals have treated them and what their experience was, and what the family wants to avoid (restraints, certain medications, isolation). The time to write this plan is during a stable period, with the person's input if possible. NAMI has a crisis preparation template." },
              { title: "Your Own Wellbeing Is Not Optional", body: "Family members of people with serious mental illness have rates of depression, anxiety, and physical health problems significantly higher than the general population. This is not weakness; it is the documented cost of sustained caregiving under impossible conditions. Therapy for yourself, a peer support group (NAMI Family Support Groups meet weekly and are free), and building in regular respite are not luxuries. They are what enables you to continue." },
              { title: "Financial and Legal Navigation", body: "Most families need help navigating the systems around serious mental illness: Social Security Disability Insurance (SSDI) and SSI for a loved one who cannot work, Medicaid eligibility and mental health carve-outs, guardianship and conservatorship decisions, representative payee arrangements, and housing options (group homes, supported housing, HUD Section 8). NAMI can connect families with local legal aid organizations that specialize in disability law." },
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
              { ref: "Mark 5:15", text: "And they came to Jesus and saw the demon-possessed man, the one who had had the legion, sitting there, clothed and in his right mind, and they were afraid.", note: "The man who lived among tombs — who was a source of fear and social exclusion — was restored. He was given clothes, dignity, and a community again. Jesus did not abandon him to his condition." },
              { ref: "Galatians 6:2", text: "Bear one another's burdens, and so fulfill the law of Christ.", note: "Concrete, material burden-bearing. For families with SMI, this looks like: legal help, accompaniment to appointments, financial assistance, grocery delivery, advocacy. Not just prayer." },
              { ref: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend.", note: "The darkest psalm ends in darkness. For families with serious mental illness, this kind of sustained, unresolved darkness is the lived reality. The Psalmist does not lie about it." },
              { ref: "Romans 8:26", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.", note: "When you do not know how to pray — when language fails, when the situation exceeds your theology — the Spirit intercedes with groanings too deep for words. Your silence before God is not absence of prayer." },
              { ref: "Matthew 25:40", text: "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.", note: "Those with serious mental illness are among the most marginalized and most invisible in most communities. The identification of Jesus with them is explicit in this text." },
              { ref: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not snuff out; he will faithfully bring forth justice.", note: "The bruised reed and the smoldering wick — images of extreme fragility — are not discarded. They are treated with particular care. Your loved one is seen this way by God." },
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
                placeholder="What has surprised you most about loving someone with serious mental illness? What do you need that no one has offered?"
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
            <VideoEmbed videoId="G-2e9mMf7E8" title="Mental Illness in the Family — Faith When It Is Hard" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Church and Serious Mental Illness" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="When You Cannot Fix What You Love" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Caregiver Faith: Finding God When You Are Depleted" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You are loving someone through something the system was not built for. Your faithfulness matters.</p>
          <p style={{ marginTop: 8 }}>NAMI: 1-800-950-6264 &nbsp;|&nbsp; nami.org/Support &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
