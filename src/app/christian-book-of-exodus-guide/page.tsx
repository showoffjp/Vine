"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Slavery and the Call of Moses",
  "The Plagues and the Passover",
  "The Red Sea and the Wilderness",
  "The Law at Sinai",
  "The Golden Calf and the Tabernacle",
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
    id: "Slavery and the Call of Moses",
    heading: "Slavery and the Call of Moses",
    reference: "Exodus 1&ndash;4",
    paragraphs: [
      "Exodus opens in darkness. The descendants of Jacob, who had come to Egypt as honored guests in the days of Joseph, have multiplied into a great people &mdash; and a new king &ldquo;who did not know Joseph&rdquo; has enslaved them, working them ruthlessly and ordering the murder of their newborn sons. The book begins, in other words, with a theological problem as much as a humanitarian one: where is the God of the promises to Abraham? The covenant pledged land, descendants, and blessing; the reality is bondage, oppression, and genocide.",
      "Into this crisis a deliverer is born. The birth of Moses (chapter 2) is a story of providence working through the courage of women &mdash; the Hebrew midwives who fear God more than Pharaoh, Moses&rsquo;s mother and sister, and Pharaoh&rsquo;s own daughter. Saved from Pharaoh&rsquo;s genocide by being hidden in a basket on the very Nile meant to be his grave, Moses is drawn from the water and raised, astonishingly, in Pharaoh&rsquo;s own house. The future liberator grows up inside the household of the oppressor.",
      "But Moses&rsquo;s first attempt at deliverance is a disaster. Seeing an Egyptian beating a Hebrew, he kills the man and hides the body; when the deed becomes known, he flees for his life to Midian, where he settles into the obscure life of a shepherd. Forty years pass. The man who would save Israel is, to all appearances, a failed and forgotten fugitive on the far side of the desert. God&rsquo;s timing is not Moses&rsquo;s timing.",
      "Then comes the burning bush (chapter 3). On Horeb, the mountain of God, Moses turns aside to see a bush that burns but is not consumed, and from it God speaks. This is the great theophany of the book, and at its heart is the revelation of the divine name. When Moses asks what name he should give, God answers, &ldquo;I AM WHO I AM&rdquo; (ehyeh asher ehyeh, 3:14) &mdash; and from this comes the sacred name YHWH. It is the most theologically loaded self-disclosure in the Old Testament: the God who simply is, self-existent, faithful, present, beyond all the gods of Egypt.",
      "God&rsquo;s commission of Moses is met with reluctance. Moses raises five objections in turn &mdash; Who am I? Who are you? What if they don&rsquo;t believe me? I am not eloquent. Please send someone else &mdash; and God answers each one, not by flattering Moses but by promising his own presence: &ldquo;I will be with you&rdquo; (3:12). The deliverer&rsquo;s adequacy is never in himself; it rests entirely in the God who sends him. Even Aaron is given as a help for Moses&rsquo;s reluctant tongue.",
      "The theme that will govern the whole book is established here: God hears the cry of the oppressed and acts to liberate. The language is intensely personal and moving: &ldquo;I have surely seen the affliction of my people who are in Egypt and have heard their cry because of their taskmasters. I know their sufferings, and I have come down to deliver them&rdquo; (3:7&ndash;8). God is not distant from suffering. He sees, he hears, he knows, and he comes down.",
      "This opening movement frames everything that follows. The exodus is not first of all about a nation&rsquo;s politics but about the character of God &mdash; a God who remembers his covenant, who is moved by the groaning of slaves, and who binds his own name to their deliverance. The God revealed at the bush is the God who will be revealed at the cross: the One who comes down to where his people suffer and acts to set them free.",
    ],
  },
  {
    id: "The Plagues and the Passover",
    heading: "The Plagues and the Passover",
    reference: "Exodus 5&ndash;13",
    paragraphs: [
      "Armed with God&rsquo;s name and presence, Moses confronts Pharaoh with the demand that defines the book: &ldquo;Thus says the LORD&hellip; Let my people go&rdquo; (5:1). Pharaoh&rsquo;s response is contempt &mdash; &ldquo;Who is the LORD, that I should obey his voice?&rdquo; &mdash; and he increases the slaves&rsquo; burdens. The conflict is now joined, and it is at root a contest of lordship: between the god-king of Egypt and the God of the Hebrews. The whole question is whose word will prevail.",
      "Pharaoh&rsquo;s hardened heart runs through the narrative as a deep theological puzzle. Sometimes the text says Pharaoh hardened his own heart; sometimes it says God hardened it. The two are held together without embarrassment, presenting in narrative form the abiding mystery of divine sovereignty and human responsibility. Pharaoh is fully accountable for his defiance; and yet God&rsquo;s purposes are not thwarted by it but accomplished through it &mdash; a pattern Paul will later ponder in Romans 9.",
      "The ten plagues are best understood not as random disasters but as a systematic assault on the gods of Egypt. The Nile, worshipped as the god Hapi, turns to blood; the sun, embodied in Ra, is blotted out by darkness; the livestock, the storms, the river, the firstborn &mdash; each plague topples a deity in the Egyptian pantheon. &ldquo;On all the gods of Egypt I will execute judgments: I am the LORD&rdquo; (12:12). The plagues demonstrate YHWH&rsquo;s supremacy over the entire religious order of the world&rsquo;s mightiest empire.",
      "The plagues build to their terrible climax in the death of the firstborn &mdash; and to the institution that will define Israel forever: the Passover (chapter 12). Each household is to take a lamb without blemish, kill it, and smear its blood on the doorposts and lintel. When the angel of death passes through Egypt that night, he will &ldquo;pass over&rdquo; every house marked by the blood. Judgment falls everywhere except where the blood of the lamb intervenes.",
      "The Passover becomes the founding event of Israel&rsquo;s identity. It is to be kept every year as a memorial, eaten in haste with unleavened bread, so that every generation might say, &ldquo;It is because of what the LORD did for me when I came out of Egypt&rdquo; (13:8). The night of deliverance is woven permanently into the calendar and self-understanding of the people. To be an Israelite is to be one who was redeemed by the blood of the lamb out of the house of slavery.",
      "And the Passover becomes the central type of redemption in the whole Bible. Its pattern &mdash; a spotless lamb slain, its blood the means of deliverance from death &mdash; reaches its fulfillment in Christ. Paul writes plainly, &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (1 Corinthians 5:7). It is no accident that Jesus was crucified at Passover, that John the Baptist called him &ldquo;the Lamb of God who takes away the sin of the world,&rdquo; and that the Lord&rsquo;s Supper is rooted in a Passover meal.",
      "So the plagues and the Passover are not merely the dramatic machinery of an ancient liberation. They are the establishing pattern of how God saves: judgment is real, death is real, but a substitute is provided, and those who shelter under the blood of the lamb are passed over and brought out into freedom. The exodus from Egypt is the Old Testament&rsquo;s great picture of the greater exodus accomplished at Calvary.",
    ],
  },
  {
    id: "The Red Sea and the Wilderness",
    heading: "The Red Sea and the Wilderness",
    reference: "Exodus 14&ndash;18",
    paragraphs: [
      "Freedom is barely a day old when it seems about to be undone. Pharaoh, regretting his release of the slaves, pursues them with his army and pins them against the sea &mdash; water before them, chariots behind them, no way out. The people panic and turn on Moses. His answer is the posture of faith: &ldquo;Fear not, stand firm, and see the salvation of the LORD&hellip; The LORD will fight for you, and you have only to be silent&rdquo; (14:13&ndash;14).",
      "The crossing of the Red Sea (chapter 14) is the definitive act of salvation in the Old Testament. God drives back the sea with a strong east wind; Israel passes through on dry ground; and when the Egyptians follow, the waters return and the army of the world&rsquo;s greatest empire is swallowed up. From this moment the exodus becomes the touchstone of Israel&rsquo;s memory &mdash; invoked by the prophets, sung in the psalms, recited at every Passover &mdash; the supreme demonstration that God saves his people and judges their oppressors.",
      "The Song of Moses (chapter 15) erupts in response. &ldquo;I will sing to the LORD, for he has triumphed gloriously; the horse and his rider he has thrown into the sea.&rdquo; Widely regarded as among the oldest poetry in the Bible, it is Israel&rsquo;s first hymn of redemption, sung on the far shore of deliverance. Miriam takes a tambourine, and the women dance; salvation rightly issues in worship and joy.",
      "But the wilderness quickly tests the freed people. At Marah the water is bitter and undrinkable; God makes it sweet (15:22&ndash;25). In the wilderness of Sin the people hunger, and God gives manna and quail (chapter 16) &mdash; bread from heaven that appears each morning and cannot be stockpiled, for any hoarded overnight breeds worms. The daily provision is itself a lesson: dependence on God cannot be replaced by self-sufficiency, and even the Sabbath rhythm is built into the gathering.",
      "When the people thirst again at Rephidim, God commands Moses to strike a rock, and water gushes out (chapter 17) &mdash; a moment Paul will later read as a figure of Christ, the rock that followed them. Yet alongside these provisions runs a darker thread: the persistent pattern of grumbling. Again and again the people complain, even romanticizing their slavery in Egypt, remembering the &ldquo;pots of meat&rdquo; while forgetting the whips and the murdered children.",
      "This grumbling exposes the deep work the wilderness is meant to do. A slave people does not become a free and faithful people overnight. The wilderness is the place of testing and formation, where Israel must learn to trust the God who delivered them &mdash; to depend on his provision, keep his rhythms, and follow his lead. The journey from Egypt to Sinai is not merely geographical; it is the slow, often painful school in which a rabble of former slaves is shaped into the people of God.",
      "The section closes with the visit of Jethro, Moses&rsquo;s father-in-law (chapter 18), who rejoices in what God has done and wisely counsels Moses to share the burden of leadership. Even the deliverer cannot bear the people alone. With the appointment of capable judges, Israel is being given structure as well as freedom &mdash; prepared, now, to arrive at the mountain where the LORD will meet them.",
    ],
  },
  {
    id: "The Law at Sinai",
    heading: "The Law at Sinai",
    reference: "Exodus 19&ndash;24",
    paragraphs: [
      "Three months out of Egypt, Israel arrives at Mount Sinai, and the book reaches its second great center. The theophany is overwhelming: the mountain wrapped in thick cloud and smoke, fire and trembling, thunder and the blast of a trumpet growing louder and louder, the people warned not to touch the mountain on pain of death (chapter 19). The God who came down at the bush now comes down on the mountain, in holiness that is both glorious and terrifying.",
      "Before a single command is given, God states the relationship that grounds them all: &ldquo;You yourselves have seen what I did to the Egyptians, and how I bore you on eagles&rsquo; wings and brought you to myself&hellip; you shall be to me a kingdom of priests and a holy nation&rdquo; (19:4&ndash;6). The covenant is built on what God has already done. Israel is not being asked to earn a relationship but to live out one that grace has already established.",
      "Then comes the heart of it: the Ten Commandments (chapter 20), the foundation of biblical ethics. They are structured in two movements &mdash; the first commandments governing love of God (no other gods, no idols, no misuse of his name, the keeping of the Sabbath), and the rest governing love of neighbor (honor parents, do not murder, commit adultery, steal, bear false witness, or covet). Jesus would later summarize the whole Law in exactly these two loves. The commandments are not arbitrary rules but the shape of a life rightly ordered toward God and others.",
      "The Book of the Covenant follows (chapters 21&ndash;23), a body of case law applying the principles of the commandments to the concrete realities of daily life &mdash; property, injury, servitude, justice for the vulnerable, honesty in court, care for the poor and the stranger and even one&rsquo;s enemy&rsquo;s wandering ox. Here the broad commands take on practical flesh, showing what holiness looks like in the ordinary disputes and duties of a community.",
      "The covenant is then formally ratified (chapter 24). Moses reads the law, the people answer, &ldquo;All that the LORD has spoken we will do, and we will be obedient,&rdquo; and the blood of sacrifice is sprinkled on the altar and on the people &mdash; &ldquo;the blood of the covenant&rdquo; (24:8), words Jesus will echo over the cup at the Last Supper. Then, astonishingly, the elders go up the mountain and &ldquo;beheld God, and ate and drank&rdquo; (24:11): the covenant is sealed in a shared meal in God&rsquo;s presence.",
      "The theological meaning of the Law is easily and often misunderstood. The Law is not a ladder by which Israel climbs up to God or earns its salvation. The crucial fact is one of order: Israel was already redeemed from Egypt before a single commandment was given. The Law comes to a people God has already saved. It is not the means of redemption but the way of life for the redeemed &mdash; grace precedes law, deliverance precedes obedience.",
      "This sets the pattern for the entire biblical understanding of obedience. Just as Israel was rescued first and instructed second, so the Christian is saved by grace and then called to a holy life &mdash; not in order to be loved, but because they already are. The commandments at Sinai are the loving instruction of a God who has bound himself to his people, teaching freed slaves how to live as the holy nation he has made them.",
    ],
  },
  {
    id: "The Golden Calf and the Tabernacle",
    heading: "The Golden Calf and the Tabernacle",
    reference: "Exodus 25&ndash;40",
    paragraphs: [
      "The final third of Exodus turns to the tabernacle &mdash; but the giving of its pattern is interrupted by catastrophe. While Moses is on the mountain receiving the design for the place where God will dwell, the people below grow restless and demand a god they can see. Aaron gathers their gold and fashions a golden calf, and they cry, &ldquo;These are your gods, O Israel, who brought you up out of the land of Egypt&rdquo; (32:4). At the very moment of covenant-making, the people break the covenant&rsquo;s first command.",
      "The idolatry of the golden calf (chapter 32) is the great crisis of the book. God&rsquo;s anger burns; he threatens to destroy the people and begin again with Moses. But Moses intercedes, standing in the breach and pleading God&rsquo;s own name and promises &mdash; even offering to be blotted out himself for the people&rsquo;s sake. Judgment falls, yet the people are not consumed. The episode reveals both the seriousness of sin and the depth of intercession, prefiguring the Mediator who would truly stand between God and a sinful people.",
      "In the aftermath, the covenant is renewed (chapter 34), and Moses asks to see God&rsquo;s glory. What God proclaims is the climax of the book&rsquo;s revelation of his character: &ldquo;The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (34:6). This becomes the most quoted self-description of God in the entire Old Testament, echoed again and again across the Psalms and Prophets. The God of Sinai is, at his core, a God of mercy.",
      "With the covenant restored, the narrative returns to the tabernacle, which dominates the closing chapters in lavish detail. The tabernacle is a portable sanctuary &mdash; a tent of meeting with its ark, its lampstand, its altar, its courts, all built precisely according to the heavenly pattern shown to Moses. The sheer space devoted to its construction signals its importance: this is the goal toward which the whole exodus has been moving.",
      "For the tabernacle exists for one purpose: that God might dwell in the midst of his people. The God who came down at the bush and on the mountain now comes to dwell among them permanently, at the center of the camp. The redemption begun in Egypt is not complete merely with freedom or even with law; it is complete when the holy God takes up residence with the people he has saved. Salvation reaches its goal in God&rsquo;s presence with his people.",
      "And so the book ends, in chapter 40, with the cloud covering the tent of meeting and &ldquo;the glory of the LORD&rdquo; filling the tabernacle &mdash; so completely that even Moses cannot enter. The arc that began with slaves groaning in Egypt ends with God dwelling in glory among his redeemed people. This is the destination of the entire story: not merely out of Egypt, but into the presence of God.",
      "The tabernacle ultimately anticipates the incarnation. John writes that &ldquo;the Word became flesh and dwelt among us&rdquo; (John 1:14) &mdash; and the verb he chooses literally means &ldquo;tabernacled,&rdquo; pitched his tent among us. What the tent of meeting foreshadowed, Christ fulfills: God dwelling with humanity in the flesh. And the Bible&rsquo;s final vision returns to the same promise made permanent &mdash; &ldquo;the dwelling place of God is with man&rdquo; &mdash; the goal of Exodus carried through to the end of all things.",
    ],
  },
];

