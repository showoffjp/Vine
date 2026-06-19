"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion {
  id: string;
  title: string;
  ref: string;
  body: string;
}

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { id: "CE8QbkUCNK4", title: "Psalm 13 - How Long, O LORD? An Introduction to Lament" },
  { id: "Q2oNOlXzBhY", title: "The Structure of a Lament Psalm - Complaint, Petition, Praise" },
  { id: "8phkAg8PMHE", title: "When God Feels Far Away - Praying Psalm 13" },
  { id: "fNk_zzaMoSs", title: "From Complaint to Trust - The Turn in Psalm 13" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Short Psalm With a Long Cry",
    body:
      "Psalm 13 is one of the shortest of the lament psalms, yet it carries one of the loudest cries in all of Scripture. In only six verses David moves from the edge of despair to the steadiness of praise, and the journey he traces has become a map for every believer who has ever felt forgotten by God. The psalm opens with a question repeated four times over &mdash; &ldquo;How long?&rdquo; &mdash; and it is the question of a soul that has waited until waiting itself has become a kind of pain. There is no neat resolution of his circumstances here; what changes is not the situation but the singer. By the final verse David is no longer staring at his trouble but at the steadfast love of the LORD, and that single shift of gaze is enough to turn a complaint into a song.",
  },
  {
    heading: "The Three Movements of Lament",
    body:
      "Psalm 13 is the classic compact example of the three-part shape that biblical lament so often takes: complaint, petition, and trust or praise. The complaint comes first (vv.&nbsp;1&ndash;2), where David pours out the raw ache of feeling abandoned. The petition follows (vv.&nbsp;3&ndash;4), where he turns that ache into a direct request that God would act. And the resolution arrives last (vv.&nbsp;5&ndash;6), where, without any reported change in his enemies or his suffering, David lays hold of God&rsquo;s covenant love and resolves to sing. This movement is not a denial of the darkness of the first verses; it is the fruit of having brought that darkness honestly into the presence of God. Learning the shape of this psalm gives us permission to begin our own prayers where we actually are &mdash; in the complaint &mdash; while trusting that God can carry us all the way to the praise.",
  },
  {
    heading: "Context: Honest Prayer in the Hymnbook of Israel",
    body:
      "The book of Psalms is the prayer book and hymnbook of God&rsquo;s people, and it is striking that so many of its prayers are laments. Roughly a third of the psalms cry out from a place of pain, and Psalm 13 stands among the purest distillations of that cry. Its superscription assigns it to David and to the choirmaster, which means this complaint was never meant to be a private mutter of doubt to be hidden away in shame. It was set to music and sung in the public worship of Israel. The community of faith gave the trembling, doubting, hurting believer words to say out loud and a melody to carry them. That alone tells us something profound: God is not threatened by our honest questions, and He has woven the language of lament into the very worship He receives.",
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "The Legitimacy of Lament and Honest Complaint",
    ref: "Psalm 13:1&ndash;2",
    body:
      "<p>The first and perhaps most surprising lesson of Psalm 13 is that complaint can be prayer. David does not begin with praise, or with confession, or with careful theological qualification. He begins with an accusation thrown heavenward: &ldquo;How long, O LORD? Will you forget me forever?&rdquo; This is not the polished language of someone pretending all is well. It is the unguarded speech of a man at the end of his strength, and God receives it. The very presence of such words in inspired Scripture is permission &mdash; permission to be honest with God about our pain rather than papering over it with pious phrases we do not feel.</p>" +
      "<p>Lament is not the opposite of faith; it is an act of faith. The person who lashes out into empty silence is in despair, but the person who laments is still speaking <em>to God</em>. David&rsquo;s complaint is addressed by name to the LORD, his covenant God, because he still believes that God is there and that God can do something. To complain to God is to keep showing up at the door, to refuse to let go even while you wrestle. As Job, the Psalms, and the prophet Jeremiah all testify, the Scriptures make ample room for the believer to say, with tears, &ldquo;This is too hard, and I do not understand.&rdquo;</p>" +
      "<p>Cross references: <strong>Job 3:11&ndash;26</strong> (Job&rsquo;s anguished lament over his birth); <strong>Jeremiah 20:7&ndash;18</strong> (the prophet&rsquo;s raw complaint that God has deceived him); <strong>Habakkuk 1:2&ndash;4</strong> (&ldquo;O LORD, how long shall I cry for help?&rdquo;); <strong>Lamentations 3:1&ndash;20</strong> (the depths of grief brought before God).</p>",
  },
  {
    id: "t2",
    title: "The Fourfold &ldquo;How Long?&rdquo; as the Shape of the Pain",
    ref: "Psalm 13:1&ndash;2",
    body:
      "<p>Four times in two verses David asks the same haunting question: &ldquo;How long?&rdquo; How long will you forget me? How long will you hide your face from me? How long must I take counsel in my soul and have sorrow in my heart all the day? How long shall my enemy be exalted over me? The repetition is not careless; it is the very sound of grief, which circles back again and again to the same wound. Anyone who has lain awake in the small hours knows how the mind returns helplessly to the one thing it cannot fix. David gives that exhausting loop a voice.</p>" +
      "<p>The four questions also move inward and then outward in a revealing way. First the trouble seems to come from God Himself (&ldquo;will you forget me&hellip; hide your face&rdquo;); then it rises up from within David&rsquo;s own soul (&ldquo;sorrow in my heart&rdquo;); then it presses in from his enemies (&ldquo;shall my enemy be exalted&rdquo;). David feels surrounded &mdash; abandoned above, anguished within, assaulted without. The genius of the psalm is that it names all three at once. There is no single tidy source of his pain, and he does not pretend there is. He simply lays the whole tangle before God.</p>" +
      "<p>Cross references: <strong>Psalm 6:3</strong> (&ldquo;But you, O LORD &mdash; how long?&rdquo;); <strong>Psalm 90:13</strong> (&ldquo;Return, O LORD! How long?&rdquo;); <strong>Revelation 6:10</strong> (the martyrs&rsquo; cry, &ldquo;O Sovereign Lord&hellip; how long?&rdquo;); <strong>Psalm 35:17</strong> (&ldquo;How long, O Lord, will you look on?&rdquo;).</p>",
  },
  {
    id: "t3",
    title: "The Movement From Complaint to Petition to Trust",
    ref: "Psalm 13:1&ndash;6",
    body:
      "<p>The genius of Psalm 13 is its motion. It does not stay in the complaint, and it does not begin in the praise; it travels from one to the other through the doorway of petition. In verses 1&ndash;2 David <em>complains</em>; in verses 3&ndash;4 he <em>asks</em>; in verses 5&ndash;6 he <em>trusts</em> and resolves to <em>sing</em>. Each stage flows out of the one before. The honesty of the complaint clears the ground for the boldness of the petition, and the asking of the petition reawakens the memory of who God is, which becomes the seed of trust.</p>" +
      "<p>This shape teaches us how to pray our way through suffering rather than around it. We are not asked to leap from pain straight to praise, pretending the pain was never real. Nor are we meant to stay forever in the complaint, endlessly rehearsing the wound. Instead the psalm gives us a path: name the trouble truthfully, turn it into a request, and let the request lead us back to the steadfast love of God. The destination is praise, but the road runs through the valley, and the LORD walks every step of it with us.</p>" +
      "<p>Cross references: <strong>Philippians 4:6&ndash;7</strong> (turning anxiety into prayer and petition); <strong>Psalm 42&ndash;43</strong> (the threefold refrain &ldquo;Why are you cast down, O my soul?&rdquo;); <strong>2 Corinthians 12:8&ndash;10</strong> (Paul&rsquo;s thorn, his pleading, and his arrival at contented trust).</p>",
  },
  {
    id: "t4",
    title: "Resolution Through Renewed Trust, Not Changed Circumstances",
    ref: "Psalm 13:5&ndash;6",
    body:
      "<p>Here is the most important thing to notice about how Psalm 13 ends: nothing in David&rsquo;s situation has visibly changed. The enemy is not reported defeated. The face of God has not, within the psalm, been unhidden. The sorrow of verse 2 has not been answered by any rescue narrated in verse 5. And yet David says, &ldquo;<em>But</em> I have trusted in your steadfast love.&rdquo; The turn is not produced by a turn in his fortunes; it is produced by a turn of his eyes toward the unchanging love of God. The Hebrew word here is <em>hesed</em> &mdash; God&rsquo;s loyal, covenant, steadfast love that holds fast when everything else gives way.</p>" +
      "<p>This is enormously freeing. It means that the resolution of our laments does not have to wait for the resolution of our problems. We do not have to manufacture happy feelings or pretend the trouble is gone. We have to remember &mdash; deliberately, by faith &mdash; that God&rsquo;s steadfast love is real even when His face seems hidden, and to rest our weight on that love. The psalm ends not with relief but with trust, and that trust then blossoms into a resolve to sing. Joy is reached not by escaping the dark valley but by clinging to the One whose love does not let go within it.</p>" +
      "<p>Cross references: <strong>Lamentations 3:21&ndash;24</strong> (&ldquo;The steadfast love of the LORD never ceases&rdquo;); <strong>Romans 8:35&ndash;39</strong> (nothing can separate us from the love of God in Christ); <strong>Habakkuk 3:17&ndash;19</strong> (&ldquo;yet I will rejoice in the LORD&rdquo; though the fields are empty).</p>",
  },
  {
    id: "t5",
    title: "Psalm 13 as a Model for Processing Suffering",
    ref: "Psalm 13; Psalm 22; 42; 88",
    body:
      "<p>Psalm 13 belongs to a great family of lament psalms, and it serves as a kind of pattern for the rest. The laments give the suffering believer a sanctioned vocabulary &mdash; words that the church has prayed for three thousand years &mdash; so that no one need face the dark alone or in silence. Where Psalm 22 cries &ldquo;My God, my God, why have you forsaken me?&rdquo; and Psalm 42 asks &ldquo;Why are you cast down, O my soul?&rdquo; and Psalm 88 ends in unrelieved darkness, Psalm 13 holds the whole arc in miniature: the cry, the plea, and the recovered trust.</p>" +
      "<p>To learn these psalms is to be given permission to be honest with God, and a structure within which that honesty can become healing rather than mere venting. They teach us that the goal of lament is not catharsis but communion &mdash; bringing the whole of our broken experience into the presence of a faithful God who can be trusted with all of it. The believer who knows the laments is never without language, even when the heart is too heavy to compose its own.</p>" +
      "<p>Cross references: <strong>Psalm 22:1&ndash;31</strong> (forsakenness moving to praise); <strong>Psalm 42&ndash;43</strong> (thirsting for God in depression); <strong>Psalm 88</strong> (a lament that ends still in darkness, yet still addressed to God); <strong>Matthew 27:46</strong> (Jesus prays Psalm 22 from the cross).</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "The Fourfold &ldquo;How Long?&rdquo; &mdash; The Complaint",
    ref: "Psalm 13:1&ndash;2",
    body:
      "<p>&ldquo;How long, O LORD? Will you forget me forever? How long will you hide your face from me? How long must I take counsel in my soul and have sorrow in my heart all the day? How long shall my enemy be exalted over me?&rdquo; (13:1&ndash;2). The psalm bursts open in the middle of a feeling, with no introduction and no scene-setting. We are dropped straight into David&rsquo;s anguish, and the very first word is a question that has no answer yet: &ldquo;How long?&rdquo;</p>" +
      "<p>Notice the boldness of the accusation. David does not say &ldquo;it feels as though you have forgotten me.&rdquo; He says, &ldquo;Will you forget me forever? Will you hide your face from me?&rdquo; To be forgotten by God, to have His face hidden, is in the Old Testament the very picture of being cut off from blessing and life. David lays the charge directly at God&rsquo;s door. This is the freedom of the covenant relationship: he can speak to God the way only a child can speak to a father he trusts, even in his bitterest hour.</p>" +
      "<p>And yet observe what the complaint reveals about David&rsquo;s heart. The word &ldquo;forever&rdquo; betrays how endless the pain feels &mdash; suffering distorts our sense of time until a season seems like eternity. The phrase &ldquo;all the day&rdquo; tells of a sorrow that never lifts. Here is a man taking counsel only within his own soul, turning his trouble over and over inside himself with no relief, while his enemy seems to rise higher and higher. This is the complaint, raw and complete, and God lets it stand at the head of the psalm. He is not afraid of our honesty.</p>",
  },
  {
    id: "v2",
    title: "The Threefold Petition &mdash; Consider, Answer, Light Up My Eyes",
    ref: "Psalm 13:3&ndash;4",
    body:
      "<p>&ldquo;Consider and answer me, O LORD my God; light up my eyes, lest I sleep the sleep of death, lest my enemy say, &lsquo;I have prevailed over him,&rsquo; lest my foes rejoice because I am shaken&rdquo; (13:3&ndash;4). Here the psalm pivots. The four anguished questions give way to three urgent requests, and the direction of David&rsquo;s words shifts from pouring out the wound to pleading for the cure. This is the second movement of lament: petition.</p>" +
      "<p>The three requests rise in intensity. &ldquo;Consider&rdquo; &mdash; look at me, see my plight, do not pass me by. &ldquo;Answer me&rdquo; &mdash; break the dreadful silence; do not leave me without a word. &ldquo;Light up my eyes&rdquo; &mdash; the eyes of a dying or despairing person grow dim, but the eyes of one revived and given hope shine again; so David asks for the very spark of life and hope to be rekindled within him. And notice the tender phrase that frames it all: he prays to &ldquo;the LORD <em>my</em> God.&rdquo; Even in his distress, the relationship holds. The covenant bond is the ground on which he dares to ask.</p>" +
      "<p>David gives God reasons to act, which is itself an act of faith. &ldquo;Lest I sleep the sleep of death&rdquo; &mdash; his very life hangs in the balance. &ldquo;Lest my enemy say, I have prevailed&rdquo; &mdash; God&rsquo;s own honor is bound up with the fate of His servant. In effect David appeals to God&rsquo;s glory: if I fall, your name is mocked. This is how the saints have always prayed, laying hold of God&rsquo;s character and reputation, reminding Him of His promises, pleading not on the basis of their own worthiness but on the basis of who He is.</p>",
  },
  {
    id: "v3",
    title: "The Turn &mdash; But I Have Trusted in Your Steadfast Love",
    ref: "Psalm 13:5",
    body:
      "<p>&ldquo;But I have trusted in your steadfast love; my heart shall rejoice in your salvation&rdquo; (13:5). With one small word the whole psalm changes direction: &ldquo;<em>But</em>.&rdquo; Everything before this was complaint and plea, a soul pressed down by darkness. Now, suddenly, David plants his feet on solid ground. He does not say the darkness has lifted. He says, against the darkness, &ldquo;<em>But</em> I have trusted.&rdquo;</p>" +
      "<p>The object of his trust is precious: God&rsquo;s &ldquo;steadfast love,&rdquo; the Hebrew <em>hesed</em>. This is not a fickle affection that comes and goes with circumstances, but the loyal, covenant-keeping love of God that He has sworn to His people and will not revoke. It is the same love celebrated in Lamentations 3, the love that &ldquo;never ceases&rdquo; and whose &ldquo;mercies never come to an end.&rdquo; In the very hour when David feels forgotten, he chooses to rest his whole weight on the love that does not forget. Feelings said one thing; faith said another; and David sided with faith.</p>" +
      "<p>And out of that trust springs an astonishing resolve: &ldquo;my heart shall rejoice in your salvation.&rdquo; Note the tense. Salvation has not yet visibly arrived, but David speaks of rejoicing in it as a certainty, as already sure. This is the logic of faith, which counts the promise of God as good as fulfilled. The trust of verse 5 is the hinge on which the whole psalm swings from the night of complaint toward the morning of praise.</p>",
  },
  {
    id: "v4",
    title: "The Resolution &mdash; I Will Sing, He Has Dealt Bountifully",
    ref: "Psalm 13:6",
    body:
      "<p>&ldquo;I will sing to the LORD, because he has dealt bountifully with me&rdquo; (13:6). The psalm that began with a cry of abandonment ends with a song of gratitude. The same David who four times asked &ldquo;how long?&rdquo; now lifts his voice to sing. Nothing in the recorded circumstances has changed, but everything in the singer has changed, because he has turned to look at the steadfast love of his God.</p>" +
      "<p>The reason David gives is striking: &ldquo;because he <em>has</em> dealt bountifully with me.&rdquo; He looks back over his life and remembers the long history of God&rsquo;s generosity. The God who has dealt bountifully with him in the past is the same God he is trusting in the present and the future. Remembering past mercy is one of the great medicines for present despair. When today is dark, faith reaches back to gather up the evidence of God&rsquo;s faithfulness and carries it forward as fuel for hope.</p>" +
      "<p>So Psalm 13 closes where every lament longs to arrive: not necessarily in changed conditions, but in renewed trust that overflows into praise. The journey from verse 1 to verse 6 is short on the page but vast in the soul &mdash; the whole distance from &ldquo;will you forget me forever?&rdquo; to &ldquo;I will sing to the LORD.&rdquo; And the bridge across that distance is a single, steadfast, undeserved love that holds when all else fails.</p>",
  },
];

