"use client";

import React, { useState, useEffect } from "react";

interface GriefStory {
  id: string;
  name: string;
  avatar: string;
  lossType: string;
  title: string;
  body: string;
  verse: string;
  verseRef: string;
  timeAgo: string;
  likes: number;
  hopeful: boolean;
}

interface JournalEntry {
  id: string;
  date: string;
  prompt: string;
  response: string;
  mood: string;
}

const griefStories: GriefStory[] = [
  {
    id: "gs1",
    name: "Miriam T.",
    avatar: "👩",
    lossType: "Spouse",
    title: "Learning to breathe again after losing David",
    body: "David and I had 34 years together. When he died in January, I didn't just lose my husband — I lost my best friend, my morning person, the one who always knew what I was thinking. The first three months I couldn't even open my Bible. I was angry at God in ways I'd never been in my entire Christian life.\n\nWhat helped me wasn't platitudes. It was one friend who sat with me in silence every Tuesday. It was a grief counselor who told me my anger at God was actually faith — because you don't yell at someone you don't believe in.\n\nA year later, I'm not 'over it.' I never will be. But I am learning to carry it differently. The grief hasn't left, but God hasn't either.",
    verse: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
    verseRef: "Psalm 23:4",
    timeAgo: "3 months ago",
    likes: 847,
    hopeful: true,
  },
  {
    id: "gs2",
    name: "James O.",
    avatar: "👨",
    lossType: "Child",
    title: "Our son Elijah lived 11 days. His life changed everything.",
    body: "We had prayed for that baby for years. When Elijah was born with a heart defect that couldn't be fixed, we had 11 days. I will never understand why. I don't think I'm supposed to.\n\nWhat I know is this: those 11 days were the holiest of my life. The veil between heaven and earth was thin. We sang over him. We prayed over him. We told him he was loved.\n\nThe church showed up in ways I never expected. Meals for three months. Cards. People sitting with us in the darkness without trying to explain it.\n\nI am a different person now. Still broken in places. But also more tender, more present, more certain that eternity is real — because my son is there.",
    verse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.",
    verseRef: "Revelation 21:4",
    timeAgo: "8 months ago",
    likes: 1240,
    hopeful: true,
  },
  {
    id: "gs3",
    name: "Anonymous",
    avatar: "🕊️",
    lossType: "Parent",
    title: "My mother died before we reconciled",
    body: "We had a complicated relationship. There were things said that were never taken back, distance that stretched for years. When she had a stroke, I flew home. But she never regained consciousness. We never got to say what needed to be said.\n\nI have lived with that guilt for two years. But slowly, through counseling and prayer, I've come to understand something: forgiveness doesn't require a conversation. God can complete what couldn't happen on earth.\n\nI wrote her a letter I'll never send. I pray for her soul. And I'm learning — slowly — that grace covers not just the things I did, but the things left undone.",
    verse: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
    verseRef: "Romans 8:1",
    timeAgo: "1 year ago",
    likes: 1678,
    hopeful: true,
  },
  {
    id: "gs4",
    name: "Sarah K.",
    avatar: "👩",
    lossType: "Miscarriage",
    title: "Three miscarriages. What I want the church to know.",
    body: "The church often doesn't know what to do with miscarriage. People say 'at least it was early' or 'God must have needed another angel.' These words, however well-meaning, cut deep.\n\nWhat I needed was acknowledgment. My babies were real. The grief was real.\n\nWhat helped: friends who remembered the due dates. A pastor who dedicated a service to pregnancy loss. A community online who didn't minimize it.\n\nTo anyone in this grief right now: you're not overreacting. Your loss is real. God knows every baby by name. And one day — one day — every tear will make sense.",
    verse: "Before I formed you in the womb I knew you.",
    verseRef: "Jeremiah 1:5",
    timeAgo: "6 months ago",
    likes: 2340,
    hopeful: true,
  },
  {
    id: "gs5",
    name: "Pastor Emmanuel A.",
    avatar: "👨",
    lossType: "Community Tragedy",
    title: "Pastoring a church through a mass shooting",
    body: "Three of our members were killed in a shooting in our city last year. I walked into that hospital not knowing what to say. I didn't say much. I held hands. I wept.\n\nPastoring in grief is mostly just being present. The answers can come later — if they come at all. In that moment, people don't need theology. They need Emmanuel — God with us.\n\nWe've held 12 grief support circles since. We've partnered with trauma counselors. And slowly, slowly, God is bringing something from the ashes — not a replacement for what was lost, but a deeper community that knows it needs each other.",
    verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    verseRef: "Psalm 34:18",
    timeAgo: "11 months ago",
    likes: 1890,
    hopeful: true,
  },
];

