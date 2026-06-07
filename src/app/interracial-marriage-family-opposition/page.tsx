"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Imago Dei Knows No Race",
    verse: "Genesis 1:27",
    text: "\"So God created man in his own image, in the image of God he created him; male and female he created them.\" The imago Dei — the image of God in every human person — is not racially qualified. There is no verse in scripture where God distinguishes the worth, dignity, or marriageability of people by race. The history of using scripture to defend racial division in marriage is a history of eisegesis — reading human prejudice into the text — not of exegesis."
  },
  {
    title: "Unity in Christ Across Every Dividing Wall",
    verse: "Galatians 3:28",
    text: "\"There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.\" Paul's proclamation was not that differences cease to exist but that they no longer determine hierarchy, exclusion, or standing before God. The ethnic divisions of Paul's world — which he named specifically — were meant to be transcended in the body of Christ. Your marriage is not a violation of scripture. It is an image of what the kingdom looks like."
  },
  {
    title: "The Marriages Across Cultural Lines in Scripture",
    verse: "Numbers 12:1",
    text: "\"Miriam and Aaron spoke against Moses because of the Cushite woman whom he had married, for he had married a Cushite woman.\" Moses married a Cushite — an African woman from south of Egypt. When Miriam objected, God struck Miriam with leprosy and vindicated Moses. The biblical precedent for cross-cultural marriage is ancient and explicit. God's response to race-based opposition to intermarriage is not ambiguous."
  },
  {
    title: "When Family Opposition Is Also Racism",
    verse: "Ephesians 4:15",
    text: "\"Speaking the truth in love, we are to grow up in every way into him who is the head, into Christ.\" There is no loving way to be racist. There is no honorable way to oppose a marriage because of the race of one's spouse. Family opposition rooted in racial prejudice is not a legitimate theological concern — it is sin. Naming it clearly, even to family, is not dishonoring — it is speaking the truth in love."
  },
  {
    title: "Grief and Resilience in a Mixed Marriage",
    verse: "Ruth 1:16-17",
    text: "\"Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.\" Ruth's commitment to Naomi across ethnic and national lines is one of the great covenant declarations in scripture. Ruth, a Moabite, became the great-grandmother of David and an ancestor of Jesus. Cross-cultural commitment is not a compromise of covenant — it has been a vehicle of covenant from the beginning."
  }
];

const voices = [
  {
    id: "v1", name: "Jasmine Holmes", role: "Author, 'Mother to Son'; Speaker",
    quote: "Being in an interracial marriage does not mean leaving your racial identity at the door. It means learning how to hold two histories together with love, patience, and a lot of conversations.",
    bio: "Jasmine Holmes, a Black Christian woman married to a white pastor, writes and speaks about race, faith, and identity in America. Her honest engagement with the complexity of interracial marriage within Christian communities is essential reading for couples navigating this terrain."
  },
  {
    id: "v2", name: "Jarvis Williams", role: "Professor of New Testament, SBTS",
    quote: "The gospel demands the reconciliation of all peoples across every dividing wall. An interracial Christian marriage is not a social experiment — it is an eschatological sign.",
    bio: "Dr. Jarvis Williams, a New Testament scholar, writes about race and the gospel with theological rigor. His work on how Paul's vision of the multi-ethnic body of Christ addresses racial division in the church is essential for couples facing theological challenges to their marriage."
  },
  {
    id: "v3", name: "Trillia Newbell", role: "Author, 'United: Captured by God's Vision for Diversity'",
    quote: "Family opposition to an interracial marriage is painful in a way that goes very deep. It is not just about the marriage — it is about whether they see your spouse as fully human.",
    bio: "Trillia Newbell, a Black Christian woman married to a white man, has written candidly about navigating family opposition, church dynamics, and the daily realities of interracial marriage from a theologically grounded perspective."
  },
  {
    id: "v4", name: "Gary Thomas", role: "Author, 'Sacred Marriage'",
    quote: "Marriage is not primarily about comfort and cultural sameness. It is about two people being sanctified through covenant love — and that work does not become more difficult because they are of different races.",
    bio: "Gary Thomas's theology of marriage as a crucible for sanctification provides a framework for couples whose marriage is hard not because of incompatibility but because of external opposition. His work helps couples ground their commitment in something larger than family approval."
  }
];

