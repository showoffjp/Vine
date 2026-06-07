"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_suicide_loss_entries";

interface JournalEntry { id: string; date: string; text: string; }

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function SuicideLossPage() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Grief After Suicide Loss</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            This Grief Has Its Own Weight
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Losing someone to suicide carries grief layers that other losses do not — shock, searching for why, unanswerable questions, and sometimes the crushing weight of wondering if you could have changed it. You could not have. And your loved one was more than how they died.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>If You Are in Crisis: </strong>
          <span style={{ color: MUTED }}>988 Suicide &amp; Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; American Foundation for Suicide Prevention: </span>
          <strong style={{ color: TEXT }}>afsp.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Alliance of Hope for Suicide Loss Survivors: </span>
          <strong style={{ color: TEXT }}>allianceofhope.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Church's Historic Teaching Has Caused Additional Harm", body: "For most of Christian history, suicide was treated as an unforgivable sin, and people who died by suicide were denied burial in consecrated ground. This theology caused immeasurable harm to grieving families who were told their loved one was damned. Most thoughtful Christian traditions have moved away from this position — recognizing that mental illness, despair, and neurological crisis are not morally equivalent to intentional rebellion against God. Your loved one is not defined by their worst moment of pain." },
              { title: "You Cannot Know the Last Moment of a Soul", body: "Theologians who have addressed suicide loss with pastoral honesty — including C.S. Lewis, the Catholic Catechism since 1992, and many Protestant traditions — have recognized that we cannot know the final state of a person's soul. Only God was present in those last moments. Psychological pain that produces suicide is often as beyond voluntary control as the pain of a terminal illness. You are not required to render a verdict." },
              { title: "The Why May Never Come", body: "Suicide survivors — those who have lost someone — often report that the search for why is one of the most consuming and ultimately unanswerable pursuits. There may be notes, clues, history — and still no answer that fully explains. Part of survival is learning to live with permanent uncertainty about what could not be changed and what cannot now be known. This is not failure; it is the particular condition of this loss." },
              { title: "You Did Not Cause This", body: "The 'if only' thinking of suicide grief — if only I had called, if only I had seen the signs, if only I had said the right thing — is a feature of the grief, not an accurate assessment of causation. Suicide is the result of an internal experience of pain that becomes, for that person, unbearable. It is not caused by what a loved one did or failed to do. The American Association of Suicidology is unambiguous: suicide is not caused by a single relationship failure." },
              { title: "Your Own Mental Health Is at Elevated Risk", body: "People bereaved by suicide have elevated rates of depression, PTSD, complicated grief, and suicide risk themselves. This is not weakness; it is the documented impact of this specific loss. Getting your own mental health support is not optional — it is necessary. Tell your doctor what happened. Find a therapist with experience in suicide bereavement. Consider an AFSP survivors support group." },
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
              { name: "Kay Warren", role: "Author and mental health advocate, suicide loss survivor", quote: "Matthew died on April 5, 2013. He was 27. He had mental illness that was finally more powerful than the treatments we tried and the love we gave. I am not afraid to say his name. I am not afraid to say how he died. There is no shame in how my son died.", note: "Warren's public grief — naming her son, naming the cause of death, refusing shame — has been one of the most powerful acts of suicide loss survivor advocacy in American Christianity." },
              { name: "Albert Hsu", role: "Author of Grieving a Suicide: A Loved One's Search for Comfort, Answers and Hope", quote: "Suicide grief is disenfranchised grief — grief the community doesn't always know how to hold. But your grief is real, your loved one's life was real, and God is present in the grief the community doesn't know how to name.", note: "Hsu, who lost his father to suicide, wrote the most widely used Christian guide for suicide loss survivors. It is honest about the theological questions without forcing premature resolution." },
              { name: "Barbara Rossing", role: "New Testament scholar, Lutheran theologian", quote: "The final judgment belongs to God alone. We are not given the authority to make pronouncements about the eternal state of those who have died. What we are given is the task of caring for those who grieve.", note: "Rossing's work on eschatology emphasizes the limits of human theological knowledge — especially in cases where mental illness is involved. The pastoral posture is toward the living, not toward verdicts about the dead." },
              { name: "Naomi (biblical figure)", role: "Old Testament figure, book of Ruth", quote: "Do not call me Naomi [pleasant]; call me Mara [bitter], for the Almighty has dealt very bitterly with me. I went away full, and the Lord has brought me back empty.", note: "Naomi's public renaming of herself as Bitter is one of the most honest declarations of devastating loss in Scripture. She is not condemned for it. Ruth stays. And the story, in time, moves." },
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
              { title: "AFSP Survivor Support Groups", body: "The American Foundation for Suicide Prevention (AFSP) runs peer-led support groups for suicide loss survivors across the country — called Healing Conversations and Survivor Outreach Programs. These are free and led by people who have experienced the same loss. Find them at afsp.org/find-support. The Alliance of Hope (allianceofhope.org) provides online forums and peer support specifically for suicide loss survivors." },
              { title: "Trauma-Informed Grief Therapy", body: "Suicide loss is traumatic loss — the shock of the manner of death and the unanswered questions create a grief that differs from expected loss. Standard grief counseling may be insufficient. Look for therapists trained in both grief and trauma, or specifically in suicide bereavement. Complicated Grief Treatment (CGT) is an evidence-based approach designed specifically for traumatic and complicated loss. columbia.edu/complicated-grief" },
              { title: "Tell Your Loved One's Full Story", body: "Your loved one was more than how they died. Intentionally telling the full story — who they were, what they loved, how they made people feel, what they contributed — is a healing act that resists the tendency of suicide loss to flatten a whole person into their death. Create a memory box, write their story, share memories with others who knew them. The death is part of the story. It is not the whole story." },
              { title: "Recognize the Grief Comes in Waves", body: "Suicide loss grief does not move in a linear progression through stages. It comes in waves — triggered by anniversaries, by news stories, by seemingly arbitrary moments. Anniversary reactions (intensification around the date of death, birthdays, holidays) are normal and often persist for years. Knowing this in advance allows you to prepare: identify support before the anniversary, plan the day deliberately, and be gentle with yourself." },
              { title: "Get Your Own Mental Health Assessment", body: "Suicide loss survivors have significantly elevated risk for depression, PTSD, and suicidal ideation. Tell your primary care physician what happened. Ask for a mental health referral. If you find yourself having thoughts of suicide, contact 988 immediately. This is not weakness — it is the appropriate response to an injury that has been sustained. You matter too." },
              { title: "Faith Practices During the Unanswerable Season", body: "Many suicide loss survivors report an extended period in which conventional prayer and worship feel hollow or inaccessible. This is not apostasy; it is the natural result of grief that exceeds language. The lament Psalms, sitting in silence, lighting a candle for your loved one, serving others as a form of prayer, and spiritual direction with someone who does not demand theological resolution — these are all forms of faith that do not require pretending to be okay." },
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
              { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.", note: "Jesus cried these words from the cross — making the prayer of total abandonment a sacred act, not a faithless one. You are allowed to scream your grief." },
              { ref: "Romans 8:38–39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", note: "Nothing — not the manner of death, not the unanswered theological questions — separates your loved one from the love of God. This is Paul's claim, and it stands." },
              { ref: "John 11:35", text: "Jesus wept.", note: "At Lazarus's grave, knowing he was about to raise him, Jesus wept anyway. God weeps at death. God weeps with you. The tears are not doubt; they are love." },
              { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", note: "Crushed in spirit is precisely what suicide loss produces. God's nearness is specifically to this condition, not just to manageable grief." },
              { ref: "Lamentations 3:19–22", text: "Remember my affliction and my wanderings, the wormwood and the gall! My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end.", note: "The book of Lamentations is written after total catastrophe. The hope it offers does not deny the catastrophe. It sits beside it and calls to mind something that has not changed." },
              { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", note: "The eschatological promise is not that the tears were not real — it is that they will be wiped away. By God, personally. Every one." },
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
                placeholder="Who was your person? What do you want people to know about them that their death does not capture?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Grief After Suicide Loss — Elevation Church" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="When You Cannot Find God in the Grief" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Mental Health, Suicide, and the Church's Response" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="You Are Not Alone in This Grief" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Your loved one was more than how they died. And you deserve care for this particular grief.</p>
          <p style={{ marginTop: 8 }}>AFSP: afsp.org &nbsp;|&nbsp; Alliance of Hope: allianceofhope.org &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
