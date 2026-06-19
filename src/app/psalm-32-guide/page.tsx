"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

interface Accord {
  id: string;
  title: string;
  ref: string;
  body: string[];
}

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Song of the Forgiven",
    body:
      "Psalm 32 is a psalm of David, and it is one of the brightest treasures in the Psalter. Where Psalm 51 records the raw cry of a man in the very act of repenting, Psalm 32 looks back from the far side of forgiveness and sings. It is the testimony of a soul that once buried its sin in silence, felt the slow agony of an unconfessed conscience, finally broke and confessed, and discovered the staggering relief of being freely pardoned by God. The whole psalm is suffused with the wonder of grace &mdash; not grace imagined or hoped for, but grace tasted and known.",
  },
  {
    heading: "Structure of the Psalm",
    body:
      "The psalm moves in clear stages. It opens with a double beatitude on the blessedness of the forgiven (vv.1&ndash;2). It then recalls the misery of the months David spent in silence, with his very bones wasting away under the heavy hand of God (vv.3&ndash;4). The hinge of the whole psalm is verse 5 &mdash; the moment David stopped hiding and acknowledged his sin, and found instant pardon. From that turning point flows a call to prayer and a celebration of God as a hiding place (vv.6&ndash;7), a word of divine instruction warning us not to be stubborn like a horse or mule (vv.8&ndash;9), and a closing contrast between the many sorrows of the wicked and the steadfast love that surrounds the one who trusts (vv.10&ndash;11).",
  },
  {
    heading: "Among the Penitential Psalms",
    body:
      "Psalm 32 is the second of the seven traditional Penitential Psalms &mdash; Psalms 6, 32, 38, 51, 102, 130, and 143 &mdash; songs the church has long used to give voice to repentance and the cry for mercy. Yet Psalm 32 stands a little apart from its companions in tone. The others are heavy with the present weight of guilt and grief; this one is radiant with the joy of guilt already lifted. It is repentance remembered and resolved, the psalm of a man teaching others the way he himself was brought home.",
  },
  {
    heading: "Paul and the Doctrine of Justification",
    body:
      "The New Testament gives Psalm 32 a place of remarkable theological honor. In Romans 4:6&ndash;8 the apostle Paul quotes its opening verses as a proof that justification is by faith apart from works. Paul writes that David &ldquo;speaks of the blessing of the one to whom God counts righteousness apart from works,&rdquo; and then cites Psalm 32:1&ndash;2 directly. The phrase &ldquo;counts no iniquity&rdquo; is the same accounting language Paul uses of Abraham, whose faith was counted to him as righteousness. So this ancient song of a forgiven king becomes one of the cornerstones of the gospel of grace &mdash; the blessedness of the one whose sins God does not reckon against him.",
  },
];

