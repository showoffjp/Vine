"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";

const STORAGE_KEY = "vine_christianleadership_entries";

interface LDREntry {
  id: string;
  date: string;
  leadershipArea: string;
  servantMoment: string;
  powerTemptation: string;
}

const theologySections = [
  {
    title: "&ldquo;Whoever Wants to Be Great Must Be Your Servant&rdquo; &mdash; The Inversion of Greatness (Mark 10:43-45)",
    body: "Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many (Mark 10:43-45). Jesus speaks these words in response to James and John asking for the highest seats — seats of honor, power, and proximity to glory. His answer is not a modification of their ambition but an inversion of its entire logic. In the world, greatness moves upward: you ascend by accumulating authority over others. In the kingdom, greatness moves downward: you become great by placing yourself in service of others, and the ultimate expression of this movement is the giving of one's life. The Son of Man himself is the model and the measure. Jesus did not merely teach servant leadership as a management philosophy; he embodied it as a way of being in the world that culminated in the cross. Every Christian leader who has ever confused a position of authority with a position of privilege stands under the correction of this text.",
  },
  {
    title: "Jesus Washing Feet &mdash; Authority Expressed in Towel and Basin (John 13:3-5)",
    body: "Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples' feet (John 13:3-5). The foot-washing is only possible because of what precedes it: Jesus is secure in his identity. Knowing who he is and where he has come from, he is free to move downward. This is the pattern of Christian leadership: authority expressed as service flows from security in Christ's love and one's own belovedness. The leader who grasps at status, defends position, and refuses to be vulnerable is revealing not strength but insecurity. True authority does not need to protect itself. It can afford to take the lowest place, absorb accusation without retaliation, and yield preference to others — because its foundation is not in the approval of those being served but in the love of the Father.",
  },
  {
    title: "Shepherd vs. Hireling &mdash; The Leader Who Stays (John 10:11-13)",
    body: "I am the good shepherd. The good shepherd lays down his life for the sheep. He who is a hired hand and not a shepherd, who does not own the sheep, sees the wolf coming and leaves the sheep and flees, and the wolf snatches them and scatters them. He flees because he is a hired hand and cares nothing for the sheep (John 10:11-13). Jesus draws the sharpest possible distinction between the shepherd and the hireling not in terms of skill or competence but in terms of commitment under cost. The hireling does the job when it is safe and comfortable; the shepherd stays when the wolf comes. What exposes the hireling is not performance when things are easy — it is departure when things become dangerous or costly. Christian leadership is evaluated not by what happens in the seasons of growth and success but by what happens in the seasons of threat, suffering, and sacrifice. The leader who abandons the community, the cause, or the people when it becomes personally costly has revealed themselves as a hireling, whatever their gifting or title.",
  },
  {
    title: "Character Before Competence &mdash; Elder Qualifications (1 Tim 3, Titus 1)",
    body: "Paul's qualification lists for elders and overseers in 1 Timothy 3 and Titus 1 are striking in what they emphasize. Nearly every item is a character quality: above reproach, husband of one wife, sober-minded, self-controlled, respectable, hospitable, gentle, not quarrelsome, not a lover of money, managing his household well, not arrogant, not quick-tempered. The single teaching-related competency — able to teach — is embedded in a matrix of virtue requirements. The church has routinely reversed this ratio, selecting for platform presence, communication skill, and entrepreneurial gifting while treating character as a secondary concern. Paul's lists represent a decisive theological claim: the quality of a leader's soul is more important than the quality of their performance. The character that qualifies a person for leadership is not a set of prerequisites to be met once and forgotten; it is the ongoing, growing evidence that the Spirit is forming the person into the shape of Christ. A leader who is competent but unformed in character is a liability to the body of Christ however gifted they are.",
  },
  {
    title: "Servant Leadership &mdash; Not Greenleaf&rsquo;s Invention but Jesus&rsquo; Practice",
    body: "Robert Greenleaf coined the term servant leadership in a 1970 essay and it has since become one of the most influential concepts in organizational leadership theory. Greenleaf's insight was genuine: the most effective leaders are those who begin with the question, how do I serve? rather than, how do I lead? But it is important to recognize that Jesus pioneered this inversion two thousand years earlier, and that his version has a theological depth that management theory cannot provide. Greenleaf's servant leader is primarily a better organizational strategy; Jesus' servant leader is a cross-bearer, someone whose leadership is shaped by the same self-giving love that sent God's Son to a Roman execution. Christian servant leadership is not a more effective style of management; it is a participation in Christ's own movement of descent and self-donation. It is sustained not by a philosophy but by the Spirit, and it produces not a leadership culture but a community that looks like the kingdom of God.",
  },
  {
    title: "Leadership and Suffering &mdash; The Cross-Shaped Leader",
    body: "Paul's second letter to the Corinthians is perhaps the most extended exploration in the New Testament of what leadership shaped by the cross actually looks like. Paul's opponents in Corinth presented impressive credentials, forceful presence, and polished rhetoric; Paul presented weakness, suffering, and what he called the treasure in jars of clay (2 Corinthians 4:7). The power at work in Paul's ministry was demonstrably not his own — that was precisely the point. The cross-shaped leader is one who has learned not to flee weakness but to inhabit it, because it is in weakness that the power of Christ is most fully on display. This overturns a leadership instinct shared by every culture: the instinct to hide weakness, project strength, and present the most favorable version of oneself as the leader. Christian leadership in the tradition of Paul is willing to be known as weak, to admit failure, to suffer publicly, and to refuse the temptation to leverage suffering for sympathy or platform. The suffering is real, and the power that works through it is not the leader's.",
  },
  {
    title: "Pride and Power in Leadership &mdash; The Diotrephes Problem (3 John 9-10)",
    body: "I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority. So if I come, I will bring up what he is doing, talking wicked nonsense against us. And not content with that, he refuses to welcome the brothers, and also stops those who want to and puts them out of the church (3 John 9-10). Diotrephes is among the most chilling portraits of leadership failure in Scripture: a person who loves the preeminence, who controls information and access, who uses theological language to consolidate personal power, and who punishes those who do not defer to him. What makes Diotrephes dangerous is that he is probably not an obvious villain; such people rarely are. He is a leader in a church, apparently respected enough to be able to act this way. The pattern John describes — the hunger for preeminence, the control of access, the use of authority to exclude — is a recurring pattern in church leadership failure. The antidote is not a structural fix but a theological one: leaders who know that they serve at the pleasure of the One who washed feet, and who have genuinely given up the ambition to put themselves first.",
  },
  {
    title: "Why Leadership in the Church Is Not Like Leadership in the World",
    body: "Jesus said explicitly: You know that those who are considered rulers of the Gentiles lord it over them, and their great ones exercise authority over them. It shall not be so among you (Mark 10:42-43). The church is not a corporation or a nonprofit that happens to use religious language; it is a new community formed by the Holy Spirit on the pattern of Christ's own life, characterized by mutual submission, shared authority, and the priority of the weak and marginal. This has concrete implications for how leadership works: decisions are made with shared discernment, not executive decree; leaders are accountable to the community, not above it; the criterion for leadership is not effectiveness by worldly measures but faithfulness to Christ; and the measure of a leader's greatness is not the size of their platform but the depth of their service and the health of those they lead. The church borrows structural concepts from the surrounding culture at its peril. The Diotrephes temptation is always to import the logic of worldly power into the community of the cross — and John's letter makes clear how seriously the New Testament takes the resulting distortion.",
  },
  {
    title: "Accountability for Leaders &mdash; The Plural Elder Model",
    body: "One of the most consistent patterns in New Testament church governance is the plural elder model: Paul consistently appoints elders (plural) in every church, never a single monarchical leader. The practical wisdom in this is evident: no single person's vision, temperament, or blind spots should be determinative for a community. But the theological rationale is deeper: the church is the body of Christ, led ultimately by its Head, and every human leadership structure that distributes authority among multiple accountable people is a better image of that reality than any structure that concentrates it in one. Contemporary celebrity culture — including Christian celebrity culture — has produced a form of church leadership that is almost exactly the reverse of what the New Testament envisions: platforms built around individual leaders, accountability structures that exist largely in theory, and communities whose health is dependent on the health of a single person. The ancient practice of plural eldership, mutual accountability, and shared discernment is not merely a structural preference; it is a protection against the Diotrephes problem that the New Testament itself prescribes.",
  },
];

