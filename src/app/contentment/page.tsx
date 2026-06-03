"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Contentment Is Learned, Not Given", verse: "Philippians 4:11", body: "'I have learned, in whatever state I am, to be content' (Philippians 4:11). Paul does not say contentment is natural or automatic — he says he learned it. It is a discipline, a skill, a virtue formed through practice under grace. He learned it through 'being abased and abounding' — through both poverty and plenty. Contentment is not the product of circumstances; it is an achievement of the soul forged through them." },
  { title: "Godliness with Contentment Is Great Gain", verse: "1 Timothy 6:6-8", body: "'Godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that' (1 Tim. 6:6-8). Paul is not romanticizing poverty — he is reorienting desire. The person who needs little to be satisfied is wealthier than the person with much who is never satisfied. Contentment multiplies what you have by reducing what you feel you need." },
  { title: "Covetousness as Idolatry", verse: "Colossians 3:5", body: "Paul lists covetousness alongside sexual immorality and greed, then calls it 'idolatry' (Colossians 3:5). Covetousness is not merely wanting more — it is the functional worship of what we don't have. When our peace, identity, and hope are attached to what we might acquire, those things have become our gods. Contentment is the practical expression of worshiping the right God." },
  { title: "The Secret Paul Found", verse: "Philippians 4:13", body: "Immediately after saying he has learned contentment in all circumstances, Paul reveals the secret: 'I can do all this through him who gives me strength' (Phil. 4:13). The famous verse is not about athletic achievement or career success — it is about contentment. The 'all this' Paul says he can do through Christ is being content in hunger, in abundance, in difficulty, in ease. Christ is the source of contentment, not the removal of want." },
];

const DISCONTENTMENT_SOURCES = [
  { source: "Comparison", sign: "You feel fine until you see what someone else has.", remedy: "Social media comparison is specifically engineered to produce discontentment. Curate what you consume. Thank God for specific good things in your own life before seeing others' highlighted reels." },
  { source: "Consumerism", sign: "You believe that acquiring the next thing will bring the satisfaction the last thing didn't.", remedy: "Name the lie: 'When I get X, I'll be satisfied.' Track how often this turns out to be false. Practice delayed gratification as a spiritual discipline." },
  { source: "Unmet Expectations", sign: "You had a picture of what your life would look like, and it doesn't match.", remedy: "Grief is appropriate when real loss occurs. But entitlement to a specific life outcome is discontentment wearing grief's clothing. Distinguish the two honestly in prayer." },
  { source: "Ingratitude", sign: "You notice what's wrong before what's right. You are hard to thank or impress.", remedy: "Gratitude is a discipline. Keep a thanksgiving list. In prayer, name specific good things before making requests. The act of naming good re-trains attention." },
  { source: "Fear of Missing Out", sign: "You feel you must have every experience, opportunity, or relationship or you will have wasted your life.", remedy: "Your finite life is a gift, not a constraint. You cannot have everything, and trying to will exhaust and fragment you. Choose your 'yeses' carefully; they are the real measure of a life." },
];

