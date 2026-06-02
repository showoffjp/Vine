"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "service" | "pastoral" | "resources" | "videos";

const theologyPoints = [
  {
    title: "Death Is an Enemy — But a Defeated One",
    content: "Paul calls death 'the last enemy' (1 Corinthians 15:26) — not a friend, not a natural transition, not 'returning to the universe.' Death is an intruder in God's good creation, the consequence of sin (Romans 5:12), and an offense against the image-bearing dignity of human beings. Yet it is a defeated enemy: Christ's resurrection is the decisive battle. The funeral service stands at this intersection — naming death's reality while proclaiming its defeat."
  },
  {
    title: "The Body Matters — It Will Be Raised",
    content: "The Christian funeral treats the body with dignity because the body matters to God. It is not a shell or a husk — it is the person. 1 Corinthians 15 makes clear that what is buried will be raised, transformed: 'sown perishable, raised imperishable.' This is why Christians historically preferred burial (participation in Christ's burial and resurrection) over cremation — though cremation is not prohibited and is widely accepted across evangelical traditions today."
  },
  {
    title: "The Funeral Is Worship, Not a Memorial Service",
    content: "A Christian funeral is first a service of Christian worship — not primarily a celebration of the deceased's life, though that has its place. The center is God: his faithfulness, the resurrection of Christ, the hope of the new creation. When the funeral becomes a 'celebration of life' centered entirely on the deceased's personality, it loses its theological anchor and its power to comfort with actual hope rather than sentiment."
  },
  {
    title: "The Resurrection Is Concrete, Not Vague",
    content: "Christian comfort at death is not 'they're in a better place' or 'she's watching over us' — it is the bodily resurrection of the dead, the restoration of all things, the final defeat of death and mourning (Revelation 21:4). This hope is specific, historical, and rooted in the empty tomb. The pastor who preaches this concretely gives the bereaved something real to hold. The pastor who offers vague comfort gives them nothing that will outlast the service."
  },
  {
    title: "Grief and Hope Are Not Opposites",
    content: "1 Thessalonians 4:13: 'We do not want you to be ignorant about those who fall asleep, so that you do not grieve like the rest of mankind, who have no hope.' The instruction is not 'do not grieve' — it is 'do not grieve as those who have no hope.' The distinction is the horizon of grief, not the absence of it. The funeral service holds both: the tears are real, and the resurrection is real. Neither cancels the other."
  },
  {
    title: "The Funeral Serves the Living",
    content: "The deceased is with God. The funeral is primarily for the living — the bereaved family, the congregation, the community. It provides: permission to grieve publicly and corporately, a theological framework for the loss, pastoral care embedded in worship, and the Christian community's witness to the world. Done well, a funeral can be the most powerful evangelistic event many unchurched people ever attend."
  }
];

