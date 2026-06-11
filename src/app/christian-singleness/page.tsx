"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SNEntry = { id: string; date: string; struggle: string; gift: string; calling: string };

const theology = [
  { title: "The Church Has Lied to Single People — the Marriage Idol", verse: "1 Cor 7:32-35", text: "The evangelical church often communicates implicitly — and sometimes explicitly — that adulthood means marriage and family; singles are treated as incomplete, in a waiting room, or as problems to be solved. This is not merely culturally awkward — it is theologically wrong. The New Testament presents singleness as at least equal to marriage, and in some contexts preferable (1 Cor 7:32-35). The family-idolizing church has betrayed its single members." },
  { title: "Jesus and Paul Were Single — What That Means for the Body of Christ", verse: "1 Cor 7:7-8", text: "Jesus was single. Paul was single. Both lived full, complete human lives. Paul in 1 Cor 7:7-8 calls singleness a gift (charisma) given to some for the sake of undistracted devotion to God. The idea that singles are spiritually or emotionally deficient until married is directly contradicted by the example of the two most important figures in the New Testament." },
  { title: "The Gift of Singleness — Not a Consolation Prize", verse: "1 Cor 7:32-35", text: "Paul presents singleness not as a temporary inconvenience but as a vocation that enables a particular kind of availability and focus. What this looks like practically: mobility for mission, time and energy for community investment, freedom from the particular anxieties of marriage and family. The unmarried person is concerned about the things of the Lord — this is not a lesser calling but a distinct one." },
  { title: "Loneliness Is Real — and the Church's Failure to Address It", verse: "Ps 68:6", text: "The pastoral failure: the church's answer to single loneliness has often been either marriage (solve the problem) or platitudes (God is enough). Neither addresses the genuine human need for companionship. What genuine community for singles looks like: intergenerational friendship, being woven into families not as charity cases but as full members, having a place at the table. The church as the family of God must be that family for single people." },
  { title: "Celibacy as Eschatological Sign — the Radical Witness of Chosen Singleness", verse: "Matt 19:12", text: "The person who chooses celibacy for the sake of kingdom service is giving the world a sign of the age to come — the age in which there is no marriage or giving in marriage (Matt 22:30). Voluntary celibacy is a prophetic act declaring that the kingdom of God is the deepest reality, not the nuclear family. Some have made themselves eunuchs for the sake of the kingdom, and Jesus commends those who are able to receive this." },
];

const voices = [
  { name: "Sam Allberry", role: "7 Myths About Singleness", quote: "Singleness is not a half-life. It is not a waiting room. It is not a consolation prize for those who could not find a spouse. It is a complete life — a life that Jesus himself lived, and that the church has consistently failed to honor as such.", bio: "Sam Allberry is one of the clearest contemporary voices on singleness from within evangelical Christianity. His work argues that the church has absorbed cultural assumptions about the necessity of romantic partnership and failed its single members — not merely practically but theologically." },
  { name: "Barry Danylak", role: "Redeeming Singleness", quote: "The Old Testament trajectory from barrenness as shame to the New Testament inversion is decisive: what once signified spiritual exclusion is now, through Christ, no longer spiritually disqualifying. The childless person in Christ is an heir of the covenant, fully included in the family of God.", bio: "Danylak's Redeeming Singleness traces the biblical-theological development from the Old Testament, where childlessness carried social and spiritual stigma, through to the New Testament revaluation in which union with Christ — not biological descent — determines covenant standing." },
  { name: "Wesley Hill", role: "Spiritual Friendship", quote: "Deep, committed spiritual friendship can provide the belonging and intimacy that human beings need, and that God designed us for — outside of marriage. The church's failure to cultivate and honor such friendships has left single people without the relational structures the tradition once took for granted.", bio: "Wesley Hill writes from the intersection of celibacy, friendship, and the church's historical tradition of spiritual friendship. His argument is that the church once had robust structures for deep non-romantic friendship that modernity has largely dismantled, and that recovering them is essential for the flourishing of single Christians." },
];

const practices = [
  { title: "Name Your Actual Community", text: "Identifying and naming who your people actually are — not the people you wish were your people — is the first step toward building genuine belonging. Idealized community prevents investment in real community." },
  { title: "Commit to a Local Church as Long-Term Family", text: "Resisting the rootlessness that leaves singles without community means choosing a local church and staying long enough to be known. Transience is one of the primary structural obstacles to single flourishing." },
  { title: "Invest Your Availability into Mission", text: "The particular freedom of singleness is availability — for mission, for ministry, for the needs of others. Investing that availability intentionally is one way of living into the vocation rather than merely enduring it." },
  { title: "Honest Prayer About Loneliness", text: "Bringing loneliness to God without first resolving it — without the fig leaf of a solution or a silver lining — is a form of faith. God can receive lament. The Psalms are full of it." },
  { title: "Cultivate a Theology of Your Own Body and Life", text: "Developing a theological account of your own body and life as complete and good in this season — not incomplete, not waiting to be fixed — is spiritual work that the church has often failed to equip single people for." },
];

const scriptures = [
  { verse: "1 Cor 7:7-8", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do." },
  { verse: "1 Cor 7:32-35", text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife." },
  { verse: "Matt 19:12", text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." },
  { verse: "Ps 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land." },
  { verse: "Isa 56:4-5", text: "For this is what the Lord says: To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters." },
  { verse: "Matt 22:30", text: "At the resurrection people will neither marry nor be given in marriage; they will be like the angels in heaven." },
];

const videos = [
  { id: "YqMWOHkEQsI", title: "The Theology of Christian Singleness" },
  { id: "c_HaxJ0DGVM", title: "Sam Allberry on Singleness and the Church" },
  { id: "X0ZHI6zJKDQ", title: "The Gift of Singleness" },
  { id: "fUjgp9sKbO4", title: "Wesley Hill on Spiritual Friendship" },
];

export default function ChristianSinglenessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SNEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_singleness_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jGift, setJGift] = useState("");
  const [jCalling, setJCalling] = useState("");

  useEffect(() => { localStorage.setItem("vine_singleness_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, gift: jGift, calling: jCalling }, ...prev]);
    setJStruggle(""); setJGift(""); setJCalling("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Identity &amp; Relationships</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Singleness</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Singleness as a calling — the theology and dignity of Christian singleness, the church&apos;s failures, and the practices of a full life outside of marriage.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ROSE : BORDER}`, background: tab === t.id ? ROSE + "22" : "transparent", color: tab === t.id ? ROSE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ROSE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ROSE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ROSE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Singleness</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your experience of singleness honestly before God.</p>
            {[
              { label: "Struggle — a struggle you experience as a single person", val: jStruggle, set: setJStruggle },
              { label: "Gift — a gift or freedom your singleness has given you", val: jGift, set: setJGift },
              { label: "Calling — a specific calling you sense for this season of life", val: jCalling, set: setJCalling },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ROSE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ROSE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Struggle:</span> {e.struggle}</p>
                      {e.gift && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Gift:</span> {e.gift}</p>}
                      {e.calling && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ROSE, fontWeight: 600 }}>Calling:</span> {e.calling}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ROSE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
