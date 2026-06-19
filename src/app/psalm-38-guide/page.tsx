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

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 38 - O LORD, Rebuke Me Not in Your Anger" },
  { videoId: "OjJ7GkWCHvA", title: "The Weight of Sin and the Anguish of Body and Soul" },
  { videoId: "pHBzJ2dVXgk", title: "The Silence of the Sufferer Explained" },
  { videoId: "3sO5FH2ybPY", title: "But for You, O LORD, Do I Wait - Hope in the Penitential Psalms" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-discipline",
    title: "The Cry for Mercy Under Divine Discipline",
    reference: "Psalm 38:1-3",
    body:
      "<p>Psalm 38 opens with a plea that has echoed in the mouths of the afflicted ever since: &ldquo;O LORD, rebuke me not in your anger, nor discipline me in your wrath&rdquo; (38:1). David does not deny that he deserves discipline; he asks only that it not be poured out in the heat of wrath. He has felt the hand of God upon him &mdash; &ldquo;your arrows have sunk into me, and your hand has come down on me&rdquo; (38:2) &mdash; and he pleads for tempered correction rather than consuming judgment.</p>" +
      "<p>This is the prayer of one who understands his suffering as the chastening of a Father, not the rejection of a judge. He accepts the rebuke while begging that it be measured by mercy. &ldquo;For the LORD disciplines the one he loves, and chastises every son whom he receives&rdquo; (Hebrews 12:6).</p>" +
      "<p>To pray as David prays is to bow under God&rsquo;s correcting hand without resentment, yet to appeal continually to his mercy. We do not ask to escape all discipline &mdash; that would be to ask not to be loved &mdash; but we ask that wrath be turned aside and that the correction come from a Father&rsquo;s heart.</p>",
  },
  {
    id: "t-weight",
    title: "The Weight of Sin and the Suffering of the Body",
    reference: "Psalm 38:3-8",
    body:
      "<p>Few passages in Scripture describe the felt weight of guilt so vividly. David speaks of his sin as a physical sickness and a crushing load: &ldquo;there is no soundness in my flesh because of your indignation; there is no health in my bones because of my sin. For my iniquities have gone over my head; like a heavy burden, they are too heavy for me&rdquo; (38:3-4).</p>" +
      "<p>The imagery is relentless &mdash; festering wounds, a body bowed down, sides filled with burning, strength utterly spent (38:5-8). Whether David&rsquo;s illness was the direct cause or merely the companion of his guilt, the psalm refuses to separate the suffering of the body from the burden of the soul. Sin is not a light thing; it presses down upon the whole person.</p>" +
      "<p>This honest reckoning with the weight of iniquity makes the gospel&rsquo;s relief all the sweeter. The burden too heavy for David was lifted at the cross, where Christ &ldquo;himself bore our sins in his body on the tree&rdquo; (1 Peter 2:24), and where he says to the heavy-laden, &ldquo;Come to me&hellip; and I will give you rest&rdquo; (Matthew 11:28).</p>",
  },
  {
    id: "t-abandonment",
    title: "Abandoned by Friends, Beset by Enemies",
    reference: "Psalm 38:11-12",
    body:
      "<p>To the inward agony of guilt and the outward agony of sickness is added a third sorrow: the loneliness of abandonment. &ldquo;My friends and companions stand aloof from my plague, and my nearest kin stand far off&rdquo; (38:11). Those who should have drawn near in his suffering keep their distance, and David is left alone in his pain.</p>" +
      "<p>Meanwhile his enemies do not keep their distance. &ldquo;Those who seek my life lay their snares; those who seek my hurt speak of ruin and meditate treachery all day long&rdquo; (38:12). The sufferer is forsaken by the loving and surrounded by the hostile &mdash; a double desolation that intensifies his grief.</p>" +
      "<p>Here the psalm reaches toward Christ, who in his passion was abandoned by his friends &mdash; &ldquo;they all left him and fled&rdquo; (Mark 14:50) &mdash; and ringed about by enemies seeking his life. The lonely sufferer of Psalm 38 foreshadows the One who would be deserted by men so that we might never be forsaken by God.</p>",
  },
  {
    id: "t-silence",
    title: "The Deliberate Silence of the Sufferer",
    reference: "Psalm 38:13-14",
    body:
      "<p>In the midst of slander and snares, David makes a remarkable choice: he will not answer. &ldquo;But I am like a deaf man; I do not hear, like a mute man who does not open his mouth. I have become like a man who does not hear, and in whose mouth are no rebukes&rdquo; (38:13-14). He refuses to defend himself, to trade accusation for accusation, to repay treachery in kind.</p>" +
      "<p>This silence is not weakness but trust. David hands his cause to God rather than fighting for himself. Knowing his own guilt before God, he will not stand on his rights before men; he commits his vindication to the LORD and waits.</p>" +
      "<p>The church has long read these verses as a foreshadowing of Christ, who before his accusers &ldquo;opened not his mouth&rdquo; (Isaiah 53:7), who &ldquo;gave them no answer, not even to a single charge&rdquo; (Matthew 26:63; 27:14), and who &ldquo;when he was reviled&hellip; did not revile in return&hellip; but continued entrusting himself to him who judges justly&rdquo; (1 Peter 2:23). The silent sufferer shows us the way of the cross.</p>",
  },
  {
    id: "t-confession",
    title: "The Confession of Sin and Sorrow",
    reference: "Psalm 38:18",
    body:
      "<p>At the heart of this penitential psalm lies a model confession, brief and unflinching: &ldquo;I confess my iniquity; I am sorry for my sin&rdquo; (38:18). There is no excuse, no shifting of blame, no minimizing. David names his sin as iniquity and owns it as his own, and his confession is joined to genuine sorrow.</p>" +
      "<p>This is the godly grief that the New Testament commends: &ldquo;godly grief produces a repentance that leads to salvation without regret&rdquo; (2 Corinthians 7:10). David does not merely regret the consequences of his sin; he is grieved by the sin itself, sorry before God for having offended him.</p>" +
      "<p>True repentance always has these two parts &mdash; honest confession and heartfelt sorrow. And it rests on the certainty of mercy: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins&rdquo; (1 John 1:9). The one who says with David, &ldquo;I am sorry for my sin,&rdquo; finds the door of grace already open.</p>",
  },
  {
    id: "t-wait",
    title: "Waiting on the LORD in Hope",
    reference: "Psalm 38:15-16",
    body:
      "<p>Amid the darkness, a single shaft of light: &ldquo;But for you, O LORD, do I wait; it is you, O LORD my God, who will answer&rdquo; (38:15). This is the turning point of the psalm, the place where anguish becomes hope. David&rsquo;s strength has failed and his friends have fled, but his eyes are fixed on God, who alone can answer.</p>" +
      "<p>His silence toward his enemies (38:13-14) and his waiting upon God (38:15) belong together. Because he expects God to answer, he need not answer for himself. The same trust that closes his mouth before men opens his heart toward God. He waits not in despair but in confident expectation.</p>" +
      "<p>This is the posture the whole Bible commends: &ldquo;Wait for the LORD; be strong, and let your heart take courage; wait for the LORD!&rdquo; (Psalm 27:14). To wait on God is not passive resignation but active hope, the settled confidence that the God who allows the discipline will surely bring the deliverance.</p>",
  },
  {
    id: "t-salvation",
    title: "Make Haste to Help Me, O Lord My Salvation",
    reference: "Psalm 38:21-22",
    body:
      "<p>The psalm ends as it began, with a cry &mdash; but now the cry rises toward rescue. &ldquo;Do not forsake me, O LORD! O my God, be not far from me! Make haste to help me, O Lord, my salvation!&rdquo; (38:21-22). After the long catalog of suffering, the final word is not despair but a desperate, trusting appeal to the God of salvation.</p>" +
      "<p>Notice the names David clings to: &ldquo;O LORD&hellip; O my God&hellip; O Lord, my salvation.&rdquo; In the depths of his anguish he holds fast to the covenant relationship. The God who disciplines is still &ldquo;my God,&rdquo; and the God who seems far off is still &ldquo;my salvation.&rdquo;</p>" +
      "<p>The plea &ldquo;do not forsake me&rdquo; reaches its answer in Christ, who was forsaken on the cross &mdash; &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matthew 27:46) &mdash; so that to all who trust him God might promise, &ldquo;I will never leave you nor forsake you&rdquo; (Hebrews 13:5). The Lord who is our salvation does not stand far off forever; he makes haste to help.</p>",
  },
];

