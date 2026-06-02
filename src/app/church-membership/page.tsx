"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WHY_IT_MATTERS = [
  { title: "Membership Is the Visible Church", verse: "1 Corinthians 12:12-27", body: "The NT describes the church as a body — not a crowd. A crowd is a collection of individuals who happen to be in the same place. A body is an organism with interdependent parts that need each other. Church membership is what moves you from the crowd into the body. 'The body is not made up of one part but of many' (1 Cor. 12:14). Membership formalizes belonging." },
  { title: "Accountability Without Membership Is Impossible", verse: "Matthew 18:15-20", body: "Jesus describes a process for addressing sin that moves from private confrontation to 'the church' — which implies defined membership. How can the church act if there is no defined 'who' is the church? Church discipline — both the loving confrontation of sin and the restoration of the repentant — requires a committed community that knows who is in it." },
  { title: "Pastors Cannot Shepherd Vague Congregations", verse: "Hebrews 13:17", body: "'Have confidence in your leaders and submit to their authority, because they keep watch over you as those who must give an account.' Pastors are accountable to God for the souls they shepherd. If membership is undefined, who are they accountable for? Membership is what makes pastoral care and oversight possible and meaningful." },
  { title: "Commitment Proves Love", verse: "John 13:35", body: "Anyone can attend a church when it is convenient, the sermon is good, or the music suits them. Covenant commitment — remaining through disagreements, serving in the hard seasons, giving when it costs you — is the form of love that actually shapes character. The anonymous church consumer is shielded from the very friction that forms virtue." },
  { title: "Church Membership Is Practice for Heavenly Community", verse: "Revelation 7:9", body: "The vision of heaven is not individuals floating alone with God — it is a great multitude, a city, a community. Committed membership in a local church is practice for the community of the new creation. Learning to love difficult people, to submit to authority, to serve when unseen — this is apprenticeship for eternal community." },
];

const OBJECTIONS = [
  { obj: "Membership isn't in the Bible.", ans: "The word 'membership' isn't, but the concept is. The NT assumes defined communities: 'Add to their number' (Acts 2:47), lists of widows (1 Tim. 5:9), church discipline requiring defined 'ins' and 'outs' (1 Cor. 5:12-13), elders who know and are known by their flock. The absence of the word doesn't mean the absence of the practice." },
  { obj: "I'm part of the universal church — that's enough.", ans: "The universal church is real and important. But it has no address, no pastor, no meeting time, no members who know you. The NT letters are written to local churches — specific, messy, located congregations. You can be committed to the universal church in theory while avoiding the costly love that only local church membership demands." },
  { obj: "I've been burned by a church before.", ans: "This pain is real and the church's failures in this area are serious. But avoiding membership is also allowing the wound to win. Healing comes through the very community that is risky — not by protecting yourself from it forever. Discern carefully, choose wisely, but don't remain permanently unattached." },
  { obj: "I like attending multiple churches.", ans: "Multi-church attendance is fine as supplementary — but it cannot replace the committed, knowing, accountable community that a single congregation provides. You can receive from many; you can only be truly known and serve in one." },
  { obj: "The church I attend doesn't offer formal membership.", ans: "Some churches don't use the language, but look for the function: a defined community that knows each other, pastoral accountability, and covenant commitment. If your church doesn't have these, advocate for them or find one that does." },
];

const MEMBERSHIP_STEPS = [
  { n: 1, title: "Attend consistently", desc: "No church is perfect. Choose one, attend regularly for at least 3-6 months. Let them know you exist. Show up when inconvenient." },
  { n: 2, title: "Complete a membership class", desc: "Most churches offer a class covering their theology, culture, expectations, and vision. Take it seriously — you are entering a covenant." },
  { n: 3, title: "Meet with a pastor or elder", desc: "Ask for time with pastoral leadership. Share your story, your gifts, and your questions. Membership is relational, not clerical." },
  { n: 4, title: "Make your faith public", desc: "Many churches include a public affirmation of faith as part of membership. This is accountability built into the moment — being known publicly." },
  { n: 5, title: "Identify your serving role", desc: "Membership is not a consumer status — it is a commitment to serve. Before or shortly after joining, identify one area to serve consistently." },
  { n: 6, title: "Give financially", desc: "Financial giving to the local church is an act of covenant commitment. If you're not giving, you're not truly members of the community — you're guests." },
  { n: 7, title: "Know and be known", desc: "Make it your goal within the first year to have at least two relationships where you know each other's real lives. Join a small group, serve alongside someone, have people over." },
];

