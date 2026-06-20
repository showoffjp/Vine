"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

type Prophecy = {
  theme: string;
  ot: string;
  otText: string;
  nt: string;
  ntText: string;
  accent: string;
};

export default function MessianicPropheciesGuide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "Mt5wFFhylDU", title: "The Messiah -- BibleProject" },
    { videoId: "RkPQ5RDGI0k", title: "Who Is Jesus? (Ligonier)" },
    { videoId: "xMR0ts9bKvk", title: "Isaiah 53 and the Suffering Servant" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "prophecies", label: "The Prophecies" },
    { id: "case", label: "The Apologetic Case" },
    { id: "application", label: "Application" },
  ];

  const para = (html: string, color = TEXT) => (
    <p
      style={{ color, lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.1rem" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const heading = (text: string, color = GOLD) => (
    <h2 style={{ color, fontSize: "1.6rem", marginTop: "2.2rem", marginBottom: "1rem", letterSpacing: "0.01em" }}>
      {text}
    </h2>
  );

  const card = (children: React.ReactNode, accent = BORDER) => (
    <div style={{
      background: CARD,
      border: `1px solid ${BORDER}`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: "10px",
      padding: "1.5rem 1.7rem",
      marginBottom: "1.4rem",
    }}>
      {children}
    </div>
  );

  const prophecies: Prophecy[] = [
    {
      theme: "The Seed Who Crushes the Serpent",
      ot: "Genesis 3:15",
      otText: "I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.",
      nt: "Galatians 4:4; 1 John 3:8; Romans 16:20",
      ntText: "Born of a woman, the Son of God appeared to destroy the works of the devil, crushing the serpent's head at the cross while suffering the bruised heel of death.",
      accent: GOLD,
    },
    {
      theme: "Descended from Abraham, Judah, and David",
      ot: "Genesis 12:3; 49:10; 2 Samuel 7:12-13",
      otText: "In you all the families of the earth shall be blessed... The scepter shall not depart from Judah... I will raise up your offspring after you, and I will establish his kingdom forever.",
      nt: "Matthew 1:1; Luke 3:33-34; Revelation 5:5",
      ntText: "Jesus is the son of Abraham, the Lion of the tribe of Judah, and the heir of David's everlasting throne, opening his genealogy in Matthew's Gospel.",
      accent: TEAL,
    },
    {
      theme: "Born of a Virgin in Bethlehem",
      ot: "Isaiah 7:14; Micah 5:2",
      otText: "Behold, the virgin shall conceive and bear a son... But you, O Bethlehem Ephrathah... from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.",
      nt: "Matthew 1:22-23; Luke 2:4-7",
      ntText: "Mary conceived by the Holy Spirit, and Jesus was born in Bethlehem, the city of David, exactly as the prophets foretold seven centuries before.",
      accent: PURPLE,
    },
    {
      theme: "Preceded by a Forerunner",
      ot: "Isaiah 40:3; Malachi 3:1",
      otText: "A voice cries: In the wilderness prepare the way of the LORD... Behold, I send my messenger, and he will prepare the way before me.",
      nt: "Matthew 3:1-3; Mark 1:2-4",
      ntText: "John the Baptist came preaching in the wilderness, the appointed herald who prepared the way of the Lord.",
      accent: GREEN,
    },
    {
      theme: "The Suffering Servant Pierced for Our Sins",
      ot: "Isaiah 52:13-53:12",
      otText: "He was pierced for our transgressions; he was crushed for our iniquities... and with his wounds we are healed... he makes his soul an offering for guilt.",
      nt: "1 Peter 2:24; Acts 8:32-35; Matthew 8:17",
      ntText: "Peter and Philip read Isaiah 53 as a portrait of Jesus, who bore our sins in his body on the tree, the guilt offering for a fallen world.",
      accent: ROSE,
    },
    {
      theme: "Crucifixion Foreseen in Detail",
      ot: "Psalm 22:1, 16-18; Zechariah 12:10",
      otText: "My God, my God, why have you forsaken me?... they have pierced my hands and feet... they divide my garments among them, and for my clothing they cast lots... they look on me, on him whom they have pierced.",
      nt: "Matthew 27:35, 46; John 19:23-24, 37",
      ntText: "The soldiers pierced his hands and feet, cast lots for his clothing, and looked on the one they pierced, as Jesus cried out the opening words of Psalm 22 from the cross.",
      accent: GOLD,
    },
    {
      theme: "Betrayed for Thirty Pieces of Silver",
      ot: "Zechariah 11:12-13; Psalm 41:9",
      otText: "So they weighed out as my wages thirty pieces of silver... and I threw them into the house of the LORD, to the potter... my close friend in whom I trusted... has lifted his heel against me.",
      nt: "Matthew 26:14-15; 27:3-10",
      ntText: "Judas betrayed Jesus for thirty pieces of silver, which were later thrown into the temple and used to buy the potter's field.",
      accent: TEAL,
    },
    {
      theme: "Raised from the Dead",
      ot: "Psalm 16:10; Isaiah 53:10-11",
      otText: "You will not abandon my soul to Sheol, or let your holy one see corruption... he shall see his offspring; he shall prolong his days.",
      nt: "Acts 2:24-32; 13:34-37",
      ntText: "Peter and Paul both preached the resurrection from Psalm 16: God did not let his Holy One see corruption, but raised Jesus, of which they were witnesses.",
      accent: PURPLE,
    },
    {
      theme: "The Timing of His Coming",
      ot: "Daniel 9:24-26",
      otText: "Know therefore and understand... to the coming of an anointed one, a prince... And after the sixty-two weeks, an anointed one shall be cut off.",
      nt: "Mark 1:15; Galatians 4:4",
      ntText: "Jesus announced the time was fulfilled, coming and being cut off within the prophetic window before the second temple was destroyed in A.D. 70.",
      accent: GREEN,
    },
    {
      theme: "A Light to the Nations",
      ot: "Isaiah 49:6; Psalm 22:27",
      otText: "I will make you as a light for the nations, that my salvation may reach to the end of the earth... All the ends of the earth shall remember and turn to the LORD.",
      nt: "Luke 2:32; Acts 13:47",
      ntText: "Simeon hailed the infant Jesus as a light for revelation to the Gentiles, and the gospel went out to the ends of the earth, fulfilling the ancient hope.",
      accent: ROSE,
    },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, ${BG} 70%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "3.5rem 1.5rem 2.8rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ color: GOLD, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.82rem", marginBottom: "1rem" }}>
            Apologetics at The Vine
          </p>
          <h1 style={{ fontSize: "2.7rem", lineHeight: 1.15, marginBottom: "1rem", color: TEXT }}>
            Messianic Prophecies Fulfilled in Christ
          </h1>
          <p style={{ fontSize: "1.3rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Everything written about me in the Law of Moses and the Prophets and the Psalms must be fulfilled&rdquo; &mdash; Luke 24:44" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "Centuries before the birth of Jesus, the Hebrew Scriptures sketched a portrait of the coming Messiah in startling detail &mdash; his lineage, birthplace, mission, suffering, death, and resurrection. This study traces those prophecies, weighs the apologetic case for their fulfillment, and answers the most common objections." }} />
        </div>
      </div>

      {/* tab bar */}
      <div style={{
        position: "sticky",
        top: "var(--header-height, 80px)",
        background: BG,
        borderBottom: `1px solid ${BORDER}`,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        padding: "0.8rem 1rem",
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? GOLD : "transparent",
              color: tab === t.id ? BG : MUTED,
              border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              fontFamily: "Georgia, serif",
              fontSize: "0.98rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {tab === "overview" && (
          <div>
            {heading("A Portrait Painted in Advance")}
            {para("The Christian claim that Jesus of Nazareth is the promised Messiah does not rest on a single proof text but on a vast, converging witness running through the entire Old Testament. From the first pages of Genesis to the closing words of Malachi, the Hebrew Scriptures look forward to a coming deliverer &mdash; a seed of the woman, a son of Abraham, a king from David's line, a suffering servant, a pierced redeemer, a risen Lord. The New Testament writers, themselves steeped in these Scriptures, saw the whole picture come into focus in one person. On the road to Emmaus the risen Jesus, &ldquo;beginning with Moses and all the Prophets, interpreted to them in all the Scriptures the things concerning himself&rdquo; (Luke 24:27).")}
            {para("This is not a marginal theme but the spine of the Bible's storyline. Jesus told his opponents, &ldquo;You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me&rdquo; (John 5:39). The apostle Peter declared that &ldquo;all the prophets who have spoken, from Samuel and those who came afterward, also proclaimed these days&rdquo; (Acts 3:24). Paul summarized the gospel he preached as &ldquo;that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures&rdquo; (1 Corinthians 15:3-4). The fulfillment of prophecy was, for the earliest church, not an afterthought but a central pillar of their confidence.")}
            {heading("What Counts as a Messianic Prophecy?", TEAL)}
            {para("The term covers a range of biblical material. Some passages are <strong>direct predictions</strong>, explicitly pointing forward to a future figure (Micah 5:2, naming Bethlehem as the Messiah's birthplace). Others are <strong>typological</strong>, in which a person, institution, or event in Israel's history prefigures and anticipates Christ &mdash; the Passover lamb (Exodus 12; 1 Corinthians 5:7), the bronze serpent lifted up (Numbers 21:9; John 3:14), the suffering of David foreshadowing the suffering of David's greater Son. Still others are <strong>trajectories of hope</strong> woven through the covenants &mdash; the promise to Abraham, the throne pledged to David, the new covenant announced by Jeremiah (Jeremiah 31:31-34). Reading the Old Testament as the church always has, these strands braid together into a single expectation that Jesus claimed to fulfill.")}
            {heading("Why It Matters", PURPLE)}
            {para("Fulfilled prophecy served three purposes for the first Christians, and serves them still. First, it is <strong>evidential</strong>: the convergence of so many specific predictions on one life is a powerful pointer to divine authorship behind the Scriptures and divine identity behind Jesus. Second, it is <strong>theological</strong>: it shows that the cross and resurrection were not a tragic accident or a backup plan but the deliberate, long-foretold purpose of God, &ldquo;the definite plan and foreknowledge of God&rdquo; (Acts 2:23). Third, it is <strong>devotional</strong>: it reveals a God who keeps his word across centuries, who can be trusted to fulfill every remaining promise as faithfully as he fulfilled these.")}
            {para("In the tabs that follow you will find ten of the great messianic prophecies with their Old Testament source and New Testament fulfillment, a careful look at the apologetic case (including the famous probability argument and its proper limits), honest answers to the most common objections, and practical applications for faith and worship. Three short videos below will help set the stage.")}

            <div style={{ marginTop: "2.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ marginBottom: "1.6rem", borderRadius: "10px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.9rem", padding: "0.7rem 1rem", margin: 0, background: CARD }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "prophecies" && (
          <div>
            {heading("Ten Prophecies and Their Fulfillment")}
            {para("Below are ten of the most significant messianic prophecies, each with its Old Testament source and the New Testament record of its fulfillment in Jesus. This is a representative sample, not an exhaustive list &mdash; traditional catalogs number the messianic prophecies in the hundreds.")}

            {prophecies.map((p, idx) => (
              <div key={idx} style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${p.accent}`,
                borderRadius: "10px",
                padding: "1.5rem 1.7rem",
                marginBottom: "1.4rem",
              }}>
                <h3 style={{ color: p.accent, fontSize: "1.3rem", marginBottom: "1rem" }}>
                  {idx + 1}. {p.theme}
                </h3>
                <p style={{ color: GOLD, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  Prophecy &mdash; {p.ot}
                </p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;" + p.otText + "&rdquo;" }} />
                <p style={{ color: TEAL, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  Fulfillment &mdash; {p.nt}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: p.ntText }} />
              </div>
            ))}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.2rem", marginBottom: "0.7rem" }}>The Crowning Chapter: Isaiah 53</h3>
                {para("Of all the messianic prophecies, none is more astonishing than Isaiah 52:13-53:12, written some seven hundred years before Christ. In it the prophet describes a servant of the LORD who is despised and rejected, &ldquo;a man of sorrows and acquainted with grief,&rdquo; who is &ldquo;pierced for our transgressions&rdquo; and &ldquo;crushed for our iniquities,&rdquo; who is led &ldquo;like a lamb that is led to the slaughter,&rdquo; who is &ldquo;cut off out of the land of the living,&rdquo; buried with a rich man, and yet afterward &ldquo;shall see his offspring&rdquo; and &ldquo;prolong his days.&rdquo; The chapter presents substitutionary suffering, death, burial, and vindication in a sequence that maps onto the gospel with remarkable precision. When the Ethiopian official asked Philip of whom the prophet spoke, Philip &ldquo;beginning with this Scripture... told him the good news about Jesus&rdquo; (Acts 8:35).")}
              </div>, PURPLE
            )}
          </div>
        )}

        {tab === "case" && (
          <div>
            {heading("Weighing the Evidence")}
            {para("How much weight can the fulfillment of prophecy actually bear? This tab lays out the apologetic case at its strongest, names its proper limits, and answers the objections most often raised against it. Honest apologetics neither overstates nor dismisses the evidence.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Probability Argument</h3>
                {para("The mathematician Peter Stoner, in his book <em>Science Speaks</em>, attempted to quantify the improbability of one person fulfilling multiple messianic prophecies by chance. Taking eight prophecies, he estimated the combined probability at roughly 1 in 10 to the 17th power &mdash; a number he illustrated by imagining the state of Texas buried two feet deep in silver dollars, one of them marked, and a blindfolded person picking the marked coin on the first try. The illustration is memorable, and it makes a real point: the convergence of many independent, specific predictions on a single life is not what we would expect from coincidence. <strong>The proper limit:</strong> such calculations depend heavily on the probability estimates assigned to each prophecy, which are necessarily subjective, so the argument should be offered as a vivid illustration of improbability rather than a rigorous mathematical proof. Its force is cumulative and suggestive, not airtight.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Objection 1: &ldquo;The prophecies were written after the events&rdquo;</h3>
                {para("Some suggest the prophecies are really <em>vaticinium ex eventu</em> &mdash; predictions composed after the fact. The historical evidence answers this decisively. The Hebrew Scriptures were translated into Greek (the Septuagint) beginning in the third century B.C., centuries before Jesus, fixing the text long in advance. The Dead Sea Scrolls, discovered at Qumran and dating from roughly the third century B.C. to the first century A.D., include a complete scroll of Isaiah &mdash; containing chapter 53 in full &mdash; demonstrably pre-Christian. Whatever one concludes about fulfillment, the prophecies themselves were unquestionably on the page before Jesus was born.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Objection 2: &ldquo;Jesus simply engineered the fulfillments&rdquo;</h3>
                {para("Could Jesus have deliberately arranged to fulfill the prophecies? For a handful, perhaps a determined person might contrive a fulfillment &mdash; riding into Jerusalem on a donkey (Zechariah 9:9), for instance. But the great majority lay entirely outside any individual's control. No one chooses the place of his birth (Bethlehem), the lineage of his ancestors (the line of David), the era in which he is born (Daniel's timeframe), the actions of his betrayer (thirty pieces of silver), the conduct of executioners casting lots for his clothing, or &mdash; most obviously &mdash; his own resurrection from the dead. The objection collapses precisely at the points where the evidence is strongest.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Objection 3: &ldquo;The prophecies are too vague to count&rdquo;</h3>
                {para("It is true that some passages cited as messianic are general, and responsible apologetics distinguishes the specific from the diffuse. But many of the central prophecies are strikingly precise: a named town (Micah 5:2), a named price of betrayal (Zechariah 11:12), the piercing of hands and feet and the casting of lots for garments (Psalm 22:16-18) written centuries before crucifixion was a known practice, and the substitutionary suffering of Isaiah 53. The case does not depend on the vaguest texts but on the convergence of the clearest ones, read in their plain sense.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Cumulative Case</h3>
                {para("The strength of the argument from prophecy lies not in any single text but in the <em>convergence</em> of many. A skeptic might explain away one fulfillment as coincidence, another as later editing, another as deliberate arrangement. But these explanations cannot all be true at once, and they grow increasingly strained as the prophecies multiply across lineage, birthplace, timing, mission, betrayal, death, and resurrection &mdash; many of them entirely beyond human contrivance. Blaise Pascal, the brilliant mathematician and believer, regarded the prophecies as among the strongest evidences for the faith: &ldquo;The greatest of the proofs of Jesus Christ are the prophecies.&rdquo; Taken together, they form a cumulative case that has persuaded thoughtful people for two thousand years.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("From Evidence to Worship")}
            {para("The prophecies are not merely an argument to win but a reality to live in. Here are four ways their truth presses into the life of faith, each with a prayer prompt.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Anchor Your Faith in a God Who Keeps His Word</h3>
                {para("The fulfilled prophecies are a track record. The God who promised a Messiah for thousands of years and delivered him precisely as foretold is the same God who has promised to finish the good work he began in you (Philippians 1:6) and to return for his people (Acts 1:11). Every kept promise of the past is collateral for every promise still outstanding. <strong>Prayer prompt:</strong> &ldquo;Faithful God, you kept your ancient word and sent your Son exactly as you said. When I am tempted to doubt your promises to me, remind me that you have never once failed to keep your word.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Read the Old Testament as a Book About Jesus</h3>
                {para("Jesus taught his disciples to find him in &ldquo;Moses and all the Prophets&rdquo; and the Psalms (Luke 24:27, 44). The Old Testament is not a dusty prelude but a four-thousand-year build toward Christ &mdash; every sacrifice, every king, every prophet pointing forward. Reading it this way transforms it from a collection of ancient stories into a single unfolding revelation. <strong>Prayer prompt:</strong> &ldquo;Lord Jesus, open my eyes as you opened the eyes of the disciples on the Emmaus road, that I may see you in all the Scriptures and have my heart burn within me.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Share the Reason for Your Hope</h3>
                {para("Peter calls believers to &ldquo;always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you, yet do it with gentleness and respect&rdquo; (1 Peter 3:15). The prophecies give you something concrete and compelling to share &mdash; not a leap in the dark but a faith with evidence. Philip used Isaiah 53 to lead a stranger to Christ (Acts 8); you can do the same. <strong>Prayer prompt:</strong> &ldquo;Father, give me both the knowledge and the gentleness to share the hope I have found, that others may see in Jesus the Messiah the Scriptures promised.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Worship the Lamb Who Was Foretold and Slain</h3>
                {para("Behind every prophecy stands not merely a clever prediction but a costly love. The Messiah was foretold as a suffering servant, pierced for our transgressions, because from before the foundation of the world God purposed to redeem us at the price of his Son (Revelation 13:8; 1 Peter 1:19-20). The evidence should not end in a notebook but on our knees. <strong>Prayer prompt:</strong> &ldquo;Lamb of God, foretold by the prophets and slain for my sins, I worship you. Thank you that my salvation was no accident but your eternal plan of love. Receive my whole life in grateful praise.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Word</h3>
                {para("&ldquo;These are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name&rdquo; (John 20:31). The prophecies were never given merely to satisfy curiosity, but to lead us to faith and through faith to life. The portrait painted in advance has stepped off the page. His name is Jesus, and he is the Messiah the Scriptures promised.")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