const journalPrompts = [
  "What do I miss most today?",
  "What would I want to say to them if I could?",
  "How has this loss changed what I value?",
  "What has surprised me about grief?",
  "Where have I seen God in the middle of this pain?",
  "What do I need to forgive — myself, others, or God?",
  "What small thing brought me a moment of peace this week?",
  "What do I believe about eternity, and how does it help (or not help) today?",
  "What would they want for me?",
  "What am I afraid of feeling?",
  "Where am I in my grief right now — and is that okay?",
  "What has the church gotten right in supporting me? What has it gotten wrong?",
];

const griefResources = [
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    type: "Book",
    description: "Lewis's raw journal after losing his wife — one of the most honest accounts of grief and faith ever written.",
    icon: "📖",
  },
  {
    title: "Lament for a Son",
    author: "Nicholas Wolterstorff",
    type: "Book",
    description: "A philosopher's deeply personal reflection after the death of his 25-year-old son. Profound and honest.",
    icon: "📖",
  },
  {
    title: "The Year of Magical Thinking",
    author: "Joan Didion",
    type: "Book",
    description: "Though not explicitly Christian, this memoir of sudden loss is among the most truthful portrayals of acute grief.",
    icon: "📖",
  },
  {
    title: "When God Doesn't Fix It",
    author: "Laura Story",
    type: "Book",
    description: "Written by a worship leader whose husband suffered a brain tumor — a real exploration of unanswered prayer.",
    icon: "📖",
  },
  {
    title: "GriefShare",
    author: "Church Initiative",
    type: "Program",
    description: "A proven 13-week grief recovery program used by over 15,000 churches. Find a local group at griefshare.org.",
    icon: "🤝",
  },
  {
    title: "Grief Support Community",
    author: "Vine",
    type: "Community",
    description: "A private, moderated space on Vine for those walking through loss. No pressure, no platitudes.",
    icon: "💬",
  },
];

