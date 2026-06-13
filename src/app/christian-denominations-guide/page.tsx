"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "What All Christians Share",
  "The Three Great Branches",
  "The Protestant Families",
  "What Actually Divides Them",
  "Thinking About Differences Charitably",
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
    id: "What All Christians Share",
    heading: "What All Christians Share",
    paragraphs: [
      "Before the divisions, the unity. It is easy, when surveying the bewildering array of Christian denominations, to conclude that Christians agree on almost nothing. The opposite is true. Beneath the differences of governance, ritual, and emphasis lies a vast shared inheritance &mdash; a confession so widely held that it defines what it means to be a Christian at all. All orthodox Christians across all denominations affirm the core of the faith summarized in the ecumenical creeds: the Apostles&rsquo; Creed and the Nicene Creed.",
      "That shared core is remarkably substantial. It includes the conviction that there is one God in three persons &mdash; Father, Son, and Holy Spirit; the full deity and full humanity of Jesus Christ; his virgin birth, his crucifixion under Pontius Pilate, his bodily resurrection on the third day, his ascension into heaven, and his promised return to judge the living and the dead. These are not vague sentiments but specific, history-anchored claims that every major tradition holds in common.",
      "The shared confession reaches further still: salvation through Christ; the authority of Scripture as the word of God; the church as the body of Christ; the forgiveness of sins; and the resurrection of the dead and the life everlasting. These are the load-bearing walls of the Christian house. A movement that denied them &mdash; that rejected the Trinity, say, or the deity of Christ &mdash; would not be a Christian denomination at all but a different religion.",
      "C.S. Lewis gave this shared core a memorable name: &ldquo;mere Christianity.&rdquo; He pictured it as a hallway from which the various rooms &mdash; the denominations &mdash; open. The hallway is not a place to live; one must finally enter a room, with its fire and its chairs and its company. But the hallway is real, and it is large, and it is the common ground on which all the rooms depend. No one becomes a Christian by standing in the hall; but no room is the whole house.",
      "The denominational differences, real as they are, exist within this shared confession. They are family quarrels, not contests between strangers. Most divisions concern matters of church government (who leads, and how), the sacraments (how many, and what they do), the precise mechanics of salvation (how grace and faith and works relate), and worship style (formal liturgy or free expression). These are not trivial matters &mdash; some of them touch deep questions &mdash; but they are not the core of who God is and what he has done in Christ.",
      "To begin with what unites is not naive. It is simply accurate. The risen Christ prayed that his followers would be one (John 17:21), and the unity he prayed for already exists, however imperfectly visible, wherever the Triune God is worshiped and the gospel is confessed. Understanding the denominations rightly begins here: not with a list of disagreements, but with the immense, shared, world-spanning confession that makes them all recognizably Christian.",
    ],
  },
  {
    id: "The Three Great Branches",
    heading: "The Three Great Branches",
    paragraphs: [
      "Christianity has three major branches, each with deep historical roots and a coherent theological vision. They are not merely three styles or three preferences; they are three distinct ways of being the church, each shaped by centuries of history, controversy, and prayer. Knowing the three branches is the first step toward making sense of the whole.",
      "The first is Roman Catholicism, the largest of the three at roughly 1.3 billion adherents. It is centered on the papacy &mdash; the bishop of Rome, understood as the successor of the apostle Peter and the visible head of the church on earth. Catholicism recognizes seven sacraments, holds that the authority of Scripture and sacred Tradition belong together rather than in competition, and cultivates a rich devotion to the Virgin Mary and the saints as members of the church who pray with and for the living.",
      "The second is Eastern Orthodoxy, numbering roughly 220 million. These are the churches of the East &mdash; Greek, Russian, Antiochian, Serbian, and others &mdash; which split from Rome in the Great Schism of 1054. The division turned on papal authority and on the &ldquo;filioque&rdquo; clause, a disputed addition to the Nicene Creed concerning whether the Spirit proceeds from the Father alone or from the Father and the Son. Orthodoxy emphasizes the mystery of God (apophatic theology, which speaks of God by what he is not), the veneration of icons, theosis (the believer&rsquo;s deification, or sharing in the divine life), and the authority of the seven ecumenical councils.",
      "The third is Protestantism, roughly 900 million strong. It originated in the 16th-century Reformation and now encompasses thousands of denominations. What unites this sprawling family is a set of principles recovered by the Reformers: salvation by grace through faith alone (sola fide), the supreme authority of Scripture over all human tradition (sola scriptura), and the priesthood of all believers &mdash; the conviction that every Christian has direct access to God through Christ, without need of a human mediator beyond him.",
      "These three branches are not stages on a single road, with one being simply an improvement on another. Each represents a genuine and serious attempt to be faithful to Christ and the apostles. Catholicism preserves a vivid sense of the church&rsquo;s visible unity and sacramental life; Orthodoxy guards the mystery and beauty of worship and the wisdom of the early councils; Protestantism recovers the immediacy of grace and the supremacy of the biblical word. Each has, at times, neglected what the others have treasured.",
      "It is worth noting how the branches relate historically. Orthodoxy and Catholicism share the first thousand years of church history and only parted in 1054. Protestantism emerged from within Western (Catholic) Christianity five centuries later. So the three are like a tree: one trunk for the first millennium, a first great fork in 1054, and a second great branching in the 1500s. Understanding this shape keeps the conversation honest &mdash; these are relatives, with shared ancestors and a common inheritance, not unrelated rivals.",
    ],
  },
  {
    id: "The Protestant Families",
    heading: "The Protestant Families",
    paragraphs: [
      "Protestantism is not one thing but a family of families. To call someone a &ldquo;Protestant&rdquo; is rather like calling someone a &ldquo;European&rdquo; &mdash; true, but uninformative until you know which nation. The major Protestant families each arose from a particular reforming impulse, a particular leader or movement, and a particular set of convictions about what the recovery of the gospel required.",
      "The Lutheran family follows Martin Luther, whose protest against indulgences in 1517 lit the fuse of the Reformation. Lutherans emphasize justification by faith &mdash; the heart of Luther&rsquo;s discovery that sinners are declared righteous as a gift, not by their works. They affirm the real presence of Christ in the Lord&rsquo;s Supper and make a careful distinction between law (which commands and condemns) and gospel (which promises and saves). The Reformed and Presbyterian family follows John Calvin, emphasizing God&rsquo;s sovereignty over all things, covenant theology as a key to reading Scripture, and &mdash; in Presbyterianism specifically &mdash; church government by elders rather than bishops.",
      "The Anglican and Episcopal family is the Church of England and its global communion. Anglicanism has long described itself as a &ldquo;middle way&rdquo; (via media) between Catholic and Protestant: it retained bishops and a formal liturgy (the Book of Common Prayer) while embracing the Reformation&rsquo;s recovery of Scripture and grace. The Baptist family emphasizes believer&rsquo;s baptism by immersion &mdash; baptism reserved for those old enough to profess faith &mdash; along with the autonomy of the local congregation and a historic commitment to religious liberty and the separation of church and state.",
      "The Methodist family follows John Wesley, an 18th-century Anglican priest whose revival movement emphasized sanctification (growth in actual holiness), the warmed heart of personal experience, and vigorous social action &mdash; against slavery, for prison reform, for the poor. The Pentecostal and Charismatic family, born in the early 20th century, emphasizes the gifts of the Spirit, especially speaking in tongues and healing, and expects the supernatural power of Pentecost to be active in the church today. It is the fastest-growing movement in global Christianity, especially in Africa, Latin America, and Asia.",
      "A more recent development is the non-denominational church &mdash; a modern phenomenon, especially in America, of independent congregations that reject formal denominational ties altogether. Such churches often draw on a mix of evangelical and charismatic streams while declining to fly any historic flag. They illustrate both the freedom and the fragmentation of the Protestant principle: the same conviction that frees a congregation to follow Scripture as it reads it can also multiply divisions endlessly.",
      "It would be a mistake to view this profusion of families with only dismay. Each family has preserved something the others were prone to lose: the Lutherans, the clarity of grace; the Reformed, the majesty of God; the Anglicans, the beauty of ordered worship; the Baptists, the freedom of conscience; the Methodists, the call to holiness and justice; the Pentecostals, the living power of the Spirit. The wise observer learns from all of them, and recognizes that no single family holds the whole truth alone.",
    ],
  },
  {
    id: "What Actually Divides Them",
    heading: "What Actually Divides Them",
    paragraphs: [
      "The real points of difference deserve to be stated soberly, without exaggeration and without minimizing. Denominational divisions are not arbitrary; they cluster around a handful of genuine and serious questions on which thoughtful Christians have, in good conscience, reached different conclusions. Five such questions account for most of the disagreement.",
      "The first is authority. Where does final authority lie? Protestants answer: Scripture alone (sola scriptura). Catholics answer: Scripture together with Tradition and the Magisterium &mdash; the church&rsquo;s teaching office. The Orthodox answer: Scripture and Tradition as received and interpreted through the ecumenical councils. This is the deepest of the divisions, because it determines how every other question gets settled. Disagreements about authority are disagreements about how to resolve disagreements.",
      "The second is salvation. How is a person saved? Protestants emphasize faith alone (sola fide) &mdash; salvation received as a gift, apart from any meritorious works. Catholics and Orthodox speak of faith working through love, including the sacraments and the believer&rsquo;s genuine cooperation with grace. The difference is real, though recent dialogue (such as the 1999 Joint Declaration on Justification between Lutherans and Catholics) has shown the two sides are nearer than centuries of polemic suggested.",
      "The third is the sacraments. How many are there, and what do they do? Protestants generally recognize two &mdash; baptism and the Lord&rsquo;s Supper &mdash; while Catholics and Orthodox recognize seven. And there is the further question of what happens in the Supper: from transubstantiation (Catholic teaching that the bread and wine become Christ&rsquo;s body and blood) to a strong doctrine of real presence (Lutheran and Orthodox) to a memorial view (held by most Baptists), in which the meal is chiefly a remembrance. The fourth is church government: pope and bishops (Catholic) versus bishops without a pope (Orthodox, Anglican) versus government by elders (Presbyterian) versus the autonomy of each local congregation (Baptist).",
      "The fifth is baptism &mdash; specifically, who should receive it. Most traditions practice infant baptism: Catholic, Orthodox, Lutheran, Reformed, Anglican, and Methodist churches baptize the infants of believers, seeing baptism as the sign of God&rsquo;s covenant promise. Baptists and Pentecostals practice believer&rsquo;s baptism, reserving it for those who can personally profess faith. This single question has divided otherwise close allies for centuries, precisely because both sides are reading the same Scriptures with care.",
      "These differences are not trivial. To pretend they do not matter would insult the Christians who have lived and sometimes died for them. But neither do they all carry equal weight. The question of the Trinity is not on this list, because no orthodox denomination disputes it. The differences that divide denominations are, almost entirely, second-order questions &mdash; weighty enough to shape distinct communities, but not weighty enough to place anyone outside the faith. Seeing them clearly, and sizing them rightly, is the beginning of wisdom about the divided church.",
    ],
  },
  {
    id: "Thinking About Differences Charitably",
    heading: "Thinking About Differences Charitably",
    paragraphs: [
      "How should a Christian think about the divisions? Not with indifference, which treats truth as unimportant, and not with hostility, which treats fellow believers as enemies. The path between these errors runs through three virtues: humility, discernment, and charity.",
      "First, humility. No one tradition has a monopoly on truth, and each has preserved emphases the others have neglected. The honest student of church history will find that wisdom and folly, sanctity and scandal, are distributed across every branch and family. To hold one&rsquo;s own convictions firmly while granting that one might have something to learn from others is not weakness; it is maturity. The most learned Christians are often the most reluctant to claim that their tradition has nothing left to learn.",
      "Second, discernment, because not all differences are equal. A useful framework distinguishes three orders of doctrine. First-order issues &mdash; the Trinity, the deity of Christ, the gospel of grace &mdash; are essential to the faith itself; to deny them is to leave Christianity behind. Second-order issues &mdash; baptism, church government, the nature of the Lord&rsquo;s Supper &mdash; are weighty enough that they legitimately separate denominations, since congregations cannot easily practice contradictory views together. Third-order issues &mdash; worship style, the fine details of end-times prophecy &mdash; are matters on which sincere Christians differ and which should not even divide a single congregation.",
      "Confusing the orders is the source of much needless strife. To treat a third-order preference as though it were a first-order truth is to break fellowship over a matter of taste. To treat a first-order truth as though it were a mere preference is to dissolve the faith into vagueness. The discerning Christian learns to fight where fighting is warranted, to tolerate where tolerance is right, and to tell the difference.",
      "Third, charity: treating fellow Christians of other traditions as brothers and sisters, not as enemies. The scandal of Christian division is real. In his great prayer on the night before his death, Jesus prayed &ldquo;that they may all be one&rdquo; (John 17:21) &mdash; and our divisions are a visible contradiction of that prayer before a watching world. The ecumenical movement, for all its limits and disappointments, seeks to heal what sin and history have torn. Even where formal union is impossible, charity is always possible.",
      "Finally, a practical word on how to choose a church. The wise choice is governed not by the denominational label alone but by deeper marks: the faithful preaching of the gospel, the right administration of the sacraments, genuine community in which people are known and loved, and a place where you can actually grow in Christ and serve others. A perfect church does not exist, because it would have to exclude you and me. The question is not which tradition is flawless, but where, with these people, in this place, you can love God and your neighbor and be formed into the likeness of Christ.",
    ],
  },
];

