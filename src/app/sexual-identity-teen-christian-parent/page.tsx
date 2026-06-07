"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Your Child Is Still Your Child",
    verse: "Luke 15:20",
    text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\" The parable of the prodigal son is not primarily about sexuality — but it is about a parent who did not wait for resolution before offering welcome. The embrace preceded any discussion of what had happened. Many Christian parents find themselves at a crossroads where they believe they must choose between their faith and their child. This is frequently a false choice. Your child needs to know they are loved before they can hear anything else you have to say.",
  },
  {
    title: "The Church Has Often Failed LGBTQ+ People and Their Families",
    verse: "Matthew 23:4",
    text: "\"They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them.\" The rate of LGBTQ+ youth homelessness, suicide, and family rejection in church-attending households is a documented crisis. Forty percent of homeless youth identify as LGBTQ+, and family rejection is the primary driver. Whatever one's theological convictions about sexuality, the pastoral situation demands an examination of whether the church's posture has been adding burden without offering care.",
  },
  {
    title: "Sexuality and Identity Are Not the Same Thing",
    verse: "Galatians 3:28",
    text: "\"There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.\" A person's deepest identity in Christian theology is their status as image-bearer and, for believers, child of God. Sexual orientation — whatever one believes about its moral significance — is not the primary category by which Christians understand themselves or one another. This does not resolve the theological debate, but it does establish that no person should be reduced to their sexual experience or attraction.",
  },
  {
    title: "The Pastoral Situation Requires Patience, Not Speed",
    verse: "James 1:19",
    text: "\"My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry.\" When a teenager discloses their sexual identity or orientation, many Christian parents respond with immediate theological arguments or attempts to fix the situation. James's counsel is the opposite: listen first. The adolescent who has just disclosed something profoundly vulnerable will not be persuaded by arguments they do not feel safe to hear. Safety comes first, then conversation.",
  },
  {
    title: "Different Theological Positions Exist Within Faithful Christianity",
    verse: "Romans 14:1",
    text: "\"Accept the one whose faith is weak, without quarreling over disputable matters.\" Christians who take Scripture seriously have arrived at different conclusions about homosexuality — not because some take the Bible seriously and others do not, but because the hermeneutical questions are genuinely complex. Parents need to be honest about this landscape rather than presenting one position as the only faithful option. This does not mean every position is equally defensible — it means the family conversation benefits from acknowledging real complexity rather than pretending it does not exist.",
  },
];

const voices = [
  {
    id: 1,
    name: "Mark Yarhouse",
    role: "Psychologist, Author of Understanding Sexual Identity",
    quote: "The most important thing a Christian parent can do when their child discloses their sexual identity is to stay in the room. The relationship is the most important thing.",
    bio: "Yarhouse is a clinical psychologist who has written extensively on sexual identity from a Christian perspective, developing frameworks that allow for honest conversation without requiring adolescents to choose between faith identity and sexual identity.",
  },
  {
    id: 2,
    name: "Preston Sprinkle",
    role: "Author, Embodied; Founder, Center for Faith, Sexuality and Gender",
    quote: "The question for Christian parents is not just 'what does the Bible say about homosexuality?' but 'how do I love my child and maintain a relationship that allows me to speak into their life over decades?'",
    bio: "Sprinkle holds a traditional view of sexual ethics while calling the church to radical relational care for LGBTQ+ people. His work provides a framework for parents who want to maintain both their convictions and their relationships.",
  },
  {
    id: 3,
    name: "Dr. Caitlin Ryan",
    role: "Family Acceptance Project, San Francisco State University",
    quote: "The research is clear: family rejection — especially in religious households — is the single most powerful predictor of negative outcomes for LGBTQ+ youth. And family acceptance is the most powerful predictor of flourishing.",
    bio: "Ryan's Family Acceptance Project research has documented the catastrophic impact of religiously-motivated family rejection on LGBTQ+ youth outcomes and the protective power of even modest levels of acceptance — even when families disagree with their child's identity.",
  },
  {
    id: 4,
    name: "Greg Coles",
    role: "Author, Single Gay Christian",
    quote: "I didn't need my parents to tell me their theology before they told me they loved me. I needed to know the love was there — that I had not lost them — before any theological conversation was possible.",
    bio: "Coles, who holds a celibate vocation and traditional theological views, has written honestly about what he needed from his Christian parents when he disclosed his sexuality, and why relationship had to precede theology.",
  },
];

