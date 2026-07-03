"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "The Passover Lamb",
  "Blood on the Doorposts",
  "Night of Deliverance",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Exodus 12: The Night God Passed Over",
    reference: "Exodus 12:1&ndash;51",
    paragraphs: [
      "Exodus 12 is among the most consequential chapters in the entire Bible. It records the institution of the Passover &mdash; God&rsquo;s own appointed memorial of the night he struck every firstborn in Egypt and delivered Israel from four hundred and thirty years of slavery. No single event in the Old Testament shaped the identity, worship, and theology of Israel more profoundly than this night. Israel counted time from it, oriented its calendar around it, re-enacted it in every generation, and found in it a lens for understanding every subsequent act of divine redemption.",
      "The chapter opens with God speaking to Moses and Aaron before the final plague has even been announced: &ldquo;This month shall be for you the beginning of months. It shall be the first month of the year for you&rdquo; (v.2). The institution of the Passover begins with a reordering of time itself. Nisan &mdash; the month of deliverance &mdash; will become the first month of Israel&rsquo;s sacred calendar. Redemption does not merely save Israel out of Egypt; it reconstitutes the people around a new beginning, a new year, a new identity defined by the act of God that set them free.",
      "The instructions that follow are given with extraordinary precision: the selection of the lamb on the tenth day, its keeping until the fourteenth, the moment of slaughter at twilight, the application of its blood to doorposts and lintel, the manner of eating, the posture of the people, and the solemn prohibition of leaven. Nothing about the Passover is left to improvisation. God is establishing not merely a crisis-response but a &ldquo;statute forever throughout your generations&rdquo; (v.14) &mdash; a perpetual ordinance that would become the beating heart of Israel&rsquo;s liturgical year.",
      "The theological stakes of the chapter become fully visible only in the New Testament. When John the Baptist sees Jesus and declares &ldquo;Behold, the Lamb of God, who takes away the sin of the world&rdquo; (John 1:29), he is drawing on the entire weight of Passover imagery. When Paul writes &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (1 Cor 5:7), he is identifying the death of Jesus as the ultimate fulfillment of everything Exodus 12 anticipated. The blood on the doorposts, the unblemished lamb, the bones not broken, the hyssop used to apply the blood &mdash; every detail finds its correspondence in the passion of Jesus Christ.",
      "Exodus 12 is therefore not merely ancient history or a fascinating piece of religious anthropology. It is the Old Testament&rsquo;s deepest prefiguring of the gospel: that life comes through a substitutionary death, that the destroyer is turned away not by human merit but by blood, and that the God who &ldquo;passes over&rdquo; in judgment passes over in mercy where the appointed sign of redemption is found.",
    ],
  },
  {
    id: "The Passover Lamb",
    heading: "The Selection and Significance of the Lamb",
    reference: "Exodus 12:1&ndash;13",
    paragraphs: [
      "The instructions for the Passover lamb begin on the tenth day of Nisan. Each household in Israel is to select a lamb &mdash; or, if the household is too small, to share a lamb with a neighboring family, apportioning it &ldquo;according to what each can eat&rdquo; (v.4). The care with which God specifies the logistics of this meal is itself revealing: this is not a public spectacle but a family event, carried out household by household, every person of Israel participating personally in the redemption God is about to accomplish.",
      "The lamb itself must meet precise requirements. It is to be &ldquo;without blemish, a male a year old&rdquo; (v.5). It may be taken from the sheep or from the goats. The requirement of being without blemish &mdash; without defect or spot &mdash; is the foundational criterion for all Levitical sacrifice, and it points to the sinlessness of the One the Passover lamb ultimately prefigures. The animal kept by the household from the tenth to the fourteenth day was not merely a provision; it was a creature under close scrutiny, whose freedom from blemish was being confirmed before its death.",
      "The assembly of the whole congregation of Israel is to slaughter the lamb &ldquo;at twilight&rdquo; on the fourteenth day &mdash; literally, &ldquo;between the evenings&rdquo; in the Hebrew, the time as the sun descends toward the horizon (v.6). The simultaneous slaughter of thousands of lambs across a nation of perhaps two million people would have been an overwhelming act of corporate worship and commemoration. Every family&rsquo;s lamb dying at the same hour, in the same ritual posture, speaks of the unity of God&rsquo;s people in their common experience of redemption.",
      "The method of cooking carries its own significance. The lamb is to be roasted with fire &mdash; not boiled in water, not eaten raw (v.9). Fire in Scripture consistently carries connotations of divine judgment and purification. The lamb consumed by fire was bearing something; it was not merely being prepared as a meal but treated in a way that carried the weight of divine action. Roasting whole, with head, legs, and inner parts, preserves the integrity of the creature. Nothing is to be left until morning; whatever remains is to be burned (v.10).",
      "The meal accompanying the lamb is itself a rich symbolic package. Unleavened bread &mdash; bread made without yeast &mdash; accompanied the lamb because there was no time to let dough rise: the departure was imminent and the posture was one of urgency. Bitter herbs completed the plate, recalling the bitterness of the slavery from which they were being delivered. The people were to eat &ldquo;with your belt fastened, your sandals on your feet, and your staff in your hand. And you shall eat it in haste&rdquo; (v.11). The meal is not a leisurely feast; it is eaten in the posture of travelers already mid-departure, trusting that God is about to act.",
      "Then God speaks the meaning of it all: &ldquo;I will pass through the land of Egypt that night, and I will strike all the firstborn in the land of Egypt, both man and beast; and on all the gods of Egypt I will execute judgments: I am the Lord. The blood shall be a sign for you, on the houses where you are. And when I see the blood, I will pass over you, and no plague will befall you to destroy you, when I strike the land of Egypt&rdquo; (vv.12&ndash;13). The Passover is a divine act of judgment and discrimination: judgment on Egypt and its gods, mercy toward Israel &mdash; and the basis of that mercy is not Israel&rsquo;s righteousness but the blood of the lamb.",
    ],
  },
  {
    id: "Blood on the Doorposts",
    heading: "Blood on the Doorposts: Hyssop, Lintel, and the Sign of Life",
    reference: "Exodus 12:7&ndash;23",
    paragraphs: [
      "The application of the blood is the ritual heart of the Passover. After the lamb is slaughtered, the blood is to be taken and applied to &ldquo;the two doorposts and the lintel of the houses in which they eat it&rdquo; (v.7). The instrument used for this application, revealed in verse 22, is a bunch of hyssop dipped into the basin where the blood has been collected and then struck against the wood of the doorframe. The hyssop, a small bushy plant that grows in rocky terrain, becomes here one of the most significant plants in all of Scripture.",
      "Hyssop appears throughout the Old Testament in contexts of cleansing and purification. In Leviticus it is used in the purification rituals for those healed of skin disease; in Numbers it appears in the preparation of the water of purification from the red heifer. Psalm 51:7 uses it as the great metaphor for forgiveness: &ldquo;Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow.&rdquo; And in John 19:29, at the cross of Jesus, soldiers lifted a sponge soaked in sour wine on a branch of hyssop to his lips. The detail is not accidental: the hyssop that applied the Passover blood to Israel&rsquo;s doorposts reappears at the moment when Christ, the Passover lamb, gives up his spirit.",
      "The geometry of the blood application is also deliberate. Blood is struck on both doorposts and on the lintel &mdash; the sides and top of the doorframe &mdash; forming a threshold marked by death and redemption. Every Israelite who exits and enters through that doorway does so under the sign of the blood. The family inside is not protected by their own virtue or their ancestry or their obedience to the law (the law has not yet been given at Sinai). They are protected by the blood of the lamb applied to the structure that marks the boundary between their dwelling and the angel of death.",
      "Verse 13 makes the principle explicit: &ldquo;When I see the blood, I will pass over you.&rdquo; God does not say &ldquo;when I see your faith&rdquo; or &ldquo;when I see your repentance.&rdquo; The decisive thing is the blood. A household that trusted God&rsquo;s word and applied the blood was safe regardless of the spiritual condition of every individual inside. A household that neglected to apply it was exposed regardless of any other consideration. This is the principle of substitutionary atonement in its starkest Old Testament form: life for life, blood for blood, the lamb dying so that the firstborn lives.",
      "Verse 22 adds a sobering detail: &ldquo;None of you shall go out of the door of his house until the morning.&rdquo; The blood on the doorframe was the boundary between safety and destruction. Inside, under the sign of the lamb&rsquo;s blood, the people were secure. Outside, in the open streets of Egypt under the hand of the destroyer, no protection existed. The theological logic is clear: salvation is not merely a status assigned from a distance but a dwelling &mdash; a being-in-Christ that is the only shelter from divine judgment.",
      "The destroyer &mdash; identified in verse 23 as the one God will not permit to enter the blood-marked houses &mdash; is the agent of the final plague. The LORD is said to &ldquo;pass over&rdquo; the door and not allow the destroyer to enter. The Passover name itself preserves this memory: this is the night when God passed over his people in mercy while passing through Egypt in judgment. The blood was the dividing line between life and death, between Israel and Egypt, between those under God&rsquo;s protection and those under his wrath.",
    ],
  },
  {
    id: "Night of Deliverance",
    heading: "The Night of Judgment, Deliverance, and Exodus",
    reference: "Exodus 12:29&ndash;51",
    paragraphs: [
      "At midnight the Lord struck every firstborn in the land of Egypt, &ldquo;from the firstborn of Pharaoh who sat on his throne to the firstborn of the captive who was in the dungeon, and all the firstborn of the livestock&rdquo; (v.29). The comprehensiveness of the judgment is total: no rank, no status, no wealth, no innocence (the captive in the dungeon was no enemy of Israel) exempts any Egyptian household from the visitation of the destroyer. &ldquo;There was a great cry in Egypt, for there was not a house where someone was not dead&rdquo; (v.30).",
      "The contrast with the houses of Israel is the theological point. In every Israelite home, the firstborn lived. In every Egyptian home, the firstborn died. The only difference between the two &mdash; the only variable that explains the difference in outcome &mdash; is the blood of the lamb on the doorposts. This is the Passover in its essential logic: identical divine judgment, discriminated by the blood of the substitute.",
      "Pharaoh&rsquo;s response is immediate and total. He summons Moses and Aaron &ldquo;in the night&rdquo; and commands them: &ldquo;Up, go out from among my people, both you and the people of Israel; and go, serve the Lord, as you have said. Take your flocks and your herds, as you have said, and be gone, and bless me also!&rdquo; (vv.31&ndash;32). The king who had repeatedly hardened his heart and refused to let Israel go now drives them out in haste. Even in his final capitulation, Pharaoh&rsquo;s words reveal something of his character: &ldquo;bless me also&rdquo; &mdash; even now he is seeking a share in the blessing of the people he has oppressed for generations.",
      "The Egyptians press Israel to leave &ldquo;with haste&rdquo; because &ldquo;we shall all be dead&rdquo; (v.33). And as they go, Israel asks their Egyptian neighbors for silver and gold jewelry and clothing, and the Egyptians comply &ldquo;as the Lord had given the people favor in the sight of the Egyptians&rdquo; (v.36). Israel is said to have &ldquo;plundered the Egyptians&rdquo; (v.36). The language echoes God&rsquo;s promise to Abraham centuries earlier in Genesis 15:14: &ldquo;They shall come out with great possessions.&rdquo; The plunder of Egypt is not a moral irregularity; it is the fulfillment of ancient covenant promise, the wages of four hundred years of unpaid labor being settled in a single night.",
      "The Israelites journey from Rameses to Succoth &mdash; approximately six hundred thousand men on foot, besides women and children, along with a &ldquo;mixed multitude&rdquo; (v.38), non-Israelites who attached themselves to Israel in the Exodus. The mixed multitude is a detail of extraordinary significance: from the very beginning, the community of redemption was never ethnically monolithic. Those outside Israel who sheltered under the sign of the lamb were also delivered. The Passover lamb was slaughtered for the household, and the household of faith was open to any who would join themselves to the God of Israel.",
      "Verse 40 records the duration of the sojourn in Egypt: four hundred and thirty years to the day. The precision is remarkable and deliberate &mdash; God&rsquo;s promises operate on a schedule only he knows. The chapter closes with a restatement of the Passover regulations (vv.43&ndash;51), emphasizing that the statute is to be kept &ldquo;throughout your generations, as a statute forever&rdquo; (v.14, 17). Every year Israel would gather to re-enact this night &mdash; the lamb, the blood, the unleavened bread, the bitter herbs &mdash; confessing in the act of eating that they are a people who live by substitution, who exist because another died in their place. And in so doing they pointed forward across the centuries to the night when the Lamb of God would be sacrificed once for all, and the destroyer would have no claim on any who dwell in him.",
    ],
  },
];

