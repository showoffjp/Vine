"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Nehemiah Hears the News",
  "The Burden for Jerusalem",
  "The Prayer of Nehemiah",
  "Confessing the Sins of the People",
  "Asking for Favor with the King",
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
    id: "Nehemiah Hears the News",
    heading: "Nehemiah Hears the News",
    reference: "Nehemiah 1:1&ndash;3",
    paragraphs: [
      "The Book of Nehemiah opens in the month of Chislev, in the twentieth year, with Nehemiah himself speaking in the first person &mdash; a memoir that plunges us immediately into the interior life of a man of deep faith and political responsibility. He is in Susa, the citadel, the winter capital of the Persian empire, where he holds the position of cupbearer to King Artaxerxes. This was not a menial job; it was a position of extraordinary trust and proximity to the king. Nehemiah was a man of influence and access in one of the great powers of the ancient world.",
      "Hanani, one of his brothers, comes with certain men from Judah, and Nehemiah asks them about the Jewish remnant that had survived the exile, and about Jerusalem. The question reveals something about Nehemiah&rsquo;s heart before the answer does: he is a man whose identity is still bound up with his people and the city of his ancestors, even though he has been raised in Persia and serves a Persian king. He has not assimilated into indifference. The distance from Jerusalem has not eroded his love for it.",
      "The answer that Hanani gives is devastating: &ldquo;The remnant there in the province who had survived the exile is in great trouble and shame. The wall of Jerusalem is broken down, and its gates are destroyed by fire&rdquo; (1:3). The news is not simply about architecture or urban infrastructure. In the ancient world, the walls and gates of a city defined its safety, its dignity, and its civic identity. A city without walls was not merely vulnerable to military attack; it was a statement of disgrace. Jerusalem, the city where God had chosen to place his name, was a ruin and a reproach.",
      "It is worth understanding the historical context. The exile to Babylon had ended decades earlier; Cyrus the Great had issued his decree allowing Jews to return, and Zerubbabel had led the first return and rebuilt the temple. Ezra had come later with a second wave of returnees. But Jerusalem itself remained largely in ruins. The walls that had been broken down by Nebuchadnezzar&rsquo;s armies had never been fully rebuilt. Some attempts had been made and stopped under pressure. The city sat exposed and diminished, its people in great trouble and shame, unable to defend themselves or to present to the surrounding nations any visible symbol of their renewed life under God.",
      "This is the news that reaches Nehemiah, comfortable and secure in the Persian capital, with the ear of the most powerful man in the world. The report is not abstract; it is about his people and his city. Hanani does not merely deliver information; he delivers a burden. And Nehemiah&rsquo;s response to that burden will define everything that follows in the book. The opening three verses establish the gap between where Nehemiah is &mdash; the citadel of Susa, in favor with the king &mdash; and where his people are &mdash; in great trouble and shame in a city without walls. The rest of the book is about how a man of prayer and action bridged that gap.",
    ],
  },
  {
    id: "The Burden for Jerusalem",
    heading: "The Burden for Jerusalem",
    reference: "Nehemiah 1:4",
    paragraphs: [
      "Verse four is one of the most concentrated and powerful verses in the entire book: &ldquo;As soon as I heard these words I sat down and wept and mourned for days, and I continued fasting and praying before the God of heaven&rdquo; (1:4). Every phrase deserves attention. Nehemiah did not hear the news and compose a strategic response. He heard it and sat down. The sitting itself is an act of grief, a posture of lamentation. He wept. He mourned for days &mdash; not for an hour, not through a single night, but for an extended and sustained period of sorrow.",
      "The response of weeping and mourning is deeply significant in the biblical tradition. It is not a sign of weakness or a failure of faith; it is in fact a sign of the opposite &mdash; of a man who feels the weight of what God feels, who is moved by what moves the heart of God. The prophets wept over Israel and over Jerusalem. Jesus wept over Jerusalem. The capacity to mourn rightly &mdash; to grieve over the things that truly deserve grief rather than merely being inconvenient or uncomfortable &mdash; is a mark of a heart that has been calibrated to God&rsquo;s own concerns.",
      "Nehemiah mourned and fasted and prayed. These three acts belong together in the biblical pattern of serious intercession. Fasting is not magic; it does not add spiritual leverage to a prayer in some mechanical sense. Rather, fasting is the physical expression of a spiritual reality: the person fasting is saying, by the very act of denying themselves ordinary sustenance, that this matter is more important to me than eating. It is an embodied declaration of priority, a way of aligning the body with the soul&rsquo;s concern. Nehemiah&rsquo;s fast communicated, in the most visceral way possible, that the state of Jerusalem was not a background concern but a consuming one.",
      "The phrase &ldquo;before the God of heaven&rdquo; is characteristic of the postexilic period and of Persian-era texts. It reflects the monotheistic confession of the Jewish community within the context of an empire that acknowledged many gods. The God of heaven is not one deity among others; he is the sovereign Lord over all the heavens and the earth, before whose face all the affairs of nations and kings take place. To pray &ldquo;before the God of heaven&rdquo; is to place oneself in the presence of the One to whom all power ultimately belongs, including the power of Artaxerxes.",
      "The weight of a burden that God places upon a believer&rsquo;s heart is one of the themes the book of Nehemiah introduces here and never quite lets go of. Nehemiah did not manufacture his concern for Jerusalem. It was given to him, awakened in him by the report he received, and it settled on him with the kind of weight that compelled him to pray and fast for days. This is what genuine intercessory prayer often looks like at its source: not a decision to take up a cause, but the reception of a burden that will not let a person rest until it is addressed. The burden precedes the action, and the sustained prayer in the burden refines and directs the action that will eventually follow.",
    ],
  },
  {
    id: "The Prayer of Nehemiah",
    heading: "The Prayer of Nehemiah",
    reference: "Nehemiah 1:5&ndash;7",
    paragraphs: [
      "When Nehemiah finally gives us the content of his prayer, what we encounter is one of the great model prayers of the Hebrew Bible. It is a prayer that follows a deliberate and recognizable pattern: it begins with adoration, moves into confession, and culminates in petition. Each element is present with care and weight, and together they constitute a masterclass in how a person of faith approaches God in a time of crisis.",
      "The prayer opens with adoration: &ldquo;O Lord God of heaven, the great and awesome God who keeps covenant and steadfast love with those who love him and keep his commandments&rdquo; (1:5). Before Nehemiah says a single word about Jerusalem or the broken walls or his own need, he declares who God is. The address is carefully constructed. &ldquo;Lord God of heaven&rdquo; &mdash; the sovereign of all. &ldquo;The great and awesome God&rdquo; &mdash; worthy of awe and reverence, not to be approached casually. And then the crucial characterization: &ldquo;who keeps covenant and steadfast love.&rdquo;",
      "The Hebrew word translated &ldquo;steadfast love&rdquo; is &ldquo;hesed,&rdquo; one of the richest and most theologically dense words in the entire Old Testament. It combines the ideas of loyalty, faithfulness, covenant commitment, and loving-kindness into a single concept that resists clean translation into any other language. When Nehemiah opens his prayer by declaring that God &ldquo;keeps hesed,&rdquo; he is not making a sentimental remark about a generally nice deity. He is making a specific claim about the character of God as revealed in his covenant history with Israel: this is a God who does not break his promises, who remains faithful even when his people have not been faithful, whose love is anchored in his own character rather than in the worthiness of the recipients.",
      "This opening act of adoration is not a warm-up for the real business of the prayer. It is the foundation of the prayer. Nehemiah is reminding himself, before he says anything else, of who he is speaking to and what that God has shown himself to be. The boldness of what Nehemiah will ask in the following verses is only possible because of what he has established here: he is speaking to a God who keeps covenant, whose steadfast love is reliable, who has made promises and will keep them. The adoration creates the theological ground on which the petition can stand.",
      "The structure of the prayer &mdash; adoration, then confession, then petition &mdash; reflects a pattern that appears repeatedly in the Psalms and in the great prayers of the Old Testament (Solomon&rsquo;s temple dedication prayer in 1 Kings 8, Daniel&rsquo;s prayer in Daniel 9, Ezra&rsquo;s prayer in Ezra 9). It is not a formula to be followed mechanically, but a pattern that reflects the shape of a rightly ordered relationship with God: begin with who God is, not with what you need; approach him in honesty about the state of your own heart before you make your requests; and then bring your petitions in the confidence that the God who is great and faithful can and does act in the affairs of human life.",
    ],
  },
  {
    id: "Confessing the Sins of the People",
    heading: "Confessing the Sins of the People",
    reference: "Nehemiah 1:6&ndash;7",
    paragraphs: [
      "After the opening adoration, Nehemiah moves immediately into confession, and the way he does it is theologically striking: he confesses not only his own sin but the sins of Israel collectively, and he includes himself explicitly in the community whose failures he is confessing. &ldquo;Let your ear be attentive and your eyes open, to hear the prayer of your servant that I now pray before you day and night for the people of Israel your servants, confessing the sins of the people of Israel, which we have sinned against you. Even I and my father&rsquo;s house have sinned&rdquo; (1:6).",
      "This is intercessory identification at its deepest. Nehemiah is not standing apart from the community, confessing their sins while exempting himself. He is confessing &ldquo;we have sinned,&rdquo; placing himself inside the community of failure. He acknowledges that even his own family, his father&rsquo;s house, has been part of the problem. This is the posture of a Daniel, who in his great prayer in Daniel 9 says not &ldquo;they have sinned&rdquo; but &ldquo;we have sinned and done wrong&rdquo; &mdash; and Daniel was, of all the people in his generation, one of the most conspicuously faithful.",
      "The content of the confession is specific: &ldquo;We have acted very corruptly against you and have not kept the commandments, the statutes, and the rules that you commanded your servant Moses&rdquo; (1:7). The three words &mdash; commandments, statutes, rules &mdash; constitute a comprehensive inventory of the covenant obligations Israel had been given. The failure was not a technical one or a matter of minor infraction; it was comprehensive. They had not kept the commandments, the statutes, or the rules. The wall of Jerusalem in ruins was not an accident of history; it was the visible consequence of covenant unfaithfulness, the outward sign of an inward condition that had been developing for generations.",
      "There is profound wisdom in this kind of corporate confession. Nehemiah did not arrive at his intercessory prayer by first assigning blame &mdash; identifying which generation was most at fault, or which leaders had failed most catastrophically, or which sins had been most egregious. He simply placed himself in solidarity with his people before God and said: we have sinned. This act of identification is not a cover for injustice or a denial of individual responsibility; it is a recognition that the people of God stand before God together, that the failures of previous generations have created the conditions that the current generation inhabits, and that the way forward begins not with blame but with honest acknowledgment.",
      "The broken walls of Jerusalem were, in a sense, the architectural embodiment of the broken covenant. When Israel kept the commandments, the statutes, and the rules, the promise was life and flourishing and protection. When they turned away, the promise of judgment was equally clear. Nehemiah is not asking God to pretend that the history did not happen or that the sin did not matter. He is acknowledging it fully, placing himself within it, and then turning toward the God who keeps covenant and steadfast love even in the face of his people&rsquo;s failure.",
      "The act of identifying with the sins of one&rsquo;s community is a mark of genuine intercessory prayer as opposed to merely making requests on behalf of others. It requires a kind of humility that is rare and costly &mdash; a willingness to say that the community&rsquo;s sin is in some sense also my sin, that I am not merely an innocent bystander petitioning on behalf of the guilty. Nehemiah&rsquo;s prayer models what it looks like when a believer takes up the burden of their community&rsquo;s brokenness and carries it before God, not defensively or with excuses, but with the open honesty that creates the space for God to act in mercy.",
    ],
  },
  {
    id: "Asking for Favor with the King",
    heading: "Asking for Favor with the King",
    reference: "Nehemiah 1:8&ndash;11",
    paragraphs: [
      "After the confession, Nehemiah turns to the act of reminding God of his own word. This is one of the most theologically interesting aspects of Nehemiah&rsquo;s prayer: he does not simply ask God to help; he quotes back to God the promise God made through Moses, calling on God&rsquo;s own covenant faithfulness as the ground of his request. &ldquo;Remember the word that you commanded your servant Moses, saying, &lsquo;If you are unfaithful, I will scatter you among the peoples, but if you return to me and keep my commandments and do them, though your outcasts are in the uttermost parts of heaven, from there I will gather them and bring them to the place that I have chosen, to make my name dwell there&rsquo;&rdquo; (1:8&ndash;9).",
      "The reference is to the warnings and promises of Deuteronomy, particularly the passages in chapters 28 through 30 that set out the consequences of covenant faithfulness and unfaithfulness. Moses had warned that disobedience would lead to exile and scattering. But Moses had also promised that if the people returned to the Lord and obeyed his commandments, even from the farthest parts of heaven, God would gather them back. Nehemiah is invoking that promise. He is saying: God, you said this. Your people are scattered. And there are those among them who are returning to you. Now is the time for you to do what you said you would do.",
      "This kind of prayer &mdash; reminding God of his own promises &mdash; is found throughout the Psalms and in the great intercessory prayers of Scripture. It is not presumption; it is faith. It takes God&rsquo;s word seriously enough to hold it up before him and say: I believe this is true, and I am asking you to act on what you have said. The prayer is an act of confidence in the reliability of God&rsquo;s character as revealed in his covenant words. It is also an act of submission: Nehemiah is not presenting his own plan for Jerusalem&rsquo;s restoration; he is appealing to what God himself has already committed to.",
      "Nehemiah then applies the promise personally: &ldquo;They are your servants and your people, whom you have redeemed by your great power and by your strong hand&rdquo; (1:10). The language of redemption &mdash; redeemed by great power and a strong hand &mdash; deliberately echoes the language of the Exodus. God brought Israel out of Egypt by his strong hand and his outstretched arm. That same power, Nehemiah is saying, is what is needed now. The God who parted the Red Sea and brought the people through the wilderness can certainly work in the courts of a Persian king. The past act of redemption is the ground of hope for present and future deliverance.",
      "Then comes the specific petition that makes clear what all this prayer has been building toward: &ldquo;O Lord, let your ear be attentive to the prayer of your servant, and to the prayer of your servants who delight to fear your name, and give success to your servant today, and grant him mercy in the sight of this man&rdquo; (1:11). &ldquo;This man&rdquo; is King Artaxerxes. Nehemiah has been weeping and fasting and praying for days, and now he is preparing to do something. He is going to approach the king &mdash; his master, the most powerful man in the world &mdash; and ask him for something that will seem extraordinary: permission to go to Jerusalem and rebuild its walls.",
      "The closing note of verse eleven is almost casual in its revelation: &ldquo;Now I was cupbearer to the king.&rdquo; But it is anything but casual. It is the point toward which the entire chapter has been building. Nehemiah was in precisely the position where he might be able to do something about the problem he had heard about. The man who wept and prayed was not someone without resources or access; he was someone with direct access to the king. But notice the order: first the weeping and the mourning and the prayer for days, then the plan of action. The burden on the heart produced the prayer, and the sustained prayer shaped and clarified the action. Chapter one ends not with Nehemiah having done anything yet &mdash; that comes in chapter two &mdash; but with him ready to act, having prayed through to a clarity of purpose and a specific ask.",
      "The theology of Nehemiah 1 is the theology of prayer linked to bold action. Nehemiah does not treat prayer as a substitute for doing something. He prays and then he acts. But the action flows from the prayer and is shaped by it. He goes to the king not in his own name and not on the strength of his own position, but in the confidence that the God who keeps covenant and steadfast love has heard his cry. The combination of intercession and action, of deep spiritual engagement and practical courage, is what makes Nehemiah one of the great examples of what it looks like to respond when God places a burden on a human heart.",
    ],
  },
];

