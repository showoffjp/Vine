"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Creation & Work","Work & the Fall","Calling & Vocation","Work as Worship","Rest & Sabbath","Work in Eternity","Journal","Videos"];

const CREATION_ITEMS = [
  { q: "The Cultural Mandate (Gen 1:28)", a: "'God blessed them and said to them, Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.' The cultural mandate is the original job description for humanity: take creation's raw potential and develop it, order it, steward it. This is not exploitation (dominium terrae) but the work of image-bearers: as God ordered chaos into cosmos, humanity orders creation into culture." },
  { q: "Adam's First Work (Gen 2:15–20)", a: "'The Lord God took the man and put him in the Garden of Eden to work it and take care of it.' The Hebrew: avad (work/serve) and shamar (keep/guard). These same verbs describe the Levitical priests' service in the tabernacle — gardening Eden is priestly work. God also brought the animals to Adam to name them: naming = authority + attention + knowledge. Work in creation is inherently dignified, priestly, and creative." },
  { q: "God as Worker (Gen 1–2)", a: "The creation narrative opens with God working: creating, separating, naming, evaluating ('it was good'), and resting. God is the original worker; human work is participation in and reflection of God's own creative activity. When humans make things — grow food, compose music, write code, build houses — they extend the creative work that God initiated. Work is not secular drudgery but sacred participation in ongoing creation." },
  { q: "The Imago Dei and Creativity", a: "The image of God (imago Dei) in Genesis 1 is royal and functional: humans are installed as vice-regents to represent God's rule over creation. Part of that image is creativity — the capacity to make new things, to see what does not yet exist and bring it into being, to solve problems, to order and beautify. Every field of human endeavor — science, art, law, commerce, medicine — is an exercise of the creative image of God." },
];

const FALL_ITEMS = [
  { q: "Work Becomes Toil (Gen 3:17–19)", a: "'Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life. It will produce thorns and thistles for you, and you will eat the plants of the field. By the sweat of your face you will eat bread, till you return to the ground.' The fall does not create work; it disorders it. Work that was pure vocation becomes mixed with frustration, resistance, and futility. The thorns and thistles are not just agricultural; they symbolize every form of resistance that human work encounters." },
  { q: "Work Becomes Idolatry", a: "One of the fall's effects is the tendency to make work an ultimate concern — to derive identity, worth, and security from professional achievement. The workaholic is not primarily lazy but spiritually disordered: treating work as the source of meaning that only God can provide. The idol of work promises significance, control, and admiration; it delivers exhaustion, anxiety, and the hollowness of achievements that do not satisfy the deepest hungers." },
  { q: "Work Becomes Exploitation", a: "The fall also introduces systemic distortion: the strong exploit the labor of the weak. The prophets are relentless on this — Isaiah, Amos, Micah, Jeremiah condemn those who withhold wages, crush workers, and extract wealth through unjust systems. James 5:4 echoes: 'Look! The wages you failed to pay the workers who mowed your fields are crying out against you.' A theology of work includes an account of economic justice." },
  { q: "Redemption Redeems Work", a: "The gospel does not simply rescue souls from the material world; it redeems the whole person including their work. Paul exhorts slaves to work wholeheartedly as for the Lord, not for human masters (Col 3:23). This is not endorsement of slavery but a transformation of work's motivation: working for an audience of One changes everything. The Reformers recovered vocation as a theological category: the cobbler hammering shoes to the glory of God is doing holy work." },
];

const CALLING_CARDS = [
  { icon: "📣", color: PURPLE, title: "The Latin Roots: Vocatio", text: "The English word 'vocation' comes from the Latin vocatio — calling, from vocare, to call. In medieval theology, 'vocation' was restricted to priestly or monastic life — the spiritual call. Luther's Reformation breakthrough: every legitimate occupation is a calling (Beruf). The farmer, the baker, the magistrate, the parent — all are called by God to their place. This democratized holiness: the monastery was not more sacred than the market." },
  { icon: "🎯", color: GOLD, title: "The Two Callings", text: "Most Reformed theologians distinguish a general calling (to faith, repentance, and discipleship — universal for all Christians) and a particular calling (to a specific role, place, and set of gifts — unique to each person). Frederick Buechner's definition: vocation is 'the place where your deep gladness and the world's deep hunger meet.' The particular calling is found at the intersection of gifting, opportunity, burden, and community confirmation." },
  { icon: "🔨", color: TEAL, title: "Calling vs. Career", text: "A career is primarily about personal advancement and financial security. A calling is primarily about service, contribution, and fidelity to God's design. Both can coexist, but they have different centers of gravity. The person whose work is primarily a calling will make different decisions about tradeoffs — they may take a less lucrative position because it better serves their calling; they will find meaning in the work itself, not only in its rewards. Calling is more robust in the face of setback than career." },
  { icon: "🌍", color: GREEN, title: "Calling and the Common Good", text: "Miroslav Volf argues in Work in the Spirit that Christian work contributes to the common good and anticipates the new creation — it has eschatological weight. Not every product of human work will survive the fire of judgment (1 Cor 3:13–15), but work done in love and wisdom participates in the coming kingdom. The lawyer who pursues justice, the nurse who tends the sick, the artist who creates beauty — all contribute to the common good that the kingdom will fulfill." },
];