const themeItems: Accord[] = [
  {
    id: "t-beatitude",
    title: "The Blessedness of the Forgiven",
    ref: "Psalm 32:1&ndash;2; Matthew 5:3&ndash;12",
    body: [
      "The psalm opens with a beatitude &mdash; indeed a double beatitude. &ldquo;Blessed is the one whose transgression is forgiven, whose sin is covered. Blessed is the man against whom the LORD counts no iniquity&rdquo; (32:1&ndash;2). The Hebrew word translated &ldquo;blessed&rdquo; is the same word that opens the Psalter in Psalm 1 and that Jesus takes up in the Beatitudes of the Sermon on the Mount. It describes the deepest, most settled happiness a human being can know.",
      "What is striking is where David locates this happiness. He does not say, &ldquo;Blessed is the one who has never sinned,&rdquo; for no such person exists. He says, &ldquo;Blessed is the one whose sin is forgiven.&rdquo; The happiest person in the world is not the one with the cleanest record but the one whose stained record has been wiped clean by God. This is good news precisely for those who know they have failed.",
      "The beatitude turns our instincts upside down. We tend to think blessedness belongs to the strong, the successful, the morally impressive. David says it belongs to the pardoned sinner. The door to this happiness is not achievement but confession; not a flawless life but a forgiven one. And so the whole gospel is folded into these opening lines.",
    ],
  },
  {
    id: "t-three-words",
    title: "Three Words for Sin, Three Words for Grace",
    ref: "Psalm 32:1&ndash;2, 5; Exodus 34:6&ndash;7",
    body: [
      "In the space of these opening verses David uses three different Hebrew words for sin, and three corresponding pictures of forgiveness. The first word is transgression (pesha) &mdash; rebellion, the willful crossing of a line, treason against the rightful King. Of this David says it is &ldquo;forgiven,&rdquo; a word that literally means lifted up and carried away, as a burden is taken off the back.",
      "The second word is sin (chattah) &mdash; missing the mark, failing to hit the target God set. Of this David says it is &ldquo;covered,&rdquo; hidden from view as the mercy seat covered the broken law within the ark, so that God no longer holds it before his eyes.",
      "The third word is iniquity (avon) &mdash; the crookedness, the twist and bent of a corrupted nature. Of this David says the LORD &ldquo;counts&rdquo; it not, refusing to enter it in the ledger against us. Rebellion lifted away, failure covered over, guilt left uncounted &mdash; three words for sin met by three acts of grace, so that no dimension of our wrong is left unaddressed by the mercy of God.",
    ],
  },
  {
    id: "t-misery",
    title: "The Misery of Unconfessed Sin",
    ref: "Psalm 32:3&ndash;4; Proverbs 28:13",
    body: [
      "Before the joy comes the memory of misery. David describes the season when he kept silent about his sin, when he refused to confess and tried to carry his guilt alone. &ldquo;For when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer&rdquo; (32:3&ndash;4).",
      "This is one of the most vivid descriptions of a guilty conscience in all of Scripture. Unconfessed sin is not a neutral thing we can simply set aside; it festers. David felt it in his body &mdash; bones wasting, strength evaporating like a stream in a drought. He felt it as the heavy hand of God pressing on him day and night, an inescapable weight that gave him no rest.",
      "Scripture is honest that hiding sin does not make it disappear; it only drives the wound deeper. &ldquo;Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy&rdquo; (Proverbs 28:13). David lived the first half of that proverb before he learned the second. His months of silence were not freedom but slow torment, and the heaviness was the mercy of God refusing to let him rest in his rebellion.",
    ],
  },
  {
    id: "t-relief",
    title: "The Relief of Confession",
    ref: "Psalm 32:5; 1 John 1:9",
    body: [
      "Then comes the turning point of the whole psalm, the moment everything changes. &ldquo;I acknowledged my sin to you, and I did not cover my iniquity; I said, &lsquo;I will confess my transgressions to the LORD,&rsquo; and you forgave the iniquity of my sin&rdquo; (32:5). Notice the swiftness of it. David resolves to confess, and the pardon comes almost before the words are out of his mouth. There is no probation, no penance to earn his way back &mdash; only confession met instantly by grace.",
      "Notice too the reversal of the covering. In verses 1 and 2, God is the one who covers sin. Here David says, &ldquo;I did not cover my iniquity.&rdquo; The lesson is exact: as long as we cover our sin, God leaves it exposed; the moment we uncover it in confession, God covers it forever. The path to being covered by grace runs through the refusal to cover ourselves.",
      "This is the very heart of the gospel promise echoed in the New Testament: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness&rdquo; (1 John 1:9). The relief David found was not the fruit of his goodness but of God&rsquo;s faithfulness. The crushing weight of verses 3 and 4 lifts in a single verse, the moment the silence breaks.",
    ],
  },
  {
    id: "t-hiding",
    title: "God as a Hiding Place",
    ref: "Psalm 32:6&ndash;7; Psalm 91:1",
    body: [
      "Out of his own deliverance David draws a lesson for everyone: &ldquo;Therefore let everyone who is godly offer prayer to you at a time when you may be found; surely in the rush of great waters, they shall not reach him&rdquo; (32:6). The forgiven man becomes an evangelist of grace, urging others to seek God while he may be found, before the floodwaters of judgment rise.",
      "And then David gives us one of the most tender names for God in the psalm: &ldquo;You are a hiding place for me; you preserve me from trouble; you surround me with shouts of deliverance&rdquo; (32:7). The same God whose heavy hand had pressed down upon him in his guilt has become his hiding place, his refuge. Confession does not merely remove a burden; it restores us to the shelter of God himself.",
      "The image is rich with comfort. To be hidden in God is to be surrounded &mdash; not by accusation any longer, but by &ldquo;shouts of deliverance.&rdquo; The forgiven sinner lives encircled by the songs of his own rescue. What once was a place of dread has become a place of refuge, for the One we feared has become the One in whom we hide.",
    ],
  },
  {
    id: "t-horse",
    title: "Do Not Be Like a Horse or Mule",
    ref: "Psalm 32:8&ndash;9; Proverbs 26:3",
    body: [
      "Now a new voice speaks &mdash; the voice of God himself, offering to guide the forgiven soul: &ldquo;I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you&rdquo; (32:8). This is the promise of intimate, personal guidance, the watchful counsel of a God who keeps his eye lovingly fixed upon his child to lead him in the right path.",
      "But the promise comes with a warning: &ldquo;Be not like a horse or a mule, without understanding, which must be curbed with bit and bridle, or it will not stay near you&rdquo; (32:9). The horse and the mule have no understanding; they will only obey when forced by metal in the mouth and reins yanked tight. God calls his people to a better way &mdash; not the grudging obedience of a beast that must be dragged into line, but the willing nearness of a child who trusts the eye of his Father.",
      "There is a choice set before every soul. We can be led gently by God&rsquo;s eye, responsive to the lightest touch of his guidance, or we can be stubborn and have to be broken by the bit and bridle of hard providence. David, who had endured the heavy hand of God, knew which was better. Confession had taught him to stay near, to be guided by love rather than driven by pain.",
    ],
  },
  {
    id: "t-contrast",
    title: "Sorrow for the Wicked, Steadfast Love for the Trusting",
    ref: "Psalm 32:10&ndash;11; Psalm 5:11",
    body: [
      "The psalm closes by holding two ways of life side by side: &ldquo;Many are the sorrows of the wicked, but steadfast love surrounds the one who trusts in the LORD&rdquo; (32:10). The wicked, who refuse to confess and cover their own sin, are encircled by sorrows of their own making. But the one who trusts in the LORD is encircled by something far greater &mdash; the steadfast love of God, his unbreakable covenant faithfulness.",
      "The same verb of surrounding that described shouts of deliverance in verse 7 returns here. The forgiven life is a surrounded life. What surrounds us is the question. The wicked are hemmed in by their sorrows; the trusting are hemmed in by hesed, the loyal love of God that never lets go.",
      "And so the psalm ends not in solemnity but in celebration: &ldquo;Be glad in the LORD, and rejoice, O righteous, and shout for joy, all you upright in heart!&rdquo; (32:11). The journey that began in the silent agony of unconfessed sin ends in a shout of joy. This is the trajectory of grace &mdash; from groaning to gladness, from the heavy hand of God to the shouts of the upright in heart.",
    ],
  },
];