const HEALTH_MARKS = [
  { mark: "Expository Preaching", desc: "The sermon is driven by the text — what the Bible says, not what the congregation wants to hear." },
  { mark: "Biblical Theology", desc: "The gospel is clearly articulated. Salvation is by grace through faith. The person and work of Christ are central." },
  { mark: "The Sacraments", desc: "Baptism and the Lord's Supper are practiced according to Scripture and taken seriously." },
  { mark: "Church Discipline", desc: "Sin is addressed with love and truth. The goal is always restoration." },
  { mark: "Qualified Leadership", desc: "Elders/pastors meet the character requirements of 1 Timothy 3 and Titus 1." },
  { mark: "Mission and Evangelism", desc: "The church exists not only for its members but for its community and the world." },
  { mark: "Prayer", desc: "The church prays together. Corporate prayer is a priority, not an afterthought." },
  { mark: "Genuine Community", desc: "Members know each other. There is real care, accountability, and belonging — not just attendance." },
];

const TRADITIONS = [
  {
    id: "earlychurch",
    name: "Early Church Covenants",
    era: "1st-3rd centuries",
    color: GREEN,
    description: "The early church practiced a catechumenate — a period of instruction and testing before baptism and full membership. The Didache (c.90 AD) prescribed fasting and instruction before baptism. Ignatius of Antioch (c.110 AD) wrote that nothing should happen in the church apart from the bishop — reflecting a defined, committed community structure. Justin Martyr describes the two-stage entrance: instruction, followed by communal prayer and Eucharist, admitted only to those who 'believe our teaching to be true and have been washed in the washing.'",
    significance: "The early church treated membership as weighty — a covenant commitment requiring preparation, accountability, and public profession. It was not easily entered or lightly held. The persecution context made clear that formal membership had real costs.",
    example: "Didache 7: 'Before baptism, let the one baptizing and the one to be baptized fast, as well as any others who are able. You shall require the one to be baptized to fast one or two days beforehand.'",
  },
  {
    id: "reformed",
    name: "Reformed / Presbyterian",
    era: "16th century onward",
    color: "#3B82F6",
    description: "The Reformed tradition grounded church membership in the covenant of grace and the visible church. Calvin argued that the church is both invisible (all who are truly elect) and visible (the defined community of professing believers and their children who practice Word and sacrament). Presbyterian polity organizes the visible church into local congregations with ruling elders who know and shepherd defined members. Church discipline is both a mark of the true church and a function requiring known membership.",
    significance: "The Reformed tradition produced detailed confessional standards (Westminster Confession, Heidelberg Catechism) that shaped what membership meant — doctrinal commitment, submission to oversight, regular participation in Word and sacrament. This tradition has historically had the most developed theology of the visible church.",
    example: "Westminster Confession 25.2: 'The visible church... consists of all those throughout the world that profess the true religion; and of their children: and is the kingdom of the Lord Jesus Christ, the house and family of God, out of which there is no ordinary possibility of salvation.'",
  },
  {
    id: "baptist",
    name: "Baptist Covenant Tradition",
    era: "17th century onward",
    color: PURPLE,
    description: "Baptist polity places unique emphasis on the local church as a covenanted community of regenerate believers. The 1689 London Baptist Confession and the subsequent Baptist covenant tradition produce written membership covenants — documents that members sign, pledging specific commitments to each other and to the Lord. These covenants typically address: mutual encouragement, attendance, giving, prayer, accountability, and submission to church discipline.",
    significance: "Baptist church covenants are among the most explicit expressions of what membership means. They treat joining a church as making specific promises to specific people — not just a transaction with a denomination or a doctrinal agreement, but a personal commitment to identifiable brothers and sisters. Many Reformed Baptist churches still use a version of the 1833 New Hampshire Baptist Confession covenant.",
    example: "Baptist Covenant (typical): 'We engage to walk together in Christian love, to strive for the advancement of this church, to sustain its worship, ordinances, discipline, and doctrines; to contribute cheerfully and regularly to the support of the ministry...'",
  },
  {
    id: "anabaptist",
    name: "Anabaptist / Believers Church",
    era: "16th century onward",
    color: "#F59E0B",
    description: "The Anabaptist wing of the Reformation — including Mennonites, Hutterites, and later Brethren — took the most radical view of the church as a gathered community of committed disciples. They rejected infant baptism, insisting that membership required adult confession of faith and voluntary commitment. The ban (Meidung, or shunning) functioned as church discipline — exclusion from the community for unrepentant sin. Community (Gemeinschaft) was central: the church was a brotherhood, not a territorial institution.",
    significance: "The Anabaptist tradition pushed membership toward its most costly form: joining a church community was joining a way of life, not a religious association. Their descendants — Mennonite, Amish, Brethren — continue to practice forms of community that outsiders often find either inspiring or shocking. Their insight: if membership has no cost and no consequence, it has no meaning.",
    example: "Schleitheim Confession (1527): 'Baptism shall be given to all those who have learned repentance and amendment of life, and who believe truly that their sins are taken away by Christ... All those who wish to break bread in remembrance of the broken body of Christ... shall beforehand be united by baptism in one body of Christ which is the church of God.'",
  },
  {
    id: "modern",
    name: "9Marks / Modern Evangelical",
    era: "Late 20th century onward",
    color: "#EC4899",
    description: "Mark Dever and the 9Marks movement (Capitol Hill Baptist Church, Washington DC) represent a late-20th-century recovery of robust church membership in the broader evangelical world. Dever's book 'The Deliberate Church' (with Paul Alexander) and his work on ecclesiology systematized marks of a healthy church that include meaningful membership, regular church discipline, and biblical church government. The movement has influenced hundreds of churches globally toward more intentional membership practices.",
    significance: "The 9Marks recovery came in reaction to the megachurch and seeker-sensitive movements that had often minimized committed membership in favor of broad accessibility. Dever's contribution was arguing that meaningful membership is not a barrier to growth but its prerequisite — that a church with no clear 'who' can have no clear 'what.' The movement restored the language of church covenants and discipline in many otherwise informal evangelical contexts.",
    example: "9Marks definition: 'A church member is someone who has publicly committed to a local body. The church affirms his or her profession of faith, and both parties — the member and the church — commit to care for and oversee each other.'",
  },
];

