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
    title: "Image of God, Regardless of Capacity",
    verse: "Genesis 1:27",
    text: "'So God created mankind in his own image, in the image of God he created them.' The imago Dei is not contingent on cognitive capacity, physical ability, or neurological function. A person who cannot speak, reason abstractly, or care for themselves is fully made in God's image. Disability does not diminish personhood before God.",
  },
  {
    title: "Weakness as the Medium of Divine Presence",
    verse: "2 Corinthians 12:9",
    text: "'My grace is sufficient for you, for my power is made perfect in weakness.' The Christian tradition has often discovered that persons with severe disabilities become the sites of unexpected divine encounter — for their families, their caregivers, and their communities. The weak person is not a burden on the church; they may be its teacher.",
  },
  {
    title: "The Body of Christ Needs All Its Parts",
    verse: "1 Corinthians 12:22",
    text: "'On the contrary, those parts of the body that seem to be weaker are indispensable.' Paul's description of the body requires its weakest members — not as objects of charity but as necessary. A church without people with disabilities is missing parts it cannot do without.",
  },
  {
    title: "What God Has Made, Do Not Call Defective",
    verse: "Acts 10:15",
    text: "When God declared unclean things clean, he was announcing the end of purity categories that excluded people. The disability theology movement asks: what would it mean for the church to stop treating disabled people as problems to be solved, and to receive them as the full participants they are?",
  },
  {
    title: "The Heavenly Feast Is Accessible",
    verse: "Luke 14:21",
    text: "In the parable of the great banquet, when the invited guests refused to come, the host sent servants to bring in 'the poor, the crippled, the blind and the lame.' These are the ones who fill the feast. In the kingdom of God, disability is not a barrier to inclusion — it may be a marker of priority invitation.",
  },
];

const voices = [
  {
    id: 1,
    name: "Joni Eareckson Tada",
    role: "Disability Advocate & Author; Founder, Joni and Friends",
    quote: "My disability has been the greatest gift God has given me — not because suffering is good, but because it pushed me into his arms.",
    bio: "Joni Eareckson Tada became a quadriplegic at seventeen and has spent over fifty years developing a theology of disability that is neither triumphalist nor despairing. Her organization Joni and Friends has provided practical, spiritual, and theological support to millions of families living with disability.",
  },
  {
    id: 2,
    name: "John Swinton",
    role: "Practical Theologian; Author, Becoming Friends of Time",
    quote: "People with profound intellectual disabilities are not human beings who cannot participate in Christian life. They are human beings around whom Christian life should be reshaped.",
    bio: "John Swinton is among the most rigorous theologians working in the disability space. His work challenges churches to reshape their entire understanding of what it means to belong and to worship in response to the presence of members with profound disabilities.",
  },
  {
    id: 3,
    name: "Amy Julia Becker",
    role: "Author, White Picket Fences & A Good and Perfect Gift",
    quote: "My daughter Penny has Down syndrome. She has taught me more about grace than any theology textbook.",
    bio: "Amy Julia Becker writes about parenting a child with Down syndrome from inside the experience. Her work is honest about the grief, the joy, and the way that disability reshapes a family's understanding of what matters, what is beautiful, and who God is.",
  },
  {
    id: 4,
    name: "Stephanie Hubach",
    role: "Author, Same Lake, Different Boat; Presbyterian Mission Worker",
    quote: "Disability invites us to see that all of us are broken, all of us need community, and the gospel is for all of us — exactly as we are.",
    bio: "Stephanie Hubach's experience as a mother of a son with Down syndrome has shaped her theological approach to disability as a window into the human condition. She helps churches move from accommodation to genuine inclusion — which she argues requires rethinking assumptions about what makes life valuable.",
  },
];

const practices = [
  {
    icon: "🏠",
    title: "Create a Genuinely Accessible Welcome",
    text: "Physical accessibility (ramps, sensory rooms, sign language interpretation) is the beginning, not the end, of disability inclusion. Ask families what they actually need. Include people with disabilities in worship — not as object lessons, but as participants. Let the inclusion be led by the community being welcomed.",
  },
  {
    icon: "🤝",
    title: "Surround the Family, Not Just the Child",
    text: "Families with disabled members often experience profound isolation. Their support needs are specific and sustained. Don't just offer to pray — offer respite care, a meal, transportation, presence. Ask what they need and then actually show up to provide it over the long term.",
  },
  {
    icon: "📖",
    title: "Read Disability Theology",
    text: "Read Joni Eareckson Tada, John Swinton, Nancy Eiesland's The Disabled God, Amy Julia Becker, Stephanie Hubach. Let the theology of disability expand your understanding of imago Dei, the body of Christ, and salvation. This literature is a gift the church has largely failed to receive.",
  },
  {
    icon: "🙏",
    title: "Pray With and Not Just For",
    text: "People with disabilities — even those with profound intellectual disabilities — are not objects of prayer. Many have genuine prayer lives. Create opportunities for people with disabilities to pray, to lead in worship, to speak blessing over others. Receive their ministry.",
  },
  {
    icon: "🌿",
    title: "Build a Sabbath Rhythm for Caregivers",
    text: "Families caring full-time for a disabled family member need regular respite. Churches can provide this: trained volunteers who give parents and siblings genuine time away. This is not charity — it is Sabbath theology applied to people who often cannot create their own margin.",
  },
  {
    icon: "🎓",
    title: "Disability Education for the Congregation",
    text: "Most congregation members don't know how to interact with someone with a significant disability. Provide training — in understanding specific conditions, in how to communicate, in what to do and not do. Informed welcome is warmer than embarrassed distance.",
  },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "Luke 14:21", text: "Then the owner of the house became angry and ordered his servant, 'Go out quickly into the streets and alleys of the town and bring in the poor, the crippled, the blind and the lame.'" },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Romans 15:7", text: "Accept one another, then, just as Christ accepted you, in order to bring praise to God." },
];

type DTEntry = { id: string; date: string; today: string; received: string; prayer: string };

export default function DisabilityTheologyFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DTEntry[]>([]);
  const [today, setToday] = useState("");
  const [received, setReceived] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_disabilitytheologyfamilyj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !received.trim() && !prayer.trim()) return;
    const entry: DTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      received: received.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_disabilitytheologyfamilyj_entries", JSON.stringify(updated));
    setToday(""); setReceived(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_disabilitytheologyfamilyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>♿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Disability, Theology & Family
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For families living with disability and for churches seeking to welcome them — exploring
            what it means for every person to bear the image of God.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support and community resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.joniandfriends.org" style={{ color: PURPLE }}>joniandfriends.org</a> |{" "}
            <a href="https://www.keyministry.org" style={{ color: PURPLE }}>keyministry.org</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is your family carrying today?</label>
              <textarea value={today} onChange={(e) => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What has your family member with a disability taught or shown you?</label>
              <textarea value={received} onChange={(e) => setReceived(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your family and for the community you need:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Carrying: </span>{e.today}</p>}
                    {e.received && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Received: </span>{e.received}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="y-DQH-M1HuM" title="Joni Eareckson Tada — A Theology of Disability" />
            <VideoEmbed videoId="NnGBhG03g4M" title="The Image of God and Disability — John Swinton" />
            <VideoEmbed videoId="jJPVNIAFmvA" title="Families, Disability, and the Body of Christ" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Families Living with Disability" />
          </div>
        )}
      </div>
    </div>
  );
}
