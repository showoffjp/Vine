"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = [
  { id: "what-is", label: "What Is Sanctification" },
  { id: "mortification", label: "Mortification & Vivification" },
  { id: "reformed-wesleyan", label: "Reformed vs. Wesleyan" },
  { id: "spirit", label: "The Spirit & Sanctification" },
  { id: "practical", label: "Practical Sanctification" },
  { id: "videos", label: "Videos" },
];

const whatIsItems = [
  {
    title: "Hagiasmos: The Meaning of the Word",
    text: "The Greek word <em>hagiasmos</em> (sanctification) comes from the same root as <em>hagios</em> (holy, set apart). To sanctify something is to set it apart for God&rsquo;s use, to consecrate it. In the Old Testament, objects, places, and people were sanctified by being dedicated to God. In the New Testament, <em>hagiasmos</em> describes the ongoing process by which believers are set apart from sin and set apart for God &mdash; made holy in their character and conduct by the Holy Spirit. The word carries both a completed and a continuing aspect: there is a past act of being set apart (consecration) and an ongoing process of becoming what one has been declared to be.",
  },
  {
    title: "The Three Tenses of Salvation",
    text: "Biblical salvation has three dimensions often described as past, present, and future. <strong>Justification</strong> is the past act (Romans 5:1 &mdash; we have been justified); the believer is declared righteous before God and the penalty of sin is removed. <strong>Sanctification</strong> is the present process (2 Cor 3:18 &mdash; being transformed); the power of sin is progressively broken and the character of Christ is progressively formed. <strong>Glorification</strong> is the future consummation (Rom 8:30 &mdash; he also glorified); the presence of sin is finally eliminated in the resurrection. These three are inseparable: all who are justified will be sanctified; all who are sanctified will be glorified. Paul can say in the same letter: &ldquo;you have been saved,&rdquo; &ldquo;you are being saved,&rdquo; and &ldquo;you will be saved.&rdquo;",
  },
  {
    title: "Definitive Sanctification: The Past Tense",
    text: "First Corinthians 6:11 is the clearest statement of what theologians call &ldquo;definitive sanctification&rdquo;: &ldquo;But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ.&rdquo; The past tense is striking &mdash; Paul is addressing the Corinthians, a congregation notorious for its sins, and yet he describes their sanctification in the completed past. This means that at conversion, a decisive, once-for-all setting apart took place. The believer has been definitively transferred from the dominion of sin to the dominion of Christ (Col 1:13). This definitive sanctification does not mean the Christian no longer sins; it means the Christian has a new identity, belongs to a new Lord, and is no longer defined by sin&rsquo;s reign.",
  },
  {
    title: "Progressive Sanctification: Being Transformed",
    text: "Second Corinthians 3:18 describes the present continuous dimension: &ldquo;And we all, who with unveiled faces contemplate the Lord&rsquo;s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.&rdquo; Three things are clear. First, the agent of transformation is the Lord (the Spirit) &mdash; this is God&rsquo;s work, not a human project. Second, the means is beholding Christ &mdash; contemplation of who he is, not primarily effort of will. Third, the goal is conformity to Christ&rsquo;s image &mdash; not an abstract moral improvement but a particular likeness. This transformation is ongoing, gradual, and measured in terms of Christlikeness rather than rule-compliance.",
  },
  {
    title: "The Goal: Conformity to Christ",
    text: "Romans 8:29 identifies the ultimate purpose of salvation and sanctification: &ldquo;For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.&rdquo; The goal of sanctification is not moral improvement in a generic sense, not social respectability, not even doctrinal precision &mdash; it is becoming like Jesus. This means the sanctified life is measured by the Beatitudes, the Sermon on the Mount, the Fruit of the Spirit (Gal 5:22-23), and the love chapter (1 Cor 13) &mdash; not primarily by lists of prohibitions. The question of sanctification is always: does this person look more like Jesus than before?",
  },
  {
    title: "Agent and Means: Spirit and Truth",
    text: "Two texts define the primary agent and the primary means of sanctification. On the agent: 2 Thessalonians 2:13 &mdash; &ldquo;God chose you as firstfruits to be saved through the sanctifying work of the Spirit.&rdquo; The Spirit is the one who does the work of sanctification; human effort cooperates but cannot generate holiness. On the means: John 17:17 &mdash; Jesus&rsquo;s High Priestly Prayer: &ldquo;Sanctify them by the truth; your word is truth.&rdquo; Scripture is the primary instrument through which the Spirit does his sanctifying work. Together, these texts prevent two errors: quietism (the Spirit does everything, I do nothing) and activism (holiness is a human achievement). The Spirit works, and he works through the truth of God&rsquo;s Word.",
  },
];

