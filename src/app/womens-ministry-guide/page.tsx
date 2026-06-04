"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practices" | "teachers" | "resources" | "videos";

const THEOLOGY_POINTS = [
  {
    title: "Titus 2 as the Biblical Model",
    body: "Titus 2:3-5 establishes the fundamental pattern: older women (presbytidas) are to be 'teachers of what is good' (kalodidaskalous) and to train (sophronizō — a word meaning to form wisdom in someone, not merely lecture) younger women. This is not a program — it is a multigenerational chain of lived formation. The church itself becomes the community where this transmission happens: through presence, conversation, shared suffering, and shared joy. The Titus 2 vision assumes a church where women of different life stages are in real relationship, not siloed by age or stage.",
  },
  {
    title: "Women as Image-Bearers with Full Spiritual Dignity",
    body: "Galatians 3:28 declares that in Christ 'there is neither Jew nor Gentile, neither slave nor free, nor is there male and female.' Women are fully made in the image of God (Genesis 1:27) and fully recipients of the Spirit's gifting. Jesus's own ministry demonstrated this: he taught women, engaged them theologically (John 4; Luke 10:39), and Mary Magdalene was the first witness and announcer of the resurrection — the apostle to the apostles. In the early church, Priscilla taught Apollos (Acts 18:26), Phoebe was a deacon (Romans 16:1-2), Lydia led a household church (Acts 16:14-15), and Junia was called outstanding among the apostles (Romans 16:7). Women's full spiritual personhood and gifting is not a concession — it is the baseline of the New Testament.",
  },
  {
    title: "The Complementarian / Egalitarian Debate",
    body: "Christians disagree about the extent of women's roles in formal church leadership — specifically, whether women may preach to mixed-gender congregations or hold the office of elder/pastor. Complementarians ground restrictions in creation order (1 Timothy 2:12-14); egalitarians read the restrictive texts as culturally contextual and emphasize Galatians 3:28 and the wide ministry of women in the NT. What most evangelicals agree on is substantial: women are full spiritual equals, gifted by the Spirit for the edification of the body, essential to the church's mission, and called to rich ministry lives. Both traditions have serious, theologically grounded women's ministry. The debate should not be allowed to suppress women's gifts in the name of protecting a position.",
  },
  {
    title: "Women's Ministry Is Not a Sideshow",
    body: "There is a persistent temptation — across traditions — to treat women's ministry as peripheral: craft projects, shopping trips, and light devotionals for a demographic that needs to be kept occupied. This is a failure of ecclesiology and missiology. Women constitute the majority of almost every church congregation. Their theological formation, biblical literacy, discipleship depth, and leadership development is not a side concern — it is central to what the church is and does. Treating women's ministry as less rigorous, less theological, or less important than 'the main thing' is both bad theology and bad strategy. Women deserve the same quality of biblical instruction and the same seriousness of discipleship investment as anyone else in the congregation.",
  },
  {
    title: "Friendship and Community as Spiritual Formation",
    body: "The book of Ruth demonstrates women's capacity for covenantal depth of friendship: 'Where you go I will go, and where you stay I will stay' (Ruth 1:16) — a loyalty that transcends circumstance and comfort. This kind of deep female friendship is both a gift and a practice. Yet women face an isolation epidemic today: the cultural forces of mobility, digital substitution for presence, the productivity cult, and the performance of curated wellness conspire to leave women profoundly lonely even in churches. Female friendship is not merely a support system — it is a form of spiritual formation. Knowing and being known, bearing one another's burdens (Galatians 6:2), lamenting together, celebrating together: this is the body of Christ at work.",
  },
  {
    title: "Women and Suffering",
    body: "Women disproportionately experience abuse, domestic violence, sexual trauma, infertility, miscarriage, the exhaustion of caretaking, and grief. A women's ministry that does not create space to name and hold these realities is not actually ministering to women — it is performing wellness for an audience. The Psalms of lament are not supplementary material; they are the honest vocabulary of souls in pain. The church must be a community where suffering is named, not managed; where survivors are believed and supported; where infertility is not treated as a failure of faith; where the complexity of caregiving is honored; and where women are not required to perform gratitude they do not feel. Lament is a spiritual practice — and women have always known this.",
  },
];

