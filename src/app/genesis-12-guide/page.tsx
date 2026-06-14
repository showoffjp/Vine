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
  "God Calls Abram",
  "The Abrahamic Covenant",
  "Abram in Egypt",
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
    heading: "Overview of Genesis 12",
    reference: "Genesis 12:1&ndash;20",
    paragraphs: [
      "Genesis 12 stands as one of the most pivotal chapters in all of Scripture. With it, the entire narrative of redemption pivots from the sweeping story of creation, fall, and universal judgment to the particular story of one man, one family, and one nation chosen as the instrument of God&rsquo;s blessing for all the earth. The first eleven chapters of Genesis trace humanity&rsquo;s repeated descent into rebellion &mdash; the garden, Cain and Abel, the flood, the tower of Babel. Each episode ends in judgment and scattering. Then, without warning, God calls one man out of Ur of the Chaldeans and makes him a promise so extraordinary that it will shape the rest of the Bible.",
      "The man is Abram &mdash; later renamed Abraham. He is seventy-five years old when the call comes. He is married to Sarai, who is barren. He has no heir, no land, and no obvious reason to expect that the future will look different from the past. Into this seemingly hopeless situation, God speaks the words that will reshape the world: &ldquo;Go from your country and your kindred and your father&rsquo;s house to the land that I will show you&rdquo; (12:1). The destination is not yet named. The journey begins in trust.",
      "The structure of chapter 12 is deceptively simple: a divine summons (vv. 1&ndash;3), Abram&rsquo;s obedient departure (vv. 4&ndash;9), and a troubling episode in Egypt (vv. 10&ndash;20). But within this compact narrative the entire drama of salvation history is launched. The promises God makes to Abram &mdash; of land, seed, and blessing &mdash; become the skeleton of everything that follows: the patriarchs, the exodus, the conquest, the monarchy, the exile, and ultimately Jesus Christ, in whom all nations are blessed.",
      "What makes Genesis 12 so important theologically is the sheer graciousness of the call. Abram does nothing to merit this election. Joshua 24:2 tells us that Abram&rsquo;s family served other gods in Mesopotamia before God called him. He is not chosen because of his righteousness but because of God&rsquo;s sovereign grace and his own mysterious purpose to redeem a fallen world through one chosen line. The call of Abram is a fresh start after Babel &mdash; not a new humanity in general, but a new beginning through one specific man whose descendants will carry the blessing of God to the ends of the earth.",
      "The New Testament explicitly reads Genesis 12 as the foundation of the gospel. Paul writes in Galatians 3:8 that &ldquo;the Scripture, foreseeing that God would justify the Gentiles by faith, preached the gospel beforehand to Abraham, saying, &lsquo;In you shall all the nations be blessed.&rsquo;&rdquo; The Abrahamic covenant is not a detour from the plan of salvation &mdash; it is the plan of salvation, reaching its fulfillment in Jesus, &ldquo;the son of Abraham&rdquo; (Matthew 1:1), in whom every family of the earth finds its blessing.",
    ],
  },
  {
    id: "God Calls Abram",
    heading: "God Calls Abram: Leave Everything",
    reference: "Genesis 12:1&ndash;4",
    paragraphs: [
      "The call that opens Genesis 12 is startling in its abruptness. There is no preparation, no account of any prior conversation, no explanation of why Abram was chosen from all the men on earth. The text simply says: &ldquo;Now the Lord said to Abram, &lsquo;Go from your country and your kindred and your father&rsquo;s house to the land that I will show you&rsquo;&rdquo; (12:1). The imperative is triple &mdash; country, kindred, father&rsquo;s house &mdash; moving from the widest circle of belonging to the narrowest and most intimate. Abram is asked to leave not just a geography but an entire identity.",
      "The structure of this threefold command is rhetorically significant. In ancient Near Eastern culture, one&rsquo;s country, clan, and household were not merely social units but the very sources of one&rsquo;s security, honor, and access to the divine. To leave them all was to become, in the most literal sense, a stranger and an alien in the world. Abram is asked to step off the map of every human certainty and walk into a future defined entirely by the word of God.",
      "The destination adds to the radicality of the call: &ldquo;to the land that I will show you.&rdquo; This is not a precise address. God does not name Canaan here. He says only that he will show it &mdash; future tense, progressive disclosure. The whole journey is structured as an act of trust. Abram must take the first step before the destination is revealed. Hebrews 11:8 captures this precisely: &ldquo;By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. And he went out, not knowing where he was going.&rdquo;",
      "The promises that follow the command are staggering in their scope (vv. 2&ndash;3). God promises to make Abram into a great nation &mdash; remarkable given that Sarai is barren (11:30). He promises to bless him and make his name great &mdash; a direct reversal of the Babel builders who sought to make a name for themselves (11:4) and failed. He promises that those who bless Abram will be blessed and those who curse him will be cursed. And then the capstone: &ldquo;in you all the families of the earth shall be blessed.&rdquo; A private call with universal implications.",
      "Verse 4 records the response with quiet magnificence: &ldquo;So Abram went, as the Lord had told him.&rdquo; There is no recorded hesitation, no bargaining, no request for signs. Just obedience. He takes his wife Sarai, his nephew Lot, all the possessions they had gathered, and the people they had acquired in Haran, and he sets out for the land of Canaan. He is seventy-five years old &mdash; not a young man embarking on adventure, but an old man staking everything on a promise. The story of faith has begun.",
      "It is worth pausing to consider the sheer weight of what Abram was asked to do. He left behind the city of Haran, part of the great Mesopotamian world &mdash; the cradle of civilization, with its temples, markets, social networks, and human security. He walked into the land of Canaan as a nomad with tents, following a voice. The New Testament holds this moment up as the paradigm of saving faith: not sight, not certainty, not proof first &mdash; but trust in the word of a God who calls his people into the unknown and promises to be enough.",
    ],
  },
  {
    id: "The Abrahamic Covenant",
    heading: "The Abrahamic Covenant: Land, Seed, and Blessing",
    reference: "Genesis 12:2&ndash;3, 7",
    paragraphs: [
      "The promises God makes to Abram in Genesis 12 are the seed from which the entire covenant theology of Scripture grows. Theologians identify three core elements: land, seed, and blessing. These three themes will be amplified, tested, and ultimately fulfilled across the whole arc of the biblical story. Genesis 12 announces them; the rest of the Bible traces their journey to completion in Jesus Christ.",
      "The promise of land is introduced quietly in verse 1 (&ldquo;the land that I will show you&rdquo;) and then made explicit in verse 7: &ldquo;To your offspring I will give this land.&rdquo; Abram is a sojourner in Canaan at this moment; he owns not a single acre of it. He buries his wife Sarah in a field he must buy from the Hittites. But the promise stands: this land will belong to his descendants. The promise of land runs through the entire Old Testament, driving the exodus and the conquest, undergirding the prophets&rsquo; hope during exile, and finding its deepest fulfillment not merely in the geography of Palestine but in the new creation &mdash; the whole earth as the inheritance of God&rsquo;s people (Matthew 5:5; Romans 4:13).",
      "The promise of seed is the most dramatically improbable of the three, because Sarai is barren. Yet God promises to make Abram into &ldquo;a great nation.&rdquo; This promise will be stretched almost to the breaking point: decades will pass before a child is born; that child, Isaac, will nearly be sacrificed; the family will descend into Egypt as slaves. But the seed promise cannot be extinguished. Paul in Galatians 3 and Romans 4 argues that the seed ultimately points to one person: Jesus Christ, &ldquo;the offspring&rdquo; of Abraham in whom all the promises find their yes (2 Corinthians 1:20; Galatians 3:16).",
      "The promise of blessing &mdash; &ldquo;in you all the families of the earth shall be blessed&rdquo; &mdash; is the most theologically astonishing of the three. God&rsquo;s choice of Abram is not the exclusion of the nations but the means of their inclusion. The particular election of one man is in the service of the universal redemption of humanity. This global scope has been called the &ldquo;missionary heartbeat&rdquo; of the Old Testament: the election of Israel is always in view of the blessing of the world. When the New Testament announces that in Christ the blessing of Abraham has come to the Gentiles (Galatians 3:14), it is fulfilling the very first promise ever made to the father of the faithful.",
      "Verse 7 marks the first appearance of the Lord to Abram in the land of Canaan, and with it comes the first altar: &ldquo;there he built an altar to the Lord who had appeared to him.&rdquo; This is a pattern that will repeat throughout the patriarchal narratives &mdash; God appears, the patriarch builds an altar, worship is offered, and the land is claimed in a symbolic way for the Lord. The altar at Shechem is Abram&rsquo;s first act upon arrival in the promised land: not a house, not a field, but an altar. Worship is the fitting response to the promises of God.",
      "The Abrahamic covenant is described by theologians as an unconditional covenant &mdash; unlike the Mosaic covenant, it does not rest on Israel&rsquo;s obedience for its ultimate fulfillment. When God formally ratifies it in Genesis 15, he passes alone through the divided animals in a smoking fire pot, taking the covenant oath entirely upon himself. The fulfillment of these promises is guaranteed not by human faithfulness but by God&rsquo;s own unbreakable word. This is why Paul can say in Romans 4 that the promise depends on faith, not on the law &mdash; because it rests on God alone, it is available to all who trust in the God who calls the dead to life.",
    ],
  },
  {
    id: "Abram in Egypt",
    heading: "Abram in Egypt: Faith Falters, God Remains Faithful",
    reference: "Genesis 12:10&ndash;20",
    paragraphs: [
      "The closing episode of Genesis 12 comes as a jarring contrast to the soaring promises of its opening. Having arrived in Canaan and built altars of worship, Abram encounters a severe famine and does what seems pragmatic: he goes down to Egypt. This is the first of many &ldquo;descents&rdquo; to Egypt in Genesis &mdash; a pattern that consistently represents a move away from the place of promise toward the place of human security. The land God promised has immediately become a place of hardship, and Abram&rsquo;s faith is tested.",
      "As he approaches Egypt, Abram hatches a plan born of fear rather than faith. He says to Sarai: &ldquo;I know that you are a woman beautiful in appearance, and when the Egyptians see you, they will say, &lsquo;This is his wife.&rsquo; Then they will kill me, but they will let you live. Say you are my sister, that it may go well with me because of you, and that my life may be spared for your sake&rdquo; (12:11&ndash;13). Abram is not entirely lying &mdash; Sarai is his half-sister (Genesis 20:12) &mdash; but the deception is real: he conceals that she is his wife, placing her in moral danger to protect his own life.",
      "What follows is deeply uncomfortable. Sarai is taken into Pharaoh&rsquo;s household, and Abram prospers materially because of her: &ldquo;he dealt well with Abram; and he had sheep, oxen, male donkeys, male servants, female servants, female donkeys, and camels&rdquo; (12:16). Abram gains wealth while his wife is in the harem of a pagan king. The man who is to be a blessing to all nations has, in this moment, failed to protect his own wife and has traded on her beauty for personal gain. It is a deeply human portrait of the father of the faithful.",
      "But God does not abandon his covenant in the face of his servant&rsquo;s failure. The Lord strikes Pharaoh and his house with great plagues because of Sarai (12:17). The word &ldquo;plague&rdquo; here is suggestive &mdash; it is the same root used for the plagues of the exodus, and the parallel is intentional: a patriarch&rsquo;s wife is in danger in Egypt, God intervenes with plagues, and his people are sent out with great possessions. Genesis 12 is a miniature rehearsal of the exodus to come. God protects his promise not by waiting for his servant to act faithfully, but by acting himself.",
      "Pharaoh discovers the deception and confronts Abram with a rebuke that stings all the more for coming from a pagan: &ldquo;What is this you have done to me? Why did you not tell me that she was your wife? Why did you say, &lsquo;She is my sister,&rsquo; so that I took her for my wife? Now then, here is your wife; take her, and go&rdquo; (12:18&ndash;19). The patriarch of faith is rebuked by an Egyptian king. Abram offers no defense. He has none.",
      "The Egypt episode is not included to make us despair of Abram but to teach us something essential about the covenant: it rests on God&rsquo;s faithfulness, not Abram&rsquo;s. The promises do not depend on the moral perfection of the one who receives them. God chose a flawed, fearful man and bound himself to him by oath. The same grace that called Abram out of Ur sustains him even in his cowardice in Egypt and brings him back to the land of promise. For any reader who fears that their own failures disqualify them from God&rsquo;s purposes, the Egypt episode is a word of astonishing grace: God&rsquo;s covenant holds even when we do not.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Walking by Faith, Not by Sight",
    reference: "Genesis 12; Hebrews 11:8&ndash;16; Galatians 3:6&ndash;14",
    paragraphs: [
      "Genesis 12 is not merely ancient history &mdash; it is the beginning of the story in which every believer in Jesus finds themselves. Paul argues in Galatians 3 and Romans 4 that those who believe in Christ are the true children of Abraham, heirs of the same promises. The call that came to Abram &mdash; leave what is familiar, follow my voice, trust what you cannot yet see &mdash; is the shape of every Christian life. Faith is not a conclusion we reach after all the evidence is in; it is a journey we begin before the destination is clear.",
      "The first application is the call to leave. Abram was asked to leave country, kindred, and father&rsquo;s house &mdash; the structures that gave him security, identity, and belonging. Following Christ does not always mean geographical relocation, but it always means a reordering of ultimate allegiance. Jesus himself echoed the form of the call when he said, &ldquo;If anyone comes to me and does not hate his own father and mother and wife and children and brothers and sisters, yes, and even his own life, he cannot be my disciple&rdquo; (Luke 14:26). The call to Abraham and the call to discipleship share the same structure: nothing can hold first place except God.",
      "The second application is the practice of building altars. Wherever Abram went in Canaan &mdash; Shechem, Bethel, the Negev &mdash; he built altars to the Lord. He was a nomad with no permanent address, but he marked each stopping place with an act of worship. For the Christian, this is a pattern for the whole of life: to mark every new season, every new challenge, every arrival and departure with intentional worship. The altar is the declaration that God is the center of this place, this moment, this life &mdash; even when everything else is uncertain.",
      "The third application is the warning of the Egyptian detour. When the land of promise became a land of famine, Abram went to Egypt and compromised. The temptation to secure our own future by our own means, when God&rsquo;s promises seem slow in coming, is perennial. Every believer knows the pull toward the Egypt of self-protection &mdash; the half-truth told to avoid conflict, the compromise made to secure a position, the decision driven by fear rather than faith. The pattern of Abram in Egypt teaches us both our tendency to fail and God&rsquo;s faithfulness to restore.",
      "The fourth and deepest application is the assurance that the covenant rests on God, not on us. Abram was a man who left his home, faltered badly in Egypt, laughed at the promise of a son (Genesis 17:17), and yet was called &ldquo;the friend of God&rdquo; (James 2:23). God&rsquo;s commitment to the Abrahamic covenant was not contingent on Abram&rsquo;s consistent faithfulness. It was guaranteed by God&rsquo;s own oath. In Christ, the new covenant believer stands on even firmer ground: Jesus himself is the faithful covenant keeper, the one who never flinched, never faltered, and carried the full weight of covenant obligation to the cross. Our standing before God does not rest on how well we walk by faith today &mdash; it rests on the one who is the same yesterday, today, and forever.",
      "Finally, Genesis 12 invites us into a global vision of God&rsquo;s redemptive purposes. God&rsquo;s call to Abram was never merely about one man, one family, or one nation. It was always about &ldquo;all the families of the earth.&rdquo; The church of Jesus Christ, made up of people from every tongue and tribe and nation, is the living fulfillment of the promise made in Genesis 12:3. Every time the gospel crosses a cultural boundary, every time a person from any nation believes in Jesus, the ancient promise to Abram is coming true. We are not merely recipients of Abraham&rsquo;s blessing &mdash; we are agents of it, called to carry the good news of the God who calls people out of darkness into his marvelous light.",
    ],
  },
];

