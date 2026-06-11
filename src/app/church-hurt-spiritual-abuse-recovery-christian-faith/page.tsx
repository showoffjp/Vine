"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_church_hurt_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function ChurchHurtPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Church Hurt &amp; Spiritual Abuse Recovery</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            What Was Done to You Was Not God
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Spiritual abuse is real abuse. When a church or church leader uses God, Scripture, or religious authority to control, shame, silence, or harm — that is not holiness. You are not too sensitive. You are not unforgiving. You were injured.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide &amp; Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; GRACE (Godly Response to Abuse in the Christian Environment): </span>
          <strong style={{ color: TEXT }}>netgrace.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Religious Trauma Institute: </span>
          <strong style={{ color: TEXT }}>religioustraumainstitute.com</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Jesus Had the Harshest Words for Religious Abuse of Power", body: "In Matthew 23, Jesus reserves his most severe language not for prostitutes or tax collectors but for religious leaders who load heavy burdens on people, who shut the kingdom of heaven in people's faces, who use their authority to exploit rather than serve. The institution that claims to represent God can do the most damage when it betrays that claim. Jesus named this clearly. You are allowed to name it too." },
              { title: "Spiritual Abuse Is a Real Category of Harm", body: "Spiritual abuse involves the misuse of religious authority, teaching, or community to control, manipulate, shame, silence, or harm. It includes: isolating members from outside relationships; using Scripture to silence legitimate concerns; demanding unquestioning obedience to leaders; shaming members for normal emotions, doubts, or disagreements; covering up abuse for institutional protection. The harm is real and the wound is specifically spiritual — it contaminates the relationship with God." },
              { title: "Your Anger Is Theologically Appropriate", body: "If you left an abusive church angry, that anger is not a spiritual problem. It is a moral response to moral injury. The prophets were angry at religious corruption. Jesus was angry in the temple. Ephesians 4:26 acknowledges that anger can be the right response to wrongdoing — the problem is not anger but what we do with it over time. Your anger is data about what was done to you. Treat it as information, not as sin." },
              { title: "Distinguishing God from What Was Done in God's Name", body: "The most difficult and most essential task of spiritual abuse recovery is separating the institution and its leaders from God. This can take years. God did not ask to be used as a weapon against you. The theology weaponized against you was someone else's distortion, not the truth of Scripture. Reclaiming Scripture — reading it for yourself, slowly, without the overlay of the abuser's voice — is part of the healing." },
              { title: "You Are Allowed to Not Be in a Church Right Now", body: "Healing from church abuse sometimes requires time outside of any institutional church. This is not the same as abandoning faith. The early church met in homes; the desert fathers and mothers found God in the wilderness; Thomas was absent from the room when Jesus appeared and was not disqualified. You can be a Christian while the institutional church is not currently safe for you. Take the time you need." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Diane Langberg", role: "Psychologist, author of Redeeming Power", quote: "Power used for self-protection or self-aggrandizement in the name of God is the most dangerous power on earth. It masquerades as the highest good while doing the greatest damage.", note: "Langberg has spent decades treating trauma survivors, including victims of religious and clergy abuse. Her framework distinguishes power-over (domination, which produces abuse) from power-with (servant leadership, which produces flourishing)." },
              { name: "Scot McKnight and Laura Barringer", role: "Authors of A Church Called Tov", quote: "Church cultures that produce harm are not simply the result of one bad leader. They are the result of a culture — a set of values, practices, and norms — that makes abuse possible and protects the institution over the victim.", note: "McKnight and Barringer's analysis of the Willow Creek situation identifies specific cultural markers of toxic church systems and contrasts them with a church culture of goodness (tov is the Hebrew word for good from Genesis 1)." },
              { name: "Rachael Denhollander", role: "Lawyer and abuse advocate, first public accuser in the Larry Nassar case", quote: "The gospel demands that we protect the vulnerable above all else. When we invert that — when we protect the institution or the leader at the expense of the victim — we have abandoned the gospel, whatever language we use.", note: "Denhollander's testimony at Nassar's sentencing — and her subsequent advocacy for abuse accountability in Christian institutions — has been among the most important prophetic voices in recent American Christianity." },
              { name: "Nadia Bolz-Weber", role: "Lutheran pastor, author of Accidental Saints", quote: "The church has always been composed of both grace and ungrace. Both wheat and tares. The tares do not disqualify the wheat. But the tares are real, and naming them is not unbelief — it is honesty.", note: "Bolz-Weber's frank theology of institutional failure, combined with her commitment to the sacramental life of the church, offers a path between naive churchism and complete ecclesial abandonment." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Therapy with a Religious Trauma-Informed Clinician", body: "Spiritual abuse causes real psychological harm — PTSD symptoms, hypervigilance in spiritual contexts, difficulty with trust, confusion about identity (especially if your identity was heavily formed in the abusive context). Look for therapists trained in religious trauma or trauma generally. The Religious Trauma Institute (religioustraumainstitute.com) maintains a directory. Reclaiming a sense of self outside the abusive community is core therapeutic work." },
              { title: "GRACE (Godly Response to Abuse in the Christian Environment)", body: "GRACE is a nonprofit that provides independent investigations of alleged abuse in Christian organizations and training for churches in abuse prevention and response. If you experienced abuse in a Christian institution and are navigating the aftermath, GRACE can provide guidance and resources. netgrace.org" },
              { title: "Name What Happened Without Minimizing It", body: "Recovery requires accurate naming: I was in an abusive church. I was spiritually abused. The leader who did this was using power wrongly. Language matters. People who have been abused often minimize ('it wasn't that bad,' 'maybe I'm the problem') because of the shame absorbed in abusive systems. Using accurate language — to yourself, in therapy, eventually in trusted relationships — is not disloyalty. It is reality." },
              { title: "Deconstruction Is Not the Same as Apostasy", body: "After spiritual abuse, many survivors find that the entire theological framework they were given needs examination. This is sometimes called deconstruction — the process of examining which beliefs were genuinely held and which were imposed through control. This process is not the enemy of faith; it is often the only path to faith that is genuinely your own. Jesus distinguished what he had received from the traditions that contradicted it (Mark 7). You are allowed to do the same." },
              { title: "Take Your Time Returning to Corporate Worship", body: "If and when you return to a faith community, go slowly. Visit without commitment. Watch how the community handles conflict and doubt. Ask what their abuse response protocols are. Observe whether leadership is held accountable. A church that cannot tolerate questions and cannot name institutional failures is not safe. A community that makes room for doubt and has robust accountability structures is a very different environment." },
              { title: "The Psalms of Lament Are for This Grief", body: "Psalms 13, 22, 44, 88 were written for people whose trust in the community of God's people had collapsed. Psalm 44 explicitly accuses God of abandoning the people who kept covenant. This kind of honest, corporate lament is part of the biblical tradition — not an anomaly. If all you can do is cry out in accusation, you are in ancient company." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Matthew 23:4", text: "They tie up heavy burdens, hard to bear, and lay them on people's shoulders, but they themselves are not willing to move them with their finger.", note: "Jesus describes spiritual abuse with clinical precision. The burden-loading, combined with the leader's exemption from those burdens, is the pattern." },
              { ref: "Ezekiel 34:2–4", text: "Ah, shepherds of Israel who have been feeding yourselves! Should not shepherds feed the sheep? The weak you have not strengthened, the sick you have not healed, the injured you have not bound up, the strayed you have not brought back, the lost you have not sought, and with force and harshness you have ruled them.", note: "God speaks directly to leaders who have used the pastoral role to exploit rather than serve. This passage is among the most direct indictments of abusive church leadership in Scripture." },
              { ref: "Mark 7:8–9", text: "You leave the commandment of God and hold to the tradition of men. And he said to them, You have a fine way of rejecting the commandment of God in order to establish your tradition!", note: "Jesus challenged the religious authorities who confused their institutional traditions with divine command. Distinguishing God's word from human accretion is authorized by Jesus himself." },
              { ref: "Psalm 55:12–14", text: "For it is not an enemy who taunts me — then I could bear it; it is not an adversary who deals insolently with me — then I could hide from him. But it is you, a man, my equal, my companion, my familiar friend.", note: "Betrayal by someone trusted in the household of faith. The Psalmist names the specific texture of ecclesial betrayal — it is worse because it comes from inside the covenant community." },
              { ref: "Revelation 2:2", text: "I know you cannot bear with those who are evil, and have tested those who call themselves apostles and are not, and found them to be false.", note: "Jesus commends the church at Ephesus for discerning and naming false leadership. Testing leadership claims is not insubordination — it is faithfulness." },
              { ref: "Isaiah 1:13, 17", text: "Bring no more vain offerings; incense is an abomination to me... Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow's cause.", note: "God refuses worship from an institution that perpetuates injustice. Right worship cannot coexist with structural harm to vulnerable people." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What was done to you? What do you still believe, and what are you still sorting through? What does faith look like for you right now?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="G-2e9mMf7E8" title="Healing After Church Hurt — Elevation Church" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Finding God After Religious Trauma" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="What the Church Gets Wrong About Power and Abuse" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Deconstruction and Faith: You Don't Have to Choose" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>What was done to you was not God. And God is still findable.</p>
          <p style={{ marginTop: 8 }}>GRACE: netgrace.org &nbsp;|&nbsp; Religious Trauma Institute: religioustraumainstitute.com &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
