"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Problem of Suffering",
  "The Heavenly Wager",
  "The Failure of Friends",
  "Job Speaks Honestly",
  "God Answers from the Whirlwind",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Problem of Suffering",
    heading: "The Problem of Suffering",
    reference: "Job 1",
    paragraphs: [
      "The Book of Job belongs to the wisdom literature of the Old Testament, alongside Proverbs and Ecclesiastes, yet it stands apart as the boldest of them all. Where much wisdom writing offers tidy maxims for living well, Job plunges headlong into the deepest and most disturbing question a believer can ask: why do the innocent suffer? It refuses every easy answer, and in refusing them it becomes one of the most honest books ever written.",
      "From the opening verses we are told plainly what kind of man Job is. He is described as &ldquo;blameless and upright, one who feared God and turned away from evil&rdquo; (1:1). This matters enormously, because it removes the most convenient explanation for his calamity before the story even begins. Job is not a secret sinner reaping what he has sown. His suffering cannot be traced to hidden guilt. The reader is left, like Job himself, staring at undeserved anguish with no obvious cause.",
      "In doing so, the book mounts a sustained challenge to what is sometimes called retribution theology &mdash; the neat assumption that the good always prosper and the wicked always suffer in this life. This is the framework much of wisdom literature can seem to teach, and it is the framework Job&rsquo;s friends cling to. But Job&rsquo;s very existence as a blameless sufferer detonates that framework. The world, the book insists, is not so simply ordered that we can read a person&rsquo;s righteousness off the size of their misfortune.",
      "This is not to say that Proverbs is wrong, but that its proverbs describe general patterns, not iron laws. Job stands as the great exception that exposes the danger of turning wisdom&rsquo;s observations into a mechanical formula. Reality is more tangled, and God&rsquo;s governance of the world more mysterious, than the comfortable arithmetic of reward and punishment allows.",
      "The genius of Job is that it does not resolve this tension cheaply. It will not tell us, in the end, exactly why Job suffered &mdash; not in terms Job himself could grasp. Instead it dignifies the question, lets it be asked in all its rawness, and insists that faith must be able to survive the absence of a satisfying explanation. The book honors the sufferer who keeps wrestling rather than the bystander who keeps explaining.",
      "For readers in every age, this is why Job endures. Anyone who has watched the innocent suffer &mdash; a child stricken with illness, a faithful person crushed by loss &mdash; knows that pious formulas ring hollow at the graveside. Job meets us there, in the place where the formulas fail. It does not hand us a solution to the problem of suffering, but it gives us something perhaps more valuable: permission to bring our deepest anguish honestly before God.",
      "And so the book opens not with answers but with a man who has everything and is about to lose it all, a man whose integrity is beyond question. The stage is set for a drama that will strip away every false comfort and force both Job and the reader to ask what faith really rests upon when every visible blessing has been taken away.",
    ],
  },
  {
    id: "The Heavenly Wager",
    heading: "The Heavenly Wager",
    reference: "Job 1&ndash;2",
    paragraphs: [
      "The prologue of Job (chapters 1&ndash;2) pulls back a curtain the human characters never see. We are shown a heavenly council where &ldquo;the satan&rdquo; &mdash; a title meaning the accuser or adversary &mdash; appears before God. This is not yet the fully developed figure of later theology, but an accuser whose role is to test and to challenge. When God commends the blameless Job, the accuser sneers that Job&rsquo;s devotion is merely self-interest.",
      "The challenge is pointed: &ldquo;Does Job fear God for no reason?&rdquo; (1:9). Strip away the blessings, the accuser argues, and Job&rsquo;s piety will collapse into cursing. The wager, then, is not really about Job alone; it is about whether genuine, disinterested faith is even possible &mdash; whether anyone loves God for God&rsquo;s own sake rather than for the gifts God gives. God permits the testing, and the floodgates of calamity open.",
      "What follows is devastating in its speed. In a single day messengers arrive in relentless succession: Job&rsquo;s oxen and donkeys are seized, his sheep consumed, his camels carried off, his servants slain. Then the worst blow of all &mdash; his sons and daughters are killed when the house collapses upon them. Job loses his wealth and his children in the space of a few verses. In the second round, his health is taken too, as he is struck with loathsome sores from head to foot.",
      "And yet the prologue records a stunning verdict on Job&rsquo;s response: &ldquo;In all this Job did not sin or charge God with wrong&rdquo; (1:22). He tears his robe, falls to the ground, and worships, saying, &ldquo;The Lord gave, and the Lord has taken away; blessed be the name of the Lord.&rdquo; The accuser&rsquo;s thesis is, at least for now, refuted. Here is a man who clings to God even when every reason to cling has been stripped away.",
      "The most profound feature of this whole scene is what Job himself never learns. He is never told about the heavenly council, never informed of the wager, never given the explanation the reader has been given. The dramatic irony is total and deliberate: we know what Job does not. We watch him grope in darkness for a reason, while we hold the very reason in our hands &mdash; and even our reason is not a reason Job could have accepted as just.",
      "This gap between the reader&rsquo;s knowledge and Job&rsquo;s ignorance is the theological heart of the book. It dramatizes the situation of every sufferer. From the ground, suffering looks senseless; there is a larger frame we cannot see. The book does not promise that we will ever be shown that frame in this life. It only insists that the absence of an explanation does not mean the absence of meaning, and that faith may be called to trust precisely where it cannot see.",
      "It is worth resisting the temptation to make the wager into a comfortable doctrine, as though all suffering were a cosmic test with a guaranteed happy ending. The book is far more sober than that. The prologue establishes that Job&rsquo;s agony is real, undeserved, and permitted by God for purposes Job is never granted to understand &mdash; and it leaves us to sit with the weight of that before the long human dialogue even begins.",
    ],
  },
  {
    id: "The Failure of Friends",
    heading: "The Failure of Friends",
    reference: "Job 4&ndash;31",
    paragraphs: [
      "When Job&rsquo;s three friends &mdash; Eliphaz, Bildad, and Zophar &mdash; hear of his troubles, they come to console him, and their first act is genuinely admirable. They sit with him on the ground in silence for seven days and seven nights, &ldquo;for they saw that his suffering was very great&rdquo; (2:13). In that silence they are perfect comforters. It is only when they open their mouths that everything goes wrong.",
      "The long poetic dialogues that follow form the bulk of the book, cycling through speeches and replies. The friends&rsquo; argument is essentially one note played in ever-harsher tones: Job is suffering, suffering is the wages of sin, therefore Job must have sinned. Eliphaz appeals to a mysterious vision, Bildad to the wisdom of the ancestors, Zophar to blunt common sense &mdash; but all three reason from the same rigid premise of strict retribution.",
      "At first their accusations are veiled and almost gentle, hinting that surely Job has some fault to confess. But as Job refuses to admit guilt he does not have, their patience curdles into cruelty. They begin to invent sins for him, accusing him of oppressing the poor, stripping the naked of their clothing, and turning away widows. Their theology requires him to be guilty, so they manufacture the guilt their theology demands.",
      "Herein lies the friends&rsquo; deepest error. They represent a mechanical, mathematical theology in which God is reduced to a vending machine of justice: insert righteousness, receive blessing; insert sin, receive suffering. It is a system that protects them as much as it indicts Job, for it assures them that their own comfort proves their own goodness. To defend the system, they are willing to crush the suffering man in front of them.",
      "What makes their failure so instructive is that much of what they say is, in isolation, perfectly orthodox. They affirm God&rsquo;s justice, God&rsquo;s power, the seriousness of sin. The problem is not that their statements are always false but that they are misapplied &mdash; wielded as weapons against an innocent man, used to explain a suffering they do not understand. Truth spoken without love or wisdom becomes a lie about the person it is aimed at.",
      "The verdict of the book on all this is delivered by God himself in the epilogue, and it is shattering for the friends. God says to Eliphaz, &ldquo;My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has&rdquo; (42:7). The men who defended God so zealously are the ones who misrepresented him, while the man who argued and protested is the one commended. Their rigid orthodoxy is exposed as a failure to know the God they claimed to defend.",
      "For readers, the friends are a sobering mirror. It is fearfully easy, when confronted with another&rsquo;s pain, to reach for explanations that protect our own theology and our own sense of security. Job warns us that the comforter&rsquo;s first duty is not to diagnose but to draw near, not to justify God&rsquo;s ways but to weep with those who weep. Sometimes the most faithful thing to say in the presence of suffering is nothing at all.",
    ],
  },
  {
    id: "Job Speaks Honestly",
    heading: "Job Speaks Honestly",
    reference: "Job 3&ndash;31",
    paragraphs: [
      "If the friends represent the failure of pious explanation, Job represents the strange faithfulness of honest protest. From the moment he opens his mouth in chapter 3 to curse the day of his birth, Job refuses to play the role of the serene saint. He will not pretend. He laments bitterly, cries out against his pain, and pours out his anguish without the slightest attempt to make it sound respectable.",
      "Yet &mdash; and this is the crucial point &mdash; Job never curses God, which is exactly what the accuser predicted he would do. He directs his complaint to God rather than away from him. His bitterness is the bitterness of a man who still believes God is there to be addressed. He demands an audience, longs to lay his case before the Almighty, and insists on his innocence even when everyone around him urges him to confess crimes he never committed.",
      "This is the book&rsquo;s quiet vindication of honest lament over pious platitude. Job will not flatter God with comfortable falsehoods, will not say that he understands when he does not, will not confess sins he has not committed merely to fit his friends&rsquo; theology. His raw complaints are, paradoxically, an act of faith &mdash; for only someone who truly believes God is just would be so scandalized by what looks like injustice.",
      "Out of the depths of this struggle come some of the most luminous words in all of Scripture. In the midst of his protest, Job cries out for someone to stand between himself and God, a mediator or arbiter who could lay a hand on them both. He longs for a redeemer, a vindicator who will take up his cause when he himself is gone &mdash; a longing that the rest of Scripture will answer in ways Job could scarcely have imagined.",
      "It is in this longing that Job utters his most famous confession: &ldquo;I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God&rdquo; (19:25&ndash;26). Wrenched from a man who has lost everything and can see no way forward, these words are a stunning leap of trust &mdash; a hope that reaches beyond present suffering, and even beyond death, to a vindication only God can give.",
      "The book thus dignifies a kind of faith that institutional religion often distrusts: faith that argues, that questions, that brings its grievances directly to God rather than burying them under forced cheerfulness. The Psalms of lament breathe the same air. God, it turns out, can bear the weight of our honest anger far better than he can abide our dishonest piety. Job teaches that we may come to God with empty hands and a breaking heart and still be heard.",
      "By the end of the human dialogue, Job has exhausted his words. He has defended his integrity at length, demanded his day in court, and fallen silent waiting for an answer. He has not solved the problem of his suffering, and he has not abandoned God. He simply stands there, wounded and waiting &mdash; and into that waiting silence, at last, God himself will speak.",
    ],
  },
  {
    id: "God Answers from the Whirlwind",
    heading: "God Answers from the Whirlwind",
    reference: "Job 38&ndash;42",
    paragraphs: [
      "When God finally speaks, he does so &ldquo;out of the whirlwind&rdquo; (38:1), and the answer is nothing like what we, or Job, expect. God does not explain the suffering. He never mentions the heavenly wager, never tells Job about the accuser, never offers the reason the reader has held all along. The question that has driven the entire book &mdash; why? &mdash; goes pointedly unanswered. Instead, God answers a question with questions.",
      "What follows is one of the most magnificent poems in world literature: a torrent of questions about the created order. &ldquo;Where were you when I laid the foundation of the earth?&rdquo; (38:4). God leads Job on a dizzying tour of creation &mdash; the boundaries of the sea, the storehouses of snow, the path of the lightning, the birth of the dawn. Job is confronted with the sheer vastness and intricacy of a world he did not make and cannot govern.",
      "From the cosmos God turns to the wild creatures: the lioness hunting prey, the mountain goats giving birth, the wild donkey scorning the city, the ostrich, the war horse, the soaring hawk. He climaxes with the awesome beasts Behemoth and Leviathan, untamable monsters that no man can subdue. The point of this magnificent parade is not to humiliate Job but to relocate him &mdash; to set his small life within a creation of staggering, untamed majesty that runs by God&rsquo;s wisdom, not man&rsquo;s.",
      "The effect on Job is total. He does not receive an argument he can refute; he receives a vision of God that silences every argument. &ldquo;I had heard of you by the hearing of the ear, but now my eye sees you; therefore I despise myself, and repent in dust and ashes&rdquo; (42:5&ndash;6). His repentance is not the confession of secret sins his friends demanded. It is the response of a creature who has met the Creator face to face and found his questions dissolved, not by an answer, but by an encounter.",
      "Here lies the book&rsquo;s deepest teaching. What Job needed, it turns out, was not an explanation but God himself. The whirlwind speeches do not solve the intellectual problem of suffering; they transform the sufferer. Job learns that he can trust the One who governs Behemoth and Leviathan, who set the stars in their courses, even when he cannot understand a single thing about his own pain. Faith comes to rest not on a reason but on the trustworthiness of God.",
      "This is a hard and bracing comfort, but a real one. The book refuses to pretend that suffering makes sense from where we stand. What it offers instead is the assurance that the world is held by a God of unfathomable wisdom and power, and that this God is not absent or indifferent but speaks, draws near, and can be trusted. The answer to Job&rsquo;s suffering is not a proposition but a Person.",
      "The epilogue records that God restored Job&rsquo;s fortunes, giving him again wealth and children and long life. But we must be careful here. This restoration is not presented as a simple reward that proves the friends right after all, as though righteousness had merely been paid out on a delay. It is grace, freely given, not wages earned. To read it as a tidy formula &mdash; endure suffering and get double back &mdash; would be to fall back into the very retribution theology the whole book has dismantled. Job is restored not because he passed a test for a prize, but because the God who wounds is also the God who heals, and his final word over his servant is mercy.",
    ],
  },
];

const videoItems = [
  { videoId: "xQwnH8th_fs", title: "BibleProject - Book of Job Overview" },
  { videoId: "GswSg2ohqmA", title: "The Book of Job and the Problem of Suffering" },
  { videoId: "0Mc0qkOMbHU", title: "God Answers Job from the Whirlwind" },
];

export default function ChristianBookOfJobGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Job
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Wisdom literature&rsquo;s boldest wrestling with innocent suffering &mdash; the heavenly wager, the failure of Job&rsquo;s friends, his honest lament and longing for a Redeemer, the whirlwind speeches of God, and what faith can rest upon when no explanation is given.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Job through visual teaching on the structure of the book, the problem of innocent suffering, and God&rsquo;s answer from the whirlwind.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Trust in the Mystery</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Job does not hand us a solution to suffering; it gives us something deeper &mdash; permission to lament honestly, and a vision of a God whose wisdom and power can be trusted even when no explanation is given. Faith here learns to rest not on a reason, but on the One who answers from the whirlwind.
          </p>
        </div>
      </main>
    </div>
  );
}
