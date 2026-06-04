"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "lament" | "voices" | "hope" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "theodicy",
    title: "The Problem of Evil (Theodicy)",
    body: "The classic theodicy trilemma: if God is omnipotent he can prevent evil; if he is omnibenevolent he wants to prevent evil; yet evil exists. Philosophers since Epicurus have used this as an argument against the existence of God. Alvin Plantinga's free will defense offers the most influential contemporary response: a world with genuine free creatures capable of love and goodness necessarily permits the possibility of their choosing evil. God could have made a world of moral robots, but he did not. The freedom that makes love possible makes cruelty possible too. A key distinction runs beneath this: causing suffering and allowing suffering are morally different acts. Plantinga argues God permits suffering as the cost of a higher good — free moral agency — without directly causing every particular instance of evil.",
  },
  {
    id: "old-testament",
    title: "Suffering in the Old Testament",
    body: "The Old Testament does not flatten suffering into easy answers. Job protests directly and at length — not merely expressing doubt but making formal accusations against God, demanding a hearing. What is remarkable is that God vindicates Job's honest protest over the tidy theological explanations of his friends (Job 42:7). The Psalms include roughly a third dedicated to lament — raw, unfiltered complaints, 'How long, O Lord?' and 'Why have you forgotten me?' Ecclesiastes sits in honest confusion, unwilling to paper over the apparent randomness of suffering and death. The prophets suffered personally for their calling: Jeremiah weeps in the pit, Isaiah is deserted, Hosea's marriage becomes a living parable of grief. The Old Testament is not a book of people who suffered and found easy answers — it is a book of people who suffered and kept talking to God anyway.",
  },
  {
    id: "cross",
    title: "The Cross as the Answer",
    body: "Jürgen Moltmann's The Crucified God makes the central claim of a Christian theology of suffering: God does not explain suffering from the outside. He enters it. The crucifixion is not a philosophical argument against the problem of evil — it is God's response in action. On the cross, the Son of God experiences forsakenness ('My God, my God, why have you forsaken me?'), injustice, physical agony, and death. This is theodicy as event, not explanation. Moltmann argues that a God who remained untouched by human suffering would be a pagan God, not the God of the Bible. The God of the Bible is the God who suffered — and who, by entering the darkness, transformed it. The resurrection does not erase the crucifixion; it declares that even the worst darkness is not the final word.",
  },
  {
    id: "paul",
    title: "Paul's Theology of Suffering",
    body: "Paul develops the most systematic New Testament theology of suffering across several letters. In Romans 5:3-5, he traces a chain: suffering produces perseverance; perseverance, proven character; character, hope — and this hope does not put us to shame, because the love of God has been poured out in our hearts. In 2 Corinthians 12:9, Paul receives no miraculous relief from his 'thorn in the flesh' but instead the promise: 'My grace is sufficient for you, for my power is made perfect in weakness.' The answer is not removal of the suffering but transformed relationship to it. In Philippians 4:11-13, Paul writes from prison that he has 'learned' contentment — it is not a personality trait but a practiced discipline, possible 'through him who gives me strength.' Paul's theology of suffering is not triumphalist. It is honest, embodied, and hard-won.",
  },
  {
    id: "redemptive",
    title: "Redemptive Suffering vs. Meaningless Suffering",
    body: "Not all suffering is equal in its framing, and Christian theology must be careful here. Some suffering, over time, produces recognizable fruit: deeper empathy, sharper character, purified faith, transformation in others who witness it. This is what Paul calls the 'light and momentary troubles' achieving 'an eternal glory that far outweighs them all' (2 Cor 4:17). But other suffering appears simply horrible — the suffering of children, the trauma of the abused, the death of the innocent. Over-spiritualizing others' pain is one of the great pastoral failures of the church. Saying 'God is teaching you something' to a person in acute grief is premature at best and spiritually harmful at worst. Job's friends tried to make his suffering legible through their theological frameworks, and God rebuked them. The pastoral first move is not to assign meaning but to be present — meaning, if it comes, emerges later and usually from the sufferer themselves.",
  },
  {
    id: "eschatology",
    title: "Eschatological Hope",
    body: "Revelation 21:4 — 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.' The final Christian answer to theodicy is not a philosophical explanation but a resurrection. The trajectory of the biblical story runs through real suffering toward real redemption — not the erasure of history but its transformation. Romans 8:18 sets the eschatological frame: 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' This is not minimization of suffering — Paul wrote it in chains. It is the insistence that suffering is penultimate, not ultimate. The resurrection of Jesus is the down payment: what happened to him will happen to the whole creation. The final answer to theodicy is not an argument. It is Easter morning.",
  },
];

