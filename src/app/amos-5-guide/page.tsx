"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Seek the Lord and Live",
  "I Hate Your Religious Feasts",
  "Let Justice Roll Down",
  "The Day of the LORD",
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
    heading: "Overview of Amos 5",
    reference: "Amos 5:1&ndash;27",
    paragraphs: [
      "Amos 5 stands at the heart of one of the most searching prophetic books in the Old Testament. Amos was a shepherd and a dresser of sycamore trees from Tekoa in the southern kingdom of Judah, a man with no prophetic pedigree, who was sent by God to the northern kingdom of Israel during the prosperous reign of Jeroboam II in the eighth century before Christ. Israel was at the height of its material wealth: trade flourished, houses of ivory were built, wine flowed, and the sanctuaries at Bethel and Gilgal were crowded with worshipers. From the outside, the nation had never looked stronger. From inside the prophetic word, it was standing on the edge of a grave.",
      "The chapter opens with a shocking image: a funeral lament sung over a nation that is not yet dead. &ldquo;Fallen, no more to rise, is the virgin Israel; forsaken on her land, with none to raise her up&rdquo; (5:2). Amos sings the dirge before the death has arrived because, in the economy of divine speech, the word of judgment is as certain as its fulfillment. The prophet sees what the prosperous nation cannot see &mdash; that the armies of Assyria are already gathering on the horizon of history, and that without repentance, the virgin Israel will fall and not rise again.",
      "The chapter is structured around two great alternating movements: the call to seek the Lord and live, and the searing indictment of Israel&rsquo;s religion and injustice. These two movements are not separate; they interpret each other. The reason Israel must turn from Bethel and Gilgal to seek the Lord himself is that Bethel and Gilgal have become places of empty ritual while the courts are filled with corruption. The religion that does not produce justice is not religion at all in the sight of the God of Israel &mdash; it is noise, and God hates it.",
      "At the center of the chapter stands one of the most quoted verses in all of prophetic literature: &ldquo;But let justice roll down like waters, and righteousness like an ever-flowing stream&rdquo; (5:24). These words have resonated through the centuries as a rallying cry for every movement that has sought to bring God&rsquo;s justice to bear on human society. They stand in their context as the positive alternative to the worship God rejects &mdash; not a supplement to liturgy, but its replacement. Where justice does not flow, no amount of religious observance will commend the worshipers to God.",
      "The chapter closes with a warning about the Day of the LORD &mdash; a concept that Israel had apparently been looking forward to as a day of divine victory over its enemies. Amos inverts the expectation with devastating effect: the Day of the LORD will be darkness, not light, for a people whose hands are full of blood and whose sanctuaries are full of the sounds of hymns that God refuses to hear. The chapter as a whole is a call to total reorientation &mdash; away from ritual performed in the service of injustice, and toward the God of justice himself.",
      "Amos 5 remains one of the most urgently relevant chapters in the prophetic tradition. It speaks to every community of faith that is tempted to substitute the forms of religion for its substance, to fill sanctuaries with music and offerings while the poor are trampled at the gate. Its call to seek the Lord &mdash; not the sanctuary, not the tradition, not the religious institution, but the Lord himself &mdash; is as pressing in the twenty-first century as it was in the eighth century before Christ.",
    ],
  },
  {
    id: "Seek the Lord and Live",
    heading: "Seek the Lord and Live",
    reference: "Amos 5:1&ndash;9",
    paragraphs: [
      "The opening movement of Amos 5 strikes a note of profound and unexpected grief. A funeral dirge is sung over Israel while Israel still lives: &ldquo;Fallen, no more to rise, is the virgin Israel; forsaken on her land, with none to raise her up&rdquo; (5:2). The word &lsquo;fallen&rsquo; in Hebrew is a perfect tense, the tense of completed action, as if the catastrophe has already occurred. Amos speaks from within the perspective of the divine word, where judgment pronounced is judgment as good as accomplished. The nation that feels secure in its prosperity is, in God&rsquo;s sight, already mourned.",
      "The military scope of the coming disaster is outlined with stark arithmetic: &ldquo;For thus says the Lord God: The city that went out a thousand shall have a hundred left, and that which went out a hundred shall have ten left to the house of Israel&rdquo; (5:3). Nine out of ten will perish. The armies that march out in confident strength will return &mdash; or rather, will not return &mdash; as a remnant of a remnant. Amos does not soften this; he reports the prophetic word with the bluntness of a man who has no personal or political stake in making it easier to hear.",
      "Into this funeral atmosphere, the Lord issues his urgent call: &ldquo;Seek me and live; but do not seek Bethel, and do not enter into Gilgal or cross over to Beersheba; for Gilgal shall surely go into exile, and Bethel shall come to nothing&rdquo; (5:4&ndash;5). This is one of the most remarkable commands in the prophetic books. Bethel was the primary sanctuary of the northern kingdom, established by Jeroboam I at the very inception of the divided monarchy. Gilgal was a place rich in Israelite memory &mdash; the site of the nation&rsquo;s first encampment in the promised land after crossing the Jordan. These were not pagan sites; they were the holy places of Israel&rsquo;s own tradition.",
      "Yet the Lord tells his people not to seek him there. The problem was not the geography but the content of what was being practiced: worship without justice, liturgy without obedience, the forms of covenant religion emptied of covenant faithfulness. The sanctuaries had become places where Israel could maintain the appearance of devotion to God while simultaneously trampling the poor and perverting justice in the courts. God cannot be found in a religious institution that has been conscripted into the service of injustice.",
      "The command &ldquo;seek me and live&rdquo; sets up the central contrast of the chapter. To seek the Lord is not to seek a sanctuary or a tradition; it is to orient the whole of life &mdash; commerce, agriculture, courts, family &mdash; toward the character and requirements of the God who brought Israel out of Egypt. The life being offered is not merely biological survival, though that is included; it is the fullness of covenant life, the shalom that attends a community that lives in accordance with God&rsquo;s justice and mercy.",
      "The doxology in verses 8 and 9 anchors the call in the power of the God who is doing the calling: he who made the Pleiades and Orion, who turns deep darkness into morning, who calls for the waters of the sea and pours them on the surface of the earth &mdash; the Lord is his name. The one who commands &ldquo;seek me and live&rdquo; is not an abstract moral principle or a local tribal deity; he is the Creator and Ruler of the cosmos, the one before whom the nations are as nothing. To seek this God is not a retreat from reality; it is the most realistic thing a human being or a nation can do.",
    ],
  },
  {
    id: "I Hate Your Religious Feasts",
    heading: "I Hate Your Religious Feasts",
    reference: "Amos 5:21&ndash;23",
    paragraphs: [
      "Few passages in the Old Testament are as confrontational as Amos 5:21&ndash;23. The voice of the Lord speaks with an intensity that is almost shocking: &ldquo;I hate, I despise your feasts, and I take no delight in your solemn assemblies. Even though you offer me your burnt offerings and grain offerings, I will not accept them; and the peace offerings of your fattened animals, I will not look upon them. Take away from me the noise of your songs; to the melody of your harps I will not listen&rdquo; (5:21&ndash;23).",
      "The word &ldquo;hate&rdquo; is not rhetorical overstatement; in the Hebrew prophetic tradition, it describes the divine reaction to something that is fundamentally incompatible with God&rsquo;s own character. What God hates here is not worship per se, but worship that has been severed from the justice and mercy that worship is meant to express and cultivate. Israel was keeping all the appointed feasts: the festivals of Passover and Tabernacles, the solemn assemblies, the burnt offerings and grain offerings and peace offerings. None of the external forms were being neglected. The calendar was being kept, the liturgy performed, the music played.",
      "The problem was what was happening outside the sanctuary. In the courts and the marketplace, justice was being perverted. The poor were being sold for a pair of sandals (2:6). Those who sought to bring honest testimony were being silenced (5:10). The grain of the poor was being taxed to support the luxury of the wealthy (5:11). The very people who brought their offerings to Bethel on the feast days were, on other days of the week, crushing the heads of the poor into the dust of the earth. Their worship was a weekly performance that left their actual lives entirely unchanged.",
      "God&rsquo;s rejection of their worship is therefore not a rejection of the institution of sacrifice and liturgy as such; it is a prophetic declaration that sacrifice and liturgy divorced from justice have lost their meaning as worship. They have become, in effect, a kind of bribery &mdash; an attempt to maintain a favorable relationship with God while ignoring what God most cares about. This is why God says he will not &ldquo;look upon&rdquo; the peace offerings of their fattened animals: the animals are there, the ritual is performed, but the eyes of God are averted. He refuses to be worshiped by people who are practicing injustice while singing his praises.",
      "The specific mention of &ldquo;the noise of your songs&rdquo; and &ldquo;the melody of your harps&rdquo; strikes at what was perhaps the most emotionally powerful element of Israel&rsquo;s worship. Music has always had the capacity to generate a powerful feeling of religious sincerity &mdash; the sense that one is really worshiping, really moved, really in the presence of God. Amos does not allow this feeling to serve as evidence of genuine worship. The noise of songs can be very loud and the melody of harps very beautiful, and God can still refuse to listen, because the sound of music does not drown out the sound of injustice.",
      "This passage has been enormously influential in the theology of worship throughout the Christian tradition. It stands behind Jesus&rsquo; teaching that one cannot bring a gift to the altar while there is unreconciled conflict with a brother (Matthew 5:23&ndash;24). It resonates in Isaiah&rsquo;s similar oracle: &ldquo;Your appointed feasts my soul hates; they have become a burden to me; I am weary of bearing them&rdquo; (Isaiah 1:14). The prophetic tradition speaks with one voice on this point: there is a kind of religious activity that God finds more offensive than no religious activity at all, and it is the kind that is performed in the name of God while the requirements of God are being violated.",
    ],
  },
  {
    id: "Let Justice Roll Down",
    heading: "Let Justice Roll Down",
    reference: "Amos 5:24",
    paragraphs: [
      "Verse 24 of Amos 5 is one of the most famous lines in all of prophetic literature: &ldquo;But let justice roll down like waters, and righteousness like an ever-flowing stream.&rdquo; These words follow immediately from God&rsquo;s rejection of Israel&rsquo;s feasts and songs in the preceding verses, and they constitute the positive alternative to the worship God has refused. The grammar is imperatival &mdash; this is not a prediction of what will happen but a command describing what must happen if the people of God are to be acceptable to him.",
      "The image of justice rolling down &ldquo;like waters&rdquo; is drawn from the landscape of the ancient Near East, where water was the most precious and unpredictable of commodities. In the arid hill country of Palestine, water did not flow gently and reliably; it rushed down in torrents during the rainy season and disappeared entirely in the summer months. To speak of justice rolling down &ldquo;like waters&rdquo; is to invoke this image of power, abundance, and irresistibility. Justice should not trickle intermittently through the cracks of the legal system; it should cascade.",
      "The parallel image of righteousness as an &ldquo;ever-flowing stream&rdquo; deepens the picture. In Hebrew, &ldquo;ever-flowing&rdquo; (&lsquo;ethan&rsquo;) refers to a perennial spring that never runs dry, in contrast to the seasonal wadis that flood in winter and are bone-dry in summer. The social order that God is calling Israel to create is not one that delivers justice occasionally, when conditions are favorable and there is no personal cost to doing so. It is one in which the flow of justice is consistent, dependable, and inexhaustible &mdash; available to the widow and the orphan and the poor on every day of the year, not just on the days when it is convenient.",
      "The word translated &ldquo;justice&rdquo; (&lsquo;mishpat&rsquo;) in the Hebrew Bible refers to the fair and right order of human community &mdash; the giving of what is due to each person, the hearing of the case of the weak, the punishment of the guilty, the protection of the innocent. It is the stuff of courts and commerce and community life. &ldquo;Righteousness&rdquo; (&lsquo;tsedaqah&rsquo;) is closely related but carries a relational dimension: it is the quality of right relationship, of acting in accordance with the obligations of one&rsquo;s covenant bonds. Together they describe a community in which every person is treated as a covenant member with legitimate claims on the community&rsquo;s care and fairness.",
      "In its original context, the command is addressed to a nation in which justice was conspicuously not flowing. The poor were being sold for the price of a pair of sandals; those who spoke honestly in the gate were being hated; the afflicted were being pushed aside from the path; men were reclining in luxury on the proceeds of the grain they had taken from the poor. The gap between the rich and the poor was growing wider, and the legal system that should have protected the weak was being used by the powerful to make themselves more powerful. Into this situation the prophetic word falls like a summons: let it not be so.",
      "Amos 5:24 became the textual anchor for many of the great social justice movements of the modern era. The Reverend Martin Luther King Jr. quoted it in his &ldquo;I Have a Dream&rdquo; speech and returned to it repeatedly throughout his ministry as the prophetic foundation for the civil rights movement. The verse functions in these contexts not as a proof text plucked from its setting but as a genuine articulation of what the God of Israel requires of any community that bears his name. Where justice does not flow freely and righteousness is not a perennial spring, the community has failed in its most basic covenantal obligation &mdash; and no amount of religious observance will compensate.",
    ],
  },
  {
    id: "The Day of the LORD",
    heading: "The Day of the LORD",
    reference: "Amos 5:18&ndash;20",
    paragraphs: [
      "The oracle concerning the Day of the LORD in Amos 5:18&ndash;20 is one of the most theologically significant passages in the entire prophetic tradition, and it is particularly important because of what it reveals about Israel&rsquo;s own expectations. The passage begins with a shocking &lsquo;woe&rsquo;: &ldquo;Woe to you who desire the day of the LORD! Why would you have the day of the LORD? It is darkness, and not light&rdquo; (5:18). The &lsquo;woe&rsquo; formula in the prophets is associated with funeral laments; it announces that something terrible is coming. But the remarkable thing here is that the woe is pronounced not on enemies of Israel but on Israelites who are actively longing for the Day of the LORD.",
      "This tells us something crucial about the popular theology of eighth-century Israel. The &ldquo;Day of the LORD&rdquo; was apparently a concept that Israel had been looking forward to with genuine anticipation. It was understood as the day when the God of Israel would decisively intervene in history to vindicate his people and judge their enemies &mdash; a day of divine triumph that would confirm Israel&rsquo;s special status as the covenant people and bring down the nations that had oppressed them. It had become, in other words, a religious ideology in the service of national self-confidence.",
      "Amos turns this expectation completely on its head. Yes, the Day of the LORD is coming &mdash; but it will not be what Israel expects. &ldquo;Is not the day of the LORD darkness, and not light, and gloom with no brightness in it?&rdquo; (5:20). The people who have been longing for the Day of God&rsquo;s judgment have failed to reckon with one crucial fact: they themselves are under that judgment. The same God who will judge the nations will judge Israel, and Israel has given him far more reason to judge than Amos has yet finished describing.",
      "The parable that illustrates this inversion is brief and vivid: &ldquo;as if a man fled from a lion, and a bear met him, or went into the house and leaned his hand against the wall, and a serpent bit him&rdquo; (5:19). The man escaping from the lion only to be met by a bear captures the impossibility of escape from divine judgment. The image of going into the house for safety only to be bitten by a serpent hiding in the wall removes even the last refuge. There is no safe place for those who have filled their houses and their sanctuaries with injustice; the judgment finds them everywhere.",
      "The theological significance of this passage extends far beyond the particular situation of eighth-century Israel. It is a standing warning against the religious use of the concept of divine judgment in the service of national or personal self-interest. Every community of faith is tempted to imagine that God&rsquo;s judgment is something that will fall on others &mdash; on the pagans, on the enemies, on the people whose sins are most visible. Amos warns that this imagination is exactly backward: the Day of the LORD is most dangerous for those who presume upon their covenant status, who attend the appointed feasts, and who call upon God&rsquo;s name while ignoring his requirements.",
      "For the Christian reader, this passage is illuminated by the New Testament&rsquo;s teaching about judgment beginning with the household of God (1 Peter 4:17). Jesus himself warned that it would be more tolerable for Sodom and Gomorrah on the day of judgment than for the cities that had heard his teaching and rejected it (Matthew 11:24). The inversion of Amos &mdash; the Day of the LORD will be darkness for those who expect it to be light &mdash; is extended in the New Testament: the coming of Christ in judgment will expose whether any community&rsquo;s profession of faith has been accompanied by the justice and righteousness that he requires. The darkness that Amos announced has not passed; it has only been clarified.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Amos 5 Today",
    reference: "Amos 5 &mdash; For the Life of the Church",
    paragraphs: [
      "Amos 5 confronts every generation of the church with the same uncomfortable questions it posed to Israel in the eighth century before Christ. The specific historical situation has changed &mdash; the golden calves of Bethel are gone, the sanctuaries of Gilgal are dust &mdash; but the underlying human propensity to substitute religious performance for covenant faithfulness remains entirely constant. The church that fills its sanctuaries with music, crowds its calendar with programs, and sustains impressive levels of institutional activity while remaining indifferent to the poor and to justice in the broader community is in precisely the position that Amos describes: offering God a noise that he refuses to hear.",
      "The call to &ldquo;seek the Lord and live&rdquo; has its specifically Christian form in the call to seek Christ himself rather than the forms and institutions through which he makes himself available. This is not a rejection of the church, of liturgy, of the sacraments, or of ordered worship &mdash; any more than Amos&rsquo;s rejection of Bethel and Gilgal was a rejection of all worship. It is a warning against the ever-present temptation to substitute the container for the content, to treat attendance at worship as an adequate substitute for a life oriented toward God. The church is a means to an end; the end is the living God himself, and the life that flows from genuine encounter with him.",
      "The indictment of religious feasts divorced from justice (vv. 21&ndash;23) should prompt searching self-examination in every congregation. What is our music for? Are the songs we sing expressions of a genuine orientation toward God that shows up in the texture of our common life, or are they a weekly emotional experience that leaves our actual habits of heart and commerce unchanged? Are the poor present in our congregation, or have we unconsciously created a community so shaped by the economic assumptions of a particular class that the kind of people Amos was most concerned about cannot find a home in it? These are not comfortable questions, but Amos will not permit us to avoid them.",
      "The famous oracle of Amos 5:24 &mdash; &ldquo;let justice roll down like waters, and righteousness like an ever-flowing stream&rdquo; &mdash; functions in the New Testament community as a description of the kingdom of God that is breaking in through Christ. The church is called to be a community in which the kingdom&rsquo;s justice is already becoming visible &mdash; not as a political program or a social agenda grafted onto the gospel from outside, but as the natural fruit of genuine worship of the God of Israel. Where the church is truly worshiping the God who made the Pleiades and Orion, the God who brought Israel out of Egypt, the God who raised Jesus from the dead, justice and righteousness will flow. Where they do not flow, the worship is suspect.",
      "The warning about the Day of the LORD (vv. 18&ndash;20) continues to speak with force to any community that has developed a theology in which God&rsquo;s judgment is something that will vindicate insiders and fall on outsiders. The prosperity gospel, in its various forms, is a contemporary version of what Amos was targeting: the belief that covenant status (understood as church membership, proper doctrine, or spiritual experience) provides immunity from the requirements of justice. Amos&rsquo;s word is that God is not a tribal patron who can be managed through correct religious performance; he is the sovereign Lord of history who searches the heart, and from whom no injustice &mdash; however nicely dressed in religious garments &mdash; is hidden.",
      "Ultimately, Amos 5 calls the church to a wholeness of life in which what happens inside the sanctuary and what happens outside of it are expressions of a single orientation toward the God of justice and mercy. The songs of the congregation should be continuous with the way its members conduct their business, treat their employees, speak in the public square, and advocate for those who have no voice in the halls of power. The lament with which Amos opens &mdash; &ldquo;fallen, no more to rise&rdquo; &mdash; need not be the final word for any community of faith that hears the prophetic summons and turns, not to a sanctuary, but to the Lord himself who stands behind it. &ldquo;Seek me,&rdquo; he says, &ldquo;and live.&rdquo;",
    ],
  },
];

