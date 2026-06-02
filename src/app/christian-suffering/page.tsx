"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "voices" | "responses" | "practices";

const THEOLOGY = [
  { title: "Suffering in a Fallen World", verse: "Romans 8:20-22", body: "For the creation was subjected to frustration, not by its own choice, but by the will of the one who subjected it (Romans 8:20). Suffering is real, pervasive, and rooted in the fall — the rebellion of humanity that fractured the created order. The whole creation groans as in the pains of childbirth (v.22). The Christian account of suffering begins here: it is not illusion (as some Eastern philosophies hold) nor is it the final word (as secular despair holds). It is the real consequence of a real fall, in a world moving toward a real redemption." },
  { title: "The Suffering of Christ", verse: "Isaiah 53:3", body: "He was despised and rejected by mankind, a man of suffering, and familiar with pain (Isaiah 53:3). The Incarnation means God did not stay at a safe distance from suffering but entered fully into it. Jesus wept at Lazarus's tomb; he sweated blood in Gethsemane; he cried out 'My God, my God, why have you forsaken me?' from the cross. The God of the Bible is not immune to suffering — he has suffered. This does not explain suffering, but it transforms it: we suffer in the company of One who has been there and who carries the weight of it with us." },
  { title: "Suffering Produces Character", verse: "Romans 5:3-4", body: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope (Romans 5:3-4). The scriptural pattern is not that suffering is good in itself but that God works through it to produce what cannot be formed in comfort: proven character, deep perseverance, tested hope. James says something similar: the testing of your faith produces endurance (1:3). This is not a counsel to seek suffering, but a promise for those who cannot avoid it: God is working even here, especially here." },
  { title: "Suffering as Participation in Christ", verse: "Philippians 3:10", body: "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings (Philippians 3:10). Paul does not merely tolerate suffering — he sees in it an opportunity for profound union with Christ. The theology of the cross (theologia crucis) runs throughout the NT: the path of the disciple follows the path of the Master, and the Master went through suffering to glory. The present sufferings are not worth comparing with the glory that will be revealed (Romans 8:18) — not because suffering is minimized but because glory is that overwhelming." },
  { title: "The Promise of Redemption", verse: "Revelation 21:4", body: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away (Revelation 21:4). The Christian approach to suffering is not stoic endurance — it is hope. The suffering is real and it matters; it is not denied or explained away. But it is temporary. The creation itself will be liberated (Romans 8:21). The day is coming when every wrong will be righted, every tear wiped, every groaning answered. That day does not arrive by ignoring suffering but by holding onto the One who is making all things new." },
];

const VOICES = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "A Grief Observed (1961)",
    color: "#F59E0B",
    quote: "You never know how much you really believe anything until its truth or falsehood becomes a matter of life and death to you. It is easy to say you believe a rope to be strong and sound as long as you are merely using it to cord a box. But suppose you had to hang by that rope over a precipice. Wouldn't you then discover how much you really trusted it?",
    contribution: "Lewis wrote A Grief Observed after the death of his wife Joy from cancer — raw, angry, bewildered entries that he initially published under a pseudonym. It is the most honest account of Christian suffering by any major theologian precisely because it is not theological argument but personal record. His early entries read like accusations against God; the later ones show a faith being rebuilt rather than recovered. His conclusion: his idea of God was too small, and the grief dismantled the idol and left him with something more real. A Grief Observed has probably done more to give grieving Christians permission to be honest than any other modern book.",
  },
  {
    id: "tada",
    name: "Joni Eareckson Tada",
    work: "Joni (1976) / A Place of Healing (2010)",
    color: "#3B82F6",
    quote: "God allows what he hates to accomplish what he loves. He hates suffering. He loves the deep conformity to Christ that suffering can produce.",
    contribution: "Tada became a quadriplegic at 17 after a diving accident and has spent more than fifty years ministering to people with disabilities from a wheelchair. Her theology of suffering is not abstract — it is lived. Her core contribution: disability and suffering are not obstacles to God's purposes but instruments of them. She has consistently refused the prosperity gospel's framing, insisting that God is glorified through weakness, not despite it. Her ministry Joni and Friends has shaped Christian disability theology for decades. The second book, written during her battle with cancer, shows her wrestling honestly with the question of whether she had the faith she had preached.",
  },
  {
    id: "tenBoom",
    name: "Corrie Ten Boom",
    work: "The Hiding Place (1971)",
    color: "#EC4899",
    quote: "There is no pit so deep that God's love is not deeper still. They told me that in Ravensbruck. And I have learned it to be true.",
    contribution: "Ten Boom survived Ravensbruck concentration camp after her family was arrested for hiding Jewish people. Her sister Betsie died in the camp. The Hiding Place records how they maintained faith — and how Betsie's confidence in God's love grew rather than diminished in the camp. Ten Boom's most famous story is from after the war: she met a former guard at one of her speaking events and, in a moment she describes as one of the hardest of her life, shook his hand and felt forgiveness flow through her that was not her own. Her contribution: suffering does not destroy faith if the root is deep enough — and God's love is accessible even in the deepest human darkness.",
  },
  {
    id: "dostoevsky",
    name: "Fyodor Dostoevsky",
    work: "The Brothers Karamazov (1880)",
    color: PURPLE,
    quote: "I believe like a child that suffering will be healed and made up for, that all the humiliating absurdity of human contradictions will vanish like a pitiful mirage. In the world's finale, at the moment of eternal harmony, something so precious will come to pass that it will suffice for all hearts, for the comforting of all resentments, for the atonement of all the crimes of humanity.",
    contribution: "Dostoevsky gave Christianity's most honest opponent to suffering in Ivan Karamazov — whose 'rebellion' against God on the basis of children's suffering remains the sharpest fictional statement of the problem of evil. Ivan returns his 'ticket' to God's world because the suffering of innocents cannot be justified by any future harmony. But the novel's response is not an argument — it is a person: Father Zosima, and then Alyosha, whose love incarnates an answer Ivan cannot refute. Dostoevsky's contribution: the intellectual problem of suffering cannot be resolved by argument alone; it requires the encounter with love that makes the theodicy question secondarily important.",
  },
  {
    id: "kempis",
    name: "Thomas a Kempis",
    work: "The Imitation of Christ (c. 1418)",
    color: GREEN,
    quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? What doth it profit thee to dispute learnedly concerning the Trinity, if thou be void of humility? Verily it is not deep discourse that maketh a man holy and upright, but a virtuous life maketh him dear to God.",
    contribution: "Written in the late medieval period, the Imitation of Christ has been the most widely read Christian book after the Bible. On suffering, Kempis is blunt: the cross is the way, not an interruption of it. 'Many words satisfy not the soul, but a good life refresheth the mind.' His approach to suffering is not pastoral in the modern therapeutic sense — it is ascetic: suffering received with patience is transformed into conformity to Christ. While his framework requires updating with modern psychology, his core insight remains: the one who avoids suffering avoids the school in which sanctification is primarily taught.",
  },
];