const LAMENT_STEPS = [
  {
    num: 1,
    title: "Name the Pain",
    ref: "Psalm 31:9",
    excerpt: "\"I am in distress; my eyes grow weak with sorrow, my soul and body with grief.\"",
    desc: "Lament begins with the permission to say what is actually true. Many sufferers have been taught — by religious culture, family systems, or simple shame — that naming their pain is a failure of faith or a burden to others. The Psalms give direct permission to speak plainly: this is awful, I am suffering, I see no way forward. God already knows. Naming it is not informing him — it is honoring him with honesty.",
  },
  {
    num: 2,
    title: "Turn to God",
    ref: "Psalm 22:1-2",
    excerpt: "\"My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? I cry out by day, but you do not answer.\"",
    desc: "What makes lament distinctively different from complaint or despair is its address: it is spoken TO God, not away from him. Even Psalm 22 — the psalm of forsakenness that Jesus quoted from the cross — is addressed to 'My God.' The double possessive is remarkable: 'my God' even in the darkness. Lament is an act of faith precisely because it refuses to stop talking to the One who seems absent. Talking to someone you believe has abandoned you is itself a form of trust.",
  },
  {
    num: 3,
    title: "Make Your Complaint",
    ref: "Psalm 13:1",
    excerpt: "\"How long, O Lord? Will you forget me forever? How long will you hide your face from me?\"",
    desc: "After turning to God, lament makes the complaint specific, honest, and unfiltered. 'How long?' is the most common opening of lament Psalms — it is a question that demands an answer, an accusation wrapped in a prayer. God is not fragile. He does not need to be protected from your actual feelings about what is happening to you. The complaint should be honest enough to be uncomfortable — that is how you know it is real lament and not a performance of appropriate religious sadness.",
  },
  {
    num: 4,
    title: "Assert Your Trust",
    ref: "Psalm 13:5",
    excerpt: "\"But I trust in your unfailing love; my heart rejoices in your salvation.\"",
    desc: "The pivot in lament Psalms is one of the most striking moves in all of Scripture. After raw complaint — how long, where are you, why have you forgotten — the Psalm turns on a 'but' or 'yet': 'But I trust in your unfailing love.' This is not denial of the pain. The pain has just been stated at full volume. The trust is not 'actually everything is fine.' It is: 'I do not understand this and it is not fine, and yet I know who you are, and I will hold onto that.' The trust is asserted, not felt — which is why lament is an act of will, not an emotion.",
  },
  {
    num: 5,
    title: "Petition",
    ref: "Psalm 44:26",
    excerpt: "\"Rise up and help us; rescue us because of your unfailing love.\"",
    desc: "Having named the pain, addressed God, made the complaint, and asserted trust, lament asks God to act. The petition is direct and sometimes bold — 'Rise up,' 'Awake,' 'Do not be silent.' This is not irreverence; it is the intimacy of a relationship where the petitioner knows God can act and is holding him to his character and covenant. The petition in lament is qualitatively different from generic prayer: it is specific, grounded in what is actually happening, and rooted in God's own stated commitments.",
  },
  {
    num: 6,
    title: "Praise in Advance",
    ref: "Psalm 22:22-25",
    excerpt: "\"I will declare your name to my people; in the assembly I will praise you... he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.\"",
    desc: "The most stunning feature of biblical lament is that it ends in praise before resolution has come. The circumstances have not changed. The psalmist is still in the darkness. And yet: 'I will praise you.' This is not triumphalism or denial — the pain was just described in graphic detail. It is the declaration that God's character is trustworthy even before his action is visible. The praise anticipates what has not yet arrived. This is the structure of hope: not 'I feel better' but 'I will praise the God who will not ultimately let this darkness win.'",
  },
];

