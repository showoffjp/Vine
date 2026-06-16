"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "vF4BoE8v9yE", title: "3 John - Gaius, Diotrephes, and Demetrius" },
  { videoId: "Xzp7GHT8E8k", title: "3 John Overview - Hospitality and Authority" },
  { videoId: "nXgFAp2Iqok", title: "Letters of John - Context and Background" },
  { videoId: "5Qm8QBjAJMM", title: "Leadership and Humility in 3 John" },
];

const VERSE_SECTIONS = [
  {
    id: "vj1",
    ref: "3 John 1-4",
    title: "John's Joy Over Gaius Walking in Truth",
    color: GOLD,
    content:
      "Third John opens with the warmest of the Johannine letter-openings: &lsquo;The elder to the beloved Gaius, whom I love in truth&rsquo; (v.1). The repetition of &lsquo;beloved&rsquo; (agapetos) is characteristic of John&rsquo;s letters, but here it has special warmth: Gaius is not just a member of John&rsquo;s network but a person whom the aged apostle genuinely treasures. The phrase &lsquo;whom I love in truth&rsquo; (hon ego agapo en aletheia) echoes 2 John 1, grounding the love in the shared truth about Jesus rather than mere personal affection. John&rsquo;s prayer for Gaius in verse 2 is striking: &lsquo;Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.&rsquo; The Greek proseukhomenos is a genuine prayer report &mdash; John actually prays for Gaius. The hope for physical health (hygiainein) matched to spiritual flourishing (kathos euodoutai sou he psykhe) is a holistic picture of human wellbeing rare in ancient letters but consistent with John&rsquo;s incarnational theology: the God who came in the flesh cares about bodies as well as souls. Verse 3 discloses what has prompted the letter: &lsquo;some brothers came and testified to your truth.&rsquo; In the itinerant teacher network of the early church, travelers returning to John brought news of the communities they had visited. What they reported about Gaius filled John with joy: he was walking in the truth. Verse 4 contains one of the most beautiful statements in the Johannine letters: &lsquo;I have no greater joy than to hear that my children are walking in the truth.&rsquo; The Greek ouden meizona touton echo kharin (I have no greater grace/joy than these things) captures the pastoral heart of an old man whose greatest delight is the faithfulness of those he has brought to faith. This verse is the emotional foundation of the whole letter.",
  },
  {
    id: "vj2",
    ref: "3 John 5-8",
    title: "The Call to Support Traveling Missionaries",
    color: GREEN,
    content:
      "John now commends Gaius for something specific: his support of itinerant missionaries. &lsquo;Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are&rsquo; (v.5). The Greek pistos poieis (you do faithfully, you act with faith) is a strong commendation &mdash; Gaius&rsquo;s hospitality is not mere social generosity but an expression of faithful discipleship. What makes it particularly impressive is that the brothers were &lsquo;strangers&rsquo; (xenoi) &mdash; people Gaius did not know personally, traveling under the recommendation of John&rsquo;s network. Verses 6-7 describe how these missionaries have testified to Gaius&rsquo;s love &lsquo;before the church&rsquo; &mdash; they brought reports back to John&rsquo;s community of the reception they received. John then urges Gaius to &lsquo;send them on their journey in a manner worthy of God.&rsquo; The Greek axioos tou theou (worthily of God) sets the standard: not merely adequate provision but the kind of generous support that reflects the character of the God in whose service they travel. The reason they need this support is stated in verse 7: &lsquo;they have gone out for the sake of the name, accepting nothing from the Gentiles.&rsquo; These missionaries refused financial support from non-Christians &mdash; a principled stance that protected both their integrity and the reputation of the gospel, but that also left them entirely dependent on the support of the churches. Verse 8 makes the ecclesial logic explicit: &lsquo;we ought to support people like these, that we may be fellow workers for the truth.&rsquo; The Greek synergoi (co-workers, fellow workers) is striking &mdash; the person who supports the missionary becomes, in John&rsquo;s understanding, a co-worker in the missionary enterprise itself. Gaius&rsquo;s hospitality is not merely charity; it is mission participation.",
  },
  {
    id: "vj3",
    ref: "3 John 9-10",
    title: "Diotrephes: The One Who Loves Preeminence",
    color: ROSE,
    content:
      "The tone shifts sharply at verse 9: &lsquo;I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority.&rsquo; Diotrephes is one of the most vividly drawn negative portraits in the NT epistles. John&rsquo;s characterization cuts to the root: the Greek philoproteuo (likes to put himself first, loves to have preeminence or first place) names the disorder precisely. Diotrephes is not primarily a theological problem; he is a character problem. He loves to be first. Everything else that follows &mdash; the gossip, the refusal to receive John&rsquo;s delegates, the expulsion of those who welcome them &mdash; flows from this original disorder of pride. The contrast with Jesus could not be sharper. Jesus, who was first in everything (Col.1:18, the same word prototokos), took the position of the servant and washed feet. Diotrephes, who is nobody of particular theological standing, insists on preeminence in everything. The reference to &lsquo;something I have written to the church&rsquo; (v.9) suggests a previous letter that Diotrephes suppressed or ignored &mdash; evidence that this situation has been ongoing and that John&rsquo;s authority has been progressively undermined. Verse 10 is remarkable for its specificity: Diotrephes is &lsquo;talking wicked nonsense about us&rsquo; (phlyaron hemas logois ponerois), refusing to welcome the brothers, actively stopping others who want to welcome them, and putting those people out of the church. The pattern is complete: control of information (gossip), control of access (refusing the brothers), control of the congregation (expelling the hospitable). Diotrephes has turned the local church into a personal fiefdom.",
  },
  {
    id: "vj4",
    ref: "3 John 11-12",
    title: "Demetrius Commended: The Test of Character",
    color: TEAL,
    content:
      "John responds to the Diotrephes problem not by launching a counter-attack but by setting before Gaius the positive model: &lsquo;Beloved, do not imitate evil but imitate good&rsquo; (v.11). The Greek mimeomai (imitate) is significant: John is not simply telling Gaius to make a different choice; he is calling him to the deeper work of character formation, of becoming the kind of person who does good as a matter of who they are. The positive example is one that Gaius presumably knows: &lsquo;Whoever does good is from God; whoever does evil has not seen God.&rsquo; This is the Johannine diagnostic, the same test applied in 1 John: character reveals relationship with God. A person who consistently does good is from God; a person who consistently does evil has not genuinely encountered God. This is not a works-righteousness claim but an observation about the fruit of genuine transformation. Then John introduces a third character, Demetrius, almost as a counterpoint to Diotrephes: &lsquo;Demetrius has received a good testimony from everyone, and from the truth itself.&rsquo; The triple testimony &mdash; from everyone, from the truth itself, and from John and his associates &mdash; is a powerful endorsement. Demetrius may be the bearer of this letter, and John&rsquo;s commendation serves as a letter of introduction. The phrase &lsquo;from the truth itself&rsquo; (hypo autes tes aletheias) is striking: Demetrius&rsquo;s life is so conformed to the truth that the truth itself, as it were, vouches for him. His character has become transparent to the gospel he serves.",
  },
  {
    id: "vj5",
    ref: "3 John 13-14",
    title: "Closing: Peace, Presence, and the Friends",
    color: PURPLE,
    content:
      "The closing of 3 John closely parallels 2 John 12: &lsquo;I had much to write to you, but I would rather not write with pen and ink. I hope to see you soon, and we will talk face to face.&rsquo; The Greek stoma pros stoma (mouth to mouth, face to face) repeats the longing of 2 John: letter-writing, for all its value, is a substitute for presence, and presence is what makes the fellowship complete. The fact that John says almost exactly the same thing in both letters suggests it is not a formula but a genuine expression of apostolic pastoral longing &mdash; the old man genuinely wants to be with his people. The final verse offers a benediction and a greeting: &lsquo;Peace be to you. The friends greet you. Greet the friends, each by name.&rsquo; The word &lsquo;friends&rsquo; (philoi) is unexpected &mdash; nowhere else in the NT epistles does a letter close with greetings to &lsquo;the friends.&rsquo; It recalls Jesus&rsquo; word in John 15:15: &lsquo;I no longer call you servants but friends.&rsquo; John&rsquo;s network is a network of friends in the deepest Johannine sense &mdash; people who know the Lord and know one another, who share the truth and the love that flows from it, and who greet one another &lsquo;each by name.&rsquo; The personal specificity of that final phrase &mdash; each by name &mdash; is a small but beautiful image of the kind of community John envisions: not an anonymous mass but a gathering of known persons, each one beloved.",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Joy Over Faithfulness: What Delights a Pastoral Heart (vv.1-4)",
    body:
      "The emotional register of 3 John is set in the opening verses: &lsquo;I have no greater joy than to hear that my children are walking in the truth.&rsquo; For the aged apostle, no achievement, no institutional success, no doctrinal victory brings the same satisfaction as the news that people he has brought to faith are living faithfully. This is the pastoral heart in its purest form. The modern church tends to measure success by attendance, budget, and influence. John measures it by faithfulness &mdash; by whether the people he knows and loves are walking in the truth in their daily lives. The practical implication is searching: what gives you the greatest joy in your church involvement? The answer reveals a great deal about what you actually value. If the answer is &lsquo;my programs running well,&rsquo; something may be off. If the answer is &lsquo;people I love growing in their walk with God,&rsquo; you are in the neighborhood of John&rsquo;s pastoral vision.",
  },
  {
    color: GREEN,
    title: "Synergoi: The Theology of Mission Participation (vv.5-8)",
    body:
      "John calls those who support traveling missionaries &lsquo;fellow workers for the truth&rsquo; (synergoi te aletheia). The Greek word synergos (co-worker, fellow worker) is the same word Paul uses for his ministry colleagues (Romans 16:3, 9, 21; Philippians 4:3). By applying it to the person who provides hospitality and financial support, John is making a theological claim: mission participation is not limited to those who go. The person who funds the missionary, provides the home, and prays for the work is a genuine co-worker in that work. This theology of mission partnership has profound implications for how churches think about their relationship to missionaries and mission organizations. It is not merely a transaction (we give money, they do the work) but a partnership in which both parties are genuinely invested in the outcome. Gaius is as much a missionary as the travelers he supports; he has simply been assigned a different role in the same enterprise.",
  },
  {
    color: ROSE,
    title: "Philoproteuo: The Disorder That Wrecks Communities (vv.9-10)",
    body:
      "The single Greek word that unlocks the character of Diotrephes is philoproteuo: he loves to put himself first (from phileo, to love, and protos, first). This is not merely ambition or competitiveness &mdash; it is a disordered love, the love of preeminence for its own sake. The disorder is ancient. The disciples of Jesus argued about who would be greatest (Luke 22:24). James and John (the very author of these letters) asked for the seats of honor in the kingdom (Mark 10:37). The desire for preeminence is one of the most persistent forms of spiritual corruption in leadership. What makes Diotrephes so instructive is the way the disorder ramifies: from the love of preeminence flow gossip (protecting reputation), the rejection of apostolic authority (protecting control), the refusal to welcome the brothers (protecting turf), and the expulsion of the hospitable (protecting power). The whole destructive pattern grows from a single root: he loves to be first. The antidote is not mere behavior modification but the transformation of desire &mdash; learning to love the last place as readily as the first, as Jesus did.",
  },
  {
    color: TEAL,
    title: "Mimeomai: The Call to Imitate the Good (v.11)",
    body:
      "John&rsquo;s instruction to Gaius is not &lsquo;choose differently from Diotrephes&rsquo; but &lsquo;imitate the good&rsquo; (mimou to agathon). The Greek mimeomai (to imitate, to be a follower of) is the language of character formation, not mere behavior change. Paul uses similar language when he says &lsquo;be imitators of me as I am of Christ&rsquo; (1 Corinthians 11:1). The imitation is not the surface mimicry of behavior but the deep alignment of character that comes from beholding someone so attentively that you begin to become like them. For John, the ultimate model is not Demetrius (though he is a good example) but the truth itself: &lsquo;Demetrius has been testified to by the truth itself.&rsquo; To imitate the good is ultimately to orient oneself toward the God who is goodness, and to be changed by that encounter into a person whose life is transparent to the gospel.",
  },
  {
    color: PURPLE,
    title: "Marturia: The Three-Fold Testimony to Demetrius (v.12)",
    body:
      "The commendation of Demetrius in verse 12 employs the Johannine theme of marturia (testimony, witness): &lsquo;Demetrius has received a good testimony from everyone, and from the truth itself, and we also add our testimony.&rsquo; Three witnesses: the community, the truth, and the apostle. The three-fold testimony recalls John&rsquo;s Gospel (where testimony is a major structural theme, cf. John 5:31-47) and the Johannine epistles (1 John 5:7-8). The most remarkable testimony is the second: &lsquo;from the truth itself.&rsquo; This is not a standard credential but a theological one &mdash; Demetrius&rsquo;s life is so aligned with the truth that the truth commends him. His character has become consistent with the gospel. This is the opposite of Diotrephes, whose behavior contradicts any claim to be a servant of the truth. The question the verse poses to every leader and every member is: does the truth speak well of me? If my life were examined by the standard of the gospel I profess, what would the truth say?",
  },
];