const RESPONSES = [
  { o: "Denying It", desc: "Pretending things are fine when they are not — the toxic positivity that says every trial is a blessing in disguise and grief is a failure of faith. This approach protects neither the person suffering nor their theology.", response: "The Psalms model honest lament. One third of the Psalter gives permission to say it hurts, it is not okay, I do not understand, and to say so directly to God. Honesty about suffering is not the absence of faith — it is faith in a God who can handle the truth." },
  { o: "Over-Explaining It", desc: "Reaching for immediate explanations: God is teaching you a lesson, this is punishment for sin, there must be a hidden blessing. These are often applied prematurely and can cause profound harm to the person suffering.", response: "Job's friends offered explanations and were rebuked by God. The first pastoral response to suffering is presence, not explanation. Sit with the person. Listen. Resist the urge to solve the unsolvable before it is time." },
  { o: "Theological Despair", desc: "Concluding from suffering that God is absent, indifferent, or powerless — that the Christian account of a good and sovereign God cannot be true in a world with this much pain.", response: "The cross is the answer to this despair — not as a philosophical argument but as a historical event. The God who seemed absent on Good Friday was vindicated on Easter. The apparent abandonment was not the last word. Suffering does not disprove God; it asks us to trust the One who suffered and was raised." },
  { o: "Superficial Comfort", desc: "Offering platitudes — everything happens for a reason, God won't give you more than you can handle (not a biblical quote), at least you have... — that minimize pain while appearing to address it. These close off the space for genuine lament.", response: "Weep with those who weep (Romans 12:15). Before any theology is offered, presence and solidarity are required. The most powerful thing you can often do is say: this is terrible, and I am with you, and I am not going anywhere." },
  { o: "Isolation", desc: "Withdrawing in suffering — hiding the pain, declining community, refusing help. Shame around suffering and the desire not to be a burden are common, and they deepen the suffering.", response: "Carry each other's burdens (Galatians 6:2). The body of Christ is designed for the distribution of suffering — what is unbearable alone becomes more bearable carried by many. Receiving help is itself an act of community and trust." },
];

