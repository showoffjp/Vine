"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Incarnation Means God Knows What It Is to Die",
    verse: "Hebrews 2:14-15",
    text: "Since the children have flesh and blood, he too shared in their humanity so that by his death he might break the power of him who holds the power of death — and free those who all their lives were held in slavery by their fear of death. Jesus did not die at a convenient age. He died young, by violence, leaving behind people who loved him. He approaches your dying from the inside, not the outside."
  },
  {
    title: "Your Children Are Not Unattended",
    verse: "Psalm 68:5",
    text: "Father of the fatherless and protector of widows is God in his holy habitation. The ache of leaving your children is real and it is right — it is love being honest about what it will cost. And God's specific covenant is with the children of those who die. He does not treat their future as your unfinished business — it is his."
  },
  {
    title: "Dying Well Is Not a Passive Thing",
    verse: "2 Timothy 4:7",
    text: "I have fought the good fight, I have finished the race, I have kept the faith. Paul writes this anticipating death. Dying with faith intact, dying with relationships tended, dying having said what needed saying — this is the race. How you die forms your children and your community in ways that outlast your life."
  },
  {
    title: "Lament Is Permitted — Required",
    verse: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? Jesus quotes this psalm from the cross. Dying young with children is an occasion for this cry — and this psalm ends in praise, not because the pain disappeared, but because God has not abandoned the sufferer."
  },
  {
    title: "Resurrection Is Not Consolation Prize — It Is the Reality",
    verse: "1 Corinthians 15:54-55",
    text: "Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting? Paul addresses death directly, taunting it — because resurrection has already won. The sting is real right now. The victory is more real still. Both truths are in the room."
  }
];

const voices = [
  {
    id: "v1",
    name: "Kate Bowler",
    role: "Professor, Duke Divinity School; Author, Everything Happens for a Reason (And Other Lies I've Loved)",
    quote: "I am learning to live in the in-between — between diagnosis and whatever comes next. I don't know if this is a story of survival or a story of death. But I know that I am loved, and that my son is loved, and that neither of those things depends on my living.",
    bio: "Kate Bowler was diagnosed with Stage IV colon cancer at 35 with a young son. Her memoir and podcast Terrible, Thanks for Asking are essential for young parents facing terminal diagnosis — honest, theologically rigorous, and achingly human."
  },
  {
    id: "v2",
    name: "Paul Kalanithi",
    role: "Neurosurgeon; Author, When Breath Becomes Air (posthumous)",
    quote: "What makes life meaningful enough to go on living? Now I struggled to answer that question for myself. I wanted to lie down next to my daughter and stroke her hair. I wanted to teach her to ride a bike, to make her dinner, to see her first day of school.",
    bio: "Paul Kalanithi died at 37 of lung cancer, having just had a daughter. His memoir When Breath Becomes Air is a secular-to-spiritual reckoning with dying young as a parent, widely used in Christian and non-Christian contexts for its unflinching honesty and beauty."
  },
  {
    id: "v3",
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised; Professor of Theology",
    quote: "Loss can diminish us, or it can expand us. I have seen people made larger by catastrophic loss — not because the loss was good, but because they let it do its work in them rather than around them.",
    bio: "Jerry Sittser writes from the inside of catastrophic loss, not survivorship. His work is essential for those whose terminal diagnosis invites them to consider how their dying might form those they leave behind."
  },
  {
    id: "v4",
    name: "Atul Gawande",
    role: "Surgeon; Author, Being Mortal",
    quote: "Our job is not to ensure health and survival at all costs — it is to enable well-being. And well-being, it turns out, is about the way people live, not just how long they live.",
    bio: "Atul Gawande's Being Mortal, while not explicitly Christian, is the most practically important book on dying well — specifically addressing how young parents can tend to what matters most in the time they have rather than surrendering every moment to treatment."
  }
];

