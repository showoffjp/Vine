"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Marriage as Covenant", verse: "Malachi 2:14", body: "Scripture consistently describes marriage as a covenant — a binding commitment made before God, not merely a social contract between two parties. 'The Lord is the witness between you and the wife of your youth... though she is your partner, the wife of your marriage covenant' (Malachi 2:14). Covenant language means: this is not dissolved by disappointment or the fading of feeling. It is a promise, and promises create identity." },
  { title: "Marriage as Gospel Picture", verse: "Ephesians 5:25-32", body: "'Husbands, love your wives, just as Christ loved the church and gave himself up for her' (Ephesians 5:25). Paul's most extended teaching on marriage is entirely structured around the marriage of Christ and the church. This means Christian marriage is not primarily about personal fulfillment — it is a display, in the ordinary fabric of daily life, of the love of God for his people. The stakes are theological, not just relational." },
  { title: "The Purpose of Marriage", verse: "Genesis 2:18", body: "'It is not good for the man to be alone. I will make a helper suitable for him' (Genesis 2:18). Before sin, God declared aloneness not good. Marriage addresses this — but not by completing the incomplete. The biblical purpose of marriage is not to find your 'other half' but to covenant with someone for the sake of knowing and being known, bearing image together, and pursuing God together." },
  { title: "Mutual Submission", verse: "Ephesians 5:21", body: "'Submit to one another out of reverence for Christ' (Ephesians 5:21). The household code of Ephesians 5 begins with this mutual instruction before the specific roles are addressed. The entire section is under the umbrella of mutual submission. The husband's headship is specifically described as sacrificial service (5:25-28); the wife's response is specifically described as trust within that context, not general subordination." },
  { title: "When Marriage Is Hard", verse: "Matthew 19:6", body: "Jesus' teaching on divorce in Matthew 19 is demanding: what God has joined, humans should not separate. But it was spoken in the context of men divorcing wives for trivial reasons. Jesus raised the bar — not to trap people in abusive situations but to protect the vulnerable and take covenant seriously. Hard marriages are not signs of God's absence; they may be the site of the most profound formation." },
];

const SEASONS = [
  { season: "Newlyweds (0-3 years)", color: "#10B981", challenges: "Adjustment to shared life, expectation collision, discovering each other's patterns of conflict and intimacy. The honeymoon ends — which is not a crisis but a beginning.", guidance: "Fight well: establish patterns of repair early. No silent treatment, no contempt, no stonewalling. The patterns you establish in year one tend to persist. Get premarital counseling if you didn't, or couples counseling early — not as a last resort but as maintenance." },
  { season: "Young Family (children under 10)", color: "#3B82F6", challenges: "Sleep deprivation, identity shifts (you are now parents), loss of couple time and intimacy, disagreement on parenting philosophy, financial pressure.", guidance: "Protect the marriage while raising children. Children who see their parents in a loving marriage are more securely formed than children who are the center of everything. Date night is not a luxury — it is maintenance. Outsource childcare to protect couple time." },
  { season: "Mid-Marriage (10-25 years)", color: PURPLE, challenges: "Growing apart through different career paths, shifting identities, accumulated resentments, and the comfort that becomes distance. Some couples discover they have been coexisting rather than growing together.", guidance: "Regular honest conversation about where you each are. Don't assume you know each other — ask. Annual retreats or conversations: 'Where are we? What do we need? What are we each hoping for this year?' Counseling is often most useful here, before the damage is severe." },
  { season: "Empty Nest (children left)", color: "#F59E0B", challenges: "Who are we to each other now that the project of raising children is complete? Some couples discover they have organized their marriage around the children and barely know each other.", guidance: "This is one of the great opportunities of marriage: rediscovery. Many couples describe the empty nest years as the best of their marriage when entered with intentionality. Travel, shared projects, deeper conversation. Ask: 'What have we always wanted to do together?'" },
  { season: "Later Marriage (retirement+)", color: "#EF4444", challenges: "Health challenges, grief (your parents, friends, and eventually each other's decline), recalibrating roles (especially if one partner worked and the other managed the home), proximity without purpose.", guidance: "Shared purpose matters more in this season than any other. Volunteer together, pursue faith together, build something together. The absence of external structure requires internal intentionality. Tend to each other's health and spirit." },
];