const practices = [
  {
    name: "The Foot-Washing Audit",
    body: "Once a month, ask of your current leadership role: Where have I most recently taken the lowest place? Where have I most recently deferred to someone with less authority but greater proximity to the question? Where have I washed feet this week — literally or figuratively? If you cannot answer any of these concretely, it is likely that your leadership has drifted toward self-protection and status maintenance rather than service. The foot-washing was not a symbol for Jesus; it was an action. Look for the basin and towel in your particular sphere of leadership.",
  },
  {
    name: "The Character Inventory",
    body: "Once a year, ask someone who knows you well — a spouse, a close friend, a ministry partner — to give you honest feedback on the character qualities in 1 Timothy 3: Are you known for gentleness or harshness? Hospitality or exclusivity? Self-control or reactivity? Not quarrelsome or prone to defensiveness? Managing your household well or neglecting it for public ministry? Do not ask for this feedback from those who report to you; ask from those who are your peers and see you when you are not performing. The feedback will be more honest and more useful.",
  },
  {
    name: "Practice Power-Sharing",
    body: "Identify one decision this week where you could share authority rather than exercise it alone. Invite the person closest to the question — who may be below you organizationally — into the decision-making. Make it explicit: I want your judgment on this, not just your input. Power-sharing in small, repeated decisions builds the relational trust and the organizational culture that makes genuine servant leadership possible. Leaders who share power in small things can be trusted with large ones; leaders who cannot yield in small things will not yield when it costs something real.",
  },
  {
    name: "Develop One Person Intentionally",
    body: "Following the 2 Timothy 2:2 pattern, identify one person you are currently developing as a leader. Not mentoring casually — deliberately developing: giving them access to your decision-making, naming what you are doing and why, creating stretch assignments, debriefing honestly, and speaking truthfully about what you see in them. If no one comes to mind, you are consuming ministry rather than multiplying it. The leader who has no apprentice is not yet leading in the New Testament sense; they are managing.",
  },
  {
    name: "Read the Cross-Shaped Leaders",
    body: "Spend a year reading the biographies of leaders whose authority was genuinely shaped by suffering: Dietrich Bonhoeffer (costly resistance to Nazi power), Henri Nouwen (giving up Harvard for L'Arche), Amy Carmichael (fifty years in India without a furlough), Paul himself. These are not inspirational stories — they are theological arguments in narrative form about what leadership shaped by the cross actually produces. They will recalibrate your instincts about greatness more effectively than any leadership curriculum.",
  },
  {
    name: "Invite Accountability That Has Teeth",
    body: "Arrange for genuine accountability — not a peer group that gently encourages, but a relationship or structure where someone who knows your actual life has permission to name what they see, ask the questions you most dread, and tell you when they believe you are wrong. This accountability should include your finances, your use of power, your marriage or singleness, your prayer life, and the gap between your public and private self. Leaders who are unaccountable eventually damage those they lead. The plural elder structure of the New Testament is one model; a sustained, honest mentoring relationship is another. Both share the same feature: real authority to name what the leader needs to hear.",
  },
];