const videoItems = [
  { videoId: "OjEVDKPH0So", title: "The Passover - Exodus 12 Explained" },
  { videoId: "2U0SZJT0Khc", title: "Blood on the Doorposts - The Night of Deliverance" },
  { videoId: "8KaIlvO5gj4", title: "Christ Our Passover Lamb - 1 Corinthians 5:7 and Exodus 12" },
  { videoId: "Yrv7S2rHGm0", title: "The Exodus - Israel Delivered from Egypt" },
];

const data: SectionGuideData = {
  accent: "#D97706",
  badge: `Old Testament Study`,
  title: `Exodus 12`,
  intro: `God&rsquo;s institution of the Passover &mdash; the selection of the unblemished lamb, blood on the doorposts applied with hyssop, the destroyer passing over, the midnight cry in Egypt, and four hundred and thirty years of slavery coming to an end in a single night. A chapter that prefigures the sacrifice of Christ in extraordinary detail.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Exodus 12 through video teaching on the Passover lamb, the blood on the doorposts, the night of judgment and deliverance, and Christ as our Passover sacrifice.`,
  calloutTitle: `Christ, Our Passover Lamb, Has Been Sacrificed`,
  calloutBody: `Exodus 12 is the Old Testament&rsquo;s most detailed portrait of what God was doing in the death of his Son. The unblemished lamb, the blood applied by hyssop, the bones not broken, the destroyer turned away &mdash; every thread is gathered up in the cross of Christ. &ldquo;For Christ, our Passover lamb, has been sacrificed. Let us therefore celebrate the festival, not with the old leaven of malice and evil, but with the unleavened bread of sincerity and truth&rdquo; (1 Cor 5:7&ndash;8).`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
