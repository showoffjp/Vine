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
const JOURNAL_KEY = "vine_immigration_faith_entries";

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

export default function ImmigrationFaithPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Immigration &amp; Undocumented Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            El Dios de los Extranjeros / The God of Strangers
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            The immigrant, the refugee, the undocumented person — these are not peripheral concerns for Scripture. They are central. The people of God have almost always been migrants, and God has a specific and repeated history of protecting and advocating for the stranger.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Resources: </strong>
          <span style={{ color: MUTED }}>CLINIC (Catholic Legal Immigration Network): </span>
          <strong style={{ color: TEXT }}>cliniclegal.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; National Immigration Law Center: </span>
          <strong style={{ color: TEXT }}>nilc.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; 988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Israel Was a Migrant People", body: "The identity of the people of God is inseparable from migration. Abraham left his country without knowing where he was going (Hebrews 11:8). Jacob's family went to Egypt as economic migrants during a famine. The Exodus was a mass refugee movement. The prophets addressed a people in Babylonian exile. Jesus was a refugee as an infant (Matthew 2:13–15). The New Testament calls Christians paroikoi — resident aliens, sojourners (1 Peter 2:11). The immigrant is not at the margins of the biblical story. They are its main character." },
              { title: "The Torah Commands the Protection of the Stranger 36 Times", body: "The command to treat the ger (the alien resident, the sojourner, the immigrant) with full justice appears 36 times in the Torah — more than any other ethical command. The rationale is always stated: 'you were strangers in Egypt.' Israel's own experience of migration, displacement, and oppression is the basis for their obligation to the immigrant. A Christianity that uses Scripture to justify hostility toward immigrants while ignoring these texts has confused its politics with its theology." },
              { title: "Status Does Not Determine Worth or Belonging", body: "The dignity of a human being is grounded in the image of God, not in immigration status, citizenship, documentation, or legal standing. An undocumented person is as fully image-bearing as any citizen. The Kingdom of God does not recognize the borders of nation-states as its organizing principle — Revelation 7:9 images the ultimate community as every nation, tribe, people, and language. You belong to God's family regardless of your paperwork." },
              { title: "Fear Is a Legitimate Pastoral Reality", body: "The fear of detention, deportation, family separation, and losing the life you have built is real and rational. Living under chronic threat activates the same neurobiological stress systems as other forms of chronic danger. Anxiety, hypervigilance, and depression are documented in undocumented populations at rates significantly higher than the general population. This is a pastoral care issue and a mental health issue, not only a legal one. Church communities that are genuinely safe for undocumented members create sanctuary in the etymological sense of the word." },
              { title: "The Church Has Not Always Been on the Right Side", body: "Parts of the American church have actively supported immigration enforcement, used Romans 13 (obey governing authorities) to argue against sanctuary, and been silent while members of their own congregations faced deportation. Romans 13 is not an absolute command of unconditional obedience to state power — it was written under Nero, and the same Paul who wrote it was repeatedly imprisoned by governing authorities for civil disobedience. The prophetic tradition from Exodus through the civil rights movement is clear about when the law of God supersedes the law of the state." },
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
              { name: "Gustavo Gutierrez", role: "Peruvian priest and theologian, father of liberation theology", quote: "The poor are not incidental to the gospel. They are the gospel's primary audience. The God who hears the cry of the poor is the God the Bible describes. A theology that does not hear this cry has not read the Bible carefully.", note: "Gutierrez's liberation theology, developed in the context of Latin American poverty and migration, insists that theological reflection must begin from the experience of the marginalized — not from the perspective of the powerful who interpret the Bible for those who have less." },
              { name: "Ruth (biblical figure)", role: "Old Testament Moabite immigrant, book of Ruth", quote: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.", note: "Ruth was an immigrant, a foreigner, and a widow who migrated to a country where she had no legal status other than the loyalty of one Israelite woman. She became an ancestor of David and of Jesus. The Messiah has immigrant blood." },
              { name: "Mary and Joseph", role: "New Testament figures, Matthew 2:13–15", quote: "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, Rise, take the child and his mother, and flee to Egypt, and remain there until I tell you, for Herod is about to search for the child, to destroy him.", note: "The Holy Family fled political violence and became refugees in Egypt. Jesus spent a period of his childhood as an undocumented immigrant in a foreign country. His solidarity with refugees and migrants is not theoretical." },
              { name: "Alexia Salvatierra", role: "Lutheran pastor and author of Faith-Rooted Organizing", quote: "The church that has been built by immigrants — who brought their faith across oceans and borders — cannot now stand silent while the heirs of those same immigrants are being separated from their families and removed from their communities.", note: "Salvatierra's work on faith-rooted organizing and immigrant advocacy has been at the intersection of pastoral care and political action. Her framing of church history as an immigrant history is both historically accurate and pastorally powerful." },
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
              { title: "Know Your Legal Rights", body: "Regardless of immigration status, everyone in the United States has constitutional rights: the right to remain silent, the right to an attorney, and the right to due process. You do not have to answer questions from ICE without a lawyer present. You can say: 'I do not consent to a search.' If approached by immigration enforcement, you can say: 'I am exercising my right to remain silent and I want to speak to a lawyer.' The National Immigration Law Center (nilc.org) provides know-your-rights resources in multiple languages." },
              { title: "CLINIC: Catholic Legal Immigration Network", body: "CLINIC (cliniclegal.org) is the largest network of nonprofit immigration legal service providers in the United States, with over 400 affiliated programs in 47 states. They provide affordable or free immigration legal services. They can assist with asylum applications, family petitions, DACA renewals, naturalization, and representation in removal proceedings. Many CLINIC affiliates are faith-based organizations." },
              { title: "Create a Family Safety Plan", body: "Every immigrant family — documented or undocumented — should have a family safety plan for the possibility of detention or deportation. The plan includes: identifying a legal guardian for children who are citizens; identifying trusted community members who can provide emergency childcare; knowing the location of important documents; having an attorney's number memorized; knowing the location of the nearest detention center. The National Domestic Workers Alliance has a free family preparedness plan template." },
              { title: "Mental Health Support for Immigrant Communities", body: "Chronic immigration-related stress (fear of detection, family separation, limited access to services) causes documented mental health impacts. The National Alliance on Mental Illness (NAMI) provides mental health resources in Spanish and other languages. The National Latinx Psychological Association (NLPA at nlpa.net) maintains a directory of bilingual culturally competent therapists. Some community health centers provide mental health services on a sliding scale regardless of documentation status." },
              { title: "Church Sanctuary and Immigration Protection", body: "The modern sanctuary movement — in which faith communities provide physical sanctuary to immigrants facing deportation — draws on both biblical tradition and historical precedent. ICE has a longstanding policy of avoiding enforcement actions at churches, hospitals, and schools (sensitive locations). While this policy has been subject to change, faith communities that publicly declare themselves sanctuaries create additional political and social pressure. The Church World Service (cwsglobal.org) provides guidance on establishing sanctuary." },
              { title: "Accompaniment as a Faith Practice", body: "Accompaniment — literally walking alongside someone in their legal process, at court hearings, at ICE check-ins, and through deportation proceedings — is one of the most meaningful forms of church support for immigrant community members. An accompanied person is statistically more likely to receive a favorable outcome in immigration proceedings and is less likely to experience illegal treatment. Interfaith Immigration Coalition (interfaithimmigration.org) trains congregation members in accompaniment." },
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
              { ref: "Leviticus 19:33–34", text: "When a stranger sojourns with you in your land, you shall not do him wrong. You shall treat the stranger who sojourns with you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt.", note: "The command appears 36 times in the Torah. The rationale is always the same: Israel's own experience of being strangers." },
              { ref: "Matthew 25:35, 40", text: "For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me... Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.", note: "Jesus identifies himself with the stranger (xenon — the foreigner, the one from another place). Welcoming the immigrant is welcoming Christ." },
              { ref: "Matthew 2:13–14", text: "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, Rise, take the child and his mother, and flee to Egypt... And he rose and took the child and his mother by night and departed to Egypt.", note: "The Holy Family fled political violence and became refugees. Jesus was an undocumented immigrant in Egypt. His solidarity is not theoretical." },
              { ref: "Hebrews 11:13–16", text: "These all died in faith, not having received the things promised, but having seen them and greeted them from afar, and having acknowledged that they were strangers and exiles on the earth... But as it is, they desire a better country, that is, a heavenly one.", note: "Abraham, Isaac, Jacob — the founding figures of Israel — are described as strangers and exiles. The migrant condition is the condition of the faithful." },
              { ref: "1 Peter 2:11", text: "Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul.", note: "Peter addresses Christians as paroikoi — resident aliens, people living in a country that is not their permanent home. The migrant experience is the New Testament's metaphor for Christian life." },
              { ref: "Psalm 146:9", text: "The Lord watches over the sojourners; he upholds the widow and the fatherless, but the way of the wicked he brings to ruin.", note: "God's specific watchfulness over the sojourner — the migrant — is a repeated Old Testament claim. You are under divine protection." },
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
                placeholder="What does home mean to you? What have you carried across borders? What has your faith meant in the journey?"
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
            <VideoEmbed videoId="7_CGP-12AE0" title="God of the Stranger — Leviticus 19 and Immigration" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="The Holy Family as Refugees: Matthew 2 and Today" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Welcoming the Stranger: Matthew 25 and Immigration Justice" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Hebrews 11: Strangers, Exiles, and People of Faith" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You belong to God&apos;s family regardless of your paperwork. The God who watched over Israel in Egypt watches over you.</p>
          <p style={{ marginTop: 8 }}>CLINIC: cliniclegal.org &nbsp;|&nbsp; NILC: nilc.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
