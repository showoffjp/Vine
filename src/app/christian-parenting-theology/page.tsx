"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Children as Gift and Heritage", verse: "Psalm 127:3", body: "Children are a heritage from the Lord, offspring a reward from him (Psalm 127:3). The Hebrew word for heritage (nachalah) is the same word used for the land of Canaan — the inheritance given by God. Children are not possessions, projects, or inconveniences; they are gifts entrusted by the One who gives life. This reframes the entire parenting project: we are not the owners of our children but stewards of God's gift. They come from him and ultimately return to him. Our task is faithful stewardship, not ultimate ownership." },
  { title: "Training and Formation", verse: "Proverbs 22:6", body: "Start children off on the way they should go, and even when they are old they will not turn from it (Proverbs 22:6). The Hebrew verb for train (chanak) is related to the dedication of a building — it carries the sense of initiating, preparing, and dedicating to a purpose. Christian parenting is fundamentally formational: not merely managing behavior but shaping the heart, the imagination, the loves, and the habits of the whole person. The Shema (Deuteronomy 6:4-9) envisions formation happening in the rhythms of daily life — when you sit at home, walk along the road, lie down, and get up." },
  { title: "The Prodigal Father", verse: "Luke 15:20", body: "While he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son (Luke 15:20). The parable of the prodigal son is among other things a theology of parenting: the father releases the son (no coercion), suffers in the son's absence (love cannot be indifferent), watches and waits (persistent hope), and runs when he returns (extravagant welcome). The father does not punish; he throws a party. This is not permissiveness — the son's return included genuine repentance. But the dominant note is grace, not condemnation. Christian parenting is shaped by a God who parents like this." },
  { title: "Discipline and Love", verse: "Hebrews 12:10-11", body: "God disciplines us for our good, in order that we may share in his holiness (Hebrews 12:10). Proverbs uses the word musar (discipline, instruction, correction) to describe parental formation — the same word used for God's discipline of Israel. Discipline in Scripture is not primarily punitive but formational — it is the loving imposition of limits and consequences that form character. Hebrews makes God's discipline of his children the model for human parental discipline. The aim is never punishment for its own sake but formation toward holiness." },
  { title: "The Limits of Parental Influence", verse: "Romans 9:16", body: "It does not depend on human desire or effort, but on God's mercy (Romans 9:16). Faithful Christian parents raise children who do not follow Christ. Unfaithful parents raise children who do. The covenant context provides important categories (children of believers receive covenant signs and blessings), but salvation is ultimately God's work, not parental technique. This is both humbling and liberating: you are responsible for faithfulness, not outcomes. Guilt over adult children's choices often rests on a theology of parental omnipotence that Scripture does not support. Pray, love, stay present, and release control of what you never controlled." },
];

const CHALLENGES = [
  { o: "Parenting Out of Fear", desc: "Fear-driven parenting — of the culture, of failure, of what others think — produces either overprotection or performance. The child becomes the parent's project rather than their own person.", response: "Let your theology of God's sovereignty shape your parenting posture. You are not responsible for controlling every outcome — you are responsible for faithful presence, honest relationship, and pointing your child toward Jesus. Fear is a bad master; love is a better one." },
  { o: "Using Children for Identity", desc: "When a parent's sense of self-worth is tied to the child's performance — academically, athletically, spiritually — the parent becomes controlling and the child becomes an extension rather than a person.", response: "Root your identity in Christ, not in your parenting outcomes. Your worth is not contingent on whether your child becomes a model Christian. This freedom actually enables you to love your child as they are rather than as you need them to be." },
  { o: "Inconsistency in Discipline", desc: "Inconsistent discipline — rules that change with mood, consequences that are threatened but not followed through, escalating emotional reactions — creates anxiety in children and teaches that the parent's word cannot be trusted.", response: "Simple, clear, followed-through expectations communicate love and security. You do not need elaborate discipline systems — you need consistency. What you say, mean. What you commit to, do. Your child's security grows from reliable structure." },
  { o: "Neglecting the Heart Behind Behavior", desc: "Behavior management can produce outward compliance without inward change — children who perform the right actions for wrong reasons. This produces either rebellion (when no longer under parental control) or Pharisaism (when the performance becomes its own end).", response: "Ask about motivation, not just action. Draw out what was going on inside when your child did what they did. The goal is not good behavior but a transformed heart — only the Spirit can ultimately do that work, but you can cooperate by addressing the heart rather than just the behavior." },
  { o: "Failing to Model What You Preach", desc: "Children notice the gap between what parents profess and how parents live. A parent who demands honesty but lies, who talks about forgiveness but holds grudges, or who professes faith but has no prayer life is teaching by example — and the example contradicts the instruction.", response: "Your life is your most powerful curriculum. Let your children see you read Scripture, pray, confess your own failures, forgive, and be genuinely moved by what you claim to believe. The gap between your stated faith and your visible life will be noticed — and will form your children one way or another." },
];