const videoItems = [
  { videoId: "g6K_lSBl3vk", title: "BibleProject - Overview of Ezra and Nehemiah" },
  { videoId: "Ck83-YyLPCA", title: "Nehemiah 1 - The Prayer That Rebuilt a City" },
  { videoId: "DhxM1YZW8AA", title: "Intercessory Prayer - Lessons from Nehemiah" },
  { videoId: "QVCniJwk4gk", title: "Nehemiah - Burden Bearer and Builder for God" },
];

export default function Nehemiah1GuidePage() {
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
            Nehemiah 1 &mdash; The Prayer of Nehemiah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            News of a broken city, a heart moved to weeping and fasting, and a prayer that becomes a model of intercession &mdash; adoration, confession, and petition &mdash; all leading to bold action in the presence of the king.
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
              Deepen your study of Nehemiah 1 through visual teaching on the burden Nehemiah carried for Jerusalem, the shape of his intercessory prayer, and what it means to move from prayer to bold action.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Burden, a Prayer, and a Bold Request</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Nehemiah 1 shows us what happens when news of brokenness lands on a heart that is still alive to the purposes of God. The burden produces the prayer, the prayer shapes the action, and the action &mdash; asking a king for permission to rebuild a ruined city &mdash; requires exactly the kind of bold faith that sustained intercession builds. The chapter stands as one of Scripture&rsquo;s great examples of prayer that moves from weeping to mission.
          </p>
        </div>
      </main>
    </div>
  );
}