const voices = [
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "The Contemplative Pastor; Working the Angles",
    body: "Eugene Peterson pastored Christ Our King Presbyterian Church in Bel Air, Maryland for twenty-nine years before becoming a professor, translator, and writer. His pastoral theology — gathered across The Contemplative Pastor, Working the Angles, and his memoir The Pastor — consistently resisted the cultural pressures on pastoral leadership: to be a CEO, to grow a platform, to measure success by attendance and budget. Peterson argued that the pastor's primary calling was to pray, to preach, and to accompany specific people through their actual lives — and that all three required the willingness to be present and unhurried in a culture that rewarded busyness and program. His translation of the Bible, The Message, and his five-volume spiritual theology shaped a generation of pastors toward what he called spiritual direction as the pastoral vocation's core.",
    quote: "The pastor's task is not to make programs run or crowds gather. It is to be with people: this person, in this place, in this moment, as someone who knows the Name that is above every name and is willing to be present with that Name in a human life.",
  },
  {
    name: "Henri Nouwen",
    years: "1932–1996",
    role: "In the Name of Jesus; The Wounded Healer",
    body: "Henri Nouwen was a Dutch Catholic priest and theologian who taught at Notre Dame, Yale, and Harvard before leaving Harvard at the height of his academic career to live and work at L'Arche Daybreak community in Toronto, caring for severely disabled adults. In his short book In the Name of Jesus, written after his first year at L'Arche, Nouwen reflects on the three temptations Jesus faced in the wilderness — to be relevant, spectacular, and powerful — and argues that these same temptations define the failure modes of Christian leadership. Leadership in the name of Jesus is not about impressive results or compelling performance; it is about the vulnerability of the cross: being led where you would rather not go (John 21:18), and finding that the power of resurrection is most available to those who have stopped trying to avoid powerlessness.",
    quote: "The central question is, are the leaders of the future truly men and women of God, people with an ardent desire to dwell in God's presence, to listen to God's voice, to look at God's beauty, to touch God's incarnate Word and to taste fully God's infinite goodness?",
  },
  {
    name: "Leighton Ford",
    years: "1931–present",
    role: "Transforming Leadership; The Attentive Life",
    body: "Leighton Ford served for many years alongside his brother-in-law Billy Graham in the Billy Graham Evangelistic Association before founding Leighton Ford Ministries, whose primary focus is the mentoring of young leaders. His book Transforming Leadership draws on the life of Jesus to articulate a model of leadership grounded in vision, relationships, and what Ford calls the way of the cross — the willingness to give power away rather than accumulate it. Ford's own leadership was shaped profoundly by the death of his son Sandy at age twenty-one; he has written and spoken extensively about how grief became the school in which he learned what leadership most deeply requires: the capacity to be present to suffering rather than to manage or escape it.",
    quote: "Leadership in the way of Jesus is not about building our own kingdoms but about preparing people for the kingdom of God. The leader who transforms is the leader who is willing to be transformed first.",
  },
  {
    name: "J. Oswald Sanders",
    years: "1902–1992",
    role: "Spiritual Leadership",
    body: "J. Oswald Sanders served as the General Director of the China Inland Mission (now OMF International) and wrote Spiritual Leadership in 1967, a book that has remained one of the most widely used resources in Christian leadership development. Sanders draws on Scripture, biography, and his own decades of cross-cultural ministry to argue that spiritual leadership is always a matter of inner life before outer influence: the leader who cannot lead themselves in prayer, in Scripture, in character, and in the management of their own household has no business leading a church or a mission. Sanders is particularly incisive on the relationship between suffering and leadership: he observes that every leader in Scripture went through a wilderness before a ministry, and that the wilderness is not a delay before the real assignment but the place where the person capable of the assignment is formed.",
    quote: "The person who is impatient with weakness will be defective in their leadership. A true leader must be willing to accept the burden of people's weaknesses and failures — bearing them rather than condemning them, being with them rather than above them.",
  },
  {
    name: "Dallas Willard",
    years: "1935–2013",
    role: "The Divine Conspiracy; Renovation of the Heart",
    body: "Dallas Willard was a professor of philosophy at the University of Southern California and one of the most important Christian thinkers of the twentieth century on the relationship between spiritual formation and life in the world. His work on Christian leadership is distributed across The Divine Conspiracy and Renovation of the Heart, and its central argument is that Christian leadership is only possible for people who are themselves being genuinely formed by the Spirit into Christlikeness — and that most contemporary approaches to leadership development skip this formation and go directly to skill acquisition. For Willard, the great omission from contemporary Christianity is not the omission of missions or evangelism but of discipleship: the intentional formation of people in the character of Christ, which alone makes the kind of leadership Jesus describes both possible and sustainable.",
    quote: "A leader who is not growing deeper in God is not really a spiritual leader at all, whatever their position. Position gives authority; only formation gives the power to use it well.",
  },
  {
    name: "Andy Crouch",
    years: "1969–present",
    role: "Playing God: Redeeming the Gift of Power",
    body: "Andy Crouch is an executive editor at Christianity Today and the author of Playing God: Redeeming the Gift of Power, which is among the most theologically serious treatments of power and leadership in recent Christian writing. Crouch argues that power is not inherently corrupting — it is a gift from God, given for the purpose of creating flourishing — but that it is uniquely vulnerable to idolatry: the temptation to use power for self-protection and self-aggrandizement rather than for the flourishing of others. He draws a sharp distinction between power and privilege: Christian leaders are called to use power for others while giving up privilege — the comfort of insulation from the consequences of one's decisions. Jesus on the cross is Crouch's central image: the One with all authority, using it to give life to others at the cost of his own.",
    quote: "The question is not whether you have power. If you are alive and human, you have power. The question is whether you are using your power to make others more powerful, or to make yourself less vulnerable.",
  },
];

