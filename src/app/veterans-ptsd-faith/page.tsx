"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Warrior's Grief in Scripture",
    verse: "2 Samuel 1:26",
    text: "\"I am distressed for you, my brother Jonathan; very pleasant have you been to me; your love to me was extraordinary, surpassing the love of women.\" David's lament for Jonathan is the lament of a warrior for his fallen brother-in-arms. Scripture knows the specific grief of combat — the lost friends, the moral injuries, the things done and seen that cannot be undone. David himself carried significant combat trauma and poured it into the Psalms."
  },
  {
    title: "God Does Not Flinch at What You Saw",
    verse: "Psalm 139:1-2",
    text: "\"O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar.\" Every image you carry, every action you took or failed to take, every face — God has seen it. He does not avert his eyes from what combat required of you. His knowledge of you is not diminished by what you have done or witnessed. You are fully known and you are still beloved."
  },
  {
    title: "The Moral Injury of Combat",
    verse: "Psalm 51:3",
    text: "\"For I know my transgressions, and my sin is ever before me.\" Moral injury — the wound that comes from participating in or witnessing events that violate one's deepest moral beliefs — is one of the most specific wounds of combat. The Psalms of David are saturated with this: the sin that does not leave, the guilt that comes in the night. These Psalms exist because God knows that some people carry what the rest of the world does not want to know about."
  },
  {
    title: "Coming Home to a World That Does Not Know",
    verse: "Ecclesiastes 3:8",
    text: "\"A time to love, and a time to hate; a time for war, and a time for peace.\" The transition from war to peace is one of the most disorienting journeys a human being can make. The veteran who has lived in a world of acute threat returns to a world where people argue about parking spaces. The dissonance is real and the church, which often lives in that civilian world, needs to be told this plainly: you do not know what they have carried back."
  },
  {
    title: "The Promise to the Warrior",
    verse: "Isaiah 57:18-19",
    text: "\"I have seen his ways, but I will heal him; I will lead him and restore comfort to him and his mourners, creating the fruit of the lips. Peace, peace, to the far and to the near, says the Lord, and I will heal him.\" The God who has seen the veteran's ways — including the worst of them — promises restoration and peace. Not the absence of memory but the healing of the one who carries it. This is the pastoral promise."
  }
];

const voices = [
  {
    id: "v1", name: "Jonathan Shay", role: "Psychiatrist, Author of 'Achilles in Vietnam'",
    quote: "Combat PTSD is not weakness. It is the normal response of a normal person to an abnormal situation — specifically, the situation of sustained exposure to human beings trying to kill you and those beside you.",
    bio: "Jonathan Shay's 'Achilles in Vietnam' draws a direct line between the PTSD experiences of Vietnam veterans and the warriors of Homer's Iliad, demonstrating that combat trauma is as old as war and not a product of individual weakness. His work is essential for understanding and destigmatizing combat PTSD."
  },
  {
    id: "v2", name: "Kevin Dougherty", role: "Military Chaplain; Author",
    quote: "The chaplain who walks with soldiers into combat and stays with them when they come home sees something civilians never see: the specific way that war breaks the human soul — and the specific way that God can enter that break.",
    bio: "Military chaplains occupy a unique position: they are present in combat alongside soldiers, and they continue to serve them when they return. Their pastoral insight into combat trauma, moral injury, and faith crisis in veterans is irreplaceable."
  },
  {
    id: "v3", name: "Tyler Boudreau", role: "Marine Corps Captain, Author; PTSD Survivor",
    quote: "I came home and realized I could not talk about what had happened. Not to civilians, not to my family, not even in church. Because nobody wanted to know. That silence nearly killed me.",
    bio: "Tyler Boudreau's memoir 'Packing Inferno' is a raw account of Marine Corps combat service, the moral injury of command decisions in Iraq, and the shattering return home. His voice represents the experience of many combat veterans who cannot find a place to be honest about what they carry."
  },
  {
    id: "v4", name: "Mary Daly", role: "VA Chaplain; Veterans Mental Health Specialist",
    quote: "Veterans with PTSD are not spiritually broken. They are wounded. And wounds heal differently than they break. The church needs to understand the difference.",
    bio: "VA chaplains — who work daily with veterans experiencing PTSD, moral injury, suicidality, and spiritual crisis — bring a pastoral wisdom to combat trauma that few others can equal. Their primary contribution is not answers but presence: the willingness to hear what others cannot."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "VA Mental Health Services",
    text: "The VA offers PTSD treatment including Cognitive Processing Therapy (CPT) and Prolonged Exposure (PE) — both highly effective, evidence-based treatments. Contact your VA or call 1-800-827-1000. If you are not connected to the VA, help getting connected is available through Wounded Warrior Project (woundedwarriorproject.org)."
  },
  {
    icon: "🧠",
    title: "Understand Moral Injury vs. PTSD",
    text: "Moral injury — the wound from acting against one's moral code or witnessing others do so — is distinct from PTSD and requires different treatment. Military chaplains and therapists trained in moral injury can help distinguish and address both. Adaptive Disclosure Therapy is specifically designed for combat moral injury."
  },
  {
    icon: "👥",
    title: "Veteran Peer Support",
    text: "Veteran-to-veteran support — through the VA, Wounded Warrior Project, Team Red White and Blue, or veteran-specific faith communities — provides the particular companionship of those who have been in similar situations. This is irreplaceable: the presence of someone who actually knows what you carried."
  },
  {
    icon: "✝️",
    title: "A Military-Connected Church or Chaplain",
    text: "Find a church with a significant veteran population or a pastor who has military experience. The specific texture of combat PTSD and moral injury is better understood by those who have been in it or who have been trained to work with it. Military chaplains who have transitioned to civilian ministry are particularly valuable."
  },
  {
    icon: "📿",
    title: "Lament as Spiritual Practice",
    text: "The Psalms of lament — especially Psalms 22, 44, 55, 77, and 88 — speak directly to the experience of veterans who have seen things they cannot unsee. Read them aloud. Write your own. The tradition of honest complaint to God is ancient and entirely appropriate to what you carry."
  },
  {
    icon: "🫂",
    title: "Tell Your Family — With Support",
    text: "Family members of veterans with PTSD are secondary trauma survivors. Tell your family what you can, with a therapist present if possible. Give them resources — the National Center for PTSD has family resources at ptsd.va.gov. Your healing is connected to your family's ability to understand what has happened to you."
  }
];

