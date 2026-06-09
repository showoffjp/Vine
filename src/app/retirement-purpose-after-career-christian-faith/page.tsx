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
const JOURNAL_KEY = "vine_retirement_purpose_entries";

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

export default function RetirementPurposePage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Retirement &amp; Purpose After Career</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Are More Than What You Did for Work
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Retirement is one of the most underaddressed transitions in church life. The loss of role, structure, and professional identity can trigger a genuine identity crisis. But this chapter was not designed to be empty — it was designed to be different.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Eldercare Locator: </span>
          <strong style={{ color: TEXT }}>1-800-677-1116</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; AARP: </span>
          <strong style={{ color: TEXT }}>aarp.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Work Was Never Your Whole Identity", body: "The Protestant work ethic — the theological strand that traced the fingerprints of God's favor in professional success and diligent labor — has produced a culture in which work is not merely what we do but who we are. This is a theological overcorrection. Genesis presents work as one calling among many — to tend the garden, to name the creatures, to be in relationship with God and one another. Work is good; it is not the whole good. Retirement does not end your calling; it changes which callings take center stage." },
              { title: "The Bible Has a Lot to Say About Elders", body: "The Hebrew and Greek words for elder (zaqen, presbuteros) imply both age and wisdom, and the biblical community is structured around receiving their counsel. Proverbs repeatedly invites the young to seek the wisdom of those who have lived. The transition from active role to advisory presence — from doing the work to being the wisdom the work requires — is built into the biblical structure of community. Retirement is not removal from the community; it is a change in how the community draws on you." },
              { title: "The Third Third of Life Has Its Own Spiritual Season", body: "Scholars of adult spiritual development — including Bill Sadler (The Third Age), Richard Rohr (Falling Upward), and James Fowler (Stages of Faith) — describe the later decades of life as capable of a depth of spiritual integration unavailable earlier. The ego structures that younger life requires — career building, family formation, achievement, proving — can give way to what Rohr calls the second half of life: wisdom, contemplation, presence, and the long view. This is not diminishment; it is maturation." },
              { title: "Depression and Grief Are Common in Retirement", body: "Clinicians and researchers have documented a retirement-related depression pattern — sometimes called the 'retirement blues' — that can affect even people who planned extensively and looked forward to retirement. The loss of structure, professional identity, daily social contact, and sense of contribution can produce genuine grief. This is not weakness. It is a normal response to a significant identity transition. If the depression is persistent, therapy and sometimes medication are appropriate and effective responses." },
              { title: "Generativity Is the Developmental Task of Later Life", body: "Psychologist Erik Erikson identified generativity — the investment in leaving something valuable for the next generation — as the central developmental task of middle and later adulthood. Christians recognize this as the call to reproduce in others what God has built in you: mentoring, writing, serving, building institutions, teaching, and bearing witness to what faithfulness looks like over a long arc. The accumulated wisdom of a long life is not wasted in retirement — it is finally free to be given away." },
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
              { name: "Richard Rohr", role: "Franciscan priest and author of Falling Upward", quote: "The first half of life is the container, and the second half is the contents. You need the container to hold the contents, but the container is not the goal. Many people spend their whole lives building the container and never discover what it was meant to hold.", note: "Rohr's two-halves-of-life framework identifies retirement as the transition into second-half living — where the ego structures of achievement and acquisition give way to deeper questions of meaning, legacy, and contemplation. Falling Upward is the essential read for this transition." },
              { name: "Paul Tournier", role: "Swiss physician and Christian writer, author of Learning to Grow Old", quote: "Retirement is not a period of waiting for death. It is a period of living that requires as much courage, creativity, and purpose as any other. Perhaps more.", note: "Tournier's work on the psychology of aging and retirement from a Christian perspective remains relevant decades after its publication. His insistence that later life is a vocation — not a vacation or a waiting room — shapes what purposeful retirement looks like." },
              { name: "Caleb", role: "Old Testament figure, Numbers 14 and Joshua 14", quote: "I am still as strong today as I was in the day that Moses sent me; my strength now is as my strength was then, for war and for going and coming. So now give me this hill country.", note: "Caleb was 85 when he asked for the difficult territory — the hill country still occupied by Anakim. His later life was characterized by forward movement and holy ambition. The text celebrates this." },
              { name: "Anna the prophet", role: "New Testament figure, Luke 2", quote: "And there was a prophetess, Anna... She was advanced in years, having lived with her husband seven years from when she was a virgin, and then as a widow until she was eighty-four. She did not depart from the temple, worshiping with fasting and prayer night and day.", note: "Anna's later life was a life of prayer, presence, and recognition — she was the one who recognized Jesus when he was presented in the temple. Her vocation deepened with age, not diminished." },
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
              { title: "Design Your Days Deliberately", body: "Retirement's freedom is also its danger. Without imposed structure, many retirees experience anxiety, depression, and a loss of self. Deliberate day design — choosing specific activities for morning, midday, and evening; planning social connection, physical movement, and meaningful engagement — is not rigid but protective. The monastic tradition understood this: structured time enables freedom, rather than eliminating it." },
              { title: "Find the Mentoring Role", body: "You have accumulated expertise that others need. The question is not whether you have wisdom to offer, but how to route it to those who can receive it. Mentoring options include: formal mentoring programs through professional associations or community organizations, SCORE (score.org — free business mentoring for entrepreneurs), youth mentoring through Big Brothers Big Sisters, literacy tutoring, and church-based discipleship relationships. The accumulated wisdom of your career is worth passing on." },
              { title: "Engage the Life Review Practice", body: "Gerontologists have documented the therapeutic and spiritual value of life review — a structured process of narrating and integrating the arc of your life. This can be done in therapy (Reminiscence Therapy), through spiritual direction, in a memoir writing group, or in conversation with a trusted companion. The goal is not nostalgia but integration: making sense of the whole, finding coherence, and arriving at what Erikson called ego integrity — the sense that your life has been meaningful, even with its failures." },
              { title: "Voluntary Service and Encore Careers", body: "Programs like the Peace Corps RPCV network, AmeriCorps Seniors (formerly RSVP), and the AARP Foundation's Experience Corps place retirees in high-impact volunteer roles. Encore.org connects people over 50 with paid or volunteer opportunities in the social good sector. Many retirees find that part-time, meaningful work — not for income but for contribution — provides the structure and purpose they most miss from their careers." },
              { title: "Address the Marriage Transition in Retirement", body: "Retirement is a significant marriage stressor — particularly when both spouses retire simultaneously or when one has worked and the other has not. Patterns of autonomy, decision-making, social networks, and time organization all shift. Couples who navigate this well tend to have explicit conversations about expectations, space, and routines before retirement and throughout the transition. A few sessions of couples therapy at this transition are well-invested." },
              { title: "Spiritual Direction for the Third Third", body: "Spiritual direction — a practice of meeting regularly with a trained spiritual director to reflect on your experience of God — is particularly valuable in retirement, when the structures that previously mediated spiritual life (workplace, community roles, organizational memberships) have fallen away. Many retirees find that the spaciousness of retirement reveals both a deeper hunger for God and a need for a new vocabulary for that hunger. Spiritual Direction International (sdicompanions.org) has a global directory of directors." },
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
              { ref: "Joshua 14:11–12", text: "I am still as strong today as I was in the day that Moses sent me; my strength now is as my strength was then... So now give me this hill country.", note: "Caleb at 85 was not coasting. He asked for the hardest territory. Later life in Scripture is not passive waiting; it is engagement with the tasks only experience can handle." },
              { ref: "Proverbs 16:31", text: "Gray hair is a crown of glory; it is gained in a righteous life.", note: "Age in the Hebrew tradition was not a problem to be concealed but a mark of honor. A long life faithfully lived was visible evidence of wisdom." },
              { ref: "Psalm 71:17–18", text: "O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, to all those to come.", note: "The psalmist's prayer in old age is not for comfort but for the capacity to continue bearing witness — to transmit what has been learned across the generations. Generativity as prayer." },
              { ref: "Titus 2:2–4", text: "Older men are to be sober-minded, dignified, self-controlled, sound in faith, in love, and in steadfastness. Older women likewise are to be reverent in behavior... teaching what is good, and so train the young women.", note: "Paul assigns older members of the community a specific teaching vocation toward the young. The transmission of wisdom is their calling, not their retirement from calling." },
              { ref: "Isaiah 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save.", note: "God's faithfulness does not diminish with age. The one who carried you at the beginning carries you still. This is not condescension but covenant fidelity." },
              { ref: "Luke 2:36–38", text: "And there was a prophetess, Anna... She did not depart from the temple, worshiping with fasting and prayer night and day. And coming up at that very hour she began to give thanks to God and to speak of him to all who were waiting for the redemption of Jerusalem.", note: "Anna's vocation peaked in her eighties. She recognized what priests and scribes missed. Long years of faithfulness made her eyes sharp." },
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
                placeholder="What has surprised you about this transition? What wisdom have you accumulated that has nowhere to go yet? What do you want the next chapter to look like?"
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
            <VideoEmbed videoId="G-2e9mMf7E8" title="Purpose After 60: The Second Half of Life" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Your Story Is Not Over — Finding Meaning in Every Season" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Gray Hair Is a Crown — Biblical Vision for Aging" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Generativity: Leaving Something Real for the Next Generation" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You are more than what you did for work. And the wisdom you carry is needed by people who do not yet know they need it.</p>
          <p style={{ marginTop: 8 }}>AARP: aarp.org &nbsp;|&nbsp; Eldercare Locator: 1-800-677-1116 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
