"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function Psalm117Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #10081f 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: PURPLE }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book V
            <span style={{ color: BORDER }}>{" > "}</span>
            Egyptian Hallel -- Shortest Psalm / Center of the Bible
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 117 &mdash; Praise the LORD, All Nations
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            The shortest chapter in the Bible and the numerical center of Scripture &mdash; the biggest idea in the smallest package: all nations praising the God of Israel
          </p>
          <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Praise the LORD, all nations! Extol him, all peoples! For great is his steadfast love toward us, and the faithfulness of the LORD endures forever. Praise the LORD!&rdquo; &mdash; Psalm 117:1-2
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 22px", background: "none", border: "none", cursor: "pointer",
                color: activeTab === tab ? PURPLE : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${PURPLE}` : "2px solid transparent",
                fontFamily: "Georgia, serif", fontSize: 14, fontWeight: activeTab === tab ? 700 : 400,
                whiteSpace: "nowrap", transition: "color 0.2s"
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* -- OVERVIEW -- */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px" }}>
              <h2 style={{ color: PURPLE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 117 is the shortest chapter in the entire Bible -- just two verses and seventeen words in Hebrew -- and it contains one of the largest ideas in Scripture. It is the numerical center of the Bible (with 594 chapters before it and 594 after it, it is the middle chapter), and its subject is the center of God's redemptive purpose: the universal praise of all nations. In the smallest possible literary package, the psalmist announces the global scope of the gospel: all nations, all peoples, every ethnic group on earth, called to praise the God of Israel." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The structure is deceptively simple: a command (v. 1), a reason (v. 2a), and a closing Hallel (v. 2b). The command is addressed to &ldquo;all nations&rdquo; (kol goyim) and &ldquo;all peoples&rdquo; (kol haumim) -- two terms covering the totality of non-Israelite humanity. The nations are not merely permitted to praise YHWH; they are commanded to do so. This is not a surprising addition to Israel's worship but the completion of Israel's vocation: Abraham was called so that &ldquo;in you all the families of the earth shall be blessed&rdquo; (Genesis 12:3). Israel was meant to be a light to the nations. Psalm 117 is the lyric distillation of that mission." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The reason given for the nations' praise is surprising: &ldquo;for great is his steadfast love toward us.&rdquo; The &ldquo;us&rdquo; refers to Israel -- and yet the nations are called to praise God for what he has done for Israel. This is the logic of mission through covenant: God's faithfulness to Israel is the demonstration and pledge of his faithfulness to all nations. The nations praise because they have seen what God does for his people, and the covenant love (hesed) and faithfulness (emet) that characterized his dealing with Israel are the same attributes available to all who trust him." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The NT use of Psalm 117 is decisive and programmatic. Paul quotes it in Romans 15:11 as one of four OT texts proving that the Gentile mission was always God's plan: &ldquo;And again, 'Praise the Lord, all you Gentiles, and let all the peoples extol him.'&rdquo; In context (Romans 15:8-12), Paul is arguing that Christ came both to confirm the promises to the Jewish patriarchs and to bring the Gentiles into the praise of God. Psalm 117 is proof that this inclusion of the nations was not Paul's innovation but the conclusion toward which all of Scripture was pointing." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Charles Spurgeon preached an entire sermon on Psalm 117 titled &ldquo;The Shortest Psalm&rdquo; and observed: &ldquo;Though small in body, this psalm is great in soul. Like a dwarf, it is full of strength. Like a little vessel, it holds much treasure.&rdquo; Spurgeon saw in the psalm's two-word parallel structure (all nations / all peoples) a completeness that was intentional: no people group is excluded from the call to praise, and no people group is excluded from the scope of God's hesed." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The placement of Psalm 117 within the Egyptian Hallel (113-118) gives it additional weight. Sung at the Passover -- the celebration of Israel's liberation from Egypt and her constitution as God's covenant people -- Psalm 117 announces that the circle of salvation is wider than Israel alone. The liberation from Egypt was the paradigm; the nations' praise is the telos. The Hallel that begins with &ldquo;Praise, O servants of the LORD&rdquo; (113:1) ends with the vision of servants recruited from every nation and people on earth." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: PURPLE, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Length", "2 verses -- shortest chapter in the Bible"],
                  ["Position", "Numerical center of Scripture"],
                  ["Type", "Universal Hallel / Doxology"],
                  ["Accent Color", "Purple -- the divine throne, all nations"],
                  ["NT Quotation", "Romans 15:11 -- Paul's Gentile mission proof"],
                  ["Key Word", "hesed -- steadfast love (v. 2)"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: PURPLE, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>Paul's Four OT Texts for the Gentile Mission (Romans 15:9-12)</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Psalm 18:49", text: "\"Therefore I will praise you among the Gentiles, and sing to your name.\" -- Gentiles included in David's praise." },
                  { ref: "Deuteronomy 32:43", text: "\"Rejoice with his people, O you nations.\" -- Gentiles called to rejoice with Israel." },
                  { ref: "Psalm 117:1", text: "\"Praise the Lord, all you Gentiles, and let all the peoples extol him.\" -- Universal command to all nations." },
                  { ref: "Isaiah 11:10", text: "\"The root of Jesse will come, even he who arises to rule the Gentiles; in him will the Gentiles hope.\" -- The Messiah reigns over all nations." },
                ].map((t) => (
                  <div key={t.ref} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{t.ref}</div>
                    <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="OxCOIq1QLDE" title="Psalm 117 -- The Shortest Psalm and Its Biggest Idea" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: PURPLE,
                title: "All Nations: The Universal Scope of Praise",
                refs: "Psalm 117:1; Genesis 12:3; Isaiah 49:6; Matthew 28:19-20; Revelation 7:9-10",
                body: `The first word of Psalm 117's call to praise is "all" -- "all nations," "all peoples." The universality is not accidental or incidental; it is the psalm's entire point. In two words, the psalmist announces a vision that spans the entire biblical storyline: the gathering of all nations into the worship of the one true God.

