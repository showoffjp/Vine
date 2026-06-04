"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DOUBT_TYPES = [
  {
    id: "intellectual",
    name: "Intellectual Doubt",
    icon: "🧠",
    color: "#3B82F6",
    desc: "Questions about the truth of Christianity — does God exist, is the Bible reliable, did the resurrection happen?",
    response: "Intellectual doubt calls for intellectual engagement. Christianity has always attracted serious thinkers precisely because it makes claims that can be examined. Don't suppress questions — follow them. Read widely. Engage the strongest objections (not caricatures). Honest investigation of historical, philosophical, and scientific questions has led thousands away from skepticism and toward faith, not the reverse.",
    resources: ["C.S. Lewis — Mere Christianity", "N.T. Wright — The Resurrection of the Son of God", "Tim Keller — The Reason for God", "Alvin Plantinga — Where the Conflict Really Lies"],
  },
  {
    id: "emotional",
    name: "Emotional Doubt",
    icon: "💔",
    color: "#EF4444",
    desc: "Doubt triggered by suffering, loss, or unanswered prayer — 'How can God be good and allow this?'",
    response: "Emotional doubt is not fundamentally about evidence — it is about pain. Reasoning rarely resolves it in the moment. The appropriate response is lament (see Psalm 22, 88, Job) — bringing the full weight of grief to God rather than away from him. The cross is God's answer to suffering: not an explanation, but a presence. He did not stand apart from human agony; he entered it.",
    resources: ["C.S. Lewis — A Grief Observed", "Nicholas Wolterstorff — Lament for a Son", "Jerry Sittser — A Grace Disguised", "Psalms 22, 88, 42"],
  },
  {
    id: "moral",
    name: "Moral Doubt",
    icon: "⚖️",
    color: "#F59E0B",
    desc: "Doubt because Christianity's ethics seem wrong or harmful — especially on sexuality, exclusivity, or violence.",
    response: "Moral objections to Christianity often assume a moral framework to make them (which itself raises questions). But they must be taken seriously. Some are based on misunderstanding Scripture or church history. Others reveal genuine complexity that requires sustained engagement. Don't settle for shallow defenses. Distinguish between what Scripture actually teaches and how it has been misused. Trust that the God who commands love is not incoherent.",
    resources: ["Rebecca McLaughlin — Confronting Christianity", "Michael Bird — Seven Things I Wish Christians Knew About the Bible", "Preston Sprinkle — various works on ethics", "Francis Chan — Letters to the Church"],
  },
  {
    id: "spiritual",
    name: "Spiritual Dryness",
    icon: "🌵",
    color: "#10B981",
    desc: "God feels absent. Prayer feels empty. Faith feels mechanical or performative.",
    response: "Spiritual dryness is not the same as unbelief — it is the normal experience of the interior life. The mystics called it 'the dark night of the soul.' John of the Cross, Teresa of Avila, Mother Teresa (who experienced decades of it), and countless others describe seasons of felt absence. What matters is not feeling God's presence but remaining oriented toward him in practice. Continue praying even when it feels hollow. The feelings often return.",
    resources: ["John of the Cross — Dark Night of the Soul", "C.S. Lewis — The Screwtape Letters (Letter 8)", "Thomas à Kempis — The Imitation of Christ", "Brennan Manning — Ruthless Trust"],
  },
  {
    id: "community",
    name: "Church-Induced Doubt",
    icon: "🏛️",
    color: "#8B5CF6",
    desc: "Doubt triggered by harmful, hypocritical, or abusive religious communities and leaders.",
    response: "The failure of Christians is a real reason people leave — and a real scandal. It should not be minimized. But the argument 'Christians behave badly, therefore Christianity is false' is a non-sequitur: Jesus himself condemned religious hypocrisy more sharply than any critic. The question is not whether Christians have failed (they have) but whether Jesus is who he claimed to be. Evaluate the king, not the kingdom's worst citizens.",
    resources: ["Skye Jethani — With", "Eugene Peterson — A Long Obedience in the Same Direction", "Scot McKnight — A Church Called Tov", "Matthew 23 — Jesus on Religious Hypocrisy"],
  },
];

