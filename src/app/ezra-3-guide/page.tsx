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
  "Rebuilding the Altar",
  "The Feast of Tabernacles",
  "Laying the Foundation",
  "Weeping and Rejoicing",
  "Theological Themes",
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
    heading: "Overview of Ezra 3",
    reference: "Ezra 3:1&ndash;13",
    paragraphs: [
      "Ezra 3 is one of the most emotionally charged chapters in the Old Testament, recording the earliest acts of worship and reconstruction by the returned exiles in the land of their ancestors. The chapter unfolds in two broad movements: first, the rebuilding of the altar and the re-establishment of the sacrificial calendar including the Feast of Tabernacles (3:1&ndash;7); and second, the formal laying of the temple foundation and the extraordinary dedication ceremony that accompanied it (3:8&ndash;13). Together these two movements mark the first tangible steps in the restoration of Israel&rsquo;s covenant worship after the long silence of the Babylonian exile.",
      "The historical context is essential for appreciating the weight of this chapter. In 586 B.C., Nebuchadnezzar&rsquo;s army had besieged and destroyed Jerusalem, demolishing the Temple that Solomon had built, carrying off its vessels, and deporting the leading citizens of Judah to Babylon. The sacred fire had been quenched; the daily sacrifices had ceased; the feasts of the Lord had been silenced. For approximately fifty years, the covenant community had lived without the temple, without the altar, without the regular rhythms of sacrificial worship that had defined their national and spiritual life. Ezra 3 records the moment when, under Persian permission, they begin to rebuild.",
      "The chapter is anchored by two key human figures from the books of Ezra and Nehemiah: Zerubbabel son of Shealtiel, a descendant of David who serves as the civil governor of the returned community, and Jeshua (Joshua) son of Jozadak, the high priest. Together they represent the two streams of authority that the post-exilic community needed to reconstitute &mdash; royal and priestly, civic and cultic. That these two figures work together without apparent conflict is itself a sign of the community&rsquo;s renewed health and purpose.",
      "Ezra 3 also sets up the structural tension that will run through the rest of the book. The people who return from exile are a mixed company in terms of memory: those who remember the former Temple weep at the foundation-laying because the new building seems so much less magnificent; those born in exile shout for joy because any temple at all represents an almost unimaginable restoration. The mixing of weeping and rejoicing &mdash; so intermingled that witnesses cannot distinguish the sounds (3:13) &mdash; is one of the most poignant moments in Scripture and a profound theological statement about how God&rsquo;s restoration works: not always in ways that satisfy every expectation, but always in ways that honor his promise.",
      "The chapter is brief &mdash; only thirteen verses &mdash; but it covers events spanning more than a year and encompasses the full range of Israel&rsquo;s liturgical life: daily sacrifices, festival worship, and the dedication of a new foundation. Its brevity is itself meaningful: the narrator is not concerned to give architectural details or administrative records, but to highlight the theological significance of each act. The altar is rebuilt first &mdash; before any other construction &mdash; because worship precedes building, and the relationship with God must be restored before the house of God is built.",
    ],
  },
  {
    id: "Rebuilding the Altar",
    heading: "Rebuilding the Altar of Burnt Offerings",
    reference: "Ezra 3:1&ndash;3",
    paragraphs: [
      "When the seventh month arrives &mdash; Tishri, the most sacred month of the Jewish calendar, containing the Feast of Trumpets, the Day of Atonement, and the Feast of Tabernacles &mdash; the people gather as one man in Jerusalem (3:1). The phrase &ldquo;as one man&rdquo; is a loaded expression in the Hebrew scriptures, appearing at moments of unusual national unity and common purpose (cf. Judges 20:8; Nehemiah 8:1). The exiles who have returned from Babylon are, at this moment, a community of singular focus: they have come home, and the first thing they do together is gather at Jerusalem.",
      "Jeshua and Zerubbabel, along with the priests and Levites who had returned, rise and build the altar of the God of Israel in order to offer burnt offerings upon it (3:2). The text specifies that they built it &ldquo;as it is written in the Law of Moses the man of God&rdquo; &mdash; a detail that signals the community&rsquo;s commitment to covenant faithfulness rather than innovation. They are not creating a new religion; they are recovering and restoring the ancient one that the Lord had given. The altar is built on its foundations, the same site where the altar had stood before the destruction, honoring the continuity of the covenant even across the chasm of exile.",
      "What is striking is the order of events: the altar is rebuilt before any work begins on the temple itself. Indeed, the temple foundation is not laid until the second year (3:8). For seven months, the community worships at an altar in the ruins, exposed and without a house over it. This priority is deliberate and theologically charged. The sacrificial relationship with God &mdash; the daily burnt offerings, morning and evening, specified in Exodus and Numbers &mdash; is more fundamental than the building. It is possible to worship the Lord without a building, but not without the altar. And so the altar goes up first.",
      "The reason for the urgency is stated plainly: &ldquo;for fear was on them because of the peoples of the lands&rdquo; (3:3). The returned exiles are not in a position of security. They are a small, vulnerable community surrounded by peoples who regard them with suspicion or hostility &mdash; the same &ldquo;peoples of the land&rdquo; who will later actively oppose the rebuilding of the temple and the walls of Jerusalem. Yet precisely in this situation of fear, they rebuild the altar and begin the sacrifices. The altar is not a luxury for times of peace; it is the foundation of the community&rsquo;s life, the thing they cannot live without even under threat.",
      "The daily burnt offerings are immediately reinstated &mdash; morning and evening, as prescribed in Exodus 29:38&ndash;42 and Numbers 28:1&ndash;8. These twice-daily sacrifices were the heartbeat of Israel&rsquo;s worship, the continuous acknowledgment of total dependence on the Lord, the covenant people&rsquo;s way of saying that every morning and every evening belongs to God. After fifty years of silence, the fire is lit again on the altar, and the ascending smoke once more declares that Israel&rsquo;s God is alive, that his covenant is unbroken, and that his people have returned to their land and to their Lord.",
      "The rebuilding of the altar in Ezra 3 is a compressed rehearsal of the entire theology of the book. The exile had not been a sign that God was absent or defeated; it had been a covenant judgment on a covenant people. Now the same covenant that produced the judgment produces the restoration. The Mosaic law that commanded the sacrifices is the same law that promised the regathering of the exiles. The altar that goes up in the ruins is evidence that the Lord&rsquo;s word is more durable than empires, and that his purposes for his people outlast every catastrophe.",
    ],
  },
  {
    id: "The Feast of Tabernacles",
    heading: "Celebrating the Feast of Tabernacles",
    reference: "Ezra 3:4&ndash;7",
    paragraphs: [
      "Having restored the daily sacrifices, the returned community immediately turns to the celebration of the Feast of Tabernacles (Sukkoth), one of the three great pilgrimage feasts of Israel prescribed in the Mosaic law. Tabernacles was celebrated in the seventh month (Tishri) by building temporary shelters and living in them for seven days to commemorate the wilderness wanderings &mdash; the period when Israel lived in tents as the Lord led them through the desert from Egypt to Canaan. Of all the feasts to celebrate first, the choice of Tabernacles is deeply fitting for a community that has just returned from a journey.",
      "The description in Ezra 3:4 is spare but significant: they celebrated the Feast of Tabernacles &ldquo;as it is written, and offered the daily burnt offerings by number according to the rule, as each day required.&rdquo; Every detail is oriented toward faithfulness to the written Torah. This is not a spontaneous or informal celebration but a deliberate recovery of the prescribed forms of covenant worship. The community is saying, in effect: we return not only to the land but to the law; we resume not merely the sacrifices but the whole liturgical calendar that the Lord commanded.",
      "Tabernacles carried a particular resonance for a people who had just completed a second exodus from a foreign land back to the promised land. The wilderness wanderings that Tabernacles commemorated were not a period of shame but of intimacy &mdash; the time when God dwelt with his people in a tent and led them daily by cloud and fire. The prophet Hosea had described the exile in terms of a return to the wilderness, a time of discipline but also of renewed intimacy with God (Hosea 2:14&ndash;15). By celebrating Tabernacles on their return, the exiles were claiming that their desert time was over and the promised land had been re-entered.",
      "The Feast of Tabernacles was also associated in the prophetic tradition with the age of eschatological restoration. Zechariah 14 envisions a day when all nations will come up to Jerusalem to keep the Feast of Tabernacles, a universal pilgrimage feast for the whole renewed earth. By observing Tabernacles immediately upon their return, the post-exilic community was aligning itself with that prophetic hope, enacting in miniature the restoration that the prophets had promised. The feast was not merely a commemoration of the past; it was a foretaste of the future.",
      "After the Feast of Tabernacles, the text notes that the exiles offered the regular offerings &mdash; the new moon offerings, the freewill offerings for all the appointed feasts of the Lord, and the offerings of everyone who brought a freewill offering to the Lord (3:5). The liturgical life of Israel is being restored layer by layer, from the daily sacrifices to the monthly new moon offerings to the annual festivals. Each layer added represents another strand of covenant relationship re-woven between the Lord and his people.",
      "The practical arrangements for the reconstruction are also made: cedar trees are brought from Lebanon, through the port of Joppa, by the Sidonians and Tyrians. This arrangement echoes the arrangements Solomon made with Hiram of Tyre for the building of the first temple (1 Kings 5:6&ndash;12). The returned exiles are not merely rebuilding a building; they are continuing a story. The same God who provided cedar for Solomon&rsquo;s temple is providing cedar again, through the same trade routes, to the same port. The exile interrupted the story but did not end it, and the resumption of the temple-building project is a sign that God&rsquo;s purpose has not been abandoned.",
    ],
  },
  {
    id: "Laying the Foundation",
    heading: "Laying the Foundation of the Temple",
    reference: "Ezra 3:8&ndash;11",
    paragraphs: [
      "In the second month of the second year after the return, Zerubbabel and Jeshua set to work to build the house of the Lord (3:8). The choice of month is deliberate: the second month, Iyar, was the same month in which Solomon had begun the construction of the first temple (1 Kings 6:1). The echo is intentional &mdash; the returned community is not beginning something entirely new but resuming and continuing the work that had defined the greatest period of Israel&rsquo;s history. They stand in the line of Solomon, completing what was interrupted.",
      "The Levites are appointed to oversee the work, those twenty years old and upward (3:8). The Levites &mdash; Israel&rsquo;s dedicated tribe of temple servants &mdash; had been the workers, singers, and gatekeepers of the first temple. Their appointment to oversee the foundation-laying signals that the proper order of Mosaic and Davidic worship is being restored, not improvised. Jeshua with his sons and brothers, Kadmiel and his sons, the sons of Judah &mdash; together they stand to supervise the work on the house of God.",
      "When the builders laid the foundation of the temple of the Lord, the priests stood in their vestments with trumpets, and the Levites, the sons of Asaph, with cymbals, to praise the Lord, according to the directions of David king of Israel (3:10). The musical ordering of the ceremony reaches back to David himself, who had organized the Levitical musicians for the service of the tabernacle and the ark. Even the dedication of a foundation is not a merely technical event; it is a liturgical occasion requiring the full apparatus of Israelite worship. Nothing in the life of God&rsquo;s people is secular.",
      "The great anthem that the community sings at the foundation-laying is a song that appears repeatedly in the Hebrew scriptures at moments of supreme divine faithfulness: &ldquo;For he is good, for his steadfast love endures forever toward Israel&rdquo; (3:11). The same refrain appears in the psalms of David (Ps 136), in Solomon&rsquo;s dedication of the first temple (2 Chronicles 7:3), and elsewhere. The word translated &ldquo;steadfast love&rdquo; is hesed &mdash; the covenant loyalty, the unfailing faithfulness, the bond-keeping love of God that does not dissolve even when his people go into exile. To sing hesed at the foundation-laying is to declare that the return from exile is not a lucky coincidence but the outworking of God&rsquo;s indestructible covenant commitment.",
      "The response of all the people is immediate: they shout with a great shout when they praise the Lord, because the foundation of the house of the Lord has been laid (3:11). The shout (Hebrew: teruah) is the vocabulary of battle victory and divine triumph &mdash; the same shout with which the walls of Jericho had fallen, the same shout that had met the ark of the covenant when it was brought into battle. Here it is the shout of covenant restoration, the sound of a people who have seen the impossible happen: the temple foundation rising again from the rubble of defeat. The God who had permitted the destruction is now enabling the rebuilding, and the only appropriate response is a shout.",
      "The foundation-laying ceremony in Ezra 3 reveals something profound about post-exilic theology: the community&rsquo;s confidence rests not on their own strength &mdash; they are few in number, politically subordinate to Persia, economically marginal &mdash; but on the faithfulness of the God who brought them home. The celebration is disproportionate to the achievement: laying a foundation is, after all, only the beginning of building. But for a people who had thought the story was over, the beginning is everything. The foundation stone is the promise made visible.",
    ],
  },
  {
    id: "Weeping and Rejoicing",
    heading: "Weeping and Rejoicing Together",
    reference: "Ezra 3:12&ndash;13",
    paragraphs: [
      "The final two verses of Ezra 3 are among the most evocative in the entire Bible, capturing in a single image the complex emotional reality of restoration after loss. Many of the priests and Levites and heads of fathers&rsquo; houses, old men who had seen the first house, wept with a loud voice when they saw the foundation of this house being laid (3:12). These were the men old enough to remember the glory of Solomon&rsquo;s temple &mdash; the cedar and gold, the ark of the covenant in the Most Holy Place, the cloud of God&rsquo;s glory that had filled the house at its dedication. They knew what had been lost, and the modest new foundation before them could not compare.",
      "But many others shouted aloud for joy (3:12). These were presumably the younger exiles &mdash; those born in Babylon who had never seen Jerusalem, who had grown up on stories of the temple rather than memories of it. For them, this foundation was not a diminishment of glory but an almost inconceivable gift. Any temple at all, any altar at all, any place where the name of the Lord dwelled &mdash; this was more than they had ever expected to see in their own lifetime. For the young, the foundation was a beginning; for the old, it was a shadow of an ending.",
      "The text says that &ldquo;the people could not distinguish the sound of the joyful shout from the sound of the people&rsquo;s weeping, for the people shouted with a great shout, and the sound was heard far away&rdquo; (3:13). The intermingling of weeping and rejoicing is not presented as a problem to be resolved or a contradiction to be explained. It is presented as the audible reality of a community in the process of restoration &mdash; a community that holds simultaneously the grief of what was lost and the joy of what is being recovered. Neither emotion cancels the other; both are true, and both are holy.",
      "The prophet Haggai, who ministered at exactly this period, addressed the discouraged old men directly. He acknowledged their grief but reframed it: &ldquo;Who is left among you who saw this house in its former glory? How do you see it now? Is it not as nothing in your eyes?&rdquo; (Haggai 2:3). His answer to his own question is a remarkable promise: &ldquo;The latter glory of this house shall be greater than the former, says the Lord of hosts&rdquo; (Haggai 2:9). The weeping of the old men was not wrong, but it was incomplete; they were measuring the second temple against the first, when the Lord was measuring it against a future glory they could not yet see.",
      "Christian readers have historically read Haggai&rsquo;s promise as pointing forward to Christ &mdash; the one in whom all the glory of the temple was fulfilled and surpassed. In John&rsquo;s Gospel, Jesus declares, &ldquo;Destroy this temple, and in three days I will raise it up&rdquo; (John 2:19), and John adds: &ldquo;he was speaking about the temple of his body.&rdquo; The glory that exceeded Solomon&rsquo;s temple was not Herod&rsquo;s expanded renovation but the incarnate Word who &ldquo;tabernacled among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth&rdquo; (John 1:14). The tears at Ezra&rsquo;s foundation were tears on the way to a glory that would exceed all tears.",
      "The intermingling of weeping and rejoicing at the end of Ezra 3 is also a pastoral word for every generation of believers who live between the promise and the fulfillment. We inhabit a world where the kingdom of God has been inaugurated but not yet consummated &mdash; where we have seen the foundation laid in the death and resurrection of Jesus but await the completion of the new creation. In this in-between time, weeping and rejoicing are not opposites but companions. The shout and the sob belong together in the mouth of a people who know what they have lost, know what they have been given, and know what they are still waiting for.",
    ],
  },
  {
    id: "Theological Themes",
    heading: "Theological Themes in Ezra 3",
    reference: "Ezra 3:1&ndash;13",
    paragraphs: [
      "The first and most foundational theological theme of Ezra 3 is the priority of worship. The returned exiles could have prioritized housing, agriculture, infrastructure, or security &mdash; all of which were real and pressing needs. Instead, before any of these concerns are addressed, the altar goes up. This ordering is not incidental; it reflects the conviction that the community&rsquo;s relationship with God is the precondition of everything else. The people need bread, yes, but they need the altar first. As Moses had taught: &ldquo;Man does not live by bread alone, but man lives by every word that comes from the mouth of the Lord&rdquo; (Deuteronomy 8:3). Ezra 3 enacts this theology: get the worship right, and trust God to provide for everything else.",
      "The second major theme is covenant continuity across catastrophe. The exile had raised an agonizing theological question: had God abandoned his people? Had the covenant been broken beyond repair? Were the promises made to Abraham and David now void? Ezra 3 answers these questions not with argument but with action. The altar is built &ldquo;as it is written in the Law of Moses&rdquo; &mdash; the same law, the same altar specifications, the same sacrificial calendar. The temple foundation is laid &ldquo;according to the directions of David king of Israel&rdquo; &mdash; the same Davidic musical order that had governed the first temple. The exile interrupted the covenant but did not annul it, and every act of rebuilding is a declaration that God&rsquo;s word is more durable than any human catastrophe.",
      "The sovereignty of God over imperial powers is the third great theme. The returned exiles are in the land not by military conquest but by Persian decree &mdash; by the edict of Cyrus, who is himself described in Isaiah 45:1 as the Lord&rsquo;s &ldquo;anointed&rdquo; (mashiach), commissioned to rebuild Jerusalem. The greatest empire of the ancient world serves as an unwitting instrument of the covenant God of Israel. This theme &mdash; God using pagan rulers to accomplish his purposes &mdash; runs through the entire books of Ezra and Nehemiah and connects to a larger biblical pattern: Pharaoh, the Assyrian king, Nebuchadnezzar, and now Cyrus, all function as instruments in God&rsquo;s hands without knowing it. The God of Israel is Lord of the nations.",
      "The hesed &mdash; steadfast love &mdash; of God is the theological center around which the celebration of the foundation-laying revolves. The great refrain of Ezra 3:11, &ldquo;For he is good, for his steadfast love endures forever toward Israel,&rdquo; is a direct affirmation that the return from exile is not an accident or a political development but an expression of God&rsquo;s covenant loyalty. Hesed is the love that does not give up, the faithfulness that outlasts failure, the mercy that returns again and again even when it has been spurned. To sing hesed at the new foundation is to interpret the whole story of exile and return through the lens of God&rsquo;s indestructible love.",
      "The mingling of memory, loss, and hope that characterizes the weeping and rejoicing at the end of the chapter raises a fifth theme: the relationship between the old and the new in God&rsquo;s restorative work. God&rsquo;s restoration does not always match human expectation or desire. The second temple was smaller and less ornate than the first. The community was fewer in number and lower in status than the Israel of Solomon&rsquo;s day. Yet the Lord declared through Haggai that the latter glory would exceed the former. This pattern &mdash; God&rsquo;s new thing exceeding the old even when it does not resemble it &mdash; reaches its fulfillment in the New Testament, where the resurrection exceeds the creation and the new covenant surpasses the old. The foundation in Ezra 3 is a type of every foundation God lays in history: modest in appearance, immeasurable in significance.",
      "Finally, Ezra 3 addresses the theme of communal solidarity and shared calling. The phrase &ldquo;as one man&rdquo; at the beginning of the chapter signals that what is being rebuilt is not only an altar or a temple but a community. Israel&rsquo;s covenant life had always been corporate: the sacrifices were offered on behalf of the whole people, the feasts were communal celebrations, the foundation-laying was a shared act of worship. The exile had scattered and fragmented the community; the return is its reconstitution. The tears and the shouts at the end of the chapter belong to different people, but they are heard together, inseparable, as the voice of a single people. The community is being rebuilt together, generation alongside generation, grief alongside joy, the memory of loss alongside the hope of restoration.",
    ],
  },
];

