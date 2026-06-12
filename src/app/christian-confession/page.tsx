"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_christianconfession_entries";

interface CNFEntry {
  id: string;
  date: string;
  confessed: string;
  received: string;
  freedomFound: string;
}

const theologySections = [
  {
    title: "If We Confess — 1 John 1:9",
    body: "The hinge on which the practice of confession turns is a single conditional: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness&rdquo; (1 John 1:9). The Greek word is homologeō — literally to say the same thing, to agree with another&rsquo;s assessment. Confession is not explanation or self-defense; it is the act of bringing our evaluation of an action into agreement with God&rsquo;s. The wonder of the text is the double ground of God&rsquo;s response: he is faithful and just to forgive. Most expect mercy to be the ground of forgiveness, not justice. But John means that the cross has already paid the debt; to withhold forgiveness after such payment would itself be unjust. The Christian confession does not appeal to God&rsquo;s mercy alone — it stands on a legal accomplishment. Because Christ bore the sin, the Father is not merely generous to forgive; he is bound by justice to the promise. Confession is therefore not groveling before an unpredictable sovereign; it is presenting a receipt to a faithful accountant.",
  },
  {
    title: "Confession and Forgiveness vs. Penance — Protestant and Catholic Distinctions",
    body: "The Reformation turned in part on the question of penance. The Catholic tradition developed a sacrament of penance in which absolution from a priest, combined with acts of satisfaction — prayers, fasting, almsgiving — was required for the forgiveness of post-baptismal sin. Luther, reading Romans and Galatians with fresh eyes, concluded that this framework undermined the sufficiency of Christ&rsquo;s atoning work. His first of the Ninety-Five Theses was a protest not against the idea of repentance but against its reduction to a clerical rite: &ldquo;When our Lord and Master Jesus Christ said, &lsquo;Repent&rsquo; (Matthew 4:17), he willed the entire life of believers to be one of repentance.&rdquo; The Protestant tradition insists that forgiveness rests on Christ&rsquo;s finished work alone and is received through faith alone, with no human act completing the transaction. Yet the Reformation did not abolish confession — Luther retained private confession as a powerful means of grace and encouraged its use — it relocated its ground from priestly authority to Christ&rsquo;s once-for-all sacrifice. The distinction matters: penance implies that something in us must still satisfy the debt; Protestant confession receives a debt already paid.",
  },
  {
    title: "Confess to One Another — James 5:16",
    body: "&ldquo;Confess your sins to one another and pray for one another, that you may be healed&rdquo; (James 5:16). This verse is among the most practically neglected in the New Testament. Christians have developed robust theologies of confession to God; confession to one another has largely withered. James issues the command in a context of physical and spiritual healing, suggesting that there is something in the act of speaking sin aloud before a human witness that God uses for restoration that private prayer alone does not always accomplish. Dietrich Bonhoeffer, meditating on this passage in Life Together, argued that in private confession we may speak to the God we have constructed in our own image — the God who agrees with our rationalizations — but in speaking to a human brother or sister, the flesh is pierced. The cross becomes concrete. The secret loses its power when it is spoken. Many Christians who feel chronic spiritual numbness, a persistent sense of uncleanness, or an inability to receive God&rsquo;s forgiveness have simply never spoken their sin to another person. James does not make this optional.",
  },
  {
    title: "The Prodigal Son&rsquo;s Speech — Luke 15:18-19",
    body: "One of the most precisely worded confessions in all of Scripture belongs to the prodigal son as he rehearses it on his way home: &ldquo;Father, I have sinned against heaven and before you. I am no longer worthy to be called your son. Treat me as one of your hired servants&rdquo; (Luke 15:18-19). Three elements structure it: a naming of the offense (&ldquo;I have sinned&rdquo;), a double address that acknowledges both the vertical and horizontal dimensions of the sin (&ldquo;against heaven and before you&rdquo;), and an honest assessment of the consequence (&ldquo;no longer worthy to be called your son&rdquo;). The son does not explain, minimize, or shift blame. He also does not spiral into self-condemnation; his proposed resolution — become a hired servant — is practical rather than theatrical. What the story does with this prepared speech is arresting: the father interrupts it. The son begins his rehearsed words and the father runs — a scandalous posture of undignified urgency — and embraces him before the speech is finished. Confession does not win the father&rsquo;s love; it is simply the movement homeward that allows love to do what love has always wanted to do.",
  },
  {
    title: "Why Christians Avoid Confession — Shame, Pride, and Fear",
    body: "If confession is the doorway to freedom, why is it so rarely walked through? Three obstacles recur. The first is shame, which convinces us that our sin is uniquely disqualifying — that others may be forgiven, but the particular thing we have done places us beyond the pale. Shame feeds on secrecy; it dies in the light. The second is pride, which protests that naming our failure to another person diminishes us, that the appearance of righteousness is worth more than the reality of forgiveness. Pride finds it easier to perform contrition than to confess. The third is fear — fear of rejection, fear that the person to whom we confess will use what they know against us, fear that God will respond to our honesty with punishment rather than welcome. All three obstacles share a common root: a distorted picture of God. The father in Luke 15 is running before the son finishes his speech. The believer who imagines God as a magistrate noting offenses with cold neutrality will delay confession indefinitely. The believer who sees the running father will find it impossible to stay away.",
  },
  {
    title: "The Danger of Private-Only Confession",
    body: "There is a confession that happens entirely in the privacy of the mind — a quick internal acknowledgment of failure, a rote &ldquo;Lord, forgive me,&rdquo; returned to without any change of the inner condition. Bonhoeffer called this kind of confession dangerously self-indulgent: we absolve ourselves in our own minds, using God as a kind of spiritual handkerchief. Private confession is not worthless — 1 John 1:9 speaks directly to it — but it can function as a technique for managing guilt rather than receiving forgiveness. The problem is that guilt managed privately tends to accumulate. The things we never speak accumulate weight until they press us into a pervasive, vague shame that attaches to no particular act and cannot be treated, because it was never named. James 5:16 suggests that the healing confession produces is not merely psychological but spiritual and sometimes physical. There are things the body carries that the anonymous prayer cannot release; they need to be spoken, witnessed, and pronounced forgiven by a human voice standing in for Christ.",
  },
  {
    title: "Confession and the Assurance of Forgiveness",
    body: "One of the great gifts of the practice of confession — whether in private or before a trusted brother or sister — is the assurance of forgiveness that follows. Those who struggle to receive God&rsquo;s forgiveness often do so because it remains an abstraction: a theological proposition affirmed in the mind but not felt in the chest. The act of speaking sin aloud, of hearing another person say &ldquo;in the name of Jesus Christ, you are forgiven,&rdquo; — or of reading again 1 John 1:9 and consciously claiming the promise — moves forgiveness from proposition to experience. Luther kept private confession partly for this reason: it gave the troubled conscience a concrete, datable moment to return to when the devil raised doubts. &ldquo;On such and such a date I confessed, and I was absolved; the sin is gone.&rdquo; The conscience does not always receive what the mind assents to, and the embodied act of confession — spoken words, witnessed by another, answered with declared forgiveness — gives the conscience something to hold.",
  },
  {
    title: "Psalm 32 and Psalm 51 — The Great Confession Psalms",
    body: "The two great confession psalms open with radically different tones. Psalm 32 opens with the joy of the one whose transgression is forgiven — but David has not always been in that state. Verses 3-4 describe the cost of suppressed confession: &ldquo;When I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer.&rdquo; The relief of Psalm 32 is proportional to the weight of the silence before it. Psalm 51, written after Nathan confronted David over Bathsheba and Uriah, is the fullest confession in the Psalter: a naming of the offense, an acknowledgment of its vertical dimension (&ldquo;Against you, you only, have I sinned&rdquo;), a request for inner cleansing rather than merely outward pardon, and a petition for the Spirit not to be taken away. Both psalms teach that the road to joy runs through honesty. The suppressed confession costs us the very thing we were trying to protect. The spoken confession unlocks what secrecy was destroying: intimacy, lightness, and the freedom to serve.",
  },
  {
    title: "Confessional Booth vs. Accountability Relationship",
    body: "The confessional booth and the accountability relationship represent two institutional expressions of James 5:16. Both have genuine strengths and genuine dangers. The confessional booth regularizes the practice, removes dependence on relational chemistry, and ensures access to someone trained in pastoral care; its danger is routinization — confession that becomes rote loses its piercing power, and priestly absolution can be received as a clerical transaction rather than a gospel encounter. The accountability relationship — the trusted friend, the spiritual director, the small group — preserves the relational warmth that can make confession feel genuinely received; its danger is that confession becomes pastoral conversation without clear pronouncement, or that the relationship dynamics make full honesty harder. The ideal in most Protestant traditions is something between the two: a trusted, trained, discreet person before whom confession can be made and from whom a clear, scripturally grounded declaration of forgiveness can be received. The form matters less than the substance: sin named, received without shock, and responded to with the word Christ speaks to every confessor — &ldquo;your sins are forgiven; go in peace.&rdquo;",
  },
];

