"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ACCENT = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface AccordionItem {
  id: string;
  label: string;
  reference: string;
  body: string;
}

interface ThemeCard {
  title: string;
  color: string;
  body: string;
}

const themeCards: ThemeCard[] = [
  {
    title: "Enacted Prophecy as Act of Faith",
    color: ACCENT,
    body: "Jeremiah was the master of symbolic actions &mdash; he wore a wooden yoke, buried a linen loincloth, smashed a potter&rsquo;s vessel. The purchase of the field at Anathoth (32:6&ndash;14) is the most sustained and legally precise of all these enacted prophecies. It is not merely a dramatic gesture; it is a fully documented legal transaction, complete with deed, witnesses, silver weighed, and certified copies stored in an earthenware jar. The legal formality is itself part of the message: this is a real purchase, for a real future, in a real land that God intends to restore.",
  },
  {
    title: "Buying in a Bear Market",
    color: GOLD,
    body: "The economic metaphor is unavoidable: Jeremiah buys a field at the moment when Judean real estate has precisely zero market value. Jerusalem is under siege; Babylon is going to win; the land is about to be confiscated, depopulated, and ruled by a foreign empire. No rational actor would purchase property under these conditions. But Jeremiah does, because the purchase is not driven by market analysis. It is driven by divine command and prophetic conviction about what God is going to do. He invests in a future that currently looks impossible. This is the posture of faith in every age.",
  },
  {
    title: "&ldquo;Nothing Is Too Hard for You&rdquo;",
    color: TEAL,
    body: "The centerpiece of Jeremiah&rsquo;s prayer in 32:17&ndash;25 is the declaration: &ldquo;Ah, Lord GOD! It is you who have made the heavens and the earth by your great power and by your outstretched arm! Nothing is too hard for you.&rdquo; This confession of divine omnipotence is not mere theological assertion; it is the working basis of the field purchase. If nothing is too hard for God, then even the restoration of exiled Israel to its land is possible. The prayer situates the bewildering command to buy a field within the larger context of who God has shown himself to be: the Creator who acts in history and keeps his promises across centuries.",
  },
  {
    title: "The Deed in an Earthenware Jar",
    color: PURPLE,
    body: "Jeremiah&rsquo;s instruction to place the deed of purchase &ldquo;in an earthenware vessel, that they may last for a long time&rdquo; (32:14) is an extraordinary detail. The document must survive beyond the immediate crisis. It will be needed when the exile is over and people return to reclaim their property. The earthenware jar is a technology of hope &mdash; a way of preserving the evidence of a transaction whose meaning will only be fully apparent in the future. Paul might have had something similar in mind when he described believers as &ldquo;jars of clay&rdquo; who carry the treasure of the gospel through every kind of pressure (2 Corinthians 4:7).",
  },
  {
    title: "God&rsquo;s Answer to Honest Bewilderment",
    color: ROSE,
    body: "One of the most remarkable features of Jeremiah 32 is that God does not rebuke Jeremiah for his bewilderment. Jeremiah&rsquo;s prayer (32:16&ndash;25) ends with an almost comical confession: &ldquo;Yet you, O Lord GOD, have said to me, &lsquo;Buy the field for money and get witnesses&rsquo; &mdash; though the city is given into the hands of the Chaldeans.&rdquo; He is essentially saying: Lord, I obeyed &mdash; but I don&rsquo;t understand. God does not dismiss this bewilderment. He responds with a sweeping theological answer that takes Jeremiah&rsquo;s honest confusion seriously and answers it at the level of God&rsquo;s own sovereignty over history.",
  },
  {
    title: "The Everlasting Covenant",
    color: ACCENT,
    body: "God&rsquo;s response (32:36&ndash;44) culminates in one of the great covenant declarations of the Old Testament: &ldquo;I will make with them an everlasting covenant, that I will not turn away from doing good to them. And I will put the fear of me in their hearts, that they may not turn from me&rdquo; (32:40). The covenant is described as &ldquo;everlasting&rdquo; &mdash; &lsquo;olam, the same word used of God&rsquo;s love in Jeremiah 31:3. It will not be conditional on Israel&rsquo;s performance because God himself will plant the disposition to remain in it. This is the inner dimension of the new covenant that complements Jeremiah 31&rsquo;s promise of the law written on the heart.",
  },
  {
    title: "Fear of the LORD Planted in Hearts",
    color: GOLD,
    body: "The specific promise of 32:40 &mdash; &ldquo;I will put the fear of me in their hearts, that they may not turn from me&rdquo; &mdash; addresses the root cause of Israel&rsquo;s entire history of covenant-breaking. Israel did not fear God as they should have; they went after other gods, trusted in human alliances, relied on their own strength. The divine solution is not better laws or sterner warnings but a transformation of the inner disposition: the fear of the LORD planted by God himself in the hearts of the covenant people. This is new covenant language, closely parallel to Jeremiah 31:33 and pointing forward to what the Spirit accomplishes in regeneration.",
  },
  {
    title: "Parallel to Jeremiah 31",
    color: TEAL,
    body: "Jeremiah 32 and 31 are companion texts in the Book of Consolation, each contributing a dimension of the new covenant promise that the other does not. Chapter 31 emphasizes the writing of the law on the heart, the universalization of the knowledge of God, and the complete forgiveness of sin. Chapter 32 emphasizes the everlasting covenant (32:40), the fear of the LORD planted in hearts (32:40), and the re-purchase of land as enacted sign (32:43&ndash;44). Together they give the fullest Old Testament picture of the inner transformation that will characterize the people of the new covenant.",
  },
  {
    title: "Divine Sovereignty and Human Bewilderment",
    color: PURPLE,
    body: "The structure of Jeremiah 32 &mdash; God&rsquo;s command, Jeremiah&rsquo;s obedience, Jeremiah&rsquo;s prayer of bewilderment, God&rsquo;s sweeping answer &mdash; models a theology of faith that does not require prior understanding. Jeremiah obeys before he understands. He purchases the field and then asks God to explain it. God&rsquo;s answer does not eliminate the paradox; it situates it within the larger story of divine sovereignty over history. The Christian life regularly involves the same pattern: obedience to a divine directive that currently makes no sense, followed by a disclosure of meaning that could not have been grasped before the obedience was rendered.",
  },
  {
    title: "Fields Will Again Be Bought",
    color: ROSE,
    body: "The key verse that unlocks the entire chapter is 32:15: &ldquo;For thus says the LORD of hosts, the God of Israel: Houses and fields and vineyards shall again be bought in this land.&rdquo; Jeremiah&rsquo;s peculiar purchase is a down payment on this promise. Every element of the transaction &mdash; the seventeen shekels, the witnesses, the sealed deed, the earthenware jar &mdash; is evidence in advance of a future that God is declaring to be certain. God so often calls his people to make investments of faith in a future that is currently invisible, in order that when the future arrives, there is a record of the faith that trusted him before the evidence arrived.",
  },
];

