"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = PURPLE;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "abc123def", title: "Psalm 123 -- Eyes Fixed on God" },
  { videoId: "ghi456jkl", title: "Songs of Ascents: Waiting on the LORD" },
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
  { label: "Author", value: "Anonymous (possibly David or Hezekiah)" },
  { label: "Position", value: "Fourth of the 15 Songs of Ascents (Psalm 123)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Communal lament and petition for mercy" },
  { label: "Key Theme", value: "Waiting on God as servants watch their master" },
  { label: "Key Verse", value: "v. 2 -- our eyes look to the LORD our God, till he has mercy upon us" },
  { label: "NT Connection", value: "Luke 18:1-8 persistent widow; Hebrews 12:2 eyes fixed on Jesus" },
];

const THEMES = [
  {
    color: PURPLE,
    title: "To You I Lift Up My Eyes: The Posture of Prayer",
    body: `Psalm 123 opens with one of the most striking physical images of prayer in the entire Psalter: "To you I lift up my eyes, O you who are enthroned in the heavens!" The act of lifting up the eyes toward heaven combines physical posture and theological conviction. Eyes that look upward are oriented away from the circumstances at hand and toward the sovereign God who governs all things from his heavenly throne. This is not escapism; it is re-orientation.
<br/><br/>
The "lifting up of eyes" is a recurrent gesture in Scripture. Abraham lifted his eyes and saw the place of sacrifice (Genesis 22:4). The disciples lifted their eyes and saw Jesus alone (Matthew 17:8). The Prodigal Son was still a great way off when his father lifted his eyes and saw him (Luke 15:20). In each case, the lifted eyes see something that changes everything. Psalm 123 lifts the eyes of the community toward the enthroned God -- the one seated high above all earthly powers, the one who sees all things, the one whose mercy is the specific object of the psalmist's longing.
<br/><br/>
Calvin observes that this upward orientation is precisely the work of faith: "As our hearts are naturally inclined toward the earth, and as the lusts of the flesh draw our minds downward, faith must lift up our eyes by force, as it were, that they may seek God above." Spurgeon adds: "It is well when eyes that are weeping can look upward; when eyes that are heavy with sorrow can be raised in hope to the God of all consolation." The posture of prayer in Psalm 123 is not passive resignation but active, expectant orientation toward the living God.
<br/><br/>
Hebrews 12:2 calls believers to run the race "looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God." The image is identical to Psalm 123 -- fixing the eyes on the one enthroned in heaven -- but now the enthroned one is the risen Christ. The pilgrim's upward gaze has become the disciple's fixed focus on the crucified and exalted Lord.`,
  },
  {
    color: TEAL,
    title: "Servants Watching Their Master: The Analogy of Dependent Attention",
    body: `Verses 2-3 develop one of the most extended analogies in the Songs of Ascents: "As the eyes of servants look to the hand of their master, as the eyes of a maidservant to the hand of her mistress, so our eyes look to the LORD our God, till he has mercy upon us." The double comparison -- male servant/master and female servant/mistress -- establishes the analogy as universal, encompassing all categories of servants.
<br/><br/>
The image of servants watching their master's hand is extraordinarily precise. In the ancient household, a servant did not wait for verbal commands. He or she watched the master's hand -- a raised finger might signal "bring more wine," a downward gesture might signal "clear the table," a beckoning hand might signal "come here." The servant was trained in the language of gesture, in constant attentive watching, ready to respond immediately to the smallest motion of the master's hand. This was total, unhurried, patient attention.
<br/><br/>
Tremper Longman III writes that this analogy captures "the posture of complete dependence combined with alert attentiveness -- the servant has no agenda of his own while in the master's presence, only readiness to serve." Derek Kidner adds that the servant watches "not just for commands but for favorable signs -- a signal of grace, a gesture of help." The psalmist applies this image to the community's relationship to God: we watch your hand, LORD, waiting not for the command we might give you but for the mercy that only you can give us.
<br/><br/>
The phrase "till he has mercy upon us" (repeated three times in vv. 2-3 in slight variations) introduces the element of duration: this is not a glance upward but a sustained gaze. The servant does not look once and look away; the servant watches continuously until the master acts. This models the persistence that Jesus teaches in the parable of the persistent widow (Luke 18:1-8) -- keep bringing the petition, keep watching the master's hand, do not give up "till he has mercy upon us." The theology here is not passive but actively patient.`,
  },
  {
    color: GOLD,
    title: "The Mercy of God: What the Servant Waits For",
    body: `The specific object of the servant's watching in Psalm 123 is mercy -- the Hebrew word chanan (to be gracious, to show favor, to be merciful). Three times in two verses the psalmist asks for and waits for mercy (vv. 2-3). The repetition is not merely stylistic; it reflects the weight of need. The community asking for mercy is a community that knows it cannot demand anything, that has no claim on God's favor, that can only ask and wait.
<br/><br/>
Chanan appears throughout the Psalter in contexts of urgent need. It is the word used in Psalm 6:2 ("Be gracious to me, O LORD"), Psalm 31:9 ("Be gracious to me, O LORD, for I am in distress"), Psalm 41:4 ("Be gracious to me; heal me"), and most famously Psalm 51:1 ("Have mercy on me, O God, according to your steadfast love"). The psalmist who asks for chanan places himself entirely in God's hands, acknowledging that grace is a gift, not a right.
<br/><br/>
The reason for the urgent need for mercy becomes clear in verse 3-4: "we have had more than enough of contempt. Our soul has had more than enough of the scorn of those who are at ease, of the contempt of the proud." The community is suffering not from military defeat or natural disaster but from social humiliation -- the grinding contempt and scorn of those in positions of comfortable power who look down on the humble pilgrim people of God. This is a form of suffering the Psalter takes seriously: the wound of contempt, the shame of being looked down upon by the proud.
<br/><br/>
The New Testament answer to this petition for mercy is the gospel itself: "God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ" (Ephesians 2:4-5). The mercy the psalmist waits for has been fully given in Christ -- the grace that came down from heaven to lift the humble to the heavenly places. Psalm 123's waiting is fulfilled in the advent and in the ultimate mercy of the cross.`,
  },
  {
    color: ROSE,
    title: "Contempt and the Proud: Suffering Social Humiliation for God",
    body: `The final two verses of Psalm 123 are among the most emotionally raw in the Songs of Ascents: "Have mercy upon us, O LORD, have mercy upon us, for we have had more than enough of contempt. Our soul has had more than enough of the scorn of those who are at ease, of the contempt of the proud." The repetition of "more than enough" (Hebrew: rabbat, meaning "to fullness, to saturation") communicates a community that has absorbed contempt until it can absorb no more.
<br/><br/>
The contempt comes from two identified groups: "those who are at ease" (hashanannim) and "the proud" (ge'im). The first group is characterized by their comfortable indifference -- they have suffered nothing, they lack nothing, and from that position of comfort they look down on those who struggle and cry to God. The second group is characterized by their arrogance -- they are the ones who think their position of power is self-achieved and self-deserved. Both groups share the posture of the scornful: they look down rather than up.
<br/><br/>
Calvin writes: "There is nothing more intolerable to a noble mind than to be despised; and yet this is the lot of the godly in a world that honors only power, wealth, and worldly success." The psalmist does not pretend this does not hurt. He does not offer a premature spiritualization that says "contempt doesn't bother me because I have God." He says: it has gone on too long, it has saturated us, we can bear no more -- and therefore: have mercy upon us.
<br/><br/>
The New Testament does not eliminate this experience but transforms it. Jesus himself endured contempt -- "He was despised and rejected by men, a man of sorrows and acquainted with grief; and as one from whom men hide their faces he was despised, and we esteemed him not" (Isaiah 53:3). Hebrews 12:2 says that Jesus "despised the shame" -- he held contempt in contempt, enduring it in order to secure the joy set before him. The believer who suffers contempt for righteousness walks the same road as the crucified Lord, and shares in the hope of the same exaltation.`,
  },
  {
    color: GREEN,
    title: "The Communal Prayer: From I to We in the Songs of Ascents",
    body: `Psalm 123 begins in the singular -- "To you I lift up my eyes" (v. 1) -- and moves to the plural: "our eyes look to the LORD our God" (v. 2), "have mercy upon us" (vv. 3-4). This movement from individual to communal prayer is theologically significant. The pilgrim who begins as an individual ("I lift my eyes") arrives at Jerusalem as part of a community ("we look to God together"). The Songs of Ascents encode a journey from individual prayer to corporate worship.
<br/><br/>
The communal dimension of Psalm 123 reflects the corporate character of lament in the Psalter. Many psalms (44, 74, 79, 80, 83) are communal laments in which the whole people of God cry out together. Psalm 123 joins this tradition: it is not just one person who has had enough of contempt, but the whole community. And it is not just one person who waits for mercy, but "our eyes," the shared gaze of the pilgrim people.
<br/><br/>
Matthew Henry observes: "It is a comfort when we are under contempt, to remember that we are not alone; the whole church suffers with us, and suffers together with us, and looks to God together with us." There is profound pastoral wisdom here: the individual who feels crushed by contempt is invited into a community of shared lament, where the prayer "have mercy upon us" is larger than any individual's pain.
<br/><br/>
The New Testament grounds this communal prayer in the Body of Christ: "If one member suffers, all suffer together" (1 Corinthians 12:26). When one member of the church endures contempt, the whole body is called to pray "have mercy upon us" together. Corporate prayer is not just a ritual; it is the exercise of the Body's shared dependence on the God who is enthroned in heaven and who alone can give what is needed.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "To you I lift up my eyes, O you who are enthroned in the heavens!",
    comment: `The psalm opens in the first person singular, with the psalmist addressing God directly in the second person: "to you." The intimacy is immediate. The description "enthroned in the heavens" (hayyoshev bashamayim) is a divine title emphasizing transcendence and sovereignty -- the same title used in Psalm 2:4 ("He who sits in the heavens laughs") and Psalm 113:5. The sovereign God who rules from heaven is the one to whom the psalmist lifts his eyes. This pairing of God's transcendence with the psalmist's upward gaze establishes the posture of the entire psalm: looking up toward the one who is above all circumstances.`,
  },
  {
    ref: "v. 2",
    text: "Behold, as the eyes of servants look to the hand of their master, as the eyes of a maidservant to the hand of her mistress, so our eyes look to the LORD our God, till he has mercy upon us.",
    comment: `The longest verse in this short psalm carries its central theological image: the servant watching the master's hand. The double comparison (male servant and female servant) universalizes the analogy. Calvin writes: "The comparison is exactly appropriate: as servants keep their eyes fixed on their master's hand, ready to do whatever he beckons, so must we wait on God, alert to his will, ready to receive his mercy." The crucial phrase "till he has mercy upon us" (ad she-yechannenu) introduces both the specific request (mercy, chanan) and its temporal dimension (we watch until...). The servant does not determine how long to watch; the servant watches until the master moves.`,
  },
  {
    ref: "v. 3",
    text: "Have mercy upon us, O LORD, have mercy upon us, for we have had more than enough of contempt.",
    comment: `The petition shifts from third person ("our eyes look to the LORD") to direct address ("have mercy upon us, O LORD"), intensifying the urgency. The double petition -- "have mercy...have mercy" -- reflects overwhelm and desperation: the community has reached its limit. The Hebrew word shaba' (to have enough, to be sated) used here is often used of pleasant saturation (food, sleep, blessing), but here it is used ironically of saturation with contempt. Spurgeon: "They were not merely wearied with contempt, they were filled with it, even surfeited with it. As a man overfed with rich food turns from it with loathing, so they had turned from contempt as something they could stomach no more."`,
  },
  {
    ref: "v. 4",
    text: "Our soul has had more than enough of the scorn of those who are at ease, of the contempt of the proud.",
    comment: `The final verse identifies the agents of contempt: (1) "those who are at ease" (hashanannim) -- the comfortably prosperous who have never suffered and therefore cannot imagine why anyone would need to cry to God; (2) "the proud" (ge'im) -- those whose self-sufficiency has become arrogance. Both groups look down on the humble pilgrim community. The word "scorn" (la'ag) is particularly sharp -- it means mockery, ridicule, the kind of contempt that dehumanizes its object. Kidner: "The proud who have no need of God mock those who have need of nothing else." The psalmist does not curse these proud scorners; he simply brings their scorn before God and asks for mercy, leaving vindication to the only one who can truly give it.`,
  },
];

