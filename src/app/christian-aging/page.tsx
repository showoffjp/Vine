"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type AGEEntry = { id: string; date: string; season: string; grace: string; purpose: string };

export default function ChristianAgingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AGEEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianaging_entries") ?? "[]"); } catch { return []; }
  });
  const [jSeason, setJSeason] = useState("");
  const [jGrace, setJGrace] = useState("");
  const [jPurpose, setJPurpose] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianaging_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSeason.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), season: jSeason, grace: jGrace, purpose: jPurpose }, ...prev]);
    setJSeason(""); setJGrace(""); setJPurpose("");
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
          Aging with Grace
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Scripture refuses to treat old age as decline to be managed. Gray hair is a crown of glory (Prov 16:31), Caleb claimed his mountain at eighty-five, and the promise stands: &ldquo;They will still bear fruit in old age&rdquo; (Ps 92:14). This guide walks through the theology, purpose, and practice of growing old in faith.
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
                title: "Gray Hair as a Crown of Glory (Prov 16:31)",
                body: "Gray hair is a crown of glory; it is gained in a righteous life. In a culture that spends billions concealing the signs of age, Scripture crowns them. The Bible&rsquo;s vision of aging is honor, not embarrassment: you shall stand up before the gray head and honor the face of an old man (Lev 19:32). Old age in the biblical imagination is not the loss of usefulness but the accumulation of wisdom, the visible record of a life walked with God. The church is meant to be one of the last communities on earth where the old are not hidden away but honored, consulted, and visibly central to the family of faith.",
              },
              {
                title: "Psalm 71 — the Old Age Psalm",
                body: "Do not cast me off in the time of old age; forsake me not when my strength is spent... O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation (Ps 71:9, 17-18). Psalm 71 is the prayer of an aging believer: honest about fading strength and real fears, yet anchored in a lifetime of remembered faithfulness. Its logic is striking &mdash; the psalmist asks for more years not for comfort but for mission: <em>until I proclaim your might to another generation</em>. Old age has a job description: testimony.",
              },
              {
                title: "Caleb at Eighty-Five — &ldquo;Give Me This Hill Country&rdquo; (Josh 14:10-12)",
                body: "And now, behold, I am this day eighty-five years old. I am still as strong today as I was in the day that Moses sent me... So now give me this hill country of which the LORD spoke on that day. Forty-five years after spying out the land, Caleb shows up not asking for a pension but for a mountain &mdash; the hardest territory, still held by giants. Caleb&rsquo;s secret is named six times in Scripture: he wholly followed the LORD. Aging with grace does not mean shrinking ambitions; it means letting God resize them. Some assignments in the kingdom are reserved for people with eighty-five years of accumulated faith.",
              },
              {
                title: "Purpose Beyond Retirement — Titus 2 and the Mentoring Mandate (Titus 2:2-5)",
                body: "Older men are to be sober-minded, dignified, self-controlled... Older women likewise... are to teach what is good, and so train the young women. The Bible knows no category of spiritual retirement. Retirement from a career may be a gift &mdash; but Titus 2 redirects the freed-up capacity of the older believer toward the younger: modeling, teaching, training. Grandparenting itself is ministry &mdash; Timothy&rsquo;s sincere faith dwelt first in his grandmother Lois (2 Tim 1:5). The older believer&rsquo;s calling shifts from production to formation: less doing, more blessing; fewer projects, more people; passing on what a lifetime with God has made true.",
              },
              {
                title: "Fruit in Old Age — Facing Decline with Hope (Ps 92:12-14; 2 Cor 4:16)",
                body: "The righteous flourish like the palm tree... They still bear fruit in old age; they are ever full of sap and green. Psalm 92 does not deny that bodies decline; it insists that fruitfulness does not. Paul gives the mechanism: though our outer self is wasting away, our inner self is being renewed day by day (2 Cor 4:16). Declining health, diminished energy, even dementia and dependence do not place a believer outside God&rsquo;s purposes &mdash; prayer, presence, blessing, and legacy remain. The final season of life can be its most concentrated witness: a person visibly leaning their whole weight on grace, declaring that the LORD is upright; he is my rock (Ps 92:15).",
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
              "Pray Psalm 71 slowly, once a week, making its words your own: name your actual fears about aging before God, rehearse his faithfulness from your youth, and ask him for the psalmist&rsquo;s assignment &mdash; to proclaim his might to another generation.",
              "If you are retired or nearing retirement, write a one-page <em>Caleb plan</em>: name the mountain &mdash; a ministry, a person to disciple, a need in your church or neighborhood &mdash; that you will ask God for in this season, rather than letting the calendar fill by default.",
              "Take up the Titus 2 mandate deliberately: identify one younger person &mdash; in your church, family, or workplace &mdash; and invest in them with regular time, honest stories (including your failures), and prayer. Mentoring rarely starts unless the older person extends the invitation.",
              "Treat grandparenting as ministry, not just affection: bless your grandchildren by name and out loud, tell them the stories of God&rsquo;s faithfulness in your life, and pray for each one daily as Lois must have prayed for Timothy (2 Tim 1:5).",
              "Prepare a tangible legacy of blessing: write letters to your children and grandchildren to be read at milestones, record your testimony, and put your affairs in order as an act of love &mdash; so that what you pass on is faith and peace, not confusion.",
              "When health declines, shift the question from <em>What can I still do?</em> to <em>What is God&rsquo;s assignment now?</em> Intercession, presence, gratitude, and a visible trust in God through diminishment are fruit (Ps 92:14) &mdash; and may preach more loudly than your strongest years did.",
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
                name: "J.I. Packer",
                work: "Finishing Our Course with Joy",
                quote: "Aging is not for wimps... My contention is that, so far as our bodily health allows, we should aim to be found running the last lap of the race of our Christian life, as we would say, flat out. The final sprint, so I urge, should be a sprint indeed.",
                bio: "J.I. Packer, the theologian best known for Knowing God, wrote Finishing Our Course with Joy in his late eighties as a manifesto against the cultural script of retirement-as-leisure. Packer argues that the church has absorbed the world&rsquo;s assumption that old age is for winding down, when Scripture calls the aging believer to zeal, discipling, and hope &mdash; running through the tape rather than coasting to it.",
              },
              {
                name: "John Piper",
                work: "Rethinking Retirement",
                quote: "Resolutely resist the typical American dream of retirement... You don&rsquo;t have to be good at anything to make much of God in your last years. Persevering to the end in faith makes God look like what he really is: faithful.",
                bio: "John Piper&rsquo;s short book Rethinking Retirement: Finishing Life to the Glory of Christ challenges believers to refuse a final chapter of mere recreation. Piper holds up figures like Raymond Lull, who returned to the mission field in his eighties, and argues that the last years &mdash; freed from career demands &mdash; may be a believer&rsquo;s most strategic, whether in mission, mentoring, prayer, or faithful endurance through weakness.",
              },
              {
                name: "Billy Graham",
                work: "Nearing Home",
                quote: "All my life I was taught how to die as a Christian, but no one ever taught me how I ought to live in the years before I die... Old age is not for sissies, but growing older can be a wonderful time of life &mdash; if we learn to see it through God&rsquo;s eyes.",
                bio: "Billy Graham wrote Nearing Home in his nineties, reflecting candidly on the surprises of old age &mdash; grief, declining health, the loss of his wife Ruth &mdash; while testifying that God assigns purpose to every season. Graham&rsquo;s counsel centers on legacy: investing in family, finishing well, and treating the final years as preparation for the homecoming toward which the whole Christian life has been pointed.",
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
              { ref: "Prov 16:31", text: "Gray hair is a crown of glory; it is gained in a righteous life." },
              { ref: "Ps 92:12-14", text: "The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green." },
              { ref: "Ps 71:17-18", text: "O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come." },
              { ref: "Josh 14:11-12", text: "I am still as strong today as I was in the day that Moses sent me; my strength now is as my strength was then, for war and for going and coming. So now give me this hill country of which the LORD spoke on that day." },
              { ref: "Isa 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save." },
              { ref: "2 Cor 4:16", text: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day." },
              { ref: "Titus 2:2-3", text: "Older men are to be sober-minded, dignified, self-controlled, sound in faith, in love, and in steadfastness. Older women likewise are to be reverent in behavior... They are to teach what is good." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Seasons Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What season of life are you in, honestly?</label>
                  <textarea
                    value={jSeason}
                    onChange={e => setJSeason(e.target.value)}
                    placeholder="Name the gains and losses of this season without varnish..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where do you see God&rsquo;s grace carrying you in it?</label>
                  <textarea
                    value={jGrace}
                    onChange={e => setJGrace(e.target.value)}
                    placeholder="Even to your old age I am he... I will carry and will save (Isa 46:4)..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What purpose is God giving you for this season?</label>
                  <textarea
                    value={jPurpose}
                    onChange={e => setJPurpose(e.target.value)}
                    placeholder="A mountain to ask for, a person to mentor, a generation to bless..."
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
                {e.season && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Season</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.season}</p></div>}
                {e.grace && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Grace</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.grace}</p></div>}
                {e.purpose && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Purpose</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.purpose}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="aBq5HvbrSrU" title="Seven Resolutions for Aging and Dying Well &mdash; John Piper" />
            <VideoEmbed videoId="3z-lokhZl2Q" title="How to Age Gracefully | Psalm 71:17 | Our Daily Bread" />
            <VideoEmbed videoId="xCm3H1lm59s" title="Faith That Finishes Strong (Psalm 71) &mdash; Alistair Begg" />
            <VideoEmbed videoId="9ph_OkZutS8" title="Don&rsquo;t Waste Your Retirement" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
