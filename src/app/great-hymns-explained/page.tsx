"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "hymns" | "theology" | "history" | "voices";

const ERA_FILTERS = ["All", "17th Century", "18th Century", "19th Century", "20th Century"];

const HYMNS = [
  {
    title: "Amazing Grace",
    author: "John Newton",
    year: 1779,
    era: "18th Century",
    color: GREEN,
    tune: "New Britain (traditional American folk melody)",
    story: "Written by John Newton — a former slave trader who had experienced a dramatic conversion during a violent storm at sea. Newton wrote the hymn for a New Year's Day service at Olney in 1773, accompanying a sermon on 1 Chronicles 17:16-17. The famous opening 'Amazing grace, how sweet the sound, that saved a wretch like me' was entirely autobiographical — Newton had been, by his own assessment, one of the most depraved men of his generation.",
    theology: "Amazing Grace is a confession of radical grace — grace that reaches the vilest sinner. It does not begin with God's greatness but with God's condescension to a wretch. The progressive stanzas trace conversion (I once was lost), ongoing protection (through many dangers), and eschatological hope (ten thousand years). It is perhaps the purest musical expression of what grace actually means.",
    line_by_line: "Verse 1: Conversion — the basic grace of forgiveness. Verse 2: Providence in spiritual blindness — I was blind before grace. Verse 3: Past grace is the foundation for future trust. Verses 4-5 (later additions): Assurance through death and eternal hope.",
    why_significant: "Arguably the most recognized Christian song in the English-speaking world, sung at funerals, revivals, and services across all traditions. The combination of Newton's dramatic story and the tune's raw beauty makes it consistently the most emotionally powerful hymn in the Western church.",
    scripture: "Ephesians 2:8-9; Romans 5:8",
    initials: "AG",
  },
  {
    title: "It Is Well with My Soul",
    author: "Horatio Spafford",
    year: 1873,
    era: "19th Century",
    color: "#3B82F6",
    tune: "Ville du Havre (Philip Bliss)",
    story: "Written in 1873 by Horatio Spafford — a successful Chicago lawyer and friend of D.L. Moody. In November 1873, Spafford sent his wife and four daughters ahead to Europe on the SS Ville du Havre. The ship collided with another vessel and sank. All four daughters drowned; his wife survived. She cabled: 'Saved alone. What shall I do?' Spafford immediately sailed to meet his grieving wife. As the ship passed near the location where his daughters had drowned, he wrote these words.",
    theology: "This hymn is the most extreme test of the Christian doctrine of peace. 'It is well with my soul' is not a denial of grief — it was written through tears. It is the claim that the peace of God surpasses comprehension (Philippians 4:7), that there is a wellbeing underneath suffering that the world cannot give or take away. The final verse looks forward to the return of Christ.",
    line_by_line: "Verse 1: 'When peace like a river' — the peace that comes regardless of circumstances. Verse 2: Satan, though active, is defeated. Verse 3: The cross is the foundation of all wellbeing — my sin nailed to the cross. Verse 4: The eschatological hope — Christ returns, the trumpet sounds.",
    why_significant: "One of the most extraordinary examples of faith in the face of catastrophic loss in the history of Christian song. Horatio Spafford wrote these words not from a comfortable armchair but from the middle of the ocean, within sight of where his daughters died.",
    scripture: "Philippians 4:7; Isaiah 26:3",
    initials: "IW",
  },
  {
    title: "How Great Thou Art",
    author: "Carl Boberg (Swedish); tr. Stuart Hine (English)",
    year: 1885,
    era: "19th Century",
    color: PURPLE,
    tune: "O Store Gud (Swedish folk melody)",
    story: "Originally written in Swedish by Carl Boberg in 1885 after walking home through a beautiful Swedish landscape and suddenly encountering a violent thunderstorm, followed by calm. The poem 'O Store Gud' was set to a Swedish folk melody. It was translated into Russian (1920s), then German, then into English by British missionary Stuart Hine in the 1940s while working in Ukraine. Hine added the most famous verse ('And when I think that God, his Son not sparing...') during his mission work. Billy Graham used it frequently in his crusades, making it globally famous.",
    theology: "How Great Thou Art is a creation hymn — it moves from the grandeur of nature (thunder, starry skies, forests, lofty mountains) to the redemptive act of the cross, to the final eschatological hope of Christ's return. It joins natural revelation with special revelation, showing how creation points to the Creator and the cross to his love.",
    line_by_line: "Verse 1: Creation as revelation of God's greatness. Verse 2: The starry sky, nature's sounds. Verse 3: The incarnation and atonement — 'God his Son not sparing.' Verse 4: The return of Christ and the response of worship.",
    why_significant: "Consistently voted the most beloved hymn in surveys of English-speaking Christians. The refrain 'Then sings my soul, my Savior God, to thee: how great thou art' is one of the most ecstatically beautiful choruses in the history of Christian music.",
    scripture: "Psalm 19:1-4; Romans 8:32",
    initials: "HGT",
  },
  {
    title: "O Sacred Head Now Wounded",
    author: "Bernard of Clairvaux (Latin, 12th c.); Paul Gerhardt (German, 1656); tr. James Alexander (English)",
    year: 1153,
    era: "17th Century",
    color: "#EF4444",
    tune: "Herzlich tut mich verlangen (Hans Leo Hassler, 1601); harmonized by J.S. Bach",
    story: "The original Latin poem 'Salve mundi salutare' is attributed to Bernard of Clairvaux (12th century) and was a meditation on each part of Christ's body on the cross. Paul Gerhardt translated and adapted the final section (addressing Christ's head) into German in 1656. James W. Alexander translated it into English. J.S. Bach used the tune five times in his St. Matthew Passion (1727), cementing it as one of the most theologically significant pieces of music in Western history.",
    theology: "This hymn is a direct address to the suffering Christ on the cross — intimate, personal, and unsparing about the physical horror of crucifixion. 'What thou, my Lord, has suffered was all for sinners' gain' captures the substitutionary logic. The response is complete surrender: 'Lord, let me never, never outlive my love for thee.'",
    line_by_line: "Each verse is a meditation on Christ's suffering — the crown of thorns, the mocking, the wounds. The hymn moves through grief at Christ's suffering, conviction about one's own sin as the cause, and devotion as the response.",
    why_significant: "One of the oldest continuously used hymns in Christian worship. Its use by Bach in the St. Matthew Passion makes it one of the most culturally significant pieces of Christian music. Deeply Christocentric and theologically rich.",
    scripture: "Isaiah 53:4-5; Galatians 2:20",
    initials: "OSH",
  },
  {
    title: "And Can It Be",
    author: "Charles Wesley",
    year: 1738,
    era: "18th Century",
    color: "#F59E0B",
    tune: "Sagina (Thomas Campbell, 1825)",
    story: "Written by Charles Wesley in 1738 — the same year as his conversion and his brother John's Aldersgate experience. The hymn was written within days of Charles Wesley's conversion on May 21, 1738. It is therefore not a reflection on Christianity from distance but a burst of gratitude from someone who had just, for the first time, understood that the love of God was personally for him. The famous line 'Amazing love! How can it be that thou, my God, shouldst die for me?' captures the disbelieving gratitude of a new convert.",
    theology: "And Can It Be is simultaneously a hymn about the atonement (Christ's death), adoption (freed from sin), and assurance (bold I approach the eternal throne). The third verse contains one of the most dramatic images in English hymnody: 'Long my imprisoned spirit lay, fast bound in sin and nature's night; thine eye diffused a quickening ray — I woke, the dungeon flamed with light.' This is conversion as described from the inside.",
    line_by_line: "Verse 1: Wonder at the love that condescended. Verse 2: The kenosis — Christ emptied himself. Verse 3: Personal conversion — the dungeon of sin illuminated. Verse 4: No condemnation! Justified by faith. Verse 5: Bold access to the throne.",
    why_significant: "The most complete single-hymn summary of Methodist/Arminian evangelical theology. C.S. Lewis wrote that hearing Wesley's hymns first convinced him that Christianity had imaginative as well as intellectual weight.",
    scripture: "Romans 8:1; Ephesians 3:17-19",
    initials: "ACB",
  },
  {
    title: "Come, Thou Fount of Every Blessing",
    author: "Robert Robinson",
    year: 1757,
    era: "18th Century",
    color: "#10B981",
    tune: "Nettleton (Asahel Nettleton, 1825)",
    story: "Written in 1757 by Robert Robinson, who had been converted under George Whitefield's preaching at age 17. The hymn was written when Robinson was 22. Sadly, Robinson later fell away from the faith he had celebrated. The story goes that in his later years, Robinson was sitting next to a woman who was singing this hymn from a hymnbook. He asked what the song was, and she said it was one of her favorites. He reportedly said, 'Madam, I am the poor unhappy man who wrote that hymn many years ago; and I would give a thousand worlds, if I had them, to enjoy the feelings I had then.'",
    theology: "The hymn opens with a request for ongoing grace ('tune my heart to sing thy grace'), acknowledges the danger of spiritual wandering ('prone to wander, Lord, I feel it'), and asks for binding grace to hold the heart. The famous third verse — 'prone to wander, Lord, I feel it, prone to leave the God I love; here's my heart, O take and seal it, seal it for thy courts above' — is one of the most honest confessions of the believer's continuing vulnerability in all of Christian song.",
    line_by_line: "Verse 1: Gratitude and ongoing worship — 'tune my heart.' Verse 2: Ebenezer — remembering God's past help. Verse 3: The honest confession of the wandering heart and the plea for binding.",
    why_significant: "The third verse's honesty about spiritual vulnerability makes this unique among hymns of praise. Most praise songs celebrate achievement or experience; this one honestly confesses ongoing dependence and vulnerability.",
    scripture: "1 Samuel 7:12; Hebrews 3:13",
    initials: "CTF",
  },
  {
    title: "Be Thou My Vision",
    author: "Ancient Irish (8th c.); tr. Mary Byrne (1905); versified Eleanor Hull (1912)",
    year: 700,
    era: "17th Century",
    color: "#6366F1",
    tune: "Slane (Irish traditional melody)",
    story: "Originally an ancient Irish poem attributed to the 6th-century saint Dallán Forgaill, based on a prayer attributed to St. Patrick. The poem was preserved in Irish monasteries for over a thousand years before being translated into English by Mary Byrne in 1905 and versified for singing by Eleanor Hull in 1912. The melody 'Slane' is an Irish traditional melody associated with the hill where Patrick reportedly lit a Paschal fire in defiance of the pagan king's edict — a beautiful example of the bold Celtic Christianity.",
    theology: "Be Thou My Vision is a prayer of total consecration — asking God to be vision, wisdom, word, true Father, treasure, and strong tower. The organizing theological idea is that God is not one concern among many but the organizing center of all things. The climactic verse: 'High King of heaven, my treasure thou art; naught be all else to me, save that thou art.' This is the Shema ('Hear O Israel, the LORD our God is one') transposed into Celtic poetry.",
    line_by_line: "Each verse asks God to be something different: vision (guiding light), wisdom (right thinking), word (foundation of speech), Father (relationship), treasure and strong tower (security), and finally High King (supreme loyalty).",
    why_significant: "One of the most ancient hymns still in regular use. The Celtic Christianity tradition from which it comes represents a distinctive and beautiful stream of Christian spirituality that preceded the divisions of the Reformation.",
    scripture: "Psalm 27:4; Deuteronomy 6:4-5",
    initials: "BMV",
  },
  {
    title: "A Mighty Fortress Is Our God",
    author: "Martin Luther",
    year: 1529,
    era: "17th Century",
    color: "#A855F7",
    tune: "Ein feste Burg (Luther himself)",
    story: "Written by Martin Luther around 1529 and based on Psalm 46. It became known as 'the battle hymn of the Reformation' — sung by Protestant armies marching into battle, by Christians facing martyrdom, and by congregations in every era of crisis. Luther wrote both words and tune, which was revolutionary — he deliberately wrote in common language and a strong, singable melody to make worship accessible to ordinary people.",
    theology: "The hymn opens with God as fortress (based on Psalm 46:1) and immediately engages the reality of spiritual warfare: 'For still our ancient foe doth seek to work us woe.' The third verse contains one of the strongest statements of the sufficiency of Christ in all of Christian hymnody: 'And though this world, with devils filled, should threaten to undo us, we will not fear, for God has willed his truth to triumph through us.' The final verse: 'Let goods and kindred go, this mortal life also; the body they may kill: God's truth abideth still, his kingdom is forever.'",
    line_by_line: "Verse 1: God as fortress and refuge against the enemy. Verse 2: Our own strength fails — Christ is the champion. Verse 3: Though filled with devils, we will not fear — God's word stands. Verse 4: Willingness to lose everything — goods, kindred, life — because the kingdom is forever.",
    why_significant: "The defining hymn of the Protestant Reformation and one of the most theologically dense hymns ever written. Frederick Hedge's 1852 translation has become the standard English version.",
    scripture: "Psalm 46; Ephesians 6:10-17",
    initials: "AMF",
  },
  {
    title: "Great Is Thy Faithfulness",
    author: "Thomas Chisholm",
    year: 1923,
    era: "20th Century",
    color: "#EC4899",
    tune: "Faithfulness (William Runyan, 1923)",
    story: "Written by Thomas Chisholm — a Methodist minister who suffered chronic illness throughout his life. Chisholm wrote the hymn not from a dramatic moment of crisis but from a lifetime of observing God's daily faithfulness through ordinary circumstances. He wrote to hymnist William Runyan: 'My income has not been large at any time due to impaired health in the earlier years which has followed me on until now. However, I must not fail to record here the unfailing faithfulness of a covenant-keeping God and that He has given me many wonderful blessings.'",
    theology: "Great Is Thy Faithfulness is the musical expression of Lamentations 3:22-23 ('His mercies are new every morning; great is your faithfulness'). The central claim is not emotional — it is doctrinal: the faithfulness of God is as dependable as the rising of the sun, the turning of the seasons. Pardon, peace, and presence in the past; strength, hope, and provision in the future — all grounded in divine faithfulness.",
    line_by_line: "Verse 1: God's character — no shadow of turning, no changing. Verse 2: Creation and seasons testifying to faithfulness. Verse 3: Personal testimony — pardon, peace, presence.",
    why_significant: "Particularly meaningful in seasons of loss and disorientation — the claim that God's faithfulness does not depend on our experience of it. Billy Graham reportedly called this his favorite hymn.",
    scripture: "Lamentations 3:22-23; Malachi 3:6",
    initials: "GTF",
  },
  {
    title: "Holy, Holy, Holy",
    author: "Reginald Heber",
    year: 1826,
    era: "19th Century",
    color: "#F59E0B",
    tune: "Nicaea (John B. Dykes, 1861)",
    story: "Written by Reginald Heber — Bishop of Calcutta, missionary, and one of the great hymnwriters of the 19th century. Heber wrote it for Trinity Sunday — the one Sunday in the church year specifically celebrating the doctrine of the Trinity. It is directly based on Isaiah 6 (the seraphim's trisagion — 'holy, holy, holy') and Revelation 4:8. Heber died in India at 43, shortly after becoming Bishop of Calcutta.",
    theology: "Holy, Holy, Holy is the great Trinitarian hymn of the English tradition — directly addressing 'God in three Persons, blessed Trinity.' The repetition of 'holy' three times is both a Hebraic superlative (holy of holies = most holy) and a Trinitarian affirmation. The hymn is notable for including the darkness alongside worship: 'Though the darkness hide thee, though the eye of sinful man thy glory may not see.' Faith acknowledges God's hiddenness without abandoning worship.",
    line_by_line: "Verse 1: Opening Trinitarian acclamation — morning worship. Verse 2: The cherubim and seraphim of Isaiah 6 and Revelation 4. Verse 3: Though darkness hides, only God is holy. Verse 4: All works praise him — heaven and earth.",
    why_significant: "Tennyson called it the finest hymn in the English language. It remains one of the most theologically precise hymns ever written, combining Scripture from both Testaments in a single unified act of worship.",
    scripture: "Isaiah 6:3; Revelation 4:8",
    initials: "HHH",
  },
  {
    title: "When I Survey the Wondrous Cross",
    author: "Isaac Watts",
    year: 1707,
    era: "18th Century",
    color: "#EF4444",
    tune: "Rockingham (Edward Miller, 1790)",
    story: "Written by Isaac Watts — the 'father of English hymnody' — for a Communion service at Mark Lane Independent Chapel in London. Watts was the first English hymnwriter to consistently use original poetry rather than just versified Psalms. The hymn is based on Galatians 6:14 ('May I never boast except in the cross of our Lord Jesus Christ'). Matthew Arnold called it 'the greatest hymn in the English language.' John Wesley said he would give up all other poems to have written the last verse.",
    theology: "When I Survey is a meditation on the cross that moves through survey (contemplating it), response (boasting forbidden), identification (Christ's grief felt personally), and surrender (the richest gain is counted loss). The final verse — 'Were the whole realm of nature mine, that were an offering far too small; love so amazing, so divine, demands my soul, my life, my all' — is perhaps the most concentrated statement of consecration in all of Christian hymnody.",
    line_by_line: "Verse 1: The cross as the object of all boasting. Verse 2: Sorrow and love — both flow from the cross. Verse 3: The mingling of his blood and the crown of thorns. Verse 4: The total response — soul, life, all.",
    why_significant: "Matthew Arnold's assessment ('the greatest hymn in the English language') is shared by many. The final verse achieves something rare in Christian song: the intellect, emotion, and will simultaneously moved to total surrender.",
    scripture: "Galatians 6:14; John 3:16",
    initials: "WIC",
  },
];

