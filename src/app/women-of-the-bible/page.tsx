"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState, useEffect, useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const GREEN = "#3a7d56";

type WobTab = "overview" | "ot" | "nt" | "faith" | "leadership" | "themes" | "journal" | "videos";

interface JEntry {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
}

const TABS: { id: WobTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "ot", label: "Old Testament" },
  { id: "nt", label: "New Testament" },
  { id: "faith", label: "Women of Faith" },
  { id: "leadership", label: "Leadership" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const OT_WOMEN = [
  {
    id: "eve",
    name: "Eve",
    reference: "Genesis 2–3",
    color: GOLD,
    summary: "The first woman, made from Adam's side — not from his head to rule him, nor from his feet to be beneath him, but from his side to stand beside him.",
    content: `The word translated "helper" (Hebrew: ezer kenegdo) is a rich, powerful term that should never be read as subordinate or secondary. Ezer appears 21 times in the Hebrew Bible: twice for the woman in Genesis 2, and 16 times for God himself — particularly in contexts of saving help when human strength is insufficient (Psalm 121:2, "My help comes from the LORD"). Ezer kenegdo means "a help corresponding to him" — a counterpart, a complement, a strength that meets him face to face. This is not a diminished assistant; this is a necessary partner without whom Adam is described as alone in a not-good state.

The fall narrative is complex and morally layered. Eve is deceived (1 Timothy 2:14); Adam, standing with her (Genesis 3:6 — he was there), chooses knowingly. The consequences fall on both, and the distortion of the male-female relationship is named as a consequence of the fall (3:16), not its design. What is remarkable, and often overlooked, is that Eve is the first human to receive the proto-evangelium — the first gospel promise. God speaks to the serpent: "I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel" (Genesis 3:15). The promised deliverer comes through the woman. Long before any man is named as the carrier of redemption's hope, it is the woman who stands in the shadow of that promise.`,
  },
  {
    id: "sarah",
    name: "Sarah",
    reference: "Genesis 12–23",
    color: PURPLE,
    summary: "Barren and laughing, Sarah becomes the mother of nations — her body the theater where God's impossible promise plays out.",
    content: `Sarah's story begins with a fact the text does not soften: she was barren (Genesis 11:30). In the ancient Near East, barrenness was not merely a medical condition — it was a social catastrophe and, in some theological frameworks, a sign of divine disfavor. Into this reality, God calls Abram and promises to make him "a great nation." The promise seems to be immediately contradicted by his wife's body.

The narrative follows Sarah through decades of waiting — long enough that she herself suggests a workaround (Hagar, Genesis 16), an act that produces lasting consequences still felt in the Middle East today. When God announces the pregnancy at ages 90 and 99, Sarah laughs — a laugh of incredulity (Genesis 18:12), which she then denies, only to be confronted by God's gentle precision: "No, but you did laugh." But the baby is named Isaac, which means "he laughs" — and at his birth, Sarah's laughter changes: "God has brought me laughter, and everyone who hears about this will laugh with me" (Genesis 21:6). The doubt-laugh becomes the joy-laugh.

The New Testament holds Sarah as a pillar of faith. Hebrews 11:11 says: "And by faith even Sarah, who was past childbearing age, was enabled to bear children because she considered him faithful who had made the promise." Peter holds her up as an example of holy women who trusted God (1 Peter 3:5-6). Paul, in Galatians 4, uses Sarah and Hagar as an allegory for the two covenants — the child of promise versus the child of the flesh. Sarah, the barren one, becomes the mother of all who belong to the covenant of grace.`,
  },
  {
    id: "miriam",
    name: "Miriam",
    reference: "Exodus 15; Numbers 12",
    color: TEAL,
    summary: "Prophetess, worship leader, and leader of Israel — her story holds both extraordinary gift and sobering consequence.",
    content: `Miriam first appears in the story as a young girl watching over her brother Moses in the basket on the Nile (Exodus 2), quick-thinking and bold. When Pharaoh's daughter finds the baby, it is Miriam who steps forward and offers to find a Hebrew nurse — and brings back their own mother. She is a mover before she is named.

In Exodus 15, following the crossing of the Red Sea, Miriam is explicitly called "the prophetess" (ha-nebi'ah) — one of only a handful of women given this title in the Old Testament. She leads the women of Israel in worship, taking a tambourine and singing the first song recorded in the Bible after the Sea: "Sing to the LORD, for he is highly exalted. Both horse and driver he has hurled into the sea." This is not background music. This is corporate liturgy led by a woman called a prophetess.

In Micah 6:4, God himself speaks of the Exodus leadership as a trio: "I sent Moses to lead you, also Aaron and Miriam." Miriam is named alongside her brothers as one of Israel's three leaders in the wilderness.

Numbers 12 is the complex chapter — Miriam and Aaron challenge Moses's unique role, using his Cushite wife as a pretext. The consequence falls on Miriam alone (not Aaron), which has generated much interpretive discussion. What is clear is the gravity of the judgment and the intercession of Moses on her behalf. The complexity of Miriam's story — great gift, genuine leadership, painful failure, grace — mirrors many of our own.`,
  },
  {
    id: "deborah",
    name: "Deborah",
    reference: "Judges 4–5",
    color: GREEN,
    summary: "Judge over all Israel and prophetess — in the text, no apology is made, no exception noted. She led, and God used her.",
    content: `Deborah's introduction in Judges 4:4 is striking for what it does not do. It does not explain, justify, or apologize. It simply states: "Now Deborah, a prophet, the wife of Lappidoth, was leading Israel at that time." The text narrates her leadership as a matter of fact. She held court under the Palm of Deborah between Ramah and Bethel. All Israel came to her to have their disputes decided (Judges 4:5).

When the military crisis comes — Sisera and the nine hundred iron chariots of Jabin — Deborah summons Barak and delivers the word of the LORD to him: go to Mount Tabor with ten thousand men. Barak's response is significant: "If you go with me, I will go; but if you don't go with me, I won't go." He will not move without her. Deborah goes, and delivers the victory — though she prophesies that the honor of killing Sisera will go to a woman, not to Barak. That honor falls to Jael, another woman who acts with decisive courage.

Chapter 5, the Song of Deborah, is one of the oldest poems in the Hebrew Bible — possibly one of the oldest texts in all of Scripture. Its poetry is archaic, vivid, fierce. Deborah is called "a mother in Israel" (5:7) — a title of honor for someone who delivers and nurtures the people of God. The song celebrates the stars fighting for Israel, the river Kishon sweeping the enemy away, the courage of those who came to help and the shame of those who did not.

What should we make of Deborah? The text never says: "because no man would step up, God had to use a woman." That interpretation is imported into the story, not drawn from it. It says: there was a prophet and judge in Israel. Her name was Deborah.`,
  },
  {
    id: "ruth",
    name: "Ruth",
    reference: "Book of Ruth",
    color: GOLD,
    summary: "A Moabite widow whose loyal love (hesed) carries her into the lineage of David and Jesus himself.",
    content: `The Book of Ruth is a four-chapter masterpiece of narrative theology. It begins with famine, exile, and the death of three men — leaving Naomi bereft in a foreign land with two daughters-in-law. When she releases them to return to their own peoples, Orpah goes, but Ruth "clung to her" (1:14). Her declaration to Naomi (1:16-17) has become one of the most famous speeches of loyalty in world literature:

"Where you go I will go, and where you stay I will stay. Your people will be my people and your God will be my God. Where you die I will die, and there I will be buried. May the LORD deal with me, be it ever so severely, if even death separates you and me."

The key theological word in Ruth is hesed — the Hebrew word for covenant loyalty, steadfast love, lovingkindness. The word appears repeatedly and is used of both Ruth's loyalty to Naomi and of God's faithfulness to his people. Ruth's hesed to Naomi becomes the human reflection of God's hesed to Israel.

Ruth, a Moabite — from a people who originated from an incestuous act and whom Deuteronomy 23:3 bars from the assembly — becomes not only welcomed into Israel but woven into the very genealogy of the Messiah. Matthew 1 lists her among Jesus's ancestors. The outsider, the widow, the one without status: brought near. This is the gospel in narrative form.

The kinsman-redeemer (go'el) theology of Ruth foreshadows Christ. Boaz, the close relative who has the right and willingness to redeem Naomi's land and take Ruth as wife, is a picture of the one who, having the right (divinity) and the willingness (love), steps in to redeem what was lost.`,
  },
  {
    id: "hannah",
    name: "Hannah",
    reference: "1 Samuel 1–2",
    color: TEAL,
    summary: "Out of anguished prayer and a vow kept, Hannah births both a son and a song that Mary will echo seven centuries later.",
    content: `Hannah's story is told with exquisite emotional precision. She is one of two wives — and her rival, Peninnah, has children while Hannah is barren, and "year after year" provokes her "until she wept and would not eat" (1 Samuel 1:7). This is not a theological abstraction; this is a woman in deep pain, publicly humiliated, privately devastated.

Hannah goes to the temple and prays — "in bitterness of soul" (1:10), "weeping much" — a prayer so fervent and internal that Eli the priest mistakes her for drunk and rebukes her. She corrects him with quiet dignity: "I am a woman who is deeply troubled. I have not been drinking wine or beer; I was pouring out my soul to the LORD. Do not take your servant for a wicked woman; I have been praying here out of my great anguish and grief." Eli's response, when he understands, becomes the words of peace: "Go in peace, and may the God of Israel grant you what you have asked of him." And she eats, and her face is no longer downcast.

Samuel is born. Hannah brings him to the temple to fulfill her vow — and before she returns home without her child, she prays the prayer called Hannah's Song (1 Samuel 2:1-10). This prayer is not a quiet benediction; it is a theological declaration:

"My heart rejoices in the LORD; in the LORD my horn is lifted high... There is no one holy like the LORD... He raises the poor from the dust and lifts the needy from the ash heap... The LORD brings death and makes alive; he brings down to the grave and raises up."

Seven centuries later, when Mary learns she is carrying the Son of God, she will pray the Magnificat — and the echoes of Hannah will ring through every line. "He has brought down rulers from their thrones but has lifted up the humble. He has filled the hungry with good things but has sent the rich away empty." The spiritual lineage from Hannah to Mary is one of the most beautiful threads in all of Scripture.`,
  },
  {
    id: "esther",
    name: "Esther",
    reference: "Book of Esther",
    color: PURPLE,
    summary: "The woman who acted \"for such a time as this\" — and in whom God's name is hidden but his hand is unmistakable.",
    content: `The Book of Esther contains one of the most famous phrases in the Bible — "for such a time as this" — and one of the most theologically interesting silences: the name of God appears nowhere in the book. This is not an accident of editing. It is a literary and theological choice that invites the reader to perceive what the characters cannot say openly: that the apparently coincidental chain of events — the king's insomnia, Mordecai's discovery of the assassination plot, the timing of Esther's banquet, the downfall of Haman — is the invisible hand of providence.

Esther's situation is precarious in multiple ways. She is Jewish in a Persian court where her identity is concealed. She is queen, but a queen with no standing to approach the king unbidden — the penalty for doing so is death unless he raises his golden scepter. When Mordecai brings word of Haman's plot to exterminate the Jews and urges her to go to the king, Esther's first response is practical and frightened: "All the king's officials and the people of the royal provinces know that for any man or woman who approaches the king in the inner court without being summoned the king has but one law: that they be put to death" (Esther 4:11).

Mordecai's reply is the crux: "Do not think that because you are in the king's house you alone of all the Jews will escape. For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father's family will perish. And who knows but that you have come to your royal position for such a time as this?"

The phrase is simultaneously a statement of faith (deliverance will come — one way or another, God's purposes will not be thwarted) and a call to courage (you, Esther, may be the agent God intends). Esther's response: she fasts, she calls the community to fast with her, and then she says, simply: "I will go to the king, even though it is against the law. And if I perish, I perish." This is the language of costly courage.`,
  },
  {
    id: "proverbs31",
    name: "The Proverbs 31 Woman",
    reference: "Proverbs 31:10-31",
    color: GREEN,
    summary: "Not a checklist for wives but a poem of praise — and in its original use, a description any virtuous person might receive.",
    content: `Proverbs 31:10-31 is an acrostic poem — each verse begins with a successive letter of the Hebrew alphabet — describing the eshet chayil, the "woman of valor" or "capable woman." In contemporary evangelical culture, the passage has become a devotional checklist for Christian wives, and the weight of it has often crushed women who read it as a productivity standard they can never meet.

The Hebrew word chayil is itself worth examining. It appears over 200 times in the Hebrew Bible and is most commonly translated "strength," "valor," or "might." When it is used of men, it is usually translated "men of valor" or "mighty men" — the same word used of the warriors of Israel. The eshet chayil is not a domestic paragon; she is a woman of strength and capability whose domain extends well beyond the household: she considers a field and buys it (v.16), she engages in trade (v.18), she opens her arms to the poor (v.20), she speaks with wisdom (v.26).

What is often missed is the liturgical context of the poem. In Jewish tradition, Proverbs 31 is sung by husbands to wives at the Shabbat table — not as a job description but as a hymn of praise. More than that, in first-century usage, the phrase eshet chayil was used as a general expression of praise for a virtuous person, regardless of gender. The same phrase is used of Ruth in Ruth 3:11: "All the people of my town know that you are a woman of noble character (eshet chayil)."

The woman is praised not primarily for her domestic output but for the character that undergirds it: "Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised" (v.30). The poem ends not with productivity metrics but with reverence for God.`,
  },
];

const NT_WOMEN = [
  {
    id: "mary",
    name: "Mary, Mother of Jesus",
    reference: "Luke 1–2; John 19; Acts 1",
    color: PURPLE,
    summary: "Theologian, sufferer, faithful disciple — her presence frames the entire story of salvation from the Annunciation to Pentecost.",
    content: `Mary's first recorded words in the Gospel of Luke are a question and a surrender. When the angel announces she will conceive the Son of the Most High, she asks: "How will this be, since I am a virgin?" — a reasonable, practical question. The angel explains. And then Mary speaks her fiat: "I am the Lord's servant. May your word to me be fulfilled" (Luke 1:38). This is not passive resignation; it is active, costly faith. The social consequences of an unexplained pregnancy in first-century Nazareth were severe: broken betrothal, public shame, and in the extreme, the legal possibility of death by stoning.

The Magnificat (Luke 1:46-55) is one of the great theological poems of Scripture. It belongs to the tradition of Hannah's Song and anticipates the Sermon on the Mount. Its categories are not merely emotional: God scatters the proud. God brings down rulers. God lifts up the humble. God fills the hungry and sends the rich away empty. This is not sentimentality — it is announcement of the coming reversal of the world order. That this declaration is placed in the mouth of a teenage girl from Galilee, before the birth, is itself a statement.

Simeon's prophecy at the Presentation cuts through the joy: "A sword will pierce your own soul too" (Luke 2:35). The sword comes at Golgotha. John 19:25 records that Mary stood at the foot of the cross — the verb is important. She did not collapse. She stood. She witnessed her son's death in the most brutal form the Roman empire had devised.

The last we see of Mary in Scripture is Acts 1:14: she is in the upper room with the disciples, "joining constantly in prayer," awaiting the Spirit at Pentecost. She is present from the Annunciation to Pentecost — she prays in at the beginning and prays in the Spirit at the end.`,
  },
  {
    id: "elizabeth",
    name: "Elizabeth",
    reference: "Luke 1:5-80",
    color: GOLD,
    summary: "The older woman who recognized what was happening before anyone was told — filled with the Spirit, she speaks the first beatitude of the New Testament.",
    content: `Elizabeth is introduced with careful attention: she is from the priestly line of Aaron, righteous and blameless before God, and she and Zechariah have no child "because Elizabeth was not able to conceive, and they were both very old" (Luke 1:7). She stands in the line of Sarah and Hannah — the barren woman in whom God is about to do something impossible.

When Mary arrives at Elizabeth's home, the infant John "leaped in her womb" (Luke 1:41) — the unborn prophet of the Most High recognizing the presence of the unborn Messiah. And Elizabeth, "filled with the Holy Spirit," speaks words that constitute the first explicit New Testament beatitude: "Blessed are you among women, and blessed is the child you will bear! But why am I so favored, that the mother of my Lord should come to me?"

What Elizabeth recognizes — by the Spirit — is not just that Mary is pregnant, but who she is carrying. She calls the unborn Jesus "my Lord." This is Christology voiced by an elderly woman, in her own living room, before Jesus has drawn a breath outside the womb. The Spirit illumines her; she speaks; and her speech becomes the foundation on which Mary's Magnificat is built.

Her final recorded words in the narrative are these: "Blessed is she who has believed that the Lord would fulfill his promises to her!" (Luke 1:45). This is the commendation that matters — not the miraculous pregnancy, not the social honor, but the faith that believes before seeing. Elizabeth's blessing of Mary is a blessing of her faith.`,
  },
  {
    id: "anna",
    name: "Anna",
    reference: "Luke 2:36-38",
    color: TEAL,
    summary: "Eighty-four years of faithful prayer and presence, and she becomes the first to proclaim Jesus to all who awaited redemption.",
    content: `Anna appears in Luke's Gospel in three verses, and those three verses are dense with detail. She is the daughter of Penuel, of the tribe of Asher — Luke records her lineage, grounding her in the covenant people. She had been married for seven years and then widowed, and "she was very old" — Luke says she was 84. She "never left the temple but worshiped night and day, fasting and praying."

This is not a passive or marginal figure. Decades of prayer and fasting, sustained presence in the house of God, a life organized entirely around seeking the face of God — this is the portrait of a contemplative whose life was itself an act of proclamation. She is explicitly called a "prophetess" (prophetis) — one of only a handful of women in Scripture given this designation.

When Mary and Joseph bring the infant Jesus to the temple, Anna "coming up to them at that very moment" — a moment Luke signals as precisely timed, not accidental — gave thanks to God and "spoke about the child to all who were looking forward to the redemption of Jerusalem."

Notice what the text does not say. It does not say she whispered. It does not say she spoke to a small group of women. It says she spoke about the child "to all" (Greek: pasin) who were looking for redemption. She is the first human evangelist of the New Testament — a widow, 84 years old, who had spent her long life waiting and worshiping and now, having seen the one she waited for, told everyone.`,
  },
  {
    id: "magdalene",
    name: "Mary Magdalene",
    reference: "Luke 8; John 19-20",
    color: PURPLE,
    summary: "Freed from seven demons, she becomes one of Jesus's closest disciples, funds his ministry, stands at the cross, and is the first witness of the resurrection.",
    content: `Mary Magdalene has suffered enormously from later tradition's conflation of her with the unnamed sinful woman of Luke 7 — a confusion with no textual basis that originated with Pope Gregory I in a 591 sermon and persisted for centuries. The text says nothing of the sort. What Luke 8:2 does say: she had seven demons cast out, and thereafter she "traveled about with him" and "was helping to support them out of her own means." She had financial resources. She gave them to Jesus's movement. She was there from early in the Galilean ministry.

She appears at the crucifixion (Matthew 27:56, Mark 15:40, John 19:25) when most of the male disciples had fled. She was at the burial, observing where the body was laid. She came to the tomb before dawn on the first day of the week. John's account of her encounter with the risen Jesus (John 20:11-18) is one of the most intimate scenes in all of Scripture: she weeps, searches, and then hears a single word — her name. "Mary." She turns: "Rabboni." Teacher.

Jesus then commissions her: "Go to my brothers and tell them..." Mary Magdalene becomes the first apostolic witness of the resurrection — sent to announce what she has seen. The early church gave her the title apostola apostolorum — apostle to the apostles. This title is significant. In first-century Judaism, the testimony of a woman was not accepted in a court of law. The fact that God chose women as the first witnesses to the most important event in history is either a liability (if one thinks like a first-century lawyer) or a statement about the kingdom's economy of honor.`,
  },
  {
    id: "mary-martha",
    name: "Mary and Martha",
    reference: "Luke 10; John 11",
    color: GREEN,
    summary: "Two sisters who together receive some of Jesus's most profound teaching — including the greatest \"I AM\" statement spoken to a woman.",
    content: `Mary and Martha appear in two major Gospel scenes, and in both, the sisters are differentiated but both are honored. In Luke 10:38-42, Martha is "distracted by all the preparations" while Mary "sat at the Lord's feet listening to what he said" — the posture of a disciple receiving teaching from a rabbi. Martha asks Jesus to send Mary to help; Jesus gently refuses: "Mary has chosen what is better, and it will not be taken from her."

It is important not to over-read this scene as a condemnation of practical service or as an endorsement of quietism. Jesus is not saying work is bad; he is saying that in this moment, sitting at his feet is the priority. What is theologically significant is that a woman is in the position of disciple receiving teaching — in first-century Judaism, women did not typically sit at the feet of rabbis. Jesus is normalizing what would have been unusual.

The John 11 scene is theologically weightier. Lazarus has died. Martha goes out to meet Jesus before he even enters the village. Their dialogue is one of the most theologically dense exchanges in the Gospels. Martha says: "Lord, if you had been here, my brother would not have died. But I know that even now God will give you whatever you ask." Jesus says: "Your brother will rise again." Martha replies with her theology: "I know he will rise again in the resurrection at the last day." And then Jesus speaks one of his greatest "I AM" declarations — not to Peter, not to the Twelve, but to Martha:

"I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?" Martha's answer is the fullest Christological confession in John outside of John 20:28: "Yes, Lord, I believe that you are the Messiah, the Son of God, who is to come into the world." The Gospel places this confession in the mouth of a woman.`,
  },
  {
    id: "samaritan",
    name: "The Samaritan Woman",
    reference: "John 4",
    color: GOLD,
    summary: "A theologically astute woman on the margins who receives Jesus's longest recorded personal conversation and becomes the first evangelist in Samaria.",
    content: `The encounter at Jacob's Well in John 4 is remarkable on multiple levels. Jesus initiates a conversation with a Samaritan (Jews and Samaritans had intense mutual hostility) who is a woman (crossing a gender boundary that made his disciples "surprised" when they returned, 4:27) in the middle of the day (which signals social isolation — women typically drew water in the morning with others). John is layering the boundary-crossings to make a point.

The conversation is the longest one-on-one dialogue Jesus has with any single individual in the Gospels. It moves through multiple registers: practical (water), personal ("you have had five husbands"), theological (the proper place to worship), and then Christological. When the woman raises the Messiah: "I know that Messiah (called Christ) is coming. When he comes, he will explain everything to us" — Jesus gives her the most direct self-disclosure in John's Gospel: "I, the one speaking to you — I am he." The great "I AM" first given to Moses at the burning bush (Exodus 3:14) is spoken to a Samaritan woman at a well.

The woman then "left her water jar, went back to the town and said to the people, 'Come, see a man who told me everything I ever did. Could this be the Messiah?'" (John 4:28-29). The people come out to investigate, and John notes: "Many Samaritans from that town believed in him because of the woman's testimony" (4:39). She is the first evangelist to the Samaritans. Her "testimony" — the Greek word is martyria, the same word used for formal witness — is the instrument of a harvest.

Jesus himself says to his disciples in this context: "Open your eyes and look at the fields! They are ripe for harvest" (4:35). The harvest of Samaria begins with a conversation Jesus should not have had, with a woman who had every reason to expect condemnation, and she goes and tells everyone she knows.`,
  },
  {
    id: "priscilla",
    name: "Priscilla",
    reference: "Acts 18; Romans 16:3-5; 1 Corinthians 16:19",
    color: TEAL,
    summary: "Named before her husband in four of six New Testament references, she teaches a brilliant male preacher the way of God more accurately.",
    content: `Priscilla (also called Prisca) and her husband Aquila are named six times in the New Testament. The pattern of naming is striking: in four of those six occurrences, Priscilla is named first (Acts 18:18, 18:26; Romans 16:3; 2 Timothy 4:19). In the ancient world, where men were conventionally listed first, this inversion almost certainly signals that Priscilla was the more prominent of the two — perhaps the more gifted teacher, the more public leader.

The most theologically significant scene is Acts 18:24-26. Apollos arrives in Ephesus — described as "a learned man, with a thorough knowledge of the Scriptures" who "spoke with great fervor" and "taught about Jesus accurately" though he "knew only the baptism of John." Priscilla and Aquila hear him preach, and "they invited him to their home and explained to him the way of God more adequately." They do not correct him publicly; they take him aside and teach him. And Apollos — this learned, accurate, fervent man — receives teaching from this couple, and his ministry is enhanced.

Paul's words in Romans 16:3-5 are also notable: "Greet Priscilla and Aquila, my co-workers in Christ Jesus. They risked their lives for me. Not only I but all the churches of the Gentiles are grateful to them. Greet also the church that meets at their house." Paul calls them synergous — co-workers, co-laborers, the same word he uses elsewhere for Timothy and Titus. They hosted a house church. They risked their lives for Paul. They taught Apollos.`,
  },
  {
    id: "lydia",
    name: "Lydia",
    reference: "Acts 16:11-15, 40",
    color: GOLD,
    summary: "A successful businesswoman whose heart God opened — and whose house became the first church on European soil.",
    content: `Lydia of Thyatira appears in Acts 16 as Paul crosses from Asia into Europe for the first time, in response to the Macedonian vision. He arrives in Philippi — "a leading city of that district of Macedonia and a Roman colony" — and on the Sabbath goes to the river, where a group of women have gathered to pray. Among them is Lydia, described as "a dealer in purple cloth from the city of Thyatira, who was a worshiper of God."

Purple cloth was expensive, associated with royalty and wealth. Lydia was a businesswoman with enough resources to maintain a household (oikos) in Philippi while being, apparently, from Thyatira (in modern Turkey). She was a person of means and status.

"The Lord opened her heart to respond to Paul's message" (16:14) — Luke's formulation is intentional: it is the Lord who opens; she responds. Lydia and her household are baptized, and then she insists: "If you consider me a believer in the Lord, come and stay at my house." She uses the conditional as a kind of challenge — don't treat your assessment of my faith as merely theoretical if you're not willing to accept hospitality. And Luke says: "she persuaded us."

Her house becomes the base of operations for Paul in Philippi. After Paul and Silas are released from prison (Acts 16:40), they return to Lydia's house to meet with "the brothers and sisters" there — the first European church, meeting in a businesswoman's home. The church at Philippi, to which Paul will later write the most affectionate of all his letters ("I thank my God every time I remember you"), began in Lydia's living room.`,
  },
];

const FAITH_CONTENT = [
  {
    id: "hebrews11",
    title: "Women in the Hall of Faith",
    color: PURPLE,
    content: `Hebrews 11 is the great catalog of faith — the "great cloud of witnesses" (12:1) who lived by trust in God's promises before those promises were fulfilled. Among them, two women are named explicitly.

Sarah: "And by faith even Sarah, who was past childbearing age, was enabled to bear children because she considered him faithful who had made the promise" (11:11). What is credited to Sarah is not her virtue, her domestic faithfulness, or her social role. It is her faith — the conviction that the one who promised was faithful enough to deliver on an impossible promise. This is the same structure of faith credited to Abraham.

Rahab: "By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient" (11:31). The mention of Rahab in Hebrews 11 is striking on multiple levels. She is a Canaanite — an outsider. She is identified by her occupation — a prostitute. And yet she is in the Hall of Faith. James 2:25 also cites her as a model of faith expressed in works. Matthew 1 includes her in the genealogy of Jesus. The consistent pattern of Scripture's treatment of Rahab is that her faith and her welcome of God's agents matter more than her origin and her occupation.

The "great cloud of witnesses" who surround the running of the Christian race (Hebrews 12:1) includes these women. Their lives are not footnotes to the main story of male heroes; they are witnesses in their own right, testifying to the faithfulness of God across generations.`
  },
  {
    id: "resurrection-witness",
    title: "Women as Resurrection Witnesses",
    color: TEAL,
    content: `All four Gospels agree on a remarkable fact: the first witnesses of Jesus's resurrection were women. Matthew names Mary Magdalene and the other Mary. Mark names Mary Magdalene, Mary the mother of James, and Salome. Luke names Mary Magdalene, Joanna, Mary the mother of James, and "the others with them." John focuses on Mary Magdalene.

This agreement across the Gospels is historically significant. In first-century Judaism and Roman law, women's testimony was not accepted in legal proceedings. The Jewish historian Josephus wrote: "Let not the testimony of women be admitted, on account of the levity and boldness of their sex." If the resurrection appearances to women were invented or embellished by early Christians, no one in their right mind would have invented them — women's testimony was a liability, not an asset, in the apologetic task.

The most plausible explanation for why all four Gospels agree that women were the first witnesses is: because they were. And if they were, then God deliberately chose women — in a culture that discounted their testimony — to be the first proclaimers of the event that is the foundation of the Christian faith.

This is not a minor detail. The deliberate choice of women as the first resurrection witnesses is a statement about the kingdom's economy. It echoes Hannah and the Magnificat: God lifts up the humble, fills the hungry, exalts those who are brought low. The first preachers of Easter were women whose testimony the world was culturally conditioned to dismiss. That is the gospel.`
  },
  {
    id: "female-imagery",
    title: "Female Imagery for God in Scripture",
    color: GOLD,
    content: `While the predominant language for God in Scripture uses masculine pronouns and father-imagery, there are significant passages that use female imagery to describe God's relationship with his people — and attending to them enriches our understanding of who God is.

Isaiah 66:13: "As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem." God describes his comfort with the intimacy and tenderness of a nursing mother. The same imagery appears in Isaiah 49:15: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" The point is not that mothers always remember — the point is that God's remembering surpasses even the most reliable form of human love.

Matthew 23:37 (Luke 13:34): Jesus says over Jerusalem: "How often I have longed to gather your children together, as a hen gathers her chicks under her wings, and you were not willing." The image is of a mother hen, wings spread, drawing in her vulnerable young. Jesus takes this image for himself: divine love expressed as maternal protectiveness.

Luke 15:8-10: The parable of the lost coin — usually grouped with the lost sheep and the prodigal son — features a woman who loses one coin, sweeps the whole house, searches carefully, and when she finds it, calls her friends and neighbors: "Rejoice with me; I have found my lost coin." Jesus says: "In the same way, I tell you, there is rejoicing in the presence of the angels of God over one sinner who repents." The woman in the parable is a figure for God in the act of joyful searching for the lost.

These images do not overturn the relational structure of Scripture (God as Father, Jesus as Son), but they resist any notion that masculinity is the defining category of the divine nature. God is beyond gender; his self-descriptions include the warmth of a nursing mother, the protectiveness of a nesting bird, and the determined joy of a woman who finds what she was looking for.`
  },
];

const LEADERSHIP_CONTENT = [
  {
    id: "ot-leaders",
    title: "Old Testament Women in Leadership",
    color: GREEN,
    content: `The Old Testament presents several women in roles of significant leadership and prophetic authority — with no apologetic note in the text.

Deborah (Judges 4-5) is called both a prophetess and a judge. She was the civil and judicial authority over Israel during her time — people came to her to have their disputes resolved. She directed the military campaign against Sisera. The text does not suggest this was exceptional, regrettable, or a second-best arrangement. She led, and God used her.

Huldah (2 Kings 22:14-20): When King Josiah's court finds the Book of the Law and wants to know what God requires, they do not send to a male prophet. They send to Huldah, a prophetess living in Jerusalem. She delivers the word of the LORD with the same prophetic formula used by Elijah and Jeremiah: "This is what the LORD says." She interprets the covenant document for the nation. Her prophecy is acted on. Jeremiah and Zephaniah were contemporaries — the court went to Huldah.

The daughters of Zelophehad (Numbers 27): When the daughters of a man who died with no sons come to Moses to argue for their right to inherit their father's land, Moses brings the case to God. God says: "What Zelophehad's daughters are saying is right. You must certainly give them property as an inheritance." Their advocacy changed Israelite inheritance law. Women could challenge structures and be vindicated by God.

The Proverbs 31 woman (discussed in OT section) runs a household economy, engages in commerce, manages servants, and is "respected at the city gate" (31:23) — the place of civic authority.`
  },
  {
    id: "nt-leaders",
    title: "New Testament Women in Leadership",
    color: TEAL,
    content: `The New Testament presents a cluster of women in roles that, at minimum, complicate simple readings of the restrictive texts.

Phoebe (Romans 16:1-2): Paul writes to the Romans asking them to "receive her in the Lord in a way worthy of his people and to give her any help she may need from you, for she has been the benefactor of many people, including me." Two words matter here. First, Paul calls her a diakonos — the same word used elsewhere for the office of deacon and for Paul's own ministry. Second, he calls her a prostatis — a word meaning patron, protector, leader, person of standing and authority. She was not merely serving; she was leading and supporting many, including the Apostle Paul himself.

Junia (Romans 16:7): "Greet Andronicus and Junia, my fellow Jews who have been in prison with me. They are outstanding among the apostles, and they were in Christ before I was." The name Junia is unambiguously female. The early church consistently read this verse as referring to a female apostle — John Chrysostom (4th century) said: "How great the wisdom of this woman, that she was even deemed worthy of the appellation of apostle!" The argument that "Junia" is a shortened form of a male name (Junias) has very little textual support. The word "outstanding among the apostles" can be read as "outstanding in the eyes of the apostles" (commended by them) or "outstanding among those who are apostles" (one of their number). The debate continues; but Junia is female.

Priscilla (discussed in NT section): Taught Apollos, hosted a church, called a co-worker by Paul.

Philip's four daughters (Acts 21:9): "He had four unmarried daughters who prophesied." Prophetic ministry — including public proclamation — was exercised by these women without restriction being noted.`
  },
  {
    id: "complementarian",
    title: "The Complementarian Position",
    color: PURPLE,
    content: `Complementarianism holds that men and women are equal in dignity, worth, and spiritual standing before God (Galatians 3:28), but that God has designed complementary roles: in the home, husbands are called to servant-leadership; in the church, the office of elder/pastor is reserved for qualified men. This is understood not as a concession to culture or a limitation of women's worth, but as the expression of God's creational design.

The key texts are 1 Timothy 2:12-14 and 1 Corinthians 14:34-35.

1 Timothy 2:12-14: "I do not permit a woman to teach or to assume authority over a man; she must be quiet. For Adam was formed first, then Eve; and Adam was not the one deceived; it was the woman who was deceived and became a sinner." Complementarians argue: (1) the grounding in creation order ("Adam was formed first") means this is not a culturally specific instruction but a principle rooted in how God made humanity; (2) the Greek word authentein, translated "authority," refers to appropriate authority; (3) the instruction was universal, given to Timothy for the church at Ephesus as representative of all churches.

The strongest arguments for the complementarian view: the creational grounding of the texts; the consistency with the pattern of male eldership across biblical history; coherence with the male headship language in Ephesians 5 and 1 Corinthians 11; the fact that the New Testament church, while using women in many roles, consistently appointed male elders.

Key thinkers: John Piper, Wayne Grudem, Tom Schreiner, D.A. Carson. Institutional voice: The Council on Biblical Manhood and Womanhood (CBMW).`
  },
  {
    id: "egalitarian",
    title: "The Egalitarian Position",
    color: GOLD,
    content: `Egalitarianism holds that the full range of ministry and leadership roles in the church is open to both men and women, without gender-based restriction. This position is not driven by capitulation to secular feminism but by what egalitarians argue is a more careful reading of the whole counsel of Scripture.

The key arguments: (1) Galatians 3:28 announces the abolition of social hierarchies in Christ — the same logic that ended slavery should end gender restriction; (2) the Pentecost promise of Joel 2 ("your sons and daughters will prophesy") inaugurates a new covenant era of Spirit-given ministry without gender restriction; (3) the examples of Deborah, Huldah, Miriam, Priscilla, Junia, Phoebe, and Philip's daughters show women in roles of teaching, prophecy, and leadership throughout redemptive history.

On the restrictive texts, egalitarians propose contextual readings: 1 Timothy 2:12 may address the specific situation in Ephesus where false teaching was spreading (1 Timothy 1:3-4), perhaps through uneducated women who were newly converted from pagan practice. The word authentein (often translated "authority") is very rare in Greek literature and may carry a more specific or negative meaning — "to domineer," "to usurp authority" — rather than simply "to exercise authority." 1 Corinthians 14:34-35 may address a specific disruption in Corinthian worship, not universal female silence.

The strongest arguments for the egalitarian view: the breadth of women's ministry in the NT; the trajectory of redemptive history toward inclusion; the difficulty of consistently applying the restrictive texts; the Pentecost outpouring as the baseline for the new covenant community.

Key thinkers: Gordon Fee, Scot McKnight, I. Howard Marshall, Beth Allison Barr. Institutional voice: Christians for Biblical Equality (CBE).`
  },
];

const THEMES_CONTENT = [
  {
    id: "redemptive-turning-points",
    title: "Women at Every Turning Point of Redemptive History",
    color: PURPLE,
    content: `One of the most striking patterns in Scripture — and one of the most underappreciated — is that women appear at every major turning point of the story of redemption.

The promise of a deliverer is first given not to Adam but through the woman (Genesis 3:15). The covenant line is preserved through Sarah's miraculous conception (Genesis 21). Moses is preserved by his mother Jochebed's defiance and courage, by his sister Miriam's quick thinking, and by Pharaoh's daughter's compassion (Exodus 2). The spies enter Canaan and are preserved by Rahab (Joshua 2). The conquest is led in part by Deborah (Judges 4-5). The Davidic line passes through Ruth, a Moabite foreigner who models hesed (Ruth 4). The last of the judges and first of the prophets (Samuel) comes through Hannah's prayer (1 Samuel 1-2). The Jewish people are preserved through Esther's courage (Esther). The Messiah is born through Mary (Luke 1-2). The resurrection is first proclaimed by Mary Magdalene and the women at the tomb (all four Gospels). The church's first European expansion is anchored in Lydia's home (Acts 16).

This is not a coincidental distribution. God has woven women into the structural spine of redemptive history. Their presence at these turning points is not incidental; it is intentional.`
  },
  {
    id: "barrenness-grace",
    title: "Barrenness to Birth: The Pattern of Grace",
    color: GOLD,
    content: `One of the most consistent patterns in the biblical narrative is the barren woman who conceives. It is not a sentimental coincidence; it is a theological motif that teaches something essential about how God works.

Sarah was barren (Genesis 11:30). God gave her Isaac in her nineties. Rebekah was barren (Genesis 25:21). "Isaac prayed to the LORD on behalf of his wife, because she was childless. The LORD answered his prayer, and his wife Rebekah became pregnant" — with Jacob and Esau, the twins who would father the twelve tribes. Rachel was barren while her sister Leah bore children; Rachel "envied her sister" and cried out to Jacob, "Give me children, or I'll die!" (Genesis 30:1). God "remembered Rachel" (30:22) and opened her womb; she bore Joseph, and later Benjamin at the cost of her own life.

Hannah was barren and prayed in bitterness of soul (1 Samuel 1). She conceived Samuel, the last judge and first prophet. Elizabeth was barren and "past childbearing age" (Luke 1:7) when she conceived John the Baptist, the one who would prepare the way for the Lord. And finally — transcending the motif entirely — Mary conceives not from a man's seed at all, but by the Holy Spirit. The God who opened barren wombs now creates life where there was no seed.

The theological message: God's work begins where human possibility ends. The pattern of barrenness-to-birth teaches that the covenant line is not carried by natural strength or social advantage — it is carried by divine faithfulness. When the body says no and God says yes, what is born is a sign of grace. Hannah named this: "There is no one holy like the LORD; there is no one besides you; there is no Rock like our God" (1 Samuel 2:2).`
  },
  {
    id: "margins-to-center",
    title: "Women at the Margins Who Become Central",
    color: TEAL,
    content: `Jesus's ministry shows a repeated pattern: the woman who is on the margins of social acceptability becomes central in the encounter with Jesus, and her story becomes the vehicle for some of the most important theological teaching in the Gospels.

The woman with the issue of blood (Mark 5:25-34, Luke 8:43-48) had been hemorrhaging for twelve years — which meant she was ritually unclean for twelve years, unable to touch people without transmitting uncleanness, unable to participate in the religious life of her community. She touches the hem of Jesus's garment in secret. He stops the entire procession. He asks who touched him. She falls at his feet, "trembling with fear," and tells him the whole truth. His response is extraordinary: he calls her "daughter" — the only person in the Gospels Jesus addresses with this word of intimate relationship — and declares that her faith has healed her. He does not rush on; he gives her the dignity of a full encounter and a public healing.

The Canaanite/Syrophoenician woman (Matthew 15:21-28, Mark 7:24-30) is doubly outside: she is a Gentile (not within the covenant) and a woman. She cries out for her daughter's healing. The disciples want her dismissed; Jesus initially responds with what sounds like a rebuff (the metaphor of throwing children's bread to dogs). She does not retreat. She argues: "Even the dogs eat the crumbs that fall from their master's table." Jesus's response: "Woman, you have great faith! Your request is granted." She wins the argument. Her daughter is healed.

The Samaritan woman (discussed in NT section) crosses three social lines — gender, ethnicity, moral history — and becomes the first evangelist to the Samaritans.

The pattern is consistent: those whom the social and religious structures of the day placed at the margins — women, Gentiles, the unclean, the outcast — are received by Jesus as fully human, addressed as persons capable of faith, and sent as bearers of testimony. The margins become the center.`
  },
  {
    id: "magnificat",
    title: "Mary's Magnificat and the Economy of God",
    color: GREEN,
    content: `The Magnificat (Luke 1:46-55) is one of the theological climaxes of Luke's Gospel — and it is spoken by a teenage girl from Galilee before the story has really begun.

Its structure follows the pattern of the Hebrew psalms of praise (todah): praise for what God has done, expressed as already accomplished (the Hebrew prophetic perfect) even before it has happened. The tenses are striking: "He has scattered those who are proud... He has brought down rulers from their thrones... He has lifted up the humble... He has filled the hungry with good things... He has helped his servant Israel." These things are not yet accomplished in the narrative — Jesus has not yet been born. But Mary speaks them as done, because when God has promised them, they are as good as complete.

The theological content of the Magnificat is relentlessly concerned with reversal: the proud scattered, the powerful brought down, the humble lifted, the hungry filled, the rich sent empty. This is not class warfare; it is the announcement of the kingdom's economy, in which the categories that organize human social life — power, wealth, status, honor — are rearranged according to God's values.

Mary herself embodies this reversal: she is a nobody from Nazareth — a small, unimportant town in the backwaters of Galilee, in the Roman empire's occupied territory — who is chosen to carry the Son of God. The choosing of Mary is itself a Magnificat statement. "He has been mindful of the humble state of his servant. From now on all generations will call me blessed, for the Mighty One has done great things for me" (1:48-49). She is not famous, powerful, or educated. She is humble. And the Mighty One has chosen her.

The Magnificat anticipates the Beatitudes, the Sermon on the Mount, and the entire shape of Jesus's ministry. It is the first great Christian sermon, and it is preached by a young woman who has just said yes to the most extraordinary and terrifying invitation in history.`
  },
];

const JOURNAL_PROMPTS = [
  "Which woman of the Bible most speaks to your current season, and what does her story say to where you are?",
  "Where do you see God working through the 'weak' and unexpected — like the women at the tomb — to accomplish his purposes in your life?",
  "What does the resurrection witness of the women say to you about how God values faithful presence, even when no one else is watching?",
  "How does Hannah's prayer of answered longing speak to something you are waiting for right now? What would it mean to pray as she prayed?",
  "The barrenness-to-birth pattern runs through Sarah, Rachel, Hannah, Elizabeth. Where have you experienced God doing what seemed impossible?",
  "Mary's Magnificat announces God's reversal of the world's economies of power and honor. How does that announcement speak to something you face?",
];

const VIDEOS = [
  {
    videoId: "gV9JugO_5Mk",
    title: "You Go Through More Because You're Called to More",
    speaker: "Priscilla Shirer",
    description: "Priscilla Shirer on how God's faithfulness equips women for what he has called them to do — and why the weight of calling is matched by the power of grace.",
  },
  {
    videoId: "ej_6dVdJSIU",
    title: "Walk in the Power of God in You — Full Sermon",
    speaker: "Priscilla Shirer",
    description: "A full sermon on identity in Christ and walking in the supernatural power of the Holy Spirit — relevant to every woman seeking to understand her calling.",
  },
  {
    videoId: "5nvVVcYD-0w",
    title: "Women in Ministry: Finding Biblical Balance",
    speaker: "Church Teaching",
    description: "A balanced discussion of the complementarian and egalitarian debate, exploring what the Bible actually teaches and how churches can honor women well.",
  },
  {
    videoId: "GQI72THyO5I",
    title: "Grow Your Faith and Trust in God — Full Sermon",
    speaker: "Lisa Harper",
    description: "Lisa Harper on walking with Jesus through every season of life — what it means to grow faith and trust when circumstances are difficult.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function WomenOfTheBiblePage() {
  const [activeTab, setActiveTab] = usePersistedState<WobTab>("vine_wob_tab", "overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Journal state
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [journalVerse, setJournalVerse] = useState("");
  const [journalReflection, setJournalReflection] = useState("");
  const [journalPrayer, setJournalPrayer] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  // Load journal from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_wob_journal");
      if (stored) setEntries(JSON.parse(stored) as JEntry[]);
    } catch {
      // ignore
    }
  }, []);

  // Persist journal to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("vine_wob_journal", JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!journalReflection.trim()) return;
    const newEntry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: journalVerse,
      reflection: journalReflection,
      prayer: journalPrayer,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setJournalVerse("");
    setJournalReflection("");
    setJournalPrayer("");
    setSelectedPrompt(null);
  }, [journalVerse, journalReflection, journalPrayer]);

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // ── Styles ──────────────────────────────────────────────────────────────

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: TEXT,
    fontFamily: "Georgia, serif",
    marginBottom: "0.5rem",
  };

  const bodyTextStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.85,
    fontSize: "1rem",
    fontFamily: "Georgia, serif",
  };

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1rem",
  };

  const accentBadgeStyle = (color: string): React.CSSProperties => ({
    display: "inline-block",
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 20,
    padding: "0.2rem 0.75rem",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    marginBottom: "0.5rem",
  });

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* ── Hero ── */}
        <section
          style={{
            background: `linear-gradient(160deg, #0E0B1A 0%, ${BG} 60%)`,
            borderBottom: `1px solid ${BORDER}`,
            padding: "4rem 1.5rem 3rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ ...accentBadgeStyle(PURPLE), marginBottom: "1.25rem" }}>
              Interactive Scripture Guide
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: TEXT,
                fontFamily: "Georgia, serif",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Women of the Bible
            </h1>
            <p style={{ ...bodyTextStyle, fontSize: "1.1rem", color: MUTED, maxWidth: 600, margin: "0 auto 1.5rem" }}>
              Over 150 women appear in Scripture — named and unnamed, at every major turning point of redemptive history.
              This guide explores their stories, their theology, and what their presence in the biblical text reveals about the character of God.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              {[
                { label: "150+ Women in Scripture", color: PURPLE },
                { label: "Every Major Redemptive Turning Point", color: TEAL },
                { label: "From Genesis to Acts", color: GOLD },
              ].map((stat) => (
                <span key={stat.label} style={accentBadgeStyle(stat.color)}>
                  {stat.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tab Bar ── */}
        <div
          style={{
            background: CARD,
            borderBottom: `1px solid ${BORDER}`,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 960,
              margin: "0 auto",
              padding: "0 1rem",
              gap: 0,
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === tab.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                  color: activeTab === tab.id ? TEXT : MUTED,
                  padding: "1rem 1.1rem",
                  cursor: "pointer",
                  fontWeight: activeTab === tab.id ? 700 : 400,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                  fontFamily: "inherit",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab Content ── */}
        <main style={{ maxWidth: 960, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div>
              <h2 style={sectionHeadingStyle}>Why the Women of the Bible Matter</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "1.5rem" }}>
                Scripture includes women&apos;s stories with remarkable intentionality for an ancient text. The Bible was produced in cultures that routinely marginalized women from public life, legal standing, and religious authority. And yet the biblical narrative does not reflect those cultural assumptions — it cuts against them, repeatedly and deliberately.
              </p>

              <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: "2rem" }}>
                {[
                  {
                    icon: "✦",
                    color: PURPLE,
                    title: "At Every Turning Point",
                    desc: "Women appear at the Exodus, the conquest, the Davidic lineage, the Incarnation, the Resurrection, and Pentecost. Their presence is not incidental — it is structural.",
                  },
                  {
                    icon: "✦",
                    color: TEAL,
                    title: "Over 150 Women in Scripture",
                    desc: "Both named and unnamed — they speak, lead, prophesy, act, mourn, and rejoice. They are not background characters; they carry the story.",
                  },
                  {
                    icon: "✦",
                    color: GOLD,
                    title: "A Hermeneutical Challenge",
                    desc: "Reading ancient texts across cultural distance requires care: neither dismissing women's presence as unremarkable nor projecting modern frameworks back onto the text.",
                  },
                  {
                    icon: "✦",
                    color: GREEN,
                    title: "The First Resurrection Witnesses",
                    desc: "In a culture where women's legal testimony was dismissed, God chose women to be the first proclaimers of the resurrection — the foundation of the Christian faith.",
                  },
                ].map((item) => (
                  <div key={item.title} style={{ ...cardStyle, borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.4rem", fontFamily: "Georgia, serif" }}>{item.title}</div>
                    <p style={{ ...bodyTextStyle, fontSize: "0.92rem", margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={cardStyle}>
                <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                  How to Read This Guide
                </h3>
                <p style={{ ...bodyTextStyle, marginBottom: "0.75rem" }}>
                  This guide takes both the text and the questions seriously. Each section presents the actual content of the biblical narrative — the Hebrew and Greek words, the historical and cultural context, the theological weight of what the text is doing — rather than a smoothed-over devotional summary.
                </p>
                <p style={{ ...bodyTextStyle, marginBottom: "0.75rem" }}>
                  The Leadership section presents both the complementarian and egalitarian readings with their strongest arguments, without resolving the debate for you. The Journal section is for your own reflection and prayer.
                </p>
                <p style={{ ...bodyTextStyle, margin: 0 }}>
                  Begin with the Old Testament or New Testament women, or jump directly to the section most relevant to your current questions. The Themes section draws the threads together theologically.
                </p>
              </div>

              <div style={{ marginTop: "2rem", background: `${PURPLE}11`, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: "1.5rem" }}>
                <blockquote style={{ margin: 0 }}>
                  <p style={{ ...bodyTextStyle, color: TEXT, fontSize: "1.1rem", fontStyle: "italic", marginBottom: "0.75rem" }}>
                    &ldquo;God is not just the God of the fathers. He is also the God who heard Hagar in the wilderness, who answered Hannah&apos;s prayer, who appeared first to Mary Magdalene on Easter morning. The women&apos;s stories are not footnotes to the main story. They are part of the main story.&rdquo;
                  </p>
                  <cite style={{ color: MUTED, fontSize: "0.88rem" }}>— A consistent pattern across the whole biblical narrative</cite>
                </blockquote>
              </div>
            </div>
          )}

          {/* ── OLD TESTAMENT ── */}
          {activeTab === "ot" && (
            <div>
              <h2 style={sectionHeadingStyle}>Women of the Old Testament</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                The Old Testament is a sprawling library of narrative, poetry, prophecy, and law — and women appear throughout, often in roles more significant than later tradition has acknowledged. Eight of the most theologically important are explored here.
              </p>
              {OT_WOMEN.map((woman) => (
                <div key={woman.id} style={{ ...cardStyle, borderLeft: `3px solid ${woman.color}`, cursor: "pointer" }}>
                  <div
                    onClick={() => toggleAccordion(woman.id)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                        <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.25rem", margin: 0 }}>{woman.name}</h3>
                        <span style={accentBadgeStyle(woman.color)}>{woman.reference}</span>
                      </div>
                      <p style={{ ...bodyTextStyle, fontSize: "0.93rem", margin: 0 }}>{woman.summary}</p>
                    </div>
                    <div style={{ color: woman.color, fontSize: "1.4rem", flexShrink: 0, marginTop: 2 }}>
                      {openAccordion === woman.id ? "−" : "+"}
                    </div>
                  </div>
                  {openAccordion === woman.id && (
                    <div style={{ marginTop: "1.25rem", borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
                      {woman.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ ...bodyTextStyle, marginBottom: "1rem" }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── NEW TESTAMENT ── */}
          {activeTab === "nt" && (
            <div>
              <h2 style={sectionHeadingStyle}>Women of the New Testament</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                The New Testament presents women as full recipients of the Holy Spirit, witnesses of the resurrection, teachers, patrons, prophets, and church leaders. Their presence in the narrative is not incidental — it is the gospel demonstrating what the kingdom looks like.
              </p>
              {NT_WOMEN.map((woman) => (
                <div key={woman.id} style={{ ...cardStyle, borderLeft: `3px solid ${woman.color}`, cursor: "pointer" }}>
                  <div
                    onClick={() => toggleAccordion(woman.id)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                        <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.25rem", margin: 0 }}>{woman.name}</h3>
                        <span style={accentBadgeStyle(woman.color)}>{woman.reference}</span>
                      </div>
                      <p style={{ ...bodyTextStyle, fontSize: "0.93rem", margin: 0 }}>{woman.summary}</p>
                    </div>
                    <div style={{ color: woman.color, fontSize: "1.4rem", flexShrink: 0, marginTop: 2 }}>
                      {openAccordion === woman.id ? "−" : "+"}
                    </div>
                  </div>
                  {openAccordion === woman.id && (
                    <div style={{ marginTop: "1.25rem", borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
                      {woman.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ ...bodyTextStyle, marginBottom: "1rem" }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── FAITH ── */}
          {activeTab === "faith" && (
            <div>
              <h2 style={sectionHeadingStyle}>Women of Faith</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                Hebrews 11 names Sarah and Rahab among the great cloud of witnesses. The New Testament repeatedly holds women up as models of the faith it commends — and places them at the hinge-points of redemptive history where faith was most urgently required.
              </p>
              {FAITH_CONTENT.map((section) => (
                <div key={section.id} style={{ ...cardStyle, borderLeft: `3px solid ${section.color}` }}>
                  <div
                    onClick={() => toggleAccordion(section.id)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  >
                    <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.15rem", margin: 0 }}>{section.title}</h3>
                    <div style={{ color: section.color, fontSize: "1.4rem", flexShrink: 0 }}>
                      {openAccordion === section.id ? "−" : "+"}
                    </div>
                  </div>
                  {openAccordion === section.id && (
                    <div style={{ marginTop: "1.25rem", borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
                      {section.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ ...bodyTextStyle, marginBottom: "1rem" }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Cloud of Witnesses callout */}
              <div style={{ background: `${TEAL}11`, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: "1.5rem", marginTop: "1.5rem" }}>
                <h3 style={{ color: TEAL, fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                  Therefore, since we are surrounded by such a great cloud of witnesses...
                </h3>
                <p style={{ ...bodyTextStyle, margin: 0 }}>
                  Hebrews 12:1 asks us to run our race in light of those who ran before us. The women of Hebrews 11 are among them — Sarah, who believed the impossible promise; Rahab, who hid the spies and was counted righteous. And beyond the named witnesses are all the unnamed women of Scripture who prayed, endured, served, and believed in the dark. Their faith is also part of the great cloud.
                </p>
              </div>
            </div>
          )}

          {/* ── LEADERSHIP ── */}
          {activeTab === "leadership" && (
            <div>
              <h2 style={sectionHeadingStyle}>Women in Leadership</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                Few questions in contemporary Christian life are more debated than the roles of women in church leadership. This section presents the biblical evidence and both major theological positions honestly, with their strongest arguments. The goal is not resolution but clarity.
              </p>
              {LEADERSHIP_CONTENT.map((section) => (
                <div key={section.id} style={{ ...cardStyle, borderLeft: `3px solid ${section.color}` }}>
                  <div
                    onClick={() => toggleAccordion(section.id)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  >
                    <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.15rem", margin: 0 }}>{section.title}</h3>
                    <div style={{ color: section.color, fontSize: "1.4rem", flexShrink: 0 }}>
                      {openAccordion === section.id ? "−" : "+"}
                    </div>
                  </div>
                  {openAccordion === section.id && (
                    <div style={{ marginTop: "1.25rem", borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
                      {section.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ ...bodyTextStyle, marginBottom: "1rem" }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: "1.5rem", marginTop: "1.5rem" }}>
                <h3 style={{ color: GOLD, fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                  What Both Traditions Agree On
                </h3>
                <p style={{ ...bodyTextStyle, marginBottom: "0.75rem" }}>
                  Whatever one&apos;s position on the specific question of women as elders or senior pastors, both complementarians and egalitarians affirm:
                </p>
                <ul style={{ ...bodyTextStyle, paddingLeft: "1.5rem", margin: 0 }}>
                  <li style={{ marginBottom: "0.5rem" }}>Women are full image-bearers of God with equal spiritual standing and dignity in Christ.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Women are gifted by the Holy Spirit for the edification of the church and the advance of the gospel.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Women&apos;s ministry is essential, not peripheral, to the life of the church.</li>
                  <li style={{ marginBottom: "0.5rem" }}>The church has often failed women by suppressing their gifts, dismissing their contributions, and treating them as less capable of theological engagement than men.</li>
                  <li>The debate over specific roles should not be used to suppress women&apos;s broad ministry, teaching, service, and leadership contribution.</li>
                </ul>
              </div>
            </div>
          )}

          {/* ── THEMES ── */}
          {activeTab === "themes" && (
            <div>
              <h2 style={sectionHeadingStyle}>Theological Themes</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                Read across the whole arc of Scripture, the women&apos;s stories are not a collection of individual narratives but a set of interlocking theological patterns that illuminate the character and economy of God.
              </p>
              {THEMES_CONTENT.map((theme) => (
                <div key={theme.id} style={{ ...cardStyle, borderLeft: `3px solid ${theme.color}` }}>
                  <div
                    onClick={() => toggleAccordion(theme.id)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  >
                    <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.15rem", margin: 0 }}>{theme.title}</h3>
                    <div style={{ color: theme.color, fontSize: "1.4rem", flexShrink: 0 }}>
                      {openAccordion === theme.id ? "−" : "+"}
                    </div>
                  </div>
                  {openAccordion === theme.id && (
                    <div style={{ marginTop: "1.25rem", borderTop: `1px solid ${BORDER}`, paddingTop: "1.25rem" }}>
                      {theme.content.split("\n\n").map((para, i) => (
                        <p key={i} style={{ ...bodyTextStyle, marginBottom: "1rem" }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── JOURNAL ── */}
          {activeTab === "journal" && (
            <div>
              <h2 style={sectionHeadingStyle}>Personal Journal</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                The women of Scripture were not merely objects of study — they were people who prayed, wrestled, hoped, and endured. This space is for your own engagement: reflection on their stories, application to your own season, and honest prayer.
              </p>

              {/* Prompts */}
              <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
                <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
                  Reflection Prompts
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {JOURNAL_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => {
                        setSelectedPrompt(prompt);
                        setJournalReflection(prompt + "\n\n");
                      }}
                      style={{
                        background: selectedPrompt === prompt ? `${PURPLE}22` : "transparent",
                        border: `1px solid ${selectedPrompt === prompt ? PURPLE : BORDER}`,
                        borderRadius: 8,
                        color: selectedPrompt === prompt ? TEXT : MUTED,
                        padding: "0.65rem 1rem",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        fontFamily: "Georgia, serif",
                        transition: "all 0.2s",
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* New entry form */}
              <div style={cardStyle}>
                <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
                  New Entry
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    Scripture reference or verse (optional)
                  </label>
                  <input
                    type="text"
                    value={journalVerse}
                    onChange={(e) => setJournalVerse(e.target.value)}
                    placeholder="e.g. Ruth 1:16, Luke 1:38, John 11:27..."
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      padding: "0.65rem 0.9rem",
                      fontSize: "0.95rem",
                      fontFamily: "Georgia, serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    Reflection
                  </label>
                  <textarea
                    value={journalReflection}
                    onChange={(e) => setJournalReflection(e.target.value)}
                    rows={6}
                    placeholder="What is the Spirit saying to you through these women's stories?"
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      padding: "0.65rem 0.9rem",
                      fontSize: "0.95rem",
                      fontFamily: "Georgia, serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    Prayer (optional)
                  </label>
                  <textarea
                    value={journalPrayer}
                    onChange={(e) => setJournalPrayer(e.target.value)}
                    rows={4}
                    placeholder="Respond to God in prayer..."
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      color: TEXT,
                      padding: "0.65rem 0.9rem",
                      fontSize: "0.95rem",
                      fontFamily: "Georgia, serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  onClick={saveEntry}
                  disabled={!journalReflection.trim()}
                  style={{
                    background: PURPLE,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "0.75rem 2rem",
                    cursor: journalReflection.trim() ? "pointer" : "not-allowed",
                    opacity: journalReflection.trim() ? 1 : 0.5,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    fontFamily: "inherit",
                  }}
                >
                  Save Entry
                </button>
              </div>

              {/* Existing entries */}
              {entries.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                  <h3 style={{ color: TEXT, fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "1rem" }}>
                    Your Entries ({entries.length})
                  </h3>
                  {entries.map((entry) => (
                    <div key={entry.id} style={{ ...cardStyle, position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <div>
                          <div style={{ color: MUTED, fontSize: "0.82rem", marginBottom: "0.2rem" }}>{entry.date}</div>
                          {entry.verse && (
                            <div style={{ color: GOLD, fontSize: "0.88rem", fontStyle: "italic" }}>{entry.verse}</div>
                          )}
                        </div>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: MUTED,
                            cursor: "pointer",
                            fontSize: "1.1rem",
                            padding: "0 0.25rem",
                            lineHeight: 1,
                          }}
                          aria-label="Delete entry"
                        >
                          ×
                        </button>
                      </div>
                      <p style={{ ...bodyTextStyle, marginBottom: entry.prayer ? "0.75rem" : 0, whiteSpace: "pre-wrap" }}>
                        {entry.reflection}
                      </p>
                      {entry.prayer && (
                        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.8rem", marginBottom: "0.3rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Prayer</div>
                          <p style={{ ...bodyTextStyle, fontSize: "0.93rem", margin: 0, whiteSpace: "pre-wrap" }}>{entry.prayer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {entries.length === 0 && (
                <div style={{ textAlign: "center", padding: "2.5rem 1rem", color: MUTED }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem", opacity: 0.3 }}>✦</div>
                  <p style={{ fontFamily: "Georgia, serif" }}>Your journal entries will appear here.</p>
                </div>
              )}
            </div>
          )}

          {/* ── VIDEOS ── */}
          {activeTab === "videos" && (
            <div>
              <h2 style={sectionHeadingStyle}>Videos</h2>
              <p style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
                Sermons and teachings that illuminate the stories and significance of women in Scripture — from women who have studied these texts deeply and taught them faithfully.
              </p>
              <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {VIDEOS.map((v) => (
                  <div
                    key={v.videoId}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "1rem" }}>
                      <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.25rem", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>
                        {v.title}
                      </div>
                      <div style={{ color: PURPLE, fontSize: "0.82rem", marginBottom: "0.5rem", fontWeight: 600 }}>
                        {v.speaker}
                      </div>
                      <p style={{ ...bodyTextStyle, fontSize: "0.88rem", margin: 0 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        <Footer />
      </div>
    </>
  );
}
