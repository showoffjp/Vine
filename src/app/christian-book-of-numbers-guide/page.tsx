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
  "The Census and the Camp",
  "Grumbling in the Wilderness",
  "The Twelve Spies",
  "Forty Years of Wandering",
  "The New Generation",
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
    id: "The Census and the Camp",
    heading: "The Census and the Camp",
    reference: "Numbers 1&ndash;10",
    paragraphs: [
      "The Book of Numbers takes its English name from the two great censuses it records, but its Hebrew title, &ldquo;In the Wilderness,&rdquo; better captures its theme. The book opens in the second year after the exodus, with Israel still encamped at the foot of Mount Sinai. The law has been given and the tabernacle erected; now God prepares his people to set out for the land he promised to Abraham. Numbers is the story of that journey &mdash; and of the long detour that human unbelief turned it into.",
      "The book begins with order and promise. At the Lord&rsquo;s command, Moses takes a census of all the men of Israel twenty years old and upward who are able to go to war, tribe by tribe. The count comes to 603,550 fighting men, a vast host that signals the fulfillment of God&rsquo;s pledge to make Abraham&rsquo;s descendants as numerous as the stars. Israel stands on the brink of becoming the great nation God had sworn to make of them.",
      "The Levites are numbered separately, for they are not counted among the soldiers but are set apart for the service of the tabernacle. They camp around the sanctuary, carry it on the march, and guard its holiness, so that no wrath may fall on the congregation. In their midst stand Aaron and his sons, the priests, with the whole tribe of Levi given to assist them in the ministry of the tent of meeting.",
      "The camp itself is arranged with striking symbolism. The tabernacle stands at the very center, and the twelve tribes are encamped around it in four divisions &mdash; three tribes to the east, three to the south, three to the west, and three to the north &mdash; each under its own banner. God dwells in the midst of his people, and all of Israel&rsquo;s life is ordered around his presence. When the camp marches, it marches in this same divine order, a holy nation arranged around the throne of God.",
      "Chapters 5 through 10 add further preparations: laws for purity in the camp, the Nazirite vow of special consecration, and the beautiful Aaronic blessing &mdash; &ldquo;The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you&rdquo; (6:24&ndash;25). The tribal leaders bring their offerings, the Levites are dedicated, the Passover is kept, and the silver trumpets are made to summon the congregation and to sound the march.",
      "Finally, in chapter 10, the cloud lifts from over the tabernacle and Israel sets out from Sinai for the first time, following the presence of God toward the Promised Land. &ldquo;Arise, O Lord, and let your enemies be scattered&rdquo; (10:35), Moses cries whenever the ark sets out. Everything is in order; the nation is numbered, sanctified, and arranged around its God. The journey of a few weeks to Canaan should now be swift and sure &mdash; and yet what follows will turn it into a wandering of forty years.",
    ],
  },
  {
    id: "Grumbling in the Wilderness",
    heading: "Grumbling in the Wilderness",
    reference: "Numbers 11&ndash;12",
    paragraphs: [
      "No sooner has Israel left Sinai than the mood of the book darkens. The carefully ordered camp, marching out behind the cloud of God&rsquo;s presence, almost immediately dissolves into complaint. Numbers becomes a sobering record of grumbling, rebellion, and the patience and judgment of God. The people who had been redeemed from Egypt with mighty signs now repeatedly long to go back, and their murmuring reveals hearts still enslaved by unbelief.",
      "The first outburst comes in chapter 11, when the people complain about their misfortunes &ldquo;in the hearing of the Lord,&rdquo; and his anger is kindled so that fire breaks out at the edge of the camp. Then a craving for meat sweeps through them; they weep for the fish, cucumbers, melons, leeks, onions, and garlic of Egypt and despise the manna God provides each day. &ldquo;Why did we come out of Egypt?&rdquo; they cry &mdash; as though slavery had been a paradise and freedom a curse.",
      "The burden of leading such a people crushes Moses, who pleads with God in despair, asking whether he must carry this whole nation alone like a nurse carrying a child. In mercy, God places his Spirit on seventy elders to share the load, and he sends quail in such abundance that the people gorge themselves. But even this provision becomes judgment: while the meat is still between their teeth, a plague strikes, and the place is named Kibroth-hattaavah, &ldquo;the graves of craving,&rdquo; for there they buried the people who had given in to their appetite.",
      "The grumbling spreads even to the heart of Israel&rsquo;s leadership. In chapter 12, Miriam and Aaron, Moses&rsquo;s own sister and brother, speak against him on account of his Cushite wife, but their real complaint is jealousy of his unique authority: &ldquo;Has the Lord indeed spoken only through Moses? Has he not spoken through us also?&rdquo; (12:2). The Lord hears it, and he descends in the pillar of cloud to defend his servant.",
      "God testifies that Moses is unlike any other prophet: with him the Lord speaks &ldquo;mouth to mouth, clearly, and not in riddles&rdquo; (12:8). Miriam is struck with leprosy, white as snow, and only the intercession of Moses &mdash; who cries, &ldquo;O God, please heal her&rdquo; &mdash; and her seven days shut outside the camp bring her restoration. The episode underscores the meekness of Moses, of whom it is said he was &ldquo;very meek, more than all people who were on the face of the earth&rdquo; (12:3), and the danger of presuming against those whom God has appointed.",
      "Through these chapters a tragic pattern emerges. God provides; the people complain; judgment falls; Moses intercedes; mercy is shown &mdash; and then the cycle begins again. The wilderness becomes a mirror, exposing the unbelief and ingratitude of the human heart even in the presence of daily miracles. The New Testament holds these accounts up as warnings: &ldquo;Do not grumble, as some of them did and were destroyed by the Destroyer&rdquo; (1 Corinthians 10:10).",
    ],
  },
  {
    id: "The Twelve Spies",
    heading: "The Twelve Spies",
    reference: "Numbers 13&ndash;14",
    paragraphs: [
      "The crisis of the entire book arrives in chapters 13 and 14, at the oasis of Kadesh-barnea on the very threshold of the Promised Land. At God&rsquo;s direction, Moses sends out twelve men, one leader from each tribe, to spy out the land of Canaan &mdash; to see whether it is good or bad, whether its cities are fortified, and whether the people are strong or weak. For forty days they explore the land, and they return carrying a single cluster of grapes so large it must be borne on a pole between two men.",
      "The spies agree on the facts: the land truly flows with milk and honey, and its fruit is magnificent. But ten of the twelve add a fatal word of fear. The people of the land are strong, they report, the cities are great and fortified up to heaven, and there are giants there, the descendants of Anak, beside whom &ldquo;we seemed to ourselves like grasshoppers, and so we seemed to them&rdquo; (13:33). They spread a bad report and conclude, &ldquo;We are not able to go up against the people, for they are stronger than we are.&rdquo;",
      "Only two of the spies, Caleb and Joshua, see the situation through the lens of faith. Caleb silences the people, saying, &ldquo;Let us go up at once and occupy it, for we are well able to overcome it&rdquo; (13:30). Joshua and Caleb together plead with the congregation: the land is exceedingly good, and if the Lord delights in us, he will bring us in. &ldquo;Do not fear the people of the land&hellip; their protection is removed from them, and the Lord is with us&rdquo; (14:9). The question was never the size of the giants but the greatness of God.",
      "But the congregation will not listen. That night the whole assembly raises its voice and weeps, and the people grumble against Moses and Aaron, longing once more for Egypt and even proposing to choose a new leader to take them back. They are ready to stone Caleb and Joshua. In unbelief they reject the very gift God is holding out to them, despising the good land and calling the God who redeemed them a liar.",
      "The Lord&rsquo;s anger blazes, and he threatens to disinherit the nation. Moses again intercedes, appealing not to Israel&rsquo;s worthiness but to God&rsquo;s glory and his own self-revealed character: &ldquo;The Lord is slow to anger and abounding in steadfast love, forgiving iniquity and transgression&rdquo; (14:18). God pardons the people from utter destruction &mdash; but the consequences of their unbelief still stand.",
      "The verdict is severe and exact. Because the spies searched the land for forty days, the people will wander in the wilderness for forty years, a year for each day, until that entire faithless generation falls dead in the desert. Not one of them who grumbled, from twenty years old and upward, will enter the land &mdash; except Caleb and Joshua, who followed the Lord wholly. The door to the Promised Land, standing wide open, swings shut for an entire generation.",
    ],
  },
  {
    id: "Forty Years of Wandering",
    heading: "Forty Years of Wandering",
    reference: "Numbers 16&ndash;25",
    paragraphs: [
      "With the sentence of forty years pronounced, the book enters its long middle stretch, a time of judgment and wandering in which a whole generation slowly passes away in the wilderness. These chapters are marked by further rebellions, by the failures of even the greatest leaders, and by glimpses of grace that keep the promise alive despite the people&rsquo;s sin. The wandering is not merely aimless drifting; it is the patient outworking of God&rsquo;s discipline.",
      "The most dramatic uprising is the rebellion of Korah, Dathan, and Abiram in chapter 16. Korah, a Levite, gathers two hundred and fifty leaders to challenge the authority of Moses and Aaron, claiming, &ldquo;All in the congregation are holy&hellip; why then do you exalt yourselves?&rdquo; The Lord answers decisively: the earth opens its mouth and swallows the rebels alive, and fire consumes the two hundred and fifty who offered incense. When the people grumble even at this, a plague breaks out, stopped only when Aaron runs into the midst of the congregation with his censer, standing between the living and the dead.",
      "To settle forever the question of who is appointed to serve, God causes Aaron&rsquo;s staff alone, among the staffs of all the tribes, to bud, blossom, and bear ripe almonds overnight (chapter 17). The miracle vindicates the priesthood and is kept as a sign against the rebels. Yet the lesson of submission to God&rsquo;s appointed order is one Israel learns slowly and at great cost.",
      "Even Moses and Aaron are not exempt from judgment. At the waters of Meribah (chapter 20), the people again quarrel for lack of water, and God tells Moses to speak to the rock. Instead, in anger, Moses strikes the rock twice and takes to himself credit that belongs to God: &ldquo;Shall we bring water for you out of this rock?&rdquo; Water gushes out, but the Lord declares that because Moses and Aaron did not uphold him as holy before the people, they too will not bring the assembly into the Promised Land. Aaron dies on Mount Hor, and his garments pass to his son Eleazar.",
      "Amid the journeying come moments of both judgment and mercy. When the people speak against God and Moses, fiery serpents are sent among them; but when Moses lifts up a bronze serpent on a pole, all who look upon it live &mdash; an image Jesus would later apply to himself: &ldquo;As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up&rdquo; (John 3:14). Israel also wins victories over kings who oppose them, Sihon of the Amorites and Og of Bashan, beginning to taste the conquest to come.",
      "Then comes the strange and memorable account of Balaam (chapters 22&ndash;24). Balak, king of Moab, terrified of Israel, hires the pagan seer Balaam to curse them. But God will not allow it; even Balaam&rsquo;s donkey sees the angel of the Lord and speaks, and three times Balaam opens his mouth to curse and instead pronounces blessing, declaring that no curse can prevail against the people God has blessed. Yet the section ends in tragedy at Peor (chapter 25), where Israel is seduced into idolatry and immorality with the women of Moab through Balaam&rsquo;s counsel, and a plague kills twenty-four thousand before the zeal of Phinehas turns away God&rsquo;s wrath.",
    ],
  },
  {
    id: "The New Generation",
    heading: "The New Generation",
    reference: "Numbers 26&ndash;36",
    paragraphs: [
      "As the forty years draw toward their close, the old faithless generation has died in the wilderness, and the book turns its face once more toward hope. A new census is taken in chapter 26, numbering the generation that has grown up in the desert &mdash; the people who will actually enter the land. It is a deliberate echo of the opening census, signaling a fresh start. Of all those counted in the first census, only Caleb and Joshua remain, just as the Lord had said.",
      "This new generation is given fresh laws and provisions for the life that awaits them in Canaan. The daughters of Zelophehad come before Moses with a question of inheritance, and God grants that they may receive their father&rsquo;s portion, establishing a principle of justice for families without sons. Joshua is publicly commissioned as Moses&rsquo;s successor, a man &ldquo;in whom is the Spirit&rdquo; (27:18), so that the congregation of the Lord will not be as sheep without a shepherd when Moses is gone.",
      "Chapters 28 through 30 set out the rhythm of offerings and feasts that will order the worship of the new nation in the land, along with laws concerning vows. These are not the regulations of a wandering camp but of a settled people preparing to take up a life of ordered devotion before God in the place he has given them. The very detail of these instructions breathes confidence that the promise will at last be kept.",
      "There is unfinished business as well. At God&rsquo;s command Israel takes vengeance on Midian for the seduction at Peor, and Balaam himself perishes in the battle. The tribes of Reuben and Gad, with half of Manasseh, ask to settle in the good pastureland east of the Jordan; Moses grants it on the condition that their fighting men cross over first and help their brothers conquer the land, so that no tribe shirks the common struggle. The journey&rsquo;s stages are then recounted from Egypt to the plains of Moab, a testimony to God&rsquo;s faithful leading through every camp.",
      "The closing chapters look directly to the inheritance. God lays out the boundaries of the Promised Land, appoints leaders to oversee its division among the tribes, and assigns cities to the Levites, including six cities of refuge where one who has killed accidentally may flee from the avenger of blood. The case of Zelophehad&rsquo;s daughters is settled so that no inheritance passes from tribe to tribe. Every provision assumes that the entrance into Canaan is now certain and near.",
      "And so Numbers ends not in the wilderness of despair but on the plains of Moab, by the Jordan, across from Jericho, with a new generation poised to enter the land their parents forfeited. The book stands as a lasting warning against unbelief and grumbling, for &ldquo;these things happened to them as an example, but they were written down for our instruction&rdquo; (1 Corinthians 10:11). Yet it is finally a book of hope: the God who is faithful when his people are faithless carries his promise across the desert, and the land of promise lies just over the river.",
    ],
  },
];