const verseItems: Accord[] = [
  {
    id: "v-1-2",
    title: "The Double Beatitude of Forgiveness",
    ref: "Psalm 32:1&ndash;2",
    body: [
      "&ldquo;Blessed is the one whose transgression is forgiven, whose sin is covered. Blessed is the man against whom the LORD counts no iniquity, and in whose spirit there is no deceit&rdquo; (32:1&ndash;2). The psalm begins at its destination. Before David tells us anything of his sin or his suffering, he announces the conclusion he reached: there is no happier person on earth than the one whose sin God has forgiven.",
      "The threefold language is deliberate and complete. Transgression (rebellion) is forgiven &mdash; lifted off and carried away. Sin (failure) is covered &mdash; hidden from God&rsquo;s sight. Iniquity (crookedness) is not counted &mdash; left out of the ledger. Every kind of wrong is met by a corresponding mercy, so that the forgiven person stands wholly clear before God.",
      "The final phrase, &ldquo;in whose spirit there is no deceit,&rdquo; is crucial. The blessing belongs not to the one who pretends he has no sin, but to the one who has stopped pretending. The deceit David warns against is the self-deception of the cover-up, the lie we tell ourselves to avoid confession. Blessed is the one who is finally honest with God.",
      "Paul seizes upon these two verses in Romans 4:6&ndash;8 to prove that righteousness is counted to us apart from works. David, he says, describes &ldquo;the blessing of the one to whom God counts righteousness apart from works.&rdquo; The blessedness here is not a reward for the good; it is a gift to the guilty who trust. These opening lines are gospel before the gospel.",
    ],
  },
  {
    id: "v-3-4",
    title: "The Misery of Silence",
    ref: "Psalm 32:3&ndash;4",
    body: [
      "&ldquo;For when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer. Selah&rdquo; (32:3&ndash;4). Having announced the blessing, David now tells us the road he traveled to reach it &mdash; and it began in silence.",
      "The silence was not peace; it was suppression. David refused to confess, and the unconfessed sin worked on him like a sickness. His bones, the very frame of his body, seemed to waste away. His groaning filled his days. The Hebrew is the language of a man physically broken by the weight of a guilty conscience he would not unburden.",
      "And behind the wasting was the hand of God: &ldquo;day and night your hand was heavy upon me.&rdquo; This heaviness was not cruelty but mercy in disguise. God would not let David settle comfortably into his sin. The pressure of that hand, drying up his strength like a stream in the summer heat, was the discipline of a Father determined to bring his child to repentance.",
      "The word &ldquo;Selah&rdquo; invites us to pause and let the weight of these verses sink in. Anyone who has tried to outrun a guilty conscience knows this drought of the soul &mdash; the joyless, strength-sapping misery of sin held in and never confessed.",
    ],
  },
  {
    id: "v-5",
    title: "The Turn &mdash; I Acknowledged My Sin",
    ref: "Psalm 32:5",
    body: [
      "&ldquo;I acknowledged my sin to you, and I did not cover my iniquity; I said, &lsquo;I will confess my transgressions to the LORD,&rsquo; and you forgave the iniquity of my sin. Selah&rdquo; (32:5). This single verse is the pivot of the entire psalm. Everything before it is misery; everything after it is grace. And the change comes the instant David breaks his silence.",
      "The verse piles up the same three words for sin used in the opening beatitude &mdash; sin, iniquity, transgression &mdash; but now in the language of confession rather than concealment. &ldquo;I acknowledged&hellip; I did not cover&hellip; I will confess.&rdquo; David finally does the one thing he had refused to do, and he does it fully, holding nothing back.",
      "The speed of the forgiveness is breathtaking. David barely finishes resolving to confess &mdash; &ldquo;I said, I will confess&rdquo; &mdash; and the pardon has already come: &ldquo;and you forgave the iniquity of my sin.&rdquo; There is no delay, no penance, no probationary period. The heavy hand of verses 3 and 4 lifts at once. This is how ready God is to forgive the one who turns to him in honesty.",
      "Here is the lesson at the center of the psalm: when we cover our sin, God exposes it; when we uncover it, God covers it. The whole weight of misery and the whole flood of relief turn on this one decision to stop hiding. A second &ldquo;Selah&rdquo; bids us linger in the wonder of so swift a grace.",
    ],
  },
  {
    id: "v-6-7",
    title: "Therefore Let Everyone Pray &mdash; You Are a Hiding Place",
    ref: "Psalm 32:6&ndash;7",
    body: [
      "&ldquo;Therefore let everyone who is godly offer prayer to you at a time when you may be found; surely in the rush of great waters, they shall not reach him&rdquo; (32:6). The word &ldquo;therefore&rdquo; turns David&rsquo;s private experience into a public invitation. Because he found such ready forgiveness, he urges all the godly to seek God in prayer while there is still time.",
      "The promise is one of security in the storm. When the &ldquo;great waters&rdquo; rise &mdash; the floods of trouble or judgment that overwhelm the unrepentant &mdash; they will not reach the one who has sought refuge in God. The forgiven soul stands on higher ground.",
      "Then David names his refuge directly: &ldquo;You are a hiding place for me; you preserve me from trouble; you surround me with shouts of deliverance&rdquo; (32:7). The God whose heavy hand once pressed him down is now the very place he hides. This is the wonder of reconciliation &mdash; the One we feared in our guilt becomes our shelter in our pardon.",
      "And he is not merely hidden but surrounded &mdash; encircled with &ldquo;shouts of deliverance,&rdquo; the songs and shouts that celebrate rescue. The forgiven life is lived inside a chorus of salvation, ringed about by the very joy of being saved.",
    ],
  },
  {
    id: "v-8-9",
    title: "Divine Instruction &mdash; Be Not Like a Horse or Mule",
    ref: "Psalm 32:8&ndash;9",
    body: [
      "&ldquo;I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you&rdquo; (32:8). Most read this as the voice of God responding to David, taking up the role of teacher and guide. To the soul newly restored, God promises the gift of guidance &mdash; instruction in the right way, counsel given with his loving eye fixed upon his child.",
      "The phrase &ldquo;with my eye upon you&rdquo; pictures the most personal kind of leading. A good shepherd or a wise parent can guide with a glance, and the one who trusts will follow the slightest movement of that eye. This is guidance by relationship, not by force.",
      "Which is exactly why the warning follows: &ldquo;Be not like a horse or a mule, without understanding, which must be curbed with bit and bridle, or it will not stay near you&rdquo; (32:9). The horse and mule have no understanding; they obey only when metal forces them. They will not stay near unless dragged.",
      "God invites us to a better obedience &mdash; the willing nearness of a child who trusts his Father&rsquo;s eye, not the grudging compliance of a beast that must be broken. David, who had felt the bit and bridle of the heavy hand, commends the gentler way. Better to be led by love than driven by pain.",
    ],
  },
  {
    id: "v-10-11",
    title: "Many Sorrows, but Steadfast Love &mdash; Shout for Joy",
    ref: "Psalm 32:10&ndash;11",
    body: [
      "&ldquo;Many are the sorrows of the wicked, but steadfast love surrounds the one who trusts in the LORD&rdquo; (32:10). The psalm sets two destinies side by side. The wicked, who will not confess, are encircled by sorrows. The one who trusts is encircled by hesed &mdash; the steadfast, covenant love of God that never fails.",
      "This is the final use of the surrounding language. In verse 7 the forgiven man was surrounded by shouts of deliverance; here he is surrounded by steadfast love. The life of trust is a hemmed-in life, but hemmed in by mercy. What encircles us is the loyal love of God himself.",
      "And so the psalm ends in a burst of joy: &ldquo;Be glad in the LORD, and rejoice, O righteous, and shout for joy, all you upright in heart!&rdquo; (32:11). The man who began wasting away in silent groaning ends by calling the whole company of the righteous to shout aloud.",
      "The arc of the psalm is complete. From the heavy hand of God to the hiding place of God; from groaning all day long to shouting for joy; from the deceit of the cover-up to the gladness of the upright in heart. This is what forgiveness does &mdash; it turns the penitent&rsquo;s grief into a shout of praise.",
    ],
  },
];

