"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const IDENTITY_STATEMENTS = [
  { ref: "John 1:12", statement: "I am a child of God.", category: "Belonging", verse: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God." },
  { ref: "Romans 8:1", statement: "I am free from condemnation.", category: "Freedom", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { ref: "2 Corinthians 5:17", statement: "I am a new creation.", category: "Renewal", verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { ref: "Ephesians 1:4", statement: "I am chosen and holy.", category: "Belonging", verse: "For he chose us in him before the creation of the world to be holy and blameless in his sight." },
  { ref: "Ephesians 2:10", statement: "I am God's workmanship, created for good works.", category: "Purpose", verse: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
  { ref: "Romans 8:37", statement: "I am more than a conqueror.", category: "Strength", verse: "No, in all these things we are more than conquerors through him who loved us." },
  { ref: "1 Corinthians 6:19-20", statement: "I am a temple of the Holy Spirit.", category: "Dignity", verse: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price." },
  { ref: "Galatians 3:26", statement: "I am a son/daughter of God through faith.", category: "Belonging", verse: "So in Christ Jesus you are all children of God through faith." },
  { ref: "Philippians 4:13", statement: "I can do all things through Christ.", category: "Strength", verse: "I can do all this through him who gives me strength." },
  { ref: "Colossians 2:10", statement: "I am complete in Christ.", category: "Sufficiency", verse: "And in Christ you have been brought to fullness. He is the head over every power and authority." },
  { ref: "1 Peter 2:9", statement: "I am a member of a royal priesthood.", category: "Dignity", verse: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light." },
  { ref: "Romans 5:1", statement: "I have peace with God.", category: "Freedom", verse: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ." },
  { ref: "2 Timothy 1:7", statement: "I have not been given a spirit of fear.", category: "Strength", verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
  { ref: "Hebrews 4:16", statement: "I can come boldly to God's throne.", category: "Access", verse: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need." },
  { ref: "Romans 8:38-39", statement: "Nothing can separate me from God's love.", category: "Security", verse: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type Tab = "who" | "voices" | "false" | "meditate" | "videos";

const VIDEOS = [
  { videoId: "fJnGJN6laqE", title: "Who Am I? Understanding Your Identity in Christ", channel: "Desiring God", description: "A biblical exploration of who you are in Christ — not based on performance, achievement, or the opinions of others, but on what God says about you." },
  { videoId: "Z8lkuuhVkOI", title: "Identity: The Gospel's Answer to Who You Are", channel: "Tim Keller Gospel in Life", description: "Tim Keller examines how the gospel reshapes our deepest sense of identity, freeing us from the twin tyrannies of pride and shame." },
  { videoId: "TuXTFlU-_To", title: "Knowing Who You Are in Christ", channel: "Ligonier Ministries", description: "Ligonier Ministries unpacks the doctrinal foundations of Christian identity — what it means to be justified, adopted, and united with Christ." },
  { videoId: "sxMhDVkdULw", title: "Your Identity Before God", channel: "The Gospel Coalition", description: "The Gospel Coalition explores how our standing before God in Christ defines us more fundamentally than any other category — family, culture, or achievement." },
];

const VOICES_IDENTITY = [
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932-1996",
    context: "Dutch Catholic priest; Harvard, Yale, Daybreak Community",
    bio: "Nouwen's 'Life of the Beloved' (1992) is the most direct treatment of identity in Christ in the spiritual direction tradition. His framework: the spiritual life begins with being 'claimed as God's Beloved' — not as something to achieve but as something to receive and believe. Against the culture's three temptations (to be relevant, to be spectacular, to be powerful), Nouwen set the identity Jesus received at his baptism: 'You are my beloved Son, in whom I am well pleased.' The work of the Christian life is allowing this to be true.",
    quote: "The spiritual life is not a life before, after, or beyond our everyday existence. No, the spiritual life can only be real when it is lived in the midst of the pains and joys of the here and now. But that is only possible when we believe that in Christ, we are beloved.",
    contribution: "Nouwen made 'belovedness' the central category of Christian identity in a way that has had enormous pastoral influence. His identification of the three temptations (relevance, spectacle, power) as the primary alternatives to identity in Christ mapped directly onto the psychological landscape of contemporary people — especially high-achievers who had never been given permission to simply receive God's love. His work at L'Arche — living with people who could not perform — deepened his conviction that love precedes performance.",
  },
  {
    id: "anderson",
    name: "Neil T. Anderson",
    era: "1942-present",
    context: "Author; Biola University; Victory Over the Darkness",
    bio: "Anderson's 'Victory Over the Darkness' (1990) popularized the concept of 'who you are in Christ' for evangelical lay readers. His framework: most spiritual struggle comes from believers trying to live up to an identity they don't believe they actually have. The enemy's primary strategy is to destabilize identity: 'If you are the Son of God...' (Matthew 4:3). Christians who do not know their identity in Christ are functionally living in the old nature even after regeneration. Anderson provided the most systematic list of 'who I am in Christ' statements in evangelical literature.",
    quote: "You are not primarily a sinner — you are a saint who sometimes sins. The difference matters enormously. How you see yourself is how you will live.",
    contribution: "Anderson gave evangelical discipleship its most widely-used framework for identity-based sanctification. His 'who I am in Christ' affirmations — drawn from specific Scripture passages — have been used in small groups, counseling, and personal devotion worldwide. He helped evangelicals move from a guilt/performance framework to a grace/identity framework: transformation follows from believing what is already true about you in Christ, not from trying harder to become something you are not.",
  },
  {
    id: "tripp",
    name: "Paul David Tripp",
    era: "1950-present",
    context: "Biblical counselor; pastor; author of New Morning Mercies",
    bio: "Tripp's approach to identity comes through his theology of the heart — the center of human desire, orientation, and identity. In 'Instruments in the Redeemer's Hands' (2002) and 'New Morning Mercies' (2014), he argues that most spiritual and relational problems stem from misplaced identity — finding one's fundamental worth in performance, relationships, or circumstances rather than in the unchanging grace of God. His daily devotional format made the daily renewal of identity-in-Christ a practical discipline rather than an abstract concept.",
    quote: "You will never be more valuable than you are right now. Not because of what you have achieved, but because of who Christ is and what he has done. This is either the most liberating truth you have ever heard or the most uncomfortable.",
    contribution: "Tripp made identity renewal a daily, practical discipline — not a one-time theological conviction. His devotional approach helped Christians see that the re-grounding of identity in Christ is the work of each morning, not a settled achievement. His integration of heart-theology with practical biblical counseling gave pastors and counselors a framework for addressing identity-related struggles (shame, people-pleasing, performance anxiety) that was both theologically grounded and psychologically sophisticated.",
  },
  {
    id: "manning",
    name: "Brennan Manning",
    era: "1934-2013",
    context: "Franciscan priest; author of The Ragamuffin Gospel",
    bio: "Manning's 'The Ragamuffin Gospel' (1990) addressed the failure of Christians to actually believe they are loved and accepted by God. A recovering alcoholic and former priest, Manning wrote from the experience of having failed catastrophically and discovered that God's love did not depend on his performance. His concept of the 'ragamuffin' — the broken, failed, inconsistent believer who is nonetheless fully accepted — cut against the performance-Christianity he had experienced. His central claim: the most important thing about you is not your faith, your failures, or your achievements but that God calls you 'Beloved.'",
    quote: "God loves you as you are, not as you should be. Because none of us is what we should be. We are who we are — ragamuffins, all of us.",
    contribution: "Manning's work reached people who had experienced Christianity as fundamentally conditional — where God's love was available in theory but not felt in practice because of ongoing failure. His willingness to be publicly honest about his own failures (alcoholism, broken vows) made his witness credible in a way that more polished spiritual authority could not be. The Ragamuffin Gospel gave permission to broken people to receive grace rather than earn it.",
  },
  {
    id: "wright_n",
    name: "N.T. Wright",
    era: "1948-present",
    context: "Anglican Bishop; NT scholar; Simply Christian",
    bio: "Wright approaches identity through his larger narrative of new creation: who we are in Christ is not merely a psychological category but a cosmological one. In 'Surprised by Hope' and 'After You Believe,' he argues that Christian identity is fundamentally vocational — we are 'image-bearers' of the God who is renewing the world, called to be agents of that renewal in the present. 'Who you are in Christ' is not just about what God thinks of you — it is about what you are being equipped to do in God's new creation project.",
    quote: "You are not who you think you are. You are not what others think you are. You are who God declares you to be, and he declares you to be a co-heir with Christ, a bearer of his image, and a participant in the renewal of all things.",
    contribution: "Wright gave the identity-in-Christ tradition an eschatological and missional dimension that purely therapeutic accounts miss. He showed that 'knowing who you are in Christ' is inseparable from 'knowing what you are for in Christ' — and that this calling (to be God's image-bearing agents in the world) is what gives identity its full scope. This integration of identity and vocation has influenced an entire generation of evangelical leaders who want a bigger framework than individual self-understanding.",
  },
];

const CATEGORIES = ["All", "Belonging", "Freedom", "Renewal", "Purpose", "Strength", "Dignity", "Sufficiency", "Access", "Security"];

const CATEGORY_COLORS: Record<string, string> = {
  "Belonging": "#6B4FBB", "Freedom": "#10B981", "Renewal": "#3B82F6",
  "Purpose": "#F59E0B", "Strength": "#EF4444", "Dignity": "#EC4899",
  "Sufficiency": "#8B5CF6", "Access": "#3a7d56", "Security": "#F97316",
};

const FALSE_IDENTITIES = [
  { false_id: "What I do", truth: "You are not your performance. You are God's child before you accomplish anything. Ephesians 2:8-9: 'it is by grace you have been saved... not by works.'" },
  { false_id: "What others think of me", truth: "God's opinion of you in Christ is the final verdict on your worth. Galatians 1:10: 'Am I now trying to win the approval of human beings, or of God?'" },
  { false_id: "What I have", truth: "Material possessions are not identity. Luke 12:15: 'Life does not consist in an abundance of possessions.'" },
  { false_id: "My past", truth: "In Christ, the old is gone. 2 Corinthians 5:17. Your past does not define you; Christ's work on your behalf does." },
  { false_id: "My sexuality or relationships", truth: "Identity in Christ supersedes every other identity category. Galatians 3:28: 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.'" },
  { false_id: "My mental health or struggles", truth: "Your diagnosis is not your destiny. Romans 8:28: God works all things together for good for those who love him — including illness, struggle, and weakness." },
];

export default function IdentityInChristPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_identity-in-christ_tab", "who");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_identity-in-christ_voice", "nouwen");
  const voiceItem = VOICES_IDENTITY.find(v => v.id === selectedVoice)!;
  const [catFilter, setCatFilter] = usePersistedState<string>("vine_identity-in-christ_cat_filter", "All");
  const [memorized, setMemorized] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_identity_mem"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [meditating, setMeditating] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_identity_mem", JSON.stringify([...memorized])); } catch {} }, [memorized]);

  const toggleMem = (ref: string) => setMemorized(prev => {
    const next = new Set(prev);
    next.has(ref) ? next.delete(ref) : next.add(ref);
    return next;
  });

  const filtered = catFilter === "All" ? IDENTITY_STATEMENTS : IDENTITY_STATEMENTS.filter(s => s.category === catFilter);
  const meditateItem = IDENTITY_STATEMENTS.find(s => s.ref === meditating);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Who You Are in Christ</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Your identity is not what you do, what others think, or what you have. In Christ, you have been given a new name, a new nature, and a permanent standing before God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "who" as const, label: "Who I Am", icon: "👑" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "false" as const, label: "False Identities", icon: "🚫" },
            { id: "meditate" as const, label: "Meditate", icon: "🙏" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "who" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {CATEGORIES.map(c => (
                <button type="button" key={c} onClick={() => setCatFilter(c)}
                  style={{ padding: "5px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? (CATEGORY_COLORS[c] || GREEN) : BORDER}`, background: catFilter === c ? `${CATEGORY_COLORS[c] || GREEN}15` : "transparent", color: catFilter === c ? (CATEGORY_COLORS[c] || GREEN) : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.map(item => (
                <div key={item.ref} style={{ background: CARD, border: `1px solid ${memorized.has(item.ref) ? GREEN + "40" : BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ background: `${CATEGORY_COLORS[item.category] || PURPLE}15`, color: CATEGORY_COLORS[item.category] || PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{item.category}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{item.ref}</span>
                      </div>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{item.statement}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}><VerseRef reference={item.verse} /></p>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginLeft: 12, flexShrink: 0 }}>
                      <button type="button" onClick={() => { setMeditating(item.ref); setActiveTab("meditate"); }}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${PURPLE}40`, background: `${PURPLE}10`, color: PURPLE, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        Meditate
                      </button>
                      <button type="button" onClick={() => toggleMem(item.ref)}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${memorized.has(item.ref) ? GREEN + "50" : BORDER}`, background: memorized.has(item.ref) ? `${GREEN}15` : "transparent", color: memorized.has(item.ref) ? GREEN : MUTED, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        {memorized.has(item.ref) ? "✓ Known" : "Memorize"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, color: MUTED, fontSize: 13, textAlign: "center" }}>
              {memorized.size} of {IDENTITY_STATEMENTS.length} statements marked as known
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {VOICES_IDENTITY.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{voiceItem.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voiceItem.era} &middot; {voiceItem.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "false" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                We all derive a sense of identity from multiple sources — some helpful, many not. The false identities below are not sinful in themselves; they become dangerous when they displace the identity Christ has given. Identity in Christ is not one more layer — it is the foundation that holds all others in right proportion.
              </p>
            </div>
            {FALSE_IDENTITIES.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#EF4444", fontSize: 18, flexShrink: 0 }}>✗</span>
                  <div>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Identity in "{f.false_id}"</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "meditate" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Select a statement to meditate on. Read it slowly. Pray it. Let it sink from your head to your heart.</p>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {IDENTITY_STATEMENTS.map(s => (
                <button type="button" key={s.ref} onClick={() => setMeditating(s.ref)}
                  style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${meditating === s.ref ? GREEN : BORDER}`, background: meditating === s.ref ? `${GREEN}15` : "transparent", color: meditating === s.ref ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s.ref}
                </button>
              ))}
            </div>
            {meditateItem && (
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 32, textAlign: "center" }}>
                <div style={{ color: GREEN, fontSize: 28, fontWeight: 900, marginBottom: 16, lineHeight: 1.3 }}>{meditateItem.statement}</div>
                <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{meditateItem.verse}"</p>
                <div style={{ color: MUTED, fontSize: 14 }}>{meditateItem.ref}</div>
                <div style={{ marginTop: 24, background: BG, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Suggested Practice</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Read this statement aloud three times slowly. Then sit in silence for 2 minutes. Let the truth of it wash over you. Notice where you feel resistance — that resistance often marks where you don't yet believe it.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
