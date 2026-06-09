"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Sees the Abuse That Happened Inside the Church",
    verse: "Ezekiel 34:2-4",
    text: "Woe to the shepherds of Israel who only take care of themselves! You have not strengthened the weak or healed the sick or bound up the injured. You have ruled them harshly and brutally. God's most severe language in the prophets is reserved for shepherds who abuse the flock. The abuse that happened in the name of ministry was seen, and God does not excuse it because it wore religious clothing."
  },
  {
    title: "The Abuse Does Not Taint Your Faith — It Taints the Abuser's",
    verse: "Ezekiel 18:20",
    text: "The soul who sins is the one who will die. The sin of a pastor who abused his position belongs entirely to the pastor. The faith he claimed to represent has not been made impure by his actions — he has made himself impure. What was done to you in the name of God was not from God. The two must be separated."
  },
  {
    title: "Your Body Is Not to Blame",
    verse: "1 Corinthians 6:19-20",
    text: "Your body is a temple of the Holy Spirit, who is in you, whom you have received from God. You are not your own — you were bought at a price. When Scripture says your body is a temple, it means your body is sacred. What was done to it was a desecration — by the perpetrator. Not by you. Not by God. The sacredness of your body is the reason the abuse was a crime."
  },
  {
    title: "God Is Not the Abuser",
    verse: "Psalm 103:13-14",
    text: "As a father has compassion on his children, so the Lord has compassion on those who fear him; for he knows how we are formed, he remembers that we are dust. The God who is being asked to be trusted after clergy abuse is not the God who committed or enabled it. This distinction is real — though it may take years to feel it rather than merely know it."
  },
  {
    title: "The Church's Silence Does Not Equal God's Silence",
    verse: "Luke 18:7-8",
    text: "Will not God bring about justice for his chosen ones, who cry out to him day and night? Will he keep putting them off? I tell you, he will see that they get justice — and quickly. The institutions that covered the abuse, the leaders who silenced survivors, the communities that protected perpetrators — these did not represent God's response. He is the judge who hears the cry that was silenced."
  }
];

const voices = [
  {
    id: "v1",
    name: "Rachael Denhollander",
    role: "Lawyer, author, survivor advocate; Author, What Is a Girl Worth?",
    quote: "The value of a woman is not in her usefulness to a ministry. The response of a church to abuse tells you everything about what it actually believes — not what it says it believes.",
    bio: "Rachael Denhollander is the most theologically articulate survivor-advocate in American Christianity. Her work on clergy abuse, institutional accountability, and the theology of justice is essential for survivors navigating churches that have failed to respond faithfully."
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Psychologist; Author, Redeeming Power; 50 years treating trauma",
    quote: "Power was given to those men by the church. They used it to take rather than to give. This is not an aberration — it is what happens when churches do not build accountability structures, do not train leaders in ethics, and do not listen to survivors.",
    bio: "Diane Langberg's Redeeming Power is the definitive Christian treatment of power-based abuse in ministry contexts. She has testified before the SBC and trained thousands of clergy and counselors. Her work is essential for survivors trying to understand what happened and why the institution responded as it did."
  },
  {
    id: "v3",
    name: "Wade Mullen",
    role: "Author, Something's Not Right; Institutional abuse researcher",
    quote: "Institutions protect themselves using the same techniques that abusers use to protect themselves: minimizing, shifting blame, silencing victims, and appealing to the greater good. Recognizing these patterns helps survivors understand why the response felt so wrong.",
    bio: "Wade Mullen's research on institutional responses to abuse is essential for survivors trying to understand why the church responded so badly. His framework names the pattern — DARVO, gaslighting, image management — and gives survivors tools to evaluate whether they're receiving authentic pastoral care."
  },
  {
    id: "v4",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, The Wounded Heart",
    quote: "When abuse happens in the name of God, it does not only wound the body — it wounds the person's relationship with God, with prayer, with worship, with the entire domain of the holy. This wound requires specific, careful attention.",
    bio: "Dan Allender's The Wounded Heart specifically addresses sexual abuse by those in spiritual authority — the particular devastation of having the sacred domain weaponized. His work helps survivors navigate both the trauma healing and the spiritual healing that are intertwined."
  }
];

