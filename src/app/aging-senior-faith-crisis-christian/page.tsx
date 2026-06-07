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

const JOURNAL_KEY = "vine_aging_senior_faith_entries";
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

export default function AgingFaithCrisis() {
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
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Aging & Seniors</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Aging, Loss, and Faith in Later Life</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the years accumulate loss faster than joy — finding God in the diminishment of aging.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> Eldercare Locator: <strong>1-800-677-1116</strong> &nbsp;|&nbsp; 988 Lifeline (also for seniors) &nbsp;|&nbsp; AARP Foundation: <strong>877-333-5885</strong>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Spirituality of Diminishment</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Aging involves a long series of losses — capacity, independence, peers, spouses, sometimes cognitive function. Western culture (including much of Western Christianity) has no theology of diminishment. We prize productivity, contribution, activity, and usefulness, which means that people whose bodies and minds are slowly reducing feel like they are failing at something. Pierre Teilhard de Chardin wrote about the passive diminishments — the things that happen to us that we cannot prevent — as a form of participation in the cross. The spiritual task is not to fight aging or deny it, but to learn to receive life rather than only produce it. This is a profound and difficult conversion.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Isaiah 46 — I Will Carry You to Gray Hairs</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Isaiah 46:4 is one of the most direct and tender promises in all of Scripture to older people: Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you. The same God who sustained you through youth and middle age is not retiring now. He carries. The image is not of an advisor offering suggestions but of one who bears weight. When your own strength fails, there is One whose does not. This is not a promise of physical health or comfort, but of presence and sustaining grace through whatever diminishment comes.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Worth Beyond Productivity</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>One of the most common spiritual crises in aging is the loss of role and therefore the loss of sense of worth. When a person retires, loses physical capacity, can no longer drive, can no longer care for others as they once did, they frequently experience a profound identity void. Christian theology has always insisted that human worth is not earned — it is given, in creation, and sustained by grace. Psalm 71 is written from the perspective of an older person praying that God will not abandon them in old age. The psalmist still has a story to tell: Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation (Ps 71:18). You are still a witness. You still have a story. You still matter.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Preparing to Die Well</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Medieval Christians practiced ars moriendi — the art of dying well. They believed that how a person died was a spiritual act as significant as how they lived. Contemporary medical culture has largely replaced this with a technological war against death, which often robs people of the very death they would have chosen. For Christians, death is not the final defeat — it is the threshold. Paul writes in Philippians 1:21 that to live is Christ and to die is gain. This does not make dying easy, but it gives it a frame. Thinking about death, writing advance directives, talking with loved ones about your wishes, sitting with your own mortality — this is not morbid. It is faithfulness.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Gift of Accumulated Sorrow</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Older people have buried more people. They have known more disappointment, survived more difficulty, and weathered more seasons of unanswered prayer than younger people can imagine. This is not only loss — it is a form of formation. The compassion that comes from accumulated sorrow, the wisdom that comes from watching the long arc of multiple lives, the perspective that comes from having been wrong before — these are gifts. The Hebrew tradition placed enormous value on elders precisely because their formation was not replicable by any shortcut. Your years are not just weight. They are wealth.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Henri Nouwen & Walter Gaffney", title: "Aging: The Fulfillment of Life", quote: "Aging is not a gradual way of dying but a gradual way of discovering that life is inexhaustible. The more we lose, the more we find. The more we let go, the more we receive." },
              { name: "Eugene Peterson", title: "A Long Obedience in the Same Direction", quote: "The Christian life is not a sprint. It is what happens over decades of sustained, quiet faithfulness. The people who get there are not the loudest or the fastest — they are the ones who kept going." },
              { name: "Richard Rohr", title: "Falling Upward: A Spirituality for the Two Halves of Life", quote: "The second half of life is the time when we finally stop performing and start living. It is the time of wisdom, depth, and surrender — which is why most people resist it with everything they have." },
              { name: "Florida Scott-Maxwell", title: "The Measure of My Days", quote: "Age puzzles me. I thought it was a quiet time. My seventies were interesting and fairly serene, but my eighties are passionate. I grow more intense as I age." },
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
              { title: "Life Review and Spiritual Autobiography", body: "Writing or narrating the story of your life — not a resume, but a spiritual autobiography — is one of the most powerful practices available to older adults. What did God do across your years? Where were the turning points? What do you wish you had understood sooner? Life review has documented benefits for meaning-making and reducing depression in older adults." },
              { title: "Advance Care Planning — Do It Now", body: "Advance directives (living will, healthcare proxy, POLST form) ensure your wishes are honored if you cannot speak for yourself. The Conversation Project (theconversationproject.org) provides free guides for these conversations. Five Wishes (agingwithdignity.org) is a legally binding advance directive recognized in most states. This is an act of love for your family as much as for yourself." },
              { title: "Eldercare Locator and Area Agency on Aging", body: "The federal Eldercare Locator (1-800-677-1116 or eldercare.acl.gov) connects older adults and caregivers to local services — transportation, meals, home care, legal assistance, and more. Every county in the US has an Area Agency on Aging that provides free services. You do not have to navigate aging alone." },
              { title: "Contemplative Prayer for Later Life", body: "Many older adults find that the contemplative traditions — centering prayer, Ignatian examen, lectio divina, the Daily Office — become more accessible as the noise of active life recedes. Contemplative Outreach (contemplativeoutreach.org) and the Order of the Holy Cross offer resources and communities. What could not be received in the rush of midlife may now become possible." },
              { title: "Grief Groups for Accumulated Loss", body: "Older adults often carry multiple unprocessed losses — spouses, siblings, close friends, roles, health. Grief Share (griefshare.org) has groups in most communities. Hospice organizations often offer free bereavement groups to the broader community, not just former patients. The losses of aging deserve the same care as any other grief." },
              { title: "Intergenerational Connection", body: "One of the most powerful antidotes to the isolation and purposelessness of later life is intergenerational connection. Tutoring, mentoring, grandparenting, storytelling in faith communities, sharing skills — these connect the wisdom of accumulated experience with people who desperately need it. Many faith communities are underutilizing their elders. Ask how you can contribute. Your experience is needed." },
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
              { ref: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
              { ref: "Psalm 71:17–18", text: "Since my youth, God, you have taught me, and to this day I declare your marvelous deeds. Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation." },
              { ref: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
              { ref: "Ecclesiastes 3:1–2", text: "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die, a time to plant and a time to uproot." },
              { ref: "2 Corinthians 4:16–17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
              { ref: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
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
                placeholder="What has this season of life asked of you? What are you learning about God in the slowing down?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="Growing Deeper in Later Life — A Theology of Aging" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Dying Well — Faith and the End of Life" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Second Half of Life — Wisdom, Loss, and God" />
            <VideoEmbed videoId="7_CGP-12AE0" title="God Carries Us to Gray Hairs — Isaiah 46 for Seniors" />
          </div>
        )}
      </div>
    </div>
  );
}