const PARENTING_VOICES = [
  {
    id: "tripp_tedd",
    name: "Tedd Tripp",
    era: "20th-21st century",
    context: "Shepherding a Child's Heart (1995); pastor and school administrator",
    bio: "Tedd Tripp's Shepherding a Child's Heart became one of the most influential books on Christian parenting in the evangelical world. Its central argument is that most parenting — Christian parenting included — focuses on behavior management rather than heart transformation. You can train a child to behave correctly while their heart remains unchanged. Biblical parenting, Tripp argues, addresses the heart: why is the child doing what they are doing? What does this reveal about what they love and worship?",
    quote: "You must make your goal not just to correct misbehavior but to understand and address the heart that drives the behavior.",
    contribution: "Tripp recovered the biblical category of the heart as the seat of human motivation. Rather than asking how to get a child to behave, he reframes the question as what does my child love, and how do I help them love the right things? This shifts the entire parenting project from behavior modification to discipleship — shaping the will and the affections, not just the actions.",
  },
  {
    id: "tripp_paul",
    name: "Paul David Tripp",
    era: "20th-21st century",
    context: "Age of Opportunity: A Biblical Guide to Parenting Teens (1997); counselor and author",
    bio: "Paul Tripp applied the same heart-centered framework specifically to adolescence. Age of Opportunity challenges the popular narrative that the teenage years are something to survive. Tripp argues that adolescence is one of the most fertile seasons for genuine formation — precisely because teenagers ask the questions (about identity, meaning, authority, and God) that most adults have stopped asking. The parent who engages these questions rather than managing or suppressing them has an extraordinary opportunity.",
    quote: "The teen years are not a problem to manage — they are a God-given window of opportunity that will never come again.",
    contribution: "Tripp reframed the teenage years from a nightmare parents endure to a season parents are uniquely positioned to enter. His central insight: teenagers need parents who are willing to stay in the conversation — who are not so defensive about their own authority that they cannot engage the genuine questions their children are raising about faith, identity, and the world.",
  },
  {
    id: "moore",
    name: "Russell Moore",
    era: "21st century",
    context: "The Storm-Tossed Family: How the Cross Reshapes the Home (2018); theologian and cultural commentator",
    bio: "Russell Moore's The Storm-Tossed Family is a theology of family shaped by the cross rather than the culture. Moore argues that the Christian family is not a haven from the storm of the surrounding culture — it is itself a place of struggle, sin, disappointment, and redemption. The cross is not what the family avoids; it is the shape the family is being conformed to. This liberates Christian families from the performance anxiety of appearing to have it together.",
    quote: "The family is not the destination. It is a signpost pointing to the Kingdom.",
    contribution: "Moore's great contribution is releasing Christian parents from the idolatry of the family. When the family becomes the ultimate concern — when parenting success becomes a measure of spiritual worth — the family collapses under the weight of what it cannot bear. The cross-shaped family is free to be imperfect, to suffer, and to receive grace, because its hope is not in itself but in the One who died for it.",
  },
  {
    id: "clarkson",
    name: "Sally Clarkson",
    era: "20th-21st century",
    context: "The Mission of Motherhood (2003); Desperate: Hope for the Mom Who Needs to Breathe (2013)",
    bio: "Sally Clarkson raised four children while co-founding Whole Heart Ministries and writing extensively about Christian motherhood. Her work pushes back against two equal and opposite failures: the secular demotion of motherhood as an unfulfilling career choice, and the performance-anxiety version of Christian motherhood that equates good parenting with a rigid curriculum. For Clarkson, motherhood is a sacred calling that requires presence, love, and ordinary faithfulness rather than professional technique.",
    quote: "A mother who is faithful over many years of small, seemingly invisible investments of love will have built a legacy that extends into eternity.",
    contribution: "Clarkson gave voice to the exhaustion and meaning of Christian motherhood simultaneously. She is honest about the difficulty — the loneliness, the relentlessness, the invisibility — while insisting on the profound significance of daily, unremarkable faithfulness. Her legacy is a generation of mothers who take their vocation seriously without being crushed by perfectionism.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "20th century",
    context: "The Abolition of Man (1943); The Chronicles of Narnia (1950-1956); essays on education and formation",
    bio: "C.S. Lewis never had children but wrote more profoundly about the formation of children than most parents do. The Abolition of Man is his most direct treatment: a critique of educational philosophy that strips the world of objective value and produces what he calls 'men without chests' — people who have lost the capacity for trained emotional response to truth, goodness, and beauty. The Chronicles of Narnia are, among other things, a curriculum of the moral imagination for children.",
    quote: "The task of the modern educator is not to cut down jungles but to irrigate deserts.",
    contribution: "Lewis's contribution to Christian parenting is the concept of moral imagination — the idea that children must be formed not just intellectually but in their capacity to perceive and respond to goodness and beauty. A child who has read Narnia has been given something that a thousand lessons on ethical behavior cannot produce: an interior vision of what good and evil look like, and a desire to be on the right side.",
  },
];