const verseItems: AccordionItem[] = [
  {
    id: "v1",
    label: "Jeremiah 32:1-5 &mdash; The Setting",
    reference: "Jeremiah 32:1&ndash;5",
    body: "The chapter opens by fixing the event with unusual precision: the tenth year of Zedekiah king of Judah, which is the eighteenth year of Nebuchadnezzar (32:1). This is approximately 588 B.C., and the siege of Jerusalem is in its final stages. Jeremiah is confined in the court of the guard in the palace of the king of Judah &mdash; imprisoned not for any crime but because he has been prophesying what no one wants to hear: that Babylon will take the city, that the king will be captured, that the divine judgment announced for decades will now arrive (32:2&ndash;5). The setting could hardly be more unpromising. Jeremiah is imprisoned by a king whose city is falling, and it is precisely at this moment that God tells him to buy a piece of real estate.",
  },
  {
    id: "v2",
    label: "Jeremiah 32:6-15 &mdash; The Purchase",
    reference: "Jeremiah 32:6&ndash;15",
    body: "God tells Jeremiah in advance that his cousin Hanamel will come to him with an offer to redeem the family land at Anathoth (32:6&ndash;7). When Hanamel arrives exactly as God predicted (32:8), Jeremiah recognizes it as the word of the LORD and buys the field: seventeen shekels of silver, weighed on scales, deeds signed and sealed and witnessed, certified copies made, and &mdash; most strikingly &mdash; all of it placed in an earthenware jar to be preserved &ldquo;for a long time&rdquo; (32:9&ndash;14). The legal detail is extraordinary: Jeremiah is not performing a spontaneous gesture but a fully documented legal transaction. The reason is given in 32:15 with elegant simplicity: &ldquo;For thus says the LORD of hosts, the God of Israel: Houses and fields and vineyards shall again be bought in this land.&rdquo; The purchase is a prophetic sign, enacted in the real world with real silver.",
  },
  {
    id: "v3",
    label: "Jeremiah 32:16-25 &mdash; Jeremiah's Prayer",
    reference: "Jeremiah 32:16&ndash;25",
    body: "After the transaction is completed, Jeremiah prays one of the Old Testament&rsquo;s greatest prayer-confessions (32:16&ndash;25). He begins with creation: &ldquo;Ah, Lord GOD! It is you who have made the heavens and the earth by your great power and by your outstretched arm! Nothing is too hard for you&rdquo; (32:17). He rehearses God&rsquo;s character &mdash; steadfast love shown to thousands, iniquity repaid to those who deserve it, the great and mighty God whose eyes are open to all the ways of the children of man (32:18&ndash;19). He reviews the mighty acts of the Exodus and the wilderness and the gift of the land (32:20&ndash;22). He acknowledges Israel&rsquo;s persistent disobedience and the resulting catastrophe (32:23&ndash;24). And then comes the honest bewilderment: &ldquo;Yet you, O Lord GOD, have said to me, &lsquo;Buy the field for money and get witnesses&rsquo; &mdash; though the city is given into the hands of the Chaldeans&rdquo; (32:25). This is the prayer of a man who has obeyed without fully understanding, and who brings his bewilderment honestly to God.",
  },
  {
    id: "v4",
    label: "Jeremiah 32:26-35 &mdash; God's Response: Yes, I Give the City",
    reference: "Jeremiah 32:26&ndash;35",
    body: "God&rsquo;s response begins not with reassurance but with a restatement of his own identity: &ldquo;Behold, I am the LORD, the God of all flesh. Is anything too hard for me?&rdquo; (32:27). He then confirms what Jeremiah already knows: yes, the city will be given to Babylon; yes, it will fall (32:28). But the reason is important: God is handing the city over not because he has been defeated or because his purposes have failed, but because Israel&rsquo;s persistent, long-running idolatry has provoked his anger (32:29&ndash;35). This section is not a correction of Jeremiah&rsquo;s prayer; it is a theological grounding of the disaster. The exile is not capricious; it is the just consequence of generations of covenant-breaking. God names the sins specifically &mdash; the Baals, the high places, the abominations, even the sacrifice of children (32:35). He has been speaking; they have not listened. The fall of Jerusalem is entirely explicable within the terms of the covenant they violated.",
  },
  {
    id: "v5",
    label: "Jeremiah 32:36-44 &mdash; The Everlasting Covenant",
    reference: "Jeremiah 32:36&ndash;44",
    body: "The chapter&rsquo;s great pivot comes in verse 36: &ldquo;Now therefore thus says the LORD, the God of Israel, concerning this city of which you say, &lsquo;It is given into the hand of the king of Babylon by sword, by famine, and by pestilence.&rsquo;&rdquo; God acknowledges the reality of the judgment &mdash; and then declares the restoration. He will gather the scattered exiles and bring them back (32:37). He will be their God and they will be his people (32:38). He will give them &ldquo;one heart and one way, that they may fear me forever, for their own good and the good of their children after them&rdquo; (32:39). He will make with them an everlasting covenant and will not turn away from doing them good; he will put the fear of him in their hearts so that they will not turn from him (32:40). He will rejoice in doing them good with all his heart and soul and will plant them in the land (32:41). And then, in a direct link to the field purchase: &ldquo;For thus says the LORD: Just as I have brought all this great disaster upon this people, so I will bring upon them all the good that I promise them. Fields shall be bought in this land of which you are saying, &lsquo;It is a desolation, without man or beast; it is given into the hand of the Chaldeans.&rsquo; Fields shall be bought for money, and deeds shall be signed and sealed and witnessed, in the land of Benjamin, in the places around Jerusalem, and in the cities of Judah&rdquo; (32:42&ndash;44). Jeremiah&rsquo;s single purchase at Anathoth is a sign of the universal restoration of normal economic life in the land.",
  },
];