const HYMN_THEOLOGY = [
  {
    id: "sovereignty",
    doctrine: "Sovereignty of God",
    icon: "👑",
    description: "The doctrine that God governs all of creation, history, and salvation according to his own perfect will. Hymns that explore this doctrine do not minimize human suffering or agency but locate both within a larger providential order that is good and trustworthy.",
    hymn_examples: ["A Mighty Fortress Is Our God", "Great Is Thy Faithfulness", "How Great Thou Art"],
  },
  {
    id: "grace-atonement",
    doctrine: "Grace & Atonement",
    icon: "✝️",
    description: "The twin doctrines that salvation is entirely unmerited (grace) and that Christ's death was the sufficient substitute for the penalty of sin (atonement). These are the most frequently explored doctrines in Christian hymnody because they address the most fundamental human need.",
    hymn_examples: ["Amazing Grace", "And Can It Be", "When I Survey the Wondrous Cross", "O Sacred Head Now Wounded"],
  },
  {
    id: "trinity",
    doctrine: "The Trinity",
    icon: "△",
    description: "The Christian conviction that God is one Being in three co-equal Persons: Father, Son, and Holy Spirit. Trinitarian theology is not a philosophical curiosity but the shape of Christian worship — addressed to Father, accomplished by Son, empowered by Spirit.",
    hymn_examples: ["Holy, Holy, Holy", "Be Thou My Vision"],
  },
  {
    id: "resurrection",
    doctrine: "The Resurrection",
    icon: "☀️",
    description: "The historical and theological claim that Jesus Christ rose bodily from the dead on the third day, and that this resurrection is the guarantee and first-fruit of the resurrection of all believers. The resurrection is not merely a comfort — it is the foundation of Christian hope.",
    hymn_examples: ["And Can It Be", "It Is Well with My Soul", "How Great Thou Art"],
  },
  {
    id: "christian-hope",
    doctrine: "Christian Hope",
    icon: "⚓",
    description: "The forward-looking dimension of Christian faith — the assurance that Christ will return, the dead will be raised, and all things will be made new. Christian hope is not wishful thinking but confident expectation grounded in the resurrection.",
    hymn_examples: ["It Is Well with My Soul", "Great Is Thy Faithfulness", "A Mighty Fortress Is Our God", "Come, Thou Fount of Every Blessing"],
  },
];