interface VerseSection {
  id: string;
  reference: string;
  title: string;
  body: string;
}

const verseSections: VerseSection[] = [
  {
    id: "v-1",
    reference: "Psalm 38:1-4",
    title: "Your Arrows Have Sunk Into Me",
    body:
      "<p>&ldquo;O LORD, rebuke me not in your anger, nor discipline me in your wrath! For your arrows have sunk into me, and your hand has come down on me. There is no soundness in my flesh because of your indignation; there is no health in my bones because of my sin. For my iniquities have gone over my head; like a heavy burden, they are too heavy for me&rdquo; (38:1-4).</p>" +
      "<p>The psalm opens in the depths. David pleads not to escape all discipline but to be spared the fullness of wrath. He feels God&rsquo;s correcting hand as arrows lodged within him and a weight pressing down. The cause is named plainly: &ldquo;because of my sin.&rdquo;</p>" +
      "<p>The closing image of this section is unforgettable: &ldquo;my iniquities have gone over my head; like a heavy burden, they are too heavy for me&rdquo; (38:4). Guilt is pictured as a flood that closes over the head and a load too great to bear &mdash; the very burden Christ would one day lift from all who come to him.</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 38:5-8",
    title: "My Wounds Stink and Fester",
    body:
      "<p>&ldquo;My wounds stink and fester because of my foolishness, I am utterly bowed down and prostrate; all the day I go about mourning. For my sides are filled with burning, and there is no soundness in my flesh. I am feeble and crushed; I groan because of the tumult of my heart&rdquo; (38:5-8).</p>" +
      "<p>David traces his suffering to his own &ldquo;foolishness&rdquo; &mdash; the folly of sin that has left festering wounds. The language is graphic and physical: a body bowed and prostrate, sides filled with burning, strength utterly crushed. He goes about mourning all the day long.</p>" +
      "<p>Yet the deepest pain is not in the flesh but in the heart: &ldquo;I groan because of the tumult of my heart&rdquo; (38:8). The outward sickness mirrors an inward turmoil. This is the whole person in distress &mdash; body and soul together groaning under the weight of sin and its consequences.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 38:9-12",
    title: "My Friends Stand Aloof",
    body:
      "<p>&ldquo;O Lord, all my longing is before you; my sighing is not hidden from you. My heart throbs; my strength fails me, and the light of my eyes &mdash; it also has gone from me. My friends and companions stand aloof from my plague, and my nearest kin stand far off. Those who seek my life lay their snares; those who seek my hurt speak of ruin and meditate treachery all day long&rdquo; (38:9-12).</p>" +
      "<p>David turns first to God with the comfort that nothing is hidden: &ldquo;all my longing is before you; my sighing is not hidden from you&rdquo; (38:9). Even when strength fails and the light of his eyes is gone, God sees and knows the whole of his grief.</p>" +
      "<p>Then comes the double sorrow of abandonment: friends and kin stand far off, while enemies draw near to lay snares and plot treachery. The sufferer is forsaken by those who should love him and surrounded by those who seek his ruin &mdash; a desolation that points toward the lonely passion of Christ.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 38:13-16",
    title: "But for You, O LORD, Do I Wait",
    body:
      "<p>&ldquo;But I am like a deaf man; I do not hear, like a mute man who does not open his mouth. I have become like a man who does not hear, and in whose mouth are no rebukes. But for you, O LORD, do I wait; it is you, O LORD my God, who will answer. For I said, &lsquo;Only let them not rejoice over me, who boast against me when my foot slips!&rsquo;&rdquo; (38:13-16).</p>" +
      "<p>Here the psalm turns. Beset by slander, David chooses silence &mdash; he will not answer his accusers or repay treachery with rebukes. This deliberate silence is the silence of trust, and it has long been read as a foreshadowing of Christ, who &ldquo;opened not his mouth&rdquo; before his accusers (Isaiah 53:7; Matthew 26:63).</p>" +
      "<p>The reason for his silence is the ground of his hope: &ldquo;But for you, O LORD, do I wait; it is you, O LORD my God, who will answer&rdquo; (38:15). Because God will answer, David need not. The turning point of the whole psalm is this fixed, expectant gaze upon the God who saves.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 38:17-20",
    title: "I Confess My Iniquity",
    body:
      "<p>&ldquo;For I am ready to fall, and my pain is ever before me. I confess my iniquity; I am sorry for my sin. But my foes are vigorous, they are mighty, and many are those who hate me wrongfully. Those who render me evil for good accuse me because I follow after good&rdquo; (38:17-20).</p>" +
      "<p>At the center of this section stands the model confession: &ldquo;I confess my iniquity; I am sorry for my sin&rdquo; (38:18). There is no excuse and no evasion &mdash; honest confession joined to genuine sorrow. This is the godly grief that leads to life, the true repentance the whole psalm has been moving toward.</p>" +
      "<p>Yet David remains hard pressed. His foes are vigorous and many, and they repay his good with evil, accusing him because he &ldquo;follows after good&rdquo; (38:20). The confession of sin before God does not end the opposition of men; it only deepens the need to wait on God, who alone can answer.</p>",
  },
  {
    id: "v-6",
    reference: "Psalm 38:21-22",
    title: "Make Haste to Help Me",
    body:
      "<p>&ldquo;Do not forsake me, O LORD! O my God, be not far from me! Make haste to help me, O Lord, my salvation!&rdquo; (38:21-22).</p>" +
      "<p>The psalm closes with three urgent cries, each clinging to the covenant God. &ldquo;Do not forsake me&rdquo; &mdash; the fear of abandonment; &ldquo;be not far from me&rdquo; &mdash; the longing for nearness; &ldquo;make haste to help me&rdquo; &mdash; the plea for swift rescue. The names pile up in trust: O LORD, O my God, O Lord, my salvation.</p>" +
      "<p>After all the anguish of body and soul, the abandonment and the snares, the psalm ends not in despair but in a desperate, hope-filled appeal to the God of salvation. The one who waits on the LORD (38:15) now cries for him to make haste &mdash; and that cry is answered, finally and fully, in the Lord Jesus, who was forsaken that we might never be.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-honest",
    title: "Be Honest About the Weight of Sin",
    body:
      "<p>Psalm 38 refuses to make light of sin. David speaks of iniquities gone over his head, a burden &ldquo;too heavy for me,&rdquo; wounds that fester, a heart in tumult (38:4-8). In an age that prefers to excuse, minimize, or rename our failures, this psalm teaches us to feel the true weight of what we have done.</p>" +
      "<p>This honesty is not morbid; it is the doorway to grace. Only those who feel the burden seek the One who can lift it. Let the psalm school you to take sin seriously &mdash; not to wallow in despair, but to bring the real weight of it to the Christ who bore it in his body on the tree (1 Peter 2:24).</p>",
  },
  {
    id: "a-discipline",
    title: "Receive Discipline as from a Father",
    body:
      "<p>&ldquo;O LORD, rebuke me not in your anger&rdquo; (38:1). David asks not to escape correction but to be spared wrath, accepting discipline while pleading for mercy. When hardship comes &mdash; whether or not it is tied to a particular sin &mdash; we are tempted either to resent it or to despair under it.</p>" +
      "<p>The believer learns a third way: to receive correction as the loving discipline of a Father. &ldquo;The LORD disciplines the one he loves&rdquo; (Hebrews 12:6). Do not ask to be free of all chastening, for that would be to ask not to be a child. Ask instead that the correction be tempered with mercy, and let it drive you to God rather than away from him.</p>",
  },
  {
    id: "a-silence",
    title: "Learn the Silence of Trust",
    body:
      "<p>Surrounded by slander, David chose not to answer: &ldquo;I am like a deaf man, I do not hear&hellip; in whose mouth are no rebukes&rdquo; (38:13-14). This is one of the hardest disciplines of the Christian life &mdash; to refuse to defend ourselves, to entrust our reputation and our cause to God rather than fighting back.</p>" +
      "<p>This silence is not cowardice but faith. It follows the pattern of Christ, who &ldquo;when he was reviled&hellip; did not revile in return&hellip; but continued entrusting himself to him who judges justly&rdquo; (1 Peter 2:23). When you are wrongly accused, consider whether the path of trust is to commit your vindication to God and wait, rather than to win the argument yourself.</p>",
  },
  {
    id: "a-confess",
    title: "Confess Honestly and Grieve Truly",
    body:
      "<p>&ldquo;I confess my iniquity; I am sorry for my sin&rdquo; (38:18). David gives us a model of true repentance in a single verse: name the sin without excuse, and grieve over it before God. This is the &ldquo;godly grief&rdquo; that &ldquo;produces a repentance that leads to salvation&rdquo; (2 Corinthians 7:10), grieving the offense itself and not merely its consequences.</p>" +
      "<p>Make this your practice in confession. Do not soften your sin with euphemisms or shift the blame; own it as iniquity and be genuinely sorry before God. And do so in confidence, for &ldquo;if we confess our sins, he is faithful and just to forgive&rdquo; (1 John 1:9). Honest confession meets a faithful Savior.</p>",
  },
  {
    id: "a-wait",
    title: "Wait on the LORD, Your Salvation",
    body:
      "<p>The hinge of the whole psalm is hope: &ldquo;But for you, O LORD, do I wait; it is you, O LORD my God, who will answer&rdquo; (38:15). When body fails, friends flee, and enemies press in, the believer fixes his eyes on God and waits. This waiting is not passive despair but active, expectant trust.</p>" +
      "<p>When you are at the end of your strength, take up David&rsquo;s final cry: &ldquo;Make haste to help me, O Lord, my salvation!&rdquo; (38:22). Cling to the covenant names &mdash; my God, my salvation &mdash; even when God seems far off. The Lord who was forsaken on the cross so that you might never be forsaken will surely make haste to help all who wait for him.</p>",
  },
];