const MARRIAGE_VOICES = [
  {
    id: "keller",
    name: "Tim and Kathy Keller",
    era: "20th-21st century",
    context: "The Meaning of Marriage (2011); Tim was founding pastor of Redeemer Presbyterian Church, NYC",
    bio: "Tim and Kathy Keller wrote The Meaning of Marriage after decades of marriage and pastoral work. The book argues that the Western romantic ideal — finding the person who will complete you and make you happy — is precisely what makes modern marriages fail. Marriage is not finding someone to make you happy; it is a covenant to serve and know someone over a lifetime. The gospel, not romance, is the foundation of a durable marriage.",
    quote: "In marriage, each person is surrendering the same amount of freedom to get something better in return: knowing and being known by another person at the deepest level.",
    contribution: "The Kellers brought together robust theology and pastoral realism. Their central insight is that marriage is a gospel-shaped institution: it only works when both partners adopt the posture of Christ toward the church — self-giving, patient, long-suffering, committed to the good of the other. Romantic marriage collapses under the weight of mutual expectation; servant marriage deepens under pressure.",
  },
  {
    id: "chapman",
    name: "Gary Chapman",
    era: "20th-21st century",
    context: "The Five Love Languages (1992); pastoral counselor and marriage ministry leader",
    bio: "Gary Chapman spent decades as a marriage counselor before publishing The Five Love Languages in 1992. The book has sold over 20 million copies in 50 languages. His core insight is simple: people give and receive love in different primary ways (words of affirmation, acts of service, receiving gifts, quality time, physical touch), and couples in distress are often not failing to love each other — they are speaking different languages and neither person is receiving what the other intends.",
    quote: "My love language and the love language of my spouse may be as different as Chinese and English.",
    contribution: "Chapman's framework gave millions of couples a vocabulary for the specific ways they felt loved and unloved. Its practical genius is that it converts vague complaints into specific observations that can be responded to concretely. The limitation he acknowledges: languages can be learned, but only love provides the motivation to learn them.",
  },
  {
    id: "gottman",
    name: "John Gottman",
    era: "20th-21st century",
    context: "Relationship researcher; The Seven Principles for Making Marriage Work (1999); founder of the Gottman Institute",
    bio: "John Gottman is a researcher, not a pastor — but his 40+ years of studying couples makes him one of the most important voices on what actually sustains or destroys marriages. His research identified four communication patterns he calls the Four Horsemen: contempt, criticism, defensiveness, and stonewalling. Of these, contempt — treating a spouse as beneath you — is the single most reliable predictor of divorce. His work provides an empirical foundation for what Scripture commands: honor one another.",
    quote: "Contempt is the sulfuric acid of love.",
    contribution: "Gottman's contribution to Christian marriage is an empirical account of what the New Testament commands look like when violated. His research on the 5:1 ratio (five positive interactions for every negative one in stable marriages) gives a measurable target for what Paul means by 'speaking the truth in love.' His work on repair — recovering quickly from conflict — confirms that the issue is not whether couples fight but how they make up.",
  },
  {
    id: "elliot",
    name: "Elisabeth Elliot",
    era: "20th century",
    context: "Let Me Be a Woman (1976); missionary; wife of Jim Elliot, martyred in Ecuador in 1956",
    bio: "Elisabeth Elliot was widowed at 29 when her husband Jim was killed by the Auca people he was trying to reach. She later returned to live among those people with her young daughter. She remarried twice. Her book Let Me Be a Woman was written to her daughter Valerie before her wedding and addresses womanhood, femininity, and marriage from a perspective formed by profound loss and unconventional life. She was uncompromising on biblical complementarity and equally uncompromising on the cost of genuine love.",
    quote: "The secret is Christ in me, not me in a different set of circumstances.",
    contribution: "Elliot spoke to marriage from a place of genuine suffering that gave her words weight most marriage books cannot claim. She did not have the luxury of idealism. Her contribution is a vision of faithful love that does not depend on favorable circumstances, reciprocation, or the survival of the other person — love as a vocation chosen and re-chosen regardless of the outcome.",
  },
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "20th century",
    context: "German theologian; wedding sermon written from prison in 1943 for his niece; executed 1945",
    bio: "Bonhoeffer wrote one of the most profound pieces ever written on marriage while awaiting execution in a Nazi prison. He composed a wedding sermon for his niece Renate and her husband in 1943, to be read in his absence. He had himself become engaged to Maria von Wedemeyer while in prison — a relationship he would never live out. From that specific position, his words on marriage carry a weight they could not carry from a comfortable study.",
    quote: "It is not your love that sustains the marriage. It is the marriage that sustains your love.",
    contribution: "Bonhoeffer's insight inverts the romantic assumption: marriage is not the container of a feeling; it is the structure that shapes and sustains feeling over time. Love is not what you bring to marriage — it is what marriage forms in you. His words from prison, written by a man who would never marry, are among the most truthful words ever written about what marriage is for.",
  },
];

