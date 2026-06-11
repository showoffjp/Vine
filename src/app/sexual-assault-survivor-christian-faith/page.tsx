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
const JOURNAL_KEY = "vine_sexual_assault_survivor_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function SexualAssaultSurvivorPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Sexual Assault Survivor &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            Your Body Was Violated. You Were Not.
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            What happened to you was done to you. It did not define you, contaminate you, or separate you from God. Scripture has a name for what was done to you, and it is not your name.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>RAINN Hotline: </span>
          <strong style={{ color: TEXT }}>1-800-656-4673</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; 988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Crisis Text Line: text </span>
          <strong style={{ color: TEXT }}>HOME to 741741</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "You Were Not Responsible", body: "Sexual assault is an act of violence done to a person — not a consequence of the victim's behavior, dress, location, relationship to the perpetrator, or any other circumstance the perpetrator did not control. The church has at times communicated through purity culture, modesty teaching, and victim-blaming frameworks that survivors bear some responsibility for what was done to them. This is wrong theologically and clinically. Responsibility for sexual assault belongs entirely to the person who chose to commit it." },
              { title: "The Bible Includes the Stories of Sexual Assault Survivors", body: "Tamar (2 Samuel 13) was raped by her half-brother Amnon. The text does not minimize what happened; it records her anguish, her desolation, and her brother Absalom's grief. Dinah (Genesis 34) was assaulted, and the text records her father's and brothers' response. The Levite's concubine (Judges 19) was gang-raped and murdered — a text so horrifying that some scholars believe it was included precisely as an indictment. The Bible is not silent about sexual violence. It records it honestly and places the crime on the perpetrator." },
              { title: "Your Body Was Not Made Unclean by What Was Done to It", body: "Christian purity culture has sometimes implied that a person's value or purity is compromised by sexual violence. This is a theological error of the first order. The doctrine of the body as temple (1 Cor. 6) places sacredness in the body as God's dwelling — not as a vessel that loses its value when violated by another person. What was done to your body did not contaminate it. Contamination belongs to the one who did the violating, not to the violated." },
              { title: "Trauma Responses Are Normal Responses to Abnormal Events", body: "Flashbacks, nightmares, avoidance, hypervigilance, difficulty with intimacy, dissociation, shame, numbing, and anger are all documented trauma responses to sexual assault. These are not signs of spiritual failure or insufficient forgiveness. They are the nervous system's response to an event that exceeded its capacity to process normally. They require treatment — specifically trauma-informed treatment — not prayer in place of treatment, though prayer and treatment are not in competition." },
              { title: "Forgiveness Does Not Mean Reconciliation or Silence", body: "The church's teaching on forgiveness has been weaponized against sexual assault survivors — used to pressure them to not report, not pursue legal accountability, and to remain in proximity to perpetrators. Forgiveness (releasing the offender from personal vengeance in your own heart) is distinct from reconciliation (restoring the relationship), from accountability (legal or ecclesiastical consequences for the perpetrator's actions), and from safety (not being in proximity to someone who has demonstrated willingness to harm you). You can forgive while also reporting, leaving, and refusing contact. These are not in conflict." },
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
              { name: "Rachael Denhollander", role: "Lawyer, survivor advocate, and first public accuser in the Larry Nassar case", quote: "What you are worth is not defined by what was done to you. You are worth exactly as much as you were before. You are worth everything.", note: "Denhollander's victim impact statement at Larry Nassar's sentencing hearing brought Christian theology directly into a courtroom — citing Jesus's care for victims, the obligation of justice, and the worth of those who had been assaulted. Her subsequent advocacy for accountability in Christian institutions has been prophetic." },
              { name: "Tamar", role: "Old Testament figure, 2 Samuel 13", quote: "And Tamar lived, a desolate woman, in her brother Absalom's house.", note: "The text records Tamar's desolation without resolving it into a tidy redemption. Her story is told honestly. The crime is named. The grief is not minimized. The perpetrator is not protected by the text." },
              { name: "Diane Langberg", role: "Psychologist and author of Redeeming Power", quote: "The church must stop confusing the preservation of its reputation with the protection of its members. When an institution protects a perpetrator to protect itself, it participates in the crime.", note: "Langberg has spent decades treating survivors of trauma, including religious sexual abuse. Her work holds the church accountable for its institutional responses while equipping individual survivors with a theological framework for their healing." },
              { name: "Nadia Bolz-Weber", role: "Lutheran pastor and author of Shameless", quote: "What happened to you was not punishment. It was not God's plan. It was not your fault. You carry no contamination from it. The contamination belongs to the one who chose to do it.", note: "Bolz-Weber's deconstruction of purity theology in the context of sexual harm is among the most direct in evangelical-adjacent Christianity. Her framing of the contamination belonging to the perpetrator, not the victim, is both theologically accurate and pastorally significant." },
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
              { title: "RAINN: The Primary Resource for Survivors", body: "RAINN (Rape, Abuse & Incest National Network) is the largest anti-sexual violence organization in the United States. They operate the National Sexual Assault Hotline (1-800-656-4673) and an online chat service at rainn.org/get-help. They can connect survivors to local rape crisis centers, medical resources, legal advocates, and mental health services. This is the first call or click for anyone seeking support." },
              { title: "Trauma-Informed Therapy Is Essential", body: "Sexual assault trauma requires trauma-specific treatment — not standard talk therapy. EMDR (Eye Movement Desensitization and Reprocessing), CPT (Cognitive Processing Therapy), and Prolonged Exposure are the three most evidence-based treatments for sexual assault-related PTSD. Look for therapists who specifically list sexual trauma or PTSD in their specialties. RAINN's local resource directory and Psychology Today's therapist finder both support filtering by specialty." },
              { title: "You Do Not Have to Disclose to Everyone", body: "Disclosure of sexual assault — to family, to church, to employers, to the legal system — is your decision to make on your timeline. There is no universal obligation to disclose, no timeline by which you must have reported, and no requirement that you make your assault the defining narrative of every relationship. You are a whole person, not a diagnosis or a victim identity. Disclose when and to whom you choose, with the support you need." },
              { title: "Report If and When You Choose", body: "Reporting to law enforcement is one option, not an obligation. Many survivors choose not to report for reasons that are entirely legitimate — fear of not being believed, prior negative experiences with law enforcement, the relationship to the perpetrator, and the retraumatization of the reporting process. If you do choose to report, do so with an advocate present if possible. RAINN can connect you with a local rape crisis advocate who can accompany you through the process." },
              { title: "Sexual Assault in Marriage", body: "Sexual assault within marriage is legally recognized as rape in all 50 states, though prosecution remains challenging. The church has at times used Pauline texts about mutual conjugal rights to deny that assault within marriage is possible. This is exegetically wrong and pastorally harmful. Paul's language about mutual rights (1 Cor. 7:3–4) is set in a context of mutual care and is not a license for coercion. Marital rape is assault. The National Domestic Violence Hotline (1-800-799-7233) also serves survivors of sexual violence within intimate relationships." },
              { title: "Healing Is Not Linear and Takes Time", body: "Recovery from sexual assault trauma follows the same non-linear pattern as other trauma recovery — not a straight progression through stages but a process of integration that includes setbacks, triggers, and sometimes years of work before a new equilibrium is reached. This is normal. There is no timeline by which you should be further along. The goal is integration — the trauma becoming part of your history without defining or dominating your present experience." },
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
              { ref: "2 Samuel 13:19–20", text: "And Tamar put ashes on her head and tore the long robe that she wore. And she laid her hand on her head and went away, crying aloud as she went. And her brother Absalom said to her, Has Amnon your brother been with you?... So Tamar lived, a desolate woman, in her brother Absalom's house.", note: "The text does not minimize, redirect, or spiritualize away Tamar's assault and grief. It names it plainly and records her desolation with honesty. Her story belongs to the canon." },
              { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", note: "Crushed in spirit is the assault survivor's experience. God's nearness is specifically to this condition." },
              { ref: "Isaiah 61:1–3", text: "He has sent me to bind up the brokenhearted, to proclaim liberty to the captives... to comfort all who mourn... to give them a beautiful headdress instead of ashes, the oil of gladness instead of mourning, the garment of praise instead of a faint spirit.", note: "The one who was sent brings healing to the brokenhearted — specifically. This passage is what Jesus quoted when announcing his mission in Luke 4." },
              { ref: "Romans 8:38–39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", note: "Nor assault, nor perpetrator, nor shame, nor what was done. Nothing separates." },
              { ref: "Revelation 21:4–5", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore... And he who was seated on the throne said, Behold, I am making all things new.", note: "The promise is not that the tears were not real. It is that they will be personally wiped away and that God is making all things new — including what was done to you." },
              { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?", note: "Justice — for survivors, about perpetrators — is one of the three things God explicitly requires. Pursuing accountability is not unforgiving. It is obedient." },
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
                placeholder="This space is yours. Whatever you need to say, you can say it here."
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="You Are Worth Everything — Dignity After Assault" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Tamar's Story: When the Bible Names the Crime" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Healing From Sexual Trauma: Body, Soul, and Faith" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Justice and Forgiveness Are Not the Same Thing" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Your body was violated. You were not. The contamination belongs to the one who did it.</p>
          <p style={{ marginTop: 8 }}>RAINN: 1-800-656-4673 &nbsp;|&nbsp; rainn.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
