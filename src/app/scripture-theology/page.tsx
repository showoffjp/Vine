"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "doctrine" | "inspiration" | "interpretation" | "debates" | "videos";

const DOCTRINE_ITEMS = [
  {
    id: "d1",
    title: "The Bible as God's Word",
    body: "2 Timothy 3:16-17 uses the word theopneustos — God-breathed — to describe all Scripture. This is not metaphor but ontological claim: the texts of the Bible have their origin in God himself. 2 Peter 1:20-21 adds the how: 'prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit.' The picture is dual authorship — every word is fully the human author's word, shaped by personality, vocabulary, research, and experience, and simultaneously fully God's word, carrying his authority and truth. No other book can make this claim. Scripture is unique not because it contains great spiritual insight (many books do) but because its Author is God."
  },
  {
    id: "d2",
    title: "Inspiration",
    body: "Verbal plenary inspiration holds that God's superintendence extends to every word (verbal) of all of Scripture (plenary). This is distinct from dictation theory, which imagines God bypassing human faculties to mechanically produce texts — a view most evangelicals reject because it contradicts the obvious evidence of human personality, style, and research in the text. The concursive theory, associated with B.B. Warfield, describes how this works: God works concurrently through the human author's full use of their faculties — memory, reason, style, research — so that the resulting words are genuinely theirs and genuinely God's. The analogy is not a secretary and a boss, but a master craftsman working through the trained hands of a skilled artisan."
  },
  {
    id: "d3",
    title: "Authority",
    body: "Scripture's authority is derived from its divine origin. Because its primary author is God, it carries the authority of God. The Reformation principle sola scriptura ('Scripture alone') holds that Scripture is the supreme and final authority for Christian faith and life — the norma normans, the norm that norms everything else. Note: sola scriptura is not nuda scriptura ('bare Scripture') — the Reformers did not reject tradition, reason, and the creeds, but insisted these serve under Scripture's authority rather than standing over it or alongside it as equal sources. Tradition is a servant, not a master. When tradition and Scripture conflict, Scripture wins."
  },
  {
    id: "d4",
    title: "Inerrancy",
    body: "The Chicago Statement on Biblical Inerrancy (1978), produced by over 300 evangelical scholars including J.I. Packer, R.C. Sproul, and Norman Geisler, remains the most careful definition. Inerrancy holds that Scripture in its original manuscripts affirms nothing that is false. Critical distinctions: inerrancy applies to what Scripture affirms (not to every number in every manuscript copy), to the original autographs (not to any particular translation), and to the statements Scripture makes (not to the accuracy of all quoted speech or phenomenological descriptions of nature). Infallibility is the related but weaker claim that Scripture does not mislead on matters of faith and practice. The 'limited inerrancy' debate — represented by Peter Enns and John Walton — argues Scripture can err on historical and scientific details while remaining reliable on theology. Evangelicals largely reject this as an unstable middle position."
  },
  {
    id: "d5",
    title: "Clarity (Perspicuity)",
    body: "The Reformation recovered a doctrine the medieval church had functionally suppressed: the perspicuity of Scripture — its clarity for ordinary readers. The main things are the plain things, and the plain things are the main things. What the Bible teaches about the way of salvation, the character of God, the nature of sin, and the shape of Christian life is accessible to any careful, prayerful reader. The Reformers translated Scripture into the vernacular precisely because they believed ordinary people could read it and understand it. Perspicuity does not mean all Scripture is equally clear — 2 Peter 3:16 acknowledges some things in Paul are 'hard to understand.' It does not mean interpretation is unnecessary or that all readings are equally valid. It means that the gospel is not hidden behind a specialist class or an authoritative interpretive institution."
  },
  {
    id: "d6",
    title: "Sufficiency",
    body: "2 Timothy 3:17 grounds sufficiency in inspiration: because all Scripture is God-breathed, the man of God is 'thoroughly equipped for every good work.' Scripture contains everything necessary for salvation and for a fully equipped Christian life — no additional divine revelation is required. The canon is closed. Sufficiency does not mean Scripture addresses every topic (it is not a manual for plumbing or astrophysics), but that it addresses every topic it intends to address with everything needed. What sufficiency excludes: binding doctrinal requirements beyond Scripture (medieval additions to the deposit of faith), new prophetic revelations as binding on the church, or tradition elevated to co-authority with Scripture. What it does not exclude: the proper use of reason, the wisdom of tradition, and the illuminating work of the Spirit in applying Scripture to new situations."
  }
];

