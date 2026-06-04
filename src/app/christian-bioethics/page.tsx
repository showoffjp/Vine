"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "foundations" | "issues" | "endoflife" | "emerging" | "videos";

const FOUNDATION_ITEMS = [
  {
    id: "imagodei",
    title: "The Image of God as Bioethical Foundation",
    body: "Genesis 1:26-28 establishes the cornerstone of Christian bioethics: every human being, from conception to natural death, bears the image of God. This is not a conditional status earned by capacity, achievement, or viability — it is an ontological fact about what every human being is. This means: a fertilized embryo, a person in a persistent vegetative state, a person with severe cognitive disability, an elderly person with dementia — all bear the image of God with equal dignity. Christian bioethics rejects any framework that assigns differential human value based on capacity, utility, or quality of life.",
  },
  {
    id: "sanctity",
    title: "The Sanctity of Human Life",
    body: "The Christian tradition has historically affirmed the sanctity of human life — that human life is inherently sacred and not to be taken without profound justification. Genesis 9:6 grounds the prohibition on murder in the image: 'for in the image of God has God made mankind.' The commandment against murder (Exodus 20:13) has been extended in Christian ethics to cover all unjustified killing of human beings. The Didache (c. 100 AD), one of the earliest Christian documents, explicitly condemned abortion and infanticide — practices common in the Roman world. This was not a political position but a theological one.",
  },
  {
    id: "embodiment",
    title: "The Theology of Embodiment",
    body: "Christian theology takes the body seriously. The incarnation (God becoming flesh), the bodily resurrection of Christ, and the promised resurrection of the dead all declare that bodies are not prisons from which souls escape but essential to human personhood. This has direct bioethical implications: our bodies are not merely our property to do with as we wish. They are temples of the Holy Spirit (1 Corinthians 6:19-20). Medical interventions that heal and restore bodies participate in the restoration of creation. Interventions that treat bodies as mere instruments for preferences or engineering projects require careful scrutiny.",
  },
  {
    id: "suffering",
    title: "The Meaning of Suffering and Limitation",
    body: "Christian bioethics takes a counter-cultural view of suffering and limitation. Where modern bioethics often treats suffering as inherently meaningless and to be eliminated at any cost, the Christian tradition sees suffering as potentially formative, redemptive, and participating in the suffering of Christ (Colossians 1:24, Romans 8:17). This does not mean celebrating suffering or withholding compassionate care — it means that the person in the hospital bed is not a problem to be solved but a person to be accompanied, and that the goal of medicine is not the elimination of all suffering but the promotion of genuine human flourishing.",
  },
  {
    id: "methods",
    title: "Methods in Christian Bioethics",
    body: "Christian bioethics draws on multiple sources: Scripture (the canonical witness to human dignity, the specific commands, the narrative of creation-fall-redemption), natural law (moral truths accessible through reason and the observation of human nature — Aquinas), virtue ethics (what practices and characters are formed by medical choices — what does this do to the practitioner, patient, and community?), and the wisdom of the Christian tradition across 2,000 years of reflection on life, death, and healing. No single method is sufficient; all must be brought to bear on genuinely hard questions.",
  },
];

