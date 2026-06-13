"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Catholic Church",
  "The Papacy and Authority",
  "The Seven Sacraments",
  "Mary and the Saints",
  "Catholic and Protestant Differences",
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
    id: "The Catholic Church",
    heading: "The Catholic Church",
    paragraphs: [
      "Roman Catholicism is the largest Christian body in the world, with roughly 1.3 billion members. The word &ldquo;catholic&rdquo; means &ldquo;universal,&rdquo; and the Catholic Church understands itself as the church founded by Christ on the apostles, continuing in unbroken succession to the present. Its visible head on earth is the Pope, the Bishop of Rome, understood as the successor of the Apostle Peter.",
      "The Catholic Church is structured hierarchically: the Pope, the College of Bishops in communion with him, priests, deacons, and the laity. It is held together not only by shared doctrine but by sacramental and institutional unity. Where a Protestant might locate the church primarily in the gathering of believers around the word, Catholicism locates it in this visible, ordered, sacramental body &mdash; a society with a structure, a hierarchy, and a center, stretching across the whole world and back through the centuries.",
      "The Catechism of the Catholic Church (1992) is the authoritative summary of Catholic teaching. It draws together Scripture, the writings of the Church Fathers, the decrees of the ecumenical councils, and the liturgy into a single ordered account of what the Church believes, celebrates, lives, and prays. For Catholics it is not a private opinion but a public statement of the faith they hold in common, and it gives the inquirer a reliable place to learn what Catholicism actually teaches rather than what its critics suppose it teaches.",
      "Catholicism understands salvation as a lifelong process of being conformed to Christ through faith, the sacraments, and a life of love &mdash; not a single moment of decision but an ongoing participation in the divine life. The Catholic does not ask &ldquo;When were you saved?&rdquo; as a Protestant evangelical might, but speaks of being saved, being conformed to Christ, growing in grace, and persevering to the end. Salvation is something one is being drawn into, not merely something one once decided.",
      "At the heart of Catholic life is the Mass, the celebration of the Eucharist, repeated daily across the globe. Around it gathers a vast culture of devotion: the rosary, the liturgical year with its feasts and fasts, pilgrimage, religious orders, the veneration of relics, and a tradition of art, music, architecture, and learning unmatched in its scope. To understand Catholicism is to understand not merely a set of doctrines but an entire way of inhabiting the Christian faith &mdash; embodied, communal, sacramental, and ancient.",
      "It is worth stating plainly, against centuries of caricature, that the Catholic Church confesses the same core of the faith as other Christians: the Trinity, the deity and humanity of Christ, his death and bodily resurrection, the authority of Scripture, and salvation through Christ alone. The great creeds &mdash; the Apostles&rsquo; Creed and the Nicene Creed &mdash; are recited in Catholic worship as in Protestant and Orthodox worship. The differences that follow are real and serious, but they are differences within a shared Christian inheritance, not between rival religions.",
    ],
  },
  {
    id: "The Papacy and Authority",
    heading: "The Papacy and Authority",
    paragraphs: [
      "The defining feature of Catholicism is the papacy. Catholics base this on Matthew 16:18-19, where Jesus says to Peter, &ldquo;You are Peter, and on this rock I will build my church&hellip; I will give you the keys of the kingdom of heaven.&rdquo; Catholics understand this as Christ establishing Peter as the first Pope, with authority passed to his successors, the Bishops of Rome.",
      "Around this claim the whole Catholic understanding of the church is organized. Peter, on this reading, was given a unique office of leadership among the apostles; he went to Rome, was martyred there, and his office did not die with him but passed to the next Bishop of Rome, and so on in unbroken succession to the present Pope. The papacy is thus not a later invention but, in Catholic understanding, the continuation of an office Christ himself established &mdash; the visible principle and foundation of the church&rsquo;s unity.",
      "The doctrine of papal infallibility (defined at the First Vatican Council in 1870) holds that when the Pope speaks ex cathedra (&ldquo;from the chair&rdquo; of Peter) on matters of faith and morals, he is preserved from error &mdash; a rarely invoked power. It is widely misunderstood: it does not mean the Pope is sinless, or that his every opinion is infallible, or that he cannot be mistaken about politics, science, or history. It applies only to solemn definitions of doctrine, and it has been exercised in this strict sense only a handful of times.",
      "Catholic authority rests on three legs: Scripture, sacred Tradition, and the Magisterium (the teaching authority of the Church). Scripture and Tradition are understood as two channels of the one divine revelation &mdash; not Scripture as the deposit and Tradition as additions to it, but both flowing from the apostolic preaching, the one written and the other handed down. The Magisterium is the living teaching office, vested in the Pope and the bishops in communion with him, whose task is not to invent doctrine but to guard, interpret, and faithfully transmit what has been received.",
      "Protestants reject papal authority and the principle that Tradition stands alongside Scripture, holding instead to sola scriptura &mdash; Scripture as the supreme authority. On the Protestant view, every human authority in the church, including councils and popes, stands under the written word of God and may be corrected by it; Scripture alone is the final court of appeal. Catholics reply that Scripture itself came to us through the church, that it requires authoritative interpretation, and that without a living Magisterium the Protestant principle has in fact produced endless division.",
      "This is one of the deepest divides between the traditions. It is, in a sense, the question beneath all the other questions, because it determines how every other dispute is to be settled. When a Catholic and a Protestant disagree about Mary, or purgatory, or the sacraments, they are finally disagreeing about who has the authority to decide &mdash; the church teaching through pope and council, or the conscience bound by Scripture. Until that question is resolved, the others cannot be.",
    ],
  },
  {
    id: "The Seven Sacraments",
    heading: "The Seven Sacraments",
    paragraphs: [
      "Catholicism recognizes seven sacraments &mdash; efficacious signs of grace, instituted by Christ, through which divine life is given. They are not bare symbols or reminders but, in Catholic understanding, real instruments by which God acts. They accompany the Christian through the whole of life: birth into the church, growth, nourishment, healing, vocation, and the approach of death. Through them, the grace won by Christ is applied to particular people at particular moments.",
      "The first three are the sacraments of initiation. (1) Baptism: incorporation into Christ and the Church, washing away original sin. (2) Confirmation: the strengthening of the Spirit, completing what baptism began and sealing the believer for Christian witness. (3) The Eucharist: the source and summit of Catholic life, in which (by transubstantiation) the bread and wine become the actual body and blood of Christ. Together these make and sustain a Christian within the body of the church.",
      "The next two are the sacraments of healing. (4) Penance, also called Reconciliation or Confession: the confession of sins to a priest and the receiving of absolution, by which sins committed after baptism are forgiven and the penitent is reconciled to God and the church. (5) Anointing of the Sick: the sacrament for those gravely ill or near death, offering spiritual strength, the forgiveness of sins, and, if God wills, bodily healing &mdash; long known as &ldquo;last rites&rdquo; when administered at the end of life.",
      "The final two are the sacraments at the service of communion. (6) Holy Orders: ordination to the diaconate, priesthood, or episcopate, by which a man is configured to Christ to serve and lead the church. (7) Matrimony: the covenant by which a man and woman form a lifelong union, raised by Christ to a sacrament and made a sign of his own union with the church. These two sacraments are directed toward the building up of others and the continuation of the people of God.",
      "The sacraments are understood to actually convey the grace they signify (ex opere operato &mdash; &ldquo;by the work worked&rdquo;), not merely symbolize it. This Latin phrase means that the sacrament&rsquo;s effect does not depend on the personal holiness of the minister but on Christ, who acts through it &mdash; though the worthy reception of grace does require the right disposition in the recipient. A baptism is valid whether the priest is a saint or a scoundrel, because it is finally Christ who baptizes. The Mass, centered on the Eucharist, is the heart of Catholic worship, re-presenting the one sacrifice of Calvary and making it present to the worshiper.",
      "Protestants generally recognize only two sacraments (baptism and the Lord&rsquo;s Supper) and differ sharply on the Eucharist, most rejecting transubstantiation. The Reformers held that Christ instituted only two ordinances with clear scriptural warrant, and that the medieval church had multiplied sacraments without biblical basis. On the Lord&rsquo;s Supper, Protestant views range widely &mdash; from Luther&rsquo;s strong real presence to Calvin&rsquo;s spiritual presence to the memorial view held by many Baptists &mdash; but they share a common rejection of the claim that the bread and wine become, in their very substance, the body and blood of Christ.",
    ],
  },
  {
    id: "Mary and the Saints",
    heading: "Mary and the Saints",
    paragraphs: [
      "Catholic devotion to Mary is one of the most misunderstood aspects of the faith. To outsiders it can look like the worship of a goddess; to Catholics it is something quite different &mdash; the honoring of the woman God chose to bear his Son, and through her, the honoring of the Son himself. Understanding what Catholics actually claim, and what they deny, is essential to any fair account of the tradition.",
      "Catholics venerate Mary as the Mother of God (Theotokos, &ldquo;God-bearer&rdquo;) &mdash; a title affirmed at the Council of Ephesus (431) by all historic Christians. The title is, strictly, a statement about Christ: because Jesus is one person who is fully God, the woman who bore him is rightly called the mother of God, not merely the mother of his human nature. In affirming this, Catholics stand on common ground with the Orthodox and with the historic Protestant confessions, which also accept the Ephesus definition.",
      "Catholic Marian doctrines go further: the Immaculate Conception (Mary was conceived without original sin), the Perpetual Virginity (Mary remained a virgin throughout her life), and the Assumption (Mary was taken bodily into heaven at the end of her earthly life). These distinctive dogmas, two of them defined relatively late (the Immaculate Conception in 1854, the Assumption in 1950), are where Catholic and Protestant teaching part company most sharply, since Protestants find no clear scriptural warrant for them.",
      "Catholics distinguish between the worship (latria) due to God alone and the veneration (dulia, and for Mary, hyperdulia) given to saints &mdash; a distinction Protestants often find unconvincing in practice. In Catholic theology the line is absolute: only God is adored, while the saints are merely honored as God&rsquo;s friends and as examples of his grace. Critics respond that the distinction, however clear in the textbooks, is easily blurred in popular piety, where the language and gestures of devotion can look indistinguishable from worship.",
      "The communion of saints means that Catholics ask Mary and the saints to pray for them, as one would ask a living friend &mdash; not worshiping them but seeking their intercession. The reasoning runs thus: if it is right to ask a fellow Christian on earth to pray for you, and if those who have died in Christ are not dead but alive with him, then it is right to ask them to pray for you too. The saints in heaven are not absent but present, members of the same body, joined in the one great prayer of the church.",
      "Protestants reject the invocation of saints, holding that Christ is the sole mediator (1 Tim 2:5), and reject the distinctive Marian dogmas as lacking biblical warrant. They honor Mary as the blessed mother of the Lord and a model of faith, and they affirm the communion of saints as a shared life in Christ, but they decline to pray to her or to the saints, insisting that the believer has direct access to God through Christ alone and needs no other intercessor. Here, as elsewhere, the dispute turns finally on the question of authority &mdash; whether the church may teach as binding what Scripture does not plainly require.",
    ],
  },
  {
    id: "Catholic and Protestant Differences",
    heading: "Catholic and Protestant Differences",
    paragraphs: [
      "The Reformation divided Western Christianity over issues that remain live. Five centuries later, the questions raised in the 16th century have not gone away, even where the polemics have softened and genuine dialogue has begun. To see them clearly is to understand both why the division happened and why it has proved so hard to heal.",
      "The first is justification. Catholics teach that justification involves both the imputation and infusion of righteousness &mdash; God makes us actually righteous through grace, faith, and works of love; Protestants (classically) teach justification by faith alone, a forensic declaration in which God credits the believer with the righteousness of Christ apart from works. The Joint Declaration on the Doctrine of Justification (1999) between Catholics and Lutherans found surprising common ground while leaving real differences &mdash; a landmark agreement that showed the two sides were nearer than centuries of mutual condemnation had assumed, without pretending the gap had closed entirely.",
      "The second is authority: Scripture and Tradition vs. Scripture alone. Catholics hold that the one divine revelation reaches us through both the written word and the living Tradition of the church, authoritatively interpreted by the Magisterium. Protestants hold that Scripture alone is the final authority, standing over every tradition, council, and office. This is the disagreement beneath the disagreements, for it governs how all the others are to be resolved.",
      "The third concerns the sacraments and the Mass: seven sacraments rather than two, the doctrine of transubstantiation, and the understanding of the Mass as making present the one sacrifice of Christ. To Protestants, the Catholic Mass risked obscuring the once-for-all completeness of Calvary; to Catholics, the Mass does not repeat that sacrifice but participates in it, making the eternal offering of Christ present to the worshiper across time. The disagreement here is not about whether Christ&rsquo;s death is sufficient, but about how its benefits are conveyed.",
      "The fourth and fifth are purgatory and indulgences. (4) Purgatory: Catholics believe in a state of purification after death for those destined for heaven, in which the residue of sin is cleansed before the soul enters the divine presence; Protestants reject it as unbiblical, holding that the believer is made perfect in Christ at death. (5) Indulgences: the issue that sparked the Reformation, by which the church remits the temporal punishment due to forgiven sins; still part of Catholic practice, though much reformed since the abuses Luther attacked in 1517.",
      "Yet Catholics and Protestants share the great creeds, the Trinity, the deity and resurrection of Christ, and salvation through him &mdash; the differences are serious but exist within a shared Christian core. It would be a distortion to treat these two traditions as rival religions. They are estranged branches of one family, divided over real and weighty matters of how grace reaches us and where authority finally lies, yet united in the confession that the Triune God has acted to save the world in Jesus Christ, crucified and risen. To hold both truths together &mdash; the seriousness of the differences and the reality of the shared faith &mdash; is the beginning of an honest understanding.",
    ],
  },
];

