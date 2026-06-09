"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Your Loss Was a Real Loss",
    verse: "Jeremiah 31:15",
    text: "\"A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted, because they are no more.\" Rachel's grief is not corrected in this text. It is not explained away by theology. The weeping is witnessed and named. One of the most isolating dimensions of pregnancy loss is the way the wider world — sometimes including the church — minimizes or rushes past it. The baby was real. The grief is real. You are not required to be consoled before you are allowed to mourn.",
  },
  {
    title: "The Church Has Largely Failed Those Who Miscarry",
    verse: "Romans 12:15",
    text: "\"Rejoice with those who rejoice; mourn with those who mourn.\" The command to mourn with those who mourn presupposes that mourning is real, that it takes time, and that the community's job is to accompany rather than to fix. The church that produces platitudes — 'God needed another angel,' 'It wasn't meant to be,' 'You can try again' — is not mourning with those who mourn. It is trying to end mourning, which is not the same thing. Accompanying grief requires the willingness to not resolve it.",
  },
  {
    title: "The Question of the Soul",
    verse: "Psalm 139:13",
    text: "\"For you created my inmost being; you knit me together in my mother's womb.\" Christian tradition has held various views on when ensoulment occurs. What Psalm 139 insists is that the developing person in the womb is known by God — that the divine knowledge and care precedes birth. Many parents who have experienced miscarriage find genuine comfort in the belief that the child they lost is held in God's knowledge and love. This is not a claim that requires resolving every theological debate about personhood. It is a claim about the scope of God's love.",
  },
  {
    title: "Father's Grief Is Also Real and Often Invisible",
    verse: "Genesis 37:35",
    text: "\"All his sons and daughters came to comfort him, but he refused to be comforted. 'No,' he said, 'I will continue to mourn until I join my son in the grave.'\" Jacob's grief over the presumed loss of Joseph was uncontainable. Fathers who lose children — including through pregnancy loss — often find their grief invisible to others. The focus on the mother is understandable and necessary, but fathers are also grieving. The pastoral and relational community needs to see and name this.",
  },
  {
    title: "There Is No Timeline for This Grief",
    verse: "Ecclesiastes 3:4",
    text: "\"A time to weep and a time to laugh, a time to mourn and a time to dance.\" The author of Ecclesiastes does not say that the time to weep is brief. The rhythm of grief and joy is real, but the timing belongs to the person mourning — not to the community around them. The pregnancy loss that happened at six weeks is not required to be integrated in six weeks. The baby at twenty weeks who did not survive is not required to be grieved on any external schedule. Grief moves at its own pace.",
  },
];

const voices = [
  {
    id: 1,
    name: "Sheryl Sandberg",
    role: "Author, Option B (with Adam Grant)",
    quote: "Grief is not weakness. It is the price of love. And anyone who has loved something and lost it knows that the price is sometimes very high.",
    bio: "Though Sandberg wrote Option B about the sudden death of her husband, her articulation of grief, resilience, and the social failures around loss has helped many people experiencing pregnancy loss name what they are going through.",
  },
  {
    id: 2,
    name: "Joanna Gaines",
    role: "Author, entrepreneur; publicly shared her miscarriage experience",
    quote: "I had to give myself permission to grieve what I had imagined — the life I had already started building in my mind around this baby who didn't make it.",
    bio: "Gaines has spoken openly about her miscarriage experience and the particular grief of losing not only a physical baby but the imagined future — the room already being planned, the names already being considered, the life already being anticipated.",
  },
  {
    id: 3,
    name: "Laura Bush",
    role: "Author, Spoken from the Heart",
    quote: "A miscarriage is a loss that many women share but that many women suffer alone — because the world moves on so quickly, and so few understand that the baby was real to you from the moment you knew.",
    bio: "Bush has written honestly about the isolation of pregnancy loss and the social minimization that compounds the grief — the expectation that because others did not know the baby, the loss is somehow smaller than it is.",
  },
  {
    id: 4,
    name: "Dr. Jon Sklar",
    role: "Perinatal Grief Specialist, SHARE Pregnancy Loss Support",
    quote: "The parents who come to our groups are not broken. They are grieving. And grief is a normal, healthy response to a real loss — not a symptom to be treated, but a process to be accompanied.",
    bio: "Sklar and SHARE Pregnancy Loss Support have pioneered the formal recognition and pastoral care of pregnancy loss, providing peer support communities and educational resources for families and the healthcare and faith communities that serve them.",
  },
];