const APPLICATIONS = [
  {
    color: PURPLE,
    title: "Learning the Servant's Posture: What It Means to Wait on God",
    body: `Psalm 123 offers one of the most practical models of prayer in the entire Psalter: the servant watching the master's hand. This image challenges two common prayer postures that fall short of what the psalm describes. The first is the posture of the demander: the one who tells God what to do and expects immediate compliance. The second is the posture of the passive: the one who prays once, then gives up and assumes nothing will happen. The servant's posture is neither demanding nor passive; it is actively attentive -- eyes fixed on the master's hand, waiting for the signal of grace.
<br/><br/>
What does this look like practically? It means sustained, expectant prayer rather than one-time requests. It means returning to the same prayer day after day, watching for God's hand to move. It means paying attention to answers when they come -- not just continuing to ask but also watching and noticing what God is doing. And it means maintaining the servant's humility: the servant does not tell the master how to move his hand or when; the servant simply watches and waits.
<br/><br/>
<em>Prayer prompt</em>: Lord, I confess that I often come to you as a demander rather than a servant -- telling you what to do and then feeling disappointed when you do not comply on my timeline. Teach me the servant's posture: eyes lifted to you, watching your hand, waiting for your mercy with patient expectancy. You are enthroned in the heavens; I am your servant. Have mercy upon me. Amen.`,
  },
  {
    color: TEAL,
    title: "When Contempt Saturates the Soul: Gospel Resources for Shame",
    body: `The phrase "we have had more than enough of contempt" (v. 3) gives permission to name a form of suffering that is often overlooked in Christian circles: the wound of being looked down upon. Physical pain is generally acknowledged and treated. But the sustained experience of contempt -- being consistently dismissed, mocked, or ignored by those in power -- is a form of suffering that Scripture takes seriously even when the church does not.
<br/><br/>
The psalmist does not minimize this wound or spiritualize it prematurely. He says it plainly: we are saturated with it, we have had more than enough, our soul is full of it. And the appropriate response is to bring it to God and ask for mercy -- not to pretend it does not hurt, not to retaliate, not to seek vindication through our own means.
<br/><br/>
The gospel speaks directly into this experience. Jesus, "who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself...being born in the likeness of men...humbled himself by becoming obedient to the point of death, even death on a cross" (Philippians 2:6-8) -- this Jesus endured contempt at the deepest possible level. And God's response was the resurrection: "Therefore God has highly exalted him and bestowed on him the name that is above every name" (Philippians 2:9). For those saturated with contempt, this is the ultimate promise: what happened to Christ will happen to all who are in him.`,
  },
  {
    color: GOLD,
    title: "From I to We: The Indispensable Community of Prayer",
    body: `One of the most quietly profound things in Psalm 123 is the shift from "I" to "we" between verses 1 and 2. The individual who lifts his eyes to God arrives, through the act of prayer and pilgrimage, at a community that looks to God together. This is not a small thing. The experience of contempt and scorn that the psalm describes is profoundly isolating -- it tends to make the sufferer feel alone, unseen, cut off. The communal voice of the psalm directly counteracts this isolation.
<br/><br/>
Christian community -- the church -- exists in part to turn "I" prayers into "we" prayers. When one member of the body endures contempt, the whole body is called to look toward God together, to say "have mercy upon us" as though the contempt had been suffered by all. This is one of the most powerful things a church can do for a suffering member: to receive their individual lament into the community's voice and pray it together.
<br/><br/>
Practically: if you know someone who is suffering the wound of contempt -- social marginalization, mockery, being overlooked -- the gift you can give them is not primarily advice or comfort but shared prayer. "Our eyes look to the LORD our God" is a sentence that transforms an isolated individual into a member of a praying community. The body of Christ is the place where individual sorrows become communal supplications.`,
  },
  {
    color: GREEN,
    title: "Eyes Fixed on Jesus: Psalm 123 as Hebrews 12:2",
    body: `Hebrews 12:2 calls the suffering Christian to "look to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God." The structural parallel with Psalm 123 is exact: fix your eyes upward on the one who is enthroned in heaven, who endured contempt and scorn, and who is now exalted. In both texts, the remedy for suffering shame is not self-improvement or retaliation but sustained gaze at the one in whom mercy and exaltation are found.
<br/><br/>
For the Christian, Psalm 123 is not merely a historical document about an ancient pilgrim community; it is a contemporary prayer that finds its fulfillment in Christ. The God "enthroned in the heavens" is now identified as the Father of Jesus Christ, the God who raised Jesus from the dead and seated him "at his right hand in the heavenly places, far above all rule and authority and power and dominion" (Ephesians 1:20-21). To lift our eyes to this enthroned God is to lift our eyes to the Father of the crucified and risen Lord.
<br/><br/>
<em>Daily practice</em>: When the day's contempt -- real or imagined -- begins to press you down, physically lift your eyes. This is not a superstitious gesture; it is an embodied theological act that Psalm 123 endorses. As the servant fixes his eyes on the master's hand, fix your eyes on the exalted Christ, and pray: "To you I lift up my eyes, O you who are enthroned in the heavens. Have mercy upon me." Let the lifting of the eyes be a regular practice of orientation toward the sovereign, merciful God.`,
  },
];

