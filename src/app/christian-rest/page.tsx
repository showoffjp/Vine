"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Sabbath as Creation Pattern", verse: "Genesis 2:2-3", body: "'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done' (Genesis 2:2-3). God's rest on the seventh day is not a divine nap — it is the completion of creation, the crowning of the week. The Sabbath is written into the structure of time before the Law. It is a creation ordinance, not merely a Mosaic regulation." },
  { title: "Sabbath as Liberation", verse: "Deuteronomy 5:15", body: "'Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand and an outstretched arm. Therefore the Lord your God has commanded you to observe the Sabbath day' (Deuteronomy 5:15). In Deuteronomy, the Sabbath is grounded in the Exodus: you are no longer slaves defined by your productivity. Slaves cannot rest; free people can. The weekly Sabbath is an enacted declaration of freedom — a refusal to be defined by economic output." },
  { title: "Jesus as Lord of the Sabbath", verse: "Mark 2:27-28", body: "'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath' (Mark 2:27-28). Jesus does not abolish the Sabbath but fulfills and deepens it. He is himself the rest — 'Come to me, all you who are weary and burdened, and I will give you rest' (Matthew 11:28). The Hebrews letter builds on this: 'There remains, then, a Sabbath-rest for the people of God' (4:9) — a rest both present (entered by faith) and future (eschatological consummation)." },
  { title: "The Sabbath and the New Covenant", verse: "Colossians 2:16-17", body: "'Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day. These are a shadow of the things that were to come; the reality, however, is found in Christ' (Colossians 2:16-17). The Mosaic Sabbath was a shadow pointing to Christ. Christians are divided on whether weekly rest is still required: some hold that Sunday worship is the new covenant Sabbath (Lord's Day theology); others hold that every day is equally holy; most agree that rhythmic rest is a creation gift that remains wise and good." },
  { title: "Rest as Resistance", verse: "Matthew 6:25", body: "'Therefore I tell you, do not worry about your life' (Matthew 6:25). In a culture of productivity, busyness, and overwork, Sabbath is a countercultural act. It refuses the identity that says worth is produced. It challenges the anxiety that says if I stop, something will unravel. It protests the idolatry of achievement that can find no peace outside work. True rest is not merely physical cessation — it is an act of trust: God holds the world while I sleep." },
];

const PRACTICES = [
  { title: "Protect a Weekly Day", desc: "Choose a day — Sunday or another — and treat it as structurally different from the rest of the week. Not a day of inactivity but a day of ceasing: from work, from production, from the tasks that normally define your hours. The specific practice matters less than the consistent rhythm.", icon: "📅" },
  { title: "Cease from Productive Work", desc: "The Hebrew word shabbat means 'to cease.' The practice requires actual stopping — not doing work in your head while appearing to rest, not checking email once, not just doing different work. The discipline is in the stopping. What you cease from reveals what owns you.", icon: "🛑" },
  { title: "Rest the Body and the Mind", desc: "Physical rest — sleep, stillness, walks without destination, meals without schedule — addresses the body's need. Mental rest — choosing not to consume news, social media, or productive content — addresses the mind's need. Both are part of the gift. The Sabbath is bodily because we are embodied.", icon: "😴" },
  { title: "Celebrate Rather Than Simply Recuperate", desc: "The Jewish Sabbath tradition is festive — special meals, family gathering, joy. Christian Sabbath need not be grim or religiously heavy. Rest includes delight: food, friends, beauty, play. If your Sabbath produces only guilt about what you are not doing, the practice needs reorientation toward gratitude and pleasure.", icon: "🎉" },
  { title: "Worship as the Sabbath's Center", desc: "The gathered worship of the church on Sunday is not merely a nice addition to the day off — it is the Sabbath's orientation. Worship on the Lord's Day is both the appropriate culmination of the week and the proper launching point for the new week. Rest receives its meaning from the God in whose presence it is practiced.", icon: "🙏" },
  { title: "Practice Daily Mini-Sabbaths", desc: "Augustine: 'Our heart is restless until it rests in you.' The Sabbath's logic applies to the day as well: brief pauses, moments of prayer, transitions between activities, the regular interruption of the screen or the work — these mini-Sabbaths cultivate the habit of rest that makes the weekly Sabbath possible.", icon: "⏸️" },
];

