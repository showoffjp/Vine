"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "intermediate", label: "Intermediate State" },
  { id: "new-creation", label: "New Creation" },
  { id: "new-jerusalem", label: "New Jerusalem" },
  { id: "resurrection-body", label: "Resurrection Body" },
  { id: "what-we-do", label: "What We Will Do" },
  { id: "misconceptions", label: "Misconceptions" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const INTERMEDIATE_ITEMS = [
  { id: "int1", title: "What Happens When You Die?", ref: "Luke 23:43; Philippians 1:23; 2 Corinthians 5:8",
    body: "At death, believers enter a state of conscious fellowship with Christ. Three key texts: (1) Jesus to the thief: 'Today you will be with me in paradise' (Luke 23:43) — immediate, conscious, relational presence with Christ; (2) Paul: 'I desire to depart and be with Christ, which is better by far' (Philippians 1:23) — departure from the body is better than remaining, implying conscious joy, not sleep; (3) Paul: 'away from the body and at home with the Lord' (2 Corinthians 5:8). The soul survives bodily death in a state of conscious communion with God, awaiting the resurrection." },
  { id: "int2", title: "Soul Sleep (and Why It's Probably Wrong)", ref: "Luke 16:19-31; 1 Thessalonians 4:13-17",
    body: "Soul sleep is the view that the dead are unconscious until the resurrection. Held by some Baptists, Adventists, and others who read 'sleep' in the NT as genuine unconsciousness. The problems: (1) Luke 16:19-31 — the rich man and Lazarus are conscious and communicating after death; (2) The thief in Luke 23:43 — 'today' suggests immediate conscious experience; (3) The souls under the altar in Revelation 6:9-11 are speaking; (4) Philippians 1:23 — being 'with Christ' is described as better, implying rich experience, not unconscious waiting." },
  { id: "int3", title: "Purgatory (and the Protestant Objection)", ref: "Hebrews 9:27; Luke 16:26",
    body: "The Roman Catholic doctrine of purgatory holds that most souls after death undergo purification before entering heaven, through which prayers for the dead and indulgences can assist. The Protestant objections: (1) No clear biblical text supports purgatory; it is inferred from 2 Maccabees 12:46 (deuterocanonical) and ambiguous NT texts; (2) The doctrine implies that Christ's atonement is insufficient — the believer must still make satisfaction; (3) Hebrews 9:27 — 'it is appointed for man to die once, and after that comes judgment' — no intermediate process of purification. The Protestant view: the believer is justified completely by Christ's merit and enters the presence of God immediately at death." },
  { id: "int4", title: "Heaven Now vs. Heaven Then", ref: "Revelation 21:1; Romans 8:23",
    body: "The NT often distinguishes two senses of 'heaven': (1) The present heaven — where God dwells and where believers go at death; and (2) The eschatological heaven — the new creation that comes after resurrection and the renewal of all things. N.T. Wright: Christians often imagine their final destiny as 'going to heaven when you die' — this is half right at best. The full NT hope is bodily resurrection and the renewal of creation — a new earth as well as a new heaven. The intermediate state is real but provisional; the resurrection state is the fullness of what God intends." },
];

const NEW_CREATION_ITEMS = [
  { id: "nc1", title: "A New Heaven and a New Earth", ref: "Revelation 21:1-5; Isaiah 65:17-25; 2 Peter 3:13",
    body: "'Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away' (Revelation 21:1). Isaiah 65:17-25 describes the new creation with imagery of wolves and lambs dwelling together, no more weeping, no more untimely death — creation renewed and healed. 2 Peter 3:13 — 'we are looking forward to a new heaven and a new earth.' The question of 'new': is this creation destroyed and replaced (ex nihilo again) or renewed and transformed? Most evangelicals favor renewal/transformation: the redemption of creation, not its abandonment." },
  { id: "nc2", title: "Continuity and Discontinuity with Present Creation", ref: "Romans 8:19-22; 1 Corinthians 15:42-44",
    body: "Romans 8:19-22: 'the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.' The creation that groans will also be redeemed — not scrapped but transformed. This is the analogy of the resurrection body (1 Corinthians 15:42-44): the resurrection body is both continuous with the present body (the same person, raised) and discontinuously transformed (imperishable, glorious, powerful). The new creation will be both recognizably this world, transfigured, and incomprehensibly more than we can imagine." },
  { id: "nc3", title: "No More Death, Mourning, Crying, or Pain", ref: "Revelation 21:4; Isaiah 25:8",
    body: "'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away' (Revelation 21:4). Every instance of suffering, loss, grief, injustice, and death that marks the present age will be absent from the new creation — not because we will have forgotten, but because all will be made right. Isaiah 25:8: 'He will swallow up death forever. The Sovereign LORD will wipe away the tears from all faces.' The hope of new creation is the ultimate answer to every pastoral question about why God allows suffering." },
  { id: "nc4", title: "The Presence of God as the Center", ref: "Revelation 21:3; Revelation 22:3-5",
    body: "'And I heard a loud voice from the throne saying, \"Look! God's dwelling place is now among the people, and he will dwell with them\"' (Revelation 21:3). The center of the new creation is not a place but a Person. Eden's intimacy with God — ruined at the fall — is restored and surpassed. Revelation 22:4: 'They will see his face.' The beatific vision — direct knowledge of and fellowship with God — is the heart of the Christian hope. Everything else about the new creation is context for this: the new earth is the place where God and humanity dwell together without barrier forever." },
];

const NEW_JERUSALEM = [
  { color: GOLD, title: "The New Jerusalem Descends", body: "'I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband' (Revelation 21:2). The New Jerusalem is both literal (a place) and symbolic (the redeemed community). Note: it comes down — heaven comes to earth, not the reverse. This is the final reversal of Babel: the city that humanity tried to build up to God is replaced by the city God sends down to humanity. The shape (a cube, or more likely a pyramid — 12,000 stadia in all dimensions) echoes the Most Holy Place in the tabernacle and temple — the presence of God expanded to encompass the whole earth." },
  { color: BLUE, title: "No Temple", body: "'I did not see a temple in the city, because the Lord God Almighty and the Lamb are its temple' (Revelation 21:22). In the OT, the temple was the place where heaven and earth overlapped — where God's presence dwelt. In the New Jerusalem, the whole city is the Most Holy Place. There is no localized sacred space because all space is sacred. The absence of a temple is not absence of worship but the saturation of the whole creation with worship. God is everywhere fully present." },
  { color: GREEN, title: "The Nations Bring Their Glory", body: "'The nations will walk by its light, and the kings of the earth will bring their splendor into it... The glory and honor of the nations will be brought into it' (Revelation 21:24-26). This remarkable image suggests that the achievements of human culture — its art, music, architecture, governance, craft — will somehow be included in the new creation. Not untransformed (all that is sinful will not enter) but the best of human culture offered to God. This is the fulfillment of the cultural mandate — not the destruction of human civilization but its redemption and glorification." },
  { color: TEAL, title: "The River and the Tree of Life", body: "'Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb down the middle of the great street of the city. On each side of the river stood the tree of life' (Revelation 22:1-2). The imagery echoes Genesis (the river and the tree of life in Eden) and Ezekiel 47 (the healing river from the temple). The tree of life, from which humanity was barred after the fall (Genesis 3:24), is now fully accessible: 'Blessed are those who wash their robes, that they may have the right to the tree of life' (Revelation 22:14)." },
];

const RESURRECTION_BODY = [
  { color: PURPLE, title: "The Body Is Raised — Not Abandoned", body: "'The body that is sown is perishable, it is raised imperishable; it is sown in dishonor, it is raised in glory; it is sown in weakness, it is raised in power; it is sown a natural body, it is raised a spiritual body' (1 Corinthians 15:42-44). The resurrection is bodily — not the escape of the soul from the body but the transformation of the body. The resurrection of Jesus is the pattern: he was recognizably himself (the disciples recognized him), had a physical body (he ate fish, Luke 24:42), and yet was transformed (walked through locked doors, John 20:19). Our resurrection bodies will be similarly continuous and transformed." },
  { color: BLUE, title: "Imperishable, Glorious, Powerful", body: "The four contrasts in 1 Corinthians 15:42-44: perishable → imperishable; dishonor → glory; weakness → power; natural → spiritual. 'Spiritual body' does not mean non-physical — it means a body fully indwelt and governed by the Spirit. The resurrection body is not less physical than the present body but more real, more substantial — freed from the decay and limitation of the present age. No more aging, disease, disability, or death. The body will be what it was made to be — the image of God expressed in full creaturely physicality." },
  { color: GREEN, title: "Recognition and Identity", body: "We will know and be known. Thomas recognized the risen Jesus (John 20:27). The disciples on the road to Emmaus recognized him (Luke 24:31). Jesus calls Mary by name (John 20:16) and she recognizes him. This continuity of personal identity in the resurrection body is theologically important: the person who is raised is the same person who died — not a copy or a substitute but the very self, raised and transformed. Relationships will continue; love will not be lost." },
];

const WHAT_WE_DO = [
  { color: GOLD, title: "Worship and Praise", body: "Revelation 4-5 and 7:9-12 show the redeemed in continuous, joyful worship. This is not the tedium of an eternal church service — it is the natural overflow of creatures who fully see God's glory. C.S. Lewis: 'The praise of God is what we were made for.' In the new creation, the hindrances to full worship — sin, distraction, partial vision, unanswered questions — will be removed, and worship will be the joyful expression of complete joy in complete sight of complete beauty." },
  { color: BLUE, title: "Rule and Reign", body: "'To the one who is victorious, I will give the right to sit with me on my throne' (Revelation 3:21). Revelation 22:5: 'they will reign for ever and ever.' The redeemed will exercise genuine authority and stewardship over the new creation. This is the fulfillment of the Genesis mandate — 'fill the earth and subdue it, have dominion' — now perfected and free from sin's distortion. Work, creativity, and governance will continue in the new creation — not as burden but as joy." },
  { color: TEAL, title: "Rest", body: "Hebrews 4:9-11: 'There remains, then, a Sabbath-rest for the people of God.' The weekly Sabbath is a foretaste of eschatological rest — the complete rest of living fully in God's presence. This is not inactivity but the rest of complete shalom — no more striving, anxiety, incompleteness. Augustine: 'You have made us for yourself, and our heart is restless until it rests in you.' The new creation is the fulfillment of that rest." },
  { color: PURPLE, title: "Learning and Growth", body: "Many theologians (including C.S. Lewis and N.T. Wright) speculate that the new creation will involve ongoing learning, discovery, and growth — not because we will be incomplete but because the knowledge of God is inexhaustible. The infinity of God means that the exploration of who he is will be eternally deepening, never arriving at an end. This is not the static existence of a final state but the dynamic joy of perpetual discovery." },
];

const MISCONCEPTIONS = [
  { id: "mc1", title: "\"Heaven Is Sitting on Clouds Playing Harps\"", body: "This is medieval folk imagery, not biblical theology. The Bible describes the new creation as a renewed physical world — eating, drinking (Matthew 26:29), governing, building, learning. The resurrection body is physical. The new earth is a place of activity, creativity, and joy. The harps-and-clouds image produces the Christian anxiety that 'eternity sounds boring' — which is simply the wrong picture. N.T. Wright: 'People often think that heaven is a kind of rest home for the soul. The New Testament says nothing like that.'" },
  { id: "mc2", title: "\"We Will Be Disembodied Spirits\"", body: "Christian hope is explicitly resurrection of the body, not the immortality of the soul in a non-physical state. Paul's entire argument in 1 Corinthians 15 is against those who thought resurrection was unnecessary. The incarnation — God permanently taking on human flesh — is the supreme statement that embodiment is good and eternal. The destiny of redeemed humanity is not escape from the body into pure spirit but bodily resurrection into the new creation." },
  { id: "mc3", title: "\"Everyone Gets Their Own Planet\" or \"Becomes an Angel\"", body: "Neither has biblical support. The new creation is a single renewed earth, centered on the New Jerusalem, with God dwelling among his people. Humans do not become angels — these are different orders of being. Angels in the NT observe the church with wonder (1 Peter 1:12) — they do not become the humans they serve. The uniqueness of humanity as image-bearers is not dissolved but fulfilled in the resurrection." },
  { id: "mc4", title: "\"Heaven Is a Reward for Being Good\"", body: "Heaven is not earned by good behavior — it is inherited through faith in Christ. 'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God' (Ephesians 2:8). The entrance requirement is not moral merit but union with Christ. The new creation is given to those who are 'in Christ,' which is a status of grace, not achievement. This does not mean behavior is irrelevant — those without evidence of genuine faith have reason to examine themselves — but the basis is always grace." },
];

const VIDEOS = [
  { videoId: "4Cm8MHjBRpI", title: "What Will Heaven Be Like? — N.T. Wright" },
  { videoId: "Gi0yBCRSmvo", title: "The New Creation — Randy Alcorn" },
  { videoId: "LlMJyNNF4Y0", title: "Heaven: Solid Ground — Tim Keller" },
  { videoId: "F7eHxZlIfOE", title: "What Is the New Jerusalem? — Michael Heiser" },
  { videoId: "zP3JDEWlaXc", title: "Resurrection Bodies and the New Earth — John Piper" },
];

export default function HeavenGuide() {
  const [tab, setTab] = useLocalStorage("vine_heaven_tab", "overview");
  const [intOpen, setIntOpen] = useLocalStorage("vine_heaven_int", "");
  const [ncOpen, setNcOpen] = useLocalStorage("vine_heaven_nc", "");
  const [mcOpen, setMcOpen] = useLocalStorage("vine_heaven_mc", "");
  const [journal, setJournal] = useLocalStorage("vine_heaven_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(212,119,6,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  const cards4 = (items: { color: string; title: string; body: string }[]) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((p, i) => (
        <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
          <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
          <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(212,119,6,0.12)", border: `1px solid rgba(212,119,6,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: "1rem" }}>
            ESCHATOLOGY · HEAVEN & NEW CREATION
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Heaven and the New Creation
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            What does the Bible actually say about heaven? Far more concrete and physical — and far more glorious — than the popular caricature. A comprehensive guide to the intermediate state, new creation, resurrection bodies, and what we will do for eternity.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? "rgba(212,119,6,0.12)" : "transparent", color: tab === t.id ? GOLD : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(212,119,6,0.07)", border: `1px solid rgba(212,119,6,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Not Escape — Restoration</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                The popular Christian imagination of heaven — disembodied souls floating on clouds, playing harps, doing nothing in particular forever — bears almost no resemblance to the biblical picture. The New Testament's hope is bodily resurrection, the renewal of creation, the descent of the New Jerusalem, and the permanent dwelling of God among his people in a physical world that is healed of everything that mars it.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                N.T. Wright: <em>"Heaven is important, but it's not the end of the world."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: GOLD, icon: "☁️", title: "Heaven Now", body: "The intermediate state — believers with Christ, consciously, between death and resurrection. Real but temporary." },
                { color: PURPLE, icon: "🌍", title: "New Earth", body: "The final state is not disembodied heaven but a renewed physical creation — the earth transformed, not discarded." },
                { color: BLUE, icon: "🏙️", title: "New Jerusalem", body: "God's city descends to earth. The whole creation becomes what the temple was — saturated with divine presence." },
                { color: GREEN, icon: "🏃", title: "Resurrection Bodies", body: "Physical, glorious, imperishable bodies — the same person raised and transformed, free from sin, death, and decay." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "intermediate" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Intermediate State</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>What happens between death and resurrection? The intermediate state is the period between an individual's death and the final resurrection — when believers are with Christ but have not yet received their resurrection bodies.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(INTERMEDIATE_ITEMS, intOpen, setIntOpen)}</div>
          </div>
        )}

        {tab === "new-creation" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The New Creation</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The ultimate Christian hope is not escape from the earth but the renewal of the earth — a new creation where all that sin corrupted is restored and surpassed.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(NEW_CREATION_ITEMS, ncOpen, setNcOpen)}</div>
          </div>
        )}

        {tab === "new-jerusalem" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The New Jerusalem</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Revelation 21-22 gives the most detailed picture of the final state in all of Scripture — the New Jerusalem descending to the new earth, the eternal dwelling place of God and his people.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(NEW_JERUSALEM)}</div>
          </div>
        )}

        {tab === "resurrection-body" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Resurrection Bodies</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>1 Corinthians 15 is Paul's most extended treatment of the resurrection body — physical, transformed, continuous with the present body, and incomparably more glorious.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(RESURRECTION_BODY)}</div>
          </div>
        )}

        {tab === "what-we-do" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>What We Will Do in Eternity</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The biblical answer to 'what will we do in heaven' is far more specific and active than the popular imagination of passive rest. Worship, governance, work, rest, exploration — all in the presence of God.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(WHAT_WE_DO)}</div>
          </div>
        )}

        {tab === "misconceptions" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Common Misconceptions about Heaven</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Many of the most common Christian assumptions about heaven are not biblical — they come from medieval imagery, Greek philosophy, or folk theology. Here are the most important corrections.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(MISCONCEPTIONS, mcOpen, setMcOpen)}</div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>How has your picture of heaven changed through this guide? What does the hope of the new creation change about how you live now? How does the resurrection body speak to you in light of any suffering, disability, or loss you currently carry?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on heaven, the new creation, and the Christian hope of resurrection.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
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