const practices = [
  {
    icon: "✝️",
    title: "Ground the Marriage in Scripture",
    text: "Study together the biblical texts that address multi-ethnic covenant: Moses and Zipporah (Exod 2:21, Num 12:1), Ruth, Rahab in the genealogy of Jesus, the vision of every tribe and tongue in Revelation 7:9. Know your scriptural footing well enough to stand on it when challenged."
  },
  {
    icon: "🗣️",
    title: "Have Explicit Conversations Early",
    text: "Couples in interracial marriages need to have direct conversations early about: how they will handle racially charged situations in public, how they will navigate family of origin dynamics, what they expect from each other when one of them experiences racism. These conversations are easier before the situations arise."
  },
  {
    icon: "🏘️",
    title: "Find a Multi-Ethnic Community",
    text: "Isolation in an interracial marriage is dangerous. Find a church community that genuinely reflects multi-ethnic fellowship — not as a checkbox but as a reality. Being surrounded by other interracial couples, families, and friends who understand your daily experience is sustaining in ways that monocultural community cannot provide."
  },
  {
    icon: "🧠",
    title: "Couples Therapy with a Culturally Competent Therapist",
    text: "Find a therapist who has training in cross-cultural couples work and who can hold both partners' cultural realities with intelligence. This is especially important when family opposition creates stress within the marriage itself."
  },
  {
    icon: "📏",
    title: "Clear Limits with Racist Family Members",
    text: "Protecting your spouse and your marriage from racist family members may require clear limits: refusing visits when racist comments are made, declining to expose children to extended family who demean one parent's heritage, or limiting contact until family demonstrates change. This is not dishonoring your family — it is honoring your covenant."
  },
  {
    icon: "📿",
    title: "Honor Both Heritages",
    text: "Interracial marriage is not an erasure of cultural identity — it is an integration of two heritages. Intentionally learn each other's cultural histories, traditions, foods, music, languages. Make space for both to be honored in your home. Children raised in interracial homes can thrive when both parts of their identity are celebrated."
  }
];

const scriptures = [
  { verse: "Galatians 3:28", text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus." },
  { verse: "Acts 17:26", text: "And he made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place." },
  { verse: "Numbers 12:1", text: "Miriam and Aaron spoke against Moses because of the Cushite woman whom he had married, for he had married a Cushite woman." },
  { verse: "Ruth 1:16-17", text: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried." },
  { verse: "Revelation 7:9", text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb." },
  { verse: "Ephesians 2:14", text: "For he himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility." }
];

type ImEntry = { id: string; date: string; challenge: string; truth: string; protect: string };

export default function InterracialMarriageFamilyOppositionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ImEntry[]>([]);
  const [challenge, setChallenge] = useState("");
  const [truth, setTruth] = useState("");
  const [protect, setProtect] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_interracialmgfamilyj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!challenge.trim()) return;
    const entry: ImEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge, truth, protect };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_interracialmgfamilyj_entries", JSON.stringify(updated));
    setChallenge(""); setTruth(""); setProtect("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_interracialmgfamilyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Interracial Marriage &amp; Family Opposition</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When your covenant is questioned because of race — by family, by community, or by a church that has not yet caught up to the gospel it preaches.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Interracial Family Circle: interracialfamilycircle.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Couple&apos;s Reflection Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What opposition or challenge are we facing right now?</label>
                  <textarea value={challenge} onChange={e => setChallenge(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What biblical truth grounds our marriage?</label>
                  <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What step do we need to take to protect our marriage and each other?</label>
                  <textarea value={protect} onChange={e => setProtect(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.challenge && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Opposition:</strong> {e.challenge}</p>}
                {e.truth && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Grounded in:</strong> {e.truth}</p>}
                {e.protect && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Protecting:</strong> {e.protect}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Race, Gospel, and the Multi-Ethnic Church</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jarvis Williams on how the gospel addresses racial division in the church and in marriage</p>
              <VideoEmbed videoId="53RX2ESIqLM" title="Race, Gospel, and the Multi-Ethnic Church" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Moses and the Cushite Woman</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>A biblical exploration of the earliest interracial marriage in scripture and God&apos;s response to opposition</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Moses and the Cushite Woman" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Interracial Marriage and Family Opposition</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Trillia Newbell on navigating family objection and building a multi-ethnic household</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Interracial Marriage and Family Opposition" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Every Nation, Tribe, and Tongue</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The eschatological vision of Revelation 7:9 and what it means for interracial Christian marriage</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Every Nation, Tribe, and Tongue" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