const appBlocks: { heading: string; body: string }[] = [
  {
    heading: "Stop Covering, and Be Covered",
    body:
      "The single most practical lesson of Psalm 32 is the reversal at its center: as long as we cover our sin, God leaves it exposed; the moment we uncover it in confession, God covers it forever (vv.5, 1). Many of us carry burdens for years that a single honest confession would lift in an instant. The silence we keep to protect ourselves only prolongs the misery. Whatever sin you are hiding &mdash; from God, from yourself, from those you love &mdash; the door to being covered by grace runs straight through the decision to stop covering yourself. Bring it into the light and find how ready God is to forgive.",
  },
  {
    heading: "Take Your Conscience Seriously",
    body:
      "David&rsquo;s wasting bones and drying strength are a warning we ignore at our peril. A guilty conscience is not a malfunction to be medicated away; it is the heavy hand of a merciful God refusing to let us rest in our rebellion (vv.3&ndash;4). When you feel the dull weight of an unconfessed wrong, do not numb it, distract yourself from it, or argue it down. Listen to it. That heaviness is grace in disguise, pressing you toward the very confession that will set you free. The discomfort of conviction is the mercy that leads to repentance.",
  },
  {
    heading: "Let God Be Your Hiding Place",
    body:
      "Notice that the same God whose hand was heavy upon David in his guilt becomes his hiding place in his pardon (vv.4, 7). Too many believers, having sinned, run away from God when they most need to run to him. But the forgiven life is a life surrounded &mdash; encircled by shouts of deliverance and steadfast love rather than by accusation. When trouble or temptation or the memory of past failure threatens to overwhelm you like rising waters, the refuge is not in hiding your sin but in hiding yourself in God. He is the shelter, and confession is the door that opens it.",
  },
  {
    heading: "Be Led by His Eye, Not the Bit",
    body:
      "God offers to guide us &ldquo;with my eye upon you,&rdquo; and warns us not to be like the horse or mule that must be forced into line by bit and bridle (vv.8&ndash;9). There is a softer, sweeter way to walk with God than learning every lesson the hard way. The willing heart, sensitive to the slightest movement of God&rsquo;s guidance, is spared much of the painful discipline that stubbornness invites. Ask yourself honestly: am I being led by God&rsquo;s gentle eye, or am I forcing him to break me with hard providences? Cultivate the responsiveness of a trusting child, and stay near.",
  },
];

