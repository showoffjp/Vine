"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_infertility_childlessness_entries";
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #060610 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function InfertilityChildlessness() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Grief & Loss</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Infertility, Childlessness, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>The grief that returns every Mother&apos;s Day, every shower, every announcement — and the God who is present in all of it.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> RESOLVE: resolve.org &nbsp;|&nbsp; HopeXchange (Christian): hopexchange.com &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Church Is Hard to Be Infertile In</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Mother&apos;s Day sermons that celebrate parenthood without acknowledging the women who desperately want to be mothers. Baby dedications that gather families at the front of the sanctuary. Small groups organized around children&apos;s ages. Baby showers where you smile and hand someone a gift while bleeding inside. The church, at its worst, is one of the hardest places in the world to be infertile. At its best — when it notices, names, and makes space for infertility grief — it can be uniquely healing. If your experience has been the former, you are not alone and you are not wrong to grieve the double wound of the diagnosis and the community&apos;s obliviousness.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Scripture Is Full of Infertile Women Who Were Not Forgotten</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Sarah. Rebekah. Rachel. Hannah. Elizabeth. These are not minor characters in the biblical narrative — they are central figures whose stories of waiting, grief, petition, and eventually receiving (or not) are told with unmistakable care. Hannah&apos;s prayer in 1 Samuel 1 is one of the most raw and honest prayers in Scripture — she wept and did not eat, and she cried out to God in bitterness of soul. The priest thought she was drunk. God heard her. The biblical God is consistently paying close attention to the grief of women who cannot conceive. Your grief is not invisible to God even when it is invisible to the people around you.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>When the Answer Is No</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Some women in Scripture who prayed for children received them. Others did not, and their stories are told with equal honoring. The theology of unanswered prayer is one of the most difficult territories in Christian faith, and it requires honesty: God does not always give people what they most deeply long for. This is not because the longing is wrong or the prayer is insufficient. It is because God&apos;s purposes operate in ways that do not always correspond to our deepest desires, and this is genuinely hard. When the answer is no — after years of treatment or when the body simply does not cooperate — the work is learning to grieve the no fully and still trust the character of the God who said it. That work is slow and is not completed by a sermon illustration.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Choosing Childlessness and the Fullness of a Life</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Some people reach a point of choosing to accept childlessness — not because the desire for a child has disappeared but because the treatment process has become too costly, or the path to adoption too long or uncertain, or because clarity comes that this is not the life they are called to. Christian culture can make this decision feel like a defeat or a settling. But Paul&apos;s vision in 1 Corinthians 7 is of a life fully devoted to God that is not organized around family — a complete and whole vocation, not a consolation prize. A life without biological children is not a diminished life. It is a different life, with different gifts and different possibilities for love.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Adoption and the Theology of Chosen Family</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Some people who cannot conceive build their families through adoption or foster care — and this path deserves its own theological grounding. Paul uses adoption as a central metaphor for humanity&apos;s relationship to God (Romans 8:15, Ephesians 1:5). The God who adopted us into his family blesses the expansion of family through covenant rather than biology alone. Adoption is not second-best — it is its own form of love, with its own particular joys and difficulties, deserving honest preparation and strong community support.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Lesley Ramsay", title: "Beyond Infertility: A Christian Conversation", quote: "The grief of infertility is not simply the grief of not having a child. It is the grief of a version of yourself you will never be, of a relationship your marriage will never have. It is multiple losses braided together." },
              { name: "Rachel Held Evans", title: "Searching for Sunday", quote: "Hannah did not perform trust. She wept and cried out in bitterness of soul. And God heard her. Not because she had her feelings under control, but because she brought her actual feelings to God. That is what prayer is for." },
              { name: "Sheryl Paul", title: "Conscious Transitions", quote: "Grief has no timeline and no correct expression. The grief of childlessness arrives in waves, often without warning, sometimes years after a person thought they had resolved it. That is not dysfunction. That is what it means to have loved a future that did not come." },
              { name: "Kate Bowler", title: "Everything Happens for a Reason", quote: "People say things to those in pain because silence is too loud and uncertainty is unbearable. But the most loving thing is not the explanation. It is the presence. Just stay." },
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
              { title: "RESOLVE — National Infertility Association", body: "resolve.org is the leading resource for infertility in the US. They offer a peer support group finder, insurance and legal advocacy, and a comprehensive directory of fertility specialists and emotional support resources. Their peer-led support groups are available in many cities and online." },
              { title: "HopeXchange — Christian Infertility Community", body: "hopexchange.com provides a specifically Christian community for people walking through infertility — resources and connection with others navigating the intersection of faith and infertility. The community engages honestly with the grief rather than offering easy answers." },
              { title: "Therapy for Infertility Grief", body: "Infertility grief is a genuine form of chronic grief that benefits from professional support. Some therapists specialize specifically in reproductive loss and infertility. RESOLVE has a mental health professional directory. Therapy for infertility grief often includes addressing relationship strain between partners, managing the treatment decision-making process, and processing grief at multiple stages." },
              { title: "Protecting Your Marriage During Treatment", body: "Infertility treatment places enormous strain on marriages. Couples therapy specifically — not just individual therapy — is important during active treatment. The Gottman Institute (gottman.com) has couples therapist directories. The goal is maintaining connection when the clinical demands of treatment create distance." },
              { title: "Setting Limits on Treatment", body: "Deciding when to stop treatment is one of the most difficult decisions in infertility. Having clear conversations with your partner about what your limits are, what conditions would lead you to stop, and what comes next is part of caring for your marriage and yourselves through the process. A therapist can help structure these conversations." },
              { title: "Community During the Hard Season", body: "Infertility isolates. Find people who know the whole story — through RESOLVE support groups, online communities, or trusted friends who can hold the grief without trying to fix it. Isolation makes infertility grief more severe. Even one person who knows the full truth makes a measurable difference." },
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
              { ref: "1 Samuel 1:10–11", text: "In her deep anguish Hannah prayed to the Lord, weeping bitterly. And she made a vow, saying, Lord Almighty, if you will only look on your servant's misery and remember me, and not forget your servant but give her a son..." },
              { ref: "Psalm 113:9", text: "He settles the childless woman in her home as a happy mother of children. Praise the Lord." },
              { ref: "Romans 8:15", text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father." },
              { ref: "Isaiah 54:1", text: "Sing, barren woman, you who never bore a child; burst into song, shout for joy, you who were never in labor; because more are the children of the desolate woman than of her who has a husband, says the Lord." },
              { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
              { ref: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
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
                placeholder="What do you need to say that the polite world does not give you room to say? Tell God what this is actually like."
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Hannah's Prayer — Infertility, Grief, and God Who Hears" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="When God Says No to the Deepest Longing of Your Heart" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Infertility and the Church — Finding Community in the Silence" />
            <VideoEmbed videoId="7_CGP-12AE0" title="A Full Life — Theology of Childlessness and Meaning" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
