"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", BLUE = "#3B82F6", RED = "#EF4444";

type Tab = "overview" | "patriarchs" | "leaders" | "prophets" | "apostles" | "journal" | "videos";

type Man = {
  id: string;
  name: string;
  era: string;
  testament: "OT" | "NT";
  category: "patriarch" | "leader" | "prophet" | "apostle";
  summary: string;
  meaning: string;
  keyVerse: string;
  bio: string;
  strength: string;
  struggle: string;
  legacy: string;
  lessonForToday: string;
};

const MEN_DATA: Man[] = [
  // PATRIARCHS
  {
    id: "abraham",
    name: "Abraham",
    era: "Genesis 12–25",
    testament: "OT",
    category: "patriarch",
    summary: "Father of Many Nations — called out of Ur into the unknown",
    meaning: "Father of Many Nations",
    keyVerse: "Genesis 15:6",
    bio: "Abraham was born Abram in Ur of the Chaldeans, a prosperous city in Mesopotamia. At seventy-five, God called him to leave everything — his country, his people, his father's household — on the strength of a promise he could not yet see fulfilled. His journey to Canaan launched the covenant story that would run through all of Scripture. The defining moment of Abraham's life was the near-sacrifice of his son Isaac on Mount Moriah: a test that exposed the depth of his trust in God's faithfulness, and a shadow that pointed forward centuries later to another Father and another Son on another hill.",
    strength: "Extraordinary faith that treated God's word as more real than his circumstances, willing to leave everything known for everything promised.",
    struggle: "Fear that twice led him to deny Sarah was his wife, and impatience that produced Ishmael through Hagar before the promise came through Isaac.",
    legacy: "Father of the Jewish nation, ancestor of Jesus, and the theological archetype of justification by faith (Romans 4; Galatians 3).",
    lessonForToday: "Abraham teaches us that faith is not certainty about what we can see but confidence in the One who promised. The New Testament holds him up three times as the model of saving faith — not because he was perfect, but because he believed God could give life to the dead and call things that were not as though they were (Romans 4:17). Every believer is Abraham's child spiritually.",
  },
  {
    id: "isaac",
    name: "Isaac",
    era: "Genesis 21–35",
    testament: "OT",
    category: "patriarch",
    summary: "Son of laughter and promise — laid on the altar, spared by grace",
    meaning: "He Laughs",
    keyVerse: "Genesis 22:8",
    bio: "Isaac is the quietest patriarch — less adventurous than his father Abraham, less wrestled-over than his son Jacob. Yet he occupied the pivot-point of the covenant. Born to a 90-year-old mother and a 100-year-old father when it was humanly impossible, he was the miracle that proved God's word was not bound by biology. As a young man he carried the wood up Moriah not knowing he was a type of Christ — the willing sacrifice whose binding was replaced by a ram caught in a thicket. He re-dug his father's wells, a quiet act that became a metaphor for faithfully recovering what prior generations had left.",
    strength: "Patient and peaceable — when conflict arose over wells in Gerar, he yielded rather than fought, trusting God to provide again.",
    struggle: "Passive favoritism that divided his household: he favored Esau while Rebekah favored Jacob, and he nearly blessed the wrong son at the end of his life.",
    legacy: "The living proof that God keeps his word across generational timelines, and that the covenant blessing runs through the child of promise, not the child of human calculation.",
    lessonForToday: "Isaac reminds us that faithfulness often looks ordinary — re-digging old wells, enduring disputes peacefully, trusting the God who proved himself to our parents. Not every generation is called to launch something new; some are called to preserve and pass on what was entrusted to them. That is no less honorable before God.",
  },
  {
    id: "jacob",
    name: "Jacob",
    era: "Genesis 25–50",
    testament: "OT",
    category: "patriarch",
    summary: "Deceiver who became Israel — wrestling his way to blessing",
    meaning: "Supplanter / He Who Wrestles with God",
    keyVerse: "Genesis 32:28",
    bio: "Jacob entered the world grasping his twin brother Esau's heel — an omen of a life spent striving and scheming. He tricked Esau out of his birthright with a bowl of stew and stole his blessing through outright deception while wearing goatskins on his arms. Yet God pursued Jacob relentlessly. At Bethel he dreamed of a stairway to heaven with God standing above it, renewing the Abrahamic covenant over this fugitive. At Peniel, decades later, he wrestled through the night with a divine stranger — refusing to release him without a blessing — and had his name changed to Israel. The man who had spent his life taking held on to God and received everything.",
    strength: "Tenacious, unrelenting desire for God's blessing — even his schemes were, at root, a desperate reaching for the covenant promise he believed was rightfully his.",
    struggle: "Deception, manipulation, and playing favorites — the very sins he committed against his father he later suffered through his sons' deception about Joseph.",
    legacy: "Father of the twelve tribes of Israel, patriarch of the people through whom the Messiah came; his transformation from Jacob to Israel became Israel's own story.",
    lessonForToday: "Jacob's story is a scandal of grace — God chose a schemer, pursued him through decades of consequences, and made him the father of a nation. God does not wait until we are cleaned up to use us; he enters our mess and wrestles with us until we stop running and start clinging. The limp Jacob carried from Peniel was a daily reminder that his strength came from his wound, not his cleverness.",
  },
  {
    id: "joseph",
    name: "Joseph",
    era: "Genesis 37–50",
    testament: "OT",
    category: "patriarch",
    summary: "Sold into slavery, exalted to second-in-command — forgiveness on the grandest scale",
    meaning: "May He Add",
    keyVerse: "Genesis 50:20",
    bio: "Joseph was the eleventh of Jacob's twelve sons and his clear favorite, a status his father cemented with the infamous coat of many colors. His brothers' envy turned murderous; they sold him to Ishmaelite slave traders heading to Egypt for twenty pieces of silver. In Egypt, he served faithfully in Potiphar's house until false accusations by Potiphar's wife landed him in prison. There he interpreted dreams for Pharaoh's cupbearer and baker, and two years later, when Pharaoh himself needed an interpreter, he was summoned from the dungeon to become second in command over all of Egypt — responsible for saving the known world from famine. When his brothers came to Egypt for grain and finally recognized him, Joseph wept and embraced them, declaring that what they meant for evil God had meant for good.",
    strength: "Integrity under pressure — he refused Potiphar's wife and maintained his character in the dungeon when no one was watching and no reward was in sight.",
    struggle: "Perhaps pride in his early years, and certainly the wounds of abandonment and betrayal that shaped him — though he channeled them toward character rather than bitterness.",
    legacy: "The most complete Old Testament type of Jesus Christ: rejected by his brothers, exalted to the right hand of power, and becoming the means of salvation for those who rejected him.",
    lessonForToday: "Genesis 50:20 — 'You meant evil against me, but God meant it for good' — is one of the most theologically profound statements in the entire Old Testament. Joseph saw God's sovereignty operating beneath every human betrayal and failure. His ability to forgive lavishly came directly from his conviction that God had been directing the story all along. When we can trust God's sovereignty over our worst wounds, we find the freedom to release those who hurt us.",
  },

  // LEADERS
  {
    id: "moses",
    name: "Moses",
    era: "Exodus–Deuteronomy",
    testament: "OT",
    category: "leader",
    summary: "Reluctant prophet and covenant mediator — the meekest man on earth",
    meaning: "Drawn from Water",
    keyVerse: "Numbers 12:3",
    bio: "Moses was born into the tribe of Levi at a time when Pharaoh had ordered all Hebrew infant boys thrown into the Nile. Drawn from the river by Pharaoh's own daughter, raised in the Egyptian palace, he killed an Egyptian and fled to Midian — where he spent forty years herding sheep before a burning bush interrupted everything. God called him to lead his people out of Egypt. Moses objected five times: he was not eloquent, he did not know God's name, the people would not believe him, he could not speak, and God should just send someone else. He went anyway. Through ten plagues, the Exodus, the giving of the Torah at Sinai, forty years in the wilderness, and the formation of a covenant nation, Moses became the supreme figure of the Old Testament — prophet, lawgiver, intercessor, and friend of God.",
    strength: "Extraordinary intercessory prayer — Moses stood between God and Israel again and again, once persuading God to relent from destroying the nation after the golden calf (Exodus 32).",
    struggle: "Anger that at least twice cost him dearly: he killed the Egyptian in self-righteous passion and struck the rock at Meribah in frustration, the latter costing him the Promised Land.",
    legacy: "Author of the Torah, mediator of the Sinai Covenant, and the Old Testament's greatest prophet — who spoke to God 'face to face, as one speaks to a friend' (Exodus 33:11).",
    lessonForToday: "Moses was chosen not because of his eloquence but despite his inadequacy — God's reply to every objection was essentially 'I will be with you.' The burning bush moment challenges us: God is not looking for the most qualified person, he is looking for the person who will go, trusting that his presence makes the impossible achievable. The meekest man on earth (Numbers 12:3) was the most powerful intercessor Israel ever had.",
  },
  {
    id: "joshua",
    name: "Joshua",
    era: "Book of Joshua",
    testament: "OT",
    category: "leader",
    summary: "Military commander who trusted God's battle plan over human strategy",
    meaning: "YHWH Saves",
    keyVerse: "Joshua 1:9",
    bio: "Joshua first appears as the commander of Israel's army in the battle against the Amalekites (Exodus 17), winning while Moses' arms were raised in prayer. He became Moses' aide and accompanied him up Mount Sinai. As one of the twelve spies sent into Canaan, he and Caleb alone trusted God's ability to give them the land — and they alone from that generation were permitted to enter it forty years later. After Moses' death, God commissioned Joshua to lead the conquest. His career was marked by faith-obedience: crossing the Jordan at flood stage, marching silently around Jericho for seven days, and fighting battles whose strategy would have seemed absurd to any military academy. He led the tribes to possess what God had promised.",
    strength: "Courageous obedience — the command 'Be strong and courageous' is given to Joshua four times in Joshua 1 alone, and his entire career was characterized by doing exactly what God commanded, however unusual it seemed.",
    struggle: "He was deceived by the Gibeonites, who pretended to be from a distant land to obtain a treaty — a failure of prayerful discernment that haunted Israel for generations.",
    legacy: "The conquest of Canaan under Joshua fulfilled the land promise first made to Abraham four centuries earlier, and his name — Yeshua — is the Hebrew form of the name Jesus.",
    lessonForToday: "Joshua 1:8-9 contains what may be the most practical promise in Scripture for anyone entering a daunting new season: meditate on God's word day and night, and you will be prosperous and successful, for the Lord your God is with you wherever you go. Joshua's model of leadership was not strategic brilliance but obedient trust — the battles belonged to God, and his job was to follow carefully.",
  },
  {
    id: "david",
    name: "David",
    era: "1–2 Samuel, Psalms",
    testament: "OT",
    category: "leader",
    summary: "Warrior, poet, adulterer, penitent — a man after God's own heart",
    meaning: "Beloved",
    keyVerse: "1 Samuel 13:14",
    bio: "David was the youngest of Jesse's eight sons — overlooked by his father, dismissed by his brothers, and therefore overlooked by the prophet Samuel until God corrected him: 'The Lord looks at the heart.' Anointed king as a teenager while still tending sheep, he killed Goliath with a sling and a stone, spent years as a fugitive from Saul, and eventually unified all twelve tribes under his rule. He captured Jerusalem, planned the Temple, and received the covenant promise that his dynasty would endure forever and that a son of David would reign eternally. He was also an adulterer who sent Uriah the Hittite to his death to cover his sin with Bathsheba. His confession in Psalm 51 became the model of repentance for all time. He died as he had lived — complex, broken, and beloved of God.",
    strength: "A heart oriented toward God even in failure: David sinned grievously but he ran toward God in repentance rather than away from him in shame.",
    struggle: "Sexual sin and its catastrophic consequences rippled through his family for the rest of his life — Amnon's rape of Tamar, Absalom's rebellion, and the ongoing dysfunction of his household.",
    legacy: "Israel's greatest king, author of most of the Psalms, and the ancestor and type of the Messiah — the eternal Davidic king who would rule in righteousness.",
    lessonForToday: "David's designation as a 'man after God's own heart' did not mean he was morally superior — it meant the orientation of his soul was always back toward God. He did not achieve perfection; he practiced repentance. Psalm 51 shows us what to do with our worst failures: stop making excuses, own the sin fully, and cast ourselves entirely on God's mercy. The same God who restored David can restore us.",
  },
  {
    id: "solomon",
    name: "Solomon",
    era: "1 Kings 1–11",
    testament: "OT",
    category: "leader",
    summary: "Wisest king who ever lived — and the one whose heart was turned away by compromise",
    meaning: "Peace",
    keyVerse: "1 Kings 3:9",
    bio: "Solomon asked God not for wealth, power, or long life but for wisdom to govern his people well — and God gave him wisdom beyond any king who lived before or after, along with everything he did not ask for. His reign was the golden age of Israel: the Temple built to the glory of God, the covenant fulfilled, the nations coming to hear his wisdom. The Queen of Sheba made a 1,400-mile journey to see if the reports were true. Yet Solomon's story ends as a cautionary tale. He married seven hundred wives and kept three hundred concubines, many from nations God had forbidden, and in his old age they turned his heart after their gods. The wisest man in the world proved that wisdom is not self-sustaining — without ongoing devotion to God, it turns to folly.",
    strength: "His capacity for wisdom, discernment, and the ability to build — the Temple, Proverbs, Song of Songs, Ecclesiastes, and an empire of influence.",
    struggle: "Sexual and political compromise — a slow spiritual drift driven by the accumulation of relationships that pulled his heart from God, in direct violation of Deuteronomy 17:17.",
    legacy: "Builder of the First Temple, author of three books of the Bible, and a shadow of the greater wisdom-bearing Son of David who would say, 'Something greater than Solomon is here.'",
    lessonForToday: "Ecclesiastes is Solomon's late-life reckoning: 'Vanity of vanities, all is vanity.' Having accumulated everything the world considers success, he declared it all empty apart from fearing God and keeping his commandments (Ecclesiastes 12:13). His life warns us that accumulated blessings and extraordinary gifting do not protect against drift — sustained faithfulness is a daily, active, relational commitment, not a deposit made in youth.",
  },
  {
    id: "nehemiah",
    name: "Nehemiah",
    era: "Book of Nehemiah",
    testament: "OT",
    category: "leader",
    summary: "Governor who rebuilt walls with sword in hand, praying at every step",
    meaning: "YHWH Comforts",
    keyVerse: "Nehemiah 4:14",
    bio: "Nehemiah was the cupbearer to Artaxerxes I, king of Persia — a position of high honor that placed him in daily close contact with the most powerful ruler in the world. When a report reached him that the walls of Jerusalem lay in ruins and its people were in disgrace, Nehemiah wept, fasted, and prayed for four months before asking the king's permission to go and rebuild. He received not just permission but royal letters and military escort. Back in Jerusalem, he organized the city's inhabitants to rebuild their stretch of wall — families working in front of their own homes — while half the workers stood guard with weapons and the other half built with one hand and held a spear with the other. Finished in fifty-two days, the wall's completion caused the surrounding nations to acknowledge that this work had been done with the help of God.",
    strength: "Strategic vision combined with prayerful dependence — a rare leader who planned brilliantly and prayed constantly, who could face down political opposition without flinching.",
    struggle: "He was sometimes harsh — he rebuked, cursed, and even physically pulled the hair of men who had married foreign wives. His passion for purity could shade into severity.",
    legacy: "Model of servant leadership: he was a governor who never drew his entitled food allowance, refusing to burden those he served, while working on the wall alongside his people.",
    lessonForToday: "Nehemiah's arrow prayers — 'Then I prayed to the God of heaven and answered the king' (2:4) — model a spirituality that is woven into ordinary moments rather than confined to private devotion. He prayed before he planned, prayed while he worked, and prayed after opposition arose. His famous line — 'Remember me, my God, for good' (13:31) — is the prayer of a man whose entire life was an appeal to the God who sees and rewards faithfulness.",
  },

  // PROPHETS
  {
    id: "elijah",
    name: "Elijah",
    era: "1 Kings 17–19; 2 Kings 2",
    testament: "OT",
    category: "prophet",
    summary: "Fire on Carmel, depression after Jezebel, taken to heaven in a whirlwind",
    meaning: "My God is YHWH",
    keyVerse: "1 Kings 18:36-37",
    bio: "Elijah appeared suddenly in the narrative with no genealogy, no backstory — just a declaration to Ahab that there would be no rain except at his word. He was fed by ravens at the brook Cherith, raised a widow's son at Zarephath, and then staged the most dramatic confrontation in prophetic history: 450 prophets of Baal on Mount Carmel against one prophet of YHWH. The Baal prophets danced, cut themselves, and cried out from morning to evening. Elijah mocked them, soaked the altar with water until it ran in trenches, and prayed a simple prayer — and fire fell and consumed the sacrifice, the wood, the stones, the soil, and the water. Then the rains came. Within days, threatened by Jezebel, he was running for his life, collapsing under a juniper tree and begging God to take him. God sent an angel with food.",
    strength: "Absolute confidence in God's power and readiness to stand alone against an entire apostate culture — the archetypal solitary prophet of courage.",
    struggle: "Severe depression and exhaustion after his greatest victory — the Carmel triumph was followed immediately by suicidal despair, a pattern that recurs throughout prophetic ministry.",
    legacy: "Taken to heaven without dying, prophesied to return before the day of the Lord (Malachi 4:5), appeared with Moses at the Transfiguration of Jesus, and held up in James 5 as the model intercessor.",
    lessonForToday: "Elijah's depression (1 Kings 19) is one of the most pastorally rich passages in Scripture. After his greatest spiritual triumph, the prophet collapsed in exhaustion and asked to die — and God's response was not rebuke but food, water, and sleep. God met him in his physical need before addressing his spiritual state. His story tells us that exhaustion is not a character flaw; ministry without rest produces precisely what Elijah experienced. God is gentle with the depleted.",
  },
  {
    id: "isaiah",
    name: "Isaiah",
    era: "Book of Isaiah",
    testament: "OT",
    category: "prophet",
    summary: "Throne-room vision, servant songs, and the most messianic prophecy in the Old Testament",
    meaning: "YHWH Saves",
    keyVerse: "Isaiah 6:8",
    bio: "Isaiah son of Amoz prophesied in Jerusalem during the reigns of four kings: Uzziah, Jotham, Ahaz, and Hezekiah — roughly 740 to 700 BC, a period that included the Assyrian conquest of the northern kingdom. His call came through one of the most awe-inspiring visions in Scripture: he saw the Lord seated on a high and exalted throne, his robe filling the Temple, seraphim calling to each other 'Holy, holy, holy,' and the thresholds shaking. Isaiah's first response was complete undoing — 'Woe to me! I am ruined!' A seraph touched his lips with a live coal from the altar and declared his guilt taken away. Then came the divine commission. His sixty-six chapters divide roughly like the two Testaments — thirty-nine and twenty-seven — and the second half anticipates the New Covenant with unmatched clarity.",
    strength: "Unrivaled prophetic vision: Isaiah saw the incarnation, the suffering servant, the new creation, and the eternal kingdom with extraordinary specificity six to seven centuries before they occurred.",
    struggle: "Tradition holds he was martyred under Manasseh, sawn in two — a life of faithfulness to an unwilling audience that bore no visible fruit in his own generation.",
    legacy: "Author of the most quoted Old Testament book in the New Testament; his Servant Songs (Isaiah 42, 49, 50, 52-53) shaped how Jesus understood his own mission.",
    lessonForToday: "Isaiah 6 teaches the pattern of genuine encounter with God: vision of his holiness, awareness of our sinfulness, receipt of grace and cleansing, and then readiness for commission. The famous line — 'Here am I. Send me!' — only makes sense after the coal on the lips. We are not ready to be sent until we have been undone and remade. Every genuine calling follows this sequence: encounter, humbling, cleansing, commissioning.",
  },
  {
    id: "jeremiah",
    name: "Jeremiah",
    era: "Book of Jeremiah",
    testament: "OT",
    category: "prophet",
    summary: "Weeping prophet — faithful to the end despite imprisonment, rejection, and loneliness",
    meaning: "YHWH Exalts / YHWH Appoints",
    keyVerse: "Jeremiah 20:9",
    bio: "Jeremiah was called before he was born (Jeremiah 1:5) and commissioned as a prophet to the nations during the final decades of Judah before the Babylonian exile. He preached faithfully for forty years to an audience that almost entirely refused to listen. He was beaten, put in stocks, thrown into a cistern and left to sink into the mud, imprisoned in the courtyard of the guard, and carried against his will to Egypt after Jerusalem fell. He was forbidden by God from marrying and from attending mourning feasts — living in the symbolic loneliness of a nation facing judgment. Yet he also bought land while the Babylonians were besieging Jerusalem as an act of prophetic hope in the future restoration. His Lamentations are among the most raw expressions of grief in the entire Bible.",
    strength: "Unwavering faithfulness despite zero apparent success — he delivered God's word without compromise for four decades regardless of the personal cost.",
    struggle: "He openly raged against his calling — 'Cursed be the day I was born' (20:14) — and complained bitterly to God about the injustice of his suffering. He was no stranger to spiritual despair.",
    legacy: "Prophesied the New Covenant written on hearts rather than stone (Jeremiah 31:31-34) — the passage quoted most fully in the book of Hebrews as fulfilled in Jesus Christ.",
    lessonForToday: "Jeremiah's 'confessions' (chapters 11–20) give us a model of brutal honesty with God — he did not perform spiritual contentment while struggling inwardly. He brought the full weight of his anguish to God, and God did not dismiss him. The man who wanted to give up preaching said he could not stop: 'His word is in my heart like a fire, a fire shut up in my bones. I am weary of holding it in; indeed, I cannot.' Calling persists even when we want to quit.",
  },
  {
    id: "daniel",
    name: "Daniel",
    era: "Book of Daniel",
    testament: "OT",
    category: "prophet",
    summary: "Faithful under empire, lions' den survivor, receiver of apocalyptic visions",
    meaning: "God Is My Judge",
    keyVerse: "Daniel 6:10",
    bio: "Daniel was taken from Jerusalem to Babylon as a young man — likely a teenager — when Nebuchadnezzar deported Israel's best and brightest to serve in his court. From the first chapter he distinguished himself: he refused the king's food to maintain ritual purity and was given wisdom and understanding beyond all others. He interpreted Nebuchadnezzar's dreams, read the handwriting on the wall for Belshazzar, survived the lions' den under Darius, and received some of the most complex apocalyptic visions in the Bible. He served faithfully under four different kings and three different empires — Babylonian, Median, and Persian — maintaining his integrity and his prayer life while attaining the highest levels of pagan government. His prayer of confession in Daniel 9 is a model of corporate intercession.",
    strength: "Uncompromising fidelity to God within a pagan empire — he served diligently in his professional role while never bending on what mattered most: prayer, diet, and the exclusive worship of YHWH.",
    struggle: "The sheer weight of what he saw: Daniel was so overwhelmed by his visions that he fell ill and lay exhausted for days. Apocalyptic revelation was not exhilarating — it was devastating.",
    legacy: "His visions shaped Jewish and Christian eschatology for millennia; Jesus himself drew on Daniel's 'Son of Man' language as his primary self-designation.",
    lessonForToday: "Daniel 6:10 tells us that when the decree was issued threatening him with the lions' den, he went home and prayed as he had always done — three times a day, windows open toward Jerusalem. His faith did not become extraordinary in the crisis; the crisis revealed what was already there. The lions' den is not the test — the daily habit of prayer is the test. Faithfulness in ordinary disciplines produces the courage that crisis requires.",
  },
  {
    id: "jonah",
    name: "Jonah",
    era: "Book of Jonah",
    testament: "OT",
    category: "prophet",
    summary: "Prophet who fled, prayed from the fish, preached reluctantly, and raged at God's mercy",
    meaning: "Dove",
    keyVerse: "Jonah 4:2",
    bio: "Jonah ben Amittai was a historical prophet from Gath-hepher in Israel (2 Kings 14:25) who received a simple commission: go to Nineveh, the capital of Assyria, and preach against it. Instead he booked passage to Tarshish, the farthest known western port — the exact opposite direction. A great storm arose, the sailors cast lots, the lot fell on Jonah, and he confessed he was fleeing from God and asked to be thrown overboard. He was swallowed by a great fish and prayed one of the most theologically rich prayers in the Old Testament from its belly. He was vomited onto dry land, went to Nineveh, preached the shortest recorded sermon ('Forty more days and Nineveh will be overthrown'), and witnessed the greatest revival in prophetic history — the entire city repented. Then Jonah sat down and pouted because God had not destroyed them.",
    strength: "He went in the end — the second call was obeyed, and his reluctant obedience produced an extraordinary result that exposed how far God's mercy extended beyond Israel's expectations.",
    struggle: "Nationalistic narrowness that preferred Assyria's destruction to their salvation — his anger at God's mercy is the theological punchline of the whole book and the most searching question it poses.",
    legacy: "A prophetic sign of the resurrection (Matthew 12:40) and a rebuke to every assumption that God's mercy has ethnic or national limits.",
    lessonForToday: "Jonah 4:2 is a remarkable verse: Jonah tells God that the reason he fled to Tarshish was that he knew God was 'gracious and compassionate, slow to anger and abounding in love.' He ran because he was afraid God would be merciful to his enemies — and he was right. The book ends with a question God poses to Jonah and, through Jonah, to every reader: should I not have concern for that great city? We are all Jonah when we resist the scope of God's compassion toward people we have written off.",
  },

  // APOSTLES
  {
    id: "peter",
    name: "Peter",
    era: "Gospels; Acts; 1–2 Peter",
    testament: "NT",
    category: "apostle",
    summary: "Impulsive fisherman who denied Jesus and became the bedrock of the early church",
    meaning: "Rock",
    keyVerse: "Matthew 16:18",
    bio: "Simon Peter was a fisherman from Bethsaida, working with his brother Andrew on the Sea of Galilee, when Jesus said to him 'Follow me.' From the beginning he was impulsive, bold, and first to speak — the one who walked on water and then sank, who declared Jesus the Christ at Caesarea Philippi and then rebuked him, who drew his sword in Gethsemane and cut off a servant's ear, who swore he would never deny Jesus and then denied him three times before dawn. After the resurrection, Jesus found him at the same sea where he first called him, and over three questions — 'Do you love me?' — restored him fully. He preached the first Christian sermon at Pentecost and saw three thousand converted. He was the apostle to the circumcised, the one who received the vision that opened the gospel to Gentiles, and tradition holds he was crucified upside-down, refusing to die in the same manner as his Lord.",
    strength: "Boldness in proclamation and passionate love for Jesus — even his denials came from a man who had followed Jesus all the way to the high priest's courtyard when the other disciples had fled.",
    struggle: "Fear of human opinion that produced inconsistency: the same Peter who confessed Christ and preached at Pentecost was publicly rebuked by Paul at Antioch for withdrawing from Gentile fellowship when the circumcision party arrived (Galatians 2:11).",
    legacy: "Leader of the Jerusalem church, key figure in the apostolic mission, author of two epistles, and the man whose transformation from denier to martyr remains one of Christianity's most powerful stories.",
    lessonForToday: "The restoration scene in John 21 is among the most tender in all Scripture — Jesus restoring Peter not with a rebuke but with three questions that mirrored his three denials. He was not disqualified by his failure; he was remade by grace. Peter's story tells every believer who has fallen that the resurrected Christ meets us at the scene of our failure and gives us back the mission we thought we had forfeited.",
  },
  {
    id: "john",
    name: "John",
    era: "Gospels; Acts; 1–3 John; Revelation",
    testament: "NT",
    category: "apostle",
    summary: "The beloved disciple — exiled to Patmos, who wrote more about love than anyone",
    meaning: "YHWH Is Gracious",
    keyVerse: "John 13:23",
    bio: "John son of Zebedee, brother of James, was a Galilean fisherman Jesus nicknamed 'Boanerges' — Son of Thunder — suggesting he was not always the gentle figure piety imagines. He and James once asked Jesus if they should call fire down from heaven on a Samaritan village and requested the best seats in the kingdom. Yet something happened to him in proximity to Jesus. At the Last Supper he was the one reclining next to Jesus; at the cross he was the only apostle present; from the cross Jesus entrusted his mother to John's care. He outran Peter to the empty tomb. He was the last surviving apostle, exiled by Domitian to the island of Patmos in his old age, and there he received the Revelation. His Gospel and letters are saturated with the language of love, light, and abiding — the fruit of a life transformed by decades of walking with Christ.",
    strength: "Contemplative depth that produced the most theological Gospel and the most demanding definition of love in the New Testament: 'This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins' (1 John 4:10).",
    struggle: "Early ambition (Mark 10:35-37) and perhaps a severity that had to be gentled over decades by grace — the Son of Thunder who became the apostle of love.",
    legacy: "Author of the Gospel that 'the whole world could not contain' if all Jesus did were written down, and of the Revelation that gave the church its eschatological horizon.",
    lessonForToday: "John's letters return obsessively to one test of genuine Christian faith: love for the brothers. 'If anyone says he loves God yet hates his brother, he is a liar' (1 John 4:20). This was not sentimental niceness — John knew better than anyone what real love cost. His letters force us to ask whether our theology is producing the love that Jesus commanded, or whether we have settled for doctrinal accuracy without relational transformation.",
  },
  {
    id: "paul",
    name: "Paul",
    era: "Acts 9–28; Epistles",
    testament: "NT",
    category: "apostle",
    summary: "Persecutor turned apostle — the greatest theologian, most prolific missionary, and magnificent sufferer",
    meaning: "Small / Humble",
    keyVerse: "Philippians 3:8",
    bio: "Saul of Tarsus was a Pharisee of Pharisees, educated under Gamaliel, zealous for the Torah beyond his contemporaries, present at Stephen's stoning and actively persecuting the church — 'breathing out murderous threats against the Lord's disciples' (Acts 9:1) — when the risen Christ confronted him on the road to Damascus. The blinding light, the voice, the three days of blindness and fasting, and then Ananias placing his hands on him — all of it dismantled the man Saul and rebuilt him as Paul, apostle to the Gentiles. He went on three missionary journeys across the Roman Empire, establishing churches in city after city. He was beaten, stoned, shipwrecked, imprisoned, and eventually beheaded in Rome. In the intervals between travel and imprisonment he wrote letters — Romans, 1 and 2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1 and 2 Thessalonians, Philemon, and the Pastorals — that became the theological engine of Christianity.",
    strength: "Intellectual brilliance harnessed entirely for the gospel and extraordinary resilience in suffering — the man who listed imprisonment, flogging, stoning, shipwreck, and constant danger in 2 Corinthians 11 as evidence of apostolic authenticity rather than failure.",
    struggle: "His 'thorn in the flesh' that God refused to remove, whatever it was; and the divisions his strong personality and theology caused in churches he loved (Corinth especially).",
    legacy: "Author of thirteen or fourteen New Testament letters, architect of Gentile Christianity, and the man whose conversion is the most profound evidence of the resurrection's reality.",
    lessonForToday: "Paul's 'for me to live is Christ and to die is gain' (Philippians 1:21) was not performance — it was written from prison while awaiting a verdict that could mean execution. The secret he had 'learned' (Philippians 4:11) was not natural temperament but trained contentment — a posture toward circumstances that came from knowing Christ as sufficient for every condition. His theology was not abstract; it was worked out in chains, shipwrecks, and beatings.",
  },
  {
    id: "timothy",
    name: "Timothy",
    era: "Acts 16; 1–2 Timothy",
    testament: "NT",
    category: "apostle",
    summary: "Paul's young son in the faith — timid, faithful, and entrusted with the Ephesian church",
    meaning: "Honoring God",
    keyVerse: "2 Timothy 1:7",
    bio: "Timothy was from Lystra, the son of a Greek father and a Jewish-Christian mother named Eunice, who had been influenced in her faith by her own mother Lois. When Paul visited Lystra on his second missionary journey, Timothy was well-spoken of by the believers there and Paul wanted him as a traveling companion. He had Timothy circumcised so as not to be a stumbling block to Jewish communities they would visit. Timothy became Paul's closest and most trusted associate — sent to Thessalonica to strengthen believers under persecution, to Corinth to remind them of Paul's ways, and eventually installed as the leader of the Ephesian church. Paul's two letters to him are the most personal and pastorally direct in the New Testament — equal parts theological charge, pastoral instruction, and fatherly encouragement to a young leader who apparently struggled with timidity and chronic health issues.",
    strength: "Genuine love for others — Paul described him as having 'no one else like him, who will show genuine concern for your welfare' (Philippians 2:20), a remarkable endorsement from one who knew people deeply.",
    struggle: "Fear and timidity that Paul had to actively address: 'God gave us a spirit not of fear but of power and love and self-control' (2 Timothy 1:7) — suggesting Timothy needed this reminder.",
    legacy: "Model of a young leader shaped by multigenerational faith (grandmother to mother to son) and by faithful mentorship — the chain of transmission Paul commanded him to continue (2 Timothy 2:2).",
    lessonForToday: "Paul's charge to Timothy — 'Fan into flame the gift of God, which is in you through the laying on of my hands' (2 Timothy 1:6) — acknowledges that spiritual gifts can lie dormant and need active cultivation. Timothy's story is an encouragement to every young believer in ministry who feels inadequate: Paul himself acknowledged the weakness and addressed it with grace, Scripture, and example rather than demand. Let no one look down on your youthfulness.",
  },
  {
    id: "barnabas",
    name: "Barnabas",
    era: "Acts 4; 9; 11–15",
    testament: "NT",
    category: "apostle",
    summary: "Son of Encouragement — Paul's advocate when no one trusted him, John Mark's second chance",
    meaning: "Son of Encouragement",
    keyVerse: "Acts 4:36",
    bio: "Joseph, a Levite from Cyprus, was given the apostolic nickname Barnabas — Son of Encouragement — and the name tells you everything you need to know about him. He sold a field and laid the money at the apostles' feet, demonstrating radical generosity in the earliest Jerusalem community. When Saul of Tarsus came to Jerusalem after his conversion and the disciples were all afraid of him (with very good reason), it was Barnabas who brought him to the apostles and vouched for the reality of his conversion. He was sent to Antioch when reports of Gentile conversions reached Jerusalem, and he rejoiced at what God was doing and went to Tarsus to bring Paul into the work. When Paul refused to take John Mark on the second missionary journey because Mark had deserted them in Pamphylia, Barnabas separated from Paul and took Mark under his wing — a costly act of grace that the New Testament later vindicates when Paul acknowledges Mark's usefulness (2 Timothy 4:11).",
    strength: "Extraordinary generosity of both money and reputation — he gave his field, his credibility, and his ministry opportunities to others with remarkable cheerfulness.",
    struggle: "He was led astray by Peter's inconsistency at Antioch, withdrawing from Gentile fellowship alongside Peter — Paul calls this hypocrisy and includes Barnabas in his rebuke (Galatians 2:13).",
    legacy: "The unsung enabler of the early church — without Barnabas, Paul might never have been accepted, the Antioch church might never have been established, and John Mark (the Gospel writer) might have been discarded.",
    lessonForToday: "Barnabas embodies a ministry the church desperately needs and rarely celebrates: the ministry of second chances. He saw potential in people others had written off — in the dangerous converted persecutor Paul, and in the failed young missionary Mark. Every church needs people who are willing to stake their reputation on someone no one else believes in yet. This is not naivety; it is the imitation of God, who gave us a second chance in Christ.",
  },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "📜" },
  { id: "patriarchs", label: "Patriarchs", icon: "🏕️" },
  { id: "leaders", label: "Leaders", icon: "⚔️" },
  { id: "prophets", label: "Prophets", icon: "🔥" },
  { id: "apostles", label: "Apostles", icon: "✉️" },
  { id: "journal", label: "My Journal", icon: "📓" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

const VIDEOS = [
  { videoId: "AzmYV8GNAIM", title: "Who Is God? Names and Attributes", channel: "The Bible Project", description: "Foundational overview of how God reveals himself through covenants with the patriarchs — context for understanding Abraham, Isaac, and Jacob." },
  { videoId: "iVwauTiyFjM", title: "The Book of Psalms Overview", channel: "The Bible Project", description: "Overview of the Psalms — David's songbook — showing how Israel's greatest king processed his entire life in prayer and poetry." },
  { videoId: "3Dv4-n6OYGI", title: "Pursuing Biblical Manhood and Womanhood", channel: "John Piper / Desiring God", description: "Piper presents the biblical vision of what God designed men to be — rooted in the nature of Christ, not in cultural expectations." },
  { videoId: "mC-zw0zCCtg", title: "Paul the Apostle: The Man and His Mission", channel: "The Bible Project", description: "Paul's conversion and call traced through Acts and the epistles — the missionary logic of the greatest church planter who ever lived." },
  { videoId: "jH_aojNJM3E", title: "The Life and Letters of Paul", channel: "The Bible Project", description: "An overview of Paul's biography in Acts set alongside his epistles — what he experienced and what he taught in response to it." },
];

type JournalEntry = {
  id: string;
  date: string;
  selectedFigure: string;
  lesson: string;
  application: string;
  prayer: string;
};

function TestamentBadge({ testament }: { testament: "OT" | "NT" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 20,
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.05em",
      background: testament === "OT" ? `${GOLD}22` : `${BLUE}22`,
      color: testament === "OT" ? GOLD : BLUE,
      border: `1px solid ${testament === "OT" ? GOLD : BLUE}44`,
    }}>
      {testament === "OT" ? "Old Testament" : "New Testament"}
    </span>
  );
}

