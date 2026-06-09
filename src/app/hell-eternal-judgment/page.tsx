"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, BookOpen, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const AMBER = "#F59E0B";
const BLUE = "#3B82F6";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "ect", "annihilationism", "universalism", "passages", "voices", "pastoral", "journal"] as const;
type Tab = (typeof TABS)[number];

const ECT_ARGUMENTS = [
  { title: "Jesus Spoke About Hell More Than Anyone", verse: "Matthew 5:22; 18:9; Mark 9:43–48; Luke 16:19–31", body: "The majority of NT references to hell come from Jesus himself — Gehenna, outer darkness, 'weeping and gnashing of teeth,' the rich man and Lazarus. If Jesus is the clearest revelation of God's character and he taught eternal conscious punishment, this carries enormous weight." },
  { title: "The Grammar of Matthew 25:46", verse: "Matthew 25:46", body: "'These will go away into eternal punishment, but the righteous into eternal life.' The same Greek word (aiōnios) modifies both 'punishment' and 'life.' If eternal life means endless conscious existence with God, consistency demands that eternal punishment means endless conscious punishment." },
  { title: "Revelation 14:9–11 and 20:10", verse: "Revelation 14:9–11; 20:10", body: "'The smoke of their torment goes up forever and ever, and they have no rest, day or night.' The beast and false prophet are 'tormented day and night forever and ever.' This language of ceaseless conscious torment is the most explicit in the Bible." },
  { title: "The Logic of Free Will and Justice", verse: "2 Thessalonians 1:9; Romans 2:6–8", body: "If humans are genuinely free and God is genuinely just, those who persistently reject God must receive a genuine consequence. The doctrine of hell preserves both the seriousness of sin and the reality of human moral agency." },
];

const ANNIHILATIONISM_ARGUMENTS = [
  { title: "'Death' and 'Destruction' Language Suggests Non-Existence", verse: "Matthew 10:28; 2 Thessalonians 1:9; Philippians 3:19", body: "Multiple NT texts speak of the lost as destroyed, perishing, or experiencing destruction — not eternal torment. 'Destruction' (olethros) in 2 Thessalonians 1:9 may mean the final, complete end of existence rather than ongoing conscious suffering." },
  { title: "Immortality Is a Gift, Not an Inherent Property", verse: "Romans 2:7; 1 Timothy 6:16; 1 Corinthians 15:53", body: "The Bible consistently presents immortality as God's gift to the redeemed, not as an inherent property of every soul. If the lost are not given the gift of immortality, they cannot consciously suffer forever — they simply cease to exist." },
  { title: "Fire That Consumes", verse: "Malachi 4:1–3; Matthew 3:12; Jude 7", body: "Sodom's fire served as punishment and then consumed it completely — 'an example of eternal fire' (Jude 7), yet Sodom no longer burns. Fire in Scripture typically consumes rather than endlessly torments. The 'eternal' quality may refer to the permanence of the outcome, not the duration of the process." },
  { title: "Proportionality and God's Character", verse: "Luke 12:47–48", body: "Jesus suggests gradations of punishment ('flogged with many blows' vs 'few blows'). An eternity of conscious suffering for a finite life of unbelief strikes some as disproportionate. God's justice is retributive — it fits the crime — and may be satisfied by final, complete destruction." },
];

const UNIVERSALISM_ARGUMENTS = [
  { title: "All Things Reconciled in Christ", verse: "Colossians 1:20; Ephesians 1:10", body: "Paul writes that God will 'reconcile to himself all things, whether things on earth or things in heaven.' Universalists argue this language is truly universal and not merely potential. The scope of redemption equals the scope of creation." },
  { title: "God's Will Is for All to Be Saved", verse: "1 Timothy 2:4; 2 Peter 3:9; Ezekiel 33:11", body: "God 'wants all people to be saved and to come to a knowledge of the truth.' If God is omnipotent and wants all to be saved, why would his desire be frustrated by human resistance? Universal salvation seems consistent with a fully sovereign, fully loving God." },
  { title: "Aiōnios May Mean 'Age-Long' Not 'Eternal'", verse: "Matthew 25:46", body: "The Greek word aiōnios often means 'of the age' or 'pertaining to the coming age' rather than unending duration. Some universalists argue that 'eternal punishment' means 'punishment of the age' — serious and thorough but not literally endless." },
  { title: "Hell as Purgative, Not Simply Punitive", verse: "1 Corinthians 3:15; 1 Peter 3:19", body: "Some universalists (including Origen, George MacDonald, Robin Parry/Gregory MacDonald) argue hell is not simply punitive but remedial — it purifies and ultimately brings all to repentance and restoration. God's love never gives up." },
];