const reflectionQuestions = [
  "David feels his sin as a burden &ldquo;too heavy for me&rdquo; (38:4). How honest are you about the real weight of your sin? What keeps you from feeling it &mdash; and from bringing it to Christ who bore it?",
  "Psalm 38 intertwines physical suffering, the weight of guilt, and social abandonment. Have you known a season where these pressed together? How did you seek God in it?",
  "When wrongly accused, David chose silence and entrusted his cause to God (38:13-14). Where are you tempted to defend yourself rather than wait on God for vindication?",
  "David&rsquo;s confession is plain: &ldquo;I confess my iniquity; I am sorry for my sin&rdquo; (38:18). Does your confession have both parts &mdash; honest naming and genuine sorrow? Or do you tend to excuse and minimize?",
  "The turning point of the psalm is &ldquo;But for you, O LORD, do I wait&rdquo; (38:15). What does it look like, practically, for you to wait on God rather than on your own strength or solutions?",
  "How does the silence of David before his accusers &mdash; foreshadowing Christ who &ldquo;opened not his mouth&rdquo; (Isaiah 53:7) &mdash; reshape the way you respond to those who wrong you?",
];

const closingPrayer =
  "<p>O LORD, rebuke me not in your anger, nor discipline me in your wrath. My iniquities have gone over my head, and they are a burden too heavy for me to bear. Yet I do not hide them from you; I confess my iniquity, and I am sorry for my sin. Be merciful to me, and let your correction come from a Father&rsquo;s heart.</p>" +
  "<p>When friends stand aloof and enemies draw near, and when my strength fails and the light of my eyes is gone, teach me the silence of trust. Let me not answer for myself but entrust my cause to you, after the pattern of your Son, who when he was reviled did not revile in return but committed himself to the one who judges justly.</p>" +
  "<p>For you, O LORD, do I wait; it is you, O LORD my God, who will answer. Do not forsake me; be not far from me; make haste to help me, O Lord, my salvation. You were forsaken on the cross that I might never be forsaken &mdash; so I rest my whole hope in you, through Jesus Christ my Lord. Amen.</p>";

