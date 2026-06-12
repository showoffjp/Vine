"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

// ─── Color palette ────────────────────────────────────────────────────────────
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";
const TEAL_DIM = "#0a7a70";
const TEAL_BG = "rgba(13,148,136,0.10)";
const TEAL_BORDER = "rgba(13,148,136,0.30)";

// ─── Types ────────────────────────────────────────────────────────────────────
interface HLGEntry {
  need: string;
  prayer: string;
  trust: string;
}

interface SavedEntry extends HLGEntry {
  id: string;
  date: string;
}

// ─── Tab definitions ──────────────────────────────────────────────────────────
const TABS = [
  "Theology",
  "Practices",
  "Voices",
  "Scripture",
  "Journal",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

// ─── Practices data ───────────────────────────────────────────────────────────
const PRACTICES: Array<HLGEntry & { verse: string; verseRef: string }> = [
  {
    need: "Physical illness",
    prayer:
      "Lord, by Your stripes I am healed. I come before You in my weakness and ask for the touch of Your healing hand. You are Jehovah Rapha — the God who heals. I release this body to You, trusting that whether through miracle or medicine, You are working for my wholeness.",
    trust: "Your timing and sovereign will",
    verse:
      "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.",
    verseRef: "1 Peter 2:24",
  },
  {
    need: "Emotional wounds",
    prayer:
      "Heal the broken places in my heart, Lord. Where trauma has left its mark, where grief has carved valleys, where rejection has built walls — meet me there. Be the physician of my soul. What no therapist can fully reach, You can touch and restore.",
    trust: "Your restoration is complete",
    verse:
      "He heals the brokenhearted and binds up their wounds.",
    verseRef: "Psalm 147:3",
  },
  {
    need: "Anxiety and fear",
    prayer:
      "Drive out fear with Your perfect love. I confess that anxiety has taken root where trust should grow. Cast out the spirit of fear and fill that space with Your peace — the peace that surpasses all understanding. Guard my mind and heart in Christ Jesus.",
    trust: "Your peace that surpasses understanding",
    verse:
      "There is no fear in love, but perfect love casts out fear.",
    verseRef: "1 John 4:18",
  },
  {
    need: "Broken relationships",
    prayer:
      "Heal what division has broken, Father. You are the God of reconciliation — You have reconciled us to Yourself through Christ. Work that same miracle between us. Soften hardened hearts, bring truth without cruelty, and restore what sin and pride have fractured.",
    trust: "Your power to reconcile",
    verse:
      "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
    verseRef: "2 Corinthians 5:17",
  },
  {
    need: "Generational wounds",
    prayer:
      "Break patterns passed down through generations, Lord. Sins and sorrows that have moved from parent to child — I bring them to the cross. Your redemption is powerful enough to interrupt what has always been. Write a new story for my family beginning with this generation.",
    trust: "Your redemption covers every generation",
    verse:
      "The steadfast love of the Lord is from everlasting to everlasting on those who fear him, and his righteousness to children's children.",
    verseRef: "Psalm 103:17",
  },
  {
    need: "Grief and loss",
    prayer:
      "Bind up my broken heart, for You promised to be close to the brokenhearted. In my grief I do not grieve as those without hope — for Jesus conquered death. Yet I grieve truly. Sit with me in this, and in Your time, lead me through the valley into morning.",
    trust: "You are close to the brokenhearted",
    verse:
      "The Lord is near to the brokenhearted and saves the crushed in spirit.",
    verseRef: "Psalm 34:18",
  },
];

// ─── Voices data ──────────────────────────────────────────────────────────────
interface Voice {
  name: string;
  description: string;
  quote: string;
  context: string;
}

const VOICES: Voice[] = [
  {
    name: "Joni Eareckson Tada",
    description: "Author, artist, and disability advocate",
    quote:
      "God has not promised to heal everyone in this life. But he has promised to be with us in our suffering, and to use it for purposes beyond what we can see.",
    context:
      "Paralyzed in a diving accident at seventeen, Joni has spent decades wrestling with the theology of healing from the inside. Her conclusion is neither naive optimism nor bitter resignation, but a hard-won confidence that God&rsquo;s grace is sufficient — that sometimes the greater miracle is the transformation of the sufferer, not the removal of the suffering. Her book &ldquo;A Place of Healing&rdquo; is essential reading for anyone asking why God doesn&rsquo;t always heal.",
  },
  {
    name: "Francis MacNutt",
    description: "Pioneer of Christian healing prayer ministry",
    quote:
      "Prayer for healing is not a last resort after medicine has failed. It should be the first resort — and it works together with medicine, not against it.",
    context:
      "A Dominican priest who became one of the most significant figures in the healing prayer renewal of the 20th century, MacNutt taught that healing prayer is a normal part of Christian life, not reserved for specialists. His book &ldquo;Healing&rdquo; (1974) brought serious theological reflection to a practice that had often been dismissed by mainline churches or sensationalized by others. He emphasized persistence, community, and the importance of praying specifically.",
  },
  {
    name: "Jack Deere",
    description: "Theologian and author of Surprised by the Power of the Spirit",
    quote:
      "Cessationism is not primarily a theological problem — it is a historical and experiential problem. It requires us to believe that God stopped doing what he clearly did throughout Scripture and history.",
    context:
      "A former Dallas Seminary professor and convinced cessationist, Deere&rsquo;s encounter with documented miracles in ministry contexts forced him to reexamine his theology from the ground up. His book &ldquo;Surprised by the Power of the Spirit&rdquo; is one of the most careful arguments from a Reformed background for the continuation of spiritual gifts including healing. He does not promise healing on demand, but argues compellingly that God still heals today.",
  },
  {
    name: "C.S. Lewis",
    description: "Author of The Problem of Pain and Mere Christianity",
    quote:
      "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is His megaphone to rouse a deaf world.",
    context:
      "Lewis approached healing not as a charismatic practitioner but as a philosopher of suffering. &ldquo;The Problem of Pain&rdquo; grapples honestly with why a good God allows suffering, and his conclusion is that pain serves a necessary purpose — stripping us of false securities and driving us to the only true comfort. After the death of his wife Joy, he discovered in &ldquo;A Grief Observed&rdquo; that intellectual frameworks crack under the weight of real loss. His journey is a model of honest faith.",
  },
  {
    name: "Beth Moore",
    description: "Bible teacher and author on emotional and spiritual healing",
    quote:
      "Jesus came to set captives free. That includes the captivity of shame, of old wounds, of the stories we tell ourselves about who we are. That is healing just as real as any physical miracle.",
    context:
      "Moore has ministered extensively to women around questions of inner healing, trauma, and the emotional freedom that the gospel brings. Drawing on her own story of abuse and healing, she emphasizes that Christ&rsquo;s redemption is not limited to the spiritual — it reaches into the psychological and emotional dimensions of human life. Her teaching connects Isaiah 61, the Beatitudes, and Ephesians 1 into a vision of healing that is holistic and Christ-centered.",
  },
  {
    name: "John Wimber",
    description: "Founder of Vineyard and healing prayer practitioner",
    quote:
      "The Kingdom of God is the dynamic rule of God breaking into the present age. Healing is a sign of the Kingdom — a foretaste of the age when there will be no more crying, pain, or death.",
    context:
      "Wimber popularized the phrase &ldquo;do the stuff&rdquo; — meaning simply doing what Jesus did: healing the sick, casting out demons, preaching good news. He held a &ldquo;now and not yet&rdquo; theology of healing: the Kingdom has come in Jesus, so healings happen; but the Kingdom is not yet fully here, so they don&rsquo;t always happen. This framework helped many navigate between the extremes of &ldquo;healing always works if you have faith&rdquo; and &ldquo;miracles ceased with the apostles.&rdquo;",
  },
];

// ─── Scripture data ───────────────────────────────────────────────────────────
interface ScriptureEntry {
  ref: string;
  text: string;
  exposition: string;
}

const SCRIPTURES: ScriptureEntry[] = [
  {
    ref: "Isaiah 53:4–5",
    text: "Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    exposition:
      "The Servant Songs of Isaiah are among the most theologically rich passages in the Old Testament. Verse 4 uses the Hebrew words for pain (&ldquo;choli&rdquo; — sickness) and suffering (&ldquo;makob&rdquo; — grief, pain), which Matthew 8:17 explicitly applies to Jesus&rsquo; healing ministry. The healing spoken of here is comprehensive: it encompasses moral guilt (&ldquo;transgressions,&rdquo; &ldquo;iniquities&rdquo;) and also physical and emotional suffering. The ultimate healing — reconciliation with God — came through the cross, and physical healings in Jesus&rsquo; ministry were signs of that deeper healing breaking into the world.",
  },
  {
    ref: "Matthew 8:16–17",
    text: "When evening came, many who were demon-possessed were brought to him, and he drove out the spirits with a word and healed all the sick. This was to fulfill what was spoken through the prophet Isaiah: &ldquo;He took up our infirmities and bore our diseases.&rdquo;",
    exposition:
      "Matthew&rsquo;s explicit connection of Jesus&rsquo; healings to Isaiah 53 is hermeneutically significant. Jesus healed &ldquo;all&rdquo; who were brought to him — not selectively, not conditionally on the quality of their faith, but comprehensively. Matthew presents this healing activity not as occasional exception but as a fulfillment of prophetic pattern. The ministry of Jesus is the inbreaking of the Kingdom, where sickness and death are displaced by life. His healings are not independent miracles but signs of who he is and what his Kingdom brings.",
  },
  {
    ref: "James 5:14–16",
    text: "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. Therefore confess your sins to each other and pray for each other so that you may be healed.",
    exposition:
      "This is the clearest New Testament instruction for the practice of healing prayer in the church. Several elements stand out: healing prayer is a communal act involving elders; oil was both symbolic and medicinal in the ancient world; the prayer of faith is central; and healing is connected to forgiveness, suggesting James sees the two as intertwined. The passage does not promise that all who are prayed for will always recover physically — the word translated &ldquo;make well&rdquo; (&ldquo;sozo&rdquo;) also means &ldquo;save,&rdquo; and James may have the fullness of salvation in view.",
  },
  {
    ref: "1 Peter 2:24",
    text: "He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed.",
    exposition:
      "Peter cites Isaiah 53 in the context of unjust suffering — he is writing to servants who suffer under unjust masters. His use of the Isaiah passage applies the healing primarily to spiritual healing: dying to sin and living for righteousness. The perfect tense (&ldquo;you have been healed&rdquo;) indicates a completed action whose effects continue. Theologically, this grounds all healing — physical, emotional, and spiritual — in the atoning work of Christ at Calvary. Physical healing, when it occurs, is an anticipation of the resurrection; spiritual healing is already accomplished.",
  },
  {
    ref: "Psalm 103:3",
    text: "...who forgives all your sins and heals all your diseases.",
    exposition:
      "Psalm 103 is a song of comprehensive praise for God&rsquo;s character and works. The parallelism between forgiveness and healing is intentional — the Hebrew worldview did not sharply divide physical and spiritual realities. The Psalmist celebrates Yahweh as healer (&ldquo;Jehovah Rapha&rdquo; — echoing Exodus 15:26) alongside his roles as redeemer, satisfier, and renewer. The &ldquo;all&rdquo; in this verse should be read in its context as a doxological statement of God&rsquo;s complete benevolence rather than a precise promise that every believer will be healed of every disease before death.",
  },
  {
    ref: "Luke 4:18",
    text: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.",
    exposition:
      "Jesus&rsquo; inaugural sermon in Nazareth identifies his entire ministry through the lens of Isaiah 61 — a passage of Jubilee, restoration, and release. &ldquo;Recovery of sight to the blind&rdquo; is both literal (Jesus heals the blind throughout Luke&rsquo;s Gospel) and metaphorical (the spiritual blindness of humanity). The anointing by the Spirit is presented as the source of his healing ministry. This has implications for the church: anointed by the same Spirit (Joel 2, Acts 2), believers are called into the same ministry of wholeness — though always derivative, never equal to Jesus&rsquo; own.",
  },
];

// ─── Video data ───────────────────────────────────────────────────────────────
const VIDEOS = [
  { videoId: "QyMPFCbBPHk", title: "Healing Prayer with John Wimber" },
  {
    videoId: "m51rDFqXDgM",
    title: "Joni Eareckson Tada: A Life of Healing and Grace",
  },
  { videoId: "SzTpCgsd-9w", title: "The Theology of Healing" },
  { videoId: "wPMaQFCJFl4", title: "Why Doesn't God Always Heal?" },
  { videoId: "QlFj_A-dkHM", title: "Inner Healing Prayer Guide" },
  {
    videoId: "rWt4QyuPMJM",
    title: "James 5 Anointing and Prayer for Healing",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ChristianHealingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");
  const [expandedPractice, setExpandedPractice] = useState<number | null>(null);
  const [expandedScripture, setExpandedScripture] = useState<number | null>(
    null
  );
  const [journalEntries, setJournalEntries] = useState<SavedEntry[]>([]);
  const [formData, setFormData] = useState<HLGEntry>({
    need: "",
    prayer: "",
    trust: "",
  });
  const [formSaved, setFormSaved] = useState(false);

  // Load journal from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_christianhealing_entries");
      if (raw) {
        setJournalEntries(JSON.parse(raw));
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist journal to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "vine_christianhealing_entries",
        JSON.stringify(journalEntries)
      );
    } catch {
      // ignore
    }
  }, [journalEntries]);

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormSaved(false);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.need.trim() && !formData.prayer.trim()) return;
    const newEntry: SavedEntry = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
    setFormData({ need: "", prayer: "", trust: "" });
    setFormSaved(true);
    setTimeout(() => setFormSaved(false), 3000);
  }

  function handleDeleteEntry(id: string) {
    setJournalEntries((prev) => prev.filter((e) => e.id !== id));
  }

  // ─── Styles ─────────────────────────────────────────────────────────────────
  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: "1.35rem",
    fontWeight: 700,
    color: TEXT,
    marginBottom: "0.5rem",
  };

  const bodyTextStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.75,
    fontSize: "0.97rem",
  };

  const accentBarStyle: React.CSSProperties = {
    width: 40,
    height: 3,
    background: TEAL,
    borderRadius: 2,
    marginBottom: "1rem",
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: BG, color: TEXT }}
    >
      <Navbar />

      <main id="main-content">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <div style={{ paddingTop: "var(--header-height, 80px)" }}>
          <div
            style={{
              background: `linear-gradient(135deg, #07070F 0%, #0a1a18 50%, #07070F 100%)`,
              borderBottom: `1px solid ${BORDER}`,
              padding: "4rem 1.5rem 3rem",
            }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div
                style={{
                  display: "inline-block",
                  background: TEAL_BG,
                  border: `1px solid ${TEAL_BORDER}`,
                  borderRadius: 20,
                  padding: "0.3rem 1rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: TEAL,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Christian Healing
              </div>
              <h1
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  color: TEXT,
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                Healed by His Stripes
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: MUTED,
                  maxWidth: 600,
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                A guide to Christian healing — exploring Scripture, theology,
                healing prayer, and the testimonies of those who have
                encountered God&rsquo;s restoring power.
              </p>
              {/* Key verse */}
              <div
                style={{
                  background: TEAL_BG,
                  border: `1px solid ${TEAL_BORDER}`,
                  borderRadius: 10,
                  padding: "1rem 1.5rem",
                  display: "inline-block",
                  maxWidth: 520,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  &ldquo;He himself bore our sins in his body on the cross, so
                  that we might die to sins and live for righteousness; by his
                  wounds you have been healed.&rdquo;
                </p>
                <p style={{ color: TEAL, fontWeight: 600, fontSize: "0.85rem" }}>
                  1 Peter 2:24
                </p>
              </div>
            </div>
          </div>

          {/* ── Tab bar ──────────────────────────────────────────────────── */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER}`,
              background: CARD,
              overflowX: "auto",
            }}
          >
            <div
              className="max-w-6xl mx-auto"
              style={{
                display: "flex",
                gap: 0,
                padding: "0 1rem",
              }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "1rem 1.25rem",
                    fontSize: "0.9rem",
                    fontWeight: activeTab === tab ? 700 : 400,
                    color: activeTab === tab ? TEAL : MUTED,
                    background: "transparent",
                    border: "none",
                    borderBottom: activeTab === tab
                      ? `2px solid ${TEAL}`
                      : "2px solid transparent",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── Tab content ─────────────────────────────────────────────── */}
          <div
            className="max-w-6xl mx-auto"
            style={{ padding: "2.5rem 1rem 4rem" }}
          >
            {/* ===== THEOLOGY TAB ========================================= */}
            {activeTab === "Theology" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Intro */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    What the Bible Teaches About Healing
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Healing is woven through the entire biblical narrative. God
                    reveals himself as &ldquo;Jehovah Rapha&rdquo; — the LORD
                    who heals — in Exodus 15:26. The Psalms celebrate him as
                    the one who &ldquo;heals all your diseases&rdquo; (Psalm
                    103:3). The prophets anticipated a coming servant who would
                    bear humanity&rsquo;s griefs and carry its sorrows (Isaiah
                    53:4–5). And in Jesus, those promises broke into history
                    with breathtaking immediacy.
                  </p>
                  <p style={bodyTextStyle}>
                    Matthew&rsquo;s Gospel summarizes Jesus&rsquo; ministry as
                    &ldquo;teaching in their synagogues, proclaiming the good
                    news of the kingdom, and healing every disease and sickness
                    among the people&rdquo; (Matthew 4:23). Healing was not
                    peripheral to his mission — it was integral. The miracles
                    were signs that the Kingdom of God had arrived, that the
                    dominion of sickness and death was being contested and
                    overcome by the power of God&rsquo;s reign.
                  </p>
                </div>

                {/* Key texts */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    Four Cornerstone Healing Texts
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {[
                      {
                        ref: "Isaiah 53:5",
                        summary:
                          "The Suffering Servant bears our griefs and carries our sorrows. By his wounds we are healed — language that encompasses both spiritual reconciliation and physical wholeness.",
                      },
                      {
                        ref: "James 5:14–15",
                        summary:
                          "The church is instructed to pray for the sick with anointing oil. The prayer of faith is connected to healing. This grounds healing prayer in regular church practice, not just revival meetings.",
                      },
                      {
                        ref: "Matthew 8:16–17",
                        summary:
                          "Jesus healed all who were brought to him, fulfilling Isaiah 53. Matthew presents widespread healing as the expected fruit of the Messiah&rsquo;s ministry.",
                      },
                      {
                        ref: "1 Peter 2:24",
                        summary:
                          "Peter applies Isaiah&rsquo;s healing language to the atonement. The cross is the ground of all healing — spiritual, emotional, and physical — in Christian theology.",
                      },
                    ].map((item) => (
                      <div
                        key={item.ref}
                        style={{
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "1rem",
                        }}
                      >
                        <p
                          style={{
                            color: TEAL,
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.ref}
                        </p>
                        <p style={{ ...bodyTextStyle, fontSize: "0.88rem" }}>
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cessationism vs Continuationism */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    Cessationism vs. Continuationism
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1.25rem" }}>
                    One of the most significant theological debates among
                    Christians concerns whether miraculous gifts — including
                    healing — ceased with the apostles or continue today.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: "1rem 1.25rem",
                      }}
                    >
                      <p
                        style={{
                          color: "#A78BFA",
                          fontWeight: 700,
                          marginBottom: "0.5rem",
                        }}
                      >
                        Cessationism
                      </p>
                      <p style={{ ...bodyTextStyle, fontSize: "0.88rem" }}>
                        Associated with Reformed traditions and theologians like
                        B.B. Warfield, cessationism holds that miraculous
                        gifts — including healing — served to authenticate the
                        apostles and confirm the canon of Scripture. Once the
                        New Testament was complete, these &ldquo;sign
                        gifts&rdquo; were no longer needed and ceased.
                        Cessationists interpret 1 Corinthians 13:10
                        (&ldquo;when completeness comes&rdquo;) as referring to
                        the completed Scripture.
                      </p>
                    </div>
                    <div
                      style={{
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: "1rem 1.25rem",
                      }}
                    >
                      <p
                        style={{ color: TEAL, fontWeight: 700, marginBottom: "0.5rem" }}
                      >
                        Continuationism
                      </p>
                      <p style={{ ...bodyTextStyle, fontSize: "0.88rem" }}>
                        Continuationists — including most Pentecostals,
                        charismatics, and many evangelicals — argue that the New
                        Testament gives no explicit promise that miraculous gifts
                        would cease before Christ&rsquo;s return. Church history
                        records healings throughout every era. The gifts are
                        given by the sovereign Spirit (1 Corinthians 12:11) for
                        the building of the church, and that purpose has not
                        ended.
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      ...bodyTextStyle,
                      marginTop: "1rem",
                      fontSize: "0.88rem",
                      fontStyle: "italic",
                    }}
                  >
                    Many Christians hold nuanced positions between these poles.
                    What is not in dispute: God healed in Scripture, God can
                    heal today, and prayer for healing is a faithful response to
                    his character as Jehovah Rapha.
                  </p>
                </div>

                {/* Faith, prayer, and healing */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    Faith, Prayer, and Healing
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Scripture frequently connects healing to faith, yet never
                    in a way that makes faith a mechanical trigger. Jesus
                    commended faith in healings (Mark 5:34: &ldquo;Your faith
                    has healed you&rdquo;) but also healed without explicit
                    reference to the recipient&rsquo;s faith — including the
                    raising of Lazarus, the healing of the paralytic whose
                    friends brought him, and the ten lepers.
                  </p>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    The danger in one direction is &ldquo;name it and claim
                    it&rdquo; theology — treating faith as a force that
                    compels God to heal, and treating lack of healing as
                    evidence of insufficient faith. This theology causes
                    immense harm, loading guilt onto the suffering. The danger
                    in the other direction is a faithless resignation that
                    never asks and never expects.
                  </p>
                  <p style={bodyTextStyle}>
                    James 5 holds the balance: pray in faith, but entrust the
                    outcome to God. Faith does not override God&rsquo;s
                    sovereignty — it leans on it. We pray with expectation
                    because God is good and powerful; we entrust outcomes to
                    him because he is wiser than we are.
                  </p>
                </div>

                {/* Mystery of suffering */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    The Mystery: Why God Sometimes Heals and Sometimes Doesn&rsquo;t
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    This is perhaps the most difficult question in Christian
                    healing theology. Faithful, praying believers die of cancer.
                    People with little faith are miraculously healed. The pattern
                    is not one we can systematize.
                  </p>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Several theological frameworks help without fully resolving
                    the mystery. The &ldquo;now and not yet&rdquo; of the
                    Kingdom: the Kingdom has come in Jesus, but has not yet
                    fully arrived. We live in the overlap, where the powers of
                    the age to come break in — but not uniformly, not on
                    demand. Every healing is a sign of what is coming; every
                    unanswered prayer is a reminder that we are not yet home.
                  </p>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Paul&rsquo;s &ldquo;thorn in the flesh&rdquo; (2
                    Corinthians 12:7–9) shows that even the greatest apostle
                    was not healed of everything. God&rsquo;s response to
                    Paul&rsquo;s repeated prayer was not healing but the promise
                    of sufficient grace. God&rsquo;s purposes in unanswered
                    prayer often exceed what physical healing could accomplish.
                  </p>
                  <p style={bodyTextStyle}>
                    What Christian theology insists: suffering is not the last
                    word. The resurrection of Jesus is the guarantee that death
                    and disease will not have final victory. Every healing now
                    is a foretaste; the full feast is coming.
                  </p>
                </div>

                {/* Inner vs physical */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    Inner Healing and Physical Healing
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Christian healing is broader than physical restoration.
                    The Hebrew concept of &ldquo;shalom&rdquo; — wholeness,
                    completeness, flourishing — encompasses every dimension of
                    human life. Jesus healed physical bodies, cast out spirits,
                    forgave sins, and restored social outcasts to community.
                    His healings were holistic.
                  </p>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Inner healing — sometimes called healing of memories or
                    soul healing — focuses on the emotional and psychological
                    wounds that sin, trauma, and loss leave behind. Practitioners
                    like Agnes Sanford, Francis MacNutt, and Leanne Payne
                    developed prayer models for bringing the presence of Christ
                    into painful memories and asking him to heal what has been
                    broken there.
                  </p>
                  <p style={bodyTextStyle}>
                    Care is needed: inner healing prayer should be grounded in
                    Scripture and sound theology, not imaginative techniques
                    that veer into revisionism or manipulation. But at its best,
                    inner healing prayer is simply asking the Spirit to do what
                    the Spirit does — bring the truth of the gospel to places
                    where lies and wounds have taken up residence.
                  </p>
                </div>

                {/* Medicine */}
                <div style={cardStyle}>
                  <div style={accentBarStyle} />
                  <h2 style={sectionHeadingStyle}>
                    Medicine and Doctors in Christian Healing
                  </h2>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    Scripture does not oppose medicine. Luke was a physician
                    (Colossians 4:14). Paul advised Timothy to &ldquo;use a
                    little wine because of your stomach&rdquo; (1 Timothy 5:23)
                    — practical medical advice. Proverbs celebrates the wisdom
                    of using available remedies. Anointing oil in James 5 had
                    both symbolic and medicinal significance in the ancient world.
                  </p>
                  <p style={{ ...bodyTextStyle, marginBottom: "1rem" }}>
                    A theology of common grace affirms that medical knowledge
                    is a gift from God. Human understanding of anatomy,
                    pharmacology, and surgery reflects the image of God in
                    humanity working to care for the vulnerable and overcome the
                    effects of the fall. Seeking medical care is not a failure
                    of faith — it is stewardship.
                  </p>
                  <p style={bodyTextStyle}>
                    At the same time, Christian faith does not reduce healing
                    to medicine. Prayer and medicine are not competitors;
                    they are companions. The wise Christian both seeks
                    competent medical care and brings every concern before God
                    in prayer, trusting that healing in whatever form it comes
                    is ultimately from the One who is Jehovah Rapha.
                  </p>
                </div>
              </div>
            )}

            {/* ===== PRACTICES TAB ======================================== */}
            {activeTab === "Practices" && (
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Healing Prayers for Six Areas of Need
                  </h2>
                  <p style={bodyTextStyle}>
                    Select any card to expand the full prayer and supporting
                    Scripture. Use these as a guide for your own prayer, or
                    pray them aloud as written.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {PRACTICES.map((practice, i) => {
                    const isOpen = expandedPractice === i;
                    return (
                      <div
                        key={i}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? TEAL_BORDER : BORDER}`,
                          borderRadius: 12,
                          overflow: "hidden",
                          transition: "border-color 0.2s",
                        }}
                      >
                        <button
                          onClick={() =>
                            setExpandedPractice(isOpen ? null : i)
                          }
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "1.25rem 1.5rem",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: TEAL_BG,
                                border: `1px solid ${TEAL_BORDER}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: TEAL,
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                flexShrink: 0,
                              }}
                            >
                              {i + 1}
                            </div>
                            <div>
                              <p
                                style={{
                                  color: TEXT,
                                  fontWeight: 600,
                                  fontSize: "1rem",
                                }}
                              >
                                {practice.need}
                              </p>
                              <p
                                style={{
                                  color: MUTED,
                                  fontSize: "0.82rem",
                                  marginTop: "0.15rem",
                                }}
                              >
                                Trusting: {practice.trust}
                              </p>
                            </div>
                          </div>
                          <span
                            style={{
                              color: TEAL,
                              fontSize: "1.2rem",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          >
                            ▾
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: "0 1.5rem 1.5rem",
                              borderTop: `1px solid ${BORDER}`,
                            }}
                          >
                            {/* Prayer */}
                            <div style={{ marginTop: "1.25rem" }}>
                              <p
                                style={{
                                  color: TEAL,
                                  fontWeight: 600,
                                  fontSize: "0.8rem",
                                  letterSpacing: "0.07em",
                                  textTransform: "uppercase",
                                  marginBottom: "0.6rem",
                                }}
                              >
                                Prayer
                              </p>
                              <p
                                style={{
                                  color: TEXT,
                                  lineHeight: 1.75,
                                  fontStyle: "italic",
                                  fontSize: "0.97rem",
                                }}
                              >
                                &ldquo;{practice.prayer}&rdquo;
                              </p>
                            </div>

                            {/* Scripture */}
                            <div
                              style={{
                                marginTop: "1.25rem",
                                background: TEAL_BG,
                                border: `1px solid ${TEAL_BORDER}`,
                                borderRadius: 8,
                                padding: "0.9rem 1.1rem",
                              }}
                            >
                              <p
                                style={{
                                  color: TEAL,
                                  fontWeight: 600,
                                  fontSize: "0.8rem",
                                  letterSpacing: "0.07em",
                                  textTransform: "uppercase",
                                  marginBottom: "0.4rem",
                                }}
                              >
                                Scripture
                              </p>
                              <p
                                style={{
                                  color: TEXT,
                                  fontStyle: "italic",
                                  fontSize: "0.93rem",
                                  lineHeight: 1.65,
                                  marginBottom: "0.3rem",
                                }}
                              >
                                &ldquo;{practice.verse}&rdquo;
                              </p>
                              <p
                                style={{
                                  color: TEAL,
                                  fontWeight: 700,
                                  fontSize: "0.82rem",
                                }}
                              >
                                — {practice.verseRef}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Guidance section */}
                <div style={{ ...cardStyle, marginTop: "2rem" }}>
                  <div style={accentBarStyle} />
                  <h3 style={{ ...sectionHeadingStyle, fontSize: "1.1rem" }}>
                    How to Pray for Healing
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {[
                      "Begin with worship — approaching God as Father, not as a vending machine.",
                      "Name the need specifically. God is not surprised by it; naming it is an act of trust.",
                      "Pray with Scripture. The prayers above use God&rsquo;s own words back to him.",
                      "Be persistent. Jesus told the parable of the persistent widow to teach us to keep asking (Luke 18:1–8).",
                      "Hold the outcome with open hands. &ldquo;Not my will, but yours&rdquo; (Luke 22:42) is not a failure of faith; it is its highest expression.",
                      "Receive whatever comes as from his hand — whether healing, grace to endure, or the ultimate healing of resurrection.",
                    ].map((step, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: TEAL,
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            marginTop: "0.1rem",
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}.
                        </span>
                        <p
                          style={{
                            ...bodyTextStyle,
                            fontSize: "0.93rem",
                          }}
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===== VOICES TAB =========================================== */}
            {activeTab === "Voices" && (
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Six Voices on Christian Healing
                  </h2>
                  <p style={bodyTextStyle}>
                    Theologians, practitioners, and experiencers — each bringing
                    a distinct perspective on what it means to seek and receive
                    healing from God.
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {VOICES.map((voice, i) => (
                    <div
                      key={i}
                      style={{
                        ...cardStyle,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      {/* Avatar + name */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            background: TEAL_BG,
                            border: `2px solid ${TEAL_BORDER}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: TEAL,
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            flexShrink: 0,
                          }}
                        >
                          {voice.name.charAt(0)}
                        </div>
                        <div>
                          <p style={{ color: TEXT, fontWeight: 700, fontSize: "0.97rem" }}>
                            {voice.name}
                          </p>
                          <p style={{ color: MUTED, fontSize: "0.8rem" }}>
                            {voice.description}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div
                        style={{
                          background: TEAL_BG,
                          border: `1px solid ${TEAL_BORDER}`,
                          borderRadius: 8,
                          padding: "0.9rem 1rem",
                        }}
                      >
                        <p
                          style={{
                            color: TEXT,
                            fontStyle: "italic",
                            fontSize: "0.9rem",
                            lineHeight: 1.65,
                          }}
                          dangerouslySetInnerHTML={{
                            __html: `&ldquo;${voice.quote}&rdquo;`,
                          }}
                        />
                      </div>

                      {/* Context */}
                      <p
                        style={{ ...bodyTextStyle, fontSize: "0.88rem" }}
                        dangerouslySetInnerHTML={{ __html: voice.context }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== SCRIPTURE TAB ======================================== */}
            {activeTab === "Scripture" && (
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Key Healing Passages
                  </h2>
                  <p style={bodyTextStyle}>
                    Select a passage to read the text and a brief theological
                    exposition. These six texts form the biblical core of
                    Christian healing theology.
                  </p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  {SCRIPTURES.map((entry, i) => {
                    const isOpen = expandedScripture === i;
                    return (
                      <div
                        key={i}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? TEAL_BORDER : BORDER}`,
                          borderRadius: 12,
                          overflow: "hidden",
                          transition: "border-color 0.2s",
                        }}
                      >
                        <button
                          onClick={() =>
                            setExpandedScripture(isOpen ? null : i)
                          }
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "1.2rem 1.5rem",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <span
                            style={{
                              color: TEXT,
                              fontWeight: 700,
                              fontSize: "1rem",
                            }}
                          >
                            {entry.ref}
                          </span>
                          <span
                            style={{
                              color: TEAL,
                              fontSize: "1.1rem",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          >
                            ▾
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: "0 1.5rem 1.5rem",
                              borderTop: `1px solid ${BORDER}`,
                            }}
                          >
                            {/* Scripture text */}
                            <div
                              style={{
                                background: TEAL_BG,
                                border: `1px solid ${TEAL_BORDER}`,
                                borderRadius: 8,
                                padding: "1rem 1.2rem",
                                marginTop: "1.25rem",
                                marginBottom: "1.25rem",
                              }}
                            >
                              <p
                                style={{
                                  color: TEXT,
                                  fontStyle: "italic",
                                  lineHeight: 1.75,
                                  fontSize: "0.97rem",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: `&ldquo;${entry.text}&rdquo;`,
                                }}
                              />
                              <p
                                style={{
                                  color: TEAL,
                                  fontWeight: 700,
                                  fontSize: "0.85rem",
                                  marginTop: "0.5rem",
                                }}
                              >
                                — {entry.ref}
                              </p>
                            </div>

                            {/* Exposition */}
                            <div>
                              <p
                                style={{
                                  color: TEAL,
                                  fontWeight: 600,
                                  fontSize: "0.8rem",
                                  letterSpacing: "0.07em",
                                  textTransform: "uppercase",
                                  marginBottom: "0.6rem",
                                }}
                              >
                                Exposition
                              </p>
                              <p
                                style={{ ...bodyTextStyle, lineHeight: 1.8 }}
                                dangerouslySetInnerHTML={{
                                  __html: entry.exposition,
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Further reading */}
                <div style={{ ...cardStyle, marginTop: "2rem" }}>
                  <div style={accentBarStyle} />
                  <h3 style={{ ...sectionHeadingStyle, fontSize: "1.1rem" }}>
                    Additional Healing Passages for Study
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: "0.5rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    {[
                      "Exodus 15:26",
                      "Psalm 30:2",
                      "Psalm 41:3",
                      "Proverbs 4:20–22",
                      "Jeremiah 17:14",
                      "Jeremiah 30:17",
                      "Hosea 6:1",
                      "Matthew 4:23–24",
                      "Mark 16:17–18",
                      "Acts 3:1–10",
                      "Acts 9:34",
                      "1 Corinthians 12:9",
                      "Hebrews 12:12–13",
                      "Revelation 22:2",
                    ].map((ref) => (
                      <div
                        key={ref}
                        style={{
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 6,
                          padding: "0.5rem 0.75rem",
                          color: MUTED,
                          fontSize: "0.85rem",
                        }}
                      >
                        {ref}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===== JOURNAL TAB ========================================== */}
            {activeTab === "Journal" && (
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Healing Prayer Journal
                  </h2>
                  <p style={bodyTextStyle}>
                    Record your healing prayer requests — the need, your
                    specific prayer, and what you are trusting God for. Your
                    entries are saved privately in your browser.
                  </p>
                </div>

                {/* Form */}
                <div style={{ ...cardStyle, marginBottom: "2rem" }}>
                  <div style={accentBarStyle} />
                  <h3
                    style={{
                      color: TEXT,
                      fontWeight: 700,
                      marginBottom: "1.25rem",
                      fontSize: "1.05rem",
                    }}
                  >
                    New Prayer Entry
                  </h3>
                  <form
                    onSubmit={handleFormSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
                  >
                    {/* Need */}
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "0.4rem",
                        }}
                      >
                        What healing is needed?
                      </label>
                      <input
                        name="need"
                        value={formData.need}
                        onChange={handleFormChange}
                        placeholder="e.g. Physical illness, anxiety, grief…"
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "0.7rem 1rem",
                          color: TEXT,
                          fontSize: "0.95rem",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Prayer */}
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Your specific prayer request
                      </label>
                      <textarea
                        name="prayer"
                        value={formData.prayer}
                        onChange={handleFormChange}
                        placeholder="Write your prayer to God…"
                        rows={4}
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "0.7rem 1rem",
                          color: TEXT,
                          fontSize: "0.95rem",
                          outline: "none",
                          resize: "vertical",
                          boxSizing: "border-box",
                          fontFamily: "inherit",
                          lineHeight: 1.6,
                        }}
                      />
                    </div>

                    {/* Trust */}
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "0.4rem",
                        }}
                      >
                        What are you trusting God for?
                      </label>
                      <input
                        name="trust"
                        value={formData.trust}
                        onChange={handleFormChange}
                        placeholder="e.g. His timing, His peace, His purposes…"
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          padding: "0.7rem 1rem",
                          color: TEXT,
                          fontSize: "0.95rem",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div
                      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                    >
                      <button
                        type="submit"
                        style={{
                          background: TEAL,
                          color: "#fff",
                          border: "none",
                          borderRadius: 8,
                          padding: "0.7rem 1.5rem",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          cursor: "pointer",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLButtonElement).style.background =
                            TEAL_DIM)
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLButtonElement).style.background =
                            TEAL)
                        }
                      >
                        Save Entry
                      </button>
                      {formSaved && (
                        <span
                          style={{
                            color: TEAL,
                            fontSize: "0.88rem",
                            fontWeight: 600,
                          }}
                        >
                          Entry saved.
                        </span>
                      )}
                    </div>
                  </form>
                </div>

                {/* Entries list */}
                {journalEntries.length === 0 ? (
                  <div
                    style={{
                      ...cardStyle,
                      textAlign: "center",
                      padding: "2.5rem",
                    }}
                  >
                    <p style={{ color: MUTED, fontSize: "0.95rem" }}>
                      No entries yet. Use the form above to record your first
                      healing prayer.
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Your Entries ({journalEntries.length})
                    </h3>
                    {journalEntries.map((entry) => (
                      <div
                        key={entry.id}
                        style={{
                          ...cardStyle,
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "0.75rem",
                          }}
                        >
                          <div>
                            <p
                              style={{
                                color: TEAL,
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                              }}
                            >
                              {entry.need || "Untitled"}
                            </p>
                            <p
                              style={{
                                color: MUTED,
                                fontSize: "0.78rem",
                                marginTop: "0.15rem",
                              }}
                            >
                              {entry.date}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteEntry(entry.id)}
                            title="Delete entry"
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              borderRadius: 6,
                              padding: "0.3rem 0.6rem",
                              color: MUTED,
                              cursor: "pointer",
                              fontSize: "0.8rem",
                              transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              ((e.target as HTMLButtonElement).style.color =
                                "#f87171")
                            }
                            onMouseLeave={(e) =>
                              ((e.target as HTMLButtonElement).style.color =
                                MUTED)
                            }
                          >
                            Delete
                          </button>
                        </div>

                        {entry.prayer && (
                          <div style={{ marginBottom: "0.75rem" }}>
                            <p
                              style={{
                                color: MUTED,
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                marginBottom: "0.3rem",
                              }}
                            >
                              Prayer
                            </p>
                            <p
                              style={{
                                color: TEXT,
                                fontSize: "0.92rem",
                                lineHeight: 1.65,
                                fontStyle: "italic",
                              }}
                            >
                              {entry.prayer}
                            </p>
                          </div>
                        )}

                        {entry.trust && (
                          <div
                            style={{
                              background: TEAL_BG,
                              border: `1px solid ${TEAL_BORDER}`,
                              borderRadius: 6,
                              padding: "0.5rem 0.75rem",
                              display: "inline-block",
                            }}
                          >
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                              }}
                            >
                              Trusting:{" "}
                            </span>
                            <span
                              style={{ color: TEXT, fontSize: "0.88rem" }}
                            >
                              {entry.trust}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ===== VIDEOS TAB =========================================== */}
            {activeTab === "Videos" && (
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Videos on Christian Healing
                  </h2>
                  <p style={bodyTextStyle}>
                    Teaching, testimony, and theology — six videos exploring
                    different dimensions of healing prayer and faith.
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {VIDEOS.map((v, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        overflow: "hidden",
                      }}
                    >
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                      <div style={{ padding: "0.9rem 1rem" }}>
                        <p
                          style={{
                            color: TEXT,
                            fontWeight: 600,
                            fontSize: "0.92rem",
                            lineHeight: 1.4,
                          }}
                        >
                          {v.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
