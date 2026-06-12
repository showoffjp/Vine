"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "sanctity", label: "Sanctity of Human Life" },
  { id: "abortion", label: "Abortion" },
  { id: "end-of-life", label: "End-of-Life Care" },
  { id: "reproductive", label: "Reproductive Technologies" },
  { id: "genetic", label: "Genetic Engineering" },
  { id: "videos", label: "Videos" },
];

const SANCTITY_CONTENT = [
  {
    title: "The Imago Dei as Foundation (Gen 1:26&ndash;27; Gen 9:6)",
    color: GREEN,
    body: "Genesis 1:26&ndash;27 establishes the irreducible foundation of Christian bioethics: every human being, at every stage of development, bears the image of God (imago Dei). This is not a conditional status earned by cognitive capacity, physical ability, social utility, or viability &mdash; it is an ontological fact about what every human being is. Genesis 9:6 makes the imago Dei the explicit ground for the prohibition on murder: &ldquo;Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his image.&rdquo; The logic is direct: to take a human life is to assault the image of God himself. This means that a fertilized embryo, a person in a persistent vegetative state, a person with severe cognitive disability, and a person dying of dementia all bear the image of God with equal, unconditional dignity. Christian bioethics rejects any framework &mdash; utilitarian, quality-of-life, or eugenicist &mdash; that assigns differential human value based on capacity, usefulness, or the subjective assessment of a life&rsquo;s worth.",
  },
  {
    title: "Psalm 139:13&ndash;16 &mdash; Knit Together in the Womb",
    color: PURPLE,
    body: "Psalm 139:13&ndash;16 is the most intimate biblical description of God&rsquo;s relationship to a human being in the womb: &ldquo;For you formed my inward parts; you knitted me together in my mother&rsquo;s womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well. My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth. Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me, when as yet there was none of them.&rdquo; David speaks of himself in the womb as already &ldquo;me&rdquo; &mdash; not a potential person but the same person who is now writing. God&rsquo;s knowledge, formation, and loving attention are directed at the person in utero. The language of &ldquo;knitting&rdquo; and &ldquo;weaving&rdquo; is the language of artisanship &mdash; God&rsquo;s direct creative involvement, not merely natural process.",
  },
  {
    title: "The Unique Status of Human Life",
    color: GOLD,
    body: "Christian bioethics affirms the unique status of human life in distinction from the animal rights movement&rsquo;s tendency to collapse the distinction between human and non-human animals. Humans are made in God&rsquo;s image in a way that other creatures are not (Genesis 1:26&ndash;28). This does not mean animals do not matter &mdash; the Psalms celebrate God&rsquo;s care for all creatures (Psalm 104; Psalm 145:9) &mdash; but it does mean that human life has a dignity that animal life does not share in the same way. The Christian tradition has consistently recognized this distinction: the killing of a human being requires a categorical justification that the killing of an animal does not. This unique status does not arise from human achievement or intelligence; it is conferred by God&rsquo;s act of creation. Even a person who has never and will never exercise any cognitive function bears the image of God and possesses full human dignity.",
  },
  {
    title: "The Consistent Ethic of Life: Conception to Natural Death",
    color: BLUE,
    body: "A genuinely Christian bioethic is consistent: it defends human life from conception to natural death without exception for inconvenience, disability, or quality-of-life assessments. The same conviction that opposes abortion (the unborn bear the imago Dei) also opposes euthanasia (the dying and disabled bear the imago Dei), infanticide (the newborn bear the imago Dei), and neglect of the elderly (the demented and dying bear the imago Dei). This consistency is not always politically convenient &mdash; it creates discomfort across the political spectrum &mdash; but it is the necessary implication of the imago Dei doctrine applied rigorously. A bioethic that defends the unborn while being indifferent to the poor who die of preventable disease, or that defends the terminally ill while being indifferent to the destruction of embryos, has allowed political convenience to override theological consistency.",
  },
  {
    title: "The Early Church and Infanticide",
    color: TEAL,
    body: "The early church&rsquo;s defense of vulnerable human life was radical in the context of the Roman world, where infanticide and exposure of unwanted infants (especially female infants and disabled children) were common and legally accepted practices. The Didache (c. 100 AD), one of the earliest Christian documents outside the New Testament, explicitly prohibits both abortion and infanticide alongside murder. The Epistle of Barnabas (c. 100 AD) similarly condemns both. Tertullian (c. 200 AD) argued that the human person exists from conception. This early Christian witness was not peripheral but central &mdash; the protection of vulnerable human life was one of the most distinctive features of the early church&rsquo;s social practice, directly contradicting the surrounding culture. The historical continuity of this teaching across Christian traditions is itself an argument for its theological integrity.",
  },
  {
    title: "Sanctity of Life as the Baseline for All Bioethical Reasoning",
    color: ROSE,
    body: "The sanctity of human life is not one value among many to be balanced against other considerations in bioethical reasoning; it is the foundational principle from which all other bioethical reasoning begins. This means: every bioethical question must begin with the question of who is the human being in question, what is their status as an image-bearer of God, and what does respect for that status require in this specific situation. The question of whether to pursue aggressive cancer treatment, discontinue life support, use a particular reproductive technology, or participate in genetic research cannot be resolved without first establishing the status of every human being involved in the situation. Treating sanctity of life as one consideration among many &mdash; to be traded off against quality of life, economic cost, or aggregate well-being &mdash; is the first step toward the utilitarian erosion of human dignity that Christian bioethics exists to resist.",
  },
];