const HYMN_HISTORY = [
  {
    id: "early-church",
    era: "Early Church",
    period: "1st – 5th Century",
    description: "The earliest Christian hymns were drawn from the Psalms and the New Testament canticles (Magnificat, Benedictus, Gloria). Greek-speaking Christians developed hymns like the Phos Hilaron (3rd century), still sung in Orthodox vespers. Latin hymns, popularized by Ambrose of Milan (340–397), became the standard form of Western liturgical hymnody.",
    significance: "Established hymnody as the primary vehicle for teaching doctrine to ordinary Christians. Ambrose deliberately used meter and melody to embed theology in memory — an insight that shaped every subsequent era of Christian song.",
    key_figures: ["Ambrose of Milan", "Clement of Alexandria", "Prudentius", "Ephrem the Syrian"],
  },
  {
    id: "reformation",
    era: "Reformation",
    period: "16th Century",
    description: "Martin Luther's conviction that ordinary people should understand and participate in worship drove him to compose vernacular German hymns. His 'Ein feste Burg' (1529) became the battle hymn of the Reformation. Calvin preferred strict Psalm-singing; the Genevan Psalter (1562) set all 150 Psalms to meter. Lutheran hymnody flourished in composers like Paul Gerhardt (1607–1676).",
    significance: "Broke the monopoly of clerical Latin and gave congregational song to the people. Luther's hymns were arguably as important as his theology in spreading the Reformation — people sang their way into new convictions.",
    key_figures: ["Martin Luther", "Paul Gerhardt", "Johann Sebastian Bach", "Louis Bourgeois (Genevan Psalter)"],
  },
  {
    id: "18th-century-revival",
    era: "18th Century Revival",
    period: "18th Century",
    description: "Isaac Watts (1674–1748) broke from strict Psalmody and wrote original hymns expressing New Testament theology — earning the title 'Father of English Hymnody.' Charles Wesley (1707–1788) wrote over 6,000 hymns for the Methodist movement. Philip Doddridge, John Newton, and William Cowper produced the Olney Hymns (1779), including Amazing Grace.",
    significance: "The Great Awakening in Britain and America was carried partly through hymnody. Wesley's hymns functioned as portable catechisms — people who could not read theology absorbed it through song. Watts established that original hymnody was legitimate, freeing all subsequent generations.",
    key_figures: ["Isaac Watts", "Charles Wesley", "John Wesley", "John Newton", "William Cowper"],
  },
  {
    id: "19th-century",
    era: "19th Century",
    period: "19th Century",
    description: "The 19th century produced both the refined cathedral hymns of the Anglican tradition (Reginald Heber, John Henry Newman) and the raw Gospel songs of American revivalism (Fanny Crosby, Philip Bliss). The Sacred Harp tradition preserved older a cappella harmony singing. D.L. Moody and Ira Sankey's evangelistic campaigns popularized the Gospel song form worldwide.",
    significance: "The democratization of Christian music accelerated. Gospel songs were simpler, more emotional, and more accessible than classical hymnody — enabling mass participation in worship. The tension between high-church hymns and Gospel songs reflects the theological diversity of the era.",
    key_figures: ["Fanny Crosby", "Philip Bliss", "Ira Sankey", "Reginald Heber", "Horatio Spafford"],
  },
  {
    id: "20th-century",
    era: "20th Century",
    period: "20th Century",
    description: "The 20th century saw hymnody fragment into multiple streams: traditional hymn preservation, African-American spirituals and gospel, charismatic praise and worship, and the folk revival of the 1960s-70s. The Maranatha! and Vineyard movements pioneered contemporary worship music. Billy Graham's crusades, always featuring George Beverly Shea and the hymn repertoire, kept classical hymnody alive in mass evangelism.",
    significance: "The tension between traditional hymnody and contemporary worship music became one of the defining conflicts in Western Christianity. The best contemporary worship drew on the hymn tradition; the worst abandoned theological depth for emotional immediacy.",
    key_figures: ["Thomas Chisholm", "Stuart Hine", "George Beverly Shea", "Bill Gaither", "Ralph Carmichael"],
  },
  {
    id: "today",
    era: "Today",
    period: "21st Century",
    description: "The global worship movement has produced a new generation of theologically rich congregational songs. Keith and Kristyn Getty (In Christ Alone, 2001) pioneered the 'modern hymn' form — contemporary melody with classical theological content. Hillsong, Bethel, and other worship movements have made Australian and American worship music globally dominant. African, Asian, and Latin American hymn traditions are gaining wider recognition.",
    significance: "The best 21st-century hymnody represents a retrieval project — bringing back the doctrinal seriousness of classical hymnody in forms accessible to contemporary congregations. The global diversification of worship music is enriching the Western tradition with voices it had ignored.",
    key_figures: ["Keith Getty", "Kristyn Getty", "Stuart Townend", "Matt Redman", "Fernando Ortega"],
  },
];

