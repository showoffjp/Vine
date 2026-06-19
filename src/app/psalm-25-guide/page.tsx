"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 25 - Show Me Your Ways, O LORD" },
  { videoId: "Q2oNOlXzBhY", title: "The Acrostic Prayer for Guidance Explained" },
  { videoId: "8phkAg8PMHE", title: "Remember Not the Sins of My Youth - Grace in Psalm 25" },
  { videoId: "fNk_zzaMoSs", title: "The Friendship of the LORD for Those Who Fear Him" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-soul",
    title: "Lifting Up the Soul in Trust",
    reference: "Psalm 25:1-2, 15",
    body:
      "<p>The psalm opens with a deliberate act of the will: &ldquo;To you, O LORD, I lift up my soul. O my God, in you I trust&rdquo; (25:1-2). To lift up the soul is to raise the whole inner self &mdash; desires, fears, hopes, and the deep ache of need &mdash; and to place it consciously into the hands of God. It is the opposite of carrying our burdens alone. David does not begin by analyzing his problem; he begins by relocating his soul, lifting it off the ground of his own anxiety and setting it upon the LORD.</p>" +
      "<p>This posture is sustained to the very end of the psalm: &ldquo;My eyes are ever toward the LORD, for he will pluck my feet out of the net&rdquo; (25:15). The lifting of the soul at the start and the fixing of the eyes at the close form bookends of trust around the whole prayer. Whatever the nets and snares of life, the gaze of faith is turned upward and held there.</p>" +
      "<p>The New Testament echoes this disposition when Peter urges us to be &ldquo;casting all your anxieties on him, because he cares for you&rdquo; (1 Peter 5:7). To lift up the soul is to cast every care upward into the keeping of a God who has proven himself trustworthy. It is the first and most basic movement of prayer.</p>",
  },
  {
    id: "t-guidance",
    title: "The Prayer for Divine Guidance",
    reference: "Psalm 25:4-5, 8-9",
    body:
      "<p>At the heart of Psalm 25 beats a longing to be taught: &ldquo;Make me to know your ways, O LORD; teach me your paths. Lead me in your truth and teach me&rdquo; (25:4-5). Notice the piling up of verbs &mdash; make me know, teach me, lead me, teach me again. David is not content with information about God; he wants to be led along God&rsquo;s actual paths, to walk in the truth and not merely to admire it from a distance.</p>" +
      "<p>This is not the prayer of a man who has no map. David knew the law of God well. Yet he understood that knowing the commandment and walking in it are two different things, and that only God can open the eyes of the heart and incline the will to obey. &ldquo;Good and upright is the LORD; therefore he instructs sinners in the way. He leads the humble in what is right, and teaches the humble his way&rdquo; (25:8-9).</p>" +
      "<p>The condition for being taught is humility. God leads &ldquo;the humble,&rdquo; the ones who have stopped insisting on their own wisdom. Jesus rejoiced that the Father had &ldquo;hidden these things from the wise and understanding and revealed them to little children&rdquo; (Matthew 11:25). The path of guidance begins on the knees.</p>",
  },
  {
    id: "t-hesed",
    title: "Mercy and Steadfast Love from of Old",
    reference: "Psalm 25:6-7, 10",
    body:
      "<p>David appeals not to his own merit but to the ancient mercy of God: &ldquo;Remember your mercy, O LORD, and your steadfast love, for they have been from of old&rdquo; (25:6). The word translated &ldquo;steadfast love&rdquo; is hesed &mdash; God&rsquo;s covenant loyalty, his faithful, unbreakable commitment to his people. David reminds God of nothing God has forgotten; rather he leans his whole weight on a love that predates his sin and outlasts his failures.</p>" +
      "<p>This hesed is &ldquo;from of old,&rdquo; older than David&rsquo;s troubles, older than David himself. It is the love that bound God to Abraham and that runs like a golden thread through the whole story of redemption. &ldquo;All the paths of the LORD are steadfast love and faithfulness, for those who keep his covenant and his testimonies&rdquo; (25:10). Every path God leads us along is paved with hesed.</p>" +
      "<p>To pray well in distress is to appeal, as David does, not to our deserving but to God&rsquo;s character. We come pleading the mercy that is older than the world, the love revealed at last and fully in the cross of Christ, where steadfast love and faithfulness meet.</p>",
  },
  {
    id: "t-pardon",
    title: "Remember Not the Sins of My Youth",
    reference: "Psalm 25:7, 11, 18",
    body:
      "<p>Woven through this prayer for guidance is a parallel prayer for pardon. &ldquo;Remember not the sins of my youth or my transgressions; according to your steadfast love remember me, for the sake of your goodness, O LORD&rdquo; (25:7). David asks God to forget the very thing he himself cannot forget &mdash; the failures of his earlier years that still rise to accuse him.</p>" +
      "<p>His plea grows bolder still: &ldquo;For your name&rsquo;s sake, O LORD, pardon my guilt, for it is great&rdquo; (25:11). This is one of the most remarkable petitions in the Psalter. David does not minimize his sin to make forgiveness easier; he magnifies it &mdash; &ldquo;for it is great&rdquo; &mdash; and asks for pardon precisely on that ground, because a great guilt requires a great mercy, and the greatness of the mercy glorifies the name of God.</p>" +
      "<p>Here the psalm runs straight into the gospel. The God who is asked to &ldquo;remember not&rdquo; our sins answers in Christ: &ldquo;I will remember their sins no more&rdquo; (Hebrews 8:12). At the cross our great guilt was met by a greater grace, so that the sins of our youth and of all our years are blotted out and remembered against us no more.</p>",
  },
  {
    id: "t-friendship",
    title: "The Friendship of the LORD",
    reference: "Psalm 25:12-14",
    body:
      "<p>Near the center of the psalm stands one of its most tender promises: &ldquo;The friendship of the LORD is for those who fear him, and he makes known to them his covenant&rdquo; (25:14). The word rendered &ldquo;friendship&rdquo; carries the idea of intimate counsel, the confidential conversation shared among close companions. God does not merely command those who fear him from a distance; he draws them near and opens his heart to them.</p>" +
      "<p>This intimacy is reserved for &ldquo;those who fear him.&rdquo; The fear of the LORD here is not cringing terror but reverent love, the awe that takes God seriously and bows before him. To such a soul God grants a friendship the careless never know: &ldquo;Who is the man who fears the LORD? Him will he instruct in the way that he should choose&rdquo; (25:12).</p>" +
      "<p>Jesus deepened this promise for his disciples: &ldquo;No longer do I call you servants&hellip; but I have called you friends, for all that I have heard from my Father I have made known to you&rdquo; (John 15:15). The secret counsel of the LORD, glimpsed by David, is poured out fully on those who belong to Christ.</p>",
  },
  {
    id: "t-acrostic",
    title: "The Acrostic Structure",
    reference: "Psalm 25:1-22",
    body:
      "<p>Psalm 25 is an acrostic: in the Hebrew, each verse begins with a successive letter of the alphabet, from aleph to taw. This careful design is not mere decoration. The alphabet is the whole toolkit of language, and to pray from A to Z is to lay the entire range of one&rsquo;s need before God, holding nothing back. It is a prayer that means to be complete.</p>" +
      "<p>The acrostic form also serves teaching and memory. A psalm ordered by the alphabet is easier to learn by heart, and a psalm meant to be carried in the heart is meant to shape a life. The very structure quietly reinforces the content: here is a prayer to be memorized, internalized, and prayed again and again until its longings become our own.</p>" +
      "<p>There is a deeper lesson in the form. Faith does not pour out in chaos but learns an ordered trust, taking up the whole alphabet of sorrow and hope and offering it deliberately to God. The acrostic teaches us that even our most desperate prayers can be patient, thorough, and shaped by reverence.</p>",
  },
  {
    id: "t-weave",
    title: "Guidance, Forgiveness, and Covenant",
    reference: "Psalm 25:4-11",
    body:
      "<p>What makes Psalm 25 so rich is the way it refuses to separate three things we often keep apart: guidance, forgiveness, and covenant relationship. David does not first get forgiven and then, in a separate transaction, ask for guidance. The two petitions are braided together: &ldquo;Lead me in your truth and teach me&hellip; remember not the sins of my youth&rdquo; (25:5, 7).</p>" +
      "<p>The logic is profound. We cannot walk God&rsquo;s paths while the guilt of the past chains our feet; and we cannot be truly pardoned without being set on a new road. Forgiveness and guidance are two sides of the one work of grace, and both flow from the covenant in which God has bound himself in steadfast love to his people.</p>" +
      "<p>So the psalm holds together what the gospel holds together. In Christ we are both justified and led, both pardoned and discipled, both forgiven our great guilt and taught the way we should choose &mdash; all because God has remembered his covenant and made us his own.</p>",
  },
];