const PRACTICES = [
  { title: "The Weekly Check-In", desc: "Once a week, ask each other: 'How are you really doing? What's the best thing from this week? What's been hardest? What do you need from me this week?' This is not therapy — it is maintenance. Marriages that stay connected have regular practices of connection, not just crisis responses.", icon: "💬" },
  { title: "Date Night as Covenant Practice", desc: "Schedule it, protect it, keep it — not as a romantic luxury but as a structured commitment to prioritize each other. A two-hour dinner once a week is not enough to sustain a marriage alone, but its absence is often the beginning of distance.", icon: "🍽️" },
  { title: "Fight Well (Rules for Conflict)", desc: "No name-calling. No contempt. No stonewalling. Take breaks when flooded rather than escalating. Return when calm and repair specifically: 'I was wrong when I said ___.' John Gottman's research identifies contempt as the single greatest predictor of divorce.", icon: "⚔️" },
  { title: "Pray Together", desc: "Couples who pray together — even briefly, imperfectly, and simply — report significantly higher marital satisfaction. Shared prayer creates shared vulnerability and shared acknowledgment of dependence on God. Start with thirty seconds: 'Lord, help us be kind to each other today.'", icon: "🙏" },
  { title: "Read Together", desc: "A shared book — fiction, non-fiction, or a marriage book — creates a shared frame of reference for conversation. Read together in bed, or trade chapters and discuss. The discipline of shared intellectual life sustains the friendship that undergirds the marriage.", icon: "📚" },
  { title: "Invest Before Crisis", desc: "Marriage counseling as a last resort means the problems have had years to calcify. The most effective couples investment is early and regular — a weekend retreat, a few sessions of counseling annually, a marriage enrichment program when things are good. Prevention is cheaper than repair.", icon: "🛡️" },
];

type Tab = "theology" | "seasons" | "voices" | "practices" | "videos";

export default function ChristianMarriagePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selected, setSelected] = useState<string>("Newlyweds (0-3 years)");
  const [selectedVoice, setSelectedVoice] = useState("keller");

  const season = SEASONS.find(s => s.season === selected);
  const voice = MARRIAGE_VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Marriage</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Marriage is a covenant, not a contract — and a picture of the gospel. Christ loved the church and gave himself up for her. That is the model, the standard, and the power available to Christian couples.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "seasons" as const, label: "Seasons", icon: "🌱" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
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

        {activeTab === "seasons" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {SEASONS.map(s => (
                <button key={s.season} onClick={() => setSelected(s.season)}
                  style={{ width: "100%", background: selected === s.season ? `${s.color}15` : "transparent", border: `1px solid ${selected === s.season ? s.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selected === s.season ? s.color : TEXT, fontWeight: 700, fontSize: 13 }}>{s.season}</span>
                </button>
              ))}
            </div>
            {season && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${season.color}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: season.color, fontWeight: 900, fontSize: 22, marginBottom: 20 }}>{season.season}</h2>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>COMMON CHALLENGES</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{season.challenges}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>GUIDANCE</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{season.guidance}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {MARRIAGE_VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: 0 }}>{voice.name}</h2>
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
                Marriage is not sustained by feeling — it is sustained by practice. These habits are not romantic extras; they are the structure that makes love possible over decades.
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
                Sermons, lectures, and teachings on Christian marriage — the theology of covenant, the meaning of marriage, and how to build a lasting union.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "xICD5Ycsu04", title: "A Covenant Relationship", channel: "Timothy Keller", description: "Keller explains why the Bible describes marriage as a covenant rather than a contract — and what that distinction means for how we love our spouse." },
                  { videoId: "JvAbHOfLIyY", title: "Marriage as Commitment and Priority", channel: "Timothy Keller", description: "A sermon on how being filled with the Spirit transforms marriage — and how commitment, not feeling, is the foundation of a lasting union." },
                  { videoId: "OYrRoafD3OU", title: "Tim Keller and Kathy Keller on The Christian Marriage", channel: "Desiring God / Gospel Coalition", description: "Tim and Kathy Keller discuss what a Christian marriage actually looks like — how the gospel shapes sacrifice, forgiveness, and the daily practice of love." },
                  { videoId: "XoxYPXqqO34", title: "The Meaning of Marriage Bible Study — Session One", channel: "Timothy and Kathy Keller", description: "Session one of the Kellers' Meaning of Marriage Bible study — exploring what God's word says about the purpose and design of marriage." },
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