type InspirationModel = {
  id: string;
  name: string;
  keyClaim: string;
  proponents: string;
  strengths: string;
  weaknesses: string;
};

const INSPIRATION_MODELS: InspirationModel[] = [
  {
    id: "dictation",
    name: "Dictation Theory",
    keyClaim: "God dictated the words of Scripture directly; the human authors were passive secretaries who recorded exactly what God spoke to them, contributing nothing of their own personality, style, or vocabulary.",
    proponents: "Some Islamic scholars hold an analogous view of the Quran. Some early Christian writers used dictation language loosely. Rarely defended in modern evangelical scholarship.",
    strengths: "Takes divine origin with maximal seriousness. Produces a very simple account of why Scripture is authoritative: God said it word-for-word.",
    weaknesses: "Cannot account for the obvious stylistic, linguistic, and personal differences among biblical authors. Luke researched and interviewed (Luke 1:1-4). Paul's letters show his personality on every page. The Psalms reflect personal anguish. If God dictated, why does Isaiah's Hebrew differ from Amos's? Dictation theory requires ignoring the humanity of Scripture. Nearly all evangelical scholars reject it."
  },
  {
    id: "verbal-plenary",
    name: "Verbal Plenary Inspiration",
    keyClaim: "God superintended the human authors — working through their full human faculties, personality, vocabulary, research, and experience — so that the words they freely wrote were exactly the words God intended. Every word (verbal) of all Scripture (plenary) is inspired.",
    proponents: "B.B. Warfield, Wayne Grudem, John Frame, J.I. Packer, the Chicago Statement signatories. The dominant evangelical position.",
    strengths: "Accounts for both the full humanity and full divinity of Scripture. 2 Timothy 3:16 ('all Scripture is God-breathed') and 2 Peter 1:21 ('carried along by the Holy Spirit') support extending inspiration to the word level and all of Scripture. Preserves inerrancy. Consistent with the way Jesus quoted the OT (treating specific words as significant, e.g., Matthew 22:32, Galatians 3:16).",
    weaknesses: "The mechanism is mysterious — how does God superintend free human authorship without overriding it? The concursive model (God works through human faculties) is the best answer but remains philosophically challenging. Critics ask: if this is not dictation, how is it different in kind, not just degree?"
  },
  {
    id: "thought",
    name: "Thought/Concept Inspiration",
    keyClaim: "God inspired the ideas, thoughts, and concepts of Scripture but not the specific words. The human authors received divine ideas and then expressed them in their own words, which may or may not accurately convey the full divine intent.",
    proponents: "Many neo-orthodox and mainline scholars. Some moderate evangelicals who want to allow for more human error in the text. Associated with Friedrich Schleiermacher in the liberal tradition.",
    strengths: "Accounts easily for variation among human authors. Does not require explaining how God superintended specific word choices. Feels intuitively easier given the diversity of biblical styles and genres.",
    weaknesses: "Raises an immediate problem: whose words accurately capture the inspired thought? If the thought is divine but the words are human, we have no access to the thought except through potentially fallible words. The doctrine becomes practically ineffective — we cannot know which words convey the divine thought and which do not. Jesus and the NT authors regularly treat specific words as significant, not just ideas."
  },
  {
    id: "dynamic",
    name: "Dynamic Inspiration",
    keyClaim: "God guided and elevated the spiritual perception and moral insight of the biblical writers, raising them above ordinary human capacities, but the process allowed for human error in historical and scientific details. Inspiration attaches to the writers' heightened spiritual insight, not to every word.",
    proponents: "Many moderate and mainline Protestant scholars. Often the default position of those who want to affirm meaningful inspiration while making room for historical-critical conclusions about the text.",
    strengths: "Allows engagement with historical criticism without abandoning inspiration entirely. Preserves the idea that the Bible is genuinely different from other books while explaining discrepancies as human error in non-theological details.",
    weaknesses: "The line between 'theological truth' and 'historical detail' is harder to draw than it appears — the resurrection is a historical claim. If human error can infiltrate the details, what prevents it from infiltrating the theology? This position sits precisely where the inerrancy debate is sharpest. It tends to make inspiration a matter of degree, which risks losing it entirely."
  },
  {
    id: "barth",
    name: "Neo-Orthodox View (Barth)",
    keyClaim: "Scripture is not itself the Word of God but becomes the Word of God in the moment of encounter. The Bible is the primary human witness to the Word of God (Jesus Christ), and through this witness God encounters the reader existentially. The Word is an event, not a deposit.",
    proponents: "Karl Barth (Church Dogmatics), Emil Brunner, Rudolf Bultmann (more radically). Hugely influential in 20th-century Protestant theology.",
    strengths: "Preserves the existential urgency and transformative power of the biblical encounter. Takes seriously both the humanity of Scripture and the sovereignty of God's self-revelation. Avoids naive identification of human words with divine speech. Explains how Scripture can be 'inspired' while containing errors.",
    weaknesses: "Makes revelation subjective and episodic — the Bible only becomes God's word in the moment of encounter, which means there is no stable, publicly available divine revelation. Who adjudicates conflicting 'encounters'? It undermines the objective content of revelation that Christian theology requires. Most evangelicals view this as a category error: Scripture is the Word of God, not merely a pointer that occasionally becomes one."
  }
];

