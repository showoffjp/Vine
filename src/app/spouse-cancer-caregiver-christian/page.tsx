"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Ruth and the Covenant of Staying",
    body: "\"Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried\" (Ruth 1:16-17). Ruth speaks these words not as a romantic gesture but as a covenant of costly accompaniment to a bitter, grieving, sick woman who warns her to leave. The spouse of a cancer patient lives inside this covenant daily — staying when staying costs everything. This is the shape of the love God modeled in the Incarnation, and the love Ruth modeled in Moab.",
  },
  {
    title: "The Theology of the Second Suffering",
    body: "Cancer caregivers experience what researchers call \"the second suffering\" — they watch the person they love suffer, and that watching creates its own form of trauma. Ezekiel's description of losing his wife — \"the delight of your eyes\" — and being commanded not even to weep publicly (Ezekiel 24:15-18) evokes the strange suspended grief of the spouse who must be strong while also grieving. The Bible does not shame the caregiver for their own suffering. Both the person with cancer and their spouse are in pain. Both deserve care.",
  },
  {
    title: "Fear Not — For a Spouse Who Cannot Not Fear",
    body: "\"Fear not, for I am with you\" (Isaiah 43:5) is said by God to a people about to go through fire and water. This is not a promise that the fire will not be hot or the water not deep. It is a promise of presence within the heat and the depth. The spouse of someone with cancer lives with fear that cannot be resolved by willpower or faith performance. The biblical response to this is not \"stop fearing\" but \"you are not alone in the fear.\" God is in it with you.",
  },
  {
    title: "Lament and the Caregiver's Unspoken Grief",
    body: "Caregivers often suppress their own grief to hold space for the person with cancer. But grief suppressed resurfaces — in anger, physical illness, depression, relational distance. The Psalms of lament give a sanctioned outlet: Psalm 13's \"how long, O Lord? Will you forget me forever?\" Psalm 31's \"my life is spent with sorrow.\" Caregivers are given permission by scripture to bring their own anguish before God, not only as intercessors for their spouse, but as people who are also suffering and need to be held.",
  },
  {
    title: "The Body of Christ Physically Sharing the Load",
    body: "Paul's image in 1 Corinthians 12 is of a body where \"if one member suffers, all suffer together\" (v.26). This is not a metaphor but an ecclesiology — the church is designed to function as a physical network of shared suffering and shared care. When a spouse is at the hospital every day, the church cooking, cleaning, childcaring, and income-supplementing is not charity — it is the body of Christ functioning correctly. The caregiver's greatest spiritual need is often to allow this help to flow in.",
  },
];

const voices = [
  {
    name: "Kate Bowler",
    role: "Author of Everything Happens for a Reason (and Other Lies I've Loved); Duke professor; stage IV colon cancer survivor",
    quote: "My husband had to learn how to be a caregiver, a parent, and a widower-in-waiting — all at once. He was terrified and trying to hide his terror so I would not be afraid. We needed to learn how to be afraid together instead of separately.",
  },
  {
    name: "Jerry Sittser",
    role: "Author of A Grace Disguised; survived the accident that killed his wife, mother, and daughter",
    quote: "The soul can stretch to hold more suffering than we think possible. Not through heroic willpower, but because something greater than us fills the space created by loss. The caregiver and the patient are both being enlarged by what they are going through — though they cannot see it while they are in it.",
  },
  {
    name: "Dr. Larry Crabb",
    role: "Christian psychologist, author of Shattered Dreams",
    quote: "Our deepest desire is not for the cancer to go away. It is to find Someone who is present in the cancer — who is not undone by it, who does not step back from it. That Someone is real. And when caregivers find that presence, they can sustain the care even when they feel they cannot.",
  },
  {
    name: "Ann Voskamp",
    role: "Author of One Thousand Gifts; has written about suffering and the practice of gratitude in the hard places",
    quote: "Gratitude is not the denial of grief. It is what keeps us from drowning in grief — the discipline of noticing that light still exists even while darkness is also real. The caregiver who builds this practice does not grieve less. They grieve and still survive.",
  },
];