const mortificationItems = [
  {
    title: "John Owen's Classic: Be Killing Sin",
    text: "John Owen&rsquo;s 1656 treatise <em>On the Mortification of Sin in Believers</em> opens with one of the most famous lines in Christian devotional literature: &ldquo;Be killing sin or it will be killing you.&rdquo; Owen&rsquo;s insight is that sin in the believer is not a static problem to be managed but a dynamic enemy to be killed. If you are not actively putting sin to death, it is actively putting you to spiritual death. This is not law-keeping or moralism &mdash; Owen&rsquo;s entire argument is that only the Spirit can kill sin, and that the Spirit uses the gospel, not the law, as his primary weapon. But Owen insists that the believer must apply this weapon, must make deliberate use of the means the Spirit provides.",
  },
  {
    title: "Mortification: Putting to Death the Deeds of the Body",
    text: "Mortification (from Latin <em>mortificare</em> &mdash; to put to death) is the active, ongoing work of the Christian in putting sin to death. Key texts: Romans 8:13 &mdash; &ldquo;if by the Spirit you put to death the misdeeds of the body, you will live.&rdquo; Colossians 3:5 &mdash; &ldquo;Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed.&rdquo; Galatians 2:20 &mdash; the cross is the theological ground: &ldquo;I have been crucified with Christ.&rdquo; Because the Christian has died with Christ (definitive sanctification), the ongoing work of mortification is working out the implications of what is already true. We put to death what has already been condemned. Mortification is never self-punishment; it is self-denial grounded in the death of Christ.",
  },
  {
    title: "Vivification: Putting On the New Self",
    text: "Mortification without vivification produces moralism, not holiness. The two movements of sanctification are inseparable: putting off the old and putting on the new. Ephesians 4:24 &mdash; &ldquo;put on the new self, created to be like God in true righteousness and holiness.&rdquo; Colossians 3:10 &mdash; &ldquo;put on the new self, which is being renewed in knowledge in the image of its Creator.&rdquo; Vivification is the positive, joyful work of cultivating the life of Christ &mdash; growing in love, patience, gentleness, self-control. If mortification answers the question &ldquo;what must I put to death?&rdquo;, vivification answers &ldquo;what must I cultivate?&rdquo; Both are necessary; neither is sufficient alone. The moralist is strong on mortification and weak on vivification; the quietist hopes vivification happens without mortification.",
  },
  {
    title: "Owen's Three Means: Conviction, Faith, the Spirit",
    text: "Owen identifies three means by which the Spirit works mortification in the believer. First, <strong>deep conviction of sin</strong>: not guilt-management but a genuine, Spirit-worked awareness of the ugliness and gravity of a particular sin &mdash; what it is, how it has wounded our relationship with God, how it contradicts our identity in Christ. Generic sorrow over being sinful in general does not kill specific sins. Second, <strong>faith in Christ&rsquo;s sufficiency</strong>: the heart must be occupied with the greatness and beauty of Christ, not merely with the badness of sin. It is the expulsive power of a new affection (Thomas Chalmers) &mdash; sin is crowded out by something more compelling. Third, <strong>the Spirit&rsquo;s work</strong>: without the Spirit, all effort produces only self-righteousness or despair.",
  },
  {
    title: "Why Mortification Without Vivification Is Dangerous",
    text: "The history of Christian asceticism is full of cautionary examples of mortification without vivification &mdash; forms of self-denial and spiritual discipline that produced pride, rigidity, and a cold religion without love. Jesus&rsquo;s parable of the swept house (Matt 12:43-45) captures the danger: when an evil spirit is driven out and the house swept clean but left empty, seven spirits worse than the first move in. Sanctification is not primarily about evacuating sin &mdash; it is about being filled with the life of Christ. The Fruit of the Spirit (Gal 5:22-23) is the positive description of the Spirit-filled life: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. These are the qualities that occupy the space vacated by sin.",
  },
  {
    title: "The Cross at the Center of Mortification",
    text: "Owen&rsquo;s most theologically precise point is that mortification must be rooted in the cross. Romans 6:6 &mdash; &ldquo;our old self was crucified with him so that the body ruled by sin might be done away with.&rdquo; Galatians 6:14 &mdash; &ldquo;may I never boast except in the cross of our Lord Jesus Christ, through which the world has been crucified to me, and I to the world.&rdquo; The ground of mortification is not discipline, willpower, or the fear of consequences &mdash; it is the decisive, once-for-all death of the old self in Christ. Every act of mortification is an application of Christ&rsquo;s death to a particular sin in a particular life. This is why Owen insists that the Spirit (not human effort) is the agent, and the gospel (not the law) is the instrument &mdash; because mortification is the outworking of a death that has already been accomplished.",
  },
];

