"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The God Who Hears the Cry of the Oppressed",
    verse: "Exodus 3:7",
    text: "I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering. God's first recorded extended engagement with the nation of Israel is a response to racial and ethnic oppression. The Exodus is not merely a spiritual metaphor. It is a concrete historical event in which God took the side of an enslaved people — by name, by tribe, by cry. The God of the Exodus hears the cry of Black Christians in America.",
  },
  {
    title: "Lament Is Faithful",
    verse: "Lamentations 1:12",
    text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering? The book of Lamentations gives the whole community of faith permission to name specific, historical, communal suffering as suffering — not as a spiritual failure, not as a political opinion, but as the accurate description of what God's people have experienced. The Black church has a deep tradition of lament. It is not complaining. It is faithful.",
  },
  {
    title: "The Multiethnic Vision Is Not a Footnote",
    verse: "Revelation 7:9",
    text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne. The eschatological vision of Scripture is explicitly multiethnic — and it is explicitly a multitude, not a monoculture. The racial diversity of the church is not a problem to manage. It is the direction of history. What racial trauma disrupts, resurrection will restore.",
  },
  {
    title: "The White Church's Complicity Has Not Always Been Named",
    verse: "Amos 5:21-24",
    text: "I hate, I despise your religious assemblies; I cannot stand your assemblies... But let justice roll on like a river, righteousness like a never-failing stream. Amos speaks to a community whose worship and whose injustice coexist. The history of American Christianity includes generations of white Christians who worshipped sincerely while practicing and enforcing racial hierarchy. Naming this is not an attack on Christianity — it is required by Scripture's own standards of honesty.",
  },
  {
    title: "You Are Made in the Image of God — Not Incidentally",
    verse: "Genesis 1:27",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. The dignity of every human being — including every Black human being — is not derivative of culture, of acceptance, of white approval. It is ontological. Given by God at creation. Racial trauma attacks this dignity. The gospel restores it — not by minimizing the attack but by naming the dignity as prior, deeper, and indestructible.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jemar Tisby",
    role: "Author, The Color of Compromise; historian",
    quote: "You cannot have racial healing without racial honesty. The church that does not name its history cannot confess it. And the church that cannot confess cannot repent.",
    bio: "Jemar Tisby is a historian whose work on the American church's history of racial complicity has been both celebrated by those seeking accountability and criticized by those uncomfortable with it — exactly the response faithful scholarship often receives.",
  },
  {
    id: 2,
    name: "Esau McCaulley",
    role: "Author, Reading While Black",
    quote: "The Black church did not merely survive in spite of Scripture. It survived because of Scripture — reading it with a hermeneutic of liberation that white Christianity often did not have eyes to see.",
    bio: "Esau McCaulley is a New Testament scholar and Anglican priest whose work on Black biblical interpretation recovers the deep roots of the Black church's engagement with Scripture as a liberating text.",
  },
  {
    id: 3,
    name: "Latasha Morrison",
    role: "Author, Be the Bridge; racial reconciliation advocate",
    quote: "Reconciliation without justice is just another word for asking the wounded party to accommodate the comfort of the one who wounded them.",
    bio: "Latasha Morrison founded Be the Bridge, an organization training Christians in multiethnic understanding and racial reconciliation — insisting that genuine reconciliation requires lamentation, truth-telling, and accountability.",
  },
  {
    id: 4,
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; founder Equal Justice Initiative",
    quote: "The opposite of poverty is not wealth. The opposite of injustice is not justice. The opposite of inequality is not equality. The opposite of all of these is proximity — getting close to those who suffer.",
    bio: "Bryan Stevenson is a Christian lawyer and advocate for criminal justice reform whose work is deeply rooted in his faith and the Black church tradition of prophetic engagement with injustice.",
  },
];