const VOICES_GRIEF = [
  { id: "lewis", name: "C.S. Lewis", era: "1898-1963", context: "A Grief Observed (1961); written after the death of his wife Joy Davidman", bio: "Lewis married Joy Davidman in 1956 — he was 57, a lifelong bachelor, and had been friends with her for years before falling in love. She died of cancer four years later. A Grief Observed is the journal he kept afterward, honest to the point of disturbing his own faith: 'No one ever told me that grief felt so much like fear.' He described God as a door slammed in his face, and he was not ashamed to write it. The book goes on to move through that darkness to a harder, realer faith on the other side.", quote: "No one ever told me that grief felt so much like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning.", contribution: "A Grief Observed is the most honest book a famous Christian ever wrote about losing faith in the middle of grief — and the most honest about finding his way back. It gave permission to Christians to be honest about what grief actually feels like rather than performing faith they didn't have." },
  { id: "wolterstorff", name: "Nicholas Wolterstorff", era: "b. 1932", context: "Lament for a Son (1987); written after his 25-year-old son Eric died in a mountain climbing accident", bio: "Wolterstorff is one of the most distinguished Christian philosophers of the 20th century — a man who had spent decades thinking carefully about God, theodicy, and suffering. Lament for a Son was written not as a philosophical treatise but as a raw journal of a father's grief. It contains some of the most precise and devastating sentences about loss ever written by a Christian thinker, including his conviction that God himself grieves — and that in the face of suffering, God's own tears fall alongside ours.", quote: "How is faith to endure, O God, when you allow all this scraping and tearing on us? You could have prevented it... I cannot fit it all together. I can only, with Job, endure.", contribution: "Demonstrated that rigorous philosophical theology and raw emotional grief are not opposites. Lament for a Son gave intellectual believers permission to feel what they feel without resolving it prematurely into systematic explanations." },
  { id: "keller", name: "Tim Keller", era: "1950-2023", context: "Walking with God through Pain and Suffering (2013); his own pancreatic cancer diagnosis in 2020", bio: "Keller's Walking with God through Pain and Suffering is the most comprehensive evangelical theology of suffering in a generation. He traces how different worldviews handle suffering, why Christianity's answer is uniquely able to give both comfort and meaning, and how grief and praise can coexist. After his own cancer diagnosis in 2020, he wrote and spoke publicly about what it was like to live the theology he had written — particularly the discovery that intellectual understanding of suffering and emotional experience of it are two very different things.", quote: "Christianity does not offer an explanation of suffering. It offers something better: a God who enters into suffering with us.", contribution: "Synthesized the intellectual and pastoral dimensions of a theology of suffering in a way accessible to a broad evangelical audience. His willingness to be publicly honest about his own dying made the theology incarnate." },
  { id: "nouwen", name: "Henri Nouwen", era: "1932-1996", context: "A Letter of Consolation (1982); Turn My Mourning into Dancing (2001)", bio: "Nouwen wrote A Letter of Consolation after the death of his mother — a letter to his father about grief, love, and the hope of reunion. His approach to grief is shaped by his conviction that all human love is a pale reflection of God's love, and that death is not an ending but a transition into the fullness of what love always pointed toward. He brought a pastoral sensitivity to grief that was both deeply theological and deeply human — shaped by his years as a priest, professor, and community member at L'Arche.", quote: "The pain of loss can become the source of new life — not because loss doesn't hurt, but because the God who created love does not abandon those who have loved.", contribution: "Showed that grief is not a problem to be solved but a form of love that deserves to be honored. His pastoral writings on loss became essential resources for Christians in grief ministry." },
  { id: "willard", name: "Dallas Willard", era: "1935-2013", context: "Renovation of the Heart (2002); The Divine Conspiracy (1998); longtime friend and collaborator of John Ortberg", bio: "Willard rarely wrote directly about grief, but his entire body of work on spiritual formation has profound implications for how Christians grieve. His conviction that the spiritual disciplines are not for earning merit but for training the whole person — body, mind, soul, will — means that grief is not a spiritual interruption but a spiritual formation event. His death in 2013 from kidney cancer prompted moving accounts from those who observed his remarkable peace as he approached death — peace he had spent his life building through practice.", quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action. Earning is attitude. And grief — if brought into the presence of God — becomes one of the most formative efforts of the Christian life.", contribution: "Provided a framework for understanding grief as spiritual formation — not something to get through, but something to inhabit carefully as God does his work in the soul." },
];

const moodOptions = ["🌧️ Dark", "😶 Numb", "😢 Sad", "😤 Angry", "🌤️ Cautiously okay", "☀️ Peaceful"];

export default function GriefPage() {
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [activeTab, setActiveTab] = useState<"stories" | "voices" | "journal" | "resources" | "videos">("stories");
  const [selectedVoice, setSelectedVoice] = useState("lewis");
  const voiceItem = VOICES_GRIEF.find(v => v.id === selectedVoice)!;
  const [selectedStory, setSelectedStory] = useState<GriefStory | null>(null);
  const [todayPrompt] = useState(() => journalPrompts[Math.floor(Math.random() * journalPrompts.length)]);
  const [journalText, setJournalText] = useState("");
  const [mood, setMood] = useState("");
  const [filterLoss, setFilterLoss] = useState("All");

  useEffect(() => {
    try {
      const l = localStorage.getItem("vine_grief_liked");
      if (l) setLikedStories(new Set(JSON.parse(l)));
      const j = localStorage.getItem("vine_grief_journal");
      if (j) setJournalEntries(JSON.parse(j));
    } catch {}
  }, []);

  const handleLike = (id: string) => {
    setLikedStories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_grief_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleSaveJournal = () => {
    if (!journalText.trim()) return;
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      prompt: todayPrompt,
      response: journalText,
      mood,
    };
    const next = [entry, ...journalEntries];
    setJournalEntries(next);
    try { localStorage.setItem("vine_grief_journal", JSON.stringify(next)); } catch {}
    setJournalText("");
    setMood("");
  };

  const lossTypes = ["All", ...Array.from(new Set(griefStories.map((s) => s.lossType)))];

  const filteredStories = griefStories.filter(
    (s) => filterLoss === "All" || s.lossType === filterLoss
  );

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(180deg, #0d0a14 0%, #07070F 100%)",
          padding: "56px 24px 40px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 44, marginBottom: 12 }}>🕊️</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 10 }}>Grief & Loss</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 560, margin: "0 auto 16px" }}>
          A gentle, honest space for those walking through loss. Stories from real people, a private journal, and resources that don't pretend grief is simple.
        </p>
        <div
          style={{
            background: "#12121F",
            border: "1px solid #1E1E3250",
            borderRadius: 12,
            padding: "14px 20px",
            maxWidth: 560,
            margin: "0 auto",
            fontSize: 14,
            color: "#9898B3",
            lineHeight: 1.6,
          }}
        >
          This is a safe space. You don't have to be 'doing well.' You don't have to have answers. You're welcome here exactly as you are.
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 4, gap: 4, marginBottom: 28 }}>
          {(["stories", "voices", "journal", "resources", "videos"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1, padding: "9px 16px", borderRadius: 7, border: "none",
                background: activeTab === tab ? "#6B4FBB" : "transparent",
                color: activeTab === tab ? "#fff" : "#9898B3",
                cursor: "pointer", fontWeight: 600, fontSize: 14,
              }}
            >
              {tab === "stories" ? "Stories" : tab === "voices" ? "Voices" : tab === "journal" ? `Journal${journalEntries.length ? ` (${journalEntries.length})` : ""}` : tab === "resources" ? "Resources" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* STORIES TAB */}
        {activeTab === "stories" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {lossTypes.map((lt) => (
                <button key={lt} onClick={() => setFilterLoss(lt)}
                  style={{
                    padding: "5px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                    border: `1px solid ${filterLoss === lt ? "#6B4FBB" : "#1E1E32"}`,
                    background: filterLoss === lt ? "#6B4FBB20" : "transparent",
                    color: filterLoss === lt ? "#6B4FBB" : "#9898B3",
                  }}>
                  {lt}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {filteredStories.map((story) => {
                const liked = likedStories.has(story.id);
                return (
                  <div key={story.id}
                    style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24, cursor: "pointer" }}
                    onClick={() => setSelectedStory(story)}>
                    <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                        {story.avatar}
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>{story.name}</div>
                        <div style={{ display: "flex", gap: 8, fontSize: 12, color: "#9898B3" }}>
                          <span style={{ padding: "1px 8px", background: "#1E1E32", borderRadius: 20 }}>{story.lossType}</span>
                          <span>{story.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F2F2F8", margin: "0 0 10px", lineHeight: 1.4 }}>
                      {story.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, marginBottom: 14 }}>
                      {story.body.split("\n")[0]}...
                    </p>

                    <div style={{ borderLeft: "3px solid #6B4FBB40", paddingLeft: 12, marginBottom: 14 }}>
                      <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic" }}>"{story.verse}"</div>
                      <div style={{ fontSize: 11, color: "#6B4FBB", marginTop: 2 }}>{story.verseRef}</div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>
                        {story.hopeful && <span style={{ color: "#00FF88", marginRight: 8 }}>🌱 Hopeful</span>}
                        Read more →
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleLike(story.id); }}
                        style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: liked ? "#00FF8815" : "#1E1E32", color: liked ? "#00FF88" : "#9898B3", cursor: "pointer", fontSize: 12 }}>
                        ♥ {story.likes + (liked ? 1 : 0)}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_GRIEF.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#00FF88", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #00FF88", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#00FF88", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.1)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Grief Theology</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* JOURNAL TAB */}
        {activeTab === "journal" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            {/* Today's prompt */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 24, marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: "#6B4FBB", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                Today's Reflection Prompt
              </div>
              <div style={{ fontSize: 17, color: "#F2F2F8", fontWeight: 600, marginBottom: 16 }}>
                "{todayPrompt}"
              </div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 8 }}>How are you today?</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {moodOptions.map((m) => (
                    <button key={m} onClick={() => setMood(mood === m ? "" : m)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, border: `1px solid ${mood === m ? "#6B4FBB" : "#1E1E32"}`,
                        background: mood === m ? "#6B4FBB20" : "transparent",
                        color: mood === m ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 12,
                      }}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Write whatever comes — there's no wrong answer. This is private, just between you and God."
                rows={6}
                style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "12px 14px", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", lineHeight: 1.7, boxSizing: "border-box", marginBottom: 12 }}
              />

              <button
                onClick={handleSaveJournal}
                disabled={!journalText.trim()}
                style={{
                  padding: "10px 24px", borderRadius: 8, border: "none",
                  background: journalText.trim() ? "#6B4FBB" : "#1E1E32",
                  color: journalText.trim() ? "#fff" : "#9898B3",
                  cursor: journalText.trim() ? "pointer" : "default", fontWeight: 600, fontSize: 14,
                }}>
                Save Entry
              </button>
            </div>

            {/* Past entries */}
            {journalEntries.length > 0 && (
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 14 }}>
                  Past Entries ({journalEntries.length})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {journalEntries.map((entry) => (
                    <div key={entry.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{ fontSize: 12, color: "#9898B3" }}>
                          {new Date(entry.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                        </div>
                        {entry.mood && <div style={{ fontSize: 12, color: "#9898B3" }}>{entry.mood}</div>}
                      </div>
                      <div style={{ fontSize: 12, color: "#6B4FBB", marginBottom: 6, fontStyle: "italic" }}>"{entry.prompt}"</div>
                      <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: 0 }}>
                        {entry.response.slice(0, 200)}{entry.response.length > 200 ? "..." : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === "resources" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #6B4FBB30",
                borderRadius: 14,
                padding: 20,
                marginBottom: 24,
                borderLeft: "4px solid #6B4FBB",
              }}
            >
              <div style={{ fontSize: 14, color: "#F2F2F8", fontWeight: 600, marginBottom: 6 }}>A note before you read</div>
              <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: 0 }}>
                Grief doesn't follow a formula. These resources are offered gently — not as a roadmap, but as companions.
                If you're in acute crisis, please reach out to a counselor, pastor, or crisis line. You don't have to navigate this alone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {griefResources.map((res) => (
                <div key={res.title} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 28 }}>{res.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 2 }}>{res.type}</div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", margin: 0, lineHeight: 1.3 }}>{res.title}</h3>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>{res.author}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{res.description}</p>
                </div>
              ))}
            </div>

            {/* Crisis banner */}
            <div style={{ background: "#1a1220", border: "1px solid #6B4FBB30", borderRadius: 14, padding: 20, marginTop: 24, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 8 }}>
                If you're in crisis or having thoughts of self-harm, please reach out immediately.
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>
                988 Suicide & Crisis Lifeline: call or text <span style={{ color: "#00FF88" }}>988</span>
              </div>
              <div style={{ fontSize: 13, color: "#9898B3", marginTop: 4 }}>
                Crisis Text Line: text <span style={{ color: "#00FF88" }}>HOME</span> to 741741
              </div>
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#00FF88", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on grief, lament, and finding God in loss — for those who are walking through darkness or supporting others who are.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "3DoW8ntjSbA", title: "When Grief Feels Unbearable — Finding God in Loss", channel: "Desiring God", description: "Honest pastoral teaching on grief — what the Bible says about mourning, why God invites lament rather than suppressing it, and how the Psalms give us language for the darkest seasons." },
                  { videoId: "XCzd0qF3Mlg", title: "The Psalms of Lament: Permission to Grieve", channel: "The Bible Project", description: "An exploration of the lament psalms — how they model honest, raw prayer in the midst of suffering and why the church needs to recover the practice of bringing grief to God." },
                  { videoId: "DxOWWWVDGD0", title: "Walking Through Grief: Practical Wisdom for the Journey", channel: "Focus on the Family", description: "Practical and compassionate guidance for those in grief — the stages, the timeline, what helps and what doesn't, and how to support others who are grieving." },
                  { videoId: "jKYUeGJ5-fM", title: "Why Does God Allow Suffering? The Christian Answer", channel: "Ravi Zacharias International Ministries", description: "Engaging the deepest question that grief raises — why does a good God allow suffering and loss? What the Christian answer is, and why it differs from every other worldview." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: "#00FF88", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelectedStory(null)}>
          <div
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 32, maxWidth: 620, width: "100%", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                {selectedStory.avatar}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8" }}>{selectedStory.name}</div>
                <div style={{ fontSize: 12, color: "#9898B3" }}>{selectedStory.lossType} · {selectedStory.timeAgo}</div>
              </div>
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 20, lineHeight: 1.3 }}>
              {selectedStory.title}
            </h2>

            {selectedStory.body.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#D0D0E8", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
            ))}

            <div style={{ borderLeft: "3px solid #6B4FBB", paddingLeft: 16, margin: "24px 0" }}>
              <div style={{ fontSize: 15, color: "#F2F2F8", fontStyle: "italic", marginBottom: 4 }}>"{selectedStory.verse}"</div>
              <div style={{ fontSize: 13, color: "#6B4FBB" }}>{selectedStory.verseRef}</div>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button
                onClick={() => handleLike(selectedStory.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: likedStories.has(selectedStory.id) ? "#00FF8815" : "#1E1E32",
                  color: likedStories.has(selectedStory.id) ? "#00FF88" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 15 }}>
                ♥ {selectedStory.likes + (likedStories.has(selectedStory.id) ? 1 : 0)} This helped me
              </button>
              <button onClick={() => setSelectedStory(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
