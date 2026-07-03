"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Stewards of Mysteries",
  "Fools for Christ",
  "A Father's Heart",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Servants, Stewards, and Spiritual Fathers",
    reference: "1 Corinthians 4",
    paragraphs: [
      "First Corinthians 4 brings to a head Paul&rsquo;s long argument against the divisions and pride that had infected the Corinthian church. Having dismantled their boasting in human leaders in the preceding chapters, Paul now defines what the apostles and ministers of the gospel truly are: &ldquo;servants of Christ and stewards of the mysteries of God&rdquo; (v.1). They are not party heads to be ranked and championed, but household managers entrusted with their Master&rsquo;s treasures, answerable to the Lord alone.",
      "From this definition Paul draws a striking freedom. Because it is the Lord who judges him, he is utterly unconcerned with the Corinthians&rsquo; verdict or with any human court (vv.3&ndash;4). He does not even presume to judge himself. The decisive evaluation belongs to a future day: &ldquo;Do not pronounce judgment before the time, before the Lord comes&rdquo; (v.5). This frees the minister from the tyranny of human opinion while sobering him with the certainty of divine assessment.",
      "Paul then turns the mirror on the Corinthians&rsquo; arrogance. They have become &ldquo;puffed up in favor of one against another&rdquo; (v.6), parading a self-satisfaction that mistakes received gifts for personal achievement. &ldquo;What do you have that you did not receive?&rdquo; he asks (v.7). With biting irony he contrasts their imagined royalty &mdash; &ldquo;Already you have become rich! Without us you have become kings!&rdquo; &mdash; with the apostles&rsquo; actual condition: hungry, beaten, homeless, reviled, &ldquo;the scum of the world&rdquo; (vv.8&ndash;13).",
      "This contrast is no mere rhetorical flourish; it unveils a profound theology of cruciform ministry. The pattern of the cross runs through the lives of Christ&rsquo;s true servants. While the Corinthians dream of present triumph and glory, the apostles walk the way of suffering and weakness, &ldquo;exhibited as last of all, like men sentenced to death&rdquo; (v.9). The shape of authentic gospel ministry is not power and prestige but the foolishness and shame of the cross, borne in hope.",
      "The chapter&rsquo;s tone then softens into tenderness. Paul has not written to shame them but to admonish them &ldquo;as my beloved children&rdquo; (v.14). He is their father in the faith, the one through whom they were born again by the gospel. As a father he both pleads and warns, urging them to imitate him and announcing that he is sending Timothy to remind them of his ways (vv.15&ndash;17).",
      "Finally Paul confronts the arrogant directly. Some have grown puffed up, supposing he will not come to hold them accountable. But he will come, and soon: &ldquo;I will find out not the talk of these arrogant people but their power. For the kingdom of God does not consist in talk but in power&rdquo; (vv.18&ndash;20). The chapter closes on a question that holds discipline and love together: &ldquo;Shall I come to you with a rod, or with love in a spirit of gentleness?&rdquo; (v.21).",
    ],
  },
  {
    id: "Stewards of Mysteries",
    heading: "Stewards of the Mysteries of God",
    reference: "1 Corinthians 4:1&ndash;5",
    paragraphs: [
      "Paul begins by correcting how the Corinthians regard their leaders: &ldquo;This is how one should regard us, as servants of Christ and stewards of the mysteries of God&rdquo; (v.1). The word for &ldquo;servant&rdquo; pictures an under-rower, a subordinate worker; the &ldquo;steward&rdquo; is a household manager entrusted with his master&rsquo;s goods. Both images cut against the Corinthian habit of exalting leaders into figureheads of rival factions. Ministers are not masters of a movement but servants under authority.",
      "What the steward manages is &ldquo;the mysteries of God&rdquo; &mdash; the once-hidden, now-revealed truths of the gospel of Christ crucified. The treasure is not the steward&rsquo;s own; he merely administers what belongs to his Lord. And the single qualification that matters is faithfulness: &ldquo;Moreover, it is required of stewards that they be found trustworthy&rdquo; (v.2). Not eloquence, not popularity, not the size of a following, but fidelity to the Master&rsquo;s charge is the measure of a true minister.",
      "From this Paul draws a remarkable indifference to human judgment: &ldquo;But with me it is a very small thing that I should be judged by you or by any human court&rdquo; (v.3). The Corinthians had been busy evaluating and ranking their teachers, but Paul refuses to let their tribunal rule him. The opinion of the assembly, however confident, is not the court before which he stands. He has been freed from the anxious need to win human approval.",
      "Astonishingly, Paul will not even rely on his own self-assessment: &ldquo;In fact, I do not even judge myself. For I am not aware of anything against myself, but I am not thereby acquitted&rdquo; (vv.3&ndash;4). A clear conscience is not the same as a clean verdict. Paul knows that self-examination, however honest, cannot see all things rightly. He distrusts even his own favorable estimate, refusing to make himself the final judge of his own faithfulness.",
      "The reason is plain: &ldquo;It is the Lord who judges me&rdquo; (v.4). There is one tribunal that matters, and it belongs to Christ. This conviction both humbles and liberates. It humbles, for no one escapes the searching gaze of the Lord; it liberates, for the servant need not be enslaved to the shifting verdicts of people. The minister lives and labors before an audience of One, whose judgment is perfect and final.",
      "Therefore Paul issues a command: &ldquo;Do not pronounce judgment before the time, before the Lord comes, who will bring to light the things now hidden in darkness and will disclose the purposes of the heart. Then each one will receive his commendation from God&rdquo; (v.5). Final judgment awaits Christ&rsquo;s return, when hidden motives will be exposed and true praise bestowed by God himself. To judge prematurely is to usurp a verdict that is not ours to give. Here is the freedom and sobriety of living before the Lord&rsquo;s judgment alone.",
    ],
  },
  {
    id: "Fools for Christ",
    heading: "Fools for Christ's Sake",
    reference: "1 Corinthians 4:6&ndash;13",
    paragraphs: [
      "Paul explains that he has applied these things to himself and Apollos as living examples: &ldquo;I have applied all these things to myself and Apollos for your benefit, brothers, that you may learn by us not to go beyond what is written, that none of you may be puffed up in favor of one against another&rdquo; (v.6). By using himself and Apollos as the cast, Paul kept the lesson from naming and shaming the actual Corinthian ringleaders. The aim is to teach humility, to stay within Scripture&rsquo;s bounds, and to end the partisan pride that pits one teacher against another.",
      "He then exposes the root of their boasting with three piercing questions: &ldquo;For who sees anything different in you? What do you have that you did not receive? If then you received it, why do you boast as if you did not receive it?&rdquo; (v.7). Every gift the Corinthians prized &mdash; knowledge, eloquence, spiritual ability &mdash; was received, not achieved. Grace, by definition, leaves no room for boasting. To glory in a gift as though it were a personal accomplishment is to forget the Giver entirely.",
      "Paul&rsquo;s irony now turns biting: &ldquo;Already you have all you want! Already you have become rich! Without us you have become kings! And would that you did reign, so that we might share the rule with you!&rdquo; (v.8). The Corinthians imagined themselves spiritually arrived, reigning in present glory, full and rich and royal. Paul mocks the illusion. Their sense of triumph was premature, a kingdom claimed before the King had returned, a crown grasped before the cross had been carried.",
      "Against their fantasy of royalty he sets the grim reality of apostolic life: &ldquo;For I think that God has exhibited us apostles as last of all, like men sentenced to death, because we have become a spectacle to the world, to angels, and to men&rdquo; (v.9). The image is of condemned men paraded at the end of a Roman triumph, displayed before a watching universe. The apostles are not reigning kings but doomed prisoners in the eyes of the world, a public spectacle of weakness.",
      "The contrast sharpens to the point of pain: &ldquo;We are fools for Christ&rsquo;s sake, but you are wise in Christ. We are weak, but you are strong. You are held in honor, but we in disrepute&rdquo; (v.10). Then comes the unvarnished catalogue: &ldquo;To the present hour we hunger and thirst, we are poorly dressed and buffeted and homeless, and we labor, working with our own hands&rdquo; (vv.11&ndash;12). This is the lived texture of cruciform ministry &mdash; not glory but hunger, not honor but disgrace.",
      "Paul caps the list with the apostles&rsquo; Christlike response and their lowly standing: &ldquo;When reviled, we bless; when persecuted, we endure; when slandered, we entreat. We have become, and are still, like the scum of the world, the refuse of all things&rdquo; (vv.12&ndash;13). They answer abuse with blessing, mirroring their crucified Lord, and accept the world&rsquo;s contempt as the very mark of their calling. Here is a profound theology of cruciform ministry: the servant follows the Master along the way of the cross, finding glory hidden in shame.",
    ],
  },
  {
    id: "A Father's Heart",
    heading: "A Father's Admonition",
    reference: "1 Corinthians 4:14&ndash;21",
    paragraphs: [
      "Having spoken sharply, Paul now reveals the love beneath the rebuke: &ldquo;I do not write these things to make you ashamed, but to admonish you as my beloved children&rdquo; (v.14). The harsh contrast was never meant to humiliate but to correct, the way a father corrects those he cherishes. The word &ldquo;beloved&rdquo; reframes everything that came before. Paul&rsquo;s severity flows not from contempt but from a father&rsquo;s tender concern for children he longs to see grow.",
      "He presses the family bond further: &ldquo;For though you have countless guides in Christ, you do not have many fathers. For I became your father in Christ Jesus through the gospel&rdquo; (v.15). The Corinthians had no shortage of teachers eager to instruct them, but they had only one spiritual father &mdash; the one through whom they were first born again. This unique relationship grants Paul both a tenderness and an authority that the guides cannot claim. He begot them through the gospel he preached.",
      "From this fatherhood flows a bold appeal: &ldquo;I urge you, then, be imitators of me&rdquo; (v.16). Far from arrogance, this is the natural call of a father whose own life has been shaped by the cross. Children learn by imitation, and Paul offers his cruciform pattern &mdash; the very life of weakness and faithfulness he has just described &mdash; as the model to follow. To imitate Paul is, finally, to imitate the Christ whom Paul follows.",
      "To help them, Paul sends a representative: &ldquo;That is why I sent you Timothy, my beloved and faithful child in the Lord, to remind you of my ways in Christ, as I teach them everywhere in every church&rdquo; (v.17). Timothy, himself a spiritual son, will model and recall Paul&rsquo;s consistent teaching. Notably, Paul&rsquo;s ways are the same in every church; there is no special Corinthian gospel. The reminder is meant to call them back to the common apostolic pattern they had begun to abandon.",
      "Paul then confronts the proud who supposed his absence meant immunity: &ldquo;Some are arrogant, as though I were not coming to you. But I will come to you soon, if the Lord wills, and I will find out not the talk of these arrogant people but their power&rdquo; (vv.18&ndash;19). The puffed-up had grown bold in his absence, all words and posturing. Paul promises a reckoning that will test substance, not speech &mdash; real spiritual power against empty boasting.",
      "He grounds the test in a great principle: &ldquo;For the kingdom of God does not consist in talk but in power&rdquo; (v.20). God&rsquo;s reign is not a matter of impressive rhetoric but of the Spirit&rsquo;s transforming might displayed in changed lives. The chapter ends with a question that holds together a father&rsquo;s firmness and gentleness: &ldquo;What do you wish? Shall I come to you with a rod, or with love in a spirit of gentleness?&rdquo; (v.21). The choice of tone lies with them, and the love stands ready either way.",
    ],
  },
];

