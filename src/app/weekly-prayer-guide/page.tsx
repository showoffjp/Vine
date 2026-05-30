"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DAYS = [
  {
    day: "Sunday",
    short: "SUN",
    color: "#F59E0B",
    theme: "The Church & Worship",
    verse: "Psalm 122:1",
    opening: "Lord, on this day when your people gather around the world — in Kampala and Kinshasa, in Seoul and São Paulo, in small house churches and great cathedrals — we remember that we are not alone. The church is your body, your bride. Help us to worship in spirit and in truth today.",
    prompts: [
      { title: "Adoration", text: "Praise God for what the church is — the body of Christ, called out of darkness. Name specific attributes of God you want to worship today." },
      { title: "For Your Church Family", text: "Pray by name for 2-3 people in your church. What do you know of their needs? Their struggles? Their joys? Bring them specifically to God." },
      { title: "For Your Pastor(s)", text: "Pray for the one(s) who will preach today. Ask for clarity, unction, courage to preach the whole counsel of God. Pray for their family." },
      { title: "For the Global Church", text: "Pray for one country where the church is under pressure. (Open Doors: opendoorsusa.org/pray). Ask God to strengthen believers there." },
      { title: "Confession", text: "Is there anything that would hinder authentic worship today? Bring it honestly. Receive the assurance: there is now no condemnation for those in Christ (Romans 8:1)." },
    ],
    closing: "Send us from worship today not just informed but transformed. Let what we receive in word and sacrament overflow into the week ahead.",
  },
  {
    day: "Monday",
    short: "MON",
    color: "#3B82F6",
    theme: "Work & Vocation",
    verse: "Colossians 3:23",
    opening: "Lord, you are Lord of all of life — not just Sundays. Meet me here, at the beginning of the work week. Help me to work as for you and not for human masters — with diligence, integrity, and genuine care for those I serve alongside.",
    prompts: [
      { title: "Surrender the Week", text: "Name your week's major tasks, responsibilities, or challenges. Give each one to God: 'This belongs to you.' Ask for his purposes to govern your schedule." },
      { title: "Pray for Colleagues", text: "Pray by name for 2-3 people you work with. Who needs Christ? Who needs encouragement? Who is under pressure? Ask God to make you a blessing to them specifically." },
      { title: "Integrity Prayer", text: "Ask for specific integrity in the temptations most common in your work: cutting corners, taking credit, treating people as means, compromising on truth. Name the specific one most relevant to your situation." },
      { title: "For the Unemployed and Underemployed", text: "Pray for those who want to work but cannot find meaningful work, or who are working jobs far below their capacity. Ask God to provide, sustain their dignity, and open doors." },
      { title: "Vocational Clarity", text: "If you have questions about your calling, work, or direction — bring them honestly. 'Lord, I don't know if this is where I should be. Show me.' Rest in not needing to know everything today." },
    ],
    closing: "Whatever my hands find to do today, let me do it well — not for approval or security, but as an offering to you.",
  },
  {
    day: "Tuesday",
    short: "TUE",
    color: PURPLE,
    theme: "Family & Relationships",
    verse: "Ephesians 3:14-15",
    opening: "Lord, you are Father — the source of all fatherhood and motherhood and family. Every family in existence derives its name and nature from you. In my own family — broken or whole, close or distant — let your love be present and formative.",
    prompts: [
      { title: "Pray for Your Family", text: "Name every member of your immediate family. For each one: what is one specific thing they need from God right now? Bring it. For each one: is there anything between you that needs confession or repair?" },
      { title: "For Marriage (If Applicable)", text: "Pray for your spouse specifically — for their spiritual life, their burdens, their particular needs this week. Ask to be the kind of spouse they need, not the kind you wish they were." },
      { title: "For Children (If Applicable)", text: "Pray for your children by name — for their faith, their formation, their struggles, their friendships, their sense of identity in Christ. Ask for wisdom in parenting them specifically, not generically." },
      { title: "For Difficult Relationships", text: "Name one relationship that is genuinely hard right now. Don't justify yourself or condemn them. Simply bring the relationship to God and ask: what would you have me do?" },
      { title: "For the Lonely", text: "Pray for people you know who are isolated — widows, divorced persons, empty-nesters, those far from family. Ask God how you might be a presence of community to someone specific." },
    ],
    closing: "Let my closest relationships be the place where I practice most honestly what I profess most loudly. Let me be, in my family, what I say I believe.",
  },
  {
    day: "Wednesday",
    short: "WED",
    color: "#10B981",
    theme: "Evangelism & the Lost",
    verse: "Romans 10:14-15",
    opening: "Lord, how beautiful on the mountains are the feet of those who bring good news. There are people near me today who do not know you — colleagues, neighbors, friends, family members. Give me eyes to see them. Give me love that makes me willing to be awkward for the gospel.",
    prompts: [
      { title: "Name Specific People", text: "Name 3-5 people in your life who don't know Jesus. Pray for each one by name. What do you know about their lives, needs, and objections? Ask God to prepare their hearts and to give you an opportunity." },
      { title: "For Boldness", text: "Honestly confess the fear or awkwardness you feel about sharing the gospel. Ask for the specific courage you need — not abstract boldness but the ability to say the one thing to the one person you've been avoiding." },
      { title: "For the Unreached", text: "Pray for one unreached people group (joshuaproject.net for specifics). Pray for the 40% of the world's population who have no access to the gospel within their cultural context — no church they could attend, no Christian they know." },
      { title: "For Evangelistic Opportunities This Week", text: "Ask God to create one specific opportunity to share your faith or bear witness this week. Ask for eyes to see it when it comes." },
      { title: "For Those Who Are Close", text: "Pray for anyone you know who seems near to faith — asking questions, attending church, reading. Ask God to bring them across the threshold." },
    ],
    closing: "Lord, let me see people the way you see them — not as projects but as people you love and died for. Let my love for them be real enough to make me willing to speak.",
  },
  {
    day: "Thursday",
    short: "THU",
    color: "#EF4444",
    theme: "The World & Its Leaders",
    verse: "1 Timothy 2:1-2",
    opening: "Lord, you are the King of kings and Lord of lords — every earthly authority exists under your sovereignty and by your permission. I pray for the world you made and the nations you love, that all peoples would come to know you.",
    prompts: [
      { title: "For National Leaders", text: "Pray for your nation's leaders by name — president, prime minister, elected officials. Not for their policies specifically but for their souls, their wisdom, their integrity. Paul commands this prayer for the Nero who was persecuting Christians." },
      { title: "For Justice", text: "Pray for justice in one specific situation — a country where oppression is severe, a court case you know about, a community facing injustice. Ask for God's righteousness to roll down like waters." },
      { title: "For War-Torn Nations", text: "Pray for one country currently experiencing armed conflict. Ask for ceasefire, protection of civilians, and the gospel to reach people in crisis. Many of the fastest-growing church movements in history have happened during conflict." },
      { title: "For Refugees and the Displaced", text: "UNHCR estimates over 100 million displaced people globally. Pray for refugees — for safety, dignity, provision, and encounters with the church. Ask God how you and your church might respond." },
      { title: "For the Church's Witness in Culture", text: "Pray for Christians in politics, media, business, academia, and the arts — that they would be faithful and distinctive, not merely functional. Ask for the courage of Daniel, who served Babylon faithfully without becoming Babylonian." },
    ],
    closing: "You are writing history. Help me to read it well — to grieve rightly, to hope truly, and to act faithfully in the small corner of the world you've put me in.",
  },
  {
    day: "Friday",
    short: "FRI",
    color: "#A855F7",
    theme: "Personal Confession & Renewal",
    verse: "1 John 1:9",
    opening: "Lord, as the week ends and I look back — where have I failed you? Where have I failed others? Where have I pursued my own kingdom rather than yours? I come not to grovel but to be honest, because you already know, and because your forgiveness is real.",
    prompts: [
      { title: "Honest Inventory", text: "Walk through the week: Monday through today. Where did you sin in action? In thought? In what you said? In what you didn't say? In what you didn't do? Don't rush this. Be specific." },
      { title: "Receive Forgiveness", text: "For each thing you named: hear the word of the cross. He was wounded for our transgressions. If we confess our sins, he is faithful and just to forgive us and cleanse us from all unrighteousness. Receive it. Don't add to it." },
      { title: "Where I Need Help", text: "What recurring struggle did this week reveal? Name the pattern, not just the instance. Ask for specific grace and wisdom for next week. Ask if there's a person who could help you be accountable." },
      { title: "Gratitude for the Week", text: "Name 3-5 specific things you're grateful for from the past week. Not generic ('my health, my family') but specific — a conversation, a moment, an unexpected kindness, a prayer answered." },
      { title: "Rest and Sabbath Preparation", text: "Is there a Sabbath practice you're planning? Ask God to help you actually stop — to trust that the world will continue without your management of it. 'The Sabbath is made for humans, not humans for the Sabbath.' Rest in that." },
    ],
    closing: "You are faithful. Your mercies are new every morning. I receive them now, at the end of this week, and I rest in the finished work of the cross.",
  },
  {
    day: "Saturday",
    short: "SAT",
    color: "#00D4AA",
    theme: "Sabbath & Rest / Community",
    verse: "Hebrews 4:9-10",
    opening: "Lord, you rested on the seventh day — not because you were tired, but to model for us the rhythm you designed into creation. Help me to rest today in a way that honors you: ceasing from striving, receiving your provision, enjoying what you have given.",
    prompts: [
      { title: "Cease From Striving", text: "Name one thing you are anxious to control, fix, or manage. Give it to God explicitly: 'I am not working on this today. I trust you with it.' Practice the faith that says the world does not depend on me." },
      { title: "Enjoyment as Worship", text: "What is something genuinely good that you can enjoy today — family, food, creation, beauty, friendship? Name it and receive it as gift. The Westminster Shorter Catechism: the chief end of human beings is to glorify God and enjoy him forever." },
      { title: "For Those Who Cannot Rest", text: "Pray for those who have no Sabbath — workers in unjust conditions, caregivers without relief, the desperately poor, those in crisis. Ask how your rest might somehow bless those who cannot rest." },
      { title: "Preparing for Sunday", text: "Is there anything between you and genuine worship tomorrow? A relationship unrepaired? An attitude that will make you go through motions? Attend to it today, before Sunday. Preparation is part of worship." },
      { title: "Thankfulness for the Week's Good", text: "Let your mind drift through the week that's ending. What was genuinely good? What was a gift from God? Let your review be more gratitude than evaluation. You are not your productivity." },
    ],
    closing: "Let today be a taste of the eternal Sabbath — the rest of completion, the rest of arrival, the rest of those who have reached home. You are that rest.",
  },
];

