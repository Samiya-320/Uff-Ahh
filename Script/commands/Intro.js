const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰𝗦𝗵𝗮𝗸𝗶𝗹_𝗕𝗼𝘁🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━┓
┃ 🌟𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎🌟
┣━━━━━━━━━━━━━━━━┫
┃👤𝐍𝐀𝐌𝐄      :𝙎𝙝𝙖𝙠𝙞𝙡
┃🚹𝐆𝐄𝐍𝐃𝐄𝐑    :𝙈𝙖𝙡𝙚
┃🎂𝐀𝐆𝐄       :𝟭𝟴᯽
┃🕌𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝙄𝙨𝙡𝙖𝙢
┃🏫𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 : 𝙎𝙎𝘾 𝟮𝟬𝟮𝟲
┃🏡𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :𝙃𝙤𝙧𝙞𝙣𝙖𝙠𝙪𝙣𝙙𝙖,𝙅𝙝𝙚𝙣𝙖𝙞𝙙𝙝
┣━━━━━━━━━━━━━━━━┫
┃𝐓𝐈𝐊𝐓𝐎𝐊 :@ax.shakil.s
┃📢𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 :t.me/Ax_Shakil
┃🌐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :m.me/61588178231072
┣━━━━━━━━━━━━━━━━┫
┃🕒𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐓𝐈𝐌𝐄 :${time}
┗━━━━━━━━━━━━━━━━┛`,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/MOrYYsJ.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
