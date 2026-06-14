"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Judgment on Jerusalem",
  "The Humble Remnant",
  "The Mighty Warrior",
  "Rejoicing Over You with Singing",
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
    heading: "Overview of Zephaniah 3",
    reference: "Zephaniah 3:1&ndash;20",
    paragraphs: [
      "Zephaniah 3 is the culmination of one of the most relentlessly severe prophetic books in the Old Testament. The Book of Zephaniah opens with a declaration of comprehensive judgment that makes even Isaiah&rsquo;s most thunderous passages seem measured by comparison: the LORD will sweep away everything from the face of the earth &mdash; man and beast, birds and fish (1:2&ndash;3). The Day of the LORD that Zephaniah describes in chapter 1 is a day of wrath, distress, anguish, ruin, devastation, darkness, and gloom. Nations and cities are condemned in chapter 2. And then chapter 3 arrives, and the movement of the book performs a kind of theological miracle: out of the ruins of judgment, extraordinary promises of salvation emerge.",
      "The chapter divides naturally into two unequal halves. The first half (verses 1&ndash;13) continues and deepens the indictment of Jerusalem and the nations, then pivots to the promise of a purified remnant. The second half (verses 14&ndash;20) is a song of salvation and joy that many scholars regard as one of the most beautiful passages in the entire prophetic literature. Its centerpiece is verse 17: &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.&rdquo; This single verse has become one of the most quoted and preached promises in all of Scripture.",
      "The theological movement of Zephaniah 3 &mdash; from indictment to promise, from judgment to salvation, from shame to exultation &mdash; is the movement of the gospel in miniature. God does not ignore or minimize the rebellion and corruption that characterize Jerusalem&rsquo;s leadership. He names it precisely and warns of its consequences. But the final word is not condemnation; it is the image of a God who cannot contain his joy over the people he has saved, who breaks into song over the remnant he has gathered. This movement from wrath to singing is the shape of biblical hope.",
      "Zephaniah prophesied in the reign of King Josiah (640&ndash;609 BC), the great reforming king of Judah who rediscovered the Book of the Law and led the most thoroughgoing religious reform in the nation&rsquo;s history. The prophecy likely predates or accompanies the early stages of that reform, when the deep corruption of the Manasseh era still pervaded Judah&rsquo;s religious and civic life. The pride, injustice, and syncretism that Zephaniah attacks were the fruits of a long period in which the worship of Baal, Molech, and the host of heaven had been officially sponsored. His condemnation of &ldquo;the officials, the judges, the priests, and the prophets&rdquo; (3:3&ndash;4) maps directly onto this historical context.",
      "The chapter&rsquo;s ultimate subject is not Jerusalem&rsquo;s sin, which is merely the foil, but the LORD himself &mdash; his character, his purposes, and his undefeatable determination to save. Three great assertions about God structure the chapter&rsquo;s second half: the LORD is in the midst of his people (v. 15), the LORD is a Mighty Warrior who saves (v. 17), and the LORD rejoices and sings over his people (v. 17). These are not abstractions; they are the declarations of a God who has committed himself irrevocably to a people who could not save themselves.",
    ],
  },
  {
    id: "Judgment on Jerusalem",
    heading: "Judgment on Jerusalem &mdash; The Rebellious City",
    reference: "Zephaniah 3:1&ndash;8",
    paragraphs: [
      "Zephaniah 3 opens with a cry of woe that is almost unique in its layered accusation: &ldquo;Woe to her who is rebellious and defiled, the oppressing city!&rdquo; (3:1). Though the city is not immediately named, the context makes clear that this is Jerusalem &mdash; a breathtaking indictment of the city that bore the name of God, housed his Temple, and was charged with being the center of his covenant purposes. The woe oracle typically preceded a death announcement in the ancient world, and its application here to the holy city carries the full force of prophetic daring. The prophet is not attacking a pagan nation; he is pronouncing judgment on his own community.",
      "Three charges are laid against the rebellious city in verse 2: she listened to no voice, she accepted no correction, she did not trust in the LORD, she did not draw near to her God. The fourfold structure is deliberate. The first two charges (not listening, not accepting correction) speak to her relationship to God&rsquo;s word and its human mediators &mdash; the prophets, the priests, the warnings and rebukes that had been addressed to her over generations. The second two charges (not trusting, not drawing near) go deeper, to the condition of the heart. Jerusalem&rsquo;s failure was not merely disobedience; it was a fundamental rupture of the personal relationship with the LORD that was the foundation of the covenant.",
      "The specific leaders of the city are then indicted in terms drawn from the natural world: &ldquo;Her officials within her are roaring lions; her judges are evening wolves that leave nothing till the morning. Her prophets are fickle, treacherous men; her priests have profaned what is holy; they have done violence to the law&rdquo; (3:3&ndash;4). The officials and judges are predators &mdash; the lion who tears and the evening wolf who hunts in darkness. The prophets are characterized by their unreliability and treachery; the priests, whose task was to guard the holy and teach the Torah, have instead profaned the sacred and violated the very law they were charged to uphold. Every order of leadership has failed.",
      "The contrast in verse 5 is devastating in its quiet simplicity: &ldquo;The LORD within her is righteous; he does no injustice; every morning he shows forth his justice; each dawn he does not fail; but the unjust knows no shame.&rdquo; While the city&rsquo;s leaders devour and profane, the LORD who dwells in their midst is morning by morning displaying his righteousness, holding out his justice like a lamp, refusing to fail. The contrast is between the God who is faithful and the people who have refused his faithfulness. The tragedy is not that God has been absent; it is that he has been present, patient, and persistently just, while the city&rsquo;s leadership has simply refused to look.",
      "God then rehearses the object lessons he has given to Jerusalem through the fates of other nations. He has cut off nations, made their corners desolate, destroyed their streets &mdash; all in the hope that Jerusalem would fear and accept correction (3:6&ndash;7). But the response has been exactly the opposite: &ldquo;They were the more eager to make all their deeds corrupt&rdquo; (3:7). History&rsquo;s warnings, which should have produced humility and repentance, instead produced an acceleration of corruption. The people looked at the judgment of the nations and concluded that they were exempt rather than warned.",
      "The first half of the chapter closes with an arresting word about the LORD&rsquo;s patient waiting and decisive action: &ldquo;Therefore wait for me, declares the LORD, for the day when I rise up to seize the prey. For my decision is to gather nations, to assemble kingdoms, to pour out upon them my indignation, all my burning anger; for in the fire of my jealousy all the earth shall be consumed&rdquo; (3:8). The tone here is not of a God who has been surprised or defeated; it is of a God who has been patiently waiting for his appointed moment. The &ldquo;jealousy&rdquo; of the LORD is his fierce, exclusive commitment to his own covenant purposes and his own people&rsquo;s welfare. When he acts, no power on earth can withstand it.",
    ],
  },
  {
    id: "The Humble Remnant",
    heading: "The Humble Remnant &mdash; A People Left in the Midst",
    reference: "Zephaniah 3:9&ndash;13",
    paragraphs: [
      "The pivot from judgment to promise in Zephaniah 3:9 is one of the most striking theological transitions in prophetic literature. Without any break in the literary flow, without any intervening human action or confession, the LORD announces what he will do &ldquo;at that time&rdquo; &mdash; the time of his decisive intervention: &ldquo;For at that time I will change the speech of the peoples to a pure speech, that all of them may call upon the name of the LORD and serve him with one accord&rdquo; (3:9). The reversal of the Tower of Babel is implied: the confusion of languages that scattered humanity is now reversed as God gives a pure language that enables unified worship. The nations that were gathered for judgment are now gathered for worship.",
      "The promise of a &ldquo;pure speech&rdquo; (literally &ldquo;a pure lip&rdquo; in Hebrew) connects to the great tradition in which corrupted speech represents a corrupted people. Isaiah&rsquo;s lips were unclean and needed the coal from the altar (Isaiah 6:5&ndash;7). Zephaniah&rsquo;s own name means &ldquo;the LORD has hidden,&rdquo; and the call to humble &ldquo;seekers&rdquo; in chapter 2:3 was a call to the hidden remnant. Now God promises to purify the very organ of worship and witness &mdash; the lips &mdash; so that the speech of his people will be holy, aligned with his truth, and capable of genuine praise.",
      "The geographical scope of the restoration is then expanded: &ldquo;From beyond the rivers of Cush my worshipers, the daughter of my dispersed ones, shall bring my offering&rdquo; (3:10). Cush, the region south of Egypt, represented the farthest reaches of the known world in ancient Israelite geography. The promise that worshipers will come from &ldquo;beyond the rivers of Cush&rdquo; is a way of saying that the gathering will be truly universal &mdash; from the edges of the earth, from the ends of the human dispersal, God&rsquo;s people will be brought home to worship.",
      "The nature of the purified community is then described in three complementary promises. First, shame is removed: &ldquo;On that day you shall not be put to shame because of the deeds by which you have rebelled against me; for then I will remove from your midst your proudly exultant ones&rdquo; (3:11). The proud, those who had been the engines of Jerusalem&rsquo;s rebellion, are removed. The community that remains is not defined by its own achievement but by what God has taken away and what God has left. This is already the shape of grace.",
      "The character of the remnant is then positively described: &ldquo;But I will leave in your midst a people humble and lowly. They shall seek refuge in the name of the LORD &mdash; those who are left in Israel; they shall do no injustice and speak no lies, nor shall there be found in their mouth a deceitful tongue&rdquo; (3:12&ndash;13). Humility, refuge-seeking, justice, and truthful speech &mdash; these are the marks of the renewed people. The remnant is not a group of spiritual heroes who have preserved their righteousness through the fires of judgment; they are people defined by their dependence on the LORD, their refuge in his name rather than their own strength.",
      "The final image of the remnant in verse 13 is one of the Bible&rsquo;s most beautiful pictures of covenant rest: &ldquo;For they shall graze and lie down, and none shall make them afraid.&rdquo; The pastoral image invokes the language of Psalm 23 and the great promise that the LORD will lead his flock to rest. The remnant, who will be people without deceit and without injustice, will also be people without fear &mdash; not because they are strong, but because the Mighty Warrior is in their midst and no enemy can ultimately reach them under his protection.",
    ],
  },
  {
    id: "The Mighty Warrior",
    heading: "The Mighty Warrior &mdash; The LORD Is in Your Midst",
    reference: "Zephaniah 3:14&ndash;17",
    paragraphs: [
      "The transition from prophetic oracle to lyric song in verse 14 is abrupt and deliberate: &ldquo;Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!&rdquo; After verses of woe, indictment, and severe warning, the command to sing arrives like a sudden burst of light. The imperative is plural and emphatic &mdash; not a tentative suggestion but a summons to full-throated, wholehearted celebration. Three different verbs of joyful expression are stacked on top of one another: sing, shout, rejoice and exult. The community that has heard its sins named with precision is now called to celebrate with everything it has.",
      "The grounds for celebration are then given in verses 15&ndash;17, which form one of the most condensed and powerful theological statements in the Old Testament. Three things are declared in rapid succession: &ldquo;The LORD has taken away the judgments against you; he has cleared away your enemies. The King of Israel, the LORD, is in your midst; you shall never again fear evil&rdquo; (3:15). Judgment removed. Enemies cleared. The LORD &mdash; named explicitly as the King of Israel, the sovereign ruler of the covenant nation &mdash; present in the community&rsquo;s midst. And the consequence: never again will they fear evil. The combination of presence and power makes fear impossible.",
      "The address then shifts to comfort the desolate: &ldquo;On that day it shall be said to Jerusalem: Fear not, O Zion; let not your hands grow weak&rdquo; (3:16). The &ldquo;weak hands&rdquo; is a vivid image of a community so overwhelmed by threat and disaster that its hands have dropped to its sides in exhaustion and hopelessness. The command not to let the hands grow weak is simultaneously a recognition that they have been growing weak and an infusion of the courage needed to lift them again. It is the kind of word that can only be spoken credibly when the one speaking it has the power to make it true.",
      "Then comes the great verse around which the entire chapter turns, the declaration that has echoed through the history of biblical devotion and Christian worship: &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing&rdquo; (3:17). The verse is structured as a series of five divine actions: being present, saving, rejoicing with gladness, quieting with love, and exulting with loud singing. Each action reveals a different facet of God&rsquo;s relationship with his people.",
      "The word translated &ldquo;mighty one&rdquo; is gibbor, the same word used of God as the &ldquo;Mighty God&rdquo; in Isaiah 9:6 and of the mighty warriors of ancient Israel. The gibbor is a man of power, a champion, a proven fighter whose strength in battle is not theoretical. The LORD is not only present and savingly active; he is present as a gibbor, a warrior-champion who has come into the midst of his people to fight for them. The enemies who threatened the community cannot stand against him. The salvation he brings is not a distant divine decree but the personal, powerful intervention of the Mighty Warrior in the thick of the battle.",
      "The final movement of the verse &mdash; God rejoicing, quieting, and singing over his people &mdash; has no precise parallel anywhere in the Old Testament. The image of God singing is unique in Scripture. The Hebrew word translated &ldquo;exult&rdquo; (gil) means to spin around in joy, to leap, to be transported with gladness. The LORD does not observe the salvation of his people from a distance with cool satisfaction; he is caught up in joy over them, he sings over them. The community that was told to sing aloud in verse 14 discovers that their singing is met by the singing of God himself. The joy of redemption is mutual.",
    ],
  },
  {
    id: "Rejoicing Over You with Singing",
    heading: "Rejoicing Over You with Singing &mdash; The Final Restoration",
    reference: "Zephaniah 3:17&ndash;20",
    paragraphs: [
      "The closing verses of Zephaniah 3 unfold the promises of final restoration in language that has shaped the Christian imagination across centuries. Beginning from the central declaration that God rejoices and sings over his people, the chapter moves toward an account of what the restored future will look like in concrete terms. The movement is from the interior reality of God&rsquo;s joy to the exterior realities of gathered exiles, reversed shame, and universal praise. It is a movement from the divine heart outward to the reordered world.",
      "The LORD addresses those who are grieved about the festivals &mdash; those who sorrow over the loss of the appointed gatherings that were the rhythm of Israel&rsquo;s covenant life: &ldquo;I will gather those of you who mourn for the festival, so that you will no longer suffer reproach&rdquo; (3:18). The reproach that Israel bore among the nations &mdash; the shame of exile, the humiliation of defeat and displacement &mdash; was experienced most painfully at the moments when they could not gather at the Temple for the appointed feasts. Zephaniah promises not merely personal consolation but the restoration of the communal, liturgical life of the people. The festivals will return. The gathering will happen.",
      "The promise of verse 19 addresses the specific people most devastated by the catastrophes of judgment: &ldquo;Behold, at that time I will deal with all your oppressors. And I will save the lame and gather the outcast, and I will change their shame into praise and renown in all the earth.&rdquo; The lame and the outcast &mdash; those who in the ancient world were most vulnerable, most excluded from normal participation in community life, most likely to be overlooked when larger events dominated the scene &mdash; are named by God as the specific objects of his saving attention. His eye is on the ones no one else is watching. His hand reaches first for the ones everyone else has left behind.",
      "The reversal of shame into &ldquo;praise and renown in all the earth&rdquo; is one of the most sweeping promises in the prophetic literature. The Hebrew word translated &ldquo;praise&rdquo; (shem) carries the sense of name, reputation, renown. The community that had been a byword of disgrace among the nations will become a community whose name is spoken with praise wherever it is known. This is not the natural consequence of improved circumstances; it is a divine reversal, a deliberate revaluation performed by the LORD himself, in which what was degraded is honored and what was hidden is brought into the light.",
      "The chapter and the book close with a promise of homecoming: &ldquo;At that time I will bring you in, at the time when I gather you together; for I will make you renowned and praised among all the peoples of the earth, when I restore your fortunes before your eyes, says the LORD&rdquo; (3:20). The phrase &ldquo;restore your fortunes&rdquo; is sometimes translated &ldquo;bring back your captives&rdquo; &mdash; in either case it points to a reversal of the exile, a return from the places of dispersion to the place of belonging. The restoration will be visible: &ldquo;before your eyes.&rdquo; The God who has been acting in history, sometimes invisibly and always in ways that challenge human understanding, will at last perform a work so undeniable that his people will see it with their own eyes and know without question that the LORD has done it.",
      "For the New Testament community, the promises of Zephaniah 3:14&ndash;20 are read through the lens of Jesus Christ and the Holy Spirit. The Mighty Warrior who saves has come in the flesh, has defeated the enemies of sin and death by his cross and resurrection, and is present in the community of his people through the indwelling Spirit. The joy with which the LORD sings over his people is the joy that Jesus spoke of when he said that there is rejoicing in heaven over one sinner who repents (Luke 15:7). The gathering of the outcast and lame has been dramatically enacted in Jesus&rsquo; ministry to tax collectors, sinners, women, foreigners, and the ceremonially unclean. And the final homecoming that Zephaniah announces remains the horizon of Christian hope &mdash; the coming day when all God&rsquo;s scattered, exiled, and redeemed people will be gathered and their shame permanently exchanged for the praise of the one who loved them first.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Zephaniah 3 Today",
    reference: "Zephaniah 3 &mdash; For the Life of the Believer",
    paragraphs: [
      "Zephaniah 3 begins with a description of a community whose leaders have failed completely &mdash; officials who are predators, judges who are wolves, prophets who are treacherous, priests who have profaned the holy. The chapter does not call on Israel to overthrow its corrupt leadership; it calls the nation to account and then announces what God himself will do. This pattern speaks into situations of institutional failure and corruption in every generation: the appropriate response is not despair or vigilante action but the honest acknowledgment of failure and the patient trust that the God who sees morning by morning, who displays his righteousness without fail every day, will act in his own time and according to his own purposes.",
      "The description of the proud being removed and the humble remnant being left (3:11&ndash;12) is one of the most counter-cultural passages in prophetic literature. In every age, the community of God is tempted to identify itself by its powerful, influential, impressive members &mdash; the ones with platforms, resources, and cultural access. Zephaniah describes the community that God builds as one from which the proudly exultant are removed, leaving a people who are &ldquo;humble and lowly&rdquo; and who &ldquo;seek refuge in the name of the LORD.&rdquo; The beatitude Jesus pronounced &mdash; &ldquo;Blessed are the poor in spirit, for theirs is the kingdom of heaven&rdquo; &mdash; is Zephaniah&rsquo;s theological offspring.",
      "The command to &ldquo;fear not, let not your hands grow weak&rdquo; (3:16) addresses a form of spiritual and emotional exhaustion that is not primarily the result of too much work but of too little hope. Hands grow weak when the gap between what we believe God has promised and what we can currently observe in the world becomes too large to bridge with ordinary faith. Zephaniah&rsquo;s answer to this exhaustion is not a technique or a method but a Person: the LORD your God is in your midst, and he is a Mighty Warrior. The hands that have dropped can be lifted again, not because the circumstances have changed but because the one who commands them to lift has the power to make the command good.",
      "Zephaniah 3:17 has become one of the most beloved verses in the pastoral vocabulary of the Christian church, and for good reason. The image of God singing over his people addresses something that lies very deep in the human need for acceptance and delight. Many people believe, at least intellectually, that God tolerates them or that he forgives them when they confess &mdash; but the idea that God actually rejoices over them, that he is glad about their existence, that he quiets them with his love and sings over them &mdash; this exceeds what most people allow themselves to believe. Zephaniah 3:17 insists that this is exactly what is true. The God of the burning holiness of chapter 1 is also the God who sings.",
      "The particular care of God for &ldquo;the lame and the outcast&rdquo; (3:19) is one of the most consistent themes across both Testaments, and it has direct implications for the priorities and practices of the church. The community that reflects the character of the God of Zephaniah will be a community that watches for those whom everyone else is overlooking, that reaches toward those whose lives have been marked by exclusion and defeat, that takes the shame of the marginalized seriously enough to stand with them in it rather than at a comfortable distance from it. Jesus&rsquo; table fellowship with sinners and outcasts was not a peripheral feature of his ministry; it was the enactment of Zephaniah&rsquo;s promise in flesh and blood.",
      "The closing promise that God will &ldquo;restore your fortunes before your eyes&rdquo; (3:20) calls the church to hold its specific sorrows and losses before God with expectation rather than resignation. Christian hope is not the generic optimism that things will generally improve; it is the specific, grounded confidence that the God who has acted decisively in history &mdash; in the exodus, in the return from exile, above all in the resurrection of Jesus Christ from the dead &mdash; is still acting, and that the restoration he has promised will be visible. The same God who reversed the shame of exile, who gathered the scattered, who turned the lame person&rsquo;s shame into praise, is the one who says to the church in every generation of waiting: I will restore your fortunes before your eyes.",
    ],
  },
];