const reformedWesleyanItems = [
  {
    title: "The Reformed View: Simul Justus et Peccator",
    text: "The Reformed tradition, following Luther and Calvin, holds that sanctification is progressive but never complete in this life. Luther&rsquo;s formula <em>simul justus et peccator</em> &mdash; simultaneously righteous and sinner &mdash; captures the tension: the Christian is fully justified before God and yet continues to struggle with indwelling sin until death or glorification. Romans 7:14-25 is the classic Reformed text: &ldquo;I do not do the good I want to do, but the evil I do not want to do &mdash; this I keep on doing.&rdquo; Reformed theology reads this as Paul&rsquo;s description of his present Christian experience, not his pre-conversion experience. The Christian is genuinely new but not yet finally redeemed; holiness is real but always partial.",
  },
  {
    title: "The Wesleyan View: Entire Sanctification",
    text: "John Wesley taught a doctrine he called <strong>entire sanctification</strong> (also called &ldquo;perfect love&rdquo; or &ldquo;Christian perfection&rdquo;): a second definite work of grace, subsequent to justification, that cleanses the heart of the inward inclination toward sin &mdash; the &ldquo;bent&rdquo; toward sinning that remains after conversion. Wesley was careful to define what he meant: not sinless perfection (freedom from mistakes, weaknesses, or ignorance), but <em>perfect love</em> &mdash; a heart so fully oriented toward God and neighbor that its fundamental motivation is no longer self but love. He grounded this in 1 John 4:17-18 (&ldquo;perfect love drives out fear&rdquo;) and the Wesleyan reading of Hebrews. The entirely sanctified person still needs growth in grace and can fall; the inward bent toward sin is cleansed, not the possibility of sinning.",
  },
  {
    title: "The Keswick Movement: Higher Life",
    text: "The Keswick Convention (founded 1875 in the English Lake District) was a significant nineteenth and twentieth-century movement that taught a &ldquo;higher life&rdquo; or &ldquo;victorious Christian life.&rdquo; Keswick teachers (including F.B. Meyer, Andrew Murray, Hudson Taylor) taught that Christians could move from a life of constant defeat by sin to a life of consistent victory through a specific act of consecration and Spirit-filling &mdash; often described as &ldquo;letting go and letting God&rdquo; or &ldquo;full surrender.&rdquo; Keswick was influenced by Wesleyanism but differed: it did not teach the eradication of the sinful nature, only its suppression or counteraction by the Spirit. Critics (B.B. Warfield) argued that Keswick theology produced spiritual pride and unrealistic expectations, while its proponents argued it represented a genuinely biblical call to fullness of the Spirit.",
  },
  {
    title: "How These Views Shape Pastoral Practice",
    text: "The Reformed and Wesleyan views produce different pastoral emphases, expectations, and cultures. Reformed pastoral practice tends to emphasize: the long, slow, imperfect nature of sanctification; the danger of spiritual pride from claiming too much progress; the comfort of God&rsquo;s forgiveness for the ongoing sins of believers; and the sufficiency of Christ for the Christian who is simultaneously righteous and sinful. Wesleyan pastoral practice tends to emphasize: the genuine possibility of significant heart transformation in this life; the danger of settling for too little; the call to press on toward the goal; and the warmth of a community expecting and celebrating visible transformation. Neither emphasis is wrong in itself; each corrects a besetting error of the other.",
  },
  {
    title: "Points of Agreement Between Both Traditions",
    text: "Despite their differences, Reformed and Wesleyan traditions agree on the most important points about sanctification. Both affirm: (1) that God alone is the agent of sanctification and that the Holy Spirit is the primary worker; (2) that sanctification is real &mdash; not merely imputed but actually transforming the character; (3) that Scripture, prayer, community, and the sacraments are essential means of grace for sanctification; (4) that holiness is the goal &mdash; the description of a life genuinely oriented toward God; (5) that the Christian&rsquo;s call is to pursue holiness actively, not passively wait for it. Their disagreement is over the attainable degree of holiness in this life, not over whether holiness is real, important, or Spirit-worked.",
  },
];

