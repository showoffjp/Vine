"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const BEATITUDES = [
  {
    n: 1,
    blessing: "Blessed are the poor in spirit",
    promise: "for theirs is the kingdom of heaven",
    color: "#6B7280",
    meaning: "Poverty of spirit is the recognition that you have nothing to bring to God — no righteousness, no achievement, no claim. It is the opposite of spiritual self-sufficiency. The one who enters the kingdom does so as a beggar, not a contributor. This is not low self-esteem; it is accurate self-knowledge: everything I have is gift.",
    paradox: "In a world that rewards confidence and self-promotion, Jesus says the spiritually bankrupt are blessed. The kingdom does not go to the spiritually ambitious — it belongs to those who know they are empty.",
    practice: "Ask: where am I relying on my own goodness, intelligence, or spiritual progress rather than God's grace? Confess specific areas of spiritual pride.",
    verse: "Matthew 5:3",
  },
  {
    n: 2,
    blessing: "Blessed are those who mourn",
    promise: "for they will be comforted",
    color: "#3B82F6",
    meaning: "Mourning is not simply sadness — it is the grief that comes from seeing things as they actually are: sin as genuinely destructive, suffering as genuinely real, the world as genuinely broken. It is the opposite of comfortable numbness. Those who mourn are those who care enough about reality to grieve it.",
    paradox: "The world calls mourning weakness and prescribes distraction. Jesus says it is the condition for comfort. You cannot be comforted if you refuse to grieve. The Psalms of lament model what it looks like to mourn honestly before God.",
    practice: "What do you need to mourn that you have been numbing or avoiding? Give it permission to be felt. Bring it to God in honest prayer.",
    verse: "Matthew 5:4",
  },
  {
    n: 3,
    blessing: "Blessed are the meek",
    promise: "for they will inherit the earth",
    color: "#10B981",
    meaning: "Meekness is not weakness or passivity. In Greek, praeis could describe a trained warhorse — great power under control. The meek are those who have power but choose not to exercise it selfishly. Moses is called the meekest man alive (Numbers 12:3) despite being a leader who confronted Pharaoh. Jesus is 'gentle and humble in heart' (Matthew 11:29).",
    paradox: "The earth goes, in human systems, to the aggressive — those who take it. Jesus says the meek will inherit it. This is an eschatological reversal: the final distribution of the earth will be by God's justice, not by human power.",
    practice: "Where is God calling you to exercise restraint, deference, or gentleness rather than asserting yourself? Is there a situation where your 'right' to speak or act should be held in check?",
    verse: "Matthew 5:5",
  },
  {
    n: 4,
    blessing: "Blessed are those who hunger and thirst for righteousness",
    promise: "for they will be filled",
    color: "#F59E0B",
    meaning: "Righteousness in Matthew has two dimensions: personal moral integrity and social justice. To hunger and thirst for righteousness is to desire both your own holiness and the just ordering of the world with the urgency of physical need — not as a mild preference but as a desperate longing. This is not self-righteousness; it is dissatisfaction with the gap between what is and what should be.",
    paradox: "The world is largely comfortable with moral adequacy. Jesus says the blessed are those who are not satisfied — who ache for more holiness and more justice than currently exists.",
    practice: "What injustice, personal or social, are you actually distressed about? Let the hunger be real and bring it to action: confession, prayer, engagement.",
    verse: "Matthew 5:6",
  },
  {
    n: 5,
    blessing: "Blessed are the merciful",
    promise: "for they will be shown mercy",
    color: "#EF4444",
    meaning: "Mercy is the compassionate response to suffering and sin in others — not giving people what they deserve when they deserve worse. The merciful have been shown their own need for mercy and respond to others from that place. The connection is direct: those who have received mercy give it; those who withhold mercy reveal that they have not fully received it (see the parable of the unforgiving servant, Matthew 18).",
    paradox: "Mercy seems to let people off the hook — which feels unjust. But justice without mercy becomes cruelty, and mercy without justice becomes sentimentality. Jesus models both: the cross satisfies justice while mercy is given freely.",
    practice: "Who in your life deserves your judgment more than your mercy? What would it look like to extend mercy — not denying what was done but choosing not to wield it?",
    verse: "Matthew 5:7",
  },
  {
    n: 6,
    blessing: "Blessed are the pure in heart",
    promise: "for they will see God",
    color: "#8B5CF6",
    meaning: "Purity of heart (Kierkegaard: 'to will one thing') is singleness of motive — undivided devotion without an ulterior agenda. The pure in heart pursue God for God, not for the spiritual benefits, social reputation, or sense of achievement that religion can provide. This is the hardest purity to achieve because it is invisible — only God and you know what you are really after.",
    paradox: "We are constitutionally divided — wanting God and wanting our agendas simultaneously. Psalm 86:11: 'Give me an undivided heart.' Purity of heart is a gift to be sought, not a achievement to be attained.",
    practice: "Examine your motives in spiritual practice: do you pray, give, and serve from genuine love for God and others — or for what it produces in you? Confess the mixture.",
    verse: "Matthew 5:8",
  },
  {
    n: 7,
    blessing: "Blessed are the peacemakers",
    promise: "for they will be called children of God",
    color: "#0EA5E9",
    meaning: "Peacemakers actively work to reconcile, repair, and restore relationships and communities. This is not peacekeeping — the passive avoidance of conflict. It is peacemaking: entering into conflict as a reconciling presence. Jesus is the ultimate peacemaker: 'he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility' (Ephesians 2:14).",
    paradox: "Peacemakers often cause conflict — because bringing peace to a situation first requires naming what is wrong. The one who speaks truth into a broken relationship is first experienced as a troublemaker, then as the one who made peace possible.",
    practice: "What relationship in your life needs peace? Are you avoiding the honest conversation that might create it? The peacemaker goes toward the conflict, not away from it.",
    verse: "Matthew 5:9",
  },
  {
    n: 8,
    blessing: "Blessed are those who are persecuted for righteousness",
    promise: "for theirs is the kingdom of heaven",
    color: "#DC2626",
    meaning: "The final beatitude addresses the consequence of living the previous seven: a life of poverty of spirit, mourning, meekness, hunger for righteousness, mercy, purity of heart, and peacemaking will be countercultural — and countercultural people experience opposition. The persecution described is specifically for righteousness, not for being difficult, self-righteous, or obnoxious.",
    paradox: "The world calls persecution a sign that something is wrong. Jesus calls it a sign that something is right — that your life is distinct enough to register as a challenge to dominant values. Not all suffering is this kind, but this kind is blessed.",
    practice: "What has following Jesus cost you? If the answer is nothing, it may be worth asking whether you are genuinely living counter to the culture around you.",
    verse: "Matthew 5:10-12",
  },
];

