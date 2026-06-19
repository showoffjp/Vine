"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm6Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 6 &mdash; A Prayer in the Hour of Distress" },
    { videoId: "Q2oNOlXzBhY", title: "The Penitential Psalms and the Heart of Repentance" },
    { videoId: "8phkAg8PMHE", title: "How Long, O LORD? The Theology of Lament" },
    { videoId: "fNk_zzaMoSs", title: "The LORD Has Heard My Weeping: From Despair to Assurance" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const overviewBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "A Cry Wrung from the Depths",
      color: PURPLE,
      html:
        "<p>Psalm 6 is the prayer of a believer at the end of his strength. It opens not with praise but with a plea: &ldquo;O LORD, rebuke me not in your anger, nor discipline me in your wrath&rdquo; (6:1). David does not pretend that all is well. His bones are troubled, his soul is greatly troubled, his bed is soaked with tears, and night after night he cries out into a silence that seems unbroken. Here is one of the most honest prayers in all of Scripture &mdash; a man who feels the weight of God&rsquo;s displeasure and the frailty of his own body and spirit, and who pours it all out before the only One who can help.</p>" +
        "<p>And yet this psalm does not end where it begins. By its final verses the tone has changed entirely. The trembling petitioner becomes a confident witness: &ldquo;The LORD has heard the sound of my weeping. The LORD has heard my plea; the LORD accepts my prayer&rdquo; (6:8&ndash;9). Nothing in his outward circumstances has visibly changed, yet everything in his heart has. This sudden turn from desperation to assurance is the very heartbeat of the psalm, and the gift it offers to everyone who has ever prayed in the dark.</p>",
    },
    {
      heading: "The Shape of the Psalm",
      color: TEAL,
      html:
        "<p>Psalm 6 moves in three clear movements. <strong>First (6:1&ndash;3), the plea for mercy:</strong> David begs God not to deal with him in anger but in grace, for he is languishing, his bones are troubled, and his soul cries &ldquo;How long, O LORD?&rdquo; <strong>Second (6:4&ndash;7), the appeal and the weeping:</strong> he asks the LORD to turn and deliver his life for the sake of God&rsquo;s steadfast love, reasoning that the dead cannot praise Him, and then describes his exhaustion &mdash; flooding his bed with tears and drenching his couch with weeping. <strong>Third (6:8&ndash;10), the turn of confidence:</strong> he suddenly dismisses the workers of evil, declares that the LORD has heard his weeping and accepted his prayer, and announces that his enemies will be put to shame.</p>" +
        "<p>This threefold pattern &mdash; lament, petition, and assurance &mdash; is the classic structure of the biblical psalm of lament. The genius of Psalm 6 is how compactly it travels the whole distance, from the floor of despair to the heights of confident faith, in just ten verses.</p>",
    },
    {
      heading: "The First of the Penitential Psalms",
      color: GOLD,
      html:
        "<p>From the earliest centuries the Christian church has gathered seven psalms together under the title of the <em>Penitential Psalms</em>: Psalms 6, 32, 38, 51, 102, 130, and 143. These have been prayed across the generations as the great prayers of confession and repentance, especially during the season of Lent and in times of personal sorrow over sin. Psalm 6 stands at the head of this collection &mdash; the first of the seven, the doorway into the church&rsquo;s long tradition of penitential prayer.</p>" +
        "<p>It is worth noticing that Psalm 6 never explicitly names a particular sin. Its penitence is the penitence of a soul that feels itself under the chastening hand of God and longs to be restored to His favor. This is why it has spoken so powerfully to believers in every age: it gives words to the experience of feeling God&rsquo;s discipline, of grief and weariness and the fear of being cast off, and it teaches the soul to bring that whole burden to God rather than to flee from Him.</p>",
    },
    {
      heading: "The Setting and the Superscription",
      color: GREEN,
      html:
        "<p>The heading of the psalm reads &ldquo;To the choirmaster: with stringed instruments; according to The Sheminith. A Psalm of David.&rdquo; The word <em>Sheminith</em> means &ldquo;the eighth&rdquo; and probably refers to a musical setting, perhaps a lower octave fitting the somber mood. This little detail reminds us that even this most private and anguished prayer was given to the worshiping community to be sung. Israel did not hide its grief from God or from one another; it set its tears to music and brought them into the house of prayer.</p>" +
        "<p>We do not know the precise occasion of David&rsquo;s distress. He speaks of bodily suffering, of overwhelming sorrow, and of enemies who surround him. Whether the trouble began as illness, as the consequence of his own failings, or as persecution, the psalm refuses to be tied down to a single circumstance &mdash; and that is part of its enduring usefulness. Whatever has brought us low, Psalm 6 hands us language for it, and points us toward the God who hears.</p>",
    },
  ];

  const themeItems: { id: string; title: string; color: string; html: string }[] = [
    {
      id: "t-mercy",
      title: "The Cry for Mercy Under Discipline",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD, rebuke me not in your anger, nor discipline me in your wrath. Be gracious to me, O LORD, for I am languishing&rdquo; (6:1&ndash;2). David does not ask to escape correction altogether; he asks not to be corrected in <em>anger</em>. He knows that the LORD disciplines those He loves, and he does not deny that he deserves it. What he pleads for is that the discipline come tempered with grace, as from a Father and not from a Judge bent on destruction.</p>" +
        "<p>This is the cry of a soul that takes God&rsquo;s holiness seriously and yet dares to hope in His mercy. Scripture later makes explicit what David senses here: &ldquo;The Lord disciplines the one he loves&rdquo; (Hebrews 12:6), and that discipline is meant to yield &ldquo;the peaceful fruit of righteousness&rdquo; (Hebrews 12:11). The believer can endure correction because he knows the hand that wields it is a loving hand. Proverbs counsels the same trust: &ldquo;Do not despise the LORD&rsquo;s discipline&rdquo; (Proverbs 3:11&ndash;12). Psalm 6 teaches us to receive the rod from a Father&rsquo;s hand and to plead His grace even as we feel its weight. <em>Cross references: Hebrews 12:5&ndash;11; Proverbs 3:11&ndash;12; Psalm 38:1; Jeremiah 10:24.</em></p>",
    },
    {
      id: "t-anguish",
      title: "The Anguish of Body and Soul",
      color: ROSE,
      html:
        "<p>&ldquo;Heal me, O LORD, for my bones are troubled. My soul also is greatly troubled&rdquo; (6:2&ndash;3). David&rsquo;s suffering is total. It reaches into his bones &mdash; the deepest frame of his body &mdash; and into his soul, the very seat of his being. There is no neat line here between physical and spiritual distress; the whole person is shaken. This honesty matters, for it tells us that the life of faith is not lived by disembodied spirits but by frail and weeping human beings.</p>" +
        "<p>Scripture knows this wholeness of suffering well. &ldquo;My soul is very sorrowful, even to death,&rdquo; Jesus said in Gethsemane (Matthew 26:38), and His agony there was so intense that His sweat became like great drops of blood. Psalm 6 dignifies our distress by bringing it, body and soul together, before the throne of grace. It refuses the false piety that says a believer must always feel strong. Instead it teaches us to say plainly, &ldquo;I am languishing,&rdquo; and to say it to God. <em>Cross references: Psalm 31:9&ndash;10; Psalm 38:3; Matthew 26:36&ndash;39; Psalm 42:5&ndash;6.</em></p>",
    },
    {
      id: "t-howlong",
      title: "How Long, O LORD?",
      color: GOLD,
      html:
        "<p>&ldquo;But you, O LORD &mdash; how long?&rdquo; (6:3). The sentence breaks off, unfinished, as if grief itself has run out of words. This is the cry of the suffering believer in every age: not a denial of God, but a question hurled toward Him &mdash; how long must this last? The very fact that David addresses the question to the LORD shows that his faith has not collapsed. He is still talking to God; he simply cannot understand the delay.</p>" +
        "<p>The Bible never silences this question. The psalms return to it again and again (&ldquo;How long, O LORD? Will you forget me forever?&rdquo; Psalm 13:1), and the book of Revelation places it on the lips of the martyrs under the altar: &ldquo;O Sovereign Lord&hellip; how long before you will judge?&rdquo; (Revelation 6:10). Faith is permitted to ask how long. What it must not do is stop asking <em>God</em>. Psalm 6 shows us that the question itself can be a form of prayer, a holding fast to the One who alone can end the waiting. <em>Cross references: Psalm 13:1&ndash;2; Psalm 90:13; Habakkuk 1:2; Revelation 6:9&ndash;10.</em></p>",
    },
    {
      id: "t-tears",
      title: "The Bed Drenched with Tears",
      color: TEAL,
      html:
        "<p>&ldquo;I am weary with my moaning; every night I flood my bed with tears; I drench my couch with my weeping&rdquo; (6:6). This is one of the most vivid descriptions of grief in all of Scripture. David does not minimize his sorrow or apologize for it. He has wept until his bed is soaked and his eyes have wasted away (6:7). The place meant for rest has become the place of his deepest agony, for sleepless nights belong to those who weep.</p>" +
        "<p>Far from being a sign of weak faith, such tears are precious to God. &ldquo;You have kept count of my tossings; put my tears in your bottle. Are they not in your book?&rdquo; (Psalm 56:8). The LORD does not despise a broken and contrite heart (Psalm 51:17). And the gospel holds out the promise that one day &ldquo;he will wipe away every tear from their eyes, and death shall be no more&rdquo; (Revelation 21:4). Psalm 6 reminds us that there is a time to weep, and that our weeping, brought to God, is never wasted. <em>Cross references: Psalm 56:8; Psalm 42:3; Lamentations 1:16; Revelation 21:4.</em></p>",
    },
    {
      id: "t-turn",
      title: "The Turn of Confidence",
      color: GREEN,
      html:
        "<p>Then comes the great reversal. &ldquo;Depart from me, all you workers of evil, for the LORD has heard the sound of my weeping. The LORD has heard my plea; the LORD accepts my prayer&rdquo; (6:8&ndash;9). Three times in two verses David declares that the LORD <em>has heard</em>. Notice the past tense. Nothing in his situation has visibly changed &mdash; the enemies are still present, the night may still be long &mdash; yet faith now speaks of the answer as already given.</p>" +
        "<p>This is the assurance of being heard before the circumstances change, the deepest mark of the psalms of lament. It is the same confidence the apostle John describes: &ldquo;If we ask anything according to his will he hears us. And if we know that he hears us in whatever we ask, we know that we have the requests that we have asked of him&rdquo; (1 John 5:14&ndash;15). The turn in Psalm 6 is not the result of changed conditions but of renewed trust. Faith hears the answer in the dark and begins to rejoice before the morning comes. <em>Cross references: 1 John 5:14&ndash;15; Psalm 28:6; Psalm 116:1&ndash;2; Philippians 4:6&ndash;7.</em></p>",
    },
    {
      id: "t-lament",
      title: "The Theology of Lament",
      color: PURPLE,
      html:
        "<p>Psalm 6 is a model of biblical lament, and lament is one of the great gifts the psalms give to the church. Lament is not the opposite of faith; it is faith refusing to let go of God in the midst of pain. It brings the whole truth of our suffering &mdash; the confusion, the tears, the unanswered &ldquo;how long?&rdquo; &mdash; directly into the presence of the God who promises to hear. A faith that can only praise and never lament is a faith that has not yet learned to bring its whole self before God.</p>" +
        "<p>The movement of Psalm 6 from desperation to assurance is the pattern of nearly every lament psalm, and it traces the path our own prayers may take. We are invited to begin where we are, in the dark, and to keep speaking to God until faith catches sight of His faithfulness again. The Lord Jesus Himself prayed the psalms of lament, even crying out from the cross, &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matthew 27:46, quoting Psalm 22:1). In Him every honest lament is taken up and answered. <em>Cross references: Psalm 13; Psalm 22:1&ndash;5; Psalm 130; Matthew 27:46.</em></p>",
    },
  ];

  const verseItems: { id: string; ref: string; color: string; html: string }[] = [
    {
      id: "v1",
      ref: "Psalm 6:1&ndash;3 &mdash; The Plea for Mercy",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD, rebuke me not in your anger, nor discipline me in your wrath. Be gracious to me, O LORD, for I am languishing; heal me, O LORD, for my bones are troubled. My soul also is greatly troubled. But you, O LORD &mdash; how long?&rdquo;</p>" +
        "<p>The psalm opens with raw urgency. David does not ask to avoid all discipline; he begs that it not come in <em>anger</em> or <em>wrath</em>. He throws himself upon grace alone: &ldquo;Be gracious to me&hellip; for I am languishing.&rdquo; The word pictures a man withering, drained of vitality like a plant in drought. His trouble is total &mdash; bones and soul alike are shaken &mdash; and the section ends with a sentence too heavy to finish: &ldquo;But you, O LORD &mdash; how long?&rdquo;</p>" +
        "<p>Here David models the first step of every honest prayer: to come empty-handed, pleading mercy rather than merit. He does not argue that he deserves relief; he appeals to the gracious character of God. This is the posture the publican took in Jesus&rsquo; parable &mdash; &ldquo;God, be merciful to me, a sinner!&rdquo; (Luke 18:13) &mdash; and it is the only posture in which any of us truly find God.</p>",
    },
    {
      id: "v2",
      ref: "Psalm 6:4&ndash;5 &mdash; Turn, O LORD, Deliver My Life",
      color: TEAL,
      html:
        "<p>&ldquo;Turn, O LORD, deliver my life; save me for the sake of your steadfast love. For in death there is no remembrance of you; in Sheol who will give you praise?&rdquo;</p>" +
        "<p>David asks the LORD to &ldquo;turn&rdquo; &mdash; to turn back toward him in favor &mdash; and to deliver him, but notice the ground of his appeal: &ldquo;for the sake of your steadfast love.&rdquo; The Hebrew word here is <em>hesed</em>, God&rsquo;s covenant loyalty, His committed, unbreakable love. David rests his whole case not on his own worthiness but on God&rsquo;s faithful character. This is the surest foundation a praying soul can stand upon.</p>" +
        "<p>His second argument is striking: in death there is no remembrance, in the grave no praise. David longs to keep praising God among the living, and he reasons that his death would mean one less voice lifted in worship. We who live on this side of the resurrection know that the grave is not the end of praise (Christ has conquered death itself), yet David&rsquo;s logic still teaches us something precious: that a life spent praising God is a life worth pleading for, and that our deepest desire in any deliverance should be to go on glorifying Him. <em>Compare Psalm 30:9; Psalm 88:10&ndash;12; Isaiah 38:18&ndash;19.</em></p>",
    },
    {
      id: "v3",
      ref: "Psalm 6:6&ndash;7 &mdash; The Weeping",
      color: ROSE,
      html:
        "<p>&ldquo;I am weary with my moaning; every night I flood my bed with tears; I drench my couch with my weeping. My eye wastes away because of grief; it grows weak because of all my foes.&rdquo;</p>" +
        "<p>Now the psalm reaches its lowest point. David is exhausted by his own sorrow &mdash; &ldquo;weary with my moaning.&rdquo; The imagery is overwhelming: a bed flooded with tears, a couch drenched with weeping, eyes wasted and dim with grief. This is grief that has gone on long enough to wear the body down. Sleepless and surrounded by enemies, he has wept through the watches of the night.</p>" +
        "<p>It is vital to see that this verse comes <em>before</em> the turn of confidence, not after. The path from despair to assurance does not bypass the tears; it passes straight through them. God does not ask us to dry our eyes before we may approach Him. He receives us in the very midst of our weeping, and it is from that drenched and weary place that the cry of faith finally rises. <em>Compare Psalm 39:12; Psalm 42:3; Job 16:16.</em></p>",
    },
    {
      id: "v4",
      ref: "Psalm 6:8&ndash;10 &mdash; The Turn to Assurance",
      color: GREEN,
      html:
        "<p>&ldquo;Depart from me, all you workers of evil, for the LORD has heard the sound of my weeping. The LORD has heard my plea; the LORD accepts my prayer. All my enemies shall be ashamed and greatly troubled; they shall turn back and be put to shame in a moment.&rdquo;</p>" +
        "<p>Without warning the whole atmosphere of the psalm changes. The weeping man becomes a bold witness. He dismisses the &ldquo;workers of evil&rdquo; with command rather than complaint, because he has become certain of God&rsquo;s hearing. Three ringing affirmations follow: the LORD <em>has heard</em> his weeping, <em>has heard</em> his plea, <em>accepts</em> his prayer. Nothing visible has changed, yet faith now speaks as though the battle is already won.</p>" +
        "<p>This is the great gift of the lament psalms &mdash; the assurance of being heard before the circumstances change. The closing line declares that the enemies who once seemed to triumph &ldquo;shall be ashamed&hellip; in a moment.&rdquo; The whole psalm has crossed from the floor of despair to the heights of confident hope. Strikingly, the Lord Jesus takes up this same language of &ldquo;depart from me, workers of evil&rdquo; in His warning, &ldquo;I never knew you; depart from me, you workers of lawlessness&rdquo; (Matthew 7:23), pointing forward to the final day when every wrong will be set right and every faithful prayer fully answered. <em>Compare Matthew 7:23; Psalm 3:7&ndash;8; Psalm 28:6&ndash;7.</em></p>",
    },
  ];

  const appBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "Bring Your Whole Self to God",
      color: PURPLE,
      html:
        "<p>Psalm 6 gives us permission to pray honestly. David does not arrive before God composed and cheerful; he comes languishing, weeping, sleepless, and afraid. And God receives him exactly as he is. We so often delay prayer until we feel we can present a tidied-up version of ourselves. This psalm tears down that pretense. The throne of grace is not a place we earn our way into by feeling better first; it is the very place we go <em>in order</em> to find help in our weakness.</p>" +
        "<p>So bring your bones and your soul, your tears and your unanswered questions. Hide nothing. The God who counts every tear and keeps them in His bottle (Psalm 56:8) is not waiting for you to be strong. He is waiting for you to come.</p>",
    },
    {
      heading: "Let Lament Be Part of Your Faith",
      color: TEAL,
      html:
        "<p>Many believers feel that sorrow and faith cannot live together &mdash; that to grieve, to question, to cry &ldquo;how long?&rdquo; is a failure of trust. Psalm 6 dismantles that fear. Lament <em>is</em> faith; it is faith that keeps speaking to God in the dark. The path of this psalm runs straight from desperation through tears to assurance, and it never once leaves the presence of God. Learn to pray your laments rather than to bury them.</p>" +
        "<p>When you cannot see the way forward, do what David did: keep talking to the LORD. Tell Him how long it has been. Plead His steadfast love. Faith is not the absence of darkness; it is the refusal to face the darkness anywhere but in the company of God.</p>",
    },
    {
      heading: "Trust the Hand That Disciplines",
      color: GOLD,
      html:
        "<p>David&rsquo;s opening plea assumes that the discipline of God is real but never cruel. &ldquo;The Lord disciplines the one he loves&rdquo; (Hebrews 12:6), and its purpose is always our restoration, never our ruin. When the seasons of correction come &mdash; when we feel the weight of consequences or the silence of God &mdash; we are invited not to run from His hand but to plead His grace beneath it: &ldquo;rebuke me not in your anger&hellip; be gracious to me.&rdquo;</p>" +
        "<p>This requires a settled confidence in the goodness of God. He is not a Judge looking for a reason to condemn His children; He is a Father shaping them for &ldquo;the peaceful fruit of righteousness&rdquo; (Hebrews 12:11). Receive His correction as the proof of His love, and let it drive you toward Him rather than away.</p>",
    },
    {
      heading: "Believe You Are Heard",
      color: GREEN,
      html:
        "<p>The most life-changing lesson of Psalm 6 is its ending: &ldquo;The LORD has heard my plea; the LORD accepts my prayer.&rdquo; David rejoices in being heard <em>before</em> anything in his circumstances has changed. This is the assurance the gospel makes ours through Christ. &ldquo;If we ask anything according to his will he hears us&rdquo; (1 John 5:14). Your prayers do not vanish into an empty sky; they rise to a Father who listens.</p>" +
        "<p>Learn to end your laments where David ended his &mdash; in the confidence that you have been heard. You may still be in the night. The tears may not yet be dry. But faith can begin to give thanks for the answer before it sees it, because it rests on the unfailing faithfulness of the God who has promised to hear His children.</p>",
    },
  ];

  const questions: string[] = [
    "Where in your own life have you felt God&rsquo;s discipline, and how does David&rsquo;s plea &mdash; &ldquo;rebuke me not in your anger&hellip; be gracious to me&rdquo; &mdash; reshape the way you respond to it?",
    "David brings both his bones and his soul, his body and his spirit, before God. What sorrows or burdens have you been keeping back from God because you feel you should be stronger?",
    "The unfinished cry &ldquo;But you, O LORD &mdash; how long?&rdquo; is left hanging in the psalm. What situation in your life right now prompts that same question, and what would it look like to keep addressing it to God rather than away from Him?",
    "Psalm 6 treats weeping not as weakness but as honest prayer. How might it change your view of your own tears to know that God keeps count of them and stores them in His bottle (Psalm 56:8)?",
    "The psalm turns from despair to assurance before any circumstances change. Can you recall a time when you became confident God had heard you before you saw the answer? What strengthened that confidence?",
    "Psalm 6 is the first of the seven Penitential Psalms used for confession and repentance. How might praying this psalm slowly, perhaps during Lent, deepen your repentance and your assurance of God&rsquo;s mercy?",
  ];

  const prayerHtml =
    "<p>O LORD, I come to you as David came &mdash; languishing, weary, and in need of mercy. Rebuke me not in your anger, but be gracious to me for the sake of your steadfast love. You see the trouble of my bones and the trouble of my soul; you have heard the sound of my weeping in the night. I bring you my unfinished prayers and my unanswered questions, and I lay them at your feet.</p>" +
    "<p>Teach me to trust your disciplining hand as the hand of a loving Father, and to plead your grace beneath it. When sorrow keeps me awake, let me pour out my heart to you rather than away from you. And grant me, even now, the deep assurance that you have heard my plea and accepted my prayer.</p>" +
    "<p>Thank you that in Christ every honest lament is taken up and answered, that the One who cried &ldquo;why have you forsaken me?&rdquo; was heard and raised in glory. Lift me, as you lifted him, from the night of weeping to the morning of joy. I rest in your faithfulness, confident that you hear your children. In the name of Jesus, who turns our mourning into dancing, Amen.</p>";

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.6rem 1.1rem",
    borderRadius: 999,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? PURPLE : "transparent",
    color: active ? "#FFFFFF" : MUTED,
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    transition: "all 0.15s ease",
  });

  const accordion = (
    items: { id: string; title?: string; ref?: string; color: string; html: string }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((it) => {
        const isOpen = open === it.id;
        const label = it.title ?? it.ref ?? "";
        return (
          <div
            key={it.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? it.color : BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(it.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 1.3rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: it.color,
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${it.color}`,
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{ __html: label }}
                  style={{ color: TEXT, fontSize: "1.08rem", fontWeight: 600 }}
                />
              </span>
              <span
                style={{
                  color: it.color,
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                dangerouslySetInnerHTML={{ __html: it.html }}
                style={{
                  padding: "0 1.3rem 1.3rem",
                  color: MUTED,
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

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
      <style>{`
        .vine-prose p { margin: 0 0 1rem; }
        .vine-prose p:last-child { margin-bottom: 0; }
        .vine-prose strong { color: ${TEXT}; }
        .vine-prose em { color: ${MUTED}; }
      `}</style>

      {/* Hero */}
      <section
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: PURPLE,
            fontWeight: 700,
            marginBottom: "0.9rem",
          }}
        >
          The Vine &middot; Bible Study
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0 0 0.6rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Psalm 6
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.15rem",
            margin: "0 auto 1.6rem",
            maxWidth: 620,
            lineHeight: 1.6,
          }}
        >
          The first of the seven Penitential Psalms &mdash; a soul greatly
          troubled, a bed drenched with tears, and the confident turn that the
          LORD has heard the sound of weeping.
        </p>
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 14,
            padding: "1.3rem 1.5rem",
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Key Verse &middot; Psalm 6:9
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;The LORD has heard my plea; the LORD accepts my prayer.&rdquo;",
            }}
            style={{
              margin: 0,
              fontSize: "1.3rem",
              lineHeight: 1.55,
              fontStyle: "italic",
              color: TEXT,
            }}
          />
        </div>
      </section>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: "rgba(7,7,15,0.85)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "0.85rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              style={tabBtnStyle(tab === t)}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </nav>

      {/* Panels */}
      <main
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {overviewBlocks.map((b, i) => (
              <article
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${b.color}`,
                  borderRadius: 16,
                  padding: "1.6rem 1.7rem",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 1rem",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: b.color,
                  }}
                >
                  {b.heading}
                </h2>
                <div
                  className="vine-prose"
                  dangerouslySetInnerHTML={{ __html: b.html }}
                  style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                />
              </article>
            ))}
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Six threads run through this short but mighty psalm. Tap each to
              explore the theme and its connections across Scripture.
            </p>
            {accordion(themeItems)}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Walk through Psalm 6 in its four movements, from the plea for mercy
              to the confident turn of assurance.
            </p>
            {accordion(verseItems)}
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {appBlocks.map((b, i) => (
                <article
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${b.color}`,
                    borderRadius: 14,
                    padding: "1.5rem 1.6rem",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 0.9rem",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: b.color,
                    }}
                  >
                    {b.heading}
                  </h2>
                  <div
                    className="vine-prose"
                    dangerouslySetInnerHTML={{ __html: b.html }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                  />
                </article>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${TEAL}`,
                borderRadius: 16,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: TEAL,
                }}
              >
                Questions for Reflection
              </h2>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {questions.map((q, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: q }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                  />
                ))}
              </ol>
            </div>

            {/* Videos */}
            <div>
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: PURPLE,
                  textAlign: "center",
                }}
              >
                Watch &amp; Reflect
              </h2>
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
                    <div
                      dangerouslySetInnerHTML={{ __html: v.title }}
                      style={{
                        padding: "0.9rem 1.1rem",
                        color: TEXT,
                        fontSize: "0.98rem",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing prayer */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: 16,
                padding: "1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.1rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                A Closing Prayer
              </h2>
              <div
                className="vine-prose"
                dangerouslySetInnerHTML={{ __html: prayerHtml }}
                style={{
                  color: MUTED,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
