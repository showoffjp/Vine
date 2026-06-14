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
  "Elijah and Elisha",
  "The Miracles of Elisha",
  "The Fall of Israel",
  "The Godly Reformers",
  "The Fall of Jerusalem",
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
    id: "Elijah and Elisha",
    heading: "Elijah and Elisha",
    reference: "2 Kings 1&ndash;2",
    paragraphs: [
      "The Book of 2 Kings opens by carrying forward the story of 1 Kings without a pause, picking up the ministry of the prophet Elijah in the final days before his departure. The narrative is one continuous account &mdash; the division into two books is a later convenience &mdash; and it traces the long, slow decline of both Israel and Judah toward exile. But it begins on a note of transition: the passing of the prophetic mantle from Elijah to his servant and successor, Elisha.",
      "The early chapters underscore Elijah&rsquo;s authority as the Lord&rsquo;s prophet. When King Ahaziah, injured and sick, sends messengers to inquire of Baal-zebub, the god of Ekron, rather than the God of Israel, Elijah intercepts them with a word of judgment. Fire from heaven twice consumes the companies of soldiers sent to seize him, a sign that the prophet stands under the protection and commission of the living God whom the king has spurned.",
      "The climactic moment of the transition comes in chapter 2, as Elijah and Elisha walk together toward the Jordan. Elijah knows his time has come, and three times he tests Elisha&rsquo;s resolve, telling him to remain behind; three times Elisha refuses, vowing, &ldquo;As the Lord lives, and as you yourself live, I will not leave you&rdquo; (2:2). The younger man will not be parted from his master, determined to see the calling through to the end.",
      "When Elijah asks what he may do for Elisha before he is taken, Elisha makes a bold request: &ldquo;Please let there be a double portion of your spirit on me&rdquo; (2:9). This is not a request to be twice as great as Elijah, but the language of the firstborn&rsquo;s inheritance &mdash; Elisha asks to be the true heir and successor of the prophet&rsquo;s ministry. Elijah answers that it is a hard thing, but that if Elisha sees him taken away, the request will be granted.",
      "Then comes one of the most dramatic scenes in all of Scripture: &ldquo;chariots of fire and horses of fire&rdquo; separate the two men, &ldquo;and Elijah went up by a whirlwind into heaven&rdquo; (2:11). Elijah does not die but is taken directly into the presence of God, one of only two figures in Scripture to be so honored. Elisha cries out, &ldquo;My father, my father! The chariots of Israel and its horsemen!&rdquo; &mdash; mourning the loss of the man who had been Israel&rsquo;s true defense.",
      "Elisha takes up the cloak that had fallen from Elijah and strikes the waters of the Jordan, which part before him as they had for his master. The watching company of prophets declares, &ldquo;The spirit of Elijah rests on Elisha&rdquo; (2:15). The double portion has been granted, the succession is complete, and the ministry of the prophetic word continues unbroken into a new generation. The God who worked through Elijah will now work through Elisha.",
    ],
  },
  {
    id: "The Miracles of Elisha",
    heading: "The Miracles of Elisha",
    reference: "2 Kings 2&ndash;8",
    paragraphs: [
      "Elisha&rsquo;s ministry is marked by an abundance of miracles &mdash; more, in fact, than are recorded of any prophet before him. Where Elijah&rsquo;s signs often carried the weight of judgment, many of Elisha&rsquo;s are works of compassion and provision, demonstrating the grace of God toward ordinary people in their need. Through these acts the prophet bears witness that the Lord is present and active among his people even in a dark and faithless age.",
      "Among his first acts, Elisha heals the bitter, deadly spring at Jericho by casting salt into it, making the waters wholesome so the land would no longer be barren (2:19&ndash;22). He multiplies a widow&rsquo;s single jar of oil so that she can pay her debts and save her sons from slavery (4:1&ndash;7). These quiet miracles reveal a God who cares for the poor, the indebted, and the desperate, meeting them in the very details of daily life.",
      "Several of Elisha&rsquo;s miracles foreshadow the ministry of Christ in striking ways. He restores to life the dead son of the Shunammite woman, a wealthy hostess who had shown him kindness (4:8&ndash;37). He multiplies twenty loaves of barley to feed a hundred men with food left over (4:42&ndash;44), anticipating the feeding of the multitudes. He even renders a poisoned pot of stew harmless and makes a borrowed axe head float to the surface of the water (6:1&ndash;7).",
      "The most famous of Elisha&rsquo;s healings is that of Naaman, the commander of the army of Aram, a great man afflicted with leprosy (ch. 5). Through the witness of a captive Israelite servant girl, Naaman comes to Elisha, who sends word that he must wash seven times in the Jordan. Offended by so humble a command, Naaman nearly departs in a rage, until his servants persuade him. When he obeys, &ldquo;his flesh was restored like the flesh of a little child, and he was clean&rdquo; (5:14), and he confesses that there is no God in all the earth but the God of Israel.",
      "The story of Naaman is a powerful picture of grace received by simple, humble faith &mdash; and of God&rsquo;s mercy reaching beyond the borders of Israel to a Gentile. Jesus himself would later point to it, noting that &ldquo;there were many lepers in Israel in the time of the prophet Elisha, and none of them was cleansed, but only Naaman the Syrian&rdquo; (Luke 4:27), a reminder that God&rsquo;s salvation was always meant for the nations.",
      "Elisha&rsquo;s ministry also reveals the unseen armies of God. When the king of Aram sends a force to capture the prophet at Dothan, Elisha&rsquo;s servant is terrified by the surrounding troops. Elisha prays, &ldquo;O Lord, please open his eyes that he may see&rdquo; (6:17), and the servant beholds the mountain full of horses and chariots of fire all around them. &ldquo;Those who are with us are more than those who are with them&rdquo; (6:16) &mdash; a vivid assurance that the people of God are guarded by a heavenly host more powerful than any earthly enemy.",
    ],
  },
  {
    id: "The Fall of Israel",
    heading: "The Fall of Israel",
    reference: "2 Kings 15&ndash;17",
    paragraphs: [
      "For all the grace displayed through Elisha, the northern kingdom of Israel does not repent. Its history is a wearying succession of kings who &ldquo;did what was evil in the sight of the Lord,&rdquo; clinging to the idolatry of Jeroboam that had poisoned the nation from its founding. Even the bloody reforming zeal of Jehu, who destroyed the house of Ahab and the worship of Baal, did not extend to abandoning the golden calves at Bethel and Dan.",
      "The final decades of the northern kingdom are marked by political chaos &mdash; a rapid turnover of kings, many cut down by assassination, as the nation crumbles from within. Meanwhile, the rising power of Assyria looms on the horizon, the great empire that God would use as the instrument of his long-delayed judgment. The prophets had warned for generations; now the warnings come due.",
      "The end comes under Hoshea, the last king of Israel. When he conspires against Assyria and withholds tribute, the Assyrian king Shalmaneser besieges Samaria. After three years the city falls (722 B.C.), and the people of the northern kingdom are deported &mdash; carried away to Assyria and resettled in distant lands. The ten northern tribes are scattered among the nations and effectively disappear from history.",
      "The narrator pauses at this catastrophe to deliver a sober theological explanation, the longest such reflection in the book (ch. 17). &ldquo;And this occurred because the people of Israel had sinned against the Lord their God&rdquo; (17:7). They had feared other gods, walked in the customs of the nations the Lord had driven out, built high places, served idols, and burned their children in the fire, despite the Lord&rsquo;s repeated warnings through every prophet and seer.",
      "&ldquo;Yet the Lord warned Israel and Judah by every prophet and every seer, saying, Turn from your evil ways&hellip; But they would not listen&rdquo; (17:13&ndash;14). The exile of Israel is presented not as the triumph of Assyria&rsquo;s gods over Israel&rsquo;s God, but as the righteous judgment of the Lord upon a people who had stubbornly broken his covenant. God had been patient across centuries, but persistent rebellion at last bore its fruit.",
      "The land of the north is then resettled with foreign peoples who bring their own gods, producing a syncretistic religion that mingles fear of the Lord with the worship of idols &mdash; the background of the later tension between Jews and Samaritans. The fall of Israel stands as a solemn warning to Judah, which still survives in the south: the same covenant unfaithfulness will bring the same end, unless the southern kingdom turns back to the Lord.",
    ],
  },
  {
    id: "The Godly Reformers",
    heading: "The Godly Reformers",
    reference: "2 Kings 18&ndash;23",
    paragraphs: [
      "After the fall of the north, the narrative turns to focus on Judah, where amid a long line of mostly faithless kings, two great reformers shine out as bright exceptions. They show that even in a declining age, godly leadership could bring genuine renewal &mdash; and that the Lord responds with mercy to those who seek him with a whole heart. The first of these is Hezekiah, who came to the throne of Judah as Assyria menaced his land.",
      "Of Hezekiah it is said, &ldquo;He trusted in the Lord, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those who were before him&rdquo; (18:5). He removed the high places, broke the sacred pillars, and even destroyed the bronze serpent of Moses, which had become an object of idolatrous worship. He held fast to the Lord and kept his commandments, and the Lord was with him.",
      "Hezekiah&rsquo;s faith is tested when Sennacherib of Assyria invades Judah and besieges Jerusalem, his commander hurling taunts against the God of Israel. Hezekiah spreads the threatening letter before the Lord in the Temple and prays for deliverance. Through the prophet Isaiah, God answers, and that night &ldquo;the angel of the Lord went out and struck down 185,000 in the camp of the Assyrians&rdquo; (19:35). Jerusalem is delivered, a stunning vindication of trust in the Lord.",
      "The second great reformer is Josiah, who became king as a boy and &ldquo;did what was right in the eyes of the Lord and walked in all the way of David his father&rdquo; (22:2). During repairs to the Temple, the Book of the Law &mdash; long neglected and lost &mdash; is rediscovered. When it is read to Josiah, he tears his clothes in grief, realizing how far the nation has strayed from God&rsquo;s covenant and what judgment its sins have stored up.",
      "Josiah launches the most thorough reformation in Judah&rsquo;s history. He cleanses the Temple of idols, destroys the high places, tears down the altars to false gods, defiles the places of child sacrifice in the Valley of Hinnom, and even goes north to Bethel to demolish the altar Jeroboam had built &mdash; fulfilling a prophecy spoken three centuries earlier. He then leads the nation in a great Passover celebration such as had not been kept since the days of the judges.",
      "Of Josiah the narrator gives a unique tribute: &ldquo;Before him there was no king like him, who turned to the Lord with all his heart and with all his soul and with all his might, according to all the Law of Moses&rdquo; (23:25). Yet even this remarkable revival could not finally turn away the coming judgment. The Lord did not relent from the fierceness of his wrath against Judah because of the great provocations of Manasseh, Josiah&rsquo;s grandfather. Reformation delayed the end, but it could not undo it.",
    ],
  },
  {
    id: "The Fall of Jerusalem",
    heading: "The Fall of Jerusalem",
    reference: "2 Kings 24&ndash;25",
    paragraphs: [
      "After the death of Josiah in battle, Judah&rsquo;s decline accelerates rapidly. His successors abandon his reforms and return to evil, and the kingdom is caught in the deadly struggle between the great powers of Egypt and Babylon. Babylon prevails, and Judah becomes a vassal state, its kings reduced to pawns set up and torn down by the will of Nebuchadnezzar, the mighty king of Babylon.",
      "The first deportation comes under Jehoiachin. When he rebels, Nebuchadnezzar besieges Jerusalem and carries off the king, the royal household, the officials, the warriors, and the craftsmen &mdash; ten thousand captives &mdash; along with the treasures of the Temple and the palace (24:14). Only the poorest people of the land are left behind. Among those carried into this Babylonian exile were the prophet Ezekiel and, by other accounts, the young Daniel.",
      "Nebuchadnezzar installs Zedekiah as a puppet king, but he too rebels against Babylon. This final act of defiance brings the full weight of Babylon&rsquo;s wrath. Nebuchadnezzar returns and lays siege to Jerusalem for some eighteen months, until famine grips the city so severely that there is no bread for the people of the land. At last the city wall is breached, and the end has come.",
      "The destruction is total and devastating. Zedekiah is captured fleeing the city; his sons are slaughtered before his eyes, and then his own eyes are put out, so that the last thing he ever saw was the death of his children. He is bound in chains and carried to Babylon. The Temple of the Lord &mdash; Solomon&rsquo;s glory, where the cloud of God&rsquo;s presence had once descended &mdash; is burned to the ground, along with the palace and all the houses of Jerusalem (25:9).",
      "The walls of the city are broken down, and the remaining people are carried into exile, leaving only some of the poorest to tend the vineyards and fields. The bronze and gold of the Temple are broken up and hauled away. The Davidic kingdom, with its capital, its Temple, and its throne, lies in ruins. The judgment that had fallen on the northern kingdom a century and a half earlier has now overtaken Judah as well; the covenant curses have come to pass in full.",
      "Yet the book does not close in utter darkness. Its final scene records a small but significant token of hope: in exile, Jehoiachin is released from prison by the king of Babylon, given a seat of honor, and provided for all the days of his life (25:27&ndash;30). The line of David survives the catastrophe. Against all that has happened, a faint ember of the promise still glows &mdash; a quiet sign that the God of the covenant has not finally abandoned his people, and that the story of redemption is not yet over.",
    ],
  },
];

