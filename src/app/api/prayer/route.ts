import { NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

export type PrayerTopic =
  | "Health & Healing"
  | "Family"
  | "Work & Career"
  | "Relationships"
  | "Financial"
  | "Grief & Loss"
  | "Guidance & Direction"
  | "Addiction & Recovery"
  | "Mental Health"
  | "Salvation of Loved One"
  | "Other";

export interface PrayerRequest {
  id: number;
  topic: PrayerTopic;
  text: string;
  anonymous: boolean;
  name: string | null;
  initials: string;
  location: string | null;
  prayCount: number;
  amenCount: number;
  createdAt: string;
}

export interface PrayerListResponse {
  success: boolean;
  requests: PrayerRequest[];
  count: number;
  page: number;
  pageSize: number;
}

export interface PrayerPostBody {
  topic: PrayerTopic;
  text: string;
  anonymous: boolean;
  name?: string;
}

export interface PrayerPostResponse {
  success: boolean;
  message: string;
  request: PrayerRequest;
}

export interface ApiError {
  success: false;
  error: string;
  details?: Record<string, string>;
}

// ─── Allowed topics ───────────────────────────────────────────────────────────

const VALID_TOPICS: PrayerTopic[] = [
  "Health & Healing",
  "Family",
  "Work & Career",
  "Relationships",
  "Financial",
  "Grief & Loss",
  "Guidance & Direction",
  "Addiction & Recovery",
  "Mental Health",
  "Salvation of Loved One",
  "Other",
];

// ─── Mock data ────────────────────────────────────────────────────────────────

const mockRequests: PrayerRequest[] = [
  {
    id: 1,
    topic: "Health & Healing",
    text: "Please pray for my husband James. He was diagnosed with stage 3 lymphoma two days ago and we're absolutely terrified. We have three young children. We believe in miracles and we're trusting God, but we need strength right now.",
    anonymous: false,
    name: "Sarah M.",
    initials: "SM",
    location: "Atlanta, GA",
    prayCount: 247,
    amenCount: 189,
    createdAt: "2026-05-25T10:12:00Z",
  },
  {
    id: 2,
    topic: "Guidance & Direction",
    text: "I'm at a crossroads — I've been offered a job overseas that would double my salary, but uprooting my family feels wrong. I need God's clear direction.",
    anonymous: false,
    name: "David K.",
    initials: "DK",
    location: "Dallas, TX",
    prayCount: 134,
    amenCount: 98,
    createdAt: "2026-05-25T08:45:00Z",
  },
  {
    id: 3,
    topic: "Salvation of Loved One",
    text: "My son walked away from faith 5 years ago. I've prayed every day. Please agree with me in prayer for his heart to return to the Lord.",
    anonymous: false,
    name: "Margaret T.",
    initials: "MT",
    location: "Birmingham, AL",
    prayCount: 512,
    amenCount: 410,
    createdAt: "2026-05-24T22:30:00Z",
  },
  {
    id: 4,
    topic: "Financial",
    text: "We're three months behind on rent. I lost my job in March and haven't found work. God is our provider — please pray for breakthrough.",
    anonymous: true,
    name: null,
    initials: "A",
    location: null,
    prayCount: 89,
    amenCount: 63,
    createdAt: "2026-05-24T16:00:00Z",
  },
  {
    id: 5,
    topic: "Mental Health",
    text: "The anxiety has been overwhelming this season. I know God is with me but I need prayer for peace that surpasses understanding.",
    anonymous: true,
    name: null,
    initials: "A",
    location: null,
    prayCount: 201,
    amenCount: 177,
    createdAt: "2026-05-24T11:20:00Z",
  },
  {
    id: 6,
    topic: "Relationships",
    text: "My marriage has been struggling for two years. My wife and I both love God but we've grown distant. Please pray for reconciliation and renewed love.",
    anonymous: false,
    name: "Michael R.",
    initials: "MR",
    location: "Charlotte, NC",
    prayCount: 318,
    amenCount: 255,
    createdAt: "2026-05-23T19:45:00Z",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateInitials(name?: string): string {
  if (!name) return "A";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function validatePostBody(body: unknown): {
  valid: boolean;
  data?: PrayerPostBody;
  details?: Record<string, string>;
} {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { valid: false, details: { body: "Request body must be a JSON object." } };
  }

  const b = body as Record<string, unknown>;
  const errors: Record<string, string> = {};

  // topic
  if (!b.topic) {
    errors.topic = "topic is required.";
  } else if (!VALID_TOPICS.includes(b.topic as PrayerTopic)) {
    errors.topic = `topic must be one of: ${VALID_TOPICS.join(", ")}.`;
  }

  // text
  if (!b.text || typeof b.text !== "string") {
    errors.text = "text is required and must be a string.";
  } else if ((b.text as string).trim().length < 10) {
    errors.text = "text must be at least 10 characters.";
  } else if ((b.text as string).length > 2000) {
    errors.text = "text must be 2000 characters or fewer.";
  }

  // anonymous
  if (typeof b.anonymous !== "boolean") {
    errors.anonymous = "anonymous must be a boolean (true or false).";
  }

  // name (optional but validated if present)
  if (
    b.name !== undefined &&
    b.name !== null &&
    (typeof b.name !== "string" || (b.name as string).length > 100)
  ) {
    errors.name = "name must be a string of 100 characters or fewer.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, details: errors };
  }

  return {
    valid: true,
    data: {
      topic: b.topic as PrayerTopic,
      text: (b.text as string).trim(),
      anonymous: b.anonymous as boolean,
      name: b.name as string | undefined,
    },
  };
}

// ─── GET /api/prayer ──────────────────────────────────────────────────────────

export async function GET(
  request: Request
): Promise<NextResponse<PrayerListResponse | ApiError>> {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const pageSize = Math.min(
    50,
    Math.max(1, parseInt(searchParams.get("pageSize") ?? "10", 10))
  );
  const topic = searchParams.get("topic") as PrayerTopic | null;

  let filtered = [...mockRequests];

  if (topic && VALID_TOPICS.includes(topic)) {
    filtered = filtered.filter((r) => r.topic === topic);
  }

  // Sort by newest first
  filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    success: true,
    requests: paged,
    count: filtered.length,
    page,
    pageSize,
  });
}

// ─── POST /api/prayer ─────────────────────────────────────────────────────────

export async function POST(
  request: Request
): Promise<NextResponse<PrayerPostResponse | ApiError>> {
  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Validate
  const { valid, data, details } = validatePostBody(body);
  if (!valid || !data) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed. Please correct the errors below.",
        details,
      },
      { status: 422 }
    );
  }

  // Build response object (in production: save to DB, trigger notifications, etc.)
  const newRequest: PrayerRequest = {
    id: mockRequests.length + 1,
    topic: data.topic,
    text: data.text,
    anonymous: data.anonymous,
    name: data.anonymous ? null : (data.name ?? "Anonymous"),
    initials: data.anonymous ? "A" : generateInitials(data.name),
    location: null,
    prayCount: 0,
    amenCount: 0,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(
    {
      success: true,
      message: "Your prayer request has been submitted. The community is with you.",
      request: newRequest,
    },
    { status: 201 }
  );
}
