"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Poverty Is Not a Sign of Spiritual Failure",
    verse: "Proverbs 19:17",
    text: "\"Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done.\" Prosperity theology has done devastating harm to the poor by framing material lack as a faith deficit. The Scripture consistently treats poverty as a structural and systemic reality — not a spiritual report card. God's identification with the poor is not conditional on the poor fixing their theology.",
  },
  {
    title: "Jesus's First Sermon Was a Declaration to the Poor",
    verse: "Luke 4:18",
    text: "\"The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.\" Jesus did not say good news about the poor, or good news for the spiritually humble. He said good news to the poor — meaning those materially lacking. The church that omits economic reality from the gospel has abbreviated the gospel Jesus preached.",
  },
  {
    title: "The Law Was Engineered to Prevent Permanent Poverty",
    verse: "Leviticus 25:35",
    text: "\"If any of your fellow Israelites become poor and are unable to support themselves among you, help them as you would a foreigner and stranger, so they can continue to live among you.\" The Jubilee laws, gleaning laws, and cancellation of debts were structural provisions — not charity suggestions. Israel's economic life was designed to prevent any family from remaining poor permanently. This was a theological commitment, not merely a nice idea.",
  },
  {
    title: "The Prophets Directly Condemned Economic Oppression",
    verse: "Amos 5:11–12",
    text: "\"You trample on the poor and force them to give you grain... You oppress the innocent and take bribes and you deprive the poor of justice in the courts.\" The prophetic tradition did not spiritualize poverty. It named economic extraction as sin — chargeable to individuals, to economic systems, and to the nation. The church that ignores systems of poverty ignores what the prophets could not stop talking about.",
  },
  {
    title: "Generosity Is a Spiritual Discipline, Not a Financial Strategy",
    verse: "2 Corinthians 9:7",
    text: "\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\" Prosperity gospel twists this into a transaction: give to get. But genuine generosity is a spiritual practice that forms the soul — one that is, paradoxically, practiced as generously by the poor as by the wealthy. The widow's two coins are the measure.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Willie James Jennings",
    role: "Yale Divinity School, Author of The Christian Imagination",
    quote: "The prosperity gospel is a profound theological distortion — it takes the wounds of Christ and turns them into a financial transaction.",
    bio: "Jennings's scholarship on race, land, and the distortion of Christian imagination has reframed how evangelicals think about poverty, systemic injustice, and the gospel's material dimensions.",
  },
  {
    id: 2,
    name: "Shane Claiborne",
    role: "Author, The Irresistible Revolution; Co-founder, The Simple Way",
    quote: "Jesus doesn't just say blessed are those who care about the poor. He says blessed are the poor. That changes everything.",
    bio: "Claiborne's decades of communal living alongside the poor in Philadelphia has shaped a generation of Christians to engage poverty not as a charitable project but as a vocation.",
  },
  {
    id: 3,
    name: "Dr. Anthea Butler",
    role: "University of Pennsylvania, Author of White Evangelical Racism",
    quote: "Prosperity theology's appeal to poor communities is understandable — but its theological costs are devastating, because it blames the poor for their own poverty.",
    bio: "Butler's analysis of how prosperity gospel functions particularly in Black and Latino communities as a theological harm offers crucial critique from within affected communities.",
  },
  {
    id: 4,
    name: "Dr. John Perkins",
    role: "Civil Rights Leader, Author of Let Justice Roll Down",
    quote: "Economic development and reconciliation must happen together — you cannot evangelize people you are not willing to sit with, eat with, and invest in.",
    bio: "Perkins founded the Christian Community Development Association and has spent seven decades modeling holistic ministry that refuses to separate spiritual care from material need.",
  },
];

