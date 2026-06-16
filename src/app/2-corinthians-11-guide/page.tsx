"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function SecondCorinthians11GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "3sDVTBGAZKc", title: "2 Corinthians Overview -- The Bible Project" },
    { videoId: "MRPbKBH6OyY", title: "Power in Weakness -- 2 Corinthians 11 and 12" },
    { videoId: "kF_-KdWg7uI", title: "False Apostles and Authentic Ministry -- 2 Cor 11" },
    { videoId: "9RpkrzkxBBk", title: "Paul&rsquo;s Suffering List and the Fool&rsquo;s Speech Explained" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0f0a14 0%, #0d0a18 60%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${ROSE}18`, border: `1px solid ${ROSE}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: ROSE, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            2 Corinthians 11 &mdash; Deep Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            Paul&rsquo;s &ldquo;Fool&rsquo;s Speech&rdquo;
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.75 }}>
            Second Corinthians 11 contains the most ironic, emotionally raw, and rhetorically brilliant passage Paul ever wrote &mdash; a self-defense that deliberately subverts every convention of self-defense, boasting in beatings, shipwrecks, and a basket instead of credentials and achievements.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "2 Corinthians 11:1-33", color: ROSE },
              { label: "False Apostles", color: PURPLE },
              { label: "Boasting in Weakness", color: GOLD },
              { label: "Authentic Ministry", color: GREEN },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}14`, border: `1px solid ${badge.color}30`, color: badge.color, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 22px",
                border: "none",
                background: "transparent",
                color: activeTab === tab.id ? ROSE : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: 14,
                cursor: "pointer",
                borderBottom: activeTab === tab.id ? `2px solid ${ROSE}` : "2px solid transparent",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px 60px" }}>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Intro card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px", marginBottom: 24 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.3rem", marginBottom: 14 }}>The Setting: Paul Under Siege</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "When Paul wrote 2 Corinthians (around AD 55-56 from Macedonia), he was dealing with a crisis that cut deeper than any theological dispute: his own apostolic authority was being actively dismantled from within the church he had planted. A group of intruders &mdash; whom Paul will call, with biting irony, &ldquo;super-apostles&rdquo; (11:5; 12:11) &mdash; had arrived in Corinth and were systematically discrediting him. Their critique was specific: Paul&rsquo;s physical presence was unimpressive, his speaking ability was beneath the standards of Greco-Roman rhetoric, he refused to take financial support (which signaled low social status), and compared to these newcomers with their dazzling presentations, Paul simply did not look like someone worth following." }}
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s response in chapter 11 is one of the strangest documents in the New Testament. Instead of marshaling his genuine credentials &mdash; his direct encounter with the risen Christ, his years of ministry experience, his theological depth &mdash; he performs a parody of self-commendation. He tells the Corinthians he is going to &ldquo;boast a little&rdquo; like a fool (v. 1, 16-17), plays along with the game his opponents have set up, and then completely inverts its logic by producing as his credential list the most inglorious resume imaginable: beatings, imprisonments, stonings, shipwrecks, a night adrift at sea, constant danger, exhaustion, cold, nakedness. And the final item &mdash; the climax of the fool&rsquo;s speech &mdash; is being lowered in a basket through a window to escape the city of Damascus (vv. 32-33), the precise inverse of the military honor of being first over an enemy wall." }}
                style={{ color: MUTED, lineHeight: 1.85, fontSize: 15 }}
              />
            </div>

            {/* Rhetorical context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.2rem", marginBottom: 14 }}>The Rhetoric of Irony</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Ancient Greco-Roman culture had a sophisticated tradition of self-praise (peristasis catalogs, boasting speeches, commendation letters). Paul&rsquo;s opponents were fluent in this tradition and were using it effectively. Paul&rsquo;s counter-move is rhetorically brilliant precisely because he appears to play along while actually dismantling the game from the inside. By labeling his own speech &ldquo;foolishness&rdquo; (aphrosune, vv. 1, 16, 17, 19, 21), he signals from the start that he considers the genre itself to be beneath his gospel. He is not conceding the terms; he is exposing them as absurd &mdash; and then out-absurding them by producing a catalog of sufferings where his opponents would have produced a catalog of achievements." }}
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: "The entire chapter can be read as a sustained piece of controlled irony: Paul performing the role of the fool while demonstrating that he is anything but. The reader who understands the rhetoric recognizes that the &ldquo;foolish&rdquo; boasting actually reveals what genuine apostolic ministry looks like &mdash; and, by implication, how unlike it the &ldquo;super-apostles&rsquo;&rdquo; credentials actually are. The fool&rsquo;s speech is Paul&rsquo;s most sophisticated piece of writing precisely because it is the most deliberately &ldquo;unsophisticated.&rdquo;" }}
                style={{ color: MUTED, lineHeight: 1.85, fontSize: 15 }}
              />
            </div>

            {/* Fast facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
              {[
                { label: "Book", value: "2 Corinthians" },
                { label: "Chapter", value: "11 (all 33 verses)" },
                { label: "Written From", value: "Macedonia (c. AD 55-56)" },
                { label: "Key Verse", value: "2 Corinthians 11:30" },
                { label: "Central Move", value: "Boasting in weakness" },
                { label: "Genre", value: "Ironic apology (self-defense)" },
              ].map((fact) => (
                <div key={fact.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>{fact.label}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{fact.value}</div>
                </div>
              ))}
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: 16 }}>Chapter Structure at a Glance</h2>
              {[
                { ref: "vv. 1-6", title: "Bear With Me in a Little Foolishness", summary: "Paul asks for patience as he enters the ironic mode of self-defense, motivated by jealousy for the Corinthians like a father protecting his daughter for her true husband." },
                { ref: "vv. 7-15", title: "The False Apostles: Angels of Light", summary: "Paul defends his refusal of financial support; introduces the false apostles as servants of Satan disguised as angels of light and servants of righteousness." },
                { ref: "vv. 16-21", title: "Paul Forced to Boast -- Indulge the Fool", summary: "Paul explicitly adopts the &lsquo;fool&rsquo;s&rsquo; role, calling out the Corinthians for gladly enduring fools while the false apostles enslaved and exploited them." },
                { ref: "vv. 22-29", title: "The Inverted Credential List: Beatings, Shipwrecks, Dangers", summary: "Paul&rsquo;s astonishing catalog of sufferings as his apostolic resume: five floggings, three beatings with rods, one stoning, three shipwrecks, a night adrift, endless dangers." },
                { ref: "vv. 30-33", title: "Boast in Weakness &mdash; The Damascus Basket", summary: "Paul announces he will boast in weakness, offers the God-who-knows-I-am-not-lying oath, and then ends the speech with his most embarrassing credential: escaping Damascus in a basket." },
              ].map((sec, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                  <div style={{ background: `${ROSE}18`, border: `1px solid ${ROSE}40`, color: ROSE, borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>
                    {sec.ref}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{sec.title}</div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.7 }}>{sec.summary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>The Major Themes of 2 Corinthians 11</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Four themes interweave through 2 Corinthians 11 and together constitute one of the New Testament&rsquo;s most powerful theologies of ministry: what authentic apostolic service looks like, how to recognize false teaching, why weakness is the currency of genuine power, and how suffering functions as credential rather than disqualification." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                color: ROSE,
                number: "01",
                title: "False Apostles as Angels of Light",
                content: "The most theologically frightening passage in chapter 11 is verses 13-15. Paul does not characterize the false apostles as obviously fraudulent or easily recognized. He says they are &ldquo;masquerading as apostles of Christ&rdquo; (v. 13) and that Satan himself &ldquo;masquerades as an angel of light&rdquo; (v. 14). The Greek word for masquerade (metaschematizo) means to transform oneself in outward appearance, to change costume. The deception is sophisticated precisely because it is not crude: these false apostles look impressive, sound authoritative, carry credentials, and present a version of Christianity that is compelling on the surface. Paul&rsquo;s warning in verse 4 is even more specific: the Corinthians tolerate someone who comes and preaches &ldquo;another Jesus&rdquo; (allon Iesoun), a &ldquo;different spirit&rdquo; (pneuma heteron), a &ldquo;different gospel&rdquo; (euangelion heteron). The danger is not that the false teaching is obviously wrong; it is that it is subtly distorted in ways that are easy to miss unless you are paying close attention to the content. The angel of light is not a caricature of evil; it is evil wearing the face of the good.",
              },
              {
                color: PURPLE,
                number: "02",
                title: "Paul&rsquo;s Jealousy for the Corinthians",
                content: "Verses 1-3 introduce Paul&rsquo;s remarkable self-description: &ldquo;I feel a divine jealousy for you, since I betrothed you to one husband, to present you as a pure virgin to Christ.&rdquo; The metaphor is that of a father whose daughter is engaged to a man of honor &mdash; and who is watching with anxiety as she is being seduced away. Paul positions himself as the guardian of the Corinthians&rsquo; covenant fidelity to Christ. His &ldquo;jealousy&rdquo; (zelos) is not personal possessiveness; it is the same divine jealousy (theos zelos) that characterizes God&rsquo;s own commitment to the covenant relationship (Exodus 20:5; 34:14). God is a jealous God not in the petty human sense but in the sense that he is passionately committed to the exclusive covenant he has established with his people. Paul mirrors this quality as an apostle: his concern is not that the Corinthians remain loyal to him but that they remain loyal to Christ. The seduction he fears is not merely theological but relational &mdash; the &ldquo;sincere and pure devotion to Christ&rdquo; (v. 3) that was the goal of his ministry is being undermined by the serpentine deception of the intruders.",
              },
              {
                color: GOLD,
                number: "03",
                title: "Boasting as a Fool &mdash; The Subversion of Honor Culture",
                content: "The ancient Mediterranean world was a shame-honor culture in which social standing was publicly contested, claimed, and defended through performances of self-commendation. Paul&rsquo;s opponents were playing this game effectively: they came with letters of recommendation (3:1), they dressed and spoke like men of status and learning, and they positioned Paul&rsquo;s refusal to take money as evidence of his low-status (v. 7). Paul&rsquo;s counter is not to play the game better but to expose the game as fundamentally incompatible with the gospel of a crucified Messiah. He adopts the &ldquo;fool&rsquo;s role&rdquo; (vv. 16-21) explicitly &mdash; not because he is actually a fool but because he is demonstrating that the whole framework of competitive self-commendation is foolishness from the perspective of the cross. The &ldquo;super-apostles&rsquo;&rdquo; credentials are evaluated by the standards of a world that the gospel has rendered obsolete. When Paul produces his own list in verses 22-29, he is playing the game &mdash; but filling its categories with content that exposes how absurd the game is. Beatings, shipwrecks, and hunger are the credentials of one whose life is conformed to the pattern of the crucified Christ. They are, on the world&rsquo;s terms, disqualifications. They are, on the gospel&rsquo;s terms, the clearest evidence of genuine apostolic ministry.",
              },
              {
                color: GREEN,
                number: "04",
                title: "Suffering as Proof of Authentic Ministry",
                content: "The catalog of sufferings in verses 23-29 is arguably the most sustained firsthand account of ministry hardship in all of ancient literature. Five times Paul received thirty-nine lashes from Jewish authorities (a punishment so severe it was calculated to stop one short of the forty strokes the Torah prescribed, ensuring no law was accidentally broken in the process of punishing). Three times he was beaten with Roman rods &mdash; a punishment reserved for non-citizens and criminals. Once he was stoned and left for dead (Acts 14:19). Three times shipwrecked, once spending a night and a day in the open sea. The catalog continues through constant travel, constant danger from every direction, sleeplessness, hunger, thirst, cold, nakedness &mdash; and then the anxiety that lies beneath all of this: &ldquo;the daily pressure on me of my anxiety for all the churches&rdquo; (v. 28). The question is: why does Paul produce this list as his credential? The answer emerges from the theological logic of the entire letter, crystallized in 13:4: &ldquo;he was crucified in weakness, yet he lives by God&rsquo;s power. Likewise, we are weak in him, yet by God&rsquo;s power we will live with him.&rdquo; The pattern of Christ &mdash; weakness before glory, suffering before resurrection, the cross before the crown &mdash; is reproduced in the apostle&rsquo;s life. Sufferings are not evidence that God has abandoned Paul; they are evidence that Paul&rsquo;s ministry follows the same pattern as the Christ he proclaims.",
              },
            ].map((theme) => (
              <div key={theme.number} style={{ background: CARD, border: `1px solid ${theme.color}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 16, borderLeft: `4px solid ${theme.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ color: theme.color, fontWeight: 900, fontSize: 11, letterSpacing: 1, opacity: 0.7 }}>{theme.number}</span>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>{theme.title}</h3>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: theme.content }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>Verse by Verse Through 2 Corinthians 11</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "A close reading of all 33 verses, divided into five sections following the movement of Paul&rsquo;s ironic self-defense. Each section requires careful attention to tone: Paul is simultaneously serious about the dangers facing the Corinthians and deliberately performing a role he considers beneath the dignity of the gospel." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                ref: "2 Corinthians 11:1-6",
                title: "Bear With Me in a Little Foolishness",
                accentColor: GOLD,
                verse: "&ldquo;I wish you would bear with me in a little foolishness. Do bear with me! For I feel a divine jealousy for you, since I betrothed you to one husband, to present you as a pure virgin to Christ. But I am afraid that as the serpent deceived Eve by his cunning, your thoughts will be led astray from a sincere and pure devotion to Christ.&rdquo;",
                commentary: "Paul opens the chapter with a request and a revelation. The request: bear with him in a little foolishness. He is signaling in advance that what follows will be &ldquo;foolish&rdquo; by the standards he actually holds &mdash; the ironic mode is declared before he enters it. The revelation: his motivation is not wounded pride but divine jealousy. The word zelos here carries covenantal weight. God&rsquo;s jealousy in the Old Testament is the passion of a covenant God who will not share his people with rivals (cf. Exodus 34:14; Deuteronomy 4:24; Joel 2:18). Paul maps this theological category onto his own apostolic concern: he betrothed the Corinthians to Christ (as a father arranging his daughter&rsquo;s marriage), and he is afraid of the seduction in progress. Verse 3 invokes the most famous seduction in Scripture: the serpent in the garden who &ldquo;deceived Eve by his cunning.&rdquo; The Greek word for cunning (panourgia) suggests not straightforward wickedness but sophisticated manipulativeness &mdash; the deception works precisely because it is subtle and attractive, not crude and obvious. The Corinthians are in danger of the same kind of deviation: not a dramatic apostasy but a gradual drift from the &ldquo;sincere and pure devotion to Christ&rdquo; that was the goal of Paul&rsquo;s ministry. Verses 5-6 deliver a dismissive swipe at the &ldquo;super-apostles&rdquo; (huperlian apostolon &mdash; a dripping sarcasm) while maintaining Paul&rsquo;s own claim to genuine apostolic knowledge. He may be an amateur in speech; he is not an amateur in knowledge.",
              },
              {
                ref: "2 Corinthians 11:7-15",
                title: "False Apostles Masquerade as Servants of Righteousness",
                accentColor: ROSE,
                verse: "&ldquo;And no wonder, for Satan himself masquerades as an angel of light. It is not surprising, then, if his servants also masquerade as servants of righteousness. Their end will be what their actions deserve.&rdquo;",
                commentary: "Verses 7-11 address the financial controversy directly: Paul had refused to take money from the Corinthians, and his opponents had weaponized this against him. In the ancient world, a patron-client relationship created mutual obligations: accepting support signaled that you valued the relationship and the supporters. Refusing it could be read as contempt. But Paul&rsquo;s reason was different: he did not want the gospel to be burdened with financial expectations, and he did not want the message he preached to appear to be motivated by gain (cf. 1 Corinthians 9:12-18). He &ldquo;robbed other churches&rdquo; (v. 8 &mdash; the word is esulesa, a dramatic military metaphor for taking plunder) by accepting support from Macedonian churches so he could serve the Corinthians for free. His motivation was love (v. 11). Verses 12-15 pivot to the sharpest indictment in the chapter. Paul declares his opponents to be &ldquo;false apostles&rdquo; (pseudapostoloi) and &ldquo;deceitful workers&rdquo; (ergatai dolioi) who are &ldquo;masquerading as apostles of Christ.&rdquo; The logic of the masquerade is explained by reference to their master: Satan himself puts on the costume of an angel of light. The imitation is so convincing precisely because it is drawn from the appearance of the real thing. The servants of Satan do not appear as obvious agents of darkness; they appear as servants of righteousness &mdash; morally serious, spiritually impressive, concerned for the Corinthians&rsquo; welfare. The test is not surface appearance but theological content and ethical fruit. Their end, Paul says simply, will correspond to their works.",
              },
              {
                ref: "2 Corinthians 11:16-21",
                title: "Paul Forced to Boast &mdash; Indulge the Fool",
                accentColor: PURPLE,
                verse: "&ldquo;I repeat, let no one think me foolish. But even if you do, accept me as a fool, so that I too may boast a little. What I am saying with this boastful confidence, I say not as the Lord would but as a fool. Since many boast according to the flesh, I too will boast.&rdquo;",
                commentary: "The rhetorical complexity of verses 16-21 is remarkable. Paul is doing several things simultaneously: (1) distancing himself from the mode of boasting he is about to employ (&ldquo;I say not as the Lord would&rdquo; &mdash; v. 17), (2) indicting the Corinthians for their tolerance of the false apostles while being suspicious of him, (3) performing the fool&rsquo;s role they have effectively assigned him by their susceptibility, and (4) setting up the devastating irony of verses 22-29 where the &ldquo;boast&rdquo; turns out to be entirely inverted. The Corinthians&rsquo; tolerance of the false teachers is skewered in verses 19-21: &ldquo;You put up with it if someone makes slaves of you, exploits you, takes advantage of you, puts on airs, or slaps you in the face.&rdquo; The verbs are remarkable in their physical specificity: the false apostles are enslaving, devouring, taking captive, exalting themselves, and striking the Corinthians &mdash; and the Corinthians are gladly bearing it (v. 19: hedeos anechesthe &mdash; you put up with it with pleasure). By contrast, Paul says with devastating self-mockery: &ldquo;I must admit, we were too weak for that!&rdquo; He has been too gentle, too self-giving, too unwilling to exploit them &mdash; and this gentleness has been mistaken for weakness. The irony is complete: the ones who are enslaving the Corinthians are seen as strong; the one who served them is seen as weak.",
              },
              {
                ref: "2 Corinthians 11:22-29",
                title: "Paul&rsquo;s Sufferings: Beatings, Shipwrecks, Constant Danger",
                accentColor: GREEN,
                verse: "&ldquo;Are they Hebrews? So am I. Are they Israelites? So am I. Are they offspring of Abraham? So am I. Are they servants of Christ? I am a better one &mdash; I am talking like a madman &mdash; with far greater labors, far more imprisonments, with countless beatings, and often near death.&rdquo;",
                commentary: "Verses 22-23 perform a rapid match-and-surpass on the ethnic and status credentials the false apostles presumably claimed. Hebrew, Israelite, offspring of Abraham &mdash; Paul claims all three and refuses to be outranked. But then, at verse 23, the game changes completely. The false apostles presumably claimed apostolic credentials by their power, eloquence, and spiritual achievement. Paul says he will meet their claim of being &ldquo;servants of Christ&rdquo; &mdash; but his proof is entirely different: &ldquo;I am a better one &mdash; I am talking like a madman.&rdquo; The Greek (paraphronon lalo) signals that he recognizes this claim as extravagant but presses it anyway. And then the list: five times thirty-nine lashes from Jewish authorities. Each flogging was close to fatal &mdash; thirty-nine stripes (one short of forty, to avoid accidentally breaking the Mosaic limit of Deuteronomy 25:3) administered with a braided leather strap, one-third to the chest and two-thirds across the back, while bent double. Three beatings with Roman rods (Acts 16:22-23 records one). One stoning &mdash; probably the Lystra event of Acts 14:19, where Paul was left for dead. Three shipwrecks (none of which is the famous Malta shipwreck of Acts 27, which came later &mdash; showing how Paul&rsquo;s letter predates that chapter of his life). A night and a day adrift in the open sea (the Greek word is en to butho &mdash; in the deep, the abyss). The catalog of dangers in verses 26-27 is geographically and socially exhaustive: rivers, robbers, Jewish compatriots, Gentiles, city perils, wilderness perils, sea perils, false brothers. The list concludes with what may be the most honest admission in the passage (vv. 28-29): the external dangers are matched by an internal one: &ldquo;the daily pressure on me of my anxiety for all the churches.&rdquo; Every report of a weak church makes Paul weak; every report of a church member stumbling makes Paul burn with indignation. His pastoral identification with the suffering of others is total.",
              },
              {
                ref: "2 Corinthians 11:30-33",
                title: "Boast in Weakness &mdash; The Damascus Escape in a Basket",
                accentColor: TEAL,
                verse: "&ldquo;If I must boast, I will boast of the things that show my weakness. The God and Father of the Lord Jesus, he who is blessed forever, knows that I am not lying &mdash; I was let down in a basket through a window in the wall and escaped his hands.&rdquo;",
                commentary: "The fool&rsquo;s speech reaches its astonishing conclusion. After the harrowing catalog of beatings, shipwrecks, and constant mortal danger, Paul declares his principle: &ldquo;If I must boast, I will boast of the things that show my weakness.&rdquo; The principle is not incidental &mdash; it is the theological heart of the passage and of chapters 10-13 as a whole. Weakness (astheneia) is the appropriate currency of apostolic boasting because it is the currency of the crucified Christ. The one who saved the world did not do so by impressive credentials but by radical self-emptying (Philippians 2:7) and the apparent shame of crucifixion. The minister who follows that Christ will look, from the world&rsquo;s perspective, similarly unimpressive. The oath of verse 31 (&ldquo;The God and Father of the Lord Jesus, he who is blessed forever, knows that I am not lying&rdquo;) is unexpected &mdash; a formal divine oath vouching for the truth of what he is about to say. What does he need an oath to verify? The account of the Damascus basket (vv. 32-33). The bathos is deliberate and devastating. After the solemn divine oath, Paul delivers his final credential: being lowered through a hole in the city wall in a basket like cargo to avoid capture. In the Roman military tradition, the corona muralis (mural crown) was the highest military honor &mdash; awarded to the first soldier over the wall in an assault on an enemy city. Paul&rsquo;s Damascus credential is the precise inversion: the first man over the wall in reverse, going down in a basket. If the fool&rsquo;s speech is Paul&rsquo;s parody of honor culture, this ending is its punchline &mdash; except the humor is entirely serious. The one who escaped in a basket serves a risen Lord who was laid in a tomb. The pattern of weakness leading to life is the only pattern that matters.",
              },
            ].map((section, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${section.accentColor}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 20, borderLeft: `4px solid ${section.accentColor}` }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "baseline", marginBottom: 12 }}>
                  <span style={{ background: `${section.accentColor}18`, color: section.accentColor, border: `1px solid ${section.accentColor}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                    {section.ref}
                  </span>
                  <h3 style={{ color: section.accentColor, fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>{section.title}</h3>
                </div>
                <blockquote style={{ margin: "0 0 16px", padding: "12px 16px", background: `${section.accentColor}08`, borderRadius: 8, borderLeft: `2px solid ${section.accentColor}40` }}>
                  <p
                    dangerouslySetInnerHTML={{ __html: section.verse }}
                    style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                  />
                </blockquote>
                <p
                  dangerouslySetInnerHTML={{ __html: section.commentary }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>Living 2 Corinthians 11 Today</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Second Corinthians 11 is not a historical artifact about ancient inter-apostolic disputes. It is a living document that speaks directly to the contemporary church&rsquo;s struggles with celebrity Christianity, prosperity teaching, spiritual consumerism, and the constant temptation to evaluate ministry by the metrics of success rather than the pattern of the cross." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "Discerning False Teachers: The Angel of Light Test",
                text: "Paul&rsquo;s most urgent warning in chapter 11 is that false teaching does not announce itself as such. The false apostles looked, by every external measure, more impressive than Paul. They were more rhetorically polished, more socially sophisticated, more willing to claim authority. The test Paul implicitly offers is not rhetorical brilliance or spiritual impressiveness but theological content and fruit. In Galatians 1:8 he frames it in cosmic terms: even if an angel from heaven preaches a different gospel, he is to be anathema. In 2 Corinthians 11:4 he is more specific: the test is whether the Jesus being preached, the spirit being promoted, and the gospel being proclaimed are the same as the authentic apostolic deposit. The angel of light masquerades not by preaching obvious error but by a subtle distortion &mdash; a Jesus whose demands have been softened, a spirit whose fruits are prosperity rather than holiness, a gospel whose center has shifted from the crucified Messiah to human flourishing on easy terms. Discernment requires knowing the original so well that the counterfeit is immediately recognizable.",
                question: "Where in your own media consumption, church context, or social media feed do you encounter teachings that might be plausible distortions of the gospel? What specific tests do you apply to evaluate what you receive?",
              },
              {
                color: PURPLE,
                title: "Authentic Ministry Is Marked by Suffering, Not Success",
                text: "Paul&rsquo;s credential list in verses 23-29 fundamentally challenges the way the contemporary church evaluates ministry. The metrics of contemporary Christian success &mdash; platform size, book sales, church attendance, media presence, speaking fees &mdash; are precisely the categories that the false apostles in Corinth were good at. Paul&rsquo;s catalog offers a different set of indicators entirely: perseverance through hardship, willingness to suffer for the gospel, identification with those who are hurting, genuine pastoral anxiety for the communities in one&rsquo;s care. This is not to romanticize suffering or to suggest that hardship is automatically evidence of godliness. But it is to insist that the pattern of the cross &mdash; weakness before glory, suffering before resurrection &mdash; is the template for genuine Christian ministry. The minister whose life looks nothing like cruciform self-giving and everything like the accumulation of cultural capital and status deserves the same scrutiny Paul applied to the super-apostles of Corinth.",
                question: "How do you evaluate the ministries you follow or support? What role does the minister&rsquo;s willingness to suffer, to be unknown, and to be genuinely self-giving play in your assessment of their authenticity?",
              },
              {
                color: GOLD,
                title: "Boast in Weakness, Not Credentials",
                text: "The principle Paul articulates in verse 30 &mdash; &ldquo;If I must boast, I will boast of the things that show my weakness&rdquo; &mdash; runs directly counter to the self-promotional logic of contemporary culture, including much of contemporary Christian culture. The instinct to curate an impressive public identity, to lead with credentials and achievements, to build a platform on the basis of what you have accomplished, is not spiritually neutral. It reproduces the logic of the Corinthian false apostles within the framework of modern media. Paul&rsquo;s alternative is not false humility &mdash; the performative self-deprecation that is actually a form of drawing attention to oneself. It is genuine transparency about the ways in which one&rsquo;s ministry has been marked by failure, suffering, inadequacy, and the undeniable necessity of grace. The boast in weakness is not, ultimately, self-focused at all; it is Christ-focused. When I am honest about my weakness, the glory for whatever good has been accomplished can only go to God. The Damascus basket is not Paul&rsquo;s confession of incompetence; it is his declaration that his ministry does not run on his own power.",
                question: "Where in your own life do you feel the pull to curate an impressive image rather than being honest about your struggles, failures, and dependence on grace? What would &lsquo;boasting in weakness&rsquo; look like for you practically?",
              },
              {
                color: GREEN,
                title: "The Pastoral Heart: Anxiety for All the Churches",
                text: "Verse 28 stops the external catalog of hardships to name the internal one: &ldquo;there is the daily pressure on me of my anxiety for all the churches.&rdquo; Paul carried a weight that no shipwreck or flogging produced: the pastoral burden of communities in formation, vulnerable to error, struggling with sin, facing opposition. The next verse expands this: &ldquo;Who is weak, and I am not weak? Who is made to stumble, and I am not indignant?&rdquo; Paul&rsquo;s pastoral identification with the communities he served was not professional distance but full emotional engagement. When they were weak, he felt weak. When they stumbled, he burned with righteous anger &mdash; presumably directed not at the stumbling believer but at whatever or whoever caused the stumbling (cf. Matthew 18:6). This is the model of pastoral care that the false apostles, with their emphasis on their own credentials and their willingness to exploit the congregation (v. 20), demonstrably lacked. Genuine ministry is not primarily about the minister&rsquo;s platform; it is about the wholeness and faithfulness of the community in one&rsquo;s care.",
                question: "Who in your sphere of influence is weak right now? What would it mean to genuinely &lsquo;be weak with them&rsquo; rather than maintaining a professional or managed distance? How might Paul&rsquo;s model of total pastoral identification change the way you show up for struggling people?",
              },
              {
                color: TEAL,
                title: "Glory in Weakness Rather Than Impressive Credentials",
                text: "The Damascus basket episode (vv. 32-33) is Paul&rsquo;s final word on the question of what genuine apostolic glory looks like. He has been through beatings, shipwrecks, and exposure to death in every form imaginable. And the most important moment he chooses to highlight as the capstone of his fool&rsquo;s speech is &mdash; a basket. An escape. Running away. The moment that in military culture would have been the ultimate disgrace. Why? Because Paul&rsquo;s ministry does not run on the energy of heroic self-assertion. It runs on the energy of resurrection &mdash; which means it runs through death, through weakness, through the places where human resources are exhausted and divine power is the only explanation for what follows. The basket is not Paul&rsquo;s lowest point; it is his truest credential, because it demonstrates that the ministry he carries is not sustained by his own strength but by the God who raises the dead (1:9). The glorying in weakness is not passive resignation; it is the active declaration that one&rsquo;s ministry is built on a foundation that cannot be shaken by failure, exposure, or ignominy because it does not depend on human impressiveness to begin with.",
                question: "What is the &lsquo;basket&rsquo; in your own story &mdash; the moment of apparent ignominy, failure, or weakness that you have been most reluctant to share? How might owning that moment, in the way Paul owns his, actually open up space for grace to be more clearly seen?",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 18, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ color: item.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: 12 }}>{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, marginBottom: 16 }}
                />
                <div style={{ background: `${item.color}0c`, border: `1px solid ${item.color}28`, borderRadius: 8, padding: "12px 16px" }}>
                  <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>Reflection Question</div>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.question }}
                    style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  />
                </div>
              </div>
            ))}

            {/* Key verse spotlight */}
            <div style={{ background: `${ROSE}0c`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: "28px", marginBottom: 20, textAlign: "center" }}>
              <div style={{ color: ROSE, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Key Verse to Memorize</div>
              <blockquote style={{ margin: 0 }}>
                <p
                  dangerouslySetInnerHTML={{ __html: "&ldquo;If I must boast, I will boast of the things that show my weakness.&rdquo;" }}
                  style={{ color: TEXT, fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.8, fontStyle: "italic", fontWeight: 500, marginBottom: 10 }}
                />
                <cite style={{ color: ROSE, fontSize: 13, fontWeight: 700 }}>2 Corinthians 11:30</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* Video Section -- always visible at bottom of all tabs */}
        <div style={{ marginTop: 40, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px" }}>
          <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.3rem", marginBottom: 6 }}>Video Teaching &mdash; 2 Corinthians 11</h2>
          <p
            dangerouslySetInnerHTML={{ __html: "Deepen your study with these video teachings on the Fool&rsquo;s Speech, Paul&rsquo;s theology of weakness, the problem of false apostles, and the sufficiency of grace in authentic ministry." }}
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}
          />
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videoItems.map((item) => (
              <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
