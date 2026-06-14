"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Caught Up to Paradise",
  "A Thorn Was Given Me",
  "My Grace Is Sufficient",
  "Power Made Perfect in Weakness",
  "Spent for Your Souls",
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
    id: "Caught Up to Paradise",
    heading: "Caught Up to Paradise",
    reference: "2 Corinthians 12:1&ndash;6",
    paragraphs: [
      "Paul opens the twelfth chapter of his second letter to the Corinthians with evident reluctance. &ldquo;I must go on boasting,&rdquo; he says. &ldquo;Though there is nothing to be gained by it, I will go on to visions and revelations of the Lord&rdquo; (12:1). The whole stretch of argument that runs through chapters ten through thirteen is a kind of foolishness Paul has been driven to by the so-called super-apostles who had wormed their way into the Corinthian church, dazzling them with their credentials and their rhetoric. To defend the gospel he preached, Paul reluctantly takes up their game, but he plays it in a way that turns it inside out, boasting at last not in his strength but in his weakness.",
      "He tells of an experience fourteen years past, speaking of it with such modesty that he describes it in the third person: &ldquo;I know a man in Christ who fourteen years ago was caught up to the third heaven&mdash;whether in the body or out of the body I do not know, God knows&rdquo; (12:2). Twice he confesses his ignorance of the manner of it. He did not engineer the experience or summon it; he was caught up, seized, taken. The passive voice is the point. Whatever happened, happened to him, and the God who did it remains the only one who fully understands it.",
      "&ldquo;And I know that this man was caught up into paradise&mdash;whether in the body or out of the body I do not know, God knows&mdash;and he heard things that cannot be told, which man may not utter&rdquo; (12:3&ndash;4). Paul stood, for a moment, at the threshold of glory and heard the speech of heaven. Yet the most striking thing is what he does not do: he does not describe it. He brings back no travelogue of the heavenly places, no catalogue of secrets. The words he heard were &ldquo;inexpressible&rdquo; and not lawful for a man to repeat. The revelation was real, but it was not given to feed his vanity or to be turned into a trophy.",
      "This is a stinging rebuke to a culture, ancient and modern alike, that prizes spiritual experience as a mark of status. The false apostles surely boasted of their visions. Paul has a vision that outstrips them all, and he buries it under fourteen years of silence and then refuses to recount its content. &ldquo;On behalf of this man I will boast,&rdquo; he says, &ldquo;but on my own behalf I will not boast, except of my weaknesses&rdquo; (12:5). The man caught up to paradise and the man writing the letter are the same Paul, yet he will only claim the experience at arm&rsquo;s length, lest anyone think more of him than is warranted.",
      "Paul refuses to trade on his highest moment because he knows the human heart too well. &ldquo;Though if I should wish to boast, I would not be a fool, for I would be speaking the truth&rdquo; (12:6). He could tell the whole story and every word would be accurate. But he holds back &ldquo;so that no one may think more of me than he sees in me or hears from me.&rdquo; The measure of an apostle, Paul insists, is not the splendor of his private experiences but the visible shape of his life and the truth of his message. For us the passage cuts against the grain: we are tempted to measure spiritual life by its peak experiences, but Paul, who had the greatest mountaintop of all, would not build his identity there. The third heaven was a gift, not a credential, and the Christian who has truly tasted heaven has the least need to advertise it.",
    ],
  },
  {
    id: "A Thorn Was Given Me",
    heading: "A Thorn Was Given Me",
    reference: "2 Corinthians 12:7&ndash;8",
    paragraphs: [
      "Immediately after recounting the surpassing greatness of the revelations, Paul turns to their shadow. &ldquo;So to keep me from becoming conceited because of the surpassing greatness of the revelations, a thorn was given me in the flesh, a messenger of Satan to harass me, to keep me from becoming conceited&rdquo; (12:7). The danger of great spiritual privilege is great spiritual pride, and God in his wisdom set a counterweight against it. The same verse names the purpose twice, framing the thorn on both sides with the words &ldquo;to keep me from becoming conceited.&rdquo; The repetition is deliberate; Paul wants us to see that the thorn was not random misfortune but a measured mercy.",
      "What was the thorn? Paul never says, and the silence has provoked centuries of guessing&mdash;an eye disease, recurring fever, a speech impediment, chronic pain, fierce opposition, sexual temptation, even a particular adversary. The reticence is providential. Had Paul named a specific ailment, we might think the passage applied only to those who shared it. Because he leaves it open, the thorn becomes large enough to hold every reader&rsquo;s affliction. Whatever your own thorn is&mdash;the body that fails, the prayer unanswered, the sorrow that will not lift&mdash;Paul&rsquo;s words were written with room for it.",
      "The language he chooses is striking in its tension. The thorn was &ldquo;given&rdquo;&mdash;a word that elsewhere describes the giving of grace and gifts&mdash;yet it was also &ldquo;a messenger of Satan&rdquo; sent &ldquo;to harass&rdquo; him, the verb suggesting a buffeting, a repeated striking blow. Here, as in the book of Job, we glimpse the mystery by which God overrules even the malice of the enemy. Satan meant the thorn for harm; God meant it for humility. The very instrument of the adversary became, in the hands of God, an instrument of grace. What Satan intended to crush Paul, God intended to keep him from a far deadlier fall.",
      "&ldquo;Three times I pleaded with the Lord about this, that it should leave me&rdquo; (12:8). Paul was no stoic who merely gritted his teeth. He prayed, earnestly and repeatedly, that the thorn would be taken away. The three-fold petition recalls another garden, where the Lord himself prayed three times that the cup might pass. There is nothing unspiritual about asking God to remove our suffering; Paul asked, and so may we. Faith does not forbid the prayer for deliverance. It is right to bring our pain to God and to ask plainly for relief.",
      "Yet notice that Paul prayed to &ldquo;the Lord&rdquo;&mdash;the risen Christ&mdash;about a messenger of Satan. He did not wrestle the demon directly or try to command the thorn away by his own authority. He took the matter to the throne. This is the deep instinct of faith: not to fixate on the affliction or the enemy behind it, but to carry it to the only one who governs both. Paul understood that whatever Satan was permitted to do, it was the Lord who held the final word over whether the thorn stayed or went.",
      "We are not told that Paul prayed wrongly, or with too little faith, or that he should have claimed his healing and commanded the thorn to flee. The text honors his asking. But it also prepares us for an answer he did not expect&mdash;an answer that would not remove the thorn but transform its meaning. Sometimes the most faithful prayer is the one God answers with a holy no, because he has something better in view than the relief we begged for.",
    ],
  },
  {
    id: "My Grace Is Sufficient",
    heading: "My Grace Is Sufficient",
    reference: "2 Corinthians 12:9a",
    paragraphs: [
      "The answer came, but not in the shape Paul sought. &ldquo;But he said to me, &lsquo;My grace is sufficient for you, for my power is made perfect in weakness&rsquo;&rdquo; (12:9). The thorn was not removed. Instead the Lord gave Paul a word, and that word has steadied more sufferers than any miracle of removal ever could. God did not change Paul&rsquo;s circumstances; he changed the meaning of them. He did not lift the burden; he promised the grace to carry it. This is one of the great turning points of Scripture, the place where unanswered prayer becomes a deeper kind of answer.",
      "&ldquo;My grace is sufficient for you.&rdquo; The tense matters: it is a settled, standing reality. Grace is not a future shipment that may or may not arrive in time; it is already enough, here and now, for this very thorn. Sufficient means it covers the need completely&mdash;not barely, not with a margin of anxiety, but fully adequate to the weight. Whatever the thorn costs Paul, the grace of Christ is calibrated to exceed it. The sufficiency is not measured by the size of the trial but by the inexhaustible riches of the one who supplies it.",
      "Observe too that the word is personal: &ldquo;sufficient for you.&rdquo; The Lord does not hand Paul a general principle to apply at a distance. He speaks to him by name, into his particular pain. Grace is not an abstraction floating above our troubles; it is the living favor of a present Christ who knows exactly where the thorn pierces. The same Lord who was caught up with Paul to paradise now stoops to meet him in the place of harassment, and what he gives there is nothing less than himself.",
      "There is a profound mercy in the fact that God left the thorn in place. Had he removed it, Paul would have learned that God answers prayer by changing circumstances&mdash;a true but shallow lesson. By leaving it, God taught Paul something deeper: that the presence of Christ is better than the absence of pain. The thorn became the very channel through which Paul came to know a sufficiency he would otherwise have missed. The unanswered prayer was the doorway to a greater gift than the one he had requested.",
      "This is the answer for every believer who has prayed and prayed and seen no change. The silence over the thorn is not the silence of a God who does not care or cannot act. It may be the considered reply of a God who intends to give you himself in the affliction rather than merely take the affliction away. &ldquo;My grace is sufficient&rdquo; is not a consolation prize handed out when the real blessing is withheld. It is the real blessing&mdash;the discovery that Christ is enough, and that there is no place so dark that his grace does not reach further down.",
      "Many saints across the centuries have found that the verse they leaned on hardest was not a promise of escape but this promise of sufficiency. It does not say the thorn will not hurt, or that the night will be short. It says that in the hurting and through the long night, grace will be there&mdash;present, personal, and entirely enough. The Corinthians prized power and triumph; Paul shows them a Lord whose answer to suffering is not always rescue, but always, unfailingly, sufficient grace.",
    ],
  },
  {
    id: "Power Made Perfect in Weakness",
    heading: "Power Made Perfect in Weakness",
    reference: "2 Corinthians 12:9b&ndash;10",
    paragraphs: [
      "The second half of the Lord&rsquo;s answer overturns the whole logic of the super-apostles: &ldquo;for my power is made perfect in weakness&rdquo; (12:9). This is the great paradox at the heart of the passage. Power and weakness are usually opposites; here they are partners. Divine strength does not merely tolerate human frailty&mdash;it is brought to its full expression precisely in and through it. The word translated &ldquo;made perfect&rdquo; means brought to completion, fully accomplished. Weakness is not the obstacle to God&rsquo;s power; under grace it becomes the very stage on which that power is most clearly displayed.",
      "Paul seizes this truth and runs to its furthest conclusion. &ldquo;Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me&rdquo; (12:9). The word rendered &ldquo;rest upon&rdquo; pictures something coming to dwell over him like a tent, an echo of the glory-cloud that overshadowed the tabernacle. Paul welcomes his weakness because it is the place where the power of Christ pitches its tent. He no longer regards his frailty as an embarrassment to be hidden but as the canopy beneath which the strength of Christ visibly dwells. What he once would have concealed, he now gladly displays.",
      "&ldquo;For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities&rdquo; (12:10). The list is no abstraction. Paul knew floggings, shipwrecks, hunger, sleepless nights, and the daily pressure of anxiety for the churches&mdash;he had catalogued them in the previous chapter. Now he says he is content with them, even pleased, &ldquo;for the sake of Christ.&rdquo; Contentment here is not grim resignation but a settled, even glad, acceptance, because Paul has seen what these things accomplish. They are the soil in which the power of Christ grows visible.",
      "&ldquo;For when I am weak, then I am strong&rdquo; (12:10). The sentence is a paradox sharp enough to wake any reader. Paul does not say that weakness is itself strength, nor that he should seek weakness for its own sake. He says that in the very moment his own resources fail, the strength of another takes over&mdash;and that strength is greater than anything he possessed. The end of self-sufficiency is the beginning of Christ-sufficiency. As long as Paul felt strong, the power that worked through him could be mistaken for his own. In his weakness there can be no such mistake; the surpassing power belongs unmistakably to God.",
      "This overturns everything the false teachers prized. They boasted in strength, eloquence, and impressive presence; Paul boasts in the opposite, because he has learned where the power of Christ truly rests. The gospel itself is shaped this way&mdash;a crucified Savior, weakness on a cross becoming the power of God for salvation. The minister who would carry that message must be conformed to its pattern, content to be weak so that the treasure may plainly be seen to be in jars of clay and the surpassing power may belong to God and not to us.",
      "For the believer this is liberating beyond measure. We need not hide our limitations, pretend a competence we lack, or despair when our strength gives out. The places where we are weakest are the places most fitted for the power of Christ to rest. This does not glamorize suffering or pretend that thorns do not hurt. It promises something better: that the God who would not remove Paul&rsquo;s thorn will meet us in our own, and that his strength is never more at home than where ours has run out.",
    ],
  },
  {
    id: "Spent for Your Souls",
    heading: "Spent for Your Souls",
    reference: "2 Corinthians 12:11&ndash;21",
    paragraphs: [
      "Having made his point, Paul drops the mask of boasting with something like relief. &ldquo;I have been a fool! You forced me to it, for I ought to have been commended by you&rdquo; (12:11). The whole performance pained him; he undertook it only because the Corinthians had failed to defend him and had been swayed by his rivals. &ldquo;For I was not at all inferior to these super-apostles, even though I am nothing.&rdquo; In a single breath he claims he is in no way behind the most exalted of them and confesses that he is nothing. Both are true: nothing in himself, lacking nothing in Christ.",
      "He points to the evidence that should have settled the matter long ago: &ldquo;The signs of a true apostle were performed among you with utmost patience, with signs and wonders and mighty works&rdquo; (12:12). The marks of his apostleship were displayed in their very midst, yet notice the first quality he names is &ldquo;utmost patience.&rdquo; Before the wonders, the endurance. The truest sign of a genuine servant of Christ is not spectacle but steadfast, patient love that bears with a difficult people over the long haul. The miracles were real, but the patience was the deeper credential.",
      "Then comes the wound that hurt him most. &ldquo;In what were you less favored than the rest of the churches, except that I myself did not burden you?&rdquo; (12:13). Paul had refused to take money from the Corinthians, supporting himself so as to put no obstacle in the way of the gospel&mdash;and somehow even this generosity had been twisted against him, as though it proved he did not love them. &ldquo;Forgive me this wrong!&rdquo; he says, with biting irony. He had given them everything and asked nothing, and they had read it as a slight.",
      "&ldquo;Here for the third time I am ready to come to you. And I will not be a burden, for I seek not what is yours but you&rdquo; (12:14). There is the heart of a true shepherd. He does not want their possessions; he wants them. &ldquo;Children are not obligated to save up for their parents, but parents for their children.&rdquo; Paul casts himself as a father gladly spending himself for his sons and daughters, not extracting from them. Love does not calculate what it can get; it asks what it can give.",
      "And so he comes to the verse that crowns the whole appeal: &ldquo;I will most gladly spend and be spent for your souls&rdquo; (12:15). The two verbs build to a climax&mdash;he will spend all he has, and then be spent himself, poured out to the last drop. &ldquo;If I love you more, am I to be loved less?&rdquo; Even the suspicion that his love was met with coldness does not slow him. This is the pastoral form of &ldquo;power made perfect in weakness&rdquo;: the apostle, weak and unburdening, refusing repayment, pours himself out for a church that has too often doubted him, because that is what the love of Christ does through a weak vessel.",
      "The chapter closes on a note of tender warning. Paul fears that when he comes he may find quarreling, jealousy, anger, slander, and impurity unrepented of, and that he will have to mourn over many who have sinned and not turned back (12:20&ndash;21). His readiness to be spent does not soften into indulgence; love that pours itself out also longs for the holiness of those it loves. The whole sweep of the chapter holds together&mdash;the thorn, the sufficient grace, the power perfected in weakness, and the shepherd spent for souls&mdash;in a single portrait of what it means to follow a crucified Lord, finding all our sufficiency in his grace and all our strength in our weakness.",
    ],
  },
];

