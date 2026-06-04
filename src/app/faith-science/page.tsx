"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Data ───────────────────────────────────────────────────────────────────

const FS_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Science and Christianity — Are They Compatible?", channel: "Gospel in Life / Tim Keller", description: "Keller's definitive talk on the relationship between science and faith — why the conflict is mostly a myth and where the real tensions lie." },
  { videoId: "ACZbpLkY8To", title: "The Heavens Declare — Cosmology and Creation", channel: "Ligonier Ministries", description: "How modern cosmology — the Big Bang, fine-tuning, and the anthropic principle — speaks to the existence of God." },
  { videoId: "fJnGJN6laqE", title: "Evolution, Creation, and the Christian", channel: "Desiring God", description: "A pastoral approach to the origins debate — how Christians can hold their convictions with confidence and humility." },
  { videoId: "Z8lkuuhVkOI", title: "Faith and Science — John Lennox", channel: "Unbelievable?", description: "Oxford mathematician and Christian apologist John Lennox makes the case that science and faith are not in conflict but mutually enriching." },
];

const TOPICS = [
  {
    id: "big-bang-genesis",
    title: "The Big Bang & Genesis",
    category: "Cosmology",
    difficulty: "Intermediate" as const,
    summary:
      "Modern cosmology's discovery that the universe had an absolute beginning maps strikingly onto the Genesis declaration 'In the beginning, God created.' Ex nihilo creation, once considered a purely theological concept, is now the scientific consensus.",
    keyPoints: [
      "The Big Bang requires a cause outside space, time, and matter",
      "Georges Lemaître — the priest who proposed the Big Bang — saw no conflict with Scripture",
      "Stephen Hawking: 'The universe has not existed forever. Rather, the universe, and time itself, had a beginning in the Big Bang'",
      "Kalam Cosmological Argument: everything that begins to exist has a cause; the universe began to exist; therefore the universe has a cause",
    ],
    bibleVerse: "In the beginning God created the heavens and the earth.",
    verseRef: "Genesis 1:1",
    relatedScientist: "Georges Lemaître",
  },
  {
    id: "evolution-dignity",
    title: "Evolution & Human Dignity",
    category: "Biology",
    difficulty: "Advanced" as const,
    summary:
      "Theological anthropology asks whether an evolutionary account of human origins undermines the imago Dei. Many Christian scholars argue that God could have used evolutionary processes while uniquely endowing humanity with rationality, morality, and a relationship with Him.",
    keyPoints: [
      "Francis Collins: 'Evolution is God's elegant mechanism for creating biological diversity'",
      "The imago Dei is about function and relationship, not biological substrate",
      "Homo sapiens uniquely possess language, abstract thought, moral conscience, and worship",
      "BioLogos position: evolutionary creationism affirms both scientific consensus and scriptural authority",
    ],
    bibleVerse: "So God created mankind in his own image, in the image of God he created them.",
    verseRef: "Genesis 1:27",
    relatedScientist: "Francis Collins",
  },
  {
    id: "consciousness-soul",
    title: "Consciousness & the Soul",
    category: "Neuroscience",
    difficulty: "Advanced" as const,
    summary:
      "The 'hard problem of consciousness' — why there is subjective experience at all — remains unsolved by neuroscience. Christian philosophy of mind argues this explanatory gap points to the immaterial soul, which brain states correlate with but do not produce.",
    keyPoints: [
      "David Chalmers' hard problem: physical processes don't explain why there is 'something it is like' to be conscious",
      "Rosalind Picard (MIT): consciousness and emotion suggest we are more than information processors",
      "Substance dualism holds that mind and matter are distinct — neurons are the instrument, not the player",
      "Near-death experiences provide indirect evidence for mind–body independence",
    ],
    bibleVerse: "The LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life.",
    verseRef: "Genesis 2:7",
    relatedScientist: "Rosalind Picard",
  },
  {
    id: "fine-tuned-universe",
    title: "Fine-Tuned Universe",
    category: "Physics",
    difficulty: "Intermediate" as const,
    summary:
      "The fundamental constants of physics — the cosmological constant, gravitational force, mass of the electron — are calibrated to extraordinary precision for life to exist. Even slight deviations would produce a lifeless cosmos. This is the anthropic principle, and it is among the strongest scientific pointers toward design.",
    keyPoints: [
      "The cosmological constant is fine-tuned to 1 part in 10^120",
      "John Polkinghorne: 'It is very hard to resist the impression that the universe was set up with us in mind'",
      "The multiverse hypothesis is a philosophical response, not a scientific observation",
      "Robin Collins: the fine-tuning argument does not require a 'God of the gaps' — it is an inference to the best explanation",
    ],
    bibleVerse: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    verseRef: "Psalm 19:1",
    relatedScientist: "John Polkinghorne",
  },
  {
    id: "dna-information",
    title: "DNA & Information",
    category: "Genetics",
    difficulty: "Intermediate" as const,
    summary:
      "DNA stores and transmits specified, complex information — the hallmark of intelligence in every other domain we know. Information theorists like Stephen Meyer argue that naturalistic processes cannot explain the origin of the first self-replicating cell's genetic code.",
    keyPoints: [
      "The human genome contains ~3.2 billion base pairs — more information than an encyclopedia set",
      "Claude Shannon's information theory: information always comes from a mind",
      "Michael Behe's irreducible complexity: some biochemical systems cannot function with fewer parts",
      "Origin of life remains the biggest unsolved problem in biology — no adequate naturalistic explanation exists",
    ],
    bibleVerse: "For you created my inmost being; you knit me together in my mother's womb.",
    verseRef: "Psalm 139:13",
    relatedScientist: "Francis Collins",
  },
  {
    id: "nde-afterlife",
    title: "Near-Death Experiences",
    category: "Neuroscience",
    difficulty: "Beginner" as const,
    summary:
      "Thousands of clinically verified near-death experiences — including detailed, accurate perceptions during cardiac arrest when the brain shows no activity — challenge purely materialist accounts of consciousness and align with the Christian promise of life after death.",
    keyPoints: [
      "The AWARE study (Sam Parnia) documented accurate out-of-body perceptions during resuscitation",
      "Blind-from-birth individuals have reported accurate visual NDEs",
      "Common elements: light, peace, life review, encountering deceased relatives — consistent across cultures",
      "NDEs are not proof of heaven, but they are evidence against the view that mind = brain",
    ],
    bibleVerse: "For to me, to live is Christ and to die is gain.",
    verseRef: "Philippians 1:21",
    relatedScientist: "Rosalind Picard",
  },
  {
    id: "miracles-natural-law",
    title: "Miracles & Natural Law",
    category: "Philosophy",
    difficulty: "Intermediate" as const,
    summary:
      "David Hume argued that no testimony can establish a miracle because the probability of a law of nature being violated always exceeds the probability of the testimony being true. C.S. Lewis's rebuttal: if a God exists who created natural law, He can supersede it — Hume's argument only works if you already assume no God.",
    keyPoints: [
      "Lewis: 'If we admit God, must we admit miracle? Indeed, indeed, you have no security against it.'",
      "Hume's argument is circular — it presupposes naturalism to refute theism",
      "John Earman (atheist philosopher): 'Hume's Of Miracles is an abject failure'",
      "The Resurrection is the central miracle claim — and the historical evidence for it is substantial (N.T. Wright)",
    ],
    bibleVerse: "Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'",
    verseRef: "Matthew 19:26",
    relatedScientist: "Alvin Plantinga",
  },
  {
    id: "age-of-earth",
    title: "Age of the Earth",
    category: "Geology",
    difficulty: "Beginner" as const,
    summary:
      "Christians hold a range of views on the earth's age: Young-Earth Creationism (~10,000 years), Old-Earth Creationism (billions of years, literal days), and Evolutionary Creationism (BioLogos). The key insight is that sincere, Bible-believing scholars disagree — and this need not divide the church.",
    keyPoints: [
      "Old-Earth: the Hebrew 'yom' (day) can mean an indefinite period; the genre of Genesis 1 is liturgical",
      "Young-Earth: a straightforward reading sees literal 24-hour days; apparent age is theologically possible",
      "BioLogos (Francis Collins, Ard Louis): full evolutionary timeline, all compatible with orthodox faith",
      "The age of the earth is a secondary issue — the primary claim is that God created intentionally",
    ],
    bibleVerse: "By faith we understand that the universe was formed at God's command.",
    verseRef: "Hebrews 11:3",
    relatedScientist: "Ard Louis",
  },
];

