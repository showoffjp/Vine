"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "God as Shield and Reward",
  "Counting the Stars",
  "Faith Credited as Righteousness",
  "The Covenant Ceremony",
  "The Promise of the Land",
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
    heading: "Overview of Genesis 15",
    reference: "Genesis 15:1&ndash;21",
    paragraphs: [
      "Genesis 15 is one of the most foundational chapters in the entire Bible &mdash; a chapter that defines the shape of biblical faith and establishes the covenant on which Israel&rsquo;s entire identity and the New Testament gospel are built. It records the night when God appeared to Abram in a vision, when Abram voiced his deepest fear and complaint, when God took him outside to count the stars, when faith was credited as righteousness, and when a ceremony of extraordinary strangeness sealed God&rsquo;s promise in a covenant that has no parallel in its one-sidedness: only God passes between the pieces.",
      "The chapter divides naturally into two scenes. The first (vv. 1&ndash;6) is a dialogue between Abram and God, characterized by remarkable honesty. God opens with a declaration that he is Abram&rsquo;s shield and great reward, and Abram responds with a complaint: what good is any reward if he has no heir? He has been promised descendants but is still childless, and his household slave Eliezer of Damascus will inherit everything. God&rsquo;s response is not rebuke but promise: not your servant but your own son will be your heir. Then comes the great invitation to step outside and count the stars.",
      "The second scene (vv. 7&ndash;21) is the covenant ceremony itself, one of the strangest and most awe-inspiring rituals in Scripture. Abram brings the animals God specifies, cuts them in half, and lays the pieces opposite each other. He waits, driving away vultures, until the sun goes down and a terrifying darkness falls. In that darkness God reveals the future: four hundred years of affliction in Egypt, a fourth-generation return to Canaan, the judgment of the oppressing nation, Abram&rsquo;s own peaceful death at a good old age. Then, in the darkness, a smoking firepot and a flaming torch pass between the pieces &mdash; God alone enacting what covenants require both parties to enact, binding himself by oath to give Abram the land.",
      "What makes Genesis 15 so theologically decisive is the combination of these two scenes. The first establishes that the covenant relationship begins with faith &mdash; Abram believes God, and this faith is credited as righteousness. The second establishes that the covenant&rsquo;s durability rests not on Abram&rsquo;s fidelity but on God&rsquo;s own oath. God enacts both sides of the covenant ceremony, passing between the pieces alone. This means that even if Abram and his descendants fail to walk in the covenant (as they will), the covenant itself cannot be broken because God has staked himself on it, not Abram.",
      "The New Testament returns to Genesis 15 repeatedly as the defining text for understanding justification by faith. Paul quotes Genesis 15:6 in both Romans 4 and Galatians 3, arguing that Abraham was declared righteous before circumcision, before the Law, before any works of obedience &mdash; through faith alone. James cites the same verse to show that genuine faith produces action. The writer of Hebrews points to God&rsquo;s oath in Genesis 15 as the anchor of Christian hope. Genesis 15 is not background to the gospel; it is the covenant architecture on which the gospel stands.",
    ],
  },
  {
    id: "God as Shield and Reward",
    heading: "God as Shield and Great Reward",
    reference: "Genesis 15:1",
    paragraphs: [
      "The chapter opens with a remarkable timing note: &ldquo;After these things the word of the Lord came to Abram in a vision.&rdquo; The &ldquo;things&rdquo; referred to are the events of Genesis 14 &mdash; Abram&rsquo;s daring rescue of Lot, his defeat of the four kings, and most significantly his refusal of the king of Sodom&rsquo;s offer of wealth. Abram had deliberately walked away from substantial material reward in order to make clear that the Lord, not the king of Sodom, was the one who made him rich. Now, immediately after this act of trust, God appears to him.",
      "God&rsquo;s opening words to Abram are a double declaration: &ldquo;Fear not, Abram, I am your shield; your reward shall be very great&rdquo; (15:1). The word &ldquo;shield&rdquo; (magen) is a military image &mdash; God as the one who deflects the blows of enemies, who protects his servant in the aftermath of the battle that had just been fought. After Abram had taken on the armies of four kings and rescued Lot, the natural human fear would be retaliation. God addresses that fear directly: do not be afraid; I am between you and your enemies.",
      "The word &ldquo;reward&rdquo; (sakar) takes on special significance in light of what Abram had just done. He had refused the reward offered by the king of Sodom, saying explicitly that he would not take so much as a sandal strap, lest anyone say that the king of Sodom had made Abram rich. Now God says: your reward is not the one Sodom offered and you refused &mdash; I myself am your reward. The word can also be translated &ldquo;I am your exceeding great reward,&rdquo; with God identifying himself as the substance of what he is promising rather than merely the one who delivers it.",
      "This self-identification of God as both shield and reward is the theological foundation for everything that follows in the chapter. Abram is not a man who needs more land or more children for their own sake; he is a man in relationship with the living God, and the covenant that is about to be enacted is the formalization of that relationship in binding, oath-confirmed, blood-ratified terms. The God who appeared as shield and reward will end the chapter as the one who has sworn to give Abram&rsquo;s descendants the land &mdash; because he is committed to being their God and to them being his people.",
      "The &ldquo;fear not&rdquo; with which God opens is also worth pausing over. It is a pastoral opening, not a juridical one. God is not beginning a legal transaction; he is addressing the emotional and spiritual state of his servant. Abram is afraid &mdash; of enemies, perhaps, or of the future, or of the passage of time without the promised heir. God meets him at the point of his fear before he meets him at the point of his faith. This is the consistent pattern of God&rsquo;s address to his servants throughout Scripture: the announcement of presence before the announcement of promise.",
    ],
  },
  {
    id: "Counting the Stars",
    heading: "Counting the Stars: So Shall Your Offspring Be",
    reference: "Genesis 15:2&ndash;5",
    paragraphs: [
      "Abram&rsquo;s response to God&rsquo;s opening declaration is one of the most honest prayers in the Bible. Rather than responding with gratitude or worship, he voices the complaint that has apparently been growing in him: &ldquo;O Lord God, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?&rdquo; (15:2). The word translated &ldquo;continue childless&rdquo; carries the sense of going without children, of walking through life in the barrenness of no heir. The complaint is not faithless; it is faithful enough to bring its confusion directly to God.",
      "The complaint has a specific theological urgency. God had promised Abram descendants as numerous as the dust of the earth (13:16). But time had passed, and Sarai was barren, and Abram&rsquo;s practical situation was that his slave would inherit everything. The gap between the promise and the reality was not a small one; it was the kind of gap that generates either despair or demand. Abram brings his demand &mdash; gently, respectfully, but unmistakably &mdash; to God: you said you would bless me, but this is what I see. How does your word account for what I see?",
      "God&rsquo;s response does not begin with an explanation but with a correction and then an invitation. The correction: &ldquo;This man shall not be your heir; your very own son shall be your heir&rdquo; (15:4). God is not revising his promise &mdash; he is clarifying it. Eliezer is not the fulfillment of what God said. A son from Abram&rsquo;s own body is what was meant. The promise has always been more specific than Abram may have realized, and God is now specifying it further in response to Abram&rsquo;s honest inquiry.",
      "Then comes the invitation that has become one of the most evocative images in all of Scripture. God takes Abram outside &mdash; out of the tent, into the night air, under the open sky of the ancient Near East, unpolluted by any artificial light &mdash; and says: &ldquo;Look toward heaven, and number the stars, if you are able to number them&rdquo; (15:5). The command to count is immediately undercut by its own impossibility. No human being can count the stars. The very attempt reveals the boundlessness of what God is promising. &ldquo;So shall your offspring be.&rdquo;",
      "The act of looking up at the stars is not merely pedagogical; it is an act of reorientation. Abram has been looking at his circumstances &mdash; at Sarai&rsquo;s barrenness, at his own advancing age, at the practical reality of Eliezer as the only available heir. God directs his gaze upward and outward, to a sky full of uncountable points of light, and says: that is the frame within which I am working. Your circumstances are not the limit of my promise. The stars that you cannot number are a closer approximation of what I intend than anything you are currently able to see from where you stand.",
    ],
  },
  {
    id: "Faith Credited as Righteousness",
    heading: "Faith Credited as Righteousness",
    reference: "Genesis 15:6",
    paragraphs: [
      "Verse 6 of Genesis 15 is perhaps the most theologically loaded single verse in the entire Old Testament: &ldquo;And he believed the Lord, and he counted it to him as righteousness.&rdquo; In eleven Hebrew words, this verse encapsulates the doctrine that the New Testament will unpack across multiple letters and that the Reformers will identify as the hinge on which the gospel turns. Abram has done nothing except believe what God said. And God, in response to that belief and that alone, credits him with righteousness.",
      "The word &ldquo;believed&rdquo; (aman, from which we get &ldquo;amen&rdquo;) means to rest one&rsquo;s weight on something, to lean on it, to find it dependable. Abram leaned his entire hope on the word God had just spoken about the stars. He could not see the fulfillment. He could not verify it by any observable evidence. Sarai was still barren; the years were still passing; the stars were still uncountable. The act of faith is precisely the act of treating God&rsquo;s word as more determinative of reality than anything that can be seen or counted.",
      "The word &ldquo;credited&rdquo; or &ldquo;counted&rdquo; (chashav) is an accounting term &mdash; the word used for entering something in a ledger, for reckoning something to an account. God enters into Abram&rsquo;s account not a payment Abram has earned but a standing Abram has received. Righteousness is credited, not achieved. This is the forensic dimension of the verse that Paul will later analyze: righteousness is &ldquo;reckoned&rdquo; or &ldquo;imputed&rdquo; to the believer on the basis of faith, in a transaction that runs precisely counter to the wage-and-work logic of ordinary human exchange.",
      "Paul&rsquo;s argument in Romans 4 pivots on the timing of this crediting. Abraham was not yet circumcised when Genesis 15:6 was written &mdash; circumcision comes in Genesis 17. He certainly had not received the Law of Moses, which would not be given for centuries. He had performed no works that could have earned the designation &ldquo;righteous.&rdquo; The righteousness is credited to faith alone, prior to every rite and every commandment that would later define the covenant community. This means, Paul argues, that the principle of justification by faith is not a novelty of the gospel but the original structure of the covenant from the very beginning.",
      "James&rsquo;s use of the same verse in James 2 is not a contradiction but a complementary perspective. James is asking what kind of faith justifies &mdash; the answer being a faith that is alive, that produces the action that Abraham later demonstrated when he was willing to offer Isaac. Genesis 15:6 establishes that faith justifies; the rest of Abraham&rsquo;s story demonstrates what justified faith looks like when it is genuine. The two apostolic readings of the same verse address different questions and reach conclusions that are, on careful examination, entirely compatible &mdash; and together they give a complete picture of the faith that Genesis 15 introduces.",
    ],
  },
  {
    id: "The Covenant Ceremony",
    heading: "The Covenant Ceremony: The Smoking Firepot and the Flaming Torch",
    reference: "Genesis 15:7&ndash;18",
    paragraphs: [
      "The second half of Genesis 15 is one of the most solemn and strange passages in the entire Bible. God reintroduces himself to Abram with a reminder of his saving act: &ldquo;I am the Lord who brought you out from Ur of the Chaldeans to give you this land to inherit&rdquo; (15:7). Abram responds with a question that is not doubt but a request for confirmation: &ldquo;O Lord God, how am I to know that I shall inherit it?&rdquo; (15:8). He is asking for a covenant &mdash; for the kind of binding, formal assurance that his ancient world knew how to perform.",
      "God instructs him to bring specific animals: a three-year-old heifer, a three-year-old female goat, a three-year-old ram, a turtledove, and a young pigeon. Abram brings them, cuts the larger animals in half, and lays each half over against the other, with the birds left whole. This is the ancient covenant ritual known as &ldquo;cutting a covenant&rdquo; (the Hebrew idiom for making a covenant is literally &ldquo;to cut a covenant&rdquo;). The parties to the covenant would walk between the divided pieces, enacting a self-maledictory oath: if I break this covenant, may what happened to these animals happen to me.",
      "Abram waits. He drives away the birds of prey that come to devour the carcasses &mdash; a detail that creates an eerie, watchful atmosphere of expectation. Then, as the sun goes down, a deep sleep falls on Abram, and with it a terrifying darkness. In this darkness, God speaks again, and what he says is striking for its candor: the promised future will not come easily or quickly. Abram&rsquo;s descendants will be sojourners in a land not their own for four hundred years, servants who are afflicted. Then God will judge their oppressors and bring them out with great possessions, and in the fourth generation they will return.",
      "God also tells Abram that he himself will go to his fathers in peace and will be buried at a good old age &mdash; a personal promise that stands apart from the national promise about his descendants. The delay in the fulfillment of the covenant is not a punishment but is connected to a remarkable theological statement: &ldquo;for the iniquity of the Amorites is not yet complete&rdquo; (15:16). God&rsquo;s timing in history is calibrated to the fullness of human sin; the Canaanites will not be dispossessed until their own wickedness has reached a point of ripeness for judgment. Providence operates at a scale that no human being can survey from within history.",
      "Then comes the covenant&rsquo;s consummation: &ldquo;When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces&rdquo; (15:17). The fire &mdash; elsewhere in the Pentateuch the symbol of God&rsquo;s own presence (the burning bush, the pillar of fire, the fire on Sinai) &mdash; passes between the pieces. God himself enacts the covenant ceremony. What is so theologically staggering is that Abram is not walking between the pieces. He is asleep, in a deep trance induced by God himself. The covenant being made here is unilateral: God alone passes between the pieces, God alone takes the oath, God alone stakes himself on the fulfillment of the promise. Even Abram&rsquo;s failure to walk in faithfulness cannot void what God has sworn in the darkness.",
    ],
  },
  {
    id: "The Promise of the Land",
    heading: "The Promise of the Land: The Boundaries of the Covenant",
    reference: "Genesis 15:18&ndash;21",
    paragraphs: [
      "The covenant ceremony ends with the most specific land promise in the entire Abraham narrative: &ldquo;On that day the Lord made a covenant with Abram, saying, &lsquo;To your offspring I give this land, from the river of Egypt to the great river, the river Euphrates&rsquo;&rdquo; (15:18). This sweeping description traces the greatest possible extent of the Promised Land, from the Nile watershed in the south to the Euphrates in the north and east. It is a vision of territory so vast that it was never fully occupied by Israel in any period of its history, pointing toward a fulfillment that remained future even after the conquest under Joshua.",
      "The ten nations listed in verses 19&ndash;21 as the current inhabitants of this land &mdash; the Kenites, the Kenizzites, the Kadmonites, the Hittites, the Perizzites, the Rephaim, the Amorites, the Canaanites, the Girgashites, and the Jebusites &mdash; are not obstacles to the promise but confirmation of its scope. The promise was made when others occupied the land. God commits himself to displacing not one or two but ten distinct peoples in order to give Abram&rsquo;s descendants what he has sworn to give. The specification of their names in the covenant document is itself a form of assurance: God has surveyed the land and its inhabitants, and the covenant is made with full awareness of what standing between the promise and its fulfillment.",
      "The land promise in Genesis 15 is inseparable from the people promise. The offspring who will inherit the land are the same offspring who will be as numerous as the stars, and the land that is promised is the place where this vast family will dwell with God as their God. Land and people and divine presence are the three interlocking components of the covenant that Genesis 15 formalizes. None of them is complete without the others: a people without a land is in exile; a land without the covenant people is just geography; and both are empty without the presence of the God who swore in the darkness.",
      "Christian interpretation of the land promise in Genesis 15 has moved in several directions. Some read the promise as awaiting a future literal fulfillment in the land of Israel. Others read it through the New Testament&rsquo;s recontextualization of the promise: Paul says in Romans 4:13 that Abraham was promised not merely the land of Canaan but &ldquo;that he would be heir of the world,&rdquo; suggesting that the land promise was always pointing beyond itself to a cosmic inheritance. The writer of Hebrews says Abraham was looking for a city with foundations, whose designer and builder is God &mdash; a heavenly homeland (Hebrews 11:10, 16). On either reading, Genesis 15 points toward a fullness of possession that has not yet been exhausted by any historical fulfillment.",
      "The covenant of Genesis 15 &mdash; sealed in darkness, ratified by divine fire, confirmed by the stars and the cut animals &mdash; is the theological foundation of Israel&rsquo;s national hope and the New Testament&rsquo;s understanding of the gospel. When Paul calls the believers in Galatia &ldquo;Abraham&rsquo;s offspring, heirs according to promise&rdquo; (Galatians 3:29), he is saying that all who belong to Christ are heirs of the covenant that God sealed by passing between the pieces in the darkness of Genesis 15. The smoking firepot and the flaming torch cast their light forward through the centuries and illuminate the cross, where God in Christ passed through death itself to secure for his people the inheritance he had always promised.",
    ],
  },
];

