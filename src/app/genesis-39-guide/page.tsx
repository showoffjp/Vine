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
  "The LORD Was with Joseph",
  "Potiphar Trusts Joseph",
  "Potiphar's Wife",
  "Joseph Flees and Is Imprisoned",
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
    heading: "Overview of Genesis 39",
    reference: "Genesis 39:1&ndash;23",
    paragraphs: [
      "Genesis 39 is one of the most compressed and powerful chapters in the Joseph narrative. Sold by his brothers in Genesis 37, Joseph arrives in Egypt as a slave &mdash; stripped of his robe, separated from his father, carried far from Canaan on a caravan of Ishmaelites. He enters the household of Potiphar, an officer of Pharaoh and captain of the guard. Everything human about Joseph&rsquo;s situation is wrong: he is enslaved, foreign, powerless, and alone. And yet the chapter announces its ruling conviction in its very first movement: &ldquo;The LORD was with Joseph, and he became a successful man&rdquo; (39:2).",
      "That phrase &mdash; &ldquo;the LORD was with Joseph&rdquo; &mdash; appears four times in this single chapter (vv. 2, 3, 21, 23), and it is the theological key to everything that follows. Genesis 37 did not mention God&rsquo;s name even once. Genesis 39 repeats the divine presence like a refrain, making clear that whatever looks like catastrophe from the outside is in fact the arena of God&rsquo;s active, steadfast care. Joseph is not abandoned. The pit in Canaan was not the end, and the slave-quarters in Egypt are not the end. The LORD is with him.",
      "The chapter moves in two distinct acts. In the first act (vv. 1&ndash;6), Joseph rises in Potiphar&rsquo;s household to the position of chief steward, overseeing everything his master owns. The LORD blesses the Egyptian&rsquo;s house for Joseph&rsquo;s sake. Everything Joseph does prospers. Potiphar sees it and entrusts all he has to Joseph&rsquo;s hand. In the second act (vv. 7&ndash;23), that position is threatened by a sustained campaign of seduction by Potiphar&rsquo;s wife. Joseph refuses with moral clarity, she retaliates with a false accusation, and Joseph is thrown into prison. Yet the chapter ends exactly where it began: &ldquo;the LORD was with Joseph and showed him steadfast love.&rdquo;",
      "The structure of the chapter is chiastic in its moral logic. Joseph rises, is tested, falls &mdash; and yet does not fall, because the LORD is with him in the prison just as he was in the house. The outward circumstances change dramatically: from slave to steward, from steward to prisoner. The one constant is the presence and favor of God. This is not a chapter about Joseph&rsquo;s cleverness or his ability to manage difficult situations. It is a chapter about the faithfulness of God to his servant, in prosperity and in adversity, in the great house and in the dungeon.",
      "Genesis 39 also introduces the key Josephine virtue: the refusal to sin against God even when sin would be easy, private, and advantageous. &ldquo;How then can I do this great wickedness and sin against God?&rdquo; (39:9). This sentence, spoken in an Egyptian house to a woman whose husband will never know, reveals the interior of Joseph&rsquo;s character. His morality is not social compliance; it is a personal relationship with the God who is with him. He does not refuse Potiphar&rsquo;s wife because he fears Potiphar. He refuses because he fears God.",
      "The chapter ends with Joseph in prison, and yet with Joseph thriving in prison &mdash; made keeper of all the prisoners, trusted by the warden with everything, his work prospering in his hands. The reader who has followed the story from Genesis 37 can see the pattern: wherever Joseph is placed, he rises; whatever he is given, he manages faithfully; wherever God places him, the LORD&rsquo;s presence goes with him. The prison is not a dead end; it will be the place where Joseph meets Pharaoh&rsquo;s cupbearer, and where the road to the throne of Egypt runs through. The arc of the Joseph story passes through the dungeon on its way to the palace.",
    ],
  },
  {
    id: "The LORD Was with Joseph",
    heading: "The LORD Was with Joseph",
    reference: "Genesis 39:1&ndash;3",
    paragraphs: [
      "The opening three verses of Genesis 39 are carefully constructed to make a theological claim before they make a narrative one. Joseph has been brought down to Egypt and purchased by Potiphar &mdash; those are the facts of his situation, stated without sentimentality. He is a slave in a foreign country. But verse 2 does not wait to develop the plot before delivering its central assertion: &ldquo;The LORD was with Joseph, and he became a successful man, and he was in the house of his Egyptian master.&rdquo; Success is predicated not on Joseph&rsquo;s abilities or his strategies, but on the divine presence.",
      "The Hebrew word for &ldquo;successful&rdquo; here is matzliach, related to the root that means to advance, to thrive, to prosper. It is not merely financial prosperity that is in view &mdash; it is a comprehensive flourishing of the person and work of Joseph in every context. Whatever he puts his hand to advances. The cause of this thriving is stated with equal directness in verse 3: &ldquo;His master saw that the LORD was with him and that the LORD caused all that he did to succeed in his hands.&rdquo; Potiphar, an Egyptian official with no particular reason to be attentive to the God of Israel, nonetheless observes something undeniable: this man prospers because of his God.",
      "The fourfold repetition of the phrase &ldquo;the LORD was with Joseph&rdquo; across the chapter is one of the most emphatic uses of divine presence language in the entire book of Genesis. The phrase echoes the Abrahamic covenant promise that God would be with his people wherever they went. Isaac was promised it at Beersheba (26:3); Jacob was promised it at Bethel (28:15) and again at Peniel. Now Joseph, who received no such explicit promise in his own person, is shown to live under that same covenantal accompaniment. The promises made to the fathers travel with the sons, even into Egypt, even into slavery.",
      "There is also a striking irony in the fact that a pagan master is the one who perceives the LORD&rsquo;s presence with Joseph. Potiphar does not know the LORD in the covenant sense; he is an official of Pharaoh&rsquo;s court, immersed in Egyptian religion. And yet he sees something so consistent, so unmistakable in the pattern of Joseph&rsquo;s success, that he attributes it to the God of this Hebrew slave. The blessing of God on Joseph&rsquo;s life is visible enough to penetrate the awareness of an Egyptian pagan. This is itself a fulfillment of the Abrahamic promise: through Abraham&rsquo;s offspring, all the families of the earth shall be blessed (12:3).",
      "The theological point of these verses extends beyond Joseph&rsquo;s biography. They establish a principle that runs through the whole of Scripture: God&rsquo;s presence with his servant does not prevent adversity, but it does transform adversity into the arena of faithfulness and growth. Joseph is a slave &mdash; the LORD is with him. He will be a prisoner &mdash; the LORD is with him. He will be forgotten by Pharaoh&rsquo;s cupbearer &mdash; the LORD is with him. In every station, however degrading or unjust, the divine presence is the one constant. The repeated refrain of God&rsquo;s presence is the author&rsquo;s invitation to read every subsequent development in the Joseph story through this lens.",
      "For the Christian reader, the language of God&rsquo;s presence with Joseph anticipates the incarnational promise of Emmanuel &mdash; God with us &mdash; and the risen Christ&rsquo;s pledge to his disciples: &ldquo;I am with you always, to the end of the age&rdquo; (Matthew 28:20). The pattern established in Joseph&rsquo;s life is the pattern of God&rsquo;s relationship with all his servants: the presence does not guarantee comfort or ease, but it does guarantee that suffering is not abandonment, that the pit is not God&rsquo;s final word, and that even the darkest dungeon can be the place where God&rsquo;s purposes advance.",
    ],
  },
  {
    id: "Potiphar Trusts Joseph",
    heading: "Potiphar Trusts Joseph",
    reference: "Genesis 39:4&ndash;6",
    paragraphs: [
      "The consequence of God&rsquo;s visible blessing on Joseph&rsquo;s work is swift and remarkable. Potiphar&rsquo;s response to what he sees is not suspicion or exploitation but trust: &ldquo;So Joseph found favor in his sight and attended him, and he made him overseer of his house and put him in charge of all that he had&rdquo; (39:4). The Hebrew word for &ldquo;favor&rdquo; here &mdash; chen &mdash; is the same word used throughout the Old Testament for the grace or favor that God gives to his people in the eyes of those who have power over them. Joseph is not merely competent; he carries the favor of God.",
      "The scope of Joseph&rsquo;s authority in Potiphar&rsquo;s house is total. He is made overseer of the entire household and put in charge of all that Potiphar has. The only exception that Potiphar reserves is his own food &mdash; most commentators take this as a reference either to the Egyptian practice of ritual food preparation or to Potiphar&rsquo;s desire to maintain his household&rsquo;s separation from the dietary customs of a Hebrew. The exception is noted to underscore how complete the rest of the trust is: apart from this one thing, Joseph has authority over everything.",
      "The blessing that flows from this arrangement is explicitly covenantal in its language. &ldquo;From the time that he made him overseer in his house and over all that he had, the LORD blessed the Egyptian&rsquo;s house for Joseph&rsquo;s sake; the blessing of the LORD was on all that he had, in house and field&rdquo; (39:5). This is the Abrahamic blessing-by-association made concrete. The promise God gave to Abraham in Genesis 12:3 &mdash; &ldquo;in you all the families of the earth shall be blessed&rdquo; &mdash; is being fulfilled in a small but tangible way in Potiphar&rsquo;s house in Egypt. The nations are blessed through Abraham&rsquo;s seed, and Joseph is that seed.",
      "Verse 6 then introduces the element that will set the next crisis in motion: &ldquo;So he left all that he had in Joseph&rsquo;s charge, and because of him he had no concern about anything but the food he ate. Now Joseph was handsome in form and appearance.&rdquo; The note about Joseph&rsquo;s appearance at this exact moment in the narrative is carefully placed. The reader who has been told that the LORD blessed everything Joseph did is now told that Joseph is physically attractive. These two facts together &mdash; his authority and his appearance &mdash; are what make the following scene possible.",
      "The portrait of Joseph as overseer in Potiphar&rsquo;s house is the first extended depiction of the Joseph who will eventually govern Egypt. He is trustworthy with the little given to him before he is given much more. He exercises authority with integrity before he exercises the authority of the second chariot of Pharaoh. The pattern of faithful stewardship in the small place is the preparation for faithful stewardship in the great place. The slave who can be trusted with everything in an Egyptian captain&rsquo;s house is being formed into the administrator who will manage the grain supply of an empire.",
      "There is also a quiet dignity in the account of Joseph&rsquo;s time in Potiphar&rsquo;s house that stands in contrast to the indignity of his arrival. He came as a purchased slave. He rises to the most trusted position in the household. He did not manipulate his way there; the text says plainly that the LORD was with him and caused all he did to prosper. Joseph&rsquo;s faithfulness in his work is the human side; God&rsquo;s blessing on that work is the divine side. The two are not in competition. Joseph works; God blesses. Joseph is faithful in his place; God advances him in due time.",
    ],
  },
  {
    id: "Potiphar's Wife",
    heading: "Potiphar&rsquo;s Wife",
    reference: "Genesis 39:7&ndash;18",
    paragraphs: [
      "The test that now confronts Joseph is of a different order from the difficulties he has already faced. Slavery and displacement were adversities imposed on him from outside. The temptation that now presents itself comes wrapped in an offer, not a threat: &ldquo;After a time his master&rsquo;s wife cast her eyes on Joseph and said, &lsquo;Lie with me&rsquo;&rdquo; (39:7). The words are direct to the point of bluntness. She is the wife of his master, the most powerful woman in the household, and she wants Joseph. The social pressure of the request is enormous: refusal could mean offense, punishment, even death.",
      "Joseph&rsquo;s refusal is immediate and theologically grounded. He does not weigh the risks and calculate the odds. He goes straight to the moral reality: &ldquo;Behold, because of me my master has no concern about anything in the house, and he has put everything that he has in my charge. He is not greater in this house than I am, nor has he kept back anything from me except you, because you are his wife. How then can I do this great wickedness and sin against God?&rdquo; (39:8&ndash;9). The argument is layered: it would be a betrayal of his master&rsquo;s trust; it would be a sin against God. But it is the second argument that carries the ultimate weight.",
      "The phrase &ldquo;sin against God&rdquo; is remarkable for what it reveals about Joseph&rsquo;s interior. He is in a foreign country, far from his family, in the power of Egyptian masters. There is no one from his community watching. Potiphar&rsquo;s wife is offering what she is offering in private. Joseph&rsquo;s refusal is not a performance for observers; it is a genuine moral conviction rooted in his relationship with God. He is not a moral man because he is afraid of being caught. He is a moral man because he is afraid of God &mdash; in the reverential, covenantal sense of that phrase. His conscience is governed by the God who is with him.",
      "The persistence of Potiphar&rsquo;s wife is what the text emphasizes next. &ldquo;And as she spoke to Joseph day after day, he would not listen to her, to lie beside her or to be with her&rdquo; (39:10). This is not a single temptation successfully resisted; it is a sustained campaign of daily solicitation. The narrative wants the reader to understand that Joseph&rsquo;s faithfulness is not the product of a single heroic moment of willpower but of a repeated, daily choosing of integrity over opportunity. The temptation is renewed every day; the refusal is also renewed every day. Joseph&rsquo;s moral character is displayed not in the single no but in the accumulated weight of many nos.",
      "The crisis comes on a day when Joseph enters the house to do his work and finds no other servants present. Potiphar&rsquo;s wife seizes his garment &mdash; the garment that represents his position, his authority, his identity as the trusted steward &mdash; and repeats her demand. Joseph leaves his garment in her hand and flees the house. The verb for his flight is strong: he ran out. He does not hesitate, negotiate, or attempt to retrieve his property. He flees. This is the practical wisdom the New Testament will later articulate: &ldquo;Flee sexual immorality&rdquo; (1 Corinthians 6:18). Resistance in such situations means exit, not engagement.",
      "The reversal that follows is devastating in its injustice. The garment that Joseph left behind &mdash; his garment, the symbol of his faithfulness and his position &mdash; becomes the instrument of his destruction. Potiphar&rsquo;s wife shows it to the servants of the house, claiming that Joseph tried to lie with her and fled when she cried out. She tells the same story to Potiphar when he returns home. The man who fled from sin is accused of the very sin he refused. The garment that is the evidence of his flight becomes the false evidence of his guilt. Joseph&rsquo;s integrity costs him everything he had gained in Egypt.",
    ],
  },
  {
    id: "Joseph Flees and Is Imprisoned",
    heading: "Joseph Flees and Is Imprisoned",
    reference: "Genesis 39:19&ndash;23",
    paragraphs: [
      "When Potiphar hears his wife&rsquo;s accusation, &ldquo;his anger was kindled&rdquo; (39:19). The text does not specify the exact object of his anger &mdash; whether at Joseph or at the situation &mdash; but the result is swift: Joseph is put in prison, in &ldquo;the place where the king&rsquo;s prisoners were confined&rdquo; (39:20). The dungeon is not an ordinary jail; it is the place reserved for political prisoners of the royal household. In one sense Joseph&rsquo;s situation has declined from slave to prisoner, from trusted steward to man under royal confinement. By any ordinary measure, this is disaster.",
      "But the narrator refuses to allow the disaster to be the last word, and he does so by returning to the refrain that began the chapter: &ldquo;But the LORD was with Joseph and showed him steadfast love and gave him favor in the sight of the keeper of the prison&rdquo; (39:21). The structure of the verse is deliberate. The conjunction &ldquo;but&rdquo; sets the LORD&rsquo;s activity in contrast with everything that human injustice has done to Joseph. Potiphar&rsquo;s wife lied; but the LORD was with Joseph. Potiphar was angry; but the LORD showed him steadfast love. Joseph was imprisoned; but the LORD gave him favor. The adversity is real; the divine faithfulness is more real.",
      "The Hebrew word translated &ldquo;steadfast love&rdquo; here is hesed &mdash; the covenant word for God&rsquo;s loyal, unfailing, committed love. It is one of the great words of the Old Testament, used to describe the love that God swore to Abraham and his descendants, the love that does not abandon even when circumstances suggest it has. The appearance of hesed at the lowest point in Joseph&rsquo;s story to this point is the author&rsquo;s signal that the covenantal faithfulness of God has not been interrupted by Joseph&rsquo;s imprisonment. Hesed follows Joseph into the dungeon.",
      "The practical expression of God&rsquo;s steadfast love is the favor Joseph receives from the keeper of the prison. The warden does not need to give Joseph any responsibility; he is a prisoner, and prisoners in the ancient Near East had no rights. But the warden &ldquo;committed to Joseph&rsquo;s care all the prisoners who were in the prison, and whatever was done there, he was the one who did it. The keeper of the prison paid no attention to anything that was in Joseph&rsquo;s charge, because the LORD was with him. And whatever he did, the LORD made it succeed&rdquo; (39:22&ndash;23). The slave who became steward over Potiphar&rsquo;s house is now effectively the steward of the prison.",
      "The parallel between Joseph&rsquo;s rise in Potiphar&rsquo;s house and his rise in the prison is exact and intentional. In both cases: the LORD was with him (vv. 2, 21); his overseer saw this (vv. 3, 23a); everything was committed to his charge (vv. 4, 22); and the LORD made everything he did prosper (vv. 3b, 23b). The two passages are structured to show that the prison and the house are not morally different contexts for the LORD&rsquo;s presence. God does not require favorable circumstances to bless his servant. His steadfast love operates with equal fidelity in the slave quarters and the dungeon.",
      "The prison is the last station before the throne. In Genesis 40, Joseph will meet Pharaoh&rsquo;s cupbearer and baker in this same prison, interpret their dreams, and eventually be remembered by the cupbearer when Pharaoh himself has a dream he cannot interpret. The dungeon is not a dead end; it is the corridor that leads to the palace. The reader who sees this knows that Joseph&rsquo;s imprisonment, like his enslavement, is not the end of his story. Every apparent ending in the Joseph narrative turns out to be a new beginning. The LORD who is with Joseph in the prison is the LORD who will raise him from the prison to stand before Pharaoh, just as the dream at the beginning of the story said he would.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Genesis 39 Today",
    reference: "Genesis 39 &mdash; For the Life of the Church",
    paragraphs: [
      "Genesis 39 speaks with unusual directness into the experience of believers who find themselves in situations of injustice &mdash; doing right and suffering for it, being faithful and being punished for that faithfulness. Joseph&rsquo;s story is not an isolated case in Scripture; it is the paradigmatic case of the person who refuses to sin against God and is nonetheless condemned by a fallen world. The chapter does not promise that faithfulness prevents suffering. It promises something different and harder: that God&rsquo;s presence and steadfast love accompany the faithful servant into the suffering that faithfulness sometimes produces.",
      "The refusal of Potiphar&rsquo;s wife offers one of the most striking models of sexual integrity in the entire Old Testament. Several features of Joseph&rsquo;s refusal deserve careful attention. First, it is theologically grounded: he refuses not because of social consequences but because the act would be &ldquo;wickedness&rdquo; and &ldquo;sin against God.&rdquo; His conscience is answerable to God, not to his social environment. Second, the refusal is repeated: the text says that Joseph refused her &ldquo;day after day.&rdquo; Moral integrity in this area is not a single decision; it is a daily practice of renewed commitment. Third, when the temptation becomes unavoidable, Joseph&rsquo;s response is flight, not negotiation. He runs.",
      "The persistence of the temptation is also pastorally important. Genesis 39:10 says that Potiphar&rsquo;s wife spoke to Joseph &ldquo;day after day&rdquo; and he would not listen. This is not the story of a temptation easily overcome by a moment of heroic willpower. It is the story of a man who faced the same temptation repeatedly and who, repeatedly, chose faithfulness. For Christians who find themselves in environments of persistent moral pressure &mdash; at work, in relationships, in private &mdash; Joseph&rsquo;s daily faithfulness is more realistic and more encouraging than a single dramatic triumph.",
      "The unjust imprisonment is perhaps the hardest part of the chapter to receive. Joseph did everything right. He refused sin, he maintained integrity, he chose God over comfort &mdash; and he ended up in prison as a result. The chapter offers no immediate resolution to this injustice. It does not explain why God permitted it, does not cushion it with a quick reversal, does not assure Joseph that the situation will improve soon. What it offers instead is the steadfast love of God in the prison, the favor of the warden, the continued fruitfulness of Joseph&rsquo;s work. The LORD&rsquo;s presence does not explain suffering; it accompanies the sufferer.",
      "The pattern of the chapter &mdash; rise, test, fall, rise again &mdash; with the LORD&rsquo;s presence as the constant thread, corresponds to the experience of many believers in adversarial or marginal positions. The slave who rises in the household, the manager who is falsely accused, the prisoner who nonetheless flourishes through God&rsquo;s favor &mdash; these are not merely ancient stories. They are the shape of faithful life under conditions of injustice in every age. Genesis 39 does not promise that faithfulness will produce comfortable outcomes. It promises that the LORD who is present in the house is also present in the dungeon.",
      "The New Testament looks back on the Joseph story as a pattern of divine purpose working through human betrayal and injustice toward a redemptive end. Stephen, in his speech in Acts 7, recounts Joseph&rsquo;s story as the centerpiece of Israel&rsquo;s history: &ldquo;God was with him and rescued him out of all his afflictions&rdquo; (Acts 7:9&ndash;10). The phrase &ldquo;God was with him&rdquo; is the Acts summary of Genesis 39. Paul tells the Corinthians that God is faithful and will not let them be tempted beyond what they can bear (1 Corinthians 10:13). The community of believers that reads Genesis 39 in the light of the cross and resurrection is invited to see in Joseph&rsquo;s unjust imprisonment a figure of the greater unjust imprisonment and death of the one who was &ldquo;delivered up&rdquo; (Romans 4:25) for our sins &mdash; and who, like Joseph, was exalted to the right hand of power by the God who was with him in the suffering.",
    ],
  },
];

