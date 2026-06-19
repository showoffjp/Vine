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

interface Accordion {
  id: string;
  title: string;
  reference: string;
  color: string;
  body: string;
}

const themeItems: Accordion[] = [
  {
    id: "theme-trust",
    title: "A Lifetime of Trust, From Before Birth to Gray Hairs",
    reference: "Psalm 71:5-6, 17-18",
    color: PURPLE,
    body:
      "<p>The deepest current running through Psalm 71 is the unbroken thread of a whole life leaning on God. &ldquo;For you, O Lord, are my hope, my trust, O LORD, from my youth. Upon you I have leaned from before my birth; you are he who took me from my mother&rsquo;s womb&rdquo; (71:5-6). The psalmist does not date his faith from a recent crisis but from the very beginning of his existence. God was his God before he could speak, before he could choose, before he could understand. This is the testimony of a believer who can look back across decades and see one faithful hand holding him the whole way.</p>" +
      "<p>That same trust now stretches forward to its final season: &ldquo;O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me&rdquo; (71:17-18). The arc is complete &mdash; from the womb to the white head, from the first breath to the last. Here is a faith that has been tested by time and has not failed, a hope that has outlasted youth and strength and is still burning as the body grows weak.</p>" +
      "<p>This lifelong trust is not the same as a life without trouble. The psalmist has known &ldquo;many troubles and calamities&rdquo; (71:20). But he has learned across the years that the God who held him as an infant will not drop him as an old man. <strong>Cross-reference:</strong> Isaiah captures the same promise: &ldquo;Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save&rdquo; (Isaiah 46:4). The God who made us is the God who will carry us all the way home.</p>",
  },
  {
    id: "theme-oldage",
    title: "The Particular Plea of Old Age and Failing Strength",
    reference: "Psalm 71:9, 18",
    color: ROSE,
    body:
      "<p>Psalm 71 is the great prayer of the aging believer, and its most poignant cry is unmistakable: &ldquo;Do not cast me off in the time of old age; forsake me not when my strength is spent&rdquo; (71:9). There is a particular vulnerability that comes with the failing of the body. Strength that once seemed inexhaustible drains away. The world that once respected the strong begins to overlook the old. And in that weakness an ancient fear rises &mdash; the fear of being discarded, set aside, forgotten.</p>" +
      "<p>The psalmist brings that very fear to God and lays it before him honestly. He does not pretend to be strong; he names his weakness. &ldquo;When my strength is spent&rdquo; is not a confession of failure but a plea for grace precisely at the point where human resources run out. The aging saint has learned that this is exactly the moment when God&rsquo;s sufficiency shines brightest.</p>" +
      "<p>What is striking is that the psalmist&rsquo;s great concern in old age is not comfort but usefulness &mdash; that he might still &ldquo;proclaim your might to another generation&rdquo; (71:18) before he goes. <strong>Cross-reference:</strong> Paul, aged and imprisoned, breathes the same spirit: &ldquo;I have fought the good fight, I have finished the race, I have kept the faith&rdquo; (2 Timothy 4:7). And the promise of Psalm 92 stands over every faithful elder: &ldquo;They still bear fruit in old age; they are ever full of sap and green&rdquo; (Psalm 92:14).</p>",
  },
  {
    id: "theme-enemies",
    title: "Pursued by Those Who Say, &lsquo;God Has Forsaken Him&rsquo;",
    reference: "Psalm 71:10-11, 13",
    color: TEAL,
    body:
      "<p>The aging psalmist is not left in peace. &ldquo;For my enemies speak concerning me; those who watch for my life consult together and say, &lsquo;God has forsaken him; pursue and seize him, for there is none to deliver him&rsquo;&rdquo; (71:10-11). The cruelty of the attack is sharpened by its timing &mdash; the wicked strike when they perceive their victim to be weak, alone, and seemingly abandoned by heaven. Their slander is theological: they claim that God himself has let go of his servant.</p>" +
      "<p>This is the bitterest of accusations, for it strikes not merely at the man but at his God. To say &ldquo;God has forsaken him&rdquo; is to declare that prayer has failed and faith has been a delusion. The enemies read the believer&rsquo;s frailty as proof that the Lord has withdrawn. They mistake the silence of God for the absence of God.</p>" +
      "<p>The psalmist&rsquo;s answer is to pray more urgently, not less: &ldquo;O God, be not far from me; O my God, make haste to help me!&rdquo; (71:12). He turns the accusation into an appeal. <strong>Cross-reference:</strong> The same taunt was hurled at Christ on the cross: &ldquo;He trusts in God; let God deliver him now, if he desires him&rdquo; (Matthew 27:43). And the same psalm of the suffering righteous declares the truth: God &ldquo;has not despised or abhorred the affliction of the afflicted&rdquo; (Psalm 22:24). The taunt is a lie; God has not forsaken his own.</p>",
  },
  {
    id: "theme-praise",
    title: "Hoping and Praising More and More",
    reference: "Psalm 71:14-16, 24",
    color: GOLD,
    body:
      "<p>At the heart of the psalm stands a magnificent resolve: &ldquo;But I will hope continually and will praise you yet more and more&rdquo; (71:14). The little word &ldquo;but&rdquo; turns the whole prayer. Against the enemies, against the weakness, against the fear of being cast off, the psalmist sets his face toward hope and worship. And he does not aim merely to maintain his praise but to increase it &mdash; &ldquo;yet more and more.&rdquo; The flame is to burn brighter, not dimmer, as the night deepens.</p>" +
      "<p>This praise is to be unceasing and full-throated: &ldquo;My mouth will tell of your righteous acts, of your deeds of salvation all the day, for their number is past my knowledge&rdquo; (71:15). The psalmist&rsquo;s testimony is so vast that he cannot count it &mdash; a lifetime of mercies beyond reckoning. He resolves to &ldquo;come with the mighty deeds of the Lord GOD&rdquo; (71:16), to come into God&rsquo;s presence carrying not his own achievements but God&rsquo;s.</p>" +
      "<p>By the psalm&rsquo;s close, the resolve has become unbroken song: &ldquo;My tongue will talk of your righteous help all the day long&rdquo; (71:24). <strong>Cross-reference:</strong> This is the praise that Paul commands the church: &ldquo;Rejoice in the Lord always; again I will say, rejoice&rdquo; (Philippians 4:4), and the worship of the redeemed who &ldquo;day and night&rdquo; never cease their song (Revelation 4:8). The aging believer&rsquo;s last and best work is to praise God more and more.</p>",
  },
  {
    id: "theme-generation",
    title: "Proclaiming God&rsquo;s Might to Another Generation",
    reference: "Psalm 71:18",
    color: GREEN,
    body:
      "<p>The defining vocation of Psalm 71 is named in its key verse: &ldquo;So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come&rdquo; (71:18). The psalmist does not ask to be spared simply so that he may live longer or rest more easily. He asks for life and strength so that he may finish a task &mdash; the passing on of the faith to those who come after him.</p>" +
      "<p>This is the calling of the older believer: to be a bridge between the generations, carrying the testimony of God&rsquo;s faithfulness from one age into the next. The young need to hear from those who have walked the long road that God is faithful, that he keeps his promises, that he does not forsake. A lifetime of experience becomes a treasure to be handed down.</p>" +
      "<p>The word &ldquo;until&rdquo; is telling: the psalmist is willing to keep going as long as the work of witness is unfinished. <strong>Cross-reference:</strong> This is the heartbeat of Psalm 78: &ldquo;We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD&rdquo; (Psalm 78:4). It is the charge Moses gave: &ldquo;Make them known to your children and your children&rsquo;s children&rdquo; (Deuteronomy 4:9). And it is fulfilled in the great commission to make disciples of all nations (Matthew 28:19) &mdash; the faith carried forward, generation after generation, until Christ returns.</p>",
  },
  {
    id: "theme-revive",
    title: "A Hope That Reaches Beyond Death",
    reference: "Psalm 71:20-21",
    color: PURPLE,
    body:
      "<p>Near the end of the psalm comes one of its most daring confessions: &ldquo;You who have made me see many troubles and calamities will revive me again; from the depths of the earth you will bring me up again&rdquo; (71:20). The psalmist acknowledges that God himself has permitted the troubles &mdash; &ldquo;you who have made me see&rdquo; them &mdash; and yet from that same hand he expects revival. The God who wounds is the God who heals.</p>" +
      "<p>But the language strains toward something greater than recovery from illness. &ldquo;From the depths of the earth you will bring me up again&rdquo; carries the scent of resurrection. To be brought up from the depths of the earth is the language of one raised from the grave itself. For an aging man facing the nearness of death, this is a hope that does not stop at the edge of the tomb but reaches over it.</p>" +
      "<p>The psalmist&rsquo;s confidence rests not in his own vitality but in God&rsquo;s power to raise the dead. <strong>Cross-reference:</strong> This hope finds its anchor in Christ, &ldquo;the firstfruits of those who have fallen asleep&rdquo; (1 Corinthians 15:20), who promises &ldquo;I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live&rdquo; (John 11:25). The God who brings the believer up from the depths will &ldquo;increase my greatness and comfort me again&rdquo; (71:21) &mdash; on the far side of every grave.</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "In You, O LORD, Do I Take Refuge",
    reference: "Psalm 71:1-4",
    color: TEAL,
    body:
      "<p>&ldquo;In you, O LORD, do I take refuge; let me never be put to shame! In your righteousness deliver me and rescue me; incline your ear to me, and save me!&rdquo; (71:1-2). The psalm opens with the language of flight to a stronghold. The believer, hard-pressed and exposed, runs to the one place where he cannot be harmed &mdash; the very presence of God. To &ldquo;take refuge&rdquo; is the most basic act of faith: it is the helpless creature fleeing to the only one strong enough to save.</p>" +
      "<p>&ldquo;Be to me a rock of refuge, to which I may continually come; you have given the command to save me, for you are my rock and my fortress&rdquo; (71:3). The image of God as rock and fortress runs through the Psalter (compare Psalm 31:2-3, from which this opening is drawn). A rock is unmovable, ancient, and high &mdash; a place the enemy cannot reach. The psalmist asks to be able to come to this rock &ldquo;continually&rdquo; &mdash; not once in a crisis, but again and again, as a settled habit of the soul.</p>" +
      "<p>&ldquo;Rescue me, O my God, from the hand of the wicked, from the grasp of the unjust and cruel man&rdquo; (71:4). The threat is real and personal &mdash; a grasping hand, an unjust and cruel adversary. Yet the prayer is grounded not in the psalmist&rsquo;s innocence but in God&rsquo;s righteousness: &ldquo;In your righteousness deliver me.&rdquo; It is God&rsquo;s own commitment to do right that the believer pleads as his hope. These four verses set the tone for the whole psalm: a frightened man fleeing to an unshakable God.</p>",
  },
  {
    id: "v2",
    title: "My Hope From My Youth",
    reference: "Psalm 71:5-8",
    color: PURPLE,
    body:
      "<p>&ldquo;For you, O Lord, are my hope, my trust, O LORD, from my youth&rdquo; (71:5). Here the psalmist gives the ground of his confidence: not a recent acquaintance with God but a lifelong one. His hope is not a desperate experiment but a tried and tested reality, reaching back to his earliest days. The God he runs to now is the God he has known and trusted across the whole span of his life.</p>" +
      "<p>&ldquo;Upon you I have leaned from before my birth; you are he who took me from my mother&rsquo;s womb. My praise is continually of you&rdquo; (71:6). The psalmist traces God&rsquo;s care back even before he was born &mdash; God was the midwife of his life, the one who drew him into the world. Such a God has a claim on him that no enemy can break. Because God has been faithful since the womb, the psalmist&rsquo;s praise is &ldquo;continually&rdquo; &mdash; an unending response to an unending care.</p>" +
      "<p>&ldquo;I have been as a portent to many, but you are my strong refuge. My mouth is filled with your praise, and with your glory all the day&rdquo; (71:7-8). The word &ldquo;portent&rdquo; suggests that the psalmist&rsquo;s sufferings have made him a kind of spectacle &mdash; people watch his troubles and wonder. But where others see a warning, he sees a refuge: God is his strength. And so his mouth overflows with praise &ldquo;all the day,&rdquo; a phrase that returns again and again in this psalm, marking a life saturated with worship.</p>",
  },
  {
    id: "v3",
    title: "Do Not Cast Me Off in Old Age",
    reference: "Psalm 71:9-13",
    color: ROSE,
    body:
      "<p>&ldquo;Do not cast me off in the time of old age; forsake me not when my strength is spent&rdquo; (71:9). Here is the central petition of the psalm, the cry that has made it the prayer of the aging for three thousand years. The fear of being discarded in weakness is one of the most human of all fears, and the psalmist brings it openly to God. He pleads not on the basis of his usefulness but on the basis of God&rsquo;s faithfulness.</p>" +
      "<p>&ldquo;For my enemies speak concerning me; those who watch for my life consult together and say, &lsquo;God has forsaken him; pursue and seize him, for there is none to deliver him&rsquo;&rdquo; (71:10-11). The enemies read his frailty as abandonment by God. They gather like predators around a wounded animal, certain that no one will rescue him. Their cruelest weapon is the lie that God has let go.</p>" +
      "<p>&ldquo;O God, be not far from me; O my God, make haste to help me! May my accusers be put to shame and consumed; with scorn and disgrace may they be covered who seek my hurt&rdquo; (71:12-13). The psalmist answers the taunt with prayer. He does not argue with his enemies; he appeals to his God. &ldquo;Be not far&rdquo; and &ldquo;make haste&rdquo; are the urgent cries of one who feels time and strength slipping away. He asks that the accusation &ldquo;God has forsaken him&rdquo; be proven false by God&rsquo;s swift help.</p>",
  },
  {
    id: "v4",
    title: "I Will Hope Continually and Praise You More and More",
    reference: "Psalm 71:14-18",
    color: GOLD,
    body:
      "<p>&ldquo;But I will hope continually and will praise you yet more and more&rdquo; (71:14). The great turn of the psalm. Whatever the enemies say, whatever the body suffers, the psalmist sets his resolve: hope that does not quit and praise that keeps increasing. The whole weight of the psalm hangs on this defiant &ldquo;but.&rdquo;</p>" +
      "<p>&ldquo;My mouth will tell of your righteous acts, of your deeds of salvation all the day, for their number is past my knowledge. With the mighty deeds of the Lord GOD I will come; I will remind them of your righteousness, yours alone&rdquo; (71:15-16). The psalmist&rsquo;s testimony is so vast he cannot count it. He comes into God&rsquo;s presence carrying not his own works but God&rsquo;s &mdash; &ldquo;your righteousness, yours alone.&rdquo; This is the humility of the lifelong saint: everything good is God&rsquo;s doing.</p>" +
      "<p>&ldquo;O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come&rdquo; (71:17-18). Here is the key verse and the summit of the psalm. The believer asks for life and strength for one supreme purpose &mdash; to hand the faith on to those who come after. The whole long life has been a school of God&rsquo;s wondrous deeds, and now those lessons must be passed forward before the teacher goes home.</p>",
  },
  {
    id: "v5",
    title: "You Will Revive Me Again",
    reference: "Psalm 71:19-24",
    color: GREEN,
    body:
      "<p>&ldquo;Your righteousness, O God, reaches the high heavens. You who have done great things, O God, who is like you?&rdquo; (71:19). The psalmist&rsquo;s gaze lifts from his own troubles to the immeasurable greatness of God. God&rsquo;s righteousness is not a small or local thing but reaches to the heights of heaven. The question &ldquo;who is like you?&rdquo; is not a challenge but a confession of wonder.</p>" +
      "<p>&ldquo;You who have made me see many troubles and calamities will revive me again; from the depths of the earth you will bring me up again. You will increase my greatness and comfort me again&rdquo; (71:20-21). The psalmist acknowledges that God ordained the troubles, yet from that same God he expects revival, even resurrection &mdash; to be brought up &ldquo;from the depths of the earth.&rdquo; This is hope that reaches beyond the grave, confidence that God&rsquo;s last word over his servant is not death but comfort and increase.</p>" +
      "<p>&ldquo;I will also praise you with the harp for your faithfulness, O my God; I will sing praises to you with the lyre, O Holy One of Israel. My lips will shout for joy, when I sing praises to you; my soul also, which you have redeemed&rdquo; (71:22-23). The prayer ends in music and joy. &ldquo;And my tongue will talk of your righteous help all the day long, for they have been put to shame and disappointed who sought to do me hurt&rdquo; (71:24). The psalm closes where it longed to be &mdash; in unbroken, all-day praise, the enemies silenced and the redeemed soul singing.</p>",
  },
];

