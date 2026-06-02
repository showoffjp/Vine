"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "why" | "approaches" | "curriculum" | "community" | "videos";

const WHY = [
  { reason: "Discipleship is the parent's calling, not the school's", color: GREEN, ref: "Deuteronomy 6:4-9; Ephesians 6:4", content: "The Shema — Israel's foundational confession — was to be taught by parents to children when sitting, walking, lying down, and rising. The Hebrew model of education was life-integrated, parent-led, and theologically saturated. Ephesians 6:4 commands fathers to raise children in the 'discipline and instruction of the Lord' — not to delegate that to professionals. Homeschooling is not an educational choice; it is a discipleship model." },
  { reason: "Academic results consistently favor homeschoolers", color: PURPLE, ref: "National Home Education Research Institute (nheri.org)", content: "Homeschooled students score 15-30 percentile points above public school peers on standardized tests (NHERI). They are more likely to attend and graduate from college, more likely to vote and participate civically, and report higher life satisfaction as adults. These advantages persist across family income levels and regardless of teacher certification — suggesting the home environment, not formal training, is the key variable." },
  { reason: "Worldview formation happens in the home first", color: "#3B82F6", ref: "Romans 12:2; Proverbs 22:6", content: "Children are not educated in a worldview vacuum — every curriculum, every teacher, and every classroom has a controlling worldview. Public education in America is built on philosophical naturalism. Christian homeschooling allows parents to integrate a biblical worldview across every subject: science, history, literature, mathematics, and the arts are all taught as dimensions of God's creation and human response to it." },
  { reason: "Flexibility enables tailored education", color: "#F59E0B", ref: "Proverbs 22:6 — 'train up a child in the way he should go'", content: "The Hebrew 'his way' in Proverbs 22:6 suggests training according to the child's bent — their individual design. Classical scholar Douglas Wilson notes that homeschooling allows a child to move at their own pace, pursue deep interests, spend more time outside, and take ownership of their own education in ways institutional school cannot accommodate. A child who reads at 8 and does algebra at 10 does not need to wait for their class." },
  { reason: "Protection from what should not be seen yet", color: "#EF4444", ref: "Psalm 101:3; Matthew 18:6", content: "Jesus's warning about causing a little one to stumble is severe. Peer culture, social media pressure, gender ideology in elementary curricula, and early sexual content are realities of contemporary American schooling that parents can filter when education happens at home. This is not isolation — it is sequencing: giving children the theological and moral formation to encounter the world with wisdom rather than vulnerability." },
  { reason: "More time in the Word and in creation", color: "#10B981", ref: "Colossians 3:16; Psalm 19:1-4", content: "A homeschooled family can begin every school day in Scripture, integrate nature study with creation theology, take extended time at Easter and Christmas for biblical immersion, and weave prayer into the structure of the school day. Time, which is the scarcest resource in every institutional school, becomes available for the things that matter most — unhurried reading, extended outdoor play, family conversation at noon, and apprenticeship in real work." },
];

