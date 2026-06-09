"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types of Suffering" },
  { id: "purposes", label: "Purposes of Suffering" },
  { id: "responses", label: "How to Respond" },
  { id: "ministry", label: "Ministering to Sufferers" },
  { id: "jesus", label: "Jesus and Suffering" },
  { id: "hope", label: "Hope That Sustains" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const TYPES_DATA = [
  { color: RED, title: "Suffering as Consequence of Sin", body: "Some suffering is the direct consequence of one's own sin — the alcoholic's liver disease, the fractured relationship caused by betrayal, the financial devastation of dishonesty. This is not God's punishment in the NT sense (Christ has borne the eternal penalty) but the natural causal consequences of sin in a fallen world. The appropriate pastoral response: compassion without minimizing personal responsibility; the gospel is big enough to address both guilt and consequence." },
  { color: GOLD, title: "Suffering as Discipline", body: "'My son, do not make light of the Lord's discipline... the Lord disciplines the one he loves' (Hebrews 12:5-6). Some suffering is God's fatherly discipline — not punishment but correction and training. Hebrews 12:10-11: 'God disciplines us for our good, in order that we may share in his holiness. No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace.' Discipline must be distinguished from punishment: it is the action of a loving father forming a child, not an angry judge inflicting penalty." },
  { color: PURPLE, title: "Suffering for Righteousness", body: "'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven' (Matthew 5:10). 1 Peter 4:12-16: 'Do not be surprised at the fiery ordeal that has come on you to test you... But rejoice inasmuch as you participate in the sufferings of Christ.' Suffering because of one's faith is not evidence of God's absence — it is participation in Christ's sufferings and a mark of genuine discipleship. The global church lives with this reality daily; Western Christianity is only recently rediscovering it." },
  { color: TEAL, title: "Unexplained Suffering", body: "Job is the biblical model: a righteous man who suffers terribly without explanation. His suffering is not punishment (God says he has done nothing wrong — Job 1:8), not discipline (there is no sin to correct), not persecution (it is not because of his faith). Job's suffering is simply — from his perspective — inexplicable. The answer God gives Job is not an explanation but a presence: 'Where were you when I laid the foundation of the earth?' (Job 38:4). God does not always explain; he always meets." },
];

const PURPOSES_ITEMS = [
  { id: "p1", title: "Conforming to the Image of Christ", ref: "Romans 8:28-29; Hebrews 12:10",
    body: "Romans 8:28-29: 'We know that in all things God works for the good of those who love him... to be conformed to the image of his Son.' The 'good' in verse 28 is defined in verse 29 — conformity to Christ. This is not a promise that everything works out pleasantly but that God uses everything — including suffering — to produce Christlikeness. The character qualities most needed for Christlikeness — patience, compassion, trust, endurance, humility — are produced almost exclusively through adversity. The seminary of suffering is often the most effective." },
  { id: "p2", title: "Teaching Us to Depend on God", ref: "2 Corinthians 1:8-9; 12:7-10",
    body: "Paul's 'thorn in the flesh' (2 Corinthians 12:7-10) is the most extended biblical treatment of ongoing suffering that is not removed. God's answer to Paul's three requests for removal: 'My grace is sufficient for you, for my power is made perfect in weakness.' The purpose of the thorn: 'to keep me from becoming conceited' (v. 7). Weakness is the context in which divine power is most visible. Paul's response: 'I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.'" },
  { id: "p3", title: "Producing Endurance, Character, and Hope", ref: "Romans 5:3-5; James 1:2-4",
    body: "Romans 5:3-5: 'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God's love has been poured out into our hearts through the Holy Spirit.' The chain is sequential: suffering → perseverance → character → hope. Character produced through comfort is fragile; character produced through endured suffering is deep and durable. James 1:2-4: 'let perseverance finish its work so that you may be mature and complete, not lacking anything.'" },
  { id: "p4", title: "Making Us Able to Comfort Others", ref: "2 Corinthians 1:3-5",
    body: "'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God' (2 Corinthians 1:3-4). The suffering that is comforted by God becomes the resource from which the sufferer can comfort others. The most effective minister to the grieving is someone who has grieved. The most effective comforter to the depressed is someone who has been in the dark. God wastes nothing — every pain is preparation." },
  { id: "p5", title: "Revealing What We Truly Trust", ref: "1 Peter 1:6-7; Job 1:9",
    body: "Satan's accusation against Job: 'Does Job fear God for nothing?... You have blessed the work of his hands... But stretch out your hand and strike everything he has, and he will surely curse you to your face' (Job 1:9-11). The suffering reveals whether Job's faith is genuine or transactional. 1 Peter 1:7: 'these have come so that the proven genuineness of your faith — of greater worth than gold, which perishes even though refined by fire — may result in praise, glory and honor when Jesus Christ is revealed.' Suffering is the test that separates genuine faith from religious performance." },
];

const RESPONSES_DATA = [
  { color: BLUE, title: "Bring It to God — Lament", body: "The Psalms provide a framework for bringing suffering to God without pretending. Lament psalms — Psalms 22, 88, 13, 73, and others — model honest, even anguished speech to God: 'How long, Lord? Will you forget me forever?' (Psalm 13:1). This is not loss of faith — it is one of its highest expressions. The Psalter gives the church permission and vocabulary to be completely honest about suffering in the presence of God. Do not skip straight to praise; bring the full weight of the pain first." },
  { color: GREEN, title: "Receive Community — Do Not Isolate", body: "Suffering tends toward isolation — the sufferer withdraws, not wanting to be a burden, not knowing how to explain the pain. The biblical response is the opposite: Galatians 6:2 — 'Bear one another's burdens.' Romans 12:15 — 'weep with those who weep.' The church is the body — when one part suffers, all suffer (1 Corinthians 12:26). Allowing others in — allowing yourself to be prayed for, brought meals, cried with — is not weakness. It is the ecclesiology of the body working as designed." },
  { color: GOLD, title: "Hold the Hope — Orient to the Future", body: "Romans 8:18: 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' This is not minimizing present pain — Paul called his suffering real and severe. It is a comparison: the scale tips heavily to glory. 2 Corinthians 4:17: 'our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.' The practice: regularly orient your suffering in the eschatological frame. What God is doing is bigger than what you can see from inside your pain." },
  { color: TEAL, title: "Trust Without Understanding", body: "Job receives no explanation. He receives instead a theophany — a direct encounter with God — and this is enough (Job 38-42). Sometimes God explains; sometimes he simply shows up. The spiritual discipline in unexplained suffering: resist the demand for an explanation, resist the theodicy of your friends who say 'you must have sinned,' and hold on to what you know about God's character rather than demanding understanding of his specific acts. Proverbs 3:5 — 'Trust in the Lord with all your heart and lean not on your own understanding.'" },
];

const MINISTRY_POINTS = [
  { color: PURPLE, title: "Presence Before Words", body: "Job's friends were at their best during the seven days of silence (Job 2:13). They 'sat on the ground with him for seven days and seven nights. No one said a word to him, because they saw how great his suffering was.' Their theology was sound; their timing was disastrous — they spoke too soon, with too much explanation. The first ministry to suffering is presence. Show up. Stay. Be willing to sit in silence." },
  { color: BLUE, title: "Weep First", body: "'Rejoice with those who rejoice; weep with those who weep' (Romans 12:15). The discomfort of others' grief can push well-meaning friends toward premature comfort, silver linings, and theological explanation. Resist this. Weep first. Only after the sufferer has been fully heard, fully present with in their pain, is there room for any word of hope. John 11:35 — 'Jesus wept' — before he raised Lazarus." },
  { color: GREEN, title: "Don't Explain — Question", body: "Avoid 'God has a plan,' 'everything happens for a reason,' or 'God needed another angel in heaven.' These may all be theologically defensible but they are pastorally premature and often untrue in their popular form. Instead: ask questions. 'What has this been like?' 'Where do you feel God in this?' 'What do you most need right now?' Questions honor the complexity of suffering and resist the urge to fix what cannot be fixed." },
  { color: GOLD, title: "Sustained Ministry, Not One-Time Presence", body: "The crisis brings casseroles; the chronic suffering empties the room. But most serious suffering — chronic illness, long grief, ongoing disability, depression, prolonged loss — outlasts the initial wave of support. The ministry to suffering that matters most is the sustained presence over months and years: the regular text, the monthly coffee, the ongoing prayer. This is the hardest ministry and the most needed." },
];

const JESUS_ITEMS = [
  { id: "j1", title: "The Suffering Servant", ref: "Isaiah 53:3-4; 1 Peter 2:21-24",
    body: "Isaiah 53 is the most extensive OT description of the Messiah as suffering servant: 'He was despised and rejected by mankind, a man of suffering, and familiar with pain' (Isaiah 53:3). Jesus's entire life was characterized by suffering — poverty, rejection, misunderstanding, betrayal, torture, and abandonment. 1 Peter 2:21: 'Christ suffered for you, leaving you an example, that you should follow in his steps.' The suffering of Jesus is both vicarious (for us) and exemplary (showing us the way through suffering by enduring it first)." },
  { id: "j2", title: "Gethsemane: The Suffering of Christ", ref: "Matthew 26:38-39; Luke 22:44",
    body: "Gethsemane is the most intimate window into the humanity of Christ's suffering. 'My soul is overwhelmed with sorrow to the point of death' (Matthew 26:38). 'He fell with his face to the ground and prayed, \"My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will\"' (v. 39). Luke 22:44: 'in his anguish, he prayed more earnestly, and his sweat was like drops of blood.' Jesus prays for relief, doesn't receive it, and submits. This is not passive acceptance — it is anguished, prayed-through trust. The model for suffering prayer." },
  { id: "j3", title: "\"My God, My God, Why Have You Forsaken Me?\"", ref: "Matthew 27:46; Psalm 22:1",
    body: "The cry of dereliction (Matthew 27:46) — the most anguished words in all of Scripture — is the full entry of Jesus into the experience of abandonment. By quoting Psalm 22, Jesus prays the great lament psalm. The cross is not God punishing Jesus out of anger — it is the Trinity bearing the weight of sin and its consequences: separation from God. For the Christian who feels forsaken, Jesus has been there. The God who feels absent is the God who was forsaken on the cross, and was raised. The resurrection is the answer to the cry of dereliction." },
  { id: "j4", title: "The High Priest Who Understands", ref: "Hebrews 4:15-16",
    body: "'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin. Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need' (Hebrews 4:15-16). The incarnation is not just about salvation from sin — it is about a God who has been in the thick of human experience and knows it from the inside. Suffering prayer goes to the one who has suffered." },
];

const HOPE_POINTS = [
  { color: GREEN, title: "Resurrection as the Ultimate Answer", body: "1 Corinthians 15 — 'If only for this life we have hope in Christ, we are of all people most to be pitied' (v. 19). The resurrection of Christ guarantees the resurrection of his people. Every suffering is penultimate — real, serious, and painful in the present, but not the final word. Paul's pattern: 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us' (Romans 8:18). Present suffering → future glory. The resurrection is the ground on which every Christian can bear present pain." },
  { color: PURPLE, title: "Nothing Is Wasted", body: "'All things work together for good for those who love God' (Romans 8:28). This is not naive optimism — Paul writes it from prison. It is the eschatological confidence that God's providential hand is working even through pain toward the good he has determined. The 'good' is defined: conformity to Christ (v. 29). Everything that happens to the believer is being worked by God toward this end — even what is caused by human evil, even what is meaningless on its face. God wastes nothing." },
  { color: GOLD, title: "The New Creation: All Things Made Right", body: "Revelation 21:4 — 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.' The promise is ultimate reversal — not that suffering never happened but that it has been overcome, all questions answered, all wounds healed. The new creation is not just absence of suffering but positive flourishing beyond what we can imagine. This hope does not minimize present pain but places it in a frame that makes it endurable." },
  { color: TEAL, title: "Companionship Through the Valley", body: "Psalm 23:4: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.' The promise is not that the valley will be avoided but that it will not be walked alone. The most important pastoral word to the sufferer: you are not alone. God is present — even when his presence is not felt, even when his actions are not understood. The testimony of those who have suffered is almost universally: God met them in the darkness." },
];

const VIDEOS = [
  { videoId: "5FS8Qs9ub-Y", title: "Why Does God Allow Suffering? — Tim Keller" },
  { videoId: "Eg5iyCIW_JI", title: "God and Suffering — John Piper" },
  { videoId: "JMZcW7_JIi0", title: "A Theology of Suffering — D.A. Carson" },
  { videoId: "s6v2K2eSg5U", title: "When God Doesn't Fix It — Laura Story" },
  { videoId: "uDrL5VIQ3bo", title: "How to Minister to the Suffering — Paul Tripp" },
];

export default function SufferingGuide() {
  const [tab, setTab] = useLocalStorage("vine_suff_tab", "overview");
  const [purpOpen, setPurpOpen] = useLocalStorage("vine_suff_purp", "");
  const [jesusOpen, setJesusOpen] = useLocalStorage("vine_suff_jesus", "");
  const [journal, setJournal] = useLocalStorage("vine_suff_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(59,130,246,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  const cards4 = (items: { color: string; title: string; body: string }[]) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((p, i) => (
        <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
          <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
          <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(59,130,246,0.12)", border: `1px solid rgba(59,130,246,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: "1rem" }}>
            PASTORAL THEOLOGY · SUFFERING
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            A Theology of Suffering
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Suffering is the universal human experience — and Christianity's response to it is not a philosophical argument but a person. A pastoral guide to what the Bible says about suffering, how to endure it, and how to minister to those who are in it.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? "rgba(59,130,246,0.12)" : "transparent", color: tab === t.id ? BLUE : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(59,130,246,0.07)", border: `1px solid rgba(59,130,246,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Not an Explanation — A Presence</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                The Bible does not give a systematic answer to the problem of suffering — it gives Job an encounter with God. It does not give the world a philosophical explanation for pain — it gives a cross. Christianity's answer to suffering is not primarily intellectual but incarnational: God entered the suffering, bore the ultimate consequence of it, and promises to be present through it all.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                C.S. Lewis: <em>"God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains. It is his megaphone to rouse a deaf world."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: RED, icon: "😔", title: "Suffering Is Real", body: "The Bible never minimizes pain. Jesus wept. Paul groaned. The Psalms lament. Suffering is genuinely, seriously bad." },
                { color: GOLD, icon: "🔑", title: "Has Purposes", body: "God works through suffering toward holiness, dependence, and preparing us to comfort others. Not wasted." },
                { color: BLUE, icon: "✝️", title: "Jesus Suffered", body: "The incarnate God entered human suffering, bore its worst form, and shows from the inside that it can be survived." },
                { color: GREEN, icon: "🌅", title: "Has an End", body: "The new creation promises no more death, mourning, crying, or pain. Suffering is real but it is not final." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "types" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Types of Suffering</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Not all suffering is the same — it has different causes, meanings, and appropriate pastoral responses. Understanding the type of suffering someone is experiencing shapes how to respond faithfully.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(TYPES_DATA)}</div>
          </div>
        )}

        {tab === "purposes" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Purposes of Suffering</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The Bible does not promise that every instance of suffering has an immediate explanation, but it does reveal broad purposes through which God uses suffering. These are not to be mechanically applied to every situation but to provide orientation for the long journey.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(PURPOSES_ITEMS, purpOpen, setPurpOpen)}</div>
          </div>
        )}

        {tab === "responses" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>How to Respond to Suffering</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The biblical response to suffering is not stoic endurance, spiritual bypassing ('just trust God'), or collapse. It is a particular posture — honest before God, rooted in community, oriented to the future.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(RESPONSES_DATA)}</div>
          </div>
        )}

        {tab === "ministry" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Ministering to Those Who Suffer</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>How to be present to those in pain — what to do, what to say, what to avoid, and how to sustain ministry over the long haul when the crisis has passed but the suffering continues.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(MINISTRY_POINTS)}</div>
          </div>
        )}

        {tab === "jesus" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Jesus and Suffering</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The incarnation means that God himself entered human suffering — not as a distant observer but as a participant. Jesus suffered poverty, rejection, betrayal, torture, and abandonment. He is not untouched by what we go through.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(JESUS_ITEMS, jesusOpen, setJesusOpen)}</div>
          </div>
        )}

        {tab === "hope" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Hope That Sustains</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Christian hope is not optimism — it is confidence in God's resurrection power and eschatological purposes. This hope sustains in the darkest seasons not because it removes the suffering but because it gives it a frame larger than the pain.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(HOPE_POINTS)}</div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>What suffering are you currently carrying? Where do you find God present — or absent — in it? Is there someone in your life who is suffering right now that you could show up for? What does the hope of resurrection say to the most painful thing you are facing?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection or prayer here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the theology and pastoral dimensions of suffering.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
