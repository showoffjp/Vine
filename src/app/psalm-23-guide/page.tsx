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
  "The Lord My Shepherd",
  "Green Pastures and Still Waters",
  "Through the Valley",
  "A Table Before Me",
  "Dwelling in the House of the Lord",
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
    id: "The Lord My Shepherd",
    heading: "The Lord Is My Shepherd",
    reference: "Psalm 23:1",
    paragraphs: [
      "&ldquo;The Lord is my shepherd; I shall not want&rdquo; (23:1). With these six words David lays the foundation of the most beloved psalm in all of Scripture. He does not begin with a doctrine to be debated or a duty to be performed, but with a relationship to be enjoyed. The eternal God, the maker of heaven and earth, the One whose name is too holy to be spoken, stoops down to be the personal shepherd of one small and trembling sheep. The whole psalm flows out of this astonishing claim of belonging: not &ldquo;the Lord is a shepherd&rdquo; in the abstract, but &ldquo;the Lord is my shepherd.&rdquo;",
      "David knew the work of a shepherd from the inside. As a boy in the fields of Bethlehem he had guarded his father&rsquo;s flock, had struck down the lion and the bear that came against the sheep, had carried the weak and sought the lost. So when he calls the Lord his shepherd, he is not reaching for a sentimental image. He is saying that God watches over him with the same costly vigilance, the same willingness to fight and bleed for the helpless, that a faithful shepherd shows toward an animal that cannot defend or guide itself.",
      "Sheep are famously dependent creatures. They have no fangs and no claws; they cannot find their own way home; left to themselves they will wander into danger, eat what harms them, and fall and be unable to rise. To be called a sheep is no compliment to our competence. But that is precisely the comfort of this psalm. The believer is not asked to be strong, clever, or self-sufficient. The whole burden of provision, guidance, and protection rests not on the sheep but on the Shepherd, and He is wholly equal to it.",
      "&ldquo;I shall not want.&rdquo; This is not a promise that we will have everything we crave, but that we will lack nothing we truly need. Under such a Shepherd, contentment becomes possible even in scarcity. The apostle Paul, who knew hunger and abundance alike, learned this same secret: &ldquo;I have learned in whatever situation I am to be content&rdquo; (Philippians 4:11). When the Lord Himself is our portion, the soul can rest, because the One who holds us has already promised to supply all our need.",
      "For the anxious heart, this opening line is medicine. So much of our fear arises from the unspoken conviction that everything depends on us &mdash; that if we let go for a moment, we will fall. Psalm 23 quietly overturns that lie. It tells us that there is a Shepherd who never sleeps, who counts every one of His sheep, who will not lose a single one entrusted to His care. To believe this is to begin to lay down the exhausting work of being our own god, and to learn instead to follow.",
      "Jesus took up this very image and made it His own: &ldquo;I am the good shepherd. The good shepherd lays down his life for the sheep&rdquo; (John 10:11). The Lord who is David&rsquo;s shepherd is revealed in the Gospel to be Christ Himself, who does not merely fight lions and bears for His flock but lays down His own life on the cross to rescue them. Every comfort that follows in this psalm is purchased and guaranteed by the Shepherd who died and rose to keep His sheep forever.",
    ],
  },
  {
    id: "Green Pastures and Still Waters",
    heading: "Green Pastures and Still Waters",
    reference: "Psalm 23:2&ndash;3",
    paragraphs: [
      "&ldquo;He makes me lie down in green pastures. He leads me beside still waters. He restores my soul&rdquo; (23:2&ndash;3). Having declared who his Shepherd is, David now describes what the Shepherd does. The picture is one of deep and unhurried rest: a flock lying down, satisfied, in lush grass, beside water so calm the sheep are not afraid to drink. It is an image of provision, peace, and the renewal of life itself.",
      "It is worth noticing that the Shepherd &ldquo;makes&rdquo; the sheep lie down. Sheep will not rest if they are hungry, frightened, harassed by pests, or at odds with one another in the flock. Only when all is well will they lie down. So the Shepherd, in His tender authority, removes the things that rob His sheep of peace and brings them to a place where rest becomes possible. Sometimes the love of God is shown not in driving us forward but in making us stop, in laying us low until we are willing to be still.",
      "&ldquo;Still waters&rdquo; translates a phrase meaning waters of rest or quietness. Sheep are afraid of fast-moving water and will not drink from a rushing stream. The good shepherd, knowing this, leads them to gentle pools where they can be refreshed without fear. So our Shepherd knows our frailties and our fears, and He leads us, not by the torrents that would overwhelm us, but to the quiet places where the soul can be watered and revived.",
      "&ldquo;He restores my soul.&rdquo; Here is one of the most precious phrases in the psalm. The Hebrew can carry the sense of bringing back a soul that has fainted, or returning a wanderer who has strayed. Sheep that fall over onto their backs &mdash; what shepherds call a &ldquo;cast&rdquo; sheep &mdash; cannot right themselves and will perish unless the shepherd comes and lifts them up. So too our souls grow weary, faint, and cast down; and the Shepherd comes, again and again, to set us back on our feet and breathe new life into us.",
      "For those worn down by grief or exhaustion, this verse is a gentle invitation. You are not commanded here to manufacture your own strength, but promised a Shepherd who restores. When the soul is empty and dry, when sorrow has drained away every reserve, He is the One who refills the springs. The restoration of the soul is His work, not ours; our part is simply to let ourselves be led to the green pastures and still waters where that healing is found.",
      "&ldquo;He leads me in paths of righteousness for his name&rsquo;s sake&rdquo; (23:3). The Shepherd not only feeds and restores but guides. He leads along right paths &mdash; the tracks that are safe and good, that lead to pasture and not to the cliff edge. And the deepest reason for His faithful guidance is not our merit but His own name: He leads us rightly because He is a good Shepherd and will be true to His own character. Our security rests on who He is, not on how well we follow.",
    ],
  },
  {
    id: "Through the Valley",
    heading: "Through the Valley of the Shadow of Death",
    reference: "Psalm 23:4",
    paragraphs: [
      "&ldquo;Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me&rdquo; (23:4). Here the psalm reaches its turning point. Up to now David has spoken of his Shepherd in the third person &mdash; &ldquo;He makes,&rdquo; &ldquo;He leads,&rdquo; &ldquo;He restores.&rdquo; But now, in the dark valley, the language changes to direct address: &ldquo;You are with me.&rdquo; It is in the deepest darkness that the soul stops talking about God and begins talking to Him.",
      "The Shepherd does not promise that His sheep will avoid the valley. The path of righteousness itself sometimes runs straight through the ravine where the shadow of death falls cold across the way. David does not say &ldquo;if&rdquo; but &ldquo;though&rdquo; &mdash; this is the appointed road, not an accident or a detour. Faith is not the absence of dark valleys, but the presence of the Shepherd in them. The same hand that leads us beside still waters also leads us, when the time comes, into the shadowlands.",
      "Notice that David walks &ldquo;through&rdquo; the valley. He does not pitch his tent there; he does not stay. The valley has an entrance and an exit, and the Shepherd is leading His sheep clear out the other side. For the believer, even the valley of death itself is a passage, not a destination &mdash; a corridor that opens, at last, into the house of the Lord. This is why the Christian can face dying not with despair but with hope: it is a walk through, on the way home.",
      "&ldquo;I will fear no evil, for you are with me.&rdquo; David does not say there is no evil in the valley; he says he will not fear it, and he tells us why. The cause of his courage is not his own bravery, nor the safety of the path, but a Person: &ldquo;You are with me.&rdquo; The presence of the Shepherd does not remove the darkness, but it removes the terror of the darkness. To know that we are not alone, that the One who loves us is walking at our side through the worst of it, is enough to still the trembling heart.",
      "&ldquo;Your rod and your staff, they comfort me.&rdquo; The rod was the shepherd&rsquo;s heavy club, used to beat off wolves and lions and to defend the flock; the staff was the long crook used to guide, to draw back a straying sheep, and to lift one out of a pit. The rod speaks of the Shepherd&rsquo;s power to protect, the staff of His tenderness to guide and rescue. Together they tell the frightened sheep: this Shepherd is both strong enough to defend you and gentle enough to carry you. There is nothing in the valley He cannot handle.",
      "This single verse has been a pillow for countless dying saints and a lifeline for the bereaved. When you walk into the room of someone you love who is slipping away, or when grief has emptied the world of light, Psalm 23:4 does not pretend the valley is not real. It simply insists that you are not alone in it. The Good Shepherd, who Himself passed through the deepest valley of death and rose again, walks with His own through theirs &mdash; and He has promised to bring them safely through to the other side.",
    ],
  },
  {
    id: "A Table Before Me",
    heading: "A Table Prepared in the Presence of Enemies",
    reference: "Psalm 23:5",
    paragraphs: [
      "&ldquo;You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows&rdquo; (23:5). With this verse the imagery shifts from the open pasture to a banquet. The Lord is now portrayed not only as Shepherd but as gracious Host, who spreads a feast for His guest and lavishes upon him the honors of hospitality. The journey through the valley leads not to scarcity but to abundance, not to a grave but to a table.",
      "&ldquo;In the presence of my enemies&rdquo; is a striking detail. The foes are still there, looking on, but they are powerless to interrupt the feast. The believer sits down to eat in peace while surrounded by those who would do him harm, because the Host Himself guarantees the safety of His guest. So God&rsquo;s provision and joy are not reserved only for the day when every trouble is finally gone; He spreads His table for us now, in the very midst of opposition, as a sign that His care cannot be defeated by our enemies.",
      "&ldquo;You anoint my head with oil.&rdquo; In the ancient world, a host would pour fragrant oil on the head of an honored guest as a mark of welcome, gladness, and blessing. On another level, shepherds anointed their sheep&rsquo;s heads with oil to soothe wounds and to keep away the insects that tormented them. Either way, the picture is one of healing and honor &mdash; the touch of a God who tends to the smallest hurts and crowns His people with dignity and joy.",
      "&ldquo;My cup overflows.&rdquo; The Host does not fill the cup to a careful, measured line, but pours until it runs over the brim. This is the generosity of God &mdash; not a grudging sufficiency but a lavish, spilling abundance. The believer&rsquo;s portion is not merely enough; it is more than enough, a goodness that cannot be contained. Even in a world of enemies and valleys, the one who belongs to this Shepherd has cause for overflowing gratitude.",
      "There is profound comfort here for those who feel besieged. Perhaps your enemies are not soldiers but illness, debt, loneliness, or the long ache of loss; perhaps it feels as though trouble surrounds you on every side. This verse promises that God is able to set a table of grace for you in the very middle of it &mdash; to give peace that the world cannot give and joy that circumstances cannot steal. His abundance is not waiting for a calmer day; it is offered to you now, at the table He has already prepared.",
      "The overflowing cup points forward to the Lord&rsquo;s table, where the Good Shepherd feeds His flock with His own body and blood, and forward still further to the marriage supper of the Lamb, when the redeemed will sit down at last in the unbroken presence of their Host. Every table of grace in this life is a foretaste of that feast, a pledge that the One who has carried us this far intends to bring us all the way home to the banquet that has no end.",
    ],
  },
  {
    id: "Dwelling in the House of the Lord",
    heading: "Goodness and Mercy All My Days",
    reference: "Psalm 23:6",
    paragraphs: [
      "&ldquo;Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever&rdquo; (23:6). The psalm closes with a confident, soaring assurance. Having walked through pastures and valleys, having sat at the table of his Host, David now looks back over the whole journey and forward to its end, and sees the same two faithful companions accompanying him every step of the way.",
      "&ldquo;Goodness and mercy shall follow me.&rdquo; The word translated &ldquo;follow&rdquo; can mean to pursue, even to chase down. It is the language usually reserved for enemies hunting their prey &mdash; but here it is goodness and mercy that come hard after the believer. We are not merely permitted to hope for some good days; we are pursued, relentlessly and to the very end, by the goodness and covenant love of God. He will not let His sheep escape His kindness.",
      "&ldquo;All the days of my life.&rdquo; Not some days, not the good days only, but all of them &mdash; the bright days and the dark, the days of feasting and the days in the valley. There is no day in the believer&rsquo;s life from which God&rsquo;s goodness and mercy are absent, even when they are hidden behind clouds of sorrow. Faith learns to trust that they are there, faithfully following, on the days when we cannot feel them as well as on the days when we can.",
      "&ldquo;And I shall dwell in the house of the Lord forever.&rdquo; The journey of the sheep does not end in a far field or a lonely valley, but in the home of the Shepherd Himself. The whole pilgrimage of life is leading somewhere &mdash; to a permanent dwelling in the presence of God, where the wandering is over, the dangers are past, and the sheep are safely and finally home. This is the believer&rsquo;s hope in the face of death: not annihilation, but homecoming.",
      "For the grieving and the dying, this last verse is the dawn at the end of the long night. The same Shepherd who has led us all the days of our lives does not abandon us at the edge of the grave; He leads us through it into His own house, to dwell with Him forever. Death is not the loss of the Shepherd but the meeting with Him face to face. The sheep that He has carried through every valley He will carry, at the last, all the way home.",
      "Jesus made this promise unmistakably His own: &ldquo;In my Father&rsquo;s house are many rooms&hellip; I go to prepare a place for you&hellip; that where I am you may be also&rdquo; (John 14:2&ndash;3). The Good Shepherd who laid down His life for the sheep has gone ahead to ready the house, and He will come again to gather His own. So Psalm 23 ends not with a wish but with a certainty &mdash; &ldquo;surely&rdquo; &mdash; for the dwelling place is secured by the One who died and rose to bring us there.",
    ],
  },
];

