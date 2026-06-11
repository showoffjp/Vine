"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "theology", label: "Theology of Children" },
  { id: "discipleship", label: "Home Discipleship" },
  { id: "discipline", label: "Discipline & Grace" },
  { id: "teens", label: "Teens & Young Adults" },
  { id: "culture", label: "Faith & Culture" },
  { id: "prodigal", label: "Prodigal Children" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_ITEMS = [
  {
    id: "th1",
    title: "Children as a Heritage from the Lord",
    content: "\'Children are a heritage from the Lord, offspring a reward from him\' (Ps 127:3). In the biblical worldview, children are not primarily a lifestyle choice or a burden — they are a gift, a sign of divine blessing, a continuation of the covenant people. Psalm 128 pictures the family table as a microcosm of shalom. The Shema (Deut 6:4–9) commands parents to teach the commands of God to their children \'when you sit at home and when you walk along the road, when you lie down and when you get up.\' Parenting is inherently theological.",
  },
  {
    id: "th2",
    title: "Children and the Covenant",
    content: "In covenant theology, the children of believers are included within the covenant community. Circumcision (OT) and baptism (for many traditions) are signs of covenant inclusion. Acts 2:39: \'The promise is for you and your children and for all who are far off — for all whom the Lord our God will call.\' This does not guarantee every covenant child will be saved — but it means they are raised within the sphere of God\'s promise, in the environment of Word and Spirit, with a unique spiritual advantage. The covenant is not magic but it is real.",
  },
  {
    id: "th3",
    title: "The Dignity of Childhood",
    content: "Jesus\' treatment of children was countercultural. In the ancient world, children had little social status. Jesus says \'let the children come to me\' (Matt 19:14) and warns against causing \'little ones\' to stumble (Matt 18:6). He uses a child as the paradigm for greatness in the kingdom: \'unless you change and become like little children, you will never enter the kingdom of heaven\' (18:3). Children are not pre-persons waiting to grow into real humans — they are image-bearers, beloved by God, and worthy of protection, nurture, and genuine relationship.",
  },
  {
    id: "th4",
    title: "The Goal of Christian Parenting",
    content: "The goal is not moralism — raising polite, well-behaved children who are inwardly unchanged. It is not performance — producing achievements to reflect well on the parents. The goal, as Paul expresses for the whole church, is that children might \'know him\' (Phil 3:10) and be \'conformed to the image of his Son\' (Rom 8:29). Tedd Tripp\'s Shepherding a Child\'s Heart frames it: the goal is the heart — the inner wellspring from which life flows. Children will do what their hearts desire; Christian parenting shapes and reorients the heart toward God.",
  },
];

const DISCIPLESHIP_STEPS = [
  {
    num: 1,
    title: "Make the Home a Place of Warmth, Not Fear",
    body: "The relational context is everything. Discipleship happens in homes where children feel safe, loved, and delighted in — not homes where they walk on eggshells. God himself is described as a Father who runs to meet his returning child (Luke 15:20). The affective environment — tone of voice, physical affection, genuine delight in who your child is — is the soil in which all spiritual formation grows.",
  },
  {
    num: 2,
    title: "Family Worship (Daily Rhythms)",
    body: "Family worship — Scripture reading, prayer, and singing together — is the ancient practice of the church. It need not be formal or long: 10–15 minutes of Bible reading (perhaps a devotional guide like \'Thoughts for Young Men\' or The Jesus Storybook Bible for young children), prayer together, and occasional singing. The goal is not to perform devotions but to normalize God\'s presence in the household. Children who see their parents genuinely seek God are far more likely to do the same.",
  },
  {
    num: 3,
    title: "Deuteronomy 6 Conversation Parenting",
    body: "\'When you sit at home, when you walk along the road, when you lie down, when you get up\' (Deut 6:7). Faith is woven into the ordinary moments — car rides, meals, bedtime, spontaneous conversations. This means parents must be present enough to have these moments. Ask: What did you thank God for today? What were you worried about? What do you think Jesus would have done in that situation? Make faith a regular topic of conversation, not a Sunday-only event.",
  },
  {
    num: 4,
    title: "Catechesis — Teaching the Faith",
    body: "Catechesis (from Greek katechein — to teach orally) is the systematic instruction of children in the content of the faith. Most Christian traditions have catechisms (Westminster Shorter, Luther\'s Small Catechism, New City Catechism). Even without a formal catechism, teach: Who is God? Who are we? What is sin? Who is Jesus? What is the gospel? What is the church? What happens when we die? Children can grasp more theological depth than we often assume — they need it accessible, not dumbed-down.",
  },
  {
    num: 5,
    title: "Church as Extended Family",
    body: "The local church is not merely a supplement to Christian parenting — it is co-parenting. Children need to see faith in multiple adults who love them and model discipleship. The grandparent figure, the youth worker, the small group community — all contribute to the formation of a child\'s faith identity. Statistically, one of the most significant predictors of faith retention in young adults is having meaningful relationships with adults at church beyond their own parents. Invest in community.",
  },
  {
    num: 6,
    title: "Service and Witness Together",
    body: "Faith that is only received but never given away rarely survives adolescence. Take children to serve at food banks, homeless shelters, nursing homes. Pray for missionaries together. Give generously as a family. Help a neighbor. Service forms a robust faith identity — children discover that following Jesus has a shape in the world, not just in private devotion. When children participate in mission, faith becomes an adventure rather than an obligation.",
  },
];

const DISCIPLINE_ITEMS = [
  {
    id: "disc1",
    title: "The Goal of Discipline: The Heart, Not Just Behavior",
    content: "The word \'discipline\' comes from the Latin disciplina — instruction, teaching, formation. Biblical discipline is not primarily punishment — it is formation. Prov 22:6: \'Train up a child in the way he should go.\' Prov 29:15: \'A rod and a reprimand impart wisdom.\' The goal is not compliance but wisdom — a child who understands why certain things are harmful and who has developed internal moral compass. When discipline is only behavioral modification, it produces either rebellion (external coercion without internal transformation) or Pharisaism (external conformity without love).",
  },
  {
    id: "disc2",
    title: "The Role of Consequences",
    content: "God designed the world so that choices have consequences — this is part of moral education. Parents who protect children from all consequences deprive them of a crucial teacher. Appropriate consequences (natural ones and deliberate parental ones) communicate: actions matter; choices shape outcomes; others are affected by what you do. The critical question is whether consequences are connected to behavior and consistent, or arbitrary and emotionally driven. Discipline in anger is rarely effective and can be genuinely harmful — Eph 6:4: \'Fathers, do not exasperate your children.\'",
  },
  {
    id: "disc3",
    title: "Grace in Discipline: Repentance and Restoration",
    content: "Christian discipline differs from mere behavior management in that it always holds out grace. After correction comes repentance and restoration — not prolonged shame. The parable of the Prodigal Son is the paradigm: the father runs to meet the repentant child, doesn\'t remind him of the failures, throws a party. Children who experience this pattern of discipline → repentance → restoration → joy learn the deepest truth of the gospel. Shame-based parenting (which piles on after confession) teaches that forgiveness must be earned. Grace-based parenting teaches that it is given.",
  },
  {
    id: "disc4",
    title: "Avoiding Both Harshness and Permissiveness",
    content: "Research (Diana Baumrind\'s parenting styles) identifies four patterns: Authoritarian (high control, low warmth), Permissive (low control, high warmth), Uninvolved (low both), and Authoritative (high control AND high warmth). The authoritative style — high expectations combined with genuine warmth, explanation, and relational security — consistently produces the best outcomes including higher self-esteem, better academic performance, and lower rates of anxiety and delinquency. This mirrors the biblical picture: God is both holy (high standards) and loving (infinite warmth). Parenting in his image means both.",
  },
];

const TEENS = [
  {
    title: "Understanding Adolescent Development",
    color: GOLD,
    body: "Adolescence (roughly 10–25 in neuroscience, because the prefrontal cortex isn\'t fully developed until the mid-twenties) is a season of identity formation, peer orientation, and risk-taking. The teenage brain is literally wired to take risks and seek peer approval — this is not pathology, it\'s developmental. Parents who understand this treat teens with more patience. The key task of adolescence is identity formation (\'Who am I?\'). Christian parenting in the teen years is about helping children form a stable identity as beloved children of God — so that identity doesn\'t rest on performance, appearance, or peer acceptance.",
  },
  {
    title: "The Art of Non-Anxious Presence",
    color: GREEN,
    body: "The biggest mistake with teenagers is reactivity — treating every question, rebellion, or crisis as a five-alarm emergency. Teenagers need parents who are not easily rattled. When a teen expresses doubt, curiosity about other worldviews, or moral struggle — a calm, curious response opens conversation; a panicked, defensive response closes it. \'I\'m glad you told me that\' is a more powerful response than a lecture. Parents who remain non-anxiously present through the turbulence of adolescence often find their children return to faith as young adults.",
  },
  {
    title: "Navigating Doubt and Deconstruction",
    color: TEAL,
    body: "It is normal for adolescents and young adults to question what they were taught. Research (Kinnaman\'s \'You Lost Me\') shows the most common reasons young people leave the church: felt overprotected, found the church shallow, perceived it as hostile to doubt, experienced a disconnect between church culture and real life. Healthy response to teen doubt: validate the questions (Job, the Psalms, Ecclesiastes all model honest doubt), provide resources (CS Lewis, Tim Keller, John Lennox), keep the relationship primary, distinguish between the church and Christ. Many deconstructors are not leaving Jesus — they are leaving church culture.",
  },
  {
    title: "Leaving Well: Launching Adult Children",
    color: PURPLE,
    body: "The goal of Christian parenting is to work itself out of a job — to raise children who are genuinely capable, autonomous adults who own their own faith. This means gradually releasing control throughout childhood and adolescence, so that by 18 the young adult has been making real decisions with real consequences for years. Helicopter parenting that overprotects through adolescence produces adults who cannot function. The mature parent lets go — prays, stays available, releases the outcome to God. Your children\'s faith is ultimately between them and God. You plant, you water, but God gives the growth (1 Cor 3:6).",
  },
];

const CULTURE_STEPS = [
  {
    num: 1,
    title: "Technology: Forming Intentional Habits",
    body: "Smartphones are the single biggest challenge in contemporary parenting — backed by massive research showing correlation with anxiety, depression, and attention disorders in teens, especially girls (Jonathan Haidt\'s \'The Anxious Generation\'). Practical wisdom: no smartphones before high school (basic phone for safety); no social media before 16; no phones in bedrooms; phone-free meals; charge devices outside bedrooms overnight. Frame these not as punishments but as the household\'s commitment to full presence and mental health.",
  },
  {
    num: 2,
    title: "Media: Engaging Rather Than Banning",
    body: "Pure media bans are rarely sustainable and often backfire — children go elsewhere for what is banned at home. Better: watch, play, and listen together. Ask questions: What did that show value? What do you think about how that character handled that? Is that true about how the world works? Media literacy is a crucial 21st-century faith skill. Children who are taught to engage culture critically rather than simply absorb or reject it are far better equipped for adult faith in a pluralistic world.",
  },
  {
    num: 3,
    title: "School: Faithfulness in Every Context",
    body: "Whether children attend public school, private Christian school, or are homeschooled — the goal is the same: to be faithful witnesses in whatever context they are in. Public school children are missionaries in their schools; they need to be equipped for that, not shielded from it. Christian school children still face a fallen world and need real engagement with it. Homeschool children need genuine community and the ability to navigate difference. Form children for the context they\'re in rather than the context you\'d prefer.",
  },
  {
    num: 4,
    title: "Sexuality and Identity",
    body: "Children will encounter questions about sexuality and gender identity — from peers, media, and their own experience. Christian parents need to be the primary voice in this conversation before culture fills the vacuum. Communicate clearly and early: God created humanity male and female, sexuality is a good gift for marriage, every person is worthy of dignity and love regardless of their struggle. Create a home where children can bring their questions and struggles without fear of rejection. Shame-based responses drive children into hiding; grace-based homes create safety for honest conversation.",
  },
  {
    num: 5,
    title: "Politics and Justice",
    body: "Christian children need to understand that the kingdom of God is not aligned with any political party. Teach them to evaluate policies by kingdom values (justice, mercy, humility — Mic 6:8) rather than partisan loyalty. Teach them that Christians of genuine faith land in different places politically. Model charitable engagement with those who disagree. Give them the categories to critique their own political tribe as well as others. Political tribalism is one of the greatest threats to a robust, independent Christian faith in young adults today.",
  },
];

const PRODIGAL = [
  {
    title: "When Your Child Walks Away",
    color: GOLD,
    body: "Some children raised faithfully walk away from the faith. This is among the most painful experiences a Christian parent can face. The temptation is toward self-blame (\'What did I do wrong?\'), fear, or control. But children are not machines — they are image-bearers with genuine freedom. The Prodigal Son\'s father did not run after him or chain him to the house. He let him go, waited, watched, and ran to meet him when he returned. Your job is to be the father on the porch — praying, present, ready — not the father who chased the son into the far country.",
  },
  {
    title: "What to Do and What Not to Do",
    color: GREEN,
    body: "Do: pray consistently and fervently; keep the relational door open; express love without conditions; maintain your own faith vigorously; seek support from others who understand. Don\'t: make every interaction a theological debate; withdraw love or relationship as a means of pressure; catastrophize; give up; pretend it isn\'t painful. The Prodigal\'s father had not stopped loving his son or waiting for him. The relationship survived the rebellion because the father had not torched it. Maintain the relationship — it is the bridge your child may one day walk back across.",
  },
  {
    title: "Trusting God with Your Children",
    color: TEAL,
    body: "Christian parenting requires the ultimate act of faith: releasing your children to God. You can plant, water, model, teach, pray, and love — but you cannot regenerate. Only God can. Hannah consecrated Samuel to God at birth. Abraham was willing to surrender Isaac. Mary watched her Son die. Christian parents are ultimately called to hold their children with open hands — loving fiercely while releasing the outcome to the one who loved them before you did. \'For I know the plans I have for you,\' says the Lord (Jer 29:11). He has plans for your children too.",
  },
  {
    title: "The Long Game: God\'s Faithfulness Across Generations",
    color: PURPLE,
    body: "Christian history is full of testimonies of prodigals who returned — sometimes after decades. Augustine\'s mother Monica prayed for him for 32 years before his conversion. John Newton, the slave trader turned hymn writer, was raised by a praying mother who died when he was seven — her prayers outlasted her life. The Psalms sing of God\'s faithfulness to the thousandth generation (Deut 7:9). The parent who faithfully plants seeds may not see the harvest in their lifetime. But the God who began a good work is faithful to complete it.",
  },
];

const VIDEOS = [
  { videoId: "BvCHU-UQ6jM", title: "Shepherding a Child's Heart — Summary" },
  { videoId: "6CZm3fAv8IE", title: "Gospel-Centered Parenting — Paul Tripp" },
  { videoId: "6_fAGD8VkNM", title: "Christian Parenting in a Digital Age" },
  { videoId: "aZHn0bKzGJI", title: "Parenting Teenagers with Grace" },
  { videoId: "K2iFYvfLVqY", title: "When Your Child Walks Away From Faith" },
  { videoId: "MBnWzJiGEOw", title: "Family Worship — How to Start" },
];

export default function ChristianParentingGuide() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_parent_tab", "overview");
  const [openTheol, setOpenTheol] = usePersistedState<string>("vine_parent_theol", "");
  const [openDisc, setOpenDisc] = usePersistedState<string>("vine_parent_disc", "");
  const [journal, setJournal] = usePersistedState<string>("vine_parent_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Christian Living</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Christian Parenting</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Raising children in the faith is one of the most important and most difficult callings God gives. This guide covers a biblical theology of children and covenant, home discipleship practices, discipline and grace, shepherding teenagers, navigating technology and culture, and what to do when a child walks away from the faith.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction</h2>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${GOLD}`, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;The most important thing you can do for your children is to love God with all your heart, soul, mind, and strength — and let them watch you do it.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13 }}>— Deuteronomy 6:5 (lived out)</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Christian parenting is not a technique — it is a vocation. The same God who called you to faith calls you to pass that faith on. Deuteronomy 6 is the foundational text: the commands of God are to be impressed on children&apos;s hearts, talked about in every ordinary moment of the day. This is not religious instruction added onto a secular life — it is faith woven into the fabric of everything.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                No method guarantees outcome. Children are not clay to be molded but image-bearers with their own wills. What parenting does is create an environment — relational, spiritual, formational — in which the Holy Spirit can work. Our job is faithfulness; outcomes belong to God.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Key Resources</h3>
              {[
                "Shepherding a Child's Heart — Tedd Tripp",
                "Gospel-Centered Parenting — Tim Chester",
                "The Tech-Wise Family — Andy Crouch",
                "The Anxious Generation — Jonathan Haidt",
                "Give Them Grace — Elyse Fitzpatrick",
                "You Lost Me — David Kinnaman (on retaining young adults)",
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700 }}>•</span>
                  <span style={{ color: MUTED }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THEOLOGY */}
        {activeTab === "theology" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>A Biblical Theology of Children</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>What does the Bible say about who children are, what they need, and what Christian parenting is ultimately for?</p>
            {THEOLOGY_ITEMS.map((item) => {
              const isOpen = openTheol === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenTheol(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DISCIPLESHIP */}
        {activeTab === "discipleship" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Home Discipleship</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Discipleship happens primarily in the home, not the church. The church supports and equips — but parents are the primary disciplers. Here are six practices that form faithful children.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {DISCIPLESHIP_STEPS.map((s) => (
                <div key={s.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: GREEN, color: "#fff", fontWeight: 700, minWidth: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.num}</span>
                    <div>
                      <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DISCIPLINE */}
        {activeTab === "discipline" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Discipline &amp; Grace</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Biblical discipline is formative, not punitive. Its goal is wisdom and a transformed heart — not just compliant behavior. And it is always wrapped in grace.</p>
            {DISCIPLINE_ITEMS.map((item) => {
              const isOpen = openDisc === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenDisc(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TEENS */}
        {activeTab === "teens" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Teens &amp; Young Adults</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {TEENS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CULTURE */}
        {activeTab === "culture" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Faith &amp; Culture</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Raising children in the 21st century means navigating technology, media, education, sexuality, and politics. Here are five areas requiring intentional Christian engagement.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {CULTURE_STEPS.map((s) => (
                <div key={s.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: TEAL, color: "#fff", fontWeight: 700, minWidth: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.num}</span>
                    <div>
                      <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODIGAL */}
        {activeTab === "prodigal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Prodigal Children</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {PRODIGAL.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Parenting Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Use this space to reflect on your parenting journey, record prayers for your children, and think through areas where you want to grow.</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <VideoEmbed key={i} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
