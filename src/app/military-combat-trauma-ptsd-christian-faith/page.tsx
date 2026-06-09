"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_military_trauma_entries";

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

export default function MilitaryTraumaPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Military Trauma &amp; Combat PTSD</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            Your Wound Was Sustained in Service
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Military trauma and moral injury are real wounds. The church has often honored the service while failing the wounds. PTSD, moral injury, and spiritual crisis after combat are not failures of faith — they are evidence of conscience, and they deserve proper care.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>Veterans Crisis Line: call </span>
          <strong style={{ color: TEXT }}>988, then press 1</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Text: </span>
          <strong style={{ color: TEXT }}>838255</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; VA Mental Health: </span>
          <strong style={{ color: TEXT }}>1-877-222-8387</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "PTSD Is a Wound, Not a Weakness", body: "Post-Traumatic Stress Disorder is the nervous system's response to overwhelming threat — the amygdala rewiring to maintain a state of hyperalertness that was adaptive in the combat environment. It is not a sign of insufficient faith, insufficient toughness, or character failure. The military's historical culture of silence around psychological wounds has cost thousands of lives. The church that tells veterans to simply trust God more instead of encouraging treatment is contributing to that toll. PTSD responds to treatment. Silence does not." },
              { title: "Moral Injury Is Different from PTSD", body: "Moral injury — a term developed by psychiatrist Jonathan Shay and researcher Brett Litz — describes the wound that results from doing, witnessing, or failing to prevent acts that violate one's moral code. A soldier who killed civilians under ambiguous orders, who watched atrocities and could not stop them, or who survived when others did not carries a different wound than PTSD alone. Moral injury involves guilt, shame, spiritual crisis, and a shattered sense of the world as morally ordered. It requires moral and spiritual care alongside clinical treatment." },
              { title: "The God of the Psalms Knows War", body: "The Old Testament was written in a culture where war was a central feature of life, and Scripture does not sanitize the psychological and moral wounds of combat. Psalm 22, Psalm 88, and Lamentations were written by people who had witnessed violence, defeat, and atrocity. The warrior David wrote many of the Psalms. The lament tradition is not only appropriate for veterans — it was often written by them and for them." },
              { title: "Warrior Traditions and the Just War Theology", body: "Christian just war theory — from Augustine through Aquinas — tried to define conditions under which killing in war could be morally justified. But even just war theology acknowledges that taking life leaves a moral residue. Many medieval Christian communities required soldiers returning from war to undergo a period of penance and reintegration — not because they had sinned, but because they needed the community's help to be welcomed back into the full human community. The isolation of veterans from this kind of communal care has been costly." },
              { title: "Surviving When Others Did Not: The Guilt Is Real", body: "Survivor's guilt — the persistent question of why you lived when others died — is one of the most common and most spiritually disorienting aspects of combat trauma. The theology of divine providence can actually make this worse if poorly applied ('God must have had a plan for you'). What is often more helpful is honest lament, community witness to the names of those who died, and slowly rebuilding a sense of meaningful life that honors rather than erases those who were lost." },
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
              { name: "Jonathan Shay", role: "Psychiatrist and author of Achilles in Vietnam", quote: "Moral injury results from the violation of what is right by someone in legitimate authority. When a soldier is ordered to do something that violates their sense of what is right — and then must live with what they did — the wound is not primarily psychological. It is moral.", note: "Shay's work comparing the experiences of Vietnam veterans to Homer's Iliad established moral injury as a distinct category that requires different care than PTSD — specifically moral reckoning, communal witnessing, and the rebuilding of trust in moral order." },
              { name: "David (biblical figure)", role: "Old Testament warrior and king, Psalms 22, 51, and many others", quote: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin.", note: "David had participated in war, had blood on his hands, and had committed acts that violated his own conscience. His Psalms are among the most honest reckoning with guilt and moral wound in any literature." },
              { name: "Karl Marlantes", role: "Marine veteran of Vietnam, author of What It Is Like to Go to War", quote: "We ask young men and women to kill other human beings and then we do not help them deal with what that does to a person. We send them back into civilian life as if nothing happened. This is a form of institutional cruelty.", note: "Marlantes's memoir is one of the most honest accounts of the moral and spiritual dimensions of combat. His advocacy for better preparation and better support for veterans is grounded in lived experience." },
              { name: "Tim O'Brien", role: "Vietnam veteran and author of The Things They Carried", quote: "They carried all the emotional baggage of men who might die. Grief, terror, love, longing — these were intangibles, but the intangibles had their own mass and specific gravity, they had tangible weight.", note: "O'Brien's fiction about Vietnam captures what no clinical taxonomy can fully contain: the texture of what soldiers carry that does not show up in imaging studies." },
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
              { title: "Veterans Crisis Line: Call 988 Then Press 1", body: "The Veterans Crisis Line is staffed 24/7 by VA staff, many of whom are veterans themselves. They provide immediate support and can connect veterans to local VA mental health resources. Text 838255 for text-based support. The online chat is available at veteranscrisisline.net. If you are in immediate danger, call 911." },
              { title: "VA Mental Health Services and Vet Centers", body: "VA Mental Health (1-877-222-8387) provides comprehensive mental health services for veterans, including PTSD treatment using Prolonged Exposure (PE) and Cognitive Processing Therapy (CPT) — the two most evidence-based treatments for combat PTSD. VA Vet Centers (vetcenter.va.gov) are community-based centers staffed largely by veteran counselors that provide readjustment counseling in a non-clinical environment — often more accessible for veterans resistant to formal VA services." },
              { title: "Moral Injury Requires More Than Clinical Treatment", body: "Moral injury is not addressed by PTSD treatment alone. It requires what Shay calls 'communal witnessing' — someone receiving and honoring the story of what happened, without dismissal or judgment. Chaplains, spiritual directors, and clergy with military experience can provide this. The Soul Repair Center at Brite Divinity School (soulrepair.org) focuses specifically on moral injury in veterans and trains chaplains and faith leaders to provide moral injury care." },
              { title: "Peer Support: Team Red White and Blue", body: "Team Red White & Blue (teamrwb.org) provides social and physical activity programming specifically for veterans. Research consistently shows that veteran peer connection — especially through physical activity — reduces PTSD symptoms, suicidal ideation, and social isolation. The organization is not faith-based but is veteran-centered. Many communities with significant veteran populations have local chapters." },
              { title: "Military OneSource", body: "Military OneSource (militaryonesource.mil) provides free counseling (up to 12 sessions) for active duty, Guard, Reserve, and recently transitioned veterans and their families. They can provide referrals to faith-based counselors, community mental health services, and specialized PTSD treatment. Available 24/7 at 1-800-342-9647." },
              { title: "Spiritual Direction for Moral Injury", body: "A spiritual director with military background or specific moral injury training can provide the relational witness that moral injury recovery requires. The process involves telling the full story honestly — including the parts that feel most unforgiven — to someone who can hold it without flinching. Spiritual Direction International (sdicompanions.org) allows searching for directors with military or trauma specialization." },
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
              { ref: "Psalm 22:14–15", text: "I am poured out like water, and all my bones are out of joint; my heart is like wax; it is melted within my breast; my strength is dried up like a potsherd; and my tongue sticks to my jaws; you lay me in the dust of death.", note: "Physical and psychological collapse described with forensic precision. The psalmist does not pretend to spiritual composure. He is in pieces, and he says so." },
              { ref: "Psalm 51:1–3", text: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin. For I know my transgressions, and my sin is ever before me.", note: "David's prayer after moral failure is the biblical template for moral injury recovery — acknowledgment, full honesty, appeal to God's mercy rather than one's own righteousness." },
              { ref: "Ezekiel 37:1–3", text: "The hand of the Lord was upon me, and he brought me out in the Spirit of the Lord and set me down in the middle of the valley; it was full of bones... And he said to me, Son of man, can these bones live? And I answered, O Lord God, you know.", note: "Ezekiel's vision of the valley of dry bones — addressed to a traumatized, scattered, defeated people — is a vision of restoration from complete fragmentation. The answer to the question is yes." },
              { ref: "Lamentations 3:19–22", text: "Remember my affliction and my wanderings, the wormwood and the gall! My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end.", note: "Written in the aftermath of the destruction of Jerusalem — catastrophic communal trauma. The hope is not denial of the affliction but the stubborn assertion of something that has not changed." },
              { ref: "Romans 8:38–39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", note: "Nothing — not what was done to you or what you were ordered to do — separates you from the love of God. This is Paul's claim, and it stands." },
              { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.", note: "God's presence in the worst — not the promise that the worst will not come, but that it will not have the final word." },
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
                placeholder="What do you carry that has no name yet? What did you witness or do that you have not spoken? What would it mean to be received rather than judged?"
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
            <VideoEmbed videoId="hJkLBPIbZr4" title="Moral Injury and Faith: Wounds That Need More Than Prayer" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="The Valley of Dry Bones — Ezekiel 37 and PTSD Recovery" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Coming Home: Faith, Trauma, and Reintegration" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Psalm 51 and the Prayer After Moral Wound" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Your wound was sustained in service. PTSD is not weakness. Moral injury is evidence of conscience. You deserve care.</p>
          <p style={{ marginTop: 8 }}>Veterans Crisis Line: 988 then press 1 &nbsp;|&nbsp; Text: 838255 &nbsp;|&nbsp; VA Mental Health: 1-877-222-8387</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