const applicationBlocks: { heading: string; body: string }[] = [
  {
    heading: "Give Yourself Permission to Lament",
    body:
      "<p>Many sincere believers carry an unspoken rule that they must never say anything negative to God, as though honesty were a kind of disloyalty. Psalm 13 quietly dismantles that rule. David, &ldquo;a man after God&rsquo;s own heart,&rdquo; begins his prayer by telling God He has seemingly forgotten and abandoned him. If such words can be inspired Scripture and sung in the worship of God&rsquo;s people, then we too may bring our real anguish into His presence. Suppressing our pain does not make us more spiritual; it only pushes us away from the God who invites us to cast all our cares on Him. Lament is the God-given language for sufferers, and learning to use it is part of growing up in faith.</p>",
  },
  {
    heading: "Let Your Complaint Become a Prayer",
    body:
      "<p>There is a crucial difference between complaining <em>about</em> God to other people and complaining <em>to</em> God Himself. The first corrodes faith; the second is faith in action. David does not gossip about his troubles behind God&rsquo;s back; he turns and faces Him and says, &ldquo;How long, O LORD?&rdquo; When you are tempted to grumble, to vent to anyone who will listen, or to nurse your wounds in bitter silence, take David&rsquo;s path instead. Turn the whole complaint into a prayer, addressed by name to the God who can actually do something about it. The mere act of directing our pain Godward is the first step out of despair and back toward trust.</p>",
  },
  {
    heading: "Follow the Path From Complaint to Trust",
    body:
      "<p>When you do not know how to pray in a season of suffering, let Psalm 13 give you a structure. Begin honestly with the complaint: name the trouble, the fear, the loneliness, exactly as it is. Then move into petition: turn that trouble into a specific request, asking God to consider, to answer, to light up your eyes. Then, deliberately and by faith, make the turn: &ldquo;<em>But</em> I have trusted in your steadfast love.&rdquo; You may not feel the trust at first; speak it anyway, as a confession of what is true about God even when your feelings disagree. The path runs from complaint through petition to trust, and walking it again and again slowly retrains the heart toward hope.</p>",
  },
  {
    heading: "Anchor Your Hope in God&rsquo;s Love, Not Your Circumstances",
    body:
      "<p>The deepest lesson of Psalm 13 is that the resolution of our laments need not wait for the resolution of our problems. David finds peace not because his enemy is defeated but because he fixes his eyes on God&rsquo;s steadfast love. When you are waiting on an answer that has not come, do not tie your soul&rsquo;s rest to the outcome you are hoping for. Tie it instead to the unchanging <em>hesed</em> of God, the covenant love revealed supremely at the cross of Christ, where God proved once and for all that He will never forget or forsake His own. Remember His past faithfulness, count the ways He has &ldquo;dealt bountifully&rdquo; with you, and let that remembrance carry you, like David, all the way to a song.</p>",
  },
];