interface VerseSection {
  id: string;
  reference: string;
  title: string;
  body: string;
}

const verseSections: VerseSection[] = [
  {
    id: "v-1",
    reference: "Psalm 25:1-3",
    title: "To You, O LORD, I Lift Up My Soul",
    body:
      "<p>&ldquo;To you, O LORD, I lift up my soul. O my God, in you I trust; let me not be put to shame; let not my enemies exult over me. Indeed, none who wait for you shall be put to shame; they shall be ashamed who are wantonly treacherous&rdquo; (25:1-3).</p>" +
      "<p>The psalm begins where all true prayer begins &mdash; with the soul turned toward God. David lifts up his whole inner being and rests it in the LORD, and from that posture of trust he makes his first request: &ldquo;let me not be put to shame.&rdquo; In the ancient world shame meant public disgrace, the proof that one&rsquo;s hope had been misplaced.</p>" +
      "<p>David grounds his confidence in a great principle: &ldquo;none who wait for you shall be put to shame&rdquo; (25:3). The one who trusts in God may be tested, but will never finally be disappointed. The treacherous will be shamed; the waiting will not. As Paul writes, &ldquo;hope does not put us to shame, because God&rsquo;s love has been poured into our hearts&rdquo; (Romans 5:5).</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 25:4-7",
    title: "Make Me to Know Your Ways",
    body:
      "<p>&ldquo;Make me to know your ways, O LORD; teach me your paths. Lead me in your truth and teach me, for you are the God of my salvation; for you I wait all the day long. Remember your mercy, O LORD, and your steadfast love, for they have been from of old. Remember not the sins of my youth or my transgressions; according to your steadfast love remember me, for the sake of your goodness, O LORD&rdquo; (25:4-7).</p>" +
      "<p>Here the twin themes of the psalm sound together. David prays first to be taught God&rsquo;s ways, then to be forgiven his sins, and he binds both petitions to the steadfast love of God. He waits &ldquo;all the day long&rdquo; &mdash; not a momentary glance toward God but a settled, patient orientation of the whole day.</p>" +
      "<p>The plea &ldquo;remember not the sins of my youth&rdquo; reaches the heart of every honest believer. We carry old failures that memory will not release. David asks God to remember instead his mercy, and to remember the sinner himself only through the lens of that steadfast love &mdash; the very thing the gospel secures in Christ.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 25:8-11",
    title: "Good and Upright Is the LORD",
    body:
      "<p>&ldquo;Good and upright is the LORD; therefore he instructs sinners in the way. He leads the humble in what is right, and teaches the humble his way. All the paths of the LORD are steadfast love and faithfulness, for those who keep his covenant and his testimonies. For your name&rsquo;s sake, O LORD, pardon my guilt, for it is great&rdquo; (25:8-11).</p>" +
      "<p>David turns from petition to reflection on the character of God. Because the LORD is good and upright, he stoops to instruct sinners &mdash; not the worthy, but sinners; not the proud, but the humble. The grace that teaches is the same grace that pardons.</p>" +
      "<p>The section climbs to a daring height: &ldquo;pardon my guilt, for it is great.&rdquo; The greatness of the sin becomes the very reason for the appeal. A small mercy could not cover a great guilt; therefore David asks God to act for his name&rsquo;s sake, that the splendor of divine forgiveness might shine. This is the cry the cross answers in full.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 25:12-15",
    title: "The Friendship of the LORD",
    body:
      "<p>&ldquo;Who is the man who fears the LORD? Him will he instruct in the way that he should choose. His soul shall abide in well-being, and his offspring shall inherit the land. The friendship of the LORD is for those who fear him, and he makes known to them his covenant. My eyes are ever toward the LORD, for he will pluck my feet out of the net&rdquo; (25:12-15).</p>" +
      "<p>At the psalm&rsquo;s center stands its sweetest promise. The one who fears the LORD is granted instruction, well-being, inheritance, and above all the friendship of God &mdash; his intimate counsel, his open heart. The fear of the LORD does not push God away; it draws the soul into a confidential nearness the careless never taste.</p>" +
      "<p>David&rsquo;s response is the steady gaze of faith: &ldquo;My eyes are ever toward the LORD&rdquo; (25:15). Surrounded by nets and snares, he keeps his eyes fixed upward, confident that the God who befriends him will also free him. The friendship of the LORD and the rescue of the LORD belong together.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 25:16-22",
    title: "Turn to Me and Be Gracious",
    body:
      "<p>&ldquo;Turn to me and be gracious to me, for I am lonely and afflicted. The troubles of my heart are enlarged; bring me out of my distresses. Consider my affliction and my trouble, and forgive all my sins&hellip; Oh, guard my soul, and deliver me! Let me not be put to shame, for I take refuge in you&hellip; Redeem Israel, O God, out of all his troubles&rdquo; (25:16-22).</p>" +
      "<p>The psalm closes as it must, returning from lofty truth to the raw reality of trouble. David is lonely, afflicted, his heart enlarged with grief. He does not pretend the distress away; he names it honestly and asks God to turn toward him, to consider, to guard, to deliver. And once more he asks God to &ldquo;forgive all my sins&rdquo; (25:18).</p>" +
      "<p>The final verse widens the prayer beyond the self: &ldquo;Redeem Israel, O God, out of all his troubles&rdquo; (25:22). The individual sufferer remembers the whole people of God and prays for them all. So the acrostic that began with one soul lifted up ends with the redemption of the entire covenant community &mdash; a prayer answered, at last, in the Redeemer who saves his people from their sins.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-lift",
    title: "Begin by Lifting Up Your Soul",
    body:
      "<p>Psalm 25 teaches us how to begin in prayer. Before we explain our problem or rehearse our plan, we lift the soul to God: &ldquo;To you, O LORD, I lift up my soul&rdquo; (25:1). This is a daily, deliberate act. Each morning we may consciously raise the whole burden of the inner life &mdash; its fears, longings, and unfinished griefs &mdash; and set it down in the hands of God.</p>" +
      "<p>Try praying the first verse slowly before bringing any request. Let the soul be lifted first, so that whatever follows is spoken from a place of trust rather than panic. The posture changes the prayer.</p>",
  },
  {
    id: "a-teach",
    title: "Pray to Be Taught the Way",
    body:
      "<p>&ldquo;Make me to know your ways&rdquo; (25:4) is a prayer for every decision and crossroad. When we face a choice, we are tempted to lean on our own cleverness; Psalm 25 sends us instead to the One who &ldquo;leads the humble in what is right&rdquo; (25:9). The condition is humility &mdash; the willingness to be led rather than to insist on our own road.</p>" +
      "<p>Make this your prayer over the daily reading of Scripture and over the larger turnings of life. Ask not merely to understand God&rsquo;s truth but to be led along its paths, that knowing and walking may become one.</p>",
  },
  {
    id: "a-grace",
    title: "Bring Your Old Failures to Grace",
    body:
      "<p>Many believers are haunted by &ldquo;the sins of my youth&rdquo; (25:7) &mdash; failures long past that memory keeps dragging into the present. David shows us what to do with them: not to bury or excuse them, but to bring them openly to God and ask him to remember them no more, on the ground of his steadfast love.</p>" +
      "<p>The gospel makes this prayer certain of its answer. In Christ, God has promised, &ldquo;I will remember their sins no more&rdquo; (Hebrews 8:12). When old guilt accuses you, answer it with the cross. Your great guilt has been met by a greater grace, and the past is blotted out.</p>",
  },
  {
    id: "a-friend",
    title: "Cultivate the Fear and Friendship of the LORD",
    body:
      "<p>&ldquo;The friendship of the LORD is for those who fear him&rdquo; (25:14). The path to intimacy with God runs through reverence &mdash; taking him seriously, bowing before him, ordering life around his worth. This is not the cold fear that keeps its distance, but the warm awe that draws near.</p>" +
      "<p>Through Christ this friendship is opened fully to us: &ldquo;I have called you friends&rdquo; (John 15:15). Cultivate it by attending to his Word, by honest prayer, and by a reverent obedience that takes God at his word. The soul that fears the LORD is welcomed into his confidence.</p>",
  },
  {
    id: "a-honest",
    title: "Be Honest About Distress While Trusting",
    body:
      "<p>The psalm ends in raw honesty: &ldquo;I am lonely and afflicted. The troubles of my heart are enlarged&rdquo; (25:16-17). David models a faith that does not deny suffering. We need not pretend to be fine before God; we may name the loneliness, the trouble, the enlarged heart, and ask him to turn toward us and consider.</p>" +
      "<p>Yet honesty about pain coexists with trust. In the same breath David takes refuge in God and prays for the redemption of all God&rsquo;s people. We too may hold our grief and our hope together, telling God the truth while waiting on him all the day long.</p>",
  },
];