const BACKGROUND = [
  { title: "The Sermon on the Mount", verse: "Matthew 5-7", body: "Matthew 5-7 is the first and longest of the five great discourses in Matthew's Gospel. Jesus goes up a mountain (echoing Moses at Sinai), sits down (the posture of a teacher), and teaches his disciples. The crowds also listen. The Sermon has been called 'the Magna Carta of the Kingdom' — the foundational description of what life under God's reign looks like. It is not a list of requirements for earning salvation but a portrait of those who have received it and are being transformed by it." },
  { title: "Jesus as the New Moses", verse: "Deuteronomy 18:15", body: "Matthew's Gospel frames Jesus as the new and greater Moses. Moses went up Sinai and received the law; Jesus goes up a mountain and teaches with an authority beyond the law. The 'you have heard it said... but I say to you' formula (Matthew 5:21-48) is not Jesus abolishing the law but radicalizing it — showing that the law's intent was always the transformation of the inner life, not merely external compliance. 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them' (Matthew 5:17)." },
  { title: "What 'Blessed' Means", verse: "Psalm 1:1", body: "The Greek word translated 'blessed' (makarios) was used in classical literature to describe the happiness of the gods — a deep, stable well-being untouched by external circumstances. It is not the transient pleasure of a good day but the settled flourishing of one whose life is properly ordered. The Hebrew equivalent, asher, opens Psalm 1 in the same way. Jesus is announcing that the people described by the Beatitudes are the genuinely flourishing ones — however unlikely they look by human standards." },
  { title: "Portrait of the Kingdom Citizen", verse: "Matthew 5:10", body: "The eight beatitudes describe not eight types of Christians but eight dimensions of a single character. The kingdom citizen is poor in spirit, mourning, meek, hungry for righteousness, merciful, pure in heart, a peacemaker, and willing to suffer for righteousness. These qualities are not optional extras for advanced Christians — they are the basic description of what it looks like to be a follower of Jesus. John Stott: 'The Beatitudes are Jesus's own description of what every Christian ought to be.'" },
  { title: "The Beatitudes as Portrait of Jesus", verse: "Isaiah 61:1-3", body: "A close reading reveals that Jesus is describing himself. He is the supremely poor in spirit (Philippians 2:5-8), the one who mourns (John 11:35; Luke 19:41), the meek one (Matthew 11:29), the one who hungers and thirsts for righteousness, the merciful one (Hebrews 4:15), the pure in heart, the peacemaker par excellence (Ephesians 2:14-16), and the one who suffered for righteousness more than any other. The Beatitudes are not only a description of what his followers should become — they are a self-portrait of who Jesus already is. To be conformed to his image (Romans 8:29) is to grow into the Beatitudes." },
];

