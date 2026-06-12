"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianlove_entries";

interface LVGEntry {
  relationship: string;
  loveAction: string;
  cost: string;
}

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const VIDEOS = [
  { videoId: "BgIxbFxvkUk", title: "1 Corinthians 13: The Love Chapter Explained" },
  { videoId: "z9z5gGgJwFY", title: "C.S. Lewis: The Four Loves" },
  { videoId: "GJOiAaJQkFo", title: "What Is Agape Love?" },
  { videoId: "wh3YT1YLMVM", title: "Francis Chan: Crazy Love" },
  { videoId: "bL3uBdJhOVE", title: "Love Your Enemies - Luke 6 Deep Dive" },
  { videoId: "GOZ-iFGPlXo", title: "God Is Love - 1 John 4" },
];

const cardStyle: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 14,
  padding: "1.5rem 1.75rem",
};

const h3Style: React.CSSProperties = {
  color: ACCENT,
  fontWeight: 700,
  fontSize: "1.05rem",
  margin: "0 0 0.75rem",
};

const pStyle: React.CSSProperties = {
  color: MUTED,
  lineHeight: 1.8,
  margin: "0 0 0.9rem",
  fontSize: "0.95rem",
};

const pLast: React.CSSProperties = { ...pStyle, margin: 0 };

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: BG,
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  color: TEXT,
  padding: "0.75rem 0.9rem",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  fontFamily: "inherit",
  resize: "vertical",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: TEXT,
  fontWeight: 600,
  fontSize: "0.88rem",
  margin: "0 0 0.4rem",
};

