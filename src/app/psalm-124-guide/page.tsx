"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GREEN;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "mno789pqr", title: "Psalm 124 -- If Not for the LORD" },
  { videoId: "stu012vwx", title: "Songs of Ascents: Our Help in the Name of the LORD" },
];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: 'A Song of Ascents. Of David')" },
  { label: "Position", value: "Fifth of the 15 Songs of Ascents (Psalm 124)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Communal thanksgiving with lament overtones" },
  { label: "Key Theme", value: "God's decisive rescue and the doxology of dependence" },
  { label: "Key Verse", value: "v. 8 -- Our help is in the name of the LORD, who made heaven and earth" },
  { label: "NT Connection", value: "Romans 8:31 'If God is for us'; Hebrews 2:14-15 release from slavery to fear" },
];

const IMAGERY_TABLE = [
  { image: "Enemies swallowing alive (v. 3)", meaning: "Total, immediate destruction -- no escape", parallel: "Sheol / death swallowing (Proverbs 1:12)" },
  { image: "Raging waters / flood (vv. 4-5)", meaning: "Overwhelming, impersonal, unstoppable force", parallel: "Isaiah 43:2 'through the waters I will be with you'" },
  { image: "Bird from the fowler's snare (v. 7)", meaning: "Rescue from invisible, deadly trap", parallel: "Psalm 91:3 'He will deliver you from the snare'" },
];

