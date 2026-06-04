"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "questions" | "figures" | "history" | "videos";

const THEOLOGY = [
  { title: "Created in the Image of God", verse: "Genesis 1:27", body: "The foundation of all Christian ethics for women (and men) is the imago dei: 'So God created mankind in his own image, in the image of God he created them; male and female he created them' (Genesis 1:27). Women bear the image of God completely and fully. Dignity, worth, and value are not derived from role or marital status — they are inherent in what God declared at creation." },
  { title: "Woman in Creation and Fall", verse: "Genesis 2-3", body: "The woman is created as 'ezer' — helper, ally, rescuer — a word used elsewhere in Scripture for God himself. This is not subordinate assistance but coequal partnership. In the fall, both the man and woman sin and are accountable — but the consequences are different (Genesis 3:16). The fall introduces hierarchy and pain into what was created as partnership; redemption in Christ works to restore the creation pattern." },
  { title: "The Women Around Jesus", verse: "Luke 8:1-3", body: "Women were among Jesus' closest disciples — traveling with him, supporting his ministry from their own resources (Luke 8:1-3). Jesus spoke to the Samaritan woman (scandalous for the time), appeared first to Mary Magdalene after the resurrection (choosing women as the first witnesses in a culture that did not accept women's testimony in court), and defended Mary's choice to sit at his feet (Luke 10). His treatment of women was consistently countercultural and dignifying." },
  { title: "Daughters of Abraham", verse: "Galatians 3:28", body: "'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus' (Galatians 3:28). This declaration of unity in Christ is often cited in debates about gender — and rightly so. It does not erase difference but declares equality of standing before God. In the New Covenant, women receive the Spirit directly (Acts 2:17), prophesy (Acts 21:9), teach, lead, and are addressed by Paul as full members of the body." },
  { title: "The Proverbs 31 Woman", verse: "Proverbs 31:10-31", body: "The famous passage is often used to prescribe a specific lifestyle for women. But its form (an alphabetic acrostic, a poem of praise) suggests it is wisdom poetry, not a checklist. The woman described is entrepreneurial (v.16, 18, 24), physically strong (v.17), publicly respected (v.31), wise and kind in speech (v.26), and caring for both household and the poor (v.20). She is not primarily defined by her role but by her character — 'a woman who fears the Lord is to be praised' (v.30)." },
];

const QUESTIONS = [
  { q: "Can women teach and lead in the church?", a: "This is one of the most contested questions in evangelical Christianity. The main interpretive passages are 1 Corinthians 14:34-35 and 1 Timothy 2:12. Complementarians restrict women from preaching and eldership based on these texts. Egalitarians argue these were situational instructions, not universal prohibitions, citing passages like Romans 16 (Phoebe as deacon/minister, Junia as an apostle), Acts 18:26 (Priscilla teaching Apollos), and the broader NT pattern of women in ministry. Both positions are held by orthodox, Scripture-committed Christians." },
  { q: "What is the biblical view of submission in marriage?", a: "Ephesians 5:22 instructs wives to submit to husbands 'as to the Lord' — but this follows the mutual submission command of 5:21 and is immediately qualified by the instruction to husbands to love their wives as Christ loved the church (5:25) — a self-sacrificial, servant love. The structure is not one-sided dominance but mutual self-giving in which the husband's headship is modeled on Christ's servant leadership. Abuse or domination is not taught or permitted by the biblical text." },
  { q: "Is celibacy an option for Christian women?", a: "Yes — and in some traditions, a particularly honored one. Paul explicitly states that singleness is a gift that allows undivided devotion to God (1 Corinthians 7:32-34). Women's callings are not limited to marriage and motherhood. Throughout history, women in religious orders, in mission, and in church leadership have served celibately with full faithfulness to their calling. The church should honor single women as it honors married ones." },
  { q: "How should the church respond to women who have experienced abuse?", a: "Abuse — including within marriage — is sin, not God's design. 'Submission' does not require a woman to remain in danger. The church's first responsibility to women in abusive situations is protection and care, not preservation of the marriage. Jesus' care for the vulnerable, his defense of those the system exploited, and the general command to protect the weak all speak to this. Seek qualified counsel and support organizations immediately when abuse is present." },
  { q: "What about women in ministry history?", a: "Women have led, taught, preached, and shaped the church throughout its history: Priscilla (1st century), Perpetua and Felicitas (martyrs, 203 AD), Julian of Norwich (theologian, 1300s), Teresa of Avila (mystic and reformer, 1500s), Susanna Wesley (shaped John Wesley's theology), Harriet Beecher Stowe (anti-slavery), Corrie ten Boom (Holocaust survivor and teacher), and countless others. The story of Christian women is not one of passive domesticity." },
];

