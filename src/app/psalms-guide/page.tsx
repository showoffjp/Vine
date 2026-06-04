"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TYPES = [
  {
    type: "Lament",
    color: "#3B82F6",
    count: "~60 psalms",
    examples: "Psalm 22, 42, 88",
    desc: "The most common type — expressing anguish, confusion, abandonment, or suffering to God. Lament psalms typically move from complaint to trust, though some (like Psalm 88) end in darkness without resolution. Lament is not faithlessness; it is faith that insists on speaking honestly to God rather than performing what we do not feel.",
    pattern: "Address to God → Complaint → Trust → Petition → Praise (sometimes omitted)",
    practice: "When you are suffering, pray a lament psalm. Let its words give you permission to be honest. Notice how the psalmist speaks TO God, not merely about God — which is itself an act of faith.",
  },
  {
    type: "Praise",
    color: "#F59E0B",
    count: "~50 psalms",
    examples: "Psalm 100, 145, 150",
    desc: "Pure celebration of who God is and what he has done — often beginning and ending with 'Praise the LORD.' Praise psalms do not arise from particular circumstances but from theological reflection on God's character: his goodness, steadfast love, power, and faithfulness. They train us to delight in God for who he is, not merely what he provides.",
    pattern: "Call to praise → Reasons for praise (God's character or deeds) → Renewed call to praise",
    practice: "Pray Psalm 145 slowly and notice how each verse names a specific attribute of God. Try writing your own verse describing something specific you have observed about God.",
  },
  {
    type: "Thanksgiving",
    color: GREEN,
    count: "~15 psalms",
    examples: "Psalm 30, 116, 138",
    desc: "Retrospective praise for a specific act of God's deliverance — often following a lament that was answered. Thanksgiving psalms narrate what happened: the trouble, the cry for help, and the rescue. They are the closing movement of many lament cycles and train the memory to recall what God has done, resisting the forgetting that produces ingratitude.",
    pattern: "Declaration of thanks → Narrative of the trouble → Narrative of the rescue → Renewed commitment or testimony",
    practice: "Write a brief thanksgiving psalm narrating a specific time God rescued or helped you. What was the trouble? How did you cry out? What happened? Reading it later trains grateful memory.",
  },
  {
    type: "Royal / Messianic",
    color: "#8B5CF6",
    count: "~10 psalms",
    examples: "Psalm 2, 22, 110",
    desc: "Psalms written about or for the king of Israel — which the NT authors consistently apply to Jesus as the fulfillment of the Davidic promise. Psalm 2 (You are my son), Psalm 22 (forsaken, bones out of joint, garments divided — all fulfilled at Golgotha), and Psalm 110 (Sit at my right hand) are the three most quoted OT texts in the New Testament. Reading royal psalms is reading about Jesus.",
    pattern: "Varies — enthronement, address to the king, divine oracle",
    practice: "Read Psalm 22 alongside the crucifixion accounts in Mark 15. Notice how many details of the psalm appear in the narrative — without the Gospels citing them as fulfillment. The connection was visible to anyone who knew their psalms.",
  },
  {
    type: "Wisdom",
    color: "#EF4444",
    count: "~10 psalms",
    examples: "Psalm 1, 37, 119",
    desc: "Psalms that reflect on the shape of the godly life — often contrasting the righteous and the wicked, and meditating on Torah as the source of wisdom and flourishing. Psalm 1 (the gateway to the Psalter), Psalm 37 (do not fret), and the massive Psalm 119 (176 verses of meditation on God's word) belong here. Wisdom psalms are theology embedded in poetry.",
    pattern: "Observation about the godly life → Contrast with the ungodly → Conclusion about God's ways",
    practice: "Meditate on Psalm 1 by reading it slowly three times. What does each image (tree, chaff, way) contribute? Memorizing Psalm 1 provides a lens for reading the rest of the Psalter.",
  },
  {
    type: "Penitential",
    color: "#DC2626",
    count: "7 psalms",
    examples: "Psalm 6, 32, 51, 130",
    desc: "Psalms of confession — naming sin, expressing sorrow, and seeking forgiveness. Psalm 51 (written after David's sin with Bathsheba) is the most profound and was used by the early church as the primary model of confession. The penitential psalms affirm that God does not despise a broken and contrite heart — and that full confession is the path to full restoration.",
    pattern: "Confession of sin → Acknowledgment of guilt → Petition for forgiveness → Renewed commitment",
    practice: "Pray Psalm 51 as a weekly act of general confession, not just when you have committed a specific sin. It trains the habit of moral honesty before God and keeps the posture of dependence alive.",
  },
];