const THEMES = [
  {
    color: GREEN,
    title: "If It Had Not Been the LORD: Counterfactual Theology",
    body: `Psalm 124 is built on a counterfactual -- a thought experiment about what would have happened if God had not intervened. "If it had not been the LORD who was on our side -- let Israel now say -- if it had not been the LORD who was on our side when people rose up against us, then they would have swallowed us up alive." This rhetorical device is not just literary; it is theological. By imagining what would have been without God, the psalmist forces the community to face the depth of its actual dependence.
<br/><br/>
The counterfactual structure appears elsewhere in Scripture as a device for cultivating gratitude. Paul uses it in 1 Corinthians 15:14: "If Christ has not been raised, your faith is futile and you are still in your sins." In both cases, the imagined alternative -- no God, no resurrection -- is so catastrophic that the positive reality (God did act, Christ did rise) floods in with overwhelming force. The darkness of the counterfactual makes the light of the fact blaze the brighter.
<br/><br/>
Calvin observes: "The design of David was to magnify God's power in the remarkable deliverance he had received; and to this end he sets before his people what would have happened had not God interposed. It is as if he said: If you would properly estimate how great was the danger from which you were rescued, you must consider what would have become of you if God had not appeared for your help." Spurgeon adds: "It is well for us often to take this other view of our condition -- 'If the LORD had not been on my side.' This will lead us to deep gratitude and humble worship."
<br/><br/>
For the church, this counterfactual structures the doxology of every answered prayer. The thanksgiving after any rescue begins by imagining the alternative: what would have happened if God had not been present, if the prayer had gone unheard, if the Red Sea had not parted. By going to that dark hypothetical and then returning to the reality of what God actually did, gratitude is deepened from sentiment to theology.`,
  },
  {
    color: TEAL,
    title: "The Three Dangers: Swallowing, Flood, and Snare",
    body: `Verses 2-7 deploy three distinct images of danger from which God rescued his people: (1) enemies who would have swallowed them alive (vv. 2-3); (2) raging waters and floods that would have swept them away (vv. 4-5); (3) a fowler's snare from which they have escaped (v. 7). These three images move from the catastrophically public (enemies in battle) to the catastrophically overwhelming (flood) to the catastrophically subtle (snare). Together they represent the full spectrum of threats to God's people.
<br/><br/>
The "swallowing alive" image (v. 3) is drawn from the world of combat and conquest. To be swallowed by an enemy (Hebrew: bala') is to be utterly consumed, destroyed without remainder. The verb appears in Numbers 16:30-34 (the earth swallowed Korah and his company), Proverbs 1:12 (death swallowing the righteous), and Psalm 69:15 (the flood swallowing the petitioner). It is total destruction. The addition "when their anger was kindled against us" (v. 3) gives the destruction its emotional character: this is not impersonal destruction but passionate, heated hostility directed specifically at God's people.
<br/><br/>
The flood/raging waters imagery (vv. 4-5) shifts from personal to impersonal danger. The "torrent" and "raging waters" are natural forces that overwhelm by sheer scale and power. These images evoke the primordial chaos waters (Genesis 1:2), the flood of Noah (Genesis 6-8), and the Red Sea (Exodus 14-15). Collectively they represent the forces that would unmake Israel as a people if not for divine intervention. Isaiah 43:2 promises: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you."
<br/><br/>
The snare image (v. 7) is the most intimate and insidious of the three. A fowler's snare (pach) is invisible, set to catch a bird unawares. The bird "has escaped like a bird from the snare of the fowlers" suggests rescue from a trap that was already sprung -- not escape before the trap closed, but escape after. "The snare is broken, and we have escaped!" is an exclamation of astonishment: the trap that should have been fatal proved unable to hold God's bird. This image encompasses the subtle, hidden dangers of political intrigue, false accusation, and spiritual temptation that do not announce themselves openly.`,
  },
  {
    color: GOLD,
    title: "Our Help Is in the Name of the LORD: Creedal Doxology",
    body: `Verse 8 -- "Our help is in the name of the LORD, who made heaven and earth" -- is the psalm's theological climax and one of the most compact creedal statements in the Psalter. It functions as both the conclusion of this specific thanksgiving and a general confession of dependence that spans all circumstances. The statement is in the present tense ("our help is"), not just "our help was in the past." The rescue from enemies (vv. 1-7) grounds a permanent, ongoing declaration of dependence.
<br/><br/>
The phrase "the name of the LORD" is not merely a reverential circumlocution for God's identity. In the OT, a name (shem) encapsulates character, authority, and the totality of a person's being. The "name of the LORD" is the LORD as he has made himself known -- as YHWH, the self-existent, covenant God who announced himself to Moses at the burning bush (Exodus 3:14-15), who bound himself to Israel in the Sinai covenant, who revealed his character as "the LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness" (Exodus 34:6-7). Our help is in this specific God, revealed by this specific name.
<br/><br/>
The appended title "who made heaven and earth" (oseh shamayim va'arets) identifies the covenant God as the Creator. This pairing -- personal covenant name + universal creative power -- appears frequently in the Psalter (Psalms 115:15; 121:2; 134:3; 146:6). Its function is doxological and apologetic simultaneously: the God who helped Israel is not a local tribal deity limited in power; he is the Maker of all things, whose power knows no limit. If he made heaven and earth, no enemy can ultimately prevail against those under his protection.
<br/><br/>
Tremper Longman III writes: "This final verse is more than a conclusion; it is a confession of faith that the community can carry with them from this particular rescue into every future danger. Whatever threatens us next, our help is in the name of the LORD -- the same God who delivered us today." The verse became a liturgical formula in Israel and in the church, used at the opening of Reformed worship services since Calvin's time: "Our help is in the name of the LORD, who made heaven and earth."`,
  },
  {
    color: ROSE,
    title: "Blessed Be the LORD: The Grammar of Gratitude",
    body: `Verse 6 introduces the doxological center of the psalm: "Blessed be the LORD, who has not given us as prey to their teeth!" The Hebrew baruk (blessed/praised be) is the standard OT formula for blessing and thanksgiving directed toward God. It appears in such doxological moments as Genesis 24:27 ("Blessed be the LORD, the God of my master Abraham, who has not forsaken his steadfast love and his faithfulness"), Psalm 28:6 ("Blessed be the LORD! For he has heard the voice of my pleas for mercy"), and throughout the later doxologies of the Psalter (106:48; 135:21; 144:1).
<br/><br/>
The structure of the blessing in verse 6 is significant: "Blessed be the LORD, who has not given us as prey to their teeth." The thanksgiving is not primarily for what God did positively but for what God did not do negatively: he did not give, he did not hand over, he did not allow. This negative grammar of gratitude -- praising God for what he withheld -- is a form of theological realism that acknowledges human helplessness. Left to ourselves, we would have been prey. God's mercy consisted not in making us strong but in being our strength.
<br/><br/>
Matthew Henry observes: "Thanksgiving to God is most genuine and most mature when it recognizes not only the positive gifts of God but the negative mercies -- the dangers from which he delivered us, the falls he prevented, the deaths he postponed, the evils he restrained." This grammar of gratitude trains the soul to look for God's goodness in what did NOT happen as well as what did. The Christian who can say "blessed be the LORD, who did not give me as prey" is one who has developed the theological eyesight to see divine protection in the apparent ordinariness of days that passed without catastrophe.
<br/><br/>
For the New Testament believer, the ultimate "not given" is Romans 8:32: "He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?" The logic is the same but inverted and elevated: the Father did not give us over to condemnation; instead he gave his Son for our condemnation. All subsequent "not givens" -- the enemy he did not let prevail, the flood he did not let overwhelm, the snare he did not let hold -- are gifts that flow from this supreme gift.`,
  },
  {
    color: PURPLE,
    title: "The Communal Memory: Let Israel Now Say",
    body: `The opening formula "Let Israel now say" (v. 1) is a call to communal recitation -- an invitation to the assembled congregation to join in the confession of rescue. This phrase makes the psalm a liturgical call-and-response: the leader invites the assembly to repeat and own the testimony as their own. Similar formulas appear in Psalms 107:2 ("Let the redeemed of the LORD say so") and 129:1 ("Let Israel now say").
<br/><br/>
The communal nature of the psalm's thanksgiving is theologically significant. Individual rescue becomes corporate confession. When any member of Israel is delivered from enemies, the whole community says: "If it had not been the LORD who was on our side, then they would have swallowed us up alive." The individual "me" becomes the communal "us." Rescue is not a private transaction between one Israelite and God; it is a testimony that the whole assembly receives as their own and echoes back to God as worship.
<br/><br/>
Derek Kidner writes: "The calling of the community to rehearse the rescue collectively is itself a form of teaching: the young generation, the doubters, the recently joined -- all are invited into the memory of rescue as their own story." The Passover Seder has this structure at its heart: each Israelite is to say "the LORD brought us out of Egypt" as if present personally. The Exodus becomes not just a historical event but a present identity marker, a story that every generation inherits and inhabits.
<br/><br/>
In the New Testament, the Lord's Supper functions similarly: "Do this in remembrance of me" is a call to communal recitation of the ultimate rescue -- the death and resurrection of Christ. "Let Israel now say" has become "let the church now say": if not for the blood of Christ, we would have been swallowed by condemnation, swept away by the flood of God's just wrath, caught in the snare of sin and death. But blessed be the LORD -- the snare is broken, and we have escaped.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "If it had not been the LORD who was on our side -- let Israel now say -- if it had not been the LORD who was on our side when people rose up against us...",
    comment: `The double "if it had not been" creates an anaphoric opening that forces the community to sit with the counterfactual before it is resolved. The call to "let Israel now say" makes this a liturgical invitation: the leader invites the congregation to own the testimony. "People rose up against us" uses the Hebrew 'adam (humanity) -- it was not just particular enemies but human opposition in its full weight that threatened Israel. Calvin: "David is careful to say 'the LORD who was on our side' rather than 'we who were on God's side,' for the initiative and the power lay entirely with God."`,
  },
  {
    ref: "v. 3",
    text: "...then they would have swallowed us up alive, when their anger was kindled against us.",
    comment: `The counterfactual resolves into the first image of destruction: being swallowed alive (bala' chayyim). The verb bala' (swallow, engulf) appears in some of Scripture's most dramatic destruction narratives (Numbers 16:32; Jonah 1:17). The qualifier "alive" (chayyim) specifies that the destruction would have been total and immediate -- not a gradual defeat but instant annihilation. "Their anger was kindled" (lacharot appam) adds the emotional temperature of the danger: this was not cold, strategic hostility but hot, personal fury. The psalmist is realistic about the severity of what God prevented.`,
  },
  {
    ref: "vv. 4-5",
    text: "...then the flood would have swept us away, the torrent would have gone over us; then over us would have gone the raging waters.",
    comment: `The second image shifts from the personal (enemies with anger) to the impersonal (flood and torrent). Three near-synonyms -- "flood" (mayim), "torrent" (nachal), "raging waters" (zedim) -- accumulate like the very waters they describe. The preposition "over us" (al nafshenu, literally "over our souls/lives") conveys the total submersion of drowning. The raging waters (zedim, literally "presumptuous/arrogant waters") are personified as proud forces determined to overwhelm. Spurgeon: "Three waves in succession roll over the psalmist's imagination: first a flood, then a torrent, then raging waters -- each greater than the last, until the soul is overwhelmed by the very thought."`,
  },
  {
    ref: "v. 6",
    text: "Blessed be the LORD, who has not given us as prey to their teeth!",
    comment: `The pivot from counterfactual lament to actual praise arrives here: "Blessed be the LORD" (baruk YHWH). The image of teeth adds vividness to the earlier swallowing metaphor -- the community would have been chewed up and consumed. But the key theological word is "not given" (lo netannu). God's mercy is here defined negatively: he did not give, he did not hand over, he did not allow. This negative grammar of gratitude acknowledges that the default trajectory without God would have been destruction. Matthew Henry: "We should bless God not only for what he has given us but for what he has not given us over to."`,
  },
  {
    ref: "v. 7",
    text: "We have escaped like a bird from the snare of the fowlers; the snare is broken, and we have escaped!",
    comment: `The third and most intimate danger: the fowler's snare (pach yaqushim). Unlike the open aggression of enemies and the impersonal force of floods, a snare is hidden, silent, and designed to catch its prey unawares. The repetition "we have escaped...we have escaped" expresses astonishment at the rescue: we were already caught, and still we escaped! The "snare is broken" -- the instrument of destruction has itself been destroyed. Kidner: "The bird did not break free; the snare broke. The rescue came not from our power but from God's intervention that destroyed the trap itself." This is the deepest level of the rescue: not just delivered from danger but released from the very structure of entrapment.`,
  },
  {
    ref: "v. 8",
    text: "Our help is in the name of the LORD, who made heaven and earth.",
    comment: `The psalm's climax is a creedal declaration: "Our help is in the name of the LORD" -- not was, not will be, but is, present and ongoing. The "name of the LORD" (shem YHWH) encapsulates the covenant God's character and authority as revealed throughout Israel's history. The appended title "who made heaven and earth" grounds the covenant God's power in his creative sovereignty: no enemy, no flood, no snare can ultimately prevail against the one who made all things. This verse became a standard liturgical opening in Reformed worship (Calvin's usage) and is still spoken in many Protestant churches as the call to worship. It is also echoed in Psalm 121:2 ("My help comes from the LORD, who made heaven and earth").`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "The Discipline of the Counterfactual: Cultivating Gratitude",
    body: `Psalm 124 offers a spiritual discipline rarely practiced in contemporary Christianity: deliberate reflection on what God prevented. We easily celebrate what God gave us; we rarely stop to thank him for what he did not give us over to. Yet the psalm's structure suggests that this negative gratitude is just as important as -- perhaps even foundational to -- positive thanksgiving.
<br/><br/>
The practice looks like this: after any period of difficulty, or at any regular point of reflection, ask the counterfactual questions that Psalm 124 models. "If it had not been the LORD who was on my side -- if that relationship had broken beyond repair, if that illness had progressed, if that decision had been made in anger, if that temptation had been given full rein -- then what?" Let the imagination go there briefly, just long enough to feel the darkness of the alternative. Then return to the reality: "Blessed be the LORD, who did not give me over to..."
<br/><br/>
<em>Prayer prompt</em>: Lord, I name before you the specific dangers you prevented this past season -- the flood that did not overwhelm, the snare that was broken, the enemy you did not let prevail. Blessed be your name. You made heaven and earth, and you made our escape. Our help was, is, and will be in your name alone. Amen.`,
  },
  {
    color: TEAL,
    title: "When the Flood Rises: Gospel Resources for Overwhelming Circumstances",
    body: `The flood/torrent/raging waters imagery of Psalm 124 speaks directly to circumstances that feel overwhelming -- grief that threatens to drown, anxiety that rises past managing, temptation that seems irresistible, diagnoses that restructure everything. The psalm neither minimizes these floods nor simply promises they will stop. It says something more precise: the LORD was on our side, and therefore the waters did not sweep us away.
<br/><br/>
Isaiah 43:2 is the closest NT parallel: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you." Notice: through the waters, not around them. The promise is not that the floods will not rise but that they will not be the last word. The God who made heaven and earth is present in the flood, and what he is present in cannot ultimately consume his people.
<br/><br/>
Romans 8:38-39 makes the same declaration in apostolic terms: "Neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." The raging waters of Psalm 124 become the cosmic enemies of Romans 8 -- and in both texts, the God who is "for us" (Romans 8:31) is the same as the LORD "on our side" (Psalm 124:1-2). The counterfactual of Romans 8:32 -- "He who did not spare his own Son" -- grounds every subsequent rescue in the ultimate rescue of the cross.`,
  },
  {
    color: GOLD,
    title: "Our Help Is in the Name of the LORD: A Confession for Every Morning",
    body: `Psalm 124:8 -- "Our help is in the name of the LORD, who made heaven and earth" -- is one of the most theologically loaded short sentences in Scripture. It contains three assertions: (1) we have help; (2) the help comes from outside ourselves, from the LORD; (3) the LORD who helps is the Creator of all things, whose power is therefore without limit. This creedal statement, spoken daily or weekly, has the potential to reorient the entire disposition of a life.
<br/><br/>
The Reformed tradition has used this verse as an opening call to worship precisely because it establishes the correct starting point for all Christian activity: we begin not with our capabilities, our resources, our plans, or our fears, but with the declaration that our help is in the name of the LORD. Before the sermon, before the prayers, before any specific petition -- this. Before the work day, before the difficult conversation, before the medical appointment -- this. "Our help is in the name of the LORD."
<br/><br/>
The title "who made heaven and earth" is not theological decoration; it is the ground of confidence. If your God made the heavens and the earth, then there is no enemy larger than your God, no circumstance beyond his governance, no need outside his power to meet. The help available to you is as large as creation -- because the Creator himself is your help. Spurgeon: "The universe is his workshop; every atom of it is at his command for the use of his people."`,
  },
  {
    color: ROSE,
    title: "Communal Thanksgiving: Making Individual Rescue the Church's Story",
    body: `"Let Israel now say" (v. 1) is an invitation to communal recitation -- and it models something essential for the life of the local church. When one member of the body of Christ experiences a dramatic rescue -- a medical recovery, a broken addiction, a marriage saved, a depression lifted -- the appropriate response is not merely individual gratitude but communal thanksgiving. The congregation is invited to say "if it had not been the LORD..." alongside the individual who was rescued.
<br/><br/>
This communal dimension of thanksgiving is rarely practiced well. Testimonies are sometimes given but rarely incorporated into the community's collective memory in the way that Psalm 124 intends. The psalm suggests that rescue stories should become part of the community's liturgy -- regularly recalled, regularly re-confessed, regularly made the basis of fresh trust in God. "Remember what the LORD did" is not just a historical exercise; it is faith-building for the next generation of trials.
<br/><br/>
Practically: consider how your church community tells its rescue stories. Are they shared? Are they remembered? Are they connected to Scripture's larger rescue narrative -- Exodus, cross, resurrection? Psalm 124 models the full arc: specific rescue (vv. 1-7) leads to creedal confession (v. 8), and creedal confession grounds future hope. "Let Israel now say" is not a one-time invitation; it is a repeated liturgical practice that builds a community of trust in the God who makes escapes.`,
  },
];

