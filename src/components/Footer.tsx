"use client";

const footerLinks = {
  Platform: [
    "Discussions",
    "Bible Tools",
    "Daily Devotionals",
    "Resource Library",
    "Video Library",
    "Prayer Wall",
  ],
  "Life & Faith": [
    "Life Hacks",
    "Mental Health",
    "Relationships",
    "Finances",
    "Parenting",
    "Work & Leadership",
  ],
  Community: [
    "Global Connect",
    "Interest Circles",
    "Events",
    "Creators",
    "Trending Topics",
    "Weekly Newsletter",
  ],
  Company: [
    "About Vine",
    "Our Mission",
    "Blog",
    "Press",
    "Careers",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(212,175,55,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #8B6FDB 100%)",
                }}
              >
                <span className="text-black font-black text-base">V</span>
              </div>
              <span
                className="text-xl font-black"
                style={{ color: "#F2F2F8" }}
              >
                Vine
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6A6A88" }}>
              The world&apos;s first all-in-one platform for Christians everywhere.
              Grow. Connect. Thrive in faith.
            </p>
            <p className="text-xs italic" style={{ color: "rgba(212,175,55,0.5)" }}>
              &ldquo;I am the vine; you are the branches.&rdquo;<br />— John 15:5
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#D4AF37" }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ color: "#6A6A88" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#C0C0D8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#6A6A88")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#4A4A68" }}>
            © 2025 Vine. Built with faith, for faith. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Community Guidelines"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs transition-colors"
                  style={{ color: "#4A4A68" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#8A8AA8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4A4A68")
                  }
                >
                  {l}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
