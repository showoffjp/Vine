"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Be Holy as I Am Holy",
  "Love Your Neighbor",
  "Care for the Poor",
  "Honest Dealings and Justice",
  "Application",
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
    heading: "Overview of Leviticus 19",
    reference: "Leviticus 19:1&ndash;37",
    paragraphs: [
      "Leviticus 19 stands at the moral and theological center of the book of Leviticus and, many scholars argue, of the entire Torah. It is often called the &ldquo;Holiness Code chapter&rdquo; because it opens with the foundational principle that governs everything that follows: &ldquo;You shall be holy, for I the LORD your God am holy&rdquo; (19:2). This command is not a piece of ritual regulation; it is a comprehensive moral vision, rooted in the character of God himself, that extends from the innermost attitudes of the heart to the most concrete details of commercial life, agricultural practice, and social relationship.",
      "The chapter is remarkable for the breadth of its concerns. Within its thirty-seven verses, Leviticus 19 moves from the reverence due to parents (v. 3) to the keeping of the Sabbath (v. 3), from the prohibition of idolatry (v. 4) to the proper handling of the peace offering (vv. 5&ndash;8), from the obligation to leave gleanings in the harvest for the poor and the sojourner (vv. 9&ndash;10) to the prohibition of theft, lying, and false swearing (vv. 11&ndash;12). It forbids oppression of workers (v. 13), the cursing of the deaf or tripping of the blind (v. 14), partiality in judgment (v. 15), slander (v. 16), and bearing a grudge (v. 18).",
      "At the chapter&rsquo;s heart stands what Jesus himself will cite as the second great commandment: &ldquo;You shall love your neighbor as yourself: I am the LORD&rdquo; (19:18). This is not isolated from the rest of the chapter; it is the climax of a long series of practical commands about how Israelites are to treat one another. And then, later in the chapter, the command is extended beyond the boundary of ethnic Israel to embrace the sojourner &mdash; the resident alien living among God&rsquo;s people: &ldquo;You shall love him as yourself, for you were sojourners in the land of Egypt: I am the LORD your God&rdquo; (19:34).",
      "What holds the chapter&rsquo;s diverse contents together is a phrase that recurs like a refrain throughout: &ldquo;I am the LORD&rdquo; or &ldquo;I am the LORD your God.&rdquo; This divine self-identification appears more than a dozen times in the chapter, anchoring each command in the character and claim of God himself. Israel is not to behave in these ways because good behavior produces good outcomes &mdash; though it does &mdash; or because these norms have been worked out by human reason &mdash; though reason can support them. Israel is to behave in these ways because the LORD their God is who he is, and because their calling is to reflect his character in their common life.",
      "The chapter&rsquo;s structure is loosely organized into subsections, but the overall impression is of a comprehensive moral vision flowing in all directions from the central command to holiness. The various commandments are not a random collection; they cover the full range of human relationships &mdash; with God (worship, Sabbath), with parents (reverence), with workers (fair wages), with the poor (gleaning laws), with the disabled (protection), with the vulnerable (just judgment), with enemies (no revenge), and with foreigners (love of the sojourner). A community that lived by Leviticus 19 would look profoundly different from any community the ancient world, or the modern world, has yet produced.",
      "The apostle Paul&rsquo;s summary in Romans 13:10 that &ldquo;love is the fulfillment of the law&rdquo; finds its Old Testament grounding precisely in chapters like Leviticus 19. The love commanded here is not sentiment or feeling; it is a concrete pattern of conduct that protects the vulnerable, deals honestly with all, refuses to profit at the expense of the weak, and extends the circle of moral concern beyond every natural boundary. When Jesus summarizes the law as love for God and love for neighbor, he is drawing on the very vocabulary and logic of Leviticus 19.",
    ],
  },
  {
    id: "Be Holy as I Am Holy",
    heading: "Be Holy as I Am Holy",
    reference: "Leviticus 19:1&ndash;4",
    paragraphs: [
      "The opening verses of Leviticus 19 establish the theological foundation that governs everything else in the chapter. The LORD commands Moses to speak to all the congregation of Israel &mdash; significantly, not just to the priests but to the whole people &mdash; and to declare: &ldquo;You shall be holy, for I the LORD your God am holy&rdquo; (19:2). Holiness here is not primarily a cultic category, a matter of ritual purity and priestly qualification. It is a moral and relational category, grounded in the very being of God and extended as a vocation to the entire covenant community.",
      "The logic of the command is important: Israel is to be holy because God is holy. Their holiness is to be a reflection of, a participation in, an imitation of his holiness. This is what theologians call the &ldquo;imitatio Dei&rdquo; &mdash; the imitation of God. In the ancient Near East, the gods were typically remote, capricious, and concerned primarily with their own comfort and honor. The God of Israel is different: he is morally holy, and he summons his people to share in that moral holiness as the defining characteristic of their common life. To be holy is to be set apart &mdash; but set apart in the direction of God, not away from the world.",
      "The first practical commands that follow from this call to holiness are revealing in their content: &ldquo;Every one of you shall revere his mother and his father, and you shall keep my Sabbaths: I am the LORD your God&rdquo; (19:3). The command begins not with a ritual act but with the most fundamental human relationship &mdash; the family. Reverence for parents is not merely a matter of social decorum; it reflects the proper ordering of human life within the structures of authority and care that God has built into creation. And the keeping of Sabbath is immediately tied to the remembrance of the LORD &mdash; the weekly rhythm of rest and worship that keeps Israel oriented toward God rather than toward the endless demands of production and acquisition.",
      "The prohibition of idolatry follows: &ldquo;Do not turn to idols or make for yourselves any gods of cast metal: I am the LORD your God&rdquo; (19:4). In the ancient Near East, idols were not merely false representations of true deities; they were understood to embody divine power and to be subject to human manipulation through ritual. The prohibition of idolatry is therefore not just a theological claim about the uniqueness of the LORD; it is a rejection of the human attempt to manage and control the divine, to use religion as a technique for securing divine favor rather than submitting to the moral demands of a living, holy God.",
      "The recurring phrase &ldquo;I am the LORD your God&rdquo; is the theological linchpin of the entire chapter. It appears first in verse 2, immediately in the call to holiness, and then recurs throughout like a refrain. This phrase is not merely a formal identification; it is a reference to the entire covenant relationship established at the exodus. The LORD who is holy and who commands holiness is the same LORD who brought Israel out of Egypt, who delivered them from slavery, who bound himself to them in covenant. Their calling to holiness is not an arbitrary demand; it is the moral content of the covenant relationship they have received.",
      "The New Testament takes up this same theme with remarkable directness. Peter, writing to dispersed Jewish and Gentile Christians, quotes Leviticus 19:2: &ldquo;But as he who called you is holy, you also be holy in all your conduct, since it is written, &lsquo;You shall be holy, for I am holy&rsquo;&rdquo; (1 Peter 1:15&ndash;16). The same command, the same logic, the same foundation: the holy character of God is the ground and pattern of the holy life to which his people are called. What Leviticus 19 declared to the congregation of Israel at Sinai, 1 Peter declares to the new covenant community scattered throughout the Roman empire.",
    ],
  },
  {
    id: "Love Your Neighbor",
    heading: "Love Your Neighbor as Yourself",
    reference: "Leviticus 19:11&ndash;18 &amp; 19:33&ndash;34",
    paragraphs: [
      "The commandment at the climax of Leviticus 19:18 &mdash; &ldquo;You shall love your neighbor as yourself: I am the LORD&rdquo; &mdash; is one of the most consequential sentences in the history of human ethics and theology. It appears at the end of a passage (vv. 11&ndash;18) that works through a series of concrete prohibitions and requirements describing how Israelites are to treat one another, and it serves as the summary and culmination of that entire series. Love for the neighbor is not an abstract ideal added on to the practical regulations; it is the animating principle from which they flow and toward which they point.",
      "The preceding verses spell out what love for neighbor looks like in practice. Verse 11: &ldquo;You shall not steal; you shall not deal falsely; you shall not lie to one another.&rdquo; Verse 12: &ldquo;You shall not swear by my name falsely, and so profane the name of your God: I am the LORD.&rdquo; Verse 13: &ldquo;You shall not oppress your neighbor or rob him. The wages of a hired worker shall not remain with you all night until the morning.&rdquo; Each of these commands addresses a specific way in which a person in power can take advantage of a less powerful neighbor &mdash; through theft, deception, false oaths, oppression, or the withholding of wages. Love for neighbor, in the Levitical understanding, is first and foremost the refusal to exploit.",
      "Verse 14 extends the protection to those who cannot defend themselves: &ldquo;You shall not curse the deaf or put a stumbling block before the blind, but you shall fear your God: I am the LORD.&rdquo; The deaf person cannot hear the curse being spoken against them; the blind person cannot see the obstacle placed in their path. These commands therefore address not just the act itself but the heart attitude behind it &mdash; the willingness to harm someone who cannot retaliate or defend themselves. The fear of God is explicitly invoked as the motive: you may escape human accountability for such acts, but you will not escape God&rsquo;s.",
      "Verses 17 and 18 get to the innermost springs of the conduct being regulated: &ldquo;You shall not hate your brother in your heart, but you shall reason frankly with your neighbor, lest you incur sin because of him. You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the LORD.&rdquo; The law reaches past the external act to the internal disposition. It forbids not just the act of revenge but the bearing of a grudge &mdash; the long-held internal resentment that nurses the wounds of past offenses and keeps them from healing. And it commands not just the absence of hatred but the positive presence of love.",
      "The remarkable extension of the neighbor command appears in verses 33 and 34: &ldquo;When a stranger sojourns with you in your land, you shall not do him wrong. You shall treat the stranger who sojourns with you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt: I am the LORD your God.&rdquo; The sojourner &mdash; the resident alien, the immigrant, the person living far from home among a people not their own &mdash; is to be treated with the same love as the fellow Israelite. The motivation given is explicitly historical and experiential: Israel knows what it is to be a sojourner, to live at the mercy of others, to depend on the kindness of those who have the power to exploit.",
      "When Jesus is asked by a lawyer which is the great commandment in the Law, he answers by combining Deuteronomy 6:5 (love for God) with Leviticus 19:18 (love for neighbor) and declares that &ldquo;on these two commandments depend all the Law and the Prophets&rdquo; (Matthew 22:37&ndash;40). The lawyer then tries to limit the scope of the neighbor command by asking &ldquo;And who is my neighbor?&rdquo; &mdash; and Jesus answers with the parable of the Good Samaritan, which extends the circle of neighbor-love across the deepest ethnic and religious boundary of his culture. What Leviticus 19 had already hinted at in the command to love the sojourner, Jesus makes explicit: the neighbor is whoever is in front of you, whatever the boundary that separates you.",
    ],
  },
  {
    id: "Care for the Poor",
    heading: "Care for the Poor and Vulnerable",
    reference: "Leviticus 19:9&ndash;10 &amp; 19:13&ndash;15",
    paragraphs: [
      "Among the most distinctive and practically consequential commands in Leviticus 19 are those that govern the relationship between landowners and the poor. The gleaning laws of verses 9 and 10 are paradigmatic: &ldquo;When you reap the harvest of your land, you shall not reap your field right up to its edge, neither shall you gather the gleanings after your harvest. And you shall not strip your vineyard bare, neither shall you gather the fallen grapes of your vineyard. You shall leave them for the poor and for the sojourner: I am the LORD your God.&rdquo;",
      "The gleaning laws are a remarkable piece of social legislation because they do not simply mandate charity &mdash; they restructure the very practice of agriculture to build care for the poor into the productive process itself. The landowner does not harvest everything and then decide whether to give some of it away; the landowner does not harvest the edges of the field or pick up what falls, because those portions belong, by God&rsquo;s design, to the poor and the sojourner. Poverty relief is not an optional addition to the economic system; it is woven into the fabric of how the land is to be worked.",
      "The famous story of Ruth and Boaz in the book of Ruth shows this system at work. Ruth, a Moabite widow &mdash; doubly vulnerable as a foreigner and as a woman without a male protector &mdash; gleans in Boaz&rsquo;s fields in accordance with the provision of Leviticus 19. Boaz, seeing her situation, goes beyond the minimum requirement and instructs his workers to leave extra grain for her deliberately. The gleaning law creates the structural possibility for Ruth&rsquo;s survival; Boaz&rsquo;s generous heart makes the most of that possibility. The story illustrates the intended dynamic: the law provides a floor, and the love of neighbor lifts people above it.",
      "The care for workers commanded in verse 13 is equally direct: &ldquo;The wages of a hired worker shall not remain with you all night until the morning.&rdquo; In the ancient world, day laborers worked for a daily wage that was often the difference between eating and going hungry that night. To withhold wages overnight was not merely a breach of contract; it was a form of violence against someone who depended on immediate payment for survival. The command assumes the vulnerability of the worker and places the obligation squarely on the employer: pay what you owe, when you owe it.",
      "Verse 15 addresses the corruption of justice: &ldquo;You shall do no injustice in court. You shall not be partial to the poor or defer to the great, but in righteousness shall you judge your neighbor.&rdquo; The command is directed against two opposite forms of partiality: favoring the poor because of sympathy for their condition, or favoring the rich and powerful because of their influence and the benefits they can confer. True justice is blind to social position and applies the same standard to all. The judge who bends the rules for the poor man out of pity and the judge who bends them for the rich man out of fear or greed are both committing the same sin against justice.",
      "Taken together, these commands create a picture of a community whose entire economic and legal life has been structured around the protection of those who are most vulnerable to exploitation. The poor gleaner, the day laborer, the person without advocates in court &mdash; each of these is the object of specific divine concern, backed by the authority of the God who declares &ldquo;I am the LORD.&rdquo; The repeated divine identification is the ultimate guarantee: these commands are not suggestions or ideals to aspire toward; they are the will of the God who sees every injustice and who will hold his people accountable for how they treat the least among them.",
    ],
  },
  {
    id: "Honest Dealings and Justice",
    heading: "Honest Dealings and Justice",
    reference: "Leviticus 19:11&ndash;16 &amp; 19:35&ndash;37",
    paragraphs: [
      "Leviticus 19 devotes substantial attention to the ethics of commerce, speech, and legal process &mdash; the practical mechanisms by which a community either builds trust or destroys it. The commands in this area are specific, concrete, and unsparing. They begin with the three prohibitions of verse 11: &ldquo;You shall not steal; you shall not deal falsely; you shall not lie to one another.&rdquo; These three form a progression: stealing is the taking of what belongs to another; dealing falsely is the broader pattern of deceptive conduct in business and social relationship; lying to one another is the verbal act by which deception is perpetrated. All three are forbidden under the same authority: &ldquo;I am the LORD.&rdquo;",
      "Verse 12 adds the prohibition of false swearing: &ldquo;You shall not swear by my name falsely, and so profane the name of your God.&rdquo; In the ancient world, oaths sworn in the name of a deity were the most solemn and binding form of commitment available. To swear falsely in the name of the LORD was therefore a twofold sin: it was a violation of the trust of the person to whom the oath was made, and it was an act of desecration against the holy name of God himself. The name of the LORD was being recruited into the service of a lie. This, Leviticus says, is the profanation of the holy &mdash; using the sacred as a cover for the corrupt.",
      "Verse 16 addresses the life of speech more broadly: &ldquo;You shall not go around as a slanderer among your people, and you shall not stand up against the life of your neighbor: I am the LORD.&rdquo; Slander in the ancient world was not merely a social nuisance; it could destroy reputations, break families, incite violence, and ruin livelihoods. The command against going around as a slanderer is a command to take seriously the power of speech to destroy, and to refuse to be the instrument of that destruction. And the final clause &mdash; &ldquo;you shall not stand up against the life of your neighbor&rdquo; &mdash; may refer to bearing false witness in legal proceedings, which in capital cases could be a matter of life and death.",
      "The chapter concludes with a return to commercial honesty in verses 35 and 36: &ldquo;You shall do no wrong in judgment, in measures of length or weight or quantity. You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt.&rdquo; The use of false weights and measures was a perennial form of commercial fraud in the ancient Near East &mdash; the merchant who used one set of weights when buying (heavier, so he appeared to receive less) and another when selling (lighter, so his customers appeared to receive more) was a common figure in prophetic condemnation. Leviticus demands that the weights themselves be just &mdash; that the instruments of commercial exchange be reliable, that the measuring system be something a buyer can trust.",
      "The grounding of this commercial ethics in the exodus is not incidental: &ldquo;I am the LORD your God, who brought you out of the land of Egypt.&rdquo; Egypt was precisely the place where Israel had been exploited &mdash; where their labor was extracted without fair compensation, where the powerful set the terms and the powerless had no recourse. The community that God has delivered out of that system is not to reproduce it. They have been on the receiving end of exploitation; they know its degradation and its injustice. The very memory of Egypt is the moral argument for honest weights and just measures.",
      "These commands together describe a community in which trust is the foundation of every transaction. When weights are just, commerce is possible without the need for constant suspicion and self-protection. When oaths are kept and speech is honest, relationships can be built on what people say rather than on the calculation of what they might be concealing. When legal judgments are just, the community has a mechanism for resolving disputes that does not simply reward the powerful. The holiness to which Israel is called is not a retreat from the marketplace and the courthouse; it is the transformation of those spaces by the character of the holy God who inhabits them.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Leviticus 19 Today",
    reference: "Leviticus 19 &mdash; For the Life of the Church",
    paragraphs: [
      "Leviticus 19 addresses the church with an authority and an urgency that its reputation as an obscure collection of ancient ritual regulations entirely fails to prepare one for. This is not a chapter about the Levitical priesthood or the sacrificial system. It is a chapter about how a community of God&rsquo;s people is to live together &mdash; how they are to treat their workers, their neighbors, their poor, their elderly, their disabled, their foreigners. Its central command, &ldquo;Be holy, for I the LORD your God am holy,&rdquo; is quoted in the New Testament as binding on the church (1 Peter 1:15&ndash;16), and its summary commandment, &ldquo;Love your neighbor as yourself,&rdquo; is cited by Jesus as one of the two great commandments on which all the Law and the Prophets depend.",
      "The gleaning laws of verses 9 and 10 have a direct application to the question of how Christians and Christian communities relate to poverty. The structure of the gleaning law is instructive: it does not call simply for charity &mdash; for the voluntary giving of surplus to those in need. It calls for a restructuring of productive activity so that the poor have access to its fruits as a matter of right, not of beneficence. The modern equivalent is not immediately obvious, but the principle is: how can the economic activities of individual Christians and Christian institutions be structured so that the poor are not merely the recipients of what is left over, but participants in the productive life of the community?",
      "The protection of the disabled in verse 14 &mdash; the prohibition of cursing the deaf or tripping the blind &mdash; speaks to a broader principle about power and vulnerability. Those who cannot defend themselves, who cannot perceive the harm being done to them, are precisely those whom Leviticus 19 places under special divine protection. The fear of God is invoked as the motive: the wrong you do to the vulnerable person who cannot see or hear you is seen and heard by the God who will hold you accountable. For the church, this translates into a particular attention to those who are most vulnerable to exploitation &mdash; the elderly, the disabled, the isolated, the mentally ill, the immigrant &mdash; and a willingness to advocate for them precisely because they cannot advocate for themselves.",
      "The command against bearing grudges and the positive command to love the neighbor in verse 18 speak directly to the life of the local church, where conflicts between members are inevitable and the temptation to nurse grievances is ever-present. The verse commands not merely the absence of revenge &mdash; the refusal to take active steps to harm the person who has wronged you &mdash; but the absence of the grudge itself, the long-held inner resentment. And it holds these things together with the positive command: &ldquo;You shall love your neighbor as yourself.&rdquo; The church that takes this seriously will develop genuine practices of conflict resolution, of speaking frankly to one another, of seeking reconciliation rather than allowing wounds to fester unaddressed.",
      "The extension of the neighbor command to the sojourner in verses 33 and 34 has obvious implications for how Christian communities relate to immigrants, refugees, and those from different cultural backgrounds. The motivation Leviticus gives &mdash; &ldquo;for you were sojourners in the land of Egypt&rdquo; &mdash; finds its New Testament equivalent in the reminder that all Christians were once &ldquo;strangers and aliens&rdquo; (Ephesians 2:19), brought near by the blood of Christ. Those who know what it is to have been outsiders, made insiders by grace rather than merit, have a particular reason to extend that welcome to others.",
      "The commands about honest weights and just balances in verses 35 and 36 challenge the church on the question of commercial integrity. In a culture where creative accounting, misleading advertising, and the exploitation of legal loopholes are widely practiced and sometimes celebrated as business acumen, the demand for &ldquo;just balances&rdquo; is countercultural in the deepest sense. Christian businesspeople are called not merely to avoid outright fraud but to conduct their affairs in such a way that the people they deal with can trust the instruments of exchange &mdash; that the price stated is the price charged, that the product delivered is the product advertised, that the wage agreed is the wage paid. The holiness of God reaches into the marketplace and demands that it be a place of truth.",
    ],
  },
];

