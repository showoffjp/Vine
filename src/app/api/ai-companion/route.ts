import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";

// ─── System prompt ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are a knowledgeable, warm, and faithful Christian companion. You help believers explore Scripture, understand biblical context, find relevant verses, and apply biblical wisdom to everyday life. You are grounded in orthodox Christian theology, respectful of different denominations, and always point people back to Scripture. Keep responses concise (2-4 paragraphs), conversational, and encouraging. Always cite specific Bible verses when relevant.`;

// ─── Mock streaming fallback ───────────────────────────────────────────────────

function createMockStream(question: string): ReadableStream<Uint8Array> {
  const responses: Record<string, string> = {
    default: `Peace be with you! That's a wonderful question to explore together. Scripture has much to say on this topic, and I'd love to walk through it with you.\n\nThe Bible consistently points us to God's faithfulness and love. As Romans 8:28 reminds us, "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." This foundational truth can anchor us as we dig deeper.\n\nI encourage you to spend time in prayer and Scripture reading as you seek understanding. Proverbs 3:5-6 says, "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." May God's Word illuminate your path today!`,
    anxiety: `What a timely question — anxiety is something so many believers wrestle with, and Scripture speaks directly to it. Philippians 4:6-7 is one of the most beloved passages on this: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."\n\nJesus himself addressed worry in the Sermon on the Mount (Matthew 6:25-34), reminding us that our Heavenly Father knows our needs and cares for us even more than the birds of the air and the lilies of the field. He concludes with that powerful instruction: "Seek first his kingdom and his righteousness, and all these things will be given to you as well."\n\nPractically speaking, bringing anxiety to God in prayer, meditating on His promises, and staying in community with fellow believers can all help. Psalm 55:22 says, "Cast your cares on the Lord and he will sustain you." You are not alone in this — God is with you.`,
    paul: `The Apostle Paul is one of the most remarkable figures in all of Scripture! Born Saul of Tarsus, he was a devout Pharisee who initially persecuted Christians with fervor — until his dramatic encounter with the risen Christ on the road to Damascus (Acts 9:1-19), an event that completely transformed his life.\n\nAfter his conversion, Paul became the most prolific missionary in the early church, planting churches throughout Asia Minor, Greece, and beyond. He authored at least 13 letters (epistles) in the New Testament — including Romans, Corinthians, Galatians, Ephesians, Philippians, and more — which form much of our theological understanding of salvation, grace, and the church.\n\nPaul's life embodies the grace of God. He wrote in 1 Timothy 1:15, "Christ Jesus came into the world to save sinners — of whom I am the worst." His testimony reminds us that no one is beyond God's redemptive reach. His writings continue to shape Christian faith nearly 2,000 years later.`,
    romans: `Romans 8:28 is one of the most treasured verses in all of Scripture: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." This is a profound promise that has comforted believers through every kind of trial.\n\nThe key word is "all things" — not just pleasant circumstances, but even suffering, loss, and hardship. Paul is writing from experience; he faced imprisonment, shipwreck, and persecution, yet he maintained this confident hope. The verse doesn't promise that everything that happens is good, but that God is working all things together for an ultimate good purpose.\n\nThis promise is specifically for "those who love him" and are "called according to his purpose" — which the following verses (29-30) clarify includes all who are being conformed to the image of Christ. It's a beautiful reminder that God is sovereignly at work in every chapter of our story, even the difficult ones.`,
    john316: `John 3:16 is often called "the Gospel in a nutshell," and for good reason: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."\n\nLet's unpack each phrase. "For God so loved the world" — this is agape love, unconditional and sacrificial. It's directed at the entire world, not just the righteous. "That he gave his one and only Son" — the Greek word is monogenes, meaning unique or one-of-a-kind. The Father's love is demonstrated through ultimate sacrifice. "That whoever believes in him" — the word believes (pisteuō) implies ongoing trust and commitment, not just intellectual agreement.\n\nThe contrast "shall not perish but have eternal life" frames the entire human story: separation from God (perishing) versus restored relationship (eternal life). This verse sits in the context of Jesus' nighttime conversation with Nicodemus, a religious leader who came seeking truth — and received the most concise summary of the Gospel ever spoken.`,
    forgiveness: `Forgiveness is one of the most countercultural — and transformative — teachings in all of Scripture. Jesus addressed it powerfully in Matthew 18:21-22 when Peter asked how many times he should forgive a brother. Jesus answered: "Not seven times, but seventy-seven times" (or "seventy times seven" in some translations) — meaning there is no limit.\n\nPaul expands on this in Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." This is the key: our forgiveness of others flows from understanding how much we ourselves have been forgiven. It's not earned — it's grace.\n\nImportantly, forgiveness does not mean condoning wrongdoing or immediately restoring trust. It is first an internal releasing of the debt — choosing not to hold someone's sin against them before God. Healing and reconciliation may follow over time, but forgiveness itself is a decision and a discipline. Colossians 3:13 says to "bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."`,
    trinity: `The Trinity is one of the most profound and distinctive doctrines of Christianity: there is one God who eternally exists as three co-equal, co-eternal Persons — Father, Son, and Holy Spirit. While the word "Trinity" doesn't appear in Scripture, the concept is woven throughout both Old and New Testaments.\n\nAt Jesus' baptism (Matthew 3:16-17), all three Persons are present simultaneously: the Son is baptized, the Spirit descends like a dove, and the Father speaks from heaven. The Great Commission (Matthew 28:19) commands baptism "in the name [singular] of the Father and of the Son and of the Holy Spirit."\n\nThe early church councils — particularly Nicaea (AD 325) and Constantinople (AD 381) — carefully articulated this doctrine to guard against errors. The Father, Son, and Spirit are not three gods (tritheism), nor three modes of one God (modalism), but three distinct Persons sharing one divine nature. It's a mystery that transcends human logic, yet it is essential to understanding who God is and how He relates to us in salvation.`,
    prayer: `Prayer is one of the most fundamental expressions of our relationship with God — and Scripture gives us rich guidance on how to do it well. Jesus himself modeled it for us, often withdrawing to pray alone (Luke 5:16), and gave us the Lord's Prayer as a template (Matthew 6:9-13).\n\nThe Lord's Prayer shows us prayer has several dimensions: worship ("Our Father in heaven, hallowed be your name"), alignment with God's will ("Your kingdom come, your will be done"), dependence ("Give us today our daily bread"), confession ("Forgive us our debts"), and spiritual warfare ("Deliver us from the evil one").\n\nPaul instructs us to "pray continually" (1 Thessalonians 5:17) — this doesn't mean being on your knees 24 hours a day, but cultivating an ongoing posture of conversation with God throughout your day. Practically: find a consistent time and place, be honest and specific, combine Scripture with prayer, listen as much as you speak, and keep a record of what you pray for. God hears every prayer, and Hebrews 4:16 invites us to "approach God's throne of grace with confidence."`,
    grace: `Grace is at the very heart of the Christian Gospel. The simplest definition is "unmerited favor" — God's kindness extended to those who don't deserve it. Paul captures it perfectly in Ephesians 2:8-9: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast."\n\nGrace is what distinguishes Christianity from every other religion. In most belief systems, you work your way up to the divine. In Christianity, God comes down to you — not because of who you are, but because of who He is. Titus 2:11 says "the grace of God has appeared that offers salvation to all people."\n\nBut grace is not just the entry point of salvation — it sustains the entire Christian life. 2 Corinthians 12:9 records God's response to Paul's suffering: "My grace is sufficient for you, for my power is made perfect in weakness." Grace is also formative: it "teaches us to say No to ungodliness" (Titus 2:12). True understanding of grace doesn't produce complacency — it produces gratitude, love, and transformation.`,
    fruitOfSpirit: `The fruit of the Spirit is one of the most beloved passages in Paul's letters, found in Galatians 5:22-23: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."\n\nNotice it's "fruit" (singular), not "fruits" — these nine qualities are one interconnected cluster that the Holy Spirit produces in a believer's life over time. They stand in contrast to the "acts of the flesh" (Galatians 5:19-21) and represent the character of Christ being formed in us.\n\nThis is crucial: the fruit of the Spirit is not achieved by trying harder. It grows as we abide in Christ (John 15:4-5) — staying connected to Him through Scripture, prayer, community, and surrender. Just as a branch doesn't strain to produce fruit but simply stays attached to the vine, we are called to remain in Christ and trust His Spirit to produce this transformation in us over time.`,
    purpose: `Questions about purpose and calling are among the deepest any person can ask — and Scripture speaks directly to them. Jeremiah 29:11 offers this stunning promise: "'For I know the plans I have for you,' declares the LORD, 'plans to prosper you and not to harm you, plans to give you hope and a future.'"\n\nAt the broadest level, Ephesians 2:10 tells us we are "God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." Your existence has intentionality behind it — you are not an accident, and your life is not without meaning.\n\nMore specifically, discovering your calling often involves three intersections: your gifts (what you're naturally wired for), your passions (what moves you to act), and the world's needs (where God's heart is broken). The spiritual gifts in Romans 12 and 1 Corinthians 12 offer a framework for understanding how God has uniquely equipped you. Take the Vine Spiritual Gifts Assessment to explore this further! As you serve, pray, and stay in community, your specific calling becomes clearer over time.`,
    doubt: `Doubt is not the opposite of faith — it is often faith in honest process. The Psalms are full of raw doubt: Psalm 22 opens with "My God, my God, why have you forsaken me?" Thomas doubted the resurrection (John 20:24-25). Even John the Baptist, who baptized Jesus, sent messengers from prison asking, "Are you the one who is to come, or should we expect someone else?" (Matthew 11:3)\n\nJesus didn't rebuke these doubters with condemnation — He met them with grace and evidence. To Thomas, he said, "Stop doubting and believe" while showing his wounds. To John's messengers, He pointed to the miracles being done.\n\nDoubt can be spiritually productive when it drives us to seek truth honestly rather than to disengage. C.S. Lewis wrote much of his apologetic work out of his own intellectual struggles. The key is to bring your doubts to God (Psalm 62:8), to the community of believers (where iron sharpens iron), and to honest study of Scripture and church history. Jude 22 says to "be merciful to those who doubt." That includes being merciful to yourself.`,
    sermon: `The Sermon on the Mount (Matthew 5-7) is arguably the most important body of teaching Jesus ever gave — a comprehensive vision of what life in God's kingdom looks like. It opens with the Beatitudes (Matthew 5:3-12), which describe the character of Kingdom citizens, beginning with "Blessed are the poor in spirit, for theirs is the kingdom of heaven."\n\nThe sermon covers topics including: the deeper intent behind the Law (5:17-48), authentic prayer and fasting (6:1-18), the Lord's Prayer (6:9-13), freedom from anxiety (6:25-34), the Golden Rule (7:12), and the narrow vs. wide gate (7:13-14). Jesus repeatedly says "You have heard that it was said... but I tell you" — showing He is not abolishing the Law but fulfilling and deepening it.\n\nThe application is the house on the rock (Matthew 7:24-27): "Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock." The Sermon is not merely inspiring teaching — it's a call to radical obedience rooted in relationship with God the Father.`,
    startBible: `Starting a Bible reading journey is one of the most rewarding decisions you can make as a believer! Here's a practical guide to help you begin well.\n\nFirst, choose a translation you can understand. The NIV (New International Version) is excellent for readability and accuracy. The ESV (English Standard Version) is beloved for its literary quality. The NLT (New Living Translation) is great for newer readers.\n\nFor where to begin: many people start with the Gospel of John, which opens with the sweeping declaration "In the beginning was the Word" and tells the story of Jesus with theological depth and warmth. After John, try Acts (the story of the early church) and then Psalms (the prayer book of the Bible). Once you feel grounded, work through the whole New Testament before tackling the Old.\n\nConsistency matters more than volume. Even 10-15 minutes per day, at the same time each day, will transform your life over a year. Use a reading plan to keep you on track — Vine's Reading Plans page has several options. And as you read, ask three questions: What does this say? What does it mean? What should I do differently?`,
    depression: `Depression is real, it is painful, and God meets us in it — not around it or above it, but directly in it. Some of Scripture's most faithful people walked through seasons of profound darkness. Elijah, immediately after the most dramatic miracle of his ministry, collapsed under a tree and asked God to let him die (1 Kings 19:4). God's response was not rebuke — it was bread, water, and rest.\n\nPsalm 34:18 says, "The Lord is close to the brokenhearted and saves those who are crushed in spirit." This is not a metaphor — it is the testimony of people who survived darkness and wrote honestly about it. The entire book of Lamentations is one sustained cry of grief. The Psalms include over 60 lament passages. God has given us permission to mourn, and He enters the mourning with us.\n\nPlease know: if you are experiencing depression, seeking professional help from a licensed Christian counselor is a wise, biblical act — not a failure of faith. God works through medicine, therapy, community, and His Word. Proverbs 11:14 says there is safety in many counselors. You don't have to carry this alone. Reach out to someone you trust today.`,
    salvation: `The question of salvation is the most important question in all of Scripture. The Bible is clear: we are all separated from God by sin (Romans 3:23 — "for all have sinned and fall short of the glory of God"), and the consequence of that separation is eternal death (Romans 6:23 — "For the wages of sin is death").\n\nBut here is the Good News — the Gospel — which changes everything: "but the gift of God is eternal life in Christ Jesus our Lord" (Romans 6:23b). Jesus Christ, fully God and fully human, lived the perfect life we couldn't, died the death our sin deserved, and rose from the dead on the third day — defeating sin and death forever. Romans 10:9 says, "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved."\n\nSalvation is received by grace through faith — not by works, religious performance, or moral perfection. Ephesians 2:8-9: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works." If you want to surrender your life to Christ today, you can simply pray: "Lord Jesus, I know I'm a sinner. I believe you died for my sins and rose again. I surrender my life to you. Come into my life. Make me new." That prayer, meant sincerely, marks the beginning of a life-changing journey.`,
    money: `The Bible speaks about money more than almost any other topic — Jesus addressed it directly over 40 times. The core principle is stewardship: everything we have ultimately belongs to God, and we are managers of His resources. As Psalm 24:1 says, "The earth is the Lord's, and everything in it."\n\nJesus' most direct teaching on money is in the Sermon on the Mount (Matthew 6:19-34), where He warns against storing up earthly treasure at the expense of heavenly treasure, and says flatly: "You cannot serve both God and money" (Matthew 6:24). This isn't saying money is evil — it's saying that money makes a terrible master and a wonderful servant.\n\nPractically, Scripture commends: giving generously and joyfully (2 Corinthians 9:7), avoiding debt where possible (Proverbs 22:7 — "the borrower is slave to the lender"), saving diligently (Proverbs 6:6-8), and trusting God's provision rather than hoarding out of fear (Matthew 6:31-33). The Vine Finances page has a biblical 6-step financial freedom plan and an interactive 10-10-80 budget calculator to help you put these principles into practice.`,
    holySpirit: `The Holy Spirit is the third Person of the Trinity — co-equal and co-eternal with the Father and Son — and is the primary agent of God's work in the world and in believers today. Jesus promised the Spirit before His departure (John 14:16-17), calling Him the "Paraclete" — the Counselor, Helper, Advocate, or Comforter.\n\nThe Spirit's work is comprehensive: He convicts of sin (John 16:8), regenerates those who believe (John 3:5-8), seals believers for the day of redemption (Ephesians 1:13-14), intercedes in prayer when we don't know what to pray (Romans 8:26-27), produces the fruit of love, joy, peace, and more in us (Galatians 5:22-23), and distributes spiritual gifts for the building of the church (1 Corinthians 12:4-11).\n\nIn the Christian life, being "filled with the Spirit" (Ephesians 5:18) is an ongoing experience of surrender and openness. We can grieve the Spirit (Ephesians 4:30) or quench the Spirit (1 Thessalonians 5:19). The invitation is to walk in step with Him (Galatians 5:25) — sensitive to His leading, responsive to His correction, open to His gifts.`,
    marriage: `Marriage in Scripture is one of the most profound theological realities — Paul describes it in Ephesians 5 as a living picture of Christ's relationship with the Church. This means that how we love our spouses is not just a personal matter but a testimony to the world about who God is.\n\nThe foundational text is Ephesians 5:25-33, where Paul calls husbands to love their wives "as Christ loved the church — and gave himself up for her." This is not power or control — it is sacrificial servanthood. Wives are called to "submit... as to the Lord" (Ephesians 5:22) — a mutual submission rooted in love and trust, not hierarchy for its own sake.\n\nPractical biblical wisdom for marriage: speak truth in love (Ephesians 4:15), do not let anger fester past sunset (Ephesians 4:26), serve and honor each other (1 Peter 3:7), pray together (Matthew 18:19), and prioritize the relationship above all other human relationships (Genesis 2:24 — "a man shall leave his father and mother and be joined to his wife"). Marriage is not just a partnership — it is a covenant, and God is deeply invested in its flourishing.`,
  };

  let text = responses.default;
  const lower = question.toLowerCase();
  if (lower.includes("anxiety") || lower.includes("worry") || lower.includes("fear") || lower.includes("stress")) {
    text = responses.anxiety;
  } else if (lower.includes("paul") || lower.includes("apostle") || lower.includes("saul of tarsus")) {
    text = responses.paul;
  } else if (lower.includes("romans 8") || lower.includes("romans 8:28") || lower.includes("all things work")) {
    text = responses.romans;
  } else if (lower.includes("john 3:16") || lower.includes("for god so loved") || lower.includes("john 3")) {
    text = responses.john316;
  } else if (lower.includes("forgiv") || lower.includes("hurt me") || lower.includes("hurt by")) {
    text = responses.forgiveness;
  } else if (lower.includes("trinity") || lower.includes("three in one") || lower.includes("father son holy")) {
    text = responses.trinity;
  } else if (lower.includes("how do i pray") || lower.includes("how to pray") || lower.includes("lord's prayer") || lower.includes("lords prayer")) {
    text = responses.prayer;
  } else if (lower.includes("grace") || lower.includes("what is grace") || lower.includes("unmerited")) {
    text = responses.grace;
  } else if (lower.includes("fruit of the spirit") || lower.includes("fruit of spirit") || lower.includes("galatians 5")) {
    text = responses.fruitOfSpirit;
  } else if (lower.includes("purpose") || lower.includes("calling") || lower.includes("meaning") || lower.includes("why am i")) {
    text = responses.purpose;
  } else if (lower.includes("doubt") || lower.includes("question") || lower.includes("wrestl") || lower.includes("struggle")) {
    text = responses.doubt;
  } else if (lower.includes("sermon on the mount") || lower.includes("beatitude") || lower.includes("matthew 5") || lower.includes("matthew 6") || lower.includes("matthew 7")) {
    text = responses.sermon;
  } else if (lower.includes("start reading") || lower.includes("how to read") || lower.includes("begin") || lower.includes("new to bible") || lower.includes("reading the bible")) {
    text = responses.startBible;
  } else if (lower.includes("depress") || lower.includes("dark night") || lower.includes("hopeless") || lower.includes("suicid") || lower.includes("don't want to live")) {
    text = responses.depression;
  } else if (lower.includes("saved") || lower.includes("salvation") || lower.includes("eternal life") || lower.includes("heaven") || lower.includes("sin") || lower.includes("born again")) {
    text = responses.salvation;
  } else if (lower.includes("money") || lower.includes("finances") || lower.includes("tithe") || lower.includes("giving") || lower.includes("generosity") || lower.includes("debt") || lower.includes("stewardship")) {
    text = responses.money;
  } else if (lower.includes("holy spirit") || lower.includes("spirit of god") || lower.includes("gifts of the spirit") || lower.includes("filled with the spirit") || lower.includes("paraclete")) {
    text = responses.holySpirit;
  } else if (lower.includes("marriage") || lower.includes("husband") || lower.includes("wife") || lower.includes("spouse") || lower.includes("wedding") || lower.includes("relationship")) {
    text = responses.marriage;
  }

  const encoder = new TextEncoder();
  let index = 0;

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      if (index >= text.length) {
        controller.close();
        return;
      }
      // Stream a small chunk at a time with a tiny delay for natural feel
      const chunkSize = Math.floor(Math.random() * 4) + 1;
      const chunk = text.slice(index, index + chunkSize);
      index += chunkSize;

      // Emit as AI SDK text stream format (plain text delta)
      controller.enqueue(encoder.encode(chunk));

      // Tiny delay to simulate streaming
      await new Promise((r) => setTimeout(r, 12));
    },
  });
}

// ─── POST /api/ai-companion ────────────────────────────────────────────────────

export async function POST(request: Request): Promise<Response> {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages array is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const hasApiKey = !!process.env.OPENAI_API_KEY;

    // ── Real AI path ──────────────────────────────────────────────────────────
    if (hasApiKey) {
      const result = streamText({
        model: gateway("openai/gpt-4o-mini"),
        system: SYSTEM_PROMPT,
        messages,
      });

      return result.toTextStreamResponse();
    }

    // ── Mock fallback path ────────────────────────────────────────────────────
    // Grab the last user message to personalize the canned response
    const lastUserMessage = [...messages]
      .reverse()
      .find((m: { role: string; content: string }) => m.role === "user")?.content ?? "";

    const mockStream = createMockStream(lastUserMessage);

    return new Response(mockStream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Vine-Mock": "true",
      },
    });
  } catch (err) {
    console.error("[ai-companion] Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
