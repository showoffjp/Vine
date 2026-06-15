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
  "The Plot to Deceive",
  "The Stolen Blessing",
  "Grief and Flight",
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
    heading: "A Family Fractured by Favoritism and Deceit",
    reference: "Genesis 27",
    paragraphs: [
      "Genesis 27 is one of the most painful and unflinching chapters in all of Scripture, a family drama of favoritism, deception, and bitter loss that nevertheless advances the mysterious purposes of God. The aged and blind Isaac, sensing that his death may be near, prepares to bestow the patriarchal blessing upon Esau, his beloved firstborn (vv.1&ndash;4). But Rebekah, who loves Jacob, overhears the plan and sets in motion a scheme to steal the blessing for her favored son, dressing Jacob in Esau&rsquo;s clothes and the skins of goats so that the blind father will be deceived.",
      "The plan succeeds. Jacob comes before his father with lies on his lips, and Isaac &mdash; suspicious yet ultimately fooled by touch, smell, and taste &mdash; pronounces over him the great blessing of the firstborn: the dew of heaven, the fatness of the earth, plenty of grain and wine, and dominion over nations and brothers (vv.18&ndash;29). The irreversible word is spoken, and the blessing cannot be recalled. When Esau returns from the hunt to claim what was his, he finds it gone forever and cries out with a great and bitter cry, receiving only a lesser, sorrowful word from his father (vv.30&ndash;40).",
      "Esau&rsquo;s grief hardens into murderous hatred, and he vows to kill his brother once their father has died and the days of mourning are past (v.41). Rebekah, learning of the threat, contrives once more &mdash; this time to send Jacob away to her brother Laban in Haran, ostensibly to find a wife but truly to escape Esau&rsquo;s wrath (vv.42&ndash;46). The chapter ends with the family scattered: Isaac deceived and trembling, Esau weeping and enraged, Jacob fleeing into exile, and Rebekah parting from the son she loves &mdash; whom, the narrative quietly implies, she will never see again.",
      "Beneath the human drama runs a divine thread. Before the twins were even born, the Lord had told Rebekah, &ldquo;The older will serve the younger&rdquo; (Genesis 25:23). The blessing that Jacob seizes by fraud was already promised to him by God&rsquo;s sovereign choice. This sets up the central theological tension of the chapter: the purposes of God advance, yet they are not thereby excused from the sin of those who scheme to bring them about. God&rsquo;s promise did not require Rebekah&rsquo;s lie or Jacob&rsquo;s deceit, and every party to the deception will reap a bitter harvest from it.",
      "The roots of the tragedy reach back to a single, devastating detail recorded in Genesis 25:28: &ldquo;Isaac, who had a taste for wild game, loved Esau, but Rebekah loved Jacob.&rdquo; Parental favoritism had split the household down the middle, each parent attached to a different son, and the chapter shows the bitter fruit of that division. A home divided by partiality became a home capable of deception, theft, and the threat of murder. The sins of Genesis 27 do not appear from nowhere; they grow from soil long poisoned.",
      "For the reader, Genesis 27 is a sobering mirror. It refuses to whitewash its heroes: Jacob, the man God chose, is here a liar; Rebekah, the woman of faith, is here a schemer; Isaac, the patriarch, is here a man of the flesh, governed by his appetite and his preference. Yet over this wreckage of human sin, God&rsquo;s covenant purpose moves forward unbroken. The chapter teaches us both the seriousness of sin and its consequences, and the astonishing grace of a God who accomplishes his good ends even through deeply flawed and divided people.",
    ],
  },
  {
    id: "The Plot to Deceive",
    heading: "The Plot to Deceive Isaac",
    reference: "Genesis 27:1&ndash;17",
    paragraphs: [
      "The chapter opens in the shadow of approaching death. &ldquo;When Isaac was old and his eyes were so weak that he could no longer see, he called for Esau his older son&rdquo; (v.1). Isaac&rsquo;s blindness is more than a physical fact; it becomes the very weakness the deception will exploit, and it hints at a deeper blindness &mdash; a refusal to see what God had said about his sons. He sends Esau to hunt wild game and prepare the savory meal he loves, intending to bless his firstborn afterward, his affection still ruled by the taste of venison that first drew him to Esau.",
      "Rebekah is listening. &ldquo;Now Rebekah was listening as Isaac spoke to his son Esau&rdquo; (v.5). The moment she hears the plan, she acts with swift and decisive resolve, summoning Jacob and laying out a scheme of her own. There is no pause for prayer, no appeal to the word God had spoken to her years before. Convinced that the promised blessing must be secured by her own cunning, she takes matters into her own hands, trusting her wits rather than the God who had already declared that the older would serve the younger.",
      "Her instructions are precise and bold: &ldquo;Go out to the flock and bring me two choice young goats, so I can prepare some tasty food for your father, just the way he likes it&rdquo; (v.9). She will cook the goats to imitate the venison Isaac craves, and she will use the goatskins to disguise Jacob&rsquo;s smooth skin as the hairy skin of his brother. Every detail of the deception is engineered to deceive a blind man&rsquo;s remaining senses &mdash; his taste, his smell, and his touch &mdash; turning a mother&rsquo;s ingenuity to the service of a lie.",
      "Jacob&rsquo;s objection is revealing. &ldquo;But my brother Esau is a hairy man while I have smooth skin. What if my father touches me? I would appear to be tricking him and would bring down a curse on myself rather than a blessing&rdquo; (vv.11&ndash;12). Notice what troubles Jacob: not the wrongness of the deceit, but the danger of being caught. His fear is not of sinning against his father but of being exposed and cursed. The conscience of the schemer is occupied with the risk, not the guilt &mdash; a portrait of the way sin calculates consequences while ignoring righteousness.",
      "Rebekah&rsquo;s reply is one of the most startling lines in the chapter: &ldquo;Let the curse fall on me, my son&rdquo; (v.13). She is so determined to secure the blessing for Jacob that she is willing to take any curse upon herself. Her words reveal a fierce maternal love bent in the wrong direction &mdash; a love that would sacrifice her own standing rather than trust God to keep his promise in his own way. And in a sense the curse would indeed fall on her, for she would lose Jacob to exile and never see her beloved son&rsquo;s face again.",
      "So the plot is set in motion. Jacob fetches the goats; Rebekah prepares the savory food just as Isaac loves it; she takes Esau&rsquo;s best clothes and puts them on Jacob, covering his hands and the smooth part of his neck with the goatskins (vv.14&ndash;16). The careful staging of the deception unfolds step by step, mother and son working in grim partnership. The family that God had chosen to carry his covenant is here exposed in all its brokenness &mdash; a household where love has become partiality, and partiality has become a conspiracy to deceive the dying father at its head.",
    ],
  },
  {
    id: "The Stolen Blessing",
    heading: "The Stolen Blessing",
    reference: "Genesis 27:18&ndash;29",
    paragraphs: [
      "Jacob steps into his father&rsquo;s presence carrying the disguise and the dish, and immediately the lies begin. &ldquo;I am Esau your firstborn,&rdquo; he says. &ldquo;I have done as you told me&rdquo; (v.19). With a single sentence Jacob denies his own name and claims his brother&rsquo;s identity. The deception is not a half-truth or an evasion; it is a bold, direct falsehood spoken to a blind and trusting father. The man whom God had chosen to carry the covenant promise enters the story of the blessing through a doorway of outright deceit.",
      "Worse still, Jacob drags the name of God into his lie. When Isaac marvels that the game was found so quickly, Jacob answers, &ldquo;The Lord your God gave me success&rdquo; (v.20). To cover one deception he commits another, attributing his swift &ldquo;hunt&rdquo; to the providence of God. There is a particular gravity in invoking the Lord&rsquo;s name to support a falsehood, clothing fraud in the language of piety. The scene shows how one sin breeds another, and how easily the holy name can be pressed into the service of a lie.",
      "Isaac is suspicious. &ldquo;The voice is the voice of Jacob, but the hands are the hands of Esau&rdquo; (v.22). Here is the hinge of the whole drama. Isaac&rsquo;s ears tell him the truth, but his hands are deceived by the goatskins, and in the end he trusts his touch over his hearing. He draws Jacob near, feels the hairy skin, smells the scent of Esau&rsquo;s garments &mdash; &ldquo;the smell of my son is like the smell of a field that the Lord has blessed&rdquo; (v.27) &mdash; and tastes the savory food. Three senses conspire to overrule the one sense that perceived the truth, and the patriarch is undone.",
      "Convinced at last, Isaac pronounces the great blessing: &ldquo;May God give you heaven&rsquo;s dew and earth&rsquo;s richness &mdash; an abundance of grain and new wine&rdquo; (v.28). The blessing showers upon Jacob the fertility of the land, the dew that waters the crops, and the harvest of grain and wine that signified prosperity and life. It is a word of material abundance and divine favor, the patriarch calling down upon his son the goodness of the earth and the provision of heaven, all of it now flowing to the younger by way of a stolen identity.",
      "The blessing then rises to dominion: &ldquo;May nations serve you and peoples bow down to you. Be lord over your brothers, and may the sons of your mother bow down to you&rdquo; (v.29). Here the word reaches beyond fields and flocks to power and rule, granting Jacob lordship over peoples and over his own brother &mdash; an unmistakable echo of the oracle given to Rebekah, &ldquo;the older will serve the younger.&rdquo; The blessing closes with the very heart of the Abrahamic promise: &ldquo;Cursed be those who curse you, and blessed be those who bless you&rdquo; (v.29), binding Jacob into the covenant line.",
      "What is done cannot be undone. In the world of the patriarchs, the spoken blessing was no mere wish but a binding, irreversible act, a word that, once released, took on a life of its own and could not be recalled. Isaac will later confirm this with trembling: &ldquo;I blessed him &mdash; and indeed he will be blessed!&rdquo; (v.33). The stolen blessing stands. Through fraud and falsehood, Jacob has obtained what God had already promised him &mdash; a sobering union of human sin and divine purpose that the rest of the chapter will not allow us to forget.",
    ],
  },
  {
    id: "Grief and Flight",
    heading: "Esau's Grief and Jacob's Flight",
    reference: "Genesis 27:30&ndash;46",
    paragraphs: [
      "No sooner has Jacob left his father&rsquo;s tent than Esau returns from the hunt, bearing the savory food and expecting his blessing. When he presents himself, the dreadful truth breaks upon Isaac: &ldquo;Isaac trembled violently and said, &lsquo;Who was it, then, that hunted game and brought it to me? I ate it just before you came and I blessed him &mdash; and indeed he will be blessed!&rsquo;&rdquo; (v.33). The old man&rsquo;s violent trembling is the trembling of a soul that suddenly sees both the depth of the deception and the irrevocable nature of what he has done. The blessing is gone, and it cannot be recalled.",
      "Esau&rsquo;s response is one of the most heart-rending cries in Scripture: &ldquo;When Esau heard his father&rsquo;s words, he burst out with a loud and bitter cry and said to his father, &lsquo;Bless me &mdash; me too, my father!&rsquo;&rdquo; (v.34). Again and again he pleads, &ldquo;Do you have only one blessing, my father? Bless me too, my father!&rdquo; and he weeps aloud (v.38). His grief is real and terrible, the anguish of a man who has lost something precious and beyond recovery. The hunter who once despised his birthright now sobs for the blessing that cannot return to him.",
      "Isaac does pronounce a word over Esau, but it is a shadow of the blessing given to Jacob: &ldquo;Your dwelling will be away from the earth&rsquo;s richness, away from the dew of heaven above. You will live by the sword and you will serve your brother&rdquo; (vv.39&ndash;40). Where Jacob received the fatness of the earth, Esau is sent away from it; where Jacob received dominion, Esau is given servitude and a life of violence. Yet a flicker of hope remains: &ldquo;But when you grow restless, you will throw his yoke from off your neck&rdquo; &mdash; a distant day when Esau&rsquo;s descendants would break free.",
      "Grief curdles into hatred. &ldquo;Esau held a grudge against Jacob because of the blessing his father had given him. He said to himself, &lsquo;The days of mourning for my father are near; then I will kill my brother Jacob&rsquo;&rdquo; (v.41). The fracture in the family is now complete: a brother plotting fratricide, biding his time only out of respect for their father&rsquo;s remaining days. The household chosen to bless all the nations of the earth has become a place of murderous intent, the bitter harvest of favoritism and deceit ripening into the threat of bloodshed.",
      "Once more Rebekah intervenes with a scheme. Learning of Esau&rsquo;s vow, she urges Jacob to flee to her brother Laban in Haran: &ldquo;Stay with him for a while until your brother&rsquo;s fury subsides&rdquo; (v.44). She imagines it will be a short absence &mdash; &ldquo;a while&rdquo; &mdash; until Esau&rsquo;s anger cools and she can send for Jacob again. But the years would stretch into decades, and Rebekah&rsquo;s quiet words conceal a heavy irony: the mother who risked everything to keep Jacob near will lose him to a long exile, and the narrative never records that she saw his face again.",
      "The chapter leaves us holding a hard tension. Every party bears the cost of their sin: Isaac deceived and shaken, Esau robbed and embittered, Rebekah parted forever from her beloved son, and Jacob driven into a long exile where he himself will be deceived by Laban and reap what he has sown. And yet, through all this brokenness, the purpose declared in Genesis 25:23 advances unbroken. The New Testament looks back on this moment in Hebrews 12:16&ndash;17, holding up Esau as a warning against those who, like him, treat holy things as cheap and find no place for repentance though they seek the blessing with tears. Genesis 27 thus stands as both a solemn warning about sin and a quiet testimony to the God whose covenant purposes cannot finally be thwarted by human deceit.",
    ],
  },
];

