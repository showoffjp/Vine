"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "howto" | "orgs" | "welcome";

const STATS = [
  { value: "117 million", label: "forcibly displaced people worldwide (2024)" },
  { value: "43 million+", label: "are refugees who fled their home country" },
  { value: "Deut 10:19", label: "'Love the stranger, for you were strangers in Egypt'" },
  { value: "World Relief", label: "one of the largest resettlement agencies, is evangelical Christian" },
];

const THEOLOGY_ITEMS = [
  {
    title: "The Stranger in the Old Testament",
    body: "The Hebrew word ger (stranger, sojourner, alien) appears over 90 times in the Old Testament — more than widows and orphans combined in many passages, and almost always in the context of a command to protect and care. 'You shall not oppress a resident alien. You know the heart of an alien, for you were aliens in the land of Egypt' (Exodus 23:9). The theological logic is consistent: Israel had been the oppressed stranger in Egypt; God delivered them; therefore Israel must remember and protect the stranger among them. The Mosaic law built structural protections for the ger into Israel's social fabric: gleaning rights, inclusion in Sabbath rest, access to cities of refuge, and participation in covenant festivals (Deut 16:11-14).",
  },
  {
    title: "The Stranger in the New Testament",
    body: "Jesus identifies himself with the stranger: 'I was a stranger and you welcomed me' (Matthew 25:35). The parable of the Good Samaritan defines 'neighbor' by crossing ethnic and religious lines. The early church was itself a community of sojourners: 'Dear friends, I urge you, as foreigners and exiles, to abstain from sinful desires' (1 Peter 2:11). Paul declares: 'There is neither Jew nor Greek... for you are all one in Christ Jesus' (Galatians 3:28). The New Testament's vision of the church as a multi-ethnic, multi-national community drawn from every tribe, tongue, and nation (Revelation 7:9) is the eschatological horizon for all refugee and immigration ministry.",
  },
  {
    title: "God's Heart for the Vulnerable",
    body: "The refugee is, by definition, one who has been stripped of the ordinary protections of home, citizenship, language, and social network. They are among the most vulnerable people in the world. God's special concern for the vulnerable is a consistent thread across both Testaments: 'He executes justice for the fatherless and the widow, and loves the sojourner, giving him food and clothing' (Deuteronomy 10:18). The prophets — particularly Amos, Micah, Isaiah, and Ezekiel — repeatedly identify care for the vulnerable as the test of genuine covenant faithfulness. A church that does not engage the world's most vulnerable is a church that has not understood this thread.",
  },
  {
    title: "The Complexity of Immigration Policy and Pastoral Care",
    body: "Christians can and do disagree about immigration policy — border enforcement, visa systems, pathways to citizenship, refugee quotas. These are genuinely complex policy questions on which thoughtful Christians hold different views. But pastoral care for refugees and immigrants who are already here, in your neighborhood and your city, is not a political question — it is obedience to a direct command. Whatever your political views on immigration policy, you can welcome the person who lives next door; teach English to the woman who attends your church; provide meals to a recently arrived family; befriend a child who doesn't speak your language. The person and the policy are different conversations.",
  },
  {
    title: "The Refugee's Trauma",
    body: "Most refugees have experienced profound trauma: war, displacement, loss of family members, persecution, and often years in camps before resettlement. PTSD is nearly universal in refugee populations. The church that welcomes refugees without understanding trauma will inadvertently re-traumatize people through well-meaning but clumsy interventions. Cultural competency — understanding that grief, communication, family structure, and trust-building look different in different cultures — is essential. Patience is essential. The relationship of genuine friendship, built over years, is the only context in which the Gospel can be genuinely heard by people who have every reason to be suspicious of those who claim to help them.",
  },
  {
    title: "Ruth: The Archetypal Refugee Story",
    body: "The book of Ruth is Scripture's most extended portrait of the refugee experience — and the most theologically rich. Ruth is a Moabite (a despised foreigner) who leaves her homeland to follow Naomi back to Bethlehem. She arrives with nothing: no land, no husband, no status. Boaz — who becomes her redeemer — first notices her because of her loyalty to Naomi and because she has 'come to take refuge under the wings of the LORD God of Israel' (Ruth 2:12). The story ends with Ruth incorporated into the covenant community, married to Boaz, grandmother of David, and ancestor of Jesus. This is the Gospel pattern: the outsider welcomed, the foreigner incorporated, the broken story redeemed.",
  },
];

