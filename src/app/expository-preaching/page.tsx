"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "what" | "process" | "example" | "series" | "preachers" | "journal" | "videos";

const WORKED_EXAMPLE = [
  { label: "The Text", color: GREEN, body: "Mark 4:35-41 — Jesus calms the storm. After a day of teaching, Jesus tells the disciples, 'Let us go across to the other side.' A great windstorm arises and the boat is swamped while Jesus sleeps on a cushion. The terrified disciples wake him: 'Teacher, do you not care that we are perishing?' He rebukes the wind and the sea — 'Peace! Be still!' — and there is a great calm. Then he asks, 'Why are you so afraid? Have you still no faith?' And they are filled with awe: 'Who then is this, that even the wind and the sea obey him?'" },
  { label: "1. Genre & Context", color: PURPLE, body: "Genre: gospel narrative — preach it as a story, following its movement. Immediate context: Mark 4 is a chapter of parables about the kingdom; now the King acts. Book context: Mark is building the question 'Who is this?' toward the confession of 8:29 and the centurion's words at the cross (15:39). Biblical-theological context: only God 'stills the storm' and rules the raging sea (Ps 107:28-29; Job 38:8-11; Jonah 1). Mark is making a deliberate divine claim about Jesus." },
  { label: "2. Exegetical Observations", color: "#3B82F6", body: "Jesus sleeps in the storm — supreme trust and genuine humanity (cf. Jonah, also asleep in a storm, but for the opposite reason). The disciples' question 'Do you not care?' is the cry of every sufferer. Jesus' rebuke ('Peace! Be still!' — literally 'be muzzled') is the language used for silencing demons (Mark 1:25): the chaos is treated as a hostile power. The decisive turn: after the calm, the disciples are more afraid of Jesus than of the storm — 'filled with great fear.'" },
  { label: "3. Fallen Condition Focus", color: "#EF4444", body: "The human condition the text addresses: in the storms of life we conclude that God is asleep, distant, or uncaring — that he does not love us because he has not yet rescued us. We mistake his apparent inaction for indifference. The text confronts the fear that we are alone in the boat with a God who does not care." },
  { label: "4. The Big Idea", color: "#F59E0B", body: "Subject: How the disciples' fear changes in the presence of Jesus. Complement: Reveals that the person of Jesus is more awesome than any storm — so the deepest answer to fear is not calmer circumstances but a bigger view of who is in the boat with you. One sentence: 'When you know who is in your boat, the storm is no longer the most awesome thing you face.'" },
  { label: "5. Structure", color: "#10B981", body: "Following the narrative's three beats: (1) The Storm We Fear — the chaos is real and the disciples are right to be afraid; (2) The Question We Ask — 'Do you not care?' and Jesus' word of power; (3) The Person We Discover — a greater fear that drives out fear, as the disciples meet the One the sea obeys. Inductive movement, building toward the closing question, 'Who then is this?'" },
  { label: "6. Gospel & Application", color: "#EC4899", body: "Application woven throughout, climaxing in the gospel: the One who is greater than the storm did not stay asleep on a cushion — at the cross he himself went down into the ultimate storm of God's judgment, crying 'Do you not care?' in our place (Mark 15:34), so that we would never face the storm alone. Specific application: name a real 'storm' your hearers face (diagnosis, layoff, wayward child) and show that the resource the text gives is not a guarantee of calm seas but the presence and proven love of the Lord of the sea." },
  { label: "7. Introduction & Conclusion", color: "#8B5CF6", body: "Introduction (creates the need): begin with the universal experience of crying out in a crisis and feeling met by silence — 'Do you not care?' Don't start by reading the text; start where the people live, then move to the boat. Conclusion (crystallizes the Big Idea): return to the disciples' awe and the cross, leaving the congregation with the lingering question reframed as comfort — you know who is in your boat. End on the Person, not merely on a moral lesson about courage." },
];