const videoItems = [
  { videoId: "Tq6vR8nK2pW", title: "1 Corinthians 4 - Servants and Stewards of God" },
  { videoId: "Lm3kZ7Wx9Bt", title: "Judged by the Lord Alone - Stewards of the Mysteries" },
  { videoId: "Pc8nD4Vt1Hr", title: "Fools for Christ - The Theology of Cruciform Ministry" },
  { videoId: "Nb5wK2Mq7Jx", title: "A Father's Admonition - Talk Versus Power" },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: `Epistles Study`,
  title: `1 Corinthians 4`,
  intro: `Paul defines apostles as servants and stewards answerable to the Lord alone, rebukes Corinthian arrogance with the irony of &ldquo;fools for Christ&rsquo;s sake,&rdquo; and writes as a father admonishing beloved children &mdash; for &ldquo;the kingdom of God does not consist in talk but in power.&rdquo;`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 1 Corinthians 4 through visual teaching on the apostles as servants and stewards, the freedom of living before the Lord&rsquo;s judgment, the cruciform path of &ldquo;fools for Christ,&rdquo; and Paul&rsquo;s fatherly call to power over mere talk.`,
  calloutTitle: `Power, Not Talk`,
  calloutBody: `First Corinthians 4 dismantles the pride of a church enamored with eloquence and triumph. True ministers are stewards judged by the Lord alone, walking the cruciform way of weakness and faithfulness. Paul&rsquo;s closing question &mdash; rod or gentleness &mdash; reminds us that &ldquo;the kingdom of God does not consist in talk but in power.&rdquo;`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