const practices = [
  {
    title: "Say Yes to Specific Help",
    body: "When people offer to help, accept — and give them a specific task. Not \"let me know if you need anything\" but \"yes, please bring dinner Thursday\" or \"yes, please take the kids Saturday morning.\" Caregivers routinely refuse help out of pride, privacy, or not wanting to burden others. This refusal depletes you faster and robs your community of the chance to fulfill their calling. Jesus received help — Simon of Cyrene carried his cross. You can receive help too.",
  },
  {
    title: "Find a Caregiver Who Is Also a Spouse",
    body: "The specific experience of being the spouse of someone with cancer is different from being a child caregiver, a parent caregiver, or a friend. Find at least one other person who has been in this exact role — preferably a Christian who can hold both the medical and the spiritual dimensions. Cancer Care (cancercare.org) and the American Cancer Society's (cancer.org) cancer support networks both offer spouse-specific resources and support groups.",
  },
  {
    title: "Attend Appointments When You Can and Name Your Own Needs to the Medical Team",
    body: "Many hospitals now have patient and caregiver navigators specifically for cancer patients and families. Introduce yourself to the medical team as the caregiver and ask directly: \"What support is available for spouses?\" Many oncology social workers can connect you with resources specifically for caregiver mental health, financial navigation, and practical support. You are part of the care team. Advocate for your own needs within that context.",
  },
  {
    title: "Have the Honest Conversations — Including the End-of-Life Ones",
    body: "Many couples avoid talking about prognosis, death, final wishes, and what the surviving spouse will need. These conversations are hard but necessary. Having them does not cause death — avoiding them means dying without the gifts of preparedness and genuine goodbye. A hospital chaplain, pastoral counselor, or hospice social worker can facilitate these conversations if you cannot start them alone. Don't let the avoidance rob you of the time you have.",
  },
  {
    title: "Grieve Your Marriage as It Was",
    body: "Cancer changes a marriage. The dynamic of caregiver and patient, healthy and ill, is not the dynamic you signed up for. It is appropriate to grieve the marriage you had — the equality, the spontaneity, the shared capacity — even while also loving and caring for your spouse in the marriage you now have. This grieving is not disloyalty. It is the honest emotional accounting that allows you to continue showing up.",
  },
  {
    title: "Maintain One Thread of Your Own Life",
    body: "Many spousal caregivers lose themselves entirely in the role — abandoning their own friendships, interests, spiritual practices, and vocations. While some of this is unavoidable, total self-abandonment is neither sustainable nor required. Keep at least one thing that is yours: a weekly walk, a monthly call with a friend, a book, a creative practice. This is not selfishness. It is the maintenance of the self that your spouse also loves and needs to come home to.",
  },
];

const scriptures = [
  { ref: "Ruth 1:16", text: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God." },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you." },
  { ref: "Psalm 31:9-10", text: "Be gracious to me, O Lord, for I am in distress; my eye is wasted from grief; my soul and my body also. For my life is spent with sorrow, and my years with sighing." },
  { ref: "1 Corinthians 12:26", text: "If one member suffers, all suffer together; if one member is honored, all rejoice together." },
  { ref: "Romans 8:38-39", text: "For I am sure that neither death nor life... nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
  { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
];

const videos = [
  { videoId: "1BtezM4LQVY", title: "Kate Bowler — Caring for a Spouse with Cancer" },
  { videoId: "Rm7mABFKhVk", title: "The Hidden Suffering of the Cancer Caregiver" },
  { videoId: "nJT4bVkj3KA", title: "Jerry Sittser — A Grace Disguised: Grief and Survival" },
  { videoId: "G42PzL7QZXE", title: "When Your Spouse Has Cancer — Faith for the Long Road" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function SpouseCancerCaregiverPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; grief: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", grief: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_spousecancercaregiver_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_spousecancercaregiver_entries", JSON.stringify(next));
    setForm({ today: "", grief: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            When Your Spouse Has Cancer
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You signed up for better and for worse. Now you are in the worse, and you are terrified, exhausted, and lonely. For the Christian spouse walking alongside a partner through cancer.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support for caregivers:</strong> CancerCare Caregiver Support: <strong style={{ color: TEXT }}>1-800-813-4673</strong> &bull; ACS Patient Services: <strong style={{ color: TEXT }}>1-800-227-2345</strong> &bull; Crisis Line: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Caregiver Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A place to put down what you are carrying.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How is your spouse today? How are you?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Medical update, emotional state, both..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What grief are you carrying that you cannot say out loud?</label>
                <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} rows={2} placeholder="Fear of losing them, anger, loneliness..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, today I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Grief: </span>{e.grief}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for spouses who are also caregivers.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
