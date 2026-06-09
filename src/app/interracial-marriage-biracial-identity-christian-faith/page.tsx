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
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_interracial_biracial_entries";

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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function InterracialBiracialPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Interracial Marriage &amp; Biracial Identity</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Were Made Whole, Not Divided
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Interracial couples and biracial people often face skepticism from both sides of their heritage — including from within the church. Scripture tells a different story about what God has joined and who belongs at the table.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support: </strong>
          <span style={{ color: MUTED }}>988 Lifeline — </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Multiracial Family Circle: </span>
          <strong style={{ color: TEXT }}>multiracialfamilycircle.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; MAVIN Foundation: </span>
          <strong style={{ color: TEXT }}>mavinfoundation.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Church's History of Opposing Interracial Marriage Is a Moral Failure", body: "American Christianity — particularly in the South — actively used Scripture to oppose interracial marriage for most of American history. The Curse of Ham, the Tower of Babel's dispersion narrative, and the Israelite prohibition on intermarriage with Canaanites were all weaponized in defense of segregation. This reading was theological error in service of racial hierarchy. Bob Jones University did not remove its ban on interracial dating until 2000. The church's record on this issue is not neutral; it requires honest reckoning." },
              { title: "Pentecost Is the Theological Answer to Tower of Babel", body: "Genesis 11 (Babel) is often read as God's establishment of racial/national separation. Acts 2 (Pentecost) is the theological reversal — every nation, tongue, and people gathered, and each heard in their own language. The new community in Christ is not raceless (a pretense that often serves whiteness) but multiethnic — genuinely different people genuinely together. Revelation 7:9 images the ultimate eschatological community as every nation, tribe, people, and language standing before the throne. Interracial families are a foretaste of that table." },
              { title: "Biracial Identity Is Complete, Not Fractional", body: "Biracial and multiracial people are often told they are half of one thing and half of another — a framing that implies incompleteness. The theological corrective: you are image-bearers whose whole person was made whole. You do not owe anyone the performance of a single racial identity, and your complexity is not confusion. The question 'What are you?' — asked with the expectation of a monoracial answer — is a social demand, not a theological one." },
              { title: "Navigating Two Families and Two Cultures Is Real Work", body: "Interracial couples and biracial children navigate what sociologists call code-switching and what therapists call bicultural stress. The work of belonging to multiple communities — each with different norms, languages, histories, and expectations — is exhausting in ways that monoracial people rarely acknowledge. This is not pathology; it is the particular labor of living at the intersection of two worlds. It often produces remarkable depth of perspective." },
              { title: "Finding Community That Reflects Your Family", body: "One of the consistent challenges of interracial couples in the church is finding a congregation where their family is unremarkable — where they are not the only interracial family, where leadership reflects demographic diversity, and where they are not asked to serve as ambassadors for racial reconciliation whenever the topic arises. This is a legitimate pastoral need, and churches that are genuinely multiethnic (not just demographically diverse but culturally integrated) are worth seeking." },
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
              { name: "Christena Cleveland", role: "Social psychologist and theologian, author of Disunity in Christ", quote: "The homogeneous church is not a biblical church. The body of Christ was always intended to be the place where people who had no reason to eat together ate together. That is the miracle, not the sameness.", note: "Cleveland's research on in-group bias and inter-group contact in Christian communities makes the sociological and theological case for genuinely multiethnic churches — not as a diversity program but as the nature of the body of Christ." },
              { name: "Ruth (biblical figure)", role: "Old Testament figure, book of Ruth", quote: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.", note: "Ruth was a Moabite woman who crossed an ethnic and religious boundary to join the community of Israel. She became an ancestor of David — and of Jesus. The Messiah's genealogy includes interethnic lineage. This is not incidental." },
              { name: "Zipporah", role: "Cushite wife of Moses, Numbers 12", quote: "(Numbers 12:1) Miriam and Aaron spoke against Moses because of the Cushite woman he had married, for he had married a Cushite woman.", note: "Miriam opposed Moses's interracial marriage and was judged for it. God's response was unambiguous: the opposition to the marriage was wrong. Scripture records this specifically." },
              { name: "Mark Charles and Soong-Chan Rah", role: "Authors of Unsettling Truths", quote: "The American church has built its theology of race on a foundation of white supremacy. Untangling that theology requires not just diversity programs but honest historical reckoning with what was taught and who it served.", note: "Charles and Rah trace the theological roots of American racial hierarchy to specific doctrinal frameworks (the Doctrine of Discovery, manifest destiny theology) and call for genuine repentance and reconstruction." },
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
              { title: "Pre-Marital Counseling That Names Race Explicitly", body: "Most pre-marital counseling does not explicitly address the dynamics of interracial marriage — family opposition, microaggressions from strangers, the particular challenges of raising biracial children, and navigating two cultural frameworks in one home. Seek a couples therapist or counselor with demonstrated experience in multicultural families. The Gottman Institute has culturally competent couples counselors in its directory at gottman.com." },
              { title: "Equip Your Children with Language for Their Identity", body: "Research on biracial child development shows that children benefit from explicit, positive identity frameworks that honor all parts of their heritage without requiring them to choose. Avoid 'we don't see race in our family' — it leaves children without language for experiences they will have. Give them accurate history about all their heritages, introduce them to biracial/multiracial role models, and teach them that questions about their identity are normal and that they belong everywhere they come from." },
              { title: "Family Opposition: Setting Boundaries and Maintaining Connection", body: "Racial opposition from extended family — including explicitly Christian family who claim biblical justification — is one of the most common stressors in interracial relationships. The theology is clear (and documented above): the opposition is not supported by Scripture. The relational reality is that you cannot require extended family to approve of your marriage, but you can maintain boundaries about what is acceptable in your presence and around your children. A therapist with multicultural family expertise can help navigate this." },
              { title: "Find a Genuinely Multiethnic Church", body: "A multiethnic church is not simply one with diversity in the seats — it is one where diversity is reflected in leadership, liturgy, music, preaching, and decision-making. Sociologist Korie Edwards's research shows that most multiethnic churches are culturally white with diverse attendees. A genuinely multiethnic church shares power across racial lines. The Mosaix Global Network (mosaix.info) focuses on multiethnic church planting and can help identify communities." },
              { title: "Connect with Multiracial Community Organizations", body: "The MAVIN Foundation (mavinfoundation.org) and Multiracial Family Circle (multiracialfamilycircle.org) provide community, resources, and programming for multiracial families and biracial individuals. These secular organizations fill a gap that most churches have not addressed. The lived experience community they provide is often more helpful than formal counseling for navigating the day-to-day realities of multiracial family life." },
              { title: "Prepare for the Question: What Are You?", body: "Biracial and multiracial people are asked this question routinely, often by well-meaning people who simply cannot categorize them. Having ready language — for yourself, and for your children — that is honest and confident without being exhausting to deliver is a practical skill. The answer is not an obligation to explain your entire heritage; it is an invitation to define yourself on your terms. 'I am [names], and I come from [both heritages]' is always a complete answer." },
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
              { ref: "Revelation 7:9", text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb, clothed in white robes, with palm branches in their hands.", note: "The ultimate community in God's presence is multiethnic and multilingual. Interracial families are not aberrations from God's design — they are previews of it." },
              { ref: "Acts 2:5–11", text: "Now there were dwelling in Jerusalem Jews, devout men from every nation under heaven... And at this sound the multitude came together, and they were bewildered, because each one was hearing them speak in his own language.", note: "Pentecost does not erase cultural difference but creates understanding across it. The Spirit of God is not monocultural." },
              { ref: "Numbers 12:1, 9–10", text: "Miriam and Aaron spoke against Moses because of the Cushite woman he had married... And the anger of the Lord was kindled against them... Miriam was leprous, like snow.", note: "The most explicit biblical account of racial opposition to an interracial marriage — and God's unambiguous response. Opposition to Moses's Cushite wife was judged, not vindicated." },
              { ref: "Galatians 3:28", text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.", note: "Paul is not saying difference does not exist. He is saying it does not determine standing before God or within the covenant community." },
              { ref: "Ruth 1:16–17", text: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried.", note: "Ruth's covenant declaration crosses an ethnic and religious boundary. Her faithfulness was recognized, celebrated, and written into the lineage of the Messiah." },
              { ref: "Ephesians 2:14", text: "For he himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility.", note: "The dividing wall (of the Temple, separating Jews and Gentiles) is demolished in Christ. The walls that separate races and peoples are among those Christ came to break down." },
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
                placeholder="Where have you found belonging? Where have you been made to feel like you don't fully fit? What do you want your children to know about who they are?"
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
            <VideoEmbed videoId="7_CGP-12AE0" title="Race, Faith, and the Family of God — Elevation Church" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Multiethnic Church: Why It Matters" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Who Belongs at the Table? Revelation 7 and Community" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Breaking Down Walls: Ephesians 2 and Reconciliation" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You were made whole, not divided. And your family is a sign of where God is taking all of creation.</p>
          <p style={{ marginTop: 8 }}>MAVIN Foundation: mavinfoundation.org &nbsp;|&nbsp; Mosaix: mosaix.info &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