const VOICES = [
  {
    id: "corrie",
    name: "Corrie ten Boom",
    years: "1892–1983",
    context: "The Hiding Place · Ravensbrück",
    quote: "There is no pit so deep that God's love is not deeper still.",
    body: "Corrie ten Boom was a Dutch watchmaker who, with her family, hid Jewish refugees from the Nazis during World War II. Discovered and arrested, she was sent to Ravensbrück concentration camp with her sister Betsie. Betsie died there. Corrie survived and spent the rest of her life traveling the world, speaking about forgiveness and the faithfulness of God in the darkest places. The Hiding Place (1971) is her memoir — not a triumphalist story but a testimony to grace that met her inside the horror, not after it. One of its most striking episodes: Betsie teaching Corrie to thank God even for the fleas in their barracks — the fleas kept the guards away and allowed them to hold Bible studies. The lesson: the place of gratitude is not after the darkness passes but inside it.",
  },
  {
    id: "joni",
    name: "Joni Eareckson Tada",
    years: "1949–present",
    context: "A Place of Healing · Joni and Friends",
    quote: "I would rather be in this wheelchair knowing God than on my feet without him.",
    body: "At seventeen, Joni Eareckson Tada dove into the Chesapeake Bay and broke her neck. She has been a quadriplegic since 1967. The early years were characterized by depression, rage, and suicidal thoughts — she describes asking friends to help her end her life. The journey from 'God, are you kidding me?' to the quote above took years and was not a smooth arc. A Place of Healing (2010) was written in the midst of chronic pain on top of her paralysis — it is honest about how suffering can test the very faith that is supposed to sustain you. She founded Joni and Friends, an international disability ministry, out of her own suffering — the most common movement: those who have been through the darkness becoming guides for others in it.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    years: "1898–1963",
    context: "A Grief Observed",
    quote: "No one ever told me that grief felt so like fear.",
    body: "C.S. Lewis wrote The Problem of Pain in 1940 — a careful, somewhat philosophical treatment of suffering by a man who had not yet been broken by it. Then his wife Joy Davidman died of cancer in 1960. A Grief Observed (1961), originally published under a pseudonym because it was so raw he feared it would damage his reputation, is the other side: what suffering actually feels like when it comes for the person who wrote the book on it. Lewis describes God going silent at the worst moment, the sensation that faith was a house of cards, the slow and uneven path back to trust. It is essential reading precisely because it does not resolve quickly or tidily. The recovery was real, but it was not neat, and Lewis's willingness to document the dissolution as well as the restoration makes it one of the most honest books on faith and suffering ever written.",
  },
  {
    id: "frankl",
    name: "Viktor Frankl",
    years: "1905–1997",
    context: "Man's Search for Meaning · Auschwitz",
    quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
    body: "Viktor Frankl was an Austrian psychiatrist and Holocaust survivor who spent time in Auschwitz and three other camps. Man's Search for Meaning (1946) is one of the most widely read books of the twentieth century — not a Christian book, but one of the most profound accounts of human meaning-making in the face of absolute suffering. Frankl observed that those who survived the camps longest were not necessarily the physically strongest but those who maintained a sense of meaning and purpose. His logotherapy — therapy centered on the human search for meaning — emerged directly from this observation. For the Christian reader, Frankl provides extraordinary secular confirmation of what Paul says in Romans 8: suffering is not the final word, and the human capacity to find meaning inside it is one of the most resilient features of the soul. His account is compatible with, and illuminated by, a theology of hope.",
  },
  {
    id: "wolterstorff",
    name: "Nicholas Wolterstorff",
    years: "1932–present",
    context: "Lament for a Son",
    quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see.",
    body: "Nicholas Wolterstorff is one of the leading Christian philosophers of the twentieth century. In 1983 his twenty-five-year-old son Eric died in a mountain-climbing accident in Austria. Lament for a Son (1987) is the book he wrote in the aftermath — not a philosophical treatise but a raw, spare, personal grief journal. What makes it remarkable is that it comes from a man who had spent his career thinking carefully about God, goodness, and justice, and who found that none of that preparation actually prepared him for the experience. He writes about the silence, the presence of grief in everyday objects, the way the world continues indifferently while you are shattered. And he writes, slowly and with no rush to resolution, about how faith survived — battered, changed, but still present. He ends with the conviction that God suffers with us, and that the suffering God is not a distant philosophical concept but the only kind of God worth believing in when the worst has actually happened.",
  },
  {
    id: "job",
    name: "Job",
    years: "Ancient",
    context: "The Book of Job",
    quote: "I desire to speak to the Almighty and to argue my case with God.",
    body: "Job is not a self-help figure. He is not a model of patient, uncomplaining endurance — that is a common misreading. The Book of Job records thirty-five chapters of escalating, increasingly bold protest to God, including accusations that God has become his enemy and has unjustly destroyed him. His three friends — Eliphaz, Bildad, and Zophar — offer sophisticated theological explanations for his suffering: surely you have sinned, no innocent man suffers like this, repent and your fortunes will be restored. These are not stupid people; they are offering the best available theological framework of their day. And God rebukes them sharply in chapter 42: 'You have not spoken the truth about me, as my servant Job has.' The stunning implication: Job's protest, his anger, his refusal to accept the tidy answers — this was more true to God's character than the friends' confident explanations. Honest lament, even angry lament, is apparently more acceptable to God than theologically neat but emotionally dishonest comfort.",
  },
];