const OBSTACLES = [
  { o: "Productivity Guilt", desc: "The feeling that stopping is irresponsible or indulgent — that there is always something more that should be done. This guilt is often the most significant barrier to Sabbath practice.", response: "Sabbath is not earned by completing everything — it is taken as a declaration that everything does not rest on you. Build it into the calendar as a commitment rather than a reward for finishing." },
  { o: "Digital Encroachment", desc: "Smartphones carry work, anxiety, comparison, and information-consumption into every space that once belonged to rest. Digital Sabbath — turning the phone off or away for a defined period — is increasingly necessary for genuine rest.", response: "Define a digital boundary for your Sabbath. Start with phones in a drawer during a meal. Grow from there. The discomfort of the first hour reveals how much the phone has colonized your capacity for presence." },
  { o: "Irregular Work Schedules", desc: "Shift workers, caregivers, clergy, and many others cannot observe Sunday as a day off. The principle of Sabbath is weekly; the day is not necessarily Sunday.", response: "Identify which day in your week functions as Sabbath. Protect it with the same intention Sunday-keepers give to Sunday. The rhythm matters more than the day." },
  { o: "Family Complexity", desc: "Parents of young children often find Sabbath a fantasy — children need care every day. Couples may disagree on what rest looks like.", response: "Negotiate a shared practice rather than waiting for a perfect one. Even an hour of protected rest, mutual support, and worship together advances the Sabbath principle. Imperfect rest is better than none." },
  { o: "The Guilt of Enjoyment", desc: "Some Christians have internalized a version of holiness that treats pleasure as suspect. Sabbath rest that includes genuine pleasure — food, creativity, recreation — feels impious.", response: "The Sabbath is called a 'delight' (Isaiah 58:13). God blessed it. Joy is the appropriate response to rest in the presence of the One who made the world good. Receive pleasure without guilt." },
];

const VOICES = [
  {
    id: "brueggemann",
    name: "Walter Brueggemann",
    work: "Sabbath as Resistance (2014)",
    color: GREEN,
    bio: "Old Testament scholar and Reformed pastor. Professor emeritus at Columbia Theological Seminary.",
    quote: "Sabbath is the dramatic, visible way in which we enact our resistance to the culture of commodity and of anxiety.",
    insight: "Brueggemann reads the Sabbath command in its original Exodus context: Israel was enslaved by a Pharaoh whose empire ran on endless production. The Sabbath was a direct repudiation of that economy. His central thesis: Sabbath is not a day off but an act of resistance — a refusal to let the market define your identity and schedule. His categories are political as well as spiritual: to Sabbath is to declare that the world is not run by commodity exchange but by the God who rested. This reading makes Sabbath immediately relevant in a 24/7 digital economy.",
  },
  {
    id: "dawn",
    name: "Marva Dawn",
    work: "Keeping the Sabbath Wholly (1989)",
    color: PURPLE,
    bio: "Christian educator and author. Wrote the most practically comprehensive modern Christian book on Sabbath.",
    quote: "Sabbath-keeping requires choice — to cease, to rest, to embrace, to feast — and it produces character.",
    insight: "Dawn structures Sabbath around four verbs: Ceasing (stopping work, productivity, anxiety), Resting (body, mind, and spirit), Embracing (values, people, eternity), and Feasting (music, beauty, food, community). Her approach is comprehensive: she addresses what to stop, what to do, and what posture to take. Her argument is that Sabbath shapes character over time — not just rest but virtue formation. People who Sabbath faithfully become different people than people who do not. The practice is not just recuperative but formative.",
  },
  {
    id: "peterson",
    name: "Eugene Peterson",
    work: "Working the Angles (1987); The Pastor (2011)",
    color: "#F59E0B",
    bio: "Presbyterian pastor for 29 years, translator of The Message. His Sabbath practice was integral to his ministry.",
    quote: "I am not on call. The doctrine of Sabbath is the theological basis for not being on call.",
    insight: "Peterson describes the Sabbath practice he and his wife Jan established during his long pastoral ministry: one day per week — usually Monday — when they were explicitly not available, not working, and not performing. He connected this to pastoral integrity: a pastor who cannot rest cannot lead a congregation toward rest. He frames Sabbath not as a personal preference but as a theological declaration — I am not indispensable; God is. His memoir 'The Pastor' describes the practice as one of the disciplines that preserved his ministry across decades when burnout would have been easy.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    work: "The Spirit of the Disciplines (1988)",
    color: "#3B82F6",
    bio: "Philosophy professor at USC and spiritual formation author. Framed spiritual disciplines as 'training for righteousness.'",
    quote: "Rest is not idleness. It is the cessation of our own activity to allow God to act.",
    insight: "Willard places rest and sleep among the spiritual disciplines, arguing that they are not interruptions to the spiritual life but practices that form it. His key move is to name rest as trust-in-action: when I sleep and rest, I am enacting belief that God governs the world and that my absence from productivity does not put anything at risk. He also addresses the spiritual disease of drivenness — the compulsion to achieve and produce driven by pride, insecurity, or ambition — as precisely the condition that Sabbath disrupts. Rest is the practice that makes human beings out of human doers.",
  },
  {
    id: "swoboda",
    name: "A.J. Swoboda",
    work: "Subversive Sabbath (2018)",
    color: "#EC4899",
    bio: "Pastor and theology professor. Argues that Sabbath is the most countercultural Christian practice available today.",
    quote: "We are the most exhausted, overworked, sleep-deprived generation in human history. Sabbath is the most subversive thing a Christian can do.",
    insight: "Swoboda wrote Subversive Sabbath after his own experience of burnout and his recovery through a Sabbath practice. His contribution is diagnostic: he names busyness as addiction, overwork as idolatry, and sleep deprivation as a spiritual problem. His argument is that Sabbath is not one spiritual discipline among many — it is the discipline that makes all others possible. A person who is chronically exhausted cannot pray, meditate, fast, or serve with any depth. Sabbath is the necessary foundation of the entire spiritual life. He also addresses the ecological dimension: the land has a Sabbath too (Leviticus 25), and our failure to rest is connected to our failure to let creation rest.",
  },
];