const practices = [
  {
    icon: "🗣️",
    title: "Name What Happened Without Minimizing It",
    text: "Racial trauma is not helped by spiritual bypassing — the impulse to skip over the specific historical and personal wound into generic spiritual language. Name what happened. Name how it felt. Name the cost. God can handle the specifics.",
  },
  {
    icon: "🕯️",
    title: "Practice Communal Lament",
    text: "The Black church tradition has liturgical forms of communal lament — mourning together what has been done to and in the community. Lament is not the absence of faith; it is faith honest enough to name what God has not yet corrected. Find or create spaces for communal lament.",
  },
  {
    icon: "📚",
    title: "Read Black Theologians and Historians",
    text: "The scholarship of James Cone, Howard Thurman, Esau McCaulley, Jemar Tisby, Willie James Jennings, and others provides theological grounding that takes both faith and racial reality seriously. This is not supplemental — it is essential for understanding your own tradition.",
  },
  {
    icon: "🤝",
    title: "Find Accountable Community",
    text: "Racial trauma is compounded by isolation and by being the only Black person in predominantly white spaces without support. Find or build community with other Black Christians who name the full reality of what it means to be Black and Christian in America — without pressure to minimize either.",
  },
  {
    icon: "🏛️",
    title: "Engage Advocacy Without Losing Prayer",
    text: "The prophetic tradition in Scripture holds together political engagement and intimacy with God. Advocacy is not a replacement for prayer; prayer is not a replacement for advocacy. Both/and, not either/or. The prophets prayed and marched.",
  },
  {
    icon: "💆",
    title: "Seek Trauma-Informed Care",
    text: "Racial trauma has physiological effects — heightened stress responses, hypervigilance, grief, and anger that are appropriate responses to ongoing threats. A therapist who understands race-based traumatic stress can offer specific support that is different from general therapy.",
  },
];

const scriptures = [
  { verse: "Exodus 3:7", text: "The Lord said, 'I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering.'" },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Lamentations 3:21-23", text: "Yet this I call to mind and therefore I have hope: Because of the Lord's great love we are not consumed, for his compassions never fail." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
];

type RTEntry = { id: string; date: string; name: string; hold: string; prayer: string };

export default function RacialTraumaBlackChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RTEntry[]>([]);
  const [name, setName] = useState("");
  const [hold, setHold] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_racialtraumablackchristj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!name.trim()) return;
    const e: RTEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), name, hold, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_racialtraumablackchristj_entries", JSON.stringify(next));
    setName(""); setHold(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_racialtraumablackchristj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Racial Trauma & the Black Christian</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>A space rooted in the prophetic tradition of the Black church — for naming racial trauma honestly, lamenting faithfully, and holding together the full breadth of a faith that has always known both suffering and hope.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.bethebridge.com" style={{ color: "#fca5a5" }}>bethebridge.com</a> · <a href="https://naacp.org" style={{ color: "#fca5a5" }}>naacp.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What needs to be named today?</label>
                <textarea value={name} onChange={e => setName(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What happened, what was said, what was done or not done..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What truth from Scripture or the Black church tradition holds you?</label>
                <textarea value={hold} onChange={e => setHold(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A verse, a hymn, a word from someone who has survived and still believed..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A lament and a hope</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Tell God the full truth — what you grieve and what you still believe..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your truth belongs here.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.name && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Named</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.name}</p></>}
                {e.hold && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What holds me</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.hold}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Lament and hope</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Reading While Black — Esau McCaulley</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Esau McCaulley on the Black church's interpretive tradition — how it has read Scripture as a liberating text when other interpretations were used to oppress.</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Reading While Black Esau McCaulley" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Color of Compromise — Jemar Tisby</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Jemar Tisby on the history of the American church's complicity in racial injustice — and what honest reckoning requires.</p>
              <VideoEmbed videoId="53RX2ESIqLM" title="The Color of Compromise Jemar Tisby" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Be the Bridge — Latasha Morrison</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Latasha Morrison on racial reconciliation that requires lamentation, truth-telling, and accountability before it requires forgiveness.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Be the Bridge Latasha Morrison" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Lament as Faithful Worship</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the biblical tradition of communal lament — and how it applies to racial suffering in the contemporary American church.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Lament as Faithful Worship" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