const PRACTICES = [
  {
    color: "#8B5CF6",
    title: "Bible Study",
    desc: "Rigorous, expository women's Bible study. The Jen Wilkin model asks three questions in sequence: What does it say? (observation) What does it mean? (interpretation) What does it mean for me? (application). The order matters — application without interpretation produces therapeutic shortcuts rather than formation. Women can handle — and deserve — rigorous theological engagement with the full counsel of Scripture.",
    principles: ["Teach the text, not a topic", "Observation before application", "Build biblical literacy over time", "Women are not fragile — go deep"],
    caution: "Resist the pull toward topical inspiration over sustained exposition. Women's Bible study should produce women who know how to read Scripture themselves.",
  },
  {
    color: "#10B981",
    title: "Titus 2 Mentoring",
    desc: "Intentional pairing of older and younger women for life-on-life formation. This is not a formal program with a curriculum — the relationship IS the content. Coffee, walking, cooking together, navigating hard conversations. The older woman does not need to be an expert; she needs to be present, honest, and further down the road.",
    principles: ["Relationship over curriculum", "Presence is the medium", "Honest about one's own failures", "Long-term, not transactional"],
    caution: "Avoid over-formalizing the relationship into a program with worksheets. The power of Titus 2 mentoring is its informality and authenticity.",
  },
  {
    color: "#F59E0B",
    title: "Women's Retreat",
    desc: "An annual retreat that teaches theology, not just inspiration. The best retreats create shared memory, deepen friendship, include substantial Scripture teaching, and make room for honest conversation about real life. Include worship, lament, and space for women to be honest about what they are actually carrying.",
    principles: ["Substantive teaching, not just inspiration", "Space for lament as well as celebration", "Memory-making through shared experience", "Away from the noise of ordinary life"],
    caution: "A retreat built entirely around emotions and vague encouragement misses the formation opportunity. Pair emotional safety with theological substance.",
  },
  {
    color: "#3B82F6",
    title: "Community Groups",
    desc: "Women-only small groups create safety for vulnerability on gender-specific issues: marriage and singleness, motherhood and infertility, body image, sexuality, abuse, miscarriage, career, aging. The safety created by shared experience and single-gender space enables a depth of honesty that mixed-gender groups often cannot reach.",
    principles: ["Safety enables depth", "Gender-specific issues deserve gender-specific space", "Confidentiality is foundational", "Connect vulnerability to Scripture"],
    caution: "Women-only groups can become echo chambers or therapy substitutes. Keep Scripture central; connect personal experience to the whole counsel of God.",
  },
  {
    color: "#EF4444",
    title: "Hospitality & Mercy",
    desc: "Women often lead the church's mercy ministry: meals for the bereaved, crisis care, hospital visits, refugee welcome, practical support for the overwhelmed. This is not peripheral service work — it is the body of Christ functioning as it should. Connect acts of mercy to theological formation: women doing mercy ministry should understand why they do it, not just that they should.",
    principles: ["Connect service to theology", "Recognize mercy ministry as spiritual formation", "Honor the weight of caretaking", "Don't let mercy ministry burn out its leaders"],
    caution: "Beware of treating women as the default mercy labor force without investment in their own formation and care. Serve from abundance, not depletion.",
  },
  {
    color: "#0D9488",
    title: "Leadership Development",
    desc: "Identify and intentionally develop women leaders. The specific debate about eldership should not become a ceiling on all leadership development. Women can lead, teach, preach, disciple, and shape culture in most ecclesial contexts. Whatever one's position on the elder question, the church is responsible to develop women's gifts, create platforms for women's teaching, and raise up the next generation of women leaders.",
    principles: ["Distinguish eldereship debate from broad leadership", "Create real platforms for women's voices", "Invest in developing women teachers", "Name and call out gifts publicly"],
    caution: "Do not allow the complementarian / egalitarian debate to suppress all women's leadership development. Both traditions have robust women's leadership in practice.",
  },
];

