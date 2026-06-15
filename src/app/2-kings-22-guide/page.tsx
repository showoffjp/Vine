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
  "The Book of the Law Found",
  "Josiah's Response",
  "Huldah the Prophetess",
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
    heading: "2 Kings 22 &mdash; Overview",
    reference: "2 Kings 22:1&ndash;20",
    paragraphs: [
      "Second Kings 22 stands as one of the most remarkable chapters in the entire Old Testament &mdash; a chapter in which a long-lost scroll, a penitent king, and a woman prophet converge to produce one of the most genuine scenes of revival in all of Scripture. It opens quietly enough: &ldquo;Josiah was eight years old when he began to reign, and he reigned thirty-one years in Jerusalem. His mother&rsquo;s name was Jedidah&rdquo; (22:1). Yet in the very next verse the narrator delivers the verdict that sets this chapter apart from nearly everything in Kings: &ldquo;He did what was right in the eyes of the Lord and walked in all the way of David his father, and he did not turn aside to the right or to the left&rdquo; (22:2).",
      "That phrase &mdash; &ldquo;did not turn aside to the right or to the left&rdquo; &mdash; echoes the language of Deuteronomy, the very book Moses commanded Israel&rsquo;s king to keep before him always so that &ldquo;his heart may not be lifted up above his brothers, and that he may not turn aside from the commandment, either to the right hand or to the left&rdquo; (Deut 17:20). Josiah is presented as the king who fulfilled that Mosaic ideal. He is the answer, for one glorious generation, to what the king of Israel was always meant to be.",
      "The chapter unfolds across three great acts. First, Josiah directs the repair of the Temple, an act of covenant faithfulness long neglected under his idolatrous predecessors. Second, the high priest Hilkiah discovers a scroll &mdash; &ldquo;the Book of the Law&rdquo; &mdash; hidden or forgotten in the Temple, and it is read aloud to the king. Third, the royal delegation is sent to the prophetess Huldah, who delivers a two-part oracle: judgment is certain for Jerusalem, but for Josiah personally, because of his humility before the Word, he will not live to see it.",
      "The theological architecture of 2 Kings 22 is dense and deeply instructive. It shows the power of the Word of God to shatter complacency, the indispensability of humility before Scripture, the sovereign freedom of God to choose his instruments (even a woman in a male-dominated royal court), and the way in which genuine repentance does not always avert corporate judgment but can, in God&rsquo;s mercy, alter the personal experience of the one who repents. Every great revival in history has begun with a rediscovery of the Word of God, and this chapter is perhaps the most dramatic illustration of that principle in all of the Bible.",
      "Context is essential for appreciating the magnitude of what happens in this chapter. Josiah&rsquo;s grandfather Manasseh had reigned fifty-five years and had filled Jerusalem with the blood of innocent people and every form of idolatry imaginable &mdash; he even placed a carved image in the Temple of God itself. His son Amon, Josiah&rsquo;s father, continued in the same wickedness and was assassinated after only two years on the throne. The Temple had been the site of pagan altars. The Word of God had been so thoroughly suppressed that it took not a search but an accidental discovery to find it. Into this darkness, Josiah and 2 Kings 22 bring an astonishing shaft of light.",
    ],
  },
  {
    id: "The Book of the Law Found",
    heading: "The Book of the Law Found",
    reference: "2 Kings 22:3&ndash;10",
    paragraphs: [
      "In the eighteenth year of his reign &mdash; which would make Josiah twenty-six years old &mdash; the king sends his secretary Shaphan to the high priest Hilkiah with instructions for the repair of the Temple. Money that the people had brought to the house of the Lord is to be distributed to the overseers of the work, to the carpenters, builders, and masons, and to purchase timber and quarried stone. The description is practical and administrative, yet it signals a significant spiritual reality: after decades of neglect and desecration, the king of Judah is investing resources in the maintenance of the covenant house of God.",
      "What happens next is not planned. In the course of overseeing the financial arrangements for the repair, Hilkiah the high priest makes a discovery: &ldquo;I have found the Book of the Law in the house of the Lord&rdquo; (22:8). The word translated &ldquo;found&rdquo; carries the sense of encountering something unexpected, something that was not where it should have been. The Book of the Law &mdash; almost certainly some form of Deuteronomy, though possibly the entire Pentateuch &mdash; had been lost in the Temple itself, buried perhaps under pagan cult objects, hidden away during one of the purges of Manasseh&rsquo;s reign, or simply neglected to the point of being forgotten.",
      "The fact that the Word of God could be lost in the house of God is a devastating commentary on the spiritual condition of Judah. The Temple was still standing, rituals were perhaps still being performed in some fashion, priests were still on duty &mdash; but the very book that gave the Temple its meaning and the priests their instructions had been so thoroughly sidelined that it had to be rediscovered. It is a picture of religion without Scripture, of form without substance, of going through the motions while the animating Word lies buried and unread.",
      "Hilkiah gives the scroll to Shaphan the secretary, who reads it and then goes to the king. Shaphan reports first on the administrative matter &mdash; the money has been handled, the workers are doing their job &mdash; and then, almost as a postscript, he adds: &ldquo;Also Hilkiah the priest has given me a book&rdquo; (22:10). There is something poignant about this sequencing. The routine business of the kingdom is reported first; the Word of God comes second, as if it were a minor item. But what follows will invert that order entirely. Shaphan reads the book before the king.",
      "We are not told which passage Shaphan read, or how long he read, or whether he read the whole scroll or only a portion. What we are told is the effect: when the king heard the words of the Book of the Law, he tore his clothes (22:11). The reading of the Scripture produced immediate, visceral, and irreversible conviction. Here is the living and active Word of God, sharper than any two-edged sword, piercing to the division of soul and spirit &mdash; not because Josiah was theologically prepared to appreciate it, but because the Spirit of God was at work through it.",
      "There is a broader principle here that every generation needs to hear. The power of revival does not ultimately depend on technique, organization, or the right cultural moment. It depends on the Word of God being heard and the hearts of hearers being moved to respond to what they hear. Josiah had been doing many things right &mdash; he had ordered the Temple repaired &mdash; but the hinge moment of his reign and the great revival that followed came not from his management of a restoration project but from Shaphan&rsquo;s reading of a scroll. The Word of God was the match; Josiah&rsquo;s humble heart was the tinder.",
    ],
  },
  {
    id: "Josiah's Response",
    heading: "Josiah&rsquo;s Response to the Word",
    reference: "2 Kings 22:11&ndash;13",
    paragraphs: [
      "The king tore his clothes. In the ancient Near Eastern world, tearing one&rsquo;s garments was the outward sign of extreme grief, shock, or mourning. It was not a calculated or performative gesture but an involuntary eruption of inner anguish. Josiah&rsquo;s response upon hearing the Book of the Law was not intellectual curiosity, or mild concern, or a resolve to look into the matter. It was grief. It was the grief of a man who, hearing the holy demands of God for the first time with any kind of clarity, instantly recognized how far his nation had fallen from them.",
      "The specific content of Josiah&rsquo;s lament is revealing. He says: &ldquo;Great is the wrath of the Lord that is kindled against us, because our fathers have not obeyed the words of this book, to do according to all that is written concerning us&rdquo; (22:13). Notice what Josiah does not do. He does not make excuses. He does not say that his ancestors cannot be held accountable because they did not know better, or that the long tradition of Israel&rsquo;s worship was valuable even if impure, or that God would surely understand the historical circumstances. He does not say, &ldquo;This standard is impossibly high and needs to be contextualized for our situation.&rdquo;",
      "Instead, Josiah takes the Word at face value and measures himself and his people against it. The verdict is devastating: &ldquo;our fathers have not obeyed.&rdquo; And because they have not obeyed, the wrath of God &mdash; which the very book they have been neglecting describes in vivid and terrible terms &mdash; is kindled against the nation. Josiah does not soften the diagnosis. He accepts it, and this acceptance is itself an act of faith. It takes more courage to acknowledge spiritual failure than to manage it.",
      "What Josiah does next is equally instructive. He does not immediately call a national assembly or launch a reformation program. Instead, he sends a delegation &mdash; Hilkiah the priest, Shaphan the secretary, Ahikam the son of Shaphan, Achbor the son of Micaiah, and Asaiah the king&rsquo;s servant &mdash; to &ldquo;inquire of the Lord&rdquo; (22:13). He seeks a word from God before he acts. There is a profound humility in this. Josiah has just heard the Word of God in the scroll, and his instinct is not to act on his own interpretation of it but to go and seek further divine guidance. He is a man under authority.",
      "The delegation is instructed to inquire on behalf of the king, and also on behalf of &ldquo;all Judah&rdquo; &mdash; the whole people. Josiah&rsquo;s repentance is not merely personal. He recognizes that he is the representative of a nation before God, and that the nation&rsquo;s covenant condition is his responsibility as its king. This is covenant leadership: not merely personal piety but a concern for the spiritual welfare of those under one&rsquo;s care. The king does not separate his own standing before God from the standing of his people. He carries them with him in his grief.",
      "The tearing of the clothes and the sending of the delegation together constitute one of Scripture&rsquo;s most perfect pictures of genuine repentance. It is not a repentance that says, &ldquo;I am sorry, but...&rdquo; It is not a repentance that bargains with God or seeks to minimize what the Word has revealed. It is a repentance that takes the full weight of the accusation, agrees with it, grieves over it, and then moves immediately toward God for further instruction. This is the pattern that the New Testament calls godly sorrow: &ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death&rdquo; (2 Cor 7:10).",
    ],
  },
  {
    id: "Huldah the Prophetess",
    heading: "Huldah the Prophetess",
    reference: "2 Kings 22:14&ndash;20",
    paragraphs: [
      "The delegation goes to Huldah the prophetess, the wife of Shallum the son of Tikvah, son of Harhas, keeper of the wardrobe &mdash; and she lived in Jerusalem in the Second Quarter, or &ldquo;the Mishneh&rdquo; (22:14). The fact that the delegation goes to a woman has sometimes startled readers, particularly given that Jeremiah and Zephaniah were both active prophets in Jerusalem during the reign of Josiah. Why not consult one of them? The text does not explain the reason, and we should be careful about inventing one.",
      "What the text does tell us is that God honored the inquiry by speaking through Huldah, and her oracle is authoritative, accurate, and formative for everything that follows in the narrative of Josiah. The implicit argument of the text is that God is sovereign in his choice of instruments. The Holy Spirit distributes gifts as he wills (1 Cor 12:11), and the history of redemption is full of examples of God choosing unexpected people to carry his word at critical moments &mdash; Deborah judging Israel, Mary receiving the announcement of the Incarnation, the women who first witnessed the Resurrection. Huldah belongs in this company.",
      "Huldah&rsquo;s oracle is a masterpiece of prophetic precision. It divides cleanly into two parts, each introduced by the authoritative messenger formula: &ldquo;Thus says the Lord.&rdquo; The first part (vv. 15&ndash;17) is addressed to &ldquo;the man who sent you to me&rdquo; &mdash; Josiah &mdash; but its content concerns Jerusalem and Judah as a whole. The verdict is irreversible: &ldquo;Behold, I will bring disaster upon this place and upon its inhabitants, all the words of the book that the king of Judah has read&rdquo; (22:16). The judgment threatened in the scroll will come. The reason? &ldquo;Because they have forsaken me and have made offerings to other gods, that they might provoke me to anger with all the work of their hands, therefore my wrath will be kindled against this place, and it will not be quenched&rdquo; (22:17).",
      "The first part of the oracle is a solemn affirmation that God means what he says. The warnings of the covenant &mdash; the curses of Deuteronomy 28&ndash;29, which include national disaster, exile, and the devastation of the land &mdash; are not empty words. They are the sworn commitments of a holy God who cannot look on sin with indifference. The very thing that made Josiah tear his clothes was his recognition that these words applied to his people. Huldah&rsquo;s oracle confirms his instinct. The wrath is real, it is kindled, and it will not be quenched. No amount of subsequent reformation, however genuine, can undo the accumulated apostasy of generations.",
      "The second part of the oracle (vv. 18&ndash;20) turns from the nation to the king personally. Its tone shifts from judgment to mercy &mdash; not mercy that cancels judgment, but mercy that is given in the midst of it. God sees Josiah&rsquo;s heart: &ldquo;Because your heart was penitent, and you humbled yourself before the Lord, when you heard how I spoke against this place and against its inhabitants, that they should become a desolation and a curse, and you have torn your clothes and wept before me, I also have heard you&rdquo; (22:19). This is one of the most tender verses in Kings. The tearing of the clothes, the weeping &mdash; God noticed. He heard. He responded.",
      "The mercy Huldah announces is specific: &ldquo;Therefore, behold, I will gather you to your fathers, and you shall be gathered to your grave in peace, and your eyes shall not see all the disaster that I will bring upon this place&rdquo; (22:20). Josiah will die before the judgment falls. He will be gathered to his grave &ldquo;in peace&rdquo; &mdash; not in the sense that his death will be painless (he will in fact die in battle at Megiddo), but in the sense that his death will precede the catastrophe and that he will not experience the spiritual anguish of watching Jerusalem fall. His humility before the Word of God earned him not immunity from death but immunity from despair. That is a mercy perfectly calibrated to the heart of a man who wept for his people.",
      "The theology of 2 Kings 22 is ultimately the theology of the whole Bible in miniature. The Word of God is given to reveal the holiness of God and the sinfulness of humanity. Humility before that Word &mdash; the willingness to hear it, be broken by it, and seek the Lord in response to it &mdash; is the beginning of all genuine spiritual life. God is sovereign in his choice of messengers. Judgment and mercy are not opposites but coexist in the single oracle of a God who is both perfectly just and overwhelmingly gracious. And a single generation of genuine repentance, though it cannot undo the consequences of previous apostasy, can be received by God with a mercy that is beyond all human calculation.",
    ],
  },
];

