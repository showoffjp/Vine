"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Rest Is Not Idleness — It Is Created Order",
    verse: "Genesis 2:2-3",
    text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. And God blessed the seventh day and made it holy, because on it he rested. Rest is built into creation by the Creator himself. For those with chronic fatigue, rest is not a failure to produce — it is an alignment with the rhythm God designed. You are not laziness. You are a body insisting on what God built into the fabric of time."
  },
  {
    title: "God Meets the Exhausted With Bread, Not Rebuke",
    verse: "1 Kings 19:5-7",
    text: "An angel touched Elijah and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again. The angel of the Lord came back a second time. God's response to Elijah's exhaustion was not theological instruction, not correction, not challenge — it was bread and water and more rest. He met the body's need before addressing the soul's despair."
  },
  {
    title: "Weakness Is Not Spiritual Deficiency",
    verse: "2 Corinthians 12:9",
    text: "My grace is sufficient for you, for my power is made perfect in weakness. Paul's thorn in the flesh was not removed — it was given meaning within the framework of grace. The weakness itself became the location of God's strength. Chronic fatigue does not disqualify you from bearing the presence of Christ. It may be the precise form your faithfulness takes."
  },
  {
    title: "The Body Is Not Separate From the Spiritual Life",
    verse: "Romans 8:23",
    text: "We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for the redemption of our bodies. The body that groans with chronic fatigue is not spiritually separate from the one who prays. Paul places bodily longing inside the Spirit's work, not outside it. The body's suffering is already in God's field of redemption."
  },
  {
    title: "You Are Not Required to Be More Than You Are",
    verse: "Psalm 103:14",
    text: "He knows how we are formed; he remembers that we are dust. God does not require of you what your body cannot give. He does not evaluate your spiritual life against a body that does not have chronic fatigue. He knows you are dust — and he meets the dust."
  }
];

const voices = [
  {
    id: "v1",
    name: "Kate Bowler",
    role: "Professor, Duke Divinity; Author, No Cure for Being Human",
    quote: "I had to learn that the life I was living in this body — limited, unpredictable, exhausting — was not a lesser life. It was still my life. And God had not abandoned it.",
    bio: "Kate Bowler writes extensively on the theology of limited bodies — her own experience with a life-altering diagnosis gives her a particular kind of authority for those with chronic illness. Her theology refuses the prosperity gospel's demand that faithful people recover."
  },
  {
    id: "v2",
    name: "Joni Eareckson Tada",
    role: "Founder, Joni and Friends; Author, A Place of Healing",
    quote: "God sometimes heals. He often doesn't. And in the not-healing, something else is happening — something that looks less like recovery and more like the slow formation of someone who knows God in a way that health never would have allowed.",
    bio: "Joni Tada has spent 50 years navigating faith in a permanently limited body. Her theology of suffering without recovery is essential for those with chronic fatigue who have prayed for healing and found the answer to be something other than yes."
  },
  {
    id: "v3",
    name: "Amy Julia Becker",
    role: "Author, White Picket Fences and To Be Made Well",
    quote: "Limitation is not a problem to be solved — it is a human condition to be inhabited. And the Christian tradition has resources for inhabiting it with honesty and hope.",
    bio: "Amy Julia Becker's theology of limitation and healing is grounded in both her own family's experience with disability and her rigorous engagement with Christian theology. She is essential for those navigating chronic illness's challenge to the theology of flourishing."
  },
  {
    id: "v4",
    name: "Esther Fleece Allen",
    role: "Author, No More Faking Fine",
    quote: "The Psalms are full of people who were not okay. Learning to lament — to tell God the truth about our pain — is not a spiritual retreat; it is a spiritual advance.",
    bio: "Esther Fleece Allen's work on biblical lament is particularly relevant for those with chronic fatigue who feel they must project spiritual health they do not feel. She gives permission to tell God the actual truth — and finds that this is where healing begins, not where it ends."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Pursue Accurate Diagnosis",
    text: "ME/CFS (myalgic encephalomyelitis/chronic fatigue syndrome), fibromyalgia, POTS, Lyme disease, and other conditions are often misdiagnosed or dismissed. The ME Association, Bateman Horne Center, and Solve ME/CFS Initiative maintain provider directories for ME/CFS-literate practitioners. Correct diagnosis matters — not because it guarantees treatment, but because being believed matters."
  },
  {
    icon: "⚡",
    title: "Understand Pacing and Post-Exertional Malaise",
    text: "For ME/CFS specifically, 'push through it' is contraindicated — post-exertional malaise (PEM) means exceeding your energy envelope causes worsening symptoms. Pacing — staying within your energy limits deliberately — is the most evidence-supported management strategy. This is not giving up; it is wisdom."
  },
  {
    icon: "🙏",
    title: "Reshape Your Prayer Life for Your Body",
    text: "A prayer life designed for a healthy body (long periods of sustained attention, daily devotionals, regular church attendance) may not be workable. Short prayers count. The Jesus Prayer ('Lord Jesus Christ, son of God, have mercy on me, a sinner') is the prayer of people who have nothing else to offer. A single sentence to God is a full prayer."
  },
  {
    icon: "👥",
    title: "Find Community With Other Chronically Ill Christians",
    text: "The isolation of invisible illness in a church culture that often equates faithfulness with productivity is profound. Joni and Friends, Chronic Joy (chronic-joy.org), and online chronic illness Christian communities offer connection with others who understand the specific spiritual terrain of an ill body in a wellness-culture church."
  },
  {
    icon: "⛪",
    title: "Help Your Church Understand Invisible Illness",
    text: "Many churches do not know how to include those who cannot attend consistently, participate physically, or volunteer reliably. You are not required to manage others' discomfort with your illness. But if you have energy for it, articulating your experience to a pastor or small group leader can open the door to the community you deserve."
  },
  {
    icon: "📖",
    title: "Read the Theology of Limitation and Healing",
    text: "Amy Julia Becker's To Be Made Well and Kate Bowler's No Cure for Being Human are essential. Joni Tada's A Place of Healing directly addresses those who have prayed for healing and received something else. These books are not resignation — they are realistic hope."
  }
];