const videoItems = [
  { videoId: "U2A5cQwLp7M", title: "What Do Catholics Believe? An Overview" },
  { videoId: "07pkfHGCNFw", title: "Catholic vs Protestant — Key Differences Explained" },
  { videoId: "lFkFFXHBcsU", title: "Understanding the Catholic Mass and Sacraments" },
];

export default function ChristianCatholicismExplainedPage() {
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
            Catholicism Explained
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
            Understanding Roman Catholicism &mdash; the papacy and apostolic succession, the seven sacraments, the role of Mary and the saints, Scripture and Tradition, and how Catholic and Protestant theology differ. A fair, informed overview.
          </p>
        </header>

        <aside style={{ marginBottom: "2rem", padding: "1.5rem 1.75rem", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 16 }}>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;You are Peter, and on this rock I will build my church&hellip; I will give you the keys of the kingdom of heaven&rdquo; (Matthew 16:18-19). On these words rests the Catholic understanding of the church &mdash; visible, sacramental, ancient, and one." }} />
        </aside>

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
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "Catholic and Protestant Christians are estranged branches of one family &mdash; divided over real and weighty matters of grace and authority, yet united in the great creeds and in the confession that the Triune God has saved the world in Jesus Christ, crucified and risen." }} />
        </aside>
      </main>
    </div>
  );
}