const videoItems = [
  { videoId: "NkRp7HqGbL8", title: "Ezra 3 - Rebuilding the Altar and Laying the Foundation" },
  { videoId: "Xm4TpQcRvK2", title: "BibleProject - Overview of Ezra and Nehemiah" },
  { videoId: "Hs9WnYdBqL5", title: "The Return from Exile - Ezra 1-3 Verse by Verse" },
  { videoId: "Jd6VpMnCwR3", title: "Weeping and Rejoicing at the Temple Foundation - Ezra 3 Study" },
];

export default function Ezra3GuidePage() {
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
            Ezra 3 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The returned exiles gather in Jerusalem, rebuild the altar of burnt offerings, celebrate the Feast of Tabernacles, and lay the foundation of the new temple &mdash; a moment so overwhelming that the weeping of those who remembered the old temple and the shouting of those who had never seen it could not be told apart.
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
              Deepen your study of Ezra 3 through these video teachings on the return from exile, the rebuilding of the altar, the Feast of Tabernacles, and the foundation-laying that moved a generation to tears and shouts of joy.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>His Steadfast Love Endures Forever</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ezra 3 is a chapter about the God who keeps his promises across catastrophe. The exiles who returned had every reason to despair, but instead they rebuilt the altar, celebrated the feasts, and laid the foundation to the refrain that has anchored Israel&rsquo;s faith in every generation: &ldquo;For he is good, for his steadfast love endures forever.&rdquo; The weeping and the shouting together declare that God&rsquo;s restoration is real, even when it is not yet complete.
          </p>
        </div>
      </main>
    </div>
  );
}
