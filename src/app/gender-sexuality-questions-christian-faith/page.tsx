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

const JOURNAL_KEY = "vine_gender_sexuality_questions_entries";
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

export default function GenderSexualityQuestions() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Identity & Faith</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Gender and Sexuality Questions in Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>Navigating deep questions about who you are and how faith speaks to it — with honesty, care, and room to breathe.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Crisis Support:</strong> Trevor Project: <strong>1-866-488-7386</strong> (LGBTQ+ youth) &nbsp;|&nbsp; Trans Lifeline: <strong>877-565-8860</strong> &nbsp;|&nbsp; 988 Lifeline &nbsp;|&nbsp; Crisis Text: text START to <strong>678678</strong>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>This Page Holds the Question Open</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christians hold a range of convictions on questions of gender and sexuality, with faithful, Scripture-serious people on multiple sides of these conversations. This page does not exist to settle those debates. It exists to be a place where someone who is experiencing genuine questions, confusion, or pain around their gender or sexuality can encounter the unambiguous message that they are loved by God, that their questions deserve serious engagement rather than dismissal, that they are not required to have it all figured out, and that the most dangerous pastoral response — the one that has cost lives — is making people feel they must choose between their faith and their identity before they are ready or able to hold both.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>You Are Loved — Without Condition and Without Exception</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Whatever your questions, whatever your experience, whatever conclusions you are working toward: the love of God for you is not contingent on your having these questions resolved. Romans 8:38–39 makes the most comprehensive case in Scripture for the indestructibility of that love: neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation will be able to separate you from the love of God in Christ Jesus. The questions you are carrying are not beyond the reach of that love. You are not on the wrong side of the door.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Pastoral Emergency</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Regardless of one&apos;s theological convictions about gender and sexuality, the data on what happens to LGBTQ+ people who do not feel accepted by their families and faith communities is not ambiguous: dramatically higher rates of depression, anxiety, suicidality, and homelessness. Acceptance and support from even one person in a young person&apos;s life reduces suicide risk significantly. The pastoral emergency is not that someone is asking questions about their gender or sexuality. The pastoral emergency is leaving them to face those questions alone, with condemnation and rejection as the only available responses. Whatever your theology, the response that saves lives is one that communicates: you are not alone, you are loved, and I am not going anywhere.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Space to Take the Time You Need</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many people who are navigating questions about gender or sexuality in a Christian context feel intense pressure to arrive at conclusions quickly — either to adopt a fully affirming theology or to fully conform to traditional expectations. Both pressures can be harmful. These questions deserve time, honest engagement with Scripture and tradition, conversation with people who hold different views, and the freedom to sit with uncertainty without being forced to perform conclusions you have not genuinely reached. Faith has always had a place for wrestling — Jacob&apos;s name means one who wrestles with God, and that name was given as a mark of honor, not shame.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Danger of Conversion Practices</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Conversion therapy and practices designed to change sexual orientation or gender identity have been rejected by every major medical and mental health organization because they do not work and they cause serious harm. Many survivors of these practices experience depression, PTSD, and increased suicidality as direct results. The American Psychological Association, the American Medical Association, the American Academy of Pediatrics, and many others are unambiguous on this. If someone has told you that prayer, counseling, or another practice can change your orientation or gender experience — the evidence does not support that claim, and the harm from pursuing it is well-documented.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Wesley Hill", title: "Washed and Waiting", quote: "I am, as Paul says, a new creation in Christ. And I have a thorn in the flesh. These two things are both true, and I am not required to resolve the tension between them before I am welcome at the table." },
              { name: "Justin Lee", title: "Torn: Rescuing the Gospel from the Gays-vs-Christians Debate", quote: "The debate has always been framed wrong. It isn't gay people versus Christians. There are gay Christians. The question is what faithful discipleship looks like for them — and the answers are more complex than either side usually admits." },
              { name: "Rachel Held Evans", title: "Searching for Sunday", quote: "The church is not a place for people who have it together. It is a place for people who are broken and confused and asking and sometimes angry. If it is not safe for LGBTQ people to bring their questions there, it is not fully the church." },
              { name: "Brandan Robertson", title: "True Inclusion", quote: "Inclusion is not a theological position. It is a posture. You can hold any theology you want and still choose to include — to not leave people isolated with their questions, to not make the condition of presence the resolution of doubt." },
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
              { title: "Trevor Project (trevorproject.org)", body: "24/7 crisis support for LGBTQ+ youth: 1-866-488-7386. The Trevor Project also provides TrevorSpace, a safe online community for LGBTQ+ youth, and TrevorText. If you are under 25 and struggling, this is the right first contact." },
              { title: "Q Christian Fellowship (qchristian.org)", body: "A community of LGBTQ+ Christians and allies who are committed to following Jesus while holding diverse views on sexuality and theology. They host an annual conference, online community, and local chapter network. This is a space where people can be both gay and Christian, whatever their theology about what that means for their lives." },
              { title: "Spiritual Direction with an Affirming or Generous Presence", body: "Finding a spiritual director who will accompany you in your questions without pressure to reach predetermined conclusions is valuable. Spiritual Directors International (sdiworld.org) has a directory; ask specifically about their experience with LGBTQ+ people and questions of sexuality and faith. Many spiritual directors are trained to hold these questions with genuine openness." },
              { title: "Generous Spaciousness — Wendy VanderWal Gritter", body: "Wendy VanderWal Gritter&apos;s organization New Direction (newdirection.ca) and her book Generous Spaciousness offer a framework for churches and individuals who want to hold the theological questions with more nuance and less pressure. This resource is useful whether you are gay or are a pastor/parent trying to walk alongside someone who is." },
              { title: "Therapy with an LGBTQ+-Affirming Provider", body: "Whatever one&apos;s theological convictions, working with a therapist who will not apply conversion practices and who will accompany the full person — including their faith — is important. Psychology Today (psychologytoday.com) allows filtering by LGBTQ+ affirmative therapy. The Trevor Project&apos;s resource guide also has therapy referrals." },
              { title: "Time and Community — Both Matter", body: "Navigating gender and sexuality questions in a Christian context takes time. It is not safe to rush. It is also not safe to do alone. Finding even one or two people who will stay with you through the questions — not requiring you to have answers, not abandoning you if your conclusions differ from theirs — is the most protective factor available. That person might be a pastor, a counselor, a friend, a spiritual director, or an online community." },
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
              { ref: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
              { ref: "Genesis 32:28", text: "Your name will no longer be Jacob, but Israel, because you have struggled with God and with humans and have overcome." },
              { ref: "Isaiah 56:3–5", text: "Let no foreigner who is bound to the Lord say, the Lord will surely exclude me from his people. And let no eunuch complain, I am only a dry tree. For this is what the Lord says: To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters." },
              { ref: "Psalm 139:1–4", text: "You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar. You discern my going out and my lying down; you are familiar with all my ways. Before a word is on my tongue you, Lord, know it completely." },
              { ref: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
              { ref: "Matthew 5:3", text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
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
                placeholder="What are you actually asking? What are you afraid will happen if you say it out loud? What do you need right now?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="You Are Loved — Nothing Can Separate You from God" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Wrestling with God — Faith and the Questions That Won't Go Away" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Generous Spaciousness — A Different Conversation about Faith and Sexuality" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Pastoral Emergency — Why Acceptance Saves Lives" />
          </div>
        )}
      </div>
    </div>
  );
}
