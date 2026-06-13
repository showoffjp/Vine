"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "A Queen in Persia",
  "The Threat of Genocide",
  "For Such a Time as This",
  "The Great Reversal",
  "The Hidden God",
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
    id: "A Queen in Persia",
    heading: "A Queen in Persia",
    reference: "Esther 1&ndash;2",
    paragraphs: [
      "The Book of Esther unfolds not in the land of Israel but in the heart of a foreign empire, in the citadel of Susa, capital of Persia during the days of the exile. The Jewish people had been scattered, and many remained in the lands of their captors even after some had returned to Jerusalem. It is among these dispersed Jews, living as a vulnerable minority under a pagan king, that the drama of Esther takes place. The book opens a window onto the precarious life of God&rsquo;s people far from home.",
      "The king is Ahasuerus &mdash; known to history as Xerxes &mdash; who ruled a vast empire stretching from India to Ethiopia, over a hundred and twenty-seven provinces. The story begins with a display of his immense wealth and power: a lavish banquet lasting one hundred and eighty days, followed by a seven-day feast for all the people of Susa, with gold goblets, royal wine, and gardens hung with fine linen. The narrator paints a portrait of opulence, excess, and a court ruled by impulse and display.",
      "At the height of the feasting, the king, &ldquo;merry with wine,&rdquo; commands Queen Vashti to appear before his guests to show off her beauty. Vashti refuses. Her reasons are not given, but her refusal throws the court into crisis: if the queen may defy the king, the king&rsquo;s advisers fear, then wives throughout the empire will defy their husbands. To preserve royal honor and male authority, Vashti is deposed and banished from the king&rsquo;s presence, and a decree goes out that every man should be master in his own household.",
      "A search is then launched for a new queen. Beautiful young women are gathered from across the empire into the king&rsquo;s harem, there to undergo months of beauty treatments before being presented to Ahasuerus. The process is impersonal and demeaning, a contest of appearances at the whim of a powerful man. Into this setting steps the figure at the center of the book: a young Jewish woman named Esther, whose Hebrew name is Hadassah.",
      "Esther is an orphan, her father and mother both dead, raised by her older cousin Mordecai, a Jew of the tribe of Benjamin whose family had been carried into exile. Mordecai has brought her up as his own daughter, and when Esther is taken into the king&rsquo;s palace, he charges her to keep her Jewish identity hidden. &ldquo;Esther had not made known her people or kindred, for Mordecai had commanded her not to make it known&rdquo; (2:10). This concealment will become crucial as the story unfolds.",
      "Esther wins the favor of all who see her, and at last she pleases the king more than all the others. He sets the royal crown on her head and makes her queen in place of Vashti, holding a great feast in her honor. A Jewish orphan, an exile&rsquo;s ward, now sits on the throne of the most powerful empire on earth &mdash; though no one in the court knows her true identity. The reader, watching this unlikely rise, begins to sense a pattern larger than coincidence.",
      "The chapter closes with a small but significant incident: Mordecai, sitting at the king&rsquo;s gate, overhears a plot by two royal eunuchs to assassinate the king. He reports it through Esther, the conspirators are hanged, and the matter is recorded in the royal chronicles. It seems a minor episode, easily forgotten &mdash; but the narrator carefully notes it, and it will return at the decisive moment. Already the threads of providence are being quietly laid, waiting to be drawn together.",
    ],
  },
  {
    id: "The Threat of Genocide",
    heading: "The Threat of Genocide",
    reference: "Esther 3",
    paragraphs: [
      "The peace of the court is shattered by the rise of a new figure: Haman the Agagite, whom the king promotes above all the other officials. The king commands that everyone at the gate bow down and pay homage to Haman. But Mordecai the Jew will not bow. His refusal is rooted in his Jewish faith and identity &mdash; and the narrator&rsquo;s description of Haman as an &ldquo;Agagite,&rdquo; recalling Agag the Amalekite king, signals an ancient enmity between Haman&rsquo;s people and the Jews stretching back centuries.",
      "Haman is filled with fury at Mordecai&rsquo;s defiance. But his rage is not satisfied with punishing one man. When he learns that Mordecai is a Jew, his hatred swells into something monstrous: &ldquo;he disdained to lay hands on Mordecai alone&hellip; so Haman sought to destroy all the Jews, the people of Mordecai, throughout the whole kingdom&rdquo; (3:6). A private slight becomes the pretext for a campaign of total annihilation against an entire people.",
      "To choose the day for his genocide, Haman casts the &ldquo;pur&rdquo; &mdash; the lot &mdash; before him, month by month and day by day, until the lot falls on a date nearly a year away, the thirteenth day of the twelfth month. This casting of the pur gives the eventual feast of deliverance its name, Purim. There is deep irony here: Haman trusts in the lot, in chance and fate, to fix the day of doom &mdash; yet the reader senses that the timing itself, the long delay, will prove to be the space in which deliverance can work.",
      "Haman then approaches the king with a cunning, deceptive proposal. He speaks of &ldquo;a certain people&rdquo; scattered throughout the empire whose laws are different and who do not keep the king&rsquo;s laws, so that it is &ldquo;not to the king&rsquo;s profit to tolerate them&rdquo; (3:8). He never names the Jews; he frames them only as dangerous outsiders. And he sweetens the request with an enormous bribe &mdash; ten thousand talents of silver to be paid into the royal treasury.",
      "The king, with shocking carelessness, agrees. He hands Haman his signet ring &mdash; the very authority of the throne &mdash; and tells him to do as he pleases with this people. With a single gesture, made almost without thought, the most powerful man on earth authorizes the murder of an entire nation. The narrative exposes how monstrous evil can be set loose through the casual indifference of those in power, who sign away thousands of lives without even troubling to learn whom they are condemning.",
      "The decree is written, sealed with the king&rsquo;s ring, and dispatched by couriers to every province in every language: on the appointed day, all Jews &mdash; young and old, women and children &mdash; were to be destroyed, killed, and annihilated, and their goods plundered. It is a sentence of genocide, fixed in the irrevocable law of the Medes and Persians, sent to the ends of the empire. The people of God face the threat of total extinction, and there appears to be no escape.",
      "The chapter ends with a chilling image of the chaos sin sows in its wake: &ldquo;the king and Haman sat down to drink, but the city of Susa was thrown into confusion&rdquo; (3:15). The architects of the evil feast and drink, untroubled, while the city reels in bewilderment and dread. The stage is now set at its darkest: a defenseless people condemned, a vain king deceived, a proud enemy triumphant. Into this hopeless situation the question of the next chapter will fall like a thunderclap.",
    ],
  },
  {
    id: "For Such a Time as This",
    heading: "For Such a Time as This",
    reference: "Esther 4",
    paragraphs: [
      "When Mordecai learns of the decree, he tears his clothes, puts on sackcloth and ashes, and goes out into the city crying with a loud and bitter cry. Throughout the provinces there is great mourning among the Jews, with fasting and weeping. Mordecai positions himself before the king&rsquo;s gate, his grief a public testimony to the catastrophe that has been ordained. Word reaches Esther in the palace, and she is deeply distressed at the sight of her cousin in mourning.",
      "Through her attendant Esther learns the full horror of the decree, and Mordecai sends her a copy of it with a charge: she must go to the king to plead for her people. But Esther knows the danger. There is a law that anyone &mdash; even the queen &mdash; who approaches the king in his inner court without being summoned is to be put to death, unless the king extends his golden scepter. And she has not been called to the king for thirty days. To go uninvited is to risk her life.",
      "Mordecai&rsquo;s reply is one of the great challenges of Scripture. He warns her not to imagine that her place in the palace will save her: &ldquo;Do not think to yourself that in the king&rsquo;s palace you will escape any more than all the other Jews&rdquo; (4:13). Deliverance for the Jews will come from somewhere, he says with quiet confidence, but Esther and her father&rsquo;s house may perish if she keeps silent. And then the words that crown the book: &ldquo;And who knows whether you have not come to the kingdom for such a time as this?&rdquo; (4:14).",
      "In that single sentence the whole theology of the book is concentrated. Mordecai dares to suggest that Esther&rsquo;s unlikely rise &mdash; the orphan exile lifted to a throne &mdash; was no accident, but a placement, a positioning by a providence he does not name yet clearly trusts. Her crown was given to her, perhaps, precisely for this moment of crisis. Esther&rsquo;s influence, her access, her very position are not for her own comfort but for the deliverance of her people.",
      "The challenge presses on every reader: the question of vocation at the decisive moment. We are each set in a particular place, with particular relationships, gifts, and opportunities &mdash; and there come times when the purpose of that placement becomes clear, when we are called to spend our position and influence not on self-preservation but on the good of others and the purposes of God. To grasp &ldquo;such a time as this&rdquo; is to recognize that we have been put where we are for more than ourselves.",
      "Esther rises to the moment with magnificent courage. She asks Mordecai to gather all the Jews in Susa to fast for her three days and nights, while she and her young women do the same. And then she resolves: &ldquo;Then I will go to the king, though it is against the law, and if I perish, I perish&rdquo; (4:16). It is a declaration of faith and sacrificial resolve &mdash; she will do what is right whatever the cost, entrusting the outcome to the God she does not name but on whom the fasting plainly leans.",
      "The fast itself is significant. Though God is never mentioned, the call to fast is unmistakably an appeal to him &mdash; a turning of the whole community heavenward in the face of death. Esther does not march into the king&rsquo;s presence trusting her own beauty or cleverness alone; she goes only after three days of corporate fasting and supplication. Her courage is real, but it is courage steeped in dependence, the boldness of one who has cast herself upon a mercy higher than the king&rsquo;s scepter.",
    ],
  },
  {
    id: "The Great Reversal",
    heading: "The Great Reversal",
    reference: "Esther 5&ndash;9",
    paragraphs: [
      "Esther approaches the king, and he extends the golden scepter; her life is spared. But rather than blurting out her request, she invites the king and Haman to a banquet, and then to a second banquet the next day &mdash; a patient, deliberate strategy that builds tension and gives providence room to work. Haman leaves the first banquet elated, puffed up with his honor, only to be enraged again by the sight of Mordecai, who still will not bow. At his wife&rsquo;s urging he builds a towering gallows on which he plans to hang Mordecai the very next morning.",
      "That night the king cannot sleep. It is a small thing &mdash; a sleepless night &mdash; yet upon it the whole story turns. To pass the hours, he has the royal chronicles read aloud, and there he hears, as if for the first time, how Mordecai had once exposed the assassination plot and saved his life, and had never been rewarded. The timing is exquisite: at the very hour Haman is coming to ask for Mordecai&rsquo;s death, the king is resolving to honor him.",
      "What follows is one of the most satisfying ironies in all of literature. Haman enters, and the king asks him what should be done for &ldquo;the man whom the king delights to honor.&rdquo; Certain that he himself is meant, Haman describes an extravagant public honor &mdash; royal robes, a royal horse, a procession through the city. The king commands him to do exactly that &mdash; for Mordecai the Jew. Haman must lead his hated enemy through the streets, proclaiming his honor, the very humiliation he had hoped to inflict now turned upon himself.",
      "At the second banquet Esther at last reveals her petition and her identity. She pleads for her own life and the life of her people, who have been sold to be destroyed, and she names the enemy: &ldquo;A foe and enemy! This wicked Haman!&rdquo; (7:6). The king, enraged, storms out; Haman, terrified, falls upon Esther&rsquo;s couch to beg for his life just as the king returns, and the situation is sealed. In the final stroke of irony, Haman is hanged on the very gallows, fifty cubits high, that he had built for Mordecai.",
      "Yet the decree of annihilation, sealed with the king&rsquo;s ring, cannot simply be revoked under Persian law. So a counter-decree is issued: on the appointed day, the Jews are granted the right to gather and defend themselves against any who would attack them. Mordecai is raised to Haman&rsquo;s former place of authority, clothed in royal robes, and the news brings light and gladness and joy to the Jews throughout the empire. When the day comes, the Jews are delivered, and their enemies fall before them.",
      "The pattern that runs through these chapters is the great reversal &mdash; what the Greeks called peripeteia, a sudden turning of fortunes. Haman is hanged on his own gallows; Mordecai receives the honor Haman craved; the day appointed for the destruction of the Jews becomes the day of their triumph. The proud are brought low and the lowly are lifted up; the trap set for the innocent springs shut upon the guilty. The whole movement of the book bends, as if by an unseen hand, from doom toward deliverance.",
      "To remember this deliverance, Mordecai and Esther establish the feast of Purim &mdash; named after the &ldquo;pur,&rdquo; the lot Haman had cast &mdash; to be kept every year with feasting, gladness, the sending of gifts to one another, and gifts to the poor. The days that had been turned &ldquo;from sorrow into gladness and from mourning into a holiday&rdquo; (9:22) were to be remembered in every generation. The annihilation of the Jews became, instead, an enduring celebration of their rescue.",
    ],
  },
  {
    id: "The Hidden God",
    heading: "The Hidden God",
    reference: "Esther 1&ndash;10",
    paragraphs: [
      "The most striking feature of the Book of Esther is something the casual reader may not even notice: God is never mentioned. In a book of the Bible &mdash; a book about the rescue of God&rsquo;s covenant people from annihilation &mdash; the name of God does not appear even once. There is no prayer recorded, no miracle, no prophet, no voice from heaven, no explicit reference to the Lord at all. This conspicuous absence is not an oversight but the very point the book is making.",
      "For though God is never named, his providence is everywhere. The whole story is built upon a series of seeming &ldquo;coincidences&rdquo; that, taken together, are far too precise to be chance. A Jewish orphan happens to become queen of Persia. Mordecai happens to overhear an assassination plot. Haman happens to cast the lot for a day nearly a year off, leaving time for deliverance. The king happens to be unable to sleep on the one night that matters, and happens to have read to him the very record of Mordecai&rsquo;s unrewarded service.",
      "Pile these &ldquo;coincidences&rdquo; together and the reader is meant to draw the inevitable conclusion: this is not luck but providence. God is governing every detail, working invisibly behind the throne of Persia, behind the casting of lots and the sleeplessness of kings, to preserve his people. The book teaches its theology not by stating it but by enacting it, leaving us to perceive the hidden hand that moves through events that the characters themselves could only call chance.",
      "This is the great theme of Esther: the providence of God in his apparent absence. In the Books of Exodus or Daniel, God acts in spectacular, visible ways &mdash; plagues, pillars of fire, miraculous rescues from furnace and lions&rsquo; den. But in Esther he is hidden, working through ordinary politics, human courage, and the unnoticed timing of events. This is, in truth, far closer to the way most believers experience God most of the time &mdash; not in visible miracles, but in a providence perceived only in hindsight.",
      "Esther speaks, then, to every season when God seems silent or absent &mdash; when there is no voice from heaven, no obvious miracle, no clear sign, and the people of God feel exposed and alone in a hostile world. The book insists that God&rsquo;s apparent absence is not his real absence. He is no less present, no less sovereign, no less faithful when he works through hidden providence than when he splits the sea. His silence is not abandonment; his hiddenness is not absence.",
      "There is even a hint of this trust within the story itself. When Mordecai tells Esther that &ldquo;relief and deliverance will rise for the Jews from another place&rdquo; if she stays silent (4:14), he expresses an unshakable confidence that deliverance will come &mdash; from somewhere, from someone &mdash; whether or not Esther plays her part. He cannot name the source, but he is certain of the rescue. That quiet certainty, in a book that never names God, is itself a profound confession of faith in an unseen Deliverer.",
      "And so Esther leaves the believer with a steadying assurance. The God who is never named is everywhere at work; the God who seems absent governs history down to its smallest details; the God who performs no public miracle is nonetheless the silent author of his people&rsquo;s rescue. We are called, like Esther and Mordecai, to act with courage and faith in our own time, trusting that the hidden hand which preserved a people in Persia is the same hand that holds our times &mdash; present, always, even in his apparent absence.",
    ],
  },
];

const videoItems = [
  { videoId: "JydNSlufRIs", title: "BibleProject - Book of Esther Overview" },
  { videoId: "expw4qWFcm8", title: "The Story of Esther Explained" },
  { videoId: "Kk9Cj_jbZQA", title: "For Such a Time as This - Esther" },
];

export default function ChristianBookOfEstherGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Esther
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A Jewish queen in the court of Persia, the threat of genocide, Mordecai&rsquo;s challenge to act &ldquo;for such a time as this,&rdquo; the great reversal of fortunes that gives us the feast of Purim &mdash; and the hidden providence of a God who is never once named yet governs every detail.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                background: tab === t ? PURPLE : CARD,
                color: tab === t ? "#fff" : MUTED,
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
            <div style={{ color: PURPLE, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Esther through visual teaching on the structure of the book, the courage of Esther, and the hidden providence of God working behind the throne of Persia.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>For Such a Time as This</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Esther reminds us that even when God seems silent &mdash; when there is no voice from heaven and his name is never spoken &mdash; his providence governs every detail of history. The same hidden hand that preserved a people in Persia holds our times too, calling us, like Esther, to act with courage and faith for such a time as this.
          </p>
        </div>
      </main>
    </div>
  );
}