const ISSUE_ITEMS = [
  {
    id: "abortion",
    title: "Abortion",
    color: "#EF4444",
    consensus: "Broad Christian consensus against abortion, with varying exceptions",
    theology: "The central question is the status of the embryo and fetus from conception. The Christian tradition has generally held that human life begins at or near conception — supported by Psalm 139:13-16, Jeremiah 1:5, Luke 1:41-44, and the Didache's condemnation of abortion. The Catechism of the Catholic Church states: 'Human life must be respected and protected absolutely from the moment of conception.' Most evangelical statements affirm a strong presumption against abortion while acknowledging hard cases (rape, incest, severe fetal anomaly, life of the mother). The Eastern Orthodox tradition generally condemns abortion with some pastoral flexibility in extreme circumstances.",
    harder_questions: "How should Christians respond pastorally to women who have had abortions? What is the church's role in preventing unwanted pregnancies? How do Christians engage politically on this issue in a pluralist democracy?",
  },
  {
    id: "ivf",
    title: "In Vitro Fertilization (IVF)",
    color: "#F59E0B",
    consensus: "Divided — Roman Catholic opposes; Protestant views vary widely",
    theology: "IVF raises distinct bioethical questions from abortion: the status of spare embryos created in the process (often frozen or discarded), the separation of procreation from the conjugal act (Catholic natural law concern), and the commodification of children as products manufactured to specification. The Roman Catholic Church condemns IVF as violating the inherent unity of the conjugal act and the dignity of the embryo. Most evangelical Protestants permit IVF in principle but with concern about the disposition of spare embryos. The ERLC (Southern Baptist) advocates for limiting IVF cycles and requiring implantation of all created embryos.",
    harder_questions: "What is the status of the frozen embryo? Should Christians adopt frozen embryos? What restrictions should Christians advocate for in IVF regulation?",
  },
  {
    id: "contraception",
    title: "Contraception",
    color: PURPLE,
    consensus: "Roman Catholic prohibition; Protestant generally permissive with caveats",
    theology: "The Roman Catholic Church's Humanae Vitae (1968) holds that each act of marital intercourse must remain open to the possibility of new life — hence artificial contraception is prohibited. This is a natural law argument, not primarily a biblical one. Most Protestant traditions do not share this view, permitting contraception within marriage. Where the traditions converge: both oppose contraceptives that work by preventing implantation of a fertilized egg (treating it as an abortifacient), and both oppose a purely contraceptive mentality that treats children as inconveniences rather than gifts.",
    harder_questions: "Do hormonal contraceptives sometimes prevent implantation? Is barrier contraception different from hormonal? What about emergency contraception?",
  },
  {
    id: "genetics",
    title: "Genetic Testing & Screening",
    color: "#3B82F6",
    consensus: "Widely varied; no settled Christian consensus",
    theology: "Prenatal genetic testing raises bioethical questions depending on what follows from the information: if testing leads to abortion for conditions like Down syndrome, most Christian bioethicists oppose it; if testing provides information to help prepare for and care for a child with a condition, it is widely accepted. Preimplantation genetic diagnosis (PGD) in IVF — selecting which embryos to implant based on genetic characteristics — raises questions about genetic selection and 'designer babies.' Genetic carrier testing (to know if a couple carries genes for heritable conditions) is generally less controversial.",
    harder_questions: "When is prenatal testing a form of eugenics? What is owed to children with disabilities? How should Christians counsel couples with high genetic risk?",
  },
];

const ENDOFLIFE_ITEMS = [
  {
    id: "ordinary",
    title: "Ordinary vs. Extraordinary Care",
    body: "Christian ethics has traditionally distinguished ordinary care (food, water, basic comfort — generally required) from extraordinary means (intensive interventions that provide no reasonable expectation of benefit — not always required). The Catechism of the Catholic Church: 'One can cease all extraordinary and disproportionate means to prolong life.' This distinction helps navigate end-of-life decisions: withholding a ventilator that will only prolong the dying process is not the same as killing; stopping chemotherapy that is causing suffering without benefit is not abandonment. The goal is human flourishing, not maximum biological duration.",
  },
  {
    id: "advance",
    title: "Advance Directives and Living Wills",
    body: "Christians should prepare advance directives — documents that specify their wishes for medical care if they become incapacitated. This is a form of stewardship: relieving loved ones and medical personnel of agonizing decisions without guidance, and ensuring that one's body is treated consistent with one's values. A Christian advance directive will reflect: the value of life (avoid hasty withdrawal of care), the acceptance of death as not the ultimate enemy (the resurrected Christ defeated death), the dignity of the person (prioritize comfort and dignity), and the relational context (involve family and pastor in end-of-life decisions).",
  },
  {
    id: "euthanasia",
    title: "Euthanasia and Physician-Assisted Death",
    body: "The Christian tradition broadly opposes euthanasia (the intentional killing of a patient by a physician) and physician-assisted suicide (the physician providing means for the patient to end their own life). The reasons: the sanctity of life (the prohibition on murder extends to self-killing), the danger of the slippery slope (as evidenced in the Netherlands and Belgium, where the practice has expanded significantly beyond original limits), the alternative of palliative care, and the theological conviction that suffering can have meaning and that dying is a spiritual process to be accompanied rather than terminated. The Christian response to the desire for euthanasia is not argument but presence: robust palliative care, hospice ministry, and genuine accompaniment in dying.",
  },
  {
    id: "hospice",
    title: "The Theology of Dying Well",
    body: "The Christian tradition has rich resources for dying well — the ars moriendi ('art of dying') tradition, developed in the 15th century, provided guidance for dying persons and their companions. Christian dying is characterized by: reconciliation with God and with others; reception of the sacraments (last rites in Catholic/Orthodox traditions); the presence of the Christian community; honest acknowledgment of death rather than its denial; and the hope of resurrection that gives death its proper perspective. The church's ministry to the dying is one of its most important — and most neglected — callings.",
  },
];