const practices = [
  {
    name: "The Examen of Conscience",
    body: "At the end of each day, spend ten minutes in a structured review drawn from Ignatius of Loyola&rsquo;s Examen. Begin with gratitude: name three things from the day for which you are thankful. Then move to honest review: where did I fall short of who I know I am called to be? Where did I wound someone, deceive someone, or serve myself at another&rsquo;s cost? Name these specifically, not in a vague self-improvement mood but in the actual terms of the offense. Then confess: speak or write the specific sin to God, receive the promise of 1 John 1:9, and close with a word of gratitude for the grace received. The Examen disciplines us against the two pathologies of conscience: the numbing that comes from never naming what we did, and the spiral that comes from naming without receiving forgiveness. It trains us to end each day clean.",
  },
  {
    name: "Annual Confession with a Trusted Person",
    body: "Once a year — perhaps around a season of spiritual preparation such as Lent or Advent, or on a significant personal date — arrange to meet with a pastor, spiritual director, or trusted mature friend for the express purpose of confession. Prepare beforehand: spend time in honest self-examination, write down what needs to be said, and ask the Holy Spirit to surface what you have been avoiding. In the meeting, speak the confession plainly. Ask the other person to pray a declaration of forgiveness over you, citing 1 John 1:9 or another promise. The annual practice prevents the accumulation that comes when nothing is ever named aloud. Many Christians who feel chronically heavy without knowing why have simply never made this kind of concrete, witnessed confession; a single honest session can lift what years of private prayer have not.",
  },
  {
    name: "Scripture-Based Confession Psalms",
    body: "Pray Psalm 32 and Psalm 51 slowly, one per week, using them as a frame for your own confession. When David writes &ldquo;When I kept silent, my bones wasted away,&rdquo; ask yourself what you have been keeping silent. When he writes &ldquo;Create in me a clean heart,&rdquo; make that petition your own. When Psalm 32 opens with &ldquo;Blessed is the one whose transgression is forgiven,&rdquo; receive that blessing as applying to you. The psalms provide language for experiences that are often pre-verbal — the vague guilt, the heaviness, the desire to be clean. Using them as confession templates trains the tongue to say what the heart already knows but has not yet spoken. Many people find that praying these psalms aloud, rather than reading them silently, changes what they do in the conscience.",
  },
  {
    name: "The Written Confession",
    body: "For sins that are particularly stubborn — the ones you have confessed privately many times and still do not feel forgiven for — try writing them out in full on a sheet of paper, naming the offense, the person harmed, the lie you told yourself in the process, and the specific promise of forgiveness you are claiming. Then perform a small physical act: fold the paper, burn it, tear it, bury it in a garden. This is not magic; it is embodiment. The body often needs to do something with the truth the mind has accepted. The physical act is a sign of the gospel act: the sin written down, named in full, and then destroyed as God&rsquo;s promise destroys it — as far as east is from west (Psalm 103:12).",
  },
  {
    name: "Restitution Where Possible",
    body: "Confession that stops at words sometimes leaves unfinished business that the conscience continues to carry. Where a confession involves a wrong done to another person — a lie told, money taken, a reputation damaged — consider whether restitution is possible and appropriate. Zacchaeus responded to his encounter with Christ by promising to repay fourfold what he had taken (Luke 19:8). The act of restitution is not a purchase of forgiveness; the forgiveness is received by faith. But the act of making right what was wrong is both an act of justice and a bodily confirmation to the conscience that the repentance was genuine. Not every wrong can be repaired — some apologies would cause more harm than good, some damages are irreversible — but where repair is possible, it completes the circle: confession named, forgiveness received, wrong made right.",
  },
  {
    name: "Accountability Partnership",
    body: "Find one person — a same-gender friend of faith, a spiritual director, or a small-group member — and establish an explicit agreement: you will confess to each other regularly, without minimizing, without catastrophizing, and with the expressed intention that each confession will be answered with prayer and a declaration of forgiveness. Meet monthly or quarterly, or whenever either of you needs to speak. The partnership does not require a trained counselor; it requires a person who will take the act seriously, keep confidence, and refuse to be shocked. James says this practice produces healing. If you have never had such a relationship, it is possible you have never experienced what James promises. The practice requires more courage than privacy, and it returns more freedom than privacy ever can.",
  },
];