const KEY_PASSAGES = [
  { ref: "Matthew 25:46 — 'Eternal Punishment'", ect: "'Eternal punishment' (kolasis aiōnios) — the same aiōnios as 'eternal life' in the same verse. Parallel structure requires same duration for both.", annihil: "Kolasis can mean pruning/correction; aiōnios may emphasize quality/finality rather than unending duration.", univer: "Aiōnios means 'of the age' — punishment is serious and age-long, not necessarily strictly infinite." },
  { ref: "Mark 9:43–48 — The Undying Worm", ect: "Jesus quotes Isaiah 66:24 ('where the worm never dies and the fire is never quenched') as describing hell's permanence — conscious suffering without end.", annihil: "Isaiah 66:24 describes corpses ('all mankind will look on the dead bodies'), not living sufferers. 'Unquenched' fire is fire that burns completely, not indefinitely.", univer: "These are warning images meant to deter, not precise eschatological descriptions. The severity of the warning is compatible with ultimate redemption." },
  { ref: "Revelation 20:10 — 'Tormented Forever'", ect: "The beast and false prophet are 'tormented day and night forever and ever' (eis tous aiōnas tōn aiōnōn) — the strongest duration language in the NT.", annihil: "The beast and false prophet are symbols/institutions, not individual persons. They may represent systems that are finally and completely destroyed.", univer: "Revelation is apocalyptic literature; its temporal language may not be literal. The result (no more evil) is more certain than the mechanism." },
  { ref: "Romans 5:18–21 — 'One Righteous Act'", ect: "Paul's comparison between Adam and Christ is typological, not mathematical. 'All' in v.18 ('all people') has different scope than 'all' in 'all humanity' — context determines.", annihil: "Neutral on annihilationism specifically.", univer: "Paul uses 'all' deliberately — 'just as one trespass resulted in condemnation for all people, so also one righteous act resulted in justification and life for all people.'" },
];

const VOICES = [
  { name: "Augustine of Hippo", view: "ECT", color: RED, work: "City of God (Book 21)", note: "Provided the dominant Western theological foundation for eternal conscious torment. His arguments against Origen's universalism were accepted by most of Western Christianity for over 1,000 years." },
  { name: "John Stott", view: "Annihilationism", color: AMBER, work: "Essentials (co-authored with David Edwards)", note: "The most influential evangelical to publicly embrace annihilationism. His admission in 1988 that he found it 'difficult' to accept ECT sparked major evangelical debate while remaining within orthodoxy." },
  { name: "Edward Fudge", view: "Annihilationism", color: AMBER, work: "The Fire That Consumes", note: "Comprehensive exegetical defense of annihilationism. Generally considered the most thorough biblical case for the position." },
  { name: "Rob Bell", view: "Universalism / Hopeful", color: GREEN, work: "Love Wins (2011)", note: "Sparked widespread evangelical controversy. More 'hopeful universalism' than dogmatic universalism — Bell argued hell may be real but ultimately remedial and temporary. Many found the book vague; he later left ministry." },
  { name: "Robin Parry (Gregory MacDonald)", view: "Universalism", color: GREEN, work: "The Evangelical Universalist", note: "Careful academic case for biblical universalism from within an evangelical framework. Uses the pen name 'Gregory MacDonald' (after George MacDonald the universalist) to avoid immediate dismissal." },
  { name: "N.T. Wright", view: "ECT (nuanced)", color: RED, work: "Surprised by Hope", note: "Defends traditional eternal punishment but reframes it as the ultimate consequence of choosing to be less than human — a kind of 'un-creation' where those who persistently reject God's image become increasingly less than themselves." },
  { name: "Ilaria Ramelli", view: "Universalism / Patristic", color: GREEN, work: "A Larger Hope? (Vol. 1–2)", note: "Classical scholar demonstrating that universalism (apokatastasis) was held by major early Christians including Origen, Gregory of Nyssa, and arguably Clement of Alexandria." },
];