const EMERGING_ITEMS = [
  {
    id: "ai",
    title: "Artificial Intelligence and Human Identity",
    color: "#3B82F6",
    issue: "What is the relationship between human consciousness, the soul, and AI systems that increasingly simulate human cognition and even emotion? Does the imago Dei include cognitive capacity, making AGI relevant to human dignity questions?",
    christian_response: "The imago Dei is not reducible to cognitive capacity — if it were, people with severe cognitive disabilities would have lesser dignity. The soul (Greek: psyche; Hebrew: nephesh) in Scripture is not simply the mind but the whole person in relation to God. An AI system, however sophisticated, is not made in God's image, does not have a body that will be resurrected, and is not in covenantal relationship with God. Christian ethics should resist both the inflation of AI (treating it as having human-like status) and the deflation of humanity (treating humans as merely complex information processors).",
  },
  {
    id: "enhancement",
    title: "Human Enhancement Technologies",
    color: PURPLE,
    issue: "Technologies that enhance human capacities beyond natural limits — cognitive enhancers, genetic editing of future children (germline editing), implanted computing interfaces, life-extension interventions — raise questions about the proper limits of human self-modification.",
    christian_response: "Christian tradition distinguishes therapy (restoring what is damaged) from enhancement (exceeding natural design). Enhancement is not categorically prohibited — eyeglasses enhance vision beyond what human eyes achieve naturally. But the transhumanist vision of fundamentally redesigning humanity raises questions: Who decides what the enhanced human looks like? Does enhancement exacerbate inequality? Is the impetus to transcend human limits a form of pride (the Tower of Babel impulse)? Christians should engage these technologies with careful discernment rather than reflexive acceptance or rejection.",
  },
  {
    id: "climate",
    title: "Population Ethics and Climate",
    color: GREEN,
    issue: "Arguments that reducing population is a moral good for environmental reasons. Pressures on reproductive decisions in the name of climate responsibility.",
    christian_response: "Genesis's command to 'be fruitful and multiply' has not been revoked, though it operates in a different context than ancient Israel's sparsely populated world. Christian ethics affirms children as gifts rather than burdens and rejects any framework that treats human beings as ecological problems rather than image-bearers with genuine dignity. At the same time, responsible stewardship of creation (the creation care mandate) creates genuine obligations — not to limit human reproduction but to live in ways that honor the creation we share.",
  },
  {
    id: "organ",
    title: "Organ Donation and Transplantation",
    color: "#F59E0B",
    issue: "Is organ donation obligatory? Permitted? When is a person 'dead' enough to donate? Are there limits on what organs can be donated?",
    christian_response: "Most Christian traditions affirm organ donation as an act of love and generosity — the gift of life to another person. Some Orthodox theologians raise concerns about brain-death criteria (whether it constitutes genuine death) and whole-body integrity. The Catholic Church explicitly supports organ donation as a gift. Limits: Christians should not sell organs (treating the body as mere property) and should not donate organs in ways that hasten or cause their own death. Voluntary organ donation after death is widely affirmed as consistent with the Christian commitment to the good of neighbor.",
  },
];

const TABS = [
    { id: "foundations" as Tab, label: "Theological Foundations", icon: "📖" },
    { id: "issues" as Tab, label: "Core Issues", icon: "⚖️" },
    { id: "endoflife" as Tab, label: "End of Life", icon: "🕊️" },
    { id: "emerging" as Tab, label: "Emerging Questions", icon: "🔬" },
    { id: "videos" as Tab, label: "Videos", icon: "🎬" },
  ];