const PITFALLS = [
  { pitfall: "Running commentary with no main point", color: "#EF4444", fix: "A string of verse-by-verse observations is not a sermon; it is annotated reading. Drive everything toward one Big Idea. If the congregation cannot state your point in a sentence on the way home, you did not have one." },
  { pitfall: "Moralism — 'be like / don't be like'", color: "#F59E0B", fix: "Reducing every text to a behavioral takeaway ('be brave like the disciples weren't') preaches law without gospel and leaves hearers to muster change in their own strength. Show how Christ is the hero of the text and the source of the power to obey (Chapell's FCF)." },
  { pitfall: "Imposing an outline the text doesn't have", color: GREEN, fix: "Three alliterated points forced onto a narrative distort it. Let the structure of the sermon arise from the structure of the passage. Serve the text; don't conscript it for your template." },
  { pitfall: "The hobby-horse — preaching your themes, not the text's", color: "#3B82F6", fix: "When every sermon lands on the same handful of favorite topics, the text is a pretext. Lectio continua (book-by-book preaching) is the cure: it forces you to preach what the Spirit put next, including the hard and unfamiliar." },
  { pitfall: "All explanation, no application", color: "#10B981", fix: "A sermon that explains the ancient world brilliantly but never reaches the congregation's actual life is a lecture. Ask 'so what?' of every point. Apply specifically and concretely — to real situations the hearers will face this week." },
  { pitfall: "Neglecting prayer and the preacher's own walk", color: "#8B5CF6", fix: "Technique cannot substitute for the Spirit. A sermon prepared without prayer, by a heart the text has not first searched, may be informative but will lack power. Preach what has first preached to you, and beg God to do what you cannot." },
  { pitfall: "Going too long / saying too much", color: "#EC4899", fix: "Trying to include every good thing you found buries the one thing that matters. Cut toward the Big Idea. A focused twenty-five minutes outperforms an unfocused fifty. Leave them with one unforgettable truth, not ten forgettable ones." },
  { pitfall: "Plagiarism and borrowed conviction", color: "#6366F1", fix: "Lifting another preacher's sermon wholesale — or its key insights without wrestling with the text yourself — is dishonest and spiritually hollow. Read others to sharpen your own study, then preach from convictions the Spirit has worked in you through the text." },
];

