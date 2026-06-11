"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_abandoned_spouse_divorce_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function AbandonedSpouseDivorce() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Marriage & Divorce</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>When Your Spouse Leaves — Abandoned Spouse, Unwanted Divorce, and Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>For those who did not choose this — the betrayal, the shame, the divorce you never wanted, and the God who stays when your spouse did not.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; National DV Hotline: <strong>1-800-799-7233</strong> &nbsp;|&nbsp; DivorceCare: divorcecare.org &nbsp;|&nbsp; Legal Aid: lawhelp.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>You Did Not Choose This</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When a spouse leaves, the abandoned partner often bears the burden of the divorce in Christian community — questioned about what they did wrong, counseled to try harder, sometimes treated as if their divorce is a moral failure even though they did everything in their power to save the marriage. This is a profound pastoral injustice. You cannot hold a marriage together alone. When a spouse leaves — through infidelity, abandonment, or abuse — the partner who stayed bears no guilt for the divorce that follows. The prophet Isaiah records God describing himself as being in exactly this position with Israel: like a husband abandoned by an unfaithful wife. God knows what it is to be left by the one who made promises.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Particular Shame of Unwanted Divorce in Church</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian communities have historically treated divorced people as second-class members — ineligible for leadership, assumed to have failed morally, barred from remarriage, quietly excluded from couples-centered community. For someone who was abandoned by a spouse, this treatment adds profound injustice to injury. The church that treats abandoned spouses as if they chose their divorce has misread both Scripture and basic human compassion. Divorce is indeed a tragedy — God says as much in Malachi 2. But the tragedy belongs to the one who broke faith, not the one left behind.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>God as the Abandoned Spouse — Isaiah 54</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Isaiah 54 is addressed to someone who has been abandoned — the desolate woman, the one who has been left. God speaks to this person not with condemnation but with extraordinary tenderness and promise: Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth and remember no more the reproach of your widowhood (Isa 54:4). For a brief moment I abandoned you, but with deep compassion I will bring you back (v. 7). The one who speaks these words is the same God who knows what abandonment costs — who understands the weight of broken promises from the inside.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Betrayal Trauma and the Road to Healing</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>When a spouse leaves through infidelity or abandonment, the damage is not merely relational — it is neurobiological. The person who was supposed to be the safest person in your world became the source of the threat. This produces betrayal trauma: a form of complex trauma with symptoms similar to PTSD that includes hypervigilance, intrusive thoughts, inability to trust, and a profound disorientation of the world. This is not an overreaction. It is the appropriate response of a nervous system to a genuine threat from an unexpected source. It requires trauma-informed care, not simply grief counseling or spiritual encouragement to forgive.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Life After — Identity and the Permission to Rebuild</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Being left by a spouse dismantles an entire life structure — financial, relational, social, vocational, parental. Rebuilding takes years, not months. The Christian theological resources for this include the restoration narratives of Scripture (Ruth rebuilding after Naomi; the restored city in Isaiah 60; the resurrection that transforms death into life) and the community of faith that walks alongside. You are allowed to rebuild. You are allowed to be happy again. You are allowed to trust again. You are allowed to love again. None of these are betrayals of what was lost. They are the continuation of the life you were given.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Leslie Vernick", title: "The Emotionally Destructive Marriage", quote: "Staying in a destructive marriage is not the same as honoring your vows. Your vows required faithfulness from both of you. When your spouse abandoned those vows, you were not the one who broke the covenant. You were the one who was left holding what they discarded." },
              { name: "Shirley Glass", title: "Not Just Friends: Rebuilding Trust and Recovering Your Sanity After Infidelity", quote: "Betrayal trauma is real trauma. The person who finds out their spouse has been unfaithful is not being dramatic. They have experienced a fundamental collapse of the safety of their most primary relationship. Recovery requires treating it as such." },
              { name: "Nicholas Wolterstorff", title: "Lament for a Son", quote: "We must acknowledge what grief is. We must not trivialize it, not even in the name of hope. The sorrow is real. It must be entered, not bypassed." },
              { name: "Nadia Bolz-Weber", title: "Accidental Saints", quote: "God can work in the rubble. The end of something is never the end of everything. What feels like death is often what precedes the only kind of life that is actually new." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "DivorceCare (divorcecare.org)", body: "DivorceCare is a faith-based support group program available in thousands of churches. It is specifically designed for people going through or recovering from divorce and provides peer community, video content, and structured support. divorcecare.org has a meeting locator. The program acknowledges the diversity of divorce experiences, including unwanted divorce." },
              { title: "Therapy for Betrayal Trauma", body: "If your divorce involved infidelity, APSATS-certified therapists (apsats.org) specialize specifically in partner betrayal trauma. For divorce involving abuse, therapists trained in trauma and domestic violence are most appropriate. For general grief of unwanted divorce, therapy focused on grief, identity reconstruction, and trust repair is appropriate. Open Path Collective (openpathcollective.org) for reduced-cost care." },
              { title: "Legal Advocacy — Know Your Rights", body: "Legal Aid (lawhelp.org) provides free or reduced-cost legal assistance for people who cannot afford an attorney. Many states have self-help centers at courthouses. Your financial rights in divorce depend on state law and are more protective than many people know. Consulting with an attorney early — before agreeing to anything — is important even if you expect an amicable process." },
              { title: "Financial Triage", body: "If a spouse has left unexpectedly, immediate financial steps include: opening individual accounts in your own name, documenting all marital assets, contacting Social Security about your options, understanding your retirement accounts and what happens to them in divorce, and reviewing insurance. The National Endowment for Financial Education (nefe.org) has divorce financial planning resources." },
              { title: "Support Network — Do Not Disappear", body: "Shame drives isolation after unwanted divorce, particularly in Christian communities. Resist it. Find the people who will stay — the ones who do not require an explanation, who are for you without condition. If your church community has treated you as the responsible party for a divorce you did not choose, that is a pastoral failure you may need to grieve. You are not required to stay where you are not seen." },
              { title: "Give Yourself Time Before Major Decisions", body: "The immediate aftermath of abandonment is the worst time to make major decisions. Avoid major financial commitments, moves, or relationship decisions for at least a year if possible. The grief and disorientation of the first 12 months is not a reliable guide to what you want or need longer term. Most therapists and pastoral counselors recommend a significant waiting period before major life changes." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Isaiah 54:4–5", text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth and remember no more the reproach of your widowhood. For your Maker is your husband — the Lord Almighty is his name." },
              { ref: "Isaiah 54:7", text: "For a brief moment I abandoned you, but with deep compassion I will bring you back." },
              { ref: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
              { ref: "Ruth 1:20–21", text: "Don't call me Naomi, she told them. Call me Mara, because the Almighty has made my life very bitter. I went away full, but the Lord has brought me back empty." },
              { ref: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
              { ref: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What do you need to say that you cannot say in public? What has this taken from you? What do you want God to know about what this feels like?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Isaiah 54 — The God Who Speaks to the Abandoned Spouse" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Betrayal Trauma — Why Infidelity Wounds So Deeply" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Unwanted Divorce and Christian Faith — You Did Not Choose This" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Rebuilding After Loss — Faith and Life After Divorce" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
