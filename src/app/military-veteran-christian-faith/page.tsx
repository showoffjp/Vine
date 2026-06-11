"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "The Church Needs Veterans' Voices",
    body: "Veterans carry experiences that most civilians — including most pastors — have never come close to. Combat, moral injury, loss of fellow soldiers, and the disorientation of returning to civilian life are not abstract theological problems; they are lived realities that demand a theology robust enough to hold them. The church has often been either militaristically celebratory or awkwardly silent about war. Veterans deserve more than a camouflage-themed appreciation Sunday. They deserve genuine pastoral engagement with what they have seen and done.",
  },
  {
    title: "Moral Injury: The Wound Beneath PTSD",
    body: "Moral injury is distinct from PTSD, though they often co-occur. While PTSD involves fear-based responses to threat, moral injury involves a wound to conscience — the experience of doing something, witnessing something, or failing to prevent something that violated one's own moral framework. Many veterans carry profound guilt, shame, and questions about God and their own worth in the wake of moral injury. The Christian tradition, with its theology of grace, confession, forgiveness, and redemption, has rich resources for moral injury — but only if the church is willing to engage it honestly.",
  },
  {
    title: "Killing, Conscience, and Just War",
    body: "Christians have debated the ethics of war for two millennia. Augustine's just war theory, the pacifist tradition, and various positions in between all grapple with the fundamental tension between the call to love enemies and the reality of violent conflict. Veterans who killed in combat, who gave orders that cost lives, or who made decisions under fire that still haunt them deserve theological engagement — not cheap absolution that skips over the complexity, and not condemnation that ignores the moral context of combat.",
  },
  {
    title: "Lament and the Psalms of War",
    body: "Psalm 22 is a psalm of forsakenness. The psalms of lament are not peripheral to Scripture — they are central. The soldiers of Scripture — David, the armies of Israel — were not sheltered from the horror of war. David, 'a man after God's own heart,' was also a man who killed, who led armies, and who lived with the weight of what that meant. The Psalter holds warrior grief with unflinching honesty. Veterans can find themselves in these texts.",
  },
  {
    title: "Homecoming as a Second Transition",
    body: "Return from deployment is often as disorienting as deployment itself. The person who went is not the same person who came back — and neither is the family, the community, the world that remained. Many veterans experience profound alienation: unable to relate to the concerns of civilian life, carrying experiences that can't be translated, grieving the loss of unit cohesion and purpose. This is a spiritual crisis as much as a psychological one. The church that understands transition can offer something irreplaceable.",
  },
];

const voices = [
  {
    name: "Jonathan Shay",
    role: "Author, Achilles in Vietnam and Odysseus in America",
    quote: "Combat trauma is not a new problem — Homer understood it. What is new is the possibility of healing, through community and moral acknowledgment.",
  },
  {
    name: "Tyler Boudreau",
    role: "Marine Corps veteran and author, Packing Inferno",
    quote: "The military made me who I am, and war broke something in me. Both things are true. Recovery required holding both without collapsing either.",
  },
  {
    name: "Larry Dewey",
    role: "Combat veteran and author, War and Redemption",
    quote: "Veterans need people who will walk through the fire with them — not stand at the edge and shout advice. The church has the calling to be those people.",
  },
  {
    name: "Chaplain Mark Metheney",
    role: "Military chaplain and pastoral theology professor",
    quote: "Moral injury in veterans is one of the most important pastoral challenges of our time, and most of the church doesn't have language for it yet.",
  },
];

