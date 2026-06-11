"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GRTEntry = { id: string; date: string; gift: string; giver: string; response: string };

export default function ChristianGratitudePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GRTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiangratitude_entries") ?? "[]"); } catch { return []; }
  });
  const [jGift, setJGift] = useState("");
  const [jGiver, setJGiver] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiangratitude_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jGift.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), gift: jGift, giver: jGiver, response: jResponse }, ...prev]);
    setJGift(""); setJGiver(""); setJResponse("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          A Grateful Heart
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          &ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus for you&rdquo; (1 Thessalonians 5:18). Gratitude is not a personality trait or a seasonal sentiment but a way of seeing &mdash; every good gift traced back to the Giver. This guide walks through the theology and practice of a grateful heart.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "In All Circumstances — Gratitude as God&rsquo;s Will (1 Thess 5:16-18)",
                body: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. Paul does not say give thanks for all circumstances &mdash; Scripture never asks us to call evil good &mdash; but in all circumstances. The distinction is crucial: gratitude is not denial of pain but defiance of despair. In every situation, however dark, there remains something true about God &mdash; his presence, his promises, his past faithfulness &mdash; for which thanks can honestly be given. And notably, Paul wrote this to a persecuted church, not a comfortable one. Thanksgiving in all circumstances is possible only because God is in all circumstances.",
              },
              {
                title: "Gratitude as Worship — and Ingratitude as the Root of Sin (Romans 1:21)",
                body: "For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened. In Paul&rsquo;s anatomy of human fallenness, the slide begins not with murder or idolatry but with a failure of thanks. Ingratitude is the root sin because it severs the gift from the Giver &mdash; receiving everything while acknowledging no one. Conversely, gratitude is among the purest forms of worship: it honors God as God, naming him as the source of every good and perfect gift (James 1:17). Every honest thank you is a small act of theology &mdash; a confession that we are receivers, not self-makers.",
              },
              {
                title: "The Ten Lepers — Healing and the Return (Luke 17:11-19)",
                body: "Then one of them, when he saw that he was healed, turned back, praising God with a loud voice; and he fell on his face at Jesus&rsquo; feet, giving him thanks. Now he was a Samaritan. Ten lepers are cleansed; one returns. Jesus&rsquo; question &mdash; Were not ten cleansed? Where are the nine? &mdash; still hangs in the air. All ten received the gift; only one returned to the Giver, and to him Jesus says, your faith has made you well, using a word (sozo) that means more than physical cure &mdash; saved, made whole. The story distinguishes between receiving blessings and knowing the Blesser. Gratitude is the road back; it turns a healing into a relationship.",
              },
              {
                title: "Thanksgiving and Peace — Prayer&rsquo;s Forgotten Ingredient (Philippians 4:6)",
                body: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. The phrase with thanksgiving is easy to skip, but it is the hinge of the verse. Anxiety rehearses what might go wrong; thanksgiving rehearses what God has already done right. Requests made without gratitude tend to deepen the anxiety they express, because they keep the eyes fixed on the lack; requests made with thanksgiving are framed by remembered faithfulness. This is why gratitude and joy are so tightly linked in Christian experience: joy does not produce gratitude nearly so reliably as gratitude produces joy.",
              },
              {
                title: "Counting Gifts — Gratitude, Contentment, and the Examined Life",
                body: "In One Thousand Gifts, Ann Voskamp takes up a dare to list one thousand things she loves &mdash; ordinary graces: morning light, soap bubbles, fresh bread &mdash; and discovers that the Greek word eucharisteo (he gave thanks) contains both charis (grace) and chara (joy). Naming gifts trains the eye to see grace, and seeing grace produces joy. This is also the secret of contentment Paul describes in Philippians 4:11-12: contentment is learned, not innate, and gratitude is its curriculum. The grateful heart stops measuring life by what is missing and starts receiving what is given &mdash; and finds, to its surprise, that it has been wealthy all along.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Keep a gratitude journal: each evening, write down three specific gifts from the day &mdash; not generic categories (<em>family, health</em>) but particulars (<em>the way the light came through the kitchen window at breakfast</em>) &mdash; and trace each one back to the Giver with a brief word of thanks.",
              "Practice the Philippians 4:6 pattern in prayer: before making any request, name at least one thing God has already done in that same area of life, so every petition is framed by remembered faithfulness.",
              "Be the one leper who returns: when a prayer is answered or a hard season eases, do not simply move on to the next concern &mdash; stop, turn back, and give explicit, unhurried thanks before asking for anything else.",
              "Write one thank-you note this week to a person God has used in your life &mdash; a mentor, a friend, a pastor, a parent &mdash; naming specifically what they gave you; gratitude to God is often completed through gratitude to his instruments.",
              "When discontent surfaces (comparison, envy, the ache of what is missing), counter it concretely: list five things in that exact area of life that you would grieve to lose &mdash; letting gratitude do its slow work of teaching contentment (Phil 4:11-12).",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Ann Voskamp",
                work: "One Thousand Gifts",
                quote: "Eucharisteo &mdash; thanksgiving &mdash; always precedes the miracle. As long as thanks is possible, then joy is always possible.",
                bio: "Ann Voskamp is a Canadian farmer&rsquo;s wife and writer whose memoir One Thousand Gifts chronicles her dare to list a thousand everyday graces. Her central discovery &mdash; that the Greek eucharisteo holds within it both grace (charis) and joy (chara) &mdash; reframed gratitude for a generation of readers: not a polite afterthought but the daily discipline by which ordinary life is seen for what it is, gift upon gift from the hand of God.",
              },
              {
                name: "G.K. Chesterton",
                work: "A Short History of England",
                quote: "I would maintain that thanks are the highest form of thought; and that gratitude is happiness doubled by wonder.",
                bio: "G.K. Chesterton was an English journalist, novelist, and Christian apologist whose entire intellectual posture could be described as astonished gratitude. For Chesterton, the proper response to existence itself &mdash; to the sheer unlikely gift of being &mdash; is thanks. He practiced what he called taking nothing for granted: saying grace not only before meals but, as he quipped, before the play, the opera, the concert, and before dipping the pen in the ink.",
              },
              {
                name: "Dietrich Bonhoeffer",
                work: "Life Together",
                quote: "We pray for the big things and forget to give thanks for the ordinary, small (and yet really not small) gifts. How can God entrust great things to one who will not thankfully receive from Him the little things?",
                bio: "Dietrich Bonhoeffer was a German pastor and theologian executed by the Nazis in 1945 for his resistance to Hitler. In Life Together, written for an underground seminary community, he warns that the person who is never grateful for the small daily gifts of fellowship and provision will be unfit to receive larger ones. His gratitude was not naive optimism &mdash; it was forged under tyranny &mdash; which makes his insistence on thanksgiving for ordinary graces all the weightier.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "1 Thessalonians 5:16-18", text: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you." },
              { ref: "Luke 17:15-17", text: "Then one of them, when he saw that he was healed, turned back, praising God with a loud voice; and he fell on his face at Jesus&rsquo; feet, giving him thanks. Now he was a Samaritan. Then Jesus answered, &ldquo;Were not ten cleansed? Where are the nine?&rdquo;" },
              { ref: "Romans 1:21", text: "For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened." },
              { ref: "Philippians 4:6", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." },
              { ref: "Psalm 100:4-5", text: "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations." },
              { ref: "Philippians 4:11-12", text: "I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Gratitude Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What gift are you thankful for today?</label>
                  <textarea
                    value={jGift}
                    onChange={e => setJGift(e.target.value)}
                    placeholder="Name it specifically &mdash; a moment, a provision, a person, an ordinary grace..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does this gift reveal about the Giver?</label>
                  <textarea
                    value={jGiver}
                    onChange={e => setJGiver(e.target.value)}
                    placeholder="Trace the gift back to God&rsquo;s character &mdash; his kindness, provision, attention to detail..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How will you respond in worship or action?</label>
                  <textarea
                    value={jResponse}
                    onChange={e => setJResponse(e.target.value)}
                    placeholder="A prayer of thanks, a note to someone, generosity passed along, the one leper&rsquo;s return..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.gift && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Gift</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.gift}</p></div>}
                {e.giver && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Giver</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.giver}</p></div>}
                {e.response && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Response</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.response}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="DXDGE_lRI0E" title="10,000 Reasons (Bless the Lord) &mdash; Matt Redman" />
            <VideoEmbed videoId="nQWFzMvCfLE" title="What A Beautiful Name &mdash; Worship as Grateful Response" />
            <VideoEmbed videoId="Sc6SSHuZvQE" title="Reckless Love &mdash; Gratitude for the Father&rsquo;s Pursuing Love" />
            <VideoEmbed videoId="oLYORLZOaZE" title="Shalom / Peace &mdash; The Wholeness a Grateful Heart Receives" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
