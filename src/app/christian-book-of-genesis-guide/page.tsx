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
  "Creation",
  "The Fall",
  "Abraham and the Promise",
  "Joseph and Providence",
  "Genre and Interpretation",
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
    id: "Creation",
    heading: "Creation",
    reference: "Genesis 1&ndash;2",
    paragraphs: [
      "Genesis opens not with a scientific textbook but with a poem &mdash; or more precisely, with two accounts of creation set side by side, each emphasizing different dimensions of the same reality. Genesis 1 is structured, liturgical, and cosmic in scope: God speaks and it is so, seven times, across six days, culminating in the Sabbath rest. Genesis 2 is intimate, earthy, and relational: a man formed from the dust, a garden planted, animals named, a woman drawn from the man&rsquo;s side. The two accounts are not competing scientific hypotheses. They are two lenses focused on the same mystery, giving us different things to see.",
      "John Walton&rsquo;s influential reading of Genesis 1 &mdash; developed in &ldquo;The Lost World of Genesis One&rdquo; &mdash; argues that the ancient world thought about creation primarily in functional rather than material terms. To &ldquo;create&rdquo; something in the ancient Near Eastern context was to assign it a function and a place within an ordered cosmos. On this reading, Genesis 1 is not primarily describing the material origin of matter but the assignment of meaning, function, and purpose to a cosmos understood as God&rsquo;s cosmic temple. The six days describe not the manufacturing of material stuff but the ordering of a functional world &mdash; culminating in God taking up residence on the seventh day, as a king taking his throne.",
      "The seven-day structure of Genesis 1 carries liturgical weight. The repeated cadences &mdash; &ldquo;And God said,&rdquo; &ldquo;And it was so,&rdquo; &ldquo;And God saw that it was good,&rdquo; &ldquo;And there was evening and there was morning&rdquo; &mdash; create a rhythmic, almost doxological movement. &ldquo;And God saw that it was good&rdquo; appears seven times, with &ldquo;very good&rdquo; at the culmination (1:31). This is not incidental. The material world is not an obstacle to spiritual life or a fallen realm to be escaped; it is the good creation of a good God, declared good by its Maker. The goodness of creation is one of the most important and most neglected affirmations of Christian theology.",
      "The image of God &mdash; imago Dei (1:26&ndash;28) &mdash; is the theological cornerstone of human dignity and the foundation of Christian ethics. &ldquo;Let us make man in our image, after our likeness.&rdquo; The plural (&ldquo;let us&rdquo;) has been read variously as a Trinitarian hint, as God addressing the heavenly court, or as a majestic plural of deliberation. What is clear is that the image is granted to all human beings without distinction: male and female together bear the image of God (1:27). In the ancient Near East, only the king was said to bear the divine image and to act as the god&rsquo;s representative on earth. Genesis democratizes this royal theology: every human being is a royal representative of the Creator, bearing his image and called to exercise dominion and stewardship over the creation.",
      "The Sabbath as the crown of creation is often underread. God rests on the seventh day, blesses it, and makes it holy (2:3). The creation is not complete without this rest &mdash; without God dwelling in his cosmic temple and experiencing the goodness of what he has made. Abraham Heschel called the Sabbath a &ldquo;palace in time,&rdquo; the architecture of sacred time rather than sacred space. Jesus&rsquo;s statement that &ldquo;the Sabbath was made for man, not man for the Sabbath&rdquo; (Mark 2:27) does not abolish the Sabbath principle but situates it: rest is God&rsquo;s gift to his image-bearers, built into the structure of creation itself. The creation is oriented toward rest &mdash; toward the presence and enjoyment of God.",
      "Genesis 2 offers a close-up view that complements the wide-angle lens of chapter 1. The man is formed from the adamah (ground) &mdash; a pun in Hebrew that grounds human identity in its material origin while anticipating the return to dust in 3:19. The woman is built from the man&rsquo;s side (not his foot, not his head, but his side &mdash; a Jewish rabbinic observation), and the man&rsquo;s first words on seeing her are the first poem in the Bible: &ldquo;This at last is bone of my bones and flesh of my flesh&rdquo; (2:23). The garden is not merely a pleasant environment but a sacred space &mdash; characterized by the presence of God who walks in it (3:8), the tree of life (emblematic of God&rsquo;s presence), and the tree of the knowledge of good and evil (emblematic of the human vocation and its limit).",
      "The theological stakes of Genesis 1&ndash;2 can scarcely be overstated. Every major Christian doctrine has its roots here: the goodness of material creation, the dignity of human beings, the nature of work (given before the fall, 2:15), the complementarity of male and female, the institution of marriage (2:24, quoted by Jesus in Matthew 19 and Paul in Ephesians 5), and the Sabbath. Before the fall, before sin, before redemption &mdash; the creation already has structure, purpose, beauty, and an ordered relationship between humanity and God. Understanding what was lost in the fall requires first understanding what was given in creation.",
    ],
  },
  {
    id: "The Fall",
    heading: "The Fall",
    reference: "Genesis 3&ndash;11",
    paragraphs: [
      "The serpent&rsquo;s opening gambit in Genesis 3 is a question, not an assertion: &ldquo;Did God actually say, &lsquo;You shall not eat of any tree in the garden&rsquo;?&rdquo; (3:1). The question is a distortion &mdash; God had said they could eat of every tree except one &mdash; but its genius is in the destabilization. Before any temptation to disobey, there is first a temptation to doubt: to hold the word of God at arm&rsquo;s length, to subject it to interrogation, to treat it as a claim requiring human verification rather than a word requiring human trust. The woman&rsquo;s response already reveals something has shifted: she adds &ldquo;neither shall you touch it&rdquo; to God&rsquo;s prohibition (3:3), a subtle over-correction that suggests discomfort with the original command.",
      "The temptation itself is offered in 3:5: &ldquo;you will be like God, knowing good and evil.&rdquo; The lure is not knowledge per se but autonomous self-determination &mdash; the ability to decide for oneself what is good and what is evil, to be the center of one&rsquo;s own moral universe, to have God&rsquo;s prerogative without God&rsquo;s authority. The tree was &ldquo;good for food and a delight to the eyes and desirable to make one wise&rdquo; (3:6) &mdash; John would later identify these three as &ldquo;the desires of the flesh and the desires of the eyes and pride of life&rdquo; (1 John 2:16). The fall is not merely a moral failure; it is a theological one: a creature claiming the Creator&rsquo;s place.",
      "The consequences of the fall unfold with terrible logic. Shame appears immediately: &ldquo;they knew that they were naked&rdquo; (3:7). They hide from God &mdash; the first avoidance of the one whose presence had been their joy. When God asks, &ldquo;Where are you?&rdquo; (3:9), the question is not informational but diagnostic: it is the first pastoral question in the Bible. The blame-shifting that follows is the social consequence of the fall: the man blames the woman (and implicitly God, &ldquo;the woman whom you gave to be with me&rdquo;); the woman blames the serpent. The solidarity that had characterized the couple in 2:23&ndash;24 is fractured. The fall is not merely personal but relational, social, and cosmic.",
      "The proto-evangelium of 3:15 is, in Christian reading, the first beam of redemptive light in the Scripture: &ldquo;I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.&rdquo; Spoken in judgment against the serpent, it contains an implicit promise: the seed of the woman will ultimately triumph over the seed of the serpent, though not without suffering. Paul reads this in Romans 16:20 as an eschatological promise fulfilled in Christ. Irenaeus of Lyon, in the second century, called this verse the &ldquo;recapitulation&rdquo; in miniature: what Adam failed to do, the second Adam would accomplish. The whole biblical story from Genesis 3 forward is the unfolding of this promise.",
      "Genesis 4&ndash;11 traces the spread of sin beyond the garden in concentric circles. Cain kills Abel: the violence enters the family. By Genesis 6, &ldquo;the wickedness of man was great in the earth, and every intention of the thoughts of his heart was only evil continually&rdquo; (6:5). The flood narrative (6&ndash;9) has close literary parallels with the Babylonian Epic of Gilgamesh and other ancient Near Eastern flood stories &mdash; parallels that raise important questions about the relationship between Genesis and its cultural context. What is distinctive about the biblical account is its moral framing: the flood comes not because the gods are annoyed by human noise (as in Gilgamesh) but because the earth is filled with violence (6:11&ndash;13). Sin has cosmic consequences.",
      "Noah is introduced as &ldquo;a righteous man, blameless in his generation&rdquo; who &ldquo;walked with God&rdquo; (6:9) &mdash; the same language used of Enoch in 5:24. He is, in some sense, a second Adam: after the flood, God repeats the creation mandate to Noah and his sons (9:1&ndash;7, echoing 1:28). The Noahic covenant (9:8&ndash;17) is the most universal covenant in Genesis: it extends to Noah and his descendants and to &ldquo;every living creature.&rdquo; The rainbow is its sign &mdash; God&rsquo;s own pledge not to destroy the earth by flood again. This is not mere meteorological reassurance but a theological claim: God is committed to his creation. The covenant with Noah is the foundation on which all subsequent covenants are built.",
      "The Tower of Babel (11:1&ndash;9) is the final act of the primeval history and the hinge between creation-to-flood and the call of Abraham. Humanity&rsquo;s ambition to build a tower to heaven and &ldquo;make a name for ourselves&rdquo; (11:4) is the corporate expression of the same impulse that drove the individual sin of Eden: to reach divine status through human effort. God&rsquo;s response &mdash; scattering them across the earth and confusing their languages &mdash; is both judgment and, paradoxically, the fulfillment of the creation mandate to fill the earth (1:28, repeated to Noah in 9:1). The scattering that Babel produces is the problem that Pentecost answers: when the Spirit comes, people from every nation hear in their own language (Acts 2:6&ndash;11).",
    ],
  },
  {
    id: "Abraham and the Promise",
    heading: "Abraham and the Promise",
    reference: "Genesis 12&ndash;25",
    paragraphs: [
      "Genesis 12:1&ndash;3 is one of the great pivots of the entire Bible. After eleven chapters of expanding sin and spreading chaos, God addresses a single man in Ur of the Chaldeans with a command and a promise: &ldquo;Go from your country and your kindred and your father&rsquo;s house to the land that I will show you.&rdquo; The command requires departure without a destination &mdash; faith as obedience to the voice of a God not yet fully known, into a future not yet visible. The promise is threefold: land, descendants, and blessing to all the nations of the earth (&ldquo;in you all the families of the earth shall be blessed,&rdquo; 12:3). This threefold promise is the organizing spine of the entire rest of the Old Testament.",
      "The covenant of Genesis 15 is one of the most theologically significant passages in the Bible. God instructs Abram to cut animals in half and lay the pieces opposite each other &mdash; the form of a binding covenant ceremony in which both parties walk between the pieces, invoking the curse on themselves if they break the covenant. But when the ceremony takes place (15:17), only God passes through in the form of a smoking fire pot and a flaming torch. Abram is in a deep sleep. God alone walks the covenant path. He takes both sides of the covenant obligation upon himself. If the covenant is broken &mdash; whether through Abram&rsquo;s failure or God&rsquo;s &mdash; God accepts the curse. This is the theological foundation of Calvary: God fulfills what humans cannot, bearing the curse of a broken covenant in the body of his Son.",
      "The sign of circumcision (Genesis 17) is given as the seal of the covenant, a mark in the flesh of every male in Abraham&rsquo;s household. God also changes Abram&rsquo;s name to Abraham (&ldquo;father of a multitude&rdquo;) &mdash; a name that was absurd, given that he had no legitimate heir. The name itself was an act of faith required every time it was spoken. Sarai becomes Sarah (&ldquo;princess&rdquo;). The covenant promises run through Isaac specifically (17:19&ndash;21), not Ishmael &mdash; establishing the pattern that biological descent does not automatically convey covenant status, a point Paul will exploit in Romans 9 and Galatians 3.",
      "The three visitors at Mamre (Genesis 18) bring the most astonishing promise yet: Sarah, at ninety years old, will bear a son within the year. Sarah laughs (18:12) &mdash; the laughter of incredulity. God&rsquo;s response is the theological center of the passage: &ldquo;Is anything too hard for the LORD?&rdquo; (18:14). When Isaac is born, Sarah laughs again (21:6) &mdash; now the laughter of fulfilled joy. The same word that named her laughter of disbelief names her son: Isaac means &ldquo;he laughs.&rdquo; Every time his name was spoken, the improbability of his existence was remembered. God&rsquo;s faithfulness is written into a name.",
      "The binding of Isaac &mdash; the Akedah (Genesis 22) &mdash; is the most theologically dense and emotionally harrowing narrative in the Old Testament. God commands Abraham to offer Isaac as a burnt offering on Mount Moriah. Abraham obeys without recorded complaint or hesitation (a silence that has troubled readers across the centuries). Hebrews 11:19 interprets Abraham&rsquo;s faith as a belief that God was able to raise Isaac from the dead &mdash; which is why he could obey. At the last moment, the angel of the LORD stops Abraham&rsquo;s hand and provides a ram caught in a thicket. The place is named &ldquo;The LORD will provide&rdquo; (22:14). Mount Moriah will become the site of the Jerusalem temple &mdash; and, in Christian reading, the site of Calvary. The pattern of substitute sacrifice is established at the earliest moment of Israel&rsquo;s history.",
      "Paul&rsquo;s use of Abraham in Romans 4 and Galatians 3 is not an innovation but an exegesis. Genesis 15:6 &mdash; &ldquo;And he believed the LORD, and he counted it to him as righteousness&rdquo; &mdash; is Paul&rsquo;s textual foundation for the doctrine of justification by faith. Abraham was justified before circumcision (Genesis 15 precedes Genesis 17), so circumcision was the sign of an existing righteousness, not its cause. Abraham believed a promise about offspring; Christians believe a promise about resurrection. The structure of faith is the same: resting in the word of a faithful God about an improbable future. Abraham is not merely an example of faith; he is the paradigm that defines what faith is.",
      "The narrative of Abraham and Sarah culminates in the births, marriages, and burial accounts of Genesis 23&ndash;25. Abraham buys the cave of Machpelah for Sarah&rsquo;s burial &mdash; the only land he ever actually owns in the promised land, and it is a tomb. He dies having received the promise but not the fulfillment: &ldquo;These all died in faith, not having received the things promised, but having seen them and greeted them from afar&rdquo; (Hebrews 11:13). This is the shape of biblical faith: not the faith of the fulfilled, but the faith of those who hold to the word of God across the distance between promise and possession. The church lives in the same posture.",
    ],
  },
  {
    id: "Joseph and Providence",
    heading: "Joseph and Providence",
    reference: "Genesis 37&ndash;50",
    paragraphs: [
      "The Joseph narrative (Genesis 37&ndash;50) is the longest continuous narrative unit in Genesis and among the most artfully constructed stories in the ancient world. It begins with sibling rivalry and favoritism: Jacob loves Joseph more than his other sons, gives him the famous coat (a &ldquo;coat of many colors&rdquo; or a &ldquo;long robe with sleeves&rdquo; &mdash; the Hebrew is disputed), and Joseph has dreams in which his brothers bow down to him. Dreams, in the biblical world, are potential media of divine revelation; these dreams will prove to be exactly that, though not before the hatred they provoke nearly destroys the dreamer. Joseph&rsquo;s brothers throw him into a pit and sell him to Midianite traders for twenty pieces of silver.",
      "In Egypt, Joseph enters the household of Potiphar, an officer of Pharaoh, and rises to become the overseer of his household. Joseph&rsquo;s success in Potiphar&rsquo;s house is attributed four times in two verses to the LORD (39:2&ndash;3): &ldquo;The LORD was with Joseph, and he became a successful man.&rdquo; This theological refrain &mdash; that God is present and active even in the life of a slave in a foreign land &mdash; is the narrative&rsquo;s answer to the theological question the reader is implicitly asking: where is God in all of this? The answer is &ldquo;here, with Joseph, in the dungeon.&rdquo; Potiphar&rsquo;s wife&rsquo;s false accusation sends Joseph to prison, where the pattern repeats: the prison warden puts Joseph in charge of everything because &ldquo;the LORD was with him&rdquo; (39:21&ndash;23).",
      "The dreams of Pharaoh&rsquo;s butler and baker (Genesis 40), correctly interpreted by Joseph, lead eventually to Joseph being summoned before Pharaoh himself (Genesis 41). Pharaoh has dreamed of seven fat cows swallowed by seven thin cows, and seven full ears of grain swallowed by seven thin ears. When Joseph interprets the dreams as seven years of plenty followed by seven years of famine, and proposes a plan to prepare for the famine, Pharaoh asks: &ldquo;Can we find a man like this, in whom is the Spirit of God?&rdquo; (41:38). Joseph is elevated to second in all of Egypt &mdash; from the dungeon to the palace in a single day. The reversal is so complete and so sudden that it functions as a literary type of resurrection.",
      "The famine brings Joseph&rsquo;s brothers to Egypt to buy grain. In one of the most dramatically complex sequences in Genesis, Joseph recognizes his brothers but conceals his identity through three visits, tests their character, listens to their conversations they believe he cannot understand, and &mdash; at the moment of Judah&rsquo;s remarkable speech offering himself as a substitute for Benjamin (44:18&ndash;34) &mdash; can no longer contain himself. The revelation of 45:1&ndash;3 is one of the most emotionally charged scenes in Scripture: &ldquo;I am Joseph. Is my father still alive?&rdquo; His brothers cannot answer him, they are so dismayed. The reversal of Genesis 37 is complete: those who had power over him are now utterly in his power.",
      "The theological climax of the Joseph narrative &mdash; and one of the great theological statements of the entire Old Testament &mdash; comes in 45:7&ndash;8 and its fuller expression in 50:20: &ldquo;As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.&rdquo; This is the doctrine of divine providence stated with crystalline precision. God&rsquo;s purpose was accomplished through the genuine evil of human sin, without God being the author of that sin. The brothers&rsquo; intention was murderous; God&rsquo;s intention was salvific. Both are true at the same time. This is not a theological trick; it is the shape of the entire biblical story, most fully expressed in the cross of Christ (Acts 2:23: &ldquo;this Jesus, delivered up according to the definite plan and foreknowledge of God, you crucified and killed by the hands of lawless men&rdquo;).",
      "Joseph is one of the richest typological figures in the Old Testament. The parallels with Jesus are not incidental: the favored son sent by the father, rejected by his brothers, sold for silver, falsely accused, imprisoned, elevated to the right hand of power, and through his exaltation becoming the savior of those who had betrayed him. When Joseph weeps over his brothers (42:24, 43:30, 45:2, 45:14&ndash;15, 50:1), these are not mere literary details but the tears of one who loves those who wronged him &mdash; an echo, in advance, of the God who would weep over Jerusalem. Joseph does not merely survive his brothers&rsquo; betrayal; he forgives it and uses his position to save them.",
      "The Joseph narrative closes with Jacob&rsquo;s death and burial in Canaan (Genesis 49&ndash;50) and Joseph&rsquo;s death at 110 years, his bones left in Egypt with the instruction that they be carried back to the promised land when God fulfills his promise to bring Israel out of Egypt (50:24&ndash;25). This final act is itself an act of faith: Joseph dies holding the promise he will not see fulfilled. His bones will be carried out at the Exodus (Exodus 13:19) and eventually buried at Shechem (Joshua 24:32). Genesis ends not with arrival but with expectation: the patriarchal stories have established the promise; the rest of the Bible tells the story of its fulfillment.",
    ],
  },
  {
    id: "Genre and Interpretation",
    heading: "Genre and Interpretation",
    reference: "Genesis 1&ndash;2 &mdash; The Hermeneutical Question",
    paragraphs: [
      "No question in contemporary evangelical Christianity generates more heat than the question of how to read Genesis 1&ndash;11. The options span a wide range, and sincere, learned Christians who hold Scripture as the Word of God occupy every position on the spectrum. Understanding the debate requires understanding what the question actually is. The question is not &ldquo;Is Genesis true?&rdquo; &mdash; virtually everyone in the debate affirms it is. The question is: &ldquo;What kind of truth does Genesis communicate, and what literary genre does it employ to communicate it?&rdquo; Genre determines what counts as faithful interpretation.",
      "The most familiar position in American evangelical culture is the literal-historical reading: Genesis 1 describes six 24-hour days of material creation, the earth is thousands (not billions) of years old, and there was a global flood that deposited the geological strata. This is the position of young-earth creationism, associated with organizations like Answers in Genesis and the Institute for Creation Research. Its advocates argue that a plain reading of the text requires it, that &ldquo;day&rdquo; (yom) with an ordinal number always means a 24-hour day in the Old Testament, and that death before the fall (required by evolutionary timelines) contradicts the theology of Romans 5. This position takes the text with genuine seriousness and should not be dismissed as anti-intellectual; many careful scholars hold it.",
      "The day-age theory proposes that each &ldquo;day&rdquo; in Genesis 1 corresponds to a geological era &mdash; that the sequence of creation days roughly parallels the sequence discovered by modern geology and paleontology. The Hebrew word yom can indeed refer to an indefinite period of time in other Old Testament contexts (e.g., &ldquo;the day of the LORD&rdquo;). This approach, associated with the old-earth creationist camp, accepts the scientific consensus on the age of the universe while maintaining that Genesis describes a historical sequence of creative acts. It tends to interpret the days as literary and temporal markers that need not be 24-hour days but are nevertheless chronologically ordered.",
      "The framework hypothesis, developed by Meredith Kline and others in the Reformed tradition, proposes that the six days of Genesis 1 are not chronological at all but a literary framework. Days 1&ndash;3 describe the formation of three domains (light, water/sky, land); days 4&ndash;6 describe the filling of those domains (lights, birds/fish, animals/humans). The parallelism is deliberate and symmetrical, suggesting a literary rather than a historical structure. The days are a rhetorical device for communicating the completeness and order of God&rsquo;s creative work, not a sequence of 24-hour periods. This view takes the genre of Genesis 1 seriously as ancient literature rather than modern reportage.",
      "John Walton&rsquo;s &ldquo;functional cosmic temple&rdquo; reading, mentioned earlier, goes further: it argues that Genesis 1 is not primarily about material origins at all, but about the assignment of function to a cosmos understood as God&rsquo;s temple. On this reading, the text is not competing with evolutionary science on the question of material origins because it is not addressing that question. Walton&rsquo;s approach has been influential in evangelical scholarship because it takes both the ancient Near Eastern literary context and the authority of Scripture seriously, without requiring a conflict with modern science. Critics argue that it reads too much ancient Near Eastern background into the text and that Paul&rsquo;s use of Genesis (especially in Romans 5) requires a more historical reading.",
      "The mytho-historical approach (associated in different forms with scholars like Peter Enns) proposes that Genesis uses the literary forms and conventions of ancient Near Eastern myth to make theological claims that are not dependent on the historical accuracy of the specific narrative details. The Babylonian creation account (Enuma Elish) and the Atrahasis Epic (a flood story) are literary relatives of Genesis 1 and the flood narrative; Genesis is in deliberate dialogue with and polemic against these stories, claiming that YHWH &mdash; not Marduk or Baal &mdash; is the Creator, and that creation is &ldquo;very good&rdquo; rather than the result of divine conflict. This approach is the most controversial in evangelical circles because it raises questions about historical referentiality that touch the doctrines of the fall and original sin.",
      "What all evangelical readings of Genesis share as non-negotiable: creation is the act of the personal, trinitarian God; the creation is ontologically good and not the result of conflict or accident; human beings are uniquely created in the image of God and bear a dignity that cannot be reduced to biology; there was a historical rupture between humanity and God (the fall) that accounts for the condition of the world we observe; and these theological claims do not stand or fall with any particular theory of evolutionary science. The debate is real, the stakes are significant, and the humility with which faithful Christians disagree on this question is itself a witness to the sufficiency of Scripture on matters of salvation and life, even amid genuine interpretive uncertainty on matters of genre and cosmology.",
    ],
  },
];