const videoItems = [
  { videoId: "yLkeC4My6Ms", title: "BibleProject - 2 Corinthians Overview" },
  { videoId: "0fGwzeFFths", title: "Pauls Thorn in the Flesh - 2 Corinthians 12 Explained" },
  { videoId: "h0HF06_PUWk", title: "My Grace Is Sufficient for You - A Study in Weakness" },
  { videoId: "TwSjraB2pZc", title: "Boasting in Weakness - The Power of Christ Made Perfect" },
];

export default function SecondCorinthians12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Corinthians 12
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s boasting in weakness &mdash; the man caught up to paradise, the thorn in the flesh given to keep him humble, his threefold plea for its removal, and the Lord&rsquo;s answer that has steadied the suffering ever since: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo;
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 2 Corinthians 12 through visual teaching on Paul&rsquo;s vision of paradise, the thorn in the flesh, the sufficiency of grace, and the power of Christ made perfect in weakness.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>When I Am Weak, Then I Am Strong</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Corinthians 12 takes the suffering, the unanswered prayer, and the unremoved thorn and turns them into the very place where the power of Christ comes to rest. Its enduring call is to stop measuring our lives by our strength, and to find in our weakness the sufficiency of a grace that is always, unfailingly, enough.
          </p>
        </div>
      </main>
    </div>
  );
}
