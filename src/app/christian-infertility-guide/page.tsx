"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Grief of Barrenness",
  "Biblical Women Who Waited",
  "Theology of Children as Gift",
  "IVF and Reproductive Technology",
  "Adoption and the Calling",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Grief of Barrenness",
    heading: "The Grief of Barrenness",
    paragraphs: [
      "Infertility is one of the most acute griefs a person can experience &mdash; the grief of a child not yet born, of a family not yet formed, of a future repeatedly deferred. It is a grief that arrives not as a single catastrophic event but as an accumulation of monthly devastations, each negative test a small death, each new cycle a provisional hope that collapses into loss. The cumulative weight of this grief &mdash; carried largely in private, in the weeks between appointments and the nights after results &mdash; is often invisible to the people around the infertile couple, who see ordinary life continuing and cannot see the interior landscape of longing and loss.",
      "The particular cruelty of infertility grief lies in its cyclical structure. Most bereavements follow a trajectory: the acute phase gives way, gradually and unevenly, to a longer period of integration. Infertility grief is renewed every month, and every calendar event is a potential ambush. The pregnancy announcement from a friend who was not even trying. The baby shower that arrives in the middle of a failed cycle. The Mother&rsquo;s Day service at church, surrounded by photographs and tributes to mothers, with no acknowledgment of the women in the pews who are not mothers and are not mothers because something in their bodies will not cooperate. The church calendar, which celebrates birth and new life with theological intensity, can feel to the infertile couple like an extended public celebration of the thing they cannot have.",
      "The church is often the hardest place to be infertile. The theology of fruitfulness &mdash; Abraham&rsquo;s descendants as numerous as the stars, the command to be fruitful and multiply, the language of blessing that the tradition has often attached to children &mdash; can feel, to the couple who cannot conceive, like a continuous theological verdict on their condition. The community&rsquo;s life, organized around families with children, provides constant social comparison. The well-meaning but careless question &mdash; &ldquo;When are you two going to have kids?&rdquo; &mdash; is a question that lands differently when the answer is &ldquo;we have been trying for three years and have had two miscarriages and I cannot answer that question right now without falling apart.&rdquo;",
      "What faithful pastoral care looks like in this context begins with a single commitment: sit with the grief before trying to fix it. The infertile couple does not primarily need advice about specialists, or theological instruction about trusting God, or stories of miraculous conceptions, or the reminder that God has a plan. They need the ministry of presence &mdash; a community that can tolerate their sorrow without rushing it toward resolution, that can say &ldquo;I am so sorry&rdquo; and mean it, that can hold the space of unanswered longing without filling it with premature comfort. This is the hardest and most important thing the church can do, and it requires resisting almost every pastoral instinct toward helpfulness.",
      "Toxic positivity is one of the most common pastoral failures with infertile couples. &ldquo;God has a plan&rdquo; is true &mdash; and in the acute grief of another failed cycle, it can feel like a spiritual platitude that erases the legitimacy of the suffering. &ldquo;Just relax and it will happen&rdquo; is medically uninformed and pastorally unhelpful. &ldquo;At least you can still have fun trying&rdquo; is a form of cruelty dressed as encouragement. &ldquo;Have you considered adoption?&rdquo; &mdash; deployed in the first conversation, before the couple has processed where they are &mdash; communicates that the grief is a problem to be solved rather than a reality to be accompanied. The first need is lament. The space must be created for honest grief before anything else.",
      "The lament psalms give the infertile couple a vocabulary that the church should recover and offer. Psalm 42&rsquo;s &ldquo;My soul thirsts for God, for the living God. When can I go and meet with God?&rdquo; is the voice of someone who knows what it is to want something so deeply that the wanting is indistinguishable from physical thirst. Hannah&rsquo;s weeping at Shiloh &mdash; so intense that the priest thought she was drunk &mdash; is in the canon as an authorized form of prayer. God did not tell Hannah to stop crying and trust him more. He heard her cry and opened her womb. The hearing came first. The church that recovers lament as a legitimate spiritual practice has something real to offer the infertile couple that no amount of cheerful theology can provide.",
    ],
  },
  {
    id: "Biblical Women Who Waited",
    heading: "Biblical Women Who Waited",
    paragraphs: [
      "Scripture is remarkably attentive to the grief of barrenness. The women who waited &mdash; Sarah, Rebekah, Rachel, Hannah, Elizabeth &mdash; are not peripheral figures in the biblical narrative; they are the mothers of the people of God, the women through whom the covenant lineage passes. Their stories are told with attention to the emotional reality of barrenness: the shame, the anger, the desperate prayer, the long waiting, the unexpected gift. These are not stories that promise every infertile woman a biological child. They are stories that testify that God sees the grief of the barren and is not indifferent to it.",
      "Sarah is the first and fullest portrait of infertility in Scripture. For decades, the promise that Abraham would become the father of many nations coexisted with the reality that his wife was barren. The waiting was not passive; it was punctuated by Sarah&rsquo;s own attempts to solve the problem &mdash; offering her servant Hagar as a surrogate, a decision whose consequences rippled through generations. When the angel told Abraham that Sarah would conceive within a year, Sarah, listening behind the tent flap, laughed &mdash; not the laugh of faith but the laugh of a woman so long disappointed that the promise had become unbelievable. And yet she bore Isaac. The name means &ldquo;he laughs&rdquo; &mdash; her laughter of disbelief became a permanent reminder that God heard her and answered her at the moment when the hearing seemed most impossible.",
      "Rachel&rsquo;s story is the one that most directly names the emotional reality of infertility. Her sister Leah, the unloved wife, was fertile; Rachel, the beloved wife, was barren. The comparison was not abstract &mdash; it was the daily structure of her domestic life, watching her sister bear child after child while her own womb remained closed. Her cry to Jacob &mdash; &ldquo;Give me children, or I shall die!&rdquo; (Genesis 30:1) &mdash; is the most raw and direct expression of infertility grief in Scripture. Jacob&rsquo;s response was inadequate (&ldquo;Am I in the place of God, who has withheld from you the fruit of the womb?&rdquo;), which may itself be a biblical acknowledgment that there is no good response to this grief, that even the most loving partner cannot give what is being asked. Rachel eventually bore Joseph and then Benjamin &mdash; dying in childbirth with the second. Her story ends not in simple resolution but in continued complexity.",
      "Hannah&rsquo;s prayer at Shiloh in 1 Samuel 1 is the most extended and detailed portrait of infertility prayer in all of Scripture. Hannah went up to the temple year after year, and year after year she wept and would not eat. The text tells us that &ldquo;the Lord had closed her womb&rdquo; &mdash; which is a theological attribution that Hannah herself does not seem to find comforting. She prays with such intensity that Eli the priest, watching her lips move without sound, accuses her of being drunk. Her response is remarkable: &ldquo;I am a woman who is deeply troubled. I have not been drinking wine or beer; I was pouring out my soul to the Lord.&rdquo; Pouring out the soul &mdash; this is the language of lament taken to its limit, the complete emptying of the self before God. God heard her, and she conceived, and she kept the vow she had made: she gave Samuel back to the Lord. The song she sang in response (1 Samuel 2) became the template for Mary&rsquo;s Magnificat.",
      "Elizabeth and Zechariah in Luke 1 are introduced with a phrase that captures the particular cruelty of infertility in a religious community: &ldquo;both of them were righteous in the sight of God, observing all the Lord&rsquo;s commands and decrees blamelessly. But they had no children because Elizabeth was not able to conceive, and they were both very old&rdquo; (Luke 1:6&ndash;7). The juxtaposition is deliberate: their righteousness is not in question; their infertility is not a judgment on their faithfulness. The text then adds that Elizabeth had been &ldquo;looked down on&rdquo; because of her barrenness &mdash; carrying the social shame that the ancient world assigned to the childless. Into this situation of long-sustained grief, the angel arrives. John the Baptist, the forerunner of the Messiah, was the son of two old people who had waited their entire adult lives.",
      "What these stories do not say is as important as what they say. They do not promise that every barren woman will bear a child. Not every Hannah has a Samuel; not every Elizabeth has a John. The pattern these stories establish is not &ldquo;pray hard enough and you will conceive&rdquo; but something more foundational: God sees the grief of the barren. He is not absent from it. He is not indifferent to it. He does not require the infertile woman to perform peace with her situation before he draws near. He drew near to Sarah in her disbelieving laughter, to Rachel in her desperate demand, to Hannah in her weeping silence. The promise these stories make is not the promise of a child; it is the promise of a God who sees and who is near.",
    ],
  },
  {
    id: "Theology of Children as Gift",
    heading: "Theology of Children as Gift, Not Guarantee",
    paragraphs: [
      "Psalm 127:3 is the verse most frequently cited in Christian discussions of children: &ldquo;Children are a heritage from the Lord, the fruit of the womb a reward.&rdquo; The word &ldquo;heritage&rdquo; &mdash; in Hebrew, <em>nachalah</em> &mdash; means a possession received by inheritance, something given rather than earned or seized. The word &ldquo;reward&rdquo; is similarly graced: it is a gift from a giver, not an entitlement from a provider. The entire verse is in the mode of gift-language, not guarantee-language. A gift is given at the giver&rsquo;s discretion; the giving of a gift does not obligate the giver to give the same gift to everyone, nor does the withholding of a gift imply displeasure with the one who does not receive it. The absence of a gift does not mean the giver is displeased; it means the giver has given differently.",
      "The prosperity-gospel distortion that makes children a sign of God&rsquo;s favor and childlessness a sign of sin or insufficient faith is not merely theologically incorrect; it is a form of cruelty that adds spiritual condemnation to physical pain. Jesus addressed this distortion directly. When his disciples saw a man born blind and asked &ldquo;Who sinned, this man or his parents?&rdquo; &mdash; assuming that physical suffering must be a judgment for specific sin &mdash; Jesus answered: &ldquo;Neither this man nor his parents sinned&rdquo; (John 9:3). The suffering is not a verdict. The infertility is not a punishment. The closed womb is not God&rsquo;s assessment of the couple&rsquo;s worth or faith. Jesus refused the equation of suffering with divine displeasure, and the church must refuse it too.",
      "The Reformed tradition has insisted on the distinction between common grace &mdash; the goods that God gives to all people, without regard to their faith or merit &mdash; and saving grace, the particular gift of redemption given to the elect. Children are a common grace, given to the faithful and the faithless alike, withheld from the faithful and the faithless alike. This is not a comfortable distinction, but it is a theologically honest one. The woman who is infertile while her neighbor who does not believe conceives easily is not experiencing a divine judgment; she is experiencing the mystery of a world in which common grace is distributed without reference to merit, and in which the apparent inequities of creation will only be resolved in the age to come.",
      "The goodness of a life without biological children must be recovered by the church. The celibate vocation &mdash; chosen by Paul, by Jesus himself, by generations of monks and nuns and missionaries who gave themselves wholly to the work of the kingdom &mdash; is a life without children that the tradition has always recognized as complete, holy, and rich. The spiritual parenthood that Jesus names when he says &ldquo;Whoever does the will of God is my brother and sister and mother&rdquo; (Mark 3:35) is a real form of parenthood, not a consolation prize. The person who has poured themselves into teaching, mentoring, discipling, adopting, fostering, or simply loving the children of others has entered a form of parental love that Scripture honors. Childlessness is not a lesser life; it is a different form of the same calling to love and nurture.",
      "The church&rsquo;s own theology of the family has been distorted by cultural forces that equate family primarily with the nuclear household of two parents and biological children. The New Testament vision of family is far more expansive: the community of believers is itself described in familial terms, with God as Father, believers as brothers and sisters, and the household of faith as the primary community of belonging. The person without biological children who is deeply embedded in a community of faith is not without family; they are in a family that Paul describes as the household of God (Ephesians 2:19). This theological reality does not make the grief of infertility go away, but it does mean that the infertile couple need not experience themselves as outside the family of God &mdash; they are inside it, in the most fundamental sense.",
      "Theological honesty also requires saying what the tradition has sometimes been afraid to say: God does not always give what is most desired, and faithfulness does not always produce the outcomes we pray for. The mystery of divine providence &mdash; the fact that God is working all things for the good of those who love him (Romans 8:28) &mdash; does not mean that every desired good is granted. Romans 8 says God is working; it does not say the working always feels good or produces the specific thing requested. The infertile couple who has prayed faithfully, lived faithfully, and waited faithfully &mdash; and still has not conceived &mdash; is not a couple whose faith has failed. They are a couple who is living in the mystery that the tradition has always acknowledged: that God&rsquo;s ways are higher than our ways (Isaiah 55:9) and that the resolution of the mystery is not always given in this age.",
    ],
  },
  {
    id: "IVF and Reproductive Technology",
    heading: "IVF and Reproductive Technology: Christian Ethics",
    paragraphs: [
      "The ethics of assisted reproduction are among the most complex and pastorally important questions facing Christian couples today, and they are questions that the church has often failed to engage with either theological rigor or pastoral compassion. The desire for a child is one of the most legitimate and beautiful human desires &mdash; and the suffering of infertility is real. At the same time, the technologies now available to address infertility raise genuine ethical questions that do not have easy answers and that Christians with equally serious theological commitments have answered differently. The couple walking through infertility treatment deserves to have these questions named honestly, not avoided for fear of discomfort.",
      "In vitro fertilization (IVF) is the central ethical flashpoint in this conversation. The standard IVF protocol involves stimulating the ovaries to produce multiple eggs, fertilizing multiple eggs with sperm in the laboratory, and transferring one or more resulting embryos to the uterus. The ethical question is: what is the moral status of the embryos that are not transferred? Standard IVF protocols typically create more embryos than are used in any given transfer cycle. The remaining embryos can be frozen indefinitely, donated to another couple, donated to research, or discarded. For Christians who hold that human life begins at fertilization &mdash; a view affirmed by many evangelicals, Catholics, and Orthodox Christians on theological grounds &mdash; each of these embryos is a human person, and the question of what happens to them is not a logistical question but a moral one.",
      "The options for unused embryos are each morally serious. Freezing embryos indefinitely defers the ethical question without resolving it; it also subjects embryos to the risk of damage during freezing and thawing, and leaves them in an indefinite liminal state that may never be resolved. Discarding embryos, for those who hold that they are persons, is simply wrong. Donating embryos to research involves using them as means rather than ends, which violates the Kantian-and-Christian principle that persons are not to be used for others&rsquo; benefit. Embryo adoption &mdash; donating unused embryos to another couple, who then carries and raises the child &mdash; is the option most consistent with a high view of embryo personhood, but it requires the original couple to relinquish children they have created.",
      "Less ethically fraught options exist and should be explored first by Christian couples. Intrauterine insemination (IUI) involves placing sperm directly into the uterus at the time of ovulation without creating embryos outside the body; it raises none of the embryo-status questions that IVF raises, though its success rates are lower. Ovulation induction &mdash; using medication to stimulate regular ovulation in women who do not ovulate consistently &mdash; similarly avoids the embryo question. Surgery to correct physical causes of infertility (endometriosis, blocked tubes, varicoceles in men) may restore natural fertility without any laboratory intervention. Natural-cycle IVF &mdash; working with a single egg in a natural cycle, creating only one embryo at a time &mdash; is the form of IVF most consistent with a high view of embryo personhood, though it is less commonly offered and has lower success rates per cycle.",
      "The range of Christian ethical positions on IVF is genuinely wide. The Catholic Church, applying natural law principles, holds that IVF is impermissible under any circumstances &mdash; because it separates procreation from the conjugal act and involves the production of embryos outside the natural process. Many evangelical bioethicists hold that IVF can be morally acceptable if all embryos created are transferred and treated as persons, and if the protocol is modified to avoid the creation of surplus embryos. Protestant pragmatism often focuses less on the procedure itself and more on the specific decisions made within it &mdash; treating each embryo as a person, committing to transfer all embryos created, and refusing to donate to research. The most important thing is not which position a couple holds but that they have thought it through carefully, preferably with a pastor or Christian bioethicist, before beginning treatment.",
      "The emotional and relational cost of infertility treatment must also be named. IVF is physically demanding for the woman undergoing it: injections, monitoring appointments, egg retrieval surgery, and the physical experience of transfer and the two-week wait before testing. It is financially costly &mdash; a single IVF cycle can cost fifteen thousand dollars or more, with no guarantee of success, and insurance coverage is limited and inconsistent. And it is emotionally consuming in ways that affect marriages, friendships, and spiritual life. The couple who begins IVF treatment should have a community of support around them, and should have agreed in advance &mdash; as far as they are able &mdash; about how many cycles they will attempt, what they will do with surplus embryos, and when they will stop. These conversations are difficult before treatment begins and nearly impossible in its midst.",
    ],
  },
  {
    id: "Adoption and the Calling",
    heading: "Adoption and the Calling",
    paragraphs: [
      "Adoption is a theological act before it is a practical decision. The letter to the Ephesians opens with one of the most concentrated passages of Trinitarian theology in the New Testament, and in that passage Paul reaches for the language of adoption to describe what God has done for believers: &ldquo;He predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will&rdquo; (Ephesians 1:5). The word is <em>huiothesia</em> &mdash; the deliberate, legal act of adopting someone as a son or daughter with full inheritance rights. This is the metaphor Paul chooses for the most intimate and decisive act of divine grace: God adopts sinners. To adopt a child is to enact, in the structure of a family, the same movement that God made toward us in Christ &mdash; choosing someone who was not born to you, bringing them into your household, giving them your name, treating them as fully your own.",
      "Domestic adoption in the United States is a complex and variable process. Couples may pursue private domestic adoption through an agency or attorney, working with birth mothers who have chosen adoption for their child. The process typically involves a home study, a waiting period whose length is unpredictable, and the significant emotional risk of a match that falls through when a birth mother changes her decision. Foster-to-adopt is another domestic pathway: becoming a licensed foster family with the intention to adopt if a child in your care becomes legally available. This path requires the willingness to care for children who may be reunited with their birth families &mdash; an emotionally costly possibility that not every family is equipped to navigate. The cost of domestic adoption varies widely, from relatively modest for foster-to-adopt to substantial for private agency adoption.",
      "International adoption, once a significant pathway for American families, has been severely restricted over the past two decades. Most of the countries that formerly had active international adoption programs have closed or significantly curtailed them &mdash; China, Russia, Guatemala, Ethiopia, South Korea &mdash; in response to concerns about corruption, trafficking, and the prioritization of international adoption over domestic placement. Intercountry adoption through the Hague Convention process remains possible with a shrinking list of countries, but waiting times are long, costs are high, and the process is unpredictable. Families considering international adoption should work only with Hague-accredited agencies and should be prepared for a process that may take several years and encounter multiple obstacles.",
      "Embryo adoption &mdash; the adoption of frozen embryos donated by another couple &mdash; is a relatively new option that allows a woman to carry and give birth to a child who is not genetically related to her or her husband. For couples who hold a high view of embryo personhood, embryo adoption is also an act of rescue: giving a transferred embryo the chance at life it might not otherwise have. The Snowflakes program at Nightlight Christian Adoptions is the longest-established embryo adoption agency in the United States. Embryo adoption is medically similar to a frozen embryo transfer in IVF; costs are typically lower than domestic infant adoption. It raises its own complex questions about genetic identity and disclosure, which adoptive families should think through carefully.",
      "The most important pastoral caution about adoption is this: it is not a cure for infertility grief, and it should not be pursued until that grief has been substantially processed. The couple who rushes to adoption as a way of resolving the pain of infertility is the couple who risks bringing unprocessed grief into the adoption relationship &mdash; unconsciously treating the adopted child as the replacement for the biological child they did not have. Adopted children deserve to be adopted for who they are, not as substitutes for someone else. The grief of infertility and the calling of adoption are real and good things, but they are separate things, and they do their best work when they are addressed in sequence rather than simultaneously.",
      "The church has a critical role in supporting adoptive families that goes beyond the initial celebration. Adoption always begins with loss: the child who is adopted has been relinquished by a birth family, and that relinquishment is a wound that does not disappear because the new family is loving. Adoptive parents navigate questions of disclosure, identity, search, and reunion that biological parents do not face. The church that understands this &mdash; that surrounds adoptive families not just with congratulations at the placement but with sustained, informed support through the years of parenting that follow &mdash; is the church that has understood what it means to be the family of God. We are all adopted. The ones who adopt among us are enacting the gospel in the structure of their households.",
    ],
  },
];

