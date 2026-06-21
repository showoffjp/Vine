"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

type Witness = {
  name: string;
  date: string;
  detail: string;
  accent: string;
};

export default function BibleManuscriptEvidenceGuide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "kn5Du1THXjQ", title: "How We Got the Bible" },
    { videoId: "lH6Ku5333hM", title: "The Reliability of the New Testament Manuscripts" },
    { videoId: "fDw7szUlCfg", title: "The Dead Sea Scrolls and the Old Testament" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "ot", label: "Old Testament" },
    { id: "nt", label: "New Testament" },
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

  const ntWitnesses: Witness[] = [
    {
      name: "John Rylands Fragment (P52)",
      date: "c. A.D. 125",
      detail: "A scrap of John's Gospel (18:31-33, 37-38) found in Egypt, dated within a generation of the apostle John's death. It places a copy of John's Gospel circulating far from its place of writing within decades of composition.",
      accent: GOLD,
    },
    {
      name: "Chester Beatty & Bodmer Papyri (P45, P46, P66, P75)",
      date: "c. A.D. 175-250",
      detail: "Substantial papyrus codices containing the Gospels, Acts, and Paul's letters, written within roughly 100-150 years of the originals &mdash; far closer than the surviving copies of almost any other ancient work.",
      accent: TEAL,
    },
    {
      name: "Codex Sinaiticus & Codex Vaticanus",
      date: "c. A.D. 325-360",
      detail: "Two great parchment codices containing nearly the entire Bible in Greek, produced within about three centuries of Christ. Sinaiticus is the oldest surviving complete New Testament.",
      accent: PURPLE,
    },
    {
      name: "The Full Greek Manuscript Tradition",
      date: "2nd-15th centuries",
      detail: "Roughly 5,800 Greek New Testament manuscripts survive, plus around 10,000 Latin manuscripts and some 5,000-10,000 in other ancient languages &mdash; a total approaching 25,000 handwritten witnesses.",
      accent: ROSE,
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
            Is the Bible Reliable? The Manuscript Evidence
          </h1>
          <p style={{ fontSize: "1.3rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The grass withers, the flower fades, but the word of our God will stand forever&rdquo; &mdash; Isaiah 40:8" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "Can we trust that the Bible we read today says what its authors actually wrote? This study surveys the staggering manuscript evidence behind the Scriptures &mdash; from the Dead Sea Scrolls to the thousands of Greek New Testament copies &mdash; explains the science of textual criticism, and answers the objections most often raised against the Bible's reliability." }} />
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
            {heading("A Question Worth Asking Honestly")}
            {para("Every claim the Christian faith makes rests on documents written between two and three thousand years ago. It is fair, then, to ask: how do we know the Bible we hold today actually preserves what Moses, Isaiah, the Gospel writers, and Paul originally wrote? We do not possess the original manuscripts &mdash; the &lsquo;autographs&rsquo; &mdash; of any biblical book; they perished long ago, as did the originals of every ancient work. What we possess instead are copies: thousands upon thousands of handwritten copies, in many languages, spanning many centuries. The discipline that compares these copies to recover the original wording is called <strong>textual criticism</strong>, and it is the same scholarly method applied to Homer, Plato, and the historians of Greece and Rome.")}
            {para("The remarkable conclusion of this discipline is that the Bible is, by an enormous margin, the best-attested set of documents from the ancient world. No other text comes close in the number, age, and geographical spread of its surviving copies. This does not by itself prove that what the Bible says is <em>true</em> &mdash; that is a separate question of history, theology, and faith. But it does answer a more basic and often-confused objection: the claim that the text has been hopelessly corrupted, garbled in transmission, or rewritten beyond recognition. On the contrary, we can reconstruct the original wording of the Scriptures with a very high degree of confidence.")}
            {heading("Two Different Stories", TEAL)}
            {para("The reliability of the Old Testament and the New Testament rests on different but equally strong foundations. The <strong>Old Testament</strong> was copied for centuries by Jewish scribes whose reverence for the text produced extraordinary discipline &mdash; and the Dead Sea Scrolls, discovered in 1947, let us test the accuracy of that transmission across a thousand-year gap. The <strong>New Testament</strong> owes its reliability not to a single controlled tradition but to the sheer abundance of early copies: so many manuscripts circulated so quickly across the Roman world that the original wording can be triangulated from the surviving witnesses. The tabs that follow examine each in turn.")}
            {heading("Why It Matters", PURPLE)}
            {para("This is not a dry academic exercise. If the text is unreliable, then the words of Jesus, the promises of God, and the gospel itself dissolve into uncertainty. But if the text is secure &mdash; as the evidence overwhelmingly shows &mdash; then we can read the Scriptures with confidence that we are hearing what God actually caused to be written. Jesus himself staked everything on the permanence of God's word: &ldquo;Heaven and earth will pass away, but my words will not pass away&rdquo; (Matthew 24:35). The manuscript evidence is one way God has, in his providence, made that confidence reasonable. Three short videos below introduce the subject.")}

            <div style={{ marginTop: "2.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ marginBottom: "1.6rem", borderRadius: "10px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.9rem", padding: "0.7rem 1rem", margin: 0, background: CARD }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "ot" && (
          <div>
            {heading("The Old Testament: Guarded Across a Millennium")}
            {para("For most of history, the oldest complete Hebrew manuscripts of the Old Testament were the great Masoretic codices &mdash; the Aleppo Codex (c. A.D. 925) and the Leningrad Codex (A.D. 1008). The Masoretes were Jewish scribes who, from roughly the 6th to the 10th centuries A.D., copied the Hebrew Scriptures with almost obsessive precision, counting the letters of each book, noting the middle letter, and developing elaborate systems of vowel points and marginal notes to guard the text against error. Their work was a masterpiece of scribal care. But a question remained: how faithfully had the text been transmitted in the many centuries <em>before</em> the Masoretes? Without older copies, no one could be sure.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.3rem", marginBottom: "0.8rem" }}>The Dead Sea Scrolls: A Thousand-Year Test</h3>
                {para("In 1947, a Bedouin shepherd exploring caves near the Dead Sea at Qumran stumbled upon clay jars containing ancient scrolls. Over the following decade, eleven caves yielded roughly 900 manuscripts, including portions of every Old Testament book except Esther. These scrolls date from approximately 250 B.C. to A.D. 68 &mdash; <strong>over a thousand years older</strong> than the Masoretic codices that had been our best Hebrew witnesses.")}
                {para("The crucial discovery was the Great Isaiah Scroll (1QIsa-a), a complete copy of Isaiah dating to about 125 B.C. When scholars compared it word for word against the Masoretic text of Isaiah copied a thousand years later, the result was astonishing: the two were virtually identical. The differences were overwhelmingly trivial &mdash; spelling variations, the presence or absence of a conjunction, obvious slips of the pen &mdash; with no variant that altered any doctrine or substantial meaning. A thousand years of copying had introduced almost no significant corruption.")}
              </div>, GOLD
            )}

            {para("The verdict of the Dead Sea Scrolls is profound: the Jewish scribal tradition transmitted the Hebrew Scriptures with remarkable fidelity across a millennium. The text the Masoretes preserved in the Middle Ages was substantially the same text that was being read in the time of Jesus and before. This vindicates the confidence that the Old Testament we read today faithfully represents what the prophets and writers of ancient Israel composed.")}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Septuagint: An Ancient Cross-Check</h3>
                {para("There is a second independent witness to the Old Testament text: the Septuagint, a Greek translation of the Hebrew Scriptures begun in the 3rd century B.C. for Greek-speaking Jews. Because it was translated from Hebrew manuscripts centuries before Christ, the Septuagint gives us an additional window onto the state of the text in the pre-Christian era. Where the Septuagint, the Dead Sea Scrolls, and the Masoretic text agree &mdash; which is the overwhelming majority of the time &mdash; we have three independent lines of evidence converging on the same wording.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Discipline Behind the Copies</h3>
                {para("Jewish scribal practice surrounding the Torah was famously rigorous. Later rabbinic rules (preserved in the Talmud) prescribed the preparation of the parchment, the spacing of letters, the spelling of divine names, and the requirement that a scribe copy from an authorized exemplar and check his work. A scroll with too many errors was buried or burned rather than corrected and used. While not every era enforced every rule, the culture of reverence for the text &mdash; treating it as the very words of God &mdash; produced a transmission of extraordinary stability, exactly as the Dead Sea Scrolls confirm.")}
              </div>, PURPLE
            )}
          </div>
        )}

        {tab === "nt" && (
          <div>
            {heading("The New Testament: Reliability by Abundance")}
            {para("The New Testament's reliability rests on a different foundation than the Old. Rather than a single carefully controlled tradition, the New Testament was copied freely and rapidly as the church exploded across the Roman Empire. Within a few generations, copies of the Gospels and Paul's letters were circulating from Egypt to Rome to Asia Minor. This abundance is the key to its reliability: with so many early copies made independently in so many places, no individual or group could have altered the text everywhere at once, and scholars can compare the witnesses to reconstruct the original wording.")}

            {heading("The Surviving Witnesses", TEAL)}
            {para("Below are some of the most significant New Testament manuscripts, in roughly chronological order, illustrating both the early date and the sheer quantity of the evidence.")}

            {ntWitnesses.map((w, idx) => (
              <div key={idx} style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${w.accent}`,
                borderRadius: "10px",
                padding: "1.5rem 1.7rem",
                marginBottom: "1.4rem",
              }}>
                <h3 style={{ color: w.accent, fontSize: "1.25rem", marginBottom: "0.4rem" }}>{w.name}</h3>
                <p style={{ color: GOLD, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.7rem" }}>{w.date}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: w.detail }} />
              </div>
            ))}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>The Comparison That Puts It in Perspective</h3>
                {para("To grasp how exceptional this is, compare the New Testament to other respected works of antiquity that no scholar doubts. Caesar's <em>Gallic War</em> survives in a few hundred manuscripts, the earliest copied some 900 years after Caesar. The histories of Tacitus survive in a couple of manuscripts, the earliest about 800 years after he wrote. Homer's <em>Iliad</em>, the best-attested ancient work apart from the Bible, survives in roughly 1,900 manuscripts. The New Testament, by contrast, survives in around 5,800 Greek manuscripts, with the earliest fragments within decades of the originals and substantial copies within 100-150 years.")}
                {para("The point is simple but powerful: if a skeptic dismisses the New Testament as unreliably transmitted, he must, to be consistent, throw out virtually everything we claim to know about the ancient world &mdash; for the New Testament's textual support dwarfs that of every other ancient text. The historian who trusts Caesar and Tacitus has no rational grounds to distrust the transmission of the Gospels.")}
              </div>, ROSE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Witness of the Church Fathers</h3>
                {para("There is yet another layer of evidence. The early Christian writers &mdash; men like Clement of Rome, Ignatius, Justin Martyr, Irenaeus, Tertullian, and Origen &mdash; quoted the New Testament so extensively in their own letters and treatises that scholars have observed nearly the entire New Testament could be reconstructed from their citations alone, even if every manuscript were lost. These quotations, scattered across the second and third centuries, provide an independent check confirming the wording of the text that the manuscripts preserve.")}
              </div>, GREEN
            )}
          </div>
        )}

        {tab === "case" && (
          <div>
            {heading("Weighing the Evidence Honestly")}
            {para("Strong apologetics neither overstates the case nor flinches from the genuine complications. The manuscript evidence is powerful, but it must be presented truthfully, including a frank account of the variants among the copies and what they do &mdash; and do not &mdash; mean.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;But there are hundreds of thousands of variants!&rdquo;</h3>
                {para("Skeptics sometimes note that there are some 400,000 textual variants among the New Testament manuscripts &mdash; more variants than there are words in the New Testament. This sounds alarming until it is understood. The number is so large precisely <em>because</em> there are so many manuscripts: every additional copy adds its own minor slips. The overwhelming majority of variants are trivial &mdash; differences in spelling, word order that does not change meaning, an article added or dropped, obvious scribal mistakes. Scholars across the spectrum agree that the vast majority of variants make no difference to the meaning, and that no central Christian doctrine hangs in the balance over any disputed reading. The two most discussed longer passages &mdash; the ending of Mark (16:9-20) and the woman caught in adultery (John 7:53-8:11) &mdash; are clearly flagged in modern Bibles precisely because the textual evidence is transparent and openly examined.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;It's like a game of telephone&rdquo;</h3>
                {para("The popular &lsquo;telephone game&rsquo; analogy &mdash; a message whispered down a line and hopelessly garbled by the end &mdash; badly misrepresents how the text was transmitted. In the telephone game there is one chain, no original to check against, and each person hears only once. Manuscript transmission is nothing like this. There were many parallel chains of copying, not one; the copies were written, not whispered; scribes could and did compare exemplars; and because copies survive from many points along the way, we can compare them against one another to detect and correct errors. A better analogy is a large family writing down a recipe: with dozens of independently made copies, the original wording can be recovered even if no single copy is perfect.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>&ldquo;The early copies were carelessly made&rdquo;</h3>
                {para("It is true that the earliest Christian copies were often made by ordinary believers rather than professional scribes, and that the very earliest copies show more variation than the later, more standardized tradition. But this cuts the other way for reliability: precisely because the early copying was not centrally controlled, there was no opportunity for any authority to impose a doctrinally altered text on the whole church. The diversity of the early manuscripts, scattered across the empire, is itself a guarantee against systematic corruption. And the science of textual criticism is designed to weigh exactly these factors, recovering the earliest readings from the full body of evidence.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>What the Scholars Actually Say</h3>
                {para("The reliability of the text is not a fringe Christian claim but the mainstream conclusion of the field. Sir Frederic Kenyon, longtime director of the British Museum, wrote that &ldquo;the last foundation for any doubt that the Scriptures have come down to us substantially as they were written has now been removed.&rdquo; Even the agnostic textual critic Bart Ehrman, often cited by skeptics, concedes in the appendix of one of his popular books that &ldquo;essential Christian beliefs are not affected by textual variants.&rdquo; The disagreement is over interpretation and authority &mdash; not over whether we can recover what the authors wrote. On that question, the evidence is decisive.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>The Honest Bottom Line</h3>
                {para("We can reconstruct the original wording of the Bible with a confidence unmatched by any other ancient document. The places of genuine uncertainty are few, are openly marked in any good study Bible, and touch no article of the faith. This does not compel anyone to believe the Bible's message &mdash; reliability of transmission is not the same as truth of content. But it does clear away a common excuse. The book you hold is, to a very high degree of certainty, what its authors wrote. The real question is no longer &lsquo;Has the text survived?&rsquo; but &lsquo;What will I do with what it says?&rsquo;")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("From Evidence to Trust")}
            {para("The manuscript evidence is not an end in itself but a doorway to confident faith. Here are four ways this truth presses into the life of the believer, each with a prayer prompt.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Read Your Bible With Confidence, Not Anxiety</h3>
                {para("You can open the Scriptures each morning knowing that you are reading, to a very high degree of certainty, the words God caused to be written. You do not need to worry that the text has been secretly rewritten or hopelessly garbled. This confidence frees you to receive the Bible as what it claims to be &mdash; the living and abiding word of God (1 Peter 1:23). <strong>Prayer prompt:</strong> &ldquo;Father, thank you that your word has been preserved across the centuries. As I read, give me confidence that I am hearing your voice, and a heart ready to obey what I find.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. See the Hand of Providence in Preservation</h3>
                {para("The survival of the Scriptures across millennia &mdash; through persecution, the burning of copies, the fall of empires, and the wear of time &mdash; is itself a quiet testimony to the God who promised that his word would stand forever (Isaiah 40:8). The thousands of manuscripts scattered across the ancient world were not the result of any central plan but of God's providence working through countless ordinary scribes and believers. <strong>Prayer prompt:</strong> &ldquo;Lord, I see your faithfulness in the way you have guarded your word through every age. Thank you for the unnamed scribes and believers you used to bring it to me.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Answer the Skeptic With Gentleness</h3>
                {para("When a friend or family member dismisses the Bible as a book &lsquo;changed countless times over the centuries,&rsquo; you now have a calm, factual answer to offer &mdash; not to win an argument, but to remove a stumbling block. Peter calls us to give a reason for our hope &ldquo;with gentleness and respect&rdquo; (1 Peter 3:15). The manuscript evidence is a gift for exactly such conversations: solid, checkable, and free of hype. <strong>Prayer prompt:</strong> &ldquo;Lord, give me the knowledge to answer honest questions and the gentleness to do it in love, that the reliability of your word might open a door to its message.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Move From the Text to the Author</h3>
                {para("Reliability of transmission is only the threshold. The point of knowing that the text is trustworthy is to listen to what it says &mdash; and ultimately to meet the One it reveals. Jesus warned the scholars of his day that they searched the Scriptures diligently yet refused to come to him for life (John 5:39-40). Do not stop at being persuaded the book is reliable; let it lead you to trust, love, and obey the Lord it proclaims. <strong>Prayer prompt:</strong> &ldquo;Lord Jesus, let me not merely defend the Bible but be transformed by it. Lead me through the reliable text to the living Word, that I may know and follow you.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Word</h3>
                {para("&ldquo;The grass withers, the flower fades, but the word of our God will stand forever&rdquo; (Isaiah 40:8). The mountains of manuscript evidence are, in the end, the visible footprint of an invisible faithfulness. God said his word would endure, and across thirty centuries of fragile parchment and fading ink, it has. The book has survived. The question that remains is the one it was always meant to press upon us: will we believe and obey the God who speaks in it?")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
