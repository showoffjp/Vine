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
  "Overview",
  "Great High Priest",
  "Throne of Grace Access",
  "Entering into Rest",
  "Application",
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
    heading: "Overview of Hebrews 4",
    reference: "Hebrews 4:1&ndash;16",
    paragraphs: [
      "Hebrews 4 stands at the heart of one of the New Testament&rsquo;s most theologically rich letters. The author &mdash; writing to Jewish believers under pressure to abandon their faith in Christ and return to the Mosaic covenant &mdash; opens the chapter with an urgent warning: the promise of entering God&rsquo;s rest still stands, so let us fear lest any of us should seem to have failed to reach it. The chapter weaves together two great themes: the nature of God&rsquo;s Sabbath rest and the identity of Jesus as our Great High Priest who grants access to the very throne of heaven.",
      "The immediate context is the extended argument of chapters 3 and 4 about the generation of Israelites who perished in the wilderness. That generation heard the same gospel proclaimed &mdash; good news of God&rsquo;s promise &mdash; but it did not benefit them because it was not united with faith in those who heard (4:2). They failed to enter God&rsquo;s rest not because God withdrew the offer but because unbelief hardened their hearts. The author takes Psalm 95 as his text: &ldquo;Today, if you hear his voice, do not harden your hearts as in the rebellion.&rdquo;",
      "The concept of &ldquo;rest&rdquo; in Hebrews 4 is layered and profound. On one level it refers to the land of Canaan, which the exodus generation failed to enter. On a deeper level it reaches back to God&rsquo;s own rest on the seventh day of creation (4:4), suggesting that the rest promised to God&rsquo;s people is nothing less than a participation in the life and peace of God himself. On yet another level, the author argues that if Joshua had given them this rest, God would not later have spoken of &ldquo;another day&rdquo; (4:8). The true rest &mdash; the Sabbath rest that remains for the people of God &mdash; is still future and still available, entered by faith.",
      "The chapter pivots dramatically in verse 14. Having established the danger of unbelief, the author now provides the supreme motivation for holding fast: we do not approach this call to faith in our own strength but through the mediation of Jesus, the Son of God, our Great High Priest. The final three verses (4:14&ndash;16) are among the most beloved in all of Scripture, an invitation to draw near to the throne of grace with confidence, knowing that our High Priest is not one who cannot sympathize with our weaknesses but one who has been tempted in every way as we are, yet without sin.",
      "Hebrews 4 thus moves from warning to wonder &mdash; from the sobering reality of Israel&rsquo;s failure to the breathtaking provision of Christ&rsquo;s priesthood. It is a chapter that refuses to let us be comfortable in unbelief or distant in our relationship with God. The same God who warned his people in the wilderness now flings open the door of his throne room and says: come. Come with boldness. Come in your need. Come and find mercy and grace to help in time of need.",
    ],
  },
  {
    id: "Great High Priest",
    heading: "Jesus as Our Great High Priest",
    reference: "Hebrews 4:14&ndash;15",
    paragraphs: [
      "The title &ldquo;Great High Priest&rdquo; given to Jesus in Hebrews 4:14 is not incidental decoration but a carefully chosen theological statement. The high priest in Israel was the supreme mediator between God and the people &mdash; the one person authorized to enter the Most Holy Place on the Day of Atonement and to make atonement for the sins of the nation. By calling Jesus the &ldquo;Great&rdquo; High Priest, the author signals that Jesus fulfills and surpasses everything the Levitical high priesthood ever pointed toward.",
      "The Levitical high priests were chosen from among men and could make atonement only with the blood of animals, and even then had to offer sacrifices for their own sins before they could offer for the people (Hebrews 5:1&ndash;3). They ministered in an earthly sanctuary that was itself only a shadow and copy of the heavenly reality (8:5). And they died &mdash; their priesthood was interrupted and impermanent, requiring generation after generation of successors. Jesus, by contrast, &ldquo;passed through the heavens&rdquo; (4:14), entering not into an earthly Holy of Holies but into the very presence of God in the highest heaven, offering not the blood of animals but his own blood, once for all.",
      "The argument draws on the Melchizedek typology that the letter will develop more fully in chapters 5&ndash;7. Jesus is a priest not by Levitical descent but by divine appointment, &ldquo;after the order of Melchizedek&rdquo; (5:6, quoting Psalm 110:4). This means his priesthood is not limited by tribe or mortality but is eternal. &ldquo;He holds his priesthood permanently, because he continues forever&rdquo; (7:24). The consequence is staggering: &ldquo;He is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them&rdquo; (7:25).",
      "What makes the priesthood of Jesus uniquely powerful is not just its efficacy but its empathy. Verse 15 insists on both truths at once: &ldquo;For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin.&rdquo; The incarnation was not merely a legal transaction &mdash; God simply declaring sinners righteous from a distance. It was a genuine entry into the full weight of human experience. Jesus knew hunger and thirst. He knew grief, rejection, and abandonment. He faced the full assault of temptation without yielding to it, which means he understands more fully than we do how fierce temptation can be.",
      "The sinlessness of Christ in his temptation is not a disqualification from sympathy but the very ground of it. A man who surrenders immediately to temptation understands its pull only slightly; a man who resists it to the very end knows its full force. Jesus was tempted &ldquo;in every respect as we are&rdquo; &mdash; in the wilderness, in Gethsemane, on the cross &mdash; and he never yielded. This is why he can be not merely an effective priest but a compassionate one, one who meets our weakness not with contempt but with mercy.",
      "The practical implication for believers under pressure is immense. When the Hebrew Christians were tempted to abandon Christ because following him was costly, the author does not simply urge more willpower. He points them to a person &mdash; to a living, reigning, interceding High Priest who has already walked the road they are walking and who stands at God&rsquo;s right hand as their advocate and intercessor. The temptation to walk away from Christ is precisely the moment to draw near to Christ, knowing he understands and he prevails.",
    ],
  },
  {
    id: "Throne of Grace Access",
    heading: "The Throne of Grace: Drawing Near with Confidence",
    reference: "Hebrews 4:16",
    paragraphs: [
      "&ldquo;Let us therefore draw near to the throne of grace with confidence, so that we may receive mercy and find grace to help in time of need&rdquo; (4:16). This single verse is the climax of the entire argument of Hebrews 3&ndash;4, and it is one of the most transformative invitations in the entire New Testament. To appreciate its force, we must feel the weight of what &ldquo;the throne of grace&rdquo; would have meant to a first-century Jewish believer.",
      "In the Mosaic economy, the presence of God was terrifying in its holiness. When the glory of the Lord descended on Sinai, the people were told not to touch the mountain on pain of death (Exodus 19:12). The inner sanctuary of the Tabernacle was separated from the rest of the structure by a heavy veil, and only the high priest could enter it, only once a year, only with the blood of atonement. To approach God&rsquo;s throne carelessly was to court destruction &mdash; even Uzzah, reaching out to steady the ark, was struck dead (2 Samuel 6:7). The throne of God was a throne of justice that consumed all who approached it improperly.",
      "The author of Hebrews is not dismissing this holiness. He has already cited God&rsquo;s solemn oath and the reality of judgment for unbelief. But through the work of Jesus, the throne that was a place of terror has become a &ldquo;throne of grace.&rdquo; The veil that separated God&rsquo;s presence from the people has been torn from top to bottom (Matthew 27:51). The blood of Christ, unlike the blood of bulls and goats, has actually accomplished eternal redemption (Hebrews 9:12) and cleansed the conscience from dead works to serve the living God. Because of what Christ has done as our Great High Priest, God&rsquo;s throne is now the place where grace &mdash; not condemnation &mdash; flows to those who come in faith.",
      "The Greek word translated &ldquo;confidence&rdquo; (parresia) is rich with meaning. It was used in the ancient world for the freedom of speech a citizen enjoyed in a democratic assembly &mdash; the right to speak boldly and openly without fear of reprisal. Applied to prayer, it means we do not come to God cringing, apologizing for our presence, or uncertain whether we are welcome. We come knowing we are welcomed &mdash; not because of our own merit but because our Great High Priest has opened the way. We come boldly not as strangers crashing a closed audience but as children whose Father himself has said: come.",
      "What we receive there is precisely what we most need: &ldquo;mercy and grace to help in time of need.&rdquo; Mercy addresses our failures &mdash; the sins, weaknesses, and shortcomings we bring before God. Grace addresses our need &mdash; the help, strength, and provision we require for what lies ahead. This is not a one-time transaction but a continual resource. The throne of grace is always open. The High Priest is always there. Every moment of weakness, every assault of temptation, every situation where we feel utterly out of our depth is a moment to draw near and find what we need.",
      "The exhortation &ldquo;let us draw near&rdquo; is a communal invitation, not merely a private one. The author addresses his readers as a community, and the life of approaching God together in prayer and worship is part of what it means to be the people of the new covenant. The throne of grace is not a resource we access in isolation but a reality we are drawn toward together, as a royal priesthood, a holy nation, a people who through Jesus have access in one Spirit to the Father (Ephesians 2:18). The great invitation of verse 16 is ultimately an invitation to the kind of relationship with God that the whole of Scripture has been pointing toward.",
    ],
  },
  {
    id: "Entering into Rest",
    heading: "The Sabbath Rest That Remains",
    reference: "Hebrews 4:1&ndash;13",
    paragraphs: [
      "The opening thirteen verses of Hebrews 4 develop one of the most theologically layered arguments in the New Testament: the nature of the &ldquo;rest&rdquo; that God promises to his people. The author begins from a surprising premise &mdash; that the rest God offered to Israel in Canaan was itself a type of a deeper rest that remained unfulfilled even after Joshua had led the people into the land. This argument rests on a careful reading of Psalm 95, which was written long after Israel had settled in Canaan but still speaks of a &ldquo;today&rdquo; in which the offer of rest remains open and a heart that might still become hardened.",
      "The concept of rest is grounded first in creation. &ldquo;For he has somewhere spoken of the seventh day in this way: &lsquo;And God rested on the seventh day from all his works&rsquo;&rdquo; (4:4). The Sabbath is not merely a human institution for recovery after labor; it is a participation in the rhythm of God&rsquo;s own life. On the seventh day, God entered into a state of completeness, satisfaction, and delight in his finished work. The rest promised to the people of God is not ultimately about cessation of physical toil but about entering into this divine shalom &mdash; a place of security, completion, and peace in God himself.",
      "The tragedy of the wilderness generation is that they stood on the threshold of this rest and turned back. Hebrews 3 has already established, from Psalm 95, that their failure was one of heart &mdash; they were hardened by the deceitfulness of sin and fell away from the living God. The divine judgment was shattering: &ldquo;As I swore in my wrath, &lsquo;They shall not enter my rest&rsquo;&rdquo; (3:11). Yet the author&rsquo;s point is not merely to rehearse past disaster. It is to press upon his readers the urgency of their own &ldquo;today.&rdquo; The same offer stands; the same danger of unbelief exists; the same &ldquo;today&rdquo; is still the window of opportunity.",
      "The mention of Joshua in verse 8 is crucial. The name &ldquo;Joshua&rdquo; in Greek is &ldquo;Jesus&rdquo; (Iesous), and while the author is here referring to the Old Testament figure who led Israel into Canaan, the name overlap is theologically significant. Joshua gave the people a geographical rest, a foothold in the promised land &mdash; but that rest was incomplete, conditional, and temporary. It was interrupted by repeated cycles of sin, oppression, and exile. If that territorial rest had been the full fulfillment of God&rsquo;s promise, God would not have spoken through David of &ldquo;another day.&rdquo; The true Joshua &mdash; Jesus, the Son of God &mdash; is the one who leads God&rsquo;s people into the rest that the old Joshua could only foreshadow.",
      "Verse 11 issues the paradoxical exhortation: &ldquo;Let us therefore strive to enter that rest, so that no one may fall by the same sort of disobedience.&rdquo; Rest is something we are to strive to enter &mdash; not because entering it depends on our effort, but because the path to it runs through faith, and faith must be maintained with deliberate, active vigilance against the drift of unbelief. The author is not presenting a works-based salvation but a faith that is genuine enough to persevere, to hear God&rsquo;s voice today and not harden the heart.",
      "Verses 12&ndash;13 introduce the word of God as the divine instrument that searches out the true condition of the heart: &ldquo;For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.&rdquo; Nothing in creation is hidden from God; all things are naked and exposed to the eyes of him to whom we must give account. The word of God is not a gentle suggestion &mdash; it is the living voice of the One who called the world into being, and it cuts through every layer of self-deception to reveal whether our hearts are truly resting in him or merely performing religious duty.",
    ],
  },
  {
    id: "Application",
    heading: "Living the Truths of Hebrews 4",
    reference: "Hebrews 4 &mdash; Applied",
    paragraphs: [
      "The truths of Hebrews 4 are not abstract doctrines to be admired from a safe distance. They are meant to reshape the daily practice of the Christian life. The chapter&rsquo;s two great themes &mdash; the Sabbath rest that remains and the throne of grace that is open &mdash; have direct and urgent implications for how we live, pray, and endure under pressure.",
      "The first application concerns the practice of Sabbath rest. Many Christians in the modern world live at a pace that is structurally incompatible with trust. We are relentlessly productive, perpetually available, chronically anxious &mdash; and we treat rest as laziness rather than as a theological act. Hebrews 4 calls us to see Sabbath rest not primarily as recuperation for more productivity but as a weekly declaration of faith: I am not the sustainer of all things. God rested on the seventh day not because he was tired but because the work was complete. When we rest, we are participating in that completeness &mdash; confessing that our lives are held by One who does not grow weary.",
      "The second application concerns our prayer life. The invitation of verse 16 is a standing invitation that most Christians access far less than they could. How often do we actually &ldquo;draw near&rdquo; to the throne of grace in our moments of need? When temptation rises, when anxiety floods in, when grief descends, when we feel utterly inadequate for the demands before us &mdash; the reflex of the flesh is to manage, to cope, to distract, to white-knuckle our way through. The reflex of faith, which Hebrews 4 is training us toward, is to run toward the throne, not away from it. We have a High Priest there who knows exactly what we are facing.",
      "The third application concerns the danger of spiritual drift. The wilderness generation did not abandon God in a sudden dramatic apostasy. They drifted &mdash; hardened by the deceitfulness of sin one disappointment at a time, one grumble at a time, until their hearts were so far from God that when Canaan lay before them they could not believe he was able to bring them in. Hebrews 4 is a sober warning that the same process can happen to us. We must exhort one another daily (3:13), hold fast our confession (4:14), and hear God&rsquo;s voice today without hardening our hearts. The spiritual life is not a one-time decision but a daily orientation of the heart.",
      "The fourth application concerns how we face temptation and weakness. Jesus was tempted in every way as we are, yet without sin &mdash; and that means he understands the full weight of what we are carrying. When we are ashamed of our weaknesses, when we feel that our struggles disqualify us from coming to God, we have forgotten the priesthood of Christ. Our weakness is precisely the condition that his priesthood was designed to address. We are to come &ldquo;in time of need&rdquo; &mdash; which is to say, we are to come when things are hard, when we are failing, when we cannot see the way forward. The throne of grace is not a reward for the strong; it is a refuge for the needy.",
      "Finally, Hebrews 4 calls us to take the word of God seriously as the instrument by which God keeps our hearts tender. The &ldquo;living and active&rdquo; word is both a comfort and a warning. It is comfort because we have access to the very voice of the living God, which is always speaking, always relevant, always sufficient for the challenges of &ldquo;today.&rdquo; It is warning because it cuts through every form of self-deception and exposes the true condition of our hearts. To sit under the word of God with an open heart &mdash; in personal reading, in corporate worship, in the fellowship of believers &mdash; is to participate in the ongoing work by which God keeps us from the hardening that led the wilderness generation to their ruin.",
    ],
  },
];