const ABORTION_CONTENT = [
  {
    title: "The Biblical Data",
    color: GREEN,
    body: "The biblical texts most directly relevant to abortion are: (1) Psalm 139:13&ndash;16 (God&rsquo;s intimate knowledge and formation of the person in the womb, using first-person continuity of identity). (2) Luke 1:44: Elizabeth exclaims that &ldquo;the baby leaped in my womb for joy&rdquo; when she heard Mary&rsquo;s greeting &mdash; John the Baptist, in utero, responds spiritually to the presence of the incarnate Jesus. The word used for John is <em>brephos</em> &mdash; the same Greek word used for a born infant (Luke 2:12, 16). (3) Exodus 21:22&ndash;25: the difficult passage about a premature birth resulting from a struggle &mdash; in the Hebrew text, injury to the pregnant woman or her offspring is subject to the same legal protections as any other human injury, suggesting that fetal life has legal standing. (4) Jeremiah 1:5: God knew and consecrated Jeremiah before his birth. (5) Luke 1:41&ndash;44: the in utero John is described as responding joyfully to the presence of Jesus. None of these texts is a proof text that resolves every modern bioethical question, but together they form a consistent pattern: the person in the womb is a person, known by God, with continuity of identity from conception through life.",
  },
  {
    title: "What the Early Church Taught",
    color: PURPLE,
    body: "The early church&rsquo;s witness on abortion is unusually consistent for a patristic-era question. The Didache (c. 100 AD): &ldquo;You shall not kill the embryo by abortion and shall not cause the newborn to perish.&rdquo; The Epistle of Barnabas (c. 100 AD) prohibits both abortion and infanticide. Tertullian (c. 197 AD): &ldquo;To prevent birth is anticipated murder; it makes little difference whether one destroys a life already born or does away with it in its earliest stages.&rdquo; Basil of Caesarea (c. 374 AD): &ldquo;A woman who deliberately destroys a fetus is answerable for murder&rdquo; &mdash; and he does not distinguish between early and late abortion. Ambrose of Milan and Augustine of Hippo both condemned abortion. This is not a modern evangelical invention; it is the consistent position of the early church across traditions, centuries, and cultures &mdash; and it stands in direct continuity with the Jewish tradition&rsquo;s high regard for fetal life.",
  },
  {
    title: "The Philosophical Question: When Does a Human Become a Person?",
    color: GOLD,
    body: "The hardest philosophical question in abortion ethics is the question of personhood: when does a human organism become a person with full moral status? Several positions exist: (1) <strong>Full Personhood from Conception</strong>: the fertilized egg is a full human person because it is a genetically distinct, living human organism at the beginning of its continuous development. This is the position of the Catholic Church, most evangelical bioethicists, and Orthodox Christianity. (2) <strong>Gradual Personhood</strong>: personhood develops over time, with increasing moral status as the embryo and fetus develop sentience, capacity for suffering, viability, or other morally relevant capacities. This is the position of some Protestant thinkers. (3) <strong>Sentience Criterion</strong>: personhood begins when the fetus can feel pain or has conscious experience (generally placed around 20&ndash;24 weeks). (4) <strong>Viability Criterion</strong>: the standard in Roe v. Wade. The full personhood from conception view is most consistent with the biblical data and the historical Christian tradition, and it avoids the arbitrariness of drawing the line at developmental milestones that do not correspond to ontological changes.",
  },
  {
    title: "The Hard Cases: Rape, Incest, Life of the Mother",
    color: BLUE,
    body: "The hard cases require pastoral care and theological precision, not political sloganeering. Rape and incest: the trauma of sexual violence is profound and the demand that a woman carry a pregnancy resulting from assault to term is a serious moral burden. The Christian conviction that the embryo is a full human person means that the response to this injustice cannot be another act of violence against an innocent party. The woman&rsquo;s trauma is real and demands compassionate care; the embryo&rsquo;s innocence is equally real. The life of the mother: when a pregnancy directly and imminently threatens the mother&rsquo;s life (ectopic pregnancy, certain cancers), the principle of double effect may apply &mdash; treating the mother is a distinct moral act from deliberately ending a fetal life, even if the fetal death is a foreseen result. This is not an abortion in the moral sense but the tragic necessity of choosing the patient who can be saved. Each case requires careful, compassionate, case-by-case pastoral reasoning rather than categorical denial or categorical permission.",
  },
  {
    title: "Pastoral Care for Women Facing Crisis Pregnancies and Women Who Have Had Abortions",
    color: TEAL,
    body: "The church&rsquo;s witness on abortion is only credible when it is accompanied by robust pastoral care for the women most affected. Crisis pregnancy centers, material support for mothers in poverty, adoption advocacy, foster care, and genuine community surrounding single mothers are not optional supplements to the pro-life position &mdash; they are its necessary embodiment. For women who have had abortions (studies suggest approximately one in four American women), the church must be a place of genuine forgiveness and healing, not judgment and silence. The shame and grief that often follow abortion &mdash; even when the woman intellectually endorses her choice &mdash; deserve pastoral attention and gospel proclamation. Post-abortion healing ministries (Rachel&rsquo;s Vineyard, Surrendering the Secret) exist to provide exactly this. A church that speaks against abortion without creating this environment of care and grace has failed at its central calling.",
  },
  {
    title: "The Politics vs. the Theology Distinction",
    color: ROSE,
    body: "The theology of abortion (the human status of the unborn, the ethics of pregnancy termination) is distinct from the politics of abortion (what laws should govern it, how enforcement should work, what policy best reduces abortion rates). A Christian can hold a coherent theological conviction that abortion is the taking of a human life while holding a range of positions on the legal and political questions. The political question is not just about what is morally true but about what legal framework best achieves the goods of protecting fetal life while respecting women&rsquo;s safety, equality, and access to care &mdash; all of which are legitimate Christian concerns. The failure of much evangelical political engagement on abortion has been the conflation of the theological conviction (abortion takes a human life) with a specific political program (criminalize all abortion), ignoring the empirical complexity of how legal regimes affect abortion rates and women&rsquo;s health. Holding the theology clearly while engaging the politics humbly is the mature Christian posture.",
  },
];