const APPROACHES = [
  {
    name: "Classical Christian Education",
    color: PURPLE,
    tagline: "Teach children to think, not what to think",
    summary: "Based on the ancient Trivium — Grammar (ages 5-10: the facts of all subjects), Logic (ages 10-14: how facts relate and argue), Rhetoric (ages 14-18: how to express and persuade). Classical education is not a curriculum but a method. The goal is a student who can reason, write, argue, and express truth across all domains. Classical Christian education adds the integration of a biblical worldview with the classical tradition.",
    bestFor: "Families who love ideas, great books, and the history of Western civilization; children who enjoy discussion and debate",
    examples: "Classical Conversations, Memoria Press, Veritas Press, Well-Trained Mind (secular classical but adaptable)",
    sites: "classicalconversations.com, memoriapress.com, veritaspress.com, welltrainedmind.com",
    books: "'The Well-Trained Mind' by Susan Wise Bauer; 'Recovering the Lost Tools of Learning' by Douglas Wilson; 'Classical Education' by Gene Veith & Andrew Kern"
  },
  {
    name: "Charlotte Mason Method",
    color: GREEN,
    tagline: "Education is an atmosphere, a discipline, a life",
    summary: "Developed by Victorian educator Charlotte Mason (1842-1923), this method emphasizes living books (real books, not textbooks), narration (the child retells what they heard as assessment), nature study, short lessons, handicrafts, picture study, and folk songs. Mason believed children are born persons deserving respect, not vessels to fill. Her 6-volume philosophy is available free at amblesideonline.org.",
    bestFor: "Families with young children; those who want rich literary education without textbook-driven instruction; children who love nature and stories",
    examples: "Ambleside Online (free), Simply Charlotte Mason, A Gentle Feast",
    sites: "amblesideonline.org, simplycharlottemason.com",
    books: "Charlotte Mason's 6-volume Home Education series (free at amblesideonline.org); 'For the Children's Sake' by Susan Schaeffer Macaulay"
  },
  {
    name: "Unit Studies / Interest-Led",
    color: "#3B82F6",
    tagline: "Let what your child loves drive what they learn",
    summary: "Unit studies teach multiple subjects through one central topic — a Civil War unit might cover history, biography, geography, literature, writing, arithmetic, and art simultaneously. Interest-led learning extends this by allowing the child's passions to drive curriculum selection. A child obsessed with birds studies ornithology, reads Rachel Carson, writes bird journals, learns to draw birds, and studies migration patterns mathematically. Learning becomes inseparable from delight.",
    bestFor: "Families with multiple ages (same unit, different depth); children with strong specific interests; parents who love making connections across disciplines",
    examples: "Konos, Five in a Row (early childhood), My Father's World, Sonlight (literature-based)",
    sites: "konos.com, fiveinarow.com, myfathersworld.com, sonlight.com",
    books: "'A Thomas Jefferson Education' by Oliver DeMille; 'The Brave Learner' by Julie Bogart"
  },
  {
    name: "Structured / Traditional Curriculum",
    color: "#EF4444",
    tagline: "Proven sequences with clear scope and sequence",
    summary: "Traditional Christian curricula provide complete grade-level packages with textbooks, workbooks, teacher guides, and tests — mimicking the structure of school at home. This approach gives parents who feel unqualified a roadmap and gives students predictable structure. Companies like Abeka and BJU Press have produced decades of reliable curriculum used by millions of homeschool families. The risk is replicating institutional school's weaknesses at home.",
    bestFor: "Parents who want clear guidance and accountability; children who thrive on routine and structure; families transitioning from traditional school",
    examples: "Abeka Academy, BJU Press Homeschool, ACE Paces, Rod and Staff",
    sites: "abeka.com, bjupresshomeschool.com",
    books: "Curriculum companies publish scope-and-sequence documents; 'Home Learning Year by Year' by Rebecca Rupp"
  },
  {
    name: "Eclectic Approach",
    color: "#F59E0B",
    tagline: "Take the best from every method",
    summary: "Most experienced homeschool families describe themselves as eclectic — they use classical math (Singapore or Saxon), Charlotte Mason living books for history and literature, a structured grammar curriculum, unit studies for science, and narration as assessment. Eclecticism is not confusion; it is wisdom developed through years of trial and error. The first-year homeschool parent typically cannot do this well — experience and community are essential.",
    bestFor: "Experienced homeschool families; those who have tried multiple methods and know their child; parents who enjoy customizing",
    examples: "Any combination — Singapore Math + Ambleside Online + Classical Writing + Bob Jones Science",
    sites: "curriculumchoice.com, cathy duffy reviews at cathyduffyreviews.com",
    books: "'Homeschooling the Challenging Child' by Christine Field; 'Ultimate Homeschool Planner' by Debra Bell"
  },
];

