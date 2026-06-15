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
  "Daniel's Prayer of Confession",
  "Gabriel's Appearance",
  "The Seventy Weeks",
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
    heading: "Daniel 9 &mdash; An Overview",
    reference: "Daniel 9:1&ndash;27",
    paragraphs: [
      "Daniel 9 stands as one of the most theologically dense chapters in the entire Old Testament. It contains two movements that, taken together, offer a breathtaking vision of God&rsquo;s redemptive purposes in history. The first movement (vv. 1&ndash;19) is Daniel&rsquo;s great prayer of confession and intercession &mdash; one of the longest and most sustained prayers in Scripture, a model of penitence and faith that stands alongside Moses&rsquo; intercession in Exodus 32 and Solomon&rsquo;s temple prayer in 1 Kings 8. The second movement (vv. 20&ndash;27) is the angelic interpretation of history delivered by Gabriel, containing the mysterious and endlessly debated prophecy of the seventy weeks.",
      "The chapter opens with a precise historical anchor: the first year of Darius the Mede, son of Ahasuerus, over the Chaldean kingdom (v. 1). This places us near the end of the Babylonian exile, shortly after the fall of Babylon to the Medo-Persian forces &mdash; the very transition that Daniel saw in vision in chapter 5 (the writing on the wall) and chapter 7 (the four beasts). The political world is in upheaval. The empire that had destroyed Jerusalem and carried Israel into captivity has itself been conquered. And Daniel, the faithful exile who has served foreign kings without compromising his faith, now turns to Scripture.",
      "What Daniel reads in Jeremiah&rsquo;s writings changes him. He discovers that the desolation of Jerusalem was not open-ended: God had set a limit of seventy years (Jeremiah 25:11&ndash;12; 29:10). As Daniel reads this, and as he calculates where he is in that prophetic timetable, he is moved not to passive waiting but to urgent, self-humbling prayer. The rest of the chapter flows from that prophetic reading: the prayer it provokes, the angelic visit it draws, and the further prophecy that reveals the full scope of God&rsquo;s plan for Jerusalem and for the people of God.",
      "The theological unity of the chapter is the character of God himself. Daniel&rsquo;s prayer is saturated with the two attributes that he returns to again and again: the righteousness of God (&ldquo;righteousness belongs to you, O Lord&rdquo;, v. 7) and the mercy of God (&ldquo;to the Lord our God belong mercy and forgiveness&rdquo;, v. 9). These two attributes might seem to be in tension &mdash; if God is righteous, how can he forgive a people who have sinned? &mdash; but the chapter holds them together, and the prophecy of the seventy weeks points forward to the one event that would reconcile them: the atoning work of the Messiah, who would &ldquo;make atonement for iniquity&rdquo; and &ldquo;bring in everlasting righteousness&rdquo; (v. 24).",
      "For the Christian reader, Daniel 9 is one of the most significant prophetic texts in the entire Old Testament. The prophecy of the seventy weeks has been understood by Christians throughout history as pointing to the coming, ministry, death, and future work of Jesus Christ &mdash; the Messiah cut off after sixty-two weeks (v. 26), whose cutting off accomplishes the very purposes listed in verse 24. The precision of the prophecy, the fact that it names the Messiah explicitly, and its apparent correspondence to the timeline of Jesus&rsquo; ministry have made it one of the most studied and most debated passages in all of prophetic Scripture.",
    ],
  },
  {
    id: "Daniel's Prayer of Confession",
    heading: "Daniel&rsquo;s Prayer of Confession and Intercession",
    reference: "Daniel 9:1&ndash;19",
    paragraphs: [
      "The prayer of Daniel in verses 3&ndash;19 is one of the great prayers of Scripture. Before examining its content, we should notice its context: Daniel is not a common sinner who has just committed some obvious offense and feels the need to make things right. He is described throughout the book of Daniel as a man of exceptional faithfulness &mdash; a man who refused the king&rsquo;s food rather than defile himself, who continued to pray three times a day toward Jerusalem even when it carried a death sentence, who was found to have &ldquo;no fault, no error, no neglect&rdquo; in him (Daniel 6:4). And yet this same Daniel prostrates himself in sackcloth and ashes and confesses, over and over again, &ldquo;we have sinned, we have done wickedness, we have departed from your commandments.&rdquo;",
      "Daniel&rsquo;s prayer is a masterclass in intercessory identification. He does not pray, &ldquo;Lord, they have sinned and they deserve judgment, but please be merciful.&rdquo; He prays, &ldquo;We have sinned.&rdquo; He identifies himself fully with the people of God in their failure. This is the posture of every great intercessor in Scripture: Moses (&ldquo;if you will forgive their sin &mdash; but if not, please blot me out of your book that you have written&rdquo;, Exodus 32:32), Nehemiah (&ldquo;I confess the sins of the people of Israel, which we have sinned against you. Even I and my father&rsquo;s house have sinned&rdquo;, Nehemiah 1:6), and ultimately Christ himself, who identified with sinners so completely that he who knew no sin was made sin for us (2 Corinthians 5:21). Daniel&rsquo;s prayer is a shadow of that ultimate identification.",
      "The prayer divides naturally into confession (vv. 5&ndash;11) and intercession (vv. 15&ndash;19), linked by an acknowledgment of God&rsquo;s righteous judgment (vv. 12&ndash;14). The confession is thorough and unflinching. &ldquo;We have sinned and done wrong and acted wickedly and rebelled, turning aside from your commandments and rules. We have not listened to your servants the prophets, who spoke in your name to our kings, our princes, and our fathers, and to all the people of the land&rdquo; (vv. 5&ndash;6). Daniel catalogues the full extent of the failure: not a single class of Israelite is exempted. Kings, princes, fathers, and all the people of the land have sinned. The prophets were sent, and the prophets were ignored.",
      "&ldquo;To you, O Lord, belongs righteousness, but to us open shame, as at this day, to the men of Judah, to the inhabitants of Jerusalem, and to all Israel, those who are near and those who are far away, in all the lands to which you have driven them, because of the treachery that they have committed against you&rdquo; (v. 7). The phrase &ldquo;open shame&rdquo; &mdash; literally, &ldquo;shamefacedness&rdquo; &mdash; is remarkable. Daniel is saying that the exile, the dispersion, the destruction of Jerusalem: all of it is what it looks like. It is public, visible, undeniable shame. And God is righteous. He is not capricious or unjust. The shame belongs to us; righteousness belongs to him. This is the deepest kind of honest prayer &mdash; prayer that refuses to negotiate or excuse or minimize, but simply places the truth before God as God already knows it.",
      "&ldquo;To the Lord our God belong mercy and forgiveness, for we have rebelled against him and have not obeyed the voice of the LORD our God by walking in his laws, which he set before us by his servants the prophets&rdquo; (vv. 9&ndash;10). Notice the movement: we have not obeyed, and yet mercy and forgiveness belong to him. Daniel does not reason from Israel&rsquo;s repentance to God&rsquo;s forgiveness; he reasons from God&rsquo;s character to the hope of forgiveness. The basis of the prayer is not &ldquo;we have now shaped up, so please relent&rdquo; but &ldquo;you are a God of mercy, and we need mercy.&rdquo; This is the distinction between biblical prayer and mere performance of piety.",
      "The calamity that fell on Jerusalem was not an accident or a military misfortune. It was the fulfillment of &ldquo;what is written in the Law of Moses the servant of God, because we have sinned against him&rdquo; (v. 11). Daniel is referring to the covenant curses of Deuteronomy 28&ndash;30, which had warned in excruciating detail what would happen if Israel turned away from God. The exile was not simply Babylon&rsquo;s victory; it was God&rsquo;s word being confirmed. And the confirmation of God&rsquo;s word, even in judgment, is itself a ground of hope: if God&rsquo;s word of judgment is true, then God&rsquo;s word of restoration and mercy is equally true.",
      "Daniel&rsquo;s intercession reaches its emotional climax in verses 17&ndash;19: &ldquo;Now therefore, O our God, listen to the prayer of your servant and to his pleas for mercy, and for your own sake, O Lord, make your face to shine upon your sanctuary, which is desolate. O my God, incline your ear and hear. Open your eyes and see our desolations, and the city that is called by your name. For we do not present our pleas before you because of our righteousness, but because of your great mercy. O Lord, hear; O Lord, forgive. O Lord, pay attention and act. Delay not, for your own sake, O my God, because your city and your people are called by your name.&rdquo; The urgency of &ldquo;Do not delay&rdquo; is remarkable in a man who would have known, from his reading of Jeremiah, that God&rsquo;s timing was set. Daniel prays with urgency even within God&rsquo;s sovereignty. His basis is entirely the character and name of God: &ldquo;for your own sake&hellip; because your city and your people are called by your name.&rdquo;",
    ],
  },
  {
    id: "Gabriel's Appearance",
    heading: "Gabriel Flies Swiftly",
    reference: "Daniel 9:20&ndash;23",
    paragraphs: [
      "The angel Gabriel has appeared to Daniel once before, in chapter 8, where he was sent to help Daniel understand the vision of the ram and the goat. Now, in chapter 9, Gabriel appears again &mdash; but this time with a different kind of revelation. In chapter 8, Gabriel came to interpret a vision that Daniel had already seen. In chapter 9, Gabriel comes to give a new prophetic word in response to Daniel&rsquo;s prayer. The connection between Daniel&rsquo;s intercession and Gabriel&rsquo;s arrival is not coincidental; it is one of the most striking demonstrations in all of Scripture of how prayer moves heaven.",
      "&ldquo;While I was speaking and praying, confessing my sin and the sin of my people Israel, and presenting my plea before the LORD my God for the holy hill of my God, while I was speaking in prayer, the man Gabriel, whom I had seen in the vision at the first, came to me in swift flight at the time of the evening sacrifice&rdquo; (vv. 20&ndash;21). Several details here reward careful attention. Gabriel arrives &ldquo;while I was speaking&rdquo; &mdash; before Daniel has even finished his prayer. The response from heaven was already on its way as Daniel was still forming his words. This is a stunning picture of the immediacy of God&rsquo;s attention to his servant&rsquo;s prayer.",
      "The timing &mdash; &ldquo;at the time of the evening sacrifice&rdquo; &mdash; is deeply poignant. Daniel is in Babylon. The Temple in Jerusalem is in ruins. The evening sacrifice has not been offered for decades. There is no altar, no priest, no sacrificial animal. And yet Daniel marks time by the hours of the Temple liturgy. He has not allowed exile and the destruction of the Temple to erase the rhythms of Israel&rsquo;s worship from his internal calendar. The time of the evening sacrifice is still, for Daniel, a holy time &mdash; a time of prayer, a time when the God of Israel draws near. This is faith maintaining its orientation toward God even when all external structures of worship have been swept away.",
      "&ldquo;He made me understand, speaking with me and saying, &lsquo;O Daniel, I have now come out to give you insight and understanding. At the beginning of your pleas for mercy a word went out, and I have come to tell it to you, for you are greatly loved. Therefore consider the word and understand the vision&rsquo;&rdquo; (vv. 22&ndash;23). Gabriel&rsquo;s words to Daniel here are among the most tender in all of Scripture. &ldquo;You are greatly loved&rdquo; &mdash; the Hebrew phrase (<em>chamudot</em>, rendered &ldquo;greatly loved&rdquo; or &ldquo;highly esteemed&rdquo; or &ldquo;precious&rdquo;) is a word of deep divine affection. Gabriel is not just delivering a message; he is delivering the Father&rsquo;s regard for his faithful servant. Daniel is beloved. His prayer was heard the moment he began to pray. And the answer comes not because Daniel has earned it but because he is loved.",
      "The appearance of Gabriel &ldquo;in swift flight&rdquo; (&ldquo;flying swiftly,&rdquo; as some translations render it) is one of the earliest explicit references in Scripture to the mobility of angelic beings &mdash; the idea that they move between the heavenly realm and the earthly in response to divine commission. This theme reaches its fullest development in Revelation, where angels are repeatedly depicted as moving swiftly on divine errands. For Daniel, the swiftness of Gabriel&rsquo;s arrival is a visible sign of the eagerness of heaven to respond to faithful prayer. God was not reluctant to hear Daniel; he dispatched his messenger the moment Daniel began to pray.",
      "What Gabriel brings is described as &ldquo;insight and understanding&rdquo; &mdash; not simply information, but the capacity to comprehend what is being revealed. This is consistent with the broader Danielic emphasis on wisdom and understanding as gifts from God. Daniel could not have decoded the seventy-weeks prophecy on his own, any more than he could have described Nebuchadnezzar&rsquo;s dream without divine revelation. The prophecy that follows is given in the form that it is precisely so that its full meaning would require divine illumination to understand &mdash; illumination that the Holy Spirit has been providing to the church throughout the centuries of her reading of this text.",
    ],
  },
  {
    id: "The Seventy Weeks",
    heading: "The Prophecy of the Seventy Weeks",
    reference: "Daniel 9:24&ndash;27",
    paragraphs: [
      "The four verses of the seventy-weeks prophecy (vv. 24&ndash;27) are among the most studied, most debated, and most theologically significant verses in the entire Old Testament. They have generated a library of commentary across two millennia of Jewish and Christian interpretation. No brief summary can do justice to the full range of interpretive options, but we can lay out the structure of the prophecy and its main features clearly enough to see why it has commanded such intense attention.",
      "&ldquo;Seventy weeks are decreed about your people and your holy city, to finish the transgression, to put an end to sin, and to atone for iniquity, to bring in everlasting righteousness, to seal both vision and prophet, and to anoint a most holy place&rdquo; (v. 24). The word translated &ldquo;weeks&rdquo; is the Hebrew <em>shavuim</em>, literally &ldquo;sevens&rdquo; or &ldquo;heptads.&rdquo; Just as Daniel read in Jeremiah about &ldquo;seventy years,&rdquo; Gabriel now speaks of &ldquo;seventy sevens&rdquo; &mdash; a period that appears to denote seventy units of seven years, or 490 years in total. The seventy years of exile are encompassed within a larger divine program of 490 years, at the end of which six enormous purposes will be accomplished for Israel and for Jerusalem.",
      "The six purposes of verse 24 are the theological heart of the prophecy. They are: (1) to finish the transgression, (2) to put an end to sin, (3) to atone for iniquity, (4) to bring in everlasting righteousness, (5) to seal both vision and prophet, and (6) to anoint a most holy place. The first three describe the removal of sin in its various dimensions &mdash; transgression (the willful rebellion), sin (the missing of the mark), and iniquity (the moral perversity). The fourth describes the establishment of a new moral order. The fifth speaks of the completion of the prophetic program &mdash; when the prophecies are fulfilled and confirmed, they are &ldquo;sealed&rdquo; in the sense of being authenticated. The sixth &mdash; the anointing of a most holy place &mdash; points to the establishment of a new, ultimate sanctuary.",
      "Christians throughout history have read these six purposes as perfectly fulfilled in the work of Christ. His death on the cross finished the power of transgression, put an end to the sacrificial system&rsquo;s ongoing sin-bearing function, made atonement for iniquity, and opened the age of righteousness imputed to believers. His resurrection and ascension sealed the prophetic testimony about him. And his body as the new Temple (John 2:19&ndash;21), and the church as the temple of the Holy Spirit (1 Corinthians 3:16&ndash;17; Ephesians 2:19&ndash;22), are the fulfillment of the anointing of the most holy place. The precision of the fit between Daniel 9:24 and the gospel of Jesus Christ is not coincidental; it is the point.",
      "&ldquo;Know therefore and understand that from the going out of the word to restore and build Jerusalem to the coming of an anointed one, a prince, there shall be seven weeks. Then for sixty-two weeks it shall be built again with squares and moat, but in a troubled time. And after the sixty-two weeks, an anointed one shall be cut off and shall have nothing&rdquo; (vv. 25&ndash;26). The prophecy divides the seventy weeks into segments: 7 weeks, then 62 weeks (totaling 69 weeks), and finally a final period in which the decisive events occur. The starting point is &ldquo;the going out of the word to restore and build Jerusalem&rdquo; &mdash; widely identified with the decree of Artaxerxes to Nehemiah in 445 B.C. or with the earlier decree to Ezra.",
      "The phrase &ldquo;an anointed one shall be cut off&rdquo; (<em>mashiach yikaret</em>) is one of the most remarkable in the Old Testament. The word &ldquo;cut off&rdquo; (<em>karat</em>) in the Hebrew Bible is the standard term for a violent or premature death, often in the context of judicial execution or being cut off from the covenant community. &ldquo;Anointed one&rdquo; is the literal Hebrew for Messiah. The text says, baldly, that the Messiah will be killed &mdash; and will be killed &ldquo;after&rdquo; the sixty-nine weeks but not at the end of the seventieth. This is a prophesied death of the Anointed One, not a natural end to his reign. For those who came to faith in Jesus through reflection on this text, its correspondence to the crucifixion was overwhelming: the one who came when the prophecy pointed, who bore the title Messiah, who was judicially killed &mdash; this was too precise to be coincidence.",
      "Verse 27 speaks of a final &ldquo;week&rdquo; in which a covenant is made with many, sacrifices and offerings cease at the midpoint, and &ldquo;on the wing of abominations shall come one who makes desolate&rdquo; &mdash; language that Jesus himself quotes and applies to the future in Matthew 24:15 (&ldquo;when you see the abomination of desolation spoken of by the prophet Daniel, standing in the holy place&rdquo;). This final verse has generated the most interpretive diversity, with major schools of thought locating the events in the first century (Antiochus Epiphanes or the Roman destruction of Jerusalem in 70 A.D.), in the ministry of Christ himself, or in a future period yet to come. What is beyond dispute is that Daniel 9:27 contains language that Jesus himself treated as prophetically significant and as yet to be fulfilled in his own time &mdash; which suggests that the ultimate fulfillment of the seventy-weeks prophecy was not exhausted by anything that happened before the first century, but encompasses the full sweep of redemptive history from Daniel&rsquo;s exile to Christ&rsquo;s return.",
      "The prophecy of the seventy weeks is, in the end, a staggering declaration of God&rsquo;s sovereignty over history. The empires rise and fall, the nations rage, Jerusalem is destroyed and rebuilt and destroyed again &mdash; and through it all, God is moving history toward the appointed time when transgression will be finished, sin ended, iniquity atoned, righteousness established, prophecy sealed, and a holy place anointed forever. Daniel prayed for the restoration of the city and the sanctuary; God answered by revealing a plan that went immeasurably beyond anything Daniel could have asked or imagined.",
    ],
  },
];

