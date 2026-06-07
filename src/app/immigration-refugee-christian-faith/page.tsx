"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The God of Israel Was Himself a God of Migration",
    verse: "Deuteronomy 26:5",
    text: "\"My father was a wandering Aramean, and he went down into Egypt with a few people and lived there and became a great nation, powerful and numerous.\" Israel's founding confession is a refugee story — a wandering Aramean father, forced migration into Egypt, brutal exploitation, liberation, and long wilderness displacement. A Christianity that has no compassion for immigrants has forgotten its own origin story.",
  },
  {
    title: "The Law of Israel Protected the Stranger",
    verse: "Leviticus 19:33–34",
    text: "\"When a foreigner resides among you in your land, do not mistreat them. The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. I am the LORD your God.\" This is not a suggestion. It is a covenant command — rooted explicitly in Israel's own experience of being foreigners. The theological grounding for immigration hospitality is not merely idealism; it is identity.",
  },
  {
    title: "Jesus Was Himself a Refugee Child",
    verse: "Matthew 2:13–14",
    text: "\"When they had gone, an angel of the Lord appeared to Joseph in a dream. 'Get up,' he said, 'take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him.' So he got up, took the child and his mother during the night and left for Egypt.\" The incarnate Son of God fled across a border as a child to escape a murderous regime. Every theological dismissal of refugees dismisses the infant Christ.",
  },
  {
    title: "The Stranger's Story Is Your Story",
    verse: "Hebrews 11:13",
    text: "\"All these people were still living by faith when they died. They did not receive the things promised; they only saw them and welcomed them from a distance, admitting that they were foreigners and strangers on earth.\" The saints of faith, the entire cloud of witnesses, identified themselves as strangers and sojourners. To be Christian is to hold identity loosely — which creates a natural solidarity with those who have lost home.",
  },
  {
    title: "The Vision of Heaven Is the End of Borders",
    verse: "Revelation 7:9",
    text: "\"After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.\" The eschatological community of God is explicitly multiethnic, multilingual, and multinational. A monoethnic or monolingual church may be understandable in context — but it cannot be the goal. The goal is the throne.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. M. Daniel Carroll R.",
    role: "Author of Christians at the Border; Old Testament Scholar",
    quote: "The Bible's witness on the immigrant is not ambiguous. What is ambiguous is whether the church will read it honestly.",
    bio: "Carroll's landmark work examined the Old Testament's extensive legislation and narrative regarding foreigners and immigrants, arguing that Scripture demands hospitality as a theological imperative, not a political preference.",
  },
  {
    id: 2,
    name: "Alexia Salvatierra",
    role: "Author, Faith-Rooted Organizing; Lutheran Pastor",
    quote: "Sanctuary is not a political act. It is a theological act — the church declaring that its walls are subject to a higher jurisdiction than the state.",
    bio: "Salvatierra has led immigrant rights organizing from within the church for decades, developing a distinctly theological framework for advocacy that is accessible to Christians across the political spectrum.",
  },
  {
    id: 3,
    name: "Dr. Justo González",
    role: "Historian, Author of The Story of Christianity",
    quote: "The history of Christianity is a history of migration — the faith has always traveled with and through displaced peoples.",
    bio: "González's historical perspective reveals that the Christian church has grown most dynamically through migration and diaspora, and that the immigrant church has consistently reinvigorated Western Christianity.",
  },
  {
    id: 4,
    name: "Matthew Soerens",
    role: "World Relief, Co-Author of Welcoming the Stranger",
    quote: "The question is not whether the church should welcome immigrants. The question is what that welcome looks like in practice.",
    bio: "Soerens has spent two decades helping evangelical churches develop practical, theologically-grounded responses to immigration, including legal aid, English language tutoring, and community integration.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "Know Immigration Legal Resources",
    text: "Contact your local Catholic Legal Immigration Network (CLINIC), International Rescue Committee (IRC), or local legal aid society for free or low-cost immigration legal help. Avoid notarios — unlicensed immigration consultants who frequently commit fraud.",
  },
  {
    icon: "🏠",
    title: "Connect with Refugee Resettlement",
    text: "The International Rescue Committee, Church World Service, World Relief, and Lutheran Immigration and Refugee Service all operate resettlement programs. Individuals and churches can volunteer as co-sponsors for arriving refugee families.",
  },
  {
    icon: "🗣️",
    title: "Learn the Language Together",
    text: "English language programs in churches create a natural point of contact and integration support. Even offering conversation practice — not formal tutoring — creates belonging and accelerates integration for arriving immigrants.",
  },
  {
    icon: "🤲",
    title: "Understand Sanctuary",
    text: "Sanctuary is a historical church practice with roots in medieval Europe and reformist traditions. Today's sanctuary movement — whether providing physical sanctuary or community accompaniment — requires theological clarity, legal preparation, and community commitment before activation.",
  },
  {
    icon: "📰",
    title: "Read Immigration Through a Theological Lens",
    text: "Read Welcoming the Stranger by Soerens and Carroll, or Christians at the Border by Carroll. Let Scripture's own voice on the stranger shape your reading of immigration news before cable news and partisan narratives do.",
  },
  {
    icon: "⛪",
    title: "Build a Multicultural Church Relationship",
    text: "If your church is monocultural, seek a formal relationship with an immigrant or refugee congregation in your city — not to help them, but to worship together, share resources, and learn mutual dependence. This is how the church becomes the Revelation 7 community.",
  },
];