const TEACHERS = [
  {
    name: "Jen Wilkin",
    color: "#3B82F6",
    tradition: "Reformed / Baptist",
    knownFor: "Bible study methodology; author and teacher who insists women can handle rigorous theology; created a generation of serious women Bible students",
    works: ["Women of the Word", "In His Image", "None Like Him", "Bible studies on Matthew and the Sermon on the Mount"],
    quote: "God is not a genie. Bible study is not about finding yourself — it's about finding God.",
  },
  {
    name: "Elisabeth Elliot",
    color: "#F59E0B",
    tradition: "Evangelical / Missionary",
    knownFor: "Widow of Jim Elliot (martyred by Auca people, 1956); missionary, author, radio host; unflinching on obedience and suffering",
    works: ["Passion and Purity", "A Path Through Suffering", "Let Me Be a Woman", "Through Gates of Splendor"],
    quote: "God has not promised exemption from trouble — he has promised to be with you in trouble.",
  },
  {
    name: "Rosaria Butterfield",
    color: "#8B5CF6",
    tradition: "Reformed Presbyterian",
    knownFor: "Former tenured professor of queer theory at Syracuse; converted to Christianity through a Reformed pastor's hospitality; advocates radical neighborly hospitality as evangelism",
    works: ["The Secret Thoughts of an Unlikely Convert", "The Gospel Comes with a House Key", "Openness Unhindered"],
    quote: "Hospitality is not an option for the Christian. It is a practice that puts the gospel on display.",
  },
  {
    name: "Jackie Hill Perry",
    color: "#3a7d56",
    tradition: "Reformed Baptist",
    knownFor: "Spoken word artist, author, Bible teacher; known for honest, theologically grounded engagement with sexuality and sanctification",
    works: ["Gay Girl, Good God", "Holier Than Thou", "Jude (Bible study)"],
    quote: "Holiness is not the absence of desire — it is desire rightly ordered toward God.",
  },
  {
    name: "Lydia Brownback",
    color: "#EF4444",
    tradition: "Reformed",
    knownFor: "Writer for Ligonier Ministries; writes on contentment, biblical womanhood, and the pursuit of God in the midst of loneliness and ordinary life",
    works: ["Finding God in My Loneliness", "Trust: A Godly Woman's Adornment", "Contentment"],
    quote: "Contentment is not the absence of desire — it is the presence of God in the midst of unmet desire.",
  },
  {
    name: "Nancy Guthrie",
    color: "#F97316",
    tradition: "Reformed",
    knownFor: "Lost two children to Zellweger Syndrome; became a Bible teacher and grief ministry leader; brings Scripture to bear on the hardest human experiences",
    works: ["Holding On to Hope", "What Grieving People Wish You Knew", "Seeing Jesus in the Old Testament (series)"],
    quote: "Hope is not optimism. Hope is a Person — and he has been in the grave and come back out.",
  },
  {
    name: "Hannah Anderson",
    color: "#0D9488",
    tradition: "Reformed",
    knownFor: "Essayist and author writing on embodied theology, creation, and cultural engagement; nuanced, accessible, and intellectually honest",
    works: ["Made For More", "Humble Roots", "All That's Good", "Turning of Days"],
    quote: "We are not brains on a stick. Embodiment is not a problem to overcome — it is the way God made us to know him.",
  },
  {
    name: "Trillia Newbell",
    color: "#6B4FBB",
    tradition: "Southern Baptist",
    knownFor: "Brings racial reconciliation and diversity perspective to women's ministry; writes on fear, faith, and the unity of the body of Christ across racial lines",
    works: ["United: Captured by God's Vision for Diversity", "Fear and Faith", "God's Very Good Idea"],
    quote: "The diversity of the body of Christ is not a threat to unity — it is the display of God's glory.",
  },
];