const videoItems = [
  { videoId: "AY2Qs0nXr2g", title: "Psalm 23 - The Lord Is My Shepherd Explained" },
  { videoId: "DRdf42ZQ2L0", title: "Walking Through the Valley - Psalm 23 in Grief" },
  { videoId: "Z6oCmygmK7M", title: "Jesus the Good Shepherd - John 10 and Psalm 23" },
  { videoId: "jbeQAUEDoNc", title: "Surely Goodness and Mercy - Hope at the End of Life" },
];

export default function Psalm23GuidePage() {
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
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 23: The Lord Is My Shepherd
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A verse-by-verse journey through the most beloved psalm &mdash; green pastures and still waters, the restoring of the soul, the walk through the valley of the shadow of death without fear, the table prepared in the presence of enemies, and the promise of dwelling in the house of the Lord forever. Comfort for the grieving, the anxious, and the dying, in the care of Jesus the Good Shepherd.
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
              Deepen your meditation on Psalm 23 through teaching on the Shepherd&rsquo;s care, the walk through the valley in seasons of grief, the connection to Jesus the Good Shepherd, and the hope of dwelling in the house of the Lord forever.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Are Not Alone in the Valley</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 23 does not promise a life without dark valleys, but a Shepherd who walks through every one of them at our side. Whatever grief, fear, or shadow you are facing, the same Lord who is David&rsquo;s Shepherd is revealed in Jesus, the Good Shepherd who laid down His life for the sheep. Goodness and mercy are pursuing you all your days, and He is leading you home to dwell in the house of the Lord forever.
          </p>
        </div>
      </main>
    </div>
  );
}