const reflectionQuestions = [
  "What would it look like, in concrete terms, for you to &ldquo;lift up your soul&rdquo; to God at the start of each day?",
  "Where in your life right now do you most need to pray, &ldquo;Make me to know your ways&rdquo;? What decision are you trying to make on your own wisdom?",
  "Are there &ldquo;sins of my youth&rdquo; that still accuse you? How does the promise that God remembers them no more change the way you carry them?",
  "What does it mean that God offers his &ldquo;friendship&rdquo; and intimate counsel to those who fear him? How might reverence deepen your nearness to God?",
  "Psalm 25 weaves guidance, forgiveness, and covenant together. Which of these three do you most need to receive from God today?",
  "How does David&rsquo;s honesty about being &ldquo;lonely and afflicted&rdquo; encourage you to pray truthfully about your own distress?",
];

const closingPrayer =
  "<p>O LORD, to you I lift up my soul. In you I trust; let me not be put to shame. Make me to know your ways and teach me your paths; lead me in your truth, for you are the God of my salvation, and for you I wait all the day long.</p>" +
  "<p>Remember your mercy and your steadfast love, which have been from of old. Remember not the sins of my youth or my transgressions; according to your steadfast love remember me, for the sake of your goodness, O LORD. For your name&rsquo;s sake, pardon my guilt, for it is great &mdash; and you are great in mercy.</p>" +
  "<p>Grant me the fear that draws near to you, and bring me into the friendship you give to those who fear you. Keep my eyes ever toward you; pluck my feet from every net; turn to me and be gracious. And redeem your whole people out of all their troubles, through Jesus Christ our Lord, in whom your steadfast love and faithfulness have met. Amen.</p>";

