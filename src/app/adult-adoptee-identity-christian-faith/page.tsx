"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

const JOURNAL_KEY = "vine_adoptee_identity_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function AdultAdopteeIdentityPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() };
    const updated = [entry, ...entries];
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Adoptee Identity & Belonging
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          Being adopted shapes your story in ways that do not resolve at 18. Questions of origin, belonging,
          and identity often deepen in adulthood. Your complexity is not a problem to fix — it is a life to understand.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`,
              background: tab === i ? ACCENT : "transparent", color: tab === i ? TEXT : MUTED,
              cursor: "pointer", fontSize: 14, fontWeight: tab === i ? 700 : 400, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Adoption as Theological Metaphor — and as Real Life", body: "The Christian tradition makes extensive theological use of adoption — Galatians 4, Romans 8, Ephesians 1 all speak of believers as adopted children of God. This language can be powerful for adoptees, but it can also be weaponized to bypass the real, human grief of adoption. Theological adoption metaphors do not erase the weight of original family separation. A faith community that uses adoption theology must be careful not to use spiritual language to dismiss the psychological complexity of actual adoption." },
              { title: "The Primal Wound", body: "Psychologist Nancy Newton Verrier identified what she called the 'primal wound' — the impact of separation from the birth mother on the infant, which she argues creates a fundamental imprint of loss that shapes subsequent attachment, identity, and relationship. Not all adoptee experiences match this framework, and the research is debated — but many adult adoptees find it names something real. The church should take seriously that adoption, however loving and redemptive, begins in loss." },
              { title: "Transracial and International Adoption's Specific Challenges", body: "Adoptees placed transracially or internationally carry additional layers: cultural disconnection, racial identity navigation in a family that may not look like them, questions about heritage and language, and sometimes the weight of savior narratives placed on their adoption by their adoptive families or churches. These layers deserve specific attention, not dismissal." },
              { title: "The Right to Search", body: "Adult adoptees have the right to seek information about their biological origins. This is not disloyalty to adoptive parents. It is a normal human need to know one's own story. The Christian community sometimes uses language of gratitude or loyalty to discourage adoptees from searching — this is harmful. Seeking origin is not ingratitude; it is identity formation." },
              { title: "Adoption Does Not Erase Grief", body: "Many adoptees report significant pressure — from adoptive families and from churches — to express unambiguous gratitude for their adoption. This pressure suppresses legitimate grief: grief over the biological family, over what was lost before the adoption, over not knowing one's origins. The two truths — gratitude for a loving adoptive family and grief over original loss — are not mutually exclusive. Both must be given space." },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Moses (Exodus 2)", role: "Biblical Figure", quote: "When Moses had grown up, he went out to where his own people were and watched them at their hard labor.", insight: "Moses was raised in Pharaoh's household and was in every practical sense Egyptian — but as an adult, he went out to find his people. His identity formation as an adoptee, including the crisis of Exodus 2 (who am I, and who are my people?), is a central thread in the biblical narrative. God did not bypass this identity work — he worked through it." },
              { name: "Nancy Newton Verrier", role: "Psychologist, The Primal Wound (1993)", quote: "The separation of an infant from its birth mother is not a minor event, but a profound and pervasive trauma that affects the adoptee on a pre-verbal, cellular level.", insight: "Verrier's framework — however debated clinically — gave language to an experience many adoptees had felt but could not name. Her work opened permission for adoptees to acknowledge grief that adoption culture had suppressed." },
              { name: "Jedd Medefind", role: "Christian Alliance for Orphans", quote: "Adoption is not merely a humanitarian act but a theological one — and the church must take it seriously enough to prepare families and support adoptees through the full complexity of the journey.", insight: "Medefind's work at the intersection of evangelical Christianity and adoption reform advocates for adoptee-centered approaches that honor the complexity of the adoptee experience rather than serving adoptive family narratives." },
              { name: "Angela Tucker", role: "Adoptee, Author, The Adopted Life", quote: "As an adult adoptee, I have had to learn to hold both love for my adoptive family and grief for my birth family — not as opposites but as simultaneous truths.", insight: "Tucker, a transracial adoptee, has become a leading voice for adoptee-centered adoption conversations. Her film and book center adoptee perspectives and challenge the church's tendency to tell adoption stories from the adoptive family's point of view." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: ACCENT, fontSize: 13, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, color: TEXT, fontStyle: "italic", margin: "0 0 12px" }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.insight}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Find an Adoptee-Affirming Therapist", body: "Not all therapists understand adoption. Look specifically for a therapist with adoption competency — someone who understands attachment, adoptee identity, and the specific grief patterns of adoption without defaulting to adoptive family narratives. The American Adoption Congress (americanadoptioncongress.org) maintains resources for finding adoption-competent professionals." },
              { title: "Give Yourself Permission to Search", body: "If you want to find information about your biological family, that desire is legitimate. DNA registries (AncestryDNA, 23andMe), state adoption registries, and search/support organizations can help. You do not need permission from your adoptive family. You may want to have a therapist with you as a support when reunions or searches produce unexpected information." },
              { title: "Connect with Adult Adoptee Community", body: "Online communities and in-person groups of adult adoptees provide a space where your experience is understood rather than explained. Organizations like Adoptee Rights Law Center, ICAV (Intercountry Adoptee Voices), and adoptee-led groups offer community and advocacy. Finding people who share your specific experience reduces the isolation of navigating adoption complexity." },
              { title: "Name What You Lost", body: "Even if your adoption was loving and your adoptive family wonderful, you lost something. Give specific names to those losses: biological heritage, genetic medical history, siblings you may not know, a mother tongue, a cultural identity, the what-if of a different life. Naming loss honestly is not disloyalty. It is grief, which is appropriate." },
              { title: "Distinguish Your Story from the Story Told About You", body: "Many adoptees grew up with a narrative about their adoption constructed by adoptive parents, churches, or social workers — often centering gratitude and redemption. As an adult, you have the right to construct your own story from your own perspective. Your story may include the gifts of adoption AND the cost of it, without needing to resolve into a single positive narrative." },
              { title: "Adoption Theology: Resource, Not Constraint", body: "Romans 8 and Ephesians 1 speak of adoption into God's family as the fullest expression of belonging. For some adoptees, this language resonates deeply. For others, adoption metaphors in church settings are triggering or minimizing. You are allowed to use or not use adoption theology for your own spiritual life, and your faith community should not impose a single adoptee response to theological adoption language." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988" },
                  { label: "American Adoption Congress", val: "americanadoptioncongress.org — adoptee rights and support" },
                  { label: "ICAV", val: "icav.com.au — intercountry adoptee voices" },
                  { label: "Adoptee Rights Law Center", val: "adopteesunite.com" },
                  { label: "DNA Detectives", val: "facebook groups for search and reunion support" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: TEXT, fontWeight: 600, minWidth: 200 }}>{r.label}:</span>
                    <span style={{ color: MUTED }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Romans 8:15–16", text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, 'Abba, Father.' The Spirit himself testifies with our spirit that we are God's children.", note: "The deepest belonging is established by the Spirit's testimony — not by birth certificate, genetic heritage, or adoptive paperwork. You are known and claimed." },
              { ref: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me.", note: "The most direct scriptural address to parental abandonment. God's reception is not contingent on one's birth family's ability or willingness to parent. This is foundation for identity when biological origin is complex." },
              { ref: "Exodus 2:11", text: "When Moses had grown up, he went out to where his own people were and watched them at their hard labor.", note: "Moses the adoptee searched for his people as an adult. This search is not presented as faithless or disloyal — it is the beginning of his call." },
              { ref: "Galatians 4:4–7", text: "But when the set time had fully come, God sent his Son, born of a woman, born under the law, to redeem those under the law, that we might receive adoption to sonship. Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, 'Abba, Father.'", note: "Adoption here is the final act of redemption — not a consolation prize but the goal. You who are adopted by humans bear the fullest possible image of how God relates to his people." },
              { ref: "Isaiah 43:1", text: "But now, this is what the Lord says — he who created you, Jacob, he who formed you, Israel: Do not fear, for I have redeemed you; I have summoned you by name; you are mine.", note: "Summoned by name, claimed as belonging — identity established by divine call, not by circumstance of birth or placement." },
              { ref: "Ephesians 1:5", text: "He predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will.", note: "Adoption into the divine family is not a secondary arrangement — it is predestined, intentional, and according to God's pleasure. Adoptive relationships can be chosen, and their chosen nature does not make them less real." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 8, lineHeight: 1.6 }}>"{s.text}"</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  "What questions about your origin are you still carrying? Which ones feel most urgent to you, and why?",
                  "What narrative were you given about your adoption? What parts of that narrative do you now see differently as an adult?",
                  "How has being adopted shaped the way you experience belonging — in relationships, in the church, with God?",
                  "What would it mean to hold gratitude for your adoptive family AND grief over your original loss at the same time, without resolving one into the other?",
                ].map(q => (
                  <div key={q} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>{q}</div>
                ))}
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Write your thoughts here..."
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 12, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Save Entry
              </button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Teaching on adoptee identity, belonging, origin, and the theology of adoption as gift and grief.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="G-2e9mMf7E8" title="Moses the Adoptee: Identity, Search, and Call" />
              <VideoEmbed videoId="4Eg_di-O8nM" title="The Primal Wound: Understanding Adoption Grief" />
              <VideoEmbed videoId="hJkLBPIbZr4" title="Adoption Theology: Resource or Constraint?" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="You Are Mine: Identity for the Adoptee in Christ" />
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
