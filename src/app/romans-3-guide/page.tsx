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
  "The Jewish Advantage",
  "No One Righteous",
  "All Have Sinned",
  "Justified by Faith",
  "Faith and the Law",
  "Videos",
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
    heading: "Overview of Romans 3",
    reference: "Romans 3:1&ndash;31",
    paragraphs: [
      "Romans 3 is one of the most theologically concentrated chapters in all of Scripture &mdash; a passage that confronts the human condition with unflinching honesty and then opens the door to the most glorious news the world has ever heard. Paul is in the middle of his great argument about sin and salvation, and this chapter forms the dark valley through which the reader must pass before arriving at the sunlit heights of justification by faith.",
      "The chapter opens by addressing a natural objection: if Jews and Gentiles alike are under the power of sin (as Paul has argued in chapters 1&ndash;2), does it follow that there is no advantage to being Jewish at all? Paul insists there is a great advantage &mdash; first of all, the Jewish people were &ldquo;entrusted with the oracles of God&rdquo; (3:2). To receive the very words of God is an immeasurable privilege, even if some have been unfaithful to that calling.",
      "Paul then makes a foundational theological claim: even human unfaithfulness cannot overturn God&rsquo;s faithfulness. &ldquo;Let God be true though every one were a liar&rdquo; (3:4). The covenant-keeping character of God is not contingent on human performance. He will be proved right in his words and will prevail when he is judged. This confidence in divine faithfulness is the bedrock on which the rest of the chapter rests.",
      "The center of the chapter is a devastating catena of Old Testament quotations demonstrating that &ldquo;none is righteous, no, not one&rdquo; (3:10). Paul draws from the Psalms and Isaiah to paint a comprehensive portrait of human sinfulness &mdash; corrupt understanding, worthless lives, throats like open graves, tongues practicing deceit, mouths full of cursing and bitterness, feet swift to shed blood, no fear of God before their eyes. No class of human being is exempt from this diagnosis.",
      "Then, precisely at the lowest point of human possibility, the passage pivots with that great Pauline adversative: &ldquo;But now&rdquo; (3:21). A righteousness from God has been revealed, apart from the law &mdash; the righteousness of God through faith in Jesus Christ for all who believe. Justified freely by God&rsquo;s grace through the redemption that is in Christ Jesus, who was put forward as a propitiation by his blood. The chapter closes by affirming that this faith does not abolish the law but rather upholds it.",
    ],
  },
  {
    id: "The Jewish Advantage",
    heading: "The Jewish Advantage",
    reference: "Romans 3:1&ndash;8",
    paragraphs: [
      "Paul has just finished an argument (ch. 2) showing that Jewish people are not exempt from God&rsquo;s righteous judgment merely because they possess the law or are circumcised. An inward circumcision of the heart is what God has always sought. This immediately raises a question that a Jewish interlocutor would press: if possession of the law does not guarantee standing before God, what advantage does the Jew have? Is circumcision worthless?",
      "Paul refuses this conclusion. &ldquo;Much in every way,&rdquo; he insists (3:2). The privileges of Israel are real and profound. He lists them more fully in Romans 9:4&ndash;5 &mdash; the adoption, the glory, the covenants, the giving of the law, the worship, the promises, the patriarchs, and from their race the Christ according to the flesh. But here in chapter 3 he singles out the first and foundational privilege: the Jewish people were entrusted with the oracles of God.",
      "The phrase &ldquo;oracles of God&rdquo; (logia tou theou) refers to the words God spoke through Moses and the prophets &mdash; the Scriptures of the Old Testament. To be the people through whom God&rsquo;s very words were preserved and transmitted to the world is an astonishing honor. These are not merely human religious writings; they are the living speech of the Creator, carrying his authority and his self-disclosure. The Jewish people served as the custodians of divine revelation for the entire human race.",
      "But Paul immediately faces a harder objection: if some Jewish people were unfaithful &mdash; if they did not believe the oracles entrusted to them &mdash; does their unbelief nullify the faithfulness of God? The question touches the very character of God. Paul answers with controlled intensity: &ldquo;By no means! Let God be true though every one were a liar&rdquo; (3:4). God&rsquo;s fidelity to his covenant promises is not held hostage by human response. He keeps his word even when his people do not.",
      "Paul cites Psalm 51:4, in which David confesses his sin and acknowledges that God is justified in his verdict: &ldquo;That you may be justified in your words, and prevail when you are judged&rdquo; (3:4). God&rsquo;s righteousness is vindicated precisely in the fact that he judges sin honestly rather than overlooking it. His faithfulness does not require human faithfulness as its precondition &mdash; but it does require that sin be dealt with seriously.",
      "The section concludes by batting away a sophistic argument: if our sin makes God&rsquo;s righteousness shine more brightly, is God unjust to punish us for it? Should we do evil so that good may come? Paul treats this suggestion with contempt: &ldquo;Their condemnation is just&rdquo; (3:8). The logic of &ldquo;sin more so grace may abound&rdquo; is a perversion of the gospel, and Paul will return to demolish it at length in chapter 6. God&rsquo;s faithfulness does not require human wickedness as its foil, and human sin cannot become a virtue by virtue of its contrast with divine goodness.",
    ],
  },
  {
    id: "No One Righteous",
    heading: "No One Righteous",
    reference: "Romans 3:9&ndash;20",
    paragraphs: [
      "Having defended the genuine privileges of the Jewish people, Paul now drives home his main charge: &ldquo;We have already charged that all, both Jews and Greeks, are under sin&rdquo; (3:9). The word &ldquo;under&rdquo; is significant &mdash; not merely that people sin occasionally, but that they are held in subjection to sin as a power. Both groups that divide humanity &mdash; those with the law and those without &mdash; find themselves in this bondage.",
      "What follows is one of the most sobering passages in Scripture: a chain of Old Testament quotations woven together into a comprehensive indictment of fallen humanity. Paul draws primarily from the Psalms (14, 5, 140, 10, 36) and Isaiah (59) to construct a portrait of human sinfulness that leaves no feature of human life untouched. &ldquo;None is righteous, no, not one; no one understands; no one seeks for God&rdquo; (3:10&ndash;11).",
      "The diagnosis begins at the level of the mind and will: understanding is absent, and &mdash; most pointedly &mdash; no one naturally seeks God. This is not a statement about people who are indifferent; it is a claim about human nature after the fall. The creature does not naturally orient itself toward the Creator. What looks like religious seeking is often the search for a god who will endorse one&rsquo;s existing preferences rather than the pursuit of the living God as he actually is.",
      "The indictment descends to the level of conduct: &ldquo;All have turned aside; together they have become worthless; no one does good, not even one&rdquo; (3:12). Then it focuses with particular force on the organs of speech. The throat is an open grave &mdash; from it comes the stench of death. The tongue practices deceit. The lips hide the poison of vipers. The mouth is full of curses and bitterness (3:13&ndash;14). These images from the Psalms are not rhetorical exaggeration but a theological analysis of how deeply corruption penetrates human communication.",
      "Then the body is implicated: &ldquo;Their feet are swift to shed blood; in their paths are ruin and misery, and the way of peace they have not known&rdquo; (3:15&ndash;17). Violence is not an aberration but a characteristic feature of human life apart from God. History, from the first fratricide of Cain to the genocides of the twentieth century, bears out the diagnosis.",
      "The whole dark portrait is capped by the root cause: &ldquo;There is no fear of God before their eyes&rdquo; (3:18, citing Psalm 36:1). The fear of the Lord is the beginning of wisdom (Proverbs 9:10); its absence is the beginning of every evil. Paul&rsquo;s conclusion is devastating: &ldquo;Now we know that whatever the law says it speaks to those who are under the law, so that every mouth may be stopped, and the whole world may be held accountable to God&rdquo; (3:19). The law does not save; it silences every human pretension to righteousness and renders the whole world without excuse before God.",
    ],
  },
  {
    id: "All Have Sinned",
    heading: "All Have Sinned",
    reference: "Romans 3:21&ndash;23",
    paragraphs: [
      "After the long night of accusation, the light breaks in with one of the most dramatic pivots in all of Paul&rsquo;s writing: &ldquo;But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it&rdquo; (3:21). The phrase &ldquo;but now&rdquo; marks a turning point not just in the argument but in the history of redemption. Something new has happened in history &mdash; the righteousness of God has appeared in a fresh mode, though it is not entirely new, since the whole Old Testament pointed toward it.",
      "Paul&rsquo;s diagnosis culminates in the sentence that has become perhaps the most quoted verse in Christian evangelism: &ldquo;For all have sinned and fall short of the glory of God&rdquo; (3:23). The universality of sin is stated plainly: &ldquo;all&rdquo; &mdash; without ethnic distinction, without moral qualification, without religious exception. Every human being who has ever lived, apart from Jesus Christ, falls under this verdict.",
      "The phrase &ldquo;fall short of the glory of God&rdquo; is rich with implication. To &ldquo;fall short&rdquo; is not merely to fail an examination; it is to come up lacking, to be found deficient, to miss the mark by a measure that cannot be made up by human effort. The standard is not some human moral average or a list of rules to be kept; it is the glory of God himself &mdash; the perfect, luminous moral excellence that belongs to God alone and that was meant to be reflected in human beings made in his image.",
      "The glory of God is connected to what human beings were designed to be. At creation, God made humanity in his image, to reflect his character and rule the earth as his representatives. Sin shattered that image, not entirely but profoundly. Human beings still bear the image of God, but it is as if a magnificent mirror has been cracked &mdash; it still reflects something of the original, but the reflection is distorted and darkened. To &ldquo;fall short of the glory of God&rdquo; is to fail to be what God made human beings to be.",
      "This universal shortfall establishes the universal need for what Paul is about to announce. If all have sinned, then all need rescue &mdash; rescue that does not come from human improvement or religious achievement but from outside. And the &ldquo;but now&rdquo; of verse 21 announces that this rescue has come. The righteousness that human beings lack but are destined for has been provided by God himself, manifested in the one human life that did not fall short of the glory of God.",
      "The connection between &ldquo;all have sinned&rdquo; and &ldquo;but now&rdquo; is not incidental. Paul is setting up a correspondence: the universality of the problem demands the universality of the solution. Because all &mdash; Jew and Gentile, moral and immoral, religious and irreligious &mdash; are in the same condition of sin, the righteousness of God through faith in Jesus Christ is available to all who believe, &ldquo;for there is no distinction&rdquo; (3:22). The same sinfulness that levels all humans before God also levels all humans before the grace of God.",
    ],
  },
  {
    id: "Justified by Faith",
    heading: "Justified by Faith",
    reference: "Romans 3:24&ndash;26",
    paragraphs: [
      "Paul now arrives at the heart of the gospel &mdash; three verses so dense with theological meaning that they have generated libraries of commentary. &ldquo;And are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith&rdquo; (3:24&ndash;25). These sentences carry the whole weight of the atonement.",
      "The verb &ldquo;justified&rdquo; (dikaioo) is a legal term: to be declared righteous, to be acquitted, to have the verdict of &ldquo;not guilty&rdquo; pronounced over one&rsquo;s life. But the justification Paul describes is not based on any righteous act of the defendant &mdash; it is received as a gift. The Greek word for &ldquo;gift&rdquo; here (dorean) means freely, without cost, gratis. Those who stand condemned under the righteous verdict of God (3:9&ndash;20) receive acquittal as a free gift. The transaction is entirely one-directional: from God to the sinner.",
      "This justification is grounded in &ldquo;the redemption that is in Christ Jesus.&rdquo; The word &ldquo;redemption&rdquo; (apolutrosis) carries the image of paying a ransom price to liberate a slave or a prisoner. It is the language of the Exodus, in which God redeemed his people from slavery in Egypt. Now Paul applies it to a greater captivity &mdash; the bondage to sin and death &mdash; and a greater redemption. The price paid for this liberation is not silver or gold but the blood of Christ (cf. 1 Peter 1:18&ndash;19).",
      "The most theologically loaded term in these verses is &ldquo;propitiation&rdquo; (hilasterion). The word refers to the turning away of divine wrath through the offering of a sacrifice. It is the word used in the Greek Old Testament for the mercy seat on the ark of the covenant &mdash; the cover of the ark on which the high priest sprinkled blood on the Day of Atonement to make atonement for the sins of Israel (Leviticus 16). Paul is saying that Jesus Christ is the ultimate mercy seat, the place where God&rsquo;s righteous wrath against sin is satisfied and his mercy toward sinners is expressed.",
      "This act of propitiation was &ldquo;to show God&rsquo;s righteousness, because in his divine forbearance he had passed over former sins&rdquo; (3:25). God had been patient with sin throughout the Old Testament period, not immediately executing judgment. This patience might have seemed like indifference or injustice. The cross answers that appearance: God was not overlooking sin but deferring its judgment until the moment when Christ would bear it in full. The cross demonstrates both God&rsquo;s absolute justice (sin must be punished) and his overflowing mercy (he provides the punishment himself in the person of his Son).",
      "The result is stated with breathtaking clarity: God is &ldquo;just and the justifier of the one who has faith in Jesus&rdquo; (3:26). This is the resolution of what seemed an impossible tension. How can a righteous God declare guilty sinners righteous? By bearing the penalty of sin himself in the person of his Son, God can both punish sin justly and forgive sinners freely. The cross is not a compromise between justice and mercy; it is the fulfillment of both simultaneously. The one who comes to Christ by faith receives a verdict of righteousness that is both absolutely free and absolutely costly &mdash; free to the recipient because infinitely costly to the Giver.",
    ],
  },
  {
    id: "Faith and the Law",
    heading: "Faith and the Law",
    reference: "Romans 3:27&ndash;31",
    paragraphs: [
      "Having announced the great gospel of justification by faith, Paul immediately faces two more objections. The first is practical: does this gospel of free grace leave any room for human boasting? Paul is emphatic: &ldquo;Then what becomes of our boasting? It is excluded&rdquo; (3:27). The principle of faith, by its very nature, shuts the mouth of pride. Faith is not a human achievement; it is the posture of a hand stretched out to receive what cannot be earned. No one can boast before God for exercising faith, any more than a beggar can boast for accepting bread.",
      "Paul draws the logical conclusion: &ldquo;For we hold that one is justified by faith apart from works of the law&rdquo; (3:28). This is the thesis statement of the Reformation and one of the most contested sentences in the history of Christian theology. Works of the law &mdash; the deeds prescribed by the Mosaic code, especially the boundary markers that distinguished Jews from Gentiles (circumcision, food laws, sabbath observance) &mdash; do not contribute to justification. Faith alone receives the righteousness that God provides.",
      "The second implication Paul draws is the universality of salvation. If God justifies by faith, and faith is available to all, then God is the God of the Gentiles as well as the Jews: &ldquo;Or is God the God of Jews only? Is he not the God of Gentiles also? Yes, of Gentiles also, since God is one &mdash; who will justify the circumcised by faith and the uncircumcised through faith&rdquo; (3:29&ndash;30). The monotheism of Israel (there is one God, not many) demands the universalism of grace: one God means one gospel, available to all peoples on the same terms.",
      "The final objection Paul anticipates is perhaps the most serious: does his gospel abolish the law? If righteousness is by faith and not by works, does the Mosaic law become irrelevant? Paul denies this with characteristic force: &ldquo;Do we then overthrow the law by this faith? By no means! On the contrary, we uphold the law&rdquo; (3:31). He will spend the next chapters showing exactly what he means by this &mdash; that Abraham was justified by faith before circumcision was given (ch. 4), that the law was never meant to be the ground of justification but the revealer of sin and the guardian pointing toward Christ (Galatians 3:24).",
      "The law is upheld by faith, not overthrown, because faith fulfills what the law always pointed toward. The law called for righteousness; faith receives the righteousness of God in Christ. The law exposed sin; faith leads sinners to the one who bore the penalty of sin. The law described the character of God; Christ embodied that character perfectly and, in doing so, provides sinners with a righteousness that actually meets the law&rsquo;s demands. &ldquo;For Christ is the end of the law for righteousness to everyone who believes&rdquo; (Romans 10:4) &mdash; not its abolition but its goal, its destination, its fulfillment.",
      "Romans 3 ends where the gospel always ends: not with human performance but with divine provision, not with boasting but with faith, not with the despair of a standard we cannot meet but with the joy of a gift we cannot earn. The righteousness of God, revealed in the gospel (1:17), is now shown to be the righteousness of God in Christ, received through faith, upholding rather than undermining the whole revelation of God&rsquo;s holy law.",
    ],
  },
];