const spiritItems = [
  {
    title: "Walk by the Spirit: Galatians 5:16-25",
    text: "Galatians 5:16-25 is Paul&rsquo;s most sustained account of the Spirit&rsquo;s role in sanctification. The structure is clear: &ldquo;Walk by the Spirit, and you will not gratify the desires of the flesh.&rdquo; The Spirit and the flesh are opposed &mdash; they are competing principles of life and action. The works of the flesh (vv. 19-21) describe life oriented by self; the Fruit of the Spirit (vv. 22-23) describes life oriented by the Spirit. The key phrase is &ldquo;walk by the Spirit&rdquo; &mdash; a habitual, ongoing posture of responsiveness to the Spirit&rsquo;s leading. The promise is that this posture will result in not gratifying the flesh. Paul does not say: suppress your desires and try harder. He says: walk with the Spirit, and the desires will lose their power.",
  },
  {
    title: "The Danger of Pelagianism: We Sanctify Ourselves",
    text: "Pelagianism (named for the fifth-century monk Pelagius, against whom Augustine argued) is the view that humans can achieve moral goodness and even salvation by their own free will and effort, without any special work of divine grace. In the context of sanctification, the Pelagian error is treating holiness as a human project &mdash; a matter of trying harder, committing more deeply, developing better habits &mdash; without genuine dependence on the Spirit. This error is common in evangelical culture: altar calls, rededication services, and accountability groups can all become Pelagian mechanisms if they are not grounded in the prior reality of the Spirit&rsquo;s work. Pelagian sanctification produces either pride (I am doing well) or despair (I keep failing).",
  },
  {
    title: "The Danger of Quietism: We Do Nothing",
    text: "Quietism is the opposite error: the belief that human effort is not only unnecessary but actually harmful to sanctification, and that the Christian should simply &ldquo;let go and let God&rdquo; &mdash; passively waiting for the Spirit to act without any active engagement on the believer&rsquo;s part. This error appears in some strands of Keswick theology and in popular phrases like &ldquo;stop trying and start trusting.&rdquo; The biblical problem with quietism is that it conflicts with the consistent pattern of New Testament ethical instruction: put off, put on, pursue, strive, mortify, seek, press on. These are not passive verbs. The Spirit does not sanctify sleeping Christians; he empowers active ones.",
  },
  {
    title: "The Synthesis: Philippians 2:12-13",
    text: "Philippians 2:12-13 is the most precise biblical statement of the relationship between human effort and divine grace in sanctification: &ldquo;Work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.&rdquo; Two activities are described simultaneously: the believer works out, and God works in. These are not in tension &mdash; the divine working is the ground and power of the human working. &ldquo;For it is God who works in you&rdquo; is not an excuse for passivity; it is the reason for confident activity. Because God is at work in you, you can work &mdash; not with anxious self-reliance but with &ldquo;fear and trembling&rdquo; (serious, attentive dependence) and confidence that the work is not ultimately yours.",
  },
  {
    title: "The Spirit's Work Through the Means of Grace",
    text: "The Spirit&rsquo;s sanctifying work is characteristically mediated through concrete practices rather than bypassing them. This is why the means of grace matter so much: Scripture, prayer, worship, community, the sacraments, and fasting are not activities that produce holiness by their own power &mdash; they are the Spirit&rsquo;s chosen channels. The Spirit works through the Word to convict, illumine, and transform (John 17:17). He works through prayer to align our wills with God&rsquo;s (Rom 8:26-27). He works through the community to rebuke, encourage, and sharpen (Prov 27:17; Heb 3:13). He works through suffering to produce endurance and character (Rom 5:3-4). The means of grace are Spirit-empowered, not human-achieved &mdash; which is why they must be used, not relied upon as if they were magic.",
  },
];