export default function Psalm38Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
            Psalm 38
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            The Anguish of Body and Soul Under the Weight of Sin
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 38:15
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;But for you, O LORD, do I wait; it is you, O LORD my God, who will answer.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", borderBottom: "1px solid " + BORDER, paddingBottom: 12 }}>
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: "1px solid " + (active ? PURPLE : BORDER),
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>Overview</h2>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 38 is the third of the seven Penitential Psalms, and one of the most searching laments in all of Scripture. It is the cry of a man whose whole being &mdash; body and soul together &mdash; groans under the weight of sin and the discipline of God. &ldquo;There is no soundness in my flesh because of your indignation&hellip; for my iniquities have gone over my head; like a heavy burden, they are too heavy for me&rdquo; (38:3-4).</p>" +
                  "<p>Yet the psalm is not unrelieved darkness. At its turning point David lifts his eyes in hope: &ldquo;But for you, O LORD, do I wait; it is you, O LORD my God, who will answer&rdquo; (38:15). Around this hinge gather the great movements of the psalm &mdash; the cry for tempered mercy, the vivid suffering of body and conscience, the abandonment by friends, the deliberate silence before enemies, the honest confession of sin, and the closing plea, &ldquo;Make haste to help me, O Lord, my salvation!&rdquo; (38:22).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEAL }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The psalm moves through the layers of suffering toward hope and a final cry for help:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>38:1-4</strong> &mdash; The plea for tempered mercy; arrows of discipline and the weight of iniquity.</li>" +
                    "<li><strong>38:5-8</strong> &mdash; The festering suffering of the body and the tumult of the heart.</li>" +
                    "<li><strong>38:9-12</strong> &mdash; Longing laid bare before God; friends aloof, enemies laying snares.</li>" +
                    "<li><strong>38:13-16</strong> &mdash; The deliberate silence of the sufferer and the turn to waiting on God.</li>" +
                    "<li><strong>38:17-20</strong> &mdash; Honest confession and sorrow amid vigorous foes.</li>" +
                    "<li><strong>38:21-22</strong> &mdash; The closing cry: do not forsake me; make haste to help me, O Lord, my salvation.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 38 is the third of the seven Penitential Psalms &mdash; the church has long grouped Psalms 6, 32, 38, 51, 102, 130, and 143 as prayers of penitence. Among them this psalm is unique in the way it intertwines four strands of anguish: physical suffering, the felt weight of sin, social abandonment, and patient waiting on God. The deliberate silence of the sufferer (38:13-14), who will not answer his accusers, has long been read as a foreshadowing of Christ, who before his accusers &ldquo;opened not his mouth&rdquo; (Isaiah 53:7; Matthew 26:63; 1 Peter 2:23). And the honest confession at its heart &mdash; &ldquo;I confess my iniquity; I am sorry for my sin&rdquo; (38:18) &mdash; models the true repentance that names sin without excuse and grieves it before God.</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Key Themes</h2>
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT }}>{item.title}</span>
                      <span style={{ display: "block", fontSize: 13, color: PURPLE, marginTop: 4, fontWeight: 600 }}>{item.reference}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Verse by Verse</h2>
            {verseSections.map((sec) => {
              const isOpen = open === sec.id;
              return (
                <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(sec.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: 13, color: TEAL, fontWeight: 700, letterSpacing: 0.5 }}>{sec.reference}</span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT, marginTop: 4 }}>{sec.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Application</h2>
            {appSections.map((sec) => (
              <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.4rem 1.6rem", marginBottom: 14 }}>
                <h3 style={{ fontSize: "1.18rem", fontWeight: 700, margin: "0 0 0.6rem", color: GREEN }}>{sec.title}</h3>
                <div
                  style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8" }}
                  dangerouslySetInnerHTML={{ __html: sec.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + ROSE, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.75rem 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 1rem", color: ROSE }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "1.02rem", lineHeight: 1.65, color: "#D9D9E8" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem", fontSize: "0.95rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + PURPLE, borderRadius: 10, padding: "1.75rem 1.9rem", marginTop: "2.25rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: PURPLE }}>A Closing Prayer</h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#E4E4F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
