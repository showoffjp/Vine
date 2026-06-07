"use client";

import { useState } from "react";
import { X, Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";

const interests = [
  "Theology", "Devotionals", "Mental Health", "Life Hacks",
  "Parenting", "Relationships", "Finance", "Worship",
  "Apologetics", "Youth Ministry", "Leadership", "Missions",
  "Prayer", "Bible Study", "Evangelism", "Community",
];

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

export default function AuthModal({ open, onClose, initialMode = "signup" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup" | "interests">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);

  // Signup form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Signin form state
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  if (!open) return null;

  const toggleInterest = (i: string) =>
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  const handleCreateAccount = () => {
    if (!firstName.trim()) { setError("Please enter your first name."); return; }
    if (!signupEmail.trim()) { setError("Please enter your email address."); return; }
    if (signupPassword.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError("");
    setMode("interests");
  };

  const handleEnterVine = () => {
    const userData = {
      name: `${firstName} ${lastName}`.trim() || "Vine Member",
      firstName: firstName || "Vine",
      lastName: lastName || "Member",
      email: signupEmail || "member@vine.community",
      interests: selectedInterests,
      joinedAt: new Date().toISOString(),
      avatar: (firstName[0] || "V").toUpperCase() + (lastName[0] || "M").toUpperCase(),
    };
    localStorage.setItem("vine_user", JSON.stringify(userData));
    window.location.href = "/feed";
  };

  const handleSignIn = () => {
    if (!signinEmail.trim()) { setError("Please enter your email address."); return; }
    if (!signinPassword.trim()) { setError("Please enter your password."); return; }
    setError("");
    // Demo: accept any credentials and sign in
    const namePart = signinEmail.split("@")[0];
    const parts = namePart.split(".");
    const fName = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : "Vine";
    const lName = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : "Member";
    const userData = {
      name: `${fName} ${lName}`,
      firstName: fName,
      lastName: lName,
      email: signinEmail,
      interests: ["Theology", "Prayer", "Bible Study"],
      joinedAt: new Date().toISOString(),
      avatar: fName[0].toUpperCase() + lName[0].toUpperCase(),
    };
    localStorage.setItem("vine_user", JSON.stringify(userData));
    window.location.assign("/feed");
  };

  const handleSocialAuth = (provider: string) => {
    const userData = {
      name: "Vine Believer",
      firstName: "Vine",
      lastName: "Believer",
      email: `user@${provider.toLowerCase()}.com`,
      interests: ["Theology", "Prayer", "Bible Study"],
      joinedAt: new Date().toISOString(),
      avatar: "VB",
    };
    localStorage.setItem("vine_user", JSON.stringify(userData));
    window.location.assign("/feed");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-3xl overflow-hidden relative"
        style={{
          background: "#0E0E1A",
          border: "1px solid rgba(58,125,86,0.15)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg transition-colors z-10"
          style={{ color: "#6A6A88" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#F2F2F8")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6A6A88")}
        >
          <X size={18} />
        </button>

        <div className="p-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3a7d56, #8B6FDB)" }}>
              <span className="text-black font-black text-sm">V</span>
            </div>
            <span className="text-lg font-black" style={{ color: "#F2F2F8" }}>Vine</span>
          </div>

          {error && (
            <div className="mb-4 px-4 py-2.5 rounded-xl text-sm" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }}>
              {error}
            </div>
          )}

          {mode === "interests" ? (
            <>
              <h2 className="text-2xl font-black mb-1" style={{ color: "#F2F2F8" }}>What interests you?</h2>
              <p className="text-sm mb-6" style={{ color: "#8A8AA8" }}>Choose at least 3 topics to personalize your Vine experience.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {interests.map((interest) => {
                  const selected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                      style={selected ? {
                        background: "#3a7d56",
                        color: "#07070F",
                        border: "1px solid #3a7d56",
                      } : {
                        background: "rgba(255,255,255,0.04)",
                        color: "#8A8AA8",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {selected && <CheckCircle2 size={12} className="inline mr-1" />}
                      {interest}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>
                {selectedInterests.length} selected {selectedInterests.length < 3 && `— pick ${3 - selectedInterests.length} more`}
              </p>
              <button
                onClick={selectedInterests.length >= 3 ? handleEnterVine : undefined}
                className="btn-gold w-full py-3.5 rounded-xl flex items-center justify-center gap-2 group"
                style={selectedInterests.length < 3 ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                disabled={selectedInterests.length < 3}
              >
                Enter Vine <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          ) : mode === "signup" ? (
            <>
              <h2 className="text-2xl font-black mb-1" style={{ color: "#F2F2F8" }}>Join Vine — Free Forever</h2>
              <p className="text-sm mb-6" style={{ color: "#8A8AA8" }}>The global Christian community awaits. No credit card needed.</p>

              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="px-4 py-3 rounded-xl text-sm outline-none w-full"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="px-4 py-3 rounded-xl text-sm outline-none w-full"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={signupEmail}
                  onChange={e => setSignupEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none pr-10"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    onKeyDown={e => e.key === "Enter" && handleCreateAccount()}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button onClick={handleCreateAccount} className="btn-gold w-full py-3.5 rounded-xl mb-4 flex items-center justify-center gap-2 group">
                Create Account <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                <span className="text-xs" style={{ color: "#6A6A88" }}>or continue with</span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Google", "Apple"].map(p => (
                  <button key={p} onClick={() => handleSocialAuth(p)} className="py-3 rounded-xl text-sm font-medium transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#A0A0C0" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.color = "#F2F2F8"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#A0A0C0"; }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <p className="text-xs text-center" style={{ color: "#6A6A88" }}>
                Already a member?{" "}
                <button className="font-semibold" style={{ color: "#3a7d56" }} onClick={() => { setMode("signin"); setError(""); }}>Sign in</button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-black mb-1" style={{ color: "#F2F2F8" }}>Welcome back</h2>
              <p className="text-sm mb-6" style={{ color: "#8A8AA8" }}>Sign in to your Vine account.</p>

              <div className="space-y-3 mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={signinEmail}
                  onChange={e => setSigninEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={signinPassword}
                    onChange={e => setSigninPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none pr-10"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    onKeyDown={e => e.key === "Enter" && handleSignIn()}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end items-center gap-2 mb-4">
                {resetSent && (
                  <span className="text-xs" style={{ color: "#9898B3" }}>
                    Reset link sent — check your email.
                  </span>
                )}
                <button
                  type="button"
                  className="text-xs"
                  style={{ color: "#3a7d56" }}
                  onClick={() => { setResetSent(true); setTimeout(() => setResetSent(false), 5000); }}
                >
                  {resetSent ? "Resend link" : "Forgot password?"}
                </button>
              </div>

              <button onClick={handleSignIn} className="btn-gold w-full py-3.5 rounded-xl mb-6 flex items-center justify-center gap-2 group">
                Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                <span className="text-xs" style={{ color: "#6A6A88" }}>or continue with</span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Google", "Apple"].map(p => (
                  <button key={p} onClick={() => handleSocialAuth(p)} className="py-3 rounded-xl text-sm font-medium transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#A0A0C0" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.color = "#F2F2F8"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#A0A0C0"; }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <p className="text-xs text-center" style={{ color: "#6A6A88" }}>
                New to Vine?{" "}
                <button className="font-semibold" style={{ color: "#3a7d56" }} onClick={() => { setMode("signup"); setError(""); }}>Create a free account</button>
              </p>
            </>
          )}
        </div>

        <div className="px-8 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          <p className="text-xs text-center" style={{ color: "#4A4A68" }}>
            By joining, you agree to our Terms of Service and Community Guidelines.
            <br />Built for believers. Free forever.
          </p>
        </div>
      </div>
    </div>
  );
}
