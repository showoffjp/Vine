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
  "Overview",
  "Gideon's Army",
  "The Three Hundred",
  "Torches and Trumpets",
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
    id: "Overview",
    heading: "Judges 7 &mdash; God&rsquo;s Glory Through Human Weakness",
    reference: "Judges 7:1&ndash;25",
    paragraphs: [
      "Judges 7 stands as one of the most dramatically structured chapters in the Old Testament, a masterpiece of narrative theology in which every element of the story makes the same theological point: victory belongs to God, and he deliberately works in ways that make human strength irrelevant so that his glory cannot be shared with anyone else. The chapter takes Gideon from the command of a 32,000-man army to the leadership of a force of 300 men chosen by the most counter-intuitive selection method in military history, and then sends that tiny band armed with trumpets, empty jars, and torches against an army as numerous as locusts. The result is a rout so total that Israel can only interpret it as the direct intervention of their God.",
      "To read Judges 7 well, it must be read in the context of the whole Gideon narrative (Judges 6&ndash;8). Gideon is not a conventional hero. He is introduced threshing wheat in a winepress &mdash; hiding from the Midianites, not confronting them. The angel of the Lord addresses him as &ldquo;mighty warrior,&rdquo; and the title must be heard as ironic: Gideon immediately objects that he is from the weakest clan in Manasseh and the least in his father&rsquo;s house (6:15). He asks for a sign, and then asks for another sign, and even on the night before the battle he is fearful enough that God graciously offers him yet one more encouragement through the overheard dream of a Midianite soldier (7:9&ndash;14). Gideon is a portrait of faith functioning in fear &mdash; never without doubt, always needing reassurance, but ultimately obedient.",
      "The Midianite oppression that Judges 7 resolves was severe. For seven years the Midianites and their allies had swarmed over the land of Israel at harvest time, destroying crops, livestock, and livelihoods, so that Israel was brought very low. They camped in the Valley of Jezreel with their camels &ldquo;without number, as the sand that is on the seashore&rdquo; (7:12). Against this overwhelming force, Gideon gathers an army that begins at 32,000 men &mdash; itself dwarfed by the enemy &mdash; and which God then reduces in two dramatic stages to just 300.",
      "The theological heart of the chapter is stated explicitly by God himself. &ldquo;The people with you are too many for me to give the Midianites into their hand, lest Israel boast over me, saying, &lsquo;My own hand has saved me&rsquo;&rdquo; (7:2). This is the interpretive key to everything that follows. God is not interested in a fair fight. He is interested in a testimony that cannot be distorted: when 300 men rout an army of tens of thousands using musical instruments and clay pots, there is no human explanation available. Only God gets the credit.",
      "The chapter unfolds in a careful three-act structure. In the first act (vv. 1&ndash;8), God twice reduces Gideon&rsquo;s army: first by sending home the fearful (22,000 depart, leaving 10,000), then by the water test (9,700 more depart, leaving 300). In the second act (vv. 9&ndash;15), God encourages the fearful Gideon through the overheard dream of a Midianite, and Gideon worships. In the third act (vv. 16&ndash;25), the three hundred execute the night raid with their trumpets, jars, and torches, the Midianite camp falls into chaos, and the army of Israel pursues the fleeing enemy with the tribes of Ephraim joining in. The chapter ends with the capture and killing of the Midianite princes Oreb and Zeeb, their heads brought to Gideon across the Jordan.",
      "For the Christian reader, Judges 7 is not primarily a military history but a study in the theology of divine power working through human weakness. It anticipates Paul&rsquo;s words in 1 Corinthians 1:27&ndash;29: &ldquo;God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong; God chose what is low and despised in the world, even things that are not, to bring to nothing things that are, so that no human being might boast in the presence of God.&rdquo; The 300 men with their jars and torches are a type of the apostolic mission: treasure in clay jars, so that the surpassing power may be seen to belong to God and not to us (2 Cor 4:7).",
    ],
  },
  {
    id: "Gideon's Army",
    heading: "Gideon&rsquo;s Army &mdash; Too Many for God to Use",
    reference: "Judges 7:1&ndash;8",
    paragraphs: [
      "The morning of the battle dawns with Gideon&rsquo;s 32,000 men camped at the spring of Harod, while the Midianite army lies in the valley below &ldquo;as numerous as locusts&rdquo; (v. 12). By any military calculation, Gideon&rsquo;s force is already at a severe disadvantage. But God&rsquo;s assessment of the situation is not a military one. The problem is not that Gideon has too few men &mdash; the problem is that he has too many. &ldquo;The people with you are too many for me to give the Midianites into their hand, lest Israel boast over me, saying, &lsquo;My own hand has saved me.&rsquo;&rdquo; The risk God is worried about is theological, not tactical.",
      "The word God uses is revealing: &ldquo;lest Israel boast over me&rdquo; &mdash; or in some translations &ldquo;glorify themselves against me.&rdquo; The Hebrew verb (&lsquo;pa&rsquo;ar&rsquo;) carries the sense of claiming honor that belongs to another. God is not willing to let Israel steal his glory. In the ancient world, military victory was proof of divine favor &mdash; the god of the victorious nation was the greater god. If Israel won with 32,000 men, even the Israelites themselves might conclude that they won because they were stronger, braver, better soldiers. God will not permit that conclusion to be available.",
      "The first reduction is carried out through a surprising proclamation: anyone who is afraid may turn back. Moses had established a similar principle in Deuteronomy 20:8 &mdash; the fearful are to go home lest they make their brothers afraid. What is striking here is both the scale and the specificity. Twenty-two thousand men &mdash; more than two-thirds of the army &mdash; turn around and go home. The majority of Gideon&rsquo;s force is fearful. This is not presented as a shameful failure; it is simply fact. Fear is the realistic response to the situation, and God&rsquo;s instruction honors that realism while also demonstrating that the battle will not be won by courage.",
      "The remaining 10,000 might seem like a manageable fighting force &mdash; still a substantial army. But God says the number is still too great. &ldquo;Take them down to the water, and I will test them for you there&rdquo; (v. 4). The water test that follows is one of the most discussed passages in the book of Judges, partly because its purpose is not obvious. God tells Gideon to separate those who lap the water with their tongues like a dog from those who kneel down to drink. The lappers &mdash; 300 men &mdash; are kept; the kneelers &mdash; 9,700 &mdash; are sent home.",
      "Commentators have long debated the significance of the distinction. Some suggest the lappers were more alert and vigilant, cupping water with their hands while keeping their eyes up &mdash; marking them as better soldiers. Others argue that the method of selection is deliberately arbitrary, chosen specifically because it has no natural military merit, so that the selection cannot be explained by any quality in the chosen men. This second interpretation seems more consistent with the chapter&rsquo;s overall theology: God is not picking the best 300 soldiers; he is picking 300 soldiers by a criterion that makes their selection obviously divine. The point of the test is that 300 obscure men will do what 32,000 could not, precisely because the outcome will be impossible to attribute to human quality.",
      "With the army reduced to 300, God gives his promise: &ldquo;With the 300 men who lapped I will save you and give the Midianites into your hand, and let all the others go every man to his home&rdquo; (v. 7). The grammar is emphatic: I will save you. Not your 300 men. Not your strategy. Not your weapons. I will save you. The instruments God uses will be laughably inadequate by any military standard, which is precisely the point. When the battle is over, the question &ldquo;who won?&rdquo; will have only one defensible answer.",
      "The reduction of Gideon&rsquo;s army is a pattern that recurs throughout the Bible. Moses is sent alone with a staff to confront Pharaoh. David goes against Goliath with a sling and five smooth stones. Elijah stands alone against 450 prophets of Baal on Carmel. The disciples are sent out two by two with nothing &mdash; no bag, no bread, no money. The apostles turn the world upside down without political power, military might, or social prestige. The pattern is consistent: God works most clearly through those who have been stripped of the human resources that might obscure the source of the victory. To be &lsquo;too many&rsquo; in God&rsquo;s army is to be in danger of taking credit that belongs to him alone.",
    ],
  },
  {
    id: "The Three Hundred",
    heading: "The Three Hundred &mdash; Fear, the Dream, and Worship",
    reference: "Judges 7:9&ndash;15",
    paragraphs: [
      "Between the reduction of the army and the night attack, Luke inserts a brief but theologically rich interlude: God&rsquo;s gracious provision for Gideon&rsquo;s fear. &ldquo;That same night the Lord said to him, &lsquo;Arise, go down against the camp, for I have given it into your hand. But if you are afraid to go down, go down to the camp with Purah your servant and hear what they say, and afterward your hands shall be strengthened to go down against the camp&rsquo;&rdquo; (vv. 9&ndash;11). God knows Gideon is still afraid. His response is not rebuke but provision: here is what you need to shore up your courage.",
      "Gideon goes down with his servant Purah to the outposts of the enemy camp. What he encounters is remarkable. He arrives in time to hear one soldier telling another his dream: a round loaf of barley bread tumbles into the Midianite camp and strikes a tent so hard that the tent collapses and lies flat. The other soldier interprets the dream with certainty: &ldquo;This is no other than the sword of Gideon the son of Joash, a man of Israel; God has given into his hand Midian and all the camp&rdquo; (v. 14). The enemy is already terrified. God has sent a dream to the Midianites that interprets itself as the prophecy of their defeat at the hand of Israel&rsquo;s judge.",
      "The dream image is arresting in its symbolism. A barley loaf &mdash; the food of the poor, the subsistence crop &mdash; tumbles into the most powerful military camp in the region and flattens it. Barley was the grain of the weak; wheat was the grain of the strong. Barley bread was what the desperate ate. God is going to use the most impoverished, most vulnerable, most insignificant weapon imaginable to flatten the tent of Midian. The enemy soldier understands this perfectly, and his understanding is itself a work of God: the Midianites are already broken in their hearts before the battle begins.",
      "Gideon&rsquo;s response to the overheard dream is immediate and beautiful: &ldquo;As soon as Gideon heard the telling of the dream and its interpretation, he worshiped&rdquo; (v. 15). This detail is easy to pass over, but it is significant. Before he returns to his camp, before he gives the order to attack, before he makes any military preparation &mdash; Gideon worships. He bows before the God who has already given the victory. This is the posture of faith: acting from a prior reality, not merely toward a hoped-for outcome. Gideon does not worship after the battle is won; he worships when he hears the word that guarantees it.",
      "After worshipping, Gideon returns to his camp and calls his men to action with words that carry the same conviction: &ldquo;Arise, for the Lord has given the Midianite camp into your hand&rdquo; (v. 15). Not &lsquo;arise, let us try our best.&rsquo; Not &lsquo;arise, and may God be with us.&rsquo; The Lord has given. The tense is a prophetic perfect, the future so certain that it is spoken as accomplished. This is the voice of genuine faith under God&rsquo;s word: not bravado, not optimism, but the confidence that comes from having heard and believed what God has said.",
      "The three hundred men chosen by the water test are never described in any other way. We know nothing about them &mdash; their names, their clans, their prior exploits. They are simply the 300 who lapped. Their identity in the narrative is entirely defined by the fact that God chose them. This anonymity is part of the point. The names that will be remembered from Judges 7 are Gideon, Purah, Oreb, and Zeeb &mdash; the judge and his enemies. The 300 are the faceless instruments of a victory that belongs to God. Their lack of individual distinction is a feature, not an oversight: the story is not about their skill but about his power.",
      "The drama of Judges 7:9&ndash;15 is a study in the pastoral care of God for a fearful leader. God does not demand that Gideon manufacture courage from some internal resource. He does not rebuke him for needing encouragement. He provides the encouragement Gideon needs in the form Gideon can receive &mdash; the overheard conversation of an enemy soldier who has already been given a dream that amounts to a sermon on God&rsquo;s faithfulness. This is the God who knows our frame, who remembers that we are dust, who stoops to meet us in our weakness. The same God who strips away the army of 32,000 also sends his frightened judge to hear a Midianite&rsquo;s dream. He is as tender in his provision as he is sovereign in his plan.",
    ],
  },
  {
    id: "Torches and Trumpets",
    heading: "Torches and Trumpets &mdash; The Night the Camp Collapsed",
    reference: "Judges 7:16&ndash;25",
    paragraphs: [
      "The battle plan that Gideon receives from God is not a military strategy in any conventional sense. He divides the 300 into three companies and equips each man with a trumpet, an empty jar, and a torch inside the jar. There are no swords mentioned &mdash; or rather, the swords appear only in the Midianites&rsquo; hands, turned against each other in the confusion. The weapons of Israel&rsquo;s army are noise, light, and clay.",
      "The attack is timed for the beginning of the middle watch &mdash; around 10 p.m. by ancient reckoning &mdash; when the first watch had just changed and the sleepy sentries of the second watch were barely settled at their posts. Gideon positions his three companies around the perimeter of the camp. On his signal, they all blow their trumpets, break their jars, hold up their torches, and shout: &ldquo;A sword for the Lord and for Gideon!&rdquo; (v. 20). The sound of 300 trumpets erupting simultaneously around the camp, the sudden blaze of 300 torches appearing out of the darkness, and the roar of the war cry combine to produce a catastrophic panic.",
      "The result is immediate and total. &ldquo;The Lord set every man&rsquo;s sword against his comrade and against all the army&rdquo; (v. 22). The Midianite army turns its weapons on itself. In the darkness and the confusion, unable to distinguish friend from foe, men begin killing the soldiers standing next to them. The army that had oppressed Israel for seven years, that was as numerous as locusts, that lay in the valley &ldquo;like sand on the seashore in abundance&rdquo; (v. 12) &mdash; this army dissolves into fratricidal chaos and flees toward the Jordan. Israel did not need to fight. The Lord fought for them by turning their enemy against itself.",
      "The image of the torches inside the clay jars has captured the imagination of biblical interpreters across the centuries, and rightly so. The torch is hidden until the moment of release; the cracking open of the jar is what lets the light out. The three hundred men carry within them a light that the clay conceals until the appointed moment. Paul seems to draw on this image in 2 Corinthians 4:7: &ldquo;But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.&rdquo; The clay jar is the human vessel &mdash; fragile, ordinary, unimpressive. The treasure hidden within is the light of the gospel of the glory of God. The breaking of the jar &mdash; the suffering, the weakness, the death of self &mdash; is what releases the light.",
      "The trumpets carry their own theology. In Israel&rsquo;s liturgical and military tradition, the trumpet was the instrument of the Lord&rsquo;s presence and power. The ram&rsquo;s horn blown at Sinai marked the descent of God&rsquo;s glory. The trumpets blown at Jericho brought down the walls &mdash; it was the Lord&rsquo;s battle, not Joshua&rsquo;s engineering. The trumpet announces: God is here. God is acting. God is the one who fights. When 300 men blow 300 trumpets around the Midianite camp at midnight, the declaration is theological: the Lord of hosts is in the field. The enemy falls not because of the sound itself but because the God whose presence the trumpets announce has already delivered them into Israel&rsquo;s hand.",
      "After the rout begins, the rest of Israel rallies to pursue. Ephraim is summoned and seizes the water crossings at the Jordan so the Midianites cannot escape (v. 24) &mdash; a military move that cuts off the retreat. The Ephraimites capture the two Midianite princes, Oreb and Zeeb, and kill them at the places that will forever bear the names of this day: the Rock of Oreb and the Winepress of Zeeb. Their heads are brought to Gideon across the Jordan as trophies of a victory that had no natural explanation.",
      "The shout of Gideon&rsquo;s men deserves special attention: &ldquo;A sword for the Lord and for Gideon!&rdquo; (v. 20). Note the order. The sword belongs first to the Lord. Gideon&rsquo;s name is attached as the servant through whom the Lord acts, not as the independent hero who wins the day. This is the theological grammar of all genuine ministry and mission: the Lord acts, and his servants act with him and under his authority. Gideon is not the lead actor; he is the instrument. The sword is the Lord&rsquo;s. The glory belongs to God alone.",
      "The chapter closes with victory, pursuit, and the establishment of memorial place names that would keep the story alive in Israel&rsquo;s memory for generations. Judges 7 is a chapter designed to be retold &mdash; to be told to children who would ask, &lsquo;How did Israel defeat the Midianites?&rsquo; And the answer would have to be: with trumpets and empty jars and torches, in the middle of the night, with 300 men against an army without number. With God. Only God. That answer, rehearsed across generations, is the chapter&rsquo;s lasting gift: the confidence that the one who gave the victory then is the same God who is present with his people now, whose resources are not diminished by the smallness of the instruments through which he chooses to work.",
    ],
  },
];

