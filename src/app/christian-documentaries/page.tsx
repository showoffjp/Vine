"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const GENRE_FILTERS = ["All", "Missions & Revival", "Theology", "History & Biography", "Church Life", "Culture & Apologetics"];

const DOCS = [
  {
    title: "Asbury: The Movie",
    year: 2010,
    genre: "Missions & Revival",
    color: GREEN,
    description: "Documents the history of Asbury Theological Seminary and the Asbury Revival tradition — the extraordinary Holy Spirit outpourings that have periodically swept the Asbury campus since 1970. The documentary captures testimony from faculty, students, and observers of multiple revival movements.",
    why_watch: "Essential for understanding what genuine revival looks like. The Asbury campus has seen documented seasons of extended, spontaneous worship and prayer that transformed thousands of lives. This documentary provides historical and theological context.",
    streaming: "Available on various Christian streaming platforms; check Asbury's official channels",
    rating: "Highly Recommended",
    initials: "ASB",
    trailerVideoId: "6KnFutsE3X8",
    trailerTitle: "Asbury Revival: Desperate for More — Official Trailer",
  },
  {
    title: "Finger of God",
    year: 2007,
    genre: "Missions & Revival",
    color: PURPLE,
    description: "Filmmaker Darren Wilson traveled the world documenting extraordinary miracles, healings, and supernatural encounters claimed by Christians. From India to Africa to small-town America, the film presents testimony after testimony of events that defy naturalistic explanation. Neither credulous nor dismissive — Wilson approaches the material as a skeptic who becomes convinced.",
    why_watch: "Whether you are skeptical or open about the miraculous, this film challenges comfortable assumptions. The global footage of Christianity in the developing world is alone worth the watch.",
    streaming: "Wanderlust Productions; available on Amazon Prime and other platforms",
    rating: "Thought-Provoking",
    initials: "FOG",
    trailerVideoId: "SeghFM0SL6Y",
    trailerTitle: "Finger of God — Official Trailer",
  },
  {
    title: "Furious Love",
    year: 2010,
    genre: "Missions & Revival",
    color: "#EF4444",
    description: "Sequel to Finger of God — Wilson travels deeper into the fringes of Christendom, documenting deliverance ministry, encounters in red light districts, and missionaries in the world's most spiritually dark places. Includes footage from Thailand's sex industry, Satanic covens, and revival movements in Africa.",
    why_watch: "Challenges comfortable Christianity by showing what happens when Christians take spiritual warfare and compassion for the broken seriously. Particularly powerful footage from Thailand and Mozambique.",
    streaming: "Wanderlust Productions; check Amazon and Christian streaming services",
    rating: "Mature Content",
    initials: "FRL",
    trailerVideoId: "GdrBsL7PZ2g",
    trailerTitle: "Furious Love — Official Trailer",
  },
  {
    title: "The Insanity of God",
    year: 2016,
    genre: "Missions & Revival",
    color: "#F59E0B",
    description: "Based on Nik Ripken's bestselling book of the same name. Ripken spent years interviewing persecuted Christians around the world — in Somalia, China, Russia, and the Arab world — asking one question: does faith survive in conditions of maximum persecution? The answers transform every assumption about suffering, church, and faith.",
    why_watch: "One of the most powerful documentaries ever made about the persecuted church. The testimonies of Christians who maintained faith under torture, imprisonment, and family death are among the most moving testimonies in modern Christianity.",
    streaming: "Lifeway Films; available on YouTube and Christian streaming platforms",
    rating: "Essential",
    initials: "IOG",
    trailerVideoId: "XX6SWxwKZSE",
    trailerTitle: "The Insanity of God — Official Trailer",
  },
  {
    title: "Holy Ghost",
    year: 2014,
    genre: "Missions & Revival",
    color: GREEN,
    description: "Darren Wilson's follow-up film — this time, he hands the filming over to the Holy Spirit, going wherever he feels led without a script or plan. The result includes remarkable footage from a music festival in Italy, street outreach in LA, and encounters in locations chosen seemingly at random. More cinematic than his earlier work.",
    why_watch: "Wilson's most polished film. The Italy music festival sequence and the India footage are particularly striking. A thoughtful exploration of how to respond spontaneously to spiritual prompting.",
    streaming: "WP Films; Amazon Prime and other platforms",
    rating: "Recommended",
    initials: "HGH",
    trailerVideoId: "Yq_NL7Ofj9k",
    trailerTitle: "Holy Ghost — Official Trailer",
  },
  {
    title: "Living on the Edge: Christianity",
    year: 2015,
    genre: "Church Life",
    color: "#3B82F6",
    description: "Explores what authentic Christianity looks like in the margins — among the poor, the addicted, the homeless, and the imprisoned. Profiles of Christians who have given up comfortable lives to serve in places of maximum need.",
    why_watch: "Challenges consumerist Christianity by showing what radical discipleship looks like in practical terms.",
    streaming: "Various platforms",
    rating: "Recommended",
    initials: "LOE",
    trailerVideoId: "ynemn4tMQdA",
    trailerTitle: "Living on the Edge — Practical Tools for Christian Living",
  },
  {
    title: "For the Life of the World: Letters to the Exiles",
    year: 2014,
    genre: "Theology",
    color: PURPLE,
    description: "A seven-episode documentary-style film produced by Acton Institute, hosted by Lutheran pastor Andrew Kern. Explores the theological vision of the Christian life as faithful presence in the world — drawing on the biblical imagery of exile, the theology of vocation, and the relationship between the church and the world. Beautiful cinematography.",
    why_watch: "One of the most theologically sophisticated and beautifully produced Christian video series available. Explores what it means to live faithfully in every domain of life — work, family, culture, and community — from a serious theological perspective.",
    streaming: "Acton Institute; available free on YouTube",
    rating: "Highly Recommended",
    initials: "FLW",
    trailerVideoId: "YRLpuo3rKD0",
    trailerTitle: "For the Life of the World: Letters to the Exiles — Official Trailer",
  },
  {
    title: "The Drop Box",
    year: 2015,
    genre: "History & Biography",
    color: "#10B981",
    description: "Documents the life and ministry of Korean pastor Lee Jong-rak, who installed a 'drop box' outside his church for unwanted babies — particularly babies with disabilities abandoned due to Korea's stigma around disability. His home is filled with dozens of profoundly disabled children he has adopted. One of the most moving documentaries about the theology of human dignity.",
    why_watch: "A living theology of human dignity. Lee Jong-rak's life is a sustained argument that every human being — no matter how broken — bears the image of God and deserves to be welcomed. Deeply moving and doctrinally rich.",
    streaming: "Focus on the Family; available on DVD and selected streaming platforms",
    rating: "Essential",
    initials: "TDB",
    trailerVideoId: "gKkpgvcehCM",
    trailerTitle: "The Drop Box — Official Trailer",
  },
  {
    title: "The Case for Christ (Documentary)",
    year: 2007,
    genre: "Culture & Apologetics",
    color: "#F59E0B",
    description: "Based on Lee Strobel's bestselling book — journalist Lee Strobel's two-year investigation into the historical evidence for the resurrection. Interviews with leading New Testament scholars, historians, and scientists. Different from the 2017 dramatic film, this is the original documentary format featuring the actual scholars Strobel interviewed.",
    why_watch: "One of the most accessible and thorough lay presentations of the historical case for the resurrection. Excellent for sharing with skeptical friends or family members. The scholarly interviews carry more weight than the fictional dramatization.",
    streaming: "Available on Amazon Prime; YouTube; various Christian platforms",
    rating: "Highly Recommended",
    initials: "CFC",
    trailerVideoId: "DaW4Q8l-5B0",
    trailerTitle: "The Case for Christ — Documentary Trailer",
  },
  {
    title: "Is Genesis History?",
    year: 2017,
    genre: "Theology",
    color: "#6366F1",
    description: "Hosted by historian Del Tackett, this documentary explores the evidence for a historical reading of Genesis — including geology, paleontology, biology, and astronomy — arguing for a young-earth creationist interpretation. Features interviews with PhD-level scientists who hold to a young-earth position.",
    why_watch: "Regardless of your position on creation, this film presents the strongest version of the young-earth case with genuine scientific engagement. Essential for Christians who want to understand this position seriously rather than as a caricature.",
    streaming: "Amazon Prime; Compass Cinema",
    rating: "Recommended for Context",
    initials: "IGH",
    trailerVideoId: "hw7VcIrV5dA",
    trailerTitle: "Is Genesis History? — Official Trailer",
  },
  {
    title: "Come What May",
    year: 2009,
    genre: "Culture & Apologetics",
    color: "#EC4899",
    description: "A fictional film (not documentary) but widely used for apologetics training: follows a law school student who joins a moot court competition and must argue against abortion. The film presents the philosophical and legal pro-life arguments in an accessible format.",
    why_watch: "One of the most effective films for teaching pro-life apologetics — the arguments are presented clearly enough to be used and discussed.",
    streaming: "Various Christian platforms",
    rating: "Good for Teaching",
    initials: "CWM",
    trailerVideoId: "H4og6ukEmPg",
    trailerTitle: "Come What May (2009) — Official Trailer",
  },
  {
    title: "Patterns of Evidence: Exodus",
    year: 2014,
    genre: "History & Biography",
    color: "#F59E0B",
    description: "Filmmaker Timothy Mahoney spent 12 years investigating the question: is there archaeological evidence for the Exodus? The mainstream scholarly view is that there is not. Mahoney argues that the absence of evidence results from a misdating of Egyptian history — and presents striking evidence for the Exodus in an earlier period.",
    why_watch: "One of the most serious attempts at documentary-style archaeology from a faith perspective. Whether you are convinced or not, Mahoney asks the right questions and engages seriously with the scholarly literature. His follow-up films (The Moses Controversy, The Red Sea Miracle) continue the investigation.",
    streaming: "Amazon Prime; Thinking Man Films website",
    rating: "Recommended",
    initials: "POE",
    trailerVideoId: "sTKuIELrMWE",
    trailerTitle: "Patterns of Evidence: The Exodus — Official Trailer",
  },
];

