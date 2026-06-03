"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "givers" | "organizations" | "practical" | "videos";

const GIVERS = [
  {
    id: "muller",
    name: "George Müller",
    era: "1805-1898",
    context: "Bristol orphanages; faith missions pioneer",
    bio: "Müller cared for over 10,000 orphans in Bristol without ever soliciting funds from human sources. His method was prayer — specific, detailed, expectant prayer to God as the only one he would ask for provision. He kept meticulous records of every prayer and every provision. His goal was not to run an orphanage but to demonstrate to a skeptical Victorian world that the God of the Bible still answers prayer. His two volumes of 'Narratives' document thousands of specific answered prayers, many of them involving food arriving moments before meals when there was literally nothing to feed hundreds of children. He gave away all his personal estate at death.",
    quote: "The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety. I have joyfully dedicated my whole life to the object of exemplifying how much may be accomplished by prayer and faith.",
    contribution: "Müller made faith-based giving a documented, verifiable practice rather than a vague spiritual aspiration. His journals demonstrate the specificity of God's provision — not just that God provides, but how, through what means, at what exact moment. He established a model of Christian ministry that refused to use pressure, guilt, or public fundraising appeals, making need known only to God. His 'Narratives' have inspired generations of faith-mission organizations to operate without guaranteed financial backing.",
  },
  {
    id: "taylor",
    name: "Hudson Taylor",
    era: "1832-1905",
    context: "China Inland Mission; pioneer of faith missions",
    bio: "Taylor founded the China Inland Mission (1865) — the first faith mission — on the principle that workers would be sent without pledged financial support, dependent entirely on God's provision through prayer. He refused to go into debt for any mission purpose, trusting that God would provide for what God had called into existence. He also adopted Chinese dress and customs at a time when European missionaries considered this beneath their dignity — giving up the financial security and social status that came with cultural distance from the poor. He gave away what he had repeatedly, including his own food and money when Chinese believers were in need.",
    quote: "God's work done in God's way will never lack God's supply. When we give him what we have — however little — he can multiply it as he multiplied the loaves. The question is not whether we have enough, but whether we have given what we have.",
    contribution: "Taylor made faith-financing a structure, not just an attitude — he built an entire mission organization on the principle of trusting God's provision through prayer rather than guaranteed salary. The China Inland Mission's model (no personal solicitation of funds, all workers on equal support, no debt) has been replicated by hundreds of missions organizations worldwide. His integration of cultural humility with financial generosity showed that giving up privilege and giving up money are often the same act.",
  },
  {
    id: "studd",
    name: "C.T. Studd",
    era: "1860-1931",
    context: "England cricket star; WEC International; 'Only one life' poem",
    bio: "Charles Thomas Studd was one of England's greatest cricketers when he inherited £29,000 — a fortune — at age 25. He gave virtually all of it away: £5,000 to D.L. Moody, £5,000 to George Müller, £5,000 to other missions work, and the rest to various Christian causes, keeping only a small amount for his own passage to China as a missionary. He went on to serve in China, India, and Africa, founding the Heart of Africa Mission (later WEC International) in his 50s despite seriously deteriorating health. His poem 'Only one life, 'twill soon be past; only what's done for Christ will last' became one of the most quoted Christian verses of the 20th century.",
    quote: "Only one life, 'twill soon be past; only what's done for Christ will last. And when I am dying, how happy I'll be, if the lamp of my life has been burned out for Thee.",
    contribution: "Studd demonstrated that radical financial giving and radical missionary calling are not competing alternatives but mutually reinforcing expressions of the same conviction. His inheritance giveaway was not impulsive but deliberate — an act of theological reasoning about what money is for when you believe in eternity. His example has challenged generations of wealthy Christians to ask what extraordinary provision they might be holding for ordinary purposes.",
  },
  {
    id: "carmichael",
    name: "Amy Carmichael",
    era: "1867-1951",
    context: "Dohnavur Fellowship, India; author; missionary for 55 years without furlough",
    bio: "Carmichael served in India for 55 years without a single furlough home. She founded the Dohnavur Fellowship to rescue children from temple prostitution — girls who had been given to Hindu temples as young children and faced a lifetime of religious sexual slavery. She refused to accept a salary, and the Fellowship operated on the same faith principles as Müller's orphanages: need made known only to God. She wrote 35 books and continued writing throughout a 20-year illness when she was largely confined to her room. She is buried in India — at her own request, her grave is marked not with her name but with a birdbath.",
    quote: "You can give without loving. But you cannot love without giving. Love pours itself out. It cannot help it. When it finds a need, it empties itself. This is what God did in the Incarnation. This is what he calls his people to do in every generation.",
    contribution: "Carmichael made the connection between giving and love concrete and practical. Her refusal of a salary, her giving of herself, and her 55 years of uninterrupted service demonstrated that financial generosity is not primarily about money but about orientation — toward self or toward others. Her rescue work for the children of Dohnavur showed that radical generosity often means intervening in systems that exploit the vulnerable, not just giving to those who ask.",
  },
  {
    id: "moon",
    name: "Lottie Moon",
    era: "1840-1912",
    context: "Southern Baptist missionary; China; Lottie Moon Christmas Offering",
    bio: "Lottie Moon served as a Southern Baptist missionary in China for 39 years. During a severe famine in 1912, she distributed her food and money so extensively to starving Chinese neighbors that she herself became severely malnourished. By the time colleagues recognized her condition and arranged her passage home, she weighed only 50 pounds. She died on Christmas Eve 1912 on the ship home, before reaching America. The Lottie Moon Christmas Offering — established after her death — has raised over $4 billion for international missions, making her arguably the most financially impactful person in the history of Christian giving. She gave literally everything she had.",
    quote: "I wonder how many of us really believe that it is more blessed to give than to receive. A woman who gives all she has, even if only a little, in the service of others, is exercising a faith that does not calculate what it may lose but only what it may give.",
    contribution: "Lottie Moon demonstrated that generosity at the ultimate scale — giving everything, including one's life — is not heroism but obedience. Her story became the catalyst for what may be the largest annual Christian giving offering in history: billions of dollars raised by Southern Baptists for international missions in her name. She showed that the giving that costs the most — not just money but health, safety, and finally life — can have the longest reach.",
  },
];