const videoItems = [
  { videoId: "JtHJF4gIRaM", title: "Gideon and the 300 - Judges 7 Explained" },
  { videoId: "qmXyDeOqIKs", title: "BibleProject - Overview of Judges" },
  { videoId: "4iZ5QLBX3vE", title: "Gideon's Three Hundred and the Glory of God" },
  { videoId: "Kp8bNcX7Yc0", title: "Torches, Trumpets, and Clay Jars - Judges 7 Sermon" },
];

export default function Judges7GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Judges 7 &mdash; Gideon&rsquo;s Three Hundred
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God reduces Gideon&rsquo;s army from 32,000 to 300, then routes an army without number through trumpets, clay jars, and torches &mdash; so that when the victory comes, only one conclusion is possible: the Lord has saved his people.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2
                style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: currentSection.heading }}
              />
            </div>
            <div
              style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: currentSection.reference }}
            />
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Key Themes in Judges 7</h3>
          <ul style={{ margin: 0, padding: "0 0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "God deliberately reduces human resources so his glory cannot be claimed by human strength",
              "Fear is not disqualifying &mdash; God accommodates Gideon&rsquo;s weakness with patient encouragement",
              "The water test selects the 300 by a criterion that has no natural military merit",
              "Worship precedes action: Gideon bows before God before giving the order to attack",
              "The Lord set every man&rsquo;s sword against his comrade &mdash; the victory was entirely divine",
              "Torches in clay jars: treasure in jars of clay, so the power belongs to God not us",
              "The trumpets announce the presence of the Lord of hosts in the field",
              "When God&rsquo;s people rely on his strength rather than their numbers, nothing is impossible",
            ].map((item, i) => (
              <li
                key={i}
                style={{ color: MUTED, fontSize: "0.98rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        </div>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
            Explore Judges 7 through visual teaching on Gideon, the 300, the water test, and the night the Midianite camp collapsed.
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

        <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Lest Israel Boast Over Me</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Judges 7 does not celebrate the courage of Gideon or the cleverness of the three hundred. It celebrates the faithfulness of the God who strips away every human resource until only he remains &mdash; and then wins the battle with trumpets and clay jars in the middle of the night. When the fight is over and the enemy is routed, the only explanation available is the one that was true all along: the Lord saved his people. That is still the only explanation available to the church, and it is still enough.
          </p>
        </div>
      </main>
    </div>
  );
}