const videoItems = [
  { videoId: "HzJyK7NTAIY", title: "BibleProject - Overview of Leviticus" },
  { videoId: "BkOtu-MKaYE", title: "Leviticus 19 - The Holiness Code Explained" },
  { videoId: "XzqCeR8TYMY", title: "Love Your Neighbor as Yourself - Leviticus 19:18" },
  { videoId: "S_CATVrmCvg", title: "The Sojourner and the Stranger in the Old Testament" },
];

export default function Leviticus19GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Leviticus 19 &mdash; The Holiness Code
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Be holy, for I the LORD your God am holy&rdquo; &mdash; the chapter that contains the command to love your neighbor as yourself (v. 18), care for the poor through gleaning laws, protection of the vulnerable, honest dealings in commerce, and love of the sojourner (v. 34): the moral heart of the Mosaic law.
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
              Deepen your study of Leviticus 19 through these video teachings on the Holiness Code, love for neighbor, care for the poor, and the command to love the sojourner as yourself.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Shall Love Your Neighbor as Yourself</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Leviticus 19 reveals that holiness is never merely private or cultic &mdash; it is the pattern of an entire community&rsquo;s life, shaped by the character of the holy God who declares again and again: &ldquo;I am the LORD your God.&rdquo; From the gleaning laws that protect the poor to the command to love the sojourner as yourself, from honest weights to just judgments, this chapter is the Old Testament foundation for Jesus&rsquo; second great commandment. The community that lives by Leviticus 19 looks like its holy God.
          </p>
        </div>
      </main>
    </div>
  );
}