const practicalItems = [
  {
    title: "Scripture: The Primary Instrument",
    text: "Psalm 119:9 &mdash; &ldquo;How can a young person stay on the path of purity? By living according to your word.&rdquo; John 17:17 &mdash; &ldquo;Sanctify them by the truth; your word is truth.&rdquo; Scripture is the Spirit&rsquo;s primary instrument of sanctification because it reveals who God is, who we are, what we are called to become, and what Christ has done to make it possible. But Scripture must be actively engaged: read, studied, memorized, meditated upon, and applied. The Psalmist hides God&rsquo;s word in his heart (Ps 119:11). Lectio divina (sacred reading), the Ignatian meditation on Scripture, Puritan Scripture meditation, and evangelical Bible study are all practices of active scriptural engagement. No other discipline substitutes for the ongoing, sustained encounter with the living Word.",
  },
  {
    title: "Community: Essential, Not Optional",
    text: "Hebrews 10:24-25 &mdash; &ldquo;And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.&rdquo; James 5:16 &mdash; &ldquo;Confess your sins to each other and pray for each other so that you may be healed.&rdquo; The New Testament knows no category of the solitary Christian who grows in holiness independently. Community is essential, not supplemental &mdash; the &ldquo;one another&rdquo; commands of the NT (love one another, bear one another&rsquo;s burdens, confess to one another, encourage one another) presuppose a depth of relational engagement that only covenant community can provide. The danger of lone-ranger sanctification is that we become the final arbiters of our own growth, unchallenged in our blind spots and unaccompanied in our struggles.",
  },
  {
    title: "Suffering: The Unlikely Instrument",
    text: "Romans 5:3-5 &mdash; &ldquo;we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.&rdquo; 1 Peter 1:6-7 &mdash; &ldquo;these have come so that the proven genuineness of your faith &mdash; of greater worth than gold, which perishes even though refined by fire &mdash; may result in praise, glory and honor when Jesus Christ is revealed.&rdquo; Suffering is one of God&rsquo;s most effective sanctifying instruments, and also one of the least chosen. The qualities produced by suffering &mdash; perseverance, humility, dependence on God, compassion for others, hope that does not rest on circumstances &mdash; cannot be produced any other way. James 1:2-4 begins with &ldquo;consider it pure joy&rdquo; &mdash; not because suffering is pleasant but because its product is Christlike maturity.",
  },
  {
    title: "Accountability and Spiritual Direction",
    text: "The Christian tradition has consistently recognized that honest, structured accountability is essential for sustained growth in holiness. Wesley&rsquo;s class meetings asked members weekly: &ldquo;How is it with your soul?&rdquo; &mdash; a question that required specific, honest engagement with the state of one&rsquo;s spiritual life. Spiritual direction (the practice of meeting regularly with a trained director who listens to the movements of the Spirit in one&rsquo;s life) is an ancient Catholic and Anglican tradition increasingly recovered across evangelical and Reformed communities. Both practices embody the same truth: we need others to see us, name what they see, and hold us accountable to the person God is calling us to become.",
  },
  {
    title: "The Examination of Conscience: The Ignatian Tradition",
    text: "Ignatius of Loyola&rsquo;s daily <em>Examen</em> is a structured prayer practice for noticing God&rsquo;s movement in daily life and identifying where sin has intruded. The classic form has five movements: (1) Give thanks for the day&rsquo;s gifts; (2) Ask for light to see the day clearly; (3) Review the day with gratitude and honesty &mdash; where were you most alive? most drained? (4) Acknowledge failures honestly and receive forgiveness; (5) Look forward to tomorrow with renewed intention. The Examen is a means of grace because it structures the habit of bringing ordinary life into conscious contact with God &mdash; noticing where he was present, where sin intruded, and where grace is needed. It prevents the accumulated blindness of an unexamined life.",
  },
  {
    title: "The Sacraments in Ongoing Sanctification",
    text: "The Lord&rsquo;s Supper is not only an instrument of conversion or initial faith &mdash; it is an ongoing means of sanctification for the believer who regularly receives it with faith. Calvin insisted on weekly Communion as essential to spiritual health. The Table forms us in the shape of the gospel: we come as sinners, receive by grace, are nourished by Christ, and are sent out as his body into the world. The regular return to the Table combats self-sufficiency (we need Christ&rsquo;s body and blood), combats individualism (we eat together, not alone), and combats amnesia (we remember what Christ did for us). Baptism, recalled throughout the Christian life, grounds sanctification in the identity given at conversion: you are baptized &mdash; you belong to Christ &mdash; therefore live accordingly (Rom 6:3-4).",
  },
];