const VOICES_HYM = [
  {
    id: "watts",
    name: "Isaac Watts",
    era: "1674–1748",
    context: "Father of English Hymnody",
    bio: "Isaac Watts grew up in a Nonconformist family in Southampton, England. As a young man, he complained to his father that the Psalm-singing in their church was dull and uninspiring. His father challenged him to do better — and he wrote his first hymn that same week. Over his lifetime, Watts wrote approximately 750 hymns, including 'When I Survey the Wondrous Cross,' 'O God Our Help in Ages Past,' and 'Joy to the World.' He suffered from chronic illness throughout his life and spent his final years as an invalid guest in the home of Sir Thomas Abney — where he stayed for 36 years.",
    quote: "Were the whole realm of nature mine, that were an offering far too small; love so amazing, so divine, demands my soul, my life, my all.",
    contribution: "Watts broke the stranglehold of strict Psalmody and established that original Christian poetry — expressing New Testament theology directly — was legitimate and necessary. Every English hymn written after Watts stands on his shoulders. Matthew Arnold called 'When I Survey the Wondrous Cross' the greatest hymn in the English language.",
  },
  {
    id: "cwesley",
    name: "Charles Wesley",
    era: "1707–1788",
    context: "Methodist hymnwriter; 6,000 hymns",
    bio: "Charles Wesley was the eighteenth child of Samuel and Susanna Wesley, and the younger brother of John Wesley. He was educated at Christ Church, Oxford, where he formed the 'Holy Club' — the group mockingly called 'Methodists.' His conversion on May 21, 1738 — three days before his brother John's Aldersgate experience — was immediate and overwhelming. He wrote 'And Can It Be' within days of his conversion. For the rest of his life, Wesley poured his theology into hymns — writing approximately 6,000, including 'Hark! The Herald Angels Sing,' 'O for a Thousand Tongues to Sing,' and 'Love Divine, All Loves Excelling.'",
    quote: "Long my imprisoned spirit lay, fast bound in sin and nature's night; thine eye diffused a quickening ray — I woke, the dungeon flamed with light.",
    contribution: "Wesley's hymns functioned as a portable systematic theology for the Methodist movement. People who could not afford or read theology absorbed it through Wesley's songs. His combination of doctrinal precision, emotional warmth, and poetic beauty has never been equaled in the history of English hymnody.",
  },
  {
    id: "crosby",
    name: "Fanny Crosby",
    era: "1820–1915",
    context: "Blind poet; 8,000 Gospel songs",
    bio: "Frances Jane Crosby was blinded by a medical error at six weeks old. Rather than lamenting her blindness, she famously said she was grateful for it — believing that the first face she ever saw clearly would be the face of Jesus. She began writing poetry as a child and eventually became the most prolific hymn-writer in American history, producing approximately 8,000 Gospel songs under more than 200 pseudonyms. Her hymns include 'Blessed Assurance,' 'To God Be the Glory,' 'Pass Me Not, O Gentle Savior,' and 'Jesus, Keep Me Near the Cross.' She lived to 94 and was still writing hymns in her final years.",
    quote: "Blessed assurance, Jesus is mine! O what a foretaste of glory divine! Heir of salvation, purchase of God, born of his Spirit, washed in his blood.",
    contribution: "Crosby's hymns democratized evangelical devotion — accessible to anyone, emotionally immediate, theologically sound. Her personal testimony as a blind woman who found fullness of life in Christ gave her hymns an authority that purely intellectual compositions could not match.",
  },
  {
    id: "toplady",
    name: "Augustus Toplady",
    era: "1740–1778",
    context: "Calvinist minister; Rock of Ages",
    bio: "Augustus Montague Toplady was an Anglican clergyman and fierce Calvinist who was one of John Wesley's most vigorous theological opponents. He was converted at age 16 in a barn in Ireland by an unlearned lay preacher. He died of tuberculosis at 37. Despite his short life, he is remembered almost entirely for one hymn — 'Rock of Ages,' written in 1776 — which became one of the most beloved hymns in the English-speaking world. The hymn is said to have been written while Toplady sheltered from a storm in a rock cleft in Burrington Combe, Somerset.",
    quote: "Rock of Ages, cleft for me, let me hide myself in thee; let the water and the blood, from thy riven side which flowed, be of sin the double cure — cleanse me from its guilt and power.",
    contribution: "Toplady's 'Rock of Ages' achieved something unusual: a hymn that is simultaneously a precise theological statement about substitutionary atonement and an intimate cry of personal helplessness. The line 'Nothing in my hand I bring, simply to the cross I cling' summarizes the Reformation doctrine of grace in a single line.",
  },
  {
    id: "getty",
    name: "Keith & Kristyn Getty",
    era: "1974– / 1980–",
    context: "Modern hymn movement pioneers",
    bio: "Keith Getty was born in Northern Ireland and trained as a classical musician. He began writing hymns with theologian Stuart Townend, producing 'In Christ Alone' in 2001 — arguably the most significant new hymn of the 21st century. He married Kristyn, who became the primary vocalist and creative partner. Together they founded the 'modern hymn' movement, deliberately seeking to combine the theological depth of classical hymnody with contemporary melodic accessibility. Their annual Sing! conference draws thousands of church musicians and pastors to reclaim congregational singing as a theological act.",
    quote: "In Christ alone my hope is found; he is my light, my strength, my song; this cornerstone, this solid ground, firm through the fiercest drought and storm.",
    contribution: "The Gettys demonstrated that it was possible to write theologically serious, doctrinally precise hymns that congregations would actually sing. 'In Christ Alone' has become standard in evangelical churches across denominations worldwide — the first new hymn in generations to achieve that status.",
  },
];

