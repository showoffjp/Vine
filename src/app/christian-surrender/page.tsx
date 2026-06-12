"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

const STORAGE_KEY = "vine_christiansurrender_entries";

interface SRNEntry {
  id: string;
  date: string;
  whatISurrendered: string;
  theResistance: string;
  whatGodDid: string;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "Luke 22:42 — The Garden of Gethsemane",
    title: "&ldquo;Not My Will But Yours&rdquo; — Gethsemane as the Model of Surrender",
    paragraphs: [
      "The most important prayer of surrender in all of Scripture is prayed on the night before the cross: &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done&rdquo; (Luke 22:42). This is not resignation or passive fatalism. Jesus, who is fully human and therefore genuinely dreads the agony ahead, brings his actual desire — &ldquo;if you are willing, remove this cup&rdquo; — to the Father. He does not suppress the desire; he voices it. And then, having voiced it honestly, he releases it: &ldquo;not my will, but yours.&rdquo;",
      "Gethsemane establishes the grammar of Christian surrender: it is not the erasure of the human will but the placement of it beneath the divine will. It is not the pretense that the surrender is easy — Luke tells us &ldquo;his sweat was like great drops of blood falling to the ground&rdquo; (v. 44), indicating extreme physiological stress. It is not a one-time transaction — Jesus prays the same prayer three times (Matt 26:44). Gethsemane models surrender as costly, honest, repeated, and ultimately the shape of the deepest faith.",
      "The theological significance is profound: the Son of God surrenders his will to the Father&rsquo;s, and out of that surrender comes the redemption of the world. The pattern recurs in the Christian life at a lower but structurally identical level: when we surrender our will to God&rsquo;s, we do not know in advance what fruit will emerge from it. We simply follow the Son into the posture he modeled. &ldquo;Let this cup pass&rdquo; is an honest prayer; &ldquo;not my will but yours&rdquo; is surrender. Both are required. Neither is faith-light.",
    ],
    callout: {
      label: "The pattern",
      text: "Gethsemane: honest desire voiced, then deliberately released. Surrender is not the suppression of what we want but the willing placement of it beneath what God wills.",
    },
  },
  {
    badge: "John 12:24 — The Grain of Wheat",
    title: "The Grain of Wheat — Surrender as the Condition of Fruitfulness",
    paragraphs: [
      "&ldquo;Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit&rdquo; (John 12:24). Jesus speaks these words in response to Greeks who want to see him — at the moment when his fame is greatest, his disciples most numerous, and his earthly success most apparent. The world is coming to him. And he responds by talking about dying. The grain of wheat that remains on the surface — intact, self-preserving, protecting its individual existence — remains alone: isolated, unfruitful, exactly itself and nothing more.",
      "The grain of wheat that falls into the earth and dies undergoes precisely the kind of dissolution that feels like loss. It cannot see, from inside the darkness of the soil, what is coming. It cannot feel the germination. It only knows the giving up. And yet the giving up is the condition of the fruit: thirty, sixty, a hundredfold (Mark 4:20). The paradox is structural to the Christian life: what we hold onto, we lose; what we surrender, God multiplies. The surrender is not the loss — it is the planting.",
      "Jesus applies this immediately to himself and then to his disciples: &ldquo;Whoever loves his life loses it, and whoever hates his life in this world will keep it for eternal life&rdquo; (v. 25). The grain is his own death. The fruitfulness is the harvest of the gospel, drawn to him from every nation (v. 32). And for the disciple: the surrender of the self-preserving life is not the end of life but the beginning of the only kind that lasts. What we clutch dissolves. What we release, God plants.",
    ],
  },
  {
    badge: "Luke 9:23 — The Daily Cross",
    title: "Take Up Your Cross Daily — Ongoing Surrender, Not Once-for-All",
    paragraphs: [
      "&ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me&rdquo; (Luke 9:23). The word &ldquo;daily&rdquo; (kath&rsquo; hēmeran) is unique to Luke&rsquo;s version of the saying (compare Mark 8:34 and Matt 16:24, which omit it). Luke&rsquo;s insertion is theologically decisive: he wants to make clear that cross-bearing is not a single act of dramatic sacrifice but a daily posture. Surrender is not an event; it is a practice. The cross is picked up every morning.",
      "The sequence matters: first, self-denial; then, cross-bearing; then, following. Self-denial is not self-contempt or self-erasure — it is the refusal to make the self the ultimate reference point, the center around which all decisions orbit. Cross-bearing is the voluntary acceptance of the cost that discipleship entails — not suffering in general, but the particular suffering that comes from choosing God&rsquo;s way when the self wants another way. Following is the forward movement that only becomes possible after the first two.",
      "The daily rhythm of surrender is not a counsel of spiritual exhaustion — as if the Christian life requires the constant suppression of every desire. It is a counsel against the natural drift of the heart toward self-sovereignty. Left unchecked, the self reasserts its centrality. The daily cross-taking is the countermovement: the deliberate, renewed placement of the self under Christ&rsquo;s lordship. It is morning work — the first orientation of the day before the pressures of the day begin to reshape it.",
    ],
    callout: {
      label: "Key word",
      text: "&ldquo;Daily&rdquo; (kath&rsquo; hēmeran, Luke 9:23): surrender is a rhythm, not an event. The cross is taken up every morning and sometimes again before noon.",
    },
  },
  {
    badge: "1 Corinthians 15:31 — Paul&rsquo;s Daily Death",
    title: "&ldquo;I Die Daily&rdquo; — The Apostle Paul on Ongoing Self-Surrender",
    paragraphs: [
      "&ldquo;I protest, brothers, by my pride in you, which I have in Christ Jesus our Lord, I die every day!&rdquo; (1 Cor 15:31). Paul&rsquo;s claim is startling in its intensity: not &ldquo;I have died,&rdquo; not &ldquo;I am dying,&rdquo; but &ldquo;I die every day.&rdquo; The context is the resurrection argument — he is explaining why he takes such extreme risks in his apostolic ministry. The logic: if there is no resurrection, why bother? But if there is resurrection, then daily death to self-preservation, comfort, and safety is the rational response to the hope that awaits.",
      "Paul&rsquo;s daily death is not merely metaphor. He lists its content elsewhere: &ldquo;in toil and hardship, through many a sleepless night, in hunger and thirst, often without food, in cold and exposure&rdquo; (2 Cor 11:27). The daily dying of a first-century apostle was physically costly. But the principle he articulates — the daily decision to give up self-preservation for the sake of Christ — applies in less dramatic but structurally identical ways in every Christian life: the daily surrender of comfort to compassion, of approval to obedience, of control to trust.",
      "Galatians 2:20 gives the theological basis for the daily death: &ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.&rdquo; The old self — organized around self-justification, self-protection, and autonomy — has been definitively crucified in the union with Christ. The daily dying is not the repetition of that definitive act but the daily living out of its implications: the ongoing surrender of the self that was crucified into the new life that Christ lives in the believer.",
    ],
  },
  {
    badge: "Keswick Theology — The Second Crisis",
    title: "Consecration vs. Conversion — The Second Crisis in Keswick Theology",
    paragraphs: [
      "The Keswick Convention, founded in the English Lake District in 1875, developed a theology of the Christian life that distinguished between conversion and consecration as two distinct crises. Conversion is the moment of initial faith: the soul turns from sin to Christ, is forgiven, regenerated, and enters the family of God. Consecration is a second, subsequent act: the believer, often years after conversion, comes to a point of total surrender — placing every area of life, every aspiration, every cherished possession under God&rsquo;s absolute lordship.",
      "The Keswick teachers — including F.B. Meyer, Andrew Murray, and Hannah Whitall Smith — observed that many converted Christians lived a &ldquo;carnal&rdquo; or divided life: saved, yes, but with large areas of the self still under self-management rather than divine lordship. The work, the marriage, the finances, the future — these might be acknowledged as God&rsquo;s in principle while being managed as one&rsquo;s own in practice. The second crisis is the moment of consecration: when the believer places everything — including the things most tightly held — on the altar and says, genuinely, &ldquo;not my will but yours.&rdquo;",
      "Whether one follows Keswick in speaking of two distinct crises or prefers to understand consecration as the gradual deepening of conversion, the underlying insight holds: there is a kind of surrender that goes beyond initial faith, that costs more than the first turning, and that marks a qualitative shift in the Christian life. Many Christians testify to such a moment — a definitive, often painful, act of total surrender that became the hinge of their spiritual growth. The Keswick language gives that experience a theological name and context.",
    ],
    callout: {
      label: "Key distinction",
      text: "Conversion: turning from sin to Christ. Consecration: placing every area of life under God&rsquo;s lordship — including the things most tightly held. Many Christians experience this as a second, deeper crisis.",
    },
  },
  {
    badge: "Andrew Murray &amp; Hannah Whitall Smith",
    title: "The Surrendered Will as the Core of Sanctification",
    paragraphs: [
      "Andrew Murray, the South African Dutch Reformed pastor and prolific devotional writer, made the surrendered will the central theme of his theology of sanctification. In Absolute Surrender (1895), he argued that the root of all spiritual failure is the unsurrendered will: the believer who has been converted but has not placed the will itself — not just its decisions but its very throne — under God&rsquo;s lordship. Murray&rsquo;s language is characteristically absolute: not partial surrender, not surrender in most areas, but the willingness to say, without reservation, &ldquo;God, take everything, including my right to determine what&rsquo;everything&rsquo; means.&rdquo;",
      "Hannah Whitall Smith, whose The Christian&rsquo;s Secret of a Happy Life (1875) became one of the most widely read books of the century, approached the same reality under the language of &ldquo;abandonment&rdquo; or &ldquo;the will of God as the will of the Christian.&rdquo; Smith was particularly acute on the failure of partial surrender: the Christian who gives God their spiritual life while retaining their practical life, who surrenders their sins while retaining their plans. Her counsel is disarmingly simple: &ldquo;Put yourself and all your interests entirely into the hands of your loving Father, and go forward in his service as he may lead, asking nothing, fearing nothing, but simply following him.&rdquo;",
      "Both Murray and Smith insist that the surrendered will is not the end of Christian personality but its liberation. The will that is surrendered to God does not disappear; it discovers its truest operation, freed from the exhausting work of self-management. Murray writes: &ldquo;It is not the suppression of the will but the placing of it in its right position — under God — that makes true Christian character possible.&rdquo; The surrendered will is not a diminished will; it is a will rightly ordered.",
    ],
  },
  {
    badge: "The White Flag",
    title: "White Flag Theology — What It Means to Stop Fighting God",
    paragraphs: [
      "The metaphor of the white flag — the universal signal of surrender in warfare — captures something that softer devotional language can obscure: genuine surrender involves the cessation of active resistance. Many Christians are not simply passive toward God; they are in active opposition, managing their lives against what they sense God might require, bargaining in prayer rather than genuinely releasing, agreeing with God&rsquo;s lordship in principle while defending territory in practice. The white flag acknowledges that the battle was one-sided from the beginning and that continuing it is costing more than it is worth.",
      "C.S. Lewis, in Mere Christianity, described his own conversion as an experience of reluctant surrender: &ldquo;You must picture me alone in that room in Magdalen, night after night, feeling, whenever my mind lifted even for a second from my work, the steady, unrelenting approach of Him whom I so earnestly desired not to meet. That which I greatly feared had at last come upon me. In the Trinity Term of 1929 I gave in, and admitted that God was God, and knelt and prayed: perhaps, that night, the most dejected and reluctant convert in all England.&rdquo; Lewis&rsquo;s honesty is instructive: the surrender was genuine precisely because the resistance was real. He was not performing spiritual enthusiasm; he was raising the white flag.",
      "Thomas à Kempis, in The Imitation of Christ, describes the resistance to surrender as the soul&rsquo;s deepest wound: &ldquo;What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility, and be thus displeasing to the Trinity?&rdquo; The fighting soul — arguing, reasoning, negotiating — is not yet the surrendered soul. The white flag is not raised gradually; it is raised at a moment of decision, though the surrender it represents must be daily renewed.",
    ],
  },
  {
    badge: "The Great Paradox",
    title: "The Paradox of Surrender — How Giving Up Produces Freedom",
    paragraphs: [
      "The deepest paradox of Christian surrender is that the act of giving up produces the freedom that all the self&rsquo;s striving could never achieve. Jesus names this directly: &ldquo;For whoever would save his life will lose it, but whoever loses his life for my sake will find it&rdquo; (Matt 16:25). The self-preserving strategy — the tight grip on life, plans, reputation, control — does not preserve what it tries to hold. It produces the very isolation and anxiety it is designed to prevent. The surrender strategy — the open hand, the released grip — does not produce loss. It produces the fruit the grain of wheat always had within it.",
      "Augustine&rsquo;s famous line from the Confessions illuminates the paradox from the inside: &ldquo;Thou madest us for Thyself, and our heart is restless, until it repose in Thee.&rdquo; The restlessness of the unsurrendered self is not a sign of aliveness but of a fundamental mismatch: the soul made for God, attempting to find its rest anywhere else. Surrender is not the diminishment of the self but its arrival at the destination for which it was designed. The heart that stops fighting, stops managing, stops asserting its own centrality — and falls into God — finds, paradoxically, that what it feared losing was the very thing preventing its freedom.",
      "This is not a counsel of passivity or indifference. The surrendered Christian is not a doormat; they are a person whose energy is no longer consumed by the exhausting project of self-sovereignty. The capacity for genuine love, creative work, and courageous action increases in the surrendered life — not because the self has disappeared but because it has been rightly ordered. The freedom that surrender produces is not the freedom to do whatever one wants; it is the freedom to do what one was made for, unhindered by the tyranny of the self.",
    ],
    callout: {
      label: "Augustine",
      text: "&ldquo;Thou madest us for Thyself, and our heart is restless, until it repose in Thee.&rdquo; The restlessness of the unsurrendered soul is not aliveness — it is displacement.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Gethsemane Prayer — Honest Desire, Then Release",
    summary:
      "A structured prayer practice following the pattern of Luke 22:42: name the specific thing you want, voice it honestly to God, then make the deliberate act of releasing the outcome into his hands.",
    steps: [
      "Identify the specific area of resistance. Not &ldquo;I struggle to surrender&rdquo; — too vague to surrender — but &ldquo;I am holding tightly to this job decision, this relationship outcome, this health situation, this plan for my future.&rdquo; Naming is the first act of honesty.",
      "Pray the first half of Gethsemane honestly: &ldquo;Father, if you are willing — this is what I want. [Name it specifically.] I am not pretending I do not want it.&rdquo; Jesus did not suppress his desire; he brought it. Neither should you. God is not impressed by piety that bypasses honesty.",
      "Pause. Acknowledge the resistance. Note what makes the surrender feel costly. What am I afraid will happen if I release this? Name the fear under the grip. This is the weight Jesus carried to the garden; name yours.",
      "Pray the second half: &ldquo;Nevertheless, not my will but yours. I release this. I do not know what you will do with it. I am choosing to trust that your way — even if it differs from mine — is better than my management of this situation.&rdquo; Do this as many times as the grip returns.",
    ],
    anchor: "Luke 22:42 — &ldquo;Not my will, but yours, be done.&rdquo;",
  },
  {
    number: "02",
    title: "The Daily Altar — Morning Consecration",
    summary:
      "A short daily practice of placing the day&rsquo;s plans, relationships, and outcomes on the altar before God — following the pattern of Luke 9:23 and the Keswick tradition of daily consecration.",
    steps: [
      "Before the day&rsquo;s first activity, spend five minutes in deliberate offering. Name the day&rsquo;s main concerns: what you are planning, what you are hoping for, what you are afraid of. These are the items to place on the altar.",
      "For each item: &ldquo;Lord, I offer you [name it]. My plan for this is [name the plan]. I acknowledge that you may have a different plan. I place this under your lordship. I am available to be redirected.&rdquo; Offering is not the same as passivity — it is active deference.",
      "Close with a body posture that symbolizes the surrender: open hands, upturned palms, a brief moment of physical stillness. The body can reinforce what the mind intends. Some find it useful to literally say &ldquo;I raise the white flag&rdquo; as a declaration of intention rather than feeling.",
      "At the end of the day, note: which items did you pick back up off the altar? There is no judgment here — this is information, not condemnation. The daily altar practice is not about achieving perfect surrender; it is about daily returning to the posture of offering.",
    ],
    anchor: "Luke 9:23 — &ldquo;Take up his cross daily and follow me.&rdquo;",
  },
  {
    number: "03",
    title: "The Examen of Resistance — Evening Review",
    summary:
      "An evening practice drawn from the Ignatian Examen tradition: reviewing the day for the specific moments when resistance to God arose, identifying what was being protected, and offering it.",
    steps: [
      "Set aside ten minutes in the evening. Ask the Spirit to show you honestly: where did resistance arise today? Not just obvious disobedience, but the subtler forms — where did you manage rather than trust, plan rather than pray, deflect rather than yield, protect rather than offer?",
      "For each identified moment of resistance: what was being protected? A reputation? A plan? A relationship dynamic? A sense of control? Name the specific thing that made surrender feel too costly in that moment.",
      "Name one moment in the day where surrender was real, even small. The daily dying Paul describes is not grand dramatics; it is the moment in the meeting where you deferred rather than dominated, the conversation where you listened rather than managed, the decision where you prayed before planning. Acknowledge it as grace.",
      "Close with the offering of whatever remains unresolved: &ldquo;Lord, I am still gripping [name it]. I do not fully want to surrender it. But I am willing to be made willing. Take it from me if I will not give it freely.&rdquo; Willingness to be made willing is itself a surrender.",
    ],
    anchor: "1 Cor 15:31 — &ldquo;I die every day.&rdquo;",
  },
  {
    number: "04",
    title: "Identifying the Last Stronghold — Where Surrender Has Never Gone",
    summary:
      "A deep reflective practice for identifying the area that has never been surrendered — the thing most tightly held, most fiercely defended, most carefully kept outside God&rsquo;s management.",
    steps: [
      "Sit quietly and ask: what is the last thing I would give to God? What area of my life would I most resist surrendering? The answer to this question is frequently more important than the answer to &ldquo;where am I doing well spiritually.&rdquo;",
      "It may be a relationship — someone whose outcome you are managing rather than releasing. A career trajectory. A financial plan. A reputation. A theological position you would rather defend than examine. A secret you have never brought into the light. Name it as specifically as possible.",
      "Ask the diagnostic questions of Hannah Whitall Smith: &ldquo;Is this area of my life under God&rsquo;s lordship in practice, or only in principle?&rdquo; There is a significant difference between agreeing that God owns your finances and actually releasing a specific financial decision to him. Between believing God is sovereign over your health and releasing your anxiety about it.",
      "Bring the last stronghold to the Gethsemane prayer: &ldquo;Father, this is the cup I have not offered. I am afraid of what you might do with it. I am not sure I trust you with this one. And yet — not my will. I release it to you.&rdquo; This may be the most important prayer you pray.",
    ],
    anchor: "Andrew Murray: &ldquo;Absolute surrender — holding nothing back — is the condition of God&rsquo;s fullness.&rdquo;",
  },
  {
    number: "05",
    title: "The Grain of Wheat Meditation — Praying Into the Fruitfulness of Loss",
    summary:
      "A contemplative practice using John 12:24 as the frame: sitting with what appears to be loss in your life and asking what fruit God may be growing in the darkness.",
    steps: [
      "Bring to mind a specific surrender that felt like loss: something you gave up that you did not want to give up, a prayer that was answered differently than you asked, a door that closed, a plan that dissolved. Name it concretely.",
      "Sit with the grain-of-wheat image: the seed does not know, in the darkness of the soil, what is coming. It only knows the dissolution. Ask: what am I assuming about this loss? That it is simply loss? That the fruit is not coming? That the darkness is final?",
      "Ask the fruit questions: &ldquo;Lord, what have you been growing in the darkness of this situation? What has this surrender made possible that my holding on would have prevented? What fruitfulness, in me or through me, is only available because of this loss?&rdquo; You may not receive answers immediately — but asking the question positions you to notice when they arrive.",
      "Close with the declaration: &ldquo;I choose to believe that what I surrendered has not been lost — it has been planted. I do not yet see the fruit. I trust the Farmer.&rdquo;",
    ],
    anchor: "John 12:24 — &ldquo;Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.&rdquo;",
  },
  {
    number: "06",
    title: "The Covenant of Surrender — Writing a Letter of Consecration",
    summary:
      "A formative, once-or-occasionally practice of writing out a deliberate, specific act of consecration — placing named areas of life under God&rsquo;s lordship in a document you keep and return to.",
    steps: [
      "Set aside an hour for unhurried writing. Begin by listing every area of your life: work and vocation, finances, relationships, health, reputation, future plans, secret ambitions, fears, the things most tightly held. Do not rush this inventory.",
      "For each area, write one sentence of consecration: &ldquo;I place [name of area] under your lordship. I acknowledge that it is not ultimately mine to manage. I release my grip on [name the specific thing you have been holding]. I invite you to have your way in this.&rdquo;",
      "Sign it. Date it. Keep it. Return to it in seasons of resistance — when the self reasserts its sovereignty, when fear returns, when the old grip tightens. The covenant of surrender is not magic; it is a record of a genuine intention that can be renewed in subsequent prayers.",
      "Read the covenant again in one year. Note: what has God done in the areas that were consecrated? Where has the fruit appeared? A covenant of surrender becomes, over time, a record of God&rsquo;s faithfulness in the surrendered spaces.",
    ],
    anchor: "Romans 12:1 — &ldquo;Present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Andrew Murray",
    role: "Absolute Surrender; Humility; Abide in Christ — The Surrendered Will as the Core of Sanctification",
    quote:
      "Absolute surrender — I am ready to give up everything to God, to let God be all — is the condition that God requires, and the blessing He offers.",
    bio: "Andrew Murray (1828&ndash;1917) was a South African Dutch Reformed pastor, revivalist, and one of the most prolific devotional writers of the nineteenth century, with over two hundred books and booklets to his name. Educated in Aberdeen and Utrecht, he served for fifty years as a minister in South Africa while simultaneously producing a body of devotional literature that shaped evangelical spirituality worldwide. His Absolute Surrender (1895) is the most sustained and direct treatment of total consecration in the evangelical canon: Murray argues that the root of all spiritual failure is the unsurrendered will and that the condition of God&rsquo;s fullness is the Christian&rsquo;s willingness to hold nothing back. His other major works — Humility (1895), Abide in Christ (1882), The Spirit of Christ (1888) — all circle the same center: the self that is emptied of its own agenda is the self that is filled with God. Murray wrote from a life that included periods of severe illness and what he described as a &ldquo;second experience&rdquo; of consecration that transformed his ministry. His theology of surrender is not theoretical; it is the record of a man who paid the cost of it and found the paradox to be true.",
  },
  {
    name: "Hannah Whitall Smith",
    role: "The Christian&rsquo;s Secret of a Happy Life — Abandonment as the Gateway to Rest",
    quote:
      "The &lsquo;secret&rsquo; is just this: the soul that is entirely given up to God finds that God takes charge of it, and carries it through where it could never have carried itself.",
    bio: "Hannah Whitall Smith (1832&ndash;1911) was a Philadelphia Quaker who became one of the most influential popular theological writers of the Victorian era. The Christian&rsquo;s Secret of a Happy Life (1875), which emerged from her addresses at the Keswick Convention and the Oxford Union of Prayer, sold millions of copies and has never been out of print. The &ldquo;secret&rdquo; she describes is the discovery that the Christian life is not sustained by effort but by surrender: not the soul&rsquo;s management of itself but its deliberate placement into God&rsquo;s management. Smith is particularly acute on the failure of partial surrender — the believer who yields in some areas while retaining control in others, who agrees with God&rsquo;s sovereignty in principle while practicing personal sovereignty in the specifics. Her personal life was marked by significant sorrow: a husband whose theology moved in directions she could not follow, children who left the faith. Her surrender theology bears the marks of having been tested in those griefs rather than merely taught in comfortable circumstances. She is also remarkable for her clear-eyed refusal to make spiritual feelings the criterion of spiritual reality: &ldquo;Do not wait for feelings,&rdquo; she writes, &ldquo;but act on your present knowledge.&rdquo;",
  },
  {
    name: "Oswald Chambers",
    role: "My Utmost for His Highest — Surrender as the Shape of Discipleship",
    quote:
      "Surrender is not the surrender of the external life but of the will; when that is done, all the rest is easy.",
    bio: "Oswald Chambers (1874&ndash;1917) was a Scottish-born Bible teacher whose My Utmost for His Highest — compiled from his lectures by his wife Biddy and published posthumously in 1927 — has been in continuous print for nearly a century, selling tens of millions of copies. Chambers himself died at forty-three while serving as a YMCA chaplain in Egypt, having spent his final years ministering to British soldiers during the First World War. His theology of surrender is radically Christocentric: the model is not a devotional ideal but the specific, historical Jesus who said &ldquo;follow me&rdquo; into situations of cost, rejection, and death. Chambers distinguishes constantly between the faith that assents to doctrine and the surrender that commits the will — and he is characteristically blunt about the difficulty of the latter. His famous phrase &ldquo;the last aching abyss of the will&rdquo; describes the place where many Christians stall: the intellectual agreement with God&rsquo;s lordship coexisting with the will&rsquo;s fierce refusal to let go. For Chambers, this is not a peripheral problem; it is the central battle of the Christian life. His journal entries, sermon notes, and devotionals consistently return to the same question: have you given God everything? Or are you still negotiating?",
  },
  {
    name: "Thomas à Kempis",
    role: "The Imitation of Christ — Self-Renunciation as the Path to Union with God",
    quote:
      "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility, and be thus displeasing to the Trinity? Truly it profiteth thee nothing. He who knoweth himself well is vile in his own sight, and delighteth not in the praises of men.",
    bio: "Thomas à Kempis (c. 1380&ndash;1471) was an Augustinian monk in the Netherlands whose The Imitation of Christ is, after the Bible, arguably the most widely read Christian book in history. Written in four books over approximately twenty years, it is a manual of interior surrender: the systematic dismantling of the self&rsquo;s pretensions, its love of recognition, its resistance to suffering, and its hunger for worldly comfort, in favor of union with Christ through humble obedience and interior silence. For Thomas, surrender is not one spiritual option among many; it is the whole of the Christian life under a different name: &ldquo;Many words satisfy not the soul, but a good life refresheth the mind.&rdquo; His unsentimental account of self-renunciation has served as a corrective to every era&rsquo;s tendency to replace interior transformation with religious activity. The Imitation addresses the reader directly, in the second person, throughout — which gives it an unusual capacity to penetrate self-deception. No Christian who reads it carefully leaves comfortable.",
  },
  {
    name: "Amy Carmichael",
    role: "Gold Cord; Rose from Brier — Surrender Tested in Decades of Suffering",
    quote:
      "In acceptance lieth peace. He who, forsaking all that he would choose, all self-made plans hath swept aside, and placed his life within God&rsquo;s hands, in that same hour hath peace.",
    bio: "Amy Carmichael (1867&ndash;1951) was a Northern Irish missionary who founded the Dohnavur Fellowship in India and served there for fifty-five years without furlough. Her work among children rescued from temple prostitution was groundbreaking and costly; she was eventually confined to her room for the last twenty years of her life following an accident. From that room, bedridden and in constant pain, she wrote some of the most tender and searching books on surrender in the Christian canon. Gold Cord (1932) is the story of Dohnavur; Rose from Brier (1933), written from the sickroom, addresses the theology of accepted suffering directly. Carmichael&rsquo;s surrender is not theoretical; it is the surrender of a woman who gave up her home country, her health, her independence, and eventually her mobility — and found that each act of surrender deepened rather than diminished her capacity for love and joy. Her oft-quoted prayer — &ldquo;No wound? No scar? Yet as the Master shall the servant be&rdquo; — captures her theology of surrender in a single image: the surrendered life bears, inevitably, the marks of its Lord.",
  },
  {
    name: "Charles de Foucauld",
    role: "The Prayer of Abandonment — Surrender as the Totality of Christian Prayer",
    quote:
      "I abandon myself into your hands; do with me what you will. Whatever you may do, I thank you. I am ready for all, I accept all. Let only your will be done in me, and in all your creatures. I wish no more than this, O Lord.",
    bio: "Charles de Foucauld (1858&ndash;1916) was a French aristocrat, former military officer, and dissolute young man who underwent a dramatic conversion at thirty and eventually became a hermit in the Sahara Desert, living among the Tuareg people of Algeria until his assassination in 1916. He was beatified by Pope Benedict XVI in 2005. His Prayer of Abandonment — composed in its final form by his spiritual director René Voillaume based on Foucauld&rsquo;s writings — has become one of the most widely used prayers of surrender in the Christian tradition across denominational lines. The prayer is theologically precise: it addresses not just the surrender of particular things but the surrender of the self&rsquo;s right to know what God will do with the surrendered life. &ldquo;I do not know what you will do with this. I do not require to know. I simply abandon myself.&rdquo; Foucauld&rsquo;s life in the Sahara was apparently fruitless by any measurable standard — he made no converts, built no institution, founded no lasting community in his lifetime. Yet his Prayer of Abandonment and his example of total self-gift gave rise to the Little Brothers of Jesus and has influenced millions. The grain of wheat he planted in the desert has borne extraordinary fruit.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Luke 22:42",
    text: "Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.",
    reflection:
      "The grammar of Gethsemane: honest desire (&ldquo;remove this cup&rdquo;) followed by deliberate release (&ldquo;not my will&rdquo;). Both parts are required. Surrender that skips the honest desire is pretense; the desire that never reaches &ldquo;not my will&rdquo; is not surrender. The two halves of this prayer together constitute the shape of Christian yielding.",
  },
  {
    reference: "John 12:24",
    text: "Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.",
    reflection:
      "The paradox of surrender stated in agricultural terms: the grain that self-preserves remains exactly itself and produces nothing. The grain that surrenders its individual existence — falls, is buried, apparently lost — becomes the condition of multiplication. The thirty, sixty, hundredfold harvest is not available to the grain that refuses the soil. What appears to be loss is, in God&rsquo;s economy, planting.",
  },
  {
    reference: "Luke 9:23",
    text: "If anyone would come after me, let him deny himself and take up his cross daily and follow me.",
    reflection:
      "Luke&rsquo;s &ldquo;daily&rdquo; (absent from Matthew and Mark) is the word that transforms this saying from a call to single dramatic sacrifice into a call to daily practice. The cross is not picked up once; it is picked up every morning. Surrender is not an event but a posture maintained, renewed, and repeated against the natural drift of the self toward its own sovereignty.",
  },
  {
    reference: "Romans 12:1",
    text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.",
    reflection:
      "The Old Testament sacrifice was offered once and consumed. The &ldquo;living sacrifice&rdquo; of Romans 12 remains alive — and therefore retains the capacity to climb back off the altar. This is Paul&rsquo;s wry acknowledgment of the Christian&rsquo;s situation: the sacrifice must be re-presented, the surrender re-enacted, the offering continually renewed. &ldquo;Spiritual worship&rdquo; (logikēn latreian) means rational, whole-life, embodied devotion — not a weekly ceremony but the shape of an entire existence.",
  },
  {
    reference: "Galatians 2:20",
    text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.",
    reflection:
      "The theological basis for surrender: the old &ldquo;I&rdquo; — organized around self-justification, self-protection, autonomy — has already been crucified in union with Christ. The daily surrender is not the creation of this reality but the living out of it. &ldquo;No longer I who live&rdquo; is a declaration of completed transaction; &ldquo;I live by faith&rdquo; is the ongoing practice of the life that flows from it.",
  },
  {
    reference: "Matthew 16:25",
    text: "For whoever would save his life will lose it, but whoever loses his life for my sake will find it.",
    reflection:
      "The paradox of surrender stated in its starkest form: the self-preserving strategy produces the very loss it is designed to prevent; the surrendered strategy produces the very life it appears to sacrifice. This is not an exhortation to recklessness but to the specific recklessness of following Christ — releasing the self&rsquo;s management of its own life into the hands of the One who is actually in charge of it.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "QQ79TpQFCHk", title: "Christian Surrender — The Theology of Not My Will But Yours" },
  { videoId: "jPmhblZ0g9Y", title: "Gethsemane and the Surrendered Life" },
  { videoId: "Wm8hFHuS1Wo", title: "The Grain of Wheat — John 12:24 and the Paradox of Surrender" },
  { videoId: "JpfCj1DRQIM", title: "Absolute Surrender — Andrew Murray&rsquo;s Teaching" },
  { videoId: "9UIDq1Lq_GA", title: "Take Up Your Cross Daily — Luke 9:23 Explained" },
  { videoId: "1BxuHIXVPZc", title: "How Surrender Produces Freedom — The Paradox of the Christian Life" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSurrenderPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<SRNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatISurrendered, setWhatISurrendered] = useState("");
  const [theResistance, setTheResistance] = useState("");
  const [whatGodDid, setWhatGodDid] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as SRNEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!whatISurrendered.trim() || !theResistance.trim()) return;
    const entry: SRNEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatISurrendered: whatISurrendered.trim(),
      theResistance: theResistance.trim(),
      whatGodDid: whatGodDid.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatISurrendered("");
    setTheResistance("");
    setWhatGodDid("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? ROSE : BORDER}`,
    background: active ? "rgba(225, 29, 72, 0.12)" : "transparent",
    color: active ? ROSE : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: ROSE,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: ROSE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Surrender &amp; Consecration
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Surrender: The Theology and Practice of Not My Will But Yours
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Christian surrender is not passivity or defeat. It is the deliberate, costly, repeated act of placing your will beneath God&rsquo;s — following Jesus from Gethsemane through the cross to the fruitfulness that only comes through dying. This guide traces the theology of surrender from the grain of wheat to the daily cross, explores the voices who paid its cost, and builds the practices that form the surrendered life in ordinary days.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ROSE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>Luke 22:42</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Eight studies tracing the theology of surrender from Gethsemane and the grain of wheat through the daily cross, Paul&rsquo;s dying daily, Keswick consecration theology, and the paradox that surrender produces freedom rather than loss.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: ROSE,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(225, 29, 72, 0.07)",
                        border: "1px solid rgba(225, 29, 72, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: ROSE,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Gethsemane, the grain of wheat, the daily cross, Paul&rsquo;s dying daily, Keswick consecration — these are not separate topics but one doctrine of surrender seen under different angles of light. What they share: surrender is costly but not final loss; the surrendered will is not erased but rightly ordered; and the practice is daily, specific, and paradoxically the path to the only true freedom. Explore how surrender intersects with trust in{" "}
                  <Link href="/christian-trust" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Trust
                  </Link>{" "}
                  or with holiness in{" "}
                  <Link href="/christian-holiness" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Holiness
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices for building the surrendered life in the specific texture of ordinary days — from the Gethsemane prayer to the daily altar, the examen of resistance, the identification of the last stronghold, and the covenant of consecration.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: ROSE,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The slow work of surrender
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Surrender is not achieved in a single act of will and thereafter maintained without effort. It is daily work — the repeated, specific, often painful returning of the tightly held thing to God&rsquo;s hands. The person who surrenders deeply in a crisis has usually been practicing in the ordinary: the small daily altar, the evening examen of resistance, the Gethsemane prayer over the small decisions. Use the Journal tab to build that record: what you surrendered, where you felt the resistance, what God did in the surrendered space.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers whose lives and writings have most deeply shaped the theology and practice of Christian surrender — Andrew Murray&rsquo;s absolute surrender, Hannah Whitall Smith&rsquo;s abandonment, Oswald Chambers&rsquo;s daily dying, Thomas à Kempis&rsquo;s self-renunciation, Amy Carmichael&rsquo;s accepted suffering, and Charles de Foucauld&rsquo;s prayer of abandonment. Each paid the cost.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: ROSE,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(225, 29, 72, 0.06)",
                      borderLeft: `3px solid ${ROSE}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages that form the biblical theology of surrender — from Gethsemane to the grain of wheat, from the daily cross to the living sacrifice of Romans 12. Read them alongside the Journal practice. Let each text both describe and produce the posture of release.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: ROSE,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each passage and use it as a surrender exercise: read it slowly, name the specific area of your life that this text addresses, and make a deliberate act of release — voicing your honest desire first, then adding &ldquo;not my will but yours.&rdquo; End with the acknowledgment: &ldquo;I am not fully surrendered. I am willing to be made willing. Take what I am not ready to give freely.&rdquo; Surrender in the Bible is rarely the absence of desire; it is the deliberate placement of desire beneath the will of God.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that build the record of surrender over time: what you surrendered or need to surrender, where you felt the most resistance, and what God did or is doing in that surrendered space. Entries are stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New surrender entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="srn-what" style={labelStyle}>
                    What I surrendered or need to surrender
                  </label>
                  <textarea
                    id="srn-what"
                    value={whatISurrendered}
                    onChange={(e) => setWhatISurrendered(e.target.value)}
                    placeholder="Name it specifically — a relationship outcome, a career plan, a health fear, something you are still gripping tightly..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="srn-resistance" style={labelStyle}>
                    Where I felt the most resistance
                  </label>
                  <textarea
                    id="srn-resistance"
                    value={theResistance}
                    onChange={(e) => setTheResistance(e.target.value)}
                    placeholder="What made surrender feel costly or frightening? What were you afraid God would do with it?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="srn-what-god-did" style={labelStyle}>
                    What God did or is doing in that surrendered space
                  </label>
                  <textarea
                    id="srn-what-god-did"
                    value={whatGodDid}
                    onChange={(e) => setWhatGodDid(e.target.value)}
                    placeholder="Even if you don&rsquo;t yet see fruit — what has God been doing since you released it? Leave blank if too soon."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatISurrendered.trim() || !theResistance.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatISurrendered.trim() || !theResistance.trim() ? BORDER : ROSE,
                    color: !whatISurrendered.trim() || !theResistance.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatISurrendered.trim() || !theResistance.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name what you surrendered or need to surrender, name the resistance, and note what God has done or is doing. Over time this becomes a record of God&rsquo;s faithfulness in the surrendered spaces — the grain of wheat journal.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: ROSE }}>
                              {entry.whatISurrendered}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.whatISurrendered}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        <div style={{ marginBottom: 10 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The resistance
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theResistance}
                          </p>
                        </div>

                        {entry.whatGodDid && (
                          <div>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              What God did
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatGodDid}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on Christian surrender, Gethsemane, the grain of wheat, the daily cross, Andrew Murray&rsquo;s absolute surrender, and the paradox that surrender produces freedom. Good companions to the Theology and Practices tabs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              Surrender as the shape of the Christian life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The surrendered life is not a life of diminishment. It is a life rightly ordered — the will placed under God&rsquo;s, the grain fallen into the soil, the cup accepted, the cross taken up daily. What appears to be loss is planting. What appears to be death is the necessary condition of fruit that multiplies. The paradox is not a theological puzzle to be solved; it is a pattern to be lived, daily, in the specific texture of the things most tightly held. The Journal tab is designed to support that slow, honest work.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore how surrender relates to trust in{" "}
              <Link href="/christian-trust" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Trust
              </Link>
              , see how surrender shapes holiness in{" "}
              <Link href="/christian-holiness" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              , or trace the connection between surrender and identity in{" "}
              <Link href="/christian-identity" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Identity
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