const END_OF_LIFE_CONTENT = [
  {
    title: "Killing vs. Allowing to Die: Active vs. Passive Euthanasia",
    color: GREEN,
    body: "The most important distinction in end-of-life ethics is between killing and allowing to die &mdash; between active euthanasia (administering a lethal agent to end a patient&rsquo;s life) and passive euthanasia (withdrawing or withholding treatment and allowing natural death to occur). The Christian tradition, along with the historic medical tradition, has generally held that these are morally distinct acts. Withdrawing a ventilator from a patient with no realistic prospect of recovery, declining aggressive chemotherapy for a terminal cancer, or discontinuing dialysis &mdash; these can be acts of faithful care, allowing death to proceed naturally. Administering a lethal dose of medication with the intent to cause death is a different act, morally analogous to murder. The distinction is not always clean in practice (withdrawal of nutrition and hydration raises particular difficulties), but the conceptual distinction is real and important.",
  },
  {
    title: "Physician-Assisted Suicide: Evidence and Slippery Slopes",
    color: PURPLE,
    body: "Physician-assisted suicide (PAS) &mdash; where a physician prescribes a lethal medication that the patient self-administers &mdash; is legal in Oregon (since 1997), several other U.S. states, Canada (MAID, since 2016), Belgium, the Netherlands, and Switzerland. The slippery slope concern is not a hypothetical: it is documented fact. In the Netherlands and Belgium, euthanasia began as a response to terminal physical illness and has expanded to include psychiatric suffering, dementia, and in some cases minors. Canada&rsquo;s MAID has expanded from terminal illness to chronic illness and is under consideration for mental illness. The original safeguards have eroded systematically. In Belgium, the percentage of deaths from euthanasia has grown from 0.2% in 2002 to over 2% by 2020. These trends represent the gradual normalization of medical killing as a response to suffering, a trajectory the Christian tradition regards as a fundamental violation of medicine&rsquo;s healing vocation.",
  },
  {
    title: "The Theology of Dying Well: Ars Moriendi",
    color: GOLD,
    body: "The medieval tradition of the <em>ars moriendi</em> (&ldquo;the art of dying well&rdquo;) was a rich body of practical and theological guidance for dying in faith, surrounded by community, and in hope of resurrection. This tradition &mdash; largely lost in modern Western culture, which treats death as a medical failure to be managed &mdash; provides the Christian alternative to both the medicalization of dying (prolonging life at all costs through aggressive treatment) and the demand for euthanasia (eliminating the burden of dying through medical killing). Dying well, in the Christian tradition, includes: reconciliation with God and neighbor before death, reception of the sacraments, honest acknowledgment of dying rather than false hope, presence and accompaniment of community, and the cultivation of hope grounded in the resurrection of Christ (1 Corinthians 15). The resurrection transforms dying: death is real, and grief is real, but death is not the final word.",
  },
  {
    title: "Palliative Care and Hospice as the Christian Alternative",
    color: BLUE,
    body: "The appropriate Christian response to the suffering of dying is not physician-assisted death but the development of excellent palliative care and hospice. Palliative care focuses on the relief of pain, the management of symptoms, and the maintenance of dignity and quality of life without either prolonging dying artificially or hastening death deliberately. Dame Cicely Saunders, the founder of the modern hospice movement, was a Christian whose theological convictions &mdash; about the dignity of the dying, the possibility of redemptive suffering, and the importance of community in dying &mdash; directly shaped her work. Hospice care represents the Christian conviction that the dying deserve presence, relief, and dignity, not abandonment to medical machinery or death on demand. The church has a particular role to play in hospice ministry: sitting with the dying, praying with them, providing community when medical staff cannot.",
  },
  {
    title: "Extraordinary vs. Ordinary Means, Advance Directives, and DNR Orders",
    color: TEAL,
    body: "The Catholic moral tradition developed the distinction between ordinary means of treatment (proportionate interventions that offer reasonable hope of benefit without excessive burden) and extraordinary means (disproportionate interventions that impose excessive burden without proportionate benefit). Refusing extraordinary means is not suicide or euthanasia; it is allowing the natural dying process to proceed. This distinction has practical applications in decisions about ventilators, dialysis, CPR, feeding tubes, and aggressive chemotherapy at the end of life. Advance directives (living wills) and DNR (Do Not Resuscitate) orders are legitimate and important tools for communicating one&rsquo;s wishes when one can no longer speak for oneself. Christians should prepare these documents thoughtfully, in conversation with their pastor and physician, specifying their wishes regarding the distinction between refusing futile treatment (permissible) and requesting to be killed (not permissible). The goal is to die well &mdash; neither demanding every possible intervention nor demanding a hastened death.",
  },
  {
    title: "The Theology of Suffering at the End of Life (2 Cor 4:17)",
    color: ROSE,
    body: "Paul writes in 2 Corinthians 4:17: &ldquo;For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison.&rdquo; This is not a denial of the reality of suffering or a demand for stoic endurance without complaint. It is a theological reframe: suffering in Christ is not meaningless. The tradition of redemptive suffering does not mean that Christians should seek suffering or refuse legitimate pain management &mdash; palliative care and pain relief are entirely consistent with Christian dying. It means that suffering, when it cannot be fully relieved, need not be experienced as pure horror; it can be experienced within a narrative of meaning, hope, and divine presence. The Christian patient who is dying in pain, surrounded by community, receiving excellent palliative care, and trusting in the resurrection is making a theological statement about the nature of death that physician-assisted suicide cannot offer: that death is not an emergency exit but a threshold, beyond which stands the God who raised Jesus from the dead.",
  },
];