const DOUBTERS_IN_SCRIPTURE = [
  { name: "Thomas", ref: "John 20:24–29", desc: "Refused to believe without seeing. Jesus did not rebuke him — he showed him his hands. 'My Lord and my God.'" },
  { name: "John the Baptist", ref: "Matthew 11:2–6", desc: "In prison, sent disciples to ask: 'Are you the one, or should we expect someone else?' Jesus answered rather than condemned." },
  { name: "The Disciples in Galilee", ref: "Matthew 28:17", desc: "At the Great Commission moment — 'they worshiped him; but some doubted.' Doubt and worship coexisted in the same people in the same moment." },
  { name: "Job", ref: "Job 1–42", desc: "Questioned God's justice with raw honesty for 37 chapters. God called Job's speech 'right' and rebuked the friends who gave pious non-answers." },
  { name: "Habakkuk", ref: "Habakkuk 1:1–4", desc: "'How long, Lord, must I call for help, but you do not listen?' God engaged the question rather than dismissing it." },
  { name: "The Psalmists", ref: "Psalms 22, 42, 73, 88", desc: "God preserved honest cries of doubt within his inspired Word — an invitation for ours." },
];

const PRACTICES_FOR_DOUBT = [
  { title: "Keep Showing Up", desc: "Don't stop attending worship, prayer, or community while in doubt. Habit is more trustworthy than feeling when feeling has collapsed." },
  { title: "Journal the Questions", desc: "Get the doubts on paper. Vague doubt is more powerful than named doubt. Write the actual question you're afraid to ask." },
  { title: "Find a Trusted Guide", desc: "Don't doubt alone. A pastor, spiritual director, or mature mentor who won't be threatened by your questions is invaluable." },
  { title: "Engage Honest Thinkers", desc: "Read apologists, theologians, and doubters who've wrestled and emerged. Avoid both shallow reassurance and cynical deconstruction." },
  { title: "Distinguish Types", desc: "Is the doubt intellectual, emotional, or spiritual dryness? Each requires a different response. Misdiagnosing the problem leads to unhelpful remedies." },
  { title: "Hold the Tension", desc: "You don't have to resolve every question before you can follow. Faithful action in the face of unanswered questions is itself an act of trust." },
];

const DOUBT_VIDEOS = [
  { videoId: "TuXTFlU-_To", title: "Honest Doubts: Keller on Faith and Doubt", channel: "Tim Keller Gospel in Life" },
  { videoId: "Hr3PkGXYRvI", title: "When Faith Feels Weak", channel: "Desiring God — John Piper" },
  { videoId: "dXxmSDhvbHY", title: "Wrestling with Doubt", channel: "Ligonier Ministries" },
  { videoId: "E9P76VJIcRY", title: "Can I Doubt and Still Believe?", channel: "Tim Keller" },
];

type Tab = "types" | "voices" | "scripture" | "practices" | "videos";

