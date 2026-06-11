"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GREntry = { id: string; date: string; loss: string; lament: string; hope: string };

export default function ChristianGriefPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GREntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiangrief_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jLoss, setJLoss] = useState("");
  const [jLament, setJLament] = useState("");
  const [jHope, setJHope] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiangrief_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jLoss.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), loss: jLoss, lament: jLament, hope: jHope }, ...prev]);
    setJLoss(""); setJLament(""); setJHope("");
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
          Grief &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Grief is not a failure of faith &mdash; it is a mark of love encountering loss in a fallen world. Scripture does not tell the mourner to be strong or look on the bright side; it gives us the lament psalms and a Savior who wept at a tomb. This guide explores the theology, practice, and hope of Christian grief.
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
                title: "Grief Is Not Sin &mdash; Blessed Are Those Who Mourn (Matt 5:4)",
                body: "Jesus does not merely permit mourning; he pronounces the mourners blessed. The second Beatitude stands as a direct refutation of the prosperity-gospel instinct that equates faith with the absence of sorrow. Grief is not a spiritual malfunction. It is the appropriate human response to real loss in a world that is not yet what God intends it to be. To refuse to grieve is often to refuse to love &mdash; for grief is the price of attachment. Christian faith does not anesthetize grief but transforms its horizon: those who mourn shall be comforted. The comfort is real, but it does not come by bypassing the mourning.",
              },
              {
                title: "&ldquo;Jesus Wept&rdquo; &mdash; God Enters Human Grief (John 11:35)",
                body: "The shortest verse in Scripture is among the most theologically loaded. When Jesus arrives at Lazarus&rsquo;s tomb and encounters Mary weeping, he does not immediately reassure her that everything is fine. He is deeply moved in his spirit and troubled &mdash; the Greek embrimaomai suggests something closer to anguish than gentle sadness &mdash; and he weeps. This is the Son of God, who already knows he is about to raise Lazarus, entering fully into human grief. It is not performance. The incarnation means that God has stood inside human loss. The God Christians pray to in grief is not a distant observer; he is the one who has wept at a tomb.",
              },
              {
                title: "The Lament Psalms &mdash; Scripture&rsquo;s Grammar of Grief (Ps 22; Ps 88)",
                body: "More than a third of the Psalter consists of lament &mdash; raw, unfiltered cries of abandonment, confusion, anger, and sorrow directed toward God. Psalm 22 opens with the cry Jesus quotes from the cross: My God, my God, why have you forsaken me? Psalm 88 ends with darkness as its final word. These are not failures of faith but its exercise. The lament psalms give permission to grieve honestly before God &mdash; not merely to suppress loss behind pious-sounding phrases. Walter Brueggemann observes that the loss of lament in the church has produced a shallow, dishonest faith that cannot hold the weight of real suffering. To lament is to take God seriously enough to accuse him of absence.",
              },
              {
                title: "Stages of Grief and Christian Anthropology",
                body: "The Kubler-Ross stages (denial, anger, bargaining, depression, acceptance) describe patterns many grievers recognize, though grief is rarely linear. Christian theology adds a dimension: the human person is made for permanent communion with God and with others, so death is not merely a natural event but the intrusion of an enemy (1 Cor 15:26). Grief in Christian perspective is therefore not merely psychological adjustment but a theological reality &mdash; mourning the rupture of what is meant to be permanent. This explains why grief for a Christian is simultaneously more profound (death is genuinely wrong) and more hopeful (death is genuinely defeated). Both dimensions should be honored.",
              },
              {
                title: "Grief and the Hope of Resurrection (1 Thess 4:13-14)",
                body: "Paul does not tell the Thessalonians not to grieve; he tells them not to grieve as those who have no hope. The distinction is crucial. Christian grief is real grief &mdash; tears, absence, the particular weight of a specific person no longer present. But it is grief inside a larger story. The resurrection of Jesus is not consolation mythology; Paul treats it as a historical event with cosmic implications. Because Jesus was raised, those who belong to him will be raised. Grief is real; so is the hope. The resurrection does not make grief disappear, but it gives it a horizon. N.T. Wright&rsquo;s Surprised by Hope explores what resurrection hope actually means &mdash; not disembodied heaven but new creation, which makes the loss of embodied relationships genuinely temporary.",
              },
              {
                title: "Grief After Miscarriage, the Death of a Child, and Disenfranchised Loss",
                body: "Some losses are not socially recognized in proportion to their weight &mdash; miscarriage, the death of a parent after a long illness (&ldquo;wasn&rsquo;t it expected?&rdquo;), estrangement from a living child, grief over a prodigal. These disenfranchised griefs can be among the most isolating precisely because the mourner receives inadequate support. The church has too often handled miscarriage with silence. But the Psalms have room for losses that are not publicly acknowledged; God hears what the community does not notice. Pastoral theology attends to the specific shape of the loss, not a generic grief protocol.",
              },
              {
                title: "How the Church Cares for the Grieving &mdash; Ministry of Presence",
                body: "Job&rsquo;s friends get one thing exactly right: they sit with him in silence for seven days before they speak. The church&rsquo;s primary gift to the grieving is presence, not explanation. The impulse to explain the loss (&ldquo;God must have a plan&rdquo;, &ldquo;they&rsquo;re in a better place&rdquo;) often serves the comforter more than the grieving. What the bereaved typically need first is simply someone willing to stay close without resolving the grief. Meals, physical presence, the willingness to hear the same story again &mdash; these are the actual works of mercy that carry people through loss. The ministry of presence is the incarnational ministry, modeled by the God who enters rather than explains.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
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
              "Pray a lament psalm slowly &mdash; Psalm 22, 42, 77, or 88 &mdash; as your own prayer. Do not rush to the hopeful verses; let the full weight of the complaint stand before God. Grievers who have never been given permission to be angry or confused with God often find these psalms liberating.",
              "Name the specific loss rather than abstracting it. In a journal or in prayer, write out exactly what is gone: not just &ldquo;my mother&rdquo; but the particular sound of her voice, the Sunday dinners, the things you never said. Specificity in grief is not wallowing; it is honesty, and it is the beginning of real mourning rather than managed distance.",
              "Find a witness. Grief that is witnessed &mdash; shared with one person who does not flinch, offer explanations, or try to fix &mdash; is grief that can move. A grief support group, a therapist, a pastor, or a trusted friend who will simply hear are among the most valuable gifts in bereavement.",
              "Maintain a modest rhythm of worship, even when it feels hollow. The Psalms model this: bringing the grief into the gathered community, doing the liturgy even when you cannot feel it, trusting that the corporate body carries you when you cannot carry yourself. Do not wait until you feel like worshipping; bring the grief with you into the service.",
              "Attend to the body. Grief is embodied: disrupted sleep, appetite changes, physical exhaustion are normal. Basic rhythms &mdash; sleep, food, movement &mdash; are not distractions from grief work but its physical infrastructure. The ancient Christian practice of fasting in seasons of mourning acknowledges the body&rsquo;s role in grief while keeping it within a ritual container.",
              "Mark anniversaries and significant dates intentionally. The first holidays after a death, the anniversary of a loss &mdash; these are hard not by failure but by love. Plan something: a ritual, a gathering, a visit to a grave, a meal that remembers. Anticipating the hard day and shaping it deliberately is better than being ambushed by it.",
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
                name: "C.S. Lewis",
                work: "A Grief Observed",
                quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing. At other times it feels like being mildly drunk, or concussed.",
                bio: "C.S. Lewis wrote A Grief Observed in the weeks after his wife Joy Davidman died of cancer in 1960. Originally published under a pseudonym, it is not theology but raw, unprocessed experience &mdash; including honest anger at God, fears about what prayer is, and the disorientation of total loss. It remains one of the most honest accounts of grief from within Christian faith ever written, and its honesty has given permission to thousands of grievers to name what they actually feel.",
              },
              {
                name: "Nicholas Wolterstorff",
                work: "Lament for a Son",
                quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see. Suffering is the shout of &lsquo;No&rsquo; by one&rsquo;s whole existence to that over which one suffers &mdash; the shout of &lsquo;No&rsquo; by sensitive, loving human beings to their children&rsquo;s being torn from them, to friends dying, to the helplessness of those they cherish.",
                bio: "Nicholas Wolterstorff was a philosopher at Calvin College and Yale when his twenty-five-year-old son Eric died in a mountaineering accident in 1983. Lament for a Son is his response &mdash; a philosophically sophisticated but deeply personal meditation on grief, theodicy, and Christian hope. Wolterstorff refuses cheap comfort and insists that grief is the appropriate response to the wrongness of death, while holding open the hope of resurrection.",
              },
              {
                name: "Walter Brueggemann",
                work: "The Message of the Psalms",
                quote: "The Psalms of lament are acts of bold faith, albeit a transformed faith. They are addressed to God. They assume that God takes the petitioner seriously. They believe that God can make a difference. They insist that the relationship with God is not to be honored by a pretense of joy when there is sorrow.",
                bio: "Walter Brueggemann is one of the most significant Old Testament theologians of the twentieth century. His work on the Psalms, particularly his typology of psalms of orientation, disorientation, and new orientation, has been enormously influential. His argument that the loss of lament in contemporary Christian worship produces a shallow, dishonest faith has been widely cited by pastors and theologians working with suffering communities.",
              },
              {
                name: "Jerry Sittser",
                work: "A Grace Disguised",
                quote: "I did not go through pain and come out the other side; instead, I lived in it and found within that pain the grace to survive and eventually grow. I did not get over the loss of my loved ones; rather, I absorbed the loss into my life until it became part of who I am.",
                bio: "Jerry Sittser lost his wife, mother, and four-year-old daughter in a single car accident caused by a drunk driver. A Grace Disguised is his account of the years that followed &mdash; a sustained theological reflection on catastrophic loss that refuses both easy consolation and despair. His metaphor of the soul expanding to hold more grief, rather than the grief diminishing, has resonated with many who have found that loss becomes part of identity rather than something to recover from.",
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
              { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they shall be comforted." },
              { ref: "John 11:35", text: "Jesus wept." },
              { ref: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest." },
              { ref: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
              { ref: "Lamentations 3:17-23", text: "My soul is bereft of peace; I have forgotten what happiness is; so I say, &ldquo;My endurance has perished; so has my hope from the LORD.&rdquo; Remember my affliction and my wanderings, the wormwood and the gall! My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
              { ref: "1 Thessalonians 4:13-14", text: "But we do not want you to be uninformed, brothers and sisters, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep." },
              { ref: "Romans 8:18", text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us." },
              { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Grief Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What loss are you grieving?</label>
                  <textarea
                    value={jLoss}
                    onChange={e => setJLoss(e.target.value)}
                    placeholder="Name the specific person, relationship, or thing that is gone..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What lament do you need to bring before God?</label>
                  <textarea
                    value={jLament}
                    onChange={e => setJLament(e.target.value)}
                    placeholder="Say what you actually feel — anger, confusion, abandonment, sorrow..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What hope, however fragile, do you hold?</label>
                  <textarea
                    value={jHope}
                    onChange={e => setJHope(e.target.value)}
                    placeholder="Even a flicker — resurrection, the steadfast love of the LORD, the promise of comfort..."
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
                {e.loss && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Loss</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.loss}</p></div>}
                {e.lament && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Lament</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.lament}</p></div>}
                {e.hope && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Hope</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.hope}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="Y4AGkCRcN_M" title="Grief and Lament: A Christian Perspective" />
            <VideoEmbed videoId="CtJGGb4BQeA" title="Jesus Wept: God Enters Human Grief (John 11)" />
            <VideoEmbed videoId="Q3R0H7o8r0w" title="The Psalms of Lament &mdash; Praying Through Darkness" />
            <VideoEmbed videoId="Z8s_MQfLmBk" title="Grief, Hope, and the Resurrection &mdash; 1 Thessalonians 4" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
