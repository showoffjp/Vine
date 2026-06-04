"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Friendship Is a Gift of Creation, Not Just Need", verse: "Genesis 2:18", body: "'It is not good for the man to be alone' (Genesis 2:18). God declared this before the Fall — not as a consequence of sin but as a feature of his good creation. Humans were made for community. The desire for friendship is not weakness or codependency — it is the correct desire of creatures made in the image of a God who is himself relational (the Trinity)." },
  { title: "Jonathan and David: The Biblical Model", verse: "1 Samuel 18:1-4", body: "'The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul' (1 Sam. 18:1). Their friendship is the richest portrait of friendship in Scripture — marked by covenant commitment ('sworn friendship'), self-sacrifice (Jonathan gave David his own robe, armor, sword), and loyalty through profound personal cost. Jonathan risked his father's wrath to protect David. This is the biblical standard: friendship that costs something." },
  { title: "Iron Sharpens Iron", verse: "Proverbs 27:17", body: "'As iron sharpens iron, so one person sharpens another' (Proverbs 27:17). Biblical friendship is not merely comfort — it is transformation. The image of iron sharpening iron includes friction. Real friendship includes honest confrontation of blind spots, weakness, and sin. A friend who only affirms is not a friend; they are a flatterer. The person willing to tell you the hard truth at cost to the relationship is the one who loves you." },
  { title: "Jesus Called His Disciples Friends", verse: "John 15:13-15", body: "'Greater love has no one than this: to lay down one's life for one's friends... I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends' (John 15:13, 15). Jesus elevates the disciples from servants to friends — a stunning declaration. Friendship with Christ is the model and the source of all other friendship. He lays down his life; we lay down ours. We know his secrets (his word); we share ours with each other." },
  { title: "Chosen Community: Not Just Family and Colleagues", verse: "Romans 12:10", body: "'Be devoted to one another in love. Honor one another above yourselves' (Romans 12:10). The Greek word is philostorgos — a compound of the love of family and the love of affection. The NT describes the church as a chosen family, not merely an organization. Christians are called to a level of devotion typically reserved for blood relatives. This is intentional, chosen, and covenantal." },
];

const OBSTACLES = [
  { ob: "Busyness", desc: "Friendship requires time — not efficient time, but unhurried time. The modern tendency to optimize every hour is antithetical to the slow, meandering conversations where friendship deepens.", remedy: "Block time for unstructured relationship. Say no to productive commitments that crowd out relational ones. Eat meals with people rather than alone." },
  { ob: "Mobility and Transition", desc: "Moving for jobs, school, and life stages breaks friendship networks repeatedly. Building deep community takes years — and is repeatedly interrupted.", remedy: "Grieve the loss of previous friendships; make genuine effort to initiate in new communities. Commit to a church in each place you live — it creates immediate, structured community." },
  { ob: "Screen-Mediated Relationships", desc: "Digital connection creates the feeling of friendship without its substance. Following someone on social media is not friendship.", remedy: "Distinguish between connections and friendships. Digital tools can supplement but cannot replace in-person, embodied, shared-life relationship." },
  { ob: "Fear of Rejection", desc: "Initiating friendship requires vulnerability — and vulnerability risks rejection. The protection strategy of staying acquaintance-level prevents the wound but also prevents the depth.", remedy: "Invest in 2-3 people rather than maintaining 20 acquaintances. Accept that some initiatives won't be reciprocated, and that's not a verdict on your worth." },
  { ob: "The Friendship Gap After College", desc: "Adult friendship is structurally harder than college or childhood friendship — it is no longer ambient and must be deliberately pursued.", remedy: "Join a small group. Volunteer consistently in one place. Invite people proactively. Host a dinner. Be the one who initiates more than you feel you should have to." },
];

const PRACTICES = [
  "Initiate more than you think is fair — someone has to go first",
  "Share something vulnerable before it's comfortable",
  "Show up when it's inconvenient — this is what distinguishes friend from acquaintance",
  "Ask deeper questions: not 'How are you?' but 'What's actually hard right now?'",
  "Remember and follow up — check in on what someone shared last time you talked",
  "Do life together, not just scheduled meetings — invite people into ordinary things",
  "Celebrate genuinely — take time to mark milestones and victories in others' lives",
  "Be honest even when it costs you — a friend who won't tell the truth isn't one",
  "Pray for your friends by name and tell them you did",
  "Commit to at least one friendship long-term through all transitions",
];