const voices = [
  {
    name: "Dietrich Bonhoeffer",
    years: "1906–1945",
    role: "Theologian and martyr, Life Together",
    body: "Bonhoeffer&rsquo;s chapter on confession in Life Together remains the most searching Protestant treatment of James 5:16. Written in the context of his underground seminary at Finkenwalde, it is practical theology forged in community. Bonhoeffer argues that the person who avoids confession misses the cross: &ldquo;In the confession of concrete sins the old man dies a painful, shameful death before the eyes of a brother.&rdquo; This death, he insists, is not humiliation but liberation. The secret — any secret — exercises power over us in proportion to its concealment; spoken, it loses its grip. Bonhoeffer refused to sentimentalize the practice. He insisted that a Christian who refuses to confess to another person is trusting in a self-constructed God — a God who cannot disturb his rationalizations — rather than the God of the cross, who requires nothing more and nothing less than full honesty. His own martyrdom at Flossenbürg gave his theology of costly grace the weight of a life not merely written but lived.",
    quote: "In confession there takes place a breakthrough to community. Sin demands to have a man by himself. It withdraws him from the community. The more isolated a person is, the more destructive will be the power of sin over him.",
  },
  {
    name: "Martin Luther",
    years: "1483–1546",
    role: "Reformer who retained private confession",
    body: "Luther&rsquo;s relationship to confession is more nuanced than many Protestants realize. He abolished the penitential system and the obligation of full enumeration of sins, but he retained private confession with great enthusiasm and considered it one of the most valuable practices available to the troubled conscience. In the Small Catechism he provides a form for confession that is disarmingly simple and pastoral. He writes elsewhere: &ldquo;I would let no man take private absolution from me, and would not give it up for all the treasures in the world, since I know what consolation and strength it has given me.&rdquo; For Luther, the value of private confession was not the priestly authority that pronounced absolution but the certainty it gave: the troubled conscience receives a spoken word, not a principle, and a spoken word on a specific date — this is what the anxious heart needs. Luther&rsquo;s retention of confession amid his reformation of penance is a standing challenge to the Protestant tradition&rsquo;s tendency to abandon the practice entirely.",
    quote: "I will not let anyone deprive me of private confession, and I would not give it up for all the world, since I know what comfort and strength it has given me.",
  },
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    role: "Lay apologist and practitioner of confession",
    body: "Lewis was an Anglican who, under the guidance of his confessor Father Walter Adams and later Father Head, practiced auricular confession throughout his adult Christian life — a practice rarely noted in popular accounts of his spirituality. He wrote about it with characteristic directness in Mere Christianity and his letters, arguing that the act of confession made forgiveness concrete in a way that private prayer often did not: &ldquo;The value of the ceremonial act is that it helps to realise&rdquo; — that is, to make real — &ldquo;the forgiveness.&rdquo; Lewis was alert to the danger of seeking the psychological experience of absolution rather than the theological reality of forgiveness, and he balanced his encouragement of the practice with warnings against turning it into therapy. His willingness as an Anglican layman — and as perhaps the most widely read Christian apologist of the twentieth century — to practice and commend confession is a useful corrective to the Protestant reflex of treating it as a merely Catholic concern.",
    quote: "I think I value it very highly chiefly because it is a pure act of will, done when no emotion is at work. I think it makes the reconciliation more concrete.",
  },
  {
    name: "John Calvin",
    years: "1509–1564",
    role: "Reformer, Institutes of the Christian Religion",
    body: "Calvin&rsquo;s treatment of confession in the Institutes is careful and instructive. He distinguishes three forms: confession to God alone (always required), public confession before the congregation (appropriate when a public offense has been committed), and private confession to a brother (commended on the basis of James 5:16 when the conscience needs unburdening and counsel). He rejects the Catholic sacrament of penance — the requirement of enumeration and sacerdotal absolution — while strongly commending the underlying practice. Calvin writes that he &ldquo;has no wish to deprive the church of the advantage of this holy practice&rdquo; of private confession, and that it is particularly useful for those who are under the heavy burden of a specific sin and need &ldquo;the help of a holy minister.&rdquo; Calvin thus walks a careful line: rejecting the sacramental apparatus without abandoning the pastoral reality, and the Reformed tradition in his wake has too often dropped the practice when his own theology commended its retention.",
    quote: "There are two kinds of confession: the one is public, which is required for the purpose of giving satisfaction; the other is private, which is useful for calming the conscience.",
  },
  {
    name: "Brennan Manning",
    years: "1934–2013",
    role: "Author of The Ragamuffin Gospel",
    body: "Manning, a former Franciscan priest who struggled throughout his life with alcoholism and the wreckage it caused in relationships, wrote about confession from the inside of failure. His theology of grace — particularly in The Ragamuffin Gospel and Abba&rsquo;s Child — is forged not in academic propositions but in the repeated experience of coming home to a running Father with nothing to offer but honesty. Manning was suspicious of the Christian performance of repentance that goes through the motions of confession without actually receiving the embrace. He called it &ldquo;the impostor&rdquo; — the false self that presents a tidy contrition while the real self hides behind it. His corrective was ferocious: the God of the prodigal son is not interested in performance, only in return. Manning&rsquo;s own public confessions of failure — including his alcoholic relapses, documented in his memoir All Is Grace — gave him a credibility with broken people that no polished testimony could have produced. He was loved precisely because he was, in his own word, a ragamuffin.",
    quote: "The spiritual life begins with accepting ourselves as we are — not as we think we should be — and trusting that the God who made us loves what he sees.",
  },
  {
    name: "Jay Adams",
    years: "1929–2020",
    role: "Founder of biblical counseling",
    body: "Adams, founder of the nouthetic counseling movement, approached confession from a disciplined biblical-theological perspective rather than from the mystical or experiential angle of many of his contemporaries. His concern was precision: confession must be specific, not vague (&ldquo;I have sinned&rdquo; is insufficient; one must name what was done), and it must be directed correctly (to God first, and to those specifically harmed, not to general audiences in a way that relieves the conscience without addressing the actual offense). He was critical of what he called &ldquo;cheap confession&rdquo; — the rapid admission used to smooth over conflict without genuine change — and insisted that biblical repentance includes a turning, not merely a naming. Adams&rsquo;s work in counseling thousands of people over decades gave him a clinical clarity about what confession does and does not do: it does not automatically repair relationships, does not guarantee that the offended party will forgive, and does not substitute for the hard work of changing the behavior. But it is the indispensable beginning without which none of the subsequent work is possible.",
    quote: "True confession is specific. It names what was done. Vague admission of fault is a way of admitting everything in general while confessing nothing in particular.",
  },
];