const videoItems = [
  { videoId: "VpbWbyx1008", title: "BibleProject - Overview of Genesis 12-50" },
  { videoId: "G_OlRWGLdnw", title: "The Call of Abraham - Genesis 12 Explained" },
  { videoId: "ZNIsHEKjLRc", title: "God Calls Abram Out of Ur - The Beginning of the Covenant" },
  { videoId: "Ty9P0LFf7UQ", title: "The Abrahamic Covenant: Land, Seed, and Blessing" },
];

export default function Genesis12GuidePage() {
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
            Genesis 12 &mdash; The Call of Abram
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The chapter that changed everything &mdash; God calls one man out of Ur, makes him a promise of land, seed, and blessing, and sets in motion the entire story of redemption that will reach its fulfillment in Jesus Christ, in whom all the families of the earth are blessed.
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
              Deepen your study of Genesis 12 through these video teachings on the call of Abram, the Abrahamic covenant, and the beginning of God&rsquo;s redemptive plan for the nations.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Go to the Land I Will Show You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 12 is the hinge of human history in Scripture. God&rsquo;s call to Abram &mdash; to leave all that was familiar and follow a voice into the unknown &mdash; is the pattern of every life of faith. The covenant promises of land, seed, and blessing find their ultimate yes in Jesus Christ, who is the seed of Abraham, the heir of all the earth, and the one in whom every family of the world is welcomed into the family of God.
          </p>
        </div>
      </main>
    </div>
  );
}