export default function Psalm124Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #071507 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 124</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; David &bull; 8 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            If It Had Not Been the LORD
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A Davidic Song of Ascents that builds gratitude through counterfactual theology: imagining what would have happened without God's intervention -- swallowing, flood, snare -- before arriving at the church's oldest creedal confession: "Our help is in the name of the LORD, who made heaven and earth."
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;Our help is in the name of the LORD, who made heaven and earth.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 124:8</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 124</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 124 is one of two Songs of Ascents attributed to David (the other is Psalm 133). It is a masterpiece of communal thanksgiving, built on a rhetorical structure rarely used in Scripture: the sustained counterfactual. The psalm begins by imagining what would have happened if the LORD had not been on Israel&rsquo;s side -- and what it imagines is catastrophic enough that the community&rsquo;s gratitude for actual rescue blazes with genuine force.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The specific historical occasion is not identified, a deliberate ambiguity that makes the psalm applicable to any situation of rescue from overwhelming danger. The three danger images &mdash; enemies who would have swallowed Israel alive (vv. 2&ndash;3), floods and torrents that would have swept them away (vv. 4&ndash;5), and the fowler&rsquo;s snare from which they have escaped (v. 7) &mdash; cover a spectrum from the personal and passionate to the impersonal and overwhelming to the subtle and invisible. Together they represent the full range of threats to God&rsquo;s people.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm&rsquo;s structure moves from the communal invitation ("Let Israel now say," v. 1) through the counterfactual disaster (vv. 2&ndash;5) to the doxological pivot ("Blessed be the LORD," v. 6) and the specific rescue images (vv. 6&ndash;7) before arriving at the psalm&rsquo;s creedal climax: "Our help is in the name of the LORD, who made heaven and earth" (v. 8). This final verse functions as both the conclusion of this specific psalm and a general confession of dependence that is larger than any particular rescue.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Derek Kidner calls Psalm 124 "one of the most spontaneously joyful of all the Songs of Ascents," noting that "the exclamations of relief &mdash; 'the snare is broken, and we have escaped!' &mdash; carry the tone of one still breathless with wonder at what did not happen as much as at what did." Calvin preached this psalm as a model of how the church should cultivate gratitude: by regularly, communally rehearsing the dangers from which God delivered his people.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christians, the ultimate "if it had not been the LORD" is the death and resurrection of Christ. If not for the cross, we would have been swallowed by condemnation. If not for the resurrection, we would have been overwhelmed by the flood of judgment. If not for the gospel, the snare of sin and death would have held us forever. "Blessed be the LORD" is therefore the anthem of the church in every age, culminating in the song of the redeemed: "Worthy is the Lamb who was slain" (Revelation 5:12).` }} />

            {/* Danger Imagery Table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Three Images of Danger and Rescue</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Image (Psalm 124)", "What It Represents", "Scriptural Parallel"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {IMAGERY_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: GOLD }}>{row.image}</td>
                        <td style={{ padding: "0.75rem", color: TEXT }}>{row.meaning}</td>
                        <td style={{ padding: "0.75rem", color: MUTED, fontStyle: "italic" }}>{row.parallel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Details */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 124 builds gratitude and grounds communal faith.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
