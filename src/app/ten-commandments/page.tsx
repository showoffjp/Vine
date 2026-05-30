"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const COMMANDMENTS = [
  {
    n: 1,
    cmd: "You shall have no other gods before me",
    ref: "Exodus 20:3",
    color: "#3B82F6",
    meaning: "The first commandment establishes the fundamental posture of all human life: exclusive devotion to the God who rescued Israel from Egypt. 'Before me' can also be translated 'besides me' or 'in addition to me.' God claims total loyalty — not because he needs it but because any other loyalty is a lie that destroys.",
    applications: ["Ask: what am I most afraid to lose? What does my spending pattern reveal about my actual priorities? What would I refuse to give up even if God asked?", "Every idol is a good thing elevated to ultimate thing. Career, family, security, romance — these become idols when they become the primary source of identity, meaning, or security."],
    positiveForm: "Worship and love God with your whole self — exclusively and primarily.",
    catechism: "This commandment requires knowing, loving, and trusting God above all things.",
  },
  {
    n: 2,
    cmd: "You shall not make idols",
    ref: "Exodus 20:4-6",
    color: "#8B5CF6",
    meaning: "The second commandment forbids representing God through images. The ancient context: all surrounding cultures had physical representations of their gods. Israel's God cannot be captured or contained by human craft — he is beyond all created things. Any image reduces him to something manageable, which is the opposite of who he is.",
    applications: ["Modern application: we craft mental images of God rather than physical ones. The god who always agrees with me, who never judges, who exists to improve my life — these are idols made of imagination rather than wood.", "Theology matters: wrong ideas about God are second-commandment violations. Study who God actually is, not who you wish he were."],
    positiveForm: "Know and worship God as he has revealed himself in Scripture and in Jesus Christ.",
    catechism: "God is to be worshipped in the ways he has appointed, not invented by human imagination.",
  },
  {
    n: 3,
    cmd: "You shall not misuse the name of the Lord",
    ref: "Exodus 20:7",
    color: "#EF4444",
    meaning: "Taking God's name 'in vain' means emptying it of its weight — using it carelessly, falsely, or as a mere expression. The name represents the person. To misuse the name is to misrepresent the God who bears it. This includes profanity but extends much further: claiming God's endorsement for your agenda, casual religious language without substance, and performative Christianity.",
    applications: ["Saying 'God told me' when he didn't. Using religious language to impress others without authentic faith behind it. Invoking God's blessing on your preferences.", "This commandment especially condemns false prophecy, spiritual manipulation, and using the name of Christ to cover sin or claim authority you don't have."],
    positiveForm: "Speak of God seriously, truthfully, and with reverence — and let your life give weight to what you say.",
    catechism: "Hallow God's name by using it with reverence and calling on it in true prayer.",
  },
  {
    n: 4,
    cmd: "Remember the Sabbath day by keeping it holy",
    ref: "Exodus 20:8-11",
    color: "#F59E0B",
    meaning: "One day in seven is set apart — not for productivity but for rest and worship. God built rest into creation itself (Genesis 2:2-3). Sabbath is not merely practical (though rest is beneficial) — it is theological: you are not God, you cannot sustain everything, the world does not depend on your constant labor. Sabbath is an act of trust.",
    applications: ["Sabbath is the most violated commandment in modern life. The always-on economy, digital connectivity, and achievement culture make true rest feel irresponsible.", "What would it mean to practice a 24-hour period of genuine rest, worship, and delight — without work, productivity, or obligation?"],
    positiveForm: "Set one day apart for rest, worship, and delight in God and his gifts.",
    catechism: "Keep a holy rest from worldly labor and use the time for worship, service, and recreation in God.",
  },
  {
    n: 5,
    cmd: "Honor your father and your mother",
    ref: "Exodus 20:12",
    color: "#10B981",
    meaning: "'So that you may live long in the land' (Exodus 20:12) — the only commandment with a promise. Honoring parents is not simply obedience for children; it is the posture of respect toward the structure of authority God has embedded in human life. It shapes how we relate to all authority. The breakdown of this commandment produces a generation that honors nothing it did not create.",
    applications: ["Honor does not require obedience to abuse or evil. But it does require respect for the role and the person — even imperfect parents, even estranged parents.", "For adult children: care for aging parents, speak of them with respect, recognize what they gave you even imperfectly. For those with harmful parents: honoring is not the same as pretending abuse didn't happen."],
    positiveForm: "Show respect, care, and gratitude toward parents and those in legitimate authority.",
    catechism: "Honor those in positions of authority by respecting, obeying, and caring for them.",
  },
  {
    n: 6,
    cmd: "You shall not murder",
    ref: "Exodus 20:13",
    color: "#DC2626",
    meaning: "Jesus expanded the sixth commandment in Matthew 5:21-22: 'You have heard it said, Do not murder... But I say to you that everyone who is angry with his brother will be liable to judgment.' Murder is the end of a spectrum that begins with contempt. The commandment forbids not just the act but the attitude: the treatment of another human being as less than a person made in the image of God.",
    applications: ["Where in your life do you treat other humans as obstacles, objects, or less than? Social media contempt, dehumanizing rhetoric about political opponents, and racial prejudice all violate the spirit of this commandment.", "Pro-life ethics — caring for the unborn, the vulnerable, the immigrant, and the prisoner — all flow from the theological foundation that every human being is made in God's image."],
    positiveForm: "Protect, defend, and promote the life and dignity of every human being.",
    catechism: "Preserve your own life and the life of others; avoid all that endangers life.",
  },
  {
    n: 7,
    cmd: "You shall not commit adultery",
    ref: "Exodus 20:14",
    color: "#7C3AED",
    meaning: "The seventh commandment protects the covenant of marriage — a relationship that Scripture consistently uses as a picture of God's faithfulness to his people. Jesus extended it to the heart: 'anyone who looks at a woman lustfully has already committed adultery with her in his heart' (Matthew 5:28). The commandment addresses not just the act but the desire: treating another person as an object for your gratification.",
    applications: ["In a sexually saturated culture, this commandment calls for a counter-cultural discipline: fidelity in marriage, purity in thought, guarding of the eyes and mind.", "For the unmarried: the commandment is broader than adultery — it protects the sanctity of covenant sexuality in all its forms."],
    positiveForm: "Cultivate fidelity, purity of heart, and the sanctity of marriage and sexuality.",
    catechism: "Preserve chastity in heart, mind, speech, and conduct — your own and others'.",
  },
  {
    n: 8,
    cmd: "You shall not steal",
    ref: "Exodus 20:15",
    color: "#B45309",
    meaning: "Theft is taking what belongs to another. The commandment assumes the legitimacy of private property — a theological position: people have a right to the fruits of their labor and to what has been given to them. But it extends beyond direct theft: wage theft, fraud, plagiarism, unfair business practices, and taking advantage of those without power to resist are all violations of this commandment.",
    applications: ["What do you take that isn't yours? Time from your employer. Credit from others. Pirated content. Undeclared income. The application is wider than we usually admit.", "The positive form requires not just refraining from theft but actively ensuring justice — that people receive what is rightly theirs."],
    positiveForm: "Give everyone their due; pursue honest labor and generous sharing.",
    catechism: "Protect and advance the property and livelihood of your neighbor.",
  },
  {
    n: 9,
    cmd: "You shall not give false testimony",
    ref: "Exodus 20:16",
    color: "#0EA5E9",
    meaning: "In the original context: perjury in a legal proceeding, where false testimony could destroy an innocent person. The commandment protects truth as the foundation of community. Jesus sharpened it: 'Let your yes be yes and your no be no' (Matthew 5:37). Lying, exaggeration, misleading by omission, and false impression are all forms of false testimony.",
    applications: ["We live in an era of performative identity — curating a public image that misrepresents the private reality. Social media as a form of continuous false testimony about your actual life.", "This commandment covers gossip (spreading unverified harmful claims), flattery (saying what people want to hear rather than what is true), and reputation management (concealing what should be disclosed)."],
    positiveForm: "Speak truth, defend the reputation of others, and interpret their actions charitably.",
    catechism: "Speak the truth; protect the good name of your neighbor; interpret everything charitably.",
  },
  {
    n: 10,
    cmd: "You shall not covet",
    ref: "Exodus 20:17",
    color: "#6B7280",
    meaning: "The final commandment uniquely addresses the interior life — not actions but desires. Covetousness is the disordered desire for what belongs to another: their spouse, house, status, gifts, relationships, or opportunities. Paul says covetousness is idolatry (Colossians 3:5) because coveting displaces God as the source of sufficiency and looks to possessions and circumstances for what only God can provide.",
    applications: ["Comparison culture — social media, status competition, lifestyle inflation — is the perfect condition for the tenth commandment to be violated continuously and unconsciously.", "The antidote to covetousness is gratitude: the deliberate naming of what is already given. You cannot simultaneously covet what someone else has and be genuinely grateful for what you have."],
    positiveForm: "Cultivate contentment and gratitude; rejoice in what God has given others.",
    catechism: "Be content with your own; rejoice in the prosperity of your neighbor.",
  },
];

