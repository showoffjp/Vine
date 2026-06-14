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
  "Israel Under Midianite Oppression",
  "The Angel and Gideon",
  "Tear Down the Altar of Baal",
  "The Fleece Test",
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
    heading: "Overview of Judges 6",
    reference: "Judges 6:1&ndash;40",
    paragraphs: [
      "Judges 6 introduces one of the most beloved and most instructive figures in the Old Testament &mdash; Gideon, the son of Joash from the tribe of Manasseh, threshing wheat in a winepress because he is afraid of the Midianites. His story begins in fear and inadequacy and ends in an act of courageous obedience that earns him the nickname Jerubbaal &mdash; &ldquo;Let Baal contend against him&rdquo; &mdash; and positions him to be the instrument of Israel&rsquo;s deliverance. Judges 6 is the chapter in which God calls a man who does not feel called, and equips a man who does not feel equipped.",
      "The chapter opens with the familiar cycle of the book of Judges: &ldquo;The people of Israel did what was evil in the sight of the LORD, and the LORD gave them into the hand of Midian seven years&rdquo; (6:1). The pattern is relentless &mdash; apostasy, oppression, cry, deliverance, rest, apostasy again &mdash; and Judges 6 sets up yet another iteration of it. But the particular character of the Midianite oppression and the particular character of Gideon&rsquo;s calling give this installment a weight and vividness that have made it one of the most studied chapters in the Old Testament.",
      "The Midianites, together with the Amalekites and the people of the East, have reduced Israel to survival mode. They descend on the land at harvest time like locusts, destroying the produce and driving Israel into the hills to hide. The image of Gideon threshing wheat in a winepress captures the condition of the whole nation: doing what should be done in the open, out in the wind, now done in secret in a pit, to hide from the enemy. Israel has been reduced to a subsistence existence of concealment and fear.",
      "Into this situation the angel of the LORD appears &mdash; the same mysterious figure who appears elsewhere in the Old Testament in contexts of divine revelation and commission &mdash; and addresses Gideon with words that seem to fly in the face of reality: &ldquo;The LORD is with you, O mighty man of valor&rdquo; (6:12). Gideon&rsquo;s response is honest to the point of theological sharpness: if the LORD is with us, where are all his wonderful deeds? Why have we been abandoned to Midian? The question is not disrespectful; it is the question of a man who has not yet learned to read his circumstances through the lens of God&rsquo;s promise.",
      "The chapter&rsquo;s two major narrative movements &mdash; the call and commissioning of Gideon (vv. 1&ndash;27) and the tearing down of the altar of Baal (vv. 28&ndash;40) &mdash; are held together by the theme of divine presence in human weakness. Gideon is the least in his family; his clan is the weakest in Manasseh. These are not false modesty but accurate descriptions. God&rsquo;s choice of such an instrument makes the eventual deliverance unmistakably a work of divine power, not human capability. The fleece test at the chapter&rsquo;s end (vv. 36&ndash;40) shows Gideon still processing the reality of his calling, still needing confirmation &mdash; and God meeting him there with patient grace.",
      "The theological center of Judges 6 is the statement the LORD makes in response to Gideon&rsquo;s protest: &ldquo;But I will be with you, and you shall strike the Midianites as one man&rdquo; (6:16). It is the same assurance given to Moses at the burning bush (&ldquo;I will be with you&rdquo;; Exodus 3:12), to Joshua at the Jordan, to the patriarchs in their wanderings. The presence of God does not wait for human readiness; it is the grounds on which human readiness becomes possible. Judges 6 is ultimately a chapter about the God who is with the fearful, the inadequate, and the hiding &mdash; and who calls them out to something they cannot do without him.",
    ],
  },
  {
    id: "Israel Under Midianite Oppression",
    heading: "Israel Under Midianite Oppression",
    reference: "Judges 6:1&ndash;10",
    paragraphs: [
      "The description of Midianite oppression in the opening verses of Judges 6 is deliberately drawn to shock. For seven years, the Midianites, together with the Amalekites and &ldquo;the people of the East,&rdquo; have conducted annual raids that have systematically stripped Israel of its agricultural produce. &ldquo;For whenever Israel planted crops, the Midianites and the Amalekites and the people of the East would come up against them&rdquo; (6:3). They come like locusts in number, with their livestock and their tents, and they devour everything &mdash; produce, livestock, the sustaining wealth of an agricultural economy. Israel is left with nothing to eat.",
      "The social consequences of this sustained economic plunder are described with vivid specificity. Israel was &ldquo;brought very low because of Midian&rdquo; (6:6). The people are hiding in the dens, caves, and strongholds of the mountains (6:2) &mdash; not merely seeking military protection but abandoning the open fields where agriculture is done. A society driven into caves to survive is a society that has lost the basic ability to inhabit and cultivate its own land. The Midianites have not merely raided; they have broken Israel&rsquo;s will to farm, to build, to live openly in the land God gave them.",
      "The scale of the raiding coalition is also significant. The mention of Amalekites &mdash; the ancient enemy who attacked Israel in the wilderness &mdash; alongside the Midianites and the eastern peoples suggests a broad alliance of pastoral nomadic groups who have identified Israel&rsquo;s harvest season as the optimal time for plunder. They come &ldquo;with their livestock and their tents&rdquo; (6:5), establishing temporary encampments in the land to consume what Israel has grown before departing with whatever they can carry. It is organized, systematic extraction, not random raiding.",
      "Israel&rsquo;s response to the oppression is, at last, to cry out to the LORD (6:6). But before the LORD sends a deliverer, he sends a prophet. The unnamed prophet&rsquo;s message (vv. 8&ndash;10) is a recital of Israel&rsquo;s covenant history and a diagnosis of the present situation: &ldquo;I am the LORD your God; you shall not fear the gods of the Amorites in whose land you dwell. But you have not obeyed my voice&rdquo; (6:10). The oppression is not arbitrary; it is the consequence of the covenant breaking that the book of Judges has documented from its beginning. Israel cries out for deliverance, but the first response to their cry is not a warrior &mdash; it is a word of prophetic accountability.",
      "The unnamed prophet&rsquo;s appearance before Gideon is commissioned performs a crucial narrative function: it establishes that the LORD has heard Israel&rsquo;s cry and is not indifferent to their situation. It also establishes the theological framework for understanding both the oppression and the deliverance. The Midianites did not overpower Israel because they were stronger; they overran the land because God gave Israel into their hand as a consequence of apostasy. When God raises up a deliverer, it will not merely be a military reversal but a covenant renewal &mdash; the LORD acting on behalf of a people who have turned back to him.",
      "The contrast between Israel&rsquo;s condition in verses 1&ndash;10 and Gideon&rsquo;s condition in verse 11 &mdash; hiding, threshing in secret, fearful of discovery &mdash; shows that the oppression has penetrated to the individual level. Gideon is not a soldier; he is a farmer doing the most basic agricultural work in a place designed for something else entirely (a winepress is a pit or trough, not a threshing floor). The indignity of his situation &mdash; threshing wheat in a hole to hide it from enemies &mdash; is a microcosm of Israel&rsquo;s larger condition. The man God is about to call is living the problem he is being called to solve.",
    ],
  },
  {
    id: "The Angel and Gideon",
    heading: "The Angel and Gideon",
    reference: "Judges 6:11&ndash;27",
    paragraphs: [
      "The appearance of the angel of the LORD at the oak in Ophrah is one of the great theophanic encounters of the Old Testament. Like the burning bush, like Jacob at the Jabbok, like the call of Isaiah in the Temple, the encounter with Gideon follows a recognizable pattern: divine appearance, human fear and inadequacy, divine commission, divine assurance, sign. But what gives this encounter its distinctive texture is the sustained back-and-forth between the heavenly messenger and a man who is genuinely, honestly skeptical about both his calling and the claims that have just been made about God&rsquo;s presence.",
      "&ldquo;The LORD is with you, O mighty man of valor&rdquo; (6:12). These opening words of the angel are simultaneously a greeting, a declaration, and an address. The title &ldquo;mighty man of valor&rdquo; (gibbor chayil) is the title of a warrior, a man of strength and standing. Applied to a man hiding in a winepress, it is either ironic or prophetic &mdash; and in this case it is prophetic. God addresses Gideon not as he currently is but as he will be when God&rsquo;s call has done its work. The greeting speaks the future into the present.",
      "Gideon&rsquo;s response is an extended question: &ldquo;Please, my lord, if the LORD is with us, why then has all this happened to us? And where are all his wonderful deeds that our fathers recounted to us, saying, &lsquo;Did not the LORD bring us up from Egypt?&rsquo; But now the LORD has forsaken us and given us into the hand of Midian&rdquo; (6:13). The question is theologically serious. Gideon has absorbed the tradition of the Exodus &mdash; he knows that God acted in the past &mdash; but he cannot reconcile that tradition with the present reality of oppression, poverty, and fear. His question is not unbelief but the honest tension between inherited theology and lived experience.",
      "The LORD&rsquo;s response does not answer Gideon&rsquo;s question; it redirects it. &ldquo;Go in this might of yours and save Israel from the hand of Midian; do not I send you?&rdquo; (6:14). The &ldquo;might&rdquo; referred to is not Gideon&rsquo;s own strength but the strength that comes from being sent by the LORD &mdash; the authority and power of divine commission. Gideon protests: &ldquo;Please, LORD, how can I save Israel? Behold, my clan is the weakest in Manasseh, and I am the least in my father&rsquo;s house&rdquo; (6:15). The protest follows a pattern established by Moses and Isaiah and Jeremiah: the called one protests inadequacy, and God responds with promise of presence.",
      "&ldquo;But I will be with you, and you shall strike the Midianites as one man&rdquo; (6:16). The assurance is absolute and specific. God does not argue with Gideon&rsquo;s self-assessment; he does not say &ldquo;you are actually stronger than you think.&rdquo; He says: I will be with you. The adequacy for the task is not located in the servant but in the LORD who sends him. Gideon asks for a sign, and prepares an offering &mdash; a young goat and unleavened bread &mdash; which the angel instructs him to place on a rock and pour the broth over it. The angel touches the offering with his staff and fire springs up from the rock, consuming the flesh and the bread. Then the angel of the LORD vanishes.",
      "Gideon&rsquo;s reaction to the vanishing of the angel is terror: &ldquo;Alas, O Lord GOD! For now I have seen the angel of the LORD face to face&rdquo; (6:22). He fears he will die &mdash; the widespread ancient belief that no human being could see God and live. The LORD speaks again: &ldquo;Peace be to you. Do not fear; you shall not die&rdquo; (6:23). Gideon builds an altar there and calls it &ldquo;The LORD Is Peace&rdquo; (Yahweh-Shalom). The altar&rsquo;s name is his first act of faith after the encounter &mdash; a declaration not merely of present emotional comfort but of theological conviction: the God who has just commissioned him is a God of peace, and peace is what he will bring to terrorized Israel.",
    ],
  },
  {
    id: "Tear Down the Altar of Baal",
    heading: "Tear Down the Altar of Baal",
    reference: "Judges 6:25&ndash;32",
    paragraphs: [
      "The first task the LORD assigns to Gideon is not military but religious &mdash; and it takes place not in the enemy&rsquo;s camp but in his own family&rsquo;s backyard. &ldquo;That night the LORD said to him, &lsquo;Take your father&rsquo;s bull, the second bull seven years old, and pull down the altar of Baal that your father has, and cut down the Asherah that is beside it&rsquo;&rdquo; (6:25). The instruction is precise: the bull to be used is seven years old, the same number of years Israel has been under Midianite oppression. The offering of that specific animal becomes a sign that the years of oppression are over.",
      "The altar of Baal that Gideon is commanded to tear down belongs to his own father, Joash. This is the most uncomfortable dimension of the commission. Gideon is not being sent to attack a pagan temple in a foreign city; he is being commanded to demolish the family altar, the religious installation that his father has maintained and around which the men of the city have gathered for worship. The call to tear down the idol begins at home. The reformation of Israel starts not with a march on Midian but with the dismantling of the Baal worship that has taken root in Gideon&rsquo;s own household.",
      "In place of the altar of Baal, Gideon is to build &ldquo;an altar to the LORD your God on the top of the stronghold here, with stones laid in due order&rdquo; (6:26). He is to take the Asherah that he has cut down and use it as wood for the burnt offering. The Asherah pole &mdash; a wooden symbol of the Canaanite goddess &mdash; becomes fuel for the fire on which a sacrifice to the true God is offered. The instruments of false worship are repurposed for true worship. The topography also matters: the altar is to be built on the stronghold, the high point of the town, in public visibility, replacing the public altar of Baal that occupied a prominent position.",
      "Gideon does what he is commanded, but he does it at night &mdash; &ldquo;because he was too afraid of his family and the men of the town to do it by day&rdquo; (6:27). This detail is preserved without editorial condemnation; it is simply what happened. Gideon obeys, but he obeys in fear rather than in fearless confidence. The act of obedience is real even if the manner of it is cautious. The narrator seems to understand that faithfulness does not always come wrapped in boldness &mdash; sometimes it comes in the dark, quietly, when no one is watching, precisely because what is being done is too important not to do and too threatening to do in the open.",
      "The morning reveals what has been done, and the men of the town want blood. They demand that Joash hand over his son for execution: &ldquo;Bring out your son, that he may die, for he has broken down the altar of Baal and cut down the Asherah beside it&rdquo; (6:30). Joash&rsquo;s response is remarkable &mdash; a moment of unexpected clarity from the man who built the altar being defended: &ldquo;Will you contend for Baal? Or will you save him? Whoever contends for him shall be put to death by morning. If he is a god, let him contend for himself, because his altar has been broken down&rdquo; (6:31). If Baal is truly a god, he can deal with the man who broke his altar. The fact that Baal cannot defend his own altar is, implicitly, evidence that Baal is not a god.",
      "Gideon receives the name Jerubbaal on that day &mdash; &ldquo;Let Baal contend against him&rdquo; &mdash; because he has broken down Baal&rsquo;s altar. It is a name that follows him through the rest of the Judges narrative and beyond. The name is a standing taunt to Baal: here is the man who destroyed your altar; what are you going to do about it? That Baal does nothing confirms what Joash said &mdash; either Baal is not a god or he is too weak to contend. Either way, Gideon stands, and Baal does not defend himself. The tearing down of the altar is the beginning of Israel&rsquo;s liberation, not merely from Midian but from the idolatry that had made Midian possible.",
    ],
  },
  {
    id: "The Fleece Test",
    heading: "The Fleece Test",
    reference: "Judges 6:33&ndash;40",
    paragraphs: [
      "By the time of the fleece test (vv. 36&ndash;40), significant things have already happened. The Spirit of the LORD has clothed Gideon, who has blown the trumpet and called Manasseh, Asher, Zebulun, and Naphtali to war, and thirty-two thousand men have responded (a number that will be drastically reduced in the famous episode of chapter 7). Gideon is now standing at the head of a real army facing a real enemy. He has obeyed the LORD in tearing down the altar of Baal. He has built a new altar, Yahweh-Shalom. He has been clothed by the Spirit. Everything visible points to his being the right man at the right moment. And yet he asks for a sign.",
      "&ldquo;Then Gideon said to God, &lsquo;If you will save Israel by my hand, as you have said, behold, I am laying a fleece of wool on the threshing floor. If there is dew on the fleece alone, and it is dry on all the ground, then I shall know that you will save Israel by my hand, as you have said&rsquo;&rdquo; (6:36&ndash;37). The request is specific: one night, wet fleece on dry ground. The next morning, Gideon wrings out the fleece &mdash; a bowl full of water &mdash; while the ground around it is dry. The sign is exactly as requested.",
      "But then Gideon asks for the sign in reverse: dry fleece on wet ground. &ldquo;Do not let your anger burn against me; let me speak just once more. Please let me test just once more with the fleece. Please let it be dry on the fleece only, and on all the ground let there be dew&rdquo; (6:39). The apologetic framing of the request &mdash; &ldquo;do not let your anger burn against me&rdquo; &mdash; reveals that Gideon knows he is pushing the limits of propriety. He is not testing God out of disbelief but out of a deep need for certainty before he leads thousands of men into battle. The second sign is granted: dry fleece, dew on all the ground.",
      "The fleece test raises questions that interpreters have wrestled with across the centuries: Is this a model of faith or a failure of faith? Is asking for signs appropriate, or does it reflect insufficient trust in God&rsquo;s word? The New Testament is more cautious about sign-seeking than the Old Testament is &mdash; Jesus rebukes the generation that seeks signs (Matthew 16:4) &mdash; and the fleece test is probably not presented as a paradigm for Christian decision-making. But neither does the narrative condemn Gideon for asking. God answers both requests with patient generosity, meeting Gideon where he is rather than where he should be.",
      "What the fleece test does reveal is the character of God&rsquo;s dealings with his servants in the Old Testament period. God is not irritated by Gideon&rsquo;s request for confirmation; he is not angry that his word has not been accepted without sign. He accommodates himself to the weakness of the man he has called, providing the certainty that Gideon needs to take the next step. This accommodation is a feature of God&rsquo;s pastoral care of his servants throughout Scripture &mdash; from the covenant signs God gives to Abraham, to the rainbow given to Noah, to the sign of Immanuel given to Ahaz (even when Ahaz pretends not to want it). God condescends to human weakness in the interest of getting his work done.",
      "The two fleece signs together &mdash; wet on dry, then dry on wet &mdash; constitute a double confirmation that is structurally similar to the double witness required in Israel&rsquo;s legal system (Deuteronomy 19:15: &ldquo;A matter shall be established by the evidence of two or three witnesses&rdquo;). Gideon is not being unreasonably demanding; he is applying the epistemological standard of his own legal tradition to the most consequential decision of his life. And God honors the request. By the end of Judges 6, Gideon has been called, commissioned, equipped with the Spirit, named by God&rsquo;s enemies, and doubly confirmed. The stage is set for what chapter 7 will accomplish through three hundred men with torches and jars.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Judges 6 Today",
    reference: "Judges 6 &mdash; For the Life of the Church",
    paragraphs: [
      "The call of Gideon in Judges 6 is one of the most humanly relatable divine callings in the entire Bible. Moses at the burning bush, Isaiah in the Temple, Jeremiah receiving his commission &mdash; these are all figures whose callings involve profound inadequacy and resistance. But Gideon&rsquo;s inadequacy is not primarily moral (like Isaiah&rsquo;s confession of unclean lips) or vocational (like Jeremiah&rsquo;s claim that he does not know how to speak) &mdash; it is social and circumstantial. He belongs to the weakest clan in the weakest tribe; he is the least significant member of an already insignificant family; he is hiding in a winepress when God finds him. This is the person God calls a &ldquo;mighty man of valor.&rdquo;",
      "The church in every age will find people in conditions analogous to Gideon&rsquo;s &mdash; people who have been reduced by circumstance, who are doing what needs to be done in secret and in fear, who have absorbed the tradition of God&rsquo;s past acts and cannot reconcile it with their present experience of apparent abandonment. The address to Gideon &mdash; &ldquo;The LORD is with you, O mighty man of valor&rdquo; &mdash; is the address of the gospel to every person whom God calls out of hiding into the vocation of his or her life. God addresses his servants not as they are but as they will be when his presence has done its transforming work.",
      "The sequence of events in Judges 6 establishes a pattern that runs throughout the Gideon narrative and beyond: the call comes before the qualification is evident; the commission precedes the capacity; the name &ldquo;mighty man of valor&rdquo; is given before Gideon has done anything valorous. This is the pattern of grace &mdash; God declares what he intends before it exists, and then brings it into being through the act of his own faithfulness. Paul&rsquo;s language in Romans 4:17 is directly applicable: God &ldquo;calls into existence the things that do not exist.&rdquo; The Gideon who will defeat Midian with three hundred men does not yet exist in Judges 6; God is calling him into existence by addressing him as a mighty man of valor.",
      "The command to tear down the altar of Baal in his own family&rsquo;s backyard is a perennial challenge to every generation of the church. The idols that most threaten the people of God are rarely found only in foreign territories; they are found in the households and communities and religious establishments of God&rsquo;s own people. The reform that God calls for begins not with the Midianites but with the Baal altar at home. The contemporary application is not difficult to draw: before the church can be an instrument of liberation in the wider world, it must deal with the false gods it has erected within its own life &mdash; the idols of comfort, status, ethnicity, political power, and institutional self-preservation that have displaced the worship of the living God.",
      "Gideon&rsquo;s obedience at night is a small but important detail for those who feel called to costly obedience in contexts where that obedience will be opposed. He did what God commanded; he did it in the dark because he was afraid; and God honored the obedience. The manner of Gideon&rsquo;s obedience was imperfect &mdash; fear rather than boldness, night rather than day &mdash; but the act itself was real. There is a pastoral encouragement here for believers who feel that their obedience is tainted by the fear that accompanies it: God uses what we actually do, not only what we would do if we were braver.",
      "The fleece test, finally, is often invoked as a model for seeking God&rsquo;s guidance &mdash; asking God for a specific sign to confirm a decision. The New Testament framework for guidance is not primarily sign-based; Paul speaks of being &ldquo;transformed by the renewal of your mind&rdquo; (Romans 12:2) rather than of fleece tests. But the fleece narrative does establish something important: God is not threatened by honest uncertainty, and he is patient with the servant who needs more confirmation than has already been given. The God who answered Gideon&rsquo;s double request is the God who does not snuff out the smoldering wick or break the bruised reed. His patience with Gideon&rsquo;s halting faith is a picture of the grace that meets us in our weakness and carries us forward into the calling we cannot yet fully see.",
    ],
  },
];