const VOICES = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford academic; atheist to Christian apologist",
    bio: "Lewis spent his early academic career as a committed atheist — but an honest one. He describes in 'Surprised by Joy' how his intellectualism made atheism increasingly uncomfortable: he found himself resisting what he called the 'Absolute' on the one hand, while his materialist framework left too much unexplained on the other. His conversion came through a series of conversations with friends like J.R.R. Tolkien and Hugo Dyson, and through his encounter with the argument that myth was the form in which truth arrived before it could be stated propositionally — and that Christianity was 'the myth that became fact.' 'A Grief Observed' documents his agonized doubt after his wife's death from cancer.",
    quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
    contribution: "Lewis demonstrated that intellectual doubt, honestly pursued, does not inevitably lead away from faith but can lead toward it. His path from atheism was through intellectual engagement rather than emotional experience — which gave his witness peculiar power for intellectuals. 'A Grief Observed,' written in raw grief after Joy's death, modeled that even mature, accomplished faith can be shaken by loss — and that surviving the shaking is itself a form of faithfulness.",
  },
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Manichaean and Neo-Platonist seeker who became the greatest theologian of Western Christianity",
    bio: "Augustine spent fifteen years in intellectual and moral wandering — nine years as a Manichaean, then years in Neo-Platonism — before his conversion in Milan at age 33. He describes in the Confessions that his doubts were not primarily intellectual but volitional: he wanted God to make him chaste, 'but not yet.' His conversion came in a garden when he heard a child's voice saying 'Take up and read,' and he opened Paul's letter to the Romans at chapter 13:14. 'No further would I read, nor had I any need; instantly at the end of this sentence, by a light as it were of serenity infused into my heart, all the darkness of doubt vanished away.'",
    quote: "Lord, you have made us for yourself, and our heart is restless until it rests in you. Our heart is restless until it finds its rest in you.",
    contribution: "Augustine's Confessions is the most honest and searching account of the relationship between intellectual doubt, moral resistance, and spiritual seeking in Christian literature. His frank admission that his doubts were partly a cover for what he didn't want to surrender — his sexual habits, his intellectual pride — gave permission for Christians to be similarly honest about the mixed motives behind unbelief. His journey through bad religion (Manichaeism), bad philosophy (Neo-Platonism), and finally to Christian faith remains recognizable to every sincere seeker.",
  },
  {
    id: "collins",
    name: "Francis Collins",
    era: "1950-present",
    context: "Director of the NIH; leader of the Human Genome Project; The Language of God",
    bio: "Collins was an atheist physician-scientist before being confronted by a dying patient who asked about his faith — a question he had no answer to. He spent the next two years reading widely, including C.S. Lewis's 'Mere Christianity,' which he had picked up to refute. He eventually became convinced that the evidence of the cosmos — its fine-tuning, the existence of the moral law, the fact that mathematics works — pointed toward a Mind behind it all. His 'The Language of God' (2006) documents his journey from atheism through scientific study to Christian faith, and argues that science and Christianity are compatible and mutually enriching.",
    quote: "The God of the Bible is also the God of the genome. He can be worshipped in the cathedral or in the laboratory. His creation is majestic, awesome, intricate, and beautiful.",
    contribution: "Collins provided the most prominent example in the late 20th century of a leading scientist becoming a convinced Christian — countering the narrative that science and faith are necessarily in conflict. His willingness to be publicly identified as a Christian while leading the Human Genome Project gave ordinary Christians confidence that their faith was not incompatible with scientific literacy. The BioLogos Foundation he founded continues to model the integration of evolutionary biology and Christian theology.",
  },
  {
    id: "therese",
    name: "Mother Teresa",
    era: "1910-1997",
    context: "Founder of the Missionaries of Charity; Nobel Peace Prize laureate",
    bio: "The posthumous publication of 'Come Be My Light' (2007) revealed that Mother Teresa experienced nearly 50 years of spiritual darkness — feeling no sense of God's presence, no consolation, often feeling that God did not exist or that she had been abandoned. She described it as 'a terrible darkness.' But she continued her work in Calcutta, continued prayer, and never publicly revealed the desolation. Her spiritual directors helped her see that the darkness was itself a participation in Christ's cry of desolation from the cross ('My God, my God, why have you forsaken me?'), not evidence that God had abandoned her.",
    quote: "If I ever become a Saint, I will surely be one of 'darkness.' I will continually be absent from Heaven — to light the light of those in darkness on earth.",
    contribution: "Mother Teresa's darkness transformed the conversation about spiritual doubt and dryness. Previously, the absence of consolation was seen as either a spiritual problem or a sign of insufficient faith. Her experience — sustained over decades by a person of heroic charity — demonstrated that spiritual darkness can coexist with, and even deepen, genuine faith and fruitful ministry. She gave permission to millions of doubting Christians to continue serving without waiting for the feelings to return.",
  },
  {
    id: "chesterton",
    name: "G.K. Chesterton",
    era: "1874-1936",
    context: "British journalist, novelist, and Christian apologist",
    bio: "Chesterton described himself as having been 'under considerable pressure in his youth to accept a pessimistic and deterministic worldview,' and found that the harder he pressed against Christianity's critics, the more coherent Christianity appeared by comparison. He was not a simple convert from doubt to certainty — he was a man who found that the objections to Christianity, honestly examined, explained less of human experience than Christianity itself did. His 'Orthodoxy' (1908) is his account of arriving at Christian belief not through revelation but through the gradual discovery that Christianity was 'the creed that fitted the lock of the world.'",
    quote: "The man who has no doubts is not a man who has faith. He is a man who has not yet thought hard enough.",
    contribution: "Chesterton gave the church its most brilliant stylist of the defense of orthodoxy and one of its most playful models of intellectual faith. His method — showing that the apparent paradoxes of Christianity are actually its truths — has been enormously influential on the apologetics tradition (Lewis acknowledges him as a formative influence). 'Orthodoxy' remains one of the most surprising and delightful accounts of how honest doubt can lead to unexpected faith.",
  },
];

