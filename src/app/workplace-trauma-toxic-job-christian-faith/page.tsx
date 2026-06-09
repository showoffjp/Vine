"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_workplace_trauma_entries";
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

export default function WorkplaceTrauma() {
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
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Work & Vocation</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Workplace Trauma, Toxic Jobs, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When work becomes a source of harm rather than meaning — surviving a toxic workplace and reclaiming your dignity.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; EEOC (workplace rights): eeoc.gov or <strong>1-800-669-4000</strong> &nbsp;|&nbsp; Dept. of Labor: dol.gov &nbsp;|&nbsp; Open Path Therapy: openpathcollective.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Work Was Created Good — What Toxic Work Violates</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In Genesis 2, before the Fall, God placed Adam in the garden to tend and keep it. Work is part of the original creation design — a way of participating in God&apos;s ongoing creative and sustaining activity in the world. The word for tend (abad) is also the word for worship and service. Work, rightly ordered, is a form of vocation — a calling to contribute to the flourishing of creation. When a workplace systematically dehumanizes workers, treats people as disposable units of production, harasses, bullies, or drives people into poor health — it is not just bad management. It is a violation of creation&apos;s design. Your anger at a truly toxic workplace is not a lack of gratitude. It is a moral response to a moral wrong.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Prophets and Unjust Work Systems</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The Hebrew prophets were relentlessly concerned with economic justice and the treatment of workers. Amos condemned those who trample the needy and do away with the poor of the land (Amos 8:4). Jeremiah pronounced woe on those who build their houses by unrighteousness and make their neighbors serve without wages (Jer 22:13). James in the New Testament is equally explicit: Look! The wages you failed to pay the workers who mowed your fields are crying out against you (James 5:4). The biblical tradition has no patience for the theology that says workers should simply accept mistreatment as part of faithful submission. There is a long tradition of naming workplace injustice as sin against God.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Workplace Trauma Is Real Trauma</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Persistent exposure to workplace bullying, humiliation, harassment, and psychological abuse produces symptoms that meet clinical criteria for complex trauma and PTSD. People leave toxic jobs and find themselves unable to trust new managers, hypervigilant to perceived threats, struggling with concentration and sleep, and with a deeply damaged sense of their own competence and worth. This is not weakness or overly sensitive reaction — it is what exposure to sustained interpersonal harm does to human beings. Your brain adapted to survive a threatening environment. That adaptation needs care and time to rewire, not dismissal.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Identity That Work Cannot Give and Cannot Take Away</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Toxic workplaces often use a person&apos;s professional identity against them: implying that if they were truly competent or truly committed, they would accept the treatment. For Christians whose vocation is deeply connected to their sense of calling, this is especially destabilizing — the work that was meant to be an expression of God&apos;s purpose for them has become a source of harm. Recovery requires reconnecting with the foundation that lies beneath work: the identity bestowed in baptism, in creation, in the love of God that precedes and survives every job. You are not what your worst manager said you were.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Permission to Leave</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christians sometimes feel that staying in a damaging situation demonstrates faithfulness, perseverance, or trust in God. This can be true. It can also be a false application of suffering theology to a situation where leaving is the faithful response. The disciples were told: When you enter a town and are not welcomed, leave (Luke 10:10–11). Paul exercised his right as a Roman citizen. Nehemiah set down his work when it was completed. The witness of Scripture includes people who persevered AND people who departed. The question is not which demonstrates more faith but which constitutes faithful stewardship of the life and gifts God entrusted to you.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Gary Chapman & Paul White", title: "Rising Above a Toxic Workplace", quote: "A toxic workplace is not a character test you must pass by staying. It is a real system of harm that some people can influence and some people need to survive by leaving. Both are legitimate." },
              { name: "Brene Brown", title: "Daring Greatly", quote: "Fitting in is about assessing a situation and becoming who you need to be to be accepted. Belonging is something else entirely — it doesn't require you to change who you are. You deserve the second one, even at work." },
              { name: "Dorothy Sayers", title: "Why Work?", quote: "Work is not primarily a thing one does to live, but the thing one lives to do. It is the full expression of the worker's faculties — the medium in which they offer themselves to God." },
              { name: "Walter Brueggemann", title: "Sabbath as Resistance", quote: "The world of Pharaoh is organized around production. The God of the Exodus organizes time around rest and dignity. Sabbath is resistance to the empire that says your worth is measured by your output." },
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
              { title: "Document Everything", body: "If you are experiencing harassment, discrimination, bullying, or wage theft, document it carefully: dates, times, what was said or done, witnesses. Keep copies outside work systems (personal email, home files). This is not paranoia — it is prudent stewardship of your ability to protect yourself legally if needed. The EEOC (eeoc.gov) handles discrimination claims; the Department of Labor (dol.gov) handles wage and hour violations." },
              { title: "Therapy for Workplace Trauma", body: "Trauma-informed therapy — particularly EMDR, somatic therapy, and CBT — addresses the nervous system dysregulation that results from sustained workplace harm. Open Path Collective (openpathcollective.org) and the National Alliance on Mental Illness (nami.org) can connect you with affordable care. Employee Assistance Programs (EAPs), if your employer offers one, may provide free short-term therapy." },
              { title: "Rebuild Professional Identity", body: "Toxic workplaces damage professional confidence. Rebuilding requires evidence: the work you did before the toxic job, the feedback from mentors and peers who saw your actual capability, your portfolio, your references. Reconnect with professional communities outside the toxic workplace. Your competence is not defined by how you were treated in one environment." },
              { title: "Sabbath as Practice, Not Concept", body: "Walter Brueggemann argues that Sabbath is a form of resistance to the totalizing demands of production culture. In recovery from workplace trauma, genuine Sabbath — one day per week fully off from work-related thoughts, emails, and tasks — is a healing practice as much as a spiritual one. The body and mind need consistent, regular rest to repair from chronic stress." },
              { title: "Vocational Discernment", body: "After toxic work experience, discerning what comes next benefits from more than job searching — it benefits from asking: What am I actually called to do? What environments allow me to flourish? What did the toxic workplace teach me about what I need? A vocational coach, spiritual director, or career counselor with trauma awareness can be genuinely useful. The Arbor Day Foundation&apos;s vocational work model and Richard Bolles&apos;s What Color Is Your Parachute are accessible starting points." },
              { title: "Support Network — Do Not Isolate", body: "Isolation after workplace trauma is common and counterproductive. The shame that toxic workplaces induce encourages people to hide their experience. Telling trusted people what happened — a mentor, a pastor, a close friend — is both healing and protective. Others can help you reality-check whether your perceptions are accurate, support you through the job search, and witness your recovery." },
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
              { ref: "Jeremiah 22:13", text: "Woe to him who builds his palace by unrighteousness, his upper rooms by injustice, making his own people work for nothing, not paying them for their labor." },
              { ref: "James 5:4", text: "Look! The wages you failed to pay the workers who mowed your fields are crying out against you. The cries of the harvesters have reached the ears of the Lord Almighty." },
              { ref: "Genesis 2:15", text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it." },
              { ref: "Colossians 3:23–24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward." },
              { ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
              { ref: "Amos 8:4", text: "Hear this, you who trample the needy and do away with the poor of the land." },
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
                placeholder="What happened in that workplace? What did it do to you? What do you wish someone had known?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Work, Calling, and When the Job Becomes a Source of Harm" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Sabbath as Resistance — Walter Brueggemann" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Recovering Your Identity After a Toxic Workplace" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Prophets and Worker Justice — A Biblical Perspective" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