const scriptures = [
  { verse: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
  { verse: "Psalm 55:4-5", text: "My heart is in anguish within me; the terrors of death have fallen upon me. Fear and trembling come upon me, and horror overwhelms me." },
  { verse: "Isaiah 57:18-19", text: "I have seen his ways, but I will heal him; I will lead him and restore comfort to him and his mourners, creating the fruit of the lips. Peace, peace, to the far and to the near, says the Lord, and I will heal him." },
  { verse: "2 Samuel 1:26", text: "I am distressed for you, my brother Jonathan; very pleasant have you been to me; your love to me was extraordinary, surpassing the love of women." },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." }
];

type VpEntry = { id: string; date: string; carries: string; needs: string; hold: string };

export default function VeteransPtsdFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<VpEntry[]>([]);
  const [carries, setCarries] = useState("");
  const [needs, setNeeds] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_veteransptsd_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!carries.trim()) return;
    const entry: VpEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), carries, needs, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_veteransptsd_entries", JSON.stringify(updated));
    setCarries(""); setNeeds(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_veteransptsd_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎖️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Veterans, PTSD &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those who served and came home carrying what they cannot fully describe — and for the churches and families who want to be present but do not always know how.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> Veterans Crisis Line: call 988 then press 1 &bull; Text 838255 &bull; Chat: veteranscrisisline.net &bull; VA Mental Health: va.gov/mental-health &bull; Wounded Warrior: woundedwarriorproject.org
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Veteran&apos;s Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I carrying today that I haven&apos;t said out loud?</label>
                  <textarea value={carries} onChange={e => setCarries(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What do I need that I haven&apos;t been able to ask for?</label>
                  <textarea value={needs} onChange={e => setNeeds(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I still holding onto — about God, about purpose, about surviving?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
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
                {e.carries && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Carrying:</strong> {e.carries}</p>}
                {e.needs && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Need:</strong> {e.needs}</p>}
                {e.hold && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Moral Injury and the Veteran</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Understanding moral injury — the wound from acting against one&apos;s moral code — in combat veterans</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Moral Injury and the Veteran" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>God Sees What You Carry</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The God who has seen what combat required of you — and has not turned away</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="God Sees What You Carry" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Lament in the Psalms for Veterans</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>David&apos;s Psalms of combat grief and what they offer those who carry what others don&apos;t want to know</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Lament in the Psalms for Veterans" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Coming Home: The Transition from War</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The disorientation of returning to civilian life and how the church can be a bridge</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Coming Home: The Transition from War" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