export default function DoubtPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_doubt_tab", "types");
  const [selectedType, setSelectedType] = useState("intellectual");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_doubt_voice", "lewis");
  const voiceItem = VOICES.find(v => v.id === selectedVoice)!;

  const doubt = DOUBT_TYPES.find(d => d.id === selectedType)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>❓</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Doubt & Honest Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Doubt is not the opposite of faith — certainty is not required for faithfulness. Some of the most honest people in Scripture doubted, and God met them there.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "types" as const, label: "Types of Doubt", icon: "🔍" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "scripture" as const, label: "In Scripture", icon: "📜" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "types" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {DOUBT_TYPES.map(d => (
                <button key={d.id} onClick={() => setSelectedType(d.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedType === d.id ? d.color : BORDER}`, background: selectedType === d.id ? `${d.color}18` : CARD, color: selectedType === d.id ? d.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {d.icon} {d.name.replace(" Doubt", "").replace("Spiritual Dryness", "Spiritual Dry.").replace("Church-Induced Doubt", "Church-Induced")}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${doubt.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{doubt.icon}</span>
                  <h2 style={{ color: doubt.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{doubt.name}</h2>
                </div>
                <p style={{ color: MUTED, fontSize: 14, fontStyle: "italic", marginBottom: 16, lineHeight: 1.6 }}>{doubt.desc}</p>
                <div style={{ background: `${doubt.color}10`, border: `1px solid ${doubt.color}25`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{doubt.response}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ color: doubt.color, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Recommended Reading</div>
                  {doubt.resources.map(r => (
                    <div key={r} style={{ background: BG, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }}>📚 {r}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{voiceItem.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{voiceItem.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voiceItem.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION TO UNDERSTANDING DOUBT</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "scripture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                God included the doubts of his people in Scripture — not as cautionary tales of weak faith, but as honest testimony. The biblical portrait of faith is not serene certainty; it is trust that keeps returning to God even in confusion and pain.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DOUBTERS_IN_SCRIPTURE.map(d => (
                <div key={d.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{d.name}</div>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{d.ref}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                Doubt is not a crisis to be escaped — it is often the doorway to a more honest, more durable faith. These practices don't eliminate questions; they keep you oriented toward God while you carry them.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES_FOR_DOUBT.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>The Long View</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                Many who have contributed most to the church — C.S. Lewis (atheist to Anglican), Augustine (wayward to bishop), G.K. Chesterton, Francis Collins, Alvin Plantinga — passed through profound doubt on the way to mature faith. Doubt that is engaged rather than suppressed often produces a faith that is deeper, more compassionate, and more resilient than faith that has never been tested.
              </p>
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These videos explore doubt honestly — from scholars and pastors who have wrestled with questions of faith and emerged with something more durable than easy certainty.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
              {DOUBT_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.channel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
