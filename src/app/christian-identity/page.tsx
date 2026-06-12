"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practices" | "voices" | "scripture" | "journal" | "videos";

interface IDNEntry {
  id: string;
  date: string;
  lie: string;
  truth: string;
  declaration: string;
}

const THEOLOGY_CARDS = [
  {
    title: "The &ldquo;In Christ&rdquo; Language: Union, Not Just Association",
    verse: "2 Cor 5:17",
    body: `The phrase &ldquo;in Christ&rdquo; (en Christō) appears more than 80 times in Paul&rsquo;s letters and is the single most important identity descriptor in the New Testament. It is not merely a metaphor for membership or affiliation — it describes a real ontological union. To be &ldquo;in Christ&rdquo; is to be joined to him such that his history becomes your history: his death is your death to the old self, his resurrection is your new life, his righteousness is the basis of your standing before God. Theologians call this &ldquo;union with Christ&rdquo; (unio cum Christo) and it is the ground of every other benefit the gospel offers. You are not forgiven and then separately adopted and then separately given the Spirit — all of it flows from the single reality that you are in him. This means that your identity is not something you build, earn, or perform into. It is something you are received into. The most important question is not &ldquo;Who am I?&rdquo; but &ldquo;Whose am I?&rdquo; — and the answer is: you are Christ&rsquo;s, and Christ is God&rsquo;s (1 Cor 3:23).`,
  },
  {
    title: "Old Self vs. New Self: The Radical Discontinuity",
    verse: "Romans 6; Eph 4; Col 3",
    body: `Scripture speaks of a definitive break between the &ldquo;old self&rdquo; (palaios anthrōpos — old human) and the &ldquo;new self&rdquo; (kainos anthrōpos — new human). Romans 6:6 states: &ldquo;We know that our old self was crucified with him in order that the body of sin might be brought to nothing, so that we would no longer be enslaved to sin.&rdquo; The old self is not reformed or improved — it is crucified. Ephesians 4:22-24 instructs believers to &ldquo;put off your old self, which belongs to your former manner of life and is corrupt through deceitful desires, and to be renewed in the spirit of your minds, and to put on the new self, created after the likeness of God in true righteousness and holiness.&rdquo; The &ldquo;put off / put on&rdquo; language is not about trying harder but about living out a new reality. Colossians 3:3 grounds this in ontology: &ldquo;For you have died, and your life is hidden with Christ in God.&rdquo; Your true life is not visible to external measurement — it is secured in an invisible reality, the risen life of Christ himself. This means that neither moral failure nor social rejection can touch the deepest truth about who you are.`,
  },
  {
    title: "Identity Theft: How Shame, Trauma, and Sin Distort Identity",
    verse: "Gen 3; Rom 1:21-23",
    body: `The fall narrative in Genesis 3 is at its core an identity crisis. Before the fall, Adam and Eve were &ldquo;naked and not ashamed&rdquo; (Gen 2:25) — their identity was constituted by their relationship with God and they had nothing to hide, perform, or protect. After the fall, shame immediately appears: they hide, they cover themselves, and when confronted, they deflect blame. This is the pattern of identity confusion ever since: shame drives us to hide the true self, to perform a false self, or to project inadequacy onto others. Romans 1:21-23 describes idolatry as a failure of right knowing and glorifying God that leads to futile thinking and a &ldquo;darkened heart&rdquo; — hearts that have become confused about what is ultimate and therefore confused about themselves. Trauma can compound this: when something deeply wrong is done to a person, the lie whispered by the event is &ldquo;this is what you are worth; this is what you deserve; this is who you are.&rdquo; The gospel enters this space not with a self-help program but with a counter-declaration: what was done to you does not define you. What God has spoken over you in his Son does.`,
  },
  {
    title: "Performance-Based Identity vs. Grace-Based Identity",
    verse: "Gal 2:20; Eph 2:8-10",
    body: `Performance-based identity is organized around a central question: &ldquo;Am I enough?&rdquo; It answers that question through moral achievement, career success, relational approval, religious performance, or comparison with others. The defining feature of performance-based identity is that the verdict is always provisional — never fully secure, always subject to revision by the next failure or the next comparison. Grace-based identity begins from a different premise: the verdict has already been rendered in Christ. Ephesians 1:3-14 catalogs what is true of every believer before a single behavioral instruction is given: chosen, holy, blameless, adopted, redeemed, forgiven, lavished with grace, sealed. These are declarative statements about present reality, not aspirational goals. The ethical imperatives of Ephesians 4-6 flow from this foundation — they do not create it. You do not obey in order to be accepted; you obey because you are accepted. This is the difference between a slave and a son: both may do similar work, but one does it from fear of rejection and one does it from security of love. Galatians 2:20 locates the source of this new life not in self-effort but in &ldquo;the Son of God, who loved me and gave himself for me.&rdquo;`,
  },
  {
    title: "Imago Dei: We Bear God&rsquo;s Image",
    verse: "Gen 1:26-27; Col 3:10",
    body: `&ldquo;So God created man in his own image, in the image of God he created him; male and female he created them&rdquo; (Gen 1:26-27). The imago Dei is the most fundamental statement about human identity in Scripture, and it precedes all achievement, morality, or performance. Every human being — regardless of ability, status, ethnicity, age, or moral record — bears the image of God. The fall distorted the image but did not destroy it (Gen 9:6; James 3:9 both appeal to the image after the fall). In Christ, this image is being restored: Colossians 3:10 speaks of &ldquo;the new self, which is being renewed in knowledge after the image of its creator.&rdquo; This creates a double foundation for human dignity: the imago Dei grounds the dignity of all humans, and the new creation in Christ deepens and perfects it for believers. Practically, this means: you cannot lose worth through failure, you cannot be stripped of dignity by what is done to you, and you cannot earn more value through achievement. The image is a gift, not an achievement.`,
  },
  {
    title: "Adoption: Children of God, Not Merely Servants",
    verse: "Romans 8:14-17; Gal 4:4-7",
    body: `Romans 8 contains one of the most radical identity declarations in Scripture: &ldquo;For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &lsquo;Abba! Father!&rsquo; The Spirit himself bears witness with our spirit that we are children of God&rdquo; (Rom 8:15-16). The word &ldquo;adoption&rdquo; (huiothesia) in the Greco-Roman world was a legal act with profound consequences: the adopted child became fully and irrevocably a member of the new family, with complete inheritance rights and the family name. Previous debts were cancelled. The old identity was replaced. Paul uses this image deliberately: you are not tolerated guests or probationary servants — you are full heirs. Galatians 4:6-7 intensifies it: &ldquo;Because you are sons, God has sent the Spirit of his Son into our hearts, crying, &lsquo;Abba! Father!&rsquo; So you are no longer a slave, but a son, and if a son, then an heir through God.&rdquo; The intimacy of &ldquo;Abba&rdquo; (the Aramaic term of familial address to a father — closer to &ldquo;Papa&rdquo; than the formal &ldquo;Father&rdquo;) indicates the relational quality of this identity: not formal, not distant, but near, safe, and beloved.`,
  },
];