export default function ChristianLoveGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LVGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [relationship, setRelationship] = useState("");
  const [loveAction, setLoveAction] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!relationship.trim() && !loveAction.trim() && !cost.trim()) return;
    setEntries(prev => [
      { relationship: relationship.trim(), loveAction: loveAction.trim(), cost: cost.trim() },
      ...prev,
    ]);
    setRelationship("");
    setLoveAction("");
    setCost("");
  };

  const deleteEntry = (index: number) => {
    setEntries(prev => prev.filter((_, i) => i !== index));
  };

  const accentLight = "#f87093";

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: accentLight, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
            Christian Love
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          The Greatest of These: A Guide to Christian Love
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;And now these three remain: faith, hope, and love. But the greatest of these is love.&rdquo; Paul
          ends the most searching analysis of love ever written with that verdict. Not faith &mdash; though by faith
          we stand. Not hope &mdash; though by hope we endure. Love, because love alone outlasts the age to come.
          It is the nature of God himself. And it is the one thing the world, in every generation, most desperately
          needs to see embodied.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the four Greek loves and the distinctiveness of <em>agape</em>, the anatomy of love
          in 1 Corinthians 13, practices for developing costly love, voices from church history who illuminated
          it, key Scriptures, a private journal, and teaching videos. Related guides:{" "}
          <Link href="/christian-marriage" style={{ color: accentLight, textDecoration: "underline" }}>Christian marriage</Link>,{" "}
          <Link href="/christian-friendship" style={{ color: accentLight, textDecoration: "underline" }}>Christian friendship</Link>, and{" "}
          <Link href="/christian-forgiveness" style={{ color: accentLight, textDecoration: "underline" }}>forgiveness</Link>.
        </p>

        {/* TAB BAR */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: tab === t.id ? ACCENT : BORDER,
                background: tab === t.id ? ACCENT + "22" : "transparent",
                color: tab === t.id ? accentLight : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ============ THEOLOGY ============ */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={cardStyle}>
              <h3 style={h3Style}>The Four Greek Loves &mdash; and Why Agape Is Different</h3>
              <p style={pStyle}>
                C.S. Lewis popularized the four Greek words for love in his book <em>The Four Loves</em> (1960),
                and the taxonomy remains the most useful starting point for any serious exploration of the
                subject. <em>Storge</em> is the love of familiarity and belonging &mdash; the affection of
                parent and child, of old friends, of the warmth that grows from shared life. It is the most
                common love, the one that barely notices itself. <em>Philia</em> is the love of friendship
                &mdash; the delight in another person&rsquo;s inner world, the &ldquo;what, you too?&rdquo;
                that Lewis describes as the moment friendship is born. <em>Eros</em> is the love of
                in-love-ness &mdash; not merely sexual desire but the consuming fascination with another
                person that reaches for union. And then there is <em>agape</em>.
              </p>
              <p style={pStyle}>
                <em>Agape</em> is not the natural love that arises from what is lovely in its object. It is
                the love that gives itself to its object regardless of whether the object is lovely,
                reciprocating, or even pleasant. It is the love &ldquo;shed abroad in our hearts by the Holy
                Spirit&rdquo; (Romans 5:5) &mdash; love as gift rather than response, love as decision and
                action rather than feeling and attraction. This is the distinctively Christian contribution to
                the history of human love: a love that is not earned, not dependent on merit, and not
                extinguished by the unworthiness of its recipient. God&rsquo;s love for sinners is the
                prototype; our love for enemies is its most demanding expression.
              </p>
              <p style={pLast}>
                The four loves are not in competition, and Lewis was careful to honor the natural loves rather
                than depreciate them in favor of agape. Storge, philia, and eros are good gifts of God,
                capable of being hallowed by agape working through them. The error is not in having the
                natural loves but in treating them as self-sufficient &mdash; as if they could bear alone the
                weight that only divine love can carry. A marriage built on eros alone collapses when the
                in-love-ness fades; a marriage in which eros is also carrying agape can survive the
                exhaustion, the failure, and the long years that test every covenant.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>The Anatomy of Love &mdash; 1 Corinthians 13</h3>
              <p style={pStyle}>
                Paul writes 1 Corinthians 13 not as a standalone poem but as an argument planted in the middle
                of a dispute about spiritual gifts. The Corinthians were competing over gifts &mdash; which
                were more impressive, who had more, whose use was more spectacular. Paul&rsquo;s response is
                to name the one gift that trumps them all, and then to dissect it. The chapter is not sentiment;
                it is surgery. He does not say love is a warm feeling. He gives love fifteen verbs, and every
                one of them names something that can be chosen when the feeling is absent.
              </p>
              <p style={pStyle}>
                The positive verbs &mdash; love is patient, love is kind, love rejoices with truth, love bears,
                believes, hopes, endures all things &mdash; describe a love that keeps choosing its object
                across the entire span of a relationship, even through disappointment and betrayal. The
                negative verbs &mdash; love does not envy or boast, is not arrogant or rude, does not insist
                on its own way, is not irritable or resentful, does not rejoice at wrongdoing &mdash; describe
                a love that has been emptied of the self-protective instincts that make us difficult to live
                with. Put together, the chapter describes a person who has been so thoroughly loved by God
                that love has replaced the self as the operating center of their life.
              </p>
              <p style={pLast}>
                The most searching part of the chapter is its framing: &ldquo;If I speak in the tongues of men
                and of angels, but have not love, I am a noisy gong or a clanging cymbal.&rdquo; The list of
                things that count for nothing without love &mdash; tongues, prophecy, knowledge, faith, giving,
                even martyrdom &mdash; is designed to demolish every substitute. You can die for a cause and
                lack love. You can give everything you own and lack love. The thing that makes a life Christian
                is not its impressive resume but whether love &mdash; God&rsquo;s love worked through a
                person &mdash; was at the center. Everything else is noise.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Love as the Summary of the Law &mdash; Matthew 22:36&ndash;40</h3>
              <p style={pStyle}>
                When a lawyer tests Jesus with the question &ldquo;which is the great commandment?&rdquo; Jesus
                answers with two and then adds: &ldquo;On these two commandments depend all the Law and the
                Prophets.&rdquo; Love God with all you have; love your neighbor as yourself. The word
                &ldquo;depend&rdquo; is revealing: he does not say the rest of the law is contained in these
                two, or replaced by them. He says the rest of the law hangs from them &mdash; as a door hangs
                from its hinges, or a body hangs from its skeleton. Remove the hinges and the door collapses;
                remove love and the law becomes a collection of arbitrary rules rather than an expression of
                a coherent divine character.
              </p>
              <p style={pStyle}>
                This means that every specific command in Scripture is, when properly understood, a
                specification of love. The prohibition on murder is a specification of love for image-bearers
                of God. The prohibition on theft is a specification of love for the neighbor whose property
                supports their life and dignity. The command to honor parents is a specification of love for
                those through whom God gave life. Reading the law through the lens of love does not empty it
                of content; it fills it with the personal character of the God who gave it.
              </p>
              <p style={pLast}>
                The &ldquo;as yourself&rdquo; of the neighbor commandment has been much discussed. It is not
                a command to love yourself first and then, from that foundation, love others. It assumes that
                self-care is already instinctive &mdash; &ldquo;no one ever hated his own flesh&rdquo; (Eph.
                5:29) &mdash; and uses it as a benchmark. You know what it is to be hungry, frightened,
                lonely, wronged. Extend that knowledge with action toward the one beside you. The command
                is not a psychology lesson; it is a demand for empathy in action.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>&ldquo;God Is Love&rdquo; vs. &ldquo;Love Is God&rdquo; &mdash; 1 John 4:8</h3>
              <p style={pStyle}>
                John&rsquo;s statement &ldquo;God is love&rdquo; (1 John 4:8) is perhaps the most quoted
                sentence in the New Testament and one of the most regularly misread. It does not say love is
                God &mdash; that is the cultural inversion that makes romantic love or parental love or
                humanitarian feeling into the highest reality, the thing that justifies and validates whatever
                it is applied to. When love becomes God, it loses its content and simply sanctifies whatever
                we feel most strongly. Two people &ldquo;in love&rdquo; who leave their families, or a
                movement animated by love for its own that destroys anyone who opposes it &mdash; on the
                &ldquo;love is God&rdquo; reading, these are valid expressions of ultimate reality.
              </p>
              <p style={pStyle}>
                &ldquo;God is love&rdquo; means something different and more demanding. It means that the
                character of the personal God who created the world, called Israel, became flesh in Jesus,
                and raised him from the dead is love &mdash; that love is not a human projection onto the
                universe but a disclosure of what is most real about it. And because God is personal, not
                abstract, love is defined by its Object: we know what love is by looking at what God does.
                &ldquo;In this is love, not that we have loved God but that he loved us and sent his Son to
                be the propitiation for our sins&rdquo; (1 John 4:10). The cross is the definition.
              </p>
              <p style={pLast}>
                The practical implication is that love is not what we feel most deeply; it is what God has
                revealed most clearly. This means love has a shape, a content, a structure that can be
                examined and tested. It can be got wrong. It can be counterfeited. The cults that have
                abused people &ldquo;in the name of love,&rdquo; the relationships that have destroyed
                people &ldquo;out of love,&rdquo; the ideologies that have killed millions &ldquo;for
                love of humanity&rdquo; &mdash; these are indictments of the counterfeit, not the real
                thing. Real love looks like a cross.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Loving Enemies &mdash; The Radical Command &mdash; Luke 6:27&ndash;36</h3>
              <p style={pStyle}>
                &ldquo;But I say to you who hear, Love your enemies, do good to those who hate you, bless
                those who curse you, pray for those who abuse you.&rdquo; This is the most countercultural
                thing Jesus ever said, and he said it in the Sermon on the Plain to a crowd that included
                people under Roman occupation, people whose loved ones had been killed by the same enemies
                Jesus was asking them to love. The command is not hypothetical. It costs something real.
              </p>
              <p style={pStyle}>
                Jesus then dismantles every natural defense against the command one by one. &ldquo;If you
                love those who love you, what benefit is that to you?&rdquo; &mdash; even sinners do that.
                &ldquo;If you do good to those who do good to you&rdquo; &mdash; no credit there either.
                &ldquo;If you lend to those from whom you expect to receive&rdquo; &mdash; pagans manage
                that. The distinguishing mark of the kingdom citizen is love that operates outside the
                economy of reciprocity. It gives without expectation of return because it has been given
                to without any desert at all.
              </p>
              <p style={pLast}>
                The ground given in verses 35&ndash;36 is theological, not strategic: &ldquo;for he is kind
                to the ungrateful and the evil. Be merciful, even as your Father is merciful.&rdquo; The
                rain falls on the just and the unjust. The sun rises on both. The indiscriminate generosity
                of God&rsquo;s creation is the template. We love enemies not because they deserve it but
                because God loves us though we did not deserve it, and his love is now our operating system.
                This command is only livable for people who have genuinely received it; for everyone else
                it is merely admirable and impossible.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>The New Commandment &mdash; John 13:34&ndash;35</h3>
              <p style={pStyle}>
                At the Last Supper, hours before the cross, Jesus gives his disciples what he calls a new
                commandment: &ldquo;Love one another as I have loved you.&rdquo; The novelty is not that
                love is commanded &mdash; Leviticus 19:18 already commanded love for the neighbor. The
                novelty is the standard: <em>as I have loved you</em>. Not as you love yourself (Matthew
                22). Not as your Father loved you in the past (Deuteronomy). But as I, in the next twelve
                hours, am going to love you &mdash; washing feet, going to a cross, dying for people who
                will scatter and deny me.
              </p>
              <p style={pStyle}>
                The sign value Jesus attaches to this love is striking: &ldquo;By this all people will know
                that you are my disciples, if you have love for one another.&rdquo; Not if you have the
                correct doctrine (though doctrine matters). Not if you perform signs and wonders (though
                gifts are real). The identifying mark of the community of Jesus in the world is its love
                &mdash; the kind of love that is visible enough for outsiders to observe and particular enough
                that it requires an explanation beyond social cohesion or shared interest.
              </p>
              <p style={pLast}>
                The early church took this seriously enough to become famous for it. Tertullian, writing
                about AD 200, reports that pagans said of Christians: &ldquo;See how they love one
                another.&rdquo; The emperor Julian (the Apostate), trying to revive paganism in the fourth
                century, acknowledged that the Christians&rsquo; love for their own &mdash; and even for
                strangers &mdash; was the practical argument he could not answer. He tried to replicate it
                with pagan institutions and failed. The love of the new commandment is not a feeling; it is
                an observable pattern of behavior that leaves a mark in the world.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Love That Lays Down Its Life &mdash; John 15:12&ndash;13</h3>
              <p style={pStyle}>
                &ldquo;This is my commandment, that you love one another as I have loved you. Greater love
                has no one than this, that someone lay down his life for his friends.&rdquo; Jesus says this
                on his way to do it. The definition of greatest love is not a piece of philosophy; it is a
                description of what he is about to perform. And he names the recipients &ldquo;friends&rdquo;
                &mdash; a word that, in the ancient world, implied equality, mutual obligation, and chosen
                relationship rather than mere acquaintance.
              </p>
              <p style={pStyle}>
                What does it mean to lay down your life for someone in the ordinary run of Christian
                existence, when you are not literally dying? John answers this in 1 John 3:16&ndash;18:
                &ldquo;By this we know love, that he laid down his life for us, and we ought to lay down
                our lives for the brothers. But if anyone has the world&rsquo;s goods and sees his brother
                in need, yet closes his heart against him, how does God&rsquo;s love abide in him?&rdquo;
                The translation from cross to daily life is: when you see need, respond with what you have.
                Laying down your life looks, on most days, like laying down your time, your money, your
                comfort, your preference.
              </p>
              <p style={pLast}>
                John&rsquo;s conclusion is disquieting: &ldquo;Little children, let us not love in word or
                talk but in deed and in truth.&rdquo; The vocabulary of love &mdash; the sentiment, the
                affirmation, the saying of &ldquo;I love you&rdquo; &mdash; is cheap. The currency of real
                love is action. And action costs. The person who says they love but never incurs any cost
                for the sake of another has not yet learned what the word means in the light of the cross.
              </p>
            </div>
          </div>
        )}

        {/* ============ PRACTICES ============ */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Christian love is not a feeling to be cultivated but a practice to be formed. These six
              disciplines target specific dimensions of the love described in 1 Corinthians 13 and lived
              by Jesus. They are demanding because real love is demanding; they are possible because the
              Spirit supplies what we cannot manufacture.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>1. The 1 Corinthians 13 Self-Exam</h3>
              <p style={pStyle}>
                Augustine preached that 1 Corinthians 13 should be read as a description of Christ himself
                &mdash; that every line fits him and therefore every line indicts us. The self-exam practice
                takes this seriously. Take one attribute per week &mdash; &ldquo;love is patient&rdquo; in
                week one, &ldquo;love is kind&rdquo; in week two, and so on through all fifteen &mdash;
                and live with it as an X-ray of one relationship each day.
              </p>
              <p style={pStyle}>
                The method: name the relationship (spouse, coworker, difficult neighbor, estranged friend).
                Then ask whether, in the past week, your love toward them was patient, or whether impatience
                got there first. Was it kind, or merely polite when it had to be? Did it keep no record of
                wrong, or have you been building a case? The questions are not designed to produce guilt but
                diagnosis. A bone-setter must know where the fracture is before they can set it.
              </p>
              <p style={pLast}>
                The self-exam is not complete until it reaches repentance and petition: confession of
                specific failures, and a specific request for the Spirit&rsquo;s supply of what you lack.
                &ldquo;Love bears all things&rdquo; &mdash; and I have refused to bear this particular
                thing this week. Forgive me, and give me what I cannot generate. The exam is the
                diagnosis; the cross is the cure; the Spirit is the treatment. All three together, repeated
                fifteen times, can renovate a life.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>2. Enemy Prayer &mdash; Praying for Those Who Hurt You</h3>
              <p style={pStyle}>
                Jesus commands it in Luke 6:28: &ldquo;pray for those who abuse you.&rdquo; The practice is
                as simple as it is costly: name the person who has wronged you &mdash; specifically, the
                one you are most reluctant to name &mdash; and pray for their actual flourishing. Not a
                thin prayer of formal compliance, but a genuine petition that God bless them, prosper them,
                forgive them their sins, give them the relationships and circumstances and knowledge of God
                that would make their life good.
              </p>
              <p style={pStyle}>
                This practice works on the heart in a way that nothing else quite does. You cannot
                simultaneously wish harm to someone and genuinely pray for their good; the acts are
                mutually exclusive. What almost always happens when the prayer is genuine is that the
                person&rsquo;s humanity gradually reasserts itself against the caricature that resentment
                builds. They become a person again rather than a grievance. God can work with that. He
                cannot easily work with a heart that has declared a person beyond the reach of his mercy.
              </p>
              <p style={pLast}>
                A caution: this practice does not require reconciliation with someone who is abusive or
                unsafe. Praying for someone is not the same as exposing yourself to their harm. The command
                is about the inner posture of the one praying, not the external structure of the relationship.
                You can pray for an abuser from a safe distance, wish them genuine good, and maintain firm
                boundaries simultaneously. Enemy prayer is the practice that keeps bitterness from
                colonizing your soul while you grieve and heal.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>3. The Love Language Practice &mdash; Loving in the Other&rsquo;s Dialect</h3>
              <p style={pStyle}>
                Gary Chapman&rsquo;s observation that people give and receive love in different primary
                languages &mdash; words of affirmation, quality time, receiving gifts, acts of service,
                physical touch &mdash; has become nearly universal in marriage and family literature, and
                for good reason: it names something real. The person who expresses love through acts of
                service and receives nothing but words of affirmation will eventually feel unloved, not
                because love is absent but because it is being communicated in an untranslated language.
              </p>
              <p style={pStyle}>
                The practice: identify your own primary love language and your partner&rsquo;s (or the
                significant person you want to love more effectively). Then deliberately practice expressing
                love in their dialect, not yours. If your natural language is acts of service but your
                spouse&rsquo;s is quality time, the practice is to set aside the to-do list and be fully
                present &mdash; not to add one more item to your service list but to give the presence that
                actually lands as love in their heart.
              </p>
              <p style={pLast}>
                The theological dimension here is important. Loving in the other&rsquo;s dialect is a form
                of the incarnation principle: God expressed love not in the idiom that was most natural to
                him (infinite holiness expressing infinite love in infinite terms) but in the idiom that
                could be received by the ones he loved (a human life, human words, a human death). The
                love language practice is a small participation in that logic: love chooses the form that
                reaches its recipient, not the form most convenient to its giver.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>4. Sacrificial Love &mdash; Love That Costs Something</h3>
              <p style={pStyle}>
                David refused the threshing floor of Araunah as a gift: &ldquo;I will not offer burnt
                offerings to the Lord my God that cost me nothing&rdquo; (2 Samuel 24:24). The principle
                extends beyond worship. Love that has never cost the lover anything has not yet become
                what the New Testament means by the word. The practice is to identify one act of love
                per week that involves genuine sacrifice &mdash; not inconvenience but cost: time you
                wanted, money that would have gone elsewhere, comfort or preference surrendered for
                another person&rsquo;s sake.
              </p>
              <p style={pStyle}>
                The specific form matters less than the quality. Staying up through the night with a sick
                child when you desperately need sleep. Giving money at a level that changes your own
                spending. Spending time with the lonely person who is difficult to be with. Giving credit
                for work that was partly yours. Making the phone call to the estranged relative even
                though you know it will cost emotional energy you do not have to spare. The test of each
                is: would a reasonable person in your position have found a way to avoid this? If yes,
                and you did it anyway, it was sacrificial love.
              </p>
              <p style={pLast}>
                John&rsquo;s arithmetic is sobering: &ldquo;If anyone has the world&rsquo;s goods and
                sees his brother in need, yet closes his heart against him, how does God&rsquo;s love
                abide in him?&rdquo; (1 John 3:17). The question is not rhetorical; it is diagnostic.
                A love that consistently finds reasons to avoid cost is not the love of the cross but a
                comfortable facsimile of it. The practice of deliberate, weekly sacrifice is the training
                that forms the instinct of costly love before the crises that demand it.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>5. Love in Marriage &mdash; The Covenant Commitment</h3>
              <p style={pStyle}>
                Ephesians 5:25 asks husbands to love their wives &ldquo;as Christ loved the church and gave
                himself up for her&rdquo; &mdash; and sets the standard at the highest possible point. Not
                the love of attraction (though that matters), not the love of a good mood (though moods are
                real), but the covenantal love that holds on when holding on costs everything. The same
                principle, read through the whole of 1 Corinthians 13, describes a love that two married
                people grow into across decades rather than arrive with on their wedding day.
              </p>
              <p style={pStyle}>
                Practical covenant love in marriage looks like: choosing to act kindly when the feeling of
                kindness is absent; refusing to build the case against your spouse in your own mind, because
                love &ldquo;keeps no record of wrongs&rdquo;; telling the truth even when it would be
                easier to keep peace; staying in difficult conversations rather than stonewalling or
                deflecting; pursuing reconciliation before the sun goes down; protecting your spouse&rsquo;s
                reputation in public when it would be easier to signal your own virtue by distancing from
                them.
              </p>
              <p style={pLast}>
                The theological ground is the covenant itself &mdash; the public promise made before God
                and witnesses, which creates an obligation independent of emotional weather. &ldquo;I will&rdquo;
                rather than &ldquo;I do&rdquo; &mdash; the future tense of the vow names love as a
                commitment about tomorrow, not merely an account of today. Covenant love is not the
                suppression of eros and storge but their completion: when the natural loves are gathered
                into the structure of covenant, they find a stability they cannot create for themselves.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>6. Community Love &mdash; Staying When the Church Is Imperfect</h3>
              <p style={pStyle}>
                The most demanding arena of Christian love may not be loving enemies but loving the people
                you see every Sunday who have repeatedly disappointed you, who hold positions you disagree
                with, who hurt you and did not apologize, who are at different life stages and seem
                incompatible with your own. The command is not to love an abstract &ldquo;community&rdquo;
                but to love these particular people, together, as a body, with the love that &ldquo;bears
                all things&rdquo; and &ldquo;endures all things&rdquo; (1 Cor. 13:7).
              </p>
              <p style={pStyle}>
                The practice of staying &mdash; not as passive tolerance but as active, costly commitment
                &mdash; is itself a form of love. It requires learning the names and stories of people
                unlike yourself. It requires repenting and reconciling rather than relocating. It requires
                choosing the harder work of forgiveness over the easier exit of finding a better-fitting
                congregation. It requires &ldquo;bearing with one another in love&rdquo; (Eph. 4:2) in the
                specific, embodied form of the community you are actually in.
              </p>
              <p style={pLast}>
                Dietrich Bonhoeffer&rsquo;s warning in <em>Life Together</em> is worth keeping: the person
                who loves their dream of community destroys real community, but the person who loves actual
                community creates something real. The dream is of people who are exactly right for you,
                who grow at your pace, who understand your gifts. The reality is messier, needier, and
                more demanding &mdash; and the love that persists through the reality is the most convincing
                evidence of the new commandment&rsquo;s power.
              </p>
            </div>
          </div>
        )}

        {/* ============ VOICES ============ */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Six writers who have illuminated Christian love across the centuries &mdash; from a medieval
              theologian&rsquo;s exposition of 1 Corinthians 13 to a novelist&rsquo;s portrait of active
              love in a Russian monastery.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>C.S. Lewis &mdash; The Four Loves</h3>
              <p style={pStyle}>
                Lewis published <em>The Four Loves</em> in 1960, near the end of his life and not long
                before his own entry into the experience of sacrificial love through the illness and death
                of his wife Joy. The book is his most personal work of theology, and its treatment of love
                is remarkable for its refusal to sentimentalize. He insists that the natural loves &mdash;
                affection, friendship, eros &mdash; are genuinely good but genuinely dangerous, capable of
                becoming &ldquo;demonic&rdquo; when they are elevated to the position only God should
                occupy.
              </p>
              <p style={pStyle}>
                His treatment of eros is particularly countercultural and remains so: he distinguishes
                sharply between Venus (sexual desire) and eros (the in-love state that is obsessed with
                a particular person), and he argues that eros, in its very nature, makes extravagant
                promises about permanence that it cannot keep by its own power. The promise requires
                something eros cannot supply: the covenantal, volitional love of agape to honor it when
                the feeling fails.
              </p>
              <p style={pLast}>
                His most memorable observation on agape is that it is the love that &ldquo;is not simply
                a feeling but a policy&rdquo; &mdash; a decision made and remade across time, often without
                the support of corresponding emotion. He notes that &ldquo;the rule for all of us is
                perfectly simple. Do not waste time bothering whether you &lsquo;love&rsquo; your neighbor;
                act as if you did.&rdquo; The action often produces the feeling; the feeling, if waited
                for first, may never arrive. This is the practical wisdom of 1 Corinthians 13 rendered in
                Lewis&rsquo;s characteristic idiom.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Brennan Manning &mdash; The Relentless Tenderness of Jesus</h3>
              <p style={pStyle}>
                Manning&rsquo;s life was a long, broken, beautiful argument that God&rsquo;s love is
                unconditional &mdash; not in the sense of being indifferent to sin but in the sense of
                being indifferent to the question of whether its recipient deserves it. A former Franciscan
                priest whose alcoholism cost him his marriage and much else, Manning wrote from the inside
                of failure about a love that met him there. His most famous book, <em>The Ragamuffin
                Gospel</em>, gave a generation of exhausted, shame-soaked Christians permission to believe
                that God&rsquo;s love was bigger than their worst day.
              </p>
              <p style={pLast}>
                Manning&rsquo;s contribution to the understanding of Christian love is his insistence that
                the love we give is downstream of the love we receive. People who have not genuinely
                received the love of God &mdash; who know it doctrinally but have not been encountered by
                it personally, in their failure and weakness &mdash; will find it impossible to love others
                with more than human warmth. The love of the ragamuffin is the love of the person who has
                been picked up from the ditch, and who cannot encounter another human ditch without
                recognizing it. The tenderness of Jesus toward the broken, Manning argued, is the source
                and the shape of all Christian love.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Gary Chapman &mdash; The Five Love Languages</h3>
              <p style={pStyle}>
                Chapman&rsquo;s 1992 book emerged from years of marriage counseling and introduced a simple
                but remarkably durable insight: people experience love being communicated in different
                primary forms, and if partners are speaking different love languages, each may feel unloved
                despite both genuinely trying. The five languages &mdash; words of affirmation, quality
                time, receiving gifts, acts of service, and physical touch &mdash; are not exhaustive, but
                they describe real differences in how people are hardwired to receive care.
              </p>
              <p style={pLast}>
                Chapman&rsquo;s theological contribution is modest but important: he demonstrates concretely
                what it means to love in the other&rsquo;s terms rather than your own. This is the
                incarnation principle applied to ordinary relationships. God did not express love in the
                form most natural to divine being; he expressed it in flesh, in limitation, in language
                that human creatures could receive. Every person who deliberately learns their partner&rsquo;s
                love language and speaks it, at cost to themselves, is practicing a form of that same
                condescension &mdash; love that empties itself to reach its recipient. Chapman&rsquo;s
                framework has helped millions of marriages not because it is profound theology but because
                it is true observation, and true observation serves love.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Francis Chan &mdash; Crazy Love</h3>
              <p style={pStyle}>
                Chan&rsquo;s 2008 book opened with an extended meditation on the scale of the universe
                and ended with the question: what does a life look like that is shaped by a love that made
                all this? His argument was that the typical American evangelical Christian had made an
                accommodation between faith and comfort so thorough that love had become largely theoretical
                &mdash; believed, sung, and occasionally performed in ways that carried no real cost.
              </p>
              <p style={pLast}>
                Chan called his readers to what he called &ldquo;lukewarm-proof&rdquo; love &mdash; love
                that cannot be explained by natural affection or social benefit, love that involves genuine
                sacrifice for people who cannot repay it, love that looks enough like Jesus&rsquo;s love
                to require explanation. His practical chapters on giving, serving, and radical simplicity
                of life were controversial precisely because they made the cost visible. The book&rsquo;s
                enduring value is its refusal to let love be a sentiment; it insisted that love has an
                economic form, a time form, a risk form, and that without those concrete expressions it
                is merely the word. Crazy love looks crazy because love that costs nothing is not love
                in the New Testament sense.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Jonathan Edwards &mdash; Charity and Its Fruits</h3>
              <p style={pStyle}>
                Edwards preached fifteen sermons on 1 Corinthians 13 in the winter of 1738, and they were
                collected posthumously under the title <em>Charity and Its Fruits</em>. They constitute
                the most thorough theological exposition of the love chapter ever produced, and they
                repay close reading nearly three centuries later. Edwards argued that charity (agape) is
                the sum of all true religion &mdash; that every genuine spiritual affection, every real
                work of grace, is a form of love, and that anything that lacks love, however impressive,
                is not spiritually alive.
              </p>
              <p style={pLast}>
                His final sermon in the series, &ldquo;Heaven is a World of Love,&rdquo; is one of the
                great pieces of Christian prose. Edwards describes heaven not primarily as a place of
                reward but as the environment in which love reaches its final, unobstructed form &mdash;
                where the obstacles of sin, selfishness, and mortality are removed and love flows freely
                between God and his people and among all the redeemed. His insight for daily life is that
                heaven&rsquo;s love is not different in kind from the love the Spirit produces now; it
                is the same love, perfected. Every act of genuine agape on earth is a preview of eternity,
                a small piece of the world to come invading the present.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Dostoevsky &mdash; Father Zosima on Active Love</h3>
              <p style={pStyle}>
                In <em>The Brothers Karamazov</em>, the elder Zosima delivers some of the most searching
                words on Christian love in all of literature. The most famous: &ldquo;Love in action is a
                harsh and dreadful thing compared with love in dreams. Love in dreams is greedy for
                immediate action, rapidly performed and in the sight of all, with everyone watching and
                admiring. But active love is labor and fortitude, and for some people too, perhaps, a
                complete science.&rdquo; Zosima is addressing a woman who loves humanity in the abstract
                but finds it impossible to endure individual people for more than a few days.
              </p>
              <p style={pLast}>
                Dostoevsky&rsquo;s genius is to make this diagnosis feel inevitable rather than cruel. We
                recognize the woman. We have been her. The love that imagines great sacrifices &mdash; that
                would give all it has for the poor, that would lay down its life for the cause &mdash; but
                finds it impossible to be patient with a specific annoying person for four consecutive
                hours is the love 1 Corinthians 13 is not describing. The great contribution of Zosima is
                his insistence that love is proved and grown not in its dramatic moments but in the
                unromantic, unrewarded, repeated labor of caring for the actual person in front of you,
                today, again.
              </p>
            </div>
          </div>
        )}

        {/* ============ SCRIPTURE ============ */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Six texts that define the shape, source, and demands of Christian love &mdash; from the full
              anatomy of 1 Corinthians 13 to the enemy-love of Luke 6, from the declaration of God&rsquo;s
              nature in 1 John to the new commandment of John 13. Let each one do its specific diagnostic work.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>1 Corinthians 13:1&ndash;13</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;If I speak in the tongues of men and of angels, but have not love, I am a noisy gong
                or a clanging cymbal&hellip; Love is patient and kind; love does not envy or boast; it is
                not arrogant or rude. It does not insist on its own way; it is not irritable or resentful;
                it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things,
                believes all things, hopes all things, endures all things. Love never ends&hellip; So now
                faith, hope, and love abide, these three; but the greatest of these is love.&rdquo;
              </p>
              <p style={pLast}>
                The most searching definition of love in any language. Fifteen descriptions, not of a
                feeling but of a character: patience, kindness, freedom from envy, humility, courtesy,
                selflessness, equanimity, refusal of resentment, joy in truth, bearing, believing, hoping,
                enduring. The opening is the most devastating sentence in the New Testament: everything
                &mdash; eloquence, prophecy, knowledge, faith, giving, even martyrdom &mdash; counts for
                nothing if love is absent. The chapter is Augustine&rsquo;s portrait of Christ and Paul&rsquo;s
                indictment of the rest of us.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>John 13:34&ndash;35</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;A new commandment I give to you, that you love one another: just as I have loved you,
                you also are to love one another. By this all people will know that you are my disciples,
                if you have love for one another.&rdquo;
              </p>
              <p style={pLast}>
                The new commandment&rsquo;s novelty is its standard: <em>as I have loved you</em>. Twelve
                hours before the crucifixion, Jesus offers his own death as the measure of the love he is
                commanding. The external sign of his disciples is not a symbol, a building, or a doctrinal
                statement but a visible pattern of love that outsiders observe and require explanation for.
                Tertullian recorded that pagans noted this in the second century; Julian tried to replicate
                it in the fourth. The command has been the church&rsquo;s greatest challenge and most
                compelling testimony ever since.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Romans 5:8</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;But God shows his love for us in that while we were still sinners, Christ died
                for us.&rdquo;
              </p>
              <p style={pLast}>
                The timing is the theology. Not &ldquo;when we had improved,&rdquo; not &ldquo;because we
                deserved it,&rdquo; but &ldquo;while we were still sinners.&rdquo; The love of God is not
                a response to our goodness; it is a gift to our badness. This single verse demolishes every
                version of Christianity that locates God&rsquo;s love as a reward for performance, and it
                is the foundation of all Christian love for difficult and unlovely people: we received
                ours while we were not loveable, which means we cannot withhold ours from those who are
                not yet loveable either.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>1 John 4:7&ndash;12</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;Beloved, let us love one another, for love is from God, and whoever loves has been
                born of God and knows God. Anyone who does not love does not know God, because God is love.
                In this is love, not that we have loved God but that he loved us and sent his Son to be
                the propitiation for our sins. Beloved, if God so loved us, we also ought to love one
                another.&rdquo;
              </p>
              <p style={pLast}>
                John&rsquo;s logic is airtight: love originates in God, not in us. The direction runs
                from him to us first, and our love is always responsive. &ldquo;Not that we have loved
                God but that he loved us&rdquo; &mdash; this sequence is the ground of all Christian
                confidence about love: we are not generating it but conducting it. And the claim that
                &ldquo;whoever loves has been born of God and knows God&rdquo; gives love the same
                diagnostic value it has in 3 John 1:11: the habitual presence of love is evidence of
                divine origin; its habitual absence is a sign that something fundamental is missing.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Luke 6:27&ndash;35</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;But I say to you who hear, Love your enemies, do good to those who hate you, bless
                those who curse you, pray for those who abuse you&hellip; But love your enemies, and do
                good, and lend, expecting nothing in return, and your reward will be great, and you will
                be sons of the Most High, for he is kind to the ungrateful and the evil.&rdquo;
              </p>
              <p style={pLast}>
                The most countercultural command in the Gospels, grounded in the most countercultural
                theology: God is kind to the ungrateful and the evil. His rain is not rationed to the
                deserving; his sun does not discriminate. The love of enemies is not a spiritual
                superheroics for the advanced but the basic logic of grace applied outward: we received
                it without deserving it, and so we extend it without requiring desert. The reward named
                &mdash; sonship, becoming &ldquo;sons of the Most High&rdquo; &mdash; is not a moral
                incentive but a description: the people who love like this are showing whose children
                they are.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>John 15:12&ndash;13</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;This is my commandment, that you love one another as I have loved you. Greater love
                has no one than this, that someone lay down his life for his friends.&rdquo;
              </p>
              <p style={pLast}>
                Jesus does not say this in the abstract; he says it hours before doing it. The definition
                of greatest love is a prophecy about his own actions the following morning. And then, in
                1 John 3:16&ndash;17, the apostle translates it into daily life: we know love because he
                laid down his life, and we ought to lay down ours for one another &mdash; which means,
                concretely, not closing our hearts when we see a brother in need. Laying down your life
                looks, on most days, like laying down your time, your comfort, your money, your preference.
                The cross is the scale; the daily sacrifice is the practice.
              </p>
            </div>
          </div>
        )}

        {/* ============ JOURNAL ============ */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Love grows more specific as it grows more mature. Use this journal to name the specific
              relationship you are practicing love in, the concrete action of love you are choosing, and
              what that love is costing you. Costly love is not suffering; it is the evidence that love
              is real. Entries are stored privately in your browser.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="lvg-relationship" style={labelStyle}>Who this love practice is for</label>
                <textarea
                  id="lvg-relationship"
                  value={relationship}
                  onChange={e => setRelationship(e.target.value)}
                  placeholder="Name the relationship: spouse, child, parent, estranged friend, difficult coworker, enemy, the stranger you avoid..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="lvg-loveaction" style={labelStyle}>Specific action of love</label>
                <textarea
                  id="lvg-loveaction"
                  value={loveAction}
                  onChange={e => setLoveAction(e.target.value)}
                  placeholder="Not vague intention but a specific, concrete act: the apology, the time given, the prayer prayed, the need met, the reconciling conversation..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="lvg-cost" style={labelStyle}>What this love costs</label>
                <textarea
                  id="lvg-cost"
                  value={cost}
                  onChange={e => setCost(e.target.value)}
                  placeholder="Love that costs nothing is not yet the love of the cross. What are you surrendering — time, comfort, pride, money, preference, safety?"
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <button
                onClick={saveEntry}
                style={{
                  background: ACCENT,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Save Entry
              </button>
            </div>

            <h3 style={{ ...h3Style, margin: "0.5rem 0 0" }}>
              Your Entries {loaded && entries.length > 0 ? `(${entries.length})` : ""}
            </h3>

            {loaded && entries.length === 0 && (
              <div style={{ ...cardStyle, textAlign: "center", padding: "2.5rem 1.75rem" }}>
                <p style={{ ...pLast, fontStyle: "italic" }}>
                  No entries yet. Love in dreams is easy; love in action is labor. When you choose costly
                  love for a specific person, come back and record it. The record itself is a form of
                  commitment.
                </p>
              </div>
            )}

            {loaded && entries.map((entry, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    {entry.relationship && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: accentLight, fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Relationship
                        </div>
                        <p style={{ ...pLast, color: TEXT }}>{entry.relationship}</p>
                      </div>
                    )}
                    {entry.loveAction && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: accentLight, fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Love Action
                        </div>
                        <p style={pLast}>{entry.loveAction}</p>
                      </div>
                    )}
                    {entry.cost && (
                      <div>
                        <div style={{ color: accentLight, fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Cost
                        </div>
                        <p style={pLast}>{entry.cost}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => deleteEntry(index)}
                    aria-label="Delete entry"
                    style={{
                      background: "transparent",
                      border: `1px solid ${BORDER}`,
                      color: MUTED,
                      borderRadius: 8,
                      padding: "0.35rem 0.8rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============ VIDEOS ============ */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Teaching on 1 Corinthians 13, the four loves, agape, enemy love, and the love that lays
              down its life.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ color: TEXT, fontSize: "0.95rem", fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                      {v.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLOSING */}
        <div style={{ marginTop: "3rem", padding: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, borderLeft: `4px solid ${ACCENT}` }}>
          <p style={{ ...pStyle, fontStyle: "italic", color: TEXT }}>
            &ldquo;And now these three remain: faith, hope, and love. But the greatest of these is love.&rdquo;
          </p>
          <p style={{ ...pLast, fontSize: "0.85rem" }}>
            &mdash; 1 Corinthians 13:13. Keep exploring:{" "}
            <Link href="/christian-marriage" style={{ color: accentLight, textDecoration: "underline" }}>Christian marriage</Link>,{" "}
            <Link href="/christian-friendship" style={{ color: accentLight, textDecoration: "underline" }}>friendship</Link>, and{" "}
            <Link href="/christian-forgiveness" style={{ color: accentLight, textDecoration: "underline" }}>forgiveness</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
