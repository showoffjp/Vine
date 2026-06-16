"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

export default function Isaiah24Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "ACPnxCN0iKM", title: "Isaiah 24 - The Earth Under Judgment (Bible Project)" },
    { videoId: "h5oBbmcVmXY", title: "Isaiah Apocalypse - Chapters 24-27 Overview" },
    { videoId: "R8Gz4o7qSdQ", title: "Cosmic Judgment in Isaiah - Expository Sermon" },
    { videoId: "kN9mE2bP3aL", title: "The LORD Reigns on Mount Zion - Isaiah 24:21-23" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: "#07070F", color: "#F2F2F8", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero Section */}
      <section style={{ background: "linear-gradient(180deg, #0e0e1c 0%, #07070F 100%)", borderBottom: "1px solid #1E1E32", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#12121F", border: "1px solid #1E1E32", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>
            <span style={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bible Study Guide</span>
            <span style={{ color: "#1E1E32", fontSize: "0.75rem" }}>|</span>
            <span style={{ color: "#9898B3", fontSize: "0.75rem" }}>Old Testament &mdash; Isaiah</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
            Isaiah <span style={{ color: "#D97706" }}>24</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#9898B3", maxWidth: "640px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "The opening chapter of the &ldquo;Isaiah Apocalypse&rdquo; (chapters 24&ndash;27) &mdash; a sweeping vision of universal judgment on the whole earth and the ultimate reign of the LORD of hosts on Mount Zion." }}
          />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#D97706", fontWeight: 700, fontSize: "1.1rem" }}>23</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Verses</div>
            </div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: "1.1rem" }}>Isa. 24</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Reference</div>
            </div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#3a7d56", fontWeight: 700, fontSize: "1.1rem" }}>Apocalypse</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Genre</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #1E1E32", background: "#07070F", position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", gap: "0", overflowX: "auto", scrollbarWidth: "none" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #D97706" : "2px solid transparent",
                color: activeTab === tab.id ? "#F2F2F8" : "#9898B3",
                padding: "1rem 1.25rem",
                fontSize: "0.9rem",
                fontWeight: activeTab === tab.id ? 700 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s, border-color 0.15s",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.25rem", color: "#F2F2F8" }}>Overview of Isaiah 24</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 24 stands at the threshold of one of the most dramatic sections in all of prophetic literature: the &ldquo;Isaiah Apocalypse&rdquo; (chapters 24&ndash;27). Unlike earlier chapters that pronounced judgment on specific nations &mdash; Babylon, Moab, Tyre &mdash; chapter 24 widens the lens to cosmic proportions. The subject is no longer one empire or city; it is &ldquo;the earth&rdquo; itself, and &ldquo;all its inhabitants.&rdquo;" }}
            />
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter moves through three movements: a declaration of universal devastation (vv. 1&ndash;13), an interrupted doxology where survivors lift their voices in praise even amid ruins (vv. 14&ndash;16a), and Isaiah&rsquo;s anguished interruption followed by a second wave of judgment imagery culminating in the LORD&rsquo;s cosmic victory (vv. 16b&ndash;23)." }}
            />
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "The reason for judgment is theological: the earth&rsquo;s inhabitants have &ldquo;transgressed the laws, violated the statutes, broken the everlasting covenant&rdquo; (v. 5). Sin is not merely personal moral failure &mdash; it is cosmic rebellion that defiles creation itself. And yet the chapter ends not in despair but in doxology: &ldquo;The LORD of hosts reigns on Mount Zion and in Jerusalem&rdquo; (v. 23)." }}
            />

            {/* Key verses callout */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderLeft: "4px solid #D97706", borderRadius: "0 8px 8px 0", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Key Verse &mdash; Isaiah 24:5</div>
              <p style={{ color: "#F2F2F8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;The earth lies defiled under its inhabitants; for they have transgressed the laws, violated the statutes, broken the everlasting covenant.&rdquo;" }}
              />
            </div>

            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderLeft: "4px solid #3a7d56", borderRadius: "0 8px 8px 0", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#3a7d56", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Key Verse &mdash; Isaiah 24:23</div>
              <p style={{ color: "#F2F2F8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Then the moon will be confounded and the sun ashamed, for the LORD of hosts reigns on Mount Zion and in Jerusalem, and his glory will be before his elders.&rdquo;" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#6B4FBB", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9675;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>Universal Scope</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Judgment falls on &ldquo;the earth and all its inhabitants&rdquo; without distinction &mdash; priest and people, master and servant, buyer and seller alike." }}
                />
              </div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#D97706", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9650;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>Moral Root</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Desolation flows from moral cause: the breaking of the &ldquo;everlasting covenant.&rdquo; Creation suffers when humanity rebels against God&rsquo;s order." }}
                />
              </div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#3a7d56", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9733;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>Triumphant End</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The chapter closes not in doom but in doxology: the LORD of hosts reigns. Even the moon and sun bow before his glory on Mount Zion." }}
                />
              </div>
            </div>

            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1rem" }}>Context: The Isaiah Apocalypse (Chapters 24&ndash;27)</h3>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Scholars often call Isaiah 24&ndash;27 the &ldquo;Little Apocalypse&rdquo; or &ldquo;Isaiah Apocalypse&rdquo; because it shares features with later apocalyptic literature: cosmic scope, the punishment of heavenly powers, eschatological reversal, and a vision of final vindication. But Isaiah 24 is not escapism &mdash; it is a sober reckoning with the weight of human sin and the certainty of divine justice." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The section was likely composed against the backdrop of the Assyrian crisis and the seemingly invincible advance of pagan empires. Isaiah&rsquo;s answer: no earthly power is ultimate. The LORD of hosts holds history in his hands, and his reign on Mount Zion will be the final word." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Key Themes in Isaiah 24</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 24 weaves together several interlocking theological themes that recur throughout Scripture and reach their fullest expression in the New Testament." }}
            />

            {/* Theme 1 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#E11D4820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#E11D48", fontWeight: 800, fontSize: "1rem" }}>1</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Cosmic and Universal Judgment</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "From the very first verse, Isaiah establishes that this judgment is not local or national &mdash; it is planetary. &ldquo;Behold, the LORD will empty the earth and make it desolate&rdquo; (v. 1). The Hebrew word used for &ldquo;earth&rdquo; (&apos;eretz&apos;) can mean both &ldquo;land&rdquo; and &ldquo;earth,&rdquo; and in context the universal scope is unmistakable: the same fate befalls priest and people, master and servant, buyer and seller, borrower and lender." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "This leveling of all human distinctions in the face of divine judgment echoes the New Testament teaching that &ldquo;all have sinned and fall short of the glory of God&rdquo; (Romans 3:23). There is no exemption for social status, religious office, or economic position. God&rsquo;s justice is perfectly impartial." }}
              />
            </div>

            {/* Theme 2 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#D9770620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#D97706", fontWeight: 800, fontSize: "1rem" }}>2</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Sin Defiles Creation</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 24:5 is one of the most theologically dense verses in the Old Testament: &ldquo;The earth lies defiled under its inhabitants; for they have transgressed the laws, violated the statutes, broken the everlasting covenant.&rdquo; The Hebrew word for &ldquo;defiled&rdquo; (&apos;chanaf&apos;) is a ritual pollution term &mdash; the earth itself has been rendered unclean by the sin of its tenants." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "This connects to the Noahic covenant (&ldquo;everlasting covenant&rdquo;), the Mosaic covenant, and creation order. Paul draws on similar imagery in Romans 8:20&ndash;22 when he writes that creation was &ldquo;subjected to futility&rdquo; and is &ldquo;groaning&rdquo; under the weight of humanity&rsquo;s rebellion. Sin is never merely private &mdash; it has cosmic and ecological consequences." }}
              />
            </div>

            {/* Theme 3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#6B4FBB20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#6B4FBB", fontWeight: 800, fontSize: "1rem" }}>3</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The City of Chaos Laid Waste</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "In verses 7&ndash;13, Isaiah describes &ldquo;the city of chaos&rdquo; (&apos;qiryat tohu&apos;) as a broken, desolate place. This is likely a symbolic city representing human civilization built in opposition to God &mdash; a counterimage to the &ldquo;city of the great King&rdquo; (Psalm 48:2). Its destruction is described with haunting images: the vine mourns, wine sickens, the mirth of tambourines ceases, harps fall silent." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The loss of wine and song &mdash; symbols of communal joy &mdash; signals the collapse of human civilization&rsquo;s deepest goods when cut off from their Creator. The New Testament picks up this &ldquo;city of chaos&rdquo; imagery in Revelation&rsquo;s &ldquo;Babylon the Great&rdquo; (Rev. 17&ndash;18), which falls with equal finality." }}
              />
            </div>

            {/* Theme 4 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#0D948820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#0D9488", fontWeight: 800, fontSize: "1rem" }}>4</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Praise Erupts Amid the Ruins</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "One of the most striking features of Isaiah 24 is the unexpected eruption of praise in verses 14&ndash;16. Even as the earth is being emptied, &ldquo;they lift up their voices, they sing for joy; over the majesty of the LORD they shout from the west&rdquo; (v. 14). Survivors cry out from east and west: &ldquo;Glory to the Righteous One!&rdquo;" }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "But Isaiah himself interrupts with anguish: &ldquo;But I say, &lsquo;I waste away, I waste away. Woe is me! For the traitors have betrayed&rdquo; (v. 16). This tension &mdash; praise and lament held together &mdash; models the prophetic posture: clear-eyed about the horror of sin, yet unable to suppress the deeper reality of God&rsquo;s majesty. The church is called to the same tension." }}
              />
            </div>

            {/* Theme 5 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#3a7d5620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#3a7d56", fontWeight: 800, fontSize: "1rem" }}>5</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The LORD of Hosts Reigns</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s climactic declaration in verse 23 &mdash; &ldquo;the LORD of hosts reigns on Mount Zion and in Jerusalem, and his glory will be before his elders&rdquo; &mdash; is not an afterthought but the entire point. Every verse of judgment has been building to this: the cosmic clearing away of all rival powers so that God&rsquo;s undisputed rule is established." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Even &ldquo;the host of heaven in heaven&rdquo; and &ldquo;the kings of the earth on the earth&rdquo; (v. 21) are imprisoned and punished. Nothing in the created order &mdash; whether cosmic or political &mdash; can withstand the final assertion of God&rsquo;s kingship. This is the ground of Christian hope: not optimism about human progress, but confidence in the reigning Lord." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Verse by Verse: Isaiah 24</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of each section, tracking the movement from cosmic desolation to triumphant doxology." }}
            />

            {/* Section 1: vv.1-3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#D9770615", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#D97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 1&ndash;3</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The LORD Empties the Earth</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #D97706" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, the LORD will empty the earth and make it desolate, and he will twist its surface and scatter its inhabitants. And it shall be, as with the people, so with the priest; as with the servant, so with his master; as with the maid, so with her mistress; as with the buyer, so with the seller; as with the lender, so with the borrower; as with the creditor, so with the debtor. The earth shall be utterly empty and utterly plundered; for the LORD has spoken this word.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The Hebrew verb translated &ldquo;empties&rdquo; (&apos;boqeq&apos;) is dramatic &mdash; it pictures something turned inside out, like an upended jar. The verb &ldquo;twists its surface&rdquo; (&apos;avah&apos;) may picture the earth&rsquo;s very face being distorted. The six pairs of social contrasts (priest/people, master/servant, buyer/seller, lender/borrower, etc.) are a merism &mdash; a way of saying &ldquo;everyone, without exception.&rdquo;" }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The final phrase &mdash; &ldquo;for the LORD has spoken this word&rdquo; &mdash; grounds everything in divine authority. This is not Isaiah&rsquo;s speculation; it is the LORD&rsquo;s declared intention. The certainty of the judgment rests on the reliability of the one who speaks it." }}
                />
              </div>
            </div>

            {/* Section 2: vv.4-6 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#E11D4815", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#E11D48", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 4&ndash;6</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The Earth Defiled by the Everlasting Covenant</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #E11D48" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;The earth mourns and withers; the world languishes and withers; the highest people of the earth languish. The earth lies defiled under its inhabitants; for they have transgressed the laws, violated the statutes, broken the everlasting covenant. Therefore a curse devours the earth, and its inhabitants suffer for their guilt; therefore the inhabitants of the earth are scorched, and few men are left.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Here is the theological heart of the chapter. The earth is not destroyed by natural catastrophe or random misfortune &mdash; it &ldquo;lies defiled&rdquo; because of moral failure. The &ldquo;everlasting covenant&rdquo; is probably the Noahic covenant (Genesis 9:1&ndash;17), which God made with &ldquo;all flesh,&rdquo; establishing basic moral order for humanity. Humanity has shattered that agreement." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The word &ldquo;curse&rdquo; (&apos;alah&apos;) is covenant language &mdash; the penalty clause activated by covenant violation. In Deuteronomy 28, the blessings of covenant faithfulness are matched by curses for unfaithfulness. Isaiah is applying that structure to the whole earth and all humanity, not just Israel." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;few men are left&rdquo; introduces the remnant motif that recurs throughout Isaiah. Judgment is real and devastating, but it is not total annihilation. A remnant survives &mdash; and in chapter 27, that remnant becomes a flourishing vine." }}
                />
              </div>
            </div>

            {/* Section 3: vv.7-13 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#6B4FBB15", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#6B4FBB", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 7&ndash;13</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The City of Chaos Broken Down</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #6B4FBB" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;The wine mourns, the vine languishes, all the merry-hearted sigh. The mirth of the tambourines is stilled, the noise of the jubilant has ceased, the mirth of the lyre is stilled. No more do they drink wine with singing; strong drink is bitter to those who drink it. The wasted city is broken down; every house is shut up so that none can enter. There is an outcry in the streets for lack of wine; all joy has grown dark; the gladness of the earth is banished... For thus it shall be in the midst of the earth among the nations, as when an olive tree is beaten, as at the gleaning when the grape harvest is done.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Wine and music are ancient symbols of communal joy and the goodness of creation. Their silence signals civilizational collapse &mdash; not merely economic disruption but the death of human flourishing. The &ldquo;wasted city&rdquo; (sometimes translated &ldquo;city of chaos&rdquo;) is contrasted with the &ldquo;strong city&rdquo; of chapters 25&ndash;26. This is Babylon-as-archetype: human civilization organized in defiance of God." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The gleaning image of verse 13 is sobering: after harvest, only scattered fruit remains. The abundance and vitality of the earth are reduced to remnants. And yet &mdash; gleaning is also the image of mercy. Ruth gleaned in Boaz&rsquo;s fields. The remnant that remains is not abandoned but preserved by providence." }}
                />
              </div>
            </div>

            {/* Section 4: vv.14-16 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#0D948815", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#0D9488", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 14&ndash;16</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>Song and Sorrow: Praise Interrupted</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #0D9488" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;They lift up their voices, they sing for joy; over the majesty of the LORD they shout from the west. Therefore in the east give glory to the LORD; in the coastlands of the sea, give glory to the name of the LORD, the God of Israel. From the ends of the earth we hear songs of praise, of glory to the Righteous One. But I say, &lsquo;I waste away, I waste away. Woe is me! For the traitors have betrayed, with betrayal the traitors have betrayed.&rsquo;&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "This is one of the most emotionally complex moments in all of Isaiah. Survivors &mdash; from the farthest coasts, from east and west &mdash; spontaneously break into doxology: &ldquo;Glory to the Righteous One!&rdquo; The title &ldquo;Righteous One&rdquo; (&apos;Tsaddiq&apos;) is significant &mdash; God&rsquo;s justice is seen not as cruelty but as righteousness deserving of praise." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "But Isaiah himself cannot join the chorus &mdash; not yet. He sees the betrayal and treachery still at work. His grief is not faithlessness; it is prophetic honesty. He will not rush past the horror of sin to celebrate too quickly. The Psalms model this same dual movement: lament and praise held in the same breath." }}
                />
              </div>
            </div>

            {/* Section 5: vv.17-20 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#E11D4815", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#E11D48", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 17&ndash;20</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>Terror, Pit, and Snare</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #E11D48" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Terror and the pit and the snare are upon you, O inhabitant of the earth! He who flees at the sound of the terror shall fall into the pit, and he who climbs out of the pit shall be caught in the snare. For the windows of heaven are opened, and the foundations of the earth tremble. The earth is utterly broken, the earth is split apart, the earth is violently shaken. The earth staggers like a drunken man; it sways like a hut; its transgression lies heavy upon it, and it falls, and will not rise again.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The triple sequence &mdash; terror, pit, snare &mdash; echoes Amos 5:19 (&ldquo;as if a man fled from a lion and a bear met him&rdquo;) and Jeremiah 48:43&ndash;44. It captures the inescapability of divine judgment: evasion of one danger leads directly to another. There is nowhere to run." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The image of the earth staggering &ldquo;like a drunken man&rdquo; and swaying &ldquo;like a hut&rdquo; is extraordinarily powerful. Humanity&rsquo;s rebellion has been so comprehensive that even the physical structure of the created order cannot stand. The final line is ominous: &ldquo;it falls, and will not rise again.&rdquo; This is not a temporary setback but a final collapse of the old order." }}
                />
              </div>
            </div>

            {/* Section 6: vv.21-23 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#3a7d5615", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#3a7d56", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 21&ndash;23</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The LORD Reigns on Mount Zion</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #3a7d56" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;On that day the LORD will punish the host of heaven, in heaven, and the kings of the earth, on the earth. They will be gathered together as prisoners in a pit; they will be shut up in a prison, and after many days they will be punished. Then the moon will be confounded and the sun ashamed, for the LORD of hosts reigns on Mount Zion and in Jerusalem, and his glory will be before his elders.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;host of heaven&rdquo; refers to the spiritual powers behind earthly kingdoms &mdash; the divine council corrupted, the &ldquo;rulers, authorities, cosmic powers over this present darkness&rdquo; of Ephesians 6:12. Both heavenly and earthly powers are gathered, imprisoned, and finally punished. No power &mdash; angelic or political &mdash; escapes the accounting." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The conclusion is magnificent: when the LORD reigns on Mount Zion, even the moon and sun are &ldquo;confounded&rdquo; and &ldquo;ashamed&rdquo; &mdash; outshone by his glory. The ancient world worshipped sun and moon as deities; Isaiah says they will blush at the sight of Israel&rsquo;s God. His glory before his elders anticipates the New Jerusalem (Revelation 21:23), where &ldquo;the city has no need of sun or moon to shine on it, for the glory of God gives it light.&rdquo;" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Applying Isaiah 24 Today</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 24 is not just ancient history &mdash; it speaks directly to how Christians understand sin, creation, judgment, and hope in the present age." }}
            />

            {/* App 1 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#E11D4820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#9651;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Take Sin Seriously as Cosmic Rebellion</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Modern culture has largely privatized sin &mdash; treating it as a personal preference violation at worst. Isaiah 24 refuses that reduction. Sin &ldquo;defiles&rdquo; the earth itself; it breaks the &ldquo;everlasting covenant&rdquo; that structures creation; it calls down cosmic judgment. The weight of sin is proportional to the greatness of the one offended." }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "For the Christian, this heightens the wonder of the atonement. If sin is this serious &mdash; cosmic, covenantal, creation-defiling &mdash; then the cross is correspondingly cosmic in its scope. Paul can say that through Christ, God was &ldquo;reconciling to himself all things, whether on earth or in heaven&rdquo; (Colossians 1:20) because that is exactly how large the problem was." }}
                  />
                </div>
              </div>
            </div>

            {/* App 2 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#D9770620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#9733;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Ground Your Hope in God&rsquo;s Reign, Not Human Progress</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Isaiah 24 offers no hope based on improved social structures, better political leadership, or advancing civilization. The &ldquo;city of chaos&rdquo; falls. Kings are imprisoned. Even the host of heaven is judged. The only firm ground is the reign of &ldquo;the LORD of hosts on Mount Zion.&rdquo;" }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Christians are not pessimists &mdash; we have solid grounds for hope. But our hope is eschatological and theocentric: it is rooted in what God will do, not in what humanity can achieve. This liberates us from anxiety when political systems fail, empires fall, or institutions collapse. &ldquo;The LORD of hosts reigns&rdquo; is enough." }}
                  />
                </div>
              </div>
            </div>

            {/* App 3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#0D948820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#9835;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Learn to Sing in the Ruins</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "The remnant of Isaiah 24:14&ndash;16 sings &ldquo;for joy&rdquo; and &ldquo;shout[s] from the west&rdquo; over the majesty of the LORD even as the earth is being emptied. This is not denial &mdash; it is faith that perceives God&rsquo;s glory through the wreckage. It is the same faith that enabled Paul and Silas to sing hymns in prison at midnight (Acts 16:25)." }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Isaiah himself could not yet sing &mdash; his grief was too raw. That honesty is instructive. We need not rush past lament to forced praise. Both the remnant&rsquo;s song and Isaiah&rsquo;s anguish are in the text together. The Christian life holds them in tension: sorrow that is real, and praise that is deeper than sorrow." }}
                  />
                </div>
              </div>
            </div>

            {/* App 4 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#3a7d5620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#8962;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Live as Citizens of the Unshakeable Kingdom</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Hebrews 12:26&ndash;28 applies this exact imagery of cosmic shaking to Christian life: &ldquo;Yet once more I will shake not only the earth but also the heavens&rdquo; &mdash; and then draws the application: &ldquo;Therefore let us be grateful for receiving a kingdom that cannot be shaken, and thus let us offer to God acceptable worship, with reverence and awe.&rdquo;" }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Isaiah 24 is the backstory to that exhortation. Everything shakeable will be shaken. Only the kingdom of God endures. We are called to build our lives, our values, our allegiances on the one foundation that cannot fall &mdash; the reign of the LORD of hosts. This is not withdrawal from the world but discernment about where ultimate loyalty belongs." }}
                  />
                </div>
              </div>
            </div>

            {/* Discussion questions */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 1rem" }}>Discussion Questions</h3>
              <ol style={{ color: "#9898B3", lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem", fontSize: "0.95rem" }}>
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "How does Isaiah 24 challenge the common idea that sin is primarily a private or personal matter?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "What is the &ldquo;everlasting covenant&rdquo; that has been broken (v. 5)? How does understanding covenant help us understand the nature of sin?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "Isaiah grieves while survivors sing (vv. 14&ndash;16). What does this tension teach us about lament and praise? Have you experienced both at the same time?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "The chapter ends with the LORD reigning on Mount Zion (v. 23). How does this eschatological hope shape how you live now, when things seem to be falling apart?" }}
                />
                <li style={{ marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "In what areas of your life are you tempted to build your security on things that can be &ldquo;shaken&rdquo;? What would it look like to anchor yourself instead in the reign of God?" }}
                />
              </ol>
            </div>

            <div style={{ background: "linear-gradient(135deg, #3a7d5618 0%, #D9770610 100%)", border: "1px solid #3a7d5640", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ color: "#3a7d56", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>A Prayer from Isaiah 24</div>
              <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Lord of hosts, you reign on Mount Zion and in Jerusalem, and your glory will be before your elders. We confess that we have too often treated sin lightly &mdash; as if it were merely inconvenient rather than cosmic rebellion against you. Forgive us. Grant us the faith of the remnant who sing for joy over your majesty even amid ruin. When the earth staggers and the city of chaos falls, let us be found standing on the only ground that does not shake &mdash; your eternal, uncontested reign. Amen." }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Video Section */}
      <section style={{ background: "#07070F", borderTop: "1px solid #1E1E32", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F2F2F8", marginBottom: "0.5rem" }}>Video Resources: Isaiah 24</h2>
            <p style={{ color: "#9898B3", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Sermons, overviews, and teachings on Isaiah 24 and the Isaiah Apocalypse." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.5rem" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "0.875rem 1rem" }}>
                  <div style={{ color: "#F2F2F8", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer callout */}
      <section style={{ background: "#12121F", borderTop: "1px solid #1E1E32", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Continue Studying Isaiah</h3>
          <p style={{ color: "#9898B3", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.25rem" }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 24 is the opening movement of the great &ldquo;Isaiah Apocalypse.&rdquo; Continue into chapters 25&ndash;27 to see how the mourning of chapter 24 resolves into the banquet on Mount Zion (25:6&ndash;9), the resurrection of the dead (26:19), and the flourishing vine of restored Israel (27:2&ndash;6)." }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Isaiah 24&ndash;27</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Apocalyptic Literature</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Covenant Theology</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Eschatology</span>
          </div>
        </div>
      </section>

    </div>
  );
}