interface PracticeEntry {
  lie: string;
  truth: string;
  declaration: string;
}

const PRACTICE_ENTRIES: PracticeEntry[] = [
  {
    lie: "I am defined by my past sins",
    truth: "I am a new creation in Christ (2 Cor 5:17)",
    declaration: "My past does not define me — Christ&rsquo;s redemption does.",
  },
  {
    lie: "I am not enough",
    truth: "I am complete in Him (Col 2:10)",
    declaration: "In Christ I lack nothing He has called me to.",
  },
  {
    lie: "I am unloved and alone",
    truth: "I am God&rsquo;s beloved child (1 John 3:1)",
    declaration: "I am deeply loved with an everlasting love.",
  },
  {
    lie: "I am what I do",
    truth: "I am who God says I am, not what I achieve",
    declaration: "My worth is not earned — it is given.",
  },
  {
    lie: "I don&rsquo;t belong",
    truth: "I am a member of God&rsquo;s household (Eph 2:19)",
    declaration: "I belong to the family of God.",
  },
  {
    lie: "I am a failure",
    truth: "I am more than a conqueror (Romans 8:37)",
    declaration: "Christ&rsquo;s victory is my victory.",
  },
];

const VOICES = [
  {
    id: "anderson",
    name: "Neil T. Anderson",
    era: "1942&ndash;present",
    work: "The Bondage Breaker; Victory Over the Darkness",
    quote: "You are not the great sinner that Satan wants you to believe you are. You are a saint who sins. That distinction is everything. Your identity is not your behavior — it is your position in Christ. The enemy&rsquo;s primary strategy is identity confusion, and the believer&rsquo;s primary need is to know who they are in Christ.",
    bio: "Neil T. Anderson is the founder of Freedom in Christ Ministries and one of the most influential writers on Christian identity in the evangelical world. His book Victory Over the Darkness has helped millions of Christians understand that their fundamental identity is not constituted by their sin patterns or their struggles but by their position in Christ. Anderson&rsquo;s framework of &ldquo;who I am in Christ&rdquo; declarations — grounded in specific New Testament texts — has been widely used in pastoral counseling, small groups, and personal discipleship. His insight that the enemy&rsquo;s primary strategy is identity confusion (rather than behavior modification) has been deeply clarifying for Christians trapped in cycles of shame and self-condemnation. His work bridges systematic theology and pastoral care with unusual effectiveness.",
    contribution: "Anderson gave the evangelical church a practical, Scripture-grounded vocabulary for identity in Christ. His list of &ldquo;Who I Am in Christ&rdquo; statements, drawn directly from New Testament texts, has become a standard discipleship resource. He helped Christians move beyond guilt-management to identity transformation.",
  },
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932&ndash;1996",
    work: "Life of the Beloved; The Return of the Prodigal Son",
    quote: "You are the Beloved. That is the voice you need to listen to — not the many other voices that speak to you loudly and demandingly. The greatest spiritual work of your life is to claim your belovedness and to receive it as the deepest truth about who you are.",
    bio: "Henri Nouwen was a Dutch Catholic priest, professor at Harvard and Yale divinity schools, and spiritual writer who spent the last decade of his life in community at L&rsquo;Arche Daybreak in Toronto, caring for people with intellectual disabilities. His book Life of the Beloved, written as a letter to a secular Jewish friend, is a sustained reflection on the meaning of being beloved by God — chosen, blessed, broken, and given. Nouwen&rsquo;s spiritual autobiography was marked by profound vulnerability: his own struggles with loneliness, self-rejection, and the need for affirmation make his writing on belovedness compelling and credible rather than merely theoretical. His treatment of the Prodigal Son parable in The Return of the Prodigal Son has shaped generations of readers toward a deeper understanding of the Father&rsquo;s love.",
    contribution: "Nouwen gave the church a contemplative, psychologically honest account of identity formation. His distinction between &ldquo;the voice of the world&rdquo; (telling us we are what we do, what we have, and what others think of us) and &ldquo;the voice of the Beloved&rdquo; has become a touchstone for spiritual direction and retreat work across traditions.",
  },
  {
    id: "manning",
    name: "Brennan Manning",
    era: "1934&ndash;2013",
    work: "The Ragamuffin Gospel; Abba&rsquo;s Child",
    quote: "Define yourself radically as one beloved by God. This is the true self. Every other identity is illusion. The Abba of Jesus loves you tenderly, unconditionally, and forever. The real you — not the performing you, not the pretending you — is the one the Father runs toward.",
    bio: "Brennan Manning was a former Franciscan priest who left the priesthood, struggled with alcoholism throughout his life, and became one of the most beloved spiritual writers of the late 20th century. His book The Ragamuffin Gospel made a passionate case that the gospel is for broken, struggling, failing people — not for those who have got their act together. Manning&rsquo;s own repeated failures gave his writing a tenderness and authenticity that spoke directly to people whose identity had been shattered by shame, addiction, or religious performance. Abba&rsquo;s Child, his most focused treatment of identity, develops the concept of the &ldquo;impostor self&rdquo; — the false persona we construct to protect ourselves from vulnerability — and calls Christians to live from the true self that is defined only by the Father&rsquo;s love.",
    contribution: "Manning gave the church permission to be honest about failure and to receive grace rather than perform religiosity. His concept of the &ldquo;impostor&rdquo; (the false self that performs for approval) and the &ldquo;beloved child&rdquo; (the true self defined by God&rsquo;s love) has been deeply formative for those recovering from shame, religious perfectionism, and addiction.",
  },
  {
    id: "perry",
    name: "Jackie Hill Perry",
    era: "1989&ndash;present",
    work: "Gay Girl, Good God; Holier Than Thou",
    quote: "Shame says that what you&rsquo;ve done or what&rsquo;s been done to you is who you are. The gospel says that who you are is determined by what Christ has done. These two stories cannot coexist. One must die, and in Christ, it already has.",
    bio: "Jackie Hill Perry is a poet, author, Bible teacher, and hip-hop artist whose work addresses identity, sexuality, shame, and the holiness of God with unusual depth and personal courage. Her memoir Gay Girl, Good God tells the story of her own journey out of homosexuality and into faith, addressing the complex intersection of sexual identity, shame, and the gospel. Perry&rsquo;s distinctive contribution is her ability to speak to the experience of those whose identity has been shaped by experiences of shame, trauma, or sexuality that the church has often handled poorly — and to articulate the gospel&rsquo;s power to constitute a new identity without minimizing the real struggle of transformation. Her teaching on holiness insists that God&rsquo;s call to holiness is not a burden but a declaration of identity: you are holy, therefore live holy.",
    contribution: "Perry gave the contemporary church a voice that addresses the intersection of identity, sexuality, and shame with theological rigor, poetic beauty, and personal vulnerability. Her work has been particularly important for younger evangelicals navigating questions of sexual identity and for those whose shame has made them feel disqualified from the gospel.",
  },
  {
    id: "tripp",
    name: "Paul David Tripp",
    era: "1950&ndash;present",
    work: "Dangerous Calling; New Morning Mercies",
    quote: "The most dangerous thing you can do is look to your own performance to define yourself. You will always find reasons to be proud or reasons to despair. Your identity must be anchored in something more stable than your track record — and that something is the grace of the Lord Jesus Christ.",
    bio: "Paul David Tripp is a pastor, counselor, and author whose work sits at the intersection of Reformed theology and biblical counseling. His book Dangerous Calling is addressed to pastors but applies broadly to all Christians: it is an analysis of how identity confusion &mdash; deriving your sense of self from role, reputation, competency, or comparison &mdash; is spiritually and relationally destructive. Tripp&rsquo;s framework of &ldquo;heart change&rdquo; insists that behavior change without identity transformation is moralism, not gospel. His daily devotional New Morning Mercies applies the gospel to the rhythms of daily life with unusual specificity and pastoral warmth. Tripp consistently draws the line between the &ldquo;grace narrative&rdquo; (I am who God declares me to be) and the &ldquo;performance narrative&rdquo; (I am who my track record says I am).",
    contribution: "Tripp has helped the church understand that identity confusion is not merely a psychological problem but a theological and pastoral one. His emphasis that the gospel must address not just behavior but the identity-shaping narratives of the heart has been important for biblical counseling and discipleship.",
  },
  {
    id: "keller",
    name: "Tim Keller",
    era: "1950&ndash;2023",
    work: "Counterfeit Gods; The Prodigal God",
    quote: "If your identity is built on anything other than God&rsquo;s love for you in Christ, it is a counterfeit god. And counterfeit gods will always fail you — not because they are always bad things, but because they were never designed to carry the weight of identity. Only the love of God can do that.",
    bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in New York City and one of the most significant Reformed thinkers and preachers of the late 20th and early 21st centuries. His book Counterfeit Gods is the most influential contemporary treatment of idolatry as identity-formation: Keller argues that an idol is anything that functions as a &ldquo;functional savior&rdquo; — the thing we believe will give us significance, security, or approval if we can achieve it. These counterfeit identities (career, family, romance, reputation, moral performance) are not always bad things, but they are structurally incapable of bearing the weight of identity that only God can carry. His book The Prodigal God is a meditation on Luke 15 that shows two forms of identity confusion: the younger son who defines himself by rebellion, and the older son who defines himself by moral achievement. Both are lost; the Father&rsquo;s love addresses both.",
    contribution: "Keller gave the contemporary evangelical world a sophisticated, culturally intelligent account of idolatry and identity. His analysis of &ldquo;the good things that become ultimate things&rdquo; has helped countless people identify the hidden sources of their identity anxiety and understand why only the gospel can provide genuine security.",
  },
];