export default function TenCommandmentsPage() {
  const [selected, setSelected] = useState(1);

  const cmd = COMMANDMENTS.find(c => c.n === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Ten Commandments</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Not a ladder to earn God's favor — a charter for the liberated. God gave these commandments to people he had already redeemed, as a pattern for living in the freedom he had given them.
          </p>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: 220, flexShrink: 0 }}>
            {COMMANDMENTS.map(c => (
              <button key={c.n} onClick={() => setSelected(c.n)}
                style={{ width: "100%", background: selected === c.n ? `${c.color}15` : "transparent", border: `1px solid ${selected === c.n ? c.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: selected === c.n ? `${c.color}25` : "transparent", border: `1px solid ${selected === c.n ? c.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: selected === c.n ? c.color : MUTED, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{c.n}</div>
                <span style={{ color: selected === c.n ? c.color : MUTED, fontWeight: 600, fontSize: 12, lineHeight: 1.4 }}>{c.cmd.split(' ').slice(0, 5).join(' ')}...</span>
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ background: CARD, border: `1px solid ${cmd.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${cmd.color}20`, border: `2px solid ${cmd.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: cmd.color, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{cmd.n}</div>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{cmd.ref}</span>
              </div>
              <h2 style={{ color: cmd.color, fontWeight: 900, fontSize: 20, marginBottom: 20, lineHeight: 1.4 }}>{cmd.cmd}</h2>

              <div style={{ marginBottom: 18 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{cmd.meaning}</p>
              </div>

              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 18 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>MODERN APPLICATIONS</div>
                {cmd.applications.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < cmd.applications.length - 1 ? 12 : 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: cmd.color, flexShrink: 0, marginTop: 7 }} />
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>POSITIVE FORM</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cmd.positiveForm}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>CATECHISM</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cmd.catechism}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