const REPRODUCTIVE_CONTENT = [
  {
    title: "IVF and the Question of Surplus Embryos",
    color: GREEN,
    body: "In vitro fertilization (IVF) involves the creation of multiple embryos outside the womb, selection of some for implantation, and typically the freezing (cryopreservation) or destruction of those not used. The central bioethical question is the status of the embryo: if the human embryo is a full human person from conception (the position of most Christian bioethicists), then the deliberate creation of embryos for the purpose of discarding surplus ones is morally problematic. It is the creation of human beings for instrumental purposes, with their destruction as an anticipated outcome. The Catholic Church prohibits IVF on these grounds. Many evangelical bioethicists express serious reservations while recognizing the deep pain of infertility. Some propose modified IVF protocols: limiting fertilization to the number of embryos that will be implanted, prohibiting selective reduction, and donating rather than destroying any frozen embryos. The question of the approximately one million frozen embryos currently in storage in the United States is an urgent and largely unaddressed bioethical problem.",
  },
  {
    title: "Natural Family Planning vs. Contraception",
    color: PURPLE,
    body: "The Catholic Church holds that the use of artificial contraception is intrinsically wrong because it separates the unitive and procreative dimensions of the marital act (Humanae Vitae, 1968). Natural Family Planning (NFP) &mdash; tracking fertility cycles to avoid pregnancy without artificial interference &mdash; is permitted because it does not artificially interrupt the marital act. Protestant traditions have generally permitted contraception within marriage as a legitimate expression of stewardship over family size, while opposing abortifacient methods (IUDs, certain hormonal contraceptives) that may prevent implantation of a fertilized embryo. The debate between Catholic and Protestant perspectives on contraception reflects deep differences in natural law reasoning and the theology of sex and marriage, but both traditions agree that contraception must not be abortifacient and that the Church has an interest in the theology of procreation that goes beyond individual preference.",
  },
  {
    title: "Surrogacy: Commercial and Altruistic",
    color: GOLD,
    body: "Surrogacy &mdash; the carrying of a pregnancy on behalf of another person or couple &mdash; raises distinct theological questions. Commercial surrogacy (where the surrogate is paid for her services beyond expenses) is widely criticized in Christian ethics as the commodification of reproductive labor and the reduction of the surrogate&rsquo;s body to an instrument of another&rsquo;s reproductive project. Altruistic surrogacy (a close friend or family member carrying for a couple without payment) is viewed more favorably by some, though questions remain about the relational complexity, the status of any embryos involved, and whether the arrangement respects the dignity of all parties. The theology of the body (John Paul II) provides a framework: the body is not a tool but a person; reproductive capacities are not services to be contracted but gifts given within permanent relational commitments. Many Christian bioethicists counsel adoption as a more theologically coherent response to infertility than surrogacy.",
  },
  {
    title: "Egg and Sperm Donation",
    color: BLUE,
    body: "Egg and sperm donation introduce a third party&rsquo;s genetic material into what the Christian tradition has understood as the exclusive covenant of marriage. The Catholic Church prohibits gamete donation because it separates the procreative act from the unitive marital covenant. Protestant reflection is more varied: some accept gamete donation within marriage as analogous to adoption, seeing the relational act of parenting as constitutive of parenthood rather than the genetic contribution. Others raise concerns about the commodification of reproductive cells, the anonymity that denies donor-conceived children knowledge of their genetic origins, and the complications of genetic parenthood spread across multiple parties. The rise of direct-to-consumer genetic testing has revealed the complexities of anonymous donation for donor-conceived individuals seeking their identity and medical history &mdash; a concern that Christian ethics&rsquo; emphasis on identity and origin should take seriously.",
  },
  {
    title: "Infertility, Adoption, and the Church&rsquo;s Failures",
    color: TEAL,
    body: "Infertility is experienced by approximately one in seven couples, and the church has often handled it poorly: with platitudes (&ldquo;just relax and it will happen,&rdquo; &ldquo;God has a plan&rdquo;), insensitivity (baby dedications, Mother&rsquo;s Day celebrations that exclude the childless), or silence. The Bible takes infertility seriously as a source of profound grief: Hannah&rsquo;s agony (1 Samuel 1) is one of the most emotionally intense passages in the Old Testament. Sarah&rsquo;s barrenness, Rachel&rsquo;s desperate cry (&ldquo;Give me children or I die!&rdquo;), Elizabeth&rsquo;s decades of shame &mdash; these are not incidental details but central narrative elements. And in each case, God&rsquo;s response to the prayer for children is not indifference but attentive, miraculous care. Adoption is a profoundly Christian response to infertility: it enacts the gospel in miniature, as the childless bring into their family someone who had no claim on their love. The church should be a community where the grief of infertility is honored and where adoption is celebrated as a first-class calling rather than a consolation prize.",
  },
];