const VIDEOS = [
  { id: "WbGcZ-GDqOM", title: "What Does the Bible Say About Hell? — N.T. Wright" },
  { id: "9w3F2M1FaxE", title: "Three Views on Hell — ECT, Annihilationism, Universalism" },
  { id: "FDG1K2N3bFI", title: "The Case for Annihilationism — Edward Fudge" },
  { id: "cxAmVvVFUXE", title: "Christian Universalism — Can All Be Saved?" },
];

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

export default function HellPage() {
  const [tab, setTab] = useLocalStorage("vine_hell_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_hell_passage", "");
  const [journalQuestion, setJournalQuestion] = useLocalStorage("vine_hell_question", "");
  const [journalLoved, setJournalLoved] = useLocalStorage("vine_hell_loved", "");

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: RED + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={18} color={RED} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Hell & Eternal Judgment</div>
            <div style={{ color: MUTED, fontSize: 12 }}>The three major Christian views — with key passages and pastoral reflection</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 9px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${RED}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t === "ect" ? "Traditional ECT" : t === "annihilationism" ? "Annihilationism" : t === "universalism" ? "Universalism" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Three Major Views</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              The doctrine of hell is one of the most emotionally and theologically weighty in Christianity. Three positions have been held by serious, Scripture-reading Christians. Each takes the relevant texts seriously and reaches different conclusions.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {[
                { name: "Eternal Conscious Torment (ECT)", color: RED, label: "TRADITIONAL", desc: "The wicked suffer consciously in hell without end. The majority view through most of church history. Strongly associated with the language of Jesus and Revelation." },
                { name: "Annihilationism", color: AMBER, label: "EVANGELICAL MINORITY", desc: "The wicked are ultimately destroyed — they cease to exist rather than suffering endlessly. Held by respected evangelical scholars including John Stott. Sometimes called 'conditional immortality.'" },
                { name: "Universalism / Larger Hope", color: GREEN, label: "MINORITY VIEW", desc: "All people are ultimately saved — whether through hell serving as purgation, or through God's love that cannot finally be resisted. Ranges from tentative 'hopeful' forms to dogmatic universalism." },
              ].map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}44`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.label}</span>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>What all three views affirm:</strong> God is just; judgment is real; the outcome of one's life before God is serious and consequential; the cross is the provision for salvation from judgment; evangelism matters because eternal stakes are real.
              </p>
            </div>
          </div>
        )}

        {tab === "ect" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Eternal Conscious Torment (ECT)</h2>
            <p style={{ color: RED, fontSize: 12, marginBottom: 16 }}>The traditional majority view; held by Augustine, Aquinas, most of Western and Eastern Christianity</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ECT_ARGUMENTS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${RED}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: RED, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "annihilationism" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Annihilationism / Conditional Immortality</h2>
            <p style={{ color: AMBER, fontSize: 12, marginBottom: 16 }}>Held by John Stott, Clark Pinnock, Edward Fudge, some Seventh-Day Adventists, many Anglicans</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ANNIHILATIONISM_ARGUMENTS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${AMBER}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: AMBER, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "universalism" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Christian Universalism</h2>
            <p style={{ color: GREEN, fontSize: 12, marginBottom: 4 }}>Held by Origen, Gregory of Nyssa, George MacDonald, Robin Parry, some progressive evangelicals</p>
            <p style={{ color: AMBER, fontSize: 11, marginBottom: 16 }}>⚠️ Outside historic evangelical consensus; considered heterodox by many denominations. Presented here for understanding.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {UNIVERSALISM_ARGUMENTS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${GREEN}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages — Three Readings</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Tap each passage to see how each view reads it.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_PASSAGES.map((p) => {
                const isOpen = expandedPassage === p.ref;
                return (
                  <div key={p.ref} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedPassage(isOpen ? "" : p.ref)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14, textAlign: "left" }}>{p.ref}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ background: RED + "11", borderLeft: `3px solid ${RED}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: RED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>ECT</div>
                          <p style={{ fontSize: 12, color: "#FECACA", margin: 0 }}>{p.ect}</p>
                        </div>
                        <div style={{ background: AMBER + "11", borderLeft: `3px solid ${AMBER}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>ANNIHILATIONISM</div>
                          <p style={{ fontSize: 12, color: "#FEF3C7", margin: 0 }}>{p.annihil}</p>
                        </div>
                        <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>UNIVERSALISM</div>
                          <p style={{ fontSize: 12, color: "#D1FAE5", margin: 0 }}>{p.univer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Voices</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.view.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "pastoral" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Pastoral Reflections</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>For Those Afraid of Hell</div>
                <p style={{ fontSize: 13, color: MUTED }}>{`The fear of hell can be spiritually distorting — producing a religion of terror rather than love. Jesus did speak about hell, but always in the context of calling people toward life, not driving them away through fear. John's summary: 'God is love' (1 John 4:8) and 'perfect love drives out fear' (1 John 4:18). If your faith is primarily fear-based, something important has been lost.`}</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>For Those Who Have Lost an Unbelieving Loved One</div>
                <p style={{ fontSize: 13, color: MUTED }}>{`This is one of the most painful places in Christian theology. The pastoral reality is that we do not know what happens in the moments before death — the thief on the cross converted in his final hours. We do not know the full scope of God's grace in those final moments. We do know that the God of all the earth will do what is right (Gen 18:25), and that his love is greater than we can comprehend.`}</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>For Those Who Find ECT Morally Repugnant</div>
                <p style={{ fontSize: 13, color: MUTED }}>{`The revulsion many feel at ECT is not without integrity — it takes God's goodness seriously. The Bible itself wrestles with divine judgment (Lamentations; Psalms of protest). But consider: the alternative views each have their own difficulties. Annihilationism still involves God ending the existence of real persons. Universalism still requires some form of judgment that purges and transforms. No view resolves all tensions with a fully satisfying answer.`}</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>For Those Evangelizing</div>
                <p style={{ fontSize: 13, color: MUTED }}>{`The pastoral urgency of the gospel does not depend on resolving which view of hell is correct. All three views agree: the stakes of human life before God are real; the gospel is God's provision for those stakes; responding to the gospel matters. Share the gospel from the overflow of having tasted that God is good, not primarily from fear of what awaits unbelievers.`}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What questions or struggles do you have about the doctrine of hell?</label>
                <textarea value={journalQuestion} onChange={(e) => setJournalQuestion(e.target.value)} placeholder="I've always struggled with… The question I can't resolve is… My church taught… and now I wonder…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>If you have lost a loved one who was not a believer, how are you sitting with this theologically and emotionally?</label>
                <textarea value={journalLoved} onChange={(e) => setJournalLoved(e.target.value)} placeholder="My [person] died and I've been wrestling with… What gives me hope is… What still hurts is…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalQuestion || journalLoved) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Videos section - inline since no tab */}
      <div style={{ padding: "0 20px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: MUTED }}>Video Teaching</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {VIDEOS.map((v) => (
              <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "8px 10px" }}>
                  <p style={{ fontSize: 11, fontWeight: 600, margin: 0 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Heaven", href: "/heaven" },
              { label: "Eschatology Views", href: "/eschatology-views" },
              { label: "Book of Revelation", href: "/book-of-revelation" },
              { label: "Salvation", href: "/salvation" },
              { label: "Theodicy", href: "/theodicy" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
