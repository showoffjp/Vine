import { NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WeeklyChallenge {
  id: number;
  title: string;
  description: string;
  scripture: string;
  scriptureText: string;
  category: string;
  duration: "7 days";
  tasks: string[];
}

// ─── Challenge rotation ───────────────────────────────────────────────────────

const challenges: WeeklyChallenge[] = [
  {
    id: 1,
    title: "Bless a Stranger",
    description:
      "Each day this week, perform one intentional act of kindness for someone you don't know — and reflect on what God may be doing through it.",
    scripture: "Matthew 5:16",
    scriptureText:
      "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    category: "Service",
    duration: "7 days",
    tasks: [
      "Day 1: Pay for someone's coffee or meal",
      "Day 2: Leave an encouraging note for a stranger",
      "Day 3: Volunteer at a local food pantry or shelter",
      "Day 4: Smile and greet 10 strangers today",
      "Day 5: Donate to a cause in someone else's name",
      "Day 6: Pray over a neighborhood or public space",
      "Day 7: Share your experience with the Vine community",
    ],
  },
  {
    id: 2,
    title: "Fast and Pray",
    description:
      "Commit to a daily 30-minute prayer fast — skip one meal and spend that time in prayer, Scripture reading, and listening to God.",
    scripture: "Matthew 6:17-18",
    scriptureText:
      "But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen.",
    category: "Spiritual Discipline",
    duration: "7 days",
    tasks: [
      "Day 1: Skip breakfast; pray for personal renewal",
      "Day 2: Skip lunch; intercede for your family",
      "Day 3: Skip dinner; pray for your community",
      "Day 4: Fast social media; pray for wisdom",
      "Day 5: Fast entertainment; pray for the nation",
      "Day 6: Full-day fast; pray for global revival",
      "Day 7: Break fast with a worship service",
    ],
  },
  {
    id: 3,
    title: "Scripture Memory Sprint",
    description:
      "Memorize one verse per day for seven days. By the end of the week you'll have seven new scriptures hidden in your heart.",
    scripture: "Psalm 119:11",
    scriptureText:
      "I have hidden your word in my heart that I might not sin against you.",
    category: "Bible",
    duration: "7 days",
    tasks: [
      "Day 1: John 3:16 — God's love",
      "Day 2: Romans 8:28 — God's purpose",
      "Day 3: Philippians 4:13 — God's strength",
      "Day 4: Proverbs 3:5-6 — God's guidance",
      "Day 5: Isaiah 40:31 — God's renewal",
      "Day 6: Jeremiah 29:11 — God's plans",
      "Day 7: Recite all 7 from memory",
    ],
  },
  {
    id: 4,
    title: "Gratitude Journal",
    description:
      "Every morning, write down three things you're grateful for before checking your phone. See how thankfulness transforms your week.",
    scripture: "1 Thessalonians 5:18",
    scriptureText:
      "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    category: "Mindset",
    duration: "7 days",
    tasks: [
      "Day 1: Give thanks for your body and health",
      "Day 2: Give thanks for your family and relationships",
      "Day 3: Give thanks for provision and work",
      "Day 4: Give thanks for trials that shaped you",
      "Day 5: Give thanks for your community",
      "Day 6: Give thanks for Scripture itself",
      "Day 7: Write a letter of thanks to someone who impacted your faith",
    ],
  },
  {
    id: 5,
    title: "Reach the Unreached",
    description:
      "Intentionally pray for and engage with someone in your life who doesn't yet know Christ. Let love be your evangelism strategy.",
    scripture: "Romans 10:14",
    scriptureText:
      "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard?",
    category: "Evangelism",
    duration: "7 days",
    tasks: [
      "Day 1: Identify one person to pray for this week",
      "Day 2: Send them a genuine message of care",
      "Day 3: Invite them to share a meal or coffee",
      "Day 4: Listen to their story without judgment",
      "Day 5: Share one way your faith has helped you",
      "Day 6: Invite them to a Vine discussion or event",
      "Day 7: Pray with them (if they're open) or continue building the bridge",
    ],
  },
];

// ─── Helper: ISO week number ──────────────────────────────────────────────────

function getISOWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
}

// ─── Helper: start of current week (Monday) ───────────────────────────────────

function getWeekStart(date: Date): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
  d.setDate(diff);
  return d.toISOString().split("T")[0];
}

// ─── Route ────────────────────────────────────────────────────────────────────

// Runs every Monday at 8am UTC via vercel.json cron config:
//   { "path": "/api/cron/weekly-challenge", "schedule": "0 8 * * 1" }
export async function GET(request: Request) {
  // Verify Vercel Cron authorization in production
  const authHeader = request.headers.get("authorization");
  if (
    process.env.NODE_ENV === "production" &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date();
  const weekNumber = getISOWeekNumber(today);
  const challenge = challenges[(weekNumber - 1) % challenges.length];
  const weekStart = getWeekStart(today);

  // Compute end of week (Sunday)
  const weekEndDate = new Date(weekStart);
  weekEndDate.setDate(weekEndDate.getDate() + 6);
  const weekEnd = weekEndDate.toISOString().split("T")[0];

  return NextResponse.json({
    success: true,
    weekNumber,
    weekStart,
    weekEnd,
    challenge,
    message: `Weekly challenge rotated for week ${weekNumber}`,
  });
}