const THINKERS = [
  {
    id: "francis-collins",
    name: "Francis Collins",
    field: "Genetics",
    years: "b. 1950",
    quote:
      "Science is the only reliable way to understand the natural world, and its tools when properly applied, never fail to give us deeper insights into it. God did not write the human genome, but the DNA code is the language in which God chose to speak.",
    contribution:
      "Led the Human Genome Project — the largest collaborative biology project in history — mapping all 3.2 billion base pairs of human DNA. A former atheist, Collins found faith through reading C.S. Lewis during his medical residency. Founded BioLogos to promote harmony between evolutionary science and Christian faith.",
    books: ["The Language of God", "The Language of Life", "Belief: Readings on the Reason for Faith"],
    perspective: "Scientist Who Found Faith" as const,
    emoji: "🧬",
    color: "#3a7d56",
  },
  {
    id: "john-polkinghorne",
    name: "John Polkinghorne",
    field: "Theoretical Physics",
    years: "1930–2021",
    quote:
      "The universe is not just the stage on which the drama of history is played out, but it is itself a character in that drama.",
    contribution:
      "One of the world's leading theoretical physicists, Polkinghorne resigned his Cambridge professorship at 49 to train as an Anglican priest. He wrote extensively on the relationship between quantum physics and theology, arguing that science and religion are complementary, not competing, ways of exploring reality.",
    books: ["The Faith of a Physicist", "Quantum Physics and Theology", "Science and the Trinity"],
    perspective: "Faith-affirming Scientist" as const,
    emoji: "⚛️",
    color: "#6B4FBB",
  },
  {
    id: "alvin-plantinga",
    name: "Alvin Plantinga",
    field: "Philosophy",
    years: "b. 1932",
    quote:
      "The evidentialist objection to theism, therefore, fails. It is entirely possible that theistic belief is properly basic.",
    contribution:
      "Considered the greatest living Christian philosopher, Plantinga developed Reformed Epistemology — the view that belief in God can be 'properly basic' and rational without requiring argument. His Evolutionary Argument Against Naturalism shows that unguided evolution undermines the reliability of all human reasoning, including science.",
    books: ["God, Freedom, and Evil", "Warranted Christian Belief", "Where the Conflict Really Lies"],
    perspective: "Faith-affirming Scientist" as const,
    emoji: "🧠",
    color: "#6B4FBB",
  },
  {
    id: "jennifer-wiseman",
    name: "Jennifer Wiseman",
    field: "Astrophysics",
    years: "b. 1965",
    quote:
      "I find that studying the universe — its vastness, its complexity, its early formation — gives me a sense of awe and actually draws me to deeper faith.",
    contribution:
      "Senior Project Scientist for the Hubble Space Telescope and Director of the BioLogos Forum. Wiseman has co-discovered several comets and studies star-forming regions. She speaks internationally on the integration of science, faith, and ethics.",
    books: ["Worlds Without End: Exoplanets, Habitability, and the Future of Humanity"],
    perspective: "Faith-affirming Scientist" as const,
    emoji: "🔭",
    color: "#3a7d56",
  },
  {
    id: "cs-lewis",
    name: "C.S. Lewis",
    field: "Literature & Philosophy",
    years: "1898–1963",
    quote:
      "I believe in Christianity as I believe that the Sun has risen — not only because I see it, but because by it I see everything else.",
    contribution:
      "Oxford and Cambridge scholar in medieval and Renaissance literature who became the 20th century's most influential Christian apologist. A committed atheist who was argued into theism by J.R.R. Tolkien, Lewis went on to write Mere Christianity, The Problem of Pain, and The Chronicles of Narnia.",
    books: ["Mere Christianity", "The Problem of Pain", "Miracles", "Surprised by Joy"],
    perspective: "Scientist Who Found Faith" as const,
    emoji: "📚",
    color: "#F59E0B",
  },
  {
    id: "georges-lemaitre",
    name: "Georges Lemaître",
    field: "Physics & Cosmology",
    years: "1894–1966",
    quote:
      "The theory of the expanding universe is neither opposed to nor in conflict with the truths of religion.",
    contribution:
      "Belgian Catholic priest and theoretical physicist who first proposed what became the Big Bang theory in 1927 — two years before Hubble's observational evidence. Einstein initially dismissed it, saying 'your math is correct but your physics is abominable.' He was later proved right. Lemaître called his discovery 'the day without yesterday.'",
    books: ["The Primeval Atom", "Discussion on the Evolution of the Universe"],
    perspective: "Faith-affirming Scientist" as const,
    emoji: "💥",
    color: "#6B4FBB",
  },
  {
    id: "rosalind-picard",
    name: "Rosalind Picard",
    field: "AI & Affective Computing",
    years: "b. 1962",
    quote:
      "I was an atheist scientist for most of my adult life. What changed my mind was the realization that the deepest questions — consciousness, love, meaning — simply cannot be answered by science alone.",
    contribution:
      "Founder and Director of the Affective Computing Research Group at the MIT Media Lab, Picard pioneered the field of affective computing — teaching machines to recognize and respond to human emotion. Her research on autism and emotion has changed thousands of lives. A former atheist, she became a Christian in her 30s through engagement with Christian scholars.",
    books: ["Affective Computing", "Automating Inequality (contributor)"],
    perspective: "Scientist Who Found Faith" as const,
    emoji: "🤖",
    color: "#3a7d56",
  },
  {
    id: "ard-louis",
    name: "Ard Louis",
    field: "Physics & Biology",
    years: "b. 1971",
    quote:
      "God is not just a 'God of the gaps' who fills in what science can't explain. He is the God who underlies and sustains all the science we do understand.",
    contribution:
      "Professor of Theoretical Physics at Oxford, Ard Louis researches the interface of physics and biology — including how random mutations are constrained by protein fold space. He is an evolutionary creationist and frequent contributor to BioLogos, and speaks widely on how Christians can fully embrace evolutionary science.",
    books: ["The Blackwell Companion to Science and Christianity (contributor)", "Science and Belief (contributor)"],
    perspective: "Faith-affirming Scientist" as const,
    emoji: "🌿",
    color: "#6B4FBB",
  },
];