const THEOLOGY_POINTS = [
  { title: "Tithing: The Foundation", color: GREEN, reference: "Malachi 3:10; Leviticus 27:30; Matthew 23:23", content: "The tithe — 10% of income given to God through the local church — is the biblical baseline for Christian giving. Jesus affirmed tithing (Matthew 23:23) while calling the Pharisees to combine it with justice and mercy. The Malachi 3 passage contains one of the few places God invites His people to test Him: bring the full tithe and see if I do not open the floodgates of heaven. The tithe belongs to God; giving beyond it is an offering." },
  { title: "Generosity as Gospel Response", color: PURPLE, reference: "2 Corinthians 9:6-8; Luke 19:8-10", content: "The New Testament rarely commands specific percentages but consistently links generosity to transformed hearts. Zacchaeus's conversion was instantly visible in his giving. Paul describes the Macedonian churches — in severe poverty — giving beyond their ability because they first gave themselves to the Lord (2 Corinthians 8:5). Generosity is a fruit of grace, not a mechanism for earning it." },
  { title: "The Cheerful Giver", color: "#3B82F6", reference: "2 Corinthians 9:7; Proverbs 11:24-25", content: "God loves a cheerful giver — the Greek word is hilaros (from which we get hilarious). Giving done grudgingly, under compulsion, or to manage guilt does not align with the biblical model. The goal is giving that flows from abundance of heart — trusting God's provision enough that releasing money feels like freedom rather than deprivation." },
  { title: "Giving and Your Own Accumulation", color: "#EF4444", reference: "Luke 12:15-21; 1 Timothy 6:17-19", content: "Jesus warned against covetousness with more intensity than almost any other sin. His parable of the Rich Fool diagnoses the core problem: accumulating treasure for yourself while not being rich toward God. Paul does not command wealthy Christians to divest but to be generous and willing to share — and warns that the love of money (not money itself) is a root of all kinds of evil." },
  { title: "Giving to the Local Church First", color: "#F59E0B", reference: "1 Corinthians 16:2; Nehemiah 10:38; Hebrews 10:25", content: "The primary recipient of the tithe in both Testaments is the community of God's people — the tabernacle, the Temple, the local church. The local church is the base from which missions, mercy, and ministry flow. Christians who give to parachurch organizations but neglect their local church are building on a foundation they have not helped fund." },
  { title: "Giving to the Poor", color: "#10B981", reference: "Proverbs 19:17; Matthew 25:31-46; James 2:14-17", content: "Scripture treats giving to the poor as giving to God directly (Proverbs 19:17) and identifies care for the poor with authentic faith (James 2). Jesus in Matthew 25 describes the judgment in terms of whether we fed, clothed, and visited those in need — identifying Himself with the poor. This is not a works-salvation text but a character-of-the-kingdom text: those who truly know the King share His heart for the poor." },
  { title: "Giving as Investment in Eternity", color: PURPLE, reference: "Matthew 6:19-21; Luke 16:9; 1 Timothy 6:19", content: "Jesus urges investment in treasure in heaven — wealth that cannot be destroyed, stolen, or inflated away. Luke 16:9 is startling: use worldly wealth to gain friends for yourselves, so that when it is gone, you will be welcomed into eternal dwellings. The implication is that money given to advance the gospel and serve people is converting temporal resources into eternal relationships." },
];

