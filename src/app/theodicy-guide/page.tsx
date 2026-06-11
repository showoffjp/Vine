"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "logical", label: "Logical Problem" },
  { id: "evidential", label: "Evidential Problem" },
  { id: "theodicies", label: "Theodicies" },
  { id: "scripture", label: "Scripture & Lament" },
  { id: "cross", label: "The Cross" },
  { id: "pastoral", label: "Pastoral Response" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SUFFERING_TEXTS = [
  { ref: "Job 1:20–21", text: "Job got up and tore his robe and shaved his head. Then he fell to the ground in worship... 'The LORD gave and the LORD has taken away; may the name of the LORD be praised.'", color: GOLD },
  { ref: "Psalm 22:1–2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer.", color: BLUE },
  { ref: "Romans 8:18, 28", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us... And we know that in all things God works for the good of those who love him.", color: GREEN },
  { ref: "2 Corinthians 4:17", text: "For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.", color: TEAL },
  { ref: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", color: PURPLE },
];

const PROBLEM_OF_EVIL_TYPES = [
  {
    title: "Natural Evil",
    desc: "Suffering caused by natural processes — earthquakes, tsunamis, cancer, birth defects, famines. No human agent is directly responsible. This raises the most acute form of the problem: why would a good God design a world with these features?",
    color: BLUE,
  },
  {
    title: "Moral Evil",
    desc: "Suffering caused by free human choices — murder, abuse, war, injustice, exploitation. Raises questions about human freedom vs. divine intervention. Could God prevent moral evil without eliminating human freedom?",
    color: RED,
  },
  {
    title: "The Distribution Problem",
    desc: "Not just the existence but the distribution of suffering. Why do the innocent suffer while the wicked prosper? Why do children experience terrible suffering before they can make meaningful choices? Why does suffering fall on the vulnerable?",
    color: GOLD,
  },
];

const THEODICIES = [
  {
    title: "Free Will Defense (Alvin Plantinga)",
    desc: "God could not create free creatures who always freely choose good. A world with free creatures capable of love is better than a world of moral robots who cannot love. God permits moral evil as the cost of genuine freedom. Plantinga argues this defeats the logical problem of evil conclusively — it is not internally inconsistent for God and evil to coexist.",
    strength: "Successfully addresses the logical problem of evil. Widely accepted among philosophers.",
    weakness: "Doesn't address natural evil (earthquakes, disease) — which involves no human freedom.",
    color: GREEN,
  },
  {
    title: "Soul-Making Theodicy (John Hick)",
    desc: "God created humans not perfect but perfectible. The world is a 'vale of soul-making' — a place for moral and spiritual development that requires adversity. Virtues like courage, compassion, and perseverance can only be developed through real difficulty. A pain-free world would produce shallow, undeveloped persons.",
    strength: "Accounts for why a good God would not eliminate all suffering — growth requires challenge.",
    weakness: "Doesn't explain vast suffering beyond what soul-making requires. Speculative about God's developmental purposes.",
    color: BLUE,
  },
  {
    title: "Greater Good Theodicy",
    desc: "God permits evils because they are necessary conditions for greater goods that could not otherwise exist. The specific goods may be unknown to us — hence 'skeptical theism': our cognitive limitations mean we should not expect to understand God's reasons for every particular evil.",
    strength: "Consistent with Scripture's perspective that God works all things for good (Rom 8:28) and his ways are higher than ours (Isa 55:8–9).",
    weakness: "Risk of 'using people as means' — can seem to justify any evil for abstract future goods. Demands trust in an opaque divine purpose.",
    color: TEAL,
  },
  {
    title: "Skeptical Theism",
    desc: "Given the vast cognitive gap between humans and God, we should expect that if God had reasons for permitting evils, we would likely not be able to understand them. Our inability to see a good reason for a particular evil does not mean there isn't one. Michael Bergmann, Stephen Wykstra.",
    strength: "Humility about divine reasoning is biblical (Job 38–41; Isa 55:8–9; Rom 11:33–36).",
    weakness: "Risk of cutting off moral reasoning about evil entirely — if we can never know God's reasons, how do we object to anything?",
    color: PURPLE,
  },
  {
    title: "Open Theism Response",
    desc: "Greg Boyd and others argue God does not foreknow or foreordain all events — including evil. God grieves with us when evil occurs because it was not his will. Theodicy is easier because God is not responsible for designing specific evils. However, this raises questions about God's sovereignty and the reliability of his promises.",
    strength: "God's genuine grief over evil; theodicy becomes more intuitive.",
    weakness: "Sacrifices divine omniscience and sovereignty. Raises questions about whether God can guarantee a good outcome.",
    color: GOLD,
  },
];

const SCRIPTURE_LAMENT = [
  {
    title: "The Psalms of Lament",
    desc: "One-third of the Psalter consists of laments — raw, honest cries of pain and confusion addressed directly to God. Psalm 22, 44, 88, 102, and many others give words to anguish. The lament tradition affirms: God is addressed in suffering, not avoided; the relationship survives the pain; protest is not faithlessness.",
    color: BLUE,
  },
  {
    title: "Job: God on Trial",
    desc: "Job is a sustained theological wrestling with innocent suffering. Job's friends offer theodicy — conventional explanations for his suffering (he must have sinned). God vindicates Job over his friends (42:7). The book does not explain Job's suffering — it shows Job encountering God in the mystery. The answer is not a proposition but a presence.",
    color: GOLD,
  },
  {
    title: "Lamentations: National Grief",
    desc: "Five poems of communal lament over Jerusalem's destruction. Unsparing in describing pain and loss. Yet even here: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning' (3:22–23). Grief and trust coexist.",
    color: TEAL,
  },
  {
    title: "Jesus's Cry of Dereliction",
    desc: "'My God, my God, why have you forsaken me?' (Matt 27:46). Jesus quotes Psalm 22 from the cross. He enters into the darkest human experience — godforsakenness — and redeems it from within. The resurrection is God's ultimate answer to the cry of lament.",
    color: GREEN,
  },
];

const CROSS_POINTS = [
  {
    title: "God Suffers With Us",
    desc: "The cross reveals that God is not an unmoved bystander to suffering. In Christ, God entered human suffering — the eternal Son experienced abandonment, torture, and death. Jurgen Moltmann: 'The crucified God.' This does not explain suffering, but it transforms our posture in it.",
    color: RED,
  },
  {
    title: "Redemption Through Suffering",
    desc: "The greatest good in history — human salvation — came through the greatest suffering — the cross. This does not mean all suffering is redemptive, but it shows that God can bring ultimate good from profound evil. The cross is the paradigm for how God works: through death to resurrection.",
    color: GREEN,
  },
  {
    title: "The Resurrection as Promise",
    desc: "The resurrection is God's guaranteeing pledge that evil and death do not have the final word. 'He will wipe every tear from their eyes' (Rev 21:4). The specific answer to suffering may be eschatological — not resolved in this age but in the age to come. The resurrection is not a platitude but a cosmic vindication.",
    color: GOLD,
  },
  {
    title: "Solidarity Not Explanation",
    desc: "The cross does not primarily give an explanation for suffering — it gives a companion in it. Jesus's cry of dereliction is the cry of everyone who has felt abandoned by God. He did not suffer instead of suffering — he suffered with us, and ahead of us, to meet us on the other side.",
    color: BLUE,
  },
];

const PASTORAL_POINTS = [
  { title: "Presence Before Answers", desc: "Job's friends sat with him in silence for seven days (Job 2:13) — the only time they are praised. When someone is suffering, the first call is not to explain but to be present. Theodicy, however true, can wound when offered too quickly." },
  { title: "Validate the Lament", desc: "The psalms of lament are in the canon — God approves of honest grief expressed to him. Do not rush past the grief to comfort. 'Mourn with those who mourn' (Rom 12:15) before 'all things work together for good.'" },
  { title: "Distinguish Pastoral and Philosophical", desc: "Philosophical theodicy may be true, but it is rarely the right thing to say to a suffering person. 'Your suffering is building your soul' can feel brutal. The philosophical answer and the pastoral response are different tasks for different contexts." },
  { title: "Point to the Cross", desc: "Not as a quick answer, but as the foundation of solidarity and hope: God has been in the darkness. The resurrection is the guarantee of a final resolution. This can be said with reverence, not glibness." },
  { title: "Long-Term Accompaniment", desc: "Suffering often lasts a long time. Ministry in suffering is a marathon, not a sprint. Checking in weeks and months later, when others have forgotten, is one of the most powerful things a community can do." },
  { title: "Don't Offer Premature Closure", desc: "Not all questions will be answered in this life. It is faithful to say 'I don't know why this happened' rather than to offer false comfort. The mystery of suffering is real, and honest acknowledgment of that mystery honors the sufferer." },
];

const VIDEOS = [
  { videoId: "RmABgY-y5e4", title: "Why Does God Allow Suffering? — Tim Keller" },
  { videoId: "oP5SnJk5VoQ", title: "The Problem of Evil — Alvin Plantinga" },
  { videoId: "4FXeFH8u-tc", title: "Where Is God When It Hurts? — Philip Yancey" },
  { videoId: "3VNS4fSM-tA", title: "Lament and Grief in the Christian Life" },
  { videoId: "y7gZhE7ZTAM", title: "The Crucified God — N.T. Wright" },
];

export default function TheodicyGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_theod_tab", "overview");
  const [openType, setOpenType] = usePersistedState<string>("vine_theod_type", "");
  const [openTheod, setOpenTheod] = usePersistedState<string>("vine_theod_theod", "");
  const [journal, setJournal] = usePersistedState<string>("vine_theod_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>⚡</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: RED, textTransform: "uppercase" }}>Theology & Apologetics</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Theodicy: Why Does God Allow Suffering?
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            If God is all-good and all-powerful, why is there so much suffering? This ancient question — theodicy — is both philosophy&apos;s hardest problem and every sufferer&apos;s most personal one. This guide covers the arguments, the theodicies, what Scripture says, and how to walk with people in pain.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? RED : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? RED : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Scripture on Suffering</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SUFFERING_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Types of Evil and Suffering</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {PROBLEM_OF_EVIL_TYPES.map((item, i) => {
                  const key = String(i);
                  const open = openType === key;
                  return (
                    <div key={item.title}>
                      <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenType(open ? "" : key)}>
                        <span>{item.title}</span>
                        <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                      </button>
                      {open && (
                        <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                          <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "logical" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>The Logical Problem of Evil</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              J.L. Mackie&apos;s classic formulation: God is omnipotent + God is omniscient + God is omnibenevolent + evil exists. These four propositions are (allegedly) logically inconsistent — at least one must be false.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "The Argument", points: ["God is omnipotent (all-powerful).", "God is omniscient (all-knowing).", "God is omnibenevolent (all-good).", "Evil exists.", "Therefore: God does not exist (these four cannot all be true)."], color: RED },
                { title: "Plantinga's Free Will Defense", points: ["Even an omnipotent God cannot create creatures who freely choose good — because making them choose good is not freedom.", "A world with free creatures is better than one without freedom.", "Therefore God and evil can coexist without contradiction.", "This is widely considered a successful refutation of the logical problem."], color: GREEN },
                { title: "Key Distinction: Defense vs. Theodicy", points: ["A defense only needs to show there is no logical contradiction.", "A theodicy attempts to explain why God actually permits evil.", "Plantinga offers a defense — he doesn't claim free will is the actual reason; he only needs to show it's possible."], color: BLUE },
              ].map((section) => (
                <div key={section.title} style={{ background: `${section.color}0A`, border: `1px solid ${section.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: section.color, marginBottom: "0.75rem" }}>{section.title}</h3>
                  {section.points.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.4rem" }}>
                      <span style={{ color: section.color, flexShrink: 0 }}>{i + 1}.</span>
                      <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "evidential" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>The Evidential Problem of Evil</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Most philosophers now argue not that God and evil are logically inconsistent, but that the amount and distribution of suffering provides strong evidence against God&apos;s existence. William Rowe&apos;s famous fawn argument.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Rowe's Argument", desc: "Consider a fawn burned in a forest fire and lying in agony for days before dying — no one knows, no one is helped. This gratuitous, pointless suffering seems to serve no greater purpose. If God exists, why not prevent it? The sheer scale of such suffering across history strongly suggests no all-good God is in control.", color: BLUE },
                { title: "Wykstra's CORNEA Response", desc: "Stephen Wykstra: given the 'condition of reasonable epistemic access,' we should only expect to see a good reason for a permitted evil if we are the kind of creatures who would be able to see it. Given our cognitive limitations relative to an infinite God, our failure to see a reason is poor evidence there isn't one.", color: GREEN },
                { title: "Talbott's Point on Distribution", desc: "The problem of why the innocent (children, the developmentally disabled, the poor) disproportionately suffer remains acute. Any theodicy must grapple with this — answers that rely on moral development through suffering struggle when the sufferers gain nothing.", color: TEAL },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "theodicies" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Major Theodicies</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              A theodicy attempts to explain how God could be just (Gk: theos + dike, &quot;God&apos;s justice&quot;) while permitting evil. Each theodicy has genuine strengths and limitations.
            </p>
            {THEODICIES.map((t, i) => {
              const key = String(i);
              const open = openTheod === key;
              return (
                <div key={t.title}>
                  <button type="button" style={accordionBtn(open, t.color)} onClick={() => setOpenTheod(open ? "" : key)}>
                    <span>{t.title}</span>
                    <span style={{ color: t.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${t.color}0A`, border: `1px solid ${t.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{t.desc}</p>
                      <p style={{ color: GREEN, fontSize: "0.9rem", marginBottom: "0.4rem" }}><strong>Strength:</strong> {t.strength}</p>
                      <p style={{ color: GOLD, fontSize: "0.9rem" }}><strong>Limitation:</strong> {t.weakness}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: BLUE, margin: 0 }}>Scripture and Lament</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The Bible does not primarily answer the philosophical problem of evil — it addresses the personal experience of suffering with a rich tradition of lament, honest complaint, and trust in the faithfulness of God.
            </p>
            {SCRIPTURE_LAMENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "cross" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: RED, margin: 0 }}>The Cross and Suffering</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The cross does not solve theodicy philosophically — it transforms it pastorally. In Christ, God has entered the worst of human suffering and pledged its ultimate redemption.
            </p>
            {CROSS_POINTS.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "pastoral" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Pastoral Response to Suffering</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PASTORAL_POINTS.map((item, i) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${GREEN}20`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: GREEN, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 800, color: GREEN, marginBottom: "0.4rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>Where are you in your own wrestling with suffering — philosophical, personal, or in walking with someone else? What has helped you most? What remains unresolved?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Theodicy</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Lament", href: "/lament" },
            { label: "Christian Suffering", href: "/christian-suffering" },
            { label: "Apologetics Guide", href: "/christian-apologetics-guide" },
            { label: "Providence of God", href: "/providence-of-god" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