const appItems: Accordion[] = [
  {
    id: "app-aging",
    title: "A Prayer to Pray as You Grow Older",
    reference: "Psalm 71:9, 18",
    color: ROSE,
    body:
      "<p>Psalm 71 gives the aging believer language for fears that are often too tender to speak. The dread of becoming a burden, of being set aside, of outliving one&rsquo;s usefulness &mdash; these are not faithless feelings to be hidden but honest cries to be brought to God. &ldquo;Do not cast me off in the time of old age; forsake me not when my strength is spent&rdquo; (71:9) is a prayer the Lord delights to answer.</p>" +
      "<p>If you are growing older, let this psalm become your own. Pray it in the morning when the body is slow to wake; pray it in the long afternoons; pray it in the watches of the night. And let it reframe your fear into a calling: ask God not merely to keep you comfortable but to keep you useful &mdash; that you might &ldquo;proclaim your might to another generation&rdquo; before you go. The God who carried you from the womb will carry you to the grave and beyond.</p>",
  },
  {
    id: "app-generation",
    title: "Pass the Faith to the Next Generation",
    reference: "Psalm 71:18",
    color: GREEN,
    body:
      "<p>The key verse of this psalm is a charge as much as a prayer: to proclaim God&rsquo;s might &ldquo;to another generation, your power to all those to come&rdquo; (71:18). However old or young you are, there is a generation coming after you who needs to hear from your lips that God is faithful. Your children, grandchildren, the young believers in your church, the new convert across the aisle &mdash; all of them need the testimony of one who has walked with God.</p>" +
      "<p>Do not assume the next generation will absorb the faith by accident. Tell them. Tell them the wondrous deeds God has done in your life. Tell them of the troubles he brought you through and the prayers he answered. Write it down; speak it aloud; let your &ldquo;all the day&rdquo; praise be heard by younger ears. This is among the most important work any believer can do, and it is work that can be done from a wheelchair or a sickbed as well as from a pulpit.</p>",
  },
  {
    id: "app-hope",
    title: "Choose Hope and Praise When You Are Tempted to Despair",
    reference: "Psalm 71:14",
    color: GOLD,
    body:
      "<p>&ldquo;But I will hope continually and will praise you yet more and more&rdquo; (71:14). Notice that this is a decision, not a feeling. The psalmist does not wait until his circumstances improve to hope; he resolves to hope in the middle of the trouble. He does not praise because everything is well; he praises in order to set his soul toward the God who is well able to deliver.</p>" +
      "<p>When the enemies of your soul whisper that God has forsaken you, answer them as the psalmist did &mdash; with a deliberate &ldquo;but.&rdquo; But I will hope. But I will praise. And do not aim merely to hold your ground; aim to grow &mdash; &ldquo;yet more and more.&rdquo; Let each fresh deliverance add fuel to your worship until your testimony, like the psalmist&rsquo;s, is past your own knowledge to count.</p>",
  },
  {
    id: "app-beyond",
    title: "Live and Die in Resurrection Hope",
    reference: "Psalm 71:20-21",
    color: PURPLE,
    body:
      "<p>The psalmist&rsquo;s confidence that God &ldquo;will bring me up again&rdquo; from &ldquo;the depths of the earth&rdquo; (71:20) is a hope that the New Testament makes blazingly clear. For the believer in Christ, death is not a wall but a door. The same God who held you from the womb will not abandon you in the grave; he will raise you up on the last day, &ldquo;increase your greatness, and comfort you again&rdquo; (71:21).</p>" +
      "<p>Let this hope shape how you face your own aging and dying, and how you comfort others in theirs. We do not grieve as those who have no hope (1 Thessalonians 4:13). The Good Shepherd who passed through death and rose again has gone ahead to prepare a place. The troubles God lets us see are real, but they are not the end of the story. The God of Psalm 71 has the last word, and that word is resurrection.</p>",
  },
];

