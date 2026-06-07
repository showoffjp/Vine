"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_chronic_loneliness_entries";
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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ChronicLoneliness() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Loneliness & Belonging</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Chronic Loneliness, Single Life, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When community is promised but elusive, when singleness feels like exile rather than calling, and when God seems far away in the crowd.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline (anytime) &nbsp;|&nbsp; Crisis Text Line: text HOME to <strong>741741</strong> &nbsp;|&nbsp; Meet Up (community): meetup.com
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Church Has Failed Single Adults</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Contemporary evangelical Christianity is deeply couple-and-family oriented. Sunday services are often designed around families. Small groups are couples groups. Sermon illustrations are about spouses and children. Single adults — especially those who have not chosen singleness but simply find themselves unmarried in their thirties, forties, fifties — can feel profoundly invisible in this environment, as if the community was built for a life they do not have. This is a failure of ecclesiology, not a reflection of God&apos;s design. Jesus was single. Paul was single. Paul explicitly argued in 1 Corinthians 7 that singleness is a gift with distinct spiritual advantages, not a problem to be solved. The church that treats all adult life as preparation for marriage is reading Scripture selectively.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>It Is Not Good to Be Alone — and God Knew That First</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In the creation narrative, before the Fall, before any sin had entered the world, God looked at Adam and said: It is not good for the man to be alone (Genesis 2:18). The statement stands alone in the first two chapters of Genesis, where everything else is good. Aloneness is the first thing God named as not good. This is not a statement about marriage — it is a statement about human beings&apos; fundamental need for community, witness, and interdependence. Your loneliness is not a spiritual deficiency. It is your most basic nature crying out for what it was made for. And God took it seriously enough to respond to it before anything else went wrong in the world.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Chronic Loneliness and the Theology of Lament</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The Psalms contain more lament than any other genre. Psalm 25:16: Turn to me and be gracious to me, for I am lonely and afflicted. The word lonely here in Hebrew is yachid — solitary, isolated, unique in a way that feels like exile. The psalmist does not explain away the loneliness or reframe it as gift. He brings it directly to God as a cry for help. Chronic loneliness is a legitimate subject of prayer, of lament, of honest complaint to God. The God who said it is not good to be alone is the same God who receives your cry about being alone. You do not have to perform contentment you do not feel.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Difference Between Loneliness and Solitude</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Henri Nouwen made a crucial distinction: loneliness is the pain of unwanted aloneness; solitude is the chosen, fruitful aloneness that becomes the ground of genuine encounter with God and others. Most people who are chronically lonely are not lacking in solitude — they have too much involuntary aloneness. The spiritual work is not to reframe loneliness as solitude, as if renaming the pain makes it disappear. The work is to find genuine community, and in the meantime, to bring the loneliness itself into relationship with God rather than letting it fester in silence. The pain is real. It deserves honest acknowledgment, not spiritual bypass.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Chosen Family and the New Creation Community</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When Jesus was told that his mother and brothers were outside wanting him, he gestured to his disciples and said: Here are my mother and my brothers! Whoever does the will of my Father in heaven is my brother and sister and mother (Matthew 12:49–50). The kingdom creates new kinship structures that are not reducible to bloodlines or marriage. For single adults who are lonely, the invitation is not merely to wait for marriage — it is to build the intentional, committed relationships that constitute genuine family. This requires both the individual&apos;s initiative and a church community willing to structure itself around single people&apos;s need for belonging, not just their tolerance of it.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Wesley Hill", title: "Spiritual Friendship", quote: "What the church needs is not more programs for singles but a recovery of the ancient practice of spiritual friendship — the kind of committed, non-romantic, lifelong love that Gregory of Nazianzus had with Basil of Caesarea. That is the missing institution." },
              { name: "Henri Nouwen", title: "Reaching Out: The Three Movements of the Spiritual Life", quote: "Loneliness is one of the most universal sources of human suffering today. Yet if our loneliness is not avoided as a painful sensation but accepted as a potential source of human growth, we can discover that our pain is not a sign of isolation but a call to solidarity." },
              { name: "Vivek Murthy", title: "Together: The Healing Power of Human Connection", quote: "Loneliness is a signal, like hunger or pain, that something we need for survival is missing. We are wired for connection. When we lack it, we suffer — physically, mentally, and spiritually." },
              { name: "Sam Allberry", title: "7 Myths About Singleness", quote: "The church is not plan B for people who could not get married. It is the primary family to which we all belong. Singleness is a full life, not a waiting room." },
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
              { title: "Invest in a Few, Not Many", body: "Research shows that loneliness is not primarily about the quantity of social contact but the quality of belonging and being known. Rather than trying to meet more people, identify 2–3 people you would like to invest in deeply and be deliberately more vulnerable and present with them. Dr. Vivek Murthy recommends 15 minutes of genuine connection per day with someone you care about." },
              { title: "Find a Third Place", body: "Sociologist Ray Oldenburg coined the term for social environments that are neither home nor work — coffee shops, clubs, faith communities, neighborhood gathering spots. Regular presence in a consistent third place with the same people over time builds the slow accumulation of familiarity that becomes belonging. Show up to the same places consistently, not perfectly." },
              { title: "Spiritual Direction or Companionship", body: "A spiritual director is not a therapist — they are a trained companion for the inner life. For single adults who lack the daily intimacy of a shared household, spiritual direction provides a structured relationship of genuine attentiveness. Spiritual Directors International (sdiworld.org) has a global directory." },
              { title: "Therapy — Loneliness Has Cognitive Roots", body: "Chronic loneliness often involves cognitive patterns — hypervigilance to rejection, misreading of social cues, withdrawal in anticipation of rejection — that maintain themselves. CBT and interpersonal therapy have strong evidence for addressing these patterns. Psychology Today (psychologytoday.com) and Open Path Collective (openpathcollective.org) connect people with affordable therapists." },
              { title: "Serve Alongside Others", body: "Shared mission creates connection faster than shared recreation. Find a volunteer opportunity that puts you in sustained contact with the same group of people over time — not a one-day event but a regular commitment. The belonging develops in the space between meetings: the shared history, the common goal, the being-known-through-what-you-do." },
              { title: "Honest Conversation with Your Church", body: "If your faith community does not serve single adults well, name it — graciously but directly. Ask if there are others who feel similarly invisible. Offer to help design something different. The church should not require you to be married to fully belong." },
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
              { ref: "Genesis 2:18", text: "The Lord God said, It is not good for the man to be alone. I will make a helper suitable for him." },
              { ref: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted." },
              { ref: "Matthew 12:49–50", text: "Pointing to his disciples, he said, Here are my mother and my brothers! For whoever does the will of my Father in heaven is my brother and sister and mother." },
              { ref: "1 Corinthians 7:7–8", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do." },
              { ref: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
              { ref: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you." },
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
                placeholder="When do you feel it most acutely? What kind of connection do you most long for?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Loneliness, Belonging, and the Community We Were Made For" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Single, Lonely, and Faithful — A Different Conversation" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="God Sets the Lonely in Families — Psalm 68 and the Church" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Spiritual Friendship — A Recovered Ancient Practice" />
          </div>
        )}
      </div>
    </div>
  );
}
