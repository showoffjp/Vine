"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const BLUE = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianapologetics_entries";

interface APLEntry {
  id: string;
  date: string;
  question: string;
  responseGiven: string;
  stillLearning: string;
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
    badge: "1 Peter 3:15",
    title: "Apologia — Always Be Ready to Give a Defense",
    paragraphs: [
      "The Greek word apologia — from which we get apologetics — means a formal defense, the kind a lawyer would give before a court. Peter uses it in 1 Peter 3:15 in a command to every believer: &ldquo;Always be prepared to give a defense to everyone who asks you for a reason for the hope that is in you — yet do it with gentleness and respect.&rdquo; Two things are important immediately. First, the defense is for &lsquo;anyone who asks you&rsquo; — this is not a specialized ministry for academics but an ordinary readiness every Christian should cultivate. Second, it is framed by character: gentleness and respect. An apologetics that wins arguments and loses people has failed.",
      "The context of 1 Peter 3:15 is suffering. Peter is writing to people who are being mocked and marginalized for their faith. The apologia he calls for is not a debate-club performance; it is the articulation of a hope that is visible in the way a persecuted person bears their suffering. The question an outsider asks is: why are you not crushed? The defense explains: because of the resurrection, because of the hope of new creation, because the one who suffered and was vindicated is with me now. Apologetics in its native environment is not a classroom exercise — it is the explanation of a life that makes no sense without the gospel.",
      "The most important word in the verse may be the first: &lsquo;always.&rsquo; Not occasionally, not when you have studied enough, not when you feel confident. Always. This does not mean having every answer to every question; it means living in such a way that questions arise, and being ready to answer honestly when they do.",
    ],
    callout: {
      label: "The word",
      text: "Apologia (ἀπολογία): a formal defense or reasoned reply — the same word used of Paul&rsquo;s defense before governors and kings; here applied to every Christian&rsquo;s ordinary readiness.",
    },
  },
  {
    badge: "Natural Theology",
    title: "Arguments for God&rsquo;s Existence — Cosmological, Ontological, Teleological",
    paragraphs: [
      "The cosmological argument asks: why is there something rather than nothing? Everything that begins to exist has a cause. The universe began to exist (as modern cosmology confirms with the Big Bang). Therefore the universe has a cause — one that is uncaused, timeless, spaceless, immaterial, and enormously powerful, since it brought all space, time, and matter into being. This is not a proof that the God of the Bible exists; it is a proof that the universe had a beginning and a sufficient cause, which Christianity claims is God. Aquinas worked this argument in multiple forms; William Lane Craig has given it its most rigorous contemporary defense in the Kalam cosmological argument.",
      "The teleological argument (from telos, purpose) observes the stunning fine-tuning of the universe for intelligent life. The cosmological constants — the strength of gravity, the mass of the proton, the cosmological constant — are calibrated to a precision that staggers mathematicians. Change any of them by even tiny margins and no stars, no planets, no chemistry, no life. The inference to design is not ignorance of science; it is the recognition that the best explanation of this specificity is intentional tuning by an intelligent agent. The argument has been revived by Robin Collins, Alvin Plantinga, and others with full awareness of modern physics.",
      "The ontological argument, first articulated by Anselm of Canterbury in the eleventh century, argues from the concept of God to his existence: God is defined as the greatest conceivable being; a being that exists is greater than one that does not; therefore God must exist in reality and not only in the mind. The argument is notoriously difficult to evaluate — philosophers have argued about it for a millennium — but Alvin Plantinga&rsquo;s modal version has shown it to be logically valid given plausible premises. These arguments are not coercive proofs; they are rational signposts that point toward the reasonableness of theism.",
    ],
  },
  {
    badge: "The Hardest Question",
    title: "The Problem of Evil and Suffering",
    paragraphs: [
      "The problem of evil is the most emotionally powerful objection to Christian theism, and the most common. It comes in two forms. The logical problem asks: is it logically possible for an all-good, all-powerful God to exist alongside evil and suffering? Most philosophers now concede that it is — God may have morally sufficient reasons for permitting evil that we do not fully understand. Alvin Plantinga&rsquo;s free will defense dissolved the logical problem for most specialists. The evidential problem is harder: even if such coexistence is possible, does the sheer quantity of suffering we observe make it unlikely that God exists? This is a live question that philosophers continue to debate.",
      "Christian apologetics does not dismiss the problem; it engages it. Several resources are offered to the person wrestling honestly. First, the argument from evil actually presupposes a moral standard by which evil can be recognized — an objective moral order that makes more sense if there is a God than if there is not. Second, Christian theology does not explain every instance of suffering but provides resources for bearing it: a God who himself entered suffering in Christ (Hebrews 4:15), the promise of ultimate restoration (Romans 8:18-25), the present help of the Spirit (Romans 8:26-27). Third, the existence of suffering does not prove the non-existence of God; it raises the question of what kind of God exists and what he is doing about it.",
      "The honest apologist admits what she does not know. There are instances of suffering for which no satisfying theodicy is offered — only the cross, where God was present in the worst of human experience. Tim Keller&rsquo;s The Reason for God chapter on suffering, and C.S. Lewis&rsquo;s A Grief Observed (written after his wife&rsquo;s death) are the most honest and humane treatments available. The apologist&rsquo;s job is not to explain away suffering but to point to the God who is present in it.",
    ],
  },
  {
    badge: "New Testament Scholarship",
    title: "The Reliability of the New Testament",
    paragraphs: [
      "The New Testament is the best-attested document of the ancient world by a significant margin. We have over 5,800 Greek manuscripts, compared to about 10 for Caesar&rsquo;s Gallic Wars and fewer than 20 for most classical texts. The earliest manuscripts are within decades of the original writings — the Rylands papyrus (P52) containing a fragment of John&rsquo;s Gospel dates to around AD 125-150, within a generation of composition. The gap between the originals and the earliest manuscripts is vastly smaller than for any other ancient text whose historicity is not routinely questioned.",
      "The dating of the New Testament documents matters enormously. Paul&rsquo;s letters are dated by most New Testament scholars — including skeptical ones — to the AD 50s, within twenty years of the crucifixion. The creed in 1 Corinthians 15:3-8 (&ldquo;Christ died for our sins... he was buried... he was raised on the third day... he appeared to Peter...&rdquo;) is dated by scholars like James D.G. Dunn to within two to five years of the resurrection, placing it in the realm of eyewitness testimony rather than developing legend. Legend formation typically takes several generations, not decades.",
      "The Gospels contain numerous details that are confirmed by archaeology and that embarrass later theological agendas — the &lsquo;criterion of embarrassment&rsquo; used by historians suggests authenticity. Mark includes the disciples&rsquo; repeated failure to understand Jesus. All four Gospels record women as the first resurrection witnesses, at a time when women&rsquo;s testimony was not valued in courts. No church propagandist inventing a resurrection story would have invented that detail. The historical reliability of the New Testament is not naive faith; it is the conclusion of careful scholarship from scholars across the theological spectrum.",
    ],
  },
  {
    badge: "Gary Habermas",
    title: "The Resurrection as History — The Minimal Facts Approach",
    paragraphs: [
      "Gary Habermas developed what he calls the minimal facts approach to the resurrection: arguing only from those facts that are granted by the vast majority of scholars who study the subject, including the most critical and skeptical. The four minimal facts are: (1) Jesus died by crucifixion. (2) The disciples believed they saw him risen and were willing to die for this belief. (3) Paul converted after what he described as an encounter with the risen Jesus. (4) James, the brother of Jesus (who was a skeptic during Jesus&rsquo; ministry), converted after what he described as a post-resurrection appearance. These four facts are accepted by virtually all New Testament historians, regardless of theological starting point.",
      "The question Habermas then poses is: what is the best explanation of these four facts? The disciples did not die for a theological idea; they died for the specific claim that they had seen Jesus alive after death. Several alternative explanations have been proposed: the wrong tomb (refuted by the fact that the authorities could have produced a body), mass hallucination (hallucinations are private, not shared; and they do not explain the empty tomb), deliberate fabrication (people do not die for what they know to be a lie), or swoon (Jesus survived — refuted by Roman execution expertise and the medical evidence of the spear thrust in John 19). The bodily resurrection of Jesus is, Habermas argues, the most historically adequate explanation of the minimal facts.",
      "N.T. Wright&rsquo;s The Resurrection of the Son of God (2003), at over 700 pages the most comprehensive historical treatment, arrives at the same conclusion from a different direction: arguing that the resurrection is the only historically adequate explanation of two undisputed facts — the empty tomb and the post-resurrection appearances — within the specific Jewish context of first-century Palestine, where &lsquo;resurrection&rsquo; had a very specific meaning that no disciple would have invented for a crucified Messiah.",
    ],
  },
  {
    badge: "Epistemology",
    title: "Christianity Is Reasonable But Not Provable by Science Alone",
    paragraphs: [
      "One of the most common mistakes in apologetics conversations is to accept the framing that only scientific evidence counts as evidence. Science is extraordinarily powerful within its domain — empirical investigation of the natural world through observation and experiment. But the claim &ldquo;science has proven there is no God&rdquo; is not a scientific claim; it is a philosophical one, and a poorly reasoned philosophical one at that. Science describes natural processes; it has no tools for answering whether there is an agent behind those processes. The question of God&rsquo;s existence is a metaphysical and historical question, not a scientific one.",
      "Christianity makes historical claims — the incarnation, the resurrection — that are not provable by laboratory experiment but are investigable by historical method: examining sources, evaluating testimony, weighing alternative explanations. It makes philosophical claims — that there is a God, that there is objective moral reality — that are not testable by science but are evaluable by reason. And it makes experiential claims — that the Holy Spirit is present and active in human lives — that are not reproducible under controlled conditions but are cumulatively evidenced by the testimony of millions of transformed people across two thousand years.",
      "The apologist&rsquo;s task is to widen the evidential conversation: historical evidence for the resurrection, philosophical arguments for God, the moral argument, the argument from consciousness, the cumulative case built by C.S. Lewis, Alister McGrath, and Tim Keller. Faith is not believing without evidence; it is trusting on the basis of evidence that does not yet rise to mathematical certainty. As Anselm put it: faith seeking understanding. We begin with trust in the God who has revealed himself, and then pursue understanding of everything else in that light.",
    ],
  },
  {
    badge: "Two Schools",
    title: "Presuppositional vs. Evidential Apologetics",
    paragraphs: [
      "The two main approaches to Christian apologetics differ in their starting point. Evidential apologetics, associated with thinkers like John Warwick Montgomery, Gary Habermas, and Lee Strobel, begins with evidence available to any inquirer — historical evidence for the resurrection, philosophical arguments for God — and argues that this evidence, evaluated by ordinary standards of historical and rational inquiry, supports Christian truth claims. The non-Christian can in principle follow the argument without first accepting Christian presuppositions.",
      "Presuppositional apologetics, associated most powerfully with Cornelius Van Til and more recently with Greg Bahnsen and John Frame, argues that there is no neutral starting point. Every person argues from within a worldview with fundamental presuppositions about knowledge, reality, and morality. The presuppositionalist engages the non-Christian not by conceding a neutral ground but by showing that the non-Christian&rsquo;s worldview cannot provide the foundations it needs — for logic, for moral values, for the uniformity of nature — and that only the Christian worldview can. The apologetic approach is to expose internal inconsistency rather than to offer evidence from a supposedly shared neutral territory.",
      "In practice most working apologists draw from both. The evidential case for the resurrection is powerful and worth making. The presuppositional reminder that every person reasons from within a worldview is equally true and worth noting. Tim Keller&rsquo;s The Reason for God combines both: examining evidence and addressing objections, while also questioning the worldview assumptions that generate the objections. The beginner need not choose a camp; understand both, use both, and let the conversation partner and the Holy Spirit guide which is most needed.",
    ],
  },
  {
    badge: "Anselm / John 16:8",
    title: "The Role of the Holy Spirit and Faith Seeking Understanding",
    paragraphs: [
      "Apologetics depends on the Holy Spirit to do what argument alone cannot. John 16:8 reminds us that it is the Spirit who convicts the world of sin, righteousness, and judgment — not the apologist, however well prepared. William Lane Craig puts it this way: the role of the apologist is to remove intellectual obstacles so that the Spirit can do his work without hindrance. The arguments do not save; they clear a path. The Spirit convicts; the apologist opens the door.",
      "Anselm of Canterbury&rsquo;s phrase fides quaerens intellectum — faith seeking understanding — describes the proper order of the Christian mind. Faith comes first, not as ignorance but as trust; understanding is then the lifelong pursuit of the one who has already committed to the truth. This does not mean faith is irrational. It means that we do not wait for complete intellectual certainty before trusting — no one lives that way in any domain of life. We trust, commit, and then discover progressively that the thing we trusted in holds.",
      "The honest apologist admits her own limits. There are questions she cannot answer — the timing of suffering, the fate of the unevangelized, the relation of divine sovereignty and human freedom. These are not defeaters; they are the edge of the map. The Christian is not claiming to have exhausted the knowledge of the infinite God; she is claiming that the God she cannot fully understand has revealed himself sufficiently in Christ. That revelation is enough to trust, even where explanation runs out. This combination of intellectual rigor and epistemic humility is the mark of mature apologetics.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Question Journal",
    summary:
      "Keeping a running list of the hard questions you encounter — in conversation, in reading, in your own doubts — and pursuing answers rather than avoiding them.",
    steps: [
      "Buy a cheap notebook or use the Journal tab on this page. Every time someone asks you a question you cannot answer, or you encounter a claim against Christianity you do not know how to respond to, write it down.",
      "Treat the question as a gift rather than a threat. The questions non-Christians ask are often the most theologically significant ones the church has to answer. Peter says be prepared — preparation requires knowing what the questions actually are.",
      "Research one question per week. Start with a short chapter in Keller&rsquo;s The Reason for God or McGrath&rsquo;s Mere Apologetics — not an academic monograph. The goal is a defensible first answer, not a PhD thesis.",
      "Practice your answer on a Christian friend before you need it in a real conversation. Articulating it aloud reveals the gaps that silent reading does not.",
    ],
    anchor: "1 Peter 3:15 — Always be prepared to give a defense to everyone who asks you for a reason for the hope that is in you.",
  },
  {
    number: "02",
    title: "Reading Across the Line",
    summary:
      "Reading the best arguments against Christianity, not to be destabilized, but to understand what the actual case against faith looks like — because you cannot answer what you have not heard.",
    steps: [
      "Read one book by a serious atheist or skeptic per year. Not the angriest, but the most serious: Bertrand Russell&rsquo;s Why I Am Not a Christian, Daniel Dennett&rsquo;s Breaking the Spell, or Anthony Flew&rsquo;s earlier work (before his deism). Understand the strongest version of the objection.",
      "While reading, write down every argument that lands — that you find genuinely difficult to answer. These are the arguments that need work. Arguments that feel weak are not worth rehearsing your rebuttal to.",
      "For each difficult argument, find the best Christian response. Craig&rsquo;s Reasonable Faith, Plantinga&rsquo;s Where the Conflict Really Lies, and Lewis&rsquo;s Mere Christianity address the most common objections with rigor and clarity.",
      "This practice builds intellectual empathy — the ability to genuinely understand the objector&rsquo;s position — which makes real conversations much more productive than prepared monologues.",
    ],
    anchor: "Acts 17:28 — For &lsquo;In him we live and move and have our being&rsquo; — quoting the poets of Athens, engaging the culture&rsquo;s own vocabulary.",
  },
  {
    number: "03",
    title: "Learning to Ask Before You Answer",
    summary:
      "The most underused apologetic skill: asking a clarifying question before giving a defense, so that you are answering the actual objection rather than a strawman of it.",
    steps: [
      "When someone raises an objection — &ldquo;the Bible is full of contradictions,&rdquo; &ldquo;Christians caused all the wars,&rdquo; &ldquo;evolution disproves God&rdquo; — resist the reflex to immediately launch a defense. Ask first: &ldquo;That&rsquo;s a real question — what&rsquo;s the specific thing that bothers you most about that?&rdquo;",
      "Listen to the actual answer. Often the stated objection is not the real one. &ldquo;The Bible is full of contradictions&rdquo; frequently means &ldquo;I was hurt by a Christian who used the Bible against me.&rdquo; Answering the textual question misses the relational wound entirely.",
      "Reflect the question back to show you heard it: &ldquo;So what you&rsquo;re really asking is... is that right?&rdquo; Objectors who feel heard are far more open to answers than objectors who feel steamrolled.",
      "Then, and only then, offer a response — and offer it as your best current thinking, not as the definitive end of the conversation. &ldquo;Here&rsquo;s how I think about that — I&rsquo;d love to know if you find that convincing or not.&rdquo;",
    ],
    anchor: "Proverbs 18:13 — If one gives an answer before he hears, it is his folly and shame.",
  },
  {
    number: "04",
    title: "The Cumulative Case",
    summary:
      "Practicing how to present not one argument but the cumulative weight of multiple independent lines of evidence — because no single argument is decisive, but the convergence is compelling.",
    steps: [
      "Memorize four or five distinct lines of evidence for Christianity: the fine-tuning of the universe, the historical evidence for the resurrection, the existence of objective moral values, the reliability of the New Testament documents, the transformation of the disciples. None of these is a knockdown proof; together they form a convergent case.",
      "Practice presenting them conversationally, not as a lecture. &ldquo;There are actually several things that made me take this seriously — can I just walk through a few of them?&rdquo; is a better opener than a systematic treatment.",
      "When one argument is countered, move to another rather than doubling down on a contested point. The cumulative case approach is resilient because it doesn&rsquo;t depend on any single argument being decisive.",
      "Acknowledge what you don&rsquo;t know. Intellectual honesty in admitting the limits of the case is itself part of the cumulative argument — it signals that you are not a propagandist but someone genuinely trying to think well.",
    ],
    anchor: "Acts 1:3 — He presented himself alive to them after his suffering by many proofs, appearing to them during forty days and speaking about the kingdom of God.",
  },
  {
    number: "05",
    title: "Answering the Problem of Evil Pastorally",
    summary:
      "Learning the difference between the philosophical problem of evil and the pastoral problem of suffering — and knowing that real conversations almost always need the second, not the first.",
    steps: [
      "The philosophical problem requires argument: why would an omnipotent, omnibenevolent God permit evil? Learn the basic theodicies — free will, soul-making, eschatological resolution — and one or two good responses to each.",
      "The pastoral problem requires presence: a friend is in the cancer ward, or their child has died. No philosophical argument is wanted or appropriate. The answer here is to show up, sit in silence, bring food, pray, and eventually — when trust is deep enough — point to the cross where God himself entered suffering.",
      "Distinguish which conversation you are in before you speak. Ask: &ldquo;Are you asking me this as a philosophical question, or are you asking because something is happening in your life?&rdquo; The answer changes everything about how to respond.",
      "Know the resources: Lewis&rsquo;s A Grief Observed is what apologetics looks like when the apologist himself is in the furnace. Keller&rsquo;s Walking with God Through Pain and Suffering is the most complete single treatment of both the philosophical and pastoral dimensions.",
    ],
    anchor: "Romans 8:18 — For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
  },
  {
    number: "06",
    title: "Studying the Resurrection Specifically",
    summary:
      "The resurrection is the load-bearing wall of Christian apologetics — if it happened, the rest follows; if it did not, nothing else matters. This practice is focused study of the historical case.",
    steps: [
      "Read Habermas and Licona&rsquo;s The Case for the Resurrection of Jesus — accessible and thorough, working only from facts accepted by critical scholars. Know the minimal facts and the alternative explanations and why they fail.",
      "Study 1 Corinthians 15:3-8 as the primary historical document: dated by most scholars to within five years of the crucifixion, listing specific named eyewitnesses including Peter, James, and Paul, with a reference to 500 witnesses &ldquo;most of whom are still alive&rdquo; — an implicit invitation to verify the claim.",
      "Learn to articulate the empty tomb plus appearances plus the conversion of the skeptics (Paul and James) as three distinct, convergent lines of evidence. Each is individually significant; together they are very difficult to explain apart from an actual resurrection.",
      "Read N.T. Wright&rsquo;s shorter version — Surprised by Hope — if the 700-page academic treatment is too daunting. The argument is the same; the presentation is accessible to a general reader.",
    ],
    anchor: "1 Corinthians 15:17 — And if Christ has not been raised, your faith is futile and you are still in your sins.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "Mere Christianity — The Most Widely Read Apologist of the Twentieth Century",
    quote:
      "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: &lsquo;I&rsquo;m ready to accept Jesus as a great moral teacher, but I don&rsquo;t accept His claim to be God.&rsquo; That is the one thing we must not say.",
    bio: "C.S. Lewis — Oxford and Cambridge don, author of the Narnia chronicles and the Space Trilogy — converted from atheism in 1931 and became the twentieth century&rsquo;s most effective popular apologist. Mere Christianity (1952), originally a series of BBC radio broadcasts during World War Two, remains the most widely read apologetic work in English. Lewis&rsquo;s genius was the combination of rigorous logical argument, disarming imagination, and the authority of a man who had been on the other side. His trilemma — Lord, liar, or lunatic — remains the most compact statement of why the &lsquo;great moral teacher&rsquo; option is not available for Jesus. The Problem of Pain addresses evil philosophically; A Grief Observed, written after his wife Joy died of cancer, addresses it existentially. Lewis is the apologist who sounds least like an apologist because he sounds most like a human being thinking.",
  },
  {
    name: "Alister McGrath",
    role: "Mere Apologetics — The Landscape of Christian Defense",
    quote:
      "Apologetics is about opening doors and windows, helping people to realize that there is more to life than they thought, and that the Christian faith addresses human questions and longings that are often suppressed or denied.",
    bio: "Alister McGrath brings a rare combination of credentials to Christian apologetics: a doctorate in molecular biophysics from Oxford, a doctorate in theology from Oxford, and decades of engagement with both scientific and theological communities. His Mere Apologetics (2011) is the clearest contemporary introduction to the field, and his longer work The Dawkins Delusion is the most careful scholarly response to the New Atheism. McGrath&rsquo;s apologetic is characteristically British in its understatement and rigor: he does not oversell the case, acknowledges genuine difficulties, and argues that Christianity is a deeply reasonable faith that commends itself to careful inquiry. His biography of C.S. Lewis and his own intellectual journey from atheism to Christian faith give him particular authority on the question of what makes Christianity intellectually credible to a scientifically literate person.",
  },
  {
    name: "Tim Keller",
    role: "The Reason for God — Belief in an Age of Skepticism",
    quote:
      "All doubts, however skeptical and cynical they may seem, are really a set of alternate beliefs. You cannot doubt Belief A except from a position of faith in Belief B.",
    bio: "Tim Keller&rsquo;s The Reason for God (2008) may be the most effective apologetic book written for twenty-first century Western skeptics. Keller spent thirty years as pastor of Redeemer Presbyterian Church in Manhattan, preaching to a congregation heavily populated with skeptics, academics, and people who had been hurt by religion — and The Reason for God is the distillation of those decades of conversation. His method is consistently to take the objection seriously, find the genuine insight it contains, and show that it actually points toward the Christian faith rather than away from it. The chapter on doubt is particularly important: Keller argues that every act of doubting requires a prior faith in something else, and that the honest skeptic should examine those prior commitments as rigorously as she examines Christianity. Keller died of pancreatic cancer in 2023, a witness to the Christian hope he spent his life defending.",
  },
  {
    name: "N.T. Wright",
    role: "The Resurrection of the Son of God — Historical Scholarship for the Defense",
    quote:
      "The bodily resurrection of Jesus constitutes the best historical explanation of the available data — not merely a theological claim but a historical conclusion reachable by ordinary historical inquiry.",
    bio: "N.T. Wright&rsquo;s The Resurrection of the Son of God (2003) is the most comprehensive historical investigation of the resurrection ever written by a major New Testament scholar. Wright brings to the question not only his technical mastery of first-century Judaism and early Christianity but also the historian&rsquo;s tools of source criticism, comparative analysis, and inference to the best explanation. His argument proceeds in two stages: first, demonstrating that in the first-century Jewish context &lsquo;resurrection&rsquo; had a very specific meaning (bodily, in the future, for all Israel at the end of the age) that no disciple would have invented for a recently crucified individual Messiah; second, showing that the combination of the empty tomb and the post-resurrection appearances, evaluated by normal historical method, is best explained by an actual bodily resurrection. Wright is not a popular apologist; he is a technical scholar making a case that withstands scholarly scrutiny.",
  },
  {
    name: "Gary Habermas",
    role: "The Case for the Resurrection — The Minimal Facts Approach",
    quote:
      "The minimal facts approach grants only those data which are strongly evidenced and which are accepted by virtually all scholars who study the subject, and then asks: what is the best explanation of these facts?",
    bio: "Gary Habermas is the world&rsquo;s leading specialist on the historicity of the resurrection, having spent over forty years reading, cataloguing, and responding to the entire scholarly literature on the subject — including the most skeptical. His minimal facts approach has become the standard framework for resurrection apologetics because it is methodologically sound: by arguing only from facts that critical scholars themselves grant, it cannot be dismissed as merely a &lsquo;faith claim.&rsquo; The four minimal facts — crucifixion, disciples&rsquo; belief in post-resurrection appearances, Paul&rsquo;s conversion, James&rsquo;s conversion — are individually well-evidenced and together constitute a formidable historical puzzle for which resurrection is the best explanation. Habermas is also notable for his pastoral work with people experiencing doubt, combining intellectual rigor with genuine compassion for the struggling believer.",
  },
  {
    name: "William Lane Craig",
    role: "Reasonable Faith — Philosophy and Apologetics at the Academic Level",
    quote:
      "The role of the Holy Spirit in apologetics is to use the apologist&rsquo;s arguments as a means by which he speaks to the hearts of men. Ultimately it is the inner witness of the Holy Spirit that assures the believer of the truth of Christianity.",
    bio: "William Lane Craig is the most academically rigorous Christian philosopher-apologist of the contemporary period. His Reasonable Faith (third edition, 2008) covers cosmological and ontological arguments for God, the resurrection, the problem of evil, the basis of moral values, and the nature of religious experience at a level that engages professional philosophy. Craig has debated leading atheists — Christopher Hitchens, Sam Harris, Lawrence Krauss, Daniel Dennett — and is widely credited by observers across the theological spectrum as the most formidable debater on these questions. His revival of the Kalam cosmological argument in contemporary philosophy of religion is his most significant academic contribution. Craig is scrupulous about the limits of argument: the arguments show that Christianity is reasonable; the Holy Spirit makes it living. He holds both convictions simultaneously and without contradiction.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Peter 3:15-16",
    text: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect, having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame.",
    reflection:
      "The command is sandwiched between two character requirements: Christ honored as holy in the heart (v.15a), and gentleness and respect toward the inquirer (v.16). Apologetics that wins arguments while failing in character fails the verse. The defense must be winsome because it is a defense of hope — and hope, visibly lived, is itself part of the argument.",
  },
  {
    reference: "Acts 17:22-23",
    text: "So Paul, standing in the midst of the Areopagus, said: &lsquo;Men of Athens, I perceive that in every way you are very religious. For as I passed along and observed the objects of your worship, I found also an altar with this inscription: &ldquo;To the unknown god.&rdquo; What therefore you worship as unknown, this I proclaim to you.&rsquo;",
    reflection:
      "Paul&rsquo;s address to the Areopagus is the Bible&rsquo;s fullest example of contextualized apologetics. He begins where his audience is — with their own religious instinct and their own poets — and works from there to the resurrection. He does not quote Hebrew Scripture to a Greek audience; he engages their own framework and shows how the gospel fulfills what it is reaching for. The apologist learns her culture before she addresses it.",
  },
  {
    reference: "Isaiah 1:18",
    text: "&lsquo;Come now, let us reason together, says the LORD: though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool.&rsquo;",
    reflection:
      "God himself is the first apologist: he invites Israel to reasoning, not mere submission. The invitation to reason together is paired immediately with grace — sin as scarlet becoming white as snow. Apologetics rightly practiced is the church&rsquo;s extension of this invitation: come and think this through honestly, and find that the God you are reasoning toward has already moved toward you.",
  },
  {
    reference: "Jude 3",
    text: "Beloved, although I was very eager to write to you about our common salvation, I found it necessary to write appealing to you to contend earnestly for the faith that was once for all delivered to the saints.",
    reflection:
      "The faith was &ldquo;once for all delivered&rdquo; — it is a deposit, a given, a thing received rather than invented. To contend for it is not to improve on it but to defend what was entrusted. Jude&rsquo;s word for &lsquo;contend&rsquo; (epagonizesthai) is an athletic metaphor — full-body effort. Apologetics is not casual; it is earnest engagement on behalf of a truth that matters more than the outcome of the debate.",
  },
  {
    reference: "Romans 1:20",
    text: "For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse.",
    reflection:
      "General revelation is the foundation of natural theology: the creation itself is an argument for its Creator. Paul is not saying that creation proves the Trinity; he is saying it communicates eternal power and divine nature clearly enough that non-belief requires active suppression. Apologetics from creation — the fine-tuning argument, the cosmological argument — works with what God has already written in the cosmos.",
  },
  {
    reference: "2 Corinthians 10:5",
    text: "We destroy arguments and every lofty opinion raised against the knowledge of God, and take every thought captive to obey Christ.",
    reflection:
      "Paul uses military language — destroy, captive — for intellectual engagement. The weapons of apologetics are not worldly (v.4) but are divinely powerful to demolish strongholds: not people, but the arguments and pretensions that make the knowledge of God inaccessible. The goal is not to humiliate the opponent but to clear the intellectual ground so that what has been suppressed (Romans 1:18) can be seen again.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "BkGilNVoago", title: "Why I Am a Christian — C.S. Lewis and Mere Christianity" },
  { videoId: "A6SDRQMPMpQ", title: "The Resurrection: Historical Evidence" },
  { videoId: "GTiWgEgr_Dg", title: "The Problem of Evil — Tim Keller" },
  { videoId: "NN8K7zVRFpk", title: "Arguments for God&rsquo;s Existence" },
  { videoId: "DcXNLZIOalI", title: "Is Faith Reasonable? Apologetics for the Skeptic" },
  { videoId: "o7M0xqMyjBE", title: "N.T. Wright on the Resurrection as History" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianApologeticsPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<APLEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [question, setQuestion] = useState("");
  const [responseGiven, setResponseGiven] = useState("");
  const [stillLearning, setStillLearning] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as APLEntry[]);
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
    if (!question.trim() || !responseGiven.trim()) return;
    const entry: APLEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString(),
      question: question.trim(),
      responseGiven: responseGiven.trim(),
      stillLearning: stillLearning.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setQuestion("");
    setResponseGiven("");
    setStillLearning("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? BLUE : BORDER}`,
    background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
    color: active ? BLUE : MUTED,
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
    color: BLUE,
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
                color: BLUE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Defending the Faith
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Always Be Ready: Christian Apologetics
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Greek word{" "}
              <em style={{ color: TEXT }}>apologia</em> is a lawyer&rsquo;s defense — a reasoned
              account given before a court. Peter commands every Christian to have one ready for
              anyone who asks about the hope they carry. This guide explores the arguments for
              God&rsquo;s existence, the evidence for the resurrection, the problem of suffering,
              the reliability of the New Testament, and the habits of mind that make a thoughtful
              Christian defense possible.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;But in your hearts honor Christ the Lord as holy, always being prepared to
                make a defense to anyone who asks you for a reason for the hope that is in you; yet
                do it with gentleness and respect.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>1 Peter 3:15</p>
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
                Apologetics begins not with arguments but with a disposition: the willingness to
                take the hardest questions seriously and to think carefully about the answers.
                These eight studies move from the mandate of 1 Peter 3:15 to the arguments for
                God&rsquo;s existence, the hardest objection, the historical evidence, and the
                theological foundations of the discipline.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: BLUE,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: 14,
                      lineHeight: 1.35,
                    }}
                  >
                    {section.title}
                  </h2>
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
                        background: "rgba(59, 130, 246, 0.07)",
                        border: `1px solid rgba(59, 130, 246, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The goal is not winning but opening
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Apologetics done well does not close conversations with knockdown arguments; it
                  opens them — clears the intellectual debris so that the gospel can be heard
                  honestly. The apologist is not the closer; the Holy Spirit is. Pursue
                  intellectual rigor and personal humility in equal measure. Go deeper in{" "}
                  <Link
                    href="/christian-evangelism"
                    style={{ color: BLUE, textDecoration: "underline" }}
                  >
                    Christian Evangelism
                  </Link>{" "}
                  for the gospel proclamation that apologetics serves, or explore the theological
                  foundations in{" "}
                  <Link
                    href="/theology-of-grace"
                    style={{ color: BLUE, textDecoration: "underline" }}
                  >
                    Theology of Grace
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
                Apologetics is a skill, and skills require deliberate practice. These six
                disciplines build the habits of mind that make thoughtful defense possible — not in
                a classroom but in ordinary conversations. The Journal tab is built to accompany
                practices one and three.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 14,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        color: BLUE,
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
                  >
                    {practice.summary}
                  </p>
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
                      color: BLUE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  What makes apologetics fail
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Apologetics fails when it becomes a performance — when the goal shifts from
                  helping the person think to winning the argument. It fails when the apologist
                  speaks before she listens. It fails when character does not match the claim: the
                  person who defends the love of God with contempt for the questioner has already
                  lost. The disciplines above are as much character formation as intellectual
                  training — which is why Peter puts &ldquo;honor Christ as holy in your hearts&rdquo;
                  before &ldquo;be prepared to give a defense.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six thinkers who have shaped the landscape of Christian apologetics — from an
                Oxford don who came in from the cold to a New Testament scholar with 700 pages of
                historical argument.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: BLUE,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {voice.role}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(59, 130, 246, 0.06)",
                      borderLeft: `3px solid ${BLUE}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${voice.quote}&rdquo;` }}
                  />
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
                Six passages that ground and orient the apologetic calling — from Peter&rsquo;s
                mandate to Paul&rsquo;s example in Athens to the military language of 2 Corinthians
                10. Memorize, meditate, and pray.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: BLUE,
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
                    dangerouslySetInnerHTML={{ __html: scripture.text }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Praying the apologist&rsquo;s Scripture
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into prayer: adoration (&ldquo;Lord, your invisible attributes
                  have been clearly perceived since creation — you are not hidden&rdquo;),
                  confession (&ldquo;I have been unprepared, or I have been prepared but
                  ungentle&rdquo;), and petition (&ldquo;give me one conversation this week where I
                  can give a reason for hope with gentleness and respect&rdquo;). The apologist who
                  does not pray is a lawyer who has forgotten who the judge is.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Track the hard questions you encounter and how you responded. Three fields: the
                question asked, your response, and what you&rsquo;re still learning. Entries are
                stored privately in your browser. No one sees this but you.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Log a hard question
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="apl-question" style={labelStyle}>
                    The question you were asked
                  </label>
                  <textarea
                    id="apl-question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="What did they ask? Be specific — the precise question matters more than the general topic."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="apl-response" style={labelStyle}>
                    Your response
                  </label>
                  <textarea
                    id="apl-response"
                    value={responseGiven}
                    onChange={(e) => setResponseGiven(e.target.value)}
                    placeholder="What did you say? How did they receive it? Be honest — including what did not land."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="apl-still" style={labelStyle}>
                    What you&rsquo;re still learning
                  </label>
                  <textarea
                    id="apl-still"
                    value={stillLearning}
                    onChange={(e) => setStillLearning(e.target.value)}
                    placeholder="What gap did the conversation expose? What will you study before you face this question again?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!question.trim() || !responseGiven.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !question.trim() || !responseGiven.trim() ? BORDER : BLUE,
                    color: !question.trim() || !responseGiven.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !question.trim() || !responseGiven.trim() ? "not-allowed" : "pointer",
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
                  <div
                    style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}
                  >
                    <p
                      style={{
                        color: MUTED,
                        lineHeight: 1.7,
                        fontSize: "0.92rem",
                        marginBottom: 6,
                      }}
                    >
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Log the next hard question you are asked. The practice of writing it down —
                      your response and what you still need to learn — turns every difficult
                      conversation into a study guide.
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
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label="Delete entry"
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
                              color: BLUE,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The question
                          </span>
                          <p
                            style={{
                              color: TEXT,
                              lineHeight: 1.65,
                              fontSize: "0.92rem",
                              fontStyle: "italic",
                            }}
                          >
                            {entry.question}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.stillLearning ? 10 : 0 }}>
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
                            Response given
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.responseGiven}
                          </p>
                        </div>

                        {entry.stillLearning && (
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
                              Still learning
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.stillLearning}
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
                Teaching to watch alongside the Theology tab — on the arguments for God, the
                evidence for the resurrection, the problem of evil, and what makes Christian faith
                reasonable.
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
              Apologetics in service of evangelism
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Apologetics is not an end in itself. The goal is not to win debates but to remove
              obstacles so that the gospel can be heard. Every argument is in service of the
              announcement: Christ died for our sins, was buried, and rose on the third day.
              When objections are cleared, that announcement can land. The apologist who forgets
              this has mistaken the scaffolding for the building.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Go deeper:{" "}
              <Link
                href="/christian-evangelism"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Christian Evangelism
              </Link>{" "}
              for the gospel itself,{" "}
              <Link
                href="/christian-kindness"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Christian Kindness
              </Link>{" "}
              for the relational foundation that makes apologetic conversations possible, or{" "}
              <Link
                href="/fruit-of-the-spirit"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Fruit of the Spirit
              </Link>{" "}
              for the character that the best apologists embody.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