const FIGURES = [
  { name: "Mary Magdalene", desc: "First witness to the resurrection. Jesus appeared to her first (John 20:11-18) and commissioned her to tell the disciples — making her the apostle to the apostles (apostola apostolorum) in early church tradition. In a culture that did not accept women's testimony, God chose a woman as the first witness to the central event of history.", ref: "John 20:11-18" },
  { name: "Deborah", desc: "Judge and prophet in Israel — one of the most powerful leaders in the Old Testament. She judged Israel (a legal and governmental role), heard from God, delivered Israel from Canaanite oppression, and composed and sang the victory song (Judges 5). Her leadership was not apologized for in the text.", ref: "Judges 4-5" },
  { name: "Esther", desc: "Used her position (as queen) and her courage (approaching the king unbidden risked death) to save the Jewish people from genocide. Her famous response to Mordecai: 'I will go to the king... and if I perish, I perish' (Esther 4:16) is a model of faithful courage under impossible pressure.", ref: "Esther 4-5" },
  { name: "Mary of Bethany", desc: "Chose the 'better part' — sitting at Jesus' feet as a student (the position of a disciple) rather than serving in the kitchen (Luke 10:38-42). Jesus defended her choice against her sister's complaint. She also anointed Jesus with expensive perfume before his death, which Jesus interpreted as preparation for his burial.", ref: "Luke 10:38-42; John 12:1-8" },
  { name: "Phoebe", desc: "Paul calls her a deacon (diakonos) of the church at Cenchreae and a prostatis (patron/helper/leader) — and asks the Roman church to receive her and help her in whatever she needs (Romans 16:1-2). She likely carried Paul's letter to Rome and may have been responsible for presenting and explaining it.", ref: "Romans 16:1-2" },
];

const HISTORY = [
  {
    id: "perpetua",
    name: "Perpetua of Carthage",
    era: "c. 181-203 AD",
    color: "#EF4444",
    desc: "Vibia Perpetua was a young noblewoman martyred in Carthage at age 22. Her prison diary — The Passion of Perpetua and Felicitas — is one of the earliest Christian documents written by a woman, and one of the earliest first-person accounts of Christian martyrdom. She was a nursing mother when arrested and had to leave her infant when taken to the arena. Her account is notable for its visionary content and her extraordinary composure before death. Her companion Felicitas was a slave who gave birth in prison and was then executed with Perpetua in the amphitheater.",
    significance: "The first-person witness of a woman martyr, written within days of her execution. Her account shaped the theology of martyrdom in the early church and demonstrated that the Spirit was poured out on women as well as men.",
  },
  {
    id: "julian",
    name: "Julian of Norwich",
    era: "c. 1342-1416",
    color: "#F59E0B",
    desc: "Julian was an English mystic and anchoress who received a series of 'showings' or visions during a severe illness in 1373. Her Revelations of Divine Love is the first surviving book written in English by a woman. Her theology centered on God's love: 'All shall be well, and all shall be well, and all manner of thing shall be well.' She developed distinctive language for the Trinity — God as Father and Mother — and insisted on God's absolute goodness and love even in the face of suffering and sin.",
    significance: "The most sophisticated English theological writer of the medieval period. Her insistence on divine love as the framework for understanding all of reality — including sin and suffering — has influenced Christian thought across traditions.",
  },
  {
    id: "teresa",
    name: "Teresa of Avila",
    era: "1515-1582",
    color: PURPLE,
    desc: "Teresa was a Spanish Carmelite nun who reformed her order, founded 17 monasteries, and produced some of the greatest Christian writings on contemplative prayer, including The Interior Castle and The Way of Perfection. She did all this while battling serious illness, constant ecclesiastical resistance to a woman's authority, and the scrutiny of the Inquisition. She collaborated with John of the Cross to reform the Carmelite order. In 1970, she became the first woman to be declared a Doctor of the Church by the Catholic Church.",
    significance: "The most influential woman in the history of Western Christian mysticism. Her map of the interior life — the soul as a castle with seven dwelling places, moving toward union with God — remains the most detailed guide to contemplative prayer in Christian history.",
  },
  {
    id: "susanna",
    name: "Susanna Wesley",
    era: "1669-1742",
    color: "#3B82F6",
    desc: "Susanna Wesley was the mother of John and Charles Wesley — founders of the Methodist movement that transformed English and American Christianity. She had 19 children (9 survived to adulthood) and educated them all at home with a structured curriculum. She also led home gatherings of up to 200 people during her husband's illness — an act of extraordinary ministry for an 18th-century woman. Her theological correspondence with John Wesley shaped his theology, particularly on assurance of salvation.",
    significance: "Often called 'the mother of Methodism,' Susanna's intellectual and spiritual formation of her children — especially John Wesley — shaped one of the most significant Christian movements of the 18th-19th centuries.",
  },
  {
    id: "sayers",
    name: "Dorothy L. Sayers",
    era: "1893-1957",
    color: GREEN,
    desc: "Sayers was one of the first women to receive a degree from Oxford, a celebrated crime novelist (the Lord Peter Wimsey series), and a brilliant Christian apologist and theologian. Her essay 'The Mind of the Maker' develops a Trinitarian theology of human creativity. Her plays on the life of Christ (The Man Born to Be King) made the BBC's first dramatic presentation of Jesus. Her translation of Dante's Divine Comedy remains widely used. Her essay 'Are Women Human?' is an early feminist argument grounded in Christian anthropology.",
    significance: "One of the most intellectually formidable Christian thinkers of the 20th century. Her integration of theology, literature, and creative work remains a model for Christian engagement with culture.",
  },
  {
    id: "carmichael",
    name: "Amy Carmichael",
    era: "1867-1951",
    color: "#EC4899",
    desc: "Amy Carmichael was an Irish missionary to India who spent 55 years in southern India — the last 20 bedridden — without a furlough. She founded the Dohnavur Fellowship to rescue children dedicated to temple prostitution. She wrote 35 books during her years of physical suffering, including Gold by Moonlight and Rose from Brier, which are among the most pastoral writings on suffering in Christian history. She refused marriage twice to remain in India and famously asked God, 'What does it mean to trust you completely?'",
    significance: "A model of radical, costly mission and faithful suffering. Her writings on pain and faith have sustained millions. Her model of child protection anticipates modern child rights advocacy by decades.",
  },
];