const scriptures = [
  {
    ref: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    note: "The double ground of forgiveness — faithful and just — anchors assurance in Christ&rsquo;s finished work, not in the quality of the confession. The promise is unconditional in its scope: all unrighteousness.",
  },
  {
    ref: "James 5:16",
    text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    note: "The command moves confession out of the purely vertical into the communal. James connects this mutual confession explicitly to healing — a connection most Christians have never tested in practice.",
  },
  {
    ref: "Psalm 32:3-5",
    text: "For when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer. I acknowledged my sin to you, and I did not cover my iniquity; I said, &ldquo;I will confess my transgressions to the Lord,&rdquo; and you forgave the iniquity of my sin.",
    note: "David maps the physiology of suppressed confession — wasted bones, groaning, dryness — and the immediate relief of honest naming. The pattern is as true today as it was in his court.",
  },
  {
    ref: "Psalm 51:1-2",
    text: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin.",
    note: "The great penitential psalm petitions not mere pardon but inner cleansing — a transformation of the self that produced the sin, not just cancellation of the offense.",
  },
  {
    ref: "Luke 15:20-21",
    text: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him. And the son said to him, &lsquo;Father, I have sinned against heaven and before you. I am no longer worthy to be called your son.&rsquo;",
    note: "The father runs before the speech is finished. Confession does not earn the welcome — it is simply the turning homeward that allows the waiting love to arrive.",
  },
  {
    ref: "Proverbs 28:13",
    text: "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.",
    note: "Concealment and prosperity are presented as incompatible, as are confession and the absence of mercy. The proverb names an observable pattern: secrecy about sin is a form of self-impoverishment.",
  },
];

