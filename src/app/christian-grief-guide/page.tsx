"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "stages" | "scripture" | "community";

// ─── Tab 1: Theology of Grief ─────────────────────────────────────────────────

const THEOLOGY_ITEMS = [
  {
    id: "god-grieves",
    title: "God Grieves",
    verses: "Genesis 6:6 · Jeremiah 8:21 · John 11:35",
    body: `The Bible does not present God as an impassive deity watching human suffering from a distance. "The Lord regretted that he had made human beings on the earth, and his heart was deeply troubled" (Genesis 6:6). Jeremiah relays God's lament: "Since my people are crushed, I am crushed; I mourn, and horror grips me" (Jeremiah 8:21). And then — the shortest verse in Scripture, and one of the most theologically dense: "Jesus wept" (John 11:35). At Lazarus's tomb, the Son of God does not immediately perform the miracle. He first weeps with those who are weeping. He is not merely performing grief for their benefit — he is genuinely moved. The Greek word used (embrimaomai) carries the weight of deep emotional disturbance and anger at death itself. God is not unmoved by loss. Your tears do not surprise him. They participate in his own grief over a broken world. This is the first and most foundational truth for grieving people: you are not grieving alone, and you are not grieving against God's will. You are grieving alongside the God who grieves.`,
  },
  {
    id: "psalms-lament",
    title: "The Psalms of Lament",
    verses: "Psalm 13 · Psalm 22 · Psalm 88",
    body: `Of the 150 Psalms in the Bible, roughly 50 — one-third — are psalms of lament. This is more than any other single category in the Psalter. The early church prayed all 150 Psalms liturgically, including Psalm 88, which ends without resolution, its final word being "darkness." God has embedded grief language in Scripture not as a concession to human weakness but as a gift. Lament is a form of prayer. It is the cry of faith directed into darkness rather than silence. It is not the opposite of trust — it is trust refusing to give up. The structure of most lament psalms follows a pattern: address to God, complaint, petition, and (often) a turn toward trust. But the pattern is never forced — some psalms, like Psalm 88, never arrive at the turn. The church that has lost the language of lament has also lost the capacity to pray honestly in the dark seasons of life. We replace lament with either stoicism ("be strong") or toxic positivity ("God has a plan"). Both leave the grieving person alone with their pain. When we cannot pray, the Psalms pray for us — and they do not require us to have it together first.`,
  },
  {
    id: "grief-not-faithlessness",
    title: "Grief Is Not Faithlessness",
    verses: "1 Thessalonians 4:13 · John 11:35",
    body: `One of the most damaging things said to grieving people in Christian contexts is some version of: "Don't cry — they're in a better place." This statement, even when well-intentioned, carries a theological error and a pastoral wound. The theological error: it implies that confident belief in heaven should eliminate grief. But Paul's instruction is not "do not grieve" — it is "do not grieve as those who have no hope" (1 Thessalonians 4:13). The distinction is everything. The shape of Christian grief is grief with hope as its horizon — not the absence of grief. Even Jesus, who knew full well he was about to raise Lazarus from the dead, wept at his tomb. Grief is love with nowhere to go. When someone we love dies, the love does not stop — but the person it was directed toward is no longer physically present. The resulting ache is not a spiritual failure. It is the cost of having loved. To grieve deeply is to have loved well. Forcing a bereaved person to perform peace or suppress tears for the sake of appearing faithful is a form of cruelty dressed as comfort. The Christian response to loss is to weep with those who weep (Romans 12:15), not to explain the weeping away.`,
  },
  {
    id: "death-as-enemy",
    title: "Death as Enemy",
    verses: "1 Corinthians 15:26 · Revelation 21:4",
    body: `The New Testament does not romanticize death. Paul is unambiguous: "The last enemy to be destroyed is death" (1 Corinthians 15:26). Death is not a natural transition into the next chapter. It is an intruder — something that entered human experience through the corruption of God's good creation. God did not design death; death is what the design became broken by. The Revelation vision of the new creation does not depict heaven as a wispy spiritual state but as a renewed physical world in which God "will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away" (Revelation 21:4). Notice that this verse does not say there will be no more memories of pain. It says the things that caused pain will be abolished. The reason this matters for grief is that it validates the griever's instinct that death is wrong. When you feel rage at a death — even a death from old age — that instinct is theologically accurate. You were made for a world without death, and the God of Scripture is working to restore exactly that world. Your grief is not overreaction. It is the correct response to something genuinely evil, now defeated, but not yet fully gone.`,
  },
  {
    id: "hope-not-dismiss",
    title: "Hope That Doesn't Dismiss Pain",
    verses: "1 Thessalonians 4:13-14 · Romans 8:18",
    body: `Christian hope in grief is expressed with an AND, not an INSTEAD. Paul writes: "We do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope" (1 Thessalonians 4:13). The controlling phrase is "like the rest of mankind, who have no hope" — not "you do not grieve." The difference in Christian grief is the horizon, not the tears. Christian hope does not land on the grieving person as a demand to feel better. It lands as a promise that the story is not over — that the loss you feel is real, the person you lost was real, and the God who raised Jesus from the dead intends to raise them too. "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us" (Romans 8:18) does not minimize the suffering — it sets it against an immeasurably larger counter-reality. The two truths must be held simultaneously: This loss is devastating AND the resurrection makes a claim on this situation that death cannot answer. The gospel does not say "don't feel it." It says "feel it fully, and feel it within a larger story than death."`,
  },
  {
    id: "new-creation-reunion",
    title: "The New Creation and Reunion",
    verses: "Revelation 21:4 · 1 Corinthians 15:51-54 · 1 Thessalonians 4:17",
    body: `Christian grief is oriented toward the most concrete of all hopes: bodily resurrection and the renewal of all things. This is not vague spiritual comfort. Paul spends the entire fifteenth chapter of 1 Corinthians arguing for the physical resurrection of the body as the non-negotiable foundation of the Christian faith. "If Christ has not been raised, your faith is futile" (1 Corinthians 15:17). The resurrection of Jesus is the first-fruits — the beginning of a harvest that includes all who died in him. "We will not all sleep, but we will all be changed — in a flash, in the twinkling of an eye, at the last trumpet" (15:51-52). Paul tells the grieving church at Thessalonica: "We who are still alive and are left will be caught up together with them... And so we will be with the Lord forever. Therefore encourage one another with these words" (1 Thessalonians 4:17). The phrase "together with them" is the grief-bearing promise. The bereaved parent will see their child again. The widow will see her husband. Not as disembodied spirits in a timeless cloud, but as embodied persons in a restored creation from which death, tears, and mourning have been permanently evicted (Revelation 21:4). Grief lives within this hope — not erased by it, but no longer swallowed by it.`,
  },
];