const QA_ITEMS = [
  {
    id: "qa-1",
    question: "Does science disprove God?",
    answer:
      "Science describes the mechanisms of the physical world; it cannot, by design, address whether a transcendent Creator exists. As Alvin Plantinga argues, science and theism are not in conflict — naturalism (the philosophical assumption that matter is all there is) is what conflicts with theism. Many of history's greatest scientists — Newton, Faraday, Lemaître, Collins — held deep Christian faith alongside rigorous scientific work.",
  },
  {
    id: "qa-2",
    question: "Can I believe in evolution and be a Christian?",
    answer:
      "Yes — and millions of Christians do. Evolutionary creationism (the BioLogos position, championed by Francis Collins) holds that God created through an evolutionary process. The core theological claims — that God created intentionally, that humans bear the imago Dei, that we are fallen and in need of redemption — do not require a particular view on biological mechanisms.",
  },
  {
    id: "qa-3",
    question: "What does Genesis 1 actually say about the age of the earth?",
    answer:
      "Genesis 1 uses the Hebrew word 'yom' (day), which can mean a 24-hour period, a general era, or an indefinite span (as in 'the day of the Lord'). The text's genre is widely discussed — many scholars read it as a liturgical framework poem, not a scientific account of chronology. Sincere, Bible-believing scholars land in different places, and intellectual humility is appropriate here.",
  },
  {
    id: "qa-4",
    question: "How do we explain natural evil if God is good?",
    answer:
      "The problem of natural evil (earthquakes, disease, cancer) is one of Christianity's hardest challenges. Responses include: the 'natural consequences of a fallen creation' framework (Romans 8:20-22), the soul-making theodicy (suffering shapes character in ways comfort cannot), and the divine hiddenness reframe — that God's allowing suffering is consistent with a greater good we cannot fully see. No answer fully satisfies; honest lament is also a Christian tradition (see the Psalms and Job).",
  },
  {
    id: "qa-5",
    question: "Is the Big Bang compatible with creation?",
    answer:
      "The Big Bang — which posits that the universe had an absolute beginning from a singularity — is arguably the most theism-friendly cosmological discovery in history. The priest-physicist Georges Lemaître proposed it; Fred Hoyle (an atheist) coined the term 'Big Bang' as mockery, preferring an eternal steady-state universe precisely because a beginning implied a Beginner. The Kalam Cosmological Argument uses the Big Bang as a key premise.",
  },
  {
    id: "qa-6",
    question: "Did humans have souls before modern humans evolved?",
    answer:
      "This is a genuinely open question in Christian theology. Some scholars propose that God imparted the image of God (rationality, morality, relationship) to Homo sapiens at a specific point in evolutionary history; others see the imago Dei as a functional vocation given to a particular population. What Christian anthropology requires is that the distinction between humans and animals is real and morally significant — the exact biological timeline is secondary.",
  },
  {
    id: "qa-7",
    question: "How should Christians respond to scientific consensus?",
    answer:
      "With respect, engagement, and discernment. Scientific consensus reflects the best current interpretation of evidence, not settled metaphysical truth — consensus has been wrong before (e.g., the steady-state universe, stomach ulcers being stress-induced). Christians should be neither reflexively dismissive nor uncritically deferential. Where consensus conflicts with core theological commitments, careful examination of both the science and the hermeneutics is required.",
  },
  {
    id: "qa-8",
    question: "Are miracles possible in a closed physical universe?",
    answer:
      "This question presupposes the universe is causally closed — but that is a philosophical assumption, not a scientific finding. C.S. Lewis argued in Miracles that if God created natural law, He is not bound by it; the same way an author can enter their own novel. Quantum indeterminacy also challenges strict physical closure. The real question is whether God exists — if He does, miracles are not merely possible but expected.",
  },
  {
    id: "qa-9",
    question: "What is theistic evolution?",
    answer:
      "Theistic evolution (also called evolutionary creationism) is the view that God created all life through the process of evolution. It accepts the scientific consensus on common descent and the age of the earth while affirming God as the intentional Creator who sustains natural processes and who uniquely endowed humans with the image of God. It is distinct from deism in that God is understood to be actively involved, not merely a first cause.",
  },
  {
    id: "qa-10",
    question: "Can prayer change physical reality?",
    answer:
      "Double-blind studies on intercessory prayer have shown mixed results, which is expected — prayer is not a magic formula but a relational act addressed to a personal God who is free to respond as He sees fit. The Christian claim is not that prayer mechanically changes physics, but that a personal God hears, cares, and acts. Anecdotal and some observational evidence suggests remarkable correlations; the theological framework holds that God's answers may be 'yes,' 'no,' or 'wait.'",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(TOPICS.map((t) => t.category)))];