const serviceElements = [
  {
    element: "Gathering & Processional",
    color: "#6B7280",
    meaning: "The community assembles around the body (or urn or symbolic representation) as an act of solidarity and witness. The processional marks the sacred nature of the occasion.",
    options: [
      "Coffin/urn processed into the sanctuary, preceded by pastor with cross",
      "Pall draped over coffin: white (baptismal; used in Episcopal/Catholic), black (mourning; traditional), or family-chosen",
      "Opening sentences: 'I am the resurrection and the life' (John 11:25-26) or Psalm 46:1 spoken as coffin enters",
      "Organ/piano music appropriate to the gravity and hope of the occasion"
    ],
    scriptures: ["John 11:25-26", "Psalm 46:1", "Revelation 1:17-18"],
    note: "The white pall is deeply meaningful: it covers the body as baptism covered the person. 'As many of you as were baptized into Christ have clothed yourself with Christ' (Galatians 3:27)."
  },
  {
    element: "Scripture Readings",
    color: "#8B5CF6",
    meaning: "The Word of God speaks to death and resurrection with authority no human eloquence can match. The readings should include resurrection promise, and may include a lament psalm.",
    options: [
      "Psalm 23 (The Lord is my shepherd — most requested; deeply comforting)",
      "Psalm 90 (Lord, you have been our dwelling place — mortality and eternity)",
      "John 14:1-6 (Let not your heart be troubled — the way, the truth, the life)",
      "1 Corinthians 15:51-58 (Death swallowed up in victory)",
      "Romans 8:31-39 (Nothing shall separate us from the love of God)",
      "Revelation 21:1-5 (No more death, mourning, crying, or pain)"
    ],
    note: "Include at least one Old Testament and one New Testament reading. The OT laments (Ps 88, Ps 22, Lamentations 3) honor the reality of grief; the NT texts provide resurrection hope."
  },
  {
    element: "The Eulogy / Homily",
    color: "#3B82F6",
    meaning: "The central address at a Christian funeral should proclaim the gospel. It may include tribute to the deceased, but it must not stay there. The difference between a eulogy (tribute) and a homily (sermon) is that the homily has a text and a theological claim.",
    options: [
      "Structure: Brief tribute → The faith they embodied → The gospel that held them → The hope we share",
      "Preach resurrection: 1 Corinthians 15, John 11, or Revelation 21-22",
      "Name the grief honestly before offering the hope — do not rush to comfort",
      "Address the non-believers present: this may be the only sermon they hear this year",
      "Length: 10-20 minutes; shorter if the family is in acute distress"
    ],
    note: "A celebrity-tribute eulogy that avoids death, resurrection, and the gospel fails the bereaved family and the watching world. Be kind — and be clear."
  },
  {
    element: "Music & Hymns",
    color: "#F59E0B",
    meaning: "Music at a Christian funeral should carry theological weight. Sentimental songs that offer no hope are a disservice; hymns that have carried the church through death for centuries are a gift.",
    options: [
      "'How Great Thou Art' — culminates in resurrection hope",
      "'It Is Well with My Soul' — written after Horatio Spafford's children drowned",
      "'Be Thou My Vision' — comprehensive commitment to God over all",
      "'Great Is Thy Faithfulness' — God's faithfulness through every season",
      "'In Christ Alone' — death defeated, life secure",
      "'O God Our Help in Ages Past' — Psalm 90's meditation on mortality set to music"
    ],
    note: "Choose hymns the congregation can sing, not just performance pieces. Congregational singing at a funeral is a corporate act of witness and defiance against death's claim."
  },
  {
    element: "The Committal",
    color: "#10B981",
    meaning: "At the graveside (or at the crematorium), the body is committed to the earth with the church's hope spoken aloud over it. This is the most ancient element of Christian burial practice.",
    options: [
      "Traditional: 'In sure and certain hope of the resurrection to eternal life through our Lord Jesus Christ, we commend to Almighty God our brother/sister [Name], and we commit his/her body to the ground; earth to earth, ashes to ashes, dust to dust.'",
      "Reading: 1 Corinthians 15:42-44 ('sown perishable, raised imperishable')",
      "Graveside prayer of committal",
      "Final blessing: Numbers 6:24-26 or Romans 8:38-39"
    ],
    note: "Don't skip or rush the committal. The act of burying or committing the body is theologically significant — it enacts what we believe about bodies, death, and resurrection."
  },
  {
    element: "Reception & Continued Care",
    color: "#EF4444",
    meaning: "The church's care does not end when the service ends. The reception is the first act of ongoing pastoral presence. The meal is one of the most ancient Christian responses to death.",
    options: [
      "Provide a meal — the church bringing food is a centuries-old tradition of embodied care",
      "Have trained pastoral volunteers (not just hospitality volunteers) present",
      "Follow up specifically: week 2-4 is often harder than the funeral week",
      "Mark the one-month and one-year anniversaries with intentional contact",
      "Recommend GriefShare or a grief support group for the bereaved"
    ],
    note: "The bereaved often feel abandoned two weeks after the funeral when the casseroles stop and the community returns to normal. Schedule your follow-up before the funeral."
  }
];