// ─── Tab 2: Stages and Forms ─────────────────────────────────────────────────

const STAGES = [
  {
    num: 1,
    name: "Shock & Numbness",
    color: "#94A3B8",
    practical: "The bereaved may move through the first hours and days on autopilot — making phone calls, receiving visitors, planning a funeral — while feeling almost nothing. This is not callousness. It is the brain's mercy.",
    spiritual: "God does not require immediate emotional processing. The numbness is a providential staging — grief arrives in doses the soul can survive. Do not rush the grieving person to feel the full weight. Simply be present. The feeling will come.",
    detail: `The immediate aftermath of loss often produces a merciful dissociation. The news lands but cannot yet be absorbed. The brain's threat-response system floods the body with stress hormones while simultaneously activating the prefrontal cortex's shutdown of deep emotional processing. The result is a strange clarity — functional but hollow. People in shock can hold conversations, make arrangements, and appear "okay" while the grief has simply not yet arrived. This is not denial; it is not sin; it is not insufficient love for the person lost. It is the body and mind operating at the edge of what they can process. The numbness will lift — usually in waves, and often at unexpected moments: hearing a song, seeing the person's handwriting, waking up and forgetting for a single second, then remembering.`,
  },
  {
    num: 2,
    name: "Denial",
    color: "#60A5FA",
    practical: "The grieving person may speak of the deceased in present tense, set their place at the table, or expect to hear their key in the door. This is protective disbelief — the psyche buying time before full exposure.",
    spiritual: "Denial is not a character flaw or a failure of faith. It is a buffer. The Christian pastoral response is patience, not correction. The person will arrive at the reality of the loss; there is no need to hurry them there.",
    detail: `Denial serves a protective function: it slows the impact of loss to a survivable rate. Elisabeth Kübler-Ross, who first articulated the stages of grief, described denial not as a lie but as a buffer — the psyche's way of metabolizing news that would otherwise be overwhelming all at once. In early grief, denial may appear as a refusal to believe the death actually happened, a sense that the person will walk back through the door, or the continued use of present tense ("she is so funny" rather than "she was"). These are not signs of dysfunction. They are signs of love encountering an impossible new reality. For Christians, denial is also sometimes reinforced by a misapplied theology: "I trust God so much I'm not even sad." This is a spiritualized form of denial, and it is ultimately unsustainable. Genuine grief must be faced, but it need not be faced all at once.`,
  },
  {
    num: 3,
    name: "Anger",
    color: "#F87171",
    practical: "Anger at the person who died. Anger at God. Anger at the doctor. Anger at yourself. Anger at people who are still alive. All of it is valid. Anger in grief is love looking for somewhere to direct its force.",
    spiritual: "Job's honest protest was received by God more favorably than his friends' theological tidiness (Job 42:7-8). The lament psalms are protest prayers — 'How long, O Lord? Will you forget me forever?' God can take the anger. Do not silence it in yourself or others.",
    detail: `Anger is one of the most misunderstood responses to grief — particularly in Christian contexts, where it is often suppressed by a misplaced sense that anger toward God is disrespectful or faithless. In fact, anger in grief is nearly universal. It appears in many forms: fury at the person who died ("How could you leave me?"), rage at God for allowing the loss, anger at the medical system that failed, at the driver who caused the accident, at oneself for things said or unsaid. Each of these is grief's energy looking for a target. The anger is not irrational — it is the emotional expression of the conviction that this should not have happened, which is itself theologically sound. Death is wrong. Loss is wrong. The Bible agrees. Job's friends were silenced by God because they tried to manage Job's anger with theological explanation. God himself said Job "spoke what is right" while his friends did not (Job 42:7). Anger in grief should be expressed, not suppressed — ideally in prayer, with a trusted person, or in writing.`,
  },
  {
    num: 4,
    name: "Bargaining",
    color: "#FBBF24",
    practical: "The 'if only' and 'what if' spiral. 'If only I had insisted on the earlier appointment.' 'What if we had gone to a different hospital?' 'If only I had said I loved her that last morning.' The mind searches compulsively for the moment where the outcome could have changed.",
    spiritual: "Bargaining is often accompanied by guilt. Christian pastoral care must be careful here — not to dismiss the guilt, but not to confirm false guilt either. Most of what grieving people blame themselves for was not actually within their control. Confession and absolution may be needed for real guilt; compassion and truth are needed for false guilt.",
    detail: `Bargaining is the mind's attempt to restore a sense of control over an uncontrollable event. If I can identify what I did wrong, the logic goes, then I can believe that the universe is ordered and outcomes are predictable. This is partly the mind's attempt to construct an explanation, and partly a form of magical thinking — as if the past could be revised. The bargaining usually takes the form of retrospective "if only" thinking: if only I had noticed the symptoms sooner; if only I had made a different choice; if only I had been kinder in that last conversation. For some, bargaining is also forward-looking: "God, if you bring them back, I'll...". The pastoral danger here is false guilt. The grieving person often holds themselves responsible for outcomes they could not have controlled. A wise companion distinguishes carefully: genuine guilt (I actually did something that contributed to this harm, and I need forgiveness and reparation) from false guilt (I am attributing causation to myself that does not actually belong to me). Both need care, but different kinds.`,
  },
  {
    num: 5,
    name: "Depression",
    color: "#818CF8",
    practical: "The full weight of the loss descends. Energy depletes. Appetite and sleep are disrupted. Concentration fails. The world loses color. Things that once gave joy go silent. This is the dark night of the soul.",
    spiritual: "The Desert Fathers called this acedia — the noonday demon, a spiritual torpor that drains meaning from everything. John of the Cross described it as the dark night of the soul. Both understood it not as the absence of God but as the absence of the felt sense of God — which is a different thing. Depression in grief is not a spiritual failure. It is the full arrival of loss.",
    detail: `The depression of grief is distinct from clinical depression, though they can overlap and interact. In grief, the depression is a response to a real, external loss — it is the full emotional weight arriving after the initial protective buffers have worn down. The world that existed before the loss no longer exists. The routines, the shared meals, the phone calls, the person whose presence organized the day — all gone. The bereaved person must begin the exhausting work of reconstructing a world that accounts for the absence. This takes enormous energy, and there is often very little left. John of the Cross's concept of "the dark night of the soul" is particularly useful here: it describes a season in which the ordinary consolations of faith go silent — prayer feels empty, Scripture seems distant, worship brings nothing — not because God has left, but because the soul is being stripped of its dependence on felt experience and being invited into a deeper, more naked trust. Not everyone in grief experiences this spiritual dimension, but many do. It should not be pathologized or rushed. It should be accompanied.`,
  },
  {
    num: 6,
    name: "Testing New Identity",
    color: "#34D399",
    practical: "Who am I without them? The widow who identified herself through the marriage. The parent whose whole world was the child. The sibling who was always the one with a big brother. Loss strips away roles that organized identity. The question is not just 'what do I do?' but 'who am I?'",
    spiritual: "Christian identity is ultimately anchored in Christ rather than in human relationships — but this truth must be pastorally timed. In early grief, 'your identity is in Christ' can sound like a dismissal of the real devastation of role-loss. In time, it becomes a lifeline: the self that remains when everything else is stripped is the self that is held by God.",
    detail: `Every significant loss involves an identity loss. The death of a spouse strips away the role of husband or wife. The death of a child strips away a central dimension of parenting. The death of a parent strips away the identity of "child" in a specific way — even for adults, there is a particular orphan-feeling when the last parent dies. Before healing can move toward integration, the grieving person must begin the work of asking who they are now. This is not a linear process. It involves painful experimentation: going to social events as a single person for the first time; filling out forms and not knowing what to put for "emergency contact"; having conversations that reveal how much of one's frame of reference was built around the person who died. Some people discover resources in themselves they did not know existed. Some discover that significant parts of their life were organized around a person rather than their own convictions. Both discoveries can be disorienting and eventually clarifying. The church's role here is accompaniment — not rushing the bereaved to "find themselves" but walking with them through the question.`,
  },
  {
    num: 7,
    name: "Acceptance & Integration",
    color: "#00FF88",
    practical: "This is not getting over it. The person who has died is not gotten over. The loss is not reversed or minimized. What changes is the relationship between the grief and the rest of life: the grief is now carried differently — as part of the self rather than in opposition to it.",
    spiritual: "The wound becomes a scar. A scar is not nothing — it is the evidence of an injury, it remains permanently, and it can ache in certain weather. But it is no longer an open wound. The bereaved person has not forgotten; they have integrated. The loss becomes part of the story that is still being written, within the larger story of resurrection and new creation.",
    detail: `The final stage of grief integration is not the disappearance of grief but its transformation. The grief does not end — experienced grief counselors note that most people describe grief as changing in character over time rather than diminishing in significance. The bereaved person is not the same person they were before the loss. They have been shaped, deepened, and in many cases, prepared to become a minister of comfort to others (2 Corinthians 1:3-4). What changes is the proportion: the grief, which once filled the entire landscape of consciousness, now occupies a specific place within a larger landscape. There are seasons — anniversaries, the deceased's birthday, certain songs, the smell of their coat — when the grief surges to the foreground with remarkable freshness, even years later. This is not a relapse or a sign of poor healing. It is the continued reality of love. Integration means that grief no longer prevents living — but it also means that grief is honored as the lasting mark of a real love for a real person who is genuinely gone from this world and genuinely awaited in the next.`,
  },
];

