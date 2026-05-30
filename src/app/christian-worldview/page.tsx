"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const NARRATIVE = [
  {
    act: "1",
    title: "Creation",
    subtitle: "The world as God made it",
    color: GREEN,
    verse: "Genesis 1:31",
    content: "In the beginning, God created. This is the first and most foundational worldview claim in Scripture: there is a God, he is the creator, and the creation is distinct from him. God is not the world (pantheism), the world is not self-created (naturalism), and matter is not evil (Gnosticism/Dualism). Creation is declared very good — not perfect in the sense of complete, but good in the sense of reflecting the goodness of its Maker. Human beings are made in the image of God (imago Dei) — not merely biological organisms but persons endowed with rationality, moral capacity, relational depth, and the unique dignity of bearing God's likeness. The implications are vast: human life is sacred, creation is valuable, work has meaning, beauty exists, and truth can be known.",
    questions: ["What kind of world is this?", "What is a human being?", "Where does morality come from?"],
  },
  {
    act: "2",
    title: "Fall",
    subtitle: "What went wrong",
    color: "#EF4444",
    verse: "Romans 5:12",
    content: "The fall of Genesis 3 is the biblical explanation for the obvious brokenness of the world. Adam and Eve's rebellion was not merely a moral failure but a cosmic one — a declaration of independence from God that fractured the relationships constitutive of creation's goodness: between humans and God (spiritual death), between humans (shame, blame, conflict), between humans and creation (toil and pain), and within human nature itself (desire disordered, will bent). Total depravity does not mean humans are maximally evil — it means every aspect of human nature has been distorted. Moral evil (the evil humans do), natural evil (suffering, disease, death), and structural evil (unjust systems, oppression) all flow from this fracture. No part of creation is unaffected.",
    questions: ["Why is the world broken?", "Why do humans consistently do what they know is wrong?", "Is evil an illusion or a real feature of reality?"],
  },
  {
    act: "3",
    title: "Redemption",
    subtitle: "What God is doing about it",
    color: PURPLE,
    verse: "John 3:16",
    content: "Redemption is not God's plan B but his plan A — determined before the foundation of the world (Ephesians 1:4). The entire arc of Old Testament history is the progressive unfolding of God's redemptive purpose: the call of Abraham, the Exodus, the covenant with David, the prophets' promise of a new covenant. All of this is preparation for the incarnation of God in Christ — the decisive cosmic event in which God himself enters the broken creation he made, bears its brokenness in his body, and defeats it from the inside. The resurrection is not merely a miracle that validates Jesus's identity; it is the first event of the new creation — the death of death, the beginning of the final restoration. The church is the community formed by this redemption and deployed to extend it.",
    questions: ["Can anything repair the damage?", "Does history have a purpose?", "Who is Jesus and why does he matter?"],
  },
  {
    act: "4",
    title: "New Creation",
    subtitle: "Where everything is going",
    color: "#F59E0B",
    verse: "Revelation 21:5",
    content: "The Christian story ends not with the destruction of creation but with its restoration. 'I am making all things new' (Revelation 21:5) — not all new things, but all things new. The new creation is not a disembodied spiritual realm but a renewed, perfected version of this creation. Resurrection bodies, a renewed earth, the city of God descending — these images in Scripture resist the Gnostic idea that salvation is escape from matter into spirit. The Christian hope is resurrection and restoration, not evacuation. This eschatological vision shapes present ethics: we care for creation, pursue justice, and build good things because the material world matters to God and will ultimately be redeemed.",
    questions: ["Is there hope?", "Does the present have permanent significance?", "What should we work for?"],
  },
];

