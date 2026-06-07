"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Schizophrenia Is Not Demonic Possession",
    body: "A significant pastoral error is treating schizophrenia — particularly its positive symptoms of hallucinations, delusions, and disordered thought — as evidence of demonic activity requiring deliverance ministry rather than medical treatment. The Bible distinguishes clearly between healings of physical and mental illness and exorcisms; the two are not the same. Misidentifying schizophrenia as demonic possession leads to abandonment of effective medical treatment, spiritual shaming, and sometimes dangerous outcomes. Schizophrenia is a brain disease. It requires psychiatric care.",
  },
  {
    title: "God Does Not Abandon the Person in Psychosis",
    body: "When a loved one with schizophrenia is in acute psychosis, they may be unreachable by normal communication, experiencing terror, or behaving in ways that are frightening and unrecognizable. The question families ask is: where is God in this? The Psalms of descent — 22, 88, 69 — speak of God's apparent absence while affirming his ultimate presence. The promise of Psalm 139 is that there is no place, including the darkest corridors of psychosis, where God is not present: \"If I make my bed in Sheol, you are there\" (v.8).",
  },
  {
    title: "The Long Grief of Chronic Mental Illness in a Family",
    body: "Families of people with schizophrenia experience a particular grief: they mourn a person who is still alive, whose potential was altered by illness, whose future changed irrevocably at first break. This is ambiguous loss — no clear death, no burial, no cultural permission to grieve. But the grief is real. Jeremiah's laments, the Psalms of complaint, and Job's extended cry all give biblical space for ongoing, unresolved grief that has no neat resolution on this side of eternity.",
  },
  {
    title: "Bearing One Another's Burdens: The Church and SMI Families",
    body: "\"Bear one another's burdens, and so fulfill the law of Christ\" (Galatians 6:2). Serious mental illness — including schizophrenia — is one of the heaviest burdens a family can carry. The church's role is not to provide answers or fix the illness, but to stay present across the years. Showing up on the bad days. Not withdrawing when the situation is complicated or the person behaves strangely. This sustained presence across time is one of the most theologically meaningful things a community can offer.",
  },
  {
    title: "Recovery Hope Within a Realistic Theology of Illness",
    body: "Research shows that approximately one-third of people with schizophrenia experience significant recovery, one-third have moderate improvement with treatment, and one-third have severe persistent symptoms. Christian hope does not require denying this reality. The New Testament holds together honest acknowledgment of present suffering and confident hope in final restoration: \"We groan inwardly as we wait eagerly for our adoption\" (Romans 8:23). You can hold both — the reality of what schizophrenia is, and genuine hope for what God can and does do.",
  },
];

const voices = [
  {
    name: "Dr. Matthew Stanford",
    role: "Neuroscientist, author of Grace for the Afflicted; CEO of Hope and Healing Center",
    quote: "The church has too often responded to serious mental illness either with denial — 'just pray harder' — or with fear. What families with schizophrenia need is exactly what Christ modeled: unhurried presence, consistent care, and the refusal to treat the person as something to be afraid of.",
  },
  {
    name: "Amy Simpson",
    role: "Author of Troubled Minds: Mental Illness and the Church's Mission; daughter of a parent with schizophrenia",
    quote: "Growing up as the daughter of someone with schizophrenia, I watched the church disappear when things got hard. Not because they were cruel — they just did not know what to do. The church needs to learn what to do. These families are us.",
  },
  {
    name: "Dr. Diane Langberg",
    role: "Psychologist specializing in trauma; advocate for the church's engagement with mental illness",
    quote: "To be present with someone whose mind is fractured in ways we cannot understand — to stay, to not require them to make sense, to simply offer our bodies in the room — this is one of the most Christlike things we can do. It costs everything. It is worth everything.",
  },
  {
    name: "Nami (National Alliance on Mental Illness) Faith Community Partners",
    role: "The intersection of faith and serious mental illness advocacy",
    quote: "Families of people with serious mental illness are among the most isolated caregivers in our society. They hide the diagnosis because of stigma — including church stigma. When faith communities learn to speak openly and compassionately about schizophrenia, it changes everything for these families.",
  },
];

