"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type TTHEntry = { id: string; date: string; question: string; answer: string; application: string };

export default function TithingGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TTHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_tithing_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jAnswer, setJAnswer] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_tithing_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, answer: jAnswer, application: jApplication }, ...prev]);
    setJQuestion(""); setJAnswer(""); setJApplication("");
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
          Tithing: A Christian Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The tithe &mdash; ten percent &mdash; is one of the most practically contested topics in Christian personal finance. Is it binding on New Testament believers? Where does it go? What about giving when in debt? This guide works through the history, the exegesis, and the practical questions with honesty and pastoral care.
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
                title: "The History of the Tithe &mdash; Before the Law",
                body: "The tithe appears in Scripture before the Mosaic Law. Abraham gives a tenth to Melchizedek, king of Salem and priest of God Most High (Genesis 14:20), after the rescue of Lot &mdash; a voluntary act with no legal compulsion. Jacob vows a tenth at Bethel (Genesis 28:22): of all that you give me I will give a full tenth to you. These pre-law examples are significant: they suggest that the principle of returning a portion to God precedes the Sinai covenant and is not merely a Mosaic regulation. The author of Hebrews uses Melchizedek&rsquo;s receipt of Abraham&rsquo;s tithe to make a Christological argument (Hebrews 7), connecting the tithe to the priestly order of Christ rather than to the Levitical priesthood of the law.",
              },
              {
                title: "The Tithe in Torah &mdash; Three Tithes or One?",
                body: "The Mosaic Law actually describes multiple tithes, not one. Leviticus 27:30 establishes a tithe of all produce for the Levites. Numbers 18:26 describes the Levites themselves giving a tithe of the tithe to the priests. Deuteronomy 14:22-26 describes a second tithe to be consumed in a communal meal of rejoicing before the Lord at the central sanctuary. Deuteronomy 14:28-29 describes a third-year tithe given directly to the poor, the widow, the orphan, and the foreigner. Some scholars estimate the total Israelite giving obligation under Torah at 20-23% of income. The common Christian practice of a single 10% tithe represents a simplification of this system &mdash; a simplification that may understate rather than overstate what the law required.",
              },
              {
                title: "Malachi 3:10 &mdash; Storehouse Tithing",
                body: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it. Malachi 3 is the classic text for storehouse tithing and the only place in Scripture where God explicitly invites testing of his faithfulness. The storehouse was the physical temple storehouse where food tithes were deposited and from which the Levites, priests, widows, and poor were fed. In the New Testament context, many identify the local church as the functional equivalent of the storehouse &mdash; the community where ministry is resourced and the poor are cared for.",
              },
              {
                title: "Is the Tithe Binding for Christians? The New Testament Evidence",
                body: "Jesus mentions tithing only twice. Matthew 23:23 (you tithe mint, dill and cumin, but neglect the weightier matters of the law &mdash; justice, mercy and faithfulness) neither abolishes tithing nor makes it the primary measure of faithfulness; it criticizes the use of precise tithing as a substitute for moral seriousness. Luke 18:12 appears in the mouth of the self-righteous Pharisee. Paul never commands the tithe; his standard in 2 Corinthians 8-9 is proportional, cheerful, sacrificial giving without specifying a percentage. The New Testament trajectory moves not downward from 10% to less but upward: the early church&rsquo;s radical sharing (Acts 2:44-45, 4:34-35) far exceeded any tithing system. The question &ldquo;Is the tithe binding?&rdquo; may be the wrong question; a better question is: what does generous, proportional, sacrificial giving look like for me?",
              },
              {
                title: "Firstfruits &mdash; The Posture Behind the Percentage",
                body: "The biblical concept of firstfruits (bikkurim) is at least as important as the percentage itself. Honor the Lord with your wealth, with the firstfruits of all your crops (Proverbs 3:9). Firstfruits means giving before allocating to other uses &mdash; the first portion off the top, not the last remnant if any remains. This represents a posture of trust: I acknowledge that everything belongs to God by giving the first portion before I know how the rest will work out. The practical implication is that giving should come out of gross income before taxes, not net after taxes &mdash; though many Christians give on net income, giving on gross is the stricter firstfruits application. More important than the exact calculation is the habit of giving first.",
              },
              {
                title: "Tithing When in Debt",
                body: "Should a person with significant consumer debt (credit cards, student loans) tithe before paying off debt? This question has divided thoughtful Christians. The &ldquo;tithe first&rdquo; argument: The biblical pattern of firstfruits means giving to God before allocating to any other obligation, including debt; many testimonies support the spiritual and even practical wisdom of this approach. The &ldquo;debt first&rdquo; argument: Proverbs treats debt seriously as a form of bondage; the wise use of resources to eliminate high-interest debt may itself be good stewardship; giving to God does not require courting financial disaster. A pastoral synthesis: give something proportionally even while in debt (establishing the habit and posture); aggressively attack debt; increase giving as debt is eliminated. Mortgage debt differs from consumer debt; the tithe debate is most acute with high-interest consumer debt.",
              },
              {
                title: "Testimonies of Blessing Through Tithing",
                body: "The tradition of tithing testimony is vast &mdash; stories of financial provision that followed the decision to give the first 10%, of unexpected income or expense reductions that appeared after beginning to tithe, of the way the remaining 90% seemed to accomplish more than the original 100% had. These testimonies do not constitute a prosperity-gospel promise and must be handled carefully: God does not guarantee financial blessing as the reward for tithing, and many faithful tithers have experienced financial hardship. The deeper testimony in Scripture is not monetary but spiritual: the freedom from fear about money, the loosening of Mammon&rsquo;s grip, the reorientation of the heart toward God as provider. That transformation is available to every tither regardless of their financial outcome.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
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
              "Calculate your actual giving percentage for the past year: total giving divided by total income. Most Christians who have never done this calculation are surprised to find the number lower than they expected. This is not for shame but for clarity &mdash; you cannot move toward a goal you cannot see.",
              "If you are not yet tithing, begin with a &ldquo;journey to the tithe&rdquo; &mdash; increase your giving by 1% per year until you reach 10%. This approach honors the direction of faithful stewardship even if the destination is not yet reached.",
              "Set up your giving as the first automatic transaction of your pay cycle. Make it before you see the money rather than at the end when you spend from what remains. This is the practical implementation of firstfruits giving.",
              "Decide now what percentage of any unexpected income &mdash; a bonus, tax refund, inheritance, or gift &mdash; you will give away before spending any of it. Having this decision made in advance removes the negotiation that always favors keeping.",
              "If you are in significant consumer debt, talk with a Christian financial counselor about a realistic giving-and-debt-elimination plan. Attempting to tithe on 100% of income while carrying high-interest debt may not be sustainable; a thoughtful plan that gives something and eliminates debt aggressively is often wiser.",
              "Examine whether all of your giving goes to the local church or whether some goes to parachurch ministries. Ask your church what percentage of its budget goes to external ministry and mercy work &mdash; and let that information shape how you direct your giving.",
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
                name: "R.T. Kendall",
                work: "Tithing",
                quote: "I cannot prove from the New Testament that the tithe is legally binding. But I can prove that those who tithe receive a blessing that those who do not tithe simply do not experience. I have been tithing for decades and I will not stop.",
                bio: "R.T. Kendall served as Senior Minister of Westminster Chapel in London for twenty-five years. His book Tithing is a careful, honest treatment of the biblical and theological questions around the tithe, written by a scholar who defends the practice not on legalistic grounds but on the basis of spiritual experience and biblical wisdom. Kendall acknowledges the exegetical complexity while commending the tithe as the appropriate Christian minimum for giving.",
              },
              {
                name: "David Platt",
                work: "Radical",
                quote: "We have taken the Sermon on the Mount and the radical call of Jesus to give everything and turned it into a comfortable suggestion to give 10%. The tithe is not the finish line; it is the starting block.",
                bio: "David Platt is a pastor and author whose book Radical challenged American evangelicalism&rsquo;s comfort with consumer Christianity. His argument on giving is that the New Testament standard is not the tithe but radical generosity that holds all possessions loosely. For Platt, the tithe is a floor, not a ceiling, and any Christian who treats 10% as the maximum obligation of the gospel has not yet encountered the real cost of discipleship.",
              },
              {
                name: "Craig Blomberg",
                work: "Neither Poverty Nor Riches",
                quote: "The New Testament nowhere explicitly commands the tithe, but the spirit of giving in the New Testament regularly exceeds it. Christians who argue that the tithe is merely an Old Testament requirement often end up giving far less than 10%. The tithe functions well as a reasonable minimum even if it is not technically binding.",
                bio: "Craig Blomberg is a New Testament scholar and Distinguished Professor at Denver Seminary whose Neither Poverty Nor Riches is a thorough biblical-theological treatment of wealth and possessions from Genesis through Revelation. His exegetical work on the New Testament&rsquo;s teaching on giving is careful and honest about what the text does and does not say, making it one of the most reliable academic treatments of the subject.",
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
              { ref: "Malachi 3:10", text: "&ldquo;Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,&rdquo; says the Lord Almighty, &ldquo;and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.&rdquo;" },
              { ref: "Genesis 14:19-20", text: "And he blessed Abram and said, &ldquo;Blessed be Abram by God Most High, Creator of heaven and earth. And praise be to God Most High, who delivered your enemies into your hand.&rdquo; Then Abram gave him a tenth of everything." },
              { ref: "Proverbs 3:9-10", text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine." },
              { ref: "Matthew 23:23", text: "&ldquo;Woe to you, teachers of the law and Pharisees, you hypocrites! You give a tenth of your spices &mdash; mint, dill and cumin. But you have neglected the more important matters of the law &mdash; justice, mercy and faithfulness. You should have practiced the latter, without neglecting the former.&rdquo;" },
              { ref: "2 Corinthians 8:7", text: "But since you excel in everything &mdash; in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you &mdash; see that you also excel in this grace of giving." },
              { ref: "Deuteronomy 14:22-23", text: "Be sure to set aside a tenth of all that your fields produce each year. Eat the tithe of your grain, new wine and olive oil, and the firstborn of your herds and flocks in the presence of the Lord your God at the place he will choose as a dwelling for his Name, so that you may learn to revere the Lord your God always." },
              { ref: "Hebrews 7:4-6", text: "Just think how great he was: Even the patriarch Abraham gave him a tenth of the plunder! Now the law requires the descendants of Levi who become priests to collect a tenth from the people &mdash; that is, from their fellow Israelites &mdash; even though they also are descended from Abraham. This man, however, did not trace his descent from Levi, yet he collected a tenth from Abraham." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Tithing Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Question about tithing you are wrestling with</label>
                  <textarea
                    value={jQuestion}
                    onChange={e => setJQuestion(e.target.value)}
                    placeholder="What question, hesitation, or confusion are you bringing before God?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What Scripture, teaching, or reflection has helped you think it through?</label>
                  <textarea
                    value={jAnswer}
                    onChange={e => setJAnswer(e.target.value)}
                    placeholder="Write the passage, quote, or insight that has given clarity..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How will you apply this to your giving this month?</label>
                  <textarea
                    value={jApplication}
                    onChange={e => setJApplication(e.target.value)}
                    placeholder="A specific, dated commitment to a giving percentage or action..."
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
                {e.question && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Question</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.question}</p></div>}
                {e.answer && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Reflection</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.answer}</p></div>}
                {e.application && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Application</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.application}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="GWiEGpqWmTg" title="Should Christians Tithe? A Biblical and Theological Answer" />
            <VideoEmbed videoId="dM4fWZWjHXk" title="Malachi 3:10 &mdash; Storehouse Tithing Explained" />
            <VideoEmbed videoId="MOCbgxW-P3U" title="Is the Tithe Binding on New Testament Christians?" />
            <VideoEmbed videoId="93GJXEJZo3U" title="Firstfruits Giving &mdash; Why You Give Before You Budget" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