const PRACTICES = [
  { title: "Make Faith Visible at Home", desc: "The Shema's instruction is that faith be woven into the rhythms of daily life — meals, bedtime, morning, travel. Family devotions, dinner table conversations about faith, spontaneous prayer when something happens — these ordinary moments accumulate into a formative environment. You do not need a perfect curriculum; you need a visible faith.", icon: "🏡" },
  { title: "Pray for Your Children Specifically", desc: "Pray for your children by name, for their specific struggles, for the things you can see and the things you cannot. Record your prayers so that when your children are older, they can see what you asked God for on their behalf. The faithful parent is first a persistent intercessor.", icon: "🙏" },
  { title: "Tell Them Why You Believe", desc: "Children need to hear, in age-appropriate terms, why their parents believe Christianity is true — not just that it is good or traditional. Share your own story of faith, your own doubts, and how you have come to trust. A faith that is borrowed without being interrogated often does not survive adolescence.", icon: "💬" },
  { title: "Admit Your Own Failure", desc: "When you sin against your child — in anger, harshness, or injustice — confess it to them and ask forgiveness. This is perhaps the most powerful thing a parent can do: model what genuine repentance looks like. It also removes the illusion that parents are perfect and makes the gospel more credible — we all need forgiveness.", icon: "🌿" },
  { title: "Create Space for Honest Questions", desc: "A home where doubt and hard questions are welcomed is safer for a maturing faith than one where questioning is perceived as a threat to belief. When your child voices doubt, resist the urge to immediately correct. Ask what prompted the question. Take it seriously. A faith that survives questions is stronger than one that was never allowed to question.", icon: "🔍" },
  { title: "Release with Prayer and Hope", desc: "The work of parenting is ultimately the work of releasing — progressively giving more freedom, trusting the formation that has happened, and committing your child to God's care. The anxiety of release is real; so is the promise: the God who called you to faithfulness is also the God who pursues your child with a love greater than yours.", icon: "🕊️" },
];

type Tab = "theology" | "challenges" | "voices" | "practices" | "videos";

export default function ChristianParentingTheologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-parenting-theology_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_christian-parenting-theology_voice", "tripp_tedd");

  const voice = PARENTING_VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👨‍👩‍👧</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Christian Parenting</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Children are a heritage from the Lord — entrusted to us, not owned by us. Christian parenting is stewardship, formation, and ultimately the work of pointing a life toward God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "challenges" as const, label: "Challenges", icon: "⚠️" },
            { id: "voices" as const, label: "Voices", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "challenges" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The most common ways Christian parents undermine their own goals — and what Scripture-shaped alternatives look like.
              </p>
            </div>
            {CHALLENGES.map((c, i) => (
              <div role="button" tabIndex={0} key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === c.o ? null : c.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.o ? "−" : "+"}</span>
                </button>
                {expanded === c.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{c.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {PARENTING_VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{voice.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{voice.era}</span>
              </div>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{voice.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Christian parenting is less about technique and more about daily faithfulness — being present, being honest, being prayerful, and pointing your child toward the One who loves them more than you do.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "3FwbLGjCelM", title: "Parenting Is Gospel Ministry", channel: "Paul David Tripp", description: "Tripp makes the case that biblical parenting is not about behavior management but heart transformation — it is gospel ministry in the home." },
                  { videoId: "CXDyYvfAoOw", title: "This Is What Parenting Is", channel: "Paul David Tripp", description: "Tripp strips parenting down to its biblical essence: the call to shepherd your child's heart with the same grace God extends to you." },
                  { videoId: "MDlMI7B4a2A", title: "Parenting: 14 Gospel Principles — Session 1", channel: "Paul David Tripp", description: "The first session of Tripp's landmark parenting course, grounding the entire project in God's calling, the parent's identity, and the gospel's centrality." },
                  { videoId: "y9tux8kuQ7U", title: "Paul Tripp on Gospel-Shaped Parenthood", channel: "The Gospel Coalition", description: "An accessible TGC conversation with Paul Tripp on what it looks like to raise children under the cross rather than under pressure." },
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
      </main>
      <Footer />
    </div>
  );
}
