"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Behold the Man",
  "The Crucifixion",
  "It Is Finished",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of John 19",
    reference: "John 19:1&ndash;42",
    paragraphs: [
      "John chapter 19 stands at the very center of the Gospel&rsquo;s purpose, the hour toward which the whole narrative has been moving. Here the trial before Pilate reaches its grim conclusion, the crucifixion is carried out at Golgotha, and the Son of God dies with the cry &ldquo;It is finished.&rdquo; John tells the story with a restrained, deliberate majesty, presenting Jesus not as a helpless victim but as a sovereign king who lays down his life of his own accord, fulfilling Scripture at every step.",
      "The chapter opens in Pilate&rsquo;s court (19:1&ndash;7). Pilate has Jesus flogged; the soldiers twist together a crown of thorns and clothe him in a purple robe, mocking him as &ldquo;King of the Jews.&rdquo; Pilate brings him out and presents him to the crowd: &ldquo;Behold the man!&rdquo; But the chief priests and officers cry out, &ldquo;Crucify him!&rdquo; and reveal the true charge beneath the political one: &ldquo;We have a law, and according to that law he ought to die because he made himself the Son of God.&rdquo;",
      "The interrogation deepens (19:8&ndash;16). Pilate, now more afraid, questions Jesus about where he is from and about authority, and Jesus answers that Pilate would have no authority unless it had been given from above. Pilate seeks to release him, but the crowd presses with the threat that he is no friend of Caesar, and at last they cry, &ldquo;We have no king but Caesar.&rdquo; Pilate hands Jesus over to be crucified.",
      "The crucifixion itself is narrated with solemn economy (19:17&ndash;27). Bearing his own cross, Jesus goes out to Golgotha, the Place of a Skull, and is crucified between two others. Pilate writes a trilingual inscription, &ldquo;Jesus of Nazareth, the King of the Jews,&rdquo; and refuses to change it. The soldiers divide his garments and cast lots for his seamless tunic, fulfilling Scripture. At the cross stand the women, and Jesus entrusts his mother to the beloved disciple: &ldquo;Woman, behold your son&hellip; Behold your mother.&rdquo;",
      "The death and burial bring the chapter to its close (19:28&ndash;42). Knowing all was now finished, Jesus says &ldquo;I thirst,&rdquo; receives the sour wine, and cries, &ldquo;It is finished,&rdquo; giving up his spirit. To keep the bodies off the cross on the Sabbath, the soldiers break the legs of the others, but finding Jesus already dead, a soldier pierces his side, and at once blood and water flow out, fulfilling the Scriptures. Joseph of Arimathea and Nicodemus then take the body, wrap it with myrrh and aloes, and lay it in a new tomb in a garden nearby.",
      "Read as a whole, John 19 is the account of a king reigning from a cross. Every detail &mdash; the title, the seamless robe, the unbroken bones, the pierced side, the garden tomb &mdash; is woven into the fabric of Scripture, declaring that nothing here is accident. The cry &ldquo;It is finished&rdquo; is not the gasp of defeat but the shout of completion, the finishing of the work the Father gave the Son to do, the redemption of the world accomplished in the death of the Lamb of God.",
    ],
  },
  {
    id: "Behold the Man",
    heading: "Behold the Man",
    reference: "John 19:1&ndash;16",
    paragraphs: [
      "The chapter opens with a brutal act of supposed compromise: &ldquo;Then Pilate took Jesus and flogged him&rdquo; (19:1). Pilate, convinced of Jesus&rsquo; innocence, seems to hope that a severe scourging will satisfy the crowd and let him release the prisoner. But the flogging is no mercy; it is the beginning of the passion in earnest, the breaking of the body of the one who came to bear the sins of the world.",
      "The soldiers add their own cruel theater. They twist together a crown of thorns and press it onto his head, drape him in a purple robe, the color of royalty, and come up to him mocking, &ldquo;Hail, King of the Jews!&rdquo; striking him with their hands (19:2&ndash;3). The mockery is unwittingly true. They jeer at a king, not knowing that the man crowned with thorns and clothed in purple is in fact the King of kings, reigning even now through humiliation.",
      "Pilate brings him out and utters the words that have echoed through the centuries: &ldquo;Behold the man!&rdquo; (19:5). Ecce Homo. Pilate means perhaps to provoke pity, to show the crowd a beaten and harmless figure. But John records the words as a revelation. Here is the man, the true and faithful man, the second Adam standing in his suffering before a watching world, bearing in his torn flesh the weight of human sin.",
      "The sight does not move the chief priests and officers to pity but to fury: &ldquo;Crucify him, crucify him!&rdquo; (19:6). Pilate, exasperated, tells them to crucify him themselves, for he finds no guilt in him. And then the true charge surfaces from beneath the political one: &ldquo;We have a law, and according to that law he ought to die because he made himself the Son of God&rdquo; (19:7). The real offense is not sedition against Rome but the claim that has run through the whole Gospel &mdash; that Jesus is the Son of God.",
      "These words deepen Pilate&rsquo;s unease: &ldquo;When Pilate heard this statement, he was even more afraid&rdquo; (19:8). He takes Jesus back inside and asks, &ldquo;Where are you from?&rdquo; but Jesus gives him no answer (19:9). Frustrated, Pilate appeals to his own power: &ldquo;Do you not know that I have authority to release you and authority to crucify you?&rdquo; (19:10). The governor boasts of an authority he does not truly possess.",
      "Jesus&rsquo; reply reframes the entire scene: &ldquo;You would have no authority over me at all unless it had been given you from above&rdquo; (19:11). Even now, bound and beaten, Jesus speaks as the one who knows that the Father&rsquo;s sovereign hand governs every moment. Pilate is not the master of this hour; he is an instrument within a purpose far greater than Rome, and the greater guilt lies with those who delivered Jesus to him.",
      "From then on Pilate seeks to release him, but the crowd plays its final card: &ldquo;If you release this man, you are not Caesar&rsquo;s friend&rdquo; (19:12). The threat is decisive. Pilate brings Jesus out, sits on the judgment seat, and presents him once more: &ldquo;Behold your King!&rdquo; The chief priests answer with words of staggering apostasy: &ldquo;We have no king but Caesar&rdquo; (19:15). Having denied their true King, they choose Caesar, and Pilate delivers Jesus over to be crucified.",
    ],
  },
  {
    id: "The Crucifixion",
    heading: "The Crucifixion",
    reference: "John 19:17&ndash;27",
    paragraphs: [
      "John records the journey to the cross with a single dignified phrase: &ldquo;and he went out, bearing his own cross, to the place called The Place of a Skull, which in Aramaic is called Golgotha&rdquo; (19:17). There is no Simon of Cyrene in John&rsquo;s account at this point; the emphasis falls on Jesus carrying his own cross, the willing victim going out to the place of execution as one who lays down his life of his own accord.",
      "There they crucify him, &ldquo;and with him two others, one on either side, and Jesus between them&rdquo; (19:18). Even in the manner of his death he is numbered with transgressors, placed in the very center between two condemned men. The Son of God hangs at the midpoint of human shame and suffering, lifted up as he had said he would be, drawing all people to himself.",
      "Pilate writes an inscription and fastens it to the cross: &ldquo;Jesus of Nazareth, the King of the Jews&rdquo; (19:19). It is written in three languages &mdash; Aramaic, Latin, and Greek &mdash; so that all who pass may read it. The chief priests protest that it should say only that he claimed to be king, but Pilate refuses: &ldquo;What I have written I have written&rdquo; (19:22). In an irony Pilate cannot grasp, the title proclaims to the whole world, in the languages of religion, empire, and culture, the truth of who hangs there.",
      "The soldiers turn to the spoils of execution. They take his garments and divide them into four parts, one for each soldier, but the tunic was seamless, woven in one piece from top to bottom (19:23). Rather than tear it, they cast lots for it, &ldquo;so that the Scripture might be fulfilled which says, They divided my garments among them, and for my clothing they cast lots&rdquo; (19:24). The words of Psalm 22, written a thousand years before, are enacted to the letter at the foot of the cross.",
      "John then lifts our eyes from the soldiers to those who loved him: &ldquo;but standing by the cross of Jesus were his mother and his mother&rsquo;s sister, Mary the wife of Clopas, and Mary Magdalene&rdquo; (19:25). While the disciples have largely fled, the women remain, keeping faithful watch in the place of horror. With them stands the disciple whom Jesus loved, the only one of the twelve named at the cross.",
      "In the midst of his agony Jesus turns his attention to his mother. Seeing her and the beloved disciple standing near, he says to her, &ldquo;Woman, behold your son!&rdquo; and to the disciple, &ldquo;Behold your mother!&rdquo; (19:26&ndash;27). Even from the cross, bearing the weight of the world&rsquo;s redemption, he tends to the most personal of duties, providing for the mother who will soon be bereft.",
      "&ldquo;And from that hour the disciple took her to his own home&rdquo; (19:27). The tender word from the cross creates a new bond, a family formed at the foot of the cross where natural ties give way to the deeper kinship of those who belong to Jesus. In the very moment of his dying, he is still gathering, still providing, still binding his own to one another in love.",
    ],
  },
  {
    id: "It Is Finished",
    heading: "It Is Finished",
    reference: "John 19:28&ndash;42",
    paragraphs: [
      "John marks the final moments with deliberate care: &ldquo;After this, Jesus, knowing that all was now finished, said (to fulfill the Scripture), I thirst&rdquo; (19:28). Even his thirst is brought into the orbit of Scripture, the suffering of the righteous one foretold in the Psalms. Jesus is in full command of the scene, knowing that the work is complete and giving voice to the last detail that must be fulfilled.",
      "A jar of sour wine stood there, and they put a sponge full of it on a branch of hyssop and held it to his mouth (19:29). The detail of the hyssop is rich with meaning, recalling the Passover, when hyssop was used to spread the blood of the lamb on the doorposts. The true Passover Lamb now hangs on the cross at the very hour the Passover lambs were being slain, and the symbol gathers up all that the feast had foreshadowed.",
      "Then comes the great cry of completion: &ldquo;When Jesus had received the sour wine, he said, It is finished, and he bowed his head and gave up his spirit&rdquo; (19:30). The single Greek word, tetelestai, was used for the payment of a debt in full and the completion of a task. This is not the whimper of a defeated man but the triumphant announcement that the work of redemption is accomplished. And he gives up his spirit; no one takes his life from him, but he lays it down of himself.",
      "Because it was the day of Preparation, the bodies were not to remain on the cross on the Sabbath, so the Jews asked Pilate that the legs of the crucified be broken to hasten death (19:31). The soldiers break the legs of the two others, but when they come to Jesus and find him already dead, they do not break his legs (19:32&ndash;33). The pattern of providence governs even the actions of the executioners.",
      "Instead, &ldquo;one of the soldiers pierced his side with a spear, and at once there came out blood and water&rdquo; (19:34). John lays great weight on this testimony, insisting that he saw it and that his witness is true (19:35). The flow of blood and water testifies to the reality of Jesus&rsquo; death and, to John, speaks of the cleansing and life that pour from the crucified Savior for all who believe.",
      "Two Scriptures are fulfilled in these events: &ldquo;Not one of his bones will be broken,&rdquo; the word concerning the Passover lamb, and &ldquo;They will look on him whom they have pierced,&rdquo; the prophecy of Zechariah (19:36&ndash;37). Even in death, Jesus is shown to be the true Passover Lamb and the pierced one of prophecy, every detail testifying that this death was foreseen and purposed by God.",
      "The burial is carried out by two men who had kept their faith hidden. Joseph of Arimathea, a secret disciple for fear of the Jews, asks Pilate for the body, and Nicodemus, who had first come to Jesus by night, brings a costly mixture of myrrh and aloes, about seventy-five pounds (19:38&ndash;39). Together they take the body, bind it in linen cloths with the spices, and lay it in a new tomb in a garden near the place of crucifixion, where no one had yet been laid (19:40&ndash;42). In the quiet of that garden, the Lamb who was slain is laid to rest, awaiting the dawn of resurrection.",
    ],
  },
];