const PROCESS_STEPS = [
  { step: 1, title: "Choose Your Text", color: GREEN, content: "The best expository preaching follows a book-by-book approach (lectio continua) — working through an entire book of the Bible consecutively. This prevents the preacher from avoiding hard texts, prevents the congregation from hearing only the preacher's favorite themes, and allows the Holy Spirit to set the agenda through the biblical canon. Start by asking: which book does this congregation most need? Which book is the Spirit putting before you? Then read the entire book in one sitting to grasp its argument." },
  { step: 2, title: "Exegesis — What Does the Text Say?", color: PURPLE, content: "Exegesis means 'to lead out' — drawing the meaning out of the text rather than reading your meaning into it (eisegesis). Steps: (1) Read the passage in multiple translations; (2) Identify the genre (narrative, epistle, wisdom, prophecy, apocalyptic — each has its own interpretive rules); (3) Examine the original language using tools (Logos, Accordance, or free tools at biblehub.com); (4) Identify what the text meant to its original audience; (5) Determine the text's main point. Everything in the sermon must flow from the text's main point." },
  { step: 3, title: "Context — What Does the Book Say?", color: "#3B82F6", content: "The text never means what it says in isolation from its context. Context layers: (1) Immediate context (the verses before and after); (2) Book context (where does this passage fit in the book's argument?); (3) Biblical-theological context (where does this passage fit in the Bible's redemptive storyline from creation to new creation?); (4) Systematic-theological context (how does this text relate to the doctrines of Scripture?). Bryan Chapell's 'Christ-Centered Preaching' introduces the Fallen Condition Focus (FCF): every text addresses a broken human condition that Christ resolves." },
  { step: 4, title: "Determine the Big Idea", color: "#EF4444", content: "Haddon Robinson's 'Biblical Preaching' introduced the concept of the Big Idea — every text has one main idea, and every sermon should have one main idea. The Big Idea has a subject ('what is the text about?') and a complement ('what is it saying about what it's about?'). Example: Subject: 'The response of the disciples to Jesus's calming of the storm.' Complement: 'Reveals that who Jesus is is more terrifying than what they were afraid of.' The entire sermon is a development of this single Big Idea." },
  { step: 5, title: "Structure — How to Organize the Sermon", color: "#F59E0B", content: "The sermon's structure should arise from the text's structure, not be imposed on it. A narrative text (Genesis, Gospels, Acts) should typically be preached narratively — following the story's movement. An epistolary argument (Romans, Galatians) can often be preached point-by-point following the text's logical flow. Three common structures: (1) Problem-Solution (the text reveals a problem and Christ resolves it); (2) Deductive (Big Idea stated up front, then supported); (3) Inductive (story builds toward the Big Idea). Avoid three-point alliterative outlines imposed on texts that don't have three parallel points." },
  { step: 6, title: "Application — What Should We Do?", color: "#10B981", content: "Application is not the final five minutes of a sermon — it should be woven throughout. The question for each point is: 'So what?' Tim Keller argues that the deepest application is gospel application: showing how the text not only commands something but provides the resources (in Christ) to obey it. Application should be specific enough to be actionable and broad enough to be relevant across the congregation. Weak application: 'Trust God more.' Strong application: 'When the medical report comes back, the specific resource the text gives us is...' " },
  { step: 7, title: "Introduction and Conclusion", color: "#EC4899", content: "The introduction must earn the right to be heard. It should: (1) Create a need the text will address; (2) Connect with where the congregation actually lives; (3) Move toward the text rather than away from it. Avoid starting with 'Webster's dictionary defines...' or 'Turn to your Bibles to...' (they're already there). The conclusion should bring the sermon to a clear landing — returning to the Big Idea, with a final image or challenge that lingers. The sermon's ending is not a summary but a crystallization." },
  { step: 8, title: "Delivery — Presence and Voice", color: PURPLE, content: "The best delivery is conversational and direct — not theatrical, not read from a manuscript (ideally), and not a performance. Eye contact builds trust. Vocal variety sustains attention. Silence at key moments carries weight. John Stott argued that preaching requires 'double listening': to the Word of God and to the world of the congregation — being sufficiently in both that the two can be connected. The preacher is a bridge between the ancient text and the contemporary congregation. The bridge must be firmly anchored on both sides." },
  { step: 9, title: "Prayer and the Preacher's Heart", color: "#06B6D4", content: "Exposition is a spiritual act before it is a technical one. The preacher who has not prayed over the text and over the congregation is, in Spurgeon's image, attempting to wield a sword that has never been to the forge. Robert Murray M'Cheyne's maxim — 'What my people need most is my personal holiness' — locates the sermon's power partly in the preacher's own walk with God. Pray the text into your own heart first; preach what has first preached to you. Beg the Spirit to do what no rhetoric can: open blind eyes and raise dead hearts (2 Cor 4:6). Skill without unction produces lectures; both together produce preaching." },
  { step: 10, title: "Revision, Length, and Editing", color: "#8B5CF6", content: "The discipline of cutting is where good sermons become clear ones. A sermon trying to say everything says nothing; ruthless editing toward the Big Idea is an act of love for the congregation. Read the manuscript or outline aloud and cut every sentence that does not serve the main point — including your favorite illustration if it distracts. Most sermons are improved by being shorter and sharper. As the saying goes, 'If you don't strike oil in twenty minutes, stop boring.' Aim for clarity, unity, and momentum; leave the people with one truth they cannot forget rather than ten they cannot remember." },
];