const videoItems = [
  { id: "JtKcN5vBxQo", title: "Jeremiah 32: Buy the Field While the City Burns" },
  { id: "LmPtR7wZfNs", title: "Nothing Is Too Hard for You &mdash; Jeremiah 32 Prayer Study" },
  { id: "NpQbY9uDwLk", title: "The Deed in an Earthenware Jar &mdash; Jeremiah 32 Explained" },
  { id: "PrTcV2xZhVm", title: "Everlasting Covenant &mdash; Jeremiah 32:36-44 Commentary" },
];

const appItems: AccordionItem[] = [
  {
    id: "app1",
    label: "Making Investments of Faith When Everything Looks Hopeless",
    reference: "Jeremiah 32:6&ndash;15",
    body: "The logic of Jeremiah&rsquo;s field purchase is the logic of faith in every age: act on the future God has promised before that future is visible in the present. This is structurally identical to what the writer of Hebrews calls faith &mdash; &ldquo;the assurance of things hoped for, the conviction of things not seen&rdquo; (Hebrews 11:1). Abraham bought no land in Canaan but was told that his descendants would inherit it. Jeremiah buys land in a country about to be confiscated and depopulated. Both investments are irrational by the standards of the present moment; both are entirely rational by the standards of the God who has promised a future. The challenge for the Christian is to identify where God is calling this kind of investment of faith in our own lives &mdash; what field is he asking us to buy?",
  },
  {
    id: "app2",
    label: "The Practice of &ldquo;Buying the Field&rdquo; Before Seeing Restoration",
    reference: "Jeremiah 32:15",
    body: "The practice of buying the field &mdash; committing to something before the restoration has arrived &mdash; takes different forms in different lives and different seasons of the church. It might mean continuing to pray for a prodigal child when all visible evidence suggests the prayer is not working. It might mean planting a church in a neighborhood that looks spiritually barren. It might mean investing in a marriage that is under serious strain, trusting God&rsquo;s capacity for restoration rather than writing it off. In every case, the Jeremiah model involves doing something concrete &mdash; signing a deed, making a commitment, taking a step that would be foolish if God&rsquo;s promise were not true &mdash; as an embodied act of confidence in what God has said.",
  },
  {
    id: "app3",
    label: "Praying with Both Awe and Honesty",
    reference: "Jeremiah 32:17&ndash;25",
    body: "Jeremiah&rsquo;s prayer (32:16&ndash;25) is a model of theological honesty. It begins at the highest level: the God who made the heavens and the earth by his great power, to whom nothing is too hard. It then works carefully through the historical record of divine faithfulness: the Exodus, the giving of the land, the sustained patience with Israel&rsquo;s disobedience. And it ends with a confession of bewilderment that is as honest as it is theologically grounded: Lord, I did what you said &mdash; but I don&rsquo;t understand it. This is not the prayer of a doubter; it is the prayer of someone who trusts God so completely that they can bring their confusion directly to him without dressing it up. The Psalms model the same pattern &mdash; bold confidence in God&rsquo;s character combined with unflinching honesty about the gap between the promised reality and the experienced one.",
  },
  {
    id: "app4",
    label: "Receiving the New Covenant Promise of the Fear of God",
    reference: "Jeremiah 32:40",
    body: "The promise of 32:40 &mdash; &ldquo;I will put the fear of me in their hearts, that they may not turn from me&rdquo; &mdash; addresses one of the deepest problems of the Christian life: the tendency to drift, to cool, to turn from God despite our best intentions. Israel had the law, the prophets, the temple, the sacrificial system &mdash; and still turned away. The new covenant solution is not more law but a transformed heart: the fear of the LORD planted by God himself as a permanent disposition. This is what the Holy Spirit produces in regeneration and nurtures in sanctification. The Christian does not produce the fear of God by force of will; they receive it as a gift of the new covenant and cooperate with its work in their hearts. Returning again and again to God in worship and prayer and Scripture is the way this planted fear is watered and grows.",
  },
  {
    id: "app5",
    label: "Bringing Bewilderment Honestly Before God",
    reference: "Jeremiah 32:25",
    body: "Many Christians have been taught, implicitly or explicitly, that honest bewilderment is a failure of faith. Jeremiah 32 challenges this directly. God tells Jeremiah to do something bewildering. Jeremiah does it. Then he prays about his bewilderment &mdash; at length, carefully, theologically &mdash; and God responds with a theological answer that takes the bewilderment seriously. The pattern suggests that honest prayer about what we do not understand is not the opposite of faith; it is one of faith&rsquo;s characteristic expressions. The believer who can say &ldquo;Lord, I believe; help my unbelief&rdquo; &mdash; who can both confess faith and bring bewilderment &mdash; is closer to the biblical model of prayer than the one who suppresses all honest struggle behind an appearance of confident certainty.",
  },
];

