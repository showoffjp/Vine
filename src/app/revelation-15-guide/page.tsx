"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { id: "sGPT7LU2t1Y", title: "Revelation 15 - Song of Moses and the Lamb" },
  { id: "kQKBFGnGylc", title: "Revelation 15 Explained - Seven Last Plagues" },
  { id: "2rH5vGfBnDk", title: "Sea of Glass and Fire - Revelation 15 Study" },
  { id: "9Kl1tE6hDPw", title: "The Temple in Heaven Opens - Revelation 15" },
];

export default function Revelation15GuidePage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", backgroundColor: "#07070F", color: "#F2F2F8", fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #12121F 0%, #1a0a2e 100%)", borderBottom: "1px solid #1E1E32", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", backgroundColor: "#6B4FBB22", border: "1px solid #6B4FBB66", borderRadius: 999, padding: "0.35rem 1.1rem", fontSize: "0.78rem", color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Revelation 15</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#F2F2F8", lineHeight: 1.2, marginBottom: "1rem" }}>
            The Song of Moses and the Seven Bowl Angels
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#9898B3", maxWidth: 680, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            Revelation 15 presents the victorious saints singing praise on the sea of glass,
            the opening of the heavenly temple, and seven angels receiving the golden bowls
            of God&apos;s completed wrath.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {["8 Verses", "Song of Moses", "Seven Last Plagues", "Heavenly Temple"].map(tag => (
              <span key={tag} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 999, padding: "0.3rem 0.9rem", fontSize: "0.8rem", color: "#9898B3" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: "1px solid #1E1E32", backgroundColor: "#0d0d1a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", fontSize: "0.92rem", fontWeight: tab === i ? 700 : 400, color: tab === i ? "#a78bfa" : "#9898B3", background: "none", border: "none", borderBottom: tab === i ? "2px solid #6B4FBB" : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* -- TAB 0: OVERVIEW -- */}
        {tab === 0 && (
          <div>
            <div style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#a78bfa", marginBottom: "1rem" }}>Chapter Overview</h2>
              <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Revelation 15 is the shortest chapter in the Book of Revelation, comprising only eight verses, yet it carries immense theological weight. It serves as a transitional bridge between the trumpet judgments and the final bowl judgments, providing a heavenly perspective before the climactic outpouring of God&apos;s completed wrath upon the earth." }} />
              <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a breathtaking vision: John sees &quot;another sign in heaven, great and marvelous&quot; &mdash; seven angels holding seven plagues that will be the last expression of God&apos;s holy anger. This is the final series of divine judgments, and heaven itself acknowledges their completeness and justice." }} />
              <p style={{ color: "#9898B3", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Before the plagues are released, however, heaven pauses for worship. Those who conquered the beast stand on a sea of glass mingled with fire, holding harps of God and singing the Song of Moses and the Lamb &mdash; an ancient hymn of divine victory now repurposed for the ultimate deliverance. The chapter ends with the heavenly temple opened and filled with divine glory, and no one able to enter until the seven plagues are completed." }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                { color: "#6B4FBB", label: "The Great and Marvelous Sign", body: "Seven angels appear holding the seven last plagues, signifying the completion of God&apos;s wrath on earth." },
                { color: "#3a7d56", label: "Victorious Saints on the Sea of Glass", body: "Overcomers who refused the beast&apos;s mark stand victorious, harps in hand, worshipping before the throne." },
                { color: "#D97706", label: "The Song of Moses and the Lamb", body: "The redeemed sing a song combining the Exodus victory hymn with new covenant praise for Christ the Lamb." },
                { color: "#0D9488", label: "The Temple Opened", body: "The tabernacle of testimony in heaven is opened, and the seven angels emerge clothed in radiant linen to receive the golden bowls." },
              ].map(card => (
                <div key={card.label} style={{ backgroundColor: "#12121F", border: `1px solid ${card.color}44`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ width: 4, height: 36, backgroundColor: card.color, borderRadius: 2, marginBottom: "0.75rem" }} />
                  <h3 style={{ fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem", fontSize: "1rem" }}>{card.label}</h3>
                  <p style={{ color: "#9898B3", fontSize: "0.9rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: card.body }} />
                </div>
              ))}
            </div>

            {/* Videos */}
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1.25rem" }}>Video Studies</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {videoItems.map(v => <VideoEmbed key={v.id} videoId={v.id} title={v.title} />)}
            </div>
          </div>
        )}

        {/* -- TAB 1: KEY THEMES -- */}
        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1.5rem" }}>Key Themes in Revelation 15</h2>

            {[
              {
                id: "theme1",
                color: "#6B4FBB",
                title: "The Holiness and Justice of God",
                body: "Revelation 15 is saturated with the theme of divine holiness. The song of the overcomers declares &quot;just and true are your ways, King of the nations.&quot; The plagues are not acts of arbitrary anger but the perfectly calibrated response of a holy God to persistent human rebellion. The smoke filling the temple (v.8) mirrors Old Testament theophanies where God&apos;s glory was so intense that even the priests could not minister. God&apos;s holiness is both awe-inspiring and terrifying &mdash; and Revelation 15 holds both realities simultaneously. The seven angels are clothed in pure white linen, a symbol of holiness, and girded with golden sashes, the garb of heavenly priests. The message is unmistakable: what is about to happen is not divine rage without reason, but holy justice carried out by holy servants under the direction of a holy God."
              },
              {
                id: "theme2",
                color: "#3a7d56",
                title: "Worship Before Judgment",
                body: "One of the most striking features of Revelation 15 is that worship precedes the release of God&apos;s final wrath. Before a single bowl is poured out, heaven erupts in song. The overcomers stand on the sea of glass and sing with harps. This pattern is theologically significant: it reveals that worship is not contingent on circumstances. These saints have come through the great tribulation, conquered the beast, and now stand before God. Their response is not complaint but adoration. They magnify God&apos;s works as great and marvelous, his ways as just and true. True worship acknowledges who God is even in the midst of the most intense cosmic conflict. The church is called to this same posture: to worship God not only when life is comfortable but especially when the world seems most threatening and chaotic."
              },
              {
                id: "theme3",
                color: "#D97706",
                title: "The Song of Moses and the New Exodus",
                body: "The Song of Moses originally appears in Exodus 15, sung by the Israelites after crossing the Red Sea and watching Pharaoh&apos;s army be destroyed. It is a triumphant hymn celebrating God&apos;s victory over the enemies of his people. By placing this same song on the lips of the tribulation overcomers, Revelation draws a deliberate typological connection: the final deliverance of God&apos;s people mirrors and surpasses the Exodus. Just as Moses and Israel were delivered from Egypt through water (the Red Sea), so the new covenant people are delivered from the final Babylon and beast through the completed work of Christ the Lamb. The addition of &quot;the song of the Lamb&quot; signals that the full meaning of Moses&apos; deliverance is now revealed in Jesus &mdash; the ultimate Passover Lamb who redeems people from every nation, tribe, and tongue."
              },
              {
                id: "theme4",
                color: "#0D9488",
                title: "The Completion of God's Redemptive Plan",
                body: "The phrase &quot;in them the wrath of God is finished&quot; (v.1) is one of the most theologically loaded statements in the book. The Greek word translated &quot;finished&quot; (etelesthe) carries the sense of completion or fulfillment. God&apos;s wrath against sin is not open-ended; it has a telos, a goal, a conclusion. The seven bowl judgments represent the final expression of divine justice before the return of Christ and the establishment of his eternal kingdom. This perspective guards against two errors: (1) that God&apos;s patience is infinite and sin goes unchecked forever, and (2) that God&apos;s judgment is arbitrary and without limit. The bowls of wrath will be poured out completely and then it will be done &mdash; a reality that should both warn the unrepentant and comfort the faithful."
              },
              {
                id: "theme5",
                color: "#E11D48",
                title: "The Heavenly Temple as Command Center",
                body: "The opening of the temple of the tabernacle of testimony in heaven (v.5) is a dramatic moment. This heavenly sanctuary, of which the earthly tabernacle was only a copy (Hebrews 8:5), is the true dwelling place of God and the seat of his governance over history. The bowls emerge from this temple, carried by holy angels &mdash; underscoring that what happens in Revelation is not cosmic accident but divinely orchestrated history moving toward its ordained end. The fact that no one could enter the temple until the seven plagues were completed (v.8) suggests the absolute gravity of this final phase of judgment. There is a certain aloneness to this moment &mdash; God acts in sovereign completion, and the moment demands reverent silence from all creatures."
              },
            ].map(item => (
              <div key={item.id} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 700, color: item.color, fontSize: "1.05rem" }}>{item.title}</span>
                  <span style={{ color: "#9898B3", fontSize: "1.2rem", fontWeight: 700 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: "#9898B3", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* -- TAB 2: VERSE BY VERSE -- */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem" }}>Verse by Verse Commentary</h2>
            <p style={{ color: "#9898B3", marginBottom: "2rem", fontSize: "0.95rem" }}>A detailed examination of all eight verses of Revelation 15.</p>

            {[
              {
                ref: "Revelation 15:1",
                text: "\"Then I saw another sign in heaven, great and marvelous: seven angels with seven plagues, which are the last, for with them the wrath of God is finished.\"",
                commentary: "John identifies this as a &quot;sign&quot; &mdash; a symbolic vision pointing to spiritual reality. The sign is both &quot;great&quot; (megas) and &quot;marvelous&quot; (thaumaston), echoing the same words the overcomers will use in verse 3 to describe God&apos;s works. Seven angels carrying seven plagues appear, and the critical phrase &quot;which are the last&quot; indicates these are the final round of divine judgments. The wrath of God is being &quot;finished&quot; or &quot;completed&quot; &mdash; not ended prematurely, but brought to its full and ordained conclusion. This verse functions as a preview or title card for the entire seven-bowl sequence that follows in chapter 16."
              },
              {
                ref: "Revelation 15:2",
                text: "\"And I saw something like a sea of glass mixed with fire, and those who had been victorious over the beast and his image and the number of his name, standing on the sea of glass, holding harps of God.\"",
                commentary: "The sea of glass first appeared before God&apos;s throne in Revelation 4:6, described there as &quot;clear as crystal.&quot; Here it is mixed with fire, perhaps symbolizing the trials through which the victors have passed &mdash; fire representing both the refining and the judgment they survived. The overcomers are those who refused to worship the beast, accept his image, or receive his number (666, described in Revelation 13). They stand (not kneel in defeat) on this luminous expanse, holding harps. In the Old Testament, harps were the instrument of Levitical worship and prophetic praise (1 Chronicles 25:1). Their posture and instrument speak of confident, priestly worship before God."
              },
              {
                ref: "Revelation 15:3",
                text: "\"And they sang the song of Moses, the bond-servant of God, and the song of the Lamb, saying: &#39;Great and marvelous are Your works, Lord God Almighty; righteous and true are Your ways, King of the nations!&#39;\"",
                commentary: "The song they sing is identified as belonging both to Moses and to the Lamb, connecting the Exodus deliverance (Exodus 15) with the final eschatological deliverance through Christ. The content of the song focuses entirely on God &mdash; his works, his ways, his nature. &quot;Great and marvelous are Your works&quot; echoes Psalm 111:2 and 139:14. &quot;Lord God Almighty&quot; (Pantokrator in Greek) is a title used repeatedly in Revelation to emphasize God&apos;s sovereignty over all creation. &quot;Righteous and true are Your ways&quot; is an affirmation that God&apos;s dealings in history, including the coming bowl judgments, are morally perfect. He is called &quot;King of the nations&quot; (some manuscripts read &quot;King of the ages&quot;), affirming his rule over all peoples and all time."
              },
              {
                ref: "Revelation 15:4",
                text: "\"Who will not fear You, Lord, and glorify Your name? For You alone are holy; For all the nations will come and worship before You, For Your righteous acts have been revealed.\"",
                commentary: "This verse is a series of rhetorical questions and declarations. &quot;Who will not fear You?&quot; expects the answer: everyone must ultimately fear God. &quot;You alone are holy&quot; sets God apart from all creatures &mdash; his holiness is unique and unshared. The prediction that &quot;all the nations will come and worship before You&quot; echoes Isaiah 66:23 and Psalm 86:9, pointing toward the eschatological gathering of the nations before God&apos;s throne. &quot;Your righteous acts have been revealed&quot; (or &quot;your righteous judgments have been made manifest&quot;) indicates that the bowl judgments are not hidden cruelty but transparent, visible justice that even the nations will ultimately acknowledge. This verse connects judgment and worship: it is precisely because God judges righteously that he is worthy of worship."
              },
              {
                ref: "Revelation 15:5",
                text: "\"After these things I looked, and the temple of the tabernacle of testimony in heaven was opened.\"",
                commentary: "The transition from worship to action is marked by the opening of the heavenly temple. The phrase &quot;tabernacle of testimony&quot; (skene tou martyriou) is specifically the term used in the Greek Old Testament (Septuagint) for the wilderness tabernacle &mdash; the portable sanctuary Moses constructed according to the heavenly pattern shown to him on Mount Sinai (Exodus 25:9, 40). The &quot;testimony&quot; refers to the Law of God (the Ten Commandments), which was kept in the Ark of the Covenant within the tabernacle. By opening this heavenly original, John signals that the judgments about to unfold are rooted in God&apos;s covenant law &mdash; they are judicial responses to violations of God&apos;s holy covenant with humanity."
              },
              {
                ref: "Revelation 15:6",
                text: "\"And the seven angels who had the seven plagues came out of the temple, clothed in linen, clean and bright, and girded around their chests with golden sashes.\"",
                commentary: "The seven angels emerge from within the temple, establishing their divine commission. Their clothing is significant: &quot;clean and bright linen&quot; (pure white) represents holiness and the righteousness of God (cf. Revelation 19:8 where the fine linen of the bride represents the righteous deeds of the saints). The golden sashes (zontas chrysas) around their chests match the description of the glorified Christ in Revelation 1:13. This priestly-royal attire marks these angels as neither capricious nor autonomous &mdash; they are holy servants of a holy King, executing holy judgment. Their appearance from within the opened temple confirms that what they carry comes directly from God&apos;s presence."
              },
              {
                ref: "Revelation 15:7",
                text: "\"Then one of the four living creatures gave to the seven angels seven golden bowls full of the wrath of God, who lives forever and ever.\"",
                commentary: "The four living creatures (introduced in Revelation 4:6-8 as the cherubim-like beings surrounding God&apos;s throne) play an active role in the administration of divine judgment here. One of them distributes the bowls. The &quot;golden bowls&quot; (phialas chrysas) are shallow, wide vessels &mdash; like libation bowls used in temple worship &mdash; but here filled with divine wrath rather than offerings. The fullness of each bowl is significant: the wrath is complete, not partial or provisional. God is described as the one &quot;who lives forever and ever&quot; (ho zon eis tous aionas ton aionon) &mdash; the eternal, living God whose judgments have ultimate permanence and whose authority has no expiration date."
              },
              {
                ref: "Revelation 15:8",
                text: "\"And the temple was filled with smoke from the glory of God and from His power; and no one was able to enter the temple until the seven plagues of the seven angels were finished.\"",
                commentary: "The chapter closes with the temple being filled with smoke from God&apos;s glory and power. This mirrors several Old Testament theophanies: when the tabernacle was completed in Exodus 40:34-35, God&apos;s glory filled it so completely that Moses could not enter. When Solomon dedicated the temple in 1 Kings 8:10-11, the same phenomenon occurred. Isaiah saw a similar vision in Isaiah 6:4. These precedents establish that what John sees is the fullness of God&apos;s manifest presence. The fact that no one can enter until the seven plagues are completed signifies that this is a closed, solemn moment of divine action &mdash; no intercession, no interruption, no mediation. God&apos;s holy justice runs its complete course, and creation itself stands in reverent silence."
              },
            ].map((v, idx) => (
              <div key={v.ref} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "1.5rem", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
                  <span style={{ backgroundColor: "#6B4FBB22", border: "1px solid #6B4FBB55", borderRadius: 6, padding: "0.2rem 0.6rem", fontSize: "0.8rem", color: "#a78bfa", whiteSpace: "nowrap" }}>{v.ref}</span>
                </div>
                <p style={{ color: "#D97706", fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v.text }} />
                <p style={{ color: "#9898B3", lineHeight: 1.8, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v.commentary }} />
              </div>
            ))}
          </div>
        )}

        {/* -- TAB 3: APPLICATION -- */}
        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem" }}>Applying Revelation 15 Today</h2>
            <p style={{ color: "#9898B3", marginBottom: "2rem", lineHeight: 1.7 }}>Though Revelation 15 speaks of future cosmic events, its truths call believers to concrete present-day responses.</p>

            {[
              {
                num: "01",
                color: "#6B4FBB",
                title: "Worship God in Every Season",
                body: "The overcomers in Revelation 15 did not wait for comfortable circumstances to worship &mdash; they sang from a sea of glass mixed with fire, having come through tribulation. This challenges believers today to cultivate worship that transcends circumstances. Whether life is calm or chaotic, whether prayers seem answered or heaven seems silent, the character of God remains constant: &quot;Great and marvelous are Your works, Lord God Almighty.&quot; Make worship a discipline of the will, not merely a response to good feelings. Bring your harps to the hard places."
              },
              {
                num: "02",
                color: "#3a7d56",
                title: "Stand Firm Against Compromise",
                body: "The victors in Revelation 15 are specifically those who &quot;had been victorious over the beast and his image and the number of his name.&quot; In their historical context, this meant refusing to compromise their faith for social acceptance, economic access, or physical safety. Every generation faces its own version of the beast&apos;s demands &mdash; pressures to conform, to silence faith, to prioritize comfort over conviction. Revelation 15 calls believers to count the cost and remain faithful. The promise is that those who endure will stand on the sea of glass before the throne of God, not those who merely survived by accommodating every cultural pressure."
              },
              {
                num: "03",
                color: "#D97706",
                title: "Trust the Justice of God",
                body: "The song of Moses and the Lamb affirms that God&apos;s ways are &quot;righteous and true.&quot; For believers living in a world where injustice seems to go unchecked &mdash; where the innocent suffer and the wicked prosper &mdash; Revelation 15 is a declaration that history has a moral arc. God&apos;s wrath is being &quot;finished&quot;; his judgments are being revealed. This does not make believers passive, but it does liberate them from despair. Justice belongs to God, and he will complete what he has begun. The bowls are being prepared. Entrust the final verdict to the King of the nations and press on in faithful obedience today."
              },
              {
                num: "04",
                color: "#0D9488",
                title: "Revere the Holiness of God",
                body: "Revelation 15:8 describes a moment so charged with divine glory that no one could enter the temple. This kind of encounter with the holy God is rarely experienced in casual Christianity. The chapter calls believers back to a sense of reverence &mdash; an awe of God that shapes how we pray, how we speak of him, how we approach worship. &quot;You alone are holy&quot; is not merely a lyric to sing but a truth to live by. Let the holiness of God recalibrate the casual and the careless in your spiritual life. Approach the God who fills temples with his glory with humble, prepared hearts."
              },
              {
                num: "05",
                color: "#E11D48",
                title: "Proclaim the Fear of the Lord to the Nations",
                body: "The rhetorical question &quot;Who will not fear You, Lord, and glorify Your name?&quot; and the prediction that &quot;all the nations will come and worship before You&quot; are both missional statements. The fear of the Lord is not merely a personal virtue but a truth the whole world needs to encounter. Revelation 15 fuels the church&apos;s evangelistic mission: we are not simply inviting people to a pleasant spiritual experience but calling them to bow before the King of the nations before whom every knee will one day bow (Philippians 2:10). Proclaim the righteousness of God, the finality of judgment, and the mercy available now through the Lamb."
              },
              {
                num: "06",
                color: "#6B4FBB",
                title: "Connect Old and New Testament Promises",
                body: "The Song of Moses and the Lamb is a powerful illustration of biblical continuity. What God began in the Exodus &mdash; the deliverance of his people from slavery through miraculous power &mdash; he completes in Christ. Every promise of the Old Testament finds its &quot;Yes&quot; in Jesus (2 Corinthians 1:20). Believers are encouraged to read the whole Bible as one unified story of redemption. The overcomers in Revelation 15 draw on Moses&apos; ancient words to describe their new covenant victory. In the same way, saturate your faith with both Testaments, seeing in each the unfolding character of the one God who delivers, judges, and reigns forever."
              },
            ].map(app => (
              <div key={app.num} style={{ backgroundColor: "#12121F", border: `1px solid ${app.color}33`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.25rem", display: "flex", gap: "1.25rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: app.color, opacity: 0.4, minWidth: 48, lineHeight: 1 }}>{app.num}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "#F2F2F8", fontSize: "1.05rem", marginBottom: "0.6rem" }}>{app.title}</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: app.body }} />
                </div>
              </div>
            ))}

            {/* Closing prayer card */}
            <div style={{ backgroundColor: "#12121F", border: "1px solid #6B4FBB44", borderRadius: 12, padding: "2rem", marginTop: "2rem" }}>
              <h3 style={{ fontWeight: 700, color: "#a78bfa", fontSize: "1.1rem", marginBottom: "1rem" }}>A Prayer from Revelation 15</h3>
              <p style={{ color: "#9898B3", lineHeight: 1.9, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "Lord God Almighty, great and marvelous are Your works. Righteous and true are all Your ways. You alone are holy, and one day every nation will bow before You in worship. Give us grace to worship You now &mdash; in seasons of fire and in seasons of peace. Strengthen us to stand firm against every temptation to compromise our faith. Help us to trust Your justice even when we cannot see it at work. And grant us boldness to call the nations to fear You and glorify Your name, before the bowls are poured out and the hour of grace is past. In the name of the Lamb who was slain and who lives forever, amen." }} />
            </div>

            {/* Key verse highlight */}
            <div style={{ backgroundColor: "#6B4FBB11", border: "1px solid #6B4FBB44", borderRadius: 12, padding: "2rem", marginTop: "1.5rem", textAlign: "center" }}>
              <p style={{ color: "#a78bfa", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: "&#39;Great and marvelous are Your works, Lord God Almighty; righteous and true are Your ways, King of the nations!&#39;" }} />
              <p style={{ color: "#9898B3", fontSize: "0.85rem" }}>Revelation 15:3</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
