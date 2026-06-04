"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

// All 66 books of the Bible
const OT_BOOKS = [
  { id: "GEN", name: "Genesis", chapters: 50, abbr: "Gen" },
  { id: "EXO", name: "Exodus", chapters: 40, abbr: "Exod" },
  { id: "LEV", name: "Leviticus", chapters: 27, abbr: "Lev" },
  { id: "NUM", name: "Numbers", chapters: 36, abbr: "Num" },
  { id: "DEU", name: "Deuteronomy", chapters: 34, abbr: "Deut" },
  { id: "JOS", name: "Joshua", chapters: 24, abbr: "Josh" },
  { id: "JDG", name: "Judges", chapters: 21, abbr: "Judg" },
  { id: "RUT", name: "Ruth", chapters: 4, abbr: "Ruth" },
  { id: "1SA", name: "1 Samuel", chapters: 31, abbr: "1 Sam" },
  { id: "2SA", name: "2 Samuel", chapters: 24, abbr: "2 Sam" },
  { id: "1KI", name: "1 Kings", chapters: 22, abbr: "1 Kgs" },
  { id: "2KI", name: "2 Kings", chapters: 25, abbr: "2 Kgs" },
  { id: "1CH", name: "1 Chronicles", chapters: 29, abbr: "1 Chr" },
  { id: "2CH", name: "2 Chronicles", chapters: 36, abbr: "2 Chr" },
  { id: "EZR", name: "Ezra", chapters: 10, abbr: "Ezra" },
  { id: "NEH", name: "Nehemiah", chapters: 13, abbr: "Neh" },
  { id: "EST", name: "Esther", chapters: 10, abbr: "Esth" },
  { id: "JOB", name: "Job", chapters: 42, abbr: "Job" },
  { id: "PSA", name: "Psalms", chapters: 150, abbr: "Ps" },
  { id: "PRO", name: "Proverbs", chapters: 31, abbr: "Prov" },
  { id: "ECC", name: "Ecclesiastes", chapters: 12, abbr: "Eccl" },
  { id: "SNG", name: "Song of Solomon", chapters: 8, abbr: "Song" },
  { id: "ISA", name: "Isaiah", chapters: 66, abbr: "Isa" },
  { id: "JER", name: "Jeremiah", chapters: 52, abbr: "Jer" },
  { id: "LAM", name: "Lamentations", chapters: 5, abbr: "Lam" },
  { id: "EZK", name: "Ezekiel", chapters: 48, abbr: "Ezek" },
  { id: "DAN", name: "Daniel", chapters: 12, abbr: "Dan" },
  { id: "HOS", name: "Hosea", chapters: 14, abbr: "Hos" },
  { id: "JOL", name: "Joel", chapters: 3, abbr: "Joel" },
  { id: "AMO", name: "Amos", chapters: 9, abbr: "Amos" },
  { id: "OBA", name: "Obadiah", chapters: 1, abbr: "Obad" },
  { id: "JON", name: "Jonah", chapters: 4, abbr: "Jon" },
  { id: "MIC", name: "Micah", chapters: 7, abbr: "Mic" },
  { id: "NAM", name: "Nahum", chapters: 3, abbr: "Nah" },
  { id: "HAB", name: "Habakkuk", chapters: 3, abbr: "Hab" },
  { id: "ZEP", name: "Zephaniah", chapters: 3, abbr: "Zeph" },
  { id: "HAG", name: "Haggai", chapters: 2, abbr: "Hag" },
  { id: "ZEC", name: "Zechariah", chapters: 14, abbr: "Zech" },
  { id: "MAL", name: "Malachi", chapters: 4, abbr: "Mal" },
];

const NT_BOOKS = [
  { id: "MAT", name: "Matthew", chapters: 28, abbr: "Matt" },
  { id: "MRK", name: "Mark", chapters: 16, abbr: "Mark" },
  { id: "LUK", name: "Luke", chapters: 24, abbr: "Luke" },
  { id: "JHN", name: "John", chapters: 21, abbr: "John" },
  { id: "ACT", name: "Acts", chapters: 28, abbr: "Acts" },
  { id: "ROM", name: "Romans", chapters: 16, abbr: "Rom" },
  { id: "1CO", name: "1 Corinthians", chapters: 16, abbr: "1 Cor" },
  { id: "2CO", name: "2 Corinthians", chapters: 13, abbr: "2 Cor" },
  { id: "GAL", name: "Galatians", chapters: 6, abbr: "Gal" },
  { id: "EPH", name: "Ephesians", chapters: 6, abbr: "Eph" },
  { id: "PHP", name: "Philippians", chapters: 4, abbr: "Phil" },
  { id: "COL", name: "Colossians", chapters: 4, abbr: "Col" },
  { id: "1TH", name: "1 Thessalonians", chapters: 5, abbr: "1 Thess" },
  { id: "2TH", name: "2 Thessalonians", chapters: 3, abbr: "2 Thess" },
  { id: "1TI", name: "1 Timothy", chapters: 6, abbr: "1 Tim" },
  { id: "2TI", name: "2 Timothy", chapters: 4, abbr: "2 Tim" },
  { id: "TIT", name: "Titus", chapters: 3, abbr: "Titus" },
  { id: "PHM", name: "Philemon", chapters: 1, abbr: "Phlm" },
  { id: "HEB", name: "Hebrews", chapters: 13, abbr: "Heb" },
  { id: "JAS", name: "James", chapters: 5, abbr: "Jas" },
  { id: "1PE", name: "1 Peter", chapters: 5, abbr: "1 Pet" },
  { id: "2PE", name: "2 Peter", chapters: 3, abbr: "2 Pet" },
  { id: "1JN", name: "1 John", chapters: 5, abbr: "1 John" },
  { id: "2JN", name: "2 John", chapters: 1, abbr: "2 John" },
  { id: "3JN", name: "3 John", chapters: 1, abbr: "3 John" },
  { id: "JUD", name: "Jude", chapters: 1, abbr: "Jude" },
  { id: "REV", name: "Revelation", chapters: 22, abbr: "Rev" },
];

const ALL_BOOKS = [...OT_BOOKS, ...NT_BOOKS];

// A normalized version the UI works with. Populated dynamically from
// /api/bible?action=versions on mount, with the static list below as a fallback
// when the API is unavailable (e.g. in local dev without network).
type Version = { id: string; code: string; name: string; year: number | null };

// Translations to prioritize/surface first when the API returns them, matched by
// abbreviation or name substring.
// US Bible-translation popularity, most → least (ECPA/CBA bestseller rankings).
// Drives both the default selection and the order of the version selector.
const PREFERRED_CODES = ["NIV", "KJV", "NLT", "ESV", "NKJV", "CSB", "NASB", "MSG", "AMP", "NRSV", "NET", "RSV", "ASV", "WEB", "GNT", "ERV", "CEV"];

const FALLBACK_VERSIONS: Version[] = [
  // Bundled, complete KJV — served from local data, always available.
  { id: "KJV-LOCAL", code: "KJV", name: "King James Version", year: 1611 },
  { id: "65eec8e0b60e656b-01", code: "ESV", name: "English Standard Version", year: 2001 },
  { id: "06125adad2d5898a-01", code: "NIV", name: "New International Version", year: 1973 },
  { id: "1c12yany", code: "NKJV", name: "New King James Version", year: 1982 },
  { id: "314af4b7c8dc9de1-01", code: "NLT", name: "New Living Translation", year: 1996 },
  { id: "c315fa9f71d4af3a-01", code: "NASB", name: "New American Standard Bible", year: 1971 },
  { id: "7142879509583d59-01", code: "CSB", name: "Christian Standard Bible", year: 2017 },
  { id: "bba9f40183526463-01", code: "NET", name: "New English Translation", year: 1996 },
  { id: "e6a6b3d20b0375b3-01", code: "ASV", name: "American Standard Version", year: 1901 },
  { id: "f72b840c855f362c-04", code: "WEB", name: "World English Bible", year: 2000 },
  { id: "55212e3cf5d04d49-01", code: "MSG", name: "The Message", year: 1993 },
  { id: "c114c33098c4fef1-01", code: "AMP", name: "Amplified Bible", year: 1954 },
  { id: "01b29f4b342acc35-01", code: "RSV", name: "Revised Standard Version", year: 1952 },
  { id: "40072c4a5aba4022-01", code: "GNT", name: "Good News Translation", year: 1966 },
  { id: "9879dbb7cfe39e4d-03", code: "ERV", name: "Easy-to-Read Version", year: 1978 },
];

// Raw shape from /api/bible?action=versions (see route.ts BibleVersion).
type ApiVersion = { id: string; abbreviation: string; name: string; description: string; language: string };

function extractYear(...sources: string[]): number | null {
  for (const s of sources) {
    const match = s.match(/\b(1[5-9]\d{2}|20\d{2})\b/);
    if (match) return Number(match[1]);
  }
  return null;
}

// Sort versions so PREFERRED_CODES come first (in that order), then the rest
// alphabetically by name.
function prioritizeVersions(versions: Version[]): Version[] {
  const rank = (v: Version) => {
    const idx = PREFERRED_CODES.findIndex(
      (c) => v.code.toUpperCase().includes(c) || v.name.toUpperCase().includes(c)
    );
    return idx === -1 ? PREFERRED_CODES.length : idx;
  };
  return [...versions].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });
}