export default function Psalm25Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
            Psalm 25
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            An Acrostic Prayer for Guidance, Pardon, and Protection
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 25:4-5
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;Make me to know your ways, O LORD; teach me your paths. Lead me in your truth and teach me, for you are the God of my salvation; for you I wait all the day long.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", borderBottom: "1px solid " + BORDER, paddingBottom: 12 }}>
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: "1px solid " + (active ? PURPLE : BORDER),
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>Overview</h2>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 25 is a prayer of David, and one of the gems of the Psalter. It is an acrostic &mdash; in the Hebrew each verse begins with a successive letter of the alphabet &mdash; and within that careful frame David pours out a heart that longs for three things at once: to be guided, to be forgiven, and to be drawn into the friendship of God. These three threads are not kept apart but braided together, so that guidance and pardon and covenant intimacy become one seamless work of grace.</p>" +
                  "<p>The psalm opens with the soul lifted up to God in trust (25:1-3) and closes with the same soul still waiting, eyes ever toward the LORD, asking God to redeem his whole people out of all their troubles (25:15-22). Between these bookends David prays the great petitions for which the psalm is loved: &ldquo;Make me to know your ways&rdquo; (25:4), &ldquo;Remember not the sins of my youth&rdquo; (25:7), and &ldquo;For your name&rsquo;s sake, O LORD, pardon my guilt, for it is great&rdquo; (25:11).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEAL }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The acrostic flows as a single, ordered prayer, but its movement can be traced in five stages:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>25:1-3</strong> &mdash; The soul lifted up; none who wait will be put to shame.</li>" +
                    "<li><strong>25:4-7</strong> &mdash; The twin prayer for guidance and pardon, grounded in mercy.</li>" +
                    "<li><strong>25:8-11</strong> &mdash; The good and upright LORD instructs sinners and pardons great guilt.</li>" +
                    "<li><strong>25:12-15</strong> &mdash; The friendship of the LORD for those who fear him.</li>" +
                    "<li><strong>25:16-22</strong> &mdash; Honest distress, the plea to be guarded, and the redemption of Israel.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 25 belongs to the prayers of David, the shepherd-king who knew both the heights of God&rsquo;s favor and the depths of his own failure. The plea to &ldquo;remember not the sins of my youth&rdquo; comes from a man whose later life bore the scars of grievous sin, and who had learned that his only hope lay in the steadfast love of God, the hesed that is &ldquo;from of old&rdquo; (25:6). The acrostic form makes the psalm a teaching prayer, easy to memorize and meant to be carried in the heart &mdash; a complete prayer, from A to Z, for the soul that wants to walk with God.</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Key Themes</h2>
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT }}>{item.title}</span>
                      <span style={{ display: "block", fontSize: 13, color: PURPLE, marginTop: 4, fontWeight: 600 }}>{item.reference}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Verse by Verse</h2>
            {verseSections.map((sec) => {
              const isOpen = open === sec.id;
              return (
                <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(sec.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: 13, color: TEAL, fontWeight: 700, letterSpacing: 0.5 }}>{sec.reference}</span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT, marginTop: 4 }}>{sec.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Application</h2>
            {appSections.map((sec) => (
              <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.4rem 1.6rem", marginBottom: 14 }}>
                <h3 style={{ fontSize: "1.18rem", fontWeight: 700, margin: "0 0 0.6rem", color: GREEN }}>{sec.title}</h3>
                <div
                  style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8" }}
                  dangerouslySetInnerHTML={{ __html: sec.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + ROSE, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.75rem 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 1rem", color: ROSE }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "1.02rem", lineHeight: 1.65, color: "#D9D9E8" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem", fontSize: "0.95rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + PURPLE, borderRadius: 10, padding: "1.75rem 1.9rem", marginTop: "2.25rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: PURPLE }}>A Closing Prayer</h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#E4E4F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
