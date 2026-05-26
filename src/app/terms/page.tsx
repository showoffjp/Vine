import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Vine",
  description: "The rules and guidelines governing your use of the Vine platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: "By creating an account or using any part of the Vine platform, you agree to these Terms of Service. If you do not agree, please do not use Vine. We reserve the right to update these terms; continued use after notice of changes constitutes acceptance.",
  },
  {
    title: "2. Eligibility",
    text: "You must be at least 13 years old to use Vine. By using the platform, you represent that you meet this requirement. Users between 13 and 18 should have parental awareness of their participation. Users agree to provide accurate, complete information when creating their account.",
  },
  {
    title: "3. Your Account",
    text: "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at safety@vine.community if you suspect unauthorized access. We are not liable for losses resulting from unauthorized account use.",
  },
  {
    title: "4. Community Standards",
    text: "Vine is a faith-rooted community committed to love, truth, and mutual edification. Users may not post content that is hateful, pornographic, violent, defamatory, or otherwise harmful. Theological disagreement is welcome; personal attacks are not. Full community standards are in our Community Guidelines.",
  },
  {
    title: "5. Content Ownership",
    text: "You retain ownership of all content you post on Vine. By posting, you grant Vine a non-exclusive, worldwide, royalty-free license to display, distribute, and promote your content on the platform and in our newsletters. You can delete your content at any time, which terminates this license for future use.",
  },
  {
    title: "6. Prohibited Uses",
    text: "You may not use Vine to: scrape or harvest user data, send unsolicited messages, impersonate others, distribute malware, engage in commercial solicitation without permission, violate applicable law, or attempt to circumvent our security measures. Violation may result in immediate account termination.",
  },
  {
    title: "7. AI Companion",
    text: "The AI Bible Companion is an assistive tool, not a pastor, therapist, or licensed counselor. Responses are AI-generated and should not be the sole basis for major life, medical, financial, or theological decisions. Always consult qualified human advisors for serious matters.",
  },
  {
    title: "8. Prayer Wall",
    text: "Prayer requests submitted to the public Prayer Wall are visible to all Vine users. Do not include sensitive personal information you would not want publicly shared. We reserve the right to remove requests that violate our community standards.",
  },
  {
    title: "9. Termination",
    text: "We may suspend or terminate your account for violations of these terms, without prior notice in cases of serious violations. You may delete your account at any time from Settings. Upon termination, your license to use the platform ends immediately, though your data deletion rights under our Privacy Policy remain.",
  },
  {
    title: "10. Disclaimer of Warranties",
    text: "Vine is provided 'as is' without warranties of any kind, express or implied. We do not guarantee uninterrupted access, error-free operation, or that the platform will meet all your needs. We are particularly clear that AI Companion responses are not guaranteed to be theologically accurate and should be verified against Scripture.",
  },
  {
    title: "11. Limitation of Liability",
    text: "To the maximum extent permitted by law, Vine's liability for any claim arising from your use of the platform is limited to the amount you paid us in the past 12 months (if any). We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "12. Governing Law",
    text: "These terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles. Disputes will be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property matters.",
  },
  {
    title: "13. Contact",
    text: "Questions about these Terms of Service may be directed to legal@vine.community. We aim to respond within 5 business days.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#D4AF37" }}>
              Legal
            </span>
            <h1 className="text-4xl font-black mb-4" style={{ color: "#F2F2F8" }}>Terms of Service</h1>
            <p className="text-base" style={{ color: "#6A6A88" }}>
              Last updated: May 26, 2026 &nbsp;·&nbsp; Effective: May 26, 2026
            </p>
            <div
              className="mt-6 p-5 rounded-2xl"
              style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>
                <strong style={{ color: "#D4AF37" }}>The short version:</strong> Be kind, be honest, don&apos;t misuse the platform, and remember that the AI companion is a tool — not a pastor. We reserve the right to remove content or accounts that harm the community.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <h2 className="font-black text-lg mb-3" style={{ color: "#F2F2F8" }}>{s.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8A8AA8" }}>{s.text}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-sm" style={{ color: "#6A6A88" }}>
              Questions? Contact{" "}
              <a href="mailto:legal@vine.community" style={{ color: "#D4AF37" }}>
                legal@vine.community
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
