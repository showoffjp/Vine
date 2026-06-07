"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "When Adoption Does Not Go as Planned",
    body: "Adoption disruption — when a child leaves an adoptive family before the adoption is finalized — and adoption dissolution — when a finalized adoption legally terminates — are realities that the Christian adoption movement rarely addresses. Many adoptive parents entered the process with deep theological conviction about gospel-embodied family formation. When the adoption fails, they carry not only grief but crushing shame: the sense that their faith was insufficient, their love was inadequate, or their theology was wrong. None of these is necessarily true.",
  },
  {
    title: "The Theology of Limits: You Are Not God",
    body: "Christian parents who face adoption disruption often struggle with the belief that sufficient love and faith should overcome any obstacle. But Jesus himself could not perform miracles in his hometown because of unbelief (Mark 6:5-6). Paul's thorn was not removed despite earnest prayer (2 Corinthians 12:8-9). The Christian theology of human limits — that we are creatures, not Creator — applies to parenting as everywhere else. You could not love a child into healing that required more than any human could provide. That is not a faith failure. That is humanity.",
  },
  {
    title: "The Child's Complexity and God's Sustained Care",
    body: "Children who are placed for adoption, and especially those who come from foster care, often carry attachment injuries, developmental trauma, and neurological impacts that resist conventional parenting and sometimes require specialized care beyond what a family can provide. These realities are not the adoptive parents' fault, and addressing them — including sometimes placing a child in specialized therapeutic care — can be the most loving response available. God's care for the child does not end when the adoptive placement does. Psalm 68:5-6 — \"Father of the fatherless... God gives the desolate a home to dwell in\" — is not a promise that only one family can fulfill.",
  },
  {
    title: "Shame, Secrecy, and the Body of Christ",
    body: "Adoption disruption carries enormous social stigma within Christian communities where adoption has been heavily promoted as a gospel act. Parents who face disruption often experience the social judgment of a community that does not understand what they went through — and who may question their faith, their love, or their fitness as parents. The church must grow in its capacity to hold this reality without judgment. These families need the body of Christ now more than ever — not condemnation, but the costly accompaniment that Jesus modeled.",
  },
  {
    title: "Grief Without a Clear Cultural Script",
    body: "There is no funeral for an adoption disruption. No cultural ritual for the grief. No clear language for the loss of a child who was not yet legally yours, or who was yours but whose relationship ended. This is ambiguous loss — the kind most resistant to social support because there is no recognized shape for it. The Psalms of lament — Psalm 88 especially — give language for grief that has no resolution: \"I am overwhelmed with troubles and my life draws near to death. I am counted among those who go down to the pit\" (v.3-4). God receives this grief.",
  },
];

const voices = [
  {
    name: "Karyn Purvis",
    role: "Founder of the Karyn Purvis Institute of Child Development; author of The Connected Child",
    quote: "Children who have experienced early trauma need therapeutic parenting that most families are not trained to provide and most resources do not support. When an adoption disrupts, it is often because the needs were greater than the available support — not because the family loved insufficiently.",
  },
  {
    name: "Jason Johnson",
    role: "Author of ReFraming Foster Care; advocate for trauma-informed care in faith communities",
    quote: "The church told families to adopt as a gospel act and then left them alone to manage complex trauma without training, support, or community. When adoptions disrupt, the families carry guilt that belongs partly to the church community that recruited them without preparing them.",
  },
  {
    name: "Sherrie Eldridge",
    role: "Adoptee and author of Twenty Things Adopted Kids Wish Their Adoptive Parents Knew",
    quote: "Every child placed for adoption — whatever happens to the placement — carries a primal wound from their first separation. Understanding that wound, and the behaviors it produces, is the beginning of a different kind of love: one that meets the child where they actually are rather than where we hoped they would be.",
  },
  {
    name: "Russell Moore",
    role: "Author of Adopted for Life; theologian on adoption and the gospel",
    quote: "Adoption is not a simple act of love. It is a long act of love — sometimes through circumstances that break the heart and the family. The gospel is large enough to hold both the triumph of adoption and the grief of its failures. Neither cancels the other.",
  },
];