const reflectionQuestions = [
  "Can you trace, like the psalmist, a thread of God&rsquo;s faithfulness running back through your whole life &mdash; even &ldquo;from before my birth&rdquo; (71:5-6)? What specific evidences of his care can you name?",
  "What fears rise in you as you grow older, or as you watch loved ones age? How does the prayer &ldquo;do not cast me off in the time of old age&rdquo; (71:9) give you words for those fears?",
  "Have you ever felt that God had forsaken you, or heard others suggest it (71:11)? How does the psalmist&rsquo;s response &mdash; praying more urgently rather than less &mdash; instruct you?",
  "The psalmist resolves to praise God &ldquo;yet more and more&rdquo; (71:14). Is your praise growing or shrinking with the years? What would it look like to deliberately increase it?",
  "Who is the &ldquo;another generation&rdquo; (71:18) that God has placed in your life to receive the testimony of his faithfulness? What is one concrete way you could proclaim his might to them this month?",
  "How does the hope of resurrection &mdash; that God &ldquo;will bring me up again from the depths of the earth&rdquo; (71:20) &mdash; change the way you think about your own death and the death of those you love?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 71: The Prayer of an Aging Believer" },
  { videoId: "Q2oNOlXzBhY", title: "Trusting God From Youth to Old Age" },
  { videoId: "8phkAg8PMHE", title: "Proclaiming God to the Next Generation" },
  { videoId: "fNk_zzaMoSs", title: "Hope Beyond Death in the Psalms" },
];

