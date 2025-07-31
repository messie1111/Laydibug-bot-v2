module.exports = {
    config: {
        name: "help",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "help") return message.reply("𝐒𝐚𝐥𝐮𝐭 ✞${userName}✞𝐫𝐞𝐣𝐨𝐢𝐧𝐬 𝐦𝐨𝐧 𝐠𝐫𝐨𝐮𝐩𝐞 𝐝'𝐨𝐭𝐚𝐤𝐮 𝐞𝐭 𝐢𝐧𝐯𝐢𝐭𝐞 𝐭𝐞𝐬 𝐚𝐦𝐢𝐬, 𝐣𝐞 𝐭𝐞 𝐩𝐫𝐨𝐦𝐞𝐭 𝐝𝐞 𝐫𝐞𝐩𝐨𝐧𝐝𝐫𝐞 𝐚 𝐭𝐨𝐮𝐭𝐞 𝐭𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 \n❮⧠❯━━━━━━━━━━❮◆❯\n𝐏𝐨𝐮𝐫 𝐯𝐨𝐢𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐞 𝐝𝐞 𝐜𝐦𝐝𝐬 é𝐜𝐫𝐢𝐭 %𝐡𝐞𝐥𝐩1 𝐨𝐮 %𝐡𝐞𝐥𝐩2\n❮⧠❯━━━━━━━━━━❮◆❯
[🗝]▪𝗟𝗜𝗡𝗞:\n╰╌➤\nhttps://www.facebook.com/profile.php?id=61578718657900/\n❮⧠❯━━━━━━━━━━❮◆❯")
}
};