const practices = [
  {
    icon: "📜",
    title: "Name and Memorialize the Baby",
    text: "Many parents who have experienced pregnancy loss find that naming the baby and creating some form of memorial — however small — provides an anchor for grief. A name, a memorial candle, a tree planted, a journal started, a small ceremony with close family. The world may not have known the baby; you did. Creating formal acknowledgment of the reality of the loss counters the social invisibility that makes pregnancy loss so isolating.",
  },
  {
    icon: "🤝",
    title: "Connect with SHARE or Similar Pregnancy Loss Support",
    text: "SHARE Pregnancy Loss Support (nationalshare.org) is the primary faith-friendly organization for pregnancy loss — miscarriage, stillbirth, and early infant loss — and has local groups across the country. Being with people who have experienced the same loss is qualitatively different from being with people who have not. Seek out this community, especially if you feel alone in the grief.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church to Acknowledge the Loss Formally",
    text: "Many churches have no ritual or liturgy for pregnancy loss. Consider asking your pastor to pray formally for you and your family, to name the baby if you have named them, and to mark the loss in some way that the community can witness. The church's public acknowledgment — even small — can significantly counter the isolation of pregnancy loss.",
  },
  {
    icon: "🧠",
    title: "Get Grief Counseling Specific to Pregnancy Loss",
    text: "Perinatal grief therapists specialize in the particular dimensions of pregnancy loss — including the ambiguous grief, the invisible nature of the loss to others, and the complicated experience of trying again. General grief counselors may be unfamiliar with the specific terrain. Seek someone with specific experience in perinatal loss.",
  },
  {
    icon: "📅",
    title: "Mark the Dates",
    text: "The due date, the date of the loss, the anniversary — these are known flash points for grief. Plan for them. Consider what you will do on the due date that would have been. Some parents plant flowers, visit a meaningful place, or gather with close friends or family. Not doing anything on these dates often means being ambushed by the grief without any frame to hold it.",
  },
  {
    icon: "💬",
    title: "Tell the People You Trusted — Even If It Feels Hard",
    text: "Pregnancy loss is often hidden because the pregnancy was hidden during the first trimester. Consider carefully whether there are people who deserve to know — and whether the silence is protecting you or isolating you. Being known in your loss — even by one or two close people — is one of the most protective factors against complicated grief.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Matthew 5:4", text: "\"Blessed are those who mourn, for they will be comforted.\"" },
  { verse: "Isaiah 66:13", text: "\"As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem.\"" },
  { verse: "Psalm 139:13–14", text: "\"For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.\"" },
];

type MiscarriageEntry = {
  id: string;
  date: string;
  remember: string;
  honest: string;
  prayer: string;
};

export default function MiscarriagePregnancyLossChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MiscarriageEntry[]>([]);
  const [remember, setRemember] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_miscarriagepregnancyloss_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!remember.trim()) return;
    const entry: MiscarriageEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      remember,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_miscarriagepregnancyloss_entries", JSON.stringify(updated));
    setRemember(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_miscarriagepregnancyloss_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕯️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Miscarriage & Pregnancy Loss: Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those who have lost a baby through miscarriage, stillbirth, or early infant death — pastoral care that names the loss as real, refuses to rush the grief, and accompanies you through an experience that too many people suffer invisibly and alone.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>SHARE Pregnancy Loss:</strong> nationalshare.org | <strong>Postpartum Support International:</strong> 1-800-944-4773
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Something you want to remember about the baby you lost:</label>
                <textarea value={remember} onChange={e => setRemember(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are you honestly today — in the grief, in the body, in the relationship?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for the baby, for yourself, for what comes next:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.remember && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Remember:</strong> {e.remember}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="kqMPNFUHxnE" title="Miscarriage and Pregnancy Loss — You Are Not Alone" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Miscarriage and Pregnancy Loss: You Are Not Alone</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Personal testimonies and pastoral care from families who have walked through pregnancy loss — for those who need to know others understand</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="W6lkIWBBO1M" title="SHARE Pregnancy Loss Support — How to Find Community and Help" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>SHARE Pregnancy Loss Support: How to Find Community and Help</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Introduction to the SHARE Pregnancy Loss Support network and what peer support looks like for families navigating miscarriage and stillbirth</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="H1oIo6sGEf0" title="A Father's Grief After Pregnancy Loss — The Invisible Mourner" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>A Father&apos;s Grief After Pregnancy Loss: The Invisible Mourner</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>On the often-overlooked experience of fathers in pregnancy loss — how to grieve, how to support a partner, and how to be seen</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Bk2oP-zS3c8" title="What to Say (and Not Say) After a Miscarriage — A Guide for Community" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>What to Say (and Not Say) After a Miscarriage: A Guide for Community</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance for friends, family, and church members on how to accompany someone in pregnancy loss without adding to the pain</p>
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