const TEACHERS = [
  {
    id: "burroughs",
    name: "Jeremiah Burroughs",
    work: "The Rare Jewel of Christian Contentment (1648)",
    color: GREEN,
    bio: "English Puritan pastor. One of the most popular preachers of his era. Preached to the Westminster Assembly.",
    quote: "Christian contentment is that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God's wise and fatherly disposal in every condition.",
    insight: "Burroughs's book is the most thorough treatment of contentment in the Christian tradition. His central insight is that contentment is not the absence of desire but the proper ordering of desire under the will of God. He teaches contentment by distinguishing it from its counterfeits: stoic indifference (not caring), resignation (defeated acceptance), and pretend peace (suppressed discontentment). True contentment, he says, is learned through a series of exercises that bring the heart to align its wants with God's provision. Key among them: seeing what you have rather than what you lack, and recalling that the Christian's inheritance is in heaven, not in present circumstances.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    work: "The Screwtape Letters (1942); Mere Christianity",
    color: PURPLE,
    bio: "Oxford and Cambridge scholar, Christian apologist, novelist. Converted from atheism to Christianity in his early 30s.",
    quote: "If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.",
    insight: "Lewis approaches contentment through desire — and specifically through the argument that the scale of human longing exceeds anything on earth. He calls this longing 'Joy' (Sehnsucht in German) — a yearning for something that no earthly object fully satisfies. His argument: the very fact that nothing in this world fully contents us is evidence that we are made for more. This reframes discontentment: instead of being a problem to be managed, it is a signpost pointing toward God. In Screwtape Letters, his demon Screwtape describes how the Enemy (God) wants humans to be genuinely hungry and to find that hunger genuinely fed — not the shallow satisfaction of substitutes.",
  },
  {
    id: "aquinas",
    name: "Thomas Aquinas",
    work: "Summa Theologiae (1265-1274)",
    color: "#3B82F6",
    bio: "Dominican friar, theologian, and philosopher. Synthesized Aristotelian philosophy with Christian theology. Doctor of the Church.",
    quote: "Greed is not a defect in the earthly goods themselves, but in the man who loves them inordinately.",
    insight: "Aquinas frames contentment through the virtue of temperance — the proper ordering of desire toward its fitting object. Discontentment is, for Aquinas, a form of disordered love: not wrong to want things, but wrong to want the wrong things, in the wrong quantity, in the wrong priority. His key concept is ordinatio — the right ordering of goods under the greatest good (God). Contentment is not the suppression of desire but its proper direction. He also distinguishes poverty of spirit (a voluntary detachment from goods that Aquinas advocates) from material poverty (not required of all). The person who possesses much but holds it lightly is more content than the person who possesses little but clings to it.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    work: "The Spirit of the Disciplines (1988)",
    color: "#F59E0B",
    bio: "Philosophy professor at USC and spiritual formation author. Shaped a generation's thinking on discipleship and the spiritual life.",
    quote: "Simplicity is a freedom from anxiety over the possession or the loss of things.",
    insight: "Willard grounds contentment in the discipline of simplicity — a deliberate structuring of life to need less and want less. His argument is that spiritual disciplines are not ways to earn God's favor but training for the kind of life Jesus lived. Simplicity trains contentment just as fasting trains hunger: by voluntarily going without, the grip of want is loosened. He also addresses the root: the 'spirit of accumulation' that drives discontentment is not merely a personal failing but a cultural formation. Consumer society actively trains discontentment — it is its business model. Counter-formation requires intentional counter-practices.",
  },
  {
    id: "pieper",
    name: "Josef Pieper",
    work: "Leisure: The Basis of Culture (1948)",
    color: "#EC4899",
    bio: "German Catholic philosopher. Wrote against the spirit of Nazi and postwar productivity ideology.",
    quote: "Leisure is a form of silence, of that silence which is the prerequisite of the apprehension of reality.",
    insight: "Pieper's contribution to contentment is his recovery of the classical concept of leisure (schole in Greek) as the contemplative orientation toward reality that makes genuine satisfaction possible. He argues that the modern world has replaced leisure with idleness on one side and work on the other — neither of which produces contentment. True leisure is the posture of receiving reality as gift, being present to what is rather than anxiously projecting onto what might be. This receptivity is the foundation of contentment: the ability to be where you are, with what you have, attending to it with full gratitude. Pieper's argument is that a society organized entirely around production cannot produce contentment — only consumption, which is appetite, not satisfaction.",
  },
];