const videoItems = [
  { videoId: "Rm3pxKn7qB4", title: "Romans 3 Explained - No One Righteous and Justification by Faith" },
  { videoId: "Vt8wJkNpL2s", title: "The Righteousness of God - Romans 3:21-26 Sermon" },
  { videoId: "Yq6fBcDsH9m", title: "Propitiation and the Cross - Romans 3 Bible Study" },
  { videoId: "Zx5nGbKrT7j", title: "All Have Sinned - Understanding Romans 3 in Context" },
];

export default function Romans3GuidePage() {
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
            Romans 3 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            No one is righteous &mdash; not even one &mdash; yet God&rsquo;s righteousness is freely given through faith in Jesus Christ. Romans 3 diagnoses the universal human condition of sin and unveils the glorious remedy: justification by grace alone, through faith alone, in Christ alone.
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

        {currentSection && activeTab !== "Videos" && (
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Romans 3 through these video teachings on the universal reach of sin, the righteousness of God revealed in the gospel, propitiation through Christ&rsquo;s blood, and justification by faith alone.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Just and the Justifier</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 3 drives every human being to the same humbling conclusion: all have sinned and fall short of the glory of God. Yet it is precisely there, at the bottom of human possibility, that the gospel shines most brightly &mdash; God is both just and the justifier of the one who has faith in Jesus. The righteousness we could never achieve has been freely given. Receive it by faith.
          </p>
        </div>
      </main>
    </div>
  );
}
