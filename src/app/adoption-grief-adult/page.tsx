"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Adoption Is God's Own Story for Himself",
    verse: "Romans 8:15",
    text: "The Spirit you received brought about your adoption to sonship — and by him we cry, Abba, Father. God chose adoption as the primary metaphor for his relationship with humanity. This was not incidental. He could have used any image — he chose the image of taking in a child who was not biologically his own and making them fully his. Your adoption story reflects something at the very center of the gospel."
  },
  {
    title: "The Original Loss Is Real — God Does Not Ask You to Minimize It",
    verse: "Lamentations 1:12",
    text: "Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow. The loss of biological family, original culture, genetic identity, the version of yourself who grew up differently — these are real losses. Adoption involves grief that was not invited and is not easily named. God does not require you to be only grateful. He can hold both the gift of your adoptive family and the grief of what was lost before."
  },
  {
    title: "You Were Known Before You Were Placed",
    verse: "Psalm 139:13-16",
    text: "For you created my inmost being; you knit me together in my mother's womb. Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be. Your story — including its earliest chapters, including the circumstances that led to adoption — was not a surprise to God. You were known before you were placed. The discontinuity in your story is held within a continuity that God has always maintained."
  },
  {
    title: "Identity in Christ Holds When Family Identity Is Uncertain",
    verse: "Galatians 3:26-28",
    text: "So in Christ Jesus you are all children of God through faith. There is neither Jew nor Greek, slave nor free, male nor female — for you are all one in Christ Jesus. For adoptees who struggle with questions of cultural identity, genetic identity, or family belonging — Christ offers an identity that neither replaces nor erases those questions, but holds you while you work through them."
  },
  {
    title: "Searching Is Not Betrayal",
    verse: "Proverbs 25:2",
    text: "It is the glory of God to conceal a matter; to search out a matter is the glory of kings. Wanting to know your birth family, your medical history, your genetic heritage — this is not disloyalty to your adoptive family. Curiosity about your origins is a human good. God made us to want to know where we came from."
  }
];

const voices = [
  {
    id: "v1",
    name: "Sherrie Eldridge",
    role: "Author, Twenty Things Adopted Kids Wish Their Adoptive Parents Knew; adoptee",
    quote: "Every adoption begins with loss. That loss is not erased by a loving family — it is held alongside the love. The adoptee who cannot name the grief is carrying it somewhere else.",
    bio: "Sherrie Eldridge is herself an adoptee and has spent decades giving language to the specific grief and longing that adoptees carry. Her work is essential for adult adoptees who were told they should only feel grateful and are now processing what was never given permission to be named."
  },
  {
    id: "v2",
    name: "Marlena Graves",
    role: "Author, The Way Up is Down; Adoptive parent and trauma-informed theologian",
    quote: "Adoptees did not choose to lose what they lost. That loss deserves to be honored — not explained away by the good that came after it.",
    bio: "Marlena Graves writes at the intersection of theology, embodiment, and family. Her work addresses the complexity of adoption theologically — holding both the genuine good of adoptive family and the genuine wound of what was lost."
  },
  {
    id: "v3",
    name: "Bessel van der Kolk",
    role: "Author, The Body Keeps the Score; Trauma researcher",
    quote: "Early attachment disruptions — including adoption, even from a loving family — leave traces in the body's nervous system. These traces do not require bad parenting to form. They require only the reality of early separation.",
    bio: "Bessel van der Kolk's research on trauma and the body helps adult adoptees understand why they may experience relational patterns, attachment anxiety, or grief that seems disproportionate to their circumstances. The body keeps the score of what happened in infancy, even when the mind has no memories."
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, The Soul of Shame",
    quote: "The adoptee's question 'Who am I?' is often also the question 'Was I worth keeping?' That second question requires a theological and relational answer, not just a genealogical one.",
    bio: "Curt Thompson's integration of attachment theory and theology is especially relevant for adult adoptees navigating shame related to relinquishment. His work addresses the deep question of worthiness that adoption narratives — even loving ones — can leave unanswered."
  }
];

