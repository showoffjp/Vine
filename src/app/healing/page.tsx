"use client";

import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HealingStep {
  stepTitle: string;
  scripture: string;
  reflection: string;
  prayer: string;
  action: string;
}

interface HealingPath {
  id: string;
  icon: string;
  title: string;
  description: string;
  stepCount: number;
  duration: string;
  theme: string;
  category: string;
  steps: HealingStep[];
}

interface HealingVerse {
  id: string;
  verse: string;
  reference: string;
  theme: string;
  likes: number;
}

interface Testimony {
  id: string;
  name: string;
  age: number;
  title: string;
  story: string[];
  typeOfHealing: string;
  verse: string;
  verseRef: string;
}

interface Resource {
  id: string;
  type: string;
  title: string;
  authorOrg: string;
  description: string;
  link: string;
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const HEALING_PATHS: HealingPath[] = [
  {
    id: "shame",
    icon: "🕊️",
    title: "Breaking Free from Shame",
    description:
      "Shame whispers that you are your worst moments. This journey reclaims your identity in Christ — not despite your past, but through the healing that transforms it.",
    stepCount: 8,
    duration: "~6 weeks",
    theme: "Identity",
    category: "Emotional",
    steps: [
      {
        stepTitle: "Naming the Shame",
        scripture: "Therefore, there is now no condemnation for those who are in Christ Jesus. — Romans 8:1",
        reflection:
          "Shame thrives in hiddenness. Before healing can begin we must name what we carry. What voices replay in your mind? Whose words lodged deepest?",
        prayer:
          "Lord, I bring into the light what I have kept in the dark. I name my shame before You, trusting that You do not flinch, reject, or condemn. You already know. You already love.",
        action: "Write down the shame narrative in your own words. Date the page. This is not to rehearse it — it is to externalize it.",
      },
      {
        stepTitle: "Understanding Shame vs. Guilt",
        scripture: "Godly sorrow brings repentance that leads to salvation and leaves no regret. — 2 Corinthians 7:10",
        reflection:
          "Guilt says 'I did something bad.' Shame says 'I am bad.' God uses godly guilt to lead us to repentance — but He never intended shame to define our identity.",
        prayer:
          "Father, teach me to distinguish between healthy conviction and toxic shame. Show me where the enemy has twisted guilt into identity theft.",
        action: "Make two columns: 'Things I did' and 'Lies about who I am.' Practice moving shame statements into the second column.",
      },
      {
        stepTitle: "The Father's Gaze",
        scripture: "See what great love the Father has lavished on us, that we should be called children of God! — 1 John 3:1",
        reflection:
          "The prodigal son expected punishment; the father ran. What would it mean to let yourself be seen — really seen — by a Father who runs toward you?",
        prayer:
          "God, I confess I have assigned Your face the expressions of people who hurt me. Correct my vision. Let me see the love in Your eyes.",
        action: "Spend 10 minutes sitting quietly, imagining the father running in Luke 15. Let yourself be the child in the story.",
      },
      {
        stepTitle: "Breaking Agreement with Shame",
        scripture: "We demolish arguments and every pretension that sets itself up against the knowledge of God. — 2 Corinthians 10:5",
        reflection:
          "Shame is not just a feeling — it is a set of agreements we make. 'I am unlovable.' 'I am too broken.' We must consciously revoke these agreements.",
        prayer:
          "In the name of Jesus, I renounce the agreement that I am [name your specific shame]. I replace it with what You say about me.",
        action: "Write a 'renunciation letter' to the shame that has had a name in your life. Read it aloud.",
      },
      {
        stepTitle: "Receiving Forgiveness Deeply",
        scripture: "As far as the east is from the west, so far has he removed our transgressions from us. — Psalm 103:12",
        reflection:
          "Many Christians believe in forgiveness theologically but have never received it emotionally. Is there a gap between what you know and what you feel?",
        prayer:
          "Jesus, I accept — not just acknowledge, but receive — Your forgiveness. I will not keep re-trying a case You have already dismissed.",
        action: "Write a receipt. Literally draft 'PAID IN FULL' over the thing you most struggle to accept forgiveness for.",
      },
      {
        stepTitle: "Reconnecting with Community",
        scripture: "Confess your sins to each other and pray for each other so that you may be healed. — James 5:16",
        reflection:
          "Shame disconnects. Healing reconnects. Is there one safe person you could begin to let in? Healing rarely happens in complete isolation.",
        prayer:
          "Lord, lead me to safe people. Give me courage to be known. Protect me from those who would misuse my vulnerability.",
        action: "Identify one trusted person and share one thing you have been carrying alone.",
      },
      {
        stepTitle: "Living from a New Identity",
        scripture: "You are a chosen people, a royal priesthood, a holy nation, God's special possession. — 1 Peter 2:9",
        reflection:
          "Who are you when shame is not speaking? Begin constructing — and living from — the identity God declares over you.",
        prayer:
          "Father, I choose today to live as who You say I am — not who my shame says I am. Let this be a new chapter.",
        action: "Write your God-identity statement. 'I am [name]. I am chosen, loved, made new. I am not my past.'",
      },
      {
        stepTitle: "Helping Others Heal",
        scripture: "He comforts us in all our troubles so that we can comfort others. — 2 Corinthians 1:4",
        reflection:
          "Your healed story becomes someone else's map. Who in your life might benefit from knowing that shame doesn't have the final word?",
        prayer:
          "Use what You've healed in me, Lord. Let my story not end with me.",
        action: "Write a short note of encouragement — real or imagined — to someone else walking where you were.",
      },
    ],
  },
  {
    id: "betrayal",
    icon: "💔",
    title: "Healing from Betrayal",
    description:
      "When someone you trusted breaks that trust, the wound cuts deeper than almost any other. This journey walks you through grief, truth-telling, and the long road back to trusting again.",
    stepCount: 7,
    duration: "~5 weeks",
    theme: "Trust",
    category: "Relational",
    steps: [
      {
        stepTitle: "Acknowledging the Wound",
        scripture: "He heals the brokenhearted and binds up their wounds. — Psalm 147:3",
        reflection:
          "Betrayal is a particular kind of wound — it attacks both the heart and the mind. You trusted, and that trust was violated. That deserves to be named.",
        prayer: "Lord, I will not minimize what happened. I bring You the full weight of this wound and ask You to bind it.",
        action: "Write the story of the betrayal as accurately as you can. Include what you trusted, what happened, and how it affected you.",
      },
      {
        stepTitle: "Grief Before Forgiveness",
        scripture: "Jesus wept. — John 11:35",
        reflection:
          "We often rush to forgiveness as if grief is weakness. But Jesus wept before He raised Lazarus. There is holy work in grief. Do not skip it.",
        prayer: "Jesus, You know grief. You wept openly. Give me permission to grieve what I lost when the betrayal happened.",
        action: "Identify what was lost beyond the event itself: safety, a relationship, a part of your self-image. Mourn each specifically.",
      },
      {
        stepTitle: "Anger as Information",
        scripture: "In your anger do not sin. — Ephesians 4:26",
        reflection:
          "Anger after betrayal is not a sin — it is a sign that something real was broken. The question is what you do with it.",
        prayer: "God, I give You my anger. I will not stuff it and I will not weaponize it. Help me let it inform rather than control me.",
        action: "Write an unsent letter to the person who hurt you. Do not hold back. Then hold it before God in prayer.",
      },
      {
        stepTitle: "Understanding Forgiveness",
        scripture: "Forgive as the Lord forgave you. — Colossians 3:13",
        reflection:
          "Forgiveness is not excusing the wrong, pretending it didn't happen, or immediate reconciliation. It is releasing your right to revenge into God's hands.",
        prayer: "Lord, I want to forgive — not because they deserve it, but because I refuse to be imprisoned by what they did.",
        action: "Rewrite what forgiveness IS and IS NOT for your situation specifically.",
      },
      {
        stepTitle: "Rebuilding Discernment",
        scripture: "Be wise as serpents and innocent as doves. — Matthew 10:16",
        reflection:
          "Betrayal can leave you either defensively closed or dangerously open. Wisdom helps you neither wall everyone out nor trust without discernment.",
        prayer: "Give me wisdom to know who is safe, Lord. Heal my ability to read people without becoming cynical.",
        action: "List three qualities of a trustworthy person. Reflect on who in your life demonstrates these.",
      },
      {
        stepTitle: "Deciding About Reconciliation",
        scripture: "If it is possible, as far as it depends on you, live at peace with everyone. — Romans 12:18",
        reflection:
          "Forgiveness is required. Reconciliation is not always possible or wise. You can forgive someone you cannot safely allow back into your life.",
        prayer: "Lord, give me clarity about this relationship. Show me what restoration looks like — or whether it is possible here.",
        action: "Write out what reconciliation would require (genuine repentance, changed behavior, time) and whether those conditions have been met.",
      },
      {
        stepTitle: "Trusting Again",
        scripture: "Those who trust in the LORD are like Mount Zion, which cannot be shaken. — Psalm 125:1",
        reflection:
          "The goal isn't to trust people perfectly — it's to root your ultimate trust in God so deeply that human betrayal can wound you without destroying you.",
        prayer: "Anchor my trust in You, Lord. Let my security come from Your faithfulness, not from people's consistency.",
        action: "Write: 'What would it look like to take one small risk of trust this week?' Then take it.",
      },
    ],
  },
  {
    id: "anxiety",
    icon: "🌊",
    title: "Overcoming Anxiety & Fear",
    description:
      "Anxiety is one of the most common struggles among Christians today. This journey addresses both the spiritual and practical dimensions of anxiety with honesty and grace.",
    stepCount: 9,
    duration: "~8 weeks",
    theme: "Peace",
    category: "Mental/Emotional",
    steps: [
      {
        stepTitle: "Naming Your Anxiety",
        scripture: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. — Philippians 4:6",
        reflection:
          "Paul doesn't say anxiety means faithlessness — he offers a way through it. What does your anxiety most often attach itself to?",
        prayer: "Lord, I bring every anxious thought to You today. I name them rather than hide them.",
        action: "List your top three anxiety triggers. For each, write what the fear believes could happen.",
      },
      {
        stepTitle: "The Body and Anxiety",
        scripture: "He gives strength to the weary and increases the power of the weak. — Isaiah 40:29",
        reflection:
          "Anxiety lives in the body, not just the mind. Sleep, exercise, diet, and breathing all affect your anxiety levels. Caring for your body is a spiritual act.",
        prayer: "God, You created this body. Help me steward it in ways that support my mental peace.",
        action: "Identify one physical habit (sleep, exercise, caffeine, breathing) to work on this week.",
      },
      {
        stepTitle: "Fear vs. Reality",
        scripture: "For God has not given us a spirit of fear, but of power, love, and a sound mind. — 2 Timothy 1:7",
        reflection:
          "Anxiety often presents worst-case scenarios as certainties. Challenge the catastrophic story with what is actually known.",
        prayer: "Give me a sound mind, Lord. Teach me to evaluate reality rather than being governed by worst-case projections.",
        action: "Take one anxious thought and write three more realistic scenarios alongside it.",
      },
      {
        stepTitle: "Practicing God's Presence",
        scripture: "Where can I go from your Spirit? Where can I flee from your presence? — Psalm 139:7",
        reflection:
          "Anxiety shrinks your awareness to the threat. Practicing God's presence expands your awareness to what is actually true and safe.",
        prayer: "Lord, make me aware of Your presence throughout this day, especially in anxious moments.",
        action: "Practice a two-minute breath prayer: breathe in 'You are with me,' breathe out 'I am not alone.'",
      },
      {
        stepTitle: "Scripture as Renewal",
        scripture: "Be transformed by the renewing of your mind. — Romans 12:2",
        reflection:
          "Our minds are formed by what we repeatedly rehearse. Scripture memorization is not just devotional — it is neurological renewal.",
        prayer: "Word of God, take root in me. Replace the anxious scripts with Your truth.",
        action: "Choose one verse and memorize it this week. Write it on three cards and place them where anxiety often hits.",
      },
      {
        stepTitle: "The Prayer of Surrender",
        scripture: "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7",
        reflection:
          "Surrender is not giving up — it is releasing the illusion of total control you were never meant to carry.",
        prayer: "I cannot control this, Lord. I release [name the specific fear] into Your hands. You are Lord over what I am not.",
        action: "Write out the specific things you are trying to control that you cannot. Physically place the paper in a Bible as an act of release.",
      },
      {
        stepTitle: "Community as Healing",
        scripture: "Carry each other's burdens, and in this way you will fulfill the law of Christ. — Galatians 6:2",
        reflection:
          "Anxiety isolates. Connection heals. Is there someone who knows the weight you're carrying? Hiding anxiety usually increases it.",
        prayer: "Lead me to people I can be honest with, Lord. Give me courage to not perform wellness I don't feel.",
        action: "Tell one trusted person: 'I've been struggling with anxiety and I'm working on it.'",
      },
      {
        stepTitle: "Professional Support",
        scripture: "Plans fail for lack of counsel, but with many advisers they succeed. — Proverbs 15:22",
        reflection:
          "Anxiety is sometimes chemical and neurological. There is no spiritual brownie point for suffering through what therapy or medicine could treat.",
        prayer: "God, give me humility to seek help. Let my healing reflect Your wisdom, not my pride.",
        action: "Research one therapist, one counselor, or one anxiety management resource this week.",
      },
      {
        stepTitle: "Living in the Present",
        scripture: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. — Matthew 6:34",
        reflection:
          "Jesus didn't say the future would be fine — He said today has enough. The present moment is where God meets us. The future is His.",
        prayer: "Lord, I choose this moment. I release tomorrow. I trust that You are already there.",
        action: "Practice a 5-4-3-2-1 grounding exercise: 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste.",
      },
    ],
  },
  {
    id: "forgiveness",
    icon: "🤲",
    title: "Forgiveness Journey",
    description:
      "Unforgiveness is a weight designed to imprison you, not them. This journey explores what forgiveness actually is — and walks you through the hard work of releasing what you have every right to hold.",
    stepCount: 6,
    duration: "~4 weeks",
    theme: "Release",
    category: "Spiritual",
    steps: [
      {
        stepTitle: "Who Do You Need to Forgive?",
        scripture: "And when you stand praying, if you hold anything against anyone, forgive them. — Mark 11:25",
        reflection:
          "Forgiveness begins with honest naming. Many of us carry unforgiveness toward people we've never consciously identified.",
        prayer: "Holy Spirit, search my heart. Show me who I need to forgive, including people I have forgotten.",
        action: "Write a complete list. Include people, institutions, and God Himself if honest.",
      },
      {
        stepTitle: "What Forgiveness Is Not",
        scripture: "For I will forgive their wickedness and will remember their sins no more. — Hebrews 8:12",
        reflection:
          "Forgiveness is not saying it was okay, forgetting it happened, or restoring the relationship automatically. It is releasing the debt.",
        prayer: "Lord, show me where I have distorted what forgiveness means — either excusing too much or withholding because of misunderstanding.",
        action: "Write what specific forgiveness in your situation DOES and DOES NOT require.",
      },
      {
        stepTitle: "The Cost of Not Forgiving",
        scripture: "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble. — Hebrews 12:15",
        reflection:
          "Research shows unforgiveness harms the person holding it more than the person they resent. Bitterness has a cost. What has yours cost you?",
        prayer: "God, show me honestly what this unforgiveness has cost me in peace, relationships, and closeness with You.",
        action: "Write out the real cost of holding this resentment. What has it stolen from your life?",
      },
      {
        stepTitle: "The Act of Forgiveness",
        scripture: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you. — Ephesians 4:32",
        reflection:
          "Forgiveness often begins as a decision before it becomes a feeling. You choose to release the debt — and keep choosing as emotions resurface.",
        prayer: "Lord, I choose to forgive [name]. I release this debt. I will not collect on it. This is my act of obedience, not my emotion.",
        action: "Write a formal release: 'I forgive [name] for [specific act]. I release them from the debt they owe me. I place them in Your hands.'",
      },
      {
        stepTitle: "Forgiving Yourself",
        scripture: "If we confess our sins, he is faithful and just and will forgive us our sins. — 1 John 1:9",
        reflection:
          "For many Christians, the hardest person to forgive is themselves. Withholding self-forgiveness is often a subtle form of pride — as if our sin is beyond what God can cover.",
        prayer: "Lord, I receive Your forgiveness. I will not re-prosecute what You have acquitted. I forgive myself.",
        action: "Write yourself a letter of forgiveness in the third person. 'I forgive [your name] for…'",
      },
      {
        stepTitle: "Walking in Freedom",
        scripture: "It is for freedom that Christ has set us free. — Galatians 5:1",
        reflection:
          "Forgiveness is not a one-time event for some wounds — it is a practice. When the resentment resurfaces, you choose again. Over time, the choosing gets easier.",
        prayer: "Lord, I commit to this as a practice, not a performance. Remind me when I forget. Help me choose again.",
        action: "Write: 'In the next 30 days, when resentment surfaces about this, I will choose to pray for [name] instead.'",
      },
    ],
  },
  {
    id: "childhood",
    icon: "🌱",
    title: "Healing from Childhood Wounds",
    description:
      "Our earliest experiences shape the lenses through which we see God, ourselves, and others. This journey carefully addresses wounds from childhood and the path toward restoration.",
    stepCount: 10,
    duration: "~10 weeks",
    theme: "Restoration",
    category: "Deep Healing",
    steps: [
      {
        stepTitle: "Acknowledging the Wound Exists",
        scripture: "You have kept count of my tossings; put my tears in your bottle. Are they not in your book? — Psalm 56:8",
        reflection:
          "Many adults minimize childhood wounds — 'it wasn't that bad,' 'others had it worse.' God keeps count. Your story matters.",
        prayer: "Lord, give me honesty about my childhood. Help me neither to dramatize nor to minimize what I experienced.",
        action: "Write a brief, honest account of the most significant wounds from your childhood.",
      },
      {
        stepTitle: "The Inner Child",
        scripture: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these. — Matthew 19:14",
        reflection:
          "There is a younger version of you who still needs care. That child was not heard, protected, or loved as they deserved. Jesus explicitly welcomed children.",
        prayer: "Jesus, I bring the child I was to You. The one who was [hurt/ignored/shamed/afraid]. Hold that child.",
        action: "Find a photo of yourself as a child. Look at it. Write what you would want to say to that child.",
      },
      {
        stepTitle: "Patterns and Triggers",
        scripture: "Create in me a pure heart, O God, and renew a steadfast spirit within me. — Psalm 51:10",
        reflection:
          "Childhood wounds create patterns that play out in adult relationships, often without our awareness. What patterns keep surfacing?",
        prayer: "God, show me the patterns. Give me eyes to see where old wounds are running current relationships.",
        action: "Identify one relational pattern (e.g., people-pleasing, shutting down, controlling). Trace where it might have started.",
      },
      {
        stepTitle: "Grieving What You Didn't Have",
        scripture: "A father to the fatherless, a defender of widows, is God in his holy dwelling. — Psalm 68:5",
        reflection:
          "Some wounds are not what happened, but what didn't — the absent parent, the love never given, the childhood that was stolen. You can grieve an absence.",
        prayer: "Lord, I grieve what I didn't have. I name the [love/protection/belonging] I needed and didn't receive.",
        action: "Write a list: 'Things I needed as a child that I didn't receive.' Mourn each one before God.",
      },
      {
        stepTitle: "Understanding Your Parents",
        scripture: "Honor your father and your mother. — Exodus 20:12",
        reflection:
          "Understanding your parents' wounds is not excusing their behavior. But context helps release us from the myth that their failures were about our value.",
        prayer: "Lord, help me understand without excusing. Show me where my parents were themselves wounded and limited.",
        action: "Write what you know about your parents' childhood or formative experiences. How might that have shaped their parenting?",
      },
      {
        stepTitle: "God as Perfect Father",
        scripture: "How great is the love the Father has lavished on us. — 1 John 3:1",
        reflection:
          "Our image of God is deeply shaped by our experience of parents. Where has your parental wound distorted your image of God?",
        prayer: "Father, correct every wrong image I carry of You. You are not like the parents who hurt me. You are entirely good.",
        action: "Write: 'My earthly parent [action/message]. But my Heavenly Father [truth from Scripture].'",
      },
      {
        stepTitle: "The Role of Professional Help",
        scripture: "Plans succeed through good counsel. — Proverbs 20:18",
        reflection:
          "Deep childhood wounds often benefit from professional trauma-informed therapy. Seeking help is wisdom, not weakness.",
        prayer: "Lord, give me humility to seek the help I need. Guide me to the right person.",
        action: "Research one trauma-informed Christian counselor in your area or via telehealth.",
      },
      {
        stepTitle: "Breaking Generational Patterns",
        scripture: "The son will not share the guilt of the father, nor will the father share the guilt of the son. — Ezekiel 18:20",
        reflection:
          "Patterns pass down through families — but they can also stop with you. This is not about blame; it's about responsibility and freedom.",
        prayer: "Lord, let this pattern stop with me. I choose a new way for my family, my future, and my children.",
        action: "Identify one generational pattern and write specifically how you will choose differently.",
      },
      {
        stepTitle: "Receiving Reparenting",
        scripture: "He will turn the hearts of the parents to their children. — Malachi 4:6",
        reflection:
          "God can 'reparent' us through His Word, through His people, through prayer, and sometimes through healthy relationships with older mentors.",
        prayer: "Father, be to me what no earthly parent fully was. Love me, guide me, protect me.",
        action: "Identify one spiritual mentor or older believer in whom you see the fathering/mothering qualities you needed.",
      },
      {
        stepTitle: "Restoration and New Story",
        scripture: "I will restore to you the years that the swarming locust has eaten. — Joel 2:25",
        reflection:
          "Restoration is God's specialty. He doesn't just heal the wound; He redeems the story. What is He making from your story?",
        prayer: "God of restoration, I believe You can make something beautiful from what was broken. Write a new chapter through me.",
        action: "Write a paragraph describing what restoration might look like for your story — not as if pain didn't happen, but as if it no longer defines you.",
      },
    ],
  },
  {
    id: "addiction",
    icon: "⛓️",
    title: "Addiction & Freedom",
    description:
      "Addiction is not a moral failing — it is a wound with a chemical signature. This journey approaches freedom with compassion, realism, and the full power of the Gospel.",
    stepCount: 8,
    duration: "~6 weeks",
    theme: "Freedom",
    category: "Recovery",
    steps: [
      {
        stepTitle: "Honest Assessment",
        scripture: "Then you will know the truth, and the truth will set you free. — John 8:32",
        reflection:
          "Freedom begins with honesty. Addiction is sustained by denial, minimization, and secrecy. What does your honest assessment look like?",
        prayer: "Lord, I will not hide. I name the addiction, its grip, and the ways I have been less than honest about it.",
        action: "Write an honest account: what the substance/behavior is, how long, its cost in your life.",
      },
      {
        stepTitle: "Understanding the Roots",
        scripture: "Why do you spend money on what is not bread, and your labor on what does not satisfy? — Isaiah 55:2",
        reflection:
          "Most addictions began as misguided answers to real pain. What did this substance or behavior give you? What need was it trying to meet?",
        prayer: "God, show me the wound underneath the addiction. What was I trying to ease or escape?",
        action: "Write: 'When I use/do [addiction], I feel [what]. It gives me [what need]. The real need is [what].'",
      },
      {
        stepTitle: "The Community of Recovery",
        scripture: "Confess your sins to each other and pray for each other so that you may be healed. — James 5:16",
        reflection:
          "Addiction is a disease of isolation. Recovery is a community project. Twelve-step programs, Celebrate Recovery, and accountability partnerships all reflect biblical truth.",
        prayer: "God, break my pride that keeps me alone. Lead me to the people who can walk this with me.",
        action: "Research one local Celebrate Recovery or AA/NA group and attend one meeting this week.",
      },
      {
        stepTitle: "Accountability Structure",
        scripture: "Two are better than one, because they have a good return for their labor. — Ecclesiastes 4:9",
        reflection:
          "Willpower alone almost never wins against addiction. A structure of accountability — specific, regular, honest — changes the odds dramatically.",
        prayer: "Lord, bring me an accountability partner who will be honest, consistent, and safe.",
        action: "Ask one person to be a specific accountability partner with defined check-ins.",
      },
      {
        stepTitle: "Replacing, Not Just Removing",
        scripture: "When an impure spirit comes out of a person, it goes through arid places… then it returns. — Matthew 12:43-44",
        reflection:
          "Addiction fills a space. Simply removing the addiction without replacing it with something good often leads to relapse. What can fill the space?",
        prayer: "Lord, fill the space that this leaves. Give me holy, healthy, life-giving replacements.",
        action: "List three specific activities, relationships, or practices to replace the time/role the addiction occupied.",
      },
      {
        stepTitle: "Handling Relapse",
        scripture: "For though the righteous fall seven times, they rise again. — Proverbs 24:16",
        reflection:
          "Relapse is not the end of the story. Most recoveries include setbacks. The question is not whether you fell — it's whether you get up.",
        prayer: "Lord, when I fall — not if — let me return to You immediately. Shame does not help recovery. Grace does.",
        action: "Write a pre-commitment: 'If I relapse, I will immediately [specific steps — call accountability partner, reach out to counselor, etc.].'",
      },
      {
        stepTitle: "The Spiritual Battle",
        scripture: "Submit yourselves to God. Resist the devil, and he will flee from you. — James 4:7",
        reflection:
          "Addiction has spiritual dimensions. This doesn't mean blaming everything on the devil — but it does mean taking seriously the spiritual resources available.",
        prayer: "I submit myself to You, Lord. In Your authority, I resist what has held me. I am not its slave.",
        action: "Identify any spiritual practices (prayer, worship, Scripture, community) that specifically strengthen you against your addiction's patterns.",
      },
      {
        stepTitle: "Walking in Freedom",
        scripture: "It is for freedom that Christ has set us free. Stand firm, then. — Galatians 5:1",
        reflection:
          "Freedom is not a destination you arrive at — it is a direction you walk in, every day. What does walking in freedom look like for you?",
        prayer: "I accept the freedom You purchased for me, Jesus. I will not return to the yoke of slavery.",
        action: "Write your freedom declaration: who you are, what you are free from, and what you are free for.",
      },
    ],
  },
];

const HEALING_VERSES: HealingVerse[] = [
  { id: "v1", verse: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3", theme: "Body healing", likes: 234 },
  { id: "v2", verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", reference: "Philippians 4:6-7", theme: "Anxiety", likes: 891 },
  { id: "v3", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus.", reference: "Romans 8:1", theme: "Shame", likes: 1243 },
  { id: "v4", verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18", theme: "Depression", likes: 1678 },
  { id: "v5", verse: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28", theme: "Anxiety", likes: 2134 },
  { id: "v6", verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11", theme: "Hope", likes: 3421 },
  { id: "v7", verse: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.", reference: "John 10:10", theme: "Identity", likes: 987 },
  { id: "v8", verse: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", reference: "Isaiah 41:10", theme: "Fear", likes: 2876 },
  { id: "v9", verse: "Weeping may stay for the night, but rejoicing comes in the morning.", reference: "Psalm 30:5", theme: "Grief", likes: 1432 },
  { id: "v10", verse: "He was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", reference: "Isaiah 53:5", theme: "Body healing", likes: 1876 },
  { id: "v11", verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7", theme: "Anxiety", likes: 3102 },
  { id: "v12", verse: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.", reference: "Psalm 139:14", theme: "Identity", likes: 2543 },
  { id: "v13", verse: "Blessed are those who mourn, for they will be comforted.", reference: "Matthew 5:4", theme: "Grief", likes: 1098 },
  { id: "v14", verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28", theme: "Hope", likes: 4231 },
  { id: "v15", verse: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", reference: "Isaiah 40:31", theme: "Depression", likes: 2789 },
  { id: "v16", verse: "You intended to harm me, but God intended it for good to accomplish what is now being done.", reference: "Genesis 50:20", theme: "Hope", likes: 1654 },
  { id: "v17", verse: "God is our refuge and strength, an ever-present help in trouble.", reference: "Psalm 46:1", theme: "Fear", likes: 1987 },
  { id: "v18", verse: "See what great love the Father has lavished on us, that we should be called children of God!", reference: "1 John 3:1", theme: "Shame", likes: 2341 },
  { id: "v19", verse: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.", reference: "Romans 8:38-39", theme: "Depression", likes: 5643 },
  { id: "v20", verse: "He who began a good work in you will carry it on to completion until the day of Christ Jesus.", reference: "Philippians 1:6", theme: "Identity", likes: 3298 },
];

const TESTIMONIES: Testimony[] = [
  {
    id: "t1",
    name: "Marcus",
    age: 34,
    title: "From Addiction to Freedom",
    typeOfHealing: "Addiction Recovery",
    verse: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.",
    verseRef: "Galatians 5:1",
    story: [
      "I started using when I was nineteen — first prescription painkillers after a sports injury, then heroin by twenty-two. For a decade, my life revolved entirely around the next hit. I lost jobs, relationships, an apartment, and very nearly my life twice. My family had given up. I had given up. I was sleeping in a car in the winter of 2019 when I stumbled into a Celebrate Recovery meeting because I was cold and they had coffee.",
      "I didn't believe in God at that point — at least not in any God who would bother with someone like me. But there was something in that room. Real people with real stories who weren't pretending they had it together. A man named James, a former addict twenty years clean, put his hand on my shoulder and said 'I see you.' I have never forgotten that. I called the number on the pamphlet the next morning and began a long journey through treatment, community, and slow, painful rebuilding.",
      "I have been clean for five years. I won't pretend it's been a straight line — there were two relapses in year one and a brutal six-month battle with depression afterward. But the God I found in that freezing community center has been with me through all of it. My mother and I talk again. I have a daughter. I volunteer at the same Celebrate Recovery meeting where James saw me. I tell newcomers: God works in cold rooms with bad coffee. He is not waiting for you to be clean to find you.",
    ],
  },
  {
    id: "t2",
    name: "Grace",
    age: 29,
    title: "After the Miscarriage",
    typeOfHealing: "Pregnancy Loss & Grief",
    verse: "Before I formed you in the womb I knew you.",
    verseRef: "Jeremiah 1:5",
    story: [
      "We had been trying for two years. When I finally saw those two lines, I cried so hard my husband thought something was wrong. We hadn't even told our families yet when I began bleeding at eight weeks. The doctor was kind but clinical. 'These things happen,' she said. 'It was very early.' I know she meant well. But that baby was real to me. The grief felt disproportionate — embarrassing, even — in a world that didn't know I had even been pregnant.",
      "The hardest part was going back to church. Seeing the announcements of new pregnancies, the baby dedications, the well-meaning questions about when we were starting a family. I sat through a Mother's Day service two months after the miscarriage and felt invisible in the most public possible way. I started seeing a grief counselor who specifically worked with pregnancy loss. She told me: your grief is proportionate. You lost a person you loved.",
      "It has been two years. We have not yet been able to carry a pregnancy to term and I still don't know what our family will look like. What I can tell you is this: God has been in the grief with me. Not explaining it, not rushing me through it. Just present. I found a community of women online who had experienced the same losses, and together we made space for our babies to have been real. They were. They are. Jeremiah 1:5 is my anchor: God knew them before I did, and He holds them now.",
    ],
  },
  {
    id: "t3",
    name: "David",
    age: 41,
    title: "Healed from Anger",
    typeOfHealing: "Anger Management & Family Restoration",
    verse: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
    verseRef: "James 1:19-20",
    story: [
      "I was a scary man. I never hit anyone — but the silence that fell over a room when I entered it, the way my kids flinched when I raised my voice, the fear I could see in my wife's eyes during an argument. I told myself it wasn't that bad. I was 'just passionate.' I was 'just holding people to high standards.' I was a leader at my church. I coached Little League. I was, as far as anyone could see, a good Christian man. My wife finally left. She took the kids and stayed with her sister and handed me a pamphlet for an anger management program before she walked out the door.",
      "The program was run by a Christian counselor who had, he told us, been exactly where we were. He didn't shame us — he explained to us what anger often is: pain wearing a mask. I was the son of a volatile, critical father who told me consistently that I wasn't enough. I had learned to attack before I could be attacked. I had spent forty years calling it strength. It was actually fear.",
      "Recovery from anger is slower than I expected. It's been three years. My wife came home after fourteen months — cautiously, with a therapist mediating the process. We are rebuilding. My oldest son, who is fifteen, has begun to trust me again, and last month he asked me to come to his game. I sat in those bleachers and thanked God for the grace that looked like my wife handing me a pamphlet rather than a divorce filing. Not everyone gets that. I don't take it lightly.",
    ],
  },
  {
    id: "t4",
    name: "Amara",
    age: 26,
    title: "Depression Lifted",
    typeOfHealing: "Clinical Depression & Faith",
    verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    verseRef: "Psalm 34:18",
    story: [
      "I was the worship leader at my church at twenty-three. On Sunday mornings I led hundreds of people into God's presence. On Monday mornings I sometimes could not get out of bed. I hid the depression for almost a year — terrified that if people knew, I would be seen as a hypocrite or spiritually weak. The more I hid it, the worse it got. By the time I finally told my pastor, I had spent three days barely eating and hadn't left my apartment in a week.",
      "The most healing thing my pastor said was this: 'I want you to see a doctor before we do anything spiritual.' I had expected prayer, maybe some rebuke about my faith. Instead she walked me to a psychiatrist appointment and sat in the waiting room. I was diagnosed with clinical depression and put on medication that took two months to work. In those two months, the church covered my worship leading without explanation and a group of three women rotated bringing me food and sitting with me. They never quoted Bible verses unless I asked. They just showed up.",
      "I have been managing well for two years now. I am still on medication — and I've stopped being ashamed of that. I have come to believe that God created neurochemistry just like He created everything else, and that medicine is one of His tools. I still lead worship. I still have difficult weeks. But the difference is this: I am not hiding. The community that held me when I was falling apart made me more whole than anything else. Psalm 34:18 is not a metaphor. He was close. He saved. I was there.",
    ],
  },
  {
    id: "t5",
    name: "Elena",
    age: 52,
    title: "Physical Healing",
    typeOfHealing: "Chronic Pain & Perseverance",
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    verseRef: "2 Corinthians 12:9",
    story: [
      "I have lived with fibromyalgia for eighteen years. I want to be honest about what my testimony is and isn't: God did not miraculously heal me of fibromyalgia. I prayed for that for years. I was prayed over at countless services. I believed with everything in me. The pain did not go away. For a long time, I was angry — at God, at the well-meaning people who told me I needed more faith, at my own body. I felt like a failed testimony.",
      "What changed was not my body. It was my theology of suffering. I read Paul's account of his 'thorn in the flesh' — three times he asked God to remove it, and three times God said no. The answer was not healing. The answer was 'My grace is sufficient for you.' I had spent eighteen years waiting for a specific kind of miracle and missed the grace that was already present. God was with me in the pain. He had never left. I had been so fixated on the healing I wanted that I couldn't see the sustaining I was already receiving.",
      "This is not me saying physical healing doesn't happen or that prayer is futile. I believe deeply in both. It's me saying that my story is not a lesser story because I wasn't miraculously cured. God has used my weakness to teach me, to humble me, to make me deeply compassionate toward people in chronic pain, and to free me from a performance-based faith. I am more whole in my spirit than I have ever been in my body. That is a miracle too.",
    ],
  },
];

const RESOURCES: Resource[] = [
  {
    id: "r1",
    type: "Book",
    title: "The Wounded Heart",
    authorOrg: "Dr. Dan Allender",
    description:
      "A groundbreaking book on healing from sexual abuse and deep shame, with a compassionate Christ-centered framework. One of the most important books on Christian healing in the last 30 years.",
    link: "#",
  },
  {
    id: "r2",
    type: "Book",
    title: "Healing the Soul of a Woman",
    authorOrg: "Joyce Meyer",
    description:
      "Joyce Meyer draws from her own story of abuse and recovery to offer practical, Scripture-based guidance for women healing from emotional wounds.",
    link: "#",
  },
  {
    id: "r3",
    type: "Book",
    title: "The Body Keeps the Score",
    authorOrg: "Bessel van der Kolk, M.D.",
    description:
      "A landmark work on trauma and the body. While not explicitly Christian, it is widely used by Christian counselors and helps explain why healing requires more than intellectual understanding.",
    link: "#",
  },
  {
    id: "r4",
    type: "Program",
    title: "Celebrate Recovery",
    authorOrg: "Saddleback Church",
    description:
      "A Christ-centered 12-step recovery program for anyone struggling with hurt, hang-ups, or habits. Available in over 35,000 churches worldwide. All addictions and hurts are welcome.",
    link: "#",
  },
  {
    id: "r5",
    type: "Program",
    title: "Freedom Session",
    authorOrg: "Harvey Ministries",
    description:
      "A 20-week healing journey addressing brokenness, grief, and identity. Small-group based with deep scriptural roots. Used in churches across North America and internationally.",
    link: "#",
  },
  {
    id: "r6",
    type: "Hotline",
    title: "Crisis Text Line",
    authorOrg: "Crisis Text Line",
    description:
      "Free, confidential 24/7 crisis support via text. Text HOME to 741741. Trained counselors are available for any type of crisis including mental health, abuse, addiction, and more.",
    link: "#",
  },
  {
    id: "r7",
    type: "Hotline",
    title: "988 Suicide & Crisis Lifeline",
    authorOrg: "SAMHSA / HHS",
    description:
      "Call or text 988 for free, confidential support for people in suicidal crisis or mental health distress. Available 24/7. Spanish-language support available.",
    link: "#",
  },
  {
    id: "r8",
    type: "Book",
    title: "When the Darkness Will Not Lift",
    authorOrg: "John Piper",
    description:
      "A compassionate, pastorally wise book on seasons of spiritual darkness and depression. Piper addresses both the spiritual and medical dimensions of depression with honesty.",
    link: "#",
  },
];

const VERSE_THEMES = ["All", "Anxiety", "Fear", "Shame", "Depression", "Grief", "Body healing", "Identity", "Hope"];

const RESOURCE_TYPES = ["All", "Book", "Program", "Hotline"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HealingPage() {
  const [activeTab, setActiveTab] = useState<"paths" | "scriptures" | "testimonies" | "resources">("paths");

  // Saved verses (Set of IDs)
  const [savedVerses, setSavedVerses] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem("vine_healing_saved");
      if (raw) return new Set<string>(JSON.parse(raw));
    } catch {}
    return new Set<string>();
  });

  // Started paths (Set of IDs)
  const [startedPaths, setStartedPaths] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem("vine_healing_paths_started");
      if (raw) return new Set<string>(JSON.parse(raw));
    } catch {}
    return new Set<string>();
  });

  // Liked verses (map of id -> count delta)
  const [likedVerses, setLikedVerses] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem("vine_healing_liked");
      if (raw) return new Set<string>(JSON.parse(raw));
    } catch {}
    return new Set<string>();
  });

  // Selected path for modal
  const [selectedPath, setSelectedPath] = useState<HealingPath | null>(null);
  const [selectedStep, setSelectedStep] = useState<number>(0);

  // Meditation mode
  const [meditatingVerse, setMeditatingVerse] = useState<HealingVerse | null>(null);

  // Verse filter
  const [verseThemeFilter, setVerseThemeFilter] = useState("All");

  // Resource type filter
  const [resourceTypeFilter, setResourceTypeFilter] = useState("All");

  // Testimony expanded
  const [expandedTestimony, setExpandedTestimony] = useState<string | null>(null);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem("vine_healing_saved", JSON.stringify([...savedVerses]));
    } catch {}
  }, [savedVerses]);

  useEffect(() => {
    try {
      localStorage.setItem("vine_healing_paths_started", JSON.stringify([...startedPaths]));
    } catch {}
  }, [startedPaths]);

  useEffect(() => {
    try {
      localStorage.setItem("vine_healing_liked", JSON.stringify([...likedVerses]));
    } catch {}
  }, [likedVerses]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  function toggleSaveVerse(id: string) {
    setSavedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleLikeVerse(id: string) {
    setLikedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function startPath(id: string) {
    setStartedPaths((prev) => new Set([...prev, id]));
  }

  function openPath(path: HealingPath) {
    setSelectedPath(path);
    setSelectedStep(0);
  }

  // ── Filtered data ────────────────────────────────────────────────────────────

  const filteredVerses =
    verseThemeFilter === "All"
      ? HEALING_VERSES
      : HEALING_VERSES.filter((v) => v.theme === verseThemeFilter);

  const filteredResources =
    resourceTypeFilter === "All"
      ? RESOURCES
      : RESOURCES.filter((r) => r.type === resourceTypeFilter);

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        backgroundColor: "#07070F",
        minHeight: "100vh",
        color: "#F2F2F8",
        fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
        paddingBottom: "80px",
      }}
    >
      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(160deg, #0E0E1E 0%, #07070F 60%)",
          borderBottom: "1px solid #1E1E32",
          padding: "48px 24px 36px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(107,79,187,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(107,79,187,0.3), rgba(0,255,136,0.15))",
            border: "1px solid rgba(107,79,187,0.4)",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          🕊️
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #F2F2F8 30%, #6B4FBB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 12px",
            letterSpacing: "-0.5px",
          }}
        >
          Healing & Wholeness
        </h1>
        <p style={{ color: "#9898B3", fontSize: "17px", margin: 0, fontStyle: "italic" }}>
          Walking toward wholeness in Christ
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "20px 24px 0",
          maxWidth: "900px",
          margin: "0 auto",
          overflowX: "auto",
        }}
      >
        {(
          [
            { key: "paths", label: "Healing Paths", icon: "🗺️" },
            { key: "scriptures", label: "Scriptures", icon: "📖" },
            { key: "testimonies", label: "Testimonies", icon: "✨" },
            { key: "resources", label: "Resources", icon: "📚" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: activeTab === tab.key ? "1px solid #6B4FBB" : "1px solid #1E1E32",
              background:
                activeTab === tab.key
                  ? "linear-gradient(135deg, rgba(107,79,187,0.25), rgba(0,255,136,0.08))"
                  : "transparent",
              color: activeTab === tab.key ? "#F2F2F8" : "#9898B3",
              fontWeight: activeTab === tab.key ? 600 : 400,
              fontSize: "14px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 24px 0" }}>
        {/* ── Healing Paths ─────────────────────────────────────────────────── */}
        {activeTab === "paths" && (
          <div>
            <p style={{ color: "#9898B3", fontSize: "14px", marginTop: 0, marginBottom: "24px" }}>
              Structured journeys for deep, lasting healing. Each path includes Scripture, reflection, prayer, and
              practical action steps.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {HEALING_PATHS.map((path) => {
                const started = startedPaths.has(path.id);
                return (
                  <div
                    key={path.id}
                    style={{
                      backgroundColor: "#12121F",
                      border: started ? "1px solid rgba(0,255,136,0.35)" : "1px solid #1E1E32",
                      borderRadius: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      transition: "transform 0.15s, border-color 0.15s",
                      position: "relative",
                    }}
                    onClick={() => openPath(path)}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    {started && (
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          backgroundColor: "rgba(0,255,136,0.15)",
                          border: "1px solid rgba(0,255,136,0.4)",
                          borderRadius: "20px",
                          padding: "2px 8px",
                          fontSize: "11px",
                          color: "#00FF88",
                          fontWeight: 600,
                        }}
                      >
                        In Progress
                      </div>
                    )}
                    <div style={{ fontSize: "30px", marginBottom: "12px" }}>{path.icon}</div>
                    <h3
                      style={{
                        margin: "0 0 8px",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#F2F2F8",
                        paddingRight: started ? "60px" : "0",
                      }}
                    >
                      {path.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 16px",
                        fontSize: "13px",
                        color: "#9898B3",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {path.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "rgba(107,79,187,0.2)",
                          border: "1px solid rgba(107,79,187,0.35)",
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: "#A889F0",
                        }}
                      >
                        {path.theme}
                      </span>
                      <span
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid #1E1E32",
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: "#9898B3",
                        }}
                      >
                        {path.stepCount} steps
                      </span>
                      <span
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid #1E1E32",
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: "#9898B3",
                        }}
                      >
                        {path.duration}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startPath(path.id);
                        openPath(path);
                      }}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        background: started
                          ? "rgba(0,255,136,0.12)"
                          : "linear-gradient(135deg, #6B4FBB, #4F3A8A)",
                        color: started ? "#00FF88" : "#F2F2F8",
                        fontWeight: 600,
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      {started ? "Continue Journey" : "Begin Journey"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Healing Scriptures ────────────────────────────────────────────── */}
        {activeTab === "scriptures" && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <p style={{ color: "#9898B3", fontSize: "14px", margin: 0 }}>
                {savedVerses.size > 0 ? `${savedVerses.size} verse${savedVerses.size > 1 ? "s" : ""} saved` : "20 curated healing scriptures"}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {VERSE_THEMES.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setVerseThemeFilter(theme)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      border:
                        verseThemeFilter === theme ? "1px solid #6B4FBB" : "1px solid #1E1E32",
                      background: verseThemeFilter === theme ? "rgba(107,79,187,0.2)" : "transparent",
                      color: verseThemeFilter === theme ? "#A889F0" : "#9898B3",
                      fontSize: "12px",
                      cursor: "pointer",
                      fontWeight: verseThemeFilter === theme ? 600 : 400,
                    }}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filteredVerses.map((verse) => {
                const saved = savedVerses.has(verse.id);
                const liked = likedVerses.has(verse.id);
                const count = verse.likes + (liked ? 1 : 0);
                return (
                  <div
                    key={verse.id}
                    style={{
                      backgroundColor: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "rgba(107,79,187,0.18)",
                          border: "1px solid rgba(107,79,187,0.3)",
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: "#A889F0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {verse.theme}
                      </span>
                      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                        <button
                          onClick={() => setMeditatingVerse(verse)}
                          title="Meditate on this verse"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid #1E1E32",
                            borderRadius: "8px",
                            padding: "6px 10px",
                            color: "#9898B3",
                            fontSize: "13px",
                            cursor: "pointer",
                          }}
                        >
                          🧘
                        </button>
                        <button
                          onClick={() => toggleSaveVerse(verse.id)}
                          title={saved ? "Unsave" : "Save verse"}
                          style={{
                            background: saved ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.05)",
                            border: saved ? "1px solid rgba(0,255,136,0.35)" : "1px solid #1E1E32",
                            borderRadius: "8px",
                            padding: "6px 10px",
                            color: saved ? "#00FF88" : "#9898B3",
                            fontSize: "13px",
                            cursor: "pointer",
                          }}
                        >
                          {saved ? "★" : "☆"}
                        </button>
                      </div>
                    </div>
                    <blockquote
                      style={{
                        margin: "0 0 12px",
                        paddingLeft: "16px",
                        borderLeft: "3px solid rgba(107,79,187,0.5)",
                        fontStyle: "italic",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#F2F2F8",
                      }}
                    >
                      {verse.verse}
                    </blockquote>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "13px", color: "#6B4FBB", fontWeight: 600 }}>
                        — {verse.reference}
                      </span>
                      <button
                        onClick={() => toggleLikeVerse(verse.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          background: "transparent",
                          border: "none",
                          color: liked ? "#E879A0" : "#9898B3",
                          fontSize: "13px",
                          cursor: "pointer",
                          padding: "4px 8px",
                          borderRadius: "8px",
                        }}
                      >
                        {liked ? "♥" : "♡"} {count.toLocaleString()}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Testimonies ───────────────────────────────────────────────────── */}
        {activeTab === "testimonies" && (
          <div>
            <p style={{ color: "#9898B3", fontSize: "14px", marginTop: 0, marginBottom: "24px" }}>
              Real stories of healing from members of the Vine community.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {TESTIMONIES.map((testimony) => {
                const expanded = expandedTestimony === testimony.id;
                return (
                  <div
                    key={testimony.id}
                    style={{
                      backgroundColor: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #6B4FBB, #4F3A8A)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          flexShrink: 0,
                          color: "#F2F2F8",
                          fontWeight: 700,
                        }}
                      >
                        {testimony.name[0]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 700, fontSize: "15px", color: "#F2F2F8" }}>
                            {testimony.name}
                          </span>
                          <span style={{ color: "#9898B3", fontSize: "13px" }}>{testimony.age}</span>
                          <span
                            style={{
                              backgroundColor: "rgba(0,255,136,0.12)",
                              border: "1px solid rgba(0,255,136,0.25)",
                              borderRadius: "20px",
                              padding: "2px 8px",
                              fontSize: "11px",
                              color: "#00FF88",
                            }}
                          >
                            {testimony.typeOfHealing}
                          </span>
                        </div>
                        <h3
                          style={{
                            margin: "6px 0 0",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#F2F2F8",
                          }}
                        >
                          {testimony.title}
                        </h3>
                      </div>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.75,
                          color: "#C8C8D8",
                          margin: 0,
                        }}
                      >
                        {testimony.story[0]}
                      </p>
                      {expanded && (
                        <>
                          {testimony.story.slice(1).map((para, i) => (
                            <p
                              key={i}
                              style={{
                                fontSize: "14px",
                                lineHeight: 1.75,
                                color: "#C8C8D8",
                                marginTop: "14px",
                                marginBottom: 0,
                              }}
                            >
                              {para}
                            </p>
                          ))}
                        </>
                      )}
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(107,79,187,0.1)",
                        border: "1px solid rgba(107,79,187,0.2)",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        marginBottom: "16px",
                      }}
                    >
                      <p
                        style={{
                          fontStyle: "italic",
                          fontSize: "13px",
                          color: "#C8C8D8",
                          margin: "0 0 6px",
                        }}
                      >
                        "{testimony.verse}"
                      </p>
                      <span style={{ fontSize: "12px", color: "#6B4FBB", fontWeight: 600 }}>
                        — {testimony.verseRef}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        setExpandedTestimony(expanded ? null : testimony.id)
                      }
                      style={{
                        background: "transparent",
                        border: "1px solid #1E1E32",
                        borderRadius: "8px",
                        padding: "8px 16px",
                        color: "#9898B3",
                        fontSize: "13px",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      {expanded ? "Show less" : "Read full story →"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Resources ─────────────────────────────────────────────────────── */}
        {activeTab === "resources" && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <p style={{ color: "#9898B3", fontSize: "14px", margin: 0 }}>
                Books, programs, and crisis support
              </p>
              <div style={{ display: "flex", gap: "6px" }}>
                {RESOURCE_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setResourceTypeFilter(type)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      border:
                        resourceTypeFilter === type ? "1px solid #6B4FBB" : "1px solid #1E1E32",
                      background:
                        resourceTypeFilter === type ? "rgba(107,79,187,0.2)" : "transparent",
                      color: resourceTypeFilter === type ? "#A889F0" : "#9898B3",
                      fontSize: "12px",
                      cursor: "pointer",
                      fontWeight: resourceTypeFilter === type ? 600 : 400,
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "14px",
              }}
            >
              {filteredResources.map((resource) => {
                const typeColors: Record<string, { bg: string; border: string; text: string }> = {
                  Book: { bg: "rgba(107,79,187,0.15)", border: "rgba(107,79,187,0.3)", text: "#A889F0" },
                  Program: { bg: "rgba(0,255,136,0.12)", border: "rgba(0,255,136,0.25)", text: "#00FF88" },
                  Hotline: { bg: "rgba(232,79,120,0.15)", border: "rgba(232,79,120,0.3)", text: "#F07090" },
                };
                const colors = typeColors[resource.type] ?? typeColors.Book;
                return (
                  <div
                    key={resource.id}
                    style={{
                      backgroundColor: "#12121F",
                      border: resource.type === "Hotline" ? "1px solid rgba(232,79,120,0.3)" : "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          backgroundColor: colors.bg,
                          border: `1px solid ${colors.border}`,
                          borderRadius: "20px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: colors.text,
                          fontWeight: 600,
                        }}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          margin: "0 0 4px",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#F2F2F8",
                        }}
                      >
                        {resource.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: "12px", color: "#6B4FBB", fontWeight: 600 }}>
                        {resource.authorOrg}
                      </p>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#9898B3",
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {resource.description}
                    </p>
                    {resource.type === "Hotline" ? (
                      <div
                        style={{
                          backgroundColor: "rgba(232,79,120,0.1)",
                          border: "1px solid rgba(232,79,120,0.2)",
                          borderRadius: "8px",
                          padding: "10px 12px",
                          fontSize: "13px",
                          color: "#F07090",
                          fontWeight: 600,
                        }}
                      >
                        {resource.title === "Crisis Text Line"
                          ? "Text HOME to 741741"
                          : "Call or text 988"}
                      </div>
                    ) : (
                      <a
                        href={resource.link}
                        style={{
                          display: "block",
                          textAlign: "center",
                          padding: "9px",
                          borderRadius: "8px",
                          background: "rgba(107,79,187,0.15)",
                          border: "1px solid rgba(107,79,187,0.3)",
                          color: "#A889F0",
                          fontSize: "13px",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Crisis Banner ────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#0E0A14",
          borderTop: "1px solid rgba(232,79,120,0.35)",
          padding: "12px 24px",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "13px", color: "#F07090", fontWeight: 700 }}>
          If you are in crisis, please reach out:
        </span>
        <span style={{ fontSize: "13px", color: "#C8C8D8" }}>
          Crisis Text Line: <strong style={{ color: "#F2F2F8" }}>Text HOME to 741741</strong>
        </span>
        <span style={{ color: "#9898B3", fontSize: "13px" }}>|</span>
        <span style={{ fontSize: "13px", color: "#C8C8D8" }}>
          Suicide Prevention Lifeline: <strong style={{ color: "#F2F2F8" }}>988</strong>
        </span>
      </div>

      {/* ── Path Modal ───────────────────────────────────────────────────────── */}
      {selectedPath && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedPath(null)}
        >
          <div
            style={{
              backgroundColor: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "680px",
              maxHeight: "85vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              style={{
                padding: "24px 24px 0",
                borderBottom: "1px solid #1E1E32",
                paddingBottom: "16px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <div style={{ fontSize: "28px", marginBottom: "6px" }}>{selectedPath.icon}</div>
                  <h2 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: 700, color: "#F2F2F8" }}>
                    {selectedPath.title}
                  </h2>
                  <p style={{ margin: 0, fontSize: "13px", color: "#9898B3" }}>
                    {selectedPath.theme} · {selectedPath.stepCount} steps · {selectedPath.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPath(null)}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid #1E1E32",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    color: "#9898B3",
                    fontSize: "18px",
                    cursor: "pointer",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ×
                </button>
              </div>
              {/* Step nav */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {selectedPath.steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedStep(i)}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: selectedStep === i ? "2px solid #6B4FBB" : "1px solid #1E1E32",
                      background:
                        selectedStep === i
                          ? "linear-gradient(135deg, #6B4FBB, #4F3A8A)"
                          : "rgba(255,255,255,0.05)",
                      color: selectedStep === i ? "#F2F2F8" : "#9898B3",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Step content */}
            <div style={{ padding: "24px", overflowY: "auto", flex: 1 }}>
              {selectedPath.steps[selectedStep] && (() => {
                const step = selectedPath.steps[selectedStep];
                return (
                  <div>
                    <h3 style={{ margin: "0 0 16px", fontSize: "18px", fontWeight: 700, color: "#F2F2F8" }}>
                      Step {selectedStep + 1}: {step.stepTitle}
                    </h3>
                    <div
                      style={{
                        backgroundColor: "rgba(107,79,187,0.1)",
                        border: "1px solid rgba(107,79,187,0.2)",
                        borderRadius: "10px",
                        padding: "14px 16px",
                        marginBottom: "16px",
                      }}
                    >
                      <p style={{ margin: 0, fontStyle: "italic", fontSize: "13px", color: "#C8C8D8", lineHeight: 1.65 }}>
                        {step.scripture}
                      </p>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <h4 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 700, color: "#A889F0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Reflection
                      </h4>
                      <p style={{ margin: 0, fontSize: "14px", color: "#C8C8D8", lineHeight: 1.7 }}>
                        {step.reflection}
                      </p>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <h4 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 700, color: "#A889F0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Prayer
                      </h4>
                      <p style={{ margin: 0, fontSize: "14px", color: "#C8C8D8", lineHeight: 1.7, fontStyle: "italic" }}>
                        {step.prayer}
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(0,255,136,0.07)",
                        border: "1px solid rgba(0,255,136,0.2)",
                        borderRadius: "10px",
                        padding: "14px 16px",
                      }}
                    >
                      <h4 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Action Step
                      </h4>
                      <p style={{ margin: 0, fontSize: "14px", color: "#C8C8D8", lineHeight: 1.7 }}>
                        {step.action}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Modal footer nav */}
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid #1E1E32",
                display: "flex",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => setSelectedStep((s) => Math.max(0, s - 1))}
                disabled={selectedStep === 0}
                style={{
                  padding: "9px 20px",
                  borderRadius: "8px",
                  border: "1px solid #1E1E32",
                  background: "transparent",
                  color: selectedStep === 0 ? "#3A3A5C" : "#9898B3",
                  cursor: selectedStep === 0 ? "default" : "pointer",
                  fontSize: "13px",
                }}
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  startPath(selectedPath.id);
                  setSelectedStep((s) => Math.min(selectedPath.steps.length - 1, s + 1));
                }}
                disabled={selectedStep === selectedPath.steps.length - 1}
                style={{
                  padding: "9px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    selectedStep === selectedPath.steps.length - 1
                      ? "rgba(107,79,187,0.2)"
                      : "linear-gradient(135deg, #6B4FBB, #4F3A8A)",
                  color: selectedStep === selectedPath.steps.length - 1 ? "#3A3A5C" : "#F2F2F8",
                  cursor:
                    selectedStep === selectedPath.steps.length - 1 ? "default" : "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Meditation Overlay ───────────────────────────────────────────────── */}
      {meditatingVerse && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, #0F0820 0%, #07070F 60%, #000000 100%)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 32px",
            textAlign: "center",
          }}
          onClick={() => setMeditatingVerse(null)}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(107,79,187,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            Meditation Mode · Tap anywhere to close
          </p>
          <div
            style={{
              position: "relative",
              maxWidth: "560px",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "24px",
                opacity: 0.7,
              }}
            >
              ✦
            </div>
            <blockquote
              style={{
                margin: "0 0 28px",
                fontSize: "clamp(18px, 3.5vw, 26px)",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "#F2F2F8",
                fontWeight: 300,
                letterSpacing: "0.3px",
              }}
            >
              "{meditatingVerse.verse}"
            </blockquote>
            <p
              style={{
                margin: "0 0 32px",
                fontSize: "16px",
                color: "#A889F0",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              — {meditatingVerse.reference}
            </p>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(107,79,187,0.2)",
                border: "1px solid rgba(107,79,187,0.35)",
                borderRadius: "20px",
                padding: "5px 14px",
                fontSize: "13px",
                color: "#9898B3",
              }}
            >
              {meditatingVerse.theme}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