const PRACTICES = [
  { title: "Lament Before God Honestly", desc: "Bring the suffering to God as it actually is — not packaged in faith language that obscures the pain. The Psalms give you language: How long, O Lord? Why? Where are you? God is not frightened by your honest anguish. He is drawn to it. Bring it to him first, before bringing it anywhere else.", icon: "💧" },
  { title: "Receive the Gift of Presence", desc: "When someone is suffering, do not wait until you know what to say. Go. Sit. Stay. The ministry of presence — simply being with another person without an agenda to fix — is often the most powerful thing available. When Job's friends sat with him in silence for seven days, they were at their best.", icon: "🤝" },
  { title: "Hold Lament and Hope Together", desc: "Biblical lament does not end in despair — it moves through honest grief toward trust in God's character. The Psalms of lament almost always turn: I will trust, I will praise, he has not abandoned. The turn is not a denial of the pain; it is a refusal to let the pain have the final word.", icon: "🌅" },
  { title: "Let Suffering Loosen Your Grip", desc: "Suffering has a clarifying effect on what matters. Things that seemed essential often prove to be optional; things that seemed optional often prove to be essential. Use the clarity that suffering brings to make changes that comfort would never have prompted.", icon: "🕊️" },
  { title: "Find a Companion for the Dark Season", desc: "Do not suffer alone. Find someone — a pastor, a counselor, a trusted friend — who can journey through the dark season with you. Not to fix it, but to accompany it. The desert fathers called this the practice of disclosure — naming the darkness to another person has its own healing power.", icon: "🌿" },
  { title: "Study the Cross Deeply", desc: "The theology of the cross is the most powerful resource for suffering available in Christianity. Not as an explanation for why your particular suffering happened, but as a declaration about the kind of God who is with you in it: one who did not remain at a safe distance but entered the full depth of human pain and came through it into resurrection.", icon: "✝️" },
];

export default function ChristianSufferingPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedVoice, setSelectedVoice] = useState("lewis");
  const [expanded, setExpanded] = useState<string | null>(null);

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Suffering and the Cross</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Suffering is the most universal human experience and the most searched theological question. The Christian answer is not a philosophical argument — it is a person: the God who suffered, died, and rose again.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "voices" as Tab, label: "Voices", icon: "💬" },
            { id: "responses" as Tab, label: "Bad Responses", icon: "⚠️" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 190, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, background: selectedVoice === v.id ? `${v.color}12` : "transparent", color: selectedVoice === v.id ? v.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${voice.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.work}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, margin: "0 0 18px 0" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>"{voice.quote}"</p>
                </blockquote>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "responses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                How we respond to suffering — both our own and others' — matters as much as what we believe about it. These are the most common unhelpful responses and what to do instead.
              </p>
            </div>
            {RESPONSES.map((r, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === r.o ? null : r.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === r.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{r.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === r.o ? "−" : "+"}</span>
                </button>
                {expanded === r.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{r.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>BETTER RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Suffering cannot be fixed — but it can be accompanied, interpreted, and ultimately redeemed. These practices help orient suffering toward God rather than away from him.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