export default function BiblicalWomanhoodPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_biblical-womanhood_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedHistory, setSelectedHistory] = usePersistedState("vine_biblical-womanhood_selected_history", "perpetua");

  const historyFigure = HISTORY.find(h => h.id === selectedHistory)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👩</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Women in the Bible & Church</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Women are prophets, judges, apostles, deacons, teachers, and martyrs throughout Scripture and history. A biblical theology of womanhood begins with the imago dei and cannot be reduced to a single role or text.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "questions" as Tab, label: "Hard Questions", icon: "❓" },
            { id: "figures" as Tab, label: "Biblical Women", icon: "⭐" },
            { id: "history" as Tab, label: "Church History", icon: "🏛️" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These questions are genuinely debated among faithful, orthodox Christians. We present the landscape honestly rather than settling debates that the church has not settled.
              </p>
            </div>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === q.q ? null : q.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === q.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{q.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.q ? "−" : "+"}</span>
                </button>
                {expanded === q.q && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "figures" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Scripture is filled with women whose faith, courage, and leadership shaped redemptive history. These are not footnotes — they are central figures in the story of God's work in the world.
              </p>
            </div>
            {FIGURES.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{f.name}</div>
                  <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>{f.ref}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "history" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 185, flexShrink: 0 }}>
              {HISTORY.map(h => (
                <button type="button" key={h.id} onClick={() => setSelectedHistory(h.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedHistory === h.id ? h.color : BORDER}`, background: selectedHistory === h.id ? `${h.color}12` : "transparent", color: selectedHistory === h.id ? h.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {h.name.split(" of")[0].split(",")[0]}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${historyFigure.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: historyFigure.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{historyFigure.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{historyFigure.era}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>{historyFigure.desc}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>HISTORICAL SIGNIFICANCE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{historyFigure.significance}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "LD-emNf-VjE", title: "Biblical Womanhood in Five Minutes", channel: "Desiring God", description: "A concise Ask Pastor John episode explaining the core of biblical womanhood — what it is and what it is not — rooted in Genesis and the New Testament." },
                  { videoId: "44-fMXjL5gI", title: "The Beauty and Behavior of a Godly Woman", channel: "Desiring God / John Piper", description: "John Piper expounds on what Scripture celebrates in a godly woman — not primarily roles but character, courage, and faith-filled trust in God." },
                  { videoId: "EAim9C2hiGw", title: "Biblical Womanhood Is Not House Arrest", channel: "Desiring God", description: "A corrective teaching that biblical womanhood encompasses far more than domestic roles — it is about flourishing in God's calling, wherever that leads." },
                  { videoId: "FUXkcZqV0SU", title: "John Piper on Christian Womanhood", channel: "Desiring God", description: "Piper discusses the distinctive calling of Christian women — grounded not in cultural roles but in the image of God and the redemption Christ brings." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