const INTERPRETATION_ITEMS = [
  {
    id: "i1",
    title: "Hermeneutics",
    body: "Hermeneutics is the science and art of interpretation — the set of principles by which we move from a written text to understanding its meaning. Every reader brings interpretive assumptions whether they acknowledge them or not; the question is not whether you interpret, but whether you do it well. The 'hermeneutical circle' describes the movement between parts and the whole: you understand individual verses in light of the whole book; you understand the whole book in light of its parts. This is not circular in a vicious sense — it is the natural process of all complex reading. The primary goal of evangelical hermeneutics is authorial intent: what did this human author mean to communicate in this text, in this context, in this genre, to this audience? That meaning — once established — is then applied to the contemporary reader."
  },
  {
    id: "i2",
    title: "Historical-Grammatical Method",
    body: "The historical-grammatical method is the standard interpretive approach among Reformed and evangelical scholars. The name describes its two commitments: understand the historical context (who wrote this, to whom, when, why, against what background?) and understand the grammatical meaning (what do these words mean in this language and genre?). The method insists that before you can apply a text, you must understand what it meant to its original audience. This does not mean the text has no meaning for us — it means the meaning for us is continuous with the meaning for them. Application follows exegesis; it does not replace it. The method stands against allegorizing (finding hidden spiritual meanings beneath the plain sense), moralizing (reducing narratives to moral lessons without first hearing what they say about God), and contemporizing (reading our questions directly into the text)."
  },
  {
    id: "i3",
    title: "Genre Recognition",
    body: "The most basic and most violated rule of interpretation: different genres require different reading strategies. Poetry (Psalms, Song of Solomon) uses metaphor, parallelism, and hyperbole that would be wildly misread if treated as prose history. Law (Leviticus) makes binding demands that require understanding covenant context before deciding which apply today. Prophecy (Isaiah, Ezekiel, Revelation) uses apocalyptic imagery that communicates through symbols, not newspaper-style prediction. Narrative (Genesis, Acts) describes events that may or may not be prescriptive — just because Israel did something does not mean you should. Letters (Paul's epistles) are situational communications to specific communities, requiring understanding of the occasion before generalizing. The failure to read genre correctly is responsible for more bad interpretation than almost any other single error."
  },
  {
    id: "i4",
    title: "The Christological Lens",
    body: "Luke 24:27 is the programmatic text: 'And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.' The risen Jesus teaches his disciples to read the entire Old Testament as pointing toward him. This is not allegory — it is typology and promise-fulfillment. The two-testament unity of Scripture means the Old Testament is not simply a historical prelude but the necessary context without which the New Testament is incomprehensible, and the New Testament is the fulfillment without which the Old Testament's promises remain unresolved. This does not mean every OT passage is a prophecy of Jesus, but that the entire canon, read as a whole, finds its center and coherence in him. Christological reading is not imposed on the text — it is the reading the text itself demands (John 5:39)."
  },
  {
    id: "i5",
    title: "Context is King",
    body: "The interpretive maxim: a text without a context is a pretext. Every verse exists in layers of context, and the meaning of any verse is constrained by all of them. The immediate context: what do the surrounding verses say? The chapter context: what is the argument or narrative of this chapter? The book context: what is the author's overall purpose, argument, and audience? The canonical context: how does this text relate to the rest of Scripture — does the NT clarify or fulfill what the OT says here? The historical context: what was happening in the ancient world that shapes this text? Proof-texting — pulling a verse from its context to support a predetermined conclusion — is the most common interpretive error in popular Christianity. Interpretation that ignores context is not neutral; it is irresponsible."
  },
  {
    id: "i6",
    title: "Application",
    body: "Interpretation aims at application — the bridge from 'then and there' to 'now and here.' The critical question: what was the original principle, and how does that principle apply in our different context? N.T. Wright's 'Jerusalem to Corinth to Cleveland' principle: Paul applied the timeless gospel to the specific situation of Corinth; we must do the same for Cleveland (or wherever). The key distinction is between descriptive texts (this is what happened) and prescriptive texts (this is what you must do). Not everything described in Acts is commanded; not every command in the Mosaic Law applies directly to New Covenant believers. Cultural relativism asks whether a command is culturally conditioned; the answer is never all-or-nothing. The underlying principle may be timeless even if its specific cultural expression is not. Application requires wisdom, not just exegesis."
  }
];