const HOPE_ITEMS = [
  {
    id: "hope-vs-optimism",
    title: "Hope as Different from Optimism",
    body: "Optimism is a personality trait — a temperamental tendency to expect good outcomes. Some people have it naturally; others do not. It is susceptible to circumstances: the optimistic person can have their optimism crushed by enough bad experiences. Hope, as understood theologically, is something different: it is a virtue, a disposition oriented toward a specific promise. The Christian hope is not a vague sense that things will probably work out — it is a conviction, grounded in the resurrection of Jesus, that the last word belongs to God and that word is life. This means hope is available to people who have none of the natural temperamental material of optimism. Paul writes 'we glory in our sufferings because we know that suffering produces... hope' — the pathway is through the suffering, not around it. Theological hope is not fragile like optimism. It is rooted in what God has already done, not in what circumstances suggest.",
  },
  {
    id: "communion-saints",
    title: "The Communion of Saints",
    body: "Hebrews 12:1 — 'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles.' The 'cloud of witnesses' refers back to chapter 11's catalog of those who suffered faithfully without receiving the promised fulfillment in their lifetimes: Abel, Abraham and Sarah, Moses, the prophets who were 'tortured, flogged, chained, put in prison... destitute, persecuted, mistreated.' We are not the first in suffering. Every generation of the church has produced people who faced worse and held on. The martyrs, the persecuted church under Rome, the believers of Hebrews 11 who died without seeing the promises fulfilled — they are witnesses to us, their endurance a cloud around our own path. Suffering loses some of its isolation when you locate yourself inside a much longer story of people who suffered and did not abandon the faith.",
  },
  {
    id: "walking-alongside",
    title: "When Others Suffer",
    body: "The instinct when someone suffers is to fix the suffering — or, if we cannot fix it, to explain it. Job's friends are the permanent biblical warning against both impulses. They sat with him in silence for seven days, which was the most helpful thing they did. The moment they opened their mouths to explain, they made things worse — and God rebuked them. The ministry of presence is the most underrated pastoral act available: simply being with a person in pain without an agenda to resolve the pain, explain the pain, or extract some lesson from it. Romans 12:15: 'Mourn with those who mourn.' Not 'fix those who mourn.' Not 'encourage those who mourn.' Mourn with them. Presence before explanation. Solidarity before theology. The time for reflection and meaning-making may come, but it is the sufferer's journey to take — not ours to force on them.",
  },
  {
    id: "lament-community",
    title: "The Role of Lament in Community",
    body: "A church that only knows triumphalism — victory language, miracle testimonies, declarations that God is good all the time — creates an invisible but powerful message: if you are suffering, you do not belong here, or you are doing something wrong. People in real grief, chronic illness, depression, or unanswered prayer learn to perform wellness at church because the only acceptable register is celebration. The recovery of corporate lament is one of the most urgent pastoral needs of the contemporary church. The Psalms of lament were sung in community — Psalm 22, which Jesus quoted from the cross, was a congregational song. A church that makes room for 'How long, O Lord?' alongside 'Praise the Lord' is a church where the full range of human experience before God has a home. People in pain need to know their suffering does not exclude them from community — and only a community that can lament together can provide that.",
  },
  {
    id: "formation",
    title: "Suffering and Spiritual Formation",
    body: "James 1:2-4 — 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.' This is one of the most misused passages in the Bible: it has been weaponized to tell people in acute grief that they should be joyful about their suffering, which is a misreading. The 'consider it joy' is a cognitive reframe that can only happen over time and from a certain distance — not in the moment of loss. What James and Paul both attest is a pattern: suffering has a thinning effect on the soul. It cuts away what is superficial — the faith that was performance, the confidence that was really comfort with a Christian veneer, the spirituality that was really personal safety. What survives the suffering is a different kind of faith: proven, stripped of pretension, acquainted with darkness, and therefore more deeply rooted in the character of God rather than the pleasantness of circumstances.",
  },
  {
    id: "final-word",
    title: "The Final Word",
    body: "1 Corinthians 15 is the longest sustained argument in the New Testament, and it is entirely about resurrection. If Christ has not been raised, Paul writes, your faith is futile, you are still in your sins, and those who have died in Christ are lost. He does not soften this. He stares at the worst possibility — that suffering is just suffering, that death is just death, that the grave is the end — and then he says: but Christ has indeed been raised. The resurrection is the hinge on which everything turns. Romans 8:18 — 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us' — is not a dismissal of suffering. It is a declaration about proportion: whatever the suffering weighs, what is coming weighs more. The resurrection is not an escape from the material world but its transformation. The final word is not suffering. It is not death. It is not silence. It is a body raised, a garden, a morning that the darkness did not extinguish. The resurrection of Jesus is the only complete answer to theodicy — not by explaining the suffering but by declaring its defeat.",
  },
];

