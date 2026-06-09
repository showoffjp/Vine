"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const BLUE = "#3B82F6";
const AMBER = "#F59E0B";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "just-war", "pacifism", "passages", "voices", "conscience", "journal"] as const;
type Tab = (typeof TABS)[number];

const JUST_WAR_CRITERIA = [
  { criterion: "1. Just Cause", desc: "War may only be waged in response to a serious and clear wrong: direct armed attack, defense of innocent people from slaughter, or recovery of unjustly taken goods.", origin: "Augustine; Aquinas, Summa Theologica II-II, q.40" },
  { criterion: "2. Right Intention", desc: "The goal must be peace and justice, not conquest, revenge, or hatred. Even a just war can be fought with unjust intent.", origin: "Augustine; Aquinas" },
  { criterion: "3. Proper Authority", desc: "Only a legitimate governing authority can declare war — not private individuals or non-state actors. Rooted in Romans 13:1–4.", origin: "Romans 13:1–4; Aquinas" },
  { criterion: "4. Last Resort", desc: "All reasonable non-violent alternatives must have been exhausted or determined impossible before military force is used.", origin: "Modern just war theory; Grotius" },
  { criterion: "5. Reasonable Hope of Success", desc: "War must not be futile — the goal must be achievable with proportionate means. Hopeless wars are not just.", origin: "Aquinas; modern theorists" },
  { criterion: "6. Proportionality", desc: "The expected benefits of war must outweigh the total harm — civilian casualties, economic destruction, long-term destabilization.", origin: "Aquinas; international law" },
  { criterion: "7. Discrimination (Non-Combatant Immunity)", desc: "Deliberate targeting of civilians is always prohibited. Only combatants may be directly targeted. This principle rules out genocide, terror bombing, and WMD use against civilian populations.", origin: "Augustine; Geneva Conventions" },
];

const PACIFISM_STREAMS = [
  {
    name: "Absolute Pacifism",
    color: GREEN,
    desc: "All killing is wrong under all circumstances. Christians may not participate in violence under any conditions. This position takes Jesus's commands ('turn the other cheek,' 'love your enemies') as absolute moral rules, not just attitudes.",
    exponents: "Leo Tolstoy, historic Quakers, some Brethren",
  },
  {
    name: "Anabaptist / Christological Pacifism",
    color: GREEN,
    desc: "The church is a counter-cultural community that embodies Christ's non-violent way. War may exist in the world, but disciples of Jesus do not participate in it. The cross — not the sword — is the Christian's weapon. The church witnesses against state violence by refusing to participate.",
    exponents: "Mennonites, Amish, Church of the Brethren, John Howard Yoder, Stanley Hauerwas",
  },
  {
    name: "Non-Violence as Witness",
    color: GREEN,
    desc: "Christians reject violence not merely as pragmatism but as theological witness to the resurrection — 'violence has been defeated; we don't need it.' The church's mission is proclamation, not coercion.",
    exponents: "Brian Zahnd, Shane Claiborne",
  },
  {
    name: "Pragmatic Pacifism",
    color: AMBER,
    desc: "Violence is deeply problematic and should be avoided, and wars almost never meet just war criteria in practice — so Christians should default to non-participation while allowing theoretical exceptions for extreme cases.",
    exponents: "Many Quakers, some Mennonites",
  },
];

const KEY_PASSAGES = [
  {
    ref: "Matthew 5:38–48 — Turn the Other Cheek",
    jwt: "Jesus addresses personal retaliation ('an eye for an eye'), not state-authorized use of force. The governing authority's use of force (Romans 13) is a different category from personal revenge.",
    pac: "Jesus gives a universal principle, not a limited one. The disciples of Jesus must embody non-violence in all relationships — including military service. 'Love your enemies' is a command with no state exception.",
  },
  {
    ref: "Romans 13:1–4 — The Sword of the Governing Authority",
    jwt: "'He is God's servant to do you good. But if you do wrong, be afraid, for he does not bear the sword for nothing.' The state has a God-given mandate to use force for justice — Christians may participate in this through military service.",
    pac: "Paul gives the state a limited delegated authority, but Christians are also called to 'overcome evil with good' (12:21) and 'not be overcome by evil.' Military service is voluntary; the state's authority does not require Christian participation.",
  },
  {
    ref: "John 18:36 — My Kingdom Is Not of This World",
    jwt: "Jesus is explaining his kingdom's origin and nature, not a rule that his followers can never serve in state functions. Even Jesus's words must be read in context — he is explaining why his disciples don't fight for him personally.",
    pac: "Jesus's refusal of political/military power is programmatic for Christian ethics. If Jesus — who had every right — refused the sword, his disciples take their cue from him, not from state necessity.",
  },
  {
    ref: "Luke 3:14 — Soldiers and John the Baptist",
    jwt: "Soldiers ask John what they must do. He says: 'Don't extort money, don't accuse people falsely — be content with your pay.' He does not tell them to leave the military. Military service is not inherently sinful.",
    pac: "John doesn't endorse military service as ideal; he gives immediate practical instruction. Jesus's higher demands come later ('sell what you have,' etc.). Absence of condemnation is not the same as endorsement.",
  },
];

