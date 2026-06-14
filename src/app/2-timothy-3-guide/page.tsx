"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Perilous Last Days",
  "Profitable for Doctrine",
  "Equipping for Good Work",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of 2 Timothy 3",
    reference: "2 Timothy 3:1&ndash;17",
    paragraphs: [
      "Second Timothy 3 stands as one of the most searching and practically vital chapters in the entire New Testament. Written by the apostle Paul from a Roman prison, likely shortly before his execution under Nero, it is addressed to his beloved son in the faith, Timothy, who was serving as a pastor in Ephesus. The chapter divides naturally into two halves that belong together: a stark warning about the moral and spiritual conditions of the last days (vv. 1&ndash;9), and a magnificent declaration of the sufficiency, authority, and purpose of God-breathed Scripture (vv. 10&ndash;17). Both halves speak to the same pastoral crisis &mdash; when the world is filled with false teachers and moral collapse, only the God-breathed Word can equip the man of God to stand firm and do the work of ministry.",
      "The historical setting is crucial. Paul is writing to a young pastor who was perhaps tempted toward timidity in the face of fierce opposition. Ephesus was a city of intense spiritual darkness, pagan worship, and philosophical confusion. False teachers had already made inroads into the congregation. Paul urges Timothy not to retreat from faithful ministry but to continue in what he has learned, remembering both the source of his instruction (the holy Scriptures known since childhood) and the character of the teachers who passed it on to him. The chapter is a final charge from a dying apostle, and it burns with pastoral urgency.",
      "The theological heart of 2 Timothy 3 is the extraordinary declaration of verse 16: &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.&rdquo; The Greek word translated &ldquo;breathed out by God&rdquo; is <em>theopneustos</em> &mdash; a word found nowhere else in Greek literature before Paul used it here, apparently coined to capture the unique manner of Scripture&rsquo;s origin. God did not merely inspire human writers in the way a great piece of music might inspire a listener; he breathed out his Word through them, so that what they wrote carries the full weight of divine authority.",
      "The chapter closes by tying together the two great themes: because the last days are characterized by spiritual deception, and because Scripture is God-breathed and wholly sufficient, the man of God who is thoroughly grounded in it will be &ldquo;complete, equipped for every good work&rdquo; (v. 17). The Bible is not merely one tool among many for pastoral ministry &mdash; it is the indispensable foundation without which no lasting work for God can be built. This message was vital for Timothy in the first century, and it remains the anchor of faithful Christian ministry in every generation since.",
      "Second Timothy 3 has been pivotal in the history of Christian theology, serving as one of the primary texts for the doctrines of biblical inspiration and inerrancy. The Reformers appealed to this passage when insisting that Scripture alone &mdash; <em>sola Scriptura</em> &mdash; must be the supreme authority over church tradition and human reason. The chapter does not merely tell us what the Bible does; it tells us what the Bible is: the very breath of God, spoken into human history through chosen vessels, and carrying the stamp of his eternal authority into every age of the church.",
    ],
  },
  {
    id: "Perilous Last Days",
    heading: "Perilous Times in the Last Days",
    reference: "2 Timothy 3:1&ndash;9",
    paragraphs: [
      "Paul opens the chapter with a prophetic warning of striking gravity: &ldquo;But understand this, that in the last days there will come times of difficulty&rdquo; (v. 1). The phrase &ldquo;last days&rdquo; in the New Testament refers to the entire period inaugurated by the first coming of Christ &mdash; the era in which the church now lives and will live until the Lord returns. Paul is not predicting conditions limited to the final years before the end; he is describing the spiritual climate that Timothy is already beginning to experience, and that will persist and intensify throughout the church age.",
      "The catalogue of vices that follows in verses 2&ndash;5 is one of the most comprehensive lists of human moral failure in all of Scripture. Paul names nineteen distinct characteristics of people in these difficult times, beginning with love of self and love of money, and moving through boastful, arrogant, abusive, disobedient to parents, ungrateful, unholy, heartless, unappeasable, slanderous, without self-control, brutal, not loving good, treacherous, reckless, swollen with conceit, and lovers of pleasure rather than lovers of God. What is most striking is not the depth of each individual sin but the pattern they form: a systematic inversion of the great commandments, loving self and pleasure where God commands love for God and neighbor.",
      "The final description in the list is perhaps the most devastating: &ldquo;having the appearance of godliness, but denying its power&rdquo; (v. 5). This is not a description of open pagans outside the church but of those within Christian communities who maintain religious forms while rejecting the transforming reality that ought to accompany them. They attend worship, use Christian vocabulary, perhaps engage in outward acts of piety &mdash; but they have denied the very power of God to change the human heart. Paul&rsquo;s instruction to Timothy is unambiguous: &ldquo;Avoid such people.&rdquo; Faithful pastors must discern and distance themselves from those who use religion as a cover for moral self-indulgence.",
      "Verses 6&ndash;9 describe the particular tactic of these dangerous figures: they &ldquo;creep into households and capture weak women, burdened with sins and led astray by various passions, always learning and never able to arrive at a knowledge of the truth&rdquo; (vv. 6&ndash;7). This is not a simple misogyny but a sober pastoral observation: false teachers frequently target the spiritually vulnerable, those whose sense of guilt and whose unchecked desires make them susceptible to teachers who offer spiritual experience without moral transformation. The language &ldquo;always learning and never able to arrive at a knowledge of the truth&rdquo; describes a perpetual state of religious seeking that never issues in the firm, life-changing grasp of the gospel.",
      "Paul compares these false teachers to Jannes and Jambres, the names later Jewish tradition assigned to the Egyptian magicians who opposed Moses before Pharaoh (Exodus 7&ndash;8). The comparison is precise: just as those magicians could mimic the signs of God&rsquo;s servant for a time but were ultimately exposed and overcome, so the false teachers of the last days &ldquo;oppose the truth&rdquo; with a counterfeit that will eventually be revealed for what it is. Paul offers this as a word of encouragement: &ldquo;they will not get very far, for their folly will be plain to all&rdquo; (v. 9). The darkness of the last days is real, but it does not have the final word. Truth, grounded in Scripture, will ultimately prevail.",
      "For the contemporary church, this passage is both a warning and a comfort. It is a warning because the conditions Paul describes are not exceptional aberrations but the normal spiritual environment in which the church must always minister. The world produces people characterized by self-love, the love of pleasure, and a form of godliness without power &mdash; and they do not stay outside the church. They infiltrate its fellowship, target its vulnerable members, and subvert its gospel. But it is also a comfort, because Paul does not call Timothy to despair. He calls him to understanding, discernment, and avoidance, trusting that God&rsquo;s truth will ultimately overcome every counterfeit.",
    ],
  },
  {
    id: "Profitable for Doctrine",
    heading: "All Scripture Is God-Breathed and Profitable",
    reference: "2 Timothy 3:10&ndash;16",
    paragraphs: [
      "Having described the spiritual danger of the last days, Paul turns in verse 10 to a powerful contrast. Instead of the false teachers who corrupt truth, Timothy has had Paul himself as his model: &ldquo;You, however, have followed my teaching, my conduct, my aim in life, my faith, my patience, my love, my steadfastness&rdquo; (v. 10). This is not boasting but pastoral modeling &mdash; Paul pointing to his own life as an embodiment of what genuine faith in the Scriptures produces. Timothy has seen not only Paul&rsquo;s words but his life, his sufferings at Antioch, Iconium, and Lystra, and the Lord&rsquo;s faithful deliverance through them all.",
      "Verse 12 contains one of the New Testament&rsquo;s most sobering promises: &ldquo;Indeed, all who desire to live a godly life in Christ Jesus will be persecuted.&rdquo; Paul does not offer Timothy a gospel of comfort and ease; he promises that faithfulness to Christ in a world that loves darkness will inevitably generate opposition. This is not pessimism but realism, and it is delivered as a stabilizing truth. If Timothy is being persecuted, he is walking in the footsteps of Paul, and of every faithful witness before him. Suffering for the gospel is not a sign that something has gone wrong; it is a sign that something is going profoundly right.",
      "The contrast Paul draws in verses 13&ndash;14 is stark: &ldquo;Evil people and impostors will go on from bad to worse, deceiving and being deceived. But as for you, continue in what you have learned and have firmly believed.&rdquo; The phrase &ldquo;but as for you&rdquo; is one of Paul&rsquo;s characteristic rhetorical moves &mdash; setting the faithful minister in sharp contrast to the false. While the world spirals downward through deception, Timothy&rsquo;s calling is to stand firm in what he has received. He has known &ldquo;the sacred writings&rdquo; from childhood (v. 15), instructed by his mother Eunice and his grandmother Lois. That foundation is not something to be outgrown; it is the bedrock on which everything else must stand.",
      "Then comes the great declaration that is the theological summit of the chapter: &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness&rdquo; (v. 16). The word &ldquo;all&rdquo; is comprehensive &mdash; no portion of Scripture is excluded from the claim. The word &ldquo;breathed out&rdquo; (<em>theopneustos</em>) locates the origin of Scripture in God himself: it is not human wisdom elevated to divine authority but divine speech communicated through human instruments. The Scriptures are the very breath of God, as real and authoritative as if he spoke them directly from heaven.",
      "The four uses of Scripture that Paul lists &mdash; teaching, reproof, correction, and training in righteousness &mdash; together describe a complete ministry to the whole person. &ldquo;Teaching&rdquo; (<em>didaskalia</em>) refers to the positive communication of truth: what God is, what human beings are, what salvation is, how to live. &ldquo;Reproof&rdquo; (<em>elegmos</em>) addresses what is wrong, bringing conviction of sin and error. &ldquo;Correction&rdquo; (<em>epanorthosis</em>) goes beyond identifying the problem to setting things right, restoring what has been distorted or broken. And &ldquo;training in righteousness&rdquo; (<em>paideia en dikaiosyne</em>) describes the ongoing disciplining and forming of character that produces a life that actually conforms to God&rsquo;s standards.",
      "What Paul describes here is not merely information transfer but a total renovation of the human soul. The God-breathed Word comes to us in our ignorance and teaches us; it comes to us in our sin and reproves us; it comes to us in our disorder and corrects us; it comes to us in our undisciplined lives and trains us. No other source of authority &mdash; no human tradition, no personal experience, no ecclesiastical council, no contemporary prophet &mdash; can do what Scripture does, because no other source bears the mark of God&rsquo;s own breath. This is why the Reformers insisted on <em>sola Scriptura</em>: not because the church or tradition are worthless, but because only Scripture carries the weight of divine authority sufficient to bind the conscience and transform the heart.",
    ],
  },
  {
    id: "Equipping for Good Work",
    heading: "Complete and Equipped for Every Good Work",
    reference: "2 Timothy 3:17",
    paragraphs: [
      "The chapter reaches its climax in the seventeenth verse, which functions as both the conclusion of the argument about Scripture and the foundation for the charge to ministry that follows in chapter 4. Paul writes: &ldquo;that the man of God may be complete, equipped for every good work.&rdquo; The &ldquo;man of God&rdquo; is a term drawn from the Old Testament for the prophets and messengers who served as God&rsquo;s representatives &mdash; Moses, Elijah, Elisha. Paul applies it here to Timothy and, by extension, to all those who carry the responsibility of faithful ministry. The one who handles the God-breathed Word becomes, through that Word, complete and equipped.",
      "The word translated &ldquo;complete&rdquo; (<em>artios</em>) carries the sense of being fitted out, fully functional, capable of fulfilling one&rsquo;s purpose. It does not mean perfect in the sense of sinless but rather competent and adequate to the task &mdash; like a tool that has been properly made and sharpened for the work it is designed to do. The word translated &ldquo;equipped&rdquo; (<em>exertismenos</em>) is an intensive form of the same root and intensifies the picture: not merely functional but thoroughly fitted out, with nothing lacking. The combination suggests that Scripture provides everything that is necessary for the ministry to which God has called his servants.",
      "The phrase &ldquo;every good work&rdquo; is deliberately comprehensive. Paul does not say &ldquo;some good works&rdquo; or &ldquo;most good works&rdquo; or &ldquo;the good works that Scripture explicitly discusses.&rdquo; He says &ldquo;every good work.&rdquo; This is a sweeping claim: the God-breathed Word is sufficient to equip the minister for the full range of what faithful service to God requires &mdash; preaching, counseling, suffering, evangelizing, discipling, leading, defending the truth, comforting the grieving, rebuking the wayward, training the next generation. Whatever the ministry demands, Scripture supplies the grounding and direction.",
      "This verse has profound implications for how Christians think about the relationship between Scripture and other authorities. It does not mean that pastors need no education, or that systematic theology, church history, biblical languages, and pastoral training are unnecessary. Rather, it means that all of these subsidiary tools derive whatever value they have from Scripture itself and must remain subordinate to it. The man of God is equipped for every good work by the God-breathed Word &mdash; and every other resource he employs in ministry serves that Word rather than supplementing it with independent authority.",
      "For Timothy in Ephesus, surrounded by false teachers who were drawing people away from the apostolic gospel through impressive-sounding philosophies and counterfeit spirituality, verse 17 was a word of immense encouragement. He did not need something new, something more sophisticated, something better adapted to the cultural moment. He had in the God-breathed Scriptures everything he needed to do the work God had given him. The adequacy of his ministry did not depend on his rhetorical ability, his social standing, or his power to compete with the flashier false teachers &mdash; it depended on his faithfulness to the Word that God himself had breathed out.",
      "The practical implication for the contemporary church is equally clear. In an age that endlessly seeks new techniques, new experiences, new voices, and new authorities to supplement or correct the Scriptures, 2 Timothy 3:17 stands as a quiet but unyielding rebuke. The church already possesses, in the God-breathed pages of the Old and New Testaments, the complete equipment needed for every good work. The task is not to find something better but to go deeper into what has already been given &mdash; to teach it, reprove with it, correct by it, and train in righteousness through it, trusting that the God who breathed it out will use it, generation after generation, to complete and equip his servants for his glory.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living by the God-Breathed Word",
    reference: "2 Timothy 3:1&ndash;17",
    paragraphs: [
      "The personal application of 2 Timothy 3 begins with a clear-eyed assessment of the spiritual environment in which every Christian lives. Paul does not promise that the last days will gradually improve as the church grows in influence; he describes them as times of difficulty characterized by moral collapse and spiritual deception. The Christian who expects that faithful witness will be met with universal approval, or that the church&rsquo;s surrounding culture will become increasingly hospitable to the gospel, is living in an illusion that this passage dispels. The appropriate posture is not anxiety but realism &mdash; a clear-eyed recognition of what the world is and what it produces, coupled with an unshakeable confidence in the Word of God.",
      "The first specific application is the call to discernment. Paul tells Timothy to &ldquo;avoid&rdquo; those who have the appearance of godliness but deny its power (v. 5). This is not a call to sectarian withdrawal from the world but to pastoral discernment within the church. Not every person who uses Christian language and attends Christian gatherings is a genuine disciple; not every teacher who appeals to the Bible is faithfully handling the God-breathed Word. The congregation that is not taught to discern between truth and its counterfeits will be vulnerable to those who &ldquo;creep into households and capture weak women&rdquo; and lead them away from the knowledge of the truth.",
      "The second application is the centrality of Scripture in personal devotion and public ministry. If Scripture is God-breathed and profitable for teaching, reproof, correction, and training in righteousness, then the Christian who neglects it is cutting himself off from the primary means by which God does his renovating work in the human soul. Personal Bible reading, meditation, memorization, and study are not optional disciplines for the especially devoted Christian; they are the ordinary channels through which the living God breathes life into those who belong to him. The church that fills its gathered worship with entertainment, therapy, or social commentary while marginalizing the God-breathed Word has traded its birthright for a mess of pottage.",
      "The third application is an embrace of suffering as a mark of faithfulness. Paul&rsquo;s promise that &ldquo;all who desire to live a godly life in Christ Jesus will be persecuted&rdquo; (v. 12) is not a threat but a stabilizing word. When Timothy &mdash; or the contemporary Christian &mdash; faces social ridicule, professional disadvantage, family tension, or outright hostility because of his faith, he can understand that experience within a coherent framework: this is the normal lot of those who follow the persecuted Christ in a world that hates him. The response to persecution is not bitterness or retrenchment but continued faithfulness, modeled on Paul&rsquo;s own endurance through Antioch, Iconium, and Lystra.",
      "Fourth, the passage calls Christians to treasure the Scriptures they have received. Timothy had known the sacred writings from childhood, a gift from his mother and grandmother that Paul holds up as a profound blessing. The Christian family that passes on a love for Scripture from one generation to the next is doing one of the most significant things a family can do. Children who are saturated in the God-breathed Word from their earliest years possess a foundation that no false teacher, no cultural pressure, and no personal crisis can easily dislodge. The investment in teaching children the Scriptures is not a preliminary step before real ministry begins; it is itself a form of ministry that bears fruit across decades and generations.",
      "Finally, 2 Timothy 3 calls Christians to confidence in the sufficiency of Scripture for their own sanctification and for their witness to others. In a world of endless competing voices, the Christian can stand with calm assurance on the ground of the God-breathed Word. It is not necessary to find the latest theological trend, the newest counseling technique, or the most culturally sophisticated presentation of the gospel before one can engage in genuine ministry. The Word that God has breathed out is already complete and already sufficient. The calling of every Christian &mdash; and supremely of every pastor and teacher &mdash; is to go deep into that Word, to live under its authority, and to let its teaching, reproof, correction, and training in righteousness do the work that only God&rsquo;s breath can accomplish.",
    ],
  },
];

const videoItems = [
  { videoId: "qE8FOEx7N9s", title: "2 Timothy 3 - All Scripture Is God-Breathed (Sermon)" },
  { videoId: "WLdj4c-WNUw", title: "What Does God-Breathed Mean? - Theopneustos Explained" },
  { videoId: "9HPNi8LQFEY", title: "The Sufficiency of Scripture - 2 Timothy 3:16-17" },
  { videoId: "5MIgk6XPh8I", title: "Perilous Times in the Last Days - 2 Timothy 3:1-9" },
];

export default function Timothy3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Timothy 3 &mdash; Scripture Is God-Breathed
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s urgent final charge to Timothy &mdash; a warning about the perilous moral climate of the last days, and a magnificent declaration that all Scripture is breathed out by God and sufficient to equip every believer for every good work.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Continue in What You Have Learned</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Timothy 3 confronts us with the spiritual dangers of the age and points us to the only sufficient answer: the God-breathed Word of Scripture. As Paul charged Timothy, so this chapter charges every believer &mdash; to stand firm in the sacred writings, to trust in their divine authority, and to be equipped through them for every good work God has prepared.
          </p>
        </div>
      </main>
    </div>
  );
}
