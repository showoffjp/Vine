"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Abuse Is Not What God Designed Marriage to Be",
    verse: "Ephesians 5:25",
    text: "\"Husbands, love your wives, just as Christ loved the church and gave himself up for her.\" The passage that has sometimes been weaponized to demand a wife's submission is, in context, a passage primarily about a husband's self-sacrificial love. Christ's love for the church is defined by giving himself up — the opposite of domination, control, and violence. A marriage characterized by abuse is not a distorted version of the biblical ideal. It is its antithesis. Remaining in abuse is not faithfulness to the marriage covenant — it is endurance of its violation.",
  },
  {
    title: "The Bible Permits Separation from an Abuser",
    verse: "1 Corinthians 7:15",
    text: "\"But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace.\" Paul's discussion of abandonment as grounds for freedom from the marriage bond has been applied by many theologians across history to abuse — because abuse is a form of abandonment of the covenant. The specific words of the text need not be applied woodenly. The principle is: when a partner has so violated the covenant as to make the marriage unsafe, the other partner is not bound to remain in the danger.",
  },
  {
    title: "Submission Was Never Designed to Be a Tool of Harm",
    verse: "Colossians 3:19",
    text: "\"Husbands, love your wives and do not be harsh with them.\" The command not to be harsh — in Greek, pikraino, to embitter or to be harsh toward — is a direct prohibition of the emotional and relational tactics that often accompany domestic abuse. The submission passages in Ephesians and Colossians are embedded in mutual obligation frameworks: each party has responsibilities that constrain and define the other's. A husband's domination without the corresponding love and gentleness is already a violation of the text that demands submission.",
  },
  {
    title: "Protecting the Vulnerable Is a Prophetic Act",
    verse: "Isaiah 1:17",
    text: "\"Learn to do right; seek justice. Defend the oppressed.\" The prophetic tradition in Scripture is relentless about the responsibility to protect those who are being harmed by those with power over them. Domestic abuse is precisely this situation: the misuse of intimate power to harm a vulnerable person. The church that stays silent about abuse in its congregation, or counsels victims to return to danger, has aligned itself with the abuser rather than the prophetic tradition.",
  },
  {
    title: "Safety Is Not Selfishness",
    verse: "Matthew 10:23",
    text: "\"When you are persecuted in one place, flee to another.\" Jesus's instruction to his disciples — to flee when persecuted — is one of many biblical texts that normalize self-protective action when life is in danger. The Christian victim of domestic abuse who has internalized a theology in which her own safety is selfish has been given a false gospel. God values the image-bearer. Getting to safety is not a failure of faith; it is an act of faithfulness to the person God created.",
  },
];

const voices = [
  {
    id: 1,
    name: "Lundy Bancroft",
    role: "Author, Why Does He Do That?",
    quote: "Abuse is not about anger, mental illness, or addiction — though abusers use these as excuses. It is about the belief that a partner is an object to be controlled. That belief can only be changed by consequences, not by love.",
    bio: "Bancroft's work on the psychology of abusive men is the most widely used resource for people trying to understand why abuse happens and why it does not respond to the strategies — forgiveness, patience, prayer — that the church typically recommends.",
  },
  {
    id: 2,
    name: "Diane Langberg",
    role: "Psychologist, Author of Suffering and the Heart of God",
    quote: "The church that tells an abused woman to submit more carefully, pray more fervently, and try harder has put theological language in service of her continued harm. This is not pastoral care. It is abuse by proxy.",
    bio: "Langberg has spent decades working with trauma survivors and has been one of the most consistent voices calling the church to reckon with its complicity in domestic abuse through bad theology, poor training, and institutional self-protection.",
  },
  {
    id: 3,
    name: "Gretchen Baskerville",
    role: "Author, The Life-Saving Divorce",
    quote: "Divorce is not always the worst option. For victims of abuse, it is frequently the life-saving option. And the church that makes divorce the worst possible outcome has its priorities backwards: it has chosen the institution over the person.",
    bio: "Baskerville's research on Christians who have divorced abusive spouses has documented how theological barriers to divorce have kept people — particularly women — in dangerous marriages long after safety required departure.",
  },
  {
    id: 4,
    name: "Catherine Clark Kroeger",
    role: "Biblical Scholar, Co-Author No Place for Abuse",
    quote: "The texts that appear to demand that women remain in abusive marriages have been misread. The biblical framework for marriage is mutual love, service, and safety — and no text in Scripture mandates endurance of violence.",
    bio: "Kroeger's biblical scholarship on domestic abuse and the church produced one of the most important theological resources for pastors and victims navigating the intersection of Scripture and intimate partner violence.",
  },
];