const GIVING_ORGS = [
  { name: "Your Local Church", priority: "First Priority", color: GREEN, why: "The local church is the primary vehicle of God's mission in the world. It is the community where you are formed, accountable, and sent. Your giving makes the preaching, discipleship, mercy ministry, and missions of your church possible. No giving portfolio is complete without consistent, substantial local church support.", how: "Set up recurring giving through your church's online platform or autopay" },
  { name: "Wycliffe Bible Translators", priority: "Bible Translation", color: PURPLE, why: "Over 1,500 languages still have no Scripture. Every $1 invested in Bible translation reaches people groups who have no way to access God's word. Wycliffe has the most proven infrastructure for this task.", how: "wycliffe.org/give — supports translation projects directly; also missionary sponsorship" },
  { name: "Open Doors / Voice of the Martyrs", priority: "Persecuted Church", color: "#EF4444", why: "360 million Christians face persecution globally. Supporting the persecuted church is both a biblical mandate and a fulfillment of 1 Corinthians 12:26 — when one member suffers, all suffer. Both organizations provide verifiable, field-level impact.", how: "opendoorsusa.org; persecution.com — regular or one-time giving" },
  { name: "Samaritan's Purse", priority: "Disaster Relief", color: "#F59E0B", why: "Samaritan's Purse deploys quickly to genuine disaster zones worldwide with medical care, food, and shelter — combining practical relief with clear gospel proclamation. Operation Christmas Child is among the most cost-effective child-to-child gospel deliveries in existence.", how: "samaritanspurse.org — disaster relief fund; Operation Christmas Child shoebox" },
  { name: "International Justice Mission", priority: "Justice / Anti-Slavery", color: "#3B82F6", why: "IJM is the largest international anti-slavery organization in the world, deploying lawyers, investigators, and aftercare workers to prosecute traffickers and rescue victims. Founded by Gary Haugen, IJM models how Christians can pursue biblical justice in the legal system.", how: "ijm.org/give — case work directly prosecuting traffickers in Southeast Asia, Africa, Latin America" },
  { name: "Compassion International", priority: "Child Development", color: "#10B981", why: "Compassion's child sponsorship model provides holistic development (education, nutrition, healthcare, discipleship) through local church partnerships in 29 countries. Independent research has verified that Compassion sponsorship significantly increases children's probability of college completion, higher income, and church leadership.", how: "compassion.com — sponsor a child from $38/month; proven model with decades of research" },
  { name: "Gospel Coalition / Ligonier / The Village Church", priority: "Theological Resources", color: GREEN, why: "Giving to organizations that produce free theological content — TGC, Ligonier, desiringgod.org — extends the reach of sound doctrine worldwide. Much of the best theology available today is free because donors fund it.", how: "thegospelcoalition.org/donate; ligonier.org/give; desiringgod.org/donate" },
];

