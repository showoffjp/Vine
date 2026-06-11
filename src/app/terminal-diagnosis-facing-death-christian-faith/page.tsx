"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_terminal_diagnosis_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function TerminalDiagnosisPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Terminal Diagnosis &amp; Facing Death</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Are Allowed to Not Be Okay With This
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            A terminal diagnosis does not require immediate theological resolution. You are allowed to be angry, afraid, heartbroken, and confused. Jesus asked for the cup to be taken away. You are in very good company.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Support Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; National Hospice and Palliative Care Organization: </span>
          <strong style={{ color: TEXT }}>1-800-658-8898</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; CaringBridge: </span>
          <strong style={{ color: TEXT }}>caringbridge.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Jesus Asked for the Cup to Be Taken Away", body: "In Gethsemane, the Son of God — who knew the full theological significance of what he was facing — prayed for a different outcome. He did not accept the cross with immediate serenity. He was in anguish. His sweat was like drops of blood. He asked three times if there was another way. Christian faith does not require you to move quickly to acceptance or to perform peace you have not yet found. The prayer of 'if there is another way' is a prayer Jesus prayed." },
              { title: "Anger at God Is Not Apostasy", body: "The tradition of lament — crying out to God in accusation, grief, and anger — runs through the Psalms, through Job, through Jeremiah (Jer. 20:7: 'You deceived me, O Lord'), through Lamentations. The psalmist accuses God of abandonment, of sleeping through disaster, of forgetting the covenant. These prayers are in the canon. They are not edited out or marked as theological failures. Honest anger at God — 'this is not what I was promised, this is not fair, why are you not fixing this?' — is within the range of faithful response." },
              { title: "The Resurrection Does Not Make Death Not Bad", body: "Christian hope in resurrection does not require pretending that death is not a real and terrible loss. Paul calls death the 'last enemy' to be destroyed (1 Cor. 15:26) — an enemy, not a friend. The Christian posture toward death is not acceptance of its goodness but resistance to it, lamentation of it, and the confidence that it does not have the last word. These are different things. You are allowed to hate that this is happening, to grieve what you will lose and what will lose you, while still holding the resurrection hope." },
              { title: "The Dying Person Has Authority Over Their Own Death", body: "Christian theology has a strong tradition of what was called ars moriendi — the art of dying well — which located considerable agency with the dying person. Advance directives, the decision about how aggressively to pursue treatment, choices about palliative care and hospice, decisions about who is present and what is said — these belong to you. The body that has been entrusted to you is yours to steward through to the end. Medical decisions at the end of life are not spiritual defection; they are stewardship." },
              { title: "You Do Not Have to Be a Lesson for Other People", body: "Well-meaning people around a dying person often want the dying person to provide them with spiritual comfort, inspiration, or theological reassurance. This is an unfair burden. You are not obligated to die in a way that is convenient for other people's faith. You are allowed to need things, to be afraid, to be angry, to be sad, to not have answers. The people around you are responsible for their own spiritual lives; you are responsible only for yours." },
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
              { name: "Nicholas Wolterstorff", role: "Philosopher and author of Lament for a Son", quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see.", note: "Wolterstorff wrote Lament for a Son after his son Eric died in a mountain climbing accident. His refusal to philosophize the grief away — combined with his persistent faith — makes it one of the most honest grief texts available to Christians." },
              { name: "Job", role: "Old Testament figure", quote: "As for me, is my complaint against man? Why should I not be impatient? Look at me and be appalled, and lay your hand over your mouth. When I remember, I am dismayed, and shuddering seizes my flesh.", note: "Job was sustained in the text as righteous while he was raging. God's rebuke at the end is not for his honesty but for his friends' neat theological explanations. The friends who provided tidy reasons for the suffering were wrong." },
              { name: "Atul Gawande", role: "Surgeon and author of Being Mortal", quote: "We've medicalized aging, dying, and death. We've made them medical problems rather than human ones. And in doing so, we've stripped dying people of what they most want: agency, comfort, and the company of the people they love.", note: "Gawande's work has been among the most important in shifting American medicine toward patient-centered end-of-life care — where the dying person's goals and values, not the medical system's default protocols, drive care decisions." },
              { name: "C.S. Lewis", role: "Author of A Grief Observed", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing.", note: "Lewis wrote A Grief Observed after his wife Joy died of cancer. His brutal honesty about his own loss — including his anger at God — combined with his eventual return to faith, makes it an essential companion for the terminally ill and their caregivers." },
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
              { title: "Hospice and Palliative Care: Access Them Early", body: "Hospice care is available when a physician certifies a prognosis of six months or less if the illness follows its expected course. Palliative care — focused on comfort and quality of life — is available at any stage of illness, alongside curative treatment. Many people access both too late, suffering unnecessarily from undertreated pain and symptoms. Medicare, Medicaid, and most private insurance fully cover hospice. The National Hospice and Palliative Care Organization (NHPCO) has a helpline at 1-800-658-8898." },
              { title: "Complete Your Advance Directive", body: "An advance directive (living will plus healthcare power of attorney) ensures that your wishes about medical treatment are honored when you can no longer speak for them. This is not giving up; it is ensuring that the people who love you are not making impossible decisions without your guidance. Five Wishes (fivewishes.org) is an accessible advance directive document that meets legal requirements in most states and includes spiritual and personal wishes, not only medical ones." },
              { title: "Tell People What You Need", body: "Dying people are often surrounded by people who want to help and do not know how. Specific requests are received better than general ones: please bring dinner on Tuesday, please take the children for the afternoon on Saturday, please sit with me and do not say anything, please stop telling me to fight harder. You are allowed to manage the people around you to meet your actual needs. This is not selfishness; it is agency." },
              { title: "Legacy Work: What You Want to Leave", body: "Many terminally ill people find that creating something for those they love — letters, videos, memory books, recorded stories, financial and legal organization — provides both a sense of purpose and a form of ongoing relationship after death. Organizations like StoryCorps (storycorps.org) offer free recording sessions. Ethical wills (documents that convey values and wisdom rather than assets) have a long Jewish tradition and are worth writing." },
              { title: "Spiritual Direction for the Dying", body: "A spiritual director — a trained companion who listens for where God is in your experience — is a particularly valuable support for people who are dying. Unlike pastoral visits that may focus on comfort or correctness, spiritual direction creates space for honest exploration of fear, anger, hope, and meaning without requiring resolution. Spiritual Direction International (sdicompanions.org) has a global directory." },
              { title: "CaringBridge and Communication with Community", body: "CaringBridge (caringbridge.org) allows a person or family to maintain a journal and update their community without fielding hundreds of individual calls and texts. It also allows friends and family to leave messages of support. For people who are exhausted by the communication demands of a terminal illness, delegating the updates to a trusted person posting to CaringBridge is one practical way to maintain connection while protecting limited energy." },
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
              { ref: "Luke 22:42", text: "Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.", note: "The Son of God prayed for a different outcome before accepting this one. Your resistance to what is coming is not unfaithful. Jesus did it first." },
              { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.", note: "Jesus quoted this from the cross. Crying out in abandonment is a sacred act, not a faithless one." },
              { ref: "Philippians 1:21–23", text: "For to me to live is Christ, and to die is gain. If I am to live in the flesh, that means fruitful labor for me. Yet which I shall choose I cannot tell. I am hard pressed between the two.", note: "Paul did not treat death as a disaster or as a release from life without sorrow. Both living and dying are held in a complex relationship. He did not pretend the tension was not real." },
              { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", note: "The promise is that the tears are real and will be wiped away. By God, personally. The mourning now is not incompatible with the consolation coming." },
              { ref: "John 11:33–35", text: "When Jesus therefore saw her weeping... he was deeply moved in his spirit and greatly troubled. And he said, Where have you laid him? They said to him, Lord, come and see. Jesus wept.", note: "Knowing what he was about to do, Jesus wept anyway. Grief and hope are not mutually exclusive. God weeps at death." },
              { ref: "2 Corinthians 4:17–18", text: "For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.", note: "Paul's language of light and momentary is pastoral perspective, not minimization — he elsewhere describes his sufferings as a long list of serious things. The weight of glory is compared to the weight of affliction, and it is heavier." },
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
                placeholder="What do you want people to know? What are you afraid of? What do you hope for? What do you want to leave?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="When Death Comes Near — Elevation Church" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Art of Dying Well: Christian Perspectives on the End" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Jesus in Gethsemane: Permission to Not Be Okay" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Resurrection Hope and the Real Weight of Grief" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You are allowed to not be okay with this. Jesus prayed for another way. You are in very good company.</p>
          <p style={{ marginTop: 8 }}>NHPCO: 1-800-658-8898 &nbsp;|&nbsp; Five Wishes: fivewishes.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
