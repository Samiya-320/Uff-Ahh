const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "🅂🄷🄰🄺🄸🄻 🄱🄾🅂🅂",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস শাকিল রে হাঙ্গা করো😶👻😘",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "help": "Prefix de sala",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "fork2": "𝕆𝕦𝕝𝕒𝕝𝕒𝕝𝕒𝕝𝕒𝕝𝕒𝕝𝕒𝕝𝕒 😱😱🥶🥶",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "🙄🙄🙄": "🙄🙄🙄",
    "tor ball": "~আজকে ইউটিউব এ দেখলাম বাল দিয়েও কেক বানানো যায়🫠😗",
    "Shakil": "উনি এখন মেয়ে নিয়ে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!🫩🙏",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝗠𝗗 𝗦𝗛𝗔𝗞𝗜𝗟 𝗛𝗢𝗦𝗦𝗘𝗡 ☜\nFacebook: https://www.facebook.com/Ax.Shakil.S",
    "admin": "He is 𝗠𝗗 𝗦𝗛𝗔𝗞𝗜𝗟 𝗛𝗢𝗦𝗦𝗘𝗡🥶🫢 আইডি বায়োতে আছে 🙂",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "assalamualaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "fork": "Tora eto jawra kere vai 🙂🙏",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস 𝕊𝕙𝕒𝕜𝕚𝕝 রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মুতার জায়গায় গুতা দেওয়ার ধান্দা😑",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "ami Shakil": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS  🔰𝗦𝗵𝗮𝗸𝗶𝗹_𝗕𝗼𝘁🔰",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "বেশি বড়ো হলে কেটে ফেল🫩🫩🙏",
 "Sala Ami Shakil": "ভুল হয়ছে বস😩মাফ করে দাও🙏💩",
 "আমি শাকিল": "আরে বস😮 তুমি এই গ্রুপে কী করো",
 "Shakil ka chudi": "তোর তো নুনুই নাই 🐸😂 চু*বি কীভাবে 💩",
 "Shakil abal": "তোর বাপ আবাল 💩🫦",
 "Khanki": "তোমার চৌদ্দ গুষ্টি 🙃😘",
 "Khanki magi": "তোমার চৌদ্দ গুষ্টি 🙃😘",
 "murgi": "মুরগির তোর পাছার ভিতরে বাইন চোদ 🙏🐸👉👌",
 "মাফ চা": "🥹বস আমাকে মাফ করে দাও প্লিজ 🙏",
 "তোদের সবাইকে চুদি": "তোর তো নুনুই নাই 🐸😂 চু*বি কীভাবে🐸",
 "Chudi": "তোর তো নুনুই নাই 🐸😂 চু*বি কীভাবে",
 "চুপ কর": "ওকে শাকিল বস😗",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 😛",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Shaki Boss এর ইনবক্সে গুতা দিন😘",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈"
    "kon khane": "বলতে শরম লাগে শাকিল বস কে জিজ্ঞেস করো 🫦🆗"
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