// Key verse data for well-known passages (used as fallback and for study context)
const STUDY_NOTES: Record<string, Record<number, { context: string; crossRefs: string[]; note: string }>> = {
  JHN: {
    3: {
      context: "Jesus and Nicodemus — The New Birth",
      crossRefs: ["John 1:12-13", "Romans 8:15-16", "1 Peter 1:23", "Titus 3:5"],
      note: "This pivotal conversation with Nicodemus, a Pharisee and member of the Sanhedrin, introduces the doctrine of regeneration. Jesus uses the imagery of being 'born again' (Gk. anothen — from above) to describe the spiritual transformation required to see the Kingdom of God. Verse 16 is perhaps the most memorized verse in the NT."
    },
    1: {
      context: "The Word Made Flesh — Prologue",
      crossRefs: ["Genesis 1:1", "Colossians 1:15-17", "Hebrews 1:1-3", "Revelation 19:13"],
      note: "John opens with a deliberate echo of Genesis 1:1, identifying Jesus as the eternal Logos (Word) who is both distinct from God and fully God. This prologue sets the theological foundation for the entire Gospel."
    }
  },
  GEN: {
    1: {
      context: "Creation — In the Beginning",
      crossRefs: ["John 1:1-3", "Colossians 1:16", "Hebrews 11:3", "Psalm 33:6"],
      note: "The Hebrew word Bereshit ('In the beginning') opens the entire canon. The creation account establishes God as the sovereign Creator who speaks all things into existence ex nihilo. The six-day structure culminates in the Sabbath rest, establishing a pattern woven throughout Scripture."
    },
    3: {
      context: "The Fall — Sin Enters the World",
      crossRefs: ["Romans 5:12-21", "1 Corinthians 15:22", "Revelation 12:9", "Genesis 3:15"],
      note: "The Protoevangelium (first Gospel) is found in verse 15 — God's promise that the seed of the woman would crush the serpent's head. This is the first messianic prophecy, pointing forward to Christ's victory over Satan."
    }
  },
  PSA: {
    23: {
      context: "The Lord Is My Shepherd — A Psalm of David",
      crossRefs: ["John 10:11", "Ezekiel 34:11-16", "Isaiah 40:11", "Hebrews 13:20"],
      note: "The most beloved Psalm in the world uses the metaphor of God as shepherd and host. David draws from his own experience as a shepherd. The 'valley of the shadow of death' (Heb. tzalmavet) refers to dark, dangerous terrain. The Psalm moves from pastoral care to abundant provision at God's table."
    },
    119: {
      context: "The Great Psalm of God's Word",
      crossRefs: ["Deuteronomy 17:19", "Joshua 1:8", "Proverbs 30:5", "2 Timothy 3:16"],
      note: "The longest chapter in the Bible (176 verses) is an acrostic poem with each stanza beginning with a successive letter of the Hebrew alphabet. It celebrates God's Word under eight synonyms: law (torah), testimony, precepts, statutes, commandments, rules, promise, and word."
    }
  },
  ROM: {
    8: {
      context: "Life in the Spirit — No Condemnation",
      crossRefs: ["Galatians 5:16-25", "John 16:7-11", "Ezekiel 36:27", "Acts 2:38"],
      note: "Romans 8 is often called the greatest chapter in the Bible. It opens with the triumphant declaration of no condemnation for those in Christ Jesus, moves through the Spirit's role in adoption and prayer, and culminates in the soaring doxology of verses 38-39."
    }
  },
  ISA: {
    53: {
      context: "The Suffering Servant",
      crossRefs: ["Matthew 8:17", "Acts 8:32-35", "1 Peter 2:22-25", "Hebrews 9:28"],
      note: "Isaiah 53 is the most quoted OT passage in the NT. Written 700 years before Christ, it describes in remarkable detail the substitutionary suffering of the Servant — despised, rejected, wounded for our transgressions, crushed for our iniquities. The Jewish rabbis and early Christians alike wrestled with the identity of this Servant."
    }
  },
  EPH: {
    2: {
      context: "Saved by Grace Through Faith",
      crossRefs: ["Romans 3:24", "Titus 3:5", "Galatians 2:16", "John 6:44"],
      note: "Ephesians 2:8-9 is the locus classicus of the doctrine of grace alone through faith alone. Paul emphasizes that salvation is entirely God's gift, not of works, so that no one may boast. Verse 10 immediately balances this by affirming that believers are created for good works."
    }
  },
  MAT: {
    5: {
      context: "The Sermon on the Mount — The Beatitudes",
      crossRefs: ["Luke 6:20-23", "Psalm 37:11", "Isaiah 61:1-3", "1 Peter 3:14"],
      note: "Jesus' great manifesto of the Kingdom opens with the Beatitudes — eight pronouncements of blessing that invert the world's values. The 'poor in spirit,' the mourners, and the meek are declared blessed. The Sermon (chapters 5-7) is the most complete summary of Jesus' ethical teaching."
    },
    6: {
      context: "The Lord's Prayer & Kingdom Priorities",
      crossRefs: ["Luke 11:2-4", "1 John 5:14", "Philippians 4:6", "Psalm 55:22"],
      note: "At the center of the Sermon, Jesus gives the model prayer. He teaches against anxious striving, calling disciples to 'seek first the kingdom of God' (v.33) and trust the Father who feeds the birds and clothes the lilies."
    }
  },
  "1CO": {
    13: {
      context: "The Love Chapter",
      crossRefs: ["1 John 4:7-12", "Romans 13:8-10", "John 13:34-35", "Galatians 5:22"],
      note: "Paul's hymn to love sits in the middle of his teaching on spiritual gifts. Love (agapē) is the 'more excellent way' — patient, kind, never failing. Without love, even the most spectacular gifts are 'sounding brass.' Often read at weddings, its original context is life together in the church."
    }
  },
  HEB: {
    11: {
      context: "The Hall of Faith",
      crossRefs: ["Romans 4:18-21", "Genesis 15:6", "James 2:21-23", "Hebrews 12:1-2"],
      note: "Hebrews 11 surveys the heroes of faith from Abel to the prophets — Noah, Abraham, Moses, Rahab, and more — each commended for trusting God's promises before seeing them fulfilled. Faith is 'the substance of things hoped for, the evidence of things not seen' (v.1)."
    }
  },
  REV: {
    21: {
      context: "The New Heaven and New Earth",
      crossRefs: ["Isaiah 65:17", "2 Peter 3:13", "Revelation 22:1-5", "1 Corinthians 2:9"],
      note: "John's vision culminates in the new creation — God dwelling with his people, every tear wiped away, no more death or mourning. The New Jerusalem descends as a bride. This is the Bible's grand finale: paradise lost in Genesis 3 is restored and surpassed."
    }
  }
};

