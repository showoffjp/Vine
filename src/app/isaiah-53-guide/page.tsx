"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Who Has Believed",
  "Despised and Rejected",
  "Pierced for Our Transgressions",
  "The Lamb Led to Slaughter",
  "The Reward of the Servant",
  "Videos",
]

const sections = [
  {
    id: "Who Has Believed",
    heading: "Who Has Believed",
    reference: "Isaiah 52:13&ndash;53:3",
    paragraphs: [
      "Isaiah 53 is the climax of the four &ldquo;Servant Songs&rdquo; that run through the second half of Isaiah, and it is perhaps the most astonishing chapter in the Old Testament. Written some seven centuries before the birth of Jesus, it describes a mysterious figure called the Servant of the Lord who suffers, dies, and is vindicated &mdash; and who bears the sins of others. The chapter properly begins at Isaiah 52:13, where God himself speaks: &ldquo;Behold, my servant shall act wisely; he shall be high and lifted up, and shall be exalted&rdquo; (52:13). The Servant&rsquo;s story will end in exaltation, but the road there runs through unimaginable suffering.",
      "That suffering is introduced at once in shocking terms: &ldquo;his appearance was so marred, beyond human semblance, and his form beyond that of the children of mankind&rdquo; (52:14). The Servant will be so disfigured by his sufferings that he scarcely looks human. Yet the result is global: &ldquo;so shall he sprinkle many nations&rdquo; (52:15), the language of priestly cleansing. Kings will shut their mouths in awe at what they had never been told. The Servant&rsquo;s humiliation will become the cleansing of the nations.",
      "Then the prophet&rsquo;s voice cries out the question that gives this section its name: &ldquo;Who has believed what he has heard from us? And to whom has the arm of the Lord been revealed?&rdquo; (53:1). The message of a suffering Savior is so contrary to human expectation that it meets with widespread unbelief. The &ldquo;arm of the Lord&rdquo; &mdash; God&rsquo;s mighty saving power &mdash; is revealed not in dazzling might as the world expects, but in a suffering servant whom the world despises. Only those to whom God grants faith will perceive it.",
      "The Servant&rsquo;s origins are unremarkable, even unpromising: &ldquo;For he grew up before him like a young plant, and like a root out of dry ground&rdquo; (53:2). He springs up like a tender shoot from parched soil, fragile and easily overlooked. There is nothing about his outward circumstances to attract the powerful or impress the proud. He comes not from a place of strength but from obscurity and apparent weakness.",
      "Indeed, the prophet insists, &ldquo;he had no form or majesty that we should look at him, and no beauty that we should desire him&rdquo; (53:2). The Servant possesses none of the visible glory that draws human admiration &mdash; no royal splendor, no commanding presence, nothing the eye covets. This is a deliberate reversal of every worldly standard of greatness. God&rsquo;s salvation arrives wrapped in the very opposite of what we would choose.",
      "And so he is met with contempt: &ldquo;He was despised and rejected by men, a man of sorrows and acquainted with grief; and as one from whom men hide their faces he was despised, and we esteemed him not&rdquo; (53:3). The Servant is no stranger to pain; sorrow and grief are his constant companions. Men treat him as someone to look away from, and the prophet includes himself and his people in that guilty verdict: &ldquo;we esteemed him not.&rdquo; The chapter opens by exposing the heart of humanity, which sees the suffering Servant and turns away.",
    ],
  },
  {
    id: "Despised and Rejected",
    heading: "Despised and Rejected",
    reference: "Isaiah 53:3&ndash;4",
    paragraphs: [
      "The phrase &ldquo;despised and rejected by men&rdquo; (53:3) captures the social reality of the Servant&rsquo;s life. He is not merely unpopular; he is held in active contempt and cast out. The Hebrew suggests one who is forsaken, abandoned, shunned by the very people he came to serve. The world&rsquo;s verdict on God&rsquo;s Servant is rejection &mdash; and this becomes one of the clearest threads connecting the prophecy to Jesus, who &ldquo;came to his own, and his own people did not receive him&rdquo; (John 1:11).",
      "He is &ldquo;a man of sorrows and acquainted with grief&rdquo; (53:3). This is not the portrait of a triumphant hero untouched by pain, but of one who knows suffering intimately, as a familiar friend. Grief is the air he breathes. The Gospels show us this in Jesus &mdash; weeping at the tomb of Lazarus, sorrowful unto death in Gethsemane, bearing the weight of a broken world he came to heal. The Servant enters fully into human anguish.",
      "Men &ldquo;hide their faces&rdquo; from him (53:3). To hide the face is to treat someone as repulsive, as unworthy even of being looked upon &mdash; the gesture reserved for the outcast and the leper. The Servant bears not only physical suffering but the deeper wound of social shame and exclusion. He is treated as though he were cursed, an object of disgust rather than reverence.",
      "Then the prophet reveals the staggering truth hidden beneath this rejection: &ldquo;Surely he has borne our griefs and carried our sorrows&rdquo; (53:4). The word &ldquo;surely&rdquo; marks a turning point, a sudden flash of understanding. The sorrows that crush the Servant are not merely his own &mdash; they are ours. He has taken up our griefs and shouldered our sorrows. What looked like his personal tragedy is in fact a deliberate bearing of the burdens of others.",
      "But this was hidden from those who watched him suffer. &ldquo;Yet we esteemed him stricken, smitten by God, and afflicted&rdquo; (53:4). The onlookers drew exactly the wrong conclusion. Seeing his agony, they assumed he must be under God&rsquo;s judgment for his own sins &mdash; &ldquo;smitten by God.&rdquo; They were tragically half right: he was indeed smitten by God, but not for his own sin. He was suffering for theirs. The very people he was rescuing despised him as a man cursed by heaven.",
      "Here lies one of the deepest ironies of the chapter and of the cross. The crowds at Calvary mocked Jesus as one abandoned by God, jeering, &ldquo;He trusts in God; let God deliver him now, if he desires him&rdquo; (Matthew 27:43). They saw a condemned criminal under divine wrath. They could not see that the wrath he bore was their own &mdash; that the Servant despised and rejected by men was at that very moment carrying away the sins of the world.",
    ],
  },
  {
    id: "Pierced for Our Transgressions",
    heading: "Pierced for Our Transgressions",
    reference: "Isaiah 53:5&ndash;6",
    paragraphs: [
      "We reach the theological heart of the chapter, and of the whole Bible&rsquo;s teaching on salvation: &ldquo;But he was pierced for our transgressions; he was crushed for our iniquities&rdquo; (53:5). The little word &ldquo;but&rdquo; overturns the false verdict of the previous verse. He was not pierced for his own sins, for he had none. He was pierced for ours. This is substitution &mdash; one standing in the place of another, taking the punishment that others deserved.",
      "The language is deliberately violent and precise. &ldquo;Pierced&rdquo; speaks of being run through, fatally wounded; &ldquo;crushed&rdquo; of being broken and ground down. And the cause is named without flinching: &ldquo;our transgressions&hellip; our iniquities.&rdquo; The Servant&rsquo;s wounds correspond exactly to our sins. Every blow he absorbs is the penalty for human rebellion against God. He stands in the dock, condemned, that the guilty might go free.",
      "&ldquo;Upon him was the chastisement that brought us peace, and with his wounds we are healed&rdquo; (53:5). Two great gifts flow from his suffering. First, peace &mdash; the restoration of a right relationship with God. The discipline, the punishment that we deserved, fell on him, and so we are brought into peace with the God we had offended. Second, healing &mdash; &ldquo;with his wounds we are healed,&rdquo; or as the Hebrew puts it, by his stripes, the lash marks of his scourging. By the very wounds inflicted on him, our deepest disease, the sickness of sin, is cured.",
      "Then comes the great confession of human guilt, framed in an unforgettable image: &ldquo;All we like sheep have gone astray; we have turned&mdash;every one&mdash;to his own way&rdquo; (53:6). The diagnosis is universal: all of us, without exception, have wandered. Sin is here defined not merely as breaking rules but as turning aside, each person going his own way instead of God&rsquo;s. Like foolish sheep we have strayed from the shepherd, and we cannot find our way back on our own.",
      "And the resolution is breathtaking: &ldquo;and the Lord has laid on him the iniquity of us all&rdquo; (53:6). The verse opens and closes with &ldquo;all&rdquo; &mdash; all of us went astray, and the iniquity of all of us was laid on him. God himself took the sin that belonged to the whole straying flock and placed it on the Servant. This is the heart of the gospel: our guilt transferred to him, his innocence and acceptance offered to us. The Servant becomes the great sin-bearer.",
      "The New Testament writers seize on this verse as the key to the cross. Peter writes that Christ &ldquo;himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed&rdquo; (1 Peter 2:24), quoting Isaiah directly. Paul declares that God &ldquo;made him to be sin who knew no sin, so that in him we might become the righteousness of God&rdquo; (2 Corinthians 5:21). What Isaiah foresaw in shadow, Christ accomplished in fact at Calvary.",
    ],
  },
  {
    id: "The Lamb Led to Slaughter",
    heading: "The Lamb Led to Slaughter",
    reference: "Isaiah 53:7&ndash;9",
    paragraphs: [
      "The chapter now turns to the Servant&rsquo;s bearing in the face of his suffering. &ldquo;He was oppressed, and he was afflicted, yet he opened not his mouth; like a lamb that is led to the slaughter, and like a sheep that before its shearers is silent, so he opened not his mouth&rdquo; (53:7). The Servant does not protest, argue, or defend himself. He accepts his suffering willingly and in silence, like a lamb that does not struggle against the knife.",
      "The image of the lamb is rich with meaning for Israel. The Passover lamb was slain so that the people might be spared; the lambs of the daily sacrifices were offered for the sins of the people. By calling the Servant a lamb led to slaughter, Isaiah signals that his death is sacrificial &mdash; an offering for sin. When John the Baptist saw Jesus, he cried, &ldquo;Behold, the Lamb of God, who takes away the sin of the world!&rdquo; (John 1:29), drawing this prophecy together with the whole sacrificial system and applying it to Christ.",
      "His silence under injustice is striking, and the Gospels record its precise fulfillment. Before the high priest, before Herod, and before Pilate, Jesus largely held his peace; &ldquo;he gave him no answer, not even to a single charge, so that the governor was greatly amazed&rdquo; (Matthew 27:14). The very silence Isaiah described seven centuries earlier was enacted in the judgment hall, as the Lamb of God went uncomplaining to his death.",
      "&ldquo;By oppression and judgment he was taken away; and as for his generation, who considered that he was cut off out of the land of the living, stricken for the transgression of my people?&rdquo; (53:8). The Servant is condemned in a perversion of justice and put to death &mdash; &ldquo;cut off out of the land of the living.&rdquo; Yet almost no one in his generation grasped the meaning of it: that he was dying not for his own crimes but &ldquo;for the transgression of my people.&rdquo; God is the speaker here, and he calls them his people, on whose behalf the Servant suffers.",
      "Even the details of his burial are foretold with uncanny precision: &ldquo;And they made his grave with the wicked and with a rich man in his death&rdquo; (53:9). Condemned as a criminal, the Servant might have expected a criminal&rsquo;s dishonorable grave; yet he is also associated with a rich man in death. The Gospels record exactly this: Jesus was crucified between two criminals, yet was buried in the new tomb of Joseph of Arimathea, a rich man (Matthew 27:57&ndash;60). The prophecy, written long before, lands with stunning accuracy.",
      "And the ground of his innocence is stated plainly: &ldquo;although he had done no violence, and there was no deceit in his mouth&rdquo; (53:9). The Servant is utterly sinless &mdash; faultless in deed (&ldquo;no violence&rdquo;) and faultless in word (&ldquo;no deceit&rdquo;). This is essential to the whole logic of the chapter. Only a spotless lamb could be a true substitute; only the innocent could bear the guilt of others. Peter again echoes the verse: Christ &ldquo;committed no sin, neither was deceit found in his mouth&rdquo; (1 Peter 2:22). The sinless one died for the sinful.",
    ],
  },
  {
    id: "The Reward of the Servant",
    heading: "The Reward of the Servant",
    reference: "Isaiah 53:10&ndash;12",
    paragraphs: [
      "The chapter does not end in the grave. After the depths of suffering, it rises to triumph &mdash; but first it discloses the deepest mystery of all: &ldquo;Yet it was the will of the Lord to crush him; he has put him to grief&rdquo; (53:10). The Servant&rsquo;s death was no accident, no mere miscarriage of human justice. Behind the cruelty of men stood the deliberate purpose of God. It pleased the Lord, in the sense of his settled saving will, to crush his Servant &mdash; for through that crushing, salvation would come to the world.",
      "&ldquo;When his soul makes an offering for guilt, he shall see his offspring; he shall prolong his days&rdquo; (53:10). The Servant&rsquo;s life is poured out as a &ldquo;guilt offering&rdquo; &mdash; a specific sacrifice in the law of Moses that made satisfaction for sin. But the verse immediately turns toward life beyond death. Though he is killed, he will &ldquo;see his offspring&rdquo; and &ldquo;prolong his days.&rdquo; The Servant who dies will live again to see a vast family of the redeemed &mdash; a clear intimation of resurrection.",
      "&ldquo;And the will of the Lord shall prosper in his hand&rdquo; (53:10). The saving purpose of God will succeed through the risen Servant. What looked like utter defeat &mdash; a condemned man crushed and buried &mdash; becomes the means by which God&rsquo;s plan triumphs. The crucified and risen Servant carries out the will of God to its glorious completion. Nothing of God&rsquo;s redemptive purpose is lost; all of it prospers in his hand.",
      "&ldquo;Out of the anguish of his soul he shall see and be satisfied; by his knowledge shall the righteous one, my servant, make many to be accounted righteous, and he shall bear their iniquities&rdquo; (53:11). The Servant looks back on his suffering and is satisfied &mdash; the harvest of redeemed people makes the agony worthwhile. And here the great exchange is named once more: the &ldquo;righteous one&rdquo; makes &ldquo;many&rdquo; to be counted righteous. He gives them a standing they could never earn, precisely because he bears the iniquities they could never remove. This is justification &mdash; sinners declared righteous through the Servant who bore their sin.",
      "The chapter closes with the Servant&rsquo;s exaltation: &ldquo;Therefore I will divide him a portion with the many, and he shall divide the spoil with the strong, because he poured out his soul to death and was numbered with the transgressors&rdquo; (53:12). The suffering Servant is now the victorious conqueror, sharing the spoils of his triumph. The reason given is his self-sacrifice: he &ldquo;poured out his soul to death&rdquo; and let himself be &ldquo;numbered with the transgressors&rdquo; &mdash; counted among the guilty, crucified between two criminals, that the guilty might be set free.",
      "The final words give the Servant&rsquo;s ongoing ministry: &ldquo;yet he bore the sin of many, and makes intercession for the transgressors&rdquo; (53:12). His sin-bearing work on the cross is complete, but his intercession continues. The risen Servant lives to pray for the very transgressors he died to save. The New Testament rejoices in exactly this: Jesus &ldquo;always lives to make intercession&rdquo; for those who draw near to God through him (Hebrews 7:25). Isaiah 53 is the gospel in advance &mdash; the Suffering Servant who bore our sins, was raised in triumph, and lives to intercede for us still.",
    ],
  },
];