const reflectionQuestions: string[] = [
  "Is there a sin you are presently covering &mdash; hiding from God, from yourself, or from others &mdash; and what would it look like to uncover it in honest confession today?",
  "David describes the physical and emotional toll of unconfessed sin (vv.3&ndash;4). Have you experienced the &ldquo;heaviness&rdquo; of a guilty conscience, and how did you respond to it?",
  "How does the speed of the forgiveness in verse 5 &mdash; pardon coming almost before David finishes resolving to confess &mdash; reshape your picture of how ready God is to forgive you?",
  "In what way has God become a &ldquo;hiding place&rdquo; for you (v.7)? Where are you tempted instead to hide from God rather than in him?",
  "Are you currently being led by God&rsquo;s gentle eye, or are you more like the horse and mule, learning your lessons the hard way through the bit and bridle (vv.8&ndash;9)?",
  "Paul quotes this psalm to teach that God counts righteousness apart from works (Romans 4:6&ndash;8). How does the truth that your blessedness rests on forgiveness rather than performance change the way you come to God?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 32 &mdash; The Blessedness of Forgiveness" },
  { videoId: "Q2oNOlXzBhY", title: "Confession and Pardon &mdash; A Study of Psalm 32" },
  { videoId: "8phkAg8PMHE", title: "Justified by Faith &mdash; Psalm 32 and Romans 4" },
  { videoId: "fNk_zzaMoSs", title: "God Our Hiding Place &mdash; Walking in Psalm 32" },
];

