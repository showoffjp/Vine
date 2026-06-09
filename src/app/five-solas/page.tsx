"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { BookOpen, ChevronDown, ChevronUp, Check, Star } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const ORANGE = "#F97316";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "scriptura", label: "Sola Scriptura" },
  { id: "fide", label: "Sola Fide" },
  { id: "gratia", label: "Sola Gratia" },
  { id: "christus", label: "Solus Christus" },
  { id: "gloria", label: "Soli Deo Gloria" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SOLAS = [
  {
    latin: "Sola Scriptura",
    english: "Scripture Alone",
    icon: "📜",
    color: GOLD,
    tagline: "Scripture is the supreme authority for Christian faith and practice",
    tab: "scriptura",
    texts: ["2 Tim 3:16-17", "Isaiah 8:20", "Matthew 15:3-9"],
  },
  {
    latin: "Sola Fide",
    english: "Faith Alone",
    icon: "🙏",
    color: BLUE,
    tagline: "Justification is received through faith alone, not works",
    tab: "fide",
    texts: ["Romans 3:28", "Galatians 2:16", "Ephesians 2:8-9"],
  },
  {
    latin: "Sola Gratia",
    english: "Grace Alone",
    icon: "🕊️",
    color: GREEN,
    tagline: "Salvation is entirely God's gift — not earned or assisted by human merit",
    tab: "gratia",
    texts: ["Ephesians 2:8-9", "Romans 11:6", "Titus 3:4-7"],
  },
  {
    latin: "Solus Christus",
    english: "Christ Alone",
    icon: "✝️",
    color: RED,
    tagline: "Christ alone is the mediator and basis of salvation — no saints, no church, no priest",
    tab: "christus",
    texts: ["1 Tim 2:5", "John 14:6", "Acts 4:12"],
  },
  {
    latin: "Soli Deo Gloria",
    english: "To God Alone Be Glory",
    icon: "⭐",
    color: PURPLE,
    tagline: "All glory belongs to God — the purpose and goal of salvation",
    tab: "gloria",
    texts: ["Romans 11:36", "1 Cor 10:31", "Isaiah 42:8"],
  },
];

type SolaContentProps = {
  color: string;
  whatItMeans: string;
  whatItDenies: string;
  keyTexts: { ref: string; text: string; note: string }[];
  objections: { obj: string; response: string }[];
  quote: { text: string; author: string };
  misunderstanding: string;
};

function SolaContent({ data }: { data: SolaContentProps }) {
  const [openObj, setOpenObj] = useLocalStorage(`vine_sola_obj_${data.color}`, "");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ background: `${data.color}10`, border: `1px solid ${data.color}30`, borderRadius: 12, padding: "18px 22px" }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: data.color, marginBottom: 8 }}>What It Means</div>
        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{data.whatItMeans}</p>
      </div>
      <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "18px 22px" }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: RED, marginBottom: 8 }}>What It Denies</div>
        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{data.whatItDenies}</p>
      </div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Key Texts</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {data.keyTexts.map((t, i) => (
            <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ color: data.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{t.ref}</div>
              <blockquote style={{ margin: "0 0 6px", fontStyle: "italic", color: TEXT, fontSize: 13, lineHeight: 1.6, paddingLeft: 10, borderLeft: `2px solid ${data.color}` }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{t.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Common Objections &amp; Responses</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {data.objections.map((o, i) => {
            const isOpen = openObj === String(i);
            return (
              <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <button onClick={() => setOpenObj(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{o.obj}</span>
                  {isOpen ? <ChevronUp size={14} color={MUTED} /> : <ChevronDown size={14} color={MUTED} />}
                </button>
                {isOpen && (
                  <div style={{ padding: "0 14px 14px" }}>
                    <div style={{ borderLeft: `2px solid ${data.color}`, paddingLeft: 10, color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{o.response}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ background: `${data.color}08`, border: `1px solid ${data.color}20`, borderRadius: 12, padding: "16px 20px" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <BookOpen size={16} color={data.color} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: data.color, marginBottom: 6 }}>Common Misunderstanding</div>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{data.misunderstanding}</p>
          </div>
        </div>
      </div>
      <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20`, borderRadius: 12, padding: "16px 20px" }}>
        <blockquote style={{ margin: 0, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.8 }}>
          &ldquo;{data.quote.text}&rdquo;
        </blockquote>
        <div style={{ color: GOLD, fontSize: 12, marginTop: 6, fontWeight: 600 }}>— {data.quote.author}</div>
      </div>
    </div>
  );
}

const SCRIPTURA_DATA: SolaContentProps = {
  color: GOLD,
  whatItMeans: "Scripture is the final and supreme authority for all matters of Christian faith and practice. Not the only authority — tradition, reason, and experience all have a place — but the supreme authority to which all others are accountable. When Scripture and tradition conflict, Scripture wins.",
  whatItDenies: "That the Pope, councils, creeds, or church tradition can add binding doctrine beyond Scripture. That tradition and Scripture are co-equal sources of revelation (the Roman Catholic position). That the church defines what Scripture means rather than Scripture judging the church.",
  keyTexts: [
    { ref: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.", note: "Theopneustos — 'God-breathed' — not merely inspired in a poetic sense but originating from God himself." },
    { ref: "Isaiah 8:20", text: "Consult God's instruction and the testimony of warning. If anyone does not speak according to this word, they have no light of dawn.", note: "The prophetic principle: the word of God is the measuring rod for all other teaching." },
    { ref: "Matthew 15:3", text: "And why do you break the command of God for the sake of your tradition?", note: "Jesus himself critiques religious tradition when it supersedes Scripture." },
  ],
  objections: [
    { obj: "Doesn't Scripture itself require tradition to be interpreted?", response: "Sola Scriptura has never claimed Scripture is self-sufficient without community or reason — only that it is the supreme norm. The Reformers used patristic tradition extensively; they just denied tradition could override Scripture. The church is the context for reading Scripture, not its authority over it." },
    { obj: "The canon itself was determined by tradition — so tradition comes first", response: "The church recognized the canon; it did not create it. Canonicity comes from divine inspiration, not ecclesial decision. The church's discernment of which books were canonical was fallible in process but providentially guided — and the result is Scripture that can then judge the tradition that received it." },
    { obj: "Sola Scriptura produces 40,000 denominations", response: "Most significant doctrines — the Trinity, the Incarnation, justification by faith, resurrection — are not disputed across the broad church. Diversity exists at secondary levels. The alternatives (papal infallibility, unquestionable tradition) don't actually produce unity either — they produce suppression of dissent." },
  ],
  misunderstanding: "Sola Scriptura is not 'solo Scriptura' — the idea that each believer reads the Bible alone with no need for tradition, creeds, or community. The Reformers valued the early church fathers, the ecumenical councils, and the creeds. The principle is about the final court of appeal, not the abandonment of historical theology.",
  quote: { text: "Unless I am convinced by the testimony of the Scriptures or by clear reason... I am bound by the Scriptures I have quoted and my conscience is captive to the Word of God.", author: "Martin Luther, Diet of Worms (1521)" },
};

const FIDE_DATA: SolaContentProps = {
  color: BLUE,
  whatItMeans: "Justification — the declaration that a sinner is right before God — is received through faith alone, apart from any meritorious works. The ground of justification is Christ's righteousness imputed to the believer. Faith is not the work that justifies but the instrument through which righteousness is received.",
  whatItDenies: "That works of any kind — moral, sacramental, or cooperative — contribute to justification. That faith must be supplemented by love or merit to receive righteousness. The Council of Trent's formulation that justification involves cooperation with grace and can be increased or lost through works.",
  keyTexts: [
    { ref: "Romans 3:28", text: "For we maintain that a person is justified by faith apart from the works of the law.", note: "Luther added 'alone' (allein) in his German translation — the doctrine is explicit in the Greek even without it." },
    { ref: "Galatians 2:16", text: "...a person is not justified by the works of the law, but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ and not by the works of the law.", note: "Paul's repeated emphasis in one verse — the multiple statements are deliberate." },
    { ref: "Romans 4:4-5", text: "Now to the one who works, wages are not credited as a gift but as an obligation. However, to the one who does not work but trusts God who justifies the ungodly, their faith is credited as righteousness.", note: "The contrast between wage-earning and gift-receiving is central to Paul's argument in Romans 4." },
  ],
  objections: [
    { obj: "James 2:24 says 'a person is justified by works and not by faith alone'", response: "James and Paul use 'justify' in different senses. Paul means 'declared righteous before God' (forensic justification). James means 'demonstrated righteous before others' (vindicating justification). James 2:14 asks about faith that cannot save — dead faith without works. Paul argues against works being the basis of standing before God." },
    { obj: "If faith alone justifies, what motivates moral behavior?", response: "The Reformed answer: good works flow from justification as fruit, not its root. We are justified by faith alone, but the faith that justifies is never alone — it produces transformation. Salvation is not 'believe and live however you want'; it is 'believe and be transformed by the Spirit.' Works are the evidence of genuine faith, not its supplement." },
    { obj: "What about Catholic teaching that grace must be cooperated with?", response: "Catholics and Protestants agree that grace is the source of salvation and that human merit plays no ultimate role. The disagreement is whether justification is a forensic declaration (imputed righteousness) or a transformative process (imparted righteousness). The Protestant insists the declaration is complete and final; the Catholic sees it as ongoing." },
  ],
  misunderstanding: "Sola Fide does not mean 'faith without works is fine.' Luther himself wrote: 'We are justified by faith alone, but not by a faith that is alone.' The Reformation was not a license for moral passivity — it was a reorientation of moral motivation from earning God's favor to grateful response to his grace.",
  quote: { text: "The article of justification by faith is the article by which the church stands or falls.", author: "Martin Luther" },
};

const GRATIA_DATA: SolaContentProps = {
  color: GREEN,
  whatItMeans: "Salvation is entirely God's gracious gift from beginning to end — from election before the foundation of the world to glorification at the end. The initiative, sustaining power, and completion of salvation are entirely God's work, not human cooperation or merit.",
  whatItDenies: "That humans initiate or contribute to their own salvation. That grace is merely assistance to human free will that must then make the final decision. Semi-Pelagianism: the idea that humans must take the first step and God responds. Synergism: the view that salvation is a cooperative achievement of God and human will.",
  keyTexts: [
    { ref: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.", note: "The 'this' (touto) likely refers to the entire salvation event — grace, faith, and the whole process — as gift, not just faith." },
    { ref: "John 6:44", text: "No one can come to me unless the Father who sent me draws them.", note: "Jesus grounds conversion in the Father's drawing — not human initiative." },
    { ref: "Romans 9:16", text: "It does not, therefore, depend on human desire or effort, but on God's mercy.", note: "Paul's direct statement about the ultimate ground of salvation: not will, not effort, but mercy." },
  ],
  objections: [
    { obj: "If salvation is entirely God's grace, what happens to human responsibility?", response: "Scripture holds both without resolving the tension: 'Work out your salvation with fear and trembling, for it is God who works in you to will and to act' (Phil 2:12-13). Both are simultaneously true. The Reformation affirmed that God's gracious work does not eliminate human response — it produces it. Regeneration precedes and enables repentance and faith." },
    { obj: "Doesn't grace alone make God arbitrary — why does he save some and not others?", response: "This is the hard edge of the doctrine and honest theology acknowledges it. The Reformed answer: no one deserves salvation, so God is not unjust in passing over some. The Arminian answer: God foresaw faith and elected on that basis. Both positions feel the tension. Calvin called it the 'decretum horribile' (terrible decree) — not with glee but with reverence before mystery." },
    { obj: "What's the difference between Sola Gratia and Sola Fide?", response: "Sola Gratia is about the source of salvation — it comes entirely from God's grace, not human merit. Sola Fide is about the instrument through which we receive it — faith, not works. They are logically distinct but inseparable: grace produces the faith through which salvation is received." },
  ],
  misunderstanding: "Sola Gratia is not fatalism or passivity. The Puritan and Reformed traditions that most vigorously maintained this doctrine also produced some of the most rigorous ethical, educational, and political reform in Western history. The people most sure that God is in control of history have often been the most energetic in trying to transform it.",
  quote: { text: "Grace is not opposed to effort; it is opposed to earning.", author: "Dallas Willard" },
};

const CHRISTUS_DATA: SolaContentProps = {
  color: RED,
  whatItMeans: "Jesus Christ is the sole mediator between God and humanity — there is no other name, no other sacrifice, no other priest, no other intercessor through whom salvation comes. The work of Christ on the cross is complete and sufficient — nothing needs to be added, supplemented, or re-presented.",
  whatItDenies: "That the saints can mediate before God on our behalf. That Mary is a co-mediatrix or co-redemptrix. That the Mass re-presents or continues the sacrifice of Calvary. That any church, priest, or religious system can stand between the believer and direct access to God through Christ.",
  keyTexts: [
    { ref: "1 Timothy 2:5", text: "For there is one God and one mediator between God and mankind, the man Christ Jesus.", note: "Paul's 'one mediator' is exclusive and categorical — not 'one primary mediator' or 'one who makes other mediators possible.'" },
    { ref: "John 14:6", text: "I am the way and the truth and the life. No one comes to the Father except through me.", note: "The most exclusive claim in the Gospel of John — and one of the most disputed passages in interfaith dialogue." },
    { ref: "Hebrews 10:14", text: "For by one sacrifice he has made perfect forever those who are being made holy.", note: "The finality and completeness of Christ's sacrifice — 'made perfect forever' — is the Reformation's answer to the ongoing sacrificial system of the Mass." },
  ],
  objections: [
    { obj: "The Reformers attacked Roman Catholic practice, but Catholics don't believe the saints replace Christ", response: "The issue is whether the saints can intercede for us before God — a question of mediation, not replacement. The Reformers argued that Christ is the sole access point; the saints cannot pray for us in a way that supplements Christ's intercession. Hebrews 7:25: 'He always lives to intercede for them' — present tense, complete, and sufficient." },
    { obj: "What about our intercession for each other? Doesn't that constitute mediation?", response: "Human intercessory prayer is real and valued in Scripture. The distinction is between primary mediation (the basis of access to God) and secondary prayer (one Christian requesting God's blessing on another). Only Christ is the ground of our standing before God. We pray for each other not as mediators but as fellow beneficiaries of the one Mediator." },
    { obj: "Solus Christus sounds exclusivist — what about other religions?", response: "Acts 4:12 is explicit: 'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.' The Reformation did not invent Christian exclusivism — it affirmed it. How this intersects with the salvation of those who have never heard is a genuinely debated question (see inclusivist positions, annihilationism), but the Reformation's starting point is Christ's unique mediatorial role." },
  ],
  misunderstanding: "Solus Christus does not mean Christians are to have no pastors, counselors, spiritual directors, or community — all of whom can point us to Christ and support our faith. The principle is about the ground of justification and access to God, not the irrelevance of embodied Christian community.",
  quote: { text: "Christ is not valued at all, unless he be valued above all.", author: "Augustine of Hippo" },
};

const GLORIA_DATA: SolaContentProps = {
  color: PURPLE,
  whatItMeans: "The ultimate purpose and goal of salvation, creation, history, and all things is the glory of God — not human flourishing, not church growth, not national blessing, but the infinite worth and fame of God. All the other solas lead here: God's glory is displayed in scripture's reliability, in grace that doesn't depend on human merit, in faith rather than works, and in Christ as the sole mediator.",
  whatItDenies: "That the purpose of Christianity is human happiness, moral improvement, national blessing, or cultural influence. That God exists for human benefit as the ultimate end. Anthropocentric theology in any form — where man is the center of the story and God is a supporting character.",
  keyTexts: [
    { ref: "Romans 11:36", text: "For from him and through him and for him are all things. To him be the glory forever! Amen.", note: "The doxological climax of Romans 9-11 — the doctrine of election ends in worship, not debate." },
    { ref: "Isaiah 42:8", text: "I am the LORD; that is my name! I will not yield my glory to another or my praise to idols.", note: "God's jealousy for his own glory is not narcissism but the necessary ground of all goodness — only an infinitely good God who prizes his own goodness provides the stable moral foundation for the universe." },
    { ref: "1 Corinthians 10:31", text: "So whether you eat or drink or whatever you do, do it all for the glory of God.", note: "Soli Deo Gloria is not just an abstract principle but a daily vocation — the orientation of every act toward God's glory." },
  ],
  objections: [
    { obj: "Doesn't God's 'glory-seeking' make him narcissistic?", response: "C.S. Lewis asked this question and concluded: a Being of infinite worth who demanded to be valued as infinitely worthy is not narcissistic — he is honest. Only an infinitely good God would be right to glorify himself infinitely. Our desire for God to be glorified is not servile self-abasement but delight in what is truly great. As Jonathan Edwards argued: God glorifying himself and our greatest joy are the same thing." },
    { obj: "What about human flourishing — doesn't Christianity care about people?", response: "Yes — and this is why Soli Deo Gloria is not cold. God's glory is partly displayed in the flourishing of his image-bearers. The Westminster Shorter Catechism: 'Man's chief end is to glorify God, and to enjoy him forever.' The enjoying and the glorifying are not in competition — they are the same act. To glorify God is to enjoy him; to enjoy him is to glorify him." },
    { obj: "Doesn't this make Christianity all about God and nothing about us?", response: "Yes, and that's the point — and paradoxically, it's what makes it good news for humans. If the story is ultimately about us, then we bear the weight of ultimate meaning. If it's ultimately about God, we are freed from that burden and invited into something infinitely larger than ourselves. Theocentric theology is not dehumanizing but liberating." },
  ],
  misunderstanding: "Soli Deo Gloria does not mean human beings are unimportant or that God doesn't care about human welfare. It means that human beings find their truest identity, deepest joy, and ultimate purpose only by being caught up in the glory of God — not as independent ends-in-themselves. It is the opposite of nihilism.",
  quote: { text: "God is most glorified in us when we are most satisfied in him.", author: "John Piper" },
};

const SOLA_CONTENT: Record<string, SolaContentProps> = {
  scriptura: SCRIPTURA_DATA,
  fide: FIDE_DATA,
  gratia: GRATIA_DATA,
  christus: CHRISTUS_DATA,
  gloria: GLORIA_DATA,
};

const VIDEOS = [
  { videoId: "a3gATkfhiCE", title: "The Five Solas of the Reformation Explained" },
  { videoId: "qgNfd0DJKok", title: "Sola Scriptura: What Did the Reformers Mean?" },
  { videoId: "pFmAMrm0TSM", title: "Sola Fide — Martin Luther and the Reformation" },
  { videoId: "XgLQQ2CxNPo", title: "Reformation 500: The Legacy of the Five Solas" },
];

export default function FiveSolasPage() {
  const [tab, setTab] = useLocalStorage("vine_solas_tab", "overview");
  const [journal, setJournal] = useLocalStorage("vine_solas_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Reformation Theology</span>
            <span style={{ background: `${ORANGE}20`, color: ORANGE, border: `1px solid ${ORANGE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Protestant Heritage</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            The Five Solas of the Reformation
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            In 1517, Martin Luther nailed 95 Theses to the door of a church in Wittenberg — and Christianity was never the same. Out of that convulsion came five rallying cries that defined Protestant theology: five &ldquo;alones&rdquo; that together describe how salvation works and to whom the glory belongs.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
                background: tab === t.id ? `${GOLD}20` : "transparent",
                color: tab === t.id ? GOLD : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>The Context: Why the Reformation Happened</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                By the early 16th century, the medieval Catholic Church had developed a complex sacramental system in which salvation was mediated through the church, priesthood, purgatory, indulgences, and the merit of saints. When Luther encountered Paul&apos;s declaration that &ldquo;the righteous shall live by faith&rdquo; (Rom 1:17), he experienced it as a thunderclap — the entire system collapsed.
              </p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The five solas were not invented at a single council — they emerged gradually as the Reformation&apos;s theology crystallized. But together they form a coherent theological statement about the nature of salvation and the shape of the Christian life.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The Five Solas at a Glance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {SOLAS.map((sola, i) => (
                  <button
                    key={i}
                    onClick={() => setTab(sola.tab)}
                    style={{ background: BG, border: `1px solid ${sola.color}30`, borderRadius: 10, padding: "14px 18px", cursor: "pointer", textAlign: "left", transition: "border-color 0.15s" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{sola.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                          <span style={{ color: sola.color, fontWeight: 700, fontSize: 15 }}>{sola.latin}</span>
                          <span style={{ color: MUTED, fontSize: 13 }}>{sola.english}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, marginTop: 4 }}>{sola.tagline}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: `${ORANGE}10`, border: `1px solid ${ORANGE}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: ORANGE, marginBottom: 10 }}>How the Solas Fit Together</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The five solas are not five independent doctrines — they are five facets of one gospel. <strong style={{ color: TEXT }}>Sola Scriptura</strong> establishes the authority from which we learn the gospel. <strong style={{ color: TEXT }}>Sola Gratia</strong> establishes the source of salvation — it comes entirely from God. <strong style={{ color: TEXT }}>Sola Fide</strong> establishes the instrument of salvation — we receive it through faith, not works. <strong style={{ color: TEXT }}>Solus Christus</strong> establishes the ground of salvation — Christ&apos;s work alone, not supplemented by ours or any intermediary. And <strong style={{ color: TEXT }}>Soli Deo Gloria</strong> establishes the goal — God&apos;s glory, not our achievement.
              </p>
            </div>
          </div>
        )}

        {(tab === "scriptura" || tab === "fide" || tab === "gratia" || tab === "christus" || tab === "gloria") && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {(() => {
              const sola = SOLAS.find((s) => s.tab === tab)!;
              return (
                <>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                    <span style={{ fontSize: 36 }}>{sola.icon}</span>
                    <div>
                      <div style={{ color: sola.color, fontWeight: 800, fontSize: 22 }}>{sola.latin}</div>
                      <div style={{ color: MUTED, fontSize: 15 }}>{sola.english}</div>
                    </div>
                  </div>
                  <SolaContent data={SOLA_CONTENT[tab]} />
                </>
              );
            })()}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Which of the five solas is most alive in your own faith right now? Which feels most abstract? What would it look like for Soli Deo Gloria to reshape how you think about your work, relationships, and daily life?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "16px 20px" }}>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                &ldquo;Here I stand. I can do no other. God help me. Amen.&rdquo;<br />
                <span style={{ fontSize: 12, marginTop: 6, display: "block", color: GOLD }}>— Martin Luther, Diet of Worms (1521)</span>
              </blockquote>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Reformed Theology", href: "/reformed-theology" },
              { label: "Protestant Denominations", href: "/protestant-denominations" },
              { label: "Faith & Works", href: "/faith-and-works" },
              { label: "Church History", href: "/church-history" },
              { label: "Calvinism & Arminianism", href: "/calvinism-arminianism" },
              { label: "Salvation", href: "/salvation" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