const videoItems = [
  { videoId: "Gk4tR9nP2vM", title: "Genesis 27 - Jacob Steals the Blessing" },
  { videoId: "Lm8pZ3Rx7Kd", title: "Favoritism and Deception in the House of Isaac" },
  { videoId: "Bq2nT6Vt4Hs", title: "The Older Will Serve the Younger - God's Sovereign Choice" },
  { videoId: "Yc9dK5Mp1Wn", title: "Esau's Tears - A Study of Hebrews 12 and Genesis 27" },
];

export default function Genesis27GuidePage() {
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
            Genesis Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Genesis 27
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The blind Isaac prepares to bless Esau, but Rebekah and Jacob conspire to steal the blessing &mdash; a story of favoritism, deception, and bitter loss in which Esau weeps, Jacob flees to Haran, and the mysterious purpose of God from Genesis 25:23 advances even through deeply flawed people.
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
              Deepen your study of Genesis 27 through visual teaching on the stolen blessing, the wreckage of favoritism, the sovereign choice of God, and the warning of Esau&rsquo;s tears in Hebrews 12.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Sin's Bitter Harvest, God's Unbroken Purpose</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 27 refuses to whitewash its characters. Every party reaps a bitter harvest from favoritism and deceit &mdash; yet over the wreckage, the covenant purpose declared in Genesis 25:23 moves forward unbroken. It is a sobering picture of the seriousness of sin and the astonishing grace of a God who accomplishes his good ends even through deeply flawed people.
          </p>
        </div>
      </main>
    </div>
  );
}
