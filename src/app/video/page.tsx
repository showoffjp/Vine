"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play, Eye, Heart, Bookmark, Share2,
  TrendingUp, Star, Search, Volume2, X, ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Video {
  id: number;
  youtubeId: string;
  title: string;
  channel: string;
  channelColor: string;
  views: string;
  duration: string;
  year: string;
  tag: string;
  tagColor: string;
}

const CATEGORIES = ["All", "Worship", "Teaching", "Sermons", "Apologetics", "Testimony", "Kids", "Documentary"];

const featured = {
  youtubeId: "nQWFzMvCfLE",
  title: "What A Beautiful Name — Hillsong Worship (Official Music Video)",
  channel: "Hillsong Worship",
  channelAvatar: "HW",
  channelColor: "#3a7d56",
  views: "248M",
  duration: "5:41",
  year: "2017",
  tags: ["Worship", "Praise", "Gospel"],
  description: "The official music video for 'What A Beautiful Name' — one of the most-watched Christian music videos ever recorded.",
};

const VIDEOS: Video[] = [
  // ── Worship ───────────────────────────────────────────────────────────────
  { id: 1,  youtubeId: "nQWFzMvCfLE", title: "What A Beautiful Name",                        channel: "Hillsong Worship",    channelColor: "#3a7d56", views: "248M",  duration: "5:41", year: "2017", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 2,  youtubeId: "XtwIT8JjddM", title: "10,000 Reasons (Bless the Lord)",              channel: "Matt Redman",         channelColor: "#6B4FBB", views: "89M",   duration: "5:59", year: "2012", tag: "Worship",      tagColor: "#6B4FBB" },
  { id: 3,  youtubeId: "dy9nwe9zeU8", title: "Oceans (Where Feet May Fail)",                 channel: "Hillsong UNITED",     channelColor: "#3a7d56", views: "106M",  duration: "8:56", year: "2013", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 4,  youtubeId: "Sc6SSHuZvQE", title: "Reckless Love",                                channel: "Cory Asbury",         channelColor: "#10B981", views: "45M",   duration: "5:53", year: "2017", tag: "Worship",      tagColor: "#10B981" },
  { id: 5,  youtubeId: "kWPMELQMDk8", title: "Graves into Gardens (Live)",                  channel: "Elevation Worship",   channelColor: "#EC4899", views: "38M",   duration: "5:06", year: "2020", tag: "Worship",      tagColor: "#EC4899" },
  { id: 6,  youtubeId: "EisnaNdlYCs", title: "Waymaker (Official Live Video)",               channel: "Sinach",              channelColor: "#F59E0B", views: "71M",   duration: "9:19", year: "2016", tag: "Worship",      tagColor: "#F59E0B" },
  { id: 7,  youtubeId: "6tHO5E0pVqo", title: "Goodness of God (Live)",                      channel: "Bethel Music",        channelColor: "#8B5CF6", views: "28M",   duration: "5:32", year: "2019", tag: "Worship",      tagColor: "#8B5CF6" },
  { id: 8,  youtubeId: "sZlL2-KMXUM", title: "How He Loves",                                channel: "David Crowder Band",  channelColor: "#EF4444", views: "22M",   duration: "5:49", year: "2009", tag: "Worship",      tagColor: "#EF4444" },
  { id: 9,  youtubeId: "3rSDZuGNBM8", title: "Amazing Grace (My Chains Are Gone)",          channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "32M",   duration: "3:57", year: "2006", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 10, youtubeId: "T8XDBGl9mZo", title: "Holy Spirit",                                 channel: "Francesca Battistelli",channelColor: "#14B8A6",views: "15M",   duration: "3:32", year: "2014", tag: "Worship",      tagColor: "#14B8A6" },
  { id: 11, youtubeId: "I93MBKHkLGM", title: "You Say (Official Music Video)",              channel: "Lauren Daigle",       channelColor: "#EC4899", views: "180M",  duration: "3:44", year: "2018", tag: "Worship",      tagColor: "#EC4899" },
  { id: 12, youtubeId: "g96EIa6ULp4", title: "No Longer Slaves (Live)",                    channel: "Bethel Music",        channelColor: "#8B5CF6", views: "19M",   duration: "7:13", year: "2014", tag: "Worship",      tagColor: "#8B5CF6" },
  { id: 13, youtubeId: "BtIEeO2WDQI", title: "Ever Be (Live)",                              channel: "Bethel Music",        channelColor: "#8B5CF6", views: "14M",   duration: "8:02", year: "2014", tag: "Worship",      tagColor: "#8B5CF6" },
  { id: 14, youtubeId: "KTybzExEjdo", title: "Come As You Are",                             channel: "Crowder",             channelColor: "#EF4444", views: "11M",   duration: "4:25", year: "2014", tag: "Worship",      tagColor: "#EF4444" },
  { id: 15, youtubeId: "QBuT5bkFBhI", title: "How Great Is Our God (Live)",                channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "43M",   duration: "5:15", year: "2004", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 16, youtubeId: "b3Oc7gg5l2k", title: "Good Good Father",                           channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "26M",   duration: "5:17", year: "2016", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 17, youtubeId: "aYTEBqvIqmw", title: "Battle Belongs (Official Music Video)",      channel: "Phil Wickham",        channelColor: "#0EA5E9", views: "17M",   duration: "3:59", year: "2020", tag: "Worship",      tagColor: "#0EA5E9" },
  { id: 18, youtubeId: "oRhMl81Eu0k", title: "Living Hope (Official Music Video)",         channel: "Phil Wickham",        channelColor: "#0EA5E9", views: "12M",   duration: "4:26", year: "2018", tag: "Worship",      tagColor: "#0EA5E9" },
  { id: 19, youtubeId: "Af36GHGTkGM", title: "Look Up Child (Official Music Video)",       channel: "Lauren Daigle",       channelColor: "#EC4899", views: "9M",    duration: "3:16", year: "2018", tag: "Worship",      tagColor: "#EC4899" },
  { id: 20, youtubeId: "Z5yM_qoHuaE", title: "Cornerstone (Live)",                         channel: "Hillsong Worship",    channelColor: "#3a7d56", views: "8M",    duration: "6:08", year: "2012", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 21, youtubeId: "iRIcidD0BRI", title: "King of My Heart",                            channel: "Bethel Music",        channelColor: "#8B5CF6", views: "7M",    duration: "6:28", year: "2016", tag: "Worship",      tagColor: "#8B5CF6" },
  { id: 22, youtubeId: "FWrI_s30NkI", title: "Run to the Father",                          channel: "Cody Carnes",         channelColor: "#10B981", views: "8M",    duration: "4:33", year: "2019", tag: "Worship",      tagColor: "#10B981" },
  { id: 23, youtubeId: "hSIzSwX9tGM", title: "Great Are You Lord",                         channel: "All Sons & Daughters",channelColor: "#6B4FBB", views: "6M",    duration: "5:21", year: "2012", tag: "Worship",      tagColor: "#6B4FBB" },
  { id: 24, youtubeId: "J-3vLnEAXU4", title: "Blessed Be Your Name",                       channel: "Matt Redman",         channelColor: "#6B4FBB", views: "11M",   duration: "4:37", year: "2005", tag: "Worship",      tagColor: "#6B4FBB" },
  { id: 25, youtubeId: "bBriTVYtCRg", title: "Open the Eyes of My Heart",                  channel: "Paul Baloche",        channelColor: "#F97316", views: "5M",    duration: "4:45", year: "2003", tag: "Worship",      tagColor: "#F97316" },
  { id: 26, youtubeId: "CrT_tOBzMeU", title: "Holy Is the Lord",                           channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "9M",    duration: "4:22", year: "2003", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 27, youtubeId: "sMKiXSVADCE", title: "Indescribable (Live)",                       channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "7M",    duration: "5:13", year: "2004", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 28, youtubeId: "b5f2AyeYdS8", title: "Your Grace Is Enough",                       channel: "Matt Maher",          channelColor: "#14B8A6", views: "4M",    duration: "4:12", year: "2008", tag: "Worship",      tagColor: "#14B8A6" },
  { id: 29, youtubeId: "8BQWMQx4Mxk", title: "Same God (Live)",                            channel: "Elevation Worship",   channelColor: "#EC4899", views: "24M",   duration: "6:02", year: "2022", tag: "Worship",      tagColor: "#EC4899" },
  { id: 30, youtubeId: "tN5sL4cxXVE", title: "Praise (Live)",                              channel: "Elevation Worship",   channelColor: "#EC4899", views: "18M",   duration: "5:44", year: "2021", tag: "Worship",      tagColor: "#EC4899" },
  { id: 31, youtubeId: "Cs6b_aGPIzQ", title: "In Jesus Name (God of Possible)",            channel: "Katy Nichole",        channelColor: "#F59E0B", views: "28M",   duration: "3:31", year: "2022", tag: "Worship",      tagColor: "#F59E0B" },
  { id: 32, youtubeId: "xZNhFMHfUDo", title: "I Am Free (Live)",                           channel: "Jesus Culture",       channelColor: "#10B981", views: "6M",    duration: "6:44", year: "2013", tag: "Worship",      tagColor: "#10B981" },
  { id: 33, youtubeId: "Dq46v3CKhL8", title: "In Christ Alone",                            channel: "Getty Music",         channelColor: "#6B4FBB", views: "12M",   duration: "5:08", year: "2001", tag: "Worship",      tagColor: "#6B4FBB" },
  { id: 34, youtubeId: "IFjxjQwN1I4", title: "God of Wonders",                             channel: "Third Day",           channelColor: "#EF4444", views: "5M",    duration: "4:35", year: "2000", tag: "Worship",      tagColor: "#EF4444" },
  { id: 35, youtubeId: "7P8-bwzO0C4", title: "Worthy of It All",                           channel: "Misty Edwards",       channelColor: "#8B5CF6", views: "3M",    duration: "6:18", year: "2013", tag: "Worship",      tagColor: "#8B5CF6" },
  { id: 36, youtubeId: "qkEUHXPfMUY", title: "Holy (Live)",                                channel: "Mercy Me",            channelColor: "#F97316", views: "4M",    duration: "5:22", year: "2014", tag: "Worship",      tagColor: "#F97316" },
  { id: 37, youtubeId: "mQDJYHKAkbI", title: "How Beautiful",                              channel: "Twila Paris",         channelColor: "#14B8A6", views: "2M",    duration: "5:33", year: "1992", tag: "Worship",      tagColor: "#14B8A6" },
  { id: 38, youtubeId: "lBaqzFuAXoA", title: "Blessed Redeemer",                           channel: "Chris Tomlin",        channelColor: "#3a7d56", views: "3M",    duration: "4:42", year: "2009", tag: "Worship",      tagColor: "#3a7d56" },
  { id: 39, youtubeId: "Q_Dq3hMIERI", title: "O Holy Night (Live)",                        channel: "Celine Dion / Various",channelColor: "#EF4444",views: "8M",    duration: "4:51", year: "2010", tag: "Worship",      tagColor: "#EF4444" },
  { id: 40, youtubeId: "LmJTq_i8xXE", title: "Battle Hymn of the Republic",                channel: "Mormon Tabernacle Choir",channelColor:"#0EA5E9",views: "4M",   duration: "5:02", year: "2012", tag: "Worship",      tagColor: "#0EA5E9" },

  // ── Teaching ──────────────────────────────────────────────────────────────
  { id: 41, youtubeId: "ej_6dVdJSIU", title: "Romans — Book Overview",                      channel: "BibleProject",        channelColor: "#3B82F6", views: "7.2M",  duration: "9:22", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 42, youtubeId: "BzAdLyFJ_O0", title: "The Story of the Bible",                      channel: "BibleProject",        channelColor: "#3B82F6", views: "5.4M",  duration: "5:27", year: "2014", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 43, youtubeId: "2ZN_CnLheBE", title: "Genesis 1–11 — Book Overview",                channel: "BibleProject",        channelColor: "#3B82F6", views: "4.8M",  duration: "8:01", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 44, youtubeId: "GvAObZBdxNc", title: "Exodus — Book Overview",                      channel: "BibleProject",        channelColor: "#3B82F6", views: "3.9M",  duration: "8:44", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 45, youtubeId: "Wl0fz3Bm5rQ", title: "Psalms — Book Overview",                      channel: "BibleProject",        channelColor: "#3B82F6", views: "3.6M",  duration: "8:20", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 46, youtubeId: "DJy0bvxvHsI", title: "Matthew — Book Overview",                     channel: "BibleProject",        channelColor: "#3B82F6", views: "3.1M",  duration: "7:50", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 47, youtubeId: "MSKKOtQCEZw", title: "Gospel of John — Overview",                   channel: "BibleProject",        channelColor: "#3B82F6", views: "2.9M",  duration: "9:15", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 48, youtubeId: "eAcHAl-UkCI", title: "Acts — Book Overview",                        channel: "BibleProject",        channelColor: "#3B82F6", views: "2.5M",  duration: "8:47", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 49, youtubeId: "I4lujdz7wFE", title: "Revelation — Book Overview",                  channel: "BibleProject",        channelColor: "#3B82F6", views: "4.2M",  duration: "11:12",year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 50, youtubeId: "xPJEFRV9oVM", title: "Heaven and Earth — What Is It?",              channel: "BibleProject",        channelColor: "#3B82F6", views: "3.3M",  duration: "8:05", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 51, youtubeId: "YJUkVdFr85o", title: "Image of God (Imago Dei)",                    channel: "BibleProject",        channelColor: "#3B82F6", views: "2.8M",  duration: "6:44", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 52, youtubeId: "Xo2rn0XoZUg", title: "Ephesians — Book Overview",                   channel: "BibleProject",        channelColor: "#3B82F6", views: "2.1M",  duration: "8:31", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 53, youtubeId: "oHiJY-lIgjA", title: "Galatians — Book Overview",                   channel: "BibleProject",        channelColor: "#3B82F6", views: "1.9M",  duration: "7:46", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 54, youtubeId: "Q0VyJt_Vyvw", title: "Philippians — Book Overview",                 channel: "BibleProject",        channelColor: "#3B82F6", views: "1.7M",  duration: "7:22", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 55, youtubeId: "1Wz4fLF5nfE", title: "What Is Sin? (Hamartia)",                     channel: "BibleProject",        channelColor: "#3B82F6", views: "2.3M",  duration: "6:11", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 56, youtubeId: "Yn6M1iijZoY", title: "Sacrifice and Atonement",                     channel: "BibleProject",        channelColor: "#3B82F6", views: "2.4M",  duration: "7:33", year: "2017", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 57, youtubeId: "Rk-sHDFHLqA", title: "The Word (Logos) — Explained",               channel: "BibleProject",        channelColor: "#3B82F6", views: "2.0M",  duration: "6:55", year: "2018", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 58, youtubeId: "hzSfJGi-4gw", title: "Spirit of God — Ruach",                      channel: "BibleProject",        channelColor: "#3B82F6", views: "1.8M",  duration: "7:08", year: "2016", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 59, youtubeId: "fVYH3unqJk0", title: "What Is the Kingdom of God?",                 channel: "BibleProject",        channelColor: "#3B82F6", views: "3.1M",  duration: "5:58", year: "2018", tag: "Teaching",     tagColor: "#3B82F6" },
  { id: 60, youtubeId: "GFpJB3iWHBU", title: "Why God Became Man — Incarnation",            channel: "Desiring God",        channelColor: "#F97316", views: "1.2M",  duration: "6:14", year: "2013", tag: "Teaching",     tagColor: "#F97316" },

  // ── Sermons ───────────────────────────────────────────────────────────────
  { id: 61, youtubeId: "oNpPUGKa0y4", title: "The Cross Changes Everything — Easter",       channel: "Elevation Church",    channelColor: "#3a7d56", views: "4.7M",  duration: "48:32",year: "2022", tag: "Sermons",      tagColor: "#3a7d56" },
  { id: 62, youtubeId: "akN8j0IqLl0", title: "Mission of God — John Piper",                channel: "Desiring God",        channelColor: "#F97316", views: "2.1M",  duration: "54:12",year: "2019", tag: "Sermons",      tagColor: "#F97316" },
  { id: 63, youtubeId: "8Mxn3KlX_Fk", title: "I Am Not Ashamed of the Gospel",             channel: "Gospel in Life",      channelColor: "#0EA5E9", views: "1.4M",  duration: "37:22",year: "2020", tag: "Sermons",      tagColor: "#0EA5E9" },
  { id: 64, youtubeId: "3SGHLmFMl2A", title: "The Prodigal God",                           channel: "Redeemer City",       channelColor: "#0EA5E9", views: "890K",  duration: "41:15",year: "2008", tag: "Sermons",      tagColor: "#0EA5E9" },
  { id: 65, youtubeId: "eAcCxuFHBwc", title: "What Does It Mean to Have Faith?",           channel: "Francis Chan",        channelColor: "#EC4899", views: "1.1M",  duration: "32:44",year: "2016", tag: "Sermons",      tagColor: "#EC4899" },
  { id: 66, youtubeId: "7y9R-m4OWEY", title: "The Gospel Changes Everything",              channel: "The Village Church",  channelColor: "#6B4FBB", views: "740K",  duration: "44:22",year: "2015", tag: "Sermons",      tagColor: "#6B4FBB" },
  { id: 67, youtubeId: "J3SLR5gDlwY", title: "Radical: Taking Back Your Faith",            channel: "David Platt",         channelColor: "#EF4444", views: "920K",  duration: "56:08",year: "2013", tag: "Sermons",      tagColor: "#EF4444" },
  { id: 68, youtubeId: "1V5e8JxQsHI", title: "Counterfeit Gods — Tim Keller",              channel: "Gospel in Life",      channelColor: "#0EA5E9", views: "660K",  duration: "38:55",year: "2011", tag: "Sermons",      tagColor: "#0EA5E9" },
  { id: 69, youtubeId: "PBjFxlnmx4Q", title: "Forgotten God — About the Holy Spirit",      channel: "Francis Chan",        channelColor: "#EC4899", views: "1.3M",  duration: "46:31",year: "2010", tag: "Sermons",      tagColor: "#EC4899" },
  { id: 70, youtubeId: "4fJCYWzW_tA", title: "What Will Heaven Be Like?",                  channel: "Eternal Perspective", channelColor: "#8B5CF6", views: "480K",  duration: "44:12",year: "2011", tag: "Sermons",      tagColor: "#8B5CF6" },
  { id: 71, youtubeId: "Xk8FBdg7q_A", title: "Why Did Jesus Have to Die? — Good Friday",  channel: "Ravi Zacharias",      channelColor: "#14B8A6", views: "1.9M",  duration: "49:33",year: "2016", tag: "Sermons",      tagColor: "#14B8A6" },
  { id: 72, youtubeId: "Iy2G4gGqQhQ", title: "Jesus and Money — What the Bible Says",      channel: "Gospel in Life",      channelColor: "#0EA5E9", views: "540K",  duration: "37:44",year: "2012", tag: "Sermons",      tagColor: "#0EA5E9" },
  { id: 73, youtubeId: "uZCcPJ_0RFk", title: "Who Do You Say I Am? — R.C. Sproul",         channel: "Ligonier Ministries", channelColor: "#F97316", views: "720K",  duration: "42:18",year: "2014", tag: "Sermons",      tagColor: "#F97316" },
  { id: 74, youtubeId: "Cp-cxJAZyX4", title: "The Doctrine of the Holy Spirit",            channel: "John MacArthur",      channelColor: "#3B82F6", views: "810K",  duration: "51:05",year: "2015", tag: "Sermons",      tagColor: "#3B82F6" },
  { id: 75, youtubeId: "lSCq_FHMRoE", title: "Why Did Jesus Have to Die? — Andy Stanley",  channel: "North Point Online",  channelColor: "#3a7d56", views: "630K",  duration: "38:22",year: "2019", tag: "Sermons",      tagColor: "#3a7d56" },
  { id: 76, youtubeId: "bC7V2FpM2vE", title: "The Sermon on the Mount — Dallas Willard",   channel: "Dallas Willard Ministries",channelColor:"#8B5CF6",views:"390K", duration: "60:41",year: "2006", tag: "Sermons",      tagColor: "#8B5CF6" },
  { id: 77, youtubeId: "P-HkFLhAk7c", title: "Experiencing God — Henry Blackaby",          channel: "LifeWay Worship",     channelColor: "#F59E0B", views: "440K",  duration: "44:59",year: "2012", tag: "Sermons",      tagColor: "#F59E0B" },
  { id: 78, youtubeId: "RyJnHLXOkZQ", title: "The Cross of Christ — Final Message",        channel: "John Stott",          channelColor: "#6B4FBB", views: "1.1M",  duration: "48:22",year: "2007", tag: "Sermons",      tagColor: "#6B4FBB" },
  { id: 79, youtubeId: "dxH_gZ4mPhI", title: "Do Everything — Live",                       channel: "Steven Curtis Chapman",channelColor:"#10B981", views: "2.3M",  duration: "4:44", year: "2013", tag: "Sermons",      tagColor: "#10B981" },
  { id: 80, youtubeId: "7_X0Ev6Xkic", title: "It Is Well With My Soul — Gateway Church",   channel: "Gateway Church",      channelColor: "#3a7d56", views: "320K",  duration: "41:33",year: "2018", tag: "Sermons",      tagColor: "#3a7d56" },

  // ── Apologetics ───────────────────────────────────────────────────────────
  { id: 81, youtubeId: "Ck9UMPqM4lQ", title: "What Is the Gospel? — Short Film",            channel: "The Gospel Coalition",channelColor: "#6B4FBB", views: "1.8M",  duration: "3:14", year: "2015", tag: "Apologetics",  tagColor: "#6B4FBB" },
  { id: 82, youtubeId: "UJlLkZ6tCG0", title: "Who Is Jesus? — Francis Chan",                channel: "Francis Chan",        channelColor: "#EC4899", views: "3.2M",  duration: "7:48", year: "2018", tag: "Apologetics",  tagColor: "#EC4899" },
  { id: 83, youtubeId: "zMbUXpFiFeo", title: "Does God Exist? — Reasonable Faith",          channel: "Reasonable Faith",    channelColor: "#3B82F6", views: "2.4M",  duration: "35:22",year: "2014", tag: "Apologetics",  tagColor: "#3B82F6" },
  { id: 84, youtubeId: "lXEHBgAGdZE", title: "The Case for Christ — Lee Strobel",           channel: "Lee Strobel",         channelColor: "#F97316", views: "1.7M",  duration: "42:11",year: "2017", tag: "Apologetics",  tagColor: "#F97316" },
  { id: 85, youtubeId: "yIhGt1BQ1pw", title: "Why I'm Not an Atheist — Ravi Zacharias",     channel: "RZIM",                channelColor: "#14B8A6", views: "2.1M",  duration: "54:08",year: "2015", tag: "Apologetics",  tagColor: "#14B8A6" },
  { id: 86, youtubeId: "O4GJYRmNnEg", title: "Evidence for the Resurrection",               channel: "Gary Habermas",       channelColor: "#EF4444", views: "880K",  duration: "38:44",year: "2016", tag: "Apologetics",  tagColor: "#EF4444" },
  { id: 87, youtubeId: "IYVx-T63fxg", title: "Is the Bible Reliable? — Sean McDowell",      channel: "Sean McDowell",       channelColor: "#0EA5E9", views: "720K",  duration: "29:17",year: "2018", tag: "Apologetics",  tagColor: "#0EA5E9" },
  { id: 88, youtubeId: "MrSNOo7EIy0", title: "Why Christianity Makes Sense",                channel: "CS Lewis Doodle",     channelColor: "#6B4FBB", views: "1.4M",  duration: "18:33",year: "2017", tag: "Apologetics",  tagColor: "#6B4FBB" },
  { id: 89, youtubeId: "DFTqcJkzVi8", title: "The Problem of Evil — Alvin Plantinga",       channel: "Closer to Truth",     channelColor: "#8B5CF6", views: "640K",  duration: "22:45",year: "2013", tag: "Apologetics",  tagColor: "#8B5CF6" },
  { id: 90, youtubeId: "JeUn6ILfaYU", title: "Answering Atheism — Greg Koukl",              channel: "Stand to Reason",     channelColor: "#F97316", views: "550K",  duration: "31:22",year: "2016", tag: "Apologetics",  tagColor: "#F97316" },

  // ── Testimony ─────────────────────────────────────────────────────────────
  { id: 91, youtubeId: "Ds-YgKHbJP8", title: "Life Without Limbs — Nick Vujicic",           channel: "I Am Second",         channelColor: "#10B981", views: "14M",   duration: "5:52", year: "2010", tag: "Testimony",    tagColor: "#10B981" },
  { id: 92, youtubeId: "g0Gro-8qiJQ", title: "From Atheist to Believer — Lee Strobel",      channel: "Harvest Church",      channelColor: "#F97316", views: "3.4M",  duration: "31:08",year: "2018", tag: "Testimony",    tagColor: "#F97316" },
  { id: 93, youtubeId: "jxaJZ5lBM5U", title: "Rescued: An Underground Church Story",        channel: "Voice of the Martyrs",channelColor: "#EF4444", views: "1.9M",  duration: "22:15",year: "2019", tag: "Testimony",    tagColor: "#EF4444" },
  { id: 94, youtubeId: "nFuFn_q0S1c", title: "From Addiction to Redemption",                channel: "Redeemed Life",       channelColor: "#8B5CF6", views: "890K",  duration: "18:44",year: "2020", tag: "Testimony",    tagColor: "#8B5CF6" },
  { id: 95, youtubeId: "EvLWU7jCbAk", title: "The Chosen — Season 1 Official Trailer",      channel: "The Chosen",          channelColor: "#3a7d56", views: "8.7M",  duration: "2:44", year: "2019", tag: "Testimony",    tagColor: "#3a7d56" },

  // ── Kids ──────────────────────────────────────────────────────────────────
  { id: 96,  youtubeId: "iuCzPZ3GYes", title: "God Made Everything — Veggie Tales",          channel: "Veggie Tales",        channelColor: "#10B981", views: "12M",   duration: "4:12", year: "2014", tag: "Kids",         tagColor: "#10B981" },
  { id: 97,  youtubeId: "9q0AW_hpuZo", title: "The Greatest Commandment — Kids Bible",       channel: "Saddleback Kids",     channelColor: "#F59E0B", views: "4.2M",  duration: "3:44", year: "2016", tag: "Kids",         tagColor: "#F59E0B" },
  { id: 98,  youtubeId: "LlMCJJ8KJUU", title: "Jesus Loves Me — Kids Worship Song",          channel: "Hillsong Kids",       channelColor: "#3a7d56", views: "7.8M",  duration: "3:22", year: "2015", tag: "Kids",         tagColor: "#3a7d56" },
  { id: 99,  youtubeId: "WFLAabNR2K0", title: "The Lord's Prayer for Kids",                  channel: "Life.Church Kids",    channelColor: "#6B4FBB", views: "3.1M",  duration: "4:05", year: "2018", tag: "Kids",         tagColor: "#6B4FBB" },
  { id: 100, youtubeId: "JG_BBH8DVPI", title: "Jesus Film — Official Full Movie",            channel: "Jesus Film Project",  channelColor: "#F97316", views: "22M",   duration: "2:08:11",year:"1979",tag: "Documentary",  tagColor: "#F97316" },
];