type Tab = "theology" | "obstacles" | "voices" | "practices" | "videos";

export default function ChristianRestPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-rest_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_christian-rest_voice", "brueggemann");

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>😴</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Rest and the Sabbath</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Rest is not laziness — it is creation ordinance, liberation from slavery, and resistance to the idolatry of productivity. The Sabbath is one of God's best gifts to his people and one of the church's most neglected disciplines.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "obstacles" as const, label: "Obstacles", icon: "⚠️" },
            { id: "voices" as const, label: "Voices on Rest", icon: "🗣️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The most common reasons Christians fail to practice meaningful rest — and how to move past them.
              </p>
            </div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.o ? null : o.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.o ? "−" : "+"}</span>
                </button>
                {expanded === o.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{o.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedVoice === v.id ? `${v.color}18` : CARD, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? v.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${voice.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{voice.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{voice.work}</div>
              <div style={{ background: BG, borderRadius: 8, padding: "8px 14px", marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>WHO THEY ARE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.bio}</p>
              </div>
              <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, marginBottom: 16 }}>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${voice.color}08`, border: `1px solid ${voice.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: voice.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>THEIR CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voice.insight}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Sabbath is not primarily about doing nothing — it is about doing the right things in the right posture. These {PRACTICES.length} practices shape a sustainable rhythm of rest.
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
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "fJnGJN6laqE", title: "The Ruthless Elimination of Hurry", channel: "John Mark Comer", description: "A conversation on Sabbath and rest as the antidote to the epidemic of hurry in modern life." },
              { videoId: "7LPFJVl5fak", title: "Rest: The Fourth Commandment", channel: "Tim Keller", description: "Tim Keller unpacks the theology of Sabbath rest and its ongoing significance for Christians today." },
              { videoId: "TuXTFlU-_To", title: "Christian Rest vs. the World's Rest", channel: "Desiring God", description: "John Piper contrasts the world's understanding of rest with the deep, God-centered rest the Bible offers." },
              { videoId: "ACZbpLkY8To", title: "Sabbath: A Radical Act of Resistance", channel: "Ligonier Ministries", description: "An exploration of how Sabbath-keeping is a countercultural, theologically grounded act of resistance to productivity culture." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