export default function Psalm123Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0d0a1a 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 123</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; 4 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            To You I Lift Up My Eyes
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A communal Song of Ascents that models the posture of prayer: as servants watch their master's hand for the signal of grace, so the pilgrim community fixes its gaze on the enthroned God, waiting in patient dependence until he has mercy upon us.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;As the eyes of servants look to the hand of their master...so our eyes look to the LORD our God, till he has mercy upon us.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 123:2</span>
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 123</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 123 is one of the shorter Songs of Ascents, but it packs extraordinary theological depth into four verses. It is a communal lament that moves from individual prayer ("to you I lift up my eyes," v. 1) to communal petition ("have mercy upon us, O LORD," vv. 3&ndash;4), tracing the same movement from solitary pilgrim to worshipping community that characterizes the Songs of Ascents collection as a whole.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm&rsquo;s structure is elegantly simple. Verse 1 establishes the physical posture and theological orientation of prayer: eyes lifted to the enthroned God. Verse 2 develops this through an extended analogy: as servants watch their master&rsquo;s hand for signals of command or grace, so the community watches God. Verses 3&ndash;4 present the double petition for mercy and the reason for its urgency: the community has been saturated with contempt and scorn from those who are at ease and proud.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The setting of Psalm 123 in the Songs of Ascents places it between Psalm 122 (the joy of arriving in Jerusalem &mdash; "our feet are standing within your gates, O Jerusalem!") and Psalm 124 (the thanksgiving for rescue &mdash; "If it had not been the LORD who was on our side..."). This placement gives Psalm 123 a liturgical function: it is the cry of need that the collected community brings to God in the very house of God, surrounded by the joy of Psalm 122 but in acute need of the rescue that Psalm 124 will celebrate.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Scholars have noted that the central analogy of the servant watching the master&rsquo;s hand is particularly powerful as an image of prayer. Derek Kidner writes: &ldquo;The picture is of those who live to serve, whose attention is wholly given to the master&rsquo;s least indication of his will &mdash; here transposed to the key of need rather than duty, as they wait not for a command but for a sign of mercy.&rdquo; Tremper Longman III adds that the analogy captures &ldquo;both the attentiveness and the vulnerability of the one who waits &mdash; the servant cannot demand; he can only watch and wait.&rdquo;` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christians, Psalm 123 finds its deepest fulfillment in Christ, who himself endured contempt and scorn (Isaiah 53:3; Hebrews 12:2) and who now sits enthroned at the right hand of the Father (Ephesians 1:20). To lift our eyes to the enthroned God is now to look to the crucified and risen Lord, who has both modeled the suffering servant&rsquo;s patience and provided the ultimate mercy for which the psalmist longs.` }} />

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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 123 shapes Christian prayer and community.</p>
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
