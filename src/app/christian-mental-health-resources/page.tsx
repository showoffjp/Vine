"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TOPICS = ["All", "Anxiety", "Depression", "Trauma", "Relationships", "Grief", "Identity"];

const RESOURCES = [
  {
    title: "Grace for the Afflicted",
    author: "Matthew Stanford",
    type: "Book",
    topic: "Depression",
    color: "#3B82F6",
    description: "A clinical psychologist and professor of psychology/neuroscience addresses mental illness from both a scientific and theological perspective. Stanford argues that the church has often failed people with mental illness by reducing it to spiritual failure or weak faith. He provides a framework that takes both the biological reality of mental illness and the spiritual dimensions of human suffering seriously — without collapsing one into the other.",
    why: "The best single resource for Christians or church leaders trying to understand mental illness without either medicalizing or spiritualizing it.",
    url: "https://www.amazon.com/Grace-Afflicted-Clinical-Psychiatry-Theology/dp/1616388722/",
    initials: "GFA",
  },
  {
    title: "Running on Empty",
    author: "Fil Anderson",
    type: "Book",
    topic: "Anxiety",
    color: PURPLE,
    description: "Former Young Life director Fil Anderson writes about his own experience of spiritual exhaustion, performance-driven ministry, and the slow discovery of genuine rest in God's unconditional love. It is not a book about mental health per se, but about the spiritual roots of anxiety and exhaustion that many Christians experience — the fear that God only loves you when you're productive and performing. A deeply personal and honest account.",
    why: "For Christians who feel chronically exhausted in their faith but can't name why.",
    url: "https://www.amazon.com/Running-Empty-Fil-Anderson/dp/1593251858/",
    initials: "ROE",
  },
  {
    title: "Darkness Is My Closest Friend",
    author: "Catherine Campbell",
    type: "Book",
    topic: "Depression",
    color: "#EF4444",
    description: "A meditation on Psalm 88 — the only lament psalm that doesn't end in resolution, only darkness. Campbell walks through her own experience of severe depression as a Christian alongside a careful reading of this neglected psalm. She argues that biblical lament is not a failure of faith but the language God gave us for when faith is all we have left, and that even darkness is held by God.",
    why: "For Christians in severe depression who are afraid that their struggle means they've lost their faith.",
    url: "https://www.amazon.com/Darkness-Is-My-Closest-Friend/dp/0825442834/",
    initials: "DMC",
  },
  {
    title: "Riddance",
    author: "Cynthia Eddy & Ed Welch",
    type: "Booklet",
    topic: "Anxiety",
    color: GREEN,
    description: "CCEF (Christian Counseling and Education Foundation) produces a series of practical booklets for specific struggles. CCEF's approach, developed by biblical counselors David Powlison and Ed Welch, integrates Scripture directly into the experience of mental and emotional difficulty without bypassing the real pain. Welch's When People Are Big and God Is Small is the longer treatment of fear and anxiety from a biblical counseling perspective.",
    why: "CCEF's free online articles and booklets are some of the most practically useful biblical counseling resources available.",
    url: "https://www.ccef.org/resources/booklets/",
    initials: "CFC",
  },
  {
    title: "The CCEF Resource Library",
    author: "Christian Counseling and Education Foundation",
    type: "Website",
    topic: "Anxiety",
    color: "#F59E0B",
    description: "The most comprehensive biblical counseling resource library available for free online. Founded by Jay Adams, developed by David Powlison, Ed Welch, Paul Tripp, and others, CCEF has produced hundreds of articles, mini-books, and resources on depression, anxiety, anger, addiction, grief, marriage conflict, and more. Their approach takes both Scripture and human experience seriously without reducing one to the other.",
    why: "Before buying any self-help book, check CCEF's free library. Many answers are already there.",
    url: "https://www.ccef.org/resources/",
    initials: "CFL",
  },
  {
    title: "New Life Live (Radio Program)",
    author: "Steve Arterburn, Dr. John Townsend",
    type: "Podcast/Radio",
    topic: "Relationships",
    color: "#10B981",
    description: "The most widely heard Christian call-in counseling program in America, with millions of listeners. Steve Arterburn (founder of New Life Ministries) and clinical psychologists including Dr. John Townsend and Dr. Henry Cloud field real calls about depression, addiction, marriage problems, trauma, and family conflict. The program integrates clinical psychology with a broadly evangelical Christian worldview. Many episodes are available as a podcast.",
    why: "Accessible, real-world counseling content from licensed professionals within a Christian framework.",
    url: "https://newlife.com/new-life-live/",
    initials: "NLL",
  },
  {
    title: "Hope for the Heart (Crisis Helpline & Resources)",
    author: "June Hunt / Hope for the Heart",
    type: "Website / Hotline",
    topic: "Grief",
    color: "#EC4899",
    description: "Hope for the Heart (founded by June Hunt) provides a biblically-based counseling line (1-800-488-HOPE) as well as thousands of free resources on depression, abuse, grief, addiction, codependency, eating disorders, and more. The materials are designed for counselors, pastors, and individuals in crisis. June Hunt is also known for her 'Counseling Through Your Bible Handbook' used by biblical counselors worldwide.",
    why: "When someone is in crisis and needs immediate help with a Christian counseling perspective.",
    url: "https://www.hopefortheheart.org/",
    initials: "HFH",
  },
  {
    title: "Renovaré (Spiritual Formation Resources)",
    author: "Richard Foster, Dallas Willard, others",
    type: "Website",
    topic: "Identity",
    color: "#A855F7",
    description: "Founded by Richard Foster (author of Celebration of Discipline), Renovaré provides resources for spiritual formation and soul care — the practices that form a well-ordered inner life. Their approach recognizes that many mental and emotional struggles have a spiritual dimension: fragmented identity, habitual anxiety, and relational dysfunction are addressed through formation of the whole person. Their reading plans, retreat guides, and community tools support Christians seeking deeper wholeness.",
    why: "For those whose mental health struggles are intertwined with questions of identity, formation, and spiritual depth.",
    url: "https://renovare.org/",
    initials: "REN",
  },
  {
    title: "Boundaries",
    author: "Dr. Henry Cloud & Dr. John Townsend",
    type: "Book",
    topic: "Relationships",
    color: "#00D4AA",
    description: "The bestselling Christian psychology book on what a healthy self looks like — specifically the concept of biblical limits, ownership of our own choices, and the freedom to say no. Cloud and Townsend ground their clinical model in the doctrine of imago Dei and the character of God himself. Criticized by some as too individualistic, but widely credited with helping millions of Christians escape unhealthy patterns in relationships, families, and church contexts.",
    why: "The most widely used Christian resource on relational health and codependency.",
    url: "https://www.amazon.com/Boundaries-When-Take-Control-Your/dp/0310247454/",
    initials: "BND",
  },
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    type: "Book",
    topic: "Grief",
    color: "#F59E0B",
    description: "Lewis's raw journal written in the weeks after his wife Joy Davidman died of cancer. Published under a pseudonym (N.W. Clerk) because of its unusual honesty about the terror, anger, and disorientation of acute grief — including the sense that God has gone silent and locked the door. Lewis eventually concludes that his sense of God's absence was itself a kind of presence — the door was never locked, but he had been listening for the wrong kind of answer.",
    why: "The most honest account of Christian grief available. For anyone who has recently lost someone and is confused by the silence.",
    url: "https://www.amazon.com/Grief-Observed-C-S-Lewis/dp/0060652381/",
    initials: "AGO",
  },
  {
    title: "Trauma and the Soul",
    author: "Donald Kalsched",
    type: "Book (advanced)",
    topic: "Trauma",
    color: PURPLE,
    description: "For those wanting a deeper, more scholarly treatment — this Jungian psychoanalytic work on trauma and soul formation has influenced many Christian pastoral counselors who work with abuse survivors. It is not explicitly Christian but engages questions of the inner world, spiritual damage, and deep healing that intersect significantly with a Christian anthropology. Best read by trained counselors or those in therapy.",
    why: "For pastoral counselors and those in serious therapy dealing with complex trauma.",
    url: "https://www.amazon.com/Trauma-Soul-Psycho-Spiritual-Development/dp/0415681537/",
    initials: "TAS",
  },
  {
    title: "BetterHelp / Talkspace (Christian Therapist Filters)",
    author: "Online Therapy Platforms",
    type: "Service",
    topic: "Anxiety",
    color: "#3B82F6",
    description: "Both BetterHelp and Talkspace allow users to filter for therapists who are Christian-affirming or hold Christian worldviews. While neither platform is exclusively Christian, many licensed therapists on these platforms identify as Christians and integrate faith into their practice. For those unable to find a Christian therapist locally or who need more accessible pricing, these platforms provide a starting point. Psychology Today's therapist directory also allows filtering for 'Christian' as a specialty.",
    why: "For immediate access to licensed Christian-friendly therapists without long waitlists.",
    url: "https://www.betterhelp.com/",
    initials: "BTH",
  },
];