export default function Psalm32Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: Accord[], accent: string) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, fontFamily: "inherit" }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: TEXT, fontSize: "1.12rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <span style={{ color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }} dangerouslySetInnerHTML={{ __html: item.ref }} />
              </span>
              <span aria-hidden style={{ color: accent, fontSize: 22, fontWeight: 700, lineHeight: 1, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                +
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 1.4rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {item.body.map((para, i) => (
                  <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &middot; Penitential Psalm
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 32: The Blessedness of Forgiveness
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            David looks back from the far side of forgiveness and sings &mdash; the misery of unconfessed sin, the swift relief of confession, God as a hiding place, and the steadfast love that surrounds the one who trusts.
          </p>
          <div style={{ background: CARD, border: `1px solid ${GREEN}55`, borderLeft: `4px solid ${GREEN}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
            <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &middot; Psalm 32:1&ndash;2</div>
            <p style={{ color: TEXT, fontSize: "1.18rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Blessed is the one whose transgression is forgiven, whose sin is covered. Blessed is the man against whom the LORD counts no iniquity, and in whose spirit there is no deceit.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setOpen(null); }}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                background: tab === t ? GREEN : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {overviewBlocks.map((b, i) => (
                <div key={i}>
                  <h3 style={{ color: GREEN, fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Seven threads run through the psalm &mdash; from the double beatitude of the forgiven to the shout of joy that closes it. Tap each theme to open it." }} />
            {renderAccordion(themeItems, GREEN)}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Work through Psalm 32 in six movements, from the blessedness of the forgiven (vv.1&ndash;2) to the closing shout for joy (vv.10&ndash;11)." }} />
            {renderAccordion(verseItems, PURPLE)}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Application</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
              {appBlocks.map((b, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GOLD}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: GOLD, fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: ROSE, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Go deeper into Psalm 32 with teaching on the blessedness of forgiveness, the agony of the cover-up, the connection to Paul&rsquo;s gospel of justification, and God as our hiding place." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Father, I have known the heaviness of silence, the slow wasting of a conscience that would not confess. Thank you that the moment I stop covering my sin, you cover it forever. I acknowledge my transgressions to you now and hide them no longer; wash them away by the blood of Christ. Be my hiding place; surround me with shouts of deliverance and with your steadfast love. Teach me your way and lead me with your gentle eye, that I may not be like the stubborn horse or mule, but a willing child who stays near. Turn my groaning into gladness, and let me shout for joy among the upright in heart. In the name of Jesus, in whom no iniquity is counted against me, amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
