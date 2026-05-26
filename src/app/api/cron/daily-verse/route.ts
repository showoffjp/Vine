import { NextResponse } from "next/server";

// Runs daily at 6am UTC via vercel.json cron config
export async function GET(request: Request) {
  // Verify this is called by Vercel Cron (in production)
  const authHeader = request.headers.get("authorization");
  if (
    process.env.NODE_ENV === "production" &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Mock verse rotation (in production, pull from Bible API or DB)
  const verses = [
    {
      reference: "Philippians 4:13",
      text: "I can do all things through Christ who strengthens me.",
      translation: "NKJV",
    },
    {
      reference: "Jeremiah 29:11",
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      translation: "NIV",
    },
    {
      reference: "Romans 8:28",
      text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      translation: "NIV",
    },
    {
      reference: "Proverbs 3:5-6",
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      translation: "NIV",
    },
    {
      reference: "Isaiah 40:31",
      text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      translation: "NIV",
    },
  ];

  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const verse = verses[dayOfYear % verses.length];

  return NextResponse.json({
    success: true,
    verse,
    date: today.toISOString().split("T")[0],
    message: "Daily verse updated",
  });
}