function ManCard({ man, isSelected, onClick }: { man: Man; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: isSelected ? `${GREEN}18` : CARD,
        border: `1.5px solid ${isSelected ? GREEN : BORDER}`,
        borderRadius: 10,
        padding: "16px 18px",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
        transition: "all 0.15s ease",
        boxShadow: isSelected ? `0 0 0 1px ${GREEN}44` : "none",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1rem", color: isSelected ? GREEN : TEXT, marginBottom: 4 }}>
        {man.name}
      </div>
      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{man.summary}</div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
        <TestamentBadge testament={man.testament} />
        <span style={{ fontSize: "0.7rem", color: MUTED }}>{man.era}</span>
      </div>
    </button>
  );
}

function ManDetailPanel({ man }: { man: Man }) {
  return (
    <div style={{
      background: CARD,
      border: `1.5px solid ${GREEN}44`,
      borderRadius: 14,
      padding: "28px 30px",
      boxShadow: `0 4px 32px ${GREEN}11`,
    }}>
      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
        <div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: GREEN, margin: 0, letterSpacing: "-0.02em" }}>
            {man.name}
          </h2>
          <div style={{ fontSize: "0.82rem", color: MUTED, marginTop: 4, fontStyle: "italic" }}>
            "{man.meaning}"
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <TestamentBadge testament={man.testament} />
          <span style={{ fontSize: "0.78rem", color: MUTED, background: `${BORDER}88`, padding: "3px 10px", borderRadius: 20 }}>
            {man.era}
          </span>
        </div>
      </div>

      <div style={{ fontSize: "0.85rem", color: GREEN, marginBottom: 18, fontWeight: 600 }}>
        Key Verse: <span style={{ color: MUTED, fontWeight: 400 }}>{man.keyVerse}</span>
      </div>

      {/* Bio */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>Biography</h3>
        <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "0.97rem", margin: 0 }}>{man.bio}</p>
      </div>

      {/* Strength / Struggle */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}33`, borderRadius: 10, padding: "16px 18px" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: 8 }}>Strength</div>
          <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{man.strength}</p>
        </div>
        <div style={{ background: `${RED}09`, border: `1px solid ${RED}33`, borderRadius: 10, padding: "16px 18px" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: RED, marginBottom: 8 }}>Struggle</div>
          <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{man.struggle}</p>
        </div>
      </div>

      {/* Legacy */}
      <div style={{ background: `${GOLD}0D`, border: `1px solid ${GOLD}33`, borderRadius: 10, padding: "16px 18px", marginBottom: 20 }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: 8 }}>Legacy</div>
        <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{man.legacy}</p>
      </div>

      {/* Lesson for Today */}
      <div style={{ background: `${PURPLE}11`, border: `1px solid ${PURPLE}33`, borderRadius: 10, padding: "16px 18px" }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: 8 }}>Lesson for Today</div>
        <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.8, margin: 0 }}>{man.lessonForToday}</p>
      </div>
    </div>
  );
}

function CategoryTab({
  category,
  categoryKey,
  label,
  icon,
  description,
}: {
  category: "patriarch" | "leader" | "prophet" | "apostle";
  categoryKey: string;
  label: string;
  icon: string;
  description: string;
}) {
  const men = MEN_DATA.filter((m) => m.category === category);
  const [selectedId, setSelectedId] = usePersistedState<string>(`vine_mob_selected_${categoryKey}`, men[0]?.id ?? "");
  const selectedMan = men.find((m) => m.id === selectedId) ?? men[0];

  return (
    <div>
      {/* Category header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: "1.6rem" }}>{icon}</span>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: TEXT, margin: 0 }}>{label}</h2>
        </div>
        <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{description}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "start" }}>
        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {men.map((man) => (
            <ManCard
              key={man.id}
              man={man}
              isSelected={selectedId === man.id}
              onClick={() => setSelectedId(man.id)}
            />
          ))}
        </div>
        {/* Detail */}
        <div>
          {selectedMan && <ManDetailPanel man={selectedMan} />}
        </div>
      </div>
    </div>
  );
}

function OverviewTab() {
  const categories = [
    {
      label: "Patriarchs",
      icon: "🏕️",
      color: GOLD,
      count: 4,
      desc: "The founding fathers of the covenant nation — Abraham, Isaac, Jacob, and Joseph — whose lives span Genesis and whose faith became the bedrock of Israel's identity. Their stories are raw, messy, and saturated with grace.",
      examples: "Abraham, Isaac, Jacob, Joseph",
    },
    {
      label: "Leaders",
      icon: "⚔️",
      color: RED,
      count: 5,
      desc: "From the reluctant prophet Moses to the strategic builder Nehemiah, these men led God's people through formation, conquest, kingship, and restoration. Each faced impossible circumstances and found God sufficient.",
      examples: "Moses, Joshua, David, Solomon, Nehemiah",
    },
    {
      label: "Prophets",
      icon: "🔥",
      color: BLUE,
      count: 5,
      desc: "Men who stood in the council of God and spoke his word to often-unwilling audiences — at personal cost that ranged from social rejection to imprisonment to death. They saw further into the future than any natural eye could see.",
      examples: "Elijah, Isaiah, Jeremiah, Daniel, Jonah",
    },
    {
      label: "Apostles & NT Men",
      icon: "✉️",
      color: PURPLE,
      count: 5,
      desc: "The men who walked with Jesus or were transformed by his resurrection appearance, and who carried the gospel to the ends of the known world. Their letters became the New Testament and their courage built the church.",
      examples: "Peter, John, Paul, Timothy, Barnabas",
    },
  ];

  const commonThreads = [
    {
      title: "All were flawed",
      icon: "⚠️",
      color: RED,
      body: "Abraham lied twice about Sarah. Moses murdered a man. David committed adultery and orchestrated a murder. Peter denied Christ three times. Paul persecuted the church. The consistent pattern is not moral perfection — it is grace working through broken instruments.",
    },
    {
      title: "All were called",
      icon: "📣",
      color: GREEN,
      body: "Each man's story begins with an encounter with the living God — a burning bush, a vision of the throne room, a voice from a blinding light, a word from a stranger at a well. The call precedes the character, not the other way around.",
    },
    {
      title: "All were sustained by grace",
      icon: "✋",
      color: PURPLE,
      body: "None of them sustained themselves. Moses would have been consumed by Korah's rebellion without God's intervention. Elijah would have died under the juniper tree without the angel's food. Peter would have ended in shame without the restoration at the Sea of Galilee. The power was never theirs.",
    },
    {
      title: "All pointed beyond themselves",
      icon: "➡️",
      color: GOLD,
      body: "Every life in this study is a shadow of something greater. The patriarchs were types of the coming Son. The leaders foreshadowed the ultimate King. The prophets predicted the Messiah's suffering and glory. The apostles were witnesses to his resurrection. Every man here points to Jesus.",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <div style={{
        background: `linear-gradient(135deg, ${GREEN}18 0%, ${PURPLE}10 100%)`,
        border: `1px solid ${GREEN}33`,
        borderRadius: 16,
        padding: "40px 36px",
        marginBottom: 40,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GREEN, marginBottom: 12 }}>
            Study Guide
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: TEXT, marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Men of the Bible
          </h1>
          <p style={{ color: TEXT, fontSize: "1.08rem", lineHeight: 1.85, maxWidth: 680, margin: "0 0 20px 0", opacity: 0.9 }}>
            Scripture presents us with a gallery of men — not statues of moral perfection but living, breathing portraits of what it looks like when God takes hold of a human life. Patriarchs who left everything on a promise. Leaders who faced impossible odds. Prophets who spoke when no one listened. Apostles who died rather than recant.
          </p>
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 660, margin: "0 0 24px 0" }}>
            Studying these men is not primarily a history lesson — it is an encounter with the God who called them, shaped them, and sustained them. Their stories expose our own stories. Their struggles illuminate our struggles. And in every one of them, we see the grace that is available to us.
          </p>
          <div style={{
            background: `${GREEN}15`,
            border: `1px solid ${GREEN}33`,
            borderRadius: 10,
            padding: "16px 20px",
            display: "inline-block",
            maxWidth: 620,
          }}>
            <p style={{ color: GREEN, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith."
            </p>
            <p style={{ color: MUTED, fontSize: "0.82rem", marginTop: 8, margin: "8px 0 0 0" }}>— Hebrews 12:1-2</p>
          </div>
        </div>
      </div>

      {/* Category summary cards */}
      <div style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: TEXT, marginBottom: 6 }}>Four Categories of Men</h2>
        <p style={{ color: MUTED, fontSize: "0.92rem", marginBottom: 24, lineHeight: 1.6 }}>
          Scripture presents men in distinct roles — each with its own calling, pressures, and characteristic temptations. Understanding the category helps us understand the man.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          {categories.map((cat) => (
            <div key={cat.label} style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "22px 20px",
              borderTop: `3px solid ${cat.color}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: cat.color, fontSize: "1rem" }}>{cat.label}</div>
                  <div style={{ fontSize: "0.72rem", color: MUTED }}>{cat.count} figures</div>
                </div>
              </div>
              <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.65, margin: "0 0 10px 0" }}>{cat.desc}</p>
              <div style={{ fontSize: "0.75rem", color: cat.color, fontWeight: 600 }}>{cat.examples}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Common threads */}
      <div style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: TEXT, marginBottom: 6 }}>Common Threads</h2>
        <p style={{ color: MUTED, fontSize: "0.92rem", marginBottom: 24, lineHeight: 1.6 }}>
          Across every era, every role, and every personality type, the men of Scripture share four defining characteristics.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {commonThreads.map((thread) => (
            <div key={thread.title} style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "20px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: "1.3rem" }}>{thread.icon}</span>
                <span style={{ fontWeight: 700, color: thread.color, fontSize: "0.95rem" }}>{thread.title}</span>
              </div>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{thread.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to use this resource */}
      <div style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: "28px 30px",
      }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT, marginBottom: 14 }}>How to Use This Resource</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { step: "01", label: "Choose a category", desc: "Start with the era or role that most resonates — patriarch, leader, prophet, or apostle." },
            { step: "02", label: "Select a figure", desc: "Read the biography, study his strength and struggle, and absorb the legacy he left." },
            { step: "03", label: "Apply the lesson", desc: "The 'Lesson for Today' section connects each figure's story to your present circumstances." },
            { step: "04", label: "Journal your response", desc: "Use the Journal tab to record what you learned and how you intend to live differently." },
          ].map((step) => (
            <div key={step.step} style={{ display: "flex", gap: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: `${GREEN}22`,
                border: `1px solid ${GREEN}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "0.72rem",
                fontWeight: 800,
                color: GREEN,
              }}>
                {step.step}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: "0.88rem", marginBottom: 4 }}>{step.label}</div>
                <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JournalTab() {
  const men = MEN_DATA;
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_mob_entries");
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [figure, setFigure] = useState(men[0]?.id ?? "");
  const [lesson, setLesson] = useState("");
  const [application, setApplication] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (!lesson.trim()) return;
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      selectedFigure: figure,
      lesson,
      application,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    try { localStorage.setItem("vine_mob_entries", JSON.stringify(updated)); } catch {}
    setLesson("");
    setApplication("");
    setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    try { localStorage.setItem("vine_mob_entries", JSON.stringify(updated)); } catch {}
  }

  const selectedFigureData = men.find((m) => m.id === figure);

  const inputStyle: React.CSSProperties = {
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    color: TEXT,
    padding: "10px 14px",
    fontSize: "0.92rem",
    width: "100%",
    boxSizing: "border-box",
    lineHeight: 1.6,
    resize: "vertical" as const,
    fontFamily: "system-ui, sans-serif",
    outline: "none",
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: TEXT, margin: "0 0 8px 0" }}>My Journal</h2>
        <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
          Record what the Spirit is teaching you through these lives. Reflection cements transformation.
        </p>
      </div>

      {/* Form */}
      <div style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: "28px 30px",
        marginBottom: 36,
      }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN, margin: "0 0 20px 0" }}>New Journal Entry</h3>

        {/* Figure select */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: MUTED, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            Biblical Figure
          </label>
          <select
            value={figure}
            onChange={(e) => setFigure(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <optgroup label="Patriarchs">
              {men.filter((m) => m.category === "patriarch").map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </optgroup>
            <optgroup label="Leaders">
              {men.filter((m) => m.category === "leader").map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </optgroup>
            <optgroup label="Prophets">
              {men.filter((m) => m.category === "prophet").map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </optgroup>
            <optgroup label="Apostles & NT Men">
              {men.filter((m) => m.category === "apostle").map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Key verse reminder */}
        {selectedFigureData && (
          <div style={{
            background: `${GREEN}0D`,
            border: `1px solid ${GREEN}2A`,
            borderRadius: 8,
            padding: "10px 14px",
            marginBottom: 18,
            fontSize: "0.82rem",
            color: GREEN,
          }}>
            <strong>Key Verse ({selectedFigureData.name}):</strong> <span style={{ color: MUTED }}>{selectedFigureData.keyVerse}</span>
          </div>
        )}

        {/* Lesson */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: MUTED, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            What I Learned
          </label>
          <textarea
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            placeholder={`What did ${selectedFigureData?.name ?? "this figure"}'s story teach you about God, faith, or yourself?`}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Application */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: MUTED, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            How I Will Live Differently
          </label>
          <textarea
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            placeholder="Concrete, specific — not vague intentions but actual next steps."
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Prayer */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: MUTED, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            My Prayer
          </label>
          <textarea
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
            placeholder="Write your prayer in response to what you've studied — confession, surrender, request, praise."
            rows={3}
            style={inputStyle}
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={!lesson.trim()}
          style={{
            background: lesson.trim() ? GREEN : `${GREEN}44`,
            color: lesson.trim() ? "#fff" : MUTED,
            border: "none",
            borderRadius: 8,
            padding: "11px 28px",
            fontSize: "0.92rem",
            fontWeight: 700,
            cursor: lesson.trim() ? "pointer" : "not-allowed",
            transition: "all 0.15s",
          }}
        >
          {saved ? "Saved!" : "Save Entry"}
        </button>
      </div>

      {/* Previous entries */}
      {entries.length > 0 && (
        <div>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, marginBottom: 16 }}>
            Previous Entries ({entries.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {entries.map((entry) => {
              const figureData = men.find((m) => m.id === entry.selectedFigure);
              return (
                <div key={entry.id} style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "20px 22px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div>
                      <span style={{ fontWeight: 700, color: GREEN, fontSize: "0.95rem" }}>
                        {figureData?.name ?? entry.selectedFigure}
                      </span>
                      <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 10 }}>{entry.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteEntry(entry.id)}
                      style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1.1rem", padding: "0 2px", lineHeight: 1 }}
                      title="Delete entry"
                    >
                      ×
                    </button>
                  </div>
                  {entry.lesson && (
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, marginBottom: 4 }}>What I Learned</div>
                      <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{entry.lesson}</p>
                    </div>
                  )}
                  {entry.application && (
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, marginBottom: 4 }}>Application</div>
                      <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{entry.application}</p>
                    </div>
                  )}
                  {entry.prayer && (
                    <div style={{
                      background: `${PURPLE}0D`,
                      border: `1px solid ${PURPLE}2A`,
                      borderRadius: 8,
                      padding: "10px 14px",
                    }}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: PURPLE, marginBottom: 4 }}>Prayer</div>
                      <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{entry.prayer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {entries.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px 20px",
          color: MUTED,
          fontSize: "0.9rem",
          background: CARD,
          borderRadius: 12,
          border: `1px dashed ${BORDER}`,
        }}>
          No entries yet. Study a figure and record what you learn.
        </div>
      )}
    </div>
  );
}