export default function Jeremiah32GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggle = (id: string) => setOpenAccordion(openAccordion === id ? null : id);

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "Georgia, serif",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${ACCENT}22`,
              color: ACCENT,
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Jeremiah 32
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: GOLD,
              fontWeight: 600,
              margin: "0 0 1rem",
              lineHeight: 1.4,
            }}
          >
            Buy the Field at Anathoth
          </p>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.08rem)",
              color: MUTED,
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 720,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "The most counterintuitive act of faith in the prophets &mdash; Jeremiah purchases a field while Jerusalem is under siege and he is imprisoned, demonstrating that &ldquo;fields and vineyards shall again be bought in this land.&rdquo; His prayer and God&rsquo;s response form a theology of divine sovereignty and everlasting covenant.",
            }}
          />
        </header>

        {/* Tab Navigation */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1.25rem",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
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

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Overview of Jeremiah 32
            </h2>
            <div
              style={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              Jeremiah 32:1&ndash;44
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 32 may be the most audacious act of faith recorded in the entire Old Testament. It takes place at the lowest imaginable moment: Jeremiah is confined in the court of the guard in the king&rsquo;s palace in Jerusalem (32:2), imprisoned because he has been prophesying what everyone in the royal administration refuses to hear &mdash; that Babylon will take the city. Outside the walls, Nebuchadnezzar&rsquo;s army is prosecuting the final siege of Jerusalem, a siege that will end within two years with the destruction of the city, the burning of the Temple, and the deportation of the population. The visible situation is catastrophic. It is at precisely this moment that God tells Jeremiah to purchase a piece of real estate.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "God tells Jeremiah in advance that his cousin Hanamel will come offering to sell the family field at Anathoth, a village in the territory of Benjamin a few miles northeast of Jerusalem (32:6&ndash;7). When Hanamel arrives exactly as God predicted (32:8), Jeremiah recognizes the divine providence and acts: he buys the field. The transaction is recorded with painstaking legal precision &mdash; seventeen shekels of silver, weighed on scales, a deed of purchase signed and sealed in the presence of witnesses, and both the sealed copy and the open copy placed in an earthenware jar to be preserved &ldquo;for a long time&rdquo; (32:9&ndash;14). The stated rationale is crisp and counterintuitive: &ldquo;For thus says the LORD of hosts, the God of Israel: Houses and fields and vineyards shall again be bought in this land&rdquo; (32:15). Jeremiah&rsquo;s purchase is a down payment on a promised future.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "After completing the transaction, Jeremiah prays a prayer of remarkable scope and honesty (32:16&ndash;25). He begins with the creation: nothing is too hard for God (32:17). He rehearses the Exodus and the gift of the land and Israel&rsquo;s persistent disobedience (32:20&ndash;24). And he ends with honest bewilderment: Lord, you told me to buy the field &mdash; but the Chaldeans are taking the city (32:25). This is not the prayer of a doubter but of a man who has obeyed without fully understanding, and who brings his confusion to God with theological precision. God&rsquo;s response is the longest divine speech in the entire book of Jeremiah (32:26&ndash;44), and it moves from frank acknowledgment of the coming disaster to the most expansive covenant promise in the Book of Consolation.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "God confirms the judgment: yes, the city will be given to Babylon; yes, it will be burned; yes, this is because of Israel&rsquo;s long history of idolatry and covenant-breaking (32:28&ndash;35). But then comes the turn: God will gather the scattered exiles and bring them home. He will give them one heart and one way, to fear him forever (32:39). He will make an everlasting covenant with them, will put the fear of him in their hearts so that they will not turn from him, and will rejoice in doing them good with all his heart and soul (32:40&ndash;41). And finally, in direct answer to Jeremiah&rsquo;s purchase: &ldquo;Fields shall be bought in this land of which you are saying, &lsquo;It is a desolation.&rsquo;&rdquo; The earthenware jar with its preserved deed is the evidence in advance of a restoration that God is declaring as certain as the judgment.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 32 belongs to the same theological world as Jeremiah 31 but contributes a distinctive element: where chapter 31 is primarily oracle and promise, chapter 32 is enacted prophetic sign. The field purchase demonstrates in action what the words of consolation assert in speech: that God&rsquo;s commitment to the restoration of his people is so certain that it is worth investing in before it arrives. The earthenware jar is the Old Testament equivalent of the &ldquo;firstfruits&rdquo; &mdash; the beginning of a harvest not yet gathered, the concrete evidence of a future not yet visible. Christians who know the Spirit as the &ldquo;firstfruits&rdquo; and &ldquo;guarantee&rdquo; of the coming inheritance (Romans 8:23; 2 Corinthians 1:22) read Jeremiah 32 with the recognition that they are living in the very age that Jeremiah&rsquo;s jar pointed to.",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                background: CARD,
                border: `1px solid ${ACCENT}44`,
                borderRadius: 12,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  margin: "0 0 0.6rem",
                  fontSize: "1.1rem",
                }}
              >
                The Book of Consolation &mdash; Chapters 30&ndash;33
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 32 is the third movement of the four-chapter Book of Consolation. Chapter 30 announced the crisis and the promise of salvation. Chapter 31 delivered the new covenant oracle &mdash; law written on hearts, sins remembered no more. Chapter 32 enacts the hope in a legal transaction. Chapter 33 will add the Branch of righteousness, the restored worship, and the unconditional Davidic covenant. The field purchase in chapter 32 stands at the structural center of the collection: it is the physical, legal, documented sign that everything the words have promised is real enough to buy.",
                }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Key Themes in Jeremiah 32
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
            >
              Jeremiah 32 weaves together enacted prophecy, honest prayer, divine sovereignty, and new covenant promise into one of the richest theological chapters in the Old Testament.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {themeCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${card.color}44`,
                    borderRadius: 10,
                    padding: "1.25rem 1.4rem",
                  }}
                >
                  <h3
                    style={{
                      color: card.color,
                      fontWeight: 700,
                      fontSize: "1rem",
                      margin: "0 0 0.65rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Verse by Verse &mdash; Jeremiah 32
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
            >
              A close reading of each major section of Jeremiah 32, from the purchase of the field to the promise of the everlasting covenant.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {verseItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${openAccordion === item.id ? ACCENT : BORDER}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: TEXT,
                      fontSize: "0.97rem",
                      fontWeight: 600,
                      fontFamily: "inherit",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                    <span
                      style={{
                        color: ACCENT,
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontWeight: 400,
                      }}
                    >
                      {openAccordion === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div style={{ padding: "0 1.25rem 1.25rem" }}>
                      <div
                        style={{
                          color: ACCENT,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          marginBottom: "0.75rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.reference }}
                      />
                      <p
                        style={{
                          color: MUTED,
                          fontSize: "0.97rem",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 10,
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "1rem",
                  margin: "0 0 0.6rem",
                }}
              >
                Structure of Jeremiah 32
              </h3>
              <p
                style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter has a chiastic-like shape: (A) the imprisoned prophet in a falling city (32:1&ndash;5); (B) the field purchase &mdash; enacted faith (32:6&ndash;15); (C) Jeremiah&rsquo;s prayer &mdash; &ldquo;nothing too hard for you&rdquo; (32:16&ndash;25); (C&prime;) God&rsquo;s response &mdash; &ldquo;Is anything too hard for me?&rdquo; (32:26&ndash;27); (B&prime;) the theological grounding of the disaster (32:28&ndash;35); (A&prime;) the everlasting covenant &mdash; fields shall again be bought (32:36&ndash;44). The field purchase at the center is surrounded by layers of theological explanation that move outward from the specific transaction to the widest possible covenant horizon.",
                }}
              />
            </div>
          </section>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Applying Jeremiah 32 Today
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jeremiah 32 speaks to every season in which the visible evidence contradicts the promise of God &mdash; when the rational calculation says the investment is hopeless, when the city is falling, when the future God has promised seems impossible from any human vantage point.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {appItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${openAccordion === item.id ? GOLD : BORDER}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: TEXT,
                      fontSize: "0.97rem",
                      fontWeight: 600,
                      fontFamily: "inherit",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontWeight: 400,
                      }}
                    >
                      {openAccordion === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div style={{ padding: "0 1.25rem 1.25rem" }}>
                      <div
                        style={{
                          color: GOLD,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          marginBottom: "0.75rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.reference }}
                      />
                      <p
                        style={{
                          color: MUTED,
                          fontSize: "0.97rem",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.55,
                      margin: 0,
                      padding: "12px 16px",
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>
              Video Teaching
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                margin: "0 0 2rem",
              }}
            >
              Deepen your study of Jeremiah 32 through these video teachings on the field purchase, the prayer &ldquo;nothing too hard for you,&rdquo; the earthenware jar, and the everlasting covenant.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.5,
                      margin: 0,
                      padding: "12px 16px",
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Call-out */}
        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${ACCENT}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3
            style={{
              color: ACCENT,
              fontWeight: 700,
              margin: "0 0 0.75rem",
              fontSize: "1.2rem",
            }}
          >
            Fields Shall Again Be Bought
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Jeremiah&rsquo;s field purchase is the most counterintuitive act of faith in the prophets, and it is also the most theologically precise. He does not merely hope for restoration &mdash; he invests in it, with silver and a sealed deed and witnesses. The earthenware jar preserving the document across the years of exile is a sign that God&rsquo;s promises have a shelf life that outlasts every catastrophe. Christians who know the Holy Spirit as the &ldquo;firstfruits&rdquo; and &ldquo;guarantee&rdquo; of the coming inheritance are living in the age the jar pointed to &mdash; the age in which the nothing-too-hard God has, in Jesus Christ, already shown that he keeps every word written in the Book of Consolation.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