const CURRICULA = [
  { name: "Classical Conversations", subject: "Complete Classical K-12", color: PURPLE, url: "classicalconversations.com", desc: "The largest classical Christian homeschool community in the world — over 125,000 families in 50 countries. Families meet weekly in communities (like co-ops) guided by trained tutors; parents do the daily teaching at home. Memory work in all subjects (grammar, math, science, history, geography) in a 24-week rotating cycle. Three programs: Foundations (K-6), Essentials (4-6, grammar and writing), Challenge (7-12, Socratic discussions).", bestFor: "Families who want community + classical methodology + biblical integration" },
  { name: "Veritas Press", subject: "Classical History + Bible K-12", color: GREEN, url: "veritaspress.com", desc: "Rigorous classical curriculum organized chronologically through history in a 5-year cycle. Known for its Bible curriculum (Genesis-Revelation), history memorization cards, Omnibus program (great books discussion for 7th-12th grade), and online academy. Omnibus is the most rigorous Christian great-books program available at the high school level — primary sources from Homer to Augustine to Dostoevsky, all read through a Christian lens.", bestFor: "Families who want a challenging academic program with deep biblical integration" },
  { name: "Ambleside Online", subject: "Charlotte Mason Complete K-12", color: "#3B82F6", url: "amblesideonline.org", desc: "Free, comprehensive Charlotte Mason curriculum — complete book lists, schedules, and guidance for all grades. Uses living books (real literature and biography, not textbooks), narration, nature study, and short lessons. Book selections include Plutarch, Shakespeare, Dickens, Kipling, and Scripture. The community forum is one of the most active and knowledgeable homeschool communities online. Cost: completely free.", bestFor: "Families who want literary richness, nature education, and a low-cost or free option" },
  { name: "Sonlight Curriculum", subject: "Literature-Based History + Language Arts", color: "#EF4444", url: "sonlight.com", desc: "Literature-based curriculum organized around history read through real books — biographies, historical fiction, primary sources. 36-week instructor guide tells parents exactly what to read and discuss. Strong missions emphasis throughout — children read missionary biographies from the earliest grades. Strong community on Facebook and their forums. One of the most beloved curricula in the Christian homeschool world.", bestFor: "Book-loving families; those who want missions integration; parents who want detailed daily guidance" },
  { name: "Singapore Math", subject: "Mathematics", color: "#F59E0B", url: "singaporemath.com", desc: "The math program used by Singapore, consistently ranked first in international math assessments. Uses a concrete-pictorial-abstract progression that builds genuine mathematical understanding rather than memorized algorithms. Primary Mathematics series is the core; Dimensions Math is the more recently updated version. Used across all homeschool philosophies because of its track record.", bestFor: "Any family — works across all homeschool approaches; especially good for visual learners" },
  { name: "IEW (Institute for Excellence in Writing)", subject: "Writing K-12", color: "#10B981", url: "iew.com", desc: "The most widely used writing curriculum in Christian homeschooling. Andrew Pudewa's Structural Model teaches children a concrete process for writing: summarize a passage using key words, then dress it up with specific vocabulary and sentence structures. Produces confident writers systematically. DVD-based so the parent does not need to teach — they watch alongside the student. Annual conference draws thousands of homeschool families.", bestFor: "Any family; especially those who struggle with teaching writing" },
  { name: "Apologia Science", subject: "Science K-12", color: "#EC4899", url: "apologia.com", desc: "The most popular science curriculum in Christian homeschooling. Written from a young-earth creationist perspective with explicit apologetics — each book addresses naturalistic interpretations directly. Known for engaging writing style, hands-on experiments, and notebook journals. Also produces well-regarded health curriculum. Available with instructor-led online courses for high school.", bestFor: "Families committed to a creationist science framework" },
  { name: "Story of the World (Peace Hill Press)", subject: "History K-8", color: "#6366F1", url: "peacehillpress.com", desc: "Susan Wise Bauer's narrative history of the world from ancient times to modern era — four volumes covering ancient, medieval, early modern, and modern history. Told in story form with primary source activity books that add maps, crafts, and writing projects. Secular in worldview but easily used by Christian families. Widely used by both classical and Charlotte Mason families.", bestFor: "Families wanting a narrative, chronological history approach; Charlotte Mason or classical families" },
];

const COMMUNITY = [
  { name: "Home School Legal Defense Association (HSLDA)", url: "hslda.org", desc: "Membership organization that provides legal representation and advocacy for homeschool families. Know your state's laws before you begin. HSLDA's state-by-state guide at hslda.org/legal is the most reliable resource. Membership costs ~$130/year; provides attorney representation if needed.", type: "Legal" },
  { name: "Classical Conversations Communities", url: "classicalconversations.com", desc: "Weekly community groups meeting in churches and homes across all 50 states. Even families not using CC curriculum sometimes join a community for the social accountability and co-op experience. Tutors are trained parents, not certified teachers. Find a community at classicalconversations.com/find-a-community.", type: "Community" },
  { name: "Home Educators Association (State-Level)", url: "hslda.org/legal", desc: "Every state has homeschool associations — usually legal advocacy and annual conventions. Annual conventions feature curriculum fairs and speaker sessions; going in person allows you to see and touch curriculum before buying. Search 'your state' + 'homeschool association' for local chapters.", type: "Community" },
  { name: "Well-Trained Mind Community Forums", url: "forums.welltrainedmind.com", desc: "One of the most active online homeschool communities — thousands of experienced families willing to answer curriculum questions, share experience, and provide encouragement. Not specifically Christian but widely used by classical Christian families. The archives contain decades of reviewed curricula.", type: "Online Community" },
  { name: "Homeschool.com / Cathy Duffy Reviews", url: "cathyduffyreviews.com", desc: "The most thorough and objective curriculum review site available. Cathy Duffy has reviewed hundreds of curricula with detailed analysis of approach, level, and family fit. Essential before any major curriculum purchase. Her book '102 Top Picks for Homeschool Curriculum' is widely trusted.", type: "Resource" },
  { name: "National Home Education Research Institute", url: "nheri.org", desc: "The primary source for homeschool research data. Contains academic studies on academic outcomes, socialization, civic participation, and adult success among homeschool graduates. Essential when responding to skeptical family members or navigating institutional requirements.", type: "Research" },
];

