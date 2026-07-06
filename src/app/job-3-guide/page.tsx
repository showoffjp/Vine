"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS: string[] = [
  "Overview",
  "The Silence Breaks",
  "Let That Day Be Darkness",
  "Why Did I Not Die at Birth",
  "Why Is Light Given",
  "Application",
];

const sections = [
  {
    id: "Overview",
    heading: "Overview of Job 3",
    reference: "Job 3:1&ndash;26",
    paragraphs: [
      "After seven days of silence, Job speaks &mdash; and the serene worshiper of the prologue gives way to a man in agony. Job 3 is the first of the great poetic laments that fill the body of the book, and it is shocking in its darkness. Job does not curse God, exactly as the prologue promised he would not; but he curses the day of his birth, longs never to have existed, and cries out for the release of death. This is the honest underside of the faith that blessed God's name in chapter 1. Both are true; both belong to a real believer.",
      "The chapter is crucial for how we read the entire Bible, because it teaches us that Scripture makes room for lament &mdash; for the raw, unedited voicing of anguish before God. Job does not paper over his pain with pious clich&eacute;s. He says the unsayable: that he wishes he had never been born, that the grave looks better than his life. And the God who inspired this book saw fit to preserve every word of it, without rebuke. The presence of Job 3 in the canon is the divine permission slip for honest grief. Faith is not the suppression of anguish; it is the bringing of anguish to the right place &mdash; and here, even the wish never to have been is brought into the hearing of God.",
      "The structure of Job's lament moves through three questions of deepening despair. First, he curses the day of his birth and the night of his conception, wishing them blotted from the calendar (3:1-10). Then he asks why he did not die at birth, picturing the grave as a place of rest where the weary are finally at peace (3:11-19). Finally, he asks the most anguished question of all: why is light &mdash; life itself &mdash; given to those who long for death and cannot find it (3:20-26). The lament spirals downward from the day of his birth, to the moment of his birth, to the unbearable fact of his continued life.",
      "It is important to say what Job 3 is not. It is not apostasy; Job never renounces God or accuses him of wrong, and even here he addresses his anguish God-ward. Nor is it the book's final word; the God who lets Job voice this darkness will, in the end, meet him, answer him not with explanations but with himself, and restore him. Job 3 is the depth of the valley, and the whole book is the assurance that the valley is not the end. For now, it stands as Scripture's unflinching acknowledgment that faithful people sometimes wish they were dead &mdash; and that such a wish, brought honestly before God, is not the end of faith but a station along its hard road.",
    ],
  },
  {
    id: "The Silence Breaks",
    heading: "After This Job Opened His Mouth",
    reference: "Job 3:1&ndash;2",
    paragraphs: [
      "&ldquo;After this Job opened his mouth and cursed the day of his birth&rdquo; (3:1). The two small words &lsquo;after this&rsquo; carry enormous weight. After the seven days and seven nights of silence, after the exhausting accumulation of loss and pain, after enduring in wordless grief for a week &mdash; then the dam breaks. Job's lament is not the first thing he says; it is what finally comes after a long attempt to bear the unbearable in silence. Grief has its own timetable, and the book is honest that even the most faithful sufferer reaches a point where the pain must find words or break the man who holds it in.",
      "This is the same Job who, in chapter 1, blessed the name of the LORD and, in chapter 2, refused his wife's counsel to curse God. The book places these responses side by side without embarrassment. It does not present the worship of chapter 1 as Job's &lsquo;real&rsquo; faith and the lament of chapter 3 as a lapse, nor the reverse. It presents both as the authentic voice of a man who fears God and is being crushed. The worshiper and the lamenter are the same person, and the Bible refuses to make us choose between them.",
      "There is deep pastoral wisdom here for anyone who has judged their own grief, or another's, as a failure of faith. The believer who blesses God at the graveside and the believer who cries out in the night that they cannot go on may be &mdash; often are &mdash; the very same believer, sometimes within the same hour. Job 3 exists so that the Christian in the depths will not add to their suffering the false guilt of thinking that lament is unbelief. The Psalms are full of the same honesty; roughly a third of them are laments. The path through grief runs not around the darkness but through it, and Scripture walks that road with us rather than shaming us for being on it.",
    ],
  },
  {
    id: "Let That Day Be Darkness",
    heading: "Let the Day Perish",
    reference: "Job 3:3&ndash;10",
    paragraphs: [
      "Job's first cry is to un-make the day he was born: &ldquo;Let the day perish on which I was born, and the night that said, &lsquo;A man is conceived&rsquo;&rdquo; (3:3). What follows is a kind of anti-creation poem. Where Genesis 1 begins with &lsquo;Let there be light,&rsquo; Job cries, in effect, &lsquo;Let there be darkness&rsquo;: &ldquo;Let that day be darkness! May God above not seek it, nor light shine upon it&rdquo; (3:4). He summons gloom and deep darkness to reclaim the day, clouds to settle over it, blackness to terrify it (3:5-6). He wishes the day struck from the calendar entirely, never counted among the days of the year.",
      "The intensity of the imagery is almost unbearable. Job calls on those &ldquo;who are ready to rouse up Leviathan&rdquo; (3:8) &mdash; the practitioners of curse and the chaos-monster of ancient imagination &mdash; to blot out his birthday. He wishes the morning stars of that dawn had stayed dark, that its eyes had never seen the first light of day (3:9). This is grief reaching for the most extreme language it can find, straining to express a pain that ordinary words cannot hold. Job is not making a considered theological statement about the goodness of creation; he is a man in torment wishing he had never existed, and the poetry is shaped to let us feel the full temperature of that wish.",
      "The reason surfaces at the end of the section: &ldquo;because it did not shut the doors of my mother's womb, nor hide trouble from my eyes&rdquo; (3:10). All the cursing of the day funnels to this: Job wishes he had never been born because birth was the door through which all this &lsquo;trouble&rsquo; entered his eyes. His complaint is not against God's existence but against his own; he does not say &lsquo;there is no God&rsquo; but &lsquo;would that there were no me.&rsquo; This is despair, but it is a despair that still assumes God is there &mdash; still, even in cursing his birthday, addressing a universe governed by the God whose hand he cannot escape.",
      "That Job never crosses the line into cursing God, even here, is the quiet miracle the Accuser's whole strategy was meant to break. He curses his day; he does not curse his Maker. The distinction preserves the prologue's verdict: the Accuser predicted Job would curse God to his face, and even in the pit of Job 3, that prediction stays false. Job's love for God survives even his wish never to have been &mdash; which is precisely the impossible thing the Accuser insisted could not exist.",
    ],
  },
  {
    id: "Why Did I Not Die at Birth",
    heading: "There the Weary Are at Rest",
    reference: "Job 3:11&ndash;19",
    paragraphs: [
      "Having wished his birthday unmade, Job asks the next, quieter question: &ldquo;Why did I not die at birth, come out from the womb and expire?&rdquo; (3:11). If he had to be born, why could he not have died immediately &mdash; slipped from the womb straight into the grave, spared the whole weary journey between? He imagines it almost longingly: &ldquo;For then I would have lain down and been quiet; I would have slept; then I would have been at rest&rdquo; (3:13). The grave, to the suffering Job, looks not like a horror but like a bed.",
      "What follows is one of the most striking passages in the book &mdash; Job's picture of the grave as the great leveler and the place of rest. There, he says, lie kings and counselors, princes with their gold; there the wicked cease from troubling; there &ldquo;the weary are at rest&rdquo; (3:17). &ldquo;The small and the great are there, and the slave is free from his master&rdquo; (3:19). In death, the crushing hierarchies and cruelties of life dissolve; the prisoner hears no more the taskmaster's voice; the exhausted finally lie down. Job is not offering a developed doctrine of the afterlife; he is voicing the sufferer's ache for the one thing his life will not give him &mdash; rest.",
      "This longing for death is not, in Job, a rejection of God's gift of life so much as the cry of a man whose life has become nothing but pain. It is honest, and the Bible does not censor it. But it must be read in the light of the whole canon, which will answer Job's ache for rest far more deeply than the grave ever could. For the true rest the weary long for is not found in the neutrality of death but in a Person: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28). Job reaches toward the grave as the only rest he can imagine; the gospel holds out a rest that death itself cannot give and cannot take away.",
      "There is a sober pastoral realism here that the church must not soften. Faithful people sometimes long to die. That longing, brought honestly before God as Job brings it, is not proof of lost faith &mdash; it is here, in Scripture, on the lips of a man God himself calls blameless. The right response to such a longing in ourselves or others is not condemnation but the same thing the whole book offers: honest lament brought to God, the patient company of those who will sit in the ashes, and the slow, sure hope that the God who permits the darkness has not abandoned the sufferer to it, and will yet meet them in it.",
    ],
  },
  {
    id: "Why Is Light Given",
    heading: "Why Is Light Given to Him Who Is in Misery?",
    reference: "Job 3:20&ndash;26",
    paragraphs: [
      "Job's lament reaches its deepest point in a question flung, it seems, at heaven itself: &ldquo;Why is light given to him who is in misery, and life to the bitter in soul, who long for death, but it comes not?&rdquo; (3:20-21). &lsquo;Light&rsquo; here means life itself &mdash; the daily continuance of existence. Job cannot understand why life is prolonged for those who would welcome its end, who &ldquo;dig for it more than for hidden treasures&rdquo; and &ldquo;rejoice exceedingly&hellip;when they find the grave&rdquo; (3:21-22). The cruelest thing about his suffering, he feels, is that it does not kill him; it only continues.",
      "The question &lsquo;why?&rsquo; that surfaces here will echo through the rest of the book. Job is not asking a detached philosophical question; he is asking the anguished why of the sufferer who cannot see any purpose in the prolonging of his pain. Significantly, the book will never give Job the answer to this &lsquo;why.&rsquo; When God finally speaks from the whirlwind (chapters 38-41), he does not explain the reason for Job's suffering at all. The reader knows the backdrop from chapters 1-2; Job never does. The book thus refuses the comfort of an explanation and offers instead the deeper comfort of the God who comes in person &mdash; a pattern that should shape how every believer holds their own unanswered &lsquo;why.&rsquo;",
      "The lament ends with a confession of total unrest: &ldquo;For the thing that I fear comes upon me, and what I dread befalls me. I am not at ease, nor am I quiet; I have no rest, but trouble comes&rdquo; (3:25-26). Whatever Job most dreaded in the days of his prosperity &mdash; perhaps the very loss of the children he so carefully interceded for &mdash; has now come. His last word in the chapter is &lsquo;trouble&rsquo; (rogez, turmoil, agitation). The man who once sat secure at the head of his household now knows no ease, no quiet, no rest &mdash; only the ceaseless coming of trouble. It is the bottom of the valley.",
      "And yet even this darkest lament is addressed within the hearing of God, and that changes everything about it. Job's questions are not thrown into a void; they are, however desperately, still directed at the God he has not stopped believing is there. This is the crucial difference between biblical lament and mere despair: lament complains <em>to</em> God, where despair turns away <em>from</em> him. Job stays in the conversation. And because he stays, the God he cannot see and does not understand will, in the fullness of the book, answer him &mdash; not with a syllogism but with his presence, and finally with restoration. The darkness of Job 3 is real, but it is not the end of the story; it is the night before the God who speaks from the whirlwind.",
    ],
  },
  {
    id: "Application",
    heading: "Living Job 3",
    reference: "Reflections for the Depths",
    paragraphs: [
      "<strong>Lament is a language of faith, not its failure.</strong> Job 3 is in the Bible so that you never have to pretend before God. If you are in a season where you can barely speak your pain, or where the honest cry is &lsquo;I wish I had never been born,&rsquo; know that such words are not foreign to Scripture &mdash; they are in it, on the lips of a man God calls blameless, preserved without rebuke. Bring your anguish to God unedited. The path through grief runs through the darkness, not around it, and the God who inspired Job 3 will walk it with you.",
      "<strong>Complain to God, not away from him.</strong> The one line Job does not cross is the line from lament into abandonment. He curses his day but not his Maker; he flings his &lsquo;why&rsquo; at heaven rather than turning his back on heaven. This is the difference between biblical lament and despair: lament stays in the conversation. When you are in the depths, keep addressing God &mdash; even in complaint, even in anger, even in the wish to die &mdash; because staying in the conversation is staying within reach of the only One who can finally answer. <strong>Prayer prompt:</strong> &ldquo;God, I do not understand, and part of me wishes it were over. I bring you even this. I will not let go of you. Meet me in the dark.&rdquo;",
      "<strong>Some &lsquo;whys&rsquo; will not be answered &mdash; and God is still the answer.</strong> Job asks why life is given to the miserable, and the book never tells him. When God finally comes, he does not explain; he reveals himself, and that proves to be enough. Make your peace, slowly, with the truth that the deepest comfort in suffering is not a reason but a Presence. The God who withholds the explanation does not withhold himself, and in the end it is the Redeemer's face, not a satisfying argument, that quiets the soul (Job 42:5).",
      "<strong>Bring your longing for rest to the true Rest.</strong> Job reached toward the grave because it was the only rest he could imagine &mdash; a place where &lsquo;the weary are at rest.&rsquo; But there is a rest the grave cannot give and cannot take: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28). The One who spoke those words entered the deepest darkness himself, was forsaken so that we never finally would be, and rose so that for the believer even the grave is now a doorway and not a dead end. If you are weary to the point of longing for the end, take that very weariness to Jesus, who is himself the rest your soul is aching for.",
    ],
  },
];

const data: SectionGuideData = {
  accent: "#6B4FBB",
  badge: "Job 3",
  title: "Job 3: Why Is Light Given to the Suffering?",
  intro: "The seven-day silence breaks, and the worshiper of the prologue pours out his anguish &mdash; cursing the day of his birth, longing for the rest of the grave, and asking the sufferer's rawest question. Job 3 is Scripture's permission for honest lament: he curses his day, but never his God.",
  tabs: TABS,
  sections,
  calloutTitle: "Honest Darkness Is Not the End of Faith",
  calloutBody: "Job never crosses from lament into abandonment &mdash; he curses his birthday, not his Maker, and flings his &lsquo;why&rsquo; at heaven rather than turning away from it. That is the difference between biblical lament and despair: lament complains to God and stays in the conversation. Bring even your darkest words to him. The night of Job 3 is real, but it is the night before the God who answers from the whirlwind, and before the Redeemer who is himself the rest the weary long for.",
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