const scriptures = [
  {
    ref: "Mark 10:43-45",
    text: "Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.",
    note: "The definitive text on Christian leadership: greatness is directional, not positional. It moves downward into service and self-giving, and the model is Christ himself moving toward the cross.",
  },
  {
    ref: "John 13:14-15",
    text: "If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet. For I have given you an example, that you also should do just as I have done to you.",
    note: "The foot-washing is not a symbol to admire but an action to imitate. Jesus commissions the disciples into a particular culture of leadership — where the one with authority takes the lowest place.",
  },
  {
    ref: "John 10:11-13",
    text: "I am the good shepherd. The good shepherd lays down his life for the sheep. He who is a hired hand and not a shepherd, who does not own the sheep, sees the wolf coming and leaves the sheep and flees.",
    note: "The shepherd and the hireling are distinguished by one thing: whether they stay when it costs them something. Christian leadership is evaluated not in seasons of ease but in seasons of threat.",
  },
  {
    ref: "1 Timothy 3:2-4",
    text: "Therefore an overseer must be above reproach, the husband of one wife, sober-minded, self-controlled, respectable, hospitable, able to teach, not a drunkard, not violent but gentle, not quarrelsome, not a lover of money. He must manage his own household well.",
    note: "Paul's qualification list is almost entirely character, not competence. The church selects for virtue first — who the leader is in private determines who they are in public.",
  },
  {
    ref: "2 Timothy 2:2",
    text: "What you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.",
    note: "Four generations of transmission in one verse. The leader's primary work is developing other leaders. A leader with no apprentice is consuming ministry rather than multiplying it.",
  },
  {
    ref: "3 John 9-10",
    text: "Diotrephes, who likes to put himself first, does not acknowledge our authority… he refuses to welcome the brothers, and also stops those who want to and puts them out of the church.",
    note: "The Diotrephes warning: love of preeminence, control of access, and use of authority to exclude are the marks of a leadership that has been captured by pride. The pattern is recognizable in every generation.",
  },
];