function VideosTab() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: TEXT, margin: "0 0 8px 0" }}>Videos</h2>
        <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
          Curated video teaching on the men of Scripture — from The Bible Project and other trusted teachers.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        {VIDEOS.map((v) => (
          <div key={v.videoId} style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            overflow: "hidden",
          }}>
            <VideoEmbed videoId={v.videoId} title={v.title} />
            <div style={{ padding: "16px 18px" }}>
              <div style={{ fontWeight: 700, color: TEXT, fontSize: "0.97rem", marginBottom: 4 }}>{v.title}</div>
              <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: 8 }}>{v.channel}</div>
              <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenOfTheBiblePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_men-of-the-bible_tab", "overview");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

          {/* Page header */}
          <div style={{ paddingTop: 36, paddingBottom: 12, marginBottom: 8 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GREEN, marginBottom: 8 }}>
              Biblical Study
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: TEXT, margin: "0 0 10px 0", letterSpacing: "-0.025em" }}>
              Men of the Bible
            </h1>
            <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.75, maxWidth: 680, margin: 0 }}>
              Patriarchs, leaders, prophets, and apostles — nineteen men whose lives illuminate what God can do with a willing, broken, and called human being.
            </p>
          </div>

          {/* Tab navigation */}
          <div style={{
            display: "flex",
            gap: 4,
            borderBottom: `1px solid ${BORDER}`,
            marginBottom: 36,
            overflowX: "auto",
            paddingBottom: 0,
          }}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: `2.5px solid ${isActive ? GREEN : "transparent"}`,
                    color: isActive ? GREEN : MUTED,
                    padding: "10px 16px",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s",
                    marginBottom: "-1px",
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          {activeTab === "overview" && <OverviewTab />}

          {activeTab === "patriarchs" && (
            <CategoryTab
              category="patriarch"
              categoryKey="patriarchs"
              label="Patriarchs"
              icon="🏕️"
              description="The founding fathers of the covenant — Abraham, Isaac, Jacob, and Joseph. Their lives in Genesis are among the most psychologically rich and theologically loaded in all of Scripture. They were nomads, dreamers, deceivers, and servants; all of them were held by a God who kept his promises across generations. Their world was the Fertile Crescent two millennia before Christ, but their struggles — faith against the impossible, family dysfunction, the slow work of divine formation — are immediately recognizable."
            />
          )}

          {activeTab === "leaders" && (
            <CategoryTab
              category="leader"
              categoryKey="leaders"
              label="Leaders"
              icon="⚔️"
              description="From the wilderness to the throne room to the rubble of Jerusalem — these five men led God's people in the most demanding circumstances imaginable. Moses formed a nation from slaves. Joshua conquered a fortified land. David unified twelve tribal factions. Solomon built the Temple and lost his heart. Nehemiah rebuilt walls under political siege. Each of them models something essential about what it means to lead under God's authority rather than in one's own strength — and each of them failed in characteristic ways that reveal the difference."
            />
          )}

          {activeTab === "prophets" && (
            <CategoryTab
              category="prophet"
              categoryKey="prophets"
              label="Prophets"
              icon="🔥"
              description="The prophets stood in the gap between God's word and human rebellion. They were not primarily predictors of the future — though they did that — they were forthtellers: men who delivered God's word to people who did not want to hear it, at extraordinary personal cost. Elijah stood alone on Carmel. Isaiah was (according to tradition) sawn in two. Jeremiah was thrown into a cistern. Daniel was thrown to lions. Jonah ran away and was chased by a whale. These are not safe men. They were seized by a word they could not hold in and compelled to speak it to resistant audiences. Their lives are among the most instructive in Scripture for anyone called to speak truth."
            />
          )}

          {activeTab === "apostles" && (
            <CategoryTab
              category="apostle"
              categoryKey="apostles"
              label="Apostles & NT Men"
              icon="✉️"
              description="The apostles and their companions were eyewitnesses to the resurrection — or, in Paul's case, a witness to the risen Christ by direct appearance. They carried the gospel from Jerusalem to Rome, to the ends of the known world, founding churches, writing letters, enduring imprisonment, and dying as martyrs. Peter, John, Paul, Timothy, and Barnabas represent the full range of apostolic personality and calling: the bold leader, the contemplative mystic, the brilliant theologian, the timid young pastor, the encouraging enabler. Together they show that the advance of the gospel required every type of person the Spirit had made."
            />
          )}

          {activeTab === "journal" && <JournalTab />}
          {activeTab === "videos" && <VideosTab />}

        </div>
      </main>
      <Footer />
    </div>
  );
}