const videoItems = [
  { videoId: "Jw4kRp7Nz3X", title: "BibleProject - John 19 Overview and the Passion" },
  { videoId: "Mb8cVt5Qr2L", title: "Behold the Man - Pilate, Authority, and the True King" },
  { videoId: "Rn3dXs9Wp6K", title: "The Crucifixion at Golgotha and the King of the Jews" },
  { videoId: "Tz6bQm4Vw0N", title: "It Is Finished - Tetelestai and the Lamb of God" },
];

const data: SectionGuideData = {
  accent: "#E11D48",
  badge: `New Testament Study`,
  title: `The Gospel of John, Chapter 19`,
  intro: `Pilate presents the scourged and thorn-crowned Jesus &mdash; &ldquo;Behold the man!&rdquo; &mdash; then yields to the crowd. Jesus is crucified at Golgotha as King of the Jews, entrusts his mother to the beloved disciple, cries &ldquo;It is finished,&rdquo; and is buried in a garden tomb, every detail fulfilling Scripture.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of John 19 through visual teaching on the trial before Pilate and &ldquo;Behold the man,&rdquo; the crucifixion at Golgotha and the title &ldquo;King of the Jews,&rdquo; the word from the cross to his mother, and the cry &ldquo;It is finished&rdquo; that announces the completed work of the Lamb of God.`,
  calloutTitle: `A King Reigning from the Cross`,
  calloutBody: `John 19 presents the crucifixion not as the defeat of Jesus but as the throne of his glory. Every detail &mdash; the trilingual title, the seamless robe, the unbroken bones, the pierced side, the garden tomb &mdash; is woven into the fabric of Scripture, declaring that nothing here is accident. The cry &ldquo;It is finished&rdquo; is the shout of completion, the finishing of the work the Father gave the Son, the redemption of the world accomplished in the death of the Lamb of God.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