const practices = [
  {
    icon: "📝",
    title: "Record Your Voice, Your Face, Your Words for Your Children",
    text: "Letters for future milestones (graduation, wedding, first heartbreak). Video messages. Voice recordings. A journal of memories of them that they can read when they are older. These are among the most loving things you can do with finite time. Organizations like StoryWorth and StoryCorps help structure this."
  },
  {
    icon: "⚖️",
    title: "Get Practical and Legal Affairs in Order — Now",
    text: "Will, trust, power of attorney, life insurance review, guardianship designation. Doing this is not giving up — it is an act of love for your spouse and children. An estate attorney or financial planner who specializes in young families can walk you through this quickly."
  },
  {
    icon: "🗣️",
    title: "Have the Conversations You Would Otherwise Avoid",
    text: "Tell your children — age-appropriately — what is happening. Tell your spouse what you are afraid of, and what you hope for, and what you need from them. Tell the people you love what they have meant to you. The conversations you do not have will be the ones you regret."
  },
  {
    icon: "🏥",
    title: "Understand Your Palliative Care Options",
    text: "Palliative care is not hospice — it is specialized care focused on quality of life alongside curative treatment. It significantly improves both life quality and, in some studies, duration. Ask your oncologist for a palliative care referral. National Cancer Institute: cancer.gov/about-cancer/advanced-cancer/care-choices/palliative-care-fact-sheet."
  },
  {
    icon: "🙏",
    title: "Permit Your Lament to Be Loud and Your Hope to Be Real",
    text: "Dying young as a parent is not a faith test you pass by not crying. Lament is biblical. Anger at the diagnosis, grief for what will be missed, terror about leaving children behind — these are not failures of faith. They are faith's honest companions. Bring them to God, and bring your hope alongside them."
  },
  {
    icon: "👥",
    title: "Build a Care Team for Your Family, Not Just Yourself",
    text: "Who will care for your spouse after you are gone? Who will be a consistent presence for your children? The community you build now — naming it, making it explicit — is a gift to your family. Consider involving your church, your neighborhood, and close friends in a named, coordinated care network."
  }
];

const scriptures = [
  { verse: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
  { verse: "Psalm 68:5", text: "Father of the fatherless and protector of widows is God in his holy habitation." },
  { verse: "2 Timothy 4:7", text: "I have fought the good fight, I have finished the race, I have kept the faith." },
  { verse: "1 Corinthians 15:54-55", text: "Then the saying that is written will come true: Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting?" },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "John 14:1-2", text: "Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you?" }
];

type DyingEntry = { id: string; date: string; want: string; legacy: string; trust: string };

export default function TerminalCancerYoungParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DyingEntry[]>([]);
  const [want, setWant] = useState("");
  const [legacy, setLegacy] = useState("");
  const [trust, setTrust] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_terminalcancerparentj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!want.trim()) return;
    const entry: DyingEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), want, legacy, trust };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_terminalcancerparentj_entries", JSON.stringify(updated));
    setWant(""); setLegacy(""); setTrust("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_terminalcancerparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Facing Death</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Terminal Diagnosis as a Young Parent</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the diagnosis means you will likely leave your children before you intended. When dying well and parenting well are now the same task. When grief and love and urgency all compete for the same finite days. God meets you here — not with answers, but with presence.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for dying well — a faith that does not minimize the grief and does not minimize the resurrection.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Writers and thinkers who have reckoned with dying young — some from the inside, some from years of walking alongside it.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical acts of love that take finite time seriously — for your children, your spouse, and yourself.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — terminal diagnosis creates crisis; reach out.<br />
                American Cancer Society: <strong style={{ color: TEXT }}>cancer.org</strong><br />
                CaringBridge (family updates + journal): <strong style={{ color: TEXT }}>caringbridge.org</strong><br />
                Kate Bowler's community: <strong style={{ color: TEXT }}>katebowler.com</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the parent who is dying — holding the sting of death and the reality of resurrection in the same hands.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to write what you want your children to know and what you are releasing into God's hands. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I most want my children to know about me — and about God?</label>
                <textarea value={want} onChange={e => setWant(e.target.value)} rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What legacy am I working to leave in the time I have?</label>
                <textarea value={legacy} onChange={e => setLegacy(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I entrusting to God — about my children, my spouse, my own fear?</label>
                <textarea value={trust} onChange={e => setTrust(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.want && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>FOR MY CHILDREN</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.want}</p></div>}
                  {e.legacy && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>LEGACY</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.legacy}</p></div>}
                  {e.trust && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>ENTRUSTED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.trust}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony for the young parent dying — on dying well, on leaving well, and on the resurrection that is not a consolation prize.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Kate Bowler: Dying Young and the God Who Stays</div>
              <VideoEmbed videoId="y-DQH-M1HuM" title="Kate Bowler: Dying Young and the God Who Stays" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>When Breath Becomes Air: Paul Kalanithi</div>
              <VideoEmbed videoId="SqGRnlXplx0" title="When Breath Becomes Air: Paul Kalanithi" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>A Grace Disguised: Jerry Sittser on Catastrophic Loss</div>
              <VideoEmbed videoId="oNpTha80yyE" title="A Grace Disguised: Jerry Sittser on Catastrophic Loss" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Resurrection and the Real World: Death Is Not the End</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="Resurrection and the Real World: Death Is Not the End" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
