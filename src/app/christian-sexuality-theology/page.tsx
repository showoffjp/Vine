"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import {
  Heart, ChevronDown, ChevronUp, BookOpen, Users, MessageCircle,
  ShieldCheck, Flame, Star, AlertCircle
} from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const PINK = "#EC4899";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
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
  { id: "biblical", label: "Biblical Framework" },
  { id: "traditional", label: "Traditional View" },
  { id: "pastoral", label: "Pastoral Care" },
  { id: "celibacy", label: "Celibacy & Side B" },
  { id: "voices", label: "Voices" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const FOUNDATIONAL_TEXTS = [
  {
    ref: "Genesis 1:27",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    significance: "Sexual differentiation is part of the image of God (imago Dei) — not incidental but creational.",
    color: GREEN,
  },
  {
    ref: "Genesis 2:24",
    text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh.",
    significance: "Jesus quotes this as the foundation of marriage (Matt 19:4-6) — one man, one woman, permanent union.",
    color: GOLD,
  },
  {
    ref: "Matthew 19:4-6",
    text: "Haven't you read that at the beginning the Creator 'made them male and female,' and said, 'For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh'?",
    significance: "Jesus affirms Genesis as the sexual ethic's grounding, not Mosaic law or cultural convention.",
    color: BLUE,
  },
  {
    ref: "1 Corinthians 6:18-20",
    text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your body is a temple of the Holy Spirit?",
    significance: "Paul frames sexual ethics theologically — the body is a temple, sexuality is a spiritual matter.",
    color: PURPLE,
  },
  {
    ref: "Song of Solomon (whole book)",
    text: "A celebration of erotic love between a husband and wife — frankly physical, emotionally deep, and unashamed.",
    significance: "Scripture celebrates married sexuality as beautiful, good, and worthy of lyric poetry.",
    color: PINK,
  },
  {
    ref: "Ephesians 5:25-32",
    text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her... This is a profound mystery — but I am talking about Christ and the church.",
    significance: "Marriage reflects Christ's covenant relationship with the church — human sexuality carries cosmic meaning.",
    color: TEAL,
  },
];

const TRADITIONAL_ARGUMENTS = [
  {
    title: "Creation Order",
    icon: "🌿",
    color: GREEN,
    content: "Scripture's sexual ethic isn't rooted in Levitical law but in creation (Genesis 1-2). Jesus himself grounds his teaching in 'the beginning' (Matt 19:4-8). If the creation order establishes the sexual norm, it cannot be set aside as culturally relative — it precedes every culture.",
  },
  {
    title: "Consistent Witness",
    icon: "📜",
    color: GOLD,
    content: "Every direct reference to same-sex sexual behavior in Scripture — Genesis 19, Leviticus 18:22, Romans 1:26-27, 1 Corinthians 6:9, 1 Timothy 1:10 — treats it negatively. No text endorses or commends it. Revisionist readings require arguing that none of these texts address what we mean today by 'homosexuality,' a claim most scholars find strained.",
  },
  {
    title: "The Complementarity Argument",
    icon: "🔗",
    color: BLUE,
    content: "Marriage is not just an emotional bond but a one-flesh union of male and female bodily complementarity. The body tells a story — human sexual difference is ordered toward procreation and the icon of Christ-church union (Eph 5). Same-sex unions, however loving, cannot replicate this icon.",
  },
  {
    title: "Romans 1:26-27",
    icon: "✝️",
    color: RED,
    content: "Paul's argument is not about exploitative relationships or pagan cult prostitution — he uses the creation language of 'natural' and 'unnatural' in a way that parallels Genesis. Even revisionist scholars like Brownson and Vines acknowledge this is the hardest passage for revisionist readings.",
  },
  {
    title: "The Hermeneutical Question",
    icon: "🔍",
    color: PURPLE,
    content: "Revisionist readings typically argue that biblical texts condemn only coercive, exploitative, or idolatrous same-sex acts — not loving, committed relationships. Traditionalists respond: this distinction is not found in the texts themselves, and applying it requires importing modern concepts into ancient texts rather than reading them contextually.",
  },
];

const REVISIONIST_CLAIMS = [
  {
    title: "The Sodom Argument",
    summary: "Genesis 19 is about gang rape and inhospitality, not consensual same-sex relationships.",
    traditionalist: "True that Sodom's sin involves rape and violence. But Jude 7 explicitly cites 'sexual immorality and perversion' as Sodom's sin, and Ezekiel 16:50 lists 'detestable things' among them. This passage alone can't bear revisionist weight, but it doesn't undermine the overall biblical case.",
  },
  {
    title: "Levitical Holiness Codes",
    summary: "Leviticus 18:22 is part of purity codes we no longer follow (shellfish, mixed fabrics) — cultural not moral law.",
    traditionalist: "The NT distinction between ceremonial law (fulfilled in Christ) and moral law (reaffirmed) is standard hermeneutics. Paul reaffirms the sexual prohibitions in Romans 1 without appealing to Leviticus at all — suggesting these aren't merely ceremonial.",
  },
  {
    title: "The Arsenokoitai Debate",
    summary: "1 Cor 6:9 and 1 Tim 1:10 use arsenokoitai — possibly referring only to pederasty or male prostitution, not all same-sex acts.",
    traditionalist: "Arsenokoitai is a compound of arsen (male) and koite (bed/intercourse) — almost certainly a coinage from LXX Leviticus 18:22 and 20:13. John Boswell's claim that it refers only to male prostitution lacks lexical support and most NT scholars (including revisionist scholars like William Loader) reject it.",
  },
  {
    title: "The Orientation Distinction",
    summary: "The biblical writers knew nothing of sexual orientation — they condemn heterosexuals acting against their nature, not gay people being who they are.",
    traditionalist: "Romans 1:26-27's phrase 'exchanged natural relations' is not about psychological orientation but creational design. Paul's point is about creation order, not individual psychology. The concept of orientation is modern, but the act Paul describes is ancient.",
  },
];

type AccordionItem = { title: string; summary: string; traditionalist: string };
function RevisitAccordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useLocalStorage("vine_sex_revisit", "");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => {
        const isOpen = open === String(i);
        return (
          <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? "" : String(i))}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{item.title}</span>
              {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
            </button>
            {isOpen && (
              <div style={{ padding: "0 18px 18px" }}>
                <div style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}30`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                  <div style={{ color: BLUE, fontSize: 12, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Revisionist Argument</div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.summary}</div>
                </div>
                <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Traditional Response</div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.traditionalist}</div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const PASTORAL_CHALLENGES = [
  {
    title: "For gay Christians seeking faithfulness",
    icon: "💜",
    color: PURPLE,
    content: "Many gay Christians believe the traditional view is correct and are seeking to live faithfully within it. They need: (1) Honest acknowledgment of how costly this is — it may mean lifelong celibacy, not just saying no. (2) Rich, embodied community — not just permission to 'have good friendships.' (3) Affirmation that their orientation is not their identity, but neither is it a shameful secret. (4) Patience for the questions they carry honestly.",
  },
  {
    title: "For LGBTQ+ people exploring faith",
    icon: "🌱",
    color: GREEN,
    content: "People who experience same-sex attraction and are exploring Christianity need to find churches that don't make them feel that their first confession must be about sexuality. They need to know the gospel before they need to know the church's position on sexuality. They need to see that Christians can hold a traditional view without hatred or disgust. Grace precedes ethics.",
  },
  {
    title: "For parents of LGBTQ+ children",
    icon: "🏠",
    color: GOLD,
    content: "Christian parents need to know: rejection is not faithfulness. The research is clear that parental rejection dramatically increases depression, homelessness, and suicide risk among LGBTQ+ youth. A parent can hold traditional convictions while maintaining relationship, love, and presence. The long game is the relationship, not winning the immediate argument.",
  },
  {
    title: "For churches seeking to respond well",
    icon: "⛪",
    color: TEAL,
    content: "Churches that have never gently acknowledged that gay people sit in their pews on Sunday mornings send a message of invisibility. Faithful churches name the topic with pastoral warmth, create space for gay Christians to speak honestly, and distinguish between holding a conviction and wielding it as a weapon. Conviction and compassion are not opposites.",
  },
  {
    title: "For those processing deconstruction",
    icon: "🔍",
    color: BLUE,
    content: "Many people are leaving traditional churches partly because of how they handled sexuality — with shame, cruelty, or silence. For people in this space: the church's failure to love well does not settle the theological question. The church can be wrong in its pastoral practice while being right in its doctrine — or vice versa. These need to be held separately.",
  },
];

const SIDE_B_POINTS = [
  {
    title: "What 'Side B' Means",
    color: PURPLE,
    content: "The informal terminology: 'Side A' = affirming of gay relationships as morally equivalent to heterosexual marriage. 'Side B' = traditional sexual ethic (sex only within male-female marriage) while affirming gay identity as a valid way of describing one's experience. Side B Christians believe traditional theology and may identify as gay or queer, holding both in tension.",
  },
  {
    title: "Washed and Waiting (Wesley Hill)",
    color: GOLD,
    content: "Wesley Hill's memoir is the defining text of gay Christian celibacy. Hill, a New Testament scholar, describes his orientation as a 'thorn in the flesh' he doesn't expect to be healed, while remaining committed to celibacy. He argues the church needs a richer theology of friendship and covenant community to make this calling livable.",
  },
  {
    title: "Eve Tushnet & Vowed Friendship",
    color: PINK,
    content: "Catholic writer Eve Tushnet, a celibate lesbian, argues that homosexuality can be sublimated into forms of love the church recognizes: vowed friendship, mentorship, artistic creativity, service. She challenges the church to develop richer non-sexual covenantal relationships rather than leaving celibate people to navigate life alone.",
  },
  {
    title: "The Cost of Celibacy",
    color: RED,
    content: "Honest Side B theology does not pretend this is easy. The call to celibacy for gay Christians is not 'just don't have sex' — it's a call to forgo romantic partnership, potentially children, and the kind of primary covenant relationship heterosexual Christians take for granted. This deserves lament, not minimization. The church must count the cost it is asking others to bear.",
  },
  {
    title: "Spiritual Friendship (Monastery vs. Community)",
    color: TEAL,
    content: "Ron Belgau and the Spiritual Friendship community argue that the ancient Christian practice of deep non-erotic friendship — philia, not eros — offers a genuine alternative for celibate gay Christians. Not a consolation prize but a different kind of love that the Western church has largely forgotten. The New Testament church was built on these bonds.",
  },
];

type AccordionPastoralItem = { title: string; icon: string; color: string; content: string };
function PastoralAccordion({ items }: { items: AccordionPastoralItem[] }) {
  const [open, setOpen] = useLocalStorage("vine_sex_pastoral", "");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => {
        const isOpen = open === String(i);
        return (
          <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? "" : String(i))}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{item.title}</span>
              </div>
              {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
            </button>
            {isOpen && (
              <div style={{ padding: "0 18px 18px 18px" }}>
                <div style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: 14, color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const VOICES = [
  {
    name: "Wesley Hill",
    role: "New Testament scholar, celibate gay Christian, Trinity School for Ministry",
    view: "Traditional / Side B",
    color: PURPLE,
    quote: "My homosexuality, my exclusive attraction to men, will be a part of who I am in the new creation. What changes is not my orientation but the redemption of all loves in the light of Christ.",
    works: ["Washed and Waiting", "Spiritual Friendship"],
  },
  {
    name: "Matthew Vines",
    role: "Author, founder of The Reformation Project",
    view: "Revisionist / Side A",
    color: BLUE,
    quote: "The Bible doesn't directly address the modern concept of sexual orientation or same-sex relationships between equals. When we apply biblical principles properly, we should affirm gay relationships.",
    works: ["God and the Gay Christian"],
  },
  {
    name: "Sam Allberry",
    role: "Pastor, speaker, author (RZIM/TGC)",
    view: "Traditional / Side B",
    color: GREEN,
    quote: "Being gay does not mean less of a Christian, but it does mean that I need to hold on to the same Jesus with the same desperation as every other Christian.",
    works: ["Is God Anti-Gay?", "7 Myths about Singleness"],
  },
  {
    name: "Eve Tushnet",
    role: "Catholic writer, celibate lesbian",
    view: "Traditional / Side B (Catholic)",
    color: PINK,
    quote: "Gay identity can be sublimated into forms of love the church has always honored. The question is not whether to love, but how.",
    works: ["Gay and Catholic", "Tenderness"],
  },
  {
    name: "Preston Sprinkle",
    role: "Author, founder of Center for Faith, Sexuality & Gender",
    view: "Traditional with pastoral nuance",
    color: TEAL,
    quote: "I think the traditional view is correct, but I also think the church has done enormous harm to LGBTQ+ people. Both of those things can be true at the same time.",
    works: ["Embodied", "People to Be Loved"],
  },
  {
    name: "N.T. Wright",
    role: "New Testament scholar, former Bishop of Durham",
    view: "Traditional",
    color: GOLD,
    quote: "The complementarity of male and female is built into the creation narrative. When Paul speaks of same-sex behavior in Romans 1, he does so in the context of idolatry — an exchange of the Creator's design for something else.",
    works: ["Scripture and the Authority of God", "Surprised by Scripture"],
  },
  {
    name: "Justin Lee",
    role: "Author, founder of the Gay Christian Network (now Q Christian Fellowship)",
    view: "Revisionist / Side A",
    color: RED,
    quote: "I believe God wants gay Christians to have loving, committed relationships — not because I reject Scripture, but because I read it differently. Both sides of this debate care about Scripture.",
    works: ["Torn", "Talking Across the Divide"],
  },
];

const SCRIPTURE_CARDS = [
  { ref: "1 Cor 6:9-11", text: "And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ.", note: "Paul's ethic is always embedded in the gospel — the 'were' matters as much as what they 'were not' to become.", color: GREEN },
  { ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus.", note: "The gospel's first word to every struggling believer is not condemnation but freedom.", color: BLUE },
  { ref: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness.", note: "Paul's 'thorn in the flesh' — whatever it was — was not removed. Grace sustains in the midst of ongoing struggle.", color: PURPLE },
  { ref: "Genesis 2:18", text: "It is not good for the man to be alone.", note: "God himself declares human loneliness 'not good.' The church must take seriously what it asks celibate members to bear.", color: GOLD },
  { ref: "Matthew 19:12", text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.", note: "Jesus acknowledges some are born with a different experience of sexuality, and honors the celibate vocation.", color: TEAL },
  { ref: "1 Corinthians 7:7-8", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do.", note: "Paul calls celibacy a gift — not a lesser life but a charism that allows undivided devotion to God.", color: PINK },
];

const VIDEOS = [
  { videoId: "NUdv3x_lXog", title: "Preston Sprinkle: How Should the Church Respond to LGBT+ People?" },
  { videoId: "jCKJmSEjv2I", title: "Wesley Hill: Gay Christianity and the Vocation of Celibacy" },
  { videoId: "sNtOF5S9WDY", title: "Sam Allberry on Being Gay and Christian" },
  { videoId: "JTAKDwYDx4g", title: "Matthew Vines: God and the Gay Christian (The Argument)" },
];

export default function ChristianSexualityPage() {
  const [tab, setTab] = useLocalStorage("vine_sex_tab", "overview");
  const [checkedArg, setCheckedArg] = useLocalStorage("vine_sex_arg", "");
  const [journalReflect, setJournalReflect] = useLocalStorage("vine_sex_journal", "");
  const [journalPastoral, setJournalPastoral] = useLocalStorage("vine_sex_pastoral_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${PINK}20`, color: PINK, border: `1px solid ${PINK}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Pastoral Theology</span>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Ethics</span>
            <span style={{ background: `${TEAL}20`, color: TEAL, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Sexuality</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Christianity &amp; Human Sexuality
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            A balanced theological guide to Christianity&apos;s understanding of human sexuality — the traditional view, biblical arguments, the pastoral challenge, and how the church can respond with both faithfulness and love.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? PINK : BORDER}`,
                background: tab === t.id ? `${PINK}20` : "transparent",
                color: tab === t.id ? PINK : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${PINK}10`, border: `1px solid ${PINK}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Heart size={24} color={PINK} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Why This Topic Matters</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    No topic in contemporary Christianity is more contested — or more pastorally urgent. Families are fractured over it. People are leaving churches over it. And real people with real lives are navigating it every day, often without adequate pastoral support.
                  </p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "10px 0 0" }}>
                    This guide presents the traditional Christian sexual ethic clearly and charitably, examines the revisionist challenges to that ethic honestly, and above all tries to hold both theological conviction and pastoral compassion together — because Scripture demands both.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The Question at the Center</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Traditional View", color: GREEN, desc: "Marriage is the union of one man and one woman; sex is reserved for marriage; same-sex sexual behavior is outside God's design.", icon: "📜" },
                  { label: "Revisionist View", color: BLUE, desc: "The Bible does not address loving, committed same-sex relationships; modern understanding of orientation requires rereading the texts.", icon: "🔄" },
                  { label: "Side B", color: PURPLE, desc: "Traditional theology + gay identity: holds the traditional sexual ethic while affirming gay identity and community.", icon: "💜" },
                  { label: "The Pastoral Challenge", color: PINK, desc: "How the church holds conviction and compassion together — caring for gay Christians, parents, and seekers without compromise or cruelty.", icon: "🤝" },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.label}</div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <AlertCircle size={20} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: GOLD }}>A Note on Tone</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    This is not a debate to be won but a conversation to be had carefully. The people most affected by this discussion are not abstract categories — they are people, beloved of God, navigating real questions with real stakes. This guide tries to present all positions charitably, including those it does not endorse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Biblical Framework */}
        {tab === "biblical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Biblical Foundations for a Sexual Ethic</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The traditional Christian sexual ethic rests not primarily on Levitical prohibitions but on a positive theology of creation, marriage, and the body. These are the foundational texts.
            </p>
            {FOUNDATIONAL_TEXTS.map((text, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: text.color, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{text.ref}</div>
                <blockquote style={{ margin: "0 0 12px", paddingLeft: 14, borderLeft: `3px solid ${text.color}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{text.text}&rdquo;
                </blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, background: `${text.color}10`, padding: "8px 12px", borderRadius: 8 }}>
                  <strong style={{ color: text.color }}>Significance: </strong>{text.significance}
                </div>
              </div>
            ))}

            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: TEAL }}>The Broader Biblical Story</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The biblical sexual ethic is not a list of prohibitions but a positive vision: human sexuality reflects the image of God, marriage reflects Christ&apos;s covenant love for the church, celibacy reflects the coming Kingdom, and the body is a temple of the Holy Spirit. When the church reduces this to a list of do&apos;s and don&apos;ts, it loses the beauty that makes the ethic compelling.
              </p>
            </div>
          </div>
        )}

        {/* Traditional View */}
        {tab === "traditional" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Traditional View</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The traditional Christian sexual ethic — shared by Catholic, Eastern Orthodox, and most Protestant traditions — holds that: (1) sex is a gift for marriage; (2) marriage is a covenant between one man and one woman; (3) same-sex sexual behavior falls outside this design. Here are its primary arguments.
            </p>
            {TRADITIONAL_ARGUMENTS.map((arg, i) => {
              const isChecked = checkedArg === String(i);
              return (
                <div
                  key={i}
                  onClick={() => setCheckedArg(isChecked ? "" : String(i))}
                  style={{ background: CARD, border: `1px solid ${isChecked ? arg.color : BORDER}`, borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22 }}>{arg.icon}</span>
                    <div>
                      <div style={{ color: arg.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{arg.title}</div>
                      {isChecked && <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{arg.content}</div>}
                      {!isChecked && <div style={{ color: MUTED, fontSize: 13 }}>Click to expand</div>}
                    </div>
                  </div>
                </div>
              );
            })}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Revisionist Arguments &amp; Traditional Responses</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                These are the strongest arguments made for revisionist readings of the biblical texts, and how traditional scholars respond.
              </p>
              <RevisitAccordion items={REVISIONIST_CLAIMS} />
            </div>

            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: GREEN }}>What the Scholarly Consensus Looks Like</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                It is worth noting that while the debate is fierce in popular Christian culture, the scholarly consensus — including among scholars who are themselves LGBTQ+ affirming in their personal ethics — is that the traditional reading of the biblical texts is historically and exegetically more defensible. Revisionist readings are possible but require more hermeneutical moves. This does not settle the question for people of conscience, but it should temper overconfident claims in either direction.
              </p>
            </div>
          </div>
        )}

        {/* Pastoral Care */}
        {tab === "pastoral" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Pastoral Challenge</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The theological question and the pastoral question are not the same question. A church can hold traditional convictions and be pastorally terrible. It can also be pastorally excellent and theologically confused. Both matter. These sections address the pastoral challenges for different groups.
            </p>
            <PastoralAccordion items={PASTORAL_CHALLENGES} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Scripture Cards for Pastoral Work</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SCRIPTURE_CARDS.map((card, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${card.color}30`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ color: card.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{card.ref}</div>
                    <blockquote style={{ margin: "0 0 8px", fontStyle: "italic", color: TEXT, fontSize: 13, lineHeight: 1.6 }}>
                      &ldquo;{card.text}&rdquo;
                    </blockquote>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{card.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <AlertCircle size={20} color={RED} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: RED }}>On Conversion Therapy</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Every major medical and psychological body has condemned conversion therapy (attempts to change sexual orientation through psychological intervention). The evidence shows it does not work and causes significant harm, including increased rates of depression, anxiety, and suicide. Holding a traditional sexual ethic does not require endorsing conversion therapy. The traditional view says what to do with one&apos;s sexuality (celibacy or heterosexual marriage), not that orientation itself must change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Celibacy & Side B */}
        {tab === "celibacy" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Celibacy &amp; Side B Theology</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              One of the most significant developments in recent Christian thought on sexuality is the emergence of &quot;Side B&quot; theology — gay Christians who hold the traditional sexual ethic while being openly gay in their identity. Their voices are some of the most important in this conversation.
            </p>

            {SIDE_B_POINTS.map((point, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${point.color}40`, borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ color: point.color, fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{point.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{point.content}</p>
              </div>
            ))}

            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: PURPLE }}>The Church&apos;s Responsibility</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>
                If the church calls gay Christians to celibacy, it bears a corresponding obligation: to make that life livable. That means:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Creating rich covenant community — not just a Sunday morning service but actual shared life",
                  "Affirming singleness as a full life, not a waiting room for marriage",
                  "Making room at the table for people to speak honestly about loneliness and cost",
                  "Developing a robust theology of friendship that the Western church has largely abandoned",
                  "Not weaponizing the ethic: holding conviction without contempt",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <ShieldCheck size={16} color={PURPLE} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Voices */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Key Voices in the Conversation</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              These are some of the most important thinkers shaping how Christians engage with sexuality — from both traditional and revisionist perspectives.
            </p>
            {VOICES.map((voice, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{voice.name}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{voice.role}</div>
                  </div>
                  <span style={{ background: `${voice.color}20`, color: voice.color, border: `1px solid ${voice.color}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600, flexShrink: 0 }}>
                    {voice.view}
                  </span>
                </div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 14, borderLeft: `3px solid ${voice.color}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{voice.quote}&rdquo;
                </blockquote>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {voice.works.map((work, j) => (
                    <span key={j} style={{ background: `${voice.color}15`, color: voice.color, border: `1px solid ${voice.color}30`, borderRadius: 6, padding: "3px 8px", fontSize: 11 }}>
                      {work}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              These questions are for personal discernment, not debate — they are meant to help you engage honestly with your own experience, convictions, and pastoral posture.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Where do you personally land on this question? What has shaped your convictions — Scripture, experience, community, reason? Are there things you&apos;re still uncertain about?
              </label>
              <textarea
                value={journalReflect}
                onChange={(e) => setJournalReflect(e.target.value)}
                placeholder="Write freely — this is for you alone..."
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Think of someone in your life who is gay or LGBTQ+. How have you treated them? What would you want them to know about how you see them? What would faithfulness and love look like in your relationship with them?
              </label>
              <textarea
                value={journalPastoral}
                onChange={(e) => setJournalPastoral(e.target.value)}
                placeholder="Reflect honestly on your pastoral posture..."
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${PINK}10`, border: `1px solid ${PINK}30`, borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: PINK, marginBottom: 6 }}>A Prayer</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                Lord, give me the grace to hold conviction and compassion together — to love people more than winning arguments, and to trust that your design for human sexuality is for human flourishing. Where I have been cruel when I should have been kind, forgive me. Where I have been silent when I should have spoken, give me courage. Help me to see every person as you see them — beloved, image-bearing, worth the cost of honest relationship. Amen.
              </p>
            </div>
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Thoughtful presentations of different perspectives in the conversation about Christianity and human sexuality.
            </p>
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

        {/* Related */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Christian Marriage", href: "/christian-marriage" },
              { label: "Singleness & Celibacy", href: "/singleness" },
              { label: "Complementarianism & Egalitarianism", href: "/complementarianism-egalitarianism" },
              { label: "Spiritual Formation", href: "/spiritual-formation" },
              { label: "Mental Health & Faith", href: "/mental-health" },
              { label: "Theology of the Body", href: "/theology" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
              >
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