const videoItems = [
  { videoId: "OPMiRvVoRhY", title: "BibleProject - Overview of Amos" },
  { videoId: "tBhLaXhm9Ag", title: "Amos 5 - Let Justice Roll Down Like Waters" },
  { videoId: "3vNk_WJcfns", title: "The Book of Amos Explained - Social Justice and the Prophets" },
  { videoId: "BvHqeHvYJ7M", title: "Amos - Seeking God and the Day of the LORD" },
];

export default function Amos5GuidePage() {
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
            Amos 5 &mdash; Let Justice Roll Down
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The prophet Amos delivers a funeral lament over Israel and issues God&rsquo;s urgent call: &ldquo;Seek me and live.&rdquo; God rejects Israel&rsquo;s religious feasts because of their injustice, and commands: &ldquo;Let justice roll down like waters, and righteousness like an ever-flowing stream.&rdquo; The Day of the LORD will be darkness, not light, for those who presume on their covenant status while trampling the poor.
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
              Deepen your study of Amos 5 through these video teachings on the prophet&rsquo;s social justice message, the call to seek the Lord, and the meaning of the Day of the LORD.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Seek the Lord and Live</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Amos 5 is a chapter for every community of faith tempted to substitute religious performance for covenant faithfulness. God rejects the noise of songs and the abundance of offerings when they are offered by hands that exploit the poor and pervert justice in the courts. His command is simple and total: seek me, not the sanctuary &mdash; and let justice roll down like waters, and righteousness like an ever-flowing stream.
          </p>
        </div>
      </main>
    </div>
  );
}
