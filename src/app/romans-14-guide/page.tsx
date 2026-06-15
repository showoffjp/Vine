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
  "Welcome the Weak",
  "Stumbling Block",
  "Build Up",
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
    heading: "Overview of Romans 14",
    reference: "Romans 14:1&ndash;23",
    paragraphs: [
      "Romans chapter 14 turns from the sweeping doctrine and the broad ethical vision of the earlier chapters to a tender and searching question about life together in the church: how are believers who disagree over matters of conscience to live with one another in love? Paul writes to a congregation in which some are strong in faith and some are weak, and he addresses both groups with remarkable evenhandedness. The chapter is one of the great charters of Christian liberty and Christian charity, holding the two in a careful and costly balance.",
      "The disputes Paul has in view are not matters of the gospel itself but what he calls &ldquo;disputable matters&rdquo; &mdash; questions over which sincere believers may legitimately differ. Two concrete examples dominate the chapter: food and days. Some believers ate anything, while others, out of scruple, ate only vegetables (v.2). Some esteemed one day above another as sacred, while others treated every day alike (v.5). These were live questions in a mixed church of Jewish and Gentile believers, where the shadow of the old ceremonial law still fell across tender consciences.",
      "In the first movement (vv.1&ndash;12), Paul commands the congregation to welcome the one whose faith is weak, and he forbids both the despising of the weak by the strong and the judging of the strong by the weak. His grand reason is that each believer belongs to the Lord and will answer to him: &ldquo;We will all stand before God&rsquo;s judgment seat&rdquo; (v.10). Because the Lord is the master of every servant, no fellow servant has the right to take his Master&rsquo;s place as judge.",
      "In the second movement (vv.13&ndash;18), Paul turns to address the strong in particular, warning them not to let their liberty become a stumbling block to the weak. Though nothing is unclean in itself, love must govern the use of freedom. &ldquo;If your brother is distressed because of what you eat, you are no longer acting in love&rdquo; (v.15). The kingdom of God, Paul insists, is not a matter of eating and drinking but of righteousness, peace, and joy in the Holy Spirit (v.17).",
      "In the final movement (vv.19&ndash;23), Paul calls the whole church to pursue what makes for peace and mutual edification, and he frames conscience itself as a sacred boundary not to be violated. The chapter closes with one of the most far-reaching statements in all of Scripture: &ldquo;everything that does not come from faith is sin&rdquo; (v.23). What governs the believer is not merely the abstract rightness of an act but whether it is done in the confidence of faith before God.",
      "Taken together, Romans 14 refuses to flatten the church into uniformity and refuses to fracture it into factions. It teaches the strong to bear with the weak and the weak to honor the strong, and it teaches all of them to remember that they are servants of one Lord before whom every knee will bow. Liberty is real, but love is greater; and the unity of those for whom Christ died is more precious than the freedom to eat or to keep a day.",
    ],
  },
  {
    id: "Welcome the Weak",
    heading: "Welcome the Weak; Do Not Judge",
    reference: "Romans 14:1&ndash;12",
    paragraphs: [
      "Paul opens with a clear and gracious command: &ldquo;Accept the one whose faith is weak, without quarreling over disputable matters&rdquo; (v.1). The word translated &lsquo;accept&rsquo; or &lsquo;welcome&rsquo; carries the warmth of receiving someone into one&rsquo;s home and fellowship. The &lsquo;weak&rsquo; here are not the morally lax but the overly scrupulous &mdash; those whose consciences are bound by restrictions the gospel has in fact loosened. Paul tells the church to receive such a person fully, and not for the purpose of dragging him into an argument over the very scruples that trouble him.",
      "The first example concerns food: &ldquo;One person&rsquo;s faith allows them to eat anything, but another, whose faith is weak, eats only vegetables&rdquo; (v.2). To this Paul applies a beautiful symmetry of charity: &ldquo;The one who eats everything must not treat with contempt the one who does not, and the one who does not eat everything must not judge the one who does, for God has accepted them&rdquo; (v.3). The strong is tempted to despise the weak as narrow; the weak is tempted to judge the strong as loose. Both temptations are forbidden, because God himself has already welcomed the other.",
      "Paul then presses the decisive point: &ldquo;Who are you to judge someone else&rsquo;s servant? To their own master, servants stand or fall. And they will stand, for the Lord is able to make them stand&rdquo; (v.4). The image is of a household with one Master and many servants. For one servant to sit in judgment on another is to usurp the Master&rsquo;s place. And there is comfort hidden in the rebuke: the Lord is able to uphold the very brother we are tempted to write off.",
      "The second example concerns sacred days: &ldquo;One person considers one day more sacred than another; another considers every day alike. Each of them should be fully convinced in their own mind&rdquo; (v.5). Here Paul gives a striking principle of conscience. In disputable matters, the believer is to act not from peer pressure or vague custom but from settled inward conviction before God. A divided or doubting conscience is no firm ground on which to stand.",
      "What unifies both the eater and the abstainer, both the day-keeper and the one who treats all days alike, is that each acts unto the Lord: &ldquo;Whoever regards one day as special does so to the Lord. Whoever eats meat does so to the Lord, for they give thanks to God; and whoever abstains does so to the Lord and gives thanks to God&rdquo; (v.6). The thanksgiving sanctifies the choice. Two believers may do opposite things, yet both may be doing them in genuine devotion and gratitude to the same God.",
      "Paul then lifts the whole discussion to its deepest foundation: &ldquo;For none of us lives for ourselves alone, and none of us dies for ourselves alone. If we live, we live for the Lord; and if we die, we die for the Lord. So, whether we live or die, we belong to the Lord&rdquo; (vv.7&ndash;8). This is the great truth that relativizes every petty quarrel. The believer&rsquo;s whole existence, in life and in death, is owned by Christ. It was for this very lordship that Christ died and rose again: &ldquo;that he might be the Lord of both the dead and the living&rdquo; (v.9).",
      "The section closes with a solemn summons to the judgment seat: &ldquo;You, then, why do you judge your brother or sister? Or why do you treat them with contempt? For we will all stand before God&rsquo;s judgment seat&rdquo; (v.10). Paul reinforces this with Scripture, quoting Isaiah 45:23: &ldquo;As surely as I live, says the Lord, every knee will bow before me; every tongue will acknowledge God&rdquo; (v.11). The conclusion is searching and personal: &ldquo;So then, each of us will give an account of ourselves to God&rdquo; (v.12). When every servant must answer for himself before the one Master, the impulse to judge one&rsquo;s fellow servant withers away.",
    ],
  },
  {
    id: "Stumbling Block",
    heading: "Do Not Be a Stumbling Block",
    reference: "Romans 14:13&ndash;18",
    paragraphs: [
      "Having forbidden the weak and the strong alike from judging one another, Paul now turns to address the strong with particular force, and he does so by redirecting the very language of judgment: &ldquo;Therefore let us stop passing judgment on one another. Instead, make up your mind not to put any stumbling block or obstacle in the way of a brother or sister&rdquo; (v.13). There is a kind of judging that is wrong because it condemns another&rsquo;s conscience; but there is a kind of self-judgment that is right, by which a believer resolves never to be the cause of another&rsquo;s fall.",
      "Paul then makes a remarkable concession to the strong, granting them the very principle they hold dear: &ldquo;I am convinced, being fully persuaded in the Lord Jesus, that nothing is unclean in itself&rdquo; (v.14). He affirms, on the authority of the Lord Jesus himself, that the old ceremonial distinctions of clean and unclean food no longer bind the conscience. The strong are not mistaken in their theology of liberty. Yet Paul immediately adds the crucial qualification: &ldquo;But if anyone regards something as unclean, then for that person it is unclean.&rdquo; What is objectively permitted may, for a tender conscience, be subjectively defiling.",
      "From this Paul draws the searching application that governs the whole section: &ldquo;If your brother or sister is distressed because of what you eat, you are no longer acting in love. Do not by your eating destroy someone for whom Christ died&rdquo; (v.15). Here liberty is weighed against love and found lighter. The freedom to eat is real, but it is a small thing compared to the soul of a brother for whom Christ shed his blood. To wound a weak believer&rsquo;s conscience for the sake of a meal is to value a momentary pleasure above the cross.",
      "Paul warns the strong that their freedom, exercised carelessly, can bring their good into disrepute: &ldquo;Do not allow what you consider good to be spoken of as evil&rdquo; (v.16). The liberty of the gospel is a genuine good, but it can be so handled that it becomes an occasion of scandal and reproach. A right thing done in a loveless way can blacken the name of the very freedom it claims to celebrate, and bring dishonor on the church before a watching world.",
      "Then comes the soaring center of the chapter, the verse that puts the entire dispute into proportion: &ldquo;For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit&rdquo; (v.17). The reign of God in a human life does not consist in dietary rules or in the assertion of one&rsquo;s rights. It consists in righteousness &mdash; right standing and right living before God; in peace &mdash; reconciliation with God and harmony with one&rsquo;s neighbor; and in joy &mdash; the gladness wrought by the Holy Spirit. Beside these great realities, the question of meat and vegetables shrinks to its true smallness.",
      "Paul completes the thought with a word of commendation: &ldquo;Because anyone who serves Christ in this way is pleasing to God and receives human approval&rdquo; (v.18). To serve Christ &lsquo;in this way&rsquo; &mdash; pursuing righteousness, peace, and joy rather than insisting on one&rsquo;s liberties &mdash; is to live a life that delights God and commends the gospel to others. The one who is willing to lay down a freedom for the sake of a brother is not the loser but the one who has truly understood the kingdom.",
      "This passage has shaped Christian ethics ever since by establishing a principle far larger than the question of food: the principle that love voluntarily limits liberty for the good of the weaker brother. The strong believer is not asked to deny that he is free, nor to pretend that the scrupulous brother is right; he is asked to use his freedom in such a way that it builds others up rather than tears them down. The measure of mature faith, Paul implies, is not how much liberty one can claim but how much love one is willing to show.",
    ],
  },
  {
    id: "Build Up",
    heading: "Build Up, Do Not Tear Down",
    reference: "Romans 14:19&ndash;23",
    paragraphs: [
      "Paul now gathers the threads of the chapter into a positive and constructive command: &ldquo;Let us therefore make every effort to do what leads to peace and to mutual edification&rdquo; (v.19). The believer&rsquo;s energy in disputable matters is to be spent not in winning arguments but in pursuing peace and in building one another up. The word &lsquo;edification&rsquo; pictures the church as a building under construction; every word and action either lays a stone or knocks one loose. Paul calls the strong and the weak alike to be builders, not demolishers.",
      "He restates the danger in stark terms: &ldquo;Do not destroy the work of God for the sake of food. All food is clean, but it is wrong for a person to eat anything that causes someone else to stumble&rdquo; (vv.20). The phrase &lsquo;the work of God&rsquo; refers to the fellow believer, who is God&rsquo;s own handiwork and the object of his redeeming labor. To trample a brother&rsquo;s conscience over a question of diet is to set oneself, however unwittingly, against what God himself is building. Paul concedes again that all food is clean, yet insists that the clean thing becomes wrong when it becomes a snare to another.",
      "From this Paul commends a self-denying restraint as the path of love: &ldquo;It is better not to eat meat or drink wine or to do anything else that will cause your brother or sister to fall&rdquo; (v.21). The strong believer proves the maturity of his faith precisely by his willingness to forgo what he is free to enjoy. This is not the timidity of the weak conscience but the strength of love that counts the brother more important than the meal. Liberty held with a clenched fist becomes a weapon; liberty held with an open hand becomes a gift.",
      "Paul then offers a word that protects the conscience of the strong even as it restrains their conduct: &ldquo;So whatever you believe about these things keep between yourself and God. Blessed is the one who does not condemn himself by what he approves&rdquo; (v.22). The strong need not parade their freedom or press it upon others; they may hold their settled convictions before God in quiet confidence. And there is a deep blessedness in the person whose conscience is clear, who is not secretly accused by the very things he permits himself to do.",
      "The chapter then reaches its famous and weighty conclusion: &ldquo;But whoever has doubts is condemned if they eat, because their eating is not from faith; and everything that does not come from faith is sin&rdquo; (v.23). For the weak believer who eats while still doubting, the act is sin &mdash; not because the food is wrong, but because he has acted against his own conscience and apart from faith. The principle Paul lays down is vast in its reach: any deed done without the confidence of faith, against the voice of conscience, is sin, however permissible it might be for another.",
      "These closing verses establish a delicate threefold balance that the whole chapter has been building toward: the balance of conscience, liberty, and love. Conscience must never be violated, whether one&rsquo;s own or another&rsquo;s; the doubting believer must not act, and the strong believer must not push him to act. Liberty is real and is not to be surrendered as though the weak conscience were the true rule of faith. And love is supreme, willingly limiting the exercise of liberty so that the brother is built up rather than made to stumble.",
      "Romans 14 thus closes not with a rule for the menu but with a vision of the church as a community of servants who belong to one Lord, who will each answer to him, and who are therefore set free to bear with one another in love. The strong are not to despise; the weak are not to judge; and both are to pursue the things that make for peace. In a world quick to divide over secondary matters, this chapter remains a school of charity, teaching the people of God to hold their convictions with conscience, their freedoms with humility, and their brothers and sisters with love.",
    ],
  },
];