const reflectionQuestions = [
  "Where in your life right now are you tempted to ask &ldquo;How long, O LORD?&rdquo; &mdash; and have you brought that question honestly to God, or kept it hidden?",
  "Do you tend to complain <em>about</em> God to others, or to bring your complaint directly <em>to</em> God? What would change if you turned your grumbling into prayer?",
  "Which of David&rsquo;s three petitions &mdash; &ldquo;consider,&rdquo; &ldquo;answer,&rdquo; &ldquo;light up my eyes&rdquo; &mdash; most expresses the cry of your heart today?",
  "What does it mean for you that the turn in verse 5 comes not from changed circumstances but from a renewed focus on God&rsquo;s steadfast love?",
  "Looking back over your life, what are some of the ways God has &ldquo;dealt bountifully&rdquo; with you? How might remembering them fuel your trust in a present trial?",
  "Are there laments &mdash; like Psalm 22, 42, or 88 &mdash; that you could pray when your own words run out? How might the church&rsquo;s ancient prayers give you language for your sorrow?",
];

const closingPrayer =
  "<p>O LORD, my God, I come to you in the honesty that your word invites. There are days when I feel forgotten, when your face seems hidden and the sorrow lingers all the day long. I do not understand why the waiting is so long. Consider me; answer me; light up my eyes, lest I sleep the sleep of despair. And even now, before anything has changed, teach my heart to make the great turn: <em>but</em> I have trusted in your steadfast love. You have dealt bountifully with me in days past, and supremely in giving your Son to die and rise for me, that I might never truly be forsaken. So I will trust, and I will sing, even in the night, until the morning of your salvation breaks. In the name of Jesus, who prayed the laments before me and rose in triumph, Amen.</p>";

