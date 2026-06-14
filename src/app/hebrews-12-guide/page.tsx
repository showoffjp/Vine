"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Cloud of Witnesses",
  "Run the Race Before Us",
  "The Discipline of the Lord",
  "You Have Come to Mount Zion",
  "A Kingdom That Cannot Be Shaken",
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
    id: "The Cloud of Witnesses",
    heading: "The Cloud of Witnesses",
    reference: "Hebrews 12:1; 11:1&ndash;40",
    paragraphs: [
      "Hebrews 12 opens with one of the most arresting images in all of Scripture: &ldquo;Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us&rdquo; (12:1). The &ldquo;therefore&rdquo; reaches back across all of chapter eleven, one of the most sustained and magnificent passages in the New Testament, the great roll-call of faith: Abel, Enoch, Noah, Abraham, Sarah, Isaac, Jacob, Joseph, Moses, Rahab, Gideon, Barak, Samson, Jephthah, David, Samuel, and the prophets.",
      "The image of a &ldquo;cloud&rdquo; of witnesses is drawn from the world of athletic competition. Ancient stadiums were built so that the spectators surrounded the track on all sides, filling the banks of seats until they formed a dense mass of watching humanity &mdash; a cloud of faces. The author of Hebrews places the faithful of all the previous ages in those seats, watching the current generation of believers run the race. They are not absent. They are not indifferent. They are the great audience before whom the race of faith is being run.",
      "But the word &ldquo;witnesses&rdquo; (martyres) in Hebrews carries a double meaning. These are not simply spectators who watch the proceedings. They are themselves witnesses &mdash; they have testified by their lives to the reality of what faith makes possible. Their endurance under extraordinary circumstances is itself a form of testimony to every subsequent generation. Their lives say: it is possible to trust God in the dark; it is possible to hold on when you cannot see; it is possible to die without receiving the promise and to die well, believing it will come.",
      "The catalog of Hebrews 11 is structured to make this cumulative point. Each figure is named with his or her characteristic act of faith, and then the narrative moves on before the full resolution arrives. Abraham went out not knowing where he was going. He sojourned in the land of promise as if it were a foreign land, &ldquo;looking forward to the city that has foundations, whose designer and builder is God&rdquo; (11:10). He was not looking backward at what he had left; he was looking forward to what had been promised. This is the posture the author commends to his readers.",
      "Sarah &ldquo;considered him faithful who had promised&rdquo; (11:11). The logic of her faith was simple and radical: God had spoken; therefore the impossible was possible. Moses chose &ldquo;to be mistreated with the people of God rather than to enjoy the fleeting pleasures of sin&rdquo; (11:25), looking to the reward. These are not people who were naive about the cost of faith. They knew what it cost. They paid the price willingly because they &ldquo;saw&rdquo; something that made the payment worthwhile.",
      "The author reaches his climax in 11:32&ndash;38: others were tortured, refusing to accept release, so that they might rise again to a better life; some faced jeers and flogging, chains and imprisonment; they were stoned, sawn in two, killed with the sword; they went about in sheepskins and goatskins, destitute, afflicted, mistreated &mdash; &ldquo;of whom the world was not worthy&rdquo; (11:38). That phrase is the heart of it. The world judged these people as failures, as losers, as the detritus of history. God&rsquo;s verdict was the opposite: the world was not worthy of them.",
      "The great cloud of witnesses is therefore not a crowd of comfortable success stories come to cheer you on from the stands. They are a company of people who suffered greatly, who often died without seeing the fulfillment of the promises, who endured in faith across decades and generations, and who are now vindicated in the presence of God. Their testimony to the current generation is not &ldquo;it will be easy&rdquo; but rather &ldquo;it is worth it, it is possible, and the one who promises is faithful.&rdquo;",
    ],
  },
  {
    id: "Run the Race Before Us",
    heading: "Run the Race Before Us",
    reference: "Hebrews 12:1&ndash;4",
    paragraphs: [
      "The athletic image that opens Hebrews 12 is not incidental decoration. It is the organizing metaphor for the entire first section of the chapter, and it repays careful attention. &ldquo;Let us run with endurance the race that is set before us&rdquo; (12:1). The word for race here is &ldquo;agon&rdquo; in Greek &mdash; the root of our word &ldquo;agony.&rdquo; This is not a casual jog. It is a contest that demands everything the runner has.",
      "Before describing the race itself, the author prescribes preparation: &ldquo;let us also lay aside every weight, and sin which clings so closely.&rdquo; The distinction between &ldquo;weight&rdquo; and &ldquo;sin&rdquo; is significant. The weight (onkos) is not necessarily sinful; it is anything that slows the runner down. In athletic competition, a runner sheds every unnecessary pound, every encumbrance, anything that creates drag. Applied to the Christian life, the author is saying that there are things which may not be sinful in themselves but which, in the context of this particular race, become encumbrances to be laid aside.",
      "Sin, on the other hand, &ldquo;clings so closely&rdquo; &mdash; a single Greek word, euperistaton, meaning something that easily wraps itself around you and trips you up. The image is of a long robe or garment that catches on your legs mid-stride. Sin has this quality in the Christian life: it entangles, it wraps, it catches, it brings the runner down. The exhortation is not gentle or tentative. It is urgent: lay it aside. Strip it off. Deal with it decisively, because the race cannot be run well while it clings.",
      "The keystone of the entire passage is what comes next: &ldquo;looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God&rdquo; (12:2). This single sentence is the center of gravity around which everything else in the passage orbits. The cure for weariness in the race is not willpower or a better strategy. It is looking to Jesus.",
      "The author gives Jesus two titles here: &ldquo;founder&rdquo; (archegos) and &ldquo;perfecter&rdquo; (teleiotes) of our faith. The first title means something like &ldquo;pioneer&rdquo; or &ldquo;trail-blazer&rdquo; &mdash; the one who goes first, who breaks the path. Jesus is not calling runners to a course he has never run himself. He ran it to the end. He faced every temptation the runners face (Heb. 4:15), and he endured it all without sin. He is the perfecter &mdash; the one who brought faith to its completed, perfected end. He is both the supreme example of faith and the one who makes faith possible.",
      "The description of his endurance is quietly astonishing: he endured the cross &ldquo;for the joy that was set before him.&rdquo; Not despite the suffering but through the suffering and toward the joy. He saw something beyond the cross that made the cross endurable &mdash; and that something was the joy awaiting on the other side. This is the same logic the author is applying to his readers: the race is painful, but there is joy ahead, and looking to the one who ran to his joy through his suffering is the resource for running our own race.",
      "Verse three drives the point home: &ldquo;Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted.&rdquo; The remedy for weariness is not to deny the weariness or to manage it with human techniques. It is to consider him &mdash; to fix the mind on the person and the endurance of Jesus. The word &ldquo;consider&rdquo; implies sustained, careful attention, not a glance. The runner who keeps his eyes on Jesus is the runner who does not faint.",
    ],
  },
  {
    id: "The Discipline of the Lord",
    heading: "The Discipline of the Lord",
    reference: "Hebrews 12:5&ndash;13",
    paragraphs: [
      "Having established the athletic image and the supreme example of Jesus, the author of Hebrews turns to address a particular form of suffering that his readers are facing: the suffering that comes from God&rsquo;s own hand in the form of discipline. His readers are tempted to interpret their hardships as evidence that God has abandoned them or is indifferent to them. The author&rsquo;s response is one of the most theologically dense and pastorally important passages in the New Testament.",
      "He begins by citing Proverbs 3:11&ndash;12: &ldquo;My son, do not regard lightly the discipline of the Lord, nor be weary when reproved by him. For the Lord disciplines the one he loves, and chastises every son whom he receives&rdquo; (12:5&ndash;6). The word for &ldquo;discipline&rdquo; throughout this section is paideia, which covers a range of meaning: instruction, training, correction, and yes, punishment. It is the word used for the formation of a child &mdash; the entire process by which a father shapes the character and life of his son.",
      "The logic the author draws out is striking in its inversion of common assumptions. If you are suffering, you might conclude that God does not love you or has forgotten you. The author says the opposite: suffering, when it comes as God&rsquo;s discipline, is itself the evidence of God&rsquo;s love. &ldquo;It is for discipline that you have to endure. God is treating you as sons. For what son is there whom his father does not discipline? If you are left without discipline, in which all have participated, then you are illegitimate children and not sons&rdquo; (12:7&ndash;8).",
      "The argument is from a cultural reality his readers would have recognized immediately. In the ancient world, a father who never disciplined his children was either absent or indifferent to them. A father who cared about his children&rsquo;s formation invested in their correction. The discipline that stung was itself the mark of genuine relationship. Those who received no discipline were not the favored ones &mdash; they were the neglected ones. Applied to God, the point is this: the hardship you are experiencing may not be divine punishment in the judicial sense, but it may be divine discipline in the parental sense &mdash; and the two are utterly different.",
      "We had earthly fathers, the author notes, who disciplined us, and we respected them for it. How much more should we submit to the Father of spirits and live? The earthly father disciplines for a short time as seemed best to him, but God disciplines us &ldquo;for our good, that we may share his holiness&rdquo; (12:10). The telos of God&rsquo;s discipline is not pain for its own sake. It is holiness. It is the shaping of a child into someone who can share in the character of God himself.",
      "Then comes one of the most honest verses in the passage: &ldquo;For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it&rdquo; (12:11). The author does not pretend the discipline feels good. He says explicitly that it does not &mdash; &ldquo;for the moment.&rdquo; He honors the reality of pain. But he insists that pain is not the final word. The final word is &ldquo;the peaceful fruit of righteousness,&rdquo; and that fruit comes to those who allow themselves to be trained by the discipline rather than embittered or broken by it.",
      "The passage closes with a call to action drawn from Isaiah 35:3: &ldquo;Therefore lift your drooping hands and strengthen your weak knees, and make straight paths for your feet, so that what is lame may not be put out of joint but rather be healed&rdquo; (12:12&ndash;13). The imagery shifts from the father&rsquo;s discipline to the runner&rsquo;s body: drooping hands, weak knees, paths that need to be straightened so that the injured do not stumble further. God&rsquo;s discipline, received rightly, does not cripple &mdash; it heals. The limping runner who submits to the divine trainer does not come out more broken; he comes out stronger.",
    ],
  },
  {
    id: "You Have Come to Mount Zion",
    heading: "You Have Come to Mount Zion",
    reference: "Hebrews 12:18&ndash;24",
    paragraphs: [
      "One of the most majestic passages in the entire letter to the Hebrews occupies verses 18&ndash;24, where the author draws a sweeping contrast between two mountains: Sinai and Zion. The contrast is not merely rhetorical. It defines the difference between the old covenant and the new, between the approach to God that Israel knew at the giving of the law and the approach to God that believers now have through Jesus Christ.",
      "The first mountain is described without being named: &ldquo;For you have not come to what may be touched, a blazing fire and darkness and gloom and a tempest and the sound of a trumpet and a voice whose words made the hearers beg that no more be spoken to them&rdquo; (12:18&ndash;19). This is Sinai at the giving of the law, drawn from the account in Exodus 19&ndash;20. The people stood at the foot of the mountain, and what they encountered was overwhelming, even unbearable: fire, darkness, gloom, storm, the terrifying sound of the trumpet growing louder and louder, and a voice so dreadful that they begged Moses to be the intermediary because they could not endure direct address from God.",
      "Even Moses, the mediator of the old covenant, the man who had spoken face to face with God at the burning bush, said, &ldquo;I tremble with fear&rdquo; (12:21, quoting Deut. 9:19). The point is not that Sinai was bad or that the law was evil. The law was holy and good (Rom. 7:12). But the mode of its giving conveyed something accurate about the relationship it created: a relationship mediated through distance, through fire and cloud, through the prohibition that if even an animal touched the mountain it would be stoned. God was present at Sinai, but his people could not approach. They stood at a distance.",
      "The second mountain overturns everything: &ldquo;But you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem, and to innumerable angels in festal gathering, and to the assembly of the firstborn who are enrolled in heaven, and to God, the judge of all, and to the spirits of the righteous made perfect, and to Jesus, the mediator of a new covenant, and to the sprinkled blood that speaks a better word than the blood of Abel&rdquo; (12:22&ndash;24).",
      "This is a stunning list. Where Sinai had fire and darkness and a voice that drove people back, Zion has angels in festal gathering &mdash; the Greek word is paneguris, used for a joyful assembly or festival. Where Sinai had prohibitions about touching the mountain, Zion has open access to God, the judge of all, approached not in terror but with confidence through the mediator of a new covenant. Where Sinai had the blood of animal sacrifices that pointed forward to what was needed, Zion has the sprinkled blood of Jesus that &ldquo;speaks a better word than the blood of Abel.&rdquo;",
      "The blood of Abel, the first murder victim, cried out from the ground for justice and vengeance (Gen. 4:10). The blood of Jesus speaks a better word: not vengeance but forgiveness, not condemnation but justification, not distance but access. The contrast is total. And the key word in the passage is the word &ldquo;you have come.&rdquo; This is not a future destination the readers are hoping to reach. They have already come there. In Christ, through the new covenant, believers have present access to the heavenly reality that Mount Zion represents.",
      "The &ldquo;spirits of the righteous made perfect&rdquo; in this passage are the saints of the old covenant &mdash; the great cloud of witnesses of chapter eleven &mdash; who, now that Christ has come and the new covenant has been inaugurated, have received the fullness of what they died hoping for. The old covenant saints and the new covenant community are together in this heavenly assembly. The race is being run in the presence not only of the living but of the dead who have been made perfect through the blood of Jesus. Heaven and earth are not as separated as they appear.",
    ],
  },
  {
    id: "A Kingdom That Cannot Be Shaken",
    heading: "A Kingdom That Cannot Be Shaken",
    reference: "Hebrews 12:25&ndash;29",
    paragraphs: [
      "The final movement of Hebrews 12 draws the theological and ethical conclusion from everything that has preceded it. If all of this is true &mdash; if you have come to Mount Zion, to the heavenly Jerusalem, to the mediator of the new covenant &mdash; then one thing above all else is required: hear him who speaks. &ldquo;See that you do not refuse him who is speaking. For if they did not escape when they refused him who warned them on earth, much less will we escape if we reject him who warns from heaven&rdquo; (12:25).",
      "The argument is again from lesser to greater, a characteristic move in Hebrews. At Sinai, God spoke on earth through Moses, and those who refused to hear faced consequences they could not escape. Now God speaks from heaven, through the Son who is the radiance of his glory and the exact imprint of his nature (1:3). The word that comes now is more authoritative, more certain, more weighty than the word at Sinai. To refuse it is not a minor theological error; it is to place oneself in the most dangerous of positions.",
      "The author then quotes from Haggai 2:6: &ldquo;Yet once more I will shake not only the earth but also the heavens&rdquo; (12:26). At Sinai, God shook the earth. The theophany at the giving of the law was accompanied by earthquake. But the prophet Haggai speaks of a greater shaking still to come &mdash; one that will shake not only earth but heaven itself. The author of Hebrews interprets this eschatological shaking as the removal of everything that can be shaken, everything that belongs to the created order in its present, transient form.",
      "The purpose of the shaking is the revealing: &ldquo;This phrase, &lsquo;Yet once more,&rsquo; indicates the removal of things that are shaken &mdash; that is, things that have been made &mdash; in order that the things that cannot be shaken may remain&rdquo; (12:27). The shaking is not destruction for its own sake. It is the apocalyptic process by which everything that is temporary, everything that rests on creaturely foundations, is stripped away so that what is eternal and unshakeable can stand alone and be seen for what it is.",
      "In the midst of a world that shakes &mdash; in the midst of persecution, suffering, social rejection, economic hardship, the fragility of human institutions &mdash; the readers of Hebrews have received something that cannot be shaken: a kingdom. &ldquo;Therefore let us be grateful for receiving a kingdom that cannot be shaken, and thus let us offer to God acceptable worship, with reverence and awe, for our God is a consuming fire&rdquo; (12:28&ndash;29).",
      "The response to receiving an unshakeable kingdom is gratitude expressed as worship. This is the ethical conclusion of the entire chapter. The race is run, the discipline is endured, the access to Mount Zion is enjoyed, the shaking is survived &mdash; and the result is not triumphalism but reverent, grateful worship. The phrase &ldquo;reverence and awe&rdquo; picks up the tone of the passage: we have come to a better covenant than Sinai, but the God of the new covenant is no less holy than the God of Sinai. The final words of the chapter quote Deuteronomy 4:24: &ldquo;our God is a consuming fire.&rdquo;",
      "The consuming fire is not a threat to those who are in Christ, covered by his blood, members of the assembly at Zion. But it is a reminder that the God who speaks with grace is also the God whose holiness is absolute, whose presence is not casual, and who cannot be trifled with. The grace of the new covenant does not domesticate God. It provides, through Jesus the mediator, a way to approach a God who remains holy fire &mdash; and to approach him not with terror but with gratitude, reverence, and awe.",
      "The unshakeable kingdom is the great motivating reality of Hebrews 12. When suffering comes &mdash; whether through external persecution, the discipline of God, or the sheer weight of running a long race &mdash; the resource for endurance is the fixed, certain, eternal reality of what has already been received. The kingdom cannot be taken away. The access to Zion cannot be revoked. The mediator&rsquo;s blood continues to speak its better word. Therefore: run, endure, submit to discipline, hear his voice, and worship with gratitude the God who gives his people a kingdom the shaking of the universe cannot touch.",
    ],
  },
];

