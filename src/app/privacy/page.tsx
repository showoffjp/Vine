import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Vine",
  description: "How Vine collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information you provide",
        text: "When you create an account, we collect your name, email address, and password. If you choose to complete your profile, you may also provide your location, biography, denomination, and profile photo. Prayer requests, discussion posts, and other content you submit are also stored.",
      },
      {
        subtitle: "Information collected automatically",
        text: "We collect standard log data including your IP address, browser type, pages visited, and time spent on the platform. We use cookies and similar technologies to maintain your session and improve your experience. We do not sell this data.",
      },
      {
        subtitle: "AI Companion conversations",
        text: "Conversations with the AI Bible Companion are processed through our AI provider (Vercel AI Gateway) with zero data retention. We do not store your AI conversations beyond the current session unless you explicitly save them.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "To provide the platform",
        text: "We use your information to operate Vine — serving your feed, matching you with relevant communities, sending notifications you've requested, and personalizing your devotional and reading plan experience.",
      },
      {
        subtitle: "To improve the platform",
        text: "Aggregated, anonymized usage data helps us understand which features are most valuable, identify technical issues, and make Vine better for everyone. We do not use individual behavioral data for advertising.",
      },
      {
        subtitle: "To communicate with you",
        text: "We send transactional emails (account verification, password reset) and, if you opt in, newsletter editions and notification digests. You can unsubscribe from all non-essential communications at any time.",
      },
    ],
  },
  {
    title: "3. Information Sharing",
    content: [
      {
        subtitle: "We do not sell your data",
        text: "Vine does not sell, rent, or trade your personal information to third parties for their marketing purposes. This is a core commitment of our platform.",
      },
      {
        subtitle: "Service providers",
        text: "We share necessary data with trusted service providers who help us operate Vine — including Vercel (hosting), our AI provider (conversation processing), and email delivery services. All providers are contractually bound to protect your data.",
      },
      {
        subtitle: "Legal requirements",
        text: "We may disclose information if required by law, court order, or to protect the safety of our users or the public. We will notify you when legally permissible.",
      },
    ],
  },
  {
    title: "4. Your Rights & Controls",
    content: [
      {
        subtitle: "Access and portability",
        text: "You can download all your Vine data at any time from Settings → Privacy → Download My Data. This includes your posts, comments, prayer requests, saved content, and account information.",
      },
      {
        subtitle: "Deletion",
        text: "You can permanently delete your account and all associated data from Settings → Account → Delete Account. Deletion is irreversible and completed within 30 days. Some anonymized data (e.g., prayer counts) may remain.",
      },
      {
        subtitle: "Corrections and objections",
        text: "You can update your profile information at any time. If you believe we hold inaccurate data, contact privacy@vine.community and we will correct it within 14 days.",
      },
    ],
  },
  {
    title: "5. Data Security",
    content: [
      {
        subtitle: "Technical safeguards",
        text: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use industry-standard security practices including regular security audits, penetration testing, and access controls. Passwords are hashed using bcrypt.",
      },
      {
        subtitle: "Breach notification",
        text: "In the unlikely event of a data breach affecting your personal information, we will notify you within 72 hours via email and provide clear information about what happened and what you should do.",
      },
    ],
  },
  {
    title: "6. Children's Privacy",
    content: [
      {
        subtitle: "Age requirement",
        text: "Vine is intended for users 13 years of age and older. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it promptly. Parents who believe their child has created an account should contact safety@vine.community.",
      },
    ],
  },
  {
    title: "7. International Users",
    content: [
      {
        subtitle: "Global data transfers",
        text: "Vine serves users in 184 countries. By using our platform, you consent to your information being transferred to and processed in the United States, where our primary servers are located. We comply with applicable data transfer regulations including GDPR adequacy mechanisms.",
      },
      {
        subtitle: "GDPR rights (EU/EEA users)",
        text: "If you are in the EU or EEA, you have additional rights under GDPR including the right to restrict processing, the right to object, and the right to lodge a complaint with your local supervisory authority. Contact privacy@vine.community to exercise these rights.",
      },
    ],
  },
  {
    title: "8. Updates to This Policy",
    content: [
      {
        subtitle: "Notification of changes",
        text: "We will notify you of material changes to this Privacy Policy via email and an in-app banner at least 30 days before changes take effect. Continued use of Vine after that date constitutes acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#3a7d56" }}>
              Legal
            </span>
            <h1 className="text-4xl font-black mb-4" style={{ color: "#F2F2F8" }}>Privacy Policy</h1>
            <p className="text-base" style={{ color: "#6A6A88" }}>
              Last updated: May 26, 2026 &nbsp;·&nbsp; Effective: May 26, 2026
            </p>
            <div
              className="mt-6 p-5 rounded-2xl"
              style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.15)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>
                <strong style={{ color: "#3a7d56" }}>The short version:</strong> We collect only what we need, we never sell your data, you control everything, and we treat your information with the same respect and care we want our community to embody. Read on for the full details.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-xl font-black mb-5 pb-3 border-b"
                  style={{ color: "#F2F2F8", borderColor: "rgba(58,125,86,0.1)" }}
                >
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="font-bold text-base mb-2" style={{ color: "#3a7d56" }}>
                        {item.subtitle}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A8AA8" }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div
            className="mt-12 p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>Questions?</h3>
            <p className="text-sm mb-3" style={{ color: "#6A6A88" }}>
              If you have questions about this Privacy Policy or your data, our privacy team is here to help.
            </p>
            <a
              href="mailto:privacy@vine.community"
              className="text-sm font-semibold"
              style={{ color: "#3a7d56" }}
            >
              privacy@vine.community
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