const videoItems = [
  { videoId: "Mn4pQrT7bXs", title: "Genesis 15 - God's Covenant with Abram Explained" },
  { videoId: "Lc8dWvY2nRq", title: "Counting the Stars - Faith in Genesis 15 Sermon" },
  { videoId: "Xp6vKmG4cTj", title: "The Smoking Firepot - Covenant Ceremony in Genesis 15" },
  { videoId: "Bq3nNhF5dKw", title: "Justified by Faith - Genesis 15:6 and the Gospel" },
];

export default function Genesis15GuidePage() {
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
            Genesis 15 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God appears to Abram in a vision as shield and great reward, takes him outside to count the stars, credits his faith as righteousness, and seals the covenant in darkness &mdash; passing alone between the pieces as a smoking firepot and a flaming torch while Abram sleeps, binding himself by oath to give the Promised Land to Abram&rsquo;s descendants.
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
              Deepen your study of Genesis 15 through these video teachings on God&rsquo;s covenant with Abram, the stars and the smoking firepot, the meaning of faith credited as righteousness, and the boundaries of the Promised Land.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Believed God, and It Was Credited to Him as Righteousness</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 15 is the covenant charter of biblical faith: God as shield and reward, a night under uncountable stars, faith credited as righteousness before circumcision and before the Law, and a covenant ceremony in which God alone passes between the pieces &mdash; staking himself on the promise so that not even human failure can void what he has sworn. The smoking firepot and the flaming torch cast their light all the way to the cross, where the promise finds its ultimate fulfillment in the one who is both the offspring of Abraham and the God who swore in the darkness.
          </p>
        </div>
      </main>
    </div>
  );
}