const videoItems = [
  { videoId: "1Wd4Y3gJVvk", title: "BibleProject - Hebrews Overview" },
  { videoId: "kKCYDzQ0U9w", title: "Run the Race - Hebrews 12 Sermon and Study" },
  { videoId: "90SKzH7J7Zg", title: "The Discipline of God - Hebrews 12 Explained" },
  { videoId: "ZgmteFJLRJI", title: "Mount Sinai and Mount Zion - Hebrews 12 Contrast" },
];

export default function Hebrews12GuidePage() {
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
            Hebrews 12 &mdash; Run the Race
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The great cloud of witnesses, the endurance of Jesus on the cross, the discipline of a loving Father, the contrast of Sinai and Zion, and the unshakeable kingdom &mdash; a study of Hebrews 12 as a call to persevere with reverence and gratitude.
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
              Deepen your study of Hebrews 12 through visual teaching on the cloud of witnesses, the race of faith, the discipline of God, and the unshakeable kingdom.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Kingdom That Cannot Be Shaken</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Hebrews 12 calls believers to run with endurance, to receive discipline as evidence of love, and to worship with reverence the God who gives an unshakeable kingdom. The cloud of witnesses has run before us; Jesus has pioneered and perfected the race; and the consuming fire of God is the very presence in which his people can now stand &mdash; not because the fire has cooled, but because the blood of the mediator speaks a better word.
          </p>
        </div>
      </main>
    </div>
  );
}