const videoItems = [
  { videoId: "mMPqNW8Aab8", title: "2 Kings 22 - Josiah and the Book of the Law" },
  { videoId: "JV_aJAQJGgU", title: "Josiah's Reform - 2 Kings Overview" },
  { videoId: "DEcWZGl6uCQ", title: "Huldah the Prophetess - Women in Redemptive History" },
  { videoId: "aq64LmNcMBw", title: "The Power of God's Word to Revive - 2 Kings 22 Study" },
];

export default function TwoKingsTwentyTwoGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
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
            2 Kings 22 &mdash; Josiah and the Book of the Law
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A young king who did right in the eyes of the Lord, a high priest who found a forgotten scroll, a king who tore his robes in repentance, and a prophetess who delivered one of the most precise and merciful oracles in all of Scripture.
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: 1 }}>
            Key Themes in 2 Kings 22
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { label: "The Power of the Word", body: "A forgotten scroll, once heard, splits a king's heart in two. Revival begins not with programs but with God&rsquo;s Word being heard and believed." },
              { label: "Humility Before Scripture", body: "Josiah does not negotiate with the text or soften its demands. He receives it as the word of God and is broken by it &mdash; the mark of all true repentance." },
              { label: "Women in Redemptive History", body: "God bypasses two male prophets and chooses Huldah. His sovereign freedom to use any instrument he pleases is itself a word to every generation." },
              { label: "Judgment and Mercy Together", body: "Huldah&rsquo;s oracle holds both truths without collapsing them: judgment IS coming, AND Josiah&rsquo;s humility is heard by God. Neither cancels the other." },
            ].map((item) => (
              <div key={item.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.label}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
            Deepen your study of 2 Kings 22 through video teaching on Josiah, the discovery of the Book of the Law, and the prophetess Huldah.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            &ldquo;Great is the Wrath of the Lord That Is Kindled Against Us&rdquo;
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            Josiah&rsquo;s words in verse 13 are the hinge on which all genuine revival turns. They are not the words of a man who has only superficially read about God&rsquo;s holiness &mdash; they are the words of a man who has felt its weight land on him like a stone. &ldquo;Our fathers have not obeyed the words of this book, to do according to all that is written concerning us.&rdquo;
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The question 2 Kings 22 puts to every reader is the same question it put to Josiah: when you hear the Word of God, does it break you or bore you? Does it produce the tearing of clothes &mdash; the sign of genuine grief over genuine sin &mdash; or does it slide past unmoved? The prophetess told Josiah that God had heard his weeping. He hears ours as well.
          </p>
        </div>

      </main>
    </div>
  );
}
