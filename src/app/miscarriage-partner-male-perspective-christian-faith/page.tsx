"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_miscarriage_partner_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function MiscarriagePartner() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Grief & Loss</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Miscarriage — A Partner&apos;s Grief and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>For fathers, partners, and spouses whose grief is real and rarely acknowledged — you lost a child too.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Share Pregnancy Loss Support: nationalshare.org &nbsp;|&nbsp; Compassionate Friends: compassionatefriends.org &nbsp;|&nbsp; Star Legacy Foundation: starlegacyfoundation.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>You Lost a Child Too</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When a pregnancy ends in loss, the focus of care and grief recognition naturally goes to the person who carried the child. This is appropriate — their experience is different, their loss is different, their body went through something that no one else in the room can fully understand. But it does not mean that a partner&apos;s grief is less real or less worthy of acknowledgment. A partner imagined a future with that child, told people about the pregnancy, felt the hope of becoming a parent, and lost all of that too. That loss has a name. It deserves space. You are allowed to grieve without making your partner&apos;s grief the only grief in the room.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Man Who Was Not Supposed to Weep</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Male socialization teaches men to contain grief, to be strong, to support — to hold others&apos; pain rather than expressing their own. In the context of pregnancy loss, many men feel that their role is to be steady for their partner, not to fall apart themselves. This is a real and costly suppression. David wept and fasted for the child he was about to lose (2 Samuel 12:16–17). Jacob wept when he believed Joseph was dead. Jesus wept at Lazarus&apos;s tomb. The biblical witness does not support the cultural expectation that men grieve in silence. You are allowed to need support. You are allowed to receive it without abandoning your partner.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Grief That Moves at Different Speeds</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Partners often grieve pregnancy loss on a different timeline than the person who carried the child — sometimes processing sooner, sometimes much later, often in ways that look different. Neither timeline is correct. The problem is when partners assume that their different grief expressions mean one person cares more or less. A partner who appears functional the day after a loss is not grieving less — they may be dissociating, or their grief may be arriving weeks later in ways that are harder to name. Couples who survive pregnancy loss usually do so by giving one another permission to grieve differently without interpreting the difference as betrayal.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Naming the Child</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many Christian families name children lost to miscarriage or stillbirth. This practice is not morbid — it is a form of recognition, a statement that this person existed, that they mattered, that their brief presence in the world was not nothing. In Psalm 139:13, God knew the psalmist in the womb. Christian theology has generally held that the God who knows each person before birth knows each child lost before birth. Naming the child, holding a small service, planting something that grows — these rituals create a container for grief that has no other socially recognized form.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Supporting Your Partner While Not Disappearing</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The particular challenge of partner grief after pregnancy loss is navigating two simultaneous needs: your partner&apos;s acute grief and your own. Being present and supportive does not require you to have no needs. The practice that helps most is allowing grief to exist in the same room without one eclipsing the other — being honest when you need to step away to cry, being clear when you are struggling, finding your own support in addition to providing support. A couple who can say I am struggling too, not to compete with each other&apos;s pain but to be honest about their own, comes through this loss more whole.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "C.S. Lewis", title: "A Grief Observed", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing." },
              { name: "Jon Hicks", title: "Miscarriage from Dad's Perspective", quote: "We talk about pregnancy loss as something that happens to women. It happened to both of us. I just had no vocabulary for my part of it, no permission to grieve my own grief, no one asking how I was doing." },
              { name: "Nicholas Wolterstorff", title: "Lament for a Son", quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see." },
              { name: "Sheryl Sandberg & Adam Grant", title: "Option B", quote: "Grief doesn't follow a schedule. It doesn't divide neatly into his grief and her grief. The most loving thing two people can do after loss is hold space for the fact that they are both in it, and their expressions of it will not always match." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "SHARE and Compassionate Friends", body: "SHARE Pregnancy and Infant Loss Support (nationalshare.org) offers support groups specifically for parents, including partners, who have experienced pregnancy loss. The Compassionate Friends (compassionatefriends.org) serves bereaved parents broadly and has chapters nationally. Both organizations offer peer support from people who have lived through similar loss." },
              { title: "Find Your Own Support — Not Just Hers/Theirs", body: "A mistake many partners make is seeking grief support only in service of supporting their partner. You need support for your own grief, not only coaching on how to support theirs. A therapist, a grief group, a trusted friend, a pastor — someone who will hold space specifically for your experience of the loss, not just your role in supporting the primary griever." },
              { title: "Couples Grief Therapy", body: "Pregnancy loss strains relationships significantly, particularly because partners grieve differently and at different speeds. A therapist who specializes in perinatal loss and works with couples can provide a container where both partners&apos; grief is held simultaneously without either being diminished. The Postpartum Support International directory (postpartum.net) includes perinatal loss specialists." },
              { title: "Ritual and Naming", body: "Participating in naming your child, holding a small ceremony, selecting a memorial, contributing to a charity in your child&apos;s name — these are ways of being an active grief participant rather than only a support provider. Partners who take an active role in memorializing the loss often process it more fully than those who defer entirely to their partner&apos;s lead." },
              { title: "Time and Permission", body: "Partners often return to work quickly after pregnancy loss because they have no formal bereavement leave and feel pressure to function. The grief tends to arrive later and without social support structures. Give yourself permission to grieve when it comes — weeks or months later — even when others have moved on. There is no expiration date on real loss." },
              { title: "Spiritual Direction or Pastoral Care", body: "Finding a pastor or spiritual director who will hold space for your specific experience — not just offer generalities about God&apos;s plan — is worth seeking out. Many pastoral caregivers are better trained for this now than a generation ago. Ask specifically: I lost a child to miscarriage. I need to talk about my grief, not just how to support my partner." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "2 Samuel 12:16–17", text: "David pleaded with God for the child. He fasted and spent the nights lying in sackcloth on the ground. The elders of his household stood beside him to get him up from the ground, but he refused, and he would not eat any food with them." },
              { ref: "Psalm 139:13", text: "For you created my inmost being; you knit me together in my mother's womb." },
              { ref: "John 11:35", text: "Jesus wept." },
              { ref: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
              { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
              { ref: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Who were you expecting to become? What did you lose with that child? What do you wish someone would ask you?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="A Father's Grief — Miscarriage and the Invisible Mourner" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="When Men Grieve — Permission to Feel the Full Weight" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Pregnancy Loss as a Couple — Grieving Together" />
            <VideoEmbed videoId="7_CGP-12AE0" title="God Knew Your Child — Psalm 139 and Infant Loss" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