const HOWTO_STEPS = [
  {
    title: "Understand the Refugee Resettlement System",
    body: "In the United States, refugee resettlement is managed by the Department of State through nine Voluntary Agencies (VolAgs), most of which are faith-based. World Relief, Church World Service, Catholic Charities, Lutheran Immigration and Refugee Service, and others resettle refugees and provide initial support. When a refugee arrives, they typically receive 90 days of intensive support — housing, employment, English, transportation. After 90 days, they are largely on their own. This is where the church's role is most critical: long-term relational support that the government program cannot provide.",
  },
  {
    title: "Connect with a Local Resettlement Agency",
    body: "Every major city has one or more refugee resettlement agencies. Begin by calling the local office of World Relief, IRC (International Rescue Committee), or Catholic Charities to ask: 'How can our church support newly arrived refugees?' They will know what is needed: volunteer English tutors, drivers, furniture donors, meal providers, friendship families. Do not try to circumvent the agencies — they have the relationships with the families and the legal/cultural expertise. Partner with them.",
  },
  {
    title: "Offer What You Actually Have",
    body: "A common mistake is to offer help and then not follow through — which harms the refugee family and damages the agency's ability to recruit future volunteers. Be honest about what you can sustainably offer: one English tutoring session per week; monthly meals for one family; a specific skill (job placement connections, legal aid referrals, driving instruction). Sustained, specific, humble help is far better than grand promises that evaporate after three weeks.",
  },
  {
    title: "Learn Basic Cultural Competency",
    body: "Before engaging with a specific refugee population, learn: (1) Where are they from and what brought them here? (2) What is their religious background? (3) What are the basic customs around hospitality, food, gender interactions, and family structure? (4) What trauma might they have experienced? You don't need a PhD — you need curiosity, humility, and willingness to ask (when appropriate) and to be corrected. World Relief and IRC provide basic cultural orientation resources.",
  },
  {
    title: "The Long Game: Genuine Friendship",
    body: "The most powerful ministry to refugees is genuine, long-term friendship — not a program. A family that has an American family that truly knows them, advocates for them, celebrates their children's milestones, and is present through setbacks is experiencing something the resettlement system cannot provide. This takes years. It requires learning some words in their language, eating their food, attending their celebrations, and persisting through the discomfort of cross-cultural relationship. It is exactly what Jesus did: he left comfort, entered another culture, and stayed.",
  },
  {
    title: "Welcoming Refugees in Your Church",
    body: "The church that welcomes a refugee family is changed by the experience. Practically: (1) Identify a welcoming team of 3-5 members to be the primary relationship; (2) Learn and correctly pronounce family members' names; (3) Provide practical orientation: how the church works, what happens at the service, when people eat, what children's programs exist; (4) Find a multilingual Bible if possible; (5) Do not expect the family to immediately become like you — welcome them as they are, as Jesus welcomed you.",
  },
];

const ORGS = [
  {
    name: "World Relief",
    affiliation: "Evangelical Christian",
    description: "One of the largest refugee resettlement agencies in the U.S., explicitly evangelical. Works with local churches as the primary vehicle for refugee welcome. Church Engagement Network trains and connects local churches to refugees. Operates in 20+ countries globally.",
    programs: "Church Engagement Network, Resettlement, Global Relief",
    website: "worldrelief.org",
  },
  {
    name: "International Rescue Committee (IRC)",
    affiliation: "Non-sectarian",
    description: "Founded at Albert Einstein's suggestion in 1933. Largest international refugee NGO. Expert in emergency response, camp management, and resettlement. Good partner for churches wanting to serve but not affiliated with faith-based agencies.",
    programs: "Emergency Response, Camp Management, Resettlement",
    website: "rescue.org",
  },
  {
    name: "Preemptive Love",
    affiliation: "Christian peacemaking",
    description: "Serves refugees and war-affected families in the Middle East (Iraq, Syria, Afghanistan) and beyond. Known for going into conflict zones before others arrive. Strong storytelling and donor community.",
    programs: "Conflict Zone Relief, Refugee Support, Advocacy",
    website: "preemptivelove.org",
  },
  {
    name: "Samaritan's Purse",
    affiliation: "Evangelical Christian",
    description: "Franklin Graham's organization provides emergency relief for refugees in conflict zones worldwide. Strong in emergency response: food, shelter, medical care.",
    programs: "Emergency Relief, Food, Shelter, Medical Care",
    website: "samaritanspurse.org",
  },
  {
    name: "Lutheran Immigration and Refugee Service (LIRS)",
    affiliation: "Lutheran",
    description: "One of the nine federal VolAgs; operates across the U.S. with a network of affiliate agencies. Particularly strong in family reunification and legal services.",
    programs: "Family Reunification, Legal Services, Resettlement",
    website: "lirs.org",
  },
  {
    name: "Exodus Refugee",
    affiliation: "Evangelical/ecumenical",
    description: "Smaller agencies like Exodus Refugee (Indianapolis) offer more direct church partnership models in specific cities. Search for your local resettlement agency — most cities have at least one.",
    programs: "Church Partnership, Local Resettlement",
    website: "exodusrefugee.org",
  },
];