const RESOURCES = [
  {
    title: "Revive Our Hearts",
    subtitle: "Nancy DeMoss Wolgemuth",
    desc: "Daily radio program, podcast, and conference ministry devoted to calling women to freedom, fullness, and fruitfulness in Christ. One of the most widely reaching women's ministry organizations in the world.",
    url: "reviveourhearts.com",
    color: "#8B5CF6",
  },
  {
    title: "True Woman Conference",
    subtitle: "Revive Our Hearts",
    desc: "Major women's ministry conference hosted by Revive Our Hearts. Brings together thousands of women for substantive biblical teaching, worship, and renewal. Complementarian in perspective.",
    url: "truewomanconference.com",
    color: "#F59E0B",
  },
  {
    title: "The Gospel Coalition Women",
    subtitle: "TGC",
    desc: "Articles, podcasts, book reviews, and conference content specifically for women. Theologically substantive, Reformed-leaning, with a wide range of women contributors. An excellent ongoing resource for women's ministry leaders.",
    url: "thegospelcoalition.org/women",
    color: "#3B82F6",
  },
  {
    title: "IF:Gathering",
    subtitle: "Jennie Allen",
    desc: "Women's discipleship movement founded by Jennie Allen. Global simulcast events, IF:Table (small local gatherings for real conversation), and discipleship resources. Broad evangelical coalition, focused on women discipling women.",
    url: "ifgathering.com",
    color: "#10B981",
  },
  {
    title: "Women of the Word",
    subtitle: "Jen Wilkin — Book",
    desc: "The definitive guide to teaching women how to study the Bible well. Wilkin's three-question method (observation, interpretation, application) and her insistence on letting Scripture speak before asking what it means for me has shaped a generation of women's Bible study leaders. The most recommended women's ministry resource today.",
    url: "Book — widely available",
    color: "#3a7d56",
  },
  {
    title: "A Woman After God's Own Heart",
    subtitle: "Elizabeth George — Book",
    desc: "Classic evangelical women's devotional guide focused on practical daily-life discipleship: marriage, motherhood, home, prayer, Scripture. Has sold millions of copies and remains a foundational resource for women seeking to integrate faith and everyday life.",
    url: "Book — widely available",
    color: "#EF4444",
  },
];