const SCRIPTURE_PASSAGES = [
  {
    ref: "2 Corinthians 5:17",
    text: "&ldquo;Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.&rdquo;",
    exposition: "The Greek kain&ecirc; ktisis echoes the language of Genesis 1 — this is not improvement but re-genesis. The verb &ldquo;has passed away&rdquo; (parēlthen) is aorist, indicating a completed past action: the old is definitively gone. The &ldquo;new has come&rdquo; (gegonen) is perfect, indicating present consequences of a past event. Paul is making an ontological claim: something genuinely new exists in the believer that did not exist before. This is the foundation of all identity transformation — not moral improvement but new creation.",
  },
  {
    ref: "Romans 8:14-17",
    text: "&ldquo;For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &lsquo;Abba! Father!&rsquo; The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs &mdash; heirs of God and fellow heirs with Christ.&rdquo;",
    exposition: "The contrast between the &ldquo;spirit of slavery&rdquo; and the &ldquo;Spirit of adoption&rdquo; is the contrast between performance-based and grace-based identity. Slavery produces fear — the constant anxiety of not doing enough. Adoption produces intimacy — the &ldquo;Abba&rdquo; cry that signals safety and nearness. In Greco-Roman law, adoption was irrevocable and conferred full inheritance rights. Paul is saying: you cannot be unadopted. The Spirit&rsquo;s inner witness is the experiential confirmation of an objective legal reality — you are a child, not a servant.",
  },
  {
    ref: "Ephesians 1:3-14",
    text: "&ldquo;Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places, even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ.&rdquo;",
    exposition: "This passage is the most comprehensive catalog of the believer&rsquo;s identity in Christ in the New Testament. Before a single command is given in Ephesians, Paul establishes what is already true: chosen, holy, blameless, predestined for adoption, redeemed, forgiven, lavished with grace, united in Christ, sealed with the Spirit, guaranteed inheritance. These are declarative statements about present reality. The ethical imperatives of chapters 4-6 flow from this foundation — they do not create it. Identity precedes obedience; who you are determines what you do.",
  },
  {
    ref: "Colossians 3:1-4",
    text: "&ldquo;If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth. For you have died, and your life is hidden with Christ in God. When Christ who is your life appears, then you also will appear with him in glory.&rdquo;",
    exposition: "The phrase &ldquo;your life is hidden with Christ in God&rdquo; is one of the most profound identity statements in Scripture. Your true life — the life that constitutes who you ultimately are — is not visible to any external measurement. It cannot be found in your performance record, your reputation, your achievements, or your failures. It is hidden in the safest possible location: in Christ, who is in God. This means that neither success nor failure, neither praise nor condemnation from others, touches the deepest truth about who you are.",
  },
  {
    ref: "1 John 3:1",
    text: "&ldquo;See what kind of love the Father has given to us, that we should be called children of God; and so we are. The reason why the world does not know us is that it did not know him.&rdquo;",
    exposition: "The phrase &ldquo;see what kind of love&rdquo; (idete potapēn agapēn) expresses astonishment — this is love of a kind that defies category. John is marveling at the sheer improbability of the identity declaration: that creatures like us should be called, and should actually be, children of God. The phrase &ldquo;and so we are&rdquo; is John&rsquo;s insistence that this is not merely a legal fiction or a theological metaphor — it is ontological reality. The world does not recognize this identity because it did not recognize the One from whom the identity comes. Our true identity is invisible to the categories of this world.",
  },
  {
    ref: "Galatians 2:20",
    text: "&ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.&rdquo;",
    exposition: "Paul speaks of a new &ldquo;I&rdquo; — a self that has been reconstituted by union with Christ. The old self-defining ego — organized around self-justification, self-protection, and performance — has died. A new self, defined by &ldquo;Christ lives in me,&rdquo; has taken its place. The present life Paul lives is lived &ldquo;by faith in the Son of God&rdquo; — meaning it draws its energy and direction from trust in Christ rather than from self-assertion. The final phrase is personal and specific: &ldquo;who loved me and gave himself for me.&rdquo; Paul&rsquo;s identity is anchored not in a theological abstraction but in the particular love of the Son for him — a love demonstrated on the cross.",
  },
];