type DebateCard = {
  id: string;
  title: string;
  position1: { label: string; summary: string; figures: string };
  position2: { label: string; summary: string; figures: string };
  coreQuestion: string;
};

const DEBATE_CARDS: DebateCard[] = [
  {
    id: "db1",
    title: "Inerrancy vs. Infallibility",
    position1: {
      label: "Full Inerrancy",
      summary: "Scripture in its original manuscripts affirms nothing that is false in any area it addresses — history, theology, ethics, and wherever else it makes genuine claims. The Chicago Statement (1978) is the definitive evangelical formulation. Inerrancy is not optional for a high view of Scripture; once you allow for errors in historical details, the theological claims are equally vulnerable.",
      figures: "Norman Geisler, R.C. Sproul, J.I. Packer, D.A. Carson, Wayne Grudem"
    },
    position2: {
      label: "Limited Inerrancy / Infallibility",
      summary: "Scripture is reliable and authoritative on matters of faith and practice but may contain errors in historical, geographical, or scientific details. 'Infallibility' — Scripture does not mislead on what matters for salvation — is sufficient without extending the claim to all factual assertions. Accommodating ancient Near Eastern cosmology or approximated numbers does not undermine the theological message.",
      figures: "Peter Enns, Kenton Sparks, Tremper Longman, I. Howard Marshall"
    },
    coreQuestion: "Is the historical accuracy of the Bible's details inseparable from the reliability of its theological claims, or can we separate them and still have a functionally authoritative Scripture?"
  },
  {
    id: "db2",
    title: "The Old Testament and Violence",
    position1: {
      label: "Canonical Defense",
      summary: "The Canaanite genocide commands (Deuteronomy 7, 1 Samuel 15) must be understood within the canonical context of holy war as unique, unrepeatable divine judgment on a specific people at a specific moment in redemptive history. Progressive revelation and the trajectory toward the cross ultimately reframe all violence. The imprecatory Psalms are honest expression of justice-longing that reaches its resolution in Christ's atonement. The commands are defensible on a reading that takes the full canon seriously.",
      figures: "Paul Copan ('Is God a Moral Monster?'), Matthew Flannagan, Christopher Wright"
    },
    position2: {
      label: "Divine Accommodation / Critique",
      summary: "The violence commands represent Israel's limited, culturally conditioned understanding of God — a stage in divine accommodation to human moral development. Scripture itself critiques these accounts through its developing ethical trajectory. We should read these texts the way Jesus read the divorce commands in Matthew 19: 'Moses permitted this because of the hardness of your hearts.' The text itself invites us to move beyond it.",
      figures: "Eric Seibert ('Disturbing Divine Behavior'), Greg Boyd ('The Crucifixion of the Warrior God'), Peter Enns"
    },
    coreQuestion: "Does the interpreter stand under Scripture's authority to accept even difficult commands within their canonical context, or does the interpreter stand over Scripture to critique passages that fail contemporary moral standards?"
  },
  {
    id: "db3",
    title: "Women and Scripture",
    position1: {
      label: "Complementarian",
      summary: "1 Corinthians 14:34-35 and 1 Timothy 2:12 contain binding, cross-cultural restrictions on women's authoritative teaching and governing roles in the gathered church. The restrictions are grounded not in culture but in creation order (1 Timothy 2:13) and the male-female differentiation established before the Fall. These are not cultural accommodations but theological convictions built into the order of creation and confirmed by apostolic instruction.",
      figures: "John Piper, Wayne Grudem, Thomas Schreiner, Andreas Kostenberger"
    },
    position2: {
      label: "Egalitarian",
      summary: "The restrictive passages (1 Corinthians 14, 1 Timothy 2) are culturally conditioned responses to specific local problems — likely uneducated women disrupting worship in Corinth or the influence of proto-gnostic female teachers in Ephesus. The broader canonical witness (Galatians 3:28, Acts 2:17, Priscilla, Phoebe) establishes the theological norm; the restrictive passages are contextual applications, not timeless mandates. The hermeneutical move that applied slavery texts to their cultural context should be applied here.",
      figures: "Gordon Fee, Phillip Payne, N.T. Wright, Scot McKnight"
    },
    coreQuestion: "How do we determine which biblical commands are timeless theological norms and which are culturally conditioned applications of deeper principles — and who controls that determination?"
  },
  {
    id: "db4",
    title: "Biblical Scholarship and Faith",
    position1: {
      label: "The Believing Critic",
      summary: "Historical-critical scholarship — source criticism, redaction criticism, archaeology, ANE comparative studies — is not the enemy of faith but a tool for better understanding the text. A scholar can accept Deutero-Isaiah, Markan priority, or the use of ANE flood accounts in Genesis while remaining fully orthodox. Scholarship illuminates the humanity of Scripture without undermining its divine authority. The text is richer, not poorer, when we understand its historical production.",
      figures: "N.T. Wright, Craig Evans, Richard Bauckham, Bruce Metzger, Alvin Plantinga"
    },
    position2: {
      label: "Methodological Concern",
      summary: "Historical-critical scholarship, as practiced in the academy, operates with naturalistic presuppositions (miracles do not happen, prophecy predicts after the fact) that cannot lead to orthodox conclusions regardless of the evidence. The 'believing critic' position is unstable — sustained exposure to the academy's consensus tends to erode confessional commitments over time. Evangelical scholars should engage scholarship critically but not adopt its methodological presuppositions as neutral.",
      figures: "John Sailhamer, Robert Thomas, Eta Linnemann (after her reconversion)"
    },
    coreQuestion: "Can historical-critical methods be used by a believing scholar without the naturalistic presuppositions that typically accompany them, or does the methodology itself reshape the interpreter's commitments over time?"
  }
];