const APPLICATIONS = [
  { domain: "Science", question: "How does a Christian engage science?", answer: "The Christian worldview is not anti-science — it invented modern science (Newton, Pasteur, Mendel, Faraday were all Christian). The conviction that creation is ordered, rational, and consistent is the foundation of scientific method. Where science and biblical interpretation appear to conflict, it is worth asking: am I interpreting the science correctly? Am I interpreting Scripture correctly? Both are possible errors. Young Earth Creationism, Old Earth Creationism, and Evolutionary Creationism are all positions held by serious Christians who affirm Scripture's authority.", color: "#3B82F6" },
  { domain: "Culture", question: "How does a Christian engage culture?", answer: "Four models: Transform (culture can be converted to Christian values — Christendom ideal), Oppose (culture is fundamentally hostile — separatist), Adapt (accommodate Christianity to culture — liberal theology), and Engage (be in culture, not of it — resident alien). The resident alien model, articulated by Hauerwas and Willimon, and the cultural engagement model of Abraham Kuyper ('not a square inch of creation where Christ does not say Mine') are the most influential contemporary frameworks.", color: "#10B981" },
  { domain: "Politics", question: "What does a Christian worldview mean for politics?", answer: "Christians should engage politically but with deep humility about which party platform best reflects the kingdom of God. The kingdom of God is not a political platform. The biblical commitments to life (from conception to natural death), justice for the vulnerable, care for creation, and protection of religious liberty cross contemporary party lines. A fully biblical political engagement will make both Republicans and Democrats uncomfortable — which is probably a sign of faithfulness.", color: "#EF4444" },
  { domain: "Suffering", question: "Why does God allow suffering?", answer: "The most honest Christian answer: we don't fully know. We know Scripture's partial answers: God can use suffering for formation (Romans 5:3-5), God is not the author of evil but permits it for reasons exceeding our comprehension, the cross demonstrates that God enters suffering rather than standing apart from it, and the resurrection promises that present suffering is not the final word. But Job's complaint is never fully resolved by argument — only by encounter (Job 38-42). The Christian response to suffering is not always an answer but always a presence.", color: PURPLE },
  { domain: "Meaning", question: "What gives life meaning?", answer: "The Westminster Shorter Catechism: the chief end of humanity is to glorify God and enjoy him forever. Not to achieve, acquire, or optimize. In a secular worldview, meaning is either constructed (existentialism) or an illusion (nihilism). In the Christian worldview, meaning is given — we are made for a purpose that exceeds what we choose for ourselves. This changes everything: our work has meaning beyond its outcomes, our relationships have weight beyond their utility, and our lives matter even when they are not impressive.", color: GREEN },
  { domain: "Truth", question: "Is truth objective?", answer: "The Christian worldview is committed to objective truth — not as a cultural artifact or power construct, but as a feature of reality grounded in the character of a truthful God who made a rational creation. Jesus claims to be the truth (John 14:6), not a truth among many. This is not intellectual arrogance but theological confidence: if God exists, and if he has spoken, and if he has created a world with a real order, then there is a truth about that world that our claims can either correspond to or contradict.", color: "#F59E0B" },
];