const practices = [
  {
    icon: "🤲",
    title: "Locate Emergency Material Assistance",
    text: "Contact local Catholic Charities, Salvation Army, St. Vincent de Paul, or community action agencies for emergency help with food, utilities, and rent. These do not require church membership or theological agreement.",
  },
  {
    icon: "📞",
    title: "Call 211",
    text: "In the United States, dialing 211 connects you to local social services — food banks, utility assistance, housing help, healthcare referrals. This free service is available 24/7 in most states.",
  },
  {
    icon: "🏦",
    title: "Find a Mission-Driven Credit Union",
    text: "Community Development Financial Institutions (CDFIs) and credit unions offer banking without the predatory fees that strip wealth from low-income families. Avoid payday lenders at all costs — they create debt traps, not solutions.",
  },
  {
    icon: "📚",
    title: "Study the Actual Economics",
    text: "Read Matthew Desmond's Evicted, Barbara Ehrenreich's Nickel and Dimed, or Kathryn Edin's $2.00 a Day — not to absorb a political position, but to understand how poverty functions as a system rather than a personal failure.",
  },
  {
    icon: "🏘️",
    title: "Find or Form a Community of Mutual Aid",
    text: "Mutual aid networks — formal or informal — operate on the principle that communities already have what they need if they share it. Look for local mutual aid groups, or start a simple needs/gifts list in your faith community.",
  },
  {
    icon: "🙏",
    title: "Reject the Prosperity Gospel Lie",
    text: "If you have been told that your poverty is a faith failure, or that giving to a ministry will unlock financial blessing, refuse that theology. Seek pastors and communities who tell the truth about what Scripture says about wealth and poverty.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Matthew 5:3", text: "\"Blessed are the poor in spirit, for theirs is the kingdom of heaven.\"" },
  { verse: "James 2:5", text: "\"Has not God chosen those who are poor in the eyes of the world to be rich in faith and to inherit the kingdom he promised those who love him?\"" },
  { verse: "Proverbs 31:9", text: "\"Speak up and judge fairly; defend the rights of the poor and needy.\"" },
  { verse: "Luke 12:15", text: "\"Then he said to them, 'Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions.'\"" },
  { verse: "Isaiah 58:6–7", text: "\"Is not this the kind of fasting I have chosen... Is it not to share your food with the hungry and to provide the poor wanderer with shelter — when you see the naked, to clothe them?\"" },
];

type PovertyEntry = {
  id: string;
  date: string;
  burden: string;
  resource: string;
  prayer: string;
};

export default function FinancialPovertyFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PovertyEntry[]>([]);
  const [burden, setBurden] = useState("");
  const [resource, setResource] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_financialpovertyfaith_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!burden.trim()) return;
    const entry: PovertyEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      burden,
      resource,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_financialpovertyfaith_entries", JSON.stringify(updated));
    setBurden(""); setResource(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_financialpovertyfaith_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Poverty, Financial Hardship & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christians struggling under financial hardship — pastoral care that refuses prosperity theology, takes material need seriously, and points toward both divine presence and concrete help.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Emergency Help: <strong>Dial 211</strong> for local resources | <strong>988</strong> Suicide & Crisis Lifeline | <strong>foodfinder.us</strong> — food pantry locator
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What burden am I carrying financially or materially right now?</label>
                <textarea value={burden} onChange={e => setBurden(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What specific resource or step might I take this week?</label>
                <textarea value={resource} onChange={e => setResource(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer or lament:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.burden && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Burden:</strong> {e.burden}</p>}
                {e.resource && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Resource/Step:</strong> {e.resource}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="K3FfCOVvIH0" title="What Does the Bible Actually Say About Poverty?" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>What Does the Bible Actually Say About Poverty?</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>A survey of the Old and New Testament's consistent attention to the poor and economic justice</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="7Y2p8nNkBH4" title="Why Prosperity Theology Is Bad Theology" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Why Prosperity Theology Is Bad Theology</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The biblical case against the health-and-wealth gospel and its harm to those in poverty</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Zd4SNVmA7Kc" title="Christian Community Development — John Perkins" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Christian Community Development — John Perkins</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The principles of relocation, reconciliation, and redistribution in ministry to the poor</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="NZQE0f8MkpA" title="Mutual Aid and the Church: A Practical Vision" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Mutual Aid and the Church: A Practical Vision</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How faith communities can organize to address material need within their own neighborhoods</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