export default function WomensMinistryGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [openAccordion, setOpenAccordion] = useState<number | undefined>(0);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("Jen Wilkin");

  const teacher = TEACHERS.find((t) => t.name === selectedTeacher)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 52, marginBottom: 14 }}>&#9792;&#65039;</div>
          <h1 style={{ fontSize: 34, fontWeight: 900, margin: "0 0 10px", letterSpacing: -0.5 }}>
            Women&rsquo;s Ministry Guide
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
            Theology, practices, teachers, and resources for building a women&rsquo;s ministry that forms disciples rather than fills calendars.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 36, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(
            [
              { id: "theology" as Tab, label: "Theology", icon: "&#128214;" },
              { id: "practices" as Tab, label: "Practices", icon: "&#9881;&#65039;" },
              { id: "teachers" as Tab, label: "Teachers", icon: "&#128105;&#8205;&#127979;" },
              { id: "resources" as Tab, label: "Resources", icon: "&#128218;" },
              { id: "videos" as Tab, label: "Videos", icon: "&#127909;" },
            ] as { id: Tab; label: string; icon: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: `${t.icon} ${t.label}` }}
            />
          ))}
        </div>

        {/* Tab 1: Theology — Accordion */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Women&rsquo;s ministry is grounded in a robust theology of women as image-bearers, Spirit-gifted members of the body, and essential participants in the multigenerational transmission of faith. These {THEOLOGY_POINTS.length} points establish the theological foundation.
              </p>
            </div>
            {THEOLOGY_POINTS.map((point, i) => (
              <div
                key={i}
                style={{ background: CARD, border: `1px solid ${openAccordion === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.2s" }}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? undefined : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                    <span style={{ background: `${PURPLE}25`, color: PURPLE, fontWeight: 800, fontSize: 12, padding: "3px 9px", borderRadius: 20, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: openAccordion === i ? GREEN : TEXT, fontWeight: 800, fontSize: 16 }}>
                      {point.title}
                    </span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{openAccordion === i ? "▲" : "▼"}</span>
                </button>
                {openAccordion === i && (
                  <div style={{ padding: "0 22px 20px" }}>
                    <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{point.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Practices — Card Grid */}
        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Six core practices for women&rsquo;s ministry that form disciples rather than entertain an audience. Each practice includes guiding principles and a key caution.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {PRACTICES.map((p, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                    <h3 style={{ color: p.color, fontWeight: 900, fontSize: 17, margin: 0 }}>{p.title}</h3>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                  <div style={{ background: `${p.color}10`, border: `1px solid ${p.color}25`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: p.color, fontWeight: 700, fontSize: 11, marginBottom: 8, letterSpacing: 0.5 }}>PRINCIPLES</div>
                    <ul style={{ margin: 0, padding: "0 0 0 16px", color: TEXT, fontSize: 12, lineHeight: 1.7 }}>
                      {p.principles.map((pr, j) => (
                        <li key={j}>{pr}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: "#EF444410", border: "1px solid #EF444425", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4, letterSpacing: 0.5 }}>CAUTION</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{p.caution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Teachers — Grid + Sticky Detail */}
        {activeTab === "teachers" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}>
            {/* Left: grid of teacher cards */}
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 18px", marginBottom: 18 }}>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  Eight women teachers who have shaped contemporary evangelical women&rsquo;s ministry. Select any to see details.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {TEACHERS.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setSelectedTeacher(t.name)}
                    style={{
                      background: selectedTeacher === t.name ? `${t.color}18` : CARD,
                      border: `1px solid ${selectedTeacher === t.name ? t.color : BORDER}`,
                      borderRadius: 10,
                      padding: "14px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                  >
                    <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{t.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, lineHeight: 1.4 }}>{t.tradition}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: sticky detail panel */}
            <div style={{ position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${teacher.color}35`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: teacher.color }} />
                  <h2 style={{ color: teacher.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{teacher.name}</h2>
                </div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 16, paddingLeft: 22 }}>{teacher.tradition}</div>

                <div style={{ background: `${teacher.color}0C`, border: `1px solid ${teacher.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                  <div style={{ color: teacher.color, fontWeight: 700, fontSize: 10, letterSpacing: 0.6, marginBottom: 6 }}>KNOWN FOR</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{teacher.knownFor}</p>
                </div>

                <div style={{ background: `${PURPLE}0C`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, letterSpacing: 0.6, marginBottom: 6 }}>KEY WORKS</div>
                  <ul style={{ margin: 0, padding: "0 0 0 16px", color: TEXT, fontSize: 13, lineHeight: 1.7 }}>
                    {teacher.works.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: `${GREEN}0A`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, letterSpacing: 0.6, marginBottom: 6 }}>QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    &ldquo;{teacher.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Resources — Card Grid */}
        {activeTab === "resources" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Trusted organizations, conferences, and books for women&rsquo;s ministry leaders and participants. These resources are widely used across evangelical traditions.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {RESOURCES.map((r, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.color, flexShrink: 0 }} />
                      <h3 style={{ color: r.color, fontWeight: 900, fontSize: 16, margin: 0 }}>{r.title}</h3>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, paddingLeft: 16 }}>{r.subtitle}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, flex: 1 }}>{r.desc}</p>
                  <div style={{ background: `${r.color}10`, border: `1px solid ${r.color}25`, borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: r.color, fontSize: 12, fontWeight: 700 }}>{r.url}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian women teachers and pastors on women's ministry.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "RPHncZhzeJA", title: "You Go Through More Because You're Called to More", channel: "Priscilla Shirer / Women of Faith on TBN", description: "Priscilla Shirer shares how God's faithfulness equips you for what he has called you to do — and why the weight of your calling is matched by the power of his grace." },
                  { videoId: "WZl_zE6T7VI", title: "Walk in the Power of God in You — Full Sermon", channel: "Priscilla Shirer / Women of Faith on TBN", description: "A full sermon from Priscilla Shirer on your identity in Christ and how you can walk in the supernatural power of the Holy Spirit living within you." },
                  { videoId: "WXVXbTVE0Ks", title: "Grow Your Faith & Trust in God — Full Sermon", channel: "Lisa Harper / Women of Faith on TBN", description: "Lisa Harper teaches about walking with Jesus through every season of life, sharing what it means to grow your faith and trust in God when circumstances are difficult." },
                  { videoId: "nuHtKlrrSdk", title: "Women's Ministry in the Local Church", channel: "Susan Hunt", description: "Susan Hunt examines what Scripture says about gender distinctiveness and the areas of service within the local church where women are called to lead and disciple." },
                  { videoId: "1X_oXpL4mGs", title: "Know Who You Are in Christ", channel: "Lisa Bevere / Women of Faith on TBN", description: "Lisa Bevere offers a message to inspire women to become who God has uniquely made them to be — grounded in their identity in Christ rather than in the world's definitions." },
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