const SERMON_SERIES = [
  { book: "Romans", testament: "New", chapters: 16, weeks: "52+", color: PURPLE, difficulty: "Advanced", why: "The most systematically comprehensive presentation of the gospel in Scripture — justification by faith, union with Christ, election, sanctification, the role of Israel, and Christian ethics. Every major Protestant doctrine has its primary home in Romans. Ideal for a congregation that needs theological depth. Warning: preaching Romans well requires thorough preparation; preaching it poorly produces confusion.", example_series: "John Piper's 225-sermon series at desiringgod.org; Tim Keller's Romans series at gospelinlife.com; D. Martyn Lloyd-Jones's 14-volume commentary preached 1955-1968" },
  { book: "John", testament: "New", chapters: 21, weeks: "40–60", color: GREEN, difficulty: "Accessible", why: "The most explicitly theological Gospel — written 'so that you may believe that Jesus is the Messiah, the Son of God' (20:31). The 'I Am' sayings (Bread of Life, Light of the World, Good Shepherd, Resurrection and Life, True Vine) provide natural sermon structures. Excellent for mixed congregations of believers and seekers. The farewell discourse (John 13-17) alone could sustain a semester-long series.", example_series: "Tim Keller's John series (gospelinlife.com); R.C. Sproul's series (ligonier.org); Voddie Baucham's John series" },
  { book: "Psalms", testament: "Old", chapters: 150, weeks: "Varies — select or complete", color: "#3B82F6", difficulty: "Accessible", why: "The Bible's prayer book and the most emotionally honest literature in Scripture. Excellent for congregations in crisis, transition, or needing to learn to pray. Preach types rather than all 150: one lament psalm, one praise psalm, one messianic psalm, one penitential psalm, etc. Derek Kidner's IVP commentary is excellent; Tim Keller's 'The Songs of Jesus' and his sermon series provide accessible models.", example_series: "Derek Kidner's commentary; Alistair Begg's selected Psalms series; Tim Keller's Psalms series at gospelinlife.com" },
  { book: "Genesis 1-11", testament: "Old", chapters: 11, weeks: "12–20", color: "#EF4444", difficulty: "Advanced", why: "The foundation of everything — creation, the image of God, the Fall, Cain and Abel, the Flood, and Babel — Genesis 1-11 addresses the questions every person is asking: Who am I? What went wrong? What's the solution? Preaching these chapters requires engaging the science/faith conversation honestly, understanding Hebrew narrative conventions, and connecting each passage to the gospel's resolution.", example_series: "John Sailhamer's commentary; Alec Motyer's 'Look to the Rock'; Tim Keller's Creation Care sermon; Bruce Waltke's commentary" },
  { book: "Philippians", testament: "New", chapters: 4, weeks: "8–12", color: "#F59E0B", difficulty: "Accessible", why: "The joy epistle — written from prison. Paul's letter contains the hymn of Christ's humiliation and exaltation (2:6-11), the command to rejoice in all circumstances, the 'I have learned contentment' passage, and the famous 'think on these things' list. Short enough to be preached in a month; deep enough to sustain much longer. Ideal for a congregation in difficulty or needing encouragement.", example_series: "Tim Keller's Philippians series; John Piper's sermons at desiringgod.org; Mark Dever's series" },
  { book: "Mark", testament: "New", chapters: 16, weeks: "24–40", color: "#10B981", difficulty: "Accessible", why: "The shortest Gospel — fast-paced, action-driven, repeatedly using 'immediately' (euthus). Mark's Jesus is the Servant who came not to be served but to serve and give his life as a ransom. Excellent for preaching to younger or less biblically-formed congregations. Mark's structure (Galilee ministry → journey to Jerusalem → passion narrative) provides natural division points.", example_series: "Alistair Begg's Mark series; Adrian Rogers's Mark series; Francis Chan's Mark series at cornerstone.tv" },
  { book: "Sermon on the Mount (Matthew 5-7)", testament: "New", chapters: "5-7 (Matthew)", weeks: "12–20", color: "#EC4899", difficulty: "Accessible", why: "Jesus's own summary of the ethics of the Kingdom — the Beatitudes, the antitheses ('You have heard it said, but I say to you'), the Lord's Prayer, the Golden Rule, and the houses on the rock. The interpretive challenge is avoiding legalism (treating these as a new Torah) and cheap grace (treating them as impossible ideals). The key is showing how the Sermon describes a community formed by the gospel, not a program for earning the gospel.", example_series: "Dallas Willard's 'The Divine Conspiracy'; John Stott's 'The Message of the Sermon on the Mount'; Tim Keller's Sermon on the Mount series" },
  { book: "1 Corinthians", testament: "New", chapters: 16, weeks: "30–40", color: "#6366F1", difficulty: "Advanced", why: "Paul's most practical epistle — addressing a church torn by division, sexual immorality, lawsuits, food sacrificed to idols, misuse of spiritual gifts, and confusion about the resurrection. Every topic is addressed with the gospel: 'I resolved to know nothing while I was with you except Jesus Christ and him crucified' (2:2). Ideal for congregations in conflict or needing to understand how the gospel applies to every area of life.", example_series: "Gordon Fee's NICNT commentary; John MacArthur's 1 Corinthians series; Tim Keller's series on various sections" },
  { book: "Ephesians", testament: "New", chapters: 6, weeks: "12–18", color: "#14B8A6", difficulty: "Accessible", why: "A compact masterpiece: the first three chapters soar through what God has done in Christ (election, redemption, the uniting of Jew and Gentile into one new humanity, the cosmic scope of the gospel), and the final three apply it to church unity, marriage, family, work, and spiritual warfare. The hinge of 'therefore' at 4:1 models the indicative-imperative structure of the whole New Testament — grace first, then the life that flows from it. Ideal for grounding a congregation in gospel identity.", example_series: "John Stott's 'God's New Society'; Martyn Lloyd-Jones's multi-volume Ephesians sermons; Tim Keller's Ephesians series" },
  { book: "Exodus", testament: "Old", chapters: 40, weeks: "20–30", color: "#A855F7", difficulty: "Advanced", why: "The paradigmatic Old Testament redemption story — bondage, deliverance through blood and water, covenant at Sinai, and God coming to dwell with his people in the tabernacle. Exodus supplies the categories the New Testament uses for Christ's work: Passover lamb, redemption, exodus, the law, the dwelling of God. Preaching it well requires handling Old Testament narrative, law, and typology, and connecting each movement to the greater exodus Jesus accomplished (Luke 9:31).", example_series: "Alec Motyer's 'The Message of Exodus'; Philip Ryken's 'Exodus' (Preaching the Word); Tim Keller's Exodus / 'gospel in Exodus' series" },
  { book: "James", testament: "New", chapters: 5, weeks: "8–12", color: "#F97316", difficulty: "Accessible", why: "The 'Proverbs of the New Testament' — intensely practical wisdom on trials, the tongue, favoritism, faith and works, wealth, and prayer. James preaches well to congregations needing the integration of belief and behavior ('faith without works is dead'). The interpretive task is to read James through the gospel rather than against Paul: real faith inevitably bears fruit. Short, vivid, and convicting, with abundant connections to the Sermon on the Mount.", example_series: "Alistair Begg's James series; Sam Allberry's 'James for You'; Douglas Moo's Pillar commentary" },
];