const practices = [
  {
    title: "Get Educated About Schizophrenia",
    body: "Schizophrenia is characterized by positive symptoms (hallucinations, delusions, disordered thinking), negative symptoms (flat affect, poverty of speech, social withdrawal), and cognitive symptoms. It is a brain disease with strong genetic and neurobiological components. Understanding what it is — not a spiritual failure, not demonic possession, not a character flaw — is the beginning of effective family support. NAMI (nami.org) offers free family education programs, including NAMI Family-to-Family.",
  },
  {
    title: "Advocate for Treatment Without Giving Up",
    body: "Many people with schizophrenia lack insight into their illness (anosognosia) — they genuinely do not believe they are ill and refuse treatment. This is the most heartbreaking aspect for families. If your loved one is at risk, learn about Assisted Outpatient Treatment (AOT) laws in your state. Work with a psychiatrist experienced in schizophrenia. Do not give up on treatment because of one refusal — episodic engagement with psychiatric care is better than no engagement.",
  },
  {
    title: "Find a NAMI Family Support Group",
    body: "NAMI Family Support Groups are free, peer-led, and available in most cities. They exist specifically for family members of people with serious mental illness — and the group members understand in ways that no general counselor or well-meaning pastor typically can. Being with people who know exactly what you are going through, without needing to explain or justify, is irreplaceable. Find a group at nami.org/Support-Education/Support-Groups.",
  },
  {
    title: "Set Boundaries That Enable Rather Than Enable Illness",
    body: "Loving a family member with schizophrenia requires learning the difference between boundaries that protect the person and enable their treatment, versus accommodations that enable illness behaviors and protect them from consequences that might motivate treatment engagement. This is extremely difficult to discern and is best done with the guidance of a mental health professional experienced in serious mental illness. You cannot care for someone to health by enduring everything indefinitely without limits.",
  },
  {
    title: "Care for Yourself as If the Long Game Depends on It",
    body: "Schizophrenia is a lifelong illness. Many families carry this for decades. This is a marathon, not a sprint, and your own mental health, physical health, and spiritual vitality matter enormously for the long run. Individual therapy, peer support, respite care, and regular spiritual nourishment are not luxuries — they are necessities for family members of people with SMI. You cannot give what you no longer have.",
  },
  {
    title: "Pray Without Demanding an Outcome",
    body: "Prayer for someone with schizophrenia is most honest when it does not demand a specific outcome. \"Lord, be with my son in whatever state his mind is in. Be present where I cannot reach. Work through the medication, the treatment, the staff, the slow rebuilding. And hold me when I do not understand.\" This kind of prayer — open, honest, trusting without requiring — is the most sustainable spiritual posture for the long years of living with this illness in a family.",
  },
];

const scriptures = [
  { ref: "Psalm 139:7-8", text: "Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!" },
  { ref: "Galatians 6:2", text: "Bear one another's burdens, and so fulfill the law of Christ." },
  { ref: "Romans 8:23", text: "And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies." },
  { ref: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you." },
  { ref: "2 Corinthians 4:17", text: "For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison." },
];

const videos = [
  { videoId: "Xt8pVZaMyv4", title: "Amy Simpson — Troubled Minds: Mental Illness and the Church" },
  { videoId: "PZzLlmLoxQs", title: "Living with Schizophrenia — A Family Faith Perspective" },
  { videoId: "QC_4NfBqOr8", title: "Matthew Stanford — Grace for the Afflicted" },
  { videoId: "oV4n9b1oGFg", title: "NAMI Faith Communities — Supporting Families with SMI" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function SchizophreniaFamilyChristianPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; holding: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", holding: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_schizophreniafamily_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_schizophreniafamily_entries", JSON.stringify(next));
    setForm({ today: "", holding: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Loving Someone with Schizophrenia
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            For families of people with schizophrenia and serious mental illness — honest theology, practical help, and the assurance that God is present even where you cannot reach.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need support now?</strong> NAMI Helpline: <strong style={{ color: TEXT }}>1-800-950-6264</strong> &bull; Crisis Line: <strong style={{ color: TEXT }}>988</strong> &bull; If in immediate danger, call <strong style={{ color: TEXT }}>911</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Family Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space to process the long road.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are things today with your loved one?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Stable, crisis, in the system, out of the system..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What are you holding today?</label>
                <textarea value={form.holding} onChange={e => setForm(f => ({ ...f, holding: e.target.value }))} rows={2} placeholder="Grief, hope, exhaustion, fear..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, be with him/her today in the place I cannot reach..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.holding && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Holding: </span>{e.holding}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching, testimony, and education for families of people with serious mental illness.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