function AccordionItem({ id, title, body, expanded, onToggle }: {
  id: string;
  title: string;
  body: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "18px 22px", background: "transparent", border: "none", color: TEXT,
          fontWeight: 700, fontSize: 16, cursor: "pointer", textAlign: "left", gap: 12
        }}
      >
        <span style={{ color: GREEN }}>{title}</span>
        <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, transition: "transform 0.2s", transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </button>
      {expanded && (
        <div style={{ padding: "0 22px 20px", color: TEXT, fontSize: 15, lineHeight: 1.85 }}>
          {body}
        </div>
      )}
    </div>
  );
}

export default function ScriptureTheologyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("doctrine");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedModel, setSelectedModel] = useState<string>("verbal-plenary");

  function toggleExpanded(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const currentModel = INSPIRATION_MODELS.find(m => m.id === selectedModel) ?? INSPIRATION_MODELS[0];

  const tabs: { id: Tab; label: string }[] = [
    { id: "doctrine", label: "Doctrine of Scripture" },
    { id: "inspiration", label: "How the Bible Was Inspired" },
    { id: "interpretation", label: "How to Interpret the Bible" },
    { id: "debates", label: "Current Debates" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, color: TEXT, letterSpacing: "-0.5px" }}>
            Theology of Scripture
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            What is the Bible? Where does its authority come from? How should it be interpreted? The foundational doctrines of inspiration, inerrancy, authority, and hermeneutics, and the debates that still divide.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 36, background: CARD,
          borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, flexWrap: "wrap"
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: "1 1 auto", padding: "10px 14px", borderRadius: 10, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#FFFFFF" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap"
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Doctrine of Scripture */}
        {activeTab === "doctrine" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
              The classical evangelical doctrines that describe what the Bible is, where its authority comes from, and what claims it makes about itself. Click each heading to expand.
            </p>
            {DOCTRINE_ITEMS.map(item => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleExpanded(item.id)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: How the Bible Was Inspired */}
        {activeTab === "inspiration" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
              Five models of biblical inspiration. Select a model on the left to see its key claim, proponents, strengths, and weaknesses.
            </p>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              {/* Left list */}
              <div style={{ width: 210, flexShrink: 0, position: "sticky", top: 20 }}>
                {INSPIRATION_MODELS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      padding: "12px 16px", marginBottom: 6, borderRadius: 10,
                      border: `1px solid ${selectedModel === m.id ? PURPLE : BORDER}`,
                      background: selectedModel === m.id ? `${PURPLE}22` : CARD,
                      color: selectedModel === m.id ? "#FFFFFF" : MUTED,
                      fontWeight: selectedModel === m.id ? 700 : 500,
                      fontSize: 13, cursor: "pointer", lineHeight: 1.4
                    }}
                  >
                    {m.name}
                  </button>
                ))}
              </div>

              {/* Right detail */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 20, marginTop: 0 }}>
                    {currentModel.name}
                  </h2>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                      Key Claim
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {currentModel.keyClaim}
                    </p>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                      Proponents
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {currentModel.proponents}
                    </p>
                  </div>

                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16
                  }}>
                    <div style={{ background: `${GREEN}0D`, border: `1px solid ${GREEN}33`, borderRadius: 10, padding: 16 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                        Strengths
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                        {currentModel.strengths}
                      </p>
                    </div>
                    <div style={{ background: "#EF444408", border: "1px solid #EF444433", borderRadius: 10, padding: 16 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                        Weaknesses
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                        {currentModel.weaknesses}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: How to Interpret the Bible */}
        {activeTab === "interpretation" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
              Hermeneutics is the science and art of biblical interpretation. These six principles form the core of the historical-grammatical method used by evangelical scholars.
            </p>
            {INTERPRETATION_ITEMS.map(item => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleExpanded(item.id)}
              />
            ))}
          </div>
        )}

        {/* Tab 4: Current Debates */}
        {activeTab === "debates" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Four live debates dividing evangelical and mainline scholars. Each card presents both positions, their key figures, and the hermeneutical question at the center.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {DEBATE_CARDS.map(card => (
                <div
                  key={card.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}
                >
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginTop: 0, marginBottom: 20 }}>
                    {card.title}
                  </h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    {/* Position 1 */}
                    <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 18 }}>
                      <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 10 }}>
                        {card.position1.label}
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: "0 0 12px" }}>
                        {card.position1.summary}
                      </p>
                      <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.6 }}>
                        <span style={{ color: PURPLE, fontWeight: 700 }}>Key figures: </span>
                        {card.position1.figures}
                      </div>
                    </div>

                    {/* Position 2 */}
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22`, borderRadius: 12, padding: 18 }}>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 10 }}>
                        {card.position2.label}
                      </div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: "0 0 12px" }}>
                        {card.position2.summary}
                      </p>
                      <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.6 }}>
                        <span style={{ color: GREEN, fontWeight: 700 }}>Key figures: </span>
                        {card.position2.figures}
                      </div>
                    </div>
                  </div>

                  {/* Core Question */}
                  <div style={{ background: "#FFFFFF06", border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>
                      Core Hermeneutical Question
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                      {card.coreQuestion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on the doctrine of Scripture.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "t7Mgh-nHlgI", title: "Infallibility and Inerrancy: Foundations", channel: "Ligonier Ministries (R.C. Sproul)", description: "R.C. Sproul explains why Jesus believed Scripture to be infallible and inerrant, and why the church must hold the same view." },
                  { videoId: "oHGwLA9bq0E", title: "Inspiration, Infallibility, and Inerrancy: Hath God Said?", channel: "Ligonier Ministries (R.C. Sproul)", description: "An exploration of whether Scripture is capable of containing errors and what verbal plenary inspiration actually means." },
                  { videoId: "NzlwrT0lRJE", title: "The Chicago Statement on Biblical Inerrancy", channel: "Ligonier Ministries (R.C. Sproul)", description: "R.C. Sproul discusses his involvement with the Chicago Statement and why it remains the definitive evangelical formulation of inerrancy." },
                  { videoId: "JfRAjJav06s", title: "Scripture Alone: What is Reformed Theology?", channel: "Ligonier Ministries (R.C. Sproul)", description: "An introduction to the Reformation principle of Sola Scriptura — what it means, what it does not mean, and why it matters for the church today." },
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