const videoItems = [
  { videoId: "bv5pNHc6yQM", title: "BibleProject - 2 Kings Overview (1 Kings 12 to 2 Kings 25)" },
  { videoId: "Zsd1Igi5HoU", title: "Elijah and Elisha - The Prophets of Israel Explained" },
  { videoId: "B1Hz5J_dEM0", title: "Naaman the Leper and the Grace of God - 2 Kings 5" },
  { videoId: "Fapi8Zca27o", title: "The Fall of Jerusalem and the Babylonian Exile" },
];

export default function ChristianBookOf2KingsGuidePage() {
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
            The Book of 2 Kings
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The long road to exile &mdash; Elijah&rsquo;s fiery ascension and the rise of Elisha, the prophet&rsquo;s many miracles, the fall of the northern kingdom to Assyria, the godly reforms of Hezekiah and Josiah, and the final fall of Jerusalem to Babylon.
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
              Deepen your study of 2 Kings through visual teaching on the ministries of Elijah and Elisha, the fall of the northern kingdom, the reforms of Hezekiah and Josiah, and the Babylonian exile.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>An Ember of Hope in Exile</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Kings is the sobering record of how covenant unfaithfulness, ignored across centuries of prophetic warning, finally brought both kingdoms to ruin. Yet even as Jerusalem falls and the people are carried to Babylon, the book ends with the line of David preserved &mdash; a faint ember of the promise that the God of the covenant has not abandoned his people, and that redemption is not yet finished.
          </p>
        </div>
      </main>
    </div>
  );
}
