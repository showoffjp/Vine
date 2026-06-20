"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm99Guide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "MqMHyWE3vx0", title: "Psalms Overview (BibleProject)" },
    { videoId: "RkPQ5RDGI0k", title: "The Holiness of God (Ligonier)" },
    { videoId: "eH0cKJ_RdkI", title: "Holy Is He -- Psalm 99" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  const para = (html: string, color = TEXT) => (
    <p
      style={{ color, lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.1rem" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const heading = (text: string, color = GOLD) => (
    <h2 style={{ color, fontSize: "1.6rem", marginTop: "2.2rem", marginBottom: "1rem", letterSpacing: "0.01em" }}>
      {text}
    </h2>
  );

  const card = (children: React.ReactNode, accent = BORDER) => (
    <div style={{
      background: CARD,
      border: `1px solid ${BORDER}`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: "10px",
      padding: "1.5rem 1.7rem",
      marginBottom: "1.4rem",
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, ${BG} 70%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "3.5rem 1.5rem 2.8rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ color: GOLD, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.82rem", marginBottom: "1rem" }}>
            A Study Guide for The Vine
          </p>
          <h1 style={{ fontSize: "2.7rem", lineHeight: 1.15, marginBottom: "1rem", color: TEXT }}>
            Psalm 99
          </h1>
          <p style={{ fontSize: "1.35rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD Reigns, Let the Peoples Tremble&rdquo;" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "The climax of the enthronement psalms &mdash; the King enthroned upon the cherubim, great in Zion, a lover of justice, who answered Moses, Aaron, and Samuel, and whose threefold refrain rings out over all: Holy is he." }} />
        </div>
      </div>

      {/* tab bar */}
      <div style={{
        position: "sticky",
        top: "var(--header-height, 80px)",
        background: BG,
        borderBottom: `1px solid ${BORDER}`,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        padding: "0.8rem 1rem",
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? GOLD : "transparent",
              color: tab === t.id ? BG : MUTED,
              border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              fontFamily: "Georgia, serif",
              fontSize: "0.98rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {tab === "overview" && (
          <div>
            {heading("The Summit of the Enthronement Psalms")}
            {para("Psalm 99 is the last and the loftiest of the great enthronement psalms (93, 95-99), and it climbs to a summit no other psalm in the cluster reaches. Three times a refrain rings out like a bell &mdash; &ldquo;Holy is he&rdquo; (verses 3, 5), and finally &ldquo;the LORD our God is holy&rdquo; (verse 9). This threefold &ldquo;holy&rdquo; is the Old Testament's nearest approach to the song of the seraphim in Isaiah 6, &ldquo;Holy, holy, holy is the LORD of hosts,&rdquo; and to the ceaseless worship of heaven in Revelation 4:8. If Psalm 93 declares that the LORD reigns and Psalm 97 that his reign blazes with glory, Psalm 99 names the deepest truth about the King himself: he is holy &mdash; set apart, pure, transcendent, utterly other &mdash; and his holiness is the ground of both his terror and his tenderness.")}
            {para("The psalm is anonymous and untitled, but its structure is carefully built around the threefold refrain, which divides it into three movements. The first (verses 1-3) exalts the King enthroned upon the cherubim, great in Zion and over all peoples. The second (verses 4-5) celebrates the King who loves justice and has established equity. The third (verses 6-9) recalls three great intercessors of Israel's history &mdash; Moses, Aaron, and Samuel &mdash; who called on the LORD and were answered. Each movement ends with the call to worship and the refrain of holiness, so that the whole psalm is a rising spiral of adoration.")}
            {heading("Enthroned Upon the Cherubim", TEAL)}
            {para("The opening image is rich with covenant memory: &ldquo;He sits enthroned upon the cherubim&rdquo; (verse 1). This refers to the ark of the covenant in the Most Holy Place, whose golden lid &mdash; the mercy seat &mdash; was overshadowed by two cherubim with outstretched wings (Exodus 25:18-22). Between those wings, in the thick darkness of the inner sanctuary, the invisible King was understood to be enthroned. It is a staggering juxtaposition: the God before whom the earth quakes and the peoples tremble has chosen to dwell in the midst of his people, above the mercy seat, where atoning blood was sprinkled once a year on the Day of Atonement (Leviticus 16). The holiness that makes the nations tremble is the same holiness that meets sinners at the place of mercy &mdash; a foreshadowing of the cross, where God's holiness and God's mercy meet and kiss.")}
            {heading("Theological Themes", PURPLE)}
            {para("The governing theme of Psalm 99 is the <strong>holiness of God</strong>, pressed home by the triple refrain. Holiness in Scripture is not merely moral purity (though it includes that); it is God's transcendent otherness, the blazing, set-apart majesty that distinguishes the Creator from everything created. R. C. Sproul called it &ldquo;the holiness of God&rdquo; the central attribute that colors all the others &mdash; God is not only loving, but <em>holy</em> love; not only just, but <em>holy</em> justice. The psalm insists that this holiness is to be worshipped (&ldquo;Exalt the LORD our God; worship at his footstool&rdquo;), not domesticated.")}
            {para("A second theme is the marriage of <strong>holiness and justice</strong>: &ldquo;The King in his might loves justice. You have established equity&rdquo; (verse 4). The holy King is no remote abstraction; he governs the world in fairness and has acted in history to do &ldquo;justice and righteousness in Jacob.&rdquo; A third theme, woven through the final movement, is the <strong>power of intercessory prayer</strong>: Moses, Aaron, and Samuel &ldquo;called to the LORD, and he answered them&rdquo; (verse 6). And a fourth, in verse 8, is the profound mystery that God is at once &ldquo;a forgiving God&rdquo; and &ldquo;an avenger of their wrongdoings&rdquo; &mdash; he pardons his people and yet does not treat sin as though it did not matter, a tension resolved only at the cross.")}
            {heading("Significance for the Christian Life", GREEN)}
            {para("Psalm 99 confronts the believer with the holiness that the modern imagination most wants to forget. We are quick to claim God's love and slow to tremble at his holiness &mdash; yet the psalm insists that the two cannot be separated, and that a love untethered from holiness is not the love of the God of the Bible at all. For the Christian, the threefold &ldquo;holy&rdquo; finds its fullest meaning in the One whom Isaiah saw high and lifted up &mdash; for John tells us that Isaiah &ldquo;saw his glory and spoke of him,&rdquo; meaning Christ (John 12:41). The holy King enthroned upon the cherubim is the same Lord who became flesh, bore the avenging judgment our wrongdoings deserved, and now grants the forgiveness verse 8 promised. To worship at his footstool is to fall down, like the elders of Revelation, before the throne of the thrice-holy God.")}
            {para("Below are three short videos to enrich your study, followed by tabs unfolding the psalm's central themes, a verse-by-verse commentary drawing on the great expositors of the church, and practical applications for prayer and life.")}

            <div style={{ marginTop: "2.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ marginBottom: "1.6rem", borderRadius: "10px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.9rem", padding: "0.7rem 1rem", margin: 0, background: CARD }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            {heading("Five Facets of the Thrice-Holy King")}
            {para("Psalm 99 turns the diamond of God's holiness slowly in the light, and each face throws a different beam. Here are five major themes, drawn out for study and for life.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.3rem", marginBottom: "0.8rem" }}>1. Holy, Holy, Holy: The Threefold Refrain</h3>
                {para("Three times the psalm sounds the word &ldquo;holy&rdquo; (verses 3, 5, 9), making it the closest Old Testament parallel to the <em>trisagion</em> &mdash; the &ldquo;Holy, holy, holy&rdquo; of the seraphim (Isaiah 6:3) and of the living creatures around the throne (Revelation 4:8). In Hebrew, repetition is the language of superlative; to say a thing three times is to lift it to its highest degree. God is not merely holy but holy in the absolute, the superlative, the unsurpassable. <strong>Apologetics insight:</strong> the Bible alone among ancient religions places holiness &mdash; moral and transcendent purity &mdash; at the very center of the divine character, rather than power, fertility, or caprice. <strong>Application:</strong> to know God truly is to be undone by his holiness, as Isaiah was (&ldquo;Woe is me! For I am lost&rdquo;), and then to be cleansed and sent.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.3rem", marginBottom: "0.8rem" }}>2. Enthroned Upon the Cherubim</h3>
                {para("&ldquo;He sits enthroned upon the cherubim; let the earth quake!&rdquo; (verse 1). The image evokes the ark of the covenant, where the invisible King was enthroned above the mercy seat between the golden cherubim (Exodus 25:22; 1 Samuel 4:4; 2 Kings 19:15). It is the meeting of transcendence and nearness: the God who fills heaven and earth condescends to dwell among his people at the place of atonement. <strong>Application:</strong> the same holiness that makes the earth quake is the holiness that, in Christ, has come near. Hebrews tells us we now &ldquo;draw near to the throne of grace&rdquo; (Hebrews 4:16) &mdash; the mercy seat is no longer hidden behind a veil, for the veil was torn (Matthew 27:51). We approach the thrice-holy King not in terror but through the blood of Jesus.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>3. The King Who Loves Justice</h3>
                {para("&ldquo;The King in his might loves justice. You have established equity; you have executed justice and righteousness in Jacob&rdquo; (verse 4). The holiness of God is not cold or detached; it expresses itself in a passion for what is right. He does not merely permit justice; he <em>loves</em> it and has <em>established</em> it. This is the bedrock of the believer's hope that evil will not finally prevail (compare Psalm 11:7; Isaiah 61:8, &ldquo;I the LORD love justice&rdquo;). <strong>Application:</strong> those who worship a justice-loving King are summoned to love justice too &mdash; to do justly, love mercy, and walk humbly with their God (Micah 6:8). A faith that adores God's holiness but shrugs at injustice has misread the King it claims to serve.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.3rem", marginBottom: "0.8rem" }}>4. The School of Intercessors</h3>
                {para("&ldquo;Moses and Aaron were among his priests, Samuel also was among those who called upon his name. They called to the LORD, and he answered them&rdquo; (verse 6). The psalm reaches into Israel's history for three towering examples of prayer. Moses stood in the breach when Israel sinned (Exodus 32:11-14; Psalm 106:23); Aaron made atonement and stayed a plague (Numbers 16:46-48); Samuel cried out and the LORD answered with thunder (1 Samuel 7:9; 12:18). <strong>Application:</strong> the holy King who makes the peoples tremble is also the God who hears and answers prayer. These three were not perfect men, but they were men who called on his name and held fast his testimonies. The same access is ours, and more &mdash; for we have a great High Priest who ever lives to intercede (Hebrews 7:25).")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>5. Forgiving and Yet Avenging</h3>
                {para("&ldquo;You were a forgiving God to them, but an avenger of their wrongdoings&rdquo; (verse 8). Here is one of the deepest mysteries of the divine character, stated in a single breath. God truly forgave his people &mdash; and yet he did not treat their sin as a trifle; there were real consequences for wrongdoing even among the forgiven. The holiness of God will not pretend that sin does not matter, even as his mercy pardons the sinner. <strong>Apologetics insight:</strong> this tension &mdash; how a holy God can forgive without becoming unjust &mdash; finds its only resolution at the cross, where God is shown to be &ldquo;just and the justifier&rdquo; (Romans 3:26). The sin is not ignored; it is borne. <strong>Application:</strong> we rest in full forgiveness while taking sin with full seriousness, for both flow from the same holy love.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "verse" && (
          <div>
            {heading("Verse by Verse")}
            {para("The commentary below moves through all nine verses, drawing on Calvin, Spurgeon, Matthew Henry, Derek Kidner, and the wider tradition of the church.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 1-3</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD reigns; let the peoples tremble! He sits enthroned upon the cherubim; let the earth quake! The LORD is great in Zion; he is exalted over all the peoples. Let them praise your great and awesome name! Holy is he!&rdquo;" }} />
                {para("The psalm opens with the enthronement cry &mdash; &ldquo;The LORD reigns&rdquo; &mdash; but where Psalm 97 drew the response &ldquo;let the earth rejoice,&rdquo; Psalm 99 draws &ldquo;let the peoples tremble.&rdquo; Both are true and proper responses to the same King; the difference in emphasis suits a psalm whose theme is holiness. The image of God &ldquo;enthroned upon the cherubim&rdquo; recalls the ark of the covenant, the visible throne of the invisible God (1 Samuel 4:4). Spurgeon notes the trembling and the quaking: &ldquo;Well may the earth quake when the Lord is angry, and well may the people tremble when justice is on the throne.&rdquo; Yet the King is &ldquo;great in Zion&rdquo; &mdash; near to his people even as he is &ldquo;exalted over all the peoples.&rdquo; The first refrain crowns the movement: &ldquo;Holy is he!&rdquo; Calvin observes that the holiness of God is named here not as an abstract attribute but as the reason for worship: it is <em>because</em> he is holy that his name is great and awesome.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 4-5</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The King in his might loves justice. You have established equity; you have executed justice and righteousness in Jacob. Exalt the LORD our God; worship at his footstool! Holy is he!&rdquo;" }} />
                {para("The second movement turns from God's majesty to his moral government. &ldquo;The King in his might loves justice&rdquo; &mdash; his power is never divorced from his righteousness. Matthew Henry comments that &ldquo;his power is always employed for just and righteous ends,&rdquo; which is precisely what makes his omnipotence a comfort rather than a terror to the godly. The phrase &ldquo;you have established equity&rdquo; points to God as the author of fairness itself, the one who has set right standards into the very fabric of his dealings with Jacob. The call to &ldquo;worship at his footstool&rdquo; again evokes the temple, and specifically the ark, which is elsewhere called God's footstool (1 Chronicles 28:2; Psalm 132:7) &mdash; the place where heaven touches earth. The second refrain falls: &ldquo;Holy is he!&rdquo; Kidner observes that the psalm refuses to let holiness float free of justice; the holy King is the just King, and to worship his holiness is to bow before his righteousness.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 6-7</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Moses and Aaron were among his priests, Samuel also was among those who called upon his name. They called to the LORD, and he answered them. In the pillar of the cloud he spoke to them; they kept his testimonies and the statute that he gave them.&rdquo;" }} />
                {para("The final movement grounds the psalm's lofty theology in history. The holy and exalted King is also the God who answers prayer &mdash; and the psalmist names three witnesses: Moses, Aaron, and Samuel. Moses and Aaron interceded for a rebellious people and turned away wrath (Exodus 32; Numbers 16); Samuel prayed and God thundered against the Philistines (1 Samuel 7:9-10). All three are described as those who &ldquo;called upon his name&rdquo; and were answered, and who &ldquo;kept his testimonies.&rdquo; The mention of &ldquo;the pillar of the cloud&rdquo; recalls the wilderness years, when God spoke to Moses face to face (Exodus 33:9-11). Spurgeon draws the encouragement: &ldquo;These were men of like passions with ourselves, yet they prevailed in prayer; let us not despair.&rdquo; The pairing of intercession with obedience is significant &mdash; they prayed, and they also &ldquo;kept his testimonies&rdquo;; effective prayer and a life of obedience belong together (compare James 5:16-18).")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 8-9</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;O LORD our God, you answered them; you were a forgiving God to them, but an avenger of their wrongdoings. Exalt the LORD our God, and worship at his holy mountain; for the LORD our God is holy!&rdquo;" }} />
                {para("The psalm reaches its profound climax. God &ldquo;answered&rdquo; the intercessors, and the answer reveals two truths held in perfect tension: he was &ldquo;a forgiving God&rdquo; and yet &ldquo;an avenger of their wrongdoings.&rdquo; This is no contradiction but the heart of biblical religion. God genuinely forgives his people &mdash; and yet he does not wink at sin; even among the pardoned there are real consequences (as when Moses himself was barred from the promised land, Numbers 20:12). Calvin marvels that God's mercy and his justice meet here without canceling one another. The Christian sees the full resolution only at Calvary, where God remains &ldquo;just&rdquo; while becoming &ldquo;the justifier of the one who has faith in Jesus&rdquo; (Romans 3:26) &mdash; the wrongdoing is not ignored but borne by the sinless Substitute. The psalm ends with its third and fullest refrain, no longer simply &ldquo;Holy is he&rdquo; but &ldquo;the LORD our God is holy&rdquo; &mdash; personal, possessive, the trembling now transfigured into the worship of a people who call him their own. Matthew Henry's last word fits: &ldquo;God is holy, and therefore he will be worshipped; he is our God, and therefore he shall be worshipped by us.&rdquo;")}
              </div>, GREEN
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("Living Before the Thrice-Holy King")}
            {para("Psalm 99 is meant to reshape the way we approach God. Here are four areas where its truth presses into daily discipleship, each with a prayer prompt to carry the psalm from the page into the heart.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Recover the Fear of the Lord</h3>
                {para("&ldquo;Let the peoples tremble&hellip; let the earth quake!&rdquo; A faith that has lost all trembling has lost something essential. The fear of the Lord is not cringing terror but reverent awe &mdash; the recognition that we stand before a holiness infinitely above us. Scripture calls this fear &ldquo;the beginning of wisdom&rdquo; (Proverbs 9:10). It does not cancel intimacy; it deepens it, for the God we may call &ldquo;our God&rdquo; is the same God before whom the earth quakes. <strong>Prayer prompt:</strong> &ldquo;Holy King, enthroned upon the cherubim, restore to me a holy trembling. Let me never grow so familiar with you that I forget you are holy, holy, holy.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Worship Holiness, Not a God of Your Own Making</h3>
                {para("The threefold &ldquo;Holy is he&rdquo; guards us from remaking God in our own image. It is easy to fashion a god who is endlessly affirming and never holy &mdash; but that god is an idol, not the LORD of Psalm 99. True worship begins by letting God be as holy as he is. <strong>Apologetics insight:</strong> the holiness of God answers the common objection that the biblical God is merely a human projection; a God invented to comfort us would not be a consuming holiness before whom we are undone, but a flattering reflection of ourselves. The God who makes Isaiah cry &ldquo;Woe is me&rdquo; is no wish-fulfillment. <strong>Prayer prompt:</strong> &ldquo;Lord, tear down every comfortable, shrunken image of you in my mind, and show me your holiness, that I may worship you as you truly are.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Pray Like Moses, Aaron, and Samuel</h3>
                {para("&ldquo;They called to the LORD, and he answered them.&rdquo; The same holy King who makes the nations tremble bends his ear to the prayers of his people. The psalm sets before us three intercessors who stood in the gap for others &mdash; a model of prayer that pleads not only for ourselves but for our families, churches, and nations. And it joins prayer to obedience: they &ldquo;kept his testimonies.&rdquo; <strong>Prayer prompt:</strong> &ldquo;Father, teach me to call on your name as Moses, Aaron, and Samuel did &mdash; to intercede for others, to keep your word, and to trust that you still answer those who pray. Make me a person who stands in the gap.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Rest in the God Who Forgives Without Excusing Sin</h3>
                {para("&ldquo;You were a forgiving God to them, but an avenger of their wrongdoings.&rdquo; Here is rest for the conscience and reverence for the will. We are fully forgiven in Christ &mdash; truly, freely, forever &mdash; and yet we never treat sin as harmless, for our forgiveness cost the lifeblood of the Son. The cross is where the holiness that avenges and the mercy that pardons embrace. <strong>Apologetics insight:</strong> only the Christian gospel holds these together; it neither lets sin slide (sentimentality) nor leaves the sinner condemned (despair), because God himself bore the penalty in our place. <strong>Prayer prompt:</strong> &ldquo;Holy and forgiving God, thank you that at the cross your justice and your mercy met. Let me never presume on your grace nor doubt your pardon, but live in grateful, reverent love.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Meditation</h3>
                {para("&ldquo;Exalt the LORD our God, and worship at his holy mountain; for the LORD our God is holy!&rdquo; Three times the psalm has sounded the great word, and the third time it adds the sweetest possession of all: <em>our</em> God. The thrice-holy King, before whom the earth quakes, has made himself ours. Worship at his footstool. Tremble, and then draw near &mdash; for the veil is torn, and the Holy One is your God.")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
