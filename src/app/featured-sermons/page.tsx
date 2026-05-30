"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "Puritan & Colonial", "19th Century", "20th Century", "Contemporary"];

const SERMONS = [
  {
    title: "Sinners in the Hands of an Angry God",
    preacher: "Jonathan Edwards",
    year: 1741,
    era: "Puritan & Colonial",
    color: "#EF4444",
    location: "Enfield, Connecticut",
    theme: "The wrath of God and the urgency of repentance",
    description: "Preached on July 8, 1741 during the Great Awakening, this is arguably the most famous sermon in American history. Edwards read quietly from notes while the congregation wept, screamed, and clung to the church pews. The imagery — of sinners as spiders dangling over a lake of fire, held only by the mercy of God — was meant not to terrorize but to awaken. The sermon triggered mass conversions across New England.",
    key_quote: "The God that holds you over the pit of hell, much as one holds a spider or some loathsome insect over the fire, abhors you, and is dreadfully provoked; his wrath towards you burns like fire; he looks upon you as worthy of nothing else, but to be cast into the fire.",
    why_significant: "Represents the theological and rhetorical height of the Great Awakening. Edwards was not a ranter but a philosopher-pastor — the emotional response came not from theatrical delivery but from the weight of biblical truth presented with absolute clarity.",
    find_it: "Yale Jonathan Edwards Center: edwards.yale.edu — full text free online",
    initials: "SHG",
  },
  {
    title: "The Expulsive Power of a New Affection",
    preacher: "Thomas Chalmers",
    year: 1817,
    era: "19th Century",
    color: GREEN,
    location: "Glasgow, Scotland",
    theme: "How love for God displaces love for the world",
    description: "Chalmers argued that you cannot remove a sinful affection by mere willpower — the heart abhors a vacuum. The only way to expel love of the world is to replace it with a greater love: love for God. The sermon is a masterwork of theological psychology, anticipating by two centuries what behavioral science now calls habit replacement. It remains one of the most frequently cited sermons in all of church history.",
    key_quote: "The heart is not so constituted that the mere absence of one object leaves it without any object at all... The only way to dispossess the heart of an old affection is by the expulsive power of a new one.",
    why_significant: "Provides the theological foundation for why sanctification cannot be reduced to willpower. Essential reading for anyone struggling with besetting sin — and for anyone who counsels others in spiritual formation.",
    find_it: "Full text available free at monergism.com and desiringgod.org",
    initials: "EXP",
  },
  {
    title: "The Love of God",
    preacher: "Charles Spurgeon",
    year: 1874,
    era: "19th Century",
    color: PURPLE,
    location: "Metropolitan Tabernacle, London",
    theme: "The boundless, particular love of God for sinners",
    description: "Spurgeon preached over 3,600 sermons, all of which are available in print. His sermon on John 3:16 — possibly preached multiple times in different forms — stands as his greatest exposition of the love of God. Spurgeon spoke to audiences of 5,000-10,000 weekly without amplification, and his printed sermons were the most widely distributed religious literature of the Victorian era.",
    key_quote: "I do not know how to measure the love of God. It is measureless. 'God so loved the world' — the word 'so' contains an ocean of meaning; no man has ever plumbed its depths.",
    why_significant: "Spurgeon combined Calvinist theology with evangelical passion in a way rarely seen before or since. His sermons remain arguably the greatest English-language preaching in history — warm, theologically precise, and evangelistically urgent.",
    find_it: "All 3,600+ sermons available free at spurgeongems.org and the Spurgeon Center at Midwestern Seminary",
    initials: "LOG",
  },
  {
    title: "One Thing Thou Lackest",
    preacher: "D.L. Moody",
    year: 1880,
    era: "19th Century",
    color: "#F59E0B",
    location: "London / Chicago evangelistic campaigns",
    theme: "Total surrender and the cost of following Christ",
    description: "Moody — an uneducated shoe salesman who became the Billy Graham of the 19th century — preached to an estimated 100 million people across his career. His signature message was total surrender: that most who called themselves Christians had never truly yielded all to God. Preached at his Northfield conferences and both London and American campaigns, this message triggered some of the largest documented mass conversions of the 19th century.",
    key_quote: "The world has yet to see what God can do with a man fully consecrated to Him. By God's grace I will be that man.",
    why_significant: "Moody defined mass evangelism for the modern era. His methods — large-scale campaigns, trained inquiry workers, follow-up — became the template Billy Graham would perfect 80 years later.",
    find_it: "Available via Moody Publishers and the Moody Bible Institute digital archives at moody.edu",
    initials: "OTL",
  },
  {
    title: "The Second Coming of Christ",
    preacher: "Billy Sunday",
    year: 1910,
    era: "19th Century",
    color: "#10B981",
    location: "Nationwide revival campaigns",
    theme: "Eschatology and urgency of salvation",
    description: "Billy Sunday was the most flamboyant preacher of the early 20th century — a former professional baseball player who used athletic theatrics to preach biblical truth. His campaigns in New York, Chicago, and Philadelphia drew millions. His preaching on eschatology combined pre-millennialism with urgent evangelistic appeal.",
    key_quote: "One of these days you are going to hear that Billy Sunday is dead. Don't you believe it. I will be more alive than I have ever been.",
    why_significant: "Sunday bridged the Victorian evangelicalism of Moody with the 20th-century mass media age, and his campaigns produced documented social transformation — saloons closed, crime dropped, charitable giving increased in cities where he preached.",
    find_it: "Sermon manuscripts at the Billy Sunday Papers, Grace College & Seminary — bgc.gospelcom.net",
    initials: "SCC",
  },
  {
    title: "Christ the Power of God and the Wisdom of God",
    preacher: "Martyn Lloyd-Jones",
    year: 1963,
    era: "20th Century",
    color: "#3B82F6",
    location: "Westminster Chapel, London",
    theme: "The centrality of Christ crucified in all preaching",
    description: "Lloyd-Jones preached at Westminster Chapel for 30 years. This sermon from his series on 1 Corinthians represents his magnum opus approach: that the entire Christian enterprise depends on the proclamation of Christ crucified — and that attempts to make Christianity more palatable by softening this message are the root cause of the church's decline. Lloyd-Jones was as much a physician-diagnostician as he was a preacher.",
    key_quote: "The glory of the gospel is this: God does not wait for us to become good before He loves us. He loves us in our sin and sends His Son to save us.",
    why_significant: "Lloyd-Jones diagnosed the theological collapse of mainline Christianity in the 20th century with prophetic accuracy. His preaching — available in hundreds of hours of audio — remains the standard by which expository preaching is judged.",
    find_it: "Available at mljtrust.org — hundreds of sermons in audio and text, many free",
    initials: "CPW",
  },
  {
    title: "Why God Allows Suffering",
    preacher: "Billy Graham",
    year: 1957,
    era: "20th Century",
    color: "#F59E0B",
    location: "Madison Square Garden, New York",
    theme: "Theodicy and hope in the midst of pain",
    description: "Billy Graham's 1957 New York crusade ran for 16 weeks and drew over 2 million attendees. His preaching on suffering — delivered during Cold War anxiety — addressed the most pressing human question with biblical directness. Graham never claimed to have all the answers; his power came from pointing to Christ as the answer sufficient for all suffering.",
    key_quote: "God is enough — not just for you, but for the world. When we have exhausted all of our resources and strength, we discover that God is our greatest resource and our ultimate strength.",
    why_significant: "Graham's crusades produced over 3 million documented decisions for Christ across his career. His straightforward, non-speculative, Christ-centered preaching style remains a model of mass evangelism.",
    find_it: "Hundreds of sermons available at billygraham.org/watch — many on YouTube via Billy Graham Evangelistic Association",
    initials: "WGS",
  },
  {
    title: "Don't Waste Your Life",
    preacher: "John Piper",
    year: 2000,
    era: "Contemporary",
    color: GREEN,
    location: "Bethlehem Baptist Church, Minneapolis",
    theme: "Living for eternity rather than comfort",
    description: "Based on his book of the same name, Piper's message draws from the life of Paul and from the testimony of missionary martyrs — particularly Jim Elliot — to challenge comfortable, suburban Christianity. The core argument: God is most glorified in us when we are most satisfied in Him, and this satisfaction must issue in radical, costly living rather than middle-class comfort-seeking.",
    key_quote: "He is no fool who gives what he cannot keep to gain what he cannot lose. — Jim Elliot, quoted by Piper. God created you to live with a single, all-embracing, all-transforming passion — namely, a passion to glorify God by enjoying and displaying his supreme excellence in all the spheres of your life.",
    why_significant: "This message and book triggered a generation of missionaries, church planters, and radically devoted Christians in the early 21st century. Piper's Desiring God theological vision has shaped more Reformed Christians since 2000 than virtually any other single ministry.",
    find_it: "Available free at desiringgod.org — full audio and text; also on YouTube via Desiring God channel",
    initials: "DWL",
  },
  {
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    year: 2002,
    era: "Contemporary",
    color: "#EF4444",
    location: "Southern Baptist Youth Conference, Birmingham, Alabama",
    theme: "The nature of genuine conversion and false assurance",
    description: "Delivered to approximately 5,000 youth at a Southern Baptist conference, this sermon immediately went viral (for 2002) and remains one of the most-watched Christian sermons in internet history. Washer challenged the easy-believism of American youth ministry — the idea that saying a prayer makes one a Christian — and called young people to examine themselves to see whether they are truly in the faith.",
    key_quote: "You think because you walked an aisle, because you prayed a prayer... I want to tell you: that is not what makes you a Christian. What makes you a Christian is that God has regenerated you, given you a new heart, the Holy Spirit dwells within you, and you are being led by the Spirit of God.",
    why_significant: "The sermon catalyzed a reform movement in American evangelical youth ministry away from entertainment-based ministry toward serious discipleship. Washer has since preached this same basic message worldwide through HeartCry Missionary Society.",
    find_it: "Full sermon on YouTube via HeartCry Missionary Society; heartcrymissionary.com",
    initials: "SYM",
  },
  {
    title: "The Prodigal God",
    preacher: "Tim Keller",
    year: 2003,
    era: "Contemporary",
    color: PURPLE,
    location: "Redeemer Presbyterian Church, New York City",
    theme: "The two sons, the two errors, and the reckless love of the Father",
    description: "Keller's exposition of the Parable of the Prodigal Son — later expanded into a bestselling book — reframes the parable around two lost sons: the younger who sins obviously, and the elder who sins through self-righteousness. Keller argues that Western culture is full of elder brothers: people who use moral goodness as a bargaining chip with God rather than resting in grace. The parable is ultimately about the Father who runs.",
    key_quote: "It is not your badness that keeps you from God. It is your goodness. If you are trying to be good enough for God, you are as far from the Father as the elder brother who would not go in.",
    why_significant: "Keller defined Reformed urban ministry for the 21st century. His intellectual rigor, cultural engagement, and pastoral warmth made the gospel accessible to skeptical New Yorkers for three decades. His sermons reach millions annually through Gospel in Life.",
    find_it: "Hundreds of sermons free at gospelinlife.com; YouTube via Redeemer Presbyterian Church",
    initials: "TPG",
  },
  {
    title: "The Explicit Gospel",
    preacher: "Matt Chandler",
    year: 2010,
    era: "Contemporary",
    color: "#F59E0B",
    location: "The Village Church, Dallas, Texas",
    theme: "The full scope of the gospel — Creation to Consummation",
    description: "Chandler argues that the American church has reduced the gospel to a personal transaction — a ticket to heaven — and in doing so has lost the cosmic scope of what God is doing in history. The explicit gospel includes not just personal salvation but the renewal of all creation, the lordship of Christ over all things, and the participation of the church in God's redemptive mission.",
    key_quote: "The gospel is not: you sinned, Jesus died, now go to heaven. The gospel is: God made everything good, man broke everything, Jesus has come to fix everything — and you can participate in the fixing.",
    why_significant: "Chandler led The Village Church from 160 to 12,000+ members while maintaining theological depth and cultural relevance. His message on the explicit gospel became a rallying point for a generation seeking more than moralism.",
    find_it: "Full sermon archive at thevillagechurch.net; YouTube via The Village Church",
    initials: "TEG",
  },
  {
    title: "Radical: Taking Back Your Faith from the American Dream",
    preacher: "David Platt",
    year: 2008,
    era: "Contemporary",
    color: "#10B981",
    location: "Brook Hills Church, Birmingham, Alabama",
    theme: "The collision between the American Dream and the call of Christ",
    description: "Platt became pastor of Brook Hills at 26 and immediately began preaching against the prosperity and comfort of American Christianity. Drawing from his experiences in underground churches in Asia and persecuted communities worldwide, he challenged his congregation to sell, give, go, and risk. The resulting book sold over a million copies. He has since led the International Mission Board.",
    key_quote: "The American Dream is the greatest enemy of the gospel. Not because success is evil, but because we have redefined success in a way that completely ignores the kingdom of God.",
    why_significant: "The Radical series launched a conversation about radical Christian discipleship that has not stopped. Platt is one of the most effective preachers in contemporary American Christianity at holding global missions and theological depth together.",
    find_it: "David Platt sermons at davidplatt.org; also available via Radical.net and YouTube",
    initials: "RAD",
  },
];