export default function GreatHymnsExplainedPage() {
  const [activeTab, setActiveTab] = useState<Tab>("hymns");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<string>(VOICES_HYM[0].id);

  const filtered = HYMNS.filter(h => era === "All" || h.era === era);
  const hymn = HYMNS.find(h => h.title === selected);
  const activeVoice = VOICES_HYM.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Great Hymns Explained</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The stories, theology, and line-by-line meaning behind the hymns that have shaped Christian worship for centuries. Understanding why they were written changes everything about singing them.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>🎼</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            &ldquo;When you know why a hymn was written — the grief, the crisis, the insight — you will never sing it the same way again. These are not compositions; they are testimonies set to music.&rdquo; Every great hymn has a story.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 6, flexWrap: "wrap" }}>
          {(["hymns", "theology", "history", "voices"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "hymns" ? "Hymns" : t === "theology" ? "Theology" : t === "history" ? "History" : "Voices"}
            </button>
          ))}
        </div>

        {/* Hymns tab */}
        {activeTab === "hymns" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERA_FILTERS.map(e => (
                <button key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: hymn ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((h, i) => (
                  <button key={i} onClick={() => setSelected(selected === h.title ? null : h.title)}
                    style={{ background: selected === h.title ? `${h.color}12` : CARD, border: `1px solid ${selected === h.title ? h.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${h.color}20`, border: `1px solid ${h.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: h.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {h.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{h.title}</span>
                          <span style={{ background: `${h.color}15`, color: h.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{h.era}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{h.author.split(";")[0]} · {h.year}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {hymn && (
                <div style={{ background: CARD, border: `1px solid ${hymn.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div>
                      <h2 style={{ color: hymn.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{hymn.title}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{hymn.author} · {hymn.year}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2, fontStyle: "italic" }}>Tune: {hymn.tune}</div>
                    </div>
                  </div>

                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, marginBottom: 14, display: "inline-block" }}>{hymn.scripture}</span>

                  <div style={{ marginBottom: 14, marginTop: 10 }}>
                    <div style={{ color: hymn.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THE STORY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{hymn.story}</p>
                  </div>

                  <div style={{ background: `${hymn.color}08`, border: `1px solid ${hymn.color}20`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: hymn.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEOLOGY</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{hymn.theology}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>VERSE BY VERSE</div>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, margin: 0 }}>{hymn.line_by_line}</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>WHY SIGNIFICANT</div>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, margin: 0 }}>{hymn.why_significant}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Theology tab */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {HYMN_THEOLOGY.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{entry.icon}</span>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0 }}>{entry.doctrine}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}>{entry.description}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>HYMNS THAT TEACH THIS DOCTRINE</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {entry.hymn_examples.map(h => (
                      <span key={h} style={{ background: `${PURPLE}15`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* History tab */}
        {activeTab === "history" && (
          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: BORDER }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {HYMN_HISTORY.map((entry, i) => (
                <div key={entry.id} style={{ position: "relative", paddingBottom: 32 }}>
                  <div style={{ position: "absolute", left: -27, top: 20, width: 14, height: 14, borderRadius: "50%", background: PURPLE, border: `2px solid ${BG}` }} />
                  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 17, margin: 0 }}>{entry.era}</h3>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{entry.period}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>{entry.description}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>SIGNIFICANCE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{entry.significance}</p>
                    </div>
                    <div>
                      <div style={{ color: MUTED, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY FIGURES</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {entry.key_figures.map(f => (
                          <span key={f} style={{ background: BORDER, color: TEXT, padding: "3px 10px", borderRadius: 8, fontSize: 12 }}>{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices tab */}
        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
              {VOICES_HYM.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 800, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 6 }}>
                <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{activeVoice.name}</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{activeVoice.era}</span>
                  <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{activeVoice.context}</span>
                </div>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "16px 0" }}>{activeVoice.bio}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>SIGNATURE LINES</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                  &ldquo;{activeVoice.quote}&rdquo;
                </p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>CONTRIBUTION TO HYMNODY</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{activeVoice.contribution}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