const RATING_COLOR: Record<string, string> = {
  "Essential": GREEN,
  "Highly Recommended": "#3B82F6",
  "Recommended": PURPLE,
  "Thought-Provoking": "#F59E0B",
  "Mature Content": "#EF4444",
  "Good for Teaching": "#10B981",
  "Recommended for Context": "#6366F1",
};

export default function ChristianDocumentariesPage() {
  const [genre, setGenre] = usePersistedState<string>("vine_christian-documentaries_genre", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = DOCS.filter(d => genre === "All" || d.genre === genre);
  const doc = DOCS.find(d => d.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎬</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Documentary Films</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The best documentary films for understanding faith, missions, theology, and the supernatural. These are not Christian films about comfortable life — they are documents of extraordinary things God is doing.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {GENRE_FILTERS.map(g => (
            <button type="button" key={g} onClick={() => setGenre(g)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${genre === g ? GREEN : BORDER}`, background: genre === g ? `${GREEN}15` : "transparent", color: genre === g ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {g}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: doc ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((d, i) => (
              <button type="button" key={i} onClick={() => setSelected(selected === d.title ? null : d.title)}
                style={{ background: selected === d.title ? `${d.color}12` : CARD, border: `1px solid ${selected === d.title ? d.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${d.color}20`, border: `1px solid ${d.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {d.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{d.title}</span>
                      <span style={{ background: `${d.color}15`, color: d.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{d.genre}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{d.year}</span>
                      <span style={{ color: RATING_COLOR[d.rating] || GREEN, fontSize: 10, fontWeight: 700 }}>● {d.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {doc && (
            <div style={{ background: CARD, border: `1px solid ${doc.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <div>
                  <h2 style={{ color: doc.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{doc.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{doc.year} · {doc.genre}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                <span style={{ background: `${doc.color}12`, color: doc.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{doc.genre}</span>
                <span style={{ background: `${(RATING_COLOR[doc.rating] || GREEN)}15`, color: RATING_COLOR[doc.rating] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{doc.rating}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{doc.description}</p>

              {doc.trailerVideoId && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 6, letterSpacing: "0.05em" }}>WATCH TRAILER</div>
                  <div style={{ borderRadius: 8, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${doc.trailerVideoId}`}
                      title={doc.trailerTitle}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY WATCH</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{doc.why_watch}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO WATCH</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{doc.streaming}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
