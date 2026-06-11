"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Testing & Trials","Faith & Works","The Tongue","Two Wisdoms","Prayer","Rich & Poor","Journal","Videos"];

const TESTING_ITEMS = [
  { q: "Count It All Joy (1:2–4)", a: "'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.' James opens counterintuitively: trials are a gift. The logic is teleological — testing produces perseverance which produces completeness. This is not stoic resignation but eschatological confidence that God is working through hardship." },
  { q: "Asking God for Wisdom (1:5–8)", a: "'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you. But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.' The doubter (dipsychos — double-souled) receives nothing. James's cure for trial is not cleverness but asking the God who gives wisdom generously and without reproach." },
  { q: "God Does Not Tempt (1:13–18)", a: "A crucial theological distinction: trials are from God for growth; temptations are from within — each person is dragged away by their own desire. Desire conceives and gives birth to sin; sin when fully grown gives birth to death. God tempts no one. Every good and perfect gift is from above, from the Father of heavenly lights, who does not change like shifting shadows. God is the source of life, not death; light, not shadow." },
  { q: "Doers of the Word (1:19–27)", a: "'Do not merely listen to the word, and so deceive yourselves. Do what it says.' The hearer-only is like a man who looks in a mirror and immediately forgets what he looks like. The doer who continues in the perfect law of liberty — this one will be blessed in what they do. True religion: look after orphans and widows, keep oneself from being polluted by the world." },
];

const TONGUE_CARDS = [
  { icon: "🔥", color: RED, title: "A World of Evil (3:6)", text: "The tongue is a fire — a world of evil set among the members of the body. It corrupts the whole body, sets the whole course of one's life on fire, and is itself set on fire by Gehenna. James uses fire imagery because the tongue's damage is rapid, spreading, and hard to contain. One careless word can ignite a community-destroying conflagration." },
  { icon: "🐅", color: GOLD, title: "The Untameable Beast (3:7–8)", text: "All kinds of animals have been tamed by mankind. But no human being can tame the tongue — it is a restless evil, full of deadly poison. This is not determinism but humility: the tongue's taming is beyond unaided human strength. The implication is that only grace — the Spirit's work — can produce bridled speech." },
  { icon: "🙏", color: PURPLE, title: "Blessing and Cursing (3:9–12)", text: "With the same tongue we praise our Lord and Father and curse people made in God's image. My brothers and sisters, this should not be. Fresh and salt water cannot come from the same spring. A fig tree cannot bear olives. The inconsistency of a tongue that blesses God while cursing God's image-bearers is a sign of deep spiritual disorder, not just bad manners." },
  { icon: "🌱", color: GREEN, title: "The Bridle of the Tongue (3:1–5)", text: "Teachers face stricter judgment because a wrong word shapes many. The person who never stumbles in what they say is perfect, able to bridle the whole body. James uses two small-but-powerful metaphors: a small bit directs a whole horse; a small rudder steers a great ship. So the tongue, though small, makes great boasts and determines the direction of a life." },
];

const TWO_WISDOMS = [
  { q: "Earthly, Unspiritual, Demonic Wisdom (3:14–16)", a: "If you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth. Such wisdom does not come down from heaven but is earthly, unspiritual, demonic. For where you have envy and selfish ambition, there you find disorder and every evil practice. James identifies the root: selfish ambition (eritheia), which in Paul is also a work of the flesh (Gal 5:20). The character of this wisdom mirrors the character of its source." },
  { q: "The Wisdom from Above (3:17–18)", a: "'But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere. Peacemakers who sow in peace reap a harvest of righteousness.' Seven adjectives form a portrait of Spirit-formed character: purity first (undivided motive), then peace, gentleness, compliance with good, mercy, impartiality, and authenticity without hypocrisy. This is the fruit of the Spirit by another name." },
  { q: "The Root of Conflict (4:1–6)", a: "'What causes fights and quarrels among you? Don't they come from your desires that battle within you?' Covetousness — wanting what you do not have — produces conflict. You do not have because you do not ask; when you ask wrongly, with wrong motives, you ask to spend on your pleasures. James indicts spiritual adultery: friendship with the world is enmity with God. The spirit God caused to dwell in us yearns jealously, and God gives grace to the humble." },
  { q: "Submit, Resist, Draw Near (4:7–10)", a: "Seven rapid imperatives form James's call to repentance: Submit to God. Resist the devil (and he will flee). Draw near to God (and he will draw near). Cleanse your hands. Purify your hearts (double-souled ones!). Grieve, mourn, wail. Humble yourselves before the Lord. Promise: he will lift you up. The movement is kenotic — downward humility results in divine exaltation, echoing Peter (1 Pet 5:6) and Christ (Phil 2:8–9)." },
];

