"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s !== null) setValue(JSON.parse(s)); } catch {}
  }, [key]);
  const set = useCallback((v: T) => { setValue(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key]);
  return [value, set] as const;
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Theology of Church","One Another","Friendship","Church Discipline","Small Groups","Kingdom Foretaste","Journal","Videos"];

const THEOLOGY_ITEMS = [
  { q: "The Church as Body of Christ (1 Cor 12)", a: "Paul's dominant metaphor for the church is a body — one entity with many members. Each member has a different function; all are necessary; none is self-sufficient. 'The eye cannot say to the hand, I don't need you.' (12:21). The body imagery destroys both individualism (I don't need others) and uniformity (everyone must be the same). The church is interdependent diversity — a community where weakness is indispensable and no member can flourish in isolation." },
  { q: "The Church as New Humanity (Ephesians 2:14–16)", a: "'For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility... His purpose was to create in himself one new humanity out of the two, thus making peace.' The church is not merely a gathering of individuals with similar beliefs but a new social reality: the first community in history defined not by ethnicity, class, sex, or nationality but by union with Christ. This is eschatological: the church is a preview of the multiethnic kingdom." },
  { q: "The Church as Family (Galatians 6:10; 1 Tim 5:1–2)", a: "Paul consistently uses family language for the church: brothers and sisters (adelphoi), fathers, mothers, children. 'Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.' In honor-shame cultures, family was the basic unit of belonging and obligation. The church as family means: shared resources, shared suffering, protection of the vulnerable, and relationships that cross every social boundary." },
  { q: "The Church as Temple of the Holy Spirit (1 Cor 3:16; Eph 2:19–22)", a: "'Don't you know that you yourselves are God's temple and that God's Spirit dwells in your midst?' Note: the 'you' is plural — the temple is the community, not just the individual. Ephesians 2: the whole building is joined together and rises to become a holy temple. The church is the place where God dwells on earth — not a building but a people. This makes the church's unity, holiness, and love not optional decorations but the essential nature of what the church is." },
];

const ONE_ANOTHER_CARDS = [
  { icon: "❤️", color: RED, title: "Love One Another (John 13:34–35)", text: "'A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.' The new command's newness: 'as I have loved you' sets the standard at the cross. Agape love for one another is both the identity marker of the church and its primary evangelistic witness. Community love is not a program; it is the proof of discipleship." },
  { icon: "🙌", color: GREEN, title: "Bear One Another's Burdens (Gal 6:2)", text: "'Carry each other's burdens, and in this way you will fulfill the law of Christ.' The law of Christ is the love command. Burden-bearing is not advice-giving or problem-solving but presence: walking alongside, sharing the weight. Paradoxically, verse 5 says each should carry their own load — the tension between healthy independence and mutual dependence defines mature community. Some burdens are meant to be shared; others require personal ownership." },
  { icon: "🗣️", color: PURPLE, title: "Speak Truth in Love (Eph 4:15)", text: "'Instead, speaking the truth in love, we will grow to become in every way the mature body of him who is the head, that is, Christ.' Truth without love is brutality; love without truth is sentimentality. Both together — aletheuontes en agape — produce growth toward the head. This is the basis for the accountability relationships the NT assumes are normal: we cannot grow in isolation; we need the truthful, loving speech of others to see our blind spots." },
  { icon: "🏠", color: TEAL, title: "Hospitality (Romans 12:13; 1 Pet 4:9)", text: "'Share with the Lord's people who are in need. Practice hospitality.' 'Offer hospitality to one another without grumbling.' The Greek word philoxenia (love of strangers) was a key Christian virtue in a culture of homelessness, travel, and persecution. Early Christians opened their homes for worship, meals, shelter, and care of the sick. Hospitality makes community concrete: the shared table is where theory becomes practice." },
];

const FRIENDSHIP_ITEMS = [
  { q: "Jonathan and David: The Covenant of Friendship", a: "'Jonathan made a covenant with David because he loved him as himself' (1 Sam 18:3). David later says of Jonathan: 'I grieve for you, Jonathan my brother; you were very dear to me. Your love for me was wonderful, more wonderful than that of women' (2 Sam 1:26). The friendship between Jonathan and David is the biblical model of covenantal friendship: commitment that costs something (Jonathan risking his father's wrath), delight in the other, and loyalty that outlasts circumstances." },
  { q: "Spiritual Friendship (Aelred of Rievaulx)", a: "The 12th-century Cistercian monk Aelred wrote Spiritual Friendship — one of the most influential Christian texts on friendship. Drawing on Cicero but baptizing the category: 'God is friendship. He who abides in friendship abides in God, and God in him.' The three kinds of friendship: carnal (pleasure), material (utility), spiritual (virtue and God). Spiritual friendship is defined by: safety (you can be yourself), truth-telling (the friend tells you what you need to hear), and shared love of God as the friendship's center." },
  { q: "The Dangers of Isolation", a: "Dietrich Bonhoeffer in Life Together: 'Let him who cannot be alone beware of community. Let him who is not in community beware of being alone.' Both poles are necessary. But isolation is specifically dangerous: it multiplies temptation (no accountability), distorts reality (no outside perspective), and breeds pride (no one to reveal blind spots). C.S. Lewis on friendship: 'The typical expression of opening Friendship would be something like, What! You too? I thought I was the only one.'" },
  { q: "Vulnerability and Safety in Community", a: "Genuine community requires vulnerability — the willingness to be known in weakness, not only in strength. This is what Brene Brown's research confirms and what the NT assumes: 'confess your sins to each other' (Jas 5:16), 'carry each other's burdens' (Gal 6:2), 'weep with those who weep' (Rom 12:15). But vulnerability requires safety — the assurance that what is shared will be held with care and not weaponized. Building safe community is itself a spiritual discipline." },
];

const DISCIPLINE_ITEMS = [
  { q: "The Goal of Church Discipline (Matt 18:15–17)", a: "'If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over.' The process Jesus describes is gradual, relational, and restorative: private conversation first, then witnesses, then the community. The goal throughout is winning the person — restoration, not punishment. Church discipline rightly understood is pastoral surgery: sometimes painful, always oriented toward health, never vindictive." },
  { q: "The Corinthian Case (1 Corinthians 5)", a: "Paul confronts the Corinthians for tolerating a man living in sexual immorality with his stepmother — and for being proud of their tolerance. Paul commands the man's removal from fellowship: 'hand this man over to Satan for the destruction of the flesh, so that his spirit may be saved on the day of the Lord.' The purpose is redemptive: separation from the community's protection exposes the person to the consequence of their sin — potentially producing the repentance that leads to restoration." },
  { q: "Restoration as the End Goal (Galatians 6:1)", a: "'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted.' The word restore (katartizo) is used for setting broken bones and mending fishing nets — bringing something back to its proper function. The one doing the restoring is warned to watch themselves: the posture for discipline is not superiority but humility, recognizing one's own susceptibility." },
  { q: "The Danger of Ungrace in Community", a: "Philip Yancey in What's So Amazing About Grace: the church is often the least grace-filled place in the world. When community operates by performance, shame, and condemnation rather than grace, it produces either hypocrisy (pretending to be fine) or departure (those who feel unworthy leave). The antidote is the integration of honesty about sin and extravagance of grace — the prodigal's father pattern applied to community: running toward returning sinners, not standing at a distance." },
];

const SMALL_GROUPS_CARDS = [
  { icon: "🏘️", color: GREEN, title: "The Early Church Model (Acts 2:42–47)", text: "'They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer... They broke bread in their homes and ate together with glad and sincere hearts.' The Jerusalem church met both in the temple (public) and house to house (intimate). The four practices — teaching, fellowship, Eucharist, prayer — constituted what we would call a small group meeting. The model is organic, home-based, centered on shared life rather than programming." },
  { icon: "🤝", color: BLUE, title: "Accountability and Transparency", text: "Small groups work only with honesty. The default human setting is impression management — presenting the best version of ourselves to others. Christian community requires the counter-cultural practice of transparency: sharing not just victories but failures, not just requests but confessions, not just plans but fears. The group that only celebrates never becomes a family; the group that holds failure safely becomes a community of grace." },
  { icon: "📖", color: PURPLE, title: "Scripture as Community Practice", text: "Lectio divina in community — reading Scripture slowly together, pausing for silence, sharing what word or phrase arrested each person, praying together with the text — is a practice that combines Scripture, prayer, and mutual sharing in a single act. The community interprets Scripture together: the diversity of what different members notice illuminates what any single reader might miss. The body's interpretation is richer than the individual's." },
  { icon: "🌱", color: GOLD, title: "Intentional Rhythms", text: "Communities form through regular, repeated shared experience. The key is intentionality: setting a rhythm (weekly, bi-weekly) and protecting it against the tyranny of busyness. Shared meals, shared prayer, shared service to the community outside — these are the practices that form the relational depth that makes deeper transparency possible. A small group that only meets for Bible study without shared life will remain shallow; a group with shared life becomes a community that shapes character." },
];

const VIDEOS = [
  { videoId: "T_j6tFnxhS0", title: "What Is the Church? – Biblical Theology" },
  { videoId: "b6HiBWJvUuI", title: "Christian Community and Spiritual Friendship" },
  { videoId: "vJYcJP_BPBU", title: "Life Together – Bonhoeffer on Community" },
];

export default function ChristianCommunityGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_comm_tab", 0);
  const [openTheo, setOpenTheo] = useLocalStorage("vine_comm_theo", -1);
  const [openFri, setOpenFri] = useLocalStorage("vine_comm_fri", -1);
  const [openDisc, setOpenDisc] = useLocalStorage("vine_comm_disc", -1);
  const [journal, setJournal] = useLocalStorage("vine_comm_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🏘️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>Christian Community and the Church</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Guide — the theology of the body of Christ, the one-another commands, spiritual friendship, church discipline, small groups, and the church as a foretaste of the coming kingdom.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === i ? GREEN : BORDER}`, background: activeTab === i ? `${GREEN}22` : CARD, color: activeTab === i ? GREEN : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === 0 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview: Why Community Is Not Optional</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Western Christianity has inherited a profound individualism: salvation is personal, faith is private, spiritual development is self-directed. The NT does not recognize this picture. The church is not a gathering of individuals who happen to have similar beliefs — it is a body, a family, a temple, a new humanity. The individual Christian is not the base unit of the faith; the community is.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Dietrich Bonhoeffer opened Life Together with this: 'Christianity means community through Jesus Christ and in Jesus Christ. No Christian community is more or less than this.' Community is not an add-on for extroverts or a program for church growth — it is the shape of new creation: humans restored to relationship with God and one another, the division and loneliness of the fall reversed.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Body Metaphor","1 Corinthians 12"],["New Humanity","Ephesians 2:14–16"],["Temple of Spirit","1 Cor 3:16 (plural)"],["One Another","59 NT commands"],["Model","Acts 2:42–47"],["Foundation","Bonhoeffer: Life Together"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Theology of Church */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Theology of the Church</h2>
            {THEOLOGY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openTheo === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheo(openTheo === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openTheo === i ? "−" : "+"}</span>
                </button>
                {openTheo === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: One Another */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The One Another Commands</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {ONE_ANOTHER_CARDS.map(c => (
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

        {/* Tab 3: Friendship */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Spiritual Friendship</h2>
            {FRIENDSHIP_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openFri === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenFri(openFri === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openFri === i ? "−" : "+"}</span>
                </button>
                {openFri === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Church Discipline */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Church Discipline and Restoration</h2>
            {DISCIPLINE_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openDisc === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenDisc(openDisc === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openDisc === i ? "−" : "+"}</span>
                </button>
                {openDisc === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Small Groups */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Small Groups and Intentional Community</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {SMALL_GROUPS_CARDS.map(c => (
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

        {/* Tab 6: Kingdom Foretaste */}
        {activeTab === 6 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Church as Kingdom Foretaste</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>The church does not merely prepare people for the kingdom — it is a foretaste and preview of the kingdom now. Its multiethnic unity, its care for the poor, its sexual countercultural ethics, its community across economic lines — these are not incidental programs but previews of what God intends for all creation. Stanley Hauerwas: 'The church doesn't have a social ethic; the church is a social ethic.'</p>
            {[
              ["Multiethnic Community as Eschatological Sign","Every time Christians of different races, classes, and backgrounds eat together, bear one another's burdens, and call each other brother and sister — they enact Revelation 7:9: 'a great multitude from every nation, tribe, people and language, standing before the throne.' The multiethnic congregation is not a social program but a theological statement: this is what the end looks like, and we are living it now."],
              ["The Eucharist as Kingdom Meal","Every Lord's Supper is an eschatological meal: a foretaste of the wedding feast of the Lamb. Paul's instruction in 1 Corinthians 11 about waiting for one another and refusing to humiliate the poor is precisely because the table must embody the kingdom's economics of equality. The Eucharist that enacts inequality contradicts its own theology; the Eucharist that brings the powerful and powerless to the same table anticipates the banquet where the first are last."],
              ["Community Across Economic Lines","The Jerusalem church 'had everything in common' (Acts 2:44) and 'there was no needy person among them' (Acts 4:34 — echoing Deut 15:4's vision for Israel). Paul's collection for Jerusalem demonstrates that economic solidarity across distance is a theological act: the Gentile churches' care for the Jewish poor is an embodiment of the one-body metaphor. Real community crosses economic lines — it is not possible in homogeneous congregations."],
              ["The Church as Colony of Heaven (Phil 3:20)","'But our citizenship is in heaven.' Bonhoeffer called the church a 'colony of the true homeland.' The church lives by different rules, different economics, different ethics than the surrounding culture — not because of withdrawal from the world but because it is governed by a different king. Christian community is always countercultural: it resists the surrounding culture's logic of competition, self-advancement, exclusion of the weak, and commodification of persons."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your experience of Christian community. Your notes are saved locally.</p>
            {[
              "Where are you currently in community — isolated, in shallow connection, or in genuine mutual burden-bearing? What would deeper community require of you?",
              "The one-another commands require speaking truth in love, confessing to one another, and bearing burdens. Which of these feels most challenging or absent in your current relationships?",
              "What would it mean for your community to be a visible foretaste of the kingdom — in its economics, its diversity, and its treatment of the marginalized?",
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
        {activeTab === 8 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