const VIDEOS = [
  {
    videoId: "FbFKhigG1D0",
    title: "Who You Are in Christ - Neil Anderson",
    desc: "Neil T. Anderson presents his landmark teaching on the believer&rsquo;s identity in Christ, drawing from his ministry work helping thousands of Christians overcome identity confusion and live from their true self in God.",
  },
  {
    videoId: "WlfVMYHHmOk",
    title: "Knowing Your Identity in Christ",
    desc: "A rich biblical overview of what it means to be &ldquo;in Christ&rdquo; — exploring the New Testament&rsquo;s declarations about the believer&rsquo;s new nature, adoption, and security in God&rsquo;s love.",
  },
  {
    videoId: "KFSzT9Mb_gQ",
    title: "Henri Nouwen: You Are the Beloved",
    desc: "Henri Nouwen&rsquo;s landmark talk on the believer&rsquo;s fundamental identity as &ldquo;the Beloved&rdquo; of God — the core message he proclaimed in his final years at L&rsquo;Arche Daybreak.",
  },
  {
    videoId: "1eP3DvFQqVk",
    title: "Breaking Free from Shame - Jackie Hill Perry",
    desc: "Jackie Hill Perry addresses the relationship between shame, identity, and the gospel — speaking from her own experience of finding freedom in Christ from shame-based identity.",
  },
  {
    videoId: "RwEVPAKiHp4",
    title: "Tim Keller: Finding Your True Identity",
    desc: "Tim Keller teaches on why counterfeit identities — career, romance, moral performance, approval — always collapse, and why only the identity given in Christ can sustain a human life.",
  },
  {
    videoId: "5TxNEfMIijE",
    title: "Ephesians 1: All Your Blessings in Christ",
    desc: "An exposition of Ephesians 1:3-14 — the most comprehensive catalog of the believer&rsquo;s identity in the New Testament. Every spiritual blessing, already given, already yours, in Christ.",
  },
];