// ─── Tab 3: Scripture for the Grieving ───────────────────────────────────────

type ScriptureCategory = "loved-one" | "suicide" | "miscarriage" | "anticipatory" | "shattered-dreams" | "prodigal";

interface ScriptureCard {
  ref: string;
  text: string;
  note: string;
}

const SCRIPTURE_MAP: Record<ScriptureCategory, ScriptureCard[]> = {
  "loved-one": [
    { ref: "John 11:25-26", text: "\"I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.\"", note: "Jesus speaks these words standing outside the tomb of his friend — before the miracle, in the grief." },
    { ref: "Psalm 23:4", text: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.\"", note: "The darkest valley is the valley of the shadow of death — God's presence is the promise in it, not around it." },
    { ref: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"", note: "The specificity of this promise — every tear — makes it personally addressed to every loss." },
    { ref: "1 Thessalonians 4:13-14", text: "\"We do not want you to be uninformed... so that you do not grieve like the rest of mankind, who have no hope. For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him.\"", note: "The hope is not abstract — it is grounded in the historical resurrection of Jesus as the guarantee of ours." },
    { ref: "2 Corinthians 1:3-4", text: "\"Praise be to the God... of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.\"", note: "Grief borne well becomes a gift given to others — suffering is not wasted in God's economy." },
  ],
  "suicide": [
    { ref: "Psalm 34:18", text: "\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\"", note: "Both the one who died in despair and those left behind are held in this promise." },
    { ref: "Romans 8:38-39", text: "\"I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\"", note: "Paul's list is exhaustive — not one category of death is excluded from the reach of God's love." },
    { ref: "Lamentations 3:22-23", text: "\"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"", note: "Written in the aftermath of total destruction, this verse is ground-level mercy, not triumphalist theology." },
    { ref: "Psalm 139:7-10", text: "\"Where can I go from your Spirit? Where can I flee from your presence?... If I settle on the far side of the sea, even there your hand will guide me, your right hand will hold me fast.\"", note: "There is no depth of despair — not even the darkest moment of a life — that lies outside God's reach." },
    { ref: "Isaiah 43:1-2", text: "\"Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.\"", note: "The summons by name is personal — God knows and holds the individual, even in the worst moments." },
  ],
  "miscarriage": [
    { ref: "Psalm 139:13-16", text: "\"For you created my inmost being; you knit me together in my mother's womb... Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be.\"", note: "The child known and loved by God before birth was a person — the grief is not imaginary." },
    { ref: "Jeremiah 1:5", text: "\"Before I formed you in the womb I knew you, before you were born I set you apart.\"", note: "God's knowing precedes formation — every conceived life is known by name to God." },
    { ref: "Matthew 19:14", text: "\"Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'\"", note: "Theologians from Augustine to modern evangelicals have read this as confidence in the mercy of God toward those who die in infancy." },
    { ref: "Job 1:21", text: "\"'Naked I came from my mother's womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised.'\"", note: "Job's response is not theological suppression — it is hard-won trust in the God who gives and takes — voiced from inside devastating loss." },
    { ref: "2 Samuel 12:23", text: "\"But now that he is dead, why should I go on fasting? Can I bring him back again? I will go to him, but he will not return to me.\"", note: "David's confidence — 'I will go to him' — has been read across centuries as hope of reunion." },
  ],
  "anticipatory": [
    { ref: "Matthew 11:28-29", text: "\"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.\"", note: "The invitation is open to grief that has not yet arrived — anticipatory fear and sorrow are burdens Jesus offers to carry." },
    { ref: "Psalm 46:1-2", text: "\"God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.\"", note: "The promise is not that the catastrophe won't happen but that God is present in it as it happens." },
    { ref: "Isaiah 40:31", text: "\"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.\"", note: "Walking — not soaring, just walking without fainting — is the promise for the long, slow approach to loss." },
    { ref: "Philippians 4:6-7", text: "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\"", note: "Peace that transcends understanding is the kind needed when the path forward makes no sense." },
    { ref: "Psalm 56:8", text: "\"Record my misery; list my wanderings. Put my tears in your bottle — are they not in your record?\"", note: "Every tear shed in anticipatory grief is counted and kept by God — none of them fall unnoticed." },
  ],
  "shattered-dreams": [
    { ref: "Jeremiah 29:11-14", text: "\"'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'\"", note: "Spoken to exiles — to people whose expected future has been completely dismantled — the promise is hope within ruins, not the removal of them." },
    { ref: "Romans 8:28", text: "\"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.\"", note: "This is not a promise that all things are good, but that God is working within all things — including shattered ones." },
    { ref: "Psalm 37:4-5", text: "\"Take delight in the Lord, and he will give you the desires of your heart. Commit your way to the Lord; trust in him and he will do this.\"", note: "The promise is not the fulfillment of every specific desire, but the reorientation of desire toward God who then works from within that reoriented life." },
    { ref: "Habakkuk 3:17-19", text: "\"Though the fig tree does not bud and there are no grapes on the vines... yet I will rejoice in the Lord, I will be joyful in God my Savior. The Sovereign Lord is my strength.\"", note: "Habakkuk names every single loss specifically — he does not spiritualize them — and then chooses joy anyway. This is what faith in ruins looks like." },
    { ref: "James 1:2-4", text: "\"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.\"", note: "The joy is not in the trial itself but in what the trial produces in a soul that does not quit." },
  ],
  "prodigal": [
    { ref: "Luke 15:20", text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\"", note: "The father is watching the road — grief and hope held together in the posture of a parent who has not given up." },
    { ref: "Psalm 130:5", text: "\"I wait for the Lord, my whole being waits, and in his word I put my hope.\"", note: "Waiting with the whole being — not passive resignation, but the active ache of hope held on the body's level." },
    { ref: "Lamentations 3:25-26", text: "\"The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord.\"", note: "Waiting quietly is not indifference — it is trust that refuses to take control away from God." },
    { ref: "Isaiah 49:15-16", text: "\"Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands.\"", note: "God's love for the prodigal child is greater than even parental love — the child's name is inscribed on God's hands." },
    { ref: "1 Peter 5:7", text: "\"Cast all your anxiety on him because he cares for you.\"", note: "The anxiety of a parent watching a child drift is a legitimate burden God invites into his care." },
  ],
};

const SCRIPTURE_FILTERS: { id: ScriptureCategory; label: string }[] = [
  { id: "loved-one", label: "Loss of a Loved One" },
  { id: "suicide", label: "Suicide" },
  { id: "miscarriage", label: "Miscarriage" },
  { id: "anticipatory", label: "Anticipatory Grief" },
  { id: "shattered-dreams", label: "Shattered Dreams" },
  { id: "prodigal", label: "Prodigal Children" },
];

// ─── Tab 4: Grieving in Community ────────────────────────────────────────────

const COMMUNITY_ITEMS = [
  {
    id: "what-to-say",
    title: "What to Say (and Not Say)",
    body: `The most common pastoral failure in grief support is not silence — it is filling the silence with words that wound. Here is a practical guide. DO NOT SAY: "Everything happens for a reason." (Even if you believe this, the grieving person needs to arrive at that conviction themselves — it cannot be handed to them as a conversation-closer.) "They're in a better place." (May be true, but it changes the subject from the griever's loss to the deceased's gain — and dismisses the grief.) "I know how you feel." (You don't — every grief is specific.) "At least..." (There is no good ending to this sentence in the acute phase of grief.) "God needed another angel." (This is not biblical theology and is often enraging to bereaved parents.) "Be strong." (No. The bereaved person needs permission to be weak.) "Let me know if you need anything." (They won't. Offer something specific.) DO SAY: "I'm so sorry." (Simple, true, and requires nothing from the grieving person.) "Tell me about her." (Open the door to memory, which is one of grief's greatest needs.) "I'm coming over Tuesday to bring dinner — does 6 work?" (Specific, practical, actionable.) "I don't know what to say, but I didn't want to say nothing." (Honesty is almost always the right move.) "I've been thinking about him a lot." (Knowing the person is remembered is profoundly comforting.) Silence with presence is often better than speech. Sit with someone. Don't fix. Don't explain. Just stay.`,
  },
  {
    id: "ministry-of-presence",
    title: "The Ministry of Presence",
    body: `When Job received news of the loss of his children, his health, and his wealth, three friends came: Eliphaz, Bildad, and Zophar. "When they saw him from a distance, they could hardly recognize him; they began to weep aloud, and they tore their robes and sprinkled dust on their heads. Then they sat on the ground with him for seven days and seven nights. No one said a word to him, because they saw how great his suffering was" (Job 2:12-13). This — the seven days of silent presence — is the finest thing Job's friends ever did for him. It is also the last good thing they did. The moment they began to explain, they failed him. Henri Nouwen wrote about the "ministry of presence" as the most undervalued gift in Christian community: to be physically present with those who suffer, without an agenda to fix or explain, is itself a form of love. In a culture that prizes solutions, silence and presence feel unproductive. But for the grieving person, the knowledge that someone loved them enough to sit in the darkness without trying to turn on the lights is among the most deeply sustaining experiences possible. Practical expression of the ministry of presence: show up. Bring food without being asked. Sit with the grieving person while they cry. Come back after everyone else has stopped coming. Remember the birthday of the person who died.`,
  },
  {
    id: "grief-support-groups",
    title: "Grief Support Groups",
    body: `One of the most powerful discoveries bereaved people make is that they are not alone in what they are experiencing. Grief can feel singularly isolating — but the specific symptoms (the numbness, the angry waves, the way the deceased's voice is still heard in the house) are widely shared, and hearing others describe them can be profoundly normalizing. GriefShare is the most widely available structured Christian grief support program in the world. It runs in thousands of churches across the United States, Canada, and internationally. The program consists of a 13-week video series featuring grief counselors, theologians, and bereaved people sharing their experiences, paired with a workbook for individual reflection and facilitated small group discussion. It is explicitly Christ-centered without being dismissive of the psychological dimensions of grief. To find a group near you: griefshare.org (zip code or city search). Sessions typically meet weekly for about 90 minutes. Most groups welcome people at any point in their grief journey — you do not have to start at week one. What to expect: a safe space to name what you are experiencing; stories from others that mirror your own; biblical and theological grounding for grief; and, over time, the formation of community with others who understand. Many bereaved people describe GriefShare as the thing that saved their faith in the first year after loss.`,
  },
  {
    id: "bereaved-parents",
    title: "Supporting Bereaved Parents",
    body: `The death of a child — at any age, from stillbirth to adult child — is widely recognized as among the most devastating losses a human being can sustain, and the most poorly handled by Christian communities. Parents who lose children often report feeling that their grief made their community uncomfortable, that people withdrew rather than leaning in, and that the name of their child was not spoken after the first few weeks. Here is what the research and pastoral experience converge on: Bereaved parents need to hear their child's name spoken. The fear that mentioning the child will "remind" the parent of the loss is mistaken — bereaved parents think about their child constantly. What they fear is that everyone else is forgetting. Speak the child's name. Ask about them. Remember their birthday. The grief does not follow a socially convenient timeline. The second year is often harder than the first — the adrenaline of the immediate crisis has faded, the community support has withdrawn, and the full weight has descended. Check in at the 9-month and 18-month marks, not just the first month. Marital grief is particularly complex. Bereaved couples grieve differently and often out of phase with each other. The divorce rate following the loss of a child is significantly elevated. Pastoral care that supports the marriage — not just each individual — is essential. Do not project meaning onto the loss. "God needed a little angel" or "This must be part of his plan" are experienced as enraging by most bereaved parents. Sit with the incomprehensibility. Say "I don't know why." That is the honest, and often most comforting, answer.`,
  },
  {
    id: "grief-and-calendar",
    title: "Grief and the Church Calendar",
    body: `The church's liturgical calendar provides structures that can hold grief in ways that unstructured evangelical worship often cannot. Advent is not only a season of waiting for joy — it is a season of longing, darkness, and unfulfilled hope. The "O Antiphons" of Advent (O Come, O Come Emmanuel) voice the ache of waiting that resonates deeply with grief. Bereaved people often find December particularly brutal — the forced cheer of the culture crashes against their loss. The church that acknowledges Advent's darkness as genuine rather than rushing to Christmas joy gives them somewhere to stand. Lent provides 40 days of honest engagement with mortality, sin, suffering, and the cost of redemption. The imposition of ashes on Ash Wednesday — "from dust you are, and to dust you shall return" — is a liturgical act that names death without flinching. A congregation that practices Lent deeply understands that grief is not an interruption of the Christian life; it is part of it. All Saints' Day (November 1 in Catholic and some Protestant traditions, the first Sunday of November in others) is perhaps the most directly grief-oriented day in the church calendar — a day to name and remember those who have died. Many congregations now ring a bell for each name, light candles, or invite the bereaved to bring a photograph. These rituals give grief a sanctioned, corporate expression and remind the living that the dead are not gone but are part of the great cloud of witnesses (Hebrews 12:1). Churches that observe this practice report that bereaved members often cite it as one of the most healing experiences of their year.`,
  },
  {
    id: "long-term-grief",
    title: "Long-Term Grief",
    body: `Western culture — and often the church — operates with an implicit expectation that grief should be largely resolved within a few months. This expectation is harmful and inaccurate. Research on bereavement consistently shows that acute grief typically extends 12 to 24 months, and that many bereaved people describe significant grief activity for years, and for the loss of children, potentially for life. The first year is organized around "firsts" — the first birthday without them, the first Thanksgiving, the first Christmas, the first anniversary of the death. Each of these carries anticipatory grief (dreading the day) and then the grief of the day itself. Knowing this pattern in advance can reduce its power somewhat. The second year is often described as harder than the first. In the first year, the community is present, the crisis is fresh, and there is a kind of emergency energy that sustains. In the second year, everyone else has moved on. The bereaved person is expected to be "better." But the grief has often deepened — the reality has fully arrived, the numbness is gone, and the person must now live the reconstructed life without support. Pastoral care that extends deliberately into the second year — a call on the anniversary, a meal on the deceased's birthday, a note that says "I'm thinking of you today" — is profoundly meaningful. Grief that returns on anniversaries, at life events, or without obvious trigger is normal and does not indicate incomplete healing. A wedding, a grandchild's birth, a graduation — all of these can surface the acute awareness of absence with remarkable freshness, even decades later. This is not relapse. It is the lasting mark of real love, and it belongs inside the larger Christian hope that the reunion is coming.`,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChristianGriefGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [scriptureFilter, setScriptureFilter] = useState<ScriptureCategory>("loved-one");

  const toggle = (key: string) =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "A Theology of Grief" },
    { id: "stages", label: "Stages & Forms" },
    { id: "scripture", label: "Scripture for the Grieving" },
    { id: "community", label: "Grieving in Community" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            display: "inline-block", background: `${PURPLE}22`, color: PURPLE,
            padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700,
            letterSpacing: 2, marginBottom: 16, border: `1px solid ${PURPLE}44`,
          }}>
            WALKING THROUGH LOSS
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,44px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Christian Grief Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 580, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            Grief is not the opposite of faith. It is the cry of faith in the dark. Jesus wept.
            The Psalter is one-third lament. The cross is God's entry into human suffering.
            The church that knows how to grieve has something the world desperately needs.
          </p>
        </div>

        {/* Scripture banner */}
        <div style={{
          background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10,
          padding: "14px 22px", marginBottom: 32, textAlign: "center",
        }}>
          <p style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14 }}>
            "Blessed are those who mourn, for they will be comforted." — Matthew 5:4
            &nbsp;&nbsp;·&nbsp;&nbsp;
            "Weep with those who weep." — Romans 12:15
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: "flex", gap: 6, marginBottom: 36, background: CARD,
          borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap",
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1, minWidth: 140, padding: "10px 8px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab 1: Theology ── */}
        {activeTab === "theology" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: 28, fontSize: 15 }}>
              Christianity does not offer an escape from grief — it offers a transformed grief.
              These six convictions form the theological foundation for Christian lament.
            </p>
            {THEOLOGY_ITEMS.map((item, i) => (
              <div
                key={item.id}
                style={{
                  background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10,
                  marginBottom: 12, overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(`theo-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "18px 22px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: PURPLE, fontWeight: 600 }}>{item.verses}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
                    {expanded[`theo-${i}`] ? "−" : "+"}
                  </span>
                </button>
                {expanded[`theo-${i}`] && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>
                    {item.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── Tab 2: Stages ── */}
        {activeTab === "stages" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: 32, fontSize: 15 }}>
              Grief does not move in a straight line. These seven stages are not sequential requirements
              but common territories — visited repeatedly, out of order, and in different intensities.
              Each has biblical resonance and practical wisdom.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {STAGES.map((stage, i) => (
                <div key={stage.num} style={{ display: "flex", gap: 0 }}>
                  {/* Timeline spine */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 48, flexShrink: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%", background: stage.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900, fontSize: 16, color: "#07070F", flexShrink: 0, zIndex: 1,
                    }}>
                      {stage.num}
                    </div>
                    {i < STAGES.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 20, background: `${stage.color}44`, marginTop: 4, marginBottom: 4 }} />
                    )}
                  </div>

                  {/* Content card */}
                  <div style={{
                    flex: 1, marginLeft: 16, marginBottom: i < STAGES.length - 1 ? 20 : 0,
                    background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12,
                    borderLeft: `3px solid ${stage.color}`, overflow: "hidden",
                  }}>
                    <button
                      onClick={() => toggle(`stage-${i}`)}
                      style={{
                        width: "100%", background: "none", border: "none", color: TEXT,
                        padding: "18px 22px", textAlign: "left", cursor: "pointer",
                        display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                      }}
                    >
                      <div style={{ fontWeight: 800, fontSize: 17 }}>{stage.name}</div>
                      <span style={{ color: MUTED, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                        {expanded[`stage-${i}`] ? "−" : "+"}
                      </span>
                    </button>
                    <div style={{ padding: "0 22px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                      {stage.detail}
                    </div>
                    {expanded[`stage-${i}`] && (
                      <div style={{ padding: "0 22px 20px", display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: 220, background: BG, borderRadius: 8, padding: 14 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, marginBottom: 8, letterSpacing: 1 }}>
                            PRACTICALLY SPEAKING
                          </div>
                          <p style={{ fontSize: 13, color: TEXT, margin: 0, lineHeight: 1.65 }}>{stage.practical}</p>
                        </div>
                        <div style={{ flex: 1, minWidth: 220, background: BG, borderRadius: 8, padding: 14 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, marginBottom: 8, letterSpacing: 1 }}>
                            SPIRITUALLY SPEAKING
                          </div>
                          <p style={{ fontSize: 13, color: TEXT, margin: 0, lineHeight: 1.65 }}>{stage.spiritual}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 3: Scripture ── */}
        {activeTab === "scripture" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              Scripture speaks into every form of grief with specificity and honesty.
              Select your situation below.
            </p>

            {/* Filter buttons */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              {SCRIPTURE_FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setScriptureFilter(f.id)}
                  style={{
                    padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13,
                    cursor: "pointer", border: `1px solid ${scriptureFilter === f.id ? GREEN : BORDER}`,
                    background: scriptureFilter === f.id ? `${GREEN}18` : CARD,
                    color: scriptureFilter === f.id ? GREEN : MUTED,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {SCRIPTURE_MAP[scriptureFilter].map((card, i) => (
                <div
                  key={`${scriptureFilter}-${i}`}
                  style={{
                    background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12,
                    padding: 22, borderLeft: `3px solid ${GREEN}`,
                  }}
                >
                  <div style={{
                    display: "inline-block", background: `${GREEN}18`, color: GREEN,
                    padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {card.ref}
                  </div>
                  <p style={{
                    fontSize: 15, fontStyle: "italic", color: TEXT, lineHeight: 1.75,
                    margin: "0 0 12px",
                  }}>
                    {card.text}
                  </p>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 4: Community ── */}
        {activeTab === "community" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: 28, fontSize: 15 }}>
              The primary means of divine comfort in grief is the body of Christ. The church that
              knows how to accompany grief is practicing the love of God in one of its most necessary forms.
            </p>
            {COMMUNITY_ITEMS.map((item, i) => (
              <div
                key={item.id}
                style={{
                  background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10,
                  marginBottom: 12, overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(`comm-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "18px 22px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 800, fontSize: 16,
                  }}
                >
                  {item.title}
                  <span style={{ color: MUTED, fontSize: 22, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>
                    {expanded[`comm-${i}`] ? "−" : "+"}
                  </span>
                </button>
                {expanded[`comm-${i}`] && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, lineHeight: 1.8, fontSize: 14, whiteSpace: "pre-line" }}>
                    {item.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
