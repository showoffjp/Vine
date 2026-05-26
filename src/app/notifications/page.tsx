import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Your Vine notifications — replies, prayers, followers, and more.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

type NotifCategory =
  | "prayer"
  | "reply"
  | "milestone"
  | "devotional"
  | "like"
  | "follow"
  | "challenge"
  | "badge"
  | "event"
  | "resource"
  | "circle"
  | "system";

interface Notification {
  id: number;
  emoji: string;
  emojiBg: string;
  text: string;
  time: string;
  read: boolean;
  category: NotifCategory;
  action: string;
  href: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const todayNotifs: Notification[] = [
  {
    id: 1,
    emoji: "🙏",
    emojiBg: "#4CAF82",
    text: "12 people prayed for your request about your mother's health",
    time: "2m ago",
    read: false,
    category: "prayer",
    action: "View Prayers",
    href: "/prayer",
  },
  {
    id: 2,
    emoji: "💬",
    emojiBg: "#6B4FBB",
    text: "Dr. James Okafor replied to your comment in r/Apologetics: \"Great point about the historicity of the resurrection...\"",
    time: "15m ago",
    read: false,
    category: "reply",
    action: "View Reply",
    href: "/discussions/resurrection-evidence-002",
  },
  {
    id: 3,
    emoji: "🔥",
    emojiBg: "#E8A030",
    text: "Your post 'How I applied Proverbs 3:9 to pay off $40K in debt' reached 1,000 upvotes!",
    time: "1h ago",
    read: false,
    category: "milestone",
    action: "See Post",
    href: "/discussions/biblical-finances-stewardship-007",
  },
  {
    id: 4,
    emoji: "📖",
    emojiBg: "#3A7BD5",
    text: "Your Day 22 devotional is ready: 'When God Whispers'",
    time: "This morning",
    read: false,
    category: "devotional",
    action: "Read Now",
    href: "/daily",
  },
  {
    id: 5,
    emoji: "❤️",
    emojiBg: "#BB4F7A",
    text: "Sarah M. from Kenya liked your prayer response",
    time: "2h ago",
    read: false,
    category: "like",
    action: "View",
    href: "/prayer",
  },
  {
    id: 6,
    emoji: "👥",
    emojiBg: "#2A6496",
    text: "Marcus Johnson and 3 others started following you",
    time: "3h ago",
    read: true,
    category: "follow",
    action: "View Profiles",
    href: "/community",
  },
  {
    id: 7,
    emoji: "🎯",
    emojiBg: "#6B4FBB",
    text: "Weekly Challenge update: 847 people completed Day 4 with you!",
    time: "4h ago",
    read: true,
    category: "challenge",
    action: "View Challenge",
    href: "/reading-plan",
  },
  {
    id: 8,
    emoji: "🏆",
    emojiBg: "#00CC66",
    text: "You earned the 'Prayer Warrior' badge — 100+ prayers prayed!",
    time: "5h ago",
    read: true,
    category: "badge",
    action: "View Badge",
    href: "/profile",
  },
];

const yesterdayNotifs: Notification[] = [
  {
    id: 9,
    emoji: "🙏",
    emojiBg: "#4CAF82",
    text: "8 people prayed for your marriage restoration request",
    time: "Yesterday, 9:14 PM",
    read: true,
    category: "prayer",
    action: "View Prayers",
    href: "/prayer",
  },
  {
    id: 10,
    emoji: "💬",
    emojiBg: "#6B4FBB",
    text: "Pastor Ade replied in 'Theology & Life': \"This is exactly the kind of discussion Vine needs. Romans 12:2 says...\"",
    time: "Yesterday, 7:02 PM",
    read: true,
    category: "reply",
    action: "View Thread",
    href: "/discussions",
  },
  {
    id: 11,
    emoji: "👥",
    emojiBg: "#2A6496",
    text: "Grace Fellowship Circle accepted your join request",
    time: "Yesterday, 4:30 PM",
    read: true,
    category: "circle",
    action: "Visit Circle",
    href: "/groups/young-adults",
  },
  {
    id: 12,
    emoji: "🏆",
    emojiBg: "#00CC66",
    text: "You earned the 'Scripture Scholar' badge — 30-day reading streak!",
    time: "Yesterday, 8:00 AM",
    read: true,
    category: "badge",
    action: "View Badge",
    href: "/profile",
  },
  {
    id: 13,
    emoji: "❤️",
    emojiBg: "#BB4F7A",
    text: "Esther N. and 14 others liked your comment on 'Praying for Prodigal Sons'",
    time: "Yesterday, 2:17 PM",
    read: true,
    category: "like",
    action: "View",
    href: "/prayer",
  },
  {
    id: 14,
    emoji: "📖",
    emojiBg: "#3A7BD5",
    text: "Your Day 21 devotional: 'The Discipline of Silence' — still waiting for you",
    time: "Yesterday, 8:00 AM",
    read: true,
    category: "devotional",
    action: "Read Now",
    href: "/daily",
  },
];

const thisWeekNotifs: Notification[] = [
  {
    id: 15,
    emoji: "📅",
    emojiBg: "#3A7BD5",
    text: "Reminder: 'Night of Worship — Houston' is in 3 days. 1,200 people are going.",
    time: "Mon, 10:00 AM",
    read: true,
    category: "event",
    action: "View Event",
    href: "/events",
  },
  {
    id: 16,
    emoji: "🎯",
    emojiBg: "#6B4FBB",
    text: "This week's challenge 'Bless a Stranger' has 3,412 participants. You completed it!",
    time: "Mon, 8:00 AM",
    read: true,
    category: "challenge",
    action: "View Challenge",
    href: "/reading-plan",
  },
  {
    id: 17,
    emoji: "🔖",
    emojiBg: "#E8A030",
    text: "The resource you saved, 'Navigating Doubt with Grace,' was updated by the author.",
    time: "Sun, 3:45 PM",
    read: true,
    category: "resource",
    action: "View Resource",
    href: "/resources",
  },
  {
    id: 18,
    emoji: "👥",
    emojiBg: "#4CAF82",
    text: "You were invited to join 'Men of Valor' — a private circle for Christian men.",
    time: "Sat, 11:22 AM",
    read: true,
    category: "circle",
    action: "View Invite",
    href: "/groups",
  },
  {
    id: 19,
    emoji: "🔥",
    emojiBg: "#E8A030",
    text: "Your comment in r/Marriage reached 500 upvotes — it's trending!",
    time: "Fri, 6:00 PM",
    read: true,
    category: "milestone",
    action: "See Comment",
    href: "/discussions",
  },
  {
    id: 20,
    emoji: "⚙️",
    emojiBg: "#6A6A88",
    text: "Vine updated its Community Guidelines. Key changes to discussion posting rules.",
    time: "Thu, 9:00 AM",
    read: true,
    category: "system",
    action: "Read Update",
    href: "/community-guidelines",
  },
];

// ─── Category color map ───────────────────────────────────────────────────────

const categoryColors: Record<NotifCategory, string> = {
  prayer: "#4CAF82",
  reply: "#6B4FBB",
  milestone: "#E8A030",
  devotional: "#3A7BD5",
  like: "#BB4F7A",
  follow: "#2A6496",
  challenge: "#6B4FBB",
  badge: "#00FF88",
  event: "#3A7BD5",
  resource: "#E8A030",
  circle: "#4CAF82",
  system: "#6A6A88",
};

// ─── Notification Item (Client component would allow hover state;
//     here we keep it server-renderable with CSS-in-JSX patterns) ─────────────

function NotifItem({
  notif,
  last,
}: {
  notif: Notification;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "16px 20px",
        borderBottom: last ? "none" : "1px solid #1E1E32",
        background: notif.read ? "transparent" : "rgba(0,255,136,0.03)",
        position: "relative",
      }}
    >
      {/* Emoji bubble */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: `${notif.emojiBg}22`,
          border: `1px solid ${notif.emojiBg}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {notif.emoji}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: 14,
            color: notif.read ? "#8A8AA8" : "#F2F2F8",
            fontWeight: notif.read ? 400 : 500,
            lineHeight: 1.5,
            margin: 0,
            marginBottom: 6,
          }}
        >
          {notif.text}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, color: "#6A6A88" }}>{notif.time}</span>
          <a
            href={notif.href}
            style={{
              fontSize: 12,
              color: categoryColors[notif.category],
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {notif.action} →
          </a>
        </div>
      </div>

      {/* Unread dot */}
      {!notif.read && (
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00FF88",
            flexShrink: 0,
            marginTop: 6,
          }}
        />
      )}
    </div>
  );
}

// ─── Group header ─────────────────────────────────────────────────────────────

function GroupHeader({ label, count }: { label: string; count: number }) {
  return (
    <div
      style={{
        padding: "10px 20px",
        background: "#0D0D1A",
        borderBottom: "1px solid #1E1E32",
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#8A8AA8",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#6A6A88",
        }}
      >
        {count} notification{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const unreadCount = [...todayNotifs, ...yesterdayNotifs, ...thisWeekNotifs].filter(
    (n) => !n.read
  ).length;

  const filterOptions = ["All", "Unread", "Mentions", "Prayers", "Community", "System"];

  return (
    <div style={{ background: "#07070F", minHeight: "100vh", color: "#F2F2F8" }}>
      <Navbar />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Page header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#F2F2F8",
                marginBottom: 4,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Notifications
              {unreadCount > 0 && (
                <span
                  style={{
                    background: "#00FF88",
                    color: "#07070F",
                    fontSize: 12,
                    fontWeight: 800,
                    borderRadius: 20,
                    padding: "2px 9px",
                  }}
                >
                  {unreadCount}
                </span>
              )}
            </h1>
            <p style={{ fontSize: 14, color: "#6A6A88" }}>
              Stay connected with your community and content.
            </p>
          </div>

          <a
            href="/notifications"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#00FF88",
              textDecoration: "none",
            }}
          >
            Mark all as read
          </a>
        </div>

        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            gap: 6,
            overflowX: "auto",
            marginBottom: 24,
            paddingBottom: 4,
          }}
        >
          {filterOptions.map((f, i) => (
            <button
              key={f}
              style={{
                padding: "7px 16px",
                borderRadius: 20,
                border: "1px solid",
                borderColor: i === 0 ? "#00FF88" : "#1E1E32",
                background:
                  i === 0 ? "rgba(0,255,136,0.12)" : "transparent",
                color: i === 0 ? "#00FF88" : "#8A8AA8",
                fontSize: 13,
                fontWeight: i === 0 ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Notification groups */}
        <div
          style={{
            background: "#12121F",
            border: "1px solid #1E1E32",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {/* Today */}
          <GroupHeader label="Today" count={todayNotifs.length} />
          {todayNotifs.map((n, i) => (
            <NotifItem key={n.id} notif={n} last={i === todayNotifs.length - 1} />
          ))}

          {/* Yesterday */}
          <GroupHeader label="Yesterday" count={yesterdayNotifs.length} />
          {yesterdayNotifs.map((n, i) => (
            <NotifItem
              key={n.id}
              notif={n}
              last={i === yesterdayNotifs.length - 1}
            />
          ))}

          {/* This week */}
          <GroupHeader label="This Week" count={thisWeekNotifs.length} />
          {thisWeekNotifs.map((n, i) => (
            <NotifItem
              key={n.id}
              notif={n}
              last={i === thisWeekNotifs.length - 1}
            />
          ))}
        </div>

        {/* Empty state (hidden when there's data) */}
        {false && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              background: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: 14,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔔</div>
            <h3
              style={{ fontSize: 18, fontWeight: 700, color: "#F2F2F8", marginBottom: 8 }}
            >
              You're all caught up!
            </h3>
            <p style={{ fontSize: 14, color: "#6A6A88" }}>
              No new notifications right now. Check back later.
            </p>
          </div>
        )}

        {/* Load more */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid #1E1E32",
              borderRadius: 10,
              padding: "10px 28px",
              color: "#8A8AA8",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Load older notifications
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