const VOICES = [
  { name: "Augustine of Hippo (354–430)", position: "Just War", color: BLUE, work: "City of God; Letters", note: "First major Christian thinker to systematize just war theory. Argued that pacifism, while personally praiseworthy, is insufficient when innocent people are being slaughtered. Love of neighbor may demand defensive violence." },
  { name: "Thomas Aquinas (1225–1274)", position: "Just War", color: BLUE, work: "Summa Theologica", note: "Provided the most influential just war framework: just cause, right authority, right intention. His criteria remain the basis for modern international humanitarian law." },
  { name: "John Howard Yoder (1927–1997)", position: "Pacifist", color: GREEN, work: "The Politics of Jesus; The Original Revolution", note: "Mennonite theologian whose careful biblical/political theology made pacifism intellectually serious within Protestantism. Argued that Jesus's way of the cross IS a political option, not a withdrawal from politics." },
  { name: "Stanley Hauerwas (b. 1940)", position: "Pacifist", color: GREEN, work: "The Peaceable Kingdom; War and the American Difference", note: "Methodist theologian and ethicist. Argues that Christian pacifism is not principally about outcomes but about what kind of community the church is called to be. Has been called 'America's best theologian' by Time." },
  { name: "Reinhold Niebuhr (1892–1971)", position: "Just War (Realist)", color: BLUE, work: "The Nature and Destiny of Man; Moral Man and Immoral Society", note: "Argued that pacifism is an irresponsible abdication of political responsibility. His Christian Realism shaped American foreign policy thinking through WWII and the Cold War." },
  { name: "Martin Luther King Jr. (1929–1968)", position: "Non-Violent Resistance", color: AMBER, work: "Strength to Love; Letter from Birmingham Jail", note: "Not a war-rejecting pacifist but a practitioner of non-violent direct action. Drew on Gandhi, Thoreau, and the Sermon on the Mount. Distinguished non-violent resistance from passive acceptance." },
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

export default function JustWarPage() {
  const [tab, setTab] = useLocalStorage("vine_justwar_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_justwar_passage", "");
  const [journalPosition, setJournalPosition] = useLocalStorage("vine_justwar_position", "");
  const [journalPersonal, setJournalPersonal] = useLocalStorage("vine_justwar_personal", "");

  const VIDEOS = [
    { id: "n9KLrJXJ1I0", title: "Just War Theory — C.S. Lewis's Case" },
    { id: "S-zSsFEU7hs", title: "Christian Pacifism — John Howard Yoder" },
    { id: "yoSExPz9fCk", title: "War and the Christian — Stanley Hauerwas" },
    { id: "Ec5lMOH_ByU", title: "Martin Luther King Jr. on Nonviolence" },
  ];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: BLUE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield size={18} color={BLUE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Just War & Christian Pacifism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Can Christians participate in war? A biblical and ethical guide</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 10px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${BLUE}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>
            {t === "just-war" ? "Just War" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>A Question With No Easy Answer</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Christians have disagreed about war since Constantine gave Christianity political power in the 4th century. Before that, the early church was largely pacifist by circumstance and conviction. After that, the just war tradition developed. Both positions have been held by serious, Scripture-faithful Christians.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}44`, padding: 16 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>JUST WAR TRADITION</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>Under strict conditions, Christian participation in war is not only permissible but may be obligatory — love of neighbor demands defense of the innocent against unjust aggression.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${GREEN}44`, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>CHRISTIAN PACIFISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>Jesus's way of the cross is non-violent. Disciples of Jesus do not take up the sword under any circumstance. The church witnesses against violence by refusing to participate in it.</p>
              </div>
            </div>
            <div style={{ background: "#F59E0B11", border: `1px solid #F59E0B33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>The historical shift:</strong> The early church (pre-Constantine) was largely pacifist. After Constantine (313 AD), just war theory developed to address Christian responsibility in a Christian empire. Both the early pre-Constantinian church AND the medieval church were serious Christians — their different contexts shaped different conclusions.
              </p>
            </div>
          </div>
        )}

        {tab === "just-war" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Just War Theory — The Seven Criteria</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>Developed by Augustine, systematized by Aquinas, now codified in international humanitarian law</p>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Just war theory does NOT say all wars are justified. It provides strict criteria that, if not all met, make a war unjust and Christian participation in it problematic. In practice, many wars historically and today fail to meet these criteria.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {JUST_WAR_CRITERIA.map((c, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: BLUE, marginBottom: 4 }}>{c.criterion}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: "0 0 6px" }}>{c.desc}</p>
                  <span style={{ fontSize: 11, color: MUTED + "88" }}>{c.origin}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "pacifism" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Christian Pacifism — Streams and Arguments</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Pacifism is not one position — here are its main streams.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PACIFISM_STREAMS.map((s, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${s.color}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: s.color, marginBottom: 8 }}>{s.name}</div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", margin: "0 0 8px" }}>{s.desc}</p>
                  <div style={{ background: s.color + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: s.color, fontSize: 11, fontWeight: 600 }}>EXPONENTS: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{s.exponents}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages — Both Readings</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The same texts — two very different readings.</p>
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
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: BLUE + "11", borderLeft: `3px solid ${BLUE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>JUST WAR VIEW</div>
                          <p style={{ fontSize: 12, color: "#BFDBFE", margin: 0 }}>{p.jwt}</p>
                        </div>
                        <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>PACIFIST VIEW</div>
                          <p style={{ fontSize: 12, color: "#D1FAE5", margin: 0 }}>{p.pac}</p>
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
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Historical & Contemporary Voices</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.position.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "conscience" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Conscience and Military Service</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Conscientious Objection</div>
                <p style={{ fontSize: 13, color: MUTED }}>Many Christian traditions have a strong tradition of conscientious objection — the belief that one's faith prohibits military service. Mennonites, Quakers, and Brethren have historically held this position. Many nations legally recognize conscientious objector status.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Selective Conscientious Objection</div>
                <p style={{ fontSize: 13, color: MUTED }}>Many Christians who accept just war theory apply it to specific conflicts — willing to serve in some wars but refusing participation in wars that clearly fail the just war criteria. This is a morally serious position that many just war theorists support.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>What All Christians Share</div>
                <ul style={{ fontSize: 13, color: MUTED, paddingLeft: 16, margin: 0, lineHeight: 1.8 }}>
                  <li>War is never celebrated — always tragedy</li>
                  <li>Civilians must never be targeted</li>
                  <li>Soldiers remain moral agents responsible for their actions</li>
                  <li>Peace is always the goal — even in justified war</li>
                  <li>Veterans deserve care for moral injury and trauma</li>
                  <li>Prayer for enemies is commanded (Matt 5:44) in all circumstances</li>
                </ul>
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
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Where do you land, and what Scripture most shapes your view?</label>
                <textarea value={journalPosition} onChange={(e) => setJournalPosition(e.target.value)} placeholder="I lean toward just war / pacifism because… The passage that most convinces me is… I struggle with…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>If you or someone you love has served in the military, how has faith intersected with that experience?</label>
                <textarea value={journalPersonal} onChange={(e) => setJournalPersonal(e.target.value)} placeholder="My experience with military service and faith has been… I've wrestled with…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalPosition || journalPersonal) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Christian Ethics", href: "/christian-ethics" },
              { label: "Political Theology", href: "/political-theology" },
              { label: "Military Trauma", href: "/military-combat-trauma-ptsd-christian-faith" },
              { label: "Moral Injury", href: "/moral-injury" },
              { label: "Christian Nationalism", href: "/christian-nationalism" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
