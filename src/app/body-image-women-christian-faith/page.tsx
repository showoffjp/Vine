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
const JOURNAL_KEY = "vine_body_image_women_entries";

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

export default function BodyImageWomenPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Body Image &amp; Women&apos;s Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            Your Body Is Not the Problem
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Women in the church are told simultaneously that their bodies are temples to be modest, vessels to be submitted, and projects to be disciplined. But the body God gave you was called good before any of those frameworks were applied to it.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NEDA Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-931-2237</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; The Body Dysmorphic Disorder Foundation: </span>
          <strong style={{ color: TEXT }}>bddfoundation.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Creation Narrative: God Called the Body Good", body: "Genesis 1:31: 'God saw all that he had made, and it was very good.' This includes the body — including the female body, made on the same day and with the same verdict. The goodness of the body is not provisional or contingent on size, shape, age, or reproductive status. The incarnation of Jesus in a physical body and the promise of bodily resurrection (not escape into disembodied spirit) confirm that the Christian faith is decisively pro-body. The problem in Christianity is never the body itself." },
              { title: "The Modesty Teaching Has Been Used to Harm Women", body: "Christian modesty culture has historically placed the burden of men's sexual thoughts on women's bodies and clothing choices. This framing makes women responsible for managing the interior lives of men by managing their own exterior presentation. The harm is documented: it contributes to body shame, to self-objectification, to victim-blaming in assault contexts, and to a relationship with the body based on its effects on others rather than on its intrinsic dignity. The body is not a moral hazard to be managed; it is a person to be honored." },
              { title: "Body-as-Temple Is Not a Weight Loss Verse", body: "1 Corinthians 6:19–20 (your body is a temple of the Holy Spirit) is among the most misused passages in American Christian diet and fitness culture. Paul wrote it in the context of sexual immorality — specifically arguing that the body matters because the Spirit indwells it, not that weight management is a spiritual discipline. Using this text to shame women about size, eating, or fitness is exegetical malpractice. The temple metaphor emphasizes the body's sacredness, not its smallness." },
              { title: "Aging and Postpartum Bodies Are Not Failures", body: "American culture (including Christian culture) treats the aging of the female body as a progressive failure — wrinkles, gray hair, weight changes after pregnancy, the body at 60 or 70 as evidence of inadequate stewardship. But the Hebrew word for a beautiful woman (yafah) appears alongside wisdom and age (Proverbs 31) without apology. The body that has borne children, survived illness, held grief, and grown old has not failed. It has lived." },
              { title: "Desire, Pleasure, and the Female Body Are Not Shameful", body: "The Song of Solomon is an erotic poem in which a woman's desire and pleasure are celebrated without apology. Her voice leads. Her body is described in rich, positive terms. The Christian tradition has sometimes treated female sexuality as primarily a danger or a concession to male need. Song of Songs tells a different story: the female body's capacity for desire and pleasure is part of what God called very good." },
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
              { name: "Sonya Renee Taylor", role: "Author of The Body Is Not an Apology", quote: "Radical self-love is not about thinking your body is perfect. It is about accepting that your body — as it is, right now — does not owe anyone an apology for existing as it exists.", note: "Taylor's framework connects individual body shame to systemic oppression — the same systems that devalue certain bodies in culture have been echoed in Christian teachings. Her work challenges women to locate the political in the personal experience of body shame." },
              { name: "Rachel Held Evans", role: "Author of A Year of Biblical Womanhood and Searching for Sunday", quote: "The female body has been the subject of more theological anxiety than almost any other topic in Christian history. And almost none of that anxiety has served women well.", note: "Evans's feminist theological writing consistently challenged the ways Christian teaching about the female body — modesty culture, complementarianism's embodied implications, the spiritualization of thinness — had caused harm to women and distorted the gospel." },
              { name: "Toni Morrison", role: "Nobel laureate novelist", quote: "Somebody told us our hair was wrong. Our skin was wrong. Our lips were wrong. Somebody convinced us to be ashamed of what we are. The most oppressive burden is to believe them.", note: "Morrison's words apply with particular force to Black women whose bodies have been subject to layers of both racial and gendered objectification and shame. Healing requires unlearning messages that were never true." },
              { name: "The Beloved in Song of Songs", role: "Biblical figure, Song of Solomon", quote: "I am dark, but lovely, O daughters of Jerusalem... Do not gaze at me because I am dark, because the sun has looked upon me.", note: "The Beloved names that her body has been scrutinized and judged, then asserts her own loveliness. She does not ask permission to be beautiful. Her voice — expressing desire, pleasure, and self-possession — is the first voice in the poem." },
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
              { title: "Audit Your Theological Sources on the Body", body: "Where have your beliefs about your body come from? List them: sermons, books, Bible studies, parents, diet culture within Christian community, social media influencers who are Christian. Then evaluate each: Is this based in Scripture as it is actually written, or in cultural assumptions that have been baptized in Christian language? This is not deconstruction for its own sake; it is the responsible practice of ensuring your beliefs about your body come from God, not from the culture's anxieties about women." },
              { title: "Therapy for Body Image Issues", body: "Body image distress — regardless of whether it meets diagnostic criteria for an eating disorder — is treatable. Cognitive Behavioral Therapy, Acceptance and Commitment Therapy, and somatic approaches all have evidence bases for body image concerns. If your body image distress is severe or is affecting your eating, seek a therapist with specific eating disorder training. NEDA (nationaleatingdisorders.org) has a provider directory." },
              { title: "Intuitive Eating as a Faith Practice", body: "Intuitive Eating — the approach developed by dietitians Evelyn Tribole and Elyse Resch — proposes returning to internal hunger and fullness cues rather than external diet rules. Its theological resonance: the body as it was made is competent to regulate itself when we stop overriding its signals. Many Christians have found Intuitive Eating to be a genuinely spiritual practice of trust and returning to how the body was designed. Laura Thomas (Just Eat It) has written about the faith dimensions of this approach." },
              { title: "Embodied Spiritual Practices", body: "Practices that connect spirituality to the body — rather than treating the body as an obstacle to spiritual life — include: walking prayer, yoga with Christian intention, breath prayer, anointing, dancing in worship, and tactile prayer objects (prayer beads, candles). The body is not the enemy of the spirit; it is the vessel through which spiritual practice is possible. Re-learning to inhabit the body as a gift rather than a problem is spiritual work." },
              { title: "Examine Your Church's Language Around Bodies", body: "Does your church's weight loss programs and fasting emphases treat body size as a spiritual matter? Are the women in leadership and visibility largely thin, young, and able-bodied? Does the modesty teaching place the burden on women? These are not trivial questions. A church culture that consistently communicates that certain bodies are more spiritually acceptable than others is communicating a theology whether or not it names it. This is worth naming." },
              { title: "Distinguish Stewardship from Moralism", body: "Health practices — exercise, nutrition, sleep, medical care — can be genuine forms of body stewardship without becoming moralized metrics of spiritual worth. The difference: stewardship asks 'what helps my body function and feel well?' Moralism asks 'what makes me a good Christian person?' Stewardship is flexible, responsive to your actual body, and non-judgmental toward other bodies. Moralism is rigid, comparative, and shame-producing. Only one of them comes from gratitude." },
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
              { ref: "Genesis 1:31", text: "God saw all that he had made, and it was very good.", note: "The female body, made on day six, received the same verdict as everything else: very good. The goodness is not conditional." },
              { ref: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.", note: "The psalmist praises God for the very construction of the body — its complexity, its particularity, its being made. This is the appropriate theological posture toward the body: gratitude, not suspicion." },
              { ref: "Song of Solomon 1:5–6", text: "I am dark, but lovely, O daughters of Jerusalem... Do not gaze at me because I am dark, because the sun has looked upon me.", note: "A woman names scrutiny of her body and asserts her own beauty. Song of Solomon celebrates the female body and female desire without apology." },
              { ref: "1 Corinthians 6:19–20", text: "Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.", note: "The temple metaphor establishes the body's sacredness. Context: Paul is addressing sexual immorality, not prescribing weight management. The body is sacred because it is indwelt." },
              { ref: "Romans 12:1", text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.", note: "The body presented to God as worship is not a body that has achieved a certain size or shape. It is a body offered in willing service — a posture of the will, not a metric of appearance." },
              { ref: "Luke 7:38", text: "She began to wet his feet with her tears and wiped them with the hair of her head and kissed his feet and anointed them with the ointment.", note: "A woman's body — her tears, her hair, her touch — became the instrument of worship. Jesus received it. He did not redirect her to a more proper, less bodily form of devotion." },
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
                placeholder="What have you been taught about your body by the church? What would it look like to see your body the way God does?"
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
            <VideoEmbed videoId="G-2e9mMf7E8" title="Your Body Is Not the Enemy — Elevation Church" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Fearfully and Wonderfully Made: Psalm 139" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Body Image, Shame, and the Gospel" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="What God Actually Says About Your Body" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Your body is not the problem. It is the place where your life happens, and it was called very good.</p>
          <p style={{ marginTop: 8 }}>NEDA: 1-800-931-2237 &nbsp;|&nbsp; nationaleatingdisorders.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