const THEOLOGY = [
  { title: "The Psalter as Israel's Hymnbook", verse: "Colossians 3:16", body: "The Psalms were the songs of temple worship and synagogue prayer — used for over a thousand years as the primary vehicle of Israel's devotion. Jesus and his disciples sang psalms at the Last Supper (Matthew 26:30). The early church was commanded to sing 'psalms, hymns, and spiritual songs' (Colossians 3:16). Praying the psalms places you in continuity with the longest unbroken tradition of worship in human history." },
  { title: "The Whole of Human Experience", verse: "Psalm 22:1", body: "C.S. Lewis called the psalms 'the anatomy of the soul.' What is striking is their emotional completeness: there is hardly a human experience — from ecstatic joy to suicidal darkness — not voiced somewhere in the Psalter. Psalm 22 begins with 'My God, my God, why have you forsaken me?' Psalm 30 declares 'Weeping may stay for the night, but rejoicing comes in the morning.' The range is not a contradiction; it is an invitation to bring the full self into the presence of God." },
  { title: "Christ in the Psalms", verse: "Luke 24:44", body: "Jesus said that everything written about him 'in the Law of Moses, the Prophets and the Psalms must be fulfilled' (Luke 24:44). The NT cites psalms more than any other OT text. Psalm 2 (Son of God), Psalm 22 (the forsaken one), Psalm 110 (Lord and priest), Psalm 118 (the stone the builders rejected) — the Psalter is a sustained prophecy of Christ, often voiced as if from Christ's own perspective." },
  { title: "Prayer as Honest Relationship", verse: "Psalm 62:8", body: "'Trust in him at all times, you people; pour out your hearts to him, for God is our refuge' (Psalm 62:8). The psalms model something radical: you are permitted to tell God exactly what you feel. The psalms include complaint, accusation, despair, and demands for God to act. This is not irreverence — it is the intimacy of a covenant relationship in which the covenant partner is both Lord and Father. The psalms give us permission to be honest." },
];

const READING_PLANS = [
  { name: "Psalm of the Day", desc: "Read 5 psalms per day in order — you complete the Psalter every month. (1-5 on day 1, 6-10 on day 2, etc.) Requires about 15 minutes." },
  { name: "By Type", desc: "Spend a week on lament psalms, a week on praise psalms, a week on penitential psalms. Read thematically rather than sequentially to notice patterns within each type." },
  { name: "Daily Morning and Evening", desc: "The traditional Anglican pattern: read one psalm in the morning for orientation, one in the evening for reflection. Psalm 1 orients the whole day; a lament psalm at night gives language for unresolved pain." },
  { name: "The Seven Penitentials", desc: "Psalms 6, 32, 38, 51, 102, 130, 143 — prayed as a cycle over seven weeks. Used by the church since the early medieval period as preparation for seasons of repentance." },
];

const SCHOLARS_PSALMS = [
  { id: "lewis", name: "C.S. Lewis", era: "1898-1963", context: "Reflections on the Psalms (1958)", bio: "Lewis's Reflections on the Psalms is the most accessible introduction to the Psalms for modern readers. He engages directly with what troubles contemporary readers: the imprecatory psalms (calls for God to destroy enemies), the self-righteousness of some psalms, the apparent celebration of law. His central insight: the Psalms are honest. They bring the full range of human experience — including rage and revenge — before God, which is more spiritually healthy than pretending we don't feel those things.", quote: "I think we delight to praise what we enjoy because the praise not merely expresses but completes the enjoyment; it is its appointed consummation.", contribution: "Made the Psalms accessible to modern readers who found them morally difficult. His handling of the imprecatory psalms — as honest expressions of legitimate anger that need to be brought to God rather than acted on — gave Christians permission to pray the whole Psalter honestly." },
  { id: "peterson", name: "Eugene Peterson", era: "1932-2018", context: "Answering God: The Psalms as Tools for Prayer (1989); The Message", bio: "Peterson argued that the Psalms are the church's prayer book — not devotional decoration but the structured school in which Christians learn to speak to God. His central claim: prayer is not primarily talking to God but responding to God. The Psalms give us God's own words addressed back to God. He translated the entire Psalter in The Message to make it visceral and immediate, capturing the emotional register of the Hebrew rather than its formal churchiness.", quote: "Prayer is not a technique for getting things from God. The Psalms are prayer material — the raw stuff of the Christian's conversation with God, not formulas to be recited but a language to be learned.", contribution: "Established the Psalms as the primary school of prayer for a generation of pastors and spiritual directors. His emphasis on the Psalms' honesty — including lament, complaint, and rage — gave the contemporary church permission to bring unresolved pain to God." },
  { id: "kidner", name: "Derek Kidner", era: "1913-2008", context: "Kidner Psalms (Tyndale Old Testament Commentary)", bio: "Kidner's two-volume commentary on the Psalms in the Tyndale series is the finest short commentary on the Psalter for the non-specialist. He combines exegetical precision with spiritual sensitivity — noting the literary structure, the Hebrew wordplay, the historical context, and the theological significance, all in compact, clear prose. His introductory essay on the types of psalms and their use in Christian worship is worth reading on its own.", quote: "The Psalms are the school of prayer. They teach us to address God in the full range of human experience — from ecstasy to despair, from confident trust to bitter complaint.", contribution: "Provided the evangelical church with the most usable one-volume commentary on the Psalms. His work models how to read the Psalms both historically (in their ancient context) and devotionally (as live words for today)." },
  { id: "brueggemann", name: "Walter Brueggemann", era: "b. 1933", context: "The Message of the Psalms (1984); Columbia Theological Seminary", bio: "Brueggemann's influential interpretive schema divides the Psalms into three movements: orientation (confident praise, settled order), disorientation (lament, chaos, suffering), and new orientation (surprised praise after suffering). He argues that most Christian churches use only orientation and new orientation psalms — skipping lament — and that this impoverishes Christian worship by excluding the actual experience of suffering and doubt. The lament psalm is, for Brueggemann, a form of protest that affirms God's sovereignty even in the act of complaint.", quote: "The lament psalms are the most honest prayers in the Bible. They say what we dare not say in polite church — and they say it to God.", contribution: "Made lament psalms central to Christian spirituality and worship. His orientation/disorientation/new orientation framework has shaped how pastors and spiritual directors understand the emotional arc of the Psalter and of spiritual formation." },
  { id: "longman", name: "Tremper Longman III", era: "b. 1952", context: "How to Read the Psalms (1988); Regent College", bio: "Longman's How to Read the Psalms is the best introduction to Psalms hermeneutics — how to interpret the Psalms as poetry rather than prose, how to read them in their canonical context, and how to move from original meaning to contemporary application. He pays special attention to the poetic devices the Psalmists use (parallelism, imagery, acrostic structure) and argues that understanding the literary form is essential for understanding the theological content.", quote: "The Psalms are poetry — and poetry means we must slow down, notice the images, and let the form carry its own meaning. You cannot summarize a Psalm without losing it.", contribution: "Gave students and pastors the literary tools necessary to read the Psalms well. His treatment of Hebrew poetry — especially parallelism and imagery — has become standard in seminary education and popular Bible study training." }
];