const VOICES_FRIENDSHIP = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford don, author; The Four Loves (1960)",
    bio: "Lewis's The Four Loves devotes an entire chapter to friendship (philia) — arguing it is the least biological and most spiritual of the loves. He describes it as born in the moment when two people discover a shared insight or passion: 'What! You too?' He laments that modernity undervalues friendship because it produces nothing economically useful. For Lewis, a good friendship enlarges the soul in ways no other relationship can, because each friend sees aspects of the others that no one else sees.",
    quote: "Friendship is unnecessary, like philosophy, like art, like the universe itself (for God did not need to create). It has no survival value; rather it is one of those things which give value to survival.",
    contribution: "Made friendship philosophically and spiritually serious at a time when modern culture had reduced it to networking. The Four Loves remains the definitive Christian account of friendship and the one text most likely to make a reader pursue deeper friendship."
  },
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "1906-1945",
    context: "German pastor; Life Together (1939); martyred by the Nazis",
    bio: "Life Together was written out of Bonhoeffer's experience leading the illegal Finkenwalde seminary, where pastors lived in intentional community under the Nazi regime. The book describes what genuine Christian community requires: common prayer, shared meals, confession, silence, service. Bonhoeffer was clear that Christian community is based not on human affinity or personality but on the fact that Christ stands between each member. We love each other not for who we are but because of who Christ is.",
    quote: "He who loves his dream of a community more than the Christian community itself becomes a destroyer of the latter, even though his personal intentions may be ever so honest and earnest and sacrificial.",
    contribution: "Grounded Christian community in Christology rather than sentimentality. His warning against 'the dream of community' — the fantasy of what friendship should be — that destroys actual community is the most important caution for anyone who has been hurt by church or friendship."
  },
  {
    id: "hill",
    name: "Wesley Hill",
    era: "b. 1981",
    context: "Anglican scholar; Spiritual Friendship (2015); professor at Trinity School for Ministry",
    bio: "Wesley Hill writes as a gay celibate Christian who has thought more carefully about friendship than almost anyone in contemporary evangelical scholarship. Spiritual Friendship argues that the church has impoverished itself by treating friendship as a lesser relationship — inferior to marriage and family — when the historic church and Scripture itself treated deep covenantal friendship as one of the highest goods. He recovers figures like Aelred of Rievaulx who wrote about the spirituality of same-sex Christian friendship.",
    quote: "The church's task is not to make gay people straight but to make all people holy — and that includes fostering the kinds of deep, covenantal friendships that give gay Christians (and many straight ones) a real home.",
    contribution: "Recovered spiritual friendship as a theological category, drawing on patristic and medieval sources that modern evangelicalism had ignored. His work has been especially important for gay Christians navigating celibacy, but its implications reach every Christian who wants deeper community."
  },
  {
    id: "tripp",
    name: "Paul David Tripp",
    era: "b. 1950",
    context: "Pastor; Instruments in the Redeemer's Hands (2002)",
    bio: "Tripp's Instruments in the Redeemer's Hands reframes friendship as a vehicle for God's sanctifying work. His argument: everyone is being shaped by something, and the people closest to you are God's primary instruments for your transformation. This means biblical friendship is intentional about speaking truth — not just enjoying each other but helping each other become who God calls them to be. The biblical language he uses is 'speaking the truth in love' (Ephesians 4:15): friendship that has enough love to be honest and enough honesty to be truly loving.",
    quote: "We are all in the middle of our own stories. None of us have arrived. We all need people who love us enough to get in our faces and refuse to let us settle for less than God intends.",
    contribution: "Made friendship missional — not merely pleasant but purposefully formative. His framework of 'speaking truth in love' gives ordinary Christians language for the kind of honest, accountable friendship that produces genuine change."
  },
  {
    id: "aelred",
    name: "Aelred of Rievaulx",
    era: "1110-1167",
    context: "Cistercian abbot; Spiritual Friendship (c. 1160)",
    bio: "Aelred's Spiritual Friendship, modeled on Cicero's De Amicitia, is the most sophisticated treatment of Christian friendship in the medieval tradition. Writing from a monastic community, he argues that spiritual friendship — rooted in virtue and oriented toward God — is not merely a human good but a path to union with Christ. His famous line: 'God is friendship.' The ascent from human friendship to friendship with God is not a distraction from spiritual life but one of its primary pathways.",
    quote: "What more sublime can be said of friendship, what more true, what more profitable, than that it ought to begin in Christ, continue in Christ, and be perfected in Christ?",
    contribution: "Established the theological framework for understanding deep friendship as a path to God rather than a distraction from him. His work, recovered by Wesley Hill and others, is reshaping how evangelicals think about Christian community."
  }
];

interface Friend {
  id: string;
  name: string;
  notes: string;
  lastContact: string;
}

