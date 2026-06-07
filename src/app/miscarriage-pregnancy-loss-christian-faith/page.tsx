"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a0818 0%, #06050f 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

const JOURNAL_KEY = "vine_miscarriage_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function MiscarriageLossPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() };
    const updated = [entry, ...entries];
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Miscarriage & Pregnancy Loss
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          You lost someone real. The brevity of the life does not diminish the reality of the loss.
          Your grief is not an overreaction. You are mourning a person you loved and a future you had already begun to live in your heart.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`,
              background: tab === i ? ACCENT : "transparent", color: tab === i ? TEXT : MUTED,
              cursor: "pointer", fontSize: 14, fontWeight: tab === i ? 700 : 400, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "A Real Loss, Not a Medical Event", body: "Miscarriage is often treated medically as a common occurrence — 10 to 20 percent of known pregnancies. This statistical normalization can inadvertently communicate that the loss is minor or expected. But pregnancy is never just a biological process for the parents carrying it. From the moment of knowledge, a future is envisioned, a person is loved, a name may have been whispered. That loss is real grief, and it deserves real mourning." },
              { title: "The Question of the Child's Fate", body: "Many grieving parents carry a deep theological anxiety: Where is my baby now? The church has given inconsistent and sometimes harmful answers. The biblical and theological weight of God's character — his covenant love for the vulnerable, his special care for those who cannot speak for themselves — provides a foundation for hope. While certainty is not given, the trajectory of Scripture points toward the mercy of the God who forms us in the womb and knows us before birth (Psalm 139, Jeremiah 1:5)." },
              { title: "The Church's Silence as Secondary Wound", body: "Pregnancy loss often goes unnamed in the church. There are no rituals, no memorial services, no pastoral visits. Parents are expected to absorb the loss quietly and move on. This institutional silence communicates that the loss was not significant enough to mark — which compounds the grief. The church must learn to name and honor this grief explicitly." },
              { title: "Men Grieve Too, Differently", body: "Fathers and partners often grieve miscarriage in isolation, either minimizing their own grief to support their partner or feeling culturally excluded from the grief space. The loss is real for both parents. A family that does not create space for both to grieve is at elevated risk for relationship rupture in the months following the loss." },
              { title: "Subsequent Pregnancy Anxiety", body: "After pregnancy loss, subsequent pregnancies are often accompanied by profound anxiety rather than joy — a kind of grief before the potential loss. This is a normal psychological response to trauma. Perinatal mental health specialists can help parents navigate pregnancy after loss with tools for managing anxiety while remaining present to the new pregnancy." },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Rachel (Genesis 30)", role: "Biblical Figure", quote: "Give me children, or I will die!", insight: "Rachel's anguished cry to Jacob is not rebuked in Scripture — it is recorded. The pain of infertility and pregnancy loss in the biblical world was profound, social, and theological. Rachel's story names the grief without explaining it away." },
              { name: "Hannah (1 Samuel 1)", role: "Biblical Figure", quote: "I am a woman who is deeply troubled. I have not been drinking wine or beer; I was pouring out my soul to the Lord.", insight: "Hannah's grief over childlessness is marked by physical intensity — she wept so bitterly Eli thought she was drunk. Her prayer was not calm acceptance; it was raw, embodied desperation directed at God. And God heard it." },
              { name: "Joanna Crandall", role: "Author, Through the Valley", quote: "Nobody tells you that you will grieve not only your baby but every version of the future that baby represented — the first Christmas, the siblings who would have grown up together, the person they would have become.", insight: "Crandall's work with bereaved parents identifies the layered nature of miscarriage grief — the immediate loss compounded by the loss of an entire imagined future. This is disenfranchised grief in one of its most acute forms." },
              { name: "Sheryl Paul", role: "Perinatal Counselor, Author", quote: "Pregnancy loss is often the first time a woman truly confronts the reality that she cannot control what happens inside her own body. The grief is for the child, but also for the loss of the illusion of safety.", insight: "Paul's counseling work with pregnancy loss highlights the existential dimension — the shattering of taken-for-granted safety — alongside the relational grief for the specific child lost." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: ACCENT, fontSize: 13, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, color: TEXT, fontStyle: "italic", margin: "0 0 12px" }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.insight}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Name and Honor the Child", body: "If you have not already, consider giving your baby a name. Create a small, private ritual of honoring — a plant in the garden, a candle lit on the due date, a journal of who this child was in your imagination. These acts of naming honor the reality of the life. Some families create a memory box with the ultrasound photo, a blanket, or a small item that held significance." },
              { title: "Allow Yourself the Full Duration of Grief", body: "There is no timeline for grief that is too long. Research shows that many women experience significant grief symptoms for up to two years following miscarriage. Do not let anyone set an external deadline on your mourning. If grief is significantly interfering with daily function after several months, a perinatal mental health therapist can offer skilled support." },
              { title: "Seek a Perinatal Mental Health Specialist", body: "Perinatal mental health specialists trained in pregnancy and postpartum loss understand the specific grief of miscarriage, stillbirth, and termination for medical reasons in ways that generalist therapists may not. Postpartum Support International maintains a provider directory at postpartum.net. PSI Helpline: 1-800-944-4773." },
              { title: "Protect Yourself from Harmful Theology", body: "Well-meaning people may say things like God needed another angel or it was not meant to be. These statements minimize the specific grief and impose premature theological resolution. You do not owe anyone a display of acceptance or peace. You can say you are not ready to look for silver linings right now." },
              { title: "Gather Your Community Intentionally", body: "Ask specifically for what you need — meals, presence, silence, no pregnancy talk. People often do not know how to help after miscarriage because the culture gives them no script. Directing them toward specific acts of care protects you from unhelpful interventions and gives people who love you a way to express that love." },
              { title: "Mark the Due Date", body: "The baby's due date often brings a wave of grief that parents are unprepared for. Plan ahead — take the day off if possible, arrange to be with someone who knows, do something that honors the child. The date does not need to be endured in silence; it can be a day of intentional remembrance." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988" },
                  { label: "Postpartum Support International", val: "1-800-944-4773 — pregnancy and infant loss support" },
                  { label: "Share Pregnancy & Infant Loss", val: "nationalshare.org" },
                  { label: "Star Legacy Foundation", val: "starlegacyfoundation.org — stillbirth and miscarriage" },
                  { label: "RESOLVE", val: "resolve.org — infertility and pregnancy loss network" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: TEXT, fontWeight: 600, minWidth: 200 }}>{r.label}:</span>
                    <span style={{ color: MUTED }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Psalm 139:13–16", text: "For you created my inmost being; you knit me together in my mother's womb... Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be.", note: "God's intimate knowledge of every person from conception grounds a hope that this child, however briefly formed, was known by God." },
              { ref: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart.", note: "God's knowledge precedes birth. Personhood and divine knowledge are not contingent on viability or birth certificate." },
              { ref: "Matthew 2:18", text: "A voice is heard in Ramah, weeping and great mourning, Rachel weeping for her children and refusing to be comforted, because they are no more.", note: "The text explicitly permits inconsolable grief. Rachel refuses comfort — and this is not rebuked. Sometimes grief is right-sized to the loss." },
              { ref: "Isaiah 49:15", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!", note: "God's love for the child is beyond even the most devoted mother's. Every child who has ever been is not forgotten by the God who made them." },
              { ref: "2 Samuel 12:23", text: "But now that he is dead, why should I go on fasting? Can I bring him back again? I will go to him, but he will not return to me.", note: "David's quiet confidence — I will go to him — offers a biblical basis for hope that separated loved ones will one day be together with God." },
              { ref: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", note: "The eschatological promise is that every tear will be addressed. The grief of pregnancy loss is not forgotten in the new creation — it is healed." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 8, lineHeight: 1.6 }}>"{s.text}"</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  "Write about the child you lost — not just the pregnancy, but the person you had already begun to imagine. Who were they going to be?",
                  "What did you need from the people around you that you did not receive? What would it have meant to receive it?",
                  "Where is your anger in this grief? Anger at God, at your body, at unfairness? Give it space here.",
                  "What do you want to say to your baby that you never got to say?",
                ].map(q => (
                  <div key={q} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>{q}</div>
                ))}
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Write your thoughts here..."
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 12, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Save Entry
              </button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Teaching on pregnancy loss, grief, hope, and the faithfulness of God toward every life he has formed.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="4Eg_di-O8nM" title="When a Child Dies Before Birth: Grief Without Apology" />
              <VideoEmbed videoId="G-2e9mMf7E8" title="Rachel Weeping: Biblical Permission to Grieve" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Where Is My Baby Now? Theology and Hope After Loss" />
              <VideoEmbed videoId="7_CGP-12AE0" title="The Church and Pregnancy Loss: What We Must Do Better" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