const GENETIC_CONTENT = [
  {
    title: "Gene Therapy for Disease: Somatic Editing and CRISPR",
    color: GREEN,
    body: "Gene therapy that treats disease in living patients (somatic cell editing) is broadly supported in Christian bioethics as an extension of medicine&rsquo;s healing vocation. CRISPR-Cas9 technology has enabled remarkable therapeutic advances: the first approved CRISPR therapy for sickle cell disease (2023) offers the prospect of a permanent cure for a hereditary disease that has caused immense suffering. Treating disease is healing, and healing is a fundamental Christian calling &mdash; Jesus&rsquo; healing ministry is central to the Gospels, and medical practice participates in the Dominion mandate (Genesis 1:28) and the Great Commandment (love your neighbor). Somatic gene therapy does not raise the distinct concerns of germline editing because it affects only the treated patient, not future generations. Christians can enthusiastically support genetic medicine that treats disease in existing patients.",
  },
  {
    title: "Germline Editing: A Different Category",
    color: PURPLE,
    body: "Germline editing &mdash; making genetic changes to embryos, eggs, or sperm that will be inherited by future generations &mdash; is a categorically different intervention than somatic gene therapy. The Chinese scientist He Jiankui&rsquo;s 2018 creation of the first gene-edited human babies (edited for HIV resistance) produced widespread international condemnation across scientific and ethical communities, including from Christian bioethicists. The concerns: (1) We cannot predict the off-target effects of germline edits on future generations who cannot consent. (2) Germline editing raises the spectre of a new eugenics, using genetic technology to design future human beings rather than treat existing ones. (3) The line between treating disease and enhancing traits is unstable once germline editing is normalized. (4) Creating and discarding embryos in the editing process raises the personhood concerns that apply to IVF. A broad consensus supports a moratorium on germline editing for reproduction until safety and ethical frameworks are far more developed.",
  },
  {
    title: "Genetic Enhancement and the Eugenics Concern",
    color: GOLD,
    body: "The prospect of genetic enhancement &mdash; using genetic technology to make children smarter, stronger, more attractive, or longer-lived &mdash; raises the deepest questions about the theology of creatureliness and the ethics of designing human beings. The eugenics movement of the early 20th century, which led to forced sterilization programs in the United States and ultimately to Nazi racial hygiene, is the historical warning about what happens when societies decide to improve the human genetic stock. Modern genetic enhancement would be voluntary and market-driven rather than state-coerced, but the underlying logic &mdash; that human beings can and should be designed according to preferred specifications &mdash; raises similar concerns. Michael Sandel&rsquo;s concept of &ldquo;giftedness&rdquo; provides a useful framework: children are received as gifts, not commissioned as products. The parental attitude of unconditional love for the child as they are stands in tension with the engineering attitude of designing the child according to specification.",
  },
  {
    title: "The Theology of Disability: 2 Cor 12:9 and John 9",
    color: BLUE,
    body: "Two biblical passages directly challenge the assumption that disability is simply a defect to be eliminated. In John 9, the disciples ask Jesus about the man born blind: &ldquo;Who sinned, this man or his parents?&rdquo; &mdash; the assumption being that disability is divine punishment for sin. Jesus rejects this framing entirely: &ldquo;Neither this man nor his parents sinned&hellip; this happened so that the works of God might be displayed in him.&rdquo; Disability is not a problem to be explained but an occasion for the revelation of God&rsquo;s glory. In 2 Corinthians 12, Paul describes his &ldquo;thorn in the flesh&rdquo; (likely a physical disability or chronic illness): he prays three times for its removal, and God answers: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; The theology of disability in the New Testament does not glorify suffering, but it fundamentally challenges the assumption that a life with disability is a life diminished. Disability communities have an important prophetic word to speak against genetic selection that treats disability as pure deficit.",
  },
  {
    title: "Designing Children vs. Receiving Them as Gifts",
    color: TEAL,
    body: "Michael Sandel&rsquo;s philosophical argument in <em>The Case Against Perfection</em> resonates with Christian bioethics without sharing its theological foundation: the parental disposition of openness and unconditional love for the child as they are is threatened by the engineering disposition of designing the child according to preferred specifications. Sandel calls this the &ldquo;Promethean temptation&rdquo; &mdash; the human drive to master, control, and remake rather than receive and respond. The Christian tradition frames this theologically: children are entrusted to parents as stewards (Psalm 127:3 &mdash; &ldquo;children are a heritage from the Lord&rdquo;), not created as products. The parent&rsquo;s role is to receive the child and form them in wisdom and love, not to specify their genetic properties in advance. This does not prohibit genetic testing for disease risk or treatment of disease &mdash; receiving a child does not mean refusing to care for them medically &mdash; but it does fundamentally challenge the enhancement project, which is not about care but about design.",
  },
  {
    title: "The Christian Case: Cautious Engagement and Firm Limits",
    color: ROSE,
    body: "The Christian approach to genetic technology is neither a blanket rejection (genetic medicine can genuinely heal and serves the neighbor-love mandate) nor an uncritical embrace (genetic enhancement and germline editing raise profound concerns about eugenics, the commodification of human life, and the overreach of creatureliness into the Creator&rsquo;s prerogatives). The Tower of Babel (Genesis 11) is a recurring typological warning: the human impulse to transcend creatureliness without reference to God produces not flourishing but confusion. Practically, Christian bioethicists support: somatic gene therapy for disease treatment, careful genetic counseling that respects parental conscience, and robust investment in care for people with genetic diseases and disabilities. They oppose: commercial germline editing, genetic selection that treats disability as a defect to be eliminated, and genetic enhancement that treats children as products to be designed. The line between therapy and enhancement, healing and engineering, is the crucial distinction &mdash; not always easy to draw, but essential to maintain.",
  },
];