const WORSHIP_ITEMS = [
  { q: "Colossians 3:23 — Working for the Lord", a: "'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.' This verse transforms mundane work into worship. The quality of attention, effort, and care brought to any task becomes an act of devotion when offered to God. Excellence in work is not secular striving but theological statement: I take this seriously because the Lord is my audience." },
  { q: "1 Corinthians 10:31 — Do It All for God's Glory", a: "'So whether you eat or drink or whatever you do, do it all for the glory of God.' The most ordinary acts — eating, drinking — can be done to God's glory. The totality (whatever you do) is staggering: no area of life is exempt from the possibility of glorifying God. Work is included: the accountant's ledger, the teacher's lesson plan, the engineer's calculations, the chef's knife — all can be instruments of God's glory when offered with gratitude and offered to God." },
  { q: "The Brother Lawrence Principle", a: "Nicholas Herman (Brother Lawrence, 1614–1691), a Carmelite lay brother assigned to kitchen work he disliked, discovered that dishwashing could be as holy as prayer. His practice: doing every task, however mundane, with the awareness of God's presence. His approach — the practice of the presence of God in all labor — became one of the most influential spiritual formation teachings in Christian history. The kitchen is as sacred as the chapel when God is the audience." },
  { q: "Work as Loving Neighbor", a: "Tim Keller argues in Every Good Endeavor that all legitimate work is a form of neighbor love: the garbage collector keeps the city healthy; the teacher builds human capacity; the musician cultivates joy and meaning; the scientist discovers truth. Work connects us to God's ongoing providential care for the world through human agency. When we work well, we participate in God's love for our neighbors — whether or not they know it." },
];

const REST_CARDS = [
  { icon: "🌅", color: GOLD, title: "The Sabbath as Proclamation (Gen 2:2–3)", text: "'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.' God's sabbath rest is not fatigue but completion and blessing. The seventh day has no evening — it is open-ended, ongoing. The Sabbath is an eschatological sign: it points to the completed creation and the coming rest of the kingdom." },
  { icon: "⛓️", color: RED, title: "Sabbath as Liberation (Deut 5:12–15)", text: "Deuteronomy's version of the Sabbath commandment grounds it not in creation (Exodus 20) but in liberation: 'Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand. Therefore the Lord your God has commanded you to observe the Sabbath day.' Sabbath is the weekly declaration: you are not a slave. Your identity is not defined by your productivity. The rhythm of rest is resistance to the dehumanizing logic of endless labor." },
  { icon: "🙏", color: TEAL, title: "Jesus as Lord of the Sabbath (Mark 2:27–28)", text: "'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath.' Jesus refuses to reduce Sabbath to legalism while affirming its purpose: it was made for humanity's flourishing, not as a burden. He is the fulfillment of Sabbath rest: 'Come to me, all you who are weary and burdened, and I will give you rest' (Matt 11:28). True Sabbath rest is ultimately Christological — resting in Christ's finished work." },
  { icon: "🏠", color: GREEN, title: "Sabbath as Spiritual Discipline", text: "In an overworked culture, Sabbath is prophetic countercultural practice. Regular, rhythmic disengagement from work declares: (1) I am not God — the world continues without my labor; (2) my worth is not my output; (3) there is more to life than production. The Sabbath creates space for delight, worship, relationships, and the restoration of the whole person. Walter Brueggemann: 'Sabbath is the practice of letting go of the world's restlessness and trusting in the creator God who alone provides.'" },
];

