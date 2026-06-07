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
    title: "Depression in the Bible Is Not Hidden",
    verse: "Psalm 88:1–3",
    text: "Psalm 88 is one of the darkest texts in Scripture — it ends with 'darkness is my closest friend.' There is no resolution, no uplift at the end. This psalm is in the canon. God did not edit it out. The Bible makes room for depression without demanding its resolution before it will receive the sufferer.",
  },
  {
    title: "The Prophet Who Wanted to Die",
    verse: "1 Kings 19:4",
    text: "Elijah, after his greatest ministry victory, collapsed in suicidal exhaustion: 'I have had enough, Lord. Take my life.' God's response was not rebuke — it was food, water, rest, and an angel's presence. Depression after great effort is biblical. God meets the depressed with provision, not condemnation.",
  },
  {
    title: "God Does Not Despise the Crying Out",
    verse: "Psalm 22:24",
    text: "'He has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.' Jesus quotes this psalm from the cross. The cry of abandonment — 'My God, my God, why have you forsaken me?' — is heard. It is not dismissed. God does not turn away from the darkest prayer.",
  },
  {
    title: "Weakness Is Not Faithlessness",
    verse: "Romans 8:26",
    text: "'We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.' Depression often removes the capacity for speech, for prayer, for spiritual engagement. But the Spirit prays through groan and silence. Your inability to pray in the depths of depression does not suspend God's intercession for you.",
  },
  {
    title: "The Body Participates in the Soul's Darkness",
    verse: "Lamentations 3:1–2",
    text: "'I am the man who has seen affliction by the rod of the Lord's wrath. He has driven me away and made me walk in darkness rather than light.' Lamentations takes physical suffering seriously as a context for spiritual darkness. Depression is embodied. Treating the body — with medicine, sleep, movement — is part of healing the soul.",
  },
];

const voices = [
  {
    id: 1,
    name: "Andrew Solomon",
    role: "Author, The Noonday Demon",
    quote: "Depression is the flaw in love. To be depressed is to lack the feeling that things can be better — which is why treatment matters so much.",
    bio: "Andrew Solomon's landmark work on depression is not explicitly Christian, but it has been widely integrated by Christian therapists and pastors. His phenomenological descriptions of depression are among the most accurate ever written, and help those around depressed people understand what they are living inside.",
  },
  {
    id: 2,
    name: "Matthew Stanford",
    role: "Neuroscientist & Author, Grace for the Afflicted",
    quote: "Depression is not a character flaw or a spiritual weakness. It is a medical condition with spiritual dimensions — treat both.",
    bio: "Matthew Stanford has spent his career bridging the gap between clinical psychiatry and Christian faith communities. He directly challenges churches that counsel against medication for depression, insisting that the brain is an organ that can become ill — and that treating it is wisdom.",
  },
  {
    id: 3,
    name: "Tish Harrison Warren",
    role: "Author, Prayer in the Night; Anglican Priest",
    quote: "I learned to pray the Office during my depression — not because I felt it, but because the liturgy prayed for me when I couldn't.",
    bio: "Tish Harrison Warren writes candidly about depression and spiritual darkness. Her advocacy for liturgical prayer as a practice that carries the depressed person when personal prayer feels impossible has resonated deeply in Christian communities navigating mental health.",
  },
  {
    id: 4,
    name: "Kay Warren",
    role: "Author & Mental Health Advocate",
    quote: "The church must become a place where people with depression can say 'I'm not okay' without fear that they'll be told to just pray more.",
    bio: "Kay Warren, after the suicide of her son Matthew, became a leading voice for mental health awareness in evangelical Christianity. She calls churches to radical honesty about the prevalence of depression and the inadequacy of simplistic spiritual remedies.",
  },
];

const practices = [
  {
    icon: "👩‍⚕️",
    title: "Seek Medical Evaluation First",
    text: "Major Depressive Disorder responds to treatment — therapy (especially CBT), medication, or a combination. Seeking a psychiatrist or your physician is not a failure of faith. It is the same wisdom as treating any other medical condition. Do this first, not last.",
  },
  {
    icon: "📖",
    title: "Pray the Psalms of Lament",
    text: "When personal prayer is impossible, read Psalms 22, 42, 43, 88 aloud. Let someone else's words be your prayer. This is not spiritual cheating — it is the practice of the whole church across centuries. The liturgy carries us when we cannot carry ourselves.",
  },
  {
    icon: "🚶",
    title: "The Smallest Possible Movement",
    text: "Depression lies about effort. Commit to the smallest possible act: standing outside for two minutes, walking to the end of the street. Exercise is not a cure, but movement interrupts the depression cycle at a biological level. Start impossibly small and let that be enough.",
  },
  {
    icon: "🤝",
    title: "Tell One Person the Truth",
    text: "Depression thrives in silence and isolation. Name your state to one trustworthy person — not to solve it, but to break the secret. 'I'm struggling with depression and I need you to know' is a sentence that can begin healing. You don't have to manage this alone.",
  },
  {
    icon: "🌙",
    title: "Sleep Hygiene as Spiritual Discipline",
    text: "Sleep is severely disrupted in depression. Protect it: consistent bedtime and rising time, no screens in the hour before sleep, cool and dark room. Sleep is not laziness in depression — it is medicine. Give your brain the conditions it needs to recover.",
  },
  {
    icon: "📓",
    title: "Three Things That Are True",
    text: "Each day, write three things that are objectively true — not necessarily good, just true. 'The sun rose. I am breathing. God has not abandoned me.' This is not toxic positivity — it is the smallest possible anchor against depression's lie that nothing real remains.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Psalm 42:11", text: "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God." },
  { verse: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Romans 8:38–39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
];

type MDDEntry = { id: string; date: string; today: string; true1: string; prayer: string };

export default function DepressionMajorDepressiveDisorderChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MDDEntry[]>([]);
  const [today, setToday] = useState("");
  const [true1, setTrue1] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_depressionmddchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !true1.trim() && !prayer.trim()) return;
    const entry: MDDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      true1: true1.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_depressionmddchristj_entries", JSON.stringify(updated));
    setToday(""); setTrue1(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_depressionmddchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🕯️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Depression & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those living in the darkness of major depression — learning that God inhabits the
            Psalms of lament, that healing requires help, and that darkness is not the end.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are having thoughts of suicide or self-harm:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            Call or text <strong style={{ color: TEXT }}>988</strong> (Suicide & Crisis Lifeline) |{" "}
            <a href="https://www.samhsa.gov" style={{ color: GREEN }}>samhsa.gov</a> |{" "}
            <a href="https://www.nami.org" style={{ color: GREEN }}>nami.org</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 6,
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                background: tab === t ? GREEN : CARD,
                color: TEXT,
                cursor: "pointer",
                fontSize: "0.875rem",
                textTransform: "capitalize",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Write only what you can. Even one word is enough. This is your space.</p>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you today — honestly?</label>
              <textarea
                value={today}
                onChange={(e) => setToday(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is one thing that is true right now?</label>
              <textarea
                value={true1}
                onChange={(e) => setTrue1(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Anything you want to say to God — even anger or silence is welcome:</label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button
                onClick={saveEntry}
                style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}
              >
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Today: </span>{e.today}</p>}
                    {e.true1 && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>True: </span>{e.true1}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>To God: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Depression and the Christian — Finding God in the Dark" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Mental Health, Faith, and Getting Help" />
            <VideoEmbed videoId="oNpTha80yyE" title="The Psalms of Lament — When God Feels Absent" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer in the Darkness" />
          </div>
        )}
      </div>
    </div>
  );
}
