"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Complexity of Remarriage in Scripture", verse: "Matthew 19:9", text: "I tell you that anyone who divorces his wife, except for sexual immorality, and marries another woman commits adultery. The New Testament texts on divorce and remarriage (Matthew 19, Mark 10, 1 Corinthians 7) are among the most contested in Christian ethics, and the church has held a wide range of positions throughout its history. Some traditions prohibit remarriage entirely; others allow it in cases of adultery or abandonment; still others permit it more broadly. This page does not adjudicate the theological debate — it acknowledges it exists, takes it seriously, and ministers to people who, after study and prayer and counsel, have made or are making a decision to remarry." },
  { title: "God Redeems What Has Been Broken", verse: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair. The prophetic promise of God giving beauty for ashes applies to broken marriages and the lives that come after them. A remarriage is not a celebration of divorce — it is a courageous choice to love again after having loved and lost. The God who redeems is not the God who shuts the future to those who have experienced failure or loss." },
  { title: "Grace Covers More Than We Think', verse: 'Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus. Many people entering a remarriage carry enormous guilt and shame — either from a divorce they initiated, from choices made before their faith was serious, or from years of church messaging that communicated they are second-class Christians. The no-condemnation of Romans 8 is not an excuse for careless choices about marriage. It is an anchor for the person who has genuinely faced what happened in a previous marriage, has done the work of honest repentance and healing, and is now building something new." },
  { title: "The Marriage Covenant Is Serious — Remarriage Is Serious", verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you flows from it. Remarriage deserves more preparation than a first marriage, not less. Most second marriages that fail do so because unaddressed wounds from the first marriage are imported into the second. The person entering a remarriage owes it to their future spouse and to any children involved to have done serious work: grief, therapy, honest assessment of what went wrong, genuine healing. The covenant of a new marriage is entered with full eyes, not the half-blind optimism of the young." },
  { title: "The Children Are Real People in This Decision", verse: "Matthew 18:5", text: "And whoever welcomes one such child in my name welcomes me. If children are involved — on either side — they are not accessories to the remarriage decision. They are people with attachments, losses, and loyalties who will be significantly affected by this new family structure. Entering a remarriage without genuine, sustained attention to the children's adjustment, their relationship with both biological parents, and the stepfamily dynamics that will emerge is not love. It is negligence dressed as romance." },
];

const voices = [
  { id: "rd", name: "Ron Deal", role: "Author, The Smart Stepfamily; FamilyLife Blended", quote: "The most important thing I tell couples preparing for a remarriage with children is this: slow down the wedding and speed up the counseling. Most couples are in a hurry to formalize the relationship. What they need more urgently is the preparation that gives the marriage a chance to survive.", bio: "Deal's work on blended families and remarriage is the foremost Christian resource in this area. His preparation resources for remarriage — including the Preparing to Blend program and the Smart Stepfamily series — are practical, research-grounded, and theologically serious." },
  { id: "jp", name: "Jim Newheiser", role: "Author, Marriage, Divorce, and Remarriage", quote: "The theological questions around remarriage are genuinely difficult, and Christians who study them carefully do not all arrive at the same place. What matters most is that the person entering a remarriage has done that careful study, sought wise counsel, faced their own failures honestly, and is entering the new covenant with genuine commitment.", bio: "Newheiser's book Marriage, Divorce, and Remarriage provides one of the most thorough biblical surveys of the contested texts, helping readers understand the range of Christian positions and the exegetical arguments behind each. It is written for pastors and serious lay readers." },
  { id: "gm", name: "Gary Chapman", role: "Author, The Five Love Languages", quote: "Second marriages begin with higher levels of stress than first marriages — they carry history, children, financial entanglements, and the wounds of previous failure. But they also begin with wisdom that first marriages usually lack. People who have been married before and have done the honest work of understanding what went wrong are often better partners the second time.", bio: "Chapman's work on love languages and marriage communication has specific applications in the remarriage context — particularly in blended families where adults and children may have very different primary love languages and where intentional investment in specific relationships is essential." },
];

const practices = [
  { icon: "🔍", title: "Do the Grief and Healing Work Before You Remarry", text: "The most common predictor of remarriage failure is unprocessed grief and unexamined wounds from the previous marriage. Most people think they are ready to remarry long before they actually are — love and attraction in a new relationship feel like healing when they are often numbing. Work with a therapist to genuinely understand what happened in your previous marriage, what your contribution to its failure was, and what you have learned. This work protects your future spouse and future marriage." },
  { icon: "👨‍👩‍👧", title: "Approach This as a Family Decision, Not Just a Couple Decision", text: "If children are involved, the remarriage decision is a family decision. This does not mean children have veto power — they don't. But their experience, their pace of relationship-building with a potential stepparent, and the grief they are carrying deserve genuine weight. Rushing remarriage over the protests of children who are not ready is a choice with long-term consequences. Ron Deal's resources (familylifeblended.com) provide specific guidance on this process." },
  { icon: "📚", title: "Get Preparation That Specifically Addresses Remarriage", text: "Standard premarital counseling is designed for first marriages. If you are remarrying — especially with children — you need preparation that specifically addresses blended family dynamics, loyalty conflicts, co-parenting with an ex-spouse, and the different developmental timeline of stepfamily bonding. FamilyLife Blended's Preparing to Blend program and SmartStepfamilies resources are specifically designed for this." },
  { icon: "⛪", title: "Find a Church That Will Accompany Rather Than Judge", text: "Many people entering a remarriage have painful histories with churches that communicated shame about their divorce. Not all churches respond this way. Look for a pastor or counselor who will engage the theological questions seriously, accompany the preparation process honestly, and neither rubber-stamp the decision nor condemn it without engagement. This person exists. Finding them is worth the search." },
];

const scriptures = [
  { verse: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
  { verse: "1 Corinthians 7:15", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace." },
];

type RMEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function RemarriagePage() {
  const [tab, setTab] = useState("theology");
  const [rmJournal, setRmJournal] = useState<RMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_remarriagej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_remarriagej_entries", JSON.stringify(rmJournal)); } catch {}
  }, [rmJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setRmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setRmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Marriage & Family</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Remarriage</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Loving again after loss — the theological questions, the preparation required, and the grace available.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Remarriage Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What am I carrying from my previous marriage that needs honest attention?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What does grace look like for me in this season?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One step toward wise, prepared love</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {rmJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {rmJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Carrying: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Grace: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — Gottman", channel: "The Gottman Institute", description: "Gottman on the four patterns that most predict marriage failure — essential viewing for those entering remarriage, who bring previous relationship patterns and may repeat them without awareness." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Stop", channel: "Leslie Vernick", description: "Vernick on the critical distinction between a difficult marriage and a destructive one — relevant for anyone who has left a first marriage and wants to understand what healthy marriage looks like." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Difficult", channel: "Tim Keller", description: "Keller on the theology and cost of forgiveness — central to entering remarriage with genuine freedom from the wounds of the first marriage, rather than carrying them into the second." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Redemption Through Loss", channel: "Tim Keller", description: "An exposition of Joseph's narrative of loss, suffering, and eventual restoration — speaking to the theology of redemption that makes remarriage after loss or failure possible." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