const ETERNITY_ITEMS = [
  { q: "Will We Work in the New Creation?", a: "The new creation is not a disembodied, passive state. Isaiah's vision of the new earth includes planting vineyards and eating their fruit, building houses and inhabiting them (Is 65:21–22). The New Jerusalem descends to earth; God dwells with humanity; the kings of the earth bring their glory (cultural products) into the city (Rev 21:24–26). The tree of life bears fruit every month; the river of life flows through the city. The new creation involves embodied, creative, meaningful activity — the perfection of work, not its elimination." },
  { q: "Work Freed from Futility", a: "Paul writes that creation was subjected to futility (Romans 8:20) but will be liberated from its bondage to decay. Work in the new creation will be work freed from thorns and thistles — the frustration, futility, and exploitation that the fall introduced. The skills, creativity, and love invested in human work will find their complete expression in an environment where work and worship are seamlessly integrated, where the maker's hand and the creator's intent are finally fully aligned." },
  { q: "Continuity Between This Work and the New Creation", a: "'If any man builds on this foundation using gold, silver, costly stones, wood, hay or straw, his work will be shown for what it is' (1 Cor 3:12–13). Not all human work will survive the eschatological fire — work done in selfishness, exploitation, or pride will not endure. But work done in love, faithfulness, and alignment with God's purposes has eschatological weight. The faithful teacher, the just judge, the healing physician — their work participates in a kingdom that will not be destroyed." },
];

const VIDEOS = [
  { videoId: "s6GbLBF5fDY", title: "Theology of Work – The Cultural Mandate Explained" },
  { videoId: "GZQP6v4nXts", title: "Vocation: What Is God's Calling for Your Life?" },
  { videoId: "w5G3ub0wlh8", title: "Sabbath Rest – Why Christians Need to Stop" },
];

export default function TheologyOfWorkGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_work_tab", "Overview");
  const [openCreate, setOpenCreate] = useState<number>(-1);
  const [openFall, setOpenFall] = useState<number>(-1);
  const [openEtern, setOpenEtern] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_work_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>⚒️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>A Theology of Work</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Christian Guide — from the garden's cultural mandate to the new creation's perfected labor: what it means to work for the glory of God in every vocation.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? GREEN : BORDER}`, background: activeTab === t ? `${GREEN}22` : CARD, color: activeTab === t ? GREEN : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview: Why a Theology of Work?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Most Christians spend more waking hours working than in any other activity, yet receive almost no theological formation for it. A theology of work asks: What does the gospel have to say about Monday morning? How is my nine-to-five related to the kingdom of God? Is secular work spiritually meaningful, or do I just endure it until I can do real ministry?</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The biblical answer is radical: work is not a secular necessity but a sacred calling. God is the original worker. Human creativity is image-bearing. The cultural mandate assigns humanity as steward-priests of creation. The fall disorders work but does not desacralize it. And the new creation restores work to its Edenic dignity — labor without futility, creativity without frustration, vocation without exploitation.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Foundation","Cultural mandate (Gen 1:28)"],["Model","God as the first worker"],["Disorder","The fall — toil and futility"],["Redemption","Vocation as calling"],["Practice","Work as worship (Col 3:23)"],["Goal","New creation — perfected labor"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Creation & Work */}
        {activeTab === "Creation & Work" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Work in Creation (Genesis 1–2)</h2>
            {CREATION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openCreate === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenCreate(openCreate === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openCreate === i ? "−" : "+"}</span>
                </button>
                {openCreate === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Work & the Fall */}
        {activeTab === "Work & the Fall" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Work After the Fall</h2>
            {FALL_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openFall === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenFall(openFall === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openFall === i ? "−" : "+"}</span>
                </button>
                {openFall === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Calling & Vocation */}
        {activeTab === "Calling & Vocation" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Calling and Vocation</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {CALLING_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Work as Worship */}
        {activeTab === "Work as Worship" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Work as Worship</h2>
            {WORSHIP_ITEMS.map((item, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: TEAL, fontWeight: 700, marginBottom: ".4rem" }}>{item.q}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{item.a}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Rest & Sabbath */}
        {activeTab === "Rest & Sabbath" && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Rest and the Sabbath</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {REST_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Work in Eternity */}
        {activeTab === "Work in Eternity" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Work in the New Creation</h2>
            {ETERNITY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openEtern === i ? GREEN : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenEtern(openEtern === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{openEtern === i ? "−" : "+"}</span>
                </button>
                {openEtern === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GREEN}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: GREEN, fontWeight: 800, marginBottom: ".75rem" }}>The Eschatological Weight of Monday Morning</div>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>'Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.' (1 Cor 15:58) — This resurrection verse, the climax of the resurrection chapter, makes every act of faithful work an eschatological act: not wasted, not futile, not secular drudgery, but labor in the Lord that carries eternal weight. Because bodies are raised and creation renewed, Monday morning work is not separated from kingdom work. It is kingdom work.</p>
            </div>
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your theology of work. Your notes are saved locally.</p>
            {[
              "What is your current relationship to work — is it an idol, a burden, or a calling? What would it look like to shift it?",
              "How does Sabbath practice (or its absence) reveal your actual theology of work and your trust in God's provision?",
              "If your specific work is a form of neighbor love, how does that reframe its meaning and the quality of attention you bring to it?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
