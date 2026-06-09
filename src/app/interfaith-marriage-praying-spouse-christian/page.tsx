"use client";
import { useState } from "react";
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
    title: "Unequally Yoked: Honest Exegesis",
    body: "2 Corinthians 6:14 warns against being unequally yoked, yet many Christians find themselves already in interfaith marriages — either through conversion after marriage, a spouse drifting from faith, or marrying with misplaced hope. Paul's instruction in 1 Corinthians 7:12-16 directly addresses this: if an unbelieving spouse consents to live together, do not divorce. The Christian spouse is not trapped — they are strategically placed. The theology here is not regret but mission: your faithfulness may prove redemptive.",
  },
  {
    title: "Sanctifying Presence",
    body: "Paul writes in 1 Corinthians 7:14 that the unbelieving spouse is 'sanctified' through the believer — not saved automatically, but made holy in the sense of being drawn into the sphere of God's covenantal activity. Your prayers, your witness, your embodied love are not wasted labor. They participate in what theologian John Chrysostom called 'household evangelism' — the patient, incarnational presence that shapes souls more than any sermon.",
  },
  {
    title: "Faithful Presence Without Coercion",
    body: "Christian mission to a spouse is fundamentally different from evangelism to a stranger. It cannot use urgency, guilt, or manipulation without destroying the very thing it hopes to build. 1 Peter 3:1-2 describes a 'respectful and pure conduct' that may win a spouse 'without a word' — meaning without nagging, theological argument, or spiritual pressure. Your life, not your words, is the primary witness in this relationship.",
  },
  {
    title: "The Grief of Spiritual Alone-ness",
    body: "One of the least-acknowledged sufferings of interfaith marriage is the profound loneliness of praying alone, worshipping without your partner, watching your children pulled in two directions, and longing for a spiritual unity that may never come. The Psalms of lament make space for this. Psalm 38 and Psalm 77 voice the ache of crying out without an answering human presence. God does not trivialize this grief; He meets it with His own presence.",
  },
  {
    title: "Hope, Surrender, and Long Faithfulness",
    body: "Romans 15:13 speaks of a hope that does not produce shame — hope that has been surrendered into God's hands rather than wielded as a weapon of anxiety. You can hold deep, genuine hope for your spouse's faith while also releasing control of the outcome. This paradox — fervent prayer combined with non-coercive love — is the spiritual discipline that interfaith marriage uniquely demands. Many believers have walked this road for decades. Some have seen conversion. Others have died still praying. Both are faithful.",
  },
];

const voices = [
  {
    name: "Nancy Kennedy",
    role: "Author, Between Two Worlds",
    quote: "I used to try to argue my husband into faith. What actually changed things was when I stopped making his unbelief my project and started making my own faithfulness my project.",
  },
  {
    name: "Jill Briscoe",
    role: "Author and speaker, married to Stuart Briscoe",
    quote: "For those who pray alone for years — you are not forgotten. The prayers of a faithful spouse are among the most powerful intercessions on earth, and God hears every one.",
  },
  {
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "Marriage is not primarily about your happiness but about your holiness. This is perhaps nowhere truer than in an interfaith marriage, where the spiritual asymmetry itself becomes the crucible of character.",
  },
  {
    name: "Sheila Walsh",
    role: "Author and Women of Faith speaker",
    quote: "You are called to be faithful, not fruitful. The harvest belongs to God. Your job is to keep showing up — to Sunday worship, to prayer, to loving your spouse well even when they don't share your hope.",
  },
];

