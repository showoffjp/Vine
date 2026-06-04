"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  User,
  Bell,
  Lock,
  Palette,
  Heart,
  BookOpen,
  Link2,
  CreditCard,
  Camera,
  Check,
  Download,
  Trash2,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab =
  | "Account"
  | "Notifications"
  | "Privacy"
  | "Appearance"
  | "Faith Profile"
  | "Reading Plans"
  | "Connections"
  | "Billing";

// ─── Toggle Switch ────────────────────────────────────────────────────────────

function Toggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      aria-pressed={value}
      style={{
        width: 48,
        height: 26,
        borderRadius: 13,
        background: value
          ? "linear-gradient(135deg, #4a9e6e, #3a7d56)"
          : "#2A2A44",
        border: "none",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.25s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: value ? 25 : 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#F2F2F8",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      />
    </button>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      {title && (
        <h3
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#8A8AA8",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          background: "#12121F",
          border: "1px solid #1E1E32",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Form Field ───────────────────────────────────────────────────────────────

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 600,
          color: "#8A8AA8",
          marginBottom: 6,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0D0D1A",
  border: "1px solid #1E1E32",
  borderRadius: 8,
  padding: "10px 14px",
  color: "#F2F2F8",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

// ─── Notification Row ─────────────────────────────────────────────────────────

function NotifRow({
  label,
  desc,
  value,
  onChange,
  last,
}: {
  label: string;
  desc: string;
  value: boolean;
  onChange: (v: boolean) => void;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        borderBottom: last ? "none" : "1px solid #1E1E32",
        gap: 16,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 2 }}>
          {label}
        </div>
        <div style={{ fontSize: 12, color: "#6A6A88" }}>{desc}</div>
      </div>
      <Toggle value={value} onChange={onChange} />
    </div>
  );
}

// ─── Account Tab ──────────────────────────────────────────────────────────────

function AccountTab() {
  const [denomination, setDenomination] = useState("Non-denominational");
  const [saved, setSaved] = useState(false);
  const [displayName, setDisplayName] = useState("Jason Doe");
  const [username, setUsername] = useState("jasondoe");
  const [email, setEmail] = useState("jason@pharrgo.com");
  const [bio, setBio] = useState("Follower of Christ | Husband | Father | Proverbs 3:5-6");
  const [location, setLocation] = useState("Atlanta, GA");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement | null>(null);

  const onPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
  };

  useState(() => {
    try {
      const stored = localStorage.getItem("vine_user");
      if (stored) {
        const u = JSON.parse(stored);
        if (u.firstName || u.lastName) setDisplayName(`${u.firstName || ""} ${u.lastName || ""}`.trim());
        if (u.email) setEmail(u.email);
        if (u.denomination) setDenomination(u.denomination);
        if (u.bio) setBio(u.bio);
        if (u.location) setLocation(u.location);
        if (u.username) setUsername(u.username);
      }
    } catch {}
  });

  const handleSave = () => {
    try {
      const stored = localStorage.getItem("vine_user");
      const u = stored ? JSON.parse(stored) : {};
      const parts = displayName.split(" ");
      u.firstName = parts[0] || u.firstName;
      u.lastName = parts.slice(1).join(" ") || u.lastName;
      u.email = email;
      u.denomination = denomination;
      u.bio = bio;
      u.location = location;
      u.username = username;
      localStorage.setItem("vine_user", JSON.stringify(u));
    } catch {}
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const denoms = [
    "Non-denominational",
    "Baptist",
    "Catholic",
    "Methodist",
    "Presbyterian",
    "Lutheran",
    "Anglican / Episcopal",
    "Pentecostal",
    "Charismatic",
    "Reformed",
    "Evangelical",
    "Orthodox",
    "Other",
  ];

  return (
    <div>
      {/* Profile Photo */}
      <Section>
        <div
          style={{
            padding: "24px 20px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: avatarPreview
                  ? `center / cover no-repeat url(${avatarPreview})`
                  : "linear-gradient(135deg, #6B4FBB, #3a7d56)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
                color: "#F2F2F8",
              }}
            >
              {avatarPreview ? "" : "JD"}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#1E1E32",
                border: "2px solid #12121F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Camera size={12} color="#8A8AA8" />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 4 }}>
              Profile Photo
            </div>
            <div style={{ fontSize: 12, color: "#6A6A88", marginBottom: 10 }}>
              JPG, PNG or GIF. Max 5MB.
            </div>
            <input
              ref={photoInputRef}
              type="file"
              accept="image/png,image/jpeg,image/gif"
              onChange={onPhotoSelected}
              style={{ display: "none" }}
            />
            <button type="button"
              onClick={() => photoInputRef.current?.click()}
              style={{
                background: "linear-gradient(135deg, #4a9e6e, #3a7d56)",
                color: "#07070F",
                fontWeight: 700,
                fontSize: 12,
                border: "none",
                borderRadius: 6,
                padding: "7px 14px",
                cursor: "pointer",
              }}
            >
              {avatarPreview ? "Change Photo" : "Upload Photo"}
            </button>
          </div>
        </div>
      </Section>

      {/* Form Fields */}
      <Section title="Profile Information">
        <Field label="Display Name">
          <input style={inputStyle} value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </Field>
        <Field label="Username">
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6A6A88",
                fontSize: 14,
              }}
            >
              @
            </span>
            <input
              style={{ ...inputStyle, paddingLeft: 28 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </Field>
        <Field label="Email">
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Bio">
          <textarea
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: 90,
              fontFamily: "inherit",
            }}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Field>
        <Field label="Location">
          <input style={inputStyle} value={location} onChange={(e) => setLocation(e.target.value)} />
        </Field>
        <Field label="Website">
          <input style={inputStyle} aria-label="https://yoursite.com" placeholder="https://yoursite.com" />
        </Field>
        <Field label="Denomination">
          <select aria-label="Denomination"
            style={{
              ...inputStyle,
              appearance: "none",
              WebkitAppearance: "none",
              cursor: "pointer",
            }}
            value={denomination}
            onChange={(e) => setDenomination(e.target.value)}
          >
            {denoms.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </Field>
      </Section>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button type="button"
          onClick={handleSave}
          style={{
            background: saved ? "linear-gradient(135deg, #00AA55, #4a9e6e)" : "linear-gradient(135deg, #4a9e6e, #3a7d56)",
            color: "#07070F",
            fontWeight: 700,
            fontSize: 15,
            border: "none",
            borderRadius: 10,
            padding: "13px 32px",
            cursor: "pointer",
            display: "block",
            transition: "all 0.2s",
          }}
        >
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
        {saved && (
          <span style={{ color: "#3a7d56", fontSize: 13, fontWeight: 600 }}>
            Your profile has been updated.
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Notifications Tab ────────────────────────────────────────────────────────

function NotificationsTab() {
  const [notifs, setNotifs] = useState(() => {
    const defaults = {
      discussionReplies: true,
      prayerResponses: true,
      newFollowers: false,
      weeklyNewsletter: true,
      dailyVerse: true,
      devotionalReminders: true,
      communityActivity: false,
      eventReminders: true,
      creatorUpdates: false,
    };
    try {
      const s = localStorage.getItem("vine_settings_notifs");
      return s ? { ...defaults, ...JSON.parse(s) } : defaults;
    } catch { return defaults; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_settings_notifs", JSON.stringify(notifs)); } catch {}
  }, [notifs]);

  type Notifs = typeof notifs;
  const set = (key: keyof Notifs) => (v: boolean) =>
    setNotifs((prev: Notifs) => ({ ...prev, [key]: v }));

  return (
    <div>
      <Section title="Community">
        <NotifRow
          label="Discussion Replies"
          desc="When someone replies to your comment or post"
          value={notifs.discussionReplies}
          onChange={set("discussionReplies")}
        />
        <NotifRow
          label="Prayer Responses"
          desc="When people pray for your requests"
          value={notifs.prayerResponses}
          onChange={set("prayerResponses")}
        />
        <NotifRow
          label="New Followers"
          desc="When someone starts following your profile"
          value={notifs.newFollowers}
          onChange={set("newFollowers")}
          last
        />
      </Section>

      <Section title="Content">
        <NotifRow
          label="Daily Verse (8am)"
          desc="Receive today's verse every morning"
          value={notifs.dailyVerse}
          onChange={set("dailyVerse")}
        />
        <NotifRow
          label="Devotional Reminders"
          desc="Reminders for your active reading plan"
          value={notifs.devotionalReminders}
          onChange={set("devotionalReminders")}
        />
        <NotifRow
          label="Community Activity"
          desc="Trending posts and discussions in your circles"
          value={notifs.communityActivity}
          onChange={set("communityActivity")}
        />
        <NotifRow
          label="Event Reminders"
          desc="Upcoming events from circles you follow"
          value={notifs.eventReminders}
          onChange={set("eventReminders")}
        />
        <NotifRow
          label="Creator Updates"
          desc="New content from creators you follow"
          value={notifs.creatorUpdates}
          onChange={set("creatorUpdates")}
          last
        />
      </Section>

      <Section title="Account">
        <NotifRow
          label="Weekly Newsletter"
          desc="Vine's curated weekly digest of top content"
          value={notifs.weeklyNewsletter}
          onChange={set("weeklyNewsletter")}
          last
        />
      </Section>
    </div>
  );
}

// ─── Privacy Tab ──────────────────────────────────────────────────────────────

type Visibility = "everyone" | "members" | "nobody";

function RadioGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 10 }}>
        {label}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((opt) => (
          <label
            key={opt.value}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
              fontSize: 14,
              color: value === opt.value ? "#F2F2F8" : "#8A8AA8",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: `2px solid ${value === opt.value ? "#3a7d56" : "#2A2A44"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {value === opt.value && (
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#3a7d56",
                  }}
                />
              )}
            </span>
            <input
              type="radio"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              style={{ display: "none" }}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

function PrivacyTab() {
  const [profileVis, setProfileVis] = useState<Visibility>(() => {
    try { return (localStorage.getItem("vine_privacy_profile") as Visibility) || "everyone"; } catch { return "everyone"; }
  });
  const [messageVis, setMessageVis] = useState<Visibility>(() => {
    try { return (localStorage.getItem("vine_privacy_messages") as Visibility) || "members"; } catch { return "members"; }
  });
  const [showInConnect, setShowInConnect] = useState(() => {
    try { return localStorage.getItem("vine_privacy_connect") !== "0"; } catch { return true; }
  });
  const [indexable, setIndexable] = useState(() => {
    try { return localStorage.getItem("vine_privacy_indexable") === "1"; } catch { return false; }
  });
  const [exportRequested, setExportRequested] = useState(false);
  const [deleteStep, setDeleteStep] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    try { localStorage.setItem("vine_privacy_profile", profileVis); } catch {}
  }, [profileVis]);
  useEffect(() => {
    try { localStorage.setItem("vine_privacy_messages", messageVis); } catch {}
  }, [messageVis]);
  useEffect(() => {
    try { localStorage.setItem("vine_privacy_connect", showInConnect ? "1" : "0"); } catch {}
  }, [showInConnect]);
  useEffect(() => {
    try { localStorage.setItem("vine_privacy_indexable", indexable ? "1" : "0"); } catch {}
  }, [indexable]);

  const visibilityOptions = [
    { value: "everyone", label: "Everyone" },
    { value: "members", label: "Vine members only" },
    { value: "nobody", label: "Nobody" },
  ];

  return (
    <div>
      <Section title="Visibility">
        <RadioGroup
          label="Who can see your profile"
          value={profileVis}
          onChange={(v) => setProfileVis(v as Visibility)}
          options={visibilityOptions}
        />
        <RadioGroup
          label="Who can message you"
          value={messageVis}
          onChange={(v) => setMessageVis(v as Visibility)}
          options={[
            { value: "everyone", label: "Everyone" },
            { value: "members", label: "Followers only" },
            { value: "nobody", label: "Nobody" },
          ]}
        />
        <NotifRow
          label="Show in Global Connect"
          desc="Let believers worldwide discover your profile"
          value={showInConnect}
          onChange={setShowInConnect}
        />
        <NotifRow
          label="Indexable by search engines"
          desc="Allow Google and others to index your public profile"
          value={indexable}
          onChange={setIndexable}
          last
        />
      </Section>

      <Section title="Data & Privacy">
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 4 }}>
            Download My Data
          </div>
          <div style={{ fontSize: 12, color: "#6A6A88", marginBottom: 12 }}>
            Get a copy of all your Vine data including posts, prayers, and account info.
          </div>
          <button type="button"
            onClick={() => setExportRequested(true)}
            disabled={exportRequested}
            style={{
              background: exportRequested ? "rgba(58,125,86,0.12)" : "transparent",
              border: `1px solid ${exportRequested ? "rgba(58,125,86,0.4)" : "#1E1E32"}`,
              borderRadius: 8,
              padding: "8px 16px",
              color: exportRequested ? "#3a7d56" : "#F2F2F8",
              fontSize: 13,
              fontWeight: 600,
              cursor: exportRequested ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Download size={14} />
            {exportRequested ? "Export requested — we'll email you a link" : "Request Data Export"}
          </button>
        </div>
        <div style={{ padding: "16px 20px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#BB4F4F",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Danger Zone
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 4 }}>
            Delete Account
          </div>
          <div style={{ fontSize: 12, color: "#6A6A88", marginBottom: 12 }}>
            Permanently delete your account and all associated data. This cannot be undone.
          </div>
          {deleteStep === 2 ? (
            <div style={{ fontSize: 13, color: "#BB4F4F", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <Trash2 size={14} />
              Account scheduled for deletion. You have 14 days to change your mind by signing back in.
            </div>
          ) : deleteStep === 1 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 13, color: "#F2F2F8", fontWeight: 600 }}>
                Are you sure? This will permanently remove your account.
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button type="button"
                  onClick={() => setDeleteStep(2)}
                  style={{
                    background: "#BB4F4F", border: "none", borderRadius: 8, padding: "8px 16px",
                    color: "#07070F", fontSize: 13, fontWeight: 700, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6,
                  }}
                >
                  <Trash2 size={14} />
                  Yes, delete my account
                </button>
                <button type="button"
                  onClick={() => setDeleteStep(0)}
                  style={{
                    background: "transparent", border: "1px solid #1E1E32", borderRadius: 8,
                    padding: "8px 16px", color: "#F2F2F8", fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button type="button"
              onClick={() => setDeleteStep(1)}
              style={{
                background: "transparent",
                border: "1px solid #BB4F4F",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#BB4F4F",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Trash2 size={14} />
              Delete My Account
            </button>
          )}
        </div>
      </Section>
    </div>
  );
}

// ─── Appearance Tab ───────────────────────────────────────────────────────────

function AppearanceTab() {
  const [fontSize, setFontSize] = useState<"Small" | "Medium" | "Large">(() => {
    try { return (localStorage.getItem("vine_appear_fontsize") as "Small" | "Medium" | "Large") || "Medium"; } catch { return "Medium"; }
  });
  const [compact, setCompact] = useState(() => {
    try { return localStorage.getItem("vine_appear_compact") === "1"; } catch { return false; }
  });
  const [reduceAnim, setReduceAnim] = useState(() => {
    try { return localStorage.getItem("vine_appear_anim") === "1"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_appear_fontsize", fontSize); } catch {}
  }, [fontSize]);
  useEffect(() => {
    try { localStorage.setItem("vine_appear_compact", compact ? "1" : "0"); } catch {}
  }, [compact]);
  useEffect(() => {
    try { localStorage.setItem("vine_appear_anim", reduceAnim ? "1" : "0"); } catch {}
  }, [reduceAnim]);

  const themes = [
    { id: "dark", label: "Dark", available: true },
    { id: "light", label: "Light", available: false },
    { id: "system", label: "System", available: false },
  ];

  const fontSizes = ["Small", "Medium", "Large"] as const;

  return (
    <div>
      <Section title="Theme">
        <div style={{ padding: "20px", display: "flex", gap: 12 }}>
          {themes.map((t) => (
            <div
              key={t.id}
              style={{
                flex: 1,
                border: `2px solid ${!t.available ? "#1E1E32" : t.id === "dark" ? "#3a7d56" : "#1E1E32"}`,
                borderRadius: 12,
                padding: "16px 12px",
                textAlign: "center",
                cursor: t.available ? "pointer" : "not-allowed",
                opacity: t.available ? 1 : 0.5,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 8,
                  background:
                    t.id === "dark"
                      ? "#07070F"
                      : t.id === "light"
                      ? "#F8F8FF"
                      : "linear-gradient(to right, #07070F 50%, #F8F8FF 50%)",
                  marginBottom: 10,
                  border: "1px solid #1E1E32",
                }}
              />
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F2F8" }}>
                {t.label}
              </div>
              {!t.available && (
                <div style={{ fontSize: 10, color: "#6A6A88", marginTop: 2 }}>
                  Coming soon
                </div>
              )}
              {t.id === "dark" && (
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#3a7d56",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={11} color="#07070F" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Text">
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 10 }}>
            Font Size
          </div>
          <div
            style={{
              display: "flex",
              background: "#0D0D1A",
              border: "1px solid #1E1E32",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {fontSizes.map((size) => (
              <button type="button"
                key={size}
                onClick={() => setFontSize(size)}
                style={{
                  flex: 1,
                  padding: "9px 0",
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background:
                    fontSize === size
                      ? "linear-gradient(135deg, #4a9e6e, #3a7d56)"
                      : "transparent",
                  color: fontSize === size ? "#07070F" : "#8A8AA8",
                  transition: "all 0.2s",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <NotifRow
          label="Compact Mode"
          desc="Reduce spacing to fit more content on screen"
          value={compact}
          onChange={setCompact}
        />
        <NotifRow
          label="Reduce Animations"
          desc="Minimize motion for accessibility and focus"
          value={reduceAnim}
          onChange={setReduceAnim}
          last
        />
      </Section>
    </div>
  );
}

// ─── Faith Profile Tab ────────────────────────────────────────────────────────

const spiritualGifts = [
  "Teaching",
  "Encouragement",
  "Giving",
  "Leadership",
  "Mercy",
  "Service",
  "Prophecy",
  "Evangelism",
  "Hospitality",
];

function FaithProfileTab() {
  const [years, setYears] = useState(12);
  const [gifts, setGifts] = useState<string[]>(["Teaching", "Encouragement"]);
  const [mentor, setMentor] = useState(false);
  const [seekMentor, setSeekMentor] = useState(true);

  const toggleGift = (g: string) =>
    setGifts((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );

  return (
    <div>
      <Section title="Faith Background">
        <Field label="Denomination">
          <select
            aria-label="Denomination"
            style={{
              ...inputStyle,
              appearance: "none",
              WebkitAppearance: "none",
              cursor: "pointer",
            }}
            defaultValue="Non-denominational"
          >
            {[
              "Non-denominational",
              "Baptist",
              "Catholic",
              "Methodist",
              "Presbyterian",
              "Lutheran",
              "Anglican / Episcopal",
              "Pentecostal",
              "Charismatic",
              "Reformed",
              "Evangelical",
              "Orthodox",
              "Other",
            ].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </Field>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
          <label
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "#8A8AA8",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Years Following Jesus
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 8,
            }}
          >
            <input
              type="range"
              min={1}
              max={50}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{ flex: 1, accentColor: "#3a7d56" }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#3a7d56",
                minWidth: 40,
                textAlign: "right",
              }}
            >
              {years === 50 ? "50+" : years}
              {years < 50 && " yr"}
            </span>
          </div>
        </div>
        <Field label="Testimony (optional)">
          <textarea
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: 100,
              fontFamily: "inherit",
            }}
            aria-label="Share a brief testimony of your faith journey..." placeholder="Share a brief testimony of your faith journey..."
          />
        </Field>
      </Section>

      <Section title="Spiritual Gifts">
        <div style={{ padding: "16px 20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {spiritualGifts.map((g) => {
              const selected = gifts.includes(g);
              return (
                <button type="button"
                  key={g}
                  onClick={() => toggleGift(g)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 20,
                    border: `1px solid ${selected ? "#3a7d56" : "#1E1E32"}`,
                    background: selected ? "rgba(58,125,86,0.12)" : "transparent",
                    color: selected ? "#3a7d56" : "#8A8AA8",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {selected && <Check size={11} style={{ marginRight: 4 }} />}
                  {g}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Mentorship">
        <NotifRow
          label="Willing to Mentor"
          desc="Make yourself available to mentor newer believers"
          value={mentor}
          onChange={setMentor}
        />
        <NotifRow
          label="Looking for a Mentor"
          desc="Connect you with experienced believers in your area"
          value={seekMentor}
          onChange={setSeekMentor}
          last
        />
      </Section>
    </div>
  );
}

// ─── Reading Plans Tab ────────────────────────────────────────────────────────

function ReadingPlansTab() {
  const [translation, setTranslation] = useState("NIV");
  const translations = ["NIV", "ESV", "KJV", "NKJV", "NLT", "MSG"];
  const [readingDays, setReadingDays] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_reading_days"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  const PLAN_TOTAL = 90;
  const daysCompleted = Math.min(readingDays.size, PLAN_TOTAL);
  const pctComplete = Math.round((daysCompleted / PLAN_TOTAL) * 100);
  const daysRemaining = PLAN_TOTAL - daysCompleted;
  const readingStreak = (() => {
    let s = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today); d.setDate(today.getDate() - i);
      if (readingDays.has(d.toISOString().split("T")[0])) s++;
      else if (i > 0) break;
    }
    return s;
  })();

  return (
    <div>
      <Section title="Active Plan">
        <div style={{ padding: "20px" }}>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(58,125,86,0.1))",
              border: "1px solid #2A2A44",
              borderRadius: 12,
              padding: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8", marginBottom: 2 }}>
                  New Testament in 90 Days
                </div>
                <div style={{ fontSize: 12, color: "#8A8AA8" }}>Day {daysCompleted} of {PLAN_TOTAL}</div>
              </div>
              <div
                style={{
                  background: "rgba(58,125,86,0.15)",
                  border: "1px solid rgba(58,125,86,0.3)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#3a7d56",
                }}
              >
                🔥 {readingStreak}-day streak
              </div>
            </div>
            <div
              style={{
                background: "#0D0D1A",
                borderRadius: 6,
                height: 8,
                overflow: "hidden",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pctComplete}%`,
                  background: "linear-gradient(90deg, #6B4FBB, #3a7d56)",
                  borderRadius: 6,
                }}
              />
            </div>
            <div style={{ fontSize: 11, color: "#6A6A88" }}>
              {pctComplete}% complete — {daysRemaining} days remaining
            </div>
          </div>
        </div>
      </Section>

      <Section title="Reading Reminders">
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 8 }}>
            Daily Reminder Time
          </div>
          <input
            type="time"
            defaultValue="07:00"
            style={{
              ...inputStyle,
              width: "auto",
              fontWeight: 700,
              fontSize: 16,
              color: "#3a7d56",
            }}
          />
        </div>
      </Section>

      <Section title="Translation Preference">
        <div style={{ padding: "16px 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {translations.map((t) => (
              <button type="button"
                key={t}
                onClick={() => setTranslation(t)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: `1px solid ${translation === t ? "#3a7d56" : "#1E1E32"}`,
                  background: translation === t ? "rgba(58,125,86,0.12)" : "transparent",
                  color: translation === t ? "#3a7d56" : "#8A8AA8",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

// ─── Connections Tab ──────────────────────────────────────────────────────────

function ConnectionsTab() {
  const [providers, setProviders] = useState([
    {
      name: "Google",
      connected: true,
      email: "jason@gmail.com",
      icon: "G",
      color: "#EA4335",
    },
    {
      name: "Apple",
      connected: false,
      email: null as string | null,
      icon: "",
      color: "#F2F2F8",
    },
    {
      name: "Facebook",
      connected: false,
      email: null as string | null,
      icon: "f",
      color: "#1877F2",
    },
  ]);
  const [contactsImported, setContactsImported] = useState(false);
  const [inviteCopied, setInviteCopied] = useState(false);

  const connectProvider = (name: string) =>
    setProviders((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, connected: true, email: "jason@pharrgo.com" } : p
      )
    );

  const copyInvite = async () => {
    const url = `${typeof window !== "undefined" ? window.location.origin : "https://vine.community"}/?invite=jasondoe`;
    try { await navigator.clipboard.writeText(url); } catch {}
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  };

  return (
    <div>
      <Section title="Connected Accounts">
        {providers.map((p, i) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: i < providers.length - 1 ? "1px solid #1E1E32" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: `${p.color}22`,
                  border: `1px solid ${p.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 900,
                  color: p.color,
                }}
              >
                {p.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 12, color: "#6A6A88" }}>
                  {p.connected ? p.email : "Not connected"}
                </div>
              </div>
            </div>
            {p.connected ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#4CAF82",
                }}
              >
                <Check size={13} />
                Connected
              </div>
            ) : (
              <button type="button"
                onClick={() => connectProvider(p.name)}
                style={{
                  background: "transparent",
                  border: "1px solid #1E1E32",
                  borderRadius: 7,
                  padding: "6px 14px",
                  color: "#F2F2F8",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </Section>

      <Section title="Find People You Know">
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F2F8", marginBottom: 4 }}>
            Import Contacts
          </div>
          <div style={{ fontSize: 12, color: "#6A6A88", marginBottom: 12 }}>
            Sync your phone contacts to find friends already on Vine. We never store your contacts.
          </div>
          <button type="button"
            onClick={() => setContactsImported(true)}
            disabled={contactsImported}
            style={{
              background: contactsImported ? "rgba(58,125,86,0.12)" : "transparent",
              border: `1px solid ${contactsImported ? "rgba(58,125,86,0.4)" : "#1E1E32"}`,
              borderRadius: 8,
              padding: "8px 16px",
              color: contactsImported ? "#3a7d56" : "#F2F2F8",
              fontSize: 13,
              fontWeight: 600,
              cursor: contactsImported ? "default" : "pointer",
            }}
          >
            {contactsImported ? "Contacts synced — 0 friends found yet" : "Import Contacts"}
          </button>
        </div>
        <div style={{ padding: "16px 20px" }}>
          <button type="button"
            onClick={copyInvite}
            style={{
              background: "linear-gradient(135deg, #4a9e6e, #3a7d56)",
              color: "#07070F",
              fontWeight: 700,
              fontSize: 13,
              border: "none",
              borderRadius: 8,
              padding: "9px 20px",
              cursor: "pointer",
            }}
          >
            {inviteCopied ? "Invite link copied!" : "Find Friends on Vine"}
          </button>
        </div>
      </Section>
    </div>
  );
}

// ─── Billing Tab ──────────────────────────────────────────────────────────────

function BillingTab() {
  const freeFeatures = [
    "Access to all public discussions",
    "Unlimited prayer wall posts",
    "Daily verse & devotionals",
    "Bible reader with 6 translations",
    "Join up to 5 circles",
    "Basic profile",
    "Weekly challenge participation",
  ];

  const proFeatures = [
    "Ad-free experience",
    "Exclusive Vine Pro content",
    "Creator tools & monetization",
    "Advanced analytics & insights",
    "Priority support",
    "Unlimited circles",
    "Custom profile badge",
    "Early access to new features",
  ];

  return (
    <div>
      <Section title="Current Plan">
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div
              style={{
                background: "rgba(107,79,187,0.15)",
                border: "1px solid rgba(107,79,187,0.3)",
                borderRadius: 8,
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 700,
                color: "#6B4FBB",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Free
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#F2F2F8" }}>
              Vine Free — Forever Free
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {freeFeatures.map((f) => (
              <div
                key={f}
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8A8AA8" }}
              >
                <Check size={14} color="#4CAF82" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pro upgrade card */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.12))",
          border: "1px solid rgba(58,125,86,0.25)",
          borderRadius: 16,
          padding: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Coming Soon ribbon */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: -24,
            background: "linear-gradient(135deg, #4a9e6e, #3a7d56)",
            color: "#07070F",
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 32px",
            transform: "rotate(30deg)",
          }}
        >
          Coming Soon
        </div>

        <div style={{ marginBottom: 6 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#3a7d56",
              textTransform: "uppercase",
            }}
          >
            Vine Pro
          </span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#F2F2F8", marginBottom: 4 }}>
          $7{" "}
          <span style={{ fontSize: 14, fontWeight: 400, color: "#8A8AA8" }}>
            / month
          </span>
        </div>
        <div style={{ fontSize: 13, color: "#8A8AA8", marginBottom: 20 }}>
          Everything in Free, plus powerful tools for serious believers.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {proFeatures.map((f) => (
            <div
              key={f}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3a7d56" }}
            >
              <Check size={14} />
              {f}
            </div>
          ))}
        </div>

        <button type="button"
          disabled
          style={{
            background: "linear-gradient(135deg, #4a9e6e, #3a7d56)",
            color: "#07070F",
            fontWeight: 700,
            fontSize: 14,
            border: "none",
            borderRadius: 10,
            padding: "12px 28px",
            cursor: "not-allowed",
            opacity: 0.7,
          }}
        >
          Upgrade to Pro — Coming Soon
        </button>
      </div>
    </div>
  );
}

// ─── Tab config ───────────────────────────────────────────────────────────────

const TABS: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "Account", icon: <User size={16} />, label: "Account" },
  { id: "Notifications", icon: <Bell size={16} />, label: "Notifications" },
  { id: "Privacy", icon: <Lock size={16} />, label: "Privacy" },
  { id: "Appearance", icon: <Palette size={16} />, label: "Appearance" },
  { id: "Faith Profile", icon: <Heart size={16} />, label: "Faith Profile" },
  { id: "Reading Plans", icon: <BookOpen size={16} />, label: "Reading Plans" },
  { id: "Connections", icon: <Link2 size={16} />, label: "Connections" },
  { id: "Billing", icon: <CreditCard size={16} />, label: "Billing" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_settings_tab", "Account");

  function renderTab() {
    switch (activeTab) {
      case "Account":
        return <AccountTab />;
      case "Notifications":
        return <NotificationsTab />;
      case "Privacy":
        return <PrivacyTab />;
      case "Appearance":
        return <AppearanceTab />;
      case "Faith Profile":
        return <FaithProfileTab />;
      case "Reading Plans":
        return <ReadingPlansTab />;
      case "Connections":
        return <ConnectionsTab />;
      case "Billing":
        return <BillingTab />;
    }
  }

  return (
    <div style={{ background: "#07070F", minHeight: "100vh", color: "#F2F2F8" }}>
      <Navbar />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Page header */}
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F2F2F8", marginBottom: 4 }}>
            Settings
          </h1>
          <p style={{ fontSize: 14, color: "#6A6A88" }}>
            Manage your account, notifications, and preferences.
          </p>
        </div>

        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <nav
            style={{
              width: 220,
              flexShrink: 0,
              background: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: 14,
              padding: "10px 0",
              position: "sticky",
              top: 24,
            }}
          >
            {TABS.map((tab) => {
              const active = tab.id === activeTab;
              return (
                <button type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    padding: "11px 18px",
                    background: active ? "rgba(58,125,86,0.08)" : "transparent",
                    border: "none",
                    borderLeft: `3px solid ${active ? "#3a7d56" : "transparent"}`,
                    color: active ? "#3a7d56" : "#8A8AA8",
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Content */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              opacity: 1,
              transition: "opacity 0.15s",
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#F2F2F8",
                marginBottom: 24,
              }}
            >
              {activeTab}
            </h2>
            {renderTab()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
