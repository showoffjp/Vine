"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_widowhood_grief_entries";
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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function WidowhoodGrief() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Grief & Loss</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Widowhood, Spousal Loss, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>For those whose spouse has died — the grief that restructures everything, and the faith that holds when nothing else does.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Grief Share: griefshare.org &nbsp;|&nbsp; Soaring Spirits (widowed community): soaringspirits.org &nbsp;|&nbsp; AARP Grief: aarp.org/griefandloss
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The God of Widows — Scripture&apos;s Particular Attention</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The Bible has a striking number of explicit references to widows and to God&apos;s particular attention to them. Psalm 68:5 names God as a father to the fatherless and a defender of widows. Deuteronomy 10:18 lists defending the cause of the widow among the most fundamental characteristics of who God is. James 1:27 defines pure religion as caring for widows and orphans. Jesus noticed the widow who gave two small coins and called her act the greatest offering in the temple (Luke 21:1–4). He stopped a funeral procession to raise the son of a widow at Nain (Luke 7:11–15). The sustained attention the Bible pays to widows is not accidental — it reflects a God who is particularly attuned to those who have lost their primary human companion.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>C.S. Lewis and the Honest Account of Grief</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>C.S. Lewis, after the death of his wife Joy, wrote A Grief Observed — one of the most honest accounts of spousal grief in Christian literature. He described grief as feeling like fear. He described God as feeling like a door slammed shut and bolted on the other side. He asked whether God was there at all. He eventually wrote his way through to a different place — but not by bypassing the anguish. The theological significance of his account is that it was published: the church needs to know that this is what grief actually looks like, that the God who is there does not become more visible by being less honestly sought. Your grief does not have to be performed as trusting to be genuine faith.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Rebuilding an Identity Defined by Two</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Long marriage creates an intertwined identity. The surviving spouse has lost not just a person but a version of themselves — the self that was husband or wife to that specific person. Rebuilding identity after spousal loss takes longer than society allows and longer than the surviving spouse often expects. The first year is often described as surviving; the second year is when the permanence becomes real and grief often intensifies rather than diminishes. Psalm 23&apos;s promise that God restores the soul is not a promise of quick recovery — the metaphor is of careful, patient shepherding through a valley, not of teleportation past it.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Continuing Bonds — The Ongoing Relationship</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Modern grief theory has moved away from requiring the bereaved to sever emotional bonds with the deceased as part of healthy grieving. Current research suggests that maintaining an ongoing internal relationship with the person who died — talking to them in prayer, keeping certain objects or practices, feeling their presence — can be part of healthy adaptation. Many Christian widows and widowers describe a continuing sense of their spouse&apos;s presence. This experience is not theologically problematic when held within the context of faith in resurrection and the communion of saints.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Remarriage and the Church&apos;s Mixed Messages</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Paul writes explicitly in 1 Corinthians 7 and Romans 7 that a widow or widower is free to remarry — that marriage vows end at death, not afterward. Many widowed people nonetheless carry guilt about considering remarriage, or receive mixed messages from church communities, or feel that remarrying somehow dishonors the deceased spouse. The grief research is clear that remarriage, when it happens after genuine grief work and at a pace determined by the bereaved, is not a betrayal. Your love for the person who died is not diminished by the love that might develop for someone new. Love is not a finite resource.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "C.S. Lewis", title: "A Grief Observed", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing." },
              { name: "Nicholas Wolterstorff", title: "Lament for a Son", quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see. What I do not know is why I see what I see, or whether what I see is real." },
              { name: "Joan Didion", title: "The Year of Magical Thinking", quote: "Grief turns out to be a place none of us know until we reach it. We anticipate that someone close to us could die, but we do not look beyond the few days or weeks that immediately follow such an imagined death." },
              { name: "Eugene Peterson", title: "A Long Obedience in the Same Direction", quote: "Death is not the enemy of the one who has died in Christ. It is the enemy of the one left behind. The bereaved are the ones who need the resurrection — not as a fact to believe but as a reality to inhabit." },
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
              { title: "Grief Share (griefshare.org)", body: "Grief Share is the most widely available grief support group program in Christian contexts — present in thousands of churches. Their video-based curriculum addresses spousal loss specifically and provides peer community with others walking the same road. griefshare.org has a meeting locator. Many people attend multiple cycles as grief moves through different phases." },
              { title: "Soaring Spirits (soaringspirits.org)", body: "A community specifically for widowed people. They host Camp Widow events where widowed people gather for three days of peer support and community. Online resources and forums are available year-round. The community of people who understand from the inside is irreplaceable." },
              { title: "Therapy — Including Complicated Grief Treatment", body: "When grief is prolonged and severely impairing, Complicated Grief Treatment (CGT) — developed at Columbia University — has the strongest evidence base. Many grief therapists are also trained in general bereavement support. A therapist specifically trained in grief rather than a general practitioner is most helpful for spousal loss." },
              { title: "The First Year — Practical Survival", body: "The first year of widowhood involves enormous practical challenges arriving simultaneously with grief: financial transitions, legal matters, household management that a spouse handled. The AARP (aarp.org/widowhood) and local Area Agency on Aging have practical resources. Your estate attorney, financial advisor, and bank all need to be contacted. Give yourself permission to handle one thing at a time." },
              { title: "Managing Grief Anniversaries", body: "The anniversary of the death, birthdays, the couple&apos;s anniversary, and holidays are predictably hard. Planning for these rather than being ambushed by them helps: decide in advance what you will do, who you want to be with, what ritual feels right. Having a plan does not prevent grief; it prevents the additional distress of being unprepared." },
              { title: "Lament Prayer and the Psalms", body: "Reading Psalm 23 aloud slowly, praying Psalm 22 or Psalm 88, writing your own lament in the style of the psalms — these provide a container for grief that cannot be contained. Many widowed people find that speaking the full truth of what has been lost and what is feared provides relief that more composed prayer does not." },
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
              { ref: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
              { ref: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
              { ref: "Ruth 1:16", text: "But Ruth replied, Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." },
              { ref: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
              { ref: "Isaiah 54:5", text: "For your Maker is your husband — the Lord Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth." },
              { ref: "1 Thessalonians 4:13–14", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him." },
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
                placeholder="What do you want to say to your spouse that you cannot say anymore? What is hardest today? What are you learning about yourself and God in the grief?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="God of Widows — Scripture and the Bereaved Spouse" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="A Grief Observed — C.S. Lewis and the Honest Account" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Walking Through the Valley — Psalm 23 and Spousal Loss" />
            <VideoEmbed videoId="7_CGP-12AE0" title="New Every Morning — Finding God in the Grief" />
          </div>
        )}
      </div>
    </div>
  );
}