const SEED: Friend[] = [
  { id: "1", name: "Marcus", notes: "Going through a career transition. Pray for him. Check in monthly.", lastContact: "2026-05-10" },
  { id: "2", name: "Sarah & Tom", notes: "New baby in March. Could use a meal or help with kids.", lastContact: "2026-04-28" },
  { id: "3", name: "James", notes: "Old college friend — we talk every few months. Don't let that slide.", lastContact: "2026-03-15" },
];

export default function FriendshipPage() {
  const [activeTab, setActiveTab] = usePersistedState<"theology" | "voices" | "obstacles" | "practice" | "videos">("vine_friendship_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_friendship_voice", "lewis");
  const voiceItem = VOICES_FRIENDSHIP.find(v => v.id === selectedVoice)!;
  const [friends, setFriends] = useState<Friend[]>(() => {
    try { const s = localStorage.getItem("vine_friendship_list"); return s ? JSON.parse(s) : SEED; } catch { return SEED; }
  });
  const [form, setForm] = useState<{ name: string; notes: string }>(() => {
    try { const s = localStorage.getItem("vine_friendship_draft"); return s ? JSON.parse(s) : { name: "", notes: "" }; } catch { return { name: "", notes: "" }; }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_friendship_draft", JSON.stringify(form)); } catch {}
  }, [form]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_friendship_list", JSON.stringify(friends)); } catch {} }, [friends]);

  const addFriend = () => {
    if (!form.name) return;
    setFriends(prev => [{ id: Date.now().toString(), ...form, lastContact: new Date().toISOString().split("T")[0] }, ...prev]);
    setForm({ name: "", notes: "" });
    setShowForm(false);
  };

  const touchFriend = (id: string) => {
    setFriends(prev => prev.map(f => f.id === id ? { ...f, lastContact: new Date().toISOString().split("T")[0] } : f));
  };

  const daysSince = (date: string) => Math.floor((Date.now() - new Date(date + "T12:00:00").getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🤝</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Friendship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'It is not good for man to be alone.' Friendship is not a luxury — it is a creation-given need, a spiritual discipline, and a witness to a watching world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "obstacles" as const, label: "Obstacles", icon: "🚧" },
            { id: "practice" as const, label: "My Friends", icon: "🤝" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES_FRIENDSHIP.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{voiceItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voiceItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "obstacles" && (
          <div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{o.ob}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{o.desc}</p>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>REMEDY</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.remedy}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Practices of Friendship</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {PRACTICES.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: PURPLE, flexShrink: 0, marginTop: 7 }} />
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: 0 }}>Friends to Invest In</h3>
              <button type="button" onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add Friend
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} aria-label="Friend's name" placeholder="Friend's name"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, marginBottom: 10, boxSizing: "border-box" }} />
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} aria-label="Prayer needs, what to follow up on, how you can serve them..." placeholder="Prayer needs, what to follow up on, how you can serve them..."
                  style={{ width: "100%", minHeight: 70, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }} />
                <div role="button" tabIndex={0} style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button type="button" onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button type="button" onClick={addFriend} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add</button>
                </div>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {friends.map(f => {
                const days = daysSince(f.lastContact);
                const color = days > 60 ? "#EF4444" : days > 30 ? "#F59E0B" : GREEN;
                return (
                  <div key={f.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{f.name}</div>
                        <div style={{ color: color, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{days === 0 ? "Contacted today" : `${days} days since last contact`}</div>
                        {f.notes && <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{f.notes}</p>}
                      </div>
                      <button type="button" onClick={() => touchFriend(f.id)}
                        style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${GREEN}50`, background: `${GREEN}15`, color: GREEN, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0, marginLeft: 12 }}>
                        Mark Contact
                      </button>
                    </div>
                  </div>
                );
              })}
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
                  { videoId: "8Tc4VIQrXdE", title: "Friendship", channel: "Timothy Keller", description: "Keller preaches on the biblical vision of friendship — why wise people are skilled at choosing, forging, and keeping deep friendships, and what the gospel makes possible." },
                  { videoId: "i9iUYsQuY3w", title: "Spiritual Friendship", channel: "Timothy Keller", description: "Keller explores how the gospel of Jesus Christ creates and calls us into spiritual friendships — a category the modern church has largely lost." },
                  { videoId: "poswQjoLG6I", title: "Real Friendship and the Pleading Priest", channel: "Timothy Keller", description: "Keller on what it looks like when Christ's love shapes our friendships — the costly, loyal, truthful love that distinguished David and Jonathan." },
                  { videoId: "oNkFUdo7P8o", title: "Jesus's Death as an Act of Friendship", channel: "Tim Keller / The Gospel Coalition", description: "Keller meditates on John 15:13 — 'greater love has no one than this' — and what it means that Jesus calls his disciples friends rather than servants." },
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
