"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "hBYuv5zNF8Q", title: "Psalm 42 and 43 -- Why Are You Cast Down?" },
  { videoId: "2gv5JI2CaCg", title: "The Sons of Korah Psalms Explained" },
];

function VideoEmbed({ v }: { v: { videoId: string; title: string } }) {
  const [ready, setReady] = useState(false);
  return (
    <div
      onClick={() => setReady(true)}
      style={{ position: "relative", paddingBottom: "56.25%", background: "#000", borderRadius: 10, overflow: "hidden", cursor: "pointer", border: `1px solid ${BORDER}` }}
    >
      {ready ? (
        <iframe
          src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
          title={v.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <>
          <img src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`} alt={v.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #fff", marginLeft: 4 }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.85))", padding: "1.5rem 1rem 0.75rem", color: "#fff", fontSize: "0.88rem", fontWeight: 600 }}>{v.title}</div>
        </>
      )}
    </div>
  );
}

export default function Psalm43Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #090810 0%, #120e1a 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <Link href="/psalm-42-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalm 42</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 43</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Sons of Korah &mdash; Companion to Psalm 42</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 43: Vindicate Me, O God,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>and Send Out Your Light and Truth</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            The companion to Psalm 42 &mdash; likely a single poem divided by scribal tradition &mdash; Psalm 43 ends the three-stanza cycle with a prayer for divine guidance to the altar of God and the third repetition of the great refrain of hope.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Sons of Korah (likely)"], ["Book", "Book II (Ps 42-72)"], ["Type", "Individual Lament"], ["Key Theme", "Light, Truth, Altar"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: TEXT }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto" }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Third Stanza of the Great Lament</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 43 lacks a title in the Hebrew text, which is extremely unusual in Book II of the Psalter. This anomaly, combined with the fact that the refrain of Psalms 42-43 appears three times (42:5, 42:11, 43:5), and that the situation described is identical in both psalms, has led nearly all modern scholars to conclude that Psalms 42 and 43 were originally a single poem. Derek Kidner calls it &ldquo;almost certainly one psalm in three stanzas, divided in transmission.&rdquo; Reading Psalm 43 in isolation therefore cuts the reader off from the full arc of the poem; it should always be read after Psalm 42." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The poet (almost certainly a son of Korah, a temple musician) is separated from Jerusalem and the sanctuary &mdash; perhaps in exile in the north, near the headwaters of the Jordan (42:6). He is surrounded by enemies who taunt him: &ldquo;Where is your God?&rdquo; (42:3, 10). His grief is real and not disguised. What changes across the three stanzas is not his circumstances but his posture: each stanza descends into grief and then rises to the refrain of hope. By the third stanza (Psalm 43), the movement is most decisive: the poet appeals directly to God to send his light and truth to lead him back to the holy mountain." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "John Calvin in his commentary on Psalm 43 dwells on the request for God&rsquo;s light and truth as divine attributes that function as guides: &ldquo;The psalmist does not merely ask for good circumstances; he asks for God&rsquo;s own nature &mdash; his illuminating truth &mdash; to lead the way back to worship. This is wisdom: we cannot find the path to God by our own reasoning; we need divine light.&rdquo; Calvin connects this to the Johannine vocabulary of Christ as the light and the truth: &ldquo;What the psalmist needed as attributes sent from God, the New Testament reveals as a person &mdash; Jesus Christ, who is himself the way, the truth, and the life (John 14:6).&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Spurgeon is particularly moved by verse 4: &ldquo;Then I will go to the altar of God, to God my exceeding joy, and I will praise you with the lyre, O God, my God.&rdquo; He notes the accumulating intimacy of the names used: &lsquo;God,&rsquo; then &lsquo;God my exceeding joy,&rsquo; then &lsquo;O God, my God.&rsquo; &ldquo;The psalmist begins at a distance and arrives at possession,&rdquo; Spurgeon writes. &ldquo;This is the movement of every prayer that is answered: we approach as supplicants and arrive as worshippers who have found what they sought.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Matthew Henry sees the refrain of verse 5 (&ldquo;Why are you cast down, O my soul?&rdquo;) as the key to the pastoral function of the entire poem. &ldquo;The psalmist does not merely express his grief; he questions it. This is the essential act of Christian self-examination: not suppressing emotion but bringing it before the tribunal of the soul and asking, &lsquo;Is this consistent with what I know about God?&rsquo;&rdquo; Henry calls this practice &lsquo;reasoning with the soul,&rsquo; and commends it as a spiritual discipline of enormous practical value in seasons of depression." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 43 is significant because it refuses both false alternatives that suffering tends to generate: the denial of grief (pretending nothing is wrong) and the surrender to despair (concluding that God has abandoned the field). The refrain articulates a third way: &ldquo;Hope in God; for I shall again praise him, my salvation and my God.&rdquo; This is not wishful thinking but the grammar of covenant faith: &lsquo;I know who God is, and I choose to orient my expectations around his character rather than my current circumstances.&rsquo; It is the same movement Paul describes in Romans 5:3-5, where suffering produces endurance, endurance character, and character hope that &ldquo;does not put us to shame.&rdquo;" }} />

            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.15rem", fontWeight: 600, marginBottom: "1rem" }}>Video Resources</h3>
              <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
                {videos.map(v => <VideoEmbed key={v.videoId} v={v} />)}
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Major Themes</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                {
                  color: PURPLE,
                  title: "Vindication Against the Ungodly Nation",
                  body: "Verse 1 opens with a plea for divine judgment: &ldquo;Vindicate me, O God, and defend my cause against an ungodly people.&rdquo; The word &lsquo;vindicate&rsquo; (shaphat) is legal language &mdash; the psalmist is asking God to act as judge and deliver a verdict on his behalf. The enemy is described as &lsquo;an ungodly people,&rsquo; pointing not to a single opponent but to a social environment characterized by hostility to God. Longman notes that this reflects the situation of the exilic or dispersed Israelite surrounded by cultures indifferent or hostile to covenant faith &mdash; a situation deeply relevant to Christians in secular environments. The prayer is not for the destruction of the enemy but for God to stand up and be counted on the side of the righteous."
                },
                {
                  color: GOLD,
                  title: "Light and Truth as Divine Guides",
                  body: "Verse 3 is the theological high point of the psalm: &ldquo;Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling.&rdquo; Light and truth are personified as divine envoys sent ahead of the psalmist to guide him home. Calvin connects this to Psalm 119 (&ldquo;Your word is a lamp to my feet and a light to my path&rdquo;) and ultimately to the Johannine prologue: &ldquo;In him was life, and the life was the light of men&rdquo; (John 1:4). The request is theologically bold: the psalmist asks not for a map but for divine attributes to accompany him personally. In NT terms, this is the role of the Holy Spirit, who is called the &lsquo;Spirit of truth&rsquo; in John 14:17 and who guides believers into all truth (John 16:13)."
                },
                {
                  color: TEAL,
                  title: "God as Exceeding Joy",
                  body: "Verse 4 describes God as &lsquo;my exceeding joy&rsquo; (simchat gili, literally &lsquo;the joy of my rejoicing&rsquo;). This is not a mild satisfaction but an intensified, doubled joy &mdash; the sort of gladness that overflows. Spurgeon preaches from this phrase: &ldquo;The psalmist does not say God gives him joy, but that God is his joy. The distinction is crucial. The gift can be removed; the Giver cannot be taken away from the one who has learned to find joy in God himself.&rdquo; The altar of God is the destination precisely because it is where God meets his people &mdash; and where the psalmist, having been led by divine light and truth, will arrive and burst into lyre-accompanied praise. This is the telos of the whole journey: not comfort, not vindication, but worship."
                },
                {
                  color: ROSE,
                  title: "The Refrain: Reasoning with the Downcast Soul",
                  body: "The refrain of verses 42:5, 42:11, and 43:5 is perhaps the most psychologically precise verse in the Psalter: &ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.&rdquo; Matthew Henry&rsquo;s observation is crucial: the psalmist is not denying the depression but questioning it &mdash; interrogating his own soul. This is the opposite of both suppression and surrender. Tremper Longman writes: &ldquo;The refrain models the essential act of lament faith: the sufferer looks at their despondency and says, &lsquo;Is this the final word? Or is there something truer than what I feel?&rsquo;&rdquo; The answer is always: hope in God. Not hope in circumstances improving, but hope in God himself &mdash; whose character has not changed regardless of what is happening to the sufferer."
                },
                {
                  color: GREEN,
                  title: "The Altar as Eschatological Destination",
                  body: "The psalm&rsquo;s goal is the altar of God on the holy mountain (vv. 3-4). For the original psalmist, this was the Jerusalem temple. For the NT reader, the fulfillment is considerably richer. Hebrews 12:22-24 describes Christian worship as a present, spiritual ascent to the heavenly Jerusalem, to Mount Zion, to &ldquo;the assembly of the firstborn,&rdquo; to God himself, and to &ldquo;Jesus, the mediator of a new covenant.&rdquo; The journey the psalmist prays to make &mdash; led by divine light and truth, arriving at the altar with songs of praise &mdash; is the journey every Christian makes in gathered worship and will make finally at the consummation. The lyre of verse 4 becomes the new song of Revelation 5:9."
                },
              ].map(th => (
                <div key={th.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, borderLeft: `3px solid ${th.color}`, padding: "1.5rem" }}>
                  <h3 style={{ color: th.color, fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{th.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: th.body }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.5rem" }}>Verse by Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 43 &mdash; 5 verses, the third stanza of the Psalms 42-43 poem</p>

            <div style={{ background: "rgba(107,79,187,0.06)", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + PURPLE + "\">Note:</strong> Psalm 43 is almost certainly the third stanza of the same poem as Psalm 42. It should be read as a continuation of that psalm&rsquo;s argument. The common refrain (42:5, 42:11, 43:5), the identical situation, and the absence of a title in Psalm 43 all point to a single original composition." }} />
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: PURPLE, heading: "Vindicate Me, O God", text: "The third stanza opens more decisively than the previous two: not with thirst or weeping, but with a direct legal appeal. &ldquo;Vindicate me, O God, and defend my cause against an ungodly people, from the deceitful and unjust man deliver me.&rdquo; The escalation is significant: by the third stanza, the psalmist has moved from yearning (42:1-4) through complaint (42:9-11) to active legal petition. This is the shape of persistent prayer: each cycle of lament deepens the engagement with God rather than dissolving into silence. Calvin: &ldquo;The psalmist does not give up; he intensifies. This is the faith that wears down heaven&rsquo;s gate with holy knocking.&rdquo; (cf. Luke 18:1-8, the parable of the persistent widow)." },
                { ref: "v. 2", color: ROSE, heading: "Why Have You Rejected Me?", text: "&ldquo;For you are the God in whom I take refuge; why have you rejected me? Why do I go about mourning because of the oppression of the enemy?&rdquo; This is the question of abandonment asked in every major lament &mdash; Psalm 22 (&ldquo;why have you forsaken me?&rdquo;), Job, Jeremiah (Lamentations 5:20-22). The question does not get an explicit answer in this psalm; what it gets is a direction (send your light and truth) and a destination (the altar of God). Sometimes the answer to &lsquo;Why?&rsquo; is not an explanation but a guide to where God is waiting. Kidner: &ldquo;The silence of God in affliction is not the absence of God; it is an invitation to go where God is &mdash; to the place of worship, of sacrifice, of encounter.&rdquo;" },
                { ref: "v. 3", color: GOLD, heading: "Send Your Light and Your Truth", text: "The central petition of the psalm: &ldquo;Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling.&rdquo; Light and truth function here as divine heralds or angels, sent ahead of the psalmist to illuminate the road home. In the NT, this is the work of the Holy Spirit (John 16:13: &ldquo;When the Spirit of truth comes, he will guide you into all the truth&rdquo;) and ultimately of Christ himself as the incarnate Word and Light of the world (John 8:12; 14:6). The request is therefore, in its deepest NT sense, a prayer for Christ and the Spirit to come." },
                { ref: "v. 4", color: TEAL, heading: "The Altar and Exceeding Joy", text: "&ldquo;Then I will go to the altar of God, to God my exceeding joy, and I will praise you with the lyre, O God, my God.&rdquo; The word &lsquo;then&rsquo; is crucial: this is conditional on divine guidance. Without light and truth to lead him, the psalmist cannot find his way to worship. But once God leads him there, the praise is exuberant: the altar, God as &lsquo;exceeding joy,&rsquo; and the lyre. Spurgeon: &ldquo;He does not arrive at the altar exhausted; he arrives singing. The journey was dark but the destination is glory. This is the gospel structure: the darkness of the cross gives way to the light of resurrection worship.&rdquo; The phrase &lsquo;O God, my God&rsquo; is an echo of Psalm 22:1 (&ldquo;My God, my God, why have you forsaken me?&rdquo;) but now reversed: it is the cry of joyful possession rather than anguished abandonment." },
                { ref: "v. 5", color: PURPLE, heading: "The Refrain: Third Time and Final", text: "&ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.&rdquo; The refrain appears for the third and final time, but its weight has changed. In 42:5 it was tentative; in 42:11 it was more assured; here in 43:5 it is nearly triumphant. The journey through three stanzas has not changed the psalmist&rsquo;s circumstances, but it has deepened his faith. Matthew Henry: &ldquo;The same words, repeated three times, do not mean the same thing each time. The third repetition is the voice of a man who has prayed long enough to believe what he is saying.&rdquo; This is the pedagogy of the psalms: they teach us to pray our way into faith." },
              ].map(vs => (
                <div key={vs.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `3px solid ${vs.color}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: vs.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{vs.ref}</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: TEXT }}>{vs.heading}</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.92rem" }} dangerouslySetInnerHTML={{ __html: vs.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Application &amp; Reflection</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                {
                  color: PURPLE,
                  icon: "&#9670;",
                  title: "Persisting Through the Cycles of Lament",
                  body: "The three-stanza structure of Psalms 42-43 teaches something important: faith is not usually a linear progression from darkness to light. It is cyclical, returning again and again to the same questions, the same grief, the same refrain. By the third cycle, the psalmist has not resolved his circumstances, but he has deepened his engagement with God. If you are in a season of recurring grief or doubt, do not be discouraged that you are asking the same questions again. Each cycle of honest lament, honestly brought to God, deepens the roots of faith. The third time you sing the refrain, you may believe it more than the first.",
                  prayer: "Lord, I am here again with the same grief, the same questions, the same doubt. I have not moved on; I have returned. But I return to you, not away from you. Hear me again. Lead me again. And let this third time through the darkness be one step closer to the altar. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Asking for God&rsquo;s Light and Truth",
                  body: "The prayer of verse 3 is extraordinarily practical: &ldquo;Send out your light and your truth; let them lead me.&rdquo; Before asking for circumstances to change, the psalmist asks for the right guides: divine illumination and divine faithfulness. This is the correct order of petition. In daily terms: before asking God to fix your situation, ask him for clarity about what is true and for his faithful presence to accompany you. The light and truth of God &mdash; given through Scripture, the Spirit, and community &mdash; are themselves the primary answer to most of our navigational questions.",
                  prayer: "Father, I cannot find my way in this darkness by my own reasoning. Send your light &mdash; clarity about what is true. Send your truth &mdash; your faithful presence that I can rely on. Let them lead me. I will follow where they go, even if the path is not what I expected. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Making Worship the Goal of Your Petition",
                  body: "Verse 4 reveals the destination of all this desperate prayer: the altar of God, with a lyre, singing praise. The psalmist does not pray to feel better, to have his enemies defeated, or to escape his circumstances. He prays to get back to worship. This is a corrective to much contemporary prayer, which treats God as a means to other ends (health, success, relationships). The psalmist&rsquo;s deepest desire is for God himself &mdash; &lsquo;God my exceeding joy&rsquo; &mdash; and for the freedom to worship him at the altar. Ask yourself: if God answered every prayer you are currently praying, what would you do? If the answer is not &lsquo;praise him,&rsquo; the psalm invites you to reorder your desires.",
                  prayer: "God of the altar, let worship be my goal, not just my method. I confess that I often pray to get things from you rather than to get to you. Reorder my desires. Make yourself my exceeding joy, so that when I arrive at your altar, it is the destination I most wanted all along. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "The Practice of Reasoning With Your Soul",
                  body: "Matthew Henry calls the refrain&rsquo;s self-interrogation &lsquo;reasoning with the soul,&rsquo; and it is one of the most underused spiritual disciplines in contemporary Christianity. Instead of either suppressing depression (&lsquo;I shouldn&rsquo;t feel this way&rsquo;) or surrendering to it (&lsquo;there is no hope&rsquo;), the psalmist addresses his own soul directly: &ldquo;Why are you cast down? Hope in God.&rdquo; This is what cognitive therapists call &lsquo;thought challenging,&rsquo; but its roots are far older: the soul is brought before the bar of what is known to be true about God. Try writing out the refrain in your own words this week, naming your specific depression and then speaking the specific truth about God that answers it.",
                  prayer: "Why are you cast down, O my soul? Why am I in turmoil within me? I will hope in God; for I shall again praise him, my salvation and my God. Lord, make this more than words. Let the truth of it settle into my bones. Amen."
                },
              ].map(app => (
                <div key={app.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ borderLeft: `4px solid ${app.color}`, padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.3rem", color: app.color }} dangerouslySetInnerHTML={{ __html: app.icon }} />
                      <h3 style={{ color: TEXT, fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{app.title}</h3>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: app.body }} />
                    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "1rem", borderLeft: `2px solid ${app.color}` }}>
                      <p style={{ color: MUTED, fontSize: "0.88rem", fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + app.color + "\">Prayer: </strong>" + app.prayer }} />
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(217,119,6,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>The Refrain to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 43:5 &mdash; the threefold refrain of Psalms 42-43</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