const practices = [
  {
    title: "Establish Your Own Spiritual Anchors",
    body: "Find a church community that supports interfaith marriages. Establish non-negotiable personal rhythms — morning prayer, Scripture reading, Sabbath — that are yours regardless of your spouse's participation. You cannot sustain spiritual vitality by hoping your spouse will eventually join you; you must cultivate your own root system now.",
  },
  {
    title: "Pray With Specificity and Surrender",
    body: "Develop a consistent intercessory practice for your spouse — not vague wishes but specific prayers: 'Lord, open their eyes to Your goodness in this specific situation.' Keep a prayer journal. Over time you will see God's quiet activity even before conversion. This builds your own faith during the long season of waiting.",
  },
  {
    title: "Set Boundaries Without Ultimatums",
    body: "Healthy interfaith marriages require clear, respectful conversation about non-negotiables: church attendance for children, faith-based decisions, holiday practices. Approach these as collaborative negotiation, not spiritual demands. What cannot be compromised? What can be flexible? Couples therapists trained in interfaith dynamics (see InterfaithFamily.com resources) can help navigate these conversations.",
  },
  {
    title: "Find Your People",
    body: "You need fellowship with other Christians in interfaith marriages — people who understand the loneliness of the pew without judging your spouse. Organizations like Spiritually Unequal Marriage (www.spirituallyunequalmarriage.com) and online communities hosted by churches provide these connections. Isolation will drain you; community will sustain you.",
  },
  {
    title: "Examine Your Witness",
    body: "Periodically ask trusted friends: 'Does my faith make me more loving, more joyful, more patient with my spouse — or does it mostly show up as criticism and spiritual pressure?' Your conduct is your most powerful testimony. Ask yourself whether your spouse is attracted toward or pushed away from your faith by how you live it at home.",
  },
  {
    title: "Grieve What Is Lost Honestly",
    body: "Allow yourself to mourn the spiritual partnership you hoped for — praying together, worshipping together, raising children in unified faith. This grief is real and legitimate. Suppressing it produces bitterness. Naming it in prayer and in a trusted community produces compassion — both for yourself and for your spouse, who is not obligated to share your faith and deserves to be loved anyway.",
  },
];

const scriptures = [
  { ref: "1 Corinthians 7:13-14", text: "And if a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. For the unbelieving husband has been sanctified through his wife..." },
  { ref: "1 Peter 3:1-2", text: "Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives." },
  { ref: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
  { ref: "Psalm 77:1-2", text: "I cried out to God for help; I cried out to God to hear me. When I was in distress, I sought the Lord; at night I stretched out untiring hands, and I would not be comforted." },
  { ref: "1 Corinthians 13:7", text: "Love bears all things, believes all things, hopes all things, endures all things." },
  { ref: "Matthew 5:16", text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
];

const videos = [
  { videoId: "4_UZIQHH9Rk", title: "Spiritually Mismatched Marriage — Finding Hope" },
  { videoId: "P3lgqAcB9r4", title: "Praying for an Unbelieving Spouse — Nancy Kennedy" },
  { videoId: "XrWF9-qj6oE", title: "How to Love Your Spouse Who Doesn't Share Your Faith" },
  { videoId: "6rGmHJH7GWo", title: "Sacred Marriage: When Your Spouse Doesn't Believe" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_interfaithmarriage_entries";
interface JournalEntry { id: string; date: string; today: string; prayer: string; grief: string; }

export default function InterfaithMarriagePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ today: "", prayer: "", grief: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: form.today,
      prayer: form.prayer,
      grief: form.grief,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ today: "", prayer: "", grief: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Interfaith Marriage: Loving a Spouse Who Doesn&apos;t Share Your Faith
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christians in marriages where only one spouse believes — navigating spiritual solitude, faithful witness, and the long work of hope without coercion.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: PURPLE }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: PURPLE, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What is hardest for you today in your interfaith marriage?</label>
                <textarea value={form.today} onChange={(e) => setForm({ ...form, today: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What are you praying for your spouse today?</label>
                <textarea value={form.prayer} onChange={(e) => setForm({ ...form, prayer: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What grief from spiritual alone-ness can you name and release today?</label>
                <textarea value={form.grief} onChange={(e) => setForm({ ...form, grief: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.today && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>What is hardest today</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.today}</p></>}
                {e.prayer && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Prayer for spouse</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.prayer}</p></>}
                {e.grief && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Grief released</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.grief}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Available 24/7 for any mental health crisis.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Spiritually Unequal Marriage</strong> — Community and resources for believers married to non-believers.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Christian Counselor</strong> — A therapist trained in both faith and marriage dynamics can help you navigate the unique pressures of interfaith marriage without losing yourself or your witness.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