const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

// ─── Component ──────────────────────────────────────────────────────────────

export default function FaithSciencePage() {
  // Tab state
  const [activeTab, setActiveTab] = usePersistedState<"topics" | "thinkers" | "qa" | "history" | "videos">("vine_faith-science_tab", "topics");

  // Saved topics (localStorage)
  const [savedTopics, setSavedTopics] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_faith_science_saved");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  // Read topics (localStorage)
  const [readTopics, setReadTopics] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_faith_science_read");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  // Filters
  const [categoryFilter, setCategoryFilter] = usePersistedState("vine_faith-science_category_filter", "All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [selectedThinker, setSelectedThinker] = useState<(typeof THINKERS)[0] | null>(null);

  // Q&A expanded state
  const [expandedQA, setExpandedQA] = useState<Set<string>>(new Set());

  // ── Mutations ──────────────────────────────────────────────────────────────

  const toggleSaved = (id: string) => {
    setSavedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem("vine_faith_science_saved", JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  const toggleRead = (id: string) => {
    setReadTopics((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem("vine_faith_science_read", JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  const toggleQA = (id: string) => {
    setExpandedQA((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // ── Derived filtered data ──────────────────────────────────────────────────

  const filteredTopics = TOPICS.filter((t) => {
    if (categoryFilter !== "All" && t.category !== categoryFilter) return false;
    if (difficultyFilter !== "All" && t.difficulty !== difficultyFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredThinkers = searchQuery
    ? THINKERS.filter((t) => {
        const q = searchQuery.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          t.field.toLowerCase().includes(q) ||
          t.contribution.toLowerCase().includes(q)
        );
      })
    : THINKERS;

  // ── Styles ──────────────────────────────────────────────────────────────────

  const BG = "#07070F";
  const CARD_BG = "#12121F";
  const BORDER = "#1E1E32";
  const GREEN = "#3a7d56";
  const PURPLE = "#6B4FBB";
  const TEXT = "#F2F2F8";
  const SECONDARY = "#9898B3";

  const difficultyColor: Record<string, string> = {
    Beginner: "#3a7d56",
    Intermediate: "#F59E0B",
    Advanced: "#EF4444",
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(180deg, rgba(107,79,187,0.12) 0%, transparent 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(58,125,86,0.08)",
              border: `1px solid rgba(58,125,86,0.2)`,
              color: GREEN,
            }}
          >
            <span>✦</span>
            <span>Faith &amp; Science</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
            style={{
              background: `linear-gradient(135deg, ${TEXT} 40%, ${GREEN})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Faith &amp; Science
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: SECONDARY }}>
            Where reason meets revelation
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <span
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: SECONDARY, pointerEvents: "none" }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Search topics and thinkers…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                color: TEXT,
                borderRadius: "12px",
                padding: "10px 16px 10px 40px",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, background: BG, zIndex: 40 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-1">
          {(["topics", "thinkers", "qa", "history", "videos"] as const).map((tab) => {
            const labels: Record<string, string> = { topics: "Topics", thinkers: "Thinkers", qa: "Q&A", history: "History", videos: "Videos" };
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "16px 20px",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? GREEN : SECONDARY,
                  borderBottom: isActive ? `2px solid ${GREEN}` : "2px solid transparent",
                  background: "none",
                  border: "none",
                  borderBottomWidth: "2px",
                  borderBottomStyle: "solid",
                  borderBottomColor: isActive ? GREEN : "transparent",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-20">

        {/* ════════════ TOPICS TAB ════════════ */}
        {activeTab === "topics" && (
          <div>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex flex-wrap gap-2">
                <span style={{ color: SECONDARY, fontSize: "0.8rem", alignSelf: "center", marginRight: 4 }}>Category:</span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      background: categoryFilter === cat ? "rgba(58,125,86,0.12)" : CARD_BG,
                      border: `1px solid ${categoryFilter === cat ? "rgba(58,125,86,0.4)" : BORDER}`,
                      color: categoryFilter === cat ? GREEN : SECONDARY,
                      transition: "all 0.15s",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <span style={{ color: SECONDARY, fontSize: "0.8rem", alignSelf: "center", marginRight: 4 }}>Difficulty:</span>
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficultyFilter(d)}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      background: difficultyFilter === d ? "rgba(107,79,187,0.15)" : CARD_BG,
                      border: `1px solid ${difficultyFilter === d ? "rgba(107,79,187,0.5)" : BORDER}`,
                      color: difficultyFilter === d ? "#A78BFA" : SECONDARY,
                      transition: "all 0.15s",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-4 mb-6">
              <span style={{ color: SECONDARY, fontSize: "0.82rem" }}>
                Showing {filteredTopics.length} topic{filteredTopics.length !== 1 ? "s" : ""}
              </span>
              <span style={{ color: SECONDARY, fontSize: "0.82rem" }}>
                ·{" "}
                <span style={{ color: GREEN }}>{readTopics.size}</span> read
                {" "}·{" "}
                <span style={{ color: GREEN }}>{savedTopics.size}</span> saved
              </span>
            </div>

            {/* Topic cards */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => {
                const isSaved = savedTopics.has(topic.id);
                const isRead = readTopics.has(topic.id);
                return (
                  <div
                    key={topic.id}
                    style={{
                      background: isRead ? "rgba(18,18,31,0.7)" : CARD_BG,
                      border: `1px solid ${isSaved ? "rgba(58,125,86,0.25)" : BORDER}`,
                      borderRadius: "16px",
                      padding: "20px 24px",
                      opacity: isRead ? 0.75 : 1,
                      transition: "all 0.2s",
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          style={{
                            background: "rgba(107,79,187,0.15)",
                            border: `1px solid rgba(107,79,187,0.3)`,
                            color: "#A78BFA",
                            borderRadius: "6px",
                            padding: "2px 8px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {topic.category}
                        </span>
                        <span
                          style={{
                            background: `${difficultyColor[topic.difficulty]}18`,
                            border: `1px solid ${difficultyColor[topic.difficulty]}40`,
                            color: difficultyColor[topic.difficulty],
                            borderRadius: "6px",
                            padding: "2px 8px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                          }}
                        >
                          {topic.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {/* Mark as read */}
                        <label
                          style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}
                          title={isRead ? "Mark as unread" : "Mark as read"}
                        >
                          <input
                            type="checkbox"
                            checked={isRead}
                            onChange={() => toggleRead(topic.id)}
                            style={{ accentColor: GREEN, width: 15, height: 15, cursor: "pointer" }}
                          />
                          <span style={{ fontSize: "0.72rem", color: isRead ? GREEN : SECONDARY }}>
                            {isRead ? "Read" : "Mark read"}
                          </span>
                        </label>
                        {/* Save */}
                        <button
                          onClick={() => toggleSaved(topic.id)}
                          title={isSaved ? "Unsave" : "Save topic"}
                          style={{
                            background: isSaved ? "rgba(58,125,86,0.1)" : "transparent",
                            border: `1px solid ${isSaved ? "rgba(58,125,86,0.3)" : BORDER}`,
                            borderRadius: "8px",
                            padding: "5px 8px",
                            cursor: "pointer",
                            color: isSaved ? GREEN : SECONDARY,
                            fontSize: "0.85rem",
                            transition: "all 0.15s",
                          }}
                        >
                          {isSaved ? "★" : "☆"}
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: TEXT, marginBottom: "8px" }}>
                      {topic.title}
                    </h2>

                    {/* Summary */}
                    <p style={{ color: SECONDARY, fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "12px" }}>
                      {topic.summary}
                    </p>

                    {/* Key points */}
                    <ul style={{ margin: "0 0 14px 0", padding: 0, listStyle: "none" }}>
                      {topic.keyPoints.map((pt, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            marginBottom: "6px",
                            fontSize: "0.84rem",
                            color: SECONDARY,
                          }}
                        >
                          <span style={{ color: GREEN, marginTop: "2px", flexShrink: 0 }}>›</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Footer row */}
                    <div
                      className="flex flex-wrap gap-3 items-center pt-3"
                      style={{ borderTop: `1px solid ${BORDER}` }}
                    >
                      <blockquote
                        style={{
                          background: "rgba(58,125,86,0.05)",
                          border: `1px solid rgba(58,125,86,0.12)`,
                          borderRadius: "8px",
                          padding: "6px 10px",
                          fontSize: "0.78rem",
                          color: "#00CC6A",
                          fontStyle: "italic",
                          margin: 0,
                          flex: 1,
                          minWidth: "200px",
                        }}
                      >
                        &ldquo;{topic.bibleVerse}&rdquo;
                        <span style={{ display: "block", fontStyle: "normal", fontWeight: 700, marginTop: 2, color: "#008844" }}>
                          — {topic.verseRef}
                        </span>
                      </blockquote>
                      <span style={{ fontSize: "0.78rem", color: SECONDARY, flexShrink: 0 }}>
                        🔬 See also:{" "}
                        <button
                          onClick={() => {
                            setActiveTab("thinkers");
                            setSearchQuery(topic.relatedScientist.split(" ").slice(-1)[0]);
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#A78BFA",
                            cursor: "pointer",
                            fontWeight: 600,
                            padding: 0,
                            fontSize: "0.78rem",
                          }}
                        >
                          {topic.relatedScientist}
                        </button>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-20" style={{ color: SECONDARY }}>
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🔭</div>
                <p style={{ fontSize: "1rem" }}>No topics match your filters.</p>
                <button
                  onClick={() => { setCategoryFilter("All"); setDifficultyFilter("All"); setSearchQuery(""); }}
                  style={{ marginTop: "10px", color: GREEN, background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ════════════ THINKERS TAB ════════════ */}
        {activeTab === "thinkers" && (
          <div>
            <p style={{ color: SECONDARY, fontSize: "0.9rem", marginBottom: "24px" }}>
              {filteredThinkers.length} profile{filteredThinkers.length !== 1 ? "s" : ""}
              {searchQuery ? ` matching "${searchQuery}"` : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredThinkers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedThinker(t)}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "16px",
                    padding: "20px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `${t.color}50`;
                    (e.currentTarget as HTMLButtonElement).style.background = `${CARD_BG}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = BORDER;
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        background: `${t.color}18`,
                        border: `1px solid ${t.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                        flexShrink: 0,
                      }}
                    >
                      {t.emoji}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                        <h3 style={{ fontWeight: 800, fontSize: "1rem", color: TEXT }}>{t.name}</h3>
                        <span style={{ fontSize: "0.68rem", padding: "2px 7px", borderRadius: "999px", background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, flexShrink: 0, marginLeft: 8 }}>
                          {t.perspective === "Scientist Who Found Faith" ? "Found Faith" : "Affirming"}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#A78BFA", fontWeight: 600, marginBottom: 6 }}>
                        {t.field} · {t.years}
                      </p>
                      <p style={{ fontSize: "0.82rem", color: SECONDARY, lineHeight: 1.55, fontStyle: "italic" }}>
                        &ldquo;{t.quote.slice(0, 100)}{t.quote.length > 100 ? "…" : ""}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: "0.8rem", color: SECONDARY, lineHeight: 1.5 }}>
                      {t.contribution.slice(0, 120)}…
                    </p>
                    <span style={{ marginTop: "8px", display: "inline-block", fontSize: "0.75rem", color: t.color, fontWeight: 700 }}>
                      View profile →
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {filteredThinkers.length === 0 && (
              <div className="text-center py-20" style={{ color: SECONDARY }}>
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🧠</div>
                <p>No thinkers match your search.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  style={{ marginTop: "10px", color: GREEN, background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* ════════════ Q&A TAB ════════════ */}
        {activeTab === "qa" && (
          <div>
            <p style={{ color: SECONDARY, fontSize: "0.9rem", marginBottom: "24px" }}>
              Intellectually honest answers to the questions Christians and seekers most often ask.
            </p>
            <div className="space-y-3">
              {QA_ITEMS.map((item) => {
                const isOpen = expandedQA.has(item.id);
                return (
                  <div
                    key={item.id}
                    style={{
                      background: CARD_BG,
                      border: `1px solid ${isOpen ? "rgba(58,125,86,0.2)" : BORDER}`,
                      borderRadius: "14px",
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => toggleQA(item.id)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "18px 20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: "0.95rem", color: isOpen ? GREEN : TEXT, lineHeight: 1.4 }}>
                        {item.question}
                      </span>
                      <span
                        style={{
                          color: isOpen ? GREEN : SECONDARY,
                          fontSize: "1.1rem",
                          flexShrink: 0,
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: "transform 0.2s",
                          display: "inline-block",
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 20px 18px 20px",
                          borderTop: `1px solid ${BORDER}`,
                          paddingTop: "16px",
                        }}
                      >
                        <p style={{ color: SECONDARY, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

        {activeTab === "history" && (
          <div>
            <p style={{ color: "#9898B3", fontSize: "0.9rem", marginBottom: "24px" }}>
              The relationship between Christianity and science is not one of perpetual warfare — that narrative was largely invented by 19th-century polemicists. The actual history is more interesting.
            </p>
            {[
              { year: "c. 1260", title: "Roger Bacon and the Birth of Experimental Method", figure: "Roger Bacon (c. 1214-1292)", body: "The Franciscan friar Roger Bacon is one of the earliest advocates of empirical observation and experiment as a path to knowledge. His Opus Majus argued for the necessity of mathematics and experimental verification in the pursuit of truth. He did not see this as a departure from theology — he saw it as a way of understanding God's creation more accurately.", tag: "Medieval" },
              { year: "1543", title: "Copernicus Dedicates His Heliocentric Theory to the Pope", figure: "Nicolaus Copernicus (1473-1543)", body: "Copernicus, a Catholic canon, dedicated De Revolutionibus — his argument that the earth orbits the sun — to Pope Paul III. Far from being suppressed by the church, heliocentrism was initially supported by many church officials. The later conflict with Galileo (1633) was partly theological, partly political, and partly a matter of Galileo's personality — and was condemned by many of Galileo's fellow scientists as well as the church.", tag: "Renaissance" },
              { year: "1662", title: "The Royal Society Founded on Christian Premises", figure: "Robert Boyle, John Ray, and others", body: "Many founding members of the Royal Society (the world's oldest scientific society) were devout Christians who saw the study of nature as a religious duty. Robert Boyle explicitly described science as a 'priesthood of nature.' The conviction that nature was orderly and rational — because it was created by a rational God — was one of the intellectual conditions that made modern science possible.", tag: "Scientific Revolution" },
              { year: "1687", title: "Newton's Principia: God as the Ground of Natural Law", figure: "Isaac Newton (1643-1727)", body: "Newton's Principia Mathematica established the laws of universal gravitation and motion — and Newton himself saw this as a description of God's regular activity in creation. He wrote more about theology than about science. He believed the mathematical structure of the universe was evidence of divine intelligence, and he saw his scientific work as reading the mind of God from the book of nature.", tag: "Scientific Revolution" },
              { year: "1822", title: "The Church Officially Accepts Heliocentrism", figure: "Pope Pius VII", body: "The Catholic Church officially permitted the publication of books teaching heliocentrism — nearly 200 years after Galileo's condemnation. The Galileo affair, long cited as proof of Christianity's hostility to science, turns out to be more complicated: the church's position in 1633 was the scientific consensus of the day (Tycho Brahe's model), and most historians now see the conflict as rooted in personality and politics as much as theology.", tag: "Modern" },
              { year: "1865", title: "Gregor Mendel Publishes the Laws of Heredity", figure: "Gregor Mendel, O.S.A. (1822-1884)", body: "Augustinian friar Gregor Mendel published the laws of genetic inheritance that would become the foundation of modern genetics. His work was largely ignored during his lifetime and was rediscovered only in 1900 — at which point it became the mechanism that reconciled Darwin's natural selection with a mathematical account of heredity. Mendel was not doing science in spite of being a monk; the monastery gave him the resources, time, and education to do it.", tag: "Modern" },
              { year: "1927", title: "Georges Lemaître Proposes the Big Bang", figure: "Georges Lemaître (1894-1966)", body: "Belgian Catholic priest and physicist Georges Lemaître proposed that the universe was expanding — and had therefore had a beginning. Einstein initially resisted this ('Your mathematics is correct, but your physics is abominable'). The Big Bang is now scientific consensus. Lemaître was careful to distinguish the scientific account from theological interpretation, but the correspondence is striking: both Scripture and science now agree that the universe had an absolute beginning.", tag: "20th Century" },
              { year: "1953-2023", title: "Francis Collins: Genome, Faith, and BioLogos", figure: "Francis Collins (b. 1950)", body: "Collins directed the Human Genome Project and served as director of the NIH. His book The Language of God describes his conversion from atheism to Christianity and his conviction that modern genetics strengthens rather than undermines belief in God. He founded BioLogos in 2007 to explore the compatibility of evolutionary science and Christian faith — one of the most productive ongoing conversations in the faith-science dialogue.", tag: "Contemporary" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <span style={{ color: "#3a7d56", fontWeight: 800, fontSize: 13, marginRight: 10 }}>{item.year}</span>
                    <span style={{ background: "rgba(107,79,187,0.15)", color: "#A080FF", padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{item.tag}</span>
                  </div>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 10 }}>{item.figure}</div>
                <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "0 0 40px" }}>
            {FS_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: SECONDARY, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      {/* ── Thinker Modal ───────────────────────────────────────────────────── */}
      {selectedThinker && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(7,7,15,0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedThinker(null)}
        >
          <div
            style={{
              background: "#0D0D1A",
              border: `1px solid ${selectedThinker.color}30`,
              borderRadius: "20px",
              padding: "28px",
              maxWidth: "560px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedThinker(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: `1px solid ${BORDER}`,
                borderRadius: "8px",
                color: SECONDARY,
                cursor: "pointer",
                padding: "4px 8px",
                fontSize: "0.85rem",
              }}
            >
              ✕
            </button>

            {/* Avatar row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "14px",
                  background: `${selectedThinker.color}18`,
                  border: `1px solid ${selectedThinker.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  flexShrink: 0,
                }}
              >
                {selectedThinker.emoji}
              </div>
              <div>
                <h2 style={{ fontWeight: 900, fontSize: "1.25rem", color: TEXT, marginBottom: 2 }}>
                  {selectedThinker.name}
                </h2>
                <p style={{ color: "#A78BFA", fontSize: "0.82rem", fontWeight: 600 }}>
                  {selectedThinker.field} · {selectedThinker.years}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 4,
                    fontSize: "0.7rem",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: `${selectedThinker.color}12`,
                    border: `1px solid ${selectedThinker.color}25`,
                    color: selectedThinker.color,
                    fontWeight: 700,
                  }}
                >
                  {selectedThinker.perspective}
                </span>
              </div>
            </div>

            {/* Quote */}
            <blockquote
              style={{
                background: `${selectedThinker.color}08`,
                border: `1px solid ${selectedThinker.color}18`,
                borderLeft: `3px solid ${selectedThinker.color}`,
                borderRadius: "10px",
                padding: "14px 16px",
                margin: "0 0 18px 0",
                fontStyle: "italic",
                color: SECONDARY,
                fontSize: "0.88rem",
                lineHeight: 1.65,
              }}
            >
              &ldquo;{selectedThinker.quote}&rdquo;
            </blockquote>

            {/* Contribution */}
            <div style={{ marginBottom: "18px" }}>
              <h4 style={{ fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: SECONDARY, marginBottom: "8px" }}>
                Contribution
              </h4>
              <p style={{ color: SECONDARY, fontSize: "0.88rem", lineHeight: 1.7 }}>
                {selectedThinker.contribution}
              </p>
            </div>

            {/* Books */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: SECONDARY, marginBottom: "10px" }}>
                Key Books
              </h4>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {selectedThinker.books.map((book, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                      fontSize: "0.85rem",
                      color: TEXT,
                    }}
                  >
                    <span style={{ color: selectedThinker.color, fontSize: "0.7rem" }}>📖</span>
                    {book}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