const WELCOME_ITEMS = [
  {
    title: "Pastoral Leadership Sets the Culture",
    body: "If the pastor does not speak about refugees, immigration, and the stranger from the pulpit, the congregation will not prioritize it. Preaching that names specific refugee communities in your city, that ties it to Deuteronomy 10 and Matthew 25, and that celebrates the diverse community around the throne in Revelation 7 — this preaching creates the permission structure for ordinary church members to engage.",
  },
  {
    title: "Practical Welcome vs. Programmatic Welcome",
    body: "The most effective church welcome is relational, not programmatic. A program (a refugee ministry committee, a monthly event) can exist without anyone actually being friends with a refugee family. Genuine welcome is personal: someone who knows a family's names, who calls to check in, who shows up when there's a crisis. Programs can support and organize relational welcome, but they cannot replace it.",
  },
  {
    title: "ESL Ministry",
    body: "English as a Second Language (ESL) ministry is one of the most practical things a church can offer and one of the most effective at building relationships. It requires volunteers who can teach basic English (many training resources available through Literacy USA and World Relief), a regular meeting space, and consistency. It draws people who would never otherwise engage with a church — and provides a natural context for relationship and (eventually) gospel conversation.",
  },
  {
    title: "Multilingual Worship and Materials",
    body: "Even if a church cannot offer full multilingual services, small gestures matter: a welcome card in multiple languages, a translated bulletin, an interpreter for a specific family, multilingual signage. When a family hears even a few words of their language from the front, they hear: 'You are expected here. This space is for you too.' Many denominations have worship resources in dozens of languages — ask your denominational resources office.",
  },
  {
    title: "Legal Aid and Advocacy",
    body: "Many refugees navigate complex legal situations: asylum applications, family reunification cases, work permit renewals, citizenship processes. Churches can: partner with local immigration legal aid organizations (Catholic Legal Immigration Network, CLINIC; local legal aid societies); help with transportation to legal appointments; advocate for clients facing unjust deportation. Legal advocacy is a form of the prophetic tradition — speaking for those who cannot speak for themselves.",
  },
  {
    title: "When the Political Gets Personal",
    body: "When your church members disagree sharply about immigration policy, and a refugee family is sitting in the pew, you are in a pastoral moment. Teach the distinction: pastoral care for people in front of you is different from policy debates. Model the distinction in how you speak. Do not let policy disagreement become a reason to withhold pastoral care from actual human beings who are actually present. The Good Samaritan did not first determine whether the man in the ditch had entered legally.",
  },
];

export default function RefugeeMinistryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expandedTheology, setExpandedTheology] = useState<number | undefined>(undefined);
  const [expandedWelcome, setExpandedWelcome] = useState<number | undefined>(undefined);

  const toggleTheology = (i: number) => setExpandedTheology(expandedTheology === i ? undefined : i);
  const toggleWelcome = (i: number) => setExpandedWelcome(expandedWelcome === i ? undefined : i);

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Foundation" },
    { id: "howto", label: "How to Get Involved" },
    { id: "orgs", label: "Organizations" },
    { id: "welcome", label: "Welcoming Church" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
            Welcoming the Stranger: A Guide to Refugee Ministry
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 660, margin: "0 auto", lineHeight: 1.75 }}>
            The Bible speaks more about how God's people treat the stranger and foreigner than almost any other social ethic. Refugee ministry is not a political position — it is a biblical mandate.
          </p>
        </div>

        {/* Stats Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Biblical Foundation — accordion */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}
              >
                <button
                  onClick={() => toggleTheology(i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>
                    {expandedTheology === i ? "−" : "+"}
                  </span>
                </button>
                {expandedTheology === i && (
                  <div style={{ padding: "0 24px 22px" }}>
                    <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: How to Get Involved — vertical numbered timeline */}
        {activeTab === "howto" && (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 28,
                bottom: 28,
                width: 2,
                background: `linear-gradient(to bottom, ${PURPLE}, ${GREEN})`,
              }}
            />
            {HOWTO_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 24, marginBottom: 24, position: "relative" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: PURPLE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "#fff",
                    flexShrink: 0,
                    zIndex: 1,
                    border: `2px solid ${BG}`,
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "18px 22px",
                    flex: 1,
                  }}
                >
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10, marginTop: 0 }}>{step.title}</h3>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Organizations — 2-column grid */}
        {activeTab === "orgs" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ORGS.map((org, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: "0 0 4px" }}>{org.name}</h3>
                  <span
                    style={{
                      background: `${PURPLE}22`,
                      color: PURPLE,
                      padding: "2px 10px",
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {org.affiliation}
                  </span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{org.description}</p>
                <div>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 3 }}>
                    Key Programs
                  </div>
                  <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{org.programs}</div>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <span style={{ color: MUTED, fontSize: 12 }}>Website: </span>
                  <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>{org.website}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Building a Welcoming Church — accordion */}
        {activeTab === "welcome" && (
          <div>
            {WELCOME_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}
              >
                <button
                  onClick={() => toggleWelcome(i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>
                    {expandedWelcome === i ? "−" : "+"}
                  </span>
                </button>
                {expandedWelcome === i && (
                  <div style={{ padding: "0 24px 22px" }}>
                    <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