const videoItems = [
  { videoId: "jH_aojNJM3E", title: "BibleProject — Book of Exodus Overview Part 1" },
  { videoId: "b9faymWdrKw", title: "BibleProject — Book of Exodus Overview Part 2" },
  { videoId: "I6sCpbpc6Pk", title: "The Passover and the Exodus Explained" },
];

export default function ChristianBookOfExodusGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE BOOK OF EXODUS
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of Exodus Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            The great Old Testament story of redemption &mdash; slavery and the call of Moses, the plagues and the Passover, the Red Sea, the Law at Sinai, the golden calf, and the tabernacle where God comes to dwell.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "28", border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;I have come down to deliver them.&rdquo; &mdash; Exodus 3:8
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ marginBottom: 4 }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: ACCENT, margin: "0 0 6px" }}>
                {currentSection.heading}
              </h2>
              <div
                style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: currentSection.reference }}
              />
            </div>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: "0 10px 10px 0",
                  padding: "1.25rem 1.5rem",
                  color: MUTED,
                  lineHeight: 1.78,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: ACCENT, marginBottom: 4 }}>Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}>
              Overviews and teaching on Exodus &mdash; the shape of the book in two parts, and the meaning of the Passover and the exodus from Egypt.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45, color: ACCENT, margin: 0 }}>{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            The Pattern of Redemption
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            Exodus gives the Bible its grammar of salvation: God hears the cry of the oppressed, redeems by the blood of the lamb, leads his people through the waters, gives his law to the already-rescued, and comes to dwell in their midst. Read it knowing that every movement points forward to Christ, our Passover, and to the God who tabernacles among us still.
          </p>
        </div>
      </main>
    </div>
  );
}