const videoItems = [
  { videoId: "tp5MIrMZFqo", title: "BibleProject - Overview - Numbers" },
  { videoId: "VA-_lyB9Gjk", title: "BibleProject - Overview - Exodus 19-40" },
  { videoId: "K0Yo1up6gqU", title: "BibleProject - The Way of the Exile - Holiness" },
  { videoId: "GswSg2ohqmA", title: "BibleProject - The Test Theme in the Bible" },
];

export default function ChristianBookOfNumbersGuidePage() {
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
            The Book of Numbers
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From Sinai to the plains of Moab &mdash; the ordering of Israel around God&rsquo;s presence, the repeated grumbling in the wilderness, the failure of the twelve spies at Kadesh-barnea, the forty years of wandering, the strange blessing of Balaam, and a new generation poised at last to enter the Promised Land.
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
              Deepen your study of Numbers through visual teaching on the ordering of the camp, the rebellions in the wilderness, the failure at Kadesh-barnea, and the new generation poised to enter the land.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Faithful When We Are Faithless</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Numbers is a sober warning against unbelief and grumbling &mdash; a whole generation forfeited the land they were given because they would not trust the God who redeemed them. Yet it is finally a book of hope, for the God who is faithful when his people are faithless carries his promise across the wilderness and brings a new generation to the very edge of the Promised Land.
          </p>
        </div>
      </main>
    </div>
  );
}