const practices = [
  {
    icon: "🚨",
    title: "Report to Civil Authorities — This Is a Crime",
    text: "Clergy sexual abuse is a crime in every jurisdiction. Reporting to your church leadership is not a substitute for reporting to civil authorities (police, child protective services if minors are involved). Many states now have no statute of limitations for clergy abuse. SNAP (snapnetwork.org) can connect you with legal resources and support."
  },
  {
    icon: "🧠",
    title: "Seek a Trauma-Specialized Therapist Who Is Not From Your Church",
    text: "The therapeutic relationship is one of the mechanisms of healing — and you need a therapist who has no connection to the institution. Look for a trauma-specialized therapist (EMDR, somatic therapy) via Psychology Today. The Allender Center also maintains a referral list."
  },
  {
    icon: "⛪",
    title: "You Are Not Obligated to Protect the Institution",
    text: "The church that abused you or covered abuse has no claim on your silence. You may choose to stay silent for your own reasons — but you are not theologically required to protect the ministry, the denomination, or the abuser's reputation. Protection of the abuser's reputation at the expense of truth is not what God requires."
  },
  {
    icon: "🙏",
    title: "Separate God From the Abuser — Carefully and Over Time",
    text: "For many survivors of clergy abuse, God and the abuser have become neurologically entangled. Prayer feels like revisiting the abuse. Worship triggers. This is normal and does not mean God is contaminated. A therapist and a spiritual director together can help you slowly rebuild a relationship with God that is genuinely yours."
  },
  {
    icon: "👥",
    title: "Connect With Other Survivors",
    text: "SNAP (Survivors Network of those Abused by Priests and other clergy) is the leading organization for clergy abuse survivors across denominational lines. Their community provides validation, legal guidance, and connection with people who understand the specific dynamics of clergy abuse."
  },
  {
    icon: "⚖️",
    title: "Understand That Forgiveness Does Not Mean Silence",
    text: "You will likely encounter people who invoke forgiveness as a reason for you to be quiet. Biblical forgiveness is the release of your right to personal vengeance — not the waiving of accountability, not silence, not reconciliation with the abuser, not protection of the institution. These are distortions of forgiveness theology that silence survivors."
  }
];

const scriptures = [
  { verse: "Ezekiel 34:2-4", text: "Son of man, prophesy against the shepherds of Israel; prophesy and say to them: 'This is what the Sovereign Lord says: Woe to you shepherds of Israel who only take care of yourselves! You have not strengthened the weak or healed the sick or bound up the injured.'" },
  { verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child." },
  { verse: "Luke 18:7-8", text: "And will not God bring about justice for his chosen ones, who cry out to him day and night? Will he keep putting them off? I tell you, he will see that they get justice, and quickly." },
  { verse: "Psalm 82:3-4", text: "Defend the weak and the fatherless; uphold the cause of the poor and oppressed. Rescue the weak and needy; deliver them from the hand of the wicked." },
  { verse: "Matthew 18:6", text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives." }
];

type ClergySurvivorEntry = { id: string; date: string; wound: string; godQuestion: string; step: string };

export default function ClergyAbusesurvivorsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ClergySurvivorEntry[]>([]);
  const [wound, setWound] = useState("");
  const [godQuestion, setGodQuestion] = useState("");
  const [step, setStep] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_clergyabusesurvivorj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!wound.trim()) return;
    const entry: ClergySurvivorEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), wound, godQuestion, step };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_clergyabusesurvivorj_entries", JSON.stringify(updated));
    setWound(""); setGodQuestion(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_clergyabusesurvivorj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Church Trauma & Healing</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Clergy Sexual Abuse Survivor</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the person who was supposed to shepherd you used their position to harm you. When the institution prioritized its reputation over your safety. When God and the abuser became tangled together in your nervous system. This was a crime. Your wound is real. And God is not the abuser.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for survivors of clergy sexual abuse — separating the abuser from God, and finding what Scripture actually says about shepherds who harm their flock.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Survivors, advocates, and researchers who take clergy abuse seriously — theologically, legally, and pastorally.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Steps toward safety, reporting, healing, and the slow work of separating God from the one who misrepresented him.</p>
            <div style={{ background: "#1a0808", border: "1px solid #6b2020", borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Crisis and Reporting Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — available 24/7.<br />
                <strong style={{ color: TEXT }}>RAINN: 1-800-656-HOPE (4673)</strong> — sexual assault hotline.<br />
                SNAP (Survivors Network): <strong style={{ color: TEXT }}>snapnetwork.org</strong><br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong><br />
                NetGrace (Christian abuse reporting): <strong style={{ color: TEXT }}>netgrace.org</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses that name God's response to abusive shepherds and his care for the harmed flock.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the wound, bring your questions to God, and record any step forward. Entries remain on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What wound from the abuse am I carrying today?</label>
                <textarea value={wound} onChange={e => setWound(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What question do I have for God about what happened?</label>
                <textarea value={godQuestion} onChange={e => setGodQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What small step toward safety or healing am I considering?</label>
                <textarea value={step} onChange={e => setStep(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.wound && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>WOUND</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.wound}</p></div>}
                  {e.godQuestion && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>QUESTION FOR GOD</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.godQuestion}</p></div>}
                  {e.step && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>STEP</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.step}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on clergy abuse, institutional accountability, and finding God after religious trauma.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Diane Langberg: Redeeming Power — Abuse in the Church</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Diane Langberg: Redeeming Power — Abuse in the Church" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Rachael Denhollander: Justice, Forgiveness, and Survivors</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Rachael Denhollander: Justice, Forgiveness, and Survivors" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Something's Not Right: Wade Mullen on Institutional Abuse</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Something's Not Right: Wade Mullen on Institutional Abuse" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Wounded Heart: Dan Allender on Spiritual Authority Abuse</div>
              <VideoEmbed videoId="53RX2ESIqLM" title="The Wounded Heart: Dan Allender on Spiritual Authority Abuse" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
