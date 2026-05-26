import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";

// ─── System prompt ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are a knowledgeable, warm, and faithful Christian companion. You help believers explore Scripture, understand biblical context, find relevant verses, and apply biblical wisdom to everyday life. You are grounded in orthodox Christian theology, respectful of different denominations, and always point people back to Scripture. Keep responses concise (2-4 paragraphs), conversational, and encouraging. Always cite specific Bible verses when relevant.`;

// ─── Mock streaming fallback ───────────────────────────────────────────────────

function createMockStream(question: string): ReadableStream<Uint8Array> {
  const responses: Record<string, string> = {
    default: `Peace be with you! That's a wonderful question to explore together. Scripture has much to say on this topic, and I'd love to walk through it with you.\n\nThe Bible consistently points us to God's faithfulness and love. As Romans 8:28 reminds us, "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." This foundational truth can anchor us as we dig deeper.\n\nI encourage you to spend time in prayer and Scripture reading as you seek understanding. Proverbs 3:5-6 says, "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." May God's Word illuminate your path today!\n\n*(Note: This is a demo response — connect an AI API key for personalized answers.)*`,
    anxiety: `What a timely question — anxiety is something so many believers wrestle with, and Scripture speaks directly to it. Philippians 4:6-7 is one of the most beloved passages on this: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."\n\nJesus himself addressed worry in the Sermon on the Mount (Matthew 6:25-34), reminding us that our Heavenly Father knows our needs and cares for us even more than the birds of the air and the lilies of the field. He concludes with that powerful instruction: "Seek first his kingdom and his righteousness, and all these things will be given to you as well."\n\nPractically speaking, bringing anxiety to God in prayer, meditating on His promises, and staying in community with fellow believers can all help. Psalm 55:22 says, "Cast your cares on the Lord and he will sustain you." You are not alone in this — God is with you.\n\n*(Note: This is a demo response — connect an AI API key for personalized answers.)*`,
    paul: `The Apostle Paul is one of the most remarkable figures in all of Scripture! Born Saul of Tarsus, he was a devout Pharisee who initially persecuted Christians with fervor — until his dramatic encounter with the risen Christ on the road to Damascus (Acts 9:1-19), an event that completely transformed his life.\n\nAfter his conversion, Paul became the most prolific missionary in the early church, planting churches throughout Asia Minor, Greece, and beyond. He authored at least 13 letters (epistles) in the New Testament — including Romans, Corinthians, Galatians, Ephesians, Philippians, and more — which form much of our theological understanding of salvation, grace, and the church.\n\nPaul's life embodies the grace of God. He wrote in 1 Timothy 1:15, "Christ Jesus came into the world to save sinners — of whom I am the worst." His testimony reminds us that no one is beyond God's redemptive reach. His writings continue to shape Christian faith nearly 2,000 years later.\n\n*(Note: This is a demo response — connect an AI API key for personalized answers.)*`,
    romans: `Romans 8:28 is one of the most treasured verses in all of Scripture: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." This is a profound promise that has comforted believers through every kind of trial.\n\nThe key word is "all things" — not just pleasant circumstances, but even suffering, loss, and hardship. Paul is writing from experience; he faced imprisonment, shipwreck, and persecution, yet he maintained this confident hope. The verse doesn't promise that everything that happens is good, but that God is working all things together for an ultimate good purpose.\n\nThis promise is specifically for "those who love him" and are "called according to his purpose" — which the following verses (29-30) clarify includes all who are being conformed to the image of Christ. It's a beautiful reminder that God is sovereignly at work in every chapter of our story, even the difficult ones.\n\n*(Note: This is a demo response — connect an AI API key for personalized answers.)*`,
  };

  let text = responses.default;
  const lower = question.toLowerCase();
  if (lower.includes("anxiety") || lower.includes("worry") || lower.includes("fear")) {
    text = responses.anxiety;
  } else if (lower.includes("paul") || lower.includes("apostle")) {
    text = responses.paul;
  } else if (lower.includes("romans 8") || lower.includes("romans 8:28")) {
    text = responses.romans;
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