export default function WeeklyPrayerGuidePage() {
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const day = DAYS.find(d => d.day === selectedDay)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🗓️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Weekly Prayer Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Seven days, seven themes — a structured pattern of prayer that moves from worship on Sunday through work, family, evangelism, the world, confession, and rest. Pick today and begin.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {DAYS.map(d => (
            <button key={d.day} onClick={() => setSelectedDay(d.day)}
              style={{ flex: "1 1 80px", padding: "12px 8px", borderRadius: 10, border: `1px solid ${selectedDay === d.day ? d.color : BORDER}`, background: selectedDay === d.day ? `${d.color}20` : CARD, cursor: "pointer", textAlign: "center" }}>
              <div style={{ color: selectedDay === d.day ? d.color : MUTED, fontWeight: 900, fontSize: 10, marginBottom: 2 }}>{d.short}</div>
              <div style={{ color: selectedDay === d.day ? d.color : TEXT, fontWeight: 700, fontSize: 12 }}>{d.day}</div>
            </button>
          ))}
        </div>

        <div style={{ background: CARD, border: `1px solid ${day.color}30`, borderRadius: 16, padding: 32 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ color: day.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{day.day.toUpperCase()}</div>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 26, margin: "0 0 4px" }}>{day.theme}</h2>
              <div style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, display: "inline-block" }}>{day.verse}</div>
            </div>
          </div>

          <div style={{ background: `${day.color}08`, border: `1px solid ${day.color}20`, borderRadius: 10, padding: 18, marginBottom: 24 }}>
            <div style={{ color: day.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>OPENING PRAYER</div>
            <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{day.opening}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {day.prompts.map((p, i) => (
              <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: `${day.color}20`, border: `1px solid ${day.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: day.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ color: day.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginTop: 20 }}>
            <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CLOSING PRAYER</div>
            <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{day.closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
