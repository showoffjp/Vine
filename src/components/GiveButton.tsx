"use client";

import { useState } from "react";
import { X, Heart, CheckCircle2 } from "lucide-react";

const amounts = [25, 50, 100, 250, 500];

export default function GiveButton({
  cause,
  color,
}: {
  cause: string;
  color: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState<"amount" | "confirm" | "success">("amount");

  const displayAmount = custom ? Number(custom) : selected;

  const handleGive = () => {
    setStep("confirm");
  };

  const handleConfirm = () => {
    setStep("success");
    setTimeout(() => {
      setOpen(false);
      setStep("amount");
      setCustom("");
      setSelected(50);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-2.5 rounded-xl font-bold text-sm mt-auto transition-all hover:opacity-90"
        style={{ background: `linear-gradient(135deg, ${color}CC, ${color})`, color: "#fff" }}
      >
        Give to This Cause
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl p-8"
            style={{ background: "#12121F", border: "1px solid #1E1E32" }}
          >
            <button
              onClick={() => { setOpen(false); setStep("amount"); }}
              className="absolute top-4 right-4 p-1 rounded-full"
              style={{ color: "#6A6A88", background: "transparent" }}
            >
              <X size={18} />
            </button>

            {step === "success" ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(58,125,86,0.12)", border: "1px solid rgba(58,125,86,0.3)" }}>
                  <CheckCircle2 size={32} style={{ color: "#3a7d56" }} />
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>
                  Thank you! 🙌
                </h3>
                <p className="text-sm mb-1" style={{ color: "#8A8AA8" }}>
                  Your gift of <strong style={{ color: "#3a7d56" }}>${displayAmount}</strong> to
                </p>
                <p className="text-sm font-semibold mb-4" style={{ color: "#C0C0D8" }}>{cause}</p>
                <p className="text-xs" style={{ color: "#6A6A88" }}>
                  You will receive a receipt at your email address. 100% of your designated gift goes directly to the field.
                </p>
              </div>
            ) : step === "confirm" ? (
              <div className="text-center">
                <Heart size={28} className="mx-auto mb-3" style={{ color: color }} />
                <h3 className="text-xl font-black mb-1" style={{ color: "#F2F2F8" }}>
                  Confirm your gift
                </h3>
                <p className="text-sm mb-4" style={{ color: "#8A8AA8" }}>{cause}</p>
                <div className="rounded-2xl p-4 mb-6"
                  style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)" }}>
                  <p className="text-3xl font-black" style={{ color: "#F2F2F8" }}>${displayAmount}</p>
                  <p className="text-xs mt-1" style={{ color: "#6A6A88" }}>One-time gift</p>
                </div>
                <button
                  onClick={handleConfirm}
                  className="w-full py-3 rounded-xl font-bold text-sm mb-3"
                  style={{ background: `linear-gradient(135deg, ${color}CC, ${color})`, color: "#fff" }}
                >
                  Confirm Gift
                </button>
                <button onClick={() => setStep("amount")} className="text-sm" style={{ color: "#6A6A88" }}>
                  ← Back
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <Heart size={18} style={{ color: color }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: color }}>
                    Give Now
                  </span>
                </div>
                <h3 className="text-xl font-black mb-1" style={{ color: "#F2F2F8" }}>
                  Support this cause
                </h3>
                <p className="text-sm mb-6" style={{ color: "#8A8AA8" }}>{cause}</p>

                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6A6A88" }}>
                  Choose an amount
                </p>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt); setCustom(""); }}
                      className="py-2.5 rounded-xl text-sm font-bold transition-all"
                      style={{
                        background: selected === amt && !custom ? `${color}18` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${selected === amt && !custom ? color : "#1E1E32"}`,
                        color: selected === amt && !custom ? color : "#8A8AA8",
                      }}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full px-4 py-3 rounded-xl text-sm mb-6"
                  style={{
                    background: "#07070F",
                    border: `1px solid ${custom ? color : "#1E1E32"}`,
                    color: "#F2F2F8",
                    outline: "none",
                  }}
                />

                <button
                  onClick={handleGive}
                  disabled={!displayAmount || displayAmount <= 0}
                  className="w-full py-3 rounded-xl font-bold text-sm"
                  style={{
                    background: displayAmount > 0 ? `linear-gradient(135deg, ${color}CC, ${color})` : "#1E1E32",
                    color: displayAmount > 0 ? "#fff" : "#4A4A68",
                    cursor: displayAmount > 0 ? "pointer" : "not-allowed",
                  }}
                >
                  Give ${displayAmount || 0}
                </button>

                <p className="text-center text-xs mt-3" style={{ color: "#4A4A68" }}>
                  🔒 Secure · 100% goes to the field · Tax-deductible receipt sent to your email
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