const videos = [
  { videoId: "Vb-OP1JHHGU", title: "The Theology of Confession — What Does It Mean to Confess?" },
  { videoId: "HXnhL4NBTPQ", title: "Confession and Forgiveness in the Protestant Tradition" },
  { videoId: "nXWfaY3Kmdk", title: "James 5:16 — Confessing to One Another" },
  { videoId: "eDO1MLYJHVA", title: "Bonhoeffer on Confession — Life Together" },
  { videoId: "VpRTFKJwuSA", title: "Psalm 51 — A Devotional Study" },
  { videoId: "Y2y0Nt0ABQQ", title: "Brennan Manning on Grace and the Ragamuffin Gospel" },
];

const relatedPages = [
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/christian-repentance", label: "Christian Repentance" },
  { href: "/christian-forgiveness", label: "Christian Forgiveness" },
  { href: "/christian-humility", label: "Christian Humility" },
  { href: "/prayer", label: "Prayer" },
  { href: "/sanctification", label: "Sanctification" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianConfessionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CNFEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [confessed, setConfessed] = useState("");
  const [received, setReceived] = useState("");
  const [freedomFound, setFreedomFound] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!confessed.trim()) return;
    const entry: CNFEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      confessed: confessed.trim(),
      received: received.trim(),
      freedomFound: freedomFound.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setConfessed("");
    setReceived("");
    setFreedomFound("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: GREEN + "22",
            color: GREEN,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Means of Grace
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          If We Confess: The Practice of Christian Confession
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Confession is the act of agreeing with God about what we have done &mdash; of saying the same thing he says,
          without excuse or minimizing. It is among the most humbling and most liberating practices in the Christian
          life: humbling because it requires we stop defending ourselves, and liberating because the one we confess to
          is &ldquo;faithful and just to forgive.&rdquo;
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of confession, the Protestant and Catholic distinction over penance, the
          neglected command of James 5:16, the great confession psalms, and the practices that move forgiveness from
          theological proposition to lived experience.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              A Theology of Confession
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on confession &mdash; from the forensic ground of 1 John 1:9
              to the great penitential psalms, and the question of why we avoid the very thing that sets us free.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology leads back to the running father. Confession is not the performance of
                contrition that earns welcome; it is the turning homeward that allows the love that was always waiting
                to arrive. The theological ground is Christ&rsquo;s cross; the promise is &ldquo;faithful and just&rdquo;;
                the experience is the lightness of a secret finally spoken and the weight that lifts when a human voice
                says what God has always said: &ldquo;Your sins are forgiven &mdash; go in peace.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices of Confession
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six concrete practices for making confession a living part of the Christian life &mdash; daily, annual,
              written, embodied, relational.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "22",
                  color: GREEN,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Voices on Confession
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six theologians and practitioners &mdash; Reformed, Lutheran, Anglican, Catholic-formed &mdash; who engaged
              confession with depth and honesty, and whose witness challenges the Protestant reflex to abandon the practice.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${GREEN}`,
                  background: GREEN + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Scripture on Confession
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts &mdash; promise, command, lament, petition, parable, and proverb &mdash; each paired with
              a brief reflection for slow reading and meditation.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}
                  dangerouslySetInnerHTML={{ __html: s.note }}
                />
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Suggested practice:</strong> take Psalm 32 and Psalm 51 in alternating weeks
                as personal confession prayers. Pray them aloud, inserting your own sin where David inserts his. The psalms
                were written to be prayed in the first person, and they carry more freight than we often allow them.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Confession Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              A private space to record what you have confessed, what grace you received in response, and what freedom
              you found. Entries are saved only in your browser &mdash; no account, no server, no one else sees this.
              This is between you and the God who runs.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cnf-confessed" style={labelStyle}>What was confessed</label>
                <textarea
                  id="cnf-confessed"
                  value={confessed}
                  onChange={e => setConfessed(e.target.value)}
                  rows={3}
                  placeholder="Be specific rather than general. Name the actual thing, not just a category. This field is private."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>
                  Specific confession is more healing than general admission. &ldquo;I lied to James on Tuesday&rdquo; is more
                  useful than &ldquo;I have been dishonest.&rdquo;
                </p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cnf-received" style={labelStyle}>What grace was received in response</label>
                <textarea
                  id="cnf-received"
                  value={received}
                  onChange={e => setReceived(e.target.value)}
                  rows={2}
                  placeholder="e.g. A sense of lightness; a specific promise from Scripture; another person&rsquo;s prayer; silence that felt like peace..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Record what you actually experienced, not what you think you should have experienced.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="cnf-freedom" style={labelStyle}>What freedom was found</label>
                <textarea
                  id="cnf-freedom"
                  value={freedomFound}
                  onChange={e => setFreedomFound(e.target.value)}
                  rows={2}
                  placeholder="e.g. The secret lost its hold; I could pray again; the relationship was repaired; a weight I had carried for years lifted..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Freedom may be immediate or gradual. Note what changed, even if small.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!confessed.trim()}
                style={{
                  background: confessed.trim() ? GREEN : BORDER,
                  color: confessed.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: confessed.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. The first confession is the hardest. What has been waiting to be spoken?
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          aria-label="Delete entry"
                          style={{
                            background: "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: MUTED,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "0.25rem 0.65rem",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Confessed
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.confessed}</p>
                      </div>
                      {entry.received && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Grace Received
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.received}</p>
                        </div>
                      )}
                      {entry.freedomFound && (
                        <div>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Freedom Found
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.freedomFound}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the theology and practice of confession &mdash; from the forensic ground of forgiveness to the
              pastoral practice of speaking sin aloud before God and one another.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;If we confess our sins, he is faithful and just to forgive us our sins.&rdquo; The promise is
            unconditional in scope and unbreakable in ground. The only thing required is the one thing pride and shame
            resist: saying the same thing God says, plainly, without excuse &mdash; and trusting that the Father who
            sees the returning child from &ldquo;a long way off&rdquo; has been running toward us since before we turned.
          </p>
        </div>
      </main>
    </div>
  );
}