const COMMENTATORS = [
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354 – 430",
    context: "Bishop of Hippo, North Africa — Our Lord's Sermon on the Mount",
    bio: "Augustine's commentary on the Sermon on the Mount (De Sermone Domini in Monte, c. 394) was the first major systematic treatment of the text in Christian literature. Augustine related each beatitude to one of the seven petitions of the Lord's Prayer and to one of the seven gifts of the Holy Spirit (Isaiah 11:2-3). His reading emphasizes that the Beatitudes describe an inward journey of the soul toward God — from poverty of spirit (recognizing our need) through mourning (grief over sin) to the vision of God (purity of heart). For Augustine, the Beatitudes are a pedagogical ladder: each quality enables the next, and all together lead to the 'seventh day' rest of the pure in heart who see God.",
    quote: "Our heart is restless until it rests in Thee. The Beatitudes are the path of that rest.",
    contribution: "Augustine established the interpretation of the Beatitudes as describing progressive spiritual growth — a sequence in which each quality builds on the one before it. This reading shaped medieval and Reformation commentary. His linking of the Beatitudes to the Lord's Prayer showed how the Sermon functions as a unified whole, not a collection of disconnected ethical teachings.",
  },
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "1906 – 1945",
    context: "German Lutheran pastor, The Cost of Discipleship (1937)",
    bio: "Bonhoeffer's treatment of the Beatitudes in The Cost of Discipleship (Nachfolge) is among the most radical in modern Christianity. Writing against a German church that had domesticated the Sermon on the Mount into a general spiritual ideal, Bonhoeffer insisted that the Beatitudes must be taken with absolute literalness. The poor in spirit are not the spiritually humble in a generic sense but those who have literally given up all security to follow Jesus. The mourning are those who mourn the world's sin and their own, not sentimentally but with the sharp grief of those who know what is at stake. The persecuted are not metaphorically persecuted but actually encountering hostility for their discipleship. Bonhoeffer himself was executed in April 1945 for his involvement in the resistance — the final beatitude enacted in his life.",
    quote: "These are not ideals. They are not descriptions of what should be. They are descriptions of what is, for those who follow Jesus.",
    contribution: "Bonhoeffer rescued the Beatitudes from being spiritualized into comfortable generalities. His reading insists that the Sermon on the Mount is not advice for the morally serious but the literal description of those who have walked away from everything to follow Jesus. The cost of discipleship — real loss, real suffering, real persecution — is not the exception to the Beatitudes but their context.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935 – 2013",
    context: "American philosopher and theologian, The Divine Conspiracy (1998)",
    bio: "Dallas Willard's reading of the Beatitudes in The Divine Conspiracy is one of the most unexpected and liberating in recent decades. Against the common reading that the Beatitudes are qualities to be achieved, Willard argues that they are announcements of availability: the kingdom is available even — especially — to those who seem the least likely to find it. 'Blessed are the poor in spirit' does not mean 'you become blessed by achieving poverty of spirit' but rather 'even those who are spiritually bankrupt are candidates for the kingdom.' The Beatitudes are the good news of grace: no one is so far gone, so broken, so disqualified that the kingdom is out of reach. This reading does not eliminate the call to transformation — but it ensures the gospel precedes the demand.",
    quote: "The Beatitudes are not a list of requirements but an announcement: those you least expect are the very ones the kingdom of God is for.",
    contribution: "Willard's reading of the Beatitudes as 'announcements' rather than 'requirements' has rescued many Christians from a performance-based reading of the Sermon on the Mount. His approach places grace first — the kingdom is freely available — and then allows transformation to flow from gratitude rather than effort. The Divine Conspiracy remains one of the most important books on the Sermon on the Mount in the twentieth century.",
  },
  {
    id: "wright",
    name: "N.T. Wright",
    era: "Born 1948",
    context: "British NT scholar, Matthew for Everyone (2002)",
    bio: "Wright reads the Beatitudes in their Jewish apocalyptic context: they are announcements of the in-breaking of God's kingdom into a world of Roman occupation and religious corruption. The poor, mourning, and meek are not general categories of spiritual virtue but specific descriptions of Israel in her suffering — and Jesus is announcing that God is now acting to reverse their situation. The Beatitudes echo Isaiah's announcement of the Year of Jubilee (Isaiah 61), which Jesus applies to himself in Luke 4. They are not timeless moral principles but eschatological declarations: the world is turning, God is acting, and these are the people whose situation is being reversed. At the same time, they describe the community that Jesus is forming — a community that embodies the new-creation values of the coming kingdom in the present age.",
    quote: "The Beatitudes announce that the new world is breaking in, and these are the people who will inherit it — not because they are virtuous, but because God is acting.",
    contribution: "Wright's Jewish and eschatological reading of the Beatitudes recovers their original shock: they were not encouraging general moral improvement but announcing a specific historical event — the arrival of God's kingdom in and through Jesus. The people described are the 'wrong' people by every religious and political standard of their day, which is precisely the point. God's kingdom operates by reversal.",
  },
  {
    id: "aquinas",
    name: "Thomas Aquinas",
    era: "1225 – 1274",
    context: "Italian Dominican theologian, Summa Theologica",
    bio: "Thomas Aquinas gave the Beatitudes their most systematic medieval treatment in the Summa Theologica (I-II, Questions 69-70). Like Augustine, he related the eight beatitudes to the seven gifts of the Holy Spirit and to the theological virtues, but with his characteristic precision. For Aquinas, the Beatitudes describe the perfection of human happiness — not the imperfect happiness achievable through natural virtue (which Aristotle described) but the supernatural happiness that only the Holy Spirit can produce. The meek are those whose passions are perfectly ordered by reason and grace; the pure in heart are those whose intellect and will are perfectly oriented to God. The final beatitude — seeing God in the beatific vision — is the fulfillment toward which all the others point.",
    quote: "The beatitudes are acts of perfect virtue, proceeding from the gifts of the Holy Spirit, which dispose us to follow the movements of grace.",
    contribution: "Aquinas's treatment of the Beatitudes integrated them into the broader architecture of his theological ethics — relating them to virtue, gift, and happiness in a unified system. His reading ensured that the Beatitudes were taken seriously as describing real moral excellence, not merely religious sentiment. His synthesis of Aristotelian ethics and Christian theology produced a framework for understanding the Beatitudes that influenced Catholic moral theology for centuries.",
  },
];

