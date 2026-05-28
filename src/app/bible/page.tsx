"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Bookmark,
  Highlighter,
  StickyNote,
  Share2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  AlignJustify,
  Minus,
  Plus,
  BookOpen,
  X,
  GitBranch,
  ScrollText,
  Languages,
  PlayCircle,
  Headphones,
} from "lucide-react";

const translations = ["NIV", "ESV", "KJV", "NKJV", "NLT", "MSG"];

type VerseData = { num: number; text: string; hebrew?: string };

const bibleData: Record<string, Record<number, VerseData[]>> = {
  Genesis: {
    1: [
      { num: 1, text: "In the beginning God created the heavens and the earth.", hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ" },
      { num: 2, text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters." },
      { num: 3, text: 'And God said, "Let there be light," and there was light.' },
      { num: 4, text: "God saw that the light was good, and he separated the light from the darkness." },
      { num: 5, text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.' },
      { num: 6, text: 'And God said, "Let there be a vault between the waters to separate water from water."' },
      { num: 7, text: "So God made the vault and separated the water under the vault from the water above it. And it was so." },
      { num: 8, text: 'God called the vault "sky." And there was evening, and there was morning—the second day.' },
      { num: 9, text: 'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.' },
      { num: 10, text: 'God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.' },
    ],
  },
  Psalms: {
    23: [
      { num: 1, text: "The LORD is my shepherd, I lack nothing." },
      { num: 2, text: "He makes me lie down in green pastures, he leads me beside quiet waters," },
      { num: 3, text: "he refreshes my soul. He guides me along the right paths for his name's sake." },
      { num: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
      { num: 5, text: "You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows." },
      { num: 6, text: "Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever." },
    ],
    139: [
      { num: 1, text: "You have searched me, LORD, and you know me." },
      { num: 2, text: "You know when I sit and when I rise; you perceive my thoughts from afar." },
      { num: 3, text: "You discern my going out and my lying down; you are familiar with all my ways." },
      { num: 4, text: "Before a word is on my tongue you, LORD, know it completely." },
      { num: 5, text: "You hem me in behind and before, and you lay your hand upon me." },
      { num: 6, text: "Such knowledge is too wonderful for me, too lofty for me to attain." },
      { num: 13, text: "For you created my inmost being; you knit me together in my mother's womb." },
      { num: 14, text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
    ],
  },
  Proverbs: {
    3: [
      { num: 1, text: "My son, do not forget my teaching, but keep my commands in your heart," },
      { num: 2, text: "for they will prolong your life many years and bring you peace and prosperity." },
      { num: 3, text: "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart." },
      { num: 4, text: "Then you will win favor and a good name in the sight of God and man." },
      { num: 5, text: "Trust in the LORD with all your heart and lean not on your own understanding;" },
      { num: 6, text: "in all your ways submit to him, and he will make your paths straight." },
      { num: 7, text: "Do not be wise in your own eyes; fear the LORD and shun evil." },
    ],
  },
  John: {
    1: [
      { num: 1, text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
      { num: 2, text: "He was with God in the beginning." },
      { num: 3, text: "Through him all things were made; without him nothing was made that has been made." },
      { num: 4, text: "In him was life, and that life was the light of all mankind." },
      { num: 5, text: "The light shines in the darkness, and the darkness has not overcome it." },
      { num: 14, text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth." },
    ],
    3: [
      { num: 1, text: "Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council." },
      { num: 2, text: 'He came to Jesus at night and said, "Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him."' },
      { num: 3, text: 'Jesus replied, "Very truly I tell you, no one can see the kingdom of God unless they are born again."' },
      { num: 14, text: 'Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up,' },
      { num: 15, text: 'that everyone who believes may have eternal life in him.' },
      { num: 16, text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
      { num: 17, text: 'For God did not send his Son into the world to condemn the world, but to save the world through him.' },
    ],
    15: [
      { num: 1, text: '"I am the true vine, and my Father is the gardener.' },
      { num: 2, text: "He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful." },
      { num: 4, text: 'Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.' },
      { num: 5, text: '"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.' },
      { num: 7, text: 'If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.' },
      { num: 12, text: 'My command is this: Love each other as I have loved you.' },
      { num: 13, text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.' },
    ],
  },
  Romans: {
    8: [
      { num: 1, text: "Therefore, there is now no condemnation for those who are in Christ Jesus," },
      { num: 2, text: "because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death." },
      { num: 18, text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us." },
      { num: 26, text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
      { num: 28, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
      { num: 38, text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers," },
      { num: 39, text: "neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
    ],
  },
  Philippians: {
    4: [
      { num: 4, text: "Rejoice in the Lord always. I will say it again: Rejoice!" },
      { num: 5, text: "Let your gentleness be evident to all. The Lord is near." },
      { num: 6, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
      { num: 7, text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      { num: 8, text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things." },
      { num: 11, text: "I am not saying this because I am in need, for I have learned to be content whatever the circumstances." },
      { num: 13, text: "I can do all this through him who gives me strength." },
    ],
  },
  Matthew: {
    5: [
      { num: 1, text: "Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him," },
      { num: 2, text: "and he began to teach them." },
      { num: 3, text: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven.' },
      { num: 4, text: "Blessed are those who mourn, for they will be comforted." },
      { num: 5, text: "Blessed are the meek, for they will inherit the earth." },
      { num: 6, text: "Blessed are those who hunger and thirst for righteousness, for they will be filled." },
      { num: 7, text: "Blessed are the merciful, for they will be shown mercy." },
      { num: 8, text: "Blessed are the pure in heart, for they will see God." },
      { num: 9, text: "Blessed are the peacemakers, for they will be called children of God." },
      { num: 10, text: 'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."' },
      { num: 14, text: '"You are the light of the world. A town built on a hill cannot be hidden.' },
      { num: 16, text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
      { num: 44, text: 'But I tell you, love your enemies and pray for those who persecute you,' },
      { num: 45, text: "that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous." },
    ],
    6: [
      { num: 9, text: '"This, then, is how you should pray: Our Father in heaven, hallowed be your name,' },
      { num: 10, text: "your kingdom come, your will be done, on earth as it is in heaven." },
      { num: 11, text: "Give us today our daily bread." },
      { num: 12, text: "And forgive us our debts, as we also have forgiven our debtors." },
      { num: 13, text: 'And lead us not into temptation, but deliver us from the evil one."' },
      { num: 19, text: '"Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal.' },
      { num: 20, text: "But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal." },
      { num: 21, text: "For where your treasure is, there your heart will be also." },
      { num: 24, text: '"No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money."' },
      { num: 33, text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.' },
    ],
  },
  Isaiah: {
    40: [
      { num: 1, text: "Comfort, comfort my people, says your God." },
      { num: 2, text: "Speak tenderly to Jerusalem, and proclaim to her that her hard service has been completed, that her sin has been paid for, that she has received from the LORD's hand double for all her sins." },
      { num: 28, text: "Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom." },
      { num: 29, text: "He gives strength to the weary and increases the power of the weak." },
      { num: 30, text: "Even youths grow tired and weary, and young men stumble and fall;" },
      { num: 31, text: "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
    ],
  },
  "1 Corinthians": {
    13: [
      { num: 1, text: "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal." },
      { num: 2, text: "If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing." },
      { num: 3, text: "If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing." },
      { num: 4, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
      { num: 5, text: "It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." },
      { num: 6, text: "Love does not delight in evil but rejoices with the truth." },
      { num: 7, text: "It always protects, always trusts, always hopes, always perseveres." },
      { num: 8, text: "Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away." },
      { num: 12, text: "For now we see only a reflection as in a mirror; but then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known." },
      { num: 13, text: "And now these three remain: faith, hope and love. But the greatest of these is love." },
    ],
    15: [
      { num: 3, text: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures," },
      { num: 4, text: "that he was buried, that he was raised on the third day according to the Scriptures," },
      { num: 17, text: "And if Christ has not been raised, your faith is futile; you are still in your sins." },
      { num: 20, text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep." },
      { num: 55, text: '"Where, O death, is your victory? Where, O death, is your sting?"' },
      { num: 57, text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ." },
      { num: 58, text: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain." },
    ],
  },
  Hebrews: {
    11: [
      { num: 1, text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
      { num: 2, text: "This is what the ancients were commended for." },
      { num: 3, text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible." },
      { num: 6, text: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him." },
      { num: 8, text: "By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going." },
      { num: 32, text: "And what more shall I say? I do not have time to tell about Gideon, Barak, Samson and Jephthah, about David and Samuel and the prophets," },
      { num: 33, text: "who through faith conquered kingdoms, administered justice, and gained what was promised; who shut the mouths of lions," },
      { num: 39, text: "These were all commended for their faith, yet none of them received what had been promised," },
      { num: 40, text: "since God had planned something better for us so that only together with us would they be made perfect." },
    ],
  },
  Jeremiah: {
    29: [
      { num: 11, text: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."' },
      { num: 12, text: '"Then you will call on me and come and pray to me, and I will listen to you."' },
      { num: 13, text: '"You will seek me and find me when you seek me with all your heart."' },
    ],
  },
  Ephesians: {
    2: [
      { num: 1, text: "As for you, you were dead in your transgressions and sins," },
      { num: 4, text: "But because of his great love for us, God, who is rich in mercy," },
      { num: 5, text: "made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved." },
      { num: 8, text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—" },
      { num: 9, text: "not by works, so that no one can boast." },
      { num: 10, text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
    ],
    6: [
      { num: 10, text: "Finally, be strong in the Lord and in his mighty power." },
      { num: 11, text: "Put on the full armor of God, so that you can take your stand against the devil's schemes." },
      { num: 12, text: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms." },
      { num: 13, text: "Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand." },
    ],
  },
};

const bookChapters: Record<string, number[]> = {
  Genesis: [1],
  Isaiah: [40],
  Jeremiah: [29],
  Matthew: [5, 6],
  John: [1, 3, 15],
  Romans: [8],
  "1 Corinthians": [13, 15],
  Ephesians: [2, 6],
  Philippians: [4],
  Hebrews: [11],
  Psalms: [23, 139],
  Proverbs: [3],
};

const allBooks = Object.keys(bookChapters);

const genesisVerses = [
  {
    num: 1,
    text: "In the beginning God created the heavens and the earth.",
    hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
  },
  {
    num: 2,
    text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
  },
  {
    num: 3,
    text: 'And God said, "Let there be light," and there was light.',
  },
  {
    num: 4,
    text: "God saw that the light was good, and he separated the light from the darkness.",
  },
  {
    num: 5,
    text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
  },
  {
    num: 6,
    text: 'And God said, "Let there be a vault between the waters to separate water from water."',
  },
  {
    num: 7,
    text: "So God made the vault and separated the water under the vault from the water above it. And it was so.",
  },
  {
    num: 8,
    text: 'God called the vault "sky." And there was evening, and there was morning—the second day.',
  },
  {
    num: 9,
    text: 'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.',
  },
  {
    num: 10,
    text: 'God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.',
  },
];

const crossRefs = [
  { ref: "John 1:1–3", preview: "In the beginning was the Word, and the Word was with God..." },
  { ref: "Hebrews 11:3", preview: "By faith we understand that the universe was formed at God's command..." },
  { ref: "Psalm 33:6", preview: "By the word of the LORD the heavens were made, their starry host..." },
  { ref: "Colossians 1:16", preview: "For in him all things were created: things in heaven and on earth..." },
  { ref: "Revelation 4:11", preview: "You are worthy, our Lord and God, to receive glory and honor..." },
];

const hebrewBreakdown = [
  { word: "בְּרֵאשִׁית", transliteration: "bə-rê-šîṯ", meaning: "In the beginning", type: "Preposition + Noun" },
  { word: "בָּרָא", transliteration: "bā-rā", meaning: "created", type: "Verb (Qal Perfect)" },
  { word: "אֱלֹהִים", transliteration: "ʾĕ-lō-hîm", meaning: "God", type: "Noun (Masculine Plural)" },
  { word: "הַשָּׁמַיִם", transliteration: "haš-šā-ma-yim", meaning: "the heavens", type: "Noun (with article)" },
  { word: "הָאָרֶץ", transliteration: "hā-ʾā-reṣ", meaning: "the earth", type: "Noun (with article)" },
];

const relatedResources = [
  {
    type: "Article",
    title: "The Days of Creation: Literal or Figurative?",
    author: "Dr. John Walton",
    time: "12 min read",
    color: "#6B4FBB",
    href: "/discussions/resurrection-evidence-002",
  },
  {
    type: "Video",
    title: "Genesis 1 Through Ancient Near Eastern Eyes",
    author: "The Bible Project",
    time: "18 min watch",
    color: "#00FF88",
    href: "/video",
  },
  {
    type: "Study Guide",
    title: "Genesis Reading Plan — 30-Day Journey",
    author: "Vine Theology Team",
    time: "30 days",
    color: "#4FBBAA",
    href: "/reading-plan",
  },
];

const highlightColors = [
  { label: "Yellow", value: "rgba(255,230,0,0.2)", border: "rgba(255,230,0,0.5)" },
  { label: "Green", value: "rgba(100,200,100,0.2)", border: "rgba(100,200,100,0.5)" },
  { label: "Pink", value: "rgba(255,100,150,0.2)", border: "rgba(255,100,150,0.5)" },
  { label: "Purple", value: "rgba(107,79,187,0.25)", border: "rgba(107,79,187,0.5)" },
];

export default function BiblePage() {
  const [selectedTranslation, setSelectedTranslation] = useState("NIV");
  const [studyMode, setStudyMode] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [highlightedVerses, setHighlightedVerses] = useState<Record<number, { bg: string; border: string }>>(() => {
    try { const s = localStorage.getItem("vine_bible_highlights"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [hoveredVerse, setHoveredVerse] = useState<number | null>(null);
  const [sidePanelOpen, setSidePanelOpen] = useState(true);
  const [fontSize, setFontSize] = useState(17);
  const [activeHighlightColor, setActiveHighlightColor] = useState(highlightColors[0]);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_bible_bookmarks"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedBook, setSelectedBook] = useState(() => {
    try { return localStorage.getItem("vine_bible_book") || "John"; } catch { return "John"; }
  });
  const [selectedChapter, setSelectedChapter] = useState(() => {
    try { return Number(localStorage.getItem("vine_bible_chapter")) || 3; } catch { return 3; }
  });
  const [bookDropOpen, setBookDropOpen] = useState(false);
  const [chapterDropOpen, setChapterDropOpen] = useState(false);
  const [verseSearch, setVerseSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ book: string; chapter: number; verse: VerseData }>>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [verseNotes, setVerseNotes] = useState<Record<string, string>>(() => {
    try { const s = localStorage.getItem("vine_bible_notes"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [notingVerseKey, setNotingVerseKey] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");

  const handleVerseSearch = (q: string) => {
    setVerseSearch(q);
    if (!q.trim()) { setSearchResults([]); setSearchOpen(false); return; }
    const lower = q.toLowerCase();
    const results: Array<{ book: string; chapter: number; verse: VerseData }> = [];
    for (const [book, chapters] of Object.entries(bibleData)) {
      for (const [ch, verses] of Object.entries(chapters)) {
        for (const verse of verses) {
          if (verse.text.toLowerCase().includes(lower)) {
            results.push({ book, chapter: Number(ch), verse });
          }
        }
      }
    }
    setSearchResults(results.slice(0, 8));
    setSearchOpen(results.length > 0);
  };

  useEffect(() => {
    const handleClickOutside = () => { setBookDropOpen(false); setChapterDropOpen(false); };
    if (bookDropOpen || chapterDropOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [bookDropOpen, chapterDropOpen]);

  useEffect(() => {
    try { localStorage.setItem("vine_bible_highlights", JSON.stringify(highlightedVerses)); } catch {}
  }, [highlightedVerses]);
  useEffect(() => {
    try { localStorage.setItem("vine_bible_bookmarks", JSON.stringify([...bookmarkedVerses])); } catch {}
  }, [bookmarkedVerses]);
  useEffect(() => {
    try { localStorage.setItem("vine_bible_book", selectedBook); } catch {}
  }, [selectedBook]);
  useEffect(() => {
    try { localStorage.setItem("vine_bible_chapter", String(selectedChapter)); } catch {}
  }, [selectedChapter]);
  useEffect(() => {
    try { localStorage.setItem("vine_bible_notes", JSON.stringify(verseNotes)); } catch {}
  }, [verseNotes]);

  const getNoteKey = (verseNum: number) => `${selectedBook}-${selectedChapter}-${verseNum}`;

  const saveNote = () => {
    if (!notingVerseKey) return;
    if (noteInput.trim()) {
      setVerseNotes((prev) => ({ ...prev, [notingVerseKey]: noteInput.trim() }));
    } else {
      setVerseNotes((prev) => {
        const next = { ...prev };
        delete next[notingVerseKey];
        return next;
      });
    }
    setNotingVerseKey(null);
    setNoteInput("");
  };

  const currentVerses = bibleData[selectedBook]?.[selectedChapter] ?? genesisVerses;
  const currentChapters = bookChapters[selectedBook] ?? [1];

  const navigatePrev = () => {
    const idx = currentChapters.indexOf(selectedChapter);
    if (idx > 0) { setSelectedChapter(currentChapters[idx - 1]); setSelectedVerse(null); }
    else {
      const bookIdx = allBooks.indexOf(selectedBook);
      if (bookIdx > 0) {
        const prevBook = allBooks[bookIdx - 1];
        setSelectedBook(prevBook);
        const prevChapters = bookChapters[prevBook];
        setSelectedChapter(prevChapters[prevChapters.length - 1]);
        setSelectedVerse(null);
      }
    }
  };

  const navigateNext = () => {
    const idx = currentChapters.indexOf(selectedChapter);
    if (idx < currentChapters.length - 1) { setSelectedChapter(currentChapters[idx + 1]); setSelectedVerse(null); }
    else {
      const bookIdx = allBooks.indexOf(selectedBook);
      if (bookIdx < allBooks.length - 1) {
        const nextBook = allBooks[bookIdx + 1];
        setSelectedBook(nextBook);
        setSelectedChapter(bookChapters[nextBook][0]);
        setSelectedVerse(null);
      }
    }
  };

  const handleVerseClick = (verseNum: number) => {
    setSelectedVerse(selectedVerse === verseNum ? null : verseNum);
  };

  const handleHighlight = (verseNum: number) => {
    setHighlightedVerses((prev) => {
      const next = { ...prev };
      if (next[verseNum]?.bg === activeHighlightColor.value) {
        delete next[verseNum];
      } else {
        next[verseNum] = { bg: activeHighlightColor.value, border: activeHighlightColor.border };
      }
      return next;
    });
  };

  const handleBookmark = (verseNum: number) => {
    setBookmarkedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(verseNum)) next.delete(verseNum);
      else next.add(verseNum);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Top Search + Controls Bar */}
        <div
          className="sticky top-16 z-40 border-b"
          style={{ background: "rgba(7,7,15,0.97)", borderColor: "#1E1E32", backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            {/* Search */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
                <input
                  type="text"
                  placeholder="Search any verse, word, or topic..."
                  value={verseSearch}
                  onChange={(e) => handleVerseSearch(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setSearchOpen(true)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "#12121F",
                    border: `1px solid ${searchOpen ? "rgba(0,255,136,0.3)" : "#1E1E32"}`,
                    color: "#F2F2F8",
                  }}
                />
                {searchOpen && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 rounded-xl z-50 overflow-hidden"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                    {searchResults.map((r, i) => (
                      <button key={i} onClick={() => {
                        setSelectedBook(r.book); setSelectedChapter(r.chapter);
                        setVerseSearch(""); setSearchOpen(false); setSearchResults([]);
                      }} className="w-full text-left px-4 py-3 border-b transition-colors hover:bg-[#1E1E32]"
                        style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                        <p className="text-xs font-bold mb-1" style={{ color: "#00FF88" }}>{r.book} {r.chapter}:{r.verse.num}</p>
                        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#8A8AA8" }}>{r.verse.text}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setSidePanelOpen(!sidePanelOpen)}
                className="hidden lg:flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: sidePanelOpen ? "rgba(0,255,136,0.12)" : "#12121F",
                  border: `1px solid ${sidePanelOpen ? "rgba(0,255,136,0.3)" : "#1E1E32"}`,
                  color: sidePanelOpen ? "#00FF88" : "#8A8AA8",
                }}
              >
                <ScrollText size={15} />
                Study Panel
              </button>
            </div>

            {/* Reader Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Book/Chapter/Verse selectors */}
              <div className="flex items-center gap-2 relative">
                <div className="relative">
                  <button
                    onClick={() => { setBookDropOpen(!bookDropOpen); setChapterDropOpen(false); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  >
                    {selectedBook}
                    <ChevronDown size={13} style={{ color: "#6A6A88" }} />
                  </button>
                  {bookDropOpen && (
                    <div className="absolute top-full left-0 mt-1 rounded-xl z-50 py-1 min-w-[140px]"
                      style={{ background: "#12121F", border: "1px solid #1E1E32", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                      {allBooks.map((book) => (
                        <button key={book} onClick={() => { setSelectedBook(book); setSelectedChapter(bookChapters[book][0]); setBookDropOpen(false); setSelectedVerse(null); }}
                          className="w-full text-left px-4 py-2 text-sm transition-colors"
                          style={{ color: book === selectedBook ? "#00FF88" : "#C0C0D8", background: book === selectedBook ? "rgba(0,255,136,0.08)" : "transparent" }}>
                          {book}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => { setChapterDropOpen(!chapterDropOpen); setBookDropOpen(false); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  >
                    Chapter {selectedChapter}
                    <ChevronDown size={13} style={{ color: "#6A6A88" }} />
                  </button>
                  {chapterDropOpen && (
                    <div className="absolute top-full left-0 mt-1 rounded-xl z-50 py-1 min-w-[120px]"
                      style={{ background: "#12121F", border: "1px solid #1E1E32", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                      {currentChapters.map((ch) => (
                        <button key={ch} onClick={() => { setSelectedChapter(ch); setChapterDropOpen(false); setSelectedVerse(null); }}
                          className="w-full text-left px-4 py-2 text-sm transition-colors"
                          style={{ color: ch === selectedChapter ? "#00FF88" : "#C0C0D8", background: ch === selectedChapter ? "rgba(0,255,136,0.08)" : "transparent" }}>
                          Chapter {ch}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={navigatePrev} className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#8A8AA8" }}>
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={navigateNext} className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#8A8AA8" }}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-5" style={{ background: "#1E1E32" }} />

              {/* Translation tabs */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid #1E1E32" }}
              >
                {translations.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTranslation(t)}
                    className="px-3 py-1.5 text-xs font-bold transition-all duration-200"
                    style={{
                      background: selectedTranslation === t ? "rgba(0,255,136,0.15)" : "transparent",
                      color: selectedTranslation === t ? "#00FF88" : "#6A6A88",
                      borderRight: "1px solid #1E1E32",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-5" style={{ background: "#1E1E32" }} />

              {/* Mode toggle */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid #1E1E32" }}
              >
                <button
                  onClick={() => setStudyMode(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-200"
                  style={{
                    background: !studyMode ? "rgba(0,255,136,0.15)" : "transparent",
                    color: !studyMode ? "#00FF88" : "#6A6A88",
                  }}
                >
                  <BookOpen size={13} />
                  Reading
                </button>
                <button
                  onClick={() => setStudyMode(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-200"
                  style={{
                    background: studyMode ? "rgba(0,255,136,0.15)" : "transparent",
                    color: studyMode ? "#00FF88" : "#6A6A88",
                    borderLeft: "1px solid #1E1E32",
                  }}
                >
                  <ScrollText size={13} />
                  Study
                </button>
              </div>

              {/* Font size controls (right side) */}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setFontSize((s) => Math.max(12, s - 1))}
                  className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                  style={{ color: "#8A8AA8" }}
                >
                  <Minus size={14} />
                </button>
                <span className="text-xs font-mono" style={{ color: "#6A6A88" }}>{fontSize}px</span>
                <button
                  onClick={() => setFontSize((s) => Math.min(28, s + 1))}
                  className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                  style={{ color: "#8A8AA8" }}
                >
                  <Plus size={14} />
                </button>
                <div className="w-px h-4 mx-1" style={{ background: "#1E1E32" }} />
                <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#6A6A88" }}>
                  <AlignJustify size={14} />
                </button>
                <button className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]" style={{ color: "#6A6A88" }}>
                  <Moon size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Plan Progress */}
        <div
          className="border-b"
          style={{ background: "rgba(0,255,136,0.04)", borderColor: "#1E1E32" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen size={13} style={{ color: "#00FF88" }} />
              <span className="text-xs font-semibold" style={{ color: "#00FF88" }}>
                Genesis Reading Plan
              </span>
              <span className="text-xs" style={{ color: "#6A6A88" }}>
                — Day 1 of 50
              </span>
            </div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "#1E1E32" }}>
              <div
                className="h-full rounded-full"
                style={{ width: "2%", background: "linear-gradient(90deg, #00FF88, #44FFAA)" }}
              />
            </div>
            <span className="text-xs font-mono" style={{ color: "#6A6A88" }}>2%</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">
            {/* Bible Text */}
            <div className="flex-1 min-w-0">
              {/* Highlight color selector (study mode) */}
              {studyMode && (
                <div
                  className="flex items-center gap-3 mb-6 p-3 rounded-xl"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>
                    Highlight color:
                  </span>
                  <div className="flex items-center gap-2">
                    {highlightColors.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => setActiveHighlightColor(c)}
                        className="w-6 h-6 rounded-full transition-all duration-200"
                        style={{
                          background: c.value,
                          border: `2px solid ${activeHighlightColor.label === c.label ? c.border : "transparent"}`,
                          outline: activeHighlightColor.label === c.label ? `2px solid ${c.border}` : "none",
                        }}
                        title={c.label}
                      />
                    ))}
                  </div>
                  <span className="text-xs ml-auto" style={{ color: "#6A6A88" }}>
                    Click a verse to select it, then use the action bar to highlight or bookmark
                  </span>
                </div>
              )}

              {/* Chapter Header */}
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00FF88" }}>
                  {["Psalms", "Proverbs"].includes(selectedBook) ? "Old Testament" : "New Testament"}
                </p>
                <h1 className="text-4xl font-black mb-1" style={{ color: "#F2F2F8" }}>{selectedBook}</h1>
                <p className="text-lg font-light" style={{ color: "#8A8AA8" }}>Chapter {selectedChapter} · {selectedTranslation}</p>
              </div>

              {/* Verses */}
              <div className="space-y-1 max-w-2xl mx-auto">
                {currentVerses.map((verse) => {
                  const isSelected = selectedVerse === verse.num;
                  const isHighlighted = highlightedVerses[verse.num];
                  const isBookmarked = bookmarkedVerses.has(verse.num);
                  const isHovered = hoveredVerse === verse.num;

                  return (
                    <div key={verse.num} className="relative group">
                      {/* Verse action bar */}
                      {(isHovered || isSelected) && (
                        <div
                          className="absolute -top-10 left-0 z-10 flex items-center gap-1 px-2 py-1.5 rounded-xl shadow-2xl"
                          style={{
                            background: "#18182A",
                            border: "1px solid #1E1E32",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                          }}
                        >
                          <button
                            onClick={() => handleBookmark(verse.num)}
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: isBookmarked ? "#00FF88" : "#8A8AA8" }}
                          >
                            <Bookmark size={12} fill={isBookmarked ? "#00FF88" : "none"} />
                            Save
                          </button>
                          <div className="w-px h-4" style={{ background: "#1E1E32" }} />
                          {highlightColors.map((c) => (
                            <button
                              key={c.label}
                              onClick={() => {
                                setActiveHighlightColor(c);
                                handleHighlight(verse.num);
                              }}
                              className="w-5 h-5 rounded-full transition-all hover:scale-110"
                              style={{ background: c.value, border: `1px solid ${c.border}` }}
                              title={`Highlight ${c.label}`}
                            />
                          ))}
                          <div className="w-px h-4" style={{ background: "#1E1E32" }} />
                          <button
                            onClick={() => {
                              const key = getNoteKey(verse.num);
                              setNotingVerseKey(key);
                              setNoteInput(verseNotes[key] || "");
                            }}
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: verseNotes[getNoteKey(verse.num)] ? "#F59E0B" : "#8A8AA8" }}
                          >
                            <StickyNote size={12} />
                            {verseNotes[getNoteKey(verse.num)] ? "Edit Note" : "Note"}
                          </button>
                          <button
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: "#8A8AA8" }}
                          >
                            <Share2 size={12} />
                            Share
                          </button>
                          <button
                            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all hover:bg-[#1E1E32]"
                            style={{ color: "#8A8AA8" }}
                          >
                            <GitBranch size={12} />
                            Refs
                          </button>
                        </div>
                      )}

                      <div
                        onClick={() => handleVerseClick(verse.num)}
                        onMouseEnter={() => setHoveredVerse(verse.num)}
                        onMouseLeave={() => setHoveredVerse(null)}
                        className="flex gap-4 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-150"
                        style={{
                          background: isSelected
                            ? "rgba(0,255,136,0.08)"
                            : isHighlighted
                            ? isHighlighted.bg
                            : "transparent",
                          borderLeft: isSelected
                            ? "3px solid #00FF88"
                            : isHighlighted
                            ? `3px solid ${isHighlighted.border}`
                            : "3px solid transparent",
                        }}
                      >
                        <span
                          className="text-xs font-bold mt-1 flex-shrink-0 w-5 text-right select-none"
                          style={{ color: isSelected ? "#00FF88" : "#4A4A68" }}
                        >
                          {verse.num}
                        </span>
                        <p
                          className="leading-relaxed flex-1"
                          style={{ fontSize: `${fontSize}px`, color: "#F2F2F8", lineHeight: 1.75 }}
                        >
                          {verse.text}
                        </p>
                        {isBookmarked && (
                          <Bookmark size={13} className="mt-1 flex-shrink-0" fill="#00FF88" style={{ color: "#00FF88" }} />
                        )}
                      </div>

                      {/* Existing note display */}
                      {verseNotes[getNoteKey(verse.num)] && notingVerseKey !== getNoteKey(verse.num) && (
                        <div className="mx-4 mb-2 px-3 py-2 rounded-lg flex items-start gap-2" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
                          <StickyNote size={11} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                          <p className="text-xs leading-relaxed flex-1" style={{ color: "#C0A060" }}>{verseNotes[getNoteKey(verse.num)]}</p>
                        </div>
                      )}

                      {/* Inline note editor */}
                      {notingVerseKey === getNoteKey(verse.num) && (
                        <div className="mx-4 mb-3 rounded-xl p-3" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.25)" }}>
                          <p className="text-xs font-bold mb-2" style={{ color: "#F59E0B" }}>Note for verse {verse.num}</p>
                          <textarea
                            value={noteInput}
                            onChange={(e) => setNoteInput(e.target.value)}
                            placeholder="Type your note or reflection..."
                            rows={3}
                            autoFocus
                            className="w-full bg-transparent text-xs outline-none resize-none"
                            style={{ color: "#F2F2F8", lineHeight: "1.7" }}
                          />
                          <div className="flex gap-2 mt-2">
                            <button onClick={saveNote} className="px-3 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(245,158,11,0.2)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.4)" }}>
                              Save Note
                            </button>
                            <button onClick={() => { setNotingVerseKey(null); setNoteInput(""); }} className="px-3 py-1 rounded-lg text-xs" style={{ color: "#6A6A88" }}>
                              Cancel
                            </button>
                            {verseNotes[getNoteKey(verse.num)] && (
                              <button
                                onClick={() => { setNoteInput(""); saveNote(); }}
                                className="px-3 py-1 rounded-lg text-xs"
                                style={{ color: "#EF4444" }}
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Chapter navigation */}
              <div className="flex items-center justify-between mt-10 max-w-2xl mx-auto">
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#18182A]"
                  style={{ border: "1px solid #1E1E32", color: "#8A8AA8" }}
                >
                  <ChevronLeft size={16} />
                  Previous Chapter
                </button>
                <span className="text-xs" style={{ color: "#4A4A68" }}>Genesis 1 / 50 chapters</span>
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "rgba(0,255,136,0.1)",
                    border: "1px solid rgba(0,255,136,0.2)",
                    color: "#00FF88",
                  }}
                >
                  Next Chapter
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Related Resources */}
              <div className="mt-12 max-w-2xl mx-auto">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#00FF88" }}>
                  Related Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedResources.map((r, i) => (
                    <a
                      key={i}
                      href={r.href}
                      className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A] block"
                      style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3"
                        style={{ background: `${r.color}18`, color: r.color, border: `1px solid ${r.color}30` }}
                      >
                        {r.type}
                      </span>
                      <p className="text-sm font-bold leading-snug mb-2" style={{ color: "#F2F2F8" }}>
                        {r.title}
                      </p>
                      <p className="text-xs" style={{ color: "#6A6A88" }}>
                        {r.author} · {r.time}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Study Panel (right sidebar) */}
            {sidePanelOpen && (
              <aside
                className="hidden lg:flex flex-col gap-4 w-80 flex-shrink-0"
                style={{ position: "sticky", top: "160px", maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}
              >
                {/* Cross References */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                      Cross-References
                    </h4>
                    <span className="text-xs" style={{ color: "#6A6A88" }}>Genesis 1:1</span>
                  </div>
                  <div className="space-y-3">
                    {crossRefs.map((ref, i) => (
                      <div key={i} className="cursor-pointer group">
                        <p className="text-xs font-bold mb-0.5 group-hover:text-[#00FF88] transition-colors" style={{ color: "#C0C0D8" }}>
                          {ref.ref}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                          {ref.preview}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commentary */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                    Commentary
                  </h4>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#C0C0D8" }}>
                    Matthew Henry&apos;s Commentary
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                    The first verse of the Bible gives a grand statement of the creation. &ldquo;In the beginning&rdquo; — not from eternity, but at the commencement of time itself. God is the uncreated Creator, existing before and independent of all creation. The heavens and earth encompass the totality of the created order...
                  </p>
                  <button className="mt-2 text-xs font-semibold transition-colors hover:text-[#44FFAA]" style={{ color: "#00FF88" }}>
                    Read more →
                  </button>
                </div>

                {/* Hebrew Breakdown */}
                <div
                  className="rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Languages size={14} style={{ color: "#00FF88" }} />
                    <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                      Original Language
                    </h4>
                  </div>
                  <p className="text-lg font-bold text-right mb-4" style={{ color: "#F2F2F8", direction: "rtl" }}>
                    בְּרֵאשִׁית בָּרָא אֱלֹהִים
                  </p>
                  <div className="space-y-3">
                    {hebrewBreakdown.map((word, i) => (
                      <div key={i} className="rounded-lg p-2.5" style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.08)" }}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-base font-bold" style={{ color: "#00FF88", direction: "rtl" }}>
                            {word.word}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "#1E1E32", color: "#6A6A88" }}>
                            {word.type}
                          </span>
                        </div>
                        <p className="text-xs italic mb-0.5" style={{ color: "#8A8AA8" }}>{word.transliteration}</p>
                        <p className="text-xs font-semibold" style={{ color: "#C0C0D8" }}>{word.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio */}
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(0,255,136,0.06) 100%)",
                    border: "1px solid rgba(0,255,136,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Headphones size={18} style={{ color: "#00FF88" }} />
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Listen to Chapter</p>
                      <p className="text-xs" style={{ color: "#6A6A88" }}>Dramatized NIV · 4m 12s</p>
                    </div>
                  </div>
                  <button className="btn-gold w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    <PlayCircle size={16} />
                    Play Audio
                  </button>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