const practices = [
  {
    title: "Seek Specialized Support for Post-Disruption Grief",
    body: "The grief of adoption disruption is specific and complex. Find a therapist who understands adoption, trauma, and attachment — not just a general counselor. The Allender Center, attachment-focused therapists, and therapists familiar with traumatic stress and adoption are the most equipped. The Adoption Network Cleveland and AdoptUSKids.org both have resources for families experiencing disruption or dissolution.",
  },
  {
    title: "Name the Grief to Safe People",
    body: "The silence around adoption disruption compounds the harm. Find at least two or three safe people — a counselor, a trusted friend, a pastor who will not judge — and tell them what actually happened. The shame that secrecy maintains will prevent healing. You are not required to tell everyone. But you are helped by telling someone.",
  },
  {
    title: "Process the Theology Specifically",
    body: "Many parents who experience adoption disruption need to explicitly work through the theological questions: Was God wrong to lead us to this adoption? Did our insufficient faith cause this? Is God disappointed in us? What happened to the child matters to God? A pastor, spiritual director, or Christian counselor can help process these specific questions rather than leaving them as festering doubts underneath the grief.",
  },
  {
    title: "Seek Information About the Child's Ongoing Care",
    body: "Many families who experience disruption have ongoing concern for the child's wellbeing. Within appropriate legal and privacy constraints, seek to understand what care the child is receiving. In some cases, ongoing contact in a safe form may be possible and beneficial. In others, the kindest thing is to trust the child to the care of others and God. A social worker or adoption case manager can help you understand what information and contact is possible and appropriate.",
  },
  {
    title: "Give Yourself Time Before Any Future Decisions",
    body: "The acute grief of disruption is not the time to make decisions about whether to pursue another adoption, whether your family is \"broken,\" or what your family's future looks like. Give yourself a significant period — at least twelve months — of recovery before making any major family decisions. The crisis reveals what needs to be healed; it is not itself the final word on who you are as a family.",
  },
  {
    title: "Connect with Other Families Who Have Experienced Disruption",
    body: "The isolation of adoption disruption is reduced significantly by being with others who have experienced it. Online support groups specifically for families post-disruption exist and are often deeply helpful. Knowing that your experience was not unique, that other faith-filled families faced the same impossibility, and that recovery is possible — these truths are best delivered by peers rather than professionals.",
  },
];

const scriptures = [
  { ref: "Psalm 68:5-6", text: "Father of the fatherless and protector of widows is God in his holy habitation. God gives the desolate a home to dwell in; he leads out the prisoners to prosperity." },
  { ref: "Psalm 88:3-4", text: "For my soul is full of troubles, and my life draws near to Sheol. I am counted among those who go down to the pit; I am a man who has no strength." },
  { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you." },
  { ref: "Romans 8:38-39", text: "For I am sure that neither death nor life... nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
];

const videos = [
  { videoId: "8hnx7CTMN-M", title: "When Adoption Doesn't Go as Planned — A Christian Perspective" },
  { videoId: "xDQGEaqQnFc", title: "Karyn Purvis — Trauma-Informed Care for Adoptive Families" },
  { videoId: "hVqiGgC0LOQ", title: "Jason Johnson — ReFraming Foster Care and Disruption" },
  { videoId: "WJP_7rTy7ug", title: "Grief Without a Script — Ambiguous Loss in Adoption" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function AdoptionDisruptionPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; question: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", question: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_adoptiondisruption_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_adoptiondisruption_entries", JSON.stringify(next));
    setForm({ today: "", question: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Adoption Disruption & Loss
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You loved as fully as you could. For Christian families who have experienced adoption disruption or dissolution — honest theology, specialized support, and the truth that you are not alone.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need support?</strong> AdoptUSKids: <strong style={{ color: TEXT }}>adoptuskids.org</strong> &bull; Karyn Purvis Institute: <strong style={{ color: TEXT }}>child.tcu.edu</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space for a grief that has no public script.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today in this grief?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Shock, shame, grief, relief, all of it at once..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What theological question is hardest for you right now?</label>
                <textarea value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} rows={2} placeholder="Did I fail God? Does God still care for this child? Was I wrong to try?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, watch over them where I cannot reach. And hold me too..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.question && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Wrestling with: </span>{e.question}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for families navigating adoption disruption and dissolution.</p>
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