const videoItems = [
  {
    videoId: "FrpUFuoSAk8",
    title: "John Owen on Mortification &mdash; Lecture",
    description: "A lecture exploring John Owen&rsquo;s classic treatise on the mortification of sin: what it means to be killing sin, why only the Spirit can do it, and how the gospel (not the law) is the weapon Owen commends.",
  },
  {
    videoId: "WkHkOgGUZuM",
    title: "Tim Keller on Sanctification",
    description: "Tim Keller unpacks the nature of sanctification &mdash; why it is both God&rsquo;s work and our pursuit, how it differs from moralism, and what progressive transformation actually looks like in the Christian life.",
  },
  {
    videoId: "1jHcx1AX_TY",
    title: "John Piper on the Pursuit of Holiness",
    description: "John Piper examines the call to pursue holiness &mdash; the relationship between desire, discipline, and the Spirit, why Hebrews 12:14 is a command and not a suggestion, and what holy living looks like in practice.",
  },
];

function getTabColor(tabId: string): string {
  switch (tabId) {
    case "what-is": return BLUE;
    case "mortification": return ROSE;
    case "reformed-wesleyan": return GOLD;
    case "spirit": return PURPLE;
    case "practical": return GREEN;
    case "videos": return MUTED;
    default: return MUTED;
  }
}

export default function ChristianSanctificationGuidePage() {
  const [activeTab, setActiveTab] = useState("what-is");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const activeColor = getTabColor(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Christian Theology</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Sanctification Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 660 }}>
          The theology of sanctification &mdash; what it means to be made holy, why it is both God&rsquo;s work and our pursuit, and the concrete means by which the Spirit shapes us into the image of Christ.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t.id ? getTabColor(t.id) : BORDER}`,
                background: activeTab === t.id ? getTabColor(t.id) + "28" : "transparent",
                color: activeTab === t.id ? getTabColor(t.id) : MUTED,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: activeTab === t.id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB: What Is Sanctification */}
        {activeTab === "what-is" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: BLUE + "18", border: `1px solid ${BLUE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: BLUE, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;And we all...are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.&rdquo; &mdash; 2 Corinthians 3:18
              </p>
            </div>
            {whatIsItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Mortification and Vivification */}
        {activeTab === "mortification" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: ROSE + "18", border: `1px solid ${ROSE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: ROSE, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;Be killing sin or it will be killing you.&rdquo; &mdash; John Owen, <em>On the Mortification of Sin in Believers</em> (1656)
              </p>
            </div>
            {mortificationItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Reformed vs. Wesleyan */}
        {activeTab === "reformed-wesleyan" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GOLD + "18", border: `1px solid ${GOLD}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: GOLD, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Both traditions agree that sanctification is real, Spirit-worked, and the goal of the Christian life. They disagree about how much holiness is attainable in this life &mdash; a disagreement that shapes pastoral culture more than doctrine.
              </p>
            </div>
            {reformedWesleyanItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: The Spirit and Sanctification */}
        {activeTab === "spirit" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "18", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                &ldquo;Work out your salvation with fear and trembling, for it is God who works in you to will and to act.&rdquo; &mdash; Philippians 2:12-13. This is the synthesis: the divine working is the ground and power of the human working.
              </p>
            </div>
            {spiritItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Practical Sanctification */}
        {activeTab === "practical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#6fcf97", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The New Testament knows no category of the solitary Christian who grows in holiness independently. Community is essential, not supplemental &mdash; and suffering, Scripture, accountability, and the sacraments are the Spirit&rsquo;s concrete instruments.
              </p>
            </div>
            {practicalItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoItems.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: activeColor, margin: "0 0 0.4rem" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