const PREACHERS = [
  { name: "John Stott", years: "1921–2011", color: PURPLE, tradition: "Anglican / Evangelical", url: "langhampartnership.org", desc: "The most influential expository preacher of the twentieth century. Rector of All Souls Church, Langham Place, London for 26 years. His 'Between Two Worlds' (1982) remains the most important theology of preaching written in the evangelical tradition. Stott described preaching as 'bridge-building between the ancient text and the modern world.' His Expositor's Commentary series on multiple books is still in print and widely used. His personal discipline: 4 hours per sermon, no notes in the pulpit.", key_teaching: "Double listening — to the Word and the world" },
  { name: "Haddon Robinson", years: "1931–2017", color: GREEN, tradition: "Evangelical / Non-denominational", url: "gordonconwell.edu", desc: "Professor at Dallas Seminary and Gordon-Conwell Theological Seminary whose textbook 'Biblical Preaching' (1980) has trained more preachers than any other homiletics text. Robinson introduced the concept of the 'Big Idea' — every text and every sermon has one central concept that the whole message develops. His preaching laboratory at Gordon-Conwell influenced a generation of evangelical preachers across denominations.", key_teaching: "The Big Idea — one main point, fully developed" },
  { name: "Tim Keller", years: "1950–2023", color: "#3B82F6", tradition: "Presbyterian (PCA)", url: "gospelinlife.com", desc: "Founding pastor of Redeemer Presbyterian Church, New York City (1989-2017), where his expository preaching in the intellectual and artistic center of American culture produced a model for urban gospel ministry studied worldwide. Keller's distinctive: every text addresses both moralism (try harder) and relativism (do whatever feels right) and shows that the gospel is a third way. His free sermon library at gospelinlife.com contains over 1,500 sermons, mostly expository series.", key_teaching: "Gospel-centered application — every text shows us Christ, not just principles to follow" },
  { name: "D. Martyn Lloyd-Jones", years: "1899–1981", color: "#EF4444", tradition: "Welsh / Westminster Chapel, London", url: "mljtrust.org", desc: "Westminster Chapel's minister from 1939-1968 whose sermons on Romans (1955-1968) are the most sustained expository preaching project in recorded history. A physician before he became a pastor, Lloyd-Jones brought diagnostic precision to biblical exposition. His 'Preaching and Preachers' (1971) is an uncompromising case for expository preaching as the primary task of the church. The MLJ Trust has over 1,600 of his sermons available free online.", key_teaching: "Logic on fire — the mind and the Spirit, not one at the expense of the other" },
  { name: "Charles H. Spurgeon", years: "1834–1892", color: "#F59E0B", tradition: "Baptist / Metropolitan Tabernacle, London", url: "spurgeon.org", desc: "The 'Prince of Preachers' who preached to 10,000 people weekly at the Metropolitan Tabernacle without amplification. Converted at 15, pastor of a major church at 19. Spurgeon's 63-volume Treasury of David (commentary on the Psalms) and his 40 volumes of collected sermons are available free online. He preached Christ from every text — not through artificial allegory but through the biblical-theological recognition that all Scripture points to Christ.", key_teaching: "Make your way to Christ from every text — there is always a road" },
  { name: "Alistair Begg", years: "1952–present", color: "#10B981", tradition: "Scottish / Parkside Church, Ohio", url: "truthforlife.org", desc: "Senior pastor of Parkside Church, Chagrin Falls, Ohio, and speaker on Truth for Life radio ministry (heard on 1,600+ stations). Born in Scotland and trained under Eric Alexander, Begg is known for direct, clear, expository preaching without ornamentation. His free sermon archive at truthforlife.org spans 30+ years of expository series through books of the Bible. The most accessible model for straightforward expository preaching in the contemporary American church.", key_teaching: "Say what it says — straightforward, clear, without embellishment" },
  { name: "Bryan Chapell", years: "1953–present", color: "#EC4899", tradition: "Presbyterian (PCA) / Stated Clerk, PCA", url: "pcanet.org", desc: "Author of 'Christ-Centered Preaching' (1994) — the standard text in many Reformed seminaries. Chapell introduced the Fallen Condition Focus (FCF): identifying the specific human brokenness that each text addresses, and showing how Christ resolves it. Former president of Covenant Theological Seminary. His framework helps preachers avoid moralism (preaching the text's commands without showing how Christ enables obedience).", key_teaching: "Fallen Condition Focus — every text addresses human brokenness and points to Christ's remedy" },
  { name: "Voddie Baucham", years: "1969–present", color: "#6366F1", tradition: "Baptist / Dean of Theology, African Christian University", url: "voddiebaucham.org", desc: "Known for his powerful, doctrinally precise expository preaching and his cultural commentary. Baucham trained under the influence of John MacArthur and the Masters Seminary tradition. His series on Genesis, Ephesians, and the Gospel of Luke are widely listened to. He is currently Dean of Theology at African Christian University in Zambia, training African pastors in expository preaching.", key_teaching: "Let the text breathe — preach what it says, not what you wish it said" },
  { name: "John MacArthur", years: "1939–present", color: "#14B8A6", tradition: "Baptist / Grace Community Church, California", url: "gty.org", desc: "Pastor of Grace Community Church since 1969, MacArthur is perhaps the most thoroughgoing verse-by-verse expositor of his generation — he famously preached consecutively through the entire New Testament over more than four decades. His Grace to You radio ministry and the MacArthur Study Bible have shaped expository preaching worldwide, especially through The Master's Seminary, which trains pastors in his verse-by-verse method.", key_teaching: "Verse by verse, book by book — preach the whole counsel of God without skipping" },
  { name: "John Piper", years: "1946–present", color: "#A855F7", tradition: "Baptist / Bethlehem Baptist, Minneapolis", url: "desiringgod.org", desc: "Pastor of Bethlehem Baptist Church for 33 years and founder of Desiring God, Piper fused rigorous textual exposition with passionate God-centeredness. His conviction that 'God is most glorified in us when we are most satisfied in him' (Christian Hedonism) shaped a generation. 'The Supremacy of God in Preaching' argues that preaching must exalt God's glory above all. His sermons and articles are freely available at desiringgod.org.", key_teaching: "Preaching is expository exultation — heralding the text while treasuring the God it reveals" },
  { name: "Timothy Ward / Sinclair Ferguson (the Reformed expositors)", years: "20th–21st c.", color: "#F97316", tradition: "Reformed / Presbyterian", url: "ligonier.org", desc: "Sinclair Ferguson exemplifies warm, Christ-centered, doctrinally rich exposition in the Scottish Reformed tradition, and his teaching on preaching Christ from all of Scripture is widely treasured. The broader Reformed stream (Ligonier, R.C. Sproul, Derek Thomas) models exposition that is theologically deep, pastorally tender, and relentlessly focused on the glory of God in the gospel.", key_teaching: "Preach Christ from all the Scriptures, with warmth and doctrinal depth" },
];

