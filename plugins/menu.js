/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "👽",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖『𝐓𝐀𝐊𝐀-𝐋𝐈𝐓𝐄』❖*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ᛕ꠸ꪀᧁꪻꪖᛕꪖ࿐*
*❖│▸* *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *[${config.ALWAYS_ONLINE}]*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.1.0*
*┬│▸*
*└──────────────···▸*
  ᛕ꠸ꪀᧁꪻꪖᛕꪖ = Lone Dev
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ꜱᴏɴɢ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.ɪᴍɢ*
*┋* *.Lʏʀɪᴄs*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *🏮EMPIRE TAKA🏮* *❒⁠⁠⁠⁠* 
*┋* *.Fᴀᴍɪʟʏ*
*┋* *.Vᴀᴡᴜʟᴇɴᴄᴇ*
*┋* *.ᴄʜᴀɴɴᴇʟ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ*
*┋* *.ʏᴛᴀ*
*┋* *.ʟᴏʟɪ*
*┋* *.ᴍᴏᴠɪᴇɪɴғᴏ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.Gᴏᴏɢʟᴇ*
*┋* *.ᴡᴇᴀᴛʜᴇʀ*
*┋* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🔞 NSFW-CMD 🔞* *❒⁠⁠⁠⁠* 
*┋*┋* *.
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ*
*┋* *.ᴀɪ*
*┋* *.ʙᴏᴛ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.Aʙᴏᴜᴛ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.𝖱𝖺𝗇𝗄*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟᴇᴛᴇ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.Dᴇᴠ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴋɢᴛᴇᴄʜ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *✝️ GOD-CMD ✝️* *❒⁠⁠⁠⁠* 
*┋* *.ʙɪʙʟᴇ*
*┋* *.ʙɪʙʟᴇʟɪsᴛ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ*
*┋* *.ᴛᴛs*
*┋* *.ᴜʀʟ*
*┋* *.Aɢᴇ*
*┋* *.Cᴏɴᴠᴇʀᴛ*
*┋* *.Tɪɴʏ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋᴇʀᴍ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴄᴀᴛ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ꜰɪɴᴅɴᴀᴍᴇ*
*┋* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*┋* *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*┕───────────────────❒*
🧞‍♂️
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ʀᴀɴᴋ*
*┋* *.Tɪᴍᴇᴢᴏɴᴇ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*┋* *.Dᴀɪʟʏꜰᴀᴄᴛ*
*┋* *.Mɪɴᴜᴛᴏʀ*
*┕───────────────────❒*

┏━━━━━━━━━━━━━━━━━━━
*https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31*
┗━━━━━━━━━━━━━━━━━━━

> *POWERED BY ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