const videoItems = [
  { videoId: "Y7r3M5aINno", title: "When God Closes the Womb — A Christian Response to Infertility" },
  { videoId: "NeR5tBJsMp4", title: "Hannah&rsquo;s Prayer — Infertility and Faith" },
  { videoId: "gfU1yMcj9F8", title: "Adoption and the Gospel — Why Christians Adopt" },
];

export default function ChristianInfertilityGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Family
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Infertility
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Infertility and the Christian faith &mdash; the grief of barrenness, biblical women who waited, the theology of children as gift not guarantee, the ethics of IVF and reproductive technology, the calling of adoption, and finding hope when the answer is no.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;He gives the barren woman a home, making her the joyful mother of children. Praise the Lord!&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 113:9</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(13, 148, 136, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }} dangerouslySetInnerHTML={{ __html: video.title }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>God Sees the Grief of the Barren</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Sarah laughed at the promise and became the mother of nations. Hannah wept at the temple and bore the prophet Samuel. Elizabeth bore John in old age, after a lifetime of waiting. These stories do not guarantee a child; they guarantee a God who is near to the brokenhearted, who sees every grief, who is not absent from the months of waiting and the years of longing. Whatever form your family takes &mdash; biological, adopted, spiritual &mdash; you are held by the Father who predestined us all for adoption through Jesus Christ.</p>
        </div>
      </main>
    </div>
  );
}