const THINKERS = [
  {
    id: "kuyper",
    name: "Abraham Kuyper",
    era: "1837 – 1920",
    context: "Dutch Reformed theologian and Prime Minister of the Netherlands",
    bio: "Abraham Kuyper was simultaneously a theologian, journalist, educator, and politician — which made him the ideal person to articulate a comprehensive Christian worldview. His Stone Lectures at Princeton in 1898 launched what became known as the neo-Calvinist worldview tradition. Kuyper argued that Christianity is not a private religion for individual souls but a comprehensive life-system (Weltanschauung) that addresses every domain of human existence. His doctrine of sphere sovereignty — that God has created distinct spheres of authority (family, state, church, education, labor) each with its own integrity — became the basis for a distinctively Christian approach to politics, education, art, and science.",
    quote: "There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry, Mine!",
    contribution: "Kuyper's legacy is the most comprehensive framework for Christian cultural engagement in the Protestant tradition. His insistence that grace restores nature — rather than escaping it — means that the Christian's task is to reclaim every domain of creation for its proper purpose under God. His influence is felt in the Reformed tradition's extraordinary engagement with art, politics, education, and scholarship. Institutions like Calvin University and the many Christian universities and think tanks in the neo-Calvinist tradition trace their DNA to Kuyper's vision.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898 – 1963",
    context: "Oxford and Cambridge scholar, apologist, Mere Christianity and The Abolition of Man",
    bio: "C.S. Lewis converted from atheism to theism in 1929 and to Christianity in 1931, and spent the next 30 years making the intellectual and imaginative case for the Christian worldview with a clarity and literary power unequaled in the twentieth century. Mere Christianity distills the moral argument for God and the logic of the Incarnation into accessible prose. The Abolition of Man argues that the rejection of objective value — what Lewis calls the Tao — produces not liberated individuals but 'men without chests.' His Chronicles of Narnia embed the Christian worldview in story for those who might resist it in argument. His autobiography Surprised by Joy traces the logic of his conversion from longing for transcendence to finding its source.",
    quote: "I believe in Christianity as I believe that the Sun has risen — not only because I see it, but because by it I see everything else.",
    contribution: "Lewis demonstrated that the Christian worldview is not intellectually embarrassing but intellectually illuminating: it provides the best account of the realities we all know — the existence of moral obligation, the universality of longing, the consistency of the physical world, the reality of beauty and meaning. His apologetics work, which has sold hundreds of millions of copies, shaped more adult conversions to Christianity in the twentieth century than perhaps any other single body of work.",
  },
  {
    id: "schaeffer",
    name: "Francis Schaeffer",
    era: "1912 – 1984",
    context: "American theologian, founder of L'Abri Fellowship, Switzerland",
    bio: "Francis Schaeffer founded L'Abri ('the shelter') in the Swiss Alps in 1955 as a community where intellectually troubled young people from across Europe could come to wrestle with the big questions. Schaeffer engaged secular philosophy, art, and culture with a rigor that most evangelical Christianity had abandoned, tracing the internal logic of secular thought from the Renaissance through the Enlightenment to modernism's collapse. His How Should We Then Live? (1976) is a Christian philosophy of Western history and culture. The God Who Is There and He Is There and He Is Not Silent articulate a Christian epistemology: God is there, and he has not been silent — and this is the precondition for both rationality and morality.",
    quote: "The Christian life must be totally and absolutely and without any question honest. And it must cover all of life — not just the religious part.",
    contribution: "Schaeffer showed a generation of evangelicals that Christian faith could and must engage serious intellectual questions — not just devotional ones. His analysis of how secular thought produces meaninglessness and irrationality influenced the entire evangelical intellectual renewal of the late twentieth century. His activism on abortion (Whatever Happened to the Human Race?) also mobilized evangelical political engagement in the 1970s. L'Abri continues to operate internationally as a center for intellectually serious Christian engagement.",
  },
  {
    id: "sire",
    name: "James W. Sire",
    era: "1933 – 2018",
    context: "Author of The Universe Next Door (1976), the standard worldview textbook",
    bio: "James Sire spent his career as an editor at InterVarsity Press and professor, and The Universe Next Door became the standard text for worldview analysis in Christian colleges and universities for 50 years. Sire defined a worldview as 'a commitment, a fundamental orientation of the heart, that can be expressed as a story or in a set of presuppositions about the basic constitution of reality, and that provides the foundation on which we live and move and have our being.' He then systematically analyzed the internal logic of seven major worldviews — Christian theism, deism, naturalism, nihilism, existentialism, Eastern pantheism, and New Age — showing how each answers the basic questions every worldview must address.",
    quote: "A worldview is not just a philosophy about life. It is the way life is actually lived — in every decision, every relationship, every moment of suffering and celebration.",
    contribution: "Sire created the framework through which millions of Christians have learned to think about worldview analysis. His seven questions (What is prime reality? What is a human being? What happens at death? Why is it possible to know anything? How do we know right from wrong? What is the meaning of human history? What personal, life-orienting core commitments flow from these answers?) became the standard taxonomy for worldview comparison in Christian education.",
  },
  {
    id: "taylor",
    name: "Charles Taylor",
    era: "Born 1931",
    context: "Canadian Catholic philosopher, A Secular Age (2007)",
    bio: "Charles Taylor's A Secular Age is the most important philosophical analysis of Western secularism in a generation — and essential reading for any Christian who wants to understand the world they live in. Taylor asks: how did Western society move from a world in 1500 where belief in God was virtually mandatory to a world in 2000 where it is just one option among many? His answer is not that science disproved religion but that a new 'social imaginary' emerged — a new background sense of what is real and possible that makes religion optional rather than obvious. His concept of the 'buffered self' (the modern individual insulated from spiritual forces and transcendent demands) versus the 'porous self' (the pre-modern individual open to sacred power from outside) is essential for understanding secularization.",
    quote: "The buffered self is the dominant ideal in Western modernity — a self that defines its own identity, independent of transcendent order, no longer vulnerable to the spirit world.",
    contribution: "Taylor's analysis helps Christians understand why the gospel feels implausible to secular Westerners — not because of intellectual arguments but because of a different background sense of what kind of world we live in. His work has shaped a generation of Christian public theologians who seek to engage secular culture at the level of its deep assumptions rather than just its surface arguments. A Secular Age is slow going but richly rewards the effort.",
  },
];