const practices = [
  {
    icon: "🆘",
    title: "Safety First — Always",
    text: "If you are in immediate danger, call 911. If you need help planning a safe exit, call the National Domestic Violence Hotline at 1-800-799-7233 (SAFE). Do not tell your partner you are planning to leave before you are safely out — this is the most dangerous moment in an abusive relationship. Have an emergency bag, important documents, and a place to go planned before you need them.",
  },
  {
    icon: "🤫",
    title: "Use Safe Devices and Accounts",
    text: "If your partner monitors your devices, phone, or accounts, use a safe device — a library computer, a trusted friend's phone — to research resources. Clear your browser history after searching. The National Domestic Violence Hotline at thehotline.org has a button that immediately closes the browser window to hide your visit. Tech safety is real safety.",
  },
  {
    icon: "👩‍⚖️",
    title: "Seek Legal Advice About Your Options",
    text: "A domestic violence advocate or family law attorney can explain your legal options: protective orders, emergency custody, financial protection. Many areas have free legal aid for domestic violence victims. Knowing your legal rights before you need to use them is empowering. Many victims stay because they believe they have no legal protection — often this is not true.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Is Trained on Domestic Violence",
    text: "Not every church is equipped or safe for victims of domestic abuse. Some will pressure you to reconcile, doubt your account, or protect the abuser's reputation. Seek a church with a domestic violence policy and trained staff. The Domestic Violence Task Force (dvtaskforce.org) lists churches with training and commitments to safety.",
  },
  {
    icon: "🧠",
    title: "Get Trauma-Informed Therapy",
    text: "Domestic abuse causes complex trauma — attachment disruption, learned helplessness, self-blame, hypervigilance — that does not resolve without professional support. Seek a therapist with specific training in domestic violence and trauma. Tell them at the first session that you are a survivor of intimate partner violence so they can work appropriately.",
  },
  {
    icon: "👥",
    title: "Connect with a Domestic Violence Support Group",
    text: "Isolation is one of the primary tools abusers use to maintain control. Connection with other survivors — who understand the dynamics without judgment and whose experience validates yours — is one of the most powerful resources in recovery. Local domestic violence shelters typically offer support groups, and many faith-based groups exist online.",
  },
];

const scriptures = [
  { verse: "Psalm 82:3–4", text: "\"Defend the weak and the fatherless; uphold the cause of the poor and the oppressed. Rescue the weak and the needy; deliver them from the hand of the wicked.\"" },
  { verse: "Isaiah 61:1", text: "\"He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.\"" },
  { verse: "Proverbs 17:14", text: "\"Starting a quarrel is like breaching a dam; so drop the matter before a dispute breaks out.\"" },
  { verse: "Romans 8:1", text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\"" },
  { verse: "Matthew 10:23", text: "\"When you are persecuted in one place, flee to another.\"" },
  { verse: "Jeremiah 29:11", text: "\"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.\"" },
];

type AbuseEntry = {
  id: string;
  date: string;
  safe: string;
  honest: string;
  prayer: string;
};

export default function DomesticAbuseChristianMarriagePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AbuseEntry[]>([]);
  const [safe, setSafe] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_domesticabusechristianmarriage_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!safe.trim()) return;
    const entry: AbuseEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      safe,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_domesticabusechristianmarriage_entries", JSON.stringify(updated));
    setSafe(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_domesticabusechristianmarriage_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🛡️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Domestic Abuse in Christian Marriage
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christians experiencing abuse in marriage — pastoral theology that refuses to use Scripture to keep you in danger, practical safety information, and honest accompaniment for one of the most complex and life-threatening situations a person can face.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              <strong>National DV Hotline: 1-800-799-7233</strong> | <strong>988 Suicide & Crisis Lifeline</strong> | <strong>thehotline.org</strong> (click X to quickly exit)
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>If safety is a concern, consider using a private device or clearing this page after use.</p>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What does your safety situation look like right now — what do you need?</label>
                <textarea value={safe} onChange={e => setSafe(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What is the honest truth about your marriage and what you have experienced?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for safety, for clarity, for the courage to choose what is right:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.safe && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Safety:</strong> {e.safe}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="c_Eutx91PEE" title="Is It Okay to Leave an Abusive Marriage? — A Biblical and Pastoral Response" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Is It Okay to Leave an Abusive Marriage? A Biblical and Pastoral Response</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Biblical and pastoral engagement with the most common theological barriers that prevent Christians from leaving abusive marriages</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="UhYrSFWPFMo" title="Diane Langberg — The Church and Domestic Abuse: A Call to Change" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Diane Langberg: The Church and Domestic Abuse — A Call to Change</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Langberg on the church&apos;s historical failure to protect victims of domestic abuse and what faithful pastoral care actually looks like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="PjlO8FBcFYA" title="Safety Planning for Domestic Violence — A Practical Guide" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Safety Planning for Domestic Violence: A Practical Guide</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Step-by-step guidance on how to create a safety plan when living with an abusive partner — what to prepare, where to go, how to leave safely</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="cwtKtzKYAiQ" title="Why Does He Do That? — Lundy Bancroft on the Psychology of Abusive Men" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Why Does He Do That? Lundy Bancroft on the Psychology of Abusive Men</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The most important things every victim needs to understand about why abusers abuse — and why the approaches most commonly suggested don&apos;t work</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