export default function HomeschoolGuidePage() {
  const [tab, setTab] = useState<Tab>("why");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState(CURRICULA[0].name);
  const sel = CURRICULA.find(c => c.name === selected) || CURRICULA[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>📚</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Homeschool Guide</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 620, margin: "0 auto" }}>
            Biblical foundations, proven approaches, trusted curricula, and real community for families educating their children at home.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
          {[{ n: "2.6M+", l: "US Homeschool Students" }, { n: "15-30%", l: "Higher Test Scores vs. Public School" }, { n: "50 States", l: "Homeschool is Legal in All" }, { n: "HSLDA", l: "Legal Protection Since 1983" }].map((s, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 20 }}>{s.n}</div>
              <div style={{ color: MUTED, fontSize: 11 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["why", "approaches", "curriculum", "community", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "why" ? "Why Homeschool" : t === "approaches" ? "Approaches & Methods" : t === "curriculum" ? "Curriculum Guide" : t === "community" ? "Community & Legal" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "why" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {WHY.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[w.reason] ? w.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [w.reason]: !e[w.reason] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: w.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{w.reason}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{w.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[w.reason] ? "−" : "+"}</span>
                </button>
                {expanded[w.reason] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{w.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "approaches" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {APPROACHES.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${a.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <div style={{ color: a.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}>{a.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{a.tagline}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{a.summary}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div style={{ background: `${a.color}08`, border: `1px solid ${a.color}15`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: a.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>BEST FOR</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{a.bestFor}</div>
                  </div>
                  <div style={{ background: `${a.color}08`, border: `1px solid ${a.color}15`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: a.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>EXAMPLES</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{a.examples}</div>
                  </div>
                </div>
                <div style={{ marginTop: 10, color: MUTED, fontSize: 11 }}>Resources: {a.books}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "curriculum" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CURRICULA.map((c) => (
                <div key={c.name} onClick={() => setSelected(c.name)}
                  style={{ background: CARD, border: `1px solid ${selected === c.name ? c.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, fontSize: 14 }}>{c.name}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{c.subject} · {c.url}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{sel.name}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.subject} · {sel.url}</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{sel.desc}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}25`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>BEST FOR</div>
                <div style={{ color: TEXT, fontSize: 12 }}>{sel.bestFor}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "community" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 8 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 4 }}>Know Your State Law Before You Begin</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>Homeschool laws vary dramatically by state — from Pennsylvania (very strict: portfolios, evaluations, and notices required) to Texas (almost no regulation). Always check hslda.org/legal for your state before withdrawing your child from school. Failure to comply can invite legal complications that undermine your homeschool from the start.</p>
            </div>
            {COMMUNITY.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 14 }}>{c.name}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{c.url}</div>
                  </div>
                  <div style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{c.type}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
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
                  { videoId: "U16tDdh4IZo", title: "Francis Chan on the House Church Movement", channel: "Francis Chan", description: "Chan on recapturing the simplicity of early church community — directly relevant to families who are building a home-centered discipleship model through homeschooling." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Tim Keller / Gospel Coalition", description: "Keller on how the Kingdom of God inverts worldly wisdom — including how we think about education, success, and what it means to raise children for God's purposes." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Chan on returning to biblical simplicity — the same impulse that drives many families to homeschool: recovering what matters most and stripping away institutional complexity." },
                  { videoId: "NfwOd9mbL3U", title: "Become a Little Child", channel: "Tim Keller / Redeemer Presbyterian", description: "Keller on the significance of children in the Kingdom of God — a theological foundation for the high calling of intentional, faith-saturated parenting and education at home." },
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
    </div>
  );
}