const pastoralGuidance = [
  {
    situation: "Death of a Believer",
    color: "#10B981",
    guidance: "The full resurrection hope is available. Preach 1 Corinthians 15 and Revelation 21-22 with confidence. Acknowledge the grief fully — don't paper over it with premature comfort. Name what was lost; name what is secured in Christ.",
    pitfall: "Don't say: 'God needed another angel in heaven' (angels are a different category from glorified humans), 'She's watching over us' (Scripture doesn't teach this), or 'Everything happens for a reason' (denies the reality that death is an enemy)."
  },
  {
    situation: "Death of an Unbeliever",
    color: "#EF4444",
    guidance: "This is the most difficult funeral to conduct with integrity. Avoid false comfort about their eternal state. Focus on: God's mercy which is not for us to limit, the gospel which the living still have opportunity to receive, and the grief of the family which is real and deserves acknowledgment.",
    pitfall: "Don't say: 'She's in a better place now' if you don't know. Don't preach them into heaven to comfort the family — this is a false kindness. Do preach the gospel to the living. Do care for the grief without theological dishonesty."
  },
  {
    situation: "Suicide",
    color: "#F59E0B",
    guidance: "Pastoral priority is the traumatized family and close friends. Acknowledge the death directly — do not euphemize. God's mercy is available even to those who take their own life. No one is beyond the reach of grace, and the manner of death does not determine eternal destiny. Address the mental illness and pain that preceded the act with honesty and compassion.",
    pitfall: "Avoid: minimizing ('at least they're at peace now'), condemning (implying damnation), or triggering imitation with details. The funeral should include robust mental health resources and crisis contacts for attendees."
  },
  {
    situation: "Death of a Child",
    color: "#6B7280",
    guidance: "Among the most devastating losses. There is no adequate explanation — and you should not try to provide one. The book of Job is your template: sit with the grief, resist explaining it away. 2 Samuel 12:23 ('I will go to him') and Jesus's welcome of children (Matthew 19:14) provide pastoral resources for those asking about infant salvation.",
    pitfall: "Never say: 'God needed your baby more than you did.' Never offer explanations that would require God to be cruel in order to accomplish a good end. Acknowledge the incomprehensibility of the loss."
  },
  {
    situation: "Sudden / Traumatic Death",
    color: "#DC2626",
    guidance: "Shock and numbness characterize the early stages. Don't rush theological content in the first days — presence and practical help take priority. The funeral itself may come later and give more time for processing. Acknowledge the sudden nature; the body needs time to absorb what the mind cannot yet comprehend.",
    pitfall: "Avoid the temptation to explain too soon. 'God allowed this for a reason' in the first 48 hours is not pastoral care — it is theology deployed as anesthesia. Sit in the mystery first."
  }
];

const resources = [
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    type: "For the Bereaved",
    color: "#6B7280",
    desc: "Lewis's raw post-bereavement journal — more honest about grief than almost any pastoral manual. Give this to a widow or widower in the first week. It tells them their grief is not faithlessness and they are not alone.",
    url: ""
  },
  {
    title: "The Art of Dying",
    author: "Rob Moll",
    type: "Pastoral / Practical",
    color: "#8B5CF6",
    desc: "A journalist's exploration of how Christians can recover the art of dying well — including conversations about death before it arrives, hospice care, the physical experience of dying, and how the church can restore a theology of good death.",
    url: ""
  },
  {
    title: "Preparing for Death (Ars Moriendi)",
    author: "Medieval Tradition",
    type: "Historical Practice",
    color: "#10B981",
    desc: "The medieval 'art of dying' tradition (Ars Moriendi, c. 1415) provided practical guides for preparing Christians to die well and for attending the dying. Many Protestant pastoral manuals adapted this tradition — worth recovering in an age that medicalizes death away from the church.",
    url: ""
  },
  {
    title: "GriefShare",
    author: "Church Grief Support Program",
    type: "Community Resource",
    color: "#EF4444",
    desc: "The most widely available structured Christian grief support program. 13-week video-based group curriculum for churches. Strongly recommended as the systematic follow-up to pastoral care after a death.",
    url: "https://www.griefshare.org"
  },
  {
    title: "The Book of Common Prayer — Burial of the Dead",
    author: "Anglican / Episcopal Tradition",
    type: "Liturgical Resource",
    color: "#3B82F6",
    desc: "The BCP burial rites (both Rite I and Rite II) are among the finest Christian funeral liturgies available — theologically rich, pastorally wise, and shaped by centuries of practice. Freely available online and adaptable for non-liturgical churches.",
    url: "https://www.bcponline.org"
  },
  {
    title: "Blessed Are the Dying",
    author: "Barbara Karnes",
    type: "Practical / Hospice",
    color: "#F59E0B",
    desc: "A hospice nurse's guide to the physical process of dying. Pastors and family members who understand what is happening physically in the days before death are better equipped to provide care, pray, and support. Not explicitly Christian but practically indispensable.",
    url: ""
  }
];