const practices = [
  {
    icon: "🔍",
    title: "Give Permission to Grieve What Was Lost",
    text: "The culture of adoption often emphasizes gratitude and does not create space for grief. But you are allowed to grieve the family you didn't grow up with, the culture you may have been separated from, the medical history you don't know, the face in the mirror that looks like no one you grew up beside. This grief does not cancel your love for your adoptive family."
  },
  {
    icon: "🧬",
    title: "Search for Birth Family If You Want To — On Your Terms",
    text: "Searching for birth family is a legitimate act of self-knowledge. DNA testing services (23andMe, AncestryDNA), state adoption registries, and reunion registries (ISRR, adopteeRightsLaw.com) are all available resources. There is no obligation to search — and no obligation not to. It belongs to you."
  },
  {
    icon: "🧠",
    title: "Find a Therapist Familiar With Adoption-Specific Grief",
    text: "Not all therapists understand adoption's specific emotional terrain. Look for someone trained in attachment trauma or who has worked with adoptee populations. The American Adoption Congress (americanadoptioncongress.org) and the Adoptee Rights Law Center offer resources and referrals."
  },
  {
    icon: "👥",
    title: "Connect With Adult Adoptee Communities",
    text: "The adoptee experience is widely shared and under-discussed. Communities like AdopteesOn (podcast), the Adult Adoptee Community on Facebook, and the Adoptee Connect app offer connection with people who know the experience from the inside rather than from the outside."
  },
  {
    icon: "🙏",
    title: "Bring the Identity Questions to Prayer",
    text: "The questions adoptees carry — Who am I? Where do I come from? Was I wanted? — are spiritual questions as much as genealogical ones. Bringing them explicitly to prayer, to God who knew you before your parents did, is part of the work. He does not have a tidy answer to every question, but he holds you in them."
  },
  {
    icon: "📚",
    title: "Read Adoptee Memoirs and Theology",
    text: "Nicole Chung's All You Can Ever Know, Jillian Lauren's Some Girls, and Sherrie Eldridge's work give adult adoptees both recognition and language. Adoptee-specific theology is also emerging — TaRessa Stovall, Jenny Doh, and others write from inside the experience."
  }
];

const scriptures = [
  { verse: "Romans 8:15", text: "The Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "John 1:12", text: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God." },
  { verse: "Galatians 4:4-5", text: "But when the set time had fully come, God sent his Son, born of a woman, born under the law, to redeem those under the law, that we might receive adoption to sonship." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." }
];

type AdoptionEntry = { id: string; date: string; grief: string; question: string; identity: string };

export default function AdoptionGriefAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AdoptionEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [question, setQuestion] = useState("");
  const [identity, setIdentity] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_adoptiongriefadultj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: AdoptionEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, question, identity };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adoptiongriefadultj_entries", JSON.stringify(updated));
    setGrief(""); setQuestion(""); setIdentity("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adoptiongriefadultj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Identity & Belonging</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Adoption Grief as an Adult</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the gratitude you were always expected to feel is real — and the grief is also real. When the question of who you are runs deeper than your last name. When you needed permission to grieve what happened before you could remember it. God knew you before your parents did. He holds the whole story.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for adult adoptees — taking the grief seriously, holding the questions about identity, and finding what Scripture says about adoption as a picture of God's own heart.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Adoptees, researchers, and theologians who take adoption grief seriously — including the grief that gratitude was supposed to replace.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual steps for adult adoptees doing the work of grief, identity, and belonging.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — adoption grief can become a mental health crisis.<br />
                American Adoption Congress: <strong style={{ color: TEXT }}>americanadoptioncongress.org</strong><br />
                AdopteesOn podcast and community: <strong style={{ color: TEXT }}>adopteeson.com</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the adoptee asking who they are — and finding that God has always known the answer.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for grief, identity questions, and what you know about yourself that no genealogy can tell you. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What grief related to my adoption am I carrying?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What question about my identity or origins am I sitting with?</label>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I know for certain about who I am — regardless of my origin story?</label>
                <textarea value={identity} onChange={e => setIdentity(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.grief && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GRIEF</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.grief}</p></div>}
                  {e.question && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>QUESTION</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.question}</p></div>}
                  {e.identity && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>WHAT I KNOW</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.identity}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on adoption theology, adoptee grief, and identity in Christ.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Theology of Adoption: God's Own Story</div>
              <VideoEmbed videoId="jJPVNIAFmvA" title="The Theology of Adoption: God's Own Story" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Every Adoptee's Beginning: Grief, Loss, and Identity</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Every Adoptee's Beginning: Grief, Loss, and Identity" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Who Am I? Identity, Origins, and the God Who Knows</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Who Am I? Identity, Origins, and the God Who Knows" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Attachment, Early Loss, and Healing: Bessel van der Kolk</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Attachment, Early Loss, and Healing: Bessel van der Kolk" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