const videoItems = [
  { videoId: "oFCiSB7sJHI", title: "BibleProject Overview - Zephaniah" },
  { videoId: "4YPH16VZMWQ", title: "Zephaniah 3 - The Mighty Warrior Who Saves" },
  { videoId: "e6HaTJABOEg", title: "God Rejoices Over You with Singing - Zephaniah 3:17 Explained" },
  { videoId: "HRiaz9LlQaM", title: "The Humble Remnant - Zephaniah 3 and the Hope of Restoration" },
];

export default function Zephaniah3GuidePage() {
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
            Zephaniah 3 &mdash; The Mighty Warrior Who Sings
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            After sweeping indictment of Jerusalem&rsquo;s proud leaders, Zephaniah 3 pivots to promises of extraordinary beauty: a humble remnant, the Mighty Warrior who saves, and the God who &ldquo;will exult over you with loud singing&rdquo; &mdash; one of Scripture&rsquo;s most astonishing images of divine joy.
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
              Explore Zephaniah 3 through these video teachings on the judgment of Jerusalem&rsquo;s pride, the humble remnant, the Mighty Warrior who saves, and God&rsquo;s extraordinary promise to rejoice over his people with singing.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Will Exult Over You with Loud Singing</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Zephaniah 3 moves from the woe of a rebellious city to the song of a rejoicing God, and in doing so it traces the shape of the gospel itself: honest reckoning with sin, the removal of what is proud and corrupt, the gathering of the humble remnant, and the final, astonishing word that the LORD your God &mdash; the Mighty Warrior who saves &mdash; will quiet you by his love and exult over you with loud singing. This is the character of the God who gave his Son, and who will not rest until every exile is home.
          </p>
        </div>
      </main>
    </div>
  );
}