function PracticeCard({ entry, index }: { entry: PracticeEntry; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${flipped ? PURPLE + "60" : BORDER}`,
        borderRadius: 14,
        padding: "1.5rem",
        cursor: "pointer",
        transition: "border-color 0.25s",
      }}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && setFlipped(f => !f)}
      aria-expanded={flipped}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: `${PURPLE}22`, color: PURPLE,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "0.85rem", flexShrink: 0,
          }}>
            {index + 1}
          </div>
          <span style={{ color: MUTED, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
            {flipped ? "Truth + Declaration" : "The Lie"}
          </span>
        </div>
        <span style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: 600 }}>
          {flipped ? "tap to flip back" : "tap to reveal truth"}
        </span>
      </div>

      {!flipped ? (
        <div>
          <p style={{ color: "#EF8888", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: `&ldquo;${entry.lie}&rdquo;` }} />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ background: `${PURPLE}12`, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 8px 8px 0", padding: "0.75rem 1rem" }}>
            <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.3rem" }}>Biblical Truth</div>
            <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}
              dangerouslySetInnerHTML={{ __html: entry.truth }} />
          </div>
          <div style={{ background: "rgba(100,200,120,0.06)", borderLeft: "3px solid #5CB87A", borderRadius: "0 8px 8px 0", padding: "0.75rem 1rem" }}>
            <div style={{ color: "#5CB87A", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.3rem" }}>Declaration</div>
            <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: entry.declaration }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChristianIdentityPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedVoice, setSelectedVoice] = useState<string>("anderson");
  const [entries, setEntries] = useState<IDNEntry[]>(() => {
    try {
      const stored = localStorage.getItem("vine_christianidentity_entries");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [formLie, setFormLie] = useState("");
  const [formTruth, setFormTruth] = useState("");
  const [formDeclaration, setFormDeclaration] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("vine_christianidentity_entries", JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const saveEntry = () => {
    if (!formLie.trim()) return;
    const newEntry: IDNEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      lie: formLie,
      truth: formTruth,
      declaration: formDeclaration,
    };
    setEntries(prev => [newEntry, ...prev].slice(0, 50));
    setFormLie("");
    setFormTruth("");
    setFormDeclaration("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const voice = VOICES.find(v => v.id === selectedVoice) ?? VOICES[0];

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology" },
    { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" },
    { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

          {/* Hero */}
          <div style={{ textAlign: "center", padding: "56px 0 48px" }}>
            <div style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              color: PURPLE,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              padding: "4px 14px",
              borderRadius: 20,
              marginBottom: 18,
            }}>
              Identity &amp; Formation
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.18, margin: "0 0 18px", color: TEXT }}>
              Who You Are in Christ:<br />Discovering Your True Identity
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 0" }}>
              Your identity is not something you perform into or achieve. It is a reality declared over you in Christ before you earned it, before you failed it, and before you understood it. You are chosen, adopted, beloved, and hidden with Christ in God.
            </p>
          </div>

          {/* Tab Bar */}
          <div style={{
            display: "flex",
            gap: 6,
            background: CARD,
            borderRadius: 14,
            padding: 6,
            border: `1px solid ${BORDER}`,
            marginBottom: 36,
            flexWrap: "wrap",
          }}>
            {TABS.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                style={{
                  flex: "1 1 auto",
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "none",
                  background: activeTab === t.id ? PURPLE : "transparent",
                  color: activeTab === t.id ? "#fff" : MUTED,
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "background 0.18s, color 0.18s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* THEOLOGY TAB */}
          {activeTab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "20px 24px" }}>
                <p style={{ color: TEXT, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                  The New Testament&rsquo;s answer to the question &ldquo;Who am I?&rdquo; is not a list of virtues or achievements but a single phrase: you are <em>in Christ</em>. Everything else flows from that union — adoption, forgiveness, inheritance, new creation. These six foundations explore the theological depth of Christian identity.
                </p>
              </div>

              {THEOLOGY_CARDS.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "22px 26px",
                    borderLeft: `4px solid ${PURPLE}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                    <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.05rem", margin: 0, lineHeight: 1.35 }}
                      dangerouslySetInnerHTML={{ __html: card.title }} />
                    <span style={{
                      background: `${PURPLE}18`,
                      color: PURPLE,
                      padding: "3px 12px",
                      borderRadius: 20,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}>
                      {card.verse}
                    </span>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.82, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: card.body }} />
                </div>
              ))}
            </div>
          )}

          {/* PRACTICES TAB */}
          {activeTab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "20px 24px", marginBottom: 6 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 8px" }}>Lie &rarr; Truth &rarr; Declaration</h2>
                <p style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.7, margin: 0 }}>
                  Each card below names a false identity that many Christians unconsciously believe. Tap a card to reveal the biblical truth that counters it, and a personal declaration to speak aloud. These are not mere affirmations — they are grounded in specific New Testament texts.
                </p>
              </div>

              {PRACTICE_ENTRIES.map((entry, i) => (
                <PracticeCard key={i} entry={entry} index={i} />
              ))}

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginTop: 8 }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem", margin: "0 0 12px" }}>Daily Practice: Identity Declaration</h3>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.75, margin: "0 0 14px" }}>
                  Choose one of the declarations above and speak it aloud each morning this week — before checking your phone, before reviewing your to-do list, before engaging any performance pressure. Say it as a prayer: not to convince yourself but to orient yourself toward what is already true. The practice of declaration is not magical; it is the discipline of letting what God has said become more real than what your feelings, fears, or memories are saying.
                </p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  &ldquo;Let us hold fast the confession of our hope without wavering, for he who promised is faithful.&rdquo; — Hebrews 10:23
                </p>
              </div>
            </div>
          )}

          {/* VOICES TAB */}
          {activeTab === "voices" && (
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {/* Sidebar */}
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {VOICES.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVoice(v.id)}
                    style={{
                      background: selectedVoice === v.id ? `${PURPLE}18` : "transparent",
                      border: `1px solid ${selectedVoice === v.id ? PURPLE + "70" : BORDER}`,
                      borderRadius: 10,
                      padding: "12px 14px",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <div style={{ color: selectedVoice === v.id ? PURPLE : TEXT, fontWeight: 800, fontSize: "0.88rem", marginBottom: 2 }}
                      dangerouslySetInnerHTML={{ __html: v.name }} />
                    <div style={{ color: MUTED, fontSize: "0.75rem" }}
                      dangerouslySetInnerHTML={{ __html: v.era }} />
                  </button>
                ))}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "26px 28px" }}>
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ color: MUTED, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}
                      dangerouslySetInnerHTML={{ __html: voice.era }} />
                    <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: "1.5rem", margin: "0 0 4px" }}
                      dangerouslySetInnerHTML={{ __html: voice.name }} />
                    <div style={{ color: MUTED, fontSize: "0.87rem", fontStyle: "italic" }}
                      dangerouslySetInnerHTML={{ __html: voice.work }} />
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: "16px 18px", marginBottom: 18 }}>
                    <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>In Their Own Words</div>
                    <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                      &ldquo;<span dangerouslySetInnerHTML={{ __html: voice.quote }} />&rdquo;
                    </p>
                  </div>

                  <p style={{ color: TEXT, fontSize: "0.93rem", lineHeight: 1.82, marginBottom: 18 }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }} />

                  <div style={{ background: BG, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Contribution</div>
                    <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: voice.contribution }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCRIPTURE TAB */}
          {activeTab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "20px 24px", marginBottom: 6 }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 8px" }}>Key Passages on Identity in Christ</h2>
                <p style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.7, margin: 0 }}>
                  These six passages form the backbone of the New Testament&rsquo;s teaching on Christian identity. Each includes an exposition drawing out the theological and pastoral significance of the text.
                </p>
              </div>

              {SCRIPTURE_PASSAGES.map((passage, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: "0.95rem", marginBottom: 12 }}>
                    {passage.ref}
                  </div>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      margin: "0 0 14px",
                      borderLeft: `3px solid ${PURPLE}40`,
                      paddingLeft: 16,
                    }}
                    dangerouslySetInnerHTML={{ __html: passage.text }}
                  />
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.78, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: passage.exposition }} />
                </div>
              ))}
            </div>
          )}

          {/* JOURNAL TAB */}
          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "20px 24px" }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 8px" }}>Identity Renewal Journal</h2>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  This journal helps you practice the discipline of replacing false identities with scriptural truth. Name the lie you have been believing, write the truth from Scripture that counters it, then compose a personal declaration to speak over yourself. All entries are stored privately on this device only.
                </p>
              </div>

              {/* Form */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 26px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", color: MUTED, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
                      The Lie — What false identity are you believing?
                    </label>
                    <textarea
                      value={formLie}
                      onChange={e => setFormLie(e.target.value)}
                      placeholder="e.g. I am defined by my failures. I am not enough. I am unlovable."
                      rows={3}
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: "10px 14px",
                        color: TEXT,
                        fontSize: "0.93rem",
                        lineHeight: 1.65,
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: MUTED, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
                      The Truth — What does Scripture say about who you are in Christ?
                    </label>
                    <textarea
                      value={formTruth}
                      onChange={e => setFormTruth(e.target.value)}
                      placeholder="e.g. I am a new creation (2 Cor 5:17). I am chosen and beloved before the foundation of the world (Eph 1:4)."
                      rows={3}
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: "10px 14px",
                        color: TEXT,
                        fontSize: "0.93rem",
                        lineHeight: 1.65,
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: MUTED, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
                      Your Declaration — Speak who you are in Christ in first person
                    </label>
                    <textarea
                      value={formDeclaration}
                      onChange={e => setFormDeclaration(e.target.value)}
                      placeholder="e.g. I am chosen, redeemed, and beloved. My worth is not earned — it is given. I am hidden with Christ in God."
                      rows={3}
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        padding: "10px 14px",
                        color: TEXT,
                        fontSize: "0.93rem",
                        lineHeight: 1.65,
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={saveEntry}
                  style={{
                    marginTop: 16,
                    width: "100%",
                    padding: "12px",
                    background: saved ? "#3E8C5A" : PURPLE,
                    border: "none",
                    borderRadius: 8,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  {saved ? "Entry Saved" : "Save Entry"}
                </button>
              </div>

              {/* Past Entries */}
              {entries.length > 0 && (
                <div>
                  <h3 style={{ color: MUTED, fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                    Past Entries ({entries.length})
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {entries.map(e => (
                      <div
                        key={e.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 14,
                          padding: "18px 20px",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                          <span style={{ color: MUTED, fontSize: "0.8rem" }}>
                            {new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(e.id)}
                            aria-label="Delete entry"
                            style={{
                              background: "none",
                              border: "none",
                              color: "#3A3A58",
                              cursor: "pointer",
                              fontSize: "1rem",
                              lineHeight: 1,
                              padding: "0 4px",
                            }}
                            onMouseEnter={ev => (ev.currentTarget as HTMLButtonElement).style.color = "#EF4444"}
                            onMouseLeave={ev => (ev.currentTarget as HTMLButtonElement).style.color = "#3A3A58"}
                          >
                            &times;
                          </button>
                        </div>

                        {e.lie && (
                          <div style={{ marginBottom: 10 }}>
                            <div style={{ color: "#EF8888", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>The Lie</div>
                            <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>&ldquo;{e.lie}&rdquo;</p>
                          </div>
                        )}
                        {e.truth && (
                          <div style={{ marginBottom: 10 }}>
                            <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>The Truth</div>
                            <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{e.truth}</p>
                          </div>
                        )}
                        {e.declaration && (
                          <div>
                            <div style={{ color: "#5CB87A", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>My Declaration</div>
                            <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0, fontWeight: 600 }}>{e.declaration}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {entries.length === 0 && (
                <div style={{ textAlign: "center", padding: "32px 0", color: MUTED, fontSize: "0.9rem" }}>
                  No entries yet. Use the form above to begin your identity journal.
                </div>
              )}
            </div>
          )}

          {/* VIDEOS TAB */}
          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "20px 24px" }}>
                <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 8px" }}>Teaching Videos on Identity in Christ</h2>
                <p style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.7, margin: 0 }}>
                  Sermons, lectures, and teachings from trusted Christian pastors and teachers on who you are in Christ, breaking free from shame, and living from your true identity.
                </p>
              </div>

              {VIDEOS.map(v => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0 0 8px" }}>{v.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: v.desc }} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
