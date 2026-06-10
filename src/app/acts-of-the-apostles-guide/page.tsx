"use client";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Color theme ────────────────────────────────────────────────────────────
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const ACCENT = "#3B82F6"; // Blue for Acts
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

// ─── Types ───────────────────────────────────────────────────────────────────
type ActsTab =
  | "overview"
  | "spread"
  | "peter"
  | "paul"
  | "missions"
  | "church"
  | "themes"
  | "journal"
  | "videos";

interface JEntry {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SPREAD_REGIONS = [
  {
    id: "jerusalem",
    label: "Jerusalem",
    chapters: "Acts 1–7",
    color: GOLD,
    events: [
      "The Ascension and the promise of the Holy Spirit (Acts 1)",
      "Pentecost: 120 in the upper room, tongues of fire, 3,000 baptized in a day (Acts 2)",
      "Peter and John heal at the Beautiful Gate; 5,000 now believe (Acts 3–4)",
      "Ananias and Sapphira: holiness enforced at the church's birth (Acts 5)",
      "The appointment of the Seven Deacons to free the apostles for prayer and preaching (Acts 6)",
      "Stephen's sermon before the Sanhedrin — the longest speech in Acts — and his martyrdom (Acts 7)",
    ],
    verse: "Acts 2:41 — Those who accepted his message were baptized, and about three thousand were added to their number that day.",
    significance: "Jerusalem is the epicenter — the city where Jesus was crucified, buried, and raised. The Spirit descends here first. The Jewish nation gets first hearing of the gospel, and the earliest church is defined by four marks: teaching, fellowship, breaking of bread, and prayer (2:42). The new community is not an escape from the world but an embodied foretaste of the world to come.",
  },
  {
    id: "judea",
    label: "Judea & Samaria",
    chapters: "Acts 8–12",
    color: GREEN,
    events: [
      "Saul's persecution scatters believers across Judea and Samaria — but they preach wherever they go (Acts 8:1–4)",
      "Philip evangelist proclaims Christ in Samaria — bitter enemies of the Jews receive the Spirit (Acts 8:5–25)",
      "Philip and the Ethiopian eunuch: the gospel crosses ethnic and geographic barriers (Acts 8:26–40)",
      "Saul's conversion on the Damascus road — the persecutor becomes the proclaimer (Acts 9:1–31)",
      "Peter raises Tabitha in Joppa; the fame of Jesus spreads (Acts 9:36–43)",
      "Cornelius vision: Peter receives the sheet vision three times. Gentiles receive the Spirit before baptism — even Peter is astonished (Acts 10–11)",
      "King Herod kills James and imprisons Peter, but the church prays and Peter is freed by an angel (Acts 12)",
    ],
    verse: "Acts 10:34–35 — Then Peter began to speak: 'I now realize how true it is that God does not show favoritism but accepts from every nation the one who fears him and does what is right.'",
    significance: "This phase explodes assumptions about who belongs in the people of God. The persecution that scatters the church actually accelerates the mission — God uses opposition to drive the gospel outward. The Cornelius episode is the theological hinge of Acts: if God has given the Spirit to Gentiles, who is Peter to stand in the way? The mission to the ends of the earth requires a multi-ethnic, boundary-crossing church.",
  },
  {
    id: "asia",
    label: "Asia Minor",
    chapters: "Acts 13–15",
    color: ACCENT,
    events: [
      "The Antioch church fasts, prays, and the Spirit commissions Paul and Barnabas for mission (Acts 13:1–3)",
      "Cyprus: Elymas the sorcerer blinded; the proconsul Sergius Paulus believes (Acts 13:4–12)",
      "Pisidian Antioch: Paul's synagogue sermon — the fullest account of his gospel presentation (Acts 13:13–52)",
      "Iconium: great success and great opposition — the pattern that repeats across Paul's ministry (Acts 14:1–7)",
      "Lystra: Paul heals a lame man, crowds try to worship them as gods, Paul stoned and left for dead (Acts 14:8–20)",
      "Return to Antioch with a report: 'God had opened a door of faith to the Gentiles' (Acts 14:27)",
      "The Jerusalem Council: Judaizers demand circumcision; James presides; freedom for Gentiles is affirmed (Acts 15)",
    ],
    verse: "Acts 13:38–39 — Therefore, my friends, I want you to know that through Jesus the forgiveness of sins is proclaimed to you. Through him everyone who believes is set free from every sin.",
    significance: "Antioch, not Jerusalem, becomes the launching pad for world mission — a multi-ethnic community that sends and supports missionaries rather than staying in comfortable fellowship. The Jerusalem Council (Acts 15) is one of the most consequential theological decisions in Christian history, establishing that Gentiles are saved by grace alone through faith, not by Torah observance. This enables the church to be truly multi-ethnic.",
  },
  {
    id: "greece",
    label: "Greece",
    chapters: "Acts 16–18",
    color: PURPLE,
    events: [
      "The Macedonian call: Paul's vision of 'Come over and help us' — the gospel enters Europe (Acts 16:9–10)",
      "Philippi: Lydia's household and the Philippian jailer converted; Paul and Silas sing at midnight (Acts 16:11–40)",
      "Thessalonica: 'These men have caused trouble all over the world' — the gospel is world-changing news (Acts 17:1–9)",
      "Berea: the noble Bereans examine the Scriptures daily to verify Paul's teaching (Acts 17:10–15)",
      "Athens: Paul at the Areopagus — the gospel in dialogue with Greek philosophy; the Unknown God (Acts 17:16–34)",
      "Corinth: 18 months; Priscilla and Aquila; Gallio's dismissal protects Paul (Acts 18:1–17)",
      "Return to Antioch via Ephesus, Caesarea, Jerusalem — the second journey complete (Acts 18:18–22)",
    ],
    verse: "Acts 17:28 — For in him we live and move and have our being. As some of your own poets have said, 'We are his offspring.'",
    significance: "Europe is evangelized. Paul's method adapts to context: in the synagogue he argues from Scripture; at the Areopagus he begins with common ground from Greek poets before announcing the resurrection. Both approaches declare the same truth — but the entrance varies. The Areopagus speech is the NT's most sophisticated model of cross-cultural apologetics and remains essential reading for every Christian witness.",
  },
  {
    id: "rome",
    label: "Rome",
    chapters: "Acts 19–28",
    color: "#EF4444",
    events: [
      "Ephesus (3 years): the longest ministry in Acts; extraordinary miracles; silversmiths riot over lost idol business (Acts 19)",
      "Paul's farewell to the Ephesian elders — the most intimate speech in Acts (Acts 20:17–38)",
      "Jerusalem: Agabus prophesies Paul's arrest; Paul goes anyway; riots in the temple courts (Acts 21)",
      "Paul's defense before the Jewish crowd, before the Sanhedrin, before Felix, Festus, and Agrippa (Acts 22–26)",
      "Paul appeals to Caesar and departs for Rome (Acts 25:11–12; 26:32)",
      "Storm and shipwreck: Paul's confidence in God's promise sustains the whole crew; Malta (Acts 27–28:10)",
      "Rome: Paul lives under house arrest for two years, freely proclaiming the kingdom — Acts ends deliberately open (Acts 28:30–31)",
    ],
    verse: "Acts 28:31 — He proclaimed the kingdom of God and taught about the Lord Jesus Christ — with all boldness and without hindrance!",
    significance: "The gospel reaches Rome — the center of the world's greatest empire — not through military conquest but through a prisoner's testimony. Acts ends without Paul's death precisely because the story isn't over. The open ending is the narrative invitation for every reader to continue the mission. The Spirit-empowered witness that began in Jerusalem has now reached 'the ends of the earth.'",
  },
];

const PETER_EVENTS = [
  {
    id: "pentecost",
    ref: "Acts 2",
    title: "Pentecost Sermon",
    color: GOLD,
    body: "On the day of Pentecost, when the Spirit falls with wind and fire, it is Peter who stands up and preaches. This is extraordinary given that fifty days earlier he was weeping in shame after his triple denial of Jesus. Peter's sermon is the first Christian proclamation: he quotes Joel's prophecy, explains the resurrection as fulfillment of Psalm 16, and declares that the crucified and risen Jesus is both Lord and Messiah. The crowd is cut to the heart and 3,000 are baptized. The church is born. Peter's transformation from denier to proclaimer is itself proof of the resurrection's power — no other explanation accounts for the change.",
    keyVerse: "Acts 2:38 — Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'",
    theme: "Transformation: the denier becomes the declarer",
  },
  {
    id: "beautiful-gate",
    ref: "Acts 3",
    title: "Healing at the Beautiful Gate",
    color: GREEN,
    body: "A man lame from birth is carried daily to the temple gate called Beautiful to beg from worshippers. When Peter and John approach, the man expects a coin. Peter says the words that have echoed through Christian history: 'Silver or gold I do not have, but what I do have I give you. In the name of Jesus Christ of Nazareth, walk.' The man's ankles are instantly strengthened; he walks, leaps, and praises God. The miracle creates a congregation in Solomon's Colonnade and an audience for Peter's second sermon — which is interrupted by the priests, who arrest Peter and John overnight. Even so, 5,000 men now believe.",
    keyVerse: "Acts 3:6 — Silver or gold I do not have, but what I do have I give you. In the name of Jesus Christ of Nazareth, walk.",
    theme: "The church gives what the world cannot: healing in the name of Jesus",
  },
  {
    id: "sanhedrin",
    ref: "Acts 4",
    title: "Before the Sanhedrin",
    color: ACCENT,
    body: "The same council that condemned Jesus to death now interrogates Peter and John. The question is: by what power did you heal this man? Peter, filled with the Holy Spirit, delivers one of the most concise and bold testimonies in the NT: it was Jesus of Nazareth, crucified and raised, who healed this man — and there is no other name under heaven by which we must be saved. The Sanhedrin is astonished because these are 'unschooled, ordinary men.' They cannot deny the miracle — the healed man is standing there. They threaten the apostles and release them, ordering them to stop speaking in Jesus' name. Peter's reply: 'Judge for yourselves whether it is right in God's sight to obey you rather than God. For we cannot help speaking about what we have seen and heard.'",
    keyVerse: "Acts 4:12 — Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
    theme: "Faithfulness under pressure: obeying God rather than man",
  },
  {
    id: "ananias",
    ref: "Acts 5",
    title: "Ananias & Sapphira / Apostles Imprisoned",
    color: PURPLE,
    body: "The early church's generosity becomes a test of integrity. Ananias and Sapphira sell property and secretly keep back part of the proceeds while claiming to give it all. Peter confronts Ananias: 'You have not lied just to human beings but to God.' Both die, and great fear seizes the church and all who hear about it. This terrifying episode is not about giving a certain percentage — the couple was free to keep any amount — but about lying to the Holy Spirit who is present in the community. God is guarding the integrity of the church at its founding moment. The apostles are later imprisoned by the Sadducees but are released by an angel at night, and return to preaching in the temple at dawn.",
    keyVerse: "Acts 5:29 — Peter and the other apostles replied: 'We must obey God rather than human beings!'",
    theme: "Holiness and integrity at the foundation of the church",
  },
  {
    id: "tabitha",
    ref: "Acts 9:36–43",
    title: "Raising Tabitha",
    color: GREEN,
    body: "In Joppa, a disciple named Tabitha (Greek: Dorcas) — a woman who was 'always doing good and helping the poor' — falls ill and dies. The widows she had served stand weeping, holding the robes she had made for them. Peter kneels, prays, and says 'Tabitha, get up.' She opens her eyes and sits up. This is the second resurrection miracle in Acts (after the healing cycle) and echoes Jesus' raising of Jairus's daughter. Peter's power comes not from his own authority but from the risen Christ whose name he acts in. The miracle becomes known throughout Joppa and many believe in the Lord.",
    keyVerse: "Acts 9:40 — Peter sent them all out of the room; then he got down on his knees and prayed. Turning toward the dead woman, he said, 'Tabitha, get up.' She opened her eyes.",
    theme: "The resurrection power of Jesus extends through his servants",
  },
  {
    id: "cornelius",
    ref: "Acts 10–11",
    title: "Cornelius — Gentiles Receive the Spirit",
    color: GOLD,
    body: "The Cornelius episode is the theological turning point of Acts. Cornelius is a Roman centurion — Gentile, uncircumcised, a representative of the occupying power — who fears God and prays constantly. An angel tells him to send for Peter. Simultaneously, Peter receives a vision three times: a sheet descends with all kinds of animals, and a voice says 'Kill and eat.' Peter protests that they are unclean. 'Do not call anything impure that God has made clean.' The vision is about people, not food. Peter enters Cornelius's household — a Jewish taboo — and begins to preach. Before he even finishes, the Holy Spirit falls on all who hear. Jewish believers are astonished: 'they have received the Holy Spirit just as we have.' Peter orders them to be baptized. When challenged back in Jerusalem, Peter asks: 'If God gave them the same gift he gave us who believed in the Lord Jesus Christ, who was I to think that I could stand in God's way?' The Jerusalem church praises God: 'God has granted even the Gentiles repentance that leads to life.'",
    keyVerse: "Acts 10:44–45 — While Peter was still speaking these words, the Holy Spirit came on all who heard the message. The circumcised believers who had come with Peter were astonished that the gift of the Holy Spirit had been poured out even on the Gentiles.",
    theme: "The mission breaks every boundary: the gospel is for all nations",
  },
];

const PAUL_JOURNEYS = [
  {
    id: "journey1",
    label: "First Journey",
    ref: "Acts 13–14",
    period: "~AD 47–48",
    base: "Antioch",
    color: GOLD,
    route: ["Antioch (Syria)", "Seleucia", "Cyprus (Salamis → Paphos)", "Perga (Pamphylia)", "Pisidian Antioch", "Iconium", "Lystra", "Derbe", "return via same route", "Antioch"],
    events: [
      { city: "Cyprus", event: "Elymas the sorcerer blinded; proconsul Sergius Paulus believes — Paul's first Gentile convert of high status" },
      { city: "Pisidian Antioch", event: "Paul's most complete synagogue sermon: Creation → Exodus → David → Jesus → Resurrection → Forgiveness. Jewish rejection turns his attention to Gentiles (Acts 13:46)" },
      { city: "Iconium", event: "Jewish and Gentile converts; plot to stone them forces departure. Pattern established: success and suffering together" },
      { city: "Lystra", event: "Lame man healed; crowd tries to sacrifice to Paul as Hermes. Paul's rebuttal is his first clearly non-Jewish audience — he speaks of creation and providence, not Scripture. Then Jews arrive and stone Paul, who is left for dead — and gets up" },
      { city: "Derbe", event: "A large number of disciples — then the pair retraces the entire route to strengthen and appoint elders in every church" },
    ],
    keyVerse: "Acts 14:22 — strengthening the disciples and encouraging them to remain true to the faith. 'We must go through many hardships to enter the kingdom of God,' they said.",
    theological: "The first journey establishes the pattern of Paul's entire ministry: enter via synagogue, proclaim Christ crucified and risen, face Jewish rejection, turn to Gentiles, form a new community, appoint leaders, return. It also demonstrates that suffering is not evidence of mission failure — it is the apostolic path. The Jerusalem Council that follows (Acts 15) confirms that this Gentile mission is fully sanctioned by the Jerusalem church.",
  },
  {
    id: "journey2",
    label: "Second Journey",
    ref: "Acts 15:36–18:22",
    period: "~AD 49–52",
    base: "Antioch → Corinth",
    color: GREEN,
    route: ["Antioch", "Syria and Cilicia", "Derbe and Lystra (Timothy joins)", "Phrygia and Galatia", "Troas (Macedonian vision)", "Philippi", "Thessalonica", "Berea", "Athens", "Corinth (18 months)", "Cenchreae → Ephesus → Caesarea → Jerusalem → Antioch"],
    events: [
      { city: "Lystra", event: "Paul circumcises Timothy (Jewish mother, Greek father) — a pastoral decision to remove obstacles to his Jewish ministry, not a theological compromise" },
      { city: "Philippi", event: "First European church: Lydia's household, the slave girl delivered from a spirit, the jailer's family. Paul and Silas sing at midnight after being flogged and imprisoned. Earthquake frees them. The jailer: 'What must I do to be saved?'" },
      { city: "Thessalonica", event: "Three weeks in the synagogue. The charge: 'These men have turned the world upside down.' Jason's house attacked. The gospel is perceived as politically subversive because Jesus, not Caesar, is Lord." },
      { city: "Athens", event: "Paul's Areopagus speech: engages Stoic and Epicurean philosophers. Begins with common ground (creation, human dignity), builds to the resurrection. Some sneer, some believe including Dionysius the Areopagite." },
      { city: "Corinth", event: "18 months — Paul's longest stay outside Ephesus. Priscilla and Aquila become key partners. The Lord tells Paul in a vision: 'Do not be afraid; keep on speaking, for I have many people in this city.' This vision is a pastoral word for every missionary in resistant contexts." },
    ],
    keyVerse: "Acts 16:31 — They replied, 'Believe in the Lord Jesus, and you will be saved — you and your household.'",
    theological: "The second journey takes the gospel into Europe. The Macedonian vision shows the Spirit guiding mission strategy — Paul's plans are repeatedly redirected. The variety of conversions in this journey is stunning: a Jewish businesswoman, a Greek slave girl, a Roman jailer, an Athenian intellectual. The gospel crosses every social boundary. Paul's 18 months in Corinth produced the church to which he would write his most detailed letters.",
  },
  {
    id: "journey3",
    label: "Third Journey",
    ref: "Acts 18:23–21:16",
    period: "~AD 53–57",
    base: "Ephesus",
    color: ACCENT,
    route: ["Antioch", "Galatia and Phrygia", "Ephesus (3 years)", "Macedonia", "Greece (3 months)", "Macedonia again", "Troas (Eutychus)", "Miletus (farewell to Ephesian elders)", "Tyre", "Caesarea", "Jerusalem"],
    events: [
      { city: "Ephesus", event: "The longest recorded stay in one city: 3 years. Paul teaches daily in the lecture hall of Tyrannus. All of Asia hears the gospel. Extraordinary miracles; evil spirits flee. Scrolls of magic burned in a massive public act of repentance (worth 50,000 drachmas). Demetrius the silversmith incites a riot: 'Great is Artemis of the Ephesians!' — idolatry's economic interests are threatened" },
      { city: "Troas", event: "Eutychus falls from a window during Paul's all-night sermon. Paul raises him from the dead. The community celebrates the Lord's Supper. A tender, gathered moment amid ceaseless movement." },
      { city: "Miletus", event: "Paul's farewell address to Ephesian elders — the most personal speech in Acts. He reflects on his ministry: serving with humility, teaching publicly and from house to house, testifying to both Jews and Greeks. He predicts his arrest in Jerusalem and declares he does not consider his life valuable to himself. He warns of wolves who will come after he leaves. They weep and embrace him." },
      { city: "Jerusalem", event: "Agabus prophesies Paul's arrest. Paul says: 'I am ready not only to be bound, but also to die in Jerusalem for the name of the Lord Jesus.' He knows what awaits — and goes anyway. This voluntary suffering is the signature of apostolic faith." },
    ],
    keyVerse: "Acts 20:24 — However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me — the task of testifying to the good news of God's grace.",
    theological: "The third journey consolidates what the second began. The three years in Ephesus are the most sustained period of theological formation in Paul's ministry — it is from this base that the gospel spreads throughout the province of Asia. The farewell discourse at Miletus is the NT's most intimate window into Paul's heart: a man who has accepted that suffering, imprisonment, and death are the apostolic path, and who counts it all joy for the sake of the gospel.",
  },
  {
    id: "rome",
    label: "Journey to Rome",
    ref: "Acts 27–28",
    period: "~AD 60–62",
    base: "Prisoner",
    color: "#EF4444",
    route: ["Caesarea", "Sidon", "Myra (Lycia)", "Fair Havens (Crete)", "Storm on open sea", "Malta (shipwreck)", "Syracuse", "Rhegium", "Puteoli", "Rome"],
    events: [
      { city: "Caesarea to Fair Havens", event: "Paul warns the ship's captain that the voyage will end in disaster. He is overruled. The storm proves him right. The narrative of Acts 27 is the most detailed ancient account of a sea voyage and reads as eyewitness account (the 'we' passages)." },
      { city: "Open Sea", event: "Fourteen days of storm. All hope is abandoned. Paul stands up and announces: an angel told him that God has granted the lives of all 276 men. He urges them to eat. Calm authority amid chaos. On the fourteenth night, Paul's faith is the difference between panic and survival." },
      { city: "Malta", event: "Shipwreck on Malta. A viper bites Paul; locals expect him to die. He does not. They conclude he is a god. Paul heals the island's leading man and many others. Three months on Malta — an unplanned mission field." },
      { city: "Rome", event: "Paul arrives in Rome — not as a free man but as a prisoner under house arrest. Yet Acts 28:30–31 is triumphant: for two years he welcomes all who come to him, proclaiming the kingdom and teaching about Jesus with all boldness and without hindrance. The end of Acts is the beginning of the world mission." },
    ],
    keyVerse: "Acts 27:25 — So keep up your courage, men, for I have faith in God that it will happen just as he told me.",
    theological: "The journey to Rome is the climax of Acts: the gospel reaches the center of the empire. That it arrives with a prisoner is precisely the point — God uses weakness and apparent defeat to advance his purposes. Paul's serene confidence during the storm is the theological statement: a man who has died to fear of death cannot be stopped by anything. The open ending of Acts (28:31) is an invitation to every reader to continue the story.",
  },
];

const CHURCH_SECTIONS = [
  {
    id: "marks",
    title: "The Four Marks of the Early Church",
    ref: "Acts 2:42–47",
    color: GOLD,
    content: "Luke gives us the earliest snapshot of Christian community in Acts 2:42–47. Four activities define the church: the apostles' teaching, fellowship (koinonia), the breaking of bread, and prayer. These are not peripheral activities — they are constitutive. The early church devoted itself (proskarterountes — persisting, continuing, clinging) to all four simultaneously. Teaching forms the mind; fellowship forms bonds; the Lord's Supper shapes memory and identity; prayer sustains dependence on God. Acts 2:44–45 adds the communal economy: 'All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.' This is not proto-communism — it is the freedom of people who believe Jesus is Lord and wealth is not. Awe came on everyone; signs and wonders were done through the apostles; people were added daily. The early church was irresistible precisely because it embodied a different kind of human community.",
    quote: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. — Acts 2:42",
  },
  {
    id: "leadership",
    title: "Emerging Church Leadership",
    ref: "Acts 6; 14:23; 20:28",
    color: GREEN,
    content: "The first leadership crisis comes in Acts 6: the Hellenistic Jewish widows are being overlooked in the daily distribution of food. The apostles recognize they cannot neglect the word of God to wait on tables. They call the community together, articulate a principle (the apostles will devote themselves to prayer and the ministry of the word), and ask the congregation to choose seven men of good repute and full of the Spirit for this service. The Seven are appointed — the first deacons, though the word diakonos does not appear here. Leadership structure in Acts is practical and Spirit-driven, not designed in advance. Elders (presbyteroi) are appointed by Paul and Barnabas in every church they planted (Acts 14:23). By Acts 20:28, elders are called overseers (episkopoi) entrusted with shepherding God's church. The threefold pattern of apostles, elders/overseers, and deacons emerges organically from mission rather than being imposed from above.",
    quote: "Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God. — Acts 20:28",
  },
  {
    id: "challenges",
    title: "Challenges the Early Church Faced",
    ref: "Acts 5; 6; 15",
    color: ACCENT,
    content: "The early church faced challenges from within and without. Externally: persecution from the Sanhedrin (Acts 4–5), the martyrdom of Stephen (Acts 7), the execution of James by Herod Agrippa I (Acts 12:2), and recurring mob violence across the empire. But the challenges from within were equally significant. Ananias and Sapphira's deception threatened the church's integrity at the moment of its founding (Acts 5). The distribution conflict between Hellenistic and Hebrew Jewish widows exposed the danger of ethnic favoritism within the community (Acts 6). The Circumcision controversy — 'Unless you are circumcised according to the custom of Moses, you cannot be saved' — nearly fractured the church along Jew-Gentile lines (Acts 15:1). Every one of these challenges was met by returning to prayer, to Scripture, and to the Spirit's guidance. The church's survival of these crises is itself a miracle.",
    quote: "So the word of God spread. The number of disciples in Jerusalem increased rapidly, and a large number of priests became obedient to the faith. — Acts 6:7",
  },
  {
    id: "council",
    title: "The Jerusalem Council",
    ref: "Acts 15",
    color: PURPLE,
    content: "Acts 15 is the first church council — and arguably the most important theological decision in Christian history. The presenting question: must Gentile converts be circumcised and keep the law of Moses? At stake is the nature of the gospel itself. If circumcision is required, then Christ's death is insufficient for salvation and the law remains the ultimate arbiter of standing before God. Paul and Barnabas testify to what God has done among the Gentiles. Peter speaks from the Cornelius experience: 'Why do you try to test God by putting on the necks of Gentiles a yoke that neither we nor our ancestors have been able to bear? No! We believe it is through the grace of our Lord Jesus that we are saved, just as they are.' James, the Lord's brother, gives the decisive ruling, citing Amos 9: God has always planned to include the nations. The council affirms justification by faith alone, requiring Gentiles only to avoid practices that would make table fellowship with Jewish believers impossible. The letter sent to Gentile churches produces 'joy' — relief, clarity, freedom. The council's decision is the charter of Christian mission to the world.",
    quote: "We believe it is through the grace of our Lord Jesus that we are saved, just as they are. — Acts 15:11",
  },
  {
    id: "multiethnic",
    title: "The Multi-Ethnic Church",
    ref: "Acts 8; 10; 13; 17",
    color: GOLD,
    content: "One of Acts' most remarkable features is the intentional multi-ethnic composition of the growing church. In Acts 2, the crowd at Pentecost is drawn from every nation under heaven — and they all hear in their own language. The Ethiopian eunuch (Acts 8) brings the gospel to Africa. Cornelius (Acts 10) opens the door to Gentiles formally. The Antioch church is described as having prophets and teachers from African, Middle-Eastern, and Greco-Roman backgrounds — including Simeon called Niger (possibly from sub-Saharan Africa), Lucius from Cyrene (North Africa), Manaen (a childhood companion of Herod), Barnabas (a Jew from Cyprus), and Paul (a Jew from Tarsus). This was not incidental diversity. Luke highlights it because it is the fulfillment of the Abrahamic promise that 'all peoples on earth will be blessed through you.' The church is not a Jewish sect or a Greco-Roman social club but a new humanity gathered from every nation.",
    quote: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus. — Galatians 3:28",
  },
];

const MISSIONS_THEMES = [
  {
    title: "Acts 1:8 — The Mission's Charter",
    color: GOLD,
    content: "The organizing verse of the entire book is Jesus' final commission before his ascension: 'But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.' This single verse is the outline of the book. Acts 2–7 covers Jerusalem. Acts 8–12 covers Judea and Samaria. Acts 13–28 covers the movement toward the ends of the earth. Notice three things: (1) The mission is grounded in power — not strategy, charisma, or organizational efficiency, but the dunamis of the Spirit. (2) The mission is embodied in witnesses — people who testify from firsthand experience, who are willing to be martyrs if needed. (3) The mission has a global scope from the start — this was never a Jewish sect but a world movement. Every missionary endeavor since Pentecost is an extension of this commission.",
    verse: "Acts 1:8",
  },
  {
    title: "The Holy Spirit and Mission",
    color: GREEN,
    content: "The Holy Spirit is the primary missionary in Acts. He is not a power source that Christians access; he is the agent who drives the mission and uses Christians as instruments. The Spirit commissions Paul and Barnabas (13:2). He prevents Paul from entering Asia and Bithynia (16:6–7). He compels Paul toward Jerusalem even though bonds await (20:22). He fills witnesses before hostile councils (4:8, 31). The Spirit falls on those who have not yet been formally evangelized (10:44). In Acts, the Spirit consistently breaks the church's expectations — including the Gentile mission itself, which was entirely the Spirit's initiative. The lesson for contemporary mission is clear: the missioner's primary task is not planning and strategy but prayer and obedience — being attentive enough to the Spirit to recognize his movements and responsive enough to follow.",
    verse: "Acts 13:2",
  },
  {
    title: "Prayer as the Engine of Mission",
    color: ACCENT,
    content: "Every major advance in Acts is preceded by prayer. The disciples pray together before Pentecost (1:14). The church prays before choosing Matthias (1:24). The early church devotes itself to prayer as one of its four core activities (2:42). Peter and John go to the temple at the hour of prayer — and heal the lame man (3:1). The community prays after threats and receives a fresh filling of the Spirit (4:31). Cornelius is a man who prays constantly — and his prayers rise as a memorial offering before God, triggering the Gentile mission (10:2–4). The Antioch church fasts and prays before sending Paul and Barnabas (13:2–3). Paul and Silas sing praises and pray at midnight in the Philippian jail (16:25). In Acts, prayer is not preparation for mission — it is the mission, the pipeline through which the Spirit's power flows into the world.",
    verse: "Acts 4:31",
  },
  {
    title: "Cross-Cultural Witness: Adapting the Approach",
    color: PURPLE,
    content: "Paul's preaching strategy in Acts is not one-size-fits-all. In the synagogue (Pisidian Antioch, Acts 13), he begins with the Hebrew narrative — Exodus, conquest, David — and argues from Scripture that Jesus is the promised Messiah and that forgiveness of sins is available through him. His audience shares the Scriptures and the story. At the Areopagus (Athens, Acts 17), there is no common Scripture. Paul begins with observation of Athenian religious practice ('I see you are very religious'), moves to the theological conclusion implicit in their own 'Unknown God' altar, quotes their poets, and then announces the resurrection as the event that validates the claim about Jesus. Different entrance, same destination. Paul's cultural flexibility does not compromise the gospel; it serves the gospel by removing unnecessary barriers. The church must distinguish between the eternal gospel and the cultural clothing in which it is delivered.",
    verse: "Acts 17:22–23",
  },
  {
    title: "Persecution and Mission Growth",
    color: "#EF4444",
    content: "One of Acts' most counterintuitive lessons is that persecution advances rather than hinders the mission. The stoning of Stephen scatters the believers — but those scattered preach the gospel everywhere they go (8:4). Paul and Barnabas are expelled from Pisidian Antioch — but the disciples are filled with joy and with the Holy Spirit (13:52). Paul is beaten, imprisoned, stoned, and left for dead — and gets up and goes back into the city. The Philippian church is born in a jail cell. The pattern is not that persecution is good in itself but that God uses the apparent defeats of his people to advance his purposes in ways that human strategy never could have planned. The blood of the martyrs, as Tertullian later said, is the seed of the church.",
    verse: "Acts 8:4",
  },
  {
    title: "Lessons for Today's Mission",
    color: GREEN,
    content: "What does Acts teach contemporary missionaries and witness-bearers? First, begin locally. Acts 1:8 starts with Jerusalem — the place where the disciples are. Faithfulness in the immediate context precedes influence at a distance. Second, the Spirit is already at work in the places you are sent — your task is to join what God is already doing. Cornelius was praying before Peter arrived. Third, suffering is not mission failure; it is the apostolic path. Fourth, adapt your approach but not your message — Paul at Athens shows the range of possible entrance points into the gospel. Fifth, the church, not the solitary missionary, is the basic unit of mission — every advance in Acts is from a community. Sixth, the goal is not decisions but disciples and communities. Paul revisits every church, appoints elders, writes letters, sends co-workers — mission is a long-term investment in communities of faith.",
    verse: "Acts 1:8; 14:22",
  },
];

const THEOLOGICAL_THEMES = [
  {
    id: "spirit",
    title: "The Holy Spirit: The Book's Protagonist",
    color: ACCENT,
    icon: "🔥",
    body: "Acts has sometimes been called 'The Acts of the Holy Spirit' — and for good reason. The Spirit is mentioned over 55 times, more than in any other NT book of comparable length. He is not merely a power or a force but a personal agent who speaks (13:2), forbids (16:6), appoints (20:28), and grieves (5:3 — lying to the Spirit is lying to God). The Spirit's activity in Acts is surprisingly sovereign: he falls on people before they are baptized (10:44), drives Philip to an unlikely desert road (8:26–29), prevents Paul from entering certain regions (16:6–7), and commissions the first missionary team entirely on his own initiative (13:2). The pattern of Acts is not 'the church plans and the Spirit enables' but 'the Spirit moves and the church catches up.' Every Christian reading Acts must reckon with a Spirit who is proactive, surprising, and larger than any human organization's agenda.",
  },
  {
    id: "resurrection",
    title: "Resurrection: The Heart of Every Sermon",
    color: GOLD,
    icon: "✝️",
    body: "The resurrection is the non-negotiable center of every sermon in Acts. Peter's Pentecost sermon: 'God raised him from the dead, freeing him from the agony of death, because it was impossible for death to keep its hold on him' (2:24). Peter at the Sanhedrin: 'the resurrection of the dead' is why he and John are being tried (4:2). Stephen's speech culminates in the vision of the risen Jesus standing at the right hand of God (7:56). Paul at Pisidian Antioch: 'what God promised our ancestors he has fulfilled for us, their children, by raising up Jesus' (13:32–33). Paul at Athens: the resurrection is the public vindication of Jesus' identity (17:31). Before Felix, Festus, and Agrippa — the resurrection again. The early church did not present the resurrection as a private spiritual experience but as a publicly demonstrable historical event that changes everything. If Jesus rose, then he is Lord; if he is Lord, then Caesar is not; if Caesar is not, then the whole world must reckon with the risen King.",
  },
  {
    id: "prayer",
    title: "Prayer: The Constant Foundation",
    color: GREEN,
    icon: "🙏",
    body: "Prayer in Acts is not an afterthought but the substrate of everything. Before Pentecost: 'They all joined together constantly in prayer' (1:14). After Pentecost: 'They devoted themselves to...prayer' (2:42). When Peter and John return from the Sanhedrin, the community prays and the place is shaken (4:23–31). Stephen prays while being stoned (7:59–60). Cornelius's prayers ascend to God as a memorial offering (10:4). Peter is in prayer on the rooftop when the Cornelius vision comes (10:9). The Antioch church fasts and prays before the first missionary commission (13:2–3). Paul and Silas pray at midnight in chains (16:25). Paul kneels with the Ephesian elders in tears (20:36). Prayer is not the pause between activities in Acts — it is the activity from which all other activities flow. The church prays because it lives in dependence. Mission without prayer is activity without power.",
  },
  {
    id: "persecution",
    title: "Persecution and the Paradox of Growth",
    color: "#EF4444",
    icon: "⚔️",
    body: "Acts presents a consistent and theologically loaded pattern: the church grows through, not despite, persecution. The stoning of Stephen produces the first great scatter — which produces the Samaritan mission and Philip's encounter with the Ethiopian eunuch. The imprisonment of Paul and Silas produces the conversion of the Philippian jailer. Paul's arrest in Jerusalem produces his opportunity to testify before the Roman legal system all the way to Rome. Each opposition drives the gospel to new people and places. This is not because Luke is naive about suffering — he records real deaths (James), real beatings, real imprisonments. It is because Luke sees the mission under the sovereignty of God: what the enemy intends as defeat, God turns into advance. The lesson for the persecuted church today is not 'endure so this will end' but 'trust that God is using this to go somewhere you never imagined.'",
  },
  {
    id: "witness",
    title: "Witness: The Martys Life",
    color: PURPLE,
    icon: "📣",
    body: "The Greek word for witness in Acts is martys — from which we derive 'martyr.' In the first century, the two meanings were not separate: a witness was someone who testified to what they had seen, and martyrdom was the ultimate act of witness. Stephen, the first martyr, dies bearing witness to the risen Jesus (7:55–60). James is executed (12:2). Paul insists he cannot help speaking about what he has seen and heard (4:20). The concept of witness in Acts is not primarily about verbal proclamation but about the totality of a life oriented toward making Jesus visible. The witness bears testimony in the synagogue, in the Areopagus, in the prison, in the courtroom, in the storm at sea. There is no context from which the witness is exempt. The Acts vision of Christian life is that the ordinary circumstances of life — including suffering, imprisonment, and death — are opportunities for witness rather than obstacles to it.",
  },
  {
    id: "word",
    title: "The Word of God as a Growing Force",
    color: GOLD,
    icon: "📖",
    body: "Luke uses a striking literary device throughout Acts: summary statements that describe the progress of the word of God. 'The number of disciples in Jerusalem increased rapidly' (6:7). 'The word of God continued to spread and flourish' (12:24). 'In this way the word of the Lord spread widely and grew in power' (19:20). 'For two years Paul...preached the kingdom of God' (28:30–31). The final statement of Acts — 'with all boldness and without hindrance!' — is the triumphant summary of the whole book. In Acts, the word of God is not merely content to be communicated; it is an active force that moves through history, taking root in communities, multiplying through witnesses, and advancing despite opposition. The final Greek word of Acts is akolutos — 'without hindrance.' Whatever Rome, the Sanhedrin, the mob, or the sea may do, the word of God cannot be chained.",
  },
];

const VIDEOS = [
  {
    videoId: "oNNZO9i1Gjc",
    title: "The Book of Acts Overview — BibleProject",
    description: "BibleProject's animated overview of the book of Acts traces the movement of the Holy Spirit from Jerusalem to Rome and explains how Acts functions as the sequel to Luke's Gospel and the narrative background for Paul's letters.",
  },
  {
    videoId: "CGbNw855ksw",
    title: "Acts Part 1 — BibleProject",
    description: "The first half of Acts: Pentecost, the birth of the church in Jerusalem, Peter's ministry, Stephen's martyrdom, and the gospel breaking out to Samaria and the Gentiles through the scattering of the persecuted church.",
  },
  {
    videoId: "Z-17KxpjL0Q",
    title: "Acts Part 2 — Paul's Missionary Journeys",
    description: "The second half of Acts: Paul's three missionary journeys across Asia Minor and Greece, the Jerusalem Council, and the long final voyage to Rome — the gospel reaching the heart of the empire without hindrance.",
  },
  {
    videoId: "7NKVLJOxudU",
    title: "Pentecost and the Holy Spirit in Acts",
    description: "A focused exploration of the Holy Spirit's role in Acts — who he is, how he moves, and what his outpouring at Pentecost means for the church's mission. Essential viewing for understanding Acts' central protagonist.",
  },
];

const JOURNAL_PROMPTS = [
  "What in Peter's story — the denier who became a rock — inspires or challenges you?",
  "Where is God calling you to be a witness in your immediate 'Jerusalem'?",
  "What would it look like for your community to embody the Acts 2:42 church?",
  "What barriers exist to you sharing your faith, and what would it take to step through them?",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ActsOfApostlesGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<ActsTab>("vine_acts_tab", "overview");
  const [expandedSpread, setExpandedSpread] = useState<string | null>(null);
  const [expandedPeter, setExpandedPeter] = useState<string | null>(null);
  const [expandedJourney, setExpandedJourney] = useState<string | null>(null);
  const [expandedChurch, setExpandedChurch] = useState<string | null>(null);
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  // Journal state
  const [entries, setEntries] = useState<JEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("vine_acts_journal") ?? "[]");
    } catch {
      return [];
    }
  });
  const [form, setForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("vine_acts_journal", JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!form.verse.trim() && !form.reflection.trim()) return;
    setEntries((prev) => [
      {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        ...form,
      },
      ...prev,
    ]);
    setForm({ verse: "", reflection: "", prayer: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [form]);

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const TABS: { id: ActsTab; label: string; icon: string }[] = [
    { id: "overview", label: "Overview", icon: "📜" },
    { id: "spread", label: "The Spread", icon: "🌍" },
    { id: "peter", label: "Peter", icon: "⛵" },
    { id: "paul", label: "Paul's Journeys", icon: "🗺️" },
    { id: "church", label: "The Church", icon: "🏛️" },
    { id: "missions", label: "Missions", icon: "✈️" },
    { id: "themes", label: "Themes", icon: "🔥" },
    { id: "journal", label: "Journal", icon: "📓" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
          {/* Hero */}
          <div
            style={{
              background: `linear-gradient(180deg, ${ACCENT}18 0%, ${BG} 100%)`,
              borderBottom: `1px solid ${BORDER}`,
              padding: "56px 20px 40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 14 }}>📜</div>
            <div
              style={{
                display: "inline-block",
                background: `${ACCENT}20`,
                border: `1px solid ${ACCENT}40`,
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 16,
              }}
            >
              New Testament · Historical Narrative
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 900,
                color: TEXT,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Acts of the Apostles
              <span style={{ display: "block", color: ACCENT, fontStyle: "italic", fontSize: "0.65em", fontWeight: 700, marginTop: 6 }}>
                A Comprehensive Interactive Guide
              </span>
            </h1>
            <p
              style={{
                color: MUTED,
                fontSize: 16,
                maxWidth: 660,
                margin: "0 auto 28px",
                lineHeight: 1.8,
              }}
            >
              The story of the Holy Spirit empowering ordinary people to carry the gospel from a small upper room in Jerusalem to the palace of Caesar in Rome — and to the ends of the earth.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "28 Chapters", color: ACCENT },
                { label: "~AD 62", color: GOLD },
                { label: "Author: Luke", color: GREEN },
                { label: "55+ Spirit References", color: PURPLE },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}40`,
                    borderRadius: 12,
                    padding: "6px 16px",
                    fontSize: 13,
                    fontWeight: 700,
                    color: stat.color,
                  }}
                >
                  {stat.label}
                </div>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>
            {/* Tabs */}
            <div
              style={{
                display: "flex",
                gap: 4,
                margin: "32px 0 28px",
                background: CARD,
                borderRadius: 14,
                padding: 6,
                border: `1px solid ${BORDER}`,
                flexWrap: "wrap",
              }}
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    flex: "1 1 auto",
                    minWidth: 80,
                    padding: "9px 10px",
                    borderRadius: 9,
                    border: "none",
                    background: activeTab === t.id ? ACCENT : "transparent",
                    color: activeTab === t.id ? "#fff" : MUTED,
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 180ms",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>

            {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
            {activeTab === "overview" && (
              <div>
                {/* Intro card */}
                <div style={{ background: CARD, border: `1px solid ${ACCENT}40`, borderRadius: 14, padding: "28px 32px", marginBottom: 24 }}>
                  <h2 style={{ color: ACCENT, fontWeight: 900, fontSize: 22, marginBottom: 12 }}>Introduction to Acts</h2>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                    The Acts of the Apostles is the second volume of a two-part work: Luke&rsquo;s Gospel tells the story of what Jesus began to do and teach; Acts tells the story of what he continued to do and teach through his Spirit and his church. The prologue confirms this — Acts 1:1 refers back to &ldquo;my former book&rdquo; and describes the Gospel as the account of all that Jesus &ldquo;began&rdquo; to do. The implication is that Acts is the story of what Jesus continues to do — not from Galilee and Jerusalem but from the right hand of the Father, through the Spirit poured out on the church.
                  </p>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 0 }}>
                    Luke writes as a historian and a theologian. He has carefully investigated everything (Luke 1:3), traveled with Paul (the &ldquo;we&rdquo; passages in Acts 16, 20–21, 27–28 indicate eyewitness presence), and shaped the narrative to reveal the theological significance of events. His purpose is not merely historical record but theological persuasion: to show that the movement begun by Jesus and empowered by the Spirit is the fulfillment of Israel&rsquo;s hope and the answer to the world&rsquo;s deepest need.
                  </p>
                </div>

                {/* Stats grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, marginBottom: 24 }}>
                  {[
                    { label: "Author", value: "Luke the physician", color: GREEN },
                    { label: "Date", value: "~AD 62 (before Paul's trial)", color: GOLD },
                    { label: "Chapters", value: "28 chapters", color: ACCENT },
                    { label: "Companion Volume", value: "Luke's Gospel (Luke 1:1–4)", color: PURPLE },
                    { label: "Key Verse", value: "Acts 1:8 — witnesses to the ends of the earth", color: ACCENT },
                    { label: "Setting", value: "Jerusalem → Rome (~AD 30–62)", color: GOLD },
                    { label: "Main Theme", value: "Holy Spirit & world mission", color: GREEN },
                    { label: "Key Figures", value: "Peter, Paul, Barnabas, Stephen, Philip", color: PURPLE },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        padding: "16px 18px",
                      }}
                    >
                      <div style={{ color: s.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 6 }}>
                        {s.label}
                      </div>
                      <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Geographic progression */}
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, marginBottom: 6 }}>The Geographic Structure of Acts</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                    Acts 1:8 is not only the key verse — it is the table of contents. Jesus promises the Spirit and commissions the disciples as witnesses in three expanding circles, which trace the exact structure of the narrative.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {[
                      { zone: "Jerusalem", chs: "Acts 2–7", color: GOLD, desc: "The Spirit descends. The church is born at Pentecost. 3,000 baptized. The early community devotes itself to teaching, fellowship, breaking of bread, and prayer. Stephen is martyred." },
                      { zone: "Judea & Samaria", chs: "Acts 8–12", color: GREEN, desc: "Persecution scatters believers but accelerates the mission. Philip in Samaria, the Ethiopian eunuch, Saul's conversion, Peter's vision of Cornelius. The Gentile mission opens." },
                      { zone: "Ends of the Earth", chs: "Acts 13–28", color: ACCENT, desc: "Three missionary journeys plus the journey to Rome. Asia Minor, Greece, Rome. The gospel traverses the Mediterranean world and arrives at the capital of the empire." },
                    ].map((row, i) => (
                      <div
                        key={row.zone}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 16,
                          padding: "18px 0",
                          borderBottom: i < 2 ? `1px solid ${BORDER}` : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            background: `${row.color}20`,
                            border: `2px solid ${row.color}60`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: row.color,
                            fontWeight: 900,
                            fontSize: 16,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                            <span style={{ color: row.color, fontWeight: 800, fontSize: 16 }}>{row.zone}</span>
                            <span
                              style={{
                                background: `${row.color}18`,
                                color: row.color,
                                padding: "2px 10px",
                                borderRadius: 10,
                                fontSize: 12,
                                fontWeight: 700,
                              }}
                            >
                              {row.chs}
                            </span>
                          </div>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{row.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key verse */}
                <div
                  style={{
                    background: `${ACCENT}0C`,
                    border: `1px solid ${ACCENT}40`,
                    borderRadius: 14,
                    padding: 28,
                    marginBottom: 24,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                    The Organizing Verse of Acts
                  </div>
                  <blockquote
                    style={{
                      fontStyle: "italic",
                      fontSize: "clamp(17px, 2.5vw, 21px)",
                      color: TEXT,
                      lineHeight: 1.65,
                      margin: "0 0 12px",
                    }}
                  >
                    &ldquo;But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;
                  </blockquote>
                  <div style={{ color: ACCENT, fontWeight: 700, fontSize: 14 }}>Acts 1:8</div>
                </div>

                {/* Luke as author */}
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Luke: The Author and His Purpose</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Luke is the only non-Jewish author of a New Testament book, and his status as a Gentile physician traveling with Paul gives Acts a distinctive perspective. He is an outsider who has become an insider — and his account of the gospel&rsquo;s movement from Jerusalem to Rome is written partly to show other Gentiles that this Jewish story is also their story.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Luke wrote Acts around AD 62, while Paul was under house arrest in Rome awaiting trial before Caesar. The abrupt ending — Paul freely proclaiming the kingdom without hindrance — may reflect the fact that the trial had not yet concluded when Luke completed his narrative. Acts was almost certainly written as a legal brief of sorts: to demonstrate to Roman authorities that Christianity was not a politically subversive movement but the fulfillment of Judaism&rsquo;s ancient hope, and that Paul&rsquo;s mission had Roman legal precedent as a protected religious practice.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                    But Acts is more than a legal defense. It is a theological declaration: the same God who brought Israel out of Egypt, who raised Jesus from the dead, is now pouring out his Spirit on all flesh, calling every nation to repentance and faith. The book ends with the word &ldquo;akolutos&rdquo; — without hindrance — and the implication is clear: nothing can stop what God has begun.
                  </p>
                </div>

                {/* Summary stats row */}
                <div
                  style={{
                    background: `${GREEN}08`,
                    border: `1px solid ${GREEN}30`,
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Acts by the Numbers</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
                    {[
                      { n: "28", label: "Chapters" },
                      { n: "1,007", label: "Verses" },
                      { n: "55+", label: "Holy Spirit references" },
                      { n: "4", label: "Paul's journeys" },
                      { n: "24+", label: "Sermons & speeches" },
                      { n: "3,000", label: "Baptized at Pentecost" },
                      { n: "~32", label: "Years of narrative (30–62 AD)" },
                      { n: "1", label: "Open ending — awaiting completion" },
                    ].map((s) => (
                      <div key={s.label} style={{ textAlign: "center" }}>
                        <div style={{ color: GREEN, fontWeight: 900, fontSize: 28 }}>{s.n}</div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── THE SPREAD ─────────────────────────────────────────────────── */}
            {activeTab === "spread" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 8 }}>The Geographic Expansion of the Gospel</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Acts traces the gospel&rsquo;s movement across the ancient Mediterranean world in five distinct phases — each initiated by the Spirit, often triggered by persecution, and always resulting in new communities of faith. Select any region to explore its key events and theological significance.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SPREAD_REGIONS.map((region) => {
                    const isOpen = expandedSpread === region.id;
                    return (
                      <div
                        key={region.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? region.color + "60" : BORDER}`,
                          borderRadius: 14,
                          overflow: "hidden",
                          transition: "border-color 200ms",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedSpread(isOpen ? null : region.id)}
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            padding: "20px 24px",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: region.color,
                              flexShrink: 0,
                              boxShadow: `0 0 8px ${region.color}80`,
                            }}
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                              <span style={{ color: region.color, fontWeight: 900, fontSize: 17 }}>{region.label}</span>
                              <span
                                style={{
                                  background: `${region.color}18`,
                                  color: region.color,
                                  padding: "2px 10px",
                                  borderRadius: 10,
                                  fontSize: 12,
                                  fontWeight: 700,
                                }}
                              >
                                {region.chapters}
                              </span>
                            </div>
                            <div style={{ color: MUTED, fontSize: 13, marginTop: 4 }}>
                              {region.events.length} key events
                            </div>
                          </div>
                          <div style={{ color: MUTED, fontSize: 18, transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "none" }}>
                            ▾
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                            <div style={{ marginTop: 20, marginBottom: 16 }}>
                              <div style={{ color: region.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 12 }}>
                                Key Events
                              </div>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                                {region.events.map((ev, i) => (
                                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                    <span style={{ color: region.color, fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>·</span>
                                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>{ev}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div
                              style={{
                                background: `${region.color}0C`,
                                border: `1px solid ${region.color}30`,
                                borderRadius: 10,
                                padding: "14px 18px",
                                marginBottom: 16,
                              }}
                            >
                              <div style={{ color: region.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Key Verse
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{region.verse}</p>
                            </div>

                            <div
                              style={{
                                background: BG,
                                borderRadius: 10,
                                padding: "14px 18px",
                              }}
                            >
                              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Theological Significance
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{region.significance}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── PETER'S MINISTRY ───────────────────────────────────────────── */}
            {activeTab === "peter" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>Peter in Acts 1–12</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>
                    Peter&rsquo;s story in Acts is one of the most dramatic transformations in the New Testament. The man who denied Jesus three times during the trial — who wept bitterly and retreated to fishing — becomes the spokesperson of the church at its most crucial moment, stands before the Sanhedrin without fear, and opens the door of faith to the Gentiles. Acts 1–12 is largely his story, just as Acts 13–28 is largely Paul&rsquo;s.
                  </p>
                  <div
                    style={{
                      background: `${GOLD}0C`,
                      border: `1px solid ${GOLD}30`,
                      borderRadius: 10,
                      padding: "14px 18px",
                    }}
                  >
                    <span style={{ color: GOLD, fontSize: 13, fontStyle: "italic" }}>
                      &ldquo;Peter&rsquo;s transformation from denier to rock is not the story of a great man finally achieving his potential — it is the story of a broken man restored by a risen Lord and empowered by the Spirit he had been promised. The same Peter who said &lsquo;I don&rsquo;t know the man&rsquo; stands before 3,000 and says &lsquo;God has made this Jesus both Lord and Messiah.&rsquo;&rdquo;
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {PETER_EVENTS.map((event) => {
                    const isOpen = expandedPeter === event.id;
                    return (
                      <div
                        key={event.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? event.color + "60" : BORDER}`,
                          borderRadius: 14,
                          overflow: "hidden",
                          transition: "border-color 200ms",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedPeter(isOpen ? null : event.id)}
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            padding: "20px 24px",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                              <span style={{ color: event.color, fontWeight: 900, fontSize: 17 }}>{event.title}</span>
                              <span
                                style={{
                                  background: `${event.color}18`,
                                  color: event.color,
                                  padding: "2px 10px",
                                  borderRadius: 10,
                                  fontSize: 12,
                                  fontWeight: 700,
                                }}
                              >
                                {event.ref}
                              </span>
                            </div>
                            <div style={{ color: MUTED, fontSize: 13, marginTop: 4, fontStyle: "italic" }}>
                              {event.theme}
                            </div>
                          </div>
                          <div style={{ color: MUTED, fontSize: 18, transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "none" }}>
                            ▾
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "20px 0 16px" }}>{event.body}</p>
                            <div
                              style={{
                                background: `${event.color}0C`,
                                border: `1px solid ${event.color}30`,
                                borderRadius: 10,
                                padding: "14px 18px",
                              }}
                            >
                              <div style={{ color: event.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Key Verse
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{event.keyVerse}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Peter's transformation summary */}
                <div
                  style={{
                    background: `${GREEN}08`,
                    border: `1px solid ${GREEN}30`,
                    borderRadius: 14,
                    padding: 28,
                    marginTop: 24,
                  }}
                >
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>The Rock: Peter&rsquo;s Legacy in the Church</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    After Acts 12, Peter largely disappears from the narrative — reappearing briefly at the Jerusalem Council (Acts 15) where his testimony about Cornelius provides the theological foundation for the council&rsquo;s decision. Paul then takes center stage for the remainder of the book. But Peter&rsquo;s twelve chapters are foundational.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    It is Peter who preaches the first sermon, performs the first healing, makes the first defense before the Sanhedrin, prays the first recorded prayer for another&rsquo;s healing after the resurrection, raises the first person from the dead, and receives the first vision that opens the church to Gentiles. In Acts, Peter is indeed the rock — the apostolic foundation on which the church is built.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                    But notice what kind of rock. Not a confident, self-sufficient hero, but a man perpetually dependent on the Spirit, repeatedly surprised by what God is doing, willing to be challenged and corrected by a vision that overturns his cultural assumptions. Peter&rsquo;s greatness in Acts is the greatness of a man fully yielded — which is the only kind of greatness that matters in the kingdom.
                  </p>
                </div>
              </div>
            )}

            {/* ── PAUL'S JOURNEYS ───────────────────────────────────────────── */}
            {activeTab === "paul" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>Paul&rsquo;s Four Missionary Journeys</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Paul&rsquo;s missionary career is one of the most remarkable stories of personal endurance, theological depth, and strategic vision in human history. Across four journeys spanning roughly fifteen years (AD 47–62), he planted churches in Asia Minor, Macedonia, Greece, and Rome — all while writing the letters that would shape Christian theology for two millennia. Select any journey to explore its cities, events, and significance.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {PAUL_JOURNEYS.map((journey) => {
                    const isOpen = expandedJourney === journey.id;
                    return (
                      <div
                        key={journey.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? journey.color + "60" : BORDER}`,
                          borderRadius: 14,
                          overflow: "hidden",
                          transition: "border-color 200ms",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedJourney(isOpen ? null : journey.id)}
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            padding: "22px 26px",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 12,
                              background: `${journey.color}20`,
                              border: `1px solid ${journey.color}50`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              color: journey.color,
                              fontWeight: 900,
                              fontSize: 18,
                            }}
                          >
                            {journey.id === "journey1" ? "I" : journey.id === "journey2" ? "II" : journey.id === "journey3" ? "III" : "IV"}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                              <span style={{ color: journey.color, fontWeight: 900, fontSize: 18 }}>{journey.label}</span>
                              <span
                                style={{
                                  background: `${journey.color}18`,
                                  color: journey.color,
                                  padding: "2px 10px",
                                  borderRadius: 10,
                                  fontSize: 12,
                                  fontWeight: 700,
                                }}
                              >
                                {journey.ref}
                              </span>
                            </div>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                              <span style={{ color: MUTED, fontSize: 13 }}>{journey.period}</span>
                              <span style={{ color: MUTED, fontSize: 13 }}>Base: {journey.base}</span>
                            </div>
                          </div>
                          <div style={{ color: MUTED, fontSize: 18, transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "none" }}>
                            ▾
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{ padding: "0 26px 26px", borderTop: `1px solid ${BORDER}` }}>
                            {/* Route */}
                            <div style={{ marginTop: 20, marginBottom: 20 }}>
                              <div style={{ color: journey.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 10 }}>
                                Route
                              </div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                                {journey.route.map((city, i) => (
                                  <React.Fragment key={i}>
                                    <span
                                      style={{
                                        background: i === 0 || i === journey.route.length - 1 ? `${journey.color}25` : BG,
                                        border: `1px solid ${i === 0 || i === journey.route.length - 1 ? journey.color + "60" : BORDER}`,
                                        color: i === 0 || i === journey.route.length - 1 ? journey.color : TEXT,
                                        borderRadius: 8,
                                        padding: "4px 10px",
                                        fontSize: 12,
                                        fontWeight: i === 0 || i === journey.route.length - 1 ? 700 : 400,
                                      }}
                                    >
                                      {city}
                                    </span>
                                    {i < journey.route.length - 1 && (
                                      <span style={{ color: MUTED, fontSize: 11 }}>→</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>

                            {/* Key events */}
                            <div style={{ marginBottom: 20 }}>
                              <div style={{ color: journey.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 12 }}>
                                Key Events
                              </div>
                              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {journey.events.map((ev, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      background: BG,
                                      border: `1px solid ${BORDER}`,
                                      borderRadius: 10,
                                      padding: "14px 16px",
                                      display: "flex",
                                      gap: 14,
                                    }}
                                  >
                                    <div
                                      style={{
                                        color: journey.color,
                                        fontWeight: 800,
                                        fontSize: 13,
                                        flexShrink: 0,
                                        minWidth: 80,
                                      }}
                                    >
                                      {ev.city}
                                    </div>
                                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.7 }}>{ev.event}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Key verse */}
                            <div
                              style={{
                                background: `${journey.color}0C`,
                                border: `1px solid ${journey.color}30`,
                                borderRadius: 10,
                                padding: "14px 18px",
                                marginBottom: 16,
                              }}
                            >
                              <div style={{ color: journey.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Key Verse
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{journey.keyVerse}</p>
                            </div>

                            {/* Theological significance */}
                            <div
                              style={{
                                background: `${GREEN}06`,
                                border: `1px solid ${GREEN}20`,
                                borderRadius: 10,
                                padding: "14px 18px",
                              }}
                            >
                              <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Theological Significance
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{journey.theological}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Paul summary */}
                <div
                  style={{
                    background: `${ACCENT}08`,
                    border: `1px solid ${ACCENT}30`,
                    borderRadius: 14,
                    padding: 28,
                    marginTop: 24,
                  }}
                >
                  <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Paul: Apostle to the Gentiles</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Paul&rsquo;s missionary career represents perhaps the most extraordinary personal transformation in the New Testament. From Pharisee to prisoner, from persecutor to persecuted, from sworn opponent of Jesus to his most prolific interpreter — Paul&rsquo;s life is itself an argument for the resurrection. If a man with Paul&rsquo;s training, convictions, and social standing could be so completely transformed, something must have happened on that Damascus road.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Across his journeys Paul traveled somewhere between 10,000 and 15,000 miles — mostly on foot or by ship, in conditions of constant hardship. He was beaten five times with rods, stoned once (and left for dead), shipwrecked three times (before the Acts 27 shipwreck), imprisoned repeatedly, and lived in continual danger. His own summary in 2 Corinthians 11:23–28 reads like the adventure novel it is — except it ends with &ldquo;and besides everything else, I face daily the pressure of my concern for all the churches.&rdquo; The external hardships were secondary to the pastoral burden.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                    What sustained him? Acts 20:24 gives his own answer: &ldquo;I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me.&rdquo; A man who has died to self-preservation cannot be stopped by anything the world offers — not comfort, not threat, not death itself.
                  </p>
                </div>
              </div>
            )}

            {/* ── THE CHURCH ─────────────────────────────────────────────────── */}
            {activeTab === "church" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>The Early Church in Acts</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Acts is the primary historical source for understanding the earliest Christian communities — how they organized themselves, what they believed, how they worshipped, and how they handled conflict. The church described in Acts is both an inspiring model and a sobering reminder that the best human communities face real challenges and need constant renewal by the Spirit.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CHURCH_SECTIONS.map((section) => {
                    const isOpen = expandedChurch === section.id;
                    return (
                      <div
                        key={section.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? section.color + "60" : BORDER}`,
                          borderRadius: 14,
                          overflow: "hidden",
                          transition: "border-color 200ms",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedChurch(isOpen ? null : section.id)}
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            padding: "20px 24px",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                              <span style={{ color: section.color, fontWeight: 900, fontSize: 17 }}>{section.title}</span>
                              <span
                                style={{
                                  background: `${section.color}18`,
                                  color: section.color,
                                  padding: "2px 10px",
                                  borderRadius: 10,
                                  fontSize: 12,
                                  fontWeight: 700,
                                }}
                              >
                                {section.ref}
                              </span>
                            </div>
                          </div>
                          <div style={{ color: MUTED, fontSize: 18, transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "none" }}>
                            ▾
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "20px 0 16px" }}>{section.content}</p>
                            <div
                              style={{
                                background: `${section.color}0C`,
                                border: `1px solid ${section.color}30`,
                                borderRadius: 10,
                                padding: "14px 18px",
                              }}
                            >
                              <div style={{ color: section.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>
                                Key Text
                              </div>
                              <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{section.quote}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Acts 2:42 deep dive */}
                <div
                  style={{
                    background: `${ACCENT}08`,
                    border: `1px solid ${ACCENT}30`,
                    borderRadius: 14,
                    padding: 28,
                    marginTop: 24,
                  }}
                >
                  <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Acts 2:42 — The Four Pillars of Church Life</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
                    {[
                      {
                        pillar: "The Apostles' Teaching",
                        color: ACCENT,
                        desc: "The church was anchored in apostolic doctrine — the authoritative interpretation of the Hebrew Scriptures in light of Jesus&rsquo; death and resurrection. Before there was a New Testament, the apostles' oral teaching was the Scripture the church devoted itself to. The church that does not sit under authoritative teaching drifts into sentimentality.",
                      },
                      {
                        pillar: "Fellowship (Koinonia)",
                        color: GREEN,
                        desc: "Koinonia is more than social connection — it is sharing, participation, partnership. The early church shared possessions, shared meals, shared suffering, and shared joy. Fellowship in Acts is economically costly and emotionally real. The church that only gathers but does not share is not the community of Acts 2.",
                      },
                      {
                        pillar: "Breaking of Bread",
                        color: GOLD,
                        desc: "The Lord&rsquo;s Supper was likely at the center of every gathering. To eat together around the table where Jesus had instituted the new covenant was to proclaim his death and celebrate his resurrection. Ordinary meals became theological acts. The church of Acts could not separate worship from table.",
                      },
                      {
                        pillar: "Prayer",
                        color: PURPLE,
                        desc: "The early church was constitutively dependent on prayer — not as an add-on but as the atmosphere of community life. They prayed together before decisions, after threats, in crisis, and in celebration. Prayer was not preparation for the real work of the church — it was the real work of the church from which everything else flowed.",
                      },
                    ].map((p) => (
                      <div
                        key={p.pillar}
                        style={{
                          background: CARD,
                          border: `1px solid ${p.color}30`,
                          borderRadius: 12,
                          padding: 18,
                        }}
                      >
                        <div style={{ color: p.color, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{p.pillar}</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                           dangerouslySetInnerHTML={{ __html: p.desc }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── MISSIONS ──────────────────────────────────────────────────── */}
            {activeTab === "missions" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>The Missionary Mandate in Acts</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Acts is not merely history — it is a theology of mission. Every narrative element serves the theological argument that God is gathering a people from every nation through the proclamation of the gospel. Six themes from Acts shape everything the church has done in mission ever since.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {MISSIONS_THEMES.map((theme, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD,
                        border: `1px solid ${theme.color}30`,
                        borderRadius: 14,
                        padding: "24px 28px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                        <h3 style={{ color: theme.color, fontWeight: 900, fontSize: 17, margin: 0 }}>{theme.title}</h3>
                        <span
                          style={{
                            background: `${theme.color}18`,
                            color: theme.color,
                            padding: "2px 10px",
                            borderRadius: 10,
                            fontSize: 12,
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {theme.verse}
                        </span>
                      </div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{theme.content}</p>
                    </div>
                  ))}
                </div>

                {/* Acts 1:8 call to action */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}12, ${GREEN}0A)`,
                    border: `1px solid ${ACCENT}40`,
                    borderRadius: 14,
                    padding: 32,
                    marginTop: 24,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: ACCENT, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                    The Continuing Commission
                  </div>
                  <blockquote
                    style={{
                      fontStyle: "italic",
                      fontSize: "clamp(16px, 2.5vw, 20px)",
                      color: TEXT,
                      lineHeight: 1.7,
                      margin: "0 0 12px",
                    }}
                  >
                    &ldquo;But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;
                  </blockquote>
                  <div style={{ color: ACCENT, fontWeight: 700, fontSize: 14, marginBottom: 20 }}>Acts 1:8</div>
                  <p style={{ color: MUTED, fontSize: 14, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
                    The commission of Acts 1:8 was never rescinded. The Spirit who empowered the first witnesses is the same Spirit who indwells every believer today. The circles still expand — Jerusalem (your home, workplace, neighborhood), Judea and Samaria (your city, region, cultural other), and the ends of the earth (the unreached peoples of the world).
                  </p>
                </div>
              </div>
            )}

            {/* ── THEMES ────────────────────────────────────────────────────── */}
            {activeTab === "themes" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>Theological Themes in Acts</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Acts is simultaneously history and theology — every narrative choice serves a theological argument. Six major themes weave through the entire book and form the doctrinal backbone of Luke&rsquo;s presentation of the early church.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEOLOGICAL_THEMES.map((theme) => {
                    const isOpen = expandedTheme === theme.id;
                    return (
                      <div
                        key={theme.id}
                        style={{
                          background: CARD,
                          border: `1px solid ${isOpen ? theme.color + "60" : BORDER}`,
                          borderRadius: 14,
                          overflow: "hidden",
                          transition: "border-color 200ms",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedTheme(isOpen ? null : theme.id)}
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            padding: "20px 24px",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <span style={{ fontSize: 24, flexShrink: 0 }}>{theme.icon}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <span style={{ color: theme.color, fontWeight: 900, fontSize: 17 }}>{theme.title}</span>
                          </div>
                          <div style={{ color: MUTED, fontSize: 18, transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "none" }}>
                            ▾
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: "20px 0 0" }}>{theme.body}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Summary */}
                <div
                  style={{
                    background: `${PURPLE}08`,
                    border: `1px solid ${PURPLE}30`,
                    borderRadius: 14,
                    padding: 28,
                    marginTop: 24,
                  }}
                >
                  <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Reading Acts Theologically</h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    Acts is sometimes read as a manual for church growth — a collection of strategies that, if implemented, will produce the results the early church saw. This is a misreading. Acts is not a how-to book; it is a what-God-did book. The strategies vary (synagogue preaching vs. Areopagus dialogue), the contexts vary (Jewish city vs. pagan intellectual center vs. Roman colony), but the constant is the Spirit&rsquo;s sovereign initiative and the church&rsquo;s responsive obedience.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
                    The proper response to Acts is not &ldquo;let&rsquo;s copy what they did&rdquo; but &ldquo;let&rsquo;s trust the same Spirit who did it then to lead us now.&rdquo; The Spirit who fell at Pentecost, who directed Philip to a chariot on a desert road, who appeared to Paul in a Macedonian vision, who sustained 276 people through a Mediterranean shipwreck — this Spirit is not retired. He is present in every congregation that gathers in Jesus&rsquo; name, prays together, and makes itself available to be sent.
                  </p>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
                    The final word of Acts — &ldquo;akolutos&rdquo; (without hindrance) — is both a historical description and a theological promise. The word of God cannot be chained. No empire, no council, no mob, no prison, no storm can stop what the Spirit of God has determined to do. This is not optimism; it is eschatology. The God who raised Jesus from the dead will not abandon the mission he commissioned at the Ascension until it is completed at the Return.
                  </p>
                </div>
              </div>
            )}

            {/* ── JOURNAL ───────────────────────────────────────────────────── */}
            {activeTab === "journal" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 8 }}>My Acts Journal</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Use this journal to record what you are learning from the book of Acts — a verse that strikes you, a reflection on what it means for your life, and how you are praying in response. Entries are saved locally in your browser.
                  </p>
                </div>

                {/* Prompts */}
                <div style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
                  <div style={{ color: ACCENT, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                    Reflection Prompts
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {JOURNAL_PROMPTS.map((prompt, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0, fontSize: 14 }}>{i + 1}.</span>
                        <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{prompt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entry form */}
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        Verse or passage
                      </label>
                      <textarea
                        rows={2}
                        value={form.verse}
                        onChange={(e) => setForm((f) => ({ ...f, verse: e.target.value }))}
                        placeholder="e.g. Acts 1:8, Acts 2:42–47, Acts 20:24 — or the passage you are reading"
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: TEXT,
                          fontSize: 14,
                          padding: "10px 14px",
                          resize: "vertical",
                          boxSizing: "border-box",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        Reflection
                      </label>
                      <textarea
                        rows={4}
                        value={form.reflection}
                        onChange={(e) => setForm((f) => ({ ...f, reflection: e.target.value }))}
                        placeholder="What did you hear God saying? What challenged you? What is the Spirit prompting you to do or believe?"
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: TEXT,
                          fontSize: 14,
                          padding: "10px 14px",
                          resize: "vertical",
                          boxSizing: "border-box",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          color: MUTED,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        Prayer
                      </label>
                      <textarea
                        rows={3}
                        value={form.prayer}
                        onChange={(e) => setForm((f) => ({ ...f, prayer: e.target.value }))}
                        placeholder="How are you praying in response? Write your prayer here — adoration, confession, request, or commitment."
                        style={{
                          width: "100%",
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: TEXT,
                          fontSize: 14,
                          padding: "10px 14px",
                          resize: "vertical",
                          boxSizing: "border-box",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={saveEntry}
                      style={{
                        alignSelf: "flex-start",
                        background: saved ? GREEN : ACCENT,
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "10px 28px",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "background 200ms",
                      }}
                    >
                      {saved ? "Saved ✓" : "Save Entry"}
                    </button>
                  </div>
                </div>

                {/* Past entries */}
                {entries.length > 0 && (
                  <div>
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
                      Previous Entries ({entries.length})
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {entries.map((entry) => (
                        <div
                          key={entry.id}
                          style={{
                            background: CARD,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 14,
                            padding: 20,
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                            <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                            <button
                              type="button"
                              onClick={() => deleteEntry(entry.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: MUTED,
                                cursor: "pointer",
                                fontSize: 14,
                                padding: "2px 6px",
                              }}
                            >
                              ✕
                            </button>
                          </div>
                          {entry.verse && (
                            <div style={{ marginBottom: 10 }}>
                              <span style={{ color: ACCENT, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Verse
                              </span>
                              <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.65 }}>{entry.verse}</p>
                            </div>
                          )}
                          {entry.reflection && (
                            <div style={{ marginBottom: 10 }}>
                              <span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Reflection
                              </span>
                              <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.65 }}>{entry.reflection}</p>
                            </div>
                          )}
                          {entry.prayer && (
                            <div>
                              <span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Prayer
                              </span>
                              <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.65 }}>{entry.prayer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {entries.length === 0 && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "48px 20px",
                      color: MUTED,
                      border: `1px dashed ${BORDER}`,
                      borderRadius: 14,
                    }}
                  >
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📓</div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>No entries yet</div>
                    <div style={{ fontSize: 14 }}>
                      Use the prompts above to begin reflecting on Acts. Your entries will appear here.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── VIDEOS ────────────────────────────────────────────────────── */}
            {activeTab === "videos" && (
              <div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 28px", marginBottom: 24 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 10 }}>Curated Video Resources</h2>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Four carefully selected videos to deepen your understanding of Acts — from biblical overview to theological depth to on-location exploration of Paul&rsquo;s missionary routes.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
                  {VIDEOS.map((video) => (
                    <div
                      key={video.videoId}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 14,
                        overflow: "hidden",
                      }}
                    >
                      <VideoEmbed videoId={video.videoId} title={video.title} />
                      <div style={{ padding: "18px 20px" }}>
                        <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 15, margin: "0 0 8px", lineHeight: 1.4 }}>
                          {video.title}
                        </h3>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resource recommendations */}
                <div
                  style={{
                    background: `${GREEN}08`,
                    border: `1px solid ${GREEN}30`,
                    borderRadius: 14,
                    padding: 28,
                    marginTop: 24,
                  }}
                >
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Further Study Resources</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                    {[
                      {
                        category: "Commentaries",
                        color: ACCENT,
                        items: [
                          "F.F. Bruce — The Book of Acts (NICNT) — the standard evangelical commentary",
                          "I. Howard Marshall — Acts (TNTC) — accessible and theologically rich",
                          "Ben Witherington III — The Acts of the Apostles — detailed socio-rhetorical commentary",
                          "David Peterson — The Acts of the Apostles (Pillar) — thorough and practical",
                        ],
                      },
                      {
                        category: "Introductory Books",
                        color: GOLD,
                        items: [
                          "N.T. Wright — Acts for Everyone (2 vols.) — accessible theological commentary",
                          "John Polhill — Acts (NAC) — evangelical and readable",
                          "Ajith Fernando — Acts (NIV Application Commentary) — missiological application",
                          "William Larkin — Acts (IVP NTC) — concise and practical",
                        ],
                      },
                      {
                        category: "Missions & Spirit",
                        color: PURPLE,
                        items: [
                          "Craig Keener — Acts: An Exegetical Commentary (4 vols.) — most comprehensive",
                          "Michael Green — Evangelism in the Early Church — missional application",
                          "Roger Stronstad — The Charismatic Theology of St. Luke — Spirit in Acts",
                          "Justo González — Acts: The Gospel of the Spirit — liberation perspective",
                        ],
                      },
                    ].map((cat) => (
                      <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}25`, borderRadius: 12, padding: 18 }}>
                        <div style={{ color: cat.color, fontWeight: 800, fontSize: 14, marginBottom: 12 }}>{cat.category}</div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                          {cat.items.map((item, i) => (
                            <li key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.55, display: "flex", gap: 8 }}>
                              <span style={{ color: cat.color, flexShrink: 0 }}>·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
