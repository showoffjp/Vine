"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Grief in Scripture", "The Lament Tradition", "Grief and Resurrection", "Stages of Grief", "How the Church Can Help", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Grief in Scripture",
    heading: "Grief in Scripture: What the Bible Says About Mourning",
    paragraphs: [
      "The Bible does not flinch at grief. From the opening mourning of Adam and Eve expelled from Eden to the closing tears wiped away in Revelation 21, Scripture engages human sorrow with unflinching honesty. The shortest verse in the Bible &mdash; &ldquo;Jesus wept&rdquo; (John 11:35) &mdash; is also one of its most theologically dense. Standing at the tomb of Lazarus, knowing that he was about to raise his friend, the Son of God wept anyway. The resurrection did not negate the tears. The knowledge of what was coming did not prevent the grief of the present. Jesus entered the mourning of Mary and Martha before he resolved it. This is the pattern of the incarnation: God does not stand outside human suffering and offer explanations. He enters it and weeps with those who weep.",
      "The Psalms are one-third lament &mdash; raw, honest cries of complaint, accusation, and desolation addressed directly to God. Psalm 22 opens with the most piercing cry in Scripture: &ldquo;My God, my God, why have you forsaken me?&rdquo; These were the words Jesus prayed from the cross. They are not words of smooth theological resolution; they are words of felt abandonment. Psalm 88 is even more remarkable: it is the only psalm that ends without a turn toward hope. Its final word is &ldquo;darkness.&rdquo; God permitted that psalm to end in darkness because he knows that some nights do not end by morning, and grief does not always resolve on schedule. The inclusion of Psalm 88 in Scripture is a gift to every person whose sorrow has outlasted their church community&rsquo;s patience with it.",
      "Job&rsquo;s grief is among the most comprehensive in the Bible. In a single day he loses his children, his wealth, and his health. His response is not stoic acceptance; it is the full weight of human devastation: &ldquo;Naked I came from my mother&rsquo;s womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised&rdquo; (Job 1:21). This is not a denial of grief; it is grief held within a theological framework. And then, as the book progresses, Job moves from doxology into raw anger, demanding an audience with God to argue his case. Both responses are in the book. Both are honored. God&rsquo;s verdict at the end is stunning: he says Job, who argued and accused and demanded answers, spoke rightly about him. His friends, who offered tidy theological explanations, did not.",
      "David&rsquo;s mourning for his son Absalom is among the most visceral expressions of parental grief in all of literature: &ldquo;O my son Absalom! My son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!&rdquo; (2 Samuel 18:33). David is a man of enormous faith &mdash; described as &ldquo;a man after God&rsquo;s own heart&rdquo; &mdash; and his grief is overwhelming, public, and without immediate theological consolation. Scripture records it without comment or correction. The man who wrote &ldquo;The Lord is my shepherd&rdquo; also wept without restraint for a son who had betrayed him. Both are in the Bible. Both are David.",
      "Paul&rsquo;s famous counsel in 1 Thessalonians 4:13 is often misread. He says: &ldquo;Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.&rdquo; The controlling phrase is &ldquo;like the rest of mankind, who have no hope&rdquo; &mdash; not &ldquo;so that you do not grieve.&rdquo; Paul does not prohibit Christian grief; he distinguishes its shape. Christian grief is grief with a resurrection horizon. It is not less real than other grief; it is grief that exists within a larger story. The gospel does not say &ldquo;don&rsquo;t feel it.&rdquo; It says: feel it fully, and feel it within the claim that the resurrection of Jesus makes on every death.",
      "The crucial distinction the Bible draws is between grief and faithlessness &mdash; but this distinction is far more subtle than it is often presented. Grief is the correct response to loss; it is love&rsquo;s honest answer to the absence of someone or something genuinely precious. Faithlessness is the conclusion that God has failed, that death is final, that hope is impossible. These look similar from the outside but are theologically opposite. The psalms of lament hold both in the same breath: raw accusation and tenuous trust, devastation and held hope, darkness and the refusal to let the darkness be the final word. Christians who are told that their grief is evidence of insufficient faith are being given a theology that is itself unfaithful to Scripture &mdash; a theology that would have corrected Jesus for weeping at Lazarus&rsquo;s tomb.",
    ],
  },
  {
    id: "The Lament Tradition",
    heading: "The Lament Tradition: A Biblical Practice of Grief",
    paragraphs: [
      "Lament is one of the oldest and most neglected spiritual disciplines in the Christian tradition. In the Hebrew Bible, lament is not a failure of faith but its most urgent expression &mdash; faith that refuses to be silent, that demands of God what it has been promised, that brings the full weight of human suffering directly into the divine presence. Walter Brueggemann, the most influential Old Testament scholar of the late twentieth century, identified lament as one of the central speech acts of the psalter and argued that the suppression of lament in Christian worship is one of the most pastorally damaging theological moves the church has made. When communities cannot lament, he argued, they cannot accompany their suffering members; they can only manage them.",
      "The structure of the biblical lament psalm follows a recognizable pattern, though not always in exactly the same order. First is the address: the psalmist does not simply weep into the void but turns to God specifically. This is itself an act of faith: to cry &ldquo;My God&rdquo; is to assert a relationship even while questioning it. Second is the complaint: the psalmist names what is wrong, often with startling directness &mdash; God is absent, God is sleeping, God has abandoned his servant, the enemies have prevailed. Third is the petition: the lament is not merely a complaint but a demand for divine action. &ldquo;Awake, Lord! Why do you sleep? Rouse yourself!&rdquo; (Psalm 44:23). Fourth, in most lament psalms, is a movement toward trust &mdash; not resolution, but the remembrance of who God has been and the assertion, however tentative, that he will act again.",
      "Psalm 88 is the lament tradition at its most uncompromising. It is the only psalm in the psalter that ends without any turn toward hope or praise. Its final line &mdash; &ldquo;darkness is my closest friend&rdquo; &mdash; stands as the last word of a complete psalm in Holy Scripture. This is extraordinary. God did not require the psalmist to produce a hopeful resolution before including his prayer in the prayer book of Israel. He let the darkness stand. This psalm has been a lifeline for people whose grief has been told by well-meaning Christians that it should be over by now. Psalm 88 says: it is allowed. God can receive prayers that do not resolve. He already has.",
      "The reason lament is not despair is theological rather than emotional. Lament is addressed to God; despair has concluded that there is no God to address. The lamenting psalmist accuses God, questions God, demands action from God &mdash; but these are all speech acts directed at a God who is present enough to be held accountable. Despair is the silence after the conclusion that there is no one there. The distinction is not always felt in the moment; the person in acute grief may not experience a clear boundary between lament and despair. But the practice of lament &mdash; of turning grief into prayer, of directing sorrow toward God rather than merely around him &mdash; keeps a thread of connection alive even when no comfort is felt.",
      "Brueggemann&rsquo;s framework of psalms of orientation, disorientation, and new orientation gave the Christian world a vocabulary for understanding why lament is necessary rather than regrettable. Psalms of orientation celebrate the world as good, ordered, and blessed; they are the voice of a life going well. Psalms of disorientation &mdash; the lament psalms &mdash; arise when that ordered world has collapsed: when loss, betrayal, illness, or injustice shatters the settled sense that God is present and active. The movement toward new orientation is not a return to the old equilibrium but an emergence, through disorientation, into a deeper and more seasoned trust &mdash; a faith that has been tested by the darkness and knows something about God that only the darkness can teach. This framework gave pastors permission to let grief be grief, to resist the pressure to rush the grieving person from disorientation to praise before the darkness has been honestly inhabited.",
      "The recovery of lament in Christian worship is one of the most urgent pastoral needs of the contemporary church. Services structured exclusively around celebration and victory have no room for the person who is devastated. The grieving person sits in a pew surrounded by upraised hands and concludes that their sorrow is out of place, that faith should produce visible peace, that they are doing something wrong. A worship life that includes the psalms of lament &mdash; prayed honestly, not merely recited &mdash; creates a community in which grief has a home. Such communities look most like Jesus at the tomb of Lazarus: willing to enter the darkness, to weep with those who weep, and to wait for the resurrection rather than rushing it.",
    ],
  },
  {
    id: "Grief and Resurrection",
    heading: "Grief and Resurrection: The Eschatological Horizon",
    paragraphs: [
      "The Christian hope for the dead is not vague spiritual consolation but a specific, historical, bodily claim: that Jesus rose from the dead and that, because he did, those who have died in him will also rise. Paul grounds the hope of 1 Thessalonians 4:13-18 not in philosophical arguments about the immortality of the soul but in the concrete event of the resurrection: &ldquo;We believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him&rdquo; (4:14). The resurrection of Jesus is the firstfruits of a coming general resurrection. Christian grief exists within this theological horizon: the loss is real, the sorrow is genuine, but death&rsquo;s claim is contested by the empty tomb.",
      "C.S. Lewis&rsquo;s &ldquo;A Grief Observed&rdquo; is perhaps the most important document in modern Christian literature on grief precisely because it refuses to make the resurrection do the emotional work too quickly. Lewis was the twentieth century&rsquo;s most formidable Christian apologist &mdash; the man who wrote &ldquo;The Problem of Pain&rdquo; arguing for the coherence of God&rsquo;s goodness. Then his wife Joy died, and he wrote in his notebooks: &ldquo;No one ever told me that grief felt so like fear.&rdquo; He describes God, in the first pages, as a cosmic sadist who slams the door in his face. The book does not resolve into neat affirmations of resurrection hope. It is a record of a mind and heart trying to hold onto faith while the ground dissolves. And then, eventually &mdash; not all at once, not definitively &mdash; something begins to shift. Lewis does not abandon the resurrection; he learns to hold it differently, with grief rather than against it.",
      "Augustine&rsquo;s grief for his mother Monica is one of the most moving passages in the &ldquo;Confessions.&rdquo; Monica has lived her life in prayer for her son, and when Augustine finally comes to faith, she tells him: &ldquo;There was one thing for which I wished to tarry a little in this life, and that was that I might see you a Catholic Christian before I died. My God has done this for me more abundantly than I could have asked.&rdquo; Days later she died. Augustine&rsquo;s grief is enormous and he is ashamed of it &mdash; he has been told that a robust faith should produce equanimity in the face of death. But his tears will not be suppressed. He finally weeps freely, and then asks: &ldquo;And let him weep who so wills, who has so large a charity, as to feel himself undone by my grief. And let him read, and weep if he read without callousness.&rdquo; Even the great theologian of the resurrection wept for his mother &mdash; and wrote about it honestly.",
      "Revelation 21 is the eschatological horizon that gives Christian grief its ultimate frame: &ldquo;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away&rdquo; (21:4). This is not the denial of grief but its promised end. The tears exist; they are real; they belong to this age. But they will be wiped away &mdash; personally, by the hand of God. The bodily, specific, tactile image of divine comfort &mdash; a hand wiping tears from a face &mdash; refuses the abstraction of generic spiritual consolation. The New Jerusalem is not a metaphor for feeling better; it is the promised eschatological reality toward which Christian grief is oriented. We grieve because we are not there yet. We hope because the God who promised it raised Jesus from the dead.",
      "The resurrection of the body &mdash; not merely the immortality of the soul &mdash; is the specific Christian hope. The tradition shaped by Greek philosophy has often drifted toward a vision of death as the soul&rsquo;s liberation from the body, with the implication that grief for a lost body is misplaced. But Scripture is consistently embodied in its eschatology. Paul uses the image of a seed planted in the ground: the body is not discarded but transformed, sown in weakness and raised in power (1 Corinthians 15:42-44). This means that the specific person &mdash; in all their embodied particularity, with their voice and their laugh and their hands &mdash; is what the resurrection promises to restore. Christian grief is therefore grief for a real person who is genuinely absent, not merely for a shell that has been vacated. The loss is total, and the hope is equally total.",
      "Holding grief within resurrection hope is a spiritual discipline, not a natural emotional state. In the acute phase of bereavement, the resurrection can feel like a theological abstraction that does nothing to address the concrete absence of the person who is gone. This is not faithlessness; it is the honest experience of grief. The practice of resurrection hope is the slow, daily work of returning to the claim &mdash; not trying to feel it before it arrives, but rehearsing it in prayer, in community, in worship. &ldquo;I believe in the resurrection of the body and the life everlasting&rdquo; prayed from within grief rather than above it is one of the most costly and faithful acts a Christian can perform. The hope is not a feeling to be maintained; it is a promise to be held, even when holding it feels like holding a rope in the dark.",
    ],
  },
  {
    id: "Stages of Grief",
    heading: "Stages of Grief: K&uuml;bler-Ross and Christian Theology",
    paragraphs: [
      "Elisabeth K&uuml;bler-Ross introduced her five stages of grief &mdash; denial, anger, bargaining, depression, and acceptance &mdash; in her 1969 book &ldquo;On Death and Dying,&rdquo; based on her work with terminally ill patients. The model has become so widely known that it has shaped the popular imagination of grief as a linear journey through five sequential emotional states. Christian theology has resources to engage each stage with depth and nuance &mdash; and has equally important things to say about the model&rsquo;s limitations, which its own author later acknowledged.",
      "Denial, in K&uuml;bler-Ross&rsquo;s framework, is the initial buffer against the shock of loss &mdash; the numbing, the sense of unreality, the feeling that this cannot be happening. Theologically, denial can be understood as the soul&rsquo;s protective response to a reality it is not yet able to receive. Christian theology does not demand immediate, clear-eyed acceptance of loss; there is no spiritual virtue in shattering a protective numbness prematurely. What Christian theology does insist is that denial cannot be the permanent posture. The call to lament &mdash; to name the loss, to bring it into prayer, to let it be what it is &mdash; is ultimately a call out of denial. But the call is gentle, patient, and paced with the capacity of the soul, not with the community&rsquo;s schedule for recovery.",
      "Anger is where grief most often frightens religious communities. The grieving person who is angry &mdash; at God, at doctors, at the person who died, at the universe &mdash; is often told, implicitly or explicitly, that anger is incompatible with faith. But the psalms of lament are filled with anger directed at God: &ldquo;Awake, Lord! Why do you sleep? Rouse yourself! Do not reject us forever&rdquo; (Psalm 44:23). Job argued his case directly with God and was vindicated for it. God&rsquo;s response to Job&rsquo;s friends &mdash; &ldquo;You have not spoken of me what is right, as my servant Job has&rdquo; (42:7) &mdash; is a divine endorsement of honest, even angry, engagement with God over the managed piety of his friends. Christian theology welcomes grief&rsquo;s anger into prayer rather than suppressing it into performance.",
      "Bargaining &mdash; the &ldquo;if only&rdquo; and &ldquo;what if&rdquo; stage, the mental replaying of decisions that might have prevented the loss &mdash; is where guilt and grief become entangled. Christian theology engages this with the doctrine of grace. The gospel insists that human beings are not in control of the outcomes of history in the way that bargaining assumes; that God&rsquo;s purposes are not overturned by human decisions; and that guilt, where it is real, is met not with the demand to carry it but with the cross that absorbs it. The pastoral challenge is to distinguish between genuine moral guilt that needs confession and absolution, and the false guilt of grief &mdash; the sense that one should have known, should have done differently, should have been there &mdash; which is grief&rsquo;s way of trying to find a cause in order to feel less powerless.",
      "Depression in grief is not the same as clinical depression, though it can precipitate it. The grief-related depression K&uuml;bler-Ross describes is the experience of the full weight of the loss settling in &mdash; the withdrawal from ordinary life, the loss of interest in the future, the sense that the world has permanently changed. Christian theology takes this seriously as a real experience rather than dismissing it as a lack of faith. The psalms of disorientation &mdash; Psalm 42&rsquo;s &ldquo;Why, my soul, are you downcast?&rdquo;, Elijah under the juniper tree, Jeremiah cursing the day of his birth &mdash; give the depressive dimension of grief its scriptural home. At the same time, Christian theology does not permit depression to become the permanent posture; the call to lament, to community, to the practices of resurrection hope, are the theological response to grief&rsquo;s darkness.",
      "Acceptance, the fifth stage, is often misunderstood as happiness, resolution, or moving on. K&uuml;bler-Ross herself was clear that acceptance is not the absence of grief but the capacity to live with the loss rather than fighting it. Christian theology engages this with the concept of integration: the loss does not disappear, the grief does not end, but the person learns to carry it without being destroyed by it. The Christian vision of acceptance is shaped by resurrection hope: the loss is held not as permanent but as penultimate &mdash; real and devastating in this age, but contested by the claim of the age to come. Jerry Sittser, who lost three generations of his family in a single car accident, wrote that the soul capable of integrating catastrophic loss becomes larger than it was before &mdash; not because the grief is good, but because souls that have been entered by darkness carry more capacity for depth and compassion.",
      "The most important theological critique of the stages model is simply this: grief is not linear. K&uuml;bler-Ross herself clarified in later work that the stages were descriptive, not prescriptive; that they can appear in any order, recur, overlap, and never fully conclude. The church that imposes a timeline on grief &mdash; expecting the bereaved to have moved through to acceptance by some culturally determined point &mdash; commits a pastoral injustice. Complicated grief, anticipatory grief, grief after suicide loss, and grief after miscarriage all involve dimensions that the stages model does not adequately capture. Grief after suicide loss, for instance, is complicated by guilt, stigma, and unanswerable questions in ways that call for specialized pastoral care. Grief after miscarriage involves the loss of a person whose life was entirely contained within another person and who may never have been publicly acknowledged. The church that tends to complicated grief must be willing to learn its particular textures rather than applying a universal template.",
    ],
  },
  {
    id: "How the Church Can Help",
    heading: "How the Church Can Help the Bereaved",
    paragraphs: [
      "The ministry of presence is the most fundamental and the most undervalued form of pastoral care for the grieving. When Job&rsquo;s friends arrived to comfort him, they sat with him in silence for seven days without speaking a word &mdash; &ldquo;because they saw how great his suffering was&rdquo; (Job 2:13). The text presents this as their finest moment. Everything they subsequently said was wrong. The church that has learned the ministry of presence has learned the most important lesson about accompanying grief: that what the bereaved need most is not answers, explanations, or theological instruction, but a body in the room. Someone who shows up, sits down, stays, and does not try to fix what cannot be fixed. The capacity to tolerate unresolved darkness &mdash; to be present to grief without rushing it toward resolution &mdash; is among the rarest and most Christlike gifts a community can offer.",
      "What not to say to the grieving is a subject on which the church has accumulated a troubling history. &ldquo;They are in a better place&rdquo; &mdash; even if theologically true &mdash; is experienced by the bereaved as a minimization of their loss. &ldquo;God needed another angel&rdquo; is not only theologically incorrect (human beings do not become angels) but treats God as having a staffing problem that required the death of your loved one. &ldquo;Everything happens for a reason&rdquo; is a form of philosophical determinism that the biblical witness does not support; the Bible does not say that everything happens for a reason but that God redeems everything, which is different. &ldquo;At least&hellip;&rdquo; &mdash; at least they didn&rsquo;t suffer, at least you have other children, at least they lived a good life &mdash; is experienced as a comparison that diminishes the loss. What the bereaved need to hear is, most often: &ldquo;I am so sorry. I loved them too. I am here.&rdquo; These are not theological propositions. They are acts of solidarity.",
      "The practical dimensions of grief care are spiritual acts. Bringing meals, sending cards, handling logistics, sitting with children while the bereaved parent grieves, doing laundry, mowing the lawn &mdash; these are the body of Christ functioning as the body of Christ. The church that organizes practical care for the bereaved in the first weeks after a death is doing something irreplaceable. But the community that mobilizes for two weeks and then disperses, never to return, has failed to understand the duration of grief. Grief does not follow a schedule of two weeks and then resolution. It resurges at anniversaries, at holidays, at unexpected moments &mdash; a song on the radio, a smell, a phrase that the dead person used to say. The church that tends grief long-term, that remembers the bereaved on the anniversary of the death three years later, that holds the name of the dead in communal memory, has understood something about love that most communities miss.",
      "Grief groups within the church are among the most effective and underutilized pastoral resources available. Organizations like GriefShare provide structured, facilitated curriculum for grief groups that can be run by trained lay leaders within almost any church context. The power of grief groups is not primarily informational; it is communal. The grieving person who sits in a room with other grieving people and discovers that they are not uniquely broken, not uniquely faithless, not uniquely devastated &mdash; that what they are experiencing is what human beings experience when they have lost someone they loved &mdash; receives something that no sermon or counseling session can provide. The church that hosts grief groups is the church that has made room for grief within its walls, which is to say: it is the church that looks like Jesus.",
      "Lament in worship is one of the most powerful gifts the gathered community can give the bereaved. When the church prays the psalms of lament in corporate worship &mdash; Psalm 22, Psalm 88, Psalm 13, Psalm 42 &mdash; it creates a liturgical home for grief. When the prayers of the people include the names of the recently dead, when All Saints&rsquo; Day is observed with intention, when the funerals of the church are not rushed toward resurrection hope before the sorrow has been honored, the community signals to its grieving members: you belong here. Your grief belongs here. The one who wept at Lazarus&rsquo;s tomb is the Lord of this community, and he does not ask you to leave your sorrow at the door.",
      "The church&rsquo;s tendency to move on too fast is one of its most consistent pastoral failures with the bereaved. The world around a grieving person continues to function &mdash; other people&rsquo;s lives go on, the news cycle turns, the demands of ordinary life reassert themselves &mdash; and the church often mirrors this rhythm rather than countering it. The bereaved person who is still grieving intensely six months after a death can find that the community that surrounded them in the first weeks has entirely disbanded, that references to their loss have become socially uncomfortable, that the implicit expectation is that they should be &ldquo;getting back to normal.&rdquo; The Jewish tradition of kaddish &mdash; the mourner&rsquo;s prayer recited daily for a year after a death &mdash; embeds in communal practice the recognition that grief has a duration and that the community&rsquo;s obligation to the bereaved extends well beyond the initial crisis. The church that commits to long-term grief care &mdash; to checking in at the six-month and one-year marks, to saying the dead person&rsquo;s name, to honoring the weight of the anniversary &mdash; is practicing a form of love that the world rarely offers and that the gospel demands.",
    ],
  },
];

const videoItems = [
  { videoId: "x5BO3Z1oRNs", title: "Tim Keller on Grief and Sorrow" },
  { videoId: "fLSmMhFMx_g", title: "John Piper on Grieving Well" },
  { videoId: "xJO6QFRVOxQ", title: "The Christian and Grief — A Biblical Response" },
];

export default function ChristianGriefGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Grief
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Grief
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Grief through a Christian lens &mdash; what the Bible says about mourning, the Psalms of lament, Jesus weeping at Lazarus&rsquo;s tomb, the stages of grief and their theological meaning, grief and resurrection hope, and how the church can walk alongside the bereaved.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;We do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>1 Thessalonians 4:13</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(107, 79, 187, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Grief Is Not the Absence of Faith</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Jesus wept. The psalmists cried out in darkness. Job argued with God. Paul grieved while holding onto resurrection hope. The Christian tradition does not ask you to suppress your sorrow &mdash; it asks you to bring it to the God who enters it, who weeps with you, and who promises that the last word belongs not to death but to the resurrection morning.</p>
        </div>
      </main>
    </div>
  );
}
