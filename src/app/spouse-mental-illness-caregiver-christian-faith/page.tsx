"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_spouse_mental_illness_entries";
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function SpouseMentalIllnessCaregiver() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Marriage & Mental Health</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Loving a Spouse with Mental Illness and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When vows meet severe mental illness — caregiving, boundaries, staying well, and what faithfulness actually requires.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> NAMI Family Helpline: <strong>1-800-950-6264</strong> &nbsp;|&nbsp; NAMI Family Support Groups: nami.org &nbsp;|&nbsp; 988 Lifeline &nbsp;|&nbsp; NAMI Family-to-Family Education: nami.org/faf
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>In Sickness and in Health — What No One Explained</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Marriage vows include in sickness and in health — but most couples who take those vows are not thinking about schizophrenia, treatment-resistant depression, bipolar disorder with psychosis, borderline personality disorder, or severe OCD. These conditions are not what most people imagine when they make that promise. Loving a spouse through severe mental illness is one of the most demanding forms of caregiving in existence, and the church has often responded to the spouses in these marriages with either the expectation that they simply endure or with implicit messages that asking for limits is a failure of love. Both responses fail to reckon with what loving well in these circumstances actually requires.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Love That Has Limits Is Still Love</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian love — agape — is not the same as self-destruction. Paul&apos;s description of love in 1 Corinthians 13 does not include love never protects itself or love enables anything the other person does. Wise caregiving includes limits: things you will and will not do, behaviors you will not accommodate, situations in which your own safety or the safety of your children must take precedence. These limits are not a betrayal of vows. They are part of caring for the marriage, for the ill spouse, and for yourself in ways that make long-term love sustainable. A caregiver who is destroyed cannot care.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Grief Inside a Living Marriage</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Spouses of people with severe mental illness often grieve the partner they married — the person who existed before the illness changed them, or before the symptoms became unmanageable, or before the series of hospitalizations began. This grief is real but socially invisible because the spouse is still there. Pauline Boss&apos;s concept of ambiguous loss — present but not fully available, physically there but psychologically absent during episodes — describes exactly this experience. You are allowed to grieve who your partner was and who you thought the two of you would become. That grief does not mean you do not love the person they are now.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Question of Separation and Divorce</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Some spouses of people with severe mental illness reach a point where they must consider separation or divorce — not because they stopped loving their spouse but because the marriage is causing serious harm to themselves, to their children, or because it is no longer possible to sustain. This is one of the most painful and contested areas of Christian ethics, and different Christians and Christian traditions reach different conclusions. What is clear from the pastoral tradition is that a God who does not require the vulnerable to remain in situations of ongoing abuse or harm is also a God who does not demand self-destruction in the name of vows. If you are here, you need a pastor and a therapist, not a formula.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>You Are Not the Treatment</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>A persistent and damaging dynamic in marriages affected by mental illness is the expectation — sometimes from the ill spouse, sometimes internalized by the caregiver — that the loving spouse&apos;s presence, reassurance, patience, and accommodation can substitute for professional treatment. It cannot. Love is not medication. Presence is not therapy. Your love for your spouse is real and valuable, but it has limits that are not your fault. Helping your spouse access and maintain professional treatment, while protecting your own health and wellbeing, is not lack of love. It is love in its most sustainable form.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Amy Simpson", title: "Troubled Minds: Mental Illness and the Church's Mission", quote: "Mental illness in a marriage is a family illness. The spouse, the children, the entire household are affected. The church that ministers only to the identified patient and ignores the family system has not understood the scope of the need." },
              { name: "Pauline Boss", title: "Ambiguous Loss", quote: "When someone is with you physically but absent in every other way, the loss is real but unrecognized. You cannot grieve it, celebrate it, or close it. You must learn to live with the permanent uncertainty of it." },
              { name: "Ed Welch", title: "When People Are Big and God Is Small", quote: "The most loving thing you can do for another person is not to make their pain go away or to take responsibility for their choices. It is to help them toward the One who actually can help them — and to care for yourself in the meantime." },
              { name: "David Murray", title: "Christians Get Depressed Too", quote: "The person with mental illness is not the only one who is suffering in that house. The spouse who woke up every morning and chose to show up again — their faithfulness is a form of witness to the grace of God that most people never see." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "NAMI Family-to-Family and Family Support Groups", body: "NAMI (National Alliance on Mental Illness) offers Family-to-Family, a free 8-session education program for family members of people with serious mental illness. NAMI also runs free peer-to-peer family support groups nationally. nami.org has a location finder. The family helpline is 1-800-950-6264. These programs are led by people who have been in exactly your position." },
              { title: "Therapy for the Caregiver — Separately", body: "Individual therapy for the caregiver is not optional if the marriage is to survive long-term. You need a space where you can be honest about your own experience without worrying about the impact on your spouse. Therapists trained in secondary traumatic stress, caregiver burnout, and family mental illness dynamics provide specific and appropriate support. Open Path Collective (openpathcollective.org) for reduced-cost care." },
              { title: "Boundaries and Crisis Planning", body: "Working with a therapist to develop clear agreements about what happens during a mental health crisis — when you will call 988, when you will call 911, what you will and will not do during an episode — provides structure that reduces both harm and the caregiver&apos;s paralysis in moments of crisis. NAMI&apos;s Crisis Response and Recovery resources are a starting point." },
              { title: "Support Network — Do Not Disappear", body: "Spouses of people with serious mental illness often slowly withdraw from their own friendships and community, partly because explanations are exhausting, partly because the illness absorbs everything. Maintaining at least one or two relationships where you can speak honestly about what is happening protects you from the isolation that makes caregiver collapse more likely. You need people who are there for you, not just for your marriage." },
              { title: "Couples Therapy with Mental Illness Expertise", body: "Standard couples therapy is insufficient when one partner has serious mental illness — and can actually be harmful if the therapist does not understand the dynamics. Look for a couples therapist with specific experience in mental illness, trauma, and caregiver dynamics. The AAMFT therapist directory (therapistlocator.net) allows searching by specialty." },
              { title: "Safety Planning for Children", body: "If there are children in the home, their safety and mental health require specific attention. Working with your children&apos;s school counselors and a child therapist about what they are experiencing at home is an act of protection. Children in homes with a parent with serious mental illness have elevated risks for anxiety, depression, and secondary trauma. Early support significantly improves outcomes." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Corinthians 13:4–7", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres." },
              { ref: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
              { ref: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
              { ref: "Isaiah 40:28–31", text: "Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak." },
              { ref: "2 Corinthians 1:3–4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble." },
              { ref: "Psalm 73:26", text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What do you need that you haven't been able to ask for? What would you say if there were no consequences for saying it?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="When Vows Meet Mental Illness — Faithful Caregiving and Limits" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Ambiguous Loss — Grieving a Spouse Who Is Still Here" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="NAMI Family-to-Family — What Caregivers Need to Know" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Caring for Yourself While Caring for Your Spouse" />
          </div>
        )}
      </div>
    </div>
  );
}