const ERA_COLOR: Record<string, string> = {
  "Puritan & Colonial": "#EF4444",
  "19th Century": "#F59E0B",
  "20th Century": "#3B82F6",
  "Contemporary": GREEN,
};

export default function FeaturedSermonsPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SERMONS.filter(s => era === "All" || s.era === era);
  const sermon = SERMONS.find(s => s.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎙️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sermons That Moved History</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
            From Edwards in Enfield to Washer in Birmingham — sermons that triggered revivals, shaped theology, and changed millions of lives. These are the messages that have defined Christian preaching across the centuries.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERA_FILTERS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: sermon ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((s, i) => (
              <button key={i} onClick={() => setSelected(selected === s.title ? null : s.title)}
                style={{ background: selected === s.title ? `${s.color}12` : CARD, border: `1px solid ${selected === s.title ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {s.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.title}</span>
                      <span style={{ background: `${ERA_COLOR[s.era] || GREEN}15`, color: ERA_COLOR[s.era] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{s.preacher}</span>
                      <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{s.year}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {sermon && (
            <div style={{ background: CARD, border: `1px solid ${sermon.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: sermon.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{sermon.title}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{sermon.preacher} · {sermon.year} · {sermon.location}</div>

              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                <span style={{ background: `${ERA_COLOR[sermon.era] || GREEN}15`, color: ERA_COLOR[sermon.era] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{sermon.era}</span>
              </div>

              <div style={{ background: `${sermon.color}08`, border: `1px solid ${sermon.color}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: sermon.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>THEME</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{sermon.theme}</p>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{sermon.description}</p>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{sermon.key_quote}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY SIGNIFICANT</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{sermon.why_significant}</p>
              </div>

              <div style={{ background: `#3B82F615`, border: "1px solid #3B82F630", borderRadius: 8, padding: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO FIND IT</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{sermon.find_it}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
