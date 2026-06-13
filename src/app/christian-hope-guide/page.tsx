"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["What Is Christian Hope", "The Resurrection Hope", "Hope in Suffering", "Hope and the New Creation", "Cultivating Hope", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "What Is Christian Hope",
    heading: "What Is Christian Hope: Confident Expectation, Not Wishful Thinking",
    paragraphs: [
      "When most people use the word hope, they mean something close to a wish. &ldquo;I hope it doesn&rsquo;t rain tomorrow.&rdquo; &ldquo;I hope the test comes back clear.&rdquo; &ldquo;I hope things work out.&rdquo; In this everyday sense, hope is a hopeful uncertainty &mdash; a desire for an outcome we cannot control and cannot guarantee, shadowed always by the possibility that it will not come to pass. This is hope as optimism, hope as crossed fingers, hope as a pleasant feeling about a future that remains genuinely in doubt. It is a fragile thing, and when the rain falls or the test comes back grim, it evaporates. Christian hope is something else entirely, and the difference is not a matter of degree but of kind.",
      "The biblical word translated &ldquo;hope&rdquo; &mdash; the Greek &ldquo;elpis&rdquo; &mdash; carries the sense not of wishful uncertainty but of confident, assured anticipation. It is the settled expectation of a good that is certain to come because it rests not on the shifting circumstances of the world but on the unchanging character and promises of God. To hope, in the biblical sense, is to lean the whole weight of one&rsquo;s life on what God has sworn to do. It is forward-looking trust. When Scripture says the believer has hope, it does not mean the believer is keeping a positive attitude about an uncertain future; it means the believer is anchored to a future that God has guaranteed. The certainty does not come from us. It comes from the One who cannot lie.",
      "This is why the great definition in Hebrews 11:1 binds hope and faith together so tightly: &ldquo;Now faith is the assurance of things hoped for, the conviction of things not seen.&rdquo; Faith is the substance, the assurance, the very title-deed of the things we hope for. Hope reaches forward to what God has promised; faith lays hold of it as already secured. The two are inseparable. A hope without faith is mere wishing; a faith without hope is a trust with nothing to lean toward. Together they orient the Christian&rsquo;s entire existence toward a future that is as certain as the faithfulness of God, even though it has not yet arrived and cannot yet be seen.",
      "The Apostle Paul places hope among the three great theological virtues, the enduring realities that remain when everything temporary has passed away: &ldquo;So now faith, hope, and love abide, these three; but the greatest of these is love&rdquo; (1 Corinthians 13:13). Hope is not a minor accessory to the Christian life, a nice feeling that helps us through difficult days. It is one of the three pillars of Christian existence, woven together with faith and love into the very fabric of what it means to belong to God. To lose hope is not merely to feel discouraged; it is to lose one of the three things that abide. The Christian is, by definition, a person of hope &mdash; a person whose life is bent toward a promised future.",
      "Paul makes a startling claim about this hope in Romans 5:5: &ldquo;hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us.&rdquo; To be put to shame is to have one&rsquo;s confidence exposed as misplaced &mdash; to have trusted in something that failed, to be left standing exposed when the thing we counted on collapsed. Worldly hope is constantly put to shame; we trust in our plans, our health, our relationships, our nation, and again and again they let us down. But Christian hope does not put us to shame, because its object is God himself, and God does not fail. The pledge of this is the Holy Spirit poured into the believer&rsquo;s heart &mdash; the present experience of God&rsquo;s love is the guarantee that the future God has promised will not disappoint.",
      "The distinction matters enormously in practice. The person whose hope is wishful optimism is at the mercy of circumstance; when the diagnosis is bad, when the relationship ends, when the loss comes, that hope has nothing to stand on and it falls. But the person whose hope is confident expectation grounded in God&rsquo;s character can face the very worst the world can do and still hope &mdash; not because they expect the bad thing to be reversed, but because their hope was never anchored to that outcome in the first place. Christian hope can coexist with terrible circumstances precisely because its ground is not the circumstance but the God who reigns over it. This is why the New Testament can speak of hope in prison, hope in persecution, hope at the grave.",
      "To be a Christian, then, is to be a person who lives forward &mdash; to be defined not chiefly by the past or even by the present but by a promised future that God has guaranteed and that nothing can finally take away. The world&rsquo;s hope is a candle that the wind of circumstance can blow out. Christian hope is an anchor sunk into the bedrock of God&rsquo;s faithfulness, holding firm precisely when the storm is fiercest. It is, in the end, the most realistic posture imaginable, because it is built not on the wishful denial of how bad things can get but on the certain knowledge of how the story ends. The Christian grieves, struggles, and suffers like everyone else &mdash; but never as one who has no hope.",
    ],
  },
  {
    id: "The Resurrection Hope",
    heading: "The Resurrection Hope: The Empty Tomb as the Ground of Everything",
    paragraphs: [
      "Christian hope is not a vague spiritual optimism floating free of history. It is anchored to a specific event that either happened or did not: the bodily resurrection of Jesus of Nazareth from the dead. The Apostle Peter opens his first letter with a burst of praise that locates the entire ground of Christian hope in this single event: &ldquo;Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead&rdquo; (1 Peter 1:3). It is a &ldquo;living hope&rdquo; &mdash; a hope that is itself alive because it springs from the One who conquered death. The resurrection is not one nice doctrine among many; it is the source from which Christian hope is born.",
      "Paul develops this with relentless logic in 1 Corinthians 15, the great resurrection chapter of the New Testament. He calls the risen Christ the &ldquo;firstfruits of those who have fallen asleep&rdquo; (15:20). The image is agricultural: the firstfruits are the first sheaf of the harvest, brought in as the guarantee and foretaste that the rest of the harvest is coming. Christ&rsquo;s resurrection is not an isolated miracle but the first installment of a general resurrection that will gather in all who belong to him. Because he rose, they will rise. His resurrection is the down-payment, the pledge, the guarantee of theirs. The believer&rsquo;s future resurrection is as certain as the historical fact of Christ&rsquo;s empty tomb, because the one secures the other.",
      "Paul is willing to stake everything on this. With breathtaking honesty he writes: &ldquo;If in Christ we have hope in this life only, we are of all people most to be pitied&rdquo; (1 Corinthians 15:19). He refuses every attempt to reduce Christianity to a useful philosophy for living well now. If the resurrection did not happen, he says, then Christian faith is not merely incomplete &mdash; it is pitiable, a delusion built on a lie, and Christians have wagered their entire lives on nothing. Paul will not let the faith retreat to a safe, unfalsifiable spirituality. He plants the flag in history: either Christ was raised, or the whole thing collapses. There is no comfortable middle ground.",
      "But then comes the turn that changes everything: &ldquo;But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep&rdquo; (15:20). The whole argument pivots on these words. The conditional gives way to the indicative. Christ has been raised &mdash; and so the pity Paul described falls away, and in its place stands a hope that death itself cannot touch. The same chapter ends in triumph: &ldquo;Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?&rdquo; (15:54-55). The resurrection transforms the believer&rsquo;s relationship to death itself. Death remains an enemy, but it is a defeated enemy, a conquered foe whose final destruction is already secured.",
      "What makes this hope different from every other form of human optimism is that it is anchored in an event, not a sentiment. The empty tomb is a historical claim. The earliest Christians did not say &ldquo;we feel that Jesus lives on in our hearts&rdquo; or &ldquo;his teachings inspire us still.&rdquo; They said something far more dangerous and concrete: the tomb was empty, we saw him alive, we touched him, we ate with him, and many of us would rather die than deny it &mdash; and many of them did. Christian hope is therefore not wishful projection onto an unknown future; it is reasonable confidence rooted in something that happened in the world, at a particular time, witnessed by particular people who staked their lives on it.",
      "This is why Christian hope can survive at the graveside. When a believer stands beside the coffin of someone they loved, they do not pretend the loss is not real or the grief not crushing. But their hope does not rest on a feeling that things will somehow be alright; it rests on the fact that Jesus walked out of his own tomb, and that he promised to do the same for all who are his. The grief is real and the hope is real, and the two coexist because the ground of the hope is firmer than the ground of the grave. &ldquo;I am the resurrection and the life,&rdquo; Jesus said to a weeping Martha at the tomb of her brother. &ldquo;Whoever believes in me, though he die, yet shall he live&rdquo; (John 11:25). The resurrection of Jesus is the answer to the question that haunts every human being.",
      "To anchor hope in the resurrection is therefore the most stabilizing thing a person can do, because it ties the future to something that cannot be undone. Circumstances change, feelings fluctuate, optimism rises and falls with the news of the day. But the empty tomb does not change. What happened in that garden outside Jerusalem on the third day is fixed and finished, and the hope that rests on it is correspondingly fixed and finished. The believer&rsquo;s confidence is not in their own ability to keep believing, nor in the turning of fortune, but in a stone rolled away two thousand years ago and a Lord who is alive forevermore. That is hope that nothing in life or death can finally take away.",
    ],
  },
  {
    id: "Hope in Suffering",
    heading: "Hope in Suffering: An Anchor Forged in the Fire",
    paragraphs: [
      "One of the most counterintuitive claims in all of Scripture is that suffering, rather than destroying hope, is the very place where the deepest hope is forged. In Romans 5:3-5 Paul writes: &ldquo;we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame.&rdquo; The chain is remarkable. Suffering is not the enemy of hope but, in God&rsquo;s economy, one of its sources. Trials produce endurance &mdash; the capacity to remain under pressure without collapsing. Endurance, over time, produces character &mdash; a tested, proven quality of soul. And character, in turn, produces hope. The Christian who has suffered and endured comes out the other side not with less hope but with more, because they have proven in the fire that God&rsquo;s promises hold.",
      "This runs directly against our instincts. We assume that suffering erodes hope, that hardship makes faith harder, that the way to keep hope alive is to keep suffering at bay. Paul says the opposite. The person who has never suffered has a hope that is largely untested &mdash; a hope that may be sincere but has not yet been put to the proof. The person who has walked through the valley and found God faithful there possesses a hope that has been tempered like steel. They no longer hope merely because they have been told God is trustworthy; they hope because they have tested it themselves, in the dark, and found it to be true. This is why the most hopeful Christians are so often those who have suffered the most.",
      "The Letter to the Hebrews gives this tested hope an unforgettable image: &ldquo;We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain&rdquo; (Hebrews 6:19). An anchor is precisely the right metaphor, because an anchor does its work in the storm. In calm seas an anchor seems unnecessary; its value becomes apparent only when the wind rises and the waves heave. So with hope. It is in the storms of life &mdash; the diagnosis, the bereavement, the betrayal, the long night of doubt &mdash; that hope proves itself to be an anchor of the soul, holding the believer fast to a fixed point while everything around them is in violent motion. And the fixed point to which this anchor is sunk is not anywhere in this world; it reaches behind the curtain, into the very presence of God.",
      "Paul widens the lens to a cosmic scale in Romans 8:18-25, one of the most majestic passages on suffering and hope in all of Scripture. &ldquo;I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us&rdquo; (8:18). He does not minimize present suffering &mdash; he calls it real, and he calls creation itself a place of groaning. But he weighs it against the coming glory and finds that there is no comparison, as a feather against a mountain. The present pain is genuine, but it is the labor pain of a new world being born, and the glory to come will so eclipse it that the comparison itself becomes almost meaningless.",
      "In the same passage Paul describes the whole created order as caught up in this hope: &ldquo;For the creation waits with eager longing for the revealing of the sons of God&hellip; the whole creation has been groaning together in the pains of childbirth until now&rdquo; (8:19, 22). Suffering is the groaning of a world in labor. The pain is real, but it is purposeful &mdash; it is the pain of something being born, not the pain of something dying. And Paul adds that we ourselves groan inwardly as we wait, &ldquo;for in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience&rdquo; (8:24-25). Hope, by definition, reaches toward what is not yet visible; if we could see it, it would no longer be hope but sight.",
      "This reframes the whole experience of Christian suffering. The believer in pain is not someone whose hope has failed or whose faith is too weak to spare them; they are someone walking the very road on which hope is forged. The fire that seems to threaten their faith is in fact the furnace in which a deeper and more durable hope is being made. This does not make suffering good in itself, nor does it require the Christian to pretend that pain does not hurt. It means that the pain has a horizon, a purpose, and an end &mdash; and that the God who permits the suffering is the same God who promises the glory, and who is at work even now bringing the new creation to birth through the groaning.",
      "And so the Christian can do the most astonishing thing in the midst of affliction: not merely endure it, but, as Paul says, rejoice in it &mdash; not because the suffering is pleasant, but because of what it is producing and where it is leading. This is not the grim stoicism of gritted teeth, nor the denial that pretends all is well. It is the deep and seasoned hope of those who have learned that the God who raised Jesus from the dead is at work even in the darkness, and that the anchor of the soul holds firmest precisely when the storm is at its worst. Hope in suffering is not hope despite the fire; it is hope forged in it.",
    ],
  },
  {
    id: "Hope and the New Creation",
    heading: "Hope and the New Creation: More Than Going to Heaven",
    paragraphs: [
      "Ask the average person what the Christian hope is, and most will answer: &ldquo;going to heaven when you die.&rdquo; This is not wrong, exactly, but it is so incomplete that it nearly misses the point. The biblical hope is far larger, far more concrete, and far more wonderful than the disembodied survival of the soul in a faraway heaven. The Christian hope is the resurrection of the body and the renewal of all things &mdash; a remade creation in which heaven and earth are joined, death is undone, and the whole cosmos is set right. The destiny of the believer is not to float forever as a spirit in the clouds, but to be raised bodily into a renewed creation, as real and tangible as this one but freed from death and decay.",
      "The vision is given its fullest expression in the closing chapters of the Bible, Revelation 21 and 22. &ldquo;Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away&hellip; And I saw the holy city, new Jerusalem, coming down out of heaven from God&rdquo; (21:1-2). Notice the direction of movement. The new Jerusalem comes down; the destiny is not that we escape earth to reach heaven, but that heaven comes down to a renewed earth, so that &ldquo;the dwelling place of God is with man. He will dwell with them&rdquo; (21:3). The end of the biblical story is not the abandonment of the material world but its redemption, not flight from creation but the marriage of heaven and earth.",
      "At the center of this vision is one of the tenderest promises in all of Scripture: &ldquo;He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away&rdquo; (Revelation 21:4). This is the goal toward which the entire Christian hope is bent. Not merely the survival of the soul, but the abolition of death itself; not merely a happier afterlife, but the end of all mourning, crying, and pain; not a distant deity, but a God so near that he wipes the tears from our faces with his own hand. Every grief the believer carries through this present age is bounded by this promise. The tears are real now &mdash; but they will be wiped away.",
      "The New Testament scholar N.T. Wright has done much to recover this fuller hope for a church that had largely shrunk it down to &ldquo;going to heaven.&rdquo; He famously distinguishes between life after death and what he calls &ldquo;life after life after death.&rdquo; There is, he affirms, a blessed intermediate state &mdash; the believer who dies is with Christ, which is far better. But that is not the final hope; it is the waiting room. The final hope is the resurrection: life after life after death, when the dead are raised bodily into the new creation. Wright insists that the church has too often settled for the intermediate state as if it were the destination, and in doing so has lost the robust, world-affirming, body-affirming hope that the New Testament actually proclaims.",
      "This matters because it changes the scope of redemption from the individual soul to the entire cosmos. The Christian hope is not merely &ldquo;I will be saved&rdquo; but &ldquo;all things will be made new&rdquo; (Revelation 21:5). The redemption Christ accomplished reaches as wide as the curse it undoes. Sin and death corrupted not only human souls but the whole created order; the renewal of all things therefore embraces not only redeemed people but a redeemed creation &mdash; a new earth where, in the prophet&rsquo;s vision, the wolf dwells with the lamb and the earth is full of the knowledge of the Lord as the waters cover the sea. The cosmic scope of the hope means that nothing genuinely good will finally be lost, and that the whole groaning creation has a future.",
      "This larger hope transforms how the believer lives in the present world. If the future is the renewal of this creation rather than its abandonment, then the work done now &mdash; the cup of cold water given, the justice pursued, the beauty made, the body cared for, the earth tended &mdash; is not so much straw to be burned up but is somehow taken up into God&rsquo;s new creation. Paul ends his great resurrection chapter not with a call to passive waiting but with a charge to action: &ldquo;Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain&rdquo; (1 Corinthians 15:58). Resurrection hope produces not escapism but engaged, hopeful labor in the present.",
      "The new creation hope is therefore the widest possible horizon against which to set every loss, every injustice, every sorrow of the present age. It says that the story of the world does not end in heat-death or oblivion or the mere persistence of disembodied souls, but in a remade heaven and earth where God dwells with his people and death is no more. It is a hope big enough to hold not only the individual believer but the whole aching creation. And it is a hope that does not ask us to despise this world or flee it, but to love it as God loves it, knowing that the One who made it has promised to make it new.",
    ],
  },
  {
    id: "Cultivating Hope",
    heading: "Cultivating Hope: The Discipline of Trusting God's Promises",
    paragraphs: [
      "Hope, for all that it is a gift of God, is also something the believer is called to cultivate, nurture, and actively maintain. It does not float in automatically and remain regardless of how we live; like faith and love, it grows or withers depending on whether it is fed. The Christian living in the long stretch between the resurrection of Christ and his return must learn the disciplines by which hope is kept alive, because the circumstances of life will frequently conspire to drain it away. Cultivating hope is not a matter of manufacturing a positive feeling; it is the deliberate, repeated practice of returning the heart to the promises of God until trust in those promises becomes the settled posture of the soul.",
      "The first and richest soil in which hope grows is Scripture. Paul makes this explicit in Romans 15:4: &ldquo;For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.&rdquo; The Scriptures were written, Paul says, precisely so that we might have hope. To neglect them is to starve hope of its primary food. The believer who saturates their mind in the promises of God, who learns the long story of God&rsquo;s faithfulness from Genesis to Revelation, who memorizes the great hope-bearing texts and returns to them in the dark hours, is feeding hope at its source. The word of God is the seedbed of Christian hope, and a hope cut off from Scripture will wither into mere optimism.",
      "A second discipline is the deliberate remembering of God&rsquo;s past faithfulness. Throughout Scripture, the people of God are commanded to remember &mdash; to build altars, keep feasts, recite the mighty acts of God &mdash; because memory is the fuel of hope. The God who has been faithful will be faithful; the One who delivered before will deliver again. When the psalmist&rsquo;s soul is cast down, he preaches to himself by remembering: &ldquo;I will remember the deeds of the Lord; yes, I will remember your wonders of old&rdquo; (Psalm 77:11). Hope for the future is grounded in the recollection of the past. The believer who keeps a record of answered prayers, who recalls the times God proved faithful, who rehearses the long history of grace in their own life, finds that memory becomes a wellspring of hope for whatever lies ahead.",
      "Third, hope is cultivated in community. Hope is difficult to sustain alone; isolation is its enemy, and the lone believer is far more vulnerable to despair than the one surrounded by the people of God. This is why the writer of Hebrews ties the encouragement of one another directly to the nearness of the promised day: &ldquo;let us hold fast the confession of our hope without wavering&hellip; encouraging one another, and all the more as you see the Day drawing near&rdquo; (Hebrews 10:23-25). We hold one another&rsquo;s hope when our own is failing. The community of faith is a place where hope is shared, borrowed, and replenished &mdash; where the one whose lamp has gone dark can be carried by those whose lamps are still burning, until their own is rekindled.",
      "Fourth, hope is nurtured through prayer and worship. In prayer we bring our fears and longings to the God who holds the future, and in the act of casting our cares on him we relocate our hope from our circumstances to his character. In worship we lift our eyes from the immediate troubles that loom so large and fix them on the God who reigns over all of it. Worship reorders the soul, reminding it of the size and goodness and sovereignty of God until the troubles, without becoming any smaller in themselves, are dwarfed by the One who is greater. The believer who prays and worships regularly is constantly recalibrating their hope, refusing to let the present darkness define the horizon.",
      "Fifth, and underlying all the rest, is the discipline of fixing the eyes on the eternal rather than the temporal. Paul writes in 2 Corinthians 4:16-18: &ldquo;So we do not lose heart&hellip; For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.&rdquo; Hope is a matter of where the eyes are fixed. The things that are seen &mdash; the affliction, the loss, the trouble &mdash; are real but transient; the things that are unseen are eternal. The deliberate, daily turning of the gaze from the temporal to the eternal is the master-discipline of hope, the one that gives all the others their power.",
      "In the end, cultivating hope is a choice &mdash; a choice to trust the promises of God even when, perhaps especially when, the circumstances are dark and every visible sign points the other way. This is the posture of the Christian who lives in the great in-between, after the resurrection of Christ but before his return, in the time the New Testament calls the &ldquo;already and not yet.&rdquo; The decisive victory has been won; the final consummation has not yet arrived; and the believer lives in the tension between the two, hoping. To hope, in this season of history, is not naive; it is faithful. It is the deliberate refusal to let the darkness have the last word, because the One who promised is faithful, and the empty tomb stands as the unshakable pledge that the story ends not in death but in resurrection morning.",
    ],
  },
];

const videoItems = [
  { videoId: "Zb7NfslquZo", title: "The Christian Hope Explained" },
  { videoId: "_TZj1Xfd2Vc", title: "Hope in Suffering - A Biblical View" },
  { videoId: "QFR3IjSDZP0", title: "N.T. Wright on Resurrection Hope" },
];

export default function ChristianHopeGuidePage() {
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
            Faith &amp; Hope
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Hope
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Hope through a Christian lens &mdash; the biblical meaning of hope as confident expectation rather than wishful thinking, the resurrection of Jesus as the ground of all hope, hope forged in suffering, the hope of the new creation, and the disciplines by which hope is cultivated.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;He has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>1 Peter 1:3</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(59, 130, 246, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Hope That Does Not Put Us to Shame</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Christian hope is not a wish but an anchor &mdash; confident expectation grounded in the character of God and secured by the empty tomb. It is forged in suffering, stretched toward the new creation, and cultivated through Scripture, memory, community, and prayer. Living between the resurrection and the return of Christ, the believer hopes not because circumstances are bright but because the One who promised is faithful, and the last word belongs to the resurrection morning.</p>
        </div>
      </main>
    </div>
  );
}
