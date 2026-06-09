"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "The People of God Have Always Been on the Move",
    body: "The story of the Bible is a story of displacement, migration, and exile. Abraham left his homeland at God's call (Gen 12:1). Joseph was trafficked into Egypt. The Israelites were enslaved and then wandered for forty years. Ruth was a Moabite refugee who followed Naomi to a foreign land. Daniel was carried into exile. Mary and Joseph fled to Egypt as refugees from Herod's violence. Jesus Himself said 'Foxes have dens and birds have nests, but the Son of Man has no place to lay his head' (Matt 8:20). The immigrant and the refugee stand in extraordinarily good biblical company.",
  },
  {
    title: "The God Who Protects the Stranger",
    body: "The Hebrew word ger — usually translated 'stranger' or 'foreigner' — appears over 90 times in the Old Testament, often in commands to protect and care for those who have come from elsewhere. 'The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt' (Lev 19:34). The reason given is always the same: you were once in that position. Israel's experience of displacement was meant to create radical hospitality toward those experiencing the same.",
  },
  {
    title: "Grief for What Was Left Behind",
    body: "Migration — whether by choice, necessity, or force — involves profound loss: of homeland, of language as a first language, of extended family, of cultural belonging, of the version of oneself that existed in the place you left. Psalm 137 records the grief of exiles forced to sing in a foreign land: 'How can we sing the songs of the Lord while in a foreign land?' This is not faithlessness; it is honest grief. God holds both the displacement and the grief of those who experience it.",
  },
  {
    title: "Identity in Christ Transcends Nationality",
    body: "Galatians 3:28 declares that 'there is neither Jew nor Gentile... for you are all one in Christ Jesus.' Revelation 7:9 envisions 'a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' The body of Christ is by design a multicultural, multilingual community. Your cultural identity is not erased by Christian faith — it is gathered into a larger community where it can be both honored and transcended.",
  },
  {
    title: "God Meets People Where They Are",
    body: "Hagar, an Egyptian slave who had been used and then abandoned in the desert, encountered God not in a temple or a worship service but in the wilderness of her desperate need. The angel found her 'near a spring in the desert' (Gen 16:7). God meets immigrants and refugees — wherever they are, in whatever legal status, in whatever country — with the same attentiveness. The borders that matter to governments do not limit the reach of the God who calls Himself 'the Lord your God, who brought you out of Egypt.'",
  },
];

const voices = [
  {
    name: "M. Daniel Carroll R.",
    role: "OT scholar and author, Christians at the Border: Immigration, the Church, and the Bible",
    quote: "The Bible does not dictate immigration policy, but it does insist on the dignity of the immigrant and the responsibility of the host community. That is non-negotiable.",
  },
  {
    name: "Jenny Yang",
    role: "Author and VP of Advocacy at World Relief",
    quote: "The church has a long history of welcoming refugees — it was the church, after all, that helped establish the modern refugee resettlement system in the US. We are continuing a legacy.",
  },
  {
    name: "Robert Chao Romero",
    role: "Professor and author, Brown Church: Five Centuries of Latina/o Social Justice",
    quote: "The borderlands are holy ground. Jesus lived in the borderlands of empire and margin — and that is where He tends to show up today.",
  },
  {
    name: "Geff Suazo",
    role: "Author, Latino and Latina Voices in Christian Theology",
    quote: "The immigrant experience of dislocation, survival, and longing for home is not peripheral to the gospel — it is at the heart of it.",
  },
];

const practices = [
  {
    title: "Legal Navigation: Know Your Rights",
    body: "Immigration law is complex and varies significantly by country, visa status, and individual circumstance. Organizations that provide free or low-cost immigration legal services include CLINIC (cliniclegaI.org), the National Immigration Legal Services Center (immigrationadvocates.org), and many local legal aid organizations. Do not pay immigration consultants who are not attorneys or accredited representatives — fraud in this space is common and costly.",
  },
  {
    title: "Mental Health and Acculturation Stress",
    body: "Immigration and refugee experiences involve documented mental health impacts: acculturation stress, grief for home, language anxiety, discrimination, and often trauma from the experiences that necessitated migration. Culturally responsive mental health care — from providers who understand the immigration experience and ideally share cultural background — is important. The National Alliance for Mental Illness (NAMI) and Open Path Collective can help find low-cost, culturally appropriate care.",
  },
  {
    title: "Community With Others from Home",
    body: "Connection with a community of people from your country or culture of origin — whether a diaspora church, cultural association, or social network — provides something that no host-culture community can: the experience of not having to explain yourself, of belonging without translation. Many immigrant and refugee communities maintain both diaspora community and engagement with the host culture. Both are important.",
  },
  {
    title: "Immigrant and Refugee-Affirming Churches",
    body: "World Relief (worldrelief.org) has a network of churches that specifically support refugees and immigrants. The Episcopal Migration Ministries, Lutheran Immigration and Refugee Service, and Catholic Charities are among the oldest and largest refugee resettlement agencies in the US, all faith-based. Finding a congregation that explicitly welcomes and includes immigrants — ideally one that includes people from your background — provides both practical and spiritual support.",
  },
  {
    title: "Practical Integration Support",
    body: "Practical needs during immigration and resettlement include housing, employment, English language acquisition, educational enrollment for children, and healthcare access. 211 (dial 211 or visit 211.org) connects to local resources. USCRI (refugees.org) and IRC (rescue.org) provide direct resettlement services in many cities. Local churches and community organizations often provide direct material support.",
  },
  {
    title: "Holding Two Homes",
    body: "Many immigrants and refugees navigate the complicated experience of belonging to two places — the home country that formed them and the new country that is becoming home. This dual belonging is not confusion; it is richness. The challenge is learning to hold both: to honor the culture, language, and identity that you carry from your first home while also putting down roots and building belonging in the new one. Both are gifts, and both can coexist.",
  },
];

const scriptures = [
  {
    ref: "Leviticus 19:34",
    text: "The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. I am the Lord your God.",
  },
  {
    ref: "Ruth 1:16",
    text: "But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.'",
  },
  {
    ref: "Psalm 137:1",
    text: "By the rivers of Babylon we sat and wept when we remembered Zion.",
  },
  {
    ref: "Galatians 3:28",
    text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
  },
  {
    ref: "Revelation 7:9",
    text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.",
  },
  {
    ref: "Hebrews 11:13",
    text: "All these people were still living by faith when they died. They did not receive the things promised; they only saw them and welcomed them from a distance, admitting that they were foreigners and strangers on earth.",
  },
];

const JOURNAL_KEY = "vine_immigration_refugee_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ImmigrationRefugeeFaithPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Immigration & Belonging
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Immigration, Refugees & Faith
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The people of God have always been on the move. Abraham, Ruth, Joseph, Mary, Jesus — the immigrant and refugee stand in extraordinarily good biblical company.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>World Relief:</strong> worldrelief.org — refugee resettlement and support<br />
            <strong style={{ color: TEXT }}>IRC:</strong> rescue.org — International Rescue Committee<br />
            <strong style={{ color: TEXT }}>CLINIC:</strong> cliniclegal.org — free immigration legal help<br />
            <strong style={{ color: TEXT }}>Dial 211</strong> — local community resources for new arrivals<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              What did you leave behind? What are you building here? What do you carry from home? Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