const videoItems = [
  { videoId: "Rm14kPx7VqB", title: "BibleProject - Book of Romans Overview" },
  { videoId: "Wk2NmTb8xZL", title: "Romans 14 - Welcome the Weak in Faith" },
  { videoId: "Lv7pZqM3dRy", title: "The Kingdom of God is Righteousness, Peace and Joy" },
  { videoId: "Aq9XnV5fH2T", title: "Conscience, Liberty and Love - Romans 14 Study" },
];

export default function Romans14GuidePage() {
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
            The Letter to the Romans, Chapter 14
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The strong and the weak in faith &mdash; Paul teaches a divided church to welcome one another without quarreling over disputable matters of food and days, to refuse the impulse to judge or despise a fellow servant of the Lord, and to let love limit liberty: &ldquo;The kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit.&rdquo;
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Romans 14 through visual teaching on welcoming the weak in faith without quarreling, refusing to judge a fellow servant of the Lord, and letting love govern the use of Christian liberty so that the church is built up in righteousness, peace, and joy.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Hold Liberty with Love</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 14 calls the people of God to live as servants of one Lord before whom every knee will bow &mdash; welcoming the weak without quarreling, refusing to judge or despise one another over disputable matters, and pursuing what leads to peace and mutual edification. Let the strong bear with the weak and the weak honor the strong, for everything that does not come from faith is sin, and love is greater than liberty.
          </p>
        </div>
      </main>
    </div>
  );
}
