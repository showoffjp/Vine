"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christianhealing_entries";

interface HLGEntry {
  id: string;
  date: string;
  whatNeedsHealing: string;
  howImPraying: string;
  whatGodIsShowing: string;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "Exodus 15:26 — Yahweh Rapha",
    title: "Rapha — God Is Our Healer: The Hebrew Foundation",
    paragraphs: [
      "The first time God reveals a name that names his healing character is in Exodus 15:26, immediately after the exodus: &ldquo;I am the LORD, your healer&rdquo; — in Hebrew, Ani Yahweh Rophe&rsquo;cha, or Yahweh-Rapha. The word rapha (רָפָא) means to heal, to make whole, to restore — and it appears over sixty times in the Old Testament, describing the healing of bodies, the healing of land, the healing of the brokenhearted, and the healing of the fractured relationship between God and his people. From its first appearance in Genesis 20:17 (Abraham praying for Abimelech&rsquo;s healing) to the great servant songs of Isaiah (&ldquo;by his wounds we are healed&rdquo; — Is 53:5), rapha is one of the most theologically freighted words in the Hebrew Bible.",
      "The context of Exodus 15:26 is significant: God reveals himself as healer not in a gentle garden moment but in the wilderness, after the Red Sea crossing, at the bitter water of Marah. The people have experienced a miracle and are now thirsty and complaining; God makes the bitter water sweet and immediately announces his name: the Healer. The revelation comes at the point of need, not before it. And the condition attached — &ldquo;if you diligently listen to the voice of the LORD your God&rdquo; — is not a threat but an invitation: healing and relationship are inseparable. Yahweh-Rapha is not a divine vending machine for healing but a God whose healing flows from and within covenant relationship.",
      "The breadth of rapha in the Old Testament resists any reduction of &ldquo;healing&rdquo; to the merely physical. Psalm 147:3 says God &ldquo;heals the brokenhearted and binds up their wounds&rdquo; — emotional and relational healing. Hosea 6:1 speaks of being torn so that God may heal — spiritual restoration after judgment. Isaiah 53:5 &ldquo;by his wounds we are healed&rdquo; is ultimately about the healing of sin&rsquo;s rupture of the divine-human relationship. The God who heals bodies is the same God who heals hearts, communities, and the cosmos itself — and the New Testament&rsquo;s healing accounts are set within this full-spectrum understanding of rapha.",
    ],
    callout: {
      label: "The name",
      text: "Yahweh-Rapha (Exodus 15:26): God reveals himself as the Healer not in easy moments but in the wilderness. Healing is inseparable from relationship — it flows from covenant, not from formula.",
    },
  },
  {
    badge: "The Kingdom of God",
    title: "Jesus&rsquo; Healing Ministry — Sign and Announcement of the Kingdom",
    paragraphs: [
      "The Gospels record more healing accounts than any other type of miracle, and the pattern is consistent: Jesus heals not primarily as an act of compassion (though compassion is present) but as a sign of what the kingdom of God looks like when it arrives. When John&rsquo;s disciples ask &ldquo;Are you the one who is to come?&rdquo; Jesus responds by listing healings: &ldquo;The blind receive their sight and the lame walk, lepers are cleansed and the deaf hear, and the dead are raised up&rdquo; (Matt 11:5). These are signs from Isaiah&rsquo;s kingdom promises (Is 35:5-6, 61:1-2), deliberately invoked to announce: the kingdom is here.",
      "This means that Jesus&rsquo; healings are not primarily about the individuals healed — though they are that — but about what they signify. Each healing is a down payment on the renewed creation that the kingdom ultimately promises: a world without sickness, without brokenness, without death. The healings are enacted prophecy, showing in particular what is coming universally. When Jesus heals a leper, he is not only restoring a man to social community; he is showing what the world looks like when God&rsquo;s reign is fully established. The particular healing points beyond itself to the cosmic restoration that the new creation will complete.",
      "This kingdom framework prevents two errors in thinking about healing. The first error is to treat healing as automatic — if you have enough faith, you will always be healed — because the kingdom healings are signs of what is coming, not the full arrival of what is promised. We live between the inauguration and the consummation; healings happen now as previews, not as guarantees. The second error is to dismiss healing as exceptional — a first-century phenomenon that ceased with the apostles — because the signs of the kingdom are still meaningful signs of what God intends. The kingdom is still coming; the healing ministry of Jesus still announces its arrival.",
    ],
    callout: {
      label: "The framework",
      text: "Jesus&rsquo; healings are not primarily demonstrations of compassion but signs of the kingdom — enacted prophecy of the renewed creation that God is bringing. This prevents both over-claiming and under-expecting.",
    },
  },
  {
    badge: "Mark 2:1-12 — The Paralytic",
    title: "Forgiveness and Healing — Sin and Sickness in the Same Visit",
    paragraphs: [
      "The healing of the paralytic in Mark 2:1-12 is among the most theologically provocative of Jesus&rsquo; healings because it connects forgiveness and physical healing in a way that has been misunderstood in both directions. When the paralytic is lowered through the roof, Jesus does not immediately heal him; he says &ldquo;Son, your sins are forgiven&rdquo; (v. 5). Only after the scribes object — who can forgive sins but God? — does Jesus say &ldquo;that you may know that the Son of Man has authority on earth to forgive sins — he said to the paralytic, &lsquo;I say to you, rise, pick up your bed, and go home&rsquo;&rdquo; (v. 10-11).",
      "The sequence is not meant to imply that the paralysis was caused by his sins — Jesus explicitly rejects that formula elsewhere (John 9:3). Rather, the sequence reveals something about the scope of Jesus&rsquo; authority and the connection between the two realities of human brokenness: the person who is sick in body and the person who is broken in their relationship with God are both objects of Jesus&rsquo; healing intention. The physical healing is the sign (&ldquo;so that you may know&rdquo;) of the deeper authority being claimed. The forgiveness is primary; the physical healing demonstrates that the forgiver is who he claims to be.",
      "Pastorally, this text protects against two dangerous readings. It protects against the prosperity-gospel reading that makes all sickness a sign of unconfessed sin — Jesus does not make that connection here or elsewhere. And it protects against the over-medicalized reading that treats body and soul as entirely separate systems with no mutual influence. The whole person — body, soul, relationship with God — is the object of Jesus&rsquo; healing intention. The wisest approach to healing prayer holds body, soul, and relational dimensions together, not because sickness is always caused by sin but because healing in the biblical sense is always more than physical.",
    ],
  },
  {
    badge: "James 5:13-16 — Elders, Oil, Prayer, and Confession",
    title: "The James 5 Pattern — Community, Anointing, and Confession in Healing",
    paragraphs: [
      "James 5:13-16 gives the New Testament&rsquo;s most detailed instruction on healing prayer: &ldquo;Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven. Therefore, confess your sins to one another and pray for one another, that you may be healed&rdquo; (vv. 14-16). Several features of this text are theologically significant and pastorally underappreciated.",
      "First, the healing is embedded in community: it is the elders who are called, not a solitary healer; it is mutual confession and prayer that the text describes as the broader context. Healing in the New Testament is characteristically communal rather than individualistic — it happens within the body of Christ, not as a private transaction between the sick person and God. Second, the oil is &ldquo;in the name of the Lord&rdquo; — it is sacramental action, not a medical treatment, though in the ancient world the two were not sharply distinguished. Third, the &ldquo;prayer of faith&rdquo; is the elders&rsquo; prayer, not the sick person&rsquo;s — the healing is not dependent on the sick person&rsquo;s ability to muster sufficient faith.",
      "Fourth, and most striking: the text links healing and forgiveness, and then calls for mutual confession as the context of healing prayer. This is not the prosperity-gospel logic that sickness is caused by sin; it is the holistic recognition that the healed life is the forgiven life, that the body and the soul are not separable systems, and that honest community — where confession happens — is the environment in which God&rsquo;s healing works most freely. James 5 is a vision of the church as a community of mutual care, honest vulnerability, and expectant prayer for healing — none of which can be reduced to a technique.",
    ],
    callout: {
      label: "The pattern",
      text: "James 5 places healing prayer within community, mutual confession, and elder-led anointing — not as private transaction between sick person and God. The healing is communal before it is individual.",
    },
  },
  {
    badge: "Cessationism vs. Continuationism",
    title: "Does God Still Heal Today? — The Debate, Both Sides Charitably",
    paragraphs: [
      "The theological debate over whether miraculous healing continued after the apostolic age — cessationism — or continues throughout the church age — continuationism — is among the most practically significant in Christian theology. Cessationists argue that the miraculous gifts, including healing, were given for the apostolic period to authenticate the gospel and the New Testament canon, and that their purpose was fulfilled when that canon was complete. They point to the closing of the canon, the shift in New Testament tone from Acts to the Epistles, and the increasingly cautious approach to miraculous claims in later apostolic letters (Paul&rsquo;s acknowledgment in 2 Tim 4:20 that he left Trophimus sick, Timothy&rsquo;s stomach ailment, Paul&rsquo;s own thorn).",
      "Continuationists argue that the gifts were given for the whole church age, that there is no biblical text that explicitly teaches their cessation, and that the experience of the majority of Christians throughout history and across the global church — especially in the Global South — includes accounts of miraculous healing that cannot be explained by cessationist categories. They point to Jesus&rsquo; commission (&ldquo;greater works than these will he do&rdquo; — John 14:12), the James 5 instruction to the church, and the ongoing work of the Spirit through the history of the church.",
      "Both positions are held by serious, biblically faithful Christians, and the debate deserves charitable engagement. What is not disputed is that God is the Healer (Yahweh-Rapha), that Jesus healed as a sign of the kingdom, that the church is called to pray for the sick (James 5), and that God is sovereign over whether and how healing comes. The disagreement is about mechanism and expectation, not about whether God heals or whether prayer for healing is appropriate. Both cessationists and continuationists should be praying for the sick — they differ on what to expect when they do.",
    ],
  },
  {
    badge: "Paul&rsquo;s Thorn / Trophimus / Timothy",
    title: "The Mystery of Unanswered Healing Prayer — Paul&rsquo;s Thorn and Its Company",
    paragraphs: [
      "The New Testament is honest about unanswered healing prayer in a way that is pastorally essential and theologically sobering. Three texts stand out. Paul in 2 Corinthians 12 describes a &ldquo;thorn in the flesh,&rdquo; a &ldquo;messenger of Satan to harass me,&rdquo; for which he prayed three times that it would be removed. God&rsquo;s answer was not healing but a promise: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness&rdquo; (v. 9). The thorn remained; the grace was sufficient. In 2 Timothy 4:20, Paul mentions almost in passing that he &ldquo;left Trophimus, who was ill, at Miletus&rdquo; — Paul, who had been an instrument of extraordinary healings (Acts 19:11-12), left a fellow worker ill and did not heal him. And in 1 Timothy 5:23, Paul advises Timothy to use a little wine for his stomach — a practical medical suggestion, not a healing prayer.",
      "These three texts serve as a crucial check on any theology of healing that makes healing the guaranteed outcome of sufficient faith or proper technique. The apostle Paul, who healed others, was himself not healed; left a sick colleague sick; and offered medical advice to a third. The God who heals is the same God who sometimes says &ldquo;my grace is sufficient&rdquo; — and that answer is not a lesser answer, not a failure of faith, not evidence of God&rsquo;s absence. It is a different kind of healing: the healing of pride, the perfecting of grace in weakness, the formation of a character that can bear suffering without losing faith.",
      "The mystery of unanswered healing prayer is one of the places where honest theology is most necessary and most costly. Easy answers — it was not God&rsquo;s will, you did not have enough faith, there was unconfessed sin — fail both the text and the sufferer. The honest answer is that we do not always know why healing comes sometimes and not other times, why some prayers are answered with restoration and others with Paul&rsquo;s answer, why Trophimus stayed sick while people were healed by touching Paul&rsquo;s handkerchief. The mystery is real, and sitting with it is more faithful than resolving it prematurely.",
    ],
    callout: {
      label: "The mystery",
      text: "Paul was not healed of his thorn, left Trophimus sick at Miletus, and prescribed wine for Timothy&rsquo;s stomach. The apostle of extraordinary healings also knew unanswered healing prayer — and the grace that is sufficient in its absence.",
    },
  },
  {
    badge: "2 Corinthians 12 — Power in Weakness",
    title: "Healing and Suffering — Not Opposed but Held in Tension",
    paragraphs: [
      "The New Testament holds healing and suffering in creative tension that Western Christianity has often struggled to maintain. The same Paul who prays for healing (Phil 2:27 — Epaphroditus &ldquo;nearly died,&rdquo; but God had mercy on him and restored him) also speaks of filling up what is lacking in Christ&rsquo;s afflictions (Col 1:24), of sharing in his suffering (Phil 3:10), of boasting in his weaknesses &ldquo;so that the power of Christ may rest upon me&rdquo; (2 Cor 12:9). These are not contradictions; they are the two movements of a life lived in the tension between the kingdom that has come and the kingdom that is not yet fully here.",
      "Healing prayer and the acceptance of suffering are not opponents in the Christian life; they are companions. The person who prays fervently for healing is not faithless when they also say &ldquo;nevertheless, not as I will&rdquo; — that is the Gethsemane pattern, the pattern of Jesus himself. The acceptance of suffering is not the resignation of one who has given up on prayer; it is the trust of one who has prayed and is now receiving whatever God gives, including the possibility that the suffering itself is the site of grace. Romans 8:18-25&rsquo;s vision of the whole creation groaning in labor pains holds healing and suffering together: the groaning is real, and so is the hope of the redemption of our bodies.",
      "The pastoral implication is that the church should be simultaneously a community of fervent healing prayer and a community equipped to accompany those who are not healed — not by explaining why, but by being present with. The person who prays for healing and is not healed needs neither the false comfort of easy explanation nor the implicit judgment that unanswered prayer represents personal failure. They need the community of James 5: present, praying, confessing, and trusting that the God who heals is also the God whose grace is sufficient in weakness.",
    ],
  },
  {
    badge: "Inner Healing",
    title: "Inner Healing and Emotional Healing — Genuine, Not Secondary",
    paragraphs: [
      "The Christian tradition has, in recent decades, recovered the reality of inner healing — the healing of emotional wounds, traumatic memories, distorted self-perception, and relational patterns rooted in past injury — as a genuine dimension of the healing ministry of Christ. Early pioneers like Agnes Sanford and Francis MacNutt developed frameworks for praying into specific memories and emotional wounds, asking Jesus to be present in past events in ways that bring healing to the person&rsquo;s present emotional and psychological life. While the specific techniques vary and some approaches have been criticized, the underlying theological claim is sound: Jesus is Lord of time as well as space, and his healing work is not limited to the physical.",
      "The scriptural foundation for inner healing is broad: the psalmists consistently bring emotional states — grief, shame, fear, anger, despair — before God in prayer and find something shifting in the bringing. The psalms of lament are not medical prescriptions but they are prayer forms for emotional healing, giving the sufferer language for what cannot otherwise be named and bringing the unnamed suffering into the presence of God. Psalm 147:3, &ldquo;He heals the brokenhearted and binds up their wounds,&rdquo; is not primarily about physical wounds but about the emotional devastation that the exile community had experienced.",
      "Inner healing and psychological therapy are not identical but they are complementary. The person who has experienced childhood trauma, relational wounds, or emotional devastation needs both: the healing prayer that brings the wound into the presence of Jesus, and the therapeutic process that works through the cognitive and relational dimensions of the wound. Neither replaces the other. The church that dismisses inner healing as unbiblical is abandoning a significant dimension of the healing ministry of Christ; the healer who thinks prayer replaces therapy is misunderstanding both. The whole person is wounded; the whole person is the object of healing.",
    ],
    callout: {
      label: "The scope",
      text: "Healing in the biblical sense is not limited to the physical. Inner healing — of emotions, memories, relational wounds, distorted self-perception — is genuine healing, supported by Scripture and the witness of the tradition.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Naming What Needs Healing — The First Act of Healing Prayer",
    summary:
      "Many people struggle to pray for healing because they have not named specifically what needs healing — the specific physical condition, the specific emotional wound, the specific relational fracture. This practice develops the discipline of specific naming.",
    steps: [
      "Sit quietly and ask the Spirit: &ldquo;What needs healing in me right now?&rdquo; Wait. The answer may be the obvious physical thing, or it may be something deeper: a wound of shame, a relational fracture, a grief that has not been processed, a pattern of self-protection that has become destructive. Write down what surfaces.",
      "For each thing named, get as specific as possible: not &ldquo;my relationship with my father&rdquo; but &ldquo;the specific wound from the conversation in 1998 when he said [specific words] and I felt [specific feeling] and have believed [specific lie] ever since.&rdquo; Specificity is not required for prayer to work, but it opens the wound to light in ways that vague naming cannot.",
      "Name the wound in prayer: &ldquo;Lord, I bring you this specific thing. I have been carrying it as [describe how it has been carried — as shame, as self-protection, as physical pain, as numbness]. I am asking you to touch it.&rdquo; You do not need to know how the healing should come or what it should look like; the naming and the asking are your part.",
      "Write the named things in your journal. Return to them regularly and note what, if anything, has shifted. Healing is often gradual rather than instantaneous; the journal tracks the movement that would otherwise go unnoticed.",
    ],
    anchor: "Psalm 139:23-24 — Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting.",
  },
  {
    number: "02",
    title: "The James 5 Practice — Bringing Healing Into Community",
    summary:
      "James 5 places healing prayer in community — elders, mutual confession, shared prayer. This practice recovers that communal dimension, which Western individualism has largely abandoned.",
    steps: [
      "Identify one or two people in your community — a pastor, an elder, a spiritually mature friend — whom you could ask to pray with you for healing. The James 5 pattern does not require a special gift or office; it requires people who take prayer seriously and will pray honestly.",
      "Before the prayer time, practice the James 5 confession dimension: is there anything in your relationship with God or others that you have been withholding, that needs to be brought into the light? Confession is not a prerequisite to healing prayer in the sense that God withholds healing until you confess; it is the practice of honest vulnerability that creates the spiritual environment in which healing prayer happens.",
      "In the prayer time, describe what needs healing specifically and honestly. Let the praying community ask the Spirit to come and heal — not to perform a technique but to invite the presence of the Healer. Anoint with oil if it is meaningful in your tradition. The oil is not magical; it is sacramental — a physical act that embodies the spiritual reality of bringing the sick person under God&rsquo;s care.",
      "After the prayer, give the results to God rather than to your analysis of whether the prayer &ldquo;worked.&rdquo; Continue to pray, continue to seek appropriate medical care, continue to bring the need to God. The James 5 pattern is repeated, communal, and accompanied by ongoing faith — not a one-time transaction.",
    ],
    anchor: "James 5:14-16 — Let him call for the elders of the church, and let them pray over him... and the prayer of faith will save the one who is sick.",
  },
  {
    number: "03",
    title: "Praying Into Specific Memories — Inner Healing Practice",
    summary:
      "An approach to inner healing that brings specific painful memories into the presence of Jesus, asking him to be present in what happened and to speak the truth that the event distorted.",
    steps: [
      "This practice should be done slowly and, for deeply traumatic memories, ideally with a trained inner healing prayer minister or therapist present. Begin with a longer time of prayer and worship, inviting the presence of the Holy Spirit before addressing the specific memory.",
      "Bring a specific memory to mind — a moment of wound, shame, abandonment, abuse, or loss. Describe it to God in prayer: what happened, what you felt, what you believed about yourself or God as a result. Be as specific and honest as you can. Do not rush through the pain to get to the healing.",
      "Ask Jesus: &ldquo;Where were you in this moment? What would you say to me — the person I was then — in this specific place of pain?&rdquo; Wait. Sometimes an impression comes; sometimes it is a Scripture; sometimes it is simply the sense of his presence in the room. The healing is not in the technique but in the encounter with the One who was and is present.",
      "If a specific lie was formed in the wound — &ldquo;I am worthless,&rdquo; &ldquo;I am abandoned,&rdquo; &ldquo;I am not safe with men/women,&rdquo; &ldquo;God cannot be trusted&rdquo; — bring that lie explicitly to prayer and ask Jesus to speak the truth that replaces it. The truth may need to be spoken many times over many sessions before the lie loses its grip. Inner healing is usually a process, not a single event.",
    ],
    anchor: "Isaiah 61:1 — The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring good news to the poor; he has sent me to bind up the brokenhearted.",
  },
  {
    number: "04",
    title: "The Lament Prayer for Unanswered Healing — When God Seems Not to Heal",
    summary:
      "A practice for those who have prayed for healing and have not received it — the honest lament that does not suppress the grief or the confusion, but brings them before God without abandoning him.",
    steps: [
      "Write or pray a lament specifically about the unanswered healing prayer: name what you asked for, how long you have prayed, what it has cost you not to receive the healing, what you are afraid the non-healing means about God. Do not soften it or make it theologically respectable. Job&rsquo;s speeches are your model — the honest protest before the living God.",
      "In the middle of the lament, insert what you know to be true about God that is in tension with the experience: &ldquo;And yet I know that you are Yahweh-Rapha. And yet I know that Paul&rsquo;s thorn was not a sign of your absence but of your grace. And yet I know that the resurrection is the ultimate healing and it is coming.&rdquo; Hold the tension without resolving it.",
      "Ask for what you still want: the healing, or if the healing seems further away, the grace to bear what is not being healed. Both are legitimate requests. &ldquo;Lord, I still ask for the healing. And if it does not come as I am asking, I ask for the grace that was sufficient for Paul — the power that is perfected in weakness.&rdquo;",
      "Close with the posture of remaining: &ldquo;I do not understand this. I am still here. You are still my Healer, even when I cannot see the healing. I am not going anywhere.&rdquo; The lament is not the abandonment of hope but hope persisting through the darkness of unanswered prayer.",
    ],
    anchor: "2 Corinthians 12:9 — But he said to me, &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo;",
  },
  {
    number: "05",
    title: "The Healing Scripture Practice — Praying the Rapha Promises",
    summary:
      "Building a treasury of healing Scriptures and using them as the substance of healing prayer — praying the promises back to God, specific promise to specific need.",
    steps: [
      "Identify the dimension of healing most needed: physical healing, emotional healing, relational healing, healing of shame, healing of grief, spiritual restoration. Gather three to five Scripture passages that specifically address that dimension. For physical healing: Isaiah 53:5, Exodus 15:26, James 5:14-16. For emotional healing: Psalm 147:3, Psalm 34:18, Isaiah 61:1-3. For shame: Romans 8:1, Psalm 25:3, Isaiah 54:4.",
      "Read the passages slowly and pray each one back to God in the first person, applied to the specific need: &ldquo;Lord, you said that you heal the brokenhearted and bind up their wounds. I am brokenhearted by [name the specific thing]. I am bringing my wound to you and asking you to bind it up — to wrap it, to close it, to keep it from bleeding further.&rdquo;",
      "Note any passage that lands particularly deeply — that seems to speak directly to the specific wound. Memorize it and carry it as an anchor: when the pain resurfaces, the memorized verse is available as an immediate return to the Healer&rsquo;s care. &ldquo;He heals the brokenhearted and binds up their wounds&rdquo; becomes, in time, the first thought rather than the rehearsal of the pain.",
      "Revisit the passages after significant seasons of healing prayer and ask: what has shifted? Has anything healed that was not healed when you began? What does the progress (or lack of progress) reveal about what God is doing? Keep the journal as the record of this long work.",
    ],
    anchor: "Psalm 107:20 — He sent out his word and healed them, and delivered them from their destruction.",
  },
  {
    number: "06",
    title: "Receiving Prayer Well — How to Be Prayed For",
    summary:
      "Many people who need healing prayer have never been taught how to receive it — how to be present to the prayer, what to do with the feelings that arise, and how to hold the results. This practice addresses the receiving side of healing prayer.",
    steps: [
      "When you are about to receive prayer for healing, take a moment to become present: breathe slowly, acknowledge that you are in God&rsquo;s presence, and release the performance anxiety of wondering whether the prayer will &ldquo;work.&rdquo; Your job is not to produce the healing; your job is to be honest about the need and open to whatever God does.",
      "During the prayer, pay attention to what arises — emotions, physical sensations, memories, impressions. Do not suppress what surfaces; gently share it with the person praying for you if it seems relevant. Inner healing prayer especially moves as things surface during prayer; the Spirit often uses the prayer time to bring to light what needs to be healed.",
      "After the prayer, resist the urge to immediately assess whether the healing happened. Some healing is instantaneous; most is gradual. Some healing comes in forms we were not expecting — not the removal of the condition but a shift in how it is experienced, a new capacity to bear what was previously unbearable, a peace that did not exist before.",
      "If the specific healing you prayed for does not come, do not interpret that as evidence that the prayer failed or that God does not care. Bring your honest response — including disappointment, confusion, grief — back to God in prayer. The posture of Paul in 2 Corinthians 12 is the model: continued prayer, honest acknowledgment of what has not been healed, and trust in the grace that is sufficient.",
    ],
    anchor: "Psalm 34:18 — The LORD is near to the brokenhearted and saves the crushed in spirit.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Francis MacNutt",
    role: "Healing; The Power to Heal; Deliverance from Evil Spirits — The Modern Renewal of Healing Ministry",
    quote:
      "Most Christians have been taught to pray for healing as a long shot — an exception to the usual order of things. But the healing ministry of Jesus was not exceptional in his ministry; it was central to it. We have normalized the exception and made exceptional the center.",
    bio: "Francis MacNutt was a Dominican priest who became one of the most influential figures in the charismatic renewal of the twentieth century and the primary architect of the modern Christian healing ministry in Catholic and mainline Protestant contexts. His 1974 book Healing is widely credited with recovering the healing ministry of the church as a normal, expected dimension of Christian practice — not a Pentecostal curiosity but a biblical norm grounded in the James 5 pattern and the Jesus who healed. MacNutt was rigorously theological: he distinguished four kinds of healing (physical, emotional, healing of memories, and deliverance from evil), developed a careful pastoral theology of healing prayer, and was honest about both healing that came and healing that did not. He and his wife Judith founded Christian Healing Ministries in Jacksonville, Florida, which continues to train people in healing prayer and research the relationship between prayer and healing. MacNutt&rsquo;s work has been criticized by cessationists and by those who felt his approach was insufficiently careful about false claims; but his insistence on theological rigor, honesty about failure, and pastoral gentleness have made his books the standard introduction to the healing ministry for a generation of practitioners.",
  },
  {
    name: "Agnes Sanford",
    role: "The Healing Light; Sealed Orders — Pioneering Inner Healing Prayer",
    quote:
      "God is not a God who is reluctant to heal. The reluctance is on our side — our reluctance to believe that he is as good as he says, that he wants to heal as much as he says, that the power Jesus exercised is available to his church as he said it would be.",
    bio: "Agnes Sanford was an Episcopal laywoman and the wife of an Episcopal rector who, after her own healing from depression, became one of the founding figures of the inner healing movement and a pioneer of prayer for the healing of memories. Her book The Healing Light (1947) predated the charismatic renewal by two decades and laid the theological and practical groundwork for much of what followed. Sanford was not a systematic theologian; she wrote from experience, from prayer, and from a practical faith that was willing to try what the Bible seemed to promise. Her approach to inner healing — bringing specific memories into the presence of Jesus and asking him to be present in them — became the basis for the Leanne Payne school of healing prayer and influenced Francis MacNutt, John Wimber, and much of the subsequent healing prayer renewal. Sanford was controversial in her time, partly because she was a woman exercising significant teaching authority in a male-dominated ecclesial context, and partly because her theological categories did not always fit neatly into either evangelical or Catholic frameworks. But her fundamental conviction — that Jesus is still the healer, that the church is meant to be a healing community, and that prayer can touch the deepest wounds — proved generative beyond anything she could have anticipated.",
  },
  {
    name: "John Wimber",
    role: "Power Healing; The Dynamics of Spiritual Gifts — Signs and Wonders in the Kingdom",
    quote:
      "I used to ask God to heal people the way I pray for rain — with real faith that it could happen, and real surprise when it did. The kingdom of God changed my expectations. Now I pray expecting that God wants to heal, and I carry the mystery of when he does not with far more honesty than I used to.",
    bio: "John Wimber was the founder of the Vineyard movement and, along with C. Peter Wagner, the architect of the Signs and Wonders movement of the 1980s that profoundly shaped evangelical and charismatic approaches to healing ministry globally. Wimber came to faith as an adult without any church background and was therefore uncommonly free from the assumption that healing prayer was either marginal or exceptional — he read the New Testament and concluded that healing was simply what Jesus&rsquo; followers did. His approach was pragmatic, experimental, and honest: he practiced healing prayer, kept records of what happened, was transparent about what did not happen, and continually revised his theology in light of the data. His book Power Healing is one of the clearest presentations of a continuationist theology of healing and one of the most honest about the mystery of unanswered healing prayer. Wimber&rsquo;s own death from a brain hemorrhage in 1997, after years of praying for others&rsquo; healing, was not lost on those who had followed his ministry — and the Vineyard&rsquo;s response modeled the Paul of 2 Corinthians 12: continued expectation of healing, honest acknowledgment of the mystery, and trust in the God whose grace is sufficient.",
  },
  {
    name: "Philip Yancey",
    role: "Where Is God When It Hurts?; Prayer: Does It Make Any Difference? — Healing, Suffering, and Honest Faith",
    quote:
      "The problem of unanswered prayer for healing is not a problem to be solved but a mystery to be lived. The God who heals is the same God who sometimes says &lsquo;my grace is sufficient,&rsquo; and the faith that cannot accommodate both is not yet fully biblical.",
    bio: "Philip Yancey is one of the most widely read Christian authors of the last fifty years, known for asking the hard questions that devotional literature typically avoids. His book Where Is God When It Hurts? is the most widely read evangelical treatment of suffering and unanswered healing prayer, and it has the rare quality of refusing to resolve the mystery prematurely. Yancey&rsquo;s own life included significant suffering — a difficult childhood, a fundamentalist upbringing that damaged his relationship with faith, and years of wrestling with the God he was told to trust. His approach to healing is shaped by his journalistic instincts: he reports what actually happens when people pray for healing, including the cases where it does not come, and he is theologically honest about what this means for the character of God. His chapters on the mystery of unanswered prayer, on the healing that suffering itself sometimes accomplishes, and on the difference between the God who promises to be with us and the God who promises to remove all pain, are among the most important contributions to the pastoral theology of healing in recent decades. Yancey does not offer false comfort; he offers honest companionship in the mystery, which is ultimately more sustaining.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "A Place of Healing; When God Weeps — Living Faithfully with Unanswered Healing Prayer",
    quote:
      "I have prayed for healing for fifty years. I have not been healed. And I can say with complete honesty that God has been more real to me in my wheelchair than he ever was when I could walk. The healing I have received is not the healing I asked for, and it is deeper than any physical healing could have been.",
    bio: "Joni Eareckson Tada became a quadriplegic at age seventeen in a diving accident and has spent the subsequent decades becoming one of the most theologically substantial voices on suffering, disability, and healing in the contemporary church. Her book A Place of Healing addresses directly the experience of praying fervently for physical healing and not receiving it — and doing so from a position of fifty years of that experience. Tada is neither a cessationist who dismisses healing prayer nor a health-and-wealth teacher who attributes unanswered prayer to insufficient faith; she occupies the more difficult and more biblical position of expecting God to heal, praying for healing, and trusting that the God who sometimes says &ldquo;my grace is sufficient&rdquo; is no less good than the God who heals. Her ministry Joni and Friends has become one of the most significant disability ministries in the world, and her theology of suffering — formed over decades of living with a body that was not healed — has a depth and authority that cannot be manufactured from the outside. Her witness is the most powerful argument against the prosperity gospel in contemporary Christianity: a woman of profound faith, genuine holiness, and decades of prayer, who has not been physically healed and who is more joyful than most healed people.",
  },
  {
    name: "Tom Wright",
    role: "The Resurrection of the Son of God; Surprised by Hope — Healing, Resurrection, and the New Creation",
    quote:
      "The resurrection is the ultimate healing — the final answer to every prayer for healing that has ever been prayed and not answered in this life. We pray for healing now as a foretaste of the healing that is coming; we receive suffering now as the participation in the crucifixion that precedes the resurrection. Both are real; neither cancels the other.",
    bio: "N.T. Wright (Tom Wright) is one of the most significant New Testament scholars of the last half-century, best known for his massive work on Paul and the historical Jesus and for his popular writing on resurrection and new creation. His contribution to the theology of healing is largely indirect but profound: by recovering the New Testament&rsquo;s eschatological framework — the understanding that we live between the inauguration and the consummation of the kingdom — he has given the best theological account of why healing prayer is both appropriate and mysterious. In his framework, healings now are signs of the new creation that is coming, real foretastes of the final healing of all things, but not the full reality — they point beyond themselves to the resurrection of the body and the renewal of the cosmos. This means that the person who prays for healing and receives it has received a genuine gift and a genuine sign; the person who prays and does not receive has not received a lesser gift but a different expression of the same reality: the God who will ultimately heal all things has chosen, in this particular instance, to let the groaning of Romans 8 continue. Wright&rsquo;s resurrection theology is the best antidote to both the over-claim that healing is always available to sufficient faith and the under-claim that healing prayer is a first-century category that has no place in the contemporary church.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Exodus 15:26",
    text: "&ldquo;If you will diligently listen to the voice of the LORD your God, and do that which is right in his eyes, and give ear to his commandments and keep all his statutes, I will put none of the diseases on you that I put on the Egyptians, for I am the LORD, your healer.&rdquo;",
    reflection:
      "Yahweh-Rapha — the first divine self-disclosure as Healer comes in the wilderness, at the point of thirst and bitterness, not in a moment of easy provision. Healing is inseparable from relationship: &ldquo;diligently listen to the voice of the LORD.&rdquo; The Healer is not a technique but a person, and the healing flows from and within the covenant relationship. The wilderness is where this name is given — which means the wilderness is where the Healer is most fully known.",
  },
  {
    reference: "Isaiah 53:4-5",
    text: "Surely he has borne our griefs and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted. But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.",
    reflection:
      "The broadest healing text in the Old Testament: &ldquo;with his wounds we are healed.&rdquo; The healing in view is ultimately the healing of the rupture between God and humanity — the spiritual healing that the servant&rsquo;s suffering accomplishes. But the verse begins with griefs and sorrows — the full range of human suffering — being borne by the servant. Jesus&rsquo; healing ministry enacts what Isaiah prophesied: the one who heals is the one who first bears the wound.",
  },
  {
    reference: "James 5:14-16",
    text: "Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven. Therefore, confess your sins to one another and pray for one another, that you may be healed.",
    reflection:
      "The New Testament&rsquo;s most detailed healing instruction embeds healing in community: elders, mutual confession, shared prayer. The healing is not a private transaction but a communal act. And the connection between healing and forgiveness — without the crude equation of sickness with specific sin — points to the whole-person nature of biblical healing. This text calls the church to be something specific: a community of mutual care, honest vulnerability, and expectant prayer.",
  },
  {
    reference: "2 Corinthians 12:7-10",
    text: "So to keep me from becoming conceited because of the surpassing greatness of the revelations, a thorn was given me in the flesh, a messenger of Satan to harass me, to keep me from becoming conceited. Three times I pleaded with the Lord about this, that it should leave me. But he said to me, &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo;",
    reflection:
      "The most important text for those who have prayed for healing and received a different answer. Paul prayed three times and was not healed; God&rsquo;s answer was not &ldquo;no&rdquo; but &ldquo;my grace is sufficient.&rdquo; The thorn remained; the grace was sufficient; the power was perfected in weakness. This is not a consolation prize but a different and deeper form of God&rsquo;s care — the formation of a character that can bear weakness without losing faith, that knows God&rsquo;s grace from the inside of suffering rather than from its absence.",
  },
  {
    reference: "Psalm 147:3",
    text: "He heals the brokenhearted and binds up their wounds.",
    reflection:
      "The healing of the brokenhearted is paired with the physical binding of wounds — the full-spectrum care of a God who does not distinguish between emotional and physical suffering as if one were real and the other metaphorical. Both are real; both are the object of God&rsquo;s healing intention. The person who brings emotional brokenness to healing prayer is bringing something that God has explicitly named as the object of his care.",
  },
  {
    reference: "Romans 8:18-23",
    text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us... For we know that the whole creation has been groaning together in the pains of childbirth until now. And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies.",
    reflection:
      "The resurrection framework for healing: we groan now, in bodies not yet redeemed, as part of a creation not yet fully restored. The groaning is real and it is not shameful — it is the appropriate response of a creation that knows what it is made for and has not yet fully received it. &ldquo;The redemption of our bodies&rdquo; is the ultimate healing, the final answer to every unanswered healing prayer. We pray for healing now as a foretaste of that ultimate healing, and we bear unanswered healing prayer as participation in the groaning of a world not yet fully healed.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "pHvX3fOKd8U", title: "Christian Healing — The Theology of Yahweh-Rapha" },
  { videoId: "RBx1dyCd_WU", title: "Jesus&rsquo; Healing Ministry and the Kingdom of God" },
  { videoId: "k4FZ7ycGRqA", title: "James 5 — Elders, Anointing, and the Prayer of Faith" },
  { videoId: "iTDkgvJFp-A", title: "Unanswered Healing Prayer — Honest Theology for Hard Moments" },
  { videoId: "nlwkVKmyN5Y", title: "Inner Healing — Bringing Wounds to Jesus" },
  { videoId: "HWFkNmhWH2I", title: "Joni Eareckson Tada — Healing, Suffering, and Hope" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianHealingGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<HLGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatNeedsHealing, setWhatNeedsHealing] = useState("");
  const [howImPraying, setHowImPraying] = useState("");
  const [whatGodIsShowing, setWhatGodIsShowing] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as HLGEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!whatNeedsHealing.trim() || !howImPraying.trim()) return;
    const entry: HLGEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatNeedsHealing: whatNeedsHealing.trim(),
      howImPraying: howImPraying.trim(),
      whatGodIsShowing: whatGodIsShowing.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatNeedsHealing("");
    setHowImPraying("");
    setWhatGodIsShowing("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: TEAL,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: TEAL,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Healing &amp; Wholeness
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Healing: A Theological and Practical Guide
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              God revealed himself in the wilderness as Yahweh-Rapha — the LORD, your healer. Jesus
              healed as the central sign of the kingdom&rsquo;s arrival. James 5 calls the church to
              be a community of healing prayer. This guide traces the full biblical theology of
              healing — physical, emotional, inner — and gives you practices for bringing whatever
              needs healing to the God who heals, while holding honestly the mystery of when the
              healing comes differently than we asked.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
              </p>
              <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 147:3</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Eight theological studies on Christian healing — from Yahweh-Rapha and the Hebrew
                rapha to Jesus&rsquo; kingdom healings, the James 5 community pattern, the
                cessationism debate, Paul&rsquo;s thorn, healing and suffering in tension, and the
                genuine reality of inner and emotional healing. Theology honest about both the
                promise and the mystery.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: TEAL,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(13, 148, 136, 0.07)",
                        border: "1px solid rgba(13, 148, 136, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Rapha, kingdom signs, James 5, Paul&rsquo;s thorn, the resurrection of the body —
                  these are not separate topics but one theology of healing seen under different
                  pressures. The common thread: God is the Healer, healing prayer is always
                  appropriate, and the mystery of when and how healing comes is held honestly within
                  the eschatological framework of the kingdom that is already and not yet. Explore
                  how healing connects to suffering in{" "}
                  <Link href="/christian-suffering" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Suffering
                  </Link>{" "}
                  or to prayer in{" "}
                  <Link href="/christian-prayer-healing" style={{ color: TEAL, textDecoration: "underline" }}>
                    Prayer &amp; Healing
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices for healing prayer — naming what needs healing, the James 5 community
                pattern, praying into specific memories, the lament for unanswered healing, the
                Scripture treasury, and learning to receive prayer well. Practices for both those who
                are seeking healing and those who pray for others.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: TEAL,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: TEAL,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Medical care and prayer are not rivals
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices are not alternatives to appropriate medical and psychological care
                  — they are companions to it. Seeking medical treatment for a physical condition is
                  not a failure of faith; it is the wise stewardship of the means God has provided.
                  Inner healing prayer and psychotherapy address overlapping but distinct dimensions
                  of the same person. The wisest approach to healing uses all available means and
                  trusts God with the results of all of them.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have shaped the theology and practice of Christian healing —
                MacNutt&rsquo;s systematic renewal of healing ministry, Sanford&rsquo;s pioneering
                inner healing, Wimber&rsquo;s kingdom pragmatism, Yancey&rsquo;s honest wrestling,
                Tada&rsquo;s fifty years of unanswered prayer, and Wright&rsquo;s resurrection
                framework. Each has learned healing theology in the school of actual experience.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: TEAL,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(13, 148, 136, 0.06)",
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages that form the biblical theology of healing — from Exodus 15 to Isaiah
                53 to James 5 to Paul&rsquo;s thorn to Psalm 147 to Romans 8. Read them as prayers
                and as promises. Let each one address the specific dimension of healing you are most
                carrying right now.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: TEAL,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `${scripture.text}` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take the Scripture passage that speaks most directly to your current healing need
                  and pray it in the first person, applied specifically: &ldquo;Lord, you said you
                  heal the brokenhearted. I am brokenhearted by [specific thing]. I bring this to
                  you as the object of your explicit promise. I ask you to bind up this specific
                  wound.&rdquo; The Scripture is not a magic formula; it is the language of trust —
                  the articulation of what you believe God has promised, offered back to him as
                  prayer.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions for tracking your healing journey: what needs healing, how you are
                praying for it, and what God is showing you through it. Entries are stored privately
                in your browser — no account needed. Over time the journal becomes a record of the
                healing journey and its surprises.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New healing journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hlg-what" style={labelStyle}>
                    What needs healing in me right now
                  </label>
                  <textarea
                    id="hlg-what"
                    value={whatNeedsHealing}
                    onChange={(e) => setWhatNeedsHealing(e.target.value)}
                    placeholder="Name it specifically — physical, emotional, relational, spiritual. The more specific the naming, the more specific the prayer can be..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hlg-prayer" style={labelStyle}>
                    How I&rsquo;m praying for it
                  </label>
                  <textarea
                    id="hlg-prayer"
                    value={howImPraying}
                    onChange={(e) => setHowImPraying(e.target.value)}
                    placeholder="What are you asking for? What Scripture are you praying? Who are you asking to pray with you? How are you approaching God with this need?..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="hlg-showing" style={labelStyle}>
                    What God is showing me through this
                  </label>
                  <textarea
                    id="hlg-showing"
                    value={whatGodIsShowing}
                    onChange={(e) => setWhatGodIsShowing(e.target.value)}
                    placeholder="What is God doing or revealing in this season of needing healing? What are you learning about him, about yourself, about prayer?..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatNeedsHealing.trim() || !howImPraying.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatNeedsHealing.trim() || !howImPraying.trim() ? BORDER : TEAL,
                    color: !whatNeedsHealing.trim() || !howImPraying.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatNeedsHealing.trim() || !howImPraying.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name what needs healing, name how you are praying for it, and name what God is
                      showing you. Over time this becomes a record of the healing journey —
                      including the surprises, the partial healings, and the grace that is
                      sufficient when healing comes differently than you asked.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: TEAL }}>
                              {entry.whatNeedsHealing.length > 80
                                ? entry.whatNeedsHealing.slice(0, 80) + "…"
                                : entry.whatNeedsHealing}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry from ${entry.date}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        <div style={{ marginBottom: 10 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            What needs healing
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatNeedsHealing}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.whatGodIsShowing ? 10 : 0 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            How I&rsquo;m praying
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.howImPraying}
                          </p>
                        </div>

                        {entry.whatGodIsShowing && (
                          <div>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              What God is showing me
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatGodIsShowing}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on Christian healing — Yahweh-Rapha, kingdom theology, James 5, unanswered
                prayer, inner healing, and Joni Eareckson Tada&rsquo;s witness. Good companions to
                the Theology and Practices tabs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              The long arc of healing
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Healing in the Christian life is rarely a single event; it is a long arc that includes
              the initial naming of the wound, the repeated prayer, the partial healing, the
              mystery of what is not healed, and ultimately the resurrection of the body that is
              the final healing of all things. The journal here is designed to track that arc —
              not to measure whether prayer is &ldquo;working&rdquo; but to be honest about the
              process and to notice what God is doing even when it does not look like what was
              asked for.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the connection between healing and suffering in{" "}
              <Link href="/christian-suffering" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Suffering
              </Link>
              , find resources on prayer for healing in{" "}
              <Link href="/christian-prayer-healing" style={{ color: TEAL, textDecoration: "underline" }}>
                Prayer &amp; Healing
              </Link>
              , or bring your chronic illness experience to{" "}
              <Link
                href="/chronic-illness"
                style={{ color: TEAL, textDecoration: "underline" }}
              >
                Chronic Illness &amp; Faith
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