const PRAYER_CARDS = [
  { icon: "🙌", color: TEAL, title: "The Prayer of Faith (5:13–15)", text: "'Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise. Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up.' James grounds healing prayer in ecclesial community: the elders, gathered, anointing, in the Lord's name." },
  { icon: "🔥", color: GOLD, title: "Elijah's Effective Prayer", text: "'The prayer of a righteous person is powerful and effective. Elijah was a human being, even as we are. He prayed earnestly that it would not rain, and it did not rain on the land for three and a half years. Again he prayed, and the heavens gave rain, and the earth produced its crops.' James's precedent is democratizing: Elijah had the same nature as you. Effective prayer is not the domain of exceptional mystics but is available to ordinary righteous people." },
  { icon: "🤝", color: GREEN, title: "Confessing to One Another (5:16)", text: "'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.' This verse grounds mutual confession in community healing. James does not restrict confession to clergy but places it in the horizontal relationship of brothers and sisters. Accountability, transparency, and mutual intercession are the healing context — not only professional or sacramental settings." },
  { icon: "💧", color: BLUE, title: "Bringing Back the Wanderer (5:19–20)", text: "'My brothers and sisters, if one of you should wander from the truth and someone should bring that person back, remember this: Whoever turns a sinner from the error of their way will save them from death and cover over a multitude of sins.' James's final word is not doctrine but mission: the task of the community is the rescue of wandering members. This pastoral vision frames the whole letter's ethics as fundamentally about saving lives and covering sins through loving truth-telling." },
];

const RICH_POOR_ITEMS = [
  { q: "Partiality Destroys Community (2:1–13)", a: "'My brothers and sisters, believers in our glorious Lord Jesus Christ must not show favoritism.' If a rich man enters in fine clothes and a poor man in shabby clothes and you show special honor to the rich, you have discriminated and become judges with evil thoughts. The poor are heirs of the kingdom; God chose them to be rich in faith. To favor the rich is to dishonor the poor, while it is the rich who exploit and drag you into court. Showing partiality violates the royal law: love your neighbor as yourself." },
  { q: "Rebuke of the Oppressive Rich (5:1–6)", a: "'Now listen, you rich people, weep and wail because of the misery that is coming on you. Your wealth has rotted, and moths have eaten your clothes. Your gold and silver are corroded. Their corrosion will testify against you and eat your flesh like fire.' The wages held back from workers cry out to the Lord Almighty. You have lived in luxury and self-indulgence; you have fattened yourselves in the day of slaughter. This is prophetic social critique in the tradition of Amos, Isaiah, and Jeremiah." },
  { q: "The Boast of the Rich and Poor", a: "In James 1:9–11: 'Believers in humble circumstances ought to take pride in their high position. But the rich should take pride in their humiliation — since they will pass away like a wild flower.' The poor person's dignity is their spiritual elevation; the rich person's spiritual wisdom is recognizing the transience of wealth. The reversal of status in the kingdom reframes both boast and humiliation." },
];

const VIDEOS = [
  { videoId: "qGSZbGOoJAc", title: "James Overview – The Bible Project" },
  { videoId: "LgU3O6qUPeQ", title: "Faith Without Works Is Dead – James 2 Explained" },
  { videoId: "8H0fJa3OpeM", title: "Taming the Tongue – James 3" },
];