function AccordionItem({
  id,
  title,
  body,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: `1px solid ${BORDER}`,
        marginBottom: 10,
        overflow: "hidden",
        background: CARD,
      }}
    >
      <button type="button"
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          color: TEXT,
          fontWeight: 700,
          fontSize: 15,
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span>{title}</span>
        <span
          style={{
            color: PURPLE,
            fontSize: 22,
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          {expanded ? "−" : "+"}
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "14px 20px 18px",
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.75,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

export default function SufferingPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_suffering_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeVoice, setActiveVoice] = usePersistedState<string>("vine_suffering_active_voice", "corrie");

  function toggleAccordion(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const currentVoice = VOICES.find(v => v.id === activeVoice) ?? VOICES[0];

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "A Theology of Suffering" },
    { id: "lament", label: "The Practice of Lament" },
    { id: "voices", label: "Voices in the Dark" },
    { id: "hope", label: "Finding Hope" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "inline-block",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 700,
              color: PURPLE,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Theology &amp; Practice
          </div>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Suffering
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Suffering is the most universal human experience and the most urgent
            theological question. The Christian answer is not a philosophy — it
            is a crucified and risen God.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 36,
            background: CARD,
            borderRadius: 14,
            padding: 6,
            border: `1px solid ${BORDER}`,
            overflowX: "auto",
          }}
        >
          {TABS.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                minWidth: 140,
                padding: "10px 10px",
                borderRadius: 9,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                A Theology of Suffering
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>
                How has Christian theology engaged the problem of suffering? From
                the classic theodicy debates to the cross as God's answer, these
                are the essential frameworks.
              </p>
            </div>
            {THEOLOGY_ITEMS.map(item => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleAccordion(item.id)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Lament */}
        {activeTab === "lament" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                The Practice of Lament
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>
                Lament is the biblical practice of bringing suffering to God
                with honesty, directness, and trust. It is not complaining — it
                is a form of prayer. Here are the {LAMENT_STEPS.length} movements of a lament
                Psalm.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              {/* Vertical timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: 27,
                  top: 28,
                  bottom: 28,
                  width: 2,
                  background: BORDER,
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                {LAMENT_STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    style={{
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                      marginBottom: i < LAMENT_STEPS.length - 1 ? 0 : 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Step number circle */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: BG,
                        border: `2px solid ${PURPLE}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: 18,
                        color: PURPLE,
                      }}
                    >
                      {step.num}
                    </div>
                    {/* Content card */}
                    <div
                      style={{
                        flex: 1,
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        padding: 20,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 8,
                          marginBottom: 10,
                        }}
                      >
                        <h3
                          style={{
                            fontWeight: 800,
                            fontSize: 16,
                            margin: 0,
                          }}
                        >
                          {step.title}
                        </h3>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: GREEN,
                            background: "rgba(58,125,86,0.08)",
                            borderRadius: 6,
                            padding: "3px 8px",
                          }}
                        >
                          {step.ref}
                        </span>
                      </div>
                      <div
                        style={{
                          fontStyle: "italic",
                          color: GREEN,
                          fontSize: 13,
                          lineHeight: 1.6,
                          marginBottom: 12,
                          borderLeft: `3px solid ${GREEN}`,
                          paddingLeft: 12,
                        }}
                      >
                        {step.excerpt}
                      </div>
                      <p
                        style={{
                          color: MUTED,
                          fontSize: 14,
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Voices */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                Voices in the Dark
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>
                These are people who suffered and spoke truth from inside it —
                not from a safe distance. Their words carry weight because they
                cost something.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {/* Left: person list (sticky) */}
              <div
                style={{
                  width: 210,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "sticky",
                  top: 20,
                }}
              >
                {VOICES.map(v => (
                  <button type="button"
                    key={v.id}
                    onClick={() => setActiveVoice(v.id)}
                    style={{
                      textAlign: "left",
                      padding: "12px 14px",
                      borderRadius: 10,
                      border: `1px solid ${activeVoice === v.id ? PURPLE : BORDER}`,
                      background:
                        activeVoice === v.id
                          ? "rgba(107,79,187,0.14)"
                          : CARD,
                      color: TEXT,
                      fontWeight: activeVoice === v.id ? 700 : 400,
                      fontSize: 14,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        marginBottom: 2,
                      }}
                    >
                      {v.name}
                    </div>
                    <div style={{ fontSize: 11, color: MUTED }}>{v.years}</div>
                  </button>
                ))}
              </div>

              {/* Right: detail panel */}
              <div
                style={{
                  flex: 1,
                  minWidth: 280,
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div style={{ marginBottom: 6 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: PURPLE,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    }}
                  >
                    {currentVoice.context}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    marginBottom: 4,
                    marginTop: 0,
                  }}
                >
                  {currentVoice.name}
                </h3>
                <div
                  style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}
                >
                  {currentVoice.years}
                </div>
                <blockquote
                  style={{
                    margin: "0 0 20px",
                    borderLeft: `4px solid ${GREEN}`,
                    paddingLeft: 16,
                    fontStyle: "italic",
                    color: GREEN,
                    fontSize: 16,
                    lineHeight: 1.6,
                  }}
                >
                  "{currentVoice.quote}"
                </blockquote>
                <p
                  style={{
                    color: MUTED,
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {currentVoice.body}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Hope */}
        {activeTab === "hope" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
                Finding Hope
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>
                Christian hope is not optimism — it is a theological virtue
                aimed at a specific promise. These are the resources the
                tradition offers for those in the dark.
              </p>
            </div>
            {HOPE_ITEMS.map(item => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={() => toggleAccordion(item.id)}
              />
            ))}

            {/* Closing verse */}
            <div
              style={{
                marginTop: 36,
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: PURPLE,
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Romans 8:18
              </div>
              <p
                style={{
                  fontSize: 18,
                  fontStyle: "italic",
                  color: TEXT,
                  lineHeight: 1.7,
                  margin: "0 auto 12px",
                  maxWidth: 520,
                }}
              >
                "I consider that our present sufferings are not worth comparing
                with the glory that will be revealed in us."
              </p>
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>
                Written by Paul — in chains.
              </p>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on suffering, theodicy, and hope.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "9naBgHYWTXg", title: "Suffering and The Sovereignty of God", channel: "Desiring God (John Piper)", description: "John Piper explores how God's sovereignty intersects with the reality of human suffering — and why this truth is the only solid ground for the suffering believer." },
                  { videoId: "NCh190ZzuWU", title: "Christianity Is About Suffering, Not Prosperity", channel: "Desiring God (John Piper)", description: "A short but penetrating message that challenges the prosperity gospel and calls Christians to embrace the suffering that is central to following Christ." },
                  { videoId: "BSAhDUZZToo", title: "How Our Suffering Glorifies the Greatness of God's Grace", channel: "Desiring God (John Piper)", description: "Piper unpacks Romans 8 and 2 Corinthians 12 to show how weakness and suffering become the stage on which God's power is most visibly displayed." },
                  { videoId: "A84x5t3-210", title: "The Pain of the World and the Purposes of God", channel: "Westside Church", description: "A deep theological exploration of why God permits suffering and what his purposes are in allowing pain — from creation through the cross to the new creation." },
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
      </main>
      <Footer />
    </div>
  );
}