const scriptures = [
  { verse: "1 Kings 19:5-7", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Psalm 103:13-14", text: "As a father has compassion on his children, so the Lord has compassion on those who fear him; for he knows how we are formed, he remembers that we are dust." },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." }
];

type FatigueEntry = { id: string; date: string; today: string; limit: string; prayer: string };

export default function ChronFatigueFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FatigueEntry[]>([]);
  const [today, setToday] = useState("");
  const [limit, setLimit] = useState("");
  const [prayer, setPrayer] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_chronicfatiguefaithj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: FatigueEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), today, limit, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicfatiguefaithj_entries", JSON.stringify(updated));
    setToday(""); setLimit(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicfatiguefaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Chronic Illness & Faith</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Chronic Fatigue & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the exhaustion doesn't lift. When doctors dismiss it and the church doesn't know what to do with it. When you can't show up the way you used to, and the guilt adds a second weight. Your body is not your spiritual enemy. God meets you where you are.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for living faithfully in a body defined by fatigue — and for finding that God is not absent from the bed of exhaustion.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Those who know what it is to inhabit a limited body and still speak of God with honesty and hope.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Medical, relational, and spiritual practices for navigating chronic fatigue without losing your faith or your self.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — chronic illness is a significant risk factor for depression and suicidal ideation.<br />
                Chronic Joy: <strong style={{ color: TEXT }}>chronic-joy.org</strong><br />
                Joni and Friends: <strong style={{ color: TEXT }}>joniandfriends.org</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the weary — who are permitted to rest, to groan, and to be met by God exactly where the exhaustion is.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for the day-by-day reality of life with chronic fatigue — what is true today, what your limits are, and what prayer you can offer. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>How is my body doing today — honestly?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What is my energy limit today, and what does honoring that look like?</label>
                <textarea value={limit} onChange={e => setLimit(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What prayer — even one sentence — can I offer from where I am?</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.today && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>TODAY</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.today}</p></div>}
                  {e.limit && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>LIMIT</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.limit}</p></div>}
                  {e.prayer && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PRAYER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.prayer}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on chronic illness, the theology of limited bodies, and the God who meets the exhausted.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Kate Bowler: No Cure for Being Human</div>
              <VideoEmbed videoId="y-DQH-M1HuM" title="Kate Bowler: No Cure for Being Human" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Joni Tada: A Place of Healing — When God Says No</div>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Joni Tada: A Place of Healing — When God Says No" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Theology of Chronic Illness: Faith in the Limited Body</div>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="The Theology of Chronic Illness: Faith in the Limited Body" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Come to Me You Who Are Weary: Matthew 11 Explored</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="Come to Me You Who Are Weary: Matthew 11 Explored" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