const videoItems = [
  { videoId: "K4Rq3BEqsS0", title: "Daniel - BibleProject Overview" },
  { videoId: "dBnoOxCbCls", title: "Daniel's Prayer of Confession - Daniel 9 Explained" },
  { videoId: "BXAipWCqblQ", title: "The Seventy Weeks of Daniel - Prophecy Explained" },
  { videoId: "yULhSrPKBnk", title: "Gabriel's Message to Daniel - Messianic Prophecy" },
];

export default function Daniel9GuidePage() {
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
            Old Testament &mdash; Prophecy
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Daniel 9
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Daniel&rsquo;s great prayer of confession and intercession for Israel, Gabriel&rsquo;s swift appearance in response, and the mysterious prophecy of seventy weeks pointing to the Messiah who would be cut off for the sins of the people.
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.15rem" }}>Video Teaching on Daniel 9</h3>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Explore these teaching resources on Daniel&rsquo;s prayer of confession, Gabriel&rsquo;s message, and the seventy weeks prophecy pointing to the Messiah.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>&ldquo;O Lord, Hear; O Lord, Forgive; O Lord, Act&rdquo;</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            Daniel 9 teaches that authentic prayer begins not with our demands but with our confession. Daniel&rsquo;s great prayer models the posture of the intercessor: identifying with the people of God in their failure, appealing not to human righteousness but to divine mercy, and trusting that the one who hears prayer is righteous, faithful, and full of steadfast love.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The prophecy of the seventy weeks stretches the horizon of Daniel&rsquo;s prayer far beyond what he could have imagined. His request was for the restoration of a city; God&rsquo;s answer encompassed the coming of the Anointed One, the end of sin, the bringing in of everlasting righteousness, and the ultimate renewal of all things. In Christ, the Messiah who was cut off, all of this is &ldquo;yes&rdquo; and &ldquo;amen&rdquo; (2 Corinthians 1:20).
          </p>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Key Themes in Daniel 9</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { label: "Confession and Intercession", desc: "Daniel&rsquo;s prayer is a model of corporate identification with sin and urgent intercession grounded in God&rsquo;s own character and name." },
              { label: "Scripture Reading as Prayer Prompt", desc: "Daniel&rsquo;s reading of Jeremiah&rsquo;s prophecy moves him to prayer &mdash; a model of how Scripture should shape and fuel the church&rsquo;s intercession." },
              { label: "God&rsquo;s Righteousness and Mercy", desc: "The chapter holds together the righteousness of God in judgment and the mercy of God in forgiveness &mdash; both resolved in the atoning work of the Messiah." },
              { label: "The Seventy Weeks", desc: "A prophetic overview of redemptive history pointing to the Messiah who would be cut off, bringing an end to sin and establishing everlasting righteousness." },
            ].map((item) => (
              <div key={item.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem 1.25rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Structure of Daniel 9</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { ref: "vv. 1&ndash;2", title: "Historical Setting &amp; Jeremiah&rsquo;s Seventy Years", desc: "In the first year of Darius the Mede, Daniel reads Jeremiah&rsquo;s prophecy about the seventy years of desolation for Jerusalem and is moved to prayer." },
              { ref: "vv. 3&ndash;14", title: "Confession of Sin", desc: "Daniel turns to fasting, sackcloth, and ashes, and confesses the sins of all Israel &mdash; kings, princes, fathers, and people &mdash; acknowledging God&rsquo;s righteousness in the judgment of exile." },
              { ref: "vv. 15&ndash;19", title: "Intercession for Jerusalem", desc: "Daniel pleads for God to restore the city and sanctuary called by his name, basing the appeal entirely on God&rsquo;s mercy and the honor of his own name." },
              { ref: "vv. 20&ndash;23", title: "Gabriel&rsquo;s Swift Arrival", desc: "While Daniel is still praying, Gabriel arrives in swift flight to bring insight and understanding, calling Daniel &lsquo;greatly loved&rsquo;." },
              { ref: "vv. 24&ndash;27", title: "The Seventy Weeks Prophecy", desc: "Gabriel reveals a 490-year divine program for Israel and Jerusalem, culminating in the Messiah who is cut off, the end of sin, and the bringing in of everlasting righteousness." },
            ].map((row) => (
              <div key={row.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "0.75rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 12, minWidth: 80, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: row.ref }} />
                <div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: 14, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: row.title }} />
                  <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>The Six Purposes of the Seventy Weeks (Daniel 9:24)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { num: "1", purpose: "To finish the transgression", note: "The bringing of willful rebellion against God to an end through the Messiah&rsquo;s atoning work." },
              { num: "2", purpose: "To put an end to sin", note: "The sealing up of sin &mdash; its power broken and the sacrificial system completed in the one final sacrifice." },
              { num: "3", purpose: "To atone for iniquity", note: "The making of atonement (literally, to &lsquo;cover&rsquo; or &lsquo;expiate&rsquo;) for the moral perversity of humanity." },
              { num: "4", purpose: "To bring in everlasting righteousness", note: "The establishment of a new moral order &mdash; righteousness that is not earned but imputed, and that endures forever." },
              { num: "5", purpose: "To seal both vision and prophet", note: "The sealing (authentication and completion) of the entire prophetic program of the Old Testament." },
              { num: "6", purpose: "To anoint a most holy place", note: "The dedication of a new, ultimate sanctuary &mdash; the body of Christ, the church as temple, and ultimately the new creation." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "0.75rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <div style={{ color: ACCENT, fontWeight: 800, fontSize: 18, minWidth: 28, lineHeight: 1 }}>{item.num}</div>
                <div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{item.purpose}</div>
                  <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
