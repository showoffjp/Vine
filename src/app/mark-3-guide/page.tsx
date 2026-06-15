"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "dQw4w9WgXcW", title: "Mark 3: Healing on the Sabbath" },
  { videoId: "jNQXAC9IVRw", title: "The Twelve Apostles - Who Were They?" },
  { videoId: "Lm0pQ3R7sWh", title: "The Beelzebul Controversy Explained" },
  { videoId: "Pk9gHy2Mn4Q", title: "Blasphemy of the Holy Spirit" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chapter Guide</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Mark Chapter 3</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Mark 3 is one of the most theologically dense chapters in the Gospel &mdash; a rapid-fire sequence of confrontation, commission, accusation, and redefinition. Jesus heals a man on the Sabbath and the religious establishment immediately begins plotting his death. He commissions twelve ordinary men to carry his mission to the world. He refutes a demonic conspiracy theory with ironclad logic. And he redraws the boundaries of family entirely around obedience to God. This chapter sets in sharp relief the nature of Jesus&rsquo; kingdom and the fierce opposition it awakens." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>
            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Shape of Mark 3</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Mark writes with characteristic urgency &mdash; his connective word <em>euthys</em> (&ldquo;immediately&rdquo;) drives the narrative forward at a pace unlike any other Gospel. Chapter 3 unfolds in five rapid acts: a Sabbath confrontation in the synagogue, a mass healing scene by the sea, the appointment of the Twelve on the mountain, a series of disputes about Jesus&rsquo; identity, and a reorientation of kinship around divine obedience." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter is enclosed by ironic bookends. It opens with religious leaders watching for a reason to destroy Jesus (v.2) and closes with his biological family treating him as someone who has lost his mind (v.21). Between those two rejections stand the stories of those who receive him &mdash; crowds from every direction (v.7-8), the Twelve (v.13-19), and the unnamed brothers and sisters who do God&rsquo;s will (v.35)." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Historical and Cultural Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The Sabbath controversies in Mark 2&ndash;3 take place within a specific legal framework. Rabbinic tradition, later codified in the Mishnah tractate <em>Shabbat</em>, catalogued 39 categories of forbidden labor on the Sabbath. Healing was permitted only when life was in immediate danger. A withered hand (Greek: <em>xeraino</em>, &ldquo;dried up&rdquo;) was a chronic condition, not an emergency &mdash; making Jesus&rsquo; act a deliberate provocation, not a necessity." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The Herodians mentioned in v.6 are remarkable coalition partners for the Pharisees. These were supporters of Herod Antipas, a Roman client-king &mdash; the very political establishment the Pharisees normally opposed. Their unexpected alliance against Jesus signals just how threatening he had become to every existing power structure. When religious and political adversaries unite against you, your message has touched something genuinely subversive." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Mountain and the Twelve</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The appointment of the Twelve in vv.13-19 is thick with symbolic freight. Jesus &ldquo;went up on the mountain&rdquo; &mdash; a Mosaic echo. At Sinai, Moses called Israel into covenant on a mountain. Jesus, on a mountain, calls twelve men corresponding to the twelve tribes, and constitutes a new covenant community around himself. The number twelve is not incidental; it is a declaration that the eschatological reconstitution of Israel has begun." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Mark gives Aramaic nicknames for two of the Twelve: Simon is renamed Peter (<em>Petros</em>, &ldquo;Rock&rdquo;), and James and John receive the epithet <em>Boanerges</em>, which Mark translates as &ldquo;Sons of Thunder&rdquo; (v.17). The Aramaic underlying Boanerges is debated &mdash; possibly from <em>bene regesh</em> (&ldquo;sons of tumult&rdquo;) or a similar Semitic root. These nicknames function as prophetic renaming, a practice with deep Old Testament precedent (Abram to Abraham, Jacob to Israel)." }} />
            </div>

            {/* Section 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Truly, I say to you, all sins will be forgiven the children of man, and whatever blasphemies they utter, but whoever blasphemes against the Holy Spirit never has forgiveness, but is guilty of an eternal sin.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Mark 3:28-29 (ESV)</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>
            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Sabbath Healing and Religious Opposition</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The opening scene (vv.1-6) is a masterwork of Markan irony. Jesus enters the synagogue &mdash; a place of worship &mdash; and is immediately surveilled. The Pharisees are not listening to the word of God; they are watching to see if Jesus will heal on the Sabbath so they can accuse him. They have weaponized holy space into a courtroom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus responds not by evading the trap but by walking straight into it, commanding the man to stand in the middle of the gathering. He then poses a counter-question that reframes the entire debate: &ldquo;Is it lawful on the Sabbath to do good or to do harm, to save life or to kill?&rdquo; (v.4). The silence of the Pharisees is damning. They cannot answer because any answer exposes them. Jesus then heals the man &mdash; with a word, requiring no physical effort &mdash; and Mark notes he looked at them with anger, grieved at the hardness of their hearts (<em>porosis</em> in the Greek sense of calcification, a hardening like stone or callus)." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Spiritual Warfare and the Unclean Spirits</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "A curious detail in v.11 is easily overlooked: &ldquo;And whenever the unclean spirits saw him, they fell down before him and cried out, &lsquo;You are the Son of God.&rsquo;&rdquo; The demons recognize Jesus with a clarity that the religious leaders and even the disciples lack throughout much of the Gospel. This is one of Mark&rsquo;s characteristic dramatic ironies &mdash; the entities most opposed to the kingdom of God are the first to correctly name its King." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The Beelzebul controversy (vv.22-27) is the theological heart of the chapter. The scribes from Jerusalem level the most serious possible charge against Jesus: he is not casting out demons by divine power but by demonic power, by the ruler of demons himself. The name Beelzebul (also written Beelzebub in some manuscripts) derives from a Philistine deity name (<em>Ba&rsquo;al Zebub</em>) meaning &ldquo;lord of the flies,&rdquo; reappropriated in Jewish polemics as a name for the prince of demons. Jesus dismantles the accusation with two parables: a divided kingdom cannot stand, and a divided house will fall. The logic is airtight. If Satan is casting out Satan, Satan is destroying himself &mdash; which would mean the defeat of evil is simply happening by its own internal logic, not by divine intervention. This is obviously not the scribes&rsquo; intended conclusion, so their accusation collapses." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Unforgivable Sin</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Few passages have caused more pastoral anxiety than vv.28-30. Jesus declares that all sins and blasphemies will be forgiven &mdash; an astonishing blanket statement of grace &mdash; but that blasphemy against the Holy Spirit is an eternal sin that will never be forgiven. Mark immediately provides the interpretive key in v.30: &ldquo;for they were saying, &lsquo;He has an unclean spirit.&rsquo;&rdquo; The unforgivable sin, in its original context, is the specific act of calling the work of the Holy Spirit demonic." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Theologically, many commentators understand this sin as unforgettable not because it exceeds God&rsquo;s capacity to forgive, but because it involves the permanent rejection and inversion of the very faculty by which one comes to repentance and faith. The Holy Spirit is the one who convicts of sin and draws to Christ. To permanently and definitively call the Spirit evil is to cut off the only path to forgiveness." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Pastorally, Augustine and most subsequent interpreters have noted that the very anxiety someone feels about having committed this sin is strong evidence that they have not committed it. The person who has hardened themselves to that degree is not typically the one lying awake at night worrying about it." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Redefined Family and True Kinship</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The final scene (vv.31-35) has shocked readers across the centuries. When told that his mother and brothers are outside asking for him, Jesus responds by looking at those seated around him and declaring, &ldquo;Here are my mother and my brothers! For whoever does the will of God, he is my brother and sister and mother.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This is not a rejection of Mary or of family as an institution. Rather, it is a reorientation of the ultimate definition of family. In first-century Jewish society, family loyalty was the foundational social structure. Jesus creates a new kinship network constituted by obedience to God rather than biological descent. This directly connects to the earlier theme of the Twelve: they have left their families (1:20) to join this new community. The kingdom of God generates a new household." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: BLUE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Mission of the Twelve</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Mark describes Jesus calling the Twelve with three purposes (v.14-15): that they might <em>be with him</em>, that he might <em>send them out to preach</em>, and that they might have <em>authority to cast out demons</em>. The order is significant. Being comes before doing. The disciples are first called to relationship (&ldquo;be with him&rdquo;) before they are sent on mission. Formation precedes function." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The Greek word <em>apostolos</em> (apostle) literally means &ldquo;one who is sent out.&rdquo; Its cognate verb <em>apostello</em> carries the sense of official dispatch with delegated authority. In Jewish legal terms, an apostle functioned as an authorized representative, a <em>shaliach</em>, whose word carried the weight of the sender&rsquo;s word. The Twelve are not merely assistants &mdash; they are official envoys of the king." }} />
            </div>
          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            {/* vv.1-6 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-6</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Man with the Withered Hand</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; Jesus enters &ldquo;the synagogue again&rdquo; &mdash; a deliberate return to the scene of earlier conflict. A man with a withered (<em>xeran</em>) hand is present. This was likely a visible physical deformity, possibly nerve damage or a congenital condition. Mark does not tell us how the man came to be there." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; The Pharisees &ldquo;watched him&rdquo; (<em>paratereo</em>) &mdash; a word implying surveillance, careful observation to catch wrongdoing. This is the language of surveillance, not worship. They are gathering evidence." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3-4</strong> &mdash; Jesus commands the man to stand in the center, making the coming act maximally visible to all. His rhetorical question &mdash; &ldquo;to save life or to kill?&rdquo; &mdash; is devastating. The irony cuts deep: his opponents are literally planning to kill him (v.6) while he debates whether to save a life. They are silent (<em>esiopoun</em>, imperfect tense: they kept silent, continuously)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5</strong> &mdash; Mark uniquely records the emotional state of Jesus here: anger (<em>orge</em>) and grief (<em>syllypoumenos</em>, &ldquo;grieved together with&rdquo;) at the hardness of their hearts. This is an important Christological moment &mdash; Jesus is genuinely angry at sin, genuinely grieved by human stubbornness. Both emotions coexist without contradiction." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; The Herodians appear without explanation &mdash; Mark assumes readers know who they are. Their alliance with the Pharisees against Jesus is politically stunning. These were normally rival factions. The common enemy unites them. They &ldquo;began to make plans&rdquo; (<em>symboylion edidoun</em>) &mdash; a formal consultation, perhaps even a legal council." }} />
            </div>

            {/* vv.7-12 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 7-12</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Great Crowds from Every Direction</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "Mark lists the geographic origins of the crowds with remarkable specificity: Galilee, Judea, Jerusalem, Idumea, beyond the Jordan, and the regions of Tyre and Sidon. This is essentially the entire land of Israel plus portions of the surrounding Gentile regions. The list moves from near to far, from Jewish heartland to Gentile periphery." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The boat (v.9) is requested not for dramatic effect but for practical crowd management &mdash; Jesus uses it to prevent being &ldquo;crushed&rdquo; (<em>thlibo</em>). Meanwhile the unclean spirits fall down and declare his identity, and Jesus &ldquo;strictly ordered them not to make him known&rdquo; (v.12). This is the famous Messianic Secret of Mark&rsquo;s Gospel &mdash; Jesus consistently silences supernatural proclamations of his identity, possibly to prevent premature political messianism." }} />
            </div>

            {/* vv.13-19 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 13-19</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Appointment of the Twelve</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "Jesus goes up &ldquo;on the mountain&rdquo; (<em>to oros</em>) and calls those he desired &mdash; a stress on sovereign divine initiative. He appointed twelve &ldquo;whom he also named apostles&rdquo; (some manuscripts omit this phrase, but many scholars retain it). The Twelve are listed: Simon (Peter), James son of Zebedee, John (Boanerges), Andrew, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot, and Judas Iscariot." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Simon the Zealot&rsquo;s designation (<em>ho Kananaios</em> in Mark, likely from Aramaic <em>qan&rsquo;an</em> meaning zealot) may indicate membership in a Jewish nationalist movement, or may simply mean &ldquo;zealous one.&rdquo; If the former, the Twelve include both a Zealot (Simon) and a tax collector (Matthew) &mdash; men whose politics could not be more opposed &mdash; united in following Jesus. The list ends with Judas Iscariot, identified immediately as the one &ldquo;who betrayed him.&rdquo; The shadow of the cross falls over the list of the Twelve from the very beginning." }} />
            </div>

            {/* vv.20-30 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 20-30</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Beelzebul Controversy and the Unforgivable Sin</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "Verses 20-21 form the outer layer of a Markan &ldquo;sandwich&rdquo; (also called intercalation): Jesus&rsquo; family hears that &ldquo;he is out of his mind&rdquo; and sets out to seize him. This outer narrative is then interrupted by the scribes&rsquo; accusation (vv.22-30), before returning to the family scene in vv.31-35. Mark uses this literary technique to invite comparison: the family and the scribes are both operating with a deficient understanding of Jesus." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "The scribes descend from Jerusalem &mdash; Mark specifies their origin to indicate this is an official investigation, not a local dispute. They level two charges: (1) &ldquo;he is possessed by Beelzebul,&rdquo; and (2) &ldquo;by the ruler of the demons he casts out the demons.&rdquo; Jesus responds with two parables about division and one about binding the strong man (v.27). The &ldquo;strong man&rdquo; parable is particularly bold: to plunder a strong man&rsquo;s house, you must first bind him. Jesus is describing his own ministry as the binding of Satan and the plundering of his kingdom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The eternal sin of v.29 is tied explicitly to the scribes calling the Spirit of God a demon. It is a sin of systematic, official, sustained inversion &mdash; not a momentary doubt or failure, but a deliberate, ideologically-committed rejection of God&rsquo;s work as evil." }} />
            </div>

            {/* vv.31-35 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 31-35</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Jesus&rsquo; True Family</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "Jesus&rsquo; mother and brothers stand &ldquo;outside&rdquo; (<em>exo</em>) while Jesus is &ldquo;inside&rdquo; (<em>endon</em>) with those sitting around him. The spatial language is theologically freighted: those who do the will of God are inside, in the presence of Jesus, while biological family &mdash; at this moment seeking to restrain him &mdash; remain outside." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Mark mentions brothers of Jesus without elaboration, which has generated centuries of debate between those who take &ldquo;brothers&rdquo; literally (sons of Joseph and Mary, following Helvidius) and those who take it as &ldquo;cousins&rdquo; or &ldquo;half-brothers&rdquo; (following Jerome and Eastern Christian tradition respectively). Mark&rsquo;s point is independent of that debate: the new family of God is constituted not by birth but by obedience." }} />
            </div>
          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>
            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>On Hardness of Heart</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The Pharisees in Mark 3 are not cartoon villains. They are devout, religiously serious people who have become so committed to their framework that they cannot recognize God when he stands before them. Their hardness of heart (<em>porosis</em>) was not sudden; it was the calcified result of a thousand small choices to prioritize system over Person." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The searching question for every reader: Are there areas in my theological or institutional commitments that have become so calcified that I could miss what God is actually doing? Doctrine matters &mdash; but it is always in service of knowing the living God, not a substitute for him." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Being With Jesus Before Going for Jesus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The threefold purpose of the Twelve &mdash; to be with him, to preach, to cast out demons &mdash; establishes a non-negotiable order. Presence before proclamation. Formation before function. The great temptation of ministry is to skip the first step: to be perpetually in motion for Jesus while neglecting time <em>with</em> Jesus." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "In every generation the church has produced burnt-out activists who served Christ&rsquo;s cause but lost Christ&rsquo;s presence. The Twelve were called first to proximity, then to proclamation. What would it look like to reorder your week so that &ldquo;being with him&rdquo; genuinely precedes &ldquo;going for him&rdquo;?" }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>The Breadth of Grace</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Before Jesus mentions the one sin that is not forgiven, he announces something staggering: &ldquo;all sins will be forgiven the children of man, and whatever blasphemies they utter.&rdquo; The pastoral priority here is not the limit of forgiveness but its extraordinary scope. Jesus is not primarily drawing a narrow line; he is throwing open the doors of mercy as wide as possible." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Whatever you have said, whatever you have done, whatever accusation shame is leveling at you right now &mdash; Jesus says it falls inside the circle of divine forgiveness. The unforgivable sin is not an anxious person&rsquo;s failure or a desperate person&rsquo;s cry. It is the cold, systematic, official declaration that good is evil. If you fear you have committed it, you almost certainly have not." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>A New Kind of Family</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "For many people, the church is the first functional family they have ever had. For others, biological family remains deeply important but is being restructured around a higher loyalty. Jesus&rsquo; words in vv.33-35 are both comfort and challenge: comfort to those for whom family has been a source of pain or exclusion, and challenge to those who treat family loyalty as a higher value than allegiance to Christ." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The local church is meant to be this new household made visible &mdash; people who share no biology but share the same Father, people who did not choose each other the way friends are chosen but are bound by a covenant they share in Christ. This is the vision: doing the will of God together, and finding in that shared obedience a kinship deeper than blood." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Where in your life do you find yourself &ldquo;watching&rdquo; others with a critical eye rather than receiving what God might be doing through them?" }} />
                <li dangerouslySetInnerHTML={{ __html: "What does it mean to you personally that Jesus was &ldquo;grieved at the hardness of their hearts&rdquo; &mdash; that his anger at sin coexisted with sorrow over the sinner?" }} />
                <li dangerouslySetInnerHTML={{ __html: "How does the order of the Twelve&rsquo;s calling &mdash; be with him first, then go &mdash; challenge how you structure your time with God versus your service for God?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Jesus redefines family around doing the will of God. In what concrete ways is your church community functioning as a genuine family to you, or failing to do so?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The disciples include a tax collector and a zealot &mdash; political opposites. What modern equivalents might Jesus place together at his table, and what does that demand of you?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, soften any area of my heart that has grown hard through familiarity, defensiveness, or pride. Let me not be a Pharisee who watches you work and only sees a threat to my framework. Give me eyes to see your kingdom expanding, ears to hear your Spirit speaking, and the humility to be numbered among those who do your will &mdash; your brother, your sister, your family. Amen." }} />
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Mark 3.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