const practices = [
  {
    icon: "👂",
    title: "Listen Before You Speak — For Longer Than Feels Natural",
    text: "When your teenager discloses their sexual identity, your first response will shape the entire future of the relationship and your capacity to have any influence. Ask questions. Do not argue. Do not fix. Do not correct immediately. Say 'Thank you for trusting me' and 'I love you' and 'I need some time to think about this, but I want you to know this does not change that.' Then take the time.",
  },
  {
    icon: "📚",
    title: "Educate Yourself Before You Have the Big Conversation",
    text: "Read before you respond definitively. Mark Yarhouse's Understanding Sexual Identity, Preston Sprinkle's Embodied, and the Family Acceptance Project research are essential starting points. Your teenager has likely been processing this for years before telling you. You owe them time to understand the landscape before you declare your position.",
  },
  {
    icon: "🧠",
    title: "Get Therapy — For Yourself and Your Family",
    text: "A therapist who specializes in LGBTQ+ youth and family dynamics can be transformative — not to change your teenager's orientation, but to help your family communicate through a genuinely difficult situation. Research conversion therapy: it is documented to cause harm and is not recommended by any major medical or psychological organization.",
  },
  {
    icon: "🤝",
    title: "Connect with Other Christian Parents",
    text: "You are not the first Christian parent in this situation. Seek out communities of Christian parents navigating the same questions — many exist in denominational settings. PFLAG has chapters across the country, and the Center for Faith, Sexuality and Gender (centerforfaith.com) provides resources specifically for faith communities.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Can Hold This Complexity",
    text: "Not every church is equipped to walk alongside families navigating sexual identity questions. Some will add shame; some will offer a false simplicity. Seek a community that can hold the complexity — that loves your teenager, supports your family, takes theology seriously, and does not demand you resolve everything on a timeline.",
  },
  {
    icon: "🔗",
    title: "Protect the Relationship at All Costs",
    text: "The research from Caitlin Ryan's Family Acceptance Project is unambiguous: LGBTQ+ youth whose families maintain relationship have dramatically better mental health, spiritual health, and safety outcomes than those whose families reject them. Maintaining relationship does not require abandoning your convictions — it requires keeping the connection alive so that conversation is possible over years and decades.",
  },
];

const scriptures = [
  { verse: "Luke 15:20", text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\"" },
  { verse: "1 John 4:18", text: "\"There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.\"" },
  { verse: "Matthew 22:37–39", text: "\"Love the Lord your God with all your heart and with all your soul and with all your mind... Love your neighbor as yourself.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life, neither angels nor demons... neither height nor depth... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Proverbs 22:6", text: "\"Start children off on the way they should go, and even when they are old they will not turn from it.\"" },
  { verse: "James 1:19", text: "\"Everyone should be quick to listen, slow to speak and slow to become angry.\"" },
];

type SexualIdentityEntry = {
  id: string;
  date: string;
  heard: string;
  feeling: string;
  prayer: string;
};

export default function SexualIdentityTeenChristianParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SexualIdentityEntry[]>([]);
  const [heard, setHeard] = useState("");
  const [feeling, setFeeling] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_sexualidentityteenparent_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!heard.trim()) return;
    const entry: SexualIdentityEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      heard,
      feeling,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexualidentityteenparent_entries", JSON.stringify(updated));
    setHeard(""); setFeeling(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexualidentityteenparent_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🧡</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Sexual Identity, Teens & Christian Parents
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christian parents whose teenager has disclosed questions about their sexual identity — resources to help you listen before you speak, stay in relationship through complexity, and navigate one of the most pastorally demanding situations a family can face.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Crisis Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Trevor Project:</strong> 1-866-488-7386 | <strong>Center for Faith, Sexuality & Gender:</strong> centerforfaith.com
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What have you heard from your teenager — what did they need you to understand?</label>
                <textarea value={heard} onChange={e => setHeard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What are you honestly feeling — grief, fear, confusion, love?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for your child and for wisdom in how to love them well:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.heard && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Heard:</strong> {e.heard}</p>}
                {e.feeling && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Feeling:</strong> {e.feeling}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="CG7FQXBKO28" title="Preston Sprinkle — How Should Christian Parents Respond When Their Teen Comes Out?" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Preston Sprinkle: How Should Christian Parents Respond When Their Teen Comes Out?</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical pastoral guidance for the first conversation and beyond — how to lead with love while holding your convictions</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="MJkVFLjYZPE" title="Mark Yarhouse — Sexual Identity and Christian Faith: What Parents Need to Know" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Mark Yarhouse: Sexual Identity and Christian Faith — What Parents Need to Know</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Psychologist Mark Yarhouse on the frameworks Christian parents need to understand adolescent sexual identity and maintain vital relationships</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="U4fhfWjKcyc" title="Family Acceptance Project — What the Research Says About Religious Families and LGBTQ Youth" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Family Acceptance Project: What Research Shows About Faith, Family, and LGBTQ+ Youth</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The compelling research on how family rejection and acceptance shape outcomes for LGBTQ+ youth in religious households</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Vqk-vFJ0W9E" title="Greg Coles — What I Needed From My Christian Parents When I Came Out" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Greg Coles: What I Needed From My Christian Parents When I Came Out</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>A celibate gay Christian reflects on what his parents did right, what the church often gets wrong, and what teenagers most need from their families</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
