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
  "Fire from Heaven",
  "God Answers Solomon",
  "If My People Will Pray",
  "Covenant Warnings",
  "Application",
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
    id: "Overview",
    heading: "Overview of 2 Chronicles 7",
    reference: "2 Chronicles 7:1&ndash;22",
    paragraphs: [
      "Second Chronicles 7 is one of the great turning points of the Hebrew scriptures. It records the divine response to Solomon&rsquo;s prayer of dedication in the preceding chapter &mdash; a prayer that had asked the Lord to hear the supplications of his people whenever they turned to this house, whether in times of drought, defeat, plague, or exile. Chapter 7 is God&rsquo;s answer: he has heard, he will hear, and here is the covenant arrangement under which that hearing will operate. No chapter in the Old Testament speaks more directly to the conditions and promises that govern the relationship between God and his people.",
      "The chapter opens with a scene of spectacular divine confirmation. Solomon has finished praying and as he rises, fire descends from heaven and consumes the burnt offering and the sacrifices, while the glory of the Lord fills the temple so completely that the priests cannot even enter. The people, seeing the fire and the glory, bow down on the pavement with their faces to the ground and worship, saying &ldquo;For he is good, for his steadfast love endures forever&rdquo; (7:3). This is not a private or quiet moment; it is a public, visible, overwhelming demonstration that the Lord has accepted Solomon&rsquo;s work and has taken up residence in the house prepared for his name.",
      "A great festival follows &mdash; fourteen days in all &mdash; during which twenty-two thousand oxen and one hundred and twenty thousand sheep are offered, and the king and all the people dedicate the house of God. The scale of the celebration reflects the magnitude of the moment: the temple has been completed, the ark has been installed, the glory has descended, and the nation is gathered before God in an act of unified and joyful worship. The chronicler notes that the people go back to their tents &ldquo;joyful and glad of heart for the goodness that the Lord had shown to David and to Solomon and to Israel his people&rdquo; (7:10).",
      "Then the pivot of the chapter arrives: the night appearance of God to Solomon. The celebration is over, the crowd has gone home, and Solomon is alone when the Lord appears to him a second time &mdash; as he had appeared at Gibeon at the beginning of his reign. What follows is not only a confirmation of the temple dedication but a comprehensive statement of the covenantal principles that will govern the life of Solomon&rsquo;s kingdom and, by extension, the life of every community of faith that puts itself under the lordship of this God.",
      "The theological center of the chapter &mdash; and arguably of the entire book of Chronicles &mdash; is verse 14: &ldquo;If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.&rdquo; This verse has become perhaps the most quoted prayer promise in all of Christian tradition. It sets out four conditions &mdash; humbling, praying, seeking, turning &mdash; and three divine responses &mdash; hearing, forgiving, healing. It is a verse of breathtaking scope, operating at the level of entire nations and entire peoples.",
      "The chapter closes with a solemn warning. After the heights of promise in verse 14, God turns to the darker possibility: what if Israel abandons the Lord? If they go after other gods, serve them, and worship them, then the Lord will pluck them up from the land he has given them, cast away the house he has consecrated for his name, and make it a proverb and a byword among all peoples. The glory that has just descended so magnificently is not unconditional. The covenant is bilateral: God will keep his promises if Israel keeps its obligations. The same chapter that gives the most glorious promise of healing also contains the most solemn warning of exile.",
    ],
  },
  {
    id: "Fire from Heaven",
    heading: "Fire from Heaven",
    reference: "2 Chronicles 7:1&ndash;3",
    paragraphs: [
      "When Solomon finished his prayer of dedication, something extraordinary happened: &ldquo;fire came down from heaven and consumed the burnt offering and the sacrifices, and the glory of the Lord filled the temple&rdquo; (7:1). The conjunction of heavenly fire and divine glory is the highest form of divine approval in the Old Testament. It places the dedication of Solomon&rsquo;s temple in the same category as the most dramatic moments of Israel&rsquo;s history &mdash; the fire on Sinai, the fire that consumed Elijah&rsquo;s sacrifice on Carmel, the fire that appeared to Moses in the burning bush.",
      "The fire descending from heaven carries a specific theological significance: it demonstrates that the offering is being received by God himself. Israel did not light this fire; no human hand kindled it. The burning of the sacrifice by divine fire signals that the transaction between the worshiper and God has been completed on God&rsquo;s terms, not merely by human initiative. The flame descending from above is the visible signature of divine acceptance. When God himself lights the fire, the worshiper knows the offering has reached its destination.",
      "At the same time, the glory of the Lord fills the temple. This is the second filling of the temple by divine glory in the Chronicles narrative &mdash; the first occurred when the ark was brought in and the priests could not stand to minister (5:13&ndash;14). The glory &mdash; the kabod of the Lord, the weighty, luminous, overwhelming presence of God himself &mdash; takes up residence in the house that Solomon has built. This is the fulfillment of everything the building project was about. The temple was not built for human comfort or national prestige; it was built as a dwelling for the Name of the Lord, and now the Lord himself has moved in.",
      "The response of the people is immediate and instinctive: &ldquo;When all the people of Israel saw the fire come down and the glory of the Lord on the temple, they bowed down with their faces to the ground on the pavement and worshiped and gave thanks to the Lord, saying, &lsquo;For he is good, for his steadfast love endures forever&rsquo;&rdquo; (7:3). The prostration is total &mdash; faces to the ground &mdash; the posture of absolute submission before absolute majesty. The words they speak are perhaps the oldest liturgical formula in Israel&rsquo;s tradition, the refrain that ran through the great Hallel psalms.",
      "The pairing of these two elements &mdash; fire from above and prostration below &mdash; tells a story about authentic worship. The fire does not come because the people have worked themselves into a state of religious enthusiasm; the people fall on their faces because the fire has come. The sequence matters: the initiative is God&rsquo;s, and the human response follows the divine action. This is the pattern of genuine worship throughout scripture &mdash; not the ascent of human effort toward a distant God, but the descent of divine presence that evokes the only appropriate human response, which is to fall down and acknowledge who he is.",
      "The phrase &ldquo;his steadfast love endures forever&rdquo; &mdash; hesed olam in the Hebrew &mdash; is the theological affirmation that makes sense of everything that has just happened. The fire and the glory are not arbitrary demonstrations of power; they are expressions of God&rsquo;s covenant faithfulness, his hesed, his steadfast love for the people he has chosen. The God who sends fire from heaven to accept this sacrifice is the same God who made promises to Abraham, Isaac, and Jacob, and who brought their descendants out of Egypt. His love for his people is not a momentary emotion; it is an eternal commitment, as durable as his own character.",
    ],
  },
  {
    id: "God Answers Solomon",
    heading: "God Answers Solomon",
    reference: "2 Chronicles 7:12&ndash;16",
    paragraphs: [
      "After fourteen days of celebration and sacrifice, when the people have returned to their homes and Solomon is left in the silence of the completed and consecrated temple, the Lord appears to him at night. &ldquo;I have heard your prayer,&rdquo; God says, &ldquo;and have chosen this place for myself as a house of sacrifice&rdquo; (7:12). These words are the direct divine response to Solomon&rsquo;s long prayer in chapter 6, where he had repeatedly asked the Lord to hear the prayers offered toward this house. God&rsquo;s first word is one of confirmation: he has listened, he has chosen, he has accepted.",
      "The designation of the temple as &ldquo;a house of sacrifice&rdquo; is theologically significant. Solomon had built a house for the Name of the Lord &mdash; a dwelling for the divine presence. But God&rsquo;s description of what the house is for emphasizes the sacrificial system, the mechanism by which Israel&rsquo;s covenant relationship with God would be maintained and restored. The temple is not primarily a monument or a meeting hall; it is the place where the blood of sacrifice is offered, where atonement is made, where the broken relationship between a holy God and a sinful people is addressed. This is what God has chosen and what he is pleased to inhabit.",
      "God then enumerates the range of circumstances in which his hearing will be available. In verse 13 he describes three disasters &mdash; drought, locust, plague &mdash; that might afflict the land. These were the classic forms of covenant curse in the ancient world, the signs that something had gone wrong in the relationship between God and his people. The fact that God names them here, just after accepting the temple dedication, signals that their possibility is not excluded even in this hour of triumph. The temple was built not for a people who would always walk in the ways of the Lord, but for a people who would sometimes fail and would need a place to return to.",
      "The promise of divine attention toward this place is expressed in verse 15 with striking intimacy: &ldquo;Now my eyes will be open and my ears attentive to the prayer that is made in this place.&rdquo; God does not merely agree to process requests made at the temple; he pledges to attend to them, to be actively focused on them. The image of open eyes and attentive ears is drawn from the language of personal care and relationship. God is not a distant administrator who occasionally processes petitions from the people; he is a covenant Lord who keeps his eyes and ears turned toward the place where his people come to meet him.",
      "Verse 16 brings the promise to its climax with a note of divine election and permanence: &ldquo;For now I have chosen and consecrated this house that my name may be there forever. My eyes and my heart will be there for all time.&rdquo; The word &ldquo;forever&rdquo; and the phrase &ldquo;for all time&rdquo; give the promise a scope that reaches beyond the specific building in Jerusalem. For the Christian reader, this promise finds its ultimate fulfillment not in a structure of stone and cedar but in Jesus Christ, who declared himself to be greater than the temple (Matthew 12:6) and in whom &ldquo;all the fullness of God was pleased to dwell&rdquo; (Colossians 1:19). The place where God&rsquo;s name dwells forever is ultimately a person, not a building.",
      "The specific mention of God&rsquo;s &ldquo;heart&rdquo; being in this place is extraordinary. The divine heart &mdash; the center of God&rsquo;s affections and commitment &mdash; is pledged to the place of prayer. This is covenant language at its most intimate: God is not merely administratively present at the temple, not merely processing transactions through a religious system. He is emotionally and relationally invested in the place where his people come to seek him. The God who has sent fire from heaven and filled the temple with his glory is the God whose heart is engaged for his people&rsquo;s wellbeing and their return when they stray.",
    ],
  },
  {
    id: "If My People Will Pray",
    heading: "If My People Will Pray",
    reference: "2 Chronicles 7:14",
    paragraphs: [
      "Second Chronicles 7:14 has become the most widely quoted and applied Old Testament promise in the prayer traditions of the Christian church: &ldquo;If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.&rdquo; To understand the verse rightly it is essential to read it in its context: it is not a general promise to religious people; it is a specific covenant promise from God to the people who bear his name, issued immediately after the most spectacular demonstration of divine presence in Israel&rsquo;s history.",
      "The verse is structured around four conditions and three responses. The four conditions &mdash; humbling, praying, seeking, turning &mdash; are not a sequential checklist to be worked through but a description of the posture of genuine repentance and return to God. To &ldquo;humble themselves&rdquo; is to abandon the self-sufficiency and pride that leads people away from dependence on God. To &ldquo;pray&rdquo; is to turn the voice toward God rather than toward human solutions. To &ldquo;seek my face&rdquo; is to desire God himself, not merely his benefits. To &ldquo;turn from their wicked ways&rdquo; is to make the internal turning outwardly visible in changed behavior. All four belong together.",
      "The three divine responses &mdash; hearing, forgiving, healing &mdash; are given in ascending order of significance. The first response is that God will &ldquo;hear from heaven.&rdquo; This is the basic requirement: that prayer reaches its destination. The God who made heaven and earth has committed himself to attend to the prayers of the people who call on his name. The second response is forgiveness of sin &mdash; the removal of the barrier that stands between God and his people and that, in the covenant framework, is the cause of the disasters being prayed over. The third response &mdash; healing the land &mdash; is the practical restoration that follows from the restored relationship. Drought, plague, and locust give way to rain and harvest when the covenant is renewed.",
      "The phrase &ldquo;my people who are called by my name&rdquo; deserves particular attention. It defines the recipients of the promise not by their ethnic or national identity but by the divine claim upon them. They are people who bear God&rsquo;s name &mdash; who are identified as his. This is a covenantal category, not a biological one. It is precisely this identification with the name of God that creates the responsibility to live in accordance with his character, and it is the violation of that responsibility that requires the turning and the humbling and the seeking that the verse describes.",
      "The word translated &ldquo;heal&rdquo; (&lsquo;rapha&rsquo;) is the same word used of the healing of physical illness throughout the Old Testament. Its application here to &ldquo;the land&rdquo; is striking: the land itself is sick, suffering from the consequences of human sin, and in need of divine healing. This is consistent with the biblical understanding that human sin and the health of the created order are deeply connected. The land suffers drought and plague not as random natural events but as symptoms of a disrupted covenant relationship. When the covenant is renewed, the land is healed.",
      "Christians have rightly applied this verse to their own communities and nations, reading themselves as the people who bear God&rsquo;s name through their identification with Jesus Christ. The conditions remain the same: humility, prayer, seeking God&rsquo;s face, and genuine repentance from what is wicked. The promise remains the same: God hears, God forgives, God heals. What changes in the New Testament context is the ground of the promise &mdash; it now rests not on the Mosaic covenant mediated through the temple in Jerusalem, but on the new covenant mediated through the blood of Christ, who is both the temple and the high priest and the sacrifice.",
    ],
  },
  {
    id: "Covenant Warnings",
    heading: "Covenant Warnings",
    reference: "2 Chronicles 7:17&ndash;22",
    paragraphs: [
      "The chapter that opens with fire from heaven and closes with God&rsquo;s pledge to keep his eyes and heart on the temple does not end on a note of unqualified triumph. After the great promise of verse 14, and after confirming Solomon personally in verses 17 and 18 that his dynasty will be established if he walks in the ways of his father David, God turns to the dark possibility: what will happen if Israel and Solomon abandon the covenant? The answer is given with the same clarity and directness as the promise: exile, destruction, and disgrace.",
      "The conditional structure of God&rsquo;s promise to Solomon in verse 17 is instructive: &ldquo;And as for you, if you will walk before me as David your father walked, doing according to all that I have commanded you and keeping my statutes and my rules, then I will establish your royal throne.&rdquo; The &ldquo;if&rdquo; is not an expression of divine uncertainty; it is a clarification of the covenantal terms. God&rsquo;s faithfulness is absolute, but the benefits of that faithfulness flow through the channel of human obedience. David had been a man after God&rsquo;s own heart not because he was sinless, but because when he sinned he returned; his orientation was toward God.",
      "The warning in verses 19 through 22 is introduced with &ldquo;But if you turn aside and forsake my statutes and my commandments that I have set before you, and go and serve other gods and worship them, then I will pluck you up from my land that I have given you.&rdquo; The verb &ldquo;pluck up&rdquo; (&lsquo;nashal&rsquo;) is vivid and violent &mdash; it is used elsewhere of uprooting a deeply planted tree. The land that was given as an inheritance would be taken back. The promise of the land was never unconditional in the Mosaic covenant; it was conditioned on covenant faithfulness, and God here makes explicit that even Solomon&rsquo;s kingdom can be uprooted if it turns to other gods.",
      "The fate of the temple itself is included in the warning, and this is particularly solemn given the extraordinary events of chapters 5 through 7. The house that has just been filled with divine glory, that God has just declared to be the place of his eyes and heart, will be &ldquo;cast out of my sight, and will make it a proverb and a byword among all peoples&rdquo; (7:20). What is most holy can become most ruined. The temple is not a magical talisman that protects Israel regardless of how Israel lives; it is a house of covenant relationship, and a broken covenant makes the covenant house a ruin and a reproach.",
      "The question that will be asked about the ruined temple &mdash; &ldquo;Why has the Lord done thus to this land and to this house?&rdquo; (7:21) &mdash; and the answer given &mdash; &ldquo;Because they abandoned the Lord the God of their fathers who brought them out of the land of Egypt and laid hold on other gods and worshiped them and served them&rdquo; (7:22) &mdash; anticipate the actual events of 586 BC when Nebuchadnezzar destroyed the temple and the city. Chronicles was written after the exile, and its readers would have recognized in these words the exact pattern of their own history. The warning was not hypothetical; it had been fulfilled with terrible precision.",
      "The chronicler&rsquo;s inclusion of these warnings is itself a theological act of pastoral care for the post-exilic community. The people who had returned from Babylon needed to understand why the exile had happened, and they needed to understand what would prevent it from happening again. The answer is the same in both directions: the covenant is real, God is faithful, and the outcomes depend on whether the people who bear his name actually walk in his ways. The fire from heaven at the beginning of the chapter and the threat of exile at the end belong together; both are expressions of the same God who takes his covenant with total seriousness.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Chronicles 7 Today",
    reference: "2 Chronicles 7 &mdash; For the Life of the Church",
    paragraphs: [
      "Second Chronicles 7 speaks with remarkable directness to the contemporary church. The chapter was written for a community that had experienced the consequences of covenant failure &mdash; the Babylonian exile &mdash; and was trying to understand what fidelity to God would look like in the future. The church in every generation stands in a structurally similar position: it is a community that bears the name of God, that has been given extraordinary privileges of access to God through Christ, and that faces the perennial temptation to substitute the forms of religious life for the substance of genuine covenant faithfulness.",
      "The fire from heaven in verses 1 through 3 challenges every assumption that God is obligated to receive whatever worship his people offer. The fire came down because Solomon had built the temple according to the divine pattern, had prepared his own heart, and had prayed with genuine acknowledgment of who God is and what the people need. It was not a magic ritual that automatically produced divine presence; it was the culmination of years of obedience and preparation. The contemporary church does well to ask what kind of preparation and orientation toward God would create the conditions for the kind of encounter described here.",
      "The conditions of verse 14 &mdash; humility, prayer, seeking God&rsquo;s face, and turning from wicked ways &mdash; remain the constitutive marks of a genuinely repentant and renewed people of God. Humility means the recognition that the community&rsquo;s problems are not primarily the fault of the surrounding culture, or the government, or historical circumstances, but arise from the community&rsquo;s own failure to live in accordance with the covenant. Prayer means persistent, genuine engagement with God rather than the performance of religious routine. Seeking God&rsquo;s face means desiring God himself rather than his gifts or his protection. Turning from wicked ways means that repentance is not merely emotional but behavioral.",
      "The promise of healing in verse 14 is one of the most expansive in the Bible. It encompasses not only individual forgiveness but the restoration of the social and natural order &mdash; &ldquo;heal their land.&rdquo; This scope is important for the church&rsquo;s understanding of its mission. The gospel of Jesus Christ is not merely about the saving of individual souls; it is about the restoration of all things under the reign of God. When the church genuinely returns to God &mdash; with humility, prayer, seeking, and repentance &mdash; the effects of that return extend outward into the community and the creation. The healing promised to Solomon&rsquo;s Israel is a type of the comprehensive healing that the kingdom of God will ultimately bring.",
      "The covenant warnings at the close of the chapter should not be read as threats designed to produce fearful compliance, but as honest statements of reality about the nature of covenant relationship. God cannot be used. The temple, however magnificent and however filled with divine glory, does not provide a magical protection against the consequences of covenant breach. Every generation of the church is tempted to believe that its institutions &mdash; its buildings, its programs, its tradition, its orthodoxy &mdash; provide a kind of security that makes genuine repentance unnecessary. The warnings of verses 19 through 22 correct this assumption with blunt force.",
      "The deepest application of 2 Chronicles 7 for the contemporary church is the invitation to take seriously the extraordinary access to God that the new covenant has opened up through Jesus Christ. The glory that filled Solomon&rsquo;s temple now dwells in the community of those in whom Christ lives by his Spirit (1 Corinthians 3:16; 6:19). The promise that God&rsquo;s eyes and heart would be turned toward the place of prayer now applies to every believer and every gathered community of believers who come to God through the great High Priest. The question is not whether God is available; the question &mdash; as it was for Solomon and for post-exilic Israel &mdash; is whether we will take him seriously enough to seek him with the whole heart, in humility, prayer, and genuine repentance.",
    ],
  },
];