type Tab = "why" | "objections" | "traditions" | "how" | "videos";

export default function ChurchMembershipPage() {
  const [tab, setTab] = useState<Tab>("why");
  const [selectedTradition, setSelectedTradition] = useState("earlychurch");

  const trad = TRADITIONS.find(t => t.id === selectedTradition)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Church Membership</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Membership is what moves you from a crowd into a body. It is the covenant commitment that makes genuine pastoral care, accountability, and community possible — and costly.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "why" as const, label: "Why It Matters", icon: "📖" },
            { id: "objections" as const, label: "Objections", icon: "❓" },
            { id: "traditions" as const, label: "Traditions", icon: "🏛️" },
            { id: "how" as const, label: "How to Join", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "why" && (
          <div>
            {WHY_IT_MATTERS.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{w.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{w.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "objections" && (
          <div>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 8, fontStyle: "italic" }}>"{o.obj}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.ans}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 22, marginTop: 4 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Marks of a Healthy Church to Join</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {HEALTH_MARKS.map((m, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>✓ {m.mark}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "traditions" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {TRADITIONS.map(t => (
                <button key={t.id} onClick={() => setSelectedTradition(t.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedTradition === t.id ? `${t.color}18` : CARD, border: `1px solid ${selectedTradition === t.id ? t.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedTradition === t.id ? t.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${trad.color}40`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <h2 style={{ color: trad.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{trad.name}</h2>
                <span style={{ background: `${trad.color}18`, color: trad.color, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, marginLeft: 12, whiteSpace: "nowrap" }}>{trad.era}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{trad.description}</p>
              <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>SIGNIFICANCE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{trad.significance}</p>
              </div>
              <div style={{ background: `${trad.color}08`, border: `1px solid ${trad.color}20`, borderRadius: 10, padding: 14 }}>
                <div style={{ color: trad.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>EXAMPLE TEXT</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{trad.example}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "how" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Joining a church is not signing a contract — it is entering a covenant. These steps move you from attendee to member in a way that honors both you and the church.
              </p>
            </div>
            {MEMBERSHIP_STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PURPLE}20`, border: `2px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{s.title}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
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
                  { videoId: "KJURQdESrYg", title: "Why Church Membership Matters", channel: "Voddie Baucham", description: "Voddie Baucham makes the biblical case for why church membership is not optional for the Christian — it is the visible expression of the covenant community." },
                  { videoId: "z-N2NdONTnU", title: "What Is Church Membership? (Interview)", channel: "9Marks / Mark Dever", description: "Mark Dever explains what church membership is, why it matters, and how a commitment to a local body shapes the whole Christian life." },
                  { videoId: "tiXxuFjFP2w", title: "Regenerate Church Membership", channel: "Voddie Baucham / The Sword and Trowel", description: "A discussion on the biblical doctrine of regenerate church membership — the conviction that church rolls should reflect genuinely converted believers." },
                  { videoId: "z-ctgTawSDE", title: "What Is Church Membership? (Part 2)", channel: "9Marks / Mark Dever", description: "Continuing the conversation on what it means to be meaningfully committed to a local church, with practical implications for how we structure membership." },
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