export default function ChristianBioethicsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-bioethics_tab", "foundations");
  const [selectedFoundation, setSelectedFoundation] = usePersistedState("vine_christian-bioethics_selected_foundation", "imagodei");
  const [selectedIssue, setSelectedIssue] = usePersistedState("vine_christian-bioethics_selected_issue", "abortion");
  const [selectedEndOfLife, setSelectedEndOfLife] = usePersistedState("vine_christian-bioethics_selected_end_of_life", "ordinary");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  const foundationItem = FOUNDATION_ITEMS.find(f => f.id === selectedFoundation)!;
  const issueItem = ISSUE_ITEMS.find(i => i.id === selectedIssue)!;
  const endOfLifeItem = ENDOFLIFE_ITEMS.find(e => e.id === selectedEndOfLife)!;


  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚕️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Bioethics</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.65 }}>
            From abortion to AI, from end-of-life care to genetic engineering — bioethics is where the theology of the image of God meets the hardest questions of modern medicine and technology.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "foundations" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Christian bioethics does not begin with positions on specific issues — it begins with a theology of the human person rooted in Scripture and Christian tradition. These foundations determine the approach to every specific question.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
                {FOUNDATION_ITEMS.map(f => (
                  <button type="button" key={f.id} onClick={() => setSelectedFoundation(f.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedFoundation === f.id ? GREEN : BORDER}`, background: selectedFoundation === f.id ? `${GREEN}18` : CARD, color: selectedFoundation === f.id ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                    {f.title.split(' ').slice(0, 4).join(' ')}...
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{foundationItem.title}</h2>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{foundationItem.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "issues" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the most contested bioethical issues facing Christians today. The goal here is honest engagement — presenting the theological reasoning, not just the conclusions.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ISSUE_ITEMS.map(i => (
                <button type="button" key={i.id} onClick={() => setSelectedIssue(i.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedIssue === i.id ? i.color : BORDER}`, background: selectedIssue === i.id ? `${i.color}15` : "transparent", color: selectedIssue === i.id ? i.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {i.title}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${issueItem.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ color: issueItem.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{issueItem.title}</h2>
                <div style={{ background: `${issueItem.color}15`, color: issueItem.color, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, display: "inline-block", marginTop: 8 }}>{issueItem.consensus}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>The Theological Case</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{issueItem.theology}</p>
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>The Harder Questions</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{issueItem.harder_questions}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "endoflife" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                How we die matters. Christian tradition has rich resources for end-of-life decisions that distinguish between killing and letting die, between aggressive intervention and dignified dying, between despair and hope.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ENDOFLIFE_ITEMS.map(e => (
                <button type="button" key={e.id} onClick={() => setSelectedEndOfLife(e.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedEndOfLife === e.id ? PURPLE : BORDER}`, background: selectedEndOfLife === e.id ? `${PURPLE}15` : "transparent", color: selectedEndOfLife === e.id ? PURPLE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {e.title.split(' ').slice(0, 3).join(' ')}...
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{endOfLifeItem.title}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{endOfLifeItem.body}</p>
            </div>
          </div>
        )}

        {tab === "emerging" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Christian bioethics must engage genuinely new questions that earlier generations never faced. These are not academic puzzles — they are forming the world our children will inhabit.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EMERGING_ITEMS.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button" onClick={() => toggleExpand(e.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", color: TEXT }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: e.color, flexShrink: 0 }} />
                      <div style={{ fontWeight: 800, fontSize: 16 }}>{e.title}</div>
                    </div>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{expanded[e.id] ? "−" : "+"}</div>
                  </button>
                  {expanded[e.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ background: `${e.color}10`, border: `1px solid ${e.color}25`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                        <div style={{ color: e.color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>The Issue</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{e.issue}</p>
                      </div>
                      <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Christian Response</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{e.christian_response}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>FURTHER RESOURCES</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {[
                  { title: "The Ethics of Human Enhancement", author: "Andy Crouch" },
                  { title: "The Case for Life", author: "Scott Klusendorf" },
                  { title: "Technologized", author: "Trevin Wax" },
                  { title: "A Time to Die", author: "Robert Mounce" },
                  { title: "Joni Eareckson Tada on disability and bioethics", author: "Various essays" },
                  { title: "The Bioethics of Artificial Intelligence", author: "C. Ben Mitchell, CBHD" },
                ].map((r, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{r.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{r.author}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "aliAlmiUyB0", title: "Bioethics: The Christian Response to Euthanasia and Gene Manipulation", channel: "Andy Moore & Calum Miller", description: "A scholarly Christian examination of euthanasia and genetic engineering — exploring the image of God, human dignity, and what faithfulness looks like at medicine's frontiers." },
                  { videoId: "Fjoj-ydn7hA", title: "A Belief That Prevents Abortion", channel: "Desiring God / John Piper", description: "Piper argues that the single most powerful barrier to abortion is the conviction that every human being — from conception — bears the image of God." },
                  { videoId: "vMY1sW3Swno", title: "A Biblical Perspective on Abortion and Euthanasia", channel: "Bible Teaching", description: "A careful biblical examination of the sanctity of human life from conception to natural death, applied to the contemporary challenges of abortion and euthanasia." },
                  { videoId: "MZC9jCqGSS4", title: "Should Christians Support 'Death with Dignity'?", channel: "Biblical Worldview", description: "A biblical response to assisted suicide movements — arguing from the image of God and the sanctity of life that there is no such thing as undignified natural death." },
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
      </main>
      <Footer />
    </div>
  );
}