This vision begins at the very start of redemption history. When God called Abraham in Genesis 12:3, the purpose was global: "in you all the families of the earth shall be blessed." Abraham was not chosen for Israel's exclusive benefit but as the instrument through which the nations would receive blessing. The covenant with Abraham was always a covenant with the nations -- they simply did not know it yet. Psalm 117 makes explicit what was implicit from the beginning.

Isaiah developed this trajectory most fully. In 49:6, God says to the Servant: "It is too light a thing that you should be my servant to raise up the tribes of Jacob and to bring back the preserved of Israel; I will make you as a light for the nations, that my salvation may reach to the end of the earth." The restoration of Israel is the penultimate goal; the conversion of the nations is the ultimate one.

The NT fulfillment is direct. Matthew 28:19-20: "Go therefore and make disciples of all nations." Revelation 7:9-10: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb, crying out with a loud voice, 'Salvation belongs to our God who sits on the throne, and to the Lamb!'" Psalm 117's "all nations" becomes Revelation 7's uncountable multitude. The psalm is not poetry about a distant ideal; it is prophecy about a gathering that is already underway.`,
              },
              {
                color: TEAL,
                title: "Hesed and Emet: The Two Pillars of Covenant Love",
                refs: "Psalm 117:2; Exodus 34:6-7; John 1:14; Romans 15:8-9",
                body: `The reason the nations are called to praise -- "for great is his steadfast love toward us, and the faithfulness of the LORD endures forever" -- is rooted in two Hebrew words that are among the most significant in the entire OT: hesed (steadfast love, covenant loyalty, lovingkindness) and emet (faithfulness, truth, reliability).

These two words appear together repeatedly in the Psalter (e.g., Psalm 25:10; 57:3; 85:10; 86:15; 89:14; 138:2) and are the basis of the divine self-disclosure in Exodus 34:6-7: "The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love (hesed) and faithfulness (emet)." This is the fullest self-revelation God gives to Moses, and Psalm 117:2 condenses it into the reason for the nations' praise.

The extraordinary thing is that the nations are called to praise God for his hesed and emet toward Israel ("toward us"). The reasoning is: what God has demonstrated in his covenant relationship with Israel reveals his character, which is the same character available to all who come to him. Israel's experience of God's steadfast love is the sample; the nations can taste the same love by coming to the same God.

John 1:14 uses this exact pair of words in its description of the incarnate Word: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace (hesed) and truth (emet)." Jesus is the embodiment of the two pillars of Psalm 117. Paul in Romans 15:8-9 says Christ came "to confirm the promises given to the patriarchs" (faithfulness/emet) "and in order that the Gentiles might glorify God for his mercy" (hesed). The incarnation is the ultimate demonstration of the hesed and emet that grounds all nations' praise.`,
              },
              {
                color: GOLD,
                title: "The Center of Scripture: A Bible Structured Around Mission",
                refs: "Psalm 117 as literary center; Genesis 12:3; Revelation 21:24-26; Psalm 22:27-28",
                body: `Psalm 117 is the numerical center of the Bible (594 chapters before, 594 after, counting the Protestant canon). Whether this is a coincidence or divine design has been debated, but the theological fitness is undeniable: the center of Scripture is a psalm calling all nations to praise the LORD. The Bible is a book about mission -- about the God who creates, redeems, and is gathering a people from every nation for his own name's praise. That this universal doxology stands at the center is at least symbolically perfect.

The biblical storyline moves in a clear arc. In Genesis 3, humanity falls; in Genesis 12, God calls Abraham to bless the nations; in Exodus, God constitutes Israel as a kingdom of priests to mediate his presence to the world; in the Psalter, the vision of all nations praising God appears repeatedly (Psalms 22:27-28; 67; 96; 98; 100; 117); in Isaiah, the Servant mission extends to the ends of the earth; in the gospels, Jesus commissions the disciples to all nations; in Revelation, the great multitude from every tribe and language and people and nation stands before the throne.

Psalm 117 stands at the center of this arc and distills it to two verses. It is not a marginal note but the thematic core. The entire history of Israel was preparation for this: a people set apart so that their God would become the God of all people. The covenant was particular (Abraham, Isaac, Jacob, Israel) for the purpose of being universal (all nations, all peoples).

Psalm 22:27-28 anticipates the same vision: "All the ends of the earth shall remember and turn to the LORD, and all the families of the nations shall worship before you. For kingship belongs to the LORD, and he rules over the nations." The kingship that belongs to the LORD is exercised through the Servant who is both Israel's King and the nations' Ruler. Psalm 117 is the lyric of that reign.`,
              },
              {
                color: ROSE,
                title: "Paul's Use of Psalm 117: The Gospel Breaks All Boundaries",
                refs: "Psalm 117:1; Romans 15:7-13; Galatians 3:28; Ephesians 2:11-22",
                body: `Paul's quotation of Psalm 117:1 in Romans 15:11 is the third in a chain of four OT citations proving that the inclusion of Gentiles in the praise of God was always God's plan. Paul places this quotation between texts from Psalms, Deuteronomy, and Isaiah -- a representative sampling from the three main sections of the Hebrew canon (Torah, Prophets, Writings) to demonstrate that the Gentile mission is not innovation but fulfillment.

The context in Romans 15:7-13 is unity between Jewish and Gentile believers: "Welcome one another as Christ has welcomed you, for the glory of God" (15:7). Paul's argument is that Christ came to serve both Jew and Gentile, fulfilling the covenant promises to Israel and extending mercy to the Gentiles. The four OT citations are the scriptural proofs that this unified community was always the goal. Psalm 117 specifically proves that the Gentiles were always being invited into the same praise that Israel offered.

This has immediate ecclesiological implications. If the nations have been called to praise the God of Israel since Psalm 117, then a church that is ethnically homogeneous is not yet fully expressing the vision of Scripture. Ephesians 2:11-22 describes the dramatic reconciliation of Jew and Gentile as the central exhibit of God's power -- "the dividing wall of hostility" broken down, creating "one new man," the new humanity of the church. The gathering of all nations in Revelation 7 is not a future footnote but the present mandate: make disciples of all nations (Matthew 28:19).

Galatians 3:28: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus." This is the social reality that Psalm 117 anticipates: all the categories that separated the nations from the worship of YHWH have been overcome in Christ. The command to "all nations" is now fulfilled by a church drawn from all nations.`,
              },
              {
                color: GREEN,
                title: "The Logic of Doxology: Why Praise Is the Goal of Creation",
                refs: "Psalm 117:2; Isaiah 43:7; Ephesians 1:12; Romans 11:36; Philippians 2:11",
                body: `Psalm 117 ends where it begins: Hallelu-Yah. The psalm is pure doxology -- praise that has no other purpose than the glorification of God. In a culture that evaluates everything by its utility and outcome, the idea of praise as an end in itself requires explanation.

The biblical answer is that doxology is not a means to some other end; it is the end. Isaiah 43:7 states God's purpose in creating: "everyone who is called by my name, whom I created for my glory, whom I formed and made." Paul in Ephesians 1:12 says the purpose of redemption is "that we who were the first to hope in Christ might be to the praise of his glory." Romans 11:36 ends the great theological section with pure doxology: "For from him and through him and to him are all things. To him be glory forever. Amen." The movement is from God, through God, to God -- and the proper response of everything that exists is doxological return.

The great question of meaning -- why do anything? why suffer? why persevere? -- finds its answer in doxology. We exist for the praise of God's glory. This is not servitude but freedom: to be aligned with one's created purpose is liberation, not bondage. C. S. Lewis observed that praise is the natural completion of enjoyment -- we cannot truly experience something wonderful without wanting to share it and celebrate it. To praise God is to complete the enjoyment of God, to fulfill the purpose for which we were made.

Psalm 117's call to all nations is therefore not a narrowly religious request but an anthropological statement: every human being, in every nation, in every culture, was created for this -- to praise the LORD. The nations that have not yet come to this praise are not yet living into their created purpose. The Gentile mission is therefore not cultural imperialism but the most humanizing act possible: inviting people into the purpose for which they were made.`,
              },
            ].map((theme) => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: theme.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Theme</div>
                <h3 style={{ color: TEXT, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{theme.title}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{theme.refs}</div>
                {theme.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* -- VERSE BY VERSE -- */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 28px" }}>
              <h2 style={{ color: PURPLE, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 117 -- 2 verses: command, reason, closing Hallel</p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "24px 28px" }}>
              <h3 style={{ color: PURPLE, fontSize: 17, fontWeight: 700, margin: "0 0 16px" }}>The Full Text (ESV)</h3>
              <div style={{ background: BG, borderRadius: 8, padding: "20px 24px", border: `1px solid ${BORDER}`, fontStyle: "italic" }}>
                <p style={{ color: TEXT, lineHeight: 1.9, margin: "0 0 12px", fontSize: 16 }}
                  dangerouslySetInnerHTML={{ __html: "Praise the LORD, all nations! Extol him, all peoples!<br/>For great is his steadfast love toward us, and the faithfulness of the LORD endures forever.<br/>Praise the LORD!" }} />
                <div style={{ color: MUTED, fontSize: 13 }}>Psalm 117:1-2 (ESV)</div>
              </div>
            </div>

            {[
              { v: "1a", ref: "Command: Praise the LORD (Hallelu-Yah)", color: PURPLE, text: "\"Praise the LORD, all nations!\" The opening imperative is addressed to an unexpected audience: not Israel, not the covenant community, but &ldquo;all nations&rdquo; (kol goyim) -- the Gentiles, those outside the covenant. This is one of the most expansive opening addresses in the entire Psalter. The command is not merely permission or invitation; it is a positive imperative. The nations are commanded to praise YHWH. The grounds for this command are theological: YHWH is not merely the national god of Israel but the God of all creation, and the proper response of all creation to its Creator is praise. Paul quotes this in Romans 15:11 as proof that the Gentile mission was God's purpose from the beginning of Israel's worship." },
              { v: "1b", ref: "Extol Him, All Peoples", color: PURPLE, text: "\"Extol him, all peoples!\" The parallel line adds &ldquo;all peoples&rdquo; (kol haumim) to &ldquo;all nations.&rdquo; Hebrew poetry regularly uses synonymous parallelism, but here the repetition serves to emphasize completeness: no nation, no people group, no ethnic community is excluded from this command. The verb &ldquo;extol&rdquo; (shabach) means to laud, commend, or praise loudly -- it has a celebratory and public dimension. The praise of all nations is not a private religious experience but a public cosmic acknowledgment. Spurgeon: &ldquo;The song is as wide as the world. The LORD is the God of all nations, and all nations are bound to praise him.&rdquo;" },
              { v: "2a", ref: "The Reason: Steadfast Love and Faithfulness", color: TEAL, text: "\"For great is his steadfast love toward us, and the faithfulness of the LORD endures forever.\" The reason for the nations' praise is God's covenant dealing with Israel (&ldquo;toward us&rdquo;). The two attributes -- hesed (steadfast love, lovingkindness, covenant loyalty) and emet (faithfulness, truth, reliability) -- are the pair that appear together throughout the Psalter and are the core of God's self-disclosure in Exodus 34:6. The nations are called to praise God for what he has done for Israel because that action reveals his character, which is the same character available to all who come to him. Matthew Henry: &ldquo;The experience of Israel becomes the invitation to the nations -- come and see what God does for those who trust him.&rdquo;" },
              { v: "2b", ref: "Hallelu-Yah: The Closing Frame", color: PURPLE, text: "\"Praise the LORD!\" The psalm closes with the same &ldquo;Hallelu-Yah&rdquo; (praise Yah) with which the Egyptian Hallel opened in Psalm 113:1. The inclusion is complete: from the opening &ldquo;praise the LORD, O servants of the LORD&rdquo; to the closing &ldquo;praise the LORD, all nations.&rdquo; The circle of praise has expanded from the servants of Israel's God to all nations and all peoples. This expansion is the trajectory of the entire Bible in miniature. Kidner: &ldquo;This briefest of psalms contains the longest view in the Psalter: the ends of the earth joining the congregation of Israel in the worship of the living God.&rdquo;" },
            ].map((item) => (
              <div key={item.v} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: item.color, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 13, fontWeight: 700, minWidth: 36, textAlign: "center", flexShrink: 0 }}>
                    {item.v}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -- APPLICATION -- */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h2 style={{ color: PURPLE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 117 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Two verses. The center of the Bible. The biggest vision in the smallest package: all nations praising the LORD. Psalm 117 expands the frame of our faith from the local to the global and from the personal to the universal -- without making it less personal. The hesed and emet of God toward Israel are available to all nations, and we who have received them are sent to announce them." }} />
            </div>

            {[
              {
                color: PURPLE,
                title: "1. Expand Your Vision to Match Scripture's Vision",
                body: `Psalm 117's call to "all nations" is a corrective to the small vision that most Christians carry. We pray for our church, our city, our country. We are grateful for what God has done for us. But the biblical vision is global: every nation, every people group, every language, every ethnic community praising the LORD. Revelation 7:9 describes the fulfillment: "a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne."

This global vision is not abstract; it has concrete practical implications. The church's mission is to make disciples of "all nations" (Matthew 28:19) -- a command that uses the same Greek word (ethne, peoples/nations) that Psalm 117 uses for its universal scope. Every local church is part of a global movement. Every act of evangelism, every cross-cultural relationship, every financial investment in global missions is participation in the fulfillment of Psalm 117.

Practically: expand your prayer to include the nations. The "10/40 Window" (the band between 10 and 40 degrees north latitude where the majority of unreached peoples live) contains billions of people who have never heard the gospel. Adopt a specific people group in prayer. Learn about a culture different from yours. Support a missionary from your congregation. Let the "all nations" of Psalm 117 become the "all nations" of your prayer list.`,
                prayer: "Lord, forgive me for the smallness of my vision. You are calling all nations to praise. Expand my heart to match your vision. Show me which nations, which peoples, I am called to pray for and serve.",
              },
              {
                color: TEAL,
                title: "2. Let God's Hesed for Israel Fuel Your Trust",
                body: `The nations are called to praise God for his hesed and emet "toward us" -- toward Israel. The logic is: if you have seen what God does for his covenant people, you have grounds for trust. The track record of divine faithfulness to Israel across millennia is the evidence base for all human trust in God.

This is why reading the OT is not optional but essential for Christian faith. The stories of God's faithfulness to Abraham, Isaac, Jacob, Joseph, Moses, David, Elijah, the exile community, the returning remnant -- these are the database of divine hesed. They are not ancient history; they are the grounds for present confidence. God who never failed Israel will not fail those who come to him through Israel's Messiah.

Jesus himself is the ultimate demonstration of God's hesed and emet. Romans 15:8-9 says he came to "confirm the promises given to the patriarchs" (emet -- faithfulness to covenant) "in order that the Gentiles might glorify God for his mercy" (hesed -- covenant love extended to the nations). In the person of Jesus Christ, the hesed and emet of Psalm 117:2 are incarnated, demonstrated, and universally extended. When you trust Jesus, you are trusting the God whose faithfulness stretches from Abraham to the present moment, and will continue to the end of time.`,
                prayer: "Lord, your steadfast love toward your people throughout history is my evidence for trust today. You were faithful to Abraham, to Moses, to David, to the exiles. You are faithful to me. Let the track record of your hesed fill me with confidence.",
              },
              {
                color: GOLD,
                title: "3. Read and Pray the Psalter as Mission Formation",
                body: `Psalm 117's placement in the Egyptian Hallel -- sung at the Passover Seder -- means that the most Jewish of all liturgies contained within itself a call to the nations. The celebration of Israel's liberation from Egypt included a vision of the nations joining the celebration. This means the Psalter itself is missionally shaped: it is not simply the devotional literature of a closed community but the worship manual of a community on mission to all peoples.

Praying through the Psalter -- which the church has done in every generation since the NT -- is a form of mission formation. The Psalter repeatedly breaks out of Israelite particularity to address the nations: Psalm 2:8 ("Ask of me, and I will make the nations your heritage"); Psalm 22:27 ("All the ends of the earth shall remember and turn to the LORD"); Psalm 67 (a psalm that is essentially Psalm 117 in expanded form); Psalm 96 ("Sing to the LORD, all the earth!"). To pray these psalms is to be shaped by their vision.

The discipline: as you read through the Psalter, mark every verse that mentions the nations, the Gentiles, the ends of the earth, all peoples. You will find that the Psalter is saturated with mission. Then let those verses form your prayer: "Lord, fulfill this. Bring the nations. Gather all peoples into your praise." You are praying the prayers that Jesus prayed at the Passover table, and you are participating in the movement that Psalm 117 describes in miniature.`,
                prayer: "Lord, make me a person shaped by the vision of Psalm 117. Let my worship not be bounded by my culture or comfort zone. Give me your vision: all nations, all peoples, extolling your name.",
              },
              {
                color: GREEN,
                title: "4. Live as Part of the Answer to Psalm 117",
                body: `Psalm 117 is both a command and a promise. As a command, it calls the nations to praise; as a promise, it anticipates the day when that praise will be universal. The church exists between the command and the fulfillment -- called to bring the nations into the praise by living and proclaiming the gospel.

Every Christian is therefore a partial answer to Psalm 117. When you share the gospel with someone from another culture, you are helping to fulfill the psalm's vision. When you welcome the immigrant neighbor with the love of Christ, you are creating the conditions for the nations' praise. When you financially support global missions, you are extending the reach of the hesed and emet that grounds the nations' praise. When your church is diverse across ethnic and cultural lines, you are a visible witness that the nations' gathering has begun.

The final scene of Revelation is the eternal fulfillment: "by its light will the nations walk, and the kings of the earth will bring their glory into it... they will bring into it the glory and the honor of the nations" (21:24-26). The nations' praise that Psalm 117 commands is the nations' participation in the eternal city. You are part of the movement that is gathering those nations. Let that be your identity and your vocation.`,
                prayer: "Lord, use me as part of the answer to Psalm 117. Let my life, my witness, my church, my resources be instruments by which the nations are brought into your praise. Come quickly, Lord Jesus -- gather your people from every tribe and language and people and nation.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Application</div>
                <h3 style={{ color: TEXT, fontSize: 19, fontWeight: 700, margin: "0 0 14px" }}>{item.title}</h3>
                {item.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                <div style={{ background: BG, border: `1px solid ${item.color}33`, borderRadius: 8, padding: "14px 18px", marginTop: 8 }}>
                  <div style={{ color: item.color, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Prayer</div>
                  <p style={{ color: MUTED, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: 14 }}
                    dangerouslySetInnerHTML={{ __html: item.prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px", textAlign: "center" }}>
              <p style={{ color: MUTED, fontStyle: "italic", fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Praise the LORD, all nations! Extol him, all peoples!<br/>For great is his steadfast love toward us, and the faithfulness of the LORD endures forever.<br/>Praise the LORD!&rdquo;<br/>Psalm 117:1-2" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