type Tab = "narrative" | "applications" | "thinkers";

export default function ChristianWorldviewPage() {
  const [activeTab, setActiveTab] = useState<Tab>("narrative");
  const [selectedAct, setSelectedAct] = useState<string | null>(null);
  const [selectedThinker, setSelectedThinker] = useState("kuyper");

  const act = NARRATIVE.find(n => n.act === selectedAct);
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌐</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Christian Worldview</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            A worldview is the framework through which we interpret everything. The Christian worldview is grounded in a four-act story — Creation, Fall, Redemption, New Creation — and has implications for every domain of human life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "narrative" as const, label: "Four Acts", icon: "📖" },
            { id: "applications" as const, label: "Applications", icon: "🌍" },
            { id: "thinkers" as const, label: "Thinkers", icon: "🧠" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "narrative" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Every worldview answers the same basic questions: What is real? What is a human being? What has gone wrong? What is the solution? What is the goal? The Christian answers are grounded in a four-act narrative — the grand story of Scripture.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {NARRATIVE.map(n => (
                <button key={n.act} onClick={() => setSelectedAct(selectedAct === n.act ? null : n.act)}
                  style={{ flex: "1 1 160px", background: selectedAct === n.act ? `${n.color}20` : CARD, border: `1px solid ${selectedAct === n.act ? n.color : BORDER}`, borderRadius: 12, padding: "18px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: n.color, marginBottom: 4 }}>Act {n.act}</div>
                  <div style={{ color: n.color, fontWeight: 800, fontSize: 16 }}>{n.title}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{n.subtitle}</div>
                </button>
              ))}
            </div>

            {act && (
              <div style={{ background: CARD, border: `1px solid ${act.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                  <div style={{ fontSize: 40, fontWeight: 900, color: act.color, lineHeight: 1, flexShrink: 0 }}>{act.act}</div>
                  <div>
                    <h2 style={{ color: act.color, fontWeight: 900, fontSize: 24, margin: "0 0 4px" }}>{act.title}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{act.subtitle}</div>
                  </div>
                </div>

                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, marginBottom: 16, display: "inline-block" }}>{act.verse}</span>

                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 18, marginTop: 10 }}>{act.content}</p>

                <div style={{ background: `${act.color}08`, border: `1px solid ${act.color}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: act.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>WORLDVIEW QUESTIONS THIS ANSWERS</div>
                  <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                    {act.questions.map((q, i) => (
                      <li key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 2 }}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "applications" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A worldview is not merely theoretical — it shapes how we live, work, and engage with the world around us. Here is how the Christian worldview intersects the most contested domains of contemporary life.
              </p>
            </div>
            {APPLICATIONS.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ background: `${a.color}15`, color: a.color, padding: "3px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>{a.domain}</span>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: 0 }}>{a.question}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{a.answer}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {THINKERS.map(t => (
                <button key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedThinker === t.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedThinker === t.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{thinker.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{thinker.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{thinker.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{thinker.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
