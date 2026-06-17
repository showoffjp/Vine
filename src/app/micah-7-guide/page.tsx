"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706";

export default function Micah7GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "hYiATMeZ_eo", title: "Micah 7: As for Me I Will Look to the LORD" },
    { id: "vBxJ8dJ6fPY", title: "Who Is a God Like You? - Micah 7 Study" },
    { id: "g3LUx2UQKZM", title: "Sins Cast into the Sea - Micah 7:18-20 Explained" },
    { id: "nBfC3PXAZ0Q", title: "Micah 7 Commentary - Lament Trust and Triumph" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${GREEN}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }}>
          Old Testament Study
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
          Micah 7 &mdash; Who Is a God Like You?
        </h1>
        <p style={{ color: MUTED, maxWidth: 660, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.75 }}>
          From the depths of lament over social collapse to the heights of incomparable grace &mdash; the prophet who chose to trust, and the God who hurls sins into the depths of the sea.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontFamily: "inherit", fontSize: 14 }}>
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Overview: From Despair to Triumph
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              Micah 7:1&ndash;20
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Micah 7 is one of the most moving chapters in all of prophetic Scripture &mdash; a chapter that traces a breathtaking arc from the darkest social despair to one of the most luminous affirmations of divine grace in the entire Old Testament. The prophet stands at the end of his book and surveys his world with unsparing honesty, then makes a decision that changes everything: he chooses to look to the LORD. That decision, and its astonishing outcome, is what Micah 7 is about." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a grief that is almost physical in its intensity. &ldquo;Woe is me!&rdquo; cries the prophet, &ldquo;for I have become as when the summer fruit has been gathered, as when the grapes have been gleaned from the vine: there is no cluster to eat, no first-ripe fig that my soul desires&rdquo; (7:1). The image is of harvested fields &mdash; stripped bare, nothing left to gather. What the prophet cannot find is not food but faithful people. &ldquo;The godly has perished from the earth, and there is no one upright among mankind&rdquo; (7:2). He looks for integrity and finds none; he looks for trustworthy leaders and finds those who ask for bribes; he looks for family loyalty and finds betrayal." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "What makes this lament so striking is that it is not a personal complaint but a social diagnosis. The prophet is describing the comprehensive moral failure of his society &mdash; from the courts where the great man speaks his evil desire and the judge takes a bribe, to the family hearth where a son dishonors his father and a daughter rises against her mother (7:5&ndash;6). Jesus will quote this very passage in Matthew 10:35&ndash;36 when warning his disciples that following him will divide households. The social disintegration Micah describes is not unique to eighth-century Judah; it is the condition of any society that has abandoned the fear of God." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "And then comes the great pivot of the chapter &mdash; one of the most consequential &ldquo;but&rdquo; statements in all of Scripture: &ldquo;But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me&rdquo; (7:7). Everything turns on this verse. The lament is not resolved by a change in circumstances; it is resolved by a change in orientation. The prophet does not deny the darkness around him. He acknowledges it fully. But he refuses to let it be the final word. He chooses &mdash; and it is clearly a choice &mdash; to look to the LORD rather than to his circumstances." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The middle section of the chapter is remarkable for its confidence in the face of enemy taunts. &ldquo;Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me&rdquo; (7:8). This is not bravado; it is faith informed by the character of God. The speaker acknowledges that she has sinned and that the LORD&rsquo;s discipline is just (7:9), but she knows the discipline will not be the end. The enemy who says &ldquo;Where is the LORD your God?&rdquo; will see with her own eyes and be covered with shame (7:10)." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The book reaches its climax in 7:18&ndash;20, a passage so beautiful and so dense with theological weight that it has shaped the Jewish liturgy for millennia &mdash; it is read aloud on Yom Kippur as part of the Tashlich service. &ldquo;Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love. He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea&rdquo; (7:18&ndash;19). The question &ldquo;Who is a God like you?&rdquo; echoes the meaning of the prophet&rsquo;s own name &mdash; Micah means &ldquo;Who is like God?&rdquo; The entire book culminates in this unanswerable rhetorical question." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The final verse anchors God&rsquo;s forgiveness in his covenant faithfulness to the patriarchs: &ldquo;You will show faithfulness to Jacob and steadfast love to Abraham, as you have sworn to our fathers from the days of old&rdquo; (7:20). The forgiveness of sins is not a new divine impulse; it flows from promises made generations earlier. God&rsquo;s mercy has deep roots. And those roots, the New Testament will show, run all the way to the cross of Jesus Christ, where God publicly demonstrated that he could be both just and the justifier of those who have faith (Romans 3:26)." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.75rem 2rem", marginTop: "1rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>
                The Incomparable God
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "The name Micah means &ldquo;Who is like God?&rdquo; &mdash; and the final verses of his book answer that question with a resounding silence. No one. No other god pardons iniquity like this. No other god delights in steadfast love like this. No other god hurls his people&rsquo;s sins into the depths of the sea." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Key Themes
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              The Theological Heart of Micah 7
            </div>

            {[
              {
                id: "lament",
                title: "Lament as Honest Faith",
                content: "Micah 7 begins with one of the most honest expressions of grief in the prophetic literature. The prophet does not pretend that everything is fine; he does not offer pious platitudes to cover the darkness he sees. He laments. He names the specific ways in which his society has broken down &mdash; the corruption of the courts, the betrayal of neighbors, the collapse of family bonds. This willingness to name reality honestly, without flinching and without despair, is itself an act of faith. The lament is addressed to God; the prophet is not complaining to the air. He brings his grief and his diagnosis directly to the LORD, which means he has not given up on the LORD. To lament before God is to believe that God is present and that he cares. The Psalms of lament &mdash; which make up more than a third of the Psalter &mdash; teach the same thing: authentic relationship with God includes the full range of human experience, from ecstatic praise to anguished grief. Micah 7 models what it looks like to bring the darkness of the world into the presence of a God who is light."
              },
              {
                id: "as-for-me",
                title: "The &ldquo;As for Me&rdquo; Moment",
                content: "The pivot of Micah 7 is a single verse: &ldquo;But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me&rdquo; (7:7). The phrase &ldquo;as for me&rdquo; (&ldquo;wa&rsquo;ani&rdquo; in Hebrew) marks a personal, individual declaration that is set over against the social chaos just described. Everyone else is lying in wait for blood; neighbors cannot be trusted; families are divided. &ldquo;But as for me&rdquo; &mdash; here is a person who will not be swept along by the prevailing current. This is not arrogance; it is resolve. It is the moment of personal decision in which one person chooses to orient their life differently from the surrounding culture. Scripture is full of such moments: Joshua&rsquo;s &ldquo;As for me and my house, we will serve the LORD&rdquo; (Joshua 24:15); Daniel&rsquo;s resolve not to defile himself with the king&rsquo;s food (Daniel 1:8); Job&rsquo;s &ldquo;Though he slay me, I will hope in him&rdquo; (Job 13:15). The &ldquo;as for me&rdquo; moment is the moment in which faith becomes personal, concrete, and costly."
              },
              {
                id: "waiting",
                title: "Waiting on God in Dark Times",
                content: "Micah 7:7 names two activities that define the life of faith in dark seasons: looking and waiting. &ldquo;I will look to the LORD; I will wait for the God of my salvation.&rdquo; Waiting is one of the most countercultural and spiritually demanding activities in the biblical life. The surrounding culture always offers alternatives to waiting on God &mdash; alternatives that promise faster results, more tangible outcomes, more immediate relief. Micah&rsquo;s contemporaries were offered the option of political alliances, the worship of more accommodating gods, the clever manipulation of social structures. But the prophet chooses to wait. The Hebrew word for waiting (&ldquo;yachal&rdquo;) does not suggest passive resignation; it carries the sense of patient, expectant hope directed toward a specific object. One waits for something or someone. Micah waits for &ldquo;the God of my salvation&rdquo; &mdash; a God with a track record of rescuing his people. Waiting is therefore an act of memory and of confidence: I have seen this God save before, and I believe he will save again."
              },
              {
                id: "vindication",
                title: "Divine Vindication and Enemy Taunts",
                content: "The middle section of Micah 7 (verses 8&ndash;17) addresses the experience of living under enemy pressure while waiting for God. The taunting question &ldquo;Where is the LORD your God?&rdquo; (7:10) is one of the most devastating weapons in the arsenal of those who oppose the people of God. It is the question that cuts deepest when circumstances seem to contradict faith. If your God is real, where is he? Why doesn&rsquo;t he help you? The prophet&rsquo;s answer is not an argument but a declaration: &ldquo;Do not rejoice over me, O my enemy; when I fall, I shall rise&rdquo; (7:8). This is the language of confidence rooted not in current circumstances but in the character of God. The speaker acknowledges the fall &mdash; she is sitting in darkness, bearing the LORD&rsquo;s indignation &mdash; but knows it is not permanent. The God who disciplines will also restore. And when he restores, the enemy who taunted will be ashamed. The reversal is certain; only the timing remains in God&rsquo;s hands."
              },
              {
                id: "hesed",
                title: "Steadfast Love (Hesed) Over Anger",
                content: "The theological heart of Micah 7:18&ndash;20 is the assertion that God&rsquo;s anger, though real, is not his defining characteristic &mdash; his steadfast love (<em>hesed</em>) is. &ldquo;He does not retain his anger forever, because he delights in steadfast love&rdquo; (7:18). This is not a diminishment of divine wrath; the prophets take God&rsquo;s anger at sin extremely seriously. But wrath is not God&rsquo;s delight; <em>hesed</em> is. The Hebrew word &ldquo;delight&rdquo; (<em>haphets</em>) is the word used for something one takes deep pleasure in, something one desires. God is not grudgingly merciful; he is not looking for excuses to stay angry. His deepest desire is to show steadfast love. This same truth is embedded in the great self-disclosure of Exodus 34:6&ndash;7, where God declares himself &ldquo;abounding in steadfast love and faithfulness, keeping steadfast love for thousands, forgiving iniquity and transgression and sin.&rdquo; Micah 7 is the prophetic echo of that foundational self-revelation."
              },
              {
                id: "sea",
                title: "Sins Cast into the Depths of the Sea",
                content: "The most memorable image in Micah 7 is undoubtedly the promise of 7:19: &ldquo;You will cast all our sins into the depths of the sea.&rdquo; In the ancient Near Eastern world, the sea was associated with chaos, darkness, and the abyss &mdash; the unreachable deep where nothing could be recovered. To cast sins into the depths of the sea is to remove them so completely and so irreversibly that they can never be brought back. This image stands in vivid contrast to the common human experience of guilt, in which past failures are remembered, retrieved, and rehearsed again and again. God&rsquo;s forgiveness is not a filing away for possible future retrieval; it is a casting into the unreachable deep. Psalm 103:12 uses a different spatial image: &ldquo;As far as the east is from the west, so far does he remove our transgressions from us.&rdquo; Isaiah 44:22 speaks of God blotting out transgressions like a cloud. Each image makes the same point: divine forgiveness is complete and irreversible. The New Testament shows that this promise is grounded in the historical event of the cross, where Christ bore &ldquo;our sins in his body on the tree&rdquo; (1 Peter 2:24) &mdash; carrying them into the death from which they would never return."
              },
              {
                id: "covenant",
                title: "Covenant Faithfulness to Abraham",
                content: "The final verse of Micah grounds all the preceding promises in the bedrock of covenant: &ldquo;You will show faithfulness to Jacob and steadfast love to Abraham, as you have sworn to our fathers from the days of old&rdquo; (7:20). This is a crucial theological move. God&rsquo;s forgiveness is not an arbitrary divine impulse or a sentimental softness; it is the fulfillment of sworn promises made generations earlier. God promised Abraham that he would be a blessing to all the nations, that his offspring would possess the land, that through his seed all the families of the earth would be blessed (Genesis 12:1&ndash;3; 22:17&ndash;18). Those promises, ratified by solemn oath, bind God to his people in a way that transcends any particular generation&rsquo;s faithfulness or unfaithfulness. Paul argues in Galatians 3 and Romans 4 that the promises to Abraham were fulfilled in Christ, and that all who have faith in Christ are heirs of those same promises. The steadfast love that Micah sees flowing toward Israel flows, in Christ, to all who believe."
              },
            ].map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontWeight: 700, fontSize: "1rem", fontFamily: "Georgia, serif", textAlign: "left" }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  <span style={{ color: GREEN, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Verse by Verse
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              Micah 7:1&ndash;20 &mdash; Detailed Exposition
            </div>

            {[
              {
                id: "vv1-4",
                ref: "Micah 7:1&ndash;4",
                heading: "The Godly Has Perished",
                body: "The chapter opens with a rare first-person lament in which the prophet himself gives voice to spiritual anguish: &ldquo;Woe is me! for I have become as when the summer fruit has been gathered, as when the grapes have been gleaned from the vine&rdquo; (7:1). The harvest metaphors are precise. After the harvest, the fields and vineyards are stripped &mdash; nothing left to pick. That is the prophet&rsquo;s experience when he looks for the faithful in his society: they are gone. &ldquo;The godly has perished from the earth, and there is no one upright among mankind; they all lie in wait for blood, and each hunts the other with a net&rdquo; (7:2). The hunting imagery is sinister &mdash; this is not mere dishonesty but predatory behavior. People are actively seeking to trap and exploit one another. Verses 3&ndash;4 sharpen the indictment: &ldquo;Their hands are on what is evil, to do it well; the prince asks, and the judge asks for a bribe; and the great man utters the evil desire of his soul; thus they weave it together.&rdquo; The corruption is institutional and collaborative. The officials and judges who should protect the vulnerable are instead cooperating to extract wealth from them. The &ldquo;best of them is like a brier, the most upright of them a thorn hedge&rdquo; (7:4) &mdash; even the least corrupt among the leaders wounds anyone who touches them. The day of the watchmen &mdash; the day of reckoning that the prophets foretold &mdash; is coming."
              },
              {
                id: "vv5-6",
                ref: "Micah 7:5&ndash;6",
                heading: "Trust No Neighbor &mdash; Jesus Cites This Passage",
                body: "Verses 5 and 6 describe the collapse of trust at the most intimate levels of human society: &ldquo;Put no trust in a neighbor; have no confidence in a friend; guard the doors of your mouth from her who lies in your arms; for the son treats the father with contempt, the daughter rises up against her mother, the daughter-in-law against her mother-in-law; a man&rsquo;s enemies are the men of his own house&rdquo; (7:5&ndash;6). These verses are remarkable for at least two reasons. First, they describe a social situation in which the normal bonds of loyalty &mdash; friendship, marriage, and family &mdash; have been so eroded by the general corruption that no relationship can be trusted. When even those who share your bed and your household may betray you, social life becomes impossible. Second &mdash; and this is what ensures that these verses will be read for all of history &mdash; Jesus quotes them almost verbatim in Matthew 10:35&ndash;36 when preparing his disciples for the social cost of following him: &ldquo;For I have come to set a man against his father, and a daughter against her mother, and a daughter-in-law against her mother-in-law. And a person&rsquo;s enemies will be those of his own household.&rdquo; Jesus is not promising social harmony to his followers; he is warning them that faithfulness to him will in some contexts replicate exactly the household divisions that Micah described in a different but analogous situation of social and spiritual crisis."
              },
              {
                id: "v7",
                ref: "Micah 7:7",
                heading: "But As for Me &mdash; The Great Pivot",
                body: "Verse 7 is the hinge on which the entire chapter turns: &ldquo;But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me.&rdquo; Every word matters. &ldquo;But as for me&rdquo; sets the prophet&rsquo;s personal decision against the backdrop of general social collapse. He is not naive about his situation &mdash; everything described in verses 1&ndash;6 remains true. He is not making a claim about how things appear; he is making a claim about where he will direct his gaze. &ldquo;I will look to the LORD&rdquo; &mdash; the Hebrew verb (&ldquo;tsaphah&rdquo;) is a watchman&rsquo;s word, meaning to scan the horizon with alert attention, to look with expectant intent. It is not a passive glance; it is focused, sustained attention directed toward God. &ldquo;I will wait for the God of my salvation&rdquo; &mdash; the waiting is not mere patience but active, hopeful expectation. The grounds for this expectation are stated in the final phrase: &ldquo;my God will hear me.&rdquo; This is not wishful thinking; it is a confidence grounded in the covenant relationship. The God who has entered into relationship with his people has committed to hearing them when they call. The prophet claims that promise for himself in precisely the moment when everything around him seems to deny it."
              },
              {
                id: "vv8-10",
                ref: "Micah 7:8&ndash;10",
                heading: "When I Fall I Shall Rise &mdash; Confidence Before the Enemy",
                body: "These verses are among the most personally defiant and spiritually confident statements in the prophetic corpus. &ldquo;Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me&rdquo; (7:8). The speaker addresses her enemy directly. The falling is acknowledged &mdash; she does not claim invulnerability. But the fall is not the end. &ldquo;I shall rise.&rdquo; The darkness is real &mdash; she does not claim to see the light yet. But the LORD will be light. The confidence is proleptic: it speaks of future certainty in present darkness. Verse 9 is particularly striking in its theological sophistication: &ldquo;I will bear the indignation of the LORD because I have sinned against him, until he pleads my cause and executes judgment for me. He will bring me out to the light; I shall look upon his vindication.&rdquo; The speaker does not protest that God&rsquo;s discipline is unjust. She accepts it as the consequence of her own sin. But she knows that discipline and abandonment are not the same thing. The God who disciplines is the same God who pleads causes and executes justice. Her adversary will see this and be covered with shame &mdash; the one who said &ldquo;Where is the LORD your God?&rdquo; will see God act and fall into the very shame she was taunted with (7:10)."
              },
              {
                id: "vv11-17",
                ref: "Micah 7:11&ndash;17",
                heading: "The Day for Rebuilding &mdash; Prayer for the Flock",
                body: "Verses 11&ndash;13 describe a future day of restoration: &ldquo;A day for the building of your walls! In that day the boundary shall be far extended. In that day they will come to you, from Assyria and the cities of Egypt, and from Egypt to the River, from sea to sea and from mountain to mountain&rdquo; (7:11&ndash;12). The rebuilding of Jerusalem&rsquo;s walls is more than a civic project; it is a sign of restored divine favor. The scope of the ingathering &mdash; from Assyria to Egypt, from sea to sea &mdash; points to the eschatological fullness of God&rsquo;s redemptive work, a gathering that the New Testament understands to have begun in the mission of the church (Matthew 28:18&ndash;20; Revelation 7:9). Verse 14 opens a prayer that God will shepherd his flock: &ldquo;Shepherd your people with your staff, the flock of your inheritance, who dwell alone in a forest in the midst of a garden land; let them graze in Bashan and Gilead as in the days of old.&rdquo; The prayer is for a re-enactment of the Exodus &mdash; a fresh display of God&rsquo;s mighty acts that will astonish the nations. Verses 16&ndash;17 describe the nations&rsquo; response: they will see, be ashamed of their power, put their hands over their mouths, and turn in trembling to the LORD. The reversal is total: those who taunted will be silenced; those who lorded over Israel will come in submission."
              },
              {
                id: "vv18-20",
                ref: "Micah 7:18&ndash;20",
                heading: "Who Is a God Like You? &mdash; The Incomparable Conclusion",
                body: "The final three verses of Micah constitute one of the greatest doxologies of the Old Testament, and they are dense with theological freight. &ldquo;Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance?&rdquo; (7:18). The rhetorical question expects the answer: no one. No other god in the ancient Near East was worshiped as a god who pardons. The other gods demanded placation, performance, and sacrifice. The God of Israel delights in forgiving. &ldquo;He does not retain his anger forever, because he delights in steadfast love&rdquo; (7:18). This is a precise theological statement: anger is temporary; <em>hesed</em> is the fundamental disposition. &ldquo;He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea&rdquo; (7:19). The verb &ldquo;tread underfoot&rdquo; is powerful &mdash; sins are conquered, subdued, crushed. And then they are cast into the sea &mdash; into the abyss from which nothing returns. The final verse ties it all to covenant: &ldquo;You will show faithfulness to Jacob and steadfast love to Abraham, as you have sworn to our fathers from the days of old&rdquo; (7:20). God&rsquo;s mercy is not capricious; it is covenantal. He forgives because he has promised to forgive, and his promises do not fail. The New Testament reveals that this forgiveness was accomplished at the cross, where Jesus bore our sins and carried them into a death from which they do not rise."
              },
            ].map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontFamily: "Georgia, serif", textAlign: "left", gap: "1rem" }}
                >
                  <div>
                    <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  </div>
                  <span style={{ color: GREEN, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Application
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              Living the Truths of Micah 7
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Micah 7 does not leave its readers in the realm of theology alone; it calls them to specific practices and postures. The prophetic wisdom of this chapter is as applicable in the twenty-first century as it was in the eighth century before Christ. Social corruption, household division, the taunts of enemies, and the silence of God are not ancient problems; they are perennial human experiences. And the responses Micah models are available to every believer in every generation." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The first and most fundamental application is the practice of honest lament. Many Christians have been formed in traditions that treat complaint before God as faithlessness &mdash; as though a truly trusting believer would never name the darkness for what it is. Micah 7 corrects this. The prophet who will end with the most soaring doxology in the book begins with &ldquo;Woe is me.&rdquo; He names the corruption, the betrayal, and the grief precisely and specifically. He does not spiritualize it or rush past it to the comfort. He sits with it, describes it, and brings it before God. This is what the Psalms of lament do, and it is what Christian spiritual formation has sometimes called &ldquo;lament as a spiritual discipline.&rdquo; To lament honestly is to refuse both the dishonesty of forced positivity and the despair of hopelessness. It is to speak the truth to God about what you see and feel, trusting that he can handle it and that he cares." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The second application is what might be called &ldquo;the as-for-me decision.&rdquo; Every believer, in every generation, faces moments when the surrounding culture moves in one direction and faithfulness to God requires moving in another. The culture of Micah&rsquo;s day had normalized corruption, opportunism, and the betrayal of trust. To refuse those norms required a deliberate, conscious, and personal declaration: &ldquo;As for me, I will look to the LORD.&rdquo; Such declarations are not made once for all; they must be renewed in each new context where the pressure to conform reasserts itself. The discipline of regular Scripture reading, prayer, worship, and fellowship with other believers is the practice that makes such declarations possible &mdash; that keeps the orientation of the heart directed toward the LORD rather than toward the prevailing winds." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The third application concerns waiting on God when he seems silent. Micah 7:7 names waiting alongside looking as the response to darkness. Waiting is not a passive activity; it is the active maintenance of expectant trust in the face of circumstances that seem to contradict it. Practically, this means continuing to pray when prayer seems futile, continuing to read Scripture when it seems dry, continuing to worship when God seems far away, continuing to serve when the results are invisible. The spiritual directors of the Christian tradition have understood these periods of divine silence as seasons of testing and deepening &mdash; not as evidence that God has abandoned his people, but as invitations to a trust that is no longer dependent on felt experience. Micah&rsquo;s confidence &mdash; &ldquo;my God will hear me&rdquo; &mdash; is not a description of what he feels but a declaration of what he knows to be true about God&rsquo;s character." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The fourth and perhaps most pastorally important application is the promise of 7:19 &mdash; that God will cast all our sins into the depths of the sea. For those who struggle with the guilt of past failure, this verse is not a pious platitude; it is a specific, concrete, covenantal promise. The God who made this promise is the same God who kept it at the cross. When Christ died, he bore the sins of his people and carried them into a death from which they do not return. To reclaim 7:19 in prayer is to invoke the finished work of Christ and to resist the accusation of the enemy who would drag those sins back up from the deep. The practice of this promise is what Martin Luther called &ldquo;mortifying the old man by the word of promise&rdquo; &mdash; confronting guilt not with self-effort but with the specific words of divine forgiveness." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Finally, the <em>hesed</em> of 7:18&ndash;20 is not only a promise to receive but a character to embody. The God who delights in steadfast love calls his people to delight in it as well. To cultivate <em>hesed</em> &mdash; loyal, committed, generous love &mdash; toward the people in one&rsquo;s life is to participate in the character of the God who will not retain his anger forever. Every time a Christian chooses to forgive rather than to hold a grudge, chooses to give more than is owed, chooses faithfulness to a difficult relationship when walking away would be easier &mdash; in those moments the <em>hesed</em> of Micah 7 takes flesh in the world again. And those who practice it, in however halting and imperfect a way, begin to understand from the inside why the prophet asks: &ldquo;Who is a God like you?&rdquo;" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>
                Practical Steps for This Week
              </h3>
              <ul style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
                <li>Write out a personal lament to God &mdash; naming specifically what grieves you about your world or your life, bringing it honestly before him.</li>
                <li>Identify one area where you need to make an &ldquo;as for me&rdquo; decision &mdash; where the surrounding culture moves one way and faithfulness requires another.</li>
                <li>Memorize Micah 7:7 and use it as a daily anchor prayer when circumstances feel dark or God seems silent.</li>
                <li>Spend time with Micah 7:18&ndash;20, reading it aloud and letting each phrase sink in as a personal promise. Receive the forgiveness it describes.</li>
                <li>Choose one person in your life toward whom you will deliberately practice <em>hesed</em> this week &mdash; showing more than is required, staying faithful when withdrawal would be easier.</li>
              </ul>
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem", color: TEXT }}>
              Video Teaching
            </h3>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Micah 7 through these video teachings on lament, trust, the incomparable God, and the promise that sins are cast into the depths of the sea." }} />
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Who Is a God Like You?
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Micah&rsquo;s name means &ldquo;Who is like God?&rdquo; &mdash; and his final chapter answers that question definitively. No one pardons like he pardons. No one delights in steadfast love like he delights. No one casts sins into the depths of the sea like he casts them. The book that began with lament ends with incomparable doxology, because the God who disciplines is the same God who redeems &mdash; and his <em>hesed</em> is the deeper word." }} />
        </div>
      </div>
    </div>
  );
}