const VERSE_THEMES: Record<string, { theme: string; color: string; verses: { ref: string; text: string; version: string }[] }> = {
  salvation: {
    theme: "Salvation & Grace",
    color: "#3a7d56",
    verses: [
      { ref: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", version: "KJV" },
      { ref: "Ephesians 2:8-9", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", version: "KJV" },
      { ref: "Romans 10:9", text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", version: "KJV" },
    ]
  },
  strength: {
    theme: "Strength & Courage",
    color: "#F59E0B",
    verses: [
      { ref: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me.", version: "KJV" },
      { ref: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", version: "KJV" },
      { ref: "Joshua 1:9", text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", version: "KJV" },
    ]
  },
  peace: {
    theme: "Peace & Rest",
    color: "#3B82F6",
    verses: [
      { ref: "John 14:27", text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.", version: "KJV" },
      { ref: "Philippians 4:7", text: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", version: "KJV" },
      { ref: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", version: "KJV" },
    ]
  },
  love: {
    theme: "Love of God",
    color: "#EC4899",
    verses: [
      { ref: "1 John 4:8", text: "He that loveth not knoweth not God; for God is love.", version: "KJV" },
      { ref: "Romans 8:38-39", text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.", version: "KJV" },
      { ref: "Jeremiah 31:3", text: "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.", version: "KJV" },
    ]
  },
  faith: {
    theme: "Faith & Trust",
    color: "#8B5CF6",
    verses: [
      { ref: "Hebrews 11:1", text: "Now faith is the substance of things hoped for, the evidence of things not seen.", version: "KJV" },
      { ref: "Proverbs 3:5-6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", version: "KJV" },
      { ref: "2 Corinthians 5:7", text: "For we walk by faith, not by sight.", version: "KJV" },
      { ref: "Mark 11:24", text: "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.", version: "KJV" },
    ]
  },
  hope: {
    theme: "Hope & Future",
    color: "#0EA5E9",
    verses: [
      { ref: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", version: "KJV" },
      { ref: "Romans 15:13", text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", version: "KJV" },
      { ref: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", version: "KJV" },
      { ref: "Lamentations 3:22-23", text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", version: "KJV" },
    ]
  },
  anxiety: {
    theme: "Anxiety & Fear",
    color: "#10B981",
    verses: [
      { ref: "Philippians 4:6-7", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", version: "KJV" },
      { ref: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you.", version: "KJV" },
      { ref: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", version: "KJV" },
      { ref: "Matthew 6:34", text: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.", version: "KJV" },
    ]
  },
  forgiveness: {
    theme: "Forgiveness & Mercy",
    color: "#F472B6",
    verses: [
      { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", version: "KJV" },
      { ref: "Ephesians 4:32", text: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", version: "KJV" },
      { ref: "Psalm 103:12", text: "As far as the east is from the west, so far hath he removed our transgressions from us.", version: "KJV" },
      { ref: "Colossians 3:13", text: "Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.", version: "KJV" },
    ]
  },
  joy: {
    theme: "Joy & Gladness",
    color: "#F59E0B",
    verses: [
      { ref: "Nehemiah 8:10", text: "The joy of the LORD is your strength.", version: "KJV" },
      { ref: "Psalm 16:11", text: "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", version: "KJV" },
      { ref: "John 15:11", text: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.", version: "KJV" },
      { ref: "James 1:2-3", text: "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.", version: "KJV" },
    ]
  },
  wisdom: {
    theme: "Wisdom & Guidance",
    color: "#C9A227",
    verses: [
      { ref: "James 1:5", text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", version: "KJV" },
      { ref: "Proverbs 1:7", text: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.", version: "KJV" },
      { ref: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path.", version: "KJV" },
      { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.", version: "KJV" },
    ]
  },
  comfort: {
    theme: "Comfort & Grief",
    color: "#3B82F6",
    verses: [
      { ref: "Psalm 34:18", text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", version: "KJV" },
      { ref: "Matthew 5:4", text: "Blessed are they that mourn: for they shall be comforted.", version: "KJV" },
      { ref: "Revelation 21:4", text: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.", version: "KJV" },
      { ref: "2 Corinthians 1:3-4", text: "Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation.", version: "KJV" },
    ]
  },
  gratitude: {
    theme: "Thankfulness",
    color: "#EF4444",
    verses: [
      { ref: "1 Thessalonians 5:18", text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", version: "KJV" },
      { ref: "Psalm 100:4", text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", version: "KJV" },
      { ref: "Colossians 3:15", text: "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.", version: "KJV" },
      { ref: "Psalm 107:1", text: "O give thanks unto the LORD, for he is good: for his mercy endureth for ever.", version: "KJV" },
    ]
  },
};

// Famous verses rendered across major translations — powers the Compare tab.
const FAMOUS_COMPARISONS: { ref: string; bookId: string; chapter: number; verse: number; renderings: { code: string; text: string }[] }[] = [
  {
    ref: "John 3:16", bookId: "JHN", chapter: 3, verse: 16,
    renderings: [
      { code: "KJV", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
      { code: "ASV", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life." },
      { code: "ESV", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
      { code: "NIV", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
      { code: "NLT", text: "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life." },
      { code: "NKJV", text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." },
      { code: "CSB", text: "For God loved the world in this way: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life." },
      { code: "MSG", text: "This is how much God loved the world: He gave his Son, his one and only Son. And this is why: so that no one need be destroyed; by believing in him, anyone can have a whole and lasting life." },
    ],
  },
  {
    ref: "Psalm 23:1", bookId: "PSA", chapter: 23, verse: 1,
    renderings: [
      { code: "KJV", text: "The LORD is my shepherd; I shall not want." },
      { code: "ASV", text: "Jehovah is my shepherd; I shall not want." },
      { code: "ESV", text: "The LORD is my shepherd; I shall not want." },
      { code: "NIV", text: "The LORD is my shepherd, I lack nothing." },
      { code: "NLT", text: "The LORD is my shepherd; I have all that I need." },
      { code: "NKJV", text: "The LORD is my shepherd; I shall not want." },
      { code: "MSG", text: "GOD, my shepherd! I don't need a thing." },
      { code: "AMP", text: "The Lord is my Shepherd [to feed, to guide and to shield me], I shall not want." },
    ],
  },
  {
    ref: "Romans 8:28", bookId: "ROM", chapter: 8, verse: 28,
    renderings: [
      { code: "KJV", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
      { code: "ASV", text: "And we know that to them that love God all things work together for good, even to them that are called according to his purpose." },
      { code: "ESV", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." },
      { code: "NIV", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
      { code: "NLT", text: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them." },
      { code: "NKJV", text: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose." },
    ],
  },
  {
    ref: "Philippians 4:13", bookId: "PHP", chapter: 4, verse: 13,
    renderings: [
      { code: "KJV", text: "I can do all things through Christ which strengtheneth me." },
      { code: "ASV", text: "I can do all things in him that strengtheneth me." },
      { code: "ESV", text: "I can do all things through him who strengthens me." },
      { code: "NIV", text: "I can do all this through him who gives me strength." },
      { code: "NLT", text: "For I can do everything through Christ, who gives me strength." },
      { code: "NKJV", text: "I can do all things through Christ who strengthens me." },
    ],
  },
  {
    ref: "Proverbs 3:5", bookId: "PRO", chapter: 3, verse: 5,
    renderings: [
      { code: "KJV", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding." },
      { code: "ASV", text: "Trust in Jehovah with all thy heart, and lean not upon thine own understanding." },
      { code: "ESV", text: "Trust in the LORD with all your heart, and do not lean on your own understanding." },
      { code: "NIV", text: "Trust in the LORD with all your heart and lean not on your own understanding." },
      { code: "NLT", text: "Trust in the LORD with all your heart; do not depend on your own understanding." },
    ],
  },
  {
    ref: "Isaiah 40:31", bookId: "ISA", chapter: 40, verse: 31,
    renderings: [
      { code: "KJV", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
      { code: "ASV", text: "But they that wait for Jehovah shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; they shall walk, and not faint." },
      { code: "ESV", text: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint." },
      { code: "NIV", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
      { code: "NLT", text: "But those who trust in the LORD will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint." },
    ],
  },
];

// Multi-day sample reading plans with real daily passages.
const READING_PLAN_DAYS: Record<string, { ref: string; bookId: string; chapter: number }[]> = {
  "gospel-of-john": [
    { ref: "John 1", bookId: "JHN", chapter: 1 },
    { ref: "John 2", bookId: "JHN", chapter: 2 },
    { ref: "John 3", bookId: "JHN", chapter: 3 },
    { ref: "John 4", bookId: "JHN", chapter: 4 },
    { ref: "John 5", bookId: "JHN", chapter: 5 },
    { ref: "John 6", bookId: "JHN", chapter: 6 },
    { ref: "John 7", bookId: "JHN", chapter: 7 },
    { ref: "John 8", bookId: "JHN", chapter: 8 },
    { ref: "John 9", bookId: "JHN", chapter: 9 },
    { ref: "John 10", bookId: "JHN", chapter: 10 },
    { ref: "John 11", bookId: "JHN", chapter: 11 },
    { ref: "John 12", bookId: "JHN", chapter: 12 },
    { ref: "John 13", bookId: "JHN", chapter: 13 },
    { ref: "John 14", bookId: "JHN", chapter: 14 },
    { ref: "John 15", bookId: "JHN", chapter: 15 },
    { ref: "John 16", bookId: "JHN", chapter: 16 },
    { ref: "John 17", bookId: "JHN", chapter: 17 },
    { ref: "John 18", bookId: "JHN", chapter: 18 },
    { ref: "John 19", bookId: "JHN", chapter: 19 },
    { ref: "John 20", bookId: "JHN", chapter: 20 },
    { ref: "John 21", bookId: "JHN", chapter: 21 },
  ],
  "psalms-of-comfort": [
    { ref: "Psalm 23", bookId: "PSA", chapter: 23 },
    { ref: "Psalm 27", bookId: "PSA", chapter: 27 },
    { ref: "Psalm 34", bookId: "PSA", chapter: 34 },
    { ref: "Psalm 42", bookId: "PSA", chapter: 42 },
    { ref: "Psalm 46", bookId: "PSA", chapter: 46 },
    { ref: "Psalm 51", bookId: "PSA", chapter: 51 },
    { ref: "Psalm 62", bookId: "PSA", chapter: 62 },
    { ref: "Psalm 91", bookId: "PSA", chapter: 91 },
    { ref: "Psalm 103", bookId: "PSA", chapter: 103 },
    { ref: "Psalm 121", bookId: "PSA", chapter: 121 },
    { ref: "Psalm 139", bookId: "PSA", chapter: 139 },
    { ref: "Psalm 145", bookId: "PSA", chapter: 145 },
  ],
  "life-of-christ": [
    { ref: "Luke 1", bookId: "LUK", chapter: 1 },
    { ref: "Luke 2", bookId: "LUK", chapter: 2 },
    { ref: "Matthew 3", bookId: "MAT", chapter: 3 },
    { ref: "Matthew 4", bookId: "MAT", chapter: 4 },
    { ref: "Matthew 5", bookId: "MAT", chapter: 5 },
    { ref: "Matthew 6", bookId: "MAT", chapter: 6 },
    { ref: "Matthew 7", bookId: "MAT", chapter: 7 },
    { ref: "Mark 4", bookId: "MRK", chapter: 4 },
    { ref: "John 6", bookId: "JHN", chapter: 6 },
    { ref: "Luke 15", bookId: "LUK", chapter: 15 },
    { ref: "John 11", bookId: "JHN", chapter: 11 },
    { ref: "Matthew 26", bookId: "MAT", chapter: 26 },
    { ref: "Matthew 27", bookId: "MAT", chapter: 27 },
    { ref: "John 20", bookId: "JHN", chapter: 20 },
  ],
};

// Inline KJV text for well-known chapters (fallback for API)
const INLINE_CHAPTERS: Record<string, { num: number; text: string }[]> = {
  "JHN-3": [
    { num: 1, text: "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:" },
    { num: 2, text: "The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him." },
    { num: 3, text: "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God." },
    { num: 4, text: "Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?" },
    { num: 5, text: "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God." },
    { num: 6, text: "That which is born of the flesh is flesh; and that which is born of the Spirit is spirit." },
    { num: 7, text: "Marvel not that I said unto thee, Ye must be born again." },
    { num: 8, text: "The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit." },
    { num: 9, text: "Nicodemus answered and said unto him, How can these things be?" },
    { num: 10, text: "Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?" },
    { num: 11, text: "Verily, verily, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness." },
    { num: 12, text: "If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things?" },
    { num: 13, text: "And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven." },
    { num: 14, text: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:" },
    { num: 15, text: "That whosoever believeth in him should not perish, but have eternal life." },
    { num: 16, text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
    { num: 17, text: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved." },
    { num: 18, text: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God." },
    { num: 19, text: "And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil." },
    { num: 20, text: "For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved." },
    { num: 21, text: "But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God." },
    { num: 22, text: "After these things came Jesus and his disciples into the land of Judaea; and there he tarried with them, and baptized." },
    { num: 23, text: "And John also was baptizing in Aenon near to Salim, because there was much water there: and they came, and were baptized." },
    { num: 24, text: "For John was not yet cast into prison." },
    { num: 25, text: "Then there arose a question between some of John's disciples and the Jews about purifying." },
    { num: 26, text: "And they came unto John, and said unto him, Rabbi, he that was with thee beyond Jordan, to whom thou barest witness, behold, the same baptizeth, and all men come to him." },
    { num: 27, text: "John answered and said, A man can receive nothing, except it be given him from heaven." },
    { num: 28, text: "Ye yourselves bear me witness, that I said, I am not the Christ, but that I am sent before him." },
    { num: 29, text: "He that hath the bride is the bridegroom: but the friend of the bridegroom, which standeth and heareth him, rejoiceth greatly because of the bridegroom's voice: this my joy therefore is fulfilled." },
    { num: 30, text: "He must increase, but I must decrease." },
    { num: 31, text: "He that cometh from above is above all: he that is of the earth is earthly, and speaketh of the earth: he that cometh from heaven is above all." },
    { num: 32, text: "And what he hath seen and heard, that he testifieth; and no man receiveth his testimony." },
    { num: 33, text: "He that hath received his testimony hath set to his seal that God is true." },
    { num: 34, text: "For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him." },
    { num: 35, text: "The Father loveth the Son, and hath given all things into his hand." },
    { num: 36, text: "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him." },
  ],
  "PSA-23": [
    { num: 1, text: "The LORD is my shepherd; I shall not want." },
    { num: 2, text: "He maketh me to lie down in green pastures: he leadeth me beside the still waters." },
    { num: 3, text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake." },
    { num: 4, text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
    { num: 5, text: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over." },
    { num: 6, text: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever." },
  ],
  "ROM-8": [
    { num: 1, text: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit." },
    { num: 2, text: "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death." },
    { num: 3, text: "For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:" },
    { num: 4, text: "That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit." },
    { num: 5, text: "For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit." },
    { num: 6, text: "For to be carnally minded is death; but to be spiritually minded is life and peace." },
    { num: 7, text: "Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be." },
    { num: 8, text: "So then they that are in the flesh cannot please God." },
    { num: 9, text: "But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his." },
    { num: 10, text: "And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness." },
    { num: 11, text: "But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you." },
    { num: 12, text: "Therefore, brethren, we are debtors, not to the flesh, to live after the flesh." },
    { num: 13, text: "For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live." },
    { num: 14, text: "For as many as are led by the Spirit of God, they are the sons of God." },
    { num: 15, text: "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father." },
    { num: 16, text: "The Spirit itself beareth witness with our spirit, that we are the children of God:" },
    { num: 17, text: "And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together." },
    { num: 18, text: "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us." },
    { num: 19, text: "For the earnest expectation of the creature waiteth for the manifestation of the sons of God." },
    { num: 20, text: "For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected the same in hope," },
    { num: 21, text: "Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God." },
    { num: 22, text: "For we know that the whole creation groaneth and travaileth in pain together until now." },
    { num: 23, text: "And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body." },
    { num: 24, text: "For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for?" },
    { num: 25, text: "But if we hope for that we see not, then do we with patience wait for it." },
    { num: 26, text: "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered." },
    { num: 27, text: "And he that searcheth the hearts knoweth what is the mind of the Spirit, because he maketh intercession for the saints according to the will of God." },
    { num: 28, text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
    { num: 29, text: "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren." },
    { num: 30, text: "Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified." },
    { num: 31, text: "What shall we then say to these things? If God be for us, who can be against us?" },
    { num: 32, text: "He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?" },
    { num: 33, text: "Who shall lay any thing to the charge of God's elect? It is God that justifieth." },
    { num: 34, text: "Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us." },
    { num: 35, text: "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?" },
    { num: 36, text: "As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter." },
    { num: 37, text: "Nay, in all these things we are more than conquerors through him that loved us." },
    { num: 38, text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come," },
    { num: 39, text: "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord." },
  ],
  "ISA-53": [
    { num: 1, text: "Who hath believed our report? and to whom is the arm of the LORD revealed?" },
    { num: 2, text: "For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him." },
    { num: 3, text: "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not." },
    { num: 4, text: "Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted." },
    { num: 5, text: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed." },
    { num: 6, text: "All we like sheep have gone astray; we have turned every one to his face; and the LORD hath laid on him the iniquity of us all." },
    { num: 7, text: "He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth." },
    { num: 8, text: "He was taken from prison and from judgment: and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people was he stricken." },
    { num: 9, text: "And he made his grave with the wicked, and with the rich in his death; because he had done no violence, neither was any deceit in his mouth." },
    { num: 10, text: "Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand." },
    { num: 11, text: "He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities." },
    { num: 12, text: "Therefore will I divide him a portion with the great, and he shall divide the spoil with the strong; because he hath poured out his soul unto death: and he was numbered with the transgressors; and he bare the sin of many, and made intercession for the transgressors." },
  ],
  "EPH-2": [
    { num: 1, text: "And you hath he quickened, who were dead in trespasses and sins;" },
    { num: 2, text: "Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience:" },
    { num: 3, text: "Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others." },
    { num: 4, text: "But God, who is rich in mercy, for his great love wherewith he loved us," },
    { num: 5, text: "Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)" },
    { num: 6, text: "And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:" },
    { num: 7, text: "That in the ages to come he might shew the exceeding riches of his grace in his kindness toward us through Christ Jesus." },
    { num: 8, text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:" },
    { num: 9, text: "Not of works, lest any man should boast." },
    { num: 10, text: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them." },
    { num: 11, text: "Wherefore remember, that ye being in time past Gentiles in the flesh, who are called Uncircumcision by that which is called the Circumcision in the flesh made by hands;" },
    { num: 12, text: "That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world:" },
    { num: 13, text: "But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ." },
    { num: 14, text: "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us;" },
    { num: 15, text: "Having abolished in his flesh the enmity, even the law of commandments contained in ordinances; for to make in himself of twain one new man, so making peace;" },
    { num: 16, text: "And that he might reconcile both unto God in one body by the cross, having slain the enmity thereby:" },
    { num: 17, text: "And came and preached peace to you which were afar off, and to them that were nigh." },
    { num: 18, text: "For through him we both have access by one Spirit unto the Father." },
    { num: 19, text: "Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God;" },
    { num: 20, text: "And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;" },
    { num: 21, text: "In whom all the building fitly framed together groweth unto an holy temple in the Lord:" },
    { num: 22, text: "In whom ye also are builded together for an habitation of God through the Spirit." },
  ],
  "GEN-1": [
    { num: 1, text: "In the beginning God created the heaven and the earth." },
    { num: 2, text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." },
    { num: 3, text: "And God said, Let there be light: and there was light." },
    { num: 4, text: "And God saw the light, that it was good: and God divided the light from the darkness." },
    { num: 5, text: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day." },
    { num: 6, text: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters." },
    { num: 7, text: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so." },
    { num: 8, text: "And God called the firmament Heaven. And the evening and the morning were the second day." },
    { num: 9, text: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so." },
    { num: 10, text: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good." },
    { num: 11, text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so." },
    { num: 12, text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good." },
    { num: 13, text: "And the evening and the morning were the third day." },
    { num: 14, text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:" },
    { num: 15, text: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so." },
    { num: 16, text: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also." },
    { num: 17, text: "And God set them in the firmament of the heaven to give light upon the earth," },
    { num: 18, text: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good." },
    { num: 19, text: "And the evening and the morning were the fourth day." },
    { num: 20, text: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven." },
    { num: 21, text: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good." },
    { num: 22, text: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth." },
    { num: 23, text: "And the evening and the morning were the fifth day." },
    { num: 24, text: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so." },
    { num: 25, text: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good." },
    { num: 26, text: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth." },
    { num: 27, text: "So God created man in his own image, in the image of God created he him; male and female created he them." },
    { num: 28, text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth." },
    { num: 29, text: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat." },
    { num: 30, text: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so." },
    { num: 31, text: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day." },
  ],
};

type MainTab = "read" | "search" | "compare" | "study" | "plans";

type ChapterData = { num: number; text: string }[];

type SearchHit = { ref: string; bookId: string; chapter: number; verse: number; text: string };

export default function BiblePage() {
  const [mainTab, setMainTab] = usePersistedState<MainTab>("vine_bible_main_tab", "read");
  const [selectedBook, setSelectedBook] = useState(ALL_BOOKS.find(b => b.id === "GEN")!);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [versions, setVersions] = useState<Version[]>(FALLBACK_VERSIONS);
  const [selectedVersion, setSelectedVersion] = useState<Version>(
    FALLBACK_VERSIONS.find(v => v.code === "KJV") ?? FALLBACK_VERSIONS[0]
  );
  const [showBookList, setShowBookList] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const [showVersionList, setShowVersionList] = useState(false);
  const versionDropdownRef = useRef<HTMLDivElement>(null);
  const chapterDropdownRef = useRef<HTMLDivElement>(null);
  // Verse number a deep link (?verse=) wants us to scroll to once the chapter
  // has rendered. Cleared after the scroll fires.
  const pendingVerseRef = useRef<number | null>(null);
  const [highlightedVerse, setHighlightedVerse] = useState<number | null>(null);
  const [pulseVerse, setPulseVerse] = useState<number | null>(null);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<string>>(() => {
    try { const bm = localStorage.getItem("vine-bible-bookmarks"); return bm ? new Set(JSON.parse(bm)) : new Set(); } catch { return new Set(); }
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchHit[]>([]);
  const [searchTotal, setSearchTotal] = useState(0);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [searchScope, setSearchScope] = usePersistedState<"ALL" | "OT" | "NT">("vine_bible_search_scope", "ALL");
  const [compareVersions, setCompareVersions] = useState<string[]>([]);
  const [activeComparison, setActiveComparison] = useState(0);
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [completedDays, setCompletedDays] = useState<Set<string>>(() => {
    try { const done = localStorage.getItem("vine-bible-plan-progress"); return done ? new Set(JSON.parse(done)) : new Set(); } catch { return new Set(); }
  });
  const [activeTheme, setActiveTheme] = usePersistedState<string>("vine_bible_active_theme", "salvation");
  const [otFilter, setOtFilter] = useState(true);
  const [ntFilter, setNtFilter] = useState(true);
  const [fontSize, setFontSize] = useState(17);
  const [showStudyNotes, setShowStudyNotes] = useState(true);

  // Chapter fetched from the API (for non-inline chapters).
  const [fetchedVerses, setFetchedVerses] = useState<ChapterData | null>(null);
  const [chapterLoading, setChapterLoading] = useState(false);
  const [chapterError, setChapterError] = useState<string | null>(null);
  const [chapterCopyright, setChapterCopyright] = useState("");
  const [chapterReference, setChapterReference] = useState("");

  const chapterKey = `${selectedBook.id}-${selectedChapter}`;
  const inlineVerses = INLINE_CHAPTERS[chapterKey] || null;
  // The KJV inline text only matches when the KJV-equivalent version is selected.
  // For other translations we always fetch so the user sees the real text.
  const useInline = inlineVerses !== null && selectedVersion.code.toUpperCase().includes("KJV");
  const verses: ChapterData | null = useInline ? inlineVerses : fetchedVerses;
  const studyNote = STUDY_NOTES[selectedBook.id]?.[selectedChapter] || null;

  const chapterArray = Array.from({ length: selectedBook.chapters }, (_, i) => i + 1);

  // ── Close dropdowns when clicking/tapping outside them ─────────────────────
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (versionDropdownRef.current && !versionDropdownRef.current.contains(target)) {
        setShowVersionList(false);
      }
      if (chapterDropdownRef.current && !chapterDropdownRef.current.contains(target)) {
        setShowChapterList(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  // ── Load available versions from the API on mount ──────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/bible?action=versions");
        if (!res.ok) return;
        const data: ApiVersion[] = await res.json();
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        const mapped: Version[] = data.map((v) => ({
          id: v.id,
          code: (v.abbreviation || v.name || "").toUpperCase(),
          name: v.name,
          year: extractYear(v.name, v.description),
        }));
        const ordered = prioritizeVersions(mapped);
        setVersions(ordered);
        // Default to NIV when the API key is licensed for it; otherwise fall
        // back to the most-popular available version (the bundled KJV always
        // works, so the page never appears empty).
        const niv = ordered.find(
          (v) => v.code.includes("NIV") || v.name.toUpperCase().includes("NEW INTERNATIONAL")
        );
        setSelectedVersion(niv ?? ordered[0]);
      } catch {
        // Keep fallback versions on any failure (e.g. offline dev).
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // ── Fetch chapter text when book/chapter/version changes (non-inline) ───────
  useEffect(() => {
    if (mainTab !== "read") return;
    if (useInline) {
      setFetchedVerses(null);
      setChapterError(null);
      setChapterLoading(false);
      setChapterCopyright("");
      setChapterReference("");
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    setChapterLoading(true);
    setChapterError(null);
    setFetchedVerses(null);

    (async () => {
      try {
        const url = `/api/bible?action=chapter&bibleId=${encodeURIComponent(selectedVersion.id)}&bookId=${encodeURIComponent(selectedBook.id)}&chapter=${selectedChapter}`;
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setChapterError(json?.error || `Failed to load chapter (${res.status})`);
          setChapterLoading(false);
          return;
        }
        setFetchedVerses(Array.isArray(json.verses) ? json.verses : []);
        setChapterCopyright(typeof json.copyright === "string" ? json.copyright : "");
        setChapterReference(typeof json.reference === "string" ? json.reference : "");
        setChapterLoading(false);
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return;
        setChapterError(err instanceof Error ? err.message : "Failed to load chapter");
        setChapterLoading(false);
      }
    })();

    return () => { cancelled = true; controller.abort(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook.id, selectedChapter, selectedVersion.id, useInline, mainTab]);

  // ── Scroll to top on chapter change (unless a deep link wants a verse) ──────
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pendingVerseRef.current != null) return; // a verse scroll is pending
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedBook.id, selectedChapter]);

  // ── Scroll to (and pulse) the deep-linked verse once the chapter renders ────
  useEffect(() => {
    const target = pendingVerseRef.current;
    if (target == null) return;
    if (!verses || verses.length === 0) return;
    // Wait a frame so the verse spans are in the DOM.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(`verse-${target}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setPulseVerse(target);
        setTimeout(() => setPulseVerse(null), 1400);
        pendingVerseRef.current = null;
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [verses, selectedBook.id, selectedChapter]);

  // ── Deep link + remember reading position + plan progress (mount only) ──────
  // A ?book=&chapter=&verse= query string (e.g. from a <VerseRef> click on a
  // content page) takes priority over the saved reading position so the link
  // always lands exactly where it points.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let deepLinked = false;
    try {
      const params = new URLSearchParams(window.location.search);
      const bookParam = (params.get("book") || "").toUpperCase();
      const chapterParam = Number(params.get("chapter"));
      const verseParam = Number(params.get("verse"));
      const book = ALL_BOOKS.find((b) => b.id === bookParam);
      if (book) {
        deepLinked = true;
        const ch = chapterParam >= 1 && chapterParam <= book.chapters ? chapterParam : 1;
        setMainTab("read");
        setSelectedBook(book);
        setSelectedChapter(ch);
        if (verseParam >= 1) {
          setHighlightedVerse(verseParam);
          pendingVerseRef.current = verseParam;
        }
      }
    } catch { /* ignore */ }

    try {
      if (!deepLinked) {
        const pos = localStorage.getItem("vine-bible-pos");
        if (pos) {
          const { bookId, chapter } = JSON.parse(pos);
          const book = ALL_BOOKS.find((b) => b.id === bookId);
          if (book && chapter >= 1 && chapter <= book.chapters) {
            setSelectedBook(book);
            setSelectedChapter(chapter);
          }
        }
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("vine-bible-pos", JSON.stringify({ bookId: selectedBook.id, chapter: selectedChapter }));
    } catch { /* ignore */ }
  }, [selectedBook.id, selectedChapter]);

  const toggleDay = useCallback((key: string) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      if (typeof window !== "undefined") {
        try { localStorage.setItem("vine-bible-plan-progress", JSON.stringify([...next])); } catch { /* ignore */ }
      }
      return next;
    });
  }, []);

  // A stable retry counter so the chapter effect can be forced to re-run.
  const retryChapter = useCallback(() => {
    // Re-trigger the effect by nudging fetchedVerses through a no-op then refetch.
    setChapterError(null);
    setChapterLoading(true);
    const controller = new AbortController();
    (async () => {
      try {
        const url = `/api/bible?action=chapter&bibleId=${encodeURIComponent(selectedVersion.id)}&bookId=${encodeURIComponent(selectedBook.id)}&chapter=${selectedChapter}`;
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        if (!res.ok) {
          setChapterError(json?.error || `Failed to load chapter (${res.status})`);
          setChapterLoading(false);
          return;
        }
        setFetchedVerses(Array.isArray(json.verses) ? json.verses : []);
        setChapterCopyright(typeof json.copyright === "string" ? json.copyright : "");
        setChapterReference(typeof json.reference === "string" ? json.reference : "");
        setChapterLoading(false);
      } catch (err) {
        setChapterError(err instanceof Error ? err.message : "Failed to load chapter");
        setChapterLoading(false);
      }
    })();
  }, [selectedVersion.id, selectedBook.id, selectedChapter]);

  const bookmarkVerse = (ref: string) => {
    setBookmarkedVerses(prev => {
      const next = new Set(prev);
      if (next.has(ref)) next.delete(ref); else next.add(ref);
      if (typeof window !== "undefined") {
        try { localStorage.setItem("vine-bible-bookmarks", JSON.stringify([...next])); } catch { /* ignore */ }
      }
      return next;
    });
  };

  const navigateChapter = (dir: -1 | 1) => {
    const newChapter = selectedChapter + dir;
    if (newChapter < 1) {
      const bookIdx = ALL_BOOKS.findIndex(b => b.id === selectedBook.id);
      if (bookIdx > 0) {
        const prevBook = ALL_BOOKS[bookIdx - 1];
        setSelectedBook(prevBook);
        setSelectedChapter(prevBook.chapters);
      }
    } else if (newChapter > selectedBook.chapters) {
      const bookIdx = ALL_BOOKS.findIndex(b => b.id === selectedBook.id);
      if (bookIdx < ALL_BOOKS.length - 1) {
        setSelectedBook(ALL_BOOKS[bookIdx + 1]);
        setSelectedChapter(1);
      }
    } else {
      setSelectedChapter(newChapter);
    }
    setHighlightedVerse(null);
  };

  // ── Keyboard arrow navigation (only on the read tab) ───────────────────────
  useEffect(() => {
    if (mainTab !== "read") return;
    const onKey = (e: KeyboardEvent) => {
      // Ignore when typing in inputs/textareas.
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (e.key === "ArrowLeft") navigateChapter(-1);
      else if (e.key === "ArrowRight") navigateChapter(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainTab, selectedBook.id, selectedChapter]);

  // Full-text search across the entire bundled Bible (all 66 books) via the
  // /api/bible?action=search endpoint. Uses the bundled translation that
  // matches the current selection when possible (KJV or ASV), else KJV.
  const handleSearch = useCallback(async () => {
    const q = searchQuery.trim();
    if (q.length < 2) return;
    const searchBibleId = selectedVersion.code.includes("ASV") ? "ASV-LOCAL" : "KJV-LOCAL";
    setSearchLoading(true);
    setSearchDone(false);
    try {
      const res = await fetch(`/api/bible?action=search&q=${encodeURIComponent(q)}&bibleId=${searchBibleId}`);
      const json = await res.json();
      const all: SearchHit[] = Array.isArray(json.results) ? json.results : [];
      const scoped = all.filter((r) => {
        if (searchScope === "ALL") return true;
        const isOT = OT_BOOKS.some((b) => b.id === r.bookId);
        return searchScope === "OT" ? isOT : !isOT;
      });
      setSearchResults(scoped);
      setSearchTotal(typeof json.total === "number" ? json.total : scoped.length);
      setSearchDone(true);
    } catch {
      setSearchResults([]);
      setSearchTotal(0);
      setSearchDone(true);
    } finally {
      setSearchLoading(false);
    }
  }, [searchQuery, selectedVersion.code, searchScope]);

  // Jump straight from a search hit (or cross-reference) to the reader.
  const goToReference = useCallback((bookId: string, chapter: number, verse?: number) => {
    const book = ALL_BOOKS.find((b) => b.id === bookId);
    if (!book) return;
    setSelectedBook(book);
    setSelectedChapter(Math.min(Math.max(1, chapter), book.chapters));
    setHighlightedVerse(verse ?? null);
    setMainTab("read");
  }, []);

  // Parse a human reference like "1 Corinthians 13:4" or "Psalm 23" into a
  // book + chapter (+ optional verse) so cross-reference chips are clickable.
  const openRef = useCallback((ref: string) => {
    const m = ref.match(/^\s*((?:[1-3]\s)?[A-Za-z ]+?)\s+(\d+)(?::(\d+))?/);
    if (!m) return;
    const namePart = m[1].trim().toLowerCase();
    const book = ALL_BOOKS.find((b) => {
      const n = b.name.toLowerCase();
      return n === namePart || n.startsWith(namePart) || namePart.startsWith(n) ||
        b.abbr.toLowerCase() === namePart;
    });
    if (!book) return;
    goToReference(book.id, Number(m[2]), m[3] ? Number(m[3]) : undefined);
  }, [goToReference]);

  const filteredBooks = ALL_BOOKS.filter(b => {
    const isOT = OT_BOOKS.some(ob => ob.id === b.id);
    return isOT ? otFilter : ntFilter;
  });

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <style>{`
        @keyframes biblePulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        .bible-read-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 20px;
        }
        @media (max-width: 860px) {
          .bible-read-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <Navbar />
      <main style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", padding: "104px 0 32px" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "6px 16px", fontSize: 12, color: GREEN, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE HOLY BIBLE
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.1 }}>
            God&apos;s Word for Every Believer
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            All 66 books · Multiple translations · Study notes · Cross-references · Chapter-by-chapter reading
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["66 Books", "15+ Versions", "OT & NT", "Study Notes", "Cross-References"].map(tag => (
              <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: MUTED }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 6, marginBottom: 28, overflowX: "auto" }}>
          {([
            { id: "read", label: "📖 Read", desc: "Chapter by chapter" },
            { id: "search", label: "🔍 Search", desc: "Find passages" },
            { id: "compare", label: "⚖️ Compare", desc: "Side-by-side versions" },
            { id: "study", label: "📚 Study", desc: "Themes & devotions" },
            { id: "plans", label: "📅 Reading Plans", desc: "Structured plans" },
          ] as const).map(tab => (
            <button
              key={tab.id}
              onClick={() => setMainTab(tab.id)}
              style={{
                flex: 1, minWidth: 100, padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, transition: "all 0.2s",
                background: mainTab === tab.id ? GREEN : "transparent",
                color: mainTab === tab.id ? "#07070F" : MUTED,
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===================== READ TAB ===================== */}
        {mainTab === "read" && (
          <div className="bible-read-grid">

            {/* Book/Chapter sidebar */}
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>FILTER</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontSize: 12, color: MUTED }}>
                      <input type="checkbox" checked={otFilter} onChange={e => setOtFilter(e.target.checked)} style={{ accentColor: GREEN }} /> OT
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontSize: 12, color: MUTED }}>
                      <input type="checkbox" checked={ntFilter} onChange={e => setNtFilter(e.target.checked)} style={{ accentColor: GREEN }} /> NT
                    </label>
                  </div>
                </div>
                <div style={{ maxHeight: 420, overflowY: "auto" }}>
                  {otFilter && (
                    <>
                      <div style={{ fontSize: 10, color: GREEN, fontWeight: 800, letterSpacing: 2, padding: "4px 0 8px" }}>OLD TESTAMENT</div>
                      {OT_BOOKS.map(book => (
                        <button
                          key={book.id}
                          onClick={() => { setSelectedBook(book); setSelectedChapter(1); setHighlightedVerse(null); }}
                          style={{
                            width: "100%", textAlign: "left", padding: "7px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 13, fontWeight: selectedBook.id === book.id ? 700 : 400,
                            background: selectedBook.id === book.id ? `${GREEN}18` : "transparent",
                            color: selectedBook.id === book.id ? GREEN : MUTED,
                            transition: "all 0.15s",
                          }}
                        >
                          {book.name}
                        </button>
                      ))}
                    </>
                  )}
                  {ntFilter && (
                    <>
                      <div style={{ fontSize: 10, color: PURPLE, fontWeight: 800, letterSpacing: 2, padding: "12px 0 8px" }}>NEW TESTAMENT</div>
                      {NT_BOOKS.map(book => (
                        <button
                          key={book.id}
                          onClick={() => { setSelectedBook(book); setSelectedChapter(1); setHighlightedVerse(null); }}
                          style={{
                            width: "100%", textAlign: "left", padding: "7px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 13, fontWeight: selectedBook.id === book.id ? 700 : 400,
                            background: selectedBook.id === book.id ? `${PURPLE}30` : "transparent",
                            color: selectedBook.id === book.id ? "#A78BFA" : MUTED,
                            transition: "all 0.15s",
                          }}
                        >
                          {book.name}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Main reading area */}
            <div>
              {/* Controls bar */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, marginBottom: 16, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                {/* Version selector */}
                <div ref={versionDropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => { setShowVersionList(prev => !prev); setShowChapterList(false); setShowBookList(false); }}
                    style={{ background: `${PURPLE}25`, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "8px 14px", color: "#A78BFA", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                  >
                    {selectedVersion.code} ▾
                  </button>
                  {showVersionList && (
                    <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 9999, background: "#1A1A2E", border: `1px solid ${BORDER}`, borderRadius: 10, padding: 8, width: 300, maxHeight: 400, overflowY: "auto", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
                      <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, letterSpacing: 1.5, padding: "4px 8px 8px" }}>{versions.length} TRANSLATIONS</div>
                      {versions.map(v => (
                        <button key={v.id} onClick={() => { setSelectedVersion(v); setShowVersionList(false); }} style={{ width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: 6, border: "none", cursor: "pointer", background: selectedVersion.id === v.id ? `${PURPLE}30` : "transparent", color: selectedVersion.id === v.id ? "#A78BFA" : TEXT, fontSize: 13, marginBottom: 2 }}>
                          <div style={{ fontWeight: 700 }}>{v.code}{v.name && v.name.toUpperCase() !== v.code ? ` — ${v.name}` : ""}</div>
                          {v.year && <div style={{ color: MUTED, fontSize: 11 }}>{v.year}</div>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Book display */}
                <div style={{ fontWeight: 700, fontSize: 16, color: TEXT }}>{selectedBook.name}</div>

                {/* Chapter selector */}
                <div ref={chapterDropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => { setShowChapterList(prev => !prev); setShowVersionList(false); setShowBookList(false); }}
                    style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}50`, borderRadius: 8, padding: "8px 14px", color: GREEN, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                  >
                    Ch. {selectedChapter} ▾
                  </button>
                  {showChapterList && (
                    <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 9999, background: "#1A1A2E", border: `1px solid ${BORDER}`, borderRadius: 10, padding: 8, width: 220, maxHeight: 300, overflowY: "auto", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
                        {chapterArray.map(ch => (
                          <button key={ch} onClick={() => { setSelectedChapter(ch); setShowChapterList(false); setHighlightedVerse(null); }} style={{ padding: "8px 4px", borderRadius: 6, border: "none", cursor: "pointer", background: selectedChapter === ch ? GREEN : `${BORDER}`, color: selectedChapter === ch ? "#07070F" : TEXT, fontWeight: 700, fontSize: 13, textAlign: "center" }}>
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ color: MUTED, fontSize: 12 }}>Aa</span>
                  <input type="range" min={13} max={24} value={fontSize} onChange={e => setFontSize(Number(e.target.value))} style={{ width: 80, accentColor: GREEN }} />
                  <button onClick={() => setShowStudyNotes(!showStudyNotes)} style={{ padding: "6px 12px", borderRadius: 6, border: `1px solid ${showStudyNotes ? GREEN : BORDER}`, background: showStudyNotes ? `${GREEN}15` : "transparent", color: showStudyNotes ? GREEN : MUTED, fontSize: 12, cursor: "pointer", fontWeight: 700 }}>
                    Study Notes
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <button onClick={() => navigateChapter(-1)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", color: MUTED, cursor: "pointer", fontSize: 14 }}>
                  ← Prev Chapter
                </button>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 22, fontWeight: 700, color: TEXT }}>
                    {selectedBook.name} {selectedChapter}
                  </span>
                  <div style={{ fontSize: 12, color: MUTED }}>{selectedVersion.name}</div>
                </div>
                <button onClick={() => navigateChapter(1)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", color: MUTED, cursor: "pointer", fontSize: 14 }}>
                  Next Chapter →
                </button>
              </div>

              {/* Bible text */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px", marginBottom: 20 }}>
                {chapterLoading ? (
                  /* Loading skeleton — animated pulsing lines */
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[92, 100, 88, 96, 70, 100, 84, 90, 100, 60].map((w, i) => (
                      <div
                        key={i}
                        style={{
                          height: 14,
                          width: `${w}%`,
                          borderRadius: 6,
                          background: BORDER,
                          animation: "biblePulse 1.4s ease-in-out infinite",
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                ) : chapterError ? (
                  <div style={{ textAlign: "center", padding: "50px 20px" }}>
                    <div style={{ fontSize: 44, marginBottom: 12 }}>⚠️</div>
                    <p style={{ color: TEXT, fontSize: 16, marginBottom: 6 }}>Couldn&apos;t load this chapter</p>
                    <p style={{ color: MUTED, fontSize: 13, marginBottom: 20, maxWidth: 420, margin: "0 auto 20px" }}>{chapterError}</p>
                    <button onClick={retryChapter} style={{ padding: "10px 24px", borderRadius: 8, background: GREEN, color: "#07070F", fontWeight: 800, fontSize: 14, cursor: "pointer", border: "none" }}>
                      Retry
                    </button>
                  </div>
                ) : verses && verses.length > 0 ? (
                  <>
                    <div style={{ lineHeight: 1.9 }}>
                      {verses.map(v => (
                        <span
                          key={v.num}
                          id={`verse-${v.num}`}
                          onClick={() => setHighlightedVerse(highlightedVerse === v.num ? null : v.num)}
                          style={{
                            display: "inline",
                            cursor: "pointer",
                            background: highlightedVerse === v.num ? `${GREEN}25` : "transparent",
                            borderRadius: 4,
                            padding: highlightedVerse === v.num ? "2px 4px" : "0",
                            transition: "background 0.2s",
                            scrollMarginTop: 110,
                            animation: pulseVerse === v.num ? "verseTargetPulse 1.4s ease-out" : undefined,
                          }}
                        >
                          <sup style={{ color: GREEN, fontSize: "0.65em", fontWeight: 800, marginRight: 3, verticalAlign: "super" }}>{v.num}</sup>
                          <span style={{ fontSize: fontSize, color: TEXT, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>{v.text} </span>
                        </span>
                      ))}
                    </div>
                    {/* Copyright / version note */}
                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${BORDER}`, color: MUTED, fontSize: 11, lineHeight: 1.6 }}>
                      {chapterReference && <span style={{ fontWeight: 700, color: MUTED }}>{chapterReference} · </span>}
                      {selectedVersion.name || selectedVersion.code}
                      {chapterCopyright ? ` — ${chapterCopyright}` : useInline ? " — Public Domain (King James Version)" : ""}
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "60px 20px" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>📖</div>
                    <p style={{ color: MUTED, fontSize: 16, marginBottom: 8 }}>
                      {selectedBook.name} {selectedChapter} — {selectedVersion.code}
                    </p>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 24px" }}>
                      No verses were returned for this chapter in this translation. Try another version, or jump to one of these popular chapters:
                    </p>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                      {[["JHN", 3, "John 3"], ["PSA", 23, "Psalm 23"], ["ROM", 8, "Romans 8"], ["ISA", 53, "Isaiah 53"], ["GEN", 1, "Genesis 1"], ["EPH", 2, "Ephesians 2"]].map(([bid, ch, label]) => (
                        <button key={String(label)} onClick={() => { setSelectedBook(ALL_BOOKS.find(b => b.id === bid)!); setSelectedChapter(Number(ch)); }} style={{ padding: "8px 16px", background: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 8, color: GREEN, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Highlighted verse actions */}
              {highlightedVerse && verses && (
                <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderRadius: 10, padding: 16, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}>{selectedBook.abbr} {selectedChapter}:{highlightedVerse} ({selectedVersion.code})</span>
                    <p style={{ color: TEXT, fontSize: 14, marginTop: 4, fontFamily: "var(--font-cormorant, Georgia, serif)", fontStyle: "italic" }}>
                      &ldquo;{verses.find(v => v.num === highlightedVerse)?.text}&rdquo;
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() => bookmarkVerse(`${selectedBook.abbr}${selectedChapter}:${highlightedVerse}`)}
                      style={{ padding: "6px 12px", borderRadius: 6, border: `1px solid ${BORDER}`, background: bookmarkedVerses.has(`${selectedBook.abbr}${selectedChapter}:${highlightedVerse}`) ? `${GREEN}20` : CARD, color: GREEN, fontSize: 12, cursor: "pointer", fontWeight: 700 }}
                    >
                      {bookmarkedVerses.has(`${selectedBook.abbr}${selectedChapter}:${highlightedVerse}`) ? "★ Saved" : "☆ Save"}
                    </button>
                    <button
                      onClick={() => { if (navigator.clipboard) navigator.clipboard.writeText(`"${verses.find(v => v.num === highlightedVerse)?.text}" — ${selectedBook.abbr} ${selectedChapter}:${highlightedVerse} ${selectedVersion.code}`); }}
                      style={{ padding: "6px 12px", borderRadius: 6, border: `1px solid ${BORDER}`, background: CARD, color: MUTED, fontSize: 12, cursor: "pointer" }}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              )}

              {/* Study Notes */}
              {showStudyNotes && studyNote && (
                <div style={{ background: "#0D1117", border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <h3 style={{ color: "#A78BFA", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>📚 Study Notes</h3>
                      <p style={{ color: GREEN, fontSize: 14, fontWeight: 700 }}>{studyNote.context}</p>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{studyNote.note}</p>
                  <div>
                    <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>CROSS-REFERENCES</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {studyNote.crossRefs.map(ref => (
                        <span
                          key={ref}
                          style={{ padding: "4px 12px", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, fontSize: 12, color: "#A78BFA", cursor: "pointer", fontWeight: 600 }}
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Book info card */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h4 style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 12 }}>ABOUT {selectedBook.name.toUpperCase()}</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  <div style={{ textAlign: "center", padding: 12, background: BG, borderRadius: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 24 }}>{selectedBook.chapters}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>Chapters</div>
                  </div>
                  <div style={{ textAlign: "center", padding: 12, background: BG, borderRadius: 8 }}>
                    <div style={{ color: "#A78BFA", fontWeight: 800, fontSize: 20 }}>{OT_BOOKS.some(b => b.id === selectedBook.id) ? "OT" : "NT"}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>Testament</div>
                  </div>
                  <div style={{ textAlign: "center", padding: 12, background: BG, borderRadius: 8 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: 16 }}>{selectedBook.abbr}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>Abbreviation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== SEARCH TAB ===================== */}
        {/* ===================== SEARCH TAB ===================== */}
        {mainTab === "search" && (
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Search the Scriptures</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 18 }}>
                Full-text search across all 66 books, 31,102 verses — powered by the {selectedVersion.code.includes("ASV") ? "ASV" : "KJV"}.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  placeholder="Search words or phrases — e.g. love one another, fear not, living water"
                  style={{ flex: 1, minWidth: 220, padding: "12px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 15 }}
                />
                <button onClick={handleSearch} disabled={searchLoading} style={{ padding: "12px 28px", borderRadius: 8, background: GREEN, color: "#07070F", fontWeight: 800, fontSize: 15, cursor: "pointer", border: "none", opacity: searchLoading ? 0.6 : 1 }}>
                  {searchLoading ? "Searching…" : "Search"}
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 14, alignItems: "center" }}>
                <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>SCOPE:</span>
                {([["ALL", "Whole Bible"], ["OT", "Old Testament"], ["NT", "New Testament"]] as const).map(([s, label]) => (
                  <button key={s} onClick={() => setSearchScope(s)} style={{ padding: "5px 14px", borderRadius: 20, border: `1px solid ${searchScope === s ? GREEN : BORDER}`, background: searchScope === s ? `${GREEN}20` : "transparent", color: searchScope === s ? GREEN : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {searchLoading && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                    <div style={{ height: 12, width: "30%", background: BORDER, borderRadius: 4, marginBottom: 10 }} />
                    <div style={{ height: 10, width: "92%", background: BORDER, borderRadius: 4, marginBottom: 6 }} />
                    <div style={{ height: 10, width: "78%", background: BORDER, borderRadius: 4 }} />
                  </div>
                ))}
              </div>
            )}

            {!searchLoading && searchDone && searchResults.length > 0 && (
              <div>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>
                  <span style={{ color: GREEN, fontWeight: 800 }}>{searchTotal.toLocaleString()}</span> result{searchTotal !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
                  {searchTotal > searchResults.length ? ` — showing first ${searchResults.length}` : ""}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {searchResults.map((r, i) => {
                    const idx = r.text.toLowerCase().indexOf(searchQuery.trim().toLowerCase());
                    return (
                      <div key={i} onClick={() => goToReference(r.bookId, r.chapter, r.verse)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, cursor: "pointer", transition: "border-color 0.15s" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ color: GREEN, fontWeight: 800, fontSize: 14 }}>{r.ref}</span>
                          <span style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>Open →</span>
                        </div>
                        <p style={{ color: TEXT, fontSize: 16, fontFamily: "var(--font-cormorant, Georgia, serif)", lineHeight: 1.7 }}>
                          {idx === -1 ? r.text : (<>{r.text.slice(0, idx)}<mark style={{ background: `${GREEN}33`, color: TEXT, padding: "0 2px", borderRadius: 3 }}>{r.text.slice(idx, idx + searchQuery.trim().length)}</mark>{r.text.slice(idx + searchQuery.trim().length)}</>)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {!searchLoading && searchDone && searchResults.length === 0 && (
              <div style={{ textAlign: "center", padding: 40, color: MUTED }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                <p>No verses found for &ldquo;{searchQuery}&rdquo;. Try different words.</p>
              </div>
            )}

            {!searchDone && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Popular Searches</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                  {["love", "grace", "faith", "hope", "peace", "joy", "fear not", "born again", "Holy Spirit", "forgiveness", "salvation", "eternal life", "shepherd", "righteousness", "the cross", "kingdom of God", "living water", "be still", "do not be afraid", "love one another"].map(term => (
                    <button key={term} onClick={() => { setSearchQuery(term); setTimeout(() => handleSearch(), 30); }} style={{ padding: "8px 16px", background: BG, border: `1px solid ${BORDER}`, borderRadius: 20, color: MUTED, fontSize: 13, cursor: "pointer" }}>
                      {term}
                    </button>
                  ))}
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: 16 }}>
                  <h4 style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Search Tips</h4>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                    <li>Type a <strong style={{ color: TEXT }}>phrase</strong> (&ldquo;valley of the shadow&rdquo;) to find an exact match.</li>
                    <li>Type <strong style={{ color: TEXT }}>multiple words</strong> to find verses containing all of them.</li>
                    <li>Click any result to jump straight to that verse in the reader.</li>
                    <li>Switch translation (KJV/ASV) in the reader to search that text.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== COMPARE TAB ===================== */}
        {mainTab === "compare" && (
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Compare Translations</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 18 }}>See how the great translations render the same passage, side by side. Choose a verse:</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {FAMOUS_COMPARISONS.map((c, i) => (
                  <button key={c.ref} onClick={() => setActiveComparison(i)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${activeComparison === i ? GREEN : BORDER}`, background: activeComparison === i ? `${GREEN}20` : "transparent", color: activeComparison === i ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    {c.ref}
                  </button>
                ))}
              </div>
            </div>

            {(() => {
              const c = FAMOUS_COMPARISONS[activeComparison];
              const active = compareVersions.length > 0 ? c.renderings.filter(r => compareVersions.includes(r.code)) : c.renderings;
              return (
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
                    <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 20 }}>{c.ref}</h3>
                    <button onClick={() => goToReference(c.bookId, c.chapter, c.verse)} style={{ padding: "6px 14px", borderRadius: 8, background: `${PURPLE}25`, border: `1px solid ${PURPLE}`, color: "#A78BFA", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                      Read in context →
                    </button>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                    {c.renderings.map(r => (
                      <button key={r.code} onClick={() => setCompareVersions(prev => prev.includes(r.code) ? prev.filter(x => x !== r.code) : [...prev, r.code])} style={{ padding: "5px 12px", borderRadius: 16, border: `1px solid ${compareVersions.includes(r.code) ? GREEN : BORDER}`, background: compareVersions.includes(r.code) ? `${GREEN}20` : "transparent", color: compareVersions.includes(r.code) ? GREEN : MUTED, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        {r.code}
                      </button>
                    ))}
                    {compareVersions.length > 0 && (
                      <button onClick={() => setCompareVersions([])} style={{ padding: "5px 12px", borderRadius: 16, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, fontSize: 11, cursor: "pointer" }}>Show all</button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {active.map(r => (
                      <div key={r.code} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                        <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: 1.5, marginBottom: 8 }}>{r.code}</div>
                        <p style={{ color: TEXT, fontSize: 18, fontFamily: "var(--font-cormorant, Georgia, serif)", lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Understanding the Translation Spectrum</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 18 }}>Translations fall on a spectrum from word-for-word (formal) to thought-for-thought (dynamic) to paraphrase.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                {[
                  { label: "Word-for-Word", examples: "NASB · ESV · KJV · ASV", color: "#3B82F6", desc: "Closest to the original wording. Best for detailed study." },
                  { label: "Balanced", examples: "CSB · NIV · NET", color: GREEN, desc: "Balance accuracy and readability. Great all-purpose Bibles." },
                  { label: "Thought-for-Thought", examples: "NLT · GNT", color: "#F59E0B", desc: "Prioritize meaning and clarity. Excellent for devotion." },
                  { label: "Paraphrase", examples: "MSG · TLB", color: "#EC4899", desc: "Re-express in fresh idiom. Read alongside, not for study." },
                ].map(t => (
                  <div key={t.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{t.label}</div>
                    <div style={{ color: TEXT, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{t.examples}</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== STUDY TAB ===================== */}
        {mainTab === "study" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24, textAlign: "center" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 26, marginBottom: 6 }}>Study & Devotion</h2>
              <p style={{ color: MUTED, fontSize: 15, maxWidth: 600, margin: "0 auto" }}>Verses by theme, a topical guide, and deep study notes on key chapters — every reference clickable.</p>
            </div>

            <h3 style={{ color: PURPLE, fontSize: 13, fontWeight: 800, letterSpacing: 1.5, marginBottom: 12 }}>VERSES BY THEME</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10, marginBottom: 24 }}>
              {(Object.entries(VERSE_THEMES) as [keyof typeof VERSE_THEMES, typeof VERSE_THEMES[keyof typeof VERSE_THEMES]][]).map(([key, theme]) => (
                <button key={key} onClick={() => setActiveTheme(key)} style={{ padding: "14px 12px", borderRadius: 10, border: `2px solid ${activeTheme === key ? theme.color : BORDER}`, background: activeTheme === key ? `${theme.color}15` : CARD, color: activeTheme === key ? theme.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "center" }}>
                  {theme.theme}
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h2 style={{ color: VERSE_THEMES[activeTheme].color, fontWeight: 800, fontSize: 24, marginBottom: 18 }}>{VERSE_THEMES[activeTheme].theme}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {VERSE_THEMES[activeTheme].verses.map((v, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 22 }}>
                    <p style={{ color: TEXT, fontSize: 20, fontFamily: "var(--font-cormorant, Georgia, serif)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 12 }}>&ldquo;{v.text}&rdquo;</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <button onClick={() => openRef(v.ref)} style={{ color: VERSE_THEMES[activeTheme].color, fontWeight: 800, fontSize: 14, background: "none", border: "none", cursor: "pointer", padding: 0 }}>— {v.ref} →</button>
                      <span style={{ color: MUTED, fontSize: 12 }}>{v.version}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Topical Bible Guide</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  { topic: "Prayer & Intercession", refs: ["Matthew 6:9", "Philippians 4:6", "1 Thessalonians 5:17"], icon: "🙏" },
                  { topic: "God's Promises", refs: ["2 Corinthians 1:20", "Hebrews 10:23", "Numbers 23:19"], icon: "⚡" },
                  { topic: "The Holy Spirit", refs: ["John 14:26", "Acts 1:8", "Romans 8:26"], icon: "🕊️" },
                  { topic: "Faith & Trust", refs: ["Hebrews 11:1", "Proverbs 3:5", "Mark 11:24"], icon: "🌟" },
                  { topic: "Wisdom", refs: ["Proverbs 1:7", "James 1:5", "Ecclesiastes 12:13"], icon: "📜" },
                  { topic: "Repentance", refs: ["Acts 3:19", "1 John 1:9", "Psalm 51:10"], icon: "🔄" },
                  { topic: "Eternal Life", refs: ["John 17:3", "1 John 5:13", "Revelation 21:4"], icon: "♾️" },
                  { topic: "The Church", refs: ["Matthew 16:18", "Acts 2:42", "Ephesians 4:11"], icon: "⛪" },
                  { topic: "God's Character", refs: ["Exodus 34:6", "Psalm 103:8", "1 John 4:16"], icon: "✨" },
                  { topic: "Suffering & Trials", refs: ["Romans 8:18", "James 1:2", "2 Corinthians 12:9"], icon: "🌿" },
                  { topic: "Marriage & Family", refs: ["Genesis 2:24", "Ephesians 5:25", "Proverbs 22:6"], icon: "💍" },
                  { topic: "Justice & Mercy", refs: ["Micah 6:8", "Amos 5:24", "Matthew 23:23"], icon: "⚖️" },
                ].map(item => (
                  <div key={item.topic} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.topic}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {item.refs.map(ref => (
                        <button key={ref} onClick={() => openRef(ref)} style={{ padding: "2px 8px", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 12, fontSize: 11, color: "#A78BFA", cursor: "pointer" }}>{ref}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Deep Study Notes — Key Chapters</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {Object.entries(STUDY_NOTES).flatMap(([bookId, chapters]) =>
                  Object.entries(chapters).map(([chapNum, note]) => ({ bookId, chapNum, note, book: ALL_BOOKS.find(b => b.id === bookId) }))
                ).map(({ book, chapNum, note }) => (
                  <div key={`${book?.id}-${chapNum}`} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <button onClick={() => { if (book) goToReference(book.id, Number(chapNum)); }} style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 6, padding: "4px 12px", color: GREEN, fontWeight: 800, fontSize: 13, cursor: "pointer" }}>
                          {book?.name} {chapNum} →
                        </button>
                        <span style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginLeft: 10 }}>{note.context}</span>
                      </div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{note.note}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                      <span style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>CROSS-REFS:</span>
                      {note.crossRefs.map(ref => (
                        <button key={ref} onClick={() => openRef(ref)} style={{ padding: "3px 10px", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 14, fontSize: 11, color: "#A78BFA", cursor: "pointer" }}>{ref}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== READING PLANS TAB ===================== */}
        {mainTab === "plans" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 24, textAlign: "center" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Bible Reading Plans</h2>
              <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
                Start an interactive plan below — tap a day to read it, check it off, and your progress is saved on this device.
              </p>
            </div>

            {/* Interactive plans */}
            <h3 style={{ color: PURPLE, fontSize: 13, fontWeight: 800, letterSpacing: 1.5, marginBottom: 12 }}>INTERACTIVE PLANS</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 20 }}>
              {[
                { id: "gospel-of-john", name: "The Gospel of John", days: 21, color: GREEN, desc: "Read all 21 chapters of John — the Gospel written 'that you may believe.'" },
                { id: "life-of-christ", name: "The Life of Christ", days: 14, color: "#F59E0B", desc: "14 key chapters tracing Jesus from birth to resurrection." },
                { id: "psalms-of-comfort", name: "Psalms of Comfort", days: 12, color: "#3B82F6", desc: "12 beloved psalms for peace, refuge, and renewal." },
              ].map(plan => {
                const days = READING_PLAN_DAYS[plan.id] || [];
                const doneCount = days.filter((_, i) => completedDays.has(`${plan.id}-${i}`)).length;
                const pct = days.length ? Math.round((doneCount / days.length) * 100) : 0;
                return (
                  <button key={plan.id} onClick={() => setActivePlanId(activePlanId === plan.id ? null : plan.id)} style={{ textAlign: "left", background: activePlanId === plan.id ? `${plan.color}12` : CARD, border: `2px solid ${activePlanId === plan.id ? plan.color : BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer" }}>
                    <h4 style={{ color: plan.color, fontWeight: 800, fontSize: 17, marginBottom: 6 }}>{plan.name}</h4>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{plan.desc}</p>
                    <div style={{ height: 6, background: BORDER, borderRadius: 3, overflow: "hidden", marginBottom: 6 }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: plan.color }} />
                    </div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{doneCount}/{days.length} days · {pct}%</div>
                  </button>
                );
              })}
            </div>

            {activePlanId && READING_PLAN_DAYS[activePlanId] && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Daily Readings</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
                  {READING_PLAN_DAYS[activePlanId].map((day, i) => {
                    const key = `${activePlanId}-${i}`;
                    const done = completedDays.has(key);
                    return (
                      <div key={key} style={{ background: BG, border: `1px solid ${done ? GREEN : BORDER}`, borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 11, fontWeight: 700 }}>DAY {i + 1}</span>
                          <button onClick={() => toggleDay(key)} style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${done ? GREEN : BORDER}`, background: done ? GREEN : "transparent", color: "#07070F", fontSize: 13, fontWeight: 900, cursor: "pointer", lineHeight: 1 }}>{done ? "✓" : ""}</button>
                        </div>
                        <button onClick={() => goToReference(day.bookId, day.chapter)} style={{ textAlign: "left", background: "none", border: "none", color: done ? GREEN : TEXT, fontWeight: 700, fontSize: 15, cursor: "pointer", padding: 0, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>
                          {day.ref} →
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Classic plans (reference) */}
            <h3 style={{ color: PURPLE, fontSize: 13, fontWeight: 800, letterSpacing: 1.5, marginBottom: 12 }}>CLASSIC PLANS</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginBottom: 28 }}>
              {[
                { name: "M'Cheyne Plan", duration: "1 Year", pace: "4 chapters/day", tradition: "Presbyterian", desc: "Robert Murray M'Cheyne's 1842 plan reads the OT once and NT + Psalms twice. The gold standard.", icon: "📜", color: "#F59E0B" },
                { name: "Chronological", duration: "1 Year", pace: "~3-4 chapters/day", tradition: "Interdenominational", desc: "Reads the Bible in the order events occurred — prophets alongside the kings they addressed.", icon: "📅", color: "#3B82F6" },
                { name: "New Testament in 90 Days", duration: "3 Months", pace: "~3 chapters/day", tradition: "Evangelical", desc: "All 27 NT books in 90 days — the life of Jesus, the early church, and the apostolic letters.", icon: "⚡", color: GREEN },
                { name: "Psalms & Proverbs Daily", duration: "Ongoing", pace: "5 Psalms + 1 Proverb/day", tradition: "Any", desc: "Luther's simple plan: Psalms covers every emotion; Proverbs covers all wisdom for daily life.", icon: "🎵", color: "#EC4899" },
                { name: "The Bible Project Plan", duration: "1 Year", pace: "OT + NT daily", tradition: "Interdenominational", desc: "Pairs each day's reading with an animated overview video explaining the biblical narrative.", icon: "🎬", color: "#8B5CF6" },
                { name: "Lectio Divina", duration: "Ongoing", pace: "One passage deeply", tradition: "Catholic/Anglican", desc: "Sacred reading: Lectio (read), Meditatio (meditate), Oratio (pray), Contemplatio (contemplate).", icon: "🕯️", color: "#C9A227" },
                { name: "Every-Word Bible", duration: "1 Year", pace: "3 chapters/day", tradition: "Any", desc: "Read every word, Genesis to Revelation, page by page. No shortcuts, no skipping genealogies.", icon: "📖", color: "#10B981" },
                { name: "S.O.A.P. Method", duration: "Ongoing", pace: "Daily passage", tradition: "Evangelical", desc: "Scripture, Observation, Application, Prayer — a journaling method for deeper retention.", icon: "✍️", color: "#F472B6" },
                { name: "Foundations 260", duration: "1 Year (weekdays)", pace: "1 chapter/day", tradition: "Any", desc: "260 chapters covering the most essential portions — perfect for new or returning believers.", icon: "🌱", color: "#6EE7B7" },
              ].map(plan => (
                <div key={plan.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{plan.icon}</div>
                  <h3 style={{ color: plan.color, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{plan.name}</h3>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ padding: "3px 10px", background: `${plan.color}15`, border: `1px solid ${plan.color}40`, borderRadius: 20, fontSize: 11, color: plan.color, fontWeight: 700 }}>{plan.duration}</span>
                    <span style={{ padding: "3px 10px", background: BG, border: `1px solid ${BORDER}`, borderRadius: 20, fontSize: 11, color: MUTED }}>{plan.pace}</span>
                    <span style={{ padding: "3px 10px", background: BG, border: `1px solid ${BORDER}`, borderRadius: 20, fontSize: 11, color: MUTED }}>{plan.tradition}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7 }}>{plan.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 16 }}>Translation Reference Guide</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {[
                  { code: "NIV", name: "New International Version", year: 1978, type: "Balanced", desc: "The best-selling modern translation. Prioritizes clear, contemporary meaning." },
                  { code: "KJV", name: "King James Version", year: 1611, type: "Formal", desc: "Majestic Elizabethan English. The most printed book in history." },
                  { code: "NLT", name: "New Living Translation", year: 1996, type: "Dynamic", desc: "Highly readable. Excellent for devotional reading and new believers." },
                  { code: "ESV", name: "English Standard Version", year: 2001, type: "Formal", desc: "Modern word-for-word. Widely used in Reformed and evangelical churches." },
                  { code: "NKJV", name: "New King James Version", year: 1982, type: "Formal", desc: "Updates KJV language while preserving its rhythm and textual tradition." },
                  { code: "CSB", name: "Christian Standard Bible", year: 2017, type: "Balanced", desc: "Optimal equivalence — accuracy with readability." },
                  { code: "NASB", name: "New American Standard Bible", year: 1971, type: "Formal", desc: "The most literally accurate major translation. Preferred for word studies." },
                  { code: "ASV", name: "American Standard Version", year: 1901, type: "Formal", desc: "Highly literal predecessor of the ESV/NASB. Public domain — bundled here." },
                ].map(v => (
                  <div key={v.code} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 800, fontSize: 18 }}>{v.code}</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>{v.year}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{v.name}</div>
                    <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>{v.type}</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