export default function BookOfJamesGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_james_tab", "Overview");
  const [openTest, setOpenTest] = useState<number>(-1);
  const [openWis, setOpenWis] = useState<number>(-1);
  const [openRP, setOpenRP] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_james_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>⚒️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Book of James</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — practical wisdom for Christian living: faith that works, a tongue that blesses, wisdom from above, and prayer that moves the world.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? GREEN : BORDER}`, background: activeTab === t ? `${GREEN}22` : CARD, color: activeTab === t ? GREEN : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of James</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Letter of James is the NT's wisdom epistle — its closest analogue is Proverbs, though it is saturated with the teaching of Jesus (especially the Sermon on the Mount). Attributed to James the brother of Jesus, it was written to Jewish Christians scattered throughout the Roman world, possibly as early as AD 40–50, making it one of the earliest NT writings.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Martin Luther famously called James "an epistle of straw" for its apparent tension with Paul's gospel of grace. But the tension is superficial: Paul and James address different opponents. Paul argues against those who think Torah-observance merits salvation; James argues against those who think verbal profession without transformed life constitutes living faith. Both agree: authentic faith is never alone — it produces love.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","James, brother of Jesus"],["Date","c. AD 45–49 (early)"],["Audience","Jewish Christians in diaspora"],["Genre","Wisdom epistle"],["Key Verse","James 2:17 (faith without works)"],["Theme","Practical faith in action"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Testing & Trials" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Testing, Trials & Temptation (Chapter 1)</h2>
            {TESTING_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openTest === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTest(openTest === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openTest === i ? "−" : "+"}</span>
                </button>
                {openTest === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Faith & Works" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Faith and Works (Chapter 2)</h2>
            <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              "What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them?" — James 2:14
            </blockquote>
            {[
              ["Faith vs. Verbal Profession","James's target is not Pauline faith but a defective counterfeit: verbal profession without transformation. 'If a brother or sister is naked and destitute of daily food, and one of you says to them, Depart in peace, be warmed and filled, but you do not give them the things which are needed for the body, what does it profit?' Faith that does not issue in concrete love is not saving faith — it is dead faith, like a corpse that still looks human but has no life."],
              ["Abraham's Faith Worked (2:21–24)","'Was not Abraham our father justified by works when he offered Isaac his son on the altar? Do you see that faith was working together with his works, and by works faith was made perfect (teleioo)?' The verb 'made perfect' means completed or brought to its telos — its proper end. Abraham's willingness to sacrifice Isaac was not a second justification separate from Genesis 15; it was the completion and demonstration of the faith already credited as righteousness. Faith perfected = faith active."],
              ["Rahab's Faith Acted","Rahab the prostitute was justified by works when she received the spies and sent them out another way. Her action completed her faith. James brackets the passage with two figures — Abraham the patriarch and Rahab the Canaanite prostitute — to demolish social hierarchy: both were justified by active, working faith, not birth or status."],
              ["Paul and James: No Contradiction","Paul: 'A person is justified by faith apart from works of the law' (Rom 3:28) — he argues against those who add Torah-keeping as a condition of justification. James: 'A person is justified by works and not by faith alone' — he argues against those who separate faith from its fruit. Luther's later formulation reconciles them: we are justified by faith alone, but the faith that justifies is never alone. It is always accompanied by love."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "The Tongue" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Taming the Tongue (Chapter 3:1–12)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {TONGUE_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Two Wisdoms" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Two Wisdoms & Worldliness (Chapters 3:13–4:10)</h2>
            {TWO_WISDOMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openWis === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenWis(openWis === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openWis === i ? "−" : "+"}</span>
                </button>
                {openWis === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${TEAL}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: TEAL, fontWeight: 800, marginBottom: ".75rem" }}>Seven Characteristics of Heavenly Wisdom (3:17)</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: ".6rem" }}>
                {["Pure","Peace-loving","Considerate","Submissive","Full of mercy","Impartial","Sincere"].map(trait => (
                  <div key={trait} style={{ background: `${TEAL}18`, borderRadius: 8, padding: ".5rem .75rem", color: TEAL, fontSize: ".9rem", fontWeight: 700, textAlign: "center" }}>{trait}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Prayer" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Prayer of Faith (Chapter 5)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {PRAYER_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Rich & Poor" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Wealth, Poverty & Social Justice</h2>
            {RICH_POOR_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openRP === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenRP(openRP === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openRP === i ? "−" : "+"}</span>
                </button>
                {openRP === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: ".75rem" }}>James on Ethics: The Royal Law</div>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>'If you really keep the royal law found in Scripture, "Love your neighbor as yourself," you are doing right. But if you show favoritism, you sin and are convicted by the law as lawbreakers.' (2:8–9) James grounds all ethics in the single command of neighbor-love that fulfills the law — anticipating Paul (Rom 13:10) and Jesus (Matt 22:39). Favoritism is a violation of the royal law because it measures the neighbor by social worth rather than image-bearing dignity.</p>
            </div>
          </div>
        )}

        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of James. Your notes are saved locally.</p>
            {[
              "Where in your life does your speech most reveal the gap between faith and practice?",
              "How does the 'faith and works' tension in James speak to a specific area where your belief is not yet producing fruit?",
              "What would it look like to pray with the boldness and persistence that James describes through Elijah?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