const videoItems = [
  { videoId: "kOYy8iCfIJ4", title: "BibleProject - Overview of Judges" },
  { videoId: "pXGbMSLMnwk", title: "Gideon and the Midianites - Judges 6-8 Explained" },
  { videoId: "o9sgtaGb6OE", title: "The Story of Gideon - Bible Study" },
  { videoId: "TToQBFdFRGw", title: "Judges 6 - The Call of Gideon" },
];

export default function Judges6GuidePage() {
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
            Judges 6 &mdash; The Call of Gideon
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Israel does evil and God gives them into Midian&rsquo;s hand for seven years. The angel of the LORD appears to Gideon threshing wheat in a winepress &mdash; hiding from the enemy &mdash; and says: &ldquo;The LORD is with you, O mighty man of valor.&rdquo; Gideon tears down the altar of Baal, earns the name Jerubbaal, and asks God to confirm his calling through the fleece test.
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
              Deepen your study of Judges 6 through these video teachings on the Midianite oppression, the call of Gideon, the tearing down of the altar of Baal, and the fleece test.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD Is with You, O Mighty Man of Valor</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Judges 6 is the story of a God who finds his servants in their hiding places and calls them out by a name they do not yet deserve. Gideon&rsquo;s clan is weakest; he is the least in his family; he is threshing wheat in a winepress. And yet: &ldquo;The LORD is with you, O mighty man of valor.&rdquo; God&rsquo;s presence is not a supplement to human adequacy &mdash; it is the ground on which human inadequacy is transformed into the instrument of divine deliverance.
          </p>
        </div>
      </main>
    </div>
  );
}
