"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

type Witness = {
  name: string;
  who: string;
  date: string;
  detail: string;
  accent: string;
};

export default function HistoricalJesusPage() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "sources", label: "The Non-Christian Witnesses" },
    { id: "gospels", label: "The Christian Sources as History" },
    { id: "case", label: "The Case & Objections" },
    { id: "application", label: "Application" },
  ];

  const para = (html: string, color = TEXT) => (
    <p
      style={{ color, lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.1rem" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const heading = (text: string, color = GOLD) => (
    <h2 style={{ color, fontSize: "1.6rem", marginTop: "2.2rem", marginBottom: "1rem", letterSpacing: "0.01em" }}>
      {text}
    </h2>
  );

  const card = (children: React.ReactNode, accent = BORDER) => (
    <div style={{
      background: CARD,
      border: `1px solid ${BORDER}`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: "10px",
      padding: "1.5rem 1.7rem",
      marginBottom: "1.4rem",
    }}>
      {children}
    </div>
  );

  const witnesses: Witness[] = [
    {
      name: "Josephus, Antiquities 18.3.3 (the Testimonium Flavianum)",
      who: "Jewish historian, wrote for a Roman audience",
      date: "c. A.D. 93",
      detail: "The most famous non-Christian reference to Jesus. As it survives, the passage contains obvious Christian additions (calling Jesus &lsquo;the Christ&rsquo; and affirming his resurrection) that a first-century Jew would not have written &mdash; so honesty requires flagging it. But the broad scholarly consensus is that a genuine core lies underneath: that Josephus reported Jesus as a wise teacher and doer of remarkable deeds who was accused by the Jewish leaders, crucified by Pilate, and still followed by &lsquo;the tribe of Christians&rsquo; in Josephus's own day. An Arabic version preserved by the 10th-century writer Agapius reads in just this restrained way, supporting the reconstruction.",
      accent: GOLD,
    },
    {
      name: "Josephus, Antiquities 20.9.1 (the death of James)",
      who: "Jewish historian",
      date: "c. A.D. 93",
      detail: "Less famous but even more secure. Describing the illegal execution of a man in A.D. 62, Josephus identifies him as &ldquo;the brother of Jesus who was called Christ, whose name was James.&rdquo; The reference is incidental &mdash; Josephus is narrating a high-priestly overreach, not writing about Jesus &mdash; which is exactly why scholars across the spectrum accept it as authentic. It independently attests both Jesus and his brother James as real people.",
      accent: TEAL,
    },
    {
      name: "Tacitus, Annals 15.44",
      who: "Roman senator and historian, no friend of Christianity",
      date: "c. A.D. 116",
      detail: "Recounting how Nero blamed Christians for the great fire of Rome (A.D. 64), Tacitus explains their name: &ldquo;Christus, from whom the name had its origin, suffered the extreme penalty during the reign of Tiberius at the hands of one of our procurators, Pontius Pilate.&rdquo; He calls the movement a &lsquo;mischievous superstition.&rsquo; This is a hostile Roman source confirming, in a single sentence, Jesus's existence, his execution under Pilate, the reign in which it happened, and the rapid spread of his followers to Rome itself.",
      accent: PURPLE,
    },
    {
      name: "Pliny the Younger, Letters 10.96",
      who: "Roman governor of Bithynia, writing to Emperor Trajan",
      date: "c. A.D. 112",
      detail: "Asking the emperor how to handle Christians, Pliny reports what he has learned under interrogation: they met before dawn and &ldquo;sang a hymn to Christ as to a god,&rdquo; and bound themselves by oath not to commit theft, adultery, or fraud. Within eighty years of the crucifixion, a Roman official documents Christians across a distant province worshiping Christ as divine and living by his ethic &mdash; and dying rather than curse him.",
      accent: ROSE,
    },
    {
      name: "Suetonius, Life of Claudius 25",
      who: "Roman biographer of the Caesars",
      date: "c. A.D. 121",
      detail: "Suetonius notes that Claudius &ldquo;expelled the Jews from Rome, since they were constantly making disturbances at the instigation of Chrestus&rdquo; &mdash; a common misspelling of Christus. Many scholars connect this to conflict in the Roman synagogues over the preaching of Christ, and the same expulsion is independently mentioned in Acts 18:2 (Aquila and Priscilla, expelled from Rome). It is debated, but it likely reflects the impact of the message about Jesus reaching Rome by the 40s.",
      accent: GREEN,
    },
    {
      name: "The Babylonian Talmud, Sanhedrin 43a",
      who: "Jewish rabbinic tradition, hostile to the Christian claim",
      date: "compiled later, preserving early tradition",
      detail: "The rabbis record that &ldquo;on the eve of Passover, Yeshu was hanged&rdquo; (hanging being a Hebrew idiom that includes crucifixion), charged with sorcery and leading Israel astray. Though written from an opposing standpoint, it independently confirms that Jesus was executed at Passover for practices his enemies could not deny &mdash; they attributed his miracles to sorcery rather than denying they occurred.",
      accent: GOLD,
    },
    {
      name: "Lucian of Samosata & Mara bar Serapion",
      who: "A Greek satirist and a Syrian Stoic &mdash; both outsiders",
      date: "c. A.D. 165 and after A.D. 73",
      detail: "Lucian mocks Christians for worshiping &ldquo;the man who was crucified in Palestine because he introduced this new cult,&rdquo; and marvels that they &lsquo;despise death&rsquo; and treat each other as family. Mara bar Serapion, writing to his son, lists the &ldquo;wise King&rdquo; of the Jews &mdash; executed by his own people, who were then scattered &mdash; alongside Socrates and Pythagoras as a sage unjustly killed whose teaching lived on. Neither is a Christian; both take Jesus's execution as simple historical fact.",
      accent: TEAL,
    },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, ${BG} 70%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "3.5rem 1.5rem 2.8rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ color: GOLD, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.82rem", marginBottom: "1rem" }}>
            Apologetics at The Vine
          </p>
          <h1 style={{ fontSize: "2.7rem", lineHeight: 1.15, marginBottom: "1rem", color: TEXT }}>
            Did Jesus Really Exist? The Historical Evidence
          </h1>
          <p style={{ fontSize: "1.3rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;That which we have heard, which we have seen with our eyes, which we looked upon and have touched with our hands&rdquo; &mdash; 1 John 1:1" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "Christianity is not a philosophy that floats free of history; it stands or falls on whether a particular man lived, died, and rose in a particular place and time. So it is fair to ask: outside the Bible, is there any evidence that Jesus of Nazareth was real? This study surveys the Roman and Jewish witnesses, weighs the Christian sources as history, explains the method historians actually use, and answers &mdash; honestly &mdash; the claim that Jesus never existed at all." }} />
        </div>
      </div>

      {/* tab bar */}
      <div style={{
        position: "sticky",
        top: "var(--header-height, 80px)",
        background: BG,
        borderBottom: `1px solid ${BORDER}`,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        padding: "0.8rem 1rem",
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? GOLD : "transparent",
              color: tab === t.id ? BG : MUTED,
              border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              fontFamily: "Georgia, serif",
              fontSize: "0.98rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {tab === "overview" && (
          <div>
            {heading("A Faith Anchored in History")}
            {para("Most of the world's religions could survive the discovery that their founder never lived; their teachings would remain as philosophy. Christianity is different. The apostle Paul staked the entire faith on a historical event: &ldquo;If Christ has not been raised, your faith is futile and you are still in your sins&rdquo; (1 Corinthians 15:17). The first Christians did not present themselves as spinners of myth but as witnesses of fact &mdash; &ldquo;we did not follow cleverly devised myths,&rdquo; wrote Peter, &ldquo;but we were eyewitnesses of his majesty&rdquo; (2 Peter 1:16). This makes the historical question not a threat to faith but a proper doorway into it.")}
            {para("The question comes in two forms, and they must be kept separate. The first is modest: <strong>did Jesus of Nazareth exist as a real human being</strong> &mdash; a Galilean Jew who taught, gathered followers, and was crucified under Pontius Pilate? The second is enormous: <strong>was he who he claimed to be</strong> &mdash; the Son of God, risen from the dead? History alone can settle the first question with great confidence. The second requires weighing the evidence and, finally, a response of faith. But the two are connected, because the same sources and the same methods that establish the man also carry us toward the claim.")}
            {heading("The Scholarly Consensus", TEAL)}
            {para("It surprises many people to learn that the existence of Jesus is not seriously disputed among historians &mdash; including secular, Jewish, and atheist scholars. The idea that Jesus never lived (called &lsquo;mythicism&rsquo;) is held by virtually no one with a relevant academic post. The agnostic New Testament scholar Bart Ehrman &mdash; no defender of Christianity &mdash; wrote an entire book, <em>Did Jesus Exist?</em>, precisely to refute the mythicists, concluding that Jesus &lsquo;certainly existed, as virtually every competent scholar of antiquity, Christian or non-Christian, agrees.&rsquo; The debate among historians is not <em>whether</em> Jesus lived, but <em>who he was</em> and <em>what his life meant</em>.")}
            {heading("Why Look Outside the Bible?", PURPLE)}
            {para("The Bible is itself a collection of first-century historical documents and is the primary evidence for Jesus &mdash; we examine it as history in a later tab. But because skeptics often dismiss it in advance as biased, it is worth asking a narrower question first: setting the New Testament aside entirely, what do we learn about Jesus from writers who were <em>not</em> Christians &mdash; Roman officials, Jewish historians, and hostile critics who had every reason to ignore or deny him? The answer, surveyed in the next tab, is more than most people expect: a surprising number of ancient non-Christian sources mention Jesus, and where they touch the basic facts, they agree with the Gospels.")}
          </div>
        )}

        {tab === "sources" && (
          <div>
            {heading("The Witnesses Outside the Church")}
            {para("For a Galilean carpenter who wrote no book, held no office, commanded no army, and was executed as a criminal in a remote province, Jesus is remarkably well attested by writers who had no interest in promoting him. Within about a century of his death, at least seven independent non-Christian sources &mdash; Roman, Jewish, Greek, and Syrian &mdash; refer to Jesus or the movement he founded. Not one of them tries to argue that he existed; they simply assume it, as a known fact, while pursuing other purposes. That casual assumption is itself powerful evidence.")}
            {para("A note on honesty: good apologetics never overstates its sources. Some of these references are brief; one (Josephus's Testimonium) has been altered by later Christian hands and must be handled with care; another (Suetonius) is debated. We flag each difficulty plainly. Even after every reasonable discount, the cumulative weight is substantial.", MUTED)}

            {witnesses.map((w, idx) => (
              <div key={idx} style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${w.accent}`,
                borderRadius: "10px",
                padding: "1.5rem 1.7rem",
                marginBottom: "1.4rem",
              }}>
                <h3 style={{ color: w.accent, fontSize: "1.22rem", marginBottom: "0.35rem" }} dangerouslySetInnerHTML={{ __html: w.name }} />
                <p style={{ color: TEXT, fontSize: "0.92rem", fontStyle: "italic", marginBottom: "0.2rem" }} dangerouslySetInnerHTML={{ __html: w.who }} />
                <p style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.7rem" }} dangerouslySetInnerHTML={{ __html: w.date }} />
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: w.detail }} />
              </div>
            ))}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.3rem", marginBottom: "0.8rem" }}>What the Outsiders Establish</h3>
                {para("Drawing only on these non-Christian sources, and granting every scholarly caution, a historian can already affirm a striking list of facts about Jesus: he lived in first-century Palestine; he was a teacher credited with remarkable deeds; he had a brother named James; he was executed by crucifixion under Pontius Pilate during the reign of Tiberius, at the time of Passover, at the instigation of the Jewish leadership; and within a generation his followers had multiplied, spread as far as Rome, worshiped him as divine, and were willing to die rather than renounce him. That is a great deal to learn about a man from writers who never set out to praise him.")}
              </div>, GREEN
            )}
          </div>
        )}

        {tab === "gospels" && (
          <div>
            {heading("The Christian Sources as History")}
            {para("Having seen what the outsiders confirm, we can now take up the primary evidence that skeptics too quickly set aside: the New Testament itself. The historian's task is not to assume these documents are inspired Scripture (that is a conclusion of faith) but to treat them as what they undeniably are &mdash; a cluster of first-century texts, written within living memory of the events, several of them by named authors claiming eyewitness access. By the ordinary standards applied to any ancient source, they are exceptionally early and exceptionally numerous.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Creed Older Than the Gospels</h3>
                {para("The single most important piece of historical evidence lies in one of Paul's letters. In 1 Corinthians 15:3-7, Paul hands on a formula he says he &lsquo;received&rsquo; and &lsquo;delivered&rsquo; &mdash; the technical language for passing on fixed oral tradition: &ldquo;that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day &hellip; and that he appeared to Cephas, then to the twelve &hellip; then to more than five hundred brothers at one time, most of whom are still alive.&rdquo; Scholars &mdash; including skeptical ones &mdash; widely date this creed to within about three to five years of the crucifixion, far too early for legend to have replaced fact. Paul even invites verification: most of the five hundred witnesses, he says, are still living. This is not myth accumulating over centuries; it is testimony circulating while the eyewitnesses could still be questioned.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Paul: A Hostile Witness Turned Apostle</h3>
                {para("Paul is a historian's gift, because his letters are undisputed, early (the 50s A.D.), and personal. He had been a violent persecutor of the church (Galatians 1:13) &mdash; a hostile witness with every motive to disprove the resurrection, not preach it. Yet he reports meeting the risen Christ, and, crucially, he tells us he met the other principals: three years after his conversion he spent fifteen days with Peter in Jerusalem and also saw James, the Lord's brother (Galatians 1:18-19). This is not hearsay from a distance; it is a man reporting his own interviews with the people who had walked with Jesus &mdash; and staking his life on what they told him.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Early, Numerous, and Restrained</h3>
                {para("The four Gospels were written within roughly thirty to sixty years of the crucifixion &mdash; within the lifetime of eyewitnesses, and dramatically closer to their subject than most ancient biographies (the earliest lives of Alexander the Great date some four centuries after him, yet historians use them). The Gospels name places, rulers, customs, and geography that archaeology has repeatedly confirmed. And they bear the marks of honest reporting rather than propaganda: they preserve embarrassing details &mdash; the disciples' cowardice and dullness, Peter's denial, women as the first witnesses of the resurrection (whose testimony carried little legal weight in that culture) &mdash; the kind of material an inventor would delete, not include.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Willing to Die for What They Saw</h3>
                {para("People will die for a lie they sincerely believe to be true &mdash; but they do not die for a claim they know to be false. The apostles were in a position to know whether they had actually seen the risen Jesus, and, according to strong early tradition, most of them were martyred rather than recant. This does not prove the resurrection by itself, but it decisively rules out the theory that the disciples knowingly invented it. Something happened that these men were prepared to be tortured and killed for maintaining &mdash; and they maintained it was Jesus, alive.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "case" && (
          <div>
            {heading("The Minimal Facts &mdash; and the Objections")}
            {para("A powerful way to argue the historical case, associated with scholars Gary Habermas and Michael Licona, is the &lsquo;minimal facts&rsquo; approach. It sets aside every disputed claim and builds only on data so well evidenced that they are granted by the large majority of critical scholars &mdash; including non-Christians. The point is to reason from common ground.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Facts Almost All Scholars Grant</h3>
                {para("Four claims command near-universal acceptance among historians of the period: (1) Jesus died by Roman crucifixion. (2) His disciples sincerely believed he rose and appeared to them, and said so soon after. (3) The persecutor Paul was suddenly converted by what he took to be an encounter with the risen Christ. (4) The skeptic James, Jesus's own brother, who had not believed during Jesus's ministry (John 7:5), became a leader of the church and died for it. A fifth &mdash; the empty tomb &mdash; is accepted by a strong majority. These are not devotional assertions; they are the consensus starting points. The question the honest inquirer must then face is: what explanation accounts for all of them at once?")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;Jesus is just a copy of pagan myths&rdquo;</h3>
                {para("The claim that Jesus was borrowed from dying-and-rising fertility gods (Osiris, Mithras, Dionysus) was popular a century ago and has been abandoned by serious scholarship. The alleged parallels are vague, often post-date Christianity, or dissolve on inspection (Mithras was not crucified and did not rise; the Osiris myth is nothing like a bodily resurrection in history). More decisively, the earliest Christians were monotheistic Jews for whom borrowing a pagan savior would have been unthinkable blasphemy &mdash; and they anchored their message not in a timeless mythic realm but in a dated, named, public execution &lsquo;under Pontius Pilate.&rsquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;There's no evidence outside the Bible&rdquo;</h3>
                {para("As the previous tab showed, this is simply mistaken &mdash; Josephus, Tacitus, Pliny, Suetonius, the Talmud, Lucian, and others all attest Jesus or his movement. But the objection also misunderstands ancient history. Almost no non-elite figure of the first century is mentioned by contemporary writers at all; the wonder is not that Jesus is mentioned rarely by outsiders, but that a crucified provincial is mentioned by outsiders <em>so much</em>. By the standards of ancient evidence, Jesus of Nazareth is exceptionally well documented.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;The stories grew by legend over time&rdquo;</h3>
                {para("Legend needs time and distance to overgrow the facts &mdash; and here it had neither. The creed of 1 Corinthians 15 dates to within a few years of the events; Paul's letters are within two decades; the Gospels within living memory, in the very region where the events occurred, where hostile eyewitnesses could have exposed fabrication. As one scholar put it, the interval is far too short for legend to have replaced a solid historical core. The New Testament claims were made early, in public, and under the noses of those who would most have wished to refute them.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Honest Bottom Line</h3>
                {para("History cannot, by its ordinary tools, compel anyone to confess that Jesus is Lord &mdash; the resurrection, if it happened, is an act of God that transcends what a historian can prove in a laboratory. But history can establish a great deal: that Jesus lived, taught, and was crucified; that his followers sincerely and immediately proclaimed him risen; and that no natural theory (hallucination, theft, legend, fraud) accounts well for all the agreed facts together. The evidence does not force faith, but it clears away the excuse that faith is a leap into the dark. It is, rather, a step in the direction the evidence already points.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("From History to the Living Christ")}
            {para("The historical evidence is a doorway, not a destination. To be persuaded that Jesus existed and was crucified, and that his followers proclaimed his resurrection, is to arrive at the threshold of the most important question a human being can face. Here are four ways this truth presses into the life of faith, each with a prayer prompt.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Believe With Your Mind as Well as Your Heart</h3>
                {para("Christian faith is not a flight from evidence but a response to it. God has acted in public history &mdash; in a real man, a real cross, a real empty tomb &mdash; and he invites you to love him &ldquo;with all your mind&rdquo; (Matthew 22:37). You need not choose between believing and thinking. <strong>Prayer prompt:</strong> &ldquo;Father, thank you that you entered history in your Son and left evidence a seeking heart can weigh. Give me a faith that is honest, examined, and whole &mdash; mind and heart together.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Answer Honest Doubts With Confidence and Gentleness</h3>
                {para("When a friend says &lsquo;Jesus probably never even existed,&rsquo; you can now respond calmly and factually &mdash; not to win a fight, but to remove a stone from the path (1 Peter 3:15). Many people have never heard that even secular historians take Jesus's existence for granted. A gentle, informed answer can reopen a closed door. <strong>Prayer prompt:</strong> &ldquo;Lord, give me knowledge to answer fairly and love to answer kindly, that the reasonableness of the truth might make room for the beauty of the gospel.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Let the Cross You Can Prove Lead to the Lord You Must Trust</h3>
                {para("Every ancient witness &mdash; friend and foe &mdash; agrees on one thing: this man was crucified. History hands you a cross; the gospel tells you whose it was and why. &ldquo;Christ died for our sins&rdquo; (1 Corinthians 15:3) is where the verifiable fact and the saving message meet. Do not stop at the historical crucifixion; hear in it the love of God for you. <strong>Prayer prompt:</strong> &ldquo;Lord Jesus, the whole world admits you were crucified. Let me confess why &mdash; for my sins &mdash; and receive the love that held you there.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Come to Meet Him, Not Merely to Study Him</h3>
                {para("Jesus warned the scholars of his day that they searched the Scriptures diligently yet refused to come to him for life (John 5:39-40). It is possible to master the historical evidence and still miss the living Christ. The evidence has done its work when it brings you not to a verdict about a dead man but to a meeting with a living Lord. <strong>Prayer prompt:</strong> &ldquo;Risen Lord, I do not want only to be convinced that you lived; I want to know you. Move me from evidence to encounter, from studying you to following you.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Word</h3>
                {para("&ldquo;That which we have heard, which we have seen with our eyes &hellip; we proclaim also to you&rdquo; (1 John 1:1-3). The men who wrote those words were not composing fiction; they were reporting a person they had touched. Twenty centuries later, the footprints of that life are still visible in the records of his friends and his enemies alike. The evidence has carried you to the edge of the empty tomb. The question that remains is the one the risen Christ still asks each of us by name: &ldquo;But who do you say that I am?&rdquo; (Matthew 16:15).")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