const videoItems = [
  { videoId: "TZsNqNm0j6M", title: "John Walton on Genesis 1 — The Lost World of Genesis One" },
  { videoId: "Lkb2P1RMbJw", title: "Tim Keller on Creation and Evolution" },
  { videoId: "j8QdQU5F9LM", title: "The Story of Abraham — Genesis Study" },
];

export default function ChristianBookOfGenesisGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE BOOK OF GENESIS
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of Genesis Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            Genesis is the foundation of the whole biblical story &mdash; creation, fall, covenant, and the promise of redemption that the rest of Scripture unfolds.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "28", border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;In the beginning, God created the heavens and the earth.&rdquo; &mdash; Genesis 1:1
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <div>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: ACCENT, margin: "0 0 6px" }}>
                {currentSection.heading}
              </h2>
              <div
                style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: currentSection.reference }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: "0 10px 10px 0",
                    padding: "1.25rem 1.5rem",
                    lineHeight: 1.85,
                    fontSize: 15,
                    color: TEXT,
                  }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>
                Teaching Videos
              </h2>
              <p style={{ color: MUTED, fontSize: 14, margin: "0 0 1.5rem", lineHeight: 1.7 }}>
                Lectures and sermons from leading scholars on Genesis &mdash; covering creation, the image of God, the fall, Abraham, and the genre debate.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: ACCENT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            Dig Deeper into Genesis
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            Genesis repays slow reading in three movements: the primeval history (1&ndash;11), the Abraham cycle (12&ndash;25), and the Joseph narrative (37&ndash;50). Ask at each point: what does this text reveal about God, about humanity, and about the promise that holds them together?
          </p>
        </div>
      </main>
    </div>
  );
}
