"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
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
    heading: "Overview: Children of Light",
    reference: "1 Thessalonians 5:1&ndash;28",
    paragraphs: [
      "First Thessalonians 5 is the culmination of a letter that has been simultaneously pastoral and theological from its opening verse. Paul has recalled the founding of the Thessalonian church, expressed his longing to see the believers there, prayed for their holiness, and in chapter 4 addressed both the call to sanctified living and the hope of resurrection for those who have died in Christ. Now in chapter 5 he turns to the question of timing &mdash; when will the day of the Lord come? &mdash; and then delivers, in the space of a few verses, one of the most concentrated collections of practical instructions anywhere in his letters. The chapter closes with a benediction of extraordinary beauty and theological depth: &ldquo;Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ&rdquo; (5:23).",
      "The chapter divides naturally into three movements. The first movement (vv.1&ndash;11) addresses the timing of the day of the Lord: Paul does not know when it will come, and he does not pretend to. What he knows is that it will come suddenly, &ldquo;like a thief in the night,&rdquo; and that the Thessalonians belong to the day rather than the night, to the light rather than the darkness. This belonging is not a matter of moral achievement but of identity: they are &ldquo;children of light and children of the day.&rdquo; Their response to this identity is to be watchful and sober, clothed with faith, love, and the hope of salvation &mdash; a set of images that recalls the warrior putting on armor. The section closes with the purpose of these exhortations: whether we wake or sleep, we live with him (v.10), and we are to encourage one another and build one another up.",
      "The second movement (vv.12&ndash;22) is the famous rapid-fire series of short commands that makes this chapter unique in the Pauline corpus. Nowhere else does Paul pack so many distinct imperatives into so short a space. Respect and esteem church leaders. Be at peace among yourselves. Admonish the idle. Encourage the fainthearted. Help the weak. Be patient with everyone. Do not repay evil for evil. Always pursue good. Rejoice always. Pray without ceasing. Give thanks in all circumstances. Do not quench the Spirit. Do not despise prophecies. Test everything. Hold fast to what is good. Abstain from every form of evil. These are not seven loosely related suggestions; they are a compressed description of what Christian community life looks like when it is functioning as God intends. Each command is a world in itself; together they paint a portrait of a community shaped by eschatological hope, mutual care, openness to the Spirit, and discernment.",
      "The third movement (vv.23&ndash;28) is the closing benediction and final instructions. The benediction is notable for its comprehensiveness: God the God of peace is to sanctify the Thessalonians completely, and their whole spirit and soul and body is to be kept blameless. This is total-person sanctification, not the improvement of one department of life but the transformation of the whole self. And the agent of this transformation is God himself, not the Thessalonians&rsquo; own striving: &ldquo;He who calls you is faithful; he will surely do it&rdquo; (v.24). The chapter &mdash; and the letter &mdash; closes with the confidence that the same God who called the Thessalonians to holiness will accomplish that holiness in them by his own faithful power.",
      "First Thessalonians 5 is a chapter that rewards slow reading. The rapid-fire commands can feel like a list to be checked off, but they are better understood as a description of a community and a life that has been captured by eschatological seriousness. The day of the Lord is coming; therefore, be who you are as children of light. Build one another up. Pray without ceasing. Do not quench the Spirit. And trust the God of peace to do in you what you could never do in yourself.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of 1 Thessalonians 5",
    reference: "1 Thessalonians 5:1&ndash;28",
    paragraphs: [
      "The first and foundational theme of 1 Thessalonians 5 is the day of the Lord &mdash; its certainty, its suddenness, and its moral implications. Paul&rsquo;s language draws on a rich tradition of Old Testament prophetic expectation (Amos 5:18; Joel 2; Zephaniah 1) in which the day of the Lord is a day of reckoning, of decisive divine intervention in history. For Paul, writing in the light of the resurrection of Jesus, the day of the Lord has been reframed but not dissolved: it is the day of the Lord&rsquo;s return, the culmination of the story that began at Easter. Its timing is deliberately kept secret: &ldquo;concerning the times and the seasons, brothers, you have no need to have anything written to you&rdquo; (v.1), because &ldquo;the day of the Lord will come like a thief in the night&rdquo; (v.2). The thief does not announce his arrival; the day of the Lord will not either. This unknowing is not a problem to be solved but a condition to be inhabited with watchfulness.",
      "The second major theme is the identity of believers as children of light. &ldquo;But you are not in darkness, brothers, for that day to surprise you like a thief. For you are all children of light and children of the day. We are not of the night or of the darkness&rdquo; (vv.4&ndash;5). This is a striking statement: the Thessalonians&rsquo; preparedness for the day of the Lord is not primarily about moral vigilance but about identity. They belong to the day; the day is their home. The sudden arrival of the day of the Lord will surprise those who are of the darkness, but not those who are already living in the light. The ethical imperatives that follow &mdash; keep awake, be sober, put on the breastplate of faith and love and the helmet of the hope of salvation &mdash; are not the means by which one becomes a child of light but the natural expression of being one.",
      "The third theme is the extraordinary concentrated burst of community ethics in verses 12&ndash;22, often called the &ldquo;rapid-fire commands.&rdquo; These commands are remarkable both for their brevity and their range. They move from leadership (respect those who labor among you) to community maintenance (be at peace, admonish the idle, encourage the fainthearted) to response to wrongdoing (do not repay evil for evil) to individual spiritual disciplines (rejoice always, pray without ceasing, give thanks) to communal discernment (do not quench the Spirit, test everything). Together they describe a community that is characterized by mutual accountability, constant communion with God, active care for the vulnerable, and discriminating openness to the Spirit&rsquo;s movement. No single command can be lifted out and treated as a complete program; they belong together as facets of a single life.",
      "The fourth theme is the sanctification of the whole person. The closing benediction of verses 23&ndash;24 is one of the most theologically significant passages in the Pauline letters on the nature and scope of sanctification. &ldquo;Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ.&rdquo; Several things are striking here. First, the agent of sanctification is God himself &mdash; it is something he does, not merely something the Thessalonians do. Second, the scope is complete: the whole person, spirit and soul and body, is to be sanctified. Third, the goal is blamelessness at the coming of the Lord &mdash; the eschatological horizon governs the present experience. And fourth, the guarantee is the faithfulness of the caller: &ldquo;He who calls you is faithful; he will surely do it.&rdquo; Sanctification is not the Thessalonians&rsquo; achievement; it is God&rsquo;s faithful keeping of his own purposes.",
      "A fifth theme worth noting is the relationship between prayer and the life of the community. The command to &ldquo;pray without ceasing&rdquo; (v.17) is not an instruction to be perpetually on one&rsquo;s knees but to live in an ongoing posture of dependence and communion with God that permeates all of life &mdash; work, relationships, decision-making, eating, resting. The command to &ldquo;give thanks in all circumstances&rdquo; (v.18) extends this into the specific practice of gratitude even in difficulty. And the warning not to quench the Spirit (v.19) places this life of prayer within the broader context of communal openness to God&rsquo;s ongoing activity. The community that prays without ceasing is the community that remains open to the Spirit&rsquo;s leading, that tests what it hears, and that holds fast to what is good.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse: 1 Thessalonians 5",
    reference: "1 Thessalonians 5:1&ndash;28",
    paragraphs: [
      "<strong>Verses 1&ndash;3: The Day of the Lord Like a Thief.</strong> Paul opens chapter 5 with a deliberately brief treatment of &ldquo;the times and the seasons&rdquo; because, as he says, the Thessalonians have no need of anything written to them &mdash; they already know that the day of the Lord comes like a thief in the night (v.2). The thief image, shared with Jesus&rsquo; own teaching (Matthew 24:43; Luke 12:39) and later with 2 Peter 3:10 and Revelation 3:3, captures the irreducible unknowability of the day. Verse 3 sharpens the warning with a brutally ironic image: &ldquo;While people are saying, &lsquo;There is peace and security,&rsquo; then sudden destruction will come upon them as labor pains come upon a pregnant woman, and they will not escape.&rdquo; &ldquo;Peace and security&rdquo; was a specific Roman political slogan, a claim made by the imperial regime about the stability it guaranteed. Paul&rsquo;s use of it here is pointed: the very moment when human systems are proclaiming their own sufficiency, the day will break. The labor pains image is equally striking: the onset is sudden and the delivery is inevitable. There is no stopping it once it begins.",
      "<strong>Verses 4&ndash;8: Children of Light and Children of the Day.</strong> The contrast between darkness and light, night and day, dominates this section. Paul draws the sharpest possible line between the Thessalonians&rsquo; identity and the world&rsquo;s: &ldquo;But you are not in darkness, brothers, for that day to surprise you like a thief. For you are all children of light and children of the day&rdquo; (vv.4&ndash;5). The ethical implications follow from the identity: &ldquo;So then let us not sleep, as others do, but let us keep awake and be sober&rdquo; (v.6). Those who sleep and are drunk, Paul notes, do so at night; the children of the day belong to a different realm. Verses 7&ndash;8 introduce the armor imagery: &ldquo;putting on the breastplate of faith and love, and for a helmet the hope of salvation.&rdquo; This anticipates Ephesians 6 but in a more compressed form, and it ties the armor directly to the theological virtues of faith, love, and hope that run through the whole letter. The watchfulness called for is not anxious vigilance but the sober alertness of people who know who they are.",
      "<strong>Verses 9&ndash;11: Destined for Salvation, Not Wrath.</strong> Paul grounds the exhortation to watchfulness in the most fundamental theological reality: &ldquo;For God has not destined us for wrath but to obtain salvation through our Lord Jesus Christ, who died for us so that whether we are awake or asleep we might live with him&rdquo; (vv.9&ndash;10). The phrase &ldquo;whether we are awake or asleep&rdquo; revisits the concern of chapter 4 about those who have died: both the living and the dead in Christ are destined for the same salvation. The death of Christ is the ground of that destination. And the practical conclusion is communal: &ldquo;Therefore encourage one another and build one another up, just as you are doing&rdquo; (v.11). The eschatological hope of salvation is not merely a private comfort; it is the fuel for the mutual encouragement of the community.",
      "<strong>Verses 12&ndash;15: Respect, Peace, and Pastoral Care.</strong> The first cluster of rapid-fire commands concerns the internal ordering of the community. Verses 12&ndash;13 call for proper recognition of church leaders: &ldquo;We ask you, brothers, to respect those who labor among you and are over you in the Lord and admonish you, and to esteem them very highly in love because of their work.&rdquo; The basis of honor is the work itself &mdash; the labor of leadership and admonishment &mdash; not merely the office. Verse 13 ends with a command that holds everything together: &ldquo;Be at peace among yourselves.&rdquo; Verses 14&ndash;15 then turn to specific pastoral responsibilities of the whole community: admonish the idle (or disorderly); encourage the fainthearted; help the weak; be patient with them all. This is a comprehensive account of pastoral care that distributes responsibility across the whole body, not just the leaders. And verse 15 adds the non-retaliation command: &ldquo;See that no one repays anyone evil for evil, but always seek to do good to one another and to everyone.&rdquo;",
      "<strong>Verses 16&ndash;22: The Rapid-Fire Commands &mdash; Rejoice, Pray, Give Thanks.</strong> Verses 16&ndash;18 contain three of the most famous commands in the Pauline letters, arranged in an unmistakable rhetorical pattern: &ldquo;Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.&rdquo; Each command is an extreme: not sometimes but always; not frequently but without ceasing; not in good circumstances but in all circumstances. Paul then adds the remarkable claim that this rejoicing-praying-thanking pattern is &ldquo;the will of God in Christ Jesus for you&rdquo; &mdash; answering the perpetual question about God&rsquo;s will with something that has nothing to do with job selection or geographic location and everything to do with the interior posture of the heart before God. Verses 19&ndash;22 then address the community&rsquo;s relationship to the Spirit and to prophetic speech: &ldquo;Do not quench the Spirit. Do not despise prophecies, but test everything; hold fast what is good. Abstain from every form of evil.&rdquo; The pairing of &ldquo;do not quench&rdquo; with &ldquo;test everything&rdquo; is the balanced posture Paul calls for: genuine openness to the Spirit&rsquo;s movement together with active discernment of what that movement actually looks like.",
      "<strong>Verses 23&ndash;28: The Benediction and Final Greetings.</strong> The letter closes with one of Paul&rsquo;s most theologically rich benedictions: &ldquo;Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ. He who calls you is faithful; he will surely do it&rdquo; (vv.23&ndash;24). The title &ldquo;God of peace&rdquo; has particular resonance after the chaos and grief and persecution the Thessalonians have experienced; this is the God who brings shalom, whose purposes are not disrupted by suffering or death. The comprehensiveness of &ldquo;wholly&rdquo; and &ldquo;whole spirit and soul and body&rdquo; rejects every form of spiritual dualism that would save the soul while abandoning the body or improve some parts of the person while leaving others untouched. God&rsquo;s sanctifying work is total. And the guarantee &mdash; &ldquo;he will surely do it&rdquo; &mdash; rests entirely on the faithfulness of the caller, not the constancy of the called. Paul closes with a request for prayer (v.25), the holy kiss (v.26), the solemn charge that the letter be read to all the brothers (v.27), and the grace benediction (v.28) that is Paul&rsquo;s invariable letter-closing signature.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living as Children of Light",
    reference: "1 Thessalonians 5:1&ndash;28",
    paragraphs: [
      "The first great application of 1 Thessalonians 5 is the call to inhabit eschatological identity rather than merely hold eschatological belief. Paul does not say &ldquo;since the day of the Lord is coming, be morally better.&rdquo; He says &ldquo;you are children of light; therefore live like it.&rdquo; The watchfulness and sobriety he calls for flow from who the Thessalonians already are in Christ, not from what they must achieve in order to be ready. This has profound practical implications: the Christian&rsquo;s motivation for holy living is not fear of being caught unprepared by the returning Lord but gratitude and identity &mdash; this is who we are; this is our home; this is the realm we already inhabit. The armor of faith, love, and hope is not a burden to be carried by those who are afraid; it is the natural equipment of those who know they are children of the day.",
      "The rapid-fire commands of verses 16&ndash;22 invite a specific kind of daily application. Taken individually, each command is a complete spiritual discipline in itself: &ldquo;Rejoice always&rdquo; is a lifelong practice of reorienting the heart toward God&rsquo;s goodness even when circumstances are painful. &ldquo;Pray without ceasing&rdquo; is the cultivation of a continuous interior awareness of God&rsquo;s presence that refuses to compartmentalize prayer into scheduled times and leaves everything else secular. &ldquo;Give thanks in all circumstances&rdquo; is the specific practice of looking for and naming God&rsquo;s work even in suffering, not a toxic positivity that denies pain but a trained attention that finds God present even in the dark. Taken together, these three form an integrated rhythm of the inner life that, practiced over years, reshapes the entire orientation of the soul.",
      "The pastoral instructions of verses 12&ndash;15 offer a vision of community care that is distributed across the whole body rather than concentrated in the leaders. The community is to admonish the idle, encourage the fainthearted, and help the weak &mdash; not only the pastors but all of us. This has direct application for small group life, for friendship within the church, for the way members relate to one another outside of formal ministry settings. Who in your community is idle &mdash; perhaps stuck, perhaps in a pattern of drift &mdash; and needs a gentle, truthful word? Who is fainthearted &mdash; near despair, struggling to believe, barely holding on &mdash; and needs specifically the gift of encouragement? Who is weak &mdash; fragile in body or spirit or faith &mdash; and needs to be helped, not fixed? Paul&rsquo;s vision of Christian community is one in which these questions are asked and answered by the whole body, not outsourced to specialists.",
      "The balance between &ldquo;do not quench the Spirit&rdquo; and &ldquo;test everything&rdquo; in verses 19&ndash;21 speaks directly to one of the perennial tensions in Christian community life: how to remain genuinely open to the Spirit&rsquo;s movement while exercising appropriate discernment about what is truly from the Spirit and what is not. Both errors are real. Quenching the Spirit by skeptically dismissing every claim of prophetic speech or miraculous activity is a genuine impoverishment; it protects against false fire at the cost of having no fire at all. But failing to test &mdash; accepting every impression, every word, every claimed revelation without discernment &mdash; opens the community to manipulation, error, and harm. The Pauline balance is neither reflexive acceptance nor reflexive rejection but the patient, prayerful work of testing by the touchstone of the word of God and the community&rsquo;s shared wisdom.",
      "Finally, the closing benediction of verses 23&ndash;24 speaks an essential word to everyone who has tried hard to become holy and found that trying hard is not quite the same as becoming holy. &ldquo;He who calls you is faithful; he will surely do it.&rdquo; Sanctification is not a project we complete; it is a work God does in us. That is not an invitation to passivity &mdash; the rapid-fire commands of the preceding verses make that clear &mdash; but it is a liberation from the grinding anxiety of self-improvement projects that can never finally satisfy. The God of peace who calls us into his peace will himself bring to completion the work he has begun. The blamelessness Paul prays for at the coming of Christ is not our achievement; it is God&rsquo;s faithful gift to those he has called. We cooperate, we practice, we pray without ceasing &mdash; and we trust the faithful caller to do what we cannot do for ourselves.",
    ],
  },
];

const videoItems = [
  { videoId: "No_3lCm2HpA", title: "BibleProject - Overview of 1 Thessalonians" },
  { videoId: "4T0p3tws4aQ", title: "1 Thessalonians 5 - Children of Light and the Day of the Lord" },
  { videoId: "8M_nExTMxMs", title: "Rejoice Always, Pray Without Ceasing - 1 Thessalonians 5:16-18" },
  { videoId: "zB14oPBpGXE", title: "Do Not Quench the Spirit - Testing and Discernment in 1 Thessalonians 5" },
];

export default function FirstThessalonians5GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Thessalonians 5: Children of Light and the Day of the Lord
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Watchful readiness, the rhythm of rejoicing and praying and giving thanks, care for the community, openness to the Spirit with discernment &mdash; and the God of peace himself sanctifying you completely, for he who calls you is faithful.
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
              Deepen your study of 1 Thessalonians 5 through visual teaching on the day of the Lord, children of light, rejoicing and praying and giving thanks, not quenching the Spirit, and the God of peace sanctifying you completely.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Who Calls You Is Faithful; He Will Surely Do It</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Thessalonians 5 holds together the urgency of eschatological readiness and the confidence of God&rsquo;s faithful keeping. The day of the Lord will come like a thief &mdash; but you are children of the day, and the God of peace himself will sanctify you wholly, body and soul and spirit, blameless at the coming of the Lord.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.&rdquo; &mdash; 1 Thessalonians 5:16&ndash;18" }} />
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Identity Claim</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "You are not in darkness. You are all children of light and children of the day. The day of the Lord will not surprise you as a thief &mdash; you belong to the day." }} />
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>The Guarantee</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "He who calls you is faithful &mdash; he will surely do it. Sanctification is God&rsquo;s faithful work in those he has called, not merely our own striving." }} />
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>The Structure of 1 Thessalonians 5</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { ref: "vv. 1&ndash;3", label: "The Day Like a Thief", note: "The sudden arrival of the day of the Lord; sudden destruction when people say peace and security" },
              { ref: "vv. 4&ndash;8", label: "Children of Light", note: "Identity before imperative -- you belong to the day; therefore keep awake and be sober" },
              { ref: "vv. 9&ndash;11", label: "Destined for Salvation", note: "God has not destined us for wrath; Christ died so we might live with him; encourage one another" },
              { ref: "vv. 12&ndash;15", label: "Community Care", note: "Honor leaders; be at peace; admonish the idle, encourage the fainthearted, help the weak" },
              { ref: "vv. 16&ndash;22", label: "Rejoice, Pray, Give Thanks", note: "The rapid-fire commands: rejoice always, pray without ceasing, do not quench the Spirit, test everything" },
              { ref: "vv. 23&ndash;28", label: "The Faithful God", note: "God of peace sanctifying you completely; he who calls you is faithful, he will surely do it" },
            ].map((row) => (
              <div key={row.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ minWidth: 90, color: ACCENT, fontWeight: 700, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: row.ref }} />
                <div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: row.label }} />
                  <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginTop: 2 }} dangerouslySetInnerHTML={{ __html: row.note }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>The Rapid-Fire Commands</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              "Respect those who labor among you",
              "Esteem them very highly in love",
              "Be at peace among yourselves",
              "Admonish the idle",
              "Encourage the fainthearted",
              "Help the weak",
              "Be patient with them all",
              "Do not repay evil for evil",
              "Always pursue what is good",
              "Rejoice always",
              "Pray without ceasing",
              "Give thanks in all circumstances",
              "Do not quench the Spirit",
              "Do not despise prophecies",
              "Test everything",
              "Hold fast what is good",
              "Abstain from every form of evil",
            ].map((cmd) => (
              <div key={cmd} style={{ background: `${BG}`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: MUTED, fontSize: "0.9rem", lineHeight: 1.5 }}>
                {cmd}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Reflection Questions</h3>
          <ol style={{ color: MUTED, lineHeight: 1.85, margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: 10 }}>
            <li dangerouslySetInnerHTML={{ __html: "How does living as a &ldquo;child of light&rdquo; change your motivation for watchfulness and holy living? Is your vigilance driven more by fear or by identity?" }} />
            <li dangerouslySetInnerHTML={{ __html: "Which of the rapid-fire commands in verses 12&ndash;22 is hardest for you personally? Which community member or spiritual discipline does it call you toward?" }} />
            <li dangerouslySetInnerHTML={{ __html: "What does it look like in your daily life to &ldquo;pray without ceasing&rdquo; &mdash; not merely to pray more often but to maintain a posture of ongoing communion with God?" }} />
            <li dangerouslySetInnerHTML={{ __html: "How do you hold together &ldquo;do not quench the Spirit&rdquo; and &ldquo;test everything&rdquo; in your own community? Where do you tend toward one error or the other?" }} />
            <li dangerouslySetInnerHTML={{ __html: "The promise is that God himself will sanctify you completely. Where do you most need to trust his faithfulness rather than relying on your own striving?" }} />
          </ol>
        </div>
      </main>
    </div>
  );
}