export default function ThreeJohnGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [gaiusScores, setGaiusScores] = useState<number[]>([3, 3, 3, 3]);
  const [dioScores, setDioScores] = useState<number[]>([2, 2, 2, 2]);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const gaiusTraits = [
    "I welcome people into my home for the sake of ministry",
    "I support missionaries and traveling ministers financially",
    "I speak well of Christian workers to others",
    "I walk in faithfulness whether or not leadership notices",
  ];

  const dioTraits = [
    "I struggle to share credit or recognition with others",
    "I tend to control access to my community or resources",
    "I am quick to speak negatively about those who challenge my authority",
    "I am uncomfortable when others in my community receive more recognition than I do",
  ];

  const gaiusAvg = gaiusScores.reduce((a, b) => a + b, 0) / gaiusScores.length;
  const dioAvg = dioScores.reduce((a, b) => a + b, 0) / dioScores.length;

  function getSelfReflectionResult(): string {
    if (gaiusAvg >= 4 && dioAvg <= 2) return "Strong Gaius profile &mdash; keep walking in faithfulness and hospitality";
    if (gaiusAvg >= 4 && dioAvg >= 3) return "Generous and hospitable, but watch the Diotrephes tendencies &mdash; the desire for preeminence can creep in even in generous people";
    if (gaiusAvg <= 2 && dioAvg >= 3) return "The Diotrephes pattern is strong &mdash; this is the moment for honest prayer and accountability";
    if (gaiusAvg <= 2 && dioAvg <= 2) return "Low scores on both axes &mdash; consider what kind of community member you want to be and take a concrete step this week";
    return "A mixed picture &mdash; identify one Gaius quality to grow and one Diotrephes tendency to pray about";
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, border: `1px solid ${TEAL}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: TEAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            General Epistle &middot; 3 John
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            3 John: Gaius, Diotrephes, and the Test of Hospitality
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "The shortest book in the New Testament by word count in Greek &mdash; a personal letter from the elder to Gaius, a faithful member of John&rsquo;s network. In fourteen verses, three characters emerge whose contrasting portraits have spoken to the church ever since: Gaius, the faithful and hospitable; Diotrephes, who loves preeminence and has turned the local church into a personal fiefdom; and Demetrius, commended by everyone, by the truth itself, and by the apostle. The letter is a window into the tensions of early church governance, the theology of hospitality as mission participation, and the character disorders that wreck communities." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "3 John", color: TEAL },
              { label: "Verses", value: "14 (shortest by word count)", color: PURPLE },
              { label: "Author", value: "John the Elder/Apostle", color: GOLD },
              { label: "Key Word", value: "Faithfulness / Hospitality", color: GREEN },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                background: activeTab === t.id ? `${TEAL}22` : "transparent",
                color: activeTab === t.id ? TEAL : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Overview of 3 John</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Third John is the shortest book in the New Testament by word count in the original Greek, though it contains fourteen verses to 2 John&rsquo;s thirteen. It is the most personal of the three Johannine letters &mdash; addressed not to a congregation but to an individual, Gaius, described as &lsquo;beloved&rsquo; four times in fourteen verses. The letter arises from a specific and urgent pastoral situation: Diotrephes, a leader (or would-be leader) in a congregation in John&rsquo;s network, has rejected John&rsquo;s authority, spread malicious reports about the apostle, refused to welcome traveling missionaries, and expelled from the congregation any who tried to welcome them." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "John writes to Gaius to commend his faithfulness and hospitality, to address the Diotrephes problem, to commend Demetrius (probably the letter-bearer), and to express his hope for a personal visit. The letter gives us one of the clearest pictures in the NT of the tensions in early church governance &mdash; the collision between apostolic authority and a local leader who resists it &mdash; and the central role that hospitality played in sustaining the mission network of the early church." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Three characters define the letter&rsquo;s structure: Gaius (vv.1-8), who is faithful, hospitable, and walking in the truth; Diotrephes (vv.9-10), who loves preeminence and has weaponized his local influence against apostolic authority; and Demetrius (v.12), who is commended by universal testimony and by &lsquo;the truth itself.&rsquo; These three portraits constitute one of the most economical and penetrating studies of Christian character in all of scripture." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Structure of 3 John</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-4", label: "Greeting and Joy: John's Greatest Delight", color: GOLD },
                  { ref: "vv.5-8", label: "Gaius Commended: Faithful Support of Missionaries", color: GREEN },
                  { ref: "vv.9-10", label: "Diotrephes: The Disorder of Loving Preeminence", color: ROSE },
                  { ref: "v.11", label: "The Call to Imitate Good, Not Evil", color: PURPLE },
                  { ref: "v.12", label: "Demetrius: Commended by the Truth Itself", color: TEAL },
                  { ref: "vv.13-14", label: "Closing: The Hope of Face-to-Face Fellowship", color: MUTED },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 14px" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Greek Words in 3 John</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Philoproteuo", transliteration: "fil-oh-pro-TYOO-oh", meaning: "Loves to have preeminence / first place; the disordered love of being first that defines Diotrephes", verse: "v.9 &mdash; Diotrephes, who loves to put himself first, does not acknowledge our authority", color: ROSE },
                  { word: "Mimetes", transliteration: "mee-MAY-tace", meaning: "Imitator; the call to imitate what is good rather than what is evil", verse: "v.11 &mdash; do not imitate evil but imitate good (mimou to agathon)", color: GREEN },
                  { word: "Synergoi", transliteration: "syn-ER-goy", meaning: "Fellow workers, co-workers; the mission partnership that makes hospitality an act of mission participation", verse: "v.8 &mdash; that we may be fellow workers for the truth", color: TEAL },
                  { word: "Marturia", transliteration: "mar-too-REE-ah", meaning: "Testimony, witness; the three-fold witness that commends Demetrius: everyone, the truth itself, and John", verse: "v.12 &mdash; Demetrius has received a good testimony from the truth itself", color: GOLD },
                  { word: "Agapetos", transliteration: "ah-gah-pay-TOSS", meaning: "Beloved; John's term of deep affection for Gaius, repeated four times in fourteen verses", verse: "vv.1, 2, 5, 11 &mdash; the word frames the whole letter with love", color: PURPLE },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in 3 John</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five major themes organize the theology and ethics of 3 John. Each is rooted in a specific character, a specific Greek word, or a specific moment in the letter. Together they paint a portrait of what healthy and unhealthy church life looks like in practice." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Three Characters: One Letter</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The three named characters in 3 John are not merely historical figures; they are portraits of types of Christian character that have recurred throughout church history. Reading them as types is not to flatten their individuality but to receive the letter's pedagogical intent &mdash; John is showing us what faithfulness, disordered pride, and trustworthiness look like in practice:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "Gaius", description: "The faithful, hospitable, truth-walking ordinary believer. He is not a leader of note but a person of character &mdash; beloved, reliable, generous to strangers for the sake of the Name.", color: GOLD },
                  { name: "Diotrephes", description: "The leader corrupted by the love of preeminence. His gifts (organizational ability, local influence) have been twisted by disordered desire into instruments of control and harm.", color: ROSE },
                  { name: "Demetrius", description: "The traveling minister whose character has been confirmed by universal testimony, by the truth itself, and by apostolic endorsement. A trustworthy servant of the gospel.", color: TEAL },
                ].map(item => (
                  <div key={item.name} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{item.name}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: 3 John 1-14</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All fourteen verses of 3 John are grouped below by thematic unit. Each accordion section provides detailed commentary on the Greek text, the historical setting, and the theological significance of the passage. Click any section to expand." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["3 John 1:2", "3 John 1:3", "3 John 1:4", "3 John 1:5", "3 John 1:7", "3 John 1:8", "3 John 1:9", "3 John 1:11", "3 John 1:12"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: What It Means to Be a Gaius</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Third John presents one of the most practical ethical templates in the NT, because it is built around real people in a real situation rather than abstract principles. The question the letter poses to every reader is: which character am I most like, and which character do I want to become? Being a Gaius &mdash; faithful, hospitable, walking in the truth, generous to strangers for the sake of the Name &mdash; is not a spectacular calling. Gaius is not an apostle, a prophet, or a theologian. He is a person of ordinary station who does the unglamorous work of opening his home, supporting missionaries out of his own pocket, and walking in faithfulness whether or not anyone of importance is watching." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The Diotrephes question is equally searching: where does the love of preeminence operate in me? John does not present Diotrephes as a cartoon villain. He is a person with real organizational ability and genuine influence, who has allowed a disordered desire &mdash; the love of being first &mdash; to corrupt both his gifts and his relationships. The disorder John names in Diotrephes is a spiritual risk for any leader, any person of significant influence in a community. The antidote John prescribes is not self-deprecation but the imitation of the good." }}
              />
            </div>

            {[
              {
                color: GOLD,
                title: "Being a Gaius: Faithful in the Unglamorous Things",
                icon: "01",
                body: "Gaius is celebrated not for theological brilliance or leadership achievement but for walking in the truth (v.3) and extending hospitality to traveling missionaries (vv.5-6). Both of these are quiet, everyday acts of faithfulness. Walking in the truth is the daily discipline of letting the gospel shape ordinary life. Welcoming the brothers is the practical work of opening your home and your resources to people engaged in the Lord's work. Neither of these things is particularly impressive on a resume. They are not the kind of things that get you a speaking platform or a large social-media following. But they are the things that give John the greatest joy: faithfulness in the unglamorous details of discipleship. The question for every believer: what are the quiet, unrecognized acts of faithfulness in your life? Are you walking in the truth on Tuesdays as well as Sundays? Are you supporting the Lord's work with your home and your money, whether or not it brings you recognition?",
              },
              {
                color: GREEN,
                title: "Hospitality as Mission: The Theology of Synergoi",
                icon: "02",
                body: "John's description of Gaius and those like him as &lsquo;fellow workers for the truth&rsquo; (v.8) is one of the most theologically significant statements in 3 John. It means that the person who provides housing, meals, and financial support for missionaries is a genuine co-worker in the missionary enterprise &mdash; as truly invested in the outcome as the ones who go. This reframes the relationship between churches and missionaries from a transactional one (we give money, they do the work) to a partnership one (we are all workers in the same field, with different assignments). The practical implication: the missionary who goes to the unreached and the congregation member who prays, gives, and opens their home are equally synergoi te aletheia &mdash; fellow workers for the truth. How you support those in ministry is a form of mission participation, not merely philanthropy.",
              },
              {
                color: ROSE,
                title: "Recognizing the Diotrephes Spirit in Leadership",
                icon: "03",
                body: "The signs of the Diotrephes spirit in leadership are not subtle: (1) gossip about those who challenge one's authority &mdash; spreading negative reports to undermine credibility; (2) refusing to receive or platform those who are not in one&rsquo;s own network; (3) controlling who has access to the community; (4) punishing those who show hospitality to unauthorized outsiders. Each of these is a symptom of the same root disorder: the love of preeminence, the love of being first. The tragedy of Diotrephes is that these behaviors may feel, from the inside, like faithfulness &mdash; like protecting the flock, maintaining standards, guarding the community. But the actual motive is the protection of one&rsquo;s own position. The diagnostic question for leaders: when you make a decision to exclude, to control access, or to speak critically of someone &mdash; is the primary motive the welfare of the community, or the protection of your own standing?",
              },
              {
                color: TEAL,
                title: "The Commendation of the Truth Itself: Character That Speaks",
                icon: "04",
                body: "Demetrius receives the most unusual commendation in the NT: he has been testified to &lsquo;by the truth itself&rsquo; (v.12). This means his life has become so aligned with the gospel that the gospel speaks for him &mdash; his character is transparent to the truth he serves. This is the NT equivalent of the concept of integrity: the alignment between what you profess and who you are. The question John&rsquo;s commendation of Demetrius poses to every Christian: if the truth itself were to testify about me &mdash; if my life were placed alongside the gospel and compared &mdash; what would it say? The goal is not perfection but alignment: a life that is, by the grace of the Spirit, increasingly consistent with the Jesus it professes. The truth should be able to speak well of us.",
              },
              {
                color: PURPLE,
                title: "Accountability and Apostolic Authority",
                icon: "05",
                body: "The Diotrephes situation raises the question of authority in the church. John claims an authority that Diotrephes refuses to acknowledge. He intends to address this in person (v.10). The NT does not give us a single, uniform church governance model, but it does consistently affirm that leaders are accountable &mdash; to God, to the apostolic tradition, and to the community of faith. The Diotrephes pattern &mdash; local leader who rejects accountability to any authority beyond himself &mdash; is recognized throughout church history as a sign of a church in trouble. The health of a local church depends not just on the gifts of its leaders but on their willingness to be accountable: to Scripture, to the broader church, to trusted peers, and to the community they serve. A leader who cannot receive correction is a Diotrephes risk.",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Gaius vs Diotrephes Self-Reflection Tool */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 8px" }}>Gaius vs. Diotrephes: Self-Reflection Tool</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px" }}
                dangerouslySetInnerHTML={{ __html: "Rate yourself honestly on each trait (1 = rarely true of me, 5 = consistently true of me). This is not a score to be ashamed of but a mirror to help you see clearly." }}
              />

              <div style={{ marginBottom: 24 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Gaius Traits</div>
                {gaiusTraits.map((trait, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                    <div style={{ color: TEXT, fontSize: 14, marginBottom: 10 }}>{trait}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[1,2,3,4,5].map(n => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setGaiusScores(prev => { const next = [...prev]; next[i] = n; return next; })}
                          style={{ width: 36, height: 36, borderRadius: 8, border: `2px solid ${gaiusScores[i] === n ? GOLD : BORDER}`, background: gaiusScores[i] === n ? `${GOLD}33` : CARD, color: gaiusScores[i] === n ? GOLD : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Diotrephes Tendencies</div>
                {dioTraits.map((trait, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                    <div style={{ color: TEXT, fontSize: 14, marginBottom: 10 }}>{trait}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[1,2,3,4,5].map(n => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setDioScores(prev => { const next = [...prev]; next[i] = n; return next; })}
                          style={{ width: 36, height: 36, borderRadius: 8, border: `2px solid ${dioScores[i] === n ? ROSE : BORDER}`, background: dioScores[i] === n ? `${ROSE}33` : CARD, color: dioScores[i] === n ? ROSE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", borderLeft: `4px solid ${TEAL}` }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Your self-reflection result</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: getSelfReflectionResult() }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "John says his greatest joy is hearing that his children are walking in the truth (v.4). Who in your life gives you that kind of joy? Are you giving it to anyone?",
                  "Gaius is commended for welcoming &lsquo;strangers&rsquo; (xenoi) for the sake of the Name (v.5). Are there people serving the Lord&rsquo;s mission whom you could support, even without knowing them personally?",
                  "John calls those who support missionaries &lsquo;fellow workers for the truth&rsquo; (v.8). How does this reframe the way you think about giving to mission organizations or hosting Christian workers?",
                  "The Diotrephes spirit begins with philoproteuo &mdash; loving to be first. Where in your own life does the desire for preeminence or recognition operate? What practices of surrender or service might address it?",
                  "Demetrius is commended &lsquo;by the truth itself&rsquo; (v.12). If your life were placed alongside the gospel and compared, what would the truth say about you today?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${TEAL}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on 3 John.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