export default function ChristianMentalHealthResourcesPage() {
  const [topic, setTopic] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = RESOURCES.filter(r => topic === "All" || r.topic === topic);
  const resource = RESOURCES.find(r => r.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧠</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Mental Health Resources</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The church is not called to choose between the gospel and mental health care — it is called to offer both. These resources take Scripture and psychological reality seriously at the same time.
          </p>
        </div>

        <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 18, marginBottom: 28 }}>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: PURPLE }}>In a crisis?</strong> Call or text 988 (Suicide & Crisis Lifeline) or text HOME to 741741 (Crisis Text Line). Hope for the Heart: 1-800-488-HOPE. These are available 24/7 with Christian counselors available.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {TOPICS.map(t => (
            <button key={t} onClick={() => setTopic(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${topic === t ? GREEN : BORDER}`, background: topic === t ? `${GREEN}15` : "transparent", color: topic === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: resource ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((r, i) => (
              <button key={i} onClick={() => setSelected(selected === r.title ? null : r.title)}
                style={{ background: selected === r.title ? `${r.color}12` : CARD, border: `1px solid ${selected === r.title ? r.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${r.color}20`, border: `1px solid ${r.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: r.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {r.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{r.title}</span>
                      <span style={{ background: `${r.color}15`, color: r.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{r.type}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{r.author}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{r.topic}</span>
                </div>
              </button>
            ))}
          </div>

          {resource && (
            <div style={{ background: CARD, border: `1px solid ${resource.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${resource.color}20`, border: `1px solid ${resource.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: resource.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                  {resource.initials}
                </div>
                <div>
                  <h2 style={{ color: resource.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{resource.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{resource.author} · {resource.type}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                <span style={{ background: `${resource.color}12`, color: resource.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{resource.topic}</span>
                <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{resource.type}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{resource.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY THIS RESOURCE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{resource.why}</p>
              </div>

              <a href={resource.url} target="_blank" rel="noopener noreferrer"
                style={{ background: `${resource.color}15`, border: `1px solid ${resource.color}30`, color: resource.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                🔗 Access Resource
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