export default function ChristianBioethicsGuidePage() {
  const [tab, setTab] = useState("sanctity");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const accentFor = (id: string) => {
    if (id === "sanctity") return GREEN;
    if (id === "abortion") return PURPLE;
    if (id === "end-of-life") return TEAL;
    if (id === "reproductive") return GOLD;
    if (id === "genetic") return BLUE;
    return GREEN;
  };

  const contentFor = (id: string) => {
    if (id === "sanctity") return SANCTITY_CONTENT;
    if (id === "abortion") return ABORTION_CONTENT;
    if (id === "end-of-life") return END_OF_LIFE_CONTENT;
    if (id === "reproductive") return REPRODUCTIVE_CONTENT;
    if (id === "genetic") return GENETIC_CONTENT;
    return [];
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        <div style={{ marginBottom: "0.6rem" }}>
          <span style={{ background: TEAL + "22", color: TEAL, padding: "0.2rem 0.85rem", borderRadius: 20, fontSize: "0.77rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Bioethics</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem,4.5vw,2.7rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.7rem 0 0.8rem" }}>
          Christian Bioethics Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2.25rem" }}>
          The sanctity of human life, abortion and the status of the unborn, end-of-life care, reproductive technologies, genetic engineering &mdash; and how the imago Dei shapes every bioethical question.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.05rem", borderRadius: 20, border: "1px solid",
              fontSize: "0.83rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? accentFor(t.id) : BORDER,
              background: tab === t.id ? accentFor(t.id) + "22" : "transparent",
              color: tab === t.id ? accentFor(t.id) : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* Content tabs */}
        {tab !== "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {contentFor(tab).map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.5rem" }}>Videos</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="EXGhpjK9Wfw" title="John Piper on the Sanctity of Life" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>John Piper on the Sanctity of Life</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>The imago Dei as the foundation of Christian bioethics &mdash; why every human life from conception to natural death possesses unconditional dignity and why this conviction must ground every bioethical judgment.</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="R3_-dhnQFf8" title="Tim Keller on Abortion and the Christian" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>Tim Keller on Abortion and the Christian</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>How the biblical data, the early church, and philosophical reasoning about personhood converge on a Christian understanding of abortion &mdash; and how to hold theological conviction with pastoral compassion.</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="2eeqBRTOQeY" title="Bioethics and the Imago Dei" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>Bioethics and the Imago Dei</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>How the doctrine of the image of God shapes Christian engagement with end-of-life care, reproductive technologies, and genetic engineering &mdash; the theological foundation that holds all bioethical reasoning together.</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