const CHANNELS = [
  { name: "Hillsong Worship",   avatar: "HW", color: "#3a7d56", subscribers: "5.1M",  videos: 1200 },
  { name: "BibleProject",       avatar: "BP", color: "#3B82F6", subscribers: "4.2M",  videos: 312  },
  { name: "Elevation Worship",  avatar: "EW", color: "#EC4899", subscribers: "4.8M",  videos: 890  },
  { name: "Bethel Music",       avatar: "BM", color: "#8B5CF6", subscribers: "2.1M",  videos: 540  },
  { name: "Desiring God",       avatar: "DG", color: "#F97316", subscribers: "1.8M",  videos: 4200 },
  { name: "The Gospel Coalition",avatar:"GC", color: "#6B4FBB", subscribers: "1.1M",  videos: 620  },
  { name: "Gospel in Life",     avatar: "GL", color: "#0EA5E9", subscribers: "980K",  videos: 1100 },
  { name: "Ligonier Ministries",avatar: "LM", color: "#14B8A6", subscribers: "720K",  videos: 2800 },
];

const PAGE_SIZE = 24;

export default function VideoPage() {
  const [activeCategory, setActiveCategory] = usePersistedState("vine_video_active_category", "All");
  const [search, setSearch] = useState("");
  const [likedVideos, setLikedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_liked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedVideos, setSavedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedChannels, setFollowedChannels] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_video_followed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [featuredPlaying, setFeaturedPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [copiedVideo, setCopiedVideo] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const shareVideo = async (id: number, title: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `Watch "${title}" on The Vine`, url });
      } else {
        await navigator.clipboard.writeText(`${title} — ${url}`);
      }
      setCopiedVideo(id);
      setTimeout(() => setCopiedVideo((c) => (c === id ? null : c)), 1800);
    } catch {}
  };

  useEffect(() => {
    try { localStorage.setItem("vine_video_liked", JSON.stringify([...likedVideos])); } catch {}
  }, [likedVideos]);
  useEffect(() => {
    try { localStorage.setItem("vine_video_saved", JSON.stringify([...savedVideos])); } catch {}
  }, [savedVideos]);
  useEffect(() => {
    try { localStorage.setItem("vine_video_followed", JSON.stringify([...followedChannels])); } catch {}
  }, [followedChannels]);

  // Reset page when filters change
  useEffect(() => { setPage(1); }, [activeCategory, search]);

  const allFiltered = VIDEOS.filter((v) => {
    const matchCat = activeCategory === "All" || v.tag === activeCategory;
    const matchSearch = !search || v.title.toLowerCase().includes(search.toLowerCase()) || v.channel.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  const visibleVideos = allFiltered.slice(0, page * PAGE_SIZE);
  const hasMore = visibleVideos.length < allFiltered.length;

  const toggleFollow = (name: string) => setFollowedChannels(prev => { const n = new Set(prev); n.has(name) ? n.delete(name) : n.add(name); return n; });
  const toggleLike   = (id: number)   => setLikedVideos(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSave   = (id: number)   => setSavedVideos(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="page-body pb-20">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3a7d56 0%, #6B4FBB 100%)" }}>
                  <Play size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                  Video Library
                </span>
              </div>
              <h1 className="text-4xl font-black">
                Watch.{" "}
                <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Be transformed.
                </span>
              </h1>
              <p className="mt-2 text-sm" style={{ color: "#6A6A88" }}>
                {VIDEOS.length}+ curated Christian videos — worship, sermons, teaching, apologetics &amp; more
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl sm:w-72" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Search size={15} style={{ color: "#4A4A68" }} />
              <input
                type="text"
                aria-label="Search videos"
                placeholder="Search videos, channels..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: "#F2F2F8" }}
              />
              {search && (
                <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={13} style={{ color: "#4A4A68" }} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Featured ────────────────────────────────────────────────────── */}
          <div className="rounded-2xl overflow-hidden mb-10 flex flex-col lg:flex-row" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(58,125,86,0.12)" }}>
            {/* Player */}
            <div className="lg:w-3/5 relative" style={{ aspectRatio: "16/9", minHeight: 240 }}>
              {featuredPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              ) : (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${featured.title}`}
                  onClick={() => setFeaturedPlaying(true)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setFeaturedPlaying(true); }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`}
                    alt={featured.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${featured.youtubeId}/hqdefault.jpg`; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.25)" }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "rgba(58,125,86,0.92)", boxShadow: "0 0 40px rgba(58,125,86,0.5)" }}>
                      <Play size={34} fill="white" style={{ color: "#fff", marginLeft: 4 }} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs font-bold" style={{ background: "rgba(0,0,0,0.85)", color: "#F2F2F8" }}>{featured.duration}</div>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(58,125,86,0.9)", color: "#fff" }}>⭐ Featured</div>
                </div>
              )}
            </div>
            {/* Info */}
            <div className="p-7 lg:w-2/5 flex flex-col justify-center">
              <div className="flex gap-2 mb-3 flex-wrap">
                {featured.tags.map((t) => (
                  <span key={t} className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}>{t}</span>
                ))}
              </div>
              <h2 className="text-xl font-black mb-3 leading-tight" style={{ color: "#F2F2F8" }}>{featured.title}</h2>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{featured.description}</p>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black" style={{ background: `${featured.channelColor}25`, color: featured.channelColor }}>{featured.channelAvatar}</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#E0E0F0" }}>{featured.channel}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{featured.views} views · {featured.year}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setFeaturedPlaying((p) => !p)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #52a876)" }}>
                  <Play size={14} fill="white" /> {featuredPlaying ? "Now Playing" : "Watch Now"}
                </button>
                <a href={`https://www.youtube.com/watch?v=${featured.youtubeId}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}>
                  <Eye size={14} /> YouTube
                </a>
              </div>
            </div>
          </div>

          {/* ── Category Tabs ─────────────────────────────────────────────── */}
          <div className="flex gap-2 flex-wrap mb-8">
            {CATEGORIES.map((cat) => (
              <button type="button" key={cat} onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? "#3a7d56" : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat ? "#fff" : "#6A6A88",
                  border: `1px solid ${activeCategory === cat ? "#3a7d56" : "rgba(255,255,255,0.08)"}`,
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Video Grid ─────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} style={{ color: "#3a7d56" }} />
                  <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>
                    {allFiltered.length === VIDEOS.length
                      ? `${VIDEOS.length} Curated Videos`
                      : `${allFiltered.length} Videos Found`}
                  </h2>
                </div>
                {search || activeCategory !== "All" ? (
                  <button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }}
                    className="text-xs px-3 py-1 rounded-full" style={{ color: "#3a7d56", border: "1px solid rgba(58,125,86,0.3)" }}>
                    Clear filters
                  </button>
                ) : null}
              </div>

              {allFiltered.length === 0 ? (
                <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-3xl mb-3">🎬</p>
                  <p className="font-bold mb-1" style={{ color: "#F2F2F8" }}>No videos found</p>
                  <button type="button" onClick={() => { setActiveCategory("All"); setSearch(""); }} className="text-sm mt-2" style={{ color: "#3a7d56" }}>Clear filters</button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {visibleVideos.map((v) => (
                      <div
                        key={v.id}
                        className="group rounded-xl overflow-hidden cursor-pointer transition-all"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                      >
                        {/* Thumbnail / Player */}
                        <div className="relative" style={{ aspectRatio: "16/9" }}>
                          {playingVideoId === v.id ? (
                            <div className="absolute inset-0">
                              <iframe
                                src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ width: "100%", height: "100%", border: "none" }}
                              />
                              <button type="button" aria-label="Close player"
                                onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null); }}
                                className="absolute top-2 right-2 rounded-full p-1"
                                style={{ background: "rgba(0,0,0,0.7)", color: "#F2F2F8", zIndex: 10 }}>
                                <X size={14} />
                              </button>
                            </div>
                          ) : (
                            <div
                              className="absolute inset-0 cursor-pointer"
                              role="button"
                              tabIndex={0}
                              aria-label={`Play ${v.title}`}
                              onClick={() => setPlayingVideoId(v.id)}
                              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setPlayingVideoId(v.id); }}
                            >
                              <img
                                src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                                alt={v.title}
                                loading="lazy"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(0,0,0,0.3)" }}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(58,125,86,0.9)" }}>
                                  <Play size={18} fill="white" style={{ color: "#fff", marginLeft: 2 }} />
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: "rgba(0,0,0,0.8)", color: "#F2F2F8" }}>{v.duration}</div>
                              <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{ background: `${v.tagColor}20`, color: v.tagColor, border: `1px solid ${v.tagColor}40` }}>
                                {v.tag}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Meta */}
                        <div className="p-3">
                          <h3 className="font-semibold text-sm mb-1.5 leading-snug group-hover:text-[#3a7d56] transition-colors line-clamp-2" style={{ color: "#F2F2F8" }}>
                            {v.title}
                          </h3>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold truncate" style={{ color: v.channelColor }}>{v.channel}</span>
                            <span className="text-xs shrink-0 ml-2" style={{ color: "#4A4A68" }}>{v.views}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button type="button" aria-label={likedVideos.has(v.id) ? "Unlike" : "Like"}
                              onClick={(e) => { e.stopPropagation(); toggleLike(v.id); }}
                              className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                              style={{ background: likedVideos.has(v.id) ? "rgba(236,72,153,0.12)" : "transparent", border: `1px solid ${likedVideos.has(v.id) ? "rgba(236,72,153,0.3)" : "rgba(255,255,255,0.06)"}`, color: likedVideos.has(v.id) ? "#EC4899" : "#6A6A88" }}>
                              <Heart size={11} fill={likedVideos.has(v.id) ? "#EC4899" : "none"} />
                            </button>
                            <button type="button" aria-label={savedVideos.has(v.id) ? "Unsave" : "Save"}
                              onClick={(e) => { e.stopPropagation(); toggleSave(v.id); }}
                              className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                              style={{ background: savedVideos.has(v.id) ? "rgba(58,125,86,0.1)" : "transparent", border: `1px solid ${savedVideos.has(v.id) ? "rgba(58,125,86,0.25)" : "rgba(255,255,255,0.06)"}`, color: savedVideos.has(v.id) ? "#3a7d56" : "#6A6A88" }}>
                              <Bookmark size={11} fill={savedVideos.has(v.id) ? "#3a7d56" : "none"} />
                            </button>
                            <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener noreferrer"
                              aria-label={`Open on YouTube`}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg ml-auto"
                              style={{ color: "#4A4A68", border: "1px solid rgba(255,255,255,0.06)" }}>
                              <Eye size={11} />
                            </a>
                            <button type="button" aria-label="Share"
                              onClick={(e) => { e.stopPropagation(); shareVideo(v.id, v.title); }}
                              className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                              style={{ color: copiedVideo === v.id ? "#3a7d56" : "#4A4A68", border: `1px solid ${copiedVideo === v.id ? "rgba(58,125,86,0.3)" : "rgba(255,255,255,0.06)"}` }}>
                              <Share2 size={11} /> {copiedVideo === v.id && "Copied!"}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  {hasMore && (
                    <div className="mt-8 text-center">
                      <button type="button"
                        onClick={() => setPage((p) => p + 1)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all"
                        style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", color: "#3a7d56" }}>
                        <ChevronDown size={16} />
                        Load More ({allFiltered.length - visibleVideos.length} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ── Sidebar ──────────────────────────────────────────────────── */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: "#3a7d56" }}>Library</h3>
                {[
                  { label: "Total Videos",    value: `${VIDEOS.length}+`  },
                  { label: "Categories",       value: `${CATEGORIES.length - 1}` },
                  { label: "Channels",         value: "100+"               },
                  { label: "Hours of Content", value: "500+"               },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b last:border-0" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <span className="text-sm" style={{ color: "#6A6A88" }}>{s.label}</span>
                    <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Top Channels */}
              <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={15} style={{ color: "#3a7d56" }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Top Channels</h3>
                </div>
                <div className="space-y-3">
                  {CHANNELS.map((ch) => (
                    <div key={ch.name} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0" style={{ background: `${ch.color}20`, color: ch.color, border: `1px solid ${ch.color}30` }}>
                        {ch.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold group-hover:text-[#3a7d56] transition-colors truncate" style={{ color: "#E0E0F0" }}>{ch.name}</p>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>{ch.subscribers} subs · {ch.videos} videos</p>
                      </div>
                      <button type="button" onClick={() => toggleFollow(ch.name)}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 transition-all"
                        style={{ background: followedChannels.has(ch.name) ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.1)", color: "#3a7d56", border: `1px solid ${followedChannels.has(ch.name) ? "rgba(58,125,86,0.4)" : "rgba(58,125,86,0.2)"}` }}>
                        {followedChannels.has(ch.name) ? "✓ Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Worship Radio */}
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.1) 0%, rgba(58,125,86,0.06) 100%)", border: "1px solid rgba(107,79,187,0.2)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 size={16} style={{ color: "#6B4FBB" }} />
                  <h3 className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Worship Radio</h3>
                </div>
                <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>24/7 curated Christian worship music.</p>
                <div className="space-y-2 mb-4">
                  {["What A Beautiful Name — Hillsong", "Goodness of God — Bethel Music", "Oceans — Hillsong UNITED"].map((song, idx) => (
                    <div key={song} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${idx === 0 && radioPlaying ? "animate-pulse" : ""}`}
                        style={{ background: idx === 0 && radioPlaying ? "#3a7d56" : "#4A4A68" }} />
                      <span className="text-xs" style={{ color: idx === 0 && radioPlaying ? "#F2F2F8" : "#4A4A68" }}>{song}</span>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => setRadioPlaying((p) => !p)}
                  className="w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                  style={{ background: "rgba(107,79,187,0.25)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)" }}>
                  {radioPlaying ? <Volume2 size={14} /> : <Play size={14} />}
                  {radioPlaying ? "Playing Worship Radio" : "Open Worship Radio"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