const PRACTICAL_TIPS = [
  { tip: "Give first, before bills", color: GREEN, detail: "Automated giving at the beginning of the month treats the tithe as a first-fruit (Proverbs 3:9) rather than a leftover. Giving what remains after expenses consistently produces less giving and more guilt." },
  { tip: "Agree on giving as a couple", color: PURPLE, detail: "Giving is one of the top five financial conflict areas in marriage. Discuss and agree on a giving percentage and priority list together. Covert giving — one spouse giving without telling the other — damages trust even when the giving is good." },
  { tip: "Track your giving annually", color: "#3B82F6", detail: "At year-end, look at your actual giving percentage. Most Christians significantly overestimate how much they give. The data is often humbling and clarifying." },
  { tip: "Give to what you know", color: "#F59E0B", detail: "Before increasing giving to any organization, read their annual report, look at their Charity Navigator/GiveWell rating, and understand where the money goes. Informed generosity is more consistent and more sacrificial than reactive giving." },
  { tip: "The 10/10/80 rule", color: "#10B981", detail: "Give 10% to the local church, save 10% for the future, live on 80%. This simple framework — advocated by Howard Dayton and Crown Financial Ministries — creates a foundation for long-term financial faithfulness." },
  { tip: "Consider a giving fund (DAF)", color: "#EF4444", detail: "A Donor Advised Fund (DAF) — available through Fidelity Charitable, National Christian Foundation, etc. — lets you donate in high-income years and distribute over time. You get the tax deduction immediately; you give when the time is right. NCF particularly serves Christian giving." },
  { tip: "Increase by 1% annually", color: PURPLE, detail: "If the tithe feels impossible now, commit to increasing your giving percentage by 1% every year. At that rate, someone giving 3% today reaches the tithe in 7 years — without a dramatic lifestyle shock at any single point." },
];

export default function ChristianGivingGuidePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedGiver, setSelectedGiver] = useState("muller");
  const giver = GIVERS.find(g => g.id === selectedGiver)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Giving Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The biblical theology of generosity, the best organizations to support, and practical strategies for making giving a central discipline of Christian life. You cannot out-give God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content" }}>
          {(["theology", "givers", "organizations", "practical", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Theology of Giving" : t === "givers" ? "Models of Generosity" : t === "organizations" ? "Where to Give" : t === "practical" ? "Practical Tips" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_POINTS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{p.reference}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "givers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {GIVERS.map(g => (
                <button key={g.id} onClick={() => setSelectedGiver(g.id)}
                  style={{ background: selectedGiver === g.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedGiver === g.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{g.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{g.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{g.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{giver.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{giver.era} &middot; {giver.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{giver.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{giver.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{giver.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "organizations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {GIVING_ORGS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${o.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ color: o.color, fontWeight: 800, fontSize: 15 }}>{o.name}</div>
                  <span style={{ background: `${o.color}15`, color: o.color, padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{o.priority}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: "0 0 10px" }}>{o.why}</p>
                <div style={{ background: `${o.color}08`, border: `1px solid ${o.color}15`, borderRadius: 8, padding: "6px 12px" }}>
                  <span style={{ color: o.color, fontWeight: 700, fontSize: 10 }}>HOW: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{o.how}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "practical" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {PRACTICAL_TIPS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{t.tip}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