export default function Psalm13Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const accordionStyle = (active: boolean): React.CSSProperties => ({
    background: CARD,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: "#B7A6F0", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 18 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 14px", fontWeight: 800, letterSpacing: -1 }}>
            Psalm 13
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 26px", lineHeight: 1.5, maxWidth: 640 }}>
            The fourfold &ldquo;how long?&rdquo; lament that turns to trust &mdash; from feeling forgotten by God to singing of His steadfast love.
          </p>
          <div
            style={{
              background: `linear-gradient(135deg, ${CARD}, #16122a)`,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 14,
              padding: "1.5rem 1.6rem",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 13:5&ndash;6
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;But I have trusted in your steadfast love; my heart shall rejoice in your salvation. I will sing to the LORD, because he has dealt bountifully with me.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: 14,
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: `1px solid ${active ? PURPLE : BORDER}`,
                  borderRadius: 999,
                  padding: "9px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            {overviewBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.5rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <p
                  style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}
            <div
              style={{
                marginTop: "2rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.5rem 1.6rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.15rem", color: TEAL, fontWeight: 700 }}>
                The Structure at a Glance
              </h3>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                {[
                  { label: "Complaint", ref: "vv.&nbsp;1&ndash;2", desc: "the fourfold &ldquo;how long?&rdquo;" },
                  { label: "Petition", ref: "vv.&nbsp;3&ndash;4", desc: "consider, answer, light up my eyes" },
                  { label: "Trust", ref: "v.&nbsp;5", desc: "but I have trusted in your steadfast love" },
                  { label: "Praise", ref: "v.&nbsp;6", desc: "I will sing, he has dealt bountifully" },
                ].map((row, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 3 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <span style={{ color: GOLD, fontWeight: 700, minWidth: 78 }}>{row.label}</span>
                    <span
                      style={{ color: MUTED, fontSize: 13, minWidth: 86 }}
                      dangerouslySetInnerHTML={{ __html: row.ref }}
                    />
                    <span
                      style={{ color: "#D6D6E6", fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: row.desc }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            {themeItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <span
                        style={{ display: "block", fontSize: 12.5, color: PURPLE, marginTop: 4, fontWeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                    </span>
                    <span style={{ color: PURPLE, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p style={{ color: MUTED, marginBottom: "1.6rem", fontSize: "1.02rem", lineHeight: 1.6 }}>
              Work through Psalm 13 section by section. Tap each heading to expand the commentary.
            </p>
            {verseItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: 12.5, color: GOLD, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </span>
                    <span style={{ color: GOLD, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            {applicationBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.4rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <div
                  style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${TEAL}`,
                borderRadius: 14,
                padding: "1.6rem 1.7rem",
                margin: "2.2rem 0",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "1.25rem", color: TEAL, fontWeight: 700 }}>
                Questions for Reflection
              </h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#D6D6E6" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: 14, fontSize: "1.02rem", lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", margin: "2.4rem 0 1.2rem", fontWeight: 700, color: TEXT }}>
              Watch &amp; Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 18,
                marginBottom: "2.4rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "0.9rem 1rem", fontSize: 14, color: "#D6D6E6", lineHeight: 1.45 }}>
                    {v.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #131f18)`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 14,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.25rem", color: GREEN, fontWeight: 700 }}>
                A Closing Prayer
              </h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#E4E2F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>

            <p style={{ marginTop: "2.4rem", textAlign: "center", color: MUTED, fontSize: 14 }}>
              <span style={{ color: ROSE }}>&hearts;</span>&nbsp; Continue your study with the other lament psalms &mdash; Psalm 22, 42, and 88 &mdash; and with Psalm 30, where weeping turns to dancing.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
