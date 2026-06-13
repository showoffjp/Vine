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
  "The Supremacy of Christ",
  "Fullness in Christ",
  "Against False Teaching",
  "The New Self",
  "Christ in You",
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
    id: "The Supremacy of Christ",
    heading: "The Supremacy of Christ",
    reference: "Colossians 1",
    paragraphs: [
      "Colossians is a letter Paul wrote from prison to a church he had never personally visited. The congregation at Colossae, a small town in the Lycus Valley of Asia Minor, had been founded not by Paul himself but most likely through the labors of Epaphras, a faithful coworker who carried the gospel there. Yet though Paul had not planted the church, he writes to it with deep pastoral love and urgent concern, for word has reached him that a dangerous current of teaching threatens to draw the believers away from the sufficiency of Christ.",
      "The danger at Colossae is what scholars often call the &ldquo;Colossian heresy&rdquo; &mdash; a tangled mixture of Jewish legalism, mystical speculation about angels and heavenly powers, and harsh asceticism. The exact shape of this error is hard to reconstruct, but its effect is clear enough: it diminished Christ. It treated him as one mediator among many, one rung on a ladder of spiritual beings, one element in a larger system of religious knowledge and observance. Against all of this Paul lifts up a single, towering theme: the absolute supremacy and all-sufficiency of Jesus Christ.",
      "At the heart of the opening chapter stands one of the most majestic passages in all of Scripture, the great Christ hymn (1:15&ndash;20). &ldquo;He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities &mdash; all things were created through him and for him.&rdquo; Christ is not a creature among creatures; he is the one through whom and for whom the entire cosmos came to be.",
      "The hymn presses further: &ldquo;And he is before all things, and in him all things hold together&rdquo; (1:17). The same Lord who created the universe also sustains it moment by moment; the cohesion of all reality rests in him. To imagine that he must be supplemented by lesser powers or angelic intermediaries is therefore absurd, for every such power owes its very existence to him and is held in being by his hand.",
      "Then Paul turns from creation to the church and to redemption: &ldquo;And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent&rdquo; (1:18). The risen Christ is supreme not only over the natural order but over the new creation, the people of God. In his resurrection he became the firstborn from the dead, the pioneer of a redeemed humanity, so that in every sphere &mdash; cosmic and spiritual, old creation and new &mdash; he holds the first place.",
      "The climax is reconciliation through the cross: in him &ldquo;all the fullness of God was pleased to dwell, and through him to reconcile to himself all things&hellip; making peace by the blood of his cross&rdquo; (1:19&ndash;20). The supremacy of Christ is not cold metaphysics; it is the ground of salvation. The one who made and sustains all things is the very one who shed his blood to reconcile a rebellious world to God. Paul&rsquo;s answer to every spiritual hunger and every false teaching is simply Christ &mdash; preeminent, sufficient, supreme.",
    ],
  },
  {
    id: "Fullness in Christ",
    heading: "Fullness in Christ",
    reference: "Colossians 2",
    paragraphs: [
      "If the first chapter establishes the supremacy of Christ over all things, the second chapter draws out the breathtaking consequence for the believer: because Christ is full, those who are in him lack nothing. The central verse rings with finality: &ldquo;For in him the whole fullness of deity dwells bodily, and you have been filled in him, who is the head of all rule and authority&rdquo; (2:9&ndash;10). The entire fullness of God resides in Christ &mdash; not partially, not symbolically, but bodily and completely.",
      "This single truth dismantles the whole appeal of the Colossian error. The false teachers offered a fuller experience of the divine through secret knowledge, angelic mediation, and rigorous discipline. But Paul insists there is no fuller experience of God to be had than the one already given in Christ. In him dwells all the fullness of deity; to possess Christ is to possess God himself. The believer does not climb toward fullness by stages &mdash; the believer has already been filled in him.",
      "Christ is, moreover, &ldquo;the head of all rule and authority.&rdquo; Whatever spiritual powers the Colossians feared or sought to placate, Christ stands over them all as their head and master. There is no realm of angelic beings that the Christian must navigate or appease, for the Lord to whom they belong has made the believer complete. To add anything to Christ as a requirement for spiritual fullness is therefore not to gain more but to imply that Christ is somehow not enough &mdash; which Paul will not allow for a moment.",
      "Paul reminds the Colossians of what has already happened to them in Christ: they were &ldquo;buried with him in baptism&rdquo; and &ldquo;raised with him through faith in the powerful working of God&rdquo; (2:12). Their old life has died and a new life has begun, not through ritual achievement but through union with the crucified and risen Lord. The decisive transaction of salvation is finished, anchored in Christ&rsquo;s death and resurrection and received by faith.",
      "Because of this completeness, the Christian needs no supplement. The drive to add rules, experiences, and observances to Christ betrays a failure to grasp how much has already been given. Paul&rsquo;s pastoral aim is to settle the believer&rsquo;s confidence wholly upon Christ, so that no teacher, however impressive, can unsettle it. The roots of the Christian life go down into Christ, and from that rootedness flows all genuine growth: &ldquo;rooted and built up in him and established in the faith&rdquo; (2:7).",
      "This is the deep comfort of the letter. The believer is not a spiritual beggar scrambling after fragments of God&rsquo;s favor, but an heir already made full in the One in whom all fullness dwells. Every spiritual blessing, every access to God, every resource for holiness is found in Christ and possessed by those united to him. The Christian life is not the pursuit of a fullness still lacking, but the unfolding of a fullness already received.",
      "And so Paul&rsquo;s answer to every counterfeit gospel is the same: look to Christ, in whom &ldquo;are hidden all the treasures of wisdom and knowledge&rdquo; (2:3). The supposedly deeper wisdom of the false teachers is empty by comparison, for all true wisdom is stored up in Christ. To have him is to have everything; to seek elsewhere is to turn from the fountain of living water toward broken cisterns that can hold nothing.",
    ],
  },
  {
    id: "Against False Teaching",
    heading: "Against False Teaching",
    reference: "Colossians 2",
    paragraphs: [
      "Having grounded the Colossians in the fullness of Christ, Paul turns to confront the false teaching directly, and his warning is sharp: &ldquo;See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ&rdquo; (2:8). The danger is captivity &mdash; a spiritual kidnapping that carries believers away from the freedom and fullness they have in Christ into bondage to mere human ideas.",
      "Paul takes aim first at the legalistic dimension of the error, the imposition of rules about religious observance. &ldquo;Therefore let no one pass judgment on you in questions of food and drink, or with regard to a festival or a new moon or a Sabbath&rdquo; (2:16). These ceremonial observances had their place in the old covenant, but Paul gives the decisive reason they can no longer be made binding requirements: they &ldquo;are a shadow of the things to come, but the substance belongs to Christ&rdquo; (2:16&ndash;17).",
      "The image is illuminating. A shadow announces the approach of the reality that casts it; once the substance has come, to cling to the shadow is to miss the very thing it pointed toward. The dietary laws and sacred days foreshadowed Christ, and now that he has come, the believer possesses the substance itself. To return to the shadows as though they still bound the conscience is to turn back from fulfillment to anticipation, from the body to its mere outline.",
      "Paul then confronts the ascetic and mystical strain of the heresy, with its proud claims to visions and its harsh treatment of the body. He mocks its slogans: &ldquo;Do not handle, Do not taste, Do not touch&rdquo; (2:21) &mdash; rules that concern things destined to perish with use, mere &ldquo;human precepts and teachings.&rdquo; Such regulations present themselves as advanced spirituality, but Paul exposes them as a regression into elementary religion that has nothing to do with the gospel of grace.",
      "His verdict is devastating: these practices &ldquo;indeed have an appearance of wisdom in promoting self-made religion and asceticism and severity to the body, but they are of no value in stopping the indulgence of the flesh&rdquo; (2:23). They look impressive &mdash; rigorous, disciplined, spiritual &mdash; but they cannot accomplish what they promise. Outward severity has no power to subdue the inward corruption of the heart; it merely produces a religion of appearances while leaving the flesh untouched.",
      "Over against all these futile efforts Paul sets the triumph of the cross. &ldquo;And you, who were dead in your trespasses&hellip; God made alive together with him, having forgiven us all our trespasses, by canceling the record of debt that stood against us with its legal demands. This he set aside, nailing it to the cross&rdquo; (2:13&ndash;14). The very written code that condemned us was nailed up with Christ and abolished. There is nothing left for legalism to add and nothing for it to enforce.",
      "And in the same act God dealt with the hostile powers: &ldquo;He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him&rdquo; (2:15). The cross, which looked like Christ&rsquo;s defeat, was in truth his cosmic victory parade, stripping the spiritual powers of their claim over the believer. Why, then, submit again to rules, fear angelic beings, or chase after mystical secrets? The decisive battle is won, and the believer stands complete in the Conqueror.",
    ],
  },
  {
    id: "The New Self",
    heading: "The New Self",
    reference: "Colossians 3",
    paragraphs: [
      "In the third chapter Paul moves from doctrine to its outworking, from what Christ has done to how the believer is now to live. The whole ethical appeal rests on the reality of resurrection union: &ldquo;If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth&rdquo; (3:1&ndash;2). Because believers have already been raised with Christ, their deepest orientation is to be heavenward, toward the place where their life is hidden with Christ in God.",
      "This new orientation issues in a decisive break with the old way of life. &ldquo;Put to death therefore what is earthly in you&rdquo; (3:5) &mdash; and Paul names the sins to be slain: sexual immorality, impurity, evil desire, and covetousness, which is idolatry. Then a second list of sins of speech and disposition: &ldquo;anger, wrath, malice, slander, and obscene talk&rdquo; (3:8), together with lying to one another. These belong to the old self that has been put off, and they have no place in those who have died and risen with Christ.",
      "The imagery Paul uses is that of changing garments. The believer has &ldquo;put off the old self with its practices and have put on the new self, which is being renewed in knowledge after the image of its creator&rdquo; (3:9&ndash;10). This is striking language: the new self is being remade according to the image of God himself, recovering what was marred in the fall. Sanctification is the steady restoration of the divine image in those united to the One who is the perfect image of the invisible God.",
      "In this renewed humanity the old divisions that ranked and separated people fall away: &ldquo;Here there is not Greek and Jew, circumcised and uncircumcised, barbarian, Scythian, slave, free; but Christ is all, and in all&rdquo; (3:11). The new self belongs to a new community in which Christ is everything and fills everyone, and the social barriers that once defined people lose their power to divide those who share his life.",
      "Having stripped off the old garments, the believer is to clothe himself in the wardrobe of Christ: &ldquo;Put on then, as God&rsquo;s chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience&rdquo; (3:12). To this Paul adds the hard work of relationship: &ldquo;bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive&rdquo; (3:13). The forgiveness we have received becomes the pattern and power of the forgiveness we extend.",
      "Crowning all these virtues is one supreme garment: &ldquo;And above all these put on love, which binds everything together in perfect harmony&rdquo; (3:14). Love is not merely one virtue alongside the others; it is the belt that holds the whole array together and gives the renewed life its coherence and beauty. Without love the other graces fall apart; with it they are woven into the integrated character of Christ.",
      "And over this whole new life Paul invokes a governing peace and gratitude: &ldquo;Let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful&rdquo; (3:15). The peace of Christ is to act as the umpire in the believing community, settling conflict and binding the body together, while thankfulness becomes the constant note of the renewed heart. The new self is not a grim project of self-improvement but a grateful life lived out of the abundance already given in Christ.",
    ],
  },
  {
    id: "Christ in You",
    heading: "Christ in You",
    reference: "Colossians 1 and 3 to 4",
    paragraphs: [
      "Threaded through the whole letter is a phrase of extraordinary depth, the secret Paul says was hidden for ages but is now revealed to God&rsquo;s people: &ldquo;Christ in you, the hope of glory&rdquo; (1:27). This is the mystery at the center of the gospel &mdash; not merely that Christ died for us long ago, but that the risen Christ now dwells within his people by his Spirit. The indwelling Christ is himself the guarantee and foretaste of the glory yet to come.",
      "This indwelling is no abstract idea; it shapes the texture of daily life. Paul urges, &ldquo;Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God&rdquo; (3:16). The Christ who dwells within is met and nourished through his word, taken deeply into the heart and shared within the community, overflowing into worship and song.",
      "From this inward fullness flows a comprehensive principle for all of life: &ldquo;And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him&rdquo; (3:17). Nothing is too ordinary to be done for Christ and through Christ. The indwelling Lord transforms the whole of life into worship, so that work and speech, the great acts and the small, are all offered up in his name and saturated with thanksgiving.",
      "Paul then applies this to the ordinary relationships of the household (3:18&ndash;4:1). Wives and husbands, children and parents, slaves and masters are each addressed in turn, and the recurring refrain is that all is to be done &ldquo;in the Lord&rdquo; and &ldquo;fearing the Lord.&rdquo; Even slaves are told, &ldquo;Whatever you do, work heartily, as for the Lord and not for men&rdquo; (3:23), for they serve the Lord Christ. The indwelling Christ reaches into the most everyday structures of life, dignifying and transforming them.",
      "Turning to the life of prayer and witness, Paul exhorts, &ldquo;Continue steadfastly in prayer, being watchful in it with thanksgiving&rdquo; (4:2). The Christ-filled community is to be a praying community, persistent and alert, and Paul asks for prayer that doors might open for the gospel even as he sits in chains. The hope of glory within produces a longing that others, too, might come to share in Christ.",
      "Toward those outside the faith, Paul counsels wisdom and grace: &ldquo;Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person&rdquo; (4:5&ndash;6). The believer&rsquo;s words are to be both winsome and pointed &mdash; gracious like seasoning that draws others in, yet with the savor of truth that gives the answer each person needs.",
      "So the letter that began among the heights of Christ&rsquo;s cosmic supremacy comes to rest in the believer&rsquo;s heart and home. The Christ who is the image of the invisible God, by whom all things were created and in whom all things hold together, is the same Christ who now dwells within his people as their hope of glory. To know this indwelling Lord, to let his word dwell richly within, and to do all things in his name &mdash; this is the whole of the Christian life that Colossians sets before us.",
    ],
  },
];

const videoItems = [
  { videoId: "pXTXlDxQsvc", title: "BibleProject - Book of Colossians Overview" },
  { videoId: "Br6Hb6Fhmtg", title: "The Supremacy of Christ - Colossians 1" },
  { videoId: "Ud5lWj-J9Sk", title: "Complete in Christ - Colossians Explained" },
];

export default function ChristianBookOfColossiansGuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Colossians
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s great letter on the supremacy of Christ &mdash; the magnificent Christ hymn, the fullness of deity dwelling in him, his warning against false teaching, the putting off of the old self and putting on of the new, and the mystery of Christ in you, the hope of glory.
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
              Deepen your study of Colossians through visual teaching on the structure of the letter, the supremacy of Christ, and what it means to be complete in him.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Complete in Christ</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Colossians stands as the church&rsquo;s great proclamation of the supremacy and all-sufficiency of Jesus Christ. In him the whole fullness of deity dwells, and in him the believer has been made complete &mdash; needing no supplement, no secret knowledge, no added rule. Set your mind on things above, let his word dwell in you richly, and live out the mystery of Christ in you, the hope of glory.
          </p>
        </div>
      </main>
    </div>
  );
}