const videoItems = [
  { videoId: "1fNXMPJYY2A", title: "Hebrews 4 - The Great High Priest and the Throne of Grace" },
  { videoId: "aULMoiL-nBM", title: "What Does It Mean That Jesus Is Our High Priest? - Hebrews Explained" },
  { videoId: "F5NJlZSBT4E", title: "Throne of Grace - How to Approach God with Boldness - Hebrews 4:16" },
  { videoId: "SHhs9JCmOlc", title: "God&rsquo;s Sabbath Rest - Entering the Rest of God - Hebrews 4 Study" },
];

export default function Hebrews4GuidePage() {
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
            Hebrews 4 &mdash; The Great High Priest
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Entering God&rsquo;s rest, drawing near to the throne of grace, and finding in Jesus a High Priest who sympathizes with our weaknesses &mdash; the breathtaking invitation of Hebrews 4 for every believer in every season of need.
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

        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Hebrews 4 through visual teaching on Jesus as our Great High Priest, the throne of grace, the Sabbath rest that remains, and the sympathizing heart of Christ toward our weaknesses.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Let Us Draw Near with Confidence</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Hebrews 4 calls every weary, tempted, and struggling believer to the same place: the throne of grace, where a sympathizing High Priest intercedes without ceasing. The rest of God is not a past memory or a distant future &mdash; it is a present reality entered through faith in Jesus, who has gone before us through the heavens and bids us follow him into the very presence of God.
          </p>
        </div>
      </main>
    </div>
  );
}