export default function ChristianFuneralGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedElement, setSelectedElement] = useState(serviceElements[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Death" },
    { id: "service", label: "The Service" },
    { id: "pastoral", label: "Pastoral Situations" },
    { id: "resources", label: "Resources" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 40, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#6B7280", color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            PASTORAL CARE
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Christian Funeral Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            A Christian funeral is not a memorial service — it is an act of worship at the intersection of grief and resurrection hope. Done well, it may be the most powerful hour of pastoral ministry in a person's life.
          </p>
        </div>

        <div style={{ background: "#1E293B", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", color: MUTED }}>
            "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live." — John 11:25
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`pt-${i}`)}
                  style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 15 }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>{pt.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "service" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              {serviceElements.map(el => (
                <div
                  key={el.element}
                  onClick={() => setSelectedElement(el)}
                  style={{
                    background: selectedElement.element === el.element ? el.color + "22" : CARD,
                    border: `2px solid ${selectedElement.element === el.element ? el.color : BORDER}`,
                    borderRadius: 10, padding: 16, cursor: "pointer", marginBottom: 10
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{el.element}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{el.meaning.substring(0, 90)}…</div>
                </div>
              ))}
            </div>
            <div style={{ width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, position: "sticky", top: 20 }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: selectedElement.color }}>{selectedElement.element}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{selectedElement.meaning}</p>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>OPTIONS & FORMS</div>
              {selectedElement.options.map((opt, i) => (
                <div key={i} style={{ background: BG, borderRadius: 6, padding: "8px 12px", marginBottom: 6, fontSize: 12, color: MUTED }}>{opt}</div>
              ))}
              {selectedElement.scriptures && (
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10, marginTop: 12 }}>
                  <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 6 }}>SCRIPTURES</div>
                  {selectedElement.scriptures.map(s => (
                    <div key={s} style={{ fontSize: 11, color: MUTED, marginBottom: 3 }}>• {s}</div>
                  ))}
                </div>
              )}
              <div style={{ background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, padding: 10, marginTop: 12 }}>
                <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>NOTE: </span>
                <span style={{ fontSize: 12, color: MUTED }}>{selectedElement.note}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pastoral" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 800 }}>
            {pastoralGuidance.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${p.color}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 800 }}>{p.situation}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{p.guidance}</p>
                <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 8, padding: 12 }}>
                  <span style={{ fontSize: 11, color: "#EF4444", fontWeight: 700 }}>PITFALL: </span>
                  <span style={{ fontSize: 12, color: MUTED }}>{p.pitfall}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${r.color}` }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 6 }}>{r.type.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{r.title}</h3>
                <div style={{ fontSize: 13, color: r.color, marginBottom: 10 }}>{r.author}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: r.url ? 14 : 0 }}>{r.desc}</p>
                {r.url && (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}>
                    Visit Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on death, funerals, and resurrection hope.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Os6BbIwrZR8", title: "R.C. Sproul Memorial Service", channel: "Ligonier Ministries", description: "A memorial service honoring Dr. R.C. Sproul, modeling what a gospel-centered funeral looks like in practice." },
                  { videoId: "J-MXmGZxN7w", title: "John Piper's Funeral Prayer for a Family of Five", channel: "Desiring God", description: "John Piper shares a funeral prayer and pastoral counsel for a family who lost five members in a tragedy." },
                  { videoId: "AIe9kF2RbJQ", title: "Do You Conduct Funerals for Non-Christians?", channel: "Desiring God", description: "John Piper addresses the hard pastoral question of how to handle funerals for those who showed no faith in Christ." },
                  { videoId: "0k9kGCmY6Jg", title: "R.C. Sproul's Final Sermon: A Great Salvation", channel: "Ligonier Ministries", description: "Dr. R.C. Sproul's final sermon, preached weeks before his death — a powerful testimony to how Christians face death." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
