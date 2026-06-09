"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "imago", label: "Image of God" },
  { id: "ot", label: "Women in the OT" },
  { id: "jesus", label: "Jesus & Women" },
  { id: "earlychurch", label: "Early Church" },
  { id: "debate", label: "The Debate" },
  { id: "history", label: "Church History" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const OT_WOMEN = [
  {
    name: "Deborah",
    ref: "Judges 4–5",
    color: GOLD,
    body: "A prophet and judge of Israel who led the nation and delivered it from Canaanite oppression. She summoned Barak and commanded him to lead the army. When he refused to go without her, she agreed — but declared that the honor of killing Sisera would go to a woman. Deborah is remarkable in the OT: a woman exercising judicial, prophetic, and military leadership over all of Israel. She is not presented apologetically — her leadership is simply the narrative reality, and her song of victory (Judges 5) is among the oldest poetry in the Hebrew Bible.",
  },
  {
    name: "Ruth",
    ref: "Book of Ruth",
    color: GREEN,
    body: "A Moabite woman whose loyalty to her mother-in-law Naomi became the occasion for her redemption by Boaz — and her inclusion in the lineage of David and ultimately Jesus. Ruth is a model of hesed (covenant faithfulness): \'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God\' (1:16). The book centers on her initiative, courage, and faithfulness. She is listed in Matthew\'s genealogy of Jesus — a Gentile woman in the line of the Messiah.",
  },
  {
    name: "Esther",
    ref: "Book of Esther",
    color: TEAL,
    body: "A Jewish woman who becomes queen of Persia and risks her life to save her people. When her cousin Mordecai warns her that silence is not safety — \'who knows whether you have not come to the kingdom for such a time as this?\' (4:14) — she acts. \'If I perish, I perish.\' Esther navigates a deeply patriarchal imperial court with extraordinary wisdom and courage. The book of Esther does not mention God — yet his providential care for his people through this woman is the story\'s entire point.",
  },
  {
    name: "The Proverbs 31 Woman",
    ref: "Proverbs 31:10–31",
    color: PURPLE,
    body: "A poem of praise for a woman of valor (eshet chayil). She is a businesswoman, farmer, textile manufacturer, community benefactor, teacher of wisdom, and keeper of her household. \'She is clothed with strength and dignity; she can laugh at the days to come.\' The passage is not a checklist for women to achieve but a poem of celebration for the multifaceted competence and dignity of women. Notably: \'Give her the reward she has earned, and let her works bring her praise at the city gate.\' Her value is recognized publicly.",
  },
];

const JESUS_ITEMS = [
  {
    title: "Jesus\' Countercultural Treatment of Women",
    color: GOLD,
    body: "In first-century Jewish and Roman culture, women had limited legal standing and were generally excluded from public religious life. Jesus repeatedly broke with this convention. He spoke publicly with the Samaritan woman (John 4) — crossing both ethnic and gender boundaries. He defended the woman caught in adultery (John 8). He praised Mary for choosing to sit at his feet as a disciple (Luke 10:38–42) — a posture reserved for male students of Torah. He healed women, restored them to community, and treated their testimony as valid. His treatment of women was one of the most countercultural aspects of his ministry.",
  },
  {
    title: "Women as Disciples",
    color: GREEN,
    body: "Luke 8:1–3 records that Jesus traveled with a group that included \'the Twelve and also some women who had been cured of evil spirits and diseases: Mary (called Magdalene)... Joanna... Susanna; and many others.\' These women \'were helping to support them out of their own means.\' They were traveling disciples — not merely spectators. They were present at the crucifixion when the male disciples had fled (Matt 27:55–56; Mark 15:40–41). They were the first witnesses of the resurrection (Luke 24:1–11; John 20:1–18). In a culture where women\'s testimony was not legally valid, the risen Christ chose women as the first witnesses.",
  },
  {
    title: "Mary Magdalene — Apostle to the Apostles",
    color: TEAL,
    body: "Mary Magdalene is the most prominent woman in the Gospel narratives. Jesus cast seven demons from her (Mark 16:9; Luke 8:2). She was present at the cross, at the burial, and was the first to see the risen Christ (John 20:1–18). Jesus appears to her first and sends her to \'go and tell\' the disciples — making her the first Easter messenger. The early church father Hippolytus (c. 200 AD) called her \'apostle to the apostles\' (apostola apostolorum). The popular notion that Mary Magdalene was a prostitute has no biblical basis — it was a conflation of several women in medieval tradition, corrected by Pope Gregory in 1978.",
  },
  {
    title: "The Anointing Women",
    color: PURPLE,
    body: "A woman (unnamed in Matthew and Mark, identified as Mary of Bethany in John 12) anoints Jesus with expensive perfume before his burial. When disciples object to the \'waste,\' Jesus defends her: \'She has done a beautiful thing to me... Truly I tell you, wherever this gospel is preached throughout the world, what she has done will also be told, in memory of her\' (Matt 26:13). Jesus gives this unnamed woman an eternal memorial. Similarly, the sinful woman who wept at his feet (Luke 7:36–50) receives Jesus\' public defense and the assurance of forgiveness. Women\'s devotion to Jesus is consistently honored in the Gospels.",
  },
];

const EARLYCHURCH_ITEMS = [
  {
    id: "ec1",
    title: "Pentecost — \'Your Daughters Will Prophesy\'",
    content: "Peter\'s Pentecost sermon cites Joel 2:28–29: \'In the last days, God says, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your young men will see visions, your old men will dream dreams. Even on my servants, both men and women, I will pour out my Spirit in those days, and they will prophesy.\' Pentecost marks the dawn of the age of the Spirit — in which the gift of prophecy is not restricted by gender. This is the foundational text for Spirit-gifted ministry regardless of sex.",
  },
  {
    id: "ec2",
    title: "Priscilla — Teacher and Church Planter",
    content: "Priscilla (consistently named first by Paul — indicating prominence) and her husband Aquila were co-workers with Paul (Acts 18:2–3; Rom 16:3). They traveled with him, risked their lives for him (Rom 16:4), and hosted a church in their home (1 Cor 16:19). Significantly, Acts 18:26 records that Priscilla (and Aquila) \'explained to him the way of God more adequately\' when Apollos (an eloquent preacher) had an incomplete understanding. A woman correcting and instructing a male preacher — recorded without apology in the NT.",
  },
  {
    id: "ec3",
    title: "Phoebe — Deacon and Patron",
    content: "Paul commends Phoebe in Romans 16:1–2: \'I commend to you our sister Phoebe, a deacon of the church in Cenchreae.\' The word used is diakonos — the same word used for male deacons (Phil 1:1; 1 Tim 3:8–13). She is also called a \'prostatis\' — patron, protector, leader — of many, including Paul. Phoebe is generally believed to have been the courier who delivered the letter to the Romans — which means she likely explained and interpreted it to the Roman church. Entrusting the most theologically significant letter ever written to a woman\'s care and interpretation is itself significant.",
  },
  {
    id: "ec4",
    title: "Junia — Apostle",
    content: "Romans 16:7: \'Greet Andronicus and Junia, my fellow Jews who have been in prison with me. They are outstanding among the apostles, and they were in Christ before I was.\' Junia is a woman\'s name (Greek: Iounia); the masculine \'Junias\' does not appear in ancient literature. Until the 13th century, all commentators took her to be a woman. John Chrysostom (4th c.): \'To be an apostle at all is a great thing. But to be among those preeminent in the rank of apostles! Consider how great the praise is.\' She predates Paul\'s conversion and was outstanding among the apostles.",
  },
];

const DEBATE_ITEMS = [
  {
    id: "deb1",
    title: "Complementarianism",
    content: "Complementarians hold that men and women are equal in dignity and worth before God but are called to different, complementary roles — particularly in marriage and church leadership. Men are called to servant-leadership (headship) in the home (Eph 5:22–33) and the eldership/pastoral role in the church is restricted to qualified men (1 Tim 2:11–14; 3:1–7; Tit 1:5–9). This is not based on hierarchy of worth but on design and calling. Key scholars: Wayne Grudem, John Piper (CBMW — Council on Biblical Manhood and Womanhood). Galatians 3:28 (\'neither male nor female\') is about equal worth and access to salvation, not role differentiation.",
  },
  {
    id: "deb2",
    title: "Egalitarianism",
    content: "Egalitarians hold that there is no gender-based restriction on spiritual leadership. Men and women are equal in dignity, worth, and calling — including pastoral leadership. The restrictive texts (1 Cor 14:34–35; 1 Tim 2:11–14) are understood as addressing specific cultural situations in the early church (uneducated women disrupting worship; a particular problem in Ephesus) rather than universal norms. The trajectory of Scripture (creation equality → fall disruption → redemption restoration) and the ministry of women in the NT (Deborah, Mary Magdalene, Priscilla, Junia, Phoebe) point toward full inclusion. Key scholars: Gordon Fee, N.T. Wright, Scot McKnight (CBE — Christians for Biblical Equality).",
  },
  {
    id: "deb3",
    title: "Key Texts in the Debate",
    content: "1 Timothy 2:11–14: \'A woman should learn in quietness and full submission. I do not permit a woman to teach or to assume authority over a man.\' Complementarians: a universal principle. Egalitarians: specific to the Ephesian situation (1 Tim 1:3–7: false teaching in Ephesus). 1 Corinthians 14:34–35: some scholars believe these verses are a later addition (they appear in different locations in manuscripts); others see them as addressing a specific disruption. 1 Corinthians 11:5: women pray and prophesy in public worship (implying this was normal). The question is whether the restrictive texts are universal or contextual — both sides have serious scholarship.",
  },
  {
    id: "deb4",
    title: "Unity in the Body",
    content: "Both complementarian and egalitarian Christians are committed to the authority of Scripture and the equal dignity of women and men. The debate is about interpretation, not about whether women are valued. The church has historically held both views; denominations range across the spectrum. Practically: this debate should be held with charity and intellectual humility. Caricature of the opposing view is not honoring. Women have served God faithfully in every role across church history — from abbesses and mystics to preachers and missionaries. Whatever one\'s view of the specific debate, the church is impoverished when women are sidelined from using their gifts.",
  },
];

const HISTORY_WOMEN = [
  { name: "Mary of Egypt (344–421)", body: "A former prostitute who became one of the most revered desert saints. After a dramatic conversion at the Church of the Holy Sepulchre, she spent 47 years alone in the Jordanian desert in penitence and prayer. Her story, recorded by Sophronius, was widely read and profoundly influenced Eastern Christian spirituality." },
  { name: "Julian of Norwich (1342–c.1416)", body: "The first woman known to have written a book in English. Following near-death visions, she wrote \'Revelations of Divine Love,\' containing the famous insight: \'All shall be well, and all shall be well, and all manner of thing shall be well.\' Her theology of divine love was centuries ahead of its time." },
  { name: "Teresa of Ávila (1515–1582)", body: "A Spanish mystic and reformer of the Carmelite order. Her \'The Interior Castle\' is among the greatest works of Christian mysticism. She was declared a Doctor of the Church in 1970 — the first woman to receive this honor in the Catholic Church. She was a formidable administrator and theologian, not merely a contemplative." },
  { name: "Amy Carmichael (1867–1951)", body: "Irish missionary to India for 55 years (never taking a furlough). She rescued children from temple prostitution and founded the Dohnavur Fellowship. Her many books (\'Gold Cord,\' \'If,\' \'Rose from Brier\') continue to shape Christians facing suffering. She spent the last 20 years of her life bedridden but writing prolifically." },
  { name: "Joni Eareckson Tada (1949–present)", body: "Following a diving accident that left her a quadriplegic at 17, she became one of the most influential Christian voices on disability, suffering, and the sovereignty of God. Her ministry (Joni and Friends) has served millions with disabilities worldwide. Her theology of suffering is deeply biblical and profoundly pastoral." },
];

const VIDEOS = [
  { videoId: "hBEKdXYgJLM", title: "Women in the Bible — The Full Story" },
  { videoId: "jNmQMOjJUhU", title: "Complementarianism and Egalitarianism Explained" },
  { videoId: "yjlq8mrAVwg", title: "Women in Jesus\' Ministry" },
  { videoId: "Gfxk81ZbM2M", title: "Phoebe, Priscilla, Junia — Women Leaders in the NT" },
  { videoId: "EKi4Pq5RDMA", title: "1 Timothy 2 — What Does It Mean? Both Views" },
  { videoId: "N2K4kX0yjJY", title: "Women Mystics and the History of the Church" },
];

export default function WomenTheologyGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_women_tab", "overview");
  const [openDebate, setOpenDebate] = useLocalStorage("vine_women_deb", "");
  const [openEarly, setOpenEarly] = useLocalStorage("vine_women_ec", "");
  const [journal, setJournal] = useLocalStorage("vine_women_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Biblical Theology</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Women in Scripture &amp; Theology</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          The biblical story of women is richer, more complex, and more countercultural than is often recognized. From Deborah to Mary Magdalene, from Phoebe to Julian of Norwich, women have been central to God&apos;s redemptive purposes. This guide explores women in the OT, Jesus&apos; revolutionary treatment of women, women leaders in the early church, the complementarian/egalitarian debate, and women&apos;s contributions throughout church history.
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

        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Any reading of the Bible that sidelines women or treats them as peripheral has misread the text. Women are created equally in the image of God (Gen 1:27), appear throughout the narrative as leaders, prophets, judges, and disciples, are the first witnesses to the resurrection, and are commended in the NT as deacons, apostles, and church patrons.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                At the same time, Scripture also contains texts that have been interpreted as restricting women from certain roles — and Christians of equal commitment to Scripture disagree about how these texts should be read. This guide presents both views fairly, alongside the remarkable biblical evidence for women&apos;s full participation in God&apos;s purposes.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Women Named in Scripture</h3>
              <p style={{ color: MUTED, marginBottom: 12, lineHeight: 1.6 }}>Over 150 women are named in Scripture. Some prominent ones:</p>
              {["Eve — mother of all living, first woman", "Sarah — mother of the promise", "Miriam — prophet and worship leader at the Exodus", "Deborah — judge and prophet of Israel", "Ruth — model of faithfulness, ancestor of Jesus", "Esther — deliverer of her people", "Mary — mother of Jesus", "Mary Magdalene — first witness to the resurrection", "Priscilla — church planter and teacher", "Phoebe — deacon and patron", "Junia — apostle"].map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 6 }}>
                  <span style={{ color: GOLD, fontWeight: 700 }}>•</span>
                  <span style={{ color: MUTED }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "imago" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Image of God and Women</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Created Together in the Image of God", color: GOLD, body: "\'So God created mankind in his own image, in the image of God he created them; male and female he created them\' (Gen 1:27). The image of God is not given to the male and reflected in the female — both together bear the divine image. The distinctly gendered nature of humanity (male and female) is part of what it means to be made in God\'s image. Neither is more fully image-bearing than the other. Both receive the mandate to rule creation and multiply (1:28). The foundation of gender equality is not cultural progress — it is creation theology." },
                { title: "Equal in the Fall", color: GREEN, body: "Both Adam and Eve sinned and are held accountable. While \'the man\' is addressed first by God after the Fall (Gen 3:9 — consistent with the leadership principle), both receive consequences. The distortion of the man\'s rule over the woman (3:16: \'he will rule over you\') is a result of the Fall, not part of God\'s original design. Redemption in Christ aims at the restoration of creation\'s intention — which is why Galatians 3:28 (\'neither male nor female\') is understood by egalitarians as part of the new creation\'s reversal of fallen hierarchies." },
                { title: "Equal Before God and in Christ", color: TEAL, body: "Galatians 3:28: \'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.\' Paul\'s radical statement: the markers that defined social hierarchy in the ancient world do not determine status before God. Women are equally heirs of the grace of life (1 Pet 3:7), equally recipients of the Spirit (Acts 2:17–18), equally members of the body of Christ (1 Cor 12). The value of women is not derived from utility, beauty, or role — it is grounded in their creation in God\'s image and their redemption by Christ." },
                { title: "The Dignity of the Body", color: PURPLE, body: "Christian theology has consistently affirmed (against Gnosticism and certain ascetic traditions) that the body is good — created by God, redeemable, destined for resurrection. The incarnation and resurrection of Jesus in a physical body permanently dignifies human embodiment. Women\'s bodies — including reproductive functions that have often been treated with shame or contempt — are part of what God declared \'very good.\' The Song of Solomon celebrates the female body with beauty and reverence. The Christian doctrine of the body is the theological foundation for opposing both sexual exploitation and shame-based treatment of women." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ot" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Women in the Old Testament</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {OT_WOMEN.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 700, color: item.color }}>{item.name}</h3>
                    <span style={{ color: MUTED, fontSize: 12 }}>({item.ref})</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "jesus" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Jesus and Women</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {JESUS_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "earlychurch" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Women in the Early Church</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The NT presents women in significant leadership and ministry roles — often in ways that were culturally unexpected in the 1st century.</p>
            {EARLYCHURCH_ITEMS.map((item) => {
              const isOpen = openEarly === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenEarly(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "debate" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Complementarian / Egalitarian Debate</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>This is one of the most significant intra-evangelical debates of the last 50 years. Both sides affirm the authority of Scripture, the equal dignity of men and women, and the importance of women using their gifts. The disagreement is about whether certain leadership roles are restricted by gender.</p>
            {DEBATE_ITEMS.map((item) => {
              const isOpen = openDebate === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenDebate(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Women in Church History</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {HISTORY_WOMEN.map((w, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ fontWeight: 700, color: GOLD, marginBottom: 8 }}>{w.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Which woman in Scripture do you find most inspiring? How has your understanding of women in the Bible shaped your view of women in ministry?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