const videoItems = [
  { videoId: "AD7I7n5x8P8", title: "BibleProject - Overview: 1-2 Chronicles" },
  { videoId: "OmBHZFMiYjA", title: "2 Chronicles 7:14 - What Does It Really Mean?" },
  { videoId: "wNpoD0vvFsA", title: "If My People - The Promise of 2 Chronicles 7:14 Explained" },
  { videoId: "ZBp4JMBpk8Y", title: "Solomon Dedicates the Temple - Fire from Heaven" },
];

export default function Chronicles7GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Chronicles 7 &mdash; Fire from Heaven and the Covenant Promise
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            After Solomon dedicates the temple, fire descends from heaven and the glory of the Lord fills the house. God appears to Solomon at night and gives one of the most sweeping covenant promises in the Bible: &ldquo;If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land&rdquo; (v. 14).
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of 2 Chronicles 7 through these video teachings on Solomon&rsquo;s temple dedication, the fire from heaven, and the meaning of God&rsquo;s covenant promise to hear, forgive, and heal.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>If My People Will Pray</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Chronicles 7 holds together the most magnificent promise and the most solemn warning in the books of Chronicles. Fire from heaven confirms that God has accepted the temple and will inhabit it; the covenant warning confirms that divine presence is never automatic or unconditional. Between the fire and the warning stands the great promise of verse 14 &mdash; a promise that has called generations of God&rsquo;s people back from their wandering to the simple and demanding posture of humility, prayer, seeking, and turning that opens the door to divine hearing, forgiveness, and healing.
          </p>
        </div>
      </main>
    </div>
  );
}