const PREACHING_VIDEOS = [
  { videoId: "4Eg_di-O8nM", title: "What Is Expository Preaching?", channel: "9Marks", description: "Mark Dever explains expository preaching — preaching that exposes the meaning of the text and makes it the point of the sermon." },
  { videoId: "gV9JugO_5Mk", title: "Preaching the Word of God", channel: "Ligonier Ministries", description: "R.C. Sproul on the irreplaceable authority and power of Scripture-driven preaching — why the text must govern the sermon." },
  { videoId: "kfcVPh2VDhQ", title: "The Primacy of Preaching", channel: "Desiring God", description: "John Piper on why preaching is central to God's plan for building the church — and what great preaching looks like." },
  { videoId: "gV9JugO_5Mk", title: "How to Preach Expositionally", channel: "The Gospel Coalition", description: "Practical guidance on how to prepare and deliver an expository sermon that is faithful to the text and clear to the congregation." },
];

export default function ExpositoryPreachingPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_expository-preaching_tab", "what");

  const [expEntries, setExpEntries] = useState<{ id: string; date: string; passage: string; observation: string; application: string }[]>(() => {
    try { const s = localStorage.getItem("vine_exp_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [expForm, setExpForm] = useState({ passage: "", observation: "", application: "" });
  const [expSaved, setExpSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_exp_entries", JSON.stringify(expEntries)); }, [expEntries]);
  function saveExpEntry() {
    if (!expForm.passage.trim()) return;
    setExpEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...expForm }, ...prev]);
    setExpForm({ passage: "", observation: "", application: "" });
    setExpSaved(true); setTimeout(() => setExpSaved(false), 2000);
  }
  function deleteExpEntry(id: string) { setExpEntries(prev => prev.filter(e => e.id !== id)); }
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState(SERMON_SERIES[0].book);
  const sel = SERMON_SERIES.find(s => s.book === selected) || SERMON_SERIES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Expository Preaching Guide</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            The most important thing that happens in a local church every Sunday — what expository preaching is, how to do it, which books of Scripture to preach, and who does it best.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>2 Timothy 4:2 </span>
          <span style={{ color: TEXT, fontSize: 13 }}>"Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching."</span>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["what", "process", "example", "series", "preachers", "journal", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "what" ? "What It Is" : t === "process" ? "The Process" : t === "example" ? "Worked Example" : t === "series" ? "Book Series" : t === "preachers" ? "Model Preachers" : t === "journal" ? "📓 My Journal" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 12 }}>What is Expository Preaching?</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>Expository preaching is preaching in which the text of Scripture — not the preacher's topic — sets the agenda. The passage provides the structure, the content, and the application of the sermon. The preacher's task is to understand what the text meant to its original audience in its original context, and then to communicate that meaning to a contemporary congregation with clarity, conviction, and gospel application.</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>John Stott defined it: "To expound Scripture is to open up the inspired text with such faithfulness and sensitivity that God's voice is heard and his people obey." The congregation should leave not thinking "what a great preacher" but "what a great God — and what a relevant Scripture."</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, marginBottom: 8 }}>EXPOSITORY PREACHING IS</div>
                  {["Text-driven — the text sets the agenda", "Book-by-book (lectio continua) through Scripture", "Explaining what the text meant in context", "Applying the text's meaning to today", "Centered on Christ as the fulfillment of all Scripture", "Preaching for transformation, not information"].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <div style={{ color: GREEN, fontSize: 14, flexShrink: 0 }}>✓</div>
                      <span style={{ color: TEXT, fontSize: 12 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, marginBottom: 8 }}>EXPOSITORY PREACHING IS NOT</div>
                  {["Topical preaching (topic drives, texts are collected)", "A verse-by-verse commentary without application", "A Bible study dressed up as a sermon", "Preaching without preparation or structure", "Simply reading and repeating the text", "A performance or theological lecture"].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <div style={{ color: PURPLE, fontSize: 14, flexShrink: 0 }}>✗</div>
                      <span style={{ color: TEXT, fontSize: 12 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Essential Books on Preaching</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {[
                  { t: "Biblical Preaching", a: "Haddon Robinson", desc: "The most widely used homiletics textbook — introduces the Big Idea method" },
                  { t: "Between Two Worlds", a: "John Stott", desc: "The theology and practice of preaching from the most influential expositor of the 20th century" },
                  { t: "Christ-Centered Preaching", a: "Bryan Chapell", desc: "Introduces the Fallen Condition Focus framework for gospel-centered sermons" },
                  { t: "Preaching and Preachers", a: "D. Martyn Lloyd-Jones", desc: "An uncompromising defense of expository preaching as the church's primary task" },
                  { t: "The Supremacy of God in Preaching", a: "John Piper", desc: "The case that preaching must exalt God above all else, not merely apply principles" },
                  { t: "He is Not Silent", a: "Albert Mohler", desc: "The president of Southern Seminary's case for expository preaching as non-negotiable" },
                ].map((b, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, marginBottom: 2 }}>{b.t}</div>
                    <div style={{ color: MUTED, fontSize: 10, marginBottom: 6 }}>{b.a}</div>
                    <div style={{ color: TEXT, fontSize: 11 }}>{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "process" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PROCESS_STEPS.map((p, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: p.color, color: BG, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, flexShrink: 0 }}>{p.step}</div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "example" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>From Text to Sermon: A Worked Example</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>Theory becomes clear when you watch it run on a real passage. Here is the full process applied to Mark 4:35-41 — Jesus calming the storm — taking a single text from first reading to a preachable sermon shaped by the gospel.</p>
            </div>
            {WORKED_EXAMPLE.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${w.color}25`, borderRadius: 12, padding: 22, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 5, borderRadius: 3, background: w.color, alignSelf: "stretch", flexShrink: 0, minHeight: 40 }} />
                <div>
                  <div style={{ color: w.color, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{w.label}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{w.body}</p>
                </div>
              </div>
            ))}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 17, marginBottom: 6 }}>Common Pitfalls to Avoid</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: "0 0 14px" }}>The most common ways expository sermons go wrong — and how to correct each one.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {PITFALLS.map((p, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <div style={{ color: p.color, fontSize: 14, flexShrink: 0 }}>✗</div>
                      <div style={{ color: p.color, fontWeight: 800, fontSize: 13 }}>{p.pitfall}</div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0, paddingLeft: 22 }}>{p.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "series" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SERMON_SERIES.map((s) => (
                <div role="button" tabIndex={0} key={s.book} onClick={() => setSelected(s.book)}
                  style={{ background: CARD, border: `1px solid ${selected === s.book ? s.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 15 }}>{s.book}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.testament} Testament · {s.weeks} weeks</div>
                    </div>
                    <div style={{ background: `${s.color}20`, color: s.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{s.difficulty}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 18, marginBottom: 4 }}>{sel.book}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.testament} Testament · {sel.chapters} chapters · {sel.weeks} weeks · {sel.difficulty}</div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHY PREACH THIS BOOK</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{sel.why}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>EXAMPLE SERIES TO STUDY</div>
                <div style={{ color: TEXT, fontSize: 11, lineHeight: 1.6 }}>{sel.example_series}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "preachers" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {PREACHERS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: p.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{p.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{p.years} · {p.tradition} · {p.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}15`, borderRadius: 6, padding: "6px 10px" }}>
                  <div style={{ color: p.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>KEY TEACHING</div>
                  <div style={{ color: TEXT, fontSize: 12 }}>{p.key_teaching}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Preaching Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Track passages you are studying, key observations, and how you are applying them in your preaching or personal study. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>PASSAGE I AM WORKING ON *</label>
                <textarea value={expForm.passage} onChange={e => setExpForm(f => ({ ...f, passage: e.target.value }))}
                  placeholder="Which passage of Scripture are you currently studying or preparing to preach?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>KEY OBSERVATION FROM THE TEXT</label>
                <textarea value={expForm.observation} onChange={e => setExpForm(f => ({ ...f, observation: e.target.value }))}
                  placeholder="What is the main point the text is making? What surprised you in your observation?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>APPLICATION FOR YOUR CONGREGATION</label>
                <textarea value={expForm.application} onChange={e => setExpForm(f => ({ ...f, application: e.target.value }))}
                  placeholder="How will you apply this text to the specific people who will hear you preach?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveExpEntry}
                style={{ background: expSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {expSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {expEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({expEntries.length})</h3>
                {expEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteExpEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.passage && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>PASSAGE: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.passage}</span></div>}
                    {entry.observation && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>OBSERVATION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.observation}</span></div>}
                    {entry.application && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>APPLICATION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.application}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PREACHING_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