const videoItems = [
  { videoId: "XqBTMsILkJ8", title: "BibleProject - Overview of Genesis Part 2 (Chapters 12-50)" },
  { videoId: "TLoPTzBNKsM", title: "Joseph in Egypt - Genesis 39 Study and Commentary" },
  { videoId: "d5cBBQJgTmY", title: "The LORD Was with Joseph - Faithfulness in Adversity" },
  { videoId: "pXGbMSLMnwk", title: "The Story of Joseph - Genesis 37 to 50 Overview" },
];

export default function Genesis39GuidePage() {
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
            Genesis 39 &mdash; Joseph and Potiphar
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Sold into Egypt, Joseph is purchased by Potiphar, captain of Pharaoh&rsquo;s guard. The LORD is with Joseph and he prospers. Potiphar makes him overseer of everything. Potiphar&rsquo;s wife tries to seduce him; Joseph refuses &mdash; &ldquo;How then can I do this great wickedness and sin against God?&rdquo; She falsely accuses him; he is imprisoned. But the LORD was still with Joseph, showing him steadfast love.
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
              Deepen your study of Genesis 39 through these video teachings on Joseph in Potiphar&rsquo;s house, the temptation by Potiphar&rsquo;s wife, Joseph&rsquo;s faithful refusal, his unjust imprisonment, and the steadfast love of God in the dungeon.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>How Then Can I Sin Against God?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 39 is the chapter of God&rsquo;s unfailing presence. In Potiphar&rsquo;s house and in the dungeon, through prosperity and through unjust suffering, the LORD was with Joseph and showed him steadfast love. The one who refuses to sin against God will not be abandoned by God &mdash; not in the great house, and not in the prison. The steadfast love of the LORD follows his servants into their deepest darkness.
          </p>
        </div>
      </main>
    </div>
  );
}
