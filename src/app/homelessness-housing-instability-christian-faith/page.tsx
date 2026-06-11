"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_homelessness_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function HomelessnessPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Homelessness &amp; Housing Instability</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            God Has Always Lived With the Displaced
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Jesus was a refugee as an infant and had no permanent home as an adult. Scripture has more to say about housing justice, welcome, and the sacred dignity of the unhoused than most churches acknowledge.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Immediate Resources: </strong>
          <span style={{ color: MUTED }}>National Homeless Hotline: </span>
          <strong style={{ color: TEXT }}>1-800-HOMELESS (466-3537)</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; 211 (housing/services): </span>
          <strong style={{ color: TEXT }}>dial 211</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; 988 Crisis Lifeline</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Jesus Was Unhoused", body: "Matthew 8:20 records Jesus saying: 'Foxes have dens and birds have nests, but the Son of Man has no place to lay his head.' This is not a metaphor about loneliness — it is a statement of material fact. The incarnate God chose a life of housing precarity. This is not incidental; it places Jesus in solidarity with the unhoused and strips away any theology that equates homelessness with sin, failure, or divine abandonment." },
              { title: "Israel's Theology of Hospitality Arose from Displacement", body: "The Hebrew command to welcome the stranger (ger — the alien resident) appears 36 times in the Torah — more than any other ethical command. The rationale is always the same: 'you were strangers in Egypt' (Lev. 19:34). Israel's ethics of hospitality and housing justice grew directly from their experience of displacement, slavery, and refugee status. To welcome the unhoused is to act from the center of Israelite identity." },
              { title: "Homelessness Is Systemic, Not Primarily Moral", body: "Research consistently shows that homelessness results from housing market failures, inadequate mental health infrastructure, domestic violence, medical debt, and economic shocks — not laziness, bad character, or spiritual deficiency. The church's history of explaining poverty as moral failure has caused profound harm and contradicts the prophetic tradition (Amos, Isaiah, Micah) that located poverty in unjust systems, not deficient individuals." },
              { title: "The Body Is Sacred — Housing Is a Dignity Issue", body: "The doctrine of bodily resurrection means that God takes bodies seriously — permanently. Housing is not a luxury; it is the basic condition under which embodied life can flourish. Exposure, physical danger, loss of sleep, inability to wash, and social exclusion that come with houselessness are assaults on the embodied imago dei. The church's call to care for the body is not separable from advocacy for housing justice." },
              { title: "Survival Does Not Require Shame", body: "People experiencing housing instability often absorb tremendous shame — from society, from churches, from their own internal narration. But Scripture names kings and prophets who were displaced (David living in caves, Elijah under a juniper tree, the disciples camping outside Jerusalem) without attaching shame. Survival is evidence of resilience, not a mark of failure. You are not your circumstances." },
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
              { name: "John Perkins", role: "Civil rights leader, founder of Christian Community Development Association", quote: "The gospel is not just about saving souls from hell. It is about transforming lives and communities. When people have no place to live, the gospel demands we do something about it — not just pray about it.", note: "Perkins developed the 3 Rs of Christian community development — Relocation, Reconciliation, Redistribution — as a framework for church engagement with poverty and housing justice. His work in Mississippi and California set the standard for Christian advocacy that neither abandons theology nor ignores systems." },
              { name: "Liz Theoharis", role: "Co-chair, Poor People's Campaign; director of Kairos Center", quote: "Poverty is not a character flaw. It is a policy choice. And the faith communities that refuse to engage that distinction are preaching a truncated gospel.", note: "Theoharis, an ordained minister and scholar, builds on Martin Luther King Jr.'s Poor People's Campaign to connect Christian theology with structural advocacy for the unhoused. Her work insists that Matthew 25 is not about individual charity but about the transformation of conditions that create poverty." },
              { name: "Shane Claiborne", role: "Author of The Irresistible Revolution, founder of The Simple Way", quote: "We can worship a homeless man on Sunday and be disgusted by one on Monday. That cognitive dissonance should disturb us.", note: "Claiborne's work in North Philadelphia — living in community with unhoused neighbors rather than serving from a distance — challenges the church's comfort with charity that requires no proximity or sacrifice." },
              { name: "Mary (the mother of Jesus)", role: "New Testament figure", quote: "He has brought down the powerful from their thrones, and lifted up the lowly; he has filled the hungry with good things, and sent the rich away empty. (Luke 1:52–53)", note: "The Magnificat is the most radical housing-justice text in the New Testament, and it comes from the mouth of a displaced, pregnant, unmarried woman. The reversal of fortune she sings is not private or spiritual — it is material and structural." },
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
              { title: "Dial 211 for Local Housing Resources", body: "211 is the national social services hotline. Available in most U.S. communities, it connects callers to local emergency shelter, transitional housing, rental assistance, food, utilities, and other services. It is available 24/7 and in multiple languages. Call 211 or visit 211.org. This is the single most important first step for anyone in immediate housing crisis." },
              { title: "HUD Homeless Resource Exchange", body: "The U.S. Department of Housing and Urban Development maintains a resource locator for shelters, transitional housing, and permanent supportive housing at hudexchange.info. For veterans specifically, the SSVF (Supportive Services for Veteran Families) program provides rapid rehousing and eviction prevention — call 1-877-4AID-VET." },
              { title: "Document Preservation and Identification", body: "One of the most practical and underserved needs of unhoused people is document recovery and preservation: birth certificate, Social Security card, state ID or driver's license. Without these, accessing housing, employment, and benefits is nearly impossible. Many cities have ID recovery clinics through legal aid, public libraries, or faith coalitions. Getting documents replaced is a high-leverage first step." },
              { title: "Know Your Rights as a Renter or Tenant", body: "Eviction prevention is far easier than rehousing. If you are behind on rent or facing eviction, contact your local legal aid organization immediately — before the court date. Many states have tenant protection laws that landlords routinely violate. Lawhelp.org connects people with free legal services by state. Filing for rental assistance may also pause eviction proceedings." },
              { title: "Trauma-Informed Care for Chronic Homelessness", body: "Chronic homelessness is almost always associated with significant trauma history — adverse childhood experiences, domestic violence, assault, and the ongoing trauma of being unhoused itself. Standard shelter programs that do not address trauma often fail to achieve lasting stability. Look for programs that specifically use trauma-informed approaches. The National Alliance to End Homelessness (endhomelessness.org) maintains a database of evidence-based programs." },
              { title: "For Churches: Move Beyond Soup Kitchens", body: "The most effective church responses to homelessness involve building or managing affordable housing, participating in Housing First programs, and providing case management — not just meals and overnight beds. Organizations like Habitat for Humanity, Enterprise Community Partners, and local Community Land Trusts offer partnership models. Housing First (providing housing without preconditions) has the strongest evidence base of any homelessness intervention." },
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
              { ref: "Matthew 8:20", text: "Jesus said to him, 'Foxes have holes, and birds of the air have nests, but the Son of Man has nowhere to lay his head.'", note: "Jesus lived without permanent housing. His solidarity with the unhoused is not a metaphor." },
              { ref: "Leviticus 19:33–34", text: "When a stranger sojourns with you in your land, you shall not do him wrong. You shall treat the stranger who sojourns with you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt.", note: "Israel's hospitality ethics are rooted in their own experience of displacement. The command is structural (legal protection) not merely sentimental." },
              { ref: "Matthew 25:35, 40", text: "For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me... Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.", note: "Jesus identifies himself with the unhoused and unhoused strangers. The test is material: were bodies fed, sheltered, welcomed?" },
              { ref: "Isaiah 58:6–7", text: "Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free... Is it not to share your bread with the hungry and bring the homeless poor into your house?", note: "God's definition of true worship (the fast) includes active housing provision, not only personal piety." },
              { ref: "Psalm 146:7–9", text: "The Lord sets the prisoners free; the Lord opens the eyes of the blind. The Lord lifts up those who are bowed down... The Lord watches over the sojourners; he upholds the widow and the fatherless.", note: "The sojourner — the displaced, the migrant, the homeless — is specifically named among those under God's special protection." },
              { ref: "Hebrews 13:2", text: "Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.", note: "The unknown stranger — who may be unhoused or in crisis — is to be welcomed. The text invokes Abraham entertaining angels (Gen. 18) as the paradigm case." },
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
                placeholder="What has kept you going? What has the church gotten right or wrong in how it has treated you?"
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
            <VideoEmbed videoId="7_CGP-12AE0" title="The God Who Sees You — When You Feel Forgotten" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="When God Feels Far Away — Holding On in Hard Seasons" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Matthew 25: Faith That Does Something" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Dignity, Poverty, and the Gospel" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Jesus had no place to lay his head. You are in good company, and God sees you.</p>
          <p style={{ marginTop: 8 }}>Homeless Hotline: 1-800-466-3537 &nbsp;|&nbsp; 211 (dial) &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