export default function Psalm71Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const accordionBlock = (items: Accordion[]) =>
    items.map((item) => {
      const isOpen = open === item.id;
      return (
        <div
          key={item.id}
          style={{
            background: CARD,
            border: `1px solid ${isOpen ? item.color : BORDER}`,
            borderRadius: 14,
            marginBottom: "0.9rem",
            overflow: "hidden",
            transition: "border-color 0.2s ease",
          }}
        >
          <button
            type="button"
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen}
            style={{
              width: "100%",
              textAlign: "left",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "1.15rem 1.35rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
                boxShadow: `0 0 12px ${item.color}`,
              }}
            />
            <span style={{ flex: 1 }}>
              <span
                style={{
                  display: "block",
                  color: TEXT,
                  fontSize: "1.06rem",
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span
                style={{
                  display: "block",
                  color: item.color,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  marginTop: "0.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                {item.reference}
              </span>
            </span>
            <span
              style={{
                color: MUTED,
                fontSize: "1.4rem",
                lineHeight: 1,
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
              dangerouslySetInnerHTML={{ __html: "&#43;" }}
            />
          </button>
          {isOpen && (
            <div
              style={{
                padding: "0 1.35rem 1.4rem 2.35rem",
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          )}
        </div>
      );
    });

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <header
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: "3rem 1.4rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: PURPLE,
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "0.9rem",
          }}
        >
          A Study in the Psalms
        </p>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Psalm 71
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.15rem",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto 1.8rem",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "The prayer of an aging believer who has trusted God since youth &mdash; a cry for faithfulness &ldquo;to old age and gray hairs,&rdquo; and a resolve to keep proclaiming God&rsquo;s might to the next generation.",
          }}
        />
        <div
          style={{
            background: `linear-gradient(135deg, ${CARD}, ${BG})`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${PURPLE}`,
            borderRadius: 14,
            padding: "1.5rem 1.7rem",
            textAlign: "left",
            maxWidth: 660,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: PURPLE,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 0.6rem",
            }}
          >
            Key Verse &mdash; Psalm 71:18
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.65,
              fontStyle: "italic",
              margin: 0,
              fontFamily: "Georgia, serif",
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come.&rdquo;",
            }}
          />
        </div>
      </header>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            display: "flex",
            gap: "0.4rem",
            padding: "0.6rem 1rem",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setOpen(null);
                }}
                style={{
                  flex: "0 0 auto",
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: `1px solid ${active ? PURPLE : BORDER}`,
                  borderRadius: 999,
                  padding: "0.5rem 1.1rem",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </nav>

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.2rem 1.4rem 5rem" }}>
        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.1rem", fontFamily: "Georgia, serif" }}>
              Overview
            </h2>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 71 is the great psalm of aging &mdash; the prayer of a believer whose strength is failing but whose faith is not. Across its twenty-four verses, an old man looks back over a lifetime of trusting God &ldquo;from my youth&rdquo; and even &ldquo;from before my birth&rdquo; (71:5-6), and he looks ahead to his final season with one urgent request: that God would not forsake him now, when he most needs help, and that he might live long enough to hand the faith on to those who come after (71:18).</p>" +
                  "<p>The psalm moves between honest fear and rising hope. The psalmist is pursued by enemies who read his weakness as proof that &ldquo;God has forsaken him&rdquo; (71:11), and his body is no longer the fortress it once was. Yet against every threat he plants a defiant resolve: &ldquo;But I will hope continually and will praise you yet more and more&rdquo; (71:14). His confidence reaches all the way to resurrection &mdash; the God who has made him see many troubles &ldquo;will revive me again; from the depths of the earth you will bring me up again&rdquo; (71:20).</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 1rem",
                color: TEAL,
                fontFamily: "Georgia, serif",
              }}
            >
              Structure of the Psalm
            </h3>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.4rem 1.6rem",
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong style=\"color:#F2F2F8\">Verses 1-4 &mdash; The Refuge:</strong> The psalmist flees to God as his rock and fortress, pleading for rescue from the hand of the wicked.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 5-8 &mdash; A Lifetime of Trust:</strong> He grounds his hope in God&rsquo;s care reaching back &ldquo;from before my birth,&rdquo; and his praise that flows &ldquo;all the day.&rdquo;</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 9-13 &mdash; The Plea of Old Age:</strong> The central cry not to be cast off when strength is spent, set against enemies who say God has forsaken him.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 14-18 &mdash; Hope and the Next Generation:</strong> The turn to rising praise and the great purpose &mdash; to proclaim God&rsquo;s might to another generation.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 19-24 &mdash; Revival and Song:</strong> A hope that reaches beyond death, ending in music, joy, and all-day praise.</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 1rem",
                color: GOLD,
                fontFamily: "Georgia, serif",
              }}
            >
              Context
            </h3>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 71 carries no title, but its language is unmistakably that of a man steeped in Scripture across a long life. The psalm weaves together phrases from many other psalms &mdash; especially Psalms 22, 31, 35, and 40 &mdash; almost as though the psalmist, in his old age, is praying the prayers he has loved and lived for decades. Its opening (71:1-3) is drawn almost word for word from Psalm 31:1-3. This is the prayer of one whose heart has been so shaped by the songs of Israel that they have become his own breath.</p>" +
                  "<p>This is the great psalm for those whose strength is failing, for the aging saint, and for the lifelong faithfulness of God across a whole human life &mdash; &ldquo;from before my birth&rdquo; to &ldquo;old age and gray hairs.&rdquo; Its recurring concern is not merely personal preservation but the desire to keep testifying to the next generation. And its boldest note &mdash; &ldquo;you will bring me up again from the depths of the earth&rdquo; (71:20) &mdash; has long been read as a hope that transcends even death, fulfilled in the resurrection won by Christ.</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              Six threads that run through Psalm 71, each with cross-references to the wider witness of Scripture.
            </p>
            {accordionBlock(themeItems)}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              Walking through the psalm section by section, from the flight to the rock of refuge to the closing song of the redeemed.
            </p>
            {accordionBlock(verseItems)}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Application
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              How the prayer of the aging believer reshapes the way we trust, witness, and hope.
            </p>
            {accordionBlock(appItems)}

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.1rem",
                color: GOLD,
                fontFamily: "Georgia, serif",
              }}
            >
              Questions for Reflection
            </h3>
            <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {reflectionQuestions.map((q, i) => (
                <li
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.1rem 1.3rem",
                    marginBottom: "0.85rem",
                    display: "flex",
                    gap: "0.95rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: PURPLE,
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </li>
              ))}
            </ol>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.1rem",
                color: TEAL,
                fontFamily: "Georgia, serif",
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.2rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p
                    style={{
                      color: TEXT,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      lineHeight: 1.5,
                      padding: "0.9rem 1.1rem",
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2.6rem",
                background: `linear-gradient(135deg, ${CARD}, ${BG})`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${PURPLE}`,
                borderRadius: 14,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  margin: "0 0 0.9rem",
                  color: PURPLE,
                  fontFamily: "Georgia, serif",
                }}
              >
                A Closing Prayer
              </h3>
              <p
                style={{
                  color: MUTED,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  margin: 0,
                  fontFamily: "Georgia, serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>O Lord, you have been my hope and my trust from my youth; upon you I have leaned from before my birth. Now in every season of weakness, do not cast me off; forsake me not when my strength is spent. When the enemy whispers that you have abandoned me, teach me to answer with a steadfast &lsquo;but I will hope continually and will praise you yet more and more.&rsquo;</p>" +
                    "<p>Keep me, O God, even to old age and gray hairs, until I have proclaimed your might to another generation and your power to all those to come. And when at last I walk through the valley, revive me again and bring me up from the depths of the earth, that with the redeemed I may sing your righteous help all the day long. Through Jesus Christ, the resurrection and the life. Amen.</p>",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