export default function PsalmsGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<"types" | "theology" | "scholars" | "plans" | "videos">("vine_psalms-guide_tab", "types");
  const [selectedScholar, setSelectedScholar] = useState("lewis");
  const scholarItem = SCHOLARS_PSALMS.find(s => s.id === selectedScholar)!;
  const [selectedType, setSelectedType] = useState("Lament");

  const type = TYPES.find(t => t.type === selectedType)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Guide to the Psalms</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Psalms are Israel's hymnbook, Christ's prayer book, and the anatomy of the human soul before God. 150 poems voicing the full range of human experience — from ecstatic praise to suicidal darkness.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "types" as const, label: "Types", icon: "🗂️" },
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "scholars" as const, label: "Scholars", icon: "💬" },
            { id: "plans" as const, label: "Reading Plans", icon: "📅" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "types" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TYPES.map(t => (
                <button key={t.type} onClick={() => setSelectedType(t.type)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedType === t.type ? t.color : BORDER}`, background: selectedType === t.type ? `${t.color}15` : "transparent", color: selectedType === t.type ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.type}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${type.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ color: type.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{type.type} Psalms</h2>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: MUTED, fontSize: 13 }}>{type.count}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>·</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>e.g. {type.examples}</span>
                  </div>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{type.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: type.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>TYPICAL PATTERN</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{type.pattern}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{type.practice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "scholars" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {SCHOLARS_PSALMS.map(s => (
                <button key={s.id} onClick={() => setSelectedScholar(s.id)}
                  style={{ width: "100%", background: selectedScholar === s.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedScholar === s.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedScholar === s.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{scholarItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{scholarItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{scholarItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{scholarItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{scholarItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{scholarItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "plans" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Psalms reward sustained reading more than occasional visits. Here are {READING_PLANS.length} ways to make the Psalter a regular part of your life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {READING_PLANS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{p.name}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 16 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>WHERE TO START</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                If you have never read the Psalms intentionally, begin here: Psalm 1 (the gateway), Psalm 22 (the forsaken one who trusts), Psalm 23 (the shepherd psalm), Psalm 51 (the confession), Psalm 100 (pure praise), Psalm 121 (the Lord watches), Psalm 139 (known and searched), Psalm 150 (the final doxology). These eight psalms span the full range of the Psalter and will orient you to its territory.
              </p>
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the Psalms — how to read them, pray them, and live from them.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "QgwzuFG5LCk", title: "Let the Psalms Teach You to Pray", channel: "Tim Keller", description: "Keller on why the Psalms are the church's prayer book — how they give us language to bring the full range of human experience honestly before God." },
                  { videoId: "oJgY5YiOBto", title: "Discovering How to Pray the Psalms", channel: "Tim Keller", description: "Practical guidance on using the Psalms as your own prayers — how to inhabit their language, appropriate their honesty, and pray their theology as your own." },
                  { videoId: "i3vFjcJfurg", title: "How to Pray the Psalms", channel: "Gospel Coalition", description: "A step-by-step guide to praying through individual psalms — including lament psalms, praise psalms, and penitential psalms — with pastoral application." },
                  { videoId: "_hLI-vUPrEM", title: "Answering God: Psalms as Tools for Prayer", channel: "Eugene Peterson", description: "Eugene Peterson on his landmark book Answering God — how the Psalms are not devotional decoration but a school in which we learn to respond to God in his own words." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