const scriptures = [
  { verse: "Exodus 22:21", text: "\"Do not mistreat or oppress a foreigner, for you were foreigners in Egypt.\"" },
  { verse: "Psalm 146:9", text: "\"The LORD watches over the foreigner and sustains the fatherless and the widow, but he frustrates the ways of the wicked.\"" },
  { verse: "Matthew 25:35", text: "\"For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in.\"" },
  { verse: "Zechariah 7:10", text: "\"Do not oppress the widow or the fatherless, the foreigner or the poor. Do not plot evil against each other.\"" },
  { verse: "Romans 13:1", text: "\"Let everyone be subject to the governing authorities, for there is no authority except that which God has established.\"" },
  { verse: "Acts 17:26", text: "\"From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.\"" },
];

type ImmigrationEntry = {
  id: string;
  date: string;
  story: string;
  need: string;
  prayer: string;
};

export default function ImmigrationRefugeeFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ImmigrationEntry[]>([]);
  const [story, setStory] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_immigrationrefugeefaith_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!story.trim()) return;
    const entry: ImmigrationEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      story,
      need,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_immigrationrefugeefaith_entries", JSON.stringify(updated));
    setStory(""); setNeed(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_immigrationrefugeefaith_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Immigration, Refugees & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For immigrants, refugees, and Christians wrestling with how faith speaks to displacement — theological grounding rooted in Scripture's own refugee narrative and the church's calling to the stranger.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Legal Help: <strong>CLINIC:</strong> cliniclegal.org | <strong>IRC:</strong> rescue.org | <strong>World Relief:</strong> worldrelief.org | <strong>988</strong> Suicide & Crisis Lifeline
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What part of your story — displacement, belonging, loss — do you want to hold today?</label>
                <textarea value={story} onChange={e => setStory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do you need from the community or from God right now?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — in whatever language feels most honest:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.story && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Story:</strong> {e.story}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Need:</strong> {e.need}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="BNbdDMBuMJ4" title="Welcoming the Stranger — A Biblical Case for Immigration Hospitality" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Welcoming the Stranger: A Biblical Case for Hospitality</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Matthew Soerens on what Scripture actually says about welcoming immigrants and refugees</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="3MTkzJdqrKM" title="Jesus Was a Refugee — The Incarnation and Immigration" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Jesus Was a Refugee: The Incarnation and Immigration</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on the flight to Egypt and what it means for Christian immigration ethics</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="P4wUwnmFEpE" title="The Church as Sanctuary — History and Practice" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Church as Sanctuary: History and Practice</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The theological and historical roots of church sanctuary and how contemporary churches practice it</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="YexiKaI6xaw" title="Refugee Voices: Faith in Displacement" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Refugee Voices: Faith Carried Across Borders</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Testimonies from Christian refugees on how faith sustained them through displacement and arrival</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