const videoItems = [
  { videoId: "vK3Jy0Ej1cI", title: "The Main Christian Denominations Explained" },
  { videoId: "I0WrxF7gj8Q", title: "Catholic, Orthodox, Protestant — What's the Difference?" },
  { videoId: "Vs5pErZc4dE", title: "Understanding Protestant Denominations" },
];

export default function ChristianDenominationsGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);
  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem" };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" }}>Christianity &amp; the Church</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.75rem 0 1rem" }}>
            Christian Denominations Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
            The major branches of Christianity &mdash; Catholic, Orthodox, and Protestant &mdash; the main Protestant families, what unites all Christians, what divides denominations, and how to think about the differences charitably.
          </p>
        </header>

        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t ? ACCENT : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                cursor: "pointer", transition: "all .18s",
              }}>
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <article style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>{currentSection.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p key={i} style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </article>
        )}

        {tab === "Videos" && (
          <section style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</div>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </section>
        )}

        <aside style={{ marginTop: "2.5rem", padding: "1.5rem 1.75rem", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 16 }}>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;That they may all be one&rdquo; (John 17:21). The denominations are family quarrels within a vast shared confession. Hold your convictions firmly, weigh the differences wisely, and treat every fellow believer as a brother or sister in Christ." }} />
        </aside>
      </main>
    </div>
  );
}