const PRACTICES = [
  { title: "Gratitude List", desc: "Write three specific things you are grateful for each morning before your mind fills with the day's demands. Specificity matters: not 'my family' but 'the conversation I had with my daughter last night.'", verse: "1 Thessalonians 5:18" },
  { title: "Content-Enough Audit", desc: "Ask the question: 'Do I have enough food, shelter, and clothing today?' If yes — by the biblical standard (1 Tim. 6:8) — you are wealthy. The rest is bonus.", verse: "1 Timothy 6:8" },
  { title: "The Fast from Wanting", desc: "For one week, make no purchases beyond food and necessities. Notice what happens to desire — both the anxiety of restraint and the freedom that follows.", verse: "Matthew 6:25" },
  { title: "Reframe Comparison", desc: "When you notice envy or comparison, replace it with intercession. Pray for the person whose life seems better. This is both obedience (pray for others) and a spiritual judo move that dismantles envy.", verse: "Romans 12:15" },
  { title: "Name Your 'Enough'", desc: "Define in writing: 'Enough income for our family is ___.' 'Enough possessions means ___.' Having a defined 'enough' interrupts the perpetual expansion of desire that consumer culture presupposes.", verse: "Proverbs 30:8-9" },
  { title: "Delight in What You Have", desc: "Identify one thing you already own that you have stopped noticing. Use it this week with full attention and gratitude, as if it were new. Familiarity breeds contempt; intentionality reverses it.", verse: "Ecclesiastes 9:9" },
];

type Tab = "theology" | "discontentment" | "teachers" | "practices" | "videos";

export default function ContentmentPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [selectedTeacher, setSelectedTeacher] = useState("burroughs");

  const teacher = TEACHERS.find(t => t.id === selectedTeacher)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>😌</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Contentment</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Contentment is not a mood — it is a learned discipline. Paul says he learned it through both poverty and abundance. The secret is not different circumstances but a different orientation of soul.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "discontentment" as const, label: "Discontentment", icon: "🔍" },
            { id: "teachers" as const, label: "Great Teachers", icon: "📚" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "discontentment" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Discontentment is not one thing — it has several distinct sources, each requiring a different response. Diagnosing the source is the first step to addressing it faithfully.
              </p>
            </div>
            {DISCONTENTMENT_SOURCES.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{d.source}</div>
                <div style={{ marginBottom: 10 }}>
                  <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>SIGN: </span>
                  <span style={{ color: TEXT, fontSize: 14 }}>{d.sign}</span>
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>REMEDY: </span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{d.remedy}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "teachers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {TEACHERS.map(t => (
                <button key={t.id} onClick={() => setSelectedTeacher(t.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedTeacher === t.id ? `${t.color}18` : CARD, border: `1px solid ${selectedTeacher === t.id ? t.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedTeacher === t.id ? t.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${teacher.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: teacher.color, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{teacher.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{teacher.work}</div>
              <div style={{ background: BG, borderRadius: 8, padding: "8px 14px", marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{teacher.bio}</p>
              </div>
              <blockquote style={{ borderLeft: `3px solid ${teacher.color}`, paddingLeft: 16, marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{teacher.quote}"</p>
              </blockquote>
              <div style={{ background: `${teacher.color}08`, border: `1px solid ${teacher.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: teacher.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>THEIR CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{teacher.insight}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  <span style={{ color: MUTED, fontSize: 11, fontWeight: 700 }}>{p.verse}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
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
                  { videoId: "fYs-ZiFf-i0", title: "How Does True Contentment Come? (Philippians 4:10–13)", channel: "Desiring God", description: "John Piper unpacks the secret of contentment Paul reveals in Philippians 4 — learning to be content through Christ who strengthens us in both abundance and need." },
                  { videoId: "2S58mv1jmtA", title: "The Secret of Contentment", channel: "Gospel Coalition", description: "A sermon on how in our competitive culture we can find genuine contentment not through circumstances but through trust in the God who provides." },
                  { videoId: "ykxFEnApABU", title: "The Secret of Contentment (Philippians 4:10-13)", channel: "Biblical Preaching", description: "A verse-by-verse exposition of Paul's famous passage on contentment, showing that it is a learned discipline forged through faith in Christ." },
                  { videoId: "OBxtkcoubn4", title: "Marriage God's Showcase of Covenant Keeping Grace", channel: "Desiring God / John Piper", description: "John Piper on how God's covenant grace is the foundation of contentment — receiving what God gives rather than demanding what we think we deserve." },
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