const videos = [
  { videoId: "MfZl8JGqpnU", title: "Servant Leadership &mdash; What Jesus Said About Greatness" },
  { videoId: "hGl3M_yYnqQ", title: "Henri Nouwen: Leadership and the Temptation of Power" },
  { videoId: "hCuZWl69I_Q", title: "The Good Shepherd &mdash; John 10 and Christian Leadership" },
  { videoId: "DSnp1WJVQTQ", title: "Character Before Competence &mdash; Elder Qualifications in 1 Timothy" },
  { videoId: "sZ8GxrxEMcE", title: "Andy Crouch: Playing God &mdash; Redeeming the Gift of Power" },
  { videoId: "HDQK1b1zS8E", title: "Dallas Willard on Spiritual Formation and Leadership" },
];

const relatedPages = [
  { href: "/discipleship", label: "Discipleship" },
  { href: "/christian-humility", label: "Christian Humility" },
  { href: "/christian-community", label: "Christian Community" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/theology-of-work", label: "Theology of Work" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianLeadershipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LDREntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [leadershipArea, setLeadershipArea] = useState("");
  const [servantMoment, setServantMoment] = useState("");
  const [powerTemptation, setPowerTemptation] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!leadershipArea.trim()) return;
    const entry: LDREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      leadershipArea: leadershipArea.trim(),
      servantMoment: servantMoment.trim(),
      powerTemptation: powerTemptation.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setLeadershipArea("");
    setServantMoment("");
    setPowerTemptation("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    resize: "vertical",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: PURPLE + "22",
            color: PURPLE,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Church &amp; Ministry
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Servant of All: Christian Leadership
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Jesus redefined greatness: whoever would be first must be servant of all. Christian leadership is not a platform
          to be seized but a life to be poured out &mdash; shaped by the cross, empowered by the Spirit, and accountable
          to the body of Christ. It looks nothing like leadership in the world.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of servant leadership from Mark 10 to John 13, the character qualifications
          of 1 Timothy 3, the warning of the Diotrephes problem, and the practices that form leaders who lead from the
          cross rather than from the throne.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? PURPLE : BORDER,
                background: tab === t.id ? PURPLE + "22" : "transparent",
                color: tab === t.id ? PURPLE : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              A Theology of Christian Leadership
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on leadership &mdash; from Jesus&rsquo; inversion of
              greatness to the New Testament&rsquo;s account of why leadership in the church is structurally different
              from leadership in the world.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Only Sustainable Foundation
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single insight: Christian leadership is only possible for
                people who have genuinely ceased trying to protect themselves. The foot-washing, the shepherd who stays,
                the leader who shares power, the elder whose character is above reproach &mdash; all of these are only
                sustainable for the person who has found their identity not in their position, platform, or performance,
                but in the love of the Father. The leader who is still managing their reputation cannot wash feet. The
                leader who has received the love of Christ freely can afford to give it away.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Practices of the Servant Leader
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Servant leadership is not a style but a formation. These six practices train the habits of downward
              movement, power-sharing, character growth, and accountability that make it possible.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: PURPLE + "22",
                  color: PURPLE,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Voices on Christian Leadership
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six pastors, theologians, and practitioners who have thought most deeply about what it means to lead
              in the name of Jesus rather than in the name of success.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${PURPLE}`,
                  background: PURPLE + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Scripture on Christian Leadership
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, memorize, and pray. Each pairs the passage with a brief reflection on
              what it means for how Christian leaders exercise authority.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${PURPLE}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Memory suggestion:</strong> take Mark 10:43-45 and John 13:14-15 together
                as a paired meditation for a week. Let the first text tell you what Christian leadership is; let the
                second text show you what it looks like in practice. Then ask: in what specific context this week am I
                being called to wash feet?
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: 0 }}>
              Leadership Reflection Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a leadership area, a moment when you practiced servant leadership this week, and a temptation toward
              power or control that you faced. Entries are saved privately in your browser &mdash; a ledger of the
              slow formation that cross-shaped leadership requires.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="ldr-area" style={labelStyle}>A leadership area I am reflecting on</label>
                <textarea
                  id="ldr-area"
                  value={leadershipArea}
                  onChange={e => setLeadershipArea(e.target.value)}
                  rows={2}
                  placeholder="e.g. how I lead our small group; how I make decisions at work; how I exercise authority in my family; how I handle conflict in ministry..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Name a specific context rather than a general one. Formation happens in the particular.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="ldr-servant" style={labelStyle}>A moment of servant leadership I practiced this week</label>
                <textarea
                  id="ldr-servant"
                  value={servantMoment}
                  onChange={e => setServantMoment(e.target.value)}
                  rows={2}
                  placeholder="A decision deferred, a foot washed, a credit given away, a hard conversation undertaken for someone else's good rather than my own..."
                  style={inputStyle}
                />
                <p style={hintStyle}>The foot-washing was an action, not a posture. Be concrete about what downward movement looked like this week.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="ldr-power" style={labelStyle}>A power or control temptation I faced</label>
                <textarea
                  id="ldr-power"
                  value={powerTemptation}
                  onChange={e => setPowerTemptation(e.target.value)}
                  rows={2}
                  placeholder="A moment I wanted to protect my reputation, control an outcome, dominate a conversation, or resist accountability..."
                  style={inputStyle}
                />
                <p style={hintStyle}>The Diotrephes problem begins before it is visible to others. Naming the temptation is the first act of resistance.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!leadershipArea.trim()}
                style={{
                  background: leadershipArea.trim() ? PURPLE : BORDER,
                  color: leadershipArea.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: leadershipArea.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your leadership journal above &mdash; one honest reflection at a time.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <span style={{ color: MUTED, fontSize: "0.8rem" }}>{entry.date}</span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          aria-label="Delete entry"
                          style={{
                            background: "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: MUTED,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "0.25rem 0.65rem",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Leadership Area
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.leadershipArea}</p>
                      </div>
                      {entry.servantMoment && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Servant Moment
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.servantMoment}</p>
                        </div>
                      )}
                      {entry.powerTemptation && (
                        <div>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Power Temptation Faced
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.powerTemptation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on servant leadership, the character qualifications for Christian leaders, the temptations of
              power, and the cross-shaped model Jesus gave us in Mark 10 and John 13.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Whoever would be great among you must be your servant.&rdquo; The basin and the towel are still the
            instruments of leadership in the kingdom of God. The cross-shaped leader is not the one who climbs but the
            one who descends &mdash; and finds, in that descent, the power of resurrection.
          </p>
        </div>
      </main>
    </div>
  );
}
