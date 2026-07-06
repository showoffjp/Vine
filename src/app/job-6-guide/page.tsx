"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS: string[] = [
  "Overview",
  "If My Grief Were Weighed",
  "The Longing to Be Crushed",
  "A Brother Like a Dry Streambed",
  "Application",
];

const sections = [
  {
    id: "Overview",
    heading: "Overview of Job 6",
    reference: "Job 6:1&ndash;30",
    paragraphs: [
      "Job answers Eliphaz, and his reply spans chapters 6 and 7. Chapter 6 is directed largely at his friends; chapter 7 will turn to address God directly. In chapter 6 Job does three things: he defends the legitimacy of his anguish against Eliphaz's charge that he is overreacting; he renews his desperate longing for death; and he delivers a wounded, searing rebuke of the friends who came to comfort him and instead added to his pain. It is the response of a man who reached out for compassion and found accusation.",
      "The heart of the chapter is Job's cry that his suffering has not been rightly weighed. Eliphaz treated Job's lament as the impatience of a fool; Job insists that if anyone could set his grief and calamity on a scale, they would see that his &lsquo;rash' words are the entirely reasonable response of a man carrying an unbearable weight. He is not asking to be excused for feeling too much; he is asking to be believed about how much he is actually carrying. This is one of the deepest needs of the suffering: not to be told they are overreacting, but to have the true magnitude of their pain acknowledged.",
      "Chapter 6 also contains one of the Bible's most piercing portraits of friendship failed. Job compares his friends to a wadi &mdash; a desert streambed that runs with water in the cool, wet season when no one needs it, and dries up to nothing in the scorching heat when the thirsty caravan arrives desperate for a drink. It is a devastating image of comforters who are present when comfort is easy and absent when it is costly. Job's rebuke is not petty; it is the honest grief of a man betrayed by those who should have stood with him.",
      "Underneath the whole chapter runs Job's refusal to lie. Eliphaz has, in effect, invited him to confess a sin and be restored; Job will not. He would rather die honest than live by a false confession. &ldquo;I have not denied the words of the Holy One&rdquo; (6:10). This integrity &mdash; the refusal to purchase comfort with a lie about himself or about God &mdash; is the spine of Job's character throughout the book, and the very thing that will vindicate him in the end. Job's anguish is real, his words are rash, and his integrity is unbroken, all at once.",
    ],
  },
  {
    id: "If My Grief Were Weighed",
    heading: "Heavier Than the Sand of the Sea",
    reference: "Job 6:1&ndash;7",
    paragraphs: [
      "Job's opening words answer Eliphaz's charge of impatience head-on: &ldquo;Oh that my vexation were weighed, and all my calamity laid in the balances! For then it would be heavier than the sand of the sea; therefore my words have been rash&rdquo; (6:2-3). Job does not deny that his words have been wild &mdash; he concedes it. But he explains it: weigh my suffering, and you will see that my rashness is proportionate. The problem is not that Job is overreacting; it is that his friends have underestimated the sheer mass of what he is bearing.",
      "This is a crucial and pastorally vital distinction. Eliphaz heard Job's lament and concluded that Job's faith must be shallow to break like this. Job responds that the measure of a lament is the weight of the grief behind it. His words are heavy because his loss is heavy &mdash; heavier than the sand of the sea. He is not asking his friends to excuse the intensity of his cries; he is asking them to reckon with the intensity of his pain, which alone makes sense of the cries. To judge a sufferer's words without weighing their suffering is to judge unjustly.",
      "Job then explains the source of his torment in startling terms: &ldquo;For the arrows of the Almighty are in me; my spirit drinks their poison; the terrors of God are arrayed against me&rdquo; (6:4). Here Job does something the friends never do: he attributes his suffering directly to God, and he does so as the deepest layer of his pain. It is not merely that Job has lost his children and health; it is that he experiences these losses as arrows shot by God himself, poison drunk by his spirit. The felt sense that God has turned against him is a torment beyond the losses themselves.",
      "He defends his outcry with homely images: the wild donkey does not bray over grass, nor the ox low over fodder &mdash; animals cry out only when something is wrong (6:5); tasteless food cannot be eaten without salt (6:6). In other words, do not despise my groaning; creatures groan when there is real cause, and there is real cause here. Job is insisting on the reasonableness of his lament against friends who have treated it as a symptom of weak faith. His cry is not the noise of a spoiled soul but the honest sound of a creature in genuine agony.",
    ],
  },
  {
    id: "The Longing to Be Crushed",
    heading: "Oh That God Would Let Loose His Hand",
    reference: "Job 6:8&ndash;13",
    paragraphs: [
      "Job returns to the death-wish of chapter 3, but now he frames it as a prayer: &ldquo;Oh that I might have my request, and that God would fulfill my hope, that it would please God to crush me, that he would let loose his hand and cut me off!&rdquo; (6:8-9). It is a shocking petition &mdash; Job asks God to finish the job, to complete his destruction and grant him the release of death. The suffering has become so total that death appears not as an enemy but as a mercy, the one gift God could give that would end the torment.",
      "But notice the reason Job gives, for it reveals the unbroken core of his faith even in this dark request: &ldquo;This would be my comfort; I would even exult in pain unsparing, for I have not denied the words of the Holy One&rdquo; (6:10). Even in longing for death, Job's consolation is that he has kept faith &mdash; he has not denied God's words. His integrity matters more to him than his life. He would rather die with his faith intact than live by betraying it. This is the very thing the Accuser said no one would do: love God when loving him brings only pain.",
      "Job then voices the exhaustion beneath the death-wish: &ldquo;What is my strength, that I should wait? And what is my end, that I should be patient? Is my strength the strength of stones, or is my flesh bronze?&rdquo; (6:11-12). He is not made of stone or bronze; he is flesh, and his flesh is failing. Eliphaz has counseled patience; Job replies that he has no strength left to be patient with. There is a limit to human endurance, and Job has reached it. &ldquo;Have I any help in me, when resource is driven from me?&rdquo; (6:13). He is a man scraped empty.",
      "This honest confession of the limits of human strength is itself a kind of faith, and it is precisely where the gospel meets the sufferer. Job at the end of his strength, with all resource driven from him, is exactly the person to whom Christ says, &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28), and to whom Paul's discovery applies: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness&rdquo; (2 Corinthians 12:9). Job does not yet know this help, and his longing for death is the cry of a man who cannot see the far side of the valley. But his very emptiness is the place where grace does its deepest work.",
    ],
  },
  {
    id: "A Brother Like a Dry Streambed",
    heading: "You Have Become Nothing",
    reference: "Job 6:14&ndash;30",
    paragraphs: [
      "Job now turns the full force of his grief on his friends, and it is one of the most moving indictments of failed friendship in all of literature. It opens with a principle: &ldquo;He who withholds kindness from a friend forsakes the fear of the Almighty&rdquo; (6:14). To fail a friend in his affliction is not a small social lapse; it is, Job says, a form of forsaking God himself. Kindness to the suffering is a matter of true religion, and its absence exposes a heart that has let go of the fear of God.",
      "Then comes the unforgettable image: &ldquo;My brothers are treacherous as a torrent-bed, as torrential streams that pass away&rdquo; (6:15). Job describes a wadi &mdash; a desert streambed that gushes with dark water when the ice melts and the rains come (6:16), but that, when the hot season comes, &ldquo;they disappear; when it is hot, they vanish from their place&rdquo; (6:17). Caravans turn aside toward it in hope of water, &ldquo;they come there and are ashamed&rdquo; (6:20), finding only dry stones where they expected life. &ldquo;For you have now become nothing; you see my calamity and are afraid&rdquo; (6:21).",
      "The image is precise and devastating. A friend who is present in the good times, when friendship costs nothing, but who evaporates when the friend's suffering makes friendship costly and frightening, is like that dry streambed: worse than no stream at all, because he raised a hope he could not meet. Job's friends came, but when they saw the true horror of his calamity, fear took over, and their comfort turned to accusation &mdash; they became &lsquo;nothing,&rsquo; dry stones to a dying man of thirst. Job feels not merely unhelped but betrayed by the hope their coming had raised.",
      "Job ends by pleading for what he actually needs: honesty and a fair hearing. &ldquo;Teach me, and I will be silent; make me understand how I have gone astray&rdquo; (6:24) &mdash; he is willing to be corrected if they can show him a real fault, but their accusations are empty. &ldquo;How forceful are upright words! But what does reproof from you reprove?&rdquo; (6:25). He begs them not to treat his desperate words as if they were the settled arguments of a debater to be refuted: &ldquo;Do you think that you can reprove words, when the speech of a despairing man is wind?&rdquo; (6:26). This is a plea every sufferer will recognize &mdash; do not cross-examine my anguish as though it were a thesis; the wild words of despair are not a position to be attacked but a wound to be tended. &ldquo;Please turn; let no injustice be done&hellip;my vindication is at stake&rdquo; (6:29).",
    ],
  },
  {
    id: "Application",
    heading: "Living Job 6",
    reference: "Reflections on Grief and Friendship",
    paragraphs: [
      "<strong>Weigh the suffering before you judge the words.</strong> Job's plea &mdash; &lsquo;oh that my grief were weighed&rsquo; &mdash; is the plea of every person whose lament has been dismissed as overreaction. When someone's words in suffering seem wild or excessive, resist the urge to correct the words; instead, try to weigh the grief behind them. Often what looks like an overreaction is a proportionate response to a weight you have not troubled to measure. To honor a sufferer is to reckon honestly with how much they are actually carrying.",
      "<strong>Do not cross-examine a despairing person's words.</strong> &lsquo;Do you think that you can reprove words, when the speech of a despairing man is wind?&rsquo; The wild things people say in the depths of grief are not carefully reasoned positions to be debated and refuted; they are the sounds a wound makes. When a suffering friend says something theologically imprecise or even shocking, the right response is rarely a rebuttal. Tend the wound; do not litigate the words. There is a time to speak truth, but the raw hours of anguish are usually not it.",
      "<strong>Be a stream that runs in the heat, not a wadi that vanishes.</strong> Job's most searing charge is that his friends were like a desert streambed &mdash; full when water was easy, dry when the thirsty came desperate. Ask yourself honestly what kind of friend you are when friendship becomes costly and frightening, when a friend's suffering is prolonged, awkward, and unfixable. It is easy to show up for the funeral and vanish for the long grief that follows. &lsquo;He who withholds kindness from a friend forsakes the fear of the Almighty&rsquo; &mdash; faithful presence in another's suffering is not optional to true religion; it is part of it.",
      "<strong>Bring your emptiness to the One who fills it.</strong> Job at the end of his strength &mdash; &lsquo;is my flesh bronze? &hellip; resource is driven from me&rsquo; &mdash; is the very person to whom Christ speaks his tenderest word. Job could not yet see it, but the emptiness he confessed is the place grace does its deepest work: &lsquo;my power is made perfect in weakness&rsquo; (2 Corinthians 12:9). If you are scraped empty, that is not the end of faith; it may be the beginning of a deeper dependence. <strong>Prayer prompt:</strong> &ldquo;Lord, I have no strength of my own left; I am not made of stone or bronze. I bring you my emptiness, and I ask for your grace, which is sufficient. And make me a friend who stays when staying is hard &mdash; a stream that runs in the heat.&rdquo;",
    ],
  },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: "Job 6",
  title: "Job 6: Oh That My Grief Were Weighed",
  intro: "Job answers Eliphaz &mdash; not by conceding the false diagnosis but by insisting his anguish be reckoned honestly. His words are rash because his grief is &lsquo;heavier than the sand of the sea.&rsquo; And he delivers one of Scripture's most piercing rebukes: friends who came to comfort have become a dry streambed to a dying man of thirst.",
  tabs: TABS,
  sections,
  calloutTitle: "A Stream That Runs in the Heat",
  calloutBody: "Job's friends were like a desert wadi &mdash; full of water in the easy season, bone-dry when the thirsty caravan arrived desperate. It is a picture of comforters present when comfort costs nothing and absent when it costs everything. 'He who withholds kindness from a friend forsakes the fear of the Almighty.' Faithful presence in another's long suffering is not optional to true religion &mdash; it is part of it.",
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
