"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_trafficking_survivor_entries";
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

export default function TraffickingSurvivor() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Trauma & Healing</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Sex Trafficking Survivor Recovery and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>You are not what was done to you. Your body was exploited. Your dignity was not.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Safety First:</strong> National Human Trafficking Hotline: <strong>1-888-373-7888</strong> (24/7, confidential) &nbsp;|&nbsp; Text HELP to <strong>233733</strong> &nbsp;|&nbsp; RAINN: <strong>1-800-656-4673</strong> &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>What Was Done to You Is Not Who You Are</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Trafficking is a crime of exploitation. It is done to a person, not chosen by them. Even when traffickers use coercion that involves apparent consent, the manipulation, grooming, threats, and dependency structures that trafficking produces mean that nothing about participation was free. Christian theology insists that what is done to a person does not define who they are. Your identity is not constituted by the exploitation you survived. It is constituted by the God who made you in his image before any harm came near you, and who names you beloved. No trafficker, no exploit, no past chapter can revise the identity that was given before time began.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The God Who Goes After the Lost</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In Luke 15, Jesus told three stories in a row about things that are lost — a sheep, a coin, a son. In each story, the owner does not wait for the lost thing to find its own way back. The shepherd leaves the ninety-nine. The woman sweeps the whole house. The father runs down the road. These stories are told in response to the religious leaders&apos; criticism that Jesus was eating with sinners and outcasts — people the religious establishment had written off. Jesus&apos;s explicit claim is that God seeks the lost with the same urgency that a shepherd seeks a missing sheep, that a woman seeks a lost coin. If your experience has left you feeling like someone God has given up on or set aside — that is not the God of Luke 15.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Body Is Sacred, Not Ruined</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>One of the most devastating lies that trafficking implants is that the survivor&apos;s body has been permanently ruined, contaminated, or made worthless by what happened. Christian theology about the body stands directly against this. Paul writes that the body is a temple of the Holy Spirit (1 Corinthians 6:19–20). Jesus took on a physical body in the Incarnation and was raised in a physical body at the Resurrection — the body is not an unfortunate container for the soul but a precious, honored part of what God made. Your body was exploited. It was not ruined. The Spirit of God has not vacated it. Your body can still be a site of dignity, healing, and belonging.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Church&apos;s Obligation — and Frequent Failure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many faith communities have engaged anti-trafficking work through rescue and awareness campaigns while failing to provide the long-term, non-judgmental pastoral care that survivors need. Some have inadvertently communicated that survivors are sources of shame or that certain histories disqualify people from full membership in the community. This is not the posture of Jesus toward those who had been sexually exploited in his own society (Luke 7:36–50). The church that does not welcome, protect, and walk long-term with survivors of trafficking has misread its own Scriptures. Survivors deserve communities where they will not be asked to perform their stories for awareness campaigns and will not be treated as either projects or pariahs.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Healing as Long, Slow, Non-Linear</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Complex trauma recovery does not follow a clean arc. There are periods of stability followed by triggers. There are days of clarity followed by weeks of fog. Healing is not a failure when it takes longer than expected or when it requires returning to the same wound from a different angle. The psalmist returns to the same laments multiple times across the Psalter. The disciples needed Jesus to appear to them multiple times after the Resurrection before their fear became faith. If your healing is slow and non-linear, you are not failing. You are healing in the only way human beings actually do.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Rachel Moran", title: "Paid For: My Journey through Prostitution", quote: "You do not heal from trafficking by being told you were a victim. You heal by being treated as a full person, with the complexity and contradictions and survival strategies and grief that any full person has." },
              { name: "Christine Caine", title: "Undaunted", quote: "God does not ask you to have it all together before he reaches for you. He reaches for you in the middle of the mess and the wreckage — and then he works the restoration from the inside out." },
              { name: "Judith Herman", title: "Trauma and Recovery", quote: "Recovery can take place only within the context of relationships; it cannot occur in isolation. In this sense, the restoration of the social world is the central task of recovery from complex trauma." },
              { name: "Elaine Storkey", title: "Scars Across Humanity", quote: "Violence against women and girls — including sexual exploitation — is one of the clearest indicators of the depth of sin in human societies. The gospel names this as wrong, not acceptable. It does not ask women to absorb it as their portion." },
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
              { title: "National Human Trafficking Hotline", body: "1-888-373-7888 (24/7, confidential) or text HELP to 233733. Operated by Polaris Project, this hotline connects survivors with local services, emergency shelter, legal advocacy, case management, and survivor support programs. They have extensive knowledge of survivor-led organizations and trauma-informed care providers in most regions." },
              { title: "Survivor-Led Organizations", body: "GEMS (Girls Educational and Mentoring Services, gems-girls.org), founded by Rachel Lloyd — herself a survivor — is one of the premier survivor-led organizations. FAIR Girls (fairgirls.org), Thistle Farms (thistlefarms.org), and Covenant House (covenanthouse.org) provide housing, employment, and long-term survivor support. Survivor-led programs have the highest outcomes because they are built by people who understand the experience from the inside." },
              { title: "Trauma-Specialized Therapy", body: "Complex trauma from trafficking requires trauma-specialized therapy — EMDR, somatic experiencing, or trauma-focused CBT. Survivorship (survivorship.org) and the National Center for Trauma-Informed Care (NCTIC) can help locate providers. Therapy is most effective when the therapist has specific training in complex trauma and ideally experience with trafficking survivors." },
              { title: "Safe Housing", body: "Safe, stable housing is the foundation of recovery — nothing else is possible without it. Covenant House (covenanthouse.org) serves youth. The National Trafficking Hotline maintains a database of safe housing programs. Many cities have survivor-specific transitional housing programs; hotline staff can help identify what is available locally." },
              { title: "Legal Advocacy and Vacating Convictions", body: "Many trafficking survivors have criminal records from offenses that occurred during exploitation. Most states now have vacatur laws that allow survivors to clear trafficking-related convictions. The Polaris Project (polarisproject.org) has state-by-state guidance. Legal aid organizations and anti-trafficking nonprofits can help navigate the vacatur process." },
              { title: "Thistle Farms and Economic Empowerment", body: "Thistle Farms (thistlefarms.org), founded by Becca Stevens, provides survivors with employment, community, and economic empowerment through social enterprise. They employ survivors in their skincare and paper products business. Economic independence is essential to sustained recovery — Thistle Farms is one of the most theologically grounded models for how this works." },
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
              { ref: "Luke 15:4–5", text: "Suppose one of you has a hundred sheep and loses one of them. Does he not leave the ninety-nine in the open country and go after the lost sheep until he finds it? And when he finds it, he joyfully puts it on his shoulders." },
              { ref: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
              { ref: "1 Corinthians 6:19–20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
              { ref: "Luke 7:47–48", text: "Therefore, I tell you, her many sins have been forgiven — as her great love has shown. But whoever has been forgiven little loves little. Then Jesus said to her, Your sins are forgiven." },
              { ref: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
              { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
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
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone. Write only what feels safe to write.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="This space is yours. Write what you need to write."
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Identity Beyond What Was Done to You — A Faith Perspective" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The God Who Seeks the Lost — Luke 15 and Survivor Recovery" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Healing from Complex Trauma — The Long Path Forward" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Body Is Not Ruined — A Theology of Embodiment and Recovery" />
          </div>
        )}
      </div>
    </div>
  );
}