const videoItems = [
  { videoId: "_5tXuTtR3oc", title: "Isaiah 53 - The Suffering Servant Explained" },
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Overview - Isaiah 40 to 66" },
  { videoId: "kc7nF6Vj4lU", title: "Pierced for Our Transgressions - Isaiah 53 Study" },
  { videoId: "9c4OQqLeyfA", title: "The Lamb Led to Slaughter - Isaiah 53 and the Cross" },
];

const data: SectionGuideData = {
  accent: "#D97706",
  badge: `Old Testament Study`,
  title: `Isaiah 53: The Suffering Servant`,
  intro: `The fourth Servant Song &mdash; despised and rejected, a man of sorrows; pierced for our transgressions and crushed for our iniquities; led like a lamb to the slaughter and silent before his shearers; the One on whom the Lord laid the iniquity of us all, and who now sees his offspring and intercedes for transgressors. Written seven centuries before the cross, fulfilled in Jesus Christ.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Isaiah 53 through visual teaching on the Suffering Servant, the meaning of his wounds, the silence of the Lamb, and the fulfillment of this prophecy in the death and resurrection of Jesus Christ.`,
  calloutTitle: `By His Wounds We Are Healed`,
  calloutBody: `Isaiah 53 is the gospel written seven centuries in advance. The Servant who was despised and rejected, pierced for our transgressions and led like a lamb to the slaughter, is the Lord Jesus Christ. The Lord laid on him the iniquity of us all, and through his anguish he sees his offspring and is satisfied. He bore the sin of many, and he lives still to make intercession for transgressors &mdash; for all who, like straying sheep, will turn and trust in him.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
