"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS: string[] = [
  "Overview",
  "How Long Will You Hunt for Words?",
  "The Lamp Is Put Out",
  "Terrors on Every Side",
  "Application",
];

const sections = [
  {
    id: "Overview",
    heading: "Overview of Job 18",
    reference: "Job 18:1&ndash;21",
    paragraphs: [
      "Bildad's second speech, like Eliphaz's, is harsher than his first. Offended by Job's refusal to accept the friends' verdict and by his sharp retorts, Bildad drops all pretense of comfort and delivers an unrelenting, almost gleeful catalogue of the doom of the wicked. The entire speech (after a brief opening rebuke) is a portrait of the terrible fate that awaits the ungodly &mdash; and there is no mistaking that Bildad intends Job to see himself in it.",
      "The speech has two parts. First, a short, irritated rebuke: how long will Job go on talking, treating his friends as stupid beasts? (18:1-4). Second, a long and vivid description of the destruction of the wicked: their light is extinguished, snares and traps surround their feet, terrors chase them on every side, disease consumes their skin, they are torn from their tent and driven into darkness, and their memory perishes from the earth with no descendants to carry their name (18:5-21).",
      "Bildad's theology is the rigid retribution principle taken to its cruelest extreme. He has no category whatsoever for innocent suffering; in his world, the wicked are destroyed and the righteous flourish, period. So the crushing, systematic doom he describes must, by his logic, be Job's own fate and its explanation. Every detail &mdash; the extinguished lamp, the terrors, the disease, the loss of children, the perished memory &mdash; is a coded accusation: this is what happens to the wicked, and this is happening to you, so you must be wicked.",
      "There is a bitter irony that Bildad cannot see. His portrait of the wicked man &lsquo;torn from the tent in which he trusted&rsquo; with &lsquo;no posterity or progeny among his people&rsquo; (18:14, 19) describes Job's outward losses with painful accuracy &mdash; Job has indeed lost his children and his security. But it utterly misreads their meaning. Bildad reads catastrophe as the signature of the wicked; the reader knows Job's catastrophe is the testing of the righteous. And the deepest irony of all awaits the cross, where the truly righteous One would bear every mark of the &lsquo;wicked man's&rsquo; doom &mdash; extinguished, seized, driven out, cut off from the land of the living &mdash; not as the wage of his own sin but as the ransom for ours. Bildad's theology could never have recognized the Redeemer; it could only ever condemn him.",
    ],
  },
  {
    id: "How Long Will You Hunt for Words?",
    heading: "Why Are We Counted as Cattle?",
    reference: "Job 18:1&ndash;4",
    paragraphs: [
      "Bildad opens with impatient irritation: &ldquo;How long will you hunt for words? Consider, and then we will speak. Why are we counted as cattle? Why are we stupid in your sight?&rdquo; (18:2-3). He is stung by Job's earlier retort that even the beasts know the theology the friends are so proud of (12:7), and by Job's mockery of their wisdom. Bildad's pride is wounded: why do you treat us as stupid cattle? He demands that Job stop talking (&lsquo;how long will you hunt for words?&rsquo;) and listen.",
      "Notice that Bildad's opening is entirely about the friends' offended dignity, not about Job's suffering. He is not moved by Job's broken spirit or his ready grave (chapter 17); he is annoyed at being disrespected. The debate has become, for the friends, a matter of winning and of defending their own honor and theology, rather than ministering to a man in agony. When comfort becomes a contest, the sufferer is forgotten and the comforter's ego takes center stage.",
      "Then Bildad turns cruel: &ldquo;You who tear yourself in your anger, shall the earth be forsaken for you, or the rock be removed out of its place?&rdquo; (18:4). He accuses Job of tearing himself apart in unreasonable anger, and then mocks the idea that the moral order of the universe should be rearranged just to accommodate Job's case. Do you think, Bildad sneers, that the fixed laws of the world &mdash; the earth, the rock &mdash; should be overturned for your sake? Do you imagine you are so special that God should make an exception to how the universe works?",
      "The irony is that Bildad has accidentally stumbled onto the truth without recognizing it. Job's case <em>is</em> an exception to the tidy rule &mdash; not because Job is special in himself, but because the tidy rule was never the whole truth. God's dealings with humanity are not reducible to a mechanical law of retribution that can never bend. Bildad, defending the fixed rock of his system, cannot conceive that the God who set the rock in place is freer and more mysterious than the rule. And ultimately, God <em>would</em> do the unthinkable for the sake of sufferers &mdash; not rearrange the rocks, but give his own Son, the most extravagant exception to every expectation, so that the guilty might be spared and the righteous Sufferer vindicated.",
    ],
  },
  {
    id: "The Lamp Is Put Out",
    heading: "The Light of the Wicked Is Put Out",
    reference: "Job 18:5&ndash;15",
    paragraphs: [
      "Bildad launches into his theme: &ldquo;Indeed, the light of the wicked is put out, and the flame of his fire does not shine. The light is dark in his tent, and his lamp above him is put out&rdquo; (18:5-6). The extinguished lamp is a powerful ancient image &mdash; a lit lamp meant life, prosperity, and continuity; to have one's lamp put out meant death, ruin, and the end of one's line. Bildad declares that this is the certain fate of the wicked: their light goes dark. The implication for Job, whose life has gone dark, is unmistakable.",
      "Bildad then piles up images of the wicked man trapped: &ldquo;His strong steps are shortened, and his own schemes throw him down. For he is cast into a net by his own feet, and he walks on its mesh. A trap seizes him by the heel; a snare lays hold of him&rdquo; (18:7-9). Net, trap, snare, noose, rope &mdash; Bildad heaps up six different words for a hidden trap (18:8-10), portraying the wicked man as caught in a web of his own making, snared at every step, unable to move without being seized. The wicked man's own schemes become the trap that destroys him.",
      "The terrors intensify: &ldquo;Terrors frighten him on every side and chase him at his heels. His strength is famished, and calamity is ready for his stumbling. It consumes the parts of his skin; the firstborn of death consumes his limbs&rdquo; (18:11-13). The &lsquo;firstborn of death&rsquo; is a vivid and grim phrase &mdash; some deadly disease, death's own most powerful offspring, devouring the wicked man's skin and limbs. Again, the parallel to Job's own diseased body (2:7) is pointed and cruel.",
      "The climax describes the wicked man's total eviction: &ldquo;He is torn from the tent in which he trusted and is brought to the king of terrors. In his tent dwells that which is none of his; sulfur is scattered over his habitation&rdquo; (18:14-15). The wicked man is dragged from the security he trusted in, marched to &lsquo;the king of terrors&rsquo; (death personified), his home taken over by strangers and sown with sulfur like Sodom (Genesis 19:24) &mdash; a place of curse and desolation. Every image is designed to make Job see his own ruined tent, his own lost security, and read them as the signature of a wicked man met by the king of terrors. Bildad has become an accuser wearing the robe of a theologian, and his catalogue of doom is a verdict of guilt against an innocent man &mdash; the very thing God will condemn (42:7).",
    ],
  },
  {
    id: "Terrors on Every Side",
    heading: "His Memory Perishes from the Earth",
    reference: "Job 18:16&ndash;21",
    paragraphs: [
      "Bildad completes the doom with the erasure of the wicked man's very existence from memory: &ldquo;His roots dry up beneath, and his branches wither above. His memory perishes from the earth, and he has no name in the street&rdquo; (18:16-17). The wicked man is like a tree dying from both ends &mdash; roots drying, branches withering &mdash; and worse, he is forgotten entirely; no one remembers his name, no trace of him remains &lsquo;in the street&rsquo; where the living walk. To be forgotten utterly was, in the ancient world, a fate almost worse than death.",
      "&ldquo;He is thrust from light into darkness, and driven out of the world&rdquo; (18:18). The wicked man is expelled from the land of the living, shoved from light into darkness, driven off the face of the earth. And then the cruelest stroke for a man who has just lost all ten of his children: &ldquo;He has no posterity or progeny among his people, and no survivor where he used to live&rdquo; (18:19). No descendants, no survivors, his line entirely cut off. Bildad says this to Job, who is fresh from burying his entire family. It is difficult to imagine a more calculated wound.",
      "Bildad concludes with a flourish of horror: &ldquo;They of the west are appalled at his day, and horror seizes them of the east. Surely such are the dwellings of the unrighteous, such is the place of him who knows not God&rdquo; (18:20-21). East and west, the whole world shudders at the fate of the wicked. And Bildad's final line seals the accusation: this is the place of &lsquo;him who knows not God.&rsquo; The implication lands with full force &mdash; Job, whose day appalls all who see it, is being numbered among those who do not know God. The lifelong servant of God, the man God himself twice called blameless, is being consigned by his friend to the ranks of the godless.",
      "It is here that the gospel's great reversal shines most brightly against Bildad's darkness. Every mark of the &lsquo;wicked man's&rsquo; doom that Bildad catalogues &mdash; the extinguished light, the terrors, the disease, the being torn from his place and driven from the land of the living, cut off with no posterity &mdash; would one day fall upon the truly righteous One. Isaiah foretold it: he was &lsquo;cut off out of the land of the living&rsquo; and had no natural descendants; &lsquo;as for his generation, who considered&hellip;?&rsquo; (Isaiah 53:8). Jesus bore the whole portrait of the cursed and forgotten &mdash; the darkness, the being driven out (crucified &lsquo;outside the gate,&rsquo; Hebrews 13:12) &mdash; not because he did not know God, but because he was bearing the doom of those who did not, so that they might. Bildad's theology sees only condemnation; the cross transforms the very portrait of the cursed into the instrument of salvation.",
    ],
  },
  {
    id: "Application",
    heading: "Living Job 18",
    reference: "Reflections on Judgment and Grace",
    paragraphs: [
      "<strong>Do not let comfort become a contest.</strong> Bildad's opening was all about his own wounded pride &mdash; &lsquo;why are we counted as cattle?&rsquo; &mdash; not about Job's pain. When we are &lsquo;helping&rsquo; a suffering person and find ourselves more concerned with winning the argument or defending our dignity than with their agony, we have lost the plot entirely. Comfort is not a debate to be won; the moment it becomes one, the sufferer is forgotten. Guard against the ego's need to be right in the presence of someone else's grief.",
      "<strong>Refuse to read another's catastrophe as the signature of their sin.</strong> Bildad's entire speech assumed that disaster proves wickedness &mdash; the extinguished lamp, the lost children, the disease, all read as verdicts of guilt. This is precisely the reasoning Jesus forbade (Luke 13:1-5; John 9:1-3). When you see someone suffering profoundly, resist the ancient, cruel instinct to construct an account of the hidden sin that &lsquo;explains&rsquo; it. The most afflicted person may be the most faithful; Job was. Circumstances are not a readout of the heart, and only God judges rightly.",
      "<strong>Beware a theology that has no room for exceptions or mystery.</strong> Bildad mocked the idea that &lsquo;the rock be removed out of its place&rsquo; for Job &mdash; his system was fixed, mechanical, and admitted no mystery. But God is freer and more surprising than any of our systems, and a faith that has him completely figured out has him wrong. Hold your understanding of God's ways with humility, especially when confronted with suffering that does not fit your categories. The God who set the rock in place is not bound by our rules about it, as the cross &mdash; the most extravagant exception to every expectation &mdash; proves forever.",
      "<strong>See in the doom of the &lsquo;wicked man&rsquo; the salvation of the cross.</strong> The deepest answer to Bildad is that the entire portrait of the cursed and forgotten fell, in the end, on the sinless Son of God &mdash; cut off from the land of the living, driven outside the gate, his light extinguished at noon &mdash; so that we, who deserve that doom, might be spared it forever. Bildad's theology could only condemn; the gospel takes the very marks of condemnation and makes them the price of our redemption. <strong>Prayer prompt:</strong> &ldquo;Father, guard me from Bildad's cruelty &mdash; from reading suffering as guilt, from a theology that has you figured out, from an ego that must win. And thank you that your Son bore the whole portrait of the cursed &mdash; the darkness, the being driven out, the being cut off &mdash; so that I, though I deserved it, am welcomed home in him. Amen.&rdquo;",
    ],
  },
];

const data: SectionGuideData = {
  accent: "#E11D48",
  badge: "Job 18",
  title: "Job 18: The Light of the Wicked Is Put Out",
  intro: "Bildad drops all sympathy and delivers an unrelenting catalogue of the doom of the wicked -- the extinguished lamp, snares at every step, terrors on every side, the 'firstborn of death' devouring the skin, torn from the tent, no descendants, the memory perished. Every detail is a coded verdict of guilt aimed at his suffering friend.",
  tabs: TABS,
  sections,
  calloutTitle: "The Portrait That Fell on Christ",
  calloutBody: "Bildad's picture of the 'wicked man' -- light extinguished, seized, driven out, cut off from the land of the living with no posterity -- describes Job's losses with cruel accuracy and misreads their meaning entirely. And the deepest irony awaits the cross: every mark of that doom would fall on the truly righteous One (Isaiah 53:8), cut off and driven outside the gate -- not for his own sin but as the ransom for ours. Bildad's theology could only ever condemn the Redeemer; the gospel turns the portrait of the cursed into salvation.",
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