const practices = [
  {
    title: "VA Services and Veterans' Community Care",
    body: "The Department of Veterans Affairs provides healthcare, mental health services, and specialty programs for veterans. Many areas now have VA Community Care programs that allow veterans to receive care from local providers when VA facilities are not accessible. The Veterans Crisis Line (988, then press 1) provides 24/7 crisis support specifically for veterans. Many veterans avoid VA services due to stigma, bureaucracy, or bad past experiences — but persistence in accessing care is worth it.",
  },
  {
    title: "Combat-Specific Trauma Therapy",
    body: "Cognitive Processing Therapy (CPT) and Prolonged Exposure (PE) are both VA-endorsed, evidence-based therapies for combat PTSD. EMDR is also effective. Some veterans find that civilian therapists without military experience lack the cultural competence to be effective — asking specifically for therapists with military backgrounds can help. The Give an Hour network (giveanhour.org) connects veterans with mental health providers who donate their services.",
  },
  {
    title: "Moral Injury Groups and Adaptive Disclosure",
    body: "Adaptive Disclosure Therapy (ADT) was developed specifically for moral injury in veterans. The Soul Repair Center (brite.edu/soulrepair) conducts research on moral injury and publishes resources for veterans and faith communities. Some VA centers now offer moral injury specific programming. Peer groups of other veterans who understand moral injury can be more helpful than anything a civilian can offer.",
  },
  {
    title: "Finding a Veteran-Informed Church Community",
    body: "Some congregations have specifically developed veteran ministries. The Point Man International Ministries (ptsd.org) is a Christian organization specifically for veterans and their families. Team Red White & Blue (teamrwb.org) focuses on physical and social activity for veterans. The Bob Woodruff Foundation and Headstrong Project both support veteran mental health. A pastor who has served or who has genuinely learned about military culture can make a congregation a place veterans actually want to be.",
  },
  {
    title: "Reconnecting with Purpose and Mission",
    body: "One of the most common experiences of returning veterans is the loss of purpose that came with military service — clear mission, unit cohesion, leadership structures, the sense that what you do matters. Rebuilding purpose in civilian life is essential and often underestimated as a spiritual task. Service organizations, mentorship of younger veterans, advocacy, or simply finding work that connects to deeply held values can all be part of reclaiming that sense of mission.",
  },
  {
    title: "Family Systems Work",
    body: "Military service affects the entire family system — spouses who held everything together during deployments, children who grew up in military culture, relationships strained by repeated separations and returns. Many veterans find that their hardest work is not processing the battlefield but rebuilding intimate relationships. Couples and family therapy with a military-informed counselor, Blue Star Families resources, and organizations like FOCUS (Families OverComing Under Stress) offer support.",
  },
];

const scriptures = [
  {
    ref: "Psalm 22:1",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?",
  },
  {
    ref: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned.",
  },
  {
    ref: "Psalm 91:5-6",
    text: "You will not fear the terror of night, nor the arrow that flies by day, nor the pestilence that stalks in the darkness, nor the plague that destroys at midday.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.",
  },
  {
    ref: "Micah 4:3",
    text: "They will beat their swords into plowshares and their spears into pruning hooks. Nation will not take up sword against nation, nor will they train for war anymore.",
  },
  {
    ref: "2 Corinthians 1:3-4",
    text: "Praise be to the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
  },
];

const JOURNAL_KEY = "vine_military_veteran_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
];

export default function MilitaryVeteranPage() {
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
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Military & Veterans
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Military Veterans & Christian Faith
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You carry experiences that demand more than a camouflage appreciation Sunday. The God of David — warrior and psalmist — meets you where you are.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#0d1a10", border: `2px solid ${GREEN}`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Veterans Crisis Support</div>
          <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
            <strong>Veterans Crisis Line:</strong> Call 988 then press 1<br />
            <strong>Text:</strong> 838255<br />
            <strong>Chat:</strong> veteranscrisisline.net
          </div>
          <div style={{ color: MUTED, fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Give an Hour:</strong> giveanhour.org — free mental health care for veterans<br />
            <strong style={{ color: TEXT }}>Point Man International:</strong> ptsd.org — Christian support for veterans
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? GREEN : BORDER}`, background: activeTab === tab ? GREEN + "22" : "transparent", color: activeTab === tab ? GREEN : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{item.title}</h3>
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
                <div style={{ color: GREEN, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: GREEN + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
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
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write what you carry. Write what you hope for. Write what you need. Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
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