type Tab = "beatitudes" | "background" | "commentators" | "formation" | "videos";

export default function BeatitudesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_beatitudes_tab", "beatitudes");
  const [selected, setSelected] = useState(1);
  const [selectedCommentator, setSelectedCommentator] = usePersistedState("vine_beatitudes_selected_commentator", "augustine");

  const beat = BEATITUDES.find(b => b.n === selected)!;
  const commentator = COMMENTATORS.find(c => c.id === selectedCommentator)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛰️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Beatitudes</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The opening of the Sermon on the Mount — {BEATITUDES.length} upside-down blessings that describe the character of kingdom citizens. These are not commands but descriptions: this is what those who belong to God's kingdom look like.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "beatitudes" as const, label: "The Eight", icon: "⛰️" },
            { id: "background" as const, label: "Background", icon: "📜" },
            { id: "commentators" as const, label: "Commentators", icon: "🧠" },
            { id: "formation" as const, label: "Formation", icon: "🌱" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "beatitudes" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {BEATITUDES.map(b => (
                <button type="button" key={b.n} onClick={() => setSelected(b.n)}
                  style={{ width: "100%", background: selected === b.n ? `${b.color}15` : "transparent", border: `1px solid ${selected === b.n ? b.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 6, cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: selected === b.n ? `${b.color}25` : "transparent", border: `1px solid ${selected === b.n ? b.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: selected === b.n ? b.color : MUTED, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{b.n}</div>
                  <span style={{ color: selected === b.n ? b.color : MUTED, fontWeight: 600, fontSize: 12, lineHeight: 1.4 }}>{b.blessing.replace("Blessed are ", "").replace("Blessed are ", "").replace("Blessed is ", "").split(' ').slice(0,4).join(' ')}...</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${beat.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${beat.color}20`, border: `2px solid ${beat.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: beat.color, fontWeight: 900, fontSize: 14 }}>{beat.n}</div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={beat.verse} /></span>
                </div>
                <h2 style={{ color: beat.color, fontWeight: 900, fontSize: 20, marginBottom: 4, lineHeight: 1.3 }}>{beat.blessing},</h2>
                <p style={{ color: MUTED, fontSize: 15, fontStyle: "italic", marginBottom: 20 }}>{beat.promise}.</p>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{beat.meaning}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THE PARADOX</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{beat.paradox}</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{beat.practice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "background" && (
          <div>
            {BACKGROUND.map((b, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{b.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={b.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "commentators" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {COMMENTATORS.map(c => (
                <button type="button" key={c.id} onClick={() => setSelectedCommentator(c.id)}
                  style={{ width: "100%", background: selectedCommentator === c.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedCommentator === c.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedCommentator === c.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{c.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{commentator.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{commentator.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{commentator.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{commentator.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{commentator.contribution}</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "formation" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: TEXT }}>Living the Beatitudes</h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              The Beatitudes are not a checklist — they are a description of a transformed character. How does this transformation happen?
            </p>
            {[
              { blessing: "Poor in Spirit → Humility", icon: "🙏", practice: "Keep a daily examen. End each day asking: where did I rely on my own wisdom or strength instead of God today? Make a specific confession. The discipline of self-examination cultivates poverty of spirit — the accurate knowledge that we are perpetually dependent.", verse: "Matthew 5:3" },
              { blessing: "Those Who Mourn → Compassion", icon: "💧", practice: "Spend thirty minutes each week reading about suffering you are not personally experiencing — a news story from a conflict zone, a testimony from someone in addiction recovery, a memoir from a grief survivor. Let the suffering of the world in. Mourning is not just personal — it is intercession.", verse: "Matthew 5:4" },
              { blessing: "The Meek → Gentleness", icon: "🕊️", practice: "Choose one relationship where you regularly exert control or force your opinion. For one month, practice asking questions instead of asserting positions. Practice waiting. Practice saying 'I might be wrong.' Meekness is not weakness — it is power held gently, in service.", verse: "Matthew 5:5" },
              { blessing: "Hunger for Righteousness → Longing", icon: "⚡", practice: "Feed the longing. Read Scripture looking for glimpses of what God intends for his world. Pray Psalm 85 regularly. Fast once a month as an act of solidarity with your longing — letting your body feel the incompleteness that your spirit already knows.", verse: "Matthew 5:6" },
              { blessing: "The Merciful → Forgiveness", icon: "🤍", practice: "Name one person you have not fully forgiven. Write what they did and how it hurt you — specifically. Then write, as a prayer: 'I choose to release [name] from the debt they owe me. I do not excuse what they did, but I release my right to demand payment.' Do this every time the bitterness returns.", verse: "Matthew 5:7" },
              { blessing: "Pure in Heart → Integrity", icon: "💎", practice: "Conduct a 'purity audit' of your interior life. What motives are you hiding from yourself? Where are you performing righteousness for an audience rather than for God? Ruthless interior honesty — not guilt-inducing but clarifying — is the practice of purity.", verse: "Matthew 5:8" },
              { blessing: "Peacemakers → Reconciliation", icon: "🌿", practice: "Identify one broken relationship in your network — not yours, but one you can help repair. Serve as a go-between, a listener, a truth-teller. Peacemakers are active; peace is not the absence of conflict but the presence of justice and love.", verse: "Matthew 5:9" },
              { blessing: "The Persecuted → Faithfulness", icon: "🔥", practice: "Take a real stand for the gospel that costs you something small. Say something true that you know will be unpopular. Live visibly enough as a Christian that the world can push back. Prepare for this by meditating on the testimony of those who were persecuted before you.", verse: "Matthew 5:10-12" },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: GREEN, margin: 0 }}>{item.blessing}</h3>
                    <span style={{ fontSize: 12, color: MUTED }}><VerseRef reference={item.verse} /></span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75, margin: 0 }}>{item.practice}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on the Beatitudes and the Sermon on the Mount — from scholars and pastors who have given their lives to understanding this text.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "FTZ3GfL9yQM", title: "The Beatitudes — An Introduction", channel: "The Bible Project", description: "An animated overview of the Beatitudes in the context of the Sermon on the Mount, tracing their connection to the Old Testament and their radical reversal of the world's values." },
                  { videoId: "1OkWF6UU8lU", title: "Blessed Are the Poor in Spirit — Dallas Willard", channel: "Dallas Willard Ministries", description: "Willard's reading of the first beatitude as an announcement of availability — the kingdom is for the spiritually bankrupt, not the spiritually accomplished." },
                  { videoId: "GRmMccP1A9M", title: "The Sermon on the Mount — Bonhoeffer's Interpretation", channel: "Theology Explained", description: "Exploring Bonhoeffer's radical reading of the Beatitudes from The Cost of Discipleship — not ideals but descriptions of those who have literally left everything to follow Jesus." },
                  { videoId: "poV1w0ZZIWw", title: "Living the Beatitudes Today", channel: "N.T. Wright Online", description: "Wright situates the Beatitudes in their first-century Jewish apocalyptic context, showing how they announce the in-breaking of God's kingdom and what that means for Christian formation today." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
